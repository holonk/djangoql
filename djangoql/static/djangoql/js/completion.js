!function(){var t={57:function(t,e,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t){"function"!=typeof t&&(t=o.defunct);var e=[],n=[],i=0;function s(){for(var t=[],e=0,i=this.state,o=this.index,s=this.input,r=0,l=n.length;r<l;r++){var a=n[r],c=a.start,u=c.length;if(!u||c.indexOf(i)>=0||i%2&&1===u&&!c[0]){var h=a.pattern;h.lastIndex=o;var p=h.exec(s);if(p&&p.index===o){var d=t.push({result:p,action:a.action,length:p[0].length});for(a.global&&(e=d);--d>e;){var f=d-1;if(t[d].length>t[f].length){var m=t[d];t[d]=t[f],t[f]=m}}}}}return t}this.state=0,this.index=0,this.input="",this.addRule=function(t,e,i){var o=t.global;if(!o){var s="g";t.multiline&&(s+="m"),t.ignoreCase&&(s+="i"),t=new RegExp(t.source,s)}return"[object Array]"!==Object.prototype.toString.call(i)&&(i=[0]),n.push({pattern:t,global:o,action:e,start:i}),this},this.setInput=function(t){return i=0,this.state=0,this.index=0,e.length=0,this.input=t,this},this.lex=function(){if(e.length)return e.shift();for(this.reject=!0;this.index<=this.input.length;){for(var n=s.call(this).splice(i),o=this.index;n.length&&this.reject;){var r=n.shift(),l=r.result,a=r.length;this.index+=a,this.reject=!1,i++;var c=r.action.apply(this,l);if(this.reject)this.index=l.index;else if(void 0!==c)switch(Object.prototype.toString.call(c)){case"[object Array]":e=c.slice(1),c=c[0];default:return a&&(i=0),c}}var u=this.input;if(o<u.length)if(this.reject){if(i=0,void 0!==(c=t.call(this,u.charAt(this.index++))))return"[object Array]"===Object.prototype.toString.call(c)?(e=c.slice(1),c[0]):c}else this.index!==o&&(i=0),this.reject=!0;else{if(!n.length)break;this.reject=!0}}}}"object"===i(t=n.nmd(t))&&"object"===i(t.exports)&&(t.exports=o),o.defunct=function(t){throw new Error("Unexpected character at index "+(this.index-1)+": "+t)}},206:function(t,e,n){var i=n(366).Symbol;t.exports=i},807:function(t,e,n){var i=n(206),o=n(187),s=n(778),r=i?i.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":r&&r in Object(t)?o(t):s(t)}},182:function(t,e,n){var i=n(135),o=/^\s+/;t.exports=function(t){return t?t.slice(0,i(t)+1).replace(o,""):t}},891:function(t,e,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o="object"==(void 0===n.g?"undefined":i(n.g))&&n.g&&n.g.Object===Object&&n.g;t.exports=o},187:function(t,e,n){var i=n(206),o=Object.prototype,s=o.hasOwnProperty,r=o.toString,l=i?i.toStringTag:void 0;t.exports=function(t){var e=s.call(t,l),n=t[l];try{t[l]=void 0;var i=!0}catch(t){}var o=r.call(t);return i&&(e?t[l]=n:delete t[l]),o}},778:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},366:function(t,e,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(891),s="object"==("undefined"==typeof self?"undefined":i(self))&&self&&self.Object===Object&&self,r=o||s||Function("return this")();t.exports=r},135:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},645:function(t,e,n){var i=n(716),o=n(244),s=n(666),r=Math.max,l=Math.min;t.exports=function(t,e,n){var a,c,u,h,p,d,f=0,m=!1,g=!1,y=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=a,i=c;return a=c=void 0,f=e,h=t.apply(i,n)}function b(t){return f=t,p=setTimeout(w,e),m?v(t):h}function x(t){var n=t-d;return void 0===d||n>=e||n<0||g&&t-f>=u}function w(){var t=o();if(x(t))return S(t);p=setTimeout(w,function(t){var n=e-(t-d);return g?l(n,u-(t-f)):n}(t))}function S(t){return p=void 0,y&&a?v(t):(a=c=void 0,h)}function E(){var t=o(),n=x(t);if(a=arguments,c=this,d=t,n){if(void 0===p)return b(d);if(g)return clearTimeout(p),p=setTimeout(w,e),v(d)}return void 0===p&&(p=setTimeout(w,e)),h}return e=s(e)||0,i(n)&&(m=!!n.leading,u=(g="maxWait"in n)?r(s(n.maxWait)||0,e):u,y="trailing"in n?!!n.trailing:y),E.cancel=function(){void 0!==p&&clearTimeout(p),f=0,a=d=c=p=void 0},E.flush=function(){return void 0===p?h:S(o())},E}},716:function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){var n=e(t);return null!=t&&("object"==n||"function"==n)}},667:function(t){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}t.exports=function(t){return null!=t&&"object"==e(t)}},570:function(t,e,n){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o=n(807),s=n(667);t.exports=function(t){return"symbol"==i(t)||s(t)&&"[object Symbol]"==o(t)}},244:function(t,e,n){var i=n(366);t.exports=function(){return i.Date.now()}},167:function(t,e,n){var i=n(645),o=n(716);t.exports=function(t,e,n){var s=!0,r=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return o(n)&&(s="leading"in n?!!n.leading:s,r="trailing"in n?!!n.trailing:r),i(t,e,{leading:s,maxWait:e,trailing:r})}},666:function(t,e,n){var i=n(182),o=n(716),s=n(570),r=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(s(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=i(t);var n=l.test(t);return n||a.test(t)?c(t.slice(2),n?2:8):r.test(t)?NaN:+t}}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={id:i,loaded:!1,exports:{}};return t[i](s,s.exports,n),s.loaded=!0,s.exports}n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,{a:e}),e},n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t},function(){"use strict";var t=n(57),e=n.n(t),i=n(645),o=n.n(i),s=n(716),r=n.n(s),l=n(167),a=n.n(l);function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t){this.size=0,this.limit=t,this.oldest=this.newest=void 0,this._keymap={}}u.prototype._markEntryAsUsed=function(t){t!==this.newest&&(t.newer&&(t===this.oldest&&(this.oldest=t.newer),t.newer.older=t.older),t.older&&(t.older.newer=t.newer),t.newer=void 0,t.older=this.newest,this.newest&&(this.newest.newer=t),this.newest=t)},u.prototype.put=function(t,e){var n=this._keymap[t];return n?(n.value=e,void this._markEntryAsUsed(n)):(this._keymap[t]=n={key:t,value:e,older:void 0,newer:void 0},this.newest?(this.newest.newer=n,n.older=this.newest):this.oldest=n,this.newest=n,this.size++,this.size>this.limit?this.shift():void 0)},u.prototype.shift=function(){var t=this.oldest;return t&&(this.oldest.newer?(this.oldest=this.oldest.newer,this.oldest.older=void 0):(this.oldest=void 0,this.newest=void 0),t.newer=t.older=void 0,delete this._keymap[t.key],this.size--),t},u.prototype.get=function(t,e){var n=this._keymap[t];if(void 0!==n)return this._markEntryAsUsed(n),e?n:n.value},u.prototype.find=function(t){return this._keymap[t]},u.prototype.set=function(t,e){var n,i=this.get(t,!0);return i?(n=i.value,i.value=e):(n=this.put(t,e))&&(n=n.value),n},u.prototype.remove=function(t){var e=this._keymap[t];if(e)return delete this._keymap[e.key],e.newer&&e.older?(e.older.newer=e.newer,e.newer.older=e.older):e.newer?(e.newer.older=void 0,this.oldest=e.newer):e.older?(e.older.newer=void 0,this.newest=e.older):this.oldest=this.newest=void 0,this.size--,e.value},u.prototype.removeAll=function(){this.oldest=this.newest=void 0,this.size=0,this._keymap={}},"function"==typeof Object.keys?u.prototype.keys=function(){return Object.keys(this._keymap)}:u.prototype.keys=function(){var t=[];for(var e in this._keymap)t.push(e);return t},u.prototype.forEach=function(t,e,n){var i;if(!0===e?(n=!0,e=void 0):"object"!==c(e)&&(e=this),n)for(i=this.newest;i;)t.call(e,i.key,i.value,this),i=i.older;else for(i=this.oldest;i;)t.call(e,i.key,i.value,this),i=i.newer},u.prototype.toJSON=function(){for(var t=new Array(this.size),e=0,n=this.oldest;n;)t[e++]={key:n.key,value:n.value},n=n.newer;return t},u.prototype.toString=function(){for(var t="",e=this.oldest;e;)t+=String(e.key)+":"+e.value,(e=e.newer)&&(t+=" < ");return t};var h=u;function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var g="(-?0|-?[1-9][0-9]*)",y="\\.[0-9]+",v="[eE][+-]?[0-9]+",b=new RegExp(g),x=new RegExp("".concat(g).concat(y).concat(v)+"|".concat(g).concat(y,"|").concat(g).concat(v)),w='[^\\\\"\\\\\\\\'.concat("\\n\\r\\u2028\\u2029","]"),S=new RegExp('\\"('+"".concat('\\\\[\\\\"/bfnrt]',"|").concat("\\\\u[0-9A-Fa-f]{4}","|").concat(w)+')*\\"'),E="(?![_0-9A-Za-z])",C=/[ \t\v\f\u00A0]+/,O=new(e())((function(){}));function R(t,e){return{name:t,value:e}}function A(t,e,n,i){var o=t;return void 0!==i&&(o+="<i>".concat(i,"</i>")),{text:t,snippetBefore:e||"",snippetAfter:n||"",suggestionText:o}}O.addRule(C,(function(){})),O.addRule(/\./,(function(t){return R("DOT",t)})),O.addRule(/,/,(function(t){return R("COMMA",t)})),O.addRule(new RegExp("or".concat(E)),(function(t){return R("OR",t)})),O.addRule(new RegExp("and".concat(E)),(function(t){return R("AND",t)})),O.addRule(new RegExp("not".concat(E)),(function(t){return R("NOT",t)})),O.addRule(new RegExp("in".concat(E)),(function(t){return R("IN",t)})),O.addRule(new RegExp("startswith".concat(E)),(function(t){return R("STARTSWITH",t)})),O.addRule(new RegExp("endswith".concat(E)),(function(t){return R("ENDSWITH",t)})),O.addRule(new RegExp("True".concat(E)),(function(t){return R("TRUE",t)})),O.addRule(new RegExp("False".concat(E)),(function(t){return R("FALSE",t)})),O.addRule(new RegExp("None".concat(E)),(function(t){return R("NONE",t)})),O.addRule(/[_A-Za-z][_0-9A-Za-z]*(\.[_A-Za-z][_0-9A-Za-z]*)*/,(function(t){return R("NAME",t)})),O.addRule(S,(function(t){return R("STRING_VALUE",t.slice(1,t.length-1))})),O.addRule(b,(function(t){return R("INT_VALUE",t)})),O.addRule(x,(function(t){return R("FLOAT_VALUE",t)})),O.addRule(/\(/,(function(t){return R("PAREN_L",t)})),O.addRule(/\)/,(function(t){return R("PAREN_R",t)})),O.addRule(/=/,(function(t){return R("EQUALS",t)})),O.addRule(/!=/,(function(t){return R("NOT_EQUALS",t)})),O.addRule(/>/,(function(t){return R("GREATER",t)})),O.addRule(/>=/,(function(t){return R("GREATER_EQUAL",t)})),O.addRule(/</,(function(t){return R("LESS",t)})),O.addRule(/<=/,(function(t){return R("LESS_EQUAL",t)})),O.addRule(/~/,(function(t){return R("CONTAINS",t)})),O.addRule(/!~/,(function(t){return R("NOT_CONTAINS",t)})),O.lexAll=function(){for(var t,e=[];t=this.lex();)t.start=this.index-t.value.length,t.end=this.index,e.push(t);return e};var j=function(t){var e=100;this.options=t,this.currentModel=null,this.models={},this.suggestionsAPIUrl=null,this.token=R,this.lexer=O,this.prefix="",this.suggestions=[],this.selected=null,this.valuesCaseSensitive=!1,this.highlightCaseSensitive=!0,this.textarea=null,this.completion=null,this.completionUL=null,this.completionEnabled=!1,r()(t)?(this.loadIntrospections(t.introspections),"string"==typeof t.selector?this.textarea=document.querySelector(t.selector):this.textarea=t.selector,this.textarea?"TEXTAREA"===this.textarea.tagName?(t.valuesCaseSensitive&&(this.valuesCaseSensitive=!0),t.cacheSize&&(parseInt(t.cacheSize,10)!==t.cacheSize||t.cacheSize<1?this.logError("cacheSize must be a positive integer"):e=t.cacheSize),this.suggestionsCache=new h(e),this.debouncedLoadFieldOptions=o()(this.loadFieldOptions.bind(this),300),this.loading=!1,this.enableCompletion=this.enableCompletion.bind(this),this.disableCompletion=this.disableCompletion.bind(this),this.onCompletionMouseClick=this.onCompletionMouseClick.bind(this),this.onCompletionMouseDown=this.onCompletionMouseDown.bind(this),this.popupCompletion=this.popupCompletion.bind(this),this.debouncedRenderCompletion=o()(this.renderCompletion.bind(this),50),this.textarea.setAttribute("autocomplete","off"),this.textarea.addEventListener("keydown",this.onKeydown.bind(this)),this.textarea.addEventListener("blur",this.hideCompletion.bind(this)),this.textarea.addEventListener("click",this.popupCompletion),t.autoResize?(this.textareaResize=this.textareaResize.bind(this),this.textarea.style.resize="none",this.textarea.style.overflow="hidden",this.textarea.addEventListener("input",this.textareaResize),this.textareaResize(),window.addEventListener("load",this.textareaResize)):(this.textareaResize=null,this.textarea.addEventListener("mouseup",this.renderCompletion.bind(this,!0)),this.textarea.addEventListener("mouseout",this.renderCompletion.bind(this,!0))),this.createCompletionElement()):this.logError("selector must be pointing to <textarea> element, "+"but ".concat(this.textarea.tagName," was found")):this.logError("Element not found by selector: ".concat(t.selector))):this.logError("Please pass an object with initialization parameters")};j.init=function(t){return new j(t)},j.DOMReady=function(t){"loading"!==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},j.prototype={createCompletionElement:function(){var t,e=this.options;this.completion||(this.completion=document.createElement("div"),this.completion.className="djangoql-completion",document.querySelector("body").appendChild(this.completion),this.completionUL=document.createElement("ul"),this.completionUL.onscroll=a()(this.onCompletionScroll.bind(this),50),this.completion.appendChild(this.completionUL),"string"==typeof e.syntaxHelp&&((t=document.createElement("p")).className="syntax-help",t.innerHTML='<a href="'.concat(e.syntaxHelp)+'" target="_blank">Syntax Help</a>',t.addEventListener("mousedown",(function(t){t.preventDefault()})),this.completion.appendChild(t)),this.completionEnabled=!e.hasOwnProperty("completionEnabled")||e.completionEnabled)},destroyCompletionElement:function(){this.completion&&(this.completion.parentNode.removeChild(this.completion),this.completion=null,this.completionEnabled=!1)},enableCompletion:function(){this.completionEnabled=!0},disableCompletion:function(){this.completionEnabled=!1,this.hideCompletion()},getJson:function(t,e){this.loading=!0;var n=function(){this.loading=!1,this.request=null,this.logError("failed to fetch from ".concat(t))}.bind(this);this.request&&this.request.abort(),this.request=new XMLHttpRequest,this.request.open("GET",t,!0),this.request.onload=function(){this.loading=!1,200===this.request.status?"function"==typeof e.success&&e.success(JSON.parse(this.request.responseText)):n(),this.request=null}.bind(this),this.request.ontimeout=n,this.request.onerror=n,this.request.onprogress=function(){},window.setTimeout(this.request.send.bind(this.request))},loadIntrospections:function(t){var e=function(t){this.currentModel=t.current_model,this.models=t.models,this.suggestionsAPIUrl=t.suggestions_api_url}.bind(this);"string"==typeof t?this.getJson(t,{success:e}):r()(t)?e(t):this.logError("introspections parameter is expected to be either URL or "+"object with definitions, but ".concat(t," was found"))},logError:function(t){console.error("DjangoQL: ".concat(t))},onCompletionMouseClick:function(t){this.selectCompletion(parseInt(t.currentTarget.getAttribute("data-index"),10))},onCompletionMouseDown:function(t){t.preventDefault()},onKeydown:function(t){switch(t.keyCode){case 38:this.suggestions.length&&(null===this.selected?this.selected=this.suggestions.length-1:0===this.selected?this.selected=null:this.selected-=1,this.renderCompletion(),t.preventDefault());break;case 40:this.suggestions.length&&(null===this.selected?this.selected=0:this.selected<this.suggestions.length-1?this.selected+=1:this.selected=null,this.renderCompletion(),t.preventDefault());break;case 9:null!==this.selected&&(this.selectCompletion(this.selected),t.preventDefault());break;case 13:null!==this.selected?this.selectCompletion(this.selected):"function"==typeof this.options.onSubmit?this.options.onSubmit(this.textarea.value):t.currentTarget.form.submit(),t.preventDefault();break;case 27:this.hideCompletion();break;case 16:case 17:case 18:case 91:case 93:break;default:window.setTimeout(this.popupCompletion,10)}},textareaResize:function(){var t=window.getComputedStyle(this.textarea,null),e=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom);this.textarea.style.height="5px";var n=this.textarea.scrollHeight-e+1;this.textarea.style.height="".concat(n,"px")},popupCompletion:function(){this.generateSuggestions(),this.renderCompletion()},selectCompletion:function(t){var e=this.getContext(this.textarea.value,this.textarea.selectionStart),n=e.currentFullToken,i=this.textarea.value,o=this.textarea.selectionStart-e.prefix.length,s=null;n&&(s=n.end,i=i.slice(0,o)+i.slice(s));var r=i.slice(0,o),l=i.slice(o);l=l.trim();var a,c,u=this.suggestions[t],h=u.snippetBefore,p=u.snippetAfter,d=p.split("|");if(d.length>1&&(p=d.join(""),!h&&!u.text)){var f=(c=2,function(t){if(Array.isArray(t))return t}(a=d)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var i,o,s=[],r=!0,l=!1;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(s.push(i.value),!e||s.length!==e);r=!0);}catch(t){l=!0,o=t}finally{try{r||null==n.return||n.return()}finally{if(l)throw o}}return s}}(a,c)||function(t,e){if(t){if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}(a,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());h=f[0],p=f[1]}r.endsWith(h)&&(h=""),l.startsWith(p)&&(p="");var g=h+u.text+p,y=r.length+g.length;d.length>1&&(y-=d[1].length),this.textarea.value=r+g+l,this.textarea.focus(),this.textarea.setSelectionRange(y,y),this.selected=null,this.textareaResize&&this.textareaResize(),this.generateSuggestions(this.textarea),this.renderCompletion()},hideCompletion:function(){this.selected=null,this.completion&&(this.completion.style.display="none")},highlight:function(t,e){return e&&t?this.highlightCaseSensitive?t.split(e).join("<b>".concat(e,"</b>")):t.replace(new RegExp("(".concat(e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),")"),"ig"),"<b>$1</b>"):t},renderCompletion:function(t){var e,n,i,o,s,r;if(this.completionEnabled){if(!t||"none"!==this.completion.style.display)if(this.suggestions.length||this.loading){var l=this.suggestions.length,a=[].slice.call(this.completionUL.querySelectorAll("li[data-index]"));for(s=a.length,n=0;n<l;n++)n<s?e=a[n]:((e=document.createElement("li")).setAttribute("data-index",n),e.addEventListener("click",this.onCompletionMouseClick),e.addEventListener("mousedown",this.onCompletionMouseDown),this.completionUL.appendChild(e)),e.innerHTML=this.highlight(this.suggestions[n].suggestionText,this.prefix),n===this.selected?(e.className="active",o=e.getBoundingClientRect(),i=this.completionUL.getBoundingClientRect(),o.bottom>i.bottom?this.completionUL.scrollTop=this.completionUL.scrollTop+2+(o.bottom-i.bottom):o.top<i.top&&(this.completionUL.scrollTop=this.completionUL.scrollTop-2-(i.top-o.top))):e.className="";for(;s>l;)a[--s].removeEventListener("click",this.onCompletionMouseClick),a[s].removeEventListener("mousedown",this.onCompletionMouseDown),this.completionUL.removeChild(a[s]);r=this.completionUL.querySelector("li.djangoql-loading"),this.loading?r||((r=document.createElement("li")).className="djangoql-loading",r.innerHTML="&nbsp;",this.completionUL.appendChild(r)):r&&this.completionUL.removeChild(r);var c=this.textarea.getBoundingClientRect(),u=window.pageYOffset+c.top+c.height;this.completion.style.top="".concat(u,"px"),this.completion.style.left="".concat(c.left,"px"),this.completion.style.display="block"}else this.hideCompletion()}else this.hideCompletion()},resolveName:function(t){var e,n,i,o=t.split("."),s=this.currentModel,r=null,l=[];if(s)for(l.push(s),n=0,i=o.length;n<i;n++){if(!(e=this.models[s][o[n]])){s=null,r=null;break}"relation"===e.type?(s=e.relation,l.push(s),r=null):r=o[n]}return{modelStack:l,model:s,field:r}},getContext:function(t,e){var n,i,o,s=null,r=null,l=null,a=[this.currentModel],c=null,u=null,h=this.lexer.setInput(t.slice(0,e)).lexAll(),p=this.lexer.setInput(t).lexAll(),d=null;h.length&&h[h.length-1].end>=e&&(d=p[h.length-1],h.pop()),h.length&&(c=h[h.length-1],h.length>1&&(u=h[h.length-2]));var f=(n=t.slice(c?c.end:0,e)).match(C);f&&(n=n.slice(f[0].length)),"("===n&&(n="");var m=["AND","OR"];return(")"!==n||f)&&(!c||m.indexOf(c.name)>=0&&f||"."===n&&c&&!f||"PAREN_L"===c.name&&(!u||m.indexOf(u.name)>=0)?(s="field",r=this.currentModel,"."===n&&(n=t.slice(c.start,e)),(i=n.split(".")).length>1&&(n=i.pop(),(o=this.resolveName(i.join("."))).model&&!o.field?(r=o.model,a=o.modelStack):(s=null,r=null))):c&&f&&u&&"NAME"===u.name&&["EQUALS","NOT_EQUALS","CONTAINS","NOT_CONTAINS","GREATER_EQUAL","GREATER","LESS_EQUAL","LESS"].indexOf(c.name)>=0?(o=this.resolveName(u.value)).model&&(s="value",r=o.model,l=o.field,a=o.modelStack,'"'!==n[0]||"str"!==this.models[r][l].type&&!this.models[r][l].options||(n=n.slice(1))):c&&f&&"NAME"===c.name?(o=this.resolveName(c.value)).model&&(s="comparison",r=o.model,l=o.field,a=o.modelStack):c&&f&&["PAREN_R","INT_VALUE","FLOAT_VALUE","STRING_VALUE"].indexOf(c.name)>=0&&(s="logical")),{prefix:n,scope:s,model:r,field:l,currentFullToken:d,modelStack:a}},getCurrentFieldOptions:function(){var t=this.textarea,e=this.getContext(t.value,t.selectionStart),n=this.models[e.model],i=e.field&&n[e.field],o={cacheKey:null,context:e,field:i,model:n,options:null};if("value"!==e.scope||!i||!i.options)return null;if(Array.isArray(i.options))o.options=i.options;else if(!0===i.options){if(!this.suggestionsAPIUrl)return null;o.cacheKey="".concat(e.model,".").concat(e.field,"|").concat(e.prefix)}return o},loadFieldOptions:function(t){var e=this.getCurrentFieldOptions()||{},n=e.context;if(e.cacheKey){var i={field:"".concat(n.model,".").concat(n.field),search:n.prefix},o=this.suggestionsCache.get(e.cacheKey)||{};if(t&&o.has_next)i.page=o.page?o.page+1:1;else if(o.page)return;o.loading=!0,this.suggestionsCache.set(e.cacheKey,o);var s,r,l,a,c,u,h,p,f,m,g=(s=this.suggestionsAPIUrl,r=i,p=(h=s.split("?"))[0],f=h.slice(1).join("?"),m=f.split("&"),Object.keys(r).forEach((function(t){for(a=encodeURI(t),c=encodeURI(r[a]),u=m.length;u--;)if((l=m[u].split("="))[0]===a){l[1]=c,m[u]=l.join("=");break}u<0&&m.push("".concat(a,"=").concat(c))})),(f=m.join("&"))?[p,f].join("?"):p);this.getJson(g,{success:function(t){var n=this.suggestionsCache.get(e.cacheKey)||{};if(t.page-1===(n.page||0)){var i=d(d({},t),{},{items:(n.items||[]).concat(t.items)});this.suggestionsCache.set(e.cacheKey,i),this.loading=!1,this.populateFieldOptions(),this.renderCompletion()}}.bind(this)}),this.populateFieldOptions(),this.renderCompletion()}},populateFieldOptions:function(t){var e=this.getCurrentFieldOptions();if(null!==e){var n,i=e.options,o=e.context&&e.context.prefix;if(i)i=this.valuesCaseSensitive?i.filter((function(t){return t.indexOf(o)>=0})):i.filter((function(t){return t.toLowerCase().indexOf(o.toLowerCase())>=0}));else{if(this.suggestions=[],!e.cacheKey)return;if(i=(n=this.suggestionsCache.get(e.cacheKey)||{}).items||[],!n.loading&&(!n.page||t&&n.has_next)&&this.debouncedLoadFieldOptions(t),!i.length)return}this.highlightCaseSensitive=this.valuesCaseSensitive,this.suggestions=i.map((function(t){return A(t,'"','"')}))}},onCompletionScroll:function(){var t=this.completionUL.getBoundingClientRect().height,e=this.completionUL.scrollTop+t;e>t&&e>this.completionUL.scrollHeight-t&&this.populateFieldOptions(!0)},generateSuggestions:function(){var t,e,n,i=this.textarea;if(!this.completionEnabled)return this.prefix="",void(this.suggestions=[]);if(this.currentModel){if(i.selectionStart!==i.selectionEnd)return this.prefix="",void(this.suggestions=[]);n=function(t){return t.text.indexOf(this.prefix)>=0}.bind(this),this.highlightCaseSensitive=!0;var o=this.getContext(i.value,i.selectionStart),s=o.modelStack;this.prefix=o.prefix;var r=this.models[o.model],l=o.field&&r[o.field];switch(o.scope){case"field":this.suggestions=Object.keys(r).filter((function(t){var e=r[t].relation;return"relation"!==r[t].type||!s.includes(e)||s.slice(-1)[0]===e})).map((function(t){return A(t,"","relation"===r[t].type?".":" ")}));break;case"comparison":t=["=",["!=","is not equal to"]],e=" ",l&&"bool"!==l.type&&(["date","datetime"].indexOf(l.type)>=0?(t.push(["~","contains"],["!~","does not contain"]),e=' "|"'):"str"===l.type?(t.push(["~","contains"],["!~","does not contain"],"re","!re","startswith","not startswith","endswith","not endswith"),e=' "|"'):l.options&&(e=' "|"'),"str"!==l.type&&t.push(">",">=","<","<=")),this.suggestions=t.map((function(t){return"string"==typeof t?A(t,"",e):A(t[0],"",e,t[1])})),l&&"bool"!==l.type&&(e=["str","date","datetime"].indexOf(l.type)>=0||l.options?' ("|")':" (|)",this.suggestions.push(A("in","",e)),this.suggestions.push(A("not in","",e))),n=function(t){return 0===t.text.lastIndexOf(this.prefix,0)}.bind(this);break;case"value":l?l.options?(this.prefix=o.prefix,this.populateFieldOptions()):"bool"===l.type?(this.suggestions=[A("True",""," "),A("False",""," ")],l.nullable&&this.suggestions.push(A("None",""," "))):"unknown"===l.type&&(this.prefix="",this.suggestions=[]):this.suggestions=[A("None",""," ")];break;case"logical":this.suggestions=[A("and",""," "),A("or",""," ")];break;default:this.prefix="",this.suggestions=[]}this.suggestions=this.suggestions.filter(n),1===this.suggestions.length?this.selected=0:this.selected=null}}};var L=j;window.DjangoQL=L}()}();
//# sourceMappingURL=completion.js.map