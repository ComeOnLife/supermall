(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);b&&b(e);while(d.length)d.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-750b1ee8":"f9c4ad0d","chunk-5d59d851":"2d91c1f5","chunk-97e3ecaa":"e3133678","chunk-39d5e3df":"6518306f","chunk-6598e47b":"9546063f","chunk-79760200":"0eca06b5","chunk-a61b7d20":"ce3a9aa3"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-750b1ee8":1,"chunk-5d59d851":1,"chunk-97e3ecaa":1,"chunk-39d5e3df":1,"chunk-6598e47b":1,"chunk-79760200":1,"chunk-a61b7d20":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-750b1ee8":"069def7e","chunk-5d59d851":"4da047ca","chunk-97e3ecaa":"85bb9ca0","chunk-39d5e3df":"3e86c067","chunk-6598e47b":"66791720","chunk-79760200":"80d53b47","chunk-a61b7d20":"e4f54d98"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=e,b.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],b.parentNode.removeChild(b),n(c)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(b);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[t]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"1f92":function(t,e,n){t.exports=n.p+"img/cart_active.3f0a2016.svg"},"4a04":function(t,e,n){"use strict";n("84aa")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),n("tab-bar")],1)},o=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"tab-bar"}},[r("tab-bar-item",{attrs:{id:"tab-bar-item",path:"/home"}},[r("img",{attrs:{slot:"imgbar",src:n("9443"),alt:""},slot:"imgbar"}),r("img",{attrs:{slot:"imgbar-btn",src:n("b508"),alt:""},slot:"imgbar-btn"}),r("div",{attrs:{slot:"textbar"},slot:"textbar"},[t._v("首页")])]),r("tab-bar-item",{attrs:{id:"tab-bar-item",path:"/category"}},[r("img",{attrs:{slot:"imgbar",src:n("57cd"),alt:""},slot:"imgbar"}),r("img",{attrs:{slot:"imgbar-btn",src:n("a5ef"),alt:""},slot:"imgbar-btn"}),r("div",{attrs:{slot:"textbar"},slot:"textbar"},[t._v("分类")])]),r("tab-bar-item",{attrs:{id:"tab-bar-item",path:"/cart"}},[r("img",{attrs:{slot:"imgbar",src:n("d1c9"),alt:""},slot:"imgbar"}),r("img",{attrs:{slot:"imgbar-btn",src:n("1f92"),alt:""},slot:"imgbar-btn"}),r("div",{attrs:{slot:"textbar"},slot:"textbar"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{id:"tab-bar-item",path:"/profile"}},[r("img",{attrs:{slot:"imgbar",src:n("e55d"),alt:""},slot:"imgbar"}),r("img",{attrs:{slot:"imgbar-btn",src:n("d151"),alt:""},slot:"imgbar-btn"}),r("div",{attrs:{slot:"textbar"},slot:"textbar"},[t._v("我的")])])],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar-item"},on:{click:t.btnClick}},[t.active?n("div",[t._t("imgbar-btn")],2):n("div",[t._t("imgbar")],2),n("div",{style:t.styleColor},[t._t("textbar")],2)])},s=[],l=(n("c975"),{name:"TabBarItem",props:{path:"",textColor:{type:String,default:"red"}},data:function(){return{}},components:{},computed:{active:function(){return-1!==this.$route.path.indexOf(this.path)},styleColor:function(){return this.active?{color:this.textColor}:{}}},mounted:function(){},methods:{btnClick:function(){this.$router.push(this.path).catch((function(t){}))}}}),d=l,b=n("2877"),f=Object(b["a"])(d,u,s,!1,null,"320b9aa4",null),p=f.exports,m={name:"TabBar",data:function(){return{}},components:{TabBarItem:p},mounted:function(){},methods:{}},h=m,g=(n("b0f5"),Object(b["a"])(h,c,i,!1,null,"048fb8bc",null)),v=g.exports,k={name:"App",data:function(){return{}},components:{TabBar:v},mounted:function(){var t="production";document.documentElement.className=t},methods:{}},y=k,x=(n("4a04"),Object(b["a"])(y,a,o,!1,null,"d340af22",null)),_=x.exports,w=(n("d3b7"),n("8c4f")),O=function(){return Promise.all([n.e("chunk-750b1ee8"),n.e("chunk-97e3ecaa"),n.e("chunk-79760200")]).then(n.bind(null,"b3d7"))},j=function(){return Promise.all([n.e("chunk-750b1ee8"),n.e("chunk-5d59d851")]).then(n.bind(null,"c228"))},C=function(){return Promise.all([n.e("chunk-750b1ee8"),n.e("chunk-97e3ecaa"),n.e("chunk-6598e47b")]).then(n.bind(null,"eda5"))},P=function(){return n.e("chunk-a61b7d20").then(n.bind(null,"3b42"))},E=function(){return Promise.all([n.e("chunk-750b1ee8"),n.e("chunk-97e3ecaa"),n.e("chunk-39d5e3df")]).then(n.bind(null,"6ab7"))};r["a"].use(w["a"]);var T=[{path:"",redirect:"/home"},{path:"/home",component:O},{path:"/cart",component:j},{path:"/category",component:C},{path:"/profile",component:P},{path:"/detail/:id",component:E}],S=new w["a"]({routes:T,base:"community"}),L=S,A=n("b85c"),B=n("2f62");r["a"].use(B["a"]);var $=new B["a"].Store({state:{cartList:[],title:""},mutations:{addCart:function(t,e){var n,r=null,a=Object(A["a"])(t.cartList);try{for(a.s();!(n=a.n()).done;){var o=n.value;o.id===e.id&&(r=o)}}catch(c){a.e(c)}finally{a.f()}r?(r.count+=1,t.title="当前商品数量+1"):(e.count=1,e.checked=!0,t.cartList.push(e),t.title="添加了新的商品")}},actions:{},modules:{}}),N=n("caf9"),M=n("fe3c"),D=n.n(M);r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(N["a"]),D.a.attach(document.body),new r["a"]({router:L,store:$,render:function(t){return t(_)}}).$mount("#app")},"57cd":function(t,e,n){t.exports=n.p+"img/category.12bedb89.svg"},8133:function(t,e,n){},"84aa":function(t,e,n){},9443:function(t,e,n){t.exports=n.p+"img/home.7210ddcb.svg"},a5ef:function(t,e,n){t.exports=n.p+"img/category_active.cb2cc09f.svg"},b0f5:function(t,e,n){"use strict";n("8133")},b508:function(t,e,n){t.exports=n.p+"img/home_active.cc40b6f2.svg"},d151:function(t,e,n){t.exports=n.p+"img/profile_active.fd66b281.svg"},d1c9:function(t,e,n){t.exports=n.p+"img/cart.c68224ce.svg"},e55d:function(t,e,n){t.exports=n.p+"img/profile.42d7cf12.svg"}});
//# sourceMappingURL=app.c98fca39.js.map