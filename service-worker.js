if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,s,n)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const r={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return i;case"module":return r;default:return e(c)}})).then(e=>{const c=n(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-test"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/.htaccess",revision:"06d0c9fb7d31c7a311c0fc61c17d69e7"},{url:"/app-logo-128x128.png",revision:"805b0a66d63db95a76ddda23e3a8c12f"},{url:"/css/1.3201874f.css",revision:"bccaac644406b4a630b8b503acecce5f"},{url:"/css/3.98923035.css",revision:"7b0f68510ac656c2b4ae8599b73950a5"},{url:"/css/app.0e433876.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"/css/vendor.c1b5324a.css",revision:"d6e1272e20de90bd8bf95528709b737e"},{url:"/css/vendor.c1b5324a.css.gz",revision:"7411cbcb72e4e2f514ef7e79cc7644cf"},{url:"/favicon.ico",revision:"04671eaea0c2fc94e31c5ab76ec67d08"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.1811d381.woff",revision:"84a37de85c17f186652a179b1145392f"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.fa3334fe.woff2",revision:"703cf8f274fbb265d49c6262825780e1"},{url:"/fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcY.5a5cd65b.woff",revision:"75c6195911fdd7deb4ffb288bebbad86"},{url:"/fonts/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUcel5euIg.1fe2097e.woff2",revision:"8d0076155fb5e880035ec3b451597599"},{url:"/icons/apple-icon-120x120.png",revision:"bde75c95c26cbe407d8c3a51149c9047"},{url:"/icons/apple-icon-152x152.png",revision:"1e6959a9778d40656217fe5eb7e0b7aa"},{url:"/icons/apple-icon-167x167.png",revision:"e776afac4479ee2ad8d6a0397661bf09"},{url:"/icons/apple-icon-180x180.png",revision:"37ab9045dbdc0edf12ea59b3772e19f9"},{url:"/icons/ar.png",revision:"c4ca30ee15831d4b43a593e85e4e754e"},{url:"/icons/az (2).png",revision:"ff0f7a13e4d1e741d2f0ca005bd1d63b"},{url:"/icons/az.png",revision:"c65685799f347ebc82676e0b37f73e82"},{url:"/icons/eng.png",revision:"23a2323cbc444608aa66c44f6f11814e"},{url:"/icons/favicon-16x16.png",revision:"65d8571ec508d854ae4132e6540c476a"},{url:"/icons/favicon-32x32.png",revision:"7233d85b329c161211830b1b30fdf0ec"},{url:"/icons/favicon-96x96.png",revision:"c7428f8eba0499407710120fea46ead7"},{url:"/icons/icon-128x128.png",revision:"805b0a66d63db95a76ddda23e3a8c12f"},{url:"/icons/icon-192x192.png",revision:"3f5de7654b25e5f1640662111d28b490"},{url:"/icons/icon-256x256.png",revision:"15bc9eca3421a7d5a0599a5fb39fe7a8"},{url:"/icons/icon-384x384.png",revision:"f309ab32f7ba3a2d3f50d05ba3d2aaa2"},{url:"/icons/icon-512x512.png",revision:"c8fdfe20437ccd115ee07cb684685ded"},{url:"/icons/ms-icon-144x144.png",revision:"6624870bb64b1a562e8438e57cdc636a"},{url:"/icons/oktay.jpg",revision:"f027ad98a312f1a3227431003d69ea57"},{url:"/icons/olink.png",revision:"81b58327b8d5c84c990cb77abf8d118c"},{url:"/icons/rs.png",revision:"7d85333c1bd4790d2dfa0f5ae89fed70"},{url:"/icons/safari-pinned-tab.svg",revision:"ba58d8b825312a31114fb91484dadbeb"},{url:"/icons/tr.png",revision:"5db54850c33c95c522f08b64a544729f"},{url:"/icons/uk.png",revision:"526d147605061a058eaea6b67701fd0a"},{url:"/img/25150050.8137169a.png",revision:"4ec19229340c2a85462d5197592b53ea"},{url:"/index.html",revision:"349d50273957e0400035ef7c28ba2bd3"},{url:"/js/1.d8a5a31e.js",revision:"372dbab67cba332e5f6538daaf5ed6d5"},{url:"/js/3.29513523.js",revision:"0f735852cfa65392993a3253a6f25a09"},{url:"/js/4.d13458fa.js",revision:"5df1528dbb74fec8ede2d020ee1e868d"},{url:"/js/4.d13458fa.js.gz",revision:"2b58fe753908422a46c408b70f31a391"},{url:"/js/5.aa801523.js",revision:"6e970d4b27127f21b46e06c11661439c"},{url:"/js/5.aa801523.js.gz",revision:"a8a8e4fdbe9faa9fad98ef30b9d3d06e"},{url:"/js/6.6049cb74.js",revision:"aec1fb15537569dec84e06f0ddf9c1cd"},{url:"/js/7.c53093c6.js",revision:"c7141534f4a7522839fae2aa1790155e"},{url:"/js/7.c53093c6.js.gz",revision:"9a7eb0346cce667c08050bb8c73eb650"},{url:"/js/app.081dcace.js",revision:"d02bd9aab35f44c6b9a4b80f7bc1ee7d"},{url:"/js/vendor.db8e0319.js",revision:"a94bd9b38a8257564fb98d533f49ebda"},{url:"/js/vendor.db8e0319.js.gz",revision:"49f1e34c8474a8451760b9d5176c4c33"},{url:"/manifest.json",revision:"0d214c1cee2a65aeed3fc97f7c90b8c9"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
