import { ComponentResolver } from 'unplugin-vue-components/types';

interface PrimeVueResolverOptions {
    /**
     * import style along with components
     *
     * @default true
     */
    importStyle?: boolean;
    /**
     * import `primeicons' icons
     *
     * requires package `primeicons`
     *
     * @default true
     */
    importIcons?: boolean;
    /**
     * imports a free theme - set theme name here (e.g. saga-blue)
     *
     * @default ''
     */
    importTheme?: string;
    /**
     * prefix for components (e.g. 'P' to resolve Menu from PMenu)
     *
     * @default ''
     */
    prefix?: string;
}
/**
 * Resolver for PrimeVue - If you're using a component with the same tag as an native HTML element (e.g. button) the component must be in uppercase
 *
 * @link https://github.com/primefaces/primevue
 */
declare function PrimeVueResolver(options?: PrimeVueResolverOptions): ComponentResolver;

export { PrimeVueResolver, type PrimeVueResolverOptions };
