(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object') module.exports = factory();
  else if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof exports === 'object') exports.calendar = factory();
  else root.calendar = factory();
}((typeof self !== 'undefined' ? self : this), () => (function (modules) { // webpackBootstrap
  /** *** */ 	// The module cache
  /** *** */ 	const installedModules = {};
  /** *** */
  /** *** */ 	// The require function
  /** *** */ 	function __webpack_require__(moduleId) {
    /** *** */
    /** *** */ 		// Check if module is in cache
    /** *** */ 		if (installedModules[moduleId]) {
      /** *** */ 			return installedModules[moduleId].exports;
      /** *** */ 		}
    /** *** */ 		// Create a new module (and put it into the cache)
    /** *** */ 		const module = installedModules[moduleId] = {
      /** *** */ 			i: moduleId,
      /** *** */ 			l: false,
      /** *** */ 			exports: {},
      /** *** */ 		};
      /** *** */
      /** *** */ 		// Execute the module function
      /** *** */ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /** *** */
    /** *** */ 		// Flag the module as loaded
    /** *** */ 		module.l = true;
    /** *** */
    /** *** */ 		// Return the exports of the module
    /** *** */ 		return module.exports;
    /** *** */ 	}
  /** *** */
  /** *** */
  /** *** */ 	// expose the modules object (__webpack_modules__)
  /** *** */ 	__webpack_require__.m = modules;
  /** *** */
  /** *** */ 	// expose the module cache
  /** *** */ 	__webpack_require__.c = installedModules;
  /** *** */
  /** *** */ 	// define getter function for harmony exports
  /** *** */ 	__webpack_require__.d = function (exports, name, getter) {
    /** *** */ 		if (!__webpack_require__.o(exports, name)) {
      /** *** */ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
      /** *** */ 		}
    /** *** */ 	};
  /** *** */
  /** *** */ 	// define __esModule on exports
  /** *** */ 	__webpack_require__.r = function (exports) {
    /** *** */ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /** *** */ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
      /** *** */ 		}
    /** *** */ 		Object.defineProperty(exports, '__esModule', { value: true });
    /** *** */ 	};
  /** *** */
  /** *** */ 	// create a fake namespace object
  /** *** */ 	// mode & 1: value is a module id, require it
  /** *** */ 	// mode & 2: merge all properties of value into the ns
  /** *** */ 	// mode & 4: return value when already ns object
  /** *** */ 	// mode & 8|1: behave like require
  /** *** */ 	__webpack_require__.t = function (value, mode) {
    /** *** */ 		if (mode & 1) value = __webpack_require__(value);
    /** *** */ 		if (mode & 8) return value;
    /** *** */ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /** *** */ 		const ns = Object.create(null);
    /** *** */ 		__webpack_require__.r(ns);
    /** *** */ 		Object.defineProperty(ns, 'default', { enumerable: true, value });
    /** *** */ 		if (mode & 2 && typeof value !== 'string') for (const key in value) __webpack_require__.d(ns, key, (key => value[key]).bind(null, key));
    /** *** */ 		return ns;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// getDefaultExport function for compatibility with non-harmony modules
  /** *** */ 	__webpack_require__.n = function (module) {
    /** *** */ 		const getter = module && module.__esModule
      /** *** */ 			? function getDefault() { return module.default; }
      /** *** */ 			: function getModuleExports() { return module; };
      /** *** */ 		__webpack_require__.d(getter, 'a', getter);
    /** *** */ 		return getter;
    /** *** */ 	};
  /** *** */
  /** *** */ 	// Object.prototype.hasOwnProperty.call
  /** *** */ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
  /** *** */
  /** *** */ 	// __webpack_public_path__
  /** *** */ 	__webpack_require__.p = '';
  /** *** */
  /** *** */
  /** *** */ 	// Load entry module and return exports
  /** *** */ 	return __webpack_require__(__webpack_require__.s = 'fb15');
  /** *** */ }({

  /** */ '230e':
  /** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__('d3f4');
    const document = __webpack_require__('7726').document;
    // typeof document.createElement is 'object' in old IE
    const is = isObject(document) && isObject(document.createElement);
    module.exports = function (it) {
      return is ? document.createElement(it) : {};
    };
    /** */ }),

  /** */ 2350:
  /** */ (function (module, exports) {
    /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
    // css base code, injected by the css-loader
    module.exports = function (useSourceMap) {
      const list = [];

      // return the list of modules as css string
      list.toString = function toString() {
        return this.map((item) => {
          const content = cssWithMappingToString(item, useSourceMap);
          if (item[2]) {
            return `@media ${item[2]}{${content}}`;
          }
          return content;
        }).join('');
      };

      // import a list of modules into the list
      list.i = function (modules, mediaQuery) {
        if (typeof modules === 'string') modules = [[null, modules, '']];
        const alreadyImportedModules = {};
        for (var i = 0; i < this.length; i++) {
          const id = this[i][0];
          if (typeof id === 'number') alreadyImportedModules[id] = true;
        }
        for (i = 0; i < modules.length; i++) {
          const item = modules[i];
          // skip already imported module
          // this implementation is not 100% perfect for weird media query combinations
          //  when a module is imported multiple times with different media queries.
          //  I hope this will never occur (Hey this way we have smaller bundles)
          if (typeof item[0] !== 'number' || !alreadyImportedModules[item[0]]) {
            if (mediaQuery && !item[2]) {
              item[2] = mediaQuery;
            } else if (mediaQuery) {
              item[2] = `(${item[2]}) and (${mediaQuery})`;
            }
            list.push(item);
          }
        }
      };
      return list;
    };

    function cssWithMappingToString(item, useSourceMap) {
      const content = item[1] || '';
      const cssMapping = item[3];
      if (!cssMapping) {
        return content;
      }

      if (useSourceMap && typeof btoa === 'function') {
        const sourceMapping = toComment(cssMapping);
        const sourceURLs = cssMapping.sources.map(source => `/*# sourceURL=${cssMapping.sourceRoot}${source} */`);

        return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
      }

      return [content].join('\n');
    }

    // Adapted from convert-source-map (MIT)
    function toComment(sourceMap) {
      // eslint-disable-next-line no-undef
      const base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
      const data = `sourceMappingURL=data:application/json;charset=utf-8;base64,${base64}`;

      return `/*# ${data} */`;
    }
    /** */ }),

  /** */ '45dc':
  /** */ (function (module, __webpack_exports__, __webpack_require__) {
    /* harmony import */ const _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_7a5adf17_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__('fa4f');
    /* harmony import */ const _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_7a5adf17_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /* #__PURE__ */__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_7a5adf17_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
    /* unused harmony reexport * */
    /* unused harmony default export */ const _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_index_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Calendar_vue_vue_type_style_index_0_id_7a5adf17_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a);
    /** */ }),

  /** */ '499e':
  /** */ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
    /**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
    function listToStyles(parentId, list) {
      const styles = [];
      const newStyles = {};
      for (let i = 0; i < list.length; i++) {
        const item = list[i];
        const id = item[0];
        const css = item[1];
        const media = item[2];
        const sourceMap = item[3];
        const part = {
          id: `${parentId}:${i}`,
          css,
          media,
          sourceMap,
        };
        if (!newStyles[id]) {
          styles.push(newStyles[id] = { id, parts: [part] });
        } else {
          newStyles[id].parts.push(part);
        }
      }
      return styles;
    }

    // CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'default', () => addStylesClient);
    /*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/


    const hasDocument = typeof document !== 'undefined';

    if (typeof DEBUG !== 'undefined' && DEBUG) {
      if (!hasDocument) {
        throw new Error(
          'vue-style-loader cannot be used in a non-browser environment. '
    + "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.",
        );
      }
    }

    /*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

    const stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/};

    const head = hasDocument && (document.head || document.getElementsByTagName('head')[0]);
    let singletonElement = null;
    let singletonCounter = 0;
    let isProduction = false;
    const noop = function () {};
    let options = null;
    const ssrIdKey = 'data-vue-ssr-id';

    // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
    // tags it will allow on a page
    const isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function addStylesClient(parentId, list, _isProduction, _options) {
      isProduction = _isProduction;

      options = _options || {};

      let styles = listToStyles(parentId, list);
      addStylesToDom(styles);

      return function update(newList) {
        const mayRemove = [];
        for (var i = 0; i < styles.length; i++) {
          const item = styles[i];
          var domStyle = stylesInDom[item.id];
          domStyle.refs--;
          mayRemove.push(domStyle);
        }
        if (newList) {
          styles = listToStyles(parentId, newList);
          addStylesToDom(styles);
        } else {
          styles = [];
        }
        for (var i = 0; i < mayRemove.length; i++) {
          var domStyle = mayRemove[i];
          if (domStyle.refs === 0) {
            for (let j = 0; j < domStyle.parts.length; j++) {
              domStyle.parts[j]();
            }
            delete stylesInDom[domStyle.id];
          }
        }
      };
    }

    function addStylesToDom(styles /* Array<StyleObject> */) {
      for (let i = 0; i < styles.length; i++) {
        const item = styles[i];
        const domStyle = stylesInDom[item.id];
        if (domStyle) {
          domStyle.refs++;
          for (var j = 0; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }
          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j]));
          }
          if (domStyle.parts.length > item.parts.length) {
            domStyle.parts.length = item.parts.length;
          }
        } else {
          const parts = [];
          for (var j = 0; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j]));
          }
          stylesInDom[item.id] = { id: item.id, refs: 1, parts };
        }
      }
    }

    function createStyleElement() {
      const styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      head.appendChild(styleElement);
      return styleElement;
    }

    function addStyle(obj /* StyleObjectPart */) {
      let update; let
        remove;
      let styleElement = document.querySelector(`style[${ssrIdKey}~="${obj.id}"]`);

      if (styleElement) {
        if (isProduction) {
          // has SSR styles and in production mode.
          // simply do nothing.
          return noop;
        }
        // has SSR styles but in dev mode.
        // for some reason Chrome can't handle source map in server-rendered
        // style tags - source maps in <style> only works if the style tag is
        // created and inserted dynamically. So we remove the server rendered
        // styles and inject new ones.
        styleElement.parentNode.removeChild(styleElement);
      }

      if (isOldIE) {
        // use singleton mode for IE9.
        const styleIndex = singletonCounter++;
        styleElement = singletonElement || (singletonElement = createStyleElement());
        update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
        remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
      } else {
        // use multi-style-tag mode in all other cases
        styleElement = createStyleElement();
        update = applyToTag.bind(null, styleElement);
        remove = function () {
          styleElement.parentNode.removeChild(styleElement);
        };
      }

      update(obj);

      return function updateStyle(newObj /* StyleObjectPart */) {
        if (newObj) {
          if (newObj.css === obj.css
          && newObj.media === obj.media
          && newObj.sourceMap === obj.sourceMap) {
            return;
          }
          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    const replaceText = (function () {
      const textStore = [];

      return function (index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }());

    function applyToSingletonTag(styleElement, index, remove, obj) {
      const css = remove ? '' : obj.css;

      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = replaceText(index, css);
      } else {
        const cssNode = document.createTextNode(css);
        const childNodes = styleElement.childNodes;
        if (childNodes[index]) styleElement.removeChild(childNodes[index]);
        if (childNodes.length) {
          styleElement.insertBefore(cssNode, childNodes[index]);
        } else {
          styleElement.appendChild(cssNode);
        }
      }
    }

    function applyToTag(styleElement, obj) {
      let css = obj.css;
      const media = obj.media;
      const sourceMap = obj.sourceMap;

      if (media) {
        styleElement.setAttribute('media', media);
      }
      if (options.ssrId) {
        styleElement.setAttribute(ssrIdKey, obj.id);
      }

      if (sourceMap) {
        // https://developer.chrome.com/devtools/docs/javascript-debugging
        // this makes source maps inside style tags work properly in Chrome
        css += `\n/*# sourceURL=${sourceMap.sources[0]} */`;
        // http://stackoverflow.com/a/26603875
        css += `\n/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))} */`;
      }

      if (styleElement.styleSheet) {
        styleElement.styleSheet.cssText = css;
      } else {
        while (styleElement.firstChild) {
          styleElement.removeChild(styleElement.firstChild);
        }
        styleElement.appendChild(document.createTextNode(css));
      }
    }
    /** */ }),

  /** */ 6252:
  /** */ (function (module, exports, __webpack_require__) {
    exports = module.exports = __webpack_require__('2350')(false);
    // imports


    // module
    exports.push([module.i, '.container[data-v-7a5adf17]{font-size:20px}.prevous[data-v-7a5adf17],.year[data-v-7a5adf17]{font-size:1.2em;display:inline-block}.active[data-v-7a5adf17]{text-decoration:underline}.month[data-v-7a5adf17],.next[data-v-7a5adf17]{font-size:1.2em;display:inline-block}.prev[data-v-7a5adf17]{background:#8f8f8f}.current[data-v-7a5adf17]{background:#fff}.post[data-v-7a5adf17]{background:#90ee90}', '']);

    // exports
    /** */ }),

  /** */ '6a99':
  /** */ (function (module, exports, __webpack_require__) {
    // 7.1.1 ToPrimitive(input [, PreferredType])
    const isObject = __webpack_require__('d3f4');
    // instead of the ES6 spec version, we didn't implement @@toPrimitive case
    // and the second argument - flag - preferred type is a string
    module.exports = function (it, S) {
      if (!isObject(it)) return it;
      let fn; let
        val;
      if (S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
      if (typeof (fn = it.valueOf) === 'function' && !isObject(val = fn.call(it))) return val;
      if (!S && typeof (fn = it.toString) === 'function' && !isObject(val = fn.call(it))) return val;
      throw TypeError("Can't convert object to primitive value");
    };
    /** */ }),

  /** */ 7726:
  /** */ (function (module, exports) {
    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
    const global = module.exports = typeof window !== 'undefined' && window.Math == Math
      ? window : typeof self !== 'undefined' && self.Math == Math ? self
        // eslint-disable-next-line no-new-func
        : Function('return this')();
    if (typeof __g === 'number') __g = global; // eslint-disable-line no-undef
    /** */ }),

  /** */ '79e5':
  /** */ (function (module, exports) {
    module.exports = function (exec) {
      try {
        return !!exec();
      } catch (e) {
        return true;
      }
    };
    /** */ }),

  /** */ '7f7f':
  /** */ (function (module, exports, __webpack_require__) {
    const dP = __webpack_require__('86cc').f;
    const FProto = Function.prototype;
    const nameRE = /^\s*function ([^ (]*)/;
    const NAME = 'name';

    // 19.2.4.2 name
    NAME in FProto || __webpack_require__('9e1e') && dP(FProto, NAME, {
      configurable: true,
      get() {
        try {
          return (`${this}`).match(nameRE)[1];
        } catch (e) {
          return '';
        }
      },
    });
    /** */ }),

  /** */ '86cc':
  /** */ (function (module, exports, __webpack_require__) {
    const anObject = __webpack_require__('cb7c');
    const IE8_DOM_DEFINE = __webpack_require__('c69a');
    const toPrimitive = __webpack_require__('6a99');
    const dP = Object.defineProperty;

    exports.f = __webpack_require__('9e1e') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
      anObject(O);
      P = toPrimitive(P, true);
      anObject(Attributes);
      if (IE8_DOM_DEFINE) {
        try {
          return dP(O, P, Attributes);
        } catch (e) { /* empty */ }
      }
      if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
      if ('value' in Attributes) O[P] = Attributes.value;
      return O;
    };
    /** */ }),

  /** */ '9e1e':
  /** */ (function (module, exports, __webpack_require__) {
    // Thank's IE8 for his funny defineProperty
    module.exports = !__webpack_require__('79e5')(() => Object.defineProperty({}, 'a', { get() { return 7; } }).a != 7);
    /** */ }),

  /** */ c69a:
  /** */ (function (module, exports, __webpack_require__) {
    module.exports = !__webpack_require__('9e1e') && !__webpack_require__('79e5')(() => Object.defineProperty(__webpack_require__('230e')('div'), 'a', { get() { return 7; } }).a != 7);
    /** */ }),

  /** */ cb7c:
  /** */ (function (module, exports, __webpack_require__) {
    const isObject = __webpack_require__('d3f4');
    module.exports = function (it) {
      if (!isObject(it)) throw TypeError(`${it} is not an object!`);
      return it;
    };
    /** */ }),

  /** */ d3f4:
  /** */ (function (module, exports) {
    module.exports = function (it) {
      return typeof it === 'object' ? it !== null : typeof it === 'function';
    };
    /** */ }),

  /** */ fa4f:
  /** */ (function (module, exports, __webpack_require__) {
    // style-loader: Adds some css to the DOM by adding a <style> tag

    // load the styles
    let content = __webpack_require__('6252');
    if (typeof content === 'string') content = [[module.i, content, '']];
    if (content.locals) module.exports = content.locals;
    // add the styles to the DOM
    const add = __webpack_require__('499e').default;
    const update = add('43c5637a', content, true, { sourceMap: false, shadowMode: false });
    /** */ }),

  /** */ fb15:
  /** */ (function (module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);

    // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
    // This file is imported into lib/wc client bundles.

    if (typeof window !== 'undefined') {
      let i;
      if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
      }
    }

    // Indicate to webpack that this file can be concatenated
    /* harmony default export */ const setPublicPath = (null);

    // EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
    const es6_function_name = __webpack_require__('7f7f');

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"c4a605c0-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/Calendar.vue?vue&type=template&id=7a5adf17&scoped=true&
    const render = function () {
      const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('div', { staticClass: 'container' }, [_c('div', [_c('span', [_vm._v(_vm._s(_vm.currentDate.year))]), _c('span', [_vm._v(_vm._s(_vm.currentDate.month))]), _c('span', [_vm._v(_vm._s(_vm.currentDate.date))])]), _c('header', [_c('div', { staticClass: 'prevous', on: { click: _vm.decrease } }, [_vm._v('上个月')]), _c('div', { staticClass: 'month' }, [_vm._v(_vm._s(`${_vm.thisYear}年${_vm.thisMonth}月`))]), _c('div', { staticClass: 'next', on: { click: _vm.increase } }, [_vm._v('下个月')])]), _c('table', { staticStyle: { width: '90%' }, on: { touchstart: _vm.handleTouchStart, touchend: _vm.handleTouchEnd } }, [_vm._m(0), _c('tbody', _vm._l((_vm.allDates), (row, rowIndex) => _c('tr', { key: rowIndex }, _vm._l((row), (value, key, colIndex) => _c('td', {
 key: colIndex,
class: [
        value.type === 'current' ? 'current' : value.type === 'prev' ? 'prev' : 'post',
        value.year === _vm.currentDate.year
            && value.month === _vm.currentDate.month
            && value.date === _vm.currentDate.date && 'active',
      ],
style: ({
        color: value.type === 'current'
            && value.year === _vm.today.getFullYear()
            && value.month === _vm.today.getMonth() + 1
            && value.date === _vm.today.getDate() ? 'red' : 'black',
      }),
on: { click: function ($event) { _vm.handleDateSelect(value); } } 
}, [_vm._v(`\n          ${_vm._s(value.date)  }\n        `)])), 0)), 0)])]);
    };
    const staticRenderFns = [function () { const _vm = this; const _h = _vm.$createElement; const _c = _vm._self._c || _h; return _c('thead', [_c('tr', [_c('th', [_vm._v('日')]), _c('th', [_vm._v('一')]), _c('th', [_vm._v('二')]), _c('th', [_vm._v('三')]), _c('th', [_vm._v('四')]), _c('th', [_vm._v('五')]), _c('th', [_vm._v('六')])])]); }];


    // CONCATENATED MODULE: ./packages/calendar/src/Calendar.vue?vue&type=template&id=7a5adf17&scoped=true&

    // CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/calendar/src/Calendar.vue?vue&type=script&lang=js&
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    /* harmony default export */ const Calendarvue_type_script_lang_js_ = ({
      name: 'Calendar',
      data: function data() {
        const now = new Date();
        const today = now;
        const year = now.getFullYear();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        return {
          today,
          currentDate: {
            year,
            month,
            date,
          },
          thisYear: year,
          thisMonth: month,
          startX: 0,
          startY: 0,
          endX: 0,
          endY: 0,
        };
      },
      computed: {
        allDates: function allDates() {
          return this.getDatesByMonth(this.thisYear, this.thisMonth);
        },
      },
      methods: {
        increase: function increase() {
          if (this.thisMonth === 12) {
            this.thisYear += 1;
            this.thisMonth = 1;
          } else {
            this.thisMonth += 1;
          }
        },
        decrease: function decrease() {
          if (this.thisMonth === 1) {
            this.thisYear -= 1;
            this.thisMonth = 12;
          } else {
            this.thisMonth -= 1;
          }
        },
        handleTouchStart: function handleTouchStart(e) {
          const currentPoint = e.changedTouches[0];
          this.startX = currentPoint.clientX;
          this.startY = currentPoint.clientY;
        },
        handleTouchEnd: function handleTouchEnd(e) {
          const currentPoint = e.changedTouches[0];
          this.endX = currentPoint.clientX;
          this.endY = currentPoint.clientY;
          const disX = this.endX - this.startX;
          const disY = this.endY - this.startY;

          if (disX > 10 && disY < 10 && disY > -10) {
            e.stopPropagation();
            this.decrease();
          }

          if (disX < -10 && disY < 10 && disY > -10) {
            e.stopPropagation();
            this.increase();
          }

          this.startX = 0;
          this.startY = 0;
          this.endX = 0;
          this.endY = 0;
        },
        handleDateSelect: function handleDateSelect(value) {
          const year = value.year;


          const month = value.month;


          const date = value.date;
          this.thisYear = year;
          this.thisMonth = month;
          this.currentDate = {
            year,
            month,
            date,
          };
        },
        getDatesByMonth: function getDatesByMonth(year, originMonth) {
          const month = originMonth - 1;
          const prevousMonth = {
            lastDate: new Date(year, month, 0).getDate(),
          };
          const currentLastDate = new Date(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1, 0).getDate();
          const currentMonth = {
            lastDate: currentLastDate,
            firstDatePosition: new Date(year, month, 1).getDay(),
            lastDatePosition: new Date(year, month, currentLastDate).getDay(),
          };
          const dateCount = currentMonth.firstDatePosition + currentMonth.lastDate + (7 - currentMonth.lastDatePosition - 1);
          const allDates = [];

          for (let i = 0; i < dateCount / 7; i += 1) {
            allDates[i] = [];
          }

          let rowNum = 0;
          let colNum = 0;

          const pushDate = function pushDate(currentDate) {
            allDates[rowNum][colNum] = currentDate;
            colNum += 1;

            if (colNum === 7) {
              colNum = 0;
              rowNum += 1;
            }
          }; // 0 1 2 3 4 5 6
            // 30-5-0    30-5+5
            // 252627282930


          for (let _i = 0; _i < currentMonth.firstDatePosition; _i += 1) {
            const currentDate = {
              type: 'prev',
              year: originMonth === 1 ? year - 1 : year,
              month: originMonth === 1 ? 12 : originMonth - 1,
              date: prevousMonth.lastDate - (currentMonth.firstDatePosition - 1) + _i,
            };
            pushDate(currentDate);
          }

          for (let _i2 = 1; _i2 <= currentMonth.lastDate; _i2 += 1) {
            const _currentDate = {
              type: 'current',
              year,
              month: originMonth,
              date: _i2,
            };
            pushDate(_currentDate);
          } // 0 1 2 3 4 5 6
          //     2-1     6-1
          // 30310102030405


          for (let _i3 = currentMonth.lastDatePosition + 1; _i3 <= 6; _i3 += 1) {
            const _currentDate2 = {
              type: 'post',
              year: originMonth === 12 ? year + 1 : year,
              month: originMonth === 12 ? 1 : originMonth + 1,
              date: _i3 - currentMonth.lastDatePosition,
            };
            pushDate(_currentDate2);
          }

          return allDates;
        },
      },
    });
      // CONCATENATED MODULE: ./packages/calendar/src/Calendar.vue?vue&type=script&lang=js&
      /* harmony default export */ const src_Calendarvue_type_script_lang_js_ = (Calendarvue_type_script_lang_js_);
    // EXTERNAL MODULE: ./packages/calendar/src/Calendar.vue?vue&type=style&index=0&id=7a5adf17&scoped=true&lang=css&
    const Calendarvue_type_style_index_0_id_7a5adf17_scoped_true_lang_css_ = __webpack_require__('45dc');

    // CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
    /* globals __VUE_SSR_CONTEXT__ */

    // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
    // This module is a runtime utility for cleaner component module output and will
    // be included in the final webpack user bundle.

    function normalizeComponent(
      scriptExports,
      render,
      staticRenderFns,
      functionalTemplate,
      injectStyles,
      scopeId,
      moduleIdentifier, /* server only */
      shadowMode, /* vue-cli only */
    ) {
      // Vue.extend constructor export interop
      const options = typeof scriptExports === 'function'
        ? scriptExports.options
        : scriptExports;

      // render functions
      if (render) {
        options.render = render;
        options.staticRenderFns = staticRenderFns;
        options._compiled = true;
      }

      // functional template
      if (functionalTemplate) {
        options.functional = true;
      }

      // scopedId
      if (scopeId) {
        options._scopeId = `data-v-${scopeId}`;
      }

      let hook;
      if (moduleIdentifier) { // server build
        hook = function (context) {
          // 2.3 injection
          context = context // cached call
        || (this.$vnode && this.$vnode.ssrContext) // stateful
        || (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
          // 2.2 with runInNewContext: true
          if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
            context = __VUE_SSR_CONTEXT__;
          }
          // inject component styles
          if (injectStyles) {
            injectStyles.call(this, context);
          }
          // register component module identifier for async chunk inferrence
          if (context && context._registeredComponents) {
            context._registeredComponents.add(moduleIdentifier);
          }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
      } else if (injectStyles) {
        hook = shadowMode
          ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
          : injectStyles;
      }

      if (hook) {
        if (options.functional) {
          // for template-only hot-reload because in that case the render fn doesn't
          // go through the normalizer
          options._injectStyles = hook;
          // register for functioal component in vue file
          const originalRender = options.render;
          options.render = function renderWithStyleInjection(h, context) {
            hook.call(context);
            return originalRender(h, context);
          };
        } else {
          // inject component registration as beforeCreate hook
          const existing = options.beforeCreate;
          options.beforeCreate = existing
            ? [].concat(existing, hook)
            : [hook];
        }
      }

      return {
        exports: scriptExports,
        options,
      };
    }

    // CONCATENATED MODULE: ./packages/calendar/src/Calendar.vue


    /* normalize component */

    const component = normalizeComponent(
      src_Calendarvue_type_script_lang_js_,
      render,
      staticRenderFns,
      false,
      null,
      '7a5adf17',
      null,

    );

    component.options.__file = 'Calendar.vue';
    /* harmony default export */ const Calendar = (component.exports);
    // CONCATENATED MODULE: ./packages/calendar/index.js

    // 导入组件

    // 为组件提供 install 安装方法，供按需引入

    Calendar.install = function (Vue) {
      Vue.component(Calendar.name, Calendar);
    }; // 默认导出组件


    /* harmony default export */ const calendar = (Calendar);
    // CONCATENATED MODULE: ./packages/index.js

    // 导入颜色选择器组件

    // 存储组件列表

    const components = [calendar]; // 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册

    const install = function install(Vue) {
      // 判断是否可以安装
      if (install.installed) return; // 遍历注册全局组件

      components.map(component => Vue.component(component.name, component));
    }; // 判断是否是直接引入文件


    if (typeof window !== 'undefined' && window.Vue) {
      install(window.Vue);
    }

    /* harmony default export */ const packages_0 = ({
      // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
      install,
      // 以下是具体的组件列表
      calendar,
    });
      // CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


    /* harmony default export */ const entry_lib = __webpack_exports__.default = (packages_0);
    /** */ }),

  /** *** */ }))));
// # sourceMappingURL=calendar.umd.js.map
