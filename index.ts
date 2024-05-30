import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components/types'

const components = [
  'Accordion',
  'AccordionTab',
  //'AnimateOnScroll',
  // AnimateOnScroll is a directive that must be installed globally
  'AutoComplete',
  'Avatar',
  'AvatarGroup',
  'Badge',
  'BlockUI',
  'Breadcrumb',
  'Button',
  'ButtonGroup',
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
  'ConfirmDialog',
  'ConfirmPopup',
  // The ConfirmationService must be installed globally
  'ContextMenu',
  'DataTable',
  'DataView',
  'DataViewLayoutOptions',
  'DeferredContent',
  'Dialog',
  'Divider',
  'Dock',
  'Dropdown',
  'DynamicDialog',
  // The DialogService must be installed globally
  'Editor',
  'Fieldset',
  'FileUpload',
  'FloatLabel',
  //'FocusTrap',
  // FocusTrap is a directive that must be installed globally
  'FullCalendar',
  'Galleria',
  'IconField',
  'Image',
  'InlineMessage',
  'Inplace',
  'InputGroup',
  'InputGroupAddon',
  'InputIcon',
  'InputMask',
  'InputNumber',
  'InputOtp',
  'InputSwitch',
  'InputText',
  'Knob',
  'Listbox',
  'MegaMenu',
  'Menu',
  'Menubar',
  'Message',
  'MeterGroup',
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
  //'Ripple',
  // Ripple is a directive that must be installed globally
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
  'Stepper',
  'StepperPanel',
  'Steps',
  //'StyleClass',
  // StyleClass is a directive that must be installed globally
  'TabMenu',
  'TabPanel',
  'TabView',
  'Tag',
  'Terminal',
  'TerminalService',
  'Textarea',
  'TieredMenu',
  'Timeline',
  'Toast',
  // The ToastService must be installed globally
  'ToggleButton',
  'Toolbar',
  // 'Tooltip',
  // Tooltips are a directive that must be installed globally
  'Tree',
  'TreeSelect',
  'TreeTable',
  'TriStateCheckbox',
  'VirtualScroller',
]

export interface PrimeVueResolverOptions {
  /**
   * import style along with components
   *
   * @default true
   */
  importStyle?: boolean
  /**
   * import `primeicons' icons
   *
   * requires package `primeicons`
   *
   * @default true
   */
  importIcons?: boolean
  /**
   * imports a free theme - set theme name here (e.g. saga-blue)
   *
   * @default ''
   */
  importTheme?: string
  /**
   * prefix for components (e.g. 'P' to resolve Menu from PMenu)
   *
   * @default ''
   */
  prefix?: string
}

/**
 * Resolver for PrimeVue - If you're using a component with the same tag as an native HTML element (e.g. button) the component must be in uppercase
 *
 * @link https://github.com/primefaces/primevue
 */
export function PrimeVueResolver(options: PrimeVueResolverOptions = {}): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      const sideEffects: SideEffectsInfo = []

      if (options.importStyle)
        sideEffects.push('primevue/resources/primevue.min.css')

      if (options.importIcons)
        sideEffects.push('primeicons/primeicons.css')

      if (options.importTheme) {
        sideEffects.push(
          `primevue/resources/themes/${options.importTheme}/theme.css`,
        )
      }

      if (options.prefix) {
        if (!name.startsWith(options.prefix))
          return

        name = name.substring(options.prefix.length)
      }

      if (components.includes(name)) {
        return {
          from: `primevue/${name.toLowerCase()}`,
          sideEffects,
        }
      }
    },
  }
}
