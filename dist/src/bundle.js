/*! For license information please see bundle.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.hackcable=e():t.hackcable=e()}(self,(function(){return(()=>{var t={1983:(t,e,i)=>{"use strict";i(6266),i(990),i(911),i(4160),i(6197),i(6728),i(4039),i(3568),i(8051),i(8250),i(5434),i(4952),i(6337),i(5666)},9742:(t,e)=>{"use strict";e.byteLength=function(t){var e=l(t),i=e[0],r=e[1];return 3*(i+r)/4-r},e.toByteArray=function(t){var e,i,s=l(t),a=s[0],o=s[1],c=new n(function(t,e,i){return 3*(e+i)/4-i}(0,a,o)),h=0,f=o>0?a-4:a;for(i=0;i<f;i+=4)e=r[t.charCodeAt(i)]<<18|r[t.charCodeAt(i+1)]<<12|r[t.charCodeAt(i+2)]<<6|r[t.charCodeAt(i+3)],c[h++]=e>>16&255,c[h++]=e>>8&255,c[h++]=255&e;return 2===o&&(e=r[t.charCodeAt(i)]<<2|r[t.charCodeAt(i+1)]>>4,c[h++]=255&e),1===o&&(e=r[t.charCodeAt(i)]<<10|r[t.charCodeAt(i+1)]<<4|r[t.charCodeAt(i+2)]>>2,c[h++]=e>>8&255,c[h++]=255&e),c},e.fromByteArray=function(t){for(var e,r=t.length,n=r%3,s=[],a=16383,o=0,l=r-n;o<l;o+=a)s.push(c(t,o,o+a>l?l:o+a));return 1===n?(e=t[r-1],s.push(i[e>>2]+i[e<<4&63]+"==")):2===n&&(e=(t[r-2]<<8)+t[r-1],s.push(i[e>>10]+i[e>>4&63]+i[e<<2&63]+"=")),s.join("")};for(var i=[],r=[],n="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=0,o=s.length;a<o;++a)i[a]=s[a],r[s.charCodeAt(a)]=a;function l(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var i=t.indexOf("=");return-1===i&&(i=e),[i,i===e?0:4-i%4]}function c(t,e,r){for(var n,s,a=[],o=e;o<r;o+=3)n=(t[o]<<16&16711680)+(t[o+1]<<8&65280)+(255&t[o+2]),a.push(i[(s=n)>>18&63]+i[s>>12&63]+i[s>>6&63]+i[63&s]);return a.join("")}r["-".charCodeAt(0)]=62,r["_".charCodeAt(0)]=63},8764:(t,e,i)=>{"use strict";const r=i(9742),n=i(645),s="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=l,e.SlowBuffer=function(t){return+t!=t&&(t=0),l.alloc(+t)},e.INSPECT_MAX_BYTES=50;const a=2147483647;function o(t){if(t>a)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,l.prototype),e}function l(t,e,i){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return f(t)}return c(t,e,i)}function c(t,e,i){if("string"==typeof t)return function(t,e){if("string"==typeof e&&""!==e||(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const i=0|g(t,e);let r=o(i);const n=r.write(t,e);return n!==i&&(r=r.slice(0,n)),r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(q(t,Uint8Array)){const e=new Uint8Array(t);return d(e.buffer,e.byteOffset,e.byteLength)}return p(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(q(t,ArrayBuffer)||t&&q(t.buffer,ArrayBuffer))return d(t,e,i);if("undefined"!=typeof SharedArrayBuffer&&(q(t,SharedArrayBuffer)||t&&q(t.buffer,SharedArrayBuffer)))return d(t,e,i);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return l.from(r,e,i);const n=function(t){if(l.isBuffer(t)){const e=0|u(t.length),i=o(e);return 0===i.length||t.copy(i,0,0,e),i}return void 0!==t.length?"number"!=typeof t.length||Y(t.length)?o(0):p(t):"Buffer"===t.type&&Array.isArray(t.data)?p(t.data):void 0}(t);if(n)return n;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return l.from(t[Symbol.toPrimitive]("string"),e,i);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function f(t){return h(t),o(t<0?0:0|u(t))}function p(t){const e=t.length<0?0:0|u(t.length),i=o(e);for(let r=0;r<e;r+=1)i[r]=255&t[r];return i}function d(t,e,i){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(i||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===i?new Uint8Array(t):void 0===i?new Uint8Array(t,e):new Uint8Array(t,e,i),Object.setPrototypeOf(r,l.prototype),r}function u(t){if(t>=a)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+a.toString(16)+" bytes");return 0|t}function g(t,e){if(l.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||q(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const i=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===i)return 0;let n=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return i;case"utf8":case"utf-8":return X(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*i;case"hex":return i>>>1;case"base64":return W(t).length;default:if(n)return r?-1:X(t).length;e=(""+e).toLowerCase(),n=!0}}function y(t,e,i){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===i||i>this.length)&&(i=this.length),i<=0)return"";if((i>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return A(this,e,i);case"utf8":case"utf-8":return O(this,e,i);case"ascii":return R(this,e,i);case"latin1":case"binary":return P(this,e,i);case"base64":return S(this,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,e,i);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function m(t,e,i){const r=t[e];t[e]=t[i],t[i]=r}function x(t,e,i,r,n){if(0===t.length)return-1;if("string"==typeof i?(r=i,i=0):i>2147483647?i=2147483647:i<-2147483648&&(i=-2147483648),Y(i=+i)&&(i=n?0:t.length-1),i<0&&(i=t.length+i),i>=t.length){if(n)return-1;i=t.length-1}else if(i<0){if(!n)return-1;i=0}if("string"==typeof e&&(e=l.from(e,r)),l.isBuffer(e))return 0===e.length?-1:v(t,e,i,r,n);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?n?Uint8Array.prototype.indexOf.call(t,e,i):Uint8Array.prototype.lastIndexOf.call(t,e,i):v(t,[e],i,r,n);throw new TypeError("val must be string, number or Buffer")}function v(t,e,i,r,n){let s,a=1,o=t.length,l=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;a=2,o/=2,l/=2,i/=2}function c(t,e){return 1===a?t[e]:t.readUInt16BE(e*a)}if(n){let r=-1;for(s=i;s<o;s++)if(c(t,s)===c(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*a}else-1!==r&&(s-=s-r),r=-1}else for(i+l>o&&(i=o-l),s=i;s>=0;s--){let i=!0;for(let r=0;r<l;r++)if(c(t,s+r)!==c(e,r)){i=!1;break}if(i)return s}return-1}function w(t,e,i,r){i=Number(i)||0;const n=t.length-i;r?(r=Number(r))>n&&(r=n):r=n;const s=e.length;let a;for(r>s/2&&(r=s/2),a=0;a<r;++a){const r=parseInt(e.substr(2*a,2),16);if(Y(r))return a;t[i+a]=r}return a}function b(t,e,i,r){return K(X(e,t.length-i),t,i,r)}function k(t,e,i,r){return K(function(t){const e=[];for(let i=0;i<t.length;++i)e.push(255&t.charCodeAt(i));return e}(e),t,i,r)}function C(t,e,i,r){return K(W(e),t,i,r)}function z(t,e,i,r){return K(function(t,e){let i,r,n;const s=[];for(let a=0;a<t.length&&!((e-=2)<0);++a)i=t.charCodeAt(a),r=i>>8,n=i%256,s.push(n),s.push(r);return s}(e,t.length-i),t,i,r)}function S(t,e,i){return 0===e&&i===t.length?r.fromByteArray(t):r.fromByteArray(t.slice(e,i))}function O(t,e,i){i=Math.min(t.length,i);const r=[];let n=e;for(;n<i;){const e=t[n];let s=null,a=e>239?4:e>223?3:e>191?2:1;if(n+a<=i){let i,r,o,l;switch(a){case 1:e<128&&(s=e);break;case 2:i=t[n+1],128==(192&i)&&(l=(31&e)<<6|63&i,l>127&&(s=l));break;case 3:i=t[n+1],r=t[n+2],128==(192&i)&&128==(192&r)&&(l=(15&e)<<12|(63&i)<<6|63&r,l>2047&&(l<55296||l>57343)&&(s=l));break;case 4:i=t[n+1],r=t[n+2],o=t[n+3],128==(192&i)&&128==(192&r)&&128==(192&o)&&(l=(15&e)<<18|(63&i)<<12|(63&r)<<6|63&o,l>65535&&l<1114112&&(s=l))}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),n+=a}return function(t){const e=t.length;if(e<=E)return String.fromCharCode.apply(String,t);let i="",r=0;for(;r<e;)i+=String.fromCharCode.apply(String,t.slice(r,r+=E));return i}(r)}e.kMaxLength=a,l.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),l.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(l.prototype,"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}}),Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.byteOffset}}),l.poolSize=8192,l.from=function(t,e,i){return c(t,e,i)},Object.setPrototypeOf(l.prototype,Uint8Array.prototype),Object.setPrototypeOf(l,Uint8Array),l.alloc=function(t,e,i){return function(t,e,i){return h(t),t<=0?o(t):void 0!==e?"string"==typeof i?o(t).fill(e,i):o(t).fill(e):o(t)}(t,e,i)},l.allocUnsafe=function(t){return f(t)},l.allocUnsafeSlow=function(t){return f(t)},l.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==l.prototype},l.compare=function(t,e){if(q(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),q(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.isBuffer(t)||!l.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let i=t.length,r=e.length;for(let n=0,s=Math.min(i,r);n<s;++n)if(t[n]!==e[n]){i=t[n],r=e[n];break}return i<r?-1:r<i?1:0},l.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},l.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return l.alloc(0);let i;if(void 0===e)for(e=0,i=0;i<t.length;++i)e+=t[i].length;const r=l.allocUnsafe(e);let n=0;for(i=0;i<t.length;++i){let e=t[i];if(q(e,Uint8Array))n+e.length>r.length?(l.isBuffer(e)||(e=l.from(e)),e.copy(r,n)):Uint8Array.prototype.set.call(r,e,n);else{if(!l.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,n)}n+=e.length}return r},l.byteLength=g,l.prototype._isBuffer=!0,l.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)m(this,e,e+1);return this},l.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)m(this,e,e+3),m(this,e+1,e+2);return this},l.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)m(this,e,e+7),m(this,e+1,e+6),m(this,e+2,e+5),m(this,e+3,e+4);return this},l.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?O(this,0,t):y.apply(this,arguments)},l.prototype.toLocaleString=l.prototype.toString,l.prototype.equals=function(t){if(!l.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===l.compare(this,t)},l.prototype.inspect=function(){let t="";const i=e.INSPECT_MAX_BYTES;return t=this.toString("hex",0,i).replace(/(.{2})/g,"$1 ").trim(),this.length>i&&(t+=" ... "),"<Buffer "+t+">"},s&&(l.prototype[s]=l.prototype.inspect),l.prototype.compare=function(t,e,i,r,n){if(q(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),!l.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===i&&(i=t?t.length:0),void 0===r&&(r=0),void 0===n&&(n=this.length),e<0||i>t.length||r<0||n>this.length)throw new RangeError("out of range index");if(r>=n&&e>=i)return 0;if(r>=n)return-1;if(e>=i)return 1;if(this===t)return 0;let s=(n>>>=0)-(r>>>=0),a=(i>>>=0)-(e>>>=0);const o=Math.min(s,a),c=this.slice(r,n),h=t.slice(e,i);for(let t=0;t<o;++t)if(c[t]!==h[t]){s=c[t],a=h[t];break}return s<a?-1:a<s?1:0},l.prototype.includes=function(t,e,i){return-1!==this.indexOf(t,e,i)},l.prototype.indexOf=function(t,e,i){return x(this,t,e,i,!0)},l.prototype.lastIndexOf=function(t,e,i){return x(this,t,e,i,!1)},l.prototype.write=function(t,e,i,r){if(void 0===e)r="utf8",i=this.length,e=0;else if(void 0===i&&"string"==typeof e)r=e,i=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(i)?(i>>>=0,void 0===r&&(r="utf8")):(r=i,i=void 0)}const n=this.length-e;if((void 0===i||i>n)&&(i=n),t.length>0&&(i<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return w(this,t,e,i);case"utf8":case"utf-8":return b(this,t,e,i);case"ascii":case"latin1":case"binary":return k(this,t,e,i);case"base64":return C(this,t,e,i);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return z(this,t,e,i);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},l.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const E=4096;function R(t,e,i){let r="";i=Math.min(t.length,i);for(let n=e;n<i;++n)r+=String.fromCharCode(127&t[n]);return r}function P(t,e,i){let r="";i=Math.min(t.length,i);for(let n=e;n<i;++n)r+=String.fromCharCode(t[n]);return r}function A(t,e,i){const r=t.length;(!e||e<0)&&(e=0),(!i||i<0||i>r)&&(i=r);let n="";for(let r=e;r<i;++r)n+=Z[t[r]];return n}function I(t,e,i){const r=t.slice(e,i);let n="";for(let t=0;t<r.length-1;t+=2)n+=String.fromCharCode(r[t]+256*r[t+1]);return n}function D(t,e,i){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>i)throw new RangeError("Trying to access beyond buffer length")}function $(t,e,i,r,n,s){if(!l.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>n||e<s)throw new RangeError('"value" argument is out of bounds');if(i+r>t.length)throw new RangeError("Index out of range")}function M(t,e,i,r,n){V(e,r,n,t,i,7);let s=Number(e&BigInt(4294967295));t[i++]=s,s>>=8,t[i++]=s,s>>=8,t[i++]=s,s>>=8,t[i++]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[i++]=a,a>>=8,t[i++]=a,a>>=8,t[i++]=a,a>>=8,t[i++]=a,i}function B(t,e,i,r,n){V(e,r,n,t,i,7);let s=Number(e&BigInt(4294967295));t[i+7]=s,s>>=8,t[i+6]=s,s>>=8,t[i+5]=s,s>>=8,t[i+4]=s;let a=Number(e>>BigInt(32)&BigInt(4294967295));return t[i+3]=a,a>>=8,t[i+2]=a,a>>=8,t[i+1]=a,a>>=8,t[i]=a,i+8}function T(t,e,i,r,n,s){if(i+r>t.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError("Index out of range")}function U(t,e,i,r,s){return e=+e,i>>>=0,s||T(t,0,i,4),n.write(t,e,i,r,23,4),i+4}function _(t,e,i,r,s){return e=+e,i>>>=0,s||T(t,0,i,8),n.write(t,e,i,r,52,8),i+8}l.prototype.slice=function(t,e){const i=this.length;(t=~~t)<0?(t+=i)<0&&(t=0):t>i&&(t=i),(e=void 0===e?i:~~e)<0?(e+=i)<0&&(e=0):e>i&&(e=i),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,l.prototype),r},l.prototype.readUintLE=l.prototype.readUIntLE=function(t,e,i){t>>>=0,e>>>=0,i||D(t,e,this.length);let r=this[t],n=1,s=0;for(;++s<e&&(n*=256);)r+=this[t+s]*n;return r},l.prototype.readUintBE=l.prototype.readUIntBE=function(t,e,i){t>>>=0,e>>>=0,i||D(t,e,this.length);let r=this[t+--e],n=1;for(;e>0&&(n*=256);)r+=this[t+--e]*n;return r},l.prototype.readUint8=l.prototype.readUInt8=function(t,e){return t>>>=0,e||D(t,1,this.length),this[t]},l.prototype.readUint16LE=l.prototype.readUInt16LE=function(t,e){return t>>>=0,e||D(t,2,this.length),this[t]|this[t+1]<<8},l.prototype.readUint16BE=l.prototype.readUInt16BE=function(t,e){return t>>>=0,e||D(t,2,this.length),this[t]<<8|this[t+1]},l.prototype.readUint32LE=l.prototype.readUInt32LE=function(t,e){return t>>>=0,e||D(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},l.prototype.readUint32BE=l.prototype.readUInt32BE=function(t,e){return t>>>=0,e||D(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},l.prototype.readBigUInt64LE=J((function(t){L(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,n=this[++t]+256*this[++t]+65536*this[++t]+i*2**24;return BigInt(r)+(BigInt(n)<<BigInt(32))})),l.prototype.readBigUInt64BE=J((function(t){L(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],n=this[++t]*2**24+65536*this[++t]+256*this[++t]+i;return(BigInt(r)<<BigInt(32))+BigInt(n)})),l.prototype.readIntLE=function(t,e,i){t>>>=0,e>>>=0,i||D(t,e,this.length);let r=this[t],n=1,s=0;for(;++s<e&&(n*=256);)r+=this[t+s]*n;return n*=128,r>=n&&(r-=Math.pow(2,8*e)),r},l.prototype.readIntBE=function(t,e,i){t>>>=0,e>>>=0,i||D(t,e,this.length);let r=e,n=1,s=this[t+--r];for(;r>0&&(n*=256);)s+=this[t+--r]*n;return n*=128,s>=n&&(s-=Math.pow(2,8*e)),s},l.prototype.readInt8=function(t,e){return t>>>=0,e||D(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},l.prototype.readInt16LE=function(t,e){t>>>=0,e||D(t,2,this.length);const i=this[t]|this[t+1]<<8;return 32768&i?4294901760|i:i},l.prototype.readInt16BE=function(t,e){t>>>=0,e||D(t,2,this.length);const i=this[t+1]|this[t]<<8;return 32768&i?4294901760|i:i},l.prototype.readInt32LE=function(t,e){return t>>>=0,e||D(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},l.prototype.readInt32BE=function(t,e){return t>>>=0,e||D(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},l.prototype.readBigInt64LE=J((function(t){L(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(i<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),l.prototype.readBigInt64BE=J((function(t){L(t>>>=0,"offset");const e=this[t],i=this[t+7];void 0!==e&&void 0!==i||G(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+i)})),l.prototype.readFloatLE=function(t,e){return t>>>=0,e||D(t,4,this.length),n.read(this,t,!0,23,4)},l.prototype.readFloatBE=function(t,e){return t>>>=0,e||D(t,4,this.length),n.read(this,t,!1,23,4)},l.prototype.readDoubleLE=function(t,e){return t>>>=0,e||D(t,8,this.length),n.read(this,t,!0,52,8)},l.prototype.readDoubleBE=function(t,e){return t>>>=0,e||D(t,8,this.length),n.read(this,t,!1,52,8)},l.prototype.writeUintLE=l.prototype.writeUIntLE=function(t,e,i,r){t=+t,e>>>=0,i>>>=0,r||$(this,t,e,i,Math.pow(2,8*i)-1,0);let n=1,s=0;for(this[e]=255&t;++s<i&&(n*=256);)this[e+s]=t/n&255;return e+i},l.prototype.writeUintBE=l.prototype.writeUIntBE=function(t,e,i,r){t=+t,e>>>=0,i>>>=0,r||$(this,t,e,i,Math.pow(2,8*i)-1,0);let n=i-1,s=1;for(this[e+n]=255&t;--n>=0&&(s*=256);)this[e+n]=t/s&255;return e+i},l.prototype.writeUint8=l.prototype.writeUInt8=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,1,255,0),this[e]=255&t,e+1},l.prototype.writeUint16LE=l.prototype.writeUInt16LE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeUint16BE=l.prototype.writeUInt16BE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeUint32LE=l.prototype.writeUInt32LE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},l.prototype.writeUint32BE=l.prototype.writeUInt32BE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigUInt64LE=J((function(t,e=0){return M(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeBigUInt64BE=J((function(t,e=0){return B(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),l.prototype.writeIntLE=function(t,e,i,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*i-1);$(this,t,e,i,r-1,-r)}let n=0,s=1,a=0;for(this[e]=255&t;++n<i&&(s*=256);)t<0&&0===a&&0!==this[e+n-1]&&(a=1),this[e+n]=(t/s>>0)-a&255;return e+i},l.prototype.writeIntBE=function(t,e,i,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*i-1);$(this,t,e,i,r-1,-r)}let n=i-1,s=1,a=0;for(this[e+n]=255&t;--n>=0&&(s*=256);)t<0&&0===a&&0!==this[e+n+1]&&(a=1),this[e+n]=(t/s>>0)-a&255;return e+i},l.prototype.writeInt8=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},l.prototype.writeInt16LE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},l.prototype.writeInt16BE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},l.prototype.writeInt32LE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},l.prototype.writeInt32BE=function(t,e,i){return t=+t,e>>>=0,i||$(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},l.prototype.writeBigInt64LE=J((function(t,e=0){return M(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeBigInt64BE=J((function(t,e=0){return B(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),l.prototype.writeFloatLE=function(t,e,i){return U(this,t,e,!0,i)},l.prototype.writeFloatBE=function(t,e,i){return U(this,t,e,!1,i)},l.prototype.writeDoubleLE=function(t,e,i){return _(this,t,e,!0,i)},l.prototype.writeDoubleBE=function(t,e,i){return _(this,t,e,!1,i)},l.prototype.copy=function(t,e,i,r){if(!l.isBuffer(t))throw new TypeError("argument should be a Buffer");if(i||(i=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<i&&(r=i),r===i)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(i<0||i>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-i&&(r=t.length-e+i);const n=r-i;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,i,r):Uint8Array.prototype.set.call(t,this.subarray(i,r),e),n},l.prototype.fill=function(t,e,i,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,i=this.length):"string"==typeof i&&(r=i,i=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!l.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<i)throw new RangeError("Out of range index");if(i<=e)return this;let n;if(e>>>=0,i=void 0===i?this.length:i>>>0,t||(t=0),"number"==typeof t)for(n=e;n<i;++n)this[n]=t;else{const s=l.isBuffer(t)?t:l.from(t,r),a=s.length;if(0===a)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(n=0;n<i-e;++n)this[n+e]=s[n%a]}return this};const j={};function F(t,e,i){j[t]=class extends i{constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}}}function N(t){let e="",i=t.length;const r="-"===t[0]?1:0;for(;i>=r+4;i-=3)e=`_${t.slice(i-3,i)}${e}`;return`${t.slice(0,i)}${e}`}function V(t,e,i,r,n,s){if(t>i||t<e){const r="bigint"==typeof e?"n":"";let n;throw n=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${i}${r}`,new j.ERR_OUT_OF_RANGE("value",n,t)}!function(t,e,i){L(e,"offset"),void 0!==t[e]&&void 0!==t[e+i]||G(e,t.length-(i+1))}(r,n,s)}function L(t,e){if("number"!=typeof t)throw new j.ERR_INVALID_ARG_TYPE(e,"number",t)}function G(t,e,i){if(Math.floor(t)!==t)throw L(t,i),new j.ERR_OUT_OF_RANGE(i||"offset","an integer",t);if(e<0)throw new j.ERR_BUFFER_OUT_OF_BOUNDS;throw new j.ERR_OUT_OF_RANGE(i||"offset",`>= ${i?1:0} and <= ${e}`,t)}F("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),F("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),F("ERR_OUT_OF_RANGE",(function(t,e,i){let r=`The value of "${t}" is out of range.`,n=i;return Number.isInteger(i)&&Math.abs(i)>2**32?n=N(String(i)):"bigint"==typeof i&&(n=String(i),(i>BigInt(2)**BigInt(32)||i<-(BigInt(2)**BigInt(32)))&&(n=N(n)),n+="n"),r+=` It must be ${e}. Received ${n}`,r}),RangeError);const H=/[^+/0-9A-Za-z-_]/g;function X(t,e){let i;e=e||1/0;const r=t.length;let n=null;const s=[];for(let a=0;a<r;++a){if(i=t.charCodeAt(a),i>55295&&i<57344){if(!n){if(i>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(a+1===r){(e-=3)>-1&&s.push(239,191,189);continue}n=i;continue}if(i<56320){(e-=3)>-1&&s.push(239,191,189),n=i;continue}i=65536+(n-55296<<10|i-56320)}else n&&(e-=3)>-1&&s.push(239,191,189);if(n=null,i<128){if((e-=1)<0)break;s.push(i)}else if(i<2048){if((e-=2)<0)break;s.push(i>>6|192,63&i|128)}else if(i<65536){if((e-=3)<0)break;s.push(i>>12|224,i>>6&63|128,63&i|128)}else{if(!(i<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(i>>18|240,i>>12&63|128,i>>6&63|128,63&i|128)}}return s}function W(t){return r.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(H,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function K(t,e,i,r){let n;for(n=0;n<r&&!(n+i>=e.length||n>=t.length);++n)e[n+i]=t[n];return n}function q(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Y(t){return t!=t}const Z=function(){const t="0123456789abcdef",e=new Array(256);for(let i=0;i<16;++i){const r=16*i;for(let n=0;n<16;++n)e[r+n]=t[i]+t[n]}return e}();function J(t){return"undefined"==typeof BigInt?Q:t}function Q(){throw new Error("BigInt not supported")}},6266:(t,e,i)=>{i(5767),i(8132),i(8388),i(7470),i(4882),i(1520),i(7476),i(9622),i(9375),i(3533),i(4672),i(4157),i(5095),i(9892),i(5115),i(9176),i(8838),i(6253),i(9730),i(6059),i(8377),i(1084),i(4299),i(1246),i(726),i(1901),i(5972),i(3403),i(2516),i(9371),i(6479),i(1736),i(1889),i(5177),i(6943),i(6503),i(6786),i(932),i(7526),i(1591),i(9073),i(347),i(579),i(4669),i(7710),i(5789),i(3514),i(9978),i(8472),i(6946),i(5068),i(413),i(191),i(8306),i(4564),i(9115),i(9539),i(6620),i(2850),i(823),i(7732),i(856),i(703),i(1539),i(5292),i(6629),i(3694),i(7648),i(7795),i(4531),i(3605),i(6780),i(9937),i(511),i(1822),i(9977),i(1031),i(6331),i(1560),i(774),i(522),i(8295),i(7842),i(110),i(75),i(4336),i(1802),i(8837),i(6773),i(5745),i(3057),i(3750),i(3369),i(9564),i(2e3),i(8977),i(2310),i(4899),i(1842),i(6997),i(3946),i(8269),i(6108),i(6774),i(1466),i(9357),i(6142),i(1876),i(851),i(8416),i(8184),i(147),i(9192),i(142),i(1786),i(5368),i(6964),i(2152),i(4821),i(9103),i(1303),i(3318),i(162),i(3834),i(1572),i(2139),i(685),i(5535),i(7347),i(3049),i(6633),i(8989),i(8270),i(4510),i(3984),i(5769),i(55),i(6014),t.exports=i(5645)},911:(t,e,i)=>{i(1268),t.exports=i(5645).Array.flatMap},990:(t,e,i)=>{i(2773),t.exports=i(5645).Array.includes},5434:(t,e,i)=>{i(3276),t.exports=i(5645).Object.entries},8051:(t,e,i)=>{i(8351),t.exports=i(5645).Object.getOwnPropertyDescriptors},8250:(t,e,i)=>{i(6409),t.exports=i(5645).Object.values},4952:(t,e,i)=>{"use strict";i(851),i(9865),t.exports=i(5645).Promise.finally},6197:(t,e,i)=>{i(2770),t.exports=i(5645).String.padEnd},4160:(t,e,i)=>{i(1784),t.exports=i(5645).String.padStart},4039:(t,e,i)=>{i(4325),t.exports=i(5645).String.trimRight},6728:(t,e,i)=>{i(5869),t.exports=i(5645).String.trimLeft},3568:(t,e,i)=>{i(9665),t.exports=i(8787).f("asyncIterator")},115:(t,e,i)=>{i(4579),t.exports=i(1327).global},5663:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},2159:(t,e,i)=>{var r=i(6727);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},1327:t=>{var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},9216:(t,e,i)=>{var r=i(5663);t.exports=function(t,e,i){if(r(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,r){return t.call(e,i,r)};case 3:return function(i,r,n){return t.call(e,i,r,n)}}return function(){return t.apply(e,arguments)}}},9666:(t,e,i)=>{t.exports=!i(7929)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},7467:(t,e,i)=>{var r=i(6727),n=i(3938).document,s=r(n)&&r(n.createElement);t.exports=function(t){return s?n.createElement(t):{}}},3856:(t,e,i)=>{var r=i(3938),n=i(1327),s=i(9216),a=i(1818),o=i(7069),l=function(t,e,i){var c,h,f,p=t&l.F,d=t&l.G,u=t&l.S,g=t&l.P,y=t&l.B,m=t&l.W,x=d?n:n[e]||(n[e]={}),v=x.prototype,w=d?r:u?r[e]:(r[e]||{}).prototype;for(c in d&&(i=e),i)(h=!p&&w&&void 0!==w[c])&&o(x,c)||(f=h?w[c]:i[c],x[c]=d&&"function"!=typeof w[c]?i[c]:y&&h?s(f,r):m&&w[c]==f?function(t){var e=function(e,i,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,i)}return new t(e,i,r)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(f):g&&"function"==typeof f?s(Function.call,f):f,g&&((x.virtual||(x.virtual={}))[c]=f,t&l.R&&v&&!v[c]&&a(v,c,f)))};l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},7929:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},3938:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},7069:t=>{var e={}.hasOwnProperty;t.exports=function(t,i){return e.call(t,i)}},1818:(t,e,i)=>{var r=i(4743),n=i(3101);t.exports=i(9666)?function(t,e,i){return r.f(t,e,n(1,i))}:function(t,e,i){return t[e]=i,t}},3758:(t,e,i)=>{t.exports=!i(9666)&&!i(7929)((function(){return 7!=Object.defineProperty(i(7467)("div"),"a",{get:function(){return 7}}).a}))},6727:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},4743:(t,e,i)=>{var r=i(2159),n=i(3758),s=i(3206),a=Object.defineProperty;e.f=i(9666)?Object.defineProperty:function(t,e,i){if(r(t),e=s(e,!0),r(i),n)try{return a(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},3101:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},3206:(t,e,i)=>{var r=i(6727);t.exports=function(t,e){if(!r(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!r(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!r(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!r(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},4579:(t,e,i)=>{var r=i(3856);r(r.G,{global:i(3938)})},4963:t=>{t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},3365:(t,e,i)=>{var r=i(2032);t.exports=function(t,e){if("number"!=typeof t&&"Number"!=r(t))throw TypeError(e);return+t}},7722:(t,e,i)=>{var r=i(6314)("unscopables"),n=Array.prototype;null==n[r]&&i(7728)(n,r,{}),t.exports=function(t){n[r][t]=!0}},6793:(t,e,i)=>{"use strict";var r=i(4496)(!0);t.exports=function(t,e,i){return e+(i?r(t,e).length:1)}},3328:t=>{t.exports=function(t,e,i,r){if(!(t instanceof e)||void 0!==r&&r in t)throw TypeError(i+": incorrect invocation!");return t}},7007:(t,e,i)=>{var r=i(5286);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},5216:(t,e,i)=>{"use strict";var r=i(508),n=i(2337),s=i(875);t.exports=[].copyWithin||function(t,e){var i=r(this),a=s(i.length),o=n(t,a),l=n(e,a),c=arguments.length>2?arguments[2]:void 0,h=Math.min((void 0===c?a:n(c,a))-l,a-o),f=1;for(l<o&&o<l+h&&(f=-1,l+=h-1,o+=h-1);h-- >0;)l in i?i[o]=i[l]:delete i[o],o+=f,l+=f;return i}},6852:(t,e,i)=>{"use strict";var r=i(508),n=i(2337),s=i(875);t.exports=function(t){for(var e=r(this),i=s(e.length),a=arguments.length,o=n(a>1?arguments[1]:void 0,i),l=a>2?arguments[2]:void 0,c=void 0===l?i:n(l,i);c>o;)e[o++]=t;return e}},9315:(t,e,i)=>{var r=i(2110),n=i(875),s=i(2337);t.exports=function(t){return function(e,i,a){var o,l=r(e),c=n(l.length),h=s(a,c);if(t&&i!=i){for(;c>h;)if((o=l[h++])!=o)return!0}else for(;c>h;h++)if((t||h in l)&&l[h]===i)return t||h||0;return!t&&-1}}},50:(t,e,i)=>{var r=i(741),n=i(9797),s=i(508),a=i(875),o=i(6886);t.exports=function(t,e){var i=1==t,l=2==t,c=3==t,h=4==t,f=6==t,p=5==t||f,d=e||o;return function(e,o,u){for(var g,y,m=s(e),x=n(m),v=r(o,u,3),w=a(x.length),b=0,k=i?d(e,w):l?d(e,0):void 0;w>b;b++)if((p||b in x)&&(y=v(g=x[b],b,m),t))if(i)k[b]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return b;case 2:k.push(g)}else if(h)return!1;return f?-1:c||h?h:k}}},7628:(t,e,i)=>{var r=i(4963),n=i(508),s=i(9797),a=i(875);t.exports=function(t,e,i,o,l){r(e);var c=n(t),h=s(c),f=a(c.length),p=l?f-1:0,d=l?-1:1;if(i<2)for(;;){if(p in h){o=h[p],p+=d;break}if(p+=d,l?p<0:f<=p)throw TypeError("Reduce of empty array with no initial value")}for(;l?p>=0:f>p;p+=d)p in h&&(o=e(o,h[p],p,c));return o}},2736:(t,e,i)=>{var r=i(5286),n=i(4302),s=i(6314)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),r(e)&&null===(e=e[s])&&(e=void 0)),void 0===e?Array:e}},6886:(t,e,i)=>{var r=i(2736);t.exports=function(t,e){return new(r(t))(e)}},4398:(t,e,i)=>{"use strict";var r=i(4963),n=i(5286),s=i(7242),a=[].slice,o={},l=function(t,e,i){if(!(e in o)){for(var r=[],n=0;n<e;n++)r[n]="a["+n+"]";o[e]=Function("F,a","return new F("+r.join(",")+")")}return o[e](t,i)};t.exports=Function.bind||function(t){var e=r(this),i=a.call(arguments,1),o=function(){var r=i.concat(a.call(arguments));return this instanceof o?l(e,r.length,r):s(e,r,t)};return n(e.prototype)&&(o.prototype=e.prototype),o}},1488:(t,e,i)=>{var r=i(2032),n=i(6314)("toStringTag"),s="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,i,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(i=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),n))?i:s?r(e):"Object"==(a=r(e))&&"function"==typeof e.callee?"Arguments":a}},2032:t=>{var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},9824:(t,e,i)=>{"use strict";var r=i(9275).f,n=i(2503),s=i(4408),a=i(741),o=i(3328),l=i(3531),c=i(2923),h=i(5436),f=i(2974),p=i(7057),d=i(4728).fastKey,u=i(1616),g=p?"_s":"size",y=function(t,e){var i,r=d(e);if("F"!==r)return t._i[r];for(i=t._f;i;i=i.n)if(i.k==e)return i};t.exports={getConstructor:function(t,e,i,c){var h=t((function(t,r){o(t,h,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[g]=0,null!=r&&l(r,i,t[c],t)}));return s(h.prototype,{clear:function(){for(var t=u(this,e),i=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete i[r.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var i=u(this,e),r=y(i,t);if(r){var n=r.n,s=r.p;delete i._i[r.i],r.r=!0,s&&(s.n=n),n&&(n.p=s),i._f==r&&(i._f=n),i._l==r&&(i._l=s),i[g]--}return!!r},forEach:function(t){u(this,e);for(var i,r=a(t,arguments.length>1?arguments[1]:void 0,3);i=i?i.n:this._f;)for(r(i.v,i.k,this);i&&i.r;)i=i.p},has:function(t){return!!y(u(this,e),t)}}),p&&r(h.prototype,"size",{get:function(){return u(this,e)[g]}}),h},def:function(t,e,i){var r,n,s=y(t,e);return s?s.v=i:(t._l=s={i:n=d(e,!0),k:e,v:i,p:r=t._l,n:void 0,r:!1},t._f||(t._f=s),r&&(r.n=s),t[g]++,"F"!==n&&(t._i[n]=s)),t},getEntry:y,setStrong:function(t,e,i){c(t,e,(function(t,i){this._t=u(t,e),this._k=i,this._l=void 0}),(function(){for(var t=this,e=t._k,i=t._l;i&&i.r;)i=i.p;return t._t&&(t._l=i=i?i.n:t._t._f)?h(0,"keys"==e?i.k:"values"==e?i.v:[i.k,i.v]):(t._t=void 0,h(1))}),i?"entries":"values",!i,!0),f(e)}}},3657:(t,e,i)=>{"use strict";var r=i(4408),n=i(4728).getWeak,s=i(7007),a=i(5286),o=i(3328),l=i(3531),c=i(50),h=i(9181),f=i(1616),p=c(5),d=c(6),u=0,g=function(t){return t._l||(t._l=new y)},y=function(){this.a=[]},m=function(t,e){return p(t.a,(function(t){return t[0]===e}))};y.prototype={get:function(t){var e=m(this,t);if(e)return e[1]},has:function(t){return!!m(this,t)},set:function(t,e){var i=m(this,t);i?i[1]=e:this.a.push([t,e])},delete:function(t){var e=d(this.a,(function(e){return e[0]===t}));return~e&&this.a.splice(e,1),!!~e}},t.exports={getConstructor:function(t,e,i,s){var c=t((function(t,r){o(t,c,e,"_i"),t._t=e,t._i=u++,t._l=void 0,null!=r&&l(r,i,t[s],t)}));return r(c.prototype,{delete:function(t){if(!a(t))return!1;var i=n(t);return!0===i?g(f(this,e)).delete(t):i&&h(i,this._i)&&delete i[this._i]},has:function(t){if(!a(t))return!1;var i=n(t);return!0===i?g(f(this,e)).has(t):i&&h(i,this._i)}}),c},def:function(t,e,i){var r=n(s(e),!0);return!0===r?g(t).set(e,i):r[t._i]=i,t},ufstore:g}},5795:(t,e,i)=>{"use strict";var r=i(3816),n=i(2985),s=i(7234),a=i(4408),o=i(4728),l=i(3531),c=i(3328),h=i(5286),f=i(4253),p=i(7462),d=i(2943),u=i(266);t.exports=function(t,e,i,g,y,m){var x=r[t],v=x,w=y?"set":"add",b=v&&v.prototype,k={},C=function(t){var e=b[t];s(b,t,"delete"==t||"has"==t?function(t){return!(m&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!h(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,i){return e.call(this,0===t?0:t,i),this})};if("function"==typeof v&&(m||b.forEach&&!f((function(){(new v).entries().next()})))){var z=new v,S=z[w](m?{}:-0,1)!=z,O=f((function(){z.has(1)})),E=p((function(t){new v(t)})),R=!m&&f((function(){for(var t=new v,e=5;e--;)t[w](e,e);return!t.has(-0)}));E||((v=e((function(e,i){c(e,v,t);var r=u(new x,e,v);return null!=i&&l(i,y,r[w],r),r}))).prototype=b,b.constructor=v),(O||R)&&(C("delete"),C("has"),y&&C("get")),(R||S)&&C(w),m&&b.clear&&delete b.clear}else v=g.getConstructor(e,t,y,w),a(v.prototype,i),o.NEED=!0;return d(v,t),k[t]=v,n(n.G+n.W+n.F*(v!=x),k),m||g.setStrong(v,t,y),v}},5645:t=>{var e=t.exports={version:"2.6.12"};"number"==typeof __e&&(__e=e)},2811:(t,e,i)=>{"use strict";var r=i(9275),n=i(681);t.exports=function(t,e,i){e in t?r.f(t,e,n(0,i)):t[e]=i}},741:(t,e,i)=>{var r=i(4963);t.exports=function(t,e,i){if(r(t),void 0===e)return t;switch(i){case 1:return function(i){return t.call(e,i)};case 2:return function(i,r){return t.call(e,i,r)};case 3:return function(i,r,n){return t.call(e,i,r,n)}}return function(){return t.apply(e,arguments)}}},3537:(t,e,i)=>{"use strict";var r=i(4253),n=Date.prototype.getTime,s=Date.prototype.toISOString,a=function(t){return t>9?t:"0"+t};t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=s.call(new Date(-50000000000001))}))||!r((function(){s.call(new Date(NaN))}))?function(){if(!isFinite(n.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),i=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+("00000"+Math.abs(e)).slice(r?-6:-4)+"-"+a(t.getUTCMonth()+1)+"-"+a(t.getUTCDate())+"T"+a(t.getUTCHours())+":"+a(t.getUTCMinutes())+":"+a(t.getUTCSeconds())+"."+(i>99?i:"0"+a(i))+"Z"}:s},870:(t,e,i)=>{"use strict";var r=i(7007),n=i(1689),s="number";t.exports=function(t){if("string"!==t&&t!==s&&"default"!==t)throw TypeError("Incorrect hint");return n(r(this),t!=s)}},1355:t=>{t.exports=function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}},7057:(t,e,i)=>{t.exports=!i(4253)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},2457:(t,e,i)=>{var r=i(5286),n=i(3816).document,s=r(n)&&r(n.createElement);t.exports=function(t){return s?n.createElement(t):{}}},4430:t=>{t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},5541:(t,e,i)=>{var r=i(7184),n=i(4548),s=i(4682);t.exports=function(t){var e=r(t),i=n.f;if(i)for(var a,o=i(t),l=s.f,c=0;o.length>c;)l.call(t,a=o[c++])&&e.push(a);return e}},2985:(t,e,i)=>{var r=i(3816),n=i(5645),s=i(7728),a=i(7234),o=i(741),l=function(t,e,i){var c,h,f,p,d=t&l.F,u=t&l.G,g=t&l.S,y=t&l.P,m=t&l.B,x=u?r:g?r[e]||(r[e]={}):(r[e]||{}).prototype,v=u?n:n[e]||(n[e]={}),w=v.prototype||(v.prototype={});for(c in u&&(i=e),i)f=((h=!d&&x&&void 0!==x[c])?x:i)[c],p=m&&h?o(f,r):y&&"function"==typeof f?o(Function.call,f):f,x&&a(x,c,f,t&l.U),v[c]!=f&&s(v,c,p),y&&w[c]!=f&&(w[c]=f)};r.core=n,l.F=1,l.G=2,l.S=4,l.P=8,l.B=16,l.W=32,l.U=64,l.R=128,t.exports=l},8852:(t,e,i)=>{var r=i(6314)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(i){try{return e[r]=!1,!"/./"[t](e)}catch(t){}}return!0}},4253:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},8082:(t,e,i)=>{"use strict";i(8269);var r=i(7234),n=i(7728),s=i(4253),a=i(1355),o=i(6314),l=i(1165),c=o("species"),h=!s((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var i="ab".split(t);return 2===i.length&&"a"===i[0]&&"b"===i[1]}();t.exports=function(t,e,i){var p=o(t),d=!s((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),u=d?!s((function(){var e=!1,i=/a/;return i.exec=function(){return e=!0,null},"split"===t&&(i.constructor={},i.constructor[c]=function(){return i}),i[p](""),!e})):void 0;if(!d||!u||"replace"===t&&!h||"split"===t&&!f){var g=/./[p],y=i(a,p,""[t],(function(t,e,i,r,n){return e.exec===l?d&&!n?{done:!0,value:g.call(e,i,r)}:{done:!0,value:t.call(i,e,r)}:{done:!1}})),m=y[0],x=y[1];r(String.prototype,t,m),n(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}}},3218:(t,e,i)=>{"use strict";var r=i(7007);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},3325:(t,e,i)=>{"use strict";var r=i(4302),n=i(5286),s=i(875),a=i(741),o=i(6314)("isConcatSpreadable");t.exports=function t(e,i,l,c,h,f,p,d){for(var u,g,y=h,m=0,x=!!p&&a(p,d,3);m<c;){if(m in l){if(u=x?x(l[m],m,i):l[m],g=!1,n(u)&&(g=void 0!==(g=u[o])?!!g:r(u)),g&&f>0)y=t(e,i,u,s(u.length),y,f-1)-1;else{if(y>=9007199254740991)throw TypeError();e[y]=u}y++}m++}return y}},3531:(t,e,i)=>{var r=i(741),n=i(8851),s=i(6555),a=i(7007),o=i(875),l=i(9002),c={},h={},f=t.exports=function(t,e,i,f,p){var d,u,g,y,m=p?function(){return t}:l(t),x=r(i,f,e?2:1),v=0;if("function"!=typeof m)throw TypeError(t+" is not iterable!");if(s(m)){for(d=o(t.length);d>v;v++)if((y=e?x(a(u=t[v])[0],u[1]):x(t[v]))===c||y===h)return y}else for(g=m.call(t);!(u=g.next()).done;)if((y=n(g,x,u.value,e))===c||y===h)return y};f.BREAK=c,f.RETURN=h},18:(t,e,i)=>{t.exports=i(3825)("native-function-to-string",Function.toString)},3816:t=>{var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},9181:t=>{var e={}.hasOwnProperty;t.exports=function(t,i){return e.call(t,i)}},7728:(t,e,i)=>{var r=i(9275),n=i(681);t.exports=i(7057)?function(t,e,i){return r.f(t,e,n(1,i))}:function(t,e,i){return t[e]=i,t}},639:(t,e,i)=>{var r=i(3816).document;t.exports=r&&r.documentElement},1734:(t,e,i)=>{t.exports=!i(7057)&&!i(4253)((function(){return 7!=Object.defineProperty(i(2457)("div"),"a",{get:function(){return 7}}).a}))},266:(t,e,i)=>{var r=i(5286),n=i(7375).set;t.exports=function(t,e,i){var s,a=e.constructor;return a!==i&&"function"==typeof a&&(s=a.prototype)!==i.prototype&&r(s)&&n&&n(t,s),t}},7242:t=>{t.exports=function(t,e,i){var r=void 0===i;switch(e.length){case 0:return r?t():t.call(i);case 1:return r?t(e[0]):t.call(i,e[0]);case 2:return r?t(e[0],e[1]):t.call(i,e[0],e[1]);case 3:return r?t(e[0],e[1],e[2]):t.call(i,e[0],e[1],e[2]);case 4:return r?t(e[0],e[1],e[2],e[3]):t.call(i,e[0],e[1],e[2],e[3])}return t.apply(i,e)}},9797:(t,e,i)=>{var r=i(2032);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},6555:(t,e,i)=>{var r=i(2803),n=i(6314)("iterator"),s=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||s[n]===t)}},4302:(t,e,i)=>{var r=i(2032);t.exports=Array.isArray||function(t){return"Array"==r(t)}},8367:(t,e,i)=>{var r=i(5286),n=Math.floor;t.exports=function(t){return!r(t)&&isFinite(t)&&n(t)===t}},5286:t=>{t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},5364:(t,e,i)=>{var r=i(5286),n=i(2032),s=i(6314)("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==n(t))}},8851:(t,e,i)=>{var r=i(7007);t.exports=function(t,e,i,n){try{return n?e(r(i)[0],i[1]):e(i)}catch(e){var s=t.return;throw void 0!==s&&r(s.call(t)),e}}},9988:(t,e,i)=>{"use strict";var r=i(2503),n=i(681),s=i(2943),a={};i(7728)(a,i(6314)("iterator"),(function(){return this})),t.exports=function(t,e,i){t.prototype=r(a,{next:n(1,i)}),s(t,e+" Iterator")}},2923:(t,e,i)=>{"use strict";var r=i(4461),n=i(2985),s=i(7234),a=i(7728),o=i(2803),l=i(9988),c=i(2943),h=i(468),f=i(6314)("iterator"),p=!([].keys&&"next"in[].keys()),d="keys",u="values",g=function(){return this};t.exports=function(t,e,i,y,m,x,v){l(i,e,y);var w,b,k,C=function(t){if(!p&&t in E)return E[t];switch(t){case d:case u:return function(){return new i(this,t)}}return function(){return new i(this,t)}},z=e+" Iterator",S=m==u,O=!1,E=t.prototype,R=E[f]||E["@@iterator"]||m&&E[m],P=R||C(m),A=m?S?C("entries"):P:void 0,I="Array"==e&&E.entries||R;if(I&&(k=h(I.call(new t)))!==Object.prototype&&k.next&&(c(k,z,!0),r||"function"==typeof k[f]||a(k,f,g)),S&&R&&R.name!==u&&(O=!0,P=function(){return R.call(this)}),r&&!v||!p&&!O&&E[f]||a(E,f,P),o[e]=P,o[z]=g,m)if(w={values:S?P:C(u),keys:x?P:C(d),entries:A},v)for(b in w)b in E||s(E,b,w[b]);else n(n.P+n.F*(p||O),e,w);return w}},7462:(t,e,i)=>{var r=i(6314)("iterator"),n=!1;try{var s=[7][r]();s.return=function(){n=!0},Array.from(s,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!n)return!1;var i=!1;try{var s=[7],a=s[r]();a.next=function(){return{done:i=!0}},s[r]=function(){return a},t(s)}catch(t){}return i}},5436:t=>{t.exports=function(t,e){return{value:e,done:!!t}}},2803:t=>{t.exports={}},4461:t=>{t.exports=!1},3086:t=>{var e=Math.expm1;t.exports=!e||e(10)>22025.465794806718||e(10)<22025.465794806718||-2e-17!=e(-2e-17)?function(t){return 0==(t=+t)?t:t>-1e-6&&t<1e-6?t+t*t/2:Math.exp(t)-1}:e},4934:(t,e,i)=>{var r=i(1801),n=Math.pow,s=n(2,-52),a=n(2,-23),o=n(2,127)*(2-a),l=n(2,-126);t.exports=Math.fround||function(t){var e,i,n=Math.abs(t),c=r(t);return n<l?c*(n/l/a+1/s-1/s)*l*a:(i=(e=(1+a/s)*n)-(e-n))>o||i!=i?c*(1/0):c*i}},6206:t=>{t.exports=Math.log1p||function(t){return(t=+t)>-1e-8&&t<1e-8?t-t*t/2:Math.log(1+t)}},1801:t=>{t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}},4728:(t,e,i)=>{var r=i(3953)("meta"),n=i(5286),s=i(9181),a=i(9275).f,o=0,l=Object.isExtensible||function(){return!0},c=!i(4253)((function(){return l(Object.preventExtensions({}))})),h=function(t){a(t,r,{value:{i:"O"+ ++o,w:{}}})},f=t.exports={KEY:r,NEED:!1,fastKey:function(t,e){if(!n(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,r)){if(!l(t))return"F";if(!e)return"E";h(t)}return t[r].i},getWeak:function(t,e){if(!s(t,r)){if(!l(t))return!0;if(!e)return!1;h(t)}return t[r].w},onFreeze:function(t){return c&&f.NEED&&l(t)&&!s(t,r)&&h(t),t}}},4351:(t,e,i)=>{var r=i(3816),n=i(4193).set,s=r.MutationObserver||r.WebKitMutationObserver,a=r.process,o=r.Promise,l="process"==i(2032)(a);t.exports=function(){var t,e,i,c=function(){var r,n;for(l&&(r=a.domain)&&r.exit();t;){n=t.fn,t=t.next;try{n()}catch(r){throw t?i():e=void 0,r}}e=void 0,r&&r.enter()};if(l)i=function(){a.nextTick(c)};else if(!s||r.navigator&&r.navigator.standalone)if(o&&o.resolve){var h=o.resolve(void 0);i=function(){h.then(c)}}else i=function(){n.call(r,c)};else{var f=!0,p=document.createTextNode("");new s(c).observe(p,{characterData:!0}),i=function(){p.data=f=!f}}return function(r){var n={fn:r,next:void 0};e&&(e.next=n),t||(t=n,i()),e=n}}},3499:(t,e,i)=>{"use strict";var r=i(4963);function n(t){var e,i;this.promise=new t((function(t,r){if(void 0!==e||void 0!==i)throw TypeError("Bad Promise constructor");e=t,i=r})),this.resolve=r(e),this.reject=r(i)}t.exports.f=function(t){return new n(t)}},5345:(t,e,i)=>{"use strict";var r=i(7057),n=i(7184),s=i(4548),a=i(4682),o=i(508),l=i(9797),c=Object.assign;t.exports=!c||i(4253)((function(){var t={},e={},i=Symbol(),r="abcdefghijklmnopqrst";return t[i]=7,r.split("").forEach((function(t){e[t]=t})),7!=c({},t)[i]||Object.keys(c({},e)).join("")!=r}))?function(t,e){for(var i=o(t),c=arguments.length,h=1,f=s.f,p=a.f;c>h;)for(var d,u=l(arguments[h++]),g=f?n(u).concat(f(u)):n(u),y=g.length,m=0;y>m;)d=g[m++],r&&!p.call(u,d)||(i[d]=u[d]);return i}:c},2503:(t,e,i)=>{var r=i(7007),n=i(5588),s=i(4430),a=i(9335)("IE_PROTO"),o=function(){},l=function(){var t,e=i(2457)("iframe"),r=s.length;for(e.style.display="none",i(639).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;r--;)delete l.prototype[s[r]];return l()};t.exports=Object.create||function(t,e){var i;return null!==t?(o.prototype=r(t),i=new o,o.prototype=null,i[a]=t):i=l(),void 0===e?i:n(i,e)}},9275:(t,e,i)=>{var r=i(7007),n=i(1734),s=i(1689),a=Object.defineProperty;e.f=i(7057)?Object.defineProperty:function(t,e,i){if(r(t),e=s(e,!0),r(i),n)try{return a(t,e,i)}catch(t){}if("get"in i||"set"in i)throw TypeError("Accessors not supported!");return"value"in i&&(t[e]=i.value),t}},5588:(t,e,i)=>{var r=i(9275),n=i(7007),s=i(7184);t.exports=i(7057)?Object.defineProperties:function(t,e){n(t);for(var i,a=s(e),o=a.length,l=0;o>l;)r.f(t,i=a[l++],e[i]);return t}},8693:(t,e,i)=>{var r=i(4682),n=i(681),s=i(2110),a=i(1689),o=i(9181),l=i(1734),c=Object.getOwnPropertyDescriptor;e.f=i(7057)?c:function(t,e){if(t=s(t),e=a(e,!0),l)try{return c(t,e)}catch(t){}if(o(t,e))return n(!r.f.call(t,e),t[e])}},9327:(t,e,i)=>{var r=i(2110),n=i(616).f,s={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==s.call(t)?function(t){try{return n(t)}catch(t){return a.slice()}}(t):n(r(t))}},616:(t,e,i)=>{var r=i(189),n=i(4430).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,n)}},4548:(t,e)=>{e.f=Object.getOwnPropertySymbols},468:(t,e,i)=>{var r=i(9181),n=i(508),s=i(9335)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},189:(t,e,i)=>{var r=i(9181),n=i(2110),s=i(9315)(!1),a=i(9335)("IE_PROTO");t.exports=function(t,e){var i,o=n(t),l=0,c=[];for(i in o)i!=a&&r(o,i)&&c.push(i);for(;e.length>l;)r(o,i=e[l++])&&(~s(c,i)||c.push(i));return c}},7184:(t,e,i)=>{var r=i(189),n=i(4430);t.exports=Object.keys||function(t){return r(t,n)}},4682:(t,e)=>{e.f={}.propertyIsEnumerable},3160:(t,e,i)=>{var r=i(2985),n=i(5645),s=i(4253);t.exports=function(t,e){var i=(n.Object||{})[t]||Object[t],a={};a[t]=e(i),r(r.S+r.F*s((function(){i(1)})),"Object",a)}},1131:(t,e,i)=>{var r=i(7057),n=i(7184),s=i(2110),a=i(4682).f;t.exports=function(t){return function(e){for(var i,o=s(e),l=n(o),c=l.length,h=0,f=[];c>h;)i=l[h++],r&&!a.call(o,i)||f.push(t?[i,o[i]]:o[i]);return f}}},7643:(t,e,i)=>{var r=i(616),n=i(4548),s=i(7007),a=i(3816).Reflect;t.exports=a&&a.ownKeys||function(t){var e=r.f(s(t)),i=n.f;return i?e.concat(i(t)):e}},7743:(t,e,i)=>{var r=i(3816).parseFloat,n=i(9599).trim;t.exports=1/r(i(4644)+"-0")!=-1/0?function(t){var e=n(String(t),3),i=r(e);return 0===i&&"-"==e.charAt(0)?-0:i}:r},5960:(t,e,i)=>{var r=i(3816).parseInt,n=i(9599).trim,s=i(4644),a=/^[-+]?0[xX]/;t.exports=8!==r(s+"08")||22!==r(s+"0x16")?function(t,e){var i=n(String(t),3);return r(i,e>>>0||(a.test(i)?16:10))}:r},188:t=>{t.exports=function(t){try{return{e:!1,v:t()}}catch(t){return{e:!0,v:t}}}},94:(t,e,i)=>{var r=i(7007),n=i(5286),s=i(3499);t.exports=function(t,e){if(r(t),n(e)&&e.constructor===t)return e;var i=s.f(t);return(0,i.resolve)(e),i.promise}},681:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},4408:(t,e,i)=>{var r=i(7234);t.exports=function(t,e,i){for(var n in e)r(t,n,e[n],i);return t}},7234:(t,e,i)=>{var r=i(3816),n=i(7728),s=i(9181),a=i(3953)("src"),o=i(18),l="toString",c=(""+o).split(l);i(5645).inspectSource=function(t){return o.call(t)},(t.exports=function(t,e,i,o){var l="function"==typeof i;l&&(s(i,"name")||n(i,"name",e)),t[e]!==i&&(l&&(s(i,a)||n(i,a,t[e]?""+t[e]:c.join(String(e)))),t===r?t[e]=i:o?t[e]?t[e]=i:n(t,e,i):(delete t[e],n(t,e,i)))})(Function.prototype,l,(function(){return"function"==typeof this&&this[a]||o.call(this)}))},7787:(t,e,i)=>{"use strict";var r=i(1488),n=RegExp.prototype.exec;t.exports=function(t,e){var i=t.exec;if("function"==typeof i){var s=i.call(t,e);if("object"!=typeof s)throw new TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==r(t))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(t,e)}},1165:(t,e,i)=>{"use strict";var r,n,s=i(3218),a=RegExp.prototype.exec,o=String.prototype.replace,l=a,c=(r=/a/,n=/b*/g,a.call(r,"a"),a.call(n,"a"),0!==r.lastIndex||0!==n.lastIndex),h=void 0!==/()??/.exec("")[1];(c||h)&&(l=function(t){var e,i,r,n,l=this;return h&&(i=new RegExp("^"+l.source+"$(?!\\s)",s.call(l))),c&&(e=l.lastIndex),r=a.call(l,t),c&&r&&(l.lastIndex=l.global?r.index+r[0].length:e),h&&r&&r.length>1&&o.call(r[0],i,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(r[n]=void 0)})),r}),t.exports=l},7195:t=>{t.exports=Object.is||function(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}},7375:(t,e,i)=>{var r=i(5286),n=i(7007),s=function(t,e){if(n(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{(r=i(741)(Function.call,i(8693).f(Object.prototype,"__proto__").set,2))(t,[]),e=!(t instanceof Array)}catch(t){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:r(t,i),t}}({},!1):void 0),check:s}},2974:(t,e,i)=>{"use strict";var r=i(3816),n=i(9275),s=i(7057),a=i(6314)("species");t.exports=function(t){var e=r[t];s&&e&&!e[a]&&n.f(e,a,{configurable:!0,get:function(){return this}})}},2943:(t,e,i)=>{var r=i(9275).f,n=i(9181),s=i(6314)("toStringTag");t.exports=function(t,e,i){t&&!n(t=i?t:t.prototype,s)&&r(t,s,{configurable:!0,value:e})}},9335:(t,e,i)=>{var r=i(3825)("keys"),n=i(3953);t.exports=function(t){return r[t]||(r[t]=n(t))}},3825:(t,e,i)=>{var r=i(5645),n=i(3816),s="__core-js_shared__",a=n[s]||(n[s]={});(t.exports=function(t,e){return a[t]||(a[t]=void 0!==e?e:{})})("versions",[]).push({version:r.version,mode:i(4461)?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},8364:(t,e,i)=>{var r=i(7007),n=i(4963),s=i(6314)("species");t.exports=function(t,e){var i,a=r(t).constructor;return void 0===a||null==(i=r(a)[s])?e:n(i)}},7717:(t,e,i)=>{"use strict";var r=i(4253);t.exports=function(t,e){return!!t&&r((function(){e?t.call(null,(function(){}),1):t.call(null)}))}},4496:(t,e,i)=>{var r=i(1467),n=i(1355);t.exports=function(t){return function(e,i){var s,a,o=String(n(e)),l=r(i),c=o.length;return l<0||l>=c?t?"":void 0:(s=o.charCodeAt(l))<55296||s>56319||l+1===c||(a=o.charCodeAt(l+1))<56320||a>57343?t?o.charAt(l):s:t?o.slice(l,l+2):a-56320+(s-55296<<10)+65536}}},2094:(t,e,i)=>{var r=i(5364),n=i(1355);t.exports=function(t,e,i){if(r(e))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(t))}},9395:(t,e,i)=>{var r=i(2985),n=i(4253),s=i(1355),a=/"/g,o=function(t,e,i,r){var n=String(s(t)),o="<"+e;return""!==i&&(o+=" "+i+'="'+String(r).replace(a,"&quot;")+'"'),o+">"+n+"</"+e+">"};t.exports=function(t,e){var i={};i[t]=e(o),r(r.P+r.F*n((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3})),"String",i)}},5442:(t,e,i)=>{var r=i(875),n=i(8595),s=i(1355);t.exports=function(t,e,i,a){var o=String(s(t)),l=o.length,c=void 0===i?" ":String(i),h=r(e);if(h<=l||""==c)return o;var f=h-l,p=n.call(c,Math.ceil(f/c.length));return p.length>f&&(p=p.slice(0,f)),a?p+o:o+p}},8595:(t,e,i)=>{"use strict";var r=i(1467),n=i(1355);t.exports=function(t){var e=String(n(this)),i="",s=r(t);if(s<0||s==1/0)throw RangeError("Count can't be negative");for(;s>0;(s>>>=1)&&(e+=e))1&s&&(i+=e);return i}},9599:(t,e,i)=>{var r=i(2985),n=i(1355),s=i(4253),a=i(4644),o="["+a+"]",l=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),h=function(t,e,i){var n={},o=s((function(){return!!a[t]()||"​"!="​"[t]()})),l=n[t]=o?e(f):a[t];i&&(n[i]=l),r(r.P+r.F*o,"String",n)},f=h.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(c,"")),t};t.exports=h},4644:t=>{t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},4193:(t,e,i)=>{var r,n,s,a=i(741),o=i(7242),l=i(639),c=i(2457),h=i(3816),f=h.process,p=h.setImmediate,d=h.clearImmediate,u=h.MessageChannel,g=h.Dispatch,y=0,m={},x=function(){var t=+this;if(m.hasOwnProperty(t)){var e=m[t];delete m[t],e()}},v=function(t){x.call(t.data)};p&&d||(p=function(t){for(var e=[],i=1;arguments.length>i;)e.push(arguments[i++]);return m[++y]=function(){o("function"==typeof t?t:Function(t),e)},r(y),y},d=function(t){delete m[t]},"process"==i(2032)(f)?r=function(t){f.nextTick(a(x,t,1))}:g&&g.now?r=function(t){g.now(a(x,t,1))}:u?(s=(n=new u).port2,n.port1.onmessage=v,r=a(s.postMessage,s,1)):h.addEventListener&&"function"==typeof postMessage&&!h.importScripts?(r=function(t){h.postMessage(t+"","*")},h.addEventListener("message",v,!1)):r="onreadystatechange"in c("script")?function(t){l.appendChild(c("script")).onreadystatechange=function(){l.removeChild(this),x.call(t)}}:function(t){setTimeout(a(x,t,1),0)}),t.exports={set:p,clear:d}},2337:(t,e,i)=>{var r=i(1467),n=Math.max,s=Math.min;t.exports=function(t,e){return(t=r(t))<0?n(t+e,0):s(t,e)}},4843:(t,e,i)=>{var r=i(1467),n=i(875);t.exports=function(t){if(void 0===t)return 0;var e=r(t),i=n(e);if(e!==i)throw RangeError("Wrong length!");return i}},1467:t=>{var e=Math.ceil,i=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?i:e)(t)}},2110:(t,e,i)=>{var r=i(9797),n=i(1355);t.exports=function(t){return r(n(t))}},875:(t,e,i)=>{var r=i(1467),n=Math.min;t.exports=function(t){return t>0?n(r(t),9007199254740991):0}},508:(t,e,i)=>{var r=i(1355);t.exports=function(t){return Object(r(t))}},1689:(t,e,i)=>{var r=i(5286);t.exports=function(t,e){if(!r(t))return t;var i,n;if(e&&"function"==typeof(i=t.toString)&&!r(n=i.call(t)))return n;if("function"==typeof(i=t.valueOf)&&!r(n=i.call(t)))return n;if(!e&&"function"==typeof(i=t.toString)&&!r(n=i.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},8440:(t,e,i)=>{"use strict";if(i(7057)){var r=i(4461),n=i(3816),s=i(4253),a=i(2985),o=i(9383),l=i(1125),c=i(741),h=i(3328),f=i(681),p=i(7728),d=i(4408),u=i(1467),g=i(875),y=i(4843),m=i(2337),x=i(1689),v=i(9181),w=i(1488),b=i(5286),k=i(508),C=i(6555),z=i(2503),S=i(468),O=i(616).f,E=i(9002),R=i(3953),P=i(6314),A=i(50),I=i(9315),D=i(8364),$=i(6997),M=i(2803),B=i(7462),T=i(2974),U=i(6852),_=i(5216),j=i(9275),F=i(8693),N=j.f,V=F.f,L=n.RangeError,G=n.TypeError,H=n.Uint8Array,X="ArrayBuffer",W="SharedArrayBuffer",K="BYTES_PER_ELEMENT",q=Array.prototype,Y=l.ArrayBuffer,Z=l.DataView,J=A(0),Q=A(2),tt=A(3),et=A(4),it=A(5),rt=A(6),nt=I(!0),st=I(!1),at=$.values,ot=$.keys,lt=$.entries,ct=q.lastIndexOf,ht=q.reduce,ft=q.reduceRight,pt=q.join,dt=q.sort,ut=q.slice,gt=q.toString,yt=q.toLocaleString,mt=P("iterator"),xt=P("toStringTag"),vt=R("typed_constructor"),wt=R("def_constructor"),bt=o.CONSTR,kt=o.TYPED,Ct=o.VIEW,zt="Wrong length!",St=A(1,(function(t,e){return At(D(t,t[wt]),e)})),Ot=s((function(){return 1===new H(new Uint16Array([1]).buffer)[0]})),Et=!!H&&!!H.prototype.set&&s((function(){new H(1).set({})})),Rt=function(t,e){var i=u(t);if(i<0||i%e)throw L("Wrong offset!");return i},Pt=function(t){if(b(t)&&kt in t)return t;throw G(t+" is not a typed array!")},At=function(t,e){if(!b(t)||!(vt in t))throw G("It is not a typed array constructor!");return new t(e)},It=function(t,e){return Dt(D(t,t[wt]),e)},Dt=function(t,e){for(var i=0,r=e.length,n=At(t,r);r>i;)n[i]=e[i++];return n},$t=function(t,e,i){N(t,e,{get:function(){return this._d[i]}})},Mt=function(t){var e,i,r,n,s,a,o=k(t),l=arguments.length,h=l>1?arguments[1]:void 0,f=void 0!==h,p=E(o);if(null!=p&&!C(p)){for(a=p.call(o),r=[],e=0;!(s=a.next()).done;e++)r.push(s.value);o=r}for(f&&l>2&&(h=c(h,arguments[2],2)),e=0,i=g(o.length),n=At(this,i);i>e;e++)n[e]=f?h(o[e],e):o[e];return n},Bt=function(){for(var t=0,e=arguments.length,i=At(this,e);e>t;)i[t]=arguments[t++];return i},Tt=!!H&&s((function(){yt.call(new H(1))})),Ut=function(){return yt.apply(Tt?ut.call(Pt(this)):Pt(this),arguments)},_t={copyWithin:function(t,e){return _.call(Pt(this),t,e,arguments.length>2?arguments[2]:void 0)},every:function(t){return et(Pt(this),t,arguments.length>1?arguments[1]:void 0)},fill:function(t){return U.apply(Pt(this),arguments)},filter:function(t){return It(this,Q(Pt(this),t,arguments.length>1?arguments[1]:void 0))},find:function(t){return it(Pt(this),t,arguments.length>1?arguments[1]:void 0)},findIndex:function(t){return rt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},forEach:function(t){J(Pt(this),t,arguments.length>1?arguments[1]:void 0)},indexOf:function(t){return st(Pt(this),t,arguments.length>1?arguments[1]:void 0)},includes:function(t){return nt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},join:function(t){return pt.apply(Pt(this),arguments)},lastIndexOf:function(t){return ct.apply(Pt(this),arguments)},map:function(t){return St(Pt(this),t,arguments.length>1?arguments[1]:void 0)},reduce:function(t){return ht.apply(Pt(this),arguments)},reduceRight:function(t){return ft.apply(Pt(this),arguments)},reverse:function(){for(var t,e=this,i=Pt(e).length,r=Math.floor(i/2),n=0;n<r;)t=e[n],e[n++]=e[--i],e[i]=t;return e},some:function(t){return tt(Pt(this),t,arguments.length>1?arguments[1]:void 0)},sort:function(t){return dt.call(Pt(this),t)},subarray:function(t,e){var i=Pt(this),r=i.length,n=m(t,r);return new(D(i,i[wt]))(i.buffer,i.byteOffset+n*i.BYTES_PER_ELEMENT,g((void 0===e?r:m(e,r))-n))}},jt=function(t,e){return It(this,ut.call(Pt(this),t,e))},Ft=function(t){Pt(this);var e=Rt(arguments[1],1),i=this.length,r=k(t),n=g(r.length),s=0;if(n+e>i)throw L(zt);for(;s<n;)this[e+s]=r[s++]},Nt={entries:function(){return lt.call(Pt(this))},keys:function(){return ot.call(Pt(this))},values:function(){return at.call(Pt(this))}},Vt=function(t,e){return b(t)&&t[kt]&&"symbol"!=typeof e&&e in t&&String(+e)==String(e)},Lt=function(t,e){return Vt(t,e=x(e,!0))?f(2,t[e]):V(t,e)},Gt=function(t,e,i){return!(Vt(t,e=x(e,!0))&&b(i)&&v(i,"value"))||v(i,"get")||v(i,"set")||i.configurable||v(i,"writable")&&!i.writable||v(i,"enumerable")&&!i.enumerable?N(t,e,i):(t[e]=i.value,t)};bt||(F.f=Lt,j.f=Gt),a(a.S+a.F*!bt,"Object",{getOwnPropertyDescriptor:Lt,defineProperty:Gt}),s((function(){gt.call({})}))&&(gt=yt=function(){return pt.call(this)});var Ht=d({},_t);d(Ht,Nt),p(Ht,mt,Nt.values),d(Ht,{slice:jt,set:Ft,constructor:function(){},toString:gt,toLocaleString:Ut}),$t(Ht,"buffer","b"),$t(Ht,"byteOffset","o"),$t(Ht,"byteLength","l"),$t(Ht,"length","e"),N(Ht,xt,{get:function(){return this[kt]}}),t.exports=function(t,e,i,l){var c=t+((l=!!l)?"Clamped":"")+"Array",f="get"+t,d="set"+t,u=n[c],m=u||{},x=u&&S(u),v=!u||!o.ABV,k={},C=u&&u.prototype,E=function(t,i){N(t,i,{get:function(){return function(t,i){var r=t._d;return r.v[f](i*e+r.o,Ot)}(this,i)},set:function(t){return function(t,i,r){var n=t._d;l&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),n.v[d](i*e+n.o,r,Ot)}(this,i,t)},enumerable:!0})};v?(u=i((function(t,i,r,n){h(t,u,c,"_d");var s,a,o,l,f=0,d=0;if(b(i)){if(!(i instanceof Y||(l=w(i))==X||l==W))return kt in i?Dt(u,i):Mt.call(u,i);s=i,d=Rt(r,e);var m=i.byteLength;if(void 0===n){if(m%e)throw L(zt);if((a=m-d)<0)throw L(zt)}else if((a=g(n)*e)+d>m)throw L(zt);o=a/e}else o=y(i),s=new Y(a=o*e);for(p(t,"_d",{b:s,o:d,l:a,e:o,v:new Z(s)});f<o;)E(t,f++)})),C=u.prototype=z(Ht),p(C,"constructor",u)):s((function(){u(1)}))&&s((function(){new u(-1)}))&&B((function(t){new u,new u(null),new u(1.5),new u(t)}),!0)||(u=i((function(t,i,r,n){var s;return h(t,u,c),b(i)?i instanceof Y||(s=w(i))==X||s==W?void 0!==n?new m(i,Rt(r,e),n):void 0!==r?new m(i,Rt(r,e)):new m(i):kt in i?Dt(u,i):Mt.call(u,i):new m(y(i))})),J(x!==Function.prototype?O(m).concat(O(x)):O(m),(function(t){t in u||p(u,t,m[t])})),u.prototype=C,r||(C.constructor=u));var R=C[mt],P=!!R&&("values"==R.name||null==R.name),A=Nt.values;p(u,vt,!0),p(C,kt,c),p(C,Ct,!0),p(C,wt,u),(l?new u(1)[xt]==c:xt in C)||N(C,xt,{get:function(){return c}}),k[c]=u,a(a.G+a.W+a.F*(u!=m),k),a(a.S,c,{BYTES_PER_ELEMENT:e}),a(a.S+a.F*s((function(){m.of.call(u,1)})),c,{from:Mt,of:Bt}),K in C||p(C,K,e),a(a.P,c,_t),T(c),a(a.P+a.F*Et,c,{set:Ft}),a(a.P+a.F*!P,c,Nt),r||C.toString==gt||(C.toString=gt),a(a.P+a.F*s((function(){new u(1).slice()})),c,{slice:jt}),a(a.P+a.F*(s((function(){return[1,2].toLocaleString()!=new u([1,2]).toLocaleString()}))||!s((function(){C.toLocaleString.call([1,2])}))),c,{toLocaleString:Ut}),M[c]=P?R:A,r||P||p(C,mt,A)}}else t.exports=function(){}},1125:(t,e,i)=>{"use strict";var r=i(3816),n=i(7057),s=i(4461),a=i(9383),o=i(7728),l=i(4408),c=i(4253),h=i(3328),f=i(1467),p=i(875),d=i(4843),u=i(616).f,g=i(9275).f,y=i(6852),m=i(2943),x="ArrayBuffer",v="DataView",w="Wrong index!",b=r.ArrayBuffer,k=r.DataView,C=r.Math,z=r.RangeError,S=r.Infinity,O=b,E=C.abs,R=C.pow,P=C.floor,A=C.log,I=C.LN2,D="buffer",$="byteLength",M="byteOffset",B=n?"_b":D,T=n?"_l":$,U=n?"_o":M;function _(t,e,i){var r,n,s,a=new Array(i),o=8*i-e-1,l=(1<<o)-1,c=l>>1,h=23===e?R(2,-24)-R(2,-77):0,f=0,p=t<0||0===t&&1/t<0?1:0;for((t=E(t))!=t||t===S?(n=t!=t?1:0,r=l):(r=P(A(t)/I),t*(s=R(2,-r))<1&&(r--,s*=2),(t+=r+c>=1?h/s:h*R(2,1-c))*s>=2&&(r++,s/=2),r+c>=l?(n=0,r=l):r+c>=1?(n=(t*s-1)*R(2,e),r+=c):(n=t*R(2,c-1)*R(2,e),r=0));e>=8;a[f++]=255&n,n/=256,e-=8);for(r=r<<e|n,o+=e;o>0;a[f++]=255&r,r/=256,o-=8);return a[--f]|=128*p,a}function j(t,e,i){var r,n=8*i-e-1,s=(1<<n)-1,a=s>>1,o=n-7,l=i-1,c=t[l--],h=127&c;for(c>>=7;o>0;h=256*h+t[l],l--,o-=8);for(r=h&(1<<-o)-1,h>>=-o,o+=e;o>0;r=256*r+t[l],l--,o-=8);if(0===h)h=1-a;else{if(h===s)return r?NaN:c?-S:S;r+=R(2,e),h-=a}return(c?-1:1)*r*R(2,h-e)}function F(t){return t[3]<<24|t[2]<<16|t[1]<<8|t[0]}function N(t){return[255&t]}function V(t){return[255&t,t>>8&255]}function L(t){return[255&t,t>>8&255,t>>16&255,t>>24&255]}function G(t){return _(t,52,8)}function H(t){return _(t,23,4)}function X(t,e,i){g(t.prototype,e,{get:function(){return this[i]}})}function W(t,e,i,r){var n=d(+i);if(n+e>t[T])throw z(w);var s=t[B]._b,a=n+t[U],o=s.slice(a,a+e);return r?o:o.reverse()}function K(t,e,i,r,n,s){var a=d(+i);if(a+e>t[T])throw z(w);for(var o=t[B]._b,l=a+t[U],c=r(+n),h=0;h<e;h++)o[l+h]=c[s?h:e-h-1]}if(a.ABV){if(!c((function(){b(1)}))||!c((function(){new b(-1)}))||c((function(){return new b,new b(1.5),new b(NaN),b.name!=x}))){for(var q,Y=(b=function(t){return h(this,b),new O(d(t))}).prototype=O.prototype,Z=u(O),J=0;Z.length>J;)(q=Z[J++])in b||o(b,q,O[q]);s||(Y.constructor=b)}var Q=new k(new b(2)),tt=k.prototype.setInt8;Q.setInt8(0,2147483648),Q.setInt8(1,2147483649),!Q.getInt8(0)&&Q.getInt8(1)||l(k.prototype,{setInt8:function(t,e){tt.call(this,t,e<<24>>24)},setUint8:function(t,e){tt.call(this,t,e<<24>>24)}},!0)}else b=function(t){h(this,b,x);var e=d(t);this._b=y.call(new Array(e),0),this[T]=e},k=function(t,e,i){h(this,k,v),h(t,b,v);var r=t[T],n=f(e);if(n<0||n>r)throw z("Wrong offset!");if(n+(i=void 0===i?r-n:p(i))>r)throw z("Wrong length!");this[B]=t,this[U]=n,this[T]=i},n&&(X(b,$,"_l"),X(k,D,"_b"),X(k,$,"_l"),X(k,M,"_o")),l(k.prototype,{getInt8:function(t){return W(this,1,t)[0]<<24>>24},getUint8:function(t){return W(this,1,t)[0]},getInt16:function(t){var e=W(this,2,t,arguments[1]);return(e[1]<<8|e[0])<<16>>16},getUint16:function(t){var e=W(this,2,t,arguments[1]);return e[1]<<8|e[0]},getInt32:function(t){return F(W(this,4,t,arguments[1]))},getUint32:function(t){return F(W(this,4,t,arguments[1]))>>>0},getFloat32:function(t){return j(W(this,4,t,arguments[1]),23,4)},getFloat64:function(t){return j(W(this,8,t,arguments[1]),52,8)},setInt8:function(t,e){K(this,1,t,N,e)},setUint8:function(t,e){K(this,1,t,N,e)},setInt16:function(t,e){K(this,2,t,V,e,arguments[2])},setUint16:function(t,e){K(this,2,t,V,e,arguments[2])},setInt32:function(t,e){K(this,4,t,L,e,arguments[2])},setUint32:function(t,e){K(this,4,t,L,e,arguments[2])},setFloat32:function(t,e){K(this,4,t,H,e,arguments[2])},setFloat64:function(t,e){K(this,8,t,G,e,arguments[2])}});m(b,x),m(k,v),o(k.prototype,a.VIEW,!0),e.ArrayBuffer=b,e.DataView=k},9383:(t,e,i)=>{for(var r,n=i(3816),s=i(7728),a=i(3953),o=a("typed_array"),l=a("view"),c=!(!n.ArrayBuffer||!n.DataView),h=c,f=0,p="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(r=n[p[f++]])?(s(r.prototype,o,!0),s(r.prototype,l,!0)):h=!1;t.exports={ABV:c,CONSTR:h,TYPED:o,VIEW:l}},3953:t=>{var e=0,i=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+i).toString(36))}},575:(t,e,i)=>{var r=i(3816).navigator;t.exports=r&&r.userAgent||""},1616:(t,e,i)=>{var r=i(5286);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},6074:(t,e,i)=>{var r=i(3816),n=i(5645),s=i(4461),a=i(8787),o=i(9275).f;t.exports=function(t){var e=n.Symbol||(n.Symbol=s?{}:r.Symbol||{});"_"==t.charAt(0)||t in e||o(e,t,{value:a.f(t)})}},8787:(t,e,i)=>{e.f=i(6314)},6314:(t,e,i)=>{var r=i(3825)("wks"),n=i(3953),s=i(3816).Symbol,a="function"==typeof s;(t.exports=function(t){return r[t]||(r[t]=a&&s[t]||(a?s:n)("Symbol."+t))}).store=r},9002:(t,e,i)=>{var r=i(1488),n=i(6314)("iterator"),s=i(2803);t.exports=i(5645).getIteratorMethod=function(t){if(null!=t)return t[n]||t["@@iterator"]||s[r(t)]}},2e3:(t,e,i)=>{var r=i(2985);r(r.P,"Array",{copyWithin:i(5216)}),i(7722)("copyWithin")},5745:(t,e,i)=>{"use strict";var r=i(2985),n=i(50)(4);r(r.P+r.F*!i(7717)([].every,!0),"Array",{every:function(t){return n(this,t,arguments[1])}})},8977:(t,e,i)=>{var r=i(2985);r(r.P,"Array",{fill:i(6852)}),i(7722)("fill")},8837:(t,e,i)=>{"use strict";var r=i(2985),n=i(50)(2);r(r.P+r.F*!i(7717)([].filter,!0),"Array",{filter:function(t){return n(this,t,arguments[1])}})},4899:(t,e,i)=>{"use strict";var r=i(2985),n=i(50)(6),s="findIndex",a=!0;s in[]&&Array(1)[s]((function(){a=!1})),r(r.P+r.F*a,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(7722)(s)},2310:(t,e,i)=>{"use strict";var r=i(2985),n=i(50)(5),s="find",a=!0;s in[]&&Array(1).find((function(){a=!1})),r(r.P+r.F*a,"Array",{find:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(7722)(s)},4336:(t,e,i)=>{"use strict";var r=i(2985),n=i(50)(0),s=i(7717)([].forEach,!0);r(r.P+r.F*!s,"Array",{forEach:function(t){return n(this,t,arguments[1])}})},522:(t,e,i)=>{"use strict";var r=i(741),n=i(2985),s=i(508),a=i(8851),o=i(6555),l=i(875),c=i(2811),h=i(9002);n(n.S+n.F*!i(7462)((function(t){Array.from(t)})),"Array",{from:function(t){var e,i,n,f,p=s(t),d="function"==typeof this?this:Array,u=arguments.length,g=u>1?arguments[1]:void 0,y=void 0!==g,m=0,x=h(p);if(y&&(g=r(g,u>2?arguments[2]:void 0,2)),null==x||d==Array&&o(x))for(i=new d(e=l(p.length));e>m;m++)c(i,m,y?g(p[m],m):p[m]);else for(f=x.call(p),i=new d;!(n=f.next()).done;m++)c(i,m,y?a(f,g,[n.value,m],!0):n.value);return i.length=m,i}})},3369:(t,e,i)=>{"use strict";var r=i(2985),n=i(9315)(!1),s=[].indexOf,a=!!s&&1/[1].indexOf(1,-0)<0;r(r.P+r.F*(a||!i(7717)(s)),"Array",{indexOf:function(t){return a?s.apply(this,arguments)||0:n(this,t,arguments[1])}})},774:(t,e,i)=>{var r=i(2985);r(r.S,"Array",{isArray:i(4302)})},6997:(t,e,i)=>{"use strict";var r=i(7722),n=i(5436),s=i(2803),a=i(2110);t.exports=i(2923)(Array,"Array",(function(t,e){this._t=a(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,i=this._i++;return!t||i>=t.length?(this._t=void 0,n(1)):n(0,"keys"==e?i:"values"==e?t[i]:[i,t[i]])}),"values"),s.Arguments=s.Array,r("keys"),r("values"),r("entries")},7842:(t,e,i)=>{"use strict";var r=i(2985),n=i(2110),s=[].join;r(r.P+r.F*(i(9797)!=Object||!i(7717)(s)),"Array",{join:function(t){return s.call(n(this),void 0===t?",":t)}})},9564:(t,e,i)=>{"use strict";var r=i(2985),n=i(2110),s=i(1467),a=i(875),o=[].lastIndexOf,l=!!o&&1/[1].lastIndexOf(1,-0)<0;r(r.P+r.F*(l||!i(7717)(o)),"Array",{lastIndexOf:function(t){if(l)return o.apply(this,arguments)||0;var e=n(this),i=a(e.length),r=i-1;for(arguments.length>1&&(r=Math.min(r,s(arguments[1]))),r<0&&(r=i+r);r>=0;r--)if(r in e&&e[r]===t)return r||0;return-1}})},1802:(t,e,i)=>{"use strict";var r=i(2985),n=i(50)(1);r(r.P+r.F*!i(7717)([].map,!0),"Array",{map:function(t){return n(this,t,arguments[1])}})},8295:(t,e,i)=>{"use strict";var r=i(2985),n=i(2811);r(r.S+r.F*i(4253)((function(){function t(){}return!(Array.of.call(t)instanceof t)})),"Array",{of:function(){for(var t=0,e=arguments.length,i=new("function"==typeof this?this:Array)(e);e>t;)n(i,t,arguments[t++]);return i.length=e,i}})},3750:(t,e,i)=>{"use strict";var r=i(2985),n=i(7628);r(r.P+r.F*!i(7717)([].reduceRight,!0),"Array",{reduceRight:function(t){return n(this,t,arguments.length,arguments[1],!0)}})},3057:(t,e,i)=>{"use strict";var r=i(2985),n=i(7628);r(r.P+r.F*!i(7717)([].reduce,!0),"Array",{reduce:function(t){return n(this,t,arguments.length,arguments[1],!1)}})},110:(t,e,i)=>{"use strict";var r=i(2985),n=i(639),s=i(2032),a=i(2337),o=i(875),l=[].slice;r(r.P+r.F*i(4253)((function(){n&&l.call(n)})),"Array",{slice:function(t,e){var i=o(this.length),r=s(this);if(e=void 0===e?i:e,"Array"==r)return l.call(this,t,e);for(var n=a(t,i),c=a(e,i),h=o(c-n),f=new Array(h),p=0;p<h;p++)f[p]="String"==r?this.charAt(n+p):this[n+p];return f}})},6773:(t,e,i)=>{"use strict";var r=i(2985),n=i(50)(3);r(r.P+r.F*!i(7717)([].some,!0),"Array",{some:function(t){return n(this,t,arguments[1])}})},75:(t,e,i)=>{"use strict";var r=i(2985),n=i(4963),s=i(508),a=i(4253),o=[].sort,l=[1,2,3];r(r.P+r.F*(a((function(){l.sort(void 0)}))||!a((function(){l.sort(null)}))||!i(7717)(o)),"Array",{sort:function(t){return void 0===t?o.call(s(this)):o.call(s(this),n(t))}})},1842:(t,e,i)=>{i(2974)("Array")},1822:(t,e,i)=>{var r=i(2985);r(r.S,"Date",{now:function(){return(new Date).getTime()}})},1031:(t,e,i)=>{var r=i(2985),n=i(3537);r(r.P+r.F*(Date.prototype.toISOString!==n),"Date",{toISOString:n})},9977:(t,e,i)=>{"use strict";var r=i(2985),n=i(508),s=i(1689);r(r.P+r.F*i(4253)((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(t){var e=n(this),i=s(e);return"number"!=typeof i||isFinite(i)?e.toISOString():null}})},1560:(t,e,i)=>{var r=i(6314)("toPrimitive"),n=Date.prototype;r in n||i(7728)(n,r,i(870))},6331:(t,e,i)=>{var r=Date.prototype,n="Invalid Date",s=r.toString,a=r.getTime;new Date(NaN)+""!=n&&i(7234)(r,"toString",(function(){var t=a.call(this);return t==t?s.call(this):n}))},9730:(t,e,i)=>{var r=i(2985);r(r.P,"Function",{bind:i(4398)})},8377:(t,e,i)=>{"use strict";var r=i(5286),n=i(468),s=i(6314)("hasInstance"),a=Function.prototype;s in a||i(9275).f(a,s,{value:function(t){if("function"!=typeof this||!r(t))return!1;if(!r(this.prototype))return t instanceof this;for(;t=n(t);)if(this.prototype===t)return!0;return!1}})},6059:(t,e,i)=>{var r=i(9275).f,n=Function.prototype,s=/^\s*function ([^ (]*)/,a="name";a in n||i(7057)&&r(n,a,{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(t){return""}}})},8416:(t,e,i)=>{"use strict";var r=i(9824),n=i(1616),s="Map";t.exports=i(5795)(s,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(n(this,s),t);return e&&e.v},set:function(t,e){return r.def(n(this,s),0===t?0:t,e)}},r,!0)},6503:(t,e,i)=>{var r=i(2985),n=i(6206),s=Math.sqrt,a=Math.acosh;r(r.S+r.F*!(a&&710==Math.floor(a(Number.MAX_VALUE))&&a(1/0)==1/0),"Math",{acosh:function(t){return(t=+t)<1?NaN:t>94906265.62425156?Math.log(t)+Math.LN2:n(t-1+s(t-1)*s(t+1))}})},6786:(t,e,i)=>{var r=i(2985),n=Math.asinh;r(r.S+r.F*!(n&&1/n(0)>0),"Math",{asinh:function t(e){return isFinite(e=+e)&&0!=e?e<0?-t(-e):Math.log(e+Math.sqrt(e*e+1)):e}})},932:(t,e,i)=>{var r=i(2985),n=Math.atanh;r(r.S+r.F*!(n&&1/n(-0)<0),"Math",{atanh:function(t){return 0==(t=+t)?t:Math.log((1+t)/(1-t))/2}})},7526:(t,e,i)=>{var r=i(2985),n=i(1801);r(r.S,"Math",{cbrt:function(t){return n(t=+t)*Math.pow(Math.abs(t),1/3)}})},1591:(t,e,i)=>{var r=i(2985);r(r.S,"Math",{clz32:function(t){return(t>>>=0)?31-Math.floor(Math.log(t+.5)*Math.LOG2E):32}})},9073:(t,e,i)=>{var r=i(2985),n=Math.exp;r(r.S,"Math",{cosh:function(t){return(n(t=+t)+n(-t))/2}})},347:(t,e,i)=>{var r=i(2985),n=i(3086);r(r.S+r.F*(n!=Math.expm1),"Math",{expm1:n})},579:(t,e,i)=>{var r=i(2985);r(r.S,"Math",{fround:i(4934)})},4669:(t,e,i)=>{var r=i(2985),n=Math.abs;r(r.S,"Math",{hypot:function(t,e){for(var i,r,s=0,a=0,o=arguments.length,l=0;a<o;)l<(i=n(arguments[a++]))?(s=s*(r=l/i)*r+1,l=i):s+=i>0?(r=i/l)*r:i;return l===1/0?1/0:l*Math.sqrt(s)}})},7710:(t,e,i)=>{var r=i(2985),n=Math.imul;r(r.S+r.F*i(4253)((function(){return-5!=n(4294967295,5)||2!=n.length})),"Math",{imul:function(t,e){var i=65535,r=+t,n=+e,s=i&r,a=i&n;return 0|s*a+((i&r>>>16)*a+s*(i&n>>>16)<<16>>>0)}})},5789:(t,e,i)=>{var r=i(2985);r(r.S,"Math",{log10:function(t){return Math.log(t)*Math.LOG10E}})},3514:(t,e,i)=>{var r=i(2985);r(r.S,"Math",{log1p:i(6206)})},9978:(t,e,i)=>{var r=i(2985);r(r.S,"Math",{log2:function(t){return Math.log(t)/Math.LN2}})},8472:(t,e,i)=>{var r=i(2985);r(r.S,"Math",{sign:i(1801)})},6946:(t,e,i)=>{var r=i(2985),n=i(3086),s=Math.exp;r(r.S+r.F*i(4253)((function(){return-2e-17!=!Math.sinh(-2e-17)})),"Math",{sinh:function(t){return Math.abs(t=+t)<1?(n(t)-n(-t))/2:(s(t-1)-s(-t-1))*(Math.E/2)}})},5068:(t,e,i)=>{var r=i(2985),n=i(3086),s=Math.exp;r(r.S,"Math",{tanh:function(t){var e=n(t=+t),i=n(-t);return e==1/0?1:i==1/0?-1:(e-i)/(s(t)+s(-t))}})},413:(t,e,i)=>{var r=i(2985);r(r.S,"Math",{trunc:function(t){return(t>0?Math.floor:Math.ceil)(t)}})},1246:(t,e,i)=>{"use strict";var r=i(3816),n=i(9181),s=i(2032),a=i(266),o=i(1689),l=i(4253),c=i(616).f,h=i(8693).f,f=i(9275).f,p=i(9599).trim,d="Number",u=r.Number,g=u,y=u.prototype,m=s(i(2503)(y))==d,x="trim"in String.prototype,v=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){var i,r,n,s=(e=x?e.trim():p(e,3)).charCodeAt(0);if(43===s||45===s){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:r=2,n=49;break;case 79:case 111:r=8,n=55;break;default:return+e}for(var a,l=e.slice(2),c=0,h=l.length;c<h;c++)if((a=l.charCodeAt(c))<48||a>n)return NaN;return parseInt(l,r)}}return+e};if(!u(" 0o1")||!u("0b1")||u("+0x1")){u=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof u&&(m?l((function(){y.valueOf.call(i)})):s(i)!=d)?a(new g(v(e)),i,u):v(e)};for(var w,b=i(7057)?c(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),k=0;b.length>k;k++)n(g,w=b[k])&&!n(u,w)&&f(u,w,h(g,w));u.prototype=y,y.constructor=u,i(7234)(r,d,u)}},5972:(t,e,i)=>{var r=i(2985);r(r.S,"Number",{EPSILON:Math.pow(2,-52)})},3403:(t,e,i)=>{var r=i(2985),n=i(3816).isFinite;r(r.S,"Number",{isFinite:function(t){return"number"==typeof t&&n(t)}})},2516:(t,e,i)=>{var r=i(2985);r(r.S,"Number",{isInteger:i(8367)})},9371:(t,e,i)=>{var r=i(2985);r(r.S,"Number",{isNaN:function(t){return t!=t}})},6479:(t,e,i)=>{var r=i(2985),n=i(8367),s=Math.abs;r(r.S,"Number",{isSafeInteger:function(t){return n(t)&&s(t)<=9007199254740991}})},1736:(t,e,i)=>{var r=i(2985);r(r.S,"Number",{MAX_SAFE_INTEGER:9007199254740991})},1889:(t,e,i)=>{var r=i(2985);r(r.S,"Number",{MIN_SAFE_INTEGER:-9007199254740991})},5177:(t,e,i)=>{var r=i(2985),n=i(7743);r(r.S+r.F*(Number.parseFloat!=n),"Number",{parseFloat:n})},6943:(t,e,i)=>{var r=i(2985),n=i(5960);r(r.S+r.F*(Number.parseInt!=n),"Number",{parseInt:n})},726:(t,e,i)=>{"use strict";var r=i(2985),n=i(1467),s=i(3365),a=i(8595),o=1..toFixed,l=Math.floor,c=[0,0,0,0,0,0],h="Number.toFixed: incorrect invocation!",f="0",p=function(t,e){for(var i=-1,r=e;++i<6;)r+=t*c[i],c[i]=r%1e7,r=l(r/1e7)},d=function(t){for(var e=6,i=0;--e>=0;)i+=c[e],c[e]=l(i/t),i=i%t*1e7},u=function(){for(var t=6,e="";--t>=0;)if(""!==e||0===t||0!==c[t]){var i=String(c[t]);e=""===e?i:e+a.call(f,7-i.length)+i}return e},g=function(t,e,i){return 0===e?i:e%2==1?g(t,e-1,i*t):g(t*t,e/2,i)};r(r.P+r.F*(!!o&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!i(4253)((function(){o.call({})}))),"Number",{toFixed:function(t){var e,i,r,o,l=s(this,h),c=n(t),y="",m=f;if(c<0||c>20)throw RangeError(h);if(l!=l)return"NaN";if(l<=-1e21||l>=1e21)return String(l);if(l<0&&(y="-",l=-l),l>1e-21)if(e=function(t){for(var e=0,i=t;i>=4096;)e+=12,i/=4096;for(;i>=2;)e+=1,i/=2;return e}(l*g(2,69,1))-69,i=e<0?l*g(2,-e,1):l/g(2,e,1),i*=4503599627370496,(e=52-e)>0){for(p(0,i),r=c;r>=7;)p(1e7,0),r-=7;for(p(g(10,r,1),0),r=e-1;r>=23;)d(1<<23),r-=23;d(1<<r),p(1,1),d(2),m=u()}else p(0,i),p(1<<-e,0),m=u()+a.call(f,c);return c>0?y+((o=m.length)<=c?"0."+a.call(f,c-o)+m:m.slice(0,o-c)+"."+m.slice(o-c)):y+m}})},1901:(t,e,i)=>{"use strict";var r=i(2985),n=i(4253),s=i(3365),a=1..toPrecision;r(r.P+r.F*(n((function(){return"1"!==a.call(1,void 0)}))||!n((function(){a.call({})}))),"Number",{toPrecision:function(t){var e=s(this,"Number#toPrecision: incorrect invocation!");return void 0===t?a.call(e):a.call(e,t)}})},5115:(t,e,i)=>{var r=i(2985);r(r.S+r.F,"Object",{assign:i(5345)})},8132:(t,e,i)=>{var r=i(2985);r(r.S,"Object",{create:i(2503)})},7470:(t,e,i)=>{var r=i(2985);r(r.S+r.F*!i(7057),"Object",{defineProperties:i(5588)})},8388:(t,e,i)=>{var r=i(2985);r(r.S+r.F*!i(7057),"Object",{defineProperty:i(9275).f})},9375:(t,e,i)=>{var r=i(5286),n=i(4728).onFreeze;i(3160)("freeze",(function(t){return function(e){return t&&r(e)?t(n(e)):e}}))},4882:(t,e,i)=>{var r=i(2110),n=i(8693).f;i(3160)("getOwnPropertyDescriptor",(function(){return function(t,e){return n(r(t),e)}}))},9622:(t,e,i)=>{i(3160)("getOwnPropertyNames",(function(){return i(9327).f}))},1520:(t,e,i)=>{var r=i(508),n=i(468);i(3160)("getPrototypeOf",(function(){return function(t){return n(r(t))}}))},9892:(t,e,i)=>{var r=i(5286);i(3160)("isExtensible",(function(t){return function(e){return!!r(e)&&(!t||t(e))}}))},4157:(t,e,i)=>{var r=i(5286);i(3160)("isFrozen",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},5095:(t,e,i)=>{var r=i(5286);i(3160)("isSealed",(function(t){return function(e){return!r(e)||!!t&&t(e)}}))},9176:(t,e,i)=>{var r=i(2985);r(r.S,"Object",{is:i(7195)})},7476:(t,e,i)=>{var r=i(508),n=i(7184);i(3160)("keys",(function(){return function(t){return n(r(t))}}))},4672:(t,e,i)=>{var r=i(5286),n=i(4728).onFreeze;i(3160)("preventExtensions",(function(t){return function(e){return t&&r(e)?t(n(e)):e}}))},3533:(t,e,i)=>{var r=i(5286),n=i(4728).onFreeze;i(3160)("seal",(function(t){return function(e){return t&&r(e)?t(n(e)):e}}))},8838:(t,e,i)=>{var r=i(2985);r(r.S,"Object",{setPrototypeOf:i(7375).set})},6253:(t,e,i)=>{"use strict";var r=i(1488),n={};n[i(6314)("toStringTag")]="z",n+""!="[object z]"&&i(7234)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},4299:(t,e,i)=>{var r=i(2985),n=i(7743);r(r.G+r.F*(parseFloat!=n),{parseFloat:n})},1084:(t,e,i)=>{var r=i(2985),n=i(5960);r(r.G+r.F*(parseInt!=n),{parseInt:n})},851:(t,e,i)=>{"use strict";var r,n,s,a,o=i(4461),l=i(3816),c=i(741),h=i(1488),f=i(2985),p=i(5286),d=i(4963),u=i(3328),g=i(3531),y=i(8364),m=i(4193).set,x=i(4351)(),v=i(3499),w=i(188),b=i(575),k=i(94),C="Promise",z=l.TypeError,S=l.process,O=S&&S.versions,E=O&&O.v8||"",R=l.Promise,P="process"==h(S),A=function(){},I=n=v.f,D=!!function(){try{var t=R.resolve(1),e=(t.constructor={})[i(6314)("species")]=function(t){t(A,A)};return(P||"function"==typeof PromiseRejectionEvent)&&t.then(A)instanceof e&&0!==E.indexOf("6.6")&&-1===b.indexOf("Chrome/66")}catch(t){}}(),$=function(t){var e;return!(!p(t)||"function"!=typeof(e=t.then))&&e},M=function(t,e){if(!t._n){t._n=!0;var i=t._c;x((function(){for(var r=t._v,n=1==t._s,s=0,a=function(e){var i,s,a,o=n?e.ok:e.fail,l=e.resolve,c=e.reject,h=e.domain;try{o?(n||(2==t._h&&U(t),t._h=1),!0===o?i=r:(h&&h.enter(),i=o(r),h&&(h.exit(),a=!0)),i===e.promise?c(z("Promise-chain cycle")):(s=$(i))?s.call(i,l,c):l(i)):c(r)}catch(t){h&&!a&&h.exit(),c(t)}};i.length>s;)a(i[s++]);t._c=[],t._n=!1,e&&!t._h&&B(t)}))}},B=function(t){m.call(l,(function(){var e,i,r,n=t._v,s=T(t);if(s&&(e=w((function(){P?S.emit("unhandledRejection",n,t):(i=l.onunhandledrejection)?i({promise:t,reason:n}):(r=l.console)&&r.error&&r.error("Unhandled promise rejection",n)})),t._h=P||T(t)?2:1),t._a=void 0,s&&e.e)throw e.v}))},T=function(t){return 1!==t._h&&0===(t._a||t._c).length},U=function(t){m.call(l,(function(){var e;P?S.emit("rejectionHandled",t):(e=l.onrejectionhandled)&&e({promise:t,reason:t._v})}))},_=function(t){var e=this;e._d||(e._d=!0,(e=e._w||e)._v=t,e._s=2,e._a||(e._a=e._c.slice()),M(e,!0))},j=function(t){var e,i=this;if(!i._d){i._d=!0,i=i._w||i;try{if(i===t)throw z("Promise can't be resolved itself");(e=$(t))?x((function(){var r={_w:i,_d:!1};try{e.call(t,c(j,r,1),c(_,r,1))}catch(t){_.call(r,t)}})):(i._v=t,i._s=1,M(i,!1))}catch(t){_.call({_w:i,_d:!1},t)}}};D||(R=function(t){u(this,R,C,"_h"),d(t),r.call(this);try{t(c(j,this,1),c(_,this,1))}catch(t){_.call(this,t)}},(r=function(t){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1}).prototype=i(4408)(R.prototype,{then:function(t,e){var i=I(y(this,R));return i.ok="function"!=typeof t||t,i.fail="function"==typeof e&&e,i.domain=P?S.domain:void 0,this._c.push(i),this._a&&this._a.push(i),this._s&&M(this,!1),i.promise},catch:function(t){return this.then(void 0,t)}}),s=function(){var t=new r;this.promise=t,this.resolve=c(j,t,1),this.reject=c(_,t,1)},v.f=I=function(t){return t===R||t===a?new s(t):n(t)}),f(f.G+f.W+f.F*!D,{Promise:R}),i(2943)(R,C),i(2974)(C),a=i(5645).Promise,f(f.S+f.F*!D,C,{reject:function(t){var e=I(this);return(0,e.reject)(t),e.promise}}),f(f.S+f.F*(o||!D),C,{resolve:function(t){return k(o&&this===a?R:this,t)}}),f(f.S+f.F*!(D&&i(7462)((function(t){R.all(t).catch(A)}))),C,{all:function(t){var e=this,i=I(e),r=i.resolve,n=i.reject,s=w((function(){var i=[],s=0,a=1;g(t,!1,(function(t){var o=s++,l=!1;i.push(void 0),a++,e.resolve(t).then((function(t){l||(l=!0,i[o]=t,--a||r(i))}),n)})),--a||r(i)}));return s.e&&n(s.v),i.promise},race:function(t){var e=this,i=I(e),r=i.reject,n=w((function(){g(t,!1,(function(t){e.resolve(t).then(i.resolve,r)}))}));return n.e&&r(n.v),i.promise}})},1572:(t,e,i)=>{var r=i(2985),n=i(4963),s=i(7007),a=(i(3816).Reflect||{}).apply,o=Function.apply;r(r.S+r.F*!i(4253)((function(){a((function(){}))})),"Reflect",{apply:function(t,e,i){var r=n(t),l=s(i);return a?a(r,e,l):o.call(r,e,l)}})},2139:(t,e,i)=>{var r=i(2985),n=i(2503),s=i(4963),a=i(7007),o=i(5286),l=i(4253),c=i(4398),h=(i(3816).Reflect||{}).construct,f=l((function(){function t(){}return!(h((function(){}),[],t)instanceof t)})),p=!l((function(){h((function(){}))}));r(r.S+r.F*(f||p),"Reflect",{construct:function(t,e){s(t),a(e);var i=arguments.length<3?t:s(arguments[2]);if(p&&!f)return h(t,e,i);if(t==i){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var r=[null];return r.push.apply(r,e),new(c.apply(t,r))}var l=i.prototype,d=n(o(l)?l:Object.prototype),u=Function.apply.call(t,d,e);return o(u)?u:d}})},685:(t,e,i)=>{var r=i(9275),n=i(2985),s=i(7007),a=i(1689);n(n.S+n.F*i(4253)((function(){Reflect.defineProperty(r.f({},1,{value:1}),1,{value:2})})),"Reflect",{defineProperty:function(t,e,i){s(t),e=a(e,!0),s(i);try{return r.f(t,e,i),!0}catch(t){return!1}}})},5535:(t,e,i)=>{var r=i(2985),n=i(8693).f,s=i(7007);r(r.S,"Reflect",{deleteProperty:function(t,e){var i=n(s(t),e);return!(i&&!i.configurable)&&delete t[e]}})},7347:(t,e,i)=>{"use strict";var r=i(2985),n=i(7007),s=function(t){this._t=n(t),this._i=0;var e,i=this._k=[];for(e in t)i.push(e)};i(9988)(s,"Object",(function(){var t,e=this,i=e._k;do{if(e._i>=i.length)return{value:void 0,done:!0}}while(!((t=i[e._i++])in e._t));return{value:t,done:!1}})),r(r.S,"Reflect",{enumerate:function(t){return new s(t)}})},6633:(t,e,i)=>{var r=i(8693),n=i(2985),s=i(7007);n(n.S,"Reflect",{getOwnPropertyDescriptor:function(t,e){return r.f(s(t),e)}})},8989:(t,e,i)=>{var r=i(2985),n=i(468),s=i(7007);r(r.S,"Reflect",{getPrototypeOf:function(t){return n(s(t))}})},3049:(t,e,i)=>{var r=i(8693),n=i(468),s=i(9181),a=i(2985),o=i(5286),l=i(7007);a(a.S,"Reflect",{get:function t(e,i){var a,c,h=arguments.length<3?e:arguments[2];return l(e)===h?e[i]:(a=r.f(e,i))?s(a,"value")?a.value:void 0!==a.get?a.get.call(h):void 0:o(c=n(e))?t(c,i,h):void 0}})},8270:(t,e,i)=>{var r=i(2985);r(r.S,"Reflect",{has:function(t,e){return e in t}})},4510:(t,e,i)=>{var r=i(2985),n=i(7007),s=Object.isExtensible;r(r.S,"Reflect",{isExtensible:function(t){return n(t),!s||s(t)}})},3984:(t,e,i)=>{var r=i(2985);r(r.S,"Reflect",{ownKeys:i(7643)})},5769:(t,e,i)=>{var r=i(2985),n=i(7007),s=Object.preventExtensions;r(r.S,"Reflect",{preventExtensions:function(t){n(t);try{return s&&s(t),!0}catch(t){return!1}}})},6014:(t,e,i)=>{var r=i(2985),n=i(7375);n&&r(r.S,"Reflect",{setPrototypeOf:function(t,e){n.check(t,e);try{return n.set(t,e),!0}catch(t){return!1}}})},55:(t,e,i)=>{var r=i(9275),n=i(8693),s=i(468),a=i(9181),o=i(2985),l=i(681),c=i(7007),h=i(5286);o(o.S,"Reflect",{set:function t(e,i,o){var f,p,d=arguments.length<4?e:arguments[3],u=n.f(c(e),i);if(!u){if(h(p=s(e)))return t(p,i,o,d);u=l(0)}if(a(u,"value")){if(!1===u.writable||!h(d))return!1;if(f=n.f(d,i)){if(f.get||f.set||!1===f.writable)return!1;f.value=o,r.f(d,i,f)}else r.f(d,i,l(0,o));return!0}return void 0!==u.set&&(u.set.call(d,o),!0)}})},3946:(t,e,i)=>{var r=i(3816),n=i(266),s=i(9275).f,a=i(616).f,o=i(5364),l=i(3218),c=r.RegExp,h=c,f=c.prototype,p=/a/g,d=/a/g,u=new c(p)!==p;if(i(7057)&&(!u||i(4253)((function(){return d[i(6314)("match")]=!1,c(p)!=p||c(d)==d||"/a/i"!=c(p,"i")})))){c=function(t,e){var i=this instanceof c,r=o(t),s=void 0===e;return!i&&r&&t.constructor===c&&s?t:n(u?new h(r&&!s?t.source:t,e):h((r=t instanceof c)?t.source:t,r&&s?l.call(t):e),i?this:f,c)};for(var g=function(t){t in c||s(c,t,{configurable:!0,get:function(){return h[t]},set:function(e){h[t]=e}})},y=a(h),m=0;y.length>m;)g(y[m++]);f.constructor=c,c.prototype=f,i(7234)(r,"RegExp",c)}i(2974)("RegExp")},8269:(t,e,i)=>{"use strict";var r=i(1165);i(2985)({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},6774:(t,e,i)=>{i(7057)&&"g"!=/./g.flags&&i(9275).f(RegExp.prototype,"flags",{configurable:!0,get:i(3218)})},1466:(t,e,i)=>{"use strict";var r=i(7007),n=i(875),s=i(6793),a=i(7787);i(8082)("match",1,(function(t,e,i,o){return[function(i){var r=t(this),n=null==i?void 0:i[e];return void 0!==n?n.call(i,r):new RegExp(i)[e](String(r))},function(t){var e=o(i,t,this);if(e.done)return e.value;var l=r(t),c=String(this);if(!l.global)return a(l,c);var h=l.unicode;l.lastIndex=0;for(var f,p=[],d=0;null!==(f=a(l,c));){var u=String(f[0]);p[d]=u,""===u&&(l.lastIndex=s(c,n(l.lastIndex),h)),d++}return 0===d?null:p}]}))},9357:(t,e,i)=>{"use strict";var r=i(7007),n=i(508),s=i(875),a=i(1467),o=i(6793),l=i(7787),c=Math.max,h=Math.min,f=Math.floor,p=/\$([$&`']|\d\d?|<[^>]*>)/g,d=/\$([$&`']|\d\d?)/g;i(8082)("replace",2,(function(t,e,i,u){return[function(r,n){var s=t(this),a=null==r?void 0:r[e];return void 0!==a?a.call(r,s,n):i.call(String(s),r,n)},function(t,e){var n=u(i,t,this,e);if(n.done)return n.value;var f=r(t),p=String(this),d="function"==typeof e;d||(e=String(e));var y=f.global;if(y){var m=f.unicode;f.lastIndex=0}for(var x=[];;){var v=l(f,p);if(null===v)break;if(x.push(v),!y)break;""===String(v[0])&&(f.lastIndex=o(p,s(f.lastIndex),m))}for(var w,b="",k=0,C=0;C<x.length;C++){v=x[C];for(var z=String(v[0]),S=c(h(a(v.index),p.length),0),O=[],E=1;E<v.length;E++)O.push(void 0===(w=v[E])?w:String(w));var R=v.groups;if(d){var P=[z].concat(O,S,p);void 0!==R&&P.push(R);var A=String(e.apply(void 0,P))}else A=g(z,p,S,O,R,e);S>=k&&(b+=p.slice(k,S)+A,k=S+z.length)}return b+p.slice(k)}];function g(t,e,r,s,a,o){var l=r+t.length,c=s.length,h=d;return void 0!==a&&(a=n(a),h=p),i.call(o,h,(function(i,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(l);case"<":o=a[n.slice(1,-1)];break;default:var h=+n;if(0===h)return i;if(h>c){var p=f(h/10);return 0===p?i:p<=c?void 0===s[p-1]?n.charAt(1):s[p-1]+n.charAt(1):i}o=s[h-1]}return void 0===o?"":o}))}}))},6142:(t,e,i)=>{"use strict";var r=i(7007),n=i(7195),s=i(7787);i(8082)("search",1,(function(t,e,i,a){return[function(i){var r=t(this),n=null==i?void 0:i[e];return void 0!==n?n.call(i,r):new RegExp(i)[e](String(r))},function(t){var e=a(i,t,this);if(e.done)return e.value;var o=r(t),l=String(this),c=o.lastIndex;n(c,0)||(o.lastIndex=0);var h=s(o,l);return n(o.lastIndex,c)||(o.lastIndex=c),null===h?-1:h.index}]}))},1876:(t,e,i)=>{"use strict";var r=i(5364),n=i(7007),s=i(8364),a=i(6793),o=i(875),l=i(7787),c=i(1165),h=i(4253),f=Math.min,p=[].push,d=4294967295,u=!h((function(){RegExp(d,"y")}));i(8082)("split",2,(function(t,e,i,h){var g;return g="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return i.call(n,t,e);for(var s,a,o,l=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),f=0,u=void 0===e?d:e>>>0,g=new RegExp(t.source,h+"g");(s=c.call(g,n))&&!((a=g.lastIndex)>f&&(l.push(n.slice(f,s.index)),s.length>1&&s.index<n.length&&p.apply(l,s.slice(1)),o=s[0].length,f=a,l.length>=u));)g.lastIndex===s.index&&g.lastIndex++;return f===n.length?!o&&g.test("")||l.push(""):l.push(n.slice(f)),l.length>u?l.slice(0,u):l}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i.call(this,t,e)}:i,[function(i,r){var n=t(this),s=null==i?void 0:i[e];return void 0!==s?s.call(i,n,r):g.call(String(n),i,r)},function(t,e){var r=h(g,t,this,e,g!==i);if(r.done)return r.value;var c=n(t),p=String(this),y=s(c,RegExp),m=c.unicode,x=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(u?"y":"g"),v=new y(u?c:"^(?:"+c.source+")",x),w=void 0===e?d:e>>>0;if(0===w)return[];if(0===p.length)return null===l(v,p)?[p]:[];for(var b=0,k=0,C=[];k<p.length;){v.lastIndex=u?k:0;var z,S=l(v,u?p:p.slice(k));if(null===S||(z=f(o(v.lastIndex+(u?0:k)),p.length))===b)k=a(p,k,m);else{if(C.push(p.slice(b,k)),C.length===w)return C;for(var O=1;O<=S.length-1;O++)if(C.push(S[O]),C.length===w)return C;k=b=z}}return C.push(p.slice(b)),C}]}))},6108:(t,e,i)=>{"use strict";i(6774);var r=i(7007),n=i(3218),s=i(7057),a="toString",o=/./.toString,l=function(t){i(7234)(RegExp.prototype,a,t,!0)};i(4253)((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?l((function(){var t=r(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?n.call(t):void 0)})):o.name!=a&&l((function(){return o.call(this)}))},8184:(t,e,i)=>{"use strict";var r=i(9824),n=i(1616);t.exports=i(5795)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(n(this,"Set"),t=0===t?0:t,t)}},r)},856:(t,e,i)=>{"use strict";i(9395)("anchor",(function(t){return function(e){return t(this,"a","name",e)}}))},703:(t,e,i)=>{"use strict";i(9395)("big",(function(t){return function(){return t(this,"big","","")}}))},1539:(t,e,i)=>{"use strict";i(9395)("blink",(function(t){return function(){return t(this,"blink","","")}}))},5292:(t,e,i)=>{"use strict";i(9395)("bold",(function(t){return function(){return t(this,"b","","")}}))},9539:(t,e,i)=>{"use strict";var r=i(2985),n=i(4496)(!1);r(r.P,"String",{codePointAt:function(t){return n(this,t)}})},6620:(t,e,i)=>{"use strict";var r=i(2985),n=i(875),s=i(2094),a="endsWith",o="".endsWith;r(r.P+r.F*i(8852)(a),"String",{endsWith:function(t){var e=s(this,t,a),i=arguments.length>1?arguments[1]:void 0,r=n(e.length),l=void 0===i?r:Math.min(n(i),r),c=String(t);return o?o.call(e,c,l):e.slice(l-c.length,l)===c}})},6629:(t,e,i)=>{"use strict";i(9395)("fixed",(function(t){return function(){return t(this,"tt","","")}}))},3694:(t,e,i)=>{"use strict";i(9395)("fontcolor",(function(t){return function(e){return t(this,"font","color",e)}}))},7648:(t,e,i)=>{"use strict";i(9395)("fontsize",(function(t){return function(e){return t(this,"font","size",e)}}))},191:(t,e,i)=>{var r=i(2985),n=i(2337),s=String.fromCharCode,a=String.fromCodePoint;r(r.S+r.F*(!!a&&1!=a.length),"String",{fromCodePoint:function(t){for(var e,i=[],r=arguments.length,a=0;r>a;){if(e=+arguments[a++],n(e,1114111)!==e)throw RangeError(e+" is not a valid code point");i.push(e<65536?s(e):s(55296+((e-=65536)>>10),e%1024+56320))}return i.join("")}})},2850:(t,e,i)=>{"use strict";var r=i(2985),n=i(2094),s="includes";r(r.P+r.F*i(8852)(s),"String",{includes:function(t){return!!~n(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},7795:(t,e,i)=>{"use strict";i(9395)("italics",(function(t){return function(){return t(this,"i","","")}}))},9115:(t,e,i)=>{"use strict";var r=i(4496)(!0);i(2923)(String,"String",(function(t){this._t=String(t),this._i=0}),(function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=r(e,i),this._i+=t.length,{value:t,done:!1})}))},4531:(t,e,i)=>{"use strict";i(9395)("link",(function(t){return function(e){return t(this,"a","href",e)}}))},8306:(t,e,i)=>{var r=i(2985),n=i(2110),s=i(875);r(r.S,"String",{raw:function(t){for(var e=n(t.raw),i=s(e.length),r=arguments.length,a=[],o=0;i>o;)a.push(String(e[o++])),o<r&&a.push(String(arguments[o]));return a.join("")}})},823:(t,e,i)=>{var r=i(2985);r(r.P,"String",{repeat:i(8595)})},3605:(t,e,i)=>{"use strict";i(9395)("small",(function(t){return function(){return t(this,"small","","")}}))},7732:(t,e,i)=>{"use strict";var r=i(2985),n=i(875),s=i(2094),a="startsWith",o="".startsWith;r(r.P+r.F*i(8852)(a),"String",{startsWith:function(t){var e=s(this,t,a),i=n(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),r=String(t);return o?o.call(e,r,i):e.slice(i,i+r.length)===r}})},6780:(t,e,i)=>{"use strict";i(9395)("strike",(function(t){return function(){return t(this,"strike","","")}}))},9937:(t,e,i)=>{"use strict";i(9395)("sub",(function(t){return function(){return t(this,"sub","","")}}))},511:(t,e,i)=>{"use strict";i(9395)("sup",(function(t){return function(){return t(this,"sup","","")}}))},4564:(t,e,i)=>{"use strict";i(9599)("trim",(function(t){return function(){return t(this,3)}}))},5767:(t,e,i)=>{"use strict";var r=i(3816),n=i(9181),s=i(7057),a=i(2985),o=i(7234),l=i(4728).KEY,c=i(4253),h=i(3825),f=i(2943),p=i(3953),d=i(6314),u=i(8787),g=i(6074),y=i(5541),m=i(4302),x=i(7007),v=i(5286),w=i(508),b=i(2110),k=i(1689),C=i(681),z=i(2503),S=i(9327),O=i(8693),E=i(4548),R=i(9275),P=i(7184),A=O.f,I=R.f,D=S.f,$=r.Symbol,M=r.JSON,B=M&&M.stringify,T=d("_hidden"),U=d("toPrimitive"),_={}.propertyIsEnumerable,j=h("symbol-registry"),F=h("symbols"),N=h("op-symbols"),V=Object.prototype,L="function"==typeof $&&!!E.f,G=r.QObject,H=!G||!G.prototype||!G.prototype.findChild,X=s&&c((function(){return 7!=z(I({},"a",{get:function(){return I(this,"a",{value:7}).a}})).a}))?function(t,e,i){var r=A(V,e);r&&delete V[e],I(t,e,i),r&&t!==V&&I(V,e,r)}:I,W=function(t){var e=F[t]=z($.prototype);return e._k=t,e},K=L&&"symbol"==typeof $.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof $},q=function(t,e,i){return t===V&&q(N,e,i),x(t),e=k(e,!0),x(i),n(F,e)?(i.enumerable?(n(t,T)&&t[T][e]&&(t[T][e]=!1),i=z(i,{enumerable:C(0,!1)})):(n(t,T)||I(t,T,C(1,{})),t[T][e]=!0),X(t,e,i)):I(t,e,i)},Y=function(t,e){x(t);for(var i,r=y(e=b(e)),n=0,s=r.length;s>n;)q(t,i=r[n++],e[i]);return t},Z=function(t){var e=_.call(this,t=k(t,!0));return!(this===V&&n(F,t)&&!n(N,t))&&(!(e||!n(this,t)||!n(F,t)||n(this,T)&&this[T][t])||e)},J=function(t,e){if(t=b(t),e=k(e,!0),t!==V||!n(F,e)||n(N,e)){var i=A(t,e);return!i||!n(F,e)||n(t,T)&&t[T][e]||(i.enumerable=!0),i}},Q=function(t){for(var e,i=D(b(t)),r=[],s=0;i.length>s;)n(F,e=i[s++])||e==T||e==l||r.push(e);return r},tt=function(t){for(var e,i=t===V,r=D(i?N:b(t)),s=[],a=0;r.length>a;)!n(F,e=r[a++])||i&&!n(V,e)||s.push(F[e]);return s};L||($=function(){if(this instanceof $)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),e=function(i){this===V&&e.call(N,i),n(this,T)&&n(this[T],t)&&(this[T][t]=!1),X(this,t,C(1,i))};return s&&H&&X(V,t,{configurable:!0,set:e}),W(t)},o($.prototype,"toString",(function(){return this._k})),O.f=J,R.f=q,i(616).f=S.f=Q,i(4682).f=Z,E.f=tt,s&&!i(4461)&&o(V,"propertyIsEnumerable",Z,!0),u.f=function(t){return W(d(t))}),a(a.G+a.W+a.F*!L,{Symbol:$});for(var et="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),it=0;et.length>it;)d(et[it++]);for(var rt=P(d.store),nt=0;rt.length>nt;)g(rt[nt++]);a(a.S+a.F*!L,"Symbol",{for:function(t){return n(j,t+="")?j[t]:j[t]=$(t)},keyFor:function(t){if(!K(t))throw TypeError(t+" is not a symbol!");for(var e in j)if(j[e]===t)return e},useSetter:function(){H=!0},useSimple:function(){H=!1}}),a(a.S+a.F*!L,"Object",{create:function(t,e){return void 0===e?z(t):Y(z(t),e)},defineProperty:q,defineProperties:Y,getOwnPropertyDescriptor:J,getOwnPropertyNames:Q,getOwnPropertySymbols:tt});var st=c((function(){E.f(1)}));a(a.S+a.F*st,"Object",{getOwnPropertySymbols:function(t){return E.f(w(t))}}),M&&a(a.S+a.F*(!L||c((function(){var t=$();return"[null]"!=B([t])||"{}"!=B({a:t})||"{}"!=B(Object(t))}))),"JSON",{stringify:function(t){for(var e,i,r=[t],n=1;arguments.length>n;)r.push(arguments[n++]);if(i=e=r[1],(v(e)||void 0!==t)&&!K(t))return m(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!K(e))return e}),r[1]=e,B.apply(M,r)}}),$.prototype[U]||i(7728)($.prototype,U,$.prototype.valueOf),f($,"Symbol"),f(Math,"Math",!0),f(r.JSON,"JSON",!0)},142:(t,e,i)=>{"use strict";var r=i(2985),n=i(9383),s=i(1125),a=i(7007),o=i(2337),l=i(875),c=i(5286),h=i(3816).ArrayBuffer,f=i(8364),p=s.ArrayBuffer,d=s.DataView,u=n.ABV&&h.isView,g=p.prototype.slice,y=n.VIEW,m="ArrayBuffer";r(r.G+r.W+r.F*(h!==p),{ArrayBuffer:p}),r(r.S+r.F*!n.CONSTR,m,{isView:function(t){return u&&u(t)||c(t)&&y in t}}),r(r.P+r.U+r.F*i(4253)((function(){return!new p(2).slice(1,void 0).byteLength})),m,{slice:function(t,e){if(void 0!==g&&void 0===e)return g.call(a(this),t);for(var i=a(this).byteLength,r=o(t,i),n=o(void 0===e?i:e,i),s=new(f(this,p))(l(n-r)),c=new d(this),h=new d(s),u=0;r<n;)h.setUint8(u++,c.getUint8(r++));return s}}),i(2974)(m)},1786:(t,e,i)=>{var r=i(2985);r(r.G+r.W+r.F*!i(9383).ABV,{DataView:i(1125).DataView})},162:(t,e,i)=>{i(8440)("Float32",4,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},3834:(t,e,i)=>{i(8440)("Float64",8,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},4821:(t,e,i)=>{i(8440)("Int16",2,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},1303:(t,e,i)=>{i(8440)("Int32",4,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},5368:(t,e,i)=>{i(8440)("Int8",1,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},9103:(t,e,i)=>{i(8440)("Uint16",2,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},3318:(t,e,i)=>{i(8440)("Uint32",4,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},6964:(t,e,i)=>{i(8440)("Uint8",1,(function(t){return function(e,i,r){return t(this,e,i,r)}}))},2152:(t,e,i)=>{i(8440)("Uint8",1,(function(t){return function(e,i,r){return t(this,e,i,r)}}),!0)},147:(t,e,i)=>{"use strict";var r,n=i(3816),s=i(50)(0),a=i(7234),o=i(4728),l=i(5345),c=i(3657),h=i(5286),f=i(1616),p=i(1616),d=!n.ActiveXObject&&"ActiveXObject"in n,u="WeakMap",g=o.getWeak,y=Object.isExtensible,m=c.ufstore,x=function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(t){if(h(t)){var e=g(t);return!0===e?m(f(this,u)).get(t):e?e[this._i]:void 0}},set:function(t,e){return c.def(f(this,u),t,e)}},w=t.exports=i(5795)(u,x,v,c,!0,!0);p&&d&&(l((r=c.getConstructor(x,u)).prototype,v),o.NEED=!0,s(["delete","has","get","set"],(function(t){var e=w.prototype,i=e[t];a(e,t,(function(e,n){if(h(e)&&!y(e)){this._f||(this._f=new r);var s=this._f[t](e,n);return"set"==t?this:s}return i.call(this,e,n)}))})))},9192:(t,e,i)=>{"use strict";var r=i(3657),n=i(1616),s="WeakSet";i(5795)(s,(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return r.def(n(this,s),t,!0)}},r,!1,!0)},1268:(t,e,i)=>{"use strict";var r=i(2985),n=i(3325),s=i(508),a=i(875),o=i(4963),l=i(6886);r(r.P,"Array",{flatMap:function(t){var e,i,r=s(this);return o(t),e=a(r.length),i=l(r,0),n(i,r,r,e,0,1,t,arguments[1]),i}}),i(7722)("flatMap")},2773:(t,e,i)=>{"use strict";var r=i(2985),n=i(9315)(!0);r(r.P,"Array",{includes:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(7722)("includes")},3276:(t,e,i)=>{var r=i(2985),n=i(1131)(!0);r(r.S,"Object",{entries:function(t){return n(t)}})},8351:(t,e,i)=>{var r=i(2985),n=i(7643),s=i(2110),a=i(8693),o=i(2811);r(r.S,"Object",{getOwnPropertyDescriptors:function(t){for(var e,i,r=s(t),l=a.f,c=n(r),h={},f=0;c.length>f;)void 0!==(i=l(r,e=c[f++]))&&o(h,e,i);return h}})},6409:(t,e,i)=>{var r=i(2985),n=i(1131)(!1);r(r.S,"Object",{values:function(t){return n(t)}})},9865:(t,e,i)=>{"use strict";var r=i(2985),n=i(5645),s=i(3816),a=i(8364),o=i(94);r(r.P+r.R,"Promise",{finally:function(t){var e=a(this,n.Promise||s.Promise),i="function"==typeof t;return this.then(i?function(i){return o(e,t()).then((function(){return i}))}:t,i?function(i){return o(e,t()).then((function(){throw i}))}:t)}})},2770:(t,e,i)=>{"use strict";var r=i(2985),n=i(5442),s=i(575),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);r(r.P+r.F*a,"String",{padEnd:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0,!1)}})},1784:(t,e,i)=>{"use strict";var r=i(2985),n=i(5442),s=i(575),a=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(s);r(r.P+r.F*a,"String",{padStart:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0,!0)}})},5869:(t,e,i)=>{"use strict";i(9599)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},4325:(t,e,i)=>{"use strict";i(9599)("trimRight",(function(t){return function(){return t(this,2)}}),"trimEnd")},9665:(t,e,i)=>{i(6074)("asyncIterator")},1181:(t,e,i)=>{for(var r=i(6997),n=i(7184),s=i(7234),a=i(3816),o=i(7728),l=i(2803),c=i(6314),h=c("iterator"),f=c("toStringTag"),p=l.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},u=n(d),g=0;g<u.length;g++){var y,m=u[g],x=d[m],v=a[m],w=v&&v.prototype;if(w&&(w[h]||o(w,h,p),w[f]||o(w,f,m),l[m]=p,x))for(y in r)w[y]||s(w,y,r[y],!0)}},4633:(t,e,i)=>{var r=i(2985),n=i(4193);r(r.G+r.B,{setImmediate:n.set,clearImmediate:n.clear})},2564:(t,e,i)=>{var r=i(3816),n=i(2985),s=i(575),a=[].slice,o=/MSIE .\./.test(s),l=function(t){return function(e,i){var r=arguments.length>2,n=!!r&&a.call(arguments,2);return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,n)}:e,i)}};n(n.G+n.B+n.F*o,{setTimeout:l(r.setTimeout),setInterval:l(r.setInterval)})},6337:(t,e,i)=>{i(2564),i(4633),i(1181),t.exports=i(5645)},2393:(t,e,i)=>{"use strict";i.d(e,{Z:()=>o});var r=i(8081),n=i.n(r),s=i(3645),a=i.n(s)()(n());a.push([t.id,".hackCable-root{height:100%;width:100%;display:flex;flex-wrap:nowrap}.hackCable-root p,.hackCable-root h1,.hackCable-root h2,.hackCable-root h3,.hackCable-root h4,.hackCable-root select{font-family:Rubik;color:#c9c9c9}.hackCable-root h3{font-weight:400;font-size:.9em;text-align:center;word-wrap:break-word}.hackCable-root .hackCable-sideBar{height:100%;width:250px;background-color:#424b5a;display:flex;flex-direction:column}.hackCable-root .hackCable-sideBar .hackCable-catalog-actions{width:100%;background:#30343f;text-align:center}.hackCable-root .hackCable-sideBar .hackCable-catalog-actions select{margin:5px;padding:3px;width:80%;max-width:150px;background-color:#22242c;border-radius:3px;border:none;color:#fff}.hackCable-root .hackCable-sideBar .hackCable-catalog-list{overflow-y:scroll;overflow-x:hidden;height:100%;width:100%;padding:5px 5px 0 5px;box-sizing:border-box;scrollbar-width:thin}.hackCable-root .hackCable-sideBar .hackCable-catalog-list .hackCable-catalog-element{text-align:center;display:block;overflow:hidden;border-radius:5px;background:#30343f;padding:10px;margin-bottom:5px}.hackCable-root .hackCable-sideBar .hackCable-catalog-list .hackCable-catalog-element h3{margin:0 0 10px 0}.hackCable-root .hackCable-editor{background-color:#424b5a;width:100%;overflow:auto;scrollbar-width:thin}",""]);const o=a},3645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i="",r=void 0!==e[5];return e[4]&&(i+="@supports (".concat(e[4],") {")),e[2]&&(i+="@media ".concat(e[2]," {")),r&&(i+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),i+=t(e),r&&(i+="}"),e[2]&&(i+="}"),e[4]&&(i+="}"),i})).join("")},e.i=function(t,i,r,n,s){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var o=0;o<this.length;o++){var l=this[o][0];null!=l&&(a[l]=!0)}for(var c=0;c<t.length;c++){var h=[].concat(t[c]);r&&a[h[0]]||(void 0!==s&&(void 0===h[5]||(h[1]="@layer".concat(h[5].length>0?" ".concat(h[5]):""," {").concat(h[1],"}")),h[5]=s),i&&(h[2]?(h[1]="@media ".concat(h[2]," {").concat(h[1],"}"),h[2]=i):h[2]=i),n&&(h[4]?(h[1]="@supports (".concat(h[4],") {").concat(h[1],"}"),h[4]=n):h[4]="".concat(n)),e.push(h))}},e}},8081:t=>{"use strict";t.exports=function(t){return t[1]}},2198:(t,e,i)=>{"use strict";i.d(e,{Z:()=>r});const r='<head> <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500&display=swap" rel="stylesheet"> </head> <div class="hackCable-sideBar"> <div class="hackCable-catalog-actions"> <label> <select class="hackCable-catalog-sorter"> </select> </label> </div> <div class="hackCable-catalog-list"> </div> </div> <div class="hackCable-editor"> <p style="color:red">Test</p> </div>'},645:(t,e)=>{e.read=function(t,e,i,r,n){var s,a,o=8*n-r-1,l=(1<<o)-1,c=l>>1,h=-7,f=i?n-1:0,p=i?-1:1,d=t[e+f];for(f+=p,s=d&(1<<-h)-1,d>>=-h,h+=o;h>0;s=256*s+t[e+f],f+=p,h-=8);for(a=s&(1<<-h)-1,s>>=-h,h+=r;h>0;a=256*a+t[e+f],f+=p,h-=8);if(0===s)s=1-c;else{if(s===l)return a?NaN:1/0*(d?-1:1);a+=Math.pow(2,r),s-=c}return(d?-1:1)*a*Math.pow(2,s-r)},e.write=function(t,e,i,r,n,s){var a,o,l,c=8*s-n-1,h=(1<<c)-1,f=h>>1,p=23===n?Math.pow(2,-24)-Math.pow(2,-77):0,d=r?0:s-1,u=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(o=isNaN(e)?1:0,a=h):(a=Math.floor(Math.log(e)/Math.LN2),e*(l=Math.pow(2,-a))<1&&(a--,l*=2),(e+=a+f>=1?p/l:p*Math.pow(2,1-f))*l>=2&&(a++,l/=2),a+f>=h?(o=0,a=h):a+f>=1?(o=(e*l-1)*Math.pow(2,n),a+=f):(o=e*Math.pow(2,f-1)*Math.pow(2,n),a=0));n>=8;t[i+d]=255&o,d+=u,o/=256,n-=8);for(a=a<<n|o,c+=n;c>0;t[i+d]=255&a,d+=u,a/=256,c-=8);t[i+d-u]|=128*g}},4620:(t,e,i)=>{var r=i(8764).Buffer;e.parse=function(t,e){t instanceof r&&(t=t.toString("ascii"));for(var i=r.alloc(e||8192),n=0,s=0,a=null,o=null,l=0,c=0;c+11<=t.length;){if(":"!=t.charAt(c++))throw new Error("Line "+(l+1)+" does not start with a colon (:).");l++;var h=parseInt(t.substr(c,2),16);c+=2;var f=parseInt(t.substr(c,4),16);c+=4;var p=parseInt(t.substr(c,2),16);c+=2;var d=t.substr(c,2*h),u=r.from(d,"hex");c+=2*h;var g=parseInt(t.substr(c,2),16);c+=2;for(var y=h+(f>>8)+f+p&255,m=0;m<h;m++)y=y+u[m]&255;if(g!=(y=256-y&255))throw new Error("Invalid checksum on line "+l+": got "+g+", but expected "+y);switch(p){case 0:var x=s+f;if(x+h>=i.length){var v=r.alloc(2*(x+h));i.copy(v,0,0,n),i=v}x>n&&i.fill(255,n,x),u.copy(i,x),n=Math.max(n,x+h);break;case 1:if(0!=h)throw new Error("Invalid EOF record on line "+l+".");return{data:i.slice(0,n),startSegmentAddress:a,startLinearAddress:o};case 2:if(2!=h||0!=f)throw new Error("Invalid extended segment address record on line "+l+".");s=parseInt(d,16)<<4;break;case 3:if(4!=h||0!=f)throw new Error("Invalid start segment address record on line "+l+".");a=parseInt(d,16);break;case 4:if(2!=h||0!=f)throw new Error("Invalid extended linear address record on line "+l+".");s=parseInt(d,16)<<16;break;case 5:if(4!=h||0!=f)throw new Error("Invalid start linear address record on line "+l+".");o=parseInt(d,16);break;default:throw new Error("Invalid record type ("+p+") on line "+l)}"\r"==t.charAt(c)&&c++,"\n"==t.charAt(c)&&c++}throw new Error("Unexpected end of input: missing or invalid EOF record.")}},5666:t=>{var e=function(t){"use strict";var e,i=Object.prototype,r=i.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},s=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function l(t,e,i){return Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,i){return t[e]=i}}function c(t,e,i,r){var n=e&&e.prototype instanceof y?e:y,s=Object.create(n.prototype),a=new R(r||[]);return s._invoke=function(t,e,i){var r=f;return function(n,s){if(r===d)throw new Error("Generator is already running");if(r===u){if("throw"===n)throw s;return A()}for(i.method=n,i.arg=s;;){var a=i.delegate;if(a){var o=S(a,i);if(o){if(o===g)continue;return o}}if("next"===i.method)i.sent=i._sent=i.arg;else if("throw"===i.method){if(r===f)throw r=u,i.arg;i.dispatchException(i.arg)}else"return"===i.method&&i.abrupt("return",i.arg);r=d;var l=h(t,e,i);if("normal"===l.type){if(r=i.done?u:p,l.arg===g)continue;return{value:l.arg,done:i.done}}"throw"===l.type&&(r=u,i.method="throw",i.arg=l.arg)}}}(t,i,a),s}function h(t,e,i){try{return{type:"normal",arg:t.call(e,i)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",p="suspendedYield",d="executing",u="completed",g={};function y(){}function m(){}function x(){}var v={};l(v,s,(function(){return this}));var w=Object.getPrototypeOf,b=w&&w(w(P([])));b&&b!==i&&r.call(b,s)&&(v=b);var k=x.prototype=y.prototype=Object.create(v);function C(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function z(t,e){function i(n,s,a,o){var l=h(t[n],t,s);if("throw"!==l.type){var c=l.arg,f=c.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){i("next",t,a,o)}),(function(t){i("throw",t,a,o)})):e.resolve(f).then((function(t){c.value=t,a(c)}),(function(t){return i("throw",t,a,o)}))}o(l.arg)}var n;this._invoke=function(t,r){function s(){return new e((function(e,n){i(t,r,e,n)}))}return n=n?n.then(s,s):s()}}function S(t,i){var r=t.iterator[i.method];if(r===e){if(i.delegate=null,"throw"===i.method){if(t.iterator.return&&(i.method="return",i.arg=e,S(t,i),"throw"===i.method))return g;i.method="throw",i.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var n=h(r,t.iterator,i.arg);if("throw"===n.type)return i.method="throw",i.arg=n.arg,i.delegate=null,g;var s=n.arg;return s?s.done?(i[t.resultName]=s.value,i.next=t.nextLoc,"return"!==i.method&&(i.method="next",i.arg=e),i.delegate=null,g):s:(i.method="throw",i.arg=new TypeError("iterator result is not an object"),i.delegate=null,g)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var i=t[s];if(i)return i.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function i(){for(;++n<t.length;)if(r.call(t,n))return i.value=t[n],i.done=!1,i;return i.value=e,i.done=!0,i};return a.next=a}}return{next:A}}function A(){return{value:e,done:!0}}return m.prototype=x,l(k,"constructor",x),l(x,"constructor",m),m.displayName=l(x,o,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,o,"GeneratorFunction")),t.prototype=Object.create(k),t},t.awrap=function(t){return{__await:t}},C(z.prototype),l(z.prototype,a,(function(){return this})),t.AsyncIterator=z,t.async=function(e,i,r,n,s){void 0===s&&(s=Promise);var a=new z(c(e,i,r,n),s);return t.isGeneratorFunction(i)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(k),l(k,o,"Generator"),l(k,s,(function(){return this})),l(k,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var i in t)e.push(i);return e.reverse(),function i(){for(;e.length;){var r=e.pop();if(r in t)return i.value=r,i.done=!1,i}return i.done=!0,i}},t.values=P,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var i in this)"t"===i.charAt(0)&&r.call(this,i)&&!isNaN(+i.slice(1))&&(this[i]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var i=this;function n(r,n){return o.type="throw",o.arg=t,i.next=r,n&&(i.method="next",i.arg=e),!!n}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],o=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var l=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(l&&c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var i=this.tryEntries.length-1;i>=0;--i){var n=this.tryEntries[i];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var s=n;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=t,a.arg=e,s?(this.method="next",this.next=s.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.finallyLoc===t)return this.complete(i.completion,i.afterLoc),E(i),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var i=this.tryEntries[e];if(i.tryLoc===t){var r=i.completion;if("throw"===r.type){var n=r.arg;E(i)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,i,r){return this.delegate={iterator:P(t),resultName:i,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},3379:t=>{"use strict";var e=[];function i(t){for(var i=-1,r=0;r<e.length;r++)if(e[r].identifier===t){i=r;break}return i}function r(t,r){for(var s={},a=[],o=0;o<t.length;o++){var l=t[o],c=r.base?l[0]+r.base:l[0],h=s[c]||0,f="".concat(c," ").concat(h);s[c]=h+1;var p=i(f),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(d);else{var u=n(d,r);r.byIndex=o,e.splice(o,0,{identifier:f,updater:u,references:1})}a.push(f)}return a}function n(t,e){var i=e.domAPI(e);return i.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;i.update(t=e)}else i.remove()}}t.exports=function(t,n){var s=r(t=t||[],n=n||{});return function(t){t=t||[];for(var a=0;a<s.length;a++){var o=i(s[a]);e[o].references--}for(var l=r(t,n),c=0;c<s.length;c++){var h=i(s[c]);0===e[h].references&&(e[h].updater(),e.splice(h,1))}s=l}}},569:t=>{"use strict";var e={};t.exports=function(t,i){var r=function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(i)}},609:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},3565:(t,e,i)=>{"use strict";t.exports=function(t){var e=i.nc;e&&t.setAttribute("nonce",e)}},3380:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(i){!function(t,e,i){var r="";i.supports&&(r+="@supports (".concat(i.supports,") {")),i.media&&(r+="@media ".concat(i.media," {"));var n=void 0!==i.layer;n&&(r+="@layer".concat(i.layer.length>0?" ".concat(i.layer):""," {")),r+=i.css,n&&(r+="}"),i.media&&(r+="}"),i.supports&&(r+="}");var s=i.sourceMap;s&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,i)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},4589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function i(r){var n=e[r];if(void 0!==n)return n.exports;var s=e[r]={id:r,exports:{}};return t[r](s,s.exports,i),s.exports}i.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return i.d(e,{a:e}),e},i.d=(t,e)=>{for(var r in e)i.o(e,r)&&!i.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";i(1983);var t,e=(t=i(115))&&t.__esModule?t:{default:t};e.default._babelPolyfill&&"undefined"!=typeof console&&console.warn&&console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."),e.default._babelPolyfill=!0})(),(()=>{"use strict";i.r(r),i.d(r,{AVRRunner:()=>vr,CompileResult:()=>t.CompileResult,HackCable:()=>Or,compileToHex:()=>kr});var t={};i.r(t),i.d(t,{W:()=>kr});var e,n,s=i(3379),a=i.n(s),o=i(3380),l=i.n(o),c=i(569),h=i.n(c),f=i(3565),p=i.n(f),d=i(609),u=i.n(d),g=i(4589),y=i.n(g),m=i(2393),x={};x.styleTagTransform=y(),x.setAttributes=p(),x.insert=h().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=u(),a()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals;class v{constructor(t,e=8192){this.progMem=t,this.sramBytes=e,this.data=new Uint8Array(this.sramBytes+256),this.data16=new Uint16Array(this.data.buffer),this.dataView=new DataView(this.data.buffer),this.progBytes=new Uint8Array(this.progMem.buffer),this.readHooks=[],this.writeHooks=[],this.pendingInterrupts=[],this.nextClockEvent=null,this.clockEventPool=[],this.pc22Bits=this.progBytes.length>131072,this.gpioPorts=new Set,this.gpioByPort=[],this.onWatchdogReset=()=>{},this.pc=0,this.cycles=0,this.nextInterrupt=-1,this.reset()}reset(){this.data.fill(0),this.SP=this.data.length-1,this.pc=0,this.pendingInterrupts.splice(0,this.pendingInterrupts.length),this.nextInterrupt=-1,this.nextClockEvent=null}readData(t){return t>=32&&this.readHooks[t]?this.readHooks[t](t):this.data[t]}writeData(t,e,i=255){const r=this.writeHooks[t];r&&r(e,this.data[t],t,i)||(this.data[t]=e)}get SP(){return this.dataView.getUint16(93,!0)}set SP(t){this.dataView.setUint16(93,t,!0)}get SREG(){return this.data[95]}get interruptsEnabled(){return!!(128&this.SREG)}updateNextInterrupt(){this.nextInterrupt=this.pendingInterrupts.findIndex((t=>!!t))}setInterruptFlag(t){const{flagRegister:e,flagMask:i,enableRegister:r,enableMask:n}=t;t.inverseFlag?this.data[e]&=~i:this.data[e]|=i,this.data[r]&n&&this.queueInterrupt(t)}updateInterruptEnable(t,e){const{enableMask:i,flagRegister:r,flagMask:n,inverseFlag:s}=t;if(e&i){const e=this.data[r]&n;(s?!e:e)&&this.queueInterrupt(t)}else this.clearInterrupt(t,!1)}queueInterrupt(t){this.pendingInterrupts[t.address]=t,this.updateNextInterrupt()}clearInterrupt({address:t,flagRegister:e,flagMask:i},r=!0){delete this.pendingInterrupts[t],r&&(this.data[e]&=~i),this.updateNextInterrupt()}clearInterruptByFlag(t,e){const{flagRegister:i,flagMask:r}=t;e&r&&(this.data[i]&=~r,this.clearInterrupt(t))}addClockEvent(t,e){const{clockEventPool:i}=this;e=this.cycles+Math.max(1,e);const r=i.pop(),n=null!=r?r:{cycles:e,callback:t,next:null};n.cycles=e,n.callback=t;let{nextClockEvent:s}=this,a=null;for(;s&&s.cycles<e;)a=s,s=s.next;return a?(a.next=n,n.next=s):(this.nextClockEvent=n,n.next=s),t}updateClockEvent(t,e){return!!this.clearClockEvent(t)&&(this.addClockEvent(t,e),!0)}clearClockEvent(t){let{nextClockEvent:e}=this;if(!e)return!1;const{clockEventPool:i}=this;let r=null;for(;e;){if(e.callback===t)return r?r.next=e.next:this.nextClockEvent=e.next,i.length<10&&i.push(e),!0;r=e,e=e.next}return!1}tick(){const{nextClockEvent:t}=this;t&&t.cycles<=this.cycles&&(t.callback(),this.nextClockEvent=t.next,this.clockEventPool.length<10&&this.clockEventPool.push(t));const{nextInterrupt:e}=this;if(this.interruptsEnabled&&e>=0){const t=this.pendingInterrupts[e];!function(t,e){const i=t.dataView.getUint16(93,!0);t.data[i]=255&t.pc,t.data[i-1]=t.pc>>8&255,t.pc22Bits&&(t.data[i-2]=t.pc>>16&255),t.dataView.setUint16(93,i-(t.pc22Bits?3:2),!0),t.data[95]&=127,t.cycles+=2,t.pc=e}(this,t.address),t.constant||this.clearInterrupt(t)}}}function w(t){return 36864==(65039&t)||37376==(65039&t)||37902==(65038&t)||37900==(65038&t)}function b(t){const e=t.progMem[t.pc];if(7168==(64512&e)){const i=t.data[(496&e)>>4],r=t.data[15&e|(512&e)>>5],n=i+r+(1&t.data[95]),s=255&n;t.data[(496&e)>>4]=s;let a=192&t.data[95];a|=s?0:2,a|=128&s?4:0,a|=(s^r)&(i^s)&128?8:0,a|=a>>2&1^a>>3&1?16:0,a|=256&n?1:0,a|=1&(i&r|r&~s|~s&i)?32:0,t.data[95]=a}else if(3072==(64512&e)){const i=t.data[(496&e)>>4],r=t.data[15&e|(512&e)>>5],n=i+r&255;t.data[(496&e)>>4]=n;let s=192&t.data[95];s|=n?0:2,s|=128&n?4:0,s|=(n^r)&(n^i)&128?8:0,s|=s>>2&1^s>>3&1?16:0,s|=i+r&256?1:0,s|=1&(i&r|r&~n|~n&i)?32:0,t.data[95]=s}else if(38400==(65280&e)){const i=2*((48&e)>>4)+24,r=t.dataView.getUint16(i,!0),n=r+(15&e|(192&e)>>2)&65535;t.dataView.setUint16(i,n,!0);let s=224&t.data[95];s|=n?0:2,s|=32768&n?4:0,s|=~r&n&32768?8:0,s|=s>>2&1^s>>3&1?16:0,s|=~n&r&32768?1:0,t.data[95]=s,t.cycles++}else if(8192==(64512&e)){const i=t.data[(496&e)>>4]&t.data[15&e|(512&e)>>5];t.data[(496&e)>>4]=i;let r=225&t.data[95];r|=i?0:2,r|=128&i?4:0,r|=r>>2&1^r>>3&1?16:0,t.data[95]=r}else if(28672==(61440&e)){const i=t.data[16+((240&e)>>4)]&(15&e|(3840&e)>>4);t.data[16+((240&e)>>4)]=i;let r=225&t.data[95];r|=i?0:2,r|=128&i?4:0,r|=r>>2&1^r>>3&1?16:0,t.data[95]=r}else if(37893==(65039&e)){const i=t.data[(496&e)>>4],r=i>>>1|128&i;t.data[(496&e)>>4]=r;let n=224&t.data[95];n|=r?0:2,n|=128&r?4:0,n|=1&i,n|=n>>2&1^1&n?8:0,n|=n>>2&1^n>>3&1?16:0,t.data[95]=n}else if(38024==(65423&e))t.data[95]&=~(1<<((112&e)>>4));else if(63488==(65032&e)){const i=7&e,r=(496&e)>>4;t.data[r]=~(1<<i)&t.data[r]|(t.data[95]>>6&1)<<i}else if(62464==(64512&e))t.data[95]&1<<(7&e)||(t.pc=t.pc+(((504&e)>>3)-(512&e?64:0)),t.cycles++);else if(61440==(64512&e))t.data[95]&1<<(7&e)&&(t.pc=t.pc+(((504&e)>>3)-(512&e?64:0)),t.cycles++);else if(37896==(65423&e))t.data[95]|=1<<((112&e)>>4);else if(64e3==(65032&e)){const i=t.data[(496&e)>>4],r=7&e;t.data[95]=191&t.data[95]|(i>>r&1?64:0)}else if(37902==(65038&e)){const i=t.progMem[t.pc+1]|(1&e)<<16|(496&e)<<13,r=t.pc+2,n=t.dataView.getUint16(93,!0),{pc22Bits:s}=t;t.data[n]=255&r,t.data[n-1]=r>>8&255,s&&(t.data[n-2]=r>>16&255),t.dataView.setUint16(93,n-(s?3:2),!0),t.pc=i-1,t.cycles+=s?4:3}else if(38912==(65280&e)){const i=248&e,r=7&e,n=t.readData(32+(i>>3)),s=1<<r;t.writeData(32+(i>>3),n&~s,s)}else if(37888==(65039&e)){const i=(496&e)>>4,r=255-t.data[i];t.data[i]=r;let n=225&t.data[95]|1;n|=r?0:2,n|=128&r?4:0,n|=n>>2&1^n>>3&1?16:0,t.data[95]=n}else if(5120==(64512&e)){const i=t.data[(496&e)>>4],r=t.data[15&e|(512&e)>>5],n=i-r;let s=192&t.data[95];s|=n?0:2,s|=128&n?4:0,s|=0!=((i^r)&(i^n)&128)?8:0,s|=s>>2&1^s>>3&1?16:0,s|=r>i?1:0,s|=1&(~i&r|r&n|n&~i)?32:0,t.data[95]=s}else if(1024==(64512&e)){const i=t.data[(496&e)>>4],r=t.data[15&e|(512&e)>>5];let n=t.data[95];const s=i-r-(1&n);n=192&n|(!s&&n>>1&1?2:0)|(r+(1&n)>i?1:0),n|=128&s?4:0,n|=(i^r)&(i^s)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=1&(~i&r|r&s|s&~i)?32:0,t.data[95]=n}else if(12288==(61440&e)){const i=t.data[16+((240&e)>>4)],r=15&e|(3840&e)>>4,n=i-r;let s=192&t.data[95];s|=n?0:2,s|=128&n?4:0,s|=(i^r)&(i^n)&128?8:0,s|=s>>2&1^s>>3&1?16:0,s|=r>i?1:0,s|=1&(~i&r|r&n|n&~i)?32:0,t.data[95]=s}else if(4096==(64512&e)){if(t.data[(496&e)>>4]===t.data[15&e|(512&e)>>5]){const e=w(t.progMem[t.pc+1])?2:1;t.pc+=e,t.cycles+=e}}else if(37898==(65039&e)){const i=t.data[(496&e)>>4],r=i-1;t.data[(496&e)>>4]=r;let n=225&t.data[95];n|=r?0:2,n|=128&r?4:0,n|=128===i?8:0,n|=n>>2&1^n>>3&1?16:0,t.data[95]=n}else if(38169===e){const e=t.pc+1,i=t.dataView.getUint16(93,!0),r=t.data[92];t.data[i]=255&e,t.data[i-1]=e>>8&255,t.data[i-2]=e>>16&255,t.dataView.setUint16(93,i-3,!0),t.pc=(r<<16|t.dataView.getUint16(30,!0))-1,t.cycles+=3}else if(37913===e){const e=t.data[92];t.pc=(e<<16|t.dataView.getUint16(30,!0))-1,t.cycles++}else if(38360===e){const e=t.data[91];t.data[0]=t.progBytes[e<<16|t.dataView.getUint16(30,!0)],t.cycles+=2}else if(36870==(65039&e)){const i=t.data[91];t.data[(496&e)>>4]=t.progBytes[i<<16|t.dataView.getUint16(30,!0)],t.cycles+=2}else if(36871==(65039&e)){const i=t.data[91],r=t.dataView.getUint16(30,!0);t.data[(496&e)>>4]=t.progBytes[i<<16|r],t.dataView.setUint16(30,r+1,!0),65535===r&&(t.data[91]=(i+1)%(t.progBytes.length>>16)),t.cycles+=2}else if(9216==(64512&e)){const i=t.data[(496&e)>>4]^t.data[15&e|(512&e)>>5];t.data[(496&e)>>4]=i;let r=225&t.data[95];r|=i?0:2,r|=128&i?4:0,r|=r>>2&1^r>>3&1?16:0,t.data[95]=r}else if(776==(65416&e)){const i=t.data[16+((112&e)>>4)],r=t.data[16+(7&e)],n=i*r<<1;t.dataView.setUint16(0,n,!0),t.data[95]=252&t.data[95]|(65535&n?0:2)|(i*r&32768?1:0),t.cycles++}else if(896==(65416&e)){const i=t.dataView.getInt8(16+((112&e)>>4)),r=t.dataView.getInt8(16+(7&e)),n=i*r<<1;t.dataView.setInt16(0,n,!0),t.data[95]=252&t.data[95]|(65535&n?0:2)|(i*r&32768?1:0),t.cycles++}else if(904==(65416&e)){const i=t.dataView.getInt8(16+((112&e)>>4)),r=t.data[16+(7&e)],n=i*r<<1;t.dataView.setInt16(0,n,!0),t.data[95]=252&t.data[95]|(65535&n?2:0)|(i*r&32768?1:0),t.cycles++}else if(38153===e){const e=t.pc+1,i=t.dataView.getUint16(93,!0),{pc22Bits:r}=t;t.data[i]=255&e,t.data[i-1]=e>>8&255,r&&(t.data[i-2]=e>>16&255),t.dataView.setUint16(93,i-(r?3:2),!0),t.pc=t.dataView.getUint16(30,!0)-1,t.cycles+=r?3:2}else if(37897===e)t.pc=t.dataView.getUint16(30,!0)-1,t.cycles++;else if(45056==(63488&e)){const i=t.readData(32+(15&e|(1536&e)>>5));t.data[(496&e)>>4]=i}else if(37891==(65039&e)){const i=t.data[(496&e)>>4],r=i+1&255;t.data[(496&e)>>4]=r;let n=225&t.data[95];n|=r?0:2,n|=128&r?4:0,n|=127===i?8:0,n|=n>>2&1^n>>3&1?16:0,t.data[95]=n}else if(37900==(65038&e))t.pc=(t.progMem[t.pc+1]|(1&e)<<16|(496&e)<<13)-1,t.cycles+=2;else if(37382==(65039&e)){const i=(496&e)>>4,r=t.data[i],n=t.readData(t.dataView.getUint16(30,!0));t.writeData(t.dataView.getUint16(30,!0),n&255-r),t.data[i]=n}else if(37381==(65039&e)){const i=(496&e)>>4,r=t.data[i],n=t.readData(t.dataView.getUint16(30,!0));t.writeData(t.dataView.getUint16(30,!0),n|r),t.data[i]=n}else if(37383==(65039&e)){const i=t.data[(496&e)>>4],r=t.readData(t.dataView.getUint16(30,!0));t.writeData(t.dataView.getUint16(30,!0),i^r),t.data[(496&e)>>4]=r}else if(57344==(61440&e))t.data[16+((240&e)>>4)]=15&e|(3840&e)>>4;else if(36864==(65039&e)){t.cycles++;const i=t.readData(t.progMem[t.pc+1]);t.data[(496&e)>>4]=i,t.pc++}else if(36876==(65039&e))t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(26,!0));else if(36877==(65039&e)){const i=t.dataView.getUint16(26,!0);t.cycles++,t.data[(496&e)>>4]=t.readData(i),t.dataView.setUint16(26,i+1,!0)}else if(36878==(65039&e)){const i=t.dataView.getUint16(26,!0)-1;t.dataView.setUint16(26,i,!0),t.cycles++,t.data[(496&e)>>4]=t.readData(i)}else if(32776==(65039&e))t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(28,!0));else if(36873==(65039&e)){const i=t.dataView.getUint16(28,!0);t.cycles++,t.data[(496&e)>>4]=t.readData(i),t.dataView.setUint16(28,i+1,!0)}else if(36874==(65039&e)){const i=t.dataView.getUint16(28,!0)-1;t.dataView.setUint16(28,i,!0),t.cycles++,t.data[(496&e)>>4]=t.readData(i)}else if(32776==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(28,!0)+(7&e|(3072&e)>>7|(8192&e)>>8));else if(32768==(65039&e))t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(30,!0));else if(36865==(65039&e)){const i=t.dataView.getUint16(30,!0);t.cycles++,t.data[(496&e)>>4]=t.readData(i),t.dataView.setUint16(30,i+1,!0)}else if(36866==(65039&e)){const i=t.dataView.getUint16(30,!0)-1;t.dataView.setUint16(30,i,!0),t.cycles++,t.data[(496&e)>>4]=t.readData(i)}else if(32768==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.cycles++,t.data[(496&e)>>4]=t.readData(t.dataView.getUint16(30,!0)+(7&e|(3072&e)>>7|(8192&e)>>8));else if(38344===e)t.data[0]=t.progBytes[t.dataView.getUint16(30,!0)],t.cycles+=2;else if(36868==(65039&e))t.data[(496&e)>>4]=t.progBytes[t.dataView.getUint16(30,!0)],t.cycles+=2;else if(36869==(65039&e)){const i=t.dataView.getUint16(30,!0);t.data[(496&e)>>4]=t.progBytes[i],t.dataView.setUint16(30,i+1,!0),t.cycles+=2}else if(37894==(65039&e)){const i=t.data[(496&e)>>4],r=i>>>1;t.data[(496&e)>>4]=r;let n=224&t.data[95];n|=r?0:2,n|=1&i,n|=n>>2&1^1&n?8:0,n|=n>>2&1^n>>3&1?16:0,t.data[95]=n}else if(11264==(64512&e))t.data[(496&e)>>4]=t.data[15&e|(512&e)>>5];else if(256==(65280&e)){const i=2*(15&e),r=2*((240&e)>>4);t.data[r]=t.data[i],t.data[r+1]=t.data[i+1]}else if(39936==(64512&e)){const i=t.data[(496&e)>>4]*t.data[15&e|(512&e)>>5];t.dataView.setUint16(0,i,!0),t.data[95]=252&t.data[95]|(65535&i?0:2)|(32768&i?1:0),t.cycles++}else if(512==(65280&e)){const i=t.dataView.getInt8(16+((240&e)>>4))*t.dataView.getInt8(16+(15&e));t.dataView.setInt16(0,i,!0),t.data[95]=252&t.data[95]|(65535&i?0:2)|(32768&i?1:0),t.cycles++}else if(768==(65416&e)){const i=t.dataView.getInt8(16+((112&e)>>4))*t.data[16+(7&e)];t.dataView.setInt16(0,i,!0),t.data[95]=252&t.data[95]|(65535&i?0:2)|(32768&i?1:0),t.cycles++}else if(37889==(65039&e)){const i=(496&e)>>4,r=t.data[i],n=0-r;t.data[i]=n;let s=192&t.data[95];s|=n?0:2,s|=128&n?4:0,s|=128===n?8:0,s|=s>>2&1^s>>3&1?16:0,s|=n?1:0,s|=1&(n|r)?32:0,t.data[95]=s}else if(0===e);else if(10240==(64512&e)){const i=t.data[(496&e)>>4]|t.data[15&e|(512&e)>>5];t.data[(496&e)>>4]=i;let r=225&t.data[95];r|=i?0:2,r|=128&i?4:0,r|=r>>2&1^r>>3&1?16:0,t.data[95]=r}else if(24576==(61440&e)){const i=t.data[16+((240&e)>>4)]|15&e|(3840&e)>>4;t.data[16+((240&e)>>4)]=i;let r=225&t.data[95];r|=i?0:2,r|=128&i?4:0,r|=r>>2&1^r>>3&1?16:0,t.data[95]=r}else if(47104==(63488&e))t.writeData(32+(15&e|(1536&e)>>5),t.data[(496&e)>>4]);else if(36879==(65039&e)){const i=t.dataView.getUint16(93,!0)+1;t.dataView.setUint16(93,i,!0),t.data[(496&e)>>4]=t.data[i],t.cycles++}else if(37391==(65039&e)){const i=t.dataView.getUint16(93,!0);t.data[i]=t.data[(496&e)>>4],t.dataView.setUint16(93,i-1,!0),t.cycles++}else if(53248==(61440&e)){const i=(2047&e)-(2048&e?2048:0),r=t.pc+1,n=t.dataView.getUint16(93,!0),{pc22Bits:s}=t;t.data[n]=255&r,t.data[n-1]=r>>8&255,s&&(t.data[n-2]=r>>16&255),t.dataView.setUint16(93,n-(s?3:2),!0),t.pc+=i,t.cycles+=s?3:2}else if(38152===e){const{pc22Bits:e}=t,i=t.dataView.getUint16(93,!0)+(e?3:2);t.dataView.setUint16(93,i,!0),t.pc=(t.data[i-1]<<8)+t.data[i]-1,e&&(t.pc|=t.data[i-2]<<16),t.cycles+=e?4:3}else if(38168===e){const{pc22Bits:e}=t,i=t.dataView.getUint16(93,!0)+(e?3:2);t.dataView.setUint16(93,i,!0),t.pc=(t.data[i-1]<<8)+t.data[i]-1,e&&(t.pc|=t.data[i-2]<<16),t.cycles+=e?4:3,t.data[95]|=128}else if(49152==(61440&e))t.pc=t.pc+((2047&e)-(2048&e?2048:0)),t.cycles++;else if(37895==(65039&e)){const i=t.data[(496&e)>>4],r=i>>>1|(1&t.data[95])<<7;t.data[(496&e)>>4]=r;let n=224&t.data[95];n|=r?0:2,n|=128&r?4:0,n|=1&i?1:0,n|=n>>2&1^1&n?8:0,n|=n>>2&1^n>>3&1?16:0,t.data[95]=n}else if(2048==(64512&e)){const i=t.data[(496&e)>>4],r=t.data[15&e|(512&e)>>5];let n=t.data[95];const s=i-r-(1&n);t.data[(496&e)>>4]=s,n=192&n|(!s&&n>>1&1?2:0)|(r+(1&n)>i?1:0),n|=128&s?4:0,n|=(i^r)&(i^s)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=1&(~i&r|r&s|s&~i)?32:0,t.data[95]=n}else if(16384==(61440&e)){const i=t.data[16+((240&e)>>4)],r=15&e|(3840&e)>>4;let n=t.data[95];const s=i-r-(1&n);t.data[16+((240&e)>>4)]=s,n=192&n|(!s&&n>>1&1?2:0)|(r+(1&n)>i?1:0),n|=128&s?4:0,n|=(i^r)&(i^s)&128?8:0,n|=n>>2&1^n>>3&1?16:0,n|=1&(~i&r|r&s|s&~i)?32:0,t.data[95]=n}else if(39424==(65280&e)){const i=32+((248&e)>>3),r=1<<(7&e);t.writeData(i,t.readData(i)|r,r),t.cycles++}else if(39168==(65280&e)){if(!(t.readData(32+((248&e)>>3))&1<<(7&e))){const e=w(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(39680==(65280&e)){if(t.readData(32+((248&e)>>3))&1<<(7&e)){const e=w(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(38656==(65280&e)){const i=2*((48&e)>>4)+24,r=t.dataView.getUint16(i,!0),n=15&e|(192&e)>>2,s=r-n;t.dataView.setUint16(i,s,!0);let a=192&t.data[95];a|=s?0:2,a|=32768&s?4:0,a|=r&~s&32768?8:0,a|=a>>2&1^a>>3&1?16:0,a|=n>r?1:0,a|=1&(~r&n|n&s|s&~r)?32:0,t.data[95]=a,t.cycles++}else if(64512==(65032&e)){if(!(t.data[(496&e)>>4]&1<<(7&e))){const e=w(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(65024==(65032&e)){if(t.data[(496&e)>>4]&1<<(7&e)){const e=w(t.progMem[t.pc+1])?2:1;t.cycles+=e,t.pc+=e}}else if(38280===e);else if(38376===e);else if(38392===e);else if(37376==(65039&e)){const i=t.data[(496&e)>>4],r=t.progMem[t.pc+1];t.writeData(r,i),t.pc++,t.cycles++}else if(37388==(65039&e))t.writeData(t.dataView.getUint16(26,!0),t.data[(496&e)>>4]),t.cycles++;else if(37389==(65039&e)){const i=t.dataView.getUint16(26,!0);t.writeData(i,t.data[(496&e)>>4]),t.dataView.setUint16(26,i+1,!0),t.cycles++}else if(37390==(65039&e)){const i=t.data[(496&e)>>4],r=t.dataView.getUint16(26,!0)-1;t.dataView.setUint16(26,r,!0),t.writeData(r,i),t.cycles++}else if(33288==(65039&e))t.writeData(t.dataView.getUint16(28,!0),t.data[(496&e)>>4]),t.cycles++;else if(37385==(65039&e)){const i=t.data[(496&e)>>4],r=t.dataView.getUint16(28,!0);t.writeData(r,i),t.dataView.setUint16(28,r+1,!0),t.cycles++}else if(37386==(65039&e)){const i=t.data[(496&e)>>4],r=t.dataView.getUint16(28,!0)-1;t.dataView.setUint16(28,r,!0),t.writeData(r,i),t.cycles++}else if(33288==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.writeData(t.dataView.getUint16(28,!0)+(7&e|(3072&e)>>7|(8192&e)>>8),t.data[(496&e)>>4]),t.cycles++;else if(33280==(65039&e))t.writeData(t.dataView.getUint16(30,!0),t.data[(496&e)>>4]),t.cycles++;else if(37377==(65039&e)){const i=t.dataView.getUint16(30,!0);t.writeData(i,t.data[(496&e)>>4]),t.dataView.setUint16(30,i+1,!0),t.cycles++}else if(37378==(65039&e)){const i=t.data[(496&e)>>4],r=t.dataView.getUint16(30,!0)-1;t.dataView.setUint16(30,r,!0),t.writeData(r,i),t.cycles++}else if(33280==(53768&e)&&7&e|(3072&e)>>7|(8192&e)>>8)t.writeData(t.dataView.getUint16(30,!0)+(7&e|(3072&e)>>7|(8192&e)>>8),t.data[(496&e)>>4]),t.cycles++;else if(6144==(64512&e)){const i=t.data[(496&e)>>4],r=t.data[15&e|(512&e)>>5],n=i-r;t.data[(496&e)>>4]=n;let s=192&t.data[95];s|=n?0:2,s|=128&n?4:0,s|=(i^r)&(i^n)&128?8:0,s|=s>>2&1^s>>3&1?16:0,s|=r>i?1:0,s|=1&(~i&r|r&n|n&~i)?32:0,t.data[95]=s}else if(20480==(61440&e)){const i=t.data[16+((240&e)>>4)],r=15&e|(3840&e)>>4,n=i-r;t.data[16+((240&e)>>4)]=n;let s=192&t.data[95];s|=n?0:2,s|=128&n?4:0,s|=(i^r)&(i^n)&128?8:0,s|=s>>2&1^s>>3&1?16:0,s|=r>i?1:0,s|=1&(~i&r|r&n|n&~i)?32:0,t.data[95]=s}else if(37890==(65039&e)){const i=(496&e)>>4,r=t.data[i];t.data[i]=(15&r)<<4|(240&r)>>>4}else if(38312===e)t.onWatchdogReset();else if(37380==(65039&e)){const i=(496&e)>>4,r=t.data[i],n=t.data[t.dataView.getUint16(30,!0)];t.data[t.dataView.getUint16(30,!0)]=r,t.data[i]=n}t.pc=(t.pc+1)%t.progMem.length,t.cycles++}!function(t){t[t.AVCC=0]="AVCC",t[t.AREF=1]="AREF",t[t.Internal1V1=2]="Internal1V1",t[t.Internal2V56=3]="Internal2V56",t[t.Reserved=4]="Reserved"}(e||(e={})),function(t){t[t.SingleEnded=0]="SingleEnded",t[t.Differential=1]="Differential",t[t.Constant=2]="Constant",t[t.Temperature=3]="Temperature"}(n||(n={})),n.SingleEnded,n.SingleEnded,n.SingleEnded,n.SingleEnded,n.SingleEnded,n.SingleEnded,n.SingleEnded,n.SingleEnded,n.Temperature,n.Constant,n.Constant,n.Constant,e.AREF,e.AVCC,e.Reserved,e.Internal1V1;const k={PIN:35,DDR:36,PORT:37,pinChange:{PCIE:0,PCICR:104,PCIFR:59,PCMSK:107,pinChangeInterrupt:6,mask:255,offset:0},externalInterrupts:[]},C={PIN:38,DDR:39,PORT:40,pinChange:{PCIE:1,PCICR:104,PCIFR:59,PCMSK:108,pinChangeInterrupt:8,mask:255,offset:0},externalInterrupts:[]},z={PIN:41,DDR:42,PORT:43,pinChange:{PCIE:2,PCICR:104,PCIFR:59,PCMSK:109,pinChangeInterrupt:10,mask:255,offset:0},externalInterrupts:[null,null,{EICRA:105,EICRB:0,EIMSK:61,EIFR:60,index:0,interrupt:2},{EICRA:105,EICRB:0,EIMSK:61,EIFR:60,index:1,interrupt:4}]};var S,O,E;!function(t){t[t.Low=0]="Low",t[t.High=1]="High",t[t.Input=2]="Input",t[t.InputPullUp=3]="InputPullUp"}(S||(S={})),function(t){t[t.None=0]="None",t[t.Enable=1]="Enable",t[t.Set=2]="Set",t[t.Clear=3]="Clear",t[t.Toggle=4]="Toggle"}(O||(O={})),function(t){t[t.LowLevel=0]="LowLevel",t[t.Change=1]="Change",t[t.FallingEdge=2]="FallingEdge",t[t.RisingEdge=3]="RisingEdge"}(E||(E={}));class R{constructor(t,e){var i,r,n,s,a,o,l,c;this.cpu=t,this.portConfig=e,this.externalClockListeners=[],this.listeners=[],this.pinValue=0,this.overrideMask=255,this.overrideValue=0,this.lastValue=0,this.lastDdr=0,this.lastPin=0,t.gpioPorts.add(this),t.gpioByPort[e.PORT]=this,t.writeHooks[e.DDR]=i=>{const r=t.data[e.PORT];return t.data[e.DDR]=i,this.writeGpio(r,i),this.updatePinRegister(i),!0},t.writeHooks[e.PORT]=i=>{const r=t.data[e.DDR];return t.data[e.PORT]=i,this.writeGpio(i,r),this.updatePinRegister(r),!0},t.writeHooks[e.PIN]=(i,r,n,s)=>{const a=t.data[e.PORT],o=t.data[e.DDR],l=a^i&s;return t.data[e.PORT]=l,this.writeGpio(l,o),this.updatePinRegister(o),!0};const{externalInterrupts:h}=e;this.externalInts=h.map((t=>t?{address:t.interrupt,flagRegister:t.EIFR,flagMask:1<<t.index,enableRegister:t.EIMSK,enableMask:1<<t.index}:null));const f=null!==(r=null===(i=h.find((t=>t&&t.EICRA)))||void 0===i?void 0:i.EICRA)&&void 0!==r?r:0;this.attachInterruptHook(f);const p=null!==(s=null===(n=h.find((t=>t&&t.EICRB)))||void 0===n?void 0:n.EICRB)&&void 0!==s?s:0;this.attachInterruptHook(p);const d=null!==(o=null===(a=h.find((t=>t&&t.EIMSK)))||void 0===a?void 0:a.EIMSK)&&void 0!==o?o:0;this.attachInterruptHook(d,"mask");const u=null!==(c=null===(l=h.find((t=>t&&t.EIFR)))||void 0===l?void 0:l.EIFR)&&void 0!==c?c:0;this.attachInterruptHook(u,"flag");const{pinChange:g}=e;if(this.PCINT=g?{address:g.pinChangeInterrupt,flagRegister:g.PCIFR,flagMask:1<<g.PCIE,enableRegister:g.PCICR,enableMask:1<<g.PCIE}:null,g){const{PCIFR:e,PCMSK:i}=g;t.writeHooks[e]=e=>{for(const i of this.cpu.gpioPorts){const{PCINT:r}=i;r&&t.clearInterruptByFlag(r,e)}return!0},t.writeHooks[i]=e=>{t.data[i]=e;for(const i of this.cpu.gpioPorts){const{PCINT:r}=i;r&&t.updateInterruptEnable(r,e)}return!0}}}addListener(t){this.listeners.push(t)}removeListener(t){this.listeners=this.listeners.filter((e=>e!==t))}pinState(t){const e=this.cpu.data[this.portConfig.DDR],i=this.cpu.data[this.portConfig.PORT],r=1<<t;return e&r?this.lastValue&r?S.High:S.Low:i&r?S.InputPullUp:S.Input}setPin(t,e){const i=1<<t;this.pinValue&=~i,e&&(this.pinValue|=i),this.updatePinRegister(this.cpu.data[this.portConfig.DDR])}timerOverridePin(t,e){const{cpu:i,portConfig:r}=this,n=1<<t;if(e===O.None)this.overrideMask|=n,this.overrideValue&=~n;else switch(this.overrideMask&=~n,e){case O.Enable:this.overrideValue&=~n,this.overrideValue|=i.data[r.PORT]&n;break;case O.Set:this.overrideValue|=n;break;case O.Clear:this.overrideValue&=~n;break;case O.Toggle:this.overrideValue^=n}const s=i.data[r.DDR];this.writeGpio(i.data[r.PORT],s),this.updatePinRegister(s)}updatePinRegister(t){var e,i;const r=this.pinValue&~t|this.lastValue&t;if(this.cpu.data[this.portConfig.PIN]=r,this.lastPin!==r){for(let t=0;t<8;t++)if((r&1<<t)!=(this.lastPin&1<<t)){const n=!!(r&1<<t);this.toggleInterrupt(t,n),null===(i=(e=this.externalClockListeners)[t])||void 0===i||i.call(e,n)}this.lastPin=r}}toggleInterrupt(t,e){const{cpu:i,portConfig:r,externalInts:n,PCINT:s}=this,{externalInterrupts:a,pinChange:o}=r,l=a[t],c=n[t];if(c&&l){const{index:t,EICRA:r,EICRB:n,EIMSK:s}=l;if(i.data[s]&1<<t){const s=t>=4?n:r,a=t%4*2,o=i.data[s]>>a&3;let l=!1;switch(c.constant=!1,o){case E.LowLevel:l=!e,c.constant=!0;break;case E.Change:l=!0;break;case E.FallingEdge:l=!e;break;case E.RisingEdge:l=e}l?i.setInterruptFlag(c):c.constant&&i.clearInterrupt(c,!0)}}if(o&&s&&o.mask&1<<t){const{PCMSK:e}=o;i.data[e]&1<<t+o.offset&&i.setInterruptFlag(s)}}attachInterruptHook(t,e="other"){if(!t)return;const{cpu:i}=this;i.writeHooks[t]=r=>{"flag"!==e&&(i.data[t]=r);for(const t of i.gpioPorts){for(const n of t.externalInts)n&&"mask"===e&&i.updateInterruptEnable(n,r),n&&!n.constant&&"flag"===e&&i.clearInterruptByFlag(n,r);t.checkExternalInterrupts()}return!0}}checkExternalInterrupts(){const{cpu:t}=this,{externalInterrupts:e}=this.portConfig;for(let i=0;i<8;i++){const r=e[i];if(!r)continue;const n=!!(this.lastPin&1<<i),{index:s,EICRA:a,EICRB:o,EIMSK:l,EIFR:c,interrupt:h}=r;if(!(t.data[l]&1<<s)||n)continue;const f=s>=4?o:a,p=s%4*2;(t.data[f]>>p&3)===E.LowLevel&&t.queueInterrupt({address:h,flagRegister:c,flagMask:1<<s,enableRegister:l,enableMask:1<<s,constant:!0})}}writeGpio(t,e){const i=(t&this.overrideMask|this.overrideValue)&e|t&~e,r=this.lastValue;if(i!==r||e!==this.lastDdr){this.lastValue=i,this.lastDdr=e;for(const t of this.listeners)t(i,r)}}}const P={0:0,1:1,2:8,3:64,4:256,5:1024,6:0,7:0};var A;!function(t){t[t.FallingEdge=6]="FallingEdge",t[t.RisingEdge=7]="RisingEdge"}(A||(A={}));const I={TOV:1,OCFA:2,OCFB:4,OCFC:0,TOIE:1,OCIEA:2,OCIEB:4,OCIEC:0},D=Object.assign({bits:8,captureInterrupt:0,compAInterrupt:28,compBInterrupt:30,compCInterrupt:0,ovfInterrupt:32,TIFR:53,OCRA:71,OCRB:72,OCRC:0,ICR:0,TCNT:70,TCCRA:68,TCCRB:69,TCCRC:0,TIMSK:110,dividers:P,compPortA:z.PORT,compPinA:6,compPortB:z.PORT,compPinB:5,compPortC:0,compPinC:0,externalClockPort:z.PORT,externalClockPin:4},I),$=Object.assign({bits:16,captureInterrupt:20,compAInterrupt:22,compBInterrupt:24,compCInterrupt:0,ovfInterrupt:26,TIFR:54,OCRA:136,OCRB:138,OCRC:0,ICR:134,TCNT:132,TCCRA:128,TCCRB:129,TCCRC:130,TIMSK:111,dividers:P,compPortA:k.PORT,compPinA:1,compPortB:k.PORT,compPinB:2,compPortC:0,compPinC:0,externalClockPort:z.PORT,externalClockPin:5},I),M=Object.assign({bits:8,captureInterrupt:0,compAInterrupt:14,compBInterrupt:16,compCInterrupt:0,ovfInterrupt:18,TIFR:55,OCRA:179,OCRB:180,OCRC:0,ICR:0,TCNT:178,TCCRA:176,TCCRB:177,TCCRC:0,TIMSK:112,dividers:{0:0,1:1,2:8,3:32,4:64,5:128,6:256,7:1024},compPortA:k.PORT,compPinA:3,compPortB:z.PORT,compPinB:3,compPortC:0,compPinC:0,externalClockPort:0,externalClockPin:0},I);var B,T,U;!function(t){t[t.Normal=0]="Normal",t[t.PWMPhaseCorrect=1]="PWMPhaseCorrect",t[t.CTC=2]="CTC",t[t.FastPWM=3]="FastPWM",t[t.PWMPhaseFrequencyCorrect=4]="PWMPhaseFrequencyCorrect",t[t.Reserved=5]="Reserved"}(B||(B={})),function(t){t[t.Max=0]="Max",t[t.Top=1]="Top",t[t.Bottom=2]="Bottom"}(T||(T={})),function(t){t[t.Immediate=0]="Immediate",t[t.Top=1]="Top",t[t.Bottom=2]="Bottom"}(U||(U={}));const{Normal:_,PWMPhaseCorrect:j,CTC:F,FastPWM:N,Reserved:V,PWMPhaseFrequencyCorrect:L}=B,G=[[_,255,U.Immediate,T.Max,0],[j,255,U.Top,T.Bottom,0],[F,1,U.Immediate,T.Max,0],[N,255,U.Bottom,T.Max,0],[V,255,U.Immediate,T.Max,0],[j,1,U.Top,T.Bottom,1],[V,255,U.Immediate,T.Max,0],[N,1,U.Bottom,T.Top,1]],H=[[_,65535,U.Immediate,T.Max,0],[j,255,U.Top,T.Bottom,0],[j,511,U.Top,T.Bottom,0],[j,1023,U.Top,T.Bottom,0],[F,1,U.Immediate,T.Max,0],[N,255,U.Bottom,T.Top,0],[N,511,U.Bottom,T.Top,0],[N,1023,U.Bottom,T.Top,0],[L,2,U.Bottom,T.Bottom,0],[L,1,U.Bottom,T.Bottom,1],[j,2,U.Top,T.Bottom,0],[j,1,U.Top,T.Bottom,1],[F,2,U.Immediate,T.Max,0],[V,65535,U.Immediate,T.Max,0],[N,2,U.Bottom,T.Top,1],[N,1,U.Bottom,T.Top,1]];class X{constructor(t,e){if(this.cpu=t,this.config=e,this.MAX=16===this.config.bits?65535:255,this.lastCycle=0,this.ocrA=0,this.nextOcrA=0,this.ocrB=0,this.nextOcrB=0,this.hasOCRC=this.config.OCRC>0,this.ocrC=0,this.nextOcrC=0,this.ocrUpdateMode=U.Immediate,this.tovUpdateMode=T.Max,this.icr=0,this.tcnt=0,this.tcntNext=0,this.tcntUpdated=!1,this.updateDivider=!1,this.countingUp=!0,this.divider=0,this.externalClockRisingEdge=!1,this.highByteTemp=0,this.OVF={address:this.config.ovfInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.TOV,enableRegister:this.config.TIMSK,enableMask:this.config.TOIE},this.OCFA={address:this.config.compAInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.OCFA,enableRegister:this.config.TIMSK,enableMask:this.config.OCIEA},this.OCFB={address:this.config.compBInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.OCFB,enableRegister:this.config.TIMSK,enableMask:this.config.OCIEB},this.OCFC={address:this.config.compCInterrupt,flagRegister:this.config.TIFR,flagMask:this.config.OCFC,enableRegister:this.config.TIMSK,enableMask:this.config.OCIEC},this.count=(t=!0,e=!1)=>{const{divider:i,lastCycle:r,cpu:n}=this,{cycles:s}=n,a=s-r;if(i&&a>=i||e){const t=e?1:Math.floor(a/i);this.lastCycle+=t*i;const r=this.tcnt,{timerMode:s,TOP:o}=this,l=s===j||s===L,c=l?this.phasePwmCount(r,t):(r+t)%(o+1),h=r+t>o;if(this.tcntUpdated||(this.tcnt=c,l||this.timerUpdated(c,r)),!l){if(s===N&&h){const{compA:t,compB:e}=this;t&&this.updateCompPin(t,"A",!0),e&&this.updateCompPin(e,"B",!0)}this.ocrUpdateMode==U.Bottom&&h&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC),!h||this.tovUpdateMode!=T.Top&&o!==this.MAX||n.setInterruptFlag(this.OVF)}}if(this.tcntUpdated&&(this.tcnt=this.tcntNext,this.tcntUpdated=!1,(0===this.tcnt&&this.ocrUpdateMode===U.Bottom||this.tcnt===this.TOP&&this.ocrUpdateMode===U.Top)&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC)),this.updateDivider){const{CS:t}=this,{externalClockPin:e}=this.config,i=this.config.dividers[t];return this.lastCycle=i?this.cpu.cycles:0,this.updateDivider=!1,this.divider=i,this.config.externalClockPort&&!this.externalClockPort&&(this.externalClockPort=this.cpu.gpioByPort[this.config.externalClockPort]),this.externalClockPort&&(this.externalClockPort.externalClockListeners[e]=null),void(i?n.addClockEvent(this.count,this.lastCycle+i-n.cycles):!this.externalClockPort||t!==A.FallingEdge&&t!==A.RisingEdge||(this.externalClockPort.externalClockListeners[e]=this.externalClockCallback,this.externalClockRisingEdge=t===A.RisingEdge))}t&&i&&n.addClockEvent(this.count,this.lastCycle+i-n.cycles)},this.externalClockCallback=t=>{t===this.externalClockRisingEdge&&this.count(!1,!0)},this.updateWGMConfig(),this.cpu.readHooks[e.TCNT]=t=>(this.count(!1),16===this.config.bits&&(this.cpu.data[t+1]=this.tcnt>>8),this.cpu.data[t]=255&this.tcnt),this.cpu.writeHooks[e.TCNT]=t=>{this.tcntNext=this.highByteTemp<<8|t,this.countingUp=!0,this.tcntUpdated=!0,this.cpu.updateClockEvent(this.count,0),this.divider&&this.timerUpdated(this.tcntNext,this.tcntNext)},this.cpu.writeHooks[e.OCRA]=t=>{this.nextOcrA=this.highByteTemp<<8|t,this.ocrUpdateMode===U.Immediate&&(this.ocrA=this.nextOcrA)},this.cpu.writeHooks[e.OCRB]=t=>{this.nextOcrB=this.highByteTemp<<8|t,this.ocrUpdateMode===U.Immediate&&(this.ocrB=this.nextOcrB)},this.hasOCRC&&(this.cpu.writeHooks[e.OCRC]=t=>{this.nextOcrC=this.highByteTemp<<8|t,this.ocrUpdateMode===U.Immediate&&(this.ocrC=this.nextOcrC)}),16===this.config.bits){this.cpu.writeHooks[e.ICR]=t=>{this.icr=this.highByteTemp<<8|t};const t=t=>{this.highByteTemp=t};this.cpu.writeHooks[e.TCNT+1]=t,this.cpu.writeHooks[e.OCRA+1]=t,this.cpu.writeHooks[e.OCRB+1]=t,this.hasOCRC&&(this.cpu.writeHooks[e.OCRC+1]=t),this.cpu.writeHooks[e.ICR+1]=t}t.writeHooks[e.TCCRA]=t=>(this.cpu.data[e.TCCRA]=t,this.updateWGMConfig(),!0),t.writeHooks[e.TCCRB]=t=>(e.TCCRC||(this.checkForceCompare(t),t&=-193),this.cpu.data[e.TCCRB]=t,this.updateDivider=!0,this.cpu.clearClockEvent(this.count),this.cpu.addClockEvent(this.count,0),this.updateWGMConfig(),!0),e.TCCRC&&(t.writeHooks[e.TCCRC]=t=>{this.checkForceCompare(t)}),t.writeHooks[e.TIFR]=t=>(this.cpu.data[e.TIFR]=t,this.cpu.clearInterruptByFlag(this.OVF,t),this.cpu.clearInterruptByFlag(this.OCFA,t),this.cpu.clearInterruptByFlag(this.OCFB,t),!0),t.writeHooks[e.TIMSK]=t=>{this.cpu.updateInterruptEnable(this.OVF,t),this.cpu.updateInterruptEnable(this.OCFA,t),this.cpu.updateInterruptEnable(this.OCFB,t)}}reset(){this.divider=0,this.lastCycle=0,this.ocrA=0,this.nextOcrA=0,this.ocrB=0,this.nextOcrB=0,this.ocrC=0,this.nextOcrC=0,this.icr=0,this.tcnt=0,this.tcntNext=0,this.tcntUpdated=!1,this.countingUp=!1,this.updateDivider=!0}get TCCRA(){return this.cpu.data[this.config.TCCRA]}get TCCRB(){return this.cpu.data[this.config.TCCRB]}get TIMSK(){return this.cpu.data[this.config.TIMSK]}get CS(){return 7&this.TCCRB}get WGM(){const t=16===this.config.bits?24:8;return(this.TCCRB&t)>>1|3&this.TCCRA}get TOP(){switch(this.topValue){case 1:return this.ocrA;case 2:return this.icr;default:return this.topValue}}updateWGMConfig(){const{config:t,WGM:e}=this,i=16===t.bits?H:G,r=this.cpu.data[t.TCCRA],[n,s,a,o,l]=i[e];this.timerMode=n,this.topValue=s,this.ocrUpdateMode=a,this.tovUpdateMode=o;const c=n===N||n===j||n===L,h=this.compA;this.compA=r>>6&3,1!==this.compA||!c||1&l||(this.compA=0),!!h!=!!this.compA&&this.updateCompA(this.compA?O.Enable:O.None);const f=this.compB;if(this.compB=r>>4&3,1===this.compB&&c&&(this.compB=0),!!f!=!!this.compB&&this.updateCompB(this.compB?O.Enable:O.None),this.hasOCRC){const t=this.compC;this.compC=r>>2&3,1===this.compC&&c&&(this.compC=0),!!t!=!!this.compC&&this.updateCompC(this.compC?O.Enable:O.None)}}phasePwmCount(t,e){const{ocrA:i,ocrB:r,ocrC:n,hasOCRC:s,TOP:a,tcntUpdated:o}=this;for(;e>0;)this.countingUp?++t!==a||o||(this.countingUp=!1,this.ocrUpdateMode===U.Top&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC)):--t||o||(this.countingUp=!0,this.cpu.setInterruptFlag(this.OVF),this.ocrUpdateMode===U.Bottom&&(this.ocrA=this.nextOcrA,this.ocrB=this.nextOcrB,this.ocrC=this.nextOcrC)),o||(t===i&&(this.cpu.setInterruptFlag(this.OCFA),this.compA&&this.updateCompPin(this.compA,"A")),t===r&&(this.cpu.setInterruptFlag(this.OCFB),this.compB&&this.updateCompPin(this.compB,"B")),s&&t===n&&(this.cpu.setInterruptFlag(this.OCFC),this.compC&&this.updateCompPin(this.compC,"C"))),e--;return t}timerUpdated(t,e){const{ocrA:i,ocrB:r,ocrC:n,hasOCRC:s}=this,a=e>t;((e<i||a)&&t>=i||e<i&&a)&&(this.cpu.setInterruptFlag(this.OCFA),this.compA&&this.updateCompPin(this.compA,"A")),((e<r||a)&&t>=r||e<r&&a)&&(this.cpu.setInterruptFlag(this.OCFB),this.compB&&this.updateCompPin(this.compB,"B")),s&&((e<n||a)&&t>=n||e<n&&a)&&(this.cpu.setInterruptFlag(this.OCFC),this.compC&&this.updateCompPin(this.compC,"C"))}checkForceCompare(t){this.timerMode!=B.FastPWM&&this.timerMode!=B.PWMPhaseCorrect&&this.timerMode!=B.PWMPhaseFrequencyCorrect&&(128&t&&this.updateCompPin(this.compA,"A"),64&t&&this.updateCompPin(this.compB,"B"),this.config.compPortC&&32&t&&this.updateCompPin(this.compC,"C"))}updateCompPin(t,e,i=!1){let r=O.None;const n=3===t,s=this.countingUp===n;switch(this.timerMode){case _:case F:r=function(t){switch(t){case 1:return O.Toggle;case 2:return O.Clear;case 3:return O.Set;default:return O.Enable}}(t);break;case N:r=1===t?i?O.None:O.Toggle:n!==i?O.Set:O.Clear;break;case j:case L:r=1===t?O.Toggle:s?O.Set:O.Clear}r!==O.None&&("A"===e?this.updateCompA(r):"B"===e?this.updateCompB(r):this.updateCompC(r))}updateCompA(t){const{compPortA:e,compPinA:i}=this.config,r=this.cpu.gpioByPort[e];null==r||r.timerOverridePin(i,t)}updateCompB(t){const{compPortB:e,compPinB:i}=this.config,r=this.cpu.gpioByPort[e];null==r||r.timerOverridePin(i,t)}updateCompC(t){const{compPortC:e,compPinC:i}=this.config,r=this.cpu.gpioByPort[e];null==r||r.timerOverridePin(i,t)}}const W={rxCompleteInterrupt:36,dataRegisterEmptyInterrupt:38,txCompleteInterrupt:40,UCSRA:192,UCSRB:193,UCSRC:194,UBRRL:196,UBRRH:197,UDR:198},K={5:31,6:63,7:127,8:255,9:255};class q{constructor(t,e,i){this.cpu=t,this.config=e,this.freqHz=i,this.onByteTransmit=null,this.onLineTransmit=null,this.onRxComplete=null,this.onConfigurationChange=null,this.rxBusyValue=!1,this.rxByte=0,this.lineBuffer="",this.RXC={address:this.config.rxCompleteInterrupt,flagRegister:this.config.UCSRA,flagMask:128,enableRegister:this.config.UCSRB,enableMask:128,constant:!0},this.UDRE={address:this.config.dataRegisterEmptyInterrupt,flagRegister:this.config.UCSRA,flagMask:32,enableRegister:this.config.UCSRB,enableMask:32},this.TXC={address:this.config.txCompleteInterrupt,flagRegister:this.config.UCSRA,flagMask:64,enableRegister:this.config.UCSRB,enableMask:64},this.reset(),this.cpu.writeHooks[e.UCSRA]=(i,r)=>{var n;return t.data[e.UCSRA]=3&i,t.clearInterruptByFlag(this.TXC,i),(2&i)!=(2&r)&&(null===(n=this.onConfigurationChange)||void 0===n||n.call(this)),!0},this.cpu.writeHooks[e.UCSRB]=(i,r)=>{var n;return t.updateInterruptEnable(this.RXC,i),t.updateInterruptEnable(this.UDRE,i),t.updateInterruptEnable(this.TXC,i),16&i&&16&r&&t.clearInterrupt(this.RXC),8&i&&!(8&r)&&t.setInterruptFlag(this.UDRE),t.data[e.UCSRB]=i,(28&i)!=(28&r)&&(null===(n=this.onConfigurationChange)||void 0===n||n.call(this)),!0},this.cpu.writeHooks[e.UCSRC]=i=>{var r;return t.data[e.UCSRC]=i,null===(r=this.onConfigurationChange)||void 0===r||r.call(this),!0},this.cpu.readHooks[e.UDR]=()=>{var t;const e=null!==(t=K[this.bitsPerChar])&&void 0!==t?t:255,i=this.rxByte&e;return this.rxByte=0,this.cpu.clearInterrupt(this.RXC),i},this.cpu.writeHooks[e.UDR]=e=>{if(this.onByteTransmit&&this.onByteTransmit(e),this.onLineTransmit){const t=String.fromCharCode(e);"\n"===t?(this.onLineTransmit(this.lineBuffer),this.lineBuffer=""):this.lineBuffer+=t}this.cpu.addClockEvent((()=>{t.setInterruptFlag(this.UDRE),t.setInterruptFlag(this.TXC)}),this.cyclesPerChar),this.cpu.clearInterrupt(this.TXC),this.cpu.clearInterrupt(this.UDRE)},this.cpu.writeHooks[e.UBRRH]=t=>{var i;return this.cpu.data[e.UBRRH]=t,null===(i=this.onConfigurationChange)||void 0===i||i.call(this),!0},this.cpu.writeHooks[e.UBRRL]=t=>{var i;return this.cpu.data[e.UBRRL]=t,null===(i=this.onConfigurationChange)||void 0===i||i.call(this),!0}}reset(){this.cpu.data[this.config.UCSRA]=32,this.cpu.data[this.config.UCSRB]=0,this.cpu.data[this.config.UCSRC]=6,this.rxBusyValue=!1,this.rxByte=0,this.lineBuffer=""}get rxBusy(){return this.rxBusyValue}writeByte(t,e=!1){var i;const{cpu:r}=this;return!(this.rxBusyValue||!this.rxEnable)&&(e?(this.rxByte=t,r.setInterruptFlag(this.RXC),void(null===(i=this.onRxComplete)||void 0===i||i.call(this))):(this.rxBusyValue=!0,r.addClockEvent((()=>{this.rxBusyValue=!1,this.writeByte(t,!0)}),this.cyclesPerChar),!0))}get cyclesPerChar(){const t=1+this.bitsPerChar+this.stopBits+(this.parityEnabled?1:0);return(this.UBRR+1)*this.multiplier*t}get UBRR(){const{UBRRH:t,UBRRL:e}=this.config;return this.cpu.data[t]<<8|this.cpu.data[e]}get multiplier(){return 2&this.cpu.data[this.config.UCSRA]?8:16}get rxEnable(){return!!(16&this.cpu.data[this.config.UCSRB])}get txEnable(){return!!(8&this.cpu.data[this.config.UCSRB])}get baudRate(){return Math.floor(this.freqHz/(this.multiplier*(1+this.UBRR)))}get bitsPerChar(){switch((6&this.cpu.data[this.config.UCSRC])>>1|4&this.cpu.data[this.config.UCSRB]){case 0:return 5;case 1:return 6;case 2:return 7;case 3:return 8;default:return 9}}get stopBits(){return 8&this.cpu.data[this.config.UCSRC]?2:1}get parityEnabled(){return!!(32&this.cpu.data[this.config.UCSRC])}get parityOdd(){return!!(16&this.cpu.data[this.config.UCSRC])}}const Y=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),J=new Map;class Q{constructor(t,e){if(this._$cssResult$=!0,e!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=J.get(this.cssText);return Y&&void 0===t&&(J.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const tt=t=>new Q("string"==typeof t?t:t+"",Z),et=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,r)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[r+1]),t[0]);return new Q(i,Z)},it=Y?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return tt(e)})(t):t;var rt;const nt=window.trustedTypes,st=nt?nt.emptyScript:"",at=window.reactiveElementPolyfillSupport,ot={toAttribute(t,e){switch(e){case Boolean:t=t?st:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},lt=(t,e)=>e!==t&&(e==e||t==t),ct={attribute:!0,type:String,converter:ot,reflect:!1,hasChanged:lt};class ht extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const r=this._$Eh(i,e);void 0!==r&&(this._$Eu.set(r,i),t.push(r))})),t}static createProperty(t,e=ct){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,i,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(r){const n=this[t];this[e]=r,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||ct}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(it(t))}else void 0!==t&&e.push(it(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{Y?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const i=document.createElement("style"),r=window.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=e.cssText,t.appendChild(i)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=ct){var r,n;const s=this.constructor._$Eh(t,i);if(void 0!==s&&!0===i.reflect){const a=(null!==(n=null===(r=i.converter)||void 0===r?void 0:r.toAttribute)&&void 0!==n?n:ot.toAttribute)(e,i.type);this._$Ei=t,null==a?this.removeAttribute(s):this.setAttribute(s,a),this._$Ei=null}}_$AK(t,e){var i,r,n;const s=this.constructor,a=s._$Eu.get(t);if(void 0!==a&&this._$Ei!==a){const t=s.getPropertyOptions(a),o=t.converter,l=null!==(n=null!==(r=null===(i=o)||void 0===i?void 0:i.fromAttribute)&&void 0!==r?r:"function"==typeof o?o:null)&&void 0!==n?n:ot.fromAttribute;this._$Ei=a,this[a]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let r=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||lt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var ft;ht.finalized=!0,ht.elementProperties=new Map,ht.elementStyles=[],ht.shadowRootOptions={mode:"open"},null==at||at({ReactiveElement:ht}),(null!==(rt=globalThis.reactiveElementVersions)&&void 0!==rt?rt:globalThis.reactiveElementVersions=[]).push("1.0.2");const pt=globalThis.trustedTypes,dt=pt?pt.createPolicy("lit-html",{createHTML:t=>t}):void 0,ut=`lit$${(Math.random()+"").slice(9)}$`,gt="?"+ut,yt=`<${gt}>`,mt=document,xt=(t="")=>mt.createComment(t),vt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,wt=Array.isArray,bt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,kt=/-->/g,Ct=/>/g,zt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,St=/'/g,Ot=/"/g,Et=/^(?:script|style|textarea)$/i,Rt=t=>(e,...i)=>({_$litType$:t,strings:e,values:i}),Pt=Rt(1),At=Rt(2),It=Symbol.for("lit-noChange"),Dt=Symbol.for("lit-nothing"),$t=new WeakMap,Mt=mt.createTreeWalker(mt,129,null,!1),Bt=(t,e)=>{const i=t.length-1,r=[];let n,s=2===e?"<svg>":"",a=bt;for(let e=0;e<i;e++){const i=t[e];let o,l,c=-1,h=0;for(;h<i.length&&(a.lastIndex=h,l=a.exec(i),null!==l);)h=a.lastIndex,a===bt?"!--"===l[1]?a=kt:void 0!==l[1]?a=Ct:void 0!==l[2]?(Et.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=zt):void 0!==l[3]&&(a=zt):a===zt?">"===l[0]?(a=null!=n?n:bt,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?zt:'"'===l[3]?Ot:St):a===Ot||a===St?a=zt:a===kt||a===Ct?a=bt:(a=zt,n=void 0);const f=a===zt&&t[e+1].startsWith("/>")?" ":"";s+=a===bt?i+yt:c>=0?(r.push(o),i.slice(0,c)+"$lit$"+i.slice(c)+ut+f):i+ut+(-2===c?(r.push(void 0),e):f)}const o=s+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==dt?dt.createHTML(o):o,r]};class Tt{constructor({strings:t,_$litType$:e},i){let r;this.parts=[];let n=0,s=0;const a=t.length-1,o=this.parts,[l,c]=Bt(t,e);if(this.el=Tt.createElement(l,i),Mt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(r=Mt.nextNode())&&o.length<a;){if(1===r.nodeType){if(r.hasAttributes()){const t=[];for(const e of r.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(ut)){const i=c[s++];if(t.push(e),void 0!==i){const t=r.getAttribute(i.toLowerCase()+"$lit$").split(ut),e=/([.?@])?(.*)/.exec(i);o.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?Nt:"?"===e[1]?Lt:"@"===e[1]?Gt:Ft})}else o.push({type:6,index:n})}for(const e of t)r.removeAttribute(e)}if(Et.test(r.tagName)){const t=r.textContent.split(ut),e=t.length-1;if(e>0){r.textContent=pt?pt.emptyScript:"";for(let i=0;i<e;i++)r.append(t[i],xt()),Mt.nextNode(),o.push({type:2,index:++n});r.append(t[e],xt())}}}else if(8===r.nodeType)if(r.data===gt)o.push({type:2,index:n});else{let t=-1;for(;-1!==(t=r.data.indexOf(ut,t+1));)o.push({type:7,index:n}),t+=ut.length-1}n++}}static createElement(t,e){const i=mt.createElement("template");return i.innerHTML=t,i}}function Ut(t,e,i=t,r){var n,s,a,o;if(e===It)return e;let l=void 0!==r?null===(n=i._$Cl)||void 0===n?void 0:n[r]:i._$Cu;const c=vt(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,r)),void 0!==r?(null!==(a=(o=i)._$Cl)&&void 0!==a?a:o._$Cl=[])[r]=l:i._$Cu=l),void 0!==l&&(e=Ut(t,l._$AS(t,e.values),l,r)),e}class _t{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:r}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:mt).importNode(i,!0);Mt.currentNode=n;let s=Mt.nextNode(),a=0,o=0,l=r[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new jt(s,s.nextSibling,this,t):1===l.type?e=new l.ctor(s,l.name,l.strings,this,t):6===l.type&&(e=new Ht(s,this,t)),this.v.push(e),l=r[++o]}a!==(null==l?void 0:l.index)&&(s=Mt.nextNode(),a++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class jt{constructor(t,e,i,r){var n;this.type=2,this._$AH=Dt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=r,this._$Cg=null===(n=null==r?void 0:r.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ut(this,t,e),vt(t)?t===Dt||null==t||""===t?(this._$AH!==Dt&&this._$AR(),this._$AH=Dt):t!==this._$AH&&t!==It&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return wt(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==Dt&&vt(this._$AH)?this._$AA.nextSibling.data=t:this.S(mt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:r}=t,n="number"==typeof r?this._$AC(t):(void 0===r.el&&(r.el=Tt.createElement(r.h,this.options)),r);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new _t(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=$t.get(t.strings);return void 0===e&&$t.set(t.strings,e=new Tt(t)),e}M(t){wt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,r=0;for(const n of t)r===e.length?e.push(i=new jt(this.A(xt()),this.A(xt()),this,this.options)):i=e[r],i._$AI(n),r++;r<e.length&&(this._$AR(i&&i._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Ft{constructor(t,e,i,r,n){this.type=1,this._$AH=Dt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Dt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,r){const n=this.strings;let s=!1;if(void 0===n)t=Ut(this,t,e,0),s=!vt(t)||t!==this._$AH&&t!==It,s&&(this._$AH=t);else{const r=t;let a,o;for(t=n[0],a=0;a<n.length-1;a++)o=Ut(this,r[i+a],e,a),o===It&&(o=this._$AH[a]),s||(s=!vt(o)||o!==this._$AH[a]),o===Dt?t=Dt:t!==Dt&&(t+=(null!=o?o:"")+n[a+1]),this._$AH[a]=o}s&&!r&&this.k(t)}k(t){t===Dt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Nt extends Ft{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===Dt?void 0:t}}const Vt=pt?pt.emptyScript:"";class Lt extends Ft{constructor(){super(...arguments),this.type=4}k(t){t&&t!==Dt?this.element.setAttribute(this.name,Vt):this.element.removeAttribute(this.name)}}class Gt extends Ft{constructor(t,e,i,r,n){super(t,e,i,r,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=Ut(this,t,e,0))&&void 0!==i?i:Dt)===It)return;const r=this._$AH,n=t===Dt&&r!==Dt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,s=t!==Dt&&(r===Dt||n);n&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Ht{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ut(this,t)}}const Xt=window.litHtmlPolyfillSupport;var Wt,Kt;null==Xt||Xt(Tt,jt),(null!==(ft=globalThis.litHtmlVersions)&&void 0!==ft?ft:globalThis.litHtmlVersions=[]).push("2.0.2");class qt extends ht{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var r,n;const s=null!==(r=null==i?void 0:i.renderBefore)&&void 0!==r?r:e;let a=s._$litPart$;if(void 0===a){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;s._$litPart$=a=new jt(e.insertBefore(xt(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return It}}qt.finalized=!0,qt._$litElement$=!0,null===(Wt=globalThis.litElementHydrateSupport)||void 0===Wt||Wt.call(globalThis,{LitElement:qt});const Yt=globalThis.litElementPolyfillSupport;null==Yt||Yt({LitElement:qt}),(null!==(Kt=globalThis.litElementVersions)&&void 0!==Kt?Kt:globalThis.litElementVersions=[]).push("3.0.2");const Zt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function Jt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):Zt(t,e)}const Qt=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:r}=e;return{kind:i,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),te=3.78;var ee=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let ie=class extends qt{constructor(){super(...arguments),this.color="red",this.offColor="#444",this.background="black",this.digits=1,this.colon=!1,this.colonValue=!1,this.pins="top",this.values=[0,0,0,0,0,0,0,0]}get pinInfo(){const t=t=>{const{startX:e,cols:i,bottomY:r}=this.pinPositions,n=(t-1)%i,s=1-Math.floor((t-1)/i),a=e+1.27+2.54*(s?n:i-n-1),o="top"===this.pins?s?r+1:1:s?r+2:0;return{number:t,x:a*te,y:o*te}};switch(this.digits){case 4:return[Object.assign(Object.assign({name:"A"},t(13)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},t(9)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},t(4)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},t(2)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},t(1)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},t(12)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},t(5)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},t(3)),{signals:[],description:"Decimal Point"}),Object.assign(Object.assign({name:"DIG1"},t(14)),{signals:[],description:"Digit 1 Common"}),Object.assign(Object.assign({name:"DIG2"},t(11)),{signals:[],description:"Digit 2 Common"}),Object.assign(Object.assign({name:"DIG3"},t(10)),{signals:[],description:"Digit 3 Common"}),Object.assign(Object.assign({name:"DIG4"},t(6)),{signals:[],description:"Digit 4 Common"}),Object.assign(Object.assign({name:"COM"},t(7)),{signals:[],description:"Common pin"}),Object.assign(Object.assign({name:"CLN"},t(8)),{signals:[],description:"Colon"})];case 2:return[Object.assign(Object.assign({name:"DIG1"},t(8)),{signals:[],description:"Digit 1 Common"}),Object.assign(Object.assign({name:"DIG2"},t(7)),{signals:[],description:"Digit 2 Common"}),Object.assign(Object.assign({name:"A"},t(10)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},t(9)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},t(1)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},t(4)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},t(3)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},t(6)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},t(5)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},t(2)),{signals:[],description:"Decimal Point"})];default:return[Object.assign(Object.assign({name:"COM.1"},t(3)),{signals:[],description:"Common"}),Object.assign(Object.assign({name:"COM.2"},t(8)),{signals:[],description:"Common"}),Object.assign(Object.assign({name:"A"},t(7)),{signals:[],description:"Segment A"}),Object.assign(Object.assign({name:"B"},t(6)),{signals:[],description:"Segment B"}),Object.assign(Object.assign({name:"C"},t(4)),{signals:[],description:"Segment C"}),Object.assign(Object.assign({name:"D"},t(2)),{signals:[],description:"Segment D"}),Object.assign(Object.assign({name:"E"},t(1)),{signals:[],description:"Segment E"}),Object.assign(Object.assign({name:"F"},t(9)),{signals:[],description:"Segment F"}),Object.assign(Object.assign({name:"G"},t(10)),{signals:[],description:"Segment G"}),Object.assign(Object.assign({name:"DP"},t(5)),{signals:[],description:"Decimal Point"})]}}static get styles(){return et`
      polygon {
        transform: scale(0.9);
        transform-origin: 50% 50%;
        transform-box: fill-box;
      }
    `}get pinPositions(){const{digits:t}=this,e=4===t?14:10,i=Math.ceil(e/2);return{startX:(12.55*t-2.54*i)/2,bottomY:"extend"===this.pins?21:17,cols:i}}get yOffset(){return"extend"===this.pins?2:0}renderDigit(t,e){const i=t=>this.values[e+t]?this.color:this.offColor;return At`
      <g transform="skewX(-8) translate(${t}, ${this.yOffset+2.4}) scale(0.81)">
        <polygon points="2 0 8 0 9 1 8 2 2 2 1 1" fill="${i(0)}" />
        <polygon points="10 2 10 8 9 9 8 8 8 2 9 1" fill="${i(1)}" />
        <polygon points="10 10 10 16 9 17 8 16 8 10 9 9" fill="${i(2)}" />
        <polygon points="8 18 2 18 1 17 2 16 8 16 9 17" fill="${i(3)}" />
        <polygon points="0 16 0 10 1 9 2 10 2 16 1 17" fill="${i(4)}" />
        <polygon points="0 8 0 2 1 1 2 2 2 8 1 9" fill=${i(5)} />
        <polygon points="2 8 8 8 9 9 8 10 2 10 1 9" fill=${i(6)} />
      </g>
      <circle cx="${t+7.4}" cy="${this.yOffset+16}" r="0.89" fill="${i(7)}" />
    `}renderColon(){const{yOffset:t}=this,e=1.5+12.7*Math.round(this.digits/2),i=this.colonValue?this.color:this.offColor;return At`
      <g transform="skewX(-8)"  fill="${i}">
        <circle cx="${e}" cy="${t+5.75}" r="0.89" />
        <circle cx="${e}" cy="${t+13.25}" r="0.89" />
      </g>
    `}renderPins(){const{cols:t,bottomY:e,startX:i}=this.pinPositions;return At`
      <g fill="url(#pin-pattern)" transform="translate(${i}, 0)">
        <rect height="2" width=${2.54*t} />
        <rect height="2" width=${2.54*t} transform="translate(0, ${e})" />
      </g>
    `}render(){const{digits:t,colon:e,pins:i,yOffset:r}=this,n=12.55*t,s="extend"===i?23:19,a=[];for(let e=0;e<t;e++)a.push(this.renderDigit(3.5+12.7*e,8*e));return Pt`
      <svg
        width="${n}mm"
        height="${s}mm"
        version="1.1"
        viewBox="0 0 ${n} ${s}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            ${"extend"===i?At`<rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />`:At`<circle cx="1.27" cy="1" r=0.5 fill="#aaa" />`}
          </pattern>
        </defs>
        <rect x="0" y="${r}" width="${n}" height="19" />
        ${a}<!-- -->
        ${e?this.renderColon():null}<!-- -->
        ${"none"!==i?this.renderPins():null}
      </svg>
    `}};ee([Jt()],ie.prototype,"color",void 0),ee([Jt()],ie.prototype,"offColor",void 0),ee([Jt()],ie.prototype,"background",void 0),ee([Jt({type:Number})],ie.prototype,"digits",void 0),ee([Jt({type:Boolean})],ie.prototype,"colon",void 0),ee([Jt({type:Boolean})],ie.prototype,"colonValue",void 0),ee([Jt()],ie.prototype,"pins",void 0),ee([Jt({type:Array})],ie.prototype,"values",void 0),ie=ee([Qt("wokwi-7segment")],ie);const re=At`
  <pattern id="pins-female" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
    <rect x="0" y="0" width="2.54" height="2.54" fill="#333"></rect>
    <rect x="1.079" y="0.896" width="0.762" height="0.762" style="fill: #191919"></rect>
    <path
      transform="translate(1.079, 1.658) rotate(180 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.25"
    ></path>
    <path
      transform="translate(1.841, 1.658) rotate(90 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.3; fill: #fff"
    ></path>
    <path
      transform="translate(1.841, 0.896)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.15; fill: #fff"
    ></path>
    <path
      transform="translate(1.079, 0.896) rotate(270 0 0)"
      d="m 0 0 v 0.762 l 0.433,0.433 c 0.046,-0.046 0.074,-0.109 0.074,-0.179 v -1.27 c 0,-0.070 -0.028,-0.133 -0.074,-0.179 z"
      style="opacity: 0.35"
    ></path>
  </pattern>
`,ne=t=>({type:"analog",channel:t}),se=(t,e=0)=>({type:"i2c",signal:t,bus:e}),ae=(t,e=0)=>({type:"spi",signal:t,bus:e}),oe=(t,e=0)=>({type:"usart",signal:t,bus:e}),le=t=>({type:"power",signal:"VCC",voltage:t});var ce=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let he=class extends qt{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.pinInfo=[{name:"A5.2",x:87,y:9,signals:[ne(5),se("SCL")]},{name:"A4.2",x:97,y:9,signals:[ne(4),se("SDA")]},{name:"AREF",x:106,y:9,signals:[]},{name:"GND.1",x:115.5,y:9,signals:[{type:"power",signal:"GND"}]},{name:"13",x:125,y:9,signals:[ae("SCK")]},{name:"12",x:134.5,y:9,signals:[ae("MISO")]},{name:"11",x:144,y:9,signals:[ae("MOSI"),{type:"pwm"}]},{name:"10",x:153.5,y:9,signals:[ae("SS"),{type:"pwm"}]},{name:"9",x:163,y:9,signals:[{type:"pwm"}]},{name:"8",x:173,y:9,signals:[]},{name:"7",x:189,y:9,signals:[]},{name:"6",x:198.5,y:9,signals:[{type:"pwm"}]},{name:"5",x:208,y:9,signals:[{type:"pwm"}]},{name:"4",x:217.5,y:9,signals:[]},{name:"3",x:227,y:9,signals:[{type:"pwm"}]},{name:"2",x:236.5,y:9,signals:[]},{name:"1",x:246,y:9,signals:[oe("TX")]},{name:"0",x:255.5,y:9,signals:[oe("RX")]},{name:"IOREF",x:131,y:191.5,signals:[]},{name:"RESET",x:140.5,y:191.5,signals:[]},{name:"3.3V",x:150,y:191.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"5V",x:160,y:191.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"GND.2",x:169.5,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"GND.3",x:179,y:191.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:188.5,y:191.5,signals:[{type:"power",signal:"VCC"}]},{name:"A0",x:208,y:191.5,signals:[ne(0)]},{name:"A1",x:217.5,y:191.5,signals:[ne(1)]},{name:"A2",x:227,y:191.5,signals:[ne(2)]},{name:"A3",x:236.5,y:191.5,signals:[ne(3)]},{name:"A4",x:246,y:191.5,signals:[ne(4),se("SDA")]},{name:"A5",x:255.5,y:191.5,signals:[ne(5),se("SCL")]}]}static get styles(){return et`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }
    `}render(){const{ledPower:t,led13:e,ledRX:i,ledTX:r}=this;return Pt`
      <svg
        width="72.58mm"
        height="53.34mm"
        version="1.1"
        viewBox="-4 0 72.58 53.34"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${re}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <pattern id="mcu-leads" width="2.54" height="0.508" patternUnits="userSpaceOnUse">
          <path
            d="M 0.254,0 C 0.114,0 0,0.114 0,0.254 v 0 c 0,0.139 0,0.253 0,0.253 h 1.523 c 0,0 0,-0.114 0,-0.253 v 0 C 1.523,0.114 1.409,0 1.269,0 Z"
            fill="#ddd"
          />
        </pattern>

        <!-- PCB -->
        <path
          d="m0.999 0a1 1 0 0 0-0.999 0.999v51.34a1 1 0 0 0 0.999 0.999h64.04a1 1 0 0 0 0.999-0.999v-1.54l2.539-2.539v-32.766l-2.539-2.539v-11.43l-1.524-1.523zm14.078 0.835h0.325l0.212 0.041h0l0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.017 0.042 0.097 0.234 0.01 0.023 0.050 0.252 0.013 0.066v0.325l-0.063 0.318-0.040 0.097-0.083 0.202-0 0.001-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.106-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.001-0.083-0.202-0.040-0.097-0.063-0.318v-0.325l0.013-0.066 0.050-0.252 0.01-0.023 0.097-0.234 0.017-0.042 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm50.799 15.239h0.325l0.212 0.042 0.105 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.180 0.270 0.014 0.035 0.110 0.264 0.01 0.051 0.053 0.267v0.325l-0.03 0.152-0.033 0.166-0.037 0.089-0.079 0.191-0 0.020-0.180 0.270-0.229 0.229-0.270 0.180-0.071 0.029-0.228 0.094-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.106-0.021-0.228-0.094-0.071-0.029-0.270-0.180-0.229-0.229-0.180-0.270-0 -0.020-0.079-0.191-0.036-0.089-0.033-0.166-0.030-0.152v-0.325l0.053-0.267 0.010-0.051 0.109-0.264 0.014-0.035 0.180-0.270 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021zm0 27.94h0.325l0.180 0.036 0.138 0.027 0.212 0.087 0.058 0.024 0.029 0.012 0.270 0.180 0.229 0.229 0.180 0.270 0.124 0.300 0.063 0.319v0.325l-0.063 0.318-0.124 0.300-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.021-0.212 0.042h-0.325l-0.212-0.042-0.105-0.021-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.124-0.300-0.063-0.318v-0.325l0.063-0.319 0.124-0.300 0.180-0.270 0.229-0.229 0.270-0.180 0.029-0.012 0.058-0.024 0.212-0.087 0.137-0.027zm-52.07 5.080h0.325l0.212 0.041 0.106 0.021 0.300 0.124 0.270 0.180 0.229 0.229 0.121 0.182 0.058 0.087h0l0.114 0.275 0.01 0.023 0.063 0.318v0.325l-0.035 0.179-0.027 0.139-0.01 0.023-0.114 0.275h-0l-0.180 0.270-0.229 0.229-0.270 0.180-0.300 0.124-0.106 0.020-0.212 0.042h-0.325l-0.212-0.042-0.105-0.020-0.300-0.124-0.270-0.180-0.229-0.229-0.180-0.270-0.114-0.275-0.01-0.023-0.027-0.139-0.036-0.179v-0.325l0.063-0.318 0.01-0.023 0.114-0.275 0.058-0.087 0.121-0.182 0.229-0.229 0.270-0.180 0.300-0.124 0.105-0.021z"
          fill="#2b6b99"
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(17.497 1.27)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.421 1.27)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(26.641 49.53)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.501 49.53)">
          <rect width="${.38+15.24}" height="2.54" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <g>
          <path
            d="m64.932 41.627h-36.72c-0.209 0-0.379-0.170-0.379-0.379v-8.545c0-0.209 0.170-0.379 0.379-0.379h36.72c0.209 0 0.379 0.170 0.379 0.379v8.545c0 0.209-0.169 0.379-0.379 0.379z"
            fill="#292c2d"
          />
          <path
            d="m65.019 40.397c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.025-0.507-0.254v-6.338c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            opacity=".3"
          />
          <path
            d="m65.019 40.016c0 0.279-0.228 0.508-0.508 0.508h-35.879c-0.279 0-0.507 0.448-0.507-0.508v-6.084c0-0.279 0.228-0.508 0.507-0.508h35.879c0.279 0 0.508 0.228 0.508 0.508z"
            fill="#3c4042"
          />
          <rect
            transform="translate(29.205, 32.778)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <rect
            transform="translate(29.205, 41.159) scale(1 -1)"
            fill="url(#mcu-leads)"
            height="0.508"
            width="35.56"
          ></rect>
          <circle cx="33.269" cy="36.847" r="1.016" fill="#252728" />
          <circle cx="59.939" cy="36.847" r="1.016" fill="#252728" />
        </g>

        <!-- Programming Headers -->
        <g transform="translate(14.1 4.4)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <g transform="translate(63 27.2) rotate(270 0 0)">
          <rect width="7" height="4.80" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(57.3, 16.21)">
          <use xlink:href="#led-body" />
          ${t&&At`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="60.88" y="17.5">ON</tspan>
        </text>

        <g transform="translate(26.87,11.69)">
          <use xlink:href="#led-body" />
          ${e&&At`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 16.2)">
          <use xlink:href="#led-body" />
          ${r&&At`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26.9, 18.5)">
          <use xlink:href="#led-body" />
          ${i&&At`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff" style="text-anchor: end">
          <tspan x="26.5" y="13">L</tspan>
          <tspan x="26.5" y="17.5">TX</tspan>
          <tspan x="26.5" y="19.8">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="10.34" width="36.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.48">DIGITAL (PWM ~)</tspan>
        </text>
        <text
          transform="translate(22.6 4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">~11</tspan>
          <tspan x="0" dy="2.54">~10</tspan>
          <tspan x="0" dy="2.54">~9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">~6</tspan>
          <tspan x="0" dy="2.54">~5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">~3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→1</tspan>
          <tspan x="0" dy="2.54">RX←0</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="33.90" y="42.76" width="12.84" height="0.16" fill="#fff"></rect>
        <rect x="49.48" y="42.76" width="14.37" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="41" y="44.96">POWER</tspan>
          <tspan x="53.5" y="44.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(29.19 49) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="4.54">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <path
          style="fill:none;stroke:#fff;stroke-width:1.03"
          d="m 34.21393,12.01079 c -1.66494,-0.13263 -3.06393,1.83547 -2.37559,3.36182 0.66469,1.65332 3.16984,2.10396 4.36378,0.77797 1.15382,-1.13053 1.59956,-2.86476 3.00399,-3.75901 1.43669,-0.9801 3.75169,-0.0547 4.02384,1.68886 0.27358,1.66961 -1.52477,3.29596 -3.15725,2.80101 -1.20337,-0.27199 -2.06928,-1.29866 -2.56193,-2.37788 -0.6046,-1.0328 -1.39499,-2.13327 -2.62797,-2.42367 -0.2191,-0.0497 -0.44434,-0.0693 -0.66887,-0.0691 z"
        />
        <path
          style="fill:none;stroke:#fff;stroke-width:0.56"
          d="m 39.67829,14.37519 h 1.75141 m -0.89321,-0.8757 v 1.7514 m -7.30334,-0.8757 h 2.10166"
        />
        <text x="31" y="20.2" style="font-size:2.8px;font-weight:bold;line-height:1.25;fill:#fff">
          ARDUINO
        </text>

        <rect
          style="fill:none;stroke:#fff;stroke-width:0.1;stroke-dasharray:0.1, 0.1"
          width="11"
          height="5.45"
          x="45.19"
          y="11.83"
          rx="1"
          ry="1"
        />

        <text x="46.5" y="16" style="font-size:5px; line-height:1.25" fill="#fff">UNO</text>
      </svg>
    `}};ce([Jt()],he.prototype,"led13",void 0),ce([Jt()],he.prototype,"ledRX",void 0),ce([Jt()],he.prototype,"ledTX",void 0),ce([Jt()],he.prototype,"ledPower",void 0),he=ce([Qt("wokwi-arduino-uno")],he);const fe=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,14,17,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,30,1,1,14,16,16,15,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,7,1,1,1,1,1,7,0,17,10,31,4,31,4,4,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,30,17,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,6,4,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,17,17,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,21,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,5,7,0,28,4,4,4,0,0,0,0,0,0,0,4,4,4,7,0,0,0,0,0,1,2,4,0,0,0,0,6,6,0,0,0,0,31,16,31,16,8,4,0,0,0,31,16,12,4,2,0,0,0,8,4,6,5,4,0,0,0,4,31,17,16,12,0,0,0,31,4,4,4,31,0,0,0,8,31,12,10,9,0,0,0,2,31,18,10,2,0,0,0,0,14,8,8,31,0,0,0,15,8,15,8,15,0,0,0,0,21,21,16,12,0,0,0,0,31,0,0,0,0,31,16,20,12,4,4,2,0,16,8,4,6,5,4,4,0,4,31,17,17,16,8,4,0,0,31,4,4,4,4,31,0,8,31,8,12,10,9,8,0,2,31,18,18,18,18,9,0,4,31,4,31,4,4,4,0,0,30,18,17,16,8,6,0,2,30,9,8,8,8,4,0,0,31,16,16,16,16,31,0,10,31,10,10,8,4,2,0,0,3,16,19,16,8,7,0,0,31,16,8,4,10,17,0,2,31,18,10,2,2,28,0,0,17,17,18,16,8,6,0,0,30,18,21,24,8,6,0,8,7,4,31,4,4,2,0,0,21,21,21,16,8,4,0,14,0,31,4,4,4,2,0,2,2,2,6,10,2,2,0,4,4,31,4,4,2,1,0,0,14,0,0,0,0,31,0,0,31,16,10,4,10,1,0,4,31,8,4,14,21,4,0,8,8,8,8,8,4,2,0,0,4,8,17,17,17,17,0,1,1,31,1,1,1,30,0,0,31,16,16,16,8,6,0,0,2,5,8,16,16,0,0,4,31,4,4,21,21,4,0,0,31,16,16,10,4,8,0,0,14,0,14,0,14,16,0,0,4,2,1,17,31,16,0,0,16,16,10,4,10,1,0,0,31,2,31,2,2,28,0,2,2,31,18,10,2,2,0,0,14,8,8,8,8,31,0,0,31,16,31,16,16,31,0,14,0,31,16,16,8,4,0,9,9,9,9,8,4,2,0,0,4,5,5,21,21,13,0,0,1,1,17,9,5,3,0,0,31,17,17,17,17,31,0,0,31,17,17,16,8,4,0,0,3,0,16,16,8,7,0,4,9,2,0,0,0,0,0,7,5,7,0,0,0,0,0,0,0,18,21,9,9,22,0,10,0,14,16,30,17,30,0,0,0,14,17,15,17,15,1,0,0,14,1,6,17,14,0,0,0,17,17,17,25,23,1,0,0,30,5,9,17,14,0,0,0,12,18,17,17,15,1,0,0,30,17,17,17,30,16,0,0,28,4,4,5,2,0,0,8,11,8,0,0,0,0,8,0,12,8,8,8,8,8,0,5,2,5,0,0,0,0,0,4,14,5,21,14,4,0,2,2,7,2,7,2,30,0,14,0,13,19,17,17,17,0,10,0,14,17,17,17,14,0,0,0,13,19,17,17,15,1,0,0,22,25,17,17,30,16,0,14,17,31,17,17,14,0,0,0,0,26,21,11,0,0,0,0,14,17,17,10,27,0,10,0,17,17,17,17,25,22,31,1,2,4,2,1,31,0,0,0,31,10,10,10,25,0,31,0,17,10,4,10,17,0,0,0,17,17,17,17,30,16,0,16,15,4,31,4,4,0,0,0,31,2,30,18,17,0,0,0,31,21,31,17,17,0,0,4,0,31,0,4,0,0,0,0,0,0,0,0,0,0,31,31,31,31,31,31,31,31]);var pe=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};const de={green:"#6cb201",blue:"#000eff"};let ue=class extends qt{constructor(){super(...arguments),this.color="black",this.background="green",this.characters=new Uint8Array(32),this.font=fe,this.cursor=!1,this.blink=!1,this.cursorX=0,this.cursorY=0,this.backlight=!0,this.pins="full",this.numCols=16,this.numRows=2}get text(){return Array.from(this.characters).map((t=>String.fromCharCode(t))).join("")}set text(t){this.characters=new Uint8Array(t.split("").map((t=>t.charCodeAt(0))))}static get styles(){return et`
      .cursor-blink {
        animation: cursor-blink;
      }

      @keyframes cursor-blink {
        from {
          opacity: 0;
        }
        25% {
          opacity: 1;
        }
        75% {
          opacity: 1;
        }
        to {
          opacity: 0;
        }
      }
    `}get panelHeight(){return 5.75*this.rows}get pinInfo(){const{panelHeight:t}=this,e=87.5+t*te;return"i2c"===this.pins?[{name:"GND",x:4,y:32,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:4,y:41.5,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"SDA",x:4,y:51,number:3,signals:[se("SDA")]},{name:"SCL",x:4,y:60.5,number:4,signals:[se("SCL")]}]:[{name:"VSS",x:32,y:e,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VDD",x:41.5,y:e,number:2,signals:[{type:"power",signal:"VCC"}]},{name:"V0",x:51.5,y:e,number:3,signals:[]},{name:"RS",x:60.5,y:e,number:4,signals:[]},{name:"RW",x:70.5,y:e,number:5,signals:[]},{name:"E",x:80,y:e,number:6,signals:[]},{name:"D0",x:89.5,y:e,number:7,signals:[]},{name:"D1",x:99.5,y:e,number:8,signals:[]},{name:"D2",x:109,y:e,number:9,signals:[]},{name:"D3",x:118.5,y:e,number:10,signals:[]},{name:"D4",x:128,y:e,number:11,signals:[]},{name:"D5",x:137.5,y:e,number:12,signals:[]},{name:"D6",x:147,y:e,number:13,signals:[]},{name:"D7",x:156.5,y:e,number:14,signals:[]},{name:"A",x:166.5,y:e,number:15,signals:[]},{name:"K",x:176,y:e,number:16,signals:[]}]}get cols(){return this.numCols}get rows(){return this.numRows}path(t){const e=[],{cols:i}=this;for(let r=0;r<t.length;r++){const n=r%i*3.55,s=5.95*Math.floor(r/i);for(let i=0;i<8;i++){const a=this.font[8*t[r]+i];for(let t=0;t<5;t++)if(a&1<<t){const r=(n+.6*t).toFixed(2),a=(s+.7*i).toFixed(2);e.push(`M ${r} ${a}h0.55v0.65h-0.55Z`)}}}return e.join(" ")}renderCursor(){const{cols:t,rows:e,cursor:i,cursorX:r,cursorY:n,blink:s,color:a}=this,o=12.45+3.55*r,l=12.55+5.95*n;if(r<0||r>=t||n<0||n>=e)return null;const c=[];if(s&&c.push(At`
        <rect x="${o}" y="${l}" width="2.95" height="5.55" fill="${a}">
          <animate
            attributeName="opacity"
            values="0;0;0;0;1;1;0;0;0;0"
            dur="1s"
            fill="freeze"
            repeatCount="indefinite"
          />
        </rect>
      `),i){const t=l+.7*7;c.push(At`<rect x="${o}" y="${t}" width="2.95" height="0.65" fill="${a}" />`)}return c}renderI2CPins(){return At`
      <rect x="7.55" y="-2.5" height="2.5" width="10.16" fill="url(#pins)" transform="rotate(90)" />
      <text fill="white" font-size="1.5px" font-family= "monospace">
      <tspan y="6.8" x="0.7" fill="white">1</tspan>
      <tspan y="8.9" x="2.3" fill="white">GND</tspan>
      <tspan y="11.4" x="2.3" fill="white">VCC</tspan>
      <tspan y="14" x="2.3" fill="white">SDA</tspan>
      <tspan y="16.6" x="2.3" fill="white">SCL</tspan>
      </text>
    `}renderPins(t){return At`
      <g transform="translate(0, ${t+21.1})">
        <rect x="7.55" y="1" height="2.5" width="40.64" fill="url(#pins)" />
        <text fill="white" font-size="1.5px" font-family= "monospace">
          <tspan x="6" y="2.7">1</tspan>
          <tspan x="7.2" y="0.7">VSS</tspan>
          <tspan x="9.9" y="0.7">VDD</tspan>
          <tspan x="12.7" y="0.7">V0</tspan>
          <tspan x="15.2" y="0.7">RS</tspan>
          <tspan x="17.8" y="0.7">RW</tspan>
          <tspan x="20.8" y="0.7">E</tspan>
          <tspan x="22.7" y="0.7">D0</tspan>
          <tspan x="25.3" y="0.7">D1</tspan>
          <tspan x="27.9" y="0.7">D2</tspan>
          <tspan x="30.4" y="0.7">D3</tspan>
          <tspan x="33" y="0.7">D4</tspan>
          <tspan x="35.6" y="0.7">D5</tspan>
          <tspan x="38.2" y="0.7">D6</tspan>
          <tspan x="40.8" y="0.7">D7</tspan>
          <tspan x="43.6" y="0.7">A</tspan>
          <tspan x="46.2" y="0.7">K</tspan>
          <tspan x="48" y="2.7">16</tspan>
        </text>
      </g>
    `}render(){const{color:t,characters:e,background:i,pins:r,panelHeight:n,cols:s}=this,a=this.backlight?0:.5,o=3.5125*s,l=o+23.8,c=n+24.5;return Pt`
      <svg
        width="${l}mm"
        height="${c}mm"
        version="1.1"
        viewBox="0 0 ${l} ${c}"
        style="font-size: 1.5px; font-family: monospace"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="characters"
            width="3.55"
            height="5.95"
            patternUnits="userSpaceOnUse"
            x="12.45"
            y="12.55"
          >
            <rect width="2.95" height="5.55" fill-opacity="0.05" />
          </pattern>
          <pattern id="pins" width="2.54" height="3.255" patternUnits="userSpaceOnUse" y="1.1">
            <path
              fill="#92926d"
              d="M0,0.55c0,0 0.21,-0.52 0.87,-0.52 0.67,0 0.81,0.51 0.81,0.51v1.81h-1.869z"
            />
            <circle r="0.45" cx="0.827" cy="0.9" color="black" />
          </pattern>
        </defs>
        <rect width="${l}" height="${c}" fill="#087f45" />
        <rect x="4.95" y="5.7" width="${o+15}" height="${n+13.7}" />
        <rect
          x="7.55"
          y="10.3"
          width="${o+9.8}"
          height="${n+4.5}"
          rx="1.5"
          ry="1.5"
          fill="${i in de?de[i]:de}"
        />
        <rect
          x="7.55"
          y="10.3"
          width="${o+9.8}"
          height="${n+4.5}"
          rx="1.5"
          ry="1.5"
          opacity="${a}"
        />
        ${"i2c"===r?this.renderI2CPins():null}
        ${"full"===r?this.renderPins(n):null}
        <rect
          x="12.45"
          y="12.55"
          width="${o}"
          height="${n}"
          fill="url(#characters)"
        />
        <path d="${this.path(e)}" transform="translate(12.45, 12.55)" fill="${t}" />
        ${this.renderCursor()}
      </svg>
    `}};pe([Jt()],ue.prototype,"color",void 0),pe([Jt()],ue.prototype,"background",void 0),pe([Jt({type:Array})],ue.prototype,"characters",void 0),pe([Jt()],ue.prototype,"font",void 0),pe([Jt()],ue.prototype,"cursor",void 0),pe([Jt()],ue.prototype,"blink",void 0),pe([Jt()],ue.prototype,"cursorX",void 0),pe([Jt()],ue.prototype,"cursorY",void 0),pe([Jt()],ue.prototype,"backlight",void 0),pe([Jt()],ue.prototype,"pins",void 0),pe([Jt()],ue.prototype,"text",null),ue=pe([Qt("wokwi-lcd1602")],ue),new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,6,14,30,14,6,2,0,8,12,14,15,14,12,8,0,18,9,27,0,0,0,0,0,27,18,9,0,0,0,0,0,4,14,31,0,4,14,31,0,31,14,4,0,31,14,4,0,0,14,31,31,31,14,0,0,16,16,20,18,31,2,4,0,4,14,21,4,4,4,4,0,4,4,4,4,21,14,4,0,0,4,8,31,8,4,0,0,0,4,2,31,2,4,0,0,8,4,2,4,8,0,31,0,2,4,8,4,2,0,31,0,0,4,4,14,14,31,0,0,0,31,14,14,4,4,0,0,0,0,0,0,0,0,0,0,4,4,4,4,0,0,4,0,10,10,10,0,0,0,0,0,10,10,31,10,31,10,10,0,4,30,5,14,20,15,4,0,3,19,8,4,2,25,24,0,6,9,5,2,21,9,22,0,6,4,2,0,0,0,0,0,8,4,2,2,2,4,8,0,2,4,8,8,8,4,2,0,0,4,21,14,21,4,0,0,0,4,4,31,4,4,0,0,0,0,0,0,6,4,2,0,0,0,0,31,0,0,0,0,0,0,0,0,0,6,6,0,0,16,8,4,2,1,0,0,14,17,25,21,19,17,14,0,4,6,4,4,4,4,14,0,14,17,16,8,4,2,31,0,31,8,4,8,16,17,14,0,8,12,10,9,31,8,8,0,31,1,15,16,16,17,14,0,12,2,1,15,17,17,14,0,31,17,16,8,4,4,4,0,14,17,17,14,17,17,14,0,14,17,17,30,16,8,6,0,0,6,6,0,6,6,0,0,0,6,6,0,6,4,2,0,8,4,2,1,2,4,8,0,0,0,31,0,31,0,0,0,2,4,8,16,8,4,2,0,14,17,16,8,4,0,4,0,14,17,16,22,21,21,14,0,4,10,17,17,31,17,17,0,15,17,17,15,17,17,15,0,14,17,1,1,1,17,14,0,7,9,17,17,17,9,7,0,31,1,1,15,1,1,31,0,31,1,1,15,1,1,1,0,14,17,1,29,17,17,30,0,17,17,17,31,17,17,17,0,14,4,4,4,4,4,14,0,28,8,8,8,8,9,6,0,17,9,5,3,5,9,17,0,1,1,1,1,1,1,31,0,17,27,21,21,17,17,17,0,17,17,19,21,25,17,17,0,14,17,17,17,17,17,14,0,15,17,17,15,1,1,1,0,14,17,17,17,21,9,22,0,15,17,17,15,5,9,17,0,14,17,1,14,16,17,14,0,31,4,4,4,4,4,4,0,17,17,17,17,17,17,14,0,17,17,17,17,17,10,4,0,17,17,17,21,21,21,10,0,17,17,10,4,10,17,17,0,17,17,17,10,4,4,4,0,31,16,8,4,2,1,31,0,14,2,2,2,2,2,14,0,0,1,2,4,8,16,0,0,14,8,8,8,8,8,14,0,4,10,17,0,0,0,0,0,0,0,0,0,0,0,31,0,2,4,8,0,0,0,0,0,0,0,14,16,30,17,30,0,1,1,13,19,17,17,15,0,0,0,14,1,1,17,14,0,16,16,22,25,17,17,30,0,0,0,14,17,31,1,14,0,12,18,2,7,2,2,2,0,0,0,30,17,30,16,14,0,1,1,13,19,17,17,17,0,4,0,4,6,4,4,14,0,8,0,12,8,8,9,6,0,1,1,9,5,3,5,9,0,6,4,4,4,4,4,14,0,0,0,11,21,21,21,21,0,0,0,13,19,17,17,17,0,0,0,14,17,17,17,14,0,0,0,15,17,15,1,1,0,0,0,22,25,30,16,16,0,0,0,13,19,1,1,1,0,0,0,14,1,14,16,15,0,2,2,7,2,2,18,12,0,0,0,17,17,17,25,22,0,0,0,17,17,17,10,4,0,0,0,17,17,21,21,10,0,0,0,17,10,4,10,17,0,0,0,17,17,30,16,14,0,0,0,31,8,4,2,31,0,8,4,4,2,4,4,8,0,4,4,4,4,4,4,4,0,2,4,4,8,4,4,2,0,0,0,0,22,9,0,0,0,4,10,17,17,17,31,0,0,31,17,1,15,17,17,15,30,20,20,18,17,31,17,17,0,21,21,21,14,21,21,21,0,15,16,16,12,16,16,15,0,17,17,25,21,19,17,17,10,4,17,17,25,21,19,17,0,30,20,20,20,20,21,18,0,31,17,17,17,17,17,17,0,17,17,17,10,4,2,1,0,17,17,17,17,17,31,16,0,17,17,17,30,16,16,16,0,0,21,21,21,21,21,31,0,21,21,21,21,21,31,16,0,3,2,2,14,18,18,14,0,17,17,17,19,21,21,19,0,14,17,20,26,16,17,14,0,0,0,18,21,9,9,22,0,4,12,20,20,4,7,7,0,31,17,1,1,1,1,1,0,0,0,31,10,10,10,25,0,31,1,2,4,2,1,31,0,0,0,30,9,9,9,6,12,20,28,20,20,23,27,24,0,0,16,14,5,4,4,8,0,4,14,14,14,31,4,0,0,14,17,17,31,17,17,14,0,0,14,17,17,17,10,27,0,12,18,4,10,17,17,14,0,0,0,26,21,11,0,0,0,0,10,31,31,31,14,4,0,0,0,14,1,6,17,14,0,14,17,17,17,17,17,17,0,27,27,27,27,27,27,27,0,4,0,0,4,4,4,4,0,4,14,5,5,21,14,4,0,12,2,2,7,2,18,13,0,0,17,14,10,14,17,0,0,17,10,31,4,31,4,4,0,4,4,4,0,4,4,4,0,12,18,4,10,4,9,6,0,8,20,4,31,4,5,2,0,31,17,21,29,21,17,31,0,14,16,30,17,30,0,31,0,0,20,10,5,10,20,0,0,9,21,21,23,21,21,9,0,30,17,17,30,20,18,17,0,31,17,21,17,25,21,31,0,4,2,6,0,0,0,0,6,9,9,9,6,0,0,0,0,4,4,31,4,4,0,31,6,9,4,2,15,0,0,0,7,8,6,8,7,0,0,0,7,9,7,1,9,29,9,24,0,17,17,17,25,23,1,1,0,30,25,25,30,24,24,24,0,0,0,0,6,6,0,0,0,0,0,10,17,21,21,10,2,3,2,2,7,0,0,0,0,14,17,17,17,14,0,31,0,0,5,10,20,10,5,0,17,9,5,10,13,10,30,8,17,9,5,10,21,16,8,28,3,2,3,18,27,20,28,16,0,4,0,4,2,1,17,14,2,4,4,10,17,31,17,17,8,4,4,10,17,31,17,17,4,10,0,14,17,31,17,17,22,9,0,14,17,31,17,17,10,0,4,10,17,31,17,17,4,10,4,14,17,31,17,17,0,28,6,5,29,7,5,29,14,17,1,1,17,14,8,12,2,4,0,31,1,15,1,31,8,4,0,31,1,15,1,31,4,10,0,31,1,15,1,31,0,10,0,31,1,15,1,31,2,4,0,14,4,4,4,14,8,4,0,14,4,4,4,14,4,10,0,14,4,4,4,14,0,10,0,14,4,4,4,14,0,14,18,18,23,18,18,14,22,9,0,17,19,21,25,17,2,4,14,17,17,17,17,14,8,4,14,17,17,17,17,14,4,10,0,14,17,17,17,14,22,9,0,14,17,17,17,14,10,0,14,17,17,17,17,14,0,0,17,10,4,10,17,0,0,14,4,14,21,14,4,14,2,4,17,17,17,17,17,14,8,4,17,17,17,17,17,14,4,10,0,17,17,17,17,14,10,0,17,17,17,17,17,14,8,4,17,10,4,4,4,4,3,2,14,18,18,14,2,7,0,12,18,18,14,18,18,13,2,4,0,14,16,30,17,30,8,4,0,14,16,30,17,30,4,10,0,14,16,30,17,30,22,9,0,14,16,30,17,30,0,10,0,14,16,30,17,30,4,10,4,14,16,30,17,30,0,0,11,20,30,5,21,10,0,0,14,1,17,14,4,6,2,4,0,14,17,31,1,14,8,4,0,14,17,31,1,14,4,10,0,14,17,31,1,14,0,10,0,14,17,31,1,14,2,4,0,4,6,4,4,14,8,4,0,4,6,4,4,14,4,10,0,4,6,4,4,14,0,10,0,4,6,4,4,14,0,5,2,5,8,30,17,14,22,9,0,13,19,17,17,17,2,4,0,14,17,17,17,14,8,4,0,14,17,17,17,14,0,4,10,0,14,17,17,14,0,22,9,0,14,17,17,14,0,10,0,14,17,17,17,14,0,0,4,0,31,0,4,0,0,8,4,14,21,14,4,2,2,4,0,17,17,17,25,22,8,4,0,17,17,17,25,22,4,10,0,17,17,17,25,22,0,10,0,17,17,17,25,22,0,8,4,17,17,30,16,14,0,6,4,12,20,12,4,14,0,10,0,17,17,30,16,14]);var ge=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};const ye={red:"#ff8080",green:"#80ff80",blue:"#8080ff",yellow:"#ffff80",orange:"#ffcf80",white:"#ffffff"};let me=class extends qt{constructor(){super(...arguments),this.value=!1,this.brightness=1,this.color="red",this.lightColor=null,this.label="",this.pinInfo=[{name:"A",x:24,y:42,signals:[],description:"Anode"},{name:"C",x:16,y:42,signals:[],description:"Cathode"}]}static get styles(){return et`
      :host {
        display: inline-block;
      }

      .led-container {
        display: flex;
        flex-direction: column;
        width: 40px;
      }

      .led-label {
        font-size: 10px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -8px;
      }
    `}render(){const{color:t,lightColor:e}=this,i=e||ye[t]||"#ff8080",r=this.brightness?.3+.7*this.brightness:0,n=this.value&&this.brightness>Number.EPSILON;return Pt`
      <div class="led-container">
        <svg
          width="40"
          height="50"
          version="1.2"
          viewBox="-10 -5 35.456 39.618"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="light1" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
          <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation="4" />
          </filter>
          <rect x="3.451" y="19.379" width="2.1514" height="9.8273" fill="#8c8c8c" />
          <path
            d="m12.608 29.618c0-1.1736-0.86844-2.5132-1.8916-3.4024-0.41616-0.3672-1.1995-1.0015-1.1995-1.4249v-5.4706h-2.1614v5.7802c0 1.0584 0.94752 1.8785 1.9462 2.7482 0.44424 0.37584 1.3486 1.2496 1.3486 1.7694"
            fill="#8c8c8c"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            opacity=".3"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="#e6e6e6"
            opacity=".5"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            fill="#d1d1d1"
            opacity=".9"
          />
          <g>
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
              opacity=".7"
            />
            <path
              d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
              opacity=".25"
            />
            <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
          </g>
          <polygon
            points="2.2032 16.107 3.1961 16.107 3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648"
            fill="#666666"
          />
          <polygon
            points="11.215 9.0338 7.4117 13.095 11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241"
            fill="#666666"
          />
          <path
            d="m14.173 13.001v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
            fill="${t}"
            opacity=".65"
          />
          <g fill="#ffffff">
            <path
              d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
              opacity=".5"
            />
            <path
              d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
              opacity=".5"
            />
            <path
              d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
              opacity=".5"
            />
          </g>
          <g class="light" style="display: ${n?"":"none"}">
            <ellipse
              cx="8"
              cy="10"
              rx="10"
              ry="10"
              fill="${i}"
              filter="url(#light2)"
              style="opacity: ${r}"
            ></ellipse>
            <ellipse cx="8" cy="10" rx="2" ry="2" fill="white" filter="url(#light1)"></ellipse>
            <ellipse
              cx="8"
              cy="10"
              rx="3"
              ry="3"
              fill="white"
              filter="url(#light1)"
              style="opacity: ${r}"
            ></ellipse>
          </g>
        </svg>
        <span class="led-label">${this.label}</span>
      </div>
    `}};ge([Jt()],me.prototype,"value",void 0),ge([Jt()],me.prototype,"brightness",void 0),ge([Jt()],me.prototype,"color",void 0),ge([Jt()],me.prototype,"lightColor",void 0),ge([Jt()],me.prototype,"label",void 0),me=ge([Qt("wokwi-led")],me);var xe=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let ve=class extends qt{constructor(){super(...arguments),this.r=0,this.g=0,this.b=0,this.pinInfo=[{name:"VDD",y:3.5,x:0,number:1,signals:[le()]},{name:"DOUT",y:15.5,x:0,number:2,signals:[]},{name:"VSS",y:15.5,x:22,number:3,signals:[{type:"power",signal:"GND"}]},{name:"DIN",y:3.5,x:22,number:4,signals:[{type:"power",signal:"GND"}]}]}render(){const{r:t,g:e,b:i}=this,r=t=>t>.001?.7+.3*t:0,n=Math.max(t,e,i),s=Math.min(t,e,i),a=n-s,o=Math.max(1,2-20*a),l=.1+Math.max(2*n-5*a,0),c=t=>n?Math.floor(255*Math.min((t=>t>.005?.1+.9*t:0)(t/n)*o,1)):255,h=`rgb(${c(t)}, ${c(e)}, ${c(i)})`,f=242-(n>.1&&a<.2?Math.floor(50*n*(1-a/.2)):0),p=`rgb(${f}, ${f}, ${f})`;return Pt`
      <svg
        width="5.6631mm"
        height="5mm"
        version="1.1"
        viewBox="0 0 5.6631 5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="light1" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="${Math.max(.1,n)}" />
        </filter>
        <filter id="light2" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
        <rect x=".33308" y="0" width="5" height="5" fill="${p}" />
        <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
        <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
        <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
        <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
        <g fill="#bfbfbf">
          <path
            d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
          />
          <path
            d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
          />
          <path
            d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
          />
          <path
            d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
          />
        </g>
        <path
          d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
          fill="#666"
        />
        <ellipse
          cx="2.5"
          cy="2.3"
          rx="0.3"
          ry="0.3"
          fill="red"
          opacity=${r(t)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.5"
          cy="3.2"
          rx="0.3"
          ry="0.3"
          fill="green"
          opacity=${r(e)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3.3"
          cy="1.45"
          rx="0.3"
          ry="0.3"
          fill="blue"
          opacity=${r(i)}
          filter="url(#light1)"
        ></ellipse>
        <ellipse
          cx="3"
          cy="2.5"
          rx="2.2"
          ry="2.2"
          opacity="${d=n,d>.005?l+d*(1-l):0}"
          fill="${h}"
          filter="url(#light2)"
        ></ellipse>
      </svg>
    `;var d}};xe([Jt()],ve.prototype,"r",void 0),xe([Jt()],ve.prototype,"g",void 0),xe([Jt()],ve.prototype,"b",void 0),ve=xe([Qt("wokwi-neopixel")],ve);const we=[" ","Spacebar"];var be=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let ke=class extends qt{constructor(){super(...arguments),this.color="red",this.pressed=!1,this.label="",this.pinInfo=[{name:"1.l",x:2,y:9,signals:[]},{name:"2.l",x:2,y:36,signals:[]},{name:"1.r",x:65,y:9,signals:[]},{name:"2.r",x:65,y:36,signals:[]}]}static get styles(){return et`
      :host {
        display: inline-flex;
        flex-direction: column;
      }

      button {
        border: none;
        background: none;
        padding: 0;
        margin: 0;
        text-decoration: none;
        -webkit-appearance: none;
        -moz-appearance: none;
      }

      button:active .button-circle {
        fill: url(#grad-down);
      }

      .clickable-element {
        cursor: pointer;
      }

      .label {
        width: 0;
        min-width: 100%;
        font-size: 12px;
        text-align: center;
        color: gray;
        position: relative;
        line-height: 1;
        top: -2px;
      }
    `}render(){const{color:t,label:e}=this,i=this.pressed?"url(#grad-down)":"url(#grad-up)";return Pt`
      <button
        aria-label="${e} ${t} pushbutton"
        @mousedown=${this.down}
        @mouseup=${t=>!t.ctrlKey&&this.up()}
        @touchstart=${this.down}
        @touchend=${this.up}
        @keydown=${t=>we.includes(t.key)&&this.down()}
        @keyup=${t=>we.includes(t.key)&&!t.ctrlKey&&this.up()}
      >
        <svg
          width="18mm"
          height="12mm"
          version="1.1"
          viewBox="-3 0 18 12"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <linearGradient id="grad-up" x1="0" x2="1" y1="0" y2="1">
              <stop stop-color="#ffffff" offset="0" />
              <stop stop-color="${t}" offset="0.3" />
              <stop stop-color="${t}" offset="0.5" />
              <stop offset="1" />
            </linearGradient>
            <linearGradient
              id="grad-down"
              xlink:href="#grad-up"
              gradientTransform="rotate(180,0.5,0.5)"
            ></linearGradient>
          </defs>
          <rect x="0" y="0" width="12" height="12" rx=".44" ry=".44" fill="#464646" />
          <rect x=".75" y=".75" width="10.5" height="10.5" rx=".211" ry=".211" fill="#eaeaea" />
          <g fill="#1b1b1">
            <circle cx="1.767" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="1.7916" r=".37" />
            <circle cx="10.161" cy="10.197" r=".37" />
            <circle cx="1.767" cy="10.197" r=".37" />
          </g>
          <g fill="#eaeaea">
            <path
              d="m-0.3538 1.4672c-0.058299 0-0.10523 0.0469-0.10523 0.10522v0.38698h-2.1504c-0.1166 0-0.21045 0.0938-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21045 0.21045 0.21045h2.1504v0.40101c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m-0.35376 8.6067c-0.058299 0-0.10523 0.0469-0.10523 0.10523v0.38697h-2.1504c-0.1166 0-0.21045 0.0939-0.21045 0.21045v0.50721c0 0.1166 0.093855 0.21046 0.21045 0.21046h2.1504v0.401c0 0.0583 0.046928 0.10528 0.10523 0.10528h0.35723v-1.9266z"
            />
            <path
              d="m12.354 1.4672c0.0583 0 0.10522 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09385 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
            <path
              d="m12.354 8.6067c0.0583 0 0.10523 0.0469 0.10523 0.10522v0.38698h2.1504c0.1166 0 0.21045 0.0938 0.21045 0.21045v0.50721c0 0.1166-0.09386 0.21045-0.21045 0.21045h-2.1504v0.40101c0 0.0583-0.04693 0.10528-0.10523 0.10528h-0.35723v-1.9266z"
            />
          </g>
          <g class="clickable-element">
            <circle class="button-circle" cx="6" cy="6" r="3.822" fill="${i}" />
            <circle
              cx="6"
              cy="6"
              r="2.9"
              fill="${t}"
              stroke="#2f2f2f"
              stroke-opacity=".47"
              stroke-width=".08"
            />
          </g>
        </svg>
      </button>
      <span class="label">${this.label}</span>
    `}down(){this.pressed||(this.pressed=!0,this.dispatchEvent(new Event("button-press")))}up(){this.pressed&&(this.pressed=!1,this.dispatchEvent(new Event("button-release")))}};be([Jt()],ke.prototype,"color",void 0),be([Jt()],ke.prototype,"pressed",void 0),be([Jt()],ke.prototype,"label",void 0),ke=be([Qt("wokwi-pushbutton")],ke);var Ce=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};const ze={[-2]:"#C3C7C0",[-1]:"#F1D863",0:"#000000",1:"#8F4814",2:"#FB0000",3:"#FC9700",4:"#FCF800",5:"#00B800",6:"#0000FF",7:"#A803D6",8:"#808080",9:"#FCFCFC"};let Se=class extends qt{constructor(){super(...arguments),this.value="1000",this.pinInfo=[{name:"1",x:0,y:9,signals:[]},{name:"2",x:59,y:9,signals:[]}]}breakValue(t){const e=t>=1e10?9:t>=1e9?8:t>=1e8?7:t>=1e7?6:t>=1e6?5:t>=1e5?4:t>=1e4?3:t>=1e3?2:t>=100?1:t>=10?0:t>=1?-1:-2,i=Math.round(t/10**e);return 0===t?[0,0]:[Math.round(i%100),e]}render(){const{value:t}=this,e=parseFloat(t),[i,r]=this.breakValue(e),n=ze[Math.floor(i/10)];return Pt`
      <svg
        width="15.645mm"
        height="3mm"
        version="1.1"
        viewBox="0 0 15.645 3"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x2="0"
            y1="22.332"
            y2="38.348"
            gradientTransform="matrix(.14479 0 0 .14479 -23.155 -4.0573)"
            gradientUnits="userSpaceOnUse"
            spreadMethod="reflect"
          >
            <stop stop-color="#323232" offset="0" />
            <stop stop-color="#fff" stop-opacity=".42268" offset="1" />
          </linearGradient>
        </defs>
        <rect y="1.1759" width="15.645" height=".63826" fill="#eaeaea" />
        <g stroke-width=".14479" fill="#d5b597">
          <path
            id="body"
            d="m4.6918 0c-1.0586 0-1.9185 0.67468-1.9185 1.5022 0 0.82756 0.85995 1.4978 1.9185 1.4978 0.4241 0 0.81356-0.11167 1.1312-0.29411h4.0949c0.31802 0.18313 0.71075 0.29411 1.1357 0.29411 1.0586 0 1.9185-0.67015 1.9185-1.4978 0-0.8276-0.85995-1.5022-1.9185-1.5022-0.42499 0-0.81773 0.11098-1.1357 0.29411h-4.0949c-0.31765-0.18244-0.7071-0.29411-1.1312-0.29411z"
          />
          <use xlink:href="#body" fill="url(#a)" opacity=".44886" />
          <rect x="4" y="0" width="1" height="3" fill="${n}" clip-path="url(#g)" />

          <path d="m6 0.29411v2.4117h0.96v-2.4117z" fill="${ze[i%10]}" />
          <path d="m7.8 0.29411v2.4117h0.96v-2.4117z" fill="${ze[r]}" />

          <rect x="10.69" y="0" width="1" height="3" fill="#F1D863" clip-path="url(#g)" />
          <clippath id="g">
            <use xlink:href="#body" />
          </clippath>
        </g>
      </svg>
    `}};Ce([Jt()],Se.prototype,"value",void 0),Se=Ce([Qt("wokwi-resistor")],Se);var Oe=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};const Ee=[10.7,25,39.3,53.6],Re=[7,22,37,52];let Pe=class extends qt{constructor(){super(...arguments),this.columns="4",this.connector=!1,this.keys=["1","2","3","A","4","5","6","B","7","8","9","C","*","0","#","D"],this.pressedKeys=new Set}get pinInfo(){return"3"===this.columns?[{name:"R1",x:76.5,y:338,signals:[]},{name:"R2",x:86,y:338,signals:[]},{name:"R3",x:95.75,y:338,signals:[]},{name:"R4",x:105.25,y:338,signals:[]},{name:"C1",x:115,y:338,signals:[]},{name:"C2",x:124.5,y:338,signals:[]},{name:"C3",x:134,y:338,signals:[]}]:[{name:"R1",x:100,y:338,signals:[]},{name:"R2",x:110,y:338,signals:[]},{name:"R3",x:119.5,y:338,signals:[]},{name:"R4",x:129,y:338,signals:[]},{name:"C1",x:138.5,y:338,signals:[]},{name:"C2",x:148,y:338,signals:[]},{name:"C3",x:157.75,y:338,signals:[]},{name:"C4",x:167.5,y:338,signals:[]}]}renderKey(t,e){var i;const r=null!==(i=this.keys[4*t+e])&&void 0!==i?i:"",n=function(t){return!isNaN(parseFloat(t))}(r)?"blue-key":"red-key",s=r.toUpperCase();return At`<g
      transform="translate(${Re[e]} ${Ee[t]})"
      tabindex="0"
      class=${n}
      data-key-name=${s}
      @blur=${t=>{this.up(r,t.currentTarget)}}
      @mousedown=${()=>this.down(r)}
      @mouseup=${()=>this.up(r)}
      @touchstart=${()=>this.down(r)}
      @touchend=${()=>this.up(r)}
      @keydown=${t=>we.includes(t.key)&&this.down(r,t.currentTarget)}
      @keyup=${t=>we.includes(t.key)&&this.up(r,t.currentTarget)}
    >
      <use xlink:href="#key" />
      <text x="5.6" y="8.1">${r}</text>
    </g>`}render(){const{connector:t}=this,e="4"===this.columns,i=e?70.336:55.336,r=e?20.32:17.78,n=76+(t?15:0);return Pt`
      <style>
        text {
          fill: #dfe2e5;
          user-select: none;
        }

        g[tabindex] {
          cursor: pointer;
        }

        g[tabindex]:focus,
        g[tabindex]:active {
          stroke: white;
          outline: none;
        }

        .blue-key:focus,
        .red-key:focus {
          filter: url(#shadow);
        }

        .blue-key:active,
        .blue-key.pressed {
          fill: #4e50d7;
        }

        .red-key:active,
        .red-key.pressed {
          fill: #ab040b;
        }

        g[tabindex]:focus text {
          stroke: none;
        }

        g[tabindex]:active text,
        .blue-key.pressed text,
        .red-key.pressed text {
          fill: white;
          stroke: none;
        }
      </style>

      <svg
        width="${i}mm"
        height="${n}mm"
        version="1.1"
        viewBox="0 0 ${i} ${n}"
        font-family="sans-serif"
        font-size="8.2px"
        text-anchor="middle"
        xmlns="http://www.w3.org/2000/svg"
        @keydown=${t=>this.keyStrokeDown(t.key)}
        @keyup=${t=>this.keyStrokeUp(t.key)}
      >
        <defs>
          <rect
            id="key"
            width="11.2"
            height="11"
            rx="1.4"
            ry="1.4"
            stroke="#b1b5b9"
            stroke-width=".75"
          />
          <pattern id="wires" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect width="2.54" height="8" fill="#eee" />
            <rect x="0.77" width="1" height="6" fill="#d9d5bc" />
            <circle cx="1.27" cy="6" r="0.75" fill="#d9d5bc" />
            <rect x="0.52" y="6" width="1.5" height="2" fill="#d9d5bc" />
          </pattern>
          <pattern id="wires-marks" width="2.54" height="8" patternUnits="userSpaceOnUse">
            <rect x="0.52" y="6" width="1.5" height="2" fill="#746d41" />
          </pattern>
          ${re}
          <filter id="shadow">
            <feDropShadow dx="0" dy="0" stdDeviation="0.5" flood-color="#ffff99" />
          </filter>
        </defs>

        <!-- Keypad outline -->
        <rect x="0" y="0" width="${i}" height="76" rx="5" ry="5" fill="#454449" />
        <rect
          x="2.78"
          y="3.25"
          width="${e?65:50}"
          height="68.6"
          rx="3.5"
          ry="3.5"
          fill="none"
          stroke="#b1b5b9"
          stroke-width="1"
        />

        <!-- Connector -->
        ${t?At`
            <g transform="translate(${(i-r)/2}, 76)">
              <rect width="${r}" height="8" fill="url(#wires)" />
              <rect width="10.16" height="8" fill="url(#wires-marks)" />
              <rect y="8" width="${r}" height="7" fill="#333" />
              <rect transform="translate(0, 12)" width="${r}" height="2.54" fill="url(#pins-female)" />
            </g>
          `:null}

        <!-- Blue keys -->
        <g fill="#4e90d7">
          <g>${this.renderKey(0,0)}</g>
          <g>${this.renderKey(0,1)}</g>
          <g>${this.renderKey(0,2)}</g>
          <g>${this.renderKey(1,0)}</g>
          <g>${this.renderKey(1,1)}</g>
          <g>${this.renderKey(1,2)}</g>
          <g>${this.renderKey(2,0)}</g>
          <g>${this.renderKey(2,1)}</g>
          <g>${this.renderKey(2,2)}</g>
          <g>${this.renderKey(3,1)}</g>
        </g>

        <!-- Red keys -->
        <g fill="#e94541">
          <g>${this.renderKey(3,0)}</g>
          <g>${this.renderKey(3,2)}</g>
          ${e&&At`
              <g>${this.renderKey(0,3)}</g>
              <g>${this.renderKey(1,3)}</g>
              <g>${this.renderKey(2,3)}</g>
              <g>${this.renderKey(3,3)}</g>
          `}
        </g>
      </svg>
    `}keyIndex(t){const e=this.keys.indexOf(t);return{row:Math.floor(e/4),column:e%4}}down(t,e){this.pressedKeys.has(t)||(e&&e.classList.add("pressed"),this.pressedKeys.add(t),this.dispatchEvent(new CustomEvent("button-press",{detail:Object.assign({key:t},this.keyIndex(t))})))}up(t,e){this.pressedKeys.has(t)&&(e&&e.classList.remove("pressed"),this.pressedKeys.delete(t),this.dispatchEvent(new CustomEvent("button-release",{detail:Object.assign({key:t},this.keyIndex(t))})))}keyStrokeDown(t){var e;const i=t.toUpperCase(),r=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`[data-key-name="${i}"]`);r&&this.down(i,r)}keyStrokeUp(t){var e,i;const r=t.toUpperCase(),n=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector(`[data-key-name="${r}"]`),s=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelectorAll(".pressed");"Shift"===t&&(null==s||s.forEach((t=>{const e=t.dataset.keyName;e&&this.up(e,t)}))),n&&this.up(r,n)}};Oe([Jt()],Pe.prototype,"columns",void 0),Oe([Jt()],Pe.prototype,"connector",void 0),Oe([Jt({type:Array})],Pe.prototype,"keys",void 0),Pe=Oe([Qt("wokwi-membrane-keypad")],Pe);const Ae=t=>(...e)=>({_$litDirective$:t,values:e});class Ie{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const De=Ae(class extends Ie{constructor(t){var e;if(super(t),1!==t.type||"style"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce(((e,i)=>{const r=t[i];return null==r?e:e+`${i=i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`}),"")}update(t,[e]){const{style:i}=t.element;if(void 0===this.ut){this.ut=new Set;for(const t in e)this.ut.add(t);return this.render(e)}this.ut.forEach((t=>{null==e[t]&&(this.ut.delete(t),t.includes("-")?i.removeProperty(t):i[t]="")}));for(const t in e){const r=e[t];null!=r&&(this.ut.add(t),t.includes("-")?i.setProperty(t,r):i[t]=r)}return It}}),$e=(t,e,i)=>{const r=Math.min(i,e);return Math.max(r,t)};var Me=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Be=class extends qt{constructor(){super(...arguments),this.min=0,this.max=100,this.value=0,this.step=1,this.startDegree=-135,this.endDegree=135,this.center={x:0,y:0},this.pressed=!1,this.pinInfo=[{name:"GND",x:29,y:68.5,number:1,signals:[{type:"power",signal:"GND"}]},{name:"SIG",x:37,y:68.5,number:2,signals:[ne(0)]},{name:"VCC",x:44.75,y:68.5,number:3,signals:[{type:"power",signal:"VCC"}]}]}static get styles(){return et`
      #rotating {
        transform-origin: 10px 8px;
        transform: rotate(var(--knob-angle, 0deg));
      }

      svg text {
        font-size: 1px;
        line-height: 1.25;
        letter-spacing: 0px;
        word-spacing: 0px;
        fill: #ffffff;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #knob {
        stroke: #ccdae3;
        filter: url(#outline);
      }
    `}mapToMinMax(t,e,i){return t*(i-e)+e}percentFromMinMax(t,e,i){return(t-e)/(i-e)}render(){const t=$e(0,1,this.percentFromMinMax(this.value,this.min,this.max)),e=(this.endDegree-this.startDegree)*t+this.startDegree;return Pt`
      <input
        tabindex="0"
        type="range"
        class="hide-input"
        max="${this.max}"
        min="${this.min}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        @input="${this.onValueChange}"
      />
      <svg
        role="slider"
        width="20mm"
        height="20mm"
        version="1.1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        @click="${this.focusInput}"
        @mousedown=${this.down}
        @mousemove=${this.move}
        @mouseup=${this.up}
        @touchstart=${this.down}
        @touchmove=${this.move}
        @touchend=${this.up}
        style=${De({"--knob-angle":e+"deg"})}
      >
        <defs>
          <filter id="outline">
            <feDropShadow id="glow" dx="0" dy="0" stdDeviation="0.5" flood-color="cyan" />
          </filter>
        </defs>
        <rect
          x=".15"
          y=".15"
          width="19.5"
          height="19.5"
          ry="1.23"
          fill="#045881"
          stroke="#045881"
          stroke-width=".30"
        />
        <rect x="5.4" y=".70" width="9.1" height="1.9" fill="#ccdae3" stroke-width=".15" />
        <ellipse
          id="knob"
          cx="9.91"
          cy="8.18"
          rx="7.27"
          ry="7.43"
          fill="#e4e8eb"
          stroke-width=".15"
        />
        <rect
          x="6.6"
          y="17"
          width="6.5"
          height="2"
          fill-opacity="0"
          stroke="#fff"
          stroke-width=".30"
        />
        <g stroke-width=".15">
          <text x="6.21" y="16.6">GND</text>
          <text x="8.75" y="16.63">SIG</text>
          <text x="11.25" y="16.59">VCC</text>
        </g>
        <g fill="#fff" stroke-width=".15">
          <ellipse cx="1.68" cy="1.81" rx=".99" ry=".96" />
          <ellipse cx="1.48" cy="18.37" rx=".99" ry=".96" />
          <ellipse cx="17.97" cy="18.47" rx=".99" ry=".96" />
          <ellipse cx="18.07" cy="1.91" rx=".99" ry=".96" />
        </g>
        <g fill="#b3b1b0" stroke-width=".15">
          <ellipse cx="7.68" cy="18" rx=".61" ry=".63" />
          <ellipse cx="9.75" cy="18" rx=".61" ry=".63" />
          <ellipse cx="11.87" cy="18" rx=".61" ry=".63" />
        </g>
        <ellipse cx="9.95" cy="8.06" rx="6.60" ry="6.58" fill="#c3c2c3" stroke-width=".15" />
        <rect id="rotating" x="10" y="2" width=".42" height="3.1" stroke-width=".15" />
      </svg>
    `}focusInput(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".hide-input");null==e||e.focus()}onValueChange(t){const e=t.target;this.updateValue(parseFloat(e.value))}down(t){(0===t.button||window.navigator.maxTouchPoints)&&(this.pressed=!0,this.updatePotentiometerPosition(t))}move(t){const{pressed:e}=this;e&&this.rotateHandler(t)}up(){this.pressed=!1}updatePotentiometerPosition(t){var e,i;t.stopPropagation(),t.preventDefault();const r=null===(i=null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#knob"))||void 0===i?void 0:i.getBoundingClientRect();r&&(this.center={x:window.scrollX+r.left+r.width/2,y:window.scrollY+r.top+r.height/2})}rotateHandler(t){t.stopPropagation(),t.preventDefault();const e="touchmove"===t.type,i=e?t.touches[0].pageX:t.pageX,r=e?t.touches[0].pageY:t.pageY,n=this.center.x-i,s=this.center.y-r;let a=Math.round(180*Math.atan2(s,n)/Math.PI);a<0&&(a+=360),a-=90,n>0&&s<=0&&(a-=360),a=$e(this.startDegree,this.endDegree,a);const o=this.percentFromMinMax(a,this.startDegree,this.endDegree),l=this.mapToMinMax(o,this.min,this.max);this.updateValue(l)}updateValue(t){const e=$e(this.min,this.max,t),i=Math.round(e/this.step)*this.step;this.value=Math.round(100*i)/100,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}};Me([Jt()],Be.prototype,"min",void 0),Me([Jt()],Be.prototype,"max",void 0),Me([Jt()],Be.prototype,"value",void 0),Me([Jt()],Be.prototype,"step",void 0),Me([Jt()],Be.prototype,"startDegree",void 0),Me([Jt()],Be.prototype,"endDegree",void 0),Be=Me([Qt("wokwi-potentiometer")],Be);var Te=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};const Ue=5.66;let _e=class extends qt{constructor(){super(...arguments),this.rows=8,this.cols=8,this.rowSpacing=1,this.colSpacing=1,this.blurLight=!1,this.animation=!1,this.pixelElements=null,this.animationFrame=null,this.animateStep=()=>{const t=(new Date).getTime(),{rows:e,cols:i}=this,r=t=>t%2e3>1e3?1-t%1e3/1e3:t%1e3/1e3;for(let n=0;n<e;n++)for(let s=0;s<i;s++){const a=Math.sqrt((n-e/2+.5)**2+(s-i/2+.5)**2);this.setPixel(n,s,{r:r(100*a+t),g:r(100*a+t+200),b:r(100*a+t+400)})}this.animationFrame=requestAnimationFrame(this.animateStep)}}get pinInfo(){const{cols:t,rows:e,rowSpacing:i,colSpacing:r}=this,n=9.6012,s=t*(r+Ue)/2*te,a=e*(i+5)*te;return[{name:"GND",x:s-1.5*n,y:a,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:s-.5*n,y:a,signals:[le()]},{name:"DIN",x:s+.5*n,y:a,signals:[]},{name:"DOUT",x:s+1.5*n,y:a,signals:[]}]}static get styles(){return et`
      :host {
        display: flex;
      }
    `}getPixelElements(){return this.shadowRoot?(this.pixelElements||(this.pixelElements=Array.from(this.shadowRoot.querySelectorAll("g.pixel")).map((t=>Array.from(t.querySelectorAll("ellipse"))))),this.pixelElements):null}reset(){const t=this.getPixelElements();if(t)for(const[e,i,r,n]of t)e.style.opacity="0",i.style.opacity="0",r.style.opacity="0",n.style.opacity="0"}setPixel(t,e,i){const r=this.getPixelElements();if(t<0||e<0||t>=this.rows||e>=this.cols||!r)return null;const{r:n,g:s,b:a}=i,o=t=>t>.001?.7+.3*t:0,l=Math.max(n,s,a),c=Math.min(n,s,a),h=l-c,f=Math.max(1,2-20*h),p=.1+Math.max(2*l-5*h,0),d=t=>l?Math.floor(255*Math.min((t=>t>.005?.1+.9*t:0)(t/l)*f,1)):255,u=`rgb(${d(n)}, ${d(s)}, ${d(a)})`,g=r[t*this.cols+e],[y,m,x,v]=g;var w;y.style.opacity=o(n).toFixed(2),m.style.opacity=o(s).toFixed(2),x.style.opacity=o(a).toFixed(2),v.style.opacity=(w=l,w>.005?p+w*(1-p):0).toFixed(2),v.style.fill=u}updated(){this.animation&&!this.animationFrame?this.animationFrame=requestAnimationFrame(this.animateStep):!this.animation&&this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}renderPixels(){const t=[],{cols:e,rows:i,colSpacing:r,rowSpacing:n}=this,s=Ue+r,a=5+n;for(let r=0;r<i;r++)for(let i=0;i<e;i++)t.push(At`
        <g transform="translate(${s*i}, ${a*r})" class="pixel">
          <ellipse cx="2.5" cy="2.3" rx="0.3" ry="0.3" fill="red" opacity="0" />
          <ellipse cx="3.5" cy="3.2" rx="0.3" ry="0.3" fill="green" opacity="0" />
          <ellipse cx="3.3" cy="1.45" rx="0.3" ry="0.3" fill="blue" opacity="0" />
          <ellipse cx="3" cy="2.5" rx="2.2" ry="2.2" opacity="0" />
        </g>`);return this.pixelElements=null,t}render(){const{cols:t,rows:e,rowSpacing:i,colSpacing:r,blurLight:n}=this,s=Ue*t+r*(t-1),a=5*e+i*(e-1);return Pt`
      <svg
        width="${s}mm"
        height="${a}mm"
        version="1.1"
        viewBox="0 0 ${s} ${a}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="blurLight" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.3" />
        </filter>

        <pattern id="pixel" width="${Ue+r}" height="${5+i}" patternUnits="userSpaceOnUse">
          <rect x=".33308" y="0" width="5" height="5" fill="#fff" />
          <rect x=".016709" y=".4279" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="0" y="3.6518" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y="3.6351" width=".35114" height=".9" fill="#eaeaea" />
          <rect x="5.312" y=".3945" width=".35114" height=".9" fill="#eaeaea" />
          <circle cx="2.8331" cy="2.5" r="2.1" fill="#ddd" />
          <circle cx="2.8331" cy="2.5" r="1.7325" fill="#e6e6e6" />
          <g fill="#bfbfbf">
            <path
              d="m4.3488 3.3308s-0.0889-0.087-0.0889-0.1341c0-0.047-6e-3 -1.1533-6e-3 -1.1533s-0.0591-0.1772-0.2008-0.1772c-0.14174 0-0.81501 0.012-0.81501 0.012s-0.24805 0.024-0.23624 0.3071c0.0118 0.2835 0.032 2.0345 0.032 2.0345 0.54707-0.046 1.0487-0.3494 1.3146-0.8888z"
            />
            <path
              d="m4.34 1.6405h-1.0805s-0.24325 0.019-0.26204-0.2423l6e-3 -0.6241c0.57782 0.075 1.0332 0.3696 1.3366 0.8706z"
            />
            <path
              d="m2.7778 2.6103-0.17127 0.124-0.8091-0.012c-0.17122-0.019-0.17062-0.2078-0.17062-0.2078-1e-3 -0.3746 1e-3 -0.2831-9e-3 -0.8122l-0.31248-0.018s0.43453-0.9216 1.4786-0.9174c-1.1e-4 0.6144-4e-3 1.2289-6e-3 1.8434z"
            />
            <path
              d="m2.7808 3.0828-0.0915-0.095h-0.96857l-0.0915 0.1447-3e-3 0.1127c0 0.065-0.12108 0.08-0.12108 0.08h-0.20909c0.55906 0.9376 1.4867 0.9155 1.4867 0.9155 1e-3 -0.3845-2e-3 -0.7692-2e-3 -1.1537z"
            />
          </g>
          <path
            d="m4.053 1.8619c-0.14174 0-0.81494 0.013-0.81494 0.013s-0.24797 0.024-0.23616 0.3084c3e-3 0.077 5e-3 0.3235 9e-3 0.5514h1.247c-2e-3 -0.33-4e-3 -0.6942-4e-3 -0.6942s-0.0593-0.1781-0.20102-0.1781z"
            fill="#666"
          />
        </pattern>
        <rect width="${s}" height="${a}" fill="url(#pixel)"></rect>
        <g style="${n?"filter: url(#blurLight)":""}">${this.renderPixels()}</g>
      </svg>
    `}};Te([Jt()],_e.prototype,"rows",void 0),Te([Jt()],_e.prototype,"cols",void 0),Te([Jt({attribute:"rowspacing"})],_e.prototype,"rowSpacing",void 0),Te([Jt({attribute:"colspacing"})],_e.prototype,"colSpacing",void 0),Te([Jt()],_e.prototype,"blurLight",void 0),Te([Jt()],_e.prototype,"animation",void 0),_e=Te([Qt("wokwi-neopixel-matrix")],_e);var je=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Fe=class extends qt{constructor(){super(),this.width=150,this.height=116,this.screenWidth=128,this.screenHeight=64,this.canvas=void 0,this.ctx=null,this.pinInfo=[{name:"DATA",x:36.5,y:12.5,signals:[se("SDA")]},{name:"CLK",x:45.5,y:12.5,signals:[se("SCL")]},{name:"DC",x:54.5,y:12.5,signals:[]},{name:"RST",x:64.5,y:12.5,signals:[]},{name:"CS",x:74.5,y:12.5,signals:[]},{name:"3V3",x:83.5,y:12.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"VIN",x:93.5,y:12.5,signals:[{type:"power",signal:"VCC"}]},{name:"GND",x:103.5,y:12,signals:[{type:"power",signal:"GND"}]}],this.imageData=new ImageData(this.screenWidth,this.screenHeight)}static get styles(){return et`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 11.5px;
        top: 27px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `}redraw(){var t;null===(t=this.ctx)||void 0===t||t.putImageData(this.imageData,0,0)}initContext(){var t,e;this.canvas=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("canvas"),this.ctx=null===(e=this.canvas)||void 0===e?void 0:e.getContext("2d")}firstUpdated(){var t;this.initContext(),null===(t=this.ctx)||void 0===t||t.putImageData(this.imageData,0,0)}updated(){this.imageData&&this.redraw()}render(){const{width:t,height:e,screenWidth:i,screenHeight:r}=this;return Pt` <div class="container">
      <svg width="${t}" height="${e}" xmlns="http://www.w3.org/2000/svg">
        <rect stroke="#BE9B72" fill="#025CAF" x=".5" y=".5" width="148" height="114" rx="13" />

        <g transform="translate(6 6)" fill="#59340A" stroke="#BE9B72" stroke-width="0.6px">
          <circle cx="130" cy="6" r="5.5" />
          <circle cx="6" cy="6" r="5.5" />
          <circle cx="130" cy="96" r="5.5" />
          <circle cx="6" cy="96" r="5.5" />
        </g>

        <!-- 128 x 64 screen -->
        <rect x="11.4" y="26" fill="#1A1A1A" width="${i}" height="${r}" />

        <!-- All texts -->
        <text
          fill="#FFF"
          text-anchor="middle"
          font-size="5"
          font-weight="300"
          font-family="monospace"
        >
          <tspan x="37" y="8">Data</tspan>
          <tspan x="56" y="8">SA0</tspan>
          <tspan x="78" y="8">CS</tspan>
          <tspan x="97" y="8">Vin</tspan>
          <tspan x="41" y="23">C1k</tspan>
          <tspan x="53" y="23">DC</tspan>
          <tspan x="64" y="23">Rst</tspan>
          <tspan x="80" y="23">3v3</tspan>
          <tspan x="99" y="23">Gnd</tspan>
        </text>

        <!-- Star -->
        <path
          fill="#FFF"
          d="M115.5 10.06l-1.59 2.974-3.453.464 2.495 2.245-.6 3.229 3.148-1.528 3.148 1.528-.6-3.23 2.495-2.244-3.453-.464-1.59-2.974z"
          stroke="#FFF"
        />

        <!-- PINS -->
        <g transform="translate(33 9)" fill="#9D9D9A" stroke-width="0.4">
          <circle stroke="#262626" cx="70.5" cy="3.5" r="3.5" />
          <circle stroke="#007ADB" cx="60.5" cy="3.5" r="3.5" />
          <circle stroke="#9D5B96" cx="50.5" cy="3.5" r="3.5" />
          <circle stroke="#009E9B" cx="41.5" cy="3.5" r="3.5" />
          <circle stroke="#E8D977" cx="31.5" cy="3.5" r="3.5" />
          <circle stroke="#C08540" cx="21.5" cy="3.5" r="3.5" />
          <circle stroke="#B4AEAB" cx="12.5" cy="3.5" r="3.5" />
          <circle stroke="#E7DBDB" cx="3.5" cy="3.5" r="3.5" />
        </g>
      </svg>
      <canvas width="${i}" height="${r}" class="pixelated"></canvas>
    </div>`}};je([Jt()],Fe.prototype,"imageData",void 0),Fe=je([Qt("wokwi-ssd1306")],Fe);var Ne=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Ve=class extends qt{constructor(){super(...arguments),this.hasSignal=!1,this.pinInfo=[{name:"1",x:30,y:82,signals:[]},{name:"2",x:34,y:82,signals:[]}]}static get styles(){return et`
      :host {
        display: inline-block;
      }

      .buzzer-container {
        display: flex;
        flex-direction: column;
        width: 75px;
      }

      .music-note {
        position: relative;
        left: 40px;
        animation-duration: 1.5s;
        animation-name: animate-note;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        transform: scale(1.5);
        fill: blue;
        offset-path: path(
          'm0 0c-0.9-0.92-1.8-1.8-2.4-2.8-0.56-0.92-0.78-1.8-0.58-2.8 0.2-0.92 0.82-1.8 1.6-2.8 0.81-0.92 1.8-1.8 2.6-2.8 0.81-0.92 1.4-1.8 1.6-2.8 0.2-0.92-0.02-1.8-0.58-2.8-0.56-0.92-1.5-1.8-2.4-2.8'
        );
        offset-rotate: 0deg;
      }

      @keyframes animate-note {
        0% {
          offset-distance: 0%;
          opacity: 0;
        }
        10% {
          offset-distance: 10%;
          opacity: 1;
        }
        75% {
          offset-distance: 75%;
          opacity: 1;
        }
        100% {
          offset-distance: 100%;
          opacity: 0;
        }
      }
    `}render(){const t=this.hasSignal;return Pt`
      <div class="buzzer-container">
        <svg
          class="music-note"
          style="visibility: ${t?"":"hidden"}"
          xmlns="http://www.w3.org/2000/svg"
          width="8"
          height="8"
          viewBox="0 0 8 8"
        >
          <path
            d="M8 0c-5 0-6 1-6 1v4.09c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-3.97c.73-.23 1.99-.44 4-.5v2.06c-.15-.05-.33-.09-.5-.09-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5v-5.5z"
          />
        </svg>

        <svg
          width="17mm"
          height="20mm"
          version="1.1"
          viewBox="0 0 17 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m8 16.5v3.5" fill="none" stroke="#000" stroke-width=".5" />
          <path d="m9 16.5v3.5" fill="#f00" stroke="#f00" stroke-width=".5" />
          <g stroke="#000">
            <g>
              <ellipse cx="8.5" cy="8.5" rx="8.15" ry="8.15" fill="#1a1a1a" stroke-width=".7" />
              <circle
                cx="8.5"
                cy="8.5"
                r="6.3472"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
              <circle
                cx="8.5"
                cy="8.5"
                r="4.3488"
                fill="none"
                stroke-width=".3"
                style="paint-order:normal"
              />
            </g>
            <circle cx="8.5" cy="8.5" r="1.3744" fill="#ccc" stroke-width=".25" />
          </g>
        </svg>
      </div>
    `}};Ne([Jt()],Ve.prototype,"hasSignal",void 0),Ve=Ne([Qt("wokwi-buzzer")],Ve);const Le=Ae(class extends Ie{constructor(t){var e;if(super(t),1!==t.type||"class"!==t.name||(null===(e=t.strings)||void 0===e?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,[e]){var i,r;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.et=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in e)e[t]&&!(null===(i=this.et)||void 0===i?void 0:i.has(t))&&this.st.add(t);return this.render(e)}const n=t.element.classList;this.st.forEach((t=>{t in e||(n.remove(t),this.st.delete(t))}));for(const t in e){const i=!!e[t];i===this.st.has(t)||(null===(r=this.et)||void 0===r?void 0:r.has(t))||(i?(n.add(t),this.st.add(t)):(n.remove(t),this.st.delete(t)))}return It}});let Ge=class extends qt{constructor(){super(...arguments),this.digit="",this.stylesMapping={},this.classes={"rotate-path":!0},this.degrees=[320,56,87,115,143,173,204,232,260,290]}static get styles(){return et`
      .text {
        cursor: grab;
        user-select: none;
      }
      input:focus + svg #container {
        stroke: #4e50d7;
        stroke-width: 3;
      }
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      .rotate-path {
        transform-origin: center;
        transition: transform 1000ms ease-in;
      }
      .dialer-anim {
        transform: rotate(var(--angle));
      }
    `}removeDialerAnim(){this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!1}),this.stylesMapping={"--angle":0},this.requestUpdate()}dial(t){this.digit=t,this.addDialerAnim(t)}onValueChange(t){const e=t.target;this.digit=parseInt(e.value),this.dial(this.digit),e.value=""}addDialerAnim(t){requestAnimationFrame((()=>{this.dispatchEvent(new CustomEvent("dial-start",{detail:{digit:this.digit}})),this.classes=Object.assign(Object.assign({},this.classes),{"dialer-anim":!0});const e=this.degrees[t];this.stylesMapping={"--angle":e+"deg"},this.requestUpdate()}))}focusInput(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".hide-input");null==e||e.focus()}render(){return Pt`
      <input
        tabindex="0"
        type="number"
        class="hide-input"
        value="${this.digit}"
        @input="${this.onValueChange}"
      />
      <svg width="266" height="266" @click="${this.focusInput}" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(1 1)">
          <circle stroke="#979797" stroke-width="3" fill="#1F1F1F" cx="133" cy="133" r="131" />
          <circle stroke="#fff" stroke-width="2" fill="#D8D8D8" cx="133" cy="133" r="72" />
          <path
            class=${Le(this.classes)}
            @transitionstart="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial",{detail:{digit:this.digit}}))}}"
            @transitionend="${()=>{this.classes["dialer-anim"]||this.dispatchEvent(new CustomEvent("dial-end",{detail:{digit:this.digit}})),this.removeDialerAnim()}}"
            d="M133.5,210 C146.478692,210 157,220.521308 157,233.5 C157,246.478692 146.478692,257 133.5,257 C120.521308,257 110,246.478692 110,233.5 C110,220.521308 120.521308,210 133.5,210 Z M83.5,197 C96.4786916,197 107,207.521308 107,220.5 C107,233.478692 96.4786916,244 83.5,244 C70.5213084,244 60,233.478692 60,220.5 C60,207.521308 70.5213084,197 83.5,197 Z M45.5,163 C58.4786916,163 69,173.521308 69,186.5 C69,199.478692 58.4786916,210 45.5,210 C32.5213084,210 22,199.478692 22,186.5 C22,173.521308 32.5213084,163 45.5,163 Z M32.5,114 C45.4786916,114 56,124.521308 56,137.5 C56,150.478692 45.4786916,161 32.5,161 C19.5213084,161 9,150.478692 9,137.5 C9,124.521308 19.5213084,114 32.5,114 Z M234.5,93 C247.478692,93 258,103.521308 258,116.5 C258,129.478692 247.478692,140 234.5,140 C221.521308,140 211,129.478692 211,116.5 C211,103.521308 221.521308,93 234.5,93 Z M41.5,64 C54.4786916,64 65,74.5213084 65,87.5 C65,100.478692 54.4786916,111 41.5,111 C28.5213084,111 18,100.478692 18,87.5 C18,74.5213084 28.5213084,64 41.5,64 Z M214.5,46 C227.478692,46 238,56.5213084 238,69.5 C238,82.4786916 227.478692,93 214.5,93 C201.521308,93 191,82.4786916 191,69.5 C191,56.5213084 201.521308,46 214.5,46 Z M76.5,26 C89.4786916,26 100,36.5213084 100,49.5 C100,62.4786916 89.4786916,73 76.5,73 C63.5213084,73 53,62.4786916 53,49.5 C53,36.5213084 63.5213084,26 76.5,26 Z M173.5,15 C186.478692,15 197,25.5213084 197,38.5 C197,51.4786916 186.478692,62 173.5,62 C160.521308,62 150,51.4786916 150,38.5 C150,25.5213084 160.521308,15 173.5,15 Z M123.5,7 C136.478692,7 147,17.5213084 147,30.5 C147,43.4786916 136.478692,54 123.5,54 C110.521308,54 100,43.4786916 100,30.5 C100,17.5213084 110.521308,7 123.5,7 Z"
            id="slots"
            stroke="#fff"
            fill-opacity="0.5"
            fill="#D8D8D8"
            style=${De(this.stylesMapping)}
          ></path>
        </g>
        <circle id="container" fill-opacity=".5" fill="#070707" cx="132.5" cy="132.5" r="132.5" />
        <g class="text" font-family="Marker Felt, monospace" font-size="21" fill="#FFF">
          <text @mouseup=${()=>this.dial(0)} x="129" y="243">0</text>
          <text @mouseup=${()=>this.dial(9)} x="78" y="230">9</text>
          <text @mouseup=${()=>this.dial(8)} x="40" y="194">8</text>
          <text @mouseup=${()=>this.dial(7)} x="28" y="145">7</text>
          <text @mouseup=${()=>this.dial(6)} x="35" y="97">6</text>
          <text @mouseup=${()=>this.dial(5)} x="72" y="58">5</text>
          <text @mouseup=${()=>this.dial(4)} x="117" y="41">4</text>
          <text @mouseup=${()=>this.dial(3)} x="168" y="47">3</text>
          <text @mouseup=${()=>this.dial(2)} x="210" y="79">2</text>
          <text @mouseup=${()=>this.dial(1)} x="230" y="126">1</text>
        </g>
        <path
          d="M182.738529,211.096297 L177.320119,238.659185 L174.670528,252.137377 L188.487742,252.137377 L182.738529,211.096297 Z"
          stroke="#979797"
          fill="#D8D8D8"
          transform="translate(181.562666, 230.360231) rotate(-22.000000) translate(-181.562666, -230.360231)"
        ></path>
      </svg>
    `}};Ge=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-rotary-dialer")],Ge);var He=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Xe=class extends qt{constructor(){super(...arguments),this.angle=0,this.horn="single",this.hornColor="#ccc",this.pinInfo=[{name:"GND",x:0,y:50,signals:[{type:"power",signal:"GND"}]},{name:"V+",x:0,y:59.5,signals:[{type:"power",signal:"VCC"}]},{name:"PWM",x:0,y:69,signals:[{type:"pwm"}]}]}hornPath(){switch(this.horn){case"cross":return"m119.54 50.354h-18.653v-18.653a8.4427 8.4427 0 0 0-8.4427-8.4427h-1.9537a8.4427 8.4427 0 0 0-8.4427 8.4427v18.653h-18.653a8.4427 8.4427 0 0 0-8.4427 8.4427v1.9537a8.4427 8.4427 0 0 0 8.4427 8.4427h18.653v18.653a8.4427 8.4427 0 0 0 8.4427 8.4427h1.9537a8.4427 8.4427 0 0 0 8.4427-8.4427v-18.653h18.653a8.4427 8.4427 0 0 0 8.4426-8.4427v-1.9537a8.4427 8.4427 0 0 0-8.4426-8.4427zm-57.447 12.136a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7119-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm20.621-34.813a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 8.7543a2.7165 2.7165 0 1 1-2.7165 2.7165 2.7165 2.7165 0 0 1 2.7165-2.7165zm0 55.438a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm0-8.7543a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm5.9215-17.42a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843zm14.704-3.205a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165zm8.7543 0a2.7165 2.7165 0 1 1 2.7165-2.7165 2.7165 2.7165 0 0 1-2.7165 2.7165z";case"double":return"m101.63 57.808c-0.0768-0.48377-0.16978-0.8838-0.23258-1.1629l-4.112-51.454c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.1004 51.447c-0.07443 0.28607-0.16746 0.69774-0.24421 1.1629a12.473 12.473 0 0 0 0 3.9306c0.07675 0.48377 0.16978 0.8838 0.24421 1.1629l4.1004 51.461c0 2.8654 2.6026 5.1912 5.8145 5.1912s5.8145-2.3258 5.8145-5.1912l4.1004-51.447c0.0744-0.28607 0.16746-0.69774 0.23258-1.1629a12.473 12.473 0 0 0 0.0116-3.9376zm-4.2376 7.8868a8.3426 8.3426 0 0 1-3.5375 2.1072c-0.25816 0.07443-0.52098 0.13955-0.7838 0.19072a8.7217 8.7217 0 0 1-1.1978 0.1442c-0.26747 0.01163-0.53726 0.01163-0.80473 0a8.7217 8.7217 0 0 1-1.1978-0.1442c-0.26282-0.05117-0.52563-0.11629-0.78379-0.19072a8.3729 8.3729 0 0 1 0-16.048c0.25816-0.07675 0.52098-0.13955 0.78379-0.19072a8.7217 8.7217 0 0 1 1.1978-0.1442c0.26747-0.01163 0.53726-0.01163 0.80473 0a8.7217 8.7217 0 0 1 1.1978 0.1442c0.26282 0.05117 0.52563 0.11396 0.7838 0.19072a8.3729 8.3729 0 0 1 3.5375 13.955zm-5.9215-54.996a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 72.565a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.3729a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791zm0-8.6055a2.791 2.791 0 1 1 2.791-2.791 2.791 2.791 0 0 1-2.791 2.791z";default:return"m101.6 59.589-4.3167-54.166c0-2.8654-2.6026-5.1912-5.8145-5.1912s-5.8145 2.3258-5.8145 5.1912l-4.3167 54.166a8.3264 8.3264 0 0 0-0.10234 1.2792c0 5.047 4.5818 9.1381 10.234 9.1381s10.234-4.0911 10.234-9.1381a8.3264 8.3264 0 0 0-0.10233-1.2792zm-10.131-48.658a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.3729a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm0 8.6055a2.791 2.791 0 1 1-2.791 2.791 2.791 2.791 0 0 1 2.791-2.791zm5.9215 29.412a8.3729 8.3729 0 1 1 0-11.843 8.3729 8.3729 0 0 1 0 11.843z"}}render(){var t;return Pt`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45mm"
        height="31.63mm"
        version="1.1"
        viewBox="0 0 170.08 119.55"
      >
        <defs>
          <g id="pin">
            <rect x="0" y="-1.91" width="3.72" height="3.71" />
            <path d="m2.026 -1.91h13.532l-13.425 0.51865z" />
            <path d="m2.026 1.80h13.532l-13.425-0.50702z" />
            <rect fill="#ccc" x="0.33" y="-1.23" width="3.04" height="2.46" rx=".15" />
          </g>
        </defs>
        <g stroke-width="2.7" fill="none">
          <path
            stroke="#b44200"
            d="m 83.32,56.6 c0,0 -32.99,0.96 -43.32,0 -6.20,-0.58 -10.60,-6.20 -14.87,-6.31"
          />
          <path stroke="#ff2300" d="m83.326 59.6h-62.971" />
          <path
            stroke="#f47b00"
            d="m 83.32,62.6 c0,0 -32.60,-0.61 -43.33,-0.15 -6.87,0.29 -12.01,6.82 -14.77,6.73"
          />
        </g>
        <rect fill="#666" y="45.5" width="25.71" height="28" rx="1.14" />
        <use xlink:href="#pin" x="4.7" y="50.06" />
        <use xlink:href="#pin" x="4.7" y="59.66" />
        <use xlink:href="#pin" x="4.7" y="69.26" />
        <path
          fill="#4d4d4d"
          d="m163.92 66.867a7.09 7.09 0 1 1 5.8145-11.136 0.18 0.18 0 0 0 0.33-0.10234v-14.346h-17.664v36.98h17.676v-14.346a0.18 0.18 0 0 0-0.333-0.107 7.08 7.08 0 0 1-5.83 3.06z"
        />
        <path
          fill="#4d4d4d"
          d="m55.068 66.75a7.09 7.09 0 1 0-5.8261-11.136 0.18 0.18 0 0 1-0.33-0.10234v-14.346h17.676v36.98h-17.676v-14.346a0.18 0.18 0 0 1 0.333-0.107 7.08 7.08 0 0 0 5.83 3.06z"
        />
        <rect fill="#666" x="64.255" y="37.911" width="90.241" height="43.725" rx="5.3331" />
        <path fill="gray" d="m110.07 50.005h-14.42v19.537h14.42a9.7684 9.7684 0 0 0 0-19.537z" />
        <circle fill="#999" cx="91.467" cy="59.773" r="18.606" />
        <path
          fill=${this.hornColor}
          transform="translate(91.467 59.773) rotate(${null!==(t=this.angle)&&void 0!==t?t:0}) translate(-91.467 -59.773)"
          d="${this.hornPath()}"
        />
        <circle fill="gray" cx="91.467" cy="59.773" r="8.3729" />
        <circle fill="#ccc" cx="91.467" cy="59.773" r="6.2494" />
        <path
          fill="#666"
          d="m94.911 62.543-2.3839-2.4165a0.42562 0.42562 0 0 1 0-0.60471l2.4281-2.3863a0.64657 0.64657 0 0 0 0.06512-0.8652 0.62797 0.62797 0 0 0-0.93032-0.05117l-2.4351 2.4049a0.4326 0.4326 0 0 1-0.60703 0l-2.3863-2.4165a0.6489 0.6489 0 0 0-0.8652-0.06512 0.63262 0.63262 0 0 0-0.05117 0.93032l2.4049 2.4328a0.42795 0.42795 0 0 1 0 0.60703l-2.4142 2.3863a0.65122 0.65122 0 0 0-0.06745 0.8652 0.63029 0.63029 0 0 0 0.93032 0.05117l2.4351-2.4049a0.42562 0.42562 0 0 1 0.60471 0l2.3863 2.4398a0.63262 0.63262 0 0 0 0.93032-0.04186 0.64657 0.64657 0 0 0-0.04419-0.8652z"
        />
      </svg>
    `}};He([Jt()],Xe.prototype,"angle",void 0),He([Jt()],Xe.prototype,"horn",void 0),He([Jt()],Xe.prototype,"hornColor",void 0),Xe=He([Qt("wokwi-servo")],Xe);let We=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",x:10,y:114.9,signals:[{type:"power",signal:"VCC"}],number:1},{name:"SDA",x:22.4,y:114.9,signals:[],number:2},{name:"NC",x:35.3,y:114.9,signals:[],number:3},{name:"GND",x:48,y:114.9,signals:[{type:"power",signal:"GND"}],number:4}]}render(){return Pt`
      <svg
        width="15.1mm"
        height="30.885mm"
        version="1.1"
        viewBox="0 0 15.1 30.885"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="2.27" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="5.55" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="8.96" y="23.885" width=".75" height="7" rx=".2" />
          <rect x="12.32" y="23.885" width=".75" height="7" rx=".2" />
        </g>
        <path
          d="M15.05 23.995V5.033m0 0c0-.107-1.069-4.962-2.662-4.96L2.803.09C1.193.09.05 4.926.05 5.033v18.962c0 .107.086.192.192.192h14.616a.192.192 0 00.192-.192M7.615.948h.004c1.08 0 1.956.847 1.956 1.892s-.876 1.892-1.956 1.892-1.956-.847-1.956-1.892c0-1.044.873-1.89 1.952-1.892zM4.967 8.66H5.9a.21.21 0 01.211.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.212-.21V8.87a.21.21 0 01.212-.211zm2.168 0h.934a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.934a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm2.152 0h.935a.21.21 0 01.21.21v.935a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21V8.87a.21.21 0 01.21-.211zm5.757 0v1.356m0 0h-3.217a.553.553 0 01-.554-.554v-.249a.55.55 0 01.554-.553h3.217M.05 8.66h3.282c.307 0 .554.247.554.553v.25a.552.552 0 01-.554.553H.05m0 1.054h3.282c.307 0 .554.247.554.554v.249a.552.552 0 01-.554.554H.05m4.917-1.357H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.212-.21v-.935a.21.21 0 01.212-.21zm2.168 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.211.211h-.934a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.153 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.211h-.934a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.539 0h3.217v1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553zM.05 13.547h3.282c.307 0 .553.247.553.554v.249a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm2.169 0h.933a.21.21 0 01.212.211v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.935a.21.21 0 01.21-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.935a.21.21 0 01.21-.21zm5.757 1.356h-3.217a.552.552 0 01-.554-.553v-.25c0-.306.247-.553.554-.553h3.217m0 3.791h-3.218a.553.553 0 01-.553-.554v-.249c0-.306.247-.553.553-.553h3.218m-14.994 0h3.282c.307 0 .553.247.553.553v.25a.552.552 0 01-.553.553H.05m4.916-1.356H5.9a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zm2.169 0h.934a.21.21 0 01.21.211v.934a.21.21 0 01-.21.21h-.934a.21.21 0 01-.211-.21v-.934a.21.21 0 01.211-.21zm2.152 0h.934a.21.21 0 01.211.211v.934a.21.21 0 01-.21.21h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.21zM.05 18.362h3.282c.307 0 .553.247.553.554v.25a.552.552 0 01-.553.552H.05m4.916-1.355H5.9a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm2.169 0h.933a.21.21 0 01.212.21v.934a.21.21 0 01-.212.211h-.933a.21.21 0 01-.211-.21v-.934a.21.21 0 01.21-.211zm2.152 0h.934a.21.21 0 01.211.21v.934a.21.21 0 01-.21.211h-.935a.21.21 0 01-.21-.21v-.934a.21.21 0 01.21-.211zm5.757 1.355h-3.218a.552.552 0 01-.553-.553v-.25c0-.306.247-.552.553-.552h3.218M10.49 5.056V7.31a.192.192 0 01-.193.193h-.85a.192.192 0 01-.193-.193V5.056H8.23v2.286a.192.192 0 01-.192.192h-.851a.192.192 0 01-.193-.192V5.056H5.94v2.286a.192.192 0 01-.193.192h-.85a.192.192 0 01-.193-.192V5.056C.033 5.025.05 5.033.05 5.033m15 0l-4.56.023v0"
          fill="#f2f2f2"
          stroke="#000"
          stroke-linecap="round"
          stroke-width=".1"
        />
        <text
          x="3.7415893"
          y="22.863354"
          fill="#000000"
          font-family="sans-serif"
          font-size="2.2px"
          stroke-width=".05"
          style="line-height:1.25"
        >
          DHT22
        </text>
      </svg>
    `}};We=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-dht22")],We);var Ke=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let qe=class extends qt{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.pinInfo=[{name:"SCL",x:90,y:9,signals:[se("SCL")]},{name:"SDA",x:100,y:9,signals:[se("SDA")]},{name:"AREF",x:109,y:9,signals:[]},{name:"GND.1",x:119,y:9,signals:[{type:"power",signal:"GND"}]},{name:"13",x:129,y:9,signals:[{type:"pwm"}]},{name:"12",x:138,y:9,signals:[{type:"pwm"}]},{name:"11",x:148,y:9,signals:[{type:"pwm"}]},{name:"10",x:157.5,y:9,signals:[{type:"pwm"}]},{name:"9",x:167.5,y:9,signals:[{type:"pwm"}]},{name:"8",x:177,y:9,signals:[{type:"pwm"}]},{name:"7",x:190,y:9,signals:[{type:"pwm"}]},{name:"6",x:200,y:9,signals:[{type:"pwm"}]},{name:"5",x:209.5,y:9,signals:[{type:"pwm"}]},{name:"4",x:219,y:9,signals:[{type:"pwm"}]},{name:"3",x:228.5,y:9,signals:[{type:"pwm"}]},{name:"2",x:238,y:9,signals:[{type:"pwm"}]},{name:"1",x:247.5,y:9,signals:[oe("TX")]},{name:"0",x:257.5,y:9,signals:[oe("RX")]},{name:"14",x:270.5,y:9,signals:[oe("TX",3)]},{name:"15",x:280,y:9,signals:[oe("RX",3)]},{name:"16",x:289.5,y:9,signals:[oe("TX",2)]},{name:"17",x:299,y:9,signals:[oe("RX",2)]},{name:"18",x:308.5,y:9,signals:[oe("TX",1)]},{name:"19",x:318.5,y:9,signals:[oe("RX",1)]},{name:"20",x:328,y:9,signals:[se("SDA")]},{name:"21",x:337.5,y:9,signals:[se("SCL")]},{name:"5V.1",x:361,y:8,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"5V.2",x:371,y:8,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"22",x:361,y:17.5,signals:[]},{name:"23",x:371,y:17.5,signals:[]},{name:"24",x:361,y:27.25,signals:[]},{name:"25",x:371,y:27.25,signals:[]},{name:"26",x:361,y:36.75,signals:[]},{name:"27",x:371,y:36.75,signals:[]},{name:"28",x:361,y:46.25,signals:[]},{name:"29",x:371,y:46.25,signals:[]},{name:"30",x:361,y:56,signals:[]},{name:"31",x:371,y:56,signals:[]},{name:"32",x:361,y:65.5,signals:[]},{name:"33",x:371,y:65.5,signals:[]},{name:"34",x:361,y:75,signals:[]},{name:"35",x:371,y:75,signals:[]},{name:"36",x:361,y:84.5,signals:[]},{name:"37",x:371,y:84.5,signals:[]},{name:"38",x:361,y:94.25,signals:[]},{name:"39",x:371,y:94.25,signals:[]},{name:"40",x:361,y:103.75,signals:[]},{name:"41",x:371,y:103.75,signals:[]},{name:"42",x:361,y:113.5,signals:[]},{name:"43",x:371,y:113.5,signals:[]},{name:"44",x:361,y:123,signals:[{type:"pwm"}]},{name:"45",x:371,y:123,signals:[{type:"pwm"}]},{name:"46",x:361,y:132.75,signals:[{type:"pwm"}]},{name:"47",x:371,y:132.75,signals:[]},{name:"48",x:361,y:142.25,signals:[]},{name:"49",x:371,y:142.25,signals:[]},{name:"50",x:361,y:152,signals:[ae("MISO")]},{name:"51",x:371,y:152,signals:[ae("MOSI")]},{name:"52",x:361,y:161.5,signals:[ae("SCK")]},{name:"53",x:371,y:161.5,signals:[ae("SS")]},{name:"GND.4",x:361,y:171.25,signals:[{type:"power",signal:"GND"}]},{name:"GND.5",x:371,y:171.25,signals:[{type:"power",signal:"GND"}]},{name:"IOREF",x:136,y:184.5,signals:[]},{name:"RESET",x:145.5,y:184.5,signals:[]},{name:"3.3V",x:155,y:184.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"5V",x:164.5,y:184.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"GND.2",x:174.25,y:184.5,signals:[{type:"power",signal:"GND"}]},{name:"GND.3",x:183.75,y:184.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:193.5,y:184.5,signals:[{type:"power",signal:"VCC"}]},{name:"A0",x:208.5,y:184.5,signals:[ne(0)]},{name:"A1",x:218,y:184.5,signals:[ne(1)]},{name:"A2",x:227.5,y:184.5,signals:[ne(2)]},{name:"A3",x:237.25,y:184.5,signals:[ne(3)]},{name:"A4",x:246.75,y:184.5,signals:[ne(4)]},{name:"A5",x:256.25,y:184.5,signals:[ne(5)]},{name:"A6",x:266,y:184.5,signals:[ne(6)]},{name:"A7",x:275.5,y:184.5,signals:[ne(7)]},{name:"A8",x:290.25,y:184.5,signals:[ne(8)]},{name:"A9",x:300,y:184.5,signals:[ne(9)]},{name:"A10",x:309.5,y:184.5,signals:[ne(10)]},{name:"A11",x:319.25,y:184.5,signals:[ne(11)]},{name:"A12",x:328.75,y:184.5,signals:[ne(12)]},{name:"A13",x:338.5,y:184.5,signals:[ne(13)]},{name:"A14",x:348,y:184.5,signals:[ne(14)]},{name:"A15",x:357.75,y:184.5,signals:[ne(15)]}]}static get styles(){return et`
      text {
        font-size: 2px;
        font-family: monospace;
      }
    `}render(){const{ledPower:t,led13:e,ledRX:i,ledTX:r}=this;return Pt`
      <svg
        width="102.66mm"
        height="50.80mm"
        version="1.1"
        viewBox="-4 0 102.66 50.80"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#c6c6c6" />
            <rect x="0.6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width="0.05" />
          </g>
        </defs>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${re}

        <pattern id="pin-male" width="2.54" height="4.80" patternUnits="userSpaceOnUse">
          <rect ry="0.3" rx="0.3" width="2.12" height="4.80" fill="#565656" />
          <ellipse cx="1" cy="1.13" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
          <ellipse cx="1" cy="3.67" rx="0.5" ry="0.5" fill="#aaa"></ellipse>
        </pattern>

        <!-- PCB -->
        <path
          d="M2.105.075v50.653h94.068v-1.206l2.412-2.412V14.548l-2.412-2.413V2.487L93.785.075zm14.443.907a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.505 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0116.548.982zm71.154 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.505 1.505 1.505 0 01-1.505 1.506 1.505 1.505 0 01-1.506-1.506A1.505 1.505 0 0187.702.982zM64.818 15.454a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm0 26.532a1.505 1.505 0 011.504 1.506 1.505 1.505 0 01-1.504 1.505 1.505 1.505 0 01-1.506-1.505 1.505 1.505 0 011.506-1.506zm-49.476 4.825a1.505 1.505 0 01.03 0 1.505 1.505 0 011.505 1.504 1.505 1.505 0 01-1.506 1.506 1.505 1.505 0 01-1.505-1.506 1.505 1.505 0 011.476-1.504zm78.39 0a1.505 1.505 0 01.03 0 1.505 1.505 0 011.504 1.504 1.505 1.505 0 01-1.504 1.506 1.505 1.505 0 01-1.506-1.506 1.505 1.505 0 011.476-1.504z"
          fill="#2b6b99"
        />

        <!-- USB Connector -->
        <g style="fill:#b3b2b2;stroke:#b3b2b2;stroke-width:0.010">
          <ellipse cx="3.84" cy="9.56" rx="1.12" ry="1.03" />
          <ellipse cx="3.84" cy="21.04" rx="1.12" ry="1.03" />
          <g fill="#000">
            <rect width="11" height="11.93" x="-0.05" y="9.72" rx="0.2" ry="0.2" opacity="0.24" />
          </g>
          <rect x="-4" y="9.37" height="11.85" width="14.46" />
          <rect x="-4" y="9.61" height="11.37" width="14.05" fill="#706f6f" />
          <rect x="-4" y="9.71" height="11.17" width="13.95" fill="#9d9d9c" />
        </g>

        <!-- Power jack -->
        <g stroke-width=".254" fill="black" transform="translate(0 -4)">
          <path
            d="m-2.58 48.53v2.289c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-2.289z"
            fill="#252728"
            opacity=".3"
          />
          <path
            d="m11.334 42.946c0-0.558-0.509-1.016-1.132-1.016h-10.043v9.652h10.043c0.622 0 1.132-0.457 1.132-1.016z"
            opacity=".3"
          />
          <path
            d="m-2.072 40.914c-0.279 0-0.507 0.204-0.507 0.454v8.435c0 0.279 0.228 0.507 0.507 0.507h1.722c0.279 0 0.507-0.228 0.507-0.507v-8.435c0-0.249-0.228-0.454-0.507-0.454z"
          />
          <path
            d="m-2.58 48.784v1.019c0 0.279 0.228 0.508 0.508 0.508h1.722c0.279 0 0.508-0.228 0.508-0.508v-1.019z"
            opacity=".3"
          />
          <path
            d="m11.334 43.327c0.139 0 0.254 0.114 0.254 0.254v4.064c0 0.139-0.114 0.254-0.254 0.254"
          />
          <path
            d="m11.334 42.438c0-0.558-0.457-1.016-1.016-1.016h-10.16v8.382h10.16c0.558 0 1.016-0.457 1.016-1.016z"
          />
          <path
            d="m10.064 49.804h-9.906v-8.382h1.880c-1.107 0-1.363 1.825-1.363 3.826 0 1.765 1.147 3.496 3.014 3.496h6.374z"
            opacity=".3"
          />
          <rect x="10.064" y="41.422" width=".254" height="8.382" fill="#ffffff" opacity=".2" />
          <path
            d="m10.318 48.744v1.059c0.558 0 1.016-0.457 1.016-1.016v-0.364c0 0.313-1.016 0.320-1.016 0.320z"
            opacity=".3"
          />
        </g>

        <!-- Pin Headers -->
        <g transform="translate(18.4 1.07)">
          <rect width="${.38+25.4}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(44.81 1.07)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(66 1.07)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(27.93 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(49.63 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(71.34 47.5)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)"></rect>
        </g>
        <g transform="translate(90.1 0.8)">
          <rect width="${5.46}" height="${45.72}" fill="url(#pins-female)"></rect>
        </g>

        <!-- MCU -->
        <rect x="43" y="17.55" fill="#000" width="13.5" height="13.5" rx="0.5" />

        <!-- Programming Headers -->
        <g transform="translate(61.5 21.09)">
          <rect width="4.80" height="7" fill="url(#pin-male)" />
        </g>

        <!-- LEDs -->
        <g transform="translate(72.20 15.58)">
          <use xlink:href="#led-body" />
          ${t&&At`<circle cx="1.3" cy="0.55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="68" y="16.75">PWR</tspan>
        </text>

        <g transform="translate(26 13.86)">
          <use xlink:href="#led-body" />
          ${e&&At`<circle cx="1.3" cy="0.55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 18.52)">
          <use xlink:href="#led-body" />
          ${r&&At`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <g transform="translate(26 20.75)">
          <use xlink:href="#led-body" />
          ${i&&At`<circle cx="0.975" cy="0.55" r="1.3" fill="yellow" filter="url(#ledFilter)" />`}
        </g>

        <text fill="#fff">
          <tspan x="29.4" y="15">L</tspan>
          <tspan x="29.4" y="19.8">TX</tspan>
          <tspan x="29.4" y="22">RX</tspan>
          <tspan x="26.5" y="20">&nbsp;</tspan>
        </text>

        <!-- Pin Labels -->
        <rect x="28.27" y="7.6" width="31.5" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="40.84" y="9.8">PWM</tspan>
        </text>

        <rect x="60.5" y="11.8" width="25.4" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="65" y="14.2">COMMUNICATION</tspan>
        </text>

        <text
          transform="translate(22.6 3.4) rotate(270 0 0)"
          fill="#fff"
          style="font-size: 2px; text-anchor: end; font-family: monospace"
        >
          <tspan x="0" dy="2.54">AREF</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">13</tspan>
          <tspan x="0" dy="2.54">12</tspan>
          <tspan x="0" dy="2.54">11</tspan>
          <tspan x="0" dy="2.54">10</tspan>
          <tspan x="0" dy="2.54">9</tspan>
          <tspan x="0" dy="2.54">8</tspan>
          <tspan x="0" dy="4.08">7</tspan>
          <tspan x="0" dy="2.54">6</tspan>
          <tspan x="0" dy="2.54">5</tspan>
          <tspan x="0" dy="2.54">4</tspan>
          <tspan x="0" dy="2.54">3</tspan>
          <tspan x="0" dy="2.54">2</tspan>
          <tspan x="0" dy="2.54">TX→ 1</tspan>
          <tspan x="0" dy="2.54">RX← 0</tspan>
          <tspan x="0" dy="3.34">TX3 14</tspan>
          <tspan x="0" dy="2.54">RX3 15</tspan>
          <tspan x="0" dy="2.54">TX2 16</tspan>
          <tspan x="0" dy="2.54">RX2 17</tspan>
          <tspan x="0" dy="2.54">TX1 18</tspan>
          <tspan x="0" dy="2.54">RX1 19</tspan>
          <tspan x="0" dy="2.54">SDA 20</tspan>
          <tspan x="0" dy="2.54">SCL 21</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <rect x="36" y="41.46" width="12.44" height="0.16" fill="#fff"></rect>
        <rect x="50" y="41.46" width="39" height="0.16" fill="#fff"></rect>
        <text fill="#fff" style="font-weight: 900">
          <tspan x="39" y="40.96">POWER</tspan>
          <tspan x="65" y="40.96">ANALOG IN</tspan>
        </text>
        <text transform="translate(30.19 47) rotate(270 0 0)" fill="#fff" style="font-weight: 700">
          <tspan x="0" dy="2.54">IOREF</tspan>
          <tspan x="0" dy="2.54">RESET</tspan>
          <tspan x="0" dy="2.54">3.3V</tspan>
          <tspan x="0" dy="2.54">5V</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">GND</tspan>
          <tspan x="0" dy="2.54">Vin</tspan>
          <tspan x="0" dy="3.74">A0</tspan>
          <tspan x="0" dy="2.54">A1</tspan>
          <tspan x="0" dy="2.54">A2</tspan>
          <tspan x="0" dy="2.54">A3</tspan>
          <tspan x="0" dy="2.54">A4</tspan>
          <tspan x="0" dy="2.54">A5</tspan>
          <tspan x="0" dy="2.54">A6</tspan>
          <tspan x="0" dy="2.54">A7</tspan>
          <tspan x="0" dy="3.74">A8</tspan>
          <tspan x="0" dy="2.54">A9</tspan>
          <tspan x="0" dy="2.54">A10</tspan>
          <tspan x="0" dy="2.54">A11</tspan>
          <tspan x="0" dy="2.54">A12</tspan>
          <tspan x="0" dy="2.54">A13</tspan>
          <tspan x="0" dy="1.84">A14</tspan>
          <tspan x="0" dy="1.84">A15</tspan>
          <tspan x="0" dy="2.54">&nbsp;</tspan>
        </text>

        <!-- Logo -->
        <text x="51.85" y="36" style="font-size:4px;font-weight:bold;line-height:1.25;fill:#fff">
          Arduino MEGA
        </text>
      </svg>
    `}};function Ye(t,e){return(({finisher:t,descriptor:e})=>(i,r)=>{var n;if(void 0===r){const r=null!==(n=i.originalKey)&&void 0!==n?n:i.key,s=null!=e?{kind:"method",placement:"prototype",key:r,descriptor:e(i.key)}:{...i,key:r};return null!=t&&(s.finisher=function(e){t(e,r)}),s}{const n=i.constructor;void 0!==e&&Object.defineProperty(i,r,e(r)),null==t||t(n,r)}})({descriptor:i=>{const r={get(){var e,i;return null!==(i=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(t))&&void 0!==i?i:null},enumerable:!0,configurable:!0};if(e){const e="symbol"==typeof i?Symbol():"__"+i;r.get=function(){var i,r;return void 0===this[e]&&(this[e]=null!==(r=null===(i=this.renderRoot)||void 0===i?void 0:i.querySelector(t))&&void 0!==r?r:null),this[e]}}return r}})}Ke([Jt()],qe.prototype,"led13",void 0),Ke([Jt()],qe.prototype,"ledRX",void 0),Ke([Jt()],qe.prototype,"ledTX",void 0),Ke([Jt()],qe.prototype,"ledPower",void 0),qe=Ke([Qt("wokwi-arduino-mega")],qe);var Ze=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Je=class extends qt{constructor(){super(...arguments),this.led13=!1,this.ledRX=!1,this.ledTX=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:"12",x:19.7,y:4.8,signals:[ae("MISO")]},{name:"11",x:29.3,y:4.8,signals:[ae("MOSI"),{type:"pwm"}]},{name:"10",x:38.9,y:4.8,signals:[ae("SS"),{type:"pwm"}]},{name:"9",x:48.5,y:4.8,signals:[{type:"pwm"}]},{name:"8",x:58.1,y:4.8,signals:[]},{name:"7",x:67.7,y:4.8,signals:[]},{name:"6",x:77.3,y:4.8,signals:[{type:"pwm"}]},{name:"5",x:86.9,y:4.8,signals:[{type:"pwm"}]},{name:"4",x:96.5,y:4.8,signals:[]},{name:"3",x:106.1,y:4.8,signals:[{type:"pwm"}]},{name:"2",x:115.7,y:4.8,signals:[]},{name:"GND.2",x:125.3,y:4.8,signals:[{type:"power",signal:"GND"}]},{name:"RESET.2",x:134.9,y:4.8,signals:[]},{name:"1",x:144.5,y:4.8,signals:[oe("TX")]},{name:"0",x:154.1,y:4.8,signals:[oe("RX")]},{name:"13",x:19.7,y:62.4,signals:[ae("SCK")]},{name:"3.3V",x:29.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"AREF",x:38.9,y:62.4,signals:[]},{name:"A0",x:48.5,y:62.4,signals:[ne(0)]},{name:"A1",x:58.1,y:62.4,signals:[ne(1)]},{name:"A2",x:67.7,y:62.4,signals:[ne(2)]},{name:"A3",x:77.3,y:62.4,signals:[ne(3)]},{name:"A4",x:86.9,y:62.4,signals:[ne(4),se("SDA")]},{name:"A5",x:96.5,y:62.4,signals:[ne(5),se("SCL")]},{name:"A6",x:106.1,y:62.4,signals:[ne(6)]},{name:"A7",x:115.7,y:62.4,signals:[ne(7)]},{name:"5V",x:125.3,y:62.4,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"RESET",x:134.9,y:62.4,signals:[]},{name:"GND.1",x:144.5,y:62.4,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:154.1,y:62.4,signals:[{type:"power",signal:"VCC"}]},{name:"12.2",x:163.7,y:43.2,signals:[ae("MISO")]},{name:"5V.2",x:154.1,y:43.2,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"13.2",x:163.7,y:33.6,signals:[ae("SCK")]},{name:"11.2",x:154.1,y:33.6,signals:[ae("MOSI"),{type:"pwm"}]},{name:"RESET.3",x:163.7,y:24,signals:[]},{name:"GND.3",x:154.1,y:24,signals:[{type:"power",signal:"GND"}]}]}static get styles(){return et`
      text {
        font-size: 1px;
        font-family: monospace;
        user-select: none;
      }

      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: white;
        outline: none;
      }
    `}render(){const{ledPower:t,led13:e,ledRX:i,ledTX:r}=this;return Pt`
      <svg
        width="44.9mm"
        height="17.8mm"
        viewBox="-1.4 0 44.9 17.8"
        font-weight="bold"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="solderPlate" style="color-interpolation-filters:sRGB;">
            <feTurbulence result="r0" type="fractalNoise" baseFrequency="1" numOctaves="1" />
            <feComposite
              result="r1"
              in="r0"
              in2="SourceGraphic"
              operator="arithmetic"
              k1=".6"
              k2=".6"
              k3="1.2"
              k4=".25"
            />
            <feBlend result="r2" in="r1" in2="SourceGraphic" mode="luminosity" />
            <feComposite result="r3" in="r2" in2="SourceGraphic" operator="in" />
          </filter>
          <pattern id="pins-tqfp-0.5mm" width="1" height=".5" patternUnits="userSpaceOnUse">
            <rect fill="#333" width="1" height=".2" y=".17" />
          </pattern>
          <pattern id="pins-pth-0.75" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".375" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <pattern id="pins-pth-1.00" width="2.54" height="2.54" patternUnits="userSpaceOnUse">
            <circle r=".75" cx="1.27" cy="1.27" fill="#333" filter="url(#solderPlate)" />
            <g stroke="#333" stroke-width=".05" paint-order="stroke fill">
              <circle r=".5" cx="1.27" cy="1.27" fill="#eee" />
            </g>
          </pattern>
          <g id="led-body" fill="#eee">
            <rect x="0" y="0" height="1.2" width="2.6" fill="#333" filter="url(#solderPlate)" />
            <rect x=".6" y="-0.1" width="1.35" height="1.4" stroke="#aaa" stroke-width=".05" />
          </g>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="2.2" width="2.8">
            <feGaussianBlur stdDeviation=".5" />
          </filter>
        </defs>

        <!-- PCB -->
        <g id="pcb" fill="#fff">
          <rect width="43.5" height="17.8" x="0" y="0" fill="#1b7e84" />
          <circle cx="1" cy="1" r=".889" />
          <circle cx="42.42" cy="1" r=".889" />
          <circle cx="42.42" cy="16.6" r=".889" />
          <circle cx="1" cy="16.6" r=".889" />
        </g>

        <!-- silkscreen -->
        <g id="silkscreen" fill="#eee" text-anchor="middle">
          <rect x="30.48" y="0" width="2.54" height="3.2" />
          <rect x="35.56" y="14.6" width="2.54" height="3.2" />
          <g fill="#1b7e84" transform="translate(1.27 1.27)">
            <circle r=".85" cx="30.48" />
            <circle r=".85" cx="35.56" cy="15.24" />
          </g>
          <g transform="translate(1.27 3)">
            <text x="2.54">D12</text>
            <text x="5.08">D11</text>
            <text x="7.62">D10</text>
            <text x="10.16">D9</text>
            <text x="12.7">D8</text>
            <text x="15.24">D7</text>
            <text x="17.78">D6</text>
            <text x="20.32">D5</text>
            <text x="22.86">D4</text>
            <text x="25.4">D3</text>
            <text x="27.94">D2</text>
            <text x="30.48" fill="#1b7e84">GND</text>
            <text x="33.02">RST</text>
            <text x="35.56" y=".65" font-size="200%">↓</text>
            <text x="35.56" y="1.5">RX0</text>
            <text x="38.1" y=".65" font-size="200%">↑</text>
            <text x="38.1" y="1.5">TX0</text>
          </g>
          <g transform="translate(1.27 15.5)">
            <text x="2.54">D13</text>
            <text x="5.08">3V3</text>
            <text x="7.62">AREF</text>
            <text x="10.16">A0</text>
            <text x="12.7">A1</text>
            <text x="15.24">A2</text>
            <text x="17.78">A3</text>
            <text x="20.32">A4</text>
            <text x="22.86">A5</text>
            <text x="25.4">A6</text>
            <text x="27.94">A7</text>
            <text x="30.48">5V</text>
            <text x="33.02">RST</text>
            <text x="35.56" fill="#1b7e84">GND</text>
            <text x="38.1">VIN</text>
          </g>
          <g transform="rotate(90)">
            <text x="8.7" y="-22.5">RESET</text>
            <text x="5.6" y="-32.2">TX</text>
            <text x="5.6" y="-30.7" font-size="200%">↓</text>
            <text x="7.6" y="-32.2">RX</text>
            <text x="7.6" y="-30.7" font-size="200%">↑</text>
            <text x="9.6" y="-30.7">ON</text>
            <text x="11.6" y="-30.7">L</text>
          </g>
        </g>

        <!-- MCU -->
        <g id="mcu" transform="rotate(45 -2.978 23.39)">
          <g fill="url(#pins-tqfp-0.5mm)" filter="url(#solderPlate)">
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" />
            <rect x="-2.65" y="-1.975" width="5.3" height="3.95" transform="rotate(90)" />
          </g>
          <rect x="-2.275" y="-2.275" width="4.55" height="4.55" fill="#444" />
          <circle transform="rotate(45)" cx=".012" cy="-2.5" r=".35" fill="#222" />
        </g>

        <!-- pins -->
        <g id="pins" fill="url(#pins-pth-0.75)">
          <g id="pins-pin1" fill="#333" filter="url(#solderPlate)">
            <rect x="${38.495}" y="${.395}" width="1.75" height="1.75" />
            <rect x="${38.495}" y="${16.51-.875}" width="1.75" height="1.75" />
          </g>
          <rect x="2.54" width="${38.1}" height="2.54" />
          <rect x="2.54" y="${15.24}" width="${38.1}" height="2.54" />
        </g>

        <!-- programming header -->
        <g id="pgm-header" fill="url(#pins-pth-1.00)" stroke="#eee" stroke-width=".1">
          <g id="pgm-pin1" stroke="none" fill="#333" filter="url(#solderPlate)">
            <rect x="${16.5*2.54-.875}" y="${10.555}" width="1.75" height="1.75" />
          </g>
          <rect x="${38.1}" y="${5.08}" width="${5.08}" height="${7.62}" />
        </g>

        <!-- USB mini type B -->
        <g id="usb-mini-b" stroke-width=".1" paint-order="stroke fill">
          <g fill="#333" filter="url(#solderPlate)">
            <rect x=".3" y="3.8" width="1.6" height="9.8" />
            <rect x="5.5" y="3.8" width="1.6" height="9.8" />
            <rect x="7.3" y="7.07" width="1.1" height=".48" />
            <rect x="7.3" y="7.82" width="1.1" height=".48" />
            <rect x="7.3" y="8.58" width="1.1" height=".48" />
            <rect x="7.3" y="9.36" width="1.1" height=".48" />
            <rect x="7.3" y="10.16" width="1.1" height=".48" />
          </g>
          <rect x="-1.4" y="4.8" width="8.9" height="7.8" fill="#999" stroke-width=".26" />
          <rect x="-1.25" y="5" width="8.6" height="7.4" fill="#ccc" stroke="#bbb" />
          <g fill="none" stroke="#333" stroke-width=".26" stroke-linecap="round">
            <path d="m2.6 5.9h-3.3v0.9h3.3m0 3.7h-3.3v0.9h3.3M-0.6 7.6l4.3 0.3v1.5l-4.3 0.3" />
            <path d="m3.3 7.9v1.5" stroke-width="1" stroke-linecap="butt" />
            <path d="m6 6.4v4.5" stroke-width=".35" />
          </g>
        </g>

        <!-- LEDs -->
        <g transform="translate(27.7 5)">
          <use xlink:href="#led-body" />
          ${r&&At`<circle cx="1.3" cy=".55" r="1.3" fill="#ff8080" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 7)">
          <use xlink:href="#led-body" />
          ${i&&At`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 9)">
          <use xlink:href="#led-body" />
          ${t&&At`<circle cx="1.3" cy=".55" r="1.3" fill="#80ff80" filter="url(#ledFilter)" />`}
        </g>
        <g transform="translate(27.7 11)">
          <use xlink:href="#led-body" />
          ${e&&At`<circle cx="1.3" cy=".55" r="1.3" fill="#ffff80" filter="url(#ledFilter)" />`}
        </g>

        <!-- reset button -->
        <g stroke-width=".1" paint-order="fill stroke">
          <rect x="24.3" y="6.3" width="1" height="4.8" filter="url(#solderPlate)" fill="#333" />
          <rect x="23.54" y="6.8" width="2.54" height="3.8" fill="#ccc" stroke="#888" />
          <circle
            id="reset-button"
            cx="24.8"
            cy="8.7"
            r="1"
            fill="#eeb"
            stroke="#777"
            tabindex="0"
            @mousedown=${()=>this.down()}
            @touchstart=${()=>this.down()}
            @mouseup=${()=>this.up()}
            @mouseleave=${()=>this.leave()}
            @touchend=${()=>this.leave()}
            @keydown=${t=>we.includes(t.key)&&this.down()}
            @keyup=${t=>we.includes(t.key)&&this.up()}
          />
        </g>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}};Ze([Jt()],Je.prototype,"led13",void 0),Ze([Jt()],Je.prototype,"ledRX",void 0),Ze([Jt()],Je.prototype,"ledTX",void 0),Ze([Jt()],Je.prototype,"ledPower",void 0),Ze([Jt()],Je.prototype,"resetPressed",void 0),Ze([Ye("#reset-button")],Je.prototype,"resetButton",void 0),Je=Ze([Qt("wokwi-arduino-nano")],Je);let Qe=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:15,x:9.5,number:1,signals:[{type:"power",signal:"GND"}]},{name:"5V",y:25,x:9.5,number:2,signals:[le(5)]},{name:"SDA",y:34.5,x:9.5,number:3,signals:[se("SDA")]},{name:"SCL",y:44,x:9.5,number:4,signals:[se("SCL")]},{name:"SQW",y:54,x:9.5,number:5,signals:[]}]}render(){return Pt`
      <svg
        width="25.8mm"
        height="22.212mm"
        version="1.1"
        viewBox="0 0 25.8 22.212"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m2.961 0c-1.6405 0-2.961 1.3207-2.961 2.9611v16.29c0 1.6405 1.3206 2.961 2.961 2.961h19.878c1.6405 0 2.961-1.3206 2.961-2.961v-2.1407c-2.4623-2.4996-2.4864-1.3794-2.4996-5.5588-0.01319-4.1794 0.11192-2.4623 2.4996-5.5961v-2.9945c0-1.6405-1.3206-2.9611-2.961-2.9611zm20.214 1.5792h1.04e-4c3e-3 -1.1e-5 0.0061-1.1e-5 0.0091 0 0.67598-1.6e-5 1.224 0.54798 1.224 1.224 1.5e-5 0.67598-0.54798 1.224-1.224 1.224-0.67598 1.5e-5 -1.224-0.54798-1.224-1.224-3.4e-5 -0.67241 0.54238-1.2189 1.2148-1.224zm-20.564 1.9405c0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291 2.4e-5 0.29985-0.24306 0.54294-0.54291 0.54291-0.29985 2.4e-5 -0.54294-0.24306-0.54291-0.54291-2.4e-5 -0.29985 0.24306-0.54294 0.54291-0.54291zm-0.02958 2.5853c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54283-0.54291 0.54281-0.29977-3.2e-5 -0.54278-0.24304-0.54281-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm0.02632 2.5062h1.04e-4c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54284-0.54291 0.54281-0.29981 2.4e-5 -0.54288-0.243-0.54291-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm0.02652 2.5853c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29977 3.2e-5 0.54278 0.24304 0.54281 0.54281 2.4e-5 0.29981-0.243 0.54288-0.54281 0.54291-0.29985 2.4e-5 -0.54294-0.24306-0.54291-0.54291 2.7e-5 -0.29858 0.24117-0.5411 0.53975-0.54281zm-0.02652 2.5325h1.04e-4c0.0011-3e-6 0.0021-3e-6 0.0032 0 0.29985-2.4e-5 0.54294 0.24306 0.54291 0.54291-3.2e-5 0.29981-0.2431 0.54284-0.54291 0.54281-0.29981 2.4e-5 -0.54288-0.243-0.54291-0.54281-2.9e-5 -0.29858 0.24107-0.54114 0.53965-0.54291zm-0.02663 4.4895c3e-3 -1.1e-5 0.0061-1.1e-5 0.0091 0 0.6759 4.2e-5 1.2238 0.54795 1.2238 1.2238 1.5e-5 0.67594-0.54791 1.2239-1.2238 1.224-0.67598 1.5e-5 -1.224-0.54798-1.224-1.224 2.2e-5 -0.67241 0.54248-1.2189 1.2149-1.2238z"
          fill="#015abe"
        />
        <g fill="#ffe680">
          <path
            d="m2.6116 3.0997a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.5853 5.685a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.6116 8.1911a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.638 10.776a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
          <path
            d="m2.6116 13.309a0.97608 0.96289 0 0 0-0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606 0.9629 0.97608 0.96289 0 0 0 0.97606-0.9629 0.97608 0.96289 0 0 0-0.97606-0.9629zm-0.01316 0.40897a0.52761 0.5408 0 0 1 0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761 0.54077 0.52761 0.5408 0 0 1-0.52761-0.54077 0.52761 0.5408 0 0 1 0.52761-0.54077z"
          />
        </g>
        <text transform="rotate(90)" font-size="1.3px" fill="#e6e6e6">
          <tspan x="0.78" y="-3.81">GND</tspan>
          <tspan x="5.75" y="-0.43">5V</tspan>
          <tspan x="7.89" y="-3.81">SDA</tspan>
          <tspan x="10.45" y="-0.49">SCL</tspan>
          <tspan x="13" y="-3.97">SQW</tspan>
        </text>
        <g fill="#999">
          <rect x="6.5174" y="9.8" width=".62" height="1.971" rx=".2" ry=".2" />
          <rect x="6.5174" y="4.29" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="7.8138" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="7.8138" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="9.0674" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="10.321" y="4.26" width=".62" height="1.97" rx=".2" ry=".2" />
          <rect x="9.0674" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="10.321" y="9.77" width=".621" height="1.97" rx=".2" ry=".2" />
          <rect x="8.8304" y="13" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="5.0064" y="18.56" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="5.0064" y="13.02" width="1.38" height="1.43" rx=".2" ry=".2" />
          <rect x="8.8118" y="18.57" width="1.38" height="1.43" rx=".2" ry=".2" />
        </g>
        <rect x="6.2656" y="6.1049" width="5.1111" height="3.8244" fill="#1a1a1a" />
        <rect x="5.9653" y="12.746" width="3.173" height="7.7357" fill="#1a1a1a" />
        <text fill="#e6e6e6">
          <tspan x="10.5" y="19.8" font-size="2.1px">RTC</tspan>
          <tspan x="10.1" y="21.5" font-size="1.38px">DS1307</tspan>
        </text>
        <path
          d="m23.105 6.4546-0.093544 11.038h-7.6239l-1.4032-2.666-0.14032-7.2965 1.1514-1.1171z"
          fill="#e7d652"
        />
        <path
          transform="scale(.26458)"
          d="m65.771 8.0801c-0.74122-0.056466-0.96289 0.40508-0.96289 0.99805v10.564h-7.7773l-11.018 11.018v26.67l11.191 11.193 7.0625-0.029297v11.404c0.030992 0.86246 0.40014 1.3613 1.3613 1.3613h9.8711c0.79548 0 1.1738-0.34656 1.1738-1.0801v-10.686h7.377s-0.091892-1.0897 0.49805-1.2539c4.3436-1.2091 5.1203-2.5601 5.7949-4.0449 2.0727-4.5618-6.7065-7.6884-6.1094-21.266 0.5971-13.577 7.9939-12.227 6.2988-18.801-0.48161-1.8679-2.1495-3.113-5.6328-3.3926-0.48254-0.038702-0.44922-0.99414-0.44922-0.99414h-7.5781v-10.717c0.00373-0.74652-0.24336-0.94531-1.0918-0.94531h-10.01zm-1.5918 16.668a7.937 7.937 0 0 1 0.14844 0 7.937 7.937 0 0 1 7.9375 7.9355 7.937 7.937 0 0 1-7.9375 7.9375 7.937 7.937 0 0 1-7.9355-7.9375 7.937 7.937 0 0 1 7.7871-7.9355zm0 24.707a7.937 7.937 0 0 1 0.14844 0 7.937 7.937 0 0 1 7.9375 7.9355 7.937 7.937 0 0 1-7.9375 7.9375 7.937 7.937 0 0 1-7.9355-7.9375 7.937 7.937 0 0 1 7.7871-7.9355z"
          fill="#e6e6e6"
        />
        <path
          d="m2.5877 17.819a1.6229 1.6229 0 0 0-1.6198 1.6229 1.6229 1.6229 0 0 0 1.6228 1.6228 1.6229 1.6229 0 0 0 1.6229-1.6228 1.6229 1.6229 0 0 0-1.6229-1.6229 1.6229 1.6229 0 0 0-0.0031 0zm0.0031 0.43845a1.1471 1.1471 0 0 1 1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471-1.1471 1.1471 1.1471 0 0 1 1.1471-1.1471z"
          fill="#e7e3c4"
        />
        <path
          d="m23.181 1.1802a1.6229 1.6229 0 0 0-1.6198 1.6229 1.6229 1.6229 0 0 0 1.6228 1.6228 1.6229 1.6229 0 0 0 1.6229-1.6228 1.6229 1.6229 0 0 0-1.6229-1.6229 1.6229 1.6229 0 0 0-0.0031 0zm0.0031 0.43845a1.1471 1.1471 0 0 1 1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471 1.1471 1.1471 1.1471 0 0 1-1.1471-1.1471 1.1471 1.1471 0 0 1 1.1471-1.1471z"
          fill="#e7e3c4"
        />
        <path
          d="m15.049 3.0132c-0.14489 0.02316-0.26986-0.0058-0.27922-0.06459-0.0094-0.05874 0.1005-0.1251 0.24541-0.1481 0.14481-0.023 0.26976 0.0058 0.27913 0.06451 0.0094 0.05874-0.1004 0.12518-0.24531 0.14818m-0.1376 0.60509c-0.05307 0.027-0.1501-0.05691-0.21671-0.18746-0.06668-0.13072-0.07782-0.2587-0.02468-0.2857 0.0529-0.02693 0.14978 0.05697 0.21654 0.18761 0.06668 0.13054 0.0779 0.25845 0.02485 0.28555m-0.57077-0.24323c-0.10363 0.10379-0.22167 0.1538-0.26376 0.11171-0.04214-0.04199 0.0078-0.16022 0.1114-0.26399 0.10354-0.10394 0.22158-0.15395 0.26384-0.11189 0.04206 0.04201-0.0078 0.1603-0.11148 0.26416m-0.39663-0.72272c0.02685-0.05307 0.15476-0.04201 0.2853 0.02443 0.13079 0.06645 0.21504 0.16341 0.18802 0.21638-0.027 0.05289-0.15476 0.04209-0.28545-0.02435-0.13072-0.06643-0.21487-0.16341-0.18786-0.21646m0.75238-0.38413c0.05882 0.0091 0.0879 0.13424 0.06492 0.27913-0.0227 0.14491-0.08873 0.25478-0.14762 0.24556-0.05866-0.0093-0.08784-0.13425-0.06509-0.27905 0.02285-0.14491 0.08896-0.25485 0.1478-0.24564m1.8552 0.39655c-0.01218-0.07703-0.05401-0.09906-0.15492-0.13127-0.07663-0.02462-0.58986-0.18811-0.58986-0.18811s-0.35776-0.1352-0.62286 0.05595c-0.03575 0.02579-0.07278 0.05512-0.10988 0.08638 0.03118-0.03718 0.06051-0.07413 0.08625-0.10987 0.19057-0.26551 0.05482-0.62311 0.05482-0.62311s-0.16438-0.51284-0.18915-0.5896c-0.03245-0.10067-0.05449-0.14251-0.1316-0.15445-0.07724-0.01225-0.1109 0.0207-0.17278 0.1066-0.04713 0.06524-0.36128 0.5029-0.36128 0.5029s-0.23885 0.29846-0.13922 0.6098c0.01352 0.04176 0.02998 0.08607 0.04834 0.13112-0.02582-0.0412-0.05193-0.08053-0.07798-0.11598-0.19371-0.26314-0.5755-0.24479-0.5755-0.24479s-0.53864-0.0021-0.61911-0.0022c-0.10594-3.55e-4 -0.15243 0.0079-0.18784 0.07734-0.03543 0.06949-0.01451 0.11194 0.04809 0.19723 0.04751 0.06501 0.3668 0.4989 0.3668 0.4989s0.20998 0.3196 0.53673 0.32088c0.04391 2.18e-4 0.09096-0.0018 0.13928-0.0053a1.9307 1.9307 0 0 0-0.13406 0.03824c-0.31025 0.1029-0.4105 0.47187-0.4105 0.47187s-0.16847 0.51163-0.19363 0.58824c-0.03285 0.1005-0.03951 0.14722 0.01563 0.20228 0.0552 0.0553 0.10202 0.04847 0.20252 0.01532 0.07653-0.02508 0.58791-0.19459 0.58791-0.19459s0.36858-0.10106 0.47076-0.41146c0.01388-0.04166 0.02645-0.08704 0.03816-0.13383-0.0035 0.04824-0.0053 0.09521-0.0049 0.13912 0.0018 0.32683 0.32169 0.53625 0.32169 0.53625s0.43436 0.31815 0.49943 0.36576c0.08559 0.06228 0.12791 0.08319 0.19748 0.0477 0.0694-0.03543 0.07751-0.08192 0.07701-0.18786-1.97e-4 -0.08048-0.0035-0.61911-0.0035-0.61911s0.01794-0.38188-0.24564-0.5751c-0.03543-0.02596-0.07463-0.05201-0.11579-0.07765 0.04495 0.0181 0.08902 0.03454 0.13102 0.04768 0.31134 0.09929 0.60947-0.14018 0.60947-0.14018s0.43694-0.31486 0.50226-0.36199c0.08575-0.06203 0.11852-0.09609 0.10634-0.17311"
          fill="#fff"
        />
        <text fill="#fff" font-size="2.5px" font-weight="bold">
          <tspan x="12.6" y="12.7">+</tspan>
        </text>
      </svg>
    `}};Qe=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-ds1307")],Qe);var ti=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let ei=class extends qt{constructor(){super(...arguments),this.pixels=16,this.pixelSpacing=0,this.background="#363",this.animation=!1,this.pixelElements=null,this.animationFrame=null,this.animateStep=()=>{const t=(new Date).getTime(),{pixels:e}=this,i=t=>t%2e3>1e3?1-t%1e3/1e3:t%1e3/1e3;for(let r=0;r<e;r++)this.setPixel(r,{r:i(100*r+t),g:i(100*r+t+200),b:i(100*r+t+400)});this.animationFrame=requestAnimationFrame(this.animateStep)}}get radius(){return(this.pixelSpacing+5)*this.pixels/2/Math.PI+6}get pinInfo(){const{radius:t}=this,e=(2*t+3)*te,i=t*te,r=9.6012;return[{name:"GND",x:i-1.5*r,y:e,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:i-.5*r,y:e,signals:[{type:"power",signal:"VCC"}]},{name:"DIN",x:i+.5*r,y:e,signals:[]},{name:"DOUT",x:i+1.5*r,y:e,signals:[]}]}getPixelElements(){return this.shadowRoot?(this.pixelElements||(this.pixelElements=Array.from(this.shadowRoot.querySelectorAll("rect.pixel"))),this.pixelElements):null}setPixel(t,{r:e,g:i,b:r}){const n=this.getPixelElements();n&&(t<0||t>=n.length||(n[t].style.fill=`rgb(${255*e},${255*i},${255*r})`))}reset(){const t=this.getPixelElements();for(const e of null!=t?t:[])e.style.fill=""}updated(){this.animation&&!this.animationFrame?this.animationFrame=requestAnimationFrame(this.animateStep):!this.animation&&this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}render(){const{pixels:t,radius:e,background:i}=this,r=[],n=2*e,s=2*e+3;for(let i=0;i<t;i++){const n=i/t*360;r.push(At`<rect
          class="pixel"
          x="${e-2.5}"
          y="${.5}"
          width="5"
          height="5"
          fill="white"
          stroke="black"
          stroke-width="0.25"
          transform="rotate(${n} ${e} ${e})"/>`)}return this.pixelElements=null,Pt`
      <svg
        width="${n}mm"
        height="${s}mm"
        version="1.1"
        viewBox="0 0 ${n} ${s}"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2" width="2.54" patternUnits="userSpaceOnUse">
            <rect x="1.02" y="0" height="2" width="0.5" fill="#aaa" />
          </pattern>
        </defs>
        <rect
          fill="url(#pin-pattern)"
          height="${4}"
          width=${10.16}
          transform="translate(${e-5.08}, ${2*e-1})"
        />
        <circle
          cx="${e}"
          cy="${e}"
          r="${e-3}"
          fill="transparent"
          stroke-width="${6}"
          stroke="${i}"
        />
        ${r}
      </svg>
    `}};ti([Jt()],ei.prototype,"pixels",void 0),ti([Jt({type:Number})],ei.prototype,"pixelSpacing",void 0),ti([Jt()],ei.prototype,"background",void 0),ti([Jt()],ei.prototype,"animation",void 0),ei=ti([Qt("wokwi-led-ring")],ei);var ii=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let ri=class extends qt{constructor(){super(...arguments),this.value=0,this.pinInfo=[{name:"1",number:1,y:34,x:6.5,signals:[]},{name:"2",number:2,y:34,x:16,signals:[]},{name:"3",number:3,y:34,x:25.5,signals:[]}]}static get styles(){return et`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      svg #handle {
        transition: transform 0.2s linear;
      }
      input:checked + svg #handle {
        transform: translate(2px, 0);
      }
      input:focus + svg #handle {
        stroke-width: 0.4px;
        stroke: #8080ff;
      }
    `}onClick(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".hide-input");e&&(e.checked=!e.checked,this.onValueChange(e),null==e||e.focus())}onValueChange(t){this.value=t.checked?1:0,this.dispatchEvent(new InputEvent("input",{detail:this.value}))}render(){const{value:t}=this;return Pt`
      <input
        tabindex="0"
        type="checkbox"
        class="hide-input"
        .checked=${t}
        @input="${t=>this.onValueChange(t.target)}"
      />
      <svg
        width="8.5mm"
        height="9.23mm"
        version="1.1"
        viewBox="0 0 8.5 9.23"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        @click="${this.onClick}"
      >
        <defs>
          <radialGradient
            id="a"
            cx="9.33"
            cy="122"
            r="4.25"
            gradientTransform="matrix(1.75 -.511 .28 .959 -41.2 8.15)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#808080" offset="0" />
            <stop stop-color="#b5b5b5" offset="1" />
          </radialGradient>
        </defs>
        <g fill="#aaa" stroke-width=".0673">
          <rect x="4" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
          <rect x="1.54" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
          <rect x="6.5" y="5" width=".5" height="4.2" rx=".25" ry=".25" />
        </g>
        <path
          id="handle"
          d="m2.74 0.128 0.145-0.128 0.177 0.0725 0.174-0.0725 0.151 0.0725 0.154-0.0725 0.151 0.0725 0.128-0.0725 0.134 0.0725 0.123-0.0725 0.145 0.128 2e-5 2h-1.48z"
          stroke-width=".0623"
        />
        <rect x="0" y="2.06" width="8.5" height="3.48" fill="url(#a)" stroke-width=".0548" />
        <rect x=".0322" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
        <rect x="6.95" y="4.74" width="1.55" height=".805" stroke-width=".0637" />
        <rect x="2.55" y="4.74" width="3.47" height=".805" stroke-width=".0955" />
      </svg>
    `}};ii([Jt()],ri.prototype,"value",void 0),ri=ii([Qt("wokwi-slide-switch")],ri);let ni=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",x:71.78,y:94.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"TRIG",x:79.67,y:94.5,signals:[]},{name:"ECHO",x:87.56,y:94.5,signals:[]},{name:"GND",x:95.45,y:94.5,signals:[{type:"power",signal:"GND"}]}]}render(){return Pt`
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 45 25"
        height="25mm"
        width="45mm"
        font-family="monospace"
      >
        <defs>
          <pattern patternUnits="userSpaceOnUse" width="2" height="2" id="checkerboard">
            <path d="M0 0h1v1H0zM1 1h1v1H1z" />
          </pattern>
          <radialGradient id="grad1" cx="8.96" cy="10.04" r="3.58" gradientUnits="userSpaceOnUse">
            <stop stop-color="#777" offset="0" />
            <stop stop-color="#b9b9b9" offset="1" />
          </radialGradient>
          <g id="sensor-unit">
            <circle cx="8.98" cy="10" r="8.61" fill="#dcdcdc" />
            <circle cx="8.98" cy="10" r="7.17" fill="#222" />
            <circle cx="8.98" cy="10" r="5.53" fill="#777" fill-opacity=".992" />
            <circle cx="8.98" cy="10" r="3.59" fill="url(#grad1)" />
            <circle cx="8.99" cy="10" r=".277" fill="#777" fill-opacity=".818" />
            <circle cx="8.98" cy="10" r="5.53" fill="url(#checkerboard)" opacity=".397" />
          </g>
        </defs>
        <path
          d="M0 0v20.948h45V0zm1.422.464a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zM1.422 18.484a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1zm41.956 0a1 1 0 01.004 0 1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 01.996-1z"
          fill="#456f93"
        />
        <path
          d="M15.293 5.888l2.934-2.934v3.124l2.944 2.943v10.143M23.269 19.037v-2.473l-.966-.965v-12.5l2.577 1.488 4.741 4.741"
          fill="none"
          stroke="#355a7c"
          stroke-width=".858"
        />
        <use xlink:href="#sensor-unit" />
        <use xlink:href="#sensor-unit" x="27.12" />
        <g fill="none" stroke="#505132" stroke-width=".368">
          <circle cx="43.4" cy="1.46" r="1" />
          <circle cx="43.4" cy="19.5" r="1" />
          <circle cx="1.43" cy="1.46" r="1" />
          <circle cx="1.43" cy="19.5" r="1" />
        </g>
        <rect
          ry="2.07"
          y=".626"
          x="17.111"
          height="4.139"
          width="10.272"
          fill="#878787"
          stroke="#424242"
          stroke-width=".368"
        />
        <g fill="black">
          <rect x="17.87" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="19.95" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="22.04" y="18" ry=".568" width="2.25" height="2.271" />
          <rect x="24.12" y="18" ry=".568" width="2.25" height="2.271" />
        </g>
        <g fill="#ccc" stroke-linecap="round" stroke-width=".21">
          <rect x="18.616" y="19" width=".75" height="7" rx=".2" />
          <rect x="20.702" y="19" width=".75" height="7" rx=".2" />
          <rect x="22.789" y="19" width=".75" height="7" rx=".2" />
          <rect x="24.875" y="19" width=".75" height="7" rx=".2" />
        </g>
        <text font-weight="400" font-size="2.2" fill="#e6e6e6" stroke-width=".055">
          <tspan y="8" x="18">HC-SR04</tspan>
        </text>
        <text
          transform="rotate(-90)"
          font-weight="400"
          font-size="1.55"
          fill="#e6e6e6"
          stroke-width=".039"
        >
          <tspan x="-17.591" y="19.561">Vcc</tspan>
          <tspan x="-17.591" y="21.654">Trig</tspan>
          <tspan x="-17.591" y="23.747">Echo</tspan>
          <tspan x="-17.591" y="25.84">Gnd</tspan>
        </text>
      </svg>
    `}};ni=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-hc-sr04")],ni);let si=class extends ue{constructor(){super(...arguments),this.numCols=20,this.numRows=4}};si=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-lcd2004")],si);var ai=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let oi=class extends qt{constructor(){super(...arguments),this.xValue=0,this.yValue=0,this.pressed=!1,this.pinInfo=[{name:"VCC",x:33,y:115.8,signals:[le()]},{name:"VERT",x:42.6012,y:115.8,signals:[ne(0)]},{name:"HORZ",x:52.2024,y:115.8,signals:[ne(1)]},{name:"SEL",x:61.8036,y:115.8,signals:[]},{name:"GND",x:71.4048,y:115.8,signals:[{type:"power",signal:"GND"}]}]}static get styles(){return et`
      #knob {
        transition: transform 0.3s;
      }

      #knob:hover {
        fill: #222;
      }

      #knob:focus {
        outline: none;
        stroke: #4d90fe;
        stroke-width: 0.5;
      }

      .controls {
        opacity: 0;
        transition: opacity 0.3s;
        cursor: pointer;
      }

      #knob:focus ~ .controls,
      #knob:hover ~ .controls {
        opacity: 1;
      }

      .controls:hover {
        opacity: 1;
      }

      .controls path {
        pointer-events: none;
      }

      .controls .region {
        pointer-events: fill;
        fill: none;
      }

      .controls .region:hover + path {
        fill: #fff;
      }

      .controls circle:hover {
        stroke: #fff;
      }

      .controls circle.pressed {
        fill: #fff;
      }
    `}render(){const{xValue:t,yValue:e}=this;return Pt`
      <svg
        width="27.2mm"
        height="31.8mm"
        viewBox="0 0 27.2 31.8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="noise" primitiveUnits="objectBoundingBox">
            <feTurbulence baseFrequency="2 2" type="fractalNoise" />
            <feColorMatrix
              values=".1 0 0 0 .1
                      .1 0 0 0 .1
                      .1 0 0 0 .1
                      0 0 0 0 1"
            />
            <feComposite in2="SourceGraphic" operator="lighter" />
            <feComposite result="body" in2="SourceAlpha" operator="in" />
          </filter>
          <radialGradient id="g-knob" cx="13.6" cy="13.6" r="10.6" gradientUnits="userSpaceOnUse">
            <stop offset="0" />
            <stop offset="0.9" />
            <stop stop-color="#777" offset="1" />
          </radialGradient>
          <radialGradient
            id="g-knob-base"
            cx="13.6"
            cy="13.6"
            r="13.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" />
            <stop stop-color="#444" offset=".8" />
            <stop stop-color="#555" offset=".9" />
            <stop offset="1" />
          </radialGradient>
          <path
            id="pin"
            fill="silver"
            stroke="#a2a2a2"
            stroke-width=".024"
            d="M8.726 29.801a.828.828 0 00-.828.829.828.828 0 00.828.828.828.828 0 00.829-.828.828.828 0 00-.829-.829zm-.004.34a.49.49 0 01.004 0 .49.49 0 01.49.489.49.49 0 01-.49.49.49.49 0 01-.489-.49.49.49 0 01.485-.49z"
          />
        </defs>
        <path
          d="M1.3 0v31.7h25.5V0zm2.33.683a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.5 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-20.5 26.8a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm20.4 0a1.87 1.87 0 01.009 0 1.87 1.87 0 011.87 1.87 1.87 1.87 0 01-1.87 1.87 1.87 1.87 0 01-1.87-1.87 1.87 1.87 0 011.87-1.87zm-12.7 2.66a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.57 0a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm2.49.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.489.489.489 0 01.485-.489zm-7.62.007a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488zm10.2.013a.489.489 0 01.004 0 .489.489 0 01.489.489.489.489 0 01-.489.489.489.489 0 01-.489-.49.489.489 0 01.485-.488z"
          fill="#bd1e34"
        />
        <g fill="#fff" font-family="sans-serif" stroke-width=".03">
          <text text-anchor="middle" font-size="1.2" letter-spacing=".053">
            <tspan x="4.034" y="25.643">Analog</tspan>
            <tspan x="4.061" y="27.159">Joystick</tspan>
          </text>
          <text transform="rotate(-90)" text-anchor="start" font-size="1.2">
            <tspan x="-29.2" y="9.2">VCC</tspan>
            <tspan x="-29.2" y="11.74">VERT</tspan>
            <tspan x="-29.2" y="14.28">HORZ</tspan>
            <tspan x="-29.2" y="16.82">SEL</tspan>
            <tspan x="-29.2" y="19.36">GND</tspan>
          </text>
        </g>
        <ellipse cx="13.6" cy="13.7" rx="13.6" ry="13.7" fill="url(#g-knob-base)" />
        <path
          d="M48.2 65.5s.042.179-.093.204c-.094.017-.246-.077-.322-.17-.094-.115-.082-.205-.009-.285.11-.122.299-.075.299-.075s-.345-.303-.705-.054c-.32.22-.228.52.06.783.262.237.053.497-.21.463-.18-.023-.252-.167-.21-.256.038-.076.167-.122.167-.122s-.149-.06-.324.005c-.157.06-.286.19-.276.513v1.51s.162-.2.352-.403c.214-.229.311-.384.53-.366.415.026.714-.159.918-.454.391-.569.085-1.2-.178-1.29"
          fill="#fff"
        />
        <circle
          id="knob"
          cx="13.6"
          cy="13.6"
          transform="translate(${2.5*-t}, ${2.5*-e})"
          r="10.6"
          fill="url(#g-knob)"
          filter="url(#noise)"
          tabindex="0"
          @keyup=${t=>this.keyup(t)}
          @keydown=${t=>this.keydown(t)}
        />
        <g fill="none" stroke="#fff" stroke-width=".142">
          <path
            d="M7.8 31.7l-.383-.351v-1.31l.617-.656h1.19l.721.656.675-.656h1.18l.708.656.662-.656h1.25l.643.656.63-.656h1.21l.695.656.636-.656h1.17l.753.656v1.3l-.416.39"
          />
          <path
            d="M9.5 31.7l.381-.344.381.331M12.1 31.7l.381-.344.381.331M14.7 31.7l.381-.344.381.331M17.2 31.7l.381-.344.381.331"
            stroke-linecap="square"
            stroke-linejoin="bevel"
          />
        </g>
        <g class="controls" stroke-width="0.6" stroke-linejoin="bevel" fill="#aaa">
          <rect
            class="region"
            y="8.5"
            x="1"
            height="10"
            width="7"
            @mousedown=${t=>this.mousedown(t,1,0)}
            @mouseup=${()=>this.mouseup(!0,!1)}
          />
          <path d="m 7.022,11.459 -3.202,2.497 3.202,2.497" />

          <rect
            class="region"
            y="1.38"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${t=>this.mousedown(t,0,1)}
            @mouseup=${()=>this.mouseup(!1,!0)}
          />
          <path d="m 16.615,7.095 -2.497,-3.202 -2.497,3.202" />

          <rect
            class="region"
            y="8.5"
            x="18"
            height="10"
            width="7"
            @mousedown=${t=>this.mousedown(t,-1,0)}
            @mouseup=${()=>this.mouseup(!0,!1)}
          />
          <path d="m 19.980,16.101 3.202,-2.497 -3.202,-2.497" />

          <rect
            class="region"
            y="17"
            x="7.9"
            height="7"
            width="10"
            @mousedown=${t=>this.mousedown(t,0,-1)}
            @mouseup=${()=>this.mouseup(!1,!0)}
          />
          <path d="m 11.620,20.112 2.497,3.202 2.497,-3.202" />

          <circle
            cx="13.6"
            cy="13.6"
            r="3"
            stroke="#aaa"
            class=${this.pressed?"pressed":""}
            @mousedown=${t=>this.press(t)}
            @mouseup=${()=>this.release()}
          />
        </g>
        <use xlink:href="#pin" x="0" />
        <use xlink:href="#pin" x="2.54" />
        <use xlink:href="#pin" x="5.08" />
        <use xlink:href="#pin" x="7.62" />
        <use xlink:href="#pin" x="10.16" />
      </svg>
    `}keydown(t){switch(t.key){case"ArrowUp":this.yValue=1,this.valueChanged();break;case"ArrowDown":this.yValue=-1,this.valueChanged();break;case"ArrowLeft":this.xValue=1,this.valueChanged();break;case"ArrowRight":this.xValue=-1,this.valueChanged()}we.includes(t.key)&&this.press()}keyup(t){switch(t.key){case"ArrowUp":case"ArrowDown":this.yValue=0,this.valueChanged();break;case"ArrowLeft":case"ArrowRight":this.xValue=0,this.valueChanged()}we.includes(t.key)&&this.release()}mousedown(t,e,i){var r;e&&(this.xValue=e),i&&(this.yValue=i),this.valueChanged(),null===(r=this.knob)||void 0===r||r.focus(),t.preventDefault()}mouseup(t,e){var i;t&&(this.xValue=0),e&&(this.yValue=0),this.valueChanged(),null===(i=this.knob)||void 0===i||i.focus()}press(t){var e;this.pressed=!0,this.dispatchEvent(new InputEvent("button-press")),null===(e=this.knob)||void 0===e||e.focus(),null==t||t.preventDefault()}release(){var t;this.pressed=!1,this.dispatchEvent(new InputEvent("button-release")),null===(t=this.knob)||void 0===t||t.focus()}valueChanged(){this.dispatchEvent(new InputEvent("input"))}};ai([Jt({type:Number})],oi.prototype,"xValue",void 0),ai([Jt({type:Number})],oi.prototype,"yValue",void 0),ai([Jt()],oi.prototype,"pressed",void 0),ai([Ye("#knob")],oi.prototype,"knob",void 0),oi=ai([Qt("wokwi-analog-joystick")],oi);var li=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let ci=class extends qt{constructor(){super(...arguments),this.travelLength=30,this.value=0,this.min=0,this.max=100,this.step=2,this.isPressed=!1,this.zoom=1,this.pageToLocalTransformationMatrix=null,this.up=()=>{this.isPressed&&(this.isPressed=!1)},this.mouseMove=t=>{this.isPressed&&this.updateValueFromXCoordinate(new DOMPointReadOnly(t.pageX,t.pageY))}}get pinInfo(){return[{name:"VCC",x:1,y:43,number:1,signals:[{type:"power",signal:"VCC"}]},{name:"SIG",x:1,y:66.5,number:2,signals:[ne(0)]},{name:"GND",x:93.6+this.travelLength*te,y:43,number:3,signals:[{type:"power",signal:"GND"}]}]}static get styles(){return et`
      .hide-input {
        position: absolute;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
      }
      input:focus + svg #tip {
        /* some style to add when the element has focus */
        filter: url(#outline);
      }
    `}render(){const{value:t,min:e,max:i,travelLength:r}=this,n=t/(i-e)*r-15;return Pt`
      <input
        tabindex="0"
        type="range"
        min="${this.min}"
        max="${this.max}"
        value="${this.value}"
        step="${this.step}"
        aria-valuemin="${this.min}"
        aria-valuenow="${this.value}"
        aria-valuemax="${this.max}"
        @input="${this.onInputValueChange}"
        class="hide-input"
      />
      <svg
        width="${r+25}mm"
        height="29mm"
        version="1.1"
        viewBox="0 0 ${r+25} 29"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <filter id="outline">
            <feDropShadow dx="0" dy="0" stdDeviation="1" flood-color="#4faaff" />
          </filter>
          <linearGradient
            id="tipGradient"
            x1="36.482"
            x2="50.447"
            y1="91.25"
            y2="91.25"
            gradientTransform="matrix(.8593 0 0 1.1151 -14.849 -92.256)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1a1a1a" offset="0" />
            <stop stop-color="#595959" offset=".4" />
            <stop stop-color="#595959" offset=".6" />
            <stop stop-color="#1a1a1a" offset="1" />
          </linearGradient>
          <radialGradient
            id="bodyGradient"
            cx="62.59"
            cy="65.437"
            r="22.5"
            gradientTransform="matrix(1.9295 3.7154e-8 0 .49697 -98.268 -23.02)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#d2d2d2" offset="0" />
            <stop stop-color="#7a7a7a" offset="1" />
          </radialGradient>
          <g id="screw">
            <circle cx="0" cy="0" r="1" fill="#858585" stroke="#000" stroke-width=".05" />
            <path d="m0 1 0-2" fill="none" stroke="#000" stroke-width=".151" />
          </g>
        </defs>
        <!-- pins -->
        <g fill="#ccc">
          <rect x="0" y="11" width="5" height="0.75" />
          <rect x="${r+20}" y="11" width="5" height="0.75" />
          <rect x="0" y="17.25" width="5" height="0.75" />
        </g>
        <g transform="translate(5 5)">
          <!-- Body -->
          <rect
            id="sliderCase"
            x="0"
            y="5"
            width="${r+15}"
            height="9"
            rx=".2"
            ry=".2"
            fill="url(#bodyGradient)"
            fill-rule="evenodd"
          />
          <rect
            x="3.25"
            y="8"
            width="${r+8.5}"
            height="3"
            rx=".1"
            ry=".1"
            fill="#3f1e1e"
          />
          <!-- Screw Left -->
          <g transform="translate(1.625 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Screw Right -->
          <g transform="translate(${r+13.375} 9.5) rotate(45)">
            <use href="#screw" />
          </g>
          <!-- Tip -->
          <g
            id="tip"
            transform="translate(${n} 0)"
            @mousedown=${this.down}
            @touchstart=${this.down}
            @touchmove=${this.touchMove}
            @touchend=${this.up}
            @keydown=${this.down}
            @keyup=${this.up}
            @click="${this.focusInput}"
          >
            <rect x="19.75" y="8.6" width="5.5" height="1.8" />
            <rect
              x="16.5"
              y="0"
              width="12"
              height="19"
              fill="url(#tipGradient)"
              stroke-width="2.6518"
              rx=".1"
              ry=".1"
            />
            <rect x="22.2" y="0" width=".6" height="19" fill="#efefef" />
          </g>
        </g>
      </svg>
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("mouseup",this.up),window.addEventListener("mousemove",this.mouseMove),window.addEventListener("mouseleave",this.up)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mouseup",this.up),window.removeEventListener("mousemove",this.mouseMove),window.removeEventListener("mouseleave",this.up)}focusInput(){var t;const e=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector(".hide-input");null==e||e.focus()}down(){this.isPressed||this.updateCaseDisplayProperties(),this.isPressed=!0}updateCaseDisplayProperties(){var t,e,i;const r=null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#sliderCase");r&&(this.pageToLocalTransformationMatrix=(null===(e=r.getScreenCTM())||void 0===e?void 0:e.inverse())||null);const n=null===(i=getComputedStyle(window.document.body))||void 0===i?void 0:i.zoom;this.zoom=void 0!==n?Number(n):1}onInputValueChange(t){const e=t.target;e.value&&this.updateValue(Number(e.value))}touchMove(t){if(this.isPressed&&t.targetTouches.length>0){const e=t.targetTouches[0];this.updateValueFromXCoordinate(new DOMPointReadOnly(e.pageX,e.pageY))}}updateValueFromXCoordinate(t){if(this.pageToLocalTransformationMatrix){let e=new DOMPointReadOnly(t.x/this.zoom,t.y/this.zoom);e=e.matrixTransform(this.pageToLocalTransformationMatrix);const i=7.5,r=e.x-i,n=this.travelLength/(this.max-this.min);this.updateValue(Math.round(r/n))}}updateValue(t){this.value=$e(this.min,this.max,t),this.dispatchEvent(new InputEvent("input",{detail:this.value}))}};li([Jt({type:Number})],ci.prototype,"travelLength",void 0),li([Jt({type:Number})],ci.prototype,"value",void 0),li([Jt({type:Number})],ci.prototype,"min",void 0),li([Jt({type:Number})],ci.prototype,"max",void 0),li([Jt({type:Number})],ci.prototype,"step",void 0),ci=li([Qt("wokwi-slide-potentiometer")],ci);let hi=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:87.75,x:20.977,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",y:87.75,x:30.578,number:2,signals:[le()]},{name:"DAT",y:87.75,x:40.18,number:3,signals:[]}]}render(){return Pt`
      <svg
        version="1.1"
        viewBox="0 0 61.1 88.7"
        width="16.178mm"
        height="23.482mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#171514">
          <path
            d="m61.1 4.85c0-2.68-2.17-4.85-4.85-4.85h-51.4c-2.68 0-4.85 2.17-4.85 4.85v61c0 2.68 2.17 4.85 4.85 4.85h51.4c2.68 0 4.85-2.17 4.85-4.85zm-7.43 53.3c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14s-4.14-1.86-4.14-4.14c0-2.29 1.85-4.14 4.14-4.14zm-46.3 0c2.29 0 4.14 1.86 4.14 4.14 0 2.28-1.85 4.14-4.14 4.14-2.29 0-4.14-1.86-4.14-4.14 0-2.29 1.85-4.14 4.14-4.14z"
            stroke-width=".987"
          />
          <rect x="16.5" y="58.2" width="28.2" height="8.28" stroke="#fff" stroke-width=".888px" />
          <rect x="14.2" y="23" width="11.3" height="4.66" stroke="#fff" stroke-width=".888px" />
        </g>
        <rect x="15.2" y="23.7" width="9.44" height="3.23" fill="#a19e9e" stroke-width=".987" />
        <g fill="#171514" stroke="#fff" stroke-width=".888px">
          <rect x="14.2" y="33" width="11.3" height="4.66" />
          <rect x="31.6" y="23" width="11.3" height="4.66" />
          <rect x="31.6" y="33" width="11.3" height="4.66" />
        </g>
        <g fill="#433b38" stroke-width=".987">
          <rect x="17.7" y="59.1" width="6.47" height="6.47" />
          <rect x="27.3" y="59.1" width="6.47" height="6.47" />
          <rect x="37" y="59.1" width="6.47" height="6.47" />
        </g>
        <g fill="#9f9f9f" stroke-width=".987">
          <path
            d="m22.4 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m32 62.5c0-0.377-0.149-0.739-0.416-1.01-0.268-0.267-0.629-0.417-1.01-0.417-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.418 0.419h2.01c0.231 0 0.418-0.188 0.418-0.419v-25.8z"
          />
          <path
            d="m41.6 62.5c0-0.377-0.15-0.739-0.417-1.01s-0.629-0.417-1.01-0.417c-0.377 0-0.739 0.15-1.01 0.417s-0.417 0.629-0.417 1.01v25.8c0 0.231 0.188 0.419 0.419 0.419h2.01c0.231 0 0.419-0.188 0.419-0.419v-25.8z"
          />
        </g>
        <text transform="rotate(90)" fill="#ffffff" font-size="5px">
          <tspan x="45.369" y="-37.601">DAT</tspan>
          <tspan x="45.609" y="-28.801">VCC</tspan>
          <tspan x="45.359" y="-20.2">GND</tspan>
          <text font-size="5.71px">
            <tspan
              x="16.234 18.076 22.422 24.263 28.608 32.018 35.112 36.639 40.05 43.144 46.553"
              y="-52.266"
            >
              IR Reciever
            </tspan>
          </text>
        </text>
        <g fill="none" stroke="#fff">
          <path
            d="m56.3 6.32c-0.654 0.514-1.48 0.82-2.37 0.82-0.895 0-1.72-0.306-2.37-0.82"
            stroke-width=".316px"
          />
          <path
            d="m57.4 7.97c-0.949 0.745-2.14 1.19-3.44 1.19-1.3 0-2.49-0.445-3.44-1.19"
            stroke-width=".395px"
          />
          <path
            d="m58.9 9.32c-1.38 1.08-3.11 1.73-5 1.73s-3.62-0.646-5-1.73"
            stroke-width=".395px"
          />
        </g>
        <path
          d="m20.4 10.2h-6.13c-0.382 0-0.691 0.309-0.691 0.691v6.2c0 0.382 0.309 0.691 0.691 0.691h13c0.931 0.0563 1.88 0.0563 2.81 0h12.7c0.381 0 0.691-0.309 0.691-0.691v-6.2c0-0.382-0.31-0.691-0.691-0.691h-5.88c-1.39-3.12-4.55-5.31-8.23-5.31-3.68 0-6.84 2.19-8.23 5.31zm0.463 0.691c1.18-3.1 4.21-5.31 7.77-5.31 3.55 0 6.59 2.21 7.76 5.31h6.35v6.2h-12.7c-0.914 0.0563-1.85 0.0563-2.77 0h-13v-6.2z"
          fill="#fff"
          stroke-width=".987"
        />
        <path
          d="m28.6 6.32c4.01 0 7.27 3.26 7.27 7.27 0 4.01-14.5 4.01-14.5 0 0-4.01 3.26-7.27 7.27-7.27z"
          fill="#2d2624"
          stroke-width=".987"
        />
        <clipPath id="b">
          <path
            d="m37.2 14.5c4.06 0 7.36 3.3 7.36 7.36 0 4.06-14.7 4.06-14.7 0 0-4.06 3.3-7.36 7.36-7.36z"
          />
        </clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#b)">
          <path
            d="m37.2 12.3c-0.069 0.303 0.377 0.714 0.536 0.965 0.504 0.799 0.744 1.43 1.07 2.3 1.01 2.7 0.775 5.41 0.775 8.2 0 0.121 0.155-0.196 0.262-0.254 0.233-0.126 0.484-0.232 0.724-0.345 0.727-0.341 1.47-0.602 2.24-0.833 2.84-0.852 4.9-0.521 6.1-3.77 0.26-0.704 0.404-1.57 0.22-2.31-0.225-0.9-2.44-3.28-3.27-3.7-1.35-0.675-3.05-0.667-4.43-1.01-1.3-0.326-3.08-0.498-4.11 0.524"
            fill="#483f3c"
          />
        </g>
        <rect x="19.1" y="11" width="19.1" height="5.51" fill="#2d2624" stroke-width=".987" />
        <clipPath id="a"><rect x="27.6" y="19.3" width="19.3" height="5.58" /></clipPath>
        <g transform="matrix(.987 0 0 .987 -8.13 -8.03)" clip-path="url(#a)">
          <path
            d="m38.1 18.8c0.144 0.284 0.197 0.749 0.286 1.07 0.466 1.68 0.509 3.53 0.399 5.27-0.041 0.653-0.374 1.31-0.374 1.96 0 0.041 0.076-0.032 0.116-0.043 0.154-0.042 0.14-0.034 0.29-0.06 0.375-0.063 0.754-0.104 1.13-0.153 0.884-0.115 1.77-0.241 2.66-0.34 2.32-0.26 5.58 0.4 6.53-2.44 0.185-0.557 0.236-1.13 0.289-1.72 0.054-0.587 0.14-1.38-0.037-1.95-0.922-3-4.9-1.81-7.22-1.81-0.773 0-1.54 0.084-2.3 0.236-0.055 0.011-0.659 0.108-0.659 0.114"
            fill="#483f3c"
          />
        </g>
        <g fill="#a19e9e" stroke-width=".987">
          <circle cx="16.5" cy="14" r="1.44" />
          <circle cx="40.5" cy="14" r="1.44" />
          <rect x="15.2" y="33.7" width="9.44" height="3.23" />
          <rect x="32.5" y="23.7" width="9.44" height="3.23" />
          <rect x="32.5" y="33.7" width="9.44" height="3.23" />
        </g>
        <g stroke-width=".987">
          <rect x="17.9" y="23.7" width="3.93" height="3.23" fill="#8e7147" />
          <rect x="34.8" y="24.1" width="4.88" height="2.44" fill="#171514" />
          <rect x="34.8" y="34.1" width="4.88" height="2.44" fill="#171514" />
          <text fill="#ffffff" font-size="2.2px" stroke-width=".987">
            <tspan x="35.267719 36.591557 37.915394" y="26.1">103</tspan>
            <tspan x="35.267719 36.591557 37.915394" y="36.12">102</tspan>
          </text>
          <rect x="17.9" y="33.7" width="3.93" height="3.23" fill="#ccf9f9" />
        </g>
      </svg>
    `}};hi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-ir-receiver")],hi);const fi={power:162,menu:226,test:34,plus:2,back:194,prev:224,play:168,next:144,0:104,minus:152,c:176,1:48,2:24,3:122,4:16,5:56,6:90,7:66,8:74,9:82},pi={o:"power",m:"menu",t:"test","+":"plus",b:"back",arrowleft:"prev",p:"play",arrowright:"next",0:"0","-":"minus",c:"c",1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9"};let di=class extends qt{static get styles(){return et`
      use {
        fill: #fff;
      }

      use.red {
        fill: #e6252e;
      }

      use.black {
        fill: #121115;
      }

      use[tabindex] {
        cursor: pointer;
      }

      use.active {
        fill: #8c8;
      }

      use.red.active,
      use.black.active {
        fill: green;
      }

      use:focus {
        --circle-stroke-color: cyan;
        outline: none;
      }
    `}eventHandler(t,e,i){t.focus();const r=fi[e];switch(i){case"up":t.classList.remove("active"),this.dispatchEvent(new CustomEvent("button-release",{detail:{key:e,irCode:r}}));break;case"down":t.classList.add("active"),this.dispatchEvent(new CustomEvent("button-press",{detail:{key:e,irCode:r}}))}}buttonEvent(t,e){var i;const r=t.target;if(!(r instanceof SVGElement))return null;const n=null!==(i=r.dataset.btn)&&void 0!==i?i:"";null!=n&&(t.preventDefault(),this.eventHandler(r,n,e))}keyboardEvent(t,e){var i;we.includes(t.key)&&this.buttonEvent(t,e);const r=t.target,n=pi[t.key.toLowerCase()];if(!(r instanceof SVGElement)||null==n)return;const s=null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector(`use[data-btn="${n}"]`);s&&s instanceof SVGElement&&this.eventHandler(s,n,e)}render(){return Pt`
      <?xml version="1.0" encoding="UTF-8"?>
      <svg
        version="1.1"
        viewBox="0 0 151 316"
        width="40mm"
        height="83.653mm"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
        @mousedown=${t=>this.buttonEvent(t,"down")}
        @mouseup=${t=>this.buttonEvent(t,"up")}
        @touchstart=${t=>this.buttonEvent(t,"down")}
        @touchend=${t=>this.buttonEvent(t,"up")}
        @keydown=${t=>this.keyboardEvent(t,"down")}
        @keyup=${t=>this.keyboardEvent(t,"up")}
      >
        <defs>
          <g id="button" stroke-width="1.29">
            <path
              fill="#272726"
              d="m0 -17.5c-9.73 0-17.6 7.9-17.6 17.6 0 9.73 7.9 17.6 17.6 17.6 9.73 0 17.6-7.9 17.6-17.6 0-9.73-7.9-17.6-17.6-17.6zm0 1.29c9.01 0 16.3 7.32 16.3 16.3 0 9.01-7.32 16.3-16.3 16.3-9.02 0-16.3-7.32-16.3-16.3 0-9.02 7.32-16.3 16.3-16.3z"
            />
            <circle r="16.3" style="stroke: var(--circle-stroke-color)" />
          </g>
          <circle id="button2" r="16.3" style="stroke: var(--circle-stroke-color)" />
        </defs>
        <path
          d="m149 21.3c0-10.5-8.52-19-19-19h-109c-10.5 0-19 8.52-19 19v274c0 10.5 8.52 19 19 19h109c10.5 0 19-8.52 19-19z"
          fill="#fff"
          stroke="#272726"
          stroke-width="4.53px"
        />
        <use xlink:href="#button2" x="29.6" y="37.9" data-btn="power" class="red" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="37.9" data-btn="menu" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="75.2" data-btn="test" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="75.2" data-btn="plus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="75.2" data-btn="back" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="29.6" y="113" data-btn="prev" class="black" tabindex="0" />
        <use xlink:href="#button" x="75.5" y="113" data-btn="play" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="121.4" y="113" data-btn="next" class="black" tabindex="0" />
        <use xlink:href="#button" x="29.6" y="152" data-btn="0" tabindex="0" fill="#fff" />
        <use xlink:href="#button2" x="75.5" y="152" data-btn="minus" class="black" tabindex="0" />
        <use xlink:href="#button" x="121.4" y="152" data-btn="c" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="190" data-btn="1" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="190" data-btn="2" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="190" data-btn="3" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="228" data-btn="4" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="228" data-btn="5" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="228" data-btn="6" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="29.6" y="266" data-btn="7" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="75.5" y="266" data-btn="8" tabindex="0" fill="#fff" />
        <use xlink:href="#button" x="121.4" y="266" data-btn="9" tabindex="0" fill="#fff" />
        <g style="pointer-events: none">
          <g fill="none" stroke="#fff" stroke-width="1.94px">
            <path
              d="m33.5 33c2.05 1.28 3.42 3.56 3.42 6.16 0 4.01-3.26 7.26-7.26 7.26-4.01 0-7.26-3.25-7.26-7.26 0-2.49 1.26-4.69 3.17-6"
            />
            <path d="m29.6 29.3v7.41" />
          </g>
          <path d="m80.9 113-9.58 4.79v-9.58z" fill="#121115" stroke-width="1.29" />
          <path d="m123.4 113-9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 113-8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m129.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <path d="m27.9 113 9.58 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m21.8 113 8.95 4.79v-9.58z" fill="#fff" stroke-width="1.29" />
          <path d="m22.4 109v9.58" fill="none" stroke="#fff" stroke-width="1.29" />
          <text fill="#e6252e" font-size="9.72px" font-weight="700" stroke-width="1.29">
            <tspan x="106.892 115.469 122.432 129.931" y="41.288">MENU</tspan>
            <tspan x="16.488 22.904 29.866 36.829" y="78.679">TEST</tspan>
          </text>
          <g fill="none" stroke="#fff" stroke-width="1.29">
            <path d="m67.7 152h15.5" />
            <path d="m67.7 75.2h15.5M75.5 67.4v15.5" />
          </g>
          <g fill="#121115" stroke-width="1.29">
            <path
              d="m119.4 70.7v -3.25l-6.95 4.84 6.71 4.45 0.111-2.2s6.65-0.357 7.05 3.15c0.397 3.51-6.66 5.21-6.66 5.21s10.9-2.33 10.7-6.82c-0.276-5.4-10.9-5.39-10.9-5.39z"
            />
            <text font-size="13.9px" font-weight="700">
              <tspan x="25.312" y="156.434">0</tspan>
              <tspan x="116.973" y="156.498">C</tspan>
              <tspan x="25.312" y="194.685">1</tspan>
              <tspan x="71.776" y="194.685">2</tspan>
              <tspan x="118.06" y="194.6">3</tspan>
              <tspan x="25.312" y="232.851">4</tspan>
              <tspan x="71.776" y="232.679">5</tspan>
              <tspan x="118.199" y="232.767">6</tspan>
              <tspan x="25.312" y="270.931">7</tspan>
              <tspan x="71.776" y="270.931">8</tspan>
              <tspan x="118.124" y="270.931">9</tspan>
            </text>
          </g>
          <g fill="#fff" stroke-width="1.29">
            <path
              d="m18 28.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0828 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-0.0078 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0479 0.097 0.0608 0.145 0.0298 0.0479-0.0323 0.0621-0.097 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.146 0.0453 0.0362 0.11 0.0298 0.146-0.0155z"
            />
            <path
              d="m64 65.5c0.687-0.757 1.5-1.41 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-0.0078 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0479 0.0957 0.0621 0.145 0.0298 0.0479-0.031 0.0608-0.0957 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m18 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.0323 0.0478 0.097 0.0621 0.145 0.0297 0.0479-0.031 0.0621-0.0957 0.0298-0.145-0.846-1.45-1.96-2.62-3.27-3.53-0.894-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.543-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.21 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0298 0.111 0.0155 0.147 0.0453 0.0362 0.11 0.0285 0.146-0.0168z"
            />
            <path
              d="m110.4 104c0.687-0.757 1.5-1.42 2.39-1.99 1.26-0.814 2.7-1.43 4.22-1.87 0.974-0.281 1.98-0.481 3-0.607 0.673-0.0815 1.35-0.129 2.03-0.147 0.68-0.0181 1.36-8e-3 2.03 0.044 1.02 0.0776 2.03 0.242 3 0.51 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0478 0.0957 0.0621 0.145 0.0297 0.0479-0.031 0.0608-0.0957 0.0298-0.145-0.847-1.45-1.97-2.62-3.27-3.53-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.433-2.45-0.709-3.73-0.828-0.545-0.0504-1.09-0.0698-1.64-0.0582-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.46-3.16 0.839-0.772 0.288-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.0453-0.0285 0.111 0.0155 0.147 0.0453 0.0362 0.111 0.0285 0.147-0.0168z"
            />
            <path
              d="m64 142c0.687-0.758 1.5-1.42 2.39-1.99 1.26-0.815 2.7-1.43 4.22-1.87 0.974-0.279 1.98-0.481 3-0.605 0.673-0.0828 1.35-0.129 2.03-0.147 0.679-0.0181 1.36-9e-3 2.03 0.0427 1.02 0.0789 2.03 0.243 3 0.511 2.48 0.686 4.72 2.02 6.31 4.19 0.031 0.0491 0.0957 0.0621 0.145 0.031 0.0479-0.0323 0.0608-0.097 0.0297-0.145-0.847-1.45-1.97-2.62-3.27-3.54-0.892-0.623-1.87-1.12-2.91-1.5-1.19-0.435-2.45-0.71-3.73-0.829-0.545-0.0504-1.09-0.0698-1.64-0.0569-0.728 0.0155-1.46 0.0841-2.18 0.202-1.08 0.177-2.14 0.459-3.16 0.838-0.772 0.29-1.51 0.632-2.22 1.03-1.7 0.965-3.16 2.22-4.22 3.7-0.0362 0.044-0.0285 0.11 0.0155 0.146 0.0453 0.0362 0.111 0.0284 0.147-0.0155z"
            />
          </g>
        </g>
      </svg>
    `}};di=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-ir-remote")],di);let ui=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"VCC",y:92,x:36.178,number:1,signals:[le()]},{name:"OUT",y:92,x:45.9175,number:2,signals:[]},{name:"GND",y:92,x:55.6415,number:3,signals:[{type:"power",signal:"GND"}]}]}render(){return Pt`
      <svg
        width="24mm"
        height="24.448mm"
        version="1.1"
        viewBox="0 0 90.7 92.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="#c6bf95">
          <path
            d="m54.2 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m44.5 91c0 0.383 0.151 0.749 0.422 1.02 0.27 0.27 0.636 0.422 1.02 0.422h1e-3c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-26.1c0-0.234-0.189-0.423-0.423-0.423h-2.04c-0.234 0-0.423 0.189-0.423 0.423v26.1z"
          />
          <path
            d="m34.7 91c0 0.383 0.152 0.749 0.422 1.02s0.637 0.422 1.02 0.422 0.749-0.152 1.02-0.422 0.422-0.636 0.422-1.02v-26.1c0-0.234-0.19-0.423-0.424-0.423h-2.03c-0.234 0-0.424 0.189-0.424 0.423v26.1z"
          />
        </g>
        <path
          d="m90.7 0h-90.7v74.3h90.7zm-5.38 32.1c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78zm-77.1 0c2.09 0 3.78 1.7 3.78 3.78s-1.7 3.78-3.78 3.78c-2.09 0-3.78-1.7-3.78-3.78s1.7-3.78 3.78-3.78z"
          fill="#253674"
        />
        <rect x="14.3" y="1.28" width="65.5" height="65.5" fill="#dde5e3" />
        <rect x="17.1" y="4.14" width="59.8" height="59.8" fill="#d1dfe1" />
        <circle cx="46.7" cy="33.8" r="31" fill="#d3d5d6" />
        <circle cx="46.7" cy="33.8" r="28.2" fill="#d9e1e1" />
        <clipPath id="a">
          <circle cx="52.5" cy="39.2" r="28.2" />
        </clipPath>
        <g transform="translate(-5.81 -5.45)" clip-path="url(#a)" fill="#fbfcfb">
          <path
            d="m52.8 13.7c11.2 2.94 21.3 18.3 21.8 30.5 0 0 6.16-8.84-2.25-20.6-7.05-9.89-19.5-9.87-19.5-9.87z"
          />
          <path
            d="m52.2 64.8c-7.37 0.013-19.8-6.53-22.1-14 0 0-0.102 4.33 6.99 10.2 5.95 4.94 15.1 3.75 15.1 3.75z"
          />
          <g fill="none" stroke="#d2d8d8" stroke-width=".4px">
            <path d="m32.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m32.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m41.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m49.3 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m49.3 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m57.4 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m65.6 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m65.6 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m73.8 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />

            <path d="m81.9 18-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 27.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 36.9-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 46.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 55.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m81.9 65.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 13.3-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 22.7-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 32.1-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 41.6-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 51-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
            <path d="m90.1 60.4-2.72 4.71h-5.44l-2.72-4.71 2.72-4.71h5.44z" />
          </g>
        </g>
        <text fill="#ffffff" font-family="sans-serif">
          <tspan x="33.293" y="73.864" font-size="9.88px">+</tspan>
          <tspan x="43.531" y="72.609" font-size="6.38px">D</tspan>
        </text>
        <path d="m57.9 70.8h-4.67v-0.81h4.67z" fill="#fff" />
      </svg>
    `}};ui=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-pir-motion-sensor")],ui);let gi=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:26.2,x:135,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",y:35.8,x:135,number:2,signals:[le()]},{name:"OUT",y:45.5,x:135,number:3,signals:[ne(0)]}]}render(){return Pt`
      <svg
        width="35.826mm"
        height="19mm"
        version="1.1"
        viewBox="0 0 135.4 71.782"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="a">
            <path
              d="m15.336 49.725c-0.945 0.682-2.127 1.088-3.411 1.088-3.104 0-5.612-2.374-5.612-5.281s2.508-5.281 5.612-5.281c1.038 0 2.009 0.266 2.842 0.728 2.108 0.79 3.314 1.004 5.699 0.917 0 0-2.134 1.335-1.968 2.97 0.149 1.458 3.053 2.494 3.053 2.494-2.438 0.388-4.177 1.403-6.215 2.365z"
            />
          </clipPath>
        </defs>
        <path
          d="m115.3 0h-90.421v71.782h90.421zm-66.145 56.313c3.27 0 5.925 2.608 5.925 5.878s-2.655 5.924-5.925 5.924-5.925-2.654-5.925-5.924 2.655-5.878 5.925-5.878zm16.013-7.96c3.27 0 5.925 2.654 5.925 5.924s-2.655 5.925-5.925 5.925-5.924-2.655-5.924-5.925 2.654-5.924 5.924-5.924zm-33.698 1.324c2.29 0 4.149 1.859 4.149 4.148 0 2.29-1.859 4.149-4.149 4.149-2.289 0-4.148-1.859-4.148-4.149 0-2.289 1.859-4.148 4.148-4.148zm59.914 0.635c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-11.4-8.143c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-14.816-1.811c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm0-15.974c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm14.816-3.203c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-14.816-9.601c3.27 0 5.925 2.654 5.925 5.924s-2.655 5.925-5.925 5.925-5.924-2.655-5.924-5.925 2.654-5.924 5.924-5.924zm-33.698 2.228c2.29 0 4.149 1.859 4.149 4.148 0 2.29-1.859 4.149-4.149 4.149-2.289 0-4.148-1.859-4.148-4.149 0-2.289 1.859-4.148 4.148-4.148zm59.914 0.288c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698zm-48.154-5.701c0-1.635 2.963-4.729 5.925-4.729s5.925 3.094 5.925 4.729c0 3.27-2.655 7.121-5.925 7.121s-5.925-3.851-5.925-7.121z"
          fill="#0f3661"
        />
        <path
          d="m104.45 21.602v28.578h8.389v-28.578z"
          fill="none"
          stroke="#fff"
          stroke-width=".9px"
        />
        <g fill="#29261c">
          <path d="m105.37 42.328v6.554h6.554v-6.554z" />
          <path d="m105.37 32.604v6.554h6.554v-6.554z" />
          <path d="m105.37 22.865v6.554h6.554v-6.554z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m108.85 44.165c-0.382 0-0.749 0.151-1.019 0.422-0.27 0.27-0.422 0.636-0.422 1.018v1e-3c0 0.382 0.152 0.748 0.422 1.018s0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.189 0.424-0.423v-2.035c0-0.234-0.19-0.423-0.424-0.423h-26.131z"
          />
          <path
            d="m108.85 34.441c-0.382 0-0.749 0.151-1.019 0.422-0.27 0.27-0.422 0.636-0.422 1.018v1e-3c0 0.382 0.152 0.748 0.422 1.018s0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.189 0.424-0.423v-2.035c0-0.234-0.19-0.423-0.424-0.423h-26.131z"
          />
          <path
            d="m108.85 24.701c-0.382 0-0.749 0.152-1.019 0.422-0.27 0.271-0.422 0.637-0.422 1.019s0.152 0.749 0.422 1.019 0.637 0.422 1.019 0.422h26.131c0.234 0 0.424-0.19 0.424-0.423v-2.035c0-0.234-0.19-0.424-0.424-0.424h-26.131z"
          />
        </g>
        <path d="m96.494 43.126v-14.495h-4.787v14.495z" fill="#bbb9b9" />
        <path d="m96.661 39.537v-7.317h-5.121v7.317z" fill="#29261c" />
        <g fill="none" stroke="#bbb9b9" stroke-linejoin="miter">
          <circle cx="31.465" cy="17.956" r="4.149" stroke-width="2.5px" />
          <circle cx="31.465" cy="53.825" r="4.149" stroke-width="2.5px" />
          <circle cx="65.163" cy="54.277" r="5.925" stroke-width=".95px" />
          <circle cx="65.163" cy="17.504" r="5.925" stroke-width=".95px" />
          <circle cx="65.163" cy="28.082" r="3.698" stroke-width="2.23px" />
          <circle cx="65.163" cy="44.056" r="3.698" stroke-width="2.23px" />
          <circle cx="49.15" cy="62.191" r="5.925" stroke-width=".75px" />
          <circle cx="49.15" cy="9.591" r="5.925" stroke-width=".75px" />
        </g>
        <ellipse cx="48.82" cy="25.397" rx="6.375" ry="4.839" fill="#bababa" />
        <ellipse cx="48.82" cy="46.384" rx="6.375" ry="4.839" fill="#bbb9b9" />
        <circle cx="48.82" cy="25.397" r="2.612" fill="#eceee9" />
        <circle cx="48.82" cy="46.384" r="2.612" fill="#eceee9" />
        <path
          d="m48.82 25.397c-8.828 4.288-19.813 9.008-38 11.393"
          fill="none"
          stroke="#d6d8d4"
          stroke-linejoin="miter"
          stroke-width=".95px"
        />
        <path
          d="m48.82 45.922c-9.482-5.223-20.452-6.013-38-4.789"
          fill="none"
          stroke="#d8d8d3"
          stroke-linejoin="miter"
          stroke-width=".95px"
        />
        <path
          d="m9.023 43.72c-0.945 0.682-2.127 1.088-3.411 1.088-3.104 0-5.612-2.374-5.612-5.281s2.508-5.281 5.612-5.281c1.038 0 2.009 0.266 2.842 0.728 2.108 0.79 3.314 1.004 5.699 0.917 0 0-2.134 1.335-1.968 2.97 0.149 1.458 3.053 2.494 3.053 2.494-2.438 0.388-4.177 1.403-6.215 2.365z"
          fill="#151312"
        />
        <g transform="translate(-6.313,-6.005)" clip-path="url(#a)">
          <path
            d="m16.648 41.782c-0.617 0-1.284-0.077-1.895 0-2.276 0.284-4.755 1.806-6.429 3.282-0.732 0.645-1.351 1.332-1.854 2.171-0.172 0.287-0.363 0.562-0.527 0.852-8e-3 0.012-0.215 0.396-0.248 0.362-0.152-0.151-0.044-0.995-0.044-1.151 0-1.394 0.015-2.694 0.341-4.059 0.435-1.827 0.867-4.205 2.407-5.497 0.593-0.497 1.419-0.714 2.138-0.941 0.989-0.311 2.096-0.55 3.145-0.406 1.754 0.241 3.113 2.109 3.428 3.768 0.08 0.421-0.08 0.892-0.08 1.31"
            fill="#615a59"
          />
        </g>
        <g r="3.698" fill="none" stroke="#bbb9b9" stroke-linejoin="miter" stroke-width="2.23px">
          <circle cx="91.379" cy="17.794" />
          <circle cx="91.379" cy="54.01" />
        </g>

        <path
          d="m79.979 41.028c3.519 0 6.375 2.168 6.375 4.839 0 2.67-2.856 4.839-6.375 4.839-3.518 0-6.375-2.169-6.375-4.839 0-2.671 2.857-4.839 6.375-4.839zm0 1.141c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698z"
          fill="#bbb9b9"
        />
        <path
          d="m79.979 20.04c3.519 0 6.375 2.169 6.375 4.839 0 2.671-2.856 4.839-6.375 4.839-3.518 0-6.375-2.168-6.375-4.839 0-2.67 2.857-4.839 6.375-4.839zm0 1.141c2.041 0 3.698 1.657 3.698 3.698s-1.657 3.698-3.698 3.698-3.698-1.657-3.698-3.698 1.657-3.698 3.698-3.698z"
          fill="#bbb9b9"
        />
        <path
          d="m89.905 44.462v-17.142h8.391v17.142z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".65px"
        />
        <text fill="#fffefe" font-family="sans-serif" transform="rotate(-90)">
          <tspan x="-39.297 -37.036 -34.776" y="95.418" font-size="3.735px">103</tspan>
          <tspan x="-61.485" y="111.57" font-size="9.778px">S</tspan>
          <tspan x="-15.512" y="111.573" font-size="15.828px">-</tspan>
        </text>
      </svg>
    `}};gi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-ntc-temperature-sensor")],gi);let yi=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:17.8,x:87,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",y:27.5,x:87,number:2,signals:[le()]},{name:"OUT",y:37.5,x:87,number:3,signals:[]}]}render(){return Pt`
      <svg
        width="23.4mm"
        height="20.943mm"
        version="1.1"
        viewBox="0 0 88.4 79.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m71.2 0h-71.2v55.6h71.2zm-62.6 41.4c2.65 0 4.79 2.15 4.79 4.79 0 2.64-2.15 4.79-4.79 4.79-2.64 0-4.79-2.15-4.79-4.79 0-2.65 2.15-4.79 4.79-4.79zm0-36.7c2.65 0 4.79 2.15 4.79 4.79 0 2.64-2.15 4.79-4.79 4.79-2.64 0-4.79-2.15-4.79-4.79 0-2.65 2.15-4.79 4.79-4.79z"
          fill="#19365e"
        />
        <g transform="rotate(-90 31 151)">
          <text
            x="132.20599"
            y="184.995"
            fill="#fffefe"
            font-family="sans-serif"
            font-size="10.3px"
          >
            s
          </text>
        </g>
        <circle cx="22.6" cy="46.9" r="3.23" fill="#bbb9b9" />
        <circle cx="33.4" cy="46.9" r="3.23" fill="#bbb9b9" />
        <path d="m57.5 13.5v28.6h8.39v-28.6z" fill="none" stroke="#fff" stroke-width=".9px" />
        <g fill="#29261c">
          <path d="m58.4 34.2v6.55h6.55v-6.55z" />
          <path d="m58.4 24.5v6.55h6.55v-6.55z" />
          <path d="m58.4 14.8v6.56h6.55v-6.56z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m61.9 36.1c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 26.3c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 16.6c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.636-0.422 1.02v1e-3c0 0.382 0.152 0.748 0.422 1.02s0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.189-0.423-0.423-0.423h-26.1z"
          />
        </g>
        <g
          transform="translate(-6.88 -4.2)"
          fill="#0e0f0d"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.83px"
        >
          <circle cx="29.8" cy="22.6" r="2.59" />
          <circle cx="29.8" cy="12.2" r="2.59" />
          <circle cx="29.8" cy="41.3" r="2.59" />
          <circle cx="39.9" cy="22.6" r="2.59" />
          <circle cx="39.9" cy="12.2" r="2.59" />
          <circle cx="39.9" cy="41.3" r="2.59" />
        </g>
        <circle
          cx="8.58"
          cy="9.42"
          r="4.79"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.1px"
        />
        <circle
          cx="8.58"
          cy="46.2"
          r="4.79"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.1px"
        />
        <g transform="translate(-6.88 -4.2)">
          <rect x="26.5" y="59.8" width="16.4" height="20.9" fill="#d3d9de" />
          <circle cx="34.8" cy="64.3" r="2.37" fill="#a8b2c8" />
          <path
            d="m40.7 62.8h-2.75v19.2c0 0.364 0.145 0.713 0.403 0.971 0.257 0.258 0.607 0.402 0.971 0.402h1e-3c0.364 0 0.714-0.144 0.971-0.402 0.258-0.258 0.403-0.607 0.403-0.971v-19.2z"
            fill="#b9c5de"
          />
          <rect x="37.9" y="62.8" width="2.75" height="17.9" fill="#a8b2c8" />
          <path
            d="m32.4 69.5h-2.75v12.5c0 0.364 0.145 0.713 0.402 0.971 0.258 0.258 0.607 0.402 0.972 0.402s0.714-0.144 0.972-0.402c0.257-0.258 0.402-0.607 0.402-0.971v-12.5z"
            fill="#b9c5de"
          />
          <g fill="#a8b2c8">
            <rect x="29.6" y="69.5" width="2.75" height="11.2" />
            <path
              d="m35.5 72.2c0.142 0 0.277-0.056 0.377-0.156 0.101-0.1 0.157-0.236 0.157-0.377v-1.68c0-0.142-0.056-0.277-0.157-0.377-0.1-0.1-0.235-0.157-0.377-0.157h-3.97c-0.364 0-0.714 0.145-0.971 0.403-0.258 0.257-0.403 0.607-0.403 0.971v1e-3c0 0.364 0.145 0.713 0.403 0.971 0.257 0.258 0.607 0.402 0.971 0.402h3.97z"
            />
            <path
              d="m38.8 65.5c0.141 0 0.277-0.056 0.377-0.156s0.157-0.236 0.157-0.377v-1.68c0-0.142-0.057-0.277-0.157-0.377-0.1-0.101-0.236-0.157-0.377-0.157h-3.97c-0.364 0-0.714 0.145-0.972 0.403-0.257 0.257-0.402 0.607-0.402 0.971v1e-3c0 0.364 0.145 0.713 0.402 0.971 0.258 0.258 0.608 0.402 0.972 0.402h3.97z"
            />
          </g>
        </g>
        <path
          d="m31.8 15h2.49v-6.79c0-0.33-0.131-0.647-0.365-0.88-0.233-0.234-0.55-0.365-0.88-0.365h-1e-3c-0.33 0-0.647 0.131-0.88 0.365-0.234 0.233-0.365 0.55-0.365 0.88z"
          fill="#d2d2d2"
        />
        <path
          d="m21.7 15h2.49v-6.79c0-0.33-0.131-0.647-0.365-0.88-0.233-0.234-0.55-0.365-0.88-0.365h-1e-3c-0.33 0-0.647 0.131-0.88 0.365-0.234 0.233-0.365 0.55-0.365 0.88z"
          fill="#d2d2d2"
        />
        <g transform="translate(-6.88 -4.2)">
          <rect x="47" y="29.2" width="13.4" height="4.43" fill="#bbb9b9" />
          <rect x="50.3" y="29" width="6.77" height="4.74" fill="#29261c" />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <rect x="47" y="20" width="13.4" height="4.43" fill="#bbb9b9" />
          <rect x="50.3" y="19.9" width="6.77" height="4.74" fill="#29261c" />
        </g>
        <path
          d="m38.9 23.3h15.9v7.76h-15.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".6px"
        />
        <path
          d="m38.9 14.1h15.9v7.76h-15.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".6px"
        />
        <path
          d="m37.4 15.4h-19v19.1c0 5.24 4.24 9.48 9.48 9.48 5.24 0 9.48-4.24 9.48-9.48z"
          fill="#fdfefe"
        />
        <clipPath id="c">
          <path d="m44.3 19.6h-19v19.1c0 5.24 4.24 9.48 9.48 9.48 5.24 0 9.48-4.24 9.48-9.48z" />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#c)">
          <path
            d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            fill="#fff"
          />
        </g>
        <path
          d="m35.4 15.4h-15v18.8c0 1.98 0.789 3.89 2.19 5.29 1.4 1.4 3.31 2.19 5.29 2.19s3.89-0.788 5.29-2.19c1.4-1.4 2.19-3.31 2.19-5.29z"
          fill="#d5d5d5"
        />
        <clipPath id="b">
          <path
            d="m42.3 19.6h-15v18.8c0 1.98 0.789 3.89 2.19 5.29 1.4 1.4 3.31 2.19 5.29 2.19s3.89-0.788 5.29-2.19c1.4-1.4 2.19-3.31 2.19-5.29z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#b)">
          <g fill="#b1b1b1">
            <path d="m31.4 29.6v-10h-3.02v13.7h12.9l-3.67-3.65z" />
            <path d="m41.3 30.4-3.18-3.2v-7.56h3.18z" />
          </g>
          <path
            d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            fill="#e2e2e2"
          />
          <clipPath id="a">
            <path
              d="m30.6 18.1c0 8.12-1.48 16.2-0.263 24.3 0.388 2.58 1.14 4.94 2.59 7.11 0.478 0.718 0.956 1.5 1.51 2.16 0.201 0.236 0.416 0.375 0.672 0.529 0.102 0.061 0.438 0.157 0.319 0.157-3.1 0-5.53-2.5-7.49-4.64-4.21-4.59-5.36-8.3-5.88-14.5-0.078-0.921-0.402-1.9-0.353-2.81 0.073-1.36 0.578-2.79 0.921-4.11 0.564-2.16 1.08-4.18 2.51-5.92 0.417-0.508 0.545-1.27 1.08-1.69 0.624-0.494 2.43-0.722 3.1-0.28 0.189 0.124 0.829 0.279 0.829 0.56"
            />
          </clipPath>
          <g clip-path="url(#a)">
            <path d="m31.4 29.6v-10h-3.02v13.7h12.9l-3.67-3.65z" fill="#c7c7c7" />
          </g>
        </g>
        <rect x="17.3" y="11.7" width="21.3" height="3.68" fill="#fdfefe" />
        <path
          d="m64 9.39h-4.68"
          fill="none"
          stroke="#fffefe"
          stroke-linejoin="miter"
          stroke-width=".85px"
        />
      </svg>
    `}};yi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-heart-beat-sensor")],yi);let mi=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"GND",y:18,x:88,number:1,signals:[{type:"power",signal:"GND"}]},{name:"VCC",y:27.8,x:88,number:2,signals:[le()]},{name:"OUT",y:37.5,x:88,number:3,signals:[]}]}render(){return Pt`
      <svg
        width="23.4mm"
        height="14.7mm"
        version="1.1"
        viewBox="0 0 88.4 55.6"
        font-family="sans-serif"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m71.2 0h-71.2v55.6h71.2zm-54.1 43.8c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96zm13.8-3.78c2.03 0 3.68 1.7 3.68 3.78s-1.65 3.78-3.68 3.78-3.68-1.7-3.68-3.78 1.65-3.78 3.68-3.78zm0-31.5c2.03 0 3.68 1.7 3.68 3.78 0 2.09-1.65 3.78-3.68 3.78s-3.68-1.7-3.68-3.78c0-2.09 1.65-3.78 3.68-3.78zm-13.8-6.6c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96z"
          fill="#19365e"
        />
        <clipPath id="g">
          <path
            d="m78.1 4.2h-71.2v55.6h71.2zm-54.1 43.8c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96zm13.8-3.78c2.03 0 3.68 1.7 3.68 3.78s-1.65 3.78-3.68 3.78-3.68-1.7-3.68-3.78 1.65-3.78 3.68-3.78zm0-31.5c2.03 0 3.68 1.7 3.68 3.78 0 2.09-1.65 3.78-3.68 3.78s-3.68-1.7-3.68-3.78c0-2.09 1.65-3.78 3.68-3.78zm-13.8-6.6c2.66 0 4.82 2.22 4.82 4.96s-2.16 4.96-4.82 4.96-4.82-2.22-4.82-4.96 2.16-4.96 4.82-4.96z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#g)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#1b2f4c"
          />
        </g>
        <text
          transform="rotate(-90 31 151)"
          x="132.20"
          y="184.995"
          fill="#fffefe"
          font-size="10.3px"
        >
          s
        </text>
        <g fill="#bbb9b9">
          <ellipse cx="18.5" cy="18.5" rx="5.21" ry="3.44" />
          <ellipse cx="42.3" cy="18.5" rx="5.21" ry="3.44" />
          <ellipse cx="18.5" cy="37.2" rx="5.21" ry="3.44" />
          <ellipse cx="42.3" cy="37.2" rx="5.21" ry="3.44" />
        </g>
        <path d="m57.5 13.5v28.6h8.39v-28.6z" fill="none" stroke="#fff" stroke-width=".9px" />
        <g fill="#29261c">
          <path d="m58.4 34.2v6.55h6.55v-6.55z" />
          <path d="m58.4 24.5v6.55h6.55v-6.55z" />
          <path d="m58.4 14.8v6.56h6.55v-6.56z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m61.9 36.1c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 26.3c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.637-0.422 1.02 0.152 0.748 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.04c0-0.233-0.189-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m61.9 16.6c-0.382 0-0.748 0.152-1.02 0.422s-0.422 0.636-0.422 1.02v1e-3c0 0.382 0.152 0.748 0.422 1.02s0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.189-0.423-0.423-0.423h-26.1z"
          />
        </g>
        <g fill="#0e0f0d" stroke="#bbb9b9" stroke-linejoin="miter" stroke-width="1.83px" r="2.59">
          <circle cx="42.2" cy="18.4" />
          <circle cx="18.4" cy="18.4" />
          <circle cx="18.4" cy="37.1" />
          <circle cx="42.2" cy="37.1" />
        </g>
        <ellipse
          cx="17.1"
          cy="48.7"
          rx="4.82"
          ry="4.96"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.12px"
        />
        <path
          d="m30.8 39.6c-2.26 0-4.1 1.88-4.1 4.21 0 2.33 1.84 4.21 4.1 4.21s4.1-1.88 4.1-4.21c0-2.33-1.84-4.21-4.1-4.21zm0 0.855c1.8 0 3.25 1.51 3.25 3.36s-1.45 3.36-3.25 3.36-3.25-1.51-3.25-3.36 1.45-3.36 3.25-3.36z"
          fill="#bbb9b9"
        />
        <clipPath id="f">
          <path
            d="m37.7 43.8c-2.26 0-4.1 1.88-4.1 4.21 0 2.33 1.84 4.21 4.1 4.21s4.1-1.88 4.1-4.21c0-2.33-1.84-4.21-4.1-4.21zm0 0.855c1.8 0 3.25 1.51 3.25 3.36s-1.45 3.36-3.25 3.36-3.25-1.51-3.25-3.36 1.45-3.36 3.25-3.36z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#f)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#8e8e8e"
          />
        </g>
        <ellipse
          cx="30.8"
          cy="12.3"
          rx="3.68"
          ry="3.78"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width=".86px"
        />
        <ellipse
          cx="17.1"
          cy="6.86"
          rx="4.82"
          ry="4.96"
          fill="none"
          stroke="#bbb9b9"
          stroke-linejoin="miter"
          stroke-width="1.12px"
        />
        <path
          d="m24.6 33.6-1.62-1.89s-3.45 2.95-5.16 4.41c-0.251 0.215-0.407 0.521-0.432 0.85-0.026 0.329 0.08 0.655 0.295 0.906v1e-3c0.215 0.25 0.521 0.406 0.85 0.431 0.329 0.026 0.655-0.08 0.906-0.295 1.72-1.47 5.16-4.42 5.16-4.42z"
          fill="#d2d2d2"
        />
        <clipPath id="e">
          <path
            d="m31.5 37.8-1.62-1.89s-3.45 2.95-5.16 4.41c-0.251 0.215-0.407 0.521-0.432 0.85-0.026 0.329 0.08 0.655 0.295 0.906v1e-3c0.215 0.25 0.521 0.406 0.85 0.431 0.329 0.026 0.655-0.08 0.906-0.295 1.72-1.47 5.16-4.42 5.16-4.42z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#e)">
          <path
            d="m31 36.9c-0.189 0.025-0.301 0.185-0.449 0.294-0.418 0.309-0.808 0.635-1.19 0.985-1 0.927-2.03 1.82-3.05 2.73-0.259 0.231-0.576 0.388-0.836 0.617-0.587 0.517-1.13 1.14-1.91 1.35-0.089 0.025-0.25 0.124-0.334 0.124-0.057 0 0.112-6e-3 0.168 0 0.093 9e-3 0.179 0.032 0.275 0.037 0.342 0.017 0.701 0.016 1.04-5e-3 0.994-0.062 2.05-0.419 3.01-0.675 1.54-0.411 2.9-1.01 4.09-2.12 0.52-0.486 0.938-1.08 1.38-1.64 0.582-0.723 1.1-1.47 1.41-2.35 0.018-0.052-0.326-0.106-0.365-0.114-0.472-0.095-0.911-0.123-1.4-0.123-0.655 0-1.44 0.626-2 0.894-0.412 0.196-1.25 0.443-1.56 0.866"
            fill="#ececec"
          />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <path d="m56.6 33.8v10.9h3.6v-10.9z" fill="#bbb9b9" />
          <path d="m56.5 36.5v5.5h3.85v-5.5z" fill="#29261c" />
        </g>
        <g transform="translate(-6.88 -4.2)">
          <path d="m56.6 19.7v10.9h3.6v-10.9z" fill="#bbb9b9" />
          <clipPath id="d">
            <path d="m56.6 19.7v10.9h3.6v-10.9z" />
          </clipPath>
          <g clip-path="url(#d)">
            <path
              d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
              fill="#9c9b9b"
            />
          </g>
          <path d="m56.5 22.4v5.5h3.85v-5.5z" fill="#29261c" />
          <clipPath id="c">
            <path d="m56.5 22.4v5.5h3.85v-5.5z" />
          </clipPath>
          <g clip-path="url(#c)">
            <path
              d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            />
          </g>
        </g>
        <path
          d="m54.7 28.6v12.9h-6.3v-12.9z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="miter"
          stroke-width=".49px"
        />
        <path d="m48.2 14.3v13.4h6.79v-13.4zm0.489 5.11v-4.62h5.81v4.62 7.76h-5.81z" fill="#fff" />
        <clipPath id="b">
          <path d="m55 18.5v13.4h6.79v-13.4zm0.489 5.11v-4.62h5.81v4.62 7.76h-5.81z" />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#b)">
          <path
            d="m49.8 12.7c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.255 0.299 0.705 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.255 0.334-0.705 0.079-1-1.83-2.14-8.55-9.99-10.4-12.1z"
            fill="#d4d4d4"
          />
        </g>
        <path
          d="m61.6 10.4v-4.68"
          fill="none"
          stroke="#fffefe"
          stroke-linejoin="miter"
          stroke-width=".85px"
        />
        <g fill="#a19e9e">
          <circle cx="4.64" cy="41.4" r="2.88" />
          <circle cx="4.64" cy="14.2" r="2.88" />
          <circle cx="51.4" cy="8.74" r="2.88" />
          <circle cx="51.4" cy="45.6" r="2.88" />
        </g>
        <g fill="#29261c">
          <circle cx="51.4" cy="45.6" r="1.47" />
          <circle cx="4.64" cy="41.4" r="1.47" />
          <circle cx="4.64" cy="14.2" r="1.47" />
          <circle cx="51.4" cy="8.74" r="1.47" />
        </g>
        <path
          d="m45.4 12.3 1.65 1.86s3.4-3 5.09-4.5c0.247-0.219 0.397-0.527 0.417-0.857 0.02-0.329-0.091-0.653-0.31-0.901h-1e-3c-0.218-0.247-0.527-0.398-0.856-0.418-0.33-0.02-0.654 0.092-0.901 0.311-1.69 1.5-5.09 4.5-5.09 4.5z"
          fill="#d2d2d2"
        />
        <clipPath id="a">
          <path
            d="m52.2 16.5 1.65 1.86s3.4-3 5.09-4.5c0.247-0.219 0.397-0.527 0.417-0.857 0.02-0.329-0.091-0.653-0.31-0.901h-1e-3c-0.218-0.247-0.527-0.398-0.856-0.418-0.33-0.02-0.654 0.092-0.901 0.311-1.69 1.5-5.09 4.5-5.09 4.5z"
          />
        </clipPath>
        <g transform="translate(-6.88 -4.2)" clip-path="url(#a)">
          <path
            d="m52.8 17.4c0.188-0.028 0.297-0.19 0.444-0.302 0.413-0.316 0.797-0.648 1.17-1 0.986-0.943 2-1.86 3-2.78 0.255-0.235 0.569-0.398 0.825-0.63 0.579-0.527 1.11-1.16 1.89-1.38 0.088-0.026 0.248-0.127 0.332-0.129 0.057-1e-3 -0.112 8e-3 -0.168 3e-3 -0.093-7e-3 -0.18-0.03-0.276-0.033-0.342-0.011-0.701-4e-3 -1.04 0.023-0.993 0.079-2.04 0.453-2.99 0.725-1.53 0.437-2.89 1.06-4.05 2.19-0.512 0.494-0.92 1.1-1.36 1.66-0.569 0.733-1.08 1.49-1.37 2.37-0.017 0.053 0.328 0.101 0.367 0.108 0.474 0.088 0.913 0.107 1.4 0.099 0.654-0.011 1.42-0.649 1.98-0.927"
            fill="#ececec"
          />
        </g>
        <path
          d="m42.2 6.32c-0.256-0.299-0.705-0.334-1-0.078-3.3 2.82-20.7 17.7-24 20.5-0.299 0.255-0.334 0.705-0.078 1 1.83 2.14 8.55 9.99 10.4 12.1 0.256 0.299 0.706 0.334 1 0.078 3.3-2.82 20.7-17.7 24-20.5 0.299-0.256 0.334-0.705 0.078-1-1.83-2.14-8.55-9.99-10.4-12.1z"
          fill="#4a91ce"
        />
      </svg>
    `}};mi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-tilt-switch")],mi);var xi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let vi=class extends qt{constructor(){super(...arguments),this.ledPower=!1,this.ledSignal=!1,this.pinInfo=[{name:"VCC",y:14.6,x:199,number:1,signals:[le()]},{name:"GND",y:24.3,x:199,number:2,signals:[{type:"power",signal:"GND"}]},{name:"DOUT",y:34,x:199,number:3,signals:[]},{name:"AOUT",y:43.7,x:199,number:4,signals:[]}]}render(){const{ledPower:t,ledSignal:e}=this;return Pt`
      <svg
        width="52.904mm"
        heigth="16.267mm"
        version="1.1"
        viewBox="0 0 200 61.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m180 1.49e-7h-136v61.5h136zm-129 52c1.9 0 3.44 1.5 3.44 3.34s-1.54 3.34-3.44 3.34-3.44-1.5-3.44-3.34 1.54-3.34 3.44-3.34zm98.3-29.8c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55zm-98.3-19.4c1.9 0 3.44 1.5 3.44 3.34 0 1.84-1.54 3.34-3.44 3.34s-3.44-1.5-3.44-3.34c0-1.84 1.54-3.34 3.44-3.34z"
          fill="#1c2546"
        />
        <rect
          x="45.5"
          y="20.1"
          width="11.2"
          height="22.2"
          fill="none"
          stroke="#fff"
          stroke-width="1.08px"
        />
        <circle cx="51.1" cy="25.6" r="3.14" fill="#dae3eb" />
        <circle cx="51.1" cy="36.8" r="3.14" fill="#dae3eb" />
        <path
          d="m51.1 25.7c0-0.199-0.079-0.39-0.219-0.53-0.141-0.141-0.332-0.22-0.53-0.22h-13.2v1.5h13.2c0.198 0 0.389-0.079 0.53-0.219 0.14-0.141 0.219-0.332 0.219-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m51.1 36.7c0-0.198-0.079-0.389-0.219-0.53-0.141-0.14-0.332-0.219-0.53-0.219h-13.2v1.5h13.2c0.198 0 0.389-0.079 0.53-0.22 0.14-0.14 0.219-0.331 0.219-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m35.2 20.1h-25.2c-5.49 0-9.94 4.45-9.94 9.94v1e-3c0 5.49 4.45 9.94 9.94 9.94h25.2z"
          fill="#29261c"
        />
        <clipPath id="c">
          <path
            d="m35.18 20.14h-25.2c-5.49 0-9.94 4.45-9.94 9.94v1e-3c0 5.49 4.45 9.94 9.94 9.94h25.2z"
          />
        </clipPath>
        <g clip-path="url(#c)">
          <path
            d="m37.68 21.94c-12.6 0-25.1-0.227-37.7 0.917-0.196 0.018 0 4.25 0 4.25 12.8-1.41 25-1.08 37.7-0.669z"
            fill="#47434d"
          />
        </g>
        <rect x="32.6" y="17.9" width="5.06" height="25.7" fill="#29261c" />
        <clipPath id="b">
          <rect x="32.68" y="17.94" width="5.06" height="25.7" />
        </clipPath>
        <g clip-path="url(#b)">
          <path
            d="m51.98 20.84c-12.6 0-25.1-0.228-37.7 0.916-0.195 0.018 0 4.25 0 4.25 12.8-1.41 25-1.08 37.7-0.669z"
            fill="#47434d"
          />
        </g>
        <g fill="none" stroke-width="1.08px">
          <g stroke="#fff">
            <path d="m70.2 32.4h-7.47v9.67h7.47" />
            <path d="m136 10.4v-7.47h-9.67v7.47" />
            <path d="m155 12.8h7.47v-9.67h-7.47" />
            <path d="m155 55.8h7.47v-9.67h-7.47" />
            <path d="m136 43v-7.47h-9.67v7.47" />
            <path d="m70.2 45.2h-7.47v9.67h7.47" />
            <path d="m75.1 32.4h7.47v9.67h-7.47" />
            <path d="m136 15.2v7.47h-9.67v-7.47" />
            <path d="m151 12.8h-7.47v-9.67h7.47" />
            <path d="m151 55.8h-7.47v-9.67h7.47" />
            <path d="m136 47.9v7.47h-9.67v-7.47" />
            <path d="m75.1 45.2h7.47v9.67h-7.47" />
            <path
              d="m75.1 20h4.46c2.67 0 4.83 2.16 4.83 4.84v1e-3c0 2.67-2.16 4.84-4.83 4.84h-4.46"
            />
            <path
              d="m75.1 6.62h4.46c2.67 0 4.83 2.16 4.83 4.83v1e-3c0 2.67-2.16 4.84-4.83 4.84h-4.46"
            />
            <path
              d="m70.2 20h-4.46c-2.67 0-4.83 2.16-4.83 4.84v1e-3c0 2.67 2.16 4.84 4.83 4.84h4.46"
            />
            <path
              d="m70.2 6.62h-4.46c-2.67 0-4.83 2.16-4.83 4.83v1e-3c0 2.67 2.16 4.84 4.83 4.84h4.46"
            />
          </g>
          <ellipse cx="51.1" cy="6.11" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <ellipse cx="51.1" cy="55.4" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <g stroke="#fff">
            <path d="m50.6 44.7v4.75" />
            <path d="m50.6 12.1v4.75" />
            <path d="m53 14.5h-4.75" />
          </g>
        </g>
        <g fill="#dae3eb">
          <rect x="64.3" y="8.69" width="16.7" height="5.52" />
          <rect x="64.3" y="22" width="16.7" height="5.52" />
          <rect x="64.3" y="34.5" width="16.7" height="5.52" />
        </g>
        <rect x="68.4" y="34.3" width="8.43" height="5.9" fill="#29261c" />
        <path d="m134 21.2v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m134 17v-8.43h-5.9v8.43z" fill="#29261c" />

        <!-- LEDs -->
        <rect x="145" y="5.23" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="149" y="5.04" width="8.43" height="5.9" fill="#fffefe" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${t&&At`<circle cx="153.2" cy="7.5" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}
        <rect x="145" y="48.3" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="149" y="48.1" width="8.43" height="5.9" fill="#fffefe" />
        ${e&&At`<circle cx="153.2" cy="51.3" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <path d="m134 53.8v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m134 49.7v-8.43h-5.9v8.43z" fill="#29261c" />
        <rect x="64.3" y="47.5" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="68.4" y="8.5" width="8.43" height="5.9" fill="#907463" />
        <rect x="68.4" y="21.8" width="8.43" height="5.9" fill="#907463" />
        <rect x="68.4" y="47.3" width="8.43" height="5.9" fill="#29261c" />
        <g fill="#dae3eb">
          <path
            d="m99.2 34.6h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 40.4h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 46.2h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m99.2 52h-9.67c-0.406 0-0.796 0.162-1.08 0.449-0.288 0.287-0.449 0.677-0.449 1.08v1e-3c0 0.406 0.161 0.796 0.449 1.08 0.287 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m111 55.1h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 49.3h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 43.5h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m111 37.7h9.67c0.406 0 0.796-0.161 1.08-0.448 0.287-0.288 0.448-0.678 0.448-1.08v-1e-3c0-0.406-0.161-0.796-0.448-1.08-0.288-0.287-0.678-0.449-1.08-0.449h-9.67z"
          />
        </g>
        <rect x="97.6" y="33.2" width="16.1" height="23.3" fill="#29261c" />
        <rect x="89.4" width="32.1" height="32.1" fill="#466fb5" />
        <g fill="none" stroke="#2e60aa" stroke-width="1.63px">
          <path d="m95.6 7.35 13.9 17.1" />
          <path d="m112 8.62-14.9 13.2" />
          <path d="m114 12.7-19.2 5.13" />
          <path d="m114 17.3-19.5-4.06" />
          <path d="m113 21.8-5.14-4.58" />
          <path d="m105 27.6v-9.83" />
          <path d="m100 24.7 3.14-5.18" />
        </g>
        <circle cx="105" cy="16" r="6.56" fill="#bcc2d5" />
        <clipPath id="a">
          <circle cx="105.08" cy="16.04" r="6.56" />
        </clipPath>
        <g clip-path="url(#a)" fill="none" stroke="#3f3c40" stroke-width="2.5px">
          <path d="m105.08 6.74v18.6" />
          <path d="m115.08 16.04h-18.6" />
        </g>
        <path
          d="m149 19.8c5.5 0 9.96 4.46 9.96 9.96s-4.46 9.96-9.96 9.96-9.96-4.46-9.96-9.96 4.46-9.96 9.96-9.96zm0 2.4c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55z"
          fill="#d4d0d1"
        />
        <path
          d="m169.1 10.2v38.6h8.39v-38.6z"
          fill="#1c2546"
          stroke="#fff"
          stroke-linejoin="round"
          stroke-width=".9px"
        />
        <g fill="#29261c">
          <path d="m170 40.75v6.55h6.55v-6.55z" />
          <path d="m170 31.05v6.55h6.55v-6.55z" />
          <path d="m170 21.25v6.55h6.55v-6.55z" />
          <path d="m170 11.55v6.55h6.55v-6.55z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m173 42.55c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.271-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
          <path
            d="m173 32.85c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.271-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
          <path
            d="m173 23.15c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.27-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />

          <path
            d="m173 13.45c-0.382 0-0.748 0.152-1.02 0.422-0.271 0.27-0.422 0.637-0.422 1.02s0.151 0.749 0.422 1.02c0.27 0.27 0.636 0.422 1.02 0.422h26.1c0.234 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.189-0.424-0.423-0.424h-26.1z"
          />
        </g>
        <text fill="#fffefe" font-family="sans-serif" font-size="8px">
          <tspan x="171" y="10">+</tspan>
          <tspan x="164.3" y="26.5">-</tspan>
          <tspan x="162.5" y="36.9">D</tspan>
          <tspan x="171" y="56">A</tspan>
        </text>
      </svg>
    `}};xi([Jt()],vi.prototype,"ledPower",void 0),xi([Jt()],vi.prototype,"ledSignal",void 0),vi=xi([Qt("wokwi-flame-sensor")],vi);let wi=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"AOUT",y:16.5,x:137,number:1,signals:[]},{name:"DOUT",y:26.4,x:137,number:2,signals:[]},{name:"GND",y:36.5,x:137,number:3,signals:[{type:"power",signal:"GND"}]},{name:"VCC",y:46.2,x:137,number:4,signals:[le()]}]}render(){return Pt`
      <svg
        width="36.232mm"
        height="16.617mm"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 137 59.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="a" width="4.1" height="4.1" patternUnits="userSpaceOnUse">
            <path
              d="m0 0v4.09h0.4v-0.85l0.42 0.381v0.469h0.4v-0.0996l0.109 0.0996h0.711v-0.799l0.42 0.379v0.42h0.398v-0.0488l0.0547 0.0488h0.766v-0.75l0.42 0.381v0.369h0.4v-4.09h-0.4v0.311l-0.334-0.311h-0.598l0.111 0.0996v0.9l-0.42-0.379v-0.621h-0.398v0.25l-0.277-0.25h-0.6l0.0566 0.0508v0.9l-0.42-0.381v-0.57h-0.4v0.201l-0.223-0.201zm0.4 0.359 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.391v0.889l-0.42-0.379zm1.64 0.0605 0.42 0.379v0.891l-0.42-0.381zm-2.46 0.639 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.381v0.898l-0.42-0.379zm-2.46 0.641 0.42 0.379v0.9l-0.42-0.379zm1.64 0.0488 0.42 0.381v0.9l-0.42-0.381zm1.64 0.0508 0.42 0.379v0.9l-0.42-0.379zm-2.46 0.65 0.42 0.379v0.9l-0.42-0.379zm1.64 0.0488 0.42 0.381v0.9l-0.42-0.381z"
              fill="#949392"
            />
          </pattern>
          <g id="pin">
            <path
              fill="#c6bf95"
              d="m29 4.6c0.382 0 0.748-0.152 1.02-0.422s0.422-0.636 0.422-1.02v-1e-3c0-0.382-0.152-0.748-0.422-1.02s-0.636-0.422-1.02-0.422h-26.1c-0.234 0-0.423 0.189-0.423 0.423v2.04c0 0.234 0.189 0.423 0.423 0.423h26.1z"
            />
            <rect x="0" y="0" width="6.9" height="6.9" />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m113 0h-113v59.5h113zm-1.6 53.2c0 2.62-2.12 4.74-4.74 4.74s-4.74-2.12-4.74-4.74c0-2.62 2.12-4.74 4.74-4.74s4.74 2.12 4.74 4.74zm-110 0c0 2.62 2.12 4.74 4.74 4.74 2.62 0 4.74-2.12 4.74-4.74 0-2.62-2.12-4.74-4.74-4.74-2.62 0-4.74 2.12-4.74 4.74zm105-51.6c2.62 0 4.74 2.12 4.74 4.74 0 2.62-2.12 4.74-4.74 4.74s-4.74-2.12-4.74-4.74c0-2.62 2.12-4.74 4.74-4.74zm-101 0c-2.62 0-4.74 2.12-4.74 4.74 0 2.62 2.12 4.74 4.74 4.74 2.62 0 4.74-2.12 4.74-4.74 0-2.62-2.12-4.74-4.74-4.74z"
          fill="#0664af"
        />

        <!-- Pins -->
        <use xlink:href="#pin" x="107" y="12" />
        <use xlink:href="#pin" x="107" y="21.3" />
        <use xlink:href="#pin" x="107" y="31.1" />
        <use xlink:href="#pin" x="107" y="40.9" />

        <!-- Sensor -->
        <circle cx="47.7" cy="29.8" r="31.2" fill="none" stroke="#fff" stroke-width=".4px" />
        <circle cx="47.7" cy="29.8" r="28.8" fill="#dedede" />
        <circle cx="47.7" cy="29.8" r="25.8" fill="#d0ccc4" />
        <circle cx="47.7" cy="29.8" r="21.4" fill="#bab3ad" />
        <circle cx="47.7" cy="29.8" r="21.4" fill="url(#a)" />

        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="94.656" y="16.729">AOUT</tspan>
          <tspan x="94.656" y="26.098">DOUT</tspan>
          <tspan x="94.656" y="35.911">GND</tspan>
          <tspan x="94.656" y="45.696">VCC</tspan>
        </text>
      </svg>
    `}};wi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-gas-sensor")],wi);var bi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let ki=class extends qt{constructor(){super(...arguments),this.led1=!1,this.ledPower=!1,this.resetPressed=!1,this.pinInfo=[{name:"GND.1",x:218.5,y:23.3,signals:[{type:"power",signal:"GND"}]},{name:"VCC.1",x:218.5,y:32.9,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"PB4",x:218.5,y:42.5,signals:[ne(2),{type:"pwm"}]},{name:"PB5",x:218.5,y:52.2,signals:[ne(0)]},{name:"PB3",x:218.5,y:61.7,signals:[ne(3)]},{name:"PB2",x:218.5,y:71.2,signals:[ae("SCK"),se("SCL"),ne(1)]},{name:"PB1",x:218.5,y:80.9,signals:[ae("MISO"),{type:"pwm"}]},{name:"PB0",x:218.5,y:90.5,signals:[ae("MOSI"),se("SDA"),{type:"pwm"}]},{name:"VIN",x:132.7,y:8.1,signals:[{type:"power",signal:"VCC"}]},{name:"GND.2",x:142.9,y:8.1,signals:[{type:"power",signal:"GND"}]},{name:"VCC.2",x:153,y:8.1,signals:[{type:"power",signal:"VCC",voltage:5}]}]}static get styles(){return et`
      text {
        font-size: 2px;
        font-family: monospace;
        user-select: none;
      }
      circle[tabindex]:hover,
      circle[tabindex]:focus {
        stroke: #eee;
        outline: none;
      }
    `}render(){const{ledPower:t,led1:e}=this;return Pt`
      <svg
        width="64mm"
        height="30mm"
        version="1.1"
        viewBox="0 0 64 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="ledFilter" x="-0.8" y="-0.8" height="2.8" width="2.8">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>

        ${re}

        <!-- PCB -->
        <path
          d="M63.1 0H12.5v30h50.6V0zM22.2 25.9a1.57 1.57 0 11-.002 3.142A1.57 1.57 0 0122.2 25.9zm38.4 0a1.57 1.57 0 11-.002 3.138A1.57 1.57 0 0160.6 25.9zM22.2 1a1.57 1.57 0 110 3.14 1.57 1.57 0 010-3.14zm38.4 0a1.57 1.57 0 11-.002 3.142A1.57 1.57 0 0160.6 1z"
          fill="#2c8240"
        />

        <!-- Holes -->
        <g fill="#e6e6e6">
          <path
            d="M30.6 3.3a.752.752 0 10-1.503 0v1.46a.752.752 0 001.503 0V3.3zM26.3 3.3a.752.752 0 00-1.504 0v1.46a.752.752 0 001.504 0V3.3z"
          />
          <path
            d="M48.2 6.44a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM54.2 6.44a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM54.2 2.09a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748zM48.2 2.09a.748.748 0 00-.748-.748h-1.41a.748.748 0 000 1.496h1.41a.748.748 0 00.748-.748z"
          />
        </g>

        <g fill="#848400">
          <circle cx="15.4" cy="20.8" r="1.57" />
          <circle cx="15.4" cy="9.28" r="1.57" />
          <circle cx="29.2" cy="7.69" r=".94" />
          <circle cx="21.7" cy="7.69" r=".94" />
          <circle cx="21.7" cy="10.5" r=".94" />
          <circle cx="29.2" cy="10.5" r=".94" />
          <circle cx="36.7" cy="10.6" r=".94" />
          <circle cx="33.6" cy="10.6" r=".94" />
          <circle cx="36.7" cy="20.5" r=".94" />
          <circle cx="33.6" cy="20.5" r=".94" />
          <circle cx="20.6" cy="22.7" r=".94" />
          <circle cx="21.8" cy="19.8" r=".94" />
          <circle cx="29.3" cy="19.8" r=".94" />
          <circle cx="30.6" cy="16.9" r=".94" />
          <circle cx="20.6" cy="16.9" r=".94" />
          <circle cx="30.6" cy="13.9" r=".94" />
          <circle cx="17.8" cy="11.7" r=".94" />
          <circle cx="17.8" cy="13.9" r=".94" />
          <circle cx="20.6" cy="13.9" r=".94" />
          <circle cx="17.8" cy="16.1" r=".94" />
          <circle cx="17.8" cy="18.3" r=".94" />
          <circle cx="30.6" cy="22.7" r=".94" />
          <circle cx="33.6" cy="27" r=".94" />
          <circle cx="33.6" cy="24.8" r=".94" />
          <circle cx="38.4" cy="27" r=".94" />
          <circle cx="38.4" cy="24.8" r=".94" />
        </g>

        <g fill="#fff">
          <circle cx="15.4" cy="20.8" r="1.05" />
          <circle cx="15.4" cy="9.28" r="1.05" />
          <circle cx="29.2" cy="7.69" r=".52" />
          <circle cx="21.7" cy="7.69" r=".52" />
          <circle cx="21.7" cy="10.5" r=".52" />
          <circle cx="29.2" cy="10.5" r=".52" />
          <circle cx="36.7" cy="10.6" r=".52" />
          <circle cx="33.6" cy="10.6" r=".52" />
          <circle cx="36.7" cy="20.5" r=".52" />
          <circle cx="33.6" cy="20.5" r=".52" />
          <circle cx="20.6" cy="22.7" r=".52" />
          <circle cx="21.8" cy="19.8" r=".52" />
          <circle cx="29.3" cy="19.8" r=".52" />
          <circle cx="30.6" cy="16.9" r=".52" />
          <circle cx="20.6" cy="16.9" r=".52" />
          <circle cx="30.6" cy="13.9" r=".52" />
          <circle cx="17.8" cy="11.7" r=".52" />
          <circle cx="17.8" cy="13.9" r=".52" />
          <circle cx="20.6" cy="13.9" r=".52" />
          <circle cx="17.8" cy="16.1" r=".52" />
          <circle cx="17.8" cy="18.3" r=".52" />
          <circle cx="30.6" cy="22.7" r=".52" />
          <circle cx="33.6" cy="27" r=".52" />
          <circle cx="33.6" cy="24.8" r=".52" />
          <circle cx="38.4" cy="27" r=".52" />
          <circle cx="38.4" cy="24.8" r=".52" />
        </g>

        <!-- USB Connector -->
        <g fill="#b2b2b2">
          <path d="M15.6 11h1.02v1.53H15.6zM16.6 11.5h1.38v.45H16.6z" />
          <path d="M15.6 13.2h1.02v1.53H15.6zM16.6 13.7h1.38v.45H16.6z" />
          <path d="M15.6 15.3h1.02v1.53H15.6zM16.6 15.9h1.38v.45H16.6z" />
          <path d="M15.6 17.5h1.02v1.53H15.6zM16.6 18.1h1.38v.45H16.6z" />
        </g>

        <path d="M-.145 9.97h15.8v10.1h-15.8z" fill="#999" />
        <path d="M-.147 9.97h15v9.24h-15z" fill="#ccc" />
        <path
          d="M11.4 14.6h.682v.877H11.4zM2.45 16.3h1.41v2.08H2.45zM2.45 11.1h1.41v2.08H2.45z"
          fill="#999"
        />

        <!-- Pin Headers -->
        <g transform="translate(59.1 4.7) rotate(90 0 0)">
          <rect width="${20.7}" height="2.54" fill="url(#pins-female)" />
        </g>

        <!-- Pin Labels -->
        <text fill="#fff">
          <tspan x="59.5" dy="6.54">GND</tspan>
          <tspan x="59.5" dy="2.54">VCC</tspan>
          <tspan x="60.5" dy="2.54">5</tspan>
          <tspan x="60.5" dy="2.54">4</tspan>
          <tspan x="60.5" dy="2.54">3</tspan>
          <tspan x="60.5" dy="2.54">2</tspan>
          <tspan x="60.5" dy="2.54">1</tspan>
          <tspan x="60.5" dy="2.54">0</tspan>
        </text>

        <!-- Pin Bar -->
        <path d="M41.8 1.37l-.588-.588h-1.53l-.587.588v1.53l.587.587h1.53l.588-.587V2.22z" />
        <path d="M39.2 1.37l-.588-.587h-1.53l-.588.587v1.53l.588.587h1.53l.588-.587V2.22z" />
        <path d="M34.4 3.48h1.53l.588-.587v-1.53l-.588-.587H34.4l-.587.587v1.53l.587.587z" />

        <g fill="#8c8663">
          <path d="M40.1 1.7h.863v.864H40.1z" />
          <path d="M37.4 1.7h.863v.864H37.4z" />
          <path d="M34.7 1.7h.863v.864H34.7z" />
        </g>

        <text transform="translate(33.1 6) rotate(270 0 0)" fill="#fff" style="font-size: 1.4">
          <tspan x="0" dy="2.5">VIN</tspan>
          <tspan x="0" dy="2.5">GND</tspan>
          <tspan x="0" dy="2.5">VCC</tspan>
        </text>

        <!-- MCU -->
        <path
          d="M52.6 17.7h1.22v.873H52.6zM50.2 17.7h1.22v.873H50.2zM47.8 17.7h1.22v.873H47.8zM45.3 17.7h1.22v.873H45.3zM45.3 10.6h1.22v.858H45.3zM47.8 10.6h1.22v.858H47.8zM50.2 10.6h1.22v.858H50.2zM52.6 10.6h1.22v.858H52.6z"
          fill="#b2b2b2"
        />
        <path d="M44.7 11.5h9.77v6.28H44.7z" fill="#313131" />

        <g fill="#212121">
          <path d="M54.4 15.7a1.13 1.13 0 010-2.26v2.27z" />
          <circle cx="53.3" cy="12.6" r=".52" />
        </g>

        <text x="45.14" y="13.4" fill="olive" style="font-family: sans-serif; font-size: 1.6">
          <tspan x="45.14" y="13.4">ATTINY85</tspan>
        </text>

        <!-- LED Silk -->
        <path
          d="M34.6 27.65a2.003 2.003 0 001.01-1.74m.001 0a2 2 0 00-.711-1.53m-3.31 1.53c0 .741.41 1.42 1.06 1.77m-.341-3.32a2.01 2.01 0 00-.723 1.54m7.79 1.74a2.003 2.003 0 001.01-1.74m-.001 0a2 2 0 00-.711-1.53m-3.31 1.53c0 .741.41 1.42 1.06 1.77m-.342-3.32a2.008 2.008 0 00-.723 1.54"
          fill="none"
          stroke="#fff"
          stroke-width=".25"
        />

        <!-- Power LED -->
        <g fill="#00d300">
          <circle cx="33.6" cy="25.9" r="1.6" fill-opacity=".64" />
          <circle cx="33.6" cy="25.9" r="1.2" fill-opacity=".92" />
        </g>
        ${t&&At`<circle cx="33.6" cy="25.9" r="1.8" fill="#03f704" filter="url(#ledFilter)" />`}

        <!-- LED1 -->
        <g fill="#d8e208">
          <circle cx="38.35" cy="25.9" r="1.6" fill-opacity=".64" />
          <circle cx="38.35" cy="25.9" r="1.2" fill-opacity=".92" />
        </g>
        ${e&&At`<circle cx="38.35" cy="25.9" r="1.8" fill="#fcfd00" filter="url(#ledFilter)" />`}

        <g fill="#fff">
          <text x="32.5" dy="23.4">ON</text>
          <text x="36.3" dy="23.4">LED1</text>
        </g>

        <!-- Capacitors -->
        <circle cx="41" cy="9.6" r="2.7" />
        <circle cx="41" cy="9.6" r="1.74" fill="#b2b2b2" />
        <path
          d="M41.1 11.3c-.429.003-.664-.089-1.1-.35l-.288 1.01c.396.226.842.349 1.3.356a2.84 2.84 0 001.4-.375l-.256-1.02c-.425.26-.555.371-1.06.375z"
          fill="#fff"
        />

        <ellipse cx="34.7" cy="7.91" rx="2.68" ry="1.13" fill="#f60" />
        <ellipse cx="34.7" cy="7.5" rx="1.25" ry=".413" />

        <!-- Diodes -->
        <g fill="#b2b2b2">
          <path
            d="M29.55 7.69a.357.357 0 00-.356-.357h-7.5a.356.356 0 000 .713h7.5c.196 0 .356-.16.356-.356z"
          />
          <path
            d="M29.55 10.5a.357.357 0 00-.356-.357h-7.5a.356.356 0 000 .713h7.5c.196 0 .356-.16.356-.356z"
          />
          <path
            d="M29.65 19.8a.357.357 0 00-.356-.356h-7.5a.357.357 0 100 .713h7.5c.196 0 .356-.16.356-.357z"
          />
        </g>

        <g fill="#ff2a2a">
          <path d="M23.2 8.88h4.47c.135 0 .111-2.38 0-2.38H23.2c-.145 0-.157 2.38 0 2.38z" />
          <path d="M27.7 11.7h-4.47c-.135 0-.112-2.38 0-2.38h4.47c.145 0 .157 2.38 0 2.38z" />
          <path d="M27.7 21h-4.47c-.134 0-.111-2.38 0-2.38h4.47c.145 0 .158 2.38 0 2.38z" />
        </g>

        <g fill="#fff" fill-opacity=".74">
          <path d="M24.1 9.32h.563v2.38H24.1z" />
          <path d="M24 18.6h.563v2.38H24z" />
          <path d="M26.4 6.5h.563v2.38H26.4z" />
        </g>

        <g fill-opacity=".4">
          <path
            d="M23.2 6.5c.205-.005.406 0 .609 0h3.86c.026 0 .057.24.052.24h-4.59c-.006 0 .025-.239.066-.24z"
          />
          <path
            d="M27.7 9.32c-.206-.005-.407 0-.609 0h-3.86c-.026 0-.057.239-.052.239h4.59c.006 0-.024-.238-.065-.239z"
          />
          <path
            d="M27.7 18.6c-.205-.005-.406 0-.609 0h-3.86c-.026 0-.057.239-.052.239h4.59c.006 0-.025-.238-.066-.239z"
          />
        </g>

        <!-- Resistors -->
        <g fill="#b2b2b2">
          <path
            d="M31 13.9a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .712h10.1A.356.356 0 0031 13.9z"
          />
          <path
            d="M31 16.9a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .713h10.1c.197 0 .356-.16.356-.357z"
          />
          <path
            d="M31 22.7a.356.356 0 00-.356-.356h-10.1a.356.356 0 100 .713h10.1c.197 0 .356-.16.356-.357z"
          />
          <path
            d="M33.6 10.2a.356.356 0 00-.356.356v9.98a.356.356 0 00.713 0v-9.98a.356.356 0 00-.357-.356z"
          />
          <path
            d="M36.7 10.2a.356.356 0 00-.357.356v9.98a.356.356 0 00.713 0v-9.98a.356.356 0 00-.356-.356z"
          />
        </g>

        <g fill="#d9b477">
          <path
            d="M23.8 15.8a1.369 1.369 0 00-.477-.103h-.69a.253.253 0 00-.25.25v1.86c0 .138.113.25.25.25h.69c.138 0 .352-.047.477-.102l.025-.013c.152-.062.314-.097.478-.102h2.49c.138 0 .352.047.477.102l.026.013c.124.057.339.102.477.102h.689c.138 0 .25-.112.251-.25v-1.86a.252.252 0 00-.251-.25h-.689a1.42 1.42 0 00-.477.103l-.026.012a1.369 1.369 0 01-.477.103h-2.49c-.138 0-.353-.048-.478-.103L23.8 15.8z"
          />
          <path
            d="M23.7 12.8a1.351 1.351 0 00-.477-.103h-.69a.252.252 0 00-.25.25v1.86c0 .138.112.25.25.25h.69c.137 0 .352-.047.477-.102l.025-.012c.125-.058.34-.103.477-.103h2.49c.138 0 .353.048.478.103l.025.012c.125.057.34.102.477.102h.69c.137 0 .25-.113.25-.25v-1.86a.252.252 0 00-.25-.25h-.69a1.42 1.42 0 00-.477.103l-.025.012a1.357 1.357 0 01-.478.103h-2.49a1.42 1.42 0 01-.477-.103L23.7 12.8z"
          />
          <path
            d="M23.8 21.6a1.373 1.373 0 00-.477-.102h-.69a.25.25 0 00-.25.25v1.86c0 .138.112.25.25.25h.69c.137 0 .352-.048.477-.103l.025-.012c.125-.057.34-.102.477-.102h2.49c.138 0 .353.047.477.102l.026.012c.125.058.339.103.477.103h.69c.137 0 .25-.113.25-.25v-1.86a.251.251 0 00-.25-.25h-.69c-.138 0-.352.047-.477.102l-.026.013a1.368 1.368 0 01-.477.102h-2.49a1.42 1.42 0 01-.477-.102L23.8 21.6z"
          />
          <path
            d="M34.7 13.8c.058-.125.103-.34.103-.477v-.69a.252.252 0 00-.25-.25h-1.86a.25.25 0 00-.25.25v.69c0 .137.047.352.102.477l.013.025c.057.125.102.34.102.477v2.49c0 .138-.047.353-.102.477l-.013.026a1.373 1.373 0 00-.102.477v.69c0 .138.112.25.25.25h1.86a.252.252 0 00.25-.25v-.69c0-.138-.048-.352-.103-.477l-.012-.026a1.369 1.369 0 01-.103-.477v-2.49c0-.137.048-.352.103-.477l.012-.025z"
          />
          <path
            d="M37.7 13.7c.058-.124.103-.339.103-.477v-.69a.253.253 0 00-.25-.25h-1.86a.252.252 0 00-.25.25v.69c0 .138.047.353.102.477l.012.026c.058.124.103.339.103.477v2.49c0 .138-.047.352-.103.477l-.012.026a1.346 1.346 0 00-.102.477v.69c0 .138.112.25.25.25h1.86a.253.253 0 00.25-.25v-.69a1.41 1.41 0 00-.103-.477l-.012-.026a1.369 1.369 0 01-.103-.477v-2.49c0-.138.048-.353.103-.477l.012-.026z"
          />
        </g>

        <path d="M24.6 21.71h.642v1.92H24.6z" fill="#008000" />

        <g fill="#00f">
          <path
            d="M23.9 12.85a.809.809 0 01-.107-.04l-.025-.013a1.378 1.378 0 00-.478-.102h-.03v2.36h.03c.138 0 .353-.047.478-.103l.025-.012a.688.688 0 01.107-.04V12.9z"
          />
          <path
            d="M23.9 15.85a.822.822 0 01-.108-.04l-.025-.013a1.373 1.373 0 00-.477-.102h-.03v2.36h.03c.137 0 .352-.047.477-.102l.025-.013a.7.7 0 01.108-.04V15.9z"
          />
        </g>

        <g fill="#8a3d06">
          <path
            d="M24 21.66a.696.696 0 01-.108-.039l-.025-.013a1.397 1.397 0 00-.477-.103h-.03v2.36h.03c.137 0 .352-.048.477-.103l.025-.012a.583.583 0 01.108-.04V21.7z"
          />
          <path
            d="M34.64 13.9c.013-.04.025-.077.04-.107l.013-.026c.057-.124.102-.339.102-.477v-.03h-2.36v.03c0 .138.047.353.103.477l.012.026c.015.03.028.067.04.107h2.05z"
          />
          <path
            d="M37.65 13.9a.822.822 0 01.04-.108l.013-.025c.057-.125.102-.34.102-.477v-.03h-2.36v.03c0 .137.047.352.102.477l.012.025c.016.03.028.068.04.108h2.05z"
          />
        </g>

        <g fill="#ad9f4e">
          <path d="M27.8 12.7h.244v2.36H27.8z" />
          <path d="M27.9 15.7h.244v2.36H27.9z" />
          <path d="M35.5 17.8h2.36v.244H35.5z" />
          <path d="M27.8 21.5h.244v2.36H27.8z" />
          <path d="M32.4 17.8h2.36v.244H32.4z" />
        </g>

        <g fill="#b3b3b3">
          <path d="M24.5 12.9h.642v1.92H24.5z" />
          <path d="M24.5 15.9h.642v1.92H24.5z" />
        </g>

        <g fill="#c40808">
          <path d="M25.9 21.72h.642v1.92H25.9z" />
          <path d="M32.65 15.8h1.92v.642H32.6z" />
          <path d="M35.65 15.8h1.92v.642H35.7z" />
        </g>

        <g fill="#1a1a1a">
          <path d="M25.8 12.9h.642v1.92H25.8z" />
          <path d="M25.8 15.9h.642v1.92H25.8z" />
          <path d="M32.65 14.5h1.92v.642H32.6z" />
          <path d="M35.65 14.5h1.92v.642H35.7z" />
        </g>

        <!-- Regulator -->
        <ellipse cx="27.7" cy="2.93" rx="2.31" ry="2.3" fill="#1a1a1a" />
        <path d="M25.4 2.93h4.61v2.3H25.4z" />

        <!-- Reset Button  -->
        <path
          d="M46.1 6.1h1.17v.69H46.1zM52.2 6.1h1.17v.69H52.2zM52.2 1.74h1.17v.69H52.2zM46.1 1.74h1.17v.69H46.1z"
          fill="#b2b2b2"
        />
        <path
          d="M52.5 2.16a.535.535 0 00-.534-.535h-4.49a.535.535 0 00-.534.535v4.28c0 .295.239.535.534.535h4.49c.295 0 .534-.24.534-.535V2.16z"
          fill="#999"
        />

        <circle cx="47.8" cy="6.18" r=".4" />
        <circle cx="51.7" cy="6.18" r=".4" />
        <circle cx="51.7" cy="2.42" r=".4" />
        <circle cx="47.8" cy="2.42" r=".4" />

        <g stroke-width=".1" paint-order="fill stroke">
          <circle
            id="reset-button"
            cx="49.7"
            cy="4.3"
            r="1.4"
            fill="#000"
            stroke="#3f3f3f"
            tabindex="0"
            @mousedown=${()=>this.down()}
            @touchstart=${()=>this.down()}
            @mouseup=${()=>this.up()}
            @mouseleave=${()=>this.leave()}
            @touchend=${()=>this.leave()}
            @keydown=${t=>we.includes(t.key)&&this.down()}
            @keyup=${t=>we.includes(t.key)&&this.up()}
          />
        </g>

        <!-- Logo -->
        <g fill="#fff">
          <path d="M55.5 25.1h-3.54v2.42h3.54V25.1zm-.174.174v2.07h-3.19v-2.07h3.19z" />
          <path
            d="M56 23.6a.514.514 0 00-.514-.514h-14a.514.514 0 00-.514.514v1.03c0 .283.23.514.514.514h14A.515.515 0 0056 24.63V23.6z"
          />
        </g>
        <text
          x="41.14"
          y="24.9"
          fill="#2c8240"
          style="font-family: sans-serif; font-weight: bold; font-size: 2.15"
        >
          FRANZININHO
        </text>
        <text
          x="52.2"
          y="26.95"
          fill="#fff"
          style="font-family: sans-serif; font-weight: bold; font-size: 1.78"
        >
          DIY
        </text>
      </svg>
    `}down(){this.resetPressed||(this.resetPressed=!0,this.resetButton.style.stroke="#333",this.dispatchEvent(new CustomEvent("button-press",{detail:"reset"})))}up(){this.resetPressed&&(this.resetPressed=!1,this.resetButton.style.stroke="",this.dispatchEvent(new CustomEvent("button-release",{detail:"reset"})))}leave(){this.resetButton.blur(),this.up()}};bi([Jt()],ki.prototype,"led1",void 0),bi([Jt()],ki.prototype,"ledPower",void 0),bi([Jt()],ki.prototype,"resetPressed",void 0),bi([Ye("#reset-button")],ki.prototype,"resetButton",void 0),ki=bi([Qt("wokwi-franzininho")],ki);var Ci=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let zi=class extends qt{constructor(){super(...arguments),this.ledRed=0,this.ledGreen=0,this.ledBlue=0,this.ledBuiltIn=!1,this.ledPower=!1,this.pinInfo=[{name:"D12",x:20.1,y:1,signals:[ae("MISO"),{type:"pwm"}],description:"GPIO04"},{name:"D11",x:29.8,y:1,signals:[ae("MOSI"),{type:"pwm"}],description:"GPIO07"},{name:"D10",x:39.3,y:1,signals:[{type:"pwm"}],description:"GPIO05"},{name:"D9",x:48.9,y:1,signals:[{type:"pwm"}],description:"GPIO21"},{name:"D8",x:58.5,y:1,signals:[{type:"pwm"}],description:"GPIO20"},{name:"D7",x:68.1,y:1,signals:[{type:"pwm"}],description:"GPIO19"},{name:"D6",x:77.7,y:1,signals:[{type:"pwm"}],description:"GPIO18"},{name:"D5",x:87.3,y:1,signals:[{type:"pwm"}],description:"GPIO17"},{name:"D4",x:96.9,y:1,signals:[{type:"pwm"}],description:"GPIO16"},{name:"D3",x:106.5,y:1,signals:[{type:"pwm"}],description:"GPIO15"},{name:"D2",x:116.1,y:1,signals:[{type:"pwm"}],description:"GPIO25"},{name:"GND.1",x:125.2,y:1,signals:[{type:"power",signal:"GND"}]},{name:"RESET",x:135.3,y:1,signals:[]},{name:"RX",x:153.9,y:1,signals:[oe("RX")],description:"GPIO1"},{name:"TX",x:144.5,y:1,signals:[oe("TX")],description:"GPIO0"},{name:"D13",x:20.1,y:67.5,signals:[ae("SCK")],description:"GPIO6"},{name:"3.3V",x:29.7,y:67.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"AREF",x:39.3,y:67.5,signals:[]},{name:"A0",x:48.8,y:67.5,signals:[ne(0)],description:"GPIO26"},{name:"A1",x:58.5,y:67.5,signals:[ne(1)],description:"GPIO27"},{name:"A2",x:68,y:67.5,signals:[ne(2)],description:"GPIO28"},{name:"A3",x:77.6,y:67.5,signals:[ne(3)],description:"GPIO29"},{name:"A4",x:87.3,y:67.5,signals:[ne(4)],description:"GPIO12"},{name:"A5",x:96.9,y:67.5,signals:[ne(5)],description:"GPIO13"},{name:"A6",x:106.5,y:67.5,signals:[ne(6)]},{name:"A7",x:116.1,y:67.5,signals:[ne(7)]},{name:"5V",x:125.5,y:67.5,signals:[{type:"power",signal:"VCC",voltage:5}]},{name:"RESET.2",x:134.9,y:67.5,signals:[]},{name:"GND.2",x:145.3,y:67.5,signals:[{type:"power",signal:"GND"}]},{name:"VIN",x:154.1,y:67.5,signals:[{type:"power",signal:"VCC"}]}]}render(){const{ledPower:t,ledBuiltIn:e,ledRed:i,ledGreen:r,ledBlue:n}=this,s=Math.max(i,r,n);return Pt`
      <svg
        width="44.573mm"
        height="17.956mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 168 67.9"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pad-pattern" height="10" width="9.58" patternUnits="userSpaceOnUse">
            <path
              d="m5.88 0.00992v5.57c0 1.63-1.32 2.95-2.94 2.95h-0.0025c-1.63 0-2.94-1.32-2.94-2.95v-5.57h0.805c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14zm-2.95 7.65c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14z"
              fill="#ffdc8e"
              stroke-width="1.24"
            />
          </pattern>
          <pattern id="pin-pattern" height="10" width="1.3" patternUnits="userSpaceOnUse">
            <path
              d="m0.5 0c-0.205 0-0.37 0.165-0.37 0.37v1.08h0.739v-1.08c0-0.205-0.165-0.37-0.37-0.37z"
              fill="#eaecec"
            />
          </pattern>
        </defs>

        <!-- Board -->
        <path
          d="m156 0h12.2v67.9h-12.2c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.3c0-1.18-0.959-2.14-2.14-2.14-1.18 0-2.14 0.96-2.14 2.14h-5.29c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-5.29c0-1.18-0.96-2.14-2.14-2.14s-2.14 0.96-2.14 2.14h-12.2v-67.9h12.2v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.3v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14v-0.00992h5.29v0.00992c0 1.18 0.959 2.14 2.14 2.14 1.18 0 2.14-0.96 2.14-2.14v-0.00992h5.29v0.00992c0 1.18 0.96 2.14 2.14 2.14s2.14-0.96 2.14-2.14zm7.38 58.8c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm-153 0c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm67 1.42c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-47.9 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm76.6 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-67.1 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.959 2.14-2.14 2.14c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14zm47.9 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm-28.8 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm86.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-38.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm9.58 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-19.2 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.959-2.14 2.14-2.14zm38.3 0c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14-2.14-0.96-2.14-2.14 0.96-2.14 2.14-2.14zm-144-58.3c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm153 0c1.97 0 3.56 1.6 3.56 3.56 0 1.97-1.6 3.56-3.56 3.56-1.97 0-3.56-1.6-3.56-3.56 0-1.97 1.6-3.56 3.56-3.56zm-28.1 5.71c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-19.2 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-28.8 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm67.1 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm9.57 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.959 2.14-2.14 2.14zm-57.5 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-19.2 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm76.7 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14zm-86.3 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.959 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.959-2.14 2.14-2.14c1.18 0 2.14 0.96 2.14 2.14s-0.96 2.14-2.14 2.14zm-9.58 0c-1.18 0-2.14-0.96-2.14-2.14s0.96-2.14 2.14-2.14 2.14 0.96 2.14 2.14-0.96 2.14-2.14 2.14z"
          fill="#1a466b"
        />
        <path
          d="m148 67.9v-5.57c0-1.9-1.54-3.44-3.44-3.44h-2e-3c-1.9 0-3.44 1.54-3.44 3.44v5.57h-1.47v-9.55h9.88v9.55zm-0.756-6.78 7e-3 0.0161c-0.459-1.03-1.49-1.75-2.69-1.75h-2e-3c-0.661 0-1.27 0.218-1.76 0.587 0.492-0.368 1.1-0.587 1.76-0.587h2e-3c1.19 0 2.22 0.712 2.68 1.73zm-4.55-1.07c0.0186-0.0161 0.0372-0.031 0.0558-0.0459-0.0186 0.0149-0.0372 0.0298-0.0558 0.0459zm-0.0942 0.0794c0.0124-0.0112 0.026-0.0236 0.0397-0.0347l0.0136-0.0112c-0.0186 0.0149-0.036 0.031-0.0533 0.0459zm-0.343 0.36c0.0744-0.0918 0.154-0.18 0.239-0.263-0.0856 0.0831-0.165 0.171-0.239 0.263zm-0.0967 0.129c0.0236-0.0347 0.0496-0.0682 0.0756-0.1-0.026 0.0322-0.0521 0.0657-0.0756 0.1zm-0.0409 0.057c9e-3 -0.0124 0.0174-0.0248 0.026-0.036-9e-3 0.0112-0.0174 0.0236-0.026 0.036zm-0.18 0.301v-0.0012 0.0012l-7e-3 0.0124zm5.56 6.93v-5.57c0-0.423-0.0893-0.825-0.25-1.19 0.161 0.365 0.25 0.766 0.25 1.19zm-5.82-6.24c5e-3 -0.0223 0.01-0.0446 0.0161-0.067-6e-3 0.0223-0.0112 0.0446-0.0161 0.067zm-4e-3 0.0136v0.0037z"
          fill="#fff"
        />

        <!-- Flash memory chip -->
        <path
          d="m59.9 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m59.9 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m63 14.4c0-0.394-0.32-0.714-0.715-0.714h-0.738c-0.394 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m63 14.4c0-0.394-0.32-0.714-0.715-0.714h-0.738c-0.394 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m66 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.739c-0.394 0-0.714 0.32-0.714 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m66 14.4c0-0.394-0.32-0.714-0.714-0.714h-0.739c-0.394 0-0.714 0.32-0.714 0.714v0.0012h2.17z"
          fill="#1d1d1b"
        />
        <path
          d="m68.9 14.4c0-0.394-0.321-0.714-0.715-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012h2.17z"
          fill="#eaecec"
        />
        <path
          d="m68.9 14.4v-0.0012c0-0.394-0.321-0.714-0.715-0.714h-0.738c-0.396 0-0.715 0.32-0.715 0.714v0.0012z"
          fill="#1d1d1b"
        />
        <path
          d="m66.8 32.1c0 0.394 0.32 0.714 0.715 0.714h0.738c0.394 0 0.715-0.32 0.715-0.714z"
          fill="#eaecec"
        />
        <path
          d="m68.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m63.8 32.1c0 0.394 0.32 0.714 0.714 0.714h0.739c0.394 0 0.714-0.32 0.714-0.714z"
          fill="#eaecec"
        />
        <path
          d="m66 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m60.7 32.1c0 0.394 0.321 0.714 0.715 0.714h0.738c0.396 0 0.715-0.32 0.715-0.714z"
          fill="#eaecec"
        />
        <path
          d="m62.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.227-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <path
          d="m57.8 32.1c0 0.394 0.32 0.714 0.715 0.714h0.738c0.394 0 0.714-0.32 0.714-0.714z"
          fill="#eaecec"
        />
        <path
          d="m59.9 32.2c-0.0384 0.206-0.165 0.379-0.339 0.482 0.113-0.169 0.226-0.331 0.339-0.482z"
          fill="#1d1d1b"
        />
        <rect x="56.7" y="14.1" width="13.3" height="18.4" fill="#3b3838" />

        <!-- Mounting holes -->
        <g fill="none" stroke="#ffdc8e" stroke-width=".496px">
          <circle cx="10.4" cy="62.4" r="3.56" />
          <circle cx="163.5" cy="62.4" r="3.56" />
          <circle cx="10.2" cy="5.52" r="3.56" />
          <circle cx="163" cy="5.52" r="3.56" />
        </g>

        <!-- Pads -->
        <rect transform="translate(17, 0)" width="142" height="9.5" fill="url(#pad-pattern)" />
        <rect
          transform="translate(17, 68) scale(1,-1)"
          width="142"
          height="9.5"
          fill="url(#pad-pattern)"
        />

        <!-- RP2040 -->
        <rect
          transform="translate(79,37.8) scale(1,-1)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect transform="translate(79,12.5)" width="19.5" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(102.3,15.5) rotate(90)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(75.5,34.5) rotate(270)"
          width="19.5"
          height="2"
          fill="url(#pin-pattern)"
        />

        <!-- Accelerometer chip -->
        <rect transform="translate(90,42)" width="3.8" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(90,57.5) scale(1,-1)"
          width="3.8"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(100,47.5) rotate(90)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(84,52.5) rotate(270)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />

        <!-- Crypto chip -->
        <rect transform="translate(104,40)" width="4.8" height="2" fill="url(#pin-pattern)" />
        <rect
          transform="translate(104,57) scale(1,-1)"
          width="4.8"
          height="2"
          fill="url(#pin-pattern)"
        />

        <rect x="85.3" y="43.7" width="13.4" height="12.4" fill="#3b3838" stroke-width="1.24" />

        <rect x="76.9" y="14.1" width="23.8" height="22.2" fill="#3b3838" />

        <!-- Microphone -->
        <g stroke-width="1.24">
          <path d="m52.7 25.8v-11.7h-16.1v11.7z" fill="#3b3838" />
          <circle cx="46.7" cy="19.9" r="2.77" fill="#3b3838" />
          <path
            d="m46.7 17.1c1.53 0 2.78 1.24 2.78 2.78 0 1.53-1.24 2.78-2.78 2.78-1.53 0-2.78-1.24-2.78-2.78 0-1.53 1.24-2.78 2.78-2.78zm0 3.72c-0.523 0-0.949-0.425-0.949-0.949s0.425-0.949 0.949-0.949 0.949 0.425 0.949 0.949-0.425 0.949-0.949 0.949z"
            fill="#ffdc8e"
          />
        </g>

        <path d="m111 55.5v-14h-9.03v14z" fill="#3b3838" />

        <!-- WiFi module -->
        <rect x="112" y="10.1" width="56" height="45.4" fill="#418e54" />
        <path
          d="m160 53.6h-3.05v-41.9h11.3v41.9h-2.36c0-0.764-0.308-1.38-0.687-1.38-0.378 0-0.686 0.619-0.686 1.38h-3.17c0-0.764-0.308-1.38-0.687-1.38s-0.687 0.619-0.687 1.38z"
          fill="#cecccb"
        />
        <rect x="115" y="11.7" width="41.9" height="41.9" fill="#e4e4e4" />
        <path d="m157 11.7h-41.9v41.9h41.9zm-0.868 0.868v40.2h-40.2v-40.2z" fill="#ffdc8e" />
        <path
          d="m165 11.2h-3.86v35.3c0 0.0868 0.0347 0.171 0.0967 0.233s0.146 0.098 0.234 0.098h3.19c0.0868 0 0.171-0.036 0.233-0.098s0.098-0.146 0.098-0.233v-35.3z"
          fill="#448f53"
        />

        <!-- USB connector -->
        <path
          d="m3.2 47.5-2.18 1.07c-0.138 0.0657-0.295 0.0756-0.439 0.026-0.145-0.0496-0.263-0.154-0.33-0.291-0.067-0.136-0.0769-0.295-0.0273-0.439s0.154-0.263 0.291-0.33l1.5-0.73h-0.203c-0.479 0-0.939-0.19-1.28-0.529-0.34-0.339-0.529-0.799-0.529-1.28v-21.8c0-0.48 0.19-0.939 0.529-1.28 0.339-0.339 0.799-0.529 1.28-0.529h0.203l-1.5-0.73c-0.138-0.067-0.242-0.185-0.291-0.33-0.0496-0.144-0.0397-0.301 0.0273-0.438v-0.0012c0.067-0.136 0.185-0.242 0.33-0.291 0.144-0.0496 0.301-0.0397 0.439 0.0273l2.18 1.06v-0.591h20.2v27.7h-20.2z"
          fill="#cecccb"
        />
        <path
          d="m23.4 41.7h-1.77c-0.0595 0-0.113 0.031-0.144 0.0806-0.316 0.516-2.04 3.34-2.04 3.34h-1.63v-1.71h-1.17v-2.58h1.17v-1.63h3.1c0.133 0 0.259-0.0521 0.352-0.145 0.093-0.0942 0.145-0.221 0.145-0.352v-1.55h-1.29v-6.34h1.29v-1.55c0-0.131-0.0521-0.258-0.145-0.351-0.093-0.0942-0.219-0.146-0.352-0.146h-3.1v-1.63h-1.17v-2.58h1.17v-1.71h1.63s1.73 2.83 2.04 3.34c0.031 0.0508 0.0843 0.0806 0.144 0.0806h1.77z"
          fill="#989898"
        />

        <!-- Reset button -->
        <g stroke-width="1.24">
          <rect x="42.9" y="32.7" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="48.5" cy="37.7" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m46 44.9h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m46 30.7h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="46.2" y="45.2" width="5.23" height="2.59" />
            <rect x="46.2" y="27.7" width="5.23" height="2.59" />
            <path
              d="m49.7 30.6c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m47.1 44.9c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358s-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>

        <!-- Arduino Logo -->
        <path
          d="m135 33.7c-0.911 0.472-2.46 1.57-3.14 2.23-0.718 0.699-1.3 1.49-1.5 2.49-0.219 1.13-0.187 2.26 0.207 3.35 0.642 1.77 2.29 3.03 4.09 3.09 1.95 0.0707 3.7-0.982 4.44-2.8 0.851-2.08 0.553-4.05-0.885-5.8-0.885-1.08-2.05-1.84-3.2-2.57m-0.0223-3.06c1.35-0.861 2.68-1.72 3.58-3.06 1.05-1.54 1.24-3.22 0.656-4.98-0.624-1.86-2.27-3.09-4.2-3.15-1.9-0.0583-3.48 1.03-4.28 2.68-0.391 0.808-0.495 1.67-0.505 2.55-0.0149 1.26 0.384 2.36 1.23 3.29 0.998 1.11 2.26 1.87 3.52 2.67m2.43 1.5c0.605 0.49 1.2 0.934 1.76 1.43 1.45 1.29 2.44 2.85 2.78 4.77 0.541 3.09-0.298 5.73-2.83 7.66-3.65 2.79-8.84 1.41-10.8-2.83-1.25-2.77-1.04-6.6 1.76-9.15 0.627-0.572 1.33-1.06 2-1.59 0.114-0.0905 0.239-0.167 0.403-0.28-0.186-0.13-0.336-0.238-0.49-0.341-1.01-0.686-1.96-1.44-2.73-2.41-1.21-1.51-1.72-3.24-1.66-5.17 0.0533-1.62 0.494-3.12 1.48-4.41 1.65-2.17 3.84-3.24 6.57-2.9 2.85 0.345 4.86 1.96 5.85 4.63 1.19 3.17 0.508 6.06-1.76 8.56-0.593 0.653-1.34 1.17-2.01 1.75-0.112 0.0955-0.238 0.174-0.379 0.275"
          fill-rule="nonzero"
        />
        <path d="m137 22.3v4.51h-1.44v-4.51z" />
        <path
          d="m137 37.4v1.34h1.34v1.62h-1.34v1.36h-1.62v-1.34h-1.35v-1.64h1.34v-1.35z"
          fill-rule="nonzero"
        />

        <!-- LEDs -->
        <g stroke-width="1.24">
          <rect x="8.47" y="12.6" width="11.9" height="4.06" fill="#a19e9e" />
          <rect x="8.47" y="50.9" width="11.9" height="4.06" fill="#a19e9e" />

          <!-- LED BUILTIN -->
          <rect x="11.9" y="12.6" width="4.94" height="4.06" fill="#f1d99f" />

          <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>

          ${e&&At`<circle cx="14.5" cy="14.5" r="3" fill="red" filter="url(#ledFilter)" />`}

          <!-- LED POWER -->
          <rect x="11.9" y="50.9" width="4.94" height="4.06" fill="#f1d99f" />
          ${t&&At`<circle cx="14.5" cy="53" r="3" fill="#80ff80" filter="url(#ledFilter)" />`}

          <!-- LED RGB -->
          <g fill="#ffdc8e">
            <rect x="33.4" y="23.6" width="1.25" height="1.25" />
            <rect x="30.2" y="23.6" width="1.25" height="1.25" />
            <rect x="33.4" y="26.8" width="1.25" height="1.25" />
            <rect x="30.2" y="26.8" width="1.25" height="1.25" />
          </g>
          <rect x="30.8" y="24.1" width="3.4" height="3.4" fill="#cecccb" />

          <circle
            cx="32.4"
            cy="25.4"
            r="3"
            fill="rgb(${255*i}, ${255*r}, ${255*n})"
            filter="url(#ledFilter)"
            opacity="${s?.3+.7*s:0}"
          />

          <path
            d="m122 0.00992v5.57c0 1.9 1.54 3.44 3.44 3.44h1e-3c1.9 0 3.44-1.54 3.44-3.44v-5.57h1.47v9.55h-9.88v-9.55zm0.756 6.78-7e-3 -0.0161c0.459 1.03 1.49 1.75 2.69 1.75h1e-3c0.661 0 1.27-0.218 1.76-0.587-0.491 0.368-1.1 0.587-1.76 0.587h-1e-3c-1.2 0-2.22-0.712-2.69-1.73zm4.55 1.07c-0.0186 0.0161-0.0384 0.031-0.057 0.0459 0.0186-0.0149 0.0384-0.0298 0.057-0.0459zm0.0942-0.0794c-0.0136 0.0112-0.0273 0.0236-0.0397 0.0347l-0.0136 0.0112c0.0174-0.0149 0.036-0.031 0.0533-0.0459zm0.342-0.36c-0.0744 0.0918-0.154 0.18-0.239 0.263 0.0856-0.0831 0.165-0.171 0.239-0.263zm0.098-0.129c-0.0248 0.0347-0.0496 0.0682-0.0756 0.1 0.026-0.0322 0.0508-0.0657 0.0756-0.1zm0.0397-0.057c-9e-3 0.0124-0.0161 0.0248-0.0248 0.036 9e-3 -0.0112 0.0161-0.0236 0.0248-0.036zm0.181-0.301-1e-3 0.00124 1e-3 -0.00124 6e-3 -0.0124zm-5.56-6.93v5.57c0 0.424 0.0893 0.826 0.25 1.19-0.161-0.365-0.25-0.766-0.25-1.19zm5.82 6.24c-5e-3 0.0223-0.01 0.0446-0.0161 0.067 6e-3 -0.0223 0.0112-0.0446 0.0161-0.067zm4e-3 -0.0136 1e-3 -0.00372z"
            fill="#fff"
          />
        </g>
      </svg>
    `}};Ci([Jt()],zi.prototype,"ledRed",void 0),Ci([Jt()],zi.prototype,"ledGreen",void 0),Ci([Jt()],zi.prototype,"ledBlue",void 0),Ci([Jt()],zi.prototype,"ledBuiltIn",void 0),Ci([Jt()],zi.prototype,"ledPower",void 0),zi=Ci([Qt("wokwi-nano-rp2040-connect")],zi);var Si=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Oi=class extends qt{constructor(){super(...arguments),this.ledPower=!1,this.ledSignal=!1,this.pinInfo=[{name:"AOUT",y:11,x:0,number:1,signals:[]},{name:"GND",y:20.5,x:0,number:2,signals:[{type:"power",signal:"GND"}]},{name:"VCC",y:30.5,x:0,number:3,signals:[le()]},{name:"DOUT",y:40.5,x:0,number:4,signals:[]}]}render(){const{ledPower:t,ledSignal:e}=this;return Pt`
      <svg
        width="35.211mm"
        height="13.346mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 133 50.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="3.6" width="14" patternUnits="userSpaceOnUse">
            <path
              d="m5.09 1.3c0-0.618-0.502-1.12-1.12-1.12h-3.97v2.6h3.97c0.618 0 1.12-0.502 1.12-1.12z"
              fill="#eaecec"
            />
            <path
              d="m5.09 1.3c0-0.297-0.118-0.582-0.328-0.792-0.211-0.21-0.496-0.328-0.793-0.328h-1.14v2.6h1.14c0.297 0 0.582-0.118 0.793-0.328 0.21-0.21 0.328-0.495 0.328-0.793z"
              fill="#adafb0"
            />
          </pattern>
          <g id="header-pin">
            <path d="m3.4 1.8v-6.55h-6.55v6.55z" fill="#433b38" />
            <path
              d="m0 0c0.382 0 0.748-0.152 1.02-0.422 0.27-0.27 0.421-0.637 0.421-1.02s-0.151-0.748-0.421-1.02c-0.271-0.27-0.637-0.422-1.02-0.422h-26.1c-0.233 0-0.423 0.19-0.423 0.424v2.04c0 0.233 0.19 0.423 0.423 0.423h26.1z"
              fill="#9f9f9f"
            />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m133 8.69v-8.69h-113v50.4h113v-8.69h-10.9c-0.444 0-0.804-0.36-0.804-0.804v-31.5c0-0.444 0.36-0.804 0.804-0.804zm-84.3 8.1c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#931917"
        />

        <!-- Chip  -->
        <rect transform="translate(87,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(74,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />

        <rect x="73.5" y="25.2" width="13.9" height="15.6" fill="#3b3838" />
        <path
          d="m88.7 40.9v3.24h-6.63c0-1.02-0.721-1.85-1.61-1.85s-1.61 0.827-1.61 1.85h-6.62v-3.24"
          fill="none"
          stroke="#fff"
          stroke-width=".4px"
        />
        <path d="m72.2 25.2v-1.74h16.5v1.74" fill="none" stroke="#fff" stroke-width=".4px" />

        <!-- PCB pins -->
        <path d="m31 44.6v-38h-8.39v38z" fill="none" stroke="#fff" stroke-width=".4px" />
        <use xlink:href="#header-pin" x="26.6" y="12.4" />
        <use xlink:href="#header-pin" x="26.6" y="22.1" />
        <use xlink:href="#header-pin" x="26.6" y="31.9" />
        <use xlink:href="#header-pin" x="26.6" y="41.6" />

        <path
          d="m48.8 13.9c6.24 0 11.3 5.07 11.3 11.3 0 6.24-5.07 11.3-11.3 11.3s-11.3-5.07-11.3-11.3c0-6.24 5.07-11.3 11.3-11.3zm0 2.88c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#d6d6d2"
        />
        <rect x="65.3" y="2.76" width="28.2" height="14.2" fill="#4875ce" />
        <path
          d="m94.9 2.1c0-0.221-0.179-0.4-0.4-0.4h-30.1c-0.221 0-0.4 0.179-0.4 0.4v15.5c0 0.221 0.179 0.4 0.4 0.4h30.1c0.221 0 0.4-0.179 0.4-0.4zm-0.4 0h-30.1v15.5h30.1z"
          fill="#fff"
        />
        <circle cx="69.9" cy="6.54" r="2.31" fill="#f1d99f" />
        <path
          d="m69.3 4.34c0.196-0.066 0.405-0.096 0.622-0.096 0.216 0 0.426 0.03 0.622 0.096v4.42c-0.196 0.066-0.406 0.096-0.622 0.096-0.217 0-0.426-0.03-0.622-0.096z"
          fill="#a4987a"
        />

        <!-- LEDs -->
        <rect
          x="50.5"
          y="1.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="2.12" width="3.98" height="3.28" fill="#f1d99f" />

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${t&&At`<circle cx="56" cy="4" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <rect
          x="50.5"
          y="44.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="45.1" width="3.98" height="3.28" fill="#f1d99f" />

        ${e&&At`<circle cx="56" cy="47" r="7" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- Resistors -->
        <rect
          x="32.3"
          y="1.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="2.52" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="1.92"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="2.64" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="3.05" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="43.9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="44.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="45" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="9.72" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="10.1" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="36.8"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="37.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="38" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="32.3"
          y="44.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="45.5" width="3.97" height="2.47" fill="#171514" />

        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="33.049" y="12.085">AO</tspan>
          <tspan x="33.049" y="41.951">DO</tspan>
          <tspan x="33.049" y="22.067">G</tspan>
          <tspan x="32.964001" y="32.418999" font-size="5.25px">+</tspan>
          <tspan x="52.675778" y="9.31008">PWR</tspan>
          <tspan x="52.675778" y="13.100851">LED</tspan>
          <tspan x="52.675778" y="40">DO</tspan>
          <tspan x="52.675778" y="43.4">LED</tspan>
        </text>

        <path
          d="m110 24.7c0-1.29-1.05-2.34-2.34-2.34h-1e-3c-1.29 0-2.34 1.05-2.34 2.34v0.989c0 1.3 1.05 2.34 2.34 2.34h1e-3c1.29 0 2.34-1.05 2.34-2.34v-0.989z"
          fill="#f8f3e9"
        />
        <circle cx="108" cy="25.2" r="1.14" fill="#3b3838" />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 47.7c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66 0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66 0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m128 45.4c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.513-1.14-1.14 0.512-1.14 1.14-1.14 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 6.29c0.621 0 1.22-0.247 1.66-0.687 0.439-0.439 0.686-1.04 0.686-1.66v-1e-3c0-0.621-0.247-1.22-0.686-1.66-0.44-0.439-1.04-0.686-1.66-0.686h-3.03c-0.621 0-1.22 0.247-1.66 0.686-0.44 0.44-0.687 1.04-0.687 1.66v1e-3c0 0.621 0.247 1.22 0.687 1.66 0.439 0.44 1.04 0.687 1.66 0.687z"
          fill="#f8f3e9"
        />
        <path
          d="m128 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 41.4c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66s-0.247-1.22-0.686-1.66c-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66s0.247 1.22 0.687 1.66c0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#dddcdb"
        />
        <path
          d="m117 9.6c0.621 0 1.22 0.247 1.66 0.686 0.439 0.44 0.686 1.04 0.686 1.66 0 0.621-0.247 1.22-0.686 1.66-0.44 0.44-1.04 0.687-1.66 0.687h-3.03c-0.621 0-1.22-0.247-1.66-0.687-0.44-0.439-0.687-1.04-0.687-1.66 0-0.622 0.247-1.22 0.687-1.66 0.439-0.439 1.04-0.686 1.66-0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 11.9c0-0.631-0.512-1.14-1.14-1.14-0.631 0-1.14 0.513-1.14 1.14s0.512 1.14 1.14 1.14c0.632 0 1.14-0.512 1.14-1.14z"
          fill="#3b3838"
        />
        <circle cx="122" cy="23.7" r="11.3" fill="#d6d6d2" />
        <circle cx="122" cy="23.7" r="10.2" fill="#3b3838" />
        <path
          d="m114 39.1c0 0.631-0.512 1.14-1.14 1.14-0.631 0-1.14-0.513-1.14-1.14s0.512-1.14 1.14-1.14c0.632 0 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
      </svg>
    `}};Si([Jt()],Oi.prototype,"ledPower",void 0),Si([Jt()],Oi.prototype,"ledSignal",void 0),Oi=Si([Qt("wokwi-small-sound-sensor")],Oi);var Ei=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Ri=class extends qt{constructor(){super(...arguments),this.led1=!1,this.led2=!1,this.pinInfo=[{name:"AOUT",y:11,x:0,number:1,signals:[]},{name:"GND",y:20.5,x:0,number:2,signals:[{type:"power",signal:"GND"}]},{name:"VCC",y:30.5,x:0,number:3,signals:[le()]},{name:"DOUT",y:40.5,x:0,number:4,signals:[]}]}render(){const{led2:t,led1:e}=this;return Pt`
      <svg
        width="37.056mm"
        height="13.346mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 140 50.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="3.6" width="14" patternUnits="userSpaceOnUse">
            <path
              d="m5.09 1.3c0-0.618-0.502-1.12-1.12-1.12h-3.97v2.6h3.97c0.618 0 1.12-0.502 1.12-1.12z"
              fill="#eaecec"
            />
            <path
              d="m5.09 1.3c0-0.297-0.118-0.582-0.328-0.792-0.211-0.21-0.496-0.328-0.793-0.328h-1.14v2.6h1.14c0.297 0 0.582-0.118 0.793-0.328 0.21-0.21 0.328-0.495 0.328-0.793z"
              fill="#adafb0"
            />
          </pattern>
          <g id="header-pin">
            <path d="m3.4 1.8v-6.55h-6.55v6.55z" fill="#433b38" />
            <path
              d="m0 0c0.382 0 0.748-0.152 1.02-0.422 0.27-0.27 0.421-0.637 0.421-1.02s-0.151-0.748-0.421-1.02c-0.271-0.27-0.637-0.422-1.02-0.422h-26.1c-0.233 0-0.423 0.19-0.423 0.424v2.04c0 0.233 0.19 0.423 0.423 0.423h26.1z"
              fill="#9f9f9f"
            />
          </g>
        </defs>

        <!-- Board -->
        <path
          d="m133 0h-113v50.4h113zm-84.3 16.8c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#931917"
        />
        <path
          d="m48.8 13.9c6.24 0 11.3 5.07 11.3 11.3 0 6.24-5.07 11.3-11.3 11.3s-11.3-5.07-11.3-11.3c0-6.24 5.07-11.3 11.3-11.3zm0 2.88c4.65 0 8.43 3.78 8.43 8.43 0 4.65-3.78 8.43-8.43 8.43s-8.43-3.78-8.43-8.43c0-4.65 3.78-8.43 8.43-8.43z"
          fill="#d6d6d2"
        />

        <!-- Chip -->
        <rect transform="translate(87,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(74,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect x="73.5" y="25.2" width="13.9" height="15.6" fill="#3b3838" />
        <path
          d="m88.7 40.9v3.24h-6.63c0-1.02-0.721-1.85-1.61-1.85s-1.61 0.827-1.61 1.85h-6.62v-3.24"
          fill="none"
          stroke="#fff"
          stroke-width=".4px"
        />
        <path d="m72.2 25.2v-1.74h16.5v1.74" fill="none" stroke="#fff" stroke-width=".4px" />

        <!-- PCB pins -->
        <path d="m31 44.6v-38h-8.39v38z" fill="none" stroke="#fff" stroke-width=".4px" />
        <use xlink:href="#header-pin" x="26.6" y="12.4" />
        <use xlink:href="#header-pin" x="26.6" y="22.1" />
        <use xlink:href="#header-pin" x="26.6" y="31.9" />
        <use xlink:href="#header-pin" x="26.6" y="41.6" />

        <!-- Potentiometer -->
        <rect x="65.3" y="2.76" width="28.2" height="14.2" fill="#4875ce" />
        <path
          d="m94.9 2.1c0-0.221-0.179-0.4-0.4-0.4h-30.1c-0.221 0-0.4 0.179-0.4 0.4v15.5c0 0.221 0.179 0.4 0.4 0.4h30.1c0.221 0 0.4-0.179 0.4-0.4zm-0.4 0h-30.1v15.5h30.1z"
          fill="#fff"
        />
        <circle cx="69.9" cy="6.54" r="2.31" fill="#f1d99f" />
        <path
          d="m69.3 4.34c0.196-0.066 0.405-0.096 0.622-0.096 0.216 0 0.426 0.03 0.622 0.096v4.42c-0.196 0.066-0.406 0.096-0.622 0.096-0.217 0-0.426-0.03-0.622-0.096z"
          fill="#a4987a"
        />

        <!-- LED2 -->
        <rect
          x="50.5"
          y="1.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="2.12" width="3.98" height="3.28" fill="#f1d99f" />

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${t&&At`<circle cx="56" cy="4" r="5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- LED1 -->
        <rect
          x="50.5"
          y="44.4"
          width="11.5"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="51.5" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="54.3" y="45.1" width="3.98" height="3.28" fill="#f1d99f" />

        ${e&&At`<circle cx="56" cy="47" r="5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- Resistors -->
        <rect
          x="32.3"
          y="1.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="2.12" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="2.52" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="1.92"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="2.64" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="3.05" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="43.9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="44.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="45" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="9"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="9.72" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="10.1" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="97.1"
          y="36.8"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="98.1" y="37.6" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="101" y="38" width="3.97" height="2.47" fill="#171514" />
        <rect
          x="32.3"
          y="44.4"
          width="11.4"
          height="4.72"
          fill="#171514"
          stroke="#fff"
          stroke-width=".4px"
        />
        <rect x="33.2" y="45.1" width="9.56" height="3.28" fill="#a19e9e" />
        <rect x="36" y="45.5" width="3.97" height="2.47" fill="#171514" />

        <!-- Texts -->
        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px">
          <tspan x="33.049" y="12.085">AO</tspan>
          <tspan x="33.049" y="41.951">DO</tspan>
          <tspan x="33.049" y="22.067">G</tspan>
          <tspan x="32.964001" y="32.418999" font-size="5.25px">+</tspan>
        </text>

        <text
          transform="rotate(90 92.4 -43.2)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.72px"
          x="137.13"
          y="3.60"
        >
          L2
        </text>

        <text
          transform="rotate(90 92.4 -.394)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.72px"
          x="137.13"
          y="46.38"
        >
          L1
        </text>

        <!-- Microphone -->
        <path
          d="m110 24.7c0-1.29-1.05-2.34-2.34-2.34h-1e-3c-1.29 0-2.34 1.05-2.34 2.34v0.989c0 1.3 1.05 2.34 2.34 2.34h1e-3c1.29 0 2.34-1.05 2.34-2.34v-0.989z"
          fill="#f8f3e9"
        />
        <circle cx="108" cy="25.2" r="1.14" fill="#3b3838" />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m118 27.8c0-0.622-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66v3.03c0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686 0.622 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66z"
          fill="#f8f3e9"
        />
        <circle cx="115" cy="29.3" r="1.14" fill="#3b3838" />
        <path
          d="m129 47.7c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66 0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66 0 0.622 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m128 45.4c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.513-1.14-1.14 0.512-1.14 1.14-1.14 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m129 6.29c0.621 0 1.22-0.247 1.66-0.687 0.439-0.439 0.686-1.04 0.686-1.66v-1e-3c0-0.621-0.247-1.22-0.686-1.66-0.44-0.439-1.04-0.686-1.66-0.686h-3.03c-0.621 0-1.22 0.247-1.66 0.686-0.44 0.44-0.687 1.04-0.687 1.66v1e-3c0 0.621 0.247 1.22 0.687 1.66 0.439 0.44 1.04 0.687 1.66 0.687z"
          fill="#f8f3e9"
        />
        <path
          d="m128 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 41.4c0.621 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66s-0.247-1.22-0.686-1.66c-0.44-0.44-1.04-0.687-1.66-0.687h-3.03c-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66s0.247 1.22 0.687 1.66c0.439 0.439 1.04 0.686 1.66 0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 39.1c0 0.631-0.512 1.14-1.14 1.14-0.631 0-1.14-0.513-1.14-1.14s0.512-1.14 1.14-1.14c0.632 0 1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
        <path
          d="m117 9.6c0.621 0 1.22 0.247 1.66 0.686 0.439 0.44 0.686 1.04 0.686 1.66 0 0.621-0.247 1.22-0.686 1.66-0.44 0.44-1.04 0.687-1.66 0.687h-3.03c-0.621 0-1.22-0.247-1.66-0.687-0.44-0.439-0.687-1.04-0.687-1.66 0-0.622 0.247-1.22 0.687-1.66 0.439-0.439 1.04-0.686 1.66-0.686z"
          fill="#f8f3e9"
        />
        <path
          d="m114 11.9c0-0.631-0.512-1.14-1.14-1.14-0.631 0-1.14 0.513-1.14 1.14s0.512 1.14 1.14 1.14c0.632 0 1.14-0.512 1.14-1.14z"
          fill="#3b3838"
        />
        <path
          d="m118 19.2c0-0.621-0.247-1.22-0.686-1.66-0.44-0.44-1.04-0.687-1.66-0.687-0.621 0-1.22 0.247-1.66 0.687-0.44 0.439-0.687 1.04-0.687 1.66v3.03c0 0.621 0.247 1.22 0.687 1.66 0.439 0.439 1.04 0.686 1.66 0.686 0.622 0 1.22-0.247 1.66-0.686 0.439-0.44 0.686-1.04 0.686-1.66z"
          fill="#f8f3e9"
        />
        <circle cx="115" cy="20.7" r="1.14" fill="#3b3838" />
        <path
          d="m139 9.6h-16.2c-0.391 0-0.766 0.155-1.04 0.431-0.277 0.277-0.432 0.652-0.432 1.04v28.8c0 0.391 0.155 0.766 0.432 1.04 0.276 0.277 0.651 0.432 1.04 0.432h16.2z"
          fill="#e1e0da"
        />
        <rect x="139" y="9.6" width="1.55" height="31.8" fill="#3b3838" />
        <path
          d="m121 29.3 17.7-3.26v-16.5h-16.2c-0.391 0-0.766 0.155-1.04 0.431-0.277 0.277-0.432 0.652-0.432 1.04z"
          fill="#f3f0f4"
        />
        <path
          d="m121 28.5h-4.93c-0.21 0-0.411 0.083-0.56 0.232-0.148 0.148-0.231 0.349-0.231 0.559v0.022c0 0.21 0.083 0.411 0.231 0.559 0.149 0.149 0.35 0.232 0.56 0.232h4.93z"
          fill="#afafaf"
        />
        <path
          d="m121 20h-4.93c-0.21 0-0.411 0.084-0.56 0.232-0.148 0.148-0.231 0.35-0.231 0.559v0.022c0 0.21 0.083 0.411 0.231 0.559 0.149 0.149 0.35 0.232 0.56 0.232h4.93z"
          fill="#afafaf"
        />
        <path
          d="m115 6.29c1.29 0 2.34-1.05 2.34-2.34v-1e-3c0-1.29-1.05-2.34-2.34-2.34h-0.99c-1.29 0-2.34 1.05-2.34 2.34v1e-3c0 1.29 1.05 2.34 2.34 2.34h0.99z"
          fill="#f8f3e9"
        />
        <path
          d="m116 3.95c0 0.631-0.513 1.14-1.14 1.14s-1.14-0.512-1.14-1.14c0-0.632 0.512-1.14 1.14-1.14s1.14 0.512 1.14 1.14z"
          fill="#3b3838"
        />
      </svg>
    `}};Ei([Jt()],Ri.prototype,"led1",void 0),Ei([Jt()],Ri.prototype,"led2",void 0),Ri=Ei([Qt("wokwi-big-sound-sensor")],Ri);var Pi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Ai=class extends qt{constructor(){super(...arguments),this.led1=!1,this.pinInfo=[{name:"INT",x:7.28,y:5.78,signals:[]},{name:"AD0",x:16.9,y:5.78,signals:[]},{name:"XCL",x:26.4,y:5.78,signals:[]},{name:"XDA",x:36,y:5.78,signals:[]},{name:"SDA",x:45.6,y:5.78,signals:[se("SDA")]},{name:"SCL",x:55.2,y:5.78,signals:[se("SCL")]},{name:"GND",x:64.8,y:5.78,signals:[{type:"power",signal:"GND"}]},{name:"VCC",x:74.4,y:5.78,signals:[le()]}]}render(){const{led1:t}=this;return Pt`
      <svg
        width="21.6mm"
        height="16.2mm"
        clip-rule="evenodd"
        fill-rule="evenodd"
        version="1.1"
        viewBox="0 0 81.6 61.2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="2.1" width="14" patternUnits="userSpaceOnUse">
            <path
              d=" m2.09 1.32c0.124 0 0.243-0.049 0.331-0.137 0.086-0.086 0.137-0.206 0.137-0.33v-0.387c0-0.124-0.050-0.242-0.137-0.33-0.087-0.087-0.207-0.137-0.331-0.137h-1.62v1.32z"
              fill="#f5f9f0"
            />
          </pattern>
        </defs>

        <!-- Board -->
        <path
          d="m81.6 0h-81.6v61.2h81.6zm-10 44.9c3.8 0 6.88 3.08 6.88 6.88 0 3.8-3.08 6.89-6.88 6.89-3.8 0-6.89-3.09-6.89-6.89 0-3.8 3.09-6.88 6.89-6.88zm-61.6 0c3.8 0 6.89 3.08 6.89 6.88 0 3.8-3.09 6.89-6.89 6.89-3.8 0-6.88-3.09-6.88-6.89 0-3.8 3.08-6.88 6.88-6.88zm-2.74-41.9c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8-2.8-1.26-2.8-2.8 1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm-9.58 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm19.2 0c1.55 0 2.81 1.26 2.81 2.81s-1.26 2.8-2.81 2.8c-1.55 0-2.8-1.26-2.8-2.8s1.26-2.81 2.8-2.81zm9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8-2.81-1.26-2.81-2.8 1.26-2.81 2.81-2.81zm-9.58 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81zm19.2 0c1.55 0 2.8 1.26 2.8 2.81s-1.26 2.8-2.8 2.8c-1.55 0-2.81-1.26-2.81-2.8s1.26-2.81 2.81-2.81z"
          fill="#16619d"
        />

        <!-- Right Chip -->
        <g fill="#fefdf4">
          <rect x="74.5" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="33" width="2.01" height="4.81" />
          <rect x="71.2" y="23.1" width="2.01" height="4.81" />
          <rect x="67.8" y="23.1" width="2.01" height="4.81" />
          <rect x="74.5" y="33" width="2.01" height="4.81" />
        </g>
        <g fill="#31322e">
          <rect x="74.5" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="33" width="2.01" height="2.4" />
          <rect x="71.2" y="25.5" width="2.01" height="2.4" />
          <rect x="67.8" y="25.5" width="2.01" height="2.4" />
          <rect x="74.5" y="33" width="2.01" height="2.4" />
        </g>

        <!-- Resistors -->
        <g fill="#e5e5e5">
          <rect x="12" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="21.3" width="3.83" height="9.3" />
          <rect x="56.5" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="21.3" width="3.83" height="9.3" />
          <rect x="17.7" y="35.6" width="3.83" height="9.3" />
          <rect x="23.3" y="21.3" width="3.83" height="9.3" />
          <rect x="62.2" y="21.3" width="3.83" height="9.3" />
          <rect x="51.2" y="35.8" width="3.83" height="9.3" />
          <rect x="56.9" y="35.8" width="3.83" height="9.3" />
        </g>
        <path d="m76 42.6v-3.13h-7.59v3.13z" fill="#fefdf4" />
        <rect x="23.1" y="35.6" width="3.83" height="9.3" fill="#e5e5e5" />

        <g fill="#26232b">
          <rect x="17.7" y="23.4" width="3.83" height="5.31" />
          <rect x="56.5" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="23.4" width="3.83" height="5.31" />
          <rect x="17.7" y="37.7" width="3.83" height="5.31" />
        </g>
        <g fill="#d8c18d">
          <rect x="23.3" y="23.4" width="3.83" height="5.31" />
          <rect x="62.2" y="23.4" width="3.83" height="5.31" />
          <rect x="51.2" y="37.8" width="3.83" height="5.31" />
          <rect x="56.9" y="37.8" width="3.83" height="5.31" />
          <path d="m74.3 42.6v-3.13h-4.33v3.13z" />
        </g>
        <g>
          <rect x="23.1" y="37.7" width="3.83" height="5.31" fill="#a06352" />
          <rect x="31.8" y="47.1" width="15.6" height="6.03" fill="#f3c338" />
          <rect x="67.3" y="27.9" width="9.76" height="5.28" fill="#010303" />
        </g>

        <!-- MPU6050 Chip -->
        <rect transform="translate(47,26)" width="5" height="14.5" fill="url(#pin-pattern)" />
        <rect
          transform="translate(32.3,40) rotate(180)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(46.5,40.7) rotate(90)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect
          transform="translate(32.3,26) rotate(270)"
          width="5"
          height="14.5"
          fill="url(#pin-pattern)"
        />
        <rect x="31.8" y="25.4" width="15.6" height="15.6" />

        <!-- LED -->
        <rect x="12" y="23.4" width="3.83" height="5.31" fill="#f5ecde" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${t&&At`<circle cx="13.9" cy="25.5" r="3.5" fill="#80ff80" filter="url(#ledFilter)" />`}

        <!-- PCB Pins-->
        <g fill="none" stroke="#d0ae88" stroke-width=".648px">
          <circle cx="64.8" cy="5.78" r="2.81" />
          <circle cx="55.2" cy="5.78" r="2.81" />
          <circle cx="45.6" cy="5.78" r="2.81" />
          <circle cx="36" cy="5.78" r="2.81" />
          <circle cx="26.4" cy="5.78" r="2.81" />
          <circle cx="16.9" cy="5.78" r="2.81" />
          <circle cx="7.28" cy="5.78" r="2.81" />
          <circle cx="74.4" cy="5.78" r="2.81" />
        </g>

        <!-- Text -->
        <text
          transform="rotate(90)"
          fill="#ffffff"
          font-family="sans-serif"
          font-size="3.6px"
          x="10.056"
        >
          <tspan x="10.056" y="-6">INT</tspan>
          <tspan x="10.056" y="-15.5">AD0</tspan>
          <tspan x="10.056" y="-25.157">XCL</tspan>
          <tspan x="10.056" y="-34.5">XDA</tspan>
          <tspan x="10.056" y="-44.38">SDA</tspan>
          <tspan x="9.911" y="-54">SCL</tspan>
          <tspan x="10.057" y="-63.54">GND</tspan>
          <tspan x="10.057" y="-73">VCC</tspan>
        </text>
      </svg>
    `}};Pi([Jt()],Ai.prototype,"led1",void 0),Ai=Pi([Qt("wokwi-mpu6050")],Ai);var Ii=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Di=class extends qt{constructor(){super(...arguments),this.led1=!1,this.ledPower=!1,this.pinInfo=[{name:"VIN",x:5,y:158.5,signals:[{type:"power",signal:"VCC"}]},{name:"GND.2",x:5,y:149,signals:[{type:"power",signal:"GND"}]},{name:"D13",x:5,y:139.5,signals:[ae("MOSI",0),{type:"pwm"}]},{name:"D12",x:5,y:130.4,signals:[ae("MISO",0),{type:"pwm"}]},{name:"D14",x:5,y:120,signals:[ae("SCK",0),{type:"pwm"}]},{name:"D27",x:5,y:110.8,signals:[{type:"pwm"}]},{name:"D26",x:5,y:101,signals:[{type:"pwm"}]},{name:"D25",x:5,y:91.3,signals:[{type:"pwm"}]},{name:"D33",x:5,y:81.7,signals:[{type:"pwm"}]},{name:"D32",x:5,y:72.2,signals:[{type:"pwm"}]},{name:"D35",x:5,y:62.9,signals:[]},{name:"D34",x:5,y:53.1,signals:[]},{name:"VN",x:5,y:44,signals:[]},{name:"VP",x:5,y:34,signals:[]},{name:"EN",x:5,y:24,signals:[]},{name:"3V3",x:101.3,y:158.5,signals:[{type:"power",signal:"VCC",voltage:3.3}]},{name:"GND.1",x:101.3,y:149,signals:[{type:"power",signal:"GND"}]},{name:"D15",x:101.3,y:139.5,signals:[ae("SS",0),{type:"pwm"}]},{name:"D2",x:101.3,y:130.4,signals:[{type:"pwm"}]},{name:"D4",x:101.3,y:120,signals:[{type:"pwm"}]},{name:"RX2",x:101.3,y:110.8,signals:[oe("RX",2),{type:"pwm"}]},{name:"TX2",x:101.3,y:101,signals:[oe("TX",2),{type:"pwm"}]},{name:"D5",x:101.3,y:91.3,signals:[ae("SS",1),{type:"pwm"}]},{name:"D18",x:101.3,y:81.7,signals:[ae("SCK",1),{type:"pwm"}]},{name:"D19",x:101.3,y:72.2,signals:[ae("MISO",1),{type:"pwm"}]},{name:"D21",x:101.3,y:62.9,signals:[se("SDA"),{type:"pwm"}]},{name:"RX0",x:101.3,y:53.1,signals:[oe("RX",0),{type:"pwm"}]},{name:"TX0",x:101.3,y:44,signals:[oe("TX",0),{type:"pwm"}]},{name:"D22",x:101.3,y:34,signals:[se("SCL"),{type:"pwm"}]},{name:"D23",x:101.3,y:24,signals:[ae("MOSI",1),{type:"pwm"}]}]}render(){const{ledPower:t,led1:e}=this;return Pt`
      <svg
        width="28.2mm"
        height="54.053mm"
        version="1.1"
        viewBox="0 0 107 201"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="pin-pattern" height="4.6" width="5" patternUnits="userSpaceOnUse">
            <path
              d="m3.5 2.85c0.268 1.82e-4 0.525-0.106 0.716-0.296 0.187-0.19 0.296-0.445 0.297-0.713l5.7e-4 -0.836c1.82e-4 -0.268-0.109-0.525-0.296-0.716-0.19-0.19-0.447-0.296-0.715-0.297l-3.5-0.0024-0.0019 2.85z"
              fill="#d1c479"
              stroke-width="3.11"
            />
          </pattern>
          <pattern id="small-pin-pattern" height="4.6" width="2.5" patternUnits="userSpaceOnUse">
            <path
              d="m1.4 1.32c0-0.138-0.0547-0.271-0.153-0.37-0.098-0.0965-0.23-0.153-0.368-0.153h-0.432c-0.138 0-0.271 0.0563-0.37 0.153-0.098 0.098-0.153 0.231-0.153 0.37v1.81h1.47z"
              fill="#f5f9f0"
              stroke-width="1.61"
            />
          </pattern>
          <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        <!-- Board -->
        <path
          d="m7.56 0c-4.19 0-7.56 3.37-7.56 7.56v181c0 4.19 3.37 7.56 7.56 7.56h91.5c4.19 0 7.56-3.37 7.56-7.56v-181c0-4.19-3.37-7.56-7.56-7.56zm1.11 2.5a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.9 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm3.75 15.8a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 0.438a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.15a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.8 0.344a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.27a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 9.24a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0.0762 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.6 0.0371a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 0.422a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.115a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.4 9.54a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.0391a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.5 9.7a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.5 0.346a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.6 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm0 9.58a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.23a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.35a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.8 9.51a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.154a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm96.7 9.43a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm-96.7 0.152a3.4 3.4 0 0 1 3.4 3.4 3.4 3.4 0 0 1-3.4 3.4 3.4 3.4 0 0 1-3.4-3.4 3.4 3.4 0 0 1 3.4-3.4zm3.79 24.7a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24zm88.7 0.217a6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24 6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- ESP32 Chip -->
        <rect transform="translate(85,34)" width="4.8" height="55" fill="url(#pin-pattern)"></rect>
        <rect
          transform="translate(20.5,87) rotate(180)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect
          transform="translate(80,98) rotate(90)"
          width="4.8"
          height="55"
          fill="url(#pin-pattern)"
        ></rect>
        <rect x="20" y="24.8" width="65.6" height="73.3" fill="#808080" fill-rule="evenodd" />

        <!-- Regulator -->
        <g fill="#ececec" fill-rule="evenodd">
          <rect x="19.3" y="143" width="7.21" height="11.5" />
          <rect x="39.8" y="139" width="6.59" height="3.07" />
          <rect x="40" y="147" width="6.59" height="3.07" />
          <rect x="40.2" y="156" width="6.59" height="3.07" />
        </g>
        <rect x="26.3" y="137" width="14" height="24.7" fill="#4d4d4d" fill-rule="evenodd" />

        <!-- Buttons -->
        <g stroke-width="1.24">
          <rect x="77.6" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="83.2" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m80.7 190h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m80.7 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="81" y="190" width="5.23" height="2.59" />
            <rect x="81" y="173" width="5.23" height="2.59" />
            <path
              d="m84.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m81.8 190c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>
        <g stroke-width="1.24">
          <rect x="17.7" y="177" width="11.1" height="9.96" fill="#cecccb" />
          <circle cx="23.3" cy="182" r="3.48" fill="#ffdc8e" />
          <g fill="#cecccb">
            <path d="m20.8 189h-1.34v1.64c0 0.734 0.595 1.33 1.33 1.33h0.0099z" />
            <path d="m20.8 175h-1.34v-1.64c0-0.734 0.595-1.33 1.33-1.33h0.0099z" />
            <rect x="21" y="189" width="5.23" height="2.59" />
            <rect x="21" y="172" width="5.23" height="2.59" />
            <path
              d="m24.5 175c0.062 0 0.122 0.0248 0.166 0.0682 0.0434 0.0446 0.0682 0.104 0.0682 0.167 0 0.134 0.0533 0.263 0.149 0.358 0.0955 0.0942 0.224 0.148 0.358 0.148h0.0236c0.141 0 0.277-0.0558 0.376-0.155s0.155-0.234 0.155-0.374v-0.564h2.16v3.09h-1.69v0.744h-2.16v-0.392h-1.87v0.392h-2.16v-0.744h-1.69v-3.09h2.16v0.564c0 0.14 0.0558 0.275 0.155 0.374s0.234 0.155 0.376 0.155h0.0236c0.135 0 0.263-0.0533 0.358-0.148 0.0955-0.0955 0.149-0.224 0.149-0.358 0-0.0632 0.0248-0.123 0.0682-0.167 0.0446-0.0434 0.104-0.0682 0.167-0.0682z"
            />
            <path
              d="m21.9 189c-0.0632 0-0.123-0.0248-0.167-0.0694-0.0434-0.0434-0.0682-0.103-0.0682-0.166 0-0.134-0.0533-0.263-0.149-0.358-0.0955-0.0955-0.223-0.149-0.358-0.149h-0.0236c-0.141 0-0.277 0.0558-0.376 0.156-0.0992 0.0992-0.155 0.234-0.155 0.374v0.564h-2.16v-3.09h1.69v-0.745h2.16v0.393h1.87v-0.393h2.16v0.745h1.69v3.09h-2.16v-0.564c0-0.14-0.0558-0.275-0.155-0.374-0.0992-0.1-0.234-0.156-0.376-0.156h-0.0236c-0.134 0-0.263 0.0533-0.358 0.149s-0.149 0.224-0.149 0.358c0 0.0632-0.0248 0.123-0.0682 0.166-0.0446 0.0446-0.104 0.0694-0.166 0.0694z"
            />
          </g>
        </g>

        <!-- USB Connection -->
        <path
          d="m66.4 197 1.06 2.24c0.0651 0.142 0.0731 0.302 0.0207 0.448-0.0525 0.147-0.16 0.266-0.301 0.332-0.14 0.0665-0.302 0.0744-0.448 0.022-0.146-0.0525-0.266-0.16-0.332-0.301l-0.724-1.54-3e-3 0.207c-6e-3 0.488-0.206 0.955-0.556 1.3-0.35 0.342-0.821 0.529-1.31 0.522l-22.2-0.29c-0.489-6e-3 -0.955-0.206-1.3-0.556-0.341-0.35-0.529-0.821-0.522-1.31l3e-3 -0.207-0.764 1.52c-0.0701 0.14-0.192 0.244-0.34 0.292-0.147 0.0486-0.307 0.0365-0.446-0.0336l-1e-3 -1e-5c-0.138-0.0701-0.244-0.192-0.292-0.34-0.0486-0.147-0.0365-0.307 0.0336-0.447l1.11-2.21-0.602-8e-3 0.269-20.6 28.2 0.369-0.269 20.6z"
          fill="#cecccb"
          stroke-width="1.26"
        />
        <path
          d="m60.7 177-0.0236 1.8c-7.9e-4 0.0607 0.0301 0.116 0.0802 0.148 0.522 0.329 3.38 2.12 3.38 2.12l-0.0217 1.66-1.74-0.0227-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.66-0.0217 0.0413-3.16c2e-3 -0.136-0.0496-0.265-0.143-0.361-0.0948-0.096-0.223-0.151-0.357-0.152l-1.58-0.0207-0.0172 1.31-6.46-0.0845 0.0172-1.31-1.58-0.0207c-0.134-2e-3 -0.264 0.0496-0.36 0.143-0.0973 0.0936-0.152 0.221-0.154 0.357l-0.0413 3.16-1.66-0.0217-0.0156 1.19-2.63-0.0344 0.0156-1.19-1.74-0.0228 0.0217-1.66s2.91-1.73 3.43-2.03c0.0522-0.0309 0.0833-0.0848 0.0841-0.146l0.0236-1.8z"
          fill="#989898"
          stroke-width="1.26"
        />

        <!-- LEDs -->
        <g stroke-width="1.44">
          <rect x="35" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="35" y="111" width="3.83" height="5.31" fill="#f5ecde" />
          ${t&&At`<circle cx="37" cy="112.5" r="4" fill="red" filter="url(#ledFilter)" />`}

          <rect x="69.5" y="108" width="3.83" height="9.3" fill="#e5e5e5" />
          <rect x="69.5" y="110" width="3.83" height="5.31" fill="#f5ecde" />
          ${e&&At`<circle cx="71.5" cy="112.5" r="4" fill="blue" filter="url(#ledFilter)" />`}
        </g>

        <!-- Small Chip-->
        <rect
          transform="translate(69,137)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(82.8,160.5) rotate(180)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(87.2,142) rotate(90)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect
          transform="translate(64,155.8) rotate(270)"
          width="13.9"
          height="3"
          fill="url(#small-pin-pattern)"
        ></rect>
        <rect x="66.9" y="140" width="17.4" height="17.4" fill="#333" stroke-width="1.61" />

        <!-- Texts -->
        <text fill="#ffffff" font-family="sans-serif" font-size="3.72px" transform="rotate(270)">
          <tspan x="-162.21" y="12.285">VIN</tspan>
          <tspan x="-153.37" y="12.317">GND</tspan>
          <tspan x="-143.03" y="12.269">D13</tspan>
          <tspan x="-132.81" y="12.130">D12</tspan>
          <tspan x="-123.10" y="12.514">D14</tspan>
          <tspan x="-113.82" y="12.481">D27</tspan>
          <tspan x="-103.55" y="12.580">D26</tspan>
          <tspan x="-94.204" y="12.509">D25</tspan>
          <tspan x="-84.482" y="12.632">D33</tspan>
          <tspan x="-74.139" y="12.294">D32</tspan>
          <tspan x="-64.263" y="12.750">D35</tspan>
          <tspan x="-54.385" y="12.631">D34</tspan>
          <tspan x="-44.529" y="12.468">VN</tspan>
          <tspan x="-35.205" y="12.546">VP</tspan>
          <tspan x="-25.439" y="12.846">EN</tspan>
          <tspan x="-163.01" y="95.712">3V3</tspan>
          <tspan x="-153.64" y="95.392">GND</tspan>
          <tspan x="-142.86" y="95.431">D15</tspan>
          <tspan x="-131.36" y="95.296">D2</tspan>
          <tspan x="-122.53" y="95.505">D4</tspan>
          <tspan x="-114.75" y="95.613">RX2</tspan>
          <tspan x="-104.84" y="95.442">TX2</tspan>
          <tspan x="-93.899" y="95.430">D5</tspan>
          <tspan x="-85.460" y="95.585">D18</tspan>
          <tspan x="-75.415" y="95.747">D19</tspan>
          <tspan x="-65.796" y="95.687">D21</tspan>
          <tspan x="-55.802" y="95.818">RX0</tspan>
          <tspan x="-45.850" y="95.613">TX0</tspan>
          <tspan x="-36.582" y="96.012">D22</tspan>
          <tspan x="-26.250" y="95.903">D23</tspan>
        </text>
        <text x="30" y="59" fill="#cecccb" font-family="sans-serif" font-size="15px">ESP32</text>

        <!-- Antenna -->
        <path
          d="m24.3 22.1v-18.8h8v11.5h10.2v-11h8.5v10.5h10v-10.5h17.8v20.2"
          fill="none"
          stroke="#4f4c48"
          stroke-width="1px"
        />
        <path d="m69.7 4.16v19.5" fill="none" stroke="#4f4c48" stroke-width="1px" />
      </svg>
    `}};Ii([Jt()],Di.prototype,"led1",void 0),Ii([Jt()],Di.prototype,"ledPower",void 0),Di=Ii([Qt("wokwi-esp32-devkit-v1")],Di);var $i=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Mi=class extends qt{constructor(){super(...arguments),this.angle=0,this.stepSize=18,this.pressed=!1,this.arrowTimer=null,this.pinInfo=[{name:"CLK",y:7.9,x:116,number:1,signals:[]},{name:"DT",y:17.4,x:116,number:2,signals:[]},{name:"SW",y:27,x:116,number:3,signals:[]},{name:"VCC",y:36.3,x:116,number:4,signals:[le()]},{name:"GND",y:45.5,x:116,number:5,signals:[{type:"power",signal:"GND"}]}]}static get styles(){return et`
      svg {
        user-select: none;
      }

      .arrow-container {
        cursor: pointer;
      }

      svg:hover .arrow {
        fill: #666;
        stroke: #666;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .arrow-container:hover .arrow {
        fill: white;
      }

      svg:hover .handle:hover {
        stroke: #ccc;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      svg:hover .handle.active {
        fill: white;
        stroke: white;
        stroke-width: 1.5px;
        transition: stroke-width 0.3s;
      }

      .handle {
        cursor: pointer;
      }

      g[tabindex]:focus {
        outline: none;
      }

      g[tabindex]:focus + .focus-indicator {
        opacity: 1;
      }
    `}render(){return Pt`
      <svg
        width="30.815mm"
        height="18.63mm"
        version="1.1"
        viewBox="0 0 116 70.4"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          <linearGradient
            id="a"
            x1="158"
            x2="170"
            y1="86.5"
            y2="86.5"
            gradientTransform="translate(-75.1 -60.1)"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4d4d4d" offset="0" />
            <stop stop-color="#4d4d4d" stop-opacity="0" offset="1" />
          </linearGradient>
        </defs>

        <!-- Board -->
        <path
          d="m0 0v70.4h99v-70.4zm18 56.5a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5zm63.8 0.213a6.5 6.5 0 0 1 6.5 6.5 6.5 6.5 0 0 1-6.5 6.5 6.5 6.5 0 0 1-6.5-6.5 6.5 6.5 0 0 1 6.5-6.5z"
          fill="#1a1a1a"
          fill-rule="evenodd"
        />

        <!-- Rotator -->
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="9.05" y="17.4" width="6.95" height="2.47" rx=".756" />
          <rect x="9.15" y="26.5" width="6.95" height="2.47" rx=".756" />
          <rect x="9.05" y="36.1" width="6.95" height="2.47" rx=".756" />
        </g>

        <g tabindex="0" @keydown=${this.keydown} @keyup=${this.keyup}>
          <rect x="12.2" y="8.05" width="48.4" height="41" rx="7.12" fill="#e6e6e6" />

          <circle cx="36.6" cy="28.5" r="13.5" fill="#666" />
          <rect x="32.5" y="7.87" width="7.42" height="41.5" fill="#666" />

          <!-- Handle -->
          <path
            transform="rotate(${this.angle}, 36.244, 28.5)"
            d="m36.3 21.4a7.03 7.14 0 0
              0-3.74 1.1v12.1a7.03 7.14 0 0 0 3.74 1.1 7.03 7.14 0 0 0 7.03-7.14 7.03 7.14 0 0
              0-7.03-7.14z"
            fill="#ccc"
            stroke="#060606"
            stroke-width=".3"
            class="handle ${this.pressed?"active":""}"
            @mousedown=${this.press}
            @mouseup=${this.release}
            @mouseleave=${this.release}
          />

          <!-- Counter Clockwise Arrow -->
          <g
            class="arrow-container"
            @click=${this.counterClockwiseStep}
            @mousedown=${this.counterclockwiseArrowPress}
            @mouseup=${this.arrowRelease}
            @mouseleave=${this.arrowRelease}
          >
            <circle cx="20" cy="43" r="12" fill="red" opacity="0" />
            <path
              d="m21 44.5c-5.17-1.78-7.55-5.53-6.6-11.2 0.0662-0.327 0.107-0.938 0.272-1.06 0.204-0.137 0.312-0.116 0.39-0.1 0.0775 0.0152 0.139 0.0274 0.189 0.102 0.846 3.81 3.13 6.84 6.57 7.59 0.304-0.787 0.461-3.32 0.826-3.24 0.428 0.0848 4.31 5.73 4.93 6.65-0.978 0.839-6.07 4.44-6.95 4.28 0 0 0.206-2.19 0.362-2.96z"
              fill="#b3b3b3"
              stroke="#000"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>

          <!-- Clockwise Arrow -->
          <g
            class="arrow-container"
            @click=${this.clockwiseStep}
            @mousedown=${this.clockwiseArrowPress}
            @mouseup=${this.arrowRelease}
            @mouseleave=${this.arrowRelease}
          >
            <circle cx="20" cy="15" r="12" fill="red" opacity="0" />
            <path
              d="m21.2 12.1c-5.17 1.78-7.55 5.53-6.6 11.2 0.0662 0.327 0.107 0.938 0.272 1.06 0.204 0.137 0.312 0.116 0.39 0.1 0.0775-0.0152 0.139-0.0274 0.189-0.102 0.846-3.81 3.13-6.84 6.57-7.59 0.304 0.787 0.461 3.32 0.826 3.24 0.428-0.0848 4.31-5.73 4.93-6.65-0.978-0.839-6.07-4.44-6.95-4.28 0 0 0.206 2.19 0.362 2.96z"
              fill="#b3b3b3"
              stroke="#022"
              stroke-width=".0625px"
              class="arrow"
            />
          </g>
        </g>

        <!-- Focus indicator for the group above-->
        <rect
          class="focus-indicator"
          x="10.2"
          y="6.05"
          width="52.4"
          height="45"
          rx="7.12"
          stroke="white"
          stroke-width="2"
          fill="none"
          opacity="0"
        />

        <!-- Chip Pins -->
        <rect
          x="83"
          y="1.72"
          width="10.9"
          height="49.2"
          fill="url(#a)"
          fill-rule="evenodd"
          opacity=".65"
          stroke="#fff"
          stroke-width="1.16"
        />
        <g fill="#ccc" fill-rule="evenodd">
          <rect x="86.9" y="6.54" width="28.9" height="2.47" rx=".877" />
          <rect x="86.8" y="15.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="25.6" width="28.9" height="2.47" rx=".877" />
          <rect x="87.1" y="34.9" width="28.9" height="2.47" rx=".877" />
          <rect x="87.6" y="44.1" width="28.9" height="2.47" rx=".877" />
        </g>
        <g fill="#ffffff" font-family="sans-serif" letter-spacing="0px" word-spacing="0px">
          <text x="65.55" y="12.13" font-size="7.29px" fill="#ffffff" stroke-width=".182">CLK</text>
          <text x="65.02" y="21.93" font-size="7.44px" fill="#ffffff">DT</text>
          <text x="65.29" y="31.26" font-size="7.54px" fill="#ffffff">SW</text>
          <text x="70.42" y="39.99" font-size="6.82px" fill="#ffffff">+</text>
          <text x="64.31" y="49.74" font-size="7.59px" fill="#ffffff">GND</text>
        </g>
      </svg>
    `}clockwiseStep(){this.angle=(this.angle+this.stepSize)%360,this.dispatchEvent(new InputEvent("rotate-cw"))}counterClockwiseStep(){this.angle=(this.angle-this.stepSize+360)%360,this.dispatchEvent(new InputEvent("rotate-ccw"))}press(){this.pressed||(this.dispatchEvent(new InputEvent("button-press")),this.pressed=!0)}release(){this.pressed&&(this.dispatchEvent(new InputEvent("button-release")),this.pressed=!1)}counterclockwiseArrowPress(){this.arrowTimer=setInterval((()=>{this.counterClockwiseStep()}),300)}clockwiseArrowPress(){this.arrowTimer=setInterval((()=>{this.clockwiseStep()}),300)}arrowRelease(){null!=this.arrowTimer&&(clearInterval(this.arrowTimer),this.arrowTimer=null)}keydown(t){switch(t.key){case"ArrowUp":case"ArrowRight":this.clockwiseStep(),t.preventDefault();break;case"ArrowDown":case"ArrowLeft":this.counterClockwiseStep(),t.preventDefault();break;case" ":this.press(),t.preventDefault()}}keyup(t){" "===t.key&&(t.preventDefault(),this.release())}};$i([Jt()],Mi.prototype,"angle",void 0),$i([Jt()],Mi.prototype,"stepSize",void 0),$i([Jt()],Mi.prototype,"pressed",void 0),Mi=$i([Qt("wokwi-ky-040")],Mi);var Bi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Ti=class extends qt{constructor(){super(...arguments),this.ledDO=!1,this.ledPower=!1,this.pinInfo=[{name:"VCC",x:172,y:16,signals:[le()]},{name:"GND",x:172,y:26,signals:[{type:"power",signal:"GND"}]},{name:"DO",x:172,y:35.8,signals:[]},{name:"AO",x:172,y:45.5,signals:[ne(0)]}]}render(){const{ledPower:t,ledDO:e}=this;return Pt`
      <svg
        width="45.95mm"
        height="16.267mm"
        version="1.1"
        viewBox="0 0 174 61.5"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- board -->
        <path
          d="m153 0h-136v61.5h136zm-129 52c1.9 0 3.44 1.5 3.44 3.34s-1.54 3.34-3.44 3.34-3.44-1.5-3.44-3.34 1.54-3.34 3.44-3.34zm98.3-29.8c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55zm-98.3-19.4c1.9 0 3.44 1.5 3.44 3.34 0 1.84-1.54 3.34-3.44 3.34s-3.44-1.5-3.44-3.34c0-1.84 1.54-3.34 3.44-3.34z"
          fill="#1c2546"
        />

        <!--Photo sensor-->
        <rect
          x="18.9"
          y="20.1"
          width="11.2"
          height="22.2"
          fill="none"
          stroke="#fff"
          stroke-width="1.08px"
        />
        <circle cx="24.5" cy="25.6" r="3.14" fill="#dae3eb" />
        <circle cx="24.5" cy="36.8" r="3.14" fill="#dae3eb" />
        <path
          d="m24.5 25.7c0-0.199-0.079-0.39-0.22-0.53-0.14-0.141-0.331-0.22-0.529-0.22h-23c-0.199 0-0.389 0.079-0.53 0.22-0.14 0.14-0.219 0.331-0.219 0.53 0 0.198 0.079 0.389 0.219 0.53 0.141 0.14 0.331 0.219 0.53 0.219h23c0.198 0 0.389-0.079 0.529-0.219 0.141-0.141 0.22-0.332 0.22-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m24.5 36.7c0-0.198-0.079-0.389-0.22-0.53-0.14-0.14-0.331-0.219-0.529-0.219h-23c-0.199 0-0.389 0.079-0.53 0.219-0.14 0.141-0.219 0.332-0.219 0.53 0 0.199 0.079 0.39 0.219 0.53 0.141 0.141 0.331 0.22 0.53 0.22h23c0.198 0 0.389-0.079 0.529-0.22 0.141-0.14 0.22-0.331 0.22-0.53z"
          fill="#a8b6ba"
        />
        <path
          d="m8.64 22.8c0-0.375-0.304-0.679-0.679-0.679h-6.14c-0.375 0-0.679 0.304-0.679 0.679v16.8c0 0.375 0.304 0.679 0.679 0.679h6.14c0.375 0 0.679-0.304 0.679-0.679v-16.8z"
          fill="#cc4247"
        />
        <clipPath>
          <path
            d="m27.9 29c0-0.375-0.304-0.679-0.679-0.679h-6.14c-0.375 0-0.679 0.304-0.679 0.679v16.8c0 0.375 0.304 0.679 0.679 0.679h6.14c0.375 0 0.679-0.304 0.679-0.679v-16.8z"
          />
        </clipPath>

        <!-- Holes -->
        <g fill="none" stroke-width="1.08px">
          <ellipse cx="24.5" cy="6.11" rx="3.43" ry="3.34" stroke="#a8b6ba" />
          <ellipse cx="24.5" cy="55.4" rx="3.43" ry="3.34" stroke="#a8b6ba" />

          <!-- +/- -->
          <g stroke="#fff">
            <path d="m24 44.7v4.75" />
            <path d="m24 12.1v4.75" />
            <path d="m26.4 14.5h-4.75" />
          </g>
        </g>

        <!-- Resistors -->
        <g fill="#dae3eb">
          <rect x="37.7" y="8.69" width="16.7" height="5.52" />
          <rect x="37.7" y="22" width="16.7" height="5.52" />
          <rect x="37.7" y="34.5" width="16.7" height="5.52" />
        </g>
        <rect x="41.9" y="34.3" width="8.43" height="5.9" fill="#29261c" />
        <path d="m108 21.2v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m108 17v-8.43h-5.9v8.43z" fill="#29261c" />
        <path d="m108 53.8v-16.7h-5.52v16.7z" fill="#dae3eb" />
        <path d="m108 49.7v-8.43h-5.9v8.43z" fill="#29261c" />
        <rect x="37.7" y="47.5" width="16.7" height="5.52" fill="#dae3eb" />
        <rect x="41.9" y="8.5" width="8.43" height="5.9" fill="#907463" />
        <rect x="41.9" y="21.8" width="8.43" height="5.9" fill="#907463" />
        <rect x="41.9" y="47.3" width="8.43" height="5.9" fill="#29261c" />

        <!-- LEDs -->
        <rect x="118" y="4.77" width="13" height="4.29" fill="#dae3eb" />
        <rect x="121" y="4.62" width="6.55" height="4.59" fill="#fffefe" />
        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        ${t&&At`<circle cx="124.5" cy="7" r="4" fill="green" filter="url(#ledFilter)" />`}

        <rect x="118" y="52.6" width="13" height="4.29" fill="#dae3eb" />
        <rect x="121" y="52.5" width="6.55" height="4.59" fill="#fffefe" />
        ${e&&At`<circle cx="124.5" cy="55" r="4" fill="red" filter="url(#ledFilter)" />`}

        <!-- Chip -->
        <g fill="#dae3eb">
          <path
            d="m72.7 34.6h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m72.7 40.4h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.287 0.677 0.448 1.08 0.448h9.67z"
          />
          <path
            d="m72.7 46.2h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.288 0.677 0.449 1.08 0.449h9.67z"
          />
          <path
            d="m72.7 52h-9.67c-0.407 0-0.796 0.162-1.08 0.449-0.287 0.287-0.448 0.677-0.448 1.08v1e-3c0 0.406 0.161 0.796 0.448 1.08 0.288 0.288 0.677 0.449 1.08 0.449h9.67z"
          />
          <path
            d="m84.4 55.1h9.67c0.406 0 0.796-0.161 1.08-0.449 0.288-0.287 0.449-0.677 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 49.3h9.67c0.406 0 0.796-0.161 1.08-0.449 0.288-0.287 0.449-0.677 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 43.5h9.67c0.406 0 0.796-0.161 1.08-0.448 0.288-0.288 0.449-0.678 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
          <path
            d="m84.4 37.7h9.67c0.406 0 0.796-0.161 1.08-0.448 0.288-0.288 0.449-0.678 0.449-1.08v-1e-3c0-0.406-0.161-0.796-0.449-1.08-0.287-0.287-0.677-0.449-1.08-0.449h-9.67z"
          />
        </g>
        <rect x="70.3" y="33.2" width="16.1" height="23.3" fill="#29261c" />

        <!-- Decorations -->
        <rect x="62.8" y="7.63e-9" width="32.1" height="32.1" fill="#466fb5" />
        <circle cx="78.9" cy="16" r="6.56" fill="#bcc2d5" />
        <path d="m78.9 6.72v18.6" fill="none" stroke="#3f3c40" stroke-width="2.5px" />
        <path d="m88.2 16h-18.6" fill="none" stroke="#3f3c40" stroke-width="2.5px" />
        <path
          d="m123 19.8c5.5 0 9.96 4.46 9.96 9.96s-4.46 9.96-9.96 9.96-9.96-4.46-9.96-9.96 4.46-9.96 9.96-9.96zm0 2.4c4.17 0 7.55 3.38 7.55 7.55 0 4.17-3.38 7.55-7.55 7.55s-7.55-3.38-7.55-7.55c0-4.17 3.38-7.55 7.55-7.55z"
          fill="#d4d0d1"
        />

        <!-- Text -->
        <g fill="#fffefe" font-size="4.4px" font-family="sans-serif">
          <text x="117.46" y="13.90">PWR</text>
          <text x="117.46" y="18.41">LED</text>
          <text x="133.16" y="17.37">VCC</text>
          <text x="133.16" y="26.87">GND</text>
          <text x="135.42" y="36.55">DO</text>
          <text x="135.42" y="46.359">AO</text>
          <text x="117.44" y="45.53">DO</text>
          <text x="117.44" y="50.036">LED</text>
        </g>

        <!-- Board pins -->
        <path
          d="m143 11.7v38h8.39v-38z"
          fill="none"
          stroke="#fff"
          stroke-linejoin="round"
          stroke-width=".4px"
        />
        <g fill="#433b38">
          <path d="m144 42.1v6.55h6.55v-6.55z" />
          <path d="m144 32.3v6.55h6.55v-6.55z" />
          <path d="m144 22.6v6.55h6.55v-6.55z" />
          <path d="m144 12.9v6.55h6.55v-6.55z" />
        </g>
        <g fill="#9f9f9f">
          <path
            d="m147 43.9c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.271 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 34.2c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.271 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.189 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 24.4c-0.382 0-0.748 0.151-1.02 0.422-0.27 0.27-0.421 0.636-0.421 1.02v1e-3c0 0.382 0.151 0.748 0.421 1.02 0.271 0.27 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.19 0.423-0.423v-2.04c0-0.234-0.19-0.423-0.423-0.423h-26.1z"
          />
          <path
            d="m147 14.7c-0.382 0-0.748 0.152-1.02 0.422-0.27 0.27-0.421 0.637-0.421 1.02s0.151 0.749 0.421 1.02c0.271 0.27 0.637 0.422 1.02 0.422h26.1c0.233 0 0.423-0.19 0.423-0.424v-2.03c0-0.234-0.19-0.424-0.423-0.424h-26.1z"
          />
        </g>
      </svg>
    `}};Bi([Jt()],Ti.prototype,"ledDO",void 0),Bi([Jt()],Ti.prototype,"ledPower",void 0),Ti=Bi([Qt("wokwi-photoresistor-sensor")],Ti);var Ui=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let _i=class extends qt{constructor(){super(...arguments),this.ledRed=0,this.ledGreen=0,this.ledBlue=0,this.pinInfo=[{name:"R",x:8.5,y:44,signals:[]},{name:"COM",x:17.5,y:54,signals:[]},{name:"G",x:26.4,y:48,signals:[]},{name:"B",x:35.7,y:43,signals:[]}]}render(){const{ledRed:t,ledGreen:e,ledBlue:i}=this,r=Math.max(t,e,i),n=r?.2+.6*r:0;return Pt`
      <?xml version="1.0" encoding="UTF-8"?>
      <svg
        width="42.129"
        height="72.582"
        version="1.2"
        viewBox="-17 -10 37.3425 57.5115"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- LED Legs -->
        <g fill="none" stroke="#9D9999" stroke-linecap="round" stroke-width=".89px">
          <path d="m3.3863 15.334 3.0611 13.971" />
          <path d="m7.2753 13.972 5.9987 4.0518 1.1777 6.5679" stroke-linejoin="round" />
          <path d="m-4.3793 14.184-5.0755 5.6592-0.10206 6.1694" stroke-linejoin="round" />
          <path d="m-1.1952 15.607-0.33725 19.49" />
        </g>

        <!-- LED Body -->
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          opacity=".3"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="#e6e6e6"
          opacity=".5"
        />
        <path
          d="m8.3435 5.65v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
          fill="#d1d1d1"
          opacity=".9"
        />
        <g transform="translate(-5.8295 -7.351)">
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v4.6296c1.4738 1.6517 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586l-4e-5 -1.5235c-7e-4 -1.1419-0.4744-2.2032-1.283-3.1054z"
            opacity=".7"
          />
          <path
            d="m14.173 13.001v3.1054c0 2.7389-3.1658 4.9651-7.0855 4.9651-3.9125 2e-5 -7.0877-2.219-7.0877-4.9651v3.1054c1.4738 1.6502 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8586-7.4e-4 -1.1412-0.47444-2.2025-1.283-3.1047z"
            opacity=".25"
          />
          <ellipse cx="7.0877" cy="16.106" rx="7.087" ry="4.9608" opacity=".25" />
        </g>
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="3.1961 13.095 6.0156 13.095 10.012 8.8049 3.407 8.8049 2.2032 9.648 2.2032 16.107 3.1961 16.107"
          fill="#666"
        />
        <polygon
          transform="translate(-5.8295 -7.351)"
          points="11.06 13.095 11.06 16.107 11.974 16.107 11.974 8.5241 10.778 8.5241 11.215 9.0338 7.4117 13.095"
          fill="#666"
        />
        <path
          d="m8.3435 5.65v-5.9126c0-3.9132-3.168-7.0884-7.0855-7.0884-3.9125 0-7.0877 3.1694-7.0877 7.0884v13.649c1.4738 1.651 4.0968 2.7526 7.0877 2.7526 4.6195 0 8.3686-2.6179 8.3686-5.8594v-1.5235c-7.4e-4 -1.1426-0.47444-2.2039-1.283-3.1061z"
          fill="white"
          opacity=".65"
        />
        <g transform="translate(-5.8295 -7.351)" fill="#fff">
          <path
            d="m10.388 3.7541 1.4364-0.2736c-0.84168-1.1318-2.0822-1.9577-3.5417-2.2385l0.25416 1.0807c0.76388 0.27072 1.4068 0.78048 1.8511 1.4314z"
            opacity=".5"
          />
          <path
            d="m0.76824 19.926v1.5199c0.64872 0.5292 1.4335 0.97632 2.3076 1.3169v-1.525c-0.8784-0.33624-1.6567-0.78194-2.3076-1.3118z"
            opacity=".5"
          />
          <path
            d="m11.073 20.21c-0.2556 0.1224-0.52992 0.22968-0.80568 0.32976-0.05832 0.01944-0.11736 0.04032-0.17784 0.05832-0.56376 0.17928-1.1614 0.31896-1.795 0.39456-0.07488 0.0094-0.1512 0.01872-0.22464 0.01944-0.3204 0.03024-0.64368 0.05832-0.97056 0.05832-0.14832 0-0.30744-0.01512-0.4716-0.02376-1.2002-0.05688-2.3306-0.31464-3.2976-0.73944l-2e-5 -8.3895v-4.8254c0-1.471 0.84816-2.7295 2.0736-3.3494l-0.02232-0.05328-1.2478-1.512c-1.6697 1.003-2.79 2.8224-2.79 4.9118v11.905c-0.04968-0.04968-0.30816-0.30888-0.48024-0.52992l-0.30744 0.6876c1.4011 1.4818 3.8088 2.4617 6.5426 2.4617 1.6798 0 3.2371-0.37368 4.5115-1.0022l-0.52704-0.40896-0.01006 0.0072z"
            opacity=".5"
          />
        </g>

        <filter id="ledFilter" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="4" />
        </filter>
        <filter id="ledFilterRed" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*t}" />
        </filter>
        <filter id="ledFilterGreen" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*e}" />
        </filter>
        <filter id="ledFilterBlue" x="-0.8" y="-0.8" height="5.2" width="5.8">
          <feGaussianBlur stdDeviation="${3*i}" />
        </filter>

        <circle
          cx="1.7"
          cy="3"
          r="${5*t+2}"
          fill="rgb(255, 0, 0)"
          opacity="${Math.min(20*t,.3)}"
          filter="url(#ledFilterRed)"
        />
        <circle
          cx="2.7"
          cy="5"
          r="${5*e+2}"
          fill="rgb(0, 255, 0)"
          opacity="${Math.min(20*e,.3)}"
          filter="url(#ledFilterGreen)"
        />
        <circle
          cx="0.7"
          cy="5"
          r="${5*i+2}"
          fill="rgb(1,85,253)"
          opacity="${Math.min(20*i,.3)}"
          filter="url(#ledFilterBlue)"
        />

        <circle
          cx="1.7"
          cy="4"
          r="10"
          fill="rgb(${255*t}, ${255*e+90*i}, ${255*i})"
          filter="url(#ledFilter)"
          opacity="${n}"
        />

        <!-- Grey hollow around the LED -->
        <circle
          cx="1.7"
          cy="4"
          r="13"
          stroke="#666"
          stroke-width="1"
          fill="none"
          filter="url(#ledFilter)"
          opacity="${n}"
        />
      </svg>
    `}};Ui([Jt()],_i.prototype,"ledRed",void 0),Ui([Jt()],_i.prototype,"ledGreen",void 0),Ui([Jt()],_i.prototype,"ledBlue",void 0),_i=Ui([Qt("wokwi-rgb-led")],_i);let ji=class extends qt{constructor(){super(...arguments),this.screenWidth=240,this.screenHeight=320,this.pinInfo=[{name:"VCC",x:48.3,y:287.2,signals:[{type:"power",signal:"VCC"}]},{name:"GND",x:57.9012,y:287.2,signals:[{type:"power",signal:"GND"}]},{name:"CS",x:67.5024,y:287.2,signals:[ae("SS")]},{name:"RST",x:77.1036,y:287.2,signals:[]},{name:"D/C",x:86.7048,y:287.2,signals:[]},{name:"MOSI",x:96.306,y:287.2,signals:[ae("MOSI")]},{name:"SCK",x:105.9072,y:287.2,signals:[ae("SCK")]},{name:"LED",x:115.5084,y:287.2,signals:[]},{name:"MISO",x:125.1096,y:287.2,signals:[ae("MISO")]}]}static get styles(){return et`
      .container {
        position: relative;
      }

      .container > canvas {
        position: absolute;
        left: 8px;
        top: 28px;
        width: 159px;
        height: 212px;
      }

      .pixelated {
        image-rendering: crisp-edges; /* firefox */
        image-rendering: pixelated; /* chrome/webkit */
      }
    `}get canvas(){var t;return null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("canvas")}firstUpdated(){this.dispatchEvent(new CustomEvent("canvas-ready"))}render(){const{screenWidth:t,screenHeight:e}=this;return Pt`
      <div class="container">
        <svg
          width="46.5mm"
          height="77.6mm"
          version="1.1"
          viewBox="0 0 46.5 77.6"
          xmlns="http://www.w3.org/2000/svg"
        >
          <!-- Board -->
          <path
            d="m8.8e-7 3.37e-6v77.6h46.5v-77.6zm43.1 1.78a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm-39.4 0.0946a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm0 70.7a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm39.4 0.0946a1.8 1.8 0 0 1 1.8 1.8 1.8 1.8 0 0 1-1.8 1.8 1.8 1.8 0 0 1-1.8-1.8 1.8 1.8 0 0 1 1.8-1.8zm-31 2.68h1.41v1.34h-1.41zm2.53 0h1.41v1.34h-1.41zm2.56 0h1.41v1.34h-1.41zm2.54 0h1.41v1.34h-1.41zm12.7 0h1.41v1.34h-1.41zm-10.1 0.0119h1.41v1.34h-1.41zm2.54 0.0119h1.41v1.34h-1.41zm5.08 0h1.41v1.34h-1.41zm-2.53 0.0114h1.41v1.34h-1.41z"
            fill="#931917"
            stroke-width="0"
          />

          <!-- LCD Panel -->
          <path d="m0.17 5.65v64.6h46.1v-64.6zm6.46 62.9h34.7v1.7h-34.7z" fill="#f6e1f1" />
          <rect
            x="11.2"
            y="66.7"
            width="24.2"
            height="6.24"
            rx="1"
            ry="1"
            fill="#bdab16"
            opacity=".4"
          />
          <rect x="1.62" y="6.79" width="43.3" height="61.9" />
          <rect
            x="10.8"
            y="74.6"
            width="24.2"
            height="2.83"
            fill="none"
            stroke="#fff"
            stroke-width=".27"
          />

          <!-- Pins -->
          <g fill="#ccc">
            <path
              d="m11.8 75v1.99h1.98v-1.99zm0.988 0.397a0.6 0.6 0 0 1 0.0041 0 0.6 0.6 0 0 1 0.6 0.6 0.6 0.6 0 0 1-0.6 0.6 0.6 0.6 0 0 1-0.6-0.6 0.6 0.6 0 0 1 0.596-0.6z"
            />
            <path
              id="round-pin"
              d="m15.3 75a1 1 0 0 0-0.987 1 1 1 0 0 0 1 1 1 1 0 0 0 1-1 1 1 0 0 0-1-1 1 1 0 0 0-0.0134 0zm0.0093 0.4a0.6 0.6 0 0 1 0.0041 0 0.6 0.6 0 0 1 0.6 0.6 0.6 0.6 0 0 1-0.6 0.6 0.6 0.6 0 0 1-0.6-0.6 0.6 0.6 0 0 1 0.596-0.6z"
            />
            <use xlink:href="#round-pin" x="2.54" />
            <use xlink:href="#round-pin" x="5.08" />
            <use xlink:href="#round-pin" x="7.62" />
            <use xlink:href="#round-pin" x="10.16" />
            <use xlink:href="#round-pin" x="12.7" />
            <use xlink:href="#round-pin" x="15.24" />
            <use xlink:href="#round-pin" x="17.78" />
          </g>
          <text font-family="monospace" font-size="3.5px" fill="#fff">
            <tspan x="8.2" y="76.9">1</tspan>
            <tspan x="35.6" y="76.9">9</tspan>
            <tspan x="14.2" y="4.3" font-size="4.6px">ILI9341</tspan>
          </text>
        </svg>
        <canvas width="${t}" height="${e}" class="pixelated"></canvas>
      </div>
    `}};ji=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-ili9341")],ji);var Fi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};const Ni=[0,1,2,3,4,5,6,7,8,9],Vi=te,Li=4.8006,Gi=33.3774,Hi="#9eff3c",Xi="#6cf9dc",Wi="#f1d73c",Ki="#dc012d",qi={GYR:[Hi,Hi,Hi,Hi,Hi,Wi,Wi,Wi,Ki,Ki],BCYR:["#2c95fa",Xi,Xi,Xi,Xi,Wi,Wi,Wi,Ki,Ki]};let Yi=class extends qt{constructor(){super(...arguments),this.color="red",this.offColor="#444",this.pinInfo=[{name:"A1",x:Li,y:4.8006,number:1,description:"Anode 1",signals:[]},{name:"A2",x:Li,y:14.4018,number:2,description:"Anode 2",signals:[]},{name:"A3",x:Li,y:6.35*Vi,number:3,description:"Anode 3",signals:[]},{name:"A4",x:Li,y:33.6042,number:4,description:"Anode 4",signals:[]},{name:"A5",x:Li,y:43.2054,number:5,description:"Anode 5",signals:[]},{name:"A6",x:Li,y:52.8066,number:6,description:"Anode 6",signals:[]},{name:"A7",x:Li,y:62.4078,number:7,description:"Anode 7",signals:[]},{name:"A8",x:Li,y:72.009,number:8,description:"Anode 8",signals:[]},{name:"A9",x:Li,y:21.59*Vi,number:9,description:"Anode 9",signals:[]},{name:"A10",x:Li,y:91.2114,number:10,description:"Anode 10",signals:[]},{name:"C1",x:Gi,y:4.8006,number:20,description:"Cathode 1",signals:[]},{name:"C2",x:Gi,y:14.4018,number:19,description:"Cathode 2",signals:[]},{name:"C3",x:Gi,y:6.35*Vi,number:18,description:"Cathode 3",signals:[]},{name:"C4",x:Gi,y:33.6042,number:17,description:"Cathode 4",signals:[]},{name:"C5",x:Gi,y:43.2054,number:16,description:"Cathode 5",signals:[]},{name:"C6",x:Gi,y:52.8066,number:15,description:"Cathode 6",signals:[]},{name:"C7",x:Gi,y:62.4078,number:14,description:"Cathode 7",signals:[]},{name:"C8",x:Gi,y:72.009,number:13,description:"Cathode 8",signals:[]},{name:"C9",x:Gi,y:21.59*Vi,number:12,description:"Cathode 9",signals:[]},{name:"C10",x:Gi,y:91.2114,number:11,description:"Cathode 10",signals:[]}],this.values=[0,0,0,0,0,0,0,0,0,0]}render(){const{values:t,color:e,offColor:i}=this,r=qi[e];return Pt`
      <svg
        width="10.1mm"
        height="25.5mm"
        version="1.1"
        viewBox="0 0 10.1 25.5"
        xmlns="http://www.w3.org/2000/svg"
      >
        <pattern id="pin-pattern" height="2.54" width="10.1" patternUnits="userSpaceOnUse">
          <circle cx="1.27" cy="1.27" r="0.5" fill="#aaa" />
          <circle cx="8.83" cy="1.27" r="0.5" fill="#aaa" />
        </pattern>
        <path d="m1.4 0h8.75v25.5h-10.1v-24.2z" />
        <rect width="10.1" height="25.4" fill="url(#pin-pattern)" />
        ${Ni.map((n=>{var s;return At`<rect x="2.5" y="${.4+2.54*n}" width="5" height="1.74" fill="${t[n]?null!==(s=null==r?void 0:r[n])&&void 0!==s?s:e:i}"/>`}))}
      </svg>
    `}};Fi([Jt()],Yi.prototype,"color",void 0),Fi([Jt()],Yi.prototype,"offColor",void 0),Fi([Jt({type:Array})],Yi.prototype,"values",void 0),Yi=Fi([Qt("wokwi-led-bar-graph")],Yi);let Zi=class extends qt{constructor(){super(...arguments),this.pinInfo=[{name:"CD",x:76.734,y:9.3744,signals:[]},{name:"DO",x:76.734,y:18.8622,signals:[ae("MISO")]},{name:"GND",x:76.734,y:28.4634,signals:[{type:"power",signal:"GND"}]},{name:"SCK",x:76.734,y:38.178,signals:[ae("SCK")]},{name:"VCC",x:76.734,y:47.628,signals:[{type:"power",signal:"VCC"}]},{name:"DI",x:76.734,y:57.456,signals:[ae("MOSI")]},{name:"CS",x:76.734,y:66.906,signals:[ae("SS")]}]}render(){return Pt`
      <svg
        width="21.6mm"
        height="20.4mm"
        version="1.1"
        viewBox="0 0 21.6 20.4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <!-- Board -->
        <rect width="21.6" height="20.4" fill="#a1111b" />

        <!-- Card and socket -->
        <rect
          x="1.32"
          y="4.59"
          width="3.13"
          height="8.06"
          fill="#262626"
          stroke="#d5b7b5"
          stroke-width=".232"
        />
        <rect x="4.08" y=".0367" width="10.7" height="17.8" rx=".772" ry=".772" fill="#262626" />
        <path
          d="m3.79 2.49-1.62 0.0292v1.38c0.474 0.0438 0.486 0.0027 0.489 0.197 0.0026 0.194-0.0698 0.237-1.2 0.257v0.939c0.388 0.0184 0.665-0.0702 0.679 0.211l0.176 3.66-0.413 0.434 0.0207 0.733 0.103 0.114 1.15 0.031 0.114-0.114-0.031-0.764-0.361-0.403 0.0413-3.62c0.0103-0.258 0.176-0.283 0.176-0.283h0.34c0.109 0 0.197 0.0689 0.197 0.154v5.29c0 0.0856-0.088 0.154-0.197 0.154h-1.99v6.96h5.2c-0.0402-1.41-0.191-5.31-0.0968-6 0.0155-0.114 0.263-0.0662 0.272-0.0303 0.0551 0.222 0.0216 2.55 0.234 5.65 0.431 0.234 0.17-0.655 0.423-0.635 0.242 0.0186-0.0802 0.81 0.394 0.635 0.384-4 0.0656-5.8 0.365-5.71 0.299 0.0904-0.204 5.36 0.0438 6.09h4.18s-0.17-4.16-0.285-5.96c-0.0099-0.155 0.473-0.156 0.467 0-0.0653 1.63 0.0803 5.67 0.0803 5.67 0.533 0.0657 0.168-0.755 0.46-0.745 0.279 0.0104-0.0511 0.854 0.387 0.745 0 0 0.218-4.08 0.226-5.69 7.07e-4 -0.146 0.375-0.139 0.372 0.0073-0.0227 1.42-0.131 5.97-0.131 5.97h1.01l-0.0656-14.3s-0.24-0.0383-0.352 0.0012c-3.96 1.4-7.81 1.06-10.7-0.0304-0.175-0.212-0.146-0.993-0.146-0.993z"
          fill="#dbded9"
        />
        <rect
          x="5.84"
          y="6.42"
          width="3.97"
          height="1.97"
          rx=".3"
          ry=".3"
          fill="#262626"
          stroke="#ebebeb"
          stroke-width=".08"
        />
        <rect
          x="10.4"
          y="6.42"
          width="3.97"
          height="1.97"
          rx=".3"
          ry=".3"
          fill="#262626"
          stroke="#ebebeb"
          stroke-width=".08"
        />
        <path
          d="m4.08 1.21s2.37 0.327 5.27 0.327c2.9 0 5.42-0.327 5.42-0.327v0.57s-0.949 0.331-5.42 0.327c-4.47-0.0037-5.27-0.327-5.27-0.327z"
          fill="#020202"
          stroke="#000"
          stroke-width=".027"
        />
        <g fill="#fcfff9">
          <rect x="1.19" y="10.9" width=".275" height="6.95" />
          <rect x="1.19" y="4.36" width=".275" height=".945" />
          <rect x="1.84" y="2.52" width=".33" height="1.38" />
        </g>

        <!-- Pins & labels -->
        <text font-family="sans-serif" fill="#ffffff" font-size="1.6px" stroke-width=".0327">
          <tspan x="16.61" y="2.90">CD</tspan>
          <tspan x="16.45" y="5.45">DO</tspan>
          <tspan x="15.39" y="7.98">GND</tspan>
          <tspan x="15.65" y="10.62">SCK</tspan>
          <tspan x="15.68" y="13.06">VCC</tspan>
          <tspan x="16.88" y="15.57">DI</tspan>
          <tspan x="16.67" y="18.24">CS</tspan>
        </text>
        <g fill="#fff" stroke="#d9cb97" stroke-width=".381">
          <ellipse cx="20.3" cy="2.48" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="4.99" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="7.53" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="10.1" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="12.6" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="15.2" rx=".814" ry=".814" />
          <ellipse cx="20.3" cy="17.7" rx=".814" ry=".814" />
        </g>
      </svg>
    `}};Zi=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a}([Qt("wokwi-microsd-card")],Zi);var Ji=function(t,e,i,r){var n,s=arguments.length,a=s<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,r);else for(var o=t.length-1;o>=0;o--)(n=t[o])&&(a=(s<3?n(a):s>3?n(e,i,a):n(e,i))||a);return s>3&&a&&Object.defineProperty(e,i,a),a};let Qi=class extends qt{constructor(){super(...arguments),this.values=[0,0,0,0,0,0,0,0],this.pinInfo=[{name:"1a",number:1,y:55,x:7.5,signals:[]},{name:"2a",number:2,y:55,x:17.2,signals:[]},{name:"3a",number:3,y:55,x:26.7,signals:[]},{name:"4a",number:4,y:55,x:36.5,signals:[]},{name:"5a",number:5,y:55,x:45.9,signals:[]},{name:"6a",number:6,y:55,x:55.6,signals:[]},{name:"7a",number:7,y:55,x:65.2,signals:[]},{name:"8a",number:8,y:55,x:74.8,signals:[]},{name:"8b",number:9,y:.8,x:74.8,signals:[]},{name:"7b",number:10,y:.8,x:65.2,signals:[]},{name:"6b",number:11,y:.8,x:55.6,signals:[]},{name:"5b",number:12,y:.8,x:45.9,signals:[]},{name:"4b",number:13,y:.8,x:36.5,signals:[]},{name:"3b",number:14,y:.8,x:26.7,signals:[]},{name:"2b",number:15,y:.8,x:17.2,signals:[]},{name:"1b",number:16,y:.8,x:7.5,signals:[]}]}toggleSwitch(t){this.values[t]=this.values[t]?0:1,this.dispatchEvent(new InputEvent("switch-change",{detail:t})),this.requestUpdate()}onKeyDown(t){t.stopPropagation();const e=["1","2","3","4","5","6","7","8"].indexOf(t.key);-1!==e&&this.toggleSwitch(e)}drawSwitch(t,e){return At` 
        <rect
        @click=${()=>this.toggleSwitch(t)}
        x="${e+4.693}"
        y="21.2"
        width="5.8168"
        height="13"
      />
      <use
        @click=${()=>this.toggleSwitch(t)}
        xlink:href="#switch"
        x="${e}"
        y=${this.values[t]?-7.2:0}
      />`}preventTextSelection(t){t.detail>1&&t.preventDefault()}render(){return Pt`
      <svg
        tabindex="0"
        @keydown=${this.onKeyDown}
        @mousedown=${this.preventTextSelection}
        width="82.87"
        height="55.355"
        version="1.1"
        viewBox="0 0 82.87 55.355"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <path
            id="switch"
            transform="translate(-66.856 -41.367)"
            fill="#fffef4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width=".77094"
            d="m72.096 69.764s1.3376 0.38247 2.1066 0.39196c0.76893 0.0095 2.44-0.39196 2.44-0.39196 0.39596-0.06361 0.72389 0.32286 0.72389 0.72389v4.3678c0 0.40104-0.52337 0.72389-0.72389 0.72389s-1.6592-0.41225-2.4288-0.40316c-0.76958 0.0091-2.1177 0.40316-2.1177 0.40316-0.39396 0.075-0.72389-0.32286-0.72389-0.72389v-4.3678c0-0.40104 0.32286-0.72389 0.72389-0.72389z"
          />
        </defs>

        <!-- Pins -->
        <g
          transform="translate(-66.856 -41.367)"
          fill="#454837"
          fill-opacity=".49194"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width=".76744"
        >
          <rect x="73.181" y="87.634" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="83.135" y="87.455" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="92.424" y="87.639" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="102.45" y="87.639" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect
            transform="scale(1,-1)"
            x="111.55"
            y="-96.722"
            width="1.4382"
            height="9.0831"
            rx=".7206"
            ry=".7206"
          />
          <rect x="121.12" y="87.639" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="130.78" y="87.547" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="140.62" y="87.547" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="73.516" y="41.546" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="83.469" y="41.367" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="92.758" y="41.551" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="102.78" y="41.551" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect
            transform="scale(1,-1)"
            x="111.89"
            y="-50.634"
            width="1.4382"
            height="9.0831"
            rx=".7206"
            ry=".7206"
          />
          <rect x="121.45" y="41.551" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="131.11" y="41.459" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
          <rect x="140.95" y="41.459" width="1.4382" height="9.0831" rx=".7206" ry=".7206" />
        </g>

        <!-- Board -->
        <rect x="0" y="8.5" width="90.5" height="38.0831" fill="#d72c2c" />

        <!-- Text -->
        <text fill="#fffef4" font-family="sans-serif" font-size="7.66px" style="line-height:1.25">
          <tspan x="6.340" y="18.03">ON</tspan>
          <tspan x="4.35" y="43.28">1</tspan>
          <tspan x="14.485" y="43.28">2</tspan>
          <tspan x="23.956" y="43.28">3</tspan>
          <tspan x="33.57" y="43.28">4</tspan>
          <tspan x="43.05" y="43.28">5</tspan>
          <tspan x="52.36" y="43.28">6</tspan>
          <tspan x="62.45" y="43.28">7</tspan>
          <tspan x="71.92" y="43.28">8</tspan>
        </text>

        <!-- Switches -->
        <g fill="#917c6f" stroke-width=".77094">
          ${this.drawSwitch(0,0)}<!-- -->
          ${this.drawSwitch(1,9.6)}<!-- -->
          ${this.drawSwitch(2,19.4)}<!-- -->
          ${this.drawSwitch(3,29.1)}<!-- -->
          ${this.drawSwitch(4,38.5)}<!-- -->
          ${this.drawSwitch(5,48.1)}<!-- -->
          ${this.drawSwitch(6,57.7)}<!-- -->
          ${this.drawSwitch(7,67.3)}<!-- -->
        </g>
      </svg>
    `}};function tr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function er(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var ir;Ji([Jt({type:Array})],Qi.prototype,"values",void 0),Qi=Ji([Qt("wokwi-dip-switch-8")],Qi),function(t){t[t.LED=0]="LED",t[t.MOTOR=1]="MOTOR",t[t.TRANSMITTER=2]="TRANSMITTER",t[t.BUTTON=3]="BUTTON",t[t.SENSOR=4]="SENSOR",t[t.OTHER=5]="OTHER"}(ir||(ir={}));for(var rr,nr=[{clasz:me,name:"LED",description:"Diode Électroluminescente",type:ir.LED},{clasz:_i,name:"LED RGB",description:"Diode Électroluminescente de couleur contrôllable",type:ir.LED},{clasz:Yi,name:"Barre de LEDs",description:"Barre de 10 diodes électroluminescentes",type:ir.LED},{clasz:ve,name:"Pixel",description:"Diode Électroluminescente",type:ir.LED},{clasz:ie,name:"Numitrons",description:"Peut afficher un chiffre ou une lettre",type:ir.LED},{clasz:ei,name:"LED Ring",description:"Anneau de Leds",type:ir.LED},{clasz:ue,name:"Écran 2*16 caractères",description:"Peut afficher du texte (Jusqu'à 32 caractères sur 2 lignes)",type:ir.LED},{clasz:si,name:"Écran 4*20 caractères",description:"Peut afficher du texte (Jusqu'à 80 caractères sur 4 lignes)",type:ir.LED},{clasz:Ve,name:"Buzzer",description:"Haut parleur",type:ir.TRANSMITTER},{clasz:ke,name:"Bouton poussoir",description:"",type:ir.BUTTON},{clasz:Be,name:"Potentiomètre",description:"Résistance variable",type:ir.BUTTON},{clasz:ri,name:"Slide switch",description:"Interrupteur",type:ir.BUTTON},{clasz:oi,name:"Joystick",description:"",type:ir.BUTTON},{clasz:ci,name:"Potentiomètre",description:"Résistance variable",type:ir.BUTTON},{clasz:Qi,name:"DipSwitch8",description:"Barre de 8 interrupteurs",type:ir.BUTTON},{clasz:We,name:"DHT22 (T° et φ)",description:"Capteur de température et d'humidité",type:ir.SENSOR},{clasz:ni,name:"HCSR04",description:"Détecteur de proximité",type:ir.SENSOR},{clasz:gi,name:"Temperature sensor",description:"",type:ir.SENSOR},{clasz:Oi,name:"Détecteur de son faible",description:"",type:ir.SENSOR},{clasz:Ri,name:"Détecteur de son fort",description:"",type:ir.SENSOR},{clasz:Xe,name:"Servo moteur",description:"Moteur de précision (angle de rotation controllable)",type:ir.MOTOR},{clasz:Mi,name:"Potentiometre KY040",description:"Résistance variable",type:ir.BUTTON},{clasz:Ti,name:"Photoresistance",description:"Capteur de lumière",type:ir.SENSOR},{clasz:Se,name:"Résistance",description:"",type:ir.OTHER},{clasz:Qe,name:"Ds1307 (Horloge)",description:"",type:ir.OTHER}],sr=function t(e,i,r,n){tr(this,t),er(this,"wokwiComponentClass",void 0),er(this,"name",void 0),er(this,"description",void 0),er(this,"type",void 0),this.wokwiComponentClass=e,this.name=i,this.description=r,this.type=n},ar=function t(e){tr(this,t),er(this,"wokwiComponent",void 0),er(this,"name",void 0),er(this,"description",void 0),er(this,"type",void 0),this.wokwiComponent=new e.wokwiComponentClass,this.name=e.name,this.description=e.description,this.type=e.type},or=[],lr=0,cr=nr;lr<cr.length;lr++){var hr=cr[lr];or.push(new sr((rr=hr).clasz,rr.name,rr.description,rr.type))}function fr(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pr(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var dr=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),pr(this,"elements",[]),pr(this,"catalog",void 0),pr(this,"sorter",void 0),this.elements=or.map((function(t){return new ar(t)}));var e=document.querySelector(".hackCable-catalog-list");if(e instanceof HTMLDivElement){this.catalog=e;var i=document.querySelector(".hackCable-catalog-sorter");i instanceof HTMLSelectElement?(this.sorter=i,this.build()):console.error("[HackCable] Unable to find element .hackCable-catalog-sorter")}else console.error("[HackCable] Unable to find element .hackCable-catalog-list")}var e,i;return e=t,i=[{key:"build",value:function(){var t=this;this.sorter&&(this.sorter.innerHTML='<option value="-1">Tout afficher</option>\n<option value='+ir.LED+">LED</option>\n<option value="+ir.MOTOR+">Moteur</option>\n<option value="+ir.TRANSMITTER+">Émmeteur</option>\n<option value="+ir.BUTTON+">Bouton</option>\n<option value="+ir.SENSOR+">Capteur</option>\n<option value="+ir.OTHER+">Autre</option>\n",this.sorter.addEventListener("change",(function(e){console.log(e),t.updateCatalogList()}))),this.updateCatalogList()}},{key:"updateCatalogList",value:function(){var t=this;this.catalog&&(this.catalog.innerHTML="");var e=-1;this.sorter&&(e=parseInt(this.sorter.value,10)),this.elements.filter((function(t){return ir[t.type]==ir[e]||-1==e})).forEach((function(e){var i,r=document.createElement("div");r.setAttribute("class","hackCable-catalog-element"),r.setAttribute("title",e.description),r.innerHTML="<h3>"+e.name+"</h3>",null===(i=t.catalog)||void 0===i||i.appendChild(r),setTimeout((function(){var t,i=null===(t=e.wokwiComponent.shadowRoot)||void 0===t?void 0:t.querySelector("svg");i&&i.setAttribute("style","max-width: 100%; height: auto")})),r.appendChild(e.wokwiComponent)}))}}],i&&fr(e.prototype,i),t}();function ur(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function gr(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var yr=function(){function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),gr(this,"channel",new MessageChannel),gr(this,"executionQueue",[]),gr(this,"stopped",!0),gr(this,"handleMessage",(function(){var t=e.executionQueue.shift();void 0!==t&&t()}))}var e,i;return e=t,(i=[{key:"start",value:function(){this.stopped&&(this.stopped=!1,this.channel.port2.onmessage=this.handleMessage)}},{key:"stop",value:function(){this.stopped=!0,this.executionQueue.splice(0,this.executionQueue.length),this.channel.port2.onmessage=null}},{key:"postTask",value:function(t){this.stopped||(this.executionQueue.push(t),this.channel.port1.postMessage(null))}}])&&ur(e.prototype,i),t}();function mr(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function xr(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var vr=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),xr(this,"program",new Uint16Array(32768)),xr(this,"cpu",void 0),xr(this,"timer0",void 0),xr(this,"timer1",void 0),xr(this,"timer2",void 0),xr(this,"portB",void 0),xr(this,"portC",void 0),xr(this,"portD",void 0),xr(this,"usart",void 0),xr(this,"speed",16e6),xr(this,"workUnitCycles",5e5),xr(this,"taskScheduler",new yr);var r=i(4620).parse(e).data;this.program=new Uint16Array(new Uint8Array(r).buffer),this.cpu=new v(this.program),this.timer0=new X(this.cpu,D),this.timer1=new X(this.cpu,$),this.timer2=new X(this.cpu,M),this.portB=new R(this.cpu,k),this.portC=new R(this.cpu,C),this.portD=new R(this.cpu,z),this.usart=new q(this.cpu,W,this.speed),this.taskScheduler.start()}var e,r;return e=t,(r=[{key:"execute",value:function(t){for(var e=this,i=this.cpu.cycles+this.workUnitCycles;this.cpu.cycles<i;)b(this.cpu),this.cpu.tick();t(this.cpu),this.taskScheduler.postTask((function(){return e.execute(t)}))}},{key:"stop",value:function(){this.taskScheduler.stop()}}])&&mr(e.prototype,r),t}();function wr(t,e,i,r,n,s,a){try{var o=t[s](a),l=o.value}catch(t){return void i(t)}o.done?e(l):Promise.resolve(l).then(r,n)}function br(t){return function(){var e=this,i=arguments;return new Promise((function(r,n){var s=t.apply(e,i);function a(t){wr(s,r,n,a,o,"next",t)}function o(t){wr(s,r,n,a,o,"throw",t)}a(void 0)}))}}function kr(t){return Cr.apply(this,arguments)}function Cr(){return(Cr=br(regeneratorRuntime.mark((function t(e){var i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://hexi.wokwi.com/build",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify({sketch:e})});case 2:return i=t.sent,t.next=5,i.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function zr(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Sr(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var Or=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Sr(this,"editor",void 0),Sr(this,"led",void 0)}var e,r;return e=t,(r=[{key:"mount",value:function(t){console.log("Mounting HackCable..."),t.innerHTML=i(2198).Z,t.classList.add("hackCable-root"),this.editor=document.querySelector(".hackCable-editor");var e,r=document.createElement("wokwi-led");r instanceof me&&(this.led=r,r.color="#002fd9",r.lightColor="#3a66f6",r.label="13",null===(e=this.editor)||void 0===e||e.appendChild(this.led)),new dr}},{key:"runCode",value:function(t){var e=this;t.execute((function(){})),t.portD.addListener((function(){console.log("listener called: ",t.portD.pinState(1)),null!=e.led&&(e.led.value=t.portD.pinState(1)===S.High)}))}}])&&zr(e.prototype,r),t}()})(),r})()}));