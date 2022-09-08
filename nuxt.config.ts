import { defineNuxtConfig } from 'nuxt';

// requireEnvVars();

export default defineNuxtConfig({
    //   ssr: true,
    app: {
        head: {
            title: process.env.npm_package_name || '',
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                {
                    name: 'author',
                    content:
                        'Tran Nguyen Thuong Truong <thuongtruong1009@proton.me>',
                },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'The social network platform where everyone can sharing their feels, thinks or experiences together',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
            style: [],
            script: [],
            noscript: [],
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        },
    },
    imports: {
        dirs: ['icons'],
    },
    loading: { color: 'black' },
    css: ['@/assets/styles/global.css'],
    // router: {
    //     extendRoutes(routes: any, resolve: any) {
    //         routes.push({
    //             name: 'undefined',
    //             path: '*',
    //             component: resolve('@/pages/404.vue'),
    //         });
    //     },
    // },
    modules: [
        '@vueuse/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/color-mode',
        // '@nuxtjs/dotenv',
        [
            '@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
    experimental: {
        reactivityTransform: true,
        viteNode: false,
    },
    colorMode: {
        classSuffix: '',
    },
    // https://github.com/nuxt/framework/issues/6204#issuecomment-1201398080
    hooks: {
        'vite:extendConfig': function (config: any, { isServer }: any) {
            if (isServer) {
                // Workaround for netlify issue
                // https://github.com/nuxt/framework/issues/6204
                config.build.rollupOptions.output.inlineDynamicImports = true;
            }
        },
    },
    build: {
        // transpile:
        //   process.env.npm_lifecycle_script === 'nuxt generate'
        //     ? ['contentful']
        //     : [],

        //https://github.com/nuxt/framework/discussions/1214
        transpile: ['vaadin'],
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => ['vaadin-checkbox'].includes(tag),
        },
    },
});

// function requireEnvVars() {
//   const map = {
//     "Deskree Project URL": process.env.NUXT_DESKREE_BASE_URL,
//     "Stripe secret token": process.env.STRIPE_SECRET,
//   };
//   let ready = true;
//   for (const label in map) {
//     if (!map[label]) {
//       ready = false;
//       console.error(
//         `You must provide a ${label} in .env to start the project (see the Setup Guide for more instructions: https://vueschool.notion.site/Preparation-Guide-cf256a7352704d27bb7946c47907d40e)`
//       );
//     }
//   }

//   if (!ready) process.exit();
// }
