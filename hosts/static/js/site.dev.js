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
      Events.trigger('error', 'You have been signed out!');
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
      // Get the alias
      var alias = this.refs.signup_alias.value.trim(); // If the alias is not long enough

      if (alias.length < 3) {
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
        "alias": alias,
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
          Services.session(res.data.session); // Revert to sign in and show success message

          self.setState({
            "modal": false,
            "thrower": res.data.thrower
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
          if (this.props.onPoints(true, 7) !== false) {
            this.resetClutch();
          }
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

      if (this.props.onPoints(this.state.selected, 'd') !== false) {
        // De-select the clutch if there's one selected
        if (this.state.selected) {
          this.resetClutch();
        } // Turn on the active flag


        target.className = 'drop active'; // And set a timeout to turn it off

        setTimeout(function () {
          target.className = 'drop';
        }, 500);
      }
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


      var accepted = true;

      if (this.state.selected) {
        accepted = this.props.onPoints(true, 0);

        if (accepted !== false) {
          this.resetClutch();
        }
      } else {
        accepted = this.props.onPoints(false, parseInt(target.dataset.value));
      } // If the points were not rejected accepted


      if (accepted !== false) {
        // Turn on the active flag
        target.className = classNames[0] + ' active'; // And set a timeout to turn it off

        setTimeout(function () {
          target.className = classNames[0];
        }, 500);
      }
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

var Opponent = __webpack_require__(/*! ../opponent.jsx */ "./webpack/react/opponent.jsx"); // Defines


FINISHED_INITIATOR = 0x01;
FINISHED_OPPONENT = 0x02;
FINISHED_BOTH = 0x03; // Match Component

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
      "loser": false,
      "matchState": false,
      "mode": "opponent",
      "thrower": props.thrower,
      "is": '',
      "winner": false
    }; // Bind methods

    _this.bigaxeFinish = _this.bigaxeFinish.bind(_assertThisInitialized(_this));
    _this.existingContinue = _this.existingContinue.bind(_assertThisInitialized(_this));
    _this.existingDelete = _this.existingDelete.bind(_assertThisInitialized(_this));
    _this.gameFinish = _this.gameFinish.bind(_assertThisInitialized(_this));
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
    key: "bigaxeFinish",
    value: function bigaxeFinish() {
      // Store this
      var self = this; // Show the loader

      Loader.show(); // If we're in points mode

      var noun = '';

      if (this.state.matchState.mode == 'bigaxe_points') {
        noun = 'match/finish/bigaxe/points';
      } else {
        noun = 'match/finish/bigaxe/target';
      } // Clone the match state


      var ms = self.state.matchState; // Remove the finish and set the waiting

      ms.bigaxe_can_finish = false;
      ms.waiting = true; // Set the new state

      this.setState({
        "matchState": ms
      }); // Let the service know

      Services.update('natf', noun, {
        "id": this.state.id
      }).done(function (res) {
        // If there's an error
        if (res.error && !Utils.serviceError(res.error)) {
          Events.trigger('error', JSON.stringify(res.error));
        } // If there's a warning


        if (res.warning) {
          Events.trigger('warning', JSON.stringify(res.warning));
        }
      }).always(function () {
        // Hide the loader
        Loader.hide();
      });
    }
  }, {
    key: "calculateBigAxeFinished",
    value: function calculateBigAxeFinished(type, data) {
      // Make my life easier
      var _throws = data.bigaxe[type]; // If the lengths don't match

      if (_throws['i'].length != _throws['o'].length) {
        // We aren't done
        return false;
      } // If we're checking points


      if (type == 'points') {
        // Loop through till we have no more throws
        for (var i = 0; i < _throws['i'].length; ++i) {
          // Don't overwrite the actual data
          var vals = {
            'i': _throws['i'][i].value,
            'o': _throws['o'][i].value
          }; // If we got a drop, consider it a zero

          if (vals['i'] == 'd') {
            vals['i'] = 0;
          }

          if (vals['o'] == 'd') {
            vals['o'] = 0;
          } // If the values don't match, someone won


          if (vals['i'] != vals['o']) {
            // Allow finishing
            return true;
          }
        }
      } // Else we're checking target
      else {
          // Init consecutive hits
          var iCon = 0; // Loop through till we have no more throws

          for (var i = 0; i < _throws['i'].length; ++i) {
            // If we got double failures
            if ((_throws['i'][i] == 'd' || _throws['i'][i] == 0) && (_throws['o'][i] == 'd' || _throws['o'][i] == 0)) {
              // Reset the consecutive and continue the loop
              iCon = 0;
              continue;
            } // If we got double 1s


            if (_throws['i'][i] == 1 && _throws['o'][i] == 1) {
              // Increase the consecutive
              ++iCon; // If we got 3

              if (iCon == 3) {
                // Allow finishing
                return true;
              } // Continue the loop


              continue;
            } // Looks like someone won


            return true;
          }
        } // Not done yet


      return false;
    }
  }, {
    key: "calculateMatchState",
    value: function calculateMatchState(data) {
      // Init the state
      var state = {
        "game": "1",
        "throw": "1",
        "waiting": false
      }; // Are we opponent or initiator

      var is = this.state.thrower._id == data.initiator ? 'i' : 'o'; // If there's any bigaxe data it's safe to assume we're done with the
      //	regular match

      if (data.bigaxe && !Tools.empty(data.bigaxe)) {
        // Bigaxe throw starts at 0
        state["throw"] = 0; // If we have points

        if (data.bigaxe.points) {
          // Set bigaxe to points
          state.mode = "bigaxe_points"; // Set the throw to the current length of existing throws

          state["throw"] = data.bigaxe.points[is].length; // If we're finished

          if (data.bigaxe.points.finished[is]) {
            state.waiting = true;
            state.bigaxe_can_finish = false;
          } // Do we need to show the finish button?
          else {
              state.bigaxe_can_finish = this.calculateBigAxeFinished('points', data);
            }
        } // Else we're still on target
        else {
            // Set bigaxe to target
            state.mode = "bigaxe_target"; // Set the throw to the current length of existing throws

            state["throw"] = data.bigaxe.target[is].length; // If we're finished

            if (data.bigaxe.target.finished[is]) {
              state.waiting = true;
              state.bigaxe_can_finish = false;
            } // Do we need to show the finish button?
            else {
                state.bigaxe_can_finish = this.calculateBigAxeFinished('target', data);
              }
          }
      } // Else, assume we are in games
      else {
          // Set the mode
          state.mode = "games"; // If we're finished

          if (data.games_finished[is]) {
            state.waiting = true;
          } // Else, go through each game
          else {
              var g = "1";

              for (var _i = 0, _arr = ["1", "2", "3"]; _i < _arr.length; _i++) {
                g = _arr[_i];

                // If it doesn't exist
                if (typeof data.games[g] == 'undefined' || typeof data.games[g][is] == 'undefined' || Tools.empty(data.games[g][is])) {
                  break;
                } // Store the game


                state.game = g; // Go through each throw

                var t = "1";

                for (var _i2 = 0, _arr2 = ["1", "2", "3", "4", "5", "6"]; _i2 < _arr2.length; _i2++) {
                  t = _arr2[_i2];

                  // If it doesn't exist
                  if (typeof data.games[g][is][t] == 'undefined') {
                    break;
                  }
                } // Store the round


                state["throw"] = t;
              }
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
    key: "gameFinish",
    value: function gameFinish(ev) {
      // Clone the match state
      var ms = Tools.clone(this.state.matchState); // If we're on game 3

      if (ms.game == "3") {
        // Store this
        var self = this; // Show the loader

        Loader.show(); // Clone the match state

        var ms = Tools.clone(self.state.matchState); // Set the match state to waiting

        ms.waiting = true;
        this.setState({
          "matchState": ms
        }); // Notify backend the match is over

        Services.update('natf', 'match/finish/games', {
          "id": this.state.id
        }).done(function (res) {
          // If there's an error
          if (res.error && !Utils.serviceError(res.error)) {
            Events.trigger('error', JSON.stringify(res.error));
          } // If there's a warning


          if (res.warning) {
            Events.trigger('warning', JSON.stringify(res.warning));
          }
        }).always(function () {
          // Hide loader
          Loader.hide();
        });
      } // Else, go to the next game
      else {
          // Clone the games
          var games = Tools.clone(this.state.games); // Increase the game and throw in the match state

          ms.game = (parseInt(ms.game) + 1).toString();
          ms["throw"] = "1"; // If we don't have the next game, add it

          if (typeof games[ms.game] == 'undefined') {
            games[ms.game] = {
              "i": {},
              "o": {}
            };
          } // Else if it does exist
          else {
              // If it doesn't have an initiator
              if (typeof games[ms.game]['i'] == 'undefined') {
                games[ms.game]['i'] = {};
              } // If it doesn't have an opponent


              if (typeof games[ms.game]['o'] == 'undefined') {
                games[ms.game]['o'] = {};
              }
            } // Set the new state


          this.setState({
            "games": games,
            "matchState": ms
          });
        }
    }
  }, {
    key: "idCallback",
    value: function idCallback(id) {
      var _this2 = this;

      // If there's an ID
      if (id) {
        // Split the ID
        id = id.split('|'); // If it's a request

        if (id[0] == 'r') {
          // Fetch the match
          Services.read('auth', 'match/request', {
            "id": id[1]
          }).done(function (res) {
            // If there's an error
            if (res.error && !Utils.serviceError(res.error)) {
              // If the match no longer exists
              if (res.error.code == 1104) {
                Events.trigger('error', "This match request no longer exists.");
                Hash.set('id', null);
                return;
              }

              Events.trigger('error', JSON.stringify(res.error));
            } // If there's a warning


            if (res.warning) {
              Events.trigger('warning', JSON.stringify(res.warning));
            } // If there's data


            if (res.data) {
              // Change the mode
              _this2.setState({
                "alias": res.data.alias,
                "id": id[1],
                "mode": "request"
              }); // Listen for an update on the request


              TwoWay.track('auth', 'request-' + id[1], _this2.requestCallback);
            }
          });
        } // Else if it's a match
        else if (id[0] == 'm') {
            // List for an update on the match
            TwoWay.track('natf', 'match-' + id[1], this.matchCallback); // Save this

            var self = this; // Fetch the match

            Services.read('natf', 'match', {
              "id": id[1]
            }).done(function (res) {
              // If there's an error
              if (res.error && !Utils.serviceError(res.error)) {
                // If the match no longer exists
                if (res.error.code == 1104) {
                  Events.trigger('error', "This match no longer exists.");
                  Hash.set('id', null);
                  return;
                }

                Events.trigger('error', JSON.stringify(res.error));
              } // If there's a warning


              if (res.warning) {
                Events.trigger('warning', JSON.stringify(res.warning));
              } // If there's data


              if (res.data) {
                // If the game is finished
                if (res.data.finished) {
                  Events.trigger('error', "This match is already finished.");
                  Hash.set('id', null);
                  return;
                } // Are we initiator or opponent?


                var t = res.data.initiator == self.state.thrower._id ? 'i' : 'o'; // Make sure each game has an intiator and opponent

                for (var k in res.data.games) {
                  for (var _i3 = 0, _arr3 = ['i', 'o']; _i3 < _arr3.length; _i3++) {
                    var w = _arr3[_i3];

                    if (typeof res.data.games[k][w] == 'undefined') {
                      res.data.games[k][w] = {};
                    }
                  }
                } // Calculate the match state


                var ms = self.calculateMatchState(res.data); // Store it in the state

                self.setState({
                  "alias": t == 'i' ? res.data['opponent_alias'] : res.data['initiator_alias'],
                  "bigaxe": res.data.bigaxe,
                  "games": res.data.games,
                  "id": id[1],
                  "matchState": ms,
                  "mode": "match",
                  "is": t
                }, function () {
                  // If we're in games mode on throw five, or big axe
                  //	points mode, allow clutches
                  if (ms.mode == 'games' && ms["throw"] == '5' || ms.mode == 'bigaxe_points') {
                    self.refs.board.clutchMode = 'select';
                  } else {
                    self.refs.board.clutchMode = 'none';
                  }
                });
              }
            });
          }
      } // Else reset the state
      else {
          this.reset();
        }
    }
  }, {
    key: "matchCallback",
    value: function matchCallback(msg) {
      console.log(msg); // If we got an update on a big axe points throw

      if (msg.type == "bigaxe_points") {
        // If we need to start
        if (msg.subtype == "start") {
          // Clone the match state and bigaxe
          var ms = Tools.clone(this.state.matchState);
          var ba = Tools.clone(this.state.bigaxe); // Set the mode to big axe target and reset the throw to 1

          ms.mode = "bigaxe_points";
          ms["throw"] = 0;
          ms.waiting = false;
          ms.bigaxe_can_finish; // Add the points section

          ba['points'] = {
            "i": [],
            "o": [] // Set the board mode

          };
          this.refs.board.clutchMode = 'select'; // Set the new state

          this.setState({
            "bigaxe": ba,
            "matchState": ms
          });
        } // Else if we got a throw
        else if (msg.subtype == "throw") {
            // Clone the bigaxe and match state
            var ba = Tools.clone(this.state.bigaxe);
            var ms = Tools.clone(this.state.matchState); // If points doesn't exist

            if (typeof ba['points'] == 'undefined') {
              ba['points'] = {
                "i": [],
                "o": []
              };
            } // If the thrower doesn't exist


            if (typeof ba['points'][msg.thrower] == 'undefined') {
              ba['points'][msg.thrower] = [];
            } // If the throw doesn't exist


            if (ba['points'][msg.thrower].length == msg["throw"]) {
              ba['points'][msg.thrower].push({
                "clutch": msg.clutch,
                "value": msg.value
              });
            } else {
              ba['points'][msg.thrower][msg["throw"]] = {
                "clutch": msg.clutch,
                "value": msg.value
              };
            } // Calculate the throws so we can know if we're done


            ms.bigaxe_can_finish = this.calculateBigAxeFinished('points', this.state);
            ms.waiting = false; // Set the new state

            this.setState({
              "bigaxe": ba,
              "matchState": ms
            });
          } // Else we aren't actually finished
          else if (msg.subtype == 'notfinished') {
              // Clone the match state
              var ms = Tools.clone(this.state.matchState); // Remove waiting and set to bigaxe points just in case

              ms.mode = 'bigaxe_points';
              ms.waiting = false; // Set the new state

              this.setState({
                "matchState": ms
              });
            }
      } // Else if we got an update on a big axe target throw
      else if (msg.type == "bigaxe_target") {
          // If we need to start
          if (msg.subtype == "start") {
            // Clone the match state
            var ms = Tools.clone(this.state.matchState); // Set the mode to big axe target and reset the throw to 1

            ms.mode = "bigaxe_target";
            ms["throw"] = 0;
            ms.waiting = false; // Set the board mode

            this.refs.board.clutchMode = 'none'; // Set the new state

            this.setState({
              "bigaxe": {
                "target": {
                  "i": [],
                  "o": []
                }
              },
              "matchState": ms
            });
          } // Else if we got a throw
          else if (msg.subtype == "throw") {
              // Clone the bigaxe and match state
              var ba = Tools.clone(this.state.bigaxe);
              var ms = Tools.clone(this.state.matchState); // If it's false or target doesn't exist

              if (!ba || typeof ba['target'] == 'undefined') {
                ba = {
                  "target": {
                    "i": [],
                    "o": []
                  }
                };
              } // If the thrower doesn't exist


              if (typeof ba['target'][msg.thrower] == 'undefined') {
                ba['target'][msg.thrower] = [];
              } // If the throw doesn't exist


              if (ba['target'][msg.thrower].length == msg["throw"]) {
                ba['target'][msg.thrower].push(msg.value);
              } else {
                ba['target'][msg.thrower][msg["throw"]] = msg.value;
              } // Calculate the throws so we can know if we're done


              ms.bigaxe_can_finish = this.calculateBigAxeFinished('target', this.state);
              ms.waiting = false; // Set the new state

              this.setState({
                "bigaxe": ba,
                "matchState": ms
              });
            } // Else we aren't actually finished
            else if (msg.subtype == 'notfinished') {
                // Clone the match state
                var ms = Tools.clone(this.state.matchState); // Remove waiting and set to bigaxe target just in case

                ms.mode = 'bigaxe_target';
                ms.waiting = false; // Set the new state

                this.setState({
                  "matchState": ms
                });
              }
        } // Else if the match was deleted
        else if (msg.type == 'deleted') {
            // Notify the thrower
            Events.trigger('error', this.state.alias + " deleted the match."); // Reset

            this.reset();
          } // Else if we got a message about a new throw in a game
          else if (msg.type == 'games_throw') {
              // Clone the games
              var games = Tools.clone(this.state.games); // Create the game if it doesn't exist

              if (typeof games[msg.game] == 'undefined') {
                games[msg.game] = {
                  "i": {},
                  "o": {}
                };
              } // If the thrower section of the game doesn't exist


              if (typeof games[msg.game][msg.thrower] == 'undefined') {
                games[msg.game][msg.thrower] = {};
              } // Add the throw


              games[msg.game][msg.thrower][msg["throw"]] = msg.value; // Set the new state

              this.setState({
                "games": games
              });
            } // Else if we got a winner
            else if (msg.type == 'winner') {
                // If we're the winner
                if (msg.is == this.state.is) {
                  this.setState({
                    "winner": true
                  });
                } // Else we're the loser
                else {
                    this.setState({
                      "loser": true
                    });
                  } // Set a timeout to reset


                setTimeout(function () {
                  Hash.set("id", null);
                }, 5000);
              }
    }
  }, {
    key: "overwrite",
    value: function overwrite(ev) {
      // Clone the match state
      var ms = Tools.clone(this.state.matchState); // If we're in games mode

      if (ms.mode == 'games') {
        // Change the throw
        ms["throw"] = ev.currentTarget.dataset["throw"]; // Set the board mode

        this.refs.board.clutchMode = ms["throw"] == '5' ? 'select' : 'none';
      } // Else if we're in bigaxe target mode
      else if (ms.mode == "bigaxe_target" || ms.mode == 'bigaxe_points') {
          // Change the throw
          ms["throw"] = parseInt(ev.currentTarget.dataset["throw"]);
        } // Set the new state


      this.setState({
        "matchState": ms,
        "overwrite": true
      });
    }
  }, {
    key: "points",
    value: function points(clutch, value) {
      // Store this
      var self = this; // Clone match state

      var ms = Tools.clone(this.state.matchState); // If we're in big axe mode

      if (ms.mode == "games") {
        // If we're on throw "6", aka, waiting to finish
        if (ms["throw"] == '6') {
          Events.trigger('error', "Go to next game or select a throw to overwrite.");
          return false;
        } // Show the loader


        Loader.show(); // Clone the games and match state

        var games = Tools.clone(this.state.games); // Get the value or value/clutch

        var value = ms["throw"] == '5' ? {
          "clutch": clutch,
          "value": value
        } : value; // Store the point value

        games[ms.game][this.state.is][ms["throw"]] = value; // Save the value and notify the opponent

        Services.update('natf', 'match/game', {
          "id": this.state.id,
          "game": ms.game,
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

              for (var _i4 = 0, _arr4 = ["1", "2", "3", "4", "5", "6"]; _i4 < _arr4.length; _i4++) {
                t = _arr4[_i4];

                if (typeof games[ms.game][self.state.is][t] == 'undefined') {
                  break;
                }
              }

              ms["throw"] = t;
            } else {
              ms["throw"] = (parseInt(ms["throw"]) + 1).toString();
            } // Set the board mode


            self.refs.board.clutchMode = ms["throw"] == '5' ? 'select' : 'none'; // Update the state

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
      } // Else we're in a bigaxe mode
      else {
          // Clone the bigaxe state
          var bigaxe = Tools.clone(this.state.bigaxe); // Opponent is opposite of thrower

          var sO = this.state.is == 'i' ? 'o' : 'i'; // If we're in target

          if (ms.mode == "bigaxe_target") {
            // If the value is 1, 3, or 5, it's considered a 1
            if ([1, 3, 5].indexOf(value) > 0) {
              value = 1;
            } // If there's no target


            if (typeof bigaxe['target'] == 'undefined') {
              bigaxe['target'] = {
                "finished": 0,
                "i": [],
                "o": []
              };
            } // If the length of this throwers throws is not equal or 1 less
            //	than the opponents, we can't accept this throw


            if (!this.state.overwrite && bigaxe['target'][this.state.is].length > bigaxe['target'][sO].length) {
              Events.trigger('error', "Please wait for " + this.state.alias + " to make their throw.");
              return false;
            } // Show the loader


            Loader.show(); // If the value doesn't exist yet, push it

            if (bigaxe['target'][this.state.is].length == ms["throw"]) {
              bigaxe['target'][this.state.is].push(value);
            } // Else, overwrite it
            else {
                bigaxe['target'][this.state.is][ms["throw"]] = value;
              } // Save the value and notify the opponent


            Services.update('natf', 'match/bigaxe/target', {
              "id": this.state.id,
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
                  var t = 0;

                  for (; true; ++t) {
                    if (typeof bigaxe['target'][self.state.is][t] == 'undefined') {
                      break;
                    }
                  }

                  ms["throw"] = t;
                } else {
                  ms["throw"] += 1;
                } // Calculate the throws so we can know if we're done


                ms.bigaxe_can_finish = self.calculateBigAxeFinished('target', self.state); // Set the new state

                self.setState({
                  "bigaxe": bigaxe,
                  "matchState": ms,
                  "overwrite": false
                });
              }
            }).always(function () {
              // Hide loader
              Loader.hide();
            });
          } // Else we're in points
          else {
              // If there's no points
              if (typeof bigaxe['points'] == 'undefined') {
                bigaxe['points'] = {
                  "finished": 0,
                  "i": [],
                  "o": []
                };
              } // If the length of this throwers throws is not equal or 1 less
              //	than the opponents, we can't accept this throw


              if (!this.state.overwrite && bigaxe['points'][this.state.is].length > bigaxe['points'][sO].length) {
                Events.trigger('error', "Please wait for " + this.state.alias + " to make their throw.");
                return false;
              } // Show the loader


              Loader.show(); // If the value doesn't exist yet, push it

              if (bigaxe['points'][this.state.is].length == ms["throw"]) {
                bigaxe['points'][this.state.is].push(value);
              } // Else, overwrite it
              else {
                  bigaxe['points'][this.state.is][ms["throw"]] = value;
                } // Save the value and notify the opponent


              Services.update('natf', 'match/bigaxe/points', {
                "id": this.state.id,
                "throw": ms["throw"],
                "clutch": clutch,
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
                    var t = 0;

                    for (; true; ++t) {
                      if (typeof bigaxe['points'][self.state.is][t] == 'undefined') {
                        break;
                      }
                    }

                    ms["throw"] = t;
                  } else {
                    ms["throw"] += 1;
                  } // Calculate the throws so we can know if we're done


                  ms.bigaxe_can_finish = self.calculateBigAxeFinished('points', self.state); // Set the new state

                  self.setState({
                    "bigaxe": bigaxe,
                    "matchState": ms,
                    "overwrite": false
                  });
                }
              }).always(function () {
                // Hide loader
                Loader.hide();
              });
            }
        }
    }
  }, {
    key: "render",
    value: function render() {
      var self = this;
      return React.createElement("div", {
        className: "natf"
      }, self.state.mode == 'opponent' && React.createElement(Opponent, {
        thrower: self.state.thrower,
        onSelect: self.requestCreate
      }), self.state.mode == 'request' && React.createElement("div", {
        className: "acenter"
      }, React.createElement("div", {
        className: "existing"
      }, React.createElement("p", null, "Waiting for ", self.state.alias, " to accept your match request"), React.createElement("button", {
        onClick: self.requestCancel
      }, "Cancel Request"))), self.state.mode == 'existing' && React.createElement("div", {
        className: "acenter"
      }, self.state.existing.map(function (m, i) {
        return React.createElement("div", {
          key: i,
          "data-id": m._id,
          className: "existing"
        }, React.createElement("p", null, "You have an existing match with ", m.alias, ", do you wish to continue?"), React.createElement("button", {
          onClick: self.existingDelete
        }, "Delete"), React.createElement("button", {
          onClick: self.existingContinue
        }, "Continue"));
      })), self.state.mode == 'match' && React.createElement("div", {
        className: "actual"
      }, React.createElement(Board, {
        ref: "board",
        clutchMode: "none",
        onPoints: self.points
      }), React.createElement("div", {
        className: "stats"
      }, self.renderPrimary(), self.renderSecondary()), React.createElement("div", {
        className: "overlay",
        style: {
          "display": self.state.matchState.waiting ? 'block' : 'none'
        }
      }, React.createElement("div", null, React.createElement("span", null, "Waiting for ", self.state.alias))), this.state.winner && React.createElement("div", {
        className: "fireworks"
      }, React.createElement("div", {
        className: "overlay"
      }, React.createElement("div", null, React.createElement("span", {
        className: "winner"
      }, "YOU WON!"))), React.createElement("div", {
        className: "pyro"
      }, React.createElement("div", {
        className: "before"
      }), React.createElement("div", {
        className: "after"
      }))), this.state.loser && React.createElement("div", {
        className: "overlay"
      }, React.createElement("div", null, React.createElement("span", {
        className: "loser"
      }, "Sadly, you lost. Better luck next time.")))));
    }
  }, {
    key: "renderBigAxe",
    value: function renderBigAxe() {
      var self = this; // Init the rows

      var rows = []; // Opponent is opposite of thrower

      var sO = this.state.is == 'i' ? 'o' : 'i'; // If we have a target section

      var add_to_points = 0;

      if (this.state.bigaxe.target) {
        var target = this.state.bigaxe.target;

        for (var i = 0; true; ++i) {
          if (target[this.state.is].length <= i && target[sO].length <= i) {
            add_to_points = i;
            break;
          }

          var columns = ['', ''];

          if (typeof target[this.state.is][i] != 'undefined') {
            columns[0] = target[this.state.is][i];
          }

          if (typeof target[sO][i] != 'undefined') {
            columns[1] = target[sO][i];
          } // Add the row


          rows.push(React.createElement("tr", null, React.createElement("td", null, i + 1), React.createElement("td", {
            className: this.state.overwrite && this.state.matchState.mode == 'bigaxe_target' && this.state.matchState["throw"] == i ? 'overwrite' : '',
            "data-throw": i,
            onClick: this.overwrite
          }, columns[0]), React.createElement("td", null, columns[1])));
        }
      } // If we have a points section


      if (this.state.bigaxe.points) {
        var points = this.state.bigaxe.points;

        for (var i = 0; true; ++i) {
          if (points[this.state.is].length <= i && points[sO].length <= i) {
            add_to_points = i;
            break;
          }

          var columns = ['', ''];

          if (typeof points[this.state.is][i] != 'undefined') {
            columns[0] = points[this.state.is][i];
          }

          if (typeof points[sO][i] != 'undefined') {
            columns[1] = points[sO][i];
          } // Add the row


          rows.push(React.createElement("tr", null, React.createElement("td", null, add_to_points + i + 1), React.createElement("td", {
            className: this.state.overwrite && this.state.matchState["throw"] == i ? 'overwrite' : columns[0].clutch ? 'clutch' : '',
            "data-throw": i,
            onClick: this.overwrite
          }, columns[0].value), React.createElement("td", {
            className: columns[1].clutch ? 'clutch' : ''
          }, columns[1].value)));
        }
      }

      return React.createElement("div", {
        className: "bigaxe"
      }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "B"), React.createElement("th", null, this.state.thrower.alias), React.createElement("th", null, this.state.alias))), React.createElement("tbody", null, rows)), this.state.matchState.bigaxe_can_finish && React.createElement("button", {
        onClick: this.bigaxeFinish
      }, "Finished"));
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      // Opponent is opposite of thrower
      var sO = this.state.is == 'i' ? 'o' : 'i'; // What game are we in?

      var g = this.state.games[this.state.matchState.game];
      return React.createElement("div", {
        className: "game"
      }, React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "T"), React.createElement("th", null, this.state.thrower.alias), React.createElement("th", null, this.state.alias))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, "1"), this.renderGameThrow("1"), React.createElement("td", null, g[sO]["1"])), React.createElement("tr", null, React.createElement("td", null, "2"), this.renderGameThrow("2"), React.createElement("td", null, g[sO]["2"])), React.createElement("tr", null, React.createElement("td", null, "3"), this.renderGameThrow("3"), React.createElement("td", null, g[sO]["3"])), React.createElement("tr", null, React.createElement("td", null, "4"), this.renderGameThrow("4"), React.createElement("td", null, g[sO]["4"])), React.createElement("tr", null, React.createElement("td", null, "5"), this.renderGameThrow("5"), React.createElement("td", {
        className: g[sO]["5"] && g[sO]["5"].clutch ? 'clutch' : ''
      }, g[sO]["5"] ? g[sO]["5"].value : '')))), this.state.matchState["throw"] == '6' && React.createElement("button", {
        onClick: this.gameFinish
      }, this.state.matchState.game == "3" ? "Finish" : "Next Game"));
    }
  }, {
    key: "renderGameThrow",
    value: function renderGameThrow(t) {
      // The game
      var g = this.state.matchState.game; // The value of the throw

      var v = null;

      if (this.state.games[g] && _typeof(this.state.games[g][this.state.is])) {
        v = this.state.games[g][this.state.is][t];
      } // If we're working on 5


      if (t == '5') {
        // If the value exists
        if (typeof v != 'undefined') {
          return React.createElement("td", {
            className: this.state.overwrite && this.state.matchState["throw"] == t ? 'overwrite' : v.clutch ? 'clutch' : '',
            "data-throw": t,
            onClick: this.overwrite
          }, v.value);
        } // Else, there's no value
        else {
            return React.createElement("td", null);
          }
      } // Else it's 1 to 4
      else {
          // If the value exists
          if (typeof v != 'undefined') {
            return React.createElement("td", {
              className: this.state.overwrite && this.state.matchState["throw"] == t ? 'overwrite' : '',
              "data-throw": t,
              onClick: this.overwrite
            }, v);
          } // Else, there's no value
          else {
              return React.createElement("td", null);
            }
        }
    }
  }, {
    key: "renderPrimary",
    value: function renderPrimary() {
      // Init the points per game
      var oPoints = {
        "i": [0, 0, 0],
        "o": [0, 0, 0] // Opponent is opposite of thrower

      };
      var sO = this.state.is == 'i' ? 'o' : 'i'; // Calculate the points

      for (var _i5 = 0, _arr5 = ["1", "2", "3"]; _i5 < _arr5.length; _i5++) {
        var g = _arr5[_i5];
        var iG = parseInt(g) - 1;

        if (this.state.games[g]) {
          for (var _i6 = 0, _arr6 = ["1", "2", "3", "4", "5"]; _i6 < _arr6.length; _i6++) {
            var t = _arr6[_i6];

            if (this.state.games[g]['i'][t]) {
              if (t == '5') {
                oPoints['i'][iG] += this.state.games[g]['i'][t].value == 'd' ? 0 : this.state.games[g]['i'][t].value;
              } else {
                oPoints['i'][iG] += this.state.games[g]['i'][t] == 'd' ? 0 : this.state.games[g]['i'][t];
              }
            }

            if (this.state.games[g]['o'][t]) {
              if (t == '5') {
                oPoints['o'][iG] += this.state.games[g]['o'][t].value == 'd' ? 0 : this.state.games[g]['o'][t].value;
              } else {
                oPoints['o'][iG] += this.state.games[g]['o'][t] == 'd' ? 0 : this.state.games[g]['o'][t];
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
    key: "renderSecondary",
    value: function renderSecondary() {
      // If we're in games mode
      if (this.state.matchState.mode == "games") {
        return this.renderGame();
      } // Else we're in a bigaxe mode
      else {
          return this.renderBigAxe();
        }
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
          Hash.set('id', 'r|' + res.data);
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
        "mode": "opponent"
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setState({
        "alias": '',
        "bigaxe": false,
        "existing": false,
        "games": false,
        "id": false,
        "loser": false,
        "matchState": false,
        "mode": "opponent",
        "is": '',
        "winner": false
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
      }, "Supernatural / Unicorn"), React.createElement("dd", null, "In supernatural practice every fifth throw is for clutch, and it will be pre-selected for you on those turns."), React.createElement("dt", {
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
      "practice_data": false,
      "thrower": props.thrower
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
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.thrower._id != this.props.thrower._id) {
        this.setState({
          "favourite": this.props.favourite,
          "thrower": this.props.thrower
        });
      }
    }
  }, {
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
      // If there's no query, do nothing
      if (q.length == 0) {
        return;
      } // Store this


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
      }, React.createElement("dt", null, "v1.2.0"), React.createElement("dd", null, React.createElement("ul", {
        className: "fa-ul"
      }, React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "NATF Matches now available. Find other signed up throwers and challenge them to a 3 game match."), React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "Throwers can be added to your favorites list for easy match starting by clicking on the green icon beside their name."), React.createElement("li", null, React.createElement("i", {
        className: "fa-li fas fa-angle-double-right"
      }), "Match stats are not yet available, but fear not, the stats will not be lost, and any matches played now will still show up in stats once the feature is completed."))), React.createElement("dt", null, "v1.1.0"), React.createElement("dd", null, React.createElement("ul", {
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
      }), self.state.page == 'stats' && React.createElement(Stats, {
        thrower: self.state.thrower
      }), React.createElement(Popups, null), React.createElement(Messages, null));
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
        "id": "m|" + res.data
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
    "id": "r|" + req._id
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLzNyZC9qcXVlcnkuYWpheC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9oYXNoLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9nZW5lcmljL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvd2Vic29ja2V0LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9iYXNlL2Zvcm1zLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L2VsZW1lbnRzL2lucHV0RW50ZXIuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvbWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tZXNzYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9wb3B1cHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L21hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvYm9hcmQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvbmF0Zi9tYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9uYXRmL3ByYWN0aWNlLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvc3RhdHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvb3Bwb25lbnQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvcHJhY3RpY2UuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvc2l0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9zdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC90aHJvd2VyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdHdvd2F5LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdXRpbHMuanMiXSwibmFtZXMiOlsiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImMiLCJkIiwic2xpY2UiLCJlIiwiY29uY2F0IiwiZiIsInB1c2giLCJnIiwiaW5kZXhPZiIsImgiLCJpIiwidG9TdHJpbmciLCJqIiwiaGFzT3duUHJvcGVydHkiLCJrIiwibCIsIm0iLCJuIiwiZm4iLCJpbml0IiwibyIsInAiLCJxIiwiciIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiY29udGV4dCIsImVhY2giLCJtYXAiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsInBhcnNlRmxvYXQiLCJub2RlVHlwZSIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiZXZhbCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhbWVsQ2FzZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJzIiwibWFrZUFycmF5IiwiT2JqZWN0IiwiaW5BcnJheSIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsInNwbGl0IiwidCIsImRvY3VtZW50RWxlbWVudCIsInUiLCJ2IiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInciLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwiZmluZCIsIm1hdGNoZXNTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bmlxdWUiLCJ0ZXh0Q29udGVudCIsIm5vZGVWYWx1ZSIsImlzWE1MRG9jIiwib3duZXJEb2N1bWVudCIsImV4cHIiLCJhdHRySGFuZGxlIiwibWF0Y2giLCJib29sIiwibmVlZHNDb250ZXh0IiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIngiLCJ5IiwieiIsIkEiLCJ0ZXN0IiwiZmlsdGVyIiwibm90IiwiaXMiLCJCIiwiQyIsIkQiLCJleGVjIiwicGFyc2VIVE1MIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWFkeSIsIkUiLCJGIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsIm5leHQiLCJwcmV2IiwiZGlyIiwic2libGluZyIsIm5leHRTaWJsaW5nIiwiaGFzIiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJHIiwicGFyZW50IiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImZpcnN0Q2hpbGQiLCJjb250ZW50RG9jdW1lbnQiLCJjaGlsZE5vZGVzIiwicmV2ZXJzZSIsIkgiLCJJIiwiSiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJtZW1vcnkiLCJzdG9wT25GYWxzZSIsInNoaWZ0IiwiZGlzYWJsZSIsInJlbW92ZSIsImVtcHR5IiwiZGlzYWJsZWQiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInBpcGUiLCJ3aGVuIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiSyIsInJlYWR5V2FpdCIsImhvbGRSZWFkeSIsInRyaWdnZXJIYW5kbGVyIiwib2ZmIiwiTCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNIiwiYWNjZXNzIiwiYWNjZXB0RGF0YSIsIk4iLCJkZWZpbmVQcm9wZXJ0eSIsImNhY2hlIiwidWlkIiwiYWNjZXB0cyIsImtleSIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsImhhc0RhdGEiLCJkaXNjYXJkIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJwYXJzZUpTT04iLCJkYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJhdHRyaWJ1dGVzIiwibmFtZSIsInF1ZXVlIiwiZGVxdWV1ZSIsIl9xdWV1ZUhvb2tzIiwidW5zaGlmdCIsInN0b3AiLCJjbGVhclF1ZXVlIiwiVCIsInNvdXJjZSIsIlUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2V0QXR0cmlidXRlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsImxhc3RDaGlsZCIsImNoZWNrZWQiLCJpbm5lckhUTUwiLCJub0Nsb25lQ2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsIlYiLCJmb2N1c2luQnViYmxlcyIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFiIiwiYWN0aXZlRWxlbWVudCIsImV2ZW50IiwiZ2xvYmFsIiwiaGFuZGxlciIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJqb2luIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwiUmVnRXhwIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsInRyaWdnZXIiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsInJlc3VsdCIsInRhcmdldCIsIm5vQnViYmxlIiwiZGVmYXVsdFZpZXciLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2RlZmF1bHQiLCJwb3AiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbSIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaGFuZGxlT2JqIiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwiYnV0dG9uIiwicHJvcHMiLCJmaXhIb29rcyIsImtleUhvb2tzIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJtb3VzZUhvb2tzIiwicGFnZVgiLCJjbGllbnRYIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibG9hZCIsImZvY3VzIiwiYmx1ciIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwib3JpZ2luYWxFdmVudCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInJlbGF0ZWRUYXJnZXQiLCJvbiIsIm9uZSIsImJiIiwiY2IiLCJkYiIsImViIiwiZmIiLCJnYiIsImhiIiwiaWIiLCJqYiIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwia2IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxiIiwibWIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuYiIsIm9iIiwicGIiLCJxYiIsImNsb25lIiwiYnVpbGRGcmFnbWVudCIsImNyZWF0ZVRleHROb2RlIiwiY2xlYW5EYXRhIiwiYXBwZW5kIiwiZG9tTWFuaXAiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJzcmMiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiZGVsYXkiLCJmeCIsInNwZWVkcyIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInNlbGVjdGVkIiwib3B0RGlzYWJsZWQiLCJyYWRpb1ZhbHVlIiwicmIiLCJzYiIsInRiIiwicmVtb3ZlQXR0ciIsInByb3AiLCJhdHRySG9va3MiLCJwcm9wRml4IiwidWIiLCJyZW1vdmVQcm9wIiwicHJvcEhvb2tzIiwidGFiSW5kZXgiLCJoYXNBdHRyaWJ1dGUiLCJocmVmIiwic2VsZWN0ZWRJbmRleCIsInZiIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJ3YiIsInZhbCIsInZhbEhvb2tzIiwic2VsZWN0Iiwib3B0aW9ucyIsImhvdmVyIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsInhiIiwieWIiLCJKU09OIiwicGFyc2UiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsImxvY2F0aW9uIiwiTGIiLCJNYiIsIk5iIiwiZGF0YVR5cGVzIiwiT2IiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsIlBiIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJRYiIsInJlc3BvbnNlRmllbGRzIiwiZGF0YUZpbHRlciIsImRhdGFUeXBlIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJ4bWwiLCJqc29uIiwiU3RyaW5nIiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4Iiwic3RhdHVzQ29kZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwic3RhdHVzIiwiYWJvcnQiLCJjb21wbGV0ZSIsInN1Y2Nlc3MiLCJtZXRob2QiLCJjcm9zc0RvbWFpbiIsInBhcmFtIiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwicmVqZWN0V2l0aCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJSYiIsIlNiIiwiVGIiLCJVYiIsIlZiIiwiV2IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiWGIiLCJZYiIsIlpiIiwiJGIiLCJBY3RpdmVYT2JqZWN0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsInJlc3BvbnNlVGV4dCIsInNjcmlwdCIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiX2IiLCJhYyIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImJjIiwiZGVmaW5lIiwiY2MiLCJqUXVlcnkiLCJkYyIsIm5vQ29uZmxpY3QiLCJDb29raWVzIiwiZGVmYXVsdF8iLCJvQ29va2llcyIsImxDb29raWVzIiwiY29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG9tYWluIiwicGF0aCIsImV4cGlyZXMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiX2NhbGxiYWNrcyIsImNhbGxiYWNrIiwiYXJncyIsImVyciIsImNvbnNvbGUiLCJUb29scyIsInJlcXVpcmUiLCJfaGFzaCIsIl9uYW1lUkUiLCJfd2F0Y2hlcyIsIl9jaGVja1dhdGNoZXMiLCJvbGQiLCJfaGFzaENoYW5nZWQiLCJfcGFyc2VIYXNoIiwiaGFzaCIsInJlZ2V4IiwiZmllbGQiLCJzdWJzdHJpbmciLCJIYXNoIiwiaXNPYmplY3QiLCJ0ZW1wIiwiX2NvdW50IiwiX2VsIiwiaGlkZSIsInN0eWxlIiwiZGlzcGxheSIsInNob3ciLCJfZG9tYWluIiwiX2Vycm9yIiwiX2NsZWFyIiwibG9jYWxTdG9yYWdlIiwiaG9zdG5hbWUiLCJfcmVxdWVzdCIsIm9Db25maWciLCJzZXR0aW5ncyIsIl91cmwiLCJzdHJpbmdpZnkiLCJfc3RvcmUiLCJ0b2tlbiIsIl9zdWNjZXNzIiwicmVzIiwiU2VydmljZXMiLCJzdWJkb21haW4iLCJzZXNzaW9uIiwic2VydmljZSIsIm5vdW4iLCJjb21wYXJlIiwidjEiLCJ2MiIsImtleXMiLCJpc0RlY2ltYWwiLCJpc0ludGVnZXIiLCJvbWFwIiwicmV0IiwidXVpZHY0IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsImNvbmYiLCJvU29jayIsIldlYlNvY2tldCIsIm9ub3BlbiIsImxvZyIsIm9ubWVzc2FnZSIsImV2Iiwib25jbG9zZSIsIkV2ZW50cyIsIkxvYWRlciIsIlJlcXVlc3RzIiwiU2l0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUmVhY3QiLCJyZWFkIiwiRVJST1JfQ0xBU1MiLCJfYWRkQ2xhc3MiLCJlbCIsIm5hbWVzIiwiX3JlbW92ZUNsYXNzIiwiaW5jbHVkZXMiLCJfQmFzZU5vZGUiLCJlcnJvcnMiLCJyZWZzIiwiUHVyZUNvbXBvbmVudCIsIkFycmF5Tm9kZSIsIk5vZGUiLCJtc2ciLCJ2YWx1ZVNldCIsIlBhcmVudCIsImVycm9yQWRkIiwiZXJyb3JSZW1vdmUiLCJlcnJvckZvY3VzIiwiZWxlbWVudHMiLCJGb3JtcyIsIklucHV0RW50ZXIiLCJvbkVudGVyIiwia2V5UHJlc3MiLCJvbktleVByZXNzIiwicmVzdCIsIk1lbnUiLCJvbkNoYW5nZSIsIml0ZW1DbGljayIsInNlbGYiLCJzZXRTdGF0ZSIsIkNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVuZGVyQ2hpbGRyZW4iLCJJdGVtIiwiX2luc3RhbmNlIiwiTWVzc2FnZSIsImJ1dHRvbnMiLCJkYXRhc2V0IiwiaWQiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIk1lc3NhZ2VzIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwibXNncyIsIk1vZGFsIiwiY2xvc2UiLCJidXR0b25DbGljayIsInRyYXBFc2NhcGUiLCJidG4iLCJzdHlsZXMiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwiU1VDQ0VTU19USU1FT1VUIiwiRVJST1JfVElNRU9VVCIsIldBUk5JTkdfVElNRU9VVCIsIlNURVBfVElNRU9VVCIsIldJRFRIX1NURVBTIiwiSEVJR0hUX1NURVBTIiwiTUFSR0lOIiwiUG9wdXBzIiwicG9wdXBzIiwidGltZXIiLCJwb3B1cCIsInByb2Nlc3MiLCJ3YXJuaW5nIiwic3RlcCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaWNvbiIsImlUaW1lb3V0Iiwic0ljb24iLCJ3YXJuIiwiVGhyb3dlciIsIlV0aWxzIiwiSGVhZGVyIiwiYWNjb3VudFNob3ciLCJob21lIiwic2lnbmluIiwic2lnbmluU2hvdyIsInNpZ25pblRyaWdnZXIiLCJzaWdub3V0Iiwic2lnbm91dFRyaWdnZXIiLCJzaWdudXAiLCJzaWdudXBTaG93IiwibW9kYWwiLCJ0aHJvd2VyIiwiYWxpYXMiLCJjcmVhdGUiLCJwYXNzd2QiLCJzZXJ2aWNlRXJyb3IiLCJjb2RlIiwic2lnbnVwX2FsaWFzIiwic2lnbnVwX3Bhc3N3ZCIsInJlcGVhdF9wYXNzd2QiLCJvRGF0YSIsImVtYWlsIiwiTmF0ZiIsIk1hdGNoIiwib3JnQ2hhbmdlIiwid2F0Y2giLCJ1bndhdGNoIiwib3JnIiwibWVudUNoYW5nZSIsIkJvYXJkIiwib25Qb2ludHMiLCJjbHV0Y2hNb2RlIiwiY2x1dGNoQ2xpY2siLCJkcm9wQ2xpY2siLCJwb2ludENsaWNrIiwicmVzZXRDbHV0Y2giLCJjbGFzc05hbWVzIiwiYWNjZXB0ZWQiLCJwYXJzZUludCIsIm1vZGUiLCJUd29XYXkiLCJPcHBvbmVudCIsIkZJTklTSEVEX0lOSVRJQVRPUiIsIkZJTklTSEVEX09QUE9ORU5UIiwiRklOSVNIRURfQk9USCIsImJpZ2F4ZUZpbmlzaCIsImV4aXN0aW5nQ29udGludWUiLCJleGlzdGluZ0RlbGV0ZSIsImdhbWVGaW5pc2giLCJpZENhbGxiYWNrIiwibWF0Y2hDYWxsYmFjayIsIm92ZXJ3cml0ZSIsInBvaW50cyIsInJlcXVlc3RDYWxsYmFjayIsInJlcXVlc3RDYW5jZWwiLCJyZXF1ZXN0Q3JlYXRlIiwibWF0Y2hTdGF0ZSIsIm1zIiwiYmlnYXhlX2Nhbl9maW5pc2giLCJ3YWl0aW5nIiwidXBkYXRlIiwidGhyb3dzIiwiYmlnYXhlIiwidmFscyIsImlDb24iLCJfaWQiLCJpbml0aWF0b3IiLCJmaW5pc2hlZCIsImNhbGN1bGF0ZUJpZ0F4ZUZpbmlzaGVkIiwiZ2FtZXNfZmluaXNoZWQiLCJnYW1lcyIsImdhbWUiLCJleGlzdGluZ0ZldGNoIiwidW50cmFjayIsImV4aXN0aW5nUmVtb3ZlIiwiZXhpc3RpbmciLCJ0cmFjayIsImNhbGN1bGF0ZU1hdGNoU3RhdGUiLCJib2FyZCIsInJlc2V0Iiwic3VidHlwZSIsImJhIiwiY2x1dGNoIiwic08iLCJyZW5kZXJQcmltYXJ5IiwicmVuZGVyU2Vjb25kYXJ5Iiwid2lubmVyIiwibG9zZXIiLCJyb3dzIiwiYWRkX3RvX3BvaW50cyIsImNvbHVtbnMiLCJyZW5kZXJHYW1lVGhyb3ciLCJvUG9pbnRzIiwiaUciLCJyZW5kZXJHYW1lIiwicmVuZGVyQmlnQXhlIiwicmVxdWVzdFJlc2V0Iiwib3Bwb25lbnQiLCJQcmFjdGljZSIsIm1vZGVTZWxlY3QiLCJwb2ludHNIaWRlIiwicG9pbnRzU2hvdyIsInNhdmUiLCJuZXdfc3RhdGUiLCJjbHV0Y2hBdHRlbXB0cyIsImNsdXRjaEhpdHMiLCJ0b3RhbFBvaW50cyIsInRvRml4ZWQiLCJzaG93UG9pbnRzIiwiY29uZmlybSIsIlN0YXRzIiwibWF0Y2hTdGF0cyIsInByYWN0aWNlRGF0YSIsInByYWN0aWNlRGF0YUhpZGUiLCJwcmFjdGljZVN0YXRzIiwicHJhY3RpY2VTdGF0c0FsbCIsImFsbCIsInByYWN0aWNlIiwidG90YWwiLCJhdHRlbXB0cyIsImRyb3BzIiwiYXZlcmFnZSIsInJhdGUiLCJkYXRlIiwiX2NyZWF0ZWQiLCJwcmFjdGljZV9hbGwiLCJwcmFjdGljZV9kYXRhIiwiYWxpYXNTb3J0IiwibG9jYWxlQ29tcGFyZSIsIk9wcG9uZW50Um93IiwiZmF2b3VyaXRlIiwicHJldlByb3BzIiwiY29sb3IiLCJmYXZvdXJpdGVTaG93Iiwic2VhcmNoIiwic2VhcmNoU2hvdyIsImZhdm91cml0ZXMiLCJvblNlbGVjdCIsImhhc2hDaGFuZ2UiLCJwYWdlQ2hhbmdlIiwicGFnZSIsIm1lbnUiLCJpdGVtcyIsIl9fdGhyb3dlciIsIl9fcGVuZGluZyIsIl9pbml0IiwiX3NpZ25pbiIsIl9zaWdub3V0IiwiX3BlbmRpbmciLCJfcGVuZGluZ1Byb2Nlc3MiLCJyZXF1ZXN0cyIsIl9yZXF1ZXN0RGVjbGluZSIsIl9yZXF1ZXN0QWNjZXB0IiwiX3JlcXVlc3REZWxldGUiLCJfcmVxdWVzdFdhaXQiLCJyZXEiLCJfcmVxdWVzdE5ldyIsIldTSGVscGVyIiwiX19waW5nIiwiX19jbG9zZSIsIl9fc29ja2V0IiwiX19zZXJ2aWNlcyIsIl9hZGRUcmFjayIsIl9oYW5kbGVDbG9zZSIsIl9vcGVuU29ja2V0IiwiX2hhbmRsZU1lc3NhZ2UiLCJzb2NrIiwiRmlsZVJlYWRlciIsIm9Nc2ciLCJyZWFkQXNUZXh0IiwibE1zZ3MiLCJzZXRJbnRlcnZhbCIsIl9waW5nIiwiX3RyYWNrIiwiX3VudHJhY2siLCJjbGVhckludGVydmFsIiwidHMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImVycm9yVHJlZSIsIm9SZXQiLCJsRmllbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FB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MkIsWUFBSSxDQUFDajJCLENBQUQsQ0FBSixHQUFVMnFCLEtBQUssQ0FBQ3FMLFNBQU4sQ0FBZ0JDLElBQUksQ0FBQ2oyQixDQUFELENBQXBCLENBQVY7QUFDQTtBQUNELEtBdEMwQixDQXdDM0I7OztBQUNBLFdBQU9pMkIsSUFBUDtBQUNBLEdBdERVO0FBd0RYdEssY0FBWSxFQUFFLHNCQUFTMUssR0FBVCxFQUFjO0FBRTNCO0FBQ0EsWUFBT0EsR0FBRyxDQUFDMkssSUFBWDtBQUVDO0FBQ0EsV0FBSyxHQUFMO0FBRUM7QUFDQTVHLGNBQU0sQ0FBQy9VLE9BQVAsQ0FBZSxTQUFmLEVBSEQsQ0FLQzs7QUFDQSxlQUFPLElBQVA7QUFFRDs7QUFDQSxXQUFLLElBQUw7QUFFQztBQUNBZ1IsV0FBRyxDQUFDbUYsR0FBSixHQUFVdUUsS0FBSyxDQUFDcUwsU0FBTixDQUFnQi9VLEdBQUcsQ0FBQ21GLEdBQXBCLENBQVYsQ0FIRCxDQUtDOztBQUNBLGVBQU8sS0FBUDtBQWxCRixLQUgyQixDQXdCM0I7OztBQUNBLFdBQU8sS0FBUDtBQUNBLEdBbEZVLENBcUZaOztBQXJGWSxDQUFaO0FBc0ZBdm5CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjZyQixLQUFqQixDIiwiZmlsZSI6Ii4uL2hvc3RzL3N0YXRpYy9qcy9zaXRlLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2VicGFjay9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qISBqUXVlcnkgdjIuMS4xIC1jc3MsLWNzcy9hZGRHZXRIb29rSWYsLWNzcy9jdXJDU1MsLWNzcy9kZWZhdWx0RGlzcGxheSwtY3NzL2hpZGRlblZpc2libGVTZWxlY3RvcnMsLWNzcy9zdXBwb3J0LC1jc3Mvc3dhcCwtY3NzL3Zhci9jc3NFeHBhbmQsLWNzcy92YXIvZ2V0U3R5bGVzLC1jc3MvdmFyL2lzSGlkZGVuLC1jc3MvdmFyL3JtYXJnaW4sLWNzcy92YXIvcm51bW5vbnB4LC1lZmZlY3RzLC1lZmZlY3RzL1R3ZWVuLC1lZmZlY3RzL2FuaW1hdGVkU2VsZWN0b3IsLWRpbWVuc2lvbnMsLW9mZnNldCwtZGVwcmVjYXRlZCwtZXZlbnQtYWxpYXMsLXdyYXAgfCAoYykgMjAwNSwgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9e30sbD1hLmRvY3VtZW50LG09XCIyLjEuMSAtY3NzLC1jc3MvYWRkR2V0SG9va0lmLC1jc3MvY3VyQ1NTLC1jc3MvZGVmYXVsdERpc3BsYXksLWNzcy9oaWRkZW5WaXNpYmxlU2VsZWN0b3JzLC1jc3Mvc3VwcG9ydCwtY3NzL3N3YXAsLWNzcy92YXIvY3NzRXhwYW5kLC1jc3MvdmFyL2dldFN0eWxlcywtY3NzL3Zhci9pc0hpZGRlbiwtY3NzL3Zhci9ybWFyZ2luLC1jc3MvdmFyL3JudW1ub25weCwtZWZmZWN0cywtZWZmZWN0cy9Ud2VlbiwtZWZmZWN0cy9hbmltYXRlZFNlbGVjdG9yLC1kaW1lbnNpb25zLC1vZmZzZXQsLWRlcHJlY2F0ZWQsLWV2ZW50LWFsaWFzLC13cmFwXCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTpkLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZWFjaCh0aGlzLGEsYil9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhkLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcihudWxsKX0scHVzaDpmLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbi5leHRlbmQ9bi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxuLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYobi5pc1BsYWluT2JqZWN0KGQpfHwoZT1uLmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJm4uaXNBcnJheShjKT9jOltdKTpmPWMmJm4uaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09bi5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LG4uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bi50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXksaXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzQXJyYXkoYSkmJmEtcGFyc2VGbG9hdChhKT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpPyExOmEuY29uc3RydWN0b3ImJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpPyExOiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxsLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9MCxmPWEubGVuZ3RoLGc9cyhhKTtpZihjKXtpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpmLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6Zy5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGY9MCxnPWEubGVuZ3RoLGg9cyhhKSxpPVtdO2lmKGgpZm9yKDtnPmY7ZisrKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO2Vsc2UgZm9yKGYgaW4gYSlkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtyZXR1cm4gZS5hcHBseShbXSxpKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZT1kLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGUuY29uY2F0KGQuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omt9KSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj1hLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOjE9PT1hLm5vZGVUeXBlJiZiPyEwOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx1LHY9dC5tYXRjaGVzfHx0LndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8dC5tb3pNYXRjaGVzU2VsZWN0b3J8fHQub01hdGNoZXNTZWxlY3Rvcnx8dC5tc01hdGNoZXNTZWxlY3Rvcix3PWZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIHU9ITAsMDt2YXIgYz1iLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpO3JldHVybiBjPzEmYz9hPT09bHx8bi5jb250YWlucyhsLGEpPy0xOmI9PT1sfHxuLmNvbnRhaW5zKGwsYik/MTowOjQmYz8tMToxOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/LTE6MX07bi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPTA7aWYoYz1jfHxbXSxiPWJ8fGwsIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBjO2lmKDEhPT0oZj1iLm5vZGVUeXBlKSYmOSE9PWYpcmV0dXJuW107aWYoZCl3aGlsZShlPWRbZysrXSluLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGUsYSkmJmMucHVzaChlKTtlbHNlIG4ubWVyZ2UoYyxiLnF1ZXJ5U2VsZWN0b3JBbGwoYSkpO3JldHVybiBjfSx1bmlxdWU6ZnVuY3Rpb24oYSl7dmFyIGIsYz1bXSxkPTAsZT0wO2lmKHU9ITEsYS5zb3J0KHcpLHUpe3doaWxlKGI9YVtkKytdKWI9PT1hW2RdJiYoZT1jLnB1c2goZCkpO3doaWxlKGUtLSlhLnNwbGljZShjW2VdLDEpfXJldHVybiBhfSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZT1hLm5vZGVUeXBlO2lmKGUpe2lmKDE9PT1lfHw5PT09ZXx8MTE9PT1lKXJldHVybiBhLnRleHRDb250ZW50O2lmKDM9PT1lfHw0PT09ZSlyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1uLnRleHQoYik7cmV0dXJuIGN9LGNvbnRhaW5zOmZ1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhYy5jb250YWlucyhkKSl9LGlzWE1MRG9jOmZ1bmN0aW9uKGEpe3JldHVyblwiSFRNTFwiIT09KGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lfSxleHByOnthdHRySGFuZGxlOnt9LG1hdGNoOntib29sOi9eKD86Y2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWQpJC9pLG5lZWRzQ29udGV4dDovXltcXHgyMFxcdFxcclxcblxcZl0qWz4rfl0vfX19KSxuLmV4dGVuZChuLmZpbmQse21hdGNoZXM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5maW5kKGEsbnVsbCxudWxsLGIpfSxtYXRjaGVzU2VsZWN0b3I6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdi5jYWxsKGEsYil9LGF0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYil9fSk7dmFyIHg9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx5PS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx6PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBBKGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoei50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gZy5jYWxsKGIsYSk+PTAhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soQSh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soQSh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhQSh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ4LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBCLEM9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sRD1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2lmKCFhKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihjPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkMuZXhlYyhhKSwhY3x8IWNbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxCKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihjWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoY1sxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpsLCEwKSkseS50ZXN0KGNbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGMgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tjXSk/dGhpc1tjXShiW2NdKTp0aGlzLmF0dHIoYyxiW2NdKTtyZXR1cm4gdGhpc31yZXR1cm4gZD1sLmdldEVsZW1lbnRCeUlkKGNbMl0pLGQmJmQucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1kKSx0aGlzLmNvbnRleHQ9bCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgQi5yZWFkeT9CLnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0QucHJvdG90eXBlPW4uZm4sQj1uKGwpO3ZhciBFPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEY9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5leHRlbmQoe2RpcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHNpYmxpbmc6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9fSksbi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz14LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZShmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/Zy5jYWxsKG4oYSksdGhpc1swXSk6Zy5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZShuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBHKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBHKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRyhhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRlthXXx8bi51bmlxdWUoZSksRS50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEg9L1xcUysvZyxJPXt9O2Z1bmN0aW9uIEooYSl7dmFyIGI9SVthXT17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goSCl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9JW2FdfHxKKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGYsZyxoPVtdLGk9IWEub25jZSYmW10saj1mdW5jdGlvbihsKXtmb3IoYj1hLm1lbW9yeSYmbCxjPSEwLGc9ZXx8MCxlPTAsZj1oLmxlbmd0aCxkPSEwO2gmJmY+ZztnKyspaWYoaFtnXS5hcHBseShsWzBdLGxbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2Upe2I9ITE7YnJlYWt9ZD0hMSxoJiYoaT9pLmxlbmd0aCYmaihpLnNoaWZ0KCkpOmI/aD1bXTprLmRpc2FibGUoKSl9LGs9e2FkZDpmdW5jdGlvbigpe2lmKGgpe3ZhciBjPWgubGVuZ3RoOyFmdW5jdGlvbiBnKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi50eXBlKGMpO1wiZnVuY3Rpb25cIj09PWQ/YS51bmlxdWUmJmsuaGFzKGMpfHxoLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1kJiZnKGMpfSl9KGFyZ3VtZW50cyksZD9mPWgubGVuZ3RoOmImJihlPWMsaihiKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBoJiZuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsaCxjKSk+LTEpaC5zcGxpY2UoYywxKSxkJiYoZj49YyYmZi0tLGc+PWMmJmctLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsaCk+LTE6ISghaHx8IWgubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gaD1bXSxmPTAsdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBoPWk9Yj12b2lkIDAsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haH0sbG9jazpmdW5jdGlvbigpe3JldHVybiBpPXZvaWQgMCxifHxrLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxiKXtyZXR1cm4haHx8YyYmIWl8fChiPWJ8fFtdLGI9W2EsYi5zbGljZT9iLnNsaWNlKCk6Yl0sZD9pLnB1c2goYik6aihiKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBrLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhY319O3JldHVybiBrfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCkucHJvZ3Jlc3MoYy5ub3RpZnkpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1kLmNhbGwoYXJndW1lbnRzKSxlPWMubGVuZ3RoLGY9MSE9PWV8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2U6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihlKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZC5jYWxsKGFyZ3VtZW50cyk6ZSxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGU+MSlmb3IoaT1uZXcgQXJyYXkoZSksaj1uZXcgQXJyYXkoZSksaz1uZXcgQXJyYXkoZSk7ZT5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KS5wcm9ncmVzcyhoKGIsaixpKSk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEs7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEsucmVzb2x2ZVdpdGgobCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGwpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihsKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBMKCl7bC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEwsITEpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixMLCExKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBLfHwoSz1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09bC5yZWFkeVN0YXRlP3NldFRpbWVvdXQobi5yZWFkeSk6KGwuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixMLCExKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsTCwhMSkpKSxLLnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBNPW4uYWNjZXNzPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKW4uYWNjZXNzKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9O24uYWNjZXB0RGF0YT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIE4oKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jYWNoZT17fSwwLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57fX19KSx0aGlzLmV4cGFuZG89bi5leHBhbmRvK01hdGgucmFuZG9tKCl9Ti51aWQ9MSxOLmFjY2VwdHM9bi5hY2NlcHREYXRhLE4ucHJvdG90eXBlPXtrZXk6ZnVuY3Rpb24oYSl7aWYoIU4uYWNjZXB0cyhhKSlyZXR1cm4gMDt2YXIgYj17fSxjPWFbdGhpcy5leHBhbmRvXTtpZighYyl7Yz1OLnVpZCsrO3RyeXtiW3RoaXMuZXhwYW5kb109e3ZhbHVlOmN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEsYil9Y2F0Y2goZCl7Ylt0aGlzLmV4cGFuZG9dPWMsbi5leHRlbmQoYSxiKX19cmV0dXJuIHRoaXMuY2FjaGVbY118fCh0aGlzLmNhY2hlW2NdPXt9KSxjfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5rZXkoYSksZj10aGlzLmNhY2hlW2VdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWZbYl09YztlbHNlIGlmKG4uaXNFbXB0eU9iamVjdChmKSluLmV4dGVuZCh0aGlzLmNhY2hlW2VdLGIpO2Vsc2UgZm9yKGQgaW4gYilmW2RdPWJbZF07cmV0dXJuIGZ9LGdldDpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY2FjaGVbdGhpcy5rZXkoYSldO3JldHVybiB2b2lkIDA9PT1iP2M6Y1tiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzLmtleShhKSxnPXRoaXMuY2FjaGVbZl07aWYodm9pZCAwPT09Yil0aGlzLmNhY2hlW2ZdPXt9O2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGc/ZD1bYixlXTooZD1lLGQ9ZCBpbiBnP1tkXTpkLm1hdGNoKEgpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBnW2RbY11dfX0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0VtcHR5T2JqZWN0KHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXXx8e30pfSxkaXNjYXJkOmZ1bmN0aW9uKGEpe2FbdGhpcy5leHBhbmRvXSYmZGVsZXRlIHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXX19O3ZhciBPPW5ldyBOLFA9bmV3IE4sUT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sUj0vKFtBLVpdKS9nO2Z1bmN0aW9uIFMoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShSLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6US50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fVAuc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBQLmhhc0RhdGEoYSl8fE8uaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFAuYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1AucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe08ucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1QLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIU8uZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxTKGYsZCxlW2RdKSkpO08uc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7UC5zZXQodGhpcyxhKX0pOk0odGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkPW4uY2FtZWxDYXNlKGEpO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9UC5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UC5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UyhmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9UC5nZXQodGhpcyxkKTtQLnNldCh0aGlzLGQsYiksLTEhPT1hLmluZGV4T2YoXCItXCIpJiZ2b2lkIDAhPT1jJiZQLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7UC5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Ty5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPU8uYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIE8uZ2V0KGEsYyl8fE8uYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtPLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1PLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBUPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxVPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pOyFmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksay5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGsubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgVj1cInVuZGVmaW5lZFwiO2suZm9jdXNpbkJ1YmJsZXM9XCJvbmZvY3VzaW5cImluIGE7dmFyIFc9L15rZXkvLFg9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay8sWT0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sWj0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiAkKCl7cmV0dXJuITB9ZnVuY3Rpb24gXygpe3JldHVybiExfWZ1bmN0aW9uIGFiKCl7dHJ5e3JldHVybiBsLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU8uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm4gdHlwZW9mIG4hPT1WJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChIKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9Wi5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcsITEpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU8uaGFzRGF0YShhKSYmTy5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChIKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9Wi5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJihkZWxldGUgci5oYW5kbGUsTy5yZW1vdmUoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmLGcsaCxpLGssbSxvLHA9W2R8fGxdLHE9ai5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ai5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGc9aD1kPWR8fGwsMyE9PWQubm9kZVR5cGUmJjghPT1kLm5vZGVUeXBlJiYhWS50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT49MCYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGs9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWU/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5uYW1lc3BhY2VfcmU9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZCksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGV8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShkLGMpIT09ITEpKXtpZighZSYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGQpKXtmb3IoaT1vLmRlbGVnYXRlVHlwZXx8cSxZLnRlc3QoaStxKXx8KGc9Zy5wYXJlbnROb2RlKTtnO2c9Zy5wYXJlbnROb2RlKXAucHVzaChnKSxoPWc7aD09PShkLm93bmVyRG9jdW1lbnR8fGwpJiZwLnB1c2goaC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3d8fGEpfWY9MDt3aGlsZSgoZz1wW2YrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1mPjE/aTpvLmJpbmRUeXBlfHxxLG09KE8uZ2V0KGcsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZPLmdldChnLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoZyxjKSxtPWsmJmdba10sbSYmbS5hcHBseSYmbi5hY2NlcHREYXRhKGcpJiYoYi5yZXN1bHQ9bS5hcHBseShnLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGV8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhbi5hY2NlcHREYXRhKGQpfHxrJiZuLmlzRnVuY3Rpb24oZFtxXSkmJiFuLmlzV2luZG93KGQpJiYoaD1kW2tdLGgmJihkW2tdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZFtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxoJiYoZFtrXT1oKSksYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZSxmLGcsaD1bXSxpPWQuY2FsbChhcmd1bWVudHMpLGo9KE8uZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLm5hbWVzcGFjZV9yZXx8YS5uYW1lc3BhY2VfcmUudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGU9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihhLnJlc3VsdD1lKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJighYS5idXR0b258fFwiY2xpY2tcIiE9PWEudHlwZSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+PTA6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxsLGQ9Yy5kb2N1bWVudEVsZW1lbnQsZT1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGQmJmQuc2Nyb2xsTGVmdHx8ZSYmZS5zY3JvbGxMZWZ0fHwwKS0oZCYmZC5jbGllbnRMZWZ0fHxlJiZlLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhkJiZkLnNjcm9sbFRvcHx8ZSYmZS5zY3JvbGxUb3B8fDApLShkJiZkLmNsaWVudFRvcHx8ZSYmZS5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1mfHwoYS53aGljaD0xJmY/MToyJmY/Mzo0JmY/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGQsZT1hLnR5cGUsZj1hLGc9dGhpcy5maXhIb29rc1tlXTtnfHwodGhpcy5maXhIb29rc1tlXT1nPVgudGVzdChlKT90aGlzLm1vdXNlSG9va3M6Vy50ZXN0KGUpP3RoaXMua2V5SG9va3M6e30pLGQ9Zy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChnLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZiksYj1kLmxlbmd0aDt3aGlsZShiLS0pYz1kW2JdLGFbY109ZltjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1sKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxnLmZpbHRlcj9nLmZpbHRlcihhLGYpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09YWIoKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09YWIoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/bi5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTpuLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT8kOl8pOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOl8saXNQcm9wYWdhdGlvblN0b3BwZWQ6Xyxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpfLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPSQsYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD0kLGEmJmEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD0kLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxrLmZvY3VzaW5CdWJibGVzfHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSwhMCl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1PLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE8uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ty5hY2Nlc3MoZCxiKS0xO2U/Ty5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxPLnJlbW92ZShkLGIpKX19fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWN8fGIsYj12b2lkIDApO2ZvcihnIGluIGEpdGhpcy5vbihnLGIsYyxhW2ddLGUpO3JldHVybiB0aGlzfWlmKG51bGw9PWMmJm51bGw9PWQ/KGQ9YixjPWI9dm9pZCAwKTpudWxsPT1kJiYoXCJzdHJpbmdcIj09dHlwZW9mIGI/KGQ9YyxjPXZvaWQgMCk6KGQ9YyxjPWIsYj12b2lkIDApKSxkPT09ITEpZD1fO2Vsc2UgaWYoIWQpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1lJiYoZj1kLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGQuZ3VpZD1mLmd1aWR8fChmLmd1aWQ9bi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGEsZCxjLGIpfSl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1fKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciBiYj0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksY2I9LzwoW1xcdzpdKykvLGRiPS88fCYjP1xcdys7LyxlYj0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLGZiPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksZ2I9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxoYj0vXnRydWVcXC8oLiopLyxpYj0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csamI9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtqYi5vcHRncm91cD1qYi5vcHRpb24samIudGJvZHk9amIudGZvb3Q9amIuY29sZ3JvdXA9amIuY2FwdGlvbj1qYi50aGVhZCxqYi50aD1qYi50ZDtmdW5jdGlvbiBrYihhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBsYihhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBtYihhKXt2YXIgYj1oYi5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gbmIoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTy5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Ty5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIG9iKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTy5oYXNEYXRhKGEpJiYoZj1PLmFjY2VzcyhhKSxnPU8uc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1QLmhhc0RhdGEoYSkmJihoPVAuYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksUC5zZXQoYixpKSl9fWZ1bmN0aW9uIHBiKGEsYil7dmFyIGM9YS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTphLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gcWIoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmVS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9bi5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoay5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9cGIoaCksZj1wYihhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXFiKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fHBiKGEpLGc9Z3x8cGIoaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylvYihmW2RdLGdbZF0pO2Vsc2Ugb2IoYSxoKTtyZXR1cm4gZz1wYihoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm5iKGcsIWkmJnBiKGEsXCJzY3JpcHRcIikpLGh9LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGksaixrPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGw9W10sbT0wLG89YS5sZW5ndGg7bz5tO20rKylpZihlPWFbbV0sZXx8MD09PWUpaWYoXCJvYmplY3RcIj09PW4udHlwZShlKSluLm1lcmdlKGwsZS5ub2RlVHlwZT9bZV06ZSk7ZWxzZSBpZihkYi50ZXN0KGUpKXtmPWZ8fGsuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxnPShjYi5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxoPWpiW2ddfHxqYi5fZGVmYXVsdCxmLmlubmVySFRNTD1oWzFdK2UucmVwbGFjZShiYixcIjwkMT48LyQyPlwiKStoWzJdLGo9aFswXTt3aGlsZShqLS0pZj1mLmxhc3RDaGlsZDtuLm1lcmdlKGwsZi5jaGlsZE5vZGVzKSxmPWsuZmlyc3RDaGlsZCxmLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBsLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShlKSk7ay50ZXh0Q29udGVudD1cIlwiLG09MDt3aGlsZShlPWxbbSsrXSlpZigoIWR8fC0xPT09bi5pbkFycmF5KGUsZCkpJiYoaT1uLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSxmPXBiKGsuYXBwZW5kQ2hpbGQoZSksXCJzY3JpcHRcIiksaSYmbmIoZiksYykpe2o9MDt3aGlsZShlPWZbaisrXSlnYi50ZXN0KGUudHlwZXx8XCJcIikmJmMucHVzaChlKX1yZXR1cm4ga30sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZSxmPW4uZXZlbnQuc3BlY2lhbCxnPTA7dm9pZCAwIT09KGM9YVtnXSk7ZysrKXtpZihuLmFjY2VwdERhdGEoYykmJihlPWNbTy5leHBhbmRvXSxlJiYoYj1PLmNhY2hlW2VdKSkpe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWZbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Ty5jYWNoZVtlXSYmZGVsZXRlIE8uY2FjaGVbZV19ZGVsZXRlIFAuY2FjaGVbY1tQLmV4cGFuZG9dXX19fSksbi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIE0odGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9a2IodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1rYih0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LHJlbW92ZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPWE/bi5maWx0ZXIoYSx0aGlzKTp0aGlzLGU9MDtudWxsIT0oYz1kW2VdKTtlKyspYnx8MSE9PWMubm9kZVR5cGV8fG4uY2xlYW5EYXRhKHBiKGMpKSxjLnBhcmVudE5vZGUmJihiJiZuLmNvbnRhaW5zKGMub3duZXJEb2N1bWVudCxjKSYmbmIocGIoYyxcInNjcmlwdFwiKSksYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpKTtyZXR1cm4gdGhpc30sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKHBiKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIE0odGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFlYi50ZXN0KGEpJiYhamJbKGNiLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1hLnJlcGxhY2UoYmIsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEocGIoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF07cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2E9dGhpcy5wYXJlbnROb2RlLG4uY2xlYW5EYXRhKHBiKHRoaXMpKSxhJiZhLnJlcGxhY2VDaGlsZChiLHRoaXMpfSksYSYmKGEubGVuZ3RofHxhLm5vZGVUeXBlKT90aGlzOnRoaXMucmVtb3ZlKCl9LGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGEsYil7YT1lLmFwcGx5KFtdLGEpO3ZhciBjLGQsZixnLGgsaSxqPTAsbD10aGlzLmxlbmd0aCxtPXRoaXMsbz1sLTEscD1hWzBdLHE9bi5pc0Z1bmN0aW9uKHApO2lmKHF8fGw+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHAmJiFrLmNoZWNrQ2xvbmUmJmZiLnRlc3QocCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZD1tLmVxKGMpO3EmJihhWzBdPXAuY2FsbCh0aGlzLGMsZC5odG1sKCkpKSxkLmRvbU1hbmlwKGEsYil9KTtpZihsJiYoYz1uLmJ1aWxkRnJhZ21lbnQoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksZD1jLmZpcnN0Q2hpbGQsMT09PWMuY2hpbGROb2Rlcy5sZW5ndGgmJihjPWQpLGQpKXtmb3IoZj1uLm1hcChwYihjLFwic2NyaXB0XCIpLGxiKSxnPWYubGVuZ3RoO2w+ajtqKyspaD1jLGohPT1vJiYoaD1uLmNsb25lKGgsITAsITApLGcmJm4ubWVyZ2UoZixwYihoLFwic2NyaXB0XCIpKSksYi5jYWxsKHRoaXNbal0saCxqKTtcbmlmKGcpZm9yKGk9ZltmLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGYsbWIpLGo9MDtnPmo7aisrKWg9ZltqXSxnYi50ZXN0KGgudHlwZXx8XCJcIikmJiFPLmFjY2VzcyhoLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhpLGgpJiYoaC5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChoLnNyYyk6bi5nbG9iYWxFdmFsKGgudGV4dENvbnRlbnQucmVwbGFjZShpYixcIlwiKSkpfXJldHVybiB0aGlzfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGc9ZS5sZW5ndGgtMSxoPTA7Zz49aDtoKyspYz1oPT09Zz90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZi5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bi5meD9uLmZ4LnNwZWVkc1thXXx8YTphLGI9Ynx8XCJmeFwiLHRoaXMucXVldWUoYixmdW5jdGlvbihiLGMpe3ZhciBkPXNldFRpbWVvdXQoYixhKTtjLnN0b3A9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZCl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1sLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixrLmNoZWNrT249XCJcIiE9PWEudmFsdWUsay5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsay5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixrLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciByYixzYix0Yj1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBNKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZihhJiYzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiB0eXBlb2YgYS5nZXRBdHRyaWJ1dGU9PT1WP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZD1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/c2I6cmIpKSx2b2lkIDA9PT1jP2QmJlwiZ2V0XCJpbiBkJiZudWxsIT09KGU9ZC5nZXQoYSxiKSk/ZTooZT1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWU/dm9pZCAwOmUpOm51bGwhPT1jP2QmJlwic2V0XCJpbiBkJiZ2b2lkIDAhPT0oZT1kLnNldChhLGMsYikpP2U6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTp2b2lkIG4ucmVtb3ZlQXR0cihhLGIpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChIKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksc2I9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9dGJbYl18fG4uZmluZC5hdHRyO3RiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj10YltiXSx0YltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsdGJbYl09ZiksZX19KTt2YXIgdWI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBNKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW4uaXNYTUxEb2MoYSksZiYmKGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8dWIudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxrLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciB2Yj0vW1xcdFxcclxcblxcZl0vZztuLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChIKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh2YixcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW4udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goSCl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodmIsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9uLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChIKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09Vnx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZPLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6Ty5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh2YixcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgd2I9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKHdiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sISghYy5zZWxlY3RlZCYmaSE9PWV8fChrLm9wdERpc2FibGVkP2MuZGlzYWJsZWQ6bnVsbCE9PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxjLnBhcmVudE5vZGUuZGlzYWJsZWQmJm4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KGQudmFsdWUsZik+PTApJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIHhiPW4ubm93KCkseWI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihhKXt2YXIgYixjO2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7Yz1uZXcgRE9NUGFyc2VyLGI9Yy5wYXJzZUZyb21TdHJpbmcoYSxcInRleHQveG1sXCIpfWNhdGNoKGQpe2I9dm9pZCAwfXJldHVybighYnx8Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYSksYn07dmFyIHpiLEFiLEJiPS8jLiokLyxDYj0vKFs/Jl0pXz1bXiZdKi8sRGI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxFYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxGYj0vXig/OkdFVHxIRUFEKSQvLEdiPS9eXFwvXFwvLyxIYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxJYj17fSxKYj17fSxLYj1cIiovXCIuY29uY2F0KFwiKlwiKTt0cnl7QWI9bG9jYXRpb24uaHJlZn1jYXRjaChMYil7QWI9bC5jcmVhdGVFbGVtZW50KFwiYVwiKSxBYi5ocmVmPVwiXCIsQWI9QWIuaHJlZn16Yj1IYi5leGVjKEFiLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBNYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goSCl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1KYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE9iKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBQYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiBRYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpBYix0eXBlOlwiR0VUXCIsaXNMb2NhbDpFYi50ZXN0KHpiWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpLYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP09iKE9iKGEsbi5hamF4U2V0dGluZ3MpLGIpOk9iKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOk1iKEliKSxhamF4VHJhbnNwb3J0Ok1iKEpiKSxhamF4OmZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGI9Ynx8e307dmFyIGMsZCxlLGYsZyxoLGksaixrPW4uYWpheFNldHVwKHt9LGIpLGw9ay5jb250ZXh0fHxrLG09ay5jb250ZXh0JiYobC5ub2RlVHlwZXx8bC5qcXVlcnkpP24obCk6bi5ldmVudCxvPW4uRGVmZXJyZWQoKSxwPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscT1rLnN0YXR1c0NvZGV8fHt9LHI9e30scz17fSx0PTAsdT1cImNhbmNlbGVkXCIsdj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT10KXtpZighZil7Zj17fTt3aGlsZShiPURiLmV4ZWMoZSkpZltiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1mW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXQ/ZTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB0fHwoYT1zW2NdPXNbY118fGEsclthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB0fHwoay5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj50KWZvcihiIGluIGEpcVtiXT1bcVtiXSxhW2JdXTtlbHNlIHYuYWx3YXlzKGFbdi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dTtyZXR1cm4gYyYmYy5hYm9ydChiKSx4KDAsYiksdGhpc319O2lmKG8ucHJvbWlzZSh2KS5jb21wbGV0ZT1wLmFkZCx2LnN1Y2Nlc3M9di5kb25lLHYuZXJyb3I9di5mYWlsLGsudXJsPSgoYXx8ay51cmx8fEFiKStcIlwiKS5yZXBsYWNlKEJiLFwiXCIpLnJlcGxhY2UoR2IsemJbMV0rXCIvL1wiKSxrLnR5cGU9Yi5tZXRob2R8fGIudHlwZXx8ay5tZXRob2R8fGsudHlwZSxrLmRhdGFUeXBlcz1uLnRyaW0oay5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goSCl8fFtcIlwiXSxudWxsPT1rLmNyb3NzRG9tYWluJiYoaD1IYi5leGVjKGsudXJsLnRvTG93ZXJDYXNlKCkpLGsuY3Jvc3NEb21haW49ISghaHx8aFsxXT09PXpiWzFdJiZoWzJdPT09emJbMl0mJihoWzNdfHwoXCJodHRwOlwiPT09aFsxXT9cIjgwXCI6XCI0NDNcIikpPT09KHpiWzNdfHwoXCJodHRwOlwiPT09emJbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGsuZGF0YSYmay5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGsuZGF0YSYmKGsuZGF0YT1uLnBhcmFtKGsuZGF0YSxrLnRyYWRpdGlvbmFsKSksTmIoSWIsayxiLHYpLDI9PT10KXJldHVybiB2O2k9ay5nbG9iYWwsaSYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxrLnR5cGU9ay50eXBlLnRvVXBwZXJDYXNlKCksay5oYXNDb250ZW50PSFGYi50ZXN0KGsudHlwZSksZD1rLnVybCxrLmhhc0NvbnRlbnR8fChrLmRhdGEmJihkPWsudXJsKz0oeWIudGVzdChkKT9cIiZcIjpcIj9cIikray5kYXRhLGRlbGV0ZSBrLmRhdGEpLGsuY2FjaGU9PT0hMSYmKGsudXJsPUNiLnRlc3QoZCk/ZC5yZXBsYWNlKENiLFwiJDFfPVwiK3hiKyspOmQrKHliLnRlc3QoZCk/XCImXCI6XCI/XCIpK1wiXz1cIit4YisrKSksay5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZF0pLG4uZXRhZ1tkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tkXSkpLChrLmRhdGEmJmsuaGFzQ29udGVudCYmay5jb250ZW50VHlwZSE9PSExfHxiLmNvbnRlbnRUeXBlKSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsay5jb250ZW50VHlwZSksdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsay5kYXRhVHlwZXNbMF0mJmsuYWNjZXB0c1trLmRhdGFUeXBlc1swXV0/ay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1rLmRhdGFUeXBlc1swXT9cIiwgXCIrS2IrXCI7IHE9MC4wMVwiOlwiXCIpOmsuYWNjZXB0c1tcIipcIl0pO2ZvcihqIGluIGsuaGVhZGVycyl2LnNldFJlcXVlc3RIZWFkZXIoaixrLmhlYWRlcnNbal0pO2lmKGsuYmVmb3JlU2VuZCYmKGsuYmVmb3JlU2VuZC5jYWxsKGwsdixrKT09PSExfHwyPT09dCkpcmV0dXJuIHYuYWJvcnQoKTt1PVwiYWJvcnRcIjtmb3IoaiBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl2W2pdKGtbal0pO2lmKGM9TmIoSmIsayxiLHYpKXt2LnJlYWR5U3RhdGU9MSxpJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt2LGtdKSxrLmFzeW5jJiZrLnRpbWVvdXQ+MCYmKGc9c2V0VGltZW91dChmdW5jdGlvbigpe3YuYWJvcnQoXCJ0aW1lb3V0XCIpfSxrLnRpbWVvdXQpKTt0cnl7dD0xLGMuc2VuZChyLHgpfWNhdGNoKHcpe2lmKCEoMj50KSl0aHJvdyB3O3goLTEsdyl9fWVsc2UgeCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB4KGEsYixmLGgpe3ZhciBqLHIscyx1LHcseD1iOzIhPT10JiYodD0yLGcmJmNsZWFyVGltZW91dChnKSxjPXZvaWQgMCxlPWh8fFwiXCIsdi5yZWFkeVN0YXRlPWE+MD80OjAsaj1hPj0yMDAmJjMwMD5hfHwzMDQ9PT1hLGYmJih1PVBiKGssdixmKSksdT1RYihrLHUsdixqKSxqPyhrLmlmTW9kaWZpZWQmJih3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtkXT13KSx3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZF09dykpLDIwND09PWF8fFwiSEVBRFwiPT09ay50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1hP3g9XCJub3Rtb2RpZmllZFwiOih4PXUuc3RhdGUscj11LmRhdGEscz11LmVycm9yLGo9IXMpKToocz14LChhfHwheCkmJih4PVwiZXJyb3JcIiwwPmEmJihhPTApKSksdi5zdGF0dXM9YSx2LnN0YXR1c1RleHQ9KGJ8fHgpK1wiXCIsaj9vLnJlc29sdmVXaXRoKGwsW3IseCx2XSk6by5yZWplY3RXaXRoKGwsW3YseCxzXSksdi5zdGF0dXNDb2RlKHEpLHE9dm9pZCAwLGkmJm0udHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt2LGssaj9yOnNdKSxwLmZpcmVXaXRoKGwsW3YseF0pLGkmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdixrXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gdn0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0pfX0pLG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX07dmFyIFJiPS8lMjAvZyxTYj0vXFxbXFxdJC8sVGI9L1xccj9cXG4vZyxVYj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksVmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIFdiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fFNiLnRlc3QoYSk/ZChhLGUpOldiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpV2IoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKVdiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoUmIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJlZiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFVYi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhVS50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKFRiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoVGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYSl7fX07dmFyIFhiPTAsWWI9e30sWmI9ezA6MjAwLDEyMjM6MjA0fSwkYj1uLmFqYXhTZXR0aW5ncy54aHIoKTthLkFjdGl2ZVhPYmplY3QmJm4oYSkub24oXCJ1bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBZYilZYlthXSgpfSksay5jb3JzPSEhJGImJlwid2l0aENyZWRlbnRpYWxzXCJpbiAkYixrLmFqYXg9JGI9ISEkYixuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGsuY29yc3x8JGImJiFhLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hLnhocigpLGc9KytYYjtpZihmLm9wZW4oYS50eXBlLGEudXJsLGEuYXN5bmMsYS51c2VybmFtZSxhLnBhc3N3b3JkKSxhLnhockZpZWxkcylmb3IoZSBpbiBhLnhockZpZWxkcylmW2VdPWEueGhyRmllbGRzW2VdO2EubWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlKGEubWltZVR5cGUpLGEuY3Jvc3NEb21haW58fGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoY1tcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZSBpbiBjKWYuc2V0UmVxdWVzdEhlYWRlcihlLGNbZV0pO2I9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmKGRlbGV0ZSBZYltnXSxiPWYub25sb2FkPWYub25lcnJvcj1udWxsLFwiYWJvcnRcIj09PWE/Zi5hYm9ydCgpOlwiZXJyb3JcIj09PWE/ZChmLnN0YXR1cyxmLnN0YXR1c1RleHQpOmQoWmJbZi5zdGF0dXNdfHxmLnN0YXR1cyxmLnN0YXR1c1RleHQsXCJzdHJpbmdcIj09dHlwZW9mIGYucmVzcG9uc2VUZXh0P3t0ZXh0OmYucmVzcG9uc2VUZXh0fTp2b2lkIDAsZi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sZi5vbmxvYWQ9YigpLGYub25lcnJvcj1iKFwiZXJyb3JcIiksYj1ZYltnXT1iKFwiYWJvcnRcIik7dHJ5e2Yuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCl9Y2F0Y2goaCl7aWYoYil0aHJvdyBofX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2FzeW5jOiEwLGNoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZShcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksbC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBfYj1bXSxhYz0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPV9iLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIreGIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoYWMudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYhKGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJmFjLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoYWMsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oeWIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLF9iLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxsO3ZhciBkPXkuZXhlYyhhKSxlPSFjJiZbXTtyZXR1cm4gZD9bYi5jcmVhdGVFbGVtZW50KGRbMV0pXTooZD1uLmJ1aWxkRnJhZ21lbnQoW2FdLGIsZSksZSYmZS5sZW5ndGgmJm4oZSkucmVtb3ZlKCksbi5tZXJnZShbXSxkLmNoaWxkTm9kZXMpKX07dmFyIGJjPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZiYylyZXR1cm4gYmMuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPj0wJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmNvbXBsZXRlKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSksdGhpc30sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIGNjPWEualF1ZXJ5LGRjPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPWRjKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1jYyksbn0sdHlwZW9mIGI9PT1WJiYoYS5qUXVlcnk9YS4kPW4pLG59KTtcblxuIiwiLyoqXG4gKiBDb29raWVzXG4gKlxuICogSlMgTGlicmFyeSB0byBkZWFsIHdpdGggQ29va2llc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjRcbiAqL1xuXG52YXIgQ29va2llcyA9IHtcblxuXHQvKipcblx0ICogR2V0XG5cdCAqXG5cdCAqIEdldHMgYSBjb29raWUgb3IgcmV0dXJucyB0aGUgZGVmYXVsdC4gU2V0IG5vIG5hbWUgdG8gZ2V0IGFsbFxuXHQgKlxuXHQgKiBAbmFtZSBnZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llIHRvIGZldGNoXG5cdCAqIEBwYXJhbSBzdHIgZGVmYXVsdF9cdFx0XHRUaGUgZGVmYXVsdCB2YWx1ZSB0byByZXR1cm4gaWYgbm8gY29va2llIGlzIGZvdW5kXG5cdCAqIEByZXR1cm4gc3RyfG51bGxcblx0ICovXG5cdGdldDogZnVuY3Rpb24obmFtZSwgZGVmYXVsdF8pIHtcblxuXHRcdC8vIFNldCB0aGUgZGVmYXVsdCBpZiBubyB2YWx1ZSBpcyBwYXNzZWRcblx0XHRpZih0eXBlb2YgZGVmYXVsdF8gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGRlZmF1bHRfID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBQYXJzZSBhbGwgY29va2llc1xuXHRcdHZhciBvQ29va2llcyA9IHt9XG5cdFx0dmFyIGxDb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jylcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbENvb2tpZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGwgPSBsQ29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0b0Nvb2tpZXNbbFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobFsxXSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBuYW1lLCByZXR1cm4gYWxsXG5cdFx0aWYodHlwZW9mIG5hbWUgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBvQ29va2llcztcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgY29va2llIGV4aXN0cyByZXR1cm4gaXQsIGVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0XG5cdFx0cmV0dXJuIChuYW1lIGluIG9Db29raWVzKSA/IG9Db29raWVzW25hbWVdIDogZGVmYXVsdF87XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlbW92ZVxuXHQgKlxuXHQgKiBEZWxldGVzIGEgY29va2llXG5cdCAqXG5cdCAqIEBuYW1lIHJlbW92ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyIG5hbWVcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBjb29raWUgdG8gZGVsZXRlXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJyZW1vdmVcIjogZnVuY3Rpb24obmFtZSwgZG9tYWluLCBwYXRoKSB7XG5cdFx0dGhpcy5zZXQobmFtZSwgJycsIC0xLCBkb21haW4sIHBhdGgpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXRcblx0ICpcblx0ICogU2V0cyBhIGNvb2tpZVxuXHQgKlxuXHQgKiBAbmFtZSBzZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llXG5cdCAqIEBwYXJhbSBzdHIgdmFsdWVcdFx0XHRcdFRoZSB2YWx1ZSB0byBzdG9yZVxuXHQgKiBAcGFyYW0gaW50IGV4cGlyZXNcdFx0XHRUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmVmb3JlIHRoZSBjb29raWUgZXhwaXJlc1xuXHQgKiBAcGFyYW0gc3RyIGRvbWFpblx0XHRcdFRoZSBvcHRpb25hbCBkb21haW4gdG8gc2V0IHRoZSBjb29raWUgb25cblx0ICogQHBhcmFtIHN0ciBwYXRoXHRcdFx0XHRUaGUgb3B0aW9uYWwgcGF0aCBvZiB0aGUgY29va2llXG5cdCAqIEByZXR1cm4gbnVsbFxuXHQgKi9cblx0c2V0OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZXhwaXJlcywgZG9tYWluLCBwYXRoKSB7XG5cblx0XHQvLyBHZW5lcmF0ZSB0aGUgZXhwaXJlcyB0aW1lXG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleHBpcmVzKjEwMDApKVxuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGNvb2tpZSBzdHJpbmdcblx0XHR2YXIgcyA9IG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICtcblx0XHRcdFx0JzsgZXhwaXJlcz0nICsgZC50b0dNVFN0cmluZygpICsgJzsnO1xuXHRcdGlmKGRvbWFpbikge1xuXHRcdFx0cyArPSAnIGRvbWFpbj0nICsgZG9tYWluICsgJzsnO1xuXHRcdH1cblx0XHRpZihwYXRoKSB7XG5cdFx0XHRzICs9ICcgcGF0aD0nICsgcGF0aCArICc7Jztcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvb2tpZVxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IHM7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gQ29va2llcztcbiIsIi8qKlxuICogRXZlbnRzXG4gKlxuICogRXZlbnQgbW9kZWwgZm9yIG5vbiBVSSBldmVudHNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gSW5pdCB0aGUgY2FsbGJhY2tzIG9iamVjdFxudmFyIF9jYWxsYmFja3MgPSB7fTtcblxuLyoqXG4gKiBBZGRcbiAqXG4gKiBBZGRzIGEgY2FsbGJhY2sgdG8gYW4gZXZlbnRcbiAqXG4gKiBAbmFtZSBhZGRcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0gc3RyIGV2ZW50XHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgdG8gYXR0YWNoIHRvIHRoZSBldmVudFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIGFkZChldmVudCwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB0aGUgZXZlbnQgZG9lc24ndCBleGlzdCB5ZXRcblx0aWYoIShldmVudCBpbiBfY2FsbGJhY2tzKSkge1xuXHRcdF9jYWxsYmFja3NbZXZlbnRdID0gW11cblx0fVxuXG5cdC8vIEFkZCB0aGUgY2FsbGJhY2sgdG8gdGhlIGxpc3Rcblx0X2NhbGxiYWNrc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICogUmVtb3ZlXG4gKlxuICogUmVtb3ZlcyBhIGNhbGxiYWNrIGZyb20gYSBzcGVjaWZpYyBldmVudFxuICpcbiAqIEBuYW1lIHJlbW92ZVxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSBzdHIgZXZlbnRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZW1vdmUgdGhlIGNhbGxiYWNrIGZyb21cbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgZXhhY3Qgc2FtZSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB0byB0aGUgZXZlbnRcbiAqIEByZXR1cm5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGV2ZW50LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHRoZSBuYW1lIGV4aXN0cyBpbiB0aGUgb2JqZWN0XG5cdGlmKGV2ZW50IGluIF9jYWxsYmFja3MpIHtcblxuXHRcdC8vIElmIHRoZSBjYWxsYmFjayBleGlzdHMgaW4gdGhlIGxpc3Rcblx0XHR2YXIgaSA9IF9jYWxsYmFja3NbZXZlbnRdLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdGlmKGkgIT0gLTEpIHtcblx0XHRcdF9jYWxsYmFja3NbZXZlbnRdLnNwbGljZShpLDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm90aGluZyBmb3VuZCwgcmV0dXJuIGZhbHNlXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyXG4gKlxuICogVHJpZ2dlcnMgYSBzcGVjaWZpYyBldmVudCBhbmQgY2FsbHMgYWxsIGNhbGxiYWNrcyBhc3NvY2lhdGVkXG4gKlxuICogQG5hbWUgdHJpZ2dlclxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSBzdHIgZXZlbnRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byB0cmlnZ2VyXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gdHJpZ2dlcihldmVudCkge1xuXG5cdC8vIElmIHdlIGhhdmUgY2FsbGJhY2tzIGZvciB0aGUgZXZlbnRcblx0aWYoZXZlbnQgaW4gX2NhbGxiYWNrcykge1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG5cdFx0Ly9cdGNhbGxiYWNrc1xuXHRcdHZhciBhcmdzID0gW107XG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpLnNsaWNlKDEpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYW55IGNhbGxiYWNrcywgY2FsbCB0aGVtIG9uZSBieSBvbmVcblx0XHRmb3IodmFyIGkgaW4gX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBiID0gX2NhbGxiYWNrc1tldmVudF1baV0uYXBwbHkobnVsbCwgYXJncyk7XG5cdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGV2ZW50ICsgJyBjYWxsYmFjayAnICsgaSArICcgdGhyZXcgZXhjZXB0aW9uOiAnICsgZXJyKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgZ290IGZhbHNlIGJhY2ssIHN0b3AgY2FsbGluZyB0aGUgY2FsbGJhY2tzXG5cdFx0XHRpZihiID09PSBmYWxzZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBObyBjYWxsYmFja3MgYXNzY29jaXRlZCB3aXRoIHRoZSBldmVudFxuXHRlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdldmVudCB2YWx1ZSBcIicgKyBldmVudCArICdcIiByZXR1cm5lZCwgYW5kIG5vIGNhbGxiYWNrcyB3ZXJlIGZvdW5kIHRvIGhhbmRsZSBpdCcpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgZnVuY3Rpb25zXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZGRcIjogYWRkLFxuXHRcInJlbW92ZVwiOiByZW1vdmUsXG5cdFwidHJpZ2dlclwiOiB0cmlnZ2VyXG59XG4iLCIvKipcbiAqIEhhc2hcbiAqXG4gKiBKUyBMaWJyYXJ5IHRvIG1hbmFnZSBoYXNoIHZhbHVlc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTItMDlcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBUb29scyA9IHJlcXVpcmUoJy4vdG9vbHMuanMnKTtcblxuLy8gVmFsdWVzXG52YXIgX2hhc2ggPSB7fTtcblxuLy8gbmFtZSByZWdleFxudmFyIF9uYW1lUkUgPSAvXlthLXpdKyQvO1xuXG4vLyBDYWxsYmFja3NcbnZhciBfd2F0Y2hlcyA9IHt9O1xuXG4vKipcbiAqIENoZWNrIFdhdGNoZXNcbiAqXG4gKiBHZXRzIG9sZCB2YWx1ZXMgYW5kIGNvbXBhcmVzIHRoZW0gdG8gZXhpc3RpbmcgdmFsdWVzLCBpZiBhbnlvbmUgaXMgd2F0Y2hpbmdcbiAqIGFueSBuYW1lcyB0aGF0IGFyZSBjaGFuZ2VkLCB0aGV5IGFyZSBub3RpZmllZFxuICpcbiAqIEBuYW1lIF9jaGVja1dhdGNoZXNcbiAqIEBwYXJhbSBvYmplY3Qgb2xkXHRcdFx0VGhlIG9sZCB2YWx1ZXMgdG8gY2hlY2sgYWdhaW5cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfY2hlY2tXYXRjaGVzKG9sZCkge1xuXG5cdC8vIElmIHRoZXJlIGFyZSB3YXRjaGVzXG5cdGlmKCFUb29scy5lbXB0eShfd2F0Y2hlcykpIHtcblxuXHRcdC8vIENoZWNrIGVhY2ggd2F0Y2hcblx0XHRmb3IodmFyIG5hbWUgaW4gX3dhdGNoZXMpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGRpZG4ndCBleGlzdCBhbmQgbm93IGl0IGRvZXMsIG9yIGl0IGRpZCBleGlzdFxuXHRcdFx0Ly9cdGFuZCBub3cgaXQgZG9lc24ndCwgb3IgdGhlIHZhbHVlcyBkb24ndCBtYXRjaFxuXHRcdFx0aWYoKCEobmFtZSBpbiBvbGQpICYmIG5hbWUgaW4gX2hhc2gpIHx8XG5cdFx0XHRcdChuYW1lIGluIG9sZCAmJiAhKG5hbWUgaW4gX2hhc2gpKSB8fFxuXHRcdFx0XHRvbGRbbmFtZV0gIT0gX2hhc2hbbmFtZV0pIHtcblxuXHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggY2FsbGJhY2sgYW5kIGNhbGwgaXRcblx0XHRcdFx0Zm9yKHZhciBmIG9mIF93YXRjaGVzW25hbWVdKSB7XG5cdFx0XHRcdFx0ZihfaGFzaFtuYW1lXSB8fCBudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEhhc2ggQ2hhbmdlZFxuICpcbiAqIENhbGxlZCB3aGVuIHRoZSBsb2NhdGlvbiBoYXNoIGhhcyBiZWVuIGFsdGVyZWQsIG5vdGlmaWVzIGFueSB3YXRjaGVycyBvZlxuICogaGFzaCB2YWx1ZXMgY2hhbmdpbmdcbiAqXG4gKiBAbmFtZSBfaGFzaENoYW5nZWRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaGFzaENoYW5nZWQoKSB7XG5cblx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgaGFzaFxuXHR2YXIgb2xkID0gVG9vbHMuY2xvbmUoX2hhc2gpO1xuXG5cdC8vIFJlLXBhcnNlIHRoZSBjdXJyZW50IGxvY2F0aW9uIGhhc2hcblx0X3BhcnNlSGFzaCgpO1xuXG5cdC8vIENoZWNrIHRoZSB3YXRjaGVzXG5cdF9jaGVja1dhdGNoZXMob2xkKTtcbn1cblxuLyoqXG4gKiBQYXJzZSBIYXNoXG4gKlxuICogUGFyc2VzIHRoZSBjdXJyZW50IGxvY2F0aW9uIGhhc2ggaW50byBhbiBvYmplY3RcbiAqXG4gKiBAbmFtZSBfcGFyc2VIYXNoXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BhcnNlSGFzaCgpIHtcblxuXHQvLyBJZiB0aGVyZSdzIGFueXRoaW5nIGluIHRoZSBoYXNoXG5cdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+IDEpIHtcblx0XHR2YXIgcmVnZXggPSAvKFtePSZdKyk9PyhbXiZdKikvZ1xuXHRcdHZhciBmaWVsZCA9IG51bGw7XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggcGFydCBmb3VuZFxuXHRcdHdoaWxlKGZpZWxkID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKSB7XG5cdFx0XHRfaGFzaFtmaWVsZFsxXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZmllbGRbMl0pLnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxudmFyIEhhc2ggPSB7XG5cblx0LyoqXG5cdCAqIEluaXRcblx0ICpcblx0ICogSW5pdGlhbGlzZXMgdGhlIGludGVybmFsIGhhc2ggYnkgZmV0Y2hpbmcgYW5kIHBhcnNpbmcgdGhlIGN1cnJlbnRcblx0ICogbG9jYXRpb24gaGFzaFxuXHQgKlxuXHQgKiBAbmFtZSBpbml0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRcImluaXRcIjogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBUcmFjayBjaGFuZ2VzXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIF9oYXNoQ2hhbmdlZCk7XG5cblx0XHQvLyBQYXJzZSB0aGUgY3VycmVudCBsb2NhdGlvbiBoYXNoXG5cdFx0X3BhcnNlSGFzaCgpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRcblx0ICpcblx0ICogUmV0dXJucyBhIGhhc2ggbmFtZVxuXHQgKlxuXHQgKiBAbmFtZSBnZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIG5hbWVcdFx0VGhlIG5hbWUgdG8gbG9vayBmb3Jcblx0ICogQHBhcmFtIHN0cmluZyBkZWZhdWx0X1x0VGhlIHZhbHVlIHRvIHJldHVybiBpZiB0aGUgbmFtZSBpc24ndCBmb3VuZFxuXHQgKiBAcmV0dXJuIHN0clxuXHQgKi9cblx0XCJnZXRcIjogZnVuY3Rpb24obmFtZSwgZGVmYXVsdF8pIHtcblxuXHRcdC8vIElmIHRoZSBuYW1lIGlzIGludmFsaWRcblx0XHRpZighX25hbWVSRS50ZXN0KG5hbWUpKSB7XG5cdFx0XHR0aHJvdyAnSW52YWxpZCBIYXNoIG5hbWUnO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlIGlzIGEgdmFsdWUgZm9yIHRoZSBuYW1lXG5cdFx0aWYodHlwZW9mIF9oYXNoW25hbWVdICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gX2hhc2hbbmFtZV07XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgcmV0dXJuIHRoZSBkZWZhdWx0XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdF87XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXRcblx0ICpcblx0ICogU2V0cyBhIHNwZWNpZmljIG5hbWVcblx0ICpcblx0ICogQG5hbWUgc2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cnxvYmplY3QgbmFtZVx0VGhlIG5hbWUgdG8gc2V0LCBvciBhbiBvYmplY3Qgb2YgbmFtZS92YWx1ZSBwYWlyc1xuXHQgKiBAcGFyYW0gc3RyIHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHNldCB0aGUgbmFtZSB0b1xuXHQgKi9cblx0XCJzZXRcIjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblxuXHRcdC8vIElmIHRoZSBuYW1lIGlzIG5vdCBhbiBvYmplY3Rcblx0XHRpZighVG9vbHMuaXNPYmplY3QobmFtZSkpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGlzIG5vdCBkZWZpbmVkXG5cdFx0XHRpZih0eXBlb2YgdmFsdWUgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dmFsdWUgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBKYXZhU2NyaXB0IGlzIGR1bWIgYW5kIHRoaW5rcyB7bmFtZTogdmFsdWV9IGlzIHRoZSBzYW1lIGFzXG5cdFx0XHQvL1x0e1wibmFtZVwiOiB2YWx1ZX1cblx0XHRcdHZhciB0ZW1wID0gbmFtZTtcblx0XHRcdG5hbWUgPSB7fTtcblx0XHRcdG5hbWVbdGVtcF0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHQvLyBTdG9yZSB0aGUgb2xkIGhhc2hcblx0XHR2YXIgb2xkID0gVG9vbHMuY2xvbmUoX2hhc2gpO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIG5hbWVcblx0XHRmb3IodmFyIG4gaW4gbmFtZSkge1xuXG5cdFx0XHQvLyBJZiB0aGUgbmFtZSBpcyBpbnZhbGlkXG5cdFx0XHRpZighX25hbWVSRS50ZXN0KG4pKSB7XG5cdFx0XHRcdHRocm93ICdJbnZhbGlkIEhhc2ggbmFtZTogJyArIG47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGdvdCBudWxsLCBkZWxldGUgdGhlIG5hbWVcblx0XHRcdGlmKG5hbWVbbl0gPT0gbnVsbCkge1xuXHRcdFx0XHRkZWxldGUgX2hhc2hbbl07XG5cdFx0XHR9XG5cdFx0XHQvLyBFbHNlLCBzZXQgdGhlIG5ldyB2YWx1ZVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9oYXNoW25dID0gbmFtZVtuXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDaGVjayBhbnlvbmUgd2F0Y2hpbmcgdGhpcyB2YWx1ZVxuXHRcdF9jaGVja1dhdGNoZXMob2xkKTtcblxuXHRcdC8vIEluaXQgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIHBhcnRzXG5cdFx0dmFyIGhhc2ggPSBbXTtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBuYW1lXG5cdFx0Zm9yKHZhciBrIGluIF9oYXNoKSB7XG5cdFx0XHRoYXNoLnB1c2goayArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChfaGFzaFtrXSkpO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRoZSB3aW5kb3cgbG9jYXRpb24gaGFzaFxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaC5qb2luKCcmJyk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFVud2F0Y2hcblx0ICpcblx0ICogUmVtb3ZlcyBhIGNhbGxiYWNrIGZyb20gdGhlIHdhdGNoZXNcblx0ICpcblx0ICogQG5hbWUgdW53YXRjaFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgbmFtZVx0XHRcdFRoZSBuYW1lIG9mIHRoZSB2YWx1ZSB0byBzdG9wIHdhdGNoaW5nXG5cdCAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgdG8gcmVtb3ZlXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJ1bndhdGNoXCI6IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBuYW1lXG5cdFx0aWYobmFtZSBpbiBfd2F0Y2hlcykge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIHRoZSBjYWxsYmFja3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBuYW1lXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3dhdGNoZXNbbmFtZV0ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBJZiB3ZSBmaW5kIHRoZSBjYWxsYmFja1xuXHRcdFx0XHRpZihfd2F0Y2hlc1tuYW1lXVtpXSA9PSBjYWxsYmFjaykge1xuXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGl0XG5cdFx0XHRcdFx0X3dhdGNoZXNbbmFtZV0uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogV2F0Y2hcblx0ICpcblx0ICogQWRkcyBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIG5hbWUgd2hpY2ggd2lsbCBiZSBjYWxsZWQgaWYgdGhlIG5hbWUgaXNcblx0ICogYWRkZWQsIGRlbGV0ZWQsIG9yIGNoYW5nZWRcblx0ICpcblx0ICogQG5hbWUgd2F0Y2hcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIG5hbWVcdFx0XHRUaGUgbmFtZSBvZiB0aGUgdmFsdWUgdG8gd2F0Y2hcblx0ICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRcIndhdGNoXCI6IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG5cblx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIG5hbWVcblx0XHRpZihuYW1lIGluIF93YXRjaGVzKSB7XG5cblx0XHRcdC8vIEdvIHRocm91Z2ggdGhlIGNhbGxiYWNrcyBhc3NvY2lhdGVkIHdpdGggdGhlIG5hbWVcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfd2F0Y2hlc1tuYW1lXS5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0aGUgY2FsbGJhY2sgdGhlcmUncyBubyBuZWVkIHRvIHN0b3JlIGl0XG5cdFx0XHRcdGlmKF93YXRjaGVzW25hbWVdW2ldID09IGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBjYWxsYmFja3MgZm9yIHRoZSBuYW1lXG5cdFx0ZWxzZSB7XG5cdFx0XHRfd2F0Y2hlc1tuYW1lXSA9IFtdO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgY2FsbGJhY2sgdG8gdGhlIHdhdGNoZXNcblx0XHRfd2F0Y2hlc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwiLyoqXG4gKiBMb2FkZXJcbiAqXG4gKiBTaG93cyBhIGxvYWRpbmcgZ3JhcGhpYyBkdXJpbmcgcmVxdWVzdHMvc3RhcnR1cFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjRcbiAqL1xuXG4vLyBLZWVwIHRyYWNrIG9mIHRoZSBzaG93L2hpZGUgY2FsbHNcbi8vXHRhc3N1bWUgdGhlIGxvYWRlciBzdGFydGVkIG9uXG52YXIgX2NvdW50ID0gMTtcblxuLy8gR2V0IHRoZSBET00gZWxlbWVudFxudmFyIF9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRoaWRlOiBmdW5jdGlvbigpIHtcblxuXHRcdC8vIERlY3JlbWVudCB0aGUgY291bnRcblx0XHRfY291bnQtLTtcblxuXHRcdC8vIElmIHRoaXMgaXMgdGhlIGxhc3Qgb25lXG5cdFx0aWYoX2NvdW50ID09IDApIHtcblx0XHRcdF9lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBTaG93IHRoZSBsb2FkZXJcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJbmNyZW1lbnQgdGhlIGNvdW50XG5cdFx0X2NvdW50Kys7XG5cblx0XHQvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBvbmVcblx0XHRpZihfY291bnQgPT0gMSkge1xuXHRcdFx0X2VsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdH1cblx0fVxufVxuIiwiLyoqXG4gKiBTZXJ2aWNlc1xuICpcbiAqIEhhbmRsZXMgY29ubmVjdGluZyB0byBhbmQgcmV0cmlldmluZyBkYXRhIGZyb20gc2VydmljZXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gRXh0ZXJuYWwgbW9kdWxlc1xudmFyICQgPSByZXF1aXJlKCcuLi8zcmQvanF1ZXJ5LmFqYXguanMnKTtcblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgQ29va2llcyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvY29va2llcy5qcycpO1xuXG4vLyBTZXJ2aWNlcyBkb21haW5cbnZhciBfZG9tYWluID0gJyc7XG5cbi8vIERlZmF1bHQgZXJyb3IgZnVuY3Rpb25cbnZhciBfZXJyb3IgPSBmdW5jdGlvbigpIHt9XG5cbi8qKlxuICogQ2xlYXJcbiAqXG4gKiBDbGVhcnMgdGhlIHNlc3Npb24gZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCBjb29raWVzXG4gKlxuICogQG5hbWUgX2NsZWFyXG4gKiBhY2Nlc3MgcHJpdmF0ZVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9jbGVhcigpIHtcblxuXHQvLyBEZWxldGUgZnJvbSBsb2NhbFN0b3JhZ2Vcblx0ZGVsZXRlIGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXTtcblxuXHQvLyBEZWxldGUgdGhlIGNvb2tpZVxuXHRDb29raWVzLnJlbW92ZSgnX3Nlc3Npb24nLCAnLicgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsICcvJyk7XG59XG5cbi8qKlxuICogUmVxdWVzdFxuICpcbiAqIEhhbmRsZXMgYWN0dWFsIHJlcXVlc3RzXG4gKlxuICogQG5hbWUgcmVxdWVzdFxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gc3RyaW5nIG1ldGhvZFx0XHRcdFRoZSBtZXRob2QgdXNlZCB0byBzZW5kIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0gc3RyaW5nIHVybFx0XHRcdFRoZSBmdWxsIFVSTCB0byB0aGUgc2VydmljZS9ub3VuXG4gKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG4gKiBAcGFyYW0gc3RyaW5nIGF1dGhcdFx0XHRPcHRpb25hbCBBdXRob3JpemF0aW9uIHRva2VuXG4gKiBAcmV0dXJuIHhoclxuICovXG5mdW5jdGlvbiBfcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSkge1xuXG5cdC8vIEdlbmVyYXRlIHRoZSBhamF4IGNvbmZpZ1xuXHR2YXIgb0NvbmZpZyA9IHtcblx0XHRcImJlZm9yZVNlbmRcIjogZnVuY3Rpb24oeGhyLCBzZXR0aW5ncykge1xuXHRcdFx0eGhyLl91cmwgPSB1cmw7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgYSBzZXNzaW9uXG5cdFx0XHRpZignX3Nlc3Npb24nIGluIGxvY2FsU3RvcmFnZSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcImNvbnRlbnRUeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuXHRcdFwiZXJyb3JcIjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG5cblx0XHRcdC8vIElmIHdlIGdvdCBhbiBBdXRob3JpemF0aW9uIGVycm9yXG5cdFx0XHRpZih4aHIuc3RhdHVzID09IDQwMSkge1xuXG5cdFx0XHRcdC8vIENsZWFyIHRoZSBjdXJyZW50IHRva2VuXG5cdFx0XHRcdF9jbGVhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQdXQgdGhlIGVycm9yIGluIHRoZSBjb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKG1ldGhvZCArICcgJyArIHhoci5fdXJsICsgJyByZXR1cm5lZDogJyArIGVycm9yKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHRoZSB4aHIgdG8gdGhlIGVycm9yIGNhbGxiYWNrXG5cdFx0XHRfZXJyb3IoeGhyKTtcblx0XHR9LFxuXHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcInVybFwiOiB1cmxcblx0fVxuXG5cdC8vIElmIGl0J3MgYSBnZXQgcmVxdWVzdFxuXHRpZihtZXRob2QgPT0gJ2dldCcpIHtcblx0XHRpZih0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdG9Db25maWdbJ2RhdGEnXSA9IFwiZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdFx0fVxuXHR9XG5cdC8vIEVsc2UgaXQncyBhbnkgb3RoZXIgbWV0aG9kXG5cdGVsc2Uge1xuXHRcdG9Db25maWcuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cblx0Ly8gTWFrZSB0aGUgcmVxdWVzdCBhbmQgcmV0dXJuIHRoZSB4aHJcblx0cmV0dXJuICQuYWpheChvQ29uZmlnKTtcbn1cblxuLyoqXG4gKiBTdG9yZVxuICpcbiAqIFN0b3JlcyB0aGUgc2Vzc2lvbiB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlIGFuZCBjb29raWVzXG4gKlxuICogQG5hbWUgX3N0b3JlXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSBzdHJpbmcgdG9rZW5cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc3RvcmUodG9rZW4pIHtcblxuXHQvLyBTZXQgdGhlIHNlc3Npb24gaW4gbG9jYWxTdG9yYWdlXG5cdGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSA9IHRva2VuXG5cblx0Ly8gU2V0IHRoZSBzZXNzaW9uIGluIGEgY29va2llXG5cdENvb2tpZXMuc2V0KCdfc2Vzc2lvbicsIHRva2VuLCA4NjQwMCwgJy4nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLCAnLycpO1xufVxuXG4vKipcbiAqIFN1Y2Nlc3NcbiAqXG4gKiBIYW5kbGVzIHN1Y2Nlc3MgZnJvbSB4aHJcbiAqXG4gKiBAbmFtZSBfc3VjY2Vzc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gc3RyaW5nIHJlc1x0XHRcdFRoZSByZXN1bHQgZnJvbSB0aGUgc2VydmVyXG4gKiBAcGFyYW0gc3RyaW5nIHN0YXR1c1x0XHRcdFRoZSBzdGF0dXMgb2YgdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSB4aHIgeGhyXHRcdFx0XHRUaGUgcmVxdWVzdCBvYmplY3RcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc3VjY2VzcyhyZXMsIHN0YXR1cywgeGhyKSB7XG5cblx0Ly8gSWYgdGhlIHJlc3VsdCBpcyBhIHN0cmluZ1xuXHRpZih0eXBlb2YgcmVzID09ICdzdHJpbmcnKSB7XG5cblx0XHQvLyBUcnkgdG8gY29udmVyIGl0IHRvIEpTT05cblx0XHR0cnkge1xuXHRcdFx0cmVzXHQ9IEpTT04ucGFyc2UocmVzKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtZXRob2QgKyAnICcgKyB4aHIuX3VybCArICcgcmV0dXJuZWQgaW52YWxpZCBKU09OOiAnICsgZXJyKTtcblx0XHRcdHJlcyA9IHtcImVycm9yXCI6e1wiY29kZVwiOjAsXCJtc2dcIjplcnJ9fTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBTZXJ2aWNlc1xuICovXG52YXIgU2VydmljZXMgPSB7XG5cblx0LyoqXG5cdCAqIEluaXRcblx0ICpcblx0ICogSW5pdGlhbGlzZXMgdGhlIFNlcnZpY2VzIG1vZHVsZXNcblx0ICpcblx0ICogQG5hbWUgaW5pdFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHN1YmRvbWFpblx0XHRUaGUgc3ViLWRvbWFpbiBzZXJ2aWNlcyBjYW4gYmUgcmVhY2hlZCB0aHJvdWdoXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJpbml0XCI6IGZ1bmN0aW9uKHN1YmRvbWFpbiwgZXJyb3IpIHtcblxuXHRcdC8vIFN0b3JlIHRoZSBmdWxsIGRvbWFpbiBuYW1lIGZvciBzZXJ2aWNlIGNhbGxzXG5cdFx0X2RvbWFpbiA9ICcvLycgKyBzdWJkb21haW4gK1xuXHRcdFx0XHRcdCcuJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArXG5cdFx0XHRcdFx0Jy8nO1xuXG5cdFx0Ly8gRG8gd2UgaGF2ZSBhIHNlc3Npb24gaW4gc3RvcmFnZVxuXHRcdGlmKCdfc2Vzc2lvbicgaW4gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSkge1xuXHRcdFx0dGhpcy5zZXNzaW9uKGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSlcblx0XHR9XG5cblx0XHQvLyBFbHNlIGRvIHdlIGhhdmUgb25lIGluIGEgY29va2llXG5cdFx0ZWxzZSB7XG5cdFx0XHR2YXIgY29va2llID0gQ29va2llcy5nZXQoJ19zZXNzaW9uJyk7XG5cdFx0XHRpZihjb29raWUpIHtcblx0XHRcdFx0dGhpcy5zZXNzaW9uKGNvb2tpZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYW4gZXJyb3Igd2FzIHBhc3NlZFxuXHRcdGlmKHR5cGVvZiBlcnJvciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdF9lcnJvciA9IGVycm9yO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQ3JlYXRlXG5cdCAqXG5cdCAqIENhbGxzIHRoZSBjcmVhdGUgYWN0aW9uIG9uIGEgc3BlY2lmaWMgc2VydmljZSBub3VuZVxuXHQgKlxuXHQgKiBAbmFtZSBjcmVhdGVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcImNyZWF0ZVwiOiBmdW5jdGlvbihzZXJ2aWNlLCBub3VuLCBkYXRhKSB7XG5cdFx0cmV0dXJuIF9yZXF1ZXN0KCdwb3N0JywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogRGVsZXRlXG5cdCAqXG5cdCAqIENhbGxzIHRoZSBkZWxldGUgYWN0aW9uIG9uIGEgc3BlY2lmaWMgc2VydmljZSBub3VuZVxuXHQgKlxuXHQgKiBAbmFtZSBkZWxldGVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcImRlbGV0ZVwiOiBmdW5jdGlvbihzZXJ2aWNlLCBub3VuLCBkYXRhKSB7XG5cdFx0cmV0dXJuIF9yZXF1ZXN0KCdkZWxldGUnLCBfZG9tYWluICsgc2VydmljZSArICcvJyArIG5vdW4sIGRhdGEpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBSZWFkXG5cdCAqXG5cdCAqIENhbGxzIHRoZSByZWFkIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgcmVhZFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gY2FsbFxuXHQgKiBAcGFyYW0gc3RyaW5nIG5vdW5cdFx0XHRUaGUgbm91biB0byBjYWxsIG9uIHRoZSBzZXJ2aWNlXG5cdCAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2Vcblx0ICogQHJldHVybiB4aHJcblx0ICovXG5cdFwicmVhZFwiOiBmdW5jdGlvbihzZXJ2aWNlLCBub3VuLCBkYXRhKSB7XG5cdFx0cmV0dXJuIF9yZXF1ZXN0KCdnZXQnLCBfZG9tYWluICsgc2VydmljZSArICcvJyArIG5vdW4sIGRhdGEpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXNzaW9uXG5cdCAqXG5cdCAqIFNldCBvciBnZXQgdGhlIHNlc3Npb24gdG9rZW5cblx0ICpcblx0ICogQG5hbWUgc2Vzc2lvblxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHRva2VuXHRcdFx0VGhlIHRva2VuIHRvIHN0b3JlXG5cdCAqIEByZXR1cm4gdm9pZHxzdHJcblx0ICovXG5cdFwic2Vzc2lvblwiOiBmdW5jdGlvbih0b2tlbikge1xuXG5cdFx0Ly8gSWYgd2UgYXJlIHNldHRpbmcgdGhlIHNlc3Npb25cblx0XHRpZih0eXBlb2YgdG9rZW4gIT09ICd1bmRlZmluZWQnKSB7XG5cblx0XHRcdC8vIElmIG51bGwgd2FzIHBhc3NlZCwgZGVsZXRlIHRoZSBzZXNzaW9uXG5cdFx0XHRpZih0b2tlbiA9PSBudWxsKSB7XG5cdFx0XHRcdF9jbGVhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlLCBzZXQgdGhlIHNlc3Npb25cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfc3RvcmUodG9rZW4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgYXJlIHJldHVybmluZyB0aGUgc2Vzc2lvblxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuICgnX3Nlc3Npb24nIGluIGxvY2FsU3RvcmFnZSkgP1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10gOlxuXHRcdFx0XHQnJztcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFVwZGF0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgdXBkYXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgdXBkYXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJ1cGRhdGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgncHV0JywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fVxufTtcblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gU2VydmljZXM7XG4iLCIvKipcbiAqIFRvb2xzXG4gKlxuICogVXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGJlbG9uZyB0byBhbnkgc3BlY2lmaWMgbW9kdWxlXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNVxuICovXG5cbi8qKlxuICogVG9vbHNcbiAqL1xudmFyIFRvb2xzID0ge1xuXG5cdC8qKlxuXHQgKiBDbG9uZVxuXHQgKlxuXHQgKiBEZWVwIGNsb25lIGFueSB0eXBlIG9mIG9iamVjdCwgcmV0dXJuaW5nIGEgbmV3IG9uZVxuXHQgKlxuXHQgKiBAbmFtZSBjbG9uZVxuXHQgKiBAcGFyYW0gbWl4ZWQgb1x0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIGNsb25lXG5cdCAqIEByZXR1cm4gbWl4ZWRcblx0ICovXG5cdGNsb25lOiBmdW5jdGlvbihvKSB7XG5cdFx0Ly8gTmV3IHZhclxuXHRcdHZhciBuID0gbnVsbDtcblxuXHRcdC8vIElmIGl0J3MgYW4gYXJyYXlcblx0XHRpZihBcnJheS5pc0FycmF5KCkpIHtcblx0XHRcdG4gPSBbXTtcblx0XHRcdGZvcih2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdG4ucHVzaChUb29scy5jbG9uZShvW2tdKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0XG5cdFx0ZWxzZSBpZihUb29scy5pc09iamVjdChvKSkge1xuXHRcdFx0biA9IHt9XG5cdFx0XHRmb3IodmFyIGsgaW4gbykge1xuXHRcdFx0XHRuW2tdID0gVG9vbHMuY2xvbmUob1trXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgY29weSBhcyBpc1xuXHRcdGVsc2Uge1xuXHRcdFx0biA9IG87XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBuZXcgdmFyXG5cdFx0cmV0dXJuIG47XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbXBhcmVcblx0ICpcblx0ICogQ29tcGFyZXMgdHdvIHZhbHVlcyBvZiBhbnkgdHlwZSB0byBzZWUgaWYgdGhleSBjb250YWluIHRoZSBzYW1lXG5cdCAqIGRhdGEgb3Igbm90XG5cdCAqXG5cdCAqIEBuYW1lIGNvbXBhcmVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIHYxXHRcdFx0XHRUaGUgZmlyc3QgdmFsdWVcblx0ICogQHBhcmFtIG1peGVkIHYyXHRcdFx0XHRUaGUgc2Vjb25kIHZhbHVlXG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0Y29tcGFyZSh2MSwgdjIpIHtcblxuXHRcdC8vIElmIHRoZXkncmUgYm90aCBhcnJheXNcblx0XHRpZihBcnJheS5pc0FycmF5KHYxKSAmJiBBcnJheS5pc0FycmF5KHYyKSkge1xuXG5cdFx0XHQvLyBJZiB0aGV5IGRvbid0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoXG5cdFx0XHRpZih2MS5sZW5ndGggIT0gdjIubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGFyZSB0aGUgdmFsdWVzXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdjEubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYoIVRvb2xzLmNvbXBhcmUodjFbaV0sIHYyW2ldKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgdGhleSdyZSBib3RoIG9iamVjdHNcblx0XHRlbHNlIGlmKFRvb2xzLmlzT2JqZWN0KHYxKSAmJiBUb29scy5pc09iamVjdCh2MikpIHtcblxuXHRcdFx0Ly8gSWYgdGhleSBkb24ndCBoYXZlIHRoZSBzYW1lIGtleXNcblx0XHRcdGlmKCFUb29scy5jb21wYXJlKE9iamVjdC5rZXlzKHYxKS5zb3J0KCksIE9iamVjdC5rZXlzKHYyKS5zb3J0KCkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGFyZSBlYWNoIGtleVxuXHRcdFx0Zm9yKHZhciBrIGluIHYxKSB7XG5cdFx0XHRcdGlmKCFUb29scy5jb21wYXJlKHYxW2tdLCB2MltrXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlLCBjb21wYXJlIGFzIGlzXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZih2MSAhPT0gdjIpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJldHVybiBlcXVhbFxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBFbXB0eVxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHR5cGUgaXMgZW1wdHlcblx0ICpcblx0ICogQG5hbWUgZW1wdHlcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YWx1ZSB0byBjaGVjaywgY2FuIGJlIG9iamVjdCwgYXJyYXksIHN0cmluZywgZXRjXG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0ZW1wdHk6IGZ1bmN0aW9uKG0pIHtcblxuXHRcdC8vIElmIGl0J3MgYW4gb2JqZWN0XG5cdFx0aWYoVG9vbHMuaXNPYmplY3QobSkpIHtcblx0XHRcdGZvcih2YXIgcCBpbiBtKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgaXQncyBhbiBhcnJheSBvciBhIHN0cmluZ1xuXHRcdGVsc2UgaWYoQXJyYXkuaXNBcnJheShtKSB8fCB0eXBlb2YgbSA9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIG0ubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBFbHNlXG5cdFx0ZWxzZSB7XG5cblx0XHRcdC8vIElmIGl0J3MgbnVsbCBvciB1bmRlZmluZWRcblx0XHRcdGlmKHR5cGVvZiBtID09ICd1bmRlZmluZWQnIHx8IG0gPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSByZXR1cm4gZmFsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIElzIERlY2ltYWxcblx0ICpcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YXJpYWJsZSBpcyBhIG51bWJlclxuXHQgKlxuXHQgKiBAbmFtZSBpc0RlY2ltYWxcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byB0ZXN0XG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0aXNEZWNpbWFsOiBmdW5jdGlvbihtKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBtID09ICdudW1iZXInO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBJcyBJbnRlZ2VyXG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgYSB0cnVlIGludGVnZXJcblx0ICpcblx0ICogQG5hbWUgaXNJbnRlZ2VyXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFyaWFibGUgdG8gdGVzdFxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGlzSW50ZWdlcjogZnVuY3Rpb24obSkge1xuXHRcdHJldHVybiBtID09PSArbSAmJiBtID09PSAobXwwKTtcblx0fSxcblxuXHQvKipcblx0ICogSXMgT2JqZWN0XG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgYSB0cnVlIG9iamVjdFxuXHQgKlxuXHQgKiBAbmFtZSBpc09iamVjdFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgbVx0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIHRlc3Rcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRpc09iamVjdDogZnVuY3Rpb24obSkge1xuXHRcdGlmKG0gPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0XHRpZih0eXBlb2YgbSAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXHRcdGlmKEFycmF5LmlzQXJyYXkobSkpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKipcblx0ICogT2JqZWN0IE1hcFxuXHQgKlxuXHQgKiBXb3JrcyBsaWtlIG1hcCBmb3IgYXJyYXlzLCBidXQgaXRlcmF0ZXMgb3ZlciBhbiBvYmplY3Rcblx0ICpcblx0ICogQG5hbWUgb21hcFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb1x0XHRcdFRoZSBvYmplY3QgdG8gbWFwXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHRUaGUgZnVuY3Rpb24gdG8gY2FsbCBlYWNoIGl0ZXJhdGlvblxuXHQgKiBAcmV0dXJuIGFycmF5XG5cdCAqL1xuXHRvbWFwOiBmdW5jdGlvbihvLCBjYWxsYmFjaykge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRmb3IodmFyIGsgaW4gbykge1xuXHRcdFx0cmV0LnB1c2goY2FsbGJhY2sob1trXSwgaykpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBVVUlEIHY0XG5cdCAqXG5cdCAqIFJldHVybnMgYSBwc3VlZG8gcmFuZG9tIHN0cmluZyBpbiBVVUlEIGZvcm1hdCAoTk9UIEFDVFVBTExZIEEgVVVJRClcblx0ICpcblx0ICogQG5hbWUgdXVpZHY0XG5cdCAqIEByZXR1cm4gc3RyXG5cdCAqL1xuXHR1dWlkdjQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoWzFlN10rLTFlMystNGUzKy04ZTMrLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGMgPT5cblx0XHRcdChjIF4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAxNSA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXG5cdFx0KVxuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IFRvb2xzO1xuIiwiLyoqXG4gKiBXZWJzb2NrZXRcbiAqXG4gKiBTaW1wbGlmaWVzIHVzaW5nIGEgd2Vic29ja2V0XG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxNy0wNS0xN1xuICovXG5cbi8vIEV4cG9ydCB0aGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsLCBjb25mKSB7XG5cblx0Ly8gSWYgd2UgY2FuJ3QgaGFuZGxlIHdlYnNvY2tldHNcblx0aWYoISgnV2ViU29ja2V0JyBpbiB3aW5kb3cpKSB7XG5cdFx0Y29uc29sZS5lcnJvcignd2Vic29ja2V0OiBXZWJTb2NrZXRzIG5vdCBzdXBwb3J0ZWQnKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJZiBjb25mIGlzIG5vdCBkZWZpbmVkXG5cdGlmKHR5cGVvZiBjb25mID09ICd1bmRlZmluZWQnKSB7XG5cdFx0Y29uZiA9IHt9XG5cdH1cblxuXHQvLyBFbHNlLCBpZiBpdCdzIG5vdCBhbiBvYmplY3QsIHdlIGhhdmUgYSBwcm9ibGVtXG5cdGVsc2UgaWYodHlwZW9mIGNvbmYgIT0gJ29iamVjdCcpIHtcblx0XHRjb25zb2xlLmVycm9yKCd3ZWJzb2NrZXQ6IHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIENyZWF0ZSB0aGUgV2ViU29ja2V0XG5cdHZhciBvU29jayA9IG5ldyBXZWJTb2NrZXQodXJsKTtcblxuXHQvLyBBZGQgdGhlIFVSTCB0byB0aGUgaW5zdGFuY2Vcblx0b1NvY2sudXJsID0gdXJsO1xuXG5cdC8vIFNldCB0aGUgb3BlbiBjYWxsYmFja1xuXHRvU29jay5vbm9wZW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIElmIGFuIG9wZW4gY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ29wZW4nIGluIGNvbmYpIHtcblx0XHRcdGNvbmZbJ29wZW4nXShvU29jayk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBvcGVuZWQnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIG1lc3NhZ2UgY2FsbGJhY2tcblx0b1NvY2sub25tZXNzYWdlXHQ9IGZ1bmN0aW9uKGV2KSB7XG5cblx0XHQvLyBJZiBhIG1lc3NhZ2UgY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ21lc3NhZ2UnIGluIGNvbmYpIHtcblx0XHRcdGNvbmZbJ21lc3NhZ2UnXShvU29jaywgZXYpO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGp1c3QgbG9nIHRoZSBldmVudFxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3dlYnNvY2tldDogbWVzc2FnZSByZWNlaXZlZCwgXCInICsgZXYuZGF0YSArICdcIicpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgZXJyb3IgY2FsbGJhY2tcblx0b1NvY2sub25lcnJvciA9IGZ1bmN0aW9uKGV2KSB7XG5cblx0XHQvLyBJZiBhbiBlcnJvciBjYWxsYmFjayBpcyBzZXRcblx0XHRpZignZXJyb3InIGluIGNvbmYpIHtcblx0XHRcdGNvbmZbJ2Vycm9yJ10ob1NvY2ssIGV2KTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IGVycm9yLCBcIicgKyBKU09OLnN0cmluZ2lmeShldikgKyAnXCInKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGNsb3NlIGNhbGxiYWNrXG5cdG9Tb2NrLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIElmIGEgY2xvc2UgY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ2Nsb3NlJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydjbG9zZSddKG9Tb2NrKTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IGNsb3NlZCcpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgc29ja2V0XG5cdHJldHVybiBvU29jaztcbn1cbiIsIi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgc3BlY2lmaWNcbnZhciBSZXF1ZXN0cyA9IHJlcXVpcmUoJy4vcmVxdWVzdHMuanMnKTtcblxuLy8gQ29tcG9uZW50c1xudmFyIFNpdGUgPSByZXF1aXJlKCcuL3JlYWN0L3NpdGUuanN4Jyk7XG5cbihmdW5jdGlvbigpIHtcblxuXHQvLyBSZW5kZXIgdGhlIExvZ2luQ29tcG9uZW50XG5cdFJlYWN0RE9NLnJlbmRlcihcblx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFNpdGUsIHt9KSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QnKVxuXHQpO1xuXG5cdC8vIEluaXQgdGhlIHJlcXVlc3RzXG5cdFJlcXVlc3RzLmluaXQoKTtcblxuXHQvLyBJbml0IHRoZSBzZXJ2aWNlc1xuXHRTZXJ2aWNlcy5pbml0KFwic2VydmljZXNcIiwgZnVuY3Rpb24oeGhyKSB7XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSA0MDEsIGxldCBldmVyeW9uZSBrbm93IHdlIHNpZ25lZCBvdXRcblx0XHRpZih4aHIuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ1lvdSBoYXZlIGJlZW4gc2lnbmVkIG91dCEnKTtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWdub3V0Jyk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBJZiB3ZSBoYXZlIGEgc2Vzc2lvbiwgZmV0Y2ggdGhlIHRocm93ZXJcblx0aWYoU2VydmljZXMuc2Vzc2lvbigpKSB7XG5cdFx0TG9hZGVyLnNob3coKTtcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ3Nlc3Npb24nLCB7fSkuZG9uZShyZXMgPT4ge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicsIHJlcy5kYXRhKTtcblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRMb2FkZXIuaGlkZSgpO1xuXG5cdC8vIE1ha2UgRXZlbnRzIGF2YWlsYWJsZSBmcm9tIGNvbnNvbGVcblx0d2luZG93LkV2ZW50cyA9IEV2ZW50cztcbn0pKCk7XG5cbi8vIEV4cG9ydFxubW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuIiwiLyoqXG4gKiBGb3JtcyBNb2R1bGVcbiAqXG4gKiBDbGFzc2VzIGFuZCBmdW5jdGlvbnMgdXNlZCBieSBhbGwgZm9ybXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgRlVFTCBmb3IgdGhlIEZJUkVcbiAqIEBjcmVhdGUgMjAxOC0xMi0wOFxuICovXG5cbi8vIEVycm9yIGNsYXNzIGRlZmluZVxudmFyIEVSUk9SX0NMQVNTID0gJ2Vycm9yJztcblxuLyoqXG4gKiBBZGQgQ2xhc3NcbiAqXG4gKiBBZGRzIHRoZSBlcnJvciBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnRcbiAqXG4gKiBAbmFtZSBfYWRkQ2xhc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIEVsZW1lbnQgZWxcdFRoZSBlbGVtZW50IHRvIHJlbW92ZSB0aGUgY2xhc3MgZnJvbVxuICovXG5mdW5jdGlvbiBfYWRkQ2xhc3MoZWwpIHtcblx0aWYoIWVsLmNsYXNzTmFtZSkge1xuXHRcdGVsLmNsYXNzTmFtZSA9IEVSUk9SX0NMQVNTO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBuYW1lcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXHRcdGlmKG5hbWVzLmluZGV4T2YoRVJST1JfQ0xBU1MpID09IC0xKSB7XG5cdFx0XHRuYW1lcy5wdXNoKEVSUk9SX0NMQVNTKTtcblx0XHRcdGVsLmNsYXNzTmFtZSA9IG5hbWVzLmpvaW4oJyAnKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgQ2xhc3NcbiAqXG4gKiBSZW1vdmVzIHRoZSBlcnJvciBjbGFzcyBuYW1lIGZyb20gYW4gZWxlbWVudFxuICpcbiAqIEBuYW1lIF9yZW1vdmVDbGFzc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gRWxlbWVudCBlbFx0VGhlIGVsZW1lbnQgdG8gcmVtb3ZlIHRoZSBjbGFzcyBmcm9tXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3JlbW92ZUNsYXNzKGVsKSB7XG5cdGlmKGVsLmNsYXNzTmFtZS5pbmNsdWRlcyhFUlJPUl9DTEFTUykpIHtcblx0XHRsZXQgbmFtZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRuYW1lcy5zcGxpY2UobmFtZXMuaW5kZXhPZihFUlJPUl9DTEFTUyksIDEpO1xuXHRcdGVsLmNsYXNzTmFtZSA9IG5hbWVzLmpvaW4oJyAnKVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgQmFzZSBOb2RlIENvbXBvbmVudFxuY2xhc3MgX0Jhc2VOb2RlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGVycm9ycyhlcnJvcnMpIHtcblx0XHRmb3IobGV0IGsgaW4gZXJyb3JzKSB7XG5cdFx0XHRpZih0aGlzLnJlZnNba10uZXJyb3JzKSB7XG5cdFx0XHRcdHRoaXMucmVmc1trXS5lcnJvcnMoZXJyb3JzW2tdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9hZGRDbGFzcyh0aGlzLnJlZnNba10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIEFycmF5IEZvcm0gQ29tcG9uZW50XG5jbGFzcyBBcnJheU5vZGUgZXh0ZW5kcyBfQmFzZU5vZGUge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cblx0XHQvLyBJbml0IHRoZSByZXR1cm5cblx0XHR2YXIgdmFsdWUgPSBbXVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBhbGwgcmVmc1xuXHRcdGZvcih2YXIgciBpbiB0aGlzLnJlZnMpIHtcblx0XHRcdGlmKHRoaXMucmVmc1tyXS50eXBlICYmIHRoaXMucmVmc1tyXS50eXBlID09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0dmFsdWUucHVzaCh0aGlzLnJlZnNbcl0uY2hlY2tlZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZS5wdXNoKHRoaXMucmVmc1tyXS52YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSB2YWx1ZXNcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRlcnJvcnMobXNnKSB7XG5cdFx0aWYodGhpcy5yZWZzLmVsLmVycm9ycykge1xuXHRcdFx0dGhpcy5yZWZzLmVsLmVycm9ycyhtc2cpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYWRkQ2xhc3ModGhpcy5yZWZzLmVsKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVmcy5lbC52YWx1ZTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2KSB7XG5cdFx0dGhpcy5yZWZzLmVsLnZhbHVlID0gdjtcblx0XHRpZih0aGlzLnZhbHVlU2V0KSB7XG5cdFx0XHR0aGlzLnZhbHVlU2V0KCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgYmFzZSBDb21wb25lbnRcbmNsYXNzIFBhcmVudCBleHRlbmRzIF9CYXNlTm9kZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJldHVyblxuXHRcdHZhciB2YWx1ZSA9IHt9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCByZWZzXG5cdFx0Zm9yKHZhciByIGluIHRoaXMucmVmcykge1xuXHRcdFx0aWYodGhpcy5yZWZzW3JdLnR5cGUgJiYgdGhpcy5yZWZzW3JdLnR5cGUgPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHR2YWx1ZVtyXSA9IHRoaXMucmVmc1tyXS5jaGVja2VkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbcl0gPSB0aGlzLnJlZnNbcl0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSB2YWx1ZVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFycmF5Tm9kZTogQXJyYXlOb2RlLFxuXHROb2RlOiBOb2RlLFxuXHRQYXJlbnQ6IFBhcmVudCxcblx0ZXJyb3JBZGQ6IF9hZGRDbGFzcyxcblx0ZXJyb3JSZW1vdmU6IF9yZW1vdmVDbGFzcyxcblx0ZXJyb3JGb2N1czogZnVuY3Rpb24oZXYpIHtcblxuXHRcdC8vIElmIHRoZSBzcGVjaWFsIGVsZW1lbnRzIHByb3AgaXMgc2V0XG5cdFx0aWYoZXYuZWxlbWVudHMpIHtcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBldi5lbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRfcmVtb3ZlQ2xhc3MoZXYuZWxlbWVudHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGFzc3VtaW5nIGN1cnJlbnRUYXJnZXRcblx0XHRlbHNlIHtcblx0XHRcdF9yZW1vdmVDbGFzcyhldi5jdXJyZW50VGFyZ2V0KTtcblx0XHR9XG5cdH1cbn07XG4iLCIvKipcbiAqIElucHV0IEVudGVyXG4gKlxuICogQW4gaW5wdXQgYm94IHRoYXQgaGFuZGxlcyBFbnRlciBrZXkgcHJlc3NlcyBhbmQgc2VuZHMgdGhlbSB0byBhIG9uRW50ZXJcbiAqIGNhbGxiYWNrXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IEZVRUwgZm9yIHRoZSBGSVJFXG4gKiBAY3JlYXRlZCAyMDE4LTEyLTAxXG4gKi9cblxuLy8gUmVhY3QgQmFzZVxudmFyIEZvcm1zID0gcmVxdWlyZSgnLi4vYmFzZS9mb3Jtcy5qc3gnKTtcblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIElucHV0RW50ZXIgZXh0ZW5kcyBGb3Jtcy5Ob2RlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGNhbGxiYWNrXG5cdFx0dGhpcy5vbkVudGVyID0gcHJvcHMub25FbnRlcjtcblx0XHRkZWxldGUgdGhpcy5wcm9wcy5vbkVudGVyO1xuXG5cdFx0Ly8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9XG5cblx0XHQvLyBCaW5kIGZ1bmN0aW9uc1xuXHRcdHRoaXMua2V5UHJlc3MgPSB0aGlzLmtleVByZXNzLmJpbmQodGhpcyk7XG5cdH1cblxuXHRrZXlQcmVzcyhldikge1xuXG5cdFx0Ly8gSWYgYW4gRW50ZXIga2V5IHdhcyBwcmVzc2VkIGFuZCB0aGUgY2FsbGJhY2sgd2FzIHNldFxuXHRcdGlmKGV2LmtleSA9PSAnRW50ZXInICYmIHRoaXMub25FbnRlcikge1xuXHRcdFx0dGhpcy5vbkVudGVyKGV2LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gb25LZXlQcmVzcyBjYWxsYmFja1xuXHRcdGlmKHRoaXMucHJvcHMub25LZXlQcmVzcykge1xuXHRcdFx0dGhpcy5wcm9wcy5vbktleVByZXNzKGV2KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBvbkVudGVyLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR7Li4ucmVzdH1cblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRyZWY9XCJlbFwiXG5cdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMua2V5UHJlc3N9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbnRlcjtcbiIsIi8qKlxuICogTWVudSBDb21wb25lbnRcbiAqXG4gKiBBIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbWVudSBvbiB0aGUgc2NyZWVuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0xMVxuICovXG5cbi8vIENyZWF0ZSB0aGUgTWVudSBDb21wb25lbnRcbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50XG57XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIGJhc2Ugc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcblx0XHR9O1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBjbG9zZVxuXHRcdGlmKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG5cdFx0XHR0aHJvdyAnTWVudSByZXF1aXJlcyBvbkNoYW5nZSBjYWxsYmFjayc7XG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5pdGVtQ2xpY2sgPSB0aGlzLml0ZW1DbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aXRlbUNsaWNrKG5hbWUpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IG5hbWV9LCAoKSA9PiB7XG5cdFx0XHRzZWxmLnByb3BzLm9uQ2hhbmdlKG5hbWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG5cdFx0XHR2YXIgc3RhdHVzID0gKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPT0gY2hpbGQucHJvcHMubmFtZSkgPyAnYWN0aXZlJyA6ICcnO1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdFx0XHRvbkNsaWNrOiBzZWxmLml0ZW1DbGljayxcblx0XHRcdFx0Y2xhc3NOYW1lOiBzdGF0dXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzZWxlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZDtcblx0fVxuXG5cdHNldCBzZWxlY3RlZChuKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IG59KVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgTWVudSBJdGVtIENvbXBvbmVudFxuY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgYmFzZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gbmFtZVxuXHRcdGlmKCF0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdHRocm93ICdJdGVtIHJlcXVpcmVzIG5hbWUgYXR0cmlidXRlJztcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmNsaWNrID0gdGhpcy5jbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y2xpY2soZXYpIHtcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm5hbWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmNsaWNrfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgY29tcG9uZW50c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWVudVwiOiBNZW51LFxuXHRcIkl0ZW1cIjogSXRlbVxufVxuIiwiLyoqXG4gKiBNZXNzYWdlc1xuICpcbiAqIFNob3dzIGEgbWVzc2FnZSB3aXRoIGJ1dHRvbnMgdG8gYWNjZXB0LCBkaXNtaXNzLCBldGNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTMxXG4gKi9cblxuLy8gR2VuZXJpY1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIE1ha2Ugc3VyZSB0aGVyZSBpc24ndCBtb3JlIHRoYW4gb25lIE1lc3NhZ2VzXG52YXIgX2luc3RhbmNlID0gZmFsc2U7XG5cbi8vIENyZWF0ZSB0aGUgbWVzc2FnZSBjb21wb25lbnRcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge307XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMuYnV0dG9uLmJpbmQodGhpcyk7XG5cdH1cblxuXHRidXR0b24oZXYpIHtcblxuXHRcdC8vIENhbGwgdGhlIGNhbGxiYWNrIGFzc29jaWF0ZWQsIGlmIGl0IHJldHVybnMgc3VjY2Vzc2Z1bCwgcmVtb3ZlIHRoZVxuXHRcdC8vXHRtZXNzYWdlXG5cdFx0aWYodGhpcy5wcm9wcy5idXR0b25zW2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uY2FsbGJhY2sodGhpcy5wcm9wcy5pZCkpIHtcblx0XHRcdHRoaXMucHJvcHMucmVtb3ZlKHRoaXMucHJvcHMuaWQpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuXHRcdFx0XHQ8cD57c2VsZi5wcm9wcy50ZXh0fTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG5cdFx0XHRcdFx0e3NlbGYucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24oYiwgaSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpfSBkYXRhLWluZGV4PXtpfSBvbkNsaWNrPXtzZWxmLmJ1dHRvbn0+e2IudGl0bGV9PC9idXR0b24+XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIHByaW1hcnkgY29tcG9uZW50XG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhbiBpbnN0YW5jZVxuXHRcdGlmKF9pbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgJ0NhblxcJ3QgaGF2ZSBtb3JlIHRoYW4gb25lIE1lc3NhZ2VzJztcblx0XHR9XG5cdFx0X2luc3RhbmNlID0gdHJ1ZTtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtZXNzYWdlczogW11cblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdC8vIFRyYWNrIGFueSBtZXNzYWdlIGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2UpO1xuXHRcdEV2ZW50cy5hZGQoJ21lc3NhZ2VfcmVtb3ZlJywgdGhpcy5yZW1vdmUpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgbWVzc2FnZSBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlKTtcblx0XHRFdmVudHMucmVtb3ZlKCdtZXNzYWdlX3JlbW92ZScsIHRoaXMucmVtb3ZlKTtcblx0fVxuXG5cdG1lc3NhZ2UoaWQsIGNvbmYpIHtcblxuXHRcdC8vIENsb25lIHRoZSBtZXNzYWdlc1xuXHRcdHZhciBtc2dzID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG5cblx0XHQvLyBQdXNoIHRoZSBuZXcgbWVzc2FnZVxuXHRcdG1zZ3NbaWRdID0gY29uZjtcblxuXHRcdC8vIFNldCB0aGUgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1lc3NhZ2VzXCI6IG1zZ3N9KTtcblx0fVxuXG5cdHJlbW92ZShpZCkge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1lc3NhZ2VzXG5cdFx0dmFyIG1zZ3MgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgcmVxdWVzdGVkIElEXG5cdFx0ZGVsZXRlIG1zZ3NbaWRdO1xuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1wibWVzc2FnZXNcIjogbXNnc30pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIm1lc3NhZ2VzXCI+XG5cdFx0XHRcdHtUb29scy5vbWFwKHRoaXMuc3RhdGUubWVzc2FnZXMsIGZ1bmN0aW9uKG0sIGspIHtcblx0XHRcdFx0XHRyZXR1cm4gPE1lc3NhZ2Ugey4uLm19IGtleT17a30gaWQ9e2t9IHJlbW92ZT17c2VsZi5yZW1vdmV9IC8+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIENvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlc1xuIiwiLyoqXG4gKiBNb2RlbCBDb21wb25lbnRcbiAqXG4gKiBBIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbW9kYWwgYm94IG9uIHRoZSBzY3JlZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTExXG4gKi9cblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudFxue1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBjbG9zZVxuXHRcdGlmKCF0aGlzLnByb3BzLmNsb3NlKSB7XG5cdFx0XHR0aHJvdyAnTW9kYWwgcmVxdWlyZXMgY2xvc2UgY2FsbGJhY2snO1xuXHRcdH1cblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYnV0dG9uQ2xpY2sgPSB0aGlzLmJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50cmFwRXNjYXBlID0gdGhpcy50cmFwRXNjYXBlLmJpbmQodGhpcyk7XG5cdH1cblxuXHQvLyBJZiBhIGJ1dHRvbiBpcyBwdXNoZWRcblx0YnV0dG9uQ2xpY2soZXYpIHtcblxuXHRcdC8vIEdldCB0aGUgYnV0dG9uIHVzaW5nIHRoZSBpbmRleFxuXHRcdHZhciBidG4gPSB0aGlzLnByb3BzLmJ1dHRvbnNbZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYSBjYWxsYmFja1xuXHRcdGlmKHR5cGVvZiBidG4uY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YnRuLmNhbGxiYWNrKGJ0bik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Ly8gVHJhcCB0aGUgZXNjYXBlIGtleVxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnRyYXBFc2NhcGUpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFwcGluZyB0aGUgZXNjYXBlIGtleVxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnRyYXBFc2NhcGUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBzdHlsZXNcblx0XHR2YXIgc3R5bGVzID0ge31cblx0XHRpZih0aGlzLnByb3BzLmhlaWdodCkgc3R5bGVzLmhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0O1xuXHRcdGlmKHRoaXMucHJvcHMubWF4SGVpZ2h0KSBzdHlsZXMubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG5cdFx0aWYodGhpcy5wcm9wcy5tYXhXaWR0aCkgc3R5bGVzLm1heEhlaWdodCA9IHRoaXMucHJvcHMubWF4SGVpZ2h0O1xuXHRcdGlmKHRoaXMucHJvcHMud2lkdGgpIHN0eWxlcy53aWR0aCA9IHRoaXMucHJvcHMud2lkdGg7XG5cblx0XHQvLyBSZXR1cm4gdGhlIEhUTUxcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1jbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9PjwvaT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmJ1dHRvbnMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbihidG4sIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gZGF0YS1pbmRleD17aX0gY2xhc3NOYW1lPVwic21hbGxcIiBvbkNsaWNrPXtzZWxmLmJ1dHRvbkNsaWNrfSBkaXNhYmxlZD17YnRuWydkaXNhYmxlZCddfT57YnRuWyduYW1lJ119PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHQvLyBUcmFwcyBFU0Mga2V5IGNsaWNrcyBzbyB3ZSBjYW4gY2xvc2UgdGhlIE1vZGFsIHdpbmRvd1xuXHR0cmFwRXNjYXBlKGV2KSB7XG5cdFx0aWYoZXYua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdHRoaXMucHJvcHMuY2xvc2UoKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTW9kYWw7XG4iLCIvKipcbiAqIFBvcHVwc1xuICpcbiAqIFNob3dzIGEgcG9wdXAgb2YgdHlwZSBlcnJvciwgc3VjY2Vzcywgb3Igd2FybmluZ1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTItMDhcbiAqL1xuXG4vLyBEZWZpbmVzXG52YXIgU1VDQ0VTU19USU1FT1VUID0gMjAwMDtcbnZhciBFUlJPUl9USU1FT1VUID0gMTAwMDA7XG52YXIgV0FSTklOR19USU1FT1VUID0gNTAwMDtcbnZhciBTVEVQX1RJTUVPVVQgPSAyMDtcbnZhciBXSURUSF9TVEVQUyA9IDQwO1xudmFyIEhFSUdIVF9TVEVQUyA9IDIwO1xudmFyIE1BUkdJTiA9IDU7XG5cbi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIFRvb2xzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy90b29scy5qcycpO1xuXG4vLyBNYWtlIHN1cmUgdGhlcmUgaXNuJ3QgbW9yZSB0aGFuIG9uZSBQb3B1cHNcbnZhciBfaW5zdGFuY2UgPSBmYWxzZTtcblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIFBvcHVwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhbiBpbnN0YW5jZVxuXHRcdGlmKF9pbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgJ0NhblxcJ3QgaGF2ZSBtb3JlIHRoYW4gb25lIFBvcHVwcyc7XG5cdFx0fVxuXHRcdF9pbnN0YW5jZSA9IHRydWU7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cG9wdXBzOiBbXSxcblx0XHRcdHRpbWVyOiBudWxsXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuZXJyb3IgPSB0aGlzLmVycm9yLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb3B1cCA9IHRoaXMucG9wdXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLnByb2Nlc3MuYmluZCh0aGlzKTtcblx0XHR0aGlzLndhcm5pbmcgPSB0aGlzLndhcm5pbmcuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHQvLyBUcmFjayBhbnkgcG9wdXAgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnZXJyb3InLCB0aGlzLmVycm9yKTtcblx0XHRFdmVudHMuYWRkKCdwb3B1cCcsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5hZGQoJ3N1Y2Nlc3MnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMuYWRkKCd3YXJuaW5nJywgdGhpcy53YXJuaW5nKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHBvcHVwIGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ2Vycm9yJywgdGhpcy5lcnJvcik7XG5cdFx0RXZlbnRzLnJlbW92ZSgncG9wdXAnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzdWNjZXNzJywgdGhpcy5wb3B1cCk7XG5cdFx0RXZlbnRzLnJlbW92ZSgnd2FybmluZycsIHRoaXMud2FybmluZyk7XG5cdH1cblxuXHRlcnJvcihtc2cpIHtcblx0XHR0aGlzLnBvcHVwKG1zZywgJ2Vycm9yJyk7XG5cdH1cblxuXHRwcm9jZXNzKCkge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIHN0YXRlXG5cdFx0dmFyIHN0YXRlID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZSk7XG5cblx0XHQvLyBJZiB3ZSB3ZXJlIHdhaXRpbmdcblx0XHRpZihzdGF0ZS50aW1lci5zdGVwID09IDApIHtcblxuXHRcdFx0Ly8gU3RhcnQgdGhlIHByb2Nlc3MgdG8gaGlkZSB0aGUgZmlyc3QgcG9wdXBcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnbCddID0gTUFSR0lOO1xuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydyJ10gPSBNQVJHSU47XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBzdGVwIHRpbWVvdXRzXG5cdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgU1RFUF9USU1FT1VUKTtcblx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byBtb3ZlIHRoZSBmaXJzdCBwb3B1cCBvZmYgdGhlIHNjcmVlblxuXHRcdGVsc2UgaWYoc3RhdGUudGltZXIuc3RlcCA+PSAxICYmIHN0YXRlLnRpbWVyLnN0ZXAgPD0gNDApIHtcblxuXHRcdFx0Ly8gR2V0IHRoZSBpbm5lciB3aWR0aCBvZiB0aGUgc2NyZWVuIGFuZCBkaXZpZGUgYnkgdGhlIHN0ZXBzXG5cdFx0XHR2YXIgc3RlcCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gV0lEVEhfU1RFUFM7XG5cblx0XHRcdC8vIFN1YnRyYWN0IGl0IGZyb20gdGhlIGxlZnQgYW5kIHJpZ2h0XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2wnXSAtPSBzdGVwO1xuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydyJ10gKz0gc3RlcDtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXh0IHRpbWVvdXRcblx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBTVEVQX1RJTUVPVVQpO1xuXHRcdFx0c3RhdGUudGltZXIuc3RlcCArPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byBtb3ZlIHRoZSBmaXJzdCBwb3B1cCB1cFxuXHRcdGVsc2UgaWYoc3RhdGUudGltZXIuc3RlcCA+PSA0MSAmJiBzdGF0ZS50aW1lci5zdGVwIDw9IDYwKSB7XG5cblx0XHRcdC8vIElmIHdlJ3JlIG9uIHRoZSBmaXJzdCBzdGVwXG5cdFx0XHRpZihzdGF0ZS50aW1lci5zdGVwID09IDQxKSB7XG5cdFx0XHRcdHN0YXRlLnBvcHVwc1swXVsnb2gnXSA9IHRoaXMucmVmc1tcIjBcIl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2gnXSA9IHRoaXMucmVmc1tcIjBcIl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHZXQgdGhlIGhlaWdodCBvZiB0aGUgZGl2IGFuZCBkaXZpZGUgYnkgdGhlIHN0ZXBzXG5cdFx0XHR2YXIgc3RlcCA9IHN0YXRlLnBvcHVwc1swXVsnb2gnXSAvIEhFSUdIVF9TVEVQUztcblxuXHRcdFx0Ly8gU3VidHJhY3QgaXQgZnJvbSB0aGUgY3VycmVudCBoZWlnaHRcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnaCddIC09IHN0ZXA7XG5cblx0XHRcdC8vIFNldCB0aGUgbmV4dCB0aW1lb3V0XG5cdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgU1RFUF9USU1FT1VUKTtcblx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgKz0gMTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBwb3B1cCBjb21wbGV0ZWx5XG5cdFx0ZWxzZSBpZihzdGF0ZS50aW1lci5zdGVwID09IDYxKSB7XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgY3VycmVudCBmaXJzdCBwb3B1cFxuXHRcdFx0c3RhdGUucG9wdXBzLnNwbGljZSgwLCAxKTtcblxuXHRcdFx0Ly8gSWYgd2Ugc3RpbGwgaGF2ZSBwb3B1cHNcblx0XHRcdGlmKHN0YXRlLnBvcHVwcy5sZW5ndGgpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB0aGUgdGltZXIgc3RlcHNcblx0XHRcdFx0c3RhdGUudGltZXIucmVzID0gc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIHN0YXRlLnBvcHVwc1swXS50aW1lb3V0KTtcblx0XHRcdFx0c3RhdGUudGltZXIuc3RlcCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIG5vIG1vcmUgdGltZW91dHNcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdGF0ZS50aW1lciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJwb3B1cHNcIiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUucG9wdXBzLmxlbmd0aCA/ICdibG9jaycgOiAnbm9uZSd9fT5cblx0XHRcdFx0e3RoaXMuc3RhdGUucG9wdXBzLm1hcCgobXNnLCBpKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHN0eWxlID0ge31cblx0XHRcdFx0XHRpZih0eXBlb2YgbXNnLmwgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpbkxlZnQgPSBtc2cubCArICdweCc7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5SaWdodCA9IG1zZy5yICsgJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYodHlwZW9mIG1zZy5oICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5oZWlnaHQgPSBtc2cuaCArICdweCc7XG5cdFx0XHRcdFx0XHRzdHlsZS5wYWRkaW5nID0gMDtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5Ub3AgPSAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gcmVmPXtcIlwiICsgaX0gY2xhc3NOYW1lPXttc2cudHlwZX0gc3R5bGU9e3N0eWxlfT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtcImZhcyBmYS1cIiArIG1zZy5pY29ufSAvPlxuXHRcdFx0XHRcdFx0XHR7bXNnLnRleHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHBvcHVwKHRleHQsIHR5cGUpIHtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gdHlwZVxuXHRcdGlmKHR5cGVvZiB0eXBlID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdH1cblxuXHRcdHZhciBpVGltZW91dCA9IDA7XG5cdFx0dmFyIHNJY29uID0gJyc7XG5cdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRpVGltZW91dCA9IFNVQ0NFU1NfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnY2hlY2stY2lyY2xlJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdGlUaW1lb3V0ID0gRVJST1JfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcblx0XHRcdFx0Y29uc29sZS5lcnJvcih0ZXh0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3YXJuaW5nJzpcblx0XHRcdFx0aVRpbWVvdXQgPSBXQVJOSU5HX1RJTUVPVVQ7XG5cdFx0XHRcdHNJY29uID0gJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcblx0XHRcdFx0Y29uc29sZS53YXJuKHRleHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IFwiSW52YWxpZCBwb3B1cCB0eXBlOiBcIiArIHR5cGU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgdGhlIHN0YXRlXG5cdFx0dmFyIHN0YXRlID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZSk7XG5cblx0XHQvLyBBZGQgdGhlIHBvcHVwXG5cdFx0c3RhdGUucG9wdXBzLnB1c2goe1xuXHRcdFx0aWNvbjogc0ljb24sXG5cdFx0XHR0ZXh0OiB0ZXh0LFxuXHRcdFx0dGltZW91dDogaVRpbWVvdXQsXG5cdFx0XHR0eXBlOiB0eXBlXG5cdFx0fSk7XG5cblx0XHQvLyBTZXQgdGhlIHRpbWVyXG5cdFx0aWYoc3RhdGUudGltZXIgPT0gbnVsbCkge1xuXHRcdFx0c3RhdGUudGltZXIgPSB7XG5cdFx0XHRcdHJlczogc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIGlUaW1lb3V0KSxcblx0XHRcdFx0c3RlcDogMFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblxuXHR3YXJuaW5nKG1zZykge1xuXHRcdHRoaXMucG9wdXAobXNnLCAnd2FybmluZycpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwcztcbiIsIi8qKlxuICogSGVhZGVyXG4gKlxuICogTWFuYWdlcyBzaWduIGluIC8gc2lnbiBvdXQgLyBzaWduIHVwXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yMVxuICovXG5cbi8vIGNvbXBvbmVudHNcbnZhciBGb3JtcyA9IHJlcXVpcmUoJy4vYmFzZS9mb3Jtcy5qc3gnKTtcbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbW9kYWwuanN4Jyk7XG52YXIgVGhyb3dlciA9IHJlcXVpcmUoJy4vdGhyb3dlci5qc3gnKTtcblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpO1xuXG4vLyBIZWFkZXIgY29tcG9uZW50XG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IGZhbHNlXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYWNjb3VudFNob3cgPSB0aGlzLmFjY291bnRTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5ob21lID0gdGhpcy5ob21lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluU2hvdyA9IHRoaXMuc2lnbmluU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluVHJpZ2dlciA9IHRoaXMuc2lnbmluVHJpZ2dlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dFRyaWdnZXIgPSB0aGlzLnNpZ25vdXRUcmlnZ2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdudXAgPSB0aGlzLnNpZ251cC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbnVwU2hvdyA9IHRoaXMuc2lnbnVwU2hvdy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YWNjb3VudFNob3coZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGFsXCI6IHRoaXMuc3RhdGUubW9kYWwgPT0gXCJhY2NvdW50XCIgPyBmYWxzZSA6ICdhY2NvdW50J30pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluVHJpZ2dlcik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dFRyaWdnZXIpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pblRyaWdnZXIpO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXRUcmlnZ2VyKTtcblx0fVxuXG5cdGhvbWUoKSB7XG5cdFx0SGFzaC5zZXQoXCJwYWdlXCIsIG51bGwpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zIGZyaWdodCBhcmlnaHRcIj5cblx0XHRcdFx0XHR7c2VsZi5zdGF0ZS50aHJvd2VyID9cblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXVzZXJcIiB0aXRsZT1cIkFjY291bnRcIiBvbkNsaWNrPXtzZWxmLmFjY291bnRTaG93fT48L2k+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wb3dlci1vZmZcIiB0aXRsZT1cIlNpZ24gT3V0XCIgb25DbGljaz17c2VsZi5zaWdub3V0fT48L2k+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItcGx1c1wiIHRpdGxlPVwiQ3JlYXRlIEFjY291bnRcIiBvbkNsaWNrPXtzZWxmLnNpZ251cFNob3d9PjwvaT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24taW4tYWx0XCIgdGl0bGU9XCJTaWduIEluXCIgb25DbGljaz17c2VsZi5zaWduaW5TaG93fT48L2k+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoMSBzdHlsZT17e1wiY3Vyc29yXCI6IFwicG9pbnRlclwifX0gb25DbGljaz17dGhpcy5ob21lfT5BeGVHYWlucy5jb208L2gxPlxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnc2lnbmluJyAmJlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJzaWduaW5cIiBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwiYWxpYXNcIiB0eXBlPVwidGV4dFwiIHRpdGxlPVwiYWxpYXNcIiBwbGFjZWhvbGRlcj1cImFsaWFzXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwicGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFyaWdodFwiPjxidXR0b24gb25DbGljaz17c2VsZi5zaWduaW59PnNpZ24gaW48L2J1dHRvbj48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kYWwgPT0gJ3NpZ251cCcgJiZcblx0XHRcdFx0XHQ8ZGl2IGlkPVwic2lnbnVwXCIgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInNpZ251cF9hbGlhc1wiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJhbGlhc1wiIHBsYWNlaG9sZGVyPVwiYWxpYXNcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWwgKG5vdCByZXF1aXJlZClcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJzaWdudXBfcGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJyZXBlYXRfcGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJyZXBlYXQgcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXJpZ2h0XCI+PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLnNpZ251cH0+c2lnbiB1cDwvYnV0dG9uPjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnYWNjb3VudCcgJiZcblx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdHRpdGxlPVwiQWNjb3VudFwiXG5cdFx0XHRcdFx0XHRjbG9zZT17c2VsZi5hY2NvdW50U2hvd31cblx0XHRcdFx0XHRcdHdpZHRoPVwiOTUlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VGhyb3dlciAvPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdH1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG5cdH1cblxuXHRzaWduaW4oZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBTdG9yZSB0aGUgYWxpYXNcblx0XHR2YXIgYWxpYXMgPSB0aGlzLnJlZnMuYWxpYXMudmFsdWU7XG5cblx0XHQvLyBDYWxsIHRoZSBzaWduaW5cblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnc2lnbmluJywge1xuXHRcdFx0XCJhbGlhc1wiOiBhbGlhcyxcblx0XHRcdFwicGFzc3dkXCI6IHRoaXMucmVmcy5wYXNzd2QudmFsdWVcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0dmFyIGVycm9yID0gJyAnO1xuXHRcdFx0XHRzd2l0Y2gocmVzLmVycm9yLmNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDEwMDE6XG5cdFx0XHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbWVzc2FnZSBhbmQgbWFrZSB0aGUgcmVmIHJlZFxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIHJlcy5lcnJvci5tc2cpIHtcblx0XHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwMTpcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdBbGlhcyBvciBwYXNzd29yZCBpbnZhbGlkJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDQ6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9wYXNzd2QnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmQgbm90IHN0cm9uZyBlbm91Z2gnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIHNlc3Npb24gd2l0aCB0aGUgc2VydmljZVxuXHRcdFx0XHRTZXJ2aWNlcy5zZXNzaW9uKHJlcy5kYXRhLnNlc3Npb24pO1xuXG5cdFx0XHRcdC8vIEdyZWV0IHRocm93ZXJcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBcIldlbGNvbWUgYmFjayB0byBBeGVHYWlucyBcIiArIGFsaWFzKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWduaW4gZXZlbnRcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicsIHJlcy5kYXRhLnRocm93ZXIpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbmluU2hvdyhldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kYWxcIjogKHRoaXMuc3RhdGUubW9kYWwgPT0gJ3NpZ25pbicgPyBmYWxzZSA6ICdzaWduaW4nKX0pO1xuXHR9XG5cblx0c2lnbmluVHJpZ2dlcih0aHJvd2VyKSB7XG5cblx0XHQvLyBIaWRlIGFueSBtb2RhbHMgYW5kIHNldCB0aGUgdGhyb3dlclxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RhbFwiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiB0aHJvd2VyXG5cdFx0fSk7XG5cdH1cblxuXHRzaWdub3V0KGV2KSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2lnbm91dFxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdzaWdub3V0Jywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHRoZSBzZXNzaW9uXG5cdFx0XHRcdFNlcnZpY2VzLnNlc3Npb24obnVsbCk7XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciB0aGUgc2lnbm91dCBldmVudFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbm91dCcpO1xuXHRcdFx0fVxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25vdXRUcmlnZ2VyKCkge1xuXG5cdFx0Ly8gSGlkZSBhbmQgbW9kYWxzIGFuZCBzZXQgdGhlIHRocm93ZXIgdG8gZmFsc2Vcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcInRocm93ZXJcIjogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cdHNpZ251cChldikge1xuXG5cdFx0Ly8gR2V0IHRoZSBhbGlhc1xuXHRcdHZhciBhbGlhcyA9IHRoaXMucmVmcy5zaWdudXBfYWxpYXMudmFsdWUudHJpbSgpO1xuXG5cdFx0Ly8gSWYgdGhlIGFsaWFzIGlzIG5vdCBsb25nIGVub3VnaFxuXHRcdGlmKGFsaWFzLmxlbmd0aCA8IDMpIHtcblx0XHRcdEZvcm1zLmVycm9yQWRkKHRoaXMucmVmcy5zaWdudXBfYWxpYXMpO1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0FsaWFzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHBhc3N3b3JkcyBkb24ndCBtYXRjaFxuXHRcdGlmKHRoaXMucmVmcy5zaWdudXBfcGFzc3dkLnZhbHVlICE9IHRoaXMucmVmcy5yZXBlYXRfcGFzc3dkLnZhbHVlKSB7XG5cdFx0XHRGb3Jtcy5lcnJvckFkZCh0aGlzLnJlZnMucmVwZWF0X3Bhc3N3ZCk7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBJbml0IHRoZSBkYXRhXG5cdFx0dmFyIG9EYXRhID0ge1xuXHRcdFx0XCJhbGlhc1wiOiBhbGlhcyxcblx0XHRcdFwicGFzc3dkXCI6IHRoaXMucmVmcy5zaWdudXBfcGFzc3dkLnZhbHVlXG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlLW1haWxcblx0XHRpZih0aGlzLnJlZnMuZW1haWwudmFsdWUpIHtcblx0XHRcdHZhciBlbWFpbCA9IHRoaXMucmVmcy5lbWFpbC52YWx1ZS50cmltKCk7XG5cdFx0XHRpZihlbWFpbCkge1xuXHRcdFx0XHRvRGF0YVsnZW1haWwnXSA9IGVtYWlsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGwgdGhlIHNpZ251cFxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdzaWdudXAnLCBvRGF0YSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdHZhciBlcnJvciA9ICcgJztcblx0XHRcdFx0c3dpdGNoKHJlcy5lcnJvci5jb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAxMDAxOlxuXHRcdFx0XHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIG1lc3NhZ2UgYW5kIG1ha2UgdGhlIHJlZiByZWRcblx0XHRcdFx0XHRcdGZvcih2YXIgaSBpbiByZXMuZXJyb3IubXNnKSB7XG5cdFx0XHRcdFx0XHRcdGlmKGkgPT0gJ2FsaWFzJykge1xuXHRcdFx0XHRcdFx0XHRcdGkgPSAnc2lnbnVwX2FsaWFzJztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmKGkgPT0gJ3Bhc3N3ZCcpIHtcblx0XHRcdFx0XHRcdFx0XHRpID0gJ3NpZ251cF9wYXNzd2QnO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1tpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDA6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9hbGlhcyddKTtcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdBbGlhcyBpcyBhbHJlYWR5IGluIHVzZScpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMjA0OlxuXHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzWydzaWdudXBfcGFzc3dkJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ1Bhc3N3b3JkIG5vdCBzdHJvbmcgZW5vdWdoJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDY6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ2VtYWlsJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0UtTWFpbCBhbHJlYWR5IGluIHVzZScpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgc2Vzc2lvbiB3aXRoIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFNlcnZpY2VzLnNlc3Npb24ocmVzLmRhdGEuc2Vzc2lvbik7XG5cblx0XHRcdFx0Ly8gUmV2ZXJ0IHRvIHNpZ24gaW4gYW5kIHNob3cgc3VjY2VzcyBtZXNzYWdlXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJ0aHJvd2VyXCI6IHJlcy5kYXRhLnRocm93ZXJcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gR3JlZXQgdGhyb3dlclxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsIFwiV2VsY29tZSB0byBBeGVHYWlucyBcIiArIHJlcy5kYXRhLnRocm93ZXIuYWxpYXMpO1xuXG5cdFx0XHRcdC8vIFRyaWdnZXIgdGhlIHNpZ25pbiBldmVudFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbmluJywgcmVzLmRhdGEudGhyb3dlcik7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWdudXBTaG93KGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RhbFwiOiAodGhpcy5zdGF0ZS5tb2RhbCA9PSAnc2lnbnVwJyA/IGZhbHNlIDogJ3NpZ251cCcpfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyO1xuIiwiLyoqXG4gKiBNYXRjaFxuICpcbiAqIE1hbmFnZXMgT3JnIG1lbnUgZm9yIG1hdGNoZXMgYW5kIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIG9uZSBiYXNlZCBvbiB3aGF0XG4gKiBpcyBjaG9zZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI2XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRzXG52YXIgTmF0ZiA9IHJlcXVpcmUoJy4vbmF0Zi9tYXRjaC5qc3gnKTtcblxuLy8gTWF0Y2ggY29tcG9uZW50XG5jbGFzcyBNYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwib3JnXCI6IEhhc2guZ2V0KCdvcmcnLCAnbmF0ZicpXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMub3JnQ2hhbmdlID0gdGhpcy5vcmdDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC51bndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIG9yZyBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ29yZycsIG51bGwpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdGlmKG9yZyA9PSBudWxsKSB7XG5cdFx0XHRcdG9yZyA9ICduYXRmJztcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJtYXRjaFwiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgdGhyb3dlcj17dGhpcy5wcm9wcy50aHJvd2VyfSAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7XG4iLCIvKipcbiAqIE5BVEYgQm9hcmRcbiAqXG4gKiBNYW5hZ2VzIGEgc3RhbmRhcmQgTkFURiBib2FyZFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMTlcbiAqL1xuXG4vLyBCb2FyZCBjb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBvblBvaW50cyBwcm9wXG5cdFx0aWYoIXByb3BzLm9uUG9pbnRzKSB7XG5cdFx0XHR0aHJvdyAnbXVzdCBzcGVjaWZ5IG9uUG9pbnRzIHByb3BlcnR5IGZvciBOQVRGIEJvYXJkJztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImNsdXRjaE1vZGVcIjogcHJvcHMuY2x1dGNoTW9kZSxcblx0XHRcdFwic2VsZWN0ZWRcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5jbHV0Y2hDbGljayA9IHRoaXMuY2x1dGNoQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyb3BDbGljayA9IHRoaXMuZHJvcENsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludENsaWNrID0gdGhpcy5wb2ludENsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjbHV0Y2hDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gSWYgY2x1dGNoZXMgYXJlIG5vdCBhbGxvd2VkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdub25lJykge1xuXG5cdFx0XHQvLyBTdG9yZSB0aGUgY3VycmVudCB0YXJnZXRcblx0XHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVcblx0XHRcdHZhciBjbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGludmFsaWQgY2xhc3Ncblx0XHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIGludmFsaWQnO1xuXG5cdFx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblx0XHRcdH0sIDUwMCk7XG5cblx0XHRcdC8vIERvbid0IGNvdW50IHRoZSBjbGlja1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHRcdGlmKHRoaXMucHJvcHMub25Qb2ludHModHJ1ZSwgNykgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5yZXNldENsdXRjaCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkXCI6IHRydWV9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkcm9wQ2xpY2soZXYpIHtcblxuXHRcdC8vIFN0b3AgcHJvcGFnYXRpb24gbm8gbWF0dGVyIHdoYXRcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBjdXJyZW50IHRhcmdldFxuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0Ly8gU2VuZCBvdXQgdGhlIGRyb3Bcblx0XHRpZih0aGlzLnByb3BzLm9uUG9pbnRzKHRoaXMuc3RhdGUuc2VsZWN0ZWQsICdkJykgIT09IGZhbHNlKSB7XG5cblx0XHRcdC8vIERlLXNlbGVjdCB0aGUgY2x1dGNoIGlmIHRoZXJlJ3Mgb25lIHNlbGVjdGVkXG5cdFx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVHVybiBvbiB0aGUgYWN0aXZlIGZsYWdcblx0XHRcdHRhcmdldC5jbGFzc05hbWUgPSAnZHJvcCBhY3RpdmUnO1xuXG5cdFx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9ICdkcm9wJztcblx0XHRcdH0sIDUwMCk7XG5cdFx0fVxuXHR9XG5cblx0cmVzZXRDbHV0Y2goKSB7XG5cblx0XHQvLyBJZiB0aGUgbW9kZSBpcyBzZWxlY3RlZFxuXHRcdGlmKHRoaXMuc3RhdGUuY2x1dGNoTW9kZSA9PSAnc2VsZWN0Jykge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJzZWxlY3RlZFwiOiBmYWxzZX0pO1xuXHRcdH1cblx0fVxuXG5cdHBvaW50Q2xpY2soZXYpIHtcblxuXHRcdC8vIFN0b3AgcHJvcGFnYXRpb24gbm8gbWF0dGVyIHdoYXRcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBjdXJyZW50IHRhcmdldFxuXHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0Ly8gR2V0IHRoZSBjbGFzcyBuYW1lc1xuXHRcdHZhciBjbGFzc05hbWVzID0gdGFyZ2V0LmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXG5cdFx0Ly8gSWYgaXQncyBhbHJlYWR5IGFjdGl2ZSwgZG8gbm90aGluZ1xuXHRcdGlmKGNsYXNzTmFtZXNbMV0gJiYgY2xhc3NOYW1lc1sxXSA9PSAnYWN0aXZlJyl7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIGNsdXRjaCBzZWxlY3RlZFxuXHRcdHZhciBhY2NlcHRlZCA9IHRydWU7XG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0YWNjZXB0ZWQgPSB0aGlzLnByb3BzLm9uUG9pbnRzKHRydWUsIDApO1xuXHRcdFx0aWYoYWNjZXB0ZWQgIT09IGZhbHNlKSB7XG5cdFx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0YWNjZXB0ZWQgPSB0aGlzLnByb3BzLm9uUG9pbnRzKGZhbHNlLCBwYXJzZUludCh0YXJnZXQuZGF0YXNldC52YWx1ZSkpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBwb2ludHMgd2VyZSBub3QgcmVqZWN0ZWQgYWNjZXB0ZWRcblx0XHRpZihhY2NlcHRlZCAhPT0gZmFsc2UpIHtcblxuXHRcdFx0Ly8gVHVybiBvbiB0aGUgYWN0aXZlIGZsYWdcblx0XHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWVzWzBdICsgJyBhY3RpdmUnO1xuXG5cdFx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbMF07XG5cdFx0XHR9LCA1MDApO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIiBkYXRhLXZhbHVlPXswfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJjbHV0Y2ggbGVmdFwiICsgKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX0gb25DbGljaz17c2VsZi5jbHV0Y2hDbGlja30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcFwiIG9uQ2xpY2s9e3NlbGYuZHJvcENsaWNrfT5EUk9QPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNsdXRjaCByaWdodFwiICsgKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX0gb25DbGljaz17c2VsZi5jbHV0Y2hDbGlja30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib25lXCIgZGF0YS12YWx1ZT17MX0gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRocmVlXCIgZGF0YS12YWx1ZT17M30gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml2ZVwiIGRhdGEtdmFsdWU9ezV9IG9uQ2xpY2s9e3NlbGYucG9pbnRDbGlja30+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHNldCBjbHV0Y2hNb2RlKG1vZGUpIHtcblxuXHRcdC8vIEZpZ3VyZSBvdXQgdGhlIHNlbGVjdGVkIHZhbHVlXG5cdFx0dmFyIHNlbGVjdGVkID0gbnVsbDtcblx0XHRzd2l0Y2gobW9kZSkge1xuXHRcdFx0Y2FzZSAnbm9uZSc6IHNlbGVjdGVkID0gZmFsc2U7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnZXhwZWN0ZWQnOiBzZWxlY3RlZCA9IHRydWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzogc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkOyBicmVhaztcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJjbHV0Y2hNb2RlXCI6IG1vZGUsXG5cdFx0XHRcInNlbGVjdGVkXCI6IHNlbGVjdGVkXG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7XG4iLCIvKipcbiAqIE5BVEYgTWF0Y2hcbiAqXG4gKiBNYW5hZ2VzIGNyZWF0aW5nIGFuZCBwbGF5aW5nIGEgc3RhbmRhcmQgTkFURiBtYXRjaFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2hhc2guanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xudmFyIFRvb2xzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy90b29scy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBUd29XYXkgPSByZXF1aXJlKCcuLi8uLi90d293YXkuanMnKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzLmpzJyk7XG5cbi8vIFJlYWN0IGNvbXBvbmVudHNcbnZhciBCb2FyZCA9IHJlcXVpcmUoJy4vYm9hcmQuanN4Jyk7XG52YXIgT3Bwb25lbnQgPSByZXF1aXJlKCcuLi9vcHBvbmVudC5qc3gnKTtcblxuLy8gRGVmaW5lc1xuRklOSVNIRURfSU5JVElBVE9SID0gMHgwMTtcbkZJTklTSEVEX09QUE9ORU5UID0gMHgwMjtcbkZJTklTSEVEX0JPVEggPSAweDAzO1xuXG4vLyBNYXRjaCBDb21wb25lbnRcbmNsYXNzIE1hdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJhbGlhc1wiOiAnJyxcblx0XHRcdFwiYmlnYXhlXCI6IGZhbHNlLFxuXHRcdFx0XCJleGlzdGluZ1wiIDogZmFsc2UsXG5cdFx0XHRcImdhbWVzXCI6IGZhbHNlLFxuXHRcdFx0XCJpZFwiOiBmYWxzZSxcblx0XHRcdFwibG9zZXJcIjogZmFsc2UsXG5cdFx0XHRcIm1hdGNoU3RhdGVcIjogZmFsc2UsXG5cdFx0XHRcIm1vZGVcIjogXCJvcHBvbmVudFwiLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXIsXG5cdFx0XHRcImlzXCI6ICcnLFxuXHRcdFx0XCJ3aW5uZXJcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5iaWdheGVGaW5pc2ggPSB0aGlzLmJpZ2F4ZUZpbmlzaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZXhpc3RpbmdDb250aW51ZSA9IHRoaXMuZXhpc3RpbmdDb250aW51ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZXhpc3RpbmdEZWxldGUgPSB0aGlzLmV4aXN0aW5nRGVsZXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nYW1lRmluaXNoID0gdGhpcy5nYW1lRmluaXNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5pZENhbGxiYWNrID0gdGhpcy5pZENhbGxiYWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5tYXRjaENhbGxiYWNrID0gdGhpcy5tYXRjaENhbGxiYWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vdmVyd3JpdGUgPSB0aGlzLm92ZXJ3cml0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9pbnRzID0gdGhpcy5wb2ludHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlcXVlc3RDYWxsYmFjayA9IHRoaXMucmVxdWVzdENhbGxiYWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXF1ZXN0Q2FuY2VsID0gdGhpcy5yZXF1ZXN0Q2FuY2VsLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXF1ZXN0Q3JlYXRlID0gdGhpcy5yZXF1ZXN0Q3JlYXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YmlnYXhlRmluaXNoKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBJZiB3ZSdyZSBpbiBwb2ludHMgbW9kZVxuXHRcdHZhciBub3VuID0gJyc7XG5cdFx0aWYodGhpcy5zdGF0ZS5tYXRjaFN0YXRlLm1vZGUgPT0gJ2JpZ2F4ZV9wb2ludHMnKSB7XG5cdFx0XHRub3VuID0gJ21hdGNoL2ZpbmlzaC9iaWdheGUvcG9pbnRzJztcblx0XHR9IGVsc2Uge1xuXHRcdFx0bm91biA9ICdtYXRjaC9maW5pc2gvYmlnYXhlL3RhcmdldCc7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1hdGNoIHN0YXRlXG5cdFx0dmFyIG1zID0gc2VsZi5zdGF0ZS5tYXRjaFN0YXRlXG5cblx0XHQvLyBSZW1vdmUgdGhlIGZpbmlzaCBhbmQgc2V0IHRoZSB3YWl0aW5nXG5cdFx0bXMuYmlnYXhlX2Nhbl9maW5pc2ggPSBmYWxzZTtcblx0XHRtcy53YWl0aW5nID0gdHJ1ZTtcblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtYXRjaFN0YXRlXCI6IG1zfSk7XG5cblx0XHQvLyBMZXQgdGhlIHNlcnZpY2Uga25vd1xuXHRcdFNlcnZpY2VzLnVwZGF0ZSgnbmF0ZicsIG5vdW4sIHtcblx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS5pZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRjYWxjdWxhdGVCaWdBeGVGaW5pc2hlZCh0eXBlLCBkYXRhKSB7XG5cblx0XHQvLyBNYWtlIG15IGxpZmUgZWFzaWVyXG5cdFx0dmFyIHRocm93cyA9IGRhdGEuYmlnYXhlW3R5cGVdO1xuXG5cdFx0Ly8gSWYgdGhlIGxlbmd0aHMgZG9uJ3QgbWF0Y2hcblx0XHRpZih0aHJvd3NbJ2knXS5sZW5ndGggIT0gdGhyb3dzWydvJ10ubGVuZ3RoKSB7XG5cblx0XHRcdC8vIFdlIGFyZW4ndCBkb25lXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UncmUgY2hlY2tpbmcgcG9pbnRzXG5cdFx0aWYodHlwZSA9PSAncG9pbnRzJykge1xuXG5cdFx0XHQvLyBMb29wIHRocm91Z2ggdGlsbCB3ZSBoYXZlIG5vIG1vcmUgdGhyb3dzXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhyb3dzWydpJ10ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBEb24ndCBvdmVyd3JpdGUgdGhlIGFjdHVhbCBkYXRhXG5cdFx0XHRcdHZhciB2YWxzID0ge1xuXHRcdFx0XHRcdCdpJzogdGhyb3dzWydpJ11baV0udmFsdWUsXG5cdFx0XHRcdFx0J28nOiB0aHJvd3NbJ28nXVtpXS52YWx1ZVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIElmIHdlIGdvdCBhIGRyb3AsIGNvbnNpZGVyIGl0IGEgemVyb1xuXHRcdFx0XHRpZih2YWxzWydpJ10gPT0gJ2QnKSB7XG5cdFx0XHRcdFx0dmFsc1snaSddID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih2YWxzWydvJ10gPT0gJ2QnKSB7XG5cdFx0XHRcdFx0dmFsc1snbyddID0gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSB2YWx1ZXMgZG9uJ3QgbWF0Y2gsIHNvbWVvbmUgd29uXG5cdFx0XHRcdGlmKHZhbHNbJ2knXSAhPSB2YWxzWydvJ10pIHtcblxuXHRcdFx0XHRcdC8vIEFsbG93IGZpbmlzaGluZ1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSdyZSBjaGVja2luZyB0YXJnZXRcblx0XHRlbHNlIHtcblxuXHRcdFx0Ly8gSW5pdCBjb25zZWN1dGl2ZSBoaXRzXG5cdFx0XHR2YXIgaUNvbiA9IDA7XG5cblx0XHRcdC8vIExvb3AgdGhyb3VnaCB0aWxsIHdlIGhhdmUgbm8gbW9yZSB0aHJvd3Ncblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aHJvd3NbJ2knXS5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHRcdC8vIElmIHdlIGdvdCBkb3VibGUgZmFpbHVyZXNcblx0XHRcdFx0aWYoKHRocm93c1snaSddW2ldID09ICdkJyB8fCB0aHJvd3NbJ2knXVtpXSA9PSAwKSAmJlxuXHRcdFx0XHRcdCh0aHJvd3NbJ28nXVtpXSA9PSAnZCcgfHwgdGhyb3dzWydvJ11baV0gPT0gMCkpIHtcblxuXHRcdFx0XHRcdC8vIFJlc2V0IHRoZSBjb25zZWN1dGl2ZSBhbmQgY29udGludWUgdGhlIGxvb3Bcblx0XHRcdFx0XHRpQ29uID0gMDtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHdlIGdvdCBkb3VibGUgMXNcblx0XHRcdFx0aWYodGhyb3dzWydpJ11baV0gPT0gMSAmJiB0aHJvd3NbJ28nXVtpXSA9PSAxKSB7XG5cblx0XHRcdFx0XHQvLyBJbmNyZWFzZSB0aGUgY29uc2VjdXRpdmVcblx0XHRcdFx0XHQrK2lDb247XG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBnb3QgM1xuXHRcdFx0XHRcdGlmKGlDb24gPT0gMykge1xuXG5cdFx0XHRcdFx0XHQvLyBBbGxvdyBmaW5pc2hpbmdcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENvbnRpbnVlIHRoZSBsb29wXG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBMb29rcyBsaWtlIHNvbWVvbmUgd29uXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE5vdCBkb25lIHlldFxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGNhbGN1bGF0ZU1hdGNoU3RhdGUoZGF0YSkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSB7XG5cdFx0XHRcImdhbWVcIjogXCIxXCIsXG5cdFx0XHRcInRocm93XCI6IFwiMVwiLFxuXHRcdFx0XCJ3YWl0aW5nXCI6IGZhbHNlXG5cdFx0fTtcblxuXHRcdC8vIEFyZSB3ZSBvcHBvbmVudCBvciBpbml0aWF0b3Jcblx0XHR2YXIgaXMgPSAodGhpcy5zdGF0ZS50aHJvd2VyLl9pZCA9PSBkYXRhLmluaXRpYXRvcikgPyAnaScgOiAnbyc7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFueSBiaWdheGUgZGF0YSBpdCdzIHNhZmUgdG8gYXNzdW1lIHdlJ3JlIGRvbmUgd2l0aCB0aGVcblx0XHQvL1x0cmVndWxhciBtYXRjaFxuXHRcdGlmKGRhdGEuYmlnYXhlICYmICFUb29scy5lbXB0eShkYXRhLmJpZ2F4ZSkpIHtcblxuXHRcdFx0Ly8gQmlnYXhlIHRocm93IHN0YXJ0cyBhdCAwXG5cdFx0XHRzdGF0ZS50aHJvdyA9IDA7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgcG9pbnRzXG5cdFx0XHRpZihkYXRhLmJpZ2F4ZS5wb2ludHMpIHtcblxuXHRcdFx0XHQvLyBTZXQgYmlnYXhlIHRvIHBvaW50c1xuXHRcdFx0XHRzdGF0ZS5tb2RlID0gXCJiaWdheGVfcG9pbnRzXCI7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSB0aHJvdyB0byB0aGUgY3VycmVudCBsZW5ndGggb2YgZXhpc3RpbmcgdGhyb3dzXG5cdFx0XHRcdHN0YXRlLnRocm93ID0gZGF0YS5iaWdheGUucG9pbnRzW2lzXS5sZW5ndGg7XG5cblx0XHRcdFx0Ly8gSWYgd2UncmUgZmluaXNoZWRcblx0XHRcdFx0aWYoZGF0YS5iaWdheGUucG9pbnRzLmZpbmlzaGVkW2lzXSkge1xuXHRcdFx0XHRcdHN0YXRlLndhaXRpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdHN0YXRlLmJpZ2F4ZV9jYW5fZmluaXNoID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEbyB3ZSBuZWVkIHRvIHNob3cgdGhlIGZpbmlzaCBidXR0b24/XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdHN0YXRlLmJpZ2F4ZV9jYW5fZmluaXNoID0gdGhpcy5jYWxjdWxhdGVCaWdBeGVGaW5pc2hlZCgncG9pbnRzJywgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSB3ZSdyZSBzdGlsbCBvbiB0YXJnZXRcblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdC8vIFNldCBiaWdheGUgdG8gdGFyZ2V0XG5cdFx0XHRcdHN0YXRlLm1vZGUgPSBcImJpZ2F4ZV90YXJnZXRcIjtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIHRocm93IHRvIHRoZSBjdXJyZW50IGxlbmd0aCBvZiBleGlzdGluZyB0aHJvd3Ncblx0XHRcdFx0c3RhdGUudGhyb3cgPSBkYXRhLmJpZ2F4ZS50YXJnZXRbaXNdLmxlbmd0aDtcblxuXHRcdFx0XHQvLyBJZiB3ZSdyZSBmaW5pc2hlZFxuXHRcdFx0XHRpZihkYXRhLmJpZ2F4ZS50YXJnZXQuZmluaXNoZWRbaXNdKSB7XG5cdFx0XHRcdFx0c3RhdGUud2FpdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0c3RhdGUuYmlnYXhlX2Nhbl9maW5pc2ggPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERvIHdlIG5lZWQgdG8gc2hvdyB0aGUgZmluaXNoIGJ1dHRvbj9cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0c3RhdGUuYmlnYXhlX2Nhbl9maW5pc2ggPSB0aGlzLmNhbGN1bGF0ZUJpZ0F4ZUZpbmlzaGVkKCd0YXJnZXQnLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGFzc3VtZSB3ZSBhcmUgaW4gZ2FtZXNcblx0XHRlbHNlIHtcblxuXHRcdFx0Ly8gU2V0IHRoZSBtb2RlXG5cdFx0XHRzdGF0ZS5tb2RlID0gXCJnYW1lc1wiO1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSBmaW5pc2hlZFxuXHRcdFx0aWYoZGF0YS5nYW1lc19maW5pc2hlZFtpc10pIHtcblx0XHRcdFx0c3RhdGUud2FpdGluZyA9IHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIGdvIHRocm91Z2ggZWFjaCBnYW1lXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dmFyIGcgPSBcIjFcIjtcblx0XHRcdFx0Zm9yKGcgb2YgW1wiMVwiLCBcIjJcIiwgXCIzXCJdKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBpdCBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdFx0aWYodHlwZW9mIGRhdGEuZ2FtZXNbZ10gPT0gJ3VuZGVmaW5lZCcgfHxcblx0XHRcdFx0XHRcdHR5cGVvZiBkYXRhLmdhbWVzW2ddW2lzXSA9PSAndW5kZWZpbmVkJyB8fFxuXHRcdFx0XHRcdFx0VG9vbHMuZW1wdHkoZGF0YS5nYW1lc1tnXVtpc10pKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdG9yZSB0aGUgZ2FtZVxuXHRcdFx0XHRcdHN0YXRlLmdhbWUgPSBnO1xuXG5cdFx0XHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIHRocm93XG5cdFx0XHRcdFx0dmFyIHQgPSBcIjFcIjtcblx0XHRcdFx0XHRmb3IodCBvZiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIl0pIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgaXQgZG9lc24ndCBleGlzdFxuXHRcdFx0XHRcdFx0aWYodHlwZW9mIGRhdGEuZ2FtZXNbZ11baXNdW3RdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN0b3JlIHRoZSByb3VuZFxuXHRcdFx0XHRcdHN0YXRlLnRocm93ID0gdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgc3RhdGVcblx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gVHJhY2sgSUQgaW4gaGFzaFxuXHRcdEhhc2gud2F0Y2goJ2lkJywgdGhpcy5pZENhbGxiYWNrKTtcblxuXHRcdC8vIElmIHdlJ3JlIHNpZ25lZCBpblxuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIElEIGluIHRoZSBoYXNoXG5cdFx0XHR2YXIgaWQgPSBIYXNoLmdldCgnaWQnKTtcblx0XHRcdGlmKGlkKSB7XG5cdFx0XHRcdHRoaXMuaWRDYWxsYmFjayhpZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmV4aXN0aW5nRmV0Y2goKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgSUQgaW4gaGFzaCBhbmQgcmVtb3ZlIGl0XG5cdFx0SGFzaC51bndhdGNoKCdpZCcsIHRoaXMuaWRDYWxsYmFjayk7XG5cdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cblx0XHQvLyBJZiB3ZSdyZSBpbiByZXF1ZXN0IG1vZGVcblx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3JlcXVlc3QnKSB7XG5cblx0XHRcdC8vIFN0b3AgdHJhY2tpbmcgdGhlIHJlcXVlc3Rcblx0XHRcdFR3b1dheS51bnRyYWNrKFxuXHRcdFx0XHQnYXV0aCcsICdyZXF1ZXN0LScgKyB0aGlzLnN0YXRlLmlkLFxuXHRcdFx0XHR0aGlzLnJlcXVlc3RDYWxsYmFja1xuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGVsc2UgaWYodGhpcy5zdGF0ZS5tb2RlID09ICdtYXRjaCcpIHtcblxuXHRcdFx0Ly8gU3RvcCB0cmFja2luZyB0aGUgbWF0Y2hcblx0XHRcdFR3b1dheS51bnRyYWNrKFxuXHRcdFx0XHQnbmF0ZicsICdtYXRjaC0nICsgdGhpcy5zdGF0ZS5pZCxcblx0XHRcdFx0dGhpcy5tYXRjaENhbGxiYWNrXG5cdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0ZXhpc3RpbmdDb250aW51ZShldikge1xuXHRcdEhhc2guc2V0KCdpZCcsICdtfCcgKyBldi5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZCk7XG5cdH1cblxuXHRleGlzdGluZ0RlbGV0ZShldikge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBTdG9yZSB0aGUgaWRcblx0XHR2YXIgaWQgPSBldi5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblxuXHRcdC8vIE5vdGlmeSB0aGUgc2VydmljZSB0aGUgbWF0Y2ggd29uJ3QgYmUgY29tcGxldGVkXG5cdFx0U2VydmljZXMuZGVsZXRlKCduYXRmJywgJ21hdGNoJywge1xuXHRcdFx0XCJpZFwiOiBpZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0aHJvd2VyIGNhbid0IGRlbGV0ZSB0aGF0IHJlY29yZCwgb3IgaXQncyBmaW5pc2hlZFxuXHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSA9PSAxMDAwKSB7XG5cdFx0XHRcdFx0c2VsZi5leGlzdGluZ1JlbW92ZShpZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgaXQncyBhbHJlYWR5IGRlbGV0ZWRcblx0XHRcdFx0ZWxzZSBpZihyZXMuZXJyb3IuY29kZSA9PSAxMTA0KSB7XG5cdFx0XHRcdFx0c2VsZi5leGlzdGluZ1JlbW92ZShpZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVW5rbm93biBlcnJvclxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cdFx0XHRcdHNlbGYuZXhpc3RpbmdSZW1vdmUoaWQpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KVxuXHR9XG5cblx0ZXhpc3RpbmdGZXRjaCgpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmluZCBvdXQgaWYgdGhlcmUncyBhbnkgdW5maW5pc2hlZCBnYW1lcyBhc3NvY2lhdGVkIHdpdGggdGhpc1xuXHRcdC8vXHR0aHJvd2VyXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdtYXRjaC91bmZpbmlzaGVkJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW55XG5cdFx0XHRcdGlmKHJlcy5kYXRhLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XCJtb2RlXCI6IFwiZXhpc3RpbmdcIixcblx0XHRcdFx0XHRcdFwiZXhpc3RpbmdcIjogcmVzLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pXG5cdH1cblxuXHRleGlzdGluZ1JlbW92ZShpZCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGV4aXN0aW5nXG5cdFx0dmFyIGV4aXN0aW5nID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5leGlzdGluZyk7XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggb25lXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZihleGlzdGluZ1tpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0ZXhpc3Rpbmcuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEluaXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHZhciBzdGF0ZSA9IHtcImV4aXN0aW5nXCI6IGV4aXN0aW5nfVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBtb3JlIGV4aXN0aW5nXG5cdFx0aWYoZXhpc3RpbmcubGVuZ3RoID09IDApIHtcblx0XHRcdHN0YXRlLm1vZGUgPSAnb3Bwb25lbnQnO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblxuXHRnYW1lRmluaXNoKGV2KSB7XG5cblx0XHQvLyBDbG9uZSB0aGUgbWF0Y2ggc3RhdGVcblx0XHR2YXIgbXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1hdGNoU3RhdGUpO1xuXG5cdFx0Ly8gSWYgd2UncmUgb24gZ2FtZSAzXG5cdFx0aWYobXMuZ2FtZSA9PSBcIjNcIikge1xuXG5cdFx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLnNob3coKVxuXG5cdFx0XHQvLyBDbG9uZSB0aGUgbWF0Y2ggc3RhdGVcblx0XHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHNlbGYuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHRcdC8vIFNldCB0aGUgbWF0Y2ggc3RhdGUgdG8gd2FpdGluZ1xuXHRcdFx0bXMud2FpdGluZyA9IHRydWU7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zXG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gTm90aWZ5IGJhY2tlbmQgdGhlIG1hdGNoIGlzIG92ZXJcblx0XHRcdFNlcnZpY2VzLnVwZGF0ZSgnbmF0ZicsICdtYXRjaC9maW5pc2gvZ2FtZXMnLCB7XG5cdFx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS5pZFxuXHRcdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGdvIHRvIHRoZSBuZXh0IGdhbWVcblx0XHRlbHNlIHtcblxuXHRcdFx0Ly8gQ2xvbmUgdGhlIGdhbWVzXG5cdFx0XHR2YXIgZ2FtZXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmdhbWVzKTtcblxuXHRcdFx0Ly8gSW5jcmVhc2UgdGhlIGdhbWUgYW5kIHRocm93IGluIHRoZSBtYXRjaCBzdGF0ZVxuXHRcdFx0bXMuZ2FtZSA9IChwYXJzZUludChtcy5nYW1lKSArIDEpLnRvU3RyaW5nKCk7XG5cdFx0XHRtcy50aHJvdyA9IFwiMVwiO1xuXG5cdFx0XHQvLyBJZiB3ZSBkb24ndCBoYXZlIHRoZSBuZXh0IGdhbWUsIGFkZCBpdFxuXHRcdFx0aWYodHlwZW9mIGdhbWVzW21zLmdhbWVdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGdhbWVzW21zLmdhbWVdID0ge1xuXHRcdFx0XHRcdFwiaVwiOiB7fSxcblx0XHRcdFx0XHRcIm9cIjoge31cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIGlmIGl0IGRvZXMgZXhpc3Rcblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBhbiBpbml0aWF0b3Jcblx0XHRcdFx0aWYodHlwZW9mIGdhbWVzW21zLmdhbWVdWydpJ10gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRnYW1lc1ttcy5nYW1lXVsnaSddID0ge307XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiBpdCBkb2Vzbid0IGhhdmUgYW4gb3Bwb25lbnRcblx0XHRcdFx0aWYodHlwZW9mIGdhbWVzW21zLmdhbWVdWydvJ10gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRnYW1lc1ttcy5nYW1lXVsnbyddID0ge307XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcImdhbWVzXCI6IGdhbWVzLFxuXHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogbXNcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGlkQ2FsbGJhY2soaWQpIHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gSURcblx0XHRpZihpZCkge1xuXG5cdFx0XHQvLyBTcGxpdCB0aGUgSURcblx0XHRcdGlkID0gaWQuc3BsaXQoJ3wnKTtcblxuXHRcdFx0Ly8gSWYgaXQncyBhIHJlcXVlc3Rcblx0XHRcdGlmKGlkWzBdID09ICdyJykge1xuXG5cdFx0XHRcdC8vIEZldGNoIHRoZSBtYXRjaFxuXHRcdFx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XHRcdFx0XCJpZFwiOiBpZFsxXVxuXHRcdFx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgbWF0Y2ggbm8gbG9uZ2VyIGV4aXN0c1xuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yLmNvZGUgPT0gMTEwNCkge1xuXHRcdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBcIlRoaXMgbWF0Y2ggcmVxdWVzdCBubyBsb25nZXIgZXhpc3RzLlwiKTtcblx0XHRcdFx0XHRcdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0XHQvLyBDaGFuZ2UgdGhlIG1vZGVcblx0XHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFwiYWxpYXNcIjogcmVzLmRhdGEuYWxpYXMsXG5cdFx0XHRcdFx0XHRcImlkXCI6IGlkWzFdLFxuXHRcdFx0XHRcdFx0XCJtb2RlXCI6IFwicmVxdWVzdFwiXG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBMaXN0ZW4gZm9yIGFuIHVwZGF0ZSBvbiB0aGUgcmVxdWVzdFxuXHRcdFx0XHRcdFR3b1dheS50cmFjayhcblx0XHRcdFx0XHRcdCdhdXRoJywgJ3JlcXVlc3QtJyArIGlkWzFdLFxuXHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0Q2FsbGJhY2tcblx0XHRcdFx0XHQpO1xuXG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSlcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpZiBpdCdzIGEgbWF0Y2hcblx0XHRcdGVsc2UgaWYoaWRbMF0gPT0gJ20nKSB7XG5cblx0XHRcdFx0Ly8gTGlzdCBmb3IgYW4gdXBkYXRlIG9uIHRoZSBtYXRjaFxuXHRcdFx0XHRUd29XYXkudHJhY2soXG5cdFx0XHRcdFx0J25hdGYnLCAnbWF0Y2gtJyArIGlkWzFdLFxuXHRcdFx0XHRcdHRoaXMubWF0Y2hDYWxsYmFja1xuXHRcdFx0XHQpXG5cblx0XHRcdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0XHQvLyBGZXRjaCB0aGUgbWF0Y2hcblx0XHRcdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdtYXRjaCcsIHtcblx0XHRcdFx0XHRcImlkXCI6IGlkWzFdXG5cdFx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBtYXRjaCBubyBsb25nZXIgZXhpc3RzXG5cdFx0XHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSA9PSAxMTA0KSB7XG5cdFx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIFwiVGhpcyBtYXRjaCBubyBsb25nZXIgZXhpc3RzLlwiKTtcblx0XHRcdFx0XHRcdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBnYW1lIGlzIGZpbmlzaGVkXG5cdFx0XHRcdFx0XHRpZihyZXMuZGF0YS5maW5pc2hlZCkge1xuXHRcdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBcIlRoaXMgbWF0Y2ggaXMgYWxyZWFkeSBmaW5pc2hlZC5cIik7XG5cdFx0XHRcdFx0XHRcdEhhc2guc2V0KCdpZCcsIG51bGwpO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIEFyZSB3ZSBpbml0aWF0b3Igb3Igb3Bwb25lbnQ/XG5cdFx0XHRcdFx0XHR2YXIgdCA9IHJlcy5kYXRhLmluaXRpYXRvciA9PSBzZWxmLnN0YXRlLnRocm93ZXIuX2lkID8gJ2knIDogJ28nO1xuXG5cdFx0XHRcdFx0XHQvLyBNYWtlIHN1cmUgZWFjaCBnYW1lIGhhcyBhbiBpbnRpYXRvciBhbmQgb3Bwb25lbnRcblx0XHRcdFx0XHRcdGZvcih2YXIgayBpbiByZXMuZGF0YS5nYW1lcykge1xuXHRcdFx0XHRcdFx0XHRmb3IodmFyIHcgb2YgWydpJywgJ28nXSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmKHR5cGVvZiByZXMuZGF0YS5nYW1lc1trXVt3XSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzLmRhdGEuZ2FtZXNba11bd10gPSB7fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIG1hdGNoIHN0YXRlXG5cdFx0XHRcdFx0XHR2YXIgbXMgPSBzZWxmLmNhbGN1bGF0ZU1hdGNoU3RhdGUocmVzLmRhdGEpO1xuXG5cdFx0XHRcdFx0XHQvLyBTdG9yZSBpdCBpbiB0aGUgc3RhdGVcblx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XHRcImFsaWFzXCI6IHQgPT0gJ2knID8gcmVzLmRhdGFbJ29wcG9uZW50X2FsaWFzJ10gOiByZXMuZGF0YVsnaW5pdGlhdG9yX2FsaWFzJ10sXG5cdFx0XHRcdFx0XHRcdFwiYmlnYXhlXCI6IHJlcy5kYXRhLmJpZ2F4ZSxcblx0XHRcdFx0XHRcdFx0XCJnYW1lc1wiOiByZXMuZGF0YS5nYW1lcyxcblx0XHRcdFx0XHRcdFx0XCJpZFwiOiBpZFsxXSxcblx0XHRcdFx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zLFxuXHRcdFx0XHRcdFx0XHRcIm1vZGVcIjogXCJtYXRjaFwiLFxuXHRcdFx0XHRcdFx0XHRcImlzXCI6IHQsXG5cdFx0XHRcdFx0XHR9LCBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiB3ZSdyZSBpbiBnYW1lcyBtb2RlIG9uIHRocm93IGZpdmUsIG9yIGJpZyBheGVcblx0XHRcdFx0XHRcdFx0Ly9cdHBvaW50cyBtb2RlLCBhbGxvdyBjbHV0Y2hlc1xuXHRcdFx0XHRcdFx0XHRpZigobXMubW9kZSA9PSAnZ2FtZXMnICYmIG1zLnRocm93ID09ICc1JykgfHxcblx0XHRcdFx0XHRcdFx0XHRtcy5tb2RlID09ICdiaWdheGVfcG9pbnRzJykge1xuXHRcdFx0XHRcdFx0XHRcdHNlbGYucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnbm9uZSc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgcmVzZXQgdGhlIHN0YXRlXG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fVxuXHR9XG5cblx0bWF0Y2hDYWxsYmFjayhtc2cpIHtcblxuXHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cblx0XHQvLyBJZiB3ZSBnb3QgYW4gdXBkYXRlIG9uIGEgYmlnIGF4ZSBwb2ludHMgdGhyb3dcblx0XHRpZihtc2cudHlwZSA9PSBcImJpZ2F4ZV9wb2ludHNcIikge1xuXG5cdFx0XHQvLyBJZiB3ZSBuZWVkIHRvIHN0YXJ0XG5cdFx0XHRpZihtc2cuc3VidHlwZSA9PSBcInN0YXJ0XCIpIHtcblxuXHRcdFx0XHQvLyBDbG9uZSB0aGUgbWF0Y2ggc3RhdGUgYW5kIGJpZ2F4ZVxuXHRcdFx0XHR2YXIgbXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1hdGNoU3RhdGUpO1xuXHRcdFx0XHR2YXIgYmEgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmJpZ2F4ZSk7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBtb2RlIHRvIGJpZyBheGUgdGFyZ2V0IGFuZCByZXNldCB0aGUgdGhyb3cgdG8gMVxuXHRcdFx0XHRtcy5tb2RlID0gXCJiaWdheGVfcG9pbnRzXCI7XG5cdFx0XHRcdG1zLnRocm93ID0gMDtcblx0XHRcdFx0bXMud2FpdGluZyA9IGZhbHNlO1xuXHRcdFx0XHRtcy5iaWdheGVfY2FuX2ZpbmlzaFxuXG5cdFx0XHRcdC8vIEFkZCB0aGUgcG9pbnRzIHNlY3Rpb25cblx0XHRcdFx0YmFbJ3BvaW50cyddID0ge1xuXHRcdFx0XHRcdFwiaVwiOiBbXSxcblx0XHRcdFx0XHRcIm9cIjogW11cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCB0aGUgYm9hcmQgbW9kZVxuXHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiYmlnYXhlXCI6IGJhLFxuXHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtc1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpZiB3ZSBnb3QgYSB0aHJvd1xuXHRcdFx0ZWxzZSBpZihtc2cuc3VidHlwZSA9PSBcInRocm93XCIpIHtcblxuXHRcdFx0XHQvLyBDbG9uZSB0aGUgYmlnYXhlIGFuZCBtYXRjaCBzdGF0ZVxuXHRcdFx0XHR2YXIgYmEgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmJpZ2F4ZSk7XG5cdFx0XHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHRcdFx0Ly8gSWYgcG9pbnRzIGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0aWYodHlwZW9mIGJhWydwb2ludHMnXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGJhWydwb2ludHMnXSA9IHtcImlcIjogW10sIFwib1wiOiBbXX07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgdGhyb3dlciBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdGlmKHR5cGVvZiBiYVsncG9pbnRzJ11bbXNnLnRocm93ZXJdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0YmFbJ3BvaW50cyddW21zZy50aHJvd2VyXSA9IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRocm93IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0aWYoYmFbJ3BvaW50cyddW21zZy50aHJvd2VyXS5sZW5ndGggPT0gbXNnLnRocm93KSB7XG5cdFx0XHRcdFx0YmFbJ3BvaW50cyddW21zZy50aHJvd2VyXS5wdXNoKHtcImNsdXRjaFwiOiBtc2cuY2x1dGNoLCBcInZhbHVlXCI6IG1zZy52YWx1ZX0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJhWydwb2ludHMnXVttc2cudGhyb3dlcl1bbXNnLnRocm93XSA9IHtcImNsdXRjaFwiOiBtc2cuY2x1dGNoLCBcInZhbHVlXCI6IG1zZy52YWx1ZX07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIHRocm93cyBzbyB3ZSBjYW4ga25vdyBpZiB3ZSdyZSBkb25lXG5cdFx0XHRcdG1zLmJpZ2F4ZV9jYW5fZmluaXNoID0gdGhpcy5jYWxjdWxhdGVCaWdBeGVGaW5pc2hlZCgncG9pbnRzJywgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdG1zLndhaXRpbmcgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcImJpZ2F4ZVwiOiBiYSxcblx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogbXNcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2Ugd2UgYXJlbid0IGFjdHVhbGx5IGZpbmlzaGVkXG5cdFx0XHRlbHNlIGlmKG1zZy5zdWJ0eXBlID09ICdub3RmaW5pc2hlZCcpIHtcblxuXHRcdFx0XHQvLyBDbG9uZSB0aGUgbWF0Y2ggc3RhdGVcblx0XHRcdFx0dmFyIG1zID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tYXRjaFN0YXRlKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgd2FpdGluZyBhbmQgc2V0IHRvIGJpZ2F4ZSBwb2ludHMganVzdCBpbiBjYXNlXG5cdFx0XHRcdG1zLm1vZGUgPSAnYmlnYXhlX3BvaW50cyc7XG5cdFx0XHRcdG1zLndhaXRpbmcgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcIm1hdGNoU3RhdGVcIjogbXN9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIHdlIGdvdCBhbiB1cGRhdGUgb24gYSBiaWcgYXhlIHRhcmdldCB0aHJvd1xuXHRcdGVsc2UgaWYobXNnLnR5cGUgPT0gXCJiaWdheGVfdGFyZ2V0XCIpIHtcblxuXHRcdFx0Ly8gSWYgd2UgbmVlZCB0byBzdGFydFxuXHRcdFx0aWYobXNnLnN1YnR5cGUgPT0gXCJzdGFydFwiKSB7XG5cblx0XHRcdFx0Ly8gQ2xvbmUgdGhlIG1hdGNoIHN0YXRlXG5cdFx0XHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBtb2RlIHRvIGJpZyBheGUgdGFyZ2V0IGFuZCByZXNldCB0aGUgdGhyb3cgdG8gMVxuXHRcdFx0XHRtcy5tb2RlID0gXCJiaWdheGVfdGFyZ2V0XCI7XG5cdFx0XHRcdG1zLnRocm93ID0gMDtcblx0XHRcdFx0bXMud2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgYm9hcmQgbW9kZVxuXHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblxuXHRcdFx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcImJpZ2F4ZVwiOiB7XG5cdFx0XHRcdFx0XHRcInRhcmdldFwiOiB7XG5cdFx0XHRcdFx0XHRcdFwiaVwiOiBbXSxcblx0XHRcdFx0XHRcdFx0XCJvXCI6IFtdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogbXNcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaWYgd2UgZ290IGEgdGhyb3dcblx0XHRcdGVsc2UgaWYobXNnLnN1YnR5cGUgPT0gXCJ0aHJvd1wiKSB7XG5cblx0XHRcdFx0Ly8gQ2xvbmUgdGhlIGJpZ2F4ZSBhbmQgbWF0Y2ggc3RhdGVcblx0XHRcdFx0dmFyIGJhID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5iaWdheGUpO1xuXHRcdFx0XHR2YXIgbXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1hdGNoU3RhdGUpO1xuXG5cdFx0XHRcdC8vIElmIGl0J3MgZmFsc2Ugb3IgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0aWYoIWJhIHx8IHR5cGVvZiBiYVsndGFyZ2V0J10gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRiYSA9IHtcInRhcmdldFwiOiB7XCJpXCI6IFtdLCBcIm9cIjogW119fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRocm93ZXIgZG9lc24ndCBleGlzdFxuXHRcdFx0XHRpZih0eXBlb2YgYmFbJ3RhcmdldCddW21zZy50aHJvd2VyXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGJhWyd0YXJnZXQnXVttc2cudGhyb3dlcl0gPSBbXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSB0aHJvdyBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdGlmKGJhWyd0YXJnZXQnXVttc2cudGhyb3dlcl0ubGVuZ3RoID09IG1zZy50aHJvdykge1xuXHRcdFx0XHRcdGJhWyd0YXJnZXQnXVttc2cudGhyb3dlcl0ucHVzaChtc2cudmFsdWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJhWyd0YXJnZXQnXVttc2cudGhyb3dlcl1bbXNnLnRocm93XSA9IG1zZy52YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgdGhyb3dzIHNvIHdlIGNhbiBrbm93IGlmIHdlJ3JlIGRvbmVcblx0XHRcdFx0bXMuYmlnYXhlX2Nhbl9maW5pc2ggPSB0aGlzLmNhbGN1bGF0ZUJpZ0F4ZUZpbmlzaGVkKCd0YXJnZXQnLCB0aGlzLnN0YXRlKTtcblx0XHRcdFx0bXMud2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiYmlnYXhlXCI6IGJhLFxuXHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtc1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSB3ZSBhcmVuJ3QgYWN0dWFsbHkgZmluaXNoZWRcblx0XHRcdGVsc2UgaWYobXNnLnN1YnR5cGUgPT0gJ25vdGZpbmlzaGVkJykge1xuXG5cdFx0XHRcdC8vIENsb25lIHRoZSBtYXRjaCBzdGF0ZVxuXHRcdFx0XHR2YXIgbXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1hdGNoU3RhdGUpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSB3YWl0aW5nIGFuZCBzZXQgdG8gYmlnYXhlIHRhcmdldCBqdXN0IGluIGNhc2Vcblx0XHRcdFx0bXMubW9kZSA9ICdiaWdheGVfdGFyZ2V0Jztcblx0XHRcdFx0bXMud2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1wibWF0Y2hTdGF0ZVwiOiBtc30pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgdGhlIG1hdGNoIHdhcyBkZWxldGVkXG5cdFx0ZWxzZSBpZihtc2cudHlwZSA9PSAnZGVsZXRlZCcpIHtcblxuXHRcdFx0Ly8gTm90aWZ5IHRoZSB0aHJvd2VyXG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCB0aGlzLnN0YXRlLmFsaWFzICsgXCIgZGVsZXRlZCB0aGUgbWF0Y2guXCIpO1xuXG5cdFx0XHQvLyBSZXNldFxuXHRcdFx0dGhpcy5yZXNldCgpO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgd2UgZ290IGEgbWVzc2FnZSBhYm91dCBhIG5ldyB0aHJvdyBpbiBhIGdhbWVcblx0XHRlbHNlIGlmKG1zZy50eXBlID09ICdnYW1lc190aHJvdycpIHtcblxuXHRcdFx0Ly8gQ2xvbmUgdGhlIGdhbWVzXG5cdFx0XHR2YXIgZ2FtZXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmdhbWVzKTtcblxuXHRcdFx0Ly8gQ3JlYXRlIHRoZSBnYW1lIGlmIGl0IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdGlmKHR5cGVvZiBnYW1lc1ttc2cuZ2FtZV0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0Z2FtZXNbbXNnLmdhbWVdID0ge1xuXHRcdFx0XHRcdFwiaVwiOiB7fSxcblx0XHRcdFx0XHRcIm9cIjoge31cblx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlIHRocm93ZXIgc2VjdGlvbiBvZiB0aGUgZ2FtZSBkb2Vzbid0IGV4aXN0XG5cdFx0XHRpZih0eXBlb2YgZ2FtZXNbbXNnLmdhbWVdW21zZy50aHJvd2VyXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRnYW1lc1ttc2cuZ2FtZV1bbXNnLnRocm93ZXJdID0ge307XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0aGUgdGhyb3dcblx0XHRcdGdhbWVzW21zZy5nYW1lXVttc2cudGhyb3dlcl1bbXNnLnRocm93XSA9IG1zZy52YWx1ZTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wiZ2FtZXNcIjogZ2FtZXN9KTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIHdlIGdvdCBhIHdpbm5lclxuXHRcdGVsc2UgaWYobXNnLnR5cGUgPT0gJ3dpbm5lcicpIHtcblxuXHRcdFx0Ly8gSWYgd2UncmUgdGhlIHdpbm5lclxuXHRcdFx0aWYobXNnLmlzID09IHRoaXMuc3RhdGUuaXMpIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJ3aW5uZXJcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIHdlJ3JlIHRoZSBsb3NlclxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1wibG9zZXJcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgYSB0aW1lb3V0IHRvIHJlc2V0XG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRIYXNoLnNldChcImlkXCIsIG51bGwpO1xuXHRcdFx0fSwgNTAwMCk7XG5cdFx0fVxuXHR9XG5cblx0b3ZlcndyaXRlKGV2KSB7XG5cblx0XHQvLyBDbG9uZSB0aGUgbWF0Y2ggc3RhdGVcblx0XHR2YXIgbXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1hdGNoU3RhdGUpO1xuXG5cdFx0Ly8gSWYgd2UncmUgaW4gZ2FtZXMgbW9kZVxuXHRcdGlmKG1zLm1vZGUgPT0gJ2dhbWVzJykge1xuXG5cdFx0XHQvLyBDaGFuZ2UgdGhlIHRocm93XG5cdFx0XHRtcy50aHJvdyA9IGV2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aHJvdztcblxuXHRcdFx0Ly8gU2V0IHRoZSBib2FyZCBtb2RlXG5cdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9IG1zLnRocm93ID09ICc1JyA/ICdzZWxlY3QnIDogJ25vbmUnO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgd2UncmUgaW4gYmlnYXhlIHRhcmdldCBtb2RlXG5cdFx0ZWxzZSBpZihtcy5tb2RlID09IFwiYmlnYXhlX3RhcmdldFwiIHx8IG1zLm1vZGUgPT0gJ2JpZ2F4ZV9wb2ludHMnKSB7XG5cblx0XHRcdC8vIENoYW5nZSB0aGUgdGhyb3dcblx0XHRcdG1zLnRocm93ID0gcGFyc2VJbnQoZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnRocm93KTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zLFxuXHRcdFx0XCJvdmVyd3JpdGVcIjogdHJ1ZVxuXHRcdH0pO1xuXHR9XG5cblx0cG9pbnRzKGNsdXRjaCwgdmFsdWUpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBDbG9uZSBtYXRjaCBzdGF0ZVxuXHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHQvLyBJZiB3ZSdyZSBpbiBiaWcgYXhlIG1vZGVcblx0XHRpZihtcy5tb2RlID09IFwiZ2FtZXNcIikge1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSBvbiB0aHJvdyBcIjZcIiwgYWthLCB3YWl0aW5nIHRvIGZpbmlzaFxuXHRcdFx0aWYobXMudGhyb3cgPT0gJzYnKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIFwiR28gdG8gbmV4dCBnYW1lIG9yIHNlbGVjdCBhIHRocm93IHRvIG92ZXJ3cml0ZS5cIik7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0XHQvLyBDbG9uZSB0aGUgZ2FtZXMgYW5kIG1hdGNoIHN0YXRlXG5cdFx0XHR2YXIgZ2FtZXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmdhbWVzKTtcblxuXHRcdFx0Ly8gR2V0IHRoZSB2YWx1ZSBvciB2YWx1ZS9jbHV0Y2hcblx0XHRcdHZhciB2YWx1ZSA9IChtcy50aHJvdyA9PSAnNScpID8ge1wiY2x1dGNoXCI6IGNsdXRjaCwgXCJ2YWx1ZVwiOiB2YWx1ZX0gOiB2YWx1ZTtcblxuXHRcdFx0Ly8gU3RvcmUgdGhlIHBvaW50IHZhbHVlXG5cdFx0XHRnYW1lc1ttcy5nYW1lXVt0aGlzLnN0YXRlLmlzXVttcy50aHJvd10gPSB2YWx1ZTtcblxuXHRcdFx0Ly8gU2F2ZSB0aGUgdmFsdWUgYW5kIG5vdGlmeSB0aGUgb3Bwb25lbnRcblx0XHRcdFNlcnZpY2VzLnVwZGF0ZSgnbmF0ZicsICdtYXRjaC9nYW1lJywge1xuXHRcdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUuaWQsXG5cdFx0XHRcdFwiZ2FtZVwiOiBtcy5nYW1lLFxuXHRcdFx0XHRcInRocm93XCI6IG1zLnRocm93LFxuXHRcdFx0XHRcInZhbHVlXCI6IHZhbHVlXG5cdFx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlIG92ZXJ3cml0ZSBmbGFnIGlzIHNldFxuXHRcdFx0XHRcdGlmKHNlbGYuc3RhdGUub3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0XHR2YXIgdCA9IFwiNlwiXG5cdFx0XHRcdFx0XHRmb3IodCBvZiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiLCBcIjZcIl0pIHtcblx0XHRcdFx0XHRcdFx0aWYodHlwZW9mIGdhbWVzW21zLmdhbWVdW3NlbGYuc3RhdGUuaXNdW3RdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1zLnRocm93ID0gdDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0bXMudGhyb3cgPSAocGFyc2VJbnQobXMudGhyb3cpICsgMSkudG9TdHJpbmcoKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTZXQgdGhlIGJvYXJkIG1vZGVcblx0XHRcdFx0XHRzZWxmLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9IG1zLnRocm93ID09ICc1JyA/ICdzZWxlY3QnIDogJ25vbmUnO1xuXG5cdFx0XHRcdFx0Ly8gVXBkYXRlIHRoZSBzdGF0ZVxuXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XCJnYW1lc1wiOiBnYW1lcyxcblx0XHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtcyxcblx0XHRcdFx0XHRcdFwib3ZlcndyaXRlXCI6IGZhbHNlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0XHR9KVxuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UncmUgaW4gYSBiaWdheGUgbW9kZVxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBDbG9uZSB0aGUgYmlnYXhlIHN0YXRlXG5cdFx0XHR2YXIgYmlnYXhlID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5iaWdheGUpO1xuXG5cdFx0XHQvLyBPcHBvbmVudCBpcyBvcHBvc2l0ZSBvZiB0aHJvd2VyXG5cdFx0XHR2YXIgc08gPSB0aGlzLnN0YXRlLmlzID09ICdpJyA/ICdvJyA6ICdpJztcblxuXHRcdFx0Ly8gSWYgd2UncmUgaW4gdGFyZ2V0XG5cdFx0XHRpZihtcy5tb2RlID09IFwiYmlnYXhlX3RhcmdldFwiKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGlzIDEsIDMsIG9yIDUsIGl0J3MgY29uc2lkZXJlZCBhIDFcblx0XHRcdFx0aWYoWzEsIDMsIDVdLmluZGV4T2YodmFsdWUpID4gMCkge1xuXHRcdFx0XHRcdHZhbHVlID0gMTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gdGFyZ2V0XG5cdFx0XHRcdGlmKHR5cGVvZiBiaWdheGVbJ3RhcmdldCddID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0YmlnYXhlWyd0YXJnZXQnXSA9IHtcblx0XHRcdFx0XHRcdFwiZmluaXNoZWRcIjogMCxcblx0XHRcdFx0XHRcdFwiaVwiOiBbXSxcblx0XHRcdFx0XHRcdFwib1wiOiBbXVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgbGVuZ3RoIG9mIHRoaXMgdGhyb3dlcnMgdGhyb3dzIGlzIG5vdCBlcXVhbCBvciAxIGxlc3Ncblx0XHRcdFx0Ly9cdHRoYW4gdGhlIG9wcG9uZW50cywgd2UgY2FuJ3QgYWNjZXB0IHRoaXMgdGhyb3dcblx0XHRcdFx0aWYoIXRoaXMuc3RhdGUub3ZlcndyaXRlICYmIGJpZ2F4ZVsndGFyZ2V0J11bdGhpcy5zdGF0ZS5pc10ubGVuZ3RoID4gYmlnYXhlWyd0YXJnZXQnXVtzT10ubGVuZ3RoKSB7XG5cdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgXCJQbGVhc2Ugd2FpdCBmb3IgXCIgKyB0aGlzLnN0YXRlLmFsaWFzICsgXCIgdG8gbWFrZSB0aGVpciB0aHJvdy5cIik7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0XHRcdExvYWRlci5zaG93KCk7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGRvZXNuJ3QgZXhpc3QgeWV0LCBwdXNoIGl0XG5cdFx0XHRcdGlmKGJpZ2F4ZVsndGFyZ2V0J11bdGhpcy5zdGF0ZS5pc10ubGVuZ3RoID09IG1zLnRocm93KSB7XG5cdFx0XHRcdFx0YmlnYXhlWyd0YXJnZXQnXVt0aGlzLnN0YXRlLmlzXS5wdXNoKHZhbHVlKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEVsc2UsIG92ZXJ3cml0ZSBpdFxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRiaWdheGVbJ3RhcmdldCddW3RoaXMuc3RhdGUuaXNdW21zLnRocm93XSA9IHZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2F2ZSB0aGUgdmFsdWUgYW5kIG5vdGlmeSB0aGUgb3Bwb25lbnRcblx0XHRcdFx0U2VydmljZXMudXBkYXRlKCduYXRmJywgJ21hdGNoL2JpZ2F4ZS90YXJnZXQnLCB7XG5cdFx0XHRcdFx0XCJpZFwiOiB0aGlzLnN0YXRlLmlkLFxuXHRcdFx0XHRcdFwidGhyb3dcIjogbXMudGhyb3csXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiB2YWx1ZVxuXHRcdFx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBvdmVyd3JpdGUgZmxhZyBpcyBzZXRcblx0XHRcdFx0XHRcdGlmKHNlbGYuc3RhdGUub3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0ID0gMDtcblx0XHRcdFx0XHRcdFx0Zm9yKDsgdHJ1ZTsgKyt0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYodHlwZW9mIGJpZ2F4ZVsndGFyZ2V0J11bc2VsZi5zdGF0ZS5pc11bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtcy50aHJvdyA9IHQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtcy50aHJvdyArPSAxO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIHRocm93cyBzbyB3ZSBjYW4ga25vdyBpZiB3ZSdyZSBkb25lXG5cdFx0XHRcdFx0XHRtcy5iaWdheGVfY2FuX2ZpbmlzaCA9IHNlbGYuY2FsY3VsYXRlQmlnQXhlRmluaXNoZWQoJ3RhcmdldCcsIHNlbGYuc3RhdGUpO1xuXG5cdFx0XHRcdFx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFwiYmlnYXhlXCI6IGJpZ2F4ZSxcblx0XHRcdFx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zLFxuXHRcdFx0XHRcdFx0XHRcIm92ZXJ3cml0ZVwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIHdlJ3JlIGluIHBvaW50c1xuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBwb2ludHNcblx0XHRcdFx0aWYodHlwZW9mIGJpZ2F4ZVsncG9pbnRzJ10gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRiaWdheGVbJ3BvaW50cyddID0ge1xuXHRcdFx0XHRcdFx0XCJmaW5pc2hlZFwiOiAwLFxuXHRcdFx0XHRcdFx0XCJpXCI6IFtdLFxuXHRcdFx0XHRcdFx0XCJvXCI6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBsZW5ndGggb2YgdGhpcyB0aHJvd2VycyB0aHJvd3MgaXMgbm90IGVxdWFsIG9yIDEgbGVzc1xuXHRcdFx0XHQvL1x0dGhhbiB0aGUgb3Bwb25lbnRzLCB3ZSBjYW4ndCBhY2NlcHQgdGhpcyB0aHJvd1xuXHRcdFx0XHRpZighdGhpcy5zdGF0ZS5vdmVyd3JpdGUgJiYgYmlnYXhlWydwb2ludHMnXVt0aGlzLnN0YXRlLmlzXS5sZW5ndGggPiBiaWdheGVbJ3BvaW50cyddW3NPXS5sZW5ndGgpIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBcIlBsZWFzZSB3YWl0IGZvciBcIiArIHRoaXMuc3RhdGUuYWxpYXMgKyBcIiB0byBtYWtlIHRoZWlyIHRocm93LlwiKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRcdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdFx0XHQvLyBJZiB0aGUgdmFsdWUgZG9lc24ndCBleGlzdCB5ZXQsIHB1c2ggaXRcblx0XHRcdFx0aWYoYmlnYXhlWydwb2ludHMnXVt0aGlzLnN0YXRlLmlzXS5sZW5ndGggPT0gbXMudGhyb3cpIHtcblx0XHRcdFx0XHRiaWdheGVbJ3BvaW50cyddW3RoaXMuc3RhdGUuaXNdLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRWxzZSwgb3ZlcndyaXRlIGl0XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGJpZ2F4ZVsncG9pbnRzJ11bdGhpcy5zdGF0ZS5pc11bbXMudGhyb3ddID0gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTYXZlIHRoZSB2YWx1ZSBhbmQgbm90aWZ5IHRoZSBvcHBvbmVudFxuXHRcdFx0XHRTZXJ2aWNlcy51cGRhdGUoJ25hdGYnLCAnbWF0Y2gvYmlnYXhlL3BvaW50cycsIHtcblx0XHRcdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUuaWQsXG5cdFx0XHRcdFx0XCJ0aHJvd1wiOiBtcy50aHJvdyxcblx0XHRcdFx0XHRcImNsdXRjaFwiOiBjbHV0Y2gsXG5cdFx0XHRcdFx0XCJ2YWx1ZVwiOiB2YWx1ZVxuXHRcdFx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBvdmVyd3JpdGUgZmxhZyBpcyBzZXRcblx0XHRcdFx0XHRcdGlmKHNlbGYuc3RhdGUub3ZlcndyaXRlKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0ID0gMDtcblx0XHRcdFx0XHRcdFx0Zm9yKDsgdHJ1ZTsgKyt0KSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYodHlwZW9mIGJpZ2F4ZVsncG9pbnRzJ11bc2VsZi5zdGF0ZS5pc11bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRtcy50aHJvdyA9IHQ7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRtcy50aHJvdyArPSAxO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDYWxjdWxhdGUgdGhlIHRocm93cyBzbyB3ZSBjYW4ga25vdyBpZiB3ZSdyZSBkb25lXG5cdFx0XHRcdFx0XHRtcy5iaWdheGVfY2FuX2ZpbmlzaCA9IHNlbGYuY2FsY3VsYXRlQmlnQXhlRmluaXNoZWQoJ3BvaW50cycsIHNlbGYuc3RhdGUpO1xuXG5cdFx0XHRcdFx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFwiYmlnYXhlXCI6IGJpZ2F4ZSxcblx0XHRcdFx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zLFxuXHRcdFx0XHRcdFx0XHRcIm92ZXJ3cml0ZVwiOiBmYWxzZVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF0ZlwiPlxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RlID09ICdvcHBvbmVudCcgJiZcblx0XHRcdFx0XHQ8T3Bwb25lbnQgdGhyb3dlcj17c2VsZi5zdGF0ZS50aHJvd2VyfSBvblNlbGVjdD17c2VsZi5yZXF1ZXN0Q3JlYXRlfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGUgPT0gJ3JlcXVlc3QnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImV4aXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdDxwPldhaXRpbmcgZm9yIHtzZWxmLnN0YXRlLmFsaWFzfSB0byBhY2NlcHQgeW91ciBtYXRjaCByZXF1ZXN0PC9wPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NlbGYucmVxdWVzdENhbmNlbH0+Q2FuY2VsIFJlcXVlc3Q8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGUgPT0gJ2V4aXN0aW5nJyAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUuZXhpc3RpbmcubWFwKGZ1bmN0aW9uKG0sIGkpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gZGF0YS1pZD17bS5faWR9IGNsYXNzTmFtZT1cImV4aXN0aW5nXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cD5Zb3UgaGF2ZSBhbiBleGlzdGluZyBtYXRjaCB3aXRoIHttLmFsaWFzfSwgZG8geW91IHdpc2ggdG8gY29udGludWU/PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLmV4aXN0aW5nRGVsZXRlfT5EZWxldGU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17c2VsZi5leGlzdGluZ0NvbnRpbnVlfT5Db250aW51ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kZSA9PSAnbWF0Y2gnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3R1YWxcIj5cblx0XHRcdFx0XHRcdDxCb2FyZCByZWY9XCJib2FyZFwiIGNsdXRjaE1vZGU9XCJub25lXCIgb25Qb2ludHM9e3NlbGYucG9pbnRzfSAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdGF0c1wiPlxuXHRcdFx0XHRcdFx0XHR7c2VsZi5yZW5kZXJQcmltYXJ5KCl9XG5cdFx0XHRcdFx0XHRcdHtzZWxmLnJlbmRlclNlY29uZGFyeSgpfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBzdHlsZT17e1wiZGlzcGxheVwiOiBzZWxmLnN0YXRlLm1hdGNoU3RhdGUud2FpdGluZyA/ICdibG9jaycgOiAnbm9uZSd9fT5cblx0XHRcdFx0XHRcdFx0PGRpdj48c3Bhbj5XYWl0aW5nIGZvciB7c2VsZi5zdGF0ZS5hbGlhc308L3NwYW4+PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLndpbm5lciAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZpcmV3b3Jrc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdj48c3BhbiBjbGFzc05hbWU9XCJ3aW5uZXJcIj5ZT1UgV09OITwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInB5cm9cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmVmb3JlXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFmdGVyXCI+PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUubG9zZXIgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj48c3BhbiBjbGFzc05hbWU9XCJsb3NlclwiPlNhZGx5LCB5b3UgbG9zdC4gQmV0dGVyIGx1Y2sgbmV4dCB0aW1lLjwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXJCaWdBeGUoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gSW5pdCB0aGUgcm93c1xuXHRcdHZhciByb3dzID0gW107XG5cblx0XHQvLyBPcHBvbmVudCBpcyBvcHBvc2l0ZSBvZiB0aHJvd2VyXG5cdFx0dmFyIHNPID0gdGhpcy5zdGF0ZS5pcyA9PSAnaScgPyAnbyc6ICdpJztcblxuXHRcdC8vIElmIHdlIGhhdmUgYSB0YXJnZXQgc2VjdGlvblxuXHRcdHZhciBhZGRfdG9fcG9pbnRzID0gMDtcblx0XHRpZih0aGlzLnN0YXRlLmJpZ2F4ZS50YXJnZXQpIHtcblx0XHRcdHZhciB0YXJnZXQgPSB0aGlzLnN0YXRlLmJpZ2F4ZS50YXJnZXQ7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyB0cnVlOyArK2kpIHtcblx0XHRcdFx0aWYodGFyZ2V0W3RoaXMuc3RhdGUuaXNdLmxlbmd0aCA8PSBpICYmXG5cdFx0XHRcdFx0dGFyZ2V0W3NPXS5sZW5ndGggPD0gaSkge1xuXHRcdFx0XHRcdGFkZF90b19wb2ludHMgPSBpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHZhciBjb2x1bW5zID0gWycnLCAnJ107XG5cdFx0XHRcdGlmKHR5cGVvZiB0YXJnZXRbdGhpcy5zdGF0ZS5pc11baV0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRjb2x1bW5zWzBdID0gdGFyZ2V0W3RoaXMuc3RhdGUuaXNdW2ldO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHR5cGVvZiB0YXJnZXRbc09dW2ldICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0Y29sdW1uc1sxXSA9IHRhcmdldFtzT11baV07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZGQgdGhlIHJvd1xuXHRcdFx0XHRyb3dzLnB1c2goPHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e2krMX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3RoaXMuc3RhdGUub3ZlcndyaXRlICYmIHRoaXMuc3RhdGUubWF0Y2hTdGF0ZS5tb2RlID09ICdiaWdheGVfdGFyZ2V0JyAmJiB0aGlzLnN0YXRlLm1hdGNoU3RhdGUudGhyb3cgPT0gaSA/ICdvdmVyd3JpdGUnIDogJyd9XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10aHJvdz17aX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm92ZXJ3cml0ZX1cblx0XHRcdFx0XHRcdFx0Pntjb2x1bW5zWzBdfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57Y29sdW1uc1sxXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIHdlIGhhdmUgYSBwb2ludHMgc2VjdGlvblxuXHRcdGlmKHRoaXMuc3RhdGUuYmlnYXhlLnBvaW50cykge1xuXHRcdFx0dmFyIHBvaW50cyA9IHRoaXMuc3RhdGUuYmlnYXhlLnBvaW50cztcblx0XHRcdGZvcih2YXIgaSA9IDA7IHRydWU7ICsraSkge1xuXHRcdFx0XHRpZihwb2ludHNbdGhpcy5zdGF0ZS5pc10ubGVuZ3RoIDw9IGkgJiZcblx0XHRcdFx0XHRwb2ludHNbc09dLmxlbmd0aCA8PSBpKSB7XG5cdFx0XHRcdFx0YWRkX3RvX3BvaW50cyA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGNvbHVtbnMgPSBbJycsICcnXTtcblx0XHRcdFx0aWYodHlwZW9mIHBvaW50c1t0aGlzLnN0YXRlLmlzXVtpXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGNvbHVtbnNbMF0gPSBwb2ludHNbdGhpcy5zdGF0ZS5pc11baV07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYodHlwZW9mIHBvaW50c1tzT11baV0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRjb2x1bW5zWzFdID0gcG9pbnRzW3NPXVtpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCB0aGUgcm93XG5cdFx0XHRcdHJvd3MucHVzaCg8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD57YWRkX3RvX3BvaW50cytpKzF9PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXt0aGlzLnN0YXRlLm92ZXJ3cml0ZSAmJiB0aGlzLnN0YXRlLm1hdGNoU3RhdGUudGhyb3cgPT0gaSA/ICdvdmVyd3JpdGUnIDogKGNvbHVtbnNbMF0uY2x1dGNoID8gJ2NsdXRjaCcgOiAnJyl9XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YS10aHJvdz17aX1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm92ZXJ3cml0ZX1cblx0XHRcdFx0XHRcdFx0Pntjb2x1bW5zWzBdLnZhbHVlfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2NvbHVtbnNbMV0uY2x1dGNoID8gJ2NsdXRjaCcgOiAnJ30+e2NvbHVtbnNbMV0udmFsdWV9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiaWdheGVcIj5cblx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPkI8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUudGhyb3dlci5hbGlhc308L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUuYWxpYXN9PC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7cm93c31cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tYXRjaFN0YXRlLmJpZ2F4ZV9jYW5fZmluaXNoICYmXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmJpZ2F4ZUZpbmlzaH0+RmluaXNoZWQ8L2J1dHRvbj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG5cblx0cmVuZGVyR2FtZSgpIHtcblxuXHRcdC8vIE9wcG9uZW50IGlzIG9wcG9zaXRlIG9mIHRocm93ZXJcblx0XHR2YXIgc08gPSB0aGlzLnN0YXRlLmlzID09ICdpJyA/ICdvJzogJ2knO1xuXG5cdFx0Ly8gV2hhdCBnYW1lIGFyZSB3ZSBpbj9cblx0XHR2YXIgZyA9IHRoaXMuc3RhdGUuZ2FtZXNbdGhpcy5zdGF0ZS5tYXRjaFN0YXRlLmdhbWVdO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuXHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+VDwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS50aHJvd2VyLmFsaWFzfTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS5hbGlhc308L3RoPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjE8L3RkPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJHYW1lVGhyb3coXCIxXCIpfVxuXHRcdFx0XHRcdFx0XHQ8dGQ+e2dbc09dW1wiMVwiXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjI8L3RkPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJHYW1lVGhyb3coXCIyXCIpfVxuXHRcdFx0XHRcdFx0XHQ8dGQ+e2dbc09dW1wiMlwiXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjM8L3RkPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJHYW1lVGhyb3coXCIzXCIpfVxuXHRcdFx0XHRcdFx0XHQ8dGQ+e2dbc09dW1wiM1wiXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjQ8L3RkPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJHYW1lVGhyb3coXCI0XCIpfVxuXHRcdFx0XHRcdFx0XHQ8dGQ+e2dbc09dW1wiNFwiXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjU8L3RkPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJHYW1lVGhyb3coXCI1XCIpfVxuXHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3NOYW1lPXtnW3NPXVtcIjVcIl0gJiYgZ1tzT11bXCI1XCJdLmNsdXRjaCA/ICdjbHV0Y2gnIDogJyd9PntnW3NPXVtcIjVcIl0gPyAoZ1tzT11bXCI1XCJdLnZhbHVlKSA6ICcnfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1hdGNoU3RhdGUudGhyb3cgPT0gJzYnICYmXG5cdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmdhbWVGaW5pc2h9Pnt0aGlzLnN0YXRlLm1hdGNoU3RhdGUuZ2FtZSA9PSBcIjNcIiA/IFwiRmluaXNoXCIgOiBcIk5leHQgR2FtZVwifTwvYnV0dG9uPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyR2FtZVRocm93KHQpIHtcblxuXHRcdC8vIFRoZSBnYW1lXG5cdFx0dmFyIGcgPSB0aGlzLnN0YXRlLm1hdGNoU3RhdGUuZ2FtZTtcblxuXHRcdC8vIFRoZSB2YWx1ZSBvZiB0aGUgdGhyb3dcblx0XHR2YXIgdiA9IG51bGw7XG5cdFx0aWYodGhpcy5zdGF0ZS5nYW1lc1tnXSAmJiB0eXBlb2YgdGhpcy5zdGF0ZS5nYW1lc1tnXVt0aGlzLnN0YXRlLmlzXSkge1xuXHRcdFx0diA9IHRoaXMuc3RhdGUuZ2FtZXNbZ11bdGhpcy5zdGF0ZS5pc11bdF07XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UncmUgd29ya2luZyBvbiA1XG5cdFx0aWYodCA9PSAnNScpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGV4aXN0c1xuXHRcdFx0aWYodHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIDx0ZFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3RoaXMuc3RhdGUub3ZlcndyaXRlICYmIHRoaXMuc3RhdGUubWF0Y2hTdGF0ZS50aHJvdyA9PSB0ID8gJ292ZXJ3cml0ZScgOiAodi5jbHV0Y2ggPyAnY2x1dGNoJyA6ICcnKX1cblx0XHRcdFx0XHRcdFx0ZGF0YS10aHJvdz17dH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vdmVyd3JpdGV9XG5cdFx0XHRcdFx0XHQ+e3YudmFsdWV9PC90ZD5cblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgdGhlcmUncyBubyB2YWx1ZVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJldHVybiA8dGQ+PC90ZD5cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIGl0J3MgMSB0byA0XG5cdFx0ZWxzZSB7XG5cblx0XHRcdC8vIElmIHRoZSB2YWx1ZSBleGlzdHNcblx0XHRcdGlmKHR5cGVvZiB2ICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHJldHVybiA8dGRcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXt0aGlzLnN0YXRlLm92ZXJ3cml0ZSAmJiB0aGlzLnN0YXRlLm1hdGNoU3RhdGUudGhyb3cgPT0gdCA/ICdvdmVyd3JpdGUnIDogJyd9XG5cdFx0XHRcdFx0XHRcdGRhdGEtdGhyb3c9e3R9XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3ZlcndyaXRlfVxuXHRcdFx0XHRcdFx0Pnt2fTwvdGQ+XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIHRoZXJlJ3Mgbm8gdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gPHRkPjwvdGQ+XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyUHJpbWFyeSgpIHtcblxuXHRcdC8vIEluaXQgdGhlIHBvaW50cyBwZXIgZ2FtZVxuXHRcdHZhciBvUG9pbnRzID0ge1xuXHRcdFx0XCJpXCI6IFswLCAwLCAwXSxcblx0XHRcdFwib1wiOiBbMCwgMCwgMF1cblx0XHR9XG5cblx0XHQvLyBPcHBvbmVudCBpcyBvcHBvc2l0ZSBvZiB0aHJvd2VyXG5cdFx0dmFyIHNPID0gdGhpcy5zdGF0ZS5pcyA9PSAnaScgPyAnbyc6ICdpJztcblxuXHRcdC8vIENhbGN1bGF0ZSB0aGUgcG9pbnRzXG5cdFx0Zm9yKHZhciBnIG9mIFtcIjFcIiwgXCIyXCIsIFwiM1wiXSkge1xuXHRcdFx0dmFyIGlHID0gcGFyc2VJbnQoZykgLSAxO1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5nYW1lc1tnXSkge1xuXHRcdFx0XHRmb3IodmFyIHQgb2YgW1wiMVwiLCBcIjJcIiwgXCIzXCIsIFwiNFwiLCBcIjVcIl0pIHtcblx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLmdhbWVzW2ddWydpJ11bdF0pIHtcblx0XHRcdFx0XHRcdGlmKHQgPT0gJzUnKSB7XG5cdFx0XHRcdFx0XHRcdG9Qb2ludHNbJ2knXVtpR10gKz0gdGhpcy5zdGF0ZS5nYW1lc1tnXVsnaSddW3RdLnZhbHVlID09ICdkJyA/IDAgOiB0aGlzLnN0YXRlLmdhbWVzW2ddWydpJ11bdF0udmFsdWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRvUG9pbnRzWydpJ11baUddICs9IHRoaXMuc3RhdGUuZ2FtZXNbZ11bJ2knXVt0XSA9PSAnZCcgPyAwIDogdGhpcy5zdGF0ZS5nYW1lc1tnXVsnaSddW3RdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0aGlzLnN0YXRlLmdhbWVzW2ddWydvJ11bdF0pIHtcblx0XHRcdFx0XHRcdGlmKHQgPT0gJzUnKSB7XG5cdFx0XHRcdFx0XHRcdG9Qb2ludHNbJ28nXVtpR10gKz0gdGhpcy5zdGF0ZS5nYW1lc1tnXVsnbyddW3RdLnZhbHVlID09ICdkJyA/IDAgOiB0aGlzLnN0YXRlLmdhbWVzW2ddWydvJ11bdF0udmFsdWU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRvUG9pbnRzWydvJ11baUddICs9IHRoaXMuc3RhdGUuZ2FtZXNbZ11bJ28nXVt0XSA9PSAnZCcgPyAwIDogdGhpcy5zdGF0ZS5nYW1lc1tnXVsnbyddW3RdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJhbGxcIj5cblx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRoPkc8L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUudGhyb3dlci5hbGlhc308L3RoPlxuXHRcdFx0XHRcdFx0XHQ8dGg+e3RoaXMuc3RhdGUuYWxpYXN9PC90aD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4xPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3RoaXMuc3RhdGUuaXNdWzBdfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57b1BvaW50c1tzT11bMF19PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4yPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3RoaXMuc3RhdGUuaXNdWzFdfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57b1BvaW50c1tzT11bMV19PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD4zPC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3RoaXMuc3RhdGUuaXNdWzJdfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57b1BvaW50c1tzT11bMl19PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXJTZWNvbmRhcnkoKSB7XG5cblx0XHQvLyBJZiB3ZSdyZSBpbiBnYW1lcyBtb2RlXG5cdFx0aWYodGhpcy5zdGF0ZS5tYXRjaFN0YXRlLm1vZGUgPT0gXCJnYW1lc1wiKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJHYW1lKCk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSdyZSBpbiBhIGJpZ2F4ZSBtb2RlXG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJCaWdBeGUoKTtcblx0XHR9XG5cdH1cblxuXHRyZXF1ZXN0Q2FsbGJhY2sobXNnKSB7XG5cblx0XHQvLyBJZiB0aGUgbWF0Y2ggd2FzIGFjY2VwdGVkXG5cdFx0aWYobXNnLnR5cGUgPT0gJ2FjY2VwdGVkJykge1xuXHRcdFx0SGFzaC5zZXQoJ2lkJywgJ218JyArIG1zZy5tYXRjaCk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiBpdCB3YXMgcmVqZWN0ZWRcblx0XHRlbHNlIGlmKG1zZy50eXBlID09ICdyZWplY3RlZCcpIHtcblx0XHRcdHRoaXMucmVxdWVzdFJlc2V0KCk7XG5cdFx0fVxuXHR9XG5cblx0cmVxdWVzdENhbmNlbCgpIHtcblx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3JlcXVlc3QnKSB7XG5cblx0XHRcdC8vIFN0b3JlIHRoaXNcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0XHQvLyBDYW5jZWwgdGhlIG1hdGNoIHJlcXVlc3Rcblx0XHRcdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUuaWRcblx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblxuXHRcdFx0XHRcdC8vIElmIGl0J3MgYWxyZWFkeSBkZWxldGVkXG5cdFx0XHRcdFx0aWYocmVzLmVycm9yLmNvZGUgIT0gMTEwNCkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXF1ZXN0UmVzZXQoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0XHRzZWxmLnJlcXVlc3RSZXNldCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0XHRMb2FkZXIuaGlkZSgpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlcXVlc3RDcmVhdGUob3Bwb25lbnQpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gTWFrZSBhIG1hdGNoIHJlcXVlc3QgZm9yIHRoaXMgb3Bwb25lbnRcblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdCcsIHtcblx0XHRcdFwib3Bwb25lbnRcIjogb3Bwb25lbnQuX2lkLFxuXHRcdFx0XCJvcmdcIjogXCJOQVRGXCJcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIGhhc2hcblx0XHRcdFx0SGFzaC5zZXQoJ2lkJywgJ3J8JyArIHJlcy5kYXRhKVxuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlcXVlc3RSZXNldCgpIHtcblxuXHRcdC8vIFN0b3AgbGlzdGVuaW5nIGZvciBhbiB1cGRhdGUgb24gdGhlIHJlcXVlc3Rcblx0XHRUd29XYXkudW50cmFjayhcblx0XHRcdCdhdXRoJyxcblx0XHRcdCdyZXF1ZXN0LScgKyB0aGlzLnN0YXRlLmlkLFxuXHRcdFx0dGhpcy5yZXF1ZXN0Q2FsbGJhY2tcblx0XHQpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBJRCBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cblx0XHQvLyBDaGFuZ2UgdGhlIG1vZGVcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwiaWRcIjogZmFsc2UsXG5cdFx0XHRcIm1vZGVcIjogXCJvcHBvbmVudFwiXG5cdFx0fSk7XG5cdH1cblxuXHRyZXNldCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwiYWxpYXNcIjogJycsXG5cdFx0XHRcImJpZ2F4ZVwiOiBmYWxzZSxcblx0XHRcdFwiZXhpc3RpbmdcIiA6IGZhbHNlLFxuXHRcdFx0XCJnYW1lc1wiOiBmYWxzZSxcblx0XHRcdFwiaWRcIjogZmFsc2UsXG5cdFx0XHRcImxvc2VyXCI6IGZhbHNlLFxuXHRcdFx0XCJtYXRjaFN0YXRlXCI6IGZhbHNlLFxuXHRcdFx0XCJtb2RlXCI6IFwib3Bwb25lbnRcIixcblx0XHRcdFwiaXNcIjogJycsXG5cdFx0XHRcIndpbm5lclwiOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblxuXHRcdC8vIFNldCBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0aHJvd2VyfSk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIElEIGluIHRoZSBoYXNoXG5cdFx0dmFyIGlkID0gSGFzaC5nZXQoJ2lkJyk7XG5cdFx0aWYoaWQpIHtcblx0XHRcdHRoaXMuaWRDYWxsYmFjayhpZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXhpc3RpbmdGZXRjaCgpO1xuXHRcdH1cblx0fVxuXG5cdHNpZ25vdXQoKSB7XG5cblx0XHQvLyBTZXQgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgSUQgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdpZCcsIG51bGwpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoO1xuIiwiLyoqXG4gKiBOQVRGIFByYWN0aWNlXG4gKlxuICogTWFuYWdlcyB0cmFja2luZyBhbmQgc3RvcmluZyBwcmFjdGljZSBvbiBhbiBOQVRGIGJvYXJkXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yMFxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy5qcycpO1xuXG4vLyBSZWFjdCBjb21wb25lbnRzXG52YXIgTW9kYWwgPSByZXF1aXJlKCcuLi9lbGVtZW50cy9tb2RhbC5qc3gnKTtcbnZhciBCb2FyZCA9IHJlcXVpcmUoJy4vYm9hcmQuanN4Jyk7XG5cbi8vIFByYWN0aWNlIENvbXBvbmVudFxuY2xhc3MgUHJhY3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IDAsXG5cdFx0XHRcImNsdXRjaEhpdHNcIjogMCxcblx0XHRcdFwibW9kZVwiOiBudWxsLFxuXHRcdFx0XCJwb2ludHNcIjogW10sXG5cdFx0XHRcInNob3dQb2ludHNcIjogZmFsc2UsXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlcixcblx0XHRcdFwidG90YWxQb2ludHNcIjogMFxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm1vZGVTZWxlY3QgPSB0aGlzLm1vZGVTZWxlY3QuYmluZCh0aGlzKTtcblx0XHR0aGlzLm92ZXJ3cml0ZSA9IHRoaXMub3ZlcndyaXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHMgPSB0aGlzLnBvaW50cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9pbnRzSGlkZSA9IHRoaXMucG9pbnRzSGlkZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9pbnRzU2hvdyA9IHRoaXMucG9pbnRzU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIElmIHdlIGhhdmUgZGF0YSBpbiBsb2NhbCBzdG9yYWdlXG5cdFx0aWYoJ25hdGZfcHJhY3RpY2UnIGluIGxvY2FsU3RvcmFnZSkge1xuXHRcdFx0dmFyIG5ld19zdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWyduYXRmX3ByYWN0aWNlJ10pO1xuXHRcdFx0bmV3X3N0YXRlLnRocm93ZXIgPSB0aGlzLnN0YXRlLnRocm93ZXI7XG5cdFx0XHR0aGlzLnNldFN0YXRlKG5ld19zdGF0ZSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3VwZXJuYXR1cmFsJykge1xuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gNCkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnZXhwZWN0ZWQnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ2NsdXRjaCcpIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnc2VsZWN0Jztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRkZWxldGUgbG9jYWxTdG9yYWdlWyduYXRmX3ByYWN0aWNlJ107XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHBvaW50cywgc3RvcmUgdGhlbSBpbiBsb2NhbCBzdG9yYWdlXG5cdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoKSB7XG5cdFx0XHRsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpO1xuXHRcdH1cblx0fVxuXG5cdG1vZGVTZWxlY3QoZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwibW9kZVwiOiBldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubW9kZVxuXHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0c3dpdGNoKHRoaXMuc3RhdGUubW9kZSkge1xuXHRcdFx0XHRjYXNlICdmcmVlJzpcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnOyBicmVhaztcblx0XHRcdFx0Y2FzZSAnc3VwZXJuYXR1cmFsJzpcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJzsgYnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NsdXRjaCc6XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnZXhwZWN0ZWQnOyBicmVhaztcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG92ZXJ3cml0ZShldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wib3ZlcndyaXRlXCI6IHRydWV9LCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIG1vZGUgaXMgZnJlZVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdmcmVlJykge1xuXHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIGlmIHRoZSBtb2RlIGlzIHN1cGVybmF0dXJhbFxuXHRcdFx0ZWxzZSBpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3N1cGVybmF0dXJhbCcpIHtcblxuXHRcdFx0XHQvLyBJZiB3ZSdyZSBkaXZpc2libGUgYnkgNVxuXHRcdFx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggJSA1ID09IDApIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHBvaW50cyhjbHV0Y2gsIHZhbHVlKSB7XG5cblx0XHQvLyBHZXQgdGhlIGludCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZVxuXHRcdHZhciB2ID0gcGFyc2VJbnQodmFsdWUpO1xuXG5cdFx0Ly8gSWYgdGhlIG92ZXJ3cml0ZSBmbGFnIGlzIHNldFxuXHRcdGlmKHRoaXMuc3RhdGUub3ZlcndyaXRlKSB7XG5cblx0XHRcdC8vIEdyYWIgdGhlIGxhc3QgdmFsdWVcblx0XHRcdHZhciBsYXN0ID0gdGhpcy5zdGF0ZS5wb2ludHNbdGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoLTFdO1xuXG5cdFx0XHQvLyBCYWNrdHJhY2sgdGhlIGNsdXRjaCBzdGF0c1xuXHRcdFx0aWYobGFzdFswXSkge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmNsdXRjaEF0dGVtcHRzIC09IDE7XG5cdFx0XHRcdGlmKGxhc3RbMV0gPT0gNykge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoSGl0cyAtPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJhY2t0cmFjayB0aGUgcG9pbnRzIHN0YXRzXG5cdFx0XHRpZihsYXN0WzFdICE9ICdkJykge1xuXHRcdFx0XHR0aGlzLnN0YXRlLnRvdGFsUG9pbnRzIC09IGxhc3RbMV07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgbGFzdCBpdGVtXG5cdFx0XHR0aGlzLnN0YXRlLnBvaW50cy5wb3AoKTtcblx0XHR9XG5cblx0XHQvLyBBZGQgdG8gdGhlIHBvaW50cyBsaXN0XG5cdFx0dGhpcy5zdGF0ZS5wb2ludHMucHVzaChbY2x1dGNoLCAodmFsdWUgPT0gJ2QnID8gdmFsdWUgOiB2KV0pO1xuXG5cdFx0Ly8gSWYgd2UgZ290IGEgY2x1dGNoIGF0dGVtcHRcblx0XHRpZihjbHV0Y2gpIHtcblx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMgKz0gMTtcblx0XHRcdGlmKHZhbHVlID09IDcpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hIaXRzICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ290IGEgdmFsdWVcblx0XHRpZih2ID4gMCkge1xuXHRcdFx0dGhpcy5zdGF0ZS50b3RhbFBvaW50cyArPSB2O1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJjbHV0Y2hBdHRlbXB0c1wiOiB0aGlzLnN0YXRlLmNsdXRjaEF0dGVtcHRzLFxuXHRcdFx0XCJjbHV0Y2hIaXRzXCI6IHRoaXMuc3RhdGUuY2x1dGNoSGl0cyxcblx0XHRcdFwib3ZlcndyaXRlXCI6IGZhbHNlLFxuXHRcdFx0XCJwb2ludHNcIjogdGhpcy5zdGF0ZS5wb2ludHMsXG5cdFx0XHRcInRvdGFsUG9pbnRzXCI6IHRoaXMuc3RhdGUudG90YWxQb2ludHNcblx0XHR9LCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3VwZXJuYXR1cmFsJykge1xuXHRcdFx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggJSA1ID09IDQpIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHBvaW50c0hpZGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJzaG93UG9pbnRzXCI6IGZhbHNlfSk7XG5cdH1cblxuXHRwb2ludHNTaG93KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wic2hvd1BvaW50c1wiOiB0cnVlfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBwb2ludHNcblx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgpIHtcblxuXHRcdFx0Ly8gSW5pdCB0aGUgbGFzdCBpbmRleFxuXHRcdFx0dmFyIGxhc3QgPSAyODtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBsZXNzIHRoYW4gMjlcblx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCA8IDI5KSB7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggLSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdGZcIj5cblx0XHRcdFx0PGRsIGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7XCJkaXNwbGF5XCI6IHNlbGYuc3RhdGUubW9kZSA9PSBudWxsID8gJ2Jsb2NrJzonbm9uZSd9fT5cblx0XHRcdFx0XHQ8ZHQgZGF0YS1tb2RlPVwiZnJlZVwiIG9uQ2xpY2s9e3RoaXMubW9kZVNlbGVjdH0+RnJlZSBQcmFjdGljZTwvZHQ+XG5cdFx0XHRcdFx0PGRkPkluIGZyZWUgcHJhY3RpY2UgYW55IHBvaW50cyBhcmUgYXZhaWxhYmxlIGF0IGFueSB0aW1lLiBZb3UgbXVzdCBzZWxlY3QgdGhlIGNsdXRjaCBmaXJzdCBpZiB5b3Ugd2lzaCB0byB0cnkgZm9yIGl0LjwvZGQ+XG5cdFx0XHRcdFx0PGR0IGRhdGEtbW9kZT1cInN1cGVybmF0dXJhbFwiIG9uQ2xpY2s9e3RoaXMubW9kZVNlbGVjdH0+U3VwZXJuYXR1cmFsIC8gVW5pY29ybjwvZHQ+XG5cdFx0XHRcdFx0PGRkPkluIHN1cGVybmF0dXJhbCBwcmFjdGljZSBldmVyeSBmaWZ0aCB0aHJvdyBpcyBmb3IgY2x1dGNoLCBhbmQgaXQgd2lsbCBiZSBwcmUtc2VsZWN0ZWQgZm9yIHlvdSBvbiB0aG9zZSB0dXJucy48L2RkPlxuXHRcdFx0XHRcdDxkdCBkYXRhLW1vZGU9XCJjbHV0Y2hcIiBvbkNsaWNrPXt0aGlzLm1vZGVTZWxlY3R9PkNsdXRjaDwvZHQ+XG5cdFx0XHRcdFx0PGRkPkluIGNsdXRjaCBwcmFjdGljZSBldmVyeSB0aHJvdyBpcyBmb3IgdGhlIGNsdXRjaCwgYW5kIGl0IHdpbGwgYmUgcHJlLXNlbGVjdGVkIGV2ZXJ5IHR1cm4uPC9kZD5cblx0XHRcdFx0PC9kbD5cblx0XHRcdFx0PGRpdiBzdHlsZT17e1wiZGlzcGxheVwiOiBzZWxmLnN0YXRlLm1vZGUgPT0gbnVsbCA/ICdub25lJzonYmxvY2snfX0+XG5cdFx0XHRcdFx0PEJvYXJkIHJlZj1cImJvYXJkXCIgY2x1dGNoTW9kZT17c2VsZi5zdGF0ZS5tb2RlfSBvblBvaW50cz17c2VsZi5wb2ludHN9IC8+XG5cdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhdmVyYWdlc1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNsdXRjaGVzIGZyaWdodFwiPjxiPkNsdXRjaCAlOiA8L2I+PHNwYW4+e3NlbGYuc3RhdGUuY2x1dGNoQXR0ZW1wdHMgPT0gMCA/IFwiMC4wXCIgOiAoKHNlbGYuc3RhdGUuY2x1dGNoSGl0cyAvIHNlbGYuc3RhdGUuY2x1dGNoQXR0ZW1wdHMpICogMTAwLjApLnRvRml4ZWQoMSl9PC9zcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhdmVyYWdlIGZsZWZ0XCI+PGI+QXZnIFRocm93OiA8L2I+PHNwYW4+eyhzZWxmLnN0YXRlLnRvdGFsUG9pbnRzIC8gc2VsZi5zdGF0ZS5wb2ludHMubGVuZ3RoKS50b0ZpeGVkKDIpfTwvc3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvaW50c1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5sZW5ndGggPiAyOSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4ga2V5PXstMX0gY2xhc3NOYW1lPVwibGluayBib2xkXCIgb25DbGljaz17c2VsZi5wb2ludHNTaG93fT4uLi48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5zbGljZSgtMjkpLm1hcChmdW5jdGlvbihwLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZihpID09IGxhc3QpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtcImxhc3QgXCIgKyAoc2VsZi5zdGF0ZS5vdmVyd3JpdGUgPyAnb3ZlcndyaXRlJyA6IChwWzBdID8gJ2NsdXRjaCcgOiAnJykpfSBvbkNsaWNrPXtzZWxmLm92ZXJ3cml0ZX0+e3BbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtwWzBdID8gJ2NsdXRjaCc6Jyd9PntwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJlc2V0IGZyaWdodFwiIG9uQ2xpY2s9e3NlbGYucmVzZXR9PlJlc2V0PC9kaXY+XG5cdFx0XHRcdFx0eyh0aGlzLnN0YXRlLnRocm93ZXIgJiYgdGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoID4gMCkgJiZcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2F2ZSBmbGVmdFwiIG9uQ2xpY2s9e3NlbGYuc2F2ZX0+U2F2ZSAmIFJlc2V0PC9kaXY+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtzZWxmLnN0YXRlLnNob3dQb2ludHMgJiZcblx0XHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0XHR0aXRsZT1cIkFsbCBwb2ludHMgdGhpcyBwcmFjdGljZVwiXG5cdFx0XHRcdFx0XHRcdGNsb3NlPXtzZWxmLnBvaW50c0hpZGV9XG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxsUG9pbnRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLm1hcChmdW5jdGlvbihwLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3BbMF0gPyAnY2x1dGNoJzonJ30+e3BbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZXNldCgpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJlc2V0IGZsYWdcblx0XHR2YXIgcmVzZXQgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBwb2ludHNcblx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgpIHtcblx0XHRcdC8vIFVwZGF0ZSB0aGUgZmxhZyBiYXNlZCBvbiB0aGUgdXNlcidzIHJlc3BvbnNlXG5cdFx0XHRyZXNldCA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZXNldCB5b3VyIHByYWN0aWNlPycpO1xuXHRcdH1cblxuXHRcdC8vIElmIHdlIGNhbiByZXNldFxuXHRcdGlmKHJlc2V0KSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XCJjbHV0Y2hBdHRlbXB0c1wiOiAwLFxuXHRcdFx0XHRcImNsdXRjaEhpdHNcIjogMCxcblx0XHRcdFx0XCJtb2RlXCI6IG51bGwsXG5cdFx0XHRcdFwicG9pbnRzXCI6IFtdLFxuXHRcdFx0XHRcInNob3dQb2ludHNcIjogZmFsc2UsXG5cdFx0XHRcdFwidG90YWxQb2ludHNcIjogMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0c2F2ZShldikge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIFNlbmQgdGhlIHByYWN0aWNlIHRvIHRoZSBOQVRGIHNlcnZpY2Vcblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ25hdGYnLCAncHJhY3RpY2UnLCB7XG5cdFx0XHRcInBvaW50c1wiOiB0aGlzLnN0YXRlLnBvaW50c1xuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIE5vdGlmeVxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsICdQcmFjdGljZSBzYXZlZCEnKTtcblxuXHRcdFx0XHQvLyBSZXNldFxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IDAsXG5cdFx0XHRcdFx0XCJjbHV0Y2hIaXRzXCI6IDAsXG5cdFx0XHRcdFx0XCJtb2RlXCI6IG51bGwsXG5cdFx0XHRcdFx0XCJwb2ludHNcIjogW10sXG5cdFx0XHRcdFx0XCJzaG93UG9pbnRzXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwidG90YWxQb2ludHNcIjogMFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25pbih0aHJvd2VyKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IHRocm93ZXJ9KTtcblx0fVxuXG5cdHNpZ25vdXQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IGZhbHNlfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gUHJhY3RpY2U7XG4iLCIvKipcbiAqIE5BVEYgU3RhdHNcbiAqXG4gKiBGZXRjaHMgYW5kIGRpc3BsYXlzIE5BVEYgc3RhdHMgZm9yIHByYWN0aWNlIGFuZCBtYXRjaGVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNVxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy5qcycpO1xuXG4vLyBDb21wb25lbnRzXG52YXIgTW9kYWwgPSByZXF1aXJlKCcuLi9lbGVtZW50cy9tb2RhbC5qc3gnKTtcblxuLy8gU3RhdHMgY29tcG9uZW50XG5jbGFzcyBTdGF0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwibWF0Y2hcIjogbnVsbCxcblx0XHRcdFwicHJhY3RpY2VcIjogbnVsbCxcblx0XHRcdFwicHJhY3RpY2VfYWxsXCI6IGZhbHNlLFxuXHRcdFx0XCJwcmFjdGljZV9kYXRhXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXJcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5tYXRjaFN0YXRzID0gdGhpcy5tYXRjaFN0YXRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZURhdGEgPSB0aGlzLnByYWN0aWNlRGF0YS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJhY3RpY2VEYXRhSGlkZSA9IHRoaXMucHJhY3RpY2VEYXRhSGlkZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0cyA9IHRoaXMucHJhY3RpY2VTdGF0cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0c0FsbCA9IHRoaXMucHJhY3RpY2VTdGF0c0FsbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluID0gdGhpcy5zaWduaW4uYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25vdXQgPSB0aGlzLnNpZ25vdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIHNpZ25pbiAvIHNpZ25vdXRcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBJZiBzb21lb25lIGlzIGxvZ2dlZCBpblxuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXG5cdFx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2Ugc3RhdHNcblx0XHRcdHRoaXMucHJhY3RpY2VTdGF0cygpO1xuXG5cdFx0XHQvLyBGZXRjaCB0aGUgbWF0Y2ggc3RhdHNcblx0XHRcdC8vdGhpcy5tYXRjaFN0YXRzKCk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIHNpZ25pbiAvIHNpZ25vdXRcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0fVxuXG5cdG1hdGNoU3RhdHMoKSB7XG5cblx0XHQvLyBTYXZlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIG1hdGNoIHN0YXRzXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdtYXRjaC9zdGF0cycsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXRzIHRvIHRoZSBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcIm1hdGNoXCI6IHJlcy5kYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByYWN0aWNlRGF0YShldikge1xuXG5cdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBkYXRhXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdwcmFjdGljZS9kYXRhJywge1xuXHRcdFx0XCJpZFwiOiBldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXRzIHRvIHRoZSBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcInByYWN0aWNlX2RhdGFcIjogcmVzLmRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJhY3RpY2VEYXRhSGlkZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInByYWN0aWNlX2RhdGFcIjogZmFsc2V9KTtcblx0fVxuXG5cdHByYWN0aWNlU3RhdHMoYWxsKSB7XG5cblx0XHQvLyBJZiBBbGwgaXMgbm90IHBhc3NlZFxuXHRcdGlmKHR5cGVvZiBhbGwgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGFsbCA9IGZhbHNlXG5cdFx0fVxuXG5cdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBzdGF0c1xuXHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAncHJhY3RpY2Uvc3RhdHMnLCB7XG5cdFx0XHRcImFsbFwiOiBhbGxcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXRzIHRvIHRoZSBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcInByYWN0aWNlXCI6IHJlcy5kYXRhLFxuXHRcdFx0XHRcdFwicHJhY3RpY2VfYWxsXCI6IGFsbFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcmFjdGljZVN0YXRzQWxsKCkge1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0cyh0cnVlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIHByYWN0aWNlID0gdGhpcy5zdGF0ZS5wcmFjdGljZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXRmXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnByYWN0aWNlICYmXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PGgyPlByYWN0aWNlPC9oMj5cblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJwcmFjdGljZVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwiZGF0ZVwiPiA8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwicG9pbnRzXCI+UG9pbnRzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInRocm93c1wiPlRocm93czwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJkcm9wc1wiPkRyb3BzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPVwiMlwiPkF2ZXJhZ2UgUG9pbnRzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPVwiM1wiPkhpdCBSYXRlczwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiYXZlcmFnZVwiPlRvdGFsPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJhdmVyYWdlXCI+VGFyZ2V0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJyYXRlXCI+VG90YWw8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInJhdGVcIj5UYXJnZXQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInJhdGVcIj5DbHV0Y2g8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+T3ZlcmFsbDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnBvaW50cy50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC50aHJvd3MuYXR0ZW1wdHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwudGhyb3dzLmRyb3BzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLmF2ZXJhZ2UudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwuYXZlcmFnZS50YXJnZXR9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucmF0ZS50b3RhbH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucmF0ZS50YXJnZXR9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnJhdGUuY2x1dGNofSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0e3ByYWN0aWNlLmxhc3QubWFwKGZ1bmN0aW9uKG8sIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2l9IGRhdGEtaWQ9e28uX2lkfSBjbGFzc05hbWU9XCJzZXNzaW9uXCIgb25DbGljaz17c2VsZi5wcmFjdGljZURhdGF9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57VXRpbHMuZGF0ZShvLl9jcmVhdGVkKX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5wb2ludHMudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28udGhyb3dzLmF0dGVtcHRzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnRocm93cy5kcm9wc308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5hdmVyYWdlLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLmF2ZXJhZ2UudGFyZ2V0fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnJhdGUudG90YWx9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnJhdGUudGFyZ2V0fSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5yYXRlLmNsdXRjaH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0eyF0aGlzLnN0YXRlLnByYWN0aWNlX2FsbCAmJlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17dGhpcy5wcmFjdGljZVN0YXRzQWxsfT5GZXRjaCBBbGw8L3A+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5wcmFjdGljZV9kYXRhICYmXG5cdFx0XHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiUHJhY3RpY2UgRGF0YVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2U9e3NlbGYucHJhY3RpY2VEYXRhSGlkZX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxsUG9pbnRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wcmFjdGljZV9kYXRhLm1hcChmdW5jdGlvbihwLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17cFswXSA/ICdjbHV0Y2gnOicnfT57XCJcIiArIHBbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tYXRjaCAmJlxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXG5cdFx0Ly8gU2V0IHRoZSB0aHJvd2VyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IHRocm93ZXJ9KTtcblxuXHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBzdGF0c1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0cygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIG1hdGNoIHN0YXRzXG5cdFx0Ly90aGlzLm1hdGNoU3RhdHMoKTtcblx0fVxuXG5cdHNpZ25vdXQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IGZhbHNlfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gU3RhdHM7XG4iLCIvKipcbiAqIE9wcG9uZW50XG4gKlxuICogQSBjb21wb25lbnQgZm9yIHNlbGVjdGluZyBhbiBvcHBvbmVudCB2aWEgZmF2b3VyaXRlcyBvciBzZWFyY2hcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI3XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG5cbi8vIEVsZW1lbnRzXG52YXIgSW5wdXRFbnRlciA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL2lucHV0RW50ZXIuanN4XCIpO1xuXG4vLyBTb3J0IGZhdm91cml0ZXNcbmZ1bmN0aW9uIGFsaWFzU29ydChhLCBiKSB7XG5cdHJldHVybiBhLmFsaWFzLmxvY2FsZUNvbXBhcmUoYi5hbGlhcyk7XG59XG5cbmNsYXNzIE9wcG9uZW50Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJmYXZvdXJpdGVcIjogcHJvcHMuZmF2b3VyaXRlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXJcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZFxuXHRcdHRoaXMuYWRkID0gdGhpcy5hZGQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcblx0XHRpZihwcmV2UHJvcHMudGhyb3dlci5faWQgIT0gdGhpcy5wcm9wcy50aHJvd2VyLl9pZCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFwiZmF2b3VyaXRlXCI6IHRoaXMucHJvcHMuZmF2b3VyaXRlLFxuXHRcdFx0XHRcInRocm93ZXJcIjogdGhpcy5wcm9wcy50aHJvd2VyXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGFkZChldikge1xuXG5cdFx0Ly8gU3RvcCBhbnkgZnVydGhlciBldmVudHNcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2VydmljZSB0byBhZGQgdGhlIGZhdm91cml0ZVxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdmYXZvdXJpdGUnLCB7XG5cdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUudGhyb3dlci5faWRcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJmYXZvdXJpdGVcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZShldikge1xuXG5cdFx0Ly8gU3RvcCBhbnkgZnVydGhlciBldmVudHNcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2VydmljZSB0byBhZGQgdGhlIGZhdm91cml0ZVxuXHRcdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdmYXZvdXJpdGUnLCB7XG5cdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUudGhyb3dlci5faWRcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJmYXZvdXJpdGVcIjogZmFsc2V9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkfT5cblx0XHRcdFx0PHRkPnt0aGlzLnN0YXRlLnRocm93ZXIuYWxpYXN9PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmZhdm91cml0ZSA/XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci10aW1lc1wiIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fSBvbkNsaWNrPXt0aGlzLnJlbW92ZX0+PC9pPlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLXBsdXNcIiBzdHlsZT17e2NvbG9yOiBcImdyZWVuXCJ9fSBvbkNsaWNrPXt0aGlzLmFkZH0+PC9pPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG5cblx0c2VsZWN0ZWQoZXYpIHtcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnByb3BzLnNlbGVjdGVkKHRoaXMuc3RhdGUudGhyb3dlcik7XG5cdH1cbn1cblxuLy8gT3Bwb25lbnQgQ29tcG9uZW50XG5jbGFzcyBPcHBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiZmF2b3VyaXRlc1wiOiBbXSxcblx0XHRcdFwibW9kZVwiOiBcImZhdm91cml0ZXNcIixcblx0XHRcdFwic2VhcmNoXCI6IFtdLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXJcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5mYXZvdXJpdGVTaG93ID0gdGhpcy5mYXZvdXJpdGVTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VhcmNoU2hvdyA9IHRoaXMuc2VhcmNoU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblxuXHRcdC8vIElmIHNvbWVvbmUgaXMgbG9nZ2VkIGluXG5cdFx0aWYodGhpcy5zdGF0ZS50aHJvd2VyKSB7XG5cdFx0XHR0aGlzLmZhdm91cml0ZXMoKTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdH1cblxuXHRmYXZvdXJpdGVzKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGdldCB0aGUgZmF2b3VyaXRlc1xuXHRcdFNlcnZpY2VzLnJlYWQoJ2F1dGgnLCAnZmF2b3VyaXRlcycsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTb3J0IHRoZSBkYXRhXG5cdFx0XHRcdHJlcy5kYXRhLnNvcnQoYWxpYXNTb3J0KTtcblxuXHRcdFx0XHQvLyBTdG9yZSB0aGUgZmF2b3VyaXRlc1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcImZhdm91cml0ZXNcIjogcmVzLmRhdGF9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmYXZvdXJpdGVTaG93KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kZVwiOiBcImZhdm91cml0ZXNcIn0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGUgPT0gJ2Zhdm91cml0ZXMnID9cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+RmF2b3JpdGVzPC9zcGFuPiB8IDxzcGFuIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXtzZWxmLnNlYXJjaFNob3d9PlNlYXJjaDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0OlxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17c2VsZi5mYXZvdXJpdGVTaG93fT5GYXZvcml0ZXM8L3NwYW4+IHwgPHNwYW4+U2VhcmNoPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHRcdFx0PHA+PElucHV0RW50ZXIgb25FbnRlcj17c2VsZi5zZWFyY2h9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGFsaWFzXCIgLz48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDx0YWJsZT5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHI+PHRoPkFsaWFzPC90aD48dGg+RmF2b3JpdGU8L3RoPjwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RlID09ICdmYXZvdXJpdGVzJyA/XG5cdFx0XHRcdFx0XHRcdHNlbGYuc3RhdGUuZmF2b3VyaXRlcy5tYXAoZnVuY3Rpb24odCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8T3Bwb25lbnRSb3cga2V5PXtpfSB0aHJvd2VyPXt0fSBmYXZvdXJpdGU9e3RydWV9IHNlbGVjdGVkPXtzZWxmLnNlbGVjdGVkfSAvPlxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRzZWxmLnN0YXRlLnNlYXJjaC5tYXAoZnVuY3Rpb24odCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8T3Bwb25lbnRSb3cga2V5PXtpfSB0aHJvd2VyPXt0fSBmYXZvdXJpdGU9e2ZhbHNlfSBzZWxlY3RlZD17c2VsZi5zZWxlY3RlZH0gLz5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpO1xuXHR9XG5cblx0c2VhcmNoKHEpIHtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gcXVlcnksIGRvIG5vdGhpbmdcblx0XHRpZihxLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGdldCB0aGUgc2VhcmNoIHJlc3VsdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ3NlYXJjaCcsIHtcblx0XHRcdFwicVwiOiBxXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU29ydCB0aGUgZGF0YVxuXHRcdFx0XHRyZXMuZGF0YS5zb3J0KGFsaWFzU29ydCk7XG5cblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGZhdm91cml0ZXNcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJzZWFyY2hcIjogcmVzLmRhdGF9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdHNlYXJjaFNob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RlXCI6IFwic2VhcmNoXCJ9KVxuXHR9XG5cblx0c2VsZWN0ZWQodGhyb3dlcikge1xuXHRcdGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uU2VsZWN0ID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZWxlY3QodGhyb3dlcik7XG5cdFx0fVxuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblx0XHR0aGlzLmZhdm91cml0ZXMoKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBPcHBvbmVudDtcbiIsIi8qKlxuICogUHJhY2l0Y2VcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBwcmFjdGljZSBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgb25lIGJhc2VkIG9uIHdoYXRcbiAqIGlzIGNob3NlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBOYXRmID0gcmVxdWlyZSgnLi9uYXRmL3ByYWN0aWNlLmpzeCcpO1xuXG4vLyBQcmFjdGljZSBjb21wb25lbnRcbmNsYXNzIFByYWN0aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJvcmdcIjogSGFzaC5nZXQoJ29yZycsICduYXRmJylcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5vcmdDaGFuZ2UgPSB0aGlzLm9yZ0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLnVud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgb3JnIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnb3JnJywgbnVsbCk7XG5cdH1cblxuXHRtZW51Q2hhbmdlKG9yZykge1xuXHRcdEhhc2guc2V0KCdvcmcnLCBvcmcpO1xuXHR9XG5cblx0b3JnQ2hhbmdlKG9yZykge1xuXHRcdGlmKG9yZyAhPSB0aGlzLnN0YXRlLm9yZykge1xuXHRcdFx0aWYob3JnID09IG51bGwpIHtcblx0XHRcdFx0b3JnID0gJ25hdGYnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJvcmdcIjogb3JnfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInByYWN0aWNlXCI+XG5cdFx0XHRcdDxNZW51IGNsYXNzTmFtZT1cIm1lbnUgc2Vjb25kYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUub3JnfSBvbkNoYW5nZT17c2VsZi5tZW51Q2hhbmdlfT5cblx0XHRcdFx0XHQ8SXRlbSBuYW1lPVwibmF0ZlwiPk5BVEY8L0l0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0PGRpdiBpZD1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUub3JnID09ICduYXRmJyAmJlxuXHRcdFx0XHRcdFx0XHQ8TmF0ZiB0aHJvd2VyPXtzZWxmLnByb3BzLnRocm93ZXJ9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBQcmFjdGljZTtcbiIsIi8qKlxuICogU2l0ZVxuICpcbiAqIFByaW1hcnkgY29tcG9uZW50IGZvciB0aGUgZW50aXJlIHNpdGVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIwXG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcbnZhciBNZXNzYWdlcyA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVzc2FnZXMuanN4Jyk7XG52YXIgUG9wdXBzID0gcmVxdWlyZSAoJy4vZWxlbWVudHMvcG9wdXBzLmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBIZWFkZXIgPSByZXF1aXJlKCcuL2hlYWRlci5qc3gnKTtcbnZhciBNYXRjaCA9IHJlcXVpcmUoJy4vbWF0Y2guanN4Jyk7XG52YXIgUHJhY3RpY2UgPSByZXF1aXJlKCcuL3ByYWN0aWNlLmpzeCcpO1xudmFyIFN0YXRzID0gcmVxdWlyZSgnLi9zdGF0cy5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRcbmNsYXNzIFNpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0IHRoZSBoYXNoIG1vZHVsZSBhbmQgd2F0Y2ggZm9yIHBhZ2UgY2hhbmdlc1xuXHRcdEhhc2guaW5pdCgpO1xuXHRcdEhhc2gud2F0Y2goJ3BhZ2UnLCB0aGlzLmhhc2hDaGFuZ2UuYmluZCh0aGlzKSlcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0LmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJwYWdlXCI6IEhhc2guZ2V0KCdwYWdlJywgJ2hvbWUnKSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLnBhZ2VDaGFuZ2UgPSB0aGlzLnBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhc2hDaGFuZ2UocGFnZSkge1xuXHRcdC8vIElmIHRoZSBwYWdlIGhhcyBjaGFuZ2VkXG5cdFx0aWYocGFnZSAhPSB0aGlzLnN0YXRlLnBhZ2UpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wicGFnZVwiOiBwYWdlID8gcGFnZSA6IFwiaG9tZVwifSlcblx0XHRcdHRoaXMucmVmcy5tZW51LnNlbGVjdGVkID0gcGFnZTtcblx0XHR9XG5cdH1cblxuXHRwYWdlQ2hhbmdlKG5hbWUpIHtcblx0XHRIYXNoLnNldChcInBhZ2VcIiwgbmFtZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU3R1cGlkIHJlYWN0XG5cdFx0dmFyIGl0ZW1zID0gW1xuXHRcdFx0Lyo8SXRlbSBrZXk9ezB9IG5hbWU9XCJnYW1lc1wiPkdhbWVzPC9JdGVtPiwqL1xuXHRcdFx0PEl0ZW0ga2V5PXsxfSBuYW1lPVwicHJhY3RpY2VcIj5QcmFjdGljZTwvSXRlbT5cblx0XHRdO1xuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXHRcdFx0aXRlbXMucHVzaCg8SXRlbSBrZXk9ezJ9IG5hbWU9XCJtYXRjaFwiPk1hdGNoPC9JdGVtPik7XG5cdFx0XHQvL2l0ZW1zLnB1c2goPEl0ZW0ga2V5PXszfSBuYW1lPVwibGVhZ3VlXCI+TGVhZ3VlPC9JdGVtPik7XG5cdFx0XHRpdGVtcy5wdXNoKDxJdGVtIGtleT17NH0gbmFtZT1cInN0YXRzXCI+U3RhdHM8L0l0ZW0+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInNpdGVcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8TWVudSByZWY9XCJtZW51XCIgY2xhc3NOYW1lPVwibWVudSBwcmltYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUucGFnZX0gb25DaGFuZ2U9e3NlbGYucGFnZUNoYW5nZX0+XG5cdFx0XHRcdFx0e2l0ZW1zfVxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ2hvbWUnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGwgaWQ9XCJob21lXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGR0PnYxLjIuMDwvZHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZhLXVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPk5BVEYgTWF0Y2hlcyBub3cgYXZhaWxhYmxlLiBGaW5kIG90aGVyIHNpZ25lZCB1cCB0aHJvd2VycyBhbmQgY2hhbGxlbmdlIHRoZW0gdG8gYSAzIGdhbWUgbWF0Y2guPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+VGhyb3dlcnMgY2FuIGJlIGFkZGVkIHRvIHlvdXIgZmF2b3JpdGVzIGxpc3QgZm9yIGVhc3kgbWF0Y2ggc3RhcnRpbmcgYnkgY2xpY2tpbmcgb24gdGhlIGdyZWVuIGljb24gYmVzaWRlIHRoZWlyIG5hbWUuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+TWF0Y2ggc3RhdHMgYXJlIG5vdCB5ZXQgYXZhaWxhYmxlLCBidXQgZmVhciBub3QsIHRoZSBzdGF0cyB3aWxsIG5vdCBiZSBsb3N0LCBhbmQgYW55IG1hdGNoZXMgcGxheWVkIG5vdyB3aWxsIHN0aWxsIHNob3cgdXAgaW4gc3RhdHMgb25jZSB0aGUgZmVhdHVyZSBpcyBjb21wbGV0ZWQuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kZD5cblx0XHRcdFx0XHRcdFx0XHQ8ZHQ+djEuMS4wPC9kdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZmEtdWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Q2FuIG5vdyBmZXRjaCBhbGwgcHJhY3RpY2Ugc3RhdHMgaW5zdGVhZCBvZiBqdXN0IHRoZSBsYXN0IGZpdmUuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Q2xpY2tpbmcgb24gYW55IHJvdyBpbiBzdGF0cyB3aWxsIGJyaW5nIHVwIGFsbCB0aHJvd3MgaW4gdGhhdCBwcmFjdGljZSBzZXNzaW9uLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkZpeGVkIGEgYnVnIHRoYXQgZGlkbid0IGFsbG93IHlvdSB0byBzaWduIHVwIHdpdGggYW4gZS1tYWlsLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkZpeGVkIGEgYnVnIHRoYXQgY2F1c2VkIHNpZ24gaW4gbm90IHRvIGJlIHJlY29nbmlzZWQgYWZ0ZXIgc2lnbiB1cC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2RkPlxuXHRcdFx0XHRcdFx0XHRcdDxkdD52MS4wLjA8L2R0PlxuXHRcdFx0XHRcdFx0XHRcdDxkZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmYS11bFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5OQVRGIHByYWN0aWNlIGlzIGF2YWlsYWJsZSwgbm8gc2lnbiBpbiByZXF1aXJlZC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5XaXRoIGFuIGFjY291bnQgeW91IGNhbiBzYXZlIHlvdXIgcHJhY3RpY2Ugc2Vzc2lvbiBhbmQga2VlcCB0cmFjayBvZiB5b3VyIG92ZXIgYWxsIHByb2dyZXNzIGluIHRoZSBTdGF0cyBtZW51LjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGQ+XG5cdFx0XHRcdFx0XHRcdDwvZGw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5wYWdlID09ICdwcmFjdGljZScgJiZcblx0XHRcdFx0XHQ8UHJhY3RpY2UgdGhyb3dlcj17c2VsZi5zdGF0ZS50aHJvd2VyfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ21hdGNoJyAmJlxuXHRcdFx0XHRcdDxNYXRjaCB0aHJvd2VyPXtzZWxmLnN0YXRlLnRocm93ZXJ9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUucGFnZSA9PSAnc3RhdHMnICYmXG5cdFx0XHRcdFx0PFN0YXRzIHRocm93ZXI9e3NlbGYuc3RhdGUudGhyb3dlcn0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8UG9wdXBzIC8+XG5cdFx0XHRcdDxNZXNzYWdlcyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHNpZ25pbih0aHJvd2VyKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IHRocm93ZXJ9KTtcblx0fVxuXG5cdHNpZ25vdXQoKSB7XG5cblx0XHQvLyBJZiB0aGUgcGFnZSBuZWVkcyB0byBiZSBzaWduZWQgaW5cblx0XHRpZihbJ3ByYWN0aWNlJ10uaW5kZXhPZih0aGlzLnN0YXRlLnBhZ2UpID09IC0xKSB7XG5cdFx0XHRIYXNoLnNldCgncGFnZScsIG51bGwpO1xuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgdGhyb3dlciBmbGFnXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IGZhbHNlfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gU2l0ZTtcbiIsIi8qKlxuICogU3RhdHNcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBzdGF0cyBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgb25lIGJhc2VkIG9uIHdoYXRcbiAqIGlzIGNob3NlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBOYXRmID0gcmVxdWlyZSgnLi9uYXRmL3N0YXRzLmpzeCcpO1xuXG4vLyBTdGF0cyBjb21wb25lbnRcbmNsYXNzIFN0YXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJvcmdcIjogSGFzaC5nZXQoJ29yZycsICduYXRmJylcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5vcmdDaGFuZ2UgPSB0aGlzLm9yZ0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLnVud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgb3JnIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnb3JnJywgbnVsbCk7XG5cdH1cblxuXHRtZW51Q2hhbmdlKG9yZykge1xuXHRcdEhhc2guc2V0KCdvcmcnLCBvcmcpO1xuXHR9XG5cblx0b3JnQ2hhbmdlKG9yZykge1xuXHRcdGlmKG9yZyAhPSB0aGlzLnN0YXRlLm9yZykge1xuXHRcdFx0aWYob3JnID09IG51bGwpIHtcblx0XHRcdFx0b3JnID0gJ25hdGYnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJvcmdcIjogb3JnfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInN0YXRzXCI+XG5cdFx0XHRcdDxNZW51IGNsYXNzTmFtZT1cIm1lbnUgc2Vjb25kYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUub3JnfSBvbkNoYW5nZT17c2VsZi5tZW51Q2hhbmdlfT5cblx0XHRcdFx0XHQ8SXRlbSBuYW1lPVwibmF0ZlwiPk5BVEY8L0l0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0PGRpdiBpZD1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUub3JnID09ICduYXRmJyAmJlxuXHRcdFx0XHRcdFx0XHQ8TmF0ZiB0aHJvd2VyPXtzZWxmLnByb3BzLnRocm93ZXJ9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBTdGF0cztcbiIsIi8qKlxuICogVGhyb3dlclxuICpcbiAqIE1hbmFnZXMgZWRpdGluZyBkZXRhaWxzIGZvciB0aGUgY3VycmVudGx5IGxvZ2dlZCBpbiB0aHJvd2VyXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNVxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG5cbi8vIFRocm93ZXIgY29tcG9uZW50XG5jbGFzcyBUaHJvd2VyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge307XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIDxkaXYgLz5cblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBUaHJvd2VyO1xuIiwiLyoqXG4gKiBSZXF1ZXN0c1xuICpcbiAqIE1hbmFnZXMgbWF0Y2ggcmVxdWVzdHNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTMxXG4gKi9cblxuLy8gR2VuZXJpY1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi9nZW5lcmljL2hhc2guanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBzcGVjaWZpY1xudmFyIFR3b1dheSA9IHJlcXVpcmUoJy4vdHdvd2F5LmpzJyk7XG52YXIgVXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzLmpzJyk7XG5cbi8vIFNpZ25lZCBpbiB0aHJvd2VyXG5fX3Rocm93ZXIgPSBudWxsO1xuXG4vLyBQZW5kaW5nIHJlcXVlc3RzXG5fX3BlbmRpbmcgPSBbXTtcblxuLyoqXG4gKiBJbml0XG4gKlxuICogSW5pdGlhbGlzZXMgdGhlIG1vZHVsZSBieSB0cmFja2luZyBhbnkgc2lnbiBpbiAvIHNpZ24gb3V0IGV2ZW50c1xuICpcbiAqIEBuYW1lIF9pbml0XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2luaXQoKSB7XG5cblx0Ly8gR2V0IG5vdGlmaWVkIG9mIGFueSBjaGFuZ2UgaW4gdGhyb3dlclxuXHRFdmVudHMuYWRkKCdzaWduaW4nLCBfc2lnbmluKTtcblx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIF9zaWdub3V0KTtcbn1cblxuLyoqXG4gKiBQZW5kaW5nXG4gKlxuICogRmV0Y2hlcyBwZW5kaW5nIHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3BlbmRpbmdcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcGVuZGluZygpIHtcblxuXHQvLyBTaG93IHRoZSBsb2FkZXJcblx0TG9hZGVyLnNob3coKTtcblxuXHQvLyBGZXRjaCB0aGUgcmVxdWVzdHNcblx0U2VydmljZXMucmVhZCgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0cycsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cdFx0XHRfcGVuZGluZ1Byb2Nlc3MocmVzLmRhdGEpO1xuXHRcdH1cblx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRMb2FkZXIuaGlkZSgpO1xuXHR9KVxufVxuXG4vKipcbiAqIFBlbmRpbmcgUHJvY2Vzc1xuICpcbiAqIFByb2Nlc3NlcyBhbnkgcGVuZGluZyByZXF1ZXN0cyB0aGF0IGFyZSByZXR1cm5lZCBmcm9tIHRoZSBzZXJ2ZXJcbiAqXG4gKiBAbmFtZSBfcGVuZGluZ1Byb2Nlc3NcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcGVuZGluZ1Byb2Nlc3MocmVxdWVzdHMpIHtcblxuXHQvLyBTdG9yZSB0aGUgcGVuZGluZyByZXF1ZXN0c1xuXHRfX3BlbmRpbmcgPSByZXF1ZXN0cztcblxuXHQvLyBHbyB0aHJvdWdoIGVhY2ggaW4gd2hpY2ggdGhlIHRocm93ZXIgaXMgdGhlIG9wcG9uZW50XG5cdGZvcih2YXIgbyBvZiBfX3BlbmRpbmdbJ29wcG9uZW50J10pIHtcblxuXHRcdC8vIEFkZCBhIG5ldyBtZXNzYWdlXG5cdFx0RXZlbnRzLnRyaWdnZXIoJ21lc3NhZ2UnLCBvLl9pZCwge1xuXHRcdFx0XCJ0ZXh0XCI6IFwiWW91IGhhdmUgYW4gXCIgKyBvLm9yZyArIFwiIG1hdGNoIHJlcXVlc3QgZnJvbSBcIiArXG5cdFx0XHRcdFx0by5hbGlhcyArIFwiLiBEbyB5b3Ugd2FudCB0byBzdGFydCB0aGlzIG1hdGNoIG5vdz9cIixcblx0XHRcdFwiYnV0dG9uc1wiOiBbXG5cdFx0XHRcdHtcInRpdGxlXCI6IFwiRGVjbGluZVwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0RGVjbGluZX0sXG5cdFx0XHRcdHtcInRpdGxlXCI6IFwiQWNjZXB0XCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3RBY2NlcHR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBHbyB0aHJvdWdoIGVhY2ggaW4gd2hpY2ggdGhlIHRocm93ZXIgaXMgdGhlIGluaXRpYXRvclxuXHRmb3IodmFyIG8gb2YgX19wZW5kaW5nWydpbml0aWF0b3InXSkge1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG8uX2lkLCB7XG5cdFx0XHRcInRleHRcIjogXCJZb3UgaW5pdGlhdGVkIGFuIFwiICsgby5vcmcgKyBcIiBtYXRjaCB3aXRoIFwiICtcblx0XHRcdFx0XHRvLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHdhaXQgZm9yIHRoaXMgbWF0Y2ggdG8gc3RhcnQ/XCIsXG5cdFx0XHRcImJ1dHRvbnNcIjogW1xuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkRlbGV0ZVwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0RGVsZXRlfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJXYWl0XCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3RXYWl0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogUmVxdWVzdCBBY2NlcHRcbiAqXG4gKiBDYWxsZWQgd2hlbiBhIG1hdGNoIHJlcXVlc3QgaXMgYWNjZXB0ZWQgYnkgdGhlIG9wcG9uZW50XG4gKlxuICogQG5hbWUgX3JlcXVlc3RBY2NlcHRcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdEFjY2VwdChpZCkge1xuXG5cdC8vIExldCB0aGUgc2VydmVyIGtub3cgdGhlIG1hdGNoIHdhcyBhY2NlcHRlZFxuXHRTZXJ2aWNlcy51cGRhdGUoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdCcsIHtcblx0XHRcImlkXCI6IGlkXG5cdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0Ly8gRmluZCB0aGUgcGVuZGluZyBtYXRjaCwgc3RvcmUgaXQsIHRoZW4gcmVtb3ZlIGl0IGZyb20gcGVuZGluZ1xuXHRcdFx0dmFyIHJlcSA9IG51bGw7XG5cdFx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cdFx0XHRcdGlmKF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRyZXEgPSBfX3BlbmRpbmdbJ29wcG9uZW50J11baV07XG5cdFx0XHRcdFx0X19wZW5kaW5nWydvcHBvbmVudCddLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRIYXNoLnNldCh7XG5cdFx0XHRcdFwicGFnZVwiOiBcIm1hdGNoXCIsXG5cdFx0XHRcdFwib3JnXCI6IHJlcS5vcmcudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XCJpZFwiOiBcIm18XCIgKyByZXMuZGF0YVxuXHRcdFx0fSlcblx0XHR9XG5cdH0pXG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgYWNjZXB0ZWRcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmVxdWVzdCBEZWNsaW5lXG4gKlxuICogQ2FsbGVkIHdoZW4gYSBtYXRjaCByZXF1ZXN0IGlzIGRlY2xpbmVkIGJ5IHRoZSBvcHBvbmVudFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0RGVjbGluZVxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0RGVjbGluZShpZCkge1xuXG5cdC8vIExldCB0aGUgc2VydmVyIGtub3cgdGhlIG1hdGNoIHdhcyBkZWNsaW5lZFxuXHRTZXJ2aWNlcy5kZWxldGUoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdCcsIHtcblx0XHRcImlkXCI6IGlkXG5cdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0Ly8gRGVsZXRlIHRoZSByZXF1ZXN0IGZyb20gdGhlIHBlbmRpbmdcblx0XHRcdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ29wcG9uZW50J10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRcdF9fcGVuZGluZ1snb3Bwb25lbnQnXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pXG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgZGVsZXRlZFxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IERlbGV0ZVxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBkZWxldGVkIGJ5IHRoZSBpbml0aWF0b3JcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdERlbGV0ZVxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0RGVsZXRlKGlkKSB7XG5cblx0Ly8gTGV0IHRoZSBzZXJ2ZXIga25vdyB3ZSBhcmUgcmVtb3Zpbmcgb3VyIHJlcXVlc3Rcblx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydpbml0aWF0b3InXSkge1xuXHRcdFx0XHRpZihfX3BlbmRpbmdbJ2luaXRpYXRvciddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRcdF9fcGVuZGluZ1snaW5pdGlhdG9yJ10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBSZXR1cm4gdHJ1ZSwgYXNzdW1lIHRoZSByZXF1ZXN0IHdhcyBkZWxldGVkXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgTmV3XG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIHRocm93ZXIgcmVjaWV2ZXMgYSBuZXcgbWF0Y2ggcmVxdWVzdFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0TmV3XG4gKiBAcGFyYW0gb2JqZWN0IG1zZ1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0TmV3KG1zZykge1xuXG5cdC8vIElmIHRoaXMgaXMgYSBuZXcgcmVxdWVzdFxuXHRpZihtc2cudHlwZSA9PSAnbWF0Y2hfcmVxdWVzdCcpIHtcblxuXHRcdC8vIEFkZCBpdCB0byB0aGUgcGVuZGluZ1xuXHRcdF9fcGVuZGluZ1snb3Bwb25lbnQnXS5wdXNoKG1zZyk7XG5cblx0XHQvLyBBZGQgYSBuZXcgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlJywgbXNnLl9pZCwge1xuXHRcdFx0XCJ0ZXh0XCI6IFwiWW91IGhhdmUgYW4gXCIgKyBtc2cub3JnICsgXCIgbWF0Y2ggcmVxdWVzdCBmcm9tIFwiICtcblx0XHRcdFx0XHRtc2cuYWxpYXMgKyBcIi4gRG8geW91IHdhbnQgdG8gc3RhcnQgdGhpcyBtYXRjaCBub3c/XCIsXG5cdFx0XHRcImJ1dHRvbnNcIjogW1xuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkRlY2xpbmVcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdERlY2xpbmV9LFxuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkFjY2VwdFwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0QWNjZXB0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gRWxzZSBpZiB3ZSBuZWVkIHRvIGRlbGV0ZVxuXHRlbHNlIGlmKG1zZy50eXBlID09IFwibWF0Y2hfcmVxdWVzdF9kZWxldGVcIikge1xuXG5cdFx0Ly8gRGVsZXRlIHRoZSByZXF1ZXN0IGZyb20gdGhlIHBlbmRpbmdcblx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cdFx0XHRpZihfX3BlbmRpbmdbJ29wcG9uZW50J11baV0uX2lkID09IG1zZy5pZCkge1xuXHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlX3JlbW92ZScsIG1zZy5pZCk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXF1ZXN0IFdhaXRcbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgaW5pdGlhdG9yIG9mIGEgbWF0Y2ggcmVxdWVzdCBoYXMgY2hvc2VuIHRvIHdhaXQgZm9yIGl0XG4gKlxuICogQG5hbWUgX3JlcXVlc3RXYWl0XG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gX3JlcXVlc3RXYWl0KGlkKSB7XG5cblx0Ly8gRmluZCB0aGUgcGVuZGluZyBtYXRjaCwgc3RvcmUgaXQsIHRoZW4gcmVtb3ZlIGl0IGZyb20gcGVuZGluZ1xuXHR2YXIgcmVxID0gbnVsbDtcblx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblx0XHRpZihfX3BlbmRpbmdbJ2luaXRpYXRvciddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0cmVxID0gX19wZW5kaW5nWydpbml0aWF0b3InXVtpXTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGFuZ2UgdGhlIHBhZ2UgYW5kIHN0b3JlIHRoZSByZXF1ZXN0IGluZm9cblx0SGFzaC5zZXQoe1xuXHRcdFwicGFnZVwiOiBcIm1hdGNoXCIsXG5cdFx0XCJvcmdcIjogcmVxLm9yZy50b0xvd2VyQ2FzZSgpLFxuXHRcdFwiaWRcIjogXCJyfFwiICsgcmVxLl9pZFxuXHR9KVxuXG5cdC8vIFJldHVybiBPS1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBTaWduaW5cbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzaWducyBpbiAob3Igd2FzIGFscmVhZHkgc2lnbmVkIGluKS4gRmV0Y2hlcyBwZW5kaW5nXG4gKiByZXF1ZXN0cyBhbmQgc3RhcnRzIHRyYWNraW5nIGFueSBuZXcgcmVxdWVzdHNcbiAqXG4gKiBAbmFtZSBfc2lnbmluXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3NpZ25pbih0aHJvd2VyKSB7XG5cblx0Ly8gU3RvcmUgdGhlIHRocm93ZXJcblx0X190aHJvd2VyID0gdGhyb3dlci5faWQ7XG5cblx0Ly8gRmV0Y2ggdGhlIHBlbmRpbmcgcmVxdWVzdHNcblx0X3BlbmRpbmcoKTtcblxuXHQvLyBUcmFjayBhbnkgbmV3IHJlcXVlc3RzXG5cdFR3b1dheS50cmFjayhcblx0XHQnYXV0aCcsICdyZXF1ZXN0cy0nICsgX190aHJvd2VyLFxuXHRcdF9yZXF1ZXN0TmV3XG5cdCk7XG59XG5cbi8qKlxuICogU2lnbm91dFxuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNpZ25zIG91dCBvciBpcyBzaWduZWQgb3V0LiBSZW1vdmVzIGFsbCBtZXNzYWdlcyBhbmRcbiAqIHN0b3BzIHRyYWNraW5nIHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25vdXRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc2lnbm91dCgpIHtcblxuXHQvLyBEZWxldGUgYWxsIG1lc3NhZ2VzXG5cdGZvcih2YXIgbyBpbiBfX3BlbmRpbmcpIHtcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBvLl9pZCk7XG5cdH1cblxuXHQvLyBTdG9wIHRyYWNraW5nIHRoZSB0aHJvd2VyXG5cdFR3b1dheS51bnRyYWNrKFxuXHRcdCdhdXRoJywgJ3JlcXVlc3RzLScgKyBfX3Rocm93ZXIsXG5cdFx0X3JlcXVlc3ROZXdcblx0KTtcbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluaXRcIjogX2luaXQsXG59XG4iLCIvKipcbiAqIFR3byBXYXlcbiAqXG4gKiBBbGxvd3MgY2xpZW50cyB0byBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHZpYSB3ZWJzb2NrZXQgc28gZXZlbnRzIGNhbiBiZVxuICogdHJhY2tlZCBpbiByZWFsIHRpbWVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI5XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuL2dlbmVyaWMvc2VydmljZXMuanMnKTtcbnZhciBUb29scyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy90b29scy5qcycpO1xudmFyIFdTSGVscGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL3dlYnNvY2tldC5qcycpO1xuXG4vLyBUaGUgcGluZyB0aW1lclxudmFyIF9fcGluZyA9IG51bGw7XG5cbi8vIFRoZSB2YWxpZCBjbG9zZSBmbGFnXG52YXIgX19jbG9zZSA9IGZhbHNlO1xuXG4vLyBUaGUgd2Vic29ja2V0XG52YXIgX19zb2NrZXQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBzZXJ2aWNlIGNhbGxiYWNrc1xuICpcbiAqIHdpbGwgY29udGFpbiBhIHN0cmluZyBmb3IgdGhlIHNlcnZpY2UgLyBrZXkgd2l0aCBjYWxsYmFja3MgZm9yIHRob3NlIGtleXMsXG4gKiBlLmcuIHtcbiAqXHRcInNlcnZpY2UxXCI6IHtcbiAqXHRcdFwia2V5MVwiOiBbZnVuY3Rpb24xLCBmdW5jdGlvbjJdLFxuICpcdFx0XCJrZXkyXCI6IFtmdW5jdGlvbjNdXG4gKlx0fSxcbiAqXHRcInNlcnZpY2UyXCI6IHtcbiAqXHRcdFwia2V5M1wiOiBbZnVuY3Rpb240XVxuICpcdH1cbiAqIH1cbiAqL1xudmFyIF9fc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgVHJhY2tcbiAqXG4gKiBBZGRzIHRyYWNraW5nIGZvciBhIHNwZWNpZmljIHNlcnZpY2Uga2V5XG4gKlxuICogQG5hbWUgX2FkZFRyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcbiAqIEBwYXJhbSBzdHJpbmcga2V5XG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIHNlcnZpY2UsIGFkZCBpdFxuXHRpZighKHNlcnZpY2UgaW4gX19zZXJ2aWNlcykpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdID0ge31cblx0fVxuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIGtleSBmb3IgdGhlIGdpdmVuIHNlcnZpY2UsIGFkZCB0aGUgbGlzdCB3aXRoXG5cdC8vXHR0aGUgY2FsbGJhY2tcblx0aWYoIShrZXkgaW4gX19zZXJ2aWNlc1tzZXJ2aWNlXSkpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0gPSBbY2FsbGJhY2tdXG5cdH1cblxuXHQvLyBFbHNlLCBhZGQgdGhlIGNhbGxiYWNrLCB0byB0aGUgZ2l2ZW4gc2VydmljZS9rZXlcblx0ZWxzZSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLnB1c2goY2FsbGJhY2spO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIENsb3NlXG4gKlxuICogQ2hlY2tzIGlmIGl0J3MgYSBsZWdpdGltYXRlIGNsb3NlZCBzb2NrZXQsIG9yIGlmIHdlIG5lZWQgdG8gcmVjb25uZWN0IHRvXG4gKiBldmVyeXRoaW5nXG4gKlxuICogQG5hbWUgX2hhbmRsZUNsb3NlXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhbmRsZUNsb3NlKCkge1xuXG5cdC8vIElmIGl0J3MgYSB2YWxpZCBjbG9zZVxuXHRpZihfX2Nsb3NlKSB7XG5cdFx0X19zb2NrZXQgPSBudWxsO1xuXHR9XG5cblx0Ly8gRWxzZSwgd2FpdCA1IHNlY29uZHMsIGFuZCByZW9wZW4gdGhlIHNvY2tldFxuXHRlbHNlIHtcblx0XHRzZXRUaW1lb3V0KF9vcGVuU29ja2V0LCA1MDAwKTtcblx0fVxufVxuXG4vKipcbiAqIEhhbmRsZSBNZXNzYWdlc1xuICpcbiAqIFJlY2lldmVzIG1lc3NhZ2VzIGZyb20gd2Vic29ja2V0cyBhbmQgZGlyZWN0cyB0aGUgZGF0YSB0byB0aGUgYXBwcm9wcmlhdGVcbiAqIGNhbGxiYWNrXG4gKlxuICogQG5hbWUgX2hhbmRsZU1lc3NhZ2VcbiAqIEBwYXJhbSBXZWJTb2NrZXQgc29ja1x0XHRUaGUgc29ja2V0IHRoZSBtZXNzYWdlIGNhbWUgb25cbiAqIEBwYXJhbSBNZXNzYWdlRXZlbnQgZXZcdFx0VGhlIGV2ZW50IG1lc3NhZ2UgcmVjZWl2ZWRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaGFuZGxlTWVzc2FnZShzb2NrLCBldikge1xuXG5cdC8vIElmIGl0J3MgcG9uZ1xuXHRpZihldi5kYXRhID09ICdwb25nJykge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIFNjcmV3IHlvdSBqYXZhc2NyaXB0XG5cdHZhciByID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0ci5hZGRFdmVudExpc3RlbmVyKFwibG9hZGVuZFwiLCBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFBhcnNlIHRoZSBkYXRhXG5cdFx0b01zZyA9IEpTT04ucGFyc2Uoci5yZXN1bHQpO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSB0aGUgc2VydmljZVxuXHRcdGlmKG9Nc2cuc2VydmljZSBpbiBfX3NlcnZpY2VzKSB7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgdGhlIGtleVxuXHRcdFx0aWYob01zZy5rZXkgaW4gX19zZXJ2aWNlc1tvTXNnLnNlcnZpY2VdKSB7XG5cblx0XHRcdFx0Ly8gQ2FsbCBlYWNoIGNhbGxiYWNrXG5cdFx0XHRcdGZvcih2YXIgZiBvZiBfX3NlcnZpY2VzW29Nc2cuc2VydmljZV1bb01zZy5rZXldKSB7XG5cdFx0XHRcdFx0ZihvTXNnLmRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcblx0ci5yZWFkQXNUZXh0KGV2LmRhdGEpO1xufVxuXG4vKipcbiAqIE9wZW4gU29ja2V0XG4gKlxuICogT3BlbnMgYSBuZXcgd2Vic29ja2V0IGJ5IGZpcnN0IHNlbmRpbmcgYSBtZXNzYWdlIHRvIHdlYnBvbGwgdG8gc3RhcnQgdGhlXG4gKiBhdXRoZW50aWNhdGlvbiBoYW5kc2hha2UsIHRoZW4gbWFraW5nIHRoZSBjb25uZWN0aW9uLCBhbmQgZmluYWxseSBzZW5kaW5nXG4gKiBhbGwgdGhlIHRyYWNrIG1lc3NhZ2VzIHN0b3JlZFxuICpcbiAqIEBuYW1lIF9vcGVuU29ja2V0XG4gKiBAcGFyYW1cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfb3BlblNvY2tldCgpIHtcblxuXHQvLyBOb3RpZnkgdGhlIGJhY2tlbmQgb2YgYSBuZXcgd3MgY29ubmVjdGlvblxuXHRTZXJ2aWNlcy5yZWFkKCd3ZWJwb2xsJywgJ3dlYnNvY2tldCcsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBDcmVhdGUgdGhlIHdlYnNvY2tldFxuXHRcdF9fc29ja2V0ID0gV1NIZWxwZXIoJ3dzczovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnL3dzJywge1xuXHRcdFx0XCJvcGVuXCI6IGZ1bmN0aW9uKHNvY2spIHtcblxuXHRcdFx0XHQvLyBSZXNldCB0aGUgY2xvc2UgZmxhZ1xuXHRcdFx0XHRfX2Nsb3NlID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gSW5pdCB0aGUgbWVzc2FnZSBsaXN0XG5cdFx0XHRcdGxNc2dzID0gW107XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBjb25uZWN0IG1lc3NhZ2Vcblx0XHRcdFx0bE1zZ3MucHVzaCh7XG5cdFx0XHRcdFx0XCJfdHlwZVwiOiBcImNvbm5lY3RcIixcblx0XHRcdFx0XHRcImtleVwiOiByZXMuZGF0YVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBBZGQgZWFjaCB0cmFjayBtZXNzYWdlXG5cdFx0XHRcdGZvcih2YXIgcyBpbiBfX3NlcnZpY2VzKSB7XG5cdFx0XHRcdFx0Zm9yKHZhciBrIGluIF9fc2VydmljZXNbc10pIHtcblx0XHRcdFx0XHRcdGxNc2dzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHRcIl90eXBlXCI6IFwidHJhY2tcIixcblx0XHRcdFx0XHRcdFx0XCJzZXJ2aWNlXCI6IHMsXG5cdFx0XHRcdFx0XHRcdFwia2V5XCI6IGtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNlbmQgdGhlIG1lc3NhZ2VzXG5cdFx0XHRcdHNvY2suc2VuZChKU09OLnN0cmluZ2lmeShsTXNncykpXG5cdFx0XHR9LFxuXHRcdFx0XCJtZXNzYWdlXCI6IF9oYW5kbGVNZXNzYWdlLFxuXHRcdFx0XCJjbG9zZVwiOiBfaGFuZGxlQ2xvc2Vcblx0XHR9KTtcblxuXHRcdC8vIElmIHdlIGhhdmVuJ3QgYWxyZWFkeSBzZXR1cCB0aGUgcGluZyBpbnRlcnZhbFxuXHRcdGlmKF9fcGluZyA9PSBudWxsKSB7XG5cdFx0XHRfX3BpbmcgPSBzZXRJbnRlcnZhbChfcGluZywgMzAwMDAwKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vKipcbiAqIFBpbmdcbiAqXG4gKiBTZW5kIGEgcGluZyB0byBrZWVwIHRoZSBzb2NrZXQgYWxpdmVcbiAqXG4gKiBAbmFtZSBfcGluZ1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9waW5nKCkge1xuXG5cdC8vIFNlbmQgYSBwaW5nIG1lc3NhZ2Ugb3ZlciB0aGUgc29ja2V0IHRvIGtlZXAgaXQgYWxpdmVcblx0X19zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG5cdFx0XCJfdHlwZVwiOiBcInBpbmdcIlxuXHR9KSk7XG59XG5cbi8qKlxuICogVHJhY2tcbiAqXG4gKiBUYWtlcyBhIFVSTCBhbmQgYW4gZXZlbnQgdHlwZSBhbmQgYSkgb3BlbnMgYSBuZXcgd2Vic29ja2V0IG9yIHVzZXMgYW5cbiAqIGV4aXN0aW5nIG9uZSwgdGhlbiBiKSBzZW5kcyBhIHRyYWNraW5nIG1lc3NhZ2UgdGhyb3VnaCB0aGUgd2Vic29ja2V0IHNvIHRoZVxuICogYmFja2VuZCBrbm93c24gdG8gc2VuZCB0aGUga2V5IHR5cGUgdG8gdXNcbiAqXG4gKiBAbmFtZSBfdHJhY2tcbiAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0aGUga2V5IGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHN0cmluZyBrZXlcdFx0XHRUaGUga2V5IHRvIHRyYWNrXG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIGZvciBhbnkgbWVzc2FnZXMgb2YgdGhlIGtleSB2YWx1ZVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF90cmFjayhzZXJ2aWNlLCBrZXksIGNhbGxiYWNrKSB7XG5cblx0Ly8gQWRkIHRoZSB0cmFja2luZyBjYWxsYmFja1xuXHRfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjayk7XG5cblx0Ly8gSWYgd2UgaGF2ZSBubyBzb2NrZXRcblx0aWYoIV9fc29ja2V0KSB7XG5cblx0XHQvLyBJZiBpdCdzIG51bGxcblx0XHRpZihfX3NvY2tldCA9PSBudWxsKSB7XG5cblx0XHRcdC8vIFNldCBzb2NrZXQgdG8gZmFsc2Ugc28gd2UgZG9uJ3QgdHJ5IHRvIHJlLW9wZW5cblx0XHRcdF9fc29ja2V0ID0gZmFsc2U7XG5cblx0XHRcdC8vIE9wZW4gYSBuZXcgb25lXG5cdFx0XHRfb3BlblNvY2tldCgpO1xuXHRcdH1cblx0fVxuXG5cdC8vIEVsc2UgaWYgaXQncyBvcGVuXG5cdGVsc2UgaWYoX19zb2NrZXQucmVhZHlTdGF0ZSA9PSAxKSB7XG5cblx0XHQvLyBTZW5kIHRoZSB0cmFja2luZyBtZXNzYWdlIHRocm91Z2ggdGhlIHdlYnNvY2tldFxuXHRcdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XCJfdHlwZVwiOiBcInRyYWNrXCIsXG5cdFx0XHRcInNlcnZpY2VcIjogc2VydmljZSxcblx0XHRcdFwia2V5XCI6IGtleVxuXHRcdH0pKTtcblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgbm8gc29ja2V0LCBvciBpdCdzIG9wZW5pbmcsIHRoZW4gdXBvbiBvcGVuaW5nIGFsbCBzZXJ2aXZlcy9cblx0Ly9cdGtleXMgaW4gdGhlIHRyYWNraW5nIGxpc3Qgd2lsbCBiZSBzZW50IGFzIG1lc3NhZ2VzXG59XG5cbi8qKlxuICogVW50cmFja1xuICpcbiAqIFJlbW92ZXMgYSBjYWxsYmFjayBhbmQgbm90aWZpZXMgdGhlIHdlYnNvY2tldCB3ZSBhcmUgbm90IHRyYWNraW5nIGFueW1vcmVcbiAqXG4gKiBAbmFtZSBfdW50cmFja1xuICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRoZSBrZXkgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0gc3RyaW5nIGtleVx0XHRcdFRoZSBrZXkgdG8gdW50cmFja1xuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBjYWxsYmFjayBhc3NvY2lhdGVkIHdpdGggdGhlIHRyYWNrXG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gX3VudHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHdlIGhhdmUgdGhlIHNlcnZpY2Vcblx0aWYoc2VydmljZSBpbiBfX3NlcnZpY2VzKSB7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBrZXlcblx0XHRpZihrZXkgaW4gX19zZXJ2aWNlc1tzZXJ2aWNlXSkge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggY2FsbGJhY2tcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBJZiB0aGUgY2FsbGJhY2sgbWF0Y2hlc1xuXHRcdFx0XHRpZihjYWxsYmFjayA9PSBfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV1baV0pIHtcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUgY2FsbGJhY2tcblx0XHRcdFx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0uc3BsaWNlKGksIDEpO1xuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBubyBtb3JlIGNhbGxiYWNrc1xuXHRcdFx0XHRcdGlmKF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5sZW5ndGggPT0gMCkge1xuXG5cdFx0XHRcdFx0XHQvLyBOb3RpZnkgdGhlIHdlYnNvY2tldCB3ZSBhcmVuJ3QgdHJhY2tpbmcgdGhlIGtleVxuXHRcdFx0XHRcdFx0Ly9cdGFueW1vcmVcblx0XHRcdFx0XHRcdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdFx0XHRcIl90eXBlXCI6IFwidW50cmFja1wiLFxuXHRcdFx0XHRcdFx0XHRcInNlcnZpY2VcIjogc2VydmljZSxcblx0XHRcdFx0XHRcdFx0XCJrZXlcIjoga2V5XG5cdFx0XHRcdFx0XHR9KSk7XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUga2V5XG5cdFx0XHRcdFx0XHRkZWxldGUgX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldO1xuXG5cdFx0XHRcdFx0XHQvLyBJZiB3ZSBoYXZlIG5vIG1vcmUga2V5cyBpbiB0aGUgc2VydmljZVxuXHRcdFx0XHRcdFx0aWYoVG9vbHMuZW1wdHkoX19zZXJ2aWNlc1tzZXJ2aWNlXSkpIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBSZW1vdmUgdGhlIHNlcnZpY2Vcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIF9fc2VydmljZXNbc2VydmljZV07XG5cblx0XHRcdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBtb3JlIHNlcnZpY2VzXG5cdFx0XHRcdFx0XHRcdGlmKFRvb2xzLmVtcHR5KF9fc2VydmljZXMpKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBUdXJuIG9mZiB0aGUgcGluZyBpbnRlcnZhbFxuXHRcdFx0XHRcdFx0XHRcdGNsZWFySW50ZXJ2YWwoX19waW5nKTtcblx0XHRcdFx0XHRcdFx0XHRfX3BpbmcgPSBudWxsO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2xvc2UgdGhlIHNvY2tldFxuXHRcdFx0XHRcdFx0XHRcdF9fY2xvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9fc29ja2V0LmNsb3NlKDEwMDAsICdub3RoaW5nIGVsc2UgdG8gdHJhY2snKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENhbGxiYWNrIGZvdW5kIGFuZCByZW1vdmVkXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDYWxsYmFjayBub3QgZm91bmRcblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vLyBleHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHJhY2tcIjogX3RyYWNrLFxuXHRcInVudHJhY2tcIjogX3VudHJhY2tcbn1cbiIsIi8qKlxuICogVXRpbHNcbiAqXG4gKiBTaGFyZWQgdXRpbGl0aWVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNFxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9ldmVudHMuanMnKTtcblxuLyoqXG4gKiBVdGlsc1xuICovXG52YXIgVXRpbHMgPSB7XG5cblx0ZGF0ZTogZnVuY3Rpb24odHMpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKHRzKjEwMDApO1xuXHRcdHZhciBZID0gJycgKyBkLmdldEZ1bGxZZWFyKCk7XG5cdFx0dmFyIE0gPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKTtcblx0XHRpZihNLmxlbmd0aCA9PSAxKSBNID0gJzAnICsgTTtcblx0XHR2YXIgRCA9ICcnICsgZC5nZXREYXRlKCk7XG5cdFx0aWYoRC5sZW5ndGggPT0gMSkgRCA9ICcwJyArIEQ7XG5cdFx0cmV0dXJuIFkgKyAnLycgKyBNICsgJy8nICsgRDtcblx0fSxcblxuXHRlcnJvclRyZWU6IGZ1bmN0aW9uKGVycm9ycykge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmV0dXJuXG5cdFx0dmFyIG9SZXQgPSB7fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGVycm9yXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHQvLyBJZiB0aGUgZXJyb3IgZmllbGQgaGFzIGEgcGVyaW9kXG5cdFx0XHRpZihlcnJvcnNbaV1bMF0uaW5jbHVkZXMoJy4nKSkge1xuXG5cdFx0XHRcdC8vIFNwbGl0IGl0XG5cdFx0XHRcdGxGaWVsZCA9IGVycm9yc1tpXVswXS5zcGxpdCgvXFwuKC4qKS8pXG5cblx0XHRcdFx0Ly8gSWYgd2UgZG9uJ3QgaGF2ZSB0aGUgZmllbGQgYWxyZWFkeVxuXHRcdFx0XHRpZighb1JldFtsRmllbGRbMF1dKSB7XG5cdFx0XHRcdFx0b1JldFtsRmllbGRbMF1dID0gW11cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCB0aGUgcmVzdFxuXHRcdFx0XHRvUmV0W2xGaWVsZFswXV0ucHVzaChbbEZpZWxkWzFdLCBlcnJvcnNbaV1bMV1dKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpdCdzIGEgZmxhdCBmaWVsZFxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9SZXRbZXJyb3JzW2ldWzBdXSA9IGVycm9yc1tpXVsxXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCB0aGUgZXJyb3JzIHdlIGZvdW5kXG5cdFx0Zm9yKGxldCBrIGluIG9SZXQpIHtcblxuXHRcdFx0Ly8gSWYgd2UgZmluZCBhbiBhcnJheVxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShvUmV0W2tdKSkge1xuXG5cdFx0XHRcdC8vIFJlY3Vyc2Vcblx0XHRcdFx0b1JldFtrXSA9IFV0aWxzLmVycm9yVHJlZShvUmV0W2tdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIFRyZWVcblx0XHRyZXR1cm4gb1JldDtcblx0fSxcblxuXHRzZXJ2aWNlRXJyb3I6IGZ1bmN0aW9uKGVycikge1xuXG5cdFx0Ly8gV2hhdCBlcnJvciBpcyBpdD9cblx0XHRzd2l0Y2goZXJyLmNvZGUpIHtcblxuXHRcdFx0Ly8gTm8gU2Vzc2lvblxuXHRcdFx0Y2FzZSAxMDI6XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciBzaWdub3V0XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKFwic2lnbm91dFwiKTtcblxuXHRcdFx0XHQvLyBOb3RoaW5nIGVsc2UgdG8gZG9cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdC8vIEludmFsaWQgZmllbGRzXG5cdFx0XHRjYXNlIDEwMDE6XG5cblx0XHRcdFx0Ly8gUmVidWlsZCB0aGUgZXJyb3IgbWVzc2FnZVxuXHRcdFx0XHRlcnIubXNnID0gVXRpbHMuZXJyb3JUcmVlKGVyci5tc2cpO1xuXG5cdFx0XHRcdC8vIEJ1dCBhbGxvdyB0aGUgY2hpbGQgdG8gZGVhbCB3aXRoIHRoZSBtZXNzYWdlcyB0aGVtc2VsdmVzXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBGYWlsZWQgdG8gcHJvY2VzcyBlcnJvclxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=