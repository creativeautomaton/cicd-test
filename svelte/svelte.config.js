// import adapter from '@sveltejs/adapter-auto';
import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
import houdini from "houdini-preprocess";
import path from "path";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  // preprocess: preprocess(houdini()),
  // preprocess: [houdini()],
  kit: {
    adapter: adapter({
      // default options are shown
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: true,
    }),
    prerender: {
      // This can be false if you're using a fallback (i.e. SPA mode)
      default: true,
    },
    appDir: "_app",
    files: {
      assets: "static",
      hooks: "src/hooks",
      lib: "src/lib",
      params: "src/params",
      routes: "src/routes",
      serviceWorker: "src/service-worker",
      template: "src/app.html",
    },
  },
};

export default config;

//  Example config options

// import adapter from '@sveltejs/adapter-auto';
// import preprocess from "svelte-preprocess";
// import adapter from "@sveltejs/adapter-static";
//
// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// kit: {
// 	adapter: adapter()
// }

// kit: {
// 		adapter: undefined,
// 		alias: {},
// 		appDir: '_app',
// 		browser: {
// 			hydrate: true,
// 			router: true
// 		},
// 		csp: {
// 			mode: 'auto',
// 			directives: {
// 				'default-src': undefined
// 				// ...
// 			}
// 		},
// 		moduleExtensions: ['.js', '.ts'],
// 		files: {
// 			assets: 'static',
// 			hooks: 'src/hooks',
// 			lib: 'src/lib',
// 			params: 'src/params',
// 			routes: 'src/routes',
// 			serviceWorker: 'src/service-worker',
// 			template: 'src/app.html'
// 		},
// 		inlineStyleThreshold: 0,
// 		methodOverride: {
// 			parameter: '_method',
// 			allowed: []
// 		},
// 		outDir: '.svelte-kit',
// 		package: {
// 			dir: 'package',
// 			emitTypes: true,
// 			// excludes all .d.ts and files starting with _ as the name
// 			exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
// 			files: () => true
// 		},
// 		paths: {
// 			assets: '',
// 			base: ''
// 		},
// 		prerender: {
// 			concurrency: 1,
// 			crawl: true,
// 			default: false,
// 			enabled: true,
// 			entries: ['*'],
// 			onError: 'fail'
// 		},
// 		routes: (filepath) => !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath),
// 		serviceWorker: {
// 			register: true,
// 			files: (filepath) => !/\.DS_Store/.test(filepath)
// 		},
// 		trailingSlash: 'never',
// 		version: {
// 			name: Date.now().toString(),
// 			pollInterval: 0
// 		}
// 	},
// };
//
// export default config;
