(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"7Rup":function(e,t,n){"use strict";n.r(t);var r=n("MX0m"),i=n.n(r),o=n("q1tI"),a=n.n(o),u=n("nOHt"),c=n("miPH"),s=n.n(c);function d(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState}function f(){return"undefined"===typeof navigator.onLine||navigator.onLine}const l=new Map;function p(e){return l.get(e)}function g(e,t){return l.set(e,t)}const h={},v={},y={},w={},m={};const b="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),O={onLoadingSlow:()=>{},onSuccess:()=>{},onError:()=>{},onErrorRetry:function(e,t,n,r,i){if(!d())return;const o=Math.min(i.retryCount||0,8),a=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,a,i)},errorRetryInterval:1e3*(b?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(b?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:s.a};let j=!1;if("undefined"!==typeof window&&window.addEventListener&&!j){const e=()=>{if(d()&&f())for(let e in y)y[e][0]&&y[e][0]()};window.addEventListener("visibilitychange",e,!1),window.addEventListener("focus",e,!1),j=!0}var E=O;const R=new WeakMap;let T=0;const I=Object(o.createContext)({});I.displayName="SWRConfigContext";var x=I;const L="undefined"===typeof window,S=L?o.useEffect:o.useLayoutEffect,C=e=>e?"err@"+e:"",V=e=>{let t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";let t="arg";for(let n=0;n<e.length;++n){let r;null===e[n]||"object"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):R.has(e[n])?r=R.get(e[n]):(r=T,R.set(e[n],T++)),t+="@"+r}return t}(e)):e=String(e||""),[e,t]},q=(e,t,n)=>{const r=w[e];if(e&&r)for(let i=0;i<r.length;++i)r[i](!1,t,n)};x.Provider;var k=function(...e){let t,n,r={};e.length>=1&&(t=e[0]),e.length>2?(n=e[1],r=e[2]):"function"===typeof e[1]?n=e[1]:"object"===typeof e[1]&&(r=e[1]);const[i,a]=V(t),u=C(i);r=Object.assign({},E,Object(o.useContext)(x),r),"undefined"===typeof n&&(n=r.fetcher);const c=p(i)||r.initialData,s=p(u),l=Object(o.useRef)({data:!1,error:!1,isValidating:!1}),b=Object(o.useRef)({data:c,error:s,isValidating:!1}),O=Object(o.useState)(null)[1];let j=Object(o.useCallback)(e=>{let t=!1;for(let n in e)b.current[n]=e[n],l.current[n]&&(t=!0);(t||r.suspense)&&O({})},[]);const R=Object(o.useRef)(!1),T=Object(o.useRef)(i),I=Object(o.useCallback)(async(e={})=>{if(!i||!n)return!1;if(R.current)return!1;e=Object.assign({dedupe:!1},e);let t=!0,o="undefined"!==typeof h[i]&&e.dedupe;try{let e,c;if(j({isValidating:!0}),o?(c=v[i],e=await h[i]):(h[i]&&(m[i]=Date.now()-1),r.loadingTimeout&&!p(i)&&setTimeout(()=>{t&&r.onLoadingSlow(i,r)},r.loadingTimeout),h[i]=null!==a?n(...a):n(i),v[i]=c=Date.now(),e=await h[i],setTimeout(()=>{delete h[i],delete v[i]},r.dedupingInterval),r.onSuccess(e,i,r)),m[i]&&c<=m[i])return j({isValidating:!1}),!1;g(i,e),g(u,void 0),T.current=i;const s={isValidating:!1};"undefined"!==typeof b.current.error&&(s.error=void 0),r.compare(b.current.data,e)||(s.data=e),j(s),o||q(i,e,void 0)}catch(c){if(delete h[i],delete v[i],g(u,c),T.current=i,b.current.error!==c&&(j({isValidating:!1,error:c}),o||q(i,void 0,c)),r.onError(c,i,r),r.shouldRetryOnError){const t=(e.retryCount||0)+1;r.onErrorRetry(c,i,r,I,Object.assign({dedupe:!0},e,{retryCount:t}))}}return t=!1,!0},[i]);if(S(()=>{if(!i)return;R.current=!1;const e=b.current.data,t=p(i)||r.initialData;T.current===i&&r.compare(e,t)||(j({data:t}),T.current=i);const n=()=>I({dedupe:!0});let o;r.initialData||("undefined"!==typeof t&&!L&&window.requestIdleCallback?window.requestIdleCallback(n):n()),r.revalidateOnFocus&&(o=function(e,t){let n=!1;return(...r)=>{n||(n=!0,e(...r),setTimeout(()=>n=!1,t))}}(n,r.focusThrottleInterval),y[i]?y[i].push(o):y[i]=[o]);const a=(e=!0,t,o,a=!0)=>{const u={};let c=!1;return"undefined"===typeof t||r.compare(b.current.data,t)||(u.data=t,c=!0),b.current.error!==o&&(u.error=o,c=!0),c&&j(u),T.current=i,!!e&&(a?n():I())};w[i]?w[i].push(a):w[i]=[a];let u=null;return"undefined"!==typeof addEventListener&&r.revalidateOnReconnect&&(u=addEventListener("online",n)),()=>{if(j=()=>null,R.current=!0,o&&y[i]){const e=y[i],t=e.indexOf(o);t>=0&&(e[t]=e[e.length-1],e.pop())}if(w[i]){const e=w[i],t=e.indexOf(a);t>=0&&(e[t]=e[e.length-1],e.pop())}"undefined"!==typeof removeEventListener&&null!==u&&removeEventListener("online",u)}},[i,I]),S(()=>{let e=null;const t=async()=>{b.current.error||!r.refreshWhenHidden&&!d()||r.refreshWhenOffline||!f()||await I({dedupe:!0}),r.refreshInterval&&(e=setTimeout(t,r.refreshInterval))};return r.refreshInterval&&(e=setTimeout(t,r.refreshInterval)),()=>{e&&clearTimeout(e)}},[r.refreshInterval,r.refreshWhenHidden,r.refreshWhenOffline,I]),r.suspense){if(L)throw new Error("Suspense on server side is not yet supported!");let e=p(i),t=p(u);if("undefined"===typeof e&&"undefined"===typeof t){if(h[i]||I(),h[i]&&"function"===typeof h[i].then)throw h[i];e=h[i]}if("undefined"===typeof e&&t)throw t;return{error:t,data:e,revalidate:I,isValidating:b.current.isValidating}}return Object(o.useMemo)(()=>{const e={revalidate:I};return Object.defineProperties(e,{error:{get:function(){return l.current.error=!0,T.current===i?b.current.error:s}},data:{get:function(){return l.current.data=!0,T.current===i?b.current.data:c}},isValidating:{get:function(){return l.current.isValidating=!0,b.current.isValidating}}}),e},[I])};new Map;var W=k,D=n("3Hq7");n.d(t,"default",(function(){return P}));var H=a.a.createElement;function M(e){return fetch(e).then((function(e){return e.json()}))}function P(){var e=Object(u.useRouter)().query,t=W("/api/randomQuote".concat(e.author?"?author="+e.author:""),M),n=t.data,r=t.error,o=n&&n.author,a=n&&n.quote;return n||(a="Loading..."),r&&(a="Failed to fetch the quote"),H(D.a,null,H("main",{className:"jsx-929467753"},H("div",{className:"jsx-929467753 quote"},a),o&&H("i",{className:"jsx-929467753"},"- ",o)),H(i.a,{id:"929467753"},["main.jsx-929467753{margin-top:1rem;padding:1rem;border:2px solid green;}"]))}},miPH:function(e,t,n){"use strict";var r=Array.isArray,i=Object.keys,o=Object.prototype.hasOwnProperty;e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var a,u,c,s=r(t),d=r(n);if(s&&d){if((u=t.length)!=n.length)return!1;for(a=u;0!==a--;)if(!e(t[a],n[a]))return!1;return!0}if(s!=d)return!1;var f=t instanceof Date,l=n instanceof Date;if(f!=l)return!1;if(f&&l)return t.getTime()==n.getTime();var p=t instanceof RegExp,g=n instanceof RegExp;if(p!=g)return!1;if(p&&g)return t.toString()==n.toString();var h=i(t);if((u=h.length)!==i(n).length)return!1;for(a=u;0!==a--;)if(!o.call(n,h[a]))return!1;for(a=u;0!==a--;)if(!e(t[c=h[a]],n[c]))return!1;return!0}return t!==t&&n!==n}},vw0U:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quote",function(){return n("7Rup")}])}},[["vw0U",1,2,0,3]]]);