<template>
  <div class="ww-datagrid" :class="{ editing: isEditing }" :style="cssVars">
    <ag-grid-vue
      :rowData="rowData"
      :columnDefs="columnDefs"
      :defaultColDef="defaultColDef"
      :domLayout="content.layout === 'auto' ? 'autoHeight' : 'normal'"
      :style="style"
      :rowSelection="rowSelection"
      :selection-column-def="{ pinned: true }"
      :theme="theme"
      :getRowId="getRowId"
      :pagination="content.pagination"
      :paginationPageSize="content.paginationPageSize || 10"
      :paginationPageSizeSelector="false"
      :suppressMovableColumns="!content.movableColumns"
      :columnHoverHighlight="content.columnHoverHighlight"
      @grid-ready="onGridReady"
      @row-selected="onRowSelected"
      @selection-changed="onSelectionChanged"
      @cell-value-changed="onCellValueChanged"
    >
    </ag-grid-vue>
  </div>
</template>

<script>
import { shallowRef } from "vue";
import { AgGridVue } from "ag-grid-vue3";
import {
  AllCommunityModule,
  ModuleRegistry,
  themeQuartz,
} from "ag-grid-community";
import ActionCellRenderer from "./components/ActionCellRenderer.vue";
import ImageCellRenderer from "./components/ImageCellRenderer.vue";
import WewebCellRenderer from "./components/WewebCellRenderer.vue";

// TODO: maybe register less modules
// TODO: maybe register modules per grid instead of globally
ModuleRegistry.registerModules([AllCommunityModule]);

