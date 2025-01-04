const manifest = {
	appDir: "_app",
	assets: new Set(["example.json","favicon.png","robots.txt"]),
	mimeTypes: {".json":"application/json",".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-aef9781b.js","imports":["_app/immutable/start-aef9781b.js","_app/immutable/chunks/index-8ee7784d.js","_app/immutable/chunks/singletons-bfaa217e.js","_app/immutable/chunks/index-09dcd3e2.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-853dfe7a.js'),
			() => import('./chunks/1-5203471a.js'),
			() => import('./chunks/2-b1acf28e.js'),
			() => import('./chunks/3-de9040b1.js')
		],
		routes: [
			{
				id: "pptr-api/get-tree.json",
				pattern: /^\/pptr-api\/get-tree\.json$/,
				names: [],
				types: [],
				page: null,
				endpoint: () => import('./chunks/_server.ts-69ff2177.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
