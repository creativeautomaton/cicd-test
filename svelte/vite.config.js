import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};
//
export default config;

// vite.config.js / vite.config.ts
// import { VitePWA } from 'vite-plugin-pwa'
//
// export default {
//   plugins: [
//     VitePWA()
//   ]
// }
//
// import { VitePWA } from 'vite-plugin-pwa'
// export default({
//   plugins: [
//     VitePWA({ registerType: 'autoUpdate' })
//   ]
// })
