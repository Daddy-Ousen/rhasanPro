import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Dr3J1ABR.mjs';
import { manifest } from './manifest_B3sYS2fP.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/chat.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/credentials.astro.mjs');
const _page5 = () => import('./pages/experience.astro.mjs');
const _page6 = () => import('./pages/preview-dark.astro.mjs');
const _page7 = () => import('./pages/preview-light.astro.mjs');
const _page8 = () => import('./pages/projects/hermes.astro.mjs');
const _page9 = () => import('./pages/projects/ledgerbuddy-ai.astro.mjs');
const _page10 = () => import('./pages/projects/oggro-tech.astro.mjs');
const _page11 = () => import('./pages/projects.astro.mjs');
const _page12 = () => import('./pages/skills.astro.mjs');
const _page13 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/chat.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/credentials.astro", _page4],
    ["src/pages/experience.astro", _page5],
    ["src/pages/preview-dark.astro", _page6],
    ["src/pages/preview-light.astro", _page7],
    ["src/pages/projects/hermes.astro", _page8],
    ["src/pages/projects/ledgerbuddy-ai.astro", _page9],
    ["src/pages/projects/oggro-tech.astro", _page10],
    ["src/pages/projects/index.astro", _page11],
    ["src/pages/skills.astro", _page12],
    ["src/pages/index.astro", _page13]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "54514e6c-3e9d-4a39-aecc-3aa37debce82",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
