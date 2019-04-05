/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./webpack/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./webpack/3rd/jquery.ajax.js":
/*!************************************!*\
  !*** ./webpack/3rd/jquery.ajax.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! jQuery v2.1.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-dimensions,-offset,-deprecated,-event-alias,-wrap | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
  "object" == ( false ? undefined : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a);
  } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
  var c = [],
      d = c.slice,
      e = c.concat,
      f = c.push,
      g = c.indexOf,
      h = {},
      i = h.toString,
      j = h.hasOwnProperty,
      k = {},
      l = a.document,
      m = "2.1.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/getStyles,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-dimensions,-offset,-deprecated,-event-alias,-wrap",
      n = function n(a, b) {
    return new n.fn.init(a, b);
  },
      o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      p = /^-ms-/,
      q = /-([\da-z])/gi,
      r = function r(a, b) {
    return b.toUpperCase();
  };

  n.fn = n.prototype = {
    jquery: m,
    constructor: n,
    selector: "",
    length: 0,
    toArray: function toArray() {
      return d.call(this);
    },
    get: function get(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
    },
    pushStack: function pushStack(a) {
      var b = n.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b;
    },
    each: function each(a, b) {
      return n.each(this, a, b);
    },
    map: function map(a) {
      return this.pushStack(n.map(this, function (b, c) {
        return a.call(b, c, b);
      }));
    },
    slice: function slice() {
      return this.pushStack(d.apply(this, arguments));
    },
    first: function first() {
      return this.eq(0);
    },
    last: function last() {
      return this.eq(-1);
    },
    eq: function eq(a) {
      var b = this.length,
          c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
    },
    end: function end() {
      return this.prevObject || this.constructor(null);
    },
    push: f,
    sort: c.sort,
    splice: c.splice
  }, n.extend = n.fn.extend = function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = 1,
        i = arguments.length,
        j = !1;

    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == _typeof(g) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
      if (null != (a = arguments[h])) for (b in a) {
        c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
      }
    }

    return g;
  }, n.extend({
    expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function error(a) {
      throw new Error(a);
    },
    noop: function noop() {},
    isFunction: function isFunction(a) {
      return "function" === n.type(a);
    },
    isArray: Array.isArray,
    isWindow: function isWindow(a) {
      return null != a && a === a.window;
    },
    isNumeric: function isNumeric(a) {
      return !n.isArray(a) && a - parseFloat(a) >= 0;
    },
    isPlainObject: function isPlainObject(a) {
      return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
    },
    isEmptyObject: function isEmptyObject(a) {
      var b;

      for (b in a) {
        return !1;
      }

      return !0;
    },
    type: function type(a) {
      return null == a ? a + "" : "object" == _typeof(a) || "function" == typeof a ? h[i.call(a)] || "object" : _typeof(a);
    },
    globalEval: function globalEval(a) {
      var b,
          c = eval;
      a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
    },
    camelCase: function camelCase(a) {
      return a.replace(p, "ms-").replace(q, r);
    },
    nodeName: function nodeName(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
    },
    each: function each(a, b, c) {
      var d,
          e = 0,
          f = a.length,
          g = s(a);

      if (c) {
        if (g) {
          for (; f > e; e++) {
            if (d = b.apply(a[e], c), d === !1) break;
          }
        } else for (e in a) {
          if (d = b.apply(a[e], c), d === !1) break;
        }
      } else if (g) {
        for (; f > e; e++) {
          if (d = b.call(a[e], e, a[e]), d === !1) break;
        }
      } else for (e in a) {
        if (d = b.call(a[e], e, a[e]), d === !1) break;
      }

      return a;
    },
    trim: function trim(a) {
      return null == a ? "" : (a + "").replace(o, "");
    },
    makeArray: function makeArray(a, b) {
      var c = b || [];
      return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
    },
    inArray: function inArray(a, b, c) {
      return null == b ? -1 : g.call(b, a, c);
    },
    merge: function merge(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
        a[e++] = b[d];
      }

      return a.length = e, a;
    },
    grep: function grep(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
        d = !b(a[f], f), d !== h && e.push(a[f]);
      }

      return e;
    },
    map: function map(a, b, c) {
      var d,
          f = 0,
          g = a.length,
          h = s(a),
          i = [];
      if (h) for (; g > f; f++) {
        d = b(a[f], f, c), null != d && i.push(d);
      } else for (f in a) {
        d = b(a[f], f, c), null != d && i.push(d);
      }
      return e.apply([], i);
    },
    guid: 1,
    proxy: function proxy(a, b) {
      var c, e, f;
      return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
        return a.apply(b || this, e.concat(d.call(arguments)));
      }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
    },
    now: Date.now,
    support: k
  }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
    h["[object " + b + "]"] = b.toLowerCase();
  });

  function s(a) {
    var b = a.length,
        c = n.type(a);
    return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
  }

  var t = a.document.documentElement,
      u,
      v = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.msMatchesSelector,
      w = function w(a, b) {
    if (a === b) return u = !0, 0;
    var c = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
    return c ? 1 & c ? a === l || n.contains(l, a) ? -1 : b === l || n.contains(l, b) ? 1 : 0 : 4 & c ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
  };

  n.extend({
    find: function find(a, b, c, d) {
      var e,
          f,
          g = 0;
      if (c = c || [], b = b || l, !a || "string" != typeof a) return c;
      if (1 !== (f = b.nodeType) && 9 !== f) return [];
      if (d) while (e = d[g++]) {
        n.find.matchesSelector(e, a) && c.push(e);
      } else n.merge(c, b.querySelectorAll(a));
      return c;
    },
    unique: function unique(a) {
      var b,
          c = [],
          d = 0,
          e = 0;

      if (u = !1, a.sort(w), u) {
        while (b = a[d++]) {
          b === a[d] && (e = c.push(d));
        }

        while (e--) {
          a.splice(c[e], 1);
        }
      }

      return a;
    },
    text: function text(a) {
      var b,
          c = "",
          d = 0,
          e = a.nodeType;

      if (e) {
        if (1 === e || 9 === e || 11 === e) return a.textContent;
        if (3 === e || 4 === e) return a.nodeValue;
      } else while (b = a[d++]) {
        c += n.text(b);
      }

      return c;
    },
    contains: function contains(a, b) {
      var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
      return a === d || !(!d || 1 !== d.nodeType || !c.contains(d));
    },
    isXMLDoc: function isXMLDoc(a) {
      return "HTML" !== (a.ownerDocument || a).documentElement.nodeName;
    },
    expr: {
      attrHandle: {},
      match: {
        bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
        needsContext: /^[\x20\t\r\n\f]*[>+~]/
      }
    }
  }), n.extend(n.find, {
    matches: function matches(a, b) {
      return n.find(a, null, null, b);
    },
    matchesSelector: function matchesSelector(a, b) {
      return v.call(a, b);
    },
    attr: function attr(a, b) {
      return a.getAttribute(b);
    }
  });
  var x = n.expr.match.needsContext,
      y = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      z = /^.[^:#\[\.,]*$/;

  function A(a, b, c) {
    if (n.isFunction(b)) return n.grep(a, function (a, d) {
      return !!b.call(a, d, a) !== c;
    });
    if (b.nodeType) return n.grep(a, function (a) {
      return a === b !== c;
    });

    if ("string" == typeof b) {
      if (z.test(b)) return n.filter(b, a, c);
      b = n.filter(b, a);
    }

    return n.grep(a, function (a) {
      return g.call(b, a) >= 0 !== c;
    });
  }

  n.filter = function (a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
      return 1 === a.nodeType;
    }));
  }, n.fn.extend({
    find: function find(a) {
      var b,
          c = this.length,
          d = [],
          e = this;
      if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
        for (b = 0; c > b; b++) {
          if (n.contains(e[b], this)) return !0;
        }
      }));

      for (b = 0; c > b; b++) {
        n.find(a, e[b], d);
      }

      return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
    },
    filter: function filter(a) {
      return this.pushStack(A(this, a || [], !1));
    },
    not: function not(a) {
      return this.pushStack(A(this, a || [], !0));
    },
    is: function is(a) {
      return !!A(this, "string" == typeof a && x.test(a) ? n(a) : a || [], !1).length;
    }
  });

  var B,
      C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      D = n.fn.init = function (a, b) {
    var c, d;
    if (!a) return this;

    if ("string" == typeof a) {
      if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : C.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || B).find(a) : this.constructor(b).find(a);

      if (c[1]) {
        if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), y.test(c[1]) && n.isPlainObject(b)) for (c in b) {
          n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
        }
        return this;
      }

      return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
    }

    return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof B.ready ? B.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
  };

  D.prototype = n.fn, B = n(l);
  var E = /^(?:parents|prev(?:Until|All))/,
      F = {
    children: !0,
    contents: !0,
    next: !0,
    prev: !0
  };
  n.extend({
    dir: function dir(a, b, c) {
      var d = [],
          e = void 0 !== c;

      while ((a = a[b]) && 9 !== a.nodeType) {
        if (1 === a.nodeType) {
          if (e && n(a).is(c)) break;
          d.push(a);
        }
      }

      return d;
    },
    sibling: function sibling(a, b) {
      for (var c = []; a; a = a.nextSibling) {
        1 === a.nodeType && a !== b && c.push(a);
      }

      return c;
    }
  }), n.fn.extend({
    has: function has(a) {
      var b = n(a, this),
          c = b.length;
      return this.filter(function () {
        for (var a = 0; c > a; a++) {
          if (n.contains(this, b[a])) return !0;
        }
      });
    },
    closest: function closest(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = x.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
        for (c = this[d]; c && c !== b; c = c.parentNode) {
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
            f.push(c);
            break;
          }
        }
      }

      return this.pushStack(f.length > 1 ? n.unique(f) : f);
    },
    index: function index(a) {
      return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    },
    add: function add(a, b) {
      return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
    },
    addBack: function addBack(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
    }
  });

  function G(a, b) {
    while ((a = a[b]) && 1 !== a.nodeType) {
      ;
    }

    return a;
  }

  n.each({
    parent: function parent(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null;
    },
    parents: function parents(a) {
      return n.dir(a, "parentNode");
    },
    parentsUntil: function parentsUntil(a, b, c) {
      return n.dir(a, "parentNode", c);
    },
    next: function next(a) {
      return G(a, "nextSibling");
    },
    prev: function prev(a) {
      return G(a, "previousSibling");
    },
    nextAll: function nextAll(a) {
      return n.dir(a, "nextSibling");
    },
    prevAll: function prevAll(a) {
      return n.dir(a, "previousSibling");
    },
    nextUntil: function nextUntil(a, b, c) {
      return n.dir(a, "nextSibling", c);
    },
    prevUntil: function prevUntil(a, b, c) {
      return n.dir(a, "previousSibling", c);
    },
    siblings: function siblings(a) {
      return n.sibling((a.parentNode || {}).firstChild, a);
    },
    children: function children(a) {
      return n.sibling(a.firstChild);
    },
    contents: function contents(a) {
      return a.contentDocument || n.merge([], a.childNodes);
    }
  }, function (a, b) {
    n.fn[a] = function (c, d) {
      var e = n.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (F[a] || n.unique(e), E.test(a) && e.reverse()), this.pushStack(e);
    };
  });
  var H = /\S+/g,
      I = {};

  function J(a) {
    var b = I[a] = {};
    return n.each(a.match(H) || [], function (a, c) {
      b[c] = !0;
    }), b;
  }

  n.Callbacks = function (a) {
    a = "string" == typeof a ? I[a] || J(a) : n.extend({}, a);

    var b,
        c,
        d,
        e,
        f,
        g,
        h = [],
        i = !a.once && [],
        j = function j(l) {
      for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
        if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
          b = !1;
          break;
        }
      }

      d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
    },
        k = {
      add: function add() {
        if (h) {
          var c = h.length;
          !function g(b) {
            n.each(b, function (b, c) {
              var d = n.type(c);
              "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
            });
          }(arguments), d ? f = h.length : b && (e = c, j(b));
        }

        return this;
      },
      remove: function remove() {
        return h && n.each(arguments, function (a, b) {
          var c;

          while ((c = n.inArray(b, h, c)) > -1) {
            h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
          }
        }), this;
      },
      has: function has(a) {
        return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
      },
      empty: function empty() {
        return h = [], f = 0, this;
      },
      disable: function disable() {
        return h = i = b = void 0, this;
      },
      disabled: function disabled() {
        return !h;
      },
      lock: function lock() {
        return i = void 0, b || k.disable(), this;
      },
      locked: function locked() {
        return !i;
      },
      fireWith: function fireWith(a, b) {
        return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
      },
      fire: function fire() {
        return k.fireWith(this, arguments), this;
      },
      fired: function fired() {
        return !!c;
      }
    };

    return k;
  }, n.extend({
    Deferred: function Deferred(a) {
      var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
          c = "pending",
          d = {
        state: function state() {
          return c;
        },
        always: function always() {
          return e.done(arguments).fail(arguments), this;
        },
        then: function then() {
          var a = arguments;
          return n.Deferred(function (c) {
            n.each(b, function (b, f) {
              var g = n.isFunction(a[b]) && a[b];
              e[f[1]](function () {
                var a = g && g.apply(this, arguments);
                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
              });
            }), a = null;
          }).promise();
        },
        promise: function promise(a) {
          return null != a ? n.extend(a, d) : d;
        }
      },
          e = {};
      return d.pipe = d.then, n.each(b, function (a, f) {
        var g = f[2],
            h = f[3];
        d[f[1]] = g.add, h && g.add(function () {
          c = h;
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
          return e[f[0] + "With"](this === e ? d : this, arguments), this;
        }, e[f[0] + "With"] = g.fireWith;
      }), d.promise(e), a && a.call(e, e), e;
    },
    when: function when(a) {
      var b = 0,
          c = d.call(arguments),
          e = c.length,
          f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
          g = 1 === f ? a : n.Deferred(),
          h = function h(a, b, c) {
        return function (e) {
          b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
        };
      },
          i,
          j,
          k;

      if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
        c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
      }
      return f || g.resolveWith(k, c), g.promise();
    }
  });
  var K;
  n.fn.ready = function (a) {
    return n.ready.promise().done(a), this;
  }, n.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function holdReady(a) {
      a ? n.readyWait++ : n.ready(!0);
    },
    ready: function ready(a) {
      (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (K.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
    }
  });

  function L() {
    l.removeEventListener("DOMContentLoaded", L, !1), a.removeEventListener("load", L, !1), n.ready();
  }

  n.ready.promise = function (b) {
    return K || (K = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", L, !1), a.addEventListener("load", L, !1))), K.promise(b);
  }, n.ready.promise();

  var M = n.access = function (a, b, c, d, e, f, g) {
    var h = 0,
        i = a.length,
        j = null == c;

    if ("object" === n.type(c)) {
      e = !0;

      for (h in c) {
        n.access(a, b, h, c[h], !0, f, g);
      }
    } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b2, c) {
      return j.call(n(a), c);
    })), b)) for (; i > h; h++) {
      b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
    }

    return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
  };

  n.acceptData = function (a) {
    return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
  };

  function N() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function get() {
        return {};
      }
    }), this.expando = n.expando + Math.random();
  }

  N.uid = 1, N.accepts = n.acceptData, N.prototype = {
    key: function key(a) {
      if (!N.accepts(a)) return 0;
      var b = {},
          c = a[this.expando];

      if (!c) {
        c = N.uid++;

        try {
          b[this.expando] = {
            value: c
          }, Object.defineProperties(a, b);
        } catch (d) {
          b[this.expando] = c, n.extend(a, b);
        }
      }

      return this.cache[c] || (this.cache[c] = {}), c;
    },
    set: function set(a, b, c) {
      var d,
          e = this.key(a),
          f = this.cache[e];
      if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
        f[d] = b[d];
      }
      return f;
    },
    get: function get(a, b) {
      var c = this.cache[this.key(a)];
      return void 0 === b ? c : c[b];
    },
    access: function access(a, b, c) {
      var d;
      return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
    },
    remove: function remove(a, b) {
      var c,
          d,
          e,
          f = this.key(a),
          g = this.cache[f];
      if (void 0 === b) this.cache[f] = {};else {
        n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(H) || [])), c = d.length;

        while (c--) {
          delete g[d[c]];
        }
      }
    },
    hasData: function hasData(a) {
      return !n.isEmptyObject(this.cache[a[this.expando]] || {});
    },
    discard: function discard(a) {
      a[this.expando] && delete this.cache[a[this.expando]];
    }
  };
  var O = new N(),
      P = new N(),
      Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      R = /([A-Z])/g;

  function S(a, b, c) {
    var d;
    if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(R, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
      try {
        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Q.test(c) ? n.parseJSON(c) : c;
      } catch (e) {}

      P.set(a, b, c);
    } else c = void 0;
    return c;
  }

  n.extend({
    hasData: function hasData(a) {
      return P.hasData(a) || O.hasData(a);
    },
    data: function data(a, b, c) {
      return P.access(a, b, c);
    },
    removeData: function removeData(a, b) {
      P.remove(a, b);
    },
    _data: function _data(a, b, c) {
      return O.access(a, b, c);
    },
    _removeData: function _removeData(a, b) {
      O.remove(a, b);
    }
  }), n.fn.extend({
    data: function data(a, b) {
      var c,
          d,
          e,
          f = this[0],
          g = f && f.attributes;

      if (void 0 === a) {
        if (this.length && (e = P.get(f), 1 === f.nodeType && !O.get(f, "hasDataAttrs"))) {
          c = g.length;

          while (c--) {
            g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), S(f, d, e[d])));
          }

          O.set(f, "hasDataAttrs", !0);
        }

        return e;
      }

      return "object" == _typeof(a) ? this.each(function () {
        P.set(this, a);
      }) : M(this, function (b) {
        var c,
            d = n.camelCase(a);

        if (f && void 0 === b) {
          if (c = P.get(f, a), void 0 !== c) return c;
          if (c = P.get(f, d), void 0 !== c) return c;
          if (c = S(f, d, void 0), void 0 !== c) return c;
        } else this.each(function () {
          var c = P.get(this, d);
          P.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && P.set(this, a, b);
        });
      }, null, b, arguments.length > 1, null, !0);
    },
    removeData: function removeData(a) {
      return this.each(function () {
        P.remove(this, a);
      });
    }
  }), n.extend({
    queue: function queue(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = O.get(a, b), c && (!d || n.isArray(c) ? d = O.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
    },
    dequeue: function dequeue(a, b) {
      b = b || "fx";

      var c = n.queue(a, b),
          d = c.length,
          e = c.shift(),
          f = n._queueHooks(a, b),
          g = function g() {
        n.dequeue(a, b);
      };

      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
    },
    _queueHooks: function _queueHooks(a, b) {
      var c = b + "queueHooks";
      return O.get(a, c) || O.access(a, c, {
        empty: n.Callbacks("once memory").add(function () {
          O.remove(a, [b + "queue", c]);
        })
      });
    }
  }), n.fn.extend({
    queue: function queue(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
        var c = n.queue(this, a, b);
        n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
      });
    },
    dequeue: function dequeue(a) {
      return this.each(function () {
        n.dequeue(this, a);
      });
    },
    clearQueue: function clearQueue(a) {
      return this.queue(a || "fx", []);
    },
    promise: function promise(a, b) {
      var c,
          d = 1,
          e = n.Deferred(),
          f = this,
          g = this.length,
          h = function h() {
        --d || e.resolveWith(f, [f]);
      };

      "string" != typeof a && (b = a, a = void 0), a = a || "fx";

      while (g--) {
        c = O.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      }

      return h(), e.promise(b);
    }
  });
  var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      U = /^(?:checkbox|radio)$/i;
  !function () {
    var a = l.createDocumentFragment(),
        b = a.appendChild(l.createElement("div")),
        c = l.createElement("input");
    c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
  }();
  var V = "undefined";
  k.focusinBubbles = "onfocusin" in a;
  var W = /^key/,
      X = /^(?:mouse|pointer|contextmenu)|click/,
      Y = /^(?:focusinfocus|focusoutblur)$/,
      Z = /^([^.]*)(?:\.(.+)|)$/;

  function $() {
    return !0;
  }

  function _() {
    return !1;
  }

  function ab() {
    try {
      return l.activeElement;
    } catch (a) {}
  }

  n.event = {
    global: {},
    add: function add(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = O.get(a);

      if (r) {
        c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
          return _typeof(n) !== V && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
        }), b = (b || "").match(H) || [""], j = b.length;

        while (j--) {
          h = Z.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
            type: o,
            origType: q,
            data: d,
            handler: c,
            guid: c.guid,
            selector: e,
            needsContext: e && n.expr.match.needsContext.test(e),
            namespace: p.join(".")
          }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
        }
      }
    },
    remove: function remove(a, b, c, d, e) {
      var f,
          g,
          h,
          i,
          j,
          k,
          l,
          m,
          o,
          p,
          q,
          r = O.hasData(a) && O.get(a);

      if (r && (i = r.events)) {
        b = (b || "").match(H) || [""], j = b.length;

        while (j--) {
          if (h = Z.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
            l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;

            while (f--) {
              k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
            }

            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
          } else for (o in i) {
            n.event.remove(a, o + b[j], c, d, !0);
          }
        }

        n.isEmptyObject(i) && (delete r.handle, O.remove(a, "events"));
      }
    },
    trigger: function trigger(b, c, d, e) {
      var f,
          g,
          h,
          i,
          k,
          m,
          o,
          p = [d || l],
          q = j.call(b, "type") ? b.type : b,
          r = j.call(b, "namespace") ? b.namespace.split(".") : [];

      if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !Y.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == _typeof(b) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
        if (!e && !o.noBubble && !n.isWindow(d)) {
          for (i = o.delegateType || q, Y.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
            p.push(g), h = g;
          }

          h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
        }

        f = 0;

        while ((g = p[f++]) && !b.isPropagationStopped()) {
          b.type = f > 1 ? i : o.bindType || q, m = (O.get(g, "events") || {})[b.type] && O.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
        }

        return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
      }
    },
    dispatch: function dispatch(a) {
      a = n.event.fix(a);
      var b,
          c,
          e,
          f,
          g,
          h = [],
          i = d.call(arguments),
          j = (O.get(this, "events") || {})[a.type] || [],
          k = n.event.special[a.type] || {};

      if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
        h = n.event.handlers.call(this, a, j), b = 0;

        while ((f = h[b++]) && !a.isPropagationStopped()) {
          a.currentTarget = f.elem, c = 0;

          while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
          }
        }

        return k.postDispatch && k.postDispatch.call(this, a), a.result;
      }
    },
    handlers: function handlers(a, b) {
      var c,
          d,
          e,
          f,
          g = [],
          h = b.delegateCount,
          i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
        if (i.disabled !== !0 || "click" !== a.type) {
          for (d = [], c = 0; h > c; c++) {
            f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
          }

          d.length && g.push({
            elem: i,
            handlers: d
          });
        }
      }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g;
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function filter(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function filter(a, b) {
        var c,
            d,
            e,
            f = b.button;
        return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
      }
    },
    fix: function fix(a) {
      if (a[n.expando]) return a;
      var b,
          c,
          d,
          e = a.type,
          f = a,
          g = this.fixHooks[e];
      g || (this.fixHooks[e] = g = X.test(e) ? this.mouseHooks : W.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;

      while (b--) {
        c = d[b], a[c] = f[c];
      }

      return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function trigger() {
          return this !== ab() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function trigger() {
          return this === ab() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function trigger() {
          return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
        },
        _default: function _default(a) {
          return n.nodeName(a.target, "a");
        }
      },
      beforeunload: {
        postDispatch: function postDispatch(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
        }
      }
    },
    simulate: function simulate(a, b, c, d) {
      var e = n.extend(new n.Event(), c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
    }
  }, n.removeEvent = function (a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1);
  }, n.Event = function (a, b) {
    return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? $ : _) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
  }, n.Event.prototype = {
    isDefaultPrevented: _,
    isPropagationStopped: _,
    isImmediatePropagationStopped: _,
    preventDefault: function preventDefault() {
      var a = this.originalEvent;
      this.isDefaultPrevented = $, a && a.preventDefault && a.preventDefault();
    },
    stopPropagation: function stopPropagation() {
      var a = this.originalEvent;
      this.isPropagationStopped = $, a && a.stopPropagation && a.stopPropagation();
    },
    stopImmediatePropagation: function stopImmediatePropagation() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = $, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
    }
  }, n.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function (a, b) {
    n.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function handle(a) {
        var c,
            d = this,
            e = a.relatedTarget,
            f = a.handleObj;
        return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
      }
    };
  }), k.focusinBubbles || n.each({
    focus: "focusin",
    blur: "focusout"
  }, function (a, b) {
    var c = function c(a) {
      n.event.simulate(b, a.target, n.event.fix(a), !0);
    };

    n.event.special[b] = {
      setup: function setup() {
        var d = this.ownerDocument || this,
            e = O.access(d, b);
        e || d.addEventListener(a, c, !0), O.access(d, b, (e || 0) + 1);
      },
      teardown: function teardown() {
        var d = this.ownerDocument || this,
            e = O.access(d, b) - 1;
        e ? O.access(d, b, e) : (d.removeEventListener(a, c, !0), O.remove(d, b));
      }
    };
  }), n.fn.extend({
    on: function on(a, b, c, d, e) {
      var f, g;

      if ("object" == _typeof(a)) {
        "string" != typeof b && (c = c || b, b = void 0);

        for (g in a) {
          this.on(g, b, c, a[g], e);
        }

        return this;
      }

      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = _;else if (!d) return this;
      return 1 === e && (f = d, d = function d(a) {
        return n().off(a), f.apply(this, arguments);
      }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
        n.event.add(this, a, d, c, b);
      });
    },
    one: function one(a, b, c, d) {
      return this.on(a, b, c, d, 1);
    },
    off: function off(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;

      if ("object" == _typeof(a)) {
        for (e in a) {
          this.off(e, b, a[e]);
        }

        return this;
      }

      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = _), this.each(function () {
        n.event.remove(this, a, c, b);
      });
    },
    trigger: function trigger(a, b) {
      return this.each(function () {
        n.event.trigger(a, b, this);
      });
    },
    triggerHandler: function triggerHandler(a, b) {
      var c = this[0];
      return c ? n.event.trigger(a, b, c, !0) : void 0;
    }
  });
  var bb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      cb = /<([\w:]+)/,
      db = /<|&#?\w+;/,
      eb = /<(?:script|style|link)/i,
      fb = /checked\s*(?:[^=]|=\s*.checked.)/i,
      gb = /^$|\/(?:java|ecma)script/i,
      hb = /^true\/(.*)/,
      ib = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      jb = {
    option: [1, "<select multiple='multiple'>", "</select>"],
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""]
  };
  jb.optgroup = jb.option, jb.tbody = jb.tfoot = jb.colgroup = jb.caption = jb.thead, jb.th = jb.td;

  function kb(a, b) {
    return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
  }

  function lb(a) {
    return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
  }

  function mb(a) {
    var b = hb.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a;
  }

  function nb(a, b) {
    for (var c = 0, d = a.length; d > c; c++) {
      O.set(a[c], "globalEval", !b || O.get(b[c], "globalEval"));
    }
  }

  function ob(a, b) {
    var c, d, e, f, g, h, i, j;

    if (1 === b.nodeType) {
      if (O.hasData(a) && (f = O.access(a), g = O.set(b, f), j = f.events)) {
        delete g.handle, g.events = {};

        for (e in j) {
          for (c = 0, d = j[e].length; d > c; c++) {
            n.event.add(b, e, j[e][c]);
          }
        }
      }

      P.hasData(a) && (h = P.access(a), i = n.extend({}, h), P.set(b, i));
    }
  }

  function pb(a, b) {
    var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
    return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
  }

  function qb(a, b) {
    var c = b.nodeName.toLowerCase();
    "input" === c && U.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
  }

  n.extend({
    clone: function clone(a, b, c) {
      var d,
          e,
          f,
          g,
          h = a.cloneNode(!0),
          i = n.contains(a.ownerDocument, a);
      if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = pb(h), f = pb(a), d = 0, e = f.length; e > d; d++) {
        qb(f[d], g[d]);
      }
      if (b) if (c) for (f = f || pb(a), g = g || pb(h), d = 0, e = f.length; e > d; d++) {
        ob(f[d], g[d]);
      } else ob(a, h);
      return g = pb(h, "script"), g.length > 0 && nb(g, !i && pb(a, "script")), h;
    },
    buildFragment: function buildFragment(a, b, c, d) {
      for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
        if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (db.test(e)) {
          f = f || k.appendChild(b.createElement("div")), g = (cb.exec(e) || ["", ""])[1].toLowerCase(), h = jb[g] || jb._default, f.innerHTML = h[1] + e.replace(bb, "<$1></$2>") + h[2], j = h[0];

          while (j--) {
            f = f.lastChild;
          }

          n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
        } else l.push(b.createTextNode(e));
      }

      k.textContent = "", m = 0;

      while (e = l[m++]) {
        if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = pb(k.appendChild(e), "script"), i && nb(f), c)) {
          j = 0;

          while (e = f[j++]) {
            gb.test(e.type || "") && c.push(e);
          }
        }
      }

      return k;
    },
    cleanData: function cleanData(a) {
      for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
        if (n.acceptData(c) && (e = c[O.expando], e && (b = O.cache[e]))) {
          if (b.events) for (d in b.events) {
            f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
          }
          O.cache[e] && delete O.cache[e];
        }

        delete P.cache[c[P.expando]];
      }
    }
  }), n.fn.extend({
    text: function text(a) {
      return M(this, function (a) {
        return void 0 === a ? n.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
        });
      }, null, a, arguments.length);
    },
    append: function append() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = kb(this, a);
          b.appendChild(a);
        }
      });
    },
    prepend: function prepend() {
      return this.domManip(arguments, function (a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = kb(this, a);
          b.insertBefore(a, b.firstChild);
        }
      });
    },
    before: function before() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this);
      });
    },
    after: function after() {
      return this.domManip(arguments, function (a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
      });
    },
    remove: function remove(a, b) {
      for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
        b || 1 !== c.nodeType || n.cleanData(pb(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && nb(pb(c, "script")), c.parentNode.removeChild(c));
      }

      return this;
    },
    empty: function empty() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        1 === a.nodeType && (n.cleanData(pb(a, !1)), a.textContent = "");
      }

      return this;
    },
    clone: function clone(a, b) {
      return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
        return n.clone(this, a, b);
      });
    },
    html: function html(a) {
      return M(this, function (a) {
        var b = this[0] || {},
            c = 0,
            d = this.length;
        if (void 0 === a && 1 === b.nodeType) return b.innerHTML;

        if ("string" == typeof a && !eb.test(a) && !jb[(cb.exec(a) || ["", ""])[1].toLowerCase()]) {
          a = a.replace(bb, "<$1></$2>");

          try {
            for (; d > c; c++) {
              b = this[c] || {}, 1 === b.nodeType && (n.cleanData(pb(b, !1)), b.innerHTML = a);
            }

            b = 0;
          } catch (e) {}
        }

        b && this.empty().append(a);
      }, null, a, arguments.length);
    },
    replaceWith: function replaceWith() {
      var a = arguments[0];
      return this.domManip(arguments, function (b) {
        a = this.parentNode, n.cleanData(pb(this)), a && a.replaceChild(b, this);
      }), a && (a.length || a.nodeType) ? this : this.remove();
    },
    detach: function detach(a) {
      return this.remove(a, !0);
    },
    domManip: function domManip(a, b) {
      a = e.apply([], a);
      var c,
          d,
          f,
          g,
          h,
          i,
          j = 0,
          l = this.length,
          m = this,
          o = l - 1,
          p = a[0],
          q = n.isFunction(p);
      if (q || l > 1 && "string" == typeof p && !k.checkClone && fb.test(p)) return this.each(function (c) {
        var d = m.eq(c);
        q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
      });

      if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
        for (f = n.map(pb(c, "script"), lb), g = f.length; l > j; j++) {
          h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, pb(h, "script"))), b.call(this[j], h, j);
        }

        if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, mb), j = 0; g > j; j++) {
          h = f[j], gb.test(h.type || "") && !O.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ib, "")));
        }
      }

      return this;
    }
  }), n.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (a, b) {
    n.fn[a] = function (a) {
      for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
        c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
      }

      return this.pushStack(d);
    };
  }), n.fn.delay = function (a, b) {
    return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
      var d = setTimeout(b, a);

      c.stop = function () {
        clearTimeout(d);
      };
    });
  }, function () {
    var a = l.createElement("input"),
        b = l.createElement("select"),
        c = b.appendChild(l.createElement("option"));
    a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
  }();
  var rb,
      sb,
      tb = n.expr.attrHandle;
  n.fn.extend({
    attr: function attr(a, b) {
      return M(this, n.attr, a, b, arguments.length > 1);
    },
    removeAttr: function removeAttr(a) {
      return this.each(function () {
        n.removeAttr(this, a);
      });
    }
  }), n.extend({
    attr: function attr(a, b, c) {
      var d,
          e,
          f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === V ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? sb : rb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
    },
    removeAttr: function removeAttr(a, b) {
      var c,
          d,
          e = 0,
          f = b && b.match(H);
      if (f && 1 === a.nodeType) while (c = f[e++]) {
        d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
      }
    },
    attrHooks: {
      type: {
        set: function set(a, b) {
          if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b;
          }
        }
      }
    }
  }), sb = {
    set: function set(a, b, c) {
      return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
    }
  }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
    var c = tb[b] || n.find.attr;

    tb[b] = function (a, b, d) {
      var e, f;
      return d || (f = tb[b], tb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, tb[b] = f), e;
    };
  });
  var ub = /^(?:input|select|textarea|button)$/i;
  n.fn.extend({
    prop: function prop(a, b) {
      return M(this, n.prop, a, b, arguments.length > 1);
    },
    removeProp: function removeProp(a) {
      return this.each(function () {
        delete this[n.propFix[a] || a];
      });
    }
  }), n.extend({
    propFix: {
      "for": "htmlFor",
      "class": "className"
    },
    prop: function prop(a, b, c) {
      var d,
          e,
          f,
          g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
    },
    propHooks: {
      tabIndex: {
        get: function get(a) {
          return a.hasAttribute("tabindex") || ub.test(a.nodeName) || a.href ? a.tabIndex : -1;
        }
      }
    }
  }), k.optSelected || (n.propHooks.selected = {
    get: function get(a) {
      var b = a.parentNode;
      return b && b.parentNode && b.parentNode.selectedIndex, null;
    }
  }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    n.propFix[this.toLowerCase()] = this;
  });
  var vb = /[\t\r\n\f]/g;
  n.fn.extend({
    addClass: function addClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = "string" == typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).addClass(a.call(this, b, this.className));
      });
      if (h) for (b = (a || "").match(H) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : " ")) {
          f = 0;

          while (e = b[f++]) {
            d.indexOf(" " + e + " ") < 0 && (d += e + " ");
          }

          g = n.trim(d), c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    removeClass: function removeClass(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = 0 === arguments.length || "string" == typeof a && a,
          i = 0,
          j = this.length;
      if (n.isFunction(a)) return this.each(function (b) {
        n(this).removeClass(a.call(this, b, this.className));
      });
      if (h) for (b = (a || "").match(H) || []; j > i; i++) {
        if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(vb, " ") : "")) {
          f = 0;

          while (e = b[f++]) {
            while (d.indexOf(" " + e + " ") >= 0) {
              d = d.replace(" " + e + " ", " ");
            }
          }

          g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
        }
      }
      return this;
    },
    toggleClass: function toggleClass(a, b) {
      var c = _typeof(a);

      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
        n(this).toggleClass(a.call(this, c, this.className, b), b);
      } : function () {
        if ("string" === c) {
          var b,
              d = 0,
              e = n(this),
              f = a.match(H) || [];

          while (b = f[d++]) {
            e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
          }
        } else (c === V || "boolean" === c) && (this.className && O.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : O.get(this, "__className__") || "");
      });
    },
    hasClass: function hasClass(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(vb, " ").indexOf(b) >= 0) return !0;
      }

      return !1;
    }
  });
  var wb = /\r/g;
  n.fn.extend({
    val: function val(a) {
      var b,
          c,
          d,
          e = this[0];
      {
        if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
          var e;
          1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
            return null == a ? "" : a + "";
          })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
        });
        if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(wb, "") : null == c ? "" : c);
      }
    }
  }), n.extend({
    valHooks: {
      option: {
        get: function get(a) {
          var b = n.find.attr(a, "value");
          return null != b ? b : n.trim(n.text(a));
        }
      },
      select: {
        get: function get(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
            if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
              if (b = n(c).val(), f) return b;
              g.push(b);
            }
          }

          return g;
        },
        set: function set(a, b) {
          var c,
              d,
              e = a.options,
              f = n.makeArray(b),
              g = e.length;

          while (g--) {
            d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
          }

          return c || (a.selectedIndex = -1), f;
        }
      }
    }
  }), n.each(["radio", "checkbox"], function () {
    n.valHooks[this] = {
      set: function set(a, b) {
        return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
      }
    }, k.checkOn || (n.valHooks[this].get = function (a) {
      return null === a.getAttribute("value") ? "on" : a.value;
    });
  }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
    n.fn[b] = function (a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
    };
  }), n.fn.extend({
    hover: function hover(a, b) {
      return this.mouseenter(a).mouseleave(b || a);
    },
    bind: function bind(a, b, c) {
      return this.on(a, null, b, c);
    },
    unbind: function unbind(a, b) {
      return this.off(a, null, b);
    },
    delegate: function delegate(a, b, c, d) {
      return this.on(b, a, c, d);
    },
    undelegate: function undelegate(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
    }
  });
  var xb = n.now(),
      yb = /\?/;
  n.parseJSON = function (a) {
    return JSON.parse(a + "");
  }, n.parseXML = function (a) {
    var b, c;
    if (!a || "string" != typeof a) return null;

    try {
      c = new DOMParser(), b = c.parseFromString(a, "text/xml");
    } catch (d) {
      b = void 0;
    }

    return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
  };
  var zb,
      Ab,
      Bb = /#.*$/,
      Cb = /([?&])_=[^&]*/,
      Db = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      Eb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Fb = /^(?:GET|HEAD)$/,
      Gb = /^\/\//,
      Hb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      Ib = {},
      Jb = {},
      Kb = "*/".concat("*");

  try {
    Ab = location.href;
  } catch (Lb) {
    Ab = l.createElement("a"), Ab.href = "", Ab = Ab.href;
  }

  zb = Hb.exec(Ab.toLowerCase()) || [];

  function Mb(a) {
    return function (b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d,
          e = 0,
          f = b.toLowerCase().match(H) || [];
      if (n.isFunction(c)) while (d = f[e++]) {
        "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
      }
    };
  }

  function Nb(a, b, c, d) {
    var e = {},
        f = a === Jb;

    function g(h) {
      var i;
      return e[h] = !0, n.each(a[h] || [], function (a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
      }), i;
    }

    return g(b.dataTypes[0]) || !e["*"] && g("*");
  }

  function Ob(a, b) {
    var c,
        d,
        e = n.ajaxSettings.flatOptions || {};

    for (c in b) {
      void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
    }

    return d && n.extend(!0, a, d), a;
  }

  function Pb(a, b, c) {
    var d,
        e,
        f,
        g,
        h = a.contents,
        i = a.dataTypes;

    while ("*" === i[0]) {
      i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
    }

    if (d) for (e in h) {
      if (h[e] && h[e].test(d)) {
        i.unshift(e);
        break;
      }
    }
    if (i[0] in c) f = i[0];else {
      for (e in c) {
        if (!i[0] || a.converters[e + " " + i[0]]) {
          f = e;
          break;
        }

        g || (g = e);
      }

      f = f || g;
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
  }

  function Qb(a, b, c, d) {
    var e,
        f,
        g,
        h,
        i,
        j = {},
        k = a.dataTypes.slice();
    if (k[1]) for (g in a.converters) {
      j[g.toLowerCase()] = a.converters[g];
    }
    f = k.shift();

    while (f) {
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
        if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break;
          }
        }
        if (g !== !0) if (g && a["throws"]) b = g(b);else try {
          b = g(b);
        } catch (l) {
          return {
            state: "parsererror",
            error: g ? l : "No conversion from " + i + " to " + f
          };
        }
      }
    }

    return {
      state: "success",
      data: b
    };
  }

  n.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ab,
      type: "GET",
      isLocal: Eb.test(zb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Kb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": n.parseJSON,
        "text xml": n.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function ajaxSetup(a, b) {
      return b ? Ob(Ob(a, n.ajaxSettings), b) : Ob(n.ajaxSettings, a);
    },
    ajaxPrefilter: Mb(Ib),
    ajaxTransport: Mb(Jb),
    ajax: function ajax(a, b) {
      "object" == _typeof(a) && (b = a, a = void 0), b = b || {};
      var c,
          d,
          e,
          f,
          g,
          h,
          i,
          j,
          k = n.ajaxSetup({}, b),
          l = k.context || k,
          m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
          o = n.Deferred(),
          p = n.Callbacks("once memory"),
          q = k.statusCode || {},
          r = {},
          s = {},
          t = 0,
          u = "canceled",
          v = {
        readyState: 0,
        getResponseHeader: function getResponseHeader(a) {
          var b;

          if (2 === t) {
            if (!f) {
              f = {};

              while (b = Db.exec(e)) {
                f[b[1].toLowerCase()] = b[2];
              }
            }

            b = f[a.toLowerCase()];
          }

          return null == b ? null : b;
        },
        getAllResponseHeaders: function getAllResponseHeaders() {
          return 2 === t ? e : null;
        },
        setRequestHeader: function setRequestHeader(a, b) {
          var c = a.toLowerCase();
          return t || (a = s[c] = s[c] || a, r[a] = b), this;
        },
        overrideMimeType: function overrideMimeType(a) {
          return t || (k.mimeType = a), this;
        },
        statusCode: function statusCode(a) {
          var b;
          if (a) if (2 > t) for (b in a) {
            q[b] = [q[b], a[b]];
          } else v.always(a[v.status]);
          return this;
        },
        abort: function abort(a) {
          var b = a || u;
          return c && c.abort(b), x(0, b), this;
        }
      };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || Ab) + "").replace(Bb, "").replace(Gb, zb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(H) || [""], null == k.crossDomain && (h = Hb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === zb[1] && h[2] === zb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (zb[3] || ("http:" === zb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), Nb(Ib, k, b, v), 2 === t) return v;
      i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Fb.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (yb.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Cb.test(d) ? d.replace(Cb, "$1_=" + xb++) : d + (yb.test(d) ? "&" : "?") + "_=" + xb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Kb + "; q=0.01" : "") : k.accepts["*"]);

      for (j in k.headers) {
        v.setRequestHeader(j, k.headers[j]);
      }

      if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
      u = "abort";

      for (j in {
        success: 1,
        error: 1,
        complete: 1
      }) {
        v[j](k[j]);
      }

      if (c = Nb(Jb, k, b, v)) {
        v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
          v.abort("timeout");
        }, k.timeout));

        try {
          t = 1, c.send(r, x);
        } catch (w) {
          if (!(2 > t)) throw w;
          x(-1, w);
        }
      } else x(-1, "No Transport");

      function x(a, b, f, h) {
        var j,
            r,
            s,
            u,
            w,
            x = b;
        2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = Pb(k, v, f)), u = Qb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
      }

      return v;
    },
    getJSON: function getJSON(a, b, c) {
      return n.get(a, b, c, "json");
    },
    getScript: function getScript(a, b) {
      return n.get(a, void 0, b, "script");
    }
  }), n.each(["get", "post"], function (a, b) {
    n[b] = function (a, c, d, e) {
      return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      });
    };
  }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
    n.fn[b] = function (a) {
      return this.on(b, a);
    };
  }), n._evalUrl = function (a) {
    return n.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      "throws": !0
    });
  };
  var Rb = /%20/g,
      Sb = /\[\]$/,
      Tb = /\r?\n/g,
      Ub = /^(?:submit|button|image|reset|file)$/i,
      Vb = /^(?:input|select|textarea|keygen)/i;

  function Wb(a, b, c, d) {
    var e;
    if (n.isArray(b)) n.each(b, function (b, e) {
      c || Sb.test(a) ? d(a, e) : Wb(a + "[" + ("object" == _typeof(e) ? b : "") + "]", e, c, d);
    });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
      Wb(a + "[" + e + "]", b[e], c, d);
    }
  }

  n.param = function (a, b) {
    var c,
        d = [],
        e = function e(a, b) {
      b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
    };

    if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
      e(this.name, this.value);
    });else for (c in a) {
      Wb(c, a[c], b, e);
    }
    return d.join("&").replace(Rb, "+");
  }, n.fn.extend({
    serialize: function serialize() {
      return n.param(this.serializeArray());
    },
    serializeArray: function serializeArray() {
      return this.map(function () {
        var a = n.prop(this, "elements");
        return a ? n.makeArray(a) : this;
      }).filter(function () {
        var a = this.type;
        return this.name && !n(this).is(":disabled") && Vb.test(this.nodeName) && !Ub.test(a) && (this.checked || !U.test(a));
      }).map(function (a, b) {
        var c = n(this).val();
        return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
          return {
            name: b.name,
            value: a.replace(Tb, "\r\n")
          };
        }) : {
          name: b.name,
          value: c.replace(Tb, "\r\n")
        };
      }).get();
    }
  }), n.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (a) {}
  };
  var Xb = 0,
      Yb = {},
      Zb = {
    0: 200,
    1223: 204
  },
      $b = n.ajaxSettings.xhr();
  a.ActiveXObject && n(a).on("unload", function () {
    for (var a in Yb) {
      Yb[a]();
    }
  }), k.cors = !!$b && "withCredentials" in $b, k.ajax = $b = !!$b, n.ajaxTransport(function (a) {
    var _b3;

    return k.cors || $b && !a.crossDomain ? {
      send: function send(c, d) {
        var e,
            f = a.xhr(),
            g = ++Xb;
        if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
          f[e] = a.xhrFields[e];
        }
        a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");

        for (e in c) {
          f.setRequestHeader(e, c[e]);
        }

        _b3 = function b(a) {
          return function () {
            _b3 && (delete Yb[g], _b3 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Zb[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
              text: f.responseText
            } : void 0, f.getAllResponseHeaders()));
          };
        }, f.onload = _b3(), f.onerror = _b3("error"), _b3 = Yb[g] = _b3("abort");

        try {
          f.send(a.hasContent && a.data || null);
        } catch (h) {
          if (_b3) throw h;
        }
      },
      abort: function abort() {
        _b3 && _b3();
      }
    } : void 0;
  }), n.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function textScript(a) {
        return n.globalEval(a), a;
      }
    }
  }), n.ajaxPrefilter("script", function (a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
  }), n.ajaxTransport("script", function (a) {
    if (a.crossDomain) {
      var b, _c;

      return {
        send: function send(d, e) {
          b = n("<script>").prop({
            async: !0,
            charset: a.scriptCharset,
            src: a.url
          }).on("load error", _c = function c(a) {
            b.remove(), _c = null, a && e("error" === a.type ? 404 : 200, a.type);
          }), l.head.appendChild(b[0]);
        },
        abort: function abort() {
          _c && _c();
        }
      };
    }
  });
  var _b = [],
      ac = /(=)\?(?=&|$)|\?\?/;
  n.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function jsonpCallback() {
      var a = _b.pop() || n.expando + "_" + xb++;
      return this[a] = !0, a;
    }
  }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
    var e,
        f,
        g,
        h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (yb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
      return g || n.error(e + " was not called"), g[0];
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
      g = arguments;
    }, d.always(function () {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
    }), "script") : void 0;
  }), n.parseHTML = function (a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || l;
    var d = y.exec(a),
        e = !c && [];
    return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
  };
  var bc = n.fn.load;
  n.fn.load = function (a, b, c) {
    if ("string" != typeof a && bc) return bc.apply(this, arguments);
    var d,
        e,
        f,
        g = this,
        h = a.indexOf(" ");
    return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == _typeof(b) && (e = "POST"), g.length > 0 && n.ajax({
      url: a,
      type: e,
      dataType: "html",
      data: b
    }).done(function (a) {
      f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
    }).complete(c && function (a, b) {
      g.each(c, f || [a.responseText, b, a]);
    }), this;
  },  true && !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return n;
  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  var cc = a.jQuery,
      dc = a.$;
  return n.noConflict = function (b) {
    return a.$ === n && (a.$ = dc), b && a.jQuery === n && (a.jQuery = cc), n;
  }, _typeof(b) === V && (a.jQuery = a.$ = n), n;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./webpack/generic/cookies.js":
/*!************************************!*\
  !*** ./webpack/generic/cookies.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Cookies
 *
 * JS Library to deal with Cookies
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-24
 */
var Cookies = {
  /**
   * Get
   *
   * Gets a cookie or returns the default. Set no name to get all
   *
   * @name get
   * @access public
   * @param str name				The name of the cookie to fetch
   * @param str default_			The default value to return if no cookie is found
   * @return str|null
   */
  get: function get(name, default_) {
    // Set the default if no value is passed
    if (typeof default_ == 'undefined') {
      default_ = null;
    } // Parse all cookies


    var oCookies = {};
    var lCookies = document.cookie.split(';');

    for (var i = 0; i < lCookies.length; ++i) {
      l = lCookies[i].split('=');
      oCookies[l[0]] = decodeURIComponent(l[1]);
    } // If there's no name, return all


    if (typeof name == 'undefined') {
      return oCookies;
    } // If the cookie exists return it, else return the default


    return name in oCookies ? oCookies[name] : default_;
  },

  /**
   * Remove
   *
   * Deletes a cookie
   *
   * @name remove
   * @access public
   * @param str name				The name of the cookie to delete
   * @return void
   */
  "remove": function remove(name, domain, path) {
    this.set(name, '', -1, domain, path);
  },

  /**
   * Set
   *
   * Sets a cookie
   *
   * @name set
   * @access public
   * @param str name				The name of the cookie
   * @param str value				The value to store
   * @param int expires			The number of seconds before the cookie expires
   * @param str domain			The optional domain to set the cookie on
   * @param str path				The optional path of the cookie
   * @return null
   */
  set: function set(name, value, expires, domain, path) {
    // Generate the expires time
    var d = new Date();
    d.setTime(d.getTime() + expires * 1000); // Generate the cookie string

    var s = name + '=' + encodeURIComponent(value) + '; expires=' + d.toGMTString() + ';';

    if (domain) {
      s += ' domain=' + domain + ';';
    }

    if (path) {
      s += ' path=' + path + ';';
    } // Set the cookie


    document.cookie = s;
  } // Export the module

};
module.exports = Cookies;

/***/ }),

/***/ "./webpack/generic/events.js":
/*!***********************************!*\
  !*** ./webpack/generic/events.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Events
 *
 * Event model for non UI events
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-24
 */
// Init the callbacks object
var _callbacks = {};
/**
 * Add
 *
 * Adds a callback to an event
 *
 * @name add
 * @access public
 * @param str event				The name of the event
 * @param function callback		The callback to attach to the event
 * @return bool
 */

function add(event, callback) {
  // If the event doesn't exist yet
  if (!(event in _callbacks)) {
    _callbacks[event] = [];
  } // Add the callback to the list


  _callbacks[event].push(callback);

  return true;
}
/**
 * Remove
 *
 * Removes a callback from a specific event
 *
 * @name remove
 * @access public
 * @param str event				The name of the event to remove the callback from
 * @param function callback		The exact same callback that was added to the event
 * @return
 */


function remove(event, callback) {
  // If the name exists in the object
  if (event in _callbacks) {
    // If the callback exists in the list
    var i = _callbacks[event].indexOf(callback);

    if (i != -1) {
      _callbacks[event].splice(i, 1);

      return true;
    }
  } // Nothing found, return false


  return false;
}
/**
 * Trigger
 *
 * Triggers a specific event and calls all callbacks associated
 *
 * @name trigger
 * @access public
 * @param str event				The name of the event to trigger
 * @return void
 */


function trigger(event) {
  // If we have callbacks for the event
  if (event in _callbacks) {
    // Check for additional arguments that will be passed to the
    //	callbacks
    var args = [];

    if (arguments.length > 1) {
      args = Array.apply(null, arguments).slice(1);
    } // If there's any callbacks, call them one by one


    for (var i in _callbacks[event]) {
      try {
        var b = _callbacks[event][i].apply(null, args);
      } catch (err) {
        console.error(event + ' callback ' + i + ' threw exception: ' + err);
        break;
      } // If we got false back, stop calling the callbacks


      if (b === false) {
        break;
      }
    }
  } // No callbacks asscocited with the event
  else {
      console.error('event value "' + event + '" returned, and no callbacks were found to handle it');
    }
} // Export the functions


module.exports = {
  "add": add,
  "remove": remove,
  "trigger": trigger
};

/***/ }),

/***/ "./webpack/generic/hash.js":
/*!*********************************!*\
  !*** ./webpack/generic/hash.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Hash
 *
 * JS Library to manage hash values
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-12-09
 */
// Generic modules
var Tools = __webpack_require__(/*! ./tools.js */ "./webpack/generic/tools.js"); // Values


var _hash = {}; // name regex

var _nameRE = /^[a-z]+$/; // Callbacks

var _watches = {};
/**
 * Check Watches
 *
 * Gets old values and compares them to existing values, if anyone is watching
 * any names that are changed, they are notified
 *
 * @name _checkWatches
 * @param object old			The old values to check again
 * @return void
 */

function _checkWatches(old) {
  // If there are watches
  if (!Tools.empty(_watches)) {
    // Check each watch
    for (var name in _watches) {
      // If the value didn't exist and now it does, or it did exist
      //	and now it doesn't, or the values don't match
      if (!(name in old) && name in _hash || name in old && !(name in _hash) || old[name] != _hash[name]) {
        // Go through each callback and call it
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _watches[name][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var f = _step.value;
            f(_hash[name] || null);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }
}
/**
 * Hash Changed
 *
 * Called when the location hash has been altered, notifies any watchers of
 * hash values changing
 *
 * @name _hashChanged
 * @return void
 */


function _hashChanged() {
  // Store the current hash
  var old = Tools.clone(_hash); // Re-parse the current location hash

  _parseHash(); // Check the watches


  _checkWatches(old);
}
/**
 * Parse Hash
 *
 * Parses the current location hash into an object
 *
 * @name _parseHash
 * @return void
 */


function _parseHash() {
  // If there's anything in the hash
  if (window.location.hash.length > 1) {
    var regex = /([^=&]+)=?([^&]*)/g;
    var field = null; // Go through each part found

    while (field = regex.exec(window.location.hash.substring(1))) {
      _hash[field[1]] = decodeURIComponent(field[2]).replace('+', ' ');
    }
  }
} // Export the module


var Hash = {
  /**
   * Init
   *
   * Initialises the internal hash by fetching and parsing the current
   * location hash
   *
   * @name init
   * @access public
   * @static
   * @return void
   */
  "init": function init() {
    // Track changes
    window.addEventListener("hashchange", _hashChanged); // Parse the current location hash

    _parseHash();
  },

  /**
   * Get
   *
   * Returns a hash name
   *
   * @name get
   * @access public
   * @static
   * @param string name		The name to look for
   * @param string default_	The value to return if the name isn't found
   * @return str
   */
  "get": function get(name, default_) {
    // If the name is invalid
    if (!_nameRE.test(name)) {
      throw 'Invalid Hash name';
    } // If there is a value for the name


    if (typeof _hash[name] != 'undefined') {
      return _hash[name];
    } // Else, return the default
    else {
        return default_;
      }
  },

  /**
   * Set
   *
   * Sets a specific name
   *
   * @name set
   * @access public
   * @static
   * @param str|object name	The name to set, or an object of name/value pairs
   * @param str value			The value to set the name to
   */
  "set": function set(name, value) {
    // If the name is not an object
    if (!Tools.isObject(name)) {
      // If the value is not defined
      if (typeof value == 'undefined') {
        value = null;
      } // JavaScript is dumb and thinks {name: value} is the same as
      //	{"name": value}


      var temp = name;
      name = {};
      name[temp] = value;
    } // Store the old hash


    var old = Tools.clone(_hash); // Go through each name

    for (var n in name) {
      // If the name is invalid
      if (!_nameRE.test(n)) {
        throw 'Invalid Hash name: ' + n;
      } // If we got null, delete the name


      if (name[n] == null) {
        delete _hash[n];
      } // Else, set the new value
      else {
          _hash[n] = name[n];
        }
    } // Check anyone watching this value


    _checkWatches(old); // Init an array to store the parts


    var hash = []; // Go through each name

    for (var k in _hash) {
      hash.push(k + '=' + encodeURIComponent(_hash[k]));
    } // Reset the window location hash


    window.location.hash = hash.join('&');
  },

  /**
   * Unwatch
   *
   * Removes a callback from the watches
   *
   * @name unwatch
   * @access public
   * @static
   * @param string name			The name of the value to stop watching
   * @param function callback		The callback to remove
   * @return void
   */
  "unwatch": function unwatch(name, callback) {
    // If we have the name
    if (name in _watches) {
      // Go through the callbacks associated with the name
      for (var i = 0; i < _watches[name].length; ++i) {
        // If we find the callback
        if (_watches[name][i] == callback) {
          // Remove it
          _watches[name].splice(i, 1);

          return;
        }
      }
    }
  },

  /**
   * Watch
   *
   * Adds a callback for a specific name which will be called if the name is
   * added, deleted, or changed
   *
   * @name watch
   * @access public
   * @static
   * @param string name			The name of the value to watch
   * @param function callback		The function to call when the value changes
   * @return void
   */
  "watch": function watch(name, callback) {
    // If we already have the name
    if (name in _watches) {
      // Go through the callbacks associated with the name
      for (var i = 0; i < _watches[name].length; ++i) {
        // If we already have the callback there's no need to store it
        if (_watches[name][i] == callback) {
          return;
        }
      }
    } // Else if we don't have any callbacks for the name
    else {
        _watches[name] = [];
      } // Add the callback to the watches


    _watches[name].push(callback);
  } // Export the module

};
module.exports = Hash;

/***/ }),

/***/ "./webpack/generic/loader.js":
/*!***********************************!*\
  !*** ./webpack/generic/loader.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Loader
 *
 * Shows a loading graphic during requests/startup
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-24
 */
// Keep track of the show/hide calls
//	assume the loader started on
var _count = 1; // Get the DOM element

var _el = document.getElementById('loader'); // Export the module


module.exports = {
  // Hide the loader
  hide: function hide() {
    // Decrement the count
    _count--; // If this is the last one

    if (_count == 0) {
      _el.style.display = 'none';
    }
  },
  // Show the loader
  show: function show() {
    // Increment the count
    _count++; // If this is the first one

    if (_count == 1) {
      _el.style.display = 'block';
    }
  }
};

/***/ }),

/***/ "./webpack/generic/services.js":
/*!*************************************!*\
  !*** ./webpack/generic/services.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Services
 *
 * Handles connecting to and retrieving data from services
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-24
 */
// External modules
var $ = __webpack_require__(/*! ../3rd/jquery.ajax.js */ "./webpack/3rd/jquery.ajax.js"); // Generic modules


var Cookies = __webpack_require__(/*! ../generic/cookies.js */ "./webpack/generic/cookies.js"); // Services domain


var _domain = ''; // Default error function

var _error = function _error() {};
/**
 * Clear
 *
 * Clears the session from local storage and cookies
 *
 * @name _clear
 * access private
 * @return void
 */


function _clear() {
  // Delete from localStorage
  delete localStorage['_session']; // Delete the cookie

  Cookies.remove('_session', '.' + window.location.hostname, '/');
}
/**
 * Request
 *
 * Handles actual requests
 *
 * @name request
 * @access private
 * @param string method			The method used to send the request
 * @param string url			The full URL to the service/noun
 * @param object data			The data to send to the service
 * @param string auth			Optional Authorization token
 * @return xhr
 */


function _request(method, url, data) {
  // Generate the ajax config
  var oConfig = {
    "beforeSend": function beforeSend(xhr, settings) {
      xhr._url = url; // If we have a session

      if ('_session' in localStorage) {
        xhr.setRequestHeader('Authorization', localStorage['_session']);
      }
    },
    "contentType": "application/json; charset=utf-8",
    "error": function error(xhr, status, _error2) {
      // If we got an Authorization error
      if (xhr.status == 401) {
        // Clear the current token
        _clear();
      } // Put the error in the console


      console.error(method + ' ' + xhr._url + ' returned: ' + _error2); // Return the xhr to the error callback

      _error(xhr);
    },
    "method": method,
    "url": url // If it's a get request

  };

  if (method == 'get') {
    if (typeof data !== 'undefined') {
      oConfig['data'] = "d=" + encodeURIComponent(JSON.stringify(data));
    }
  } // Else it's any other method
  else {
      oConfig.data = JSON.stringify(data);
    } // Make the request and return the xhr


  return $.ajax(oConfig);
}
/**
 * Store
 *
 * Stores the session token in local storage and cookies
 *
 * @name _store
 * @access private
 * @param string token
 * @return void
 */


function _store(token) {
  // Set the session in localStorage
  localStorage['_session'] = token; // Set the session in a cookie

  Cookies.set('_session', token, 86400, '.' + window.location.hostname, '/');
}
/**
 * Success
 *
 * Handles success from xhr
 *
 * @name _success
 * @access private
 * @param string res			The result from the server
 * @param string status			The status of the request
 * @param xhr xhr				The request object
 * @return void
 */


function _success(res, status, xhr) {
  // If the result is a string
  if (typeof res == 'string') {
    // Try to conver it to JSON
    try {
      res = JSON.parse(res);
    } catch (err) {
      console.error(method + ' ' + xhr._url + ' returned invalid JSON: ' + err);
      res = {
        "error": {
          "code": 0,
          "msg": err
        }
      };
    }
  }
}
/**
 * Services
 */


var Services = {
  /**
   * Init
   *
   * Initialises the Services modules
   *
   * @name init
   * @access public
   * @param string subdomain		The sub-domain services can be reached through
   * @return void
   */
  "init": function init(subdomain, error) {
    // Store the full domain name for service calls
    _domain = '//' + subdomain + '.' + window.location.hostname + '/'; // Do we have a session in storage

    if ('_session' in localStorage && localStorage['_session']) {
      this.session(localStorage['_session']);
    } // Else do we have one in a cookie
    else {
        var cookie = Cookies.get('_session');

        if (cookie) {
          this.session(cookie);
        }
      } // If an error was passed


    if (typeof error !== 'undefined') {
      _error = error;
    }
  },

  /**
   * Create
   *
   * Calls the create action on a specific service noune
   *
   * @name create
   * @access public
   * @param string service		The name of the service to call
   * @param string noun			The noun to call on the service
   * @param object data			The data to send to the service
   * @return xhr
   */
  "create": function create(service, noun, data) {
    return _request('post', _domain + service + '/' + noun, data);
  },

  /**
   * Delete
   *
   * Calls the delete action on a specific service noune
   *
   * @name delete
   * @access public
   * @param string service		The name of the service to call
   * @param string noun			The noun to call on the service
   * @param object data			The data to send to the service
   * @return xhr
   */
  "delete": function _delete(service, noun, data) {
    return _request('delete', _domain + service + '/' + noun, data);
  },

  /**
   * Read
   *
   * Calls the read action on a specific service noune
   *
   * @name read
   * @access public
   * @param string service		The name of the service to call
   * @param string noun			The noun to call on the service
   * @param object data			The data to send to the service
   * @return xhr
   */
  "read": function read(service, noun, data) {
    return _request('get', _domain + service + '/' + noun, data);
  },

  /**
   * Session
   *
   * Set or get the session token
   *
   * @name session
   * @access public
   * @param string token			The token to store
   * @return void|str
   */
  "session": function session(token) {
    // If we are setting the session
    if (typeof token !== 'undefined') {
      // If null was passed, delete the session
      if (token == null) {
        _clear();
      } // Else, set the session
      else {
          _store(token);
        }
    } // Else we are returning the session
    else {
        return '_session' in localStorage ? localStorage['_session'] : '';
      }
  },

  /**
   * Update
   *
   * Calls the update action on a specific service noune
   *
   * @name update
   * @access public
   * @param string service		The name of the service to call
   * @param string noun			The noun to call on the service
   * @param object data			The data to send to the service
   * @return xhr
   */
  "update": function update(service, noun, data) {
    return _request('put', _domain + service + '/' + noun, data);
  }
}; // Export the module

module.exports = Services;

/***/ }),

/***/ "./webpack/generic/tools.js":
/*!**********************************!*\
  !*** ./webpack/generic/tools.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Tools
 *
 * Useful functions that belong to any specific module
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-25
 */

/**
 * Tools
 */
var Tools = {
  /**
   * Clone
   *
   * Deep clone any type of object, returning a new one
   *
   * @name clone
   * @param mixed o				The variable to clone
   * @return mixed
   */
  clone: function clone(o) {
    // New var
    var n = null; // If it's an array

    if (Array.isArray()) {
      n = [];

      for (var i in o) {
        n.push(Tools.clone(o[k]));
      }
    } // Else if the value is an object
    else if (Tools.isObject(o)) {
        n = {};

        for (var k in o) {
          n[k] = Tools.clone(o[k]);
        }
      } // Else, copy as is
      else {
          n = o;
        } // Return the new var


    return n;
  },

  /**
   * Compare
   *
   * Compares two values of any type to see if they contain the same
   * data or not
   *
   * @name compare
   * @access public
   * @param mixed v1				The first value
   * @param mixed v2				The second value
   * @return bool
   */
  compare: function compare(v1, v2) {
    // If they're both arrays
    if (Array.isArray(v1) && Array.isArray(v2)) {
      // If they don't have the same length
      if (v1.length != v2.length) {
        return false;
      } // Compare the values


      for (var i = 0; i < v1.length; ++i) {
        if (!Tools.compare(v1[i], v2[i])) {
          return false;
        }
      }
    } // Else if they're both objects
    else if (Tools.isObject(v1) && Tools.isObject(v2)) {
        // If they don't have the same keys
        if (!Tools.compare(Object.keys(v1).sort(), Object.keys(v2).sort())) {
          return false;
        } // Compare each key


        for (var k in v1) {
          if (!Tools.compare(v1[k], v2[k])) {
            return false;
          }
        }
      } // Else, compare as is
      else {
          if (v1 !== v2) {
            return false;
          }
        } // Return equal


    return true;
  },

  /**
   * Empty
   *
   * Returns true if the value type is empty
   *
   * @name empty
   * @access public
   * @param mixed m				The value to check, can be object, array, string, etc
   * @return bool
   */
  empty: function empty(m) {
    // If it's an object
    if (Tools.isObject(m)) {
      for (var p in m) {
        return false;
      }

      return true;
    } // Else if it's an array or a string
    else if (Array.isArray(m) || typeof m == 'string') {
        return m.length > 0 ? true : false;
      } // Else
      else {
          // If it's null or undefined
          if (typeof m == 'undefined' || m == null) {
            return true;
          } // Else return false


          return false;
        }
  },

  /**
   * Is Decimal
   *
   * Returns true if the variable is a number
   *
   * @name isDecimal
   * @access public
   * @param mixed m				The variable to test
   * @return bool
   */
  isDecimal: function isDecimal(m) {
    return typeof m == 'number';
  },

  /**
   * Is Integer
   *
   * Returns true if the variable is a true integer
   *
   * @name isInteger
   * @access public
   * @param mixed m				The variable to test
   * @return bool
   */
  isInteger: function isInteger(m) {
    return m === +m && m === (m | 0);
  },

  /**
   * Is Object
   *
   * Returns true if the variable is a true object
   *
   * @name isObject
   * @access public
   * @param mixed m				The variable to test
   * @return bool
   */
  isObject: function isObject(m) {
    if (m === null) return false;
    if (_typeof(m) != 'object') return false;
    if (Array.isArray(m)) return false;
    return true;
  },

  /**
   * Object Map
   *
   * Works like map for arrays, but iterates over an object
   *
   * @name omap
   * @param {object} o			The object to map
   * @param {Function} callback	The function to call each iteration
   * @return array
   */
  omap: function omap(o, callback) {
    var ret = [];

    for (var k in o) {
      ret.push(callback(o[k], k));
    }

    return ret;
  },

  /**
   * UUID v4
   *
   * Returns a psuedo random string in UUID format (NOT ACTUALLY A UUID)
   *
   * @name uuidv4
   * @return str
   */
  uuidv4: function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
      return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
  } // Export the module

};
module.exports = Tools;

/***/ }),

/***/ "./webpack/generic/websocket.js":
/*!**************************************!*\
  !*** ./webpack/generic/websocket.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Websocket
 *
 * Simplifies using a websocket
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2017-05-17
 */
// Export the function
module.exports = function (url, conf) {
  // If we can't handle websockets
  if (!('WebSocket' in window)) {
    console.error('websocket: WebSockets not supported');
    return false;
  } // If conf is not defined


  if (typeof conf == 'undefined') {
    conf = {};
  } // Else, if it's not an object, we have a problem
  else if (_typeof(conf) != 'object') {
      console.error('websocket: second argument must be an object');
      return false;
    } // Create the WebSocket


  var oSock = new WebSocket(url); // Add the URL to the instance

  oSock.url = url; // Set the open callback

  oSock.onopen = function () {
    // If an open callback is set
    if ('open' in conf) {
      conf['open'](oSock);
    } // Else, just log the event
    else {
        console.log('websocket: opened');
      }
  }; // Set the message callback


  oSock.onmessage = function (ev) {
    // If a message callback is set
    if ('message' in conf) {
      conf['message'](oSock, ev);
    } // Else, just log the event
    else {
        console.log('websocket: message received, "' + ev.data + '"');
      }
  }; // Set the error callback


  oSock.onerror = function (ev) {
    // If an error callback is set
    if ('error' in conf) {
      conf['error'](oSock, ev);
    } // Else, just log the event
    else {
        console.log('websocket: error, "' + JSON.stringify(ev) + '"');
      }
  }; // Set the close callback


  oSock.onclose = function () {
    // If a close callback is set
    if ('close' in conf) {
      conf['close'](oSock);
    } // Else, just log the event
    else {
        console.log('websocket: closed');
      }
  }; // Return the socket


  return oSock;
};

/***/ }),

/***/ "./webpack/index.js":
/*!**************************!*\
  !*** ./webpack/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Generic
var Events = __webpack_require__(/*! ./generic/events.js */ "./webpack/generic/events.js");

var Loader = __webpack_require__(/*! ./generic/loader.js */ "./webpack/generic/loader.js");

var Services = __webpack_require__(/*! ./generic/services.js */ "./webpack/generic/services.js"); // Site specific


var Requests = __webpack_require__(/*! ./requests.js */ "./webpack/requests.js"); // Components


var Site = __webpack_require__(/*! ./react/site.jsx */ "./webpack/react/site.jsx");

(function () {
  // Render the LoginComponent
  ReactDOM.render(React.createElement(Site, {}), document.getElementById('react')); // Init the requests

  Requests.init(); // Init the services

  Services.init("services", function (xhr) {
    // If we got a 401, let everyone know we signed out
    if (xhr.status == 401) {
      Events.trigger('signout');
    }
  }); // If we have a session, fetch the thrower

  if (Services.session()) {
    Loader.show();
    Services.read('auth', 'session', {}).done(function (res) {
      Events.trigger('signin', res.data);
    }).always(function () {
      Loader.hide();
    });
  } // Hide the loader


  Loader.hide(); // Make Events available from console

  window.Events = Events;
})(); // Export


module.exports = null;

/***/ }),

/***/ "./webpack/react/base/forms.jsx":
/*!**************************************!*\
  !*** ./webpack/react/base/forms.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Forms Module
 *
 * Classes and functions used by all forms
 *
 * @author Chris Nasr
 * @copyright FUEL for the FIRE
 * @create 2018-12-08
 */
// Error class define
var ERROR_CLASS = 'error';
/**
 * Add Class
 *
 * Adds the error class name to an element
 *
 * @name _addClass
 * @access private
 * @param Element el	The element to remove the class from
 */

function _addClass(el) {
  if (!el.className) {
    el.className = ERROR_CLASS;
  } else {
    var names = el.className.split(' ');

    if (names.indexOf(ERROR_CLASS) == -1) {
      names.push(ERROR_CLASS);
      el.className = names.join(' ');
    }
  }
}
/**
 * Remove Class
 *
 * Removes the error class name from an element
 *
 * @name _removeClass
 * @access private
 * @param Element el	The element to remove the class from
 * @return void
 */


function _removeClass(el) {
  if (el.className.includes(ERROR_CLASS)) {
    var names = el.className.split(' ');
    names.splice(names.indexOf(ERROR_CLASS), 1);
    el.className = names.join(' ');
  }
} // Create the Base Node Component


var _BaseNode =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(_BaseNode, _React$PureComponent);

  function _BaseNode(props) {
    _classCallCheck(this, _BaseNode);

    // Call the parent
    return _possibleConstructorReturn(this, _getPrototypeOf(_BaseNode).call(this, props));
  }

  _createClass(_BaseNode, [{
    key: "errors",
    value: function errors(_errors) {
      for (var k in _errors) {
        if (this.refs[k].errors) {
          this.refs[k].errors(_errors[k]);
        } else {
          _addClass(this.refs[k]);
        }
      }
    }
  }]);

  return _BaseNode;
}(React.PureComponent); // Create the Array Form Component


var ArrayNode =
/*#__PURE__*/
function (_BaseNode2) {
  _inherits(ArrayNode, _BaseNode2);

  function ArrayNode(props) {
    _classCallCheck(this, ArrayNode);

    // Call the parent
    return _possibleConstructorReturn(this, _getPrototypeOf(ArrayNode).call(this, props));
  }

  _createClass(ArrayNode, [{
    key: "value",
    get: function get() {
      // Init the return
      var value = []; // Go through all refs

      for (var r in this.refs) {
        if (this.refs[r].type && this.refs[r].type == 'checkbox') {
          value.push(this.refs[r].checked);
        } else {
          value.push(this.refs[r].value);
        }
      } // Return the values


      return value;
    }
  }]);

  return ArrayNode;
}(_BaseNode);

var Node =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(Node, _React$PureComponent2);

  function Node(props) {
    _classCallCheck(this, Node);

    // Call the parent
    return _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this, props));
  }

  _createClass(Node, [{
    key: "errors",
    value: function errors(msg) {
      if (this.refs.el.errors) {
        this.refs.el.errors(msg);
      } else {
        _addClass(this.refs.el);
      }
    }
  }, {
    key: "value",
    get: function get() {
      return this.refs.el.value;
    },
    set: function set(v) {
      this.refs.el.value = v;

      if (this.valueSet) {
        this.valueSet();
      }
    }
  }]);

  return Node;
}(React.PureComponent); // Create the base Component


var Parent =
/*#__PURE__*/
function (_BaseNode3) {
  _inherits(Parent, _BaseNode3);

  function Parent(props) {
    _classCallCheck(this, Parent);

    // Call the parent
    return _possibleConstructorReturn(this, _getPrototypeOf(Parent).call(this, props));
  }

  _createClass(Parent, [{
    key: "value",
    get: function get() {
      // Init the return
      var value = {}; // Go through all refs

      for (var r in this.refs) {
        if (this.refs[r].type && this.refs[r].type == 'checkbox') {
          value[r] = this.refs[r].checked;
        } else {
          value[r] = this.refs[r].value;
        }
      } // Return the value


      return value;
    }
  }]);

  return Parent;
}(_BaseNode); // Export the module


module.exports = {
  ArrayNode: ArrayNode,
  Node: Node,
  Parent: Parent,
  errorAdd: _addClass,
  errorRemove: _removeClass,
  errorFocus: function errorFocus(ev) {
    // If the special elements prop is set
    if (ev.elements) {
      for (var i = 0; i < ev.elements.length; ++i) {
        _removeClass(ev.elements[i]);
      }
    } // Else, assuming currentTarget
    else {
        _removeClass(ev.currentTarget);
      }
  }
};

/***/ }),

/***/ "./webpack/react/elements/inputEnter.jsx":
/*!***********************************************!*\
  !*** ./webpack/react/elements/inputEnter.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Input Enter
 *
 * An input box that handles Enter key presses and sends them to a onEnter
 * callback
 *
 * @author Chris Nasr
 * @copyright FUEL for the FIRE
 * @created 2018-12-01
 */
// React Base
var Forms = __webpack_require__(/*! ../base/forms.jsx */ "./webpack/react/base/forms.jsx"); // Create the Component


var InputEnter =
/*#__PURE__*/
function (_Forms$Node) {
  _inherits(InputEnter, _Forms$Node);

  function InputEnter(props) {
    var _this;

    _classCallCheck(this, InputEnter);

    // Call the parent
    _this = _possibleConstructorReturn(this, _getPrototypeOf(InputEnter).call(this, props)); // Store the callback

    _this.onEnter = props.onEnter;
    delete _this.props.onEnter; // Set the initial state

    _this.state = {}; // Bind functions

    _this.keyPress = _this.keyPress.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(InputEnter, [{
    key: "keyPress",
    value: function keyPress(ev) {
      // If an Enter key was pressed and the callback was set
      if (ev.key == 'Enter' && this.onEnter) {
        this.onEnter(ev.currentTarget.value);
        ev.stopPropagation();
        ev.preventDefault();
      } // If there's an onKeyPress callback


      if (this.props.onKeyPress) {
        this.props.onKeyPress(ev);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onEnter = _this$props.onEnter,
          rest = _objectWithoutProperties(_this$props, ["onEnter"]);

      return React.createElement("input", _extends({}, rest, {
        type: "text",
        ref: "el",
        onKeyPress: this.keyPress
      }));
    }
  }]);

  return InputEnter;
}(Forms.Node); // Export the component


module.exports = InputEnter;

/***/ }),

/***/ "./webpack/react/elements/menu.jsx":
/*!*****************************************!*\
  !*** ./webpack/react/elements/menu.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Menu Component
 *
 * A component to display a menu on the screen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-11
 */
// Create the Menu Component
var Menu =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Menu, _React$PureComponent);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    // Call the parent
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props)); // Set the base state

    _this.state = {
      selected: _this.props.selected
    }; // If there's no close

    if (!_this.props.onChange) {
      throw 'Menu requires onChange callback';
    } // Bind methods


    _this.itemClick = _this.itemClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Menu, [{
    key: "itemClick",
    value: function itemClick(name) {
      var self = this;
      this.setState({
        selected: name
      }, function () {
        self.props.onChange(name);
      });
    }
  }, {
    key: "renderChildren",
    value: function renderChildren() {
      var self = this;
      return React.Children.map(this.props.children, function (child, i) {
        var status = self.state.selected == child.props.name ? 'active' : '';
        return React.cloneElement(child, {
          onClick: self.itemClick,
          className: status
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: this.props.className
      }, this.renderChildren());
    }
  }, {
    key: "selected",
    get: function get() {
      return this.state.selected;
    },
    set: function set(n) {
      this.setState({
        selected: n
      });
    }
  }]);

  return Menu;
}(React.PureComponent); // Create the Menu Item Component


var Item =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(Item, _React$PureComponent2);

  function Item(props) {
    var _this2;

    _classCallCheck(this, Item);

    // Call the parent
    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Item).call(this, props)); // Set the base state

    _this2.state = {}; // If there's no name

    if (!_this2.props.name) {
      throw 'Item requires name attribute';
    } // Bind methods


    _this2.click = _this2.click.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Item, [{
    key: "click",
    value: function click(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      this.props.onClick(this.props.name);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("span", {
        className: this.props.className,
        onClick: this.click
      }, this.props.children);
    }
  }]);

  return Item;
}(React.PureComponent); // Export components


module.exports = {
  "Menu": Menu,
  "Item": Item
};

/***/ }),

/***/ "./webpack/react/elements/messages.jsx":
/*!*********************************************!*\
  !*** ./webpack/react/elements/messages.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Messages
 *
 * Shows a message with buttons to accept, dismiss, etc
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-31
 */
// Generic
var Events = __webpack_require__(/*! ../../generic/events.js */ "./webpack/generic/events.js");

var Tools = __webpack_require__(/*! ../../generic/tools.js */ "./webpack/generic/tools.js"); // Make sure there isn't more than one Messages


var _instance = false; // Create the message component

var Message =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Message, _React$Component);

  function Message(props) {
    var _this;

    _classCallCheck(this, Message);

    // Call the parent
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Message).call(this, props)); // Set the initial state

    _this.state = {}; // Bind methods

    _this.button = _this.button.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Message, [{
    key: "button",
    value: function button(ev) {
      // Call the callback associated, if it returns successful, remove the
      //	message
      if (this.props.buttons[ev.currentTarget.dataset.index].callback(this.props.id)) {
        this.props.remove(this.props.id);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        className: "message"
      }, React.createElement("p", null, self.props.text), React.createElement("div", {
        className: "buttons"
      }, self.props.buttons.map(function (b, i) {
        return React.createElement("button", {
          key: i,
          "data-index": i,
          onClick: self.button
        }, b.title);
      })));
    }
  }]);

  return Message;
}(React.Component); // Create the primary component


var Messages =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Messages, _React$Component2);

  function Messages(props) {
    var _this2;

    _classCallCheck(this, Messages);

    // Call the parent
    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Messages).call(this, props)); // If we already have an instance

    if (_instance) {
      throw 'Can\'t have more than one Messages';
    }

    _instance = true; // Set the initial state

    _this2.state = {
      messages: []
    }; // Bind methods

    _this2.message = _this2.message.bind(_assertThisInitialized(_this2));
    _this2.remove = _this2.remove.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Messages, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any message events
      Events.add('message', this.message);
      Events.add('message_remove', this.remove);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any message events
      Events.remove('message', this.message);
      Events.remove('message_remove', this.remove);
    }
  }, {
    key: "message",
    value: function message(id, conf) {
      // Clone the messages
      var msgs = Tools.clone(this.state.messages); // Push the new message

      msgs[id] = conf; // Set the state

      this.setState({
        "messages": msgs
      });
    }
  }, {
    key: "remove",
    value: function remove(id) {
      // Clone the messages
      var msgs = Tools.clone(this.state.messages); // Remove the requested ID

      delete msgs[id]; // Set the state

      this.setState({
        "messages": msgs
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        id: "messages"
      }, Tools.omap(this.state.messages, function (m, k) {
        return React.createElement(Message, _extends({}, m, {
          key: k,
          id: k,
          remove: self.remove
        }));
      }));
    }
  }]);

  return Messages;
}(React.Component); // Export the Component


module.exports = Messages;

/***/ }),

/***/ "./webpack/react/elements/modal.jsx":
/*!******************************************!*\
  !*** ./webpack/react/elements/modal.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Model Component
 *
 * A component to display a modal box on the screen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-11-11
 */
// Create the Component
var Modal =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    // Call the parent
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, props)); // If there's no close

    if (!_this.props.close) {
      throw 'Modal requires close callback';
    } // Bind methods


    _this.buttonClick = _this.buttonClick.bind(_assertThisInitialized(_this));
    _this.trapEscape = _this.trapEscape.bind(_assertThisInitialized(_this));
    return _this;
  } // If a button is pushed


  _createClass(Modal, [{
    key: "buttonClick",
    value: function buttonClick(ev) {
      // Get the button using the index
      var btn = this.props.buttons[ev.currentTarget.dataset.index]; // If there's a callback

      if (typeof btn.callback == 'function') {
        btn.callback(btn);
      } else {
        this.props.close();
      }
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // Trap the escape key
      document.addEventListener('keydown', this.trapEscape);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop trapping the escape key
      document.removeEventListener('keydown', this.trapEscape);
    }
  }, {
    key: "render",
    value: function render() {
      // Store this
      var self = this; // Generate the styles

      var styles = {};
      if (this.props.height) styles.height = this.props.height;
      if (this.props.maxHeight) styles.maxHeight = this.props.maxHeight;
      if (this.props.maxWidth) styles.maxHeight = this.props.maxHeight;
      if (this.props.width) styles.width = this.props.width; // Return the HTML

      return React.createElement("div", {
        className: "modal"
      }, React.createElement("div", {
        className: "cell"
      }, React.createElement("div", {
        className: "container",
        style: styles
      }, React.createElement("div", {
        className: "header"
      }, React.createElement("i", {
        className: "fas fa-window-close",
        onClick: this.props.close
      }), React.createElement("span", null, this.props.title)), React.createElement("div", {
        className: "content"
      }, this.props.children), this.props.buttons && React.createElement("div", {
        className: "footer"
      }, this.props.buttons.map(function (btn, i) {
        return React.createElement("button", {
          "data-index": i,
          className: "small",
          onClick: self.buttonClick,
          disabled: btn['disabled']
        }, btn['name']);
      })))));
    } // Traps ESC key clicks so we can close the Modal window

  }, {
    key: "trapEscape",
    value: function trapEscape(ev) {
      if (ev.keyCode === 27) {
        this.props.close();
      }
    }
  }]);

  return Modal;
}(React.PureComponent); // Export the component


module.exports = Modal;

/***/ }),

/***/ "./webpack/react/elements/popups.jsx":
/*!*******************************************!*\
  !*** ./webpack/react/elements/popups.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Popups
 *
 * Shows a popup of type error, success, or warning
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2018-12-08
 */
// Defines
var SUCCESS_TIMEOUT = 2000;
var ERROR_TIMEOUT = 10000;
var WARNING_TIMEOUT = 5000;
var STEP_TIMEOUT = 20;
var WIDTH_STEPS = 40;
var HEIGHT_STEPS = 20;
var MARGIN = 5; // Generic

var Events = __webpack_require__(/*! ../../generic/events.js */ "./webpack/generic/events.js");

var Tools = __webpack_require__(/*! ../../generic/tools.js */ "./webpack/generic/tools.js"); // Make sure there isn't more than one Popups


var _instance = false; // Create the Component

var Popups =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popups, _React$Component);

  function Popups(props) {
    var _this;

    _classCallCheck(this, Popups);

    // Call the parent
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popups).call(this, props)); // If we already have an instance

    if (_instance) {
      throw 'Can\'t have more than one Popups';
    }

    _instance = true; // Set the initial state

    _this.state = {
      popups: [],
      timer: null
    }; // Bind methods

    _this.error = _this.error.bind(_assertThisInitialized(_this));
    _this.popup = _this.popup.bind(_assertThisInitialized(_this));
    _this.process = _this.process.bind(_assertThisInitialized(_this));
    _this.warning = _this.warning.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Popups, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any popup events
      Events.add('error', this.error);
      Events.add('popup', this.popup);
      Events.add('success', this.popup);
      Events.add('warning', this.warning);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any popup events
      Events.remove('error', this.error);
      Events.remove('popup', this.popup);
      Events.remove('success', this.popup);
      Events.remove('warning', this.warning);
    }
  }, {
    key: "error",
    value: function error(msg) {
      this.popup(msg, 'error');
    }
  }, {
    key: "process",
    value: function process() {
      // Clone the state
      var state = Tools.clone(this.state); // If we were waiting

      if (state.timer.step == 0) {
        // Start the process to hide the first popup
        state.popups[0]['l'] = MARGIN;
        state.popups[0]['r'] = MARGIN; // Start the step timeouts

        state.timer.res = setTimeout(this.process, STEP_TIMEOUT);
        state.timer.step = 1;
      } // Else we need to move the first popup off the screen
      else if (state.timer.step >= 1 && state.timer.step <= 40) {
          // Get the inner width of the screen and divide by the steps
          var step = window.innerWidth / WIDTH_STEPS; // Subtract it from the left and right

          state.popups[0]['l'] -= step;
          state.popups[0]['r'] += step; // Set the next timeout

          state.timer.res = setTimeout(this.process, STEP_TIMEOUT);
          state.timer.step += 1;
        } // Else we need to move the first popup up
        else if (state.timer.step >= 41 && state.timer.step <= 60) {
            // If we're on the first step
            if (state.timer.step == 41) {
              state.popups[0]['oh'] = this.refs["0"].offsetHeight;
              state.popups[0]['h'] = this.refs["0"].offsetHeight;
            } // Get the height of the div and divide by the steps


            var step = state.popups[0]['oh'] / HEIGHT_STEPS; // Subtract it from the current height

            state.popups[0]['h'] -= step; // Set the next timeout

            state.timer.res = setTimeout(this.process, STEP_TIMEOUT);
            state.timer.step += 1;
          } // Else we need to remove the popup completely
          else if (state.timer.step == 61) {
              // Remove the current first popup
              state.popups.splice(0, 1); // If we still have popups

              if (state.popups.length) {
                // Reset the timer steps
                state.timer.res = setTimeout(this.process, state.popups[0].timeout);
                state.timer.step = 0;
              } // Else, no more timeouts
              else {
                  state.timer = null;
                }
            } // Set the state


      this.setState(state);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        id: "popups",
        style: {
          display: this.state.popups.length ? 'block' : 'none'
        }
      }, this.state.popups.map(function (msg, i) {
        var style = {};

        if (typeof msg.l != 'undefined') {
          style.marginLeft = msg.l + 'px';
          style.marginRight = msg.r + 'px';
        }

        if (typeof msg.h != 'undefined') {
          style.height = msg.h + 'px';
          style.padding = 0;
          style.marginBottom = 0;
          style.marginTop = 0;
        }

        return React.createElement("div", {
          key: i,
          ref: "" + i,
          className: msg.type,
          style: style
        }, React.createElement("i", {
          className: "fas fa-" + msg.icon
        }), msg.text);
      }));
    }
  }, {
    key: "popup",
    value: function popup(text, type) {
      // If there's no type
      if (typeof type == 'undefined') {
        type = 'success';
      }

      var iTimeout = 0;
      var sIcon = '';

      switch (type) {
        case 'success':
          iTimeout = SUCCESS_TIMEOUT;
          sIcon = 'check-circle';
          break;

        case 'error':
          iTimeout = ERROR_TIMEOUT;
          sIcon = 'exclamation-circle';
          console.error(text);
          break;

        case 'warning':
          iTimeout = WARNING_TIMEOUT;
          sIcon = 'exclamation-triangle';
          console.warn(text);
          break;

        default:
          throw "Invalid popup type: " + type;
      } // Clone the state


      var state = Tools.clone(this.state); // Add the popup

      state.popups.push({
        icon: sIcon,
        text: text,
        timeout: iTimeout,
        type: type
      }); // Set the timer

      if (state.timer == null) {
        state.timer = {
          res: setTimeout(this.process, iTimeout),
          step: 0
        };
      } // Set the new state


      this.setState(state);
    }
  }, {
    key: "warning",
    value: function warning(msg) {
      this.popup(msg, 'warning');
    }
  }]);

  return Popups;
}(React.Component); // Export the component


module.exports = Popups;

/***/ }),

/***/ "./webpack/react/header.jsx":
/*!**********************************!*\
  !*** ./webpack/react/header.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Header
 *
 * Manages sign in / sign out / sign up
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-21
 */
// components
var Forms = __webpack_require__(/*! ./base/forms.jsx */ "./webpack/react/base/forms.jsx");

var Modal = __webpack_require__(/*! ./elements/modal.jsx */ "./webpack/react/elements/modal.jsx");

var Thrower = __webpack_require__(/*! ./thrower.jsx */ "./webpack/react/thrower.jsx"); // Generic modules


var Events = __webpack_require__(/*! ../generic/events.js */ "./webpack/generic/events.js");

var Hash = __webpack_require__(/*! ../generic/hash.js */ "./webpack/generic/hash.js");

var Loader = __webpack_require__(/*! ../generic/loader.js */ "./webpack/generic/loader.js");

var Services = __webpack_require__(/*! ../generic/services.js */ "./webpack/generic/services.js"); // Site modules


var Utils = __webpack_require__(/*! ../utils.js */ "./webpack/utils.js"); // Header component


var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props)); // Initialise the state

    _this.state = {
      "modal": false,
      "thrower": false
    }; // Bind methods

    _this.accountShow = _this.accountShow.bind(_assertThisInitialized(_this));
    _this.home = _this.home.bind(_assertThisInitialized(_this));
    _this.signin = _this.signin.bind(_assertThisInitialized(_this));
    _this.signinShow = _this.signinShow.bind(_assertThisInitialized(_this));
    _this.signinTrigger = _this.signinTrigger.bind(_assertThisInitialized(_this));
    _this.signout = _this.signout.bind(_assertThisInitialized(_this));
    _this.signoutTrigger = _this.signoutTrigger.bind(_assertThisInitialized(_this));
    _this.signup = _this.signup.bind(_assertThisInitialized(_this));
    _this.signupShow = _this.signupShow.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Header, [{
    key: "accountShow",
    value: function accountShow(ev) {
      this.setState({
        "modal": this.state.modal == "account" ? false : 'account'
      });
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any signin/signout events
      Events.add('signin', this.signinTrigger);
      Events.add('signout', this.signoutTrigger);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any signin/signout events
      Events.remove('signin', this.signinTrigger);
      Events.remove('signout', this.signoutTrigger);
    }
  }, {
    key: "home",
    value: function home() {
      Hash.set("page", null);
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("header", null, React.createElement("div", {
        className: "actions fright aright"
      }, self.state.thrower ? React.createElement(React.Fragment, null, React.createElement("i", {
        className: "far fa-user",
        title: "Account",
        onClick: self.accountShow
      }), React.createElement("i", {
        className: "fas fa-power-off",
        title: "Sign Out",
        onClick: self.signout
      })) : React.createElement(React.Fragment, null, React.createElement("i", {
        className: "fas fa-user-plus",
        title: "Create Account",
        onClick: self.signupShow
      }), React.createElement("i", {
        className: "fas fa-sign-in-alt",
        title: "Sign In",
        onClick: self.signinShow
      })), React.createElement("br", null)), React.createElement("h1", {
        style: {
          "cursor": "pointer"
        },
        onClick: this.home
      }, "AxeGains.com"), self.state.modal == 'signin' && React.createElement("div", {
        id: "signin",
        className: "form"
      }, React.createElement("p", null, React.createElement("input", {
        ref: "alias",
        type: "text",
        title: "alias",
        placeholder: "alias",
        onClick: Forms.errorFocus
      })), React.createElement("p", null, React.createElement("input", {
        ref: "passwd",
        type: "password",
        title: "password",
        placeholder: "password",
        onClick: Forms.errorFocus
      })), React.createElement("p", {
        className: "aright"
      }, React.createElement("button", {
        onClick: self.signin
      }, "sign in"))), self.state.modal == 'signup' && React.createElement("div", {
        id: "signup",
        className: "form"
      }, React.createElement("p", null, React.createElement("input", {
        ref: "signup_alias",
        type: "text",
        title: "alias",
        placeholder: "alias",
        onClick: Forms.errorFocus
      })), React.createElement("p", null, React.createElement("input", {
        ref: "email",
        type: "text",
        title: "email",
        placeholder: "email (not required)",
        onClick: Forms.errorFocus
      })), React.createElement("p", null, React.createElement("input", {
        ref: "signup_passwd",
        type: "password",
        title: "password",
        placeholder: "password",
        onClick: Forms.errorFocus
      })), React.createElement("p", null, React.createElement("input", {
        ref: "repeat_passwd",
        type: "password",
        title: "repeat password",
        placeholder: "repeat password",
        onClick: Forms.errorFocus
      })), React.createElement("p", {
        className: "aright"
      }, React.createElement("button", {
        onClick: self.signup
      }, "sign up"))), self.state.modal == 'account' && React.createElement(Modal, {
        title: "Account",
        close: self.accountShow,
        width: "95%"
      }, React.createElement(Thrower, null)));
    }
  }, {
    key: "signin",
    value: function signin(ev) {
      // Store this
      var self = this; // Show loader

      Loader.show(); // Store the alias

      var alias = this.refs.alias.value; // Call the signin

      Services.create('auth', 'signin', {
        "alias": alias,
        "passwd": this.refs.passwd.value
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          var error = ' ';

          switch (res.error.code) {
            case 1001:
              // Go through each message and make the ref red
              for (var i in res.error.msg) {
                Forms.errorAdd(self.refs[i]);
              }

              break;

            case 1201:
              Events.trigger('error', 'Alias or password invalid');
              break;

            case 1204:
              Forms.errorAdd(self.refs['signup_passwd']);
              Events.trigger('error', 'Password not strong enough');
              break;

            default:
              Events.trigger('error', JSON.stringify(res.error));
              break;
          }
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Set the session with the service
          Services.session(res.data.session); // Greet thrower

          Events.trigger('success', "Welcome back to AxeGains " + alias); // Trigger the signin event

          Events.trigger('signin', res.data.thrower);
        }
      }).always(function () {
        // Hide loader
        Loader.hide();
      });
    }
  }, {
    key: "signinShow",
    value: function signinShow(ev) {
      this.setState({
        "modal": this.state.modal == 'signin' ? false : 'signin'
      });
    }
  }, {
    key: "signinTrigger",
    value: function signinTrigger(thrower) {
      // Hide any modals and set the thrower
      this.setState({
        "modal": false,
        "thrower": thrower
      });
    }
  }, {
    key: "signout",
    value: function signout(ev) {
      // Store this
      var self = this; // Show loader

      Loader.show(); // Call the signout

      Services.create('auth', 'signout', {}).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Reset the session
          Services.session(null); // Trigger the signout event

          Events.trigger('signout');
        }
      }).always(function () {
        // Hide loader
        Loader.hide();
      });
    }
  }, {
    key: "signoutTrigger",
    value: function signoutTrigger() {
      // Hide and modals and set the thrower to false
      this.setState({
        "modal": false,
        "thrower": false
      });
    }
  }, {
    key: "signup",
    value: function signup(ev) {
      // If the alias is not long enough
      if (this.refs.signup_alias.trim().length < 3) {
        Forms.errorAdd(this.refs.signup_alias);
        Events.trigger('error', 'Alias must be at least 3 characters');
        return;
      } // If the passwords don't match


      if (this.refs.signup_passwd.value != this.refs.repeat_passwd.value) {
        Forms.errorAdd(this.refs.repeat_passwd);
        Events.trigger('error', 'Passwords do not match');
        return;
      } // Store this


      var self = this; // Show loader

      Loader.show(); // Init the data

      var oData = {
        "alias": this.refs.signup_alias.value.trim(),
        "passwd": this.refs.signup_passwd.value // If there's an e-mail

      };

      if (this.refs.email.value) {
        var email = this.refs.email.value.trim();

        if (email) {
          oData['email'] = email;
        }
      } // Call the signup


      Services.create('auth', 'signup', oData).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          var error = ' ';

          switch (res.error.code) {
            case 1001:
              // Go through each message and make the ref red
              for (var i in res.error.msg) {
                if (i == 'alias') {
                  i = 'signup_alias';
                } else if (i == 'passwd') {
                  i = 'signup_passwd';
                }

                Forms.errorAdd(self.refs[i]);
              }

              break;

            case 1200:
              Forms.errorAdd(self.refs['signup_alias']);
              Events.trigger('error', 'Alias is already in use');
              break;

            case 1204:
              Forms.errorAdd(self.refs['signup_passwd']);
              Events.trigger('error', 'Password not strong enough');
              break;

            case 1206:
              Forms.errorAdd(self.refs['email']);
              Events.trigger('error', 'E-Mail already in use');
              break;

            default:
              Events.trigger('error', JSON.stringify(res.error));
              break;
          }
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Set the session with the service
          Services.session(res.data.thrower._id); // Revert to sign in and show success message

          self.setState({
            "modal": false,
            "thrower": true
          }); // Greet thrower

          Events.trigger('success', "Welcome to AxeGains " + res.data.thrower.alias); // Trigger the signin event

          Events.trigger('signin', res.data.thrower);
        }
      }).always(function () {
        // Hide loader
        Loader.hide();
      });
    }
  }, {
    key: "signupShow",
    value: function signupShow(ev) {
      this.setState({
        "modal": this.state.modal == 'signup' ? false : 'signup'
      });
    }
  }]);

  return Header;
}(React.Component); // Export the component


module.exports = Header;

/***/ }),

/***/ "./webpack/react/match.jsx":
/*!*********************************!*\
  !*** ./webpack/react/match.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Match
 *
 * Manages Org menu for matches and display the appropriate one based on what
 * is chosen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-26
 */
// Generic modules
var Events = __webpack_require__(/*! ../generic/events.js */ "./webpack/generic/events.js");

var Hash = __webpack_require__(/*! ../generic/hash.js */ "./webpack/generic/hash.js"); // Generic components


var _require = __webpack_require__(/*! ./elements/menu.jsx */ "./webpack/react/elements/menu.jsx"),
    Menu = _require.Menu,
    Item = _require.Item; // Site components


var Natf = __webpack_require__(/*! ./natf/match.jsx */ "./webpack/react/natf/match.jsx"); // Match component


var Match =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Match, _React$Component);

  function Match(props) {
    var _this;

    _classCallCheck(this, Match);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Match).call(this, props)); // Initialise the state

    _this.state = {
      "org": Hash.get('org', 'natf')
    }; // Bind methods

    _this.orgChange = _this.orgChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Match, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any org hash change events
      Hash.watch('org', this.orgChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any org hash change events
      Hash.unwatch('org', this.orgChange); // Remove the org from the hash

      Hash.set('org', null);
    }
  }, {
    key: "menuChange",
    value: function menuChange(org) {
      Hash.set('org', org);
    }
  }, {
    key: "orgChange",
    value: function orgChange(org) {
      if (org != this.state.org) {
        if (org == null) {
          org = 'natf';
        }

        this.setState({
          "org": org
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        id: "match"
      }, React.createElement(Menu, {
        className: "menu secondary",
        selected: self.state.org,
        onChange: self.menuChange
      }, React.createElement(Item, {
        name: "natf"
      }, "NATF")), React.createElement("div", {
        id: "content"
      }, React.createElement("div", null, self.state.org == 'natf' && React.createElement(Natf, {
        thrower: this.props.thrower
      }))));
    }
  }]);

  return Match;
}(React.Component); // Export the component


module.exports = Match;

/***/ }),

/***/ "./webpack/react/natf/board.jsx":
/*!**************************************!*\
  !*** ./webpack/react/natf/board.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * NATF Board
 *
 * Manages a standard NATF board
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-19
 */
// Board component
var Board =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board(props) {
    var _this;

    _classCallCheck(this, Board);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Board).call(this, props)); // If there's no onPoints prop

    if (!props.onPoints) {
      throw 'must specify onPoints property for NATF Board';
    } // Initialise the state


    _this.state = {
      "clutchMode": props.clutchMode,
      "selected": false
    }; // Bind methods

    _this.clutchClick = _this.clutchClick.bind(_assertThisInitialized(_this));
    _this.dropClick = _this.dropClick.bind(_assertThisInitialized(_this));
    _this.pointClick = _this.pointClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Board, [{
    key: "clutchClick",
    value: function clutchClick(ev) {
      // Stop propagation no matter what
      ev.stopPropagation(); // If clutches are not allowed

      if (this.state.clutchMode == 'none') {
        // Store the current target
        var target = ev.currentTarget; // Get the class name

        var className = target.className; // Set the invalid class

        target.className = className + ' invalid'; // And set a timeout to turn it off

        setTimeout(function () {
          target.className = className;
        }, 500); // Don't count the click

        return;
      } else {
        if (this.state.selected) {
          this.props.onPoints(true, 7);
          this.resetClutch();
        } else {
          this.setState({
            "selected": true
          });
        }
      }
    }
  }, {
    key: "dropClick",
    value: function dropClick(ev) {
      // Stop propagation no matter what
      ev.stopPropagation(); // Store the current target

      var target = ev.currentTarget; // Send out the drop

      this.props.onPoints(this.state.selected, 'd'); // De-select the clutch if there's one selected

      if (this.state.selected) {
        this.resetClutch();
      } // Turn on the active flag


      target.className = 'drop active'; // And set a timeout to turn it off

      setTimeout(function () {
        target.className = 'drop';
      }, 500);
    }
  }, {
    key: "resetClutch",
    value: function resetClutch() {
      // If the mode is selected
      if (this.state.clutchMode == 'select') {
        this.setState({
          "selected": false
        });
      }
    }
  }, {
    key: "pointClick",
    value: function pointClick(ev) {
      // Stop propagation no matter what
      ev.stopPropagation(); // Store the current target

      var target = ev.currentTarget; // Get the class names

      var classNames = target.className.split(' '); // If it's already active, do nothing

      if (classNames[1] && classNames[1] == 'active') {
        return;
      } // If there's a clutch selected


      if (this.state.selected) {
        this.props.onPoints(true, 0);
        this.resetClutch();
      } else {
        this.props.onPoints(false, target.dataset.value);
      } // Turn on the active flag


      target.className = classNames[0] + ' active'; // And set a timeout to turn it off

      setTimeout(function () {
        target.className = classNames[0];
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        className: "board",
        "data-value": 0,
        onClick: self.pointClick
      }, React.createElement("div", {
        className: "clutch left" + (self.state.selected ? ' selected' : ''),
        onClick: self.clutchClick
      }), React.createElement("div", {
        className: "drop",
        onClick: self.dropClick
      }, "DROP"), React.createElement("div", {
        className: "clutch right" + (self.state.selected ? ' selected' : ''),
        onClick: self.clutchClick
      }), React.createElement("div", {
        className: "one",
        "data-value": 1,
        onClick: self.pointClick
      }, React.createElement("div", {
        className: "three",
        "data-value": 3,
        onClick: self.pointClick
      }, React.createElement("div", {
        className: "five",
        "data-value": 5,
        onClick: self.pointClick
      }))));
    }
  }, {
    key: "clutchMode",
    set: function set(mode) {
      // Figure out the selected value
      var selected = null;

      switch (mode) {
        case 'none':
          selected = false;
          break;

        case 'expected':
          selected = true;
          break;

        case 'select':
          selected = this.state.selected;
          break;
      } // Set the new state


      this.setState({
        "clutchMode": mode,
        "selected": selected
      });
    }
  }]);

  return Board;
}(React.Component); // Export the component


module.exports = Board;

/***/ }),

/***/ "./webpack/react/natf/match.jsx":
/*!**************************************!*\
  !*** ./webpack/react/natf/match.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * NATF Match
 *
 * Manages creating and playing a standard NATF match
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-26
 */
// Generic modules
var Events = __webpack_require__(/*! ../../generic/events.js */ "./webpack/generic/events.js");

var Hash = __webpack_require__(/*! ../../generic/hash.js */ "./webpack/generic/hash.js");

var Loader = __webpack_require__(/*! ../../generic/loader.js */ "./webpack/generic/loader.js");

var Services = __webpack_require__(/*! ../../generic/services.js */ "./webpack/generic/services.js");

var Tools = __webpack_require__(/*! ../../generic/tools.js */ "./webpack/generic/tools.js"); // Site modules


var TwoWay = __webpack_require__(/*! ../../twoway.js */ "./webpack/twoway.js");

var Utils = __webpack_require__(/*! ../../utils.js */ "./webpack/utils.js"); // React components


var Board = __webpack_require__(/*! ./board.jsx */ "./webpack/react/natf/board.jsx");

var Opponent = __webpack_require__(/*! ../opponent.jsx */ "./webpack/react/opponent.jsx"); // Match Component


var Match =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Match, _React$Component);

  function Match(props) {
    var _this;

    _classCallCheck(this, Match);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Match).call(this, props)); // Initialise the state

    _this.state = {
      "alias": '',
      "bigaxe": false,
      "existing": false,
      "games": false,
      "id": false,
      "matchState": false,
      "mode": "opponent",
      "thrower": props.thrower,
      "is": '',
      "opponent": false
    }; // Bind methods

    _this.existingContinue = _this.existingContinue.bind(_assertThisInitialized(_this));
    _this.existingDelete = _this.existingDelete.bind(_assertThisInitialized(_this));
    _this.idCallback = _this.idCallback.bind(_assertThisInitialized(_this));
    _this.matchCallback = _this.matchCallback.bind(_assertThisInitialized(_this));
    _this.overwrite = _this.overwrite.bind(_assertThisInitialized(_this));
    _this.points = _this.points.bind(_assertThisInitialized(_this));
    _this.requestCallback = _this.requestCallback.bind(_assertThisInitialized(_this));
    _this.requestCancel = _this.requestCancel.bind(_assertThisInitialized(_this));
    _this.requestCreate = _this.requestCreate.bind(_assertThisInitialized(_this));
    _this.signin = _this.signin.bind(_assertThisInitialized(_this));
    _this.signout = _this.signout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Match, [{
    key: "calculateMatchState",
    value: function calculateMatchState(data) {
      // Init the state
      var state = {
        "game": "1",
        "throw": "1"
      }; // Are we opponent or initiator

      var w = this.state.thrower._id == data.initiator ? 'i' : 'o'; // If there's any bigaxe data it's safe to assume we're done with the
      //	regular match

      if (data.bigaxe && !Tools.empty(data.bigaxe)) {
        // If we have points
        if (data.bigaxe.points && data.bigaxe.points.length) {
          // Set bigaxe to points
          state.bigaxe = 'points'; // Step through the points

          for (var i = 0; i < data.bigaxe.points.length; ++i) {
            if (typeof data.bigaxe.points[i][w] == 'undefined') {
              state["throw"] = i;
            }
          }
        } // Else we're still on target
        else {
            // Set bigaxe to target
            state.bigaxe = 'target'; // Step through the target

            for (var i; i < data.bigaxe.target.length; ++i) {
              if (typeof data.bigaxe.target[i][t] == 'undefined') {
                state["throw"] = i;
              }
            }
          }
      } // Else, assume we are in games
      else {
          // Go through each game
          var g = "1";

          for (var _i = 0, _arr = ["1", "2", "3"]; _i < _arr.length; _i++) {
            g = _arr[_i];

            // If it doesn't exist
            if (typeof data.games[g] == 'undefined') {
              break;
            } // Store the game


            state.game = g; // If the game is finished

            if (data.games[g].finished) {
              continue;
            } // Go through each throw


            var t = "1";

            for (var _i2 = 0, _arr2 = ["1", "2", "3", "4", "5"]; _i2 < _arr2.length; _i2++) {
              t = _arr2[_i2];

              // If it doesn't exist
              if (typeof data.games[g][w][t] == 'undefined') {
                break;
              }
            } // Store the round


            state["throw"] = t;
          }
        } // Return the state


      return state;
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any signin/signout events
      Events.add('signin', this.signin);
      Events.add('signout', this.signout); // Track ID in hash

      Hash.watch('id', this.idCallback); // If we're signed in

      if (this.state.thrower) {
        // If there's an ID in the hash
        var id = Hash.get('id');

        if (id) {
          this.idCallback(id);
        } else {
          this.existingFetch();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any signin/signout events
      Events.remove('signin', this.signin);
      Events.remove('signout', this.signout); // Stop tracking ID in hash and remove it

      Hash.unwatch('id', this.idCallback);
      Hash.set('id', null); // If we're in request mode

      if (this.state.mode == 'request') {
        // Stop tracking the request
        TwoWay.untrack('auth', 'request-' + this.state.id, this.requestCallback);
      } else if (this.state.mode == 'match') {
        // Stop tracking the match
        TwoWay.untrack('natf', 'match-' + this.state.id, this.matchCallback);
      }
    }
  }, {
    key: "existingContinue",
    value: function existingContinue(ev) {
      Hash.set('id', 'm|' + ev.currentTarget.parentNode.dataset.id);
    }
  }, {
    key: "existingDelete",
    value: function existingDelete(ev) {
      // Store this
      var self = this; // Show the loader

      Loader.show(); // Store the id

      var id = ev.currentTarget.parentNode.dataset.id; // Notify the service the match won't be completed

      Services["delete"]('natf', 'match', {
        "id": id
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          // If the thrower can't delete that record, or it's finished
          if (res.error.code == 1000) {
            self.existingRemove(id);
          } // If it's already deleted
          else if (res.error.code == 1104) {
              self.existingRemove(id);
            } // Unknown error
            else {
                Events.trigger('error', JSON.stringify(res.error));
              }
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          self.existingRemove(id);
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "existingFetch",
    value: function existingFetch() {
      // Store this
      var self = this; // Show the loader

      Loader.show(); // Find out if there's any unfinished games associated with this
      //	thrower

      Services.read('natf', 'match/unfinished', {}).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // If there's any
          if (res.data.length) {
            // Set the state
            self.setState({
              "mode": "existing",
              "existing": res.data
            });
          }
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "existingRemove",
    value: function existingRemove(id) {
      // Store the existing
      var existing = Tools.clone(this.state.existing); // Go through each one

      for (var i = 0; i < existing.length; ++i) {
        if (existing[i]._id == id) {
          existing.splice(i, 1);
        }
      } // Init the new state


      var state = {
        "existing": existing // If there's no more existing

      };

      if (existing.length == 0) {
        state.mode = 'opponent';
      } // Set the new state


      this.setState(state);
    }
  }, {
    key: "idCallback",
    value: function idCallback(id) {
      // If there's an ID
      if (id) {
        // Split the ID
        id = id.split('|'); // If it's a request

        if (id[0] == 'r') {
          // Change the mode
          this.setState({
            "id": id[1],
            "mode": "request",
            "opponent": {
              "alias": id[2]
            }
          }); // Listen for an update on the request

          TwoWay.track('auth', 'request-' + id[1], this.requestCallback);
        } // Else if it's a match
        else if (id[0] == 'm') {
            // Change the mode
            this.setState({
              "bigaxe": false,
              "games": {
                "1": {
                  "i": {},
                  "o": {}
                }
              },
              "id": id[1],
              "matchState": {
                "game": 1,
                "throw": 1,
                "bigaxe": false
              },
              "mode": "match",
              "opponent": {
                "alias": ''
              },
              "is": "i"
            }); // List for an update on the match

            TwoWay.track('natf', 'match-' + id[1], this.matchCallback); // Save this

            var self = this; // Fetch the match

            Services.read('natf', 'match', {
              "id": id[1]
            }).done(function (res) {
              // If there's an error
              if (res.error && !Utils.serviceError(res.error)) {
                // If the match no longer exists
                if (res.error.code == 1104) {
                  Hash.set('id', null);
                  return;
                }

                Events.trigger('error', JSON.stringify(res.error));
              } // If there's a warning


              if (res.warning) {
                Events.trigger('warning', JSON.stringify(res.warning));
              } // If there's data


              if (res.data) {
                // Are we initiator or opponent?
                var t = res.data.initiator == self.state.thrower._id ? 'i' : 'o'; // Store it in the state

                self.setState({
                  "alias": t == 'i' ? res.data['opponent_alias'] : res.data['initiator_alias'],
                  "bigaxe": res.data.bigaxe,
                  "games": res.data.games,
                  "matchState": self.calculateMatchState(res.data),
                  "is": t
                });
              }
            });
          }
      } // Else reset
      else {
          this.setState({
            "mode": "opponent"
          });
        }
    }
  }, {
    key: "matchCallback",
    value: function matchCallback(msg) {
      console.log(msg);
    }
  }, {
    key: "overwrite",
    value: function overwrite(ev) {
      // Clone the match state
      var ms = Tools.clone(this.state.matchState); // Change the throw

      ms["throw"] = ev.currentTarget.dataset["throw"]; // Set the board mode

      this.refs.board.clutchMode = ms["throw"] == 5 ? 'selected' : 'none'; // Set the new state

      this.setState({
        "matchState": ms,
        "overwrite": true
      });
    }
  }, {
    key: "points",
    value: function points(clutch, value) {
      var _this2 = this;

      // Store this
      var self = this; // Show the loader

      Loader.show(); // Clone the games and match state

      var games = Tools.clone(this.state.games);
      var ms = Tools.clone(this.state.matchState); // Get the value or value/clutch

      var value = ms["throw"] == 5 ? {
        "clutch": clutch,
        "value": value
      } : value; // Store the point value

      games[ms.game][this.state.is][ms["throw"]] = value; // Save the value and notify the opponent

      Services.update('natf', 'match/game', {
        "id": games[ms.game]._id,
        "match": this.state.id,
        "throw": ms["throw"],
        "value": value
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // If the overwrite flag is set
          if (self.state.overwrite) {
            var t = "6";

            for (var _i3 = 0, _arr3 = ["1", "2", "3", "4", "5", "6"]; _i3 < _arr3.length; _i3++) {
              t = _arr3[_i3];

              if (typeof games[ms.game][_this2.state.is][t] == 'undefined') {
                break;
              }
            }

            ms["throw"] = t;
          } else {
            ms["throw"] = (parseInt(ms["throw"]) + 1).toString();
          } // Update the state


          self.setState({
            "games": games,
            "matchState": ms,
            "overwrite": false
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        className: "natf"
      }, this.state.mode == 'opponent' && React.createElement(Opponent, {
        thrower: this.state.thrower,
        onSelect: this.requestCreate
      }), this.state.mode == 'request' && React.createElement("div", {
        className: "acenter"
      }, React.createElement("p", null, "Waiting for ", self.state.opponent.alias, " to accept your match request"), React.createElement("button", {
        onClick: self.requestCancel
      }, "Cancel Request")), this.state.mode == 'existing' && React.createElement("div", {
        className: "acenter"
      }, this.state.existing.map(function (m, i) {
        return React.createElement("div", {
          key: i,
          "data-id": m._id,
          className: "existing"
        }, React.createElement("p", null, "You have an existing match with ", m.alias, ", do you wish to continue?"), React.createElement("button", {
          onClick: self.existingDelete
        }, "Delete"), React.createElement("button", {
          onClick: self.existingContinue
        }, "Continue"));
      })), this.state.mode == 'match' && React.createElement("div", null, React.createElement(Board, {
        ref: "board",
        clutchMode: "none",
        onPoints: self.points
      }), React.createElement("div", {
        className: "stats"
      }, this.renderOverall(), this.state.bigaxe ? this.renderBigAxe() : this.renderGame())));
    }
  }, {
    key: "renderBigAxe",
    value: function renderBigAxe() {
      return React.createElement("div", null);
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      // Opponent is opposite of thrower
      var sO = this.state.is == 'i' ? 'o' : 'i'; // What game are we in?

      var g = this.state.games[this.state.matchState.game];
      return React.createElement("div", {
        className: "game"
      }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "T"), React.createElement("th", null, this.state.thrower.alias), React.createElement("th", null, this.state.alias))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "1"), this.renderGameThrow("1"), React.createElement("td", null, g[sO]["1"] == -1 ? 'd' : g[sO]["1"])), React.createElement("tr", null, React.createElement("td", null, "2"), this.renderGameThrow("2"), React.createElement("td", null, g[sO]["2"] == -1 ? 'd' : g[sO]["2"])), React.createElement("tr", null, React.createElement("td", null, "3"), this.renderGameThrow("3"), React.createElement("td", null, g[sO]["3"] == -1 ? 'd' : g[sO]["3"])), React.createElement("tr", null, React.createElement("td", null, "4"), this.renderGameThrow("4"), React.createElement("td", null, g[sO]["4"] == -1 ? 'd' : g[sO]["4"])), React.createElement("tr", null, React.createElement("td", null, "5"), this.renderGameThrow("5"), React.createElement("td", {
        className: g[sO]["5"] && g[sO]["5"].clutch ? 'clutch' : ''
      }, g[sO]["5"] ? g[sO]["5"].value == -1 ? 'd' : g[sO]["5"].value : '')))), this.state.matchState["throw"] == '6' && React.createElement("button", {
        onClick: this.gameFinish
      }, "Finished"));
    }
  }, {
    key: "renderGameThrow",
    value: function renderGameThrow(t) {
      // The game
      var g = this.state.matchState.game; // The value of the throw

      var v = this.state.games[g][this.state.is][t]; // If we're working on 5

      if (t == '5') {
        // If the game is finished
        if (this.state.games[g][this.state.is].finished) {
          return React.createElement("td", {
            className: v.clutch ? 'clutch' : ''
          }, v);
        } // Else, we're not finished, but the value exists
        else if (v) {
            return React.createElement("td", {
              className: this.state.overwrite && this.state.matchState["throw"] == t ? 'overwrite' : v.clutch ? 'clutch' : '',
              "data-throw": t,
              onClick: this.overwrite
            }, v.value == -1 ? 'd' : v.value);
          } // Else, there's no value
          else {
              return React.createElement("td", null);
            }
      } // Else it's 1 to 4
      else {
          // If the game is finished
          if (this.state.games[g][this.state.is].finished) {
            return React.createElement("td", null, v);
          } // Else, we're not finishd, but the value exists
          else if (v) {
              return React.createElement("td", {
                className: this.state.overwrite && this.state.matchState["throw"] == t ? 'overwrite' : '',
                "data-throw": t,
                onClick: this.overwrite
              }, v == -1 ? 'd' : v);
            } // Else, there's no value
            else {
                return React.createElement("td", null);
              }
        }
    }
  }, {
    key: "renderOverall",
    value: function renderOverall() {
      // Init the points per game
      var oPoints = {
        "i": [0, 0, 0],
        "o": [0, 0, 0] // Opponent is opposite of thrower

      };
      var sO = this.state.is == 'i' ? 'o' : 'i'; // Calculate the points

      for (var _i4 = 0, _arr4 = ["1", "2", "3"]; _i4 < _arr4.length; _i4++) {
        var g = _arr4[_i4];
        var iG = parseInt(g) - 1;

        if (this.state.games[g]) {
          for (var _i5 = 0, _arr5 = ["1", "2", "3", "4", "5"]; _i5 < _arr5.length; _i5++) {
            var t = _arr5[_i5];

            if (this.state.games[g]['i'][t]) {
              if (t == '5') {
                oPoints['i'][iG] += this.state.games[g]['i'][t].value;
              } else {
                oPoints['i'][iG] += this.state.games[g]['i'][t];
              }
            }

            if (this.state.games[g]['o'][t]) {
              if (t == '5') {
                oPoints['o'][iG] += this.state.games[g]['o'][t].value;
              } else {
                oPoints['o'][iG] += this.state.games[g]['o'][t];
              }
            }
          }
        }
      }

      return React.createElement("div", {
        className: "overall"
      }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "G"), React.createElement("th", null, this.state.thrower.alias), React.createElement("th", null, this.state.alias))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "1"), React.createElement("td", null, oPoints[this.state.is][0]), React.createElement("td", null, oPoints[sO][0])), React.createElement("tr", null, React.createElement("td", null, "2"), React.createElement("td", null, oPoints[this.state.is][1]), React.createElement("td", null, oPoints[sO][1])), React.createElement("tr", null, React.createElement("td", null, "3"), React.createElement("td", null, oPoints[this.state.is][2]), React.createElement("td", null, oPoints[sO][2])))));
    }
  }, {
    key: "requestCallback",
    value: function requestCallback(msg) {
      // If the match was accepted
      if (msg.type == 'accepted') {
        Hash.set('id', 'm|' + msg.match);
      } // Else if it was rejected
      else if (msg.type == 'rejected') {
          this.requestReset();
        }
    }
  }, {
    key: "requestCancel",
    value: function requestCancel() {
      if (this.state.mode == 'request') {
        // Store this
        var self = this; // Show the loader

        Loader.show(); // Cancel the match request

        Services["delete"]('auth', 'match/request', {
          "id": this.state.id
        }).done(function (res) {
          // If there's an error
          if (res.error && !Utils.serviceError(res.error)) {
            // If it's already deleted
            if (res.error.code != 1104) {
              self.requestReset();
            } else {
              Events.trigger('error', JSON.stringify(res.error));
            }
          } // If there's a warning


          if (res.warning) {
            Events.trigger('warning', JSON.stringify(res.warning));
          } // If there's data


          if (res.data) {
            self.requestReset();
          }
        }).always(function () {
          // Hide the loader
          Loader.hide();
        });
      }
    }
  }, {
    key: "requestCreate",
    value: function requestCreate(opponent) {
      // Store this
      var self = this; // Show the loader

      Loader.show(); // Make a match request for this opponent

      Services.create('auth', 'match/request', {
        "opponent": opponent._id,
        "org": "NATF"
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Set the hash
          Hash.set('id', 'r|' + res.data + '|' + opponent.alias);
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "requestReset",
    value: function requestReset() {
      // Stop listening for an update on the request
      TwoWay.untrack('auth', 'request-' + this.state.id, this.requestCallback); // Remove the ID from the hash

      Hash.set('id', null); // Change the mode

      this.setState({
        "id": false,
        "mode": "opponent",
        "opponent": false
      });
    }
  }, {
    key: "signin",
    value: function signin(thrower) {
      // Set state
      this.setState({
        "thrower": thrower
      }); // If there's an ID in the hash

      var id = Hash.get('id');

      if (id) {
        this.idCallback(id);
      } else {
        this.existingFetch();
      }
    }
  }, {
    key: "signout",
    value: function signout() {
      // Set state
      this.setState({
        "thrower": false
      }); // Remove the ID from the hash

      Hash.set('id', null);
    }
  }]);

  return Match;
}(React.Component); // Export the component


module.exports = Match;

/***/ }),

/***/ "./webpack/react/natf/practice.jsx":
/*!*****************************************!*\
  !*** ./webpack/react/natf/practice.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * NATF Practice
 *
 * Manages tracking and storing practice on an NATF board
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-20
 */
// Generic modules
var Events = __webpack_require__(/*! ../../generic/events.js */ "./webpack/generic/events.js");

var Loader = __webpack_require__(/*! ../../generic/loader.js */ "./webpack/generic/loader.js");

var Services = __webpack_require__(/*! ../../generic/services.js */ "./webpack/generic/services.js"); // Site modules


var Utils = __webpack_require__(/*! ../../utils.js */ "./webpack/utils.js"); // React components


var Modal = __webpack_require__(/*! ../elements/modal.jsx */ "./webpack/react/elements/modal.jsx");

var Board = __webpack_require__(/*! ./board.jsx */ "./webpack/react/natf/board.jsx"); // Practice Component


var Practice =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Practice, _React$Component);

  function Practice(props) {
    var _this;

    _classCallCheck(this, Practice);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Practice).call(this, props)); // Initialise the state

    _this.state = {
      "clutchAttempts": 0,
      "clutchHits": 0,
      "mode": null,
      "points": [],
      "showPoints": false,
      "thrower": props.thrower,
      "totalPoints": 0
    }; // Bind methods

    _this.modeSelect = _this.modeSelect.bind(_assertThisInitialized(_this));
    _this.overwrite = _this.overwrite.bind(_assertThisInitialized(_this));
    _this.points = _this.points.bind(_assertThisInitialized(_this));
    _this.pointsHide = _this.pointsHide.bind(_assertThisInitialized(_this));
    _this.pointsShow = _this.pointsShow.bind(_assertThisInitialized(_this));
    _this.reset = _this.reset.bind(_assertThisInitialized(_this));
    _this.save = _this.save.bind(_assertThisInitialized(_this));
    _this.signin = _this.signin.bind(_assertThisInitialized(_this));
    _this.signout = _this.signout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Practice, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any signin/signout events
      Events.add('signin', this.signin);
      Events.add('signout', this.signout); // If we have data in local storage

      if ('natf_practice' in localStorage) {
        var new_state = JSON.parse(localStorage['natf_practice']);
        new_state.thrower = this.state.thrower;
        this.setState(new_state, function () {
          if (this.state.mode == 'supernatural') {
            if (this.state.points.length % 5 == 4) {
              this.refs.board.clutchMode = 'expected';
            } else {
              this.refs.board.clutchMode = 'none';
            }
          } else if (this.state.mode == 'clutch') {
            this.refs.board.clutchMode = 'expected';
          } else {
            this.refs.board.clutchMode = 'select';
          }
        });
        delete localStorage['natf_practice'];
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any signin/signout events
      Events.remove('signin', this.signin);
      Events.remove('signout', this.signout); // If we have points, store them in local storage

      if (this.state.points.length) {
        localStorage['natf_practice'] = JSON.stringify(this.state);
      }
    }
  }, {
    key: "modeSelect",
    value: function modeSelect(ev) {
      this.setState({
        "mode": ev.currentTarget.dataset.mode
      }, function () {
        switch (this.state.mode) {
          case 'free':
            this.refs.board.clutchMode = 'select';
            break;

          case 'supernatural':
            this.refs.board.clutchMode = 'none';
            break;

          case 'clutch':
            this.refs.board.clutchMode = 'expected';
            break;
        }
      });
    }
  }, {
    key: "overwrite",
    value: function overwrite(ev) {
      this.setState({
        "overwrite": true
      }, function () {
        // If the mode is free
        if (this.state.mode == 'free') {
          this.refs.board.clutchMode = 'select';
        } // Else if the mode is supernatural
        else if (this.state.mode == 'supernatural') {
            // If we're divisible by 5
            if (this.state.points.length % 5 == 0) {
              this.refs.board.clutchMode = 'expected';
            } else {
              this.refs.board.clutchMode = 'none';
            }
          }
      });
    }
  }, {
    key: "points",
    value: function points(clutch, value) {
      // Get the int version of the value
      var v = parseInt(value); // If the overwrite flag is set

      if (this.state.overwrite) {
        // Grab the last value
        var last = this.state.points[this.state.points.length - 1]; // Backtrack the clutch stats

        if (last[0]) {
          this.state.clutchAttempts -= 1;

          if (last[1] == 7) {
            this.state.clutchHits -= 1;
          }
        } // Backtrack the points stats


        if (last[1] != 'd') {
          this.state.totalPoints -= last[1];
        } // Remove the last item


        this.state.points.pop();
      } // Add to the points list


      this.state.points.push([clutch, value == 'd' ? value : v]); // If we got a clutch attempt

      if (clutch) {
        this.state.clutchAttempts += 1;

        if (value == 7) {
          this.state.clutchHits += 1;
        }
      } // If we got a value


      if (v > 0) {
        this.state.totalPoints += v;
      }

      this.setState({
        "clutchAttempts": this.state.clutchAttempts,
        "clutchHits": this.state.clutchHits,
        "overwrite": false,
        "points": this.state.points,
        "totalPoints": this.state.totalPoints
      }, function () {
        if (this.state.mode == 'supernatural') {
          if (this.state.points.length % 5 == 4) {
            this.refs.board.clutchMode = 'expected';
          } else {
            this.refs.board.clutchMode = 'none';
          }
        }
      });
    }
  }, {
    key: "pointsHide",
    value: function pointsHide() {
      this.setState({
        "showPoints": false
      });
    }
  }, {
    key: "pointsShow",
    value: function pointsShow() {
      this.setState({
        "showPoints": true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this; // If we have points

      if (this.state.points.length) {
        // Init the last index
        var last = 28; // If we have less than 29

        if (this.state.points.length < 29) {
          last = this.state.points.length - 1;
        }
      }

      return React.createElement("div", {
        className: "natf"
      }, React.createElement("dl", {
        className: "select",
        style: {
          "display": self.state.mode == null ? 'block' : 'none'
        }
      }, React.createElement("dt", {
        "data-mode": "free",
        onClick: this.modeSelect
      }, "Free Practice"), React.createElement("dd", null, "In free practice any points are available at any time. You must select the clutch first if you wish to try for it."), React.createElement("dt", {
        "data-mode": "supernatural",
        onClick: this.modeSelect
      }, "Supernatural"), React.createElement("dd", null, "In supernatural practice every fifth throw is for clutch, and it will be pre-selected for you on those turns."), React.createElement("dt", {
        "data-mode": "clutch",
        onClick: this.modeSelect
      }, "Clutch"), React.createElement("dd", null, "In clutch practice every throw is for the clutch, and it will be pre-selected every turn.")), React.createElement("div", {
        style: {
          "display": self.state.mode == null ? 'none' : 'block'
        }
      }, React.createElement(Board, {
        ref: "board",
        clutchMode: self.state.mode,
        onPoints: self.points
      }), self.state.points.length > 0 && React.createElement(React.Fragment, null, React.createElement("div", {
        className: "averages"
      }, React.createElement("span", {
        className: "clutches fright"
      }, React.createElement("b", null, "Clutch %: "), React.createElement("span", null, self.state.clutchAttempts == 0 ? "0.0" : (self.state.clutchHits / self.state.clutchAttempts * 100.0).toFixed(1))), React.createElement("span", {
        className: "average fleft"
      }, React.createElement("b", null, "Avg Throw: "), React.createElement("span", null, (self.state.totalPoints / self.state.points.length).toFixed(2))), React.createElement("br", null)), React.createElement("div", {
        className: "points"
      }, self.state.points.length > 29 && React.createElement("span", {
        key: -1,
        className: "link bold",
        onClick: self.pointsShow
      }, "..."), self.state.points.slice(-29).map(function (p, i) {
        if (i == last) {
          return React.createElement("span", {
            key: i,
            className: "last " + (self.state.overwrite ? 'overwrite' : p[0] ? 'clutch' : ''),
            onClick: self.overwrite
          }, p[1]);
        } else {
          return React.createElement("span", {
            key: i,
            className: p[0] ? 'clutch' : ''
          }, p[1]);
        }
      }))), React.createElement("div", {
        className: "reset fright",
        onClick: self.reset
      }, "Reset"), this.state.thrower && this.state.points.length > 0 && React.createElement("div", {
        className: "save fleft",
        onClick: self.save
      }, "Save & Reset"), self.state.showPoints && React.createElement(Modal, {
        title: "All points this practice",
        close: self.pointsHide
      }, React.createElement("div", {
        className: "allPoints"
      }, self.state.points.map(function (p, i) {
        return React.createElement("span", {
          key: i,
          className: p[0] ? 'clutch' : ''
        }, p[1]);
      })))));
    }
  }, {
    key: "reset",
    value: function reset() {
      // Init the reset flag
      var reset = true; // If there's points

      if (this.state.points.length) {
        // Update the flag based on the user's response
        reset = confirm('Are you sure you want to reset your practice?');
      } // If we can reset


      if (reset) {
        this.setState({
          "clutchAttempts": 0,
          "clutchHits": 0,
          "mode": null,
          "points": [],
          "showPoints": false,
          "totalPoints": 0
        });
      }
    }
  }, {
    key: "save",
    value: function save(ev) {
      var _this2 = this;

      // Store this
      var self = this; // Show loader

      Loader.show(); // Send the practice to the NATF service

      Services.create('natf', 'practice', {
        "points": this.state.points
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Notify
          Events.trigger('success', 'Practice saved!'); // Reset

          _this2.setState({
            "clutchAttempts": 0,
            "clutchHits": 0,
            "mode": null,
            "points": [],
            "showPoints": false,
            "totalPoints": 0
          });
        }
      }).always(function () {
        // Hide loader
        Loader.hide();
      });
    }
  }, {
    key: "signin",
    value: function signin(thrower) {
      this.setState({
        "thrower": thrower
      });
    }
  }, {
    key: "signout",
    value: function signout() {
      this.setState({
        "thrower": false
      });
    }
  }]);

  return Practice;
}(React.Component); // Export the component


module.exports = Practice;

/***/ }),

/***/ "./webpack/react/natf/stats.jsx":
/*!**************************************!*\
  !*** ./webpack/react/natf/stats.jsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * NATF Stats
 *
 * Fetchs and displays NATF stats for practice and matches
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-25
 */
// Generic modules
var Events = __webpack_require__(/*! ../../generic/events.js */ "./webpack/generic/events.js");

var Loader = __webpack_require__(/*! ../../generic/loader.js */ "./webpack/generic/loader.js");

var Services = __webpack_require__(/*! ../../generic/services.js */ "./webpack/generic/services.js"); // Site modules


var Utils = __webpack_require__(/*! ../../utils.js */ "./webpack/utils.js"); // Components


var Modal = __webpack_require__(/*! ../elements/modal.jsx */ "./webpack/react/elements/modal.jsx"); // Stats component


var Stats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Stats, _React$Component);

  function Stats(props) {
    var _this;

    _classCallCheck(this, Stats);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stats).call(this, props)); // Initialise the state

    _this.state = {
      "match": null,
      "practice": null,
      "practice_all": false,
      "practice_data": false
    }; // Bind methods

    _this.matchStats = _this.matchStats.bind(_assertThisInitialized(_this));
    _this.practiceData = _this.practiceData.bind(_assertThisInitialized(_this));
    _this.practiceDataHide = _this.practiceDataHide.bind(_assertThisInitialized(_this));
    _this.practiceStats = _this.practiceStats.bind(_assertThisInitialized(_this));
    _this.practiceStatsAll = _this.practiceStatsAll.bind(_assertThisInitialized(_this));
    _this.signin = _this.signin.bind(_assertThisInitialized(_this));
    _this.signout = _this.signout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Stats, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track signin / signout
      Events.add('signin', this.signin);
      Events.add('signout', this.signout); // If someone is logged in

      if (this.state.thrower) {
        // Fetch the practice stats
        this.practiceStats(); // Fetch the match stats
        //this.matchStats();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking signin / signout
      Events.remove('signin', this.signin);
      Events.remove('signout', this.signout);
    }
  }, {
    key: "matchStats",
    value: function matchStats() {
      var _this2 = this;

      // Save this
      var self = this; // Show the loader

      Loader.show(); // Fetch the match stats

      Services.read('natf', 'match/stats', {}).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Add the stats to the state
          _this2.setState({
            "match": res.data
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "practiceData",
    value: function practiceData(ev) {
      var _this3 = this;

      // Save this
      var self = this; // Show the loader

      Loader.show(); // Fetch the practice data

      Services.read('natf', 'practice/data', {
        "id": ev.currentTarget.dataset.id
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Add the stats to the state
          _this3.setState({
            "practice_data": res.data
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "practiceDataHide",
    value: function practiceDataHide() {
      this.setState({
        "practice_data": false
      });
    }
  }, {
    key: "practiceStats",
    value: function practiceStats(all) {
      var _this4 = this;

      // If All is not passed
      if (typeof all == 'undefined') {
        all = false;
      } // Save this


      var self = this; // Show the loader

      Loader.show(); // Fetch the practice stats

      Services.read('natf', 'practice/stats', {
        "all": all
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Add the stats to the state
          _this4.setState({
            "practice": res.data,
            "practice_all": all
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "practiceStatsAll",
    value: function practiceStatsAll() {
      this.practiceStats(true);
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      var practice = this.state.practice;
      return React.createElement("div", {
        className: "natf"
      }, this.state.practice && React.createElement(React.Fragment, null, React.createElement("h2", null, "Practice"), React.createElement("table", {
        className: "practice"
      }, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", {
        rowSpan: "2",
        className: "date"
      }, " "), React.createElement("th", {
        rowSpan: "2",
        className: "points"
      }, "Points"), React.createElement("th", {
        rowSpan: "2",
        className: "throws"
      }, "Throws"), React.createElement("th", {
        rowSpan: "2",
        className: "drops"
      }, "Drops"), React.createElement("th", {
        colSpan: "2"
      }, "Average Points"), React.createElement("th", {
        colSpan: "3"
      }, "Hit Rates")), React.createElement("tr", null, React.createElement("th", {
        className: "average"
      }, "Total"), React.createElement("th", {
        className: "average"
      }, "Target"), React.createElement("th", {
        className: "rate"
      }, "Total"), React.createElement("th", {
        className: "rate"
      }, "Target"), React.createElement("th", {
        className: "rate"
      }, "Clutch"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "Overall"), React.createElement("td", null, practice.total.points.total), React.createElement("td", null, practice.total["throws"].attempts), React.createElement("td", null, practice.total["throws"].drops), React.createElement("td", null, practice.total.average.total), React.createElement("td", null, practice.total.average.target), React.createElement("td", null, practice.total.rate.total, "%"), React.createElement("td", null, practice.total.rate.target, "%"), React.createElement("td", null, practice.total.rate.clutch, "%")), practice.last.map(function (o, i) {
        return React.createElement("tr", {
          key: i,
          "data-id": o._id,
          className: "session",
          onClick: self.practiceData
        }, React.createElement("td", null, Utils.date(o._created)), React.createElement("td", null, o.points.total), React.createElement("td", null, o["throws"].attempts), React.createElement("td", null, o["throws"].drops), React.createElement("td", null, o.average.total), React.createElement("td", null, o.average.target), React.createElement("td", null, o.rate.total, "%"), React.createElement("td", null, o.rate.target, "%"), React.createElement("td", null, o.rate.clutch, "%"));
      }))), !this.state.practice_all && React.createElement("p", {
        className: "link",
        onClick: this.practiceStatsAll
      }, "Fetch All"), this.state.practice_data && React.createElement(Modal, {
        title: "Practice Data",
        close: self.practiceDataHide
      }, React.createElement("div", {
        className: "allPoints"
      }, self.state.practice_data.map(function (p, i) {
        return React.createElement("span", {
          key: i,
          className: p[0] ? 'clutch' : ''
        }, "" + p[1]);
      })))), this.state.match && React.createElement(React.Fragment, null));
    }
  }, {
    key: "signin",
    value: function signin(thrower) {
      // Set the thrower
      this.setState({
        "thrower": thrower
      }); // Fetch the practice stats

      this.practiceStats(); // Fetch the match stats
      //this.matchStats();
    }
  }, {
    key: "signout",
    value: function signout() {
      this.setState({
        "thrower": false
      });
    }
  }]);

  return Stats;
}(React.Component); // Export the component


module.exports = Stats;

/***/ }),

/***/ "./webpack/react/opponent.jsx":
/*!************************************!*\
  !*** ./webpack/react/opponent.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Opponent
 *
 * A component for selecting an opponent via favourites or search
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-27
 */
// Generic modules
var Events = __webpack_require__(/*! ../generic/events.js */ "./webpack/generic/events.js");

var Loader = __webpack_require__(/*! ../generic/loader.js */ "./webpack/generic/loader.js");

var Services = __webpack_require__(/*! ../generic/services.js */ "./webpack/generic/services.js"); // Site modules


var Utils = __webpack_require__(/*! ../utils.js */ "./webpack/utils.js"); // Elements


var InputEnter = __webpack_require__(/*! ./elements/inputEnter.jsx */ "./webpack/react/elements/inputEnter.jsx"); // Sort favourites


function aliasSort(a, b) {
  return a.alias.localeCompare(b.alias);
}

var OpponentRow =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OpponentRow, _React$Component);

  function OpponentRow(props) {
    var _this;

    _classCallCheck(this, OpponentRow);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(OpponentRow).call(this, props)); // Initialise the state

    _this.state = {
      "favourite": props.favourite,
      "thrower": props.thrower // Bind method

    };
    _this.add = _this.add.bind(_assertThisInitialized(_this));
    _this.remove = _this.remove.bind(_assertThisInitialized(_this));
    _this.selected = _this.selected.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(OpponentRow, [{
    key: "add",
    value: function add(ev) {
      // Stop any further events
      ev.stopPropagation(); // Store this

      var self = this; // Show the loader

      Loader.show(); // Call the service to add the favourite

      Services.create('auth', 'favourite', {
        "id": this.state.thrower._id
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          self.setState({
            "favourite": true
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "remove",
    value: function remove(ev) {
      // Stop any further events
      ev.stopPropagation(); // Store this

      var self = this; // Show the loader

      Loader.show(); // Call the service to add the favourite

      Services["delete"]('auth', 'favourite', {
        "id": this.state.thrower._id
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          self.setState({
            "favourite": false
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("tr", {
        onClick: this.selected
      }, React.createElement("td", null, this.state.thrower.alias), React.createElement("td", null, this.state.favourite ? React.createElement("i", {
        className: "fas fa-user-times",
        style: {
          color: "red"
        },
        onClick: this.remove
      }) : React.createElement("i", {
        className: "fas fa-user-plus",
        style: {
          color: "green"
        },
        onClick: this.add
      })));
    }
  }, {
    key: "selected",
    value: function selected(ev) {
      ev.stopPropagation();
      this.props.selected(this.state.thrower);
    }
  }]);

  return OpponentRow;
}(React.Component); // Opponent Component


var Opponent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Opponent, _React$Component2);

  function Opponent(props) {
    var _this2;

    _classCallCheck(this, Opponent);

    // Call the parent constructor
    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Opponent).call(this, props)); // Initialise the state

    _this2.state = {
      "favourites": [],
      "mode": "favourites",
      "search": [],
      "thrower": props.thrower
    }; // Bind methods

    _this2.favouriteShow = _this2.favouriteShow.bind(_assertThisInitialized(_this2));
    _this2.search = _this2.search.bind(_assertThisInitialized(_this2));
    _this2.searchShow = _this2.searchShow.bind(_assertThisInitialized(_this2));
    _this2.selected = _this2.selected.bind(_assertThisInitialized(_this2));
    _this2.signin = _this2.signin.bind(_assertThisInitialized(_this2));
    return _this2;
  }

  _createClass(Opponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      Events.add('signin', this.signin); // If someone is logged in

      if (this.state.thrower) {
        this.favourites();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Events.remove('signin', this.signin);
    }
  }, {
    key: "favourites",
    value: function favourites() {
      // Store this
      var self = this; // Show the loader

      Loader.show(); // Call the service to get the favourites

      Services.read('auth', 'favourites', {}).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Sort the data
          res.data.sort(aliasSort); // Store the favourites

          self.setState({
            "favourites": res.data
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "favouriteShow",
    value: function favouriteShow() {
      this.setState({
        "mode": "favourites"
      });
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement(React.Fragment, null, self.state.mode == 'favourites' ? React.createElement("div", {
        className: "acenter"
      }, React.createElement("span", null, "Favorites"), " | ", React.createElement("span", {
        className: "link",
        onClick: self.searchShow
      }, "Search")) : React.createElement(React.Fragment, null, React.createElement("div", {
        className: "acenter"
      }, React.createElement("span", {
        className: "link",
        onClick: self.favouriteShow
      }, "Favorites"), " | ", React.createElement("span", null, "Search")), React.createElement("div", {
        className: "form"
      }, React.createElement("p", null, React.createElement(InputEnter, {
        onEnter: self.search,
        placeholder: "Search by alias"
      })))), React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Alias"), React.createElement("th", null, "Favorite"))), React.createElement("tbody", null, self.state.mode == 'favourites' ? self.state.favourites.map(function (t, i) {
        return React.createElement(OpponentRow, {
          key: i,
          thrower: t,
          favourite: true,
          selected: self.selected
        });
      }) : self.state.search.map(function (t, i) {
        return React.createElement(OpponentRow, {
          key: i,
          thrower: t,
          favourite: false,
          selected: self.selected
        });
      }))));
    }
  }, {
    key: "search",
    value: function search(q) {
      // Store this
      var self = this; // Show the loader

      Loader.show(); // Call the service to get the search results

      Services.read('auth', 'search', {
        "q": q
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        } // If there's data


        if (res.data) {
          // Sort the data
          res.data.sort(aliasSort); // Store the favourites

          self.setState({
            "search": res.data
          });
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "searchShow",
    value: function searchShow() {
      this.setState({
        "mode": "search"
      });
    }
  }, {
    key: "selected",
    value: function selected(thrower) {
      if (typeof this.props.onSelect == 'function') {
        this.props.onSelect(thrower);
      }
    }
  }, {
    key: "signin",
    value: function signin(thrower) {
      this.favourites();
    }
  }]);

  return Opponent;
}(React.Component); // Export the component


module.exports = Opponent;

/***/ }),

/***/ "./webpack/react/practice.jsx":
/*!************************************!*\
  !*** ./webpack/react/practice.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Pracitce
 *
 * Manages Org menu for practice and display the appropriate one based on what
 * is chosen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-26
 */
// Generic modules
var Events = __webpack_require__(/*! ../generic/events.js */ "./webpack/generic/events.js");

var Hash = __webpack_require__(/*! ../generic/hash.js */ "./webpack/generic/hash.js"); // Generic components


var _require = __webpack_require__(/*! ./elements/menu.jsx */ "./webpack/react/elements/menu.jsx"),
    Menu = _require.Menu,
    Item = _require.Item; // Site components


var Natf = __webpack_require__(/*! ./natf/practice.jsx */ "./webpack/react/natf/practice.jsx"); // Practice component


var Practice =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Practice, _React$Component);

  function Practice(props) {
    var _this;

    _classCallCheck(this, Practice);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Practice).call(this, props)); // Initialise the state

    _this.state = {
      "org": Hash.get('org', 'natf')
    }; // Bind methods

    _this.orgChange = _this.orgChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Practice, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any org hash change events
      Hash.watch('org', this.orgChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any org hash change events
      Hash.unwatch('org', this.orgChange); // Remove the org from the hash

      Hash.set('org', null);
    }
  }, {
    key: "menuChange",
    value: function menuChange(org) {
      Hash.set('org', org);
    }
  }, {
    key: "orgChange",
    value: function orgChange(org) {
      if (org != this.state.org) {
        if (org == null) {
          org = 'natf';
        }

        this.setState({
          "org": org
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        id: "practice"
      }, React.createElement(Menu, {
        className: "menu secondary",
        selected: self.state.org,
        onChange: self.menuChange
      }, React.createElement(Item, {
        name: "natf"
      }, "NATF")), React.createElement("div", {
        id: "content"
      }, React.createElement("div", null, self.state.org == 'natf' && React.createElement(Natf, {
        thrower: self.props.thrower
      }))));
    }
  }]);

  return Practice;
}(React.Component); // Export the component


module.exports = Practice;

/***/ }),

/***/ "./webpack/react/site.jsx":
/*!********************************!*\
  !*** ./webpack/react/site.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Site
 *
 * Primary component for the entire site
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-20
 */
// Generic modules
var Events = __webpack_require__(/*! ../generic/events.js */ "./webpack/generic/events.js");

var Hash = __webpack_require__(/*! ../generic/hash.js */ "./webpack/generic/hash.js"); // Generic components


var _require = __webpack_require__(/*! ./elements/menu.jsx */ "./webpack/react/elements/menu.jsx"),
    Menu = _require.Menu,
    Item = _require.Item;

var Messages = __webpack_require__(/*! ./elements/messages.jsx */ "./webpack/react/elements/messages.jsx");

var Popups = __webpack_require__(/*! ./elements/popups.jsx */ "./webpack/react/elements/popups.jsx"); // Site components


var Header = __webpack_require__(/*! ./header.jsx */ "./webpack/react/header.jsx");

var Match = __webpack_require__(/*! ./match.jsx */ "./webpack/react/match.jsx");

var Practice = __webpack_require__(/*! ./practice.jsx */ "./webpack/react/practice.jsx");

var Stats = __webpack_require__(/*! ./stats.jsx */ "./webpack/react/stats.jsx"); // Site component


var Site =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Site, _React$Component);

  function Site(props) {
    var _this;

    _classCallCheck(this, Site);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Site).call(this, props)); // Init the hash module and watch for page changes

    Hash.init();
    Hash.watch('page', _this.hashChange.bind(_assertThisInitialized(_this))); // Track any signin/signout events

    Events.add('signin', _this.signin.bind(_assertThisInitialized(_this)));
    Events.add('signout', _this.signout.bind(_assertThisInitialized(_this))); // Initialise the state

    _this.state = {
      "page": Hash.get('page', 'home'),
      "thrower": false
    }; // Bind methods

    _this.pageChange = _this.pageChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Site, [{
    key: "hashChange",
    value: function hashChange(page) {
      // If the page has changed
      if (page != this.state.page) {
        this.setState({
          "page": page ? page : "home"
        });
        this.refs.menu.selected = page;
      }
    }
  }, {
    key: "pageChange",
    value: function pageChange(name) {
      Hash.set("page", name);
    }
  }, {
    key: "render",
    value: function render() {
      var self = this; // Stupid react

      var items = [
      /*<Item key={0} name="games">Games</Item>,*/
      React.createElement(Item, {
        key: 1,
        name: "practice"
      }, "Practice")];

      if (this.state.thrower) {
        items.push(React.createElement(Item, {
          key: 2,
          name: "match"
        }, "Match")); //items.push(<Item key={3} name="league">League</Item>);

        items.push(React.createElement(Item, {
          key: 4,
          name: "stats"
        }, "Stats"));
      }

      return React.createElement("div", {
        id: "site"
      }, React.createElement(Header, null), React.createElement(Menu, {
        ref: "menu",
        className: "menu primary",
        selected: self.state.page,
        onChange: self.pageChange
      }, items), self.state.page == 'home' && React.createElement("div", {
        className: "content"
      }, React.createElement("div", null, React.createElement("dl", {
        id: "home"
      }, React.createElement("dt", null, "v1.1.0"), React.createElement("dd", null, React.createElement("ul", {
        className: "fa-ul"
      }, React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "Can now fetch all practice stats instead of just the last five."), React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "Clicking on any row in stats will bring up all throws in that practice session."), React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "Fixed a bug that didn't allow you to sign up with an e-mail."), React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "Fixed a bug that caused sign in not to be recognised after sign up."))), React.createElement("dt", null, "v1.0.0"), React.createElement("dd", null, React.createElement("ul", {
        className: "fa-ul"
      }, React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "NATF practice is available, no sign in required."), React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "With an account you can save your practice session and keep track of your over all progress in the Stats menu.")))))), self.state.page == 'practice' && React.createElement(Practice, {
        thrower: self.state.thrower
      }), self.state.page == 'match' && React.createElement(Match, {
        thrower: self.state.thrower
      }), self.state.page == 'stats' && React.createElement(Stats, null), React.createElement(Popups, null), React.createElement(Messages, null));
    }
  }, {
    key: "signin",
    value: function signin(thrower) {
      this.setState({
        "thrower": thrower
      });
    }
  }, {
    key: "signout",
    value: function signout() {
      // If the page needs to be signed in
      if (['practice'].indexOf(this.state.page) == -1) {
        Hash.set('page', null);
      } // Remove the thrower flag


      this.setState({
        "thrower": false
      });
    }
  }]);

  return Site;
}(React.Component); // Export the component


module.exports = Site;

/***/ }),

/***/ "./webpack/react/stats.jsx":
/*!*********************************!*\
  !*** ./webpack/react/stats.jsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Stats
 *
 * Manages Org menu for stats and display the appropriate one based on what
 * is chosen
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-26
 */
// Generic modules
var Events = __webpack_require__(/*! ../generic/events.js */ "./webpack/generic/events.js");

var Hash = __webpack_require__(/*! ../generic/hash.js */ "./webpack/generic/hash.js"); // Generic components


var _require = __webpack_require__(/*! ./elements/menu.jsx */ "./webpack/react/elements/menu.jsx"),
    Menu = _require.Menu,
    Item = _require.Item; // Site components


var Natf = __webpack_require__(/*! ./natf/stats.jsx */ "./webpack/react/natf/stats.jsx"); // Stats component


var Stats =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Stats, _React$Component);

  function Stats(props) {
    var _this;

    _classCallCheck(this, Stats);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Stats).call(this, props)); // Initialise the state

    _this.state = {
      "org": Hash.get('org', 'natf')
    }; // Bind methods

    _this.orgChange = _this.orgChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Stats, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Track any org hash change events
      Hash.watch('org', this.orgChange);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Stop tracking any org hash change events
      Hash.unwatch('org', this.orgChange); // Remove the org from the hash

      Hash.set('org', null);
    }
  }, {
    key: "menuChange",
    value: function menuChange(org) {
      Hash.set('org', org);
    }
  }, {
    key: "orgChange",
    value: function orgChange(org) {
      if (org != this.state.org) {
        if (org == null) {
          org = 'natf';
        }

        this.setState({
          "org": org
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        id: "stats"
      }, React.createElement(Menu, {
        className: "menu secondary",
        selected: self.state.org,
        onChange: self.menuChange
      }, React.createElement(Item, {
        name: "natf"
      }, "NATF")), React.createElement("div", {
        id: "content"
      }, React.createElement("div", null, self.state.org == 'natf' && React.createElement(Natf, {
        thrower: self.props.thrower
      }))));
    }
  }]);

  return Stats;
}(React.Component); // Export the component


module.exports = Stats;

/***/ }),

/***/ "./webpack/react/thrower.jsx":
/*!***********************************!*\
  !*** ./webpack/react/thrower.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Thrower
 *
 * Manages editing details for the currently logged in thrower
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-25
 */
// Generic modules
var Events = __webpack_require__(/*! ../generic/events.js */ "./webpack/generic/events.js"); // Thrower component


var Thrower =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Thrower, _React$Component);

  function Thrower(props) {
    var _this;

    _classCallCheck(this, Thrower);

    // Call the parent constructor
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Thrower).call(this, props)); // Initialise the state

    _this.state = {};
    return _this;
  }

  _createClass(Thrower, [{
    key: "render",
    value: function render() {
      return React.createElement("div", null);
    }
  }]);

  return Thrower;
}(React.Component); // Export the component


module.exports = Thrower;

/***/ }),

/***/ "./webpack/requests.js":
/*!*****************************!*\
  !*** ./webpack/requests.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Requests
 *
 * Manages match requests
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-31
 */
// Generic
var Events = __webpack_require__(/*! ./generic/events.js */ "./webpack/generic/events.js");

var Hash = __webpack_require__(/*! ./generic/hash.js */ "./webpack/generic/hash.js");

var Loader = __webpack_require__(/*! ./generic/loader.js */ "./webpack/generic/loader.js");

var Services = __webpack_require__(/*! ./generic/services.js */ "./webpack/generic/services.js"); // Site specific


var TwoWay = __webpack_require__(/*! ./twoway.js */ "./webpack/twoway.js");

var Utils = __webpack_require__(/*! ./utils.js */ "./webpack/utils.js"); // Signed in thrower


__thrower = null; // Pending requests

__pending = [];
/**
 * Init
 *
 * Initialises the module by tracking any sign in / sign out events
 *
 * @name _init
 * @return void
 */

function _init() {
  // Get notified of any change in thrower
  Events.add('signin', _signin);
  Events.add('signout', _signout);
}
/**
 * Pending
 *
 * Fetches pending requests
 *
 * @name _pending
 * @return void
 */


function _pending() {
  // Show the loader
  Loader.show(); // Fetch the requests

  Services.read('auth', 'match/requests', {}).done(function (res) {
    // If there's an error
    if (res.error && !Utils.serviceError(res.error)) {
      Events.trigger('error', JSON.stringify(res.error));
    } // If there's a warning


    if (res.warning) {
      Events.trigger('warning', JSON.stringify(res.warning));
    } // If there's data


    if (res.data) {
      _pendingProcess(res.data);
    }
  }).always(function () {
    Loader.hide();
  });
}
/**
 * Pending Process
 *
 * Processes any pending requests that are returned from the server
 *
 * @name _pendingProcess
 * @return void
 */


function _pendingProcess(requests) {
  // Store the pending requests
  __pending = requests; // Go through each in which the thrower is the opponent

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = __pending['opponent'][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var o = _step.value;
      // Add a new message
      Events.trigger('message', o._id, {
        "text": "You have an " + o.org + " match request from " + o.alias + ". Do you want to start this match now?",
        "buttons": [{
          "title": "Decline",
          "callback": _requestDecline
        }, {
          "title": "Accept",
          "callback": _requestAccept
        }]
      });
    } // Go through each in which the thrower is the initiator

  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = __pending['initiator'][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var o = _step2.value;
      // Add a new message
      Events.trigger('message', o._id, {
        "text": "You initiated an " + o.org + " match with " + o.alias + ". Do you want to wait for this match to start?",
        "buttons": [{
          "title": "Delete",
          "callback": _requestDelete
        }, {
          "title": "Wait",
          "callback": _requestWait
        }]
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }
}
/**
 * Request Accept
 *
 * Called when a match request is accepted by the opponent
 *
 * @name _requestAccept
 * @return bool
 */


function _requestAccept(id) {
  // Let the server know the match was accepted
  Services.update('auth', 'match/request', {
    "id": id
  }).done(function (res) {
    // If there's an error
    if (res.error && !Utils.serviceError(res.error)) {
      Events.trigger('error', JSON.stringify(res.error));
    } // If there's a warning


    if (res.warning) {
      Events.trigger('warning', JSON.stringify(res.warning));
    } // If there's data


    if (res.data) {
      // Find the pending match, store it, then remove it from pending
      var req = null;

      for (var i in __pending['opponent']) {
        if (__pending['opponent'][i]._id == id) {
          req = __pending['opponent'][i];

          __pending['opponent'].splice(i, 1);
        }
      }

      Hash.set({
        "page": "match",
        "org": req.org.toLowerCase(),
        "id": "m|" + res.data + "|" + req.alias
      });
    }
  }); // Return true, assume the request was accepted

  return true;
}
/**
 * Request Decline
 *
 * Called when a match request is declined by the opponent
 *
 * @name _requestDecline
 * @return bool
 */


function _requestDecline(id) {
  // Let the server know the match was declined
  Services["delete"]('auth', 'match/request', {
    "id": id
  }).done(function (res) {
    // If there's an error
    if (res.error && !Utils.serviceError(res.error)) {
      Events.trigger('error', JSON.stringify(res.error));
    } // If there's a warning


    if (res.warning) {
      Events.trigger('warning', JSON.stringify(res.warning));
    } // If there's data


    if (res.data) {
      // Delete the request from the pending
      for (var i in __pending['opponent']) {
        if (__pending['opponent'][i]._id == id) {
          __pending['opponent'].splice(i, 1);
        }
      }
    }
  }); // Return true, assume the request was deleted

  return true;
}
/**
 * Request Delete
 *
 * Called when a match request is deleted by the initiator
 *
 * @name _requestDelete
 * @return bool
 */


function _requestDelete(id) {
  // Let the server know we are removing our request
  Services["delete"]('auth', 'match/request', {
    "id": id
  }).done(function (res) {
    // If there's an error
    if (res.error && !Utils.serviceError(res.error)) {
      Events.trigger('error', JSON.stringify(res.error));
    } // If there's a warning


    if (res.warning) {
      Events.trigger('warning', JSON.stringify(res.warning));
    } // If there's data


    if (res.data) {
      // Delete the request from the pending
      for (var i in __pending['initiator']) {
        if (__pending['initiator'][i]._id == id) {
          __pending['initiator'].splice(i, 1);
        }
      }
    }
  }); // Return true, assume the request was deleted

  return true;
}
/**
 * Request New
 *
 * Called when the thrower recieves a new match request
 *
 * @name _requestNew
 * @param object msg
 * @return void
 */


function _requestNew(msg) {
  // If this is a new request
  if (msg.type == 'match_request') {
    // Add it to the pending
    __pending['opponent'].push(msg); // Add a new message


    Events.trigger('message', msg._id, {
      "text": "You have an " + msg.org + " match request from " + msg.alias + ". Do you want to start this match now?",
      "buttons": [{
        "title": "Decline",
        "callback": _requestDecline
      }, {
        "title": "Accept",
        "callback": _requestAccept
      }]
    });
  } // Else if we need to delete
  else if (msg.type == "match_request_delete") {
      // Delete the request from the pending
      for (var i in __pending['opponent']) {
        if (__pending['opponent'][i]._id == msg.id) {
          __pending['opponent'].splice(i, 1);
        }
      } // Remove the message


      Events.trigger('message_remove', msg.id);
    }
}
/**
 * Request Wait
 *
 * Called when the initiator of a match request has chosen to wait for it
 *
 * @name _requestWait
 * @return bool
 */


function _requestWait(id) {
  // Find the pending match, store it, then remove it from pending
  var req = null;

  for (var i in __pending['initiator']) {
    if (__pending['initiator'][i]._id == id) {
      req = __pending['initiator'][i];
    }
  } // Change the page and store the request info


  Hash.set({
    "page": "match",
    "org": req.org.toLowerCase(),
    "id": "r|" + req._id + '|' + req.alias
  }); // Return OK

  return true;
}
/**
 * Signin
 *
 * Called when the user signs in (or was already signed in). Fetches pending
 * requests and starts tracking any new requests
 *
 * @name _signin
 * @return void
 */


function _signin(thrower) {
  // Store the thrower
  __thrower = thrower._id; // Fetch the pending requests

  _pending(); // Track any new requests


  TwoWay.track('auth', 'requests-' + __thrower, _requestNew);
}
/**
 * Signout
 *
 * Called when the user signs out or is signed out. Removes all messages and
 * stops tracking requests
 *
 * @name _signout
 * @return void
 */


function _signout() {
  // Delete all messages
  for (var o in __pending) {
    Events.trigger('message_remove', o._id);
  } // Stop tracking the thrower


  TwoWay.untrack('auth', 'requests-' + __thrower, _requestNew);
} // Export the module


module.exports = {
  "init": _init
};

/***/ }),

/***/ "./webpack/twoway.js":
/*!***************************!*\
  !*** ./webpack/twoway.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Two Way
 *
 * Allows clients to connect to the backend via websocket so events can be
 * tracked in real time
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-29
 */
// Generic modules
var Services = __webpack_require__(/*! ./generic/services.js */ "./webpack/generic/services.js");

var Tools = __webpack_require__(/*! ./generic/tools.js */ "./webpack/generic/tools.js");

var WSHelper = __webpack_require__(/*! ./generic/websocket.js */ "./webpack/generic/websocket.js"); // The ping timer


var __ping = null; // The valid close flag

var __close = false; // The websocket

var __socket = null;
/**
 * The service callbacks
 *
 * will contain a string for the service / key with callbacks for those keys,
 * e.g. {
 *	"service1": {
 *		"key1": [function1, function2],
 *		"key2": [function3]
 *	},
 *	"service2": {
 *		"key3": [function4]
 *	}
 * }
 */

var __services = {};
/**
 * Add Track
 *
 * Adds tracking for a specific service key
 *
 * @name _addTrack
 * @param string service
 * @param string key
 * @param function callback
 * @return void
 */

function _addTrack(service, key, callback) {
  // If we don't have the service, add it
  if (!(service in __services)) {
    __services[service] = {};
  } // If we don't have the key for the given service, add the list with
  //	the callback


  if (!(key in __services[service])) {
    __services[service][key] = [callback];
  } // Else, add the callback, to the given service/key
  else {
      __services[service][key].push(callback);
    }
}
/**
 * Handle Close
 *
 * Checks if it's a legitimate closed socket, or if we need to reconnect to
 * everything
 *
 * @name _handleClose
 * @return void
 */


function _handleClose() {
  // If it's a valid close
  if (__close) {
    __socket = null;
  } // Else, wait 5 seconds, and reopen the socket
  else {
      setTimeout(_openSocket, 5000);
    }
}
/**
 * Handle Messages
 *
 * Recieves messages from websockets and directs the data to the appropriate
 * callback
 *
 * @name _handleMessage
 * @param WebSocket sock		The socket the message came on
 * @param MessageEvent ev		The event message received
 * @return void
 */


function _handleMessage(sock, ev) {
  // If it's pong
  if (ev.data == 'pong') {
    return;
  } // Screw you javascript


  var r = new FileReader();
  r.addEventListener("loadend", function () {
    // Parse the data
    oMsg = JSON.parse(r.result); // If we have the service

    if (oMsg.service in __services) {
      // If we have the key
      if (oMsg.key in __services[oMsg.service]) {
        // Call each callback
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = __services[oMsg.service][oMsg.key][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var f = _step.value;
            f(oMsg.data);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  });
  r.readAsText(ev.data);
}
/**
 * Open Socket
 *
 * Opens a new websocket by first sending a message to webpoll to start the
 * authentication handshake, then making the connection, and finally sending
 * all the track messages stored
 *
 * @name _openSocket
 * @param
 * @return void
 */


function _openSocket() {
  // Notify the backend of a new ws connection
  Services.read('webpoll', 'websocket', {}).done(function (res) {
    // Create the websocket
    __socket = WSHelper('wss://' + window.location.hostname + '/ws', {
      "open": function open(sock) {
        // Reset the close flag
        __close = false; // Init the message list

        lMsgs = []; // Add the connect message

        lMsgs.push({
          "_type": "connect",
          "key": res.data
        }); // Add each track message

        for (var s in __services) {
          for (var k in __services[s]) {
            lMsgs.push({
              "_type": "track",
              "service": s,
              "key": k
            });
          }
        } // Send the messages


        sock.send(JSON.stringify(lMsgs));
      },
      "message": _handleMessage,
      "close": _handleClose
    }); // If we haven't already setup the ping interval

    if (__ping == null) {
      __ping = setInterval(_ping, 300000);
    }
  });
}
/**
 * Ping
 *
 * Send a ping to keep the socket alive
 *
 * @name _ping
 * @return void
 */


function _ping() {
  // Send a ping message over the socket to keep it alive
  __socket.send(JSON.stringify({
    "_type": "ping"
  }));
}
/**
 * Track
 *
 * Takes a URL and an event type and a) opens a new websocket or uses an
 * existing one, then b) sends a tracking message through the websocket so the
 * backend knowsn to send the key type to us
 *
 * @name _track
 * @param string service		The name of the service the key is associated with
 * @param string key			The key to track
 * @param function callback		The callback for any messages of the key value
 * @return void
 */


function _track(service, key, callback) {
  // Add the tracking callback
  _addTrack(service, key, callback); // If we have no socket


  if (!__socket) {
    // If it's null
    if (__socket == null) {
      // Set socket to false so we don't try to re-open
      __socket = false; // Open a new one

      _openSocket();
    }
  } // Else if it's open
  else if (__socket.readyState == 1) {
      // Send the tracking message through the websocket
      __socket.send(JSON.stringify({
        "_type": "track",
        "service": service,
        "key": key
      }));
    } // If we have no socket, or it's opening, then upon opening all servives/
  //	keys in the tracking list will be sent as messages

}
/**
 * Untrack
 *
 * Removes a callback and notifies the websocket we are not tracking anymore
 *
 * @name _untrack
 * @param string service		The name of the service the key is associated with
 * @param string key			The key to untrack
 * @param function callback		The callback associated with the track
 * @return bool
 */


function _untrack(service, key, callback) {
  // If we have the service
  if (service in __services) {
    // If we have the key
    if (key in __services[service]) {
      // Go through each callback
      for (var i = 0; i < __services[service][key].length; ++i) {
        // If the callback matches
        if (callback == __services[service][key][i]) {
          // Remove the callback
          __services[service][key].splice(i, 1); // If we have no more callbacks


          if (__services[service][key].length == 0) {
            // Notify the websocket we aren't tracking the key
            //	anymore
            __socket.send(JSON.stringify({
              "_type": "untrack",
              "service": service,
              "key": key
            })); // Remove the key


            delete __services[service][key]; // If we have no more keys in the service

            if (Tools.empty(__services[service])) {
              // Remove the service
              delete __services[service]; // If there's no more services

              if (Tools.empty(__services)) {
                // Turn off the ping interval
                clearInterval(__ping);
                __ping = null; // Close the socket

                __close = true;

                __socket.close(1000, 'nothing else to track');
              }
            }
          } // Callback found and removed


          return true;
        }
      }
    }
  } // Callback not found


  return false;
} // export the module


module.exports = {
  "track": _track,
  "untrack": _untrack
};

/***/ }),

/***/ "./webpack/utils.js":
/*!**************************!*\
  !*** ./webpack/utils.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Utils
 *
 * Shared utilities
 *
 * @author Chris Nasr
 * @copyright OuroborosCoding
 * @created 2019-03-24
 */
// Generic modules
var Events = __webpack_require__(/*! ./generic/events.js */ "./webpack/generic/events.js");
/**
 * Utils
 */


var Utils = {
  date: function date(ts) {
    var d = new Date(ts * 1000);
    var Y = '' + d.getFullYear();
    var M = '' + (d.getMonth() + 1);
    if (M.length == 1) M = '0' + M;
    var D = '' + d.getDate();
    if (D.length == 1) D = '0' + D;
    return Y + '/' + M + '/' + D;
  },
  errorTree: function errorTree(errors) {
    // Init the return
    var oRet = {}; // Go through each error

    for (var i = 0; i < errors.length; ++i) {
      // If the error field has a period
      if (errors[i][0].includes('.')) {
        // Split it
        lField = errors[i][0].split(/\.(.*)/); // If we don't have the field already

        if (!oRet[lField[0]]) {
          oRet[lField[0]] = [];
        } // Add the rest


        oRet[lField[0]].push([lField[1], errors[i][1]]);
      } // Else it's a flat field
      else {
          oRet[errors[i][0]] = errors[i][1];
        }
    } // Go through all the errors we found


    for (var k in oRet) {
      // If we find an array
      if (Array.isArray(oRet[k])) {
        // Recurse
        oRet[k] = Utils.errorTree(oRet[k]);
      }
    } // Return the Tree


    return oRet;
  },
  serviceError: function serviceError(err) {
    // What error is it?
    switch (err.code) {
      // No Session
      case 102:
        // Trigger signout
        Events.trigger("signout"); // Nothing else to do

        return true;
      // Invalid fields

      case 1001:
        // Rebuild the error message
        err.msg = Utils.errorTree(err.msg); // But allow the child to deal with the messages themselves

        return false;
    } // Failed to process error


    return false;
  } // Export the module

};
module.exports = Utils;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLzNyZC9qcXVlcnkuYWpheC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9oYXNoLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9nZW5lcmljL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvd2Vic29ja2V0LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9iYXNlL2Zvcm1zLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L2VsZW1lbnRzL2lucHV0RW50ZXIuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvbWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tZXNzYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9wb3B1cHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L21hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvYm9hcmQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvbmF0Zi9tYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9uYXRmL3ByYWN0aWNlLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvc3RhdHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvb3Bwb25lbnQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvcHJhY3RpY2UuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvc2l0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9zdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC90aHJvd2VyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdHdvd2F5LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdXRpbHMuanMiXSwibmFtZXMiOlsiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImMiLCJkIiwic2xpY2UiLCJlIiwiY29uY2F0IiwiZiIsInB1c2giLCJnIiwiaW5kZXhPZiIsImgiLCJpIiwidG9TdHJpbmciLCJqIiwiaGFzT3duUHJvcGVydHkiLCJrIiwibCIsIm0iLCJuIiwiZm4iLCJpbml0IiwibyIsInAiLCJxIiwiciIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiY29udGV4dCIsImVhY2giLCJtYXAiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsInBhcnNlRmxvYXQiLCJub2RlVHlwZSIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiZXZhbCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhbWVsQ2FzZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJzIiwibWFrZUFycmF5IiwiT2JqZWN0IiwiaW5BcnJheSIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsInNwbGl0IiwidCIsImRvY3VtZW50RWxlbWVudCIsInUiLCJ2IiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInciLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwiZmluZCIsIm1hdGNoZXNTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bmlxdWUiLCJ0ZXh0Q29udGVudCIsIm5vZGVWYWx1ZSIsImlzWE1MRG9jIiwib3duZXJEb2N1bWVudCIsImV4cHIiLCJhdHRySGFuZGxlIiwibWF0Y2giLCJib29sIiwibmVlZHNDb250ZXh0IiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIngiLCJ5IiwieiIsIkEiLCJ0ZXN0IiwiZmlsdGVyIiwibm90IiwiaXMiLCJCIiwiQyIsIkQiLCJleGVjIiwicGFyc2VIVE1MIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWFkeSIsIkUiLCJGIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsIm5leHQiLCJwcmV2IiwiZGlyIiwic2libGluZyIsIm5leHRTaWJsaW5nIiwiaGFzIiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJHIiwicGFyZW50IiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImZpcnN0Q2hpbGQiLCJjb250ZW50RG9jdW1lbnQiLCJjaGlsZE5vZGVzIiwicmV2ZXJzZSIsIkgiLCJJIiwiSiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJtZW1vcnkiLCJzdG9wT25GYWxzZSIsInNoaWZ0IiwiZGlzYWJsZSIsInJlbW92ZSIsImVtcHR5IiwiZGlzYWJsZWQiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInBpcGUiLCJ3aGVuIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiSyIsInJlYWR5V2FpdCIsImhvbGRSZWFkeSIsInRyaWdnZXJIYW5kbGVyIiwib2ZmIiwiTCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNIiwiYWNjZXNzIiwiYWNjZXB0RGF0YSIsIk4iLCJkZWZpbmVQcm9wZXJ0eSIsImNhY2hlIiwidWlkIiwiYWNjZXB0cyIsImtleSIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsImhhc0RhdGEiLCJkaXNjYXJkIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJwYXJzZUpTT04iLCJkYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJhdHRyaWJ1dGVzIiwibmFtZSIsInF1ZXVlIiwiZGVxdWV1ZSIsIl9xdWV1ZUhvb2tzIiwidW5zaGlmdCIsInN0b3AiLCJjbGVhclF1ZXVlIiwiVCIsInNvdXJjZSIsIlUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2V0QXR0cmlidXRlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsImxhc3RDaGlsZCIsImNoZWNrZWQiLCJpbm5lckhUTUwiLCJub0Nsb25lQ2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsIlYiLCJmb2N1c2luQnViYmxlcyIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFiIiwiYWN0aXZlRWxlbWVudCIsImV2ZW50IiwiZ2xvYmFsIiwiaGFuZGxlciIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJqb2luIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwiUmVnRXhwIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsInRyaWdnZXIiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsInJlc3VsdCIsInRhcmdldCIsIm5vQnViYmxlIiwiZGVmYXVsdFZpZXciLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2RlZmF1bHQiLCJwb3AiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbSIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaGFuZGxlT2JqIiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwiYnV0dG9uIiwicHJvcHMiLCJmaXhIb29rcyIsImtleUhvb2tzIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJtb3VzZUhvb2tzIiwicGFnZVgiLCJjbGllbnRYIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibG9hZCIsImZvY3VzIiwiYmx1ciIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwib3JpZ2luYWxFdmVudCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInJlbGF0ZWRUYXJnZXQiLCJvbiIsIm9uZSIsImJiIiwiY2IiLCJkYiIsImViIiwiZmIiLCJnYiIsImhiIiwiaWIiLCJqYiIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwia2IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxiIiwibWIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuYiIsIm9iIiwicGIiLCJxYiIsImNsb25lIiwiYnVpbGRGcmFnbWVudCIsImNyZWF0ZVRleHROb2RlIiwiY2xlYW5EYXRhIiwiYXBwZW5kIiwiZG9tTWFuaXAiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJzcmMiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiZGVsYXkiLCJmeCIsInNwZWVkcyIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInNlbGVjdGVkIiwib3B0RGlzYWJsZWQiLCJyYWRpb1ZhbHVlIiwicmIiLCJzYiIsInRiIiwicmVtb3ZlQXR0ciIsInByb3AiLCJhdHRySG9va3MiLCJwcm9wRml4IiwidWIiLCJyZW1vdmVQcm9wIiwicHJvcEhvb2tzIiwidGFiSW5kZXgiLCJoYXNBdHRyaWJ1dGUiLCJocmVmIiwic2VsZWN0ZWRJbmRleCIsInZiIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJ3YiIsInZhbCIsInZhbEhvb2tzIiwic2VsZWN0Iiwib3B0aW9ucyIsImhvdmVyIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsInhiIiwieWIiLCJKU09OIiwicGFyc2UiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsImxvY2F0aW9uIiwiTGIiLCJNYiIsIk5iIiwiZGF0YVR5cGVzIiwiT2IiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsIlBiIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJRYiIsInJlc3BvbnNlRmllbGRzIiwiZGF0YUZpbHRlciIsImRhdGFUeXBlIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJ4bWwiLCJqc29uIiwiU3RyaW5nIiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4Iiwic3RhdHVzQ29kZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwic3RhdHVzIiwiYWJvcnQiLCJjb21wbGV0ZSIsInN1Y2Nlc3MiLCJtZXRob2QiLCJjcm9zc0RvbWFpbiIsInBhcmFtIiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwicmVqZWN0V2l0aCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJSYiIsIlNiIiwiVGIiLCJVYiIsIlZiIiwiV2IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiWGIiLCJZYiIsIlpiIiwiJGIiLCJBY3RpdmVYT2JqZWN0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsInJlc3BvbnNlVGV4dCIsInNjcmlwdCIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiX2IiLCJhYyIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImJjIiwiZGVmaW5lIiwiY2MiLCJqUXVlcnkiLCJkYyIsIm5vQ29uZmxpY3QiLCJDb29raWVzIiwiZGVmYXVsdF8iLCJvQ29va2llcyIsImxDb29raWVzIiwiY29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG9tYWluIiwicGF0aCIsImV4cGlyZXMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiX2NhbGxiYWNrcyIsImNhbGxiYWNrIiwiYXJncyIsImVyciIsImNvbnNvbGUiLCJUb29scyIsInJlcXVpcmUiLCJfaGFzaCIsIl9uYW1lUkUiLCJfd2F0Y2hlcyIsIl9jaGVja1dhdGNoZXMiLCJvbGQiLCJfaGFzaENoYW5nZWQiLCJfcGFyc2VIYXNoIiwiaGFzaCIsInJlZ2V4IiwiZmllbGQiLCJzdWJzdHJpbmciLCJIYXNoIiwiaXNPYmplY3QiLCJ0ZW1wIiwiX2NvdW50IiwiX2VsIiwiaGlkZSIsInN0eWxlIiwiZGlzcGxheSIsInNob3ciLCJfZG9tYWluIiwiX2Vycm9yIiwiX2NsZWFyIiwibG9jYWxTdG9yYWdlIiwiaG9zdG5hbWUiLCJfcmVxdWVzdCIsIm9Db25maWciLCJzZXR0aW5ncyIsIl91cmwiLCJzdHJpbmdpZnkiLCJfc3RvcmUiLCJ0b2tlbiIsIl9zdWNjZXNzIiwicmVzIiwiU2VydmljZXMiLCJzdWJkb21haW4iLCJzZXNzaW9uIiwic2VydmljZSIsIm5vdW4iLCJjb21wYXJlIiwidjEiLCJ2MiIsImtleXMiLCJpc0RlY2ltYWwiLCJpc0ludGVnZXIiLCJvbWFwIiwicmV0IiwidXVpZHY0IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsImNvbmYiLCJvU29jayIsIldlYlNvY2tldCIsIm9ub3BlbiIsImxvZyIsIm9ubWVzc2FnZSIsImV2Iiwib25jbG9zZSIsIkV2ZW50cyIsIkxvYWRlciIsIlJlcXVlc3RzIiwiU2l0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUmVhY3QiLCJyZWFkIiwiRVJST1JfQ0xBU1MiLCJfYWRkQ2xhc3MiLCJlbCIsIm5hbWVzIiwiX3JlbW92ZUNsYXNzIiwiaW5jbHVkZXMiLCJfQmFzZU5vZGUiLCJlcnJvcnMiLCJyZWZzIiwiUHVyZUNvbXBvbmVudCIsIkFycmF5Tm9kZSIsIk5vZGUiLCJtc2ciLCJ2YWx1ZVNldCIsIlBhcmVudCIsImVycm9yQWRkIiwiZXJyb3JSZW1vdmUiLCJlcnJvckZvY3VzIiwiZWxlbWVudHMiLCJGb3JtcyIsIklucHV0RW50ZXIiLCJvbkVudGVyIiwia2V5UHJlc3MiLCJvbktleVByZXNzIiwicmVzdCIsIk1lbnUiLCJvbkNoYW5nZSIsIml0ZW1DbGljayIsInNlbGYiLCJzZXRTdGF0ZSIsIkNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVuZGVyQ2hpbGRyZW4iLCJJdGVtIiwiX2luc3RhbmNlIiwiTWVzc2FnZSIsImJ1dHRvbnMiLCJkYXRhc2V0IiwiaWQiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIk1lc3NhZ2VzIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwibXNncyIsIk1vZGFsIiwiY2xvc2UiLCJidXR0b25DbGljayIsInRyYXBFc2NhcGUiLCJidG4iLCJzdHlsZXMiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwiU1VDQ0VTU19USU1FT1VUIiwiRVJST1JfVElNRU9VVCIsIldBUk5JTkdfVElNRU9VVCIsIlNURVBfVElNRU9VVCIsIldJRFRIX1NURVBTIiwiSEVJR0hUX1NURVBTIiwiTUFSR0lOIiwiUG9wdXBzIiwicG9wdXBzIiwidGltZXIiLCJwb3B1cCIsInByb2Nlc3MiLCJ3YXJuaW5nIiwic3RlcCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaWNvbiIsImlUaW1lb3V0Iiwic0ljb24iLCJ3YXJuIiwiVGhyb3dlciIsIlV0aWxzIiwiSGVhZGVyIiwiYWNjb3VudFNob3ciLCJob21lIiwic2lnbmluIiwic2lnbmluU2hvdyIsInNpZ25pblRyaWdnZXIiLCJzaWdub3V0Iiwic2lnbm91dFRyaWdnZXIiLCJzaWdudXAiLCJzaWdudXBTaG93IiwibW9kYWwiLCJ0aHJvd2VyIiwiYWxpYXMiLCJjcmVhdGUiLCJwYXNzd2QiLCJzZXJ2aWNlRXJyb3IiLCJjb2RlIiwic2lnbnVwX2FsaWFzIiwic2lnbnVwX3Bhc3N3ZCIsInJlcGVhdF9wYXNzd2QiLCJvRGF0YSIsImVtYWlsIiwiX2lkIiwiTmF0ZiIsIk1hdGNoIiwib3JnQ2hhbmdlIiwid2F0Y2giLCJ1bndhdGNoIiwib3JnIiwibWVudUNoYW5nZSIsIkJvYXJkIiwib25Qb2ludHMiLCJjbHV0Y2hNb2RlIiwiY2x1dGNoQ2xpY2siLCJkcm9wQ2xpY2siLCJwb2ludENsaWNrIiwicmVzZXRDbHV0Y2giLCJjbGFzc05hbWVzIiwibW9kZSIsIlR3b1dheSIsIk9wcG9uZW50IiwiZXhpc3RpbmdDb250aW51ZSIsImV4aXN0aW5nRGVsZXRlIiwiaWRDYWxsYmFjayIsIm1hdGNoQ2FsbGJhY2siLCJvdmVyd3JpdGUiLCJwb2ludHMiLCJyZXF1ZXN0Q2FsbGJhY2siLCJyZXF1ZXN0Q2FuY2VsIiwicmVxdWVzdENyZWF0ZSIsImluaXRpYXRvciIsImJpZ2F4ZSIsImdhbWVzIiwiZ2FtZSIsImZpbmlzaGVkIiwiZXhpc3RpbmdGZXRjaCIsInVudHJhY2siLCJleGlzdGluZ1JlbW92ZSIsImV4aXN0aW5nIiwidHJhY2siLCJjYWxjdWxhdGVNYXRjaFN0YXRlIiwibXMiLCJtYXRjaFN0YXRlIiwiYm9hcmQiLCJjbHV0Y2giLCJ1cGRhdGUiLCJwYXJzZUludCIsIm9wcG9uZW50IiwicmVuZGVyT3ZlcmFsbCIsInJlbmRlckJpZ0F4ZSIsInJlbmRlckdhbWUiLCJzTyIsInJlbmRlckdhbWVUaHJvdyIsImdhbWVGaW5pc2giLCJvUG9pbnRzIiwiaUciLCJyZXF1ZXN0UmVzZXQiLCJQcmFjdGljZSIsIm1vZGVTZWxlY3QiLCJwb2ludHNIaWRlIiwicG9pbnRzU2hvdyIsInJlc2V0Iiwic2F2ZSIsIm5ld19zdGF0ZSIsImNsdXRjaEF0dGVtcHRzIiwiY2x1dGNoSGl0cyIsInRvdGFsUG9pbnRzIiwidG9GaXhlZCIsInNob3dQb2ludHMiLCJjb25maXJtIiwiU3RhdHMiLCJtYXRjaFN0YXRzIiwicHJhY3RpY2VEYXRhIiwicHJhY3RpY2VEYXRhSGlkZSIsInByYWN0aWNlU3RhdHMiLCJwcmFjdGljZVN0YXRzQWxsIiwiYWxsIiwicHJhY3RpY2UiLCJ0b3RhbCIsImF0dGVtcHRzIiwiZHJvcHMiLCJhdmVyYWdlIiwicmF0ZSIsImRhdGUiLCJfY3JlYXRlZCIsInByYWN0aWNlX2FsbCIsInByYWN0aWNlX2RhdGEiLCJhbGlhc1NvcnQiLCJsb2NhbGVDb21wYXJlIiwiT3Bwb25lbnRSb3ciLCJmYXZvdXJpdGUiLCJjb2xvciIsImZhdm91cml0ZVNob3ciLCJzZWFyY2giLCJzZWFyY2hTaG93IiwiZmF2b3VyaXRlcyIsIm9uU2VsZWN0IiwiaGFzaENoYW5nZSIsInBhZ2VDaGFuZ2UiLCJwYWdlIiwibWVudSIsIml0ZW1zIiwiX190aHJvd2VyIiwiX19wZW5kaW5nIiwiX2luaXQiLCJfc2lnbmluIiwiX3NpZ25vdXQiLCJfcGVuZGluZyIsIl9wZW5kaW5nUHJvY2VzcyIsInJlcXVlc3RzIiwiX3JlcXVlc3REZWNsaW5lIiwiX3JlcXVlc3RBY2NlcHQiLCJfcmVxdWVzdERlbGV0ZSIsIl9yZXF1ZXN0V2FpdCIsInJlcSIsIl9yZXF1ZXN0TmV3IiwiV1NIZWxwZXIiLCJfX3BpbmciLCJfX2Nsb3NlIiwiX19zb2NrZXQiLCJfX3NlcnZpY2VzIiwiX2FkZFRyYWNrIiwiX2hhbmRsZUNsb3NlIiwiX29wZW5Tb2NrZXQiLCJfaGFuZGxlTWVzc2FnZSIsInNvY2siLCJGaWxlUmVhZGVyIiwib01zZyIsInJlYWRBc1RleHQiLCJsTXNncyIsInNldEludGVydmFsIiwiX3BpbmciLCJfdHJhY2siLCJfdW50cmFjayIsImNsZWFySW50ZXJ2YWwiLCJ0cyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZXJyb3JUcmVlIiwib1JldCIsImxGaWVsZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFD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QixLQUFLLENBQUNnSyxTQUFOLENBQWdCQyxJQUFJLENBQUM1MEIsQ0FBRCxDQUFwQixDQUFWO0FBQ0E7QUFDRCxLQXRDMEIsQ0F3QzNCOzs7QUFDQSxXQUFPNDBCLElBQVA7QUFDQSxHQXREVTtBQXdEWGpKLGNBQVksRUFBRSxzQkFBUzFLLEdBQVQsRUFBYztBQUUzQjtBQUNBLFlBQU9BLEdBQUcsQ0FBQzJLLElBQVg7QUFFQztBQUNBLFdBQUssR0FBTDtBQUVDO0FBQ0E1RyxjQUFNLENBQUMvVSxPQUFQLENBQWUsU0FBZixFQUhELENBS0M7O0FBQ0EsZUFBTyxJQUFQO0FBRUQ7O0FBQ0EsV0FBSyxJQUFMO0FBRUM7QUFDQWdSLFdBQUcsQ0FBQ21GLEdBQUosR0FBVXVFLEtBQUssQ0FBQ2dLLFNBQU4sQ0FBZ0IxVCxHQUFHLENBQUNtRixHQUFwQixDQUFWLENBSEQsQ0FLQzs7QUFDQSxlQUFPLEtBQVA7QUFsQkYsS0FIMkIsQ0F3QjNCOzs7QUFDQSxXQUFPLEtBQVA7QUFDQSxHQWxGVSxDQXFGWjs7QUFyRlksQ0FBWjtBQXNGQXZuQixNQUFNLENBQUNDLE9BQVAsR0FBaUI2ckIsS0FBakIsQyIsImZpbGUiOiIuLi9ob3N0cy9zdGF0aWMvanMvc2l0ZS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnBhY2svaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKiEgalF1ZXJ5IHYyLjEuMSAtY3NzLC1jc3MvYWRkR2V0SG9va0lmLC1jc3MvY3VyQ1NTLC1jc3MvZGVmYXVsdERpc3BsYXksLWNzcy9oaWRkZW5WaXNpYmxlU2VsZWN0b3JzLC1jc3Mvc3VwcG9ydCwtY3NzL3N3YXAsLWNzcy92YXIvY3NzRXhwYW5kLC1jc3MvdmFyL2dldFN0eWxlcywtY3NzL3Zhci9pc0hpZGRlbiwtY3NzL3Zhci9ybWFyZ2luLC1jc3MvdmFyL3JudW1ub25weCwtZWZmZWN0cywtZWZmZWN0cy9Ud2VlbiwtZWZmZWN0cy9hbmltYXRlZFNlbGVjdG9yLC1kaW1lbnNpb25zLC1vZmZzZXQsLWRlcHJlY2F0ZWQsLWV2ZW50LWFsaWFzLC13cmFwIHwgKGMpIDIwMDUsIDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9Yy5zbGljZSxlPWMuY29uY2F0LGY9Yy5wdXNoLGc9Yy5pbmRleE9mLGg9e30saT1oLnRvU3RyaW5nLGo9aC5oYXNPd25Qcm9wZXJ0eSxrPXt9LGw9YS5kb2N1bWVudCxtPVwiMi4xLjEgLWNzcywtY3NzL2FkZEdldEhvb2tJZiwtY3NzL2N1ckNTUywtY3NzL2RlZmF1bHREaXNwbGF5LC1jc3MvaGlkZGVuVmlzaWJsZVNlbGVjdG9ycywtY3NzL3N1cHBvcnQsLWNzcy9zd2FwLC1jc3MvdmFyL2Nzc0V4cGFuZCwtY3NzL3Zhci9nZXRTdHlsZXMsLWNzcy92YXIvaXNIaWRkZW4sLWNzcy92YXIvcm1hcmdpbiwtY3NzL3Zhci9ybnVtbm9ucHgsLWVmZmVjdHMsLWVmZmVjdHMvVHdlZW4sLWVmZmVjdHMvYW5pbWF0ZWRTZWxlY3RvciwtZGltZW5zaW9ucywtb2Zmc2V0LC1kZXByZWNhdGVkLC1ldmVudC1hbGlhcywtd3JhcFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZC5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmVhY2godGhpcyxhLGIpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6Zixzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0FycmF5KGEpJiZhLXBhcnNlRmxvYXQoYSk+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKT8hMTphLmNvbnN0cnVjdG9yJiYhai5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKT8hMTohMH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9oW2kuY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1sLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsbC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPTAsZj1hLmxlbmd0aCxnPXMoYSk7aWYoYyl7aWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgaWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zi5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmcuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxmPTAsZz1hLmxlbmd0aCxoPXMoYSksaT1bXTtpZihoKWZvcig7Zz5mO2YrKylkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtlbHNlIGZvcihmIGluIGEpZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7cmV0dXJuIGUuYXBwbHkoW10saSl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGU9ZC5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxlLmNvbmNhdChkLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDprfSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2hbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9YS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMToxPT09YS5ub2RlVHlwZSYmYj8hMDpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9YS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdSx2PXQubWF0Y2hlc3x8dC53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fHQubW96TWF0Y2hlc1NlbGVjdG9yfHx0Lm9NYXRjaGVzU2VsZWN0b3J8fHQubXNNYXRjaGVzU2VsZWN0b3Isdz1mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiB1PSEwLDA7dmFyIGM9Yi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKTtyZXR1cm4gYz8xJmM/YT09PWx8fG4uY29udGFpbnMobCxhKT8tMTpiPT09bHx8bi5jb250YWlucyhsLGIpPzE6MDo0JmM/LTE6MTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPy0xOjF9O24uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz0wO2lmKGM9Y3x8W10sYj1ifHxsLCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gYztpZigxIT09KGY9Yi5ub2RlVHlwZSkmJjkhPT1mKXJldHVybltdO2lmKGQpd2hpbGUoZT1kW2crK10pbi5maW5kLm1hdGNoZXNTZWxlY3RvcihlLGEpJiZjLnB1c2goZSk7ZWxzZSBuLm1lcmdlKGMsYi5xdWVyeVNlbGVjdG9yQWxsKGEpKTtyZXR1cm4gY30sdW5pcXVlOmZ1bmN0aW9uKGEpe3ZhciBiLGM9W10sZD0wLGU9MDtpZih1PSExLGEuc29ydCh3KSx1KXt3aGlsZShiPWFbZCsrXSliPT09YVtkXSYmKGU9Yy5wdXNoKGQpKTt3aGlsZShlLS0pYS5zcGxpY2UoY1tlXSwxKX1yZXR1cm4gYX0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGU9YS5ub2RlVHlwZTtpZihlKXtpZigxPT09ZXx8OT09PWV8fDExPT09ZSlyZXR1cm4gYS50ZXh0Q29udGVudDtpZigzPT09ZXx8ND09PWUpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9bi50ZXh0KGIpO3JldHVybiBjfSxjb250YWluczpmdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IWMuY29udGFpbnMoZCkpfSxpc1hNTERvYzpmdW5jdGlvbihhKXtyZXR1cm5cIkhUTUxcIiE9PShhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZX0sZXhwcjp7YXR0ckhhbmRsZTp7fSxtYXRjaDp7Ym9vbDovXig/OmNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkKSQvaSxuZWVkc0NvbnRleHQ6L15bXFx4MjBcXHRcXHJcXG5cXGZdKls+K35dL319fSksbi5leHRlbmQobi5maW5kLHttYXRjaGVzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZmluZChhLG51bGwsbnVsbCxiKX0sbWF0Y2hlc1NlbGVjdG9yOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHYuY2FsbChhLGIpfSxhdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKGIpfX0pO3ZhciB4PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQseT0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sej0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gQShhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHoudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGcuY2FsbChiLGEpPj0wIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEEodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEEodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIUEodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmeC50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgQixDPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEQ9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZDtpZighYSlyZXR1cm4gdGhpcztpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoYz1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpDLmV4ZWMoYSksIWN8fCFjWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8QikuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoY1sxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGNbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6bCwhMCkpLHkudGVzdChjWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihjIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbY10pP3RoaXNbY10oYltjXSk6dGhpcy5hdHRyKGMsYltjXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGQ9bC5nZXRFbGVtZW50QnlJZChjWzJdKSxkJiZkLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZCksdGhpcy5jb250ZXh0PWwsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEIucmVhZHk/Qi5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtELnByb3RvdHlwZT1uLmZuLEI9bihsKTt2YXIgRT0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxGPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZXh0ZW5kKHtkaXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSxzaWJsaW5nOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfX0pLG4uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9eC50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWUoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2cuY2FsbChuKGEpLHRoaXNbMF0pOmcuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWUobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRyhhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRyhhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEZbYV18fG4udW5pcXVlKGUpLEUudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBIPS9cXFMrL2csST17fTtmdW5jdGlvbiBKKGEpe3ZhciBiPUlbYV09e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEgpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/SVthXXx8SihhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmLGcsaD1bXSxpPSFhLm9uY2UmJltdLGo9ZnVuY3Rpb24obCl7Zm9yKGI9YS5tZW1vcnkmJmwsYz0hMCxnPWV8fDAsZT0wLGY9aC5sZW5ndGgsZD0hMDtoJiZmPmc7ZysrKWlmKGhbZ10uYXBwbHkobFswXSxsWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlKXtiPSExO2JyZWFrfWQ9ITEsaCYmKGk/aS5sZW5ndGgmJmooaS5zaGlmdCgpKTpiP2g9W106ay5kaXNhYmxlKCkpfSxrPXthZGQ6ZnVuY3Rpb24oKXtpZihoKXt2YXIgYz1oLmxlbmd0aDshZnVuY3Rpb24gZyhiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe3ZhciBkPW4udHlwZShjKTtcImZ1bmN0aW9uXCI9PT1kP2EudW5pcXVlJiZrLmhhcyhjKXx8aC5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ZCYmZyhjKX0pfShhcmd1bWVudHMpLGQ/Zj1oLmxlbmd0aDpiJiYoZT1jLGooYikpfXJldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaCYmbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGgsYykpPi0xKWguc3BsaWNlKGMsMSksZCYmKGY+PWMmJmYtLSxnPj1jJiZnLS0pfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGgpPi0xOiEoIWh8fCFoLmxlbmd0aCl9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGg9W10sZj0wLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gaD1pPWI9dm9pZCAwLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWh9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaT12b2lkIDAsYnx8ay5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWl9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIWh8fGMmJiFpfHwoYj1ifHxbXSxiPVthLGIuc2xpY2U/Yi5zbGljZSgpOmJdLGQ/aS5wdXNoKGIpOmooYikpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gay5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWN9fTtyZXR1cm4ga30sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpLnByb2dyZXNzKGMubm90aWZ5KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZC5jYWxsKGFyZ3VtZW50cyksZT1jLmxlbmd0aCxmPTEhPT1lfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9lOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZSl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2QuY2FsbChhcmd1bWVudHMpOmUsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihlPjEpZm9yKGk9bmV3IEFycmF5KGUpLGo9bmV3IEFycmF5KGUpLGs9bmV3IEFycmF5KGUpO2U+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCkucHJvZ3Jlc3MoaChiLGosaSkpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBLO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChLLnJlc29sdmVXaXRoKGwsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihsKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4obCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gTCgpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixMLCExKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsTCwhMSksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gS3x8KEs9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWwucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KG4ucmVhZHkpOihsLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsTCwhMSksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEwsITEpKSksSy5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgTT1uLmFjY2Vzcz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYyluLmFjY2VzcyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfTtuLmFjY2VwdERhdGE9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBOKCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY2FjaGU9e30sMCx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue319fSksdGhpcy5leHBhbmRvPW4uZXhwYW5kbytNYXRoLnJhbmRvbSgpfU4udWlkPTEsTi5hY2NlcHRzPW4uYWNjZXB0RGF0YSxOLnByb3RvdHlwZT17a2V5OmZ1bmN0aW9uKGEpe2lmKCFOLmFjY2VwdHMoYSkpcmV0dXJuIDA7dmFyIGI9e30sYz1hW3RoaXMuZXhwYW5kb107aWYoIWMpe2M9Ti51aWQrKzt0cnl7Ylt0aGlzLmV4cGFuZG9dPXt2YWx1ZTpjfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLGIpfWNhdGNoKGQpe2JbdGhpcy5leHBhbmRvXT1jLG4uZXh0ZW5kKGEsYil9fXJldHVybiB0aGlzLmNhY2hlW2NdfHwodGhpcy5jYWNoZVtjXT17fSksY30sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMua2V5KGEpLGY9dGhpcy5jYWNoZVtlXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYilmW2JdPWM7ZWxzZSBpZihuLmlzRW1wdHlPYmplY3QoZikpbi5leHRlbmQodGhpcy5jYWNoZVtlXSxiKTtlbHNlIGZvcihkIGluIGIpZltkXT1iW2RdO3JldHVybiBmfSxnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNhY2hlW3RoaXMua2V5KGEpXTtyZXR1cm4gdm9pZCAwPT09Yj9jOmNbYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpcy5rZXkoYSksZz10aGlzLmNhY2hlW2ZdO2lmKHZvaWQgMD09PWIpdGhpcy5jYWNoZVtmXT17fTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBnP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZz9bZF06ZC5tYXRjaChIKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZ1tkW2NdXX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNFbXB0eU9iamVjdCh0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV18fHt9KX0sZGlzY2FyZDpmdW5jdGlvbihhKXthW3RoaXMuZXhwYW5kb10mJmRlbGV0ZSB0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV19fTt2YXIgTz1uZXcgTixQPW5ldyBOLFE9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFI9LyhbQS1aXSkvZztmdW5jdGlvbiBTKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoUixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOlEudGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31QLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gUC5oYXNEYXRhKGEpfHxPLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBQLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtQLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE8uYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtPLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9UC5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFPLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUyhmLGQsZVtkXSkpKTtPLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe1Auc2V0KHRoaXMsYSl9KTpNKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZD1uLmNhbWVsQ2FzZShhKTtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVAuZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVAuZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVMoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPVAuZ2V0KHRoaXMsZCk7UC5zZXQodGhpcyxkLGIpLC0xIT09YS5pbmRleE9mKFwiLVwiKSYmdm9pZCAwIT09YyYmUC5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1AucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPU8uZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1PLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBPLmdldChhLGMpfHxPLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Ty5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Ty5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgVD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaTshZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGsuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixrLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIFY9XCJ1bmRlZmluZWRcIjtrLmZvY3VzaW5CdWJibGVzPVwib25mb2N1c2luXCJpbiBhO3ZhciBXPS9ea2V5LyxYPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFk9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFo9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gJCgpe3JldHVybiEwfWZ1bmN0aW9uIF8oKXtyZXR1cm4hMX1mdW5jdGlvbiBhYigpe3RyeXtyZXR1cm4gbC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1PLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuIHR5cGVvZiBuIT09ViYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goSCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPVouZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYobD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGs9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW29dKXx8KG09aVtvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobyxnLCExKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG4uZXZlbnQuZ2xvYmFsW29dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1PLmhhc0RhdGEoYSkmJk8uZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goSCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPVouZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWlbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUgaVtvXSl9ZWxzZSBmb3IobyBpbiBpKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGkpJiYoZGVsZXRlIHIuaGFuZGxlLE8ucmVtb3ZlKGEsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZixnLGgsaSxrLG0sbyxwPVtkfHxsXSxxPWouY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWouY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihnPWg9ZD1kfHxsLDMhPT1kLm5vZGVUeXBlJiY4IT09ZC5ub2RlVHlwZSYmIVkudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+PTAmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxrPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1lPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIubmFtZXNwYWNlX3JlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWQpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxlfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZCxjKSE9PSExKSl7aWYoIWUmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhkKSl7Zm9yKGk9by5kZWxlZ2F0ZVR5cGV8fHEsWS50ZXN0KGkrcSl8fChnPWcucGFyZW50Tm9kZSk7ZztnPWcucGFyZW50Tm9kZSlwLnB1c2goZyksaD1nO2g9PT0oZC5vd25lckRvY3VtZW50fHxsKSYmcC5wdXNoKGguZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93fHxhKX1mPTA7d2hpbGUoKGc9cFtmKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zj4xP2k6by5iaW5kVHlwZXx8cSxtPShPLmdldChnLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTy5nZXQoZyxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGcsYyksbT1rJiZnW2tdLG0mJm0uYXBwbHkmJm4uYWNjZXB0RGF0YShnKSYmKGIucmVzdWx0PW0uYXBwbHkoZyxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxlfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxvLl9kZWZhdWx0JiZvLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IW4uYWNjZXB0RGF0YShkKXx8ayYmbi5pc0Z1bmN0aW9uKGRbcV0pJiYhbi5pc1dpbmRvdyhkKSYmKGg9ZFtrXSxoJiYoZFtrXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGRbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaCYmKGRba109aCkpLGIucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGUsZixnLGg9W10saT1kLmNhbGwoYXJndW1lbnRzKSxqPShPLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghYS5uYW1lc3BhY2VfcmV8fGEubmFtZXNwYWNlX3JlLnRlc3QoZy5uYW1lc3BhY2UpKSYmKGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxlPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYS5yZXN1bHQ9ZSk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoIWEuYnV0dG9ufHxcImNsaWNrXCIhPT1hLnR5cGUpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPj0wOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8bCxkPWMuZG9jdW1lbnRFbGVtZW50LGU9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhkJiZkLnNjcm9sbExlZnR8fGUmJmUuc2Nyb2xsTGVmdHx8MCktKGQmJmQuY2xpZW50TGVmdHx8ZSYmZS5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZCYmZC5zY3JvbGxUb3B8fGUmJmUuc2Nyb2xsVG9wfHwwKS0oZCYmZC5jbGllbnRUb3B8fGUmJmUuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Znx8KGEud2hpY2g9MSZmPzE6MiZmPzM6NCZmPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxkLGU9YS50eXBlLGY9YSxnPXRoaXMuZml4SG9va3NbZV07Z3x8KHRoaXMuZml4SG9va3NbZV09Zz1YLnRlc3QoZSk/dGhpcy5tb3VzZUhvb2tzOlcudGVzdChlKT90aGlzLmtleUhvb2tzOnt9KSxkPWcucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoZy5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGYpLGI9ZC5sZW5ndGg7d2hpbGUoYi0tKWM9ZFtiXSxhW2NdPWZbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9bCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksZy5maWx0ZXI/Zy5maWx0ZXIoYSxmKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PWFiKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PWFiKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtkP24uZXZlbnQudHJpZ2dlcihlLG51bGwsYik6bi5ldmVudC5kaXNwYXRjaC5jYWxsKGIsZSksZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/JDpfKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDpfLGlzUHJvcGFnYXRpb25TdG9wcGVkOl8saXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6XyxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0kLGEmJmEucHJldmVudERlZmF1bHQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9JCxhJiZhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9JCxhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4oIWV8fGUhPT1kJiYhbi5jb250YWlucyhkLGUpKSYmKGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksay5mb2N1c2luQnViYmxlc3x8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSksITApfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ty5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxPLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU8uYWNjZXNzKGQsYiktMTtlP08uYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTy5yZW1vdmUoZCxiKSl9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGc7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1jfHxiLGI9dm9pZCAwKTtmb3IoZyBpbiBhKXRoaXMub24oZyxiLGMsYVtnXSxlKTtyZXR1cm4gdGhpc31pZihudWxsPT1jJiZudWxsPT1kPyhkPWIsYz1iPXZvaWQgMCk6bnVsbD09ZCYmKFwic3RyaW5nXCI9PXR5cGVvZiBiPyhkPWMsYz12b2lkIDApOihkPWMsYz1iLGI9dm9pZCAwKSksZD09PSExKWQ9XztlbHNlIGlmKCFkKXJldHVybiB0aGlzO3JldHVybiAxPT09ZSYmKGY9ZCxkPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGYuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxkLmd1aWQ9Zi5ndWlkfHwoZi5ndWlkPW4uZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxhLGQsYyxiKX0pfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGI9PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9XyksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KTt2YXIgYmI9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGNiPS88KFtcXHc6XSspLyxkYj0vPHwmIz9cXHcrOy8sZWI9LzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxmYj0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGdiPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksaGI9L150cnVlXFwvKC4qKS8saWI9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLGpiPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07amIub3B0Z3JvdXA9amIub3B0aW9uLGpiLnRib2R5PWpiLnRmb290PWpiLmNvbGdyb3VwPWpiLmNhcHRpb249amIudGhlYWQsamIudGg9amIudGQ7ZnVuY3Rpb24ga2IoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24gbGIoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gbWIoYSl7dmFyIGI9aGIuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIG5iKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKU8uc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fE8uZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBvYihhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKE8uaGFzRGF0YShhKSYmKGY9Ty5hY2Nlc3MoYSksZz1PLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9UC5oYXNEYXRhKGEpJiYoaD1QLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLFAuc2V0KGIsaSkpfX1mdW5jdGlvbiBwYihhLGIpe3ZhciBjPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6YS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIHFiKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJlUudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6KFwiaW5wdXRcIj09PWN8fFwidGV4dGFyZWFcIj09PWMpJiYoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfW4uZXh0ZW5kKHtjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGsubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPXBiKGgpLGY9cGIoYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylxYihmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxwYihhKSxnPWd8fHBiKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspb2IoZltkXSxnW2RdKTtlbHNlIG9iKGEsaCk7cmV0dXJuIGc9cGIoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZuYihnLCFpJiZwYihhLFwic2NyaXB0XCIpKSxofSxidWlsZEZyYWdtZW50OmZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZSxmLGcsaCxpLGosaz1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxsPVtdLG09MCxvPWEubGVuZ3RoO28+bTttKyspaWYoZT1hW21dLGV8fDA9PT1lKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZSkpbi5tZXJnZShsLGUubm9kZVR5cGU/W2VdOmUpO2Vsc2UgaWYoZGIudGVzdChlKSl7Zj1mfHxrLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksZz0oY2IuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaD1qYltnXXx8amIuX2RlZmF1bHQsZi5pbm5lckhUTUw9aFsxXStlLnJlcGxhY2UoYmIsXCI8JDE+PC8kMj5cIikraFsyXSxqPWhbMF07d2hpbGUoai0tKWY9Zi5sYXN0Q2hpbGQ7bi5tZXJnZShsLGYuY2hpbGROb2RlcyksZj1rLmZpcnN0Q2hpbGQsZi50ZXh0Q29udGVudD1cIlwifWVsc2UgbC5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZSkpO2sudGV4dENvbnRlbnQ9XCJcIixtPTA7d2hpbGUoZT1sW20rK10paWYoKCFkfHwtMT09PW4uaW5BcnJheShlLGQpKSYmKGk9bi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSksZj1wYihrLmFwcGVuZENoaWxkKGUpLFwic2NyaXB0XCIpLGkmJm5iKGYpLGMpKXtqPTA7d2hpbGUoZT1mW2orK10pZ2IudGVzdChlLnR5cGV8fFwiXCIpJiZjLnB1c2goZSl9cmV0dXJuIGt9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGUsZj1uLmV2ZW50LnNwZWNpYWwsZz0wO3ZvaWQgMCE9PShjPWFbZ10pO2crKyl7aWYobi5hY2NlcHREYXRhKGMpJiYoZT1jW08uZXhwYW5kb10sZSYmKGI9Ty5jYWNoZVtlXSkpKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cylmW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO08uY2FjaGVbZV0mJmRlbGV0ZSBPLmNhY2hlW2VdfWRlbGV0ZSBQLmNhY2hlW2NbUC5leHBhbmRvXV19fX0pLG4uZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBNKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWtiKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9a2IodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD1hP24uZmlsdGVyKGEsdGhpcyk6dGhpcyxlPTA7bnVsbCE9KGM9ZFtlXSk7ZSsrKWJ8fDEhPT1jLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShwYihjKSksYy5wYXJlbnROb2RlJiYoYiYmbi5jb250YWlucyhjLm93bmVyRG9jdW1lbnQsYykmJm5iKHBiKGMsXCJzY3JpcHRcIikpLGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShwYihhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBNKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhZWIudGVzdChhKSYmIWpiWyhjYi5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9YS5yZXBsYWNlKGJiLFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKHBiKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdO3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthPXRoaXMucGFyZW50Tm9kZSxuLmNsZWFuRGF0YShwYih0aGlzKSksYSYmYS5yZXBsYWNlQ2hpbGQoYix0aGlzKX0pLGEmJihhLmxlbmd0aHx8YS5ub2RlVHlwZSk/dGhpczp0aGlzLnJlbW92ZSgpfSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlKGEsITApfSxkb21NYW5pcDpmdW5jdGlvbihhLGIpe2E9ZS5hcHBseShbXSxhKTt2YXIgYyxkLGYsZyxoLGksaj0wLGw9dGhpcy5sZW5ndGgsbT10aGlzLG89bC0xLHA9YVswXSxxPW4uaXNGdW5jdGlvbihwKTtpZihxfHxsPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBwJiYhay5jaGVja0Nsb25lJiZmYi50ZXN0KHApKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9bS5lcShjKTtxJiYoYVswXT1wLmNhbGwodGhpcyxjLGQuaHRtbCgpKSksZC5kb21NYW5pcChhLGIpfSk7aWYobCYmKGM9bi5idWlsZEZyYWdtZW50KGEsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGQ9Yy5maXJzdENoaWxkLDE9PT1jLmNoaWxkTm9kZXMubGVuZ3RoJiYoYz1kKSxkKSl7Zm9yKGY9bi5tYXAocGIoYyxcInNjcmlwdFwiKSxsYiksZz1mLmxlbmd0aDtsPmo7aisrKWg9YyxqIT09byYmKGg9bi5jbG9uZShoLCEwLCEwKSxnJiZuLm1lcmdlKGYscGIoaCxcInNjcmlwdFwiKSkpLGIuY2FsbCh0aGlzW2pdLGgsaik7XG5pZihnKWZvcihpPWZbZi5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChmLG1iKSxqPTA7Zz5qO2orKyloPWZbal0sZ2IudGVzdChoLnR5cGV8fFwiXCIpJiYhTy5hY2Nlc3MoaCxcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoaSxoKSYmKGguc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoaC5zcmMpOm4uZ2xvYmFsRXZhbChoLnRleHRDb250ZW50LnJlcGxhY2UoaWIsXCJcIikpKX1yZXR1cm4gdGhpc319KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxnPWUubGVuZ3RoLTEsaD0wO2c+PWg7aCsrKWM9aD09PWc/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGYuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSksbi5mbi5kZWxheT1mdW5jdGlvbihhLGIpe3JldHVybiBhPW4uZng/bi5meC5zcGVlZHNbYV18fGE6YSxiPWJ8fFwiZnhcIix0aGlzLnF1ZXVlKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1zZXRUaW1lb3V0KGIsYSk7Yy5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9bC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsay5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGsub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGsub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsay5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgcmIsc2IsdGI9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTSh0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoYSYmMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gdHlwZW9mIGEuZ2V0QXR0cmlidXRlPT09Vj9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGQ9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP3NiOnJiKSksdm9pZCAwPT09Yz9kJiZcImdldFwiaW4gZCYmbnVsbCE9PShlPWQuZ2V0KGEsYikpP2U6KGU9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1lP3ZvaWQgMDplKTpudWxsIT09Yz9kJiZcInNldFwiaW4gZCYmdm9pZCAwIT09KGU9ZC5zZXQoYSxjLGIpKT9lOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6dm9pZCBuLnJlbW92ZUF0dHIoYSxiKSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goSCk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFrLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fX0pLHNiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPXRiW2JdfHxuLmZpbmQuYXR0cjt0YltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9dGJbYl0sdGJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLHRiW2JdPWYpLGV9fSk7dmFyIHViPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTSh0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbbi5wcm9wRml4W2FdfHxhXX0pfX0pLG4uZXh0ZW5kKHtwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifSxwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz1hLm5vZGVUeXBlO2lmKGEmJjMhPT1nJiY4IT09ZyYmMiE9PWcpcmV0dXJuIGY9MSE9PWd8fCFuLmlzWE1MRG9jKGEpLGYmJihiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaGFzQXR0cmlidXRlKFwidGFiaW5kZXhcIil8fHViLnRlc3QoYS5ub2RlTmFtZSl8fGEuaHJlZj9hLnRhYkluZGV4Oi0xfX19fSksay5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgdmI9L1tcXHRcXHJcXG5cXGZdL2c7bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPVwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goSCl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodmIsXCIgXCIpOlwiIFwiKSl7Zj0wO3doaWxlKGU9YltmKytdKWQuaW5kZXhPZihcIiBcIitlK1wiIFwiKTwwJiYoZCs9ZStcIiBcIik7Zz1uLnRyaW0oZCksYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPTA9PT1hcmd1bWVudHMubGVuZ3RofHxcInN0cmluZ1wiPT10eXBlb2YgYSYmYSxpPTAsaj10aGlzLmxlbmd0aDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGgpZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEgpfHxbXTtqPmk7aSsrKWlmKGM9dGhpc1tpXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKHZiLFwiIFwiKTpcIlwiKSl7Zj0wO3doaWxlKGU9YltmKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitlK1wiIFwiKT49MClkPWQucmVwbGFjZShcIiBcIitlK1wiIFwiLFwiIFwiKTtnPWE/bi50cmltKGQpOlwiXCIsYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTp0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyx0aGlzLmNsYXNzTmFtZSxiKSxiKX06ZnVuY3Rpb24oKXtpZihcInN0cmluZ1wiPT09Yyl7dmFyIGIsZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goSCl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2UoYz09PVZ8fFwiYm9vbGVhblwiPT09YykmJih0aGlzLmNsYXNzTmFtZSYmTy5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0aGlzLmNsYXNzTmFtZSksdGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWV8fGE9PT0hMT9cIlwiOk8uZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXtmb3IodmFyIGI9XCIgXCIrYStcIiBcIixjPTAsZD10aGlzLmxlbmd0aDtkPmM7YysrKWlmKDE9PT10aGlzW2NdLm5vZGVUeXBlJiYoXCIgXCIrdGhpc1tjXS5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodmIsXCIgXCIpLmluZGV4T2YoYik+PTApcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHdiPS9cXHIvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZSh3YixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLCEoIWMuc2VsZWN0ZWQmJmkhPT1lfHwoay5vcHREaXNhYmxlZD9jLmRpc2FibGVkOm51bGwhPT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8Yy5wYXJlbnROb2RlLmRpc2FibGVkJiZuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShkLnZhbHVlLGYpPj0wKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPj0wOnZvaWQgMH19LGsuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX0sYmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pO3ZhciB4Yj1uLm5vdygpLHliPS9cXD8vO24ucGFyc2VKU09OPWZ1bmN0aW9uKGEpe3JldHVybiBKU09OLnBhcnNlKGErXCJcIil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYSl7dmFyIGIsYztpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e2M9bmV3IERPTVBhcnNlcixiPWMucGFyc2VGcm9tU3RyaW5nKGEsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtiPXZvaWQgMH1yZXR1cm4oIWJ8fGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpJiZuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2EpLGJ9O3ZhciB6YixBYixCYj0vIy4qJC8sQ2I9LyhbPyZdKV89W14mXSovLERiPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sRWI9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sRmI9L14oPzpHRVR8SEVBRCkkLyxHYj0vXlxcL1xcLy8sSGI9L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oPzpbXlxcLz8jXSpAfCkoW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sSWI9e30sSmI9e30sS2I9XCIqL1wiLmNvbmNhdChcIipcIik7dHJ5e0FiPWxvY2F0aW9uLmhyZWZ9Y2F0Y2goTGIpe0FiPWwuY3JlYXRlRWxlbWVudChcImFcIiksQWIuaHJlZj1cIlwiLEFiPUFiLmhyZWZ9emI9SGIuZXhlYyhBYi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gTWIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEgpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gTmIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09SmI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBPYihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gUGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gUWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6QWIsdHlwZTpcIkdFVFwiLGlzTG9jYWw6RWIudGVzdCh6YlsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6S2IsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9PYihPYihhLG4uYWpheFNldHRpbmdzKSxiKTpPYihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpNYihJYiksYWpheFRyYW5zcG9ydDpNYihKYiksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1uLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxtPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9uKGwpOm4uZXZlbnQsbz1uLkRlZmVycmVkKCkscD1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWYpe2Y9e307d2hpbGUoYj1EYi5leGVjKGUpKWZbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9ZlthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2U6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGMmJmMuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihvLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHxBYikrXCJcIikucmVwbGFjZShCYixcIlwiKS5yZXBsYWNlKEdiLHpiWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9bi50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEgpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGg9SGIuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWh8fGhbMV09PT16YlsxXSYmaFsyXT09PXpiWzJdJiYoaFszXXx8KFwiaHR0cDpcIj09PWhbMV0/XCI4MFwiOlwiNDQzXCIpKT09PSh6YlszXXx8KFwiaHR0cDpcIj09PXpiWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9bi5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLE5iKEliLGssYix2KSwyPT09dClyZXR1cm4gdjtpPWsuZ2xvYmFsLGkmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0hRmIudGVzdChrLnR5cGUpLGQ9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZD1rLnVybCs9KHliLnRlc3QoZCk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1DYi50ZXN0KGQpP2QucmVwbGFjZShDYixcIiQxXz1cIit4YisrKTpkKyh5Yi50ZXN0KGQpP1wiJlwiOlwiP1wiKStcIl89XCIreGIrKykpLGsuaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2RdKSxuLmV0YWdbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZF0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK0tiK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoaiBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGosay5oZWFkZXJzW2pdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGogaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltqXShrW2pdKTtpZihjPU5iKEpiLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaSYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxjLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsZixoKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksYz12b2lkIDAsZT1ofHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxmJiYodT1QYihrLHYsZikpLHU9UWIoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZF09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2RdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/by5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm8ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxpJiZtLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxpJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9O3ZhciBSYj0vJTIwL2csU2I9L1xcW1xcXSQvLFRiPS9cXHI/XFxuL2csVWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFZiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBXYihhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHxTYi50ZXN0KGEpP2QoYSxlKTpXYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKVdiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlXYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKFJiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZWYi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhVWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVUudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZShUYixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKFRiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fWNhdGNoKGEpe319O3ZhciBYYj0wLFliPXt9LFpiPXswOjIwMCwxMjIzOjIwNH0sJGI9bi5hamF4U2V0dGluZ3MueGhyKCk7YS5BY3RpdmVYT2JqZWN0JiZuKGEpLm9uKFwidW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gWWIpWWJbYV0oKX0pLGsuY29ycz0hISRiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gJGIsay5hamF4PSRiPSEhJGIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBrLmNvcnN8fCRiJiYhYS5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrWGI7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYylmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdKTtiPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2ImJihkZWxldGUgWWJbZ10sYj1mLm9ubG9hZD1mLm9uZXJyb3I9bnVsbCxcImFib3J0XCI9PT1hP2YuYWJvcnQoKTpcImVycm9yXCI9PT1hP2QoZi5zdGF0dXMsZi5zdGF0dXNUZXh0KTpkKFpiW2Yuc3RhdHVzXXx8Zi5zdGF0dXMsZi5zdGF0dXNUZXh0LFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dD97dGV4dDpmLnJlc3BvbnNlVGV4dH06dm9pZCAwLGYuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGYub25sb2FkPWIoKSxmLm9uZXJyb3I9YihcImVycm9yXCIpLGI9WWJbZ109YihcImFib3J0XCIpO3RyeXtmLnNlbmQoYS5oYXNDb250ZW50JiZhLmRhdGF8fG51bGwpfWNhdGNoKGgpe2lmKGIpdGhyb3cgaH19LGFib3J0OmZ1bmN0aW9uKCl7YiYmYigpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHthc3luYzohMCxjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmUoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGwuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgX2I9W10sYWM9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1fYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK3hiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKGFjLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZhYy50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKGFjLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KHliLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxfYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8bDt2YXIgZD15LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9bi5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZuKGUpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBiYz1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmYmMpcmV0dXJuIGJjLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5jb21wbGV0ZShjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChjLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pLHRoaXN9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBjYz1hLmpRdWVyeSxkYz1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1kYyksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9Y2MpLG59LHR5cGVvZiBiPT09ViYmKGEualF1ZXJ5PWEuJD1uKSxufSk7XG5cbiIsIi8qKlxuICogQ29va2llc1xuICpcbiAqIEpTIExpYnJhcnkgdG8gZGVhbCB3aXRoIENvb2tpZXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxudmFyIENvb2tpZXMgPSB7XG5cblx0LyoqXG5cdCAqIEdldFxuXHQgKlxuXHQgKiBHZXRzIGEgY29va2llIG9yIHJldHVybnMgdGhlIGRlZmF1bHQuIFNldCBubyBuYW1lIHRvIGdldCBhbGxcblx0ICpcblx0ICogQG5hbWUgZ2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHIgbmFtZVx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGNvb2tpZSB0byBmZXRjaFxuXHQgKiBAcGFyYW0gc3RyIGRlZmF1bHRfXHRcdFx0VGhlIGRlZmF1bHQgdmFsdWUgdG8gcmV0dXJuIGlmIG5vIGNvb2tpZSBpcyBmb3VuZFxuXHQgKiBAcmV0dXJuIHN0cnxudWxsXG5cdCAqL1xuXHRnZXQ6IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfKSB7XG5cblx0XHQvLyBTZXQgdGhlIGRlZmF1bHQgaWYgbm8gdmFsdWUgaXMgcGFzc2VkXG5cdFx0aWYodHlwZW9mIGRlZmF1bHRfID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRkZWZhdWx0XyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gUGFyc2UgYWxsIGNvb2tpZXNcblx0XHR2YXIgb0Nvb2tpZXMgPSB7fVxuXHRcdHZhciBsQ29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxDb29raWVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRsID0gbENvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdG9Db29raWVzW2xbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGxbMV0pO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gbmFtZSwgcmV0dXJuIGFsbFxuXHRcdGlmKHR5cGVvZiBuYW1lID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gb0Nvb2tpZXM7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIGNvb2tpZSBleGlzdHMgcmV0dXJuIGl0LCBlbHNlIHJldHVybiB0aGUgZGVmYXVsdFxuXHRcdHJldHVybiAobmFtZSBpbiBvQ29va2llcykgPyBvQ29va2llc1tuYW1lXSA6IGRlZmF1bHRfO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBSZW1vdmVcblx0ICpcblx0ICogRGVsZXRlcyBhIGNvb2tpZVxuXHQgKlxuXHQgKiBAbmFtZSByZW1vdmVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llIHRvIGRlbGV0ZVxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwicmVtb3ZlXCI6IGZ1bmN0aW9uKG5hbWUsIGRvbWFpbiwgcGF0aCkge1xuXHRcdHRoaXMuc2V0KG5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKTtcblx0fSxcblxuXHQvKipcblx0ICogU2V0XG5cdCAqXG5cdCAqIFNldHMgYSBjb29raWVcblx0ICpcblx0ICogQG5hbWUgc2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHIgbmFtZVx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGNvb2tpZVxuXHQgKiBAcGFyYW0gc3RyIHZhbHVlXHRcdFx0XHRUaGUgdmFsdWUgdG8gc3RvcmVcblx0ICogQHBhcmFtIGludCBleHBpcmVzXHRcdFx0VGhlIG51bWJlciBvZiBzZWNvbmRzIGJlZm9yZSB0aGUgY29va2llIGV4cGlyZXNcblx0ICogQHBhcmFtIHN0ciBkb21haW5cdFx0XHRUaGUgb3B0aW9uYWwgZG9tYWluIHRvIHNldCB0aGUgY29va2llIG9uXG5cdCAqIEBwYXJhbSBzdHIgcGF0aFx0XHRcdFx0VGhlIG9wdGlvbmFsIHBhdGggb2YgdGhlIGNvb2tpZVxuXHQgKiBAcmV0dXJuIG51bGxcblx0ICovXG5cdHNldDogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGV4cGlyZXMsIGRvbWFpbiwgcGF0aCkge1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGV4cGlyZXMgdGltZVxuXHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhwaXJlcyoxMDAwKSlcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBjb29raWUgc3RyaW5nXG5cdFx0dmFyIHMgPSBuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArXG5cdFx0XHRcdCc7IGV4cGlyZXM9JyArIGQudG9HTVRTdHJpbmcoKSArICc7Jztcblx0XHRpZihkb21haW4pIHtcblx0XHRcdHMgKz0gJyBkb21haW49JyArIGRvbWFpbiArICc7Jztcblx0XHR9XG5cdFx0aWYocGF0aCkge1xuXHRcdFx0cyArPSAnIHBhdGg9JyArIHBhdGggKyAnOyc7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBjb29raWVcblx0XHRkb2N1bWVudC5jb29raWUgPSBzO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IENvb2tpZXM7XG4iLCIvKipcbiAqIEV2ZW50c1xuICpcbiAqIEV2ZW50IG1vZGVsIGZvciBub24gVUkgZXZlbnRzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNFxuICovXG5cbi8vIEluaXQgdGhlIGNhbGxiYWNrcyBvYmplY3RcbnZhciBfY2FsbGJhY2tzID0ge307XG5cbi8qKlxuICogQWRkXG4gKlxuICogQWRkcyBhIGNhbGxiYWNrIHRvIGFuIGV2ZW50XG4gKlxuICogQG5hbWUgYWRkXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHN0ciBldmVudFx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIHRvIGF0dGFjaCB0byB0aGUgZXZlbnRcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBhZGQoZXZlbnQsIGNhbGxiYWNrKSB7XG5cblx0Ly8gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgZXhpc3QgeWV0XG5cdGlmKCEoZXZlbnQgaW4gX2NhbGxiYWNrcykpIHtcblx0XHRfY2FsbGJhY2tzW2V2ZW50XSA9IFtdXG5cdH1cblxuXHQvLyBBZGQgdGhlIGNhbGxiYWNrIHRvIHRoZSBsaXN0XG5cdF9jYWxsYmFja3NbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIFJlbW92ZVxuICpcbiAqIFJlbW92ZXMgYSBjYWxsYmFjayBmcm9tIGEgc3BlY2lmaWMgZXZlbnRcbiAqXG4gKiBAbmFtZSByZW1vdmVcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0gc3RyIGV2ZW50XHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gcmVtb3ZlIHRoZSBjYWxsYmFjayBmcm9tXG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGV4YWN0IHNhbWUgY2FsbGJhY2sgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIGV2ZW50XG4gKiBAcmV0dXJuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShldmVudCwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB0aGUgbmFtZSBleGlzdHMgaW4gdGhlIG9iamVjdFxuXHRpZihldmVudCBpbiBfY2FsbGJhY2tzKSB7XG5cblx0XHQvLyBJZiB0aGUgY2FsbGJhY2sgZXhpc3RzIGluIHRoZSBsaXN0XG5cdFx0dmFyIGkgPSBfY2FsbGJhY2tzW2V2ZW50XS5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRpZihpICE9IC0xKSB7XG5cdFx0XHRfY2FsbGJhY2tzW2V2ZW50XS5zcGxpY2UoaSwxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vdGhpbmcgZm91bmQsIHJldHVybiBmYWxzZVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVHJpZ2dlclxuICpcbiAqIFRyaWdnZXJzIGEgc3BlY2lmaWMgZXZlbnQgYW5kIGNhbGxzIGFsbCBjYWxsYmFja3MgYXNzb2NpYXRlZFxuICpcbiAqIEBuYW1lIHRyaWdnZXJcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0gc3RyIGV2ZW50XHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gdHJpZ2dlclxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQpIHtcblxuXHQvLyBJZiB3ZSBoYXZlIGNhbGxiYWNrcyBmb3IgdGhlIGV2ZW50XG5cdGlmKGV2ZW50IGluIF9jYWxsYmFja3MpIHtcblxuXHRcdC8vIENoZWNrIGZvciBhZGRpdGlvbmFsIGFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuXHRcdC8vXHRjYWxsYmFja3Ncblx0XHR2YXIgYXJncyA9IFtdO1xuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5zbGljZSgxKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFueSBjYWxsYmFja3MsIGNhbGwgdGhlbSBvbmUgYnkgb25lXG5cdFx0Zm9yKHZhciBpIGluIF9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgYiA9IF9jYWxsYmFja3NbZXZlbnRdW2ldLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihldmVudCArICcgY2FsbGJhY2sgJyArIGkgKyAnIHRocmV3IGV4Y2VwdGlvbjogJyArIGVycik7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGdvdCBmYWxzZSBiYWNrLCBzdG9wIGNhbGxpbmcgdGhlIGNhbGxiYWNrc1xuXHRcdFx0aWYoYiA9PT0gZmFsc2UpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm8gY2FsbGJhY2tzIGFzc2NvY2l0ZWQgd2l0aCB0aGUgZXZlbnRcblx0ZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignZXZlbnQgdmFsdWUgXCInICsgZXZlbnQgKyAnXCIgcmV0dXJuZWQsIGFuZCBubyBjYWxsYmFja3Mgd2VyZSBmb3VuZCB0byBoYW5kbGUgaXQnKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGZ1bmN0aW9uc1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWRkXCI6IGFkZCxcblx0XCJyZW1vdmVcIjogcmVtb3ZlLFxuXHRcInRyaWdnZXJcIjogdHJpZ2dlclxufVxuIiwiLyoqXG4gKiBIYXNoXG4gKlxuICogSlMgTGlicmFyeSB0byBtYW5hZ2UgaGFzaCB2YWx1ZXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTEyLTA5XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgVG9vbHMgPSByZXF1aXJlKCcuL3Rvb2xzLmpzJyk7XG5cbi8vIFZhbHVlc1xudmFyIF9oYXNoID0ge307XG5cbi8vIG5hbWUgcmVnZXhcbnZhciBfbmFtZVJFID0gL15bYS16XSskLztcblxuLy8gQ2FsbGJhY2tzXG52YXIgX3dhdGNoZXMgPSB7fTtcblxuLyoqXG4gKiBDaGVjayBXYXRjaGVzXG4gKlxuICogR2V0cyBvbGQgdmFsdWVzIGFuZCBjb21wYXJlcyB0aGVtIHRvIGV4aXN0aW5nIHZhbHVlcywgaWYgYW55b25lIGlzIHdhdGNoaW5nXG4gKiBhbnkgbmFtZXMgdGhhdCBhcmUgY2hhbmdlZCwgdGhleSBhcmUgbm90aWZpZWRcbiAqXG4gKiBAbmFtZSBfY2hlY2tXYXRjaGVzXG4gKiBAcGFyYW0gb2JqZWN0IG9sZFx0XHRcdFRoZSBvbGQgdmFsdWVzIHRvIGNoZWNrIGFnYWluXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2NoZWNrV2F0Y2hlcyhvbGQpIHtcblxuXHQvLyBJZiB0aGVyZSBhcmUgd2F0Y2hlc1xuXHRpZighVG9vbHMuZW1wdHkoX3dhdGNoZXMpKSB7XG5cblx0XHQvLyBDaGVjayBlYWNoIHdhdGNoXG5cdFx0Zm9yKHZhciBuYW1lIGluIF93YXRjaGVzKSB7XG5cblx0XHRcdC8vIElmIHRoZSB2YWx1ZSBkaWRuJ3QgZXhpc3QgYW5kIG5vdyBpdCBkb2VzLCBvciBpdCBkaWQgZXhpc3Rcblx0XHRcdC8vXHRhbmQgbm93IGl0IGRvZXNuJ3QsIG9yIHRoZSB2YWx1ZXMgZG9uJ3QgbWF0Y2hcblx0XHRcdGlmKCghKG5hbWUgaW4gb2xkKSAmJiBuYW1lIGluIF9oYXNoKSB8fFxuXHRcdFx0XHQobmFtZSBpbiBvbGQgJiYgIShuYW1lIGluIF9oYXNoKSkgfHxcblx0XHRcdFx0b2xkW25hbWVdICE9IF9oYXNoW25hbWVdKSB7XG5cblx0XHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGNhbGxiYWNrIGFuZCBjYWxsIGl0XG5cdFx0XHRcdGZvcih2YXIgZiBvZiBfd2F0Y2hlc1tuYW1lXSkge1xuXHRcdFx0XHRcdGYoX2hhc2hbbmFtZV0gfHwgbnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBIYXNoIENoYW5nZWRcbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgbG9jYXRpb24gaGFzaCBoYXMgYmVlbiBhbHRlcmVkLCBub3RpZmllcyBhbnkgd2F0Y2hlcnMgb2ZcbiAqIGhhc2ggdmFsdWVzIGNoYW5naW5nXG4gKlxuICogQG5hbWUgX2hhc2hDaGFuZ2VkXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhc2hDaGFuZ2VkKCkge1xuXG5cdC8vIFN0b3JlIHRoZSBjdXJyZW50IGhhc2hcblx0dmFyIG9sZCA9IFRvb2xzLmNsb25lKF9oYXNoKTtcblxuXHQvLyBSZS1wYXJzZSB0aGUgY3VycmVudCBsb2NhdGlvbiBoYXNoXG5cdF9wYXJzZUhhc2goKTtcblxuXHQvLyBDaGVjayB0aGUgd2F0Y2hlc1xuXHRfY2hlY2tXYXRjaGVzKG9sZCk7XG59XG5cbi8qKlxuICogUGFyc2UgSGFzaFxuICpcbiAqIFBhcnNlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBoYXNoIGludG8gYW4gb2JqZWN0XG4gKlxuICogQG5hbWUgX3BhcnNlSGFzaFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wYXJzZUhhc2goKSB7XG5cblx0Ly8gSWYgdGhlcmUncyBhbnl0aGluZyBpbiB0aGUgaGFzaFxuXHRpZih3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPiAxKSB7XG5cdFx0dmFyIHJlZ2V4ID0gLyhbXj0mXSspPT8oW14mXSopL2dcblx0XHR2YXIgZmllbGQgPSBudWxsO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIHBhcnQgZm91bmRcblx0XHR3aGlsZShmaWVsZCA9IHJlZ2V4LmV4ZWMod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSkge1xuXHRcdFx0X2hhc2hbZmllbGRbMV1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpZWxkWzJdKS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbnZhciBIYXNoID0ge1xuXG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqXG5cdCAqIEluaXRpYWxpc2VzIHRoZSBpbnRlcm5hbCBoYXNoIGJ5IGZldGNoaW5nIGFuZCBwYXJzaW5nIHRoZSBjdXJyZW50XG5cdCAqIGxvY2F0aW9uIGhhc2hcblx0ICpcblx0ICogQG5hbWUgaW5pdFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJpbml0XCI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gVHJhY2sgY2hhbmdlc1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBfaGFzaENoYW5nZWQpO1xuXG5cdFx0Ly8gUGFyc2UgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaFxuXHRcdF9wYXJzZUhhc2goKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0XG5cdCAqXG5cdCAqIFJldHVybnMgYSBoYXNoIG5hbWVcblx0ICpcblx0ICogQG5hbWUgZ2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cmluZyBuYW1lXHRcdFRoZSBuYW1lIHRvIGxvb2sgZm9yXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGVmYXVsdF9cdFRoZSB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIG5hbWUgaXNuJ3QgZm91bmRcblx0ICogQHJldHVybiBzdHJcblx0ICovXG5cdFwiZ2V0XCI6IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfKSB7XG5cblx0XHQvLyBJZiB0aGUgbmFtZSBpcyBpbnZhbGlkXG5cdFx0aWYoIV9uYW1lUkUudGVzdChuYW1lKSkge1xuXHRcdFx0dGhyb3cgJ0ludmFsaWQgSGFzaCBuYW1lJztcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBpcyBhIHZhbHVlIGZvciB0aGUgbmFtZVxuXHRcdGlmKHR5cGVvZiBfaGFzaFtuYW1lXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIF9oYXNoW25hbWVdO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIHJldHVybiB0aGUgZGVmYXVsdFxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRfO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogU2V0XG5cdCAqXG5cdCAqIFNldHMgYSBzcGVjaWZpYyBuYW1lXG5cdCAqXG5cdCAqIEBuYW1lIHNldFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSBzdHJ8b2JqZWN0IG5hbWVcdFRoZSBuYW1lIHRvIHNldCwgb3IgYW4gb2JqZWN0IG9mIG5hbWUvdmFsdWUgcGFpcnNcblx0ICogQHBhcmFtIHN0ciB2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byBzZXQgdGhlIG5hbWUgdG9cblx0ICovXG5cdFwic2V0XCI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cblx0XHQvLyBJZiB0aGUgbmFtZSBpcyBub3QgYW4gb2JqZWN0XG5cdFx0aWYoIVRvb2xzLmlzT2JqZWN0KG5hbWUpKSB7XG5cblx0XHRcdC8vIElmIHRoZSB2YWx1ZSBpcyBub3QgZGVmaW5lZFxuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHZhbHVlID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSmF2YVNjcmlwdCBpcyBkdW1iIGFuZCB0aGlua3Mge25hbWU6IHZhbHVlfSBpcyB0aGUgc2FtZSBhc1xuXHRcdFx0Ly9cdHtcIm5hbWVcIjogdmFsdWV9XG5cdFx0XHR2YXIgdGVtcCA9IG5hbWU7XG5cdFx0XHRuYW1lID0ge307XG5cdFx0XHRuYW1lW3RlbXBdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhlIG9sZCBoYXNoXG5cdFx0dmFyIG9sZCA9IFRvb2xzLmNsb25lKF9oYXNoKTtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBuYW1lXG5cdFx0Zm9yKHZhciBuIGluIG5hbWUpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIG5hbWUgaXMgaW52YWxpZFxuXHRcdFx0aWYoIV9uYW1lUkUudGVzdChuKSkge1xuXHRcdFx0XHR0aHJvdyAnSW52YWxpZCBIYXNoIG5hbWU6ICcgKyBuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgbnVsbCwgZGVsZXRlIHRoZSBuYW1lXG5cdFx0XHRpZihuYW1lW25dID09IG51bGwpIHtcblx0XHRcdFx0ZGVsZXRlIF9oYXNoW25dO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWxzZSwgc2V0IHRoZSBuZXcgdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfaGFzaFtuXSA9IG5hbWVbbl07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgYW55b25lIHdhdGNoaW5nIHRoaXMgdmFsdWVcblx0XHRfY2hlY2tXYXRjaGVzKG9sZCk7XG5cblx0XHQvLyBJbml0IGFuIGFycmF5IHRvIHN0b3JlIHRoZSBwYXJ0c1xuXHRcdHZhciBoYXNoID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbmFtZVxuXHRcdGZvcih2YXIgayBpbiBfaGFzaCkge1xuXHRcdFx0aGFzaC5wdXNoKGsgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoX2hhc2hba10pKTtcblx0XHR9XG5cblx0XHQvLyBSZXNldCB0aGUgd2luZG93IGxvY2F0aW9uIGhhc2hcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2guam9pbignJicpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBVbndhdGNoXG5cdCAqXG5cdCAqIFJlbW92ZXMgYSBjYWxsYmFjayBmcm9tIHRoZSB3YXRjaGVzXG5cdCAqXG5cdCAqIEBuYW1lIHVud2F0Y2hcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIG5hbWVcdFx0XHRUaGUgbmFtZSBvZiB0aGUgdmFsdWUgdG8gc3RvcCB3YXRjaGluZ1xuXHQgKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIHRvIHJlbW92ZVxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwidW53YXRjaFwiOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSB0aGUgbmFtZVxuXHRcdGlmKG5hbWUgaW4gX3dhdGNoZXMpIHtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCB0aGUgY2FsbGJhY2tzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmFtZVxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF93YXRjaGVzW25hbWVdLmxlbmd0aDsgKytpKSB7XG5cblx0XHRcdFx0Ly8gSWYgd2UgZmluZCB0aGUgY2FsbGJhY2tcblx0XHRcdFx0aWYoX3dhdGNoZXNbbmFtZV1baV0gPT0gY2FsbGJhY2spIHtcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSBpdFxuXHRcdFx0XHRcdF93YXRjaGVzW25hbWVdLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFdhdGNoXG5cdCAqXG5cdCAqIEFkZHMgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBuYW1lIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBuYW1lIGlzXG5cdCAqIGFkZGVkLCBkZWxldGVkLCBvciBjaGFuZ2VkXG5cdCAqXG5cdCAqIEBuYW1lIHdhdGNoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cmluZyBuYW1lXHRcdFx0VGhlIG5hbWUgb2YgdGhlIHZhbHVlIHRvIHdhdGNoXG5cdCAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJ3YXRjaFwiOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuXG5cdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBuYW1lXG5cdFx0aWYobmFtZSBpbiBfd2F0Y2hlcykge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIHRoZSBjYWxsYmFja3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBuYW1lXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3dhdGNoZXNbbmFtZV0ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIGNhbGxiYWNrIHRoZXJlJ3Mgbm8gbmVlZCB0byBzdG9yZSBpdFxuXHRcdFx0XHRpZihfd2F0Y2hlc1tuYW1lXVtpXSA9PSBjYWxsYmFjaykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgY2FsbGJhY2tzIGZvciB0aGUgbmFtZVxuXHRcdGVsc2Uge1xuXHRcdFx0X3dhdGNoZXNbbmFtZV0gPSBbXTtcblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIGNhbGxiYWNrIHRvIHRoZSB3YXRjaGVzXG5cdFx0X3dhdGNoZXNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsIi8qKlxuICogTG9hZGVyXG4gKlxuICogU2hvd3MgYSBsb2FkaW5nIGdyYXBoaWMgZHVyaW5nIHJlcXVlc3RzL3N0YXJ0dXBcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gS2VlcCB0cmFjayBvZiB0aGUgc2hvdy9oaWRlIGNhbGxzXG4vL1x0YXNzdW1lIHRoZSBsb2FkZXIgc3RhcnRlZCBvblxudmFyIF9jb3VudCA9IDE7XG5cbi8vIEdldCB0aGUgRE9NIGVsZW1lbnRcbnZhciBfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0aGlkZTogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBEZWNyZW1lbnQgdGhlIGNvdW50XG5cdFx0X2NvdW50LS07XG5cblx0XHQvLyBJZiB0aGlzIGlzIHRoZSBsYXN0IG9uZVxuXHRcdGlmKF9jb3VudCA9PSAwKSB7XG5cdFx0XHRfZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cdH0sXG5cblx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gSW5jcmVtZW50IHRoZSBjb3VudFxuXHRcdF9jb3VudCsrO1xuXG5cdFx0Ly8gSWYgdGhpcyBpcyB0aGUgZmlyc3Qgb25lXG5cdFx0aWYoX2NvdW50ID09IDEpIHtcblx0XHRcdF9lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9XG5cdH1cbn1cbiIsIi8qKlxuICogU2VydmljZXNcbiAqXG4gKiBIYW5kbGVzIGNvbm5lY3RpbmcgdG8gYW5kIHJldHJpZXZpbmcgZGF0YSBmcm9tIHNlcnZpY2VzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNFxuICovXG5cbi8vIEV4dGVybmFsIG1vZHVsZXNcbnZhciAkID0gcmVxdWlyZSgnLi4vM3JkL2pxdWVyeS5hamF4LmpzJyk7XG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIENvb2tpZXMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2Nvb2tpZXMuanMnKTtcblxuLy8gU2VydmljZXMgZG9tYWluXG52YXIgX2RvbWFpbiA9ICcnO1xuXG4vLyBEZWZhdWx0IGVycm9yIGZ1bmN0aW9uXG52YXIgX2Vycm9yID0gZnVuY3Rpb24oKSB7fVxuXG4vKipcbiAqIENsZWFyXG4gKlxuICogQ2xlYXJzIHRoZSBzZXNzaW9uIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgY29va2llc1xuICpcbiAqIEBuYW1lIF9jbGVhclxuICogYWNjZXNzIHByaXZhdGVcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfY2xlYXIoKSB7XG5cblx0Ly8gRGVsZXRlIGZyb20gbG9jYWxTdG9yYWdlXG5cdGRlbGV0ZSBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ107XG5cblx0Ly8gRGVsZXRlIHRoZSBjb29raWVcblx0Q29va2llcy5yZW1vdmUoJ19zZXNzaW9uJywgJy4nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLCAnLycpO1xufVxuXG4vKipcbiAqIFJlcXVlc3RcbiAqXG4gKiBIYW5kbGVzIGFjdHVhbCByZXF1ZXN0c1xuICpcbiAqIEBuYW1lIHJlcXVlc3RcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHN0cmluZyBtZXRob2RcdFx0XHRUaGUgbWV0aG9kIHVzZWQgdG8gc2VuZCB0aGUgcmVxdWVzdFxuICogQHBhcmFtIHN0cmluZyB1cmxcdFx0XHRUaGUgZnVsbCBVUkwgdG8gdGhlIHNlcnZpY2Uvbm91blxuICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuICogQHBhcmFtIHN0cmluZyBhdXRoXHRcdFx0T3B0aW9uYWwgQXV0aG9yaXphdGlvbiB0b2tlblxuICogQHJldHVybiB4aHJcbiAqL1xuZnVuY3Rpb24gX3JlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEpIHtcblxuXHQvLyBHZW5lcmF0ZSB0aGUgYWpheCBjb25maWdcblx0dmFyIG9Db25maWcgPSB7XG5cdFx0XCJiZWZvcmVTZW5kXCI6IGZ1bmN0aW9uKHhociwgc2V0dGluZ3MpIHtcblx0XHRcdHhoci5fdXJsID0gdXJsO1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGEgc2Vzc2lvblxuXHRcdFx0aWYoJ19zZXNzaW9uJyBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJjb250ZW50VHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcblx0XHRcImVycm9yXCI6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgYW4gQXV0aG9yaXphdGlvbiBlcnJvclxuXHRcdFx0aWYoeGhyLnN0YXR1cyA9PSA0MDEpIHtcblxuXHRcdFx0XHQvLyBDbGVhciB0aGUgY3VycmVudCB0b2tlblxuXHRcdFx0XHRfY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHV0IHRoZSBlcnJvciBpbiB0aGUgY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihtZXRob2QgKyAnICcgKyB4aHIuX3VybCArICcgcmV0dXJuZWQ6ICcgKyBlcnJvcik7XG5cblx0XHRcdC8vIFJldHVybiB0aGUgeGhyIHRvIHRoZSBlcnJvciBjYWxsYmFja1xuXHRcdFx0X2Vycm9yKHhocik7XG5cdFx0fSxcblx0XHRcIm1ldGhvZFwiOiBtZXRob2QsXG5cdFx0XCJ1cmxcIjogdXJsXG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZ2V0IHJlcXVlc3Rcblx0aWYobWV0aG9kID09ICdnZXQnKSB7XG5cdFx0aWYodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRvQ29uZmlnWydkYXRhJ10gPSBcImQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdH1cblx0fVxuXHQvLyBFbHNlIGl0J3MgYW55IG90aGVyIG1ldGhvZFxuXHRlbHNlIHtcblx0XHRvQ29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdC8vIE1ha2UgdGhlIHJlcXVlc3QgYW5kIHJldHVybiB0aGUgeGhyXG5cdHJldHVybiAkLmFqYXgob0NvbmZpZyk7XG59XG5cbi8qKlxuICogU3RvcmVcbiAqXG4gKiBTdG9yZXMgdGhlIHNlc3Npb24gdG9rZW4gaW4gbG9jYWwgc3RvcmFnZSBhbmQgY29va2llc1xuICpcbiAqIEBuYW1lIF9zdG9yZVxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gc3RyaW5nIHRva2VuXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3N0b3JlKHRva2VuKSB7XG5cblx0Ly8gU2V0IHRoZSBzZXNzaW9uIGluIGxvY2FsU3RvcmFnZVxuXHRsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10gPSB0b2tlblxuXG5cdC8vIFNldCB0aGUgc2Vzc2lvbiBpbiBhIGNvb2tpZVxuXHRDb29raWVzLnNldCgnX3Nlc3Npb24nLCB0b2tlbiwgODY0MDAsICcuJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSwgJy8nKTtcbn1cblxuLyoqXG4gKiBTdWNjZXNzXG4gKlxuICogSGFuZGxlcyBzdWNjZXNzIGZyb20geGhyXG4gKlxuICogQG5hbWUgX3N1Y2Nlc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHN0cmluZyByZXNcdFx0XHRUaGUgcmVzdWx0IGZyb20gdGhlIHNlcnZlclxuICogQHBhcmFtIHN0cmluZyBzdGF0dXNcdFx0XHRUaGUgc3RhdHVzIG9mIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0geGhyIHhoclx0XHRcdFx0VGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3N1Y2Nlc3MocmVzLCBzdGF0dXMsIHhocikge1xuXG5cdC8vIElmIHRoZSByZXN1bHQgaXMgYSBzdHJpbmdcblx0aWYodHlwZW9mIHJlcyA9PSAnc3RyaW5nJykge1xuXG5cdFx0Ly8gVHJ5IHRvIGNvbnZlciBpdCB0byBKU09OXG5cdFx0dHJ5IHtcblx0XHRcdHJlc1x0PSBKU09OLnBhcnNlKHJlcyk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobWV0aG9kICsgJyAnICsgeGhyLl91cmwgKyAnIHJldHVybmVkIGludmFsaWQgSlNPTjogJyArIGVycik7XG5cdFx0XHRyZXMgPSB7XCJlcnJvclwiOntcImNvZGVcIjowLFwibXNnXCI6ZXJyfX07XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogU2VydmljZXNcbiAqL1xudmFyIFNlcnZpY2VzID0ge1xuXG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqXG5cdCAqIEluaXRpYWxpc2VzIHRoZSBTZXJ2aWNlcyBtb2R1bGVzXG5cdCAqXG5cdCAqIEBuYW1lIGluaXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzdWJkb21haW5cdFx0VGhlIHN1Yi1kb21haW4gc2VydmljZXMgY2FuIGJlIHJlYWNoZWQgdGhyb3VnaFxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwiaW5pdFwiOiBmdW5jdGlvbihzdWJkb21haW4sIGVycm9yKSB7XG5cblx0XHQvLyBTdG9yZSB0aGUgZnVsbCBkb21haW4gbmFtZSBmb3Igc2VydmljZSBjYWxsc1xuXHRcdF9kb21haW4gPSAnLy8nICsgc3ViZG9tYWluICtcblx0XHRcdFx0XHQnLicgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xuXHRcdFx0XHRcdCcvJztcblxuXHRcdC8vIERvIHdlIGhhdmUgYSBzZXNzaW9uIGluIHN0b3JhZ2Vcblx0XHRpZignX3Nlc3Npb24nIGluIGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pIHtcblx0XHRcdHRoaXMuc2Vzc2lvbihsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pXG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBkbyB3ZSBoYXZlIG9uZSBpbiBhIGNvb2tpZVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGNvb2tpZSA9IENvb2tpZXMuZ2V0KCdfc2Vzc2lvbicpO1xuXHRcdFx0aWYoY29va2llKSB7XG5cdFx0XHRcdHRoaXMuc2Vzc2lvbihjb29raWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIGFuIGVycm9yIHdhcyBwYXNzZWRcblx0XHRpZih0eXBlb2YgZXJyb3IgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRfZXJyb3IgPSBlcnJvcjtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIENyZWF0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgY3JlYXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgY3JlYXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJjcmVhdGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgncG9zdCcsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIERlbGV0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgZGVsZXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgZGVsZXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJkZWxldGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgnZGVsZXRlJywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogUmVhZFxuXHQgKlxuXHQgKiBDYWxscyB0aGUgcmVhZCBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIHJlYWRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcInJlYWRcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgnZ2V0JywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogU2Vzc2lvblxuXHQgKlxuXHQgKiBTZXQgb3IgZ2V0IHRoZSBzZXNzaW9uIHRva2VuXG5cdCAqXG5cdCAqIEBuYW1lIHNlc3Npb25cblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyB0b2tlblx0XHRcdFRoZSB0b2tlbiB0byBzdG9yZVxuXHQgKiBAcmV0dXJuIHZvaWR8c3RyXG5cdCAqL1xuXHRcInNlc3Npb25cIjogZnVuY3Rpb24odG9rZW4pIHtcblxuXHRcdC8vIElmIHdlIGFyZSBzZXR0aW5nIHRoZSBzZXNzaW9uXG5cdFx0aWYodHlwZW9mIHRva2VuICE9PSAndW5kZWZpbmVkJykge1xuXG5cdFx0XHQvLyBJZiBudWxsIHdhcyBwYXNzZWQsIGRlbGV0ZSB0aGUgc2Vzc2lvblxuXHRcdFx0aWYodG9rZW4gPT0gbnVsbCkge1xuXHRcdFx0XHRfY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgc2V0IHRoZSBzZXNzaW9uXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X3N0b3JlKHRva2VuKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIGFyZSByZXR1cm5pbmcgdGhlIHNlc3Npb25cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiAoJ19zZXNzaW9uJyBpbiBsb2NhbFN0b3JhZ2UpID9cblx0XHRcdFx0bG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddIDpcblx0XHRcdFx0Jyc7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBVcGRhdGVcblx0ICpcblx0ICogQ2FsbHMgdGhlIHVwZGF0ZSBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIHVwZGF0ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gY2FsbFxuXHQgKiBAcGFyYW0gc3RyaW5nIG5vdW5cdFx0XHRUaGUgbm91biB0byBjYWxsIG9uIHRoZSBzZXJ2aWNlXG5cdCAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2Vcblx0ICogQHJldHVybiB4aHJcblx0ICovXG5cdFwidXBkYXRlXCI6IGZ1bmN0aW9uKHNlcnZpY2UsIG5vdW4sIGRhdGEpIHtcblx0XHRyZXR1cm4gX3JlcXVlc3QoJ3B1dCcsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH1cbn07XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2VzO1xuIiwiLyoqXG4gKiBUb29sc1xuICpcbiAqIFVzZWZ1bCBmdW5jdGlvbnMgdGhhdCBiZWxvbmcgdG8gYW55IHNwZWNpZmljIG1vZHVsZVxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjVcbiAqL1xuXG4vKipcbiAqIFRvb2xzXG4gKi9cbnZhciBUb29scyA9IHtcblxuXHQvKipcblx0ICogQ2xvbmVcblx0ICpcblx0ICogRGVlcCBjbG9uZSBhbnkgdHlwZSBvZiBvYmplY3QsIHJldHVybmluZyBhIG5ldyBvbmVcblx0ICpcblx0ICogQG5hbWUgY2xvbmVcblx0ICogQHBhcmFtIG1peGVkIG9cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byBjbG9uZVxuXHQgKiBAcmV0dXJuIG1peGVkXG5cdCAqL1xuXHRjbG9uZTogZnVuY3Rpb24obykge1xuXHRcdC8vIE5ldyB2YXJcblx0XHR2YXIgbiA9IG51bGw7XG5cblx0XHQvLyBJZiBpdCdzIGFuIGFycmF5XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgpKSB7XG5cdFx0XHRuID0gW107XG5cdFx0XHRmb3IodmFyIGkgaW4gbykge1xuXHRcdFx0XHRuLnB1c2goVG9vbHMuY2xvbmUob1trXSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdFxuXHRcdGVsc2UgaWYoVG9vbHMuaXNPYmplY3QobykpIHtcblx0XHRcdG4gPSB7fVxuXHRcdFx0Zm9yKHZhciBrIGluIG8pIHtcblx0XHRcdFx0bltrXSA9IFRvb2xzLmNsb25lKG9ba10pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGNvcHkgYXMgaXNcblx0XHRlbHNlIHtcblx0XHRcdG4gPSBvO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgbmV3IHZhclxuXHRcdHJldHVybiBuO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb21wYXJlXG5cdCAqXG5cdCAqIENvbXBhcmVzIHR3byB2YWx1ZXMgb2YgYW55IHR5cGUgdG8gc2VlIGlmIHRoZXkgY29udGFpbiB0aGUgc2FtZVxuXHQgKiBkYXRhIG9yIG5vdFxuXHQgKlxuXHQgKiBAbmFtZSBjb21wYXJlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCB2MVx0XHRcdFx0VGhlIGZpcnN0IHZhbHVlXG5cdCAqIEBwYXJhbSBtaXhlZCB2Mlx0XHRcdFx0VGhlIHNlY29uZCB2YWx1ZVxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGNvbXBhcmUodjEsIHYyKSB7XG5cblx0XHQvLyBJZiB0aGV5J3JlIGJvdGggYXJyYXlzXG5cdFx0aWYoQXJyYXkuaXNBcnJheSh2MSkgJiYgQXJyYXkuaXNBcnJheSh2MikpIHtcblxuXHRcdFx0Ly8gSWYgdGhleSBkb24ndCBoYXZlIHRoZSBzYW1lIGxlbmd0aFxuXHRcdFx0aWYodjEubGVuZ3RoICE9IHYyLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBhcmUgdGhlIHZhbHVlc1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHYxLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmKCFUb29scy5jb21wYXJlKHYxW2ldLCB2MltpXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIHRoZXkncmUgYm90aCBvYmplY3RzXG5cdFx0ZWxzZSBpZihUb29scy5pc09iamVjdCh2MSkgJiYgVG9vbHMuaXNPYmplY3QodjIpKSB7XG5cblx0XHRcdC8vIElmIHRoZXkgZG9uJ3QgaGF2ZSB0aGUgc2FtZSBrZXlzXG5cdFx0XHRpZighVG9vbHMuY29tcGFyZShPYmplY3Qua2V5cyh2MSkuc29ydCgpLCBPYmplY3Qua2V5cyh2Mikuc29ydCgpKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBhcmUgZWFjaCBrZXlcblx0XHRcdGZvcih2YXIgayBpbiB2MSkge1xuXHRcdFx0XHRpZighVG9vbHMuY29tcGFyZSh2MVtrXSwgdjJba10pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgY29tcGFyZSBhcyBpc1xuXHRcdGVsc2Uge1xuXHRcdFx0aWYodjEgIT09IHYyKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gZXF1YWxcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKipcblx0ICogRW1wdHlcblx0ICpcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSB0eXBlIGlzIGVtcHR5XG5cdCAqXG5cdCAqIEBuYW1lIGVtcHR5XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFsdWUgdG8gY2hlY2ssIGNhbiBiZSBvYmplY3QsIGFycmF5LCBzdHJpbmcsIGV0Y1xuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGVtcHR5OiBmdW5jdGlvbihtKSB7XG5cblx0XHQvLyBJZiBpdCdzIGFuIG9iamVjdFxuXHRcdGlmKFRvb2xzLmlzT2JqZWN0KG0pKSB7XG5cdFx0XHRmb3IodmFyIHAgaW4gbSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIGl0J3MgYW4gYXJyYXkgb3IgYSBzdHJpbmdcblx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkobSkgfHwgdHlwZW9mIG0gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBtLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZVxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBJZiBpdCdzIG51bGwgb3IgdW5kZWZpbmVkXG5cdFx0XHRpZih0eXBlb2YgbSA9PSAndW5kZWZpbmVkJyB8fCBtID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgcmV0dXJuIGZhbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBJcyBEZWNpbWFsXG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgYSBudW1iZXJcblx0ICpcblx0ICogQG5hbWUgaXNEZWNpbWFsXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFyaWFibGUgdG8gdGVzdFxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGlzRGVjaW1hbDogZnVuY3Rpb24obSkge1xuXHRcdHJldHVybiB0eXBlb2YgbSA9PSAnbnVtYmVyJztcblx0fSxcblxuXHQvKipcblx0ICogSXMgSW50ZWdlclxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgdHJ1ZSBpbnRlZ2VyXG5cdCAqXG5cdCAqIEBuYW1lIGlzSW50ZWdlclxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgbVx0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIHRlc3Rcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRpc0ludGVnZXI6IGZ1bmN0aW9uKG0pIHtcblx0XHRyZXR1cm4gbSA9PT0gK20gJiYgbSA9PT0gKG18MCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIElzIE9iamVjdFxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgdHJ1ZSBvYmplY3Rcblx0ICpcblx0ICogQG5hbWUgaXNPYmplY3Rcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byB0ZXN0XG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0aXNPYmplY3Q6IGZ1bmN0aW9uKG0pIHtcblx0XHRpZihtID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYodHlwZW9mIG0gIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblx0XHRpZihBcnJheS5pc0FycmF5KG0pKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIE9iamVjdCBNYXBcblx0ICpcblx0ICogV29ya3MgbGlrZSBtYXAgZm9yIGFycmF5cywgYnV0IGl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0XG5cdCAqXG5cdCAqIEBuYW1lIG9tYXBcblx0ICogQHBhcmFtIHtvYmplY3R9IG9cdFx0XHRUaGUgb2JqZWN0IHRvIG1hcFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1x0VGhlIGZ1bmN0aW9uIHRvIGNhbGwgZWFjaCBpdGVyYXRpb25cblx0ICogQHJldHVybiBhcnJheVxuXHQgKi9cblx0b21hcDogZnVuY3Rpb24obywgY2FsbGJhY2spIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0Zm9yKHZhciBrIGluIG8pIHtcblx0XHRcdHJldC5wdXNoKGNhbGxiYWNrKG9ba10sIGspKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvKipcblx0ICogVVVJRCB2NFxuXHQgKlxuXHQgKiBSZXR1cm5zIGEgcHN1ZWRvIHJhbmRvbSBzdHJpbmcgaW4gVVVJRCBmb3JtYXQgKE5PVCBBQ1RVQUxMWSBBIFVVSUQpXG5cdCAqXG5cdCAqIEBuYW1lIHV1aWR2NFxuXHQgKiBAcmV0dXJuIHN0clxuXHQgKi9cblx0dXVpZHY0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG5cdFx0XHQoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxuXHRcdClcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBUb29scztcbiIsIi8qKlxuICogV2Vic29ja2V0XG4gKlxuICogU2ltcGxpZmllcyB1c2luZyBhIHdlYnNvY2tldFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTctMDUtMTdcbiAqL1xuXG4vLyBFeHBvcnQgdGhlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCwgY29uZikge1xuXG5cdC8vIElmIHdlIGNhbid0IGhhbmRsZSB3ZWJzb2NrZXRzXG5cdGlmKCEoJ1dlYlNvY2tldCcgaW4gd2luZG93KSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ3dlYnNvY2tldDogV2ViU29ja2V0cyBub3Qgc3VwcG9ydGVkJyk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSWYgY29uZiBpcyBub3QgZGVmaW5lZFxuXHRpZih0eXBlb2YgY29uZiA9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbmYgPSB7fVxuXHR9XG5cblx0Ly8gRWxzZSwgaWYgaXQncyBub3QgYW4gb2JqZWN0LCB3ZSBoYXZlIGEgcHJvYmxlbVxuXHRlbHNlIGlmKHR5cGVvZiBjb25mICE9ICdvYmplY3QnKSB7XG5cdFx0Y29uc29sZS5lcnJvcignd2Vic29ja2V0OiBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIFdlYlNvY2tldFxuXHR2YXIgb1NvY2sgPSBuZXcgV2ViU29ja2V0KHVybCk7XG5cblx0Ly8gQWRkIHRoZSBVUkwgdG8gdGhlIGluc3RhbmNlXG5cdG9Tb2NrLnVybCA9IHVybDtcblxuXHQvLyBTZXQgdGhlIG9wZW4gY2FsbGJhY2tcblx0b1NvY2sub25vcGVuID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJZiBhbiBvcGVuIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdvcGVuJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydvcGVuJ10ob1NvY2spO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGp1c3QgbG9nIHRoZSBldmVudFxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3dlYnNvY2tldDogb3BlbmVkJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBtZXNzYWdlIGNhbGxiYWNrXG5cdG9Tb2NrLm9ubWVzc2FnZVx0PSBmdW5jdGlvbihldikge1xuXG5cdFx0Ly8gSWYgYSBtZXNzYWdlIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdtZXNzYWdlJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydtZXNzYWdlJ10ob1NvY2ssIGV2KTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IG1lc3NhZ2UgcmVjZWl2ZWQsIFwiJyArIGV2LmRhdGEgKyAnXCInKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGVycm9yIGNhbGxiYWNrXG5cdG9Tb2NrLm9uZXJyb3IgPSBmdW5jdGlvbihldikge1xuXG5cdFx0Ly8gSWYgYW4gZXJyb3IgY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ2Vycm9yJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydlcnJvciddKG9Tb2NrLCBldik7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBlcnJvciwgXCInICsgSlNPTi5zdHJpbmdpZnkoZXYpICsgJ1wiJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBjbG9zZSBjYWxsYmFja1xuXHRvU29jay5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJZiBhIGNsb3NlIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdjbG9zZScgaW4gY29uZikge1xuXHRcdFx0Y29uZlsnY2xvc2UnXShvU29jayk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBjbG9zZWQnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHNvY2tldFxuXHRyZXR1cm4gb1NvY2s7XG59XG4iLCIvLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIHNwZWNpZmljXG52YXIgUmVxdWVzdHMgPSByZXF1aXJlKCcuL3JlcXVlc3RzLmpzJyk7XG5cbi8vIENvbXBvbmVudHNcbnZhciBTaXRlID0gcmVxdWlyZSgnLi9yZWFjdC9zaXRlLmpzeCcpO1xuXG4oZnVuY3Rpb24oKSB7XG5cblx0Ly8gUmVuZGVyIHRoZSBMb2dpbkNvbXBvbmVudFxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0UmVhY3QuY3JlYXRlRWxlbWVudChTaXRlLCB7fSksXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0Jylcblx0KTtcblxuXHQvLyBJbml0IHRoZSByZXF1ZXN0c1xuXHRSZXF1ZXN0cy5pbml0KCk7XG5cblx0Ly8gSW5pdCB0aGUgc2VydmljZXNcblx0U2VydmljZXMuaW5pdChcInNlcnZpY2VzXCIsIGZ1bmN0aW9uKHhocikge1xuXG5cdFx0Ly8gSWYgd2UgZ290IGEgNDAxLCBsZXQgZXZlcnlvbmUga25vdyB3ZSBzaWduZWQgb3V0XG5cdFx0aWYoeGhyLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWdub3V0Jyk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBJZiB3ZSBoYXZlIGEgc2Vzc2lvbiwgZmV0Y2ggdGhlIHRocm93ZXJcblx0aWYoU2VydmljZXMuc2Vzc2lvbigpKSB7XG5cdFx0TG9hZGVyLnNob3coKTtcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ3Nlc3Npb24nLCB7fSkuZG9uZShyZXMgPT4ge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicsIHJlcy5kYXRhKTtcblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRMb2FkZXIuaGlkZSgpO1xuXG5cdC8vIE1ha2UgRXZlbnRzIGF2YWlsYWJsZSBmcm9tIGNvbnNvbGVcblx0d2luZG93LkV2ZW50cyA9IEV2ZW50cztcbn0pKCk7XG5cbi8vIEV4cG9ydFxubW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuIiwiLyoqXG4gKiBGb3JtcyBNb2R1bGVcbiAqXG4gKiBDbGFzc2VzIGFuZCBmdW5jdGlvbnMgdXNlZCBieSBhbGwgZm9ybXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgRlVFTCBmb3IgdGhlIEZJUkVcbiAqIEBjcmVhdGUgMjAxOC0xMi0wOFxuICovXG5cbi8vIEVycm9yIGNsYXNzIGRlZmluZVxudmFyIEVSUk9SX0NMQVNTID0gJ2Vycm9yJztcblxuLyoqXG4gKiBBZGQgQ2xhc3NcbiAqXG4gKiBBZGRzIHRoZSBlcnJvciBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnRcbiAqXG4gKiBAbmFtZSBfYWRkQ2xhc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIEVsZW1lbnQgZWxcdFRoZSBlbGVtZW50IHRvIHJlbW92ZSB0aGUgY2xhc3MgZnJvbVxuICovXG5mdW5jdGlvbiBfYWRkQ2xhc3MoZWwpIHtcblx0aWYoIWVsLmNsYXNzTmFtZSkge1xuXHRcdGVsLmNsYXNzTmFtZSA9IEVSUk9SX0NMQVNTO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBuYW1lcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXHRcdGlmKG5hbWVzLmluZGV4T2YoRVJST1JfQ0xBU1MpID09IC0xKSB7XG5cdFx0XHRuYW1lcy5wdXNoKEVSUk9SX0NMQVNTKTtcblx0XHRcdGVsLmNsYXNzTmFtZSA9IG5hbWVzLmpvaW4oJyAnKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgQ2xhc3NcbiAqXG4gKiBSZW1vdmVzIHRoZSBlcnJvciBjbGFzcyBuYW1lIGZyb20gYW4gZWxlbWVudFxuICpcbiAqIEBuYW1lIF9yZW1vdmVDbGFzc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gRWxlbWVudCBlbFx0VGhlIGVsZW1lbnQgdG8gcmVtb3ZlIHRoZSBjbGFzcyBmcm9tXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3JlbW92ZUNsYXNzKGVsKSB7XG5cdGlmKGVsLmNsYXNzTmFtZS5pbmNsdWRlcyhFUlJPUl9DTEFTUykpIHtcblx0XHRsZXQgbmFtZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRuYW1lcy5zcGxpY2UobmFtZXMuaW5kZXhPZihFUlJPUl9DTEFTUyksIDEpO1xuXHRcdGVsLmNsYXNzTmFtZSA9IG5hbWVzLmpvaW4oJyAnKVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgQmFzZSBOb2RlIENvbXBvbmVudFxuY2xhc3MgX0Jhc2VOb2RlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGVycm9ycyhlcnJvcnMpIHtcblx0XHRmb3IobGV0IGsgaW4gZXJyb3JzKSB7XG5cdFx0XHRpZih0aGlzLnJlZnNba10uZXJyb3JzKSB7XG5cdFx0XHRcdHRoaXMucmVmc1trXS5lcnJvcnMoZXJyb3JzW2tdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9hZGRDbGFzcyh0aGlzLnJlZnNba10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIEFycmF5IEZvcm0gQ29tcG9uZW50XG5jbGFzcyBBcnJheU5vZGUgZXh0ZW5kcyBfQmFzZU5vZGUge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cblx0XHQvLyBJbml0IHRoZSByZXR1cm5cblx0XHR2YXIgdmFsdWUgPSBbXVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBhbGwgcmVmc1xuXHRcdGZvcih2YXIgciBpbiB0aGlzLnJlZnMpIHtcblx0XHRcdGlmKHRoaXMucmVmc1tyXS50eXBlICYmIHRoaXMucmVmc1tyXS50eXBlID09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0dmFsdWUucHVzaCh0aGlzLnJlZnNbcl0uY2hlY2tlZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZS5wdXNoKHRoaXMucmVmc1tyXS52YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSB2YWx1ZXNcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRlcnJvcnMobXNnKSB7XG5cdFx0aWYodGhpcy5yZWZzLmVsLmVycm9ycykge1xuXHRcdFx0dGhpcy5yZWZzLmVsLmVycm9ycyhtc2cpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYWRkQ2xhc3ModGhpcy5yZWZzLmVsKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVmcy5lbC52YWx1ZTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2KSB7XG5cdFx0dGhpcy5yZWZzLmVsLnZhbHVlID0gdjtcblx0XHRpZih0aGlzLnZhbHVlU2V0KSB7XG5cdFx0XHR0aGlzLnZhbHVlU2V0KCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgYmFzZSBDb21wb25lbnRcbmNsYXNzIFBhcmVudCBleHRlbmRzIF9CYXNlTm9kZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJldHVyblxuXHRcdHZhciB2YWx1ZSA9IHt9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCByZWZzXG5cdFx0Zm9yKHZhciByIGluIHRoaXMucmVmcykge1xuXHRcdFx0aWYodGhpcy5yZWZzW3JdLnR5cGUgJiYgdGhpcy5yZWZzW3JdLnR5cGUgPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHR2YWx1ZVtyXSA9IHRoaXMucmVmc1tyXS5jaGVja2VkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbcl0gPSB0aGlzLnJlZnNbcl0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSB2YWx1ZVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFycmF5Tm9kZTogQXJyYXlOb2RlLFxuXHROb2RlOiBOb2RlLFxuXHRQYXJlbnQ6IFBhcmVudCxcblx0ZXJyb3JBZGQ6IF9hZGRDbGFzcyxcblx0ZXJyb3JSZW1vdmU6IF9yZW1vdmVDbGFzcyxcblx0ZXJyb3JGb2N1czogZnVuY3Rpb24oZXYpIHtcblxuXHRcdC8vIElmIHRoZSBzcGVjaWFsIGVsZW1lbnRzIHByb3AgaXMgc2V0XG5cdFx0aWYoZXYuZWxlbWVudHMpIHtcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBldi5lbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRfcmVtb3ZlQ2xhc3MoZXYuZWxlbWVudHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGFzc3VtaW5nIGN1cnJlbnRUYXJnZXRcblx0XHRlbHNlIHtcblx0XHRcdF9yZW1vdmVDbGFzcyhldi5jdXJyZW50VGFyZ2V0KTtcblx0XHR9XG5cdH1cbn07XG4iLCIvKipcbiAqIElucHV0IEVudGVyXG4gKlxuICogQW4gaW5wdXQgYm94IHRoYXQgaGFuZGxlcyBFbnRlciBrZXkgcHJlc3NlcyBhbmQgc2VuZHMgdGhlbSB0byBhIG9uRW50ZXJcbiAqIGNhbGxiYWNrXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IEZVRUwgZm9yIHRoZSBGSVJFXG4gKiBAY3JlYXRlZCAyMDE4LTEyLTAxXG4gKi9cblxuLy8gUmVhY3QgQmFzZVxudmFyIEZvcm1zID0gcmVxdWlyZSgnLi4vYmFzZS9mb3Jtcy5qc3gnKTtcblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIElucHV0RW50ZXIgZXh0ZW5kcyBGb3Jtcy5Ob2RlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGNhbGxiYWNrXG5cdFx0dGhpcy5vbkVudGVyID0gcHJvcHMub25FbnRlcjtcblx0XHRkZWxldGUgdGhpcy5wcm9wcy5vbkVudGVyO1xuXG5cdFx0Ly8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9XG5cblx0XHQvLyBCaW5kIGZ1bmN0aW9uc1xuXHRcdHRoaXMua2V5UHJlc3MgPSB0aGlzLmtleVByZXNzLmJpbmQodGhpcyk7XG5cdH1cblxuXHRrZXlQcmVzcyhldikge1xuXG5cdFx0Ly8gSWYgYW4gRW50ZXIga2V5IHdhcyBwcmVzc2VkIGFuZCB0aGUgY2FsbGJhY2sgd2FzIHNldFxuXHRcdGlmKGV2LmtleSA9PSAnRW50ZXInICYmIHRoaXMub25FbnRlcikge1xuXHRcdFx0dGhpcy5vbkVudGVyKGV2LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gb25LZXlQcmVzcyBjYWxsYmFja1xuXHRcdGlmKHRoaXMucHJvcHMub25LZXlQcmVzcykge1xuXHRcdFx0dGhpcy5wcm9wcy5vbktleVByZXNzKGV2KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBvbkVudGVyLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR7Li4ucmVzdH1cblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRyZWY9XCJlbFwiXG5cdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMua2V5UHJlc3N9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbnRlcjtcbiIsIi8qKlxuICogTWVudSBDb21wb25lbnRcbiAqXG4gKiBBIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbWVudSBvbiB0aGUgc2NyZWVuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0xMVxuICovXG5cbi8vIENyZWF0ZSB0aGUgTWVudSBDb21wb25lbnRcbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50XG57XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIGJhc2Ugc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcblx0XHR9O1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBjbG9zZVxuXHRcdGlmKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG5cdFx0XHR0aHJvdyAnTWVudSByZXF1aXJlcyBvbkNoYW5nZSBjYWxsYmFjayc7XG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5pdGVtQ2xpY2sgPSB0aGlzLml0ZW1DbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aXRlbUNsaWNrKG5hbWUpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IG5hbWV9LCAoKSA9PiB7XG5cdFx0XHRzZWxmLnByb3BzLm9uQ2hhbmdlKG5hbWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG5cdFx0XHR2YXIgc3RhdHVzID0gKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPT0gY2hpbGQucHJvcHMubmFtZSkgPyAnYWN0aXZlJyA6ICcnO1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdFx0XHRvbkNsaWNrOiBzZWxmLml0ZW1DbGljayxcblx0XHRcdFx0Y2xhc3NOYW1lOiBzdGF0dXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzZWxlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZDtcblx0fVxuXG5cdHNldCBzZWxlY3RlZChuKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IG59KVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgTWVudSBJdGVtIENvbXBvbmVudFxuY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgYmFzZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gbmFtZVxuXHRcdGlmKCF0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdHRocm93ICdJdGVtIHJlcXVpcmVzIG5hbWUgYXR0cmlidXRlJztcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmNsaWNrID0gdGhpcy5jbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y2xpY2soZXYpIHtcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm5hbWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmNsaWNrfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgY29tcG9uZW50c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWVudVwiOiBNZW51LFxuXHRcIkl0ZW1cIjogSXRlbVxufVxuIiwiLyoqXG4gKiBNZXNzYWdlc1xuICpcbiAqIFNob3dzIGEgbWVzc2FnZSB3aXRoIGJ1dHRvbnMgdG8gYWNjZXB0LCBkaXNtaXNzLCBldGNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTMxXG4gKi9cblxuLy8gR2VuZXJpY1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIE1ha2Ugc3VyZSB0aGVyZSBpc24ndCBtb3JlIHRoYW4gb25lIE1lc3NhZ2VzXG52YXIgX2luc3RhbmNlID0gZmFsc2U7XG5cbi8vIENyZWF0ZSB0aGUgbWVzc2FnZSBjb21wb25lbnRcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge307XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMuYnV0dG9uLmJpbmQodGhpcyk7XG5cdH1cblxuXHRidXR0b24oZXYpIHtcblxuXHRcdC8vIENhbGwgdGhlIGNhbGxiYWNrIGFzc29jaWF0ZWQsIGlmIGl0IHJldHVybnMgc3VjY2Vzc2Z1bCwgcmVtb3ZlIHRoZVxuXHRcdC8vXHRtZXNzYWdlXG5cdFx0aWYodGhpcy5wcm9wcy5idXR0b25zW2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uY2FsbGJhY2sodGhpcy5wcm9wcy5pZCkpIHtcblx0XHRcdHRoaXMucHJvcHMucmVtb3ZlKHRoaXMucHJvcHMuaWQpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuXHRcdFx0XHQ8cD57c2VsZi5wcm9wcy50ZXh0fTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG5cdFx0XHRcdFx0e3NlbGYucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24oYiwgaSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpfSBkYXRhLWluZGV4PXtpfSBvbkNsaWNrPXtzZWxmLmJ1dHRvbn0+e2IudGl0bGV9PC9idXR0b24+XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIHByaW1hcnkgY29tcG9uZW50XG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhbiBpbnN0YW5jZVxuXHRcdGlmKF9pbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgJ0NhblxcJ3QgaGF2ZSBtb3JlIHRoYW4gb25lIE1lc3NhZ2VzJztcblx0XHR9XG5cdFx0X2luc3RhbmNlID0gdHJ1ZTtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtZXNzYWdlczogW11cblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdC8vIFRyYWNrIGFueSBtZXNzYWdlIGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2UpO1xuXHRcdEV2ZW50cy5hZGQoJ21lc3NhZ2VfcmVtb3ZlJywgdGhpcy5yZW1vdmUpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgbWVzc2FnZSBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlKTtcblx0XHRFdmVudHMucmVtb3ZlKCdtZXNzYWdlX3JlbW92ZScsIHRoaXMucmVtb3ZlKTtcblx0fVxuXG5cdG1lc3NhZ2UoaWQsIGNvbmYpIHtcblxuXHRcdC8vIENsb25lIHRoZSBtZXNzYWdlc1xuXHRcdHZhciBtc2dzID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG5cblx0XHQvLyBQdXNoIHRoZSBuZXcgbWVzc2FnZVxuXHRcdG1zZ3NbaWRdID0gY29uZjtcblxuXHRcdC8vIFNldCB0aGUgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1lc3NhZ2VzXCI6IG1zZ3N9KTtcblx0fVxuXG5cdHJlbW92ZShpZCkge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1lc3NhZ2VzXG5cdFx0dmFyIG1zZ3MgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgcmVxdWVzdGVkIElEXG5cdFx0ZGVsZXRlIG1zZ3NbaWRdO1xuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1wibWVzc2FnZXNcIjogbXNnc30pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIm1lc3NhZ2VzXCI+XG5cdFx0XHRcdHtUb29scy5vbWFwKHRoaXMuc3RhdGUubWVzc2FnZXMsIGZ1bmN0aW9uKG0sIGspIHtcblx0XHRcdFx0XHRyZXR1cm4gPE1lc3NhZ2Ugey4uLm19IGtleT17a30gaWQ9e2t9IHJlbW92ZT17c2VsZi5yZW1vdmV9IC8+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIENvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlc1xuIiwiLyoqXG4gKiBNb2RlbCBDb21wb25lbnRcbiAqXG4gKiBBIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbW9kYWwgYm94IG9uIHRoZSBzY3JlZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTExXG4gKi9cblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudFxue1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBjbG9zZVxuXHRcdGlmKCF0aGlzLnByb3BzLmNsb3NlKSB7XG5cdFx0XHR0aHJvdyAnTW9kYWwgcmVxdWlyZXMgY2xvc2UgY2FsbGJhY2snO1xuXHRcdH1cblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYnV0dG9uQ2xpY2sgPSB0aGlzLmJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50cmFwRXNjYXBlID0gdGhpcy50cmFwRXNjYXBlLmJpbmQodGhpcyk7XG5cdH1cblxuXHQvLyBJZiBhIGJ1dHRvbiBpcyBwdXNoZWRcblx0YnV0dG9uQ2xpY2soZXYpIHtcblxuXHRcdC8vIEdldCB0aGUgYnV0dG9uIHVzaW5nIHRoZSBpbmRleFxuXHRcdHZhciBidG4gPSB0aGlzLnByb3BzLmJ1dHRvbnNbZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYSBjYWxsYmFja1xuXHRcdGlmKHR5cGVvZiBidG4uY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YnRuLmNhbGxiYWNrKGJ0bik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Ly8gVHJhcCB0aGUgZXNjYXBlIGtleVxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnRyYXBFc2NhcGUpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFwcGluZyB0aGUgZXNjYXBlIGtleVxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnRyYXBFc2NhcGUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBzdHlsZXNcblx0XHR2YXIgc3R5bGVzID0ge31cblx0XHRpZih0aGlzLnByb3BzLmhlaWdodCkgc3R5bGVzLmhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0O1xuXHRcdGlmKHRoaXMucHJvcHMubWF4SGVpZ2h0KSBzdHlsZXMubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG5cdFx0aWYodGhpcy5wcm9wcy5tYXhXaWR0aCkgc3R5bGVzLm1heEhlaWdodCA9IHRoaXMucHJvcHMubWF4SGVpZ2h0O1xuXHRcdGlmKHRoaXMucHJvcHMud2lkdGgpIHN0eWxlcy53aWR0aCA9IHRoaXMucHJvcHMud2lkdGg7XG5cblx0XHQvLyBSZXR1cm4gdGhlIEhUTUxcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1jbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9PjwvaT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmJ1dHRvbnMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbihidG4sIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gZGF0YS1pbmRleD17aX0gY2xhc3NOYW1lPVwic21hbGxcIiBvbkNsaWNrPXtzZWxmLmJ1dHRvbkNsaWNrfSBkaXNhYmxlZD17YnRuWydkaXNhYmxlZCddfT57YnRuWyduYW1lJ119PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHQvLyBUcmFwcyBFU0Mga2V5IGNsaWNrcyBzbyB3ZSBjYW4gY2xvc2UgdGhlIE1vZGFsIHdpbmRvd1xuXHR0cmFwRXNjYXBlKGV2KSB7XG5cdFx0aWYoZXYua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdHRoaXMucHJvcHMuY2xvc2UoKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTW9kYWw7XG4iLCIvKipcbiAqIFBvcHVwc1xuICpcbiAqIFNob3dzIGEgcG9wdXAgb2YgdHlwZSBlcnJvciwgc3VjY2Vzcywgb3Igd2FybmluZ1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTItMDhcbiAqL1xuXG4vLyBEZWZpbmVzXG52YXIgU1VDQ0VTU19USU1FT1VUID0gMjAwMDtcbnZhciBFUlJPUl9USU1FT1VUID0gMTAwMDA7XG52YXIgV0FSTklOR19USU1FT1VUID0gNTAwMDtcbnZhciBTVEVQX1RJTUVPVVQgPSAyMDtcbnZhciBXSURUSF9TVEVQUyA9IDQwO1xudmFyIEhFSUdIVF9TVEVQUyA9IDIwO1xudmFyIE1BUkdJTiA9IDU7XG5cbi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIFRvb2xzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy90b29scy5qcycpO1xuXG4vLyBNYWtlIHN1cmUgdGhlcmUgaXNuJ3QgbW9yZSB0aGFuIG9uZSBQb3B1cHNcbnZhciBfaW5zdGFuY2UgPSBmYWxzZTtcblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIFBvcHVwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhbiBpbnN0YW5jZVxuXHRcdGlmKF9pbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgJ0NhblxcJ3QgaGF2ZSBtb3JlIHRoYW4gb25lIFBvcHVwcyc7XG5cdFx0fVxuXHRcdF9pbnN0YW5jZSA9IHRydWU7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cG9wdXBzOiBbXSxcblx0XHRcdHRpbWVyOiBudWxsXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuZXJyb3IgPSB0aGlzLmVycm9yLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb3B1cCA9IHRoaXMucG9wdXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLnByb2Nlc3MuYmluZCh0aGlzKTtcblx0XHR0aGlzLndhcm5pbmcgPSB0aGlzLndhcm5pbmcuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHQvLyBUcmFjayBhbnkgcG9wdXAgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnZXJyb3InLCB0aGlzLmVycm9yKTtcblx0XHRFdmVudHMuYWRkKCdwb3B1cCcsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5hZGQoJ3N1Y2Nlc3MnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMuYWRkKCd3YXJuaW5nJywgdGhpcy53YXJuaW5nKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHBvcHVwIGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ2Vycm9yJywgdGhpcy5lcnJvcik7XG5cdFx0RXZlbnRzLnJlbW92ZSgncG9wdXAnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzdWNjZXNzJywgdGhpcy5wb3B1cCk7XG5cdFx0RXZlbnRzLnJlbW92ZSgnd2FybmluZycsIHRoaXMud2FybmluZyk7XG5cdH1cblxuXHRlcnJvcihtc2cpIHtcblx0XHR0aGlzLnBvcHVwKG1zZywgJ2Vycm9yJyk7XG5cdH1cblxuXHRwcm9jZXNzKCkge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIHN0YXRlXG5cdFx0dmFyIHN0YXRlID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZSk7XG5cblx0XHQvLyBJZiB3ZSB3ZXJlIHdhaXRpbmdcblx0XHRpZihzdGF0ZS50aW1lci5zdGVwID09IDApIHtcblxuXHRcdFx0Ly8gU3RhcnQgdGhlIHByb2Nlc3MgdG8gaGlkZSB0aGUgZmlyc3QgcG9wdXBcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnbCddID0gTUFSR0lOO1xuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydyJ10gPSBNQVJHSU47XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBzdGVwIHRpbWVvdXRzXG5cdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgU1RFUF9USU1FT1VUKTtcblx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byBtb3ZlIHRoZSBmaXJzdCBwb3B1cCBvZmYgdGhlIHNjcmVlblxuXHRcdGVsc2UgaWYoc3RhdGUudGltZXIuc3RlcCA+PSAxICYmIHN0YXRlLnRpbWVyLnN0ZXAgPD0gNDApIHtcblxuXHRcdFx0Ly8gR2V0IHRoZSBpbm5lciB3aWR0aCBvZiB0aGUgc2NyZWVuIGFuZCBkaXZpZGUgYnkgdGhlIHN0ZXBzXG5cdFx0XHR2YXIgc3RlcCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gV0lEVEhfU1RFUFM7XG5cblx0XHRcdC8vIFN1YnRyYWN0IGl0IGZyb20gdGhlIGxlZnQgYW5kIHJpZ2h0XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2wnXSAtPSBzdGVwO1xuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydyJ10gKz0gc3RlcDtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXh0IHRpbWVvdXRcblx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBTVEVQX1RJTUVPVVQpO1xuXHRcdFx0c3RhdGUudGltZXIuc3RlcCArPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byBtb3ZlIHRoZSBmaXJzdCBwb3B1cCB1cFxuXHRcdGVsc2UgaWYoc3RhdGUudGltZXIuc3RlcCA+PSA0MSAmJiBzdGF0ZS50aW1lci5zdGVwIDw9IDYwKSB7XG5cblx0XHRcdC8vIElmIHdlJ3JlIG9uIHRoZSBmaXJzdCBzdGVwXG5cdFx0XHRpZihzdGF0ZS50aW1lci5zdGVwID09IDQxKSB7XG5cdFx0XHRcdHN0YXRlLnBvcHVwc1swXVsnb2gnXSA9IHRoaXMucmVmc1tcIjBcIl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2gnXSA9IHRoaXMucmVmc1tcIjBcIl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHZXQgdGhlIGhlaWdodCBvZiB0aGUgZGl2IGFuZCBkaXZpZGUgYnkgdGhlIHN0ZXBzXG5cdFx0XHR2YXIgc3RlcCA9IHN0YXRlLnBvcHVwc1swXVsnb2gnXSAvIEhFSUdIVF9TVEVQUztcblxuXHRcdFx0Ly8gU3VidHJhY3QgaXQgZnJvbSB0aGUgY3VycmVudCBoZWlnaHRcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnaCddIC09IHN0ZXA7XG5cblx0XHRcdC8vIFNldCB0aGUgbmV4dCB0aW1lb3V0XG5cdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgU1RFUF9USU1FT1VUKTtcblx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgKz0gMTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBwb3B1cCBjb21wbGV0ZWx5XG5cdFx0ZWxzZSBpZihzdGF0ZS50aW1lci5zdGVwID09IDYxKSB7XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgY3VycmVudCBmaXJzdCBwb3B1cFxuXHRcdFx0c3RhdGUucG9wdXBzLnNwbGljZSgwLCAxKTtcblxuXHRcdFx0Ly8gSWYgd2Ugc3RpbGwgaGF2ZSBwb3B1cHNcblx0XHRcdGlmKHN0YXRlLnBvcHVwcy5sZW5ndGgpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB0aGUgdGltZXIgc3RlcHNcblx0XHRcdFx0c3RhdGUudGltZXIucmVzID0gc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIHN0YXRlLnBvcHVwc1swXS50aW1lb3V0KTtcblx0XHRcdFx0c3RhdGUudGltZXIuc3RlcCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIG5vIG1vcmUgdGltZW91dHNcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdGF0ZS50aW1lciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJwb3B1cHNcIiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUucG9wdXBzLmxlbmd0aCA/ICdibG9jaycgOiAnbm9uZSd9fT5cblx0XHRcdFx0e3RoaXMuc3RhdGUucG9wdXBzLm1hcCgobXNnLCBpKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHN0eWxlID0ge31cblx0XHRcdFx0XHRpZih0eXBlb2YgbXNnLmwgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpbkxlZnQgPSBtc2cubCArICdweCc7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5SaWdodCA9IG1zZy5yICsgJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYodHlwZW9mIG1zZy5oICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5oZWlnaHQgPSBtc2cuaCArICdweCc7XG5cdFx0XHRcdFx0XHRzdHlsZS5wYWRkaW5nID0gMDtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5Ub3AgPSAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gcmVmPXtcIlwiICsgaX0gY2xhc3NOYW1lPXttc2cudHlwZX0gc3R5bGU9e3N0eWxlfT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtcImZhcyBmYS1cIiArIG1zZy5pY29ufSAvPlxuXHRcdFx0XHRcdFx0XHR7bXNnLnRleHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHBvcHVwKHRleHQsIHR5cGUpIHtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gdHlwZVxuXHRcdGlmKHR5cGVvZiB0eXBlID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdH1cblxuXHRcdHZhciBpVGltZW91dCA9IDA7XG5cdFx0dmFyIHNJY29uID0gJyc7XG5cdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRpVGltZW91dCA9IFNVQ0NFU1NfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnY2hlY2stY2lyY2xlJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdGlUaW1lb3V0ID0gRVJST1JfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcblx0XHRcdFx0Y29uc29sZS5lcnJvcih0ZXh0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3YXJuaW5nJzpcblx0XHRcdFx0aVRpbWVvdXQgPSBXQVJOSU5HX1RJTUVPVVQ7XG5cdFx0XHRcdHNJY29uID0gJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcblx0XHRcdFx0Y29uc29sZS53YXJuKHRleHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IFwiSW52YWxpZCBwb3B1cCB0eXBlOiBcIiArIHR5cGU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgdGhlIHN0YXRlXG5cdFx0dmFyIHN0YXRlID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZSk7XG5cblx0XHQvLyBBZGQgdGhlIHBvcHVwXG5cdFx0c3RhdGUucG9wdXBzLnB1c2goe1xuXHRcdFx0aWNvbjogc0ljb24sXG5cdFx0XHR0ZXh0OiB0ZXh0LFxuXHRcdFx0dGltZW91dDogaVRpbWVvdXQsXG5cdFx0XHR0eXBlOiB0eXBlXG5cdFx0fSk7XG5cblx0XHQvLyBTZXQgdGhlIHRpbWVyXG5cdFx0aWYoc3RhdGUudGltZXIgPT0gbnVsbCkge1xuXHRcdFx0c3RhdGUudGltZXIgPSB7XG5cdFx0XHRcdHJlczogc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIGlUaW1lb3V0KSxcblx0XHRcdFx0c3RlcDogMFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblxuXHR3YXJuaW5nKG1zZykge1xuXHRcdHRoaXMucG9wdXAobXNnLCAnd2FybmluZycpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwcztcbiIsIi8qKlxuICogSGVhZGVyXG4gKlxuICogTWFuYWdlcyBzaWduIGluIC8gc2lnbiBvdXQgLyBzaWduIHVwXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yMVxuICovXG5cbi8vIGNvbXBvbmVudHNcbnZhciBGb3JtcyA9IHJlcXVpcmUoJy4vYmFzZS9mb3Jtcy5qc3gnKTtcbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbW9kYWwuanN4Jyk7XG52YXIgVGhyb3dlciA9IHJlcXVpcmUoJy4vdGhyb3dlci5qc3gnKTtcblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpO1xuXG4vLyBIZWFkZXIgY29tcG9uZW50XG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IGZhbHNlXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYWNjb3VudFNob3cgPSB0aGlzLmFjY291bnRTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5ob21lID0gdGhpcy5ob21lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluU2hvdyA9IHRoaXMuc2lnbmluU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluVHJpZ2dlciA9IHRoaXMuc2lnbmluVHJpZ2dlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dFRyaWdnZXIgPSB0aGlzLnNpZ25vdXRUcmlnZ2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdudXAgPSB0aGlzLnNpZ251cC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbnVwU2hvdyA9IHRoaXMuc2lnbnVwU2hvdy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YWNjb3VudFNob3coZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGFsXCI6IHRoaXMuc3RhdGUubW9kYWwgPT0gXCJhY2NvdW50XCIgPyBmYWxzZSA6ICdhY2NvdW50J30pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluVHJpZ2dlcik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dFRyaWdnZXIpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pblRyaWdnZXIpO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXRUcmlnZ2VyKTtcblx0fVxuXG5cdGhvbWUoKSB7XG5cdFx0SGFzaC5zZXQoXCJwYWdlXCIsIG51bGwpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zIGZyaWdodCBhcmlnaHRcIj5cblx0XHRcdFx0XHR7c2VsZi5zdGF0ZS50aHJvd2VyID9cblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXVzZXJcIiB0aXRsZT1cIkFjY291bnRcIiBvbkNsaWNrPXtzZWxmLmFjY291bnRTaG93fT48L2k+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wb3dlci1vZmZcIiB0aXRsZT1cIlNpZ24gT3V0XCIgb25DbGljaz17c2VsZi5zaWdub3V0fT48L2k+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItcGx1c1wiIHRpdGxlPVwiQ3JlYXRlIEFjY291bnRcIiBvbkNsaWNrPXtzZWxmLnNpZ251cFNob3d9PjwvaT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24taW4tYWx0XCIgdGl0bGU9XCJTaWduIEluXCIgb25DbGljaz17c2VsZi5zaWduaW5TaG93fT48L2k+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoMSBzdHlsZT17e1wiY3Vyc29yXCI6IFwicG9pbnRlclwifX0gb25DbGljaz17dGhpcy5ob21lfT5BeGVHYWlucy5jb208L2gxPlxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnc2lnbmluJyAmJlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJzaWduaW5cIiBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwiYWxpYXNcIiB0eXBlPVwidGV4dFwiIHRpdGxlPVwiYWxpYXNcIiBwbGFjZWhvbGRlcj1cImFsaWFzXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwicGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFyaWdodFwiPjxidXR0b24gb25DbGljaz17c2VsZi5zaWduaW59PnNpZ24gaW48L2J1dHRvbj48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kYWwgPT0gJ3NpZ251cCcgJiZcblx0XHRcdFx0XHQ8ZGl2IGlkPVwic2lnbnVwXCIgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInNpZ251cF9hbGlhc1wiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJhbGlhc1wiIHBsYWNlaG9sZGVyPVwiYWxpYXNcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWwgKG5vdCByZXF1aXJlZClcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJzaWdudXBfcGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJyZXBlYXRfcGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJyZXBlYXQgcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXJpZ2h0XCI+PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLnNpZ251cH0+c2lnbiB1cDwvYnV0dG9uPjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnYWNjb3VudCcgJiZcblx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdHRpdGxlPVwiQWNjb3VudFwiXG5cdFx0XHRcdFx0XHRjbG9zZT17c2VsZi5hY2NvdW50U2hvd31cblx0XHRcdFx0XHRcdHdpZHRoPVwiOTUlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VGhyb3dlciAvPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdH1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG5cdH1cblxuXHRzaWduaW4oZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBTdG9yZSB0aGUgYWxpYXNcblx0XHR2YXIgYWxpYXMgPSB0aGlzLnJlZnMuYWxpYXMudmFsdWU7XG5cblx0XHQvLyBDYWxsIHRoZSBzaWduaW5cblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnc2lnbmluJywge1xuXHRcdFx0XCJhbGlhc1wiOiBhbGlhcyxcblx0XHRcdFwicGFzc3dkXCI6IHRoaXMucmVmcy5wYXNzd2QudmFsdWVcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0dmFyIGVycm9yID0gJyAnO1xuXHRcdFx0XHRzd2l0Y2gocmVzLmVycm9yLmNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDEwMDE6XG5cdFx0XHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbWVzc2FnZSBhbmQgbWFrZSB0aGUgcmVmIHJlZFxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIHJlcy5lcnJvci5tc2cpIHtcblx0XHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwMTpcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdBbGlhcyBvciBwYXNzd29yZCBpbnZhbGlkJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDQ6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9wYXNzd2QnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmQgbm90IHN0cm9uZyBlbm91Z2gnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIHNlc3Npb24gd2l0aCB0aGUgc2VydmljZVxuXHRcdFx0XHRTZXJ2aWNlcy5zZXNzaW9uKHJlcy5kYXRhLnNlc3Npb24pO1xuXG5cdFx0XHRcdC8vIEdyZWV0IHRocm93ZXJcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBcIldlbGNvbWUgYmFjayB0byBBeGVHYWlucyBcIiArIGFsaWFzKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWduaW4gZXZlbnRcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicsIHJlcy5kYXRhLnRocm93ZXIpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbmluU2hvdyhldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kYWxcIjogKHRoaXMuc3RhdGUubW9kYWwgPT0gJ3NpZ25pbicgPyBmYWxzZSA6ICdzaWduaW4nKX0pO1xuXHR9XG5cblx0c2lnbmluVHJpZ2dlcih0aHJvd2VyKSB7XG5cblx0XHQvLyBIaWRlIGFueSBtb2RhbHMgYW5kIHNldCB0aGUgdGhyb3dlclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RhbFwiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiB0aHJvd2VyXG5cdFx0fSk7XG5cdH1cblxuXHRzaWdub3V0KGV2KSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2lnbm91dFxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdzaWdub3V0Jywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHRoZSBzZXNzaW9uXG5cdFx0XHRcdFNlcnZpY2VzLnNlc3Npb24obnVsbCk7XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciB0aGUgc2lnbm91dCBldmVudFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbm91dCcpO1xuXHRcdFx0fVxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25vdXRUcmlnZ2VyKCkge1xuXG5cdFx0Ly8gSGlkZSBhbmQgbW9kYWxzIGFuZCBzZXQgdGhlIHRocm93ZXIgdG8gZmFsc2Vcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcInRocm93ZXJcIjogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdHNpZ251cChldikge1xuXG5cdFx0Ly8gSWYgdGhlIGFsaWFzIGlzIG5vdCBsb25nIGVub3VnaFxuXHRcdGlmKHRoaXMucmVmcy5zaWdudXBfYWxpYXMudHJpbSgpLmxlbmd0aCA8IDMpIHtcblx0XHRcdEZvcm1zLmVycm9yQWRkKHRoaXMucmVmcy5zaWdudXBfYWxpYXMpO1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0FsaWFzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxuXHRcdGlmKHRoaXMucmVmcy5zaWdudXBfcGFzc3dkLnZhbHVlICE9IHRoaXMucmVmcy5yZXBlYXRfcGFzc3dkLnZhbHVlKSB7XG5cdFx0XHRGb3Jtcy5lcnJvckFkZCh0aGlzLnJlZnMucmVwZWF0X3Bhc3N3ZCk7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBJbml0IHRoZSBkYXRhXG5cdFx0dmFyIG9EYXRhID0ge1xuXHRcdFx0XCJhbGlhc1wiOiB0aGlzLnJlZnMuc2lnbnVwX2FsaWFzLnZhbHVlLnRyaW0oKSxcblx0XHRcdFwicGFzc3dkXCI6IHRoaXMucmVmcy5zaWdudXBfcGFzc3dkLnZhbHVlXG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlLW1haWxcblx0XHRpZih0aGlzLnJlZnMuZW1haWwudmFsdWUpIHtcblx0XHRcdHZhciBlbWFpbCA9IHRoaXMucmVmcy5lbWFpbC52YWx1ZS50cmltKCk7XG5cdFx0XHRpZihlbWFpbCkge1xuXHRcdFx0XHRvRGF0YVsnZW1haWwnXSA9IGVtYWlsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGwgdGhlIHNpZ251cFxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdzaWdudXAnLCBvRGF0YSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdHZhciBlcnJvciA9ICcgJztcblx0XHRcdFx0c3dpdGNoKHJlcy5lcnJvci5jb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAxMDAxOlxuXHRcdFx0XHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIG1lc3NhZ2UgYW5kIG1ha2UgdGhlIHJlZiByZWRcblx0XHRcdFx0XHRcdGZvcih2YXIgaSBpbiByZXMuZXJyb3IubXNnKSB7XG5cdFx0XHRcdFx0XHRcdGlmKGkgPT0gJ2FsaWFzJykge1xuXHRcdFx0XHRcdFx0XHRcdGkgPSAnc2lnbnVwX2FsaWFzJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmKGkgPT0gJ3Bhc3N3ZCcpIHtcblx0XHRcdFx0XHRcdFx0XHRpID0gJ3NpZ251cF9wYXNzd2QnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1tpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDA6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9hbGlhcyddKTtcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdBbGlhcyBpcyBhbHJlYWR5IGluIHVzZScpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMjA0OlxuXHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzWydzaWdudXBfcGFzc3dkJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ1Bhc3N3b3JkIG5vdCBzdHJvbmcgZW5vdWdoJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDY6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ2VtYWlsJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0UtTWFpbCBhbHJlYWR5IGluIHVzZScpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgc2Vzc2lvbiB3aXRoIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFNlcnZpY2VzLnNlc3Npb24ocmVzLmRhdGEudGhyb3dlci5faWQpO1xuXG5cdFx0XHRcdC8vIFJldmVydCB0byBzaWduIGluIGFuZCBzaG93IHN1Y2Nlc3MgbWVzc2FnZVxuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwidGhyb3dlclwiOiB0cnVlXG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIEdyZWV0IHRocm93ZXJcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBcIldlbGNvbWUgdG8gQXhlR2FpbnMgXCIgKyByZXMuZGF0YS50aHJvd2VyLmFsaWFzKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWduaW4gZXZlbnRcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicsIHJlcy5kYXRhLnRocm93ZXIpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbnVwU2hvdyhldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kYWxcIjogKHRoaXMuc3RhdGUubW9kYWwgPT0gJ3NpZ251cCcgPyBmYWxzZSA6ICdzaWdudXAnKX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjtcbiIsIi8qKlxuICogTWF0Y2hcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBtYXRjaGVzIGFuZCBkaXNwbGF5IHRoZSBhcHByb3ByaWF0ZSBvbmUgYmFzZWQgb24gd2hhdFxuICogaXMgY2hvc2VuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbnZhciB7TWVudSwgSXRlbX0gPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lbnUuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50c1xudmFyIE5hdGYgPSByZXF1aXJlKCcuL25hdGYvbWF0Y2guanN4Jyk7XG5cbi8vIE1hdGNoIGNvbXBvbmVudFxuY2xhc3MgTWF0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm9yZ1wiOiBIYXNoLmdldCgnb3JnJywgJ25hdGYnKVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm9yZ0NoYW5nZSA9IHRoaXMub3JnQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gudW53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBvcmcgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdvcmcnLCBudWxsKTtcblx0fVxuXG5cdG1lbnVDaGFuZ2Uob3JnKSB7XG5cdFx0SGFzaC5zZXQoJ29yZycsIG9yZyk7XG5cdH1cblxuXHRvcmdDaGFuZ2Uob3JnKSB7XG5cdFx0aWYob3JnICE9IHRoaXMuc3RhdGUub3JnKSB7XG5cdFx0XHRpZihvcmcgPT0gbnVsbCkge1xuXHRcdFx0XHRvcmcgPSAnbmF0Zic7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcIm9yZ1wiOiBvcmd9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwibWF0Y2hcIj5cblx0XHRcdFx0PE1lbnUgY2xhc3NOYW1lPVwibWVudSBzZWNvbmRhcnlcIiBzZWxlY3RlZD17c2VsZi5zdGF0ZS5vcmd9IG9uQ2hhbmdlPXtzZWxmLm1lbnVDaGFuZ2V9PlxuXHRcdFx0XHRcdDxJdGVtIG5hbWU9XCJuYXRmXCI+TkFURjwvSXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5vcmcgPT0gJ25hdGYnICYmXG5cdFx0XHRcdFx0XHRcdDxOYXRmIHRocm93ZXI9e3RoaXMucHJvcHMudGhyb3dlcn0gLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoO1xuIiwiLyoqXG4gKiBOQVRGIEJvYXJkXG4gKlxuICogTWFuYWdlcyBhIHN0YW5kYXJkIE5BVEYgYm9hcmRcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTE5XG4gKi9cblxuLy8gQm9hcmQgY29tcG9uZW50XG5jbGFzcyBCb2FyZCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gb25Qb2ludHMgcHJvcFxuXHRcdGlmKCFwcm9wcy5vblBvaW50cykge1xuXHRcdFx0dGhyb3cgJ211c3Qgc3BlY2lmeSBvblBvaW50cyBwcm9wZXJ0eSBmb3IgTkFURiBCb2FyZCc7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJjbHV0Y2hNb2RlXCI6IHByb3BzLmNsdXRjaE1vZGUsXG5cdFx0XHRcInNlbGVjdGVkXCI6IGZhbHNlXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuY2x1dGNoQ2xpY2sgPSB0aGlzLmNsdXRjaENsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5kcm9wQ2xpY2sgPSB0aGlzLmRyb3BDbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9pbnRDbGljayA9IHRoaXMucG9pbnRDbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y2x1dGNoQ2xpY2soZXYpIHtcblxuXHRcdC8vIFN0b3AgcHJvcGFnYXRpb24gbm8gbWF0dGVyIHdoYXRcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIElmIGNsdXRjaGVzIGFyZSBub3QgYWxsb3dlZFxuXHRcdGlmKHRoaXMuc3RhdGUuY2x1dGNoTW9kZSA9PSAnbm9uZScpIHtcblxuXHRcdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0XHR2YXIgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldDtcblxuXHRcdFx0Ly8gR2V0IHRoZSBjbGFzcyBuYW1lXG5cdFx0XHR2YXIgY2xhc3NOYW1lID0gdGFyZ2V0LmNsYXNzTmFtZTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBpbnZhbGlkIGNsYXNzXG5cdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyBpbnZhbGlkJztcblxuXHRcdFx0Ly8gQW5kIHNldCBhIHRpbWVvdXQgdG8gdHVybiBpdCBvZmZcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG5cdFx0XHR9LCA1MDApO1xuXG5cdFx0XHQvLyBEb24ndCBjb3VudCB0aGUgY2xpY2tcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRlbHNlIHtcblxuXHRcdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0XHR0aGlzLnByb3BzLm9uUG9pbnRzKHRydWUsIDcpO1xuXHRcdFx0XHR0aGlzLnJlc2V0Q2x1dGNoKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkXCI6IHRydWV9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkcm9wQ2xpY2soZXYpIHtcblxuXHRcdC8vIFN0b3AgcHJvcGFnYXRpb24gbm8gbWF0dGVyIHdoYXRcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBjdXJyZW50IHRhcmdldFxuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0Ly8gU2VuZCBvdXQgdGhlIGRyb3Bcblx0XHR0aGlzLnByb3BzLm9uUG9pbnRzKHRoaXMuc3RhdGUuc2VsZWN0ZWQsICdkJyk7XG5cblx0XHQvLyBEZS1zZWxlY3QgdGhlIGNsdXRjaCBpZiB0aGVyZSdzIG9uZSBzZWxlY3RlZFxuXHRcdGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHR9XG5cblx0XHQvLyBUdXJuIG9uIHRoZSBhY3RpdmUgZmxhZ1xuXHRcdHRhcmdldC5jbGFzc05hbWUgPSAnZHJvcCBhY3RpdmUnO1xuXG5cdFx0Ly8gQW5kIHNldCBhIHRpbWVvdXQgdG8gdHVybiBpdCBvZmZcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9ICdkcm9wJztcblx0XHR9LCA1MDApO1xuXHR9XG5cblx0cmVzZXRDbHV0Y2goKSB7XG5cblx0XHQvLyBJZiB0aGUgbW9kZSBpcyBzZWxlY3RlZFxuXHRcdGlmKHRoaXMuc3RhdGUuY2x1dGNoTW9kZSA9PSAnc2VsZWN0Jykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJzZWxlY3RlZFwiOiBmYWxzZX0pO1xuXHRcdH1cblx0fVxuXG5cdHBvaW50Q2xpY2soZXYpIHtcblxuXHRcdC8vIFN0b3AgcHJvcGFnYXRpb24gbm8gbWF0dGVyIHdoYXRcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBjdXJyZW50IHRhcmdldFxuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0Ly8gR2V0IHRoZSBjbGFzcyBuYW1lc1xuXHRcdHZhciBjbGFzc05hbWVzID0gdGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG5cdFx0Ly8gSWYgaXQncyBhbHJlYWR5IGFjdGl2ZSwgZG8gbm90aGluZ1xuXHRcdGlmKGNsYXNzTmFtZXNbMV0gJiYgY2xhc3NOYW1lc1sxXSA9PSAnYWN0aXZlJyl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIGNsdXRjaCBzZWxlY3RlZFxuXHRcdGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWQpIHtcblx0XHRcdHRoaXMucHJvcHMub25Qb2ludHModHJ1ZSwgMCk7XG5cdFx0XHR0aGlzLnJlc2V0Q2x1dGNoKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMub25Qb2ludHMoZmFsc2UsIHRhcmdldC5kYXRhc2V0LnZhbHVlKTtcblx0XHR9XG5cblx0XHQvLyBUdXJuIG9uIHRoZSBhY3RpdmUgZmxhZ1xuXHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWVzWzBdICsgJyBhY3RpdmUnO1xuXG5cdFx0Ly8gQW5kIHNldCBhIHRpbWVvdXQgdG8gdHVybiBpdCBvZmZcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbMF07XG5cdFx0fSwgNTAwKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIiBkYXRhLXZhbHVlPXswfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJjbHV0Y2ggbGVmdFwiICsgKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX0gb25DbGljaz17c2VsZi5jbHV0Y2hDbGlja30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcFwiIG9uQ2xpY2s9e3NlbGYuZHJvcENsaWNrfT5EUk9QPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNsdXRjaCByaWdodFwiICsgKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX0gb25DbGljaz17c2VsZi5jbHV0Y2hDbGlja30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib25lXCIgZGF0YS12YWx1ZT17MX0gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRocmVlXCIgZGF0YS12YWx1ZT17M30gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml2ZVwiIGRhdGEtdmFsdWU9ezV9IG9uQ2xpY2s9e3NlbGYucG9pbnRDbGlja30+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHNldCBjbHV0Y2hNb2RlKG1vZGUpIHtcblxuXHRcdC8vIEZpZ3VyZSBvdXQgdGhlIHNlbGVjdGVkIHZhbHVlXG5cdFx0dmFyIHNlbGVjdGVkID0gbnVsbDtcblx0XHRzd2l0Y2gobW9kZSkge1xuXHRcdFx0Y2FzZSAnbm9uZSc6IHNlbGVjdGVkID0gZmFsc2U7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnZXhwZWN0ZWQnOiBzZWxlY3RlZCA9IHRydWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzogc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkOyBicmVhaztcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJjbHV0Y2hNb2RlXCI6IG1vZGUsXG5cdFx0XHRcInNlbGVjdGVkXCI6IHNlbGVjdGVkXG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7XG4iLCIvKipcbiAqIE5BVEYgTWF0Y2hcbiAqXG4gKiBNYW5hZ2VzIGNyZWF0aW5nIGFuZCBwbGF5aW5nIGEgc3RhbmRhcmQgTkFURiBtYXRjaFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2hhc2guanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xudmFyIFRvb2xzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy90b29scy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBUd29XYXkgPSByZXF1aXJlKCcuLi8uLi90d293YXkuanMnKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzLmpzJyk7XG5cbi8vIFJlYWN0IGNvbXBvbmVudHNcbnZhciBCb2FyZCA9IHJlcXVpcmUoJy4vYm9hcmQuanN4Jyk7XG52YXIgT3Bwb25lbnQgPSByZXF1aXJlKCcuLi9vcHBvbmVudC5qc3gnKTtcblxuLy8gTWF0Y2ggQ29tcG9uZW50XG5jbGFzcyBNYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiYWxpYXNcIjogJycsXG5cdFx0XHRcImJpZ2F4ZVwiOiBmYWxzZSxcblx0XHRcdFwiZXhpc3RpbmdcIiA6IGZhbHNlLFxuXHRcdFx0XCJnYW1lc1wiOiBmYWxzZSxcblx0XHRcdFwiaWRcIjogZmFsc2UsXG5cdFx0XHRcIm1hdGNoU3RhdGVcIjogZmFsc2UsXG5cdFx0XHRcIm1vZGVcIjogXCJvcHBvbmVudFwiLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXIsXG5cdFx0XHRcImlzXCI6ICcnLFxuXHRcdFx0XCJvcHBvbmVudFwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmV4aXN0aW5nQ29udGludWUgPSB0aGlzLmV4aXN0aW5nQ29udGludWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmV4aXN0aW5nRGVsZXRlID0gdGhpcy5leGlzdGluZ0RlbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaWRDYWxsYmFjayA9IHRoaXMuaWRDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubWF0Y2hDYWxsYmFjayA9IHRoaXMubWF0Y2hDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3ZlcndyaXRlID0gdGhpcy5vdmVyd3JpdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50cyA9IHRoaXMucG9pbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXF1ZXN0Q2FsbGJhY2sgPSB0aGlzLnJlcXVlc3RDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVxdWVzdENhbmNlbCA9IHRoaXMucmVxdWVzdENhbmNlbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVxdWVzdENyZWF0ZSA9IHRoaXMucmVxdWVzdENyZWF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluID0gdGhpcy5zaWduaW4uYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25vdXQgPSB0aGlzLnNpZ25vdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNhbGN1bGF0ZU1hdGNoU3RhdGUoZGF0YSkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSB7XG5cdFx0XHRcImdhbWVcIjogXCIxXCIsXG5cdFx0XHRcInRocm93XCI6IFwiMVwiXG5cdFx0fTtcblxuXHRcdC8vIEFyZSB3ZSBvcHBvbmVudCBvciBpbml0aWF0b3Jcblx0XHR2YXIgdyA9ICh0aGlzLnN0YXRlLnRocm93ZXIuX2lkID09IGRhdGEuaW5pdGlhdG9yKSA/ICdpJyA6ICdvJztcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW55IGJpZ2F4ZSBkYXRhIGl0J3Mgc2FmZSB0byBhc3N1bWUgd2UncmUgZG9uZSB3aXRoIHRoZVxuXHRcdC8vXHRyZWd1bGFyIG1hdGNoXG5cdFx0aWYoZGF0YS5iaWdheGUgJiYgIVRvb2xzLmVtcHR5KGRhdGEuYmlnYXhlKSkge1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIHBvaW50c1xuXHRcdFx0aWYoZGF0YS5iaWdheGUucG9pbnRzICYmIGRhdGEuYmlnYXhlLnBvaW50cy5sZW5ndGgpIHtcblxuXHRcdFx0XHQvLyBTZXQgYmlnYXhlIHRvIHBvaW50c1xuXHRcdFx0XHRzdGF0ZS5iaWdheGUgPSAncG9pbnRzJztcblxuXHRcdFx0XHQvLyBTdGVwIHRocm91Z2ggdGhlIHBvaW50c1xuXHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGF0YS5iaWdheGUucG9pbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0aWYodHlwZW9mIGRhdGEuYmlnYXhlLnBvaW50c1tpXVt3XSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0c3RhdGUudGhyb3cgPSBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIHdlJ3JlIHN0aWxsIG9uIHRhcmdldFxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Ly8gU2V0IGJpZ2F4ZSB0byB0YXJnZXRcblx0XHRcdFx0c3RhdGUuYmlnYXhlID0gJ3RhcmdldCc7XG5cblx0XHRcdFx0Ly8gU3RlcCB0aHJvdWdoIHRoZSB0YXJnZXRcblx0XHRcdFx0Zm9yKHZhciBpOyBpIDwgZGF0YS5iaWdheGUudGFyZ2V0Lmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdFx0aWYodHlwZW9mIGRhdGEuYmlnYXhlLnRhcmdldFtpXVt0XSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0c3RhdGUudGhyb3cgPSBpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGFzc3VtZSB3ZSBhcmUgaW4gZ2FtZXNcblx0XHRlbHNlIHtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGdhbWVcblx0XHRcdHZhciBnID0gXCIxXCI7XG5cdFx0XHRmb3IoZyBvZiBbXCIxXCIsIFwiMlwiLCBcIjNcIl0pIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdGlmKHR5cGVvZiBkYXRhLmdhbWVzW2ddID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdG9yZSB0aGUgZ2FtZVxuXHRcdFx0XHRzdGF0ZS5nYW1lID0gZztcblxuXHRcdFx0XHQvLyBJZiB0aGUgZ2FtZSBpcyBmaW5pc2hlZFxuXHRcdFx0XHRpZihkYXRhLmdhbWVzW2ddLmZpbmlzaGVkKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggdGhyb3dcblx0XHRcdFx0dmFyIHQgPSBcIjFcIjtcblx0XHRcdFx0Zm9yKHQgb2YgW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0pIHtcblxuXHRcdFx0XHRcdC8vIElmIGl0IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0XHRpZih0eXBlb2YgZGF0YS5nYW1lc1tnXVt3XVt0XSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3RvcmUgdGhlIHJvdW5kXG5cdFx0XHRcdHN0YXRlLnRocm93ID0gdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIHN0YXRlXG5cdFx0cmV0dXJuIHN0YXRlO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIFRyYWNrIElEIGluIGhhc2hcblx0XHRIYXNoLndhdGNoKCdpZCcsIHRoaXMuaWRDYWxsYmFjayk7XG5cblx0XHQvLyBJZiB3ZSdyZSBzaWduZWQgaW5cblx0XHRpZih0aGlzLnN0YXRlLnRocm93ZXIpIHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBJRCBpbiB0aGUgaGFzaFxuXHRcdFx0dmFyIGlkID0gSGFzaC5nZXQoJ2lkJyk7XG5cdFx0XHRpZihpZCkge1xuXHRcdFx0XHR0aGlzLmlkQ2FsbGJhY2soaWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5leGlzdGluZ0ZldGNoKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIElEIGluIGhhc2ggYW5kIHJlbW92ZSBpdFxuXHRcdEhhc2gudW53YXRjaCgnaWQnLCB0aGlzLmlkQ2FsbGJhY2spO1xuXHRcdEhhc2guc2V0KCdpZCcsIG51bGwpO1xuXG5cdFx0Ly8gSWYgd2UncmUgaW4gcmVxdWVzdCBtb2RlXG5cdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdyZXF1ZXN0Jykge1xuXG5cdFx0XHQvLyBTdG9wIHRyYWNraW5nIHRoZSByZXF1ZXN0XG5cdFx0XHRUd29XYXkudW50cmFjayhcblx0XHRcdFx0J2F1dGgnLCAncmVxdWVzdC0nICsgdGhpcy5zdGF0ZS5pZCxcblx0XHRcdFx0dGhpcy5yZXF1ZXN0Q2FsbGJhY2tcblx0XHRcdClcblx0XHR9XG5cblx0XHRlbHNlIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnbWF0Y2gnKSB7XG5cblx0XHRcdC8vIFN0b3AgdHJhY2tpbmcgdGhlIG1hdGNoXG5cdFx0XHRUd29XYXkudW50cmFjayhcblx0XHRcdFx0J25hdGYnLCAnbWF0Y2gtJyArIHRoaXMuc3RhdGUuaWQsXG5cdFx0XHRcdHRoaXMubWF0Y2hDYWxsYmFja1xuXHRcdFx0KVxuXHRcdH1cblx0fVxuXG5cdGV4aXN0aW5nQ29udGludWUoZXYpIHtcblx0XHRIYXNoLnNldCgnaWQnLCAnbXwnICsgZXYuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQpO1xuXHR9XG5cblx0ZXhpc3RpbmdEZWxldGUoZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGlkXG5cdFx0dmFyIGlkID0gZXYuY3VycmVudFRhcmdldC5wYXJlbnROb2RlLmRhdGFzZXQuaWQ7XG5cblx0XHQvLyBOb3RpZnkgdGhlIHNlcnZpY2UgdGhlIG1hdGNoIHdvbid0IGJlIGNvbXBsZXRlZFxuXHRcdFNlcnZpY2VzLmRlbGV0ZSgnbmF0ZicsICdtYXRjaCcsIHtcblx0XHRcdFwiaWRcIjogaWRcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblxuXHRcdFx0XHQvLyBJZiB0aGUgdGhyb3dlciBjYW4ndCBkZWxldGUgdGhhdCByZWNvcmQsIG9yIGl0J3MgZmluaXNoZWRcblx0XHRcdFx0aWYocmVzLmVycm9yLmNvZGUgPT0gMTAwMCkge1xuXHRcdFx0XHRcdHNlbGYuZXhpc3RpbmdSZW1vdmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIElmIGl0J3MgYWxyZWFkeSBkZWxldGVkXG5cdFx0XHRcdGVsc2UgaWYocmVzLmVycm9yLmNvZGUgPT0gMTEwNCkge1xuXHRcdFx0XHRcdHNlbGYuZXhpc3RpbmdSZW1vdmUoaWQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vIFVua25vd24gZXJyb3Jcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRzZWxmLmV4aXN0aW5nUmVtb3ZlKGlkKTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdGV4aXN0aW5nRmV0Y2goKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEZpbmQgb3V0IGlmIHRoZXJlJ3MgYW55IHVuZmluaXNoZWQgZ2FtZXMgYXNzb2NpYXRlZCB3aXRoIHRoaXNcblx0XHQvL1x0dGhyb3dlclxuXHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAnbWF0Y2gvdW5maW5pc2hlZCcsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFueVxuXHRcdFx0XHRpZihyZXMuZGF0YS5sZW5ndGgpIHtcblxuXHRcdFx0XHRcdC8vIFNldCB0aGUgc3RhdGVcblx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFwibW9kZVwiOiBcImV4aXN0aW5nXCIsXG5cdFx0XHRcdFx0XHRcImV4aXN0aW5nXCI6IHJlcy5kYXRhXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KVxuXHR9XG5cblx0ZXhpc3RpbmdSZW1vdmUoaWQpIHtcblxuXHRcdC8vIFN0b3JlIHRoZSBleGlzdGluZ1xuXHRcdHZhciBleGlzdGluZyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUuZXhpc3RpbmcpO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIG9uZVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZy5sZW5ndGg7ICsraSkge1xuXHRcdFx0aWYoZXhpc3RpbmdbaV0uX2lkID09IGlkKSB7XG5cdFx0XHRcdGV4aXN0aW5nLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJbml0IHRoZSBuZXcgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSB7XCJleGlzdGluZ1wiOiBleGlzdGluZ31cblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gbW9yZSBleGlzdGluZ1xuXHRcdGlmKGV4aXN0aW5nLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRzdGF0ZS5tb2RlID0gJ29wcG9uZW50Jztcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9XG5cblx0aWRDYWxsYmFjayhpZCkge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBJRFxuXHRcdGlmKGlkKSB7XG5cblx0XHRcdC8vIFNwbGl0IHRoZSBJRFxuXHRcdFx0aWQgPSBpZC5zcGxpdCgnfCcpO1xuXG5cdFx0XHQvLyBJZiBpdCdzIGEgcmVxdWVzdFxuXHRcdFx0aWYoaWRbMF0gPT0gJ3InKSB7XG5cblx0XHRcdFx0Ly8gQ2hhbmdlIHRoZSBtb2RlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiaWRcIjogaWRbMV0sXG5cdFx0XHRcdFx0XCJtb2RlXCI6IFwicmVxdWVzdFwiLFxuXHRcdFx0XHRcdFwib3Bwb25lbnRcIjoge1wiYWxpYXNcIjogaWRbMl19XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdC8vIExpc3RlbiBmb3IgYW4gdXBkYXRlIG9uIHRoZSByZXF1ZXN0XG5cdFx0XHRcdFR3b1dheS50cmFjayhcblx0XHRcdFx0XHQnYXV0aCcsICdyZXF1ZXN0LScgKyBpZFsxXSxcblx0XHRcdFx0XHR0aGlzLnJlcXVlc3RDYWxsYmFja1xuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIGlmIGl0J3MgYSBtYXRjaFxuXHRcdFx0ZWxzZSBpZihpZFswXSA9PSAnbScpIHtcblxuXHRcdFx0XHQvLyBDaGFuZ2UgdGhlIG1vZGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJiaWdheGVcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJnYW1lc1wiOiB7XG5cdFx0XHRcdFx0XHRcIjFcIjoge1xuXHRcdFx0XHRcdFx0XHRcImlcIjoge30sXG5cdFx0XHRcdFx0XHRcdFwib1wiOiB7fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJpZFwiOiBpZFsxXSxcblx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjoge1xuXHRcdFx0XHRcdFx0XCJnYW1lXCI6IDEsXG5cdFx0XHRcdFx0XHRcInRocm93XCI6IDEsXG5cdFx0XHRcdFx0XHRcImJpZ2F4ZVwiOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJtb2RlXCI6IFwibWF0Y2hcIixcblx0XHRcdFx0XHRcIm9wcG9uZW50XCI6IHtcImFsaWFzXCI6ICcnfSxcblx0XHRcdFx0XHRcImlzXCI6IFwiaVwiXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0Ly8gTGlzdCBmb3IgYW4gdXBkYXRlIG9uIHRoZSBtYXRjaFxuXHRcdFx0XHRUd29XYXkudHJhY2soXG5cdFx0XHRcdFx0J25hdGYnLCAnbWF0Y2gtJyArIGlkWzFdLFxuXHRcdFx0XHRcdHRoaXMubWF0Y2hDYWxsYmFja1xuXHRcdFx0XHQpXG5cblx0XHRcdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0XHQvLyBGZXRjaCB0aGUgbWF0Y2hcblx0XHRcdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdtYXRjaCcsIHtcblx0XHRcdFx0XHRcImlkXCI6IGlkWzFdXG5cdFx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBtYXRjaCBubyBsb25nZXIgZXhpc3RzXG5cdFx0XHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSA9PSAxMTA0KSB7XG5cdFx0XHRcdFx0XHRcdEhhc2guc2V0KCdpZCcsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdFx0XHQvLyBBcmUgd2UgaW5pdGlhdG9yIG9yIG9wcG9uZW50P1xuXHRcdFx0XHRcdFx0dmFyIHQgPSByZXMuZGF0YS5pbml0aWF0b3IgPT0gc2VsZi5zdGF0ZS50aHJvd2VyLl9pZCA/ICdpJyA6ICdvJztcblxuXHRcdFx0XHRcdFx0Ly8gU3RvcmUgaXQgaW4gdGhlIHN0YXRlXG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFx0XCJhbGlhc1wiOiB0ID09ICdpJyA/IHJlcy5kYXRhWydvcHBvbmVudF9hbGlhcyddIDogcmVzLmRhdGFbJ2luaXRpYXRvcl9hbGlhcyddLFxuXHRcdFx0XHRcdFx0XHRcImJpZ2F4ZVwiOiByZXMuZGF0YS5iaWdheGUsXG5cdFx0XHRcdFx0XHRcdFwiZ2FtZXNcIjogcmVzLmRhdGEuZ2FtZXMsXG5cdFx0XHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBzZWxmLmNhbGN1bGF0ZU1hdGNoU3RhdGUocmVzLmRhdGEpLFxuXHRcdFx0XHRcdFx0XHRcImlzXCI6IHQsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIHJlc2V0XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGVcIjogXCJvcHBvbmVudFwifSk7XG5cdFx0fVxuXHR9XG5cblx0bWF0Y2hDYWxsYmFjayhtc2cpIHtcblxuXHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdH1cblxuXHRvdmVyd3JpdGUoZXYpIHtcblxuXHRcdC8vIENsb25lIHRoZSBtYXRjaCBzdGF0ZVxuXHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHQvLyBDaGFuZ2UgdGhlIHRocm93XG5cdFx0bXMudGhyb3cgPSBldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGhyb3c7XG5cblx0XHQvLyBTZXQgdGhlIGJvYXJkIG1vZGVcblx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9IG1zLnRocm93ID09IDUgPyAnc2VsZWN0ZWQnIDogJ25vbmUnO1xuXG5cdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtcyxcblx0XHRcdFwib3ZlcndyaXRlXCI6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdHBvaW50cyhjbHV0Y2gsIHZhbHVlKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIENsb25lIHRoZSBnYW1lcyBhbmQgbWF0Y2ggc3RhdGVcblx0XHR2YXIgZ2FtZXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmdhbWVzKTtcblx0XHR2YXIgbXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1hdGNoU3RhdGUpO1xuXG5cdFx0Ly8gR2V0IHRoZSB2YWx1ZSBvciB2YWx1ZS9jbHV0Y2hcblx0XHR2YXIgdmFsdWUgPSAobXMudGhyb3cgPT0gNSkgPyB7XCJjbHV0Y2hcIjogY2x1dGNoLCBcInZhbHVlXCI6IHZhbHVlfSA6IHZhbHVlO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIHBvaW50IHZhbHVlXG5cdFx0Z2FtZXNbbXMuZ2FtZV1bdGhpcy5zdGF0ZS5pc11bbXMudGhyb3ddID0gdmFsdWU7XG5cblx0XHQvLyBTYXZlIHRoZSB2YWx1ZSBhbmQgbm90aWZ5IHRoZSBvcHBvbmVudFxuXHRcdFNlcnZpY2VzLnVwZGF0ZSgnbmF0ZicsICdtYXRjaC9nYW1lJywge1xuXHRcdFx0XCJpZFwiOiBnYW1lc1ttcy5nYW1lXS5faWQsXG5cdFx0XHRcIm1hdGNoXCI6IHRoaXMuc3RhdGUuaWQsXG5cdFx0XHRcInRocm93XCI6IG1zLnRocm93LFxuXHRcdFx0XCJ2YWx1ZVwiOiB2YWx1ZVxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIElmIHRoZSBvdmVyd3JpdGUgZmxhZyBpcyBzZXRcblx0XHRcdFx0aWYoc2VsZi5zdGF0ZS5vdmVyd3JpdGUpIHtcblx0XHRcdFx0XHR2YXIgdCA9IFwiNlwiXG5cdFx0XHRcdFx0Zm9yKHQgb2YgW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIiwgXCI2XCJdKSB7XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgZ2FtZXNbbXMuZ2FtZV1bdGhpcy5zdGF0ZS5pc11bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdG1zLnRocm93ID0gdDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRtcy50aHJvdyA9IChwYXJzZUludChtcy50aHJvdykgKyAxKS50b1N0cmluZygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVXBkYXRlIHRoZSBzdGF0ZVxuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcImdhbWVzXCI6IGdhbWVzLFxuXHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtcyxcblx0XHRcdFx0XHRcIm92ZXJ3cml0ZVwiOiBmYWxzZVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF0ZlwiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tb2RlID09ICdvcHBvbmVudCcgJiZcblx0XHRcdFx0XHQ8T3Bwb25lbnQgdGhyb3dlcj17dGhpcy5zdGF0ZS50aHJvd2VyfSBvblNlbGVjdD17dGhpcy5yZXF1ZXN0Q3JlYXRlfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1vZGUgPT0gJ3JlcXVlc3QnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8cD5XYWl0aW5nIGZvciB7c2VsZi5zdGF0ZS5vcHBvbmVudC5hbGlhc30gdG8gYWNjZXB0IHlvdXIgbWF0Y2ggcmVxdWVzdDwvcD5cblx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17c2VsZi5yZXF1ZXN0Q2FuY2VsfT5DYW5jZWwgUmVxdWVzdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1vZGUgPT0gJ2V4aXN0aW5nJyAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUuZXhpc3RpbmcubWFwKGZ1bmN0aW9uKG0sIGkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gZGF0YS1pZD17bS5faWR9IGNsYXNzTmFtZT1cImV4aXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5Zb3UgaGF2ZSBhbiBleGlzdGluZyBtYXRjaCB3aXRoIHttLmFsaWFzfSwgZG8geW91IHdpc2ggdG8gY29udGludWU/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLmV4aXN0aW5nRGVsZXRlfT5EZWxldGU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17c2VsZi5leGlzdGluZ0NvbnRpbnVlfT5Db250aW51ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuc3RhdGUubW9kZSA9PSAnbWF0Y2gnICYmXG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdDxCb2FyZCByZWY9XCJib2FyZFwiIGNsdXRjaE1vZGU9XCJub25lXCIgb25Qb2ludHM9e3NlbGYucG9pbnRzfSAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJPdmVyYWxsKCl9XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmJpZ2F4ZSA/XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJCaWdBeGUoKVxuXHRcdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJHYW1lKClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXJCaWdBeGUoKSB7XG5cdFx0cmV0dXJuIDxkaXYgLz5cblx0fVxuXG5cdHJlbmRlckdhbWUoKSB7XG5cblx0XHQvLyBPcHBvbmVudCBpcyBvcHBvc2l0ZSBvZiB0aHJvd2VyXG5cdFx0dmFyIHNPID0gdGhpcy5zdGF0ZS5pcyA9PSAnaScgPyAnbyc6ICdpJztcblxuXHRcdC8vIFdoYXQgZ2FtZSBhcmUgd2UgaW4/XG5cdFx0dmFyIGcgPSB0aGlzLnN0YXRlLmdhbWVzW3RoaXMuc3RhdGUubWF0Y2hTdGF0ZS5nYW1lXTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImdhbWVcIj5cblx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPlQ8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUudGhyb3dlci5hbGlhc308L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUuYWxpYXN9PC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4xPC90ZD5cblx0XHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyR2FtZVRocm93KFwiMVwiKX1cblx0XHRcdFx0XHRcdFx0PHRkPntnW3NPXVtcIjFcIl0gPT0gLTEgPyAnZCcgOiBnW3NPXVtcIjFcIl19PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4yPC90ZD5cblx0XHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyR2FtZVRocm93KFwiMlwiKX1cblx0XHRcdFx0XHRcdFx0PHRkPntnW3NPXVtcIjJcIl0gPT0gLTEgPyAnZCcgOiBnW3NPXVtcIjJcIl19PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4zPC90ZD5cblx0XHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyR2FtZVRocm93KFwiM1wiKX1cblx0XHRcdFx0XHRcdFx0PHRkPntnW3NPXVtcIjNcIl0gPT0gLTEgPyAnZCcgOiBnW3NPXVtcIjNcIl19PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD40PC90ZD5cblx0XHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyR2FtZVRocm93KFwiNFwiKX1cblx0XHRcdFx0XHRcdFx0PHRkPntnW3NPXVtcIjRcIl0gPT0gLTEgPyAnZCcgOiBnW3NPXVtcIjRcIl19PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD41PC90ZD5cblx0XHRcdFx0XHRcdFx0e3RoaXMucmVuZGVyR2FtZVRocm93KFwiNVwiKX1cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17Z1tzT11bXCI1XCJdICYmIGdbc09dW1wiNVwiXS5jbHV0Y2ggPyAnY2x1dGNoJyA6ICcnfT57Z1tzT11bXCI1XCJdID8gKGdbc09dW1wiNVwiXS52YWx1ZSA9PSAtMSA/ICdkJyA6IGdbc09dW1wiNVwiXS52YWx1ZSkgOiAnJ308L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tYXRjaFN0YXRlLnRocm93ID09ICc2JyAmJlxuXHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17dGhpcy5nYW1lRmluaXNofT5GaW5pc2hlZDwvYnV0dG9uPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyR2FtZVRocm93KHQpIHtcblxuXHRcdC8vIFRoZSBnYW1lXG5cdFx0dmFyIGcgPSB0aGlzLnN0YXRlLm1hdGNoU3RhdGUuZ2FtZTtcblxuXHRcdC8vIFRoZSB2YWx1ZSBvZiB0aGUgdGhyb3dcblx0XHR2YXIgdiA9IHRoaXMuc3RhdGUuZ2FtZXNbZ11bdGhpcy5zdGF0ZS5pc11bdF07XG5cblx0XHQvLyBJZiB3ZSdyZSB3b3JraW5nIG9uIDVcblx0XHRpZih0ID09ICc1Jykge1xuXG5cdFx0XHQvLyBJZiB0aGUgZ2FtZSBpcyBmaW5pc2hlZFxuXHRcdFx0aWYodGhpcy5zdGF0ZS5nYW1lc1tnXVt0aGlzLnN0YXRlLmlzXS5maW5pc2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gPHRkIGNsYXNzTmFtZT17di5jbHV0Y2ggPyAnY2x1dGNoJyA6ICcnfT57dn08L3RkPlxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlLCB3ZSdyZSBub3QgZmluaXNoZWQsIGJ1dCB0aGUgdmFsdWUgZXhpc3RzXG5cdFx0XHRlbHNlIGlmKHYpIHtcblx0XHRcdFx0cmV0dXJuIDx0ZFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3RoaXMuc3RhdGUub3ZlcndyaXRlICYmIHRoaXMuc3RhdGUubWF0Y2hTdGF0ZS50aHJvdyA9PSB0ID8gJ292ZXJ3cml0ZScgOiAodi5jbHV0Y2ggPyAnY2x1dGNoJyA6ICcnKX1cblx0XHRcdFx0XHRcdFx0ZGF0YS10aHJvdz17dH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vdmVyd3JpdGV9XG5cdFx0XHRcdFx0XHQ+e3YudmFsdWUgPT0gLTEgPyAnZCcgOiB2LnZhbHVlfTwvdGQ+XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIHRoZXJlJ3Mgbm8gdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gPHRkPjwvdGQ+XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpdCdzIDEgdG8gNFxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBJZiB0aGUgZ2FtZSBpcyBmaW5pc2hlZFxuXHRcdFx0aWYodGhpcy5zdGF0ZS5nYW1lc1tnXVt0aGlzLnN0YXRlLmlzXS5maW5pc2hlZCkge1xuXHRcdFx0XHRyZXR1cm4gPHRkPnt2fTwvdGQ+XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIHdlJ3JlIG5vdCBmaW5pc2hkLCBidXQgdGhlIHZhbHVlIGV4aXN0c1xuXHRcdFx0ZWxzZSBpZih2KSB7XG5cdFx0XHRcdHJldHVybiA8dGRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXt0aGlzLnN0YXRlLm92ZXJ3cml0ZSAmJiB0aGlzLnN0YXRlLm1hdGNoU3RhdGUudGhyb3cgPT0gdCA/ICdvdmVyd3JpdGUnIDogJyd9XG5cdFx0XHRcdFx0XHRcdGRhdGEtdGhyb3c9e3R9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3ZlcndyaXRlfVxuXHRcdFx0XHRcdFx0Pnt2ID09IC0xID8gJ2QnIDogdn08L3RkPlxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlLCB0aGVyZSdzIG5vIHZhbHVlXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDx0ZD48L3RkPlxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlck92ZXJhbGwoKSB7XG5cblx0XHQvLyBJbml0IHRoZSBwb2ludHMgcGVyIGdhbWVcblx0XHR2YXIgb1BvaW50cyA9IHtcblx0XHRcdFwiaVwiOiBbMCwgMCwgMF0sXG5cdFx0XHRcIm9cIjogWzAsIDAsIDBdXG5cdFx0fVxuXG5cdFx0Ly8gT3Bwb25lbnQgaXMgb3Bwb3NpdGUgb2YgdGhyb3dlclxuXHRcdHZhciBzTyA9IHRoaXMuc3RhdGUuaXMgPT0gJ2knID8gJ28nOiAnaSc7XG5cblx0XHQvLyBDYWxjdWxhdGUgdGhlIHBvaW50c1xuXHRcdGZvcih2YXIgZyBvZiBbXCIxXCIsIFwiMlwiLCBcIjNcIl0pIHtcblx0XHRcdHZhciBpRyA9IHBhcnNlSW50KGcpIC0gMTtcblx0XHRcdGlmKHRoaXMuc3RhdGUuZ2FtZXNbZ10pIHtcblx0XHRcdFx0Zm9yKHZhciB0IG9mIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCJdKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5nYW1lc1tnXVsnaSddW3RdKSB7XG5cdFx0XHRcdFx0XHRpZih0ID09ICc1Jykge1xuXHRcdFx0XHRcdFx0XHRvUG9pbnRzWydpJ11baUddICs9IHRoaXMuc3RhdGUuZ2FtZXNbZ11bJ2knXVt0XS52YWx1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG9Qb2ludHNbJ2knXVtpR10gKz0gdGhpcy5zdGF0ZS5nYW1lc1tnXVsnaSddW3RdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLmdhbWVzW2ddWydvJ11bdF0pIHtcblx0XHRcdFx0XHRcdGlmKHQgPT0gJzUnKSB7XG5cdFx0XHRcdFx0XHRcdG9Qb2ludHNbJ28nXVtpR10gKz0gdGhpcy5zdGF0ZS5nYW1lc1tnXVsnbyddW3RdLnZhbHVlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0b1BvaW50c1snbyddW2lHXSArPSB0aGlzLnN0YXRlLmdhbWVzW2ddWydvJ11bdF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmFsbFwiPlxuXHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+RzwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS50aHJvd2VyLmFsaWFzfTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS5hbGlhc308L3RoPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjE8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e29Qb2ludHNbdGhpcy5zdGF0ZS5pc11bMF19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3NPXVswXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjI8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e29Qb2ludHNbdGhpcy5zdGF0ZS5pc11bMV19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3NPXVsxXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjM8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e29Qb2ludHNbdGhpcy5zdGF0ZS5pc11bMl19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3NPXVsyXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlcXVlc3RDYWxsYmFjayhtc2cpIHtcblxuXHRcdC8vIElmIHRoZSBtYXRjaCB3YXMgYWNjZXB0ZWRcblx0XHRpZihtc2cudHlwZSA9PSAnYWNjZXB0ZWQnKSB7XG5cdFx0XHRIYXNoLnNldCgnaWQnLCAnbXwnICsgbXNnLm1hdGNoKTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIGl0IHdhcyByZWplY3RlZFxuXHRcdGVsc2UgaWYobXNnLnR5cGUgPT0gJ3JlamVjdGVkJykge1xuXHRcdFx0dGhpcy5yZXF1ZXN0UmVzZXQoKTtcblx0XHR9XG5cdH1cblxuXHRyZXF1ZXN0Q2FuY2VsKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAncmVxdWVzdCcpIHtcblxuXHRcdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5zaG93KCk7XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgbWF0Y2ggcmVxdWVzdFxuXHRcdFx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS5pZFxuXHRcdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgaXQncyBhbHJlYWR5IGRlbGV0ZWRcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSAhPSAxMTA0KSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlcXVlc3RSZXNldCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRcdHNlbGYucmVxdWVzdFJlc2V0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRcdExvYWRlci5oaWRlKClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVxdWVzdENyZWF0ZShvcHBvbmVudCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBNYWtlIGEgbWF0Y2ggcmVxdWVzdCBmb3IgdGhpcyBvcHBvbmVudFxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFx0XCJvcHBvbmVudFwiOiBvcHBvbmVudC5faWQsXG5cdFx0XHRcIm9yZ1wiOiBcIk5BVEZcIlxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgaGFzaFxuXHRcdFx0XHRIYXNoLnNldCgnaWQnLCAncnwnICsgcmVzLmRhdGEgKyAnfCcgKyBvcHBvbmVudC5hbGlhcylcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXF1ZXN0UmVzZXQoKSB7XG5cblx0XHQvLyBTdG9wIGxpc3RlbmluZyBmb3IgYW4gdXBkYXRlIG9uIHRoZSByZXF1ZXN0XG5cdFx0VHdvV2F5LnVudHJhY2soXG5cdFx0XHQnYXV0aCcsXG5cdFx0XHQncmVxdWVzdC0nICsgdGhpcy5zdGF0ZS5pZCxcblx0XHRcdHRoaXMucmVxdWVzdENhbGxiYWNrXG5cdFx0KTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgSUQgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdpZCcsIG51bGwpO1xuXG5cdFx0Ly8gQ2hhbmdlIHRoZSBtb2RlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImlkXCI6IGZhbHNlLFxuXHRcdFx0XCJtb2RlXCI6IFwib3Bwb25lbnRcIixcblx0XHRcdFwib3Bwb25lbnRcIjogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25pbih0aHJvd2VyKSB7XG5cblx0XHQvLyBTZXQgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogdGhyb3dlcn0pO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBJRCBpbiB0aGUgaGFzaFxuXHRcdHZhciBpZCA9IEhhc2guZ2V0KCdpZCcpO1xuXHRcdGlmKGlkKSB7XG5cdFx0XHR0aGlzLmlkQ2FsbGJhY2soaWQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLmV4aXN0aW5nRmV0Y2goKTtcblx0XHR9XG5cdH1cblxuXHRzaWdub3V0KCkge1xuXG5cdFx0Ly8gU2V0IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IGZhbHNlfSk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIElEIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaDtcbiIsIi8qKlxuICogTkFURiBQcmFjdGljZVxuICpcbiAqIE1hbmFnZXMgdHJhY2tpbmcgYW5kIHN0b3JpbmcgcHJhY3RpY2Ugb24gYW4gTkFURiBib2FyZFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjBcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMuanMnKTtcblxuLy8gUmVhY3QgY29tcG9uZW50c1xudmFyIE1vZGFsID0gcmVxdWlyZSgnLi4vZWxlbWVudHMvbW9kYWwuanN4Jyk7XG52YXIgQm9hcmQgPSByZXF1aXJlKCcuL2JvYXJkLmpzeCcpO1xuXG4vLyBQcmFjdGljZSBDb21wb25lbnRcbmNsYXNzIFByYWN0aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJjbHV0Y2hBdHRlbXB0c1wiOiAwLFxuXHRcdFx0XCJjbHV0Y2hIaXRzXCI6IDAsXG5cdFx0XHRcIm1vZGVcIjogbnVsbCxcblx0XHRcdFwicG9pbnRzXCI6IFtdLFxuXHRcdFx0XCJzaG93UG9pbnRzXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXIsXG5cdFx0XHRcInRvdGFsUG9pbnRzXCI6IDBcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5tb2RlU2VsZWN0ID0gdGhpcy5tb2RlU2VsZWN0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vdmVyd3JpdGUgPSB0aGlzLm92ZXJ3cml0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9pbnRzID0gdGhpcy5wb2ludHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50c0hpZGUgPSB0aGlzLnBvaW50c0hpZGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50c1Nob3cgPSB0aGlzLnBvaW50c1Nob3cuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlc2V0ID0gdGhpcy5yZXNldC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluID0gdGhpcy5zaWduaW4uYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25vdXQgPSB0aGlzLnNpZ25vdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEgaW4gbG9jYWwgc3RvcmFnZVxuXHRcdGlmKCduYXRmX3ByYWN0aWNlJyBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRcdHZhciBuZXdfc3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVsnbmF0Zl9wcmFjdGljZSddKTtcblx0XHRcdG5ld19zdGF0ZS50aHJvd2VyID0gdGhpcy5zdGF0ZS50aHJvd2VyO1xuXHRcdFx0dGhpcy5zZXRTdGF0ZShuZXdfc3RhdGUsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3N1cGVybmF0dXJhbCcpIHtcblx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggJSA1ID09IDQpIHtcblx0XHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnbm9uZSc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYodGhpcy5zdGF0ZS5tb2RlID09ICdjbHV0Y2gnKSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnZXhwZWN0ZWQnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdFx0ZGVsZXRlIGxvY2FsU3RvcmFnZVsnbmF0Zl9wcmFjdGljZSddO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBwb2ludHMsIHN0b3JlIHRoZW0gaW4gbG9jYWwgc3RvcmFnZVxuXHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCkge1xuXHRcdFx0bG9jYWxTdG9yYWdlWyduYXRmX3ByYWN0aWNlJ10gPSBKU09OLnN0cmluZ2lmeSh0aGlzLnN0YXRlKTtcblx0XHR9XG5cdH1cblxuXHRtb2RlU2VsZWN0KGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcIm1vZGVcIjogZXYuY3VycmVudFRhcmdldC5kYXRhc2V0Lm1vZGVcblx0XHR9LCBmdW5jdGlvbigpIHtcblx0XHRcdHN3aXRjaCh0aGlzLnN0YXRlLm1vZGUpIHtcblx0XHRcdFx0Y2FzZSAnZnJlZSc6XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnc2VsZWN0JzsgYnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3N1cGVybmF0dXJhbCc6XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnbm9uZSc7IGJyZWFrO1xuXHRcdFx0XHRjYXNlICdjbHV0Y2gnOlxuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJzsgYnJlYWs7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRvdmVyd3JpdGUoZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm92ZXJ3cml0ZVwiOiB0cnVlfSwgZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIElmIHRoZSBtb2RlIGlzIGZyZWVcblx0XHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnZnJlZScpIHtcblx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnc2VsZWN0Jztcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpZiB0aGUgbW9kZSBpcyBzdXBlcm5hdHVyYWxcblx0XHRcdGVsc2UgaWYodGhpcy5zdGF0ZS5tb2RlID09ICdzdXBlcm5hdHVyYWwnKSB7XG5cblx0XHRcdFx0Ly8gSWYgd2UncmUgZGl2aXNpYmxlIGJ5IDVcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoICUgNSA9PSAwKSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnZXhwZWN0ZWQnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwb2ludHMoY2x1dGNoLCB2YWx1ZSkge1xuXG5cdFx0Ly8gR2V0IHRoZSBpbnQgdmVyc2lvbiBvZiB0aGUgdmFsdWVcblx0XHR2YXIgdiA9IHBhcnNlSW50KHZhbHVlKTtcblxuXHRcdC8vIElmIHRoZSBvdmVyd3JpdGUgZmxhZyBpcyBzZXRcblx0XHRpZih0aGlzLnN0YXRlLm92ZXJ3cml0ZSkge1xuXG5cdFx0XHQvLyBHcmFiIHRoZSBsYXN0IHZhbHVlXG5cdFx0XHR2YXIgbGFzdCA9IHRoaXMuc3RhdGUucG9pbnRzW3RoaXMuc3RhdGUucG9pbnRzLmxlbmd0aC0xXTtcblxuXHRcdFx0Ly8gQmFja3RyYWNrIHRoZSBjbHV0Y2ggc3RhdHNcblx0XHRcdGlmKGxhc3RbMF0pIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hBdHRlbXB0cyAtPSAxO1xuXHRcdFx0XHRpZihsYXN0WzFdID09IDcpIHtcblx0XHRcdFx0XHR0aGlzLnN0YXRlLmNsdXRjaEhpdHMgLT0gMTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBCYWNrdHJhY2sgdGhlIHBvaW50cyBzdGF0c1xuXHRcdFx0aWYobGFzdFsxXSAhPSAnZCcpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS50b3RhbFBvaW50cyAtPSBsYXN0WzFdO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgdGhlIGxhc3QgaXRlbVxuXHRcdFx0dGhpcy5zdGF0ZS5wb2ludHMucG9wKCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRvIHRoZSBwb2ludHMgbGlzdFxuXHRcdHRoaXMuc3RhdGUucG9pbnRzLnB1c2goW2NsdXRjaCwgKHZhbHVlID09ICdkJyA/IHZhbHVlIDogdildKTtcblxuXHRcdC8vIElmIHdlIGdvdCBhIGNsdXRjaCBhdHRlbXB0XG5cdFx0aWYoY2x1dGNoKSB7XG5cdFx0XHR0aGlzLnN0YXRlLmNsdXRjaEF0dGVtcHRzICs9IDE7XG5cdFx0XHRpZih2YWx1ZSA9PSA3KSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoSGl0cyArPSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIHdlIGdvdCBhIHZhbHVlXG5cdFx0aWYodiA+IDApIHtcblx0XHRcdHRoaXMuc3RhdGUudG90YWxQb2ludHMgKz0gdjtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogdGhpcy5zdGF0ZS5jbHV0Y2hBdHRlbXB0cyxcblx0XHRcdFwiY2x1dGNoSGl0c1wiOiB0aGlzLnN0YXRlLmNsdXRjaEhpdHMsXG5cdFx0XHRcIm92ZXJ3cml0ZVwiOiBmYWxzZSxcblx0XHRcdFwicG9pbnRzXCI6IHRoaXMuc3RhdGUucG9pbnRzLFxuXHRcdFx0XCJ0b3RhbFBvaW50c1wiOiB0aGlzLnN0YXRlLnRvdGFsUG9pbnRzXG5cdFx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3N1cGVybmF0dXJhbCcpIHtcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoICUgNSA9PSA0KSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnZXhwZWN0ZWQnO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRwb2ludHNIaWRlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wic2hvd1BvaW50c1wiOiBmYWxzZX0pO1xuXHR9XG5cblx0cG9pbnRzU2hvdygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInNob3dQb2ludHNcIjogdHJ1ZX0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIElmIHdlIGhhdmUgcG9pbnRzXG5cdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoKSB7XG5cblx0XHRcdC8vIEluaXQgdGhlIGxhc3QgaW5kZXhcblx0XHRcdHZhciBsYXN0ID0gMjg7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgbGVzcyB0aGFuIDI5XG5cdFx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggPCAyOSkge1xuXHRcdFx0XHRsYXN0ID0gdGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoIC0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXRmXCI+XG5cdFx0XHRcdDxkbCBjbGFzc05hbWU9XCJzZWxlY3RcIiBzdHlsZT17e1wiZGlzcGxheVwiOiBzZWxmLnN0YXRlLm1vZGUgPT0gbnVsbCA/ICdibG9jayc6J25vbmUnfX0+XG5cdFx0XHRcdFx0PGR0IGRhdGEtbW9kZT1cImZyZWVcIiBvbkNsaWNrPXt0aGlzLm1vZGVTZWxlY3R9PkZyZWUgUHJhY3RpY2U8L2R0PlxuXHRcdFx0XHRcdDxkZD5JbiBmcmVlIHByYWN0aWNlIGFueSBwb2ludHMgYXJlIGF2YWlsYWJsZSBhdCBhbnkgdGltZS4gWW91IG11c3Qgc2VsZWN0IHRoZSBjbHV0Y2ggZmlyc3QgaWYgeW91IHdpc2ggdG8gdHJ5IGZvciBpdC48L2RkPlxuXHRcdFx0XHRcdDxkdCBkYXRhLW1vZGU9XCJzdXBlcm5hdHVyYWxcIiBvbkNsaWNrPXt0aGlzLm1vZGVTZWxlY3R9PlN1cGVybmF0dXJhbDwvZHQ+XG5cdFx0XHRcdFx0PGRkPkluIHN1cGVybmF0dXJhbCBwcmFjdGljZSBldmVyeSBmaWZ0aCB0aHJvdyBpcyBmb3IgY2x1dGNoLCBhbmQgaXQgd2lsbCBiZSBwcmUtc2VsZWN0ZWQgZm9yIHlvdSBvbiB0aG9zZSB0dXJucy48L2RkPlxuXHRcdFx0XHRcdDxkdCBkYXRhLW1vZGU9XCJjbHV0Y2hcIiBvbkNsaWNrPXt0aGlzLm1vZGVTZWxlY3R9PkNsdXRjaDwvZHQ+XG5cdFx0XHRcdFx0PGRkPkluIGNsdXRjaCBwcmFjdGljZSBldmVyeSB0aHJvdyBpcyBmb3IgdGhlIGNsdXRjaCwgYW5kIGl0IHdpbGwgYmUgcHJlLXNlbGVjdGVkIGV2ZXJ5IHR1cm4uPC9kZD5cblx0XHRcdFx0PC9kbD5cblx0XHRcdFx0PGRpdiBzdHlsZT17e1wiZGlzcGxheVwiOiBzZWxmLnN0YXRlLm1vZGUgPT0gbnVsbCA/ICdub25lJzonYmxvY2snfX0+XG5cdFx0XHRcdFx0PEJvYXJkIHJlZj1cImJvYXJkXCIgY2x1dGNoTW9kZT17c2VsZi5zdGF0ZS5tb2RlfSBvblBvaW50cz17c2VsZi5wb2ludHN9IC8+XG5cdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmVyYWdlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsdXRjaGVzIGZyaWdodFwiPjxiPkNsdXRjaCAlOiA8L2I+PHNwYW4+e3NlbGYuc3RhdGUuY2x1dGNoQXR0ZW1wdHMgPT0gMCA/IFwiMC4wXCIgOiAoKHNlbGYuc3RhdGUuY2x1dGNoSGl0cyAvIHNlbGYuc3RhdGUuY2x1dGNoQXR0ZW1wdHMpICogMTAwLjApLnRvRml4ZWQoMSl9PC9zcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhdmVyYWdlIGZsZWZ0XCI+PGI+QXZnIFRocm93OiA8L2I+PHNwYW4+eyhzZWxmLnN0YXRlLnRvdGFsUG9pbnRzIC8gc2VsZi5zdGF0ZS5wb2ludHMubGVuZ3RoKS50b0ZpeGVkKDIpfTwvc3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvaW50c1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5sZW5ndGggPiAyOSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4ga2V5PXstMX0gY2xhc3NOYW1lPVwibGluayBib2xkXCIgb25DbGljaz17c2VsZi5wb2ludHNTaG93fT4uLi48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5zbGljZSgtMjkpLm1hcChmdW5jdGlvbihwLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihpID09IGxhc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtcImxhc3QgXCIgKyAoc2VsZi5zdGF0ZS5vdmVyd3JpdGUgPyAnb3ZlcndyaXRlJyA6IChwWzBdID8gJ2NsdXRjaCcgOiAnJykpfSBvbkNsaWNrPXtzZWxmLm92ZXJ3cml0ZX0+e3BbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtwWzBdID8gJ2NsdXRjaCc6Jyd9PntwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlc2V0IGZyaWdodFwiIG9uQ2xpY2s9e3NlbGYucmVzZXR9PlJlc2V0PC9kaXY+XG5cdFx0XHRcdFx0eyh0aGlzLnN0YXRlLnRocm93ZXIgJiYgdGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoID4gMCkgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2F2ZSBmbGVmdFwiIG9uQ2xpY2s9e3NlbGYuc2F2ZX0+U2F2ZSAmIFJlc2V0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtzZWxmLnN0YXRlLnNob3dQb2ludHMgJiZcblx0XHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIkFsbCBwb2ludHMgdGhpcyBwcmFjdGljZVwiXG5cdFx0XHRcdFx0XHRcdGNsb3NlPXtzZWxmLnBvaW50c0hpZGV9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxsUG9pbnRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLm1hcChmdW5jdGlvbihwLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3BbMF0gPyAnY2x1dGNoJzonJ30+e3BbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJlc2V0IGZsYWdcblx0XHR2YXIgcmVzZXQgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBwb2ludHNcblx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgpIHtcblx0XHRcdC8vIFVwZGF0ZSB0aGUgZmxhZyBiYXNlZCBvbiB0aGUgdXNlcidzIHJlc3BvbnNlXG5cdFx0XHRyZXNldCA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCB5b3VyIHByYWN0aWNlPycpO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGNhbiByZXNldFxuXHRcdGlmKHJlc2V0KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XCJjbHV0Y2hBdHRlbXB0c1wiOiAwLFxuXHRcdFx0XHRcImNsdXRjaEhpdHNcIjogMCxcblx0XHRcdFx0XCJtb2RlXCI6IG51bGwsXG5cdFx0XHRcdFwicG9pbnRzXCI6IFtdLFxuXHRcdFx0XHRcInNob3dQb2ludHNcIjogZmFsc2UsXG5cdFx0XHRcdFwidG90YWxQb2ludHNcIjogMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2F2ZShldikge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIFNlbmQgdGhlIHByYWN0aWNlIHRvIHRoZSBOQVRGIHNlcnZpY2Vcblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ25hdGYnLCAncHJhY3RpY2UnLCB7XG5cdFx0XHRcInBvaW50c1wiOiB0aGlzLnN0YXRlLnBvaW50c1xuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIE5vdGlmeVxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsICdQcmFjdGljZSBzYXZlZCEnKTtcblxuXHRcdFx0XHQvLyBSZXNldFxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IDAsXG5cdFx0XHRcdFx0XCJjbHV0Y2hIaXRzXCI6IDAsXG5cdFx0XHRcdFx0XCJtb2RlXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJwb2ludHNcIjogW10sXG5cdFx0XHRcdFx0XCJzaG93UG9pbnRzXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwidG90YWxQb2ludHNcIjogMFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25pbih0aHJvd2VyKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IHRocm93ZXJ9KTtcblx0fVxuXG5cdHNpZ25vdXQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IGZhbHNlfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gUHJhY3RpY2U7XG4iLCIvKipcbiAqIE5BVEYgU3RhdHNcbiAqXG4gKiBGZXRjaHMgYW5kIGRpc3BsYXlzIE5BVEYgc3RhdHMgZm9yIHByYWN0aWNlIGFuZCBtYXRjaGVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNVxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy5qcycpO1xuXG4vLyBDb21wb25lbnRzXG52YXIgTW9kYWwgPSByZXF1aXJlKCcuLi9lbGVtZW50cy9tb2RhbC5qc3gnKTtcblxuLy8gU3RhdHMgY29tcG9uZW50XG5jbGFzcyBTdGF0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwibWF0Y2hcIjogbnVsbCxcblx0XHRcdFwicHJhY3RpY2VcIjogbnVsbCxcblx0XHRcdFwicHJhY3RpY2VfYWxsXCI6IGZhbHNlLFxuXHRcdFx0XCJwcmFjdGljZV9kYXRhXCI6IGZhbHNlXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMubWF0Y2hTdGF0cyA9IHRoaXMubWF0Y2hTdGF0cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJhY3RpY2VEYXRhID0gdGhpcy5wcmFjdGljZURhdGEuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByYWN0aWNlRGF0YUhpZGUgPSB0aGlzLnByYWN0aWNlRGF0YUhpZGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByYWN0aWNlU3RhdHMgPSB0aGlzLnByYWN0aWNlU3RhdHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByYWN0aWNlU3RhdHNBbGwgPSB0aGlzLnByYWN0aWNlU3RhdHNBbGwuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBzaWduaW4gLyBzaWdub3V0XG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gSWYgc29tZW9uZSBpcyBsb2dnZWQgaW5cblx0XHRpZih0aGlzLnN0YXRlLnRocm93ZXIpIHtcblxuXHRcdFx0Ly8gRmV0Y2ggdGhlIHByYWN0aWNlIHN0YXRzXG5cdFx0XHR0aGlzLnByYWN0aWNlU3RhdHMoKTtcblxuXHRcdFx0Ly8gRmV0Y2ggdGhlIG1hdGNoIHN0YXRzXG5cdFx0XHQvL3RoaXMubWF0Y2hTdGF0cygpO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBzaWduaW4gLyBzaWdub3V0XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdH1cblxuXHRtYXRjaFN0YXRzKCkge1xuXG5cdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEZldGNoIHRoZSBtYXRjaCBzdGF0c1xuXHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAnbWF0Y2gvc3RhdHMnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBzdGF0cyB0byB0aGUgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJtYXRjaFwiOiByZXMuZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcmFjdGljZURhdGEoZXYpIHtcblxuXHRcdC8vIFNhdmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2UgZGF0YVxuXHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAncHJhY3RpY2UvZGF0YScsIHtcblx0XHRcdFwiaWRcIjogZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBzdGF0cyB0byB0aGUgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJwcmFjdGljZV9kYXRhXCI6IHJlcy5kYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByYWN0aWNlRGF0YUhpZGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJwcmFjdGljZV9kYXRhXCI6IGZhbHNlfSk7XG5cdH1cblxuXHRwcmFjdGljZVN0YXRzKGFsbCkge1xuXG5cdFx0Ly8gSWYgQWxsIGlzIG5vdCBwYXNzZWRcblx0XHRpZih0eXBlb2YgYWxsID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRhbGwgPSBmYWxzZVxuXHRcdH1cblxuXHRcdC8vIFNhdmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2Ugc3RhdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ3ByYWN0aWNlL3N0YXRzJywge1xuXHRcdFx0XCJhbGxcIjogYWxsXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBzdGF0cyB0byB0aGUgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJwcmFjdGljZVwiOiByZXMuZGF0YSxcblx0XHRcdFx0XHRcInByYWN0aWNlX2FsbFwiOiBhbGxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJhY3RpY2VTdGF0c0FsbCgpIHtcblx0XHR0aGlzLnByYWN0aWNlU3RhdHModHJ1ZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBwcmFjdGljZSA9IHRoaXMuc3RhdGUucHJhY3RpY2U7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF0ZlwiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wcmFjdGljZSAmJlxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdDxoMj5QcmFjdGljZTwvaDI+XG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwicHJhY3RpY2VcIj5cblx0XHRcdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cImRhdGVcIj4gPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInBvaW50c1wiPlBvaW50czwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJ0aHJvd3NcIj5UaHJvd3M8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwiZHJvcHNcIj5Ecm9wczwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj1cIjJcIj5BdmVyYWdlIFBvaW50czwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj1cIjNcIj5IaXQgUmF0ZXM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImF2ZXJhZ2VcIj5Ub3RhbDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiYXZlcmFnZVwiPlRhcmdldDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF0ZVwiPlRvdGFsPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJyYXRlXCI+VGFyZ2V0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJyYXRlXCI+Q2x1dGNoPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPk92ZXJhbGw8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5wb2ludHMudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwudGhyb3dzLmF0dGVtcHRzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnRocm93cy5kcm9wc308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5hdmVyYWdlLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLmF2ZXJhZ2UudGFyZ2V0fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnJhdGUudG90YWx9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnJhdGUudGFyZ2V0fSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5yYXRlLmNsdXRjaH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdHtwcmFjdGljZS5sYXN0Lm1hcChmdW5jdGlvbihvLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpfSBkYXRhLWlkPXtvLl9pZH0gY2xhc3NOYW1lPVwic2Vzc2lvblwiIG9uQ2xpY2s9e3NlbGYucHJhY3RpY2VEYXRhfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e1V0aWxzLmRhdGUoby5fY3JlYXRlZCl9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucG9pbnRzLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnRocm93cy5hdHRlbXB0c308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by50aHJvd3MuZHJvcHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28uYXZlcmFnZS50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5hdmVyYWdlLnRhcmdldH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5yYXRlLnRvdGFsfSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5yYXRlLnRhcmdldH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucmF0ZS5jbHV0Y2h9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdHshdGhpcy5zdGF0ZS5wcmFjdGljZV9hbGwgJiZcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlua1wiIG9uQ2xpY2s9e3RoaXMucHJhY3RpY2VTdGF0c0FsbH0+RmV0Y2ggQWxsPC9wPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUucHJhY3RpY2VfZGF0YSAmJlxuXHRcdFx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIlByYWN0aWNlIERhdGFcIlxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlPXtzZWxmLnByYWN0aWNlRGF0YUhpZGV9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsbFBvaW50c1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucHJhY3RpY2VfZGF0YS5tYXAoZnVuY3Rpb24ocCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3BbMF0gPyAnY2x1dGNoJzonJ30+e1wiXCIgKyBwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuc3RhdGUubWF0Y2ggJiZcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblxuXHRcdC8vIFNldCB0aGUgdGhyb3dlclxuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0aHJvd2VyfSk7XG5cblx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2Ugc3RhdHNcblx0XHR0aGlzLnByYWN0aWNlU3RhdHMoKTtcblxuXHRcdC8vIEZldGNoIHRoZSBtYXRjaCBzdGF0c1xuXHRcdC8vdGhpcy5tYXRjaFN0YXRzKCk7XG5cdH1cblxuXHRzaWdub3V0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRzO1xuIiwiLyoqXG4gKiBPcHBvbmVudFxuICpcbiAqIEEgY29tcG9uZW50IGZvciBzZWxlY3RpbmcgYW4gb3Bwb25lbnQgdmlhIGZhdm91cml0ZXMgb3Igc2VhcmNoXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yN1xuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpO1xuXG4vLyBFbGVtZW50c1xudmFyIElucHV0RW50ZXIgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9pbnB1dEVudGVyLmpzeFwiKTtcblxuLy8gU29ydCBmYXZvdXJpdGVzXG5mdW5jdGlvbiBhbGlhc1NvcnQoYSwgYikge1xuXHRyZXR1cm4gYS5hbGlhcy5sb2NhbGVDb21wYXJlKGIuYWxpYXMpO1xufVxuXG5jbGFzcyBPcHBvbmVudFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiZmF2b3VyaXRlXCI6IHByb3BzLmZhdm91cml0ZSxcblx0XHRcdFwidGhyb3dlclwiOiBwcm9wcy50aHJvd2VyXG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2Rcblx0XHR0aGlzLmFkZCA9IHRoaXMuYWRkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmJpbmQodGhpcyk7XG5cdH1cblxuXHRhZGQoZXYpIHtcblxuXHRcdC8vIFN0b3AgYW55IGZ1cnRoZXIgZXZlbnRzXG5cdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIENhbGwgdGhlIHNlcnZpY2UgdG8gYWRkIHRoZSBmYXZvdXJpdGVcblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnZmF2b3VyaXRlJywge1xuXHRcdFx0XCJpZFwiOiB0aGlzLnN0YXRlLnRocm93ZXIuX2lkXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1wiZmF2b3VyaXRlXCI6IHRydWV9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW1vdmUoZXYpIHtcblxuXHRcdC8vIFN0b3AgYW55IGZ1cnRoZXIgZXZlbnRzXG5cdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIENhbGwgdGhlIHNlcnZpY2UgdG8gYWRkIHRoZSBmYXZvdXJpdGVcblx0XHRTZXJ2aWNlcy5kZWxldGUoJ2F1dGgnLCAnZmF2b3VyaXRlJywge1xuXHRcdFx0XCJpZFwiOiB0aGlzLnN0YXRlLnRocm93ZXIuX2lkXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1wiZmF2b3VyaXRlXCI6IGZhbHNlfSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dHIgb25DbGljaz17dGhpcy5zZWxlY3RlZH0+XG5cdFx0XHRcdDx0ZD57dGhpcy5zdGF0ZS50aHJvd2VyLmFsaWFzfTwvdGQ+XG5cdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5mYXZvdXJpdGUgP1xuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItdGltZXNcIiBzdHlsZT17e2NvbG9yOiBcInJlZFwifX0gb25DbGljaz17dGhpcy5yZW1vdmV9PjwvaT5cblx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1wbHVzXCIgc3R5bGU9e3tjb2xvcjogXCJncmVlblwifX0gb25DbGljaz17dGhpcy5hZGR9PjwvaT5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvdGQ+XG5cdFx0XHQ8L3RyPlxuXHRcdClcblx0fVxuXG5cdHNlbGVjdGVkKGV2KSB7XG5cdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0dGhpcy5wcm9wcy5zZWxlY3RlZCh0aGlzLnN0YXRlLnRocm93ZXIpO1xuXHR9XG59XG5cbi8vIE9wcG9uZW50IENvbXBvbmVudFxuY2xhc3MgT3Bwb25lbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImZhdm91cml0ZXNcIjogW10sXG5cdFx0XHRcIm1vZGVcIjogXCJmYXZvdXJpdGVzXCIsXG5cdFx0XHRcInNlYXJjaFwiOiBbXSxcblx0XHRcdFwidGhyb3dlclwiOiBwcm9wcy50aHJvd2VyXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuZmF2b3VyaXRlU2hvdyA9IHRoaXMuZmF2b3VyaXRlU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VhcmNoID0gdGhpcy5zZWFyY2guYmluZCh0aGlzKTtcblx0XHR0aGlzLnNlYXJjaFNob3cgPSB0aGlzLnNlYXJjaFNob3cuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluID0gdGhpcy5zaWduaW4uYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cblx0XHQvLyBJZiBzb21lb25lIGlzIGxvZ2dlZCBpblxuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXHRcdFx0dGhpcy5mYXZvdXJpdGVzKCk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHR9XG5cblx0ZmF2b3VyaXRlcygpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2VydmljZSB0byBnZXQgdGhlIGZhdm91cml0ZXNcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ2Zhdm91cml0ZXMnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU29ydCB0aGUgZGF0YVxuXHRcdFx0XHRyZXMuZGF0YS5zb3J0KGFsaWFzU29ydCk7XG5cblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGZhdm91cml0ZXNcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJmYXZvdXJpdGVzXCI6IHJlcy5kYXRhfSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0ZmF2b3VyaXRlU2hvdygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGVcIjogXCJmYXZvdXJpdGVzXCJ9KVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RlID09ICdmYXZvdXJpdGVzJyA/XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPkZhdm9yaXRlczwvc3Bhbj4gfCA8c3BhbiBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17c2VsZi5zZWFyY2hTaG93fT5TZWFyY2g8L3NwYW4+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDpcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibGlua1wiIG9uQ2xpY2s9e3NlbGYuZmF2b3VyaXRlU2hvd30+RmF2b3JpdGVzPC9zcGFuPiB8IDxzcGFuPlNlYXJjaDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHRcdDxwPjxJbnB1dEVudGVyIG9uRW50ZXI9e3NlbGYuc2VhcmNofSBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBhbGlhc1wiIC8+PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPjx0aD5BbGlhczwvdGg+PHRoPkZhdm9yaXRlPC90aD48L3RyPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUubW9kZSA9PSAnZmF2b3VyaXRlcycgP1xuXHRcdFx0XHRcdFx0XHRzZWxmLnN0YXRlLmZhdm91cml0ZXMubWFwKGZ1bmN0aW9uKHQsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPE9wcG9uZW50Um93IGtleT17aX0gdGhyb3dlcj17dH0gZmF2b3VyaXRlPXt0cnVlfSBzZWxlY3RlZD17c2VsZi5zZWxlY3RlZH0gLz5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdFx0c2VsZi5zdGF0ZS5zZWFyY2gubWFwKGZ1bmN0aW9uKHQsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPE9wcG9uZW50Um93IGtleT17aX0gdGhyb3dlcj17dH0gZmF2b3VyaXRlPXtmYWxzZX0gc2VsZWN0ZWQ9e3NlbGYuc2VsZWN0ZWR9IC8+XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0KTtcblx0fVxuXG5cdHNlYXJjaChxKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIENhbGwgdGhlIHNlcnZpY2UgdG8gZ2V0IHRoZSBzZWFyY2ggcmVzdWx0c1xuXHRcdFNlcnZpY2VzLnJlYWQoJ2F1dGgnLCAnc2VhcmNoJywge1xuXHRcdFx0XCJxXCI6IHFcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTb3J0IHRoZSBkYXRhXG5cdFx0XHRcdHJlcy5kYXRhLnNvcnQoYWxpYXNTb3J0KTtcblxuXHRcdFx0XHQvLyBTdG9yZSB0aGUgZmF2b3VyaXRlc1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcInNlYXJjaFwiOiByZXMuZGF0YX0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KVxuXHR9XG5cblx0c2VhcmNoU2hvdygpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGVcIjogXCJzZWFyY2hcIn0pXG5cdH1cblxuXHRzZWxlY3RlZCh0aHJvd2VyKSB7XG5cdFx0aWYodHlwZW9mIHRoaXMucHJvcHMub25TZWxlY3QgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5wcm9wcy5vblNlbGVjdCh0aHJvd2VyKTtcblx0XHR9XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXHRcdHRoaXMuZmF2b3VyaXRlcygpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IE9wcG9uZW50O1xuIiwiLyoqXG4gKiBQcmFjaXRjZVxuICpcbiAqIE1hbmFnZXMgT3JnIG1lbnUgZm9yIHByYWN0aWNlIGFuZCBkaXNwbGF5IHRoZSBhcHByb3ByaWF0ZSBvbmUgYmFzZWQgb24gd2hhdFxuICogaXMgY2hvc2VuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbnZhciB7TWVudSwgSXRlbX0gPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lbnUuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50c1xudmFyIE5hdGYgPSByZXF1aXJlKCcuL25hdGYvcHJhY3RpY2UuanN4Jyk7XG5cbi8vIFByYWN0aWNlIGNvbXBvbmVudFxuY2xhc3MgUHJhY3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm9yZ1wiOiBIYXNoLmdldCgnb3JnJywgJ25hdGYnKVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm9yZ0NoYW5nZSA9IHRoaXMub3JnQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gudW53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBvcmcgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdvcmcnLCBudWxsKTtcblx0fVxuXG5cdG1lbnVDaGFuZ2Uob3JnKSB7XG5cdFx0SGFzaC5zZXQoJ29yZycsIG9yZyk7XG5cdH1cblxuXHRvcmdDaGFuZ2Uob3JnKSB7XG5cdFx0aWYob3JnICE9IHRoaXMuc3RhdGUub3JnKSB7XG5cdFx0XHRpZihvcmcgPT0gbnVsbCkge1xuXHRcdFx0XHRvcmcgPSAnbmF0Zic7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcIm9yZ1wiOiBvcmd9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwicHJhY3RpY2VcIj5cblx0XHRcdFx0PE1lbnUgY2xhc3NOYW1lPVwibWVudSBzZWNvbmRhcnlcIiBzZWxlY3RlZD17c2VsZi5zdGF0ZS5vcmd9IG9uQ2hhbmdlPXtzZWxmLm1lbnVDaGFuZ2V9PlxuXHRcdFx0XHRcdDxJdGVtIG5hbWU9XCJuYXRmXCI+TkFURjwvSXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5vcmcgPT0gJ25hdGYnICYmXG5cdFx0XHRcdFx0XHRcdDxOYXRmIHRocm93ZXI9e3NlbGYucHJvcHMudGhyb3dlcn0gLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFByYWN0aWNlO1xuIiwiLyoqXG4gKiBTaXRlXG4gKlxuICogUHJpbWFyeSBjb21wb25lbnQgZm9yIHRoZSBlbnRpcmUgc2l0ZVxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjBcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xudmFyIE1lc3NhZ2VzID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZXNzYWdlcy5qc3gnKTtcbnZhciBQb3B1cHMgPSByZXF1aXJlICgnLi9lbGVtZW50cy9wb3B1cHMuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50c1xudmFyIEhlYWRlciA9IHJlcXVpcmUoJy4vaGVhZGVyLmpzeCcpO1xudmFyIE1hdGNoID0gcmVxdWlyZSgnLi9tYXRjaC5qc3gnKTtcbnZhciBQcmFjdGljZSA9IHJlcXVpcmUoJy4vcHJhY3RpY2UuanN4Jyk7XG52YXIgU3RhdHMgPSByZXF1aXJlKCcuL3N0YXRzLmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudFxuY2xhc3MgU2l0ZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXQgdGhlIGhhc2ggbW9kdWxlIGFuZCB3YXRjaCBmb3IgcGFnZSBjaGFuZ2VzXG5cdFx0SGFzaC5pbml0KCk7XG5cdFx0SGFzaC53YXRjaCgncGFnZScsIHRoaXMuaGFzaENoYW5nZS5iaW5kKHRoaXMpKVxuXG5cdFx0Ly8gVHJhY2sgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluLmJpbmQodGhpcykpO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQuYmluZCh0aGlzKSk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcInBhZ2VcIjogSGFzaC5nZXQoJ3BhZ2UnLCAnaG9tZScpLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IGZhbHNlXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMucGFnZUNoYW5nZSA9IHRoaXMucGFnZUNoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFzaENoYW5nZShwYWdlKSB7XG5cdFx0Ly8gSWYgdGhlIHBhZ2UgaGFzIGNoYW5nZWRcblx0XHRpZihwYWdlICE9IHRoaXMuc3RhdGUucGFnZSkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJwYWdlXCI6IHBhZ2UgPyBwYWdlIDogXCJob21lXCJ9KVxuXHRcdFx0dGhpcy5yZWZzLm1lbnUuc2VsZWN0ZWQgPSBwYWdlO1xuXHRcdH1cblx0fVxuXG5cdHBhZ2VDaGFuZ2UobmFtZSkge1xuXHRcdEhhc2guc2V0KFwicGFnZVwiLCBuYW1lKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTdHVwaWQgcmVhY3Rcblx0XHR2YXIgaXRlbXMgPSBbXG5cdFx0XHQvKjxJdGVtIGtleT17MH0gbmFtZT1cImdhbWVzXCI+R2FtZXM8L0l0ZW0+LCovXG5cdFx0XHQ8SXRlbSBrZXk9ezF9IG5hbWU9XCJwcmFjdGljZVwiPlByYWN0aWNlPC9JdGVtPlxuXHRcdF07XG5cdFx0aWYodGhpcy5zdGF0ZS50aHJvd2VyKSB7XG5cdFx0XHRpdGVtcy5wdXNoKDxJdGVtIGtleT17Mn0gbmFtZT1cIm1hdGNoXCI+TWF0Y2g8L0l0ZW0+KTtcblx0XHRcdC8vaXRlbXMucHVzaCg8SXRlbSBrZXk9ezN9IG5hbWU9XCJsZWFndWVcIj5MZWFndWU8L0l0ZW0+KTtcblx0XHRcdGl0ZW1zLnB1c2goPEl0ZW0ga2V5PXs0fSBuYW1lPVwic3RhdHNcIj5TdGF0czwvSXRlbT4pO1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwic2l0ZVwiPlxuXHRcdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHRcdDxNZW51IHJlZj1cIm1lbnVcIiBjbGFzc05hbWU9XCJtZW51IHByaW1hcnlcIiBzZWxlY3RlZD17c2VsZi5zdGF0ZS5wYWdlfSBvbkNoYW5nZT17c2VsZi5wYWdlQ2hhbmdlfT5cblx0XHRcdFx0XHR7aXRlbXN9XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0e3NlbGYuc3RhdGUucGFnZSA9PSAnaG9tZScgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdDxkbCBpZD1cImhvbWVcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZHQ+djEuMS4wPC9kdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZmEtdWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Q2FuIG5vdyBmZXRjaCBhbGwgcHJhY3RpY2Ugc3RhdHMgaW5zdGVhZCBvZiBqdXN0IHRoZSBsYXN0IGZpdmUuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Q2xpY2tpbmcgb24gYW55IHJvdyBpbiBzdGF0cyB3aWxsIGJyaW5nIHVwIGFsbCB0aHJvd3MgaW4gdGhhdCBwcmFjdGljZSBzZXNzaW9uLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkZpeGVkIGEgYnVnIHRoYXQgZGlkbid0IGFsbG93IHlvdSB0byBzaWduIHVwIHdpdGggYW4gZS1tYWlsLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkZpeGVkIGEgYnVnIHRoYXQgY2F1c2VkIHNpZ24gaW4gbm90IHRvIGJlIHJlY29nbmlzZWQgYWZ0ZXIgc2lnbiB1cC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2RkPlxuXHRcdFx0XHRcdFx0XHRcdDxkdD52MS4wLjA8L2R0PlxuXHRcdFx0XHRcdFx0XHRcdDxkZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmYS11bFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5OQVRGIHByYWN0aWNlIGlzIGF2YWlsYWJsZSwgbm8gc2lnbiBpbiByZXF1aXJlZC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5XaXRoIGFuIGFjY291bnQgeW91IGNhbiBzYXZlIHlvdXIgcHJhY3RpY2Ugc2Vzc2lvbiBhbmQga2VlcCB0cmFjayBvZiB5b3VyIG92ZXIgYWxsIHByb2dyZXNzIGluIHRoZSBTdGF0cyBtZW51LjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGQ+XG5cdFx0XHRcdFx0XHRcdDwvZGw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5wYWdlID09ICdwcmFjdGljZScgJiZcblx0XHRcdFx0XHQ8UHJhY3RpY2UgdGhyb3dlcj17c2VsZi5zdGF0ZS50aHJvd2VyfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ21hdGNoJyAmJlxuXHRcdFx0XHRcdDxNYXRjaCB0aHJvd2VyPXtzZWxmLnN0YXRlLnRocm93ZXJ9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUucGFnZSA9PSAnc3RhdHMnICYmXG5cdFx0XHRcdFx0PFN0YXRzIC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0PFBvcHVwcyAvPlxuXHRcdFx0XHQ8TWVzc2FnZXMgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0aHJvd2VyfSk7XG5cdH1cblxuXHRzaWdub3V0KCkge1xuXG5cdFx0Ly8gSWYgdGhlIHBhZ2UgbmVlZHMgdG8gYmUgc2lnbmVkIGluXG5cdFx0aWYoWydwcmFjdGljZSddLmluZGV4T2YodGhpcy5zdGF0ZS5wYWdlKSA9PSAtMSkge1xuXHRcdFx0SGFzaC5zZXQoJ3BhZ2UnLCBudWxsKTtcblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIHRocm93ZXIgZmxhZ1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFNpdGU7XG4iLCIvKipcbiAqIFN0YXRzXG4gKlxuICogTWFuYWdlcyBPcmcgbWVudSBmb3Igc3RhdHMgYW5kIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIG9uZSBiYXNlZCBvbiB3aGF0XG4gKiBpcyBjaG9zZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI2XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRzXG52YXIgTmF0ZiA9IHJlcXVpcmUoJy4vbmF0Zi9zdGF0cy5qc3gnKTtcblxuLy8gU3RhdHMgY29tcG9uZW50XG5jbGFzcyBTdGF0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwib3JnXCI6IEhhc2guZ2V0KCdvcmcnLCAnbmF0ZicpXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMub3JnQ2hhbmdlID0gdGhpcy5vcmdDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC51bndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIG9yZyBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ29yZycsIG51bGwpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdGlmKG9yZyA9PSBudWxsKSB7XG5cdFx0XHRcdG9yZyA9ICduYXRmJztcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJzdGF0c1wiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgdGhyb3dlcj17c2VsZi5wcm9wcy50aHJvd2VyfSAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gU3RhdHM7XG4iLCIvKipcbiAqIFRocm93ZXJcbiAqXG4gKiBNYW5hZ2VzIGVkaXRpbmcgZGV0YWlscyBmb3IgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdGhyb3dlclxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjVcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xuXG4vLyBUaHJvd2VyIGNvbXBvbmVudFxuY2xhc3MgVGhyb3dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2IC8+XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gVGhyb3dlcjtcbiIsIi8qKlxuICogUmVxdWVzdHNcbiAqXG4gKiBNYW5hZ2VzIG1hdGNoIHJlcXVlc3RzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0zMVxuICovXG5cbi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9oYXNoLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgc3BlY2lmaWNcbnZhciBUd29XYXkgPSByZXF1aXJlKCcuL3R3b3dheS5qcycpO1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuXG4vLyBTaWduZWQgaW4gdGhyb3dlclxuX190aHJvd2VyID0gbnVsbDtcblxuLy8gUGVuZGluZyByZXF1ZXN0c1xuX19wZW5kaW5nID0gW107XG5cbi8qKlxuICogSW5pdFxuICpcbiAqIEluaXRpYWxpc2VzIHRoZSBtb2R1bGUgYnkgdHJhY2tpbmcgYW55IHNpZ24gaW4gLyBzaWduIG91dCBldmVudHNcbiAqXG4gKiBAbmFtZSBfaW5pdFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9pbml0KCkge1xuXG5cdC8vIEdldCBub3RpZmllZCBvZiBhbnkgY2hhbmdlIGluIHRocm93ZXJcblx0RXZlbnRzLmFkZCgnc2lnbmluJywgX3NpZ25pbik7XG5cdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCBfc2lnbm91dCk7XG59XG5cbi8qKlxuICogUGVuZGluZ1xuICpcbiAqIEZldGNoZXMgcGVuZGluZyByZXF1ZXN0c1xuICpcbiAqIEBuYW1lIF9wZW5kaW5nXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BlbmRpbmcoKSB7XG5cblx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdExvYWRlci5zaG93KCk7XG5cblx0Ly8gRmV0Y2ggdGhlIHJlcXVlc3RzXG5cdFNlcnZpY2VzLnJlYWQoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdHMnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0X3BlbmRpbmdQcm9jZXNzKHJlcy5kYXRhKTtcblx0XHR9XG5cdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0TG9hZGVyLmhpZGUoKTtcblx0fSlcbn1cblxuLyoqXG4gKiBQZW5kaW5nIFByb2Nlc3NcbiAqXG4gKiBQcm9jZXNzZXMgYW55IHBlbmRpbmcgcmVxdWVzdHMgdGhhdCBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXG4gKlxuICogQG5hbWUgX3BlbmRpbmdQcm9jZXNzXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BlbmRpbmdQcm9jZXNzKHJlcXVlc3RzKSB7XG5cblx0Ly8gU3RvcmUgdGhlIHBlbmRpbmcgcmVxdWVzdHNcblx0X19wZW5kaW5nID0gcmVxdWVzdHM7XG5cblx0Ly8gR28gdGhyb3VnaCBlYWNoIGluIHdoaWNoIHRoZSB0aHJvd2VyIGlzIHRoZSBvcHBvbmVudFxuXHRmb3IodmFyIG8gb2YgX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cblx0XHQvLyBBZGQgYSBuZXcgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlJywgby5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBoYXZlIGFuIFwiICsgby5vcmcgKyBcIiBtYXRjaCByZXF1ZXN0IGZyb20gXCIgK1xuXHRcdFx0XHRcdG8uYWxpYXMgKyBcIi4gRG8geW91IHdhbnQgdG8gc3RhcnQgdGhpcyBtYXRjaCBub3c/XCIsXG5cdFx0XHRcImJ1dHRvbnNcIjogW1xuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkRlY2xpbmVcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdERlY2xpbmV9LFxuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkFjY2VwdFwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0QWNjZXB0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gR28gdGhyb3VnaCBlYWNoIGluIHdoaWNoIHRoZSB0aHJvd2VyIGlzIHRoZSBpbml0aWF0b3Jcblx0Zm9yKHZhciBvIG9mIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblxuXHRcdC8vIEFkZCBhIG5ldyBtZXNzYWdlXG5cdFx0RXZlbnRzLnRyaWdnZXIoJ21lc3NhZ2UnLCBvLl9pZCwge1xuXHRcdFx0XCJ0ZXh0XCI6IFwiWW91IGluaXRpYXRlZCBhbiBcIiArIG8ub3JnICsgXCIgbWF0Y2ggd2l0aCBcIiArXG5cdFx0XHRcdFx0by5hbGlhcyArIFwiLiBEbyB5b3Ugd2FudCB0byB3YWl0IGZvciB0aGlzIG1hdGNoIHRvIHN0YXJ0P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWxldGVcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdERlbGV0ZX0sXG5cdFx0XHRcdHtcInRpdGxlXCI6IFwiV2FpdFwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0V2FpdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIFJlcXVlc3QgQWNjZXB0XG4gKlxuICogQ2FsbGVkIHdoZW4gYSBtYXRjaCByZXF1ZXN0IGlzIGFjY2VwdGVkIGJ5IHRoZSBvcHBvbmVudFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0QWNjZXB0XG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gX3JlcXVlc3RBY2NlcHQoaWQpIHtcblxuXHQvLyBMZXQgdGhlIHNlcnZlciBrbm93IHRoZSBtYXRjaCB3YXMgYWNjZXB0ZWRcblx0U2VydmljZXMudXBkYXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIEZpbmQgdGhlIHBlbmRpbmcgbWF0Y2gsIHN0b3JlIGl0LCB0aGVuIHJlbW92ZSBpdCBmcm9tIHBlbmRpbmdcblx0XHRcdHZhciByZXEgPSBudWxsO1xuXHRcdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXHRcdFx0XHRpZihfX3BlbmRpbmdbJ29wcG9uZW50J11baV0uX2lkID09IGlkKSB7XG5cdFx0XHRcdFx0cmVxID0gX19wZW5kaW5nWydvcHBvbmVudCddW2ldO1xuXHRcdFx0XHRcdF9fcGVuZGluZ1snb3Bwb25lbnQnXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0SGFzaC5zZXQoe1xuXHRcdFx0XHRcInBhZ2VcIjogXCJtYXRjaFwiLFxuXHRcdFx0XHRcIm9yZ1wiOiByZXEub3JnLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFwiaWRcIjogXCJtfFwiICsgcmVzLmRhdGEgKyBcInxcIiArIHJlcS5hbGlhc1xuXHRcdFx0fSlcblx0XHR9XG5cdH0pXG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgYWNjZXB0ZWRcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmVxdWVzdCBEZWNsaW5lXG4gKlxuICogQ2FsbGVkIHdoZW4gYSBtYXRjaCByZXF1ZXN0IGlzIGRlY2xpbmVkIGJ5IHRoZSBvcHBvbmVudFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0RGVjbGluZVxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0RGVjbGluZShpZCkge1xuXG5cdC8vIExldCB0aGUgc2VydmVyIGtub3cgdGhlIG1hdGNoIHdhcyBkZWNsaW5lZFxuXHRTZXJ2aWNlcy5kZWxldGUoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdCcsIHtcblx0XHRcImlkXCI6IGlkXG5cdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0Ly8gRGVsZXRlIHRoZSByZXF1ZXN0IGZyb20gdGhlIHBlbmRpbmdcblx0XHRcdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ29wcG9uZW50J10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRcdF9fcGVuZGluZ1snb3Bwb25lbnQnXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgZGVsZXRlZFxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IERlbGV0ZVxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBkZWxldGVkIGJ5IHRoZSBpbml0aWF0b3JcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdERlbGV0ZVxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0RGVsZXRlKGlkKSB7XG5cblx0Ly8gTGV0IHRoZSBzZXJ2ZXIga25vdyB3ZSBhcmUgcmVtb3Zpbmcgb3VyIHJlcXVlc3Rcblx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydpbml0aWF0b3InXSkge1xuXHRcdFx0XHRpZihfX3BlbmRpbmdbJ2luaXRpYXRvciddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRcdF9fcGVuZGluZ1snaW5pdGlhdG9yJ10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBSZXR1cm4gdHJ1ZSwgYXNzdW1lIHRoZSByZXF1ZXN0IHdhcyBkZWxldGVkXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgTmV3XG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIHRocm93ZXIgcmVjaWV2ZXMgYSBuZXcgbWF0Y2ggcmVxdWVzdFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0TmV3XG4gKiBAcGFyYW0gb2JqZWN0IG1zZ1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0TmV3KG1zZykge1xuXG5cdC8vIElmIHRoaXMgaXMgYSBuZXcgcmVxdWVzdFxuXHRpZihtc2cudHlwZSA9PSAnbWF0Y2hfcmVxdWVzdCcpIHtcblxuXHRcdC8vIEFkZCBpdCB0byB0aGUgcGVuZGluZ1xuXHRcdF9fcGVuZGluZ1snb3Bwb25lbnQnXS5wdXNoKG1zZyk7XG5cblx0XHQvLyBBZGQgYSBuZXcgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlJywgbXNnLl9pZCwge1xuXHRcdFx0XCJ0ZXh0XCI6IFwiWW91IGhhdmUgYW4gXCIgKyBtc2cub3JnICsgXCIgbWF0Y2ggcmVxdWVzdCBmcm9tIFwiICtcblx0XHRcdFx0XHRtc2cuYWxpYXMgKyBcIi4gRG8geW91IHdhbnQgdG8gc3RhcnQgdGhpcyBtYXRjaCBub3c/XCIsXG5cdFx0XHRcImJ1dHRvbnNcIjogW1xuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkRlY2xpbmVcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdERlY2xpbmV9LFxuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkFjY2VwdFwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0QWNjZXB0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gRWxzZSBpZiB3ZSBuZWVkIHRvIGRlbGV0ZVxuXHRlbHNlIGlmKG1zZy50eXBlID09IFwibWF0Y2hfcmVxdWVzdF9kZWxldGVcIikge1xuXG5cdFx0Ly8gRGVsZXRlIHRoZSByZXF1ZXN0IGZyb20gdGhlIHBlbmRpbmdcblx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cdFx0XHRpZihfX3BlbmRpbmdbJ29wcG9uZW50J11baV0uX2lkID09IG1zZy5pZCkge1xuXHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlX3JlbW92ZScsIG1zZy5pZCk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXF1ZXN0IFdhaXRcbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgaW5pdGlhdG9yIG9mIGEgbWF0Y2ggcmVxdWVzdCBoYXMgY2hvc2VuIHRvIHdhaXQgZm9yIGl0XG4gKlxuICogQG5hbWUgX3JlcXVlc3RXYWl0XG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gX3JlcXVlc3RXYWl0KGlkKSB7XG5cblx0Ly8gRmluZCB0aGUgcGVuZGluZyBtYXRjaCwgc3RvcmUgaXQsIHRoZW4gcmVtb3ZlIGl0IGZyb20gcGVuZGluZ1xuXHR2YXIgcmVxID0gbnVsbDtcblx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblx0XHRpZihfX3BlbmRpbmdbJ2luaXRpYXRvciddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0cmVxID0gX19wZW5kaW5nWydpbml0aWF0b3InXVtpXTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGFuZ2UgdGhlIHBhZ2UgYW5kIHN0b3JlIHRoZSByZXF1ZXN0IGluZm9cblx0SGFzaC5zZXQoe1xuXHRcdFwicGFnZVwiOiBcIm1hdGNoXCIsXG5cdFx0XCJvcmdcIjogcmVxLm9yZy50b0xvd2VyQ2FzZSgpLFxuXHRcdFwiaWRcIjogXCJyfFwiICsgcmVxLl9pZCArICd8JyArIHJlcS5hbGlhc1xuXHR9KVxuXG5cdC8vIFJldHVybiBPS1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBTaWduaW5cbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzaWducyBpbiAob3Igd2FzIGFscmVhZHkgc2lnbmVkIGluKS4gRmV0Y2hlcyBwZW5kaW5nXG4gKiByZXF1ZXN0cyBhbmQgc3RhcnRzIHRyYWNraW5nIGFueSBuZXcgcmVxdWVzdHNcbiAqXG4gKiBAbmFtZSBfc2lnbmluXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3NpZ25pbih0aHJvd2VyKSB7XG5cblx0Ly8gU3RvcmUgdGhlIHRocm93ZXJcblx0X190aHJvd2VyID0gdGhyb3dlci5faWQ7XG5cblx0Ly8gRmV0Y2ggdGhlIHBlbmRpbmcgcmVxdWVzdHNcblx0X3BlbmRpbmcoKTtcblxuXHQvLyBUcmFjayBhbnkgbmV3IHJlcXVlc3RzXG5cdFR3b1dheS50cmFjayhcblx0XHQnYXV0aCcsICdyZXF1ZXN0cy0nICsgX190aHJvd2VyLFxuXHRcdF9yZXF1ZXN0TmV3XG5cdCk7XG59XG5cbi8qKlxuICogU2lnbm91dFxuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNpZ25zIG91dCBvciBpcyBzaWduZWQgb3V0LiBSZW1vdmVzIGFsbCBtZXNzYWdlcyBhbmRcbiAqIHN0b3BzIHRyYWNraW5nIHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25vdXRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc2lnbm91dCgpIHtcblxuXHQvLyBEZWxldGUgYWxsIG1lc3NhZ2VzXG5cdGZvcih2YXIgbyBpbiBfX3BlbmRpbmcpIHtcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBvLl9pZCk7XG5cdH1cblxuXHQvLyBTdG9wIHRyYWNraW5nIHRoZSB0aHJvd2VyXG5cdFR3b1dheS51bnRyYWNrKFxuXHRcdCdhdXRoJywgJ3JlcXVlc3RzLScgKyBfX3Rocm93ZXIsXG5cdFx0X3JlcXVlc3ROZXdcblx0KTtcbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluaXRcIjogX2luaXQsXG59XG4iLCIvKipcbiAqIFR3byBXYXlcbiAqXG4gKiBBbGxvd3MgY2xpZW50cyB0byBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHZpYSB3ZWJzb2NrZXQgc28gZXZlbnRzIGNhbiBiZVxuICogdHJhY2tlZCBpbiByZWFsIHRpbWVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI5XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuL2dlbmVyaWMvc2VydmljZXMuanMnKTtcbnZhciBUb29scyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy90b29scy5qcycpO1xudmFyIFdTSGVscGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL3dlYnNvY2tldC5qcycpO1xuXG4vLyBUaGUgcGluZyB0aW1lclxudmFyIF9fcGluZyA9IG51bGw7XG5cbi8vIFRoZSB2YWxpZCBjbG9zZSBmbGFnXG52YXIgX19jbG9zZSA9IGZhbHNlO1xuXG4vLyBUaGUgd2Vic29ja2V0XG52YXIgX19zb2NrZXQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBzZXJ2aWNlIGNhbGxiYWNrc1xuICpcbiAqIHdpbGwgY29udGFpbiBhIHN0cmluZyBmb3IgdGhlIHNlcnZpY2UgLyBrZXkgd2l0aCBjYWxsYmFja3MgZm9yIHRob3NlIGtleXMsXG4gKiBlLmcuIHtcbiAqXHRcInNlcnZpY2UxXCI6IHtcbiAqXHRcdFwia2V5MVwiOiBbZnVuY3Rpb24xLCBmdW5jdGlvbjJdLFxuICpcdFx0XCJrZXkyXCI6IFtmdW5jdGlvbjNdXG4gKlx0fSxcbiAqXHRcInNlcnZpY2UyXCI6IHtcbiAqXHRcdFwia2V5M1wiOiBbZnVuY3Rpb240XVxuICpcdH1cbiAqIH1cbiAqL1xudmFyIF9fc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgVHJhY2tcbiAqXG4gKiBBZGRzIHRyYWNraW5nIGZvciBhIHNwZWNpZmljIHNlcnZpY2Uga2V5XG4gKlxuICogQG5hbWUgX2FkZFRyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcbiAqIEBwYXJhbSBzdHJpbmcga2V5XG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIHNlcnZpY2UsIGFkZCBpdFxuXHRpZighKHNlcnZpY2UgaW4gX19zZXJ2aWNlcykpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdID0ge31cblx0fVxuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIGtleSBmb3IgdGhlIGdpdmVuIHNlcnZpY2UsIGFkZCB0aGUgbGlzdCB3aXRoXG5cdC8vXHR0aGUgY2FsbGJhY2tcblx0aWYoIShrZXkgaW4gX19zZXJ2aWNlc1tzZXJ2aWNlXSkpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0gPSBbY2FsbGJhY2tdXG5cdH1cblxuXHQvLyBFbHNlLCBhZGQgdGhlIGNhbGxiYWNrLCB0byB0aGUgZ2l2ZW4gc2VydmljZS9rZXlcblx0ZWxzZSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLnB1c2goY2FsbGJhY2spO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIENsb3NlXG4gKlxuICogQ2hlY2tzIGlmIGl0J3MgYSBsZWdpdGltYXRlIGNsb3NlZCBzb2NrZXQsIG9yIGlmIHdlIG5lZWQgdG8gcmVjb25uZWN0IHRvXG4gKiBldmVyeXRoaW5nXG4gKlxuICogQG5hbWUgX2hhbmRsZUNsb3NlXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhbmRsZUNsb3NlKCkge1xuXG5cdC8vIElmIGl0J3MgYSB2YWxpZCBjbG9zZVxuXHRpZihfX2Nsb3NlKSB7XG5cdFx0X19zb2NrZXQgPSBudWxsO1xuXHR9XG5cblx0Ly8gRWxzZSwgd2FpdCA1IHNlY29uZHMsIGFuZCByZW9wZW4gdGhlIHNvY2tldFxuXHRlbHNlIHtcblx0XHRzZXRUaW1lb3V0KF9vcGVuU29ja2V0LCA1MDAwKTtcblx0fVxufVxuXG4vKipcbiAqIEhhbmRsZSBNZXNzYWdlc1xuICpcbiAqIFJlY2lldmVzIG1lc3NhZ2VzIGZyb20gd2Vic29ja2V0cyBhbmQgZGlyZWN0cyB0aGUgZGF0YSB0byB0aGUgYXBwcm9wcmlhdGVcbiAqIGNhbGxiYWNrXG4gKlxuICogQG5hbWUgX2hhbmRsZU1lc3NhZ2VcbiAqIEBwYXJhbSBXZWJTb2NrZXQgc29ja1x0XHRUaGUgc29ja2V0IHRoZSBtZXNzYWdlIGNhbWUgb25cbiAqIEBwYXJhbSBNZXNzYWdlRXZlbnQgZXZcdFx0VGhlIGV2ZW50IG1lc3NhZ2UgcmVjZWl2ZWRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaGFuZGxlTWVzc2FnZShzb2NrLCBldikge1xuXG5cdC8vIElmIGl0J3MgcG9uZ1xuXHRpZihldi5kYXRhID09ICdwb25nJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNjcmV3IHlvdSBqYXZhc2NyaXB0XG5cdHZhciByID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0ci5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFBhcnNlIHRoZSBkYXRhXG5cdFx0b01zZyA9IEpTT04ucGFyc2Uoci5yZXN1bHQpO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSB0aGUgc2VydmljZVxuXHRcdGlmKG9Nc2cuc2VydmljZSBpbiBfX3NlcnZpY2VzKSB7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgdGhlIGtleVxuXHRcdFx0aWYob01zZy5rZXkgaW4gX19zZXJ2aWNlc1tvTXNnLnNlcnZpY2VdKSB7XG5cblx0XHRcdFx0Ly8gQ2FsbCBlYWNoIGNhbGxiYWNrXG5cdFx0XHRcdGZvcih2YXIgZiBvZiBfX3NlcnZpY2VzW29Nc2cuc2VydmljZV1bb01zZy5rZXldKSB7XG5cdFx0XHRcdFx0ZihvTXNnLmRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0ci5yZWFkQXNUZXh0KGV2LmRhdGEpO1xufVxuXG4vKipcbiAqIE9wZW4gU29ja2V0XG4gKlxuICogT3BlbnMgYSBuZXcgd2Vic29ja2V0IGJ5IGZpcnN0IHNlbmRpbmcgYSBtZXNzYWdlIHRvIHdlYnBvbGwgdG8gc3RhcnQgdGhlXG4gKiBhdXRoZW50aWNhdGlvbiBoYW5kc2hha2UsIHRoZW4gbWFraW5nIHRoZSBjb25uZWN0aW9uLCBhbmQgZmluYWxseSBzZW5kaW5nXG4gKiBhbGwgdGhlIHRyYWNrIG1lc3NhZ2VzIHN0b3JlZFxuICpcbiAqIEBuYW1lIF9vcGVuU29ja2V0XG4gKiBAcGFyYW1cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfb3BlblNvY2tldCgpIHtcblxuXHQvLyBOb3RpZnkgdGhlIGJhY2tlbmQgb2YgYSBuZXcgd3MgY29ubmVjdGlvblxuXHRTZXJ2aWNlcy5yZWFkKCd3ZWJwb2xsJywgJ3dlYnNvY2tldCcsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBDcmVhdGUgdGhlIHdlYnNvY2tldFxuXHRcdF9fc29ja2V0ID0gV1NIZWxwZXIoJ3dzczovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnL3dzJywge1xuXHRcdFx0XCJvcGVuXCI6IGZ1bmN0aW9uKHNvY2spIHtcblxuXHRcdFx0XHQvLyBSZXNldCB0aGUgY2xvc2UgZmxhZ1xuXHRcdFx0XHRfX2Nsb3NlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gSW5pdCB0aGUgbWVzc2FnZSBsaXN0XG5cdFx0XHRcdGxNc2dzID0gW107XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBjb25uZWN0IG1lc3NhZ2Vcblx0XHRcdFx0bE1zZ3MucHVzaCh7XG5cdFx0XHRcdFx0XCJfdHlwZVwiOiBcImNvbm5lY3RcIixcblx0XHRcdFx0XHRcImtleVwiOiByZXMuZGF0YVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZGQgZWFjaCB0cmFjayBtZXNzYWdlXG5cdFx0XHRcdGZvcih2YXIgcyBpbiBfX3NlcnZpY2VzKSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBrIGluIF9fc2VydmljZXNbc10pIHtcblx0XHRcdFx0XHRcdGxNc2dzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcIl90eXBlXCI6IFwidHJhY2tcIixcblx0XHRcdFx0XHRcdFx0XCJzZXJ2aWNlXCI6IHMsXG5cdFx0XHRcdFx0XHRcdFwia2V5XCI6IGtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNlbmQgdGhlIG1lc3NhZ2VzXG5cdFx0XHRcdHNvY2suc2VuZChKU09OLnN0cmluZ2lmeShsTXNncykpXG5cdFx0XHR9LFxuXHRcdFx0XCJtZXNzYWdlXCI6IF9oYW5kbGVNZXNzYWdlLFxuXHRcdFx0XCJjbG9zZVwiOiBfaGFuZGxlQ2xvc2Vcblx0XHR9KTtcblxuXHRcdC8vIElmIHdlIGhhdmVuJ3QgYWxyZWFkeSBzZXR1cCB0aGUgcGluZyBpbnRlcnZhbFxuXHRcdGlmKF9fcGluZyA9PSBudWxsKSB7XG5cdFx0XHRfX3BpbmcgPSBzZXRJbnRlcnZhbChfcGluZywgMzAwMDAwKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIFBpbmdcbiAqXG4gKiBTZW5kIGEgcGluZyB0byBrZWVwIHRoZSBzb2NrZXQgYWxpdmVcbiAqXG4gKiBAbmFtZSBfcGluZ1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9waW5nKCkge1xuXG5cdC8vIFNlbmQgYSBwaW5nIG1lc3NhZ2Ugb3ZlciB0aGUgc29ja2V0IHRvIGtlZXAgaXQgYWxpdmVcblx0X19zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG5cdFx0XCJfdHlwZVwiOiBcInBpbmdcIlxuXHR9KSk7XG59XG5cbi8qKlxuICogVHJhY2tcbiAqXG4gKiBUYWtlcyBhIFVSTCBhbmQgYW4gZXZlbnQgdHlwZSBhbmQgYSkgb3BlbnMgYSBuZXcgd2Vic29ja2V0IG9yIHVzZXMgYW5cbiAqIGV4aXN0aW5nIG9uZSwgdGhlbiBiKSBzZW5kcyBhIHRyYWNraW5nIG1lc3NhZ2UgdGhyb3VnaCB0aGUgd2Vic29ja2V0IHNvIHRoZVxuICogYmFja2VuZCBrbm93c24gdG8gc2VuZCB0aGUga2V5IHR5cGUgdG8gdXNcbiAqXG4gKiBAbmFtZSBfdHJhY2tcbiAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0aGUga2V5IGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHN0cmluZyBrZXlcdFx0XHRUaGUga2V5IHRvIHRyYWNrXG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIGZvciBhbnkgbWVzc2FnZXMgb2YgdGhlIGtleSB2YWx1ZVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF90cmFjayhzZXJ2aWNlLCBrZXksIGNhbGxiYWNrKSB7XG5cblx0Ly8gQWRkIHRoZSB0cmFja2luZyBjYWxsYmFja1xuXHRfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjayk7XG5cblx0Ly8gSWYgd2UgaGF2ZSBubyBzb2NrZXRcblx0aWYoIV9fc29ja2V0KSB7XG5cblx0XHQvLyBJZiBpdCdzIG51bGxcblx0XHRpZihfX3NvY2tldCA9PSBudWxsKSB7XG5cblx0XHRcdC8vIFNldCBzb2NrZXQgdG8gZmFsc2Ugc28gd2UgZG9uJ3QgdHJ5IHRvIHJlLW9wZW5cblx0XHRcdF9fc29ja2V0ID0gZmFsc2U7XG5cblx0XHRcdC8vIE9wZW4gYSBuZXcgb25lXG5cdFx0XHRfb3BlblNvY2tldCgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEVsc2UgaWYgaXQncyBvcGVuXG5cdGVsc2UgaWYoX19zb2NrZXQucmVhZHlTdGF0ZSA9PSAxKSB7XG5cblx0XHQvLyBTZW5kIHRoZSB0cmFja2luZyBtZXNzYWdlIHRocm91Z2ggdGhlIHdlYnNvY2tldFxuXHRcdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJfdHlwZVwiOiBcInRyYWNrXCIsXG5cdFx0XHRcInNlcnZpY2VcIjogc2VydmljZSxcblx0XHRcdFwia2V5XCI6IGtleVxuXHRcdH0pKTtcblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgbm8gc29ja2V0LCBvciBpdCdzIG9wZW5pbmcsIHRoZW4gdXBvbiBvcGVuaW5nIGFsbCBzZXJ2aXZlcy9cblx0Ly9cdGtleXMgaW4gdGhlIHRyYWNraW5nIGxpc3Qgd2lsbCBiZSBzZW50IGFzIG1lc3NhZ2VzXG59XG5cbi8qKlxuICogVW50cmFja1xuICpcbiAqIFJlbW92ZXMgYSBjYWxsYmFjayBhbmQgbm90aWZpZXMgdGhlIHdlYnNvY2tldCB3ZSBhcmUgbm90IHRyYWNraW5nIGFueW1vcmVcbiAqXG4gKiBAbmFtZSBfdW50cmFja1xuICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRoZSBrZXkgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0gc3RyaW5nIGtleVx0XHRcdFRoZSBrZXkgdG8gdW50cmFja1xuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBjYWxsYmFjayBhc3NvY2lhdGVkIHdpdGggdGhlIHRyYWNrXG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gX3VudHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHdlIGhhdmUgdGhlIHNlcnZpY2Vcblx0aWYoc2VydmljZSBpbiBfX3NlcnZpY2VzKSB7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBrZXlcblx0XHRpZihrZXkgaW4gX19zZXJ2aWNlc1tzZXJ2aWNlXSkge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggY2FsbGJhY2tcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBJZiB0aGUgY2FsbGJhY2sgbWF0Y2hlc1xuXHRcdFx0XHRpZihjYWxsYmFjayA9PSBfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV1baV0pIHtcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUgY2FsbGJhY2tcblx0XHRcdFx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0uc3BsaWNlKGksIDEpO1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBubyBtb3JlIGNhbGxiYWNrc1xuXHRcdFx0XHRcdGlmKF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5sZW5ndGggPT0gMCkge1xuXG5cdFx0XHRcdFx0XHQvLyBOb3RpZnkgdGhlIHdlYnNvY2tldCB3ZSBhcmVuJ3QgdHJhY2tpbmcgdGhlIGtleVxuXHRcdFx0XHRcdFx0Ly9cdGFueW1vcmVcblx0XHRcdFx0XHRcdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdFx0XHRcIl90eXBlXCI6IFwidW50cmFja1wiLFxuXHRcdFx0XHRcdFx0XHRcInNlcnZpY2VcIjogc2VydmljZSxcblx0XHRcdFx0XHRcdFx0XCJrZXlcIjoga2V5XG5cdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUga2V5XG5cdFx0XHRcdFx0XHRkZWxldGUgX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldO1xuXG5cdFx0XHRcdFx0XHQvLyBJZiB3ZSBoYXZlIG5vIG1vcmUga2V5cyBpbiB0aGUgc2VydmljZVxuXHRcdFx0XHRcdFx0aWYoVG9vbHMuZW1wdHkoX19zZXJ2aWNlc1tzZXJ2aWNlXSkpIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZW1vdmUgdGhlIHNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIF9fc2VydmljZXNbc2VydmljZV07XG5cblx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBtb3JlIHNlcnZpY2VzXG5cdFx0XHRcdFx0XHRcdGlmKFRvb2xzLmVtcHR5KF9fc2VydmljZXMpKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBUdXJuIG9mZiB0aGUgcGluZyBpbnRlcnZhbFxuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX19waW5nKTtcblx0XHRcdFx0XHRcdFx0XHRfX3BpbmcgPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2xvc2UgdGhlIHNvY2tldFxuXHRcdFx0XHRcdFx0XHRcdF9fY2xvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9fc29ja2V0LmNsb3NlKDEwMDAsICdub3RoaW5nIGVsc2UgdG8gdHJhY2snKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENhbGxiYWNrIGZvdW5kIGFuZCByZW1vdmVkXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDYWxsYmFjayBub3QgZm91bmRcblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vLyBleHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHJhY2tcIjogX3RyYWNrLFxuXHRcInVudHJhY2tcIjogX3VudHJhY2tcbn1cbiIsIi8qKlxuICogVXRpbHNcbiAqXG4gKiBTaGFyZWQgdXRpbGl0aWVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNFxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9ldmVudHMuanMnKTtcblxuLyoqXG4gKiBVdGlsc1xuICovXG52YXIgVXRpbHMgPSB7XG5cblx0ZGF0ZTogZnVuY3Rpb24odHMpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKHRzKjEwMDApO1xuXHRcdHZhciBZID0gJycgKyBkLmdldEZ1bGxZZWFyKCk7XG5cdFx0dmFyIE0gPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKTtcblx0XHRpZihNLmxlbmd0aCA9PSAxKSBNID0gJzAnICsgTTtcblx0XHR2YXIgRCA9ICcnICsgZC5nZXREYXRlKCk7XG5cdFx0aWYoRC5sZW5ndGggPT0gMSkgRCA9ICcwJyArIEQ7XG5cdFx0cmV0dXJuIFkgKyAnLycgKyBNICsgJy8nICsgRDtcblx0fSxcblxuXHRlcnJvclRyZWU6IGZ1bmN0aW9uKGVycm9ycykge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmV0dXJuXG5cdFx0dmFyIG9SZXQgPSB7fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGVycm9yXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHQvLyBJZiB0aGUgZXJyb3IgZmllbGQgaGFzIGEgcGVyaW9kXG5cdFx0XHRpZihlcnJvcnNbaV1bMF0uaW5jbHVkZXMoJy4nKSkge1xuXG5cdFx0XHRcdC8vIFNwbGl0IGl0XG5cdFx0XHRcdGxGaWVsZCA9IGVycm9yc1tpXVswXS5zcGxpdCgvXFwuKC4qKS8pXG5cblx0XHRcdFx0Ly8gSWYgd2UgZG9uJ3QgaGF2ZSB0aGUgZmllbGQgYWxyZWFkeVxuXHRcdFx0XHRpZighb1JldFtsRmllbGRbMF1dKSB7XG5cdFx0XHRcdFx0b1JldFtsRmllbGRbMF1dID0gW11cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCB0aGUgcmVzdFxuXHRcdFx0XHRvUmV0W2xGaWVsZFswXV0ucHVzaChbbEZpZWxkWzFdLCBlcnJvcnNbaV1bMV1dKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpdCdzIGEgZmxhdCBmaWVsZFxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9SZXRbZXJyb3JzW2ldWzBdXSA9IGVycm9yc1tpXVsxXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCB0aGUgZXJyb3JzIHdlIGZvdW5kXG5cdFx0Zm9yKGxldCBrIGluIG9SZXQpIHtcblxuXHRcdFx0Ly8gSWYgd2UgZmluZCBhbiBhcnJheVxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShvUmV0W2tdKSkge1xuXG5cdFx0XHRcdC8vIFJlY3Vyc2Vcblx0XHRcdFx0b1JldFtrXSA9IFV0aWxzLmVycm9yVHJlZShvUmV0W2tdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIFRyZWVcblx0XHRyZXR1cm4gb1JldDtcblx0fSxcblxuXHRzZXJ2aWNlRXJyb3I6IGZ1bmN0aW9uKGVycikge1xuXG5cdFx0Ly8gV2hhdCBlcnJvciBpcyBpdD9cblx0XHRzd2l0Y2goZXJyLmNvZGUpIHtcblxuXHRcdFx0Ly8gTm8gU2Vzc2lvblxuXHRcdFx0Y2FzZSAxMDI6XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciBzaWdub3V0XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKFwic2lnbm91dFwiKTtcblxuXHRcdFx0XHQvLyBOb3RoaW5nIGVsc2UgdG8gZG9cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdC8vIEludmFsaWQgZmllbGRzXG5cdFx0XHRjYXNlIDEwMDE6XG5cblx0XHRcdFx0Ly8gUmVidWlsZCB0aGUgZXJyb3IgbWVzc2FnZVxuXHRcdFx0XHRlcnIubXNnID0gVXRpbHMuZXJyb3JUcmVlKGVyci5tc2cpO1xuXG5cdFx0XHRcdC8vIEJ1dCBhbGxvdyB0aGUgY2hpbGQgdG8gZGVhbCB3aXRoIHRoZSBtZXNzYWdlcyB0aGVtc2VsdmVzXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBGYWlsZWQgdG8gcHJvY2VzcyBlcnJvclxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=