"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var primevue_resolver_exports = {};
__export(primevue_resolver_exports, {
  PrimeVueResolver: () => PrimeVueResolver
});
module.exports = __toCommonJS(primevue_resolver_exports);
var components = [
  "Accordion",
  "AccordionTab",
  //'AnimateOnScroll',
  // AnimateOnScroll is a directive that must be installed globally
  "AutoComplete",
  "Avatar",
  "AvatarGroup",
  "Badge",
  "BlockUI",
  "Breadcrumb",
  "Button",
  "Calendar",
  "Card",
  "Carousel",
  "CascadeSelect",
  "Chart",
  "Checkbox",
  "Chip",
  "Chips",
  "ColorPicker",
  "Column",
  "ColumnGroup",
  "ConfirmDialog",
  "ConfirmPopup",
  // The ConfirmationService must be installed globally
  "ContextMenu",
  "DataTable",
  "DataView",
  "DataViewLayoutOptions",
  "DeferredContent",
  "Dialog",
  "Divider",
  "Dock",
  "Dropdown",
  "DynamicDialog",
  // The DialogService must be installed globally
  "Editor",
  "Fieldset",
  "FileUpload",
  "FloatLabel",
  //'FocusTrap',
  // FocusTrap is a directive that must be installed globally
  "FullCalendar",
  "Galleria",
  "IconField",
  "Image",
  "InlineMessage",
  "Inplace",
  "InputGroup",
  "InputGroupAddon",
  "InputIcon",
  "InputMask",
  "InputNumber",
  "InputOtp",
  "InputSwitch",
  "InputText",
  "Knob",
  "Listbox",
  "MegaMenu",
  "Menu",
  "Menubar",
  "Message",
  "MeterGroup",
  "MultiSelect",
  "OrderList",
  "OrganizationChart",
  "OverlayPanel",
  "Paginator",
  "Panel",
  "PanelMenu",
  "Password",
  "PickList",
  "ProgressBar",
  "ProgressSpinner",
  "RadioButton",
  "Rating",
  //'Ripple',
  // Ripple is a directive that must be installed globally
  "Row",
  "ScrollPanel",
  "ScrollTop",
  "SelectButton",
  "Sidebar",
  "Skeleton",
  "Slider",
  "SpeedDial",
  "SplitButton",
  "Splitter",
  "SplitterPanel",
  "Stepper",
  "StepperPanel",
  "Steps",
  //'StyleClass',
  // StyleClass is a directive that must be installed globally
  "TabMenu",
  "TabPanel",
  "TabView",
  "Tag",
  "Terminal",
  "TerminalService",
  "Textarea",
  "TieredMenu",
  "Timeline",
  "Toast",
  // The ToastService must be installed globally
  "ToggleButton",
  "Toolbar",
  // 'Tooltip',
  // Tooltips are a directive that must be installed globally
  "Tree",
  "TreeSelect",
  "TreeTable",
  "TriStateCheckbox",
  "VirtualScroller"
];
function PrimeVueResolver(options = {}) {
  return {
    type: "component",
    resolve: (name) => {
      const sideEffects = [];
      if (options.importStyle)
        sideEffects.push("primevue/resources/primevue.min.css");
      if (options.importIcons)
        sideEffects.push("primeicons/primeicons.css");
      if (options.importTheme) {
        sideEffects.push(
          `primevue/resources/themes/${options.importTheme}/theme.css`
        );
      }
      if (options.prefix) {
        if (!name.startsWith(options.prefix))
          return;
        name = name.substring(options.prefix.length);
      }
      if (components.includes(name)) {
        return {
          from: `primevue/${name.toLowerCase()}`,
          sideEffects
        };
      }
    }
  };
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PrimeVueResolver
});
