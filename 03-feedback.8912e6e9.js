!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=l||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,p=Math.min,g=function(){return s.Date.now()};function y(e,t,n){var o,i,u,a,f,c,l=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(h,t),d?y(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||s&&e-l>=u}function h(){var e=g();if(O(e))return w(e);f=setTimeout(h,function(e){var n=t-(e-c);return s?p(n,u-(e-l)):n}(e))}function w(e){return f=void 0,v&&o?y(e):(o=i=void 0,a)}function x(){var e=g(),n=O(e);if(o=arguments,i=this,c=e,n){if(void 0===f)return S(c);if(s)return f=setTimeout(h,t),y(c)}return void 0===f&&(f=setTimeout(h,t)),a}return t=j(t)||0,b(n)&&(d=!!n.leading,u=(s="maxWait"in n)?m(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},x.flush=function(){return void 0===f?a:w(g())},x}function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?c(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var S=document.querySelector("input"),O=document.querySelector("textarea"),h=document.querySelector("form");h.addEventListener("input",e(t)((function(){var e;e={email:"".concat(S.value),message:"".concat(O.value)},localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500));var w=localStorage.getItem("feedback-form-state"),x=JSON.parse(w);null!==x&&(S.value=x.email,O.textContent=x.message),h.addEventListener("submit",(function(e){e.preventDefault();var t={email:S.value,message:O.value};console.log(t),localStorage.removeItem("feedback-form-state"),e.target.reset(),O.textContent=""}))}();
//# sourceMappingURL=03-feedback.8912e6e9.js.map
