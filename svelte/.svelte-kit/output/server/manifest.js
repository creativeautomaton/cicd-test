export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","images/covid-data-bg.jpg","smui-dark.css","smui.css"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".css":"text/css"},
	_: {
		entry: {"file":"start-de913a73.js","imports":["start-de913a73.js","chunks/index-3195bb09.js","chunks/index-37ab4a99.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "about",
				pattern: /^\/about\/?$/,
				names: [],
				types: [],
				path: "/about",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "contact",
				pattern: /^\/contact\/?$/,
				names: [],
				types: [],
				path: "/contact",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "research",
				pattern: /^\/research\/?$/,
				names: [],
				types: [],
				path: "/research",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				id: "api/pages",
				pattern: /^\/api\/pages\/?$/,
				names: [],
				types: [],
				load: () => import('./entries/endpoints/api/pages.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
