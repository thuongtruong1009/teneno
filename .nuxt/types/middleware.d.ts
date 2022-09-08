import type { NavigationGuard } from 'vue-router';
export type MiddlewareKey = string;
declare module 'D:/OneDrive - VietNam National University - HCM INTERNATIONAL UNIVERSITY/GitHub Project/vitesse-nuxt3/node_modules/nuxt/dist/pages/runtime/composables' {
    interface PageMeta {
        middleware?:
            | MiddlewareKey
            | NavigationGuard
            | Array<MiddlewareKey | NavigationGuard>;
    }
}
