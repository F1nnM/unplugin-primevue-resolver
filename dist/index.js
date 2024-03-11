"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimeVueResolver = void 0;
const components = [
    'Accordion',
    'AccordionTab',
    'AutoComplete',
    'Avatar',
    'AvatarGroup',
    'Badge',
    'BlockUI',
    'Breadcrumb',
    'Button',
    'Calendar',
    'Card',
    'Carousel',
    'CascadeSelect',
    'Chart',
    'Checkbox',
    'Chip',
    'Chips',
    'ColorPicker',
    'Column',
    'ColumnGroup',
    // 'ConfirmDialog',
    // 'ConfirmPopup',
    // These must be registered globally in order for the confirm service to work properly
    'ContextMenu',
    'DataTable',
    'DataView',
    'DataViewLayoutOptions',
    'DeferredContent',
    'Dialog',
    'Divider',
    'Dock',
    'Dropdown',
    'Editor',
    'Fieldset',
    'FileUpload',
    'FullCalendar',
    'Galleria',
    'Image',
    'InlineMessage',
    'Inplace',
    'InputMask',
    'InputNumber',
    'InputSwitch',
    'InputText',
    'Knob',
    'Listbox',
    'MegaMenu',
    'Menu',
    'Menubar',
    'Message',
    'MultiSelect',
    'OrderList',
    'OrganizationChart',
    'OverlayPanel',
    'Paginator',
    'Panel',
    'PanelMenu',
    'Password',
    'PickList',
    'ProgressBar',
    'ProgressSpinner',
    'RadioButton',
    'Rating',
    'Row',
    'ScrollPanel',
    'ScrollTop',
    'SelectButton',
    'Sidebar',
    'Skeleton',
    'Slider',
    'SpeedDial',
    'SplitButton',
    'Splitter',
    'SplitterPanel',
    'Steps',
    'TabMenu',
    'TabPanel',
    'TabView',
    'Tag',
    'Terminal',
    'TerminalService',
    'Textarea',
    'TieredMenu',
    'Toolbar',
    // 'Tooltip',
    // Tooltip must be registered globally in order for the tooltip service to work properly
    'Tree',
    'TreeSelect',
    'TreeTable',
    'TriStateCheckbox',
    'VirtualScroller',
];
/**
 * Resolver for PrimeVue - If you're using a component with the same tag as an native HTML element (e.g. button) the component must be in uppercase
 *
 * @link https://github.com/primefaces/primevue
 */
function PrimeVueResolver(options = {}) {
    return {
        type: 'component',
        resolve: (name) => {
            const sideEffects = [];
            if (options.importStyle)
                sideEffects.push('primevue/resources/primevue.min.css');
            if (options.importIcons)
                sideEffects.push('primeicons/primeicons.css');
            if (options.importTheme) {
                sideEffects.push(`primevue/resources/themes/${options.importTheme}/theme.css`);
            }
            if (options.prefix) {
                if (!name.startsWith(options.prefix))
                    return;
                name = name.substring(options.prefix.length);
            }
            if (components.includes(name)) {
                return {
                    from: `primevue/${name.toLowerCase()}`,
                    sideEffects,
                };
            }
        },
    };
}
exports.PrimeVueResolver = PrimeVueResolver;
