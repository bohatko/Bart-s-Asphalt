import { defineStore } from 'pinia';
import { getInheritedConfiguration } from '@/_common/helpers/configuration/configuration';
 
export const useComponentBasesStore = defineStore('componentBases', () => {
    let configurations;
    /* wwFront:start */
    // eslint-disable-next-line no-undef
    configurations = {'plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa': getInheritedConfiguration({ ...require('@/components/plugins/plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa/ww-config.js').default, name: 'plugin-1fa0dd68-5069-436c-9a7d-3b54c340f1fa' }),
'plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186': getInheritedConfiguration({ ...require('@/components/plugins/plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186/ww-config.js').default, name: 'plugin-f9ef41c3-1c53-4857-855b-f2f6a40b7186' }),
'section-99586bd3-2b15-4d6b-a025-6a50d07ca845': getInheritedConfiguration({ ...require('@/components/sections/section-99586bd3-2b15-4d6b-a025-6a50d07ca845/ww-config.js').default, name: 'section-99586bd3-2b15-4d6b-a025-6a50d07ca845' }),
'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d': getInheritedConfiguration({ ...require('@/components/sections/section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d/ww-config.js').default, name: 'section-ef0ecc71-9a59-4eab-94b0-b36d66d3d61d' }),
'wwobject-21881619-a984-4847-81a9-922c3dbb5853': getInheritedConfiguration({ ...require('@/components/elements/element-21881619-a984-4847-81a9-922c3dbb5853/ww-config.js').default, name: 'wwobject-21881619-a984-4847-81a9-922c3dbb5853' }),
'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba': getInheritedConfiguration({ ...require('@/components/elements/element-aeb78b9a-6fb6-4c49-931d-faedcfad67ba/ww-config.js').default, name: 'wwobject-aeb78b9a-6fb6-4c49-931d-faedcfad67ba' }),
'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b': getInheritedConfiguration({ ...require('@/components/elements/element-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b/ww-config.js').default, name: 'wwobject-fd8c482f-532c-4aeb-a7ae-6904a6b62a1b' }),
'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65': getInheritedConfiguration({ ...require('@/components/elements/element-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65/ww-config.js').default, name: 'wwobject-1ba25bdf-dee9-4e0e-a0b8-b3f3128c3b65' }),
'wwobject-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488': getInheritedConfiguration({ ...require('@/components/elements/element-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488/ww-config.js').default, name: 'wwobject-a6cb6a4d-6af7-4cd6-b530-a15d9ec64488' }),
'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5': getInheritedConfiguration({ ...require('@/components/elements/element-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5/ww-config.js').default, name: 'wwobject-9ae1fce8-2e31-4bfd-a4d2-0450235bdfd5' }),
'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da': getInheritedConfiguration({ ...require('@/components/elements/element-0d3e75d1-9e77-44cb-a272-8b0825fbc5da/ww-config.js').default, name: 'wwobject-0d3e75d1-9e77-44cb-a272-8b0825fbc5da' }),
'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834': getInheritedConfiguration({ ...require('@/components/elements/element-69d0b3ef-b265-494c-8cd1-874da4aa1834/ww-config.js').default, name: 'wwobject-69d0b3ef-b265-494c-8cd1-874da4aa1834' }),
'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63': getInheritedConfiguration({ ...require('@/components/elements/element-3a7d6379-12d3-4387-98ff-b332bb492a63/ww-config.js').default, name: 'wwobject-3a7d6379-12d3-4387-98ff-b332bb492a63' }),
'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1': getInheritedConfiguration({ ...require('@/components/elements/element-b783dc65-d528-4f74-8c14-e27c934c39b1/ww-config.js').default, name: 'wwobject-b783dc65-d528-4f74-8c14-e27c934c39b1' }),
'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15': getInheritedConfiguration({ ...require('@/components/elements/element-83d890fb-84f9-4386-b459-fb4be89a8e15/ww-config.js').default, name: 'wwobject-83d890fb-84f9-4386-b459-fb4be89a8e15' }),
'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214': getInheritedConfiguration({ ...require('@/components/elements/element-6f8796b1-8273-498d-95fc-7013b7c63214/ww-config.js').default, name: 'wwobject-6f8796b1-8273-498d-95fc-7013b7c63214' }),
'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad': getInheritedConfiguration({ ...require('@/components/elements/element-d7904e9d-fc9a-4d80-9e32-728e097879ad/ww-config.js').default, name: 'wwobject-d7904e9d-fc9a-4d80-9e32-728e097879ad' }),
'wwobject-6047b8df-81b7-45a7-a6b3-7355fb2fa3cd': getInheritedConfiguration({ ...require('@/components/elements/element-6047b8df-81b7-45a7-a6b3-7355fb2fa3cd/ww-config.js').default, name: 'wwobject-6047b8df-81b7-45a7-a6b3-7355fb2fa3cd' }),
'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82': getInheritedConfiguration({ ...require('@/components/elements/element-59dca300-db78-42e4-a7a6-0cbf22d3cc82/ww-config.js').default, name: 'wwobject-59dca300-db78-42e4-a7a6-0cbf22d3cc82' }),
'wwobject-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb': getInheritedConfiguration({ ...require('@/components/elements/element-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb/ww-config.js').default, name: 'wwobject-d2eeb897-ad95-49e4-8394-fe3f5c9a81fb' }),
'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff': getInheritedConfiguration({ ...require('@/components/elements/element-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff/ww-config.js').default, name: 'wwobject-9ecb2cfc-cef7-4be8-b736-3e17a3b7e9ff' }),
'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340': getInheritedConfiguration({ ...require('@/components/elements/element-1b1e2173-9b78-42cc-a8ee-a6167caea340/ww-config.js').default, name: 'wwobject-1b1e2173-9b78-42cc-a8ee-a6167caea340' }),
'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0': getInheritedConfiguration({ ...require('@/components/elements/element-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0/ww-config.js').default, name: 'wwobject-deb10a01-5eef-4aa1-9017-1b51c2ad6fd0' })};
    /* wwFront:end */
 
    return {
        configurations,
     };
});
