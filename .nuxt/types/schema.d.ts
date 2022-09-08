import { NuxtModule } from '@nuxt/schema';
declare module '@nuxt/schema' {
    interface NuxtConfig {
        ['pinia']?: typeof import('@pinia/nuxt').default extends NuxtModule<
            infer O
        >
            ? Partial<O>
            : Record<string, any>;
        ['colorMode']?: typeof import('@nuxtjs/color-mode').default extends NuxtModule<
            infer O
        >
            ? Partial<O>
            : Record<string, any>;
        ['pinia']?: typeof import('@pinia/nuxt').default extends NuxtModule<
            infer O
        >
            ? Partial<O>
            : Record<string, any>;
        ['telemetry']?: typeof import('@nuxt/telemetry').default extends NuxtModule<
            infer O
        >
            ? Partial<O>
            : Record<string, any>;
    }
    interface RuntimeConfig {
        app: {
            baseURL: string;

            buildAssetsDir: string;

            cdnURL: string;
        };
    }
    interface PublicRuntimeConfig {}
}