export default {
  components: {
    AgGridVue,
    ActionCellRenderer,
    ImageCellRenderer,
    WewebCellRenderer,
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
  },
  emits: ["trigger-event", "update:content:effect"],
  setup(props, ctx) {
    const { resolveMappingFormula } = wwLib.wwFormula.useFormula();

    const gridApi = shallowRef(null);
    const { value: selectedRows, setValue: setSelectedRows } =
      wwLib.wwVariable.useComponentVariable({
        uid: props.uid,
        name: "selectedRows",
        type: "array",
        defaultValue: [],
        readonly: true,
      });

    const onGridReady = (params) => {
      gridApi.value = params.api;
    };
    const onRowSelected = (event) => {
      const name = event.node.isSelected() ? "rowSelected" : "rowDeselected";
      ctx.emit("trigger-event", {
        name,
        event: { row: event.data },
      });
    };

    const onSelectionChanged = (event) => {
      if (!gridApi.value) return;
      const selected = gridApi.value.getSelectedRows() || [];
      setSelectedRows(selected);
    };


    return {
      resolveMappingFormula,
      onGridReady,
      onRowSelected,
      onSelectionChanged,
      gridApi,
    };
  },
  computed: {
    rowData() {
      const data = wwLib.wwUtils.getDataFromCollection(this.content.rowData);
      return Array.isArray(data) ? data ?? [] : [];
    },
    defaultColDef() {
      return {
        editable: false,
        resizable: this.content.resizableColumns,
      };
    },
    columnDefs() {
      return this.content.columns.map((col) => {
        const minWidth =
          !col.minWidth || col.minWidth === "auto"
            ? null
            : wwLib.wwUtils.getLengthUnit(col.minWidth)?.[0];
        const maxWidth =
          !col.maxWidth || col.maxWidth === "auto"
            ? null
            : wwLib.wwUtils.getLengthUnit(col.maxWidth)?.[0];
        const width =
          !col.width || col.width === "auto" || col.widthAlgo === "flex"
            ? null
            : wwLib.wwUtils.getLengthUnit(col.width)?.[0];
        const flex = col.widthAlgo === "flex" ? col.flex ?? 1 : null;
        const commonProperties = {
          minWidth,
          maxWidth,
          pinned: col.pinned === "none" ? false : col.pinned,
          width,
          flex,
        };
        switch (col.cellDataType) {
          case "action": {
            return {
              ...commonProperties,
              headerName: col.headerName,
              cellRenderer: "ActionCellRenderer",
              cellRendererParams: {
                name: col.actionName,
                label: col.actionLabel,
                trigger: this.onActionTrigger,
                withFont: !!this.content.actionFont,
              },
              sortable: false,
              filter: false,
            };
          }
          case "custom":
            return {
              ...commonProperties,
              headerName: col.headerName,
              field: col.field,
              cellRenderer: "WewebCellRenderer",
              cellRendererParams: {
                containerId: col.containerId,
              },
              sortable: col.sortable,
              filter: col.filter,
            };
          case "image": {
            return {
              ...commonProperties,
              headerName: col.headerName,
              field: col.field,
              cellRenderer: "ImageCellRenderer",
              cellRendererParams: {
                width: col.imageWidth,
                height: col.imageHeight,
              },
            };
          }
          default: {
            const result = {
              ...commonProperties,
              headerName: col.headerName,
              field: col.field,
              sortable: col.sortable,
              filter: col.filter,
              editable: col.editable,
            };
            if (col.useCustomLabel) {
              result.valueFormatter = (params) => {
                return this.resolveMappingFormula(
                  col.displayLabelFormula,
                  params.value
                );
              };
            }
            return result;
          }
        }
      });
    },
    rowSelection() {
      if (this.content.rowSelection === "multiple") {
        return { mode: "multiRow", checkboxes: true };
      } else if (this.content.rowSelection === "single") {
        return { mode: "singleRow", checkboxes: true };
      } else {
        return {
          mode: "singleRow",
          checkboxes: false,
          isRowSelectable: () => false,
        };
      }
    },
    style() {
      if (this.content.layout === "auto") return {};
      return {
        height: this.content.height || "400px",
      };
    },
    cssVars() {
      return {
        "--ww-data-grid_action-backgroundColor":
          this.content.actionBackgroundColor,
        "--ww-data-grid_action-color": this.content.actionColor,
        "--ww-data-grid_action-padding": this.content.actionPadding,
        "--ww-data-grid_action-border": this.content.actionBorder,
        "--ww-data-grid_action-borderRadius": this.content.actionBorderRadius,
        ...(this.content.actionFont
          ? { "--ww-data-grid_action-font": this.content.actionFont }
          : {
              "--ww-data-grid_action-fontSize": this.content.actionFontSize,
              "--ww-data-grid_action-fontFamily": this.content.actionFontFamily,
              "--ww-data-grid_action-fontWeight": this.content.actionFontWeight,
              "--ww-data-grid_action-fontStyle": this.content.actionFontStyle,
              "--ww-data-grid_action-lineHeight": this.content.actionLineHeight,
            }),
      };
    },
    theme() {
      return themeQuartz.withParams({
        headerBackgroundColor: this.content.headerBackgroundColor,
        headerTextColor: this.content.headerTextColor,
        headerFontSize: this.content.headerFontSize,
        headerFontFamily: this.content.headerFontFamily,
        headerFontWeight: this.content.headerFontWeight,
        borderColor: this.content.borderColor,
        cellTextColor: this.content.cellColor,
        cellFontFamily: this.content.cellFontFamily,
        dataFontSize: this.content.cellFontSize,
        oddRowBackgroundColor: this.content.rowAlternateColor,
        backgroundColor: this.content.rowBackgroundColor,
        rowHoverColor: this.content.rowHoverColor,
        selectedRowBackgroundColor: this.content.selectedRowBackgroundColor,
        rowVerticalPaddingScale: this.content.rowVerticalPaddingScale || 1,
        menuBackgroundColor: this.content.menuBackgroundColor,
        menuTextColor: this.content.menuTextColor,
        columnHoverColor: this.content.columnHoverColor,
        foregroundColor: this.content.textColor,
      });
    },
    isEditing() {
      // eslint-disable-next-line no-unreachable
      return false;
    },
  },
  methods: {
    getRowId(params) {
      return this.resolveMappingFormula(this.content.idFormula, params.data);
    },
    onActionTrigger(event) {
      this.$emit("trigger-event", {
        name: "action",
        event,
      });
    },
    onCellValueChanged(event) {
      this.$emit("trigger-event", {
        name: "cellValueChanged",
        event: {
          oldValue: event.oldValue,
          newValue: event.newValue,
          columnId: event.column.getColId(),
          row: event.data,
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.ww-datagrid {
  position: relative;
}
</style>
