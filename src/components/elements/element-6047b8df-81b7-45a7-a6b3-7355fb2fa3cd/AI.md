---
name: ww-progress-bar
description: Displays a customizable progress bar with adjustable color and value, featuring an optional label that can be positioned inside the bar or as a separate element.
keywords:
  - progress bar
  - customizable color
  - progress value
  - label display
  - gradient support
  - ww-text
  - progression label
  - component properties
  - default settings
  - children components
---

#### ww-progress-bar

Renders a progress bar with customizable color and value, with optional label positioning.

Properties:
- value: number - Current progress value (0-100). Default: 65
- progressBarColor: string | null - Progress bar color, supports gradients. Default: "#099AF2"
- label: 'element' | 'progress' | 'none' - Label display mode. Default: "progress"

Children:
- progressionLabel: ww-text - Label component for progress display

Example:
{"tag":"ww-progress-bar","props":{"default":{"label":"element","value":84,"embedLabel":true,"progressBarColor":"#3b82f6"}},"styles":{"default":{"height":"24px","padding":"0px 0px","minWidth":"120px","borderRadius":"99px","backgroundColor":"#F4F4F4"}},"children":{"progressionLabel":{"tag":"ww-text","props":{"default":{"tag":"p","text":"84%"}},"styles":{"default":{"zIndex":1,"color":"#FFFFFF","fontSize":"14px","lineHeight":"18px","wordSpacing":"0px","letterSpacing":"0px","textDecoration":"none","textDecorationStyle":"solid"}}}}}

Events:
- change: { value: number } - Triggered when the progress value changes

Variables:
- value: number - Current progress value, defaults to content.value or 0
