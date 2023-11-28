import"../sb-preview/runtime.js";(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const E="modulepreload",d=function(i,_){return new URL(i,_).href},m={},r=function(_,s,c){if(!s||s.length===0)return _();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=d(e,c),e in m)return;m[e]=!0;const o=e.endsWith(".css"),O=o?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!o||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${O}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":E,o||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),o)return new Promise((l,a)=>{n.addEventListener("load",l),n.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>_()).catch(e=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=e,window.dispatchEvent(o),!o.defaultPrevented)throw e})},{createBrowserChannel:p}=__STORYBOOK_MODULE_CHANNELS__,{addons:R}=__STORYBOOK_MODULE_PREVIEW_API__,u=p({page:"preview"});R.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;window.CONFIG_TYPE==="DEVELOPMENT"&&(window.__STORYBOOK_SERVER_CHANNEL__=u);const f={"./src/stories/Button.stories.ts":async()=>r(()=>import("./Button.stories-zqT2QNhP.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url),"./src/stories/Configure.mdx":async()=>r(()=>import("./Configure-V4bxhzI4.js"),__vite__mapDeps([6,2,3,4,7,8,9,10,11,12]),import.meta.url),"./src/stories/Header.stories.ts":async()=>r(()=>import("./Header.stories-yQQo7UL1.js"),__vite__mapDeps([13,14,2,3,4,1,5,15]),import.meta.url),"./src/stories/MyLabel.stories.ts":async()=>r(()=>import("./MyLabel.stories-fJ4hkHqz.js"),__vite__mapDeps([16,2,3,4,17]),import.meta.url),"./src/stories/Page.stories.ts":async()=>r(()=>import("./Page.stories-enaUPiFY.js"),__vite__mapDeps([18,2,3,4,14,1,5,15,19]),import.meta.url)};async function P(i){return f[i]()}const{composeConfigs:T,PreviewWeb:w,ClientApi:L}=__STORYBOOK_MODULE_PREVIEW_API__,I=async()=>{const i=await Promise.all([r(()=>import("./entry-preview-OIOrqgri.js"),__vite__mapDeps([20,3,4,21,8]),import.meta.url),r(()=>import("./entry-preview-docs-eqAS1v0x.js"),__vite__mapDeps([22,10,4,11,3]),import.meta.url),r(()=>import("./preview-VI2eoWmp.js"),__vite__mapDeps([23,9]),import.meta.url),r(()=>import("./preview-XCzOUGKZ.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-AYz8Mr14.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-wm7zCcxo.js"),__vite__mapDeps([24,11]),import.meta.url),r(()=>import("./preview-MdQXpms2.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-u8M_OEO2.js"),__vite__mapDeps([25,11]),import.meta.url),r(()=>import("./preview-bEa2SesL.js"),__vite__mapDeps([]),import.meta.url),r(()=>import("./preview-LwJOns1m.js"),__vite__mapDeps([26,4]),import.meta.url),r(()=>import("./preview-mEb2NEJf.js"),__vite__mapDeps([]),import.meta.url)]);return T(i)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new L({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:P,getProjectAnnotations:I});export{r as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./Button.stories-zqT2QNhP.js","./Button-QrEEAGHw.js","./jsx-runtime-vNq4Oc-g.js","./index-4g5l5LRQ.js","./_commonjsHelpers-4gQjN7DL.js","./Button-X8hm4PDT.css","./Configure-V4bxhzI4.js","./index-7cYLPI_4.js","./index-jmm5gWkb.js","./index-ogXoivrg.js","./index-MVbLLYTZ.js","./index-PPLHz8o0.js","./index-Dbo06S9W.js","./Header.stories-yQQo7UL1.js","./Header-UA0uusKy.js","./Header-Yyx952jD.css","./MyLabel.stories-fJ4hkHqz.js","./MyLabel-MtWA2JNq.css","./Page.stories-enaUPiFY.js","./Page-fZ7a-HXz.css","./entry-preview-OIOrqgri.js","./react-18-ba7OOUbL.js","./entry-preview-docs-eqAS1v0x.js","./preview-VI2eoWmp.js","./preview-wm7zCcxo.js","./preview-u8M_OEO2.js","./preview-LwJOns1m.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}