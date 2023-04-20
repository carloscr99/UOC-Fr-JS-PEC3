(()=>{"use strict";var e={379:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(e,t){this.onTodoListChanged=e=>{this.view.displayTodos(e)},this.handleAddTodo=e=>{this.service.addTodo(e)},this.handleEditTodo=(e,t)=>{this.service.editTodo(e,t)},this.handleDeleteTodo=e=>{this.service.deleteTodo(e)},this.handleToggleTodo=e=>{this.service.toggleTodo(e)},this.service=e,this.view=t,this.service.bindTodoListChanged(this.onTodoListChanged),this.view.bindAddTodo(this.handleAddTodo),this.view.bindEditTodo(this.handleEditTodo),this.view.bindDeleteTodo(this.handleDeleteTodo),this.view.bindToggleTodo(this.handleToggleTodo),this.onTodoListChanged(this.service.todos)}}},486:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=o(720);t.default=class{constructor({text:e="",complete:t=!1}){this.id=this.generarUUIDv4(),this.text=e,this.complete=t}generarUUIDv4(){return(0,n.v4)()}}},162:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0});const n=o(486);t.default=class{constructor(e=[]){this.todos=(JSON.parse(localStorage.getItem("todos"))||e).map((e=>new n.default(e)))}bindTodoListChanged(e){this.onTodoListChanged=e}_commit(e){this.onTodoListChanged(e),localStorage.setItem("todos",JSON.stringify(e))}addTodo(e){this.todos.push(new n.default({text:e})),this._commit(this.todos)}editTodo(e,t){this.todos=this.todos.map((o=>o.id===e?new n.default(Object.assign(Object.assign({},o),{text:t})):o)),this._commit(this.todos)}deleteTodo(e){this.todos=this.todos.filter((({id:t})=>t!==e)),this._commit(this.todos)}toggleTodo(e){this.todos=this.todos.map((t=>t.id===e?new n.default(Object.assign(Object.assign({},t),{complete:!t.complete})):t)),this._commit(this.todos)}}},720:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"NIL",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"parse",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"v1",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"v3",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"v4",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"v5",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"validate",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"version",{enumerable:!0,get:function(){return a.default}});var n=c(o(518)),r=c(o(749)),d=c(o(469)),i=c(o(918)),u=c(o(438)),a=c(o(595)),l=c(o(485)),s=c(o(4)),f=c(o(857));function c(e){return e&&e.__esModule?e:{default:e}}},169:(e,t)=>{function o(e){return 14+(e+64>>>9<<4)+1}function n(e,t){const o=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(o>>16)<<16|65535&o}function r(e,t,o,r,d,i){return n((u=n(n(t,e),n(r,i)))<<(a=d)|u>>>32-a,o);var u,a}function d(e,t,o,n,d,i,u){return r(t&o|~t&n,e,t,d,i,u)}function i(e,t,o,n,d,i,u){return r(t&n|o&~n,e,t,d,i,u)}function u(e,t,o,n,d,i,u){return r(t^o^n,e,t,d,i,u)}function a(e,t,o,n,d,i,u){return r(o^(t|~n),e,t,d,i,u)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(let o=0;o<t.length;++o)e[o]=t.charCodeAt(o)}return function(e){const t=[],o=32*e.length,n="0123456789abcdef";for(let r=0;r<o;r+=8){const o=e[r>>5]>>>r%32&255,d=parseInt(n.charAt(o>>>4&15)+n.charAt(15&o),16);t.push(d)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[o(t)-1]=t;let r=1732584193,l=-271733879,s=-1732584194,f=271733878;for(let t=0;t<e.length;t+=16){const o=r,c=l,h=s,p=f;r=d(r,l,s,f,e[t],7,-680876936),f=d(f,r,l,s,e[t+1],12,-389564586),s=d(s,f,r,l,e[t+2],17,606105819),l=d(l,s,f,r,e[t+3],22,-1044525330),r=d(r,l,s,f,e[t+4],7,-176418897),f=d(f,r,l,s,e[t+5],12,1200080426),s=d(s,f,r,l,e[t+6],17,-1473231341),l=d(l,s,f,r,e[t+7],22,-45705983),r=d(r,l,s,f,e[t+8],7,1770035416),f=d(f,r,l,s,e[t+9],12,-1958414417),s=d(s,f,r,l,e[t+10],17,-42063),l=d(l,s,f,r,e[t+11],22,-1990404162),r=d(r,l,s,f,e[t+12],7,1804603682),f=d(f,r,l,s,e[t+13],12,-40341101),s=d(s,f,r,l,e[t+14],17,-1502002290),l=d(l,s,f,r,e[t+15],22,1236535329),r=i(r,l,s,f,e[t+1],5,-165796510),f=i(f,r,l,s,e[t+6],9,-1069501632),s=i(s,f,r,l,e[t+11],14,643717713),l=i(l,s,f,r,e[t],20,-373897302),r=i(r,l,s,f,e[t+5],5,-701558691),f=i(f,r,l,s,e[t+10],9,38016083),s=i(s,f,r,l,e[t+15],14,-660478335),l=i(l,s,f,r,e[t+4],20,-405537848),r=i(r,l,s,f,e[t+9],5,568446438),f=i(f,r,l,s,e[t+14],9,-1019803690),s=i(s,f,r,l,e[t+3],14,-187363961),l=i(l,s,f,r,e[t+8],20,1163531501),r=i(r,l,s,f,e[t+13],5,-1444681467),f=i(f,r,l,s,e[t+2],9,-51403784),s=i(s,f,r,l,e[t+7],14,1735328473),l=i(l,s,f,r,e[t+12],20,-1926607734),r=u(r,l,s,f,e[t+5],4,-378558),f=u(f,r,l,s,e[t+8],11,-2022574463),s=u(s,f,r,l,e[t+11],16,1839030562),l=u(l,s,f,r,e[t+14],23,-35309556),r=u(r,l,s,f,e[t+1],4,-1530992060),f=u(f,r,l,s,e[t+4],11,1272893353),s=u(s,f,r,l,e[t+7],16,-155497632),l=u(l,s,f,r,e[t+10],23,-1094730640),r=u(r,l,s,f,e[t+13],4,681279174),f=u(f,r,l,s,e[t],11,-358537222),s=u(s,f,r,l,e[t+3],16,-722521979),l=u(l,s,f,r,e[t+6],23,76029189),r=u(r,l,s,f,e[t+9],4,-640364487),f=u(f,r,l,s,e[t+12],11,-421815835),s=u(s,f,r,l,e[t+15],16,530742520),l=u(l,s,f,r,e[t+2],23,-995338651),r=a(r,l,s,f,e[t],6,-198630844),f=a(f,r,l,s,e[t+7],10,1126891415),s=a(s,f,r,l,e[t+14],15,-1416354905),l=a(l,s,f,r,e[t+5],21,-57434055),r=a(r,l,s,f,e[t+12],6,1700485571),f=a(f,r,l,s,e[t+3],10,-1894986606),s=a(s,f,r,l,e[t+10],15,-1051523),l=a(l,s,f,r,e[t+1],21,-2054922799),r=a(r,l,s,f,e[t+8],6,1873313359),f=a(f,r,l,s,e[t+15],10,-30611744),s=a(s,f,r,l,e[t+6],15,-1560198380),l=a(l,s,f,r,e[t+13],21,1309151649),r=a(r,l,s,f,e[t+4],6,-145523070),f=a(f,r,l,s,e[t+11],10,-1120210379),s=a(s,f,r,l,e[t+2],15,718787259),l=a(l,s,f,r,e[t+9],21,-343485551),r=n(r,o),l=n(l,c),s=n(s,h),f=n(f,p)}return[r,l,s,f]}(function(e){if(0===e.length)return[];const t=8*e.length,n=new Uint32Array(o(t));for(let o=0;o<t;o+=8)n[o>>5]|=(255&e[o/8])<<o%32;return n}(e),8*e.length))}},332:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};t.default=o},438:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default="00000000-0000-0000-0000-000000000000"},857:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=o(485))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");let t;const o=new Uint8Array(16);return o[0]=(t=parseInt(e.slice(0,8),16))>>>24,o[1]=t>>>16&255,o[2]=t>>>8&255,o[3]=255&t,o[4]=(t=parseInt(e.slice(9,13),16))>>>8,o[5]=255&t,o[6]=(t=parseInt(e.slice(14,18),16))>>>8,o[7]=255&t,o[8]=(t=parseInt(e.slice(19,23),16))>>>8,o[9]=255&t,o[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,o[11]=t/4294967296&255,o[12]=t>>>24&255,o[13]=t>>>16&255,o[14]=t>>>8&255,o[15]=255&t,o}},353:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.default=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i},948:(e,t)=>{let o;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){if(!o&&(o="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!o))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return o(n)};const n=new Uint8Array(16)},686:(e,t)=>{function o(e,t,o,n){switch(e){case 0:return t&o^~t&n;case 1:case 3:return t^o^n;case 2:return t&o^t&n^o&n}}function n(e,t){return e<<t|e>>>32-t}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){const t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){const t=unescape(encodeURIComponent(e));e=[];for(let o=0;o<t.length;++o)e.push(t.charCodeAt(o))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);const d=e.length/4+2,i=Math.ceil(d/16),u=new Array(i);for(let t=0;t<i;++t){const o=new Uint32Array(16);for(let n=0;n<16;++n)o[n]=e[64*t+4*n]<<24|e[64*t+4*n+1]<<16|e[64*t+4*n+2]<<8|e[64*t+4*n+3];u[t]=o}u[i-1][14]=8*(e.length-1)/Math.pow(2,32),u[i-1][14]=Math.floor(u[i-1][14]),u[i-1][15]=8*(e.length-1)&4294967295;for(let e=0;e<i;++e){const d=new Uint32Array(80);for(let t=0;t<16;++t)d[t]=u[e][t];for(let e=16;e<80;++e)d[e]=n(d[e-3]^d[e-8]^d[e-14]^d[e-16],1);let i=r[0],a=r[1],l=r[2],s=r[3],f=r[4];for(let e=0;e<80;++e){const r=Math.floor(e/20),u=n(i,5)+o(r,a,l,s)+f+t[r]+d[e]>>>0;f=s,s=l,l=n(a,30)>>>0,a=i,i=u}r[0]=r[0]+i>>>0,r[1]=r[1]+a>>>0,r[2]=r[2]+l>>>0,r[3]=r[3]+s>>>0,r[4]=r[4]+f>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}},4:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.unsafeStringify=i;var n,r=(n=o(485))&&n.__esModule?n:{default:n};const d=[];for(let e=0;e<256;++e)d.push((e+256).toString(16).slice(1));function i(e,t=0){return(d[e[t+0]]+d[e[t+1]]+d[e[t+2]]+d[e[t+3]]+"-"+d[e[t+4]]+d[e[t+5]]+"-"+d[e[t+6]]+d[e[t+7]]+"-"+d[e[t+8]]+d[e[t+9]]+"-"+d[e[t+10]]+d[e[t+11]]+d[e[t+12]]+d[e[t+13]]+d[e[t+14]]+d[e[t+15]]).toLowerCase()}t.default=function(e,t=0){const o=i(e,t);if(!(0,r.default)(o))throw TypeError("Stringified UUID is invalid");return o}},518:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=o(948))&&n.__esModule?n:{default:n},d=o(4);let i,u,a=0,l=0;t.default=function(e,t,o){let n=t&&o||0;const s=t||new Array(16);let f=(e=e||{}).node||i,c=void 0!==e.clockseq?e.clockseq:u;if(null==f||null==c){const t=e.random||(e.rng||r.default)();null==f&&(f=i=[1|t[0],t[1],t[2],t[3],t[4],t[5]]),null==c&&(c=u=16383&(t[6]<<8|t[7]))}let h=void 0!==e.msecs?e.msecs:Date.now(),p=void 0!==e.nsecs?e.nsecs:l+1;const v=h-a+(p-l)/1e4;if(v<0&&void 0===e.clockseq&&(c=c+1&16383),(v<0||h>a)&&void 0===e.nsecs&&(p=0),p>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");a=h,l=p,u=c,h+=122192928e5;const g=(1e4*(268435455&h)+p)%4294967296;s[n++]=g>>>24&255,s[n++]=g>>>16&255,s[n++]=g>>>8&255,s[n++]=255&g;const y=h/4294967296*1e4&268435455;s[n++]=y>>>8&255,s[n++]=255&y,s[n++]=y>>>24&15|16,s[n++]=y>>>16&255,s[n++]=c>>>8|128,s[n++]=255&c;for(let e=0;e<6;++e)s[n+e]=f[e];return t||(0,d.unsafeStringify)(s)}},749:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(o(31)),r=d(o(169));function d(e){return e&&e.__esModule?e:{default:e}}var i=(0,n.default)("v3",48,r.default);t.default=i},31:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.URL=t.DNS=void 0,t.default=function(e,t,o){function n(e,n,i,u){var a;if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));const t=[];for(let o=0;o<e.length;++o)t.push(e.charCodeAt(o));return t}(e)),"string"==typeof n&&(n=(0,d.default)(n)),16!==(null===(a=n)||void 0===a?void 0:a.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let l=new Uint8Array(16+e.length);if(l.set(n),l.set(e,n.length),l=o(l),l[6]=15&l[6]|t,l[8]=63&l[8]|128,i){u=u||0;for(let e=0;e<16;++e)i[u+e]=l[e];return i}return(0,r.unsafeStringify)(l)}try{n.name=e}catch(e){}return n.DNS=i,n.URL=u,n};var n,r=o(4),d=(n=o(857))&&n.__esModule?n:{default:n};const i="6ba7b810-9dad-11d1-80b4-00c04fd430c8";t.DNS=i;const u="6ba7b811-9dad-11d1-80b4-00c04fd430c8";t.URL=u},469:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(o(332)),r=i(o(948)),d=o(4);function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t,o){if(n.default.randomUUID&&!t&&!e)return n.default.randomUUID();const i=(e=e||{}).random||(e.rng||r.default)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,t){o=o||0;for(let e=0;e<16;++e)t[o+e]=i[e];return t}return(0,d.unsafeStringify)(i)}},918:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(o(31)),r=d(o(686));function d(e){return e&&e.__esModule?e:{default:e}}var i=(0,n.default)("v5",80,r.default);t.default=i},485:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=o(353))&&n.__esModule?n:{default:n};t.default=function(e){return"string"==typeof e&&r.default.test(e)}},595:(e,t,o)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=o(485))&&n.__esModule?n:{default:n};t.default=function(e){if(!(0,r.default)(e))throw TypeError("Invalid UUID");return parseInt(e.slice(14,15),16)}}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var d=t[n]={exports:{}};return e[n](d,d.exports,o),d.exports}(()=>{const e=o(379),t=o(162);new e.default(new t.default,new TodoView)})()})();