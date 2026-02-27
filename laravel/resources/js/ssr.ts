import { createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "vue/server-renderer";
import { createSSRApp, DefineComponent, h } from "vue";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createServer(
    (page) =>
        createInertiaApp({
            page,
            render: renderToString,
            resolve: (name) =>
                resolvePageComponent(
                    `./pages/${name}.vue`,
                    import.meta.glob<DefineComponent>("./pages/**/*.vue"),
                ),
            setup({ App, props, plugin }) {
                return createSSRApp({
                    render: () => h(App, props),
                }).use(plugin);
            },
        }),
    {
        cluster: true,
    },
);
