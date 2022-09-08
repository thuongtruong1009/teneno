import { ComputedRef, Ref } from 'vue';
export type LayoutKey = 'auth' | 'default' | 'home';
declare module 'D:/OneDrive - VietNam National University - HCM INTERNATIONAL UNIVERSITY/GitHub Project/vitesse-nuxt3/node_modules/nuxt/dist/pages/runtime/composables' {
    interface PageMeta {
        layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>;
    }
}
