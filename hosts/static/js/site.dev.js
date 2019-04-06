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
        this.props.onPoints(false, parseInt(target.dataset.value));
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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/chris/workspace/axegains/development/webpack/react/natf/match.jsx: Unexpected token, expected \";\" (561:28)\n\n\u001b[0m \u001b[90m 559 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 560 | \u001b[39m\t\t\t\u001b[90m// Set the mode to big axe target and reset the throw to 1\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 561 | \u001b[39m\t\t\tms\u001b[33m.\u001b[39mmode \u001b[33m=\u001b[39m \u001b[32m\"bigaxe_target\"\u001b[39m\u001b[33m:\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m     | \u001b[39m\t\t\t                         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 562 | \u001b[39m\t\t\tms\u001b[33m.\u001b[39m\u001b[36mthrow\u001b[39m \u001b[33m=\u001b[39m \u001b[35m0\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 563 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 564 | \u001b[39m\t\t\t\u001b[90m// Set the board mode\u001b[39m\u001b[0m\n    at Object.raise (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:3851:17)\n    at Object.unexpected (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:5167:16)\n    at Object.semicolon (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:5149:40)\n    at Object.parseExpressionStatement (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7827:10)\n    at Object.parseStatementContent (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7425:19)\n    at Object.parseStatement (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Object.parseBlockBody (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7855:10)\n    at Object.parseBlock (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7839:10)\n    at Object.parseStatementContent (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7367:21)\n    at Object.parseStatement (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseIfStatement (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7645:28)\n    at Object.parseStatementContent (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7336:21)\n    at Object.parseStatement (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseIfStatement (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7646:51)\n    at Object.parseStatementContent (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7336:21)\n    at Object.parseStatement (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7291:17)\n    at Object.parseBlockOrModuleBlockBody (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7868:25)\n    at Object.parseBlockBody (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7855:10)\n    at Object.parseBlock (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7839:10)\n    at Object.parseFunctionBody (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:6909:24)\n    at Object.parseFunctionBodyAndFinish (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:6879:10)\n    at Object.parseMethod (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:6835:10)\n    at Object.pushClassMethod (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:8264:30)\n    at Object.parseClassMemberWithIsStatic (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:8189:12)\n    at Object.parseClassMember (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:8128:10)\n    at withTopicForbiddingContext (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:8083:14)\n    at Object.withTopicForbiddingContext (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:7185:14)\n    at Object.parseClassBody (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:8060:10)\n    at Object.parseClass (/home/chris/workspace/axegains/development/node_modules/@babel/parser/lib/index.js:8034:22)");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLzNyZC9qcXVlcnkuYWpheC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9oYXNoLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9nZW5lcmljL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvd2Vic29ja2V0LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9iYXNlL2Zvcm1zLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L2VsZW1lbnRzL21lbnUuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvbWVzc2FnZXMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvbW9kYWwuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvcG9wdXBzLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L2hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9tYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9uYXRmL2JvYXJkLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvcHJhY3RpY2UuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvbmF0Zi9zdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9wcmFjdGljZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9zaXRlLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L3N0YXRzLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L3Rocm93ZXIuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVxdWVzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay90d293YXkuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay91dGlscy5qcyJdLCJuYW1lcyI6WyJhIiwiYiIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsIkVycm9yIiwid2luZG93IiwiYyIsImQiLCJzbGljZSIsImUiLCJjb25jYXQiLCJmIiwicHVzaCIsImciLCJpbmRleE9mIiwiaCIsImkiLCJ0b1N0cmluZyIsImoiLCJoYXNPd25Qcm9wZXJ0eSIsImsiLCJsIiwibSIsIm4iLCJmbiIsImluaXQiLCJvIiwicCIsInEiLCJyIiwidG9VcHBlckNhc2UiLCJwcm90b3R5cGUiLCJqcXVlcnkiLCJjb25zdHJ1Y3RvciIsInNlbGVjdG9yIiwibGVuZ3RoIiwidG9BcnJheSIsImNhbGwiLCJnZXQiLCJwdXNoU3RhY2siLCJtZXJnZSIsInByZXZPYmplY3QiLCJjb250ZXh0IiwiZWFjaCIsIm1hcCIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJlbmQiLCJzb3J0Iiwic3BsaWNlIiwiZXh0ZW5kIiwiaXNGdW5jdGlvbiIsImlzUGxhaW5PYmplY3QiLCJpc0FycmF5IiwiZXhwYW5kbyIsIk1hdGgiLCJyYW5kb20iLCJyZXBsYWNlIiwiaXNSZWFkeSIsImVycm9yIiwibm9vcCIsInR5cGUiLCJBcnJheSIsImlzV2luZG93IiwiaXNOdW1lcmljIiwicGFyc2VGbG9hdCIsIm5vZGVUeXBlIiwiaXNFbXB0eU9iamVjdCIsImdsb2JhbEV2YWwiLCJldmFsIiwidHJpbSIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0IiwiaGVhZCIsImFwcGVuZENoaWxkIiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwiY2FtZWxDYXNlIiwibm9kZU5hbWUiLCJ0b0xvd2VyQ2FzZSIsInMiLCJtYWtlQXJyYXkiLCJPYmplY3QiLCJpbkFycmF5IiwiZ3JlcCIsImd1aWQiLCJwcm94eSIsIm5vdyIsIkRhdGUiLCJzdXBwb3J0Iiwic3BsaXQiLCJ0IiwiZG9jdW1lbnRFbGVtZW50IiwidSIsInYiLCJtYXRjaGVzIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwidyIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiY29udGFpbnMiLCJmaW5kIiwibWF0Y2hlc1NlbGVjdG9yIiwicXVlcnlTZWxlY3RvckFsbCIsInVuaXF1ZSIsInRleHRDb250ZW50Iiwibm9kZVZhbHVlIiwiaXNYTUxEb2MiLCJvd25lckRvY3VtZW50IiwiZXhwciIsImF0dHJIYW5kbGUiLCJtYXRjaCIsImJvb2wiLCJuZWVkc0NvbnRleHQiLCJhdHRyIiwiZ2V0QXR0cmlidXRlIiwieCIsInkiLCJ6IiwiQSIsInRlc3QiLCJmaWx0ZXIiLCJub3QiLCJpcyIsIkIiLCJDIiwiRCIsImV4ZWMiLCJwYXJzZUhUTUwiLCJnZXRFbGVtZW50QnlJZCIsInJlYWR5IiwiRSIsIkYiLCJjaGlsZHJlbiIsImNvbnRlbnRzIiwibmV4dCIsInByZXYiLCJkaXIiLCJzaWJsaW5nIiwibmV4dFNpYmxpbmciLCJoYXMiLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsIkciLCJwYXJlbnQiLCJwYXJlbnRzIiwicGFyZW50c1VudGlsIiwibmV4dEFsbCIsIm5leHRVbnRpbCIsInByZXZVbnRpbCIsInNpYmxpbmdzIiwiZmlyc3RDaGlsZCIsImNvbnRlbnREb2N1bWVudCIsImNoaWxkTm9kZXMiLCJyZXZlcnNlIiwiSCIsIkkiLCJKIiwiQ2FsbGJhY2tzIiwib25jZSIsIm1lbW9yeSIsInN0b3BPbkZhbHNlIiwic2hpZnQiLCJkaXNhYmxlIiwicmVtb3ZlIiwiZW1wdHkiLCJkaXNhYmxlZCIsImxvY2siLCJsb2NrZWQiLCJmaXJlV2l0aCIsImZpcmUiLCJmaXJlZCIsIkRlZmVycmVkIiwic3RhdGUiLCJhbHdheXMiLCJkb25lIiwiZmFpbCIsInRoZW4iLCJwcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInByb2dyZXNzIiwibm90aWZ5IiwicGlwZSIsIndoZW4iLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJLIiwicmVhZHlXYWl0IiwiaG9sZFJlYWR5IiwidHJpZ2dlckhhbmRsZXIiLCJvZmYiLCJMIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlYWR5U3RhdGUiLCJzZXRUaW1lb3V0IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk0iLCJhY2Nlc3MiLCJhY2NlcHREYXRhIiwiTiIsImRlZmluZVByb3BlcnR5IiwiY2FjaGUiLCJ1aWQiLCJhY2NlcHRzIiwia2V5IiwidmFsdWUiLCJkZWZpbmVQcm9wZXJ0aWVzIiwic2V0IiwiaGFzRGF0YSIsImRpc2NhcmQiLCJPIiwiUCIsIlEiLCJSIiwiUyIsInBhcnNlSlNPTiIsImRhdGEiLCJyZW1vdmVEYXRhIiwiX2RhdGEiLCJfcmVtb3ZlRGF0YSIsImF0dHJpYnV0ZXMiLCJuYW1lIiwicXVldWUiLCJkZXF1ZXVlIiwiX3F1ZXVlSG9va3MiLCJ1bnNoaWZ0Iiwic3RvcCIsImNsZWFyUXVldWUiLCJUIiwic291cmNlIiwiVSIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjaGVja0Nsb25lIiwiY2xvbmVOb2RlIiwibGFzdENoaWxkIiwiY2hlY2tlZCIsImlubmVySFRNTCIsIm5vQ2xvbmVDaGVja2VkIiwiZGVmYXVsdFZhbHVlIiwiViIsImZvY3VzaW5CdWJibGVzIiwiVyIsIlgiLCJZIiwiWiIsIiQiLCJfIiwiYWIiLCJhY3RpdmVFbGVtZW50IiwiZXZlbnQiLCJnbG9iYWwiLCJoYW5kbGVyIiwiZXZlbnRzIiwiaGFuZGxlIiwidHJpZ2dlcmVkIiwiZGlzcGF0Y2giLCJzcGVjaWFsIiwiZGVsZWdhdGVUeXBlIiwiYmluZFR5cGUiLCJvcmlnVHlwZSIsIm5hbWVzcGFjZSIsImpvaW4iLCJkZWxlZ2F0ZUNvdW50Iiwic2V0dXAiLCJSZWdFeHAiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwidHJpZ2dlciIsIkV2ZW50IiwiaXNUcmlnZ2VyIiwibmFtZXNwYWNlX3JlIiwicmVzdWx0IiwidGFyZ2V0Iiwibm9CdWJibGUiLCJkZWZhdWx0VmlldyIsInBhcmVudFdpbmRvdyIsImlzUHJvcGFnYXRpb25TdG9wcGVkIiwicHJldmVudERlZmF1bHQiLCJpc0RlZmF1bHRQcmV2ZW50ZWQiLCJfZGVmYXVsdCIsInBvcCIsImZpeCIsImRlbGVnYXRlVGFyZ2V0IiwicHJlRGlzcGF0Y2giLCJoYW5kbGVycyIsImN1cnJlbnRUYXJnZXQiLCJlbGVtIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJoYW5kbGVPYmoiLCJzdG9wUHJvcGFnYXRpb24iLCJwb3N0RGlzcGF0Y2giLCJidXR0b24iLCJwcm9wcyIsImZpeEhvb2tzIiwia2V5SG9va3MiLCJ3aGljaCIsImNoYXJDb2RlIiwia2V5Q29kZSIsIm1vdXNlSG9va3MiLCJwYWdlWCIsImNsaWVudFgiLCJib2R5Iiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJwYWdlWSIsImNsaWVudFkiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJsb2FkIiwiZm9jdXMiLCJibHVyIiwiY2xpY2siLCJiZWZvcmV1bmxvYWQiLCJvcmlnaW5hbEV2ZW50IiwicmV0dXJuVmFsdWUiLCJzaW11bGF0ZSIsImlzU2ltdWxhdGVkIiwiZGVmYXVsdFByZXZlbnRlZCIsInRpbWVTdGFtcCIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIm1vdXNlZW50ZXIiLCJtb3VzZWxlYXZlIiwicG9pbnRlcmVudGVyIiwicG9pbnRlcmxlYXZlIiwicmVsYXRlZFRhcmdldCIsIm9uIiwib25lIiwiYmIiLCJjYiIsImRiIiwiZWIiLCJmYiIsImdiIiwiaGIiLCJpYiIsImpiIiwib3B0aW9uIiwidGhlYWQiLCJjb2wiLCJ0ciIsInRkIiwib3B0Z3JvdXAiLCJ0Ym9keSIsInRmb290IiwiY29sZ3JvdXAiLCJjYXB0aW9uIiwidGgiLCJrYiIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwibGIiLCJtYiIsInJlbW92ZUF0dHJpYnV0ZSIsIm5iIiwib2IiLCJwYiIsInFiIiwiY2xvbmUiLCJidWlsZEZyYWdtZW50IiwiY3JlYXRlVGV4dE5vZGUiLCJjbGVhbkRhdGEiLCJhcHBlbmQiLCJkb21NYW5pcCIsInByZXBlbmQiLCJpbnNlcnRCZWZvcmUiLCJiZWZvcmUiLCJhZnRlciIsImh0bWwiLCJyZXBsYWNlV2l0aCIsInJlcGxhY2VDaGlsZCIsImRldGFjaCIsInNyYyIsIl9ldmFsVXJsIiwiYXBwZW5kVG8iLCJwcmVwZW5kVG8iLCJpbnNlcnRBZnRlciIsInJlcGxhY2VBbGwiLCJkZWxheSIsImZ4Iiwic3BlZWRzIiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwic2VsZWN0ZWQiLCJvcHREaXNhYmxlZCIsInJhZGlvVmFsdWUiLCJyYiIsInNiIiwidGIiLCJyZW1vdmVBdHRyIiwicHJvcCIsImF0dHJIb29rcyIsInByb3BGaXgiLCJ1YiIsInJlbW92ZVByb3AiLCJwcm9wSG9va3MiLCJ0YWJJbmRleCIsImhhc0F0dHJpYnV0ZSIsImhyZWYiLCJzZWxlY3RlZEluZGV4IiwidmIiLCJhZGRDbGFzcyIsImNsYXNzTmFtZSIsInJlbW92ZUNsYXNzIiwidG9nZ2xlQ2xhc3MiLCJoYXNDbGFzcyIsIndiIiwidmFsIiwidmFsSG9va3MiLCJzZWxlY3QiLCJvcHRpb25zIiwiaG92ZXIiLCJiaW5kIiwidW5iaW5kIiwiZGVsZWdhdGUiLCJ1bmRlbGVnYXRlIiwieGIiLCJ5YiIsIkpTT04iLCJwYXJzZSIsInBhcnNlWE1MIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwiemIiLCJBYiIsIkJiIiwiQ2IiLCJEYiIsIkViIiwiRmIiLCJHYiIsIkhiIiwiSWIiLCJKYiIsIktiIiwibG9jYXRpb24iLCJMYiIsIk1iIiwiTmIiLCJkYXRhVHlwZXMiLCJPYiIsImFqYXhTZXR0aW5ncyIsImZsYXRPcHRpb25zIiwiUGIiLCJtaW1lVHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiY29udmVydGVycyIsIlFiIiwicmVzcG9uc2VGaWVsZHMiLCJkYXRhRmlsdGVyIiwiZGF0YVR5cGUiLCJhY3RpdmUiLCJsYXN0TW9kaWZpZWQiLCJldGFnIiwidXJsIiwiaXNMb2NhbCIsInByb2Nlc3NEYXRhIiwiYXN5bmMiLCJjb250ZW50VHlwZSIsInhtbCIsImpzb24iLCJTdHJpbmciLCJhamF4U2V0dXAiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJzdGF0dXNDb2RlIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsImNvbXBsZXRlIiwic3VjY2VzcyIsIm1ldGhvZCIsImNyb3NzRG9tYWluIiwicGFyYW0iLCJ0cmFkaXRpb25hbCIsImhhc0NvbnRlbnQiLCJpZk1vZGlmaWVkIiwiaGVhZGVycyIsImJlZm9yZVNlbmQiLCJ0aW1lb3V0Iiwic2VuZCIsInN0YXR1c1RleHQiLCJyZWplY3RXaXRoIiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsIlJiIiwiU2IiLCJUYiIsIlViIiwiVmIiLCJXYiIsImVuY29kZVVSSUNvbXBvbmVudCIsInNlcmlhbGl6ZSIsInNlcmlhbGl6ZUFycmF5IiwieGhyIiwiWE1MSHR0cFJlcXVlc3QiLCJYYiIsIlliIiwiWmIiLCIkYiIsIkFjdGl2ZVhPYmplY3QiLCJjb3JzIiwib3BlbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ4aHJGaWVsZHMiLCJvbmxvYWQiLCJvbmVycm9yIiwicmVzcG9uc2VUZXh0Iiwic2NyaXB0IiwiY2hhcnNldCIsInNjcmlwdENoYXJzZXQiLCJfYiIsImFjIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwiYmMiLCJkZWZpbmUiLCJjYyIsImpRdWVyeSIsImRjIiwibm9Db25mbGljdCIsIkNvb2tpZXMiLCJkZWZhdWx0XyIsIm9Db29raWVzIiwibENvb2tpZXMiLCJjb29raWUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJkb21haW4iLCJwYXRoIiwiZXhwaXJlcyIsInNldFRpbWUiLCJnZXRUaW1lIiwidG9HTVRTdHJpbmciLCJfY2FsbGJhY2tzIiwiY2FsbGJhY2siLCJhcmdzIiwiZXJyIiwiY29uc29sZSIsIlRvb2xzIiwicmVxdWlyZSIsIl9oYXNoIiwiX25hbWVSRSIsIl93YXRjaGVzIiwiX2NoZWNrV2F0Y2hlcyIsIm9sZCIsIl9oYXNoQ2hhbmdlZCIsIl9wYXJzZUhhc2giLCJoYXNoIiwicmVnZXgiLCJmaWVsZCIsInN1YnN0cmluZyIsIkhhc2giLCJpc09iamVjdCIsInRlbXAiLCJfY291bnQiLCJfZWwiLCJoaWRlIiwic3R5bGUiLCJkaXNwbGF5Iiwic2hvdyIsIl9kb21haW4iLCJfZXJyb3IiLCJfY2xlYXIiLCJsb2NhbFN0b3JhZ2UiLCJob3N0bmFtZSIsIl9yZXF1ZXN0Iiwib0NvbmZpZyIsInNldHRpbmdzIiwiX3VybCIsInN0cmluZ2lmeSIsIl9zdG9yZSIsInRva2VuIiwiX3N1Y2Nlc3MiLCJyZXMiLCJTZXJ2aWNlcyIsInN1YmRvbWFpbiIsInNlc3Npb24iLCJzZXJ2aWNlIiwibm91biIsImNvbXBhcmUiLCJ2MSIsInYyIiwia2V5cyIsImlzRGVjaW1hbCIsImlzSW50ZWdlciIsIm9tYXAiLCJyZXQiLCJ1dWlkdjQiLCJjcnlwdG8iLCJnZXRSYW5kb21WYWx1ZXMiLCJVaW50OEFycmF5IiwiY29uZiIsIm9Tb2NrIiwiV2ViU29ja2V0Iiwib25vcGVuIiwibG9nIiwib25tZXNzYWdlIiwiZXYiLCJvbmNsb3NlIiwiRXZlbnRzIiwiTG9hZGVyIiwiUmVxdWVzdHMiLCJTaXRlIiwiUmVhY3RET00iLCJyZW5kZXIiLCJSZWFjdCIsInJlYWQiLCJFUlJPUl9DTEFTUyIsIl9hZGRDbGFzcyIsImVsIiwibmFtZXMiLCJfcmVtb3ZlQ2xhc3MiLCJpbmNsdWRlcyIsIl9CYXNlTm9kZSIsImVycm9ycyIsInJlZnMiLCJQdXJlQ29tcG9uZW50IiwiQXJyYXlOb2RlIiwiTm9kZSIsIm1zZyIsInZhbHVlU2V0IiwiUGFyZW50IiwiZXJyb3JBZGQiLCJlcnJvclJlbW92ZSIsImVycm9yRm9jdXMiLCJlbGVtZW50cyIsIk1lbnUiLCJvbkNoYW5nZSIsIml0ZW1DbGljayIsInNlbGYiLCJzZXRTdGF0ZSIsIkNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVuZGVyQ2hpbGRyZW4iLCJJdGVtIiwiX2luc3RhbmNlIiwiTWVzc2FnZSIsImJ1dHRvbnMiLCJkYXRhc2V0IiwiaWQiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIk1lc3NhZ2VzIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwibXNncyIsIk1vZGFsIiwiY2xvc2UiLCJidXR0b25DbGljayIsInRyYXBFc2NhcGUiLCJidG4iLCJzdHlsZXMiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwiU1VDQ0VTU19USU1FT1VUIiwiRVJST1JfVElNRU9VVCIsIldBUk5JTkdfVElNRU9VVCIsIlNURVBfVElNRU9VVCIsIldJRFRIX1NURVBTIiwiSEVJR0hUX1NURVBTIiwiTUFSR0lOIiwiUG9wdXBzIiwicG9wdXBzIiwidGltZXIiLCJwb3B1cCIsInByb2Nlc3MiLCJ3YXJuaW5nIiwic3RlcCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaWNvbiIsImlUaW1lb3V0Iiwic0ljb24iLCJ3YXJuIiwiRm9ybXMiLCJUaHJvd2VyIiwiVXRpbHMiLCJIZWFkZXIiLCJhY2NvdW50U2hvdyIsImhvbWUiLCJzaWduaW4iLCJzaWduaW5TaG93Iiwic2lnbmluVHJpZ2dlciIsInNpZ25vdXQiLCJzaWdub3V0VHJpZ2dlciIsInNpZ251cCIsInNpZ251cFNob3ciLCJtb2RhbCIsInRocm93ZXIiLCJhbGlhcyIsImNyZWF0ZSIsInBhc3N3ZCIsInNlcnZpY2VFcnJvciIsImNvZGUiLCJzaWdudXBfYWxpYXMiLCJzaWdudXBfcGFzc3dkIiwicmVwZWF0X3Bhc3N3ZCIsIm9EYXRhIiwiZW1haWwiLCJfaWQiLCJOYXRmIiwiTWF0Y2giLCJvcmdDaGFuZ2UiLCJ3YXRjaCIsInVud2F0Y2giLCJvcmciLCJtZW51Q2hhbmdlIiwiQm9hcmQiLCJvblBvaW50cyIsImNsdXRjaE1vZGUiLCJjbHV0Y2hDbGljayIsImRyb3BDbGljayIsInBvaW50Q2xpY2siLCJyZXNldENsdXRjaCIsImNsYXNzTmFtZXMiLCJwYXJzZUludCIsIm1vZGUiLCJQcmFjdGljZSIsIm1vZGVTZWxlY3QiLCJvdmVyd3JpdGUiLCJwb2ludHMiLCJwb2ludHNIaWRlIiwicG9pbnRzU2hvdyIsInJlc2V0Iiwic2F2ZSIsIm5ld19zdGF0ZSIsImJvYXJkIiwiY2x1dGNoIiwiY2x1dGNoQXR0ZW1wdHMiLCJjbHV0Y2hIaXRzIiwidG90YWxQb2ludHMiLCJ0b0ZpeGVkIiwic2hvd1BvaW50cyIsImNvbmZpcm0iLCJTdGF0cyIsIm1hdGNoU3RhdHMiLCJwcmFjdGljZURhdGEiLCJwcmFjdGljZURhdGFIaWRlIiwicHJhY3RpY2VTdGF0cyIsInByYWN0aWNlU3RhdHNBbGwiLCJhbGwiLCJwcmFjdGljZSIsInRvdGFsIiwiYXR0ZW1wdHMiLCJkcm9wcyIsImF2ZXJhZ2UiLCJyYXRlIiwiZGF0ZSIsIl9jcmVhdGVkIiwicHJhY3RpY2VfYWxsIiwicHJhY3RpY2VfZGF0YSIsImhhc2hDaGFuZ2UiLCJwYWdlQ2hhbmdlIiwicGFnZSIsIm1lbnUiLCJpdGVtcyIsIlR3b1dheSIsIl9fdGhyb3dlciIsIl9fcGVuZGluZyIsIl9pbml0IiwiX3NpZ25pbiIsIl9zaWdub3V0IiwiX3BlbmRpbmciLCJfcGVuZGluZ1Byb2Nlc3MiLCJyZXF1ZXN0cyIsIl9yZXF1ZXN0RGVjbGluZSIsIl9yZXF1ZXN0QWNjZXB0IiwiX3JlcXVlc3REZWxldGUiLCJfcmVxdWVzdFdhaXQiLCJ1cGRhdGUiLCJyZXEiLCJfcmVxdWVzdE5ldyIsInRyYWNrIiwidW50cmFjayIsIldTSGVscGVyIiwiX19waW5nIiwiX19jbG9zZSIsIl9fc29ja2V0IiwiX19zZXJ2aWNlcyIsIl9hZGRUcmFjayIsIl9oYW5kbGVDbG9zZSIsIl9vcGVuU29ja2V0IiwiX2hhbmRsZU1lc3NhZ2UiLCJzb2NrIiwiRmlsZVJlYWRlciIsIm9Nc2ciLCJyZWFkQXNUZXh0IiwibE1zZ3MiLCJzZXRJbnRlcnZhbCIsIl9waW5nIiwiX3RyYWNrIiwiX3VudHJhY2siLCJjbGVhckludGVydmFsIiwidHMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImVycm9yVHJlZSIsIm9SZXQiLCJsRmllbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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QkMsSUFBSSxDQUFDaHlCLENBQUQsQ0FBcEIsQ0FBVjtBQUNBO0FBQ0QsS0F0QzBCLENBd0MzQjs7O0FBQ0EsV0FBT2d5QixJQUFQO0FBQ0EsR0F0RFU7QUF3RFgxRyxjQUFZLEVBQUUsc0JBQVNySyxHQUFULEVBQWM7QUFFM0I7QUFDQSxZQUFPQSxHQUFHLENBQUNzSyxJQUFYO0FBRUM7QUFDQSxXQUFLLEdBQUw7QUFFQztBQUNBdkcsY0FBTSxDQUFDL1UsT0FBUCxDQUFlLFNBQWYsRUFIRCxDQUtDOztBQUNBLGVBQU8sSUFBUDtBQUVEOztBQUNBLFdBQUssSUFBTDtBQUVDO0FBQ0FnUixXQUFHLENBQUNtRixHQUFKLEdBQVVrRSxLQUFLLENBQUN5SCxTQUFOLENBQWdCOVEsR0FBRyxDQUFDbUYsR0FBcEIsQ0FBVixDQUhELENBS0M7O0FBQ0EsZUFBTyxLQUFQO0FBbEJGLEtBSDJCLENBd0IzQjs7O0FBQ0EsV0FBTyxLQUFQO0FBQ0EsR0FsRlUsQ0FxRlo7O0FBckZZLENBQVo7QUFzRkF2bkIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCd3JCLEtBQWpCLEMiLCJmaWxlIjoiLi4vaG9zdHMvc3RhdGljL2pzL3NpdGUuZGV2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93ZWJwYWNrL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUpIHtcblx0aWYgKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0bW9kdWxlLmRlcHJlY2F0ZSA9IGZ1bmN0aW9uKCkge307XG5cdFx0bW9kdWxlLnBhdGhzID0gW107XG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XG5cdFx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiLyohIGpRdWVyeSB2Mi4xLjEgLWNzcywtY3NzL2FkZEdldEhvb2tJZiwtY3NzL2N1ckNTUywtY3NzL2RlZmF1bHREaXNwbGF5LC1jc3MvaGlkZGVuVmlzaWJsZVNlbGVjdG9ycywtY3NzL3N1cHBvcnQsLWNzcy9zd2FwLC1jc3MvdmFyL2Nzc0V4cGFuZCwtY3NzL3Zhci9nZXRTdHlsZXMsLWNzcy92YXIvaXNIaWRkZW4sLWNzcy92YXIvcm1hcmdpbiwtY3NzL3Zhci9ybnVtbm9ucHgsLWVmZmVjdHMsLWVmZmVjdHMvVHdlZW4sLWVmZmVjdHMvYW5pbWF0ZWRTZWxlY3RvciwtZGltZW5zaW9ucywtb2Zmc2V0LC1kZXByZWNhdGVkLC1ldmVudC1hbGlhcywtd3JhcCB8IChjKSAyMDA1LCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uLCBJbmMuIHwganF1ZXJ5Lm9yZy9saWNlbnNlICovXG4hZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlLmV4cG9ydHM/bW9kdWxlLmV4cG9ydHM9YS5kb2N1bWVudD9iKGEsITApOmZ1bmN0aW9uKGEpe2lmKCFhLmRvY3VtZW50KXRocm93IG5ldyBFcnJvcihcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIik7cmV0dXJuIGIoYSl9OmIoYSl9KFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93OnRoaXMsZnVuY3Rpb24oYSxiKXt2YXIgYz1bXSxkPWMuc2xpY2UsZT1jLmNvbmNhdCxmPWMucHVzaCxnPWMuaW5kZXhPZixoPXt9LGk9aC50b1N0cmluZyxqPWguaGFzT3duUHJvcGVydHksaz17fSxsPWEuZG9jdW1lbnQsbT1cIjIuMS4xIC1jc3MsLWNzcy9hZGRHZXRIb29rSWYsLWNzcy9jdXJDU1MsLWNzcy9kZWZhdWx0RGlzcGxheSwtY3NzL2hpZGRlblZpc2libGVTZWxlY3RvcnMsLWNzcy9zdXBwb3J0LC1jc3Mvc3dhcCwtY3NzL3Zhci9jc3NFeHBhbmQsLWNzcy92YXIvZ2V0U3R5bGVzLC1jc3MvdmFyL2lzSGlkZGVuLC1jc3MvdmFyL3JtYXJnaW4sLWNzcy92YXIvcm51bW5vbnB4LC1lZmZlY3RzLC1lZmZlY3RzL1R3ZWVuLC1lZmZlY3RzL2FuaW1hdGVkU2VsZWN0b3IsLWRpbWVuc2lvbnMsLW9mZnNldCwtZGVwcmVjYXRlZCwtZXZlbnQtYWxpYXMsLXdyYXBcIixuPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBuLmZuLmluaXQoYSxiKX0sbz0vXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2cscD0vXi1tcy0vLHE9Ly0oW1xcZGEtel0pL2dpLHI9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYi50b1VwcGVyQ2FzZSgpfTtuLmZuPW4ucHJvdG90eXBlPXtqcXVlcnk6bSxjb25zdHJ1Y3RvcjpuLHNlbGVjdG9yOlwiXCIsbGVuZ3RoOjAsdG9BcnJheTpmdW5jdGlvbigpe3JldHVybiBkLmNhbGwodGhpcyl9LGdldDpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT8wPmE/dGhpc1thK3RoaXMubGVuZ3RoXTp0aGlzW2FdOmQuY2FsbCh0aGlzKX0scHVzaFN0YWNrOmZ1bmN0aW9uKGEpe3ZhciBiPW4ubWVyZ2UodGhpcy5jb25zdHJ1Y3RvcigpLGEpO3JldHVybiBiLnByZXZPYmplY3Q9dGhpcyxiLmNvbnRleHQ9dGhpcy5jb250ZXh0LGJ9LGVhY2g6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5lYWNoKHRoaXMsYSxiKX0sbWFwOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLm1hcCh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuIGEuY2FsbChiLGMsYil9KSl9LHNsaWNlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQuYXBwbHkodGhpcyxhcmd1bWVudHMpKX0sZmlyc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgwKX0sbGFzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKC0xKX0sZXE6ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5sZW5ndGgsYz0rYSsoMD5hP2I6MCk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGM+PTAmJmI+Yz9bdGhpc1tjXV06W10pfSxlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wcmV2T2JqZWN0fHx0aGlzLmNvbnN0cnVjdG9yKG51bGwpfSxwdXNoOmYsc29ydDpjLnNvcnQsc3BsaWNlOmMuc3BsaWNlfSxuLmV4dGVuZD1uLmZuLmV4dGVuZD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPWFyZ3VtZW50c1swXXx8e30saD0xLGk9YXJndW1lbnRzLmxlbmd0aCxqPSExO2ZvcihcImJvb2xlYW5cIj09dHlwZW9mIGcmJihqPWcsZz1hcmd1bWVudHNbaF18fHt9LGgrKyksXCJvYmplY3RcIj09dHlwZW9mIGd8fG4uaXNGdW5jdGlvbihnKXx8KGc9e30pLGg9PT1pJiYoZz10aGlzLGgtLSk7aT5oO2grKylpZihudWxsIT0oYT1hcmd1bWVudHNbaF0pKWZvcihiIGluIGEpYz1nW2JdLGQ9YVtiXSxnIT09ZCYmKGomJmQmJihuLmlzUGxhaW5PYmplY3QoZCl8fChlPW4uaXNBcnJheShkKSkpPyhlPyhlPSExLGY9YyYmbi5pc0FycmF5KGMpP2M6W10pOmY9YyYmbi5pc1BsYWluT2JqZWN0KGMpP2M6e30sZ1tiXT1uLmV4dGVuZChqLGYsZCkpOnZvaWQgMCE9PWQmJihnW2JdPWQpKTtyZXR1cm4gZ30sbi5leHRlbmQoe2V4cGFuZG86XCJqUXVlcnlcIisobStNYXRoLnJhbmRvbSgpKS5yZXBsYWNlKC9cXEQvZyxcIlwiKSxpc1JlYWR5OiEwLGVycm9yOmZ1bmN0aW9uKGEpe3Rocm93IG5ldyBFcnJvcihhKX0sbm9vcDpmdW5jdGlvbigpe30saXNGdW5jdGlvbjpmdW5jdGlvbihhKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT1uLnR5cGUoYSl9LGlzQXJyYXk6QXJyYXkuaXNBcnJheSxpc1dpbmRvdzpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YSYmYT09PWEud2luZG93fSxpc051bWVyaWM6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNBcnJheShhKSYmYS1wYXJzZUZsb2F0KGEpPj0wfSxpc1BsYWluT2JqZWN0OmZ1bmN0aW9uKGEpe3JldHVyblwib2JqZWN0XCIhPT1uLnR5cGUoYSl8fGEubm9kZVR5cGV8fG4uaXNXaW5kb3coYSk/ITE6YS5jb25zdHJ1Y3RvciYmIWouY2FsbChhLmNvbnN0cnVjdG9yLnByb3RvdHlwZSxcImlzUHJvdG90eXBlT2ZcIik/ITE6ITB9LGlzRW1wdHlPYmplY3Q6ZnVuY3Rpb24oYSl7dmFyIGI7Zm9yKGIgaW4gYSlyZXR1cm4hMTtyZXR1cm4hMH0sdHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9hK1wiXCI6XCJvYmplY3RcIj09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGE/aFtpLmNhbGwoYSldfHxcIm9iamVjdFwiOnR5cGVvZiBhfSxnbG9iYWxFdmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGM9ZXZhbDthPW4udHJpbShhKSxhJiYoMT09PWEuaW5kZXhPZihcInVzZSBzdHJpY3RcIik/KGI9bC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpLGIudGV4dD1hLGwuaGVhZC5hcHBlbmRDaGlsZChiKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGIpKTpjKGEpKX0sY2FtZWxDYXNlOmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UocCxcIm1zLVwiKS5yZXBsYWNlKHEscil9LG5vZGVOYW1lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEubm9kZU5hbWUmJmEubm9kZU5hbWUudG9Mb3dlckNhc2UoKT09PWIudG9Mb3dlckNhc2UoKX0sZWFjaDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT0wLGY9YS5sZW5ndGgsZz1zKGEpO2lmKGMpe2lmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGlmKGcpe2Zvcig7Zj5lO2UrKylpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuY2FsbChhW2VdLGUsYVtlXSksZD09PSExKWJyZWFrO3JldHVybiBhfSx0cmltOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6KGErXCJcIikucmVwbGFjZShvLFwiXCIpfSxtYWtlQXJyYXk6ZnVuY3Rpb24oYSxiKXt2YXIgYz1ifHxbXTtyZXR1cm4gbnVsbCE9YSYmKHMoT2JqZWN0KGEpKT9uLm1lcmdlKGMsXCJzdHJpbmdcIj09dHlwZW9mIGE/W2FdOmEpOmYuY2FsbChjLGEpKSxjfSxpbkFycmF5OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbnVsbD09Yj8tMTpnLmNhbGwoYixhLGMpfSxtZXJnZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz0rYi5sZW5ndGgsZD0wLGU9YS5sZW5ndGg7Yz5kO2QrKylhW2UrK109YltkXTtyZXR1cm4gYS5sZW5ndGg9ZSxhfSxncmVwOmZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQsZT1bXSxmPTAsZz1hLmxlbmd0aCxoPSFjO2c+ZjtmKyspZD0hYihhW2ZdLGYpLGQhPT1oJiZlLnB1c2goYVtmXSk7cmV0dXJuIGV9LG1hcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZj0wLGc9YS5sZW5ndGgsaD1zKGEpLGk9W107aWYoaClmb3IoO2c+ZjtmKyspZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7ZWxzZSBmb3IoZiBpbiBhKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO3JldHVybiBlLmFwcGx5KFtdLGkpfSxndWlkOjEscHJveHk6ZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGY7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJihjPWFbYl0sYj1hLGE9Yyksbi5pc0Z1bmN0aW9uKGEpPyhlPWQuY2FsbChhcmd1bWVudHMsMiksZj1mdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGJ8fHRoaXMsZS5jb25jYXQoZC5jYWxsKGFyZ3VtZW50cykpKX0sZi5ndWlkPWEuZ3VpZD1hLmd1aWR8fG4uZ3VpZCsrLGYpOnZvaWQgMH0sbm93OkRhdGUubm93LHN1cHBvcnQ6a30pLG4uZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtoW1wiW29iamVjdCBcIitiK1wiXVwiXT1iLnRvTG93ZXJDYXNlKCl9KTtmdW5jdGlvbiBzKGEpe3ZhciBiPWEubGVuZ3RoLGM9bi50eXBlKGEpO3JldHVyblwiZnVuY3Rpb25cIj09PWN8fG4uaXNXaW5kb3coYSk/ITE6MT09PWEubm9kZVR5cGUmJmI/ITA6XCJhcnJheVwiPT09Y3x8MD09PWJ8fFwibnVtYmVyXCI9PXR5cGVvZiBiJiZiPjAmJmItMSBpbiBhfXZhciB0PWEuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LHUsdj10Lm1hdGNoZXN8fHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yfHx0Lm1vek1hdGNoZXNTZWxlY3Rvcnx8dC5vTWF0Y2hlc1NlbGVjdG9yfHx0Lm1zTWF0Y2hlc1NlbGVjdG9yLHc9ZnVuY3Rpb24oYSxiKXtpZihhPT09YilyZXR1cm4gdT0hMCwwO3ZhciBjPWIuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24mJmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYik7cmV0dXJuIGM/MSZjP2E9PT1sfHxuLmNvbnRhaW5zKGwsYSk/LTE6Yj09PWx8fG4uY29udGFpbnMobCxiKT8xOjA6NCZjPy0xOjE6YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbj8tMToxfTtuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9MDtpZihjPWN8fFtdLGI9Ynx8bCwhYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIGM7aWYoMSE9PShmPWIubm9kZVR5cGUpJiY5IT09ZilyZXR1cm5bXTtpZihkKXdoaWxlKGU9ZFtnKytdKW4uZmluZC5tYXRjaGVzU2VsZWN0b3IoZSxhKSYmYy5wdXNoKGUpO2Vsc2Ugbi5tZXJnZShjLGIucXVlcnlTZWxlY3RvckFsbChhKSk7cmV0dXJuIGN9LHVuaXF1ZTpmdW5jdGlvbihhKXt2YXIgYixjPVtdLGQ9MCxlPTA7aWYodT0hMSxhLnNvcnQodyksdSl7d2hpbGUoYj1hW2QrK10pYj09PWFbZF0mJihlPWMucHVzaChkKSk7d2hpbGUoZS0tKWEuc3BsaWNlKGNbZV0sMSl9cmV0dXJuIGF9LHRleHQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz1cIlwiLGQ9MCxlPWEubm9kZVR5cGU7aWYoZSl7aWYoMT09PWV8fDk9PT1lfHwxMT09PWUpcmV0dXJuIGEudGV4dENvbnRlbnQ7aWYoMz09PWV8fDQ9PT1lKXJldHVybiBhLm5vZGVWYWx1ZX1lbHNlIHdoaWxlKGI9YVtkKytdKWMrPW4udGV4dChiKTtyZXR1cm4gY30sY29udGFpbnM6ZnVuY3Rpb24oYSxiKXt2YXIgYz05PT09YS5ub2RlVHlwZT9hLmRvY3VtZW50RWxlbWVudDphLGQ9YiYmYi5wYXJlbnROb2RlO3JldHVybiBhPT09ZHx8ISghZHx8MSE9PWQubm9kZVR5cGV8fCFjLmNvbnRhaW5zKGQpKX0saXNYTUxEb2M6ZnVuY3Rpb24oYSl7cmV0dXJuXCJIVE1MXCIhPT0oYS5vd25lckRvY3VtZW50fHxhKS5kb2N1bWVudEVsZW1lbnQubm9kZU5hbWV9LGV4cHI6e2F0dHJIYW5kbGU6e30sbWF0Y2g6e2Jvb2w6L14oPzpjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZCkkL2ksbmVlZHNDb250ZXh0Oi9eW1xceDIwXFx0XFxyXFxuXFxmXSpbPit+XS99fX0pLG4uZXh0ZW5kKG4uZmluZCx7bWF0Y2hlczpmdW5jdGlvbihhLGIpe3JldHVybiBuLmZpbmQoYSxudWxsLG51bGwsYil9LG1hdGNoZXNTZWxlY3RvcjpmdW5jdGlvbihhLGIpe3JldHVybiB2LmNhbGwoYSxiKX0sYXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBhLmdldEF0dHJpYnV0ZShiKX19KTt2YXIgeD1uLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LHk9L148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvLHo9L14uW146I1xcW1xcLixdKiQvO2Z1bmN0aW9uIEEoYSxiLGMpe2lmKG4uaXNGdW5jdGlvbihiKSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSxkKXtyZXR1cm4hIWIuY2FsbChhLGQsYSkhPT1jfSk7aWYoYi5ub2RlVHlwZSlyZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGE9PT1iIT09Y30pO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKXtpZih6LnRlc3QoYikpcmV0dXJuIG4uZmlsdGVyKGIsYSxjKTtiPW4uZmlsdGVyKGIsYSl9cmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBnLmNhbGwoYixhKT49MCE9PWN9KX1uLmZpbHRlcj1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9YlswXTtyZXR1cm4gYyYmKGE9XCI6bm90KFwiK2ErXCIpXCIpLDE9PT1iLmxlbmd0aCYmMT09PWQubm9kZVR5cGU/bi5maW5kLm1hdGNoZXNTZWxlY3RvcihkLGEpP1tkXTpbXTpuLmZpbmQubWF0Y2hlcyhhLG4uZ3JlcChiLGZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZX0pKX0sbi5mbi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLmxlbmd0aCxkPVtdLGU9dGhpcztpZihcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gdGhpcy5wdXNoU3RhY2sobihhKS5maWx0ZXIoZnVuY3Rpb24oKXtmb3IoYj0wO2M+YjtiKyspaWYobi5jb250YWlucyhlW2JdLHRoaXMpKXJldHVybiEwfSkpO2ZvcihiPTA7Yz5iO2IrKyluLmZpbmQoYSxlW2JdLGQpO3JldHVybiBkPXRoaXMucHVzaFN0YWNrKGM+MT9uLnVuaXF1ZShkKTpkKSxkLnNlbGVjdG9yPXRoaXMuc2VsZWN0b3I/dGhpcy5zZWxlY3RvcitcIiBcIithOmEsZH0sZmlsdGVyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhBKHRoaXMsYXx8W10sITEpKX0sbm90OmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnB1c2hTdGFjayhBKHRoaXMsYXx8W10sITApKX0saXM6ZnVuY3Rpb24oYSl7cmV0dXJuISFBKHRoaXMsXCJzdHJpbmdcIj09dHlwZW9mIGEmJngudGVzdChhKT9uKGEpOmF8fFtdLCExKS5sZW5ndGh9fSk7dmFyIEIsQz0vXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxEPW4uZm4uaW5pdD1mdW5jdGlvbihhLGIpe3ZhciBjLGQ7aWYoIWEpcmV0dXJuIHRoaXM7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEpe2lmKGM9XCI8XCI9PT1hWzBdJiZcIj5cIj09PWFbYS5sZW5ndGgtMV0mJmEubGVuZ3RoPj0zP1tudWxsLGEsbnVsbF06Qy5leGVjKGEpLCFjfHwhY1sxXSYmYilyZXR1cm4hYnx8Yi5qcXVlcnk/KGJ8fEIpLmZpbmQoYSk6dGhpcy5jb25zdHJ1Y3RvcihiKS5maW5kKGEpO2lmKGNbMV0pe2lmKGI9YiBpbnN0YW5jZW9mIG4/YlswXTpiLG4ubWVyZ2UodGhpcyxuLnBhcnNlSFRNTChjWzFdLGImJmIubm9kZVR5cGU/Yi5vd25lckRvY3VtZW50fHxiOmwsITApKSx5LnRlc3QoY1sxXSkmJm4uaXNQbGFpbk9iamVjdChiKSlmb3IoYyBpbiBiKW4uaXNGdW5jdGlvbih0aGlzW2NdKT90aGlzW2NdKGJbY10pOnRoaXMuYXR0cihjLGJbY10pO3JldHVybiB0aGlzfXJldHVybiBkPWwuZ2V0RWxlbWVudEJ5SWQoY1syXSksZCYmZC5wYXJlbnROb2RlJiYodGhpcy5sZW5ndGg9MSx0aGlzWzBdPWQpLHRoaXMuY29udGV4dD1sLHRoaXMuc2VsZWN0b3I9YSx0aGlzfXJldHVybiBhLm5vZGVUeXBlPyh0aGlzLmNvbnRleHQ9dGhpc1swXT1hLHRoaXMubGVuZ3RoPTEsdGhpcyk6bi5pc0Z1bmN0aW9uKGEpP1widW5kZWZpbmVkXCIhPXR5cGVvZiBCLnJlYWR5P0IucmVhZHkoYSk6YShuKToodm9pZCAwIT09YS5zZWxlY3RvciYmKHRoaXMuc2VsZWN0b3I9YS5zZWxlY3Rvcix0aGlzLmNvbnRleHQ9YS5jb250ZXh0KSxuLm1ha2VBcnJheShhLHRoaXMpKX07RC5wcm90b3R5cGU9bi5mbixCPW4obCk7dmFyIEU9L14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sRj17Y2hpbGRyZW46ITAsY29udGVudHM6ITAsbmV4dDohMCxwcmV2OiEwfTtuLmV4dGVuZCh7ZGlyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1bXSxlPXZvaWQgMCE9PWM7d2hpbGUoKGE9YVtiXSkmJjkhPT1hLm5vZGVUeXBlKWlmKDE9PT1hLm5vZGVUeXBlKXtpZihlJiZuKGEpLmlzKGMpKWJyZWFrO2QucHVzaChhKX1yZXR1cm4gZH0sc2libGluZzpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1bXTthO2E9YS5uZXh0U2libGluZykxPT09YS5ub2RlVHlwZSYmYSE9PWImJmMucHVzaChhKTtyZXR1cm4gY319KSxuLmZuLmV4dGVuZCh7aGFzOmZ1bmN0aW9uKGEpe3ZhciBiPW4oYSx0aGlzKSxjPWIubGVuZ3RoO3JldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpe2Zvcih2YXIgYT0wO2M+YTthKyspaWYobi5jb250YWlucyh0aGlzLGJbYV0pKXJldHVybiEwfSl9LGNsb3Nlc3Q6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD0wLGU9dGhpcy5sZW5ndGgsZj1bXSxnPXgudGVzdChhKXx8XCJzdHJpbmdcIiE9dHlwZW9mIGE/bihhLGJ8fHRoaXMuY29udGV4dCk6MDtlPmQ7ZCsrKWZvcihjPXRoaXNbZF07YyYmYyE9PWI7Yz1jLnBhcmVudE5vZGUpaWYoYy5ub2RlVHlwZTwxMSYmKGc/Zy5pbmRleChjKT4tMToxPT09Yy5ub2RlVHlwZSYmbi5maW5kLm1hdGNoZXNTZWxlY3RvcihjLGEpKSl7Zi5wdXNoKGMpO2JyZWFrfXJldHVybiB0aGlzLnB1c2hTdGFjayhmLmxlbmd0aD4xP24udW5pcXVlKGYpOmYpfSxpbmRleDpmdW5jdGlvbihhKXtyZXR1cm4gYT9cInN0cmluZ1wiPT10eXBlb2YgYT9nLmNhbGwobihhKSx0aGlzWzBdKTpnLmNhbGwodGhpcyxhLmpxdWVyeT9hWzBdOmEpOnRoaXNbMF0mJnRoaXNbMF0ucGFyZW50Tm9kZT90aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aDotMX0sYWRkOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4udW5pcXVlKG4ubWVyZ2UodGhpcy5nZXQoKSxuKGEsYikpKSl9LGFkZEJhY2s6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuYWRkKG51bGw9PWE/dGhpcy5wcmV2T2JqZWN0OnRoaXMucHJldk9iamVjdC5maWx0ZXIoYSkpfX0pO2Z1bmN0aW9uIEcoYSxiKXt3aGlsZSgoYT1hW2JdKSYmMSE9PWEubm9kZVR5cGUpO3JldHVybiBhfW4uZWFjaCh7cGFyZW50OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmMTEhPT1iLm5vZGVUeXBlP2I6bnVsbH0scGFyZW50czpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIil9LHBhcmVudHNVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIsYyl9LG5leHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2OmZ1bmN0aW9uKGEpe3JldHVybiBHKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiKX0scHJldkFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dFVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIsYyl9LHByZXZVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIixjKX0sc2libGluZ3M6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZygoYS5wYXJlbnROb2RlfHx7fSkuZmlyc3RDaGlsZCxhKX0sY2hpbGRyZW46ZnVuY3Rpb24oYSl7cmV0dXJuIG4uc2libGluZyhhLmZpcnN0Q2hpbGQpfSxjb250ZW50czpmdW5jdGlvbihhKXtyZXR1cm4gYS5jb250ZW50RG9jdW1lbnR8fG4ubWVyZ2UoW10sYS5jaGlsZE5vZGVzKX19LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihjLGQpe3ZhciBlPW4ubWFwKHRoaXMsYixjKTtyZXR1cm5cIlVudGlsXCIhPT1hLnNsaWNlKC01KSYmKGQ9YyksZCYmXCJzdHJpbmdcIj09dHlwZW9mIGQmJihlPW4uZmlsdGVyKGQsZSkpLHRoaXMubGVuZ3RoPjEmJihGW2FdfHxuLnVuaXF1ZShlKSxFLnRlc3QoYSkmJmUucmV2ZXJzZSgpKSx0aGlzLnB1c2hTdGFjayhlKX19KTt2YXIgSD0vXFxTKy9nLEk9e307ZnVuY3Rpb24gSihhKXt2YXIgYj1JW2FdPXt9O3JldHVybiBuLmVhY2goYS5tYXRjaChIKXx8W10sZnVuY3Rpb24oYSxjKXtiW2NdPSEwfSksYn1uLkNhbGxiYWNrcz1mdW5jdGlvbihhKXthPVwic3RyaW5nXCI9PXR5cGVvZiBhP0lbYV18fEooYSk6bi5leHRlbmQoe30sYSk7dmFyIGIsYyxkLGUsZixnLGg9W10saT0hYS5vbmNlJiZbXSxqPWZ1bmN0aW9uKGwpe2ZvcihiPWEubWVtb3J5JiZsLGM9ITAsZz1lfHwwLGU9MCxmPWgubGVuZ3RoLGQ9ITA7aCYmZj5nO2crKylpZihoW2ddLmFwcGx5KGxbMF0sbFsxXSk9PT0hMSYmYS5zdG9wT25GYWxzZSl7Yj0hMTticmVha31kPSExLGgmJihpP2kubGVuZ3RoJiZqKGkuc2hpZnQoKSk6Yj9oPVtdOmsuZGlzYWJsZSgpKX0saz17YWRkOmZ1bmN0aW9uKCl7aWYoaCl7dmFyIGM9aC5sZW5ndGg7IWZ1bmN0aW9uIGcoYil7bi5lYWNoKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1uLnR5cGUoYyk7XCJmdW5jdGlvblwiPT09ZD9hLnVuaXF1ZSYmay5oYXMoYyl8fGgucHVzaChjKTpjJiZjLmxlbmd0aCYmXCJzdHJpbmdcIiE9PWQmJmcoYyl9KX0oYXJndW1lbnRzKSxkP2Y9aC5sZW5ndGg6YiYmKGU9YyxqKGIpKX1yZXR1cm4gdGhpc30scmVtb3ZlOmZ1bmN0aW9uKCl7cmV0dXJuIGgmJm4uZWFjaChhcmd1bWVudHMsZnVuY3Rpb24oYSxiKXt2YXIgYzt3aGlsZSgoYz1uLmluQXJyYXkoYixoLGMpKT4tMSloLnNwbGljZShjLDEpLGQmJihmPj1jJiZmLS0sZz49YyYmZy0tKX0pLHRoaXN9LGhhczpmdW5jdGlvbihhKXtyZXR1cm4gYT9uLmluQXJyYXkoYSxoKT4tMTohKCFofHwhaC5sZW5ndGgpfSxlbXB0eTpmdW5jdGlvbigpe3JldHVybiBoPVtdLGY9MCx0aGlzfSxkaXNhYmxlOmZ1bmN0aW9uKCl7cmV0dXJuIGg9aT1iPXZvaWQgMCx0aGlzfSxkaXNhYmxlZDpmdW5jdGlvbigpe3JldHVybiFofSxsb2NrOmZ1bmN0aW9uKCl7cmV0dXJuIGk9dm9pZCAwLGJ8fGsuZGlzYWJsZSgpLHRoaXN9LGxvY2tlZDpmdW5jdGlvbigpe3JldHVybiFpfSxmaXJlV2l0aDpmdW5jdGlvbihhLGIpe3JldHVybiFofHxjJiYhaXx8KGI9Ynx8W10sYj1bYSxiLnNsaWNlP2Iuc2xpY2UoKTpiXSxkP2kucHVzaChiKTpqKGIpKSx0aGlzfSxmaXJlOmZ1bmN0aW9uKCl7cmV0dXJuIGsuZmlyZVdpdGgodGhpcyxhcmd1bWVudHMpLHRoaXN9LGZpcmVkOmZ1bmN0aW9uKCl7cmV0dXJuISFjfX07cmV0dXJuIGt9LG4uZXh0ZW5kKHtEZWZlcnJlZDpmdW5jdGlvbihhKXt2YXIgYj1bW1wicmVzb2x2ZVwiLFwiZG9uZVwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZXNvbHZlZFwiXSxbXCJyZWplY3RcIixcImZhaWxcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVqZWN0ZWRcIl0sW1wibm90aWZ5XCIsXCJwcm9ncmVzc1wiLG4uQ2FsbGJhY2tzKFwibWVtb3J5XCIpXV0sYz1cInBlbmRpbmdcIixkPXtzdGF0ZTpmdW5jdGlvbigpe3JldHVybiBjfSxhbHdheXM6ZnVuY3Rpb24oKXtyZXR1cm4gZS5kb25lKGFyZ3VtZW50cykuZmFpbChhcmd1bWVudHMpLHRoaXN9LHRoZW46ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHM7cmV0dXJuIG4uRGVmZXJyZWQoZnVuY3Rpb24oYyl7bi5lYWNoKGIsZnVuY3Rpb24oYixmKXt2YXIgZz1uLmlzRnVuY3Rpb24oYVtiXSkmJmFbYl07ZVtmWzFdXShmdW5jdGlvbigpe3ZhciBhPWcmJmcuYXBwbHkodGhpcyxhcmd1bWVudHMpO2EmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2EucHJvbWlzZSgpLmRvbmUoYy5yZXNvbHZlKS5mYWlsKGMucmVqZWN0KS5wcm9ncmVzcyhjLm5vdGlmeSk6Y1tmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZD9jLnByb21pc2UoKTp0aGlzLGc/W2FdOmFyZ3VtZW50cyl9KX0pLGE9bnVsbH0pLnByb21pc2UoKX0scHJvbWlzZTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9YT9uLmV4dGVuZChhLGQpOmR9fSxlPXt9O3JldHVybiBkLnBpcGU9ZC50aGVuLG4uZWFjaChiLGZ1bmN0aW9uKGEsZil7dmFyIGc9ZlsyXSxoPWZbM107ZFtmWzFdXT1nLmFkZCxoJiZnLmFkZChmdW5jdGlvbigpe2M9aH0sYlsxXmFdWzJdLmRpc2FibGUsYlsyXVsyXS5sb2NrKSxlW2ZbMF1dPWZ1bmN0aW9uKCl7cmV0dXJuIGVbZlswXStcIldpdGhcIl0odGhpcz09PWU/ZDp0aGlzLGFyZ3VtZW50cyksdGhpc30sZVtmWzBdK1wiV2l0aFwiXT1nLmZpcmVXaXRofSksZC5wcm9taXNlKGUpLGEmJmEuY2FsbChlLGUpLGV9LHdoZW46ZnVuY3Rpb24oYSl7dmFyIGI9MCxjPWQuY2FsbChhcmd1bWVudHMpLGU9Yy5sZW5ndGgsZj0xIT09ZXx8YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/ZTowLGc9MT09PWY/YTpuLkRlZmVycmVkKCksaD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGZ1bmN0aW9uKGUpe2JbYV09dGhpcyxjW2FdPWFyZ3VtZW50cy5sZW5ndGg+MT9kLmNhbGwoYXJndW1lbnRzKTplLGM9PT1pP2cubm90aWZ5V2l0aChiLGMpOi0tZnx8Zy5yZXNvbHZlV2l0aChiLGMpfX0saSxqLGs7aWYoZT4xKWZvcihpPW5ldyBBcnJheShlKSxqPW5ldyBBcnJheShlKSxrPW5ldyBBcnJheShlKTtlPmI7YisrKWNbYl0mJm4uaXNGdW5jdGlvbihjW2JdLnByb21pc2UpP2NbYl0ucHJvbWlzZSgpLmRvbmUoaChiLGssYykpLmZhaWwoZy5yZWplY3QpLnByb2dyZXNzKGgoYixqLGkpKTotLWY7cmV0dXJuIGZ8fGcucmVzb2x2ZVdpdGgoayxjKSxnLnByb21pc2UoKX19KTt2YXIgSztuLmZuLnJlYWR5PWZ1bmN0aW9uKGEpe3JldHVybiBuLnJlYWR5LnByb21pc2UoKS5kb25lKGEpLHRoaXN9LG4uZXh0ZW5kKHtpc1JlYWR5OiExLHJlYWR5V2FpdDoxLGhvbGRSZWFkeTpmdW5jdGlvbihhKXthP24ucmVhZHlXYWl0Kys6bi5yZWFkeSghMCl9LHJlYWR5OmZ1bmN0aW9uKGEpeyhhPT09ITA/LS1uLnJlYWR5V2FpdDpuLmlzUmVhZHkpfHwobi5pc1JlYWR5PSEwLGEhPT0hMCYmLS1uLnJlYWR5V2FpdD4wfHwoSy5yZXNvbHZlV2l0aChsLFtuXSksbi5mbi50cmlnZ2VySGFuZGxlciYmKG4obCkudHJpZ2dlckhhbmRsZXIoXCJyZWFkeVwiKSxuKGwpLm9mZihcInJlYWR5XCIpKSkpfX0pO2Z1bmN0aW9uIEwoKXtsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsTCwhMSksYS5yZW1vdmVFdmVudExpc3RlbmVyKFwibG9hZFwiLEwsITEpLG4ucmVhZHkoKX1uLnJlYWR5LnByb21pc2U9ZnVuY3Rpb24oYil7cmV0dXJuIEt8fChLPW4uRGVmZXJyZWQoKSxcImNvbXBsZXRlXCI9PT1sLnJlYWR5U3RhdGU/c2V0VGltZW91dChuLnJlYWR5KToobC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEwsITEpLGEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIixMLCExKSkpLEsucHJvbWlzZShiKX0sbi5yZWFkeS5wcm9taXNlKCk7dmFyIE09bi5hY2Nlc3M9ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyl7dmFyIGg9MCxpPWEubGVuZ3RoLGo9bnVsbD09YztpZihcIm9iamVjdFwiPT09bi50eXBlKGMpKXtlPSEwO2ZvcihoIGluIGMpbi5hY2Nlc3MoYSxiLGgsY1toXSwhMCxmLGcpfWVsc2UgaWYodm9pZCAwIT09ZCYmKGU9ITAsbi5pc0Z1bmN0aW9uKGQpfHwoZz0hMCksaiYmKGc/KGIuY2FsbChhLGQpLGI9bnVsbCk6KGo9YixiPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gai5jYWxsKG4oYSksYyl9KSksYikpZm9yKDtpPmg7aCsrKWIoYVtoXSxjLGc/ZDpkLmNhbGwoYVtoXSxoLGIoYVtoXSxjKSkpO3JldHVybiBlP2E6aj9iLmNhbGwoYSk6aT9iKGFbMF0sYyk6Zn07bi5hY2NlcHREYXRhPWZ1bmN0aW9uKGEpe3JldHVybiAxPT09YS5ub2RlVHlwZXx8OT09PWEubm9kZVR5cGV8fCErYS5ub2RlVHlwZX07ZnVuY3Rpb24gTigpe09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLmNhY2hlPXt9LDAse2dldDpmdW5jdGlvbigpe3JldHVybnt9fX0pLHRoaXMuZXhwYW5kbz1uLmV4cGFuZG8rTWF0aC5yYW5kb20oKX1OLnVpZD0xLE4uYWNjZXB0cz1uLmFjY2VwdERhdGEsTi5wcm90b3R5cGU9e2tleTpmdW5jdGlvbihhKXtpZighTi5hY2NlcHRzKGEpKXJldHVybiAwO3ZhciBiPXt9LGM9YVt0aGlzLmV4cGFuZG9dO2lmKCFjKXtjPU4udWlkKys7dHJ5e2JbdGhpcy5leHBhbmRvXT17dmFsdWU6Y30sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoYSxiKX1jYXRjaChkKXtiW3RoaXMuZXhwYW5kb109YyxuLmV4dGVuZChhLGIpfX1yZXR1cm4gdGhpcy5jYWNoZVtjXXx8KHRoaXMuY2FjaGVbY109e30pLGN9LHNldDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZT10aGlzLmtleShhKSxmPXRoaXMuY2FjaGVbZV07aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpZltiXT1jO2Vsc2UgaWYobi5pc0VtcHR5T2JqZWN0KGYpKW4uZXh0ZW5kKHRoaXMuY2FjaGVbZV0sYik7ZWxzZSBmb3IoZCBpbiBiKWZbZF09YltkXTtyZXR1cm4gZn0sZ2V0OmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5jYWNoZVt0aGlzLmtleShhKV07cmV0dXJuIHZvaWQgMD09PWI/YzpjW2JdfSxhY2Nlc3M6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiB2b2lkIDA9PT1ifHxiJiZcInN0cmluZ1wiPT10eXBlb2YgYiYmdm9pZCAwPT09Yz8oZD10aGlzLmdldChhLGIpLHZvaWQgMCE9PWQ/ZDp0aGlzLmdldChhLG4uY2FtZWxDYXNlKGIpKSk6KHRoaXMuc2V0KGEsYixjKSx2b2lkIDAhPT1jP2M6Yil9LHJlbW92ZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXMua2V5KGEpLGc9dGhpcy5jYWNoZVtmXTtpZih2b2lkIDA9PT1iKXRoaXMuY2FjaGVbZl09e307ZWxzZXtuLmlzQXJyYXkoYik/ZD1iLmNvbmNhdChiLm1hcChuLmNhbWVsQ2FzZSkpOihlPW4uY2FtZWxDYXNlKGIpLGIgaW4gZz9kPVtiLGVdOihkPWUsZD1kIGluIGc/W2RdOmQubWF0Y2goSCl8fFtdKSksYz1kLmxlbmd0aDt3aGlsZShjLS0pZGVsZXRlIGdbZFtjXV19fSxoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzRW1wdHlPYmplY3QodGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfHx7fSl9LGRpc2NhcmQ6ZnVuY3Rpb24oYSl7YVt0aGlzLmV4cGFuZG9dJiZkZWxldGUgdGhpcy5jYWNoZVthW3RoaXMuZXhwYW5kb11dfX07dmFyIE89bmV3IE4sUD1uZXcgTixRPS9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxSPS8oW0EtWl0pL2c7ZnVuY3Rpb24gUyhhLGIsYyl7dmFyIGQ7aWYodm9pZCAwPT09YyYmMT09PWEubm9kZVR5cGUpaWYoZD1cImRhdGEtXCIrYi5yZXBsYWNlKFIsXCItJDFcIikudG9Mb3dlckNhc2UoKSxjPWEuZ2V0QXR0cmlidXRlKGQpLFwic3RyaW5nXCI9PXR5cGVvZiBjKXt0cnl7Yz1cInRydWVcIj09PWM/ITA6XCJmYWxzZVwiPT09Yz8hMTpcIm51bGxcIj09PWM/bnVsbDorYytcIlwiPT09Yz8rYzpRLnRlc3QoYyk/bi5wYXJzZUpTT04oYyk6Y31jYXRjaChlKXt9UC5zZXQoYSxiLGMpfWVsc2UgYz12b2lkIDA7cmV0dXJuIGN9bi5leHRlbmQoe2hhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIFAuaGFzRGF0YShhKXx8Ty5oYXNEYXRhKGEpfSxkYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUC5hY2Nlc3MoYSxiLGMpfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7UC5yZW1vdmUoYSxiKX0sX2RhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBPLmFjY2VzcyhhLGIsYyl9LF9yZW1vdmVEYXRhOmZ1bmN0aW9uKGEsYil7Ty5yZW1vdmUoYSxiKX19KSxuLmZuLmV4dGVuZCh7ZGF0YTpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXRoaXNbMF0sZz1mJiZmLmF0dHJpYnV0ZXM7aWYodm9pZCAwPT09YSl7aWYodGhpcy5sZW5ndGgmJihlPVAuZ2V0KGYpLDE9PT1mLm5vZGVUeXBlJiYhTy5nZXQoZixcImhhc0RhdGFBdHRyc1wiKSkpe2M9Zy5sZW5ndGg7d2hpbGUoYy0tKWdbY10mJihkPWdbY10ubmFtZSwwPT09ZC5pbmRleE9mKFwiZGF0YS1cIikmJihkPW4uY2FtZWxDYXNlKGQuc2xpY2UoNSkpLFMoZixkLGVbZF0pKSk7Ty5zZXQoZixcImhhc0RhdGFBdHRyc1wiLCEwKX1yZXR1cm4gZX1yZXR1cm5cIm9iamVjdFwiPT10eXBlb2YgYT90aGlzLmVhY2goZnVuY3Rpb24oKXtQLnNldCh0aGlzLGEpfSk6TSh0aGlzLGZ1bmN0aW9uKGIpe3ZhciBjLGQ9bi5jYW1lbENhc2UoYSk7aWYoZiYmdm9pZCAwPT09Yil7aWYoYz1QLmdldChmLGEpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1QLmdldChmLGQpLHZvaWQgMCE9PWMpcmV0dXJuIGM7aWYoYz1TKGYsZCx2b2lkIDApLHZvaWQgMCE9PWMpcmV0dXJuIGN9ZWxzZSB0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1QLmdldCh0aGlzLGQpO1Auc2V0KHRoaXMsZCxiKSwtMSE9PWEuaW5kZXhPZihcIi1cIikmJnZvaWQgMCE9PWMmJlAuc2V0KHRoaXMsYSxiKX0pfSxudWxsLGIsYXJndW1lbnRzLmxlbmd0aD4xLG51bGwsITApfSxyZW1vdmVEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtQLnJlbW92ZSh0aGlzLGEpfSl9fSksbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gYT8oYj0oYnx8XCJmeFwiKStcInF1ZXVlXCIsZD1PLmdldChhLGIpLGMmJighZHx8bi5pc0FycmF5KGMpP2Q9Ty5hY2Nlc3MoYSxiLG4ubWFrZUFycmF5KGMpKTpkLnB1c2goYykpLGR8fFtdKTp2b2lkIDB9LGRlcXVldWU6ZnVuY3Rpb24oYSxiKXtiPWJ8fFwiZnhcIjt2YXIgYz1uLnF1ZXVlKGEsYiksZD1jLmxlbmd0aCxlPWMuc2hpZnQoKSxmPW4uX3F1ZXVlSG9va3MoYSxiKSxnPWZ1bmN0aW9uKCl7bi5kZXF1ZXVlKGEsYil9O1wiaW5wcm9ncmVzc1wiPT09ZSYmKGU9Yy5zaGlmdCgpLGQtLSksZSYmKFwiZnhcIj09PWImJmMudW5zaGlmdChcImlucHJvZ3Jlc3NcIiksZGVsZXRlIGYuc3RvcCxlLmNhbGwoYSxnLGYpKSwhZCYmZiYmZi5lbXB0eS5maXJlKCl9LF9xdWV1ZUhvb2tzOmZ1bmN0aW9uKGEsYil7dmFyIGM9YitcInF1ZXVlSG9va3NcIjtyZXR1cm4gTy5nZXQoYSxjKXx8Ty5hY2Nlc3MoYSxjLHtlbXB0eTpuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLmFkZChmdW5jdGlvbigpe08ucmVtb3ZlKGEsW2IrXCJxdWV1ZVwiLGNdKX0pfSl9fSksbi5mbi5leHRlbmQoe3F1ZXVlOmZ1bmN0aW9uKGEsYil7dmFyIGM9MjtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPVwiZnhcIixjLS0pLGFyZ3VtZW50cy5sZW5ndGg8Yz9uLnF1ZXVlKHRoaXNbMF0sYSk6dm9pZCAwPT09Yj90aGlzOnRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPW4ucXVldWUodGhpcyxhLGIpO24uX3F1ZXVlSG9va3ModGhpcyxhKSxcImZ4XCI9PT1hJiZcImlucHJvZ3Jlc3NcIiE9PWNbMF0mJm4uZGVxdWV1ZSh0aGlzLGEpfSl9LGRlcXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZGVxdWV1ZSh0aGlzLGEpfSl9LGNsZWFyUXVldWU6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucXVldWUoYXx8XCJmeFwiLFtdKX0scHJvbWlzZTpmdW5jdGlvbihhLGIpe3ZhciBjLGQ9MSxlPW4uRGVmZXJyZWQoKSxmPXRoaXMsZz10aGlzLmxlbmd0aCxoPWZ1bmN0aW9uKCl7LS1kfHxlLnJlc29sdmVXaXRoKGYsW2ZdKX07XCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGE9YXx8XCJmeFwiO3doaWxlKGctLSljPU8uZ2V0KGZbZ10sYStcInF1ZXVlSG9va3NcIiksYyYmYy5lbXB0eSYmKGQrKyxjLmVtcHR5LmFkZChoKSk7cmV0dXJuIGgoKSxlLnByb21pc2UoYil9fSk7dmFyIFQ9L1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8uc291cmNlLFU9L14oPzpjaGVja2JveHxyYWRpbykkL2k7IWZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksYj1hLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcImRpdlwiKSksYz1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtjLnNldEF0dHJpYnV0ZShcInR5cGVcIixcInJhZGlvXCIpLGMuc2V0QXR0cmlidXRlKFwiY2hlY2tlZFwiLFwiY2hlY2tlZFwiKSxjLnNldEF0dHJpYnV0ZShcIm5hbWVcIixcInRcIiksYi5hcHBlbmRDaGlsZChjKSxrLmNoZWNrQ2xvbmU9Yi5jbG9uZU5vZGUoITApLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmNoZWNrZWQsYi5pbm5lckhUTUw9XCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCIsay5ub0Nsb25lQ2hlY2tlZD0hIWIuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlfSgpO3ZhciBWPVwidW5kZWZpbmVkXCI7ay5mb2N1c2luQnViYmxlcz1cIm9uZm9jdXNpblwiaW4gYTt2YXIgVz0vXmtleS8sWD0vXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrLyxZPS9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxaPS9eKFteLl0qKSg/OlxcLiguKyl8KSQvO2Z1bmN0aW9uICQoKXtyZXR1cm4hMH1mdW5jdGlvbiBfKCl7cmV0dXJuITF9ZnVuY3Rpb24gYWIoKXt0cnl7cmV0dXJuIGwuYWN0aXZlRWxlbWVudH1jYXRjaChhKXt9fW4uZXZlbnQ9e2dsb2JhbDp7fSxhZGQ6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ty5nZXQoYSk7aWYocil7Yy5oYW5kbGVyJiYoZj1jLGM9Zi5oYW5kbGVyLGU9Zi5zZWxlY3RvciksYy5ndWlkfHwoYy5ndWlkPW4uZ3VpZCsrKSwoaT1yLmV2ZW50cyl8fChpPXIuZXZlbnRzPXt9KSwoZz1yLmhhbmRsZSl8fChnPXIuaGFuZGxlPWZ1bmN0aW9uKGIpe3JldHVybiB0eXBlb2YgbiE9PVYmJm4uZXZlbnQudHJpZ2dlcmVkIT09Yi50eXBlP24uZXZlbnQuZGlzcGF0Y2guYXBwbHkoYSxhcmd1bWVudHMpOnZvaWQgMH0pLGI9KGJ8fFwiXCIpLm1hdGNoKEgpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paD1aLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyYmKGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShlP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLGw9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxrPW4uZXh0ZW5kKHt0eXBlOm8sb3JpZ1R5cGU6cSxkYXRhOmQsaGFuZGxlcjpjLGd1aWQ6Yy5ndWlkLHNlbGVjdG9yOmUsbmVlZHNDb250ZXh0OmUmJm4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdChlKSxuYW1lc3BhY2U6cC5qb2luKFwiLlwiKX0sZiksKG09aVtvXSl8fChtPWlbb109W10sbS5kZWxlZ2F0ZUNvdW50PTAsbC5zZXR1cCYmbC5zZXR1cC5jYWxsKGEsZCxwLGcpIT09ITF8fGEuYWRkRXZlbnRMaXN0ZW5lciYmYS5hZGRFdmVudExpc3RlbmVyKG8sZywhMSkpLGwuYWRkJiYobC5hZGQuY2FsbChhLGspLGsuaGFuZGxlci5ndWlkfHwoay5oYW5kbGVyLmd1aWQ9Yy5ndWlkKSksZT9tLnNwbGljZShtLmRlbGVnYXRlQ291bnQrKywwLGspOm0ucHVzaChrKSxuLmV2ZW50Lmdsb2JhbFtvXT0hMCl9fSxyZW1vdmU6ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaSxqLGssbCxtLG8scCxxLHI9Ty5oYXNEYXRhKGEpJiZPLmdldChhKTtpZihyJiYoaT1yLmV2ZW50cykpe2I9KGJ8fFwiXCIpLm1hdGNoKEgpfHxbXCJcIl0saj1iLmxlbmd0aDt3aGlsZShqLS0paWYoaD1aLmV4ZWMoYltqXSl8fFtdLG89cT1oWzFdLHA9KGhbMl18fFwiXCIpLnNwbGl0KFwiLlwiKS5zb3J0KCksbyl7bD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGQ/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbT1pW29dfHxbXSxoPWhbMl0mJm5ldyBSZWdFeHAoXCIoXnxcXFxcLilcIitwLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKSxnPWY9bS5sZW5ndGg7d2hpbGUoZi0tKWs9bVtmXSwhZSYmcSE9PWsub3JpZ1R5cGV8fGMmJmMuZ3VpZCE9PWsuZ3VpZHx8aCYmIWgudGVzdChrLm5hbWVzcGFjZSl8fGQmJmQhPT1rLnNlbGVjdG9yJiYoXCIqKlwiIT09ZHx8IWsuc2VsZWN0b3IpfHwobS5zcGxpY2UoZiwxKSxrLnNlbGVjdG9yJiZtLmRlbGVnYXRlQ291bnQtLSxsLnJlbW92ZSYmbC5yZW1vdmUuY2FsbChhLGspKTtnJiYhbS5sZW5ndGgmJihsLnRlYXJkb3duJiZsLnRlYXJkb3duLmNhbGwoYSxwLHIuaGFuZGxlKSE9PSExfHxuLnJlbW92ZUV2ZW50KGEsbyxyLmhhbmRsZSksZGVsZXRlIGlbb10pfWVsc2UgZm9yKG8gaW4gaSluLmV2ZW50LnJlbW92ZShhLG8rYltqXSxjLGQsITApO24uaXNFbXB0eU9iamVjdChpKSYmKGRlbGV0ZSByLmhhbmRsZSxPLnJlbW92ZShhLFwiZXZlbnRzXCIpKX19LHRyaWdnZXI6ZnVuY3Rpb24oYixjLGQsZSl7dmFyIGYsZyxoLGksayxtLG8scD1bZHx8bF0scT1qLmNhbGwoYixcInR5cGVcIik/Yi50eXBlOmIscj1qLmNhbGwoYixcIm5hbWVzcGFjZVwiKT9iLm5hbWVzcGFjZS5zcGxpdChcIi5cIik6W107aWYoZz1oPWQ9ZHx8bCwzIT09ZC5ub2RlVHlwZSYmOCE9PWQubm9kZVR5cGUmJiFZLnRlc3QocStuLmV2ZW50LnRyaWdnZXJlZCkmJihxLmluZGV4T2YoXCIuXCIpPj0wJiYocj1xLnNwbGl0KFwiLlwiKSxxPXIuc2hpZnQoKSxyLnNvcnQoKSksaz1xLmluZGV4T2YoXCI6XCIpPDAmJlwib25cIitxLGI9YltuLmV4cGFuZG9dP2I6bmV3IG4uRXZlbnQocSxcIm9iamVjdFwiPT10eXBlb2YgYiYmYiksYi5pc1RyaWdnZXI9ZT8yOjMsYi5uYW1lc3BhY2U9ci5qb2luKFwiLlwiKSxiLm5hbWVzcGFjZV9yZT1iLm5hbWVzcGFjZT9uZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrci5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIik6bnVsbCxiLnJlc3VsdD12b2lkIDAsYi50YXJnZXR8fChiLnRhcmdldD1kKSxjPW51bGw9PWM/W2JdOm4ubWFrZUFycmF5KGMsW2JdKSxvPW4uZXZlbnQuc3BlY2lhbFtxXXx8e30sZXx8IW8udHJpZ2dlcnx8by50cmlnZ2VyLmFwcGx5KGQsYykhPT0hMSkpe2lmKCFlJiYhby5ub0J1YmJsZSYmIW4uaXNXaW5kb3coZCkpe2ZvcihpPW8uZGVsZWdhdGVUeXBlfHxxLFkudGVzdChpK3EpfHwoZz1nLnBhcmVudE5vZGUpO2c7Zz1nLnBhcmVudE5vZGUpcC5wdXNoKGcpLGg9ZztoPT09KGQub3duZXJEb2N1bWVudHx8bCkmJnAucHVzaChoLmRlZmF1bHRWaWV3fHxoLnBhcmVudFdpbmRvd3x8YSl9Zj0wO3doaWxlKChnPXBbZisrXSkmJiFiLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpYi50eXBlPWY+MT9pOm8uYmluZFR5cGV8fHEsbT0oTy5nZXQoZyxcImV2ZW50c1wiKXx8e30pW2IudHlwZV0mJk8uZ2V0KGcsXCJoYW5kbGVcIiksbSYmbS5hcHBseShnLGMpLG09ayYmZ1trXSxtJiZtLmFwcGx5JiZuLmFjY2VwdERhdGEoZykmJihiLnJlc3VsdD1tLmFwcGx5KGcsYyksYi5yZXN1bHQ9PT0hMSYmYi5wcmV2ZW50RGVmYXVsdCgpKTtyZXR1cm4gYi50eXBlPXEsZXx8Yi5pc0RlZmF1bHRQcmV2ZW50ZWQoKXx8by5fZGVmYXVsdCYmby5fZGVmYXVsdC5hcHBseShwLnBvcCgpLGMpIT09ITF8fCFuLmFjY2VwdERhdGEoZCl8fGsmJm4uaXNGdW5jdGlvbihkW3FdKSYmIW4uaXNXaW5kb3coZCkmJihoPWRba10saCYmKGRba109bnVsbCksbi5ldmVudC50cmlnZ2VyZWQ9cSxkW3FdKCksbi5ldmVudC50cmlnZ2VyZWQ9dm9pZCAwLGgmJihkW2tdPWgpKSxiLnJlc3VsdH19LGRpc3BhdGNoOmZ1bmN0aW9uKGEpe2E9bi5ldmVudC5maXgoYSk7dmFyIGIsYyxlLGYsZyxoPVtdLGk9ZC5jYWxsKGFyZ3VtZW50cyksaj0oTy5nZXQodGhpcyxcImV2ZW50c1wiKXx8e30pW2EudHlwZV18fFtdLGs9bi5ldmVudC5zcGVjaWFsW2EudHlwZV18fHt9O2lmKGlbMF09YSxhLmRlbGVnYXRlVGFyZ2V0PXRoaXMsIWsucHJlRGlzcGF0Y2h8fGsucHJlRGlzcGF0Y2guY2FsbCh0aGlzLGEpIT09ITEpe2g9bi5ldmVudC5oYW5kbGVycy5jYWxsKHRoaXMsYSxqKSxiPTA7d2hpbGUoKGY9aFtiKytdKSYmIWEuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSl7YS5jdXJyZW50VGFyZ2V0PWYuZWxlbSxjPTA7d2hpbGUoKGc9Zi5oYW5kbGVyc1tjKytdKSYmIWEuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSkoIWEubmFtZXNwYWNlX3JlfHxhLm5hbWVzcGFjZV9yZS50ZXN0KGcubmFtZXNwYWNlKSkmJihhLmhhbmRsZU9iaj1nLGEuZGF0YT1nLmRhdGEsZT0oKG4uZXZlbnQuc3BlY2lhbFtnLm9yaWdUeXBlXXx8e30pLmhhbmRsZXx8Zy5oYW5kbGVyKS5hcHBseShmLmVsZW0saSksdm9pZCAwIT09ZSYmKGEucmVzdWx0PWUpPT09ITEmJihhLnByZXZlbnREZWZhdWx0KCksYS5zdG9wUHJvcGFnYXRpb24oKSkpfXJldHVybiBrLnBvc3REaXNwYXRjaCYmay5wb3N0RGlzcGF0Y2guY2FsbCh0aGlzLGEpLGEucmVzdWx0fX0saGFuZGxlcnM6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPVtdLGg9Yi5kZWxlZ2F0ZUNvdW50LGk9YS50YXJnZXQ7aWYoaCYmaS5ub2RlVHlwZSYmKCFhLmJ1dHRvbnx8XCJjbGlja1wiIT09YS50eXBlKSlmb3IoO2khPT10aGlzO2k9aS5wYXJlbnROb2RlfHx0aGlzKWlmKGkuZGlzYWJsZWQhPT0hMHx8XCJjbGlja1wiIT09YS50eXBlKXtmb3IoZD1bXSxjPTA7aD5jO2MrKylmPWJbY10sZT1mLnNlbGVjdG9yK1wiIFwiLHZvaWQgMD09PWRbZV0mJihkW2VdPWYubmVlZHNDb250ZXh0P24oZSx0aGlzKS5pbmRleChpKT49MDpuLmZpbmQoZSx0aGlzLG51bGwsW2ldKS5sZW5ndGgpLGRbZV0mJmQucHVzaChmKTtkLmxlbmd0aCYmZy5wdXNoKHtlbGVtOmksaGFuZGxlcnM6ZH0pfXJldHVybiBoPGIubGVuZ3RoJiZnLnB1c2goe2VsZW06dGhpcyxoYW5kbGVyczpiLnNsaWNlKGgpfSksZ30scHJvcHM6XCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksZml4SG9va3M6e30sa2V5SG9va3M6e3Byb3BzOlwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbD09YS53aGljaCYmKGEud2hpY2g9bnVsbCE9Yi5jaGFyQ29kZT9iLmNoYXJDb2RlOmIua2V5Q29kZSksYX19LG1vdXNlSG9va3M6e3Byb3BzOlwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPWIuYnV0dG9uO3JldHVybiBudWxsPT1hLnBhZ2VYJiZudWxsIT1iLmNsaWVudFgmJihjPWEudGFyZ2V0Lm93bmVyRG9jdW1lbnR8fGwsZD1jLmRvY3VtZW50RWxlbWVudCxlPWMuYm9keSxhLnBhZ2VYPWIuY2xpZW50WCsoZCYmZC5zY3JvbGxMZWZ0fHxlJiZlLnNjcm9sbExlZnR8fDApLShkJiZkLmNsaWVudExlZnR8fGUmJmUuY2xpZW50TGVmdHx8MCksYS5wYWdlWT1iLmNsaWVudFkrKGQmJmQuc2Nyb2xsVG9wfHxlJiZlLnNjcm9sbFRvcHx8MCktKGQmJmQuY2xpZW50VG9wfHxlJiZlLmNsaWVudFRvcHx8MCkpLGEud2hpY2h8fHZvaWQgMD09PWZ8fChhLndoaWNoPTEmZj8xOjImZj8zOjQmZj8yOjApLGF9fSxmaXg6ZnVuY3Rpb24oYSl7aWYoYVtuLmV4cGFuZG9dKXJldHVybiBhO3ZhciBiLGMsZCxlPWEudHlwZSxmPWEsZz10aGlzLmZpeEhvb2tzW2VdO2d8fCh0aGlzLmZpeEhvb2tzW2VdPWc9WC50ZXN0KGUpP3RoaXMubW91c2VIb29rczpXLnRlc3QoZSk/dGhpcy5rZXlIb29rczp7fSksZD1nLnByb3BzP3RoaXMucHJvcHMuY29uY2F0KGcucHJvcHMpOnRoaXMucHJvcHMsYT1uZXcgbi5FdmVudChmKSxiPWQubGVuZ3RoO3doaWxlKGItLSljPWRbYl0sYVtjXT1mW2NdO3JldHVybiBhLnRhcmdldHx8KGEudGFyZ2V0PWwpLDM9PT1hLnRhcmdldC5ub2RlVHlwZSYmKGEudGFyZ2V0PWEudGFyZ2V0LnBhcmVudE5vZGUpLGcuZmlsdGVyP2cuZmlsdGVyKGEsZik6YX0sc3BlY2lhbDp7bG9hZDp7bm9CdWJibGU6ITB9LGZvY3VzOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMhPT1hYigpJiZ0aGlzLmZvY3VzPyh0aGlzLmZvY3VzKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNpblwifSxibHVyOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXM9PT1hYigpJiZ0aGlzLmJsdXI/KHRoaXMuYmx1cigpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3Vzb3V0XCJ9LGNsaWNrOnt0cmlnZ2VyOmZ1bmN0aW9uKCl7cmV0dXJuXCJjaGVja2JveFwiPT09dGhpcy50eXBlJiZ0aGlzLmNsaWNrJiZuLm5vZGVOYW1lKHRoaXMsXCJpbnB1dFwiKT8odGhpcy5jbGljaygpLCExKTp2b2lkIDB9LF9kZWZhdWx0OmZ1bmN0aW9uKGEpe3JldHVybiBuLm5vZGVOYW1lKGEudGFyZ2V0LFwiYVwiKX19LGJlZm9yZXVubG9hZDp7cG9zdERpc3BhdGNoOmZ1bmN0aW9uKGEpe3ZvaWQgMCE9PWEucmVzdWx0JiZhLm9yaWdpbmFsRXZlbnQmJihhLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWU9YS5yZXN1bHQpfX19LHNpbXVsYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPW4uZXh0ZW5kKG5ldyBuLkV2ZW50LGMse3R5cGU6YSxpc1NpbXVsYXRlZDohMCxvcmlnaW5hbEV2ZW50Ont9fSk7ZD9uLmV2ZW50LnRyaWdnZXIoZSxudWxsLGIpOm4uZXZlbnQuZGlzcGF0Y2guY2FsbChiLGUpLGUuaXNEZWZhdWx0UHJldmVudGVkKCkmJmMucHJldmVudERlZmF1bHQoKX19LG4ucmVtb3ZlRXZlbnQ9ZnVuY3Rpb24oYSxiLGMpe2EucmVtb3ZlRXZlbnRMaXN0ZW5lciYmYS5yZW1vdmVFdmVudExpc3RlbmVyKGIsYywhMSl9LG4uRXZlbnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4uRXZlbnQ/KGEmJmEudHlwZT8odGhpcy5vcmlnaW5hbEV2ZW50PWEsdGhpcy50eXBlPWEudHlwZSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1hLmRlZmF1bHRQcmV2ZW50ZWR8fHZvaWQgMD09PWEuZGVmYXVsdFByZXZlbnRlZCYmYS5yZXR1cm5WYWx1ZT09PSExPyQ6Xyk6dGhpcy50eXBlPWEsYiYmbi5leHRlbmQodGhpcyxiKSx0aGlzLnRpbWVTdGFtcD1hJiZhLnRpbWVTdGFtcHx8bi5ub3coKSx2b2lkKHRoaXNbbi5leHBhbmRvXT0hMCkpOm5ldyBuLkV2ZW50KGEsYil9LG4uRXZlbnQucHJvdG90eXBlPXtpc0RlZmF1bHRQcmV2ZW50ZWQ6Xyxpc1Byb3BhZ2F0aW9uU3RvcHBlZDpfLGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOl8scHJldmVudERlZmF1bHQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9JCxhJiZhLnByZXZlbnREZWZhdWx0JiZhLnByZXZlbnREZWZhdWx0KCl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPSQsYSYmYS5zdG9wUHJvcGFnYXRpb24mJmEuc3RvcFByb3BhZ2F0aW9uKCl9LHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkPSQsYSYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24mJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCksdGhpcy5zdG9wUHJvcGFnYXRpb24oKX19LG4uZWFjaCh7bW91c2VlbnRlcjpcIm1vdXNlb3ZlclwiLG1vdXNlbGVhdmU6XCJtb3VzZW91dFwiLHBvaW50ZXJlbnRlcjpcInBvaW50ZXJvdmVyXCIscG9pbnRlcmxlYXZlOlwicG9pbnRlcm91dFwifSxmdW5jdGlvbihhLGIpe24uZXZlbnQuc3BlY2lhbFthXT17ZGVsZWdhdGVUeXBlOmIsYmluZFR5cGU6YixoYW5kbGU6ZnVuY3Rpb24oYSl7dmFyIGMsZD10aGlzLGU9YS5yZWxhdGVkVGFyZ2V0LGY9YS5oYW5kbGVPYmo7cmV0dXJuKCFlfHxlIT09ZCYmIW4uY29udGFpbnMoZCxlKSkmJihhLnR5cGU9Zi5vcmlnVHlwZSxjPWYuaGFuZGxlci5hcHBseSh0aGlzLGFyZ3VtZW50cyksYS50eXBlPWIpLGN9fX0pLGsuZm9jdXNpbkJ1YmJsZXN8fG4uZWFjaCh7Zm9jdXM6XCJmb2N1c2luXCIsYmx1cjpcImZvY3Vzb3V0XCJ9LGZ1bmN0aW9uKGEsYil7dmFyIGM9ZnVuY3Rpb24oYSl7bi5ldmVudC5zaW11bGF0ZShiLGEudGFyZ2V0LG4uZXZlbnQuZml4KGEpLCEwKX07bi5ldmVudC5zcGVjaWFsW2JdPXtzZXR1cDpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU8uYWNjZXNzKGQsYik7ZXx8ZC5hZGRFdmVudExpc3RlbmVyKGEsYywhMCksTy5hY2Nlc3MoZCxiLChlfHwwKSsxKX0sdGVhcmRvd246ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1PLmFjY2VzcyhkLGIpLTE7ZT9PLmFjY2VzcyhkLGIsZSk6KGQucmVtb3ZlRXZlbnRMaXN0ZW5lcihhLGMsITApLE8ucmVtb3ZlKGQsYikpfX19KSxuLmZuLmV4dGVuZCh7b246ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9Y3x8YixiPXZvaWQgMCk7Zm9yKGcgaW4gYSl0aGlzLm9uKGcsYixjLGFbZ10sZSk7cmV0dXJuIHRoaXN9aWYobnVsbD09YyYmbnVsbD09ZD8oZD1iLGM9Yj12b2lkIDApOm51bGw9PWQmJihcInN0cmluZ1wiPT10eXBlb2YgYj8oZD1jLGM9dm9pZCAwKTooZD1jLGM9YixiPXZvaWQgMCkpLGQ9PT0hMSlkPV87ZWxzZSBpZighZClyZXR1cm4gdGhpcztyZXR1cm4gMT09PWUmJihmPWQsZD1mdW5jdGlvbihhKXtyZXR1cm4gbigpLm9mZihhKSxmLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sZC5ndWlkPWYuZ3VpZHx8KGYuZ3VpZD1uLmd1aWQrKykpLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQuYWRkKHRoaXMsYSxkLGMsYil9KX0sb25lOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGEsYixjLGQsMSl9LG9mZjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZTtpZihhJiZhLnByZXZlbnREZWZhdWx0JiZhLmhhbmRsZU9iailyZXR1cm4gZD1hLmhhbmRsZU9iaixuKGEuZGVsZWdhdGVUYXJnZXQpLm9mZihkLm5hbWVzcGFjZT9kLm9yaWdUeXBlK1wiLlwiK2QubmFtZXNwYWNlOmQub3JpZ1R5cGUsZC5zZWxlY3RvcixkLmhhbmRsZXIpLHRoaXM7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe2ZvcihlIGluIGEpdGhpcy5vZmYoZSxiLGFbZV0pO3JldHVybiB0aGlzfXJldHVybihiPT09ITF8fFwiZnVuY3Rpb25cIj09dHlwZW9mIGIpJiYoYz1iLGI9dm9pZCAwKSxjPT09ITEmJihjPV8pLHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQucmVtb3ZlKHRoaXMsYSxjLGIpfSl9LHRyaWdnZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC50cmlnZ2VyKGEsYix0aGlzKX0pfSx0cmlnZ2VySGFuZGxlcjpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXNbMF07cmV0dXJuIGM/bi5ldmVudC50cmlnZ2VyKGEsYixjLCEwKTp2b2lkIDB9fSk7dmFyIGJiPS88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxjYj0vPChbXFx3Ol0rKS8sZGI9Lzx8JiM/XFx3KzsvLGViPS88KD86c2NyaXB0fHN0eWxlfGxpbmspL2ksZmI9L2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxnYj0vXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLGhiPS9edHJ1ZVxcLyguKikvLGliPS9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxqYj17b3B0aW9uOlsxLFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLFwiPC9zZWxlY3Q+XCJdLHRoZWFkOlsxLFwiPHRhYmxlPlwiLFwiPC90YWJsZT5cIl0sY29sOlsyLFwiPHRhYmxlPjxjb2xncm91cD5cIixcIjwvY29sZ3JvdXA+PC90YWJsZT5cIl0sdHI6WzIsXCI8dGFibGU+PHRib2R5PlwiLFwiPC90Ym9keT48L3RhYmxlPlwiXSx0ZDpbMyxcIjx0YWJsZT48dGJvZHk+PHRyPlwiLFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCJdLF9kZWZhdWx0OlswLFwiXCIsXCJcIl19O2piLm9wdGdyb3VwPWpiLm9wdGlvbixqYi50Ym9keT1qYi50Zm9vdD1qYi5jb2xncm91cD1qYi5jYXB0aW9uPWpiLnRoZWFkLGpiLnRoPWpiLnRkO2Z1bmN0aW9uIGtiKGEsYil7cmV0dXJuIG4ubm9kZU5hbWUoYSxcInRhYmxlXCIpJiZuLm5vZGVOYW1lKDExIT09Yi5ub2RlVHlwZT9iOmIuZmlyc3RDaGlsZCxcInRyXCIpP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXXx8YS5hcHBlbmRDaGlsZChhLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpKTphfWZ1bmN0aW9uIGxiKGEpe3JldHVybiBhLnR5cGU9KG51bGwhPT1hLmdldEF0dHJpYnV0ZShcInR5cGVcIikpK1wiL1wiK2EudHlwZSxhfWZ1bmN0aW9uIG1iKGEpe3ZhciBiPWhiLmV4ZWMoYS50eXBlKTtyZXR1cm4gYj9hLnR5cGU9YlsxXTphLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIiksYX1mdW5jdGlvbiBuYihhLGIpe2Zvcih2YXIgYz0wLGQ9YS5sZW5ndGg7ZD5jO2MrKylPLnNldChhW2NdLFwiZ2xvYmFsRXZhbFwiLCFifHxPLmdldChiW2NdLFwiZ2xvYmFsRXZhbFwiKSl9ZnVuY3Rpb24gb2IoYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqO2lmKDE9PT1iLm5vZGVUeXBlKXtpZihPLmhhc0RhdGEoYSkmJihmPU8uYWNjZXNzKGEpLGc9Ty5zZXQoYixmKSxqPWYuZXZlbnRzKSl7ZGVsZXRlIGcuaGFuZGxlLGcuZXZlbnRzPXt9O2ZvcihlIGluIGopZm9yKGM9MCxkPWpbZV0ubGVuZ3RoO2Q+YztjKyspbi5ldmVudC5hZGQoYixlLGpbZV1bY10pfVAuaGFzRGF0YShhKSYmKGg9UC5hY2Nlc3MoYSksaT1uLmV4dGVuZCh7fSxoKSxQLnNldChiLGkpKX19ZnVuY3Rpb24gcGIoYSxiKXt2YXIgYz1hLmdldEVsZW1lbnRzQnlUYWdOYW1lP2EuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYnx8XCIqXCIpOmEucXVlcnlTZWxlY3RvckFsbD9hLnF1ZXJ5U2VsZWN0b3JBbGwoYnx8XCIqXCIpOltdO3JldHVybiB2b2lkIDA9PT1ifHxiJiZuLm5vZGVOYW1lKGEsYik/bi5tZXJnZShbYV0sYyk6Y31mdW5jdGlvbiBxYihhLGIpe3ZhciBjPWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcImlucHV0XCI9PT1jJiZVLnRlc3QoYS50eXBlKT9iLmNoZWNrZWQ9YS5jaGVja2VkOihcImlucHV0XCI9PT1jfHxcInRleHRhcmVhXCI9PT1jKSYmKGIuZGVmYXVsdFZhbHVlPWEuZGVmYXVsdFZhbHVlKX1uLmV4dGVuZCh7Y2xvbmU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jbG9uZU5vZGUoITApLGk9bi5jb250YWlucyhhLm93bmVyRG9jdW1lbnQsYSk7aWYoIShrLm5vQ2xvbmVDaGVja2VkfHwxIT09YS5ub2RlVHlwZSYmMTEhPT1hLm5vZGVUeXBlfHxuLmlzWE1MRG9jKGEpKSlmb3IoZz1wYihoKSxmPXBiKGEpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspcWIoZltkXSxnW2RdKTtpZihiKWlmKGMpZm9yKGY9Znx8cGIoYSksZz1nfHxwYihoKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKW9iKGZbZF0sZ1tkXSk7ZWxzZSBvYihhLGgpO3JldHVybiBnPXBiKGgsXCJzY3JpcHRcIiksZy5sZW5ndGg+MCYmbmIoZywhaSYmcGIoYSxcInNjcmlwdFwiKSksaH0sYnVpbGRGcmFnbWVudDpmdW5jdGlvbihhLGIsYyxkKXtmb3IodmFyIGUsZixnLGgsaSxqLGs9Yi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksbD1bXSxtPTAsbz1hLmxlbmd0aDtvPm07bSsrKWlmKGU9YVttXSxlfHwwPT09ZSlpZihcIm9iamVjdFwiPT09bi50eXBlKGUpKW4ubWVyZ2UobCxlLm5vZGVUeXBlP1tlXTplKTtlbHNlIGlmKGRiLnRlc3QoZSkpe2Y9Znx8ay5hcHBlbmRDaGlsZChiLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGc9KGNiLmV4ZWMoZSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpLGg9amJbZ118fGpiLl9kZWZhdWx0LGYuaW5uZXJIVE1MPWhbMV0rZS5yZXBsYWNlKGJiLFwiPCQxPjwvJDI+XCIpK2hbMl0saj1oWzBdO3doaWxlKGotLSlmPWYubGFzdENoaWxkO24ubWVyZ2UobCxmLmNoaWxkTm9kZXMpLGY9ay5maXJzdENoaWxkLGYudGV4dENvbnRlbnQ9XCJcIn1lbHNlIGwucHVzaChiLmNyZWF0ZVRleHROb2RlKGUpKTtrLnRleHRDb250ZW50PVwiXCIsbT0wO3doaWxlKGU9bFttKytdKWlmKCghZHx8LTE9PT1uLmluQXJyYXkoZSxkKSkmJihpPW4uY29udGFpbnMoZS5vd25lckRvY3VtZW50LGUpLGY9cGIoay5hcHBlbmRDaGlsZChlKSxcInNjcmlwdFwiKSxpJiZuYihmKSxjKSl7aj0wO3doaWxlKGU9ZltqKytdKWdiLnRlc3QoZS50eXBlfHxcIlwiKSYmYy5wdXNoKGUpfXJldHVybiBrfSxjbGVhbkRhdGE6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZCxlLGY9bi5ldmVudC5zcGVjaWFsLGc9MDt2b2lkIDAhPT0oYz1hW2ddKTtnKyspe2lmKG4uYWNjZXB0RGF0YShjKSYmKGU9Y1tPLmV4cGFuZG9dLGUmJihiPU8uY2FjaGVbZV0pKSl7aWYoYi5ldmVudHMpZm9yKGQgaW4gYi5ldmVudHMpZltkXT9uLmV2ZW50LnJlbW92ZShjLGQpOm4ucmVtb3ZlRXZlbnQoYyxkLGIuaGFuZGxlKTtPLmNhY2hlW2VdJiZkZWxldGUgTy5jYWNoZVtlXX1kZWxldGUgUC5jYWNoZVtjW1AuZXhwYW5kb11dfX19KSxuLmZuLmV4dGVuZCh7dGV4dDpmdW5jdGlvbihhKXtyZXR1cm4gTSh0aGlzLGZ1bmN0aW9uKGEpe3JldHVybiB2b2lkIDA9PT1hP24udGV4dCh0aGlzKTp0aGlzLmVtcHR5KCkuZWFjaChmdW5jdGlvbigpeygxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSkmJih0aGlzLnRleHRDb250ZW50PWEpfSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0sYXBwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1rYih0aGlzLGEpO2IuYXBwZW5kQ2hpbGQoYSl9fSl9LHByZXBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWtiKHRoaXMsYSk7Yi5pbnNlcnRCZWZvcmUoYSxiLmZpcnN0Q2hpbGQpfX0pfSxiZWZvcmU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcyl9KX0sYWZ0ZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7dGhpcy5wYXJlbnROb2RlJiZ0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGEsdGhpcy5uZXh0U2libGluZyl9KX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9YT9uLmZpbHRlcihhLHRoaXMpOnRoaXMsZT0wO251bGwhPShjPWRbZV0pO2UrKylifHwxIT09Yy5ub2RlVHlwZXx8bi5jbGVhbkRhdGEocGIoYykpLGMucGFyZW50Tm9kZSYmKGImJm4uY29udGFpbnMoYy5vd25lckRvY3VtZW50LGMpJiZuYihwYihjLFwic2NyaXB0XCIpKSxjLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYykpO3JldHVybiB0aGlzfSxlbXB0eTpmdW5jdGlvbigpe2Zvcih2YXIgYSxiPTA7bnVsbCE9KGE9dGhpc1tiXSk7YisrKTE9PT1hLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEocGIoYSwhMSkpLGEudGV4dENvbnRlbnQ9XCJcIik7cmV0dXJuIHRoaXN9LGNsb25lOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bnVsbD09YT8hMTphLGI9bnVsbD09Yj9hOmIsdGhpcy5tYXAoZnVuY3Rpb24oKXtyZXR1cm4gbi5jbG9uZSh0aGlzLGEsYil9KX0saHRtbDpmdW5jdGlvbihhKXtyZXR1cm4gTSh0aGlzLGZ1bmN0aW9uKGEpe3ZhciBiPXRoaXNbMF18fHt9LGM9MCxkPXRoaXMubGVuZ3RoO2lmKHZvaWQgMD09PWEmJjE9PT1iLm5vZGVUeXBlKXJldHVybiBiLmlubmVySFRNTDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmIWViLnRlc3QoYSkmJiFqYlsoY2IuZXhlYyhhKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCldKXthPWEucmVwbGFjZShiYixcIjwkMT48LyQyPlwiKTt0cnl7Zm9yKDtkPmM7YysrKWI9dGhpc1tjXXx8e30sMT09PWIubm9kZVR5cGUmJihuLmNsZWFuRGF0YShwYihiLCExKSksYi5pbm5lckhUTUw9YSk7Yj0wfWNhdGNoKGUpe319YiYmdGhpcy5lbXB0eSgpLmFwcGVuZChhKX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxyZXBsYWNlV2l0aDpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50c1swXTtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYil7YT10aGlzLnBhcmVudE5vZGUsbi5jbGVhbkRhdGEocGIodGhpcykpLGEmJmEucmVwbGFjZUNoaWxkKGIsdGhpcyl9KSxhJiYoYS5sZW5ndGh8fGEubm9kZVR5cGUpP3RoaXM6dGhpcy5yZW1vdmUoKX0sZGV0YWNoOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnJlbW92ZShhLCEwKX0sZG9tTWFuaXA6ZnVuY3Rpb24oYSxiKXthPWUuYXBwbHkoW10sYSk7dmFyIGMsZCxmLGcsaCxpLGo9MCxsPXRoaXMubGVuZ3RoLG09dGhpcyxvPWwtMSxwPWFbMF0scT1uLmlzRnVuY3Rpb24ocCk7aWYocXx8bD4xJiZcInN0cmluZ1wiPT10eXBlb2YgcCYmIWsuY2hlY2tDbG9uZSYmZmIudGVzdChwKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBkPW0uZXEoYyk7cSYmKGFbMF09cC5jYWxsKHRoaXMsYyxkLmh0bWwoKSkpLGQuZG9tTWFuaXAoYSxiKX0pO2lmKGwmJihjPW4uYnVpbGRGcmFnbWVudChhLHRoaXNbMF0ub3duZXJEb2N1bWVudCwhMSx0aGlzKSxkPWMuZmlyc3RDaGlsZCwxPT09Yy5jaGlsZE5vZGVzLmxlbmd0aCYmKGM9ZCksZCkpe2ZvcihmPW4ubWFwKHBiKGMsXCJzY3JpcHRcIiksbGIpLGc9Zi5sZW5ndGg7bD5qO2orKyloPWMsaiE9PW8mJihoPW4uY2xvbmUoaCwhMCwhMCksZyYmbi5tZXJnZShmLHBiKGgsXCJzY3JpcHRcIikpKSxiLmNhbGwodGhpc1tqXSxoLGopO1xuaWYoZylmb3IoaT1mW2YubGVuZ3RoLTFdLm93bmVyRG9jdW1lbnQsbi5tYXAoZixtYiksaj0wO2c+ajtqKyspaD1mW2pdLGdiLnRlc3QoaC50eXBlfHxcIlwiKSYmIU8uYWNjZXNzKGgsXCJnbG9iYWxFdmFsXCIpJiZuLmNvbnRhaW5zKGksaCkmJihoLnNyYz9uLl9ldmFsVXJsJiZuLl9ldmFsVXJsKGguc3JjKTpuLmdsb2JhbEV2YWwoaC50ZXh0Q29udGVudC5yZXBsYWNlKGliLFwiXCIpKSl9cmV0dXJuIHRoaXN9fSksbi5lYWNoKHthcHBlbmRUbzpcImFwcGVuZFwiLHByZXBlbmRUbzpcInByZXBlbmRcIixpbnNlcnRCZWZvcmU6XCJiZWZvcmVcIixpbnNlcnRBZnRlcjpcImFmdGVyXCIscmVwbGFjZUFsbDpcInJlcGxhY2VXaXRoXCJ9LGZ1bmN0aW9uKGEsYil7bi5mblthXT1mdW5jdGlvbihhKXtmb3IodmFyIGMsZD1bXSxlPW4oYSksZz1lLmxlbmd0aC0xLGg9MDtnPj1oO2grKyljPWg9PT1nP3RoaXM6dGhpcy5jbG9uZSghMCksbihlW2hdKVtiXShjKSxmLmFwcGx5KGQsYy5nZXQoKSk7cmV0dXJuIHRoaXMucHVzaFN0YWNrKGQpfX0pLG4uZm4uZGVsYXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1uLmZ4P24uZnguc3BlZWRzW2FdfHxhOmEsYj1ifHxcImZ4XCIsdGhpcy5xdWV1ZShiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9c2V0VGltZW91dChiLGEpO2Muc3RvcD1mdW5jdGlvbigpe2NsZWFyVGltZW91dChkKX19KX0sZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxiPWwuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKSxjPWIuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpKTthLnR5cGU9XCJjaGVja2JveFwiLGsuY2hlY2tPbj1cIlwiIT09YS52YWx1ZSxrLm9wdFNlbGVjdGVkPWMuc2VsZWN0ZWQsYi5kaXNhYmxlZD0hMCxrLm9wdERpc2FibGVkPSFjLmRpc2FibGVkLGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYS52YWx1ZT1cInRcIixhLnR5cGU9XCJyYWRpb1wiLGsucmFkaW9WYWx1ZT1cInRcIj09PWEudmFsdWV9KCk7dmFyIHJiLHNiLHRiPW4uZXhwci5hdHRySGFuZGxlO24uZm4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIE0odGhpcyxuLmF0dHIsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24ucmVtb3ZlQXR0cih0aGlzLGEpfSl9fSksbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLm5vZGVUeXBlO2lmKGEmJjMhPT1mJiY4IT09ZiYmMiE9PWYpcmV0dXJuIHR5cGVvZiBhLmdldEF0dHJpYnV0ZT09PVY/bi5wcm9wKGEsYixjKTooMT09PWYmJm4uaXNYTUxEb2MoYSl8fChiPWIudG9Mb3dlckNhc2UoKSxkPW4uYXR0ckhvb2tzW2JdfHwobi5leHByLm1hdGNoLmJvb2wudGVzdChiKT9zYjpyYikpLHZvaWQgMD09PWM/ZCYmXCJnZXRcImluIGQmJm51bGwhPT0oZT1kLmdldChhLGIpKT9lOihlPW4uZmluZC5hdHRyKGEsYiksbnVsbD09ZT92b2lkIDA6ZSk6bnVsbCE9PWM/ZCYmXCJzZXRcImluIGQmJnZvaWQgMCE9PShlPWQuc2V0KGEsYyxiKSk/ZTooYS5zZXRBdHRyaWJ1dGUoYixjK1wiXCIpLGMpOnZvaWQgbi5yZW1vdmVBdHRyKGEsYikpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPTAsZj1iJiZiLm1hdGNoKEgpO2lmKGYmJjE9PT1hLm5vZGVUeXBlKXdoaWxlKGM9ZltlKytdKWQ9bi5wcm9wRml4W2NdfHxjLG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYykmJihhW2RdPSExKSxhLnJlbW92ZUF0dHJpYnV0ZShjKX0sYXR0ckhvb2tzOnt0eXBlOntzZXQ6ZnVuY3Rpb24oYSxiKXtpZighay5yYWRpb1ZhbHVlJiZcInJhZGlvXCI9PT1iJiZuLm5vZGVOYW1lKGEsXCJpbnB1dFwiKSl7dmFyIGM9YS52YWx1ZTtyZXR1cm4gYS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsYiksYyYmKGEudmFsdWU9YyksYn19fX19KSxzYj17c2V0OmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj09PSExP24ucmVtb3ZlQXR0cihhLGMpOmEuc2V0QXR0cmlidXRlKGMsYyksY319LG4uZWFjaChuLmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goL1xcdysvZyksZnVuY3Rpb24oYSxiKXt2YXIgYz10YltiXXx8bi5maW5kLmF0dHI7dGJbYl09ZnVuY3Rpb24oYSxiLGQpe3ZhciBlLGY7cmV0dXJuIGR8fChmPXRiW2JdLHRiW2JdPWUsZT1udWxsIT1jKGEsYixkKT9iLnRvTG93ZXJDYXNlKCk6bnVsbCx0YltiXT1mKSxlfX0pO3ZhciB1Yj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pO24uZm4uZXh0ZW5kKHtwcm9wOmZ1bmN0aW9uKGEsYil7cmV0dXJuIE0odGhpcyxuLnByb3AsYSxiLGFyZ3VtZW50cy5sZW5ndGg+MSl9LHJlbW92ZVByb3A6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe2RlbGV0ZSB0aGlzW24ucHJvcEZpeFthXXx8YV19KX19KSxuLmV4dGVuZCh7cHJvcEZpeDp7XCJmb3JcIjpcImh0bWxGb3JcIixcImNsYXNzXCI6XCJjbGFzc05hbWVcIn0scHJvcDpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGc9YS5ub2RlVHlwZTtpZihhJiYzIT09ZyYmOCE9PWcmJjIhPT1nKXJldHVybiBmPTEhPT1nfHwhbi5pc1hNTERvYyhhKSxmJiYoYj1uLnByb3BGaXhbYl18fGIsZT1uLnByb3BIb29rc1tiXSksdm9pZCAwIT09Yz9lJiZcInNldFwiaW4gZSYmdm9pZCAwIT09KGQ9ZS5zZXQoYSxjLGIpKT9kOmFbYl09YzplJiZcImdldFwiaW4gZSYmbnVsbCE9PShkPWUuZ2V0KGEsYikpP2Q6YVtiXX0scHJvcEhvb2tzOnt0YWJJbmRleDp7Z2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpfHx1Yi50ZXN0KGEubm9kZU5hbWUpfHxhLmhyZWY/YS50YWJJbmRleDotMX19fX0pLGsub3B0U2VsZWN0ZWR8fChuLnByb3BIb29rcy5zZWxlY3RlZD17Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPWEucGFyZW50Tm9kZTtyZXR1cm4gYiYmYi5wYXJlbnROb2RlJiZiLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleCxudWxsfX0pLG4uZWFjaChbXCJ0YWJJbmRleFwiLFwicmVhZE9ubHlcIixcIm1heExlbmd0aFwiLFwiY2VsbFNwYWNpbmdcIixcImNlbGxQYWRkaW5nXCIsXCJyb3dTcGFuXCIsXCJjb2xTcGFuXCIsXCJ1c2VNYXBcIixcImZyYW1lQm9yZGVyXCIsXCJjb250ZW50RWRpdGFibGVcIl0sZnVuY3Rpb24oKXtuLnByb3BGaXhbdGhpcy50b0xvd2VyQ2FzZSgpXT10aGlzfSk7dmFyIHZiPS9bXFx0XFxyXFxuXFxmXS9nO24uZm4uZXh0ZW5kKHthZGRDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD1cInN0cmluZ1wiPT10eXBlb2YgYSYmYSxpPTAsaj10aGlzLmxlbmd0aDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLmFkZENsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGgpZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEgpfHxbXTtqPmk7aSsrKWlmKGM9dGhpc1tpXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKHZiLFwiIFwiKTpcIiBcIikpe2Y9MDt3aGlsZShlPWJbZisrXSlkLmluZGV4T2YoXCIgXCIrZStcIiBcIik8MCYmKGQrPWUrXCIgXCIpO2c9bi50cmltKGQpLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSxyZW1vdmVDbGFzczpmdW5jdGlvbihhKXt2YXIgYixjLGQsZSxmLGcsaD0wPT09YXJndW1lbnRzLmxlbmd0aHx8XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5yZW1vdmVDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChIKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh2YixcIiBcIik6XCJcIikpe2Y9MDt3aGlsZShlPWJbZisrXSl3aGlsZShkLmluZGV4T2YoXCIgXCIrZStcIiBcIik+PTApZD1kLnJlcGxhY2UoXCIgXCIrZStcIiBcIixcIiBcIik7Zz1hP24udHJpbShkKTpcIlwiLGMuY2xhc3NOYW1lIT09ZyYmKGMuY2xhc3NOYW1lPWcpfXJldHVybiB0aGlzfSx0b2dnbGVDbGFzczpmdW5jdGlvbihhLGIpe3ZhciBjPXR5cGVvZiBhO3JldHVyblwiYm9vbGVhblwiPT10eXBlb2YgYiYmXCJzdHJpbmdcIj09PWM/Yj90aGlzLmFkZENsYXNzKGEpOnRoaXMucmVtb3ZlQ2xhc3MoYSk6dGhpcy5lYWNoKG4uaXNGdW5jdGlvbihhKT9mdW5jdGlvbihjKXtuKHRoaXMpLnRvZ2dsZUNsYXNzKGEuY2FsbCh0aGlzLGMsdGhpcy5jbGFzc05hbWUsYiksYil9OmZ1bmN0aW9uKCl7aWYoXCJzdHJpbmdcIj09PWMpe3ZhciBiLGQ9MCxlPW4odGhpcyksZj1hLm1hdGNoKEgpfHxbXTt3aGlsZShiPWZbZCsrXSllLmhhc0NsYXNzKGIpP2UucmVtb3ZlQ2xhc3MoYik6ZS5hZGRDbGFzcyhiKX1lbHNlKGM9PT1WfHxcImJvb2xlYW5cIj09PWMpJiYodGhpcy5jbGFzc05hbWUmJk8uc2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIsdGhpcy5jbGFzc05hbWUpLHRoaXMuY2xhc3NOYW1lPXRoaXMuY2xhc3NOYW1lfHxhPT09ITE/XCJcIjpPLmdldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiKXx8XCJcIil9KX0saGFzQ2xhc3M6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPVwiIFwiK2ErXCIgXCIsYz0wLGQ9dGhpcy5sZW5ndGg7ZD5jO2MrKylpZigxPT09dGhpc1tjXS5ub2RlVHlwZSYmKFwiIFwiK3RoaXNbY10uY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKHZiLFwiIFwiKS5pbmRleE9mKGIpPj0wKXJldHVybiEwO3JldHVybiExfX0pO3ZhciB3Yj0vXFxyL2c7bi5mbi5leHRlbmQoe3ZhbDpmdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzWzBdO3tpZihhcmd1bWVudHMubGVuZ3RoKXJldHVybiBkPW4uaXNGdW5jdGlvbihhKSx0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGU7MT09PXRoaXMubm9kZVR5cGUmJihlPWQ/YS5jYWxsKHRoaXMsYyxuKHRoaXMpLnZhbCgpKTphLG51bGw9PWU/ZT1cIlwiOlwibnVtYmVyXCI9PXR5cGVvZiBlP2UrPVwiXCI6bi5pc0FycmF5KGUpJiYoZT1uLm1hcChlLGZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP1wiXCI6YStcIlwifSkpLGI9bi52YWxIb29rc1t0aGlzLnR5cGVdfHxuLnZhbEhvb2tzW3RoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJzZXRcImluIGImJnZvaWQgMCE9PWIuc2V0KHRoaXMsZSxcInZhbHVlXCIpfHwodGhpcy52YWx1ZT1lKSl9KTtpZihlKXJldHVybiBiPW4udmFsSG9va3NbZS50eXBlXXx8bi52YWxIb29rc1tlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwiZ2V0XCJpbiBiJiZ2b2lkIDAhPT0oYz1iLmdldChlLFwidmFsdWVcIikpP2M6KGM9ZS52YWx1ZSxcInN0cmluZ1wiPT10eXBlb2YgYz9jLnJlcGxhY2Uod2IsXCJcIik6bnVsbD09Yz9cIlwiOmMpfX19KSxuLmV4dGVuZCh7dmFsSG9va3M6e29wdGlvbjp7Z2V0OmZ1bmN0aW9uKGEpe3ZhciBiPW4uZmluZC5hdHRyKGEsXCJ2YWx1ZVwiKTtyZXR1cm4gbnVsbCE9Yj9iOm4udHJpbShuLnRleHQoYSkpfX0sc2VsZWN0OntnZXQ6ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGMsZD1hLm9wdGlvbnMsZT1hLnNlbGVjdGVkSW5kZXgsZj1cInNlbGVjdC1vbmVcIj09PWEudHlwZXx8MD5lLGc9Zj9udWxsOltdLGg9Zj9lKzE6ZC5sZW5ndGgsaT0wPmU/aDpmP2U6MDtoPmk7aSsrKWlmKGM9ZFtpXSwhKCFjLnNlbGVjdGVkJiZpIT09ZXx8KGsub3B0RGlzYWJsZWQ/Yy5kaXNhYmxlZDpudWxsIT09Yy5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSl8fGMucGFyZW50Tm9kZS5kaXNhYmxlZCYmbi5ub2RlTmFtZShjLnBhcmVudE5vZGUsXCJvcHRncm91cFwiKSkpe2lmKGI9bihjKS52YWwoKSxmKXJldHVybiBiO2cucHVzaChiKX1yZXR1cm4gZ30sc2V0OmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlPWEub3B0aW9ucyxmPW4ubWFrZUFycmF5KGIpLGc9ZS5sZW5ndGg7d2hpbGUoZy0tKWQ9ZVtnXSwoZC5zZWxlY3RlZD1uLmluQXJyYXkoZC52YWx1ZSxmKT49MCkmJihjPSEwKTtyZXR1cm4gY3x8KGEuc2VsZWN0ZWRJbmRleD0tMSksZn19fX0pLG4uZWFjaChbXCJyYWRpb1wiLFwiY2hlY2tib3hcIl0sZnVuY3Rpb24oKXtuLnZhbEhvb2tzW3RoaXNdPXtzZXQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5pc0FycmF5KGIpP2EuY2hlY2tlZD1uLmluQXJyYXkobihhKS52YWwoKSxiKT49MDp2b2lkIDB9fSxrLmNoZWNrT258fChuLnZhbEhvb2tzW3RoaXNdLmdldD1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09PWEuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik/XCJvblwiOmEudmFsdWV9KX0pLG4uZWFjaChcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCBsb2FkIHJlc2l6ZSBzY3JvbGwgdW5sb2FkIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIi5zcGxpdChcIiBcIiksZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEsYyl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg+MD90aGlzLm9uKGIsbnVsbCxhLGMpOnRoaXMudHJpZ2dlcihiKX19KSxuLmZuLmV4dGVuZCh7aG92ZXI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5tb3VzZWVudGVyKGEpLm1vdXNlbGVhdmUoYnx8YSl9LGJpbmQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiB0aGlzLm9uKGEsbnVsbCxiLGMpfSx1bmJpbmQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5vZmYoYSxudWxsLGIpfSxkZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihiLGEsYyxkKX0sdW5kZWxlZ2F0ZTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIDE9PT1hcmd1bWVudHMubGVuZ3RoP3RoaXMub2ZmKGEsXCIqKlwiKTp0aGlzLm9mZihiLGF8fFwiKipcIixjKX19KTt2YXIgeGI9bi5ub3coKSx5Yj0vXFw/LztuLnBhcnNlSlNPTj1mdW5jdGlvbihhKXtyZXR1cm4gSlNPTi5wYXJzZShhK1wiXCIpfSxuLnBhcnNlWE1MPWZ1bmN0aW9uKGEpe3ZhciBiLGM7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO3RyeXtjPW5ldyBET01QYXJzZXIsYj1jLnBhcnNlRnJvbVN0cmluZyhhLFwidGV4dC94bWxcIil9Y2F0Y2goZCl7Yj12b2lkIDB9cmV0dXJuKCFifHxiLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwicGFyc2VyZXJyb3JcIikubGVuZ3RoKSYmbi5lcnJvcihcIkludmFsaWQgWE1MOiBcIithKSxifTt2YXIgemIsQWIsQmI9LyMuKiQvLENiPS8oWz8mXSlfPVteJl0qLyxEYj0vXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL2dtLEViPS9eKD86YWJvdXR8YXBwfGFwcC1zdG9yYWdlfC4rLWV4dGVuc2lvbnxmaWxlfHJlc3x3aWRnZXQpOiQvLEZiPS9eKD86R0VUfEhFQUQpJC8sR2I9L15cXC9cXC8vLEhiPS9eKFtcXHcuKy1dKzopKD86XFwvXFwvKD86W15cXC8/I10qQHwpKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLEliPXt9LEpiPXt9LEtiPVwiKi9cIi5jb25jYXQoXCIqXCIpO3RyeXtBYj1sb2NhdGlvbi5ocmVmfWNhdGNoKExiKXtBYj1sLmNyZWF0ZUVsZW1lbnQoXCJhXCIpLEFiLmhyZWY9XCJcIixBYj1BYi5ocmVmfXpiPUhiLmV4ZWMoQWIudG9Mb3dlckNhc2UoKSl8fFtdO2Z1bmN0aW9uIE1iKGEpe3JldHVybiBmdW5jdGlvbihiLGMpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1iLGI9XCIqXCIpO3ZhciBkLGU9MCxmPWIudG9Mb3dlckNhc2UoKS5tYXRjaChIKXx8W107aWYobi5pc0Z1bmN0aW9uKGMpKXdoaWxlKGQ9ZltlKytdKVwiK1wiPT09ZFswXT8oZD1kLnNsaWNlKDEpfHxcIipcIiwoYVtkXT1hW2RdfHxbXSkudW5zaGlmdChjKSk6KGFbZF09YVtkXXx8W10pLnB1c2goYyl9fWZ1bmN0aW9uIE5iKGEsYixjLGQpe3ZhciBlPXt9LGY9YT09PUpiO2Z1bmN0aW9uIGcoaCl7dmFyIGk7cmV0dXJuIGVbaF09ITAsbi5lYWNoKGFbaF18fFtdLGZ1bmN0aW9uKGEsaCl7dmFyIGo9aChiLGMsZCk7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGp8fGZ8fGVbal0/Zj8hKGk9aik6dm9pZCAwOihiLmRhdGFUeXBlcy51bnNoaWZ0KGopLGcoaiksITEpfSksaX1yZXR1cm4gZyhiLmRhdGFUeXBlc1swXSl8fCFlW1wiKlwiXSYmZyhcIipcIil9ZnVuY3Rpb24gT2IoYSxiKXt2YXIgYyxkLGU9bi5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnN8fHt9O2ZvcihjIGluIGIpdm9pZCAwIT09YltjXSYmKChlW2NdP2E6ZHx8KGQ9e30pKVtjXT1iW2NdKTtyZXR1cm4gZCYmbi5leHRlbmQoITAsYSxkKSxhfWZ1bmN0aW9uIFBiKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY29udGVudHMsaT1hLmRhdGFUeXBlczt3aGlsZShcIipcIj09PWlbMF0paS5zaGlmdCgpLHZvaWQgMD09PWQmJihkPWEubWltZVR5cGV8fGIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIikpO2lmKGQpZm9yKGUgaW4gaClpZihoW2VdJiZoW2VdLnRlc3QoZCkpe2kudW5zaGlmdChlKTticmVha31pZihpWzBdaW4gYylmPWlbMF07ZWxzZXtmb3IoZSBpbiBjKXtpZighaVswXXx8YS5jb252ZXJ0ZXJzW2UrXCIgXCIraVswXV0pe2Y9ZTticmVha31nfHwoZz1lKX1mPWZ8fGd9cmV0dXJuIGY/KGYhPT1pWzBdJiZpLnVuc2hpZnQoZiksY1tmXSk6dm9pZCAwfWZ1bmN0aW9uIFFiKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj17fSxrPWEuZGF0YVR5cGVzLnNsaWNlKCk7aWYoa1sxXSlmb3IoZyBpbiBhLmNvbnZlcnRlcnMpaltnLnRvTG93ZXJDYXNlKCldPWEuY29udmVydGVyc1tnXTtmPWsuc2hpZnQoKTt3aGlsZShmKWlmKGEucmVzcG9uc2VGaWVsZHNbZl0mJihjW2EucmVzcG9uc2VGaWVsZHNbZl1dPWIpLCFpJiZkJiZhLmRhdGFGaWx0ZXImJihiPWEuZGF0YUZpbHRlcihiLGEuZGF0YVR5cGUpKSxpPWYsZj1rLnNoaWZ0KCkpaWYoXCIqXCI9PT1mKWY9aTtlbHNlIGlmKFwiKlwiIT09aSYmaSE9PWYpe2lmKGc9altpK1wiIFwiK2ZdfHxqW1wiKiBcIitmXSwhZylmb3IoZSBpbiBqKWlmKGg9ZS5zcGxpdChcIiBcIiksaFsxXT09PWYmJihnPWpbaStcIiBcIitoWzBdXXx8altcIiogXCIraFswXV0pKXtnPT09ITA/Zz1qW2VdOmpbZV0hPT0hMCYmKGY9aFswXSxrLnVuc2hpZnQoaFsxXSkpO2JyZWFrfWlmKGchPT0hMClpZihnJiZhW1widGhyb3dzXCJdKWI9ZyhiKTtlbHNlIHRyeXtiPWcoYil9Y2F0Y2gobCl7cmV0dXJue3N0YXRlOlwicGFyc2VyZXJyb3JcIixlcnJvcjpnP2w6XCJObyBjb252ZXJzaW9uIGZyb20gXCIraStcIiB0byBcIitmfX19cmV0dXJue3N0YXRlOlwic3VjY2Vzc1wiLGRhdGE6Yn19bi5leHRlbmQoe2FjdGl2ZTowLGxhc3RNb2RpZmllZDp7fSxldGFnOnt9LGFqYXhTZXR0aW5nczp7dXJsOkFiLHR5cGU6XCJHRVRcIixpc0xvY2FsOkViLnRlc3QoemJbMV0pLGdsb2JhbDohMCxwcm9jZXNzRGF0YTohMCxhc3luYzohMCxjb250ZW50VHlwZTpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLGFjY2VwdHM6e1wiKlwiOktiLHRleHQ6XCJ0ZXh0L3BsYWluXCIsaHRtbDpcInRleHQvaHRtbFwiLHhtbDpcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixqc29uOlwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJ9LGNvbnRlbnRzOnt4bWw6L3htbC8saHRtbDovaHRtbC8sanNvbjovanNvbi99LHJlc3BvbnNlRmllbGRzOnt4bWw6XCJyZXNwb25zZVhNTFwiLHRleHQ6XCJyZXNwb25zZVRleHRcIixqc29uOlwicmVzcG9uc2VKU09OXCJ9LGNvbnZlcnRlcnM6e1wiKiB0ZXh0XCI6U3RyaW5nLFwidGV4dCBodG1sXCI6ITAsXCJ0ZXh0IGpzb25cIjpuLnBhcnNlSlNPTixcInRleHQgeG1sXCI6bi5wYXJzZVhNTH0sZmxhdE9wdGlvbnM6e3VybDohMCxjb250ZXh0OiEwfX0sYWpheFNldHVwOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGI/T2IoT2IoYSxuLmFqYXhTZXR0aW5ncyksYik6T2Iobi5hamF4U2V0dGluZ3MsYSl9LGFqYXhQcmVmaWx0ZXI6TWIoSWIpLGFqYXhUcmFuc3BvcnQ6TWIoSmIpLGFqYXg6ZnVuY3Rpb24oYSxiKXtcIm9iamVjdFwiPT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYj1ifHx7fTt2YXIgYyxkLGUsZixnLGgsaSxqLGs9bi5hamF4U2V0dXAoe30sYiksbD1rLmNvbnRleHR8fGssbT1rLmNvbnRleHQmJihsLm5vZGVUeXBlfHxsLmpxdWVyeSk/bihsKTpuLmV2ZW50LG89bi5EZWZlcnJlZCgpLHA9bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxxPWsuc3RhdHVzQ29kZXx8e30scj17fSxzPXt9LHQ9MCx1PVwiY2FuY2VsZWRcIix2PXtyZWFkeVN0YXRlOjAsZ2V0UmVzcG9uc2VIZWFkZXI6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoMj09PXQpe2lmKCFmKXtmPXt9O3doaWxlKGI9RGIuZXhlYyhlKSlmW2JbMV0udG9Mb3dlckNhc2UoKV09YlsyXX1iPWZbYS50b0xvd2VyQ2FzZSgpXX1yZXR1cm4gbnVsbD09Yj9udWxsOmJ9LGdldEFsbFJlc3BvbnNlSGVhZGVyczpmdW5jdGlvbigpe3JldHVybiAyPT09dD9lOm51bGx9LHNldFJlcXVlc3RIZWFkZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz1hLnRvTG93ZXJDYXNlKCk7cmV0dXJuIHR8fChhPXNbY109c1tjXXx8YSxyW2FdPWIpLHRoaXN9LG92ZXJyaWRlTWltZVR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIHR8fChrLm1pbWVUeXBlPWEpLHRoaXN9LHN0YXR1c0NvZGU6ZnVuY3Rpb24oYSl7dmFyIGI7aWYoYSlpZigyPnQpZm9yKGIgaW4gYSlxW2JdPVtxW2JdLGFbYl1dO2Vsc2Ugdi5hbHdheXMoYVt2LnN0YXR1c10pO3JldHVybiB0aGlzfSxhYm9ydDpmdW5jdGlvbihhKXt2YXIgYj1hfHx1O3JldHVybiBjJiZjLmFib3J0KGIpLHgoMCxiKSx0aGlzfX07aWYoby5wcm9taXNlKHYpLmNvbXBsZXRlPXAuYWRkLHYuc3VjY2Vzcz12LmRvbmUsdi5lcnJvcj12LmZhaWwsay51cmw9KChhfHxrLnVybHx8QWIpK1wiXCIpLnJlcGxhY2UoQmIsXCJcIikucmVwbGFjZShHYix6YlsxXStcIi8vXCIpLGsudHlwZT1iLm1ldGhvZHx8Yi50eXBlfHxrLm1ldGhvZHx8ay50eXBlLGsuZGF0YVR5cGVzPW4udHJpbShrLmRhdGFUeXBlfHxcIipcIikudG9Mb3dlckNhc2UoKS5tYXRjaChIKXx8W1wiXCJdLG51bGw9PWsuY3Jvc3NEb21haW4mJihoPUhiLmV4ZWMoay51cmwudG9Mb3dlckNhc2UoKSksay5jcm9zc0RvbWFpbj0hKCFofHxoWzFdPT09emJbMV0mJmhbMl09PT16YlsyXSYmKGhbM118fChcImh0dHA6XCI9PT1oWzFdP1wiODBcIjpcIjQ0M1wiKSk9PT0oemJbM118fChcImh0dHA6XCI9PT16YlsxXT9cIjgwXCI6XCI0NDNcIikpKSksay5kYXRhJiZrLnByb2Nlc3NEYXRhJiZcInN0cmluZ1wiIT10eXBlb2Ygay5kYXRhJiYoay5kYXRhPW4ucGFyYW0oay5kYXRhLGsudHJhZGl0aW9uYWwpKSxOYihJYixrLGIsdiksMj09PXQpcmV0dXJuIHY7aT1rLmdsb2JhbCxpJiYwPT09bi5hY3RpdmUrKyYmbi5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpLGsudHlwZT1rLnR5cGUudG9VcHBlckNhc2UoKSxrLmhhc0NvbnRlbnQ9IUZiLnRlc3Qoay50eXBlKSxkPWsudXJsLGsuaGFzQ29udGVudHx8KGsuZGF0YSYmKGQ9ay51cmwrPSh5Yi50ZXN0KGQpP1wiJlwiOlwiP1wiKStrLmRhdGEsZGVsZXRlIGsuZGF0YSksay5jYWNoZT09PSExJiYoay51cmw9Q2IudGVzdChkKT9kLnJlcGxhY2UoQ2IsXCIkMV89XCIreGIrKyk6ZCsoeWIudGVzdChkKT9cIiZcIjpcIj9cIikrXCJfPVwiK3hiKyspKSxrLmlmTW9kaWZpZWQmJihuLmxhc3RNb2RpZmllZFtkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTW9kaWZpZWQtU2luY2VcIixuLmxhc3RNb2RpZmllZFtkXSksbi5ldGFnW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Ob25lLU1hdGNoXCIsbi5ldGFnW2RdKSksKGsuZGF0YSYmay5oYXNDb250ZW50JiZrLmNvbnRlbnRUeXBlIT09ITF8fGIuY29udGVudFR5cGUpJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIixrLmNvbnRlbnRUeXBlKSx2LnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHRcIixrLmRhdGFUeXBlc1swXSYmay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXT9rLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dKyhcIipcIiE9PWsuZGF0YVR5cGVzWzBdP1wiLCBcIitLYitcIjsgcT0wLjAxXCI6XCJcIik6ay5hY2NlcHRzW1wiKlwiXSk7Zm9yKGogaW4gay5oZWFkZXJzKXYuc2V0UmVxdWVzdEhlYWRlcihqLGsuaGVhZGVyc1tqXSk7aWYoay5iZWZvcmVTZW5kJiYoay5iZWZvcmVTZW5kLmNhbGwobCx2LGspPT09ITF8fDI9PT10KSlyZXR1cm4gdi5hYm9ydCgpO3U9XCJhYm9ydFwiO2ZvcihqIGlue3N1Y2Nlc3M6MSxlcnJvcjoxLGNvbXBsZXRlOjF9KXZbal0oa1tqXSk7aWYoYz1OYihKYixrLGIsdikpe3YucmVhZHlTdGF0ZT0xLGkmJm0udHJpZ2dlcihcImFqYXhTZW5kXCIsW3Ysa10pLGsuYXN5bmMmJmsudGltZW91dD4wJiYoZz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7di5hYm9ydChcInRpbWVvdXRcIil9LGsudGltZW91dCkpO3RyeXt0PTEsYy5zZW5kKHIseCl9Y2F0Y2godyl7aWYoISgyPnQpKXRocm93IHc7eCgtMSx3KX19ZWxzZSB4KC0xLFwiTm8gVHJhbnNwb3J0XCIpO2Z1bmN0aW9uIHgoYSxiLGYsaCl7dmFyIGoscixzLHUsdyx4PWI7MiE9PXQmJih0PTIsZyYmY2xlYXJUaW1lb3V0KGcpLGM9dm9pZCAwLGU9aHx8XCJcIix2LnJlYWR5U3RhdGU9YT4wPzQ6MCxqPWE+PTIwMCYmMzAwPmF8fDMwND09PWEsZiYmKHU9UGIoayx2LGYpKSx1PVFiKGssdSx2LGopLGo/KGsuaWZNb2RpZmllZCYmKHc9di5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIiksdyYmKG4ubGFzdE1vZGlmaWVkW2RdPXcpLHc9di5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIiksdyYmKG4uZXRhZ1tkXT13KSksMjA0PT09YXx8XCJIRUFEXCI9PT1rLnR5cGU/eD1cIm5vY29udGVudFwiOjMwND09PWE/eD1cIm5vdG1vZGlmaWVkXCI6KHg9dS5zdGF0ZSxyPXUuZGF0YSxzPXUuZXJyb3Isaj0hcykpOihzPXgsKGF8fCF4KSYmKHg9XCJlcnJvclwiLDA+YSYmKGE9MCkpKSx2LnN0YXR1cz1hLHYuc3RhdHVzVGV4dD0oYnx8eCkrXCJcIixqP28ucmVzb2x2ZVdpdGgobCxbcix4LHZdKTpvLnJlamVjdFdpdGgobCxbdix4LHNdKSx2LnN0YXR1c0NvZGUocSkscT12b2lkIDAsaSYmbS50cmlnZ2VyKGo/XCJhamF4U3VjY2Vzc1wiOlwiYWpheEVycm9yXCIsW3YsayxqP3I6c10pLHAuZmlyZVdpdGgobCxbdix4XSksaSYmKG0udHJpZ2dlcihcImFqYXhDb21wbGV0ZVwiLFt2LGtdKSwtLW4uYWN0aXZlfHxuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKSkpfXJldHVybiB2fSxnZXRKU09OOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5nZXQoYSxiLGMsXCJqc29uXCIpfSxnZXRTY3JpcHQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5nZXQoYSx2b2lkIDAsYixcInNjcmlwdFwiKX19KSxuLmVhY2goW1wiZ2V0XCIsXCJwb3N0XCJdLGZ1bmN0aW9uKGEsYil7bltiXT1mdW5jdGlvbihhLGMsZCxlKXtyZXR1cm4gbi5pc0Z1bmN0aW9uKGMpJiYoZT1lfHxkLGQ9YyxjPXZvaWQgMCksbi5hamF4KHt1cmw6YSx0eXBlOmIsZGF0YVR5cGU6ZSxkYXRhOmMsc3VjY2VzczpkfSl9fSksbi5lYWNoKFtcImFqYXhTdGFydFwiLFwiYWpheFN0b3BcIixcImFqYXhDb21wbGV0ZVwiLFwiYWpheEVycm9yXCIsXCJhamF4U3VjY2Vzc1wiLFwiYWpheFNlbmRcIl0sZnVuY3Rpb24oYSxiKXtuLmZuW2JdPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLm9uKGIsYSl9fSksbi5fZXZhbFVybD1mdW5jdGlvbihhKXtyZXR1cm4gbi5hamF4KHt1cmw6YSx0eXBlOlwiR0VUXCIsZGF0YVR5cGU6XCJzY3JpcHRcIixhc3luYzohMSxnbG9iYWw6ITEsXCJ0aHJvd3NcIjohMH0pfTt2YXIgUmI9LyUyMC9nLFNiPS9cXFtcXF0kLyxUYj0vXFxyP1xcbi9nLFViPS9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxWYj0vXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7ZnVuY3Rpb24gV2IoYSxiLGMsZCl7dmFyIGU7aWYobi5pc0FycmF5KGIpKW4uZWFjaChiLGZ1bmN0aW9uKGIsZSl7Y3x8U2IudGVzdChhKT9kKGEsZSk6V2IoYStcIltcIisoXCJvYmplY3RcIj09dHlwZW9mIGU/YjpcIlwiKStcIl1cIixlLGMsZCl9KTtlbHNlIGlmKGN8fFwib2JqZWN0XCIhPT1uLnR5cGUoYikpZChhLGIpO2Vsc2UgZm9yKGUgaW4gYilXYihhK1wiW1wiK2UrXCJdXCIsYltlXSxjLGQpfW4ucGFyYW09ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPVtdLGU9ZnVuY3Rpb24oYSxiKXtiPW4uaXNGdW5jdGlvbihiKT9iKCk6bnVsbD09Yj9cIlwiOmIsZFtkLmxlbmd0aF09ZW5jb2RlVVJJQ29tcG9uZW50KGEpK1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChiKX07aWYodm9pZCAwPT09YiYmKGI9bi5hamF4U2V0dGluZ3MmJm4uYWpheFNldHRpbmdzLnRyYWRpdGlvbmFsKSxuLmlzQXJyYXkoYSl8fGEuanF1ZXJ5JiYhbi5pc1BsYWluT2JqZWN0KGEpKW4uZWFjaChhLGZ1bmN0aW9uKCl7ZSh0aGlzLm5hbWUsdGhpcy52YWx1ZSl9KTtlbHNlIGZvcihjIGluIGEpV2IoYyxhW2NdLGIsZSk7cmV0dXJuIGQuam9pbihcIiZcIikucmVwbGFjZShSYixcIitcIil9LG4uZm4uZXh0ZW5kKHtzZXJpYWxpemU6ZnVuY3Rpb24oKXtyZXR1cm4gbi5wYXJhbSh0aGlzLnNlcmlhbGl6ZUFycmF5KCkpfSxzZXJpYWxpemVBcnJheTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm1hcChmdW5jdGlvbigpe3ZhciBhPW4ucHJvcCh0aGlzLFwiZWxlbWVudHNcIik7cmV0dXJuIGE/bi5tYWtlQXJyYXkoYSk6dGhpc30pLmZpbHRlcihmdW5jdGlvbigpe3ZhciBhPXRoaXMudHlwZTtyZXR1cm4gdGhpcy5uYW1lJiYhbih0aGlzKS5pcyhcIjpkaXNhYmxlZFwiKSYmVmIudGVzdCh0aGlzLm5vZGVOYW1lKSYmIVViLnRlc3QoYSkmJih0aGlzLmNoZWNrZWR8fCFVLnRlc3QoYSkpfSkubWFwKGZ1bmN0aW9uKGEsYil7dmFyIGM9bih0aGlzKS52YWwoKTtyZXR1cm4gbnVsbD09Yz9udWxsOm4uaXNBcnJheShjKT9uLm1hcChjLGZ1bmN0aW9uKGEpe3JldHVybntuYW1lOmIubmFtZSx2YWx1ZTphLnJlcGxhY2UoVGIsXCJcXHJcXG5cIil9fSk6e25hbWU6Yi5uYW1lLHZhbHVlOmMucmVwbGFjZShUYixcIlxcclxcblwiKX19KS5nZXQoKX19KSxuLmFqYXhTZXR0aW5ncy54aHI9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdH1jYXRjaChhKXt9fTt2YXIgWGI9MCxZYj17fSxaYj17MDoyMDAsMTIyMzoyMDR9LCRiPW4uYWpheFNldHRpbmdzLnhocigpO2EuQWN0aXZlWE9iamVjdCYmbihhKS5vbihcInVubG9hZFwiLGZ1bmN0aW9uKCl7Zm9yKHZhciBhIGluIFliKVliW2FdKCl9KSxrLmNvcnM9ISEkYiYmXCJ3aXRoQ3JlZGVudGlhbHNcImluICRiLGsuYWpheD0kYj0hISRiLG4uYWpheFRyYW5zcG9ydChmdW5jdGlvbihhKXt2YXIgYjtyZXR1cm4gay5jb3JzfHwkYiYmIWEuY3Jvc3NEb21haW4/e3NlbmQ6ZnVuY3Rpb24oYyxkKXt2YXIgZSxmPWEueGhyKCksZz0rK1hiO2lmKGYub3BlbihhLnR5cGUsYS51cmwsYS5hc3luYyxhLnVzZXJuYW1lLGEucGFzc3dvcmQpLGEueGhyRmllbGRzKWZvcihlIGluIGEueGhyRmllbGRzKWZbZV09YS54aHJGaWVsZHNbZV07YS5taW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUoYS5taW1lVHlwZSksYS5jcm9zc0RvbWFpbnx8Y1tcIlgtUmVxdWVzdGVkLVdpdGhcIl18fChjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXT1cIlhNTEh0dHBSZXF1ZXN0XCIpO2ZvcihlIGluIGMpZi5zZXRSZXF1ZXN0SGVhZGVyKGUsY1tlXSk7Yj1mdW5jdGlvbihhKXtyZXR1cm4gZnVuY3Rpb24oKXtiJiYoZGVsZXRlIFliW2ddLGI9Zi5vbmxvYWQ9Zi5vbmVycm9yPW51bGwsXCJhYm9ydFwiPT09YT9mLmFib3J0KCk6XCJlcnJvclwiPT09YT9kKGYuc3RhdHVzLGYuc3RhdHVzVGV4dCk6ZChaYltmLnN0YXR1c118fGYuc3RhdHVzLGYuc3RhdHVzVGV4dCxcInN0cmluZ1wiPT10eXBlb2YgZi5yZXNwb25zZVRleHQ/e3RleHQ6Zi5yZXNwb25zZVRleHR9OnZvaWQgMCxmLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSl9fSxmLm9ubG9hZD1iKCksZi5vbmVycm9yPWIoXCJlcnJvclwiKSxiPVliW2ddPWIoXCJhYm9ydFwiKTt0cnl7Zi5zZW5kKGEuaGFzQ29udGVudCYmYS5kYXRhfHxudWxsKX1jYXRjaChoKXtpZihiKXRocm93IGh9fSxhYm9ydDpmdW5jdGlvbigpe2ImJmIoKX19OnZvaWQgMH0pLG4uYWpheFNldHVwKHthY2NlcHRzOntzY3JpcHQ6XCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwifSxjb250ZW50czp7c2NyaXB0Oi8oPzpqYXZhfGVjbWEpc2NyaXB0L30sY29udmVydGVyczp7XCJ0ZXh0IHNjcmlwdFwiOmZ1bmN0aW9uKGEpe3JldHVybiBuLmdsb2JhbEV2YWwoYSksYX19fSksbi5hamF4UHJlZmlsdGVyKFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7dm9pZCAwPT09YS5jYWNoZSYmKGEuY2FjaGU9ITEpLGEuY3Jvc3NEb21haW4mJihhLnR5cGU9XCJHRVRcIil9KSxuLmFqYXhUcmFuc3BvcnQoXCJzY3JpcHRcIixmdW5jdGlvbihhKXtpZihhLmNyb3NzRG9tYWluKXt2YXIgYixjO3JldHVybntzZW5kOmZ1bmN0aW9uKGQsZSl7Yj1uKFwiPHNjcmlwdD5cIikucHJvcCh7YXN5bmM6ITAsY2hhcnNldDphLnNjcmlwdENoYXJzZXQsc3JjOmEudXJsfSkub24oXCJsb2FkIGVycm9yXCIsYz1mdW5jdGlvbihhKXtiLnJlbW92ZSgpLGM9bnVsbCxhJiZlKFwiZXJyb3JcIj09PWEudHlwZT80MDQ6MjAwLGEudHlwZSl9KSxsLmhlYWQuYXBwZW5kQ2hpbGQoYlswXSl9LGFib3J0OmZ1bmN0aW9uKCl7YyYmYygpfX19fSk7dmFyIF9iPVtdLGFjPS8oPSlcXD8oPz0mfCQpfFxcP1xcPy87bi5hamF4U2V0dXAoe2pzb25wOlwiY2FsbGJhY2tcIixqc29ucENhbGxiYWNrOmZ1bmN0aW9uKCl7dmFyIGE9X2IucG9wKCl8fG4uZXhwYW5kbytcIl9cIit4YisrO3JldHVybiB0aGlzW2FdPSEwLGF9fSksbi5hamF4UHJlZmlsdGVyKFwianNvbiBqc29ucFwiLGZ1bmN0aW9uKGIsYyxkKXt2YXIgZSxmLGcsaD1iLmpzb25wIT09ITEmJihhYy50ZXN0KGIudXJsKT9cInVybFwiOlwic3RyaW5nXCI9PXR5cGVvZiBiLmRhdGEmJiEoYi5jb250ZW50VHlwZXx8XCJcIikuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSYmYWMudGVzdChiLmRhdGEpJiZcImRhdGFcIik7cmV0dXJuIGh8fFwianNvbnBcIj09PWIuZGF0YVR5cGVzWzBdPyhlPWIuanNvbnBDYWxsYmFjaz1uLmlzRnVuY3Rpb24oYi5qc29ucENhbGxiYWNrKT9iLmpzb25wQ2FsbGJhY2soKTpiLmpzb25wQ2FsbGJhY2ssaD9iW2hdPWJbaF0ucmVwbGFjZShhYyxcIiQxXCIrZSk6Yi5qc29ucCE9PSExJiYoYi51cmwrPSh5Yi50ZXN0KGIudXJsKT9cIiZcIjpcIj9cIikrYi5qc29ucCtcIj1cIitlKSxiLmNvbnZlcnRlcnNbXCJzY3JpcHQganNvblwiXT1mdW5jdGlvbigpe3JldHVybiBnfHxuLmVycm9yKGUrXCIgd2FzIG5vdCBjYWxsZWRcIiksZ1swXX0sYi5kYXRhVHlwZXNbMF09XCJqc29uXCIsZj1hW2VdLGFbZV09ZnVuY3Rpb24oKXtnPWFyZ3VtZW50c30sZC5hbHdheXMoZnVuY3Rpb24oKXthW2VdPWYsYltlXSYmKGIuanNvbnBDYWxsYmFjaz1jLmpzb25wQ2FsbGJhY2ssX2IucHVzaChlKSksZyYmbi5pc0Z1bmN0aW9uKGYpJiZmKGdbMF0pLGc9Zj12b2lkIDB9KSxcInNjcmlwdFwiKTp2b2lkIDB9KSxuLnBhcnNlSFRNTD1mdW5jdGlvbihhLGIsYyl7aWYoIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBudWxsO1wiYm9vbGVhblwiPT10eXBlb2YgYiYmKGM9YixiPSExKSxiPWJ8fGw7dmFyIGQ9eS5leGVjKGEpLGU9IWMmJltdO3JldHVybiBkP1tiLmNyZWF0ZUVsZW1lbnQoZFsxXSldOihkPW4uYnVpbGRGcmFnbWVudChbYV0sYixlKSxlJiZlLmxlbmd0aCYmbihlKS5yZW1vdmUoKSxuLm1lcmdlKFtdLGQuY2hpbGROb2RlcykpfTt2YXIgYmM9bi5mbi5sb2FkO24uZm4ubG9hZD1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEmJmJjKXJldHVybiBiYy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7dmFyIGQsZSxmLGc9dGhpcyxoPWEuaW5kZXhPZihcIiBcIik7cmV0dXJuIGg+PTAmJihkPW4udHJpbShhLnNsaWNlKGgpKSxhPWEuc2xpY2UoMCxoKSksbi5pc0Z1bmN0aW9uKGIpPyhjPWIsYj12b2lkIDApOmImJlwib2JqZWN0XCI9PXR5cGVvZiBiJiYoZT1cIlBPU1RcIiksZy5sZW5ndGg+MCYmbi5hamF4KHt1cmw6YSx0eXBlOmUsZGF0YVR5cGU6XCJodG1sXCIsZGF0YTpifSkuZG9uZShmdW5jdGlvbihhKXtmPWFyZ3VtZW50cyxnLmh0bWwoZD9uKFwiPGRpdj5cIikuYXBwZW5kKG4ucGFyc2VIVE1MKGEpKS5maW5kKGQpOmEpfSkuY29tcGxldGUoYyYmZnVuY3Rpb24oYSxiKXtnLmVhY2goYyxmfHxbYS5yZXNwb25zZVRleHQsYixhXSl9KSx0aGlzfSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShcImpxdWVyeVwiLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIG59KTt2YXIgY2M9YS5qUXVlcnksZGM9YS4kO3JldHVybiBuLm5vQ29uZmxpY3Q9ZnVuY3Rpb24oYil7cmV0dXJuIGEuJD09PW4mJihhLiQ9ZGMpLGImJmEualF1ZXJ5PT09biYmKGEualF1ZXJ5PWNjKSxufSx0eXBlb2YgYj09PVYmJihhLmpRdWVyeT1hLiQ9biksbn0pO1xuXG4iLCIvKipcbiAqIENvb2tpZXNcbiAqXG4gKiBKUyBMaWJyYXJ5IHRvIGRlYWwgd2l0aCBDb29raWVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNFxuICovXG5cbnZhciBDb29raWVzID0ge1xuXG5cdC8qKlxuXHQgKiBHZXRcblx0ICpcblx0ICogR2V0cyBhIGNvb2tpZSBvciByZXR1cm5zIHRoZSBkZWZhdWx0LiBTZXQgbm8gbmFtZSB0byBnZXQgYWxsXG5cdCAqXG5cdCAqIEBuYW1lIGdldFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyIG5hbWVcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBjb29raWUgdG8gZmV0Y2hcblx0ICogQHBhcmFtIHN0ciBkZWZhdWx0X1x0XHRcdFRoZSBkZWZhdWx0IHZhbHVlIHRvIHJldHVybiBpZiBubyBjb29raWUgaXMgZm91bmRcblx0ICogQHJldHVybiBzdHJ8bnVsbFxuXHQgKi9cblx0Z2V0OiBmdW5jdGlvbihuYW1lLCBkZWZhdWx0Xykge1xuXG5cdFx0Ly8gU2V0IHRoZSBkZWZhdWx0IGlmIG5vIHZhbHVlIGlzIHBhc3NlZFxuXHRcdGlmKHR5cGVvZiBkZWZhdWx0XyA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0ZGVmYXVsdF8gPSBudWxsO1xuXHRcdH1cblxuXHRcdC8vIFBhcnNlIGFsbCBjb29raWVzXG5cdFx0dmFyIG9Db29raWVzID0ge31cblx0XHR2YXIgbENvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBsQ29va2llcy5sZW5ndGg7ICsraSkge1xuXHRcdFx0bCA9IGxDb29raWVzW2ldLnNwbGl0KCc9Jyk7XG5cdFx0XHRvQ29va2llc1tsWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChsWzFdKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIG5hbWUsIHJldHVybiBhbGxcblx0XHRpZih0eXBlb2YgbmFtZSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIG9Db29raWVzO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBjb29raWUgZXhpc3RzIHJldHVybiBpdCwgZWxzZSByZXR1cm4gdGhlIGRlZmF1bHRcblx0XHRyZXR1cm4gKG5hbWUgaW4gb0Nvb2tpZXMpID8gb0Nvb2tpZXNbbmFtZV0gOiBkZWZhdWx0Xztcblx0fSxcblxuXHQvKipcblx0ICogUmVtb3ZlXG5cdCAqXG5cdCAqIERlbGV0ZXMgYSBjb29raWVcblx0ICpcblx0ICogQG5hbWUgcmVtb3ZlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHIgbmFtZVx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGNvb2tpZSB0byBkZWxldGVcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRcInJlbW92ZVwiOiBmdW5jdGlvbihuYW1lLCBkb21haW4sIHBhdGgpIHtcblx0XHR0aGlzLnNldChuYW1lLCAnJywgLTEsIGRvbWFpbiwgcGF0aCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNldFxuXHQgKlxuXHQgKiBTZXRzIGEgY29va2llXG5cdCAqXG5cdCAqIEBuYW1lIHNldFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyIG5hbWVcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBjb29raWVcblx0ICogQHBhcmFtIHN0ciB2YWx1ZVx0XHRcdFx0VGhlIHZhbHVlIHRvIHN0b3JlXG5cdCAqIEBwYXJhbSBpbnQgZXhwaXJlc1x0XHRcdFRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZWZvcmUgdGhlIGNvb2tpZSBleHBpcmVzXG5cdCAqIEBwYXJhbSBzdHIgZG9tYWluXHRcdFx0VGhlIG9wdGlvbmFsIGRvbWFpbiB0byBzZXQgdGhlIGNvb2tpZSBvblxuXHQgKiBAcGFyYW0gc3RyIHBhdGhcdFx0XHRcdFRoZSBvcHRpb25hbCBwYXRoIG9mIHRoZSBjb29raWVcblx0ICogQHJldHVybiBudWxsXG5cdCAqL1xuXHRzZXQ6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBleHBpcmVzLCBkb21haW4sIHBhdGgpIHtcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBleHBpcmVzIHRpbWVcblx0XHR2YXIgZCA9IG5ldyBEYXRlKCk7XG5cdFx0ZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKGV4cGlyZXMqMTAwMCkpXG5cblx0XHQvLyBHZW5lcmF0ZSB0aGUgY29va2llIHN0cmluZ1xuXHRcdHZhciBzID0gbmFtZSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgK1xuXHRcdFx0XHQnOyBleHBpcmVzPScgKyBkLnRvR01UU3RyaW5nKCkgKyAnOyc7XG5cdFx0aWYoZG9tYWluKSB7XG5cdFx0XHRzICs9ICcgZG9tYWluPScgKyBkb21haW4gKyAnOyc7XG5cdFx0fVxuXHRcdGlmKHBhdGgpIHtcblx0XHRcdHMgKz0gJyBwYXRoPScgKyBwYXRoICsgJzsnO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgY29va2llXG5cdFx0ZG9jdW1lbnQuY29va2llID0gcztcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBDb29raWVzO1xuIiwiLyoqXG4gKiBFdmVudHNcbiAqXG4gKiBFdmVudCBtb2RlbCBmb3Igbm9uIFVJIGV2ZW50c1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjRcbiAqL1xuXG4vLyBJbml0IHRoZSBjYWxsYmFja3Mgb2JqZWN0XG52YXIgX2NhbGxiYWNrcyA9IHt9O1xuXG4vKipcbiAqIEFkZFxuICpcbiAqIEFkZHMgYSBjYWxsYmFjayB0byBhbiBldmVudFxuICpcbiAqIEBuYW1lIGFkZFxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSBzdHIgZXZlbnRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBjYWxsYmFjayB0byBhdHRhY2ggdG8gdGhlIGV2ZW50XG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gYWRkKGV2ZW50LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHRoZSBldmVudCBkb2Vzbid0IGV4aXN0IHlldFxuXHRpZighKGV2ZW50IGluIF9jYWxsYmFja3MpKSB7XG5cdFx0X2NhbGxiYWNrc1tldmVudF0gPSBbXVxuXHR9XG5cblx0Ly8gQWRkIHRoZSBjYWxsYmFjayB0byB0aGUgbGlzdFxuXHRfY2FsbGJhY2tzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcblx0cmV0dXJuIHRydWU7XG59XG5cblxuLyoqXG4gKiBSZW1vdmVcbiAqXG4gKiBSZW1vdmVzIGEgY2FsbGJhY2sgZnJvbSBhIHNwZWNpZmljIGV2ZW50XG4gKlxuICogQG5hbWUgcmVtb3ZlXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHN0ciBldmVudFx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHJlbW92ZSB0aGUgY2FsbGJhY2sgZnJvbVxuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBleGFjdCBzYW1lIGNhbGxiYWNrIHRoYXQgd2FzIGFkZGVkIHRvIHRoZSBldmVudFxuICogQHJldHVyblxuICovXG5mdW5jdGlvbiByZW1vdmUoZXZlbnQsIGNhbGxiYWNrKSB7XG5cblx0Ly8gSWYgdGhlIG5hbWUgZXhpc3RzIGluIHRoZSBvYmplY3Rcblx0aWYoZXZlbnQgaW4gX2NhbGxiYWNrcykge1xuXG5cdFx0Ly8gSWYgdGhlIGNhbGxiYWNrIGV4aXN0cyBpbiB0aGUgbGlzdFxuXHRcdHZhciBpID0gX2NhbGxiYWNrc1tldmVudF0uaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0aWYoaSAhPSAtMSkge1xuXHRcdFx0X2NhbGxiYWNrc1tldmVudF0uc3BsaWNlKGksMSk7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblxuXHQvLyBOb3RoaW5nIGZvdW5kLCByZXR1cm4gZmFsc2Vcblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vKipcbiAqIFRyaWdnZXJcbiAqXG4gKiBUcmlnZ2VycyBhIHNwZWNpZmljIGV2ZW50IGFuZCBjYWxscyBhbGwgY2FsbGJhY2tzIGFzc29jaWF0ZWRcbiAqXG4gKiBAbmFtZSB0cmlnZ2VyXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHN0ciBldmVudFx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGV2ZW50IHRvIHRyaWdnZXJcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiB0cmlnZ2VyKGV2ZW50KSB7XG5cblx0Ly8gSWYgd2UgaGF2ZSBjYWxsYmFja3MgZm9yIHRoZSBldmVudFxuXHRpZihldmVudCBpbiBfY2FsbGJhY2tzKSB7XG5cblx0XHQvLyBDaGVjayBmb3IgYWRkaXRpb25hbCBhcmd1bWVudHMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcblx0XHQvL1x0Y2FsbGJhY2tzXG5cdFx0dmFyIGFyZ3MgPSBbXTtcblx0XHRpZihhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHRcdFx0YXJncyA9IEFycmF5LmFwcGx5KG51bGwsIGFyZ3VtZW50cykuc2xpY2UoMSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbnkgY2FsbGJhY2tzLCBjYWxsIHRoZW0gb25lIGJ5IG9uZVxuXHRcdGZvcih2YXIgaSBpbiBfY2FsbGJhY2tzW2V2ZW50XSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dmFyIGIgPSBfY2FsbGJhY2tzW2V2ZW50XVtpXS5hcHBseShudWxsLCBhcmdzKTtcblx0XHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXZlbnQgKyAnIGNhbGxiYWNrICcgKyBpICsgJyB0aHJldyBleGNlcHRpb246ICcgKyBlcnIpO1xuXHRcdFx0XHRicmVha1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgZmFsc2UgYmFjaywgc3RvcCBjYWxsaW5nIHRoZSBjYWxsYmFja3Ncblx0XHRcdGlmKGIgPT09IGZhbHNlKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIE5vIGNhbGxiYWNrcyBhc3Njb2NpdGVkIHdpdGggdGhlIGV2ZW50XG5cdGVsc2Uge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ2V2ZW50IHZhbHVlIFwiJyArIGV2ZW50ICsgJ1wiIHJldHVybmVkLCBhbmQgbm8gY2FsbGJhY2tzIHdlcmUgZm91bmQgdG8gaGFuZGxlIGl0Jyk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBmdW5jdGlvbnNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImFkZFwiOiBhZGQsXG5cdFwicmVtb3ZlXCI6IHJlbW92ZSxcblx0XCJ0cmlnZ2VyXCI6IHRyaWdnZXJcbn1cbiIsIi8qKlxuICogSGFzaFxuICpcbiAqIEpTIExpYnJhcnkgdG8gbWFuYWdlIGhhc2ggdmFsdWVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMi0wOVxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIFRvb2xzID0gcmVxdWlyZSgnLi90b29scy5qcycpO1xuXG4vLyBWYWx1ZXNcbnZhciBfaGFzaCA9IHt9O1xuXG4vLyBuYW1lIHJlZ2V4XG52YXIgX25hbWVSRSA9IC9eW2Etel0rJC87XG5cbi8vIENhbGxiYWNrc1xudmFyIF93YXRjaGVzID0ge307XG5cbi8qKlxuICogQ2hlY2sgV2F0Y2hlc1xuICpcbiAqIEdldHMgb2xkIHZhbHVlcyBhbmQgY29tcGFyZXMgdGhlbSB0byBleGlzdGluZyB2YWx1ZXMsIGlmIGFueW9uZSBpcyB3YXRjaGluZ1xuICogYW55IG5hbWVzIHRoYXQgYXJlIGNoYW5nZWQsIHRoZXkgYXJlIG5vdGlmaWVkXG4gKlxuICogQG5hbWUgX2NoZWNrV2F0Y2hlc1xuICogQHBhcmFtIG9iamVjdCBvbGRcdFx0XHRUaGUgb2xkIHZhbHVlcyB0byBjaGVjayBhZ2FpblxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9jaGVja1dhdGNoZXMob2xkKSB7XG5cblx0Ly8gSWYgdGhlcmUgYXJlIHdhdGNoZXNcblx0aWYoIVRvb2xzLmVtcHR5KF93YXRjaGVzKSkge1xuXG5cdFx0Ly8gQ2hlY2sgZWFjaCB3YXRjaFxuXHRcdGZvcih2YXIgbmFtZSBpbiBfd2F0Y2hlcykge1xuXG5cdFx0XHQvLyBJZiB0aGUgdmFsdWUgZGlkbid0IGV4aXN0IGFuZCBub3cgaXQgZG9lcywgb3IgaXQgZGlkIGV4aXN0XG5cdFx0XHQvL1x0YW5kIG5vdyBpdCBkb2Vzbid0LCBvciB0aGUgdmFsdWVzIGRvbid0IG1hdGNoXG5cdFx0XHRpZigoIShuYW1lIGluIG9sZCkgJiYgbmFtZSBpbiBfaGFzaCkgfHxcblx0XHRcdFx0KG5hbWUgaW4gb2xkICYmICEobmFtZSBpbiBfaGFzaCkpIHx8XG5cdFx0XHRcdG9sZFtuYW1lXSAhPSBfaGFzaFtuYW1lXSkge1xuXG5cdFx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCBjYWxsYmFjayBhbmQgY2FsbCBpdFxuXHRcdFx0XHRmb3IodmFyIGYgb2YgX3dhdGNoZXNbbmFtZV0pIHtcblx0XHRcdFx0XHRmKF9oYXNoW25hbWVdIHx8IG51bGwpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogSGFzaCBDaGFuZ2VkXG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIGxvY2F0aW9uIGhhc2ggaGFzIGJlZW4gYWx0ZXJlZCwgbm90aWZpZXMgYW55IHdhdGNoZXJzIG9mXG4gKiBoYXNoIHZhbHVlcyBjaGFuZ2luZ1xuICpcbiAqIEBuYW1lIF9oYXNoQ2hhbmdlZFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9oYXNoQ2hhbmdlZCgpIHtcblxuXHQvLyBTdG9yZSB0aGUgY3VycmVudCBoYXNoXG5cdHZhciBvbGQgPSBUb29scy5jbG9uZShfaGFzaCk7XG5cblx0Ly8gUmUtcGFyc2UgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaFxuXHRfcGFyc2VIYXNoKCk7XG5cblx0Ly8gQ2hlY2sgdGhlIHdhdGNoZXNcblx0X2NoZWNrV2F0Y2hlcyhvbGQpO1xufVxuXG4vKipcbiAqIFBhcnNlIEhhc2hcbiAqXG4gKiBQYXJzZXMgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaCBpbnRvIGFuIG9iamVjdFxuICpcbiAqIEBuYW1lIF9wYXJzZUhhc2hcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcGFyc2VIYXNoKCkge1xuXG5cdC8vIElmIHRoZXJlJ3MgYW55dGhpbmcgaW4gdGhlIGhhc2hcblx0aWYod2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoID4gMSkge1xuXHRcdHZhciByZWdleCA9IC8oW149Jl0rKT0/KFteJl0qKS9nXG5cdFx0dmFyIGZpZWxkID0gbnVsbDtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBwYXJ0IGZvdW5kXG5cdFx0d2hpbGUoZmllbGQgPSByZWdleC5leGVjKHdpbmRvdy5sb2NhdGlvbi5oYXNoLnN1YnN0cmluZygxKSkpIHtcblx0XHRcdF9oYXNoW2ZpZWxkWzFdXSA9IGRlY29kZVVSSUNvbXBvbmVudChmaWVsZFsyXSkucmVwbGFjZSgnKycsICcgJyk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG52YXIgSGFzaCA9IHtcblxuXHQvKipcblx0ICogSW5pdFxuXHQgKlxuXHQgKiBJbml0aWFsaXNlcyB0aGUgaW50ZXJuYWwgaGFzaCBieSBmZXRjaGluZyBhbmQgcGFyc2luZyB0aGUgY3VycmVudFxuXHQgKiBsb2NhdGlvbiBoYXNoXG5cdCAqXG5cdCAqIEBuYW1lIGluaXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwiaW5pdFwiOiBmdW5jdGlvbigpIHtcblxuXHRcdC8vIFRyYWNrIGNoYW5nZXNcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIiwgX2hhc2hDaGFuZ2VkKTtcblxuXHRcdC8vIFBhcnNlIHRoZSBjdXJyZW50IGxvY2F0aW9uIGhhc2hcblx0XHRfcGFyc2VIYXNoKCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldFxuXHQgKlxuXHQgKiBSZXR1cm5zIGEgaGFzaCBuYW1lXG5cdCAqXG5cdCAqIEBuYW1lIGdldFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgbmFtZVx0XHRUaGUgbmFtZSB0byBsb29rIGZvclxuXHQgKiBAcGFyYW0gc3RyaW5nIGRlZmF1bHRfXHRUaGUgdmFsdWUgdG8gcmV0dXJuIGlmIHRoZSBuYW1lIGlzbid0IGZvdW5kXG5cdCAqIEByZXR1cm4gc3RyXG5cdCAqL1xuXHRcImdldFwiOiBmdW5jdGlvbihuYW1lLCBkZWZhdWx0Xykge1xuXG5cdFx0Ly8gSWYgdGhlIG5hbWUgaXMgaW52YWxpZFxuXHRcdGlmKCFfbmFtZVJFLnRlc3QobmFtZSkpIHtcblx0XHRcdHRocm93ICdJbnZhbGlkIEhhc2ggbmFtZSc7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUgaXMgYSB2YWx1ZSBmb3IgdGhlIG5hbWVcblx0XHRpZih0eXBlb2YgX2hhc2hbbmFtZV0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBfaGFzaFtuYW1lXTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCByZXR1cm4gdGhlIGRlZmF1bHRcblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiBkZWZhdWx0Xztcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNldFxuXHQgKlxuXHQgKiBTZXRzIGEgc3BlY2lmaWMgbmFtZVxuXHQgKlxuXHQgKiBAbmFtZSBzZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyfG9iamVjdCBuYW1lXHRUaGUgbmFtZSB0byBzZXQsIG9yIGFuIG9iamVjdCBvZiBuYW1lL3ZhbHVlIHBhaXJzXG5cdCAqIEBwYXJhbSBzdHIgdmFsdWVcdFx0XHRUaGUgdmFsdWUgdG8gc2V0IHRoZSBuYW1lIHRvXG5cdCAqL1xuXHRcInNldFwiOiBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXG5cdFx0Ly8gSWYgdGhlIG5hbWUgaXMgbm90IGFuIG9iamVjdFxuXHRcdGlmKCFUb29scy5pc09iamVjdChuYW1lKSkge1xuXG5cdFx0XHQvLyBJZiB0aGUgdmFsdWUgaXMgbm90IGRlZmluZWRcblx0XHRcdGlmKHR5cGVvZiB2YWx1ZSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHR2YWx1ZSA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEphdmFTY3JpcHQgaXMgZHVtYiBhbmQgdGhpbmtzIHtuYW1lOiB2YWx1ZX0gaXMgdGhlIHNhbWUgYXNcblx0XHRcdC8vXHR7XCJuYW1lXCI6IHZhbHVlfVxuXHRcdFx0dmFyIHRlbXAgPSBuYW1lO1xuXHRcdFx0bmFtZSA9IHt9O1xuXHRcdFx0bmFtZVt0ZW1wXSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdC8vIFN0b3JlIHRoZSBvbGQgaGFzaFxuXHRcdHZhciBvbGQgPSBUb29scy5jbG9uZShfaGFzaCk7XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbmFtZVxuXHRcdGZvcih2YXIgbiBpbiBuYW1lKSB7XG5cblx0XHRcdC8vIElmIHRoZSBuYW1lIGlzIGludmFsaWRcblx0XHRcdGlmKCFfbmFtZVJFLnRlc3QobikpIHtcblx0XHRcdFx0dGhyb3cgJ0ludmFsaWQgSGFzaCBuYW1lOiAnICsgbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgZ290IG51bGwsIGRlbGV0ZSB0aGUgbmFtZVxuXHRcdFx0aWYobmFtZVtuXSA9PSBudWxsKSB7XG5cdFx0XHRcdGRlbGV0ZSBfaGFzaFtuXTtcblx0XHRcdH1cblx0XHRcdC8vIEVsc2UsIHNldCB0aGUgbmV3IHZhbHVlXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X2hhc2hbbl0gPSBuYW1lW25dO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENoZWNrIGFueW9uZSB3YXRjaGluZyB0aGlzIHZhbHVlXG5cdFx0X2NoZWNrV2F0Y2hlcyhvbGQpO1xuXG5cdFx0Ly8gSW5pdCBhbiBhcnJheSB0byBzdG9yZSB0aGUgcGFydHNcblx0XHR2YXIgaGFzaCA9IFtdO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIG5hbWVcblx0XHRmb3IodmFyIGsgaW4gX2hhc2gpIHtcblx0XHRcdGhhc2gucHVzaChrICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KF9oYXNoW2tdKSk7XG5cdFx0fVxuXG5cdFx0Ly8gUmVzZXQgdGhlIHdpbmRvdyBsb2NhdGlvbiBoYXNoXG5cdFx0d2luZG93LmxvY2F0aW9uLmhhc2ggPSBoYXNoLmpvaW4oJyYnKTtcblx0fSxcblxuXHQvKipcblx0ICogVW53YXRjaFxuXHQgKlxuXHQgKiBSZW1vdmVzIGEgY2FsbGJhY2sgZnJvbSB0aGUgd2F0Y2hlc1xuXHQgKlxuXHQgKiBAbmFtZSB1bndhdGNoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cmluZyBuYW1lXHRcdFx0VGhlIG5hbWUgb2YgdGhlIHZhbHVlIHRvIHN0b3Agd2F0Y2hpbmdcblx0ICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBjYWxsYmFjayB0byByZW1vdmVcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRcInVud2F0Y2hcIjogZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcblxuXHRcdC8vIElmIHdlIGhhdmUgdGhlIG5hbWVcblx0XHRpZihuYW1lIGluIF93YXRjaGVzKSB7XG5cblx0XHRcdC8vIEdvIHRocm91Z2ggdGhlIGNhbGxiYWNrcyBhc3NvY2lhdGVkIHdpdGggdGhlIG5hbWVcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfd2F0Y2hlc1tuYW1lXS5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHRcdC8vIElmIHdlIGZpbmQgdGhlIGNhbGxiYWNrXG5cdFx0XHRcdGlmKF93YXRjaGVzW25hbWVdW2ldID09IGNhbGxiYWNrKSB7XG5cblx0XHRcdFx0XHQvLyBSZW1vdmUgaXRcblx0XHRcdFx0XHRfd2F0Y2hlc1tuYW1lXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBXYXRjaFxuXHQgKlxuXHQgKiBBZGRzIGEgY2FsbGJhY2sgZm9yIGEgc3BlY2lmaWMgbmFtZSB3aGljaCB3aWxsIGJlIGNhbGxlZCBpZiB0aGUgbmFtZSBpc1xuXHQgKiBhZGRlZCwgZGVsZXRlZCwgb3IgY2hhbmdlZFxuXHQgKlxuXHQgKiBAbmFtZSB3YXRjaFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgbmFtZVx0XHRcdFRoZSBuYW1lIG9mIHRoZSB2YWx1ZSB0byB3YXRjaFxuXHQgKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgdmFsdWUgY2hhbmdlc1xuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwid2F0Y2hcIjogZnVuY3Rpb24obmFtZSwgY2FsbGJhY2spIHtcblxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0aGUgbmFtZVxuXHRcdGlmKG5hbWUgaW4gX3dhdGNoZXMpIHtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCB0aGUgY2FsbGJhY2tzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmFtZVxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF93YXRjaGVzW25hbWVdLmxlbmd0aDsgKytpKSB7XG5cblx0XHRcdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBjYWxsYmFjayB0aGVyZSdzIG5vIG5lZWQgdG8gc3RvcmUgaXRcblx0XHRcdFx0aWYoX3dhdGNoZXNbbmFtZV1baV0gPT0gY2FsbGJhY2spIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIHdlIGRvbid0IGhhdmUgYW55IGNhbGxiYWNrcyBmb3IgdGhlIG5hbWVcblx0XHRlbHNlIHtcblx0XHRcdF93YXRjaGVzW25hbWVdID0gW107XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSBjYWxsYmFjayB0byB0aGUgd2F0Y2hlc1xuXHRcdF93YXRjaGVzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IEhhc2g7XG4iLCIvKipcbiAqIExvYWRlclxuICpcbiAqIFNob3dzIGEgbG9hZGluZyBncmFwaGljIGR1cmluZyByZXF1ZXN0cy9zdGFydHVwXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNFxuICovXG5cbi8vIEtlZXAgdHJhY2sgb2YgdGhlIHNob3cvaGlkZSBjYWxsc1xuLy9cdGFzc3VtZSB0aGUgbG9hZGVyIHN0YXJ0ZWQgb25cbnZhciBfY291bnQgPSAxO1xuXG4vLyBHZXQgdGhlIERPTSBlbGVtZW50XG52YXIgX2VsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvYWRlcicpO1xuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdGhpZGU6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gRGVjcmVtZW50IHRoZSBjb3VudFxuXHRcdF9jb3VudC0tO1xuXG5cdFx0Ly8gSWYgdGhpcyBpcyB0aGUgbGFzdCBvbmVcblx0XHRpZihfY291bnQgPT0gMCkge1xuXHRcdFx0X2VsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIFNob3cgdGhlIGxvYWRlclxuXHRzaG93OiBmdW5jdGlvbigpIHtcblxuXHRcdC8vIEluY3JlbWVudCB0aGUgY291bnRcblx0XHRfY291bnQrKztcblxuXHRcdC8vIElmIHRoaXMgaXMgdGhlIGZpcnN0IG9uZVxuXHRcdGlmKF9jb3VudCA9PSAxKSB7XG5cdFx0XHRfZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdFx0fVxuXHR9XG59XG4iLCIvKipcbiAqIFNlcnZpY2VzXG4gKlxuICogSGFuZGxlcyBjb25uZWN0aW5nIHRvIGFuZCByZXRyaWV2aW5nIGRhdGEgZnJvbSBzZXJ2aWNlc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjRcbiAqL1xuXG4vLyBFeHRlcm5hbCBtb2R1bGVzXG52YXIgJCA9IHJlcXVpcmUoJy4uLzNyZC9qcXVlcnkuYWpheC5qcycpO1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBDb29raWVzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9jb29raWVzLmpzJyk7XG5cbi8vIFNlcnZpY2VzIGRvbWFpblxudmFyIF9kb21haW4gPSAnJztcblxuLy8gRGVmYXVsdCBlcnJvciBmdW5jdGlvblxudmFyIF9lcnJvciA9IGZ1bmN0aW9uKCkge31cblxuLyoqXG4gKiBDbGVhclxuICpcbiAqIENsZWFycyB0aGUgc2Vzc2lvbiBmcm9tIGxvY2FsIHN0b3JhZ2UgYW5kIGNvb2tpZXNcbiAqXG4gKiBAbmFtZSBfY2xlYXJcbiAqIGFjY2VzcyBwcml2YXRlXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2NsZWFyKCkge1xuXG5cdC8vIERlbGV0ZSBmcm9tIGxvY2FsU3RvcmFnZVxuXHRkZWxldGUgbG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddO1xuXG5cdC8vIERlbGV0ZSB0aGUgY29va2llXG5cdENvb2tpZXMucmVtb3ZlKCdfc2Vzc2lvbicsICcuJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSwgJy8nKTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0XG4gKlxuICogSGFuZGxlcyBhY3R1YWwgcmVxdWVzdHNcbiAqXG4gKiBAbmFtZSByZXF1ZXN0XG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSBzdHJpbmcgbWV0aG9kXHRcdFx0VGhlIG1ldGhvZCB1c2VkIHRvIHNlbmQgdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSBzdHJpbmcgdXJsXHRcdFx0VGhlIGZ1bGwgVVJMIHRvIHRoZSBzZXJ2aWNlL25vdW5cbiAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2VcbiAqIEBwYXJhbSBzdHJpbmcgYXV0aFx0XHRcdE9wdGlvbmFsIEF1dGhvcml6YXRpb24gdG9rZW5cbiAqIEByZXR1cm4geGhyXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0KG1ldGhvZCwgdXJsLCBkYXRhKSB7XG5cblx0Ly8gR2VuZXJhdGUgdGhlIGFqYXggY29uZmlnXG5cdHZhciBvQ29uZmlnID0ge1xuXHRcdFwiYmVmb3JlU2VuZFwiOiBmdW5jdGlvbih4aHIsIHNldHRpbmdzKSB7XG5cdFx0XHR4aHIuX3VybCA9IHVybDtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBhIHNlc3Npb25cblx0XHRcdGlmKCdfc2Vzc2lvbicgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgbG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiY29udGVudFR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PXV0Zi04XCIsXG5cdFx0XCJlcnJvclwiOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcblxuXHRcdFx0Ly8gSWYgd2UgZ290IGFuIEF1dGhvcml6YXRpb24gZXJyb3Jcblx0XHRcdGlmKHhoci5zdGF0dXMgPT0gNDAxKSB7XG5cblx0XHRcdFx0Ly8gQ2xlYXIgdGhlIGN1cnJlbnQgdG9rZW5cblx0XHRcdFx0X2NsZWFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFB1dCB0aGUgZXJyb3IgaW4gdGhlIGNvbnNvbGVcblx0XHRcdGNvbnNvbGUuZXJyb3IobWV0aG9kICsgJyAnICsgeGhyLl91cmwgKyAnIHJldHVybmVkOiAnICsgZXJyb3IpO1xuXG5cdFx0XHQvLyBSZXR1cm4gdGhlIHhociB0byB0aGUgZXJyb3IgY2FsbGJhY2tcblx0XHRcdF9lcnJvcih4aHIpO1xuXHRcdH0sXG5cdFx0XCJtZXRob2RcIjogbWV0aG9kLFxuXHRcdFwidXJsXCI6IHVybFxuXHR9XG5cblx0Ly8gSWYgaXQncyBhIGdldCByZXF1ZXN0XG5cdGlmKG1ldGhvZCA9PSAnZ2V0Jykge1xuXHRcdGlmKHR5cGVvZiBkYXRhICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0b0NvbmZpZ1snZGF0YSddID0gXCJkPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblx0XHR9XG5cdH1cblx0Ly8gRWxzZSBpdCdzIGFueSBvdGhlciBtZXRob2Rcblx0ZWxzZSB7XG5cdFx0b0NvbmZpZy5kYXRhID0gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XG5cdH1cblxuXHQvLyBNYWtlIHRoZSByZXF1ZXN0IGFuZCByZXR1cm4gdGhlIHhoclxuXHRyZXR1cm4gJC5hamF4KG9Db25maWcpO1xufVxuXG4vKipcbiAqIFN0b3JlXG4gKlxuICogU3RvcmVzIHRoZSBzZXNzaW9uIHRva2VuIGluIGxvY2FsIHN0b3JhZ2UgYW5kIGNvb2tpZXNcbiAqXG4gKiBAbmFtZSBfc3RvcmVcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHN0cmluZyB0b2tlblxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9zdG9yZSh0b2tlbikge1xuXG5cdC8vIFNldCB0aGUgc2Vzc2lvbiBpbiBsb2NhbFN0b3JhZ2Vcblx0bG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddID0gdG9rZW5cblxuXHQvLyBTZXQgdGhlIHNlc3Npb24gaW4gYSBjb29raWVcblx0Q29va2llcy5zZXQoJ19zZXNzaW9uJywgdG9rZW4sIDg2NDAwLCAnLicgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsICcvJyk7XG59XG5cbi8qKlxuICogU3VjY2Vzc1xuICpcbiAqIEhhbmRsZXMgc3VjY2VzcyBmcm9tIHhoclxuICpcbiAqIEBuYW1lIF9zdWNjZXNzXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSBzdHJpbmcgcmVzXHRcdFx0VGhlIHJlc3VsdCBmcm9tIHRoZSBzZXJ2ZXJcbiAqIEBwYXJhbSBzdHJpbmcgc3RhdHVzXHRcdFx0VGhlIHN0YXR1cyBvZiB0aGUgcmVxdWVzdFxuICogQHBhcmFtIHhociB4aHJcdFx0XHRcdFRoZSByZXF1ZXN0IG9iamVjdFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9zdWNjZXNzKHJlcywgc3RhdHVzLCB4aHIpIHtcblxuXHQvLyBJZiB0aGUgcmVzdWx0IGlzIGEgc3RyaW5nXG5cdGlmKHR5cGVvZiByZXMgPT0gJ3N0cmluZycpIHtcblxuXHRcdC8vIFRyeSB0byBjb252ZXIgaXQgdG8gSlNPTlxuXHRcdHRyeSB7XG5cdFx0XHRyZXNcdD0gSlNPTi5wYXJzZShyZXMpO1xuXHRcdH0gY2F0Y2goZXJyKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKG1ldGhvZCArICcgJyArIHhoci5fdXJsICsgJyByZXR1cm5lZCBpbnZhbGlkIEpTT046ICcgKyBlcnIpO1xuXHRcdFx0cmVzID0ge1wiZXJyb3JcIjp7XCJjb2RlXCI6MCxcIm1zZ1wiOmVycn19O1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFNlcnZpY2VzXG4gKi9cbnZhciBTZXJ2aWNlcyA9IHtcblxuXHQvKipcblx0ICogSW5pdFxuXHQgKlxuXHQgKiBJbml0aWFsaXNlcyB0aGUgU2VydmljZXMgbW9kdWxlc1xuXHQgKlxuXHQgKiBAbmFtZSBpbml0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc3ViZG9tYWluXHRcdFRoZSBzdWItZG9tYWluIHNlcnZpY2VzIGNhbiBiZSByZWFjaGVkIHRocm91Z2hcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRcImluaXRcIjogZnVuY3Rpb24oc3ViZG9tYWluLCBlcnJvcikge1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGZ1bGwgZG9tYWluIG5hbWUgZm9yIHNlcnZpY2UgY2FsbHNcblx0XHRfZG9tYWluID0gJy8vJyArIHN1YmRvbWFpbiArXG5cdFx0XHRcdFx0Jy4nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICtcblx0XHRcdFx0XHQnLyc7XG5cblx0XHQvLyBEbyB3ZSBoYXZlIGEgc2Vzc2lvbiBpbiBzdG9yYWdlXG5cdFx0aWYoJ19zZXNzaW9uJyBpbiBsb2NhbFN0b3JhZ2UgJiYgbG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddKSB7XG5cdFx0XHR0aGlzLnNlc3Npb24obG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddKVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgZG8gd2UgaGF2ZSBvbmUgaW4gYSBjb29raWVcblx0XHRlbHNlIHtcblx0XHRcdHZhciBjb29raWUgPSBDb29raWVzLmdldCgnX3Nlc3Npb24nKTtcblx0XHRcdGlmKGNvb2tpZSkge1xuXHRcdFx0XHR0aGlzLnNlc3Npb24oY29va2llKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiBhbiBlcnJvciB3YXMgcGFzc2VkXG5cdFx0aWYodHlwZW9mIGVycm9yICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0X2Vycm9yID0gZXJyb3I7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBDcmVhdGVcblx0ICpcblx0ICogQ2FsbHMgdGhlIGNyZWF0ZSBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIGNyZWF0ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gY2FsbFxuXHQgKiBAcGFyYW0gc3RyaW5nIG5vdW5cdFx0XHRUaGUgbm91biB0byBjYWxsIG9uIHRoZSBzZXJ2aWNlXG5cdCAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2Vcblx0ICogQHJldHVybiB4aHJcblx0ICovXG5cdFwiY3JlYXRlXCI6IGZ1bmN0aW9uKHNlcnZpY2UsIG5vdW4sIGRhdGEpIHtcblx0XHRyZXR1cm4gX3JlcXVlc3QoJ3Bvc3QnLCBfZG9tYWluICsgc2VydmljZSArICcvJyArIG5vdW4sIGRhdGEpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBEZWxldGVcblx0ICpcblx0ICogQ2FsbHMgdGhlIGRlbGV0ZSBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIGRlbGV0ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gY2FsbFxuXHQgKiBAcGFyYW0gc3RyaW5nIG5vdW5cdFx0XHRUaGUgbm91biB0byBjYWxsIG9uIHRoZSBzZXJ2aWNlXG5cdCAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2Vcblx0ICogQHJldHVybiB4aHJcblx0ICovXG5cdFwiZGVsZXRlXCI6IGZ1bmN0aW9uKHNlcnZpY2UsIG5vdW4sIGRhdGEpIHtcblx0XHRyZXR1cm4gX3JlcXVlc3QoJ2RlbGV0ZScsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlYWRcblx0ICpcblx0ICogQ2FsbHMgdGhlIHJlYWQgYWN0aW9uIG9uIGEgc3BlY2lmaWMgc2VydmljZSBub3VuZVxuXHQgKlxuXHQgKiBAbmFtZSByZWFkXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJyZWFkXCI6IGZ1bmN0aW9uKHNlcnZpY2UsIG5vdW4sIGRhdGEpIHtcblx0XHRyZXR1cm4gX3JlcXVlc3QoJ2dldCcsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNlc3Npb25cblx0ICpcblx0ICogU2V0IG9yIGdldCB0aGUgc2Vzc2lvbiB0b2tlblxuXHQgKlxuXHQgKiBAbmFtZSBzZXNzaW9uXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgdG9rZW5cdFx0XHRUaGUgdG9rZW4gdG8gc3RvcmVcblx0ICogQHJldHVybiB2b2lkfHN0clxuXHQgKi9cblx0XCJzZXNzaW9uXCI6IGZ1bmN0aW9uKHRva2VuKSB7XG5cblx0XHQvLyBJZiB3ZSBhcmUgc2V0dGluZyB0aGUgc2Vzc2lvblxuXHRcdGlmKHR5cGVvZiB0b2tlbiAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuXHRcdFx0Ly8gSWYgbnVsbCB3YXMgcGFzc2VkLCBkZWxldGUgdGhlIHNlc3Npb25cblx0XHRcdGlmKHRva2VuID09IG51bGwpIHtcblx0XHRcdFx0X2NsZWFyKCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIHNldCB0aGUgc2Vzc2lvblxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9zdG9yZSh0b2tlbik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSBhcmUgcmV0dXJuaW5nIHRoZSBzZXNzaW9uXG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gKCdfc2Vzc2lvbicgaW4gbG9jYWxTdG9yYWdlKSA/XG5cdFx0XHRcdGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSA6XG5cdFx0XHRcdCcnO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogVXBkYXRlXG5cdCAqXG5cdCAqIENhbGxzIHRoZSB1cGRhdGUgYWN0aW9uIG9uIGEgc3BlY2lmaWMgc2VydmljZSBub3VuZVxuXHQgKlxuXHQgKiBAbmFtZSB1cGRhdGVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcInVwZGF0ZVwiOiBmdW5jdGlvbihzZXJ2aWNlLCBub3VuLCBkYXRhKSB7XG5cdFx0cmV0dXJuIF9yZXF1ZXN0KCdwdXQnLCBfZG9tYWluICsgc2VydmljZSArICcvJyArIG5vdW4sIGRhdGEpO1xuXHR9XG59O1xuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBTZXJ2aWNlcztcbiIsIi8qKlxuICogVG9vbHNcbiAqXG4gKiBVc2VmdWwgZnVuY3Rpb25zIHRoYXQgYmVsb25nIHRvIGFueSBzcGVjaWZpYyBtb2R1bGVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI1XG4gKi9cblxuLyoqXG4gKiBUb29sc1xuICovXG52YXIgVG9vbHMgPSB7XG5cblx0LyoqXG5cdCAqIENsb25lXG5cdCAqXG5cdCAqIERlZXAgY2xvbmUgYW55IHR5cGUgb2Ygb2JqZWN0LCByZXR1cm5pbmcgYSBuZXcgb25lXG5cdCAqXG5cdCAqIEBuYW1lIGNsb25lXG5cdCAqIEBwYXJhbSBtaXhlZCBvXHRcdFx0XHRUaGUgdmFyaWFibGUgdG8gY2xvbmVcblx0ICogQHJldHVybiBtaXhlZFxuXHQgKi9cblx0Y2xvbmU6IGZ1bmN0aW9uKG8pIHtcblx0XHQvLyBOZXcgdmFyXG5cdFx0dmFyIG4gPSBudWxsO1xuXG5cdFx0Ly8gSWYgaXQncyBhbiBhcnJheVxuXHRcdGlmKEFycmF5LmlzQXJyYXkoKSkge1xuXHRcdFx0biA9IFtdO1xuXHRcdFx0Zm9yKHZhciBpIGluIG8pIHtcblx0XHRcdFx0bi5wdXNoKFRvb2xzLmNsb25lKG9ba10pKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIHRoZSB2YWx1ZSBpcyBhbiBvYmplY3Rcblx0XHRlbHNlIGlmKFRvb2xzLmlzT2JqZWN0KG8pKSB7XG5cdFx0XHRuID0ge31cblx0XHRcdGZvcih2YXIgayBpbiBvKSB7XG5cdFx0XHRcdG5ba10gPSBUb29scy5jbG9uZShvW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlLCBjb3B5IGFzIGlzXG5cdFx0ZWxzZSB7XG5cdFx0XHRuID0gbztcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIG5ldyB2YXJcblx0XHRyZXR1cm4gbjtcblx0fSxcblxuXHQvKipcblx0ICogQ29tcGFyZVxuXHQgKlxuXHQgKiBDb21wYXJlcyB0d28gdmFsdWVzIG9mIGFueSB0eXBlIHRvIHNlZSBpZiB0aGV5IGNvbnRhaW4gdGhlIHNhbWVcblx0ICogZGF0YSBvciBub3Rcblx0ICpcblx0ICogQG5hbWUgY29tcGFyZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgdjFcdFx0XHRcdFRoZSBmaXJzdCB2YWx1ZVxuXHQgKiBAcGFyYW0gbWl4ZWQgdjJcdFx0XHRcdFRoZSBzZWNvbmQgdmFsdWVcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRjb21wYXJlKHYxLCB2Mikge1xuXG5cdFx0Ly8gSWYgdGhleSdyZSBib3RoIGFycmF5c1xuXHRcdGlmKEFycmF5LmlzQXJyYXkodjEpICYmIEFycmF5LmlzQXJyYXkodjIpKSB7XG5cblx0XHRcdC8vIElmIHRoZXkgZG9uJ3QgaGF2ZSB0aGUgc2FtZSBsZW5ndGhcblx0XHRcdGlmKHYxLmxlbmd0aCAhPSB2Mi5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wYXJlIHRoZSB2YWx1ZXNcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB2MS5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRpZighVG9vbHMuY29tcGFyZSh2MVtpXSwgdjJbaV0pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB0aGV5J3JlIGJvdGggb2JqZWN0c1xuXHRcdGVsc2UgaWYoVG9vbHMuaXNPYmplY3QodjEpICYmIFRvb2xzLmlzT2JqZWN0KHYyKSkge1xuXG5cdFx0XHQvLyBJZiB0aGV5IGRvbid0IGhhdmUgdGhlIHNhbWUga2V5c1xuXHRcdFx0aWYoIVRvb2xzLmNvbXBhcmUoT2JqZWN0LmtleXModjEpLnNvcnQoKSwgT2JqZWN0LmtleXModjIpLnNvcnQoKSkpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wYXJlIGVhY2gga2V5XG5cdFx0XHRmb3IodmFyIGsgaW4gdjEpIHtcblx0XHRcdFx0aWYoIVRvb2xzLmNvbXBhcmUodjFba10sIHYyW2tdKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGNvbXBhcmUgYXMgaXNcblx0XHRlbHNlIHtcblx0XHRcdGlmKHYxICE9PSB2Mikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGVxdWFsXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEVtcHR5XG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFsdWUgdHlwZSBpcyBlbXB0eVxuXHQgKlxuXHQgKiBAbmFtZSBlbXB0eVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgbVx0XHRcdFx0VGhlIHZhbHVlIHRvIGNoZWNrLCBjYW4gYmUgb2JqZWN0LCBhcnJheSwgc3RyaW5nLCBldGNcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRlbXB0eTogZnVuY3Rpb24obSkge1xuXG5cdFx0Ly8gSWYgaXQncyBhbiBvYmplY3Rcblx0XHRpZihUb29scy5pc09iamVjdChtKSkge1xuXHRcdFx0Zm9yKHZhciBwIGluIG0pIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiBpdCdzIGFuIGFycmF5IG9yIGEgc3RyaW5nXG5cdFx0ZWxzZSBpZihBcnJheS5pc0FycmF5KG0pIHx8IHR5cGVvZiBtID09ICdzdHJpbmcnKSB7XG5cdFx0XHRyZXR1cm4gbS5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Vcblx0XHRlbHNlIHtcblxuXHRcdFx0Ly8gSWYgaXQncyBudWxsIG9yIHVuZGVmaW5lZFxuXHRcdFx0aWYodHlwZW9mIG0gPT0gJ3VuZGVmaW5lZCcgfHwgbSA9PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIHJldHVybiBmYWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogSXMgRGVjaW1hbFxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgbnVtYmVyXG5cdCAqXG5cdCAqIEBuYW1lIGlzRGVjaW1hbFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgbVx0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIHRlc3Rcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRpc0RlY2ltYWw6IGZ1bmN0aW9uKG0pIHtcblx0XHRyZXR1cm4gdHlwZW9mIG0gPT0gJ251bWJlcic7XG5cdH0sXG5cblx0LyoqXG5cdCAqIElzIEludGVnZXJcblx0ICpcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YXJpYWJsZSBpcyBhIHRydWUgaW50ZWdlclxuXHQgKlxuXHQgKiBAbmFtZSBpc0ludGVnZXJcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byB0ZXN0XG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0aXNJbnRlZ2VyOiBmdW5jdGlvbihtKSB7XG5cdFx0cmV0dXJuIG0gPT09ICttICYmIG0gPT09IChtfDApO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBJcyBPYmplY3Rcblx0ICpcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YXJpYWJsZSBpcyBhIHRydWUgb2JqZWN0XG5cdCAqXG5cdCAqIEBuYW1lIGlzT2JqZWN0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFyaWFibGUgdG8gdGVzdFxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGlzT2JqZWN0OiBmdW5jdGlvbihtKSB7XG5cdFx0aWYobSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmKHR5cGVvZiBtICE9ICdvYmplY3QnKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYoQXJyYXkuaXNBcnJheShtKSkgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBPYmplY3QgTWFwXG5cdCAqXG5cdCAqIFdvcmtzIGxpa2UgbWFwIGZvciBhcnJheXMsIGJ1dCBpdGVyYXRlcyBvdmVyIGFuIG9iamVjdFxuXHQgKlxuXHQgKiBAbmFtZSBvbWFwXG5cdCAqIEBwYXJhbSB7b2JqZWN0fSBvXHRcdFx0VGhlIG9iamVjdCB0byBtYXBcblx0ICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcdFRoZSBmdW5jdGlvbiB0byBjYWxsIGVhY2ggaXRlcmF0aW9uXG5cdCAqIEByZXR1cm4gYXJyYXlcblx0ICovXG5cdG9tYXA6IGZ1bmN0aW9uKG8sIGNhbGxiYWNrKSB7XG5cdFx0dmFyIHJldCA9IFtdO1xuXHRcdGZvcih2YXIgayBpbiBvKSB7XG5cdFx0XHRyZXQucHVzaChjYWxsYmFjayhvW2tdLCBrKSk7XG5cdFx0fVxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFVVSUQgdjRcblx0ICpcblx0ICogUmV0dXJucyBhIHBzdWVkbyByYW5kb20gc3RyaW5nIGluIFVVSUQgZm9ybWF0IChOT1QgQUNUVUFMTFkgQSBVVUlEKVxuXHQgKlxuXHQgKiBAbmFtZSB1dWlkdjRcblx0ICogQHJldHVybiBzdHJcblx0ICovXG5cdHV1aWR2NDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIChbMWU3XSstMWUzKy00ZTMrLThlMystMWUxMSkucmVwbGFjZSgvWzAxOF0vZywgYyA9PlxuXHRcdFx0KGMgXiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KDEpKVswXSAmIDE1ID4+IGMgLyA0KS50b1N0cmluZygxNilcblx0XHQpXG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gVG9vbHM7XG4iLCIvKipcbiAqIFdlYnNvY2tldFxuICpcbiAqIFNpbXBsaWZpZXMgdXNpbmcgYSB3ZWJzb2NrZXRcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE3LTA1LTE3XG4gKi9cblxuLy8gRXhwb3J0IHRoZSBmdW5jdGlvblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1cmwsIGNvbmYpIHtcblxuXHQvLyBJZiB3ZSBjYW4ndCBoYW5kbGUgd2Vic29ja2V0c1xuXHRpZighKCdXZWJTb2NrZXQnIGluIHdpbmRvdykpIHtcblx0XHRjb25zb2xlLmVycm9yKCd3ZWJzb2NrZXQ6IFdlYlNvY2tldHMgbm90IHN1cHBvcnRlZCcpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElmIGNvbmYgaXMgbm90IGRlZmluZWRcblx0aWYodHlwZW9mIGNvbmYgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRjb25mID0ge31cblx0fVxuXG5cdC8vIEVsc2UsIGlmIGl0J3Mgbm90IGFuIG9iamVjdCwgd2UgaGF2ZSBhIHByb2JsZW1cblx0ZWxzZSBpZih0eXBlb2YgY29uZiAhPSAnb2JqZWN0Jykge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ3dlYnNvY2tldDogc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gb2JqZWN0Jyk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIHRoZSBXZWJTb2NrZXRcblx0dmFyIG9Tb2NrID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuXG5cdC8vIEFkZCB0aGUgVVJMIHRvIHRoZSBpbnN0YW5jZVxuXHRvU29jay51cmwgPSB1cmw7XG5cblx0Ly8gU2V0IHRoZSBvcGVuIGNhbGxiYWNrXG5cdG9Tb2NrLm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gSWYgYW4gb3BlbiBjYWxsYmFjayBpcyBzZXRcblx0XHRpZignb3BlbicgaW4gY29uZikge1xuXHRcdFx0Y29uZlsnb3BlbiddKG9Tb2NrKTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IG9wZW5lZCcpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgbWVzc2FnZSBjYWxsYmFja1xuXHRvU29jay5vbm1lc3NhZ2VcdD0gZnVuY3Rpb24oZXYpIHtcblxuXHRcdC8vIElmIGEgbWVzc2FnZSBjYWxsYmFjayBpcyBzZXRcblx0XHRpZignbWVzc2FnZScgaW4gY29uZikge1xuXHRcdFx0Y29uZlsnbWVzc2FnZSddKG9Tb2NrLCBldik7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBtZXNzYWdlIHJlY2VpdmVkLCBcIicgKyBldi5kYXRhICsgJ1wiJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBlcnJvciBjYWxsYmFja1xuXHRvU29jay5vbmVycm9yID0gZnVuY3Rpb24oZXYpIHtcblxuXHRcdC8vIElmIGFuIGVycm9yIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdlcnJvcicgaW4gY29uZikge1xuXHRcdFx0Y29uZlsnZXJyb3InXShvU29jaywgZXYpO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGp1c3QgbG9nIHRoZSBldmVudFxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3dlYnNvY2tldDogZXJyb3IsIFwiJyArIEpTT04uc3RyaW5naWZ5KGV2KSArICdcIicpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgY2xvc2UgY2FsbGJhY2tcblx0b1NvY2sub25jbG9zZSA9IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gSWYgYSBjbG9zZSBjYWxsYmFjayBpcyBzZXRcblx0XHRpZignY2xvc2UnIGluIGNvbmYpIHtcblx0XHRcdGNvbmZbJ2Nsb3NlJ10ob1NvY2spO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGp1c3QgbG9nIHRoZSBldmVudFxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3dlYnNvY2tldDogY2xvc2VkJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBzb2NrZXRcblx0cmV0dXJuIG9Tb2NrO1xufVxuIiwiLy8gR2VuZXJpY1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBzcGVjaWZpY1xudmFyIFJlcXVlc3RzID0gcmVxdWlyZSgnLi9yZXF1ZXN0cy5qcycpO1xuXG4vLyBDb21wb25lbnRzXG52YXIgU2l0ZSA9IHJlcXVpcmUoJy4vcmVhY3Qvc2l0ZS5qc3gnKTtcblxuKGZ1bmN0aW9uKCkge1xuXG5cdC8vIFJlbmRlciB0aGUgTG9naW5Db21wb25lbnRcblx0UmVhY3RET00ucmVuZGVyKFxuXHRcdFJlYWN0LmNyZWF0ZUVsZW1lbnQoU2l0ZSwge30pLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZWFjdCcpXG5cdCk7XG5cblx0Ly8gSW5pdCB0aGUgcmVxdWVzdHNcblx0UmVxdWVzdHMuaW5pdCgpO1xuXG5cdC8vIEluaXQgdGhlIHNlcnZpY2VzXG5cdFNlcnZpY2VzLmluaXQoXCJzZXJ2aWNlc1wiLCBmdW5jdGlvbih4aHIpIHtcblxuXHRcdC8vIElmIHdlIGdvdCBhIDQwMSwgbGV0IGV2ZXJ5b25lIGtub3cgd2Ugc2lnbmVkIG91dFxuXHRcdGlmKHhoci5zdGF0dXMgPT0gNDAxKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbm91dCcpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gSWYgd2UgaGF2ZSBhIHNlc3Npb24sIGZldGNoIHRoZSB0aHJvd2VyXG5cdGlmKFNlcnZpY2VzLnNlc3Npb24oKSkge1xuXHRcdExvYWRlci5zaG93KCk7XG5cdFx0U2VydmljZXMucmVhZCgnYXV0aCcsICdzZXNzaW9uJywge30pLmRvbmUocmVzID0+IHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWduaW4nLCByZXMuZGF0YSk7XG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0TG9hZGVyLmhpZGUoKTtcblxuXHQvLyBNYWtlIEV2ZW50cyBhdmFpbGFibGUgZnJvbSBjb25zb2xlXG5cdHdpbmRvdy5FdmVudHMgPSBFdmVudHM7XG59KSgpO1xuXG4vLyBFeHBvcnRcbm1vZHVsZS5leHBvcnRzID0gbnVsbDtcbiIsIi8qKlxuICogRm9ybXMgTW9kdWxlXG4gKlxuICogQ2xhc3NlcyBhbmQgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIGZvcm1zXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IEZVRUwgZm9yIHRoZSBGSVJFXG4gKiBAY3JlYXRlIDIwMTgtMTItMDhcbiAqL1xuXG4vLyBFcnJvciBjbGFzcyBkZWZpbmVcbnZhciBFUlJPUl9DTEFTUyA9ICdlcnJvcic7XG5cbi8qKlxuICogQWRkIENsYXNzXG4gKlxuICogQWRkcyB0aGUgZXJyb3IgY2xhc3MgbmFtZSB0byBhbiBlbGVtZW50XG4gKlxuICogQG5hbWUgX2FkZENsYXNzXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSBFbGVtZW50IGVsXHRUaGUgZWxlbWVudCB0byByZW1vdmUgdGhlIGNsYXNzIGZyb21cbiAqL1xuZnVuY3Rpb24gX2FkZENsYXNzKGVsKSB7XG5cdGlmKCFlbC5jbGFzc05hbWUpIHtcblx0XHRlbC5jbGFzc05hbWUgPSBFUlJPUl9DTEFTUztcblx0fSBlbHNlIHtcblx0XHRsZXQgbmFtZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRpZihuYW1lcy5pbmRleE9mKEVSUk9SX0NMQVNTKSA9PSAtMSkge1xuXHRcdFx0bmFtZXMucHVzaChFUlJPUl9DTEFTUyk7XG5cdFx0XHRlbC5jbGFzc05hbWUgPSBuYW1lcy5qb2luKCcgJyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUmVtb3ZlIENsYXNzXG4gKlxuICogUmVtb3ZlcyB0aGUgZXJyb3IgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnRcbiAqXG4gKiBAbmFtZSBfcmVtb3ZlQ2xhc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIEVsZW1lbnQgZWxcdFRoZSBlbGVtZW50IHRvIHJlbW92ZSB0aGUgY2xhc3MgZnJvbVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9yZW1vdmVDbGFzcyhlbCkge1xuXHRpZihlbC5jbGFzc05hbWUuaW5jbHVkZXMoRVJST1JfQ0xBU1MpKSB7XG5cdFx0bGV0IG5hbWVzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cdFx0bmFtZXMuc3BsaWNlKG5hbWVzLmluZGV4T2YoRVJST1JfQ0xBU1MpLCAxKTtcblx0XHRlbC5jbGFzc05hbWUgPSBuYW1lcy5qb2luKCcgJylcblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIEJhc2UgTm9kZSBDb21wb25lbnRcbmNsYXNzIF9CYXNlTm9kZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRlcnJvcnMoZXJyb3JzKSB7XG5cdFx0Zm9yKGxldCBrIGluIGVycm9ycykge1xuXHRcdFx0aWYodGhpcy5yZWZzW2tdLmVycm9ycykge1xuXHRcdFx0XHR0aGlzLnJlZnNba10uZXJyb3JzKGVycm9yc1trXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfYWRkQ2xhc3ModGhpcy5yZWZzW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gQ3JlYXRlIHRoZSBBcnJheSBGb3JtIENvbXBvbmVudFxuY2xhc3MgQXJyYXlOb2RlIGV4dGVuZHMgX0Jhc2VOb2RlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmV0dXJuXG5cdFx0dmFyIHZhbHVlID0gW11cblxuXHRcdC8vIEdvIHRocm91Z2ggYWxsIHJlZnNcblx0XHRmb3IodmFyIHIgaW4gdGhpcy5yZWZzKSB7XG5cdFx0XHRpZih0aGlzLnJlZnNbcl0udHlwZSAmJiB0aGlzLnJlZnNbcl0udHlwZSA9PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdHZhbHVlLnB1c2godGhpcy5yZWZzW3JdLmNoZWNrZWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUucHVzaCh0aGlzLnJlZnNbcl0udmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgdmFsdWVzXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG59XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0ZXJyb3JzKG1zZykge1xuXHRcdGlmKHRoaXMucmVmcy5lbC5lcnJvcnMpIHtcblx0XHRcdHRoaXMucmVmcy5lbC5lcnJvcnMobXNnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FkZENsYXNzKHRoaXMucmVmcy5lbCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnJlZnMuZWwudmFsdWU7XG5cdH1cblxuXHRzZXQgdmFsdWUodikge1xuXHRcdHRoaXMucmVmcy5lbC52YWx1ZSA9IHY7XG5cdFx0aWYodGhpcy52YWx1ZVNldCkge1xuXHRcdFx0dGhpcy52YWx1ZVNldCgpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIGJhc2UgQ29tcG9uZW50XG5jbGFzcyBQYXJlbnQgZXh0ZW5kcyBfQmFzZU5vZGUge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cblx0XHQvLyBJbml0IHRoZSByZXR1cm5cblx0XHR2YXIgdmFsdWUgPSB7fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBhbGwgcmVmc1xuXHRcdGZvcih2YXIgciBpbiB0aGlzLnJlZnMpIHtcblx0XHRcdGlmKHRoaXMucmVmc1tyXS50eXBlICYmIHRoaXMucmVmc1tyXS50eXBlID09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0dmFsdWVbcl0gPSB0aGlzLnJlZnNbcl0uY2hlY2tlZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlW3JdID0gdGhpcy5yZWZzW3JdLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgdmFsdWVcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRBcnJheU5vZGU6IEFycmF5Tm9kZSxcblx0Tm9kZTogTm9kZSxcblx0UGFyZW50OiBQYXJlbnQsXG5cdGVycm9yQWRkOiBfYWRkQ2xhc3MsXG5cdGVycm9yUmVtb3ZlOiBfcmVtb3ZlQ2xhc3MsXG5cdGVycm9yRm9jdXM6IGZ1bmN0aW9uKGV2KSB7XG5cblx0XHQvLyBJZiB0aGUgc3BlY2lhbCBlbGVtZW50cyBwcm9wIGlzIHNldFxuXHRcdGlmKGV2LmVsZW1lbnRzKSB7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXYuZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0X3JlbW92ZUNsYXNzKGV2LmVsZW1lbnRzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlLCBhc3N1bWluZyBjdXJyZW50VGFyZ2V0XG5cdFx0ZWxzZSB7XG5cdFx0XHRfcmVtb3ZlQ2xhc3MoZXYuY3VycmVudFRhcmdldCk7XG5cdFx0fVxuXHR9XG59O1xuIiwiLyoqXG4gKiBNZW51IENvbXBvbmVudFxuICpcbiAqIEEgY29tcG9uZW50IHRvIGRpc3BsYXkgYSBtZW51IG9uIHRoZSBzY3JlZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTExXG4gKi9cblxuLy8gQ3JlYXRlIHRoZSBNZW51IENvbXBvbmVudFxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgYmFzZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWxlY3RlZDogdGhpcy5wcm9wcy5zZWxlY3RlZFxuXHRcdH07XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIGNsb3NlXG5cdFx0aWYoIXRoaXMucHJvcHMub25DaGFuZ2UpIHtcblx0XHRcdHRocm93ICdNZW51IHJlcXVpcmVzIG9uQ2hhbmdlIGNhbGxiYWNrJztcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLml0ZW1DbGljayA9IHRoaXMuaXRlbUNsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpdGVtQ2xpY2sobmFtZSkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogbmFtZX0sICgpID0+IHtcblx0XHRcdHNlbGYucHJvcHMub25DaGFuZ2UobmFtZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXJDaGlsZHJlbigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcblx0XHRcdHZhciBzdGF0dXMgPSAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA9PSBjaGlsZC5wcm9wcy5uYW1lKSA/ICdhY3RpdmUnIDogJyc7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdG9uQ2xpY2s6IHNlbGYuaXRlbUNsaWNrLFxuXHRcdFx0XHRjbGFzc05hbWU6IHN0YXR1c1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Z2V0IHNlbGVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkO1xuXHR9XG5cblx0c2V0IHNlbGVjdGVkKG4pIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogbn0pXG5cdH1cbn1cblxuLy8gQ3JlYXRlIHRoZSBNZW51IEl0ZW0gQ29tcG9uZW50XG5jbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudFxue1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gU2V0IHRoZSBiYXNlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBuYW1lXG5cdFx0aWYoIXRoaXMucHJvcHMubmFtZSkge1xuXHRcdFx0dGhyb3cgJ0l0ZW0gcmVxdWlyZXMgbmFtZSBhdHRyaWJ1dGUnO1xuXHRcdH1cblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuY2xpY2sgPSB0aGlzLmNsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjbGljayhldikge1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMubmFtZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuY2xpY2t9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCBjb21wb25lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNZW51XCI6IE1lbnUsXG5cdFwiSXRlbVwiOiBJdGVtXG59XG4iLCIvKipcbiAqIE1lc3NhZ2VzXG4gKlxuICogU2hvd3MgYSBtZXNzYWdlIHdpdGggYnV0dG9ucyB0byBhY2NlcHQsIGRpc21pc3MsIGV0Y1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMzFcbiAqL1xuXG4vLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBUb29scyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvdG9vbHMuanMnKTtcblxuLy8gTWFrZSBzdXJlIHRoZXJlIGlzbid0IG1vcmUgdGhhbiBvbmUgTWVzc2FnZXNcbnZhciBfaW5zdGFuY2UgPSBmYWxzZTtcblxuLy8gQ3JlYXRlIHRoZSBtZXNzYWdlIGNvbXBvbmVudFxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYnV0dG9uID0gdGhpcy5idXR0b24uYmluZCh0aGlzKTtcblx0fVxuXG5cdGJ1dHRvbihldikge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgY2FsbGJhY2sgYXNzb2NpYXRlZCwgaWYgaXQgcmV0dXJucyBzdWNjZXNzZnVsLCByZW1vdmUgdGhlXG5cdFx0Ly9cdG1lc3NhZ2Vcblx0XHRpZih0aGlzLnByb3BzLmJ1dHRvbnNbZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5jYWxsYmFjayh0aGlzLnByb3BzLmlkKSkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZW1vdmUodGhpcy5wcm9wcy5pZCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG5cdFx0XHRcdDxwPntzZWxmLnByb3BzLnRleHR9PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cblx0XHRcdFx0XHR7c2VsZi5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbihiLCBpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGJ1dHRvbiBrZXk9e2l9IGRhdGEtaW5kZXg9e2l9IG9uQ2xpY2s9e3NlbGYuYnV0dG9ufT57Yi50aXRsZX08L2J1dHRvbj5cblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgcHJpbWFyeSBjb21wb25lbnRcbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIGFuIGluc3RhbmNlXG5cdFx0aWYoX2luc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyAnQ2FuXFwndCBoYXZlIG1vcmUgdGhhbiBvbmUgTWVzc2FnZXMnO1xuXHRcdH1cblx0XHRfaW5zdGFuY2UgPSB0cnVlO1xuXG5cdFx0Ly8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1lc3NhZ2VzOiBbXVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Ly8gVHJhY2sgYW55IG1lc3NhZ2UgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnbWVzc2FnZScsIHRoaXMubWVzc2FnZSk7XG5cdFx0RXZlbnRzLmFkZCgnbWVzc2FnZV9yZW1vdmUnLCB0aGlzLnJlbW92ZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBtZXNzYWdlIGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2UpO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ21lc3NhZ2VfcmVtb3ZlJywgdGhpcy5yZW1vdmUpO1xuXHR9XG5cblx0bWVzc2FnZShpZCwgY29uZikge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1lc3NhZ2VzXG5cdFx0dmFyIG1zZ3MgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcblxuXHRcdC8vIFB1c2ggdGhlIG5ldyBtZXNzYWdlXG5cdFx0bXNnc1tpZF0gPSBjb25mO1xuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1wibWVzc2FnZXNcIjogbXNnc30pO1xuXHR9XG5cblx0cmVtb3ZlKGlkKSB7XG5cblx0XHQvLyBDbG9uZSB0aGUgbWVzc2FnZXNcblx0XHR2YXIgbXNncyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSByZXF1ZXN0ZWQgSURcblx0XHRkZWxldGUgbXNnc1tpZF07XG5cblx0XHQvLyBTZXQgdGhlIHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtZXNzYWdlc1wiOiBtc2dzfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwibWVzc2FnZXNcIj5cblx0XHRcdFx0e1Rvb2xzLm9tYXAodGhpcy5zdGF0ZS5tZXNzYWdlcywgZnVuY3Rpb24obSwgaykge1xuXHRcdFx0XHRcdHJldHVybiA8TWVzc2FnZSB7Li4ubX0ga2V5PXtrfSBpZD17a30gcmVtb3ZlPXtzZWxmLnJlbW92ZX0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgQ29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2VzXG4iLCIvKipcbiAqIE1vZGVsIENvbXBvbmVudFxuICpcbiAqIEEgY29tcG9uZW50IHRvIGRpc3BsYXkgYSBtb2RhbCBib3ggb24gdGhlIHNjcmVlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMTFcbiAqL1xuXG4vLyBDcmVhdGUgdGhlIENvbXBvbmVudFxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50XG57XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIGNsb3NlXG5cdFx0aWYoIXRoaXMucHJvcHMuY2xvc2UpIHtcblx0XHRcdHRocm93ICdNb2RhbCByZXF1aXJlcyBjbG9zZSBjYWxsYmFjayc7XG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5idXR0b25DbGljayA9IHRoaXMuYnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLnRyYXBFc2NhcGUgPSB0aGlzLnRyYXBFc2NhcGUuYmluZCh0aGlzKTtcblx0fVxuXG5cdC8vIElmIGEgYnV0dG9uIGlzIHB1c2hlZFxuXHRidXR0b25DbGljayhldikge1xuXG5cdFx0Ly8gR2V0IHRoZSBidXR0b24gdXNpbmcgdGhlIGluZGV4XG5cdFx0dmFyIGJ0biA9IHRoaXMucHJvcHMuYnV0dG9uc1tldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIGNhbGxiYWNrXG5cdFx0aWYodHlwZW9mIGJ0bi5jYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRidG4uY2FsbGJhY2soYnRuKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHQvLyBUcmFwIHRoZSBlc2NhcGUga2V5XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMudHJhcEVzY2FwZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHQvLyBTdG9wIHRyYXBwaW5nIHRoZSBlc2NhcGUga2V5XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMudHJhcEVzY2FwZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIHN0eWxlc1xuXHRcdHZhciBzdHlsZXMgPSB7fVxuXHRcdGlmKHRoaXMucHJvcHMuaGVpZ2h0KSBzdHlsZXMuaGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQ7XG5cdFx0aWYodGhpcy5wcm9wcy5tYXhIZWlnaHQpIHN0eWxlcy5tYXhIZWlnaHQgPSB0aGlzLnByb3BzLm1heEhlaWdodDtcblx0XHRpZih0aGlzLnByb3BzLm1heFdpZHRoKSBzdHlsZXMubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG5cdFx0aWYodGhpcy5wcm9wcy53aWR0aCkgc3R5bGVzLndpZHRoID0gdGhpcy5wcm9wcy53aWR0aDtcblxuXHRcdC8vIFJldHVybiB0aGUgSFRNTFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlc30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZG93LWNsb3NlXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuYnV0dG9ucyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uKGJ0biwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBkYXRhLWluZGV4PXtpfSBjbGFzc05hbWU9XCJzbWFsbFwiIG9uQ2xpY2s9e3NlbGYuYnV0dG9uQ2xpY2t9IGRpc2FibGVkPXtidG5bJ2Rpc2FibGVkJ119PntidG5bJ25hbWUnXX08L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdC8vIFRyYXBzIEVTQyBrZXkgY2xpY2tzIHNvIHdlIGNhbiBjbG9zZSB0aGUgTW9kYWwgd2luZG93XG5cdHRyYXBFc2NhcGUoZXYpIHtcblx0XHRpZihldi5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0dGhpcy5wcm9wcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbDtcbiIsIi8qKlxuICogUG9wdXBzXG4gKlxuICogU2hvd3MgYSBwb3B1cCBvZiB0eXBlIGVycm9yLCBzdWNjZXNzLCBvciB3YXJuaW5nXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMi0wOFxuICovXG5cbi8vIERlZmluZXNcbnZhciBTVUNDRVNTX1RJTUVPVVQgPSAyMDAwO1xudmFyIEVSUk9SX1RJTUVPVVQgPSAxMDAwMDtcbnZhciBXQVJOSU5HX1RJTUVPVVQgPSA1MDAwO1xudmFyIFNURVBfVElNRU9VVCA9IDIwO1xudmFyIFdJRFRIX1NURVBTID0gNDA7XG52YXIgSEVJR0hUX1NURVBTID0gMjA7XG52YXIgTUFSR0lOID0gNTtcblxuLy8gR2VuZXJpY1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIE1ha2Ugc3VyZSB0aGVyZSBpc24ndCBtb3JlIHRoYW4gb25lIFBvcHVwc1xudmFyIF9pbnN0YW5jZSA9IGZhbHNlO1xuXG4vLyBDcmVhdGUgdGhlIENvbXBvbmVudFxuY2xhc3MgUG9wdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIGFuIGluc3RhbmNlXG5cdFx0aWYoX2luc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyAnQ2FuXFwndCBoYXZlIG1vcmUgdGhhbiBvbmUgUG9wdXBzJztcblx0XHR9XG5cdFx0X2luc3RhbmNlID0gdHJ1ZTtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwb3B1cHM6IFtdLFxuXHRcdFx0dGltZXI6IG51bGxcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5lcnJvciA9IHRoaXMuZXJyb3IuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvcHVwID0gdGhpcy5wb3B1cC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJvY2VzcyA9IHRoaXMucHJvY2Vzcy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMud2FybmluZyA9IHRoaXMud2FybmluZy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdC8vIFRyYWNrIGFueSBwb3B1cCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdlcnJvcicsIHRoaXMuZXJyb3IpO1xuXHRcdEV2ZW50cy5hZGQoJ3BvcHVwJywgdGhpcy5wb3B1cCk7XG5cdFx0RXZlbnRzLmFkZCgnc3VjY2VzcycsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5hZGQoJ3dhcm5pbmcnLCB0aGlzLndhcm5pbmcpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgcG9wdXAgZXZlbnRzXG5cdFx0RXZlbnRzLnJlbW92ZSgnZXJyb3InLCB0aGlzLmVycm9yKTtcblx0XHRFdmVudHMucmVtb3ZlKCdwb3B1cCcsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3N1Y2Nlc3MnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMucmVtb3ZlKCd3YXJuaW5nJywgdGhpcy53YXJuaW5nKTtcblx0fVxuXG5cdGVycm9yKG1zZykge1xuXHRcdHRoaXMucG9wdXAobXNnLCAnZXJyb3InKTtcblx0fVxuXG5cdHByb2Nlc3MoKSB7XG5cblx0XHQvLyBDbG9uZSB0aGUgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlKTtcblxuXHRcdC8vIElmIHdlIHdlcmUgd2FpdGluZ1xuXHRcdGlmKHN0YXRlLnRpbWVyLnN0ZXAgPT0gMCkge1xuXG5cdFx0XHQvLyBTdGFydCB0aGUgcHJvY2VzcyB0byBoaWRlIHRoZSBmaXJzdCBwb3B1cFxuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydsJ10gPSBNQVJHSU47XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ3InXSA9IE1BUkdJTjtcblxuXHRcdFx0Ly8gU3RhcnQgdGhlIHN0ZXAgdGltZW91dHNcblx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBTVEVQX1RJTUVPVVQpO1xuXHRcdFx0c3RhdGUudGltZXIuc3RlcCA9IDE7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSBuZWVkIHRvIG1vdmUgdGhlIGZpcnN0IHBvcHVwIG9mZiB0aGUgc2NyZWVuXG5cdFx0ZWxzZSBpZihzdGF0ZS50aW1lci5zdGVwID49IDEgJiYgc3RhdGUudGltZXIuc3RlcCA8PSA0MCkge1xuXG5cdFx0XHQvLyBHZXQgdGhlIGlubmVyIHdpZHRoIG9mIHRoZSBzY3JlZW4gYW5kIGRpdmlkZSBieSB0aGUgc3RlcHNcblx0XHRcdHZhciBzdGVwID0gd2luZG93LmlubmVyV2lkdGggLyBXSURUSF9TVEVQUztcblxuXHRcdFx0Ly8gU3VidHJhY3QgaXQgZnJvbSB0aGUgbGVmdCBhbmQgcmlnaHRcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnbCddIC09IHN0ZXA7XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ3InXSArPSBzdGVwO1xuXG5cdFx0XHQvLyBTZXQgdGhlIG5leHQgdGltZW91dFxuXHRcdFx0c3RhdGUudGltZXIucmVzID0gc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIFNURVBfVElNRU9VVCk7XG5cdFx0XHRzdGF0ZS50aW1lci5zdGVwICs9IDE7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSBuZWVkIHRvIG1vdmUgdGhlIGZpcnN0IHBvcHVwIHVwXG5cdFx0ZWxzZSBpZihzdGF0ZS50aW1lci5zdGVwID49IDQxICYmIHN0YXRlLnRpbWVyLnN0ZXAgPD0gNjApIHtcblxuXHRcdFx0Ly8gSWYgd2UncmUgb24gdGhlIGZpcnN0IHN0ZXBcblx0XHRcdGlmKHN0YXRlLnRpbWVyLnN0ZXAgPT0gNDEpIHtcblx0XHRcdFx0c3RhdGUucG9wdXBzWzBdWydvaCddID0gdGhpcy5yZWZzW1wiMFwiXS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHN0YXRlLnBvcHVwc1swXVsnaCddID0gdGhpcy5yZWZzW1wiMFwiXS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdldCB0aGUgaGVpZ2h0IG9mIHRoZSBkaXYgYW5kIGRpdmlkZSBieSB0aGUgc3RlcHNcblx0XHRcdHZhciBzdGVwID0gc3RhdGUucG9wdXBzWzBdWydvaCddIC8gSEVJR0hUX1NURVBTO1xuXG5cdFx0XHQvLyBTdWJ0cmFjdCBpdCBmcm9tIHRoZSBjdXJyZW50IGhlaWdodFxuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydoJ10gLT0gc3RlcDtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXh0IHRpbWVvdXRcblx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBTVEVQX1RJTUVPVVQpO1xuXHRcdFx0c3RhdGUudGltZXIuc3RlcCArPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byByZW1vdmUgdGhlIHBvcHVwIGNvbXBsZXRlbHlcblx0XHRlbHNlIGlmKHN0YXRlLnRpbWVyLnN0ZXAgPT0gNjEpIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBjdXJyZW50IGZpcnN0IHBvcHVwXG5cdFx0XHRzdGF0ZS5wb3B1cHMuc3BsaWNlKDAsIDEpO1xuXG5cdFx0XHQvLyBJZiB3ZSBzdGlsbCBoYXZlIHBvcHVwc1xuXHRcdFx0aWYoc3RhdGUucG9wdXBzLmxlbmd0aCkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHRoZSB0aW1lciBzdGVwc1xuXHRcdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2Vzcywgc3RhdGUucG9wdXBzWzBdLnRpbWVvdXQpO1xuXHRcdFx0XHRzdGF0ZS50aW1lci5zdGVwID0gMDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgbm8gbW9yZSB0aW1lb3V0c1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0YXRlLnRpbWVyID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInBvcHVwc1wiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5wb3B1cHMubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJ319PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wb3B1cHMubWFwKChtc2csIGkpID0+IHtcblx0XHRcdFx0XHRsZXQgc3R5bGUgPSB7fVxuXHRcdFx0XHRcdGlmKHR5cGVvZiBtc2cubCAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0c3R5bGUubWFyZ2luTGVmdCA9IG1zZy5sICsgJ3B4Jztcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpblJpZ2h0ID0gbXNnLnIgKyAncHgnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0eXBlb2YgbXNnLmggIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHN0eWxlLmhlaWdodCA9IG1zZy5oICsgJ3B4Jztcblx0XHRcdFx0XHRcdHN0eWxlLnBhZGRpbmcgPSAwO1xuXHRcdFx0XHRcdFx0c3R5bGUubWFyZ2luQm90dG9tID0gMDtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpblRvcCA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSByZWY9e1wiXCIgKyBpfSBjbGFzc05hbWU9e21zZy50eXBlfSBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e1wiZmFzIGZhLVwiICsgbXNnLmljb259IC8+XG5cdFx0XHRcdFx0XHRcdHttc2cudGV4dH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cG9wdXAodGV4dCwgdHlwZSkge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyB0eXBlXG5cdFx0aWYodHlwZW9mIHR5cGUgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHR5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0fVxuXG5cdFx0dmFyIGlUaW1lb3V0ID0gMDtcblx0XHR2YXIgc0ljb24gPSAnJztcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XG5cdFx0XHRcdGlUaW1lb3V0ID0gU1VDQ0VTU19USU1FT1VUO1xuXHRcdFx0XHRzSWNvbiA9ICdjaGVjay1jaXJjbGUnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0aVRpbWVvdXQgPSBFUlJPUl9USU1FT1VUO1xuXHRcdFx0XHRzSWNvbiA9ICdleGNsYW1hdGlvbi1jaXJjbGUnO1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKHRleHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3dhcm5pbmcnOlxuXHRcdFx0XHRpVGltZW91dCA9IFdBUk5JTkdfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnZXhjbGFtYXRpb24tdHJpYW5nbGUnO1xuXHRcdFx0XHRjb25zb2xlLndhcm4odGV4dCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgXCJJbnZhbGlkIHBvcHVwIHR5cGU6IFwiICsgdHlwZTtcblx0XHR9XG5cblx0XHQvLyBDbG9uZSB0aGUgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlKTtcblxuXHRcdC8vIEFkZCB0aGUgcG9wdXBcblx0XHRzdGF0ZS5wb3B1cHMucHVzaCh7XG5cdFx0XHRpY29uOiBzSWNvbixcblx0XHRcdHRleHQ6IHRleHQsXG5cdFx0XHR0aW1lb3V0OiBpVGltZW91dCxcblx0XHRcdHR5cGU6IHR5cGVcblx0XHR9KTtcblxuXHRcdC8vIFNldCB0aGUgdGltZXJcblx0XHRpZihzdGF0ZS50aW1lciA9PSBudWxsKSB7XG5cdFx0XHRzdGF0ZS50aW1lciA9IHtcblx0XHRcdFx0cmVzOiBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgaVRpbWVvdXQpLFxuXHRcdFx0XHRzdGVwOiAwXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fVxuXG5cdHdhcm5pbmcobXNnKSB7XG5cdFx0dGhpcy5wb3B1cChtc2csICd3YXJuaW5nJyk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBzO1xuIiwiLyoqXG4gKiBIZWFkZXJcbiAqXG4gKiBNYW5hZ2VzIHNpZ24gaW4gLyBzaWduIG91dCAvIHNpZ24gdXBcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIxXG4gKi9cblxuLy8gY29tcG9uZW50c1xudmFyIEZvcm1zID0gcmVxdWlyZSgnLi9iYXNlL2Zvcm1zLmpzeCcpO1xudmFyIE1vZGFsID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tb2RhbC5qc3gnKTtcbnZhciBUaHJvd2VyID0gcmVxdWlyZSgnLi90aHJvd2VyLmpzeCcpO1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG5cbi8vIEhlYWRlciBjb21wb25lbnRcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcInRocm93ZXJcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5hY2NvdW50U2hvdyA9IHRoaXMuYWNjb3VudFNob3cuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhvbWUgPSB0aGlzLmhvbWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW5TaG93ID0gdGhpcy5zaWduaW5TaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW5UcmlnZ2VyID0gdGhpcy5zaWduaW5UcmlnZ2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0VHJpZ2dlciA9IHRoaXMuc2lnbm91dFRyaWdnZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ251cCA9IHRoaXMuc2lnbnVwLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdudXBTaG93ID0gdGhpcy5zaWdudXBTaG93LmJpbmQodGhpcyk7XG5cdH1cblxuXHRhY2NvdW50U2hvdyhldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kYWxcIjogdGhpcy5zdGF0ZS5tb2RhbCA9PSBcImFjY291bnRcIiA/IGZhbHNlIDogJ2FjY291bnQnfSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW5UcmlnZ2VyKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0VHJpZ2dlcik7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluVHJpZ2dlcik7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbm91dCcsIHRoaXMuc2lnbm91dFRyaWdnZXIpO1xuXHR9XG5cblx0aG9tZSgpIHtcblx0XHRIYXNoLnNldChcInBhZ2VcIiwgbnVsbCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnMgZnJpZ2h0IGFyaWdodFwiPlxuXHRcdFx0XHRcdHtzZWxmLnN0YXRlLnRocm93ZXIgP1xuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXIgZmEtdXNlclwiIHRpdGxlPVwiQWNjb3VudFwiIG9uQ2xpY2s9e3NlbGYuYWNjb3VudFNob3d9PjwvaT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBvd2VyLW9mZlwiIHRpdGxlPVwiU2lnbiBPdXRcIiBvbkNsaWNrPXtzZWxmLnNpZ25vdXR9PjwvaT5cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1wbHVzXCIgdGl0bGU9XCJDcmVhdGUgQWNjb3VudFwiIG9uQ2xpY2s9e3NlbGYuc2lnbnVwU2hvd30+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIiB0aXRsZT1cIlNpZ24gSW5cIiBvbkNsaWNrPXtzZWxmLnNpZ25pblNob3d9PjwvaT5cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGgxIHN0eWxlPXt7XCJjdXJzb3JcIjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0aGlzLmhvbWV9PkF4ZUdhaW5zLmNvbTwvaDE+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGFsID09ICdzaWduaW4nICYmXG5cdFx0XHRcdFx0PGRpdiBpZD1cInNpZ25pblwiIGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJhbGlhc1wiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJhbGlhc1wiIHBsYWNlaG9sZGVyPVwiYWxpYXNcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJwYXNzd2RcIiB0eXBlPVwicGFzc3dvcmRcIiB0aXRsZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXJpZ2h0XCI+PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLnNpZ25pbn0+c2lnbiBpbjwvYnV0dG9uPjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnc2lnbnVwJyAmJlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJzaWdudXBcIiBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwic2lnbnVwX2FsaWFzXCIgdHlwZT1cInRleHRcIiB0aXRsZT1cImFsaWFzXCIgcGxhY2Vob2xkZXI9XCJhbGlhc1wiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cImVtYWlsXCIgdHlwZT1cInRleHRcIiB0aXRsZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbCAobm90IHJlcXVpcmVkKVwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInNpZ251cF9wYXNzd2RcIiB0eXBlPVwicGFzc3dvcmRcIiB0aXRsZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInJlcGVhdF9wYXNzd2RcIiB0eXBlPVwicGFzc3dvcmRcIiB0aXRsZT1cInJlcGVhdCBwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicmVwZWF0IHBhc3N3b3JkXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhcmlnaHRcIj48YnV0dG9uIG9uQ2xpY2s9e3NlbGYuc2lnbnVwfT5zaWduIHVwPC9idXR0b24+PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGFsID09ICdhY2NvdW50JyAmJlxuXHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJBY2NvdW50XCJcblx0XHRcdFx0XHRcdGNsb3NlPXtzZWxmLmFjY291bnRTaG93fVxuXHRcdFx0XHRcdFx0d2lkdGg9XCI5NSVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUaHJvd2VyIC8+XG5cdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0fVxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0KTtcblx0fVxuXG5cdHNpZ25pbihldikge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBhbGlhc1xuXHRcdHZhciBhbGlhcyA9IHRoaXMucmVmcy5hbGlhcy52YWx1ZTtcblxuXHRcdC8vIENhbGwgdGhlIHNpZ25pblxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdzaWduaW4nLCB7XG5cdFx0XHRcImFsaWFzXCI6IGFsaWFzLFxuXHRcdFx0XCJwYXNzd2RcIjogdGhpcy5yZWZzLnBhc3N3ZC52YWx1ZVxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHR2YXIgZXJyb3IgPSAnICc7XG5cdFx0XHRcdHN3aXRjaChyZXMuZXJyb3IuY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgMTAwMTpcblx0XHRcdFx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCBtZXNzYWdlIGFuZCBtYWtlIHRoZSByZWYgcmVkXG5cdFx0XHRcdFx0XHRmb3IodmFyIGkgaW4gcmVzLmVycm9yLm1zZykge1xuXHRcdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbaV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMjAxOlxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0FsaWFzIG9yIHBhc3N3b3JkIGludmFsaWQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwNDpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snc2lnbnVwX3Bhc3N3ZCddKTtcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdQYXNzd29yZCBub3Qgc3Ryb25nIGVub3VnaCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgc2Vzc2lvbiB3aXRoIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFNlcnZpY2VzLnNlc3Npb24ocmVzLmRhdGEuc2Vzc2lvbik7XG5cblx0XHRcdFx0Ly8gR3JlZXQgdGhyb3dlclxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsIFwiV2VsY29tZSBiYWNrIHRvIEF4ZUdhaW5zIFwiICsgYWxpYXMpO1xuXG5cdFx0XHRcdC8vIFRyaWdnZXIgdGhlIHNpZ25pbiBldmVudFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbmluJywgcmVzLmRhdGEudGhyb3dlcik7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWduaW5TaG93KGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RhbFwiOiAodGhpcy5zdGF0ZS5tb2RhbCA9PSAnc2lnbmluJyA/IGZhbHNlIDogJ3NpZ25pbicpfSk7XG5cdH1cblxuXHRzaWduaW5UcmlnZ2VyKHRocm93ZXIpIHtcblxuXHRcdC8vIEhpZGUgYW55IG1vZGFscyBhbmQgc2V0IHRoZSB0aHJvd2VyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHRocm93ZXJcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25vdXQoZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzaWdub3V0XG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ3NpZ25vdXQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdGhlIHNlc3Npb25cblx0XHRcdFx0U2VydmljZXMuc2Vzc2lvbihudWxsKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWdub3V0IGV2ZW50XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWdub3V0Jyk7XG5cdFx0XHR9XG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbm91dFRyaWdnZXIoKSB7XG5cblx0XHQvLyBIaWRlIGFuZCBtb2RhbHMgYW5kIHNldCB0aGUgdGhyb3dlciB0byBmYWxzZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RhbFwiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0c2lnbnVwKGV2KSB7XG5cblx0XHQvLyBJZiB0aGUgYWxpYXMgaXMgbm90IGxvbmcgZW5vdWdoXG5cdFx0aWYodGhpcy5yZWZzLnNpZ251cF9hbGlhcy50cmltKCkubGVuZ3RoIDwgMykge1xuXHRcdFx0Rm9ybXMuZXJyb3JBZGQodGhpcy5yZWZzLnNpZ251cF9hbGlhcyk7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnQWxpYXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgcGFzc3dvcmRzIGRvbid0IG1hdGNoXG5cdFx0aWYodGhpcy5yZWZzLnNpZ251cF9wYXNzd2QudmFsdWUgIT0gdGhpcy5yZWZzLnJlcGVhdF9wYXNzd2QudmFsdWUpIHtcblx0XHRcdEZvcm1zLmVycm9yQWRkKHRoaXMucmVmcy5yZXBlYXRfcGFzc3dkKTtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEluaXQgdGhlIGRhdGFcblx0XHR2YXIgb0RhdGEgPSB7XG5cdFx0XHRcImFsaWFzXCI6IHRoaXMucmVmcy5zaWdudXBfYWxpYXMudmFsdWUudHJpbSgpLFxuXHRcdFx0XCJwYXNzd2RcIjogdGhpcy5yZWZzLnNpZ251cF9wYXNzd2QudmFsdWVcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGUtbWFpbFxuXHRcdGlmKHRoaXMucmVmcy5lbWFpbC52YWx1ZSkge1xuXHRcdFx0dmFyIGVtYWlsID0gdGhpcy5yZWZzLmVtYWlsLnZhbHVlLnRyaW0oKTtcblx0XHRcdGlmKGVtYWlsKSB7XG5cdFx0XHRcdG9EYXRhWydlbWFpbCddID0gZW1haWw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgc2lnbnVwXG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ3NpZ251cCcsIG9EYXRhKS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0dmFyIGVycm9yID0gJyAnO1xuXHRcdFx0XHRzd2l0Y2gocmVzLmVycm9yLmNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDEwMDE6XG5cdFx0XHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbWVzc2FnZSBhbmQgbWFrZSB0aGUgcmVmIHJlZFxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIHJlcy5lcnJvci5tc2cpIHtcblx0XHRcdFx0XHRcdFx0aWYoaSA9PSAnYWxpYXMnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aSA9ICdzaWdudXBfYWxpYXMnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYoaSA9PSAncGFzc3dkJykge1xuXHRcdFx0XHRcdFx0XHRcdGkgPSAnc2lnbnVwX3Bhc3N3ZCc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwMDpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snc2lnbnVwX2FsaWFzJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0FsaWFzIGlzIGFscmVhZHkgaW4gdXNlJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDQ6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9wYXNzd2QnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmQgbm90IHN0cm9uZyBlbm91Z2gnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwNjpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snZW1haWwnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnRS1NYWlsIGFscmVhZHkgaW4gdXNlJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBzZXNzaW9uIHdpdGggdGhlIHNlcnZpY2Vcblx0XHRcdFx0U2VydmljZXMuc2Vzc2lvbihyZXMuZGF0YS50aHJvd2VyLl9pZCk7XG5cblx0XHRcdFx0Ly8gUmV2ZXJ0IHRvIHNpZ24gaW4gYW5kIHNob3cgc3VjY2VzcyBtZXNzYWdlXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJ0aHJvd2VyXCI6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gR3JlZXQgdGhyb3dlclxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsIFwiV2VsY29tZSB0byBBeGVHYWlucyBcIiArIHJlcy5kYXRhLnRocm93ZXIuYWxpYXMpO1xuXG5cdFx0XHRcdC8vIFRyaWdnZXIgdGhlIHNpZ25pbiBldmVudFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbmluJywgcmVzLmRhdGEudGhyb3dlcik7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWdudXBTaG93KGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RhbFwiOiAodGhpcy5zdGF0ZS5tb2RhbCA9PSAnc2lnbnVwJyA/IGZhbHNlIDogJ3NpZ251cCcpfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyO1xuIiwiLyoqXG4gKiBNYXRjaFxuICpcbiAqIE1hbmFnZXMgT3JnIG1lbnUgZm9yIG1hdGNoZXMgYW5kIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIG9uZSBiYXNlZCBvbiB3aGF0XG4gKiBpcyBjaG9zZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI2XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRzXG52YXIgTmF0ZiA9IHJlcXVpcmUoJy4vbmF0Zi9tYXRjaC5qc3gnKTtcblxuLy8gTWF0Y2ggY29tcG9uZW50XG5jbGFzcyBNYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwib3JnXCI6IEhhc2guZ2V0KCdvcmcnLCAnbmF0ZicpXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMub3JnQ2hhbmdlID0gdGhpcy5vcmdDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC51bndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIG9yZyBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ29yZycsIG51bGwpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdGlmKG9yZyA9PSBudWxsKSB7XG5cdFx0XHRcdG9yZyA9ICduYXRmJztcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJtYXRjaFwiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgdGhyb3dlcj17dGhpcy5wcm9wcy50aHJvd2VyfSAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7XG4iLCIvKipcbiAqIE5BVEYgQm9hcmRcbiAqXG4gKiBNYW5hZ2VzIGEgc3RhbmRhcmQgTkFURiBib2FyZFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMTlcbiAqL1xuXG4vLyBCb2FyZCBjb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBvblBvaW50cyBwcm9wXG5cdFx0aWYoIXByb3BzLm9uUG9pbnRzKSB7XG5cdFx0XHR0aHJvdyAnbXVzdCBzcGVjaWZ5IG9uUG9pbnRzIHByb3BlcnR5IGZvciBOQVRGIEJvYXJkJztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImNsdXRjaE1vZGVcIjogcHJvcHMuY2x1dGNoTW9kZSxcblx0XHRcdFwic2VsZWN0ZWRcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5jbHV0Y2hDbGljayA9IHRoaXMuY2x1dGNoQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyb3BDbGljayA9IHRoaXMuZHJvcENsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludENsaWNrID0gdGhpcy5wb2ludENsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjbHV0Y2hDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gSWYgY2x1dGNoZXMgYXJlIG5vdCBhbGxvd2VkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdub25lJykge1xuXG5cdFx0XHQvLyBTdG9yZSB0aGUgY3VycmVudCB0YXJnZXRcblx0XHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVcblx0XHRcdHZhciBjbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGludmFsaWQgY2xhc3Ncblx0XHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIGludmFsaWQnO1xuXG5cdFx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblx0XHRcdH0sIDUwMCk7XG5cblx0XHRcdC8vIERvbid0IGNvdW50IHRoZSBjbGlja1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25Qb2ludHModHJ1ZSwgNyk7XG5cdFx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1wic2VsZWN0ZWRcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRyb3BDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBTZW5kIG91dCB0aGUgZHJvcFxuXHRcdHRoaXMucHJvcHMub25Qb2ludHModGhpcy5zdGF0ZS5zZWxlY3RlZCwgJ2QnKTtcblxuXHRcdC8vIERlLXNlbGVjdCB0aGUgY2x1dGNoIGlmIHRoZXJlJ3Mgb25lIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5yZXNldENsdXRjaCgpO1xuXHRcdH1cblxuXHRcdC8vIFR1cm4gb24gdGhlIGFjdGl2ZSBmbGFnXG5cdFx0dGFyZ2V0LmNsYXNzTmFtZSA9ICdkcm9wIGFjdGl2ZSc7XG5cblx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gJ2Ryb3AnO1xuXHRcdH0sIDUwMCk7XG5cdH1cblxuXHRyZXNldENsdXRjaCgpIHtcblxuXHRcdC8vIElmIHRoZSBtb2RlIGlzIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdzZWxlY3QnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkXCI6IGZhbHNlfSk7XG5cdFx0fVxuXHR9XG5cblx0cG9pbnRDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVzXG5cdFx0dmFyIGNsYXNzTmFtZXMgPSB0YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cblx0XHQvLyBJZiBpdCdzIGFscmVhZHkgYWN0aXZlLCBkbyBub3RoaW5nXG5cdFx0aWYoY2xhc3NOYW1lc1sxXSAmJiBjbGFzc05hbWVzWzFdID09ICdhY3RpdmUnKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgY2x1dGNoIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblBvaW50cyh0cnVlLCAwKTtcblx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5vblBvaW50cyhmYWxzZSwgcGFyc2VJbnQodGFyZ2V0LmRhdGFzZXQudmFsdWUpKTtcblx0XHR9XG5cblx0XHQvLyBUdXJuIG9uIHRoZSBhY3RpdmUgZmxhZ1xuXHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWVzWzBdICsgJyBhY3RpdmUnO1xuXG5cdFx0Ly8gQW5kIHNldCBhIHRpbWVvdXQgdG8gdHVybiBpdCBvZmZcblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbMF07XG5cdFx0fSwgNTAwKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm9hcmRcIiBkYXRhLXZhbHVlPXswfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17XCJjbHV0Y2ggbGVmdFwiICsgKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX0gb25DbGljaz17c2VsZi5jbHV0Y2hDbGlja30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcFwiIG9uQ2xpY2s9e3NlbGYuZHJvcENsaWNrfT5EUk9QPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNsdXRjaCByaWdodFwiICsgKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPyAnIHNlbGVjdGVkJyA6ICcnKX0gb25DbGljaz17c2VsZi5jbHV0Y2hDbGlja30+PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib25lXCIgZGF0YS12YWx1ZT17MX0gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRocmVlXCIgZGF0YS12YWx1ZT17M30gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZml2ZVwiIGRhdGEtdmFsdWU9ezV9IG9uQ2xpY2s9e3NlbGYucG9pbnRDbGlja30+PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHNldCBjbHV0Y2hNb2RlKG1vZGUpIHtcblxuXHRcdC8vIEZpZ3VyZSBvdXQgdGhlIHNlbGVjdGVkIHZhbHVlXG5cdFx0dmFyIHNlbGVjdGVkID0gbnVsbDtcblx0XHRzd2l0Y2gobW9kZSkge1xuXHRcdFx0Y2FzZSAnbm9uZSc6IHNlbGVjdGVkID0gZmFsc2U7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnZXhwZWN0ZWQnOiBzZWxlY3RlZCA9IHRydWU7IGJyZWFrO1xuXHRcdFx0Y2FzZSAnc2VsZWN0Jzogc2VsZWN0ZWQgPSB0aGlzLnN0YXRlLnNlbGVjdGVkOyBicmVhaztcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJjbHV0Y2hNb2RlXCI6IG1vZGUsXG5cdFx0XHRcInNlbGVjdGVkXCI6IHNlbGVjdGVkXG5cdFx0fSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gQm9hcmQ7XG4iLCIvKipcbiAqIE5BVEYgUHJhY3RpY2VcbiAqXG4gKiBNYW5hZ2VzIHRyYWNraW5nIGFuZCBzdG9yaW5nIHByYWN0aWNlIG9uIGFuIE5BVEYgYm9hcmRcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIwXG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzLmpzJyk7XG5cbi8vIFJlYWN0IGNvbXBvbmVudHNcbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4uL2VsZW1lbnRzL21vZGFsLmpzeCcpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZC5qc3gnKTtcblxuLy8gUHJhY3RpY2UgQ29tcG9uZW50XG5jbGFzcyBQcmFjdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogMCxcblx0XHRcdFwiY2x1dGNoSGl0c1wiOiAwLFxuXHRcdFx0XCJtb2RlXCI6IG51bGwsXG5cdFx0XHRcInBvaW50c1wiOiBbXSxcblx0XHRcdFwic2hvd1BvaW50c1wiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiBwcm9wcy50aHJvd2VyLFxuXHRcdFx0XCJ0b3RhbFBvaW50c1wiOiAwXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMubW9kZVNlbGVjdCA9IHRoaXMubW9kZVNlbGVjdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3ZlcndyaXRlID0gdGhpcy5vdmVyd3JpdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50cyA9IHRoaXMucG9pbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHNIaWRlID0gdGhpcy5wb2ludHNIaWRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHNTaG93ID0gdGhpcy5wb2ludHNTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBkYXRhIGluIGxvY2FsIHN0b3JhZ2Vcblx0XHRpZignbmF0Zl9wcmFjdGljZScgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0XHR2YXIgbmV3X3N0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXSk7XG5cdFx0XHRuZXdfc3RhdGUudGhyb3dlciA9IHRoaXMuc3RhdGUudGhyb3dlcjtcblx0XHRcdHRoaXMuc2V0U3RhdGUobmV3X3N0YXRlLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdzdXBlcm5hdHVyYWwnKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoICUgNSA9PSA0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnY2x1dGNoJykge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGRlbGV0ZSBsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIElmIHdlIGhhdmUgcG9pbnRzLCBzdG9yZSB0aGVtIGluIGxvY2FsIHN0b3JhZ2Vcblx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgpIHtcblx0XHRcdGxvY2FsU3RvcmFnZVsnbmF0Zl9wcmFjdGljZSddID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSk7XG5cdFx0fVxuXHR9XG5cblx0bW9kZVNlbGVjdChldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RlXCI6IGV2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tb2RlXG5cdFx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRzd2l0Y2godGhpcy5zdGF0ZS5tb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2ZyZWUnOlxuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7IGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzdXBlcm5hdHVyYWwnOlxuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnOyBicmVhaztcblx0XHRcdFx0Y2FzZSAnY2x1dGNoJzpcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7IGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0b3ZlcndyaXRlKGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJvdmVyd3JpdGVcIjogdHJ1ZX0sIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiB0aGUgbW9kZSBpcyBmcmVlXG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ2ZyZWUnKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaWYgdGhlIG1vZGUgaXMgc3VwZXJuYXR1cmFsXG5cdFx0XHRlbHNlIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3VwZXJuYXR1cmFsJykge1xuXG5cdFx0XHRcdC8vIElmIHdlJ3JlIGRpdmlzaWJsZSBieSA1XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cG9pbnRzKGNsdXRjaCwgdmFsdWUpIHtcblxuXHRcdC8vIEdldCB0aGUgaW50IHZlcnNpb24gb2YgdGhlIHZhbHVlXG5cdFx0dmFyIHYgPSBwYXJzZUludCh2YWx1ZSk7XG5cblx0XHQvLyBJZiB0aGUgb3ZlcndyaXRlIGZsYWcgaXMgc2V0XG5cdFx0aWYodGhpcy5zdGF0ZS5vdmVyd3JpdGUpIHtcblxuXHRcdFx0Ly8gR3JhYiB0aGUgbGFzdCB2YWx1ZVxuXHRcdFx0dmFyIGxhc3QgPSB0aGlzLnN0YXRlLnBvaW50c1t0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgtMV07XG5cblx0XHRcdC8vIEJhY2t0cmFjayB0aGUgY2x1dGNoIHN0YXRzXG5cdFx0XHRpZihsYXN0WzBdKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMgLT0gMTtcblx0XHRcdFx0aWYobGFzdFsxXSA9PSA3KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hIaXRzIC09IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQmFja3RyYWNrIHRoZSBwb2ludHMgc3RhdHNcblx0XHRcdGlmKGxhc3RbMV0gIT0gJ2QnKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUudG90YWxQb2ludHMgLT0gbGFzdFsxXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBsYXN0IGl0ZW1cblx0XHRcdHRoaXMuc3RhdGUucG9pbnRzLnBvcCgpO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0byB0aGUgcG9pbnRzIGxpc3Rcblx0XHR0aGlzLnN0YXRlLnBvaW50cy5wdXNoKFtjbHV0Y2gsICh2YWx1ZSA9PSAnZCcgPyB2YWx1ZSA6IHYpXSk7XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSBjbHV0Y2ggYXR0ZW1wdFxuXHRcdGlmKGNsdXRjaCkge1xuXHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hBdHRlbXB0cyArPSAxO1xuXHRcdFx0aWYodmFsdWUgPT0gNykge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmNsdXRjaEhpdHMgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSB2YWx1ZVxuXHRcdGlmKHYgPiAwKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnRvdGFsUG9pbnRzICs9IHY7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMsXG5cdFx0XHRcImNsdXRjaEhpdHNcIjogdGhpcy5zdGF0ZS5jbHV0Y2hIaXRzLFxuXHRcdFx0XCJvdmVyd3JpdGVcIjogZmFsc2UsXG5cdFx0XHRcInBvaW50c1wiOiB0aGlzLnN0YXRlLnBvaW50cyxcblx0XHRcdFwidG90YWxQb2ludHNcIjogdGhpcy5zdGF0ZS50b3RhbFBvaW50c1xuXHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdzdXBlcm5hdHVyYWwnKSB7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gNCkge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cG9pbnRzSGlkZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInNob3dQb2ludHNcIjogZmFsc2V9KTtcblx0fVxuXG5cdHBvaW50c1Nob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJzaG93UG9pbnRzXCI6IHRydWV9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHBvaW50c1xuXHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCkge1xuXG5cdFx0XHQvLyBJbml0IHRoZSBsYXN0IGluZGV4XG5cdFx0XHR2YXIgbGFzdCA9IDI4O1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGxlc3MgdGhhbiAyOVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoIDwgMjkpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAtIDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF0ZlwiPlxuXHRcdFx0XHQ8ZGwgY2xhc3NOYW1lPVwic2VsZWN0XCIgc3R5bGU9e3tcImRpc3BsYXlcIjogc2VsZi5zdGF0ZS5tb2RlID09IG51bGwgPyAnYmxvY2snOidub25lJ319PlxuXHRcdFx0XHRcdDxkdCBkYXRhLW1vZGU9XCJmcmVlXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5GcmVlIFByYWN0aWNlPC9kdD5cblx0XHRcdFx0XHQ8ZGQ+SW4gZnJlZSBwcmFjdGljZSBhbnkgcG9pbnRzIGFyZSBhdmFpbGFibGUgYXQgYW55IHRpbWUuIFlvdSBtdXN0IHNlbGVjdCB0aGUgY2x1dGNoIGZpcnN0IGlmIHlvdSB3aXNoIHRvIHRyeSBmb3IgaXQuPC9kZD5cblx0XHRcdFx0XHQ8ZHQgZGF0YS1tb2RlPVwic3VwZXJuYXR1cmFsXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5TdXBlcm5hdHVyYWw8L2R0PlxuXHRcdFx0XHRcdDxkZD5JbiBzdXBlcm5hdHVyYWwgcHJhY3RpY2UgZXZlcnkgZmlmdGggdGhyb3cgaXMgZm9yIGNsdXRjaCwgYW5kIGl0IHdpbGwgYmUgcHJlLXNlbGVjdGVkIGZvciB5b3Ugb24gdGhvc2UgdHVybnMuPC9kZD5cblx0XHRcdFx0XHQ8ZHQgZGF0YS1tb2RlPVwiY2x1dGNoXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5DbHV0Y2g8L2R0PlxuXHRcdFx0XHRcdDxkZD5JbiBjbHV0Y2ggcHJhY3RpY2UgZXZlcnkgdGhyb3cgaXMgZm9yIHRoZSBjbHV0Y2gsIGFuZCBpdCB3aWxsIGJlIHByZS1zZWxlY3RlZCBldmVyeSB0dXJuLjwvZGQ+XG5cdFx0XHRcdDwvZGw+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tcImRpc3BsYXlcIjogc2VsZi5zdGF0ZS5tb2RlID09IG51bGwgPyAnbm9uZSc6J2Jsb2NrJ319PlxuXHRcdFx0XHRcdDxCb2FyZCByZWY9XCJib2FyZFwiIGNsdXRjaE1vZGU9e3NlbGYuc3RhdGUubW9kZX0gb25Qb2ludHM9e3NlbGYucG9pbnRzfSAvPlxuXHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZlcmFnZXNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbHV0Y2hlcyBmcmlnaHRcIj48Yj5DbHV0Y2ggJTogPC9iPjxzcGFuPntzZWxmLnN0YXRlLmNsdXRjaEF0dGVtcHRzID09IDAgPyBcIjAuMFwiIDogKChzZWxmLnN0YXRlLmNsdXRjaEhpdHMgLyBzZWxmLnN0YXRlLmNsdXRjaEF0dGVtcHRzKSAqIDEwMC4wKS50b0ZpeGVkKDEpfTwvc3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYXZlcmFnZSBmbGVmdFwiPjxiPkF2ZyBUaHJvdzogPC9iPjxzcGFuPnsoc2VsZi5zdGF0ZS50b3RhbFBvaW50cyAvIHNlbGYuc3RhdGUucG9pbnRzLmxlbmd0aCkudG9GaXhlZCgyKX08L3NwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb2ludHNcIj5cblx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMubGVuZ3RoID4gMjkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGtleT17LTF9IGNsYXNzTmFtZT1cImxpbmsgYm9sZFwiIG9uQ2xpY2s9e3NlbGYucG9pbnRzU2hvd30+Li4uPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMuc2xpY2UoLTI5KS5tYXAoZnVuY3Rpb24ocCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoaSA9PSBsYXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17XCJsYXN0IFwiICsgKHNlbGYuc3RhdGUub3ZlcndyaXRlID8gJ292ZXJ3cml0ZScgOiAocFswXSA/ICdjbHV0Y2gnIDogJycpKX0gb25DbGljaz17c2VsZi5vdmVyd3JpdGV9PntwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17cFswXSA/ICdjbHV0Y2gnOicnfT57cFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXNldCBmcmlnaHRcIiBvbkNsaWNrPXtzZWxmLnJlc2V0fT5SZXNldDwvZGl2PlxuXHRcdFx0XHRcdHsodGhpcy5zdGF0ZS50aHJvd2VyICYmIHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCA+IDApICYmXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNhdmUgZmxlZnRcIiBvbkNsaWNrPXtzZWxmLnNhdmV9PlNhdmUgJiBSZXNldDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5zaG93UG9pbnRzICYmXG5cdFx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdFx0dGl0bGU9XCJBbGwgcG9pbnRzIHRoaXMgcHJhY3RpY2VcIlxuXHRcdFx0XHRcdFx0XHRjbG9zZT17c2VsZi5wb2ludHNIaWRlfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsbFBvaW50c1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5tYXAoZnVuY3Rpb24ocCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtwWzBdID8gJ2NsdXRjaCc6Jyd9PntwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVzZXQoKSB7XG5cblx0XHQvLyBJbml0IHRoZSByZXNldCBmbGFnXG5cdFx0dmFyIHJlc2V0ID0gdHJ1ZTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgcG9pbnRzXG5cdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoKSB7XG5cdFx0XHQvLyBVcGRhdGUgdGhlIGZsYWcgYmFzZWQgb24gdGhlIHVzZXIncyByZXNwb25zZVxuXHRcdFx0cmVzZXQgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQgeW91ciBwcmFjdGljZT8nKTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSBjYW4gcmVzZXRcblx0XHRpZihyZXNldCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogMCxcblx0XHRcdFx0XCJjbHV0Y2hIaXRzXCI6IDAsXG5cdFx0XHRcdFwibW9kZVwiOiBudWxsLFxuXHRcdFx0XHRcInBvaW50c1wiOiBbXSxcblx0XHRcdFx0XCJzaG93UG9pbnRzXCI6IGZhbHNlLFxuXHRcdFx0XHRcInRvdGFsUG9pbnRzXCI6IDBcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNhdmUoZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBTZW5kIHRoZSBwcmFjdGljZSB0byB0aGUgTkFURiBzZXJ2aWNlXG5cdFx0U2VydmljZXMuY3JlYXRlKCduYXRmJywgJ3ByYWN0aWNlJywge1xuXHRcdFx0XCJwb2ludHNcIjogdGhpcy5zdGF0ZS5wb2ludHNcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBOb3RpZnlcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCAnUHJhY3RpY2Ugc2F2ZWQhJyk7XG5cblx0XHRcdFx0Ly8gUmVzZXRcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJjbHV0Y2hBdHRlbXB0c1wiOiAwLFxuXHRcdFx0XHRcdFwiY2x1dGNoSGl0c1wiOiAwLFxuXHRcdFx0XHRcdFwibW9kZVwiOiBudWxsLFxuXHRcdFx0XHRcdFwicG9pbnRzXCI6IFtdLFxuXHRcdFx0XHRcdFwic2hvd1BvaW50c1wiOiBmYWxzZSxcblx0XHRcdFx0XHRcInRvdGFsUG9pbnRzXCI6IDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0aHJvd2VyfSk7XG5cdH1cblxuXHRzaWdub3V0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFByYWN0aWNlO1xuIiwiLyoqXG4gKiBOQVRGIFN0YXRzXG4gKlxuICogRmV0Y2hzIGFuZCBkaXNwbGF5cyBOQVRGIHN0YXRzIGZvciBwcmFjdGljZSBhbmQgbWF0Y2hlc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjVcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMuanMnKTtcblxuLy8gQ29tcG9uZW50c1xudmFyIE1vZGFsID0gcmVxdWlyZSgnLi4vZWxlbWVudHMvbW9kYWwuanN4Jyk7XG5cbi8vIFN0YXRzIGNvbXBvbmVudFxuY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm1hdGNoXCI6IG51bGwsXG5cdFx0XHRcInByYWN0aWNlXCI6IG51bGwsXG5cdFx0XHRcInByYWN0aWNlX2FsbFwiOiBmYWxzZSxcblx0XHRcdFwicHJhY3RpY2VfZGF0YVwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm1hdGNoU3RhdHMgPSB0aGlzLm1hdGNoU3RhdHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByYWN0aWNlRGF0YSA9IHRoaXMucHJhY3RpY2VEYXRhLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZURhdGFIaWRlID0gdGhpcy5wcmFjdGljZURhdGFIaWRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzID0gdGhpcy5wcmFjdGljZVN0YXRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzQWxsID0gdGhpcy5wcmFjdGljZVN0YXRzQWxsLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgc2lnbmluIC8gc2lnbm91dFxuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIElmIHNvbWVvbmUgaXMgbG9nZ2VkIGluXG5cdFx0aWYodGhpcy5zdGF0ZS50aHJvd2VyKSB7XG5cblx0XHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBzdGF0c1xuXHRcdFx0dGhpcy5wcmFjdGljZVN0YXRzKCk7XG5cblx0XHRcdC8vIEZldGNoIHRoZSBtYXRjaCBzdGF0c1xuXHRcdFx0Ly90aGlzLm1hdGNoU3RhdHMoKTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgc2lnbmluIC8gc2lnbm91dFxuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHR9XG5cblx0bWF0Y2hTdGF0cygpIHtcblxuXHRcdC8vIFNhdmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgbWF0Y2ggc3RhdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ21hdGNoL3N0YXRzJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgc3RhdHMgdG8gdGhlIHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwibWF0Y2hcIjogcmVzLmRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJhY3RpY2VEYXRhKGV2KSB7XG5cblx0XHQvLyBTYXZlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIHByYWN0aWNlIGRhdGFcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ3ByYWN0aWNlL2RhdGEnLCB7XG5cdFx0XHRcImlkXCI6IGV2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgc3RhdHMgdG8gdGhlIHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwicHJhY3RpY2VfZGF0YVwiOiByZXMuZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcmFjdGljZURhdGFIaWRlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wicHJhY3RpY2VfZGF0YVwiOiBmYWxzZX0pO1xuXHR9XG5cblx0cHJhY3RpY2VTdGF0cyhhbGwpIHtcblxuXHRcdC8vIElmIEFsbCBpcyBub3QgcGFzc2VkXG5cdFx0aWYodHlwZW9mIGFsbCA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0YWxsID0gZmFsc2Vcblx0XHR9XG5cblx0XHQvLyBTYXZlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIHByYWN0aWNlIHN0YXRzXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdwcmFjdGljZS9zdGF0cycsIHtcblx0XHRcdFwiYWxsXCI6IGFsbFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgc3RhdHMgdG8gdGhlIHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwicHJhY3RpY2VcIjogcmVzLmRhdGEsXG5cdFx0XHRcdFx0XCJwcmFjdGljZV9hbGxcIjogYWxsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByYWN0aWNlU3RhdHNBbGwoKSB7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzKHRydWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgcHJhY3RpY2UgPSB0aGlzLnN0YXRlLnByYWN0aWNlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdGZcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucHJhY3RpY2UgJiZcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8aDI+UHJhY3RpY2U8L2gyPlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cInByYWN0aWNlXCI+XG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJkYXRlXCI+IDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJwb2ludHNcIj5Qb2ludHM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwidGhyb3dzXCI+VGhyb3dzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cImRyb3BzXCI+RHJvcHM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49XCIyXCI+QXZlcmFnZSBQb2ludHM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49XCIzXCI+SGl0IFJhdGVzPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJhdmVyYWdlXCI+VG90YWw8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImF2ZXJhZ2VcIj5UYXJnZXQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInJhdGVcIj5Ub3RhbDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF0ZVwiPlRhcmdldDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF0ZVwiPkNsdXRjaDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5PdmVyYWxsPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucG9pbnRzLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnRocm93cy5hdHRlbXB0c308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC50aHJvd3MuZHJvcHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwuYXZlcmFnZS50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5hdmVyYWdlLnRhcmdldH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5yYXRlLnRvdGFsfSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5yYXRlLnRhcmdldH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucmF0ZS5jbHV0Y2h9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHR7cHJhY3RpY2UubGFzdC5tYXAoZnVuY3Rpb24obywgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17aX0gZGF0YS1pZD17by5faWR9IGNsYXNzTmFtZT1cInNlc3Npb25cIiBvbkNsaWNrPXtzZWxmLnByYWN0aWNlRGF0YX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntVdGlscy5kYXRlKG8uX2NyZWF0ZWQpfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnBvaW50cy50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by50aHJvd3MuYXR0ZW1wdHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28udGhyb3dzLmRyb3BzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLmF2ZXJhZ2UudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28uYXZlcmFnZS50YXJnZXR9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucmF0ZS50b3RhbH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucmF0ZS50YXJnZXR9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnJhdGUuY2x1dGNofSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHR7IXRoaXMuc3RhdGUucHJhY3RpY2VfYWxsICYmXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXt0aGlzLnByYWN0aWNlU3RhdHNBbGx9PkZldGNoIEFsbDwvcD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnByYWN0aWNlX2RhdGEgJiZcblx0XHRcdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJQcmFjdGljZSBEYXRhXCJcblx0XHRcdFx0XHRcdFx0XHRjbG9zZT17c2VsZi5wcmFjdGljZURhdGFIaWRlfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGxQb2ludHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnByYWN0aWNlX2RhdGEubWFwKGZ1bmN0aW9uKHAsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtwWzBdID8gJ2NsdXRjaCc6Jyd9PntcIlwiICsgcFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1hdGNoICYmXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHNpZ25pbih0aHJvd2VyKSB7XG5cblx0XHQvLyBTZXQgdGhlIHRocm93ZXJcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogdGhyb3dlcn0pO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIHByYWN0aWNlIHN0YXRzXG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzKCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgbWF0Y2ggc3RhdHNcblx0XHQvL3RoaXMubWF0Y2hTdGF0cygpO1xuXHR9XG5cblx0c2lnbm91dCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBTdGF0cztcbiIsIi8qKlxuICogUHJhY2l0Y2VcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBwcmFjdGljZSBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgb25lIGJhc2VkIG9uIHdoYXRcbiAqIGlzIGNob3NlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBOYXRmID0gcmVxdWlyZSgnLi9uYXRmL3ByYWN0aWNlLmpzeCcpO1xuXG4vLyBQcmFjdGljZSBjb21wb25lbnRcbmNsYXNzIFByYWN0aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJvcmdcIjogSGFzaC5nZXQoJ29yZycsICduYXRmJylcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5vcmdDaGFuZ2UgPSB0aGlzLm9yZ0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLnVud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgb3JnIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnb3JnJywgbnVsbCk7XG5cdH1cblxuXHRtZW51Q2hhbmdlKG9yZykge1xuXHRcdEhhc2guc2V0KCdvcmcnLCBvcmcpO1xuXHR9XG5cblx0b3JnQ2hhbmdlKG9yZykge1xuXHRcdGlmKG9yZyAhPSB0aGlzLnN0YXRlLm9yZykge1xuXHRcdFx0aWYob3JnID09IG51bGwpIHtcblx0XHRcdFx0b3JnID0gJ25hdGYnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJvcmdcIjogb3JnfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInByYWN0aWNlXCI+XG5cdFx0XHRcdDxNZW51IGNsYXNzTmFtZT1cIm1lbnUgc2Vjb25kYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUub3JnfSBvbkNoYW5nZT17c2VsZi5tZW51Q2hhbmdlfT5cblx0XHRcdFx0XHQ8SXRlbSBuYW1lPVwibmF0ZlwiPk5BVEY8L0l0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0PGRpdiBpZD1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUub3JnID09ICduYXRmJyAmJlxuXHRcdFx0XHRcdFx0XHQ8TmF0ZiB0aHJvd2VyPXtzZWxmLnByb3BzLnRocm93ZXJ9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBQcmFjdGljZTtcbiIsIi8qKlxuICogU2l0ZVxuICpcbiAqIFByaW1hcnkgY29tcG9uZW50IGZvciB0aGUgZW50aXJlIHNpdGVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIwXG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcbnZhciBNZXNzYWdlcyA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVzc2FnZXMuanN4Jyk7XG52YXIgUG9wdXBzID0gcmVxdWlyZSAoJy4vZWxlbWVudHMvcG9wdXBzLmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBIZWFkZXIgPSByZXF1aXJlKCcuL2hlYWRlci5qc3gnKTtcbnZhciBNYXRjaCA9IHJlcXVpcmUoJy4vbWF0Y2guanN4Jyk7XG52YXIgUHJhY3RpY2UgPSByZXF1aXJlKCcuL3ByYWN0aWNlLmpzeCcpO1xudmFyIFN0YXRzID0gcmVxdWlyZSgnLi9zdGF0cy5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRcbmNsYXNzIFNpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0IHRoZSBoYXNoIG1vZHVsZSBhbmQgd2F0Y2ggZm9yIHBhZ2UgY2hhbmdlc1xuXHRcdEhhc2guaW5pdCgpO1xuXHRcdEhhc2gud2F0Y2goJ3BhZ2UnLCB0aGlzLmhhc2hDaGFuZ2UuYmluZCh0aGlzKSlcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0LmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJwYWdlXCI6IEhhc2guZ2V0KCdwYWdlJywgJ2hvbWUnKSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLnBhZ2VDaGFuZ2UgPSB0aGlzLnBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhc2hDaGFuZ2UocGFnZSkge1xuXHRcdC8vIElmIHRoZSBwYWdlIGhhcyBjaGFuZ2VkXG5cdFx0aWYocGFnZSAhPSB0aGlzLnN0YXRlLnBhZ2UpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wicGFnZVwiOiBwYWdlID8gcGFnZSA6IFwiaG9tZVwifSlcblx0XHRcdHRoaXMucmVmcy5tZW51LnNlbGVjdGVkID0gcGFnZTtcblx0XHR9XG5cdH1cblxuXHRwYWdlQ2hhbmdlKG5hbWUpIHtcblx0XHRIYXNoLnNldChcInBhZ2VcIiwgbmFtZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU3R1cGlkIHJlYWN0XG5cdFx0dmFyIGl0ZW1zID0gW1xuXHRcdFx0Lyo8SXRlbSBrZXk9ezB9IG5hbWU9XCJnYW1lc1wiPkdhbWVzPC9JdGVtPiwqL1xuXHRcdFx0PEl0ZW0ga2V5PXsxfSBuYW1lPVwicHJhY3RpY2VcIj5QcmFjdGljZTwvSXRlbT5cblx0XHRdO1xuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXHRcdFx0aXRlbXMucHVzaCg8SXRlbSBrZXk9ezJ9IG5hbWU9XCJtYXRjaFwiPk1hdGNoPC9JdGVtPik7XG5cdFx0XHQvL2l0ZW1zLnB1c2goPEl0ZW0ga2V5PXszfSBuYW1lPVwibGVhZ3VlXCI+TGVhZ3VlPC9JdGVtPik7XG5cdFx0XHRpdGVtcy5wdXNoKDxJdGVtIGtleT17NH0gbmFtZT1cInN0YXRzXCI+U3RhdHM8L0l0ZW0+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInNpdGVcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8TWVudSByZWY9XCJtZW51XCIgY2xhc3NOYW1lPVwibWVudSBwcmltYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUucGFnZX0gb25DaGFuZ2U9e3NlbGYucGFnZUNoYW5nZX0+XG5cdFx0XHRcdFx0e2l0ZW1zfVxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ2hvbWUnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGwgaWQ9XCJob21lXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGR0PnYxLjEuMDwvZHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZhLXVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkNhbiBub3cgZmV0Y2ggYWxsIHByYWN0aWNlIHN0YXRzIGluc3RlYWQgb2YganVzdCB0aGUgbGFzdCBmaXZlLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkNsaWNraW5nIG9uIGFueSByb3cgaW4gc3RhdHMgd2lsbCBicmluZyB1cCBhbGwgdGhyb3dzIGluIHRoYXQgcHJhY3RpY2Ugc2Vzc2lvbi48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5GaXhlZCBhIGJ1ZyB0aGF0IGRpZG4ndCBhbGxvdyB5b3UgdG8gc2lnbiB1cCB3aXRoIGFuIGUtbWFpbC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5GaXhlZCBhIGJ1ZyB0aGF0IGNhdXNlZCBzaWduIGluIG5vdCB0byBiZSByZWNvZ25pc2VkIGFmdGVyIHNpZ24gdXAuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kZD5cblx0XHRcdFx0XHRcdFx0XHQ8ZHQ+djEuMC4wPC9kdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZmEtdWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+TkFURiBwcmFjdGljZSBpcyBhdmFpbGFibGUsIG5vIHNpZ24gaW4gcmVxdWlyZWQuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+V2l0aCBhbiBhY2NvdW50IHlvdSBjYW4gc2F2ZSB5b3VyIHByYWN0aWNlIHNlc3Npb24gYW5kIGtlZXAgdHJhY2sgb2YgeW91ciBvdmVyIGFsbCBwcm9ncmVzcyBpbiB0aGUgU3RhdHMgbWVudS48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2RkPlxuXHRcdFx0XHRcdFx0XHQ8L2RsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUucGFnZSA9PSAncHJhY3RpY2UnICYmXG5cdFx0XHRcdFx0PFByYWN0aWNlIHRocm93ZXI9e3NlbGYuc3RhdGUudGhyb3dlcn0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5wYWdlID09ICdtYXRjaCcgJiZcblx0XHRcdFx0XHQ8TWF0Y2ggdGhyb3dlcj17c2VsZi5zdGF0ZS50aHJvd2VyfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ3N0YXRzJyAmJlxuXHRcdFx0XHRcdDxTdGF0cyAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxQb3B1cHMgLz5cblx0XHRcdFx0PE1lc3NhZ2VzIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogdGhyb3dlcn0pO1xuXHR9XG5cblx0c2lnbm91dCgpIHtcblxuXHRcdC8vIElmIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHNpZ25lZCBpblxuXHRcdGlmKFsncHJhY3RpY2UnXS5pbmRleE9mKHRoaXMuc3RhdGUucGFnZSkgPT0gLTEpIHtcblx0XHRcdEhhc2guc2V0KCdwYWdlJywgbnVsbCk7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSB0aHJvd2VyIGZsYWdcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBTaXRlO1xuIiwiLyoqXG4gKiBTdGF0c1xuICpcbiAqIE1hbmFnZXMgT3JnIG1lbnUgZm9yIHN0YXRzIGFuZCBkaXNwbGF5IHRoZSBhcHByb3ByaWF0ZSBvbmUgYmFzZWQgb24gd2hhdFxuICogaXMgY2hvc2VuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbnZhciB7TWVudSwgSXRlbX0gPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lbnUuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50c1xudmFyIE5hdGYgPSByZXF1aXJlKCcuL25hdGYvc3RhdHMuanN4Jyk7XG5cbi8vIFN0YXRzIGNvbXBvbmVudFxuY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm9yZ1wiOiBIYXNoLmdldCgnb3JnJywgJ25hdGYnKVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm9yZ0NoYW5nZSA9IHRoaXMub3JnQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gudW53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBvcmcgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdvcmcnLCBudWxsKTtcblx0fVxuXG5cdG1lbnVDaGFuZ2Uob3JnKSB7XG5cdFx0SGFzaC5zZXQoJ29yZycsIG9yZyk7XG5cdH1cblxuXHRvcmdDaGFuZ2Uob3JnKSB7XG5cdFx0aWYob3JnICE9IHRoaXMuc3RhdGUub3JnKSB7XG5cdFx0XHRpZihvcmcgPT0gbnVsbCkge1xuXHRcdFx0XHRvcmcgPSAnbmF0Zic7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcIm9yZ1wiOiBvcmd9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwic3RhdHNcIj5cblx0XHRcdFx0PE1lbnUgY2xhc3NOYW1lPVwibWVudSBzZWNvbmRhcnlcIiBzZWxlY3RlZD17c2VsZi5zdGF0ZS5vcmd9IG9uQ2hhbmdlPXtzZWxmLm1lbnVDaGFuZ2V9PlxuXHRcdFx0XHRcdDxJdGVtIG5hbWU9XCJuYXRmXCI+TkFURjwvSXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5vcmcgPT0gJ25hdGYnICYmXG5cdFx0XHRcdFx0XHRcdDxOYXRmIHRocm93ZXI9e3NlbGYucHJvcHMudGhyb3dlcn0gLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRzO1xuIiwiLyoqXG4gKiBUaHJvd2VyXG4gKlxuICogTWFuYWdlcyBlZGl0aW5nIGRldGFpbHMgZm9yIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHRocm93ZXJcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI1XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcblxuLy8gVGhyb3dlciBjb21wb25lbnRcbmNsYXNzIFRocm93ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdiAvPlxuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFRocm93ZXI7XG4iLCIvKipcbiAqIFJlcXVlc3RzXG4gKlxuICogTWFuYWdlcyBtYXRjaCByZXF1ZXN0c1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMzFcbiAqL1xuXG4vLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuL2dlbmVyaWMvaGFzaC5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIHNwZWNpZmljXG52YXIgVHdvV2F5ID0gcmVxdWlyZSgnLi90d293YXkuanMnKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcblxuLy8gU2lnbmVkIGluIHRocm93ZXJcbl9fdGhyb3dlciA9IG51bGw7XG5cbi8vIFBlbmRpbmcgcmVxdWVzdHNcbl9fcGVuZGluZyA9IFtdO1xuXG4vKipcbiAqIEluaXRcbiAqXG4gKiBJbml0aWFsaXNlcyB0aGUgbW9kdWxlIGJ5IHRyYWNraW5nIGFueSBzaWduIGluIC8gc2lnbiBvdXQgZXZlbnRzXG4gKlxuICogQG5hbWUgX2luaXRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaW5pdCgpIHtcblxuXHQvLyBHZXQgbm90aWZpZWQgb2YgYW55IGNoYW5nZSBpbiB0aHJvd2VyXG5cdEV2ZW50cy5hZGQoJ3NpZ25pbicsIF9zaWduaW4pO1xuXHRFdmVudHMuYWRkKCdzaWdub3V0JywgX3NpZ25vdXQpO1xufVxuXG4vKipcbiAqIFBlbmRpbmdcbiAqXG4gKiBGZXRjaGVzIHBlbmRpbmcgcmVxdWVzdHNcbiAqXG4gKiBAbmFtZSBfcGVuZGluZ1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wZW5kaW5nKCkge1xuXG5cdC8vIFNob3cgdGhlIGxvYWRlclxuXHRMb2FkZXIuc2hvdygpO1xuXG5cdC8vIEZldGNoIHRoZSByZXF1ZXN0c1xuXHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ21hdGNoL3JlcXVlc3RzJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdF9wZW5kaW5nUHJvY2VzcyhyZXMuZGF0YSk7XG5cdFx0fVxuXHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdExvYWRlci5oaWRlKCk7XG5cdH0pXG59XG5cbi8qKlxuICogUGVuZGluZyBQcm9jZXNzXG4gKlxuICogUHJvY2Vzc2VzIGFueSBwZW5kaW5nIHJlcXVlc3RzIHRoYXQgYXJlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxuICpcbiAqIEBuYW1lIF9wZW5kaW5nUHJvY2Vzc1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wZW5kaW5nUHJvY2VzcyhyZXF1ZXN0cykge1xuXG5cdC8vIFN0b3JlIHRoZSBwZW5kaW5nIHJlcXVlc3RzXG5cdF9fcGVuZGluZyA9IHJlcXVlc3RzO1xuXG5cdC8vIEdvIHRocm91Z2ggZWFjaCBpbiB3aGljaCB0aGUgdGhyb3dlciBpcyB0aGUgb3Bwb25lbnRcblx0Zm9yKHZhciBvIG9mIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG8uX2lkLCB7XG5cdFx0XHRcInRleHRcIjogXCJZb3UgaGF2ZSBhbiBcIiArIG8ub3JnICsgXCIgbWF0Y2ggcmVxdWVzdCBmcm9tIFwiICtcblx0XHRcdFx0XHRvLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHN0YXJ0IHRoaXMgbWF0Y2ggbm93P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWNsaW5lXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWNsaW5lfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJBY2NlcHRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdEFjY2VwdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEdvIHRocm91Z2ggZWFjaCBpbiB3aGljaCB0aGUgdGhyb3dlciBpcyB0aGUgaW5pdGlhdG9yXG5cdGZvcih2YXIgbyBvZiBfX3BlbmRpbmdbJ2luaXRpYXRvciddKSB7XG5cblx0XHQvLyBBZGQgYSBuZXcgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlJywgby5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBpbml0aWF0ZWQgYW4gXCIgKyBvLm9yZyArIFwiIG1hdGNoIHdpdGggXCIgK1xuXHRcdFx0XHRcdG8uYWxpYXMgKyBcIi4gRG8geW91IHdhbnQgdG8gd2FpdCBmb3IgdGhpcyBtYXRjaCB0byBzdGFydD9cIixcblx0XHRcdFwiYnV0dG9uc1wiOiBbXG5cdFx0XHRcdHtcInRpdGxlXCI6IFwiRGVsZXRlXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWxldGV9LFxuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIldhaXRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdFdhaXR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXF1ZXN0IEFjY2VwdFxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBhY2NlcHRlZCBieSB0aGUgb3Bwb25lbnRcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdEFjY2VwdFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0QWNjZXB0KGlkKSB7XG5cblx0Ly8gTGV0IHRoZSBzZXJ2ZXIga25vdyB0aGUgbWF0Y2ggd2FzIGFjY2VwdGVkXG5cdFNlcnZpY2VzLnVwZGF0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFwiaWRcIjogaWRcblx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHQvLyBGaW5kIHRoZSBwZW5kaW5nIG1hdGNoLCBzdG9yZSBpdCwgdGhlbiByZW1vdmUgaXQgZnJvbSBwZW5kaW5nXG5cdFx0XHR2YXIgcmVxID0gbnVsbDtcblx0XHRcdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ29wcG9uZW50J10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRcdHJlcSA9IF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXTtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdEhhc2guc2V0KHtcblx0XHRcdFx0XCJwYWdlXCI6IFwibWF0Y2hcIixcblx0XHRcdFx0XCJvcmdcIjogcmVxLm9yZy50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcImlkXCI6IFwibXxcIiArIHJlcy5kYXRhICsgXCJ8XCIgKyByZXEuYWxpYXNcblx0XHRcdH0pXG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGFjY2VwdGVkXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgRGVjbGluZVxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBkZWNsaW5lZCBieSB0aGUgb3Bwb25lbnRcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdERlY2xpbmVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlY2xpbmUoaWQpIHtcblxuXHQvLyBMZXQgdGhlIHNlcnZlciBrbm93IHRoZSBtYXRjaCB3YXMgZGVjbGluZWRcblx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cdFx0XHRcdGlmKF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGRlbGV0ZWRcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmVxdWVzdCBEZWxldGVcbiAqXG4gKiBDYWxsZWQgd2hlbiBhIG1hdGNoIHJlcXVlc3QgaXMgZGVsZXRlZCBieSB0aGUgaW5pdGlhdG9yXG4gKlxuICogQG5hbWUgX3JlcXVlc3REZWxldGVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlbGV0ZShpZCkge1xuXG5cdC8vIExldCB0aGUgc2VydmVyIGtub3cgd2UgYXJlIHJlbW92aW5nIG91ciByZXF1ZXN0XG5cdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFwiaWRcIjogaWRcblx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHQvLyBEZWxldGUgdGhlIHJlcXVlc3QgZnJvbSB0aGUgcGVuZGluZ1xuXHRcdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ2luaXRpYXRvciddLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgZGVsZXRlZFxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IE5ld1xuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB0aHJvd2VyIHJlY2lldmVzIGEgbmV3IG1hdGNoIHJlcXVlc3RcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdE5ld1xuICogQHBhcmFtIG9iamVjdCBtc2dcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdE5ldyhtc2cpIHtcblxuXHQvLyBJZiB0aGlzIGlzIGEgbmV3IHJlcXVlc3Rcblx0aWYobXNnLnR5cGUgPT0gJ21hdGNoX3JlcXVlc3QnKSB7XG5cblx0XHQvLyBBZGQgaXQgdG8gdGhlIHBlbmRpbmdcblx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10ucHVzaChtc2cpO1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG1zZy5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBoYXZlIGFuIFwiICsgbXNnLm9yZyArIFwiIG1hdGNoIHJlcXVlc3QgZnJvbSBcIiArXG5cdFx0XHRcdFx0bXNnLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHN0YXJ0IHRoaXMgbWF0Y2ggbm93P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWNsaW5lXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWNsaW5lfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJBY2NlcHRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdEFjY2VwdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEVsc2UgaWYgd2UgbmVlZCB0byBkZWxldGVcblx0ZWxzZSBpZihtc2cudHlwZSA9PSBcIm1hdGNoX3JlcXVlc3RfZGVsZXRlXCIpIHtcblxuXHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBtc2cuaWQpIHtcblx0XHRcdFx0X19wZW5kaW5nWydvcHBvbmVudCddLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBtc2cuaWQpO1xuXHR9XG59XG5cbi8qKlxuICogUmVxdWVzdCBXYWl0XG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIGluaXRpYXRvciBvZiBhIG1hdGNoIHJlcXVlc3QgaGFzIGNob3NlbiB0byB3YWl0IGZvciBpdFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0V2FpdFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0V2FpdChpZCkge1xuXG5cdC8vIEZpbmQgdGhlIHBlbmRpbmcgbWF0Y2gsIHN0b3JlIGl0LCB0aGVuIHJlbW92ZSBpdCBmcm9tIHBlbmRpbmdcblx0dmFyIHJlcSA9IG51bGw7XG5cdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ2luaXRpYXRvciddKSB7XG5cdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdHJlcSA9IF9fcGVuZGluZ1snaW5pdGlhdG9yJ11baV07XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hhbmdlIHRoZSBwYWdlIGFuZCBzdG9yZSB0aGUgcmVxdWVzdCBpbmZvXG5cdEhhc2guc2V0KHtcblx0XHRcInBhZ2VcIjogXCJtYXRjaFwiLFxuXHRcdFwib3JnXCI6IHJlcS5vcmcudG9Mb3dlckNhc2UoKSxcblx0XHRcImlkXCI6IFwicnxcIiArIHJlcS5faWQgKyAnfCcgKyByZXEuYWxpYXNcblx0fSlcblxuXHQvLyBSZXR1cm4gT0tcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogU2lnbmluXG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2lnbnMgaW4gKG9yIHdhcyBhbHJlYWR5IHNpZ25lZCBpbikuIEZldGNoZXMgcGVuZGluZ1xuICogcmVxdWVzdHMgYW5kIHN0YXJ0cyB0cmFja2luZyBhbnkgbmV3IHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25pblxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9zaWduaW4odGhyb3dlcikge1xuXG5cdC8vIFN0b3JlIHRoZSB0aHJvd2VyXG5cdF9fdGhyb3dlciA9IHRocm93ZXIuX2lkO1xuXG5cdC8vIEZldGNoIHRoZSBwZW5kaW5nIHJlcXVlc3RzXG5cdF9wZW5kaW5nKCk7XG5cblx0Ly8gVHJhY2sgYW55IG5ldyByZXF1ZXN0c1xuXHRUd29XYXkudHJhY2soXG5cdFx0J2F1dGgnLCAncmVxdWVzdHMtJyArIF9fdGhyb3dlcixcblx0XHRfcmVxdWVzdE5ld1xuXHQpO1xufVxuXG4vKipcbiAqIFNpZ25vdXRcbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzaWducyBvdXQgb3IgaXMgc2lnbmVkIG91dC4gUmVtb3ZlcyBhbGwgbWVzc2FnZXMgYW5kXG4gKiBzdG9wcyB0cmFja2luZyByZXF1ZXN0c1xuICpcbiAqIEBuYW1lIF9zaWdub3V0XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3NpZ25vdXQoKSB7XG5cblx0Ly8gRGVsZXRlIGFsbCBtZXNzYWdlc1xuXHRmb3IodmFyIG8gaW4gX19wZW5kaW5nKSB7XG5cdFx0RXZlbnRzLnRyaWdnZXIoJ21lc3NhZ2VfcmVtb3ZlJywgby5faWQpO1xuXHR9XG5cblx0Ly8gU3RvcCB0cmFja2luZyB0aGUgdGhyb3dlclxuXHRUd29XYXkudW50cmFjayhcblx0XHQnYXV0aCcsICdyZXF1ZXN0cy0nICsgX190aHJvd2VyLFxuXHRcdF9yZXF1ZXN0TmV3XG5cdCk7XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbml0XCI6IF9pbml0LFxufVxuIiwiLyoqXG4gKiBUd28gV2F5XG4gKlxuICogQWxsb3dzIGNsaWVudHMgdG8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB2aWEgd2Vic29ja2V0IHNvIGV2ZW50cyBjYW4gYmVcbiAqIHRyYWNrZWQgaW4gcmVhbCB0aW1lXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yOVxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvdG9vbHMuanMnKTtcbnZhciBXU0hlbHBlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy93ZWJzb2NrZXQuanMnKTtcblxuLy8gVGhlIHBpbmcgdGltZXJcbnZhciBfX3BpbmcgPSBudWxsO1xuXG4vLyBUaGUgdmFsaWQgY2xvc2UgZmxhZ1xudmFyIF9fY2xvc2UgPSBmYWxzZTtcblxuLy8gVGhlIHdlYnNvY2tldFxudmFyIF9fc29ja2V0ID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgc2VydmljZSBjYWxsYmFja3NcbiAqXG4gKiB3aWxsIGNvbnRhaW4gYSBzdHJpbmcgZm9yIHRoZSBzZXJ2aWNlIC8ga2V5IHdpdGggY2FsbGJhY2tzIGZvciB0aG9zZSBrZXlzLFxuICogZS5nLiB7XG4gKlx0XCJzZXJ2aWNlMVwiOiB7XG4gKlx0XHRcImtleTFcIjogW2Z1bmN0aW9uMSwgZnVuY3Rpb24yXSxcbiAqXHRcdFwia2V5MlwiOiBbZnVuY3Rpb24zXVxuICpcdH0sXG4gKlx0XCJzZXJ2aWNlMlwiOiB7XG4gKlx0XHRcImtleTNcIjogW2Z1bmN0aW9uNF1cbiAqXHR9XG4gKiB9XG4gKi9cbnZhciBfX3NlcnZpY2VzID0ge307XG5cbi8qKlxuICogQWRkIFRyYWNrXG4gKlxuICogQWRkcyB0cmFja2luZyBmb3IgYSBzcGVjaWZpYyBzZXJ2aWNlIGtleVxuICpcbiAqIEBuYW1lIF9hZGRUcmFja1xuICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXG4gKiBAcGFyYW0gc3RyaW5nIGtleVxuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2FkZFRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB3ZSBkb24ndCBoYXZlIHRoZSBzZXJ2aWNlLCBhZGQgaXRcblx0aWYoIShzZXJ2aWNlIGluIF9fc2VydmljZXMpKSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXSA9IHt9XG5cdH1cblxuXHQvLyBJZiB3ZSBkb24ndCBoYXZlIHRoZSBrZXkgZm9yIHRoZSBnaXZlbiBzZXJ2aWNlLCBhZGQgdGhlIGxpc3Qgd2l0aFxuXHQvL1x0dGhlIGNhbGxiYWNrXG5cdGlmKCEoa2V5IGluIF9fc2VydmljZXNbc2VydmljZV0pKSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldID0gW2NhbGxiYWNrXVxuXHR9XG5cblx0Ly8gRWxzZSwgYWRkIHRoZSBjYWxsYmFjaywgdG8gdGhlIGdpdmVuIHNlcnZpY2Uva2V5XG5cdGVsc2Uge1xuXHRcdF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblx0fVxufVxuXG4vKipcbiAqIEhhbmRsZSBDbG9zZVxuICpcbiAqIENoZWNrcyBpZiBpdCdzIGEgbGVnaXRpbWF0ZSBjbG9zZWQgc29ja2V0LCBvciBpZiB3ZSBuZWVkIHRvIHJlY29ubmVjdCB0b1xuICogZXZlcnl0aGluZ1xuICpcbiAqIEBuYW1lIF9oYW5kbGVDbG9zZVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9oYW5kbGVDbG9zZSgpIHtcblxuXHQvLyBJZiBpdCdzIGEgdmFsaWQgY2xvc2Vcblx0aWYoX19jbG9zZSkge1xuXHRcdF9fc29ja2V0ID0gbnVsbDtcblx0fVxuXG5cdC8vIEVsc2UsIHdhaXQgNSBzZWNvbmRzLCBhbmQgcmVvcGVuIHRoZSBzb2NrZXRcblx0ZWxzZSB7XG5cdFx0c2V0VGltZW91dChfb3BlblNvY2tldCwgNTAwMCk7XG5cdH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgTWVzc2FnZXNcbiAqXG4gKiBSZWNpZXZlcyBtZXNzYWdlcyBmcm9tIHdlYnNvY2tldHMgYW5kIGRpcmVjdHMgdGhlIGRhdGEgdG8gdGhlIGFwcHJvcHJpYXRlXG4gKiBjYWxsYmFja1xuICpcbiAqIEBuYW1lIF9oYW5kbGVNZXNzYWdlXG4gKiBAcGFyYW0gV2ViU29ja2V0IHNvY2tcdFx0VGhlIHNvY2tldCB0aGUgbWVzc2FnZSBjYW1lIG9uXG4gKiBAcGFyYW0gTWVzc2FnZUV2ZW50IGV2XHRcdFRoZSBldmVudCBtZXNzYWdlIHJlY2VpdmVkXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhbmRsZU1lc3NhZ2Uoc29jaywgZXYpIHtcblxuXHQvLyBJZiBpdCdzIHBvbmdcblx0aWYoZXYuZGF0YSA9PSAncG9uZycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTY3JldyB5b3UgamF2YXNjcmlwdFxuXHR2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBQYXJzZSB0aGUgZGF0YVxuXHRcdG9Nc2cgPSBKU09OLnBhcnNlKHIucmVzdWx0KTtcblxuXHRcdC8vIElmIHdlIGhhdmUgdGhlIHNlcnZpY2Vcblx0XHRpZihvTXNnLnNlcnZpY2UgaW4gX19zZXJ2aWNlcykge1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBrZXlcblx0XHRcdGlmKG9Nc2cua2V5IGluIF9fc2VydmljZXNbb01zZy5zZXJ2aWNlXSkge1xuXG5cdFx0XHRcdC8vIENhbGwgZWFjaCBjYWxsYmFja1xuXHRcdFx0XHRmb3IodmFyIGYgb2YgX19zZXJ2aWNlc1tvTXNnLnNlcnZpY2VdW29Nc2cua2V5XSkge1xuXHRcdFx0XHRcdGYob01zZy5kYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cdHIucmVhZEFzVGV4dChldi5kYXRhKTtcbn1cblxuLyoqXG4gKiBPcGVuIFNvY2tldFxuICpcbiAqIE9wZW5zIGEgbmV3IHdlYnNvY2tldCBieSBmaXJzdCBzZW5kaW5nIGEgbWVzc2FnZSB0byB3ZWJwb2xsIHRvIHN0YXJ0IHRoZVxuICogYXV0aGVudGljYXRpb24gaGFuZHNoYWtlLCB0aGVuIG1ha2luZyB0aGUgY29ubmVjdGlvbiwgYW5kIGZpbmFsbHkgc2VuZGluZ1xuICogYWxsIHRoZSB0cmFjayBtZXNzYWdlcyBzdG9yZWRcbiAqXG4gKiBAbmFtZSBfb3BlblNvY2tldFxuICogQHBhcmFtXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX29wZW5Tb2NrZXQoKSB7XG5cblx0Ly8gTm90aWZ5IHRoZSBiYWNrZW5kIG9mIGEgbmV3IHdzIGNvbm5lY3Rpb25cblx0U2VydmljZXMucmVhZCgnd2VicG9sbCcsICd3ZWJzb2NrZXQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSB3ZWJzb2NrZXRcblx0XHRfX3NvY2tldCA9IFdTSGVscGVyKCd3c3M6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJy93cycsIHtcblx0XHRcdFwib3BlblwiOiBmdW5jdGlvbihzb2NrKSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNsb3NlIGZsYWdcblx0XHRcdFx0X19jbG9zZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIEluaXQgdGhlIG1lc3NhZ2UgbGlzdFxuXHRcdFx0XHRsTXNncyA9IFtdO1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgY29ubmVjdCBtZXNzYWdlXG5cdFx0XHRcdGxNc2dzLnB1c2goe1xuXHRcdFx0XHRcdFwiX3R5cGVcIjogXCJjb25uZWN0XCIsXG5cdFx0XHRcdFx0XCJrZXlcIjogcmVzLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQWRkIGVhY2ggdHJhY2sgbWVzc2FnZVxuXHRcdFx0XHRmb3IodmFyIHMgaW4gX19zZXJ2aWNlcykge1xuXHRcdFx0XHRcdGZvcih2YXIgayBpbiBfX3NlcnZpY2VzW3NdKSB7XG5cdFx0XHRcdFx0XHRsTXNncy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcInRyYWNrXCIsXG5cdFx0XHRcdFx0XHRcdFwic2VydmljZVwiOiBzLFxuXHRcdFx0XHRcdFx0XHRcImtleVwiOiBrXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZW5kIHRoZSBtZXNzYWdlc1xuXHRcdFx0XHRzb2NrLnNlbmQoSlNPTi5zdHJpbmdpZnkobE1zZ3MpKVxuXHRcdFx0fSxcblx0XHRcdFwibWVzc2FnZVwiOiBfaGFuZGxlTWVzc2FnZSxcblx0XHRcdFwiY2xvc2VcIjogX2hhbmRsZUNsb3NlXG5cdFx0fSk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlbid0IGFscmVhZHkgc2V0dXAgdGhlIHBpbmcgaW50ZXJ2YWxcblx0XHRpZihfX3BpbmcgPT0gbnVsbCkge1xuXHRcdFx0X19waW5nID0gc2V0SW50ZXJ2YWwoX3BpbmcsIDMwMDAwMCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBQaW5nXG4gKlxuICogU2VuZCBhIHBpbmcgdG8ga2VlcCB0aGUgc29ja2V0IGFsaXZlXG4gKlxuICogQG5hbWUgX3BpbmdcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcGluZygpIHtcblxuXHQvLyBTZW5kIGEgcGluZyBtZXNzYWdlIG92ZXIgdGhlIHNvY2tldCB0byBrZWVwIGl0IGFsaXZlXG5cdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFwiX3R5cGVcIjogXCJwaW5nXCJcblx0fSkpO1xufVxuXG4vKipcbiAqIFRyYWNrXG4gKlxuICogVGFrZXMgYSBVUkwgYW5kIGFuIGV2ZW50IHR5cGUgYW5kIGEpIG9wZW5zIGEgbmV3IHdlYnNvY2tldCBvciB1c2VzIGFuXG4gKiBleGlzdGluZyBvbmUsIHRoZW4gYikgc2VuZHMgYSB0cmFja2luZyBtZXNzYWdlIHRocm91Z2ggdGhlIHdlYnNvY2tldCBzbyB0aGVcbiAqIGJhY2tlbmQga25vd3NuIHRvIHNlbmQgdGhlIGtleSB0eXBlIHRvIHVzXG4gKlxuICogQG5hbWUgX3RyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdGhlIGtleSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSBzdHJpbmcga2V5XHRcdFx0VGhlIGtleSB0byB0cmFja1xuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBjYWxsYmFjayBmb3IgYW55IG1lc3NhZ2VzIG9mIHRoZSBrZXkgdmFsdWVcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfdHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIEFkZCB0aGUgdHJhY2tpbmcgY2FsbGJhY2tcblx0X2FkZFRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spO1xuXG5cdC8vIElmIHdlIGhhdmUgbm8gc29ja2V0XG5cdGlmKCFfX3NvY2tldCkge1xuXG5cdFx0Ly8gSWYgaXQncyBudWxsXG5cdFx0aWYoX19zb2NrZXQgPT0gbnVsbCkge1xuXG5cdFx0XHQvLyBTZXQgc29ja2V0IHRvIGZhbHNlIHNvIHdlIGRvbid0IHRyeSB0byByZS1vcGVuXG5cdFx0XHRfX3NvY2tldCA9IGZhbHNlO1xuXG5cdFx0XHQvLyBPcGVuIGEgbmV3IG9uZVxuXHRcdFx0X29wZW5Tb2NrZXQoKTtcblx0XHR9XG5cdH1cblxuXHQvLyBFbHNlIGlmIGl0J3Mgb3BlblxuXHRlbHNlIGlmKF9fc29ja2V0LnJlYWR5U3RhdGUgPT0gMSkge1xuXG5cdFx0Ly8gU2VuZCB0aGUgdHJhY2tpbmcgbWVzc2FnZSB0aHJvdWdoIHRoZSB3ZWJzb2NrZXRcblx0XHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiX3R5cGVcIjogXCJ0cmFja1wiLFxuXHRcdFx0XCJzZXJ2aWNlXCI6IHNlcnZpY2UsXG5cdFx0XHRcImtleVwiOiBrZXlcblx0XHR9KSk7XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIG5vIHNvY2tldCwgb3IgaXQncyBvcGVuaW5nLCB0aGVuIHVwb24gb3BlbmluZyBhbGwgc2Vydml2ZXMvXG5cdC8vXHRrZXlzIGluIHRoZSB0cmFja2luZyBsaXN0IHdpbGwgYmUgc2VudCBhcyBtZXNzYWdlc1xufVxuXG4vKipcbiAqIFVudHJhY2tcbiAqXG4gKiBSZW1vdmVzIGEgY2FsbGJhY2sgYW5kIG5vdGlmaWVzIHRoZSB3ZWJzb2NrZXQgd2UgYXJlIG5vdCB0cmFja2luZyBhbnltb3JlXG4gKlxuICogQG5hbWUgX3VudHJhY2tcbiAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0aGUga2V5IGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHN0cmluZyBrZXlcdFx0XHRUaGUga2V5IHRvIHVudHJhY2tcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgYXNzb2NpYXRlZCB3aXRoIHRoZSB0cmFja1xuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF91bnRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB3ZSBoYXZlIHRoZSBzZXJ2aWNlXG5cdGlmKHNlcnZpY2UgaW4gX19zZXJ2aWNlcykge1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSB0aGUga2V5XG5cdFx0aWYoa2V5IGluIF9fc2VydmljZXNbc2VydmljZV0pIHtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGNhbGxiYWNrXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLmxlbmd0aDsgKytpKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGNhbGxiYWNrIG1hdGNoZXNcblx0XHRcdFx0aWYoY2FsbGJhY2sgPT0gX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldW2ldKSB7XG5cblx0XHRcdFx0XHQvLyBSZW1vdmUgdGhlIGNhbGxiYWNrXG5cdFx0XHRcdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLnNwbGljZShpLCAxKTtcblxuXHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgbm8gbW9yZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRpZihfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0ubGVuZ3RoID09IDApIHtcblxuXHRcdFx0XHRcdFx0Ly8gTm90aWZ5IHRoZSB3ZWJzb2NrZXQgd2UgYXJlbid0IHRyYWNraW5nIHRoZSBrZXlcblx0XHRcdFx0XHRcdC8vXHRhbnltb3JlXG5cdFx0XHRcdFx0XHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcInVudHJhY2tcIixcblx0XHRcdFx0XHRcdFx0XCJzZXJ2aWNlXCI6IHNlcnZpY2UsXG5cdFx0XHRcdFx0XHRcdFwia2V5XCI6IGtleVxuXHRcdFx0XHRcdFx0fSkpO1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgdGhlIGtleVxuXHRcdFx0XHRcdFx0ZGVsZXRlIF9fc2VydmljZXNbc2VydmljZV1ba2V5XTtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBubyBtb3JlIGtleXMgaW4gdGhlIHNlcnZpY2Vcblx0XHRcdFx0XHRcdGlmKFRvb2xzLmVtcHR5KF9fc2VydmljZXNbc2VydmljZV0pKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBfX3NlcnZpY2VzW3NlcnZpY2VdO1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gbW9yZSBzZXJ2aWNlc1xuXHRcdFx0XHRcdFx0XHRpZihUb29scy5lbXB0eShfX3NlcnZpY2VzKSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVHVybiBvZmYgdGhlIHBpbmcgaW50ZXJ2YWxcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9fcGluZyk7XG5cdFx0XHRcdFx0XHRcdFx0X19waW5nID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENsb3NlIHRoZSBzb2NrZXRcblx0XHRcdFx0XHRcdFx0XHRfX2Nsb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRfX3NvY2tldC5jbG9zZSgxMDAwLCAnbm90aGluZyBlbHNlIHRvIHRyYWNrJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDYWxsYmFjayBmb3VuZCBhbmQgcmVtb3ZlZFxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FsbGJhY2sgbm90IGZvdW5kXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLy8gZXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRyYWNrXCI6IF90cmFjayxcblx0XCJ1bnRyYWNrXCI6IF91bnRyYWNrXG59XG4iLCIvKipcbiAqIFV0aWxzXG4gKlxuICogU2hhcmVkIHV0aWxpdGllc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjRcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG5cbi8qKlxuICogVXRpbHNcbiAqL1xudmFyIFV0aWxzID0ge1xuXG5cdGRhdGU6IGZ1bmN0aW9uKHRzKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSh0cyoxMDAwKTtcblx0XHR2YXIgWSA9ICcnICsgZC5nZXRGdWxsWWVhcigpO1xuXHRcdHZhciBNID0gJycgKyAoZC5nZXRNb250aCgpICsgMSk7XG5cdFx0aWYoTS5sZW5ndGggPT0gMSkgTSA9ICcwJyArIE07XG5cdFx0dmFyIEQgPSAnJyArIGQuZ2V0RGF0ZSgpO1xuXHRcdGlmKEQubGVuZ3RoID09IDEpIEQgPSAnMCcgKyBEO1xuXHRcdHJldHVybiBZICsgJy8nICsgTSArICcvJyArIEQ7XG5cdH0sXG5cblx0ZXJyb3JUcmVlOiBmdW5jdGlvbihlcnJvcnMpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJldHVyblxuXHRcdHZhciBvUmV0ID0ge31cblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBlcnJvclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIGVycm9yIGZpZWxkIGhhcyBhIHBlcmlvZFxuXHRcdFx0aWYoZXJyb3JzW2ldWzBdLmluY2x1ZGVzKCcuJykpIHtcblxuXHRcdFx0XHQvLyBTcGxpdCBpdFxuXHRcdFx0XHRsRmllbGQgPSBlcnJvcnNbaV1bMF0uc3BsaXQoL1xcLiguKikvKVxuXG5cdFx0XHRcdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIGZpZWxkIGFscmVhZHlcblx0XHRcdFx0aWYoIW9SZXRbbEZpZWxkWzBdXSkge1xuXHRcdFx0XHRcdG9SZXRbbEZpZWxkWzBdXSA9IFtdXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZGQgdGhlIHJlc3Rcblx0XHRcdFx0b1JldFtsRmllbGRbMF1dLnB1c2goW2xGaWVsZFsxXSwgZXJyb3JzW2ldWzFdXSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaXQncyBhIGZsYXQgZmllbGRcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvUmV0W2Vycm9yc1tpXVswXV0gPSBlcnJvcnNbaV1bMV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBhbGwgdGhlIGVycm9ycyB3ZSBmb3VuZFxuXHRcdGZvcihsZXQgayBpbiBvUmV0KSB7XG5cblx0XHRcdC8vIElmIHdlIGZpbmQgYW4gYXJyYXlcblx0XHRcdGlmKEFycmF5LmlzQXJyYXkob1JldFtrXSkpIHtcblxuXHRcdFx0XHQvLyBSZWN1cnNlXG5cdFx0XHRcdG9SZXRba10gPSBVdGlscy5lcnJvclRyZWUob1JldFtrXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBUcmVlXG5cdFx0cmV0dXJuIG9SZXQ7XG5cdH0sXG5cblx0c2VydmljZUVycm9yOiBmdW5jdGlvbihlcnIpIHtcblxuXHRcdC8vIFdoYXQgZXJyb3IgaXMgaXQ/XG5cdFx0c3dpdGNoKGVyci5jb2RlKSB7XG5cblx0XHRcdC8vIE5vIFNlc3Npb25cblx0XHRcdGNhc2UgMTAyOlxuXG5cdFx0XHRcdC8vIFRyaWdnZXIgc2lnbm91dFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcihcInNpZ25vdXRcIik7XG5cblx0XHRcdFx0Ly8gTm90aGluZyBlbHNlIHRvIGRvXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHQvLyBJbnZhbGlkIGZpZWxkc1xuXHRcdFx0Y2FzZSAxMDAxOlxuXG5cdFx0XHRcdC8vIFJlYnVpbGQgdGhlIGVycm9yIG1lc3NhZ2Vcblx0XHRcdFx0ZXJyLm1zZyA9IFV0aWxzLmVycm9yVHJlZShlcnIubXNnKTtcblxuXHRcdFx0XHQvLyBCdXQgYWxsb3cgdGhlIGNoaWxkIHRvIGRlYWwgd2l0aCB0aGUgbWVzc2FnZXMgdGhlbXNlbHZlc1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRmFpbGVkIHRvIHByb2Nlc3MgZXJyb3Jcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9