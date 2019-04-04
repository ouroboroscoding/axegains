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
      "match_state": false,
      "mode": "opponent",
      "thrower": props.thrower,
      "throwerIs": '',
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
        "round": 1,
        "throw": 1
      }; // Are we opponent or initiator

      var t = this.state.thrower == data.initiator ? 'i' : 'o'; // If there's any bigaxe data it's safe to assume we're done with the
      //	regular match

      if (data.bigaxe && !Tools.empty(data.bigaxe)) {
        // If we have points
        if (data.bigaxe.points && data.bigaxe.points.length) {
          // Set bigaxe to points
          state.bigaxe = 'points'; // Step through the points

          for (var i = 0; i < data.bigaxe.points.length; ++i) {
            if (typeof data.bigaxe.points[i][t] == 'undefined') {
              state.round = i;
            }
          }
        } // Else we're still on target
        else {
            // Set bigaxe to target
            state.bigaxe = 'target'; // Step through the target

            for (var i; i < data.bigaxe.target.length; ++i) {
              if (typeof data.bigaxe.target[i][t] == 'undefined') {
                state.round = i;
              }
            }
          }
      } // Else, assume we are in games
      else {
          // Go through each game
          var g = 1;

          for (; g <= 3; ++i) {
            // As a string
            var sG = g.toString(); // If it doesn't exist

            if (typeof data.games[sG] == 'undefined') {
              break;
            } // If there's no data for the thrower


            if (typeof data.games[sG][t] == 'undefined') {
              break;
            } // Go through each round


            var r = 1;

            for (; r <= 5; ++r) {
              // As a string
              var sR = r.toString(); // If it doesn't exist

              if (typeof data.games[sG][t][sR] == 'undefined') {
                break;
              }
            } // Store the round


            state.round = r;
          } // Store the game


          state.game = g;
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
                "1": {}
              },
              "id": id[1],
              "matchState": {
                "round": 1,
                "throw": 1,
                "bigaxe": false
              },
              "mode": "match",
              "opponent": {
                "alias": ''
              },
              "throwerIs": "i"
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
                  "throwerIs": t
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
    value: function overwrite(ev) {}
  }, {
    key: "points",
    value: function points(clutch, value) {}
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
      }), this.renderMatch()));
    }
  }, {
    key: "renderBigAxe",
    value: function renderBigAxe() {
      return React.createElement("div", null);
    }
  }, {
    key: "renderGame",
    value: function renderGame() {
      return React.createElement("div", null);
    }
  }, {
    key: "renderMatch",
    value: function renderMatch() {
      // If we're in big axe mode
      if (this.state.bigaxe) {
        return [this.renderOverall(), this.renderBigAxe()];
      } else {
        return [this.renderOverall(), this.renderGame()];
      }
    }
  }, {
    key: "renderOverall",
    value: function renderOverall() {
      return React.createElement("table", null, React.createElement("thead", null, React.createElement("tr", null, React.createElement("th", null, "Thrower"), React.createElement("th", null, "1"), React.createElement("th", null, "2"), React.createElement("th", null, "3"))), React.createElement("tbody", null, React.createElement("tr", null, React.createElement("td", null, this.state.thrower.alias), React.createElement("td", null, "1"), React.createElement("td", null, "2"), React.createElement("td", null, "3")), React.createElement("tr", null, React.createElement("td", null, this.state.alias), React.createElement("td", null, "1"), React.createElement("td", null, "2"), React.createElement("td", null, "3"))));
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
  __thrower = thrower; // Fetch the pending requests

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
  // If the URL doesn't exist
  if (!__socket) {
    console.error('twoway: something went wrong, no socket found');
    return;
  } // Send the tracking message through the websocket


  __socket.send(JSON.stringify({
    "_type": "track",
    "service": service,
    "key": key
  })); // If we don't have the service, add it


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
  } // Else, reopen the socket and re-track all events
  else {
      setTimeout(function () {
        // Notify the backend of a new ws connection
        Services.read('webpoll', 'websocket', {}).done(function (res) {
          // Create the websocket
          __socket = WSHelper('wss://' + window.location.hostname + '/ws', {
            "open": function open(sock) {
              // Send the connect message
              sock.send(JSON.stringify({
                "_type": "connect",
                "key": res.data
              })); // Retrack every service/key

              for (var s in __services) {
                for (var k in __services[s]) {
                  __socket.send(JSON.stringify({
                    "_type": "track",
                    "service": s,
                    "key": k
                  }));
                }
              }
            },
            "message": _handleMessage,
            "close": _handleClose
          });
        });
      }, 5000);
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
  // If we don't have a socket
  if (!__socket) {
    // Notify the backend of a new ws connection
    Services.read('webpoll', 'websocket', {}).done(function (res) {
      // Create the websocket
      __socket = WSHelper('wss://' + window.location.hostname + '/ws', {
        "open": function open(sock) {
          // Reset the close flag
          __close = false; // Send the connect message

          sock.send(JSON.stringify({
            "_type": "connect",
            "key": res.data
          })); // Send the tracking message and store the callback

          _addTrack(service, key, callback);
        },
        "message": _handleMessage,
        "close": _handleClose
      }); // Ping at 5 minute intervals

      __ping = setInterval(_ping, 300000);
    });
  } else {
    _addTrack(service, key, callback);
  }
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
                clearInterval(__ping); // Close the socket

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLzNyZC9qcXVlcnkuYWpheC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9oYXNoLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9nZW5lcmljL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvd2Vic29ja2V0LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9iYXNlL2Zvcm1zLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L2VsZW1lbnRzL2lucHV0RW50ZXIuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvbWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tZXNzYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9wb3B1cHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L21hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvYm9hcmQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvbmF0Zi9tYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9uYXRmL3ByYWN0aWNlLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvc3RhdHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvb3Bwb25lbnQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvcHJhY3RpY2UuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvc2l0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9zdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC90aHJvd2VyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdHdvd2F5LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdXRpbHMuanMiXSwibmFtZXMiOlsiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImMiLCJkIiwic2xpY2UiLCJlIiwiY29uY2F0IiwiZiIsInB1c2giLCJnIiwiaW5kZXhPZiIsImgiLCJpIiwidG9TdHJpbmciLCJqIiwiaGFzT3duUHJvcGVydHkiLCJrIiwibCIsIm0iLCJuIiwiZm4iLCJpbml0IiwibyIsInAiLCJxIiwiciIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiY29udGV4dCIsImVhY2giLCJtYXAiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsInBhcnNlRmxvYXQiLCJub2RlVHlwZSIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiZXZhbCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhbWVsQ2FzZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJzIiwibWFrZUFycmF5IiwiT2JqZWN0IiwiaW5BcnJheSIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsInNwbGl0IiwidCIsImRvY3VtZW50RWxlbWVudCIsInUiLCJ2IiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInciLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwiZmluZCIsIm1hdGNoZXNTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bmlxdWUiLCJ0ZXh0Q29udGVudCIsIm5vZGVWYWx1ZSIsImlzWE1MRG9jIiwib3duZXJEb2N1bWVudCIsImV4cHIiLCJhdHRySGFuZGxlIiwibWF0Y2giLCJib29sIiwibmVlZHNDb250ZXh0IiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIngiLCJ5IiwieiIsIkEiLCJ0ZXN0IiwiZmlsdGVyIiwibm90IiwiaXMiLCJCIiwiQyIsIkQiLCJleGVjIiwicGFyc2VIVE1MIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWFkeSIsIkUiLCJGIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsIm5leHQiLCJwcmV2IiwiZGlyIiwic2libGluZyIsIm5leHRTaWJsaW5nIiwiaGFzIiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJHIiwicGFyZW50IiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImZpcnN0Q2hpbGQiLCJjb250ZW50RG9jdW1lbnQiLCJjaGlsZE5vZGVzIiwicmV2ZXJzZSIsIkgiLCJJIiwiSiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJtZW1vcnkiLCJzdG9wT25GYWxzZSIsInNoaWZ0IiwiZGlzYWJsZSIsInJlbW92ZSIsImVtcHR5IiwiZGlzYWJsZWQiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInBpcGUiLCJ3aGVuIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiSyIsInJlYWR5V2FpdCIsImhvbGRSZWFkeSIsInRyaWdnZXJIYW5kbGVyIiwib2ZmIiwiTCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNIiwiYWNjZXNzIiwiYWNjZXB0RGF0YSIsIk4iLCJkZWZpbmVQcm9wZXJ0eSIsImNhY2hlIiwidWlkIiwiYWNjZXB0cyIsImtleSIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsImhhc0RhdGEiLCJkaXNjYXJkIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJwYXJzZUpTT04iLCJkYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJhdHRyaWJ1dGVzIiwibmFtZSIsInF1ZXVlIiwiZGVxdWV1ZSIsIl9xdWV1ZUhvb2tzIiwidW5zaGlmdCIsInN0b3AiLCJjbGVhclF1ZXVlIiwiVCIsInNvdXJjZSIsIlUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2V0QXR0cmlidXRlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsImxhc3RDaGlsZCIsImNoZWNrZWQiLCJpbm5lckhUTUwiLCJub0Nsb25lQ2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsIlYiLCJmb2N1c2luQnViYmxlcyIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFiIiwiYWN0aXZlRWxlbWVudCIsImV2ZW50IiwiZ2xvYmFsIiwiaGFuZGxlciIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJqb2luIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwiUmVnRXhwIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsInRyaWdnZXIiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsInJlc3VsdCIsInRhcmdldCIsIm5vQnViYmxlIiwiZGVmYXVsdFZpZXciLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2RlZmF1bHQiLCJwb3AiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbSIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaGFuZGxlT2JqIiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwiYnV0dG9uIiwicHJvcHMiLCJmaXhIb29rcyIsImtleUhvb2tzIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJtb3VzZUhvb2tzIiwicGFnZVgiLCJjbGllbnRYIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibG9hZCIsImZvY3VzIiwiYmx1ciIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwib3JpZ2luYWxFdmVudCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInJlbGF0ZWRUYXJnZXQiLCJvbiIsIm9uZSIsImJiIiwiY2IiLCJkYiIsImViIiwiZmIiLCJnYiIsImhiIiwiaWIiLCJqYiIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwia2IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxiIiwibWIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuYiIsIm9iIiwicGIiLCJxYiIsImNsb25lIiwiYnVpbGRGcmFnbWVudCIsImNyZWF0ZVRleHROb2RlIiwiY2xlYW5EYXRhIiwiYXBwZW5kIiwiZG9tTWFuaXAiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJzcmMiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiZGVsYXkiLCJmeCIsInNwZWVkcyIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInNlbGVjdGVkIiwib3B0RGlzYWJsZWQiLCJyYWRpb1ZhbHVlIiwicmIiLCJzYiIsInRiIiwicmVtb3ZlQXR0ciIsInByb3AiLCJhdHRySG9va3MiLCJwcm9wRml4IiwidWIiLCJyZW1vdmVQcm9wIiwicHJvcEhvb2tzIiwidGFiSW5kZXgiLCJoYXNBdHRyaWJ1dGUiLCJocmVmIiwic2VsZWN0ZWRJbmRleCIsInZiIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJ3YiIsInZhbCIsInZhbEhvb2tzIiwic2VsZWN0Iiwib3B0aW9ucyIsImhvdmVyIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsInhiIiwieWIiLCJKU09OIiwicGFyc2UiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsImxvY2F0aW9uIiwiTGIiLCJNYiIsIk5iIiwiZGF0YVR5cGVzIiwiT2IiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsIlBiIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJRYiIsInJlc3BvbnNlRmllbGRzIiwiZGF0YUZpbHRlciIsImRhdGFUeXBlIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJ4bWwiLCJqc29uIiwiU3RyaW5nIiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4Iiwic3RhdHVzQ29kZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwic3RhdHVzIiwiYWJvcnQiLCJjb21wbGV0ZSIsInN1Y2Nlc3MiLCJtZXRob2QiLCJjcm9zc0RvbWFpbiIsInBhcmFtIiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwicmVqZWN0V2l0aCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJSYiIsIlNiIiwiVGIiLCJVYiIsIlZiIiwiV2IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiWGIiLCJZYiIsIlpiIiwiJGIiLCJBY3RpdmVYT2JqZWN0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsInJlc3BvbnNlVGV4dCIsInNjcmlwdCIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiX2IiLCJhYyIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImJjIiwiZGVmaW5lIiwiY2MiLCJqUXVlcnkiLCJkYyIsIm5vQ29uZmxpY3QiLCJDb29raWVzIiwiZGVmYXVsdF8iLCJvQ29va2llcyIsImxDb29raWVzIiwiY29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG9tYWluIiwicGF0aCIsImV4cGlyZXMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiX2NhbGxiYWNrcyIsImNhbGxiYWNrIiwiYXJncyIsImVyciIsImNvbnNvbGUiLCJUb29scyIsInJlcXVpcmUiLCJfaGFzaCIsIl9uYW1lUkUiLCJfd2F0Y2hlcyIsIl9jaGVja1dhdGNoZXMiLCJvbGQiLCJfaGFzaENoYW5nZWQiLCJfcGFyc2VIYXNoIiwiaGFzaCIsInJlZ2V4IiwiZmllbGQiLCJzdWJzdHJpbmciLCJIYXNoIiwiaXNPYmplY3QiLCJ0ZW1wIiwiX2NvdW50IiwiX2VsIiwiaGlkZSIsInN0eWxlIiwiZGlzcGxheSIsInNob3ciLCJfZG9tYWluIiwiX2Vycm9yIiwiX2NsZWFyIiwibG9jYWxTdG9yYWdlIiwiaG9zdG5hbWUiLCJfcmVxdWVzdCIsIm9Db25maWciLCJzZXR0aW5ncyIsIl91cmwiLCJzdHJpbmdpZnkiLCJfc3RvcmUiLCJ0b2tlbiIsIl9zdWNjZXNzIiwicmVzIiwiU2VydmljZXMiLCJzdWJkb21haW4iLCJzZXNzaW9uIiwic2VydmljZSIsIm5vdW4iLCJjb21wYXJlIiwidjEiLCJ2MiIsImtleXMiLCJpc0RlY2ltYWwiLCJpc0ludGVnZXIiLCJvbWFwIiwicmV0IiwidXVpZHY0IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsImNvbmYiLCJvU29jayIsIldlYlNvY2tldCIsIm9ub3BlbiIsImxvZyIsIm9ubWVzc2FnZSIsImV2Iiwib25jbG9zZSIsIkV2ZW50cyIsIkxvYWRlciIsIlJlcXVlc3RzIiwiU2l0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUmVhY3QiLCJyZWFkIiwiRVJST1JfQ0xBU1MiLCJfYWRkQ2xhc3MiLCJlbCIsIm5hbWVzIiwiX3JlbW92ZUNsYXNzIiwiaW5jbHVkZXMiLCJfQmFzZU5vZGUiLCJlcnJvcnMiLCJyZWZzIiwiUHVyZUNvbXBvbmVudCIsIkFycmF5Tm9kZSIsIk5vZGUiLCJtc2ciLCJ2YWx1ZVNldCIsIlBhcmVudCIsImVycm9yQWRkIiwiZXJyb3JSZW1vdmUiLCJlcnJvckZvY3VzIiwiZWxlbWVudHMiLCJGb3JtcyIsIklucHV0RW50ZXIiLCJvbkVudGVyIiwia2V5UHJlc3MiLCJvbktleVByZXNzIiwicmVzdCIsIk1lbnUiLCJvbkNoYW5nZSIsIml0ZW1DbGljayIsInNlbGYiLCJzZXRTdGF0ZSIsIkNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVuZGVyQ2hpbGRyZW4iLCJJdGVtIiwiX2luc3RhbmNlIiwiTWVzc2FnZSIsImJ1dHRvbnMiLCJkYXRhc2V0IiwiaWQiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIk1lc3NhZ2VzIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwibXNncyIsIk1vZGFsIiwiY2xvc2UiLCJidXR0b25DbGljayIsInRyYXBFc2NhcGUiLCJidG4iLCJzdHlsZXMiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwiU1VDQ0VTU19USU1FT1VUIiwiRVJST1JfVElNRU9VVCIsIldBUk5JTkdfVElNRU9VVCIsIlNURVBfVElNRU9VVCIsIldJRFRIX1NURVBTIiwiSEVJR0hUX1NURVBTIiwiTUFSR0lOIiwiUG9wdXBzIiwicG9wdXBzIiwidGltZXIiLCJwb3B1cCIsInByb2Nlc3MiLCJ3YXJuaW5nIiwic3RlcCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaWNvbiIsImlUaW1lb3V0Iiwic0ljb24iLCJ3YXJuIiwiVGhyb3dlciIsIlV0aWxzIiwiSGVhZGVyIiwiYWNjb3VudFNob3ciLCJob21lIiwic2lnbmluIiwic2lnbmluU2hvdyIsInNpZ25pblRyaWdnZXIiLCJzaWdub3V0Iiwic2lnbm91dFRyaWdnZXIiLCJzaWdudXAiLCJzaWdudXBTaG93IiwibW9kYWwiLCJ0aHJvd2VyIiwiYWxpYXMiLCJjcmVhdGUiLCJwYXNzd2QiLCJzZXJ2aWNlRXJyb3IiLCJjb2RlIiwic2lnbnVwX2FsaWFzIiwic2lnbnVwX3Bhc3N3ZCIsInJlcGVhdF9wYXNzd2QiLCJvRGF0YSIsImVtYWlsIiwiX2lkIiwiTmF0ZiIsIk1hdGNoIiwib3JnQ2hhbmdlIiwid2F0Y2giLCJ1bndhdGNoIiwib3JnIiwibWVudUNoYW5nZSIsIkJvYXJkIiwib25Qb2ludHMiLCJjbHV0Y2hNb2RlIiwiY2x1dGNoQ2xpY2siLCJkcm9wQ2xpY2siLCJwb2ludENsaWNrIiwicmVzZXRDbHV0Y2giLCJjbGFzc05hbWVzIiwibW9kZSIsIlR3b1dheSIsIk9wcG9uZW50IiwiZXhpc3RpbmdDb250aW51ZSIsImV4aXN0aW5nRGVsZXRlIiwiaWRDYWxsYmFjayIsIm1hdGNoQ2FsbGJhY2siLCJvdmVyd3JpdGUiLCJwb2ludHMiLCJyZXF1ZXN0Q2FsbGJhY2siLCJyZXF1ZXN0Q2FuY2VsIiwicmVxdWVzdENyZWF0ZSIsImluaXRpYXRvciIsImJpZ2F4ZSIsInJvdW5kIiwic0ciLCJnYW1lcyIsInNSIiwiZ2FtZSIsImV4aXN0aW5nRmV0Y2giLCJ1bnRyYWNrIiwiZXhpc3RpbmdSZW1vdmUiLCJleGlzdGluZyIsInRyYWNrIiwiY2FsY3VsYXRlTWF0Y2hTdGF0ZSIsImNsdXRjaCIsIm9wcG9uZW50IiwicmVuZGVyTWF0Y2giLCJyZW5kZXJPdmVyYWxsIiwicmVuZGVyQmlnQXhlIiwicmVuZGVyR2FtZSIsInJlcXVlc3RSZXNldCIsIlByYWN0aWNlIiwibW9kZVNlbGVjdCIsInBvaW50c0hpZGUiLCJwb2ludHNTaG93IiwicmVzZXQiLCJzYXZlIiwibmV3X3N0YXRlIiwiYm9hcmQiLCJwYXJzZUludCIsImNsdXRjaEF0dGVtcHRzIiwiY2x1dGNoSGl0cyIsInRvdGFsUG9pbnRzIiwidG9GaXhlZCIsInNob3dQb2ludHMiLCJjb25maXJtIiwiU3RhdHMiLCJtYXRjaFN0YXRzIiwicHJhY3RpY2VEYXRhIiwicHJhY3RpY2VEYXRhSGlkZSIsInByYWN0aWNlU3RhdHMiLCJwcmFjdGljZVN0YXRzQWxsIiwiYWxsIiwicHJhY3RpY2UiLCJ0b3RhbCIsImF0dGVtcHRzIiwiZHJvcHMiLCJhdmVyYWdlIiwicmF0ZSIsImRhdGUiLCJfY3JlYXRlZCIsInByYWN0aWNlX2FsbCIsInByYWN0aWNlX2RhdGEiLCJhbGlhc1NvcnQiLCJsb2NhbGVDb21wYXJlIiwiT3Bwb25lbnRSb3ciLCJmYXZvdXJpdGUiLCJjb2xvciIsImZhdm91cml0ZVNob3ciLCJzZWFyY2giLCJzZWFyY2hTaG93IiwiZmF2b3VyaXRlcyIsIm9uU2VsZWN0IiwiaGFzaENoYW5nZSIsInBhZ2VDaGFuZ2UiLCJwYWdlIiwibWVudSIsIml0ZW1zIiwiX190aHJvd2VyIiwiX19wZW5kaW5nIiwiX2luaXQiLCJfc2lnbmluIiwiX3NpZ25vdXQiLCJfcGVuZGluZyIsIl9wZW5kaW5nUHJvY2VzcyIsInJlcXVlc3RzIiwiX3JlcXVlc3REZWNsaW5lIiwiX3JlcXVlc3RBY2NlcHQiLCJfcmVxdWVzdERlbGV0ZSIsIl9yZXF1ZXN0V2FpdCIsInVwZGF0ZSIsInJlcSIsIl9yZXF1ZXN0TmV3IiwiV1NIZWxwZXIiLCJfX3BpbmciLCJfX2Nsb3NlIiwiX19zb2NrZXQiLCJfX3NlcnZpY2VzIiwiX2FkZFRyYWNrIiwiX2hhbmRsZUNsb3NlIiwic29jayIsIl9oYW5kbGVNZXNzYWdlIiwiRmlsZVJlYWRlciIsIm9Nc2ciLCJyZWFkQXNUZXh0IiwiX3BpbmciLCJfdHJhY2siLCJzZXRJbnRlcnZhbCIsIl91bnRyYWNrIiwiY2xlYXJJbnRlcnZhbCIsInRzIiwiZ2V0RnVsbFllYXIiLCJnZXRNb250aCIsImdldERhdGUiLCJlcnJvclRyZWUiLCJvUmV0IiwibEZpZWxkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBLENBQUMsVUFBU0EsQ0FBVCxFQUFXQyxDQUFYLEVBQWE7QUFBQyw0Q0FBaUJDLE1BQWpCLE1BQXlCLG9CQUFpQkEsTUFB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Q3QwQixDQUFELENBQXBCLENBQVY7QUFDQTtBQUNELEtBdEMwQixDQXdDM0I7OztBQUNBLFdBQU9zMEIsSUFBUDtBQUNBLEdBdERVO0FBd0RYM0ksY0FBWSxFQUFFLHNCQUFTMUssR0FBVCxFQUFjO0FBRTNCO0FBQ0EsWUFBT0EsR0FBRyxDQUFDMkssSUFBWDtBQUVDO0FBQ0EsV0FBSyxHQUFMO0FBRUM7QUFDQTVHLGNBQU0sQ0FBQy9VLE9BQVAsQ0FBZSxTQUFmLEVBSEQsQ0FLQzs7QUFDQSxlQUFPLElBQVA7QUFFRDs7QUFDQSxXQUFLLElBQUw7QUFFQztBQUNBZ1IsV0FBRyxDQUFDbUYsR0FBSixHQUFVdUUsS0FBSyxDQUFDMEosU0FBTixDQUFnQnBULEdBQUcsQ0FBQ21GLEdBQXBCLENBQVYsQ0FIRCxDQUtDOztBQUNBLGVBQU8sS0FBUDtBQWxCRixLQUgyQixDQXdCM0I7OztBQUNBLFdBQU8sS0FBUDtBQUNBLEdBbEZVLENBcUZaOztBQXJGWSxDQUFaO0FBc0ZBdm5CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjZyQixLQUFqQixDIiwiZmlsZSI6Ii4uL2hvc3RzL3N0YXRpYy9qcy9zaXRlLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2VicGFjay9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qISBqUXVlcnkgdjIuMS4xIC1jc3MsLWNzcy9hZGRHZXRIb29rSWYsLWNzcy9jdXJDU1MsLWNzcy9kZWZhdWx0RGlzcGxheSwtY3NzL2hpZGRlblZpc2libGVTZWxlY3RvcnMsLWNzcy9zdXBwb3J0LC1jc3Mvc3dhcCwtY3NzL3Zhci9jc3NFeHBhbmQsLWNzcy92YXIvZ2V0U3R5bGVzLC1jc3MvdmFyL2lzSGlkZGVuLC1jc3MvdmFyL3JtYXJnaW4sLWNzcy92YXIvcm51bW5vbnB4LC1lZmZlY3RzLC1lZmZlY3RzL1R3ZWVuLC1lZmZlY3RzL2FuaW1hdGVkU2VsZWN0b3IsLWRpbWVuc2lvbnMsLW9mZnNldCwtZGVwcmVjYXRlZCwtZXZlbnQtYWxpYXMsLXdyYXAgfCAoYykgMjAwNSwgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9e30sbD1hLmRvY3VtZW50LG09XCIyLjEuMSAtY3NzLC1jc3MvYWRkR2V0SG9va0lmLC1jc3MvY3VyQ1NTLC1jc3MvZGVmYXVsdERpc3BsYXksLWNzcy9oaWRkZW5WaXNpYmxlU2VsZWN0b3JzLC1jc3Mvc3VwcG9ydCwtY3NzL3N3YXAsLWNzcy92YXIvY3NzRXhwYW5kLC1jc3MvdmFyL2dldFN0eWxlcywtY3NzL3Zhci9pc0hpZGRlbiwtY3NzL3Zhci9ybWFyZ2luLC1jc3MvdmFyL3JudW1ub25weCwtZWZmZWN0cywtZWZmZWN0cy9Ud2VlbiwtZWZmZWN0cy9hbmltYXRlZFNlbGVjdG9yLC1kaW1lbnNpb25zLC1vZmZzZXQsLWRlcHJlY2F0ZWQsLWV2ZW50LWFsaWFzLC13cmFwXCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTpkLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZWFjaCh0aGlzLGEsYil9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhkLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcihudWxsKX0scHVzaDpmLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbi5leHRlbmQ9bi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxuLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYobi5pc1BsYWluT2JqZWN0KGQpfHwoZT1uLmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJm4uaXNBcnJheShjKT9jOltdKTpmPWMmJm4uaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09bi5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LG4uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bi50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXksaXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzQXJyYXkoYSkmJmEtcGFyc2VGbG9hdChhKT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpPyExOmEuY29uc3RydWN0b3ImJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpPyExOiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxsLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9MCxmPWEubGVuZ3RoLGc9cyhhKTtpZihjKXtpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpmLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6Zy5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGY9MCxnPWEubGVuZ3RoLGg9cyhhKSxpPVtdO2lmKGgpZm9yKDtnPmY7ZisrKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO2Vsc2UgZm9yKGYgaW4gYSlkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtyZXR1cm4gZS5hcHBseShbXSxpKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZT1kLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGUuY29uY2F0KGQuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omt9KSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj1hLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOjE9PT1hLm5vZGVUeXBlJiZiPyEwOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx1LHY9dC5tYXRjaGVzfHx0LndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8dC5tb3pNYXRjaGVzU2VsZWN0b3J8fHQub01hdGNoZXNTZWxlY3Rvcnx8dC5tc01hdGNoZXNTZWxlY3Rvcix3PWZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIHU9ITAsMDt2YXIgYz1iLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpO3JldHVybiBjPzEmYz9hPT09bHx8bi5jb250YWlucyhsLGEpPy0xOmI9PT1sfHxuLmNvbnRhaW5zKGwsYik/MTowOjQmYz8tMToxOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/LTE6MX07bi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPTA7aWYoYz1jfHxbXSxiPWJ8fGwsIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBjO2lmKDEhPT0oZj1iLm5vZGVUeXBlKSYmOSE9PWYpcmV0dXJuW107aWYoZCl3aGlsZShlPWRbZysrXSluLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGUsYSkmJmMucHVzaChlKTtlbHNlIG4ubWVyZ2UoYyxiLnF1ZXJ5U2VsZWN0b3JBbGwoYSkpO3JldHVybiBjfSx1bmlxdWU6ZnVuY3Rpb24oYSl7dmFyIGIsYz1bXSxkPTAsZT0wO2lmKHU9ITEsYS5zb3J0KHcpLHUpe3doaWxlKGI9YVtkKytdKWI9PT1hW2RdJiYoZT1jLnB1c2goZCkpO3doaWxlKGUtLSlhLnNwbGljZShjW2VdLDEpfXJldHVybiBhfSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZT1hLm5vZGVUeXBlO2lmKGUpe2lmKDE9PT1lfHw5PT09ZXx8MTE9PT1lKXJldHVybiBhLnRleHRDb250ZW50O2lmKDM9PT1lfHw0PT09ZSlyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1uLnRleHQoYik7cmV0dXJuIGN9LGNvbnRhaW5zOmZ1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhYy5jb250YWlucyhkKSl9LGlzWE1MRG9jOmZ1bmN0aW9uKGEpe3JldHVyblwiSFRNTFwiIT09KGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lfSxleHByOnthdHRySGFuZGxlOnt9LG1hdGNoOntib29sOi9eKD86Y2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWQpJC9pLG5lZWRzQ29udGV4dDovXltcXHgyMFxcdFxcclxcblxcZl0qWz4rfl0vfX19KSxuLmV4dGVuZChuLmZpbmQse21hdGNoZXM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5maW5kKGEsbnVsbCxudWxsLGIpfSxtYXRjaGVzU2VsZWN0b3I6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdi5jYWxsKGEsYil9LGF0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYil9fSk7dmFyIHg9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx5PS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx6PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBBKGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoei50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gZy5jYWxsKGIsYSk+PTAhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soQSh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soQSh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhQSh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ4LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBCLEM9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sRD1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2lmKCFhKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihjPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkMuZXhlYyhhKSwhY3x8IWNbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxCKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihjWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoY1sxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpsLCEwKSkseS50ZXN0KGNbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGMgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tjXSk/dGhpc1tjXShiW2NdKTp0aGlzLmF0dHIoYyxiW2NdKTtyZXR1cm4gdGhpc31yZXR1cm4gZD1sLmdldEVsZW1lbnRCeUlkKGNbMl0pLGQmJmQucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1kKSx0aGlzLmNvbnRleHQ9bCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgQi5yZWFkeT9CLnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0QucHJvdG90eXBlPW4uZm4sQj1uKGwpO3ZhciBFPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEY9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5leHRlbmQoe2RpcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHNpYmxpbmc6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9fSksbi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz14LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZShmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/Zy5jYWxsKG4oYSksdGhpc1swXSk6Zy5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZShuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBHKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBHKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRyhhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRlthXXx8bi51bmlxdWUoZSksRS50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEg9L1xcUysvZyxJPXt9O2Z1bmN0aW9uIEooYSl7dmFyIGI9SVthXT17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goSCl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9JW2FdfHxKKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGYsZyxoPVtdLGk9IWEub25jZSYmW10saj1mdW5jdGlvbihsKXtmb3IoYj1hLm1lbW9yeSYmbCxjPSEwLGc9ZXx8MCxlPTAsZj1oLmxlbmd0aCxkPSEwO2gmJmY+ZztnKyspaWYoaFtnXS5hcHBseShsWzBdLGxbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2Upe2I9ITE7YnJlYWt9ZD0hMSxoJiYoaT9pLmxlbmd0aCYmaihpLnNoaWZ0KCkpOmI/aD1bXTprLmRpc2FibGUoKSl9LGs9e2FkZDpmdW5jdGlvbigpe2lmKGgpe3ZhciBjPWgubGVuZ3RoOyFmdW5jdGlvbiBnKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi50eXBlKGMpO1wiZnVuY3Rpb25cIj09PWQ/YS51bmlxdWUmJmsuaGFzKGMpfHxoLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1kJiZnKGMpfSl9KGFyZ3VtZW50cyksZD9mPWgubGVuZ3RoOmImJihlPWMsaihiKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBoJiZuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsaCxjKSk+LTEpaC5zcGxpY2UoYywxKSxkJiYoZj49YyYmZi0tLGc+PWMmJmctLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsaCk+LTE6ISghaHx8IWgubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gaD1bXSxmPTAsdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBoPWk9Yj12b2lkIDAsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haH0sbG9jazpmdW5jdGlvbigpe3JldHVybiBpPXZvaWQgMCxifHxrLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxiKXtyZXR1cm4haHx8YyYmIWl8fChiPWJ8fFtdLGI9W2EsYi5zbGljZT9iLnNsaWNlKCk6Yl0sZD9pLnB1c2goYik6aihiKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBrLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhY319O3JldHVybiBrfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCkucHJvZ3Jlc3MoYy5ub3RpZnkpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1kLmNhbGwoYXJndW1lbnRzKSxlPWMubGVuZ3RoLGY9MSE9PWV8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2U6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihlKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZC5jYWxsKGFyZ3VtZW50cyk6ZSxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGU+MSlmb3IoaT1uZXcgQXJyYXkoZSksaj1uZXcgQXJyYXkoZSksaz1uZXcgQXJyYXkoZSk7ZT5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KS5wcm9ncmVzcyhoKGIsaixpKSk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEs7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEsucmVzb2x2ZVdpdGgobCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGwpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihsKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBMKCl7bC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEwsITEpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixMLCExKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBLfHwoSz1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09bC5yZWFkeVN0YXRlP3NldFRpbWVvdXQobi5yZWFkeSk6KGwuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixMLCExKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsTCwhMSkpKSxLLnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBNPW4uYWNjZXNzPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKW4uYWNjZXNzKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9O24uYWNjZXB0RGF0YT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIE4oKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jYWNoZT17fSwwLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57fX19KSx0aGlzLmV4cGFuZG89bi5leHBhbmRvK01hdGgucmFuZG9tKCl9Ti51aWQ9MSxOLmFjY2VwdHM9bi5hY2NlcHREYXRhLE4ucHJvdG90eXBlPXtrZXk6ZnVuY3Rpb24oYSl7aWYoIU4uYWNjZXB0cyhhKSlyZXR1cm4gMDt2YXIgYj17fSxjPWFbdGhpcy5leHBhbmRvXTtpZighYyl7Yz1OLnVpZCsrO3RyeXtiW3RoaXMuZXhwYW5kb109e3ZhbHVlOmN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEsYil9Y2F0Y2goZCl7Ylt0aGlzLmV4cGFuZG9dPWMsbi5leHRlbmQoYSxiKX19cmV0dXJuIHRoaXMuY2FjaGVbY118fCh0aGlzLmNhY2hlW2NdPXt9KSxjfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5rZXkoYSksZj10aGlzLmNhY2hlW2VdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWZbYl09YztlbHNlIGlmKG4uaXNFbXB0eU9iamVjdChmKSluLmV4dGVuZCh0aGlzLmNhY2hlW2VdLGIpO2Vsc2UgZm9yKGQgaW4gYilmW2RdPWJbZF07cmV0dXJuIGZ9LGdldDpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY2FjaGVbdGhpcy5rZXkoYSldO3JldHVybiB2b2lkIDA9PT1iP2M6Y1tiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzLmtleShhKSxnPXRoaXMuY2FjaGVbZl07aWYodm9pZCAwPT09Yil0aGlzLmNhY2hlW2ZdPXt9O2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGc/ZD1bYixlXTooZD1lLGQ9ZCBpbiBnP1tkXTpkLm1hdGNoKEgpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBnW2RbY11dfX0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0VtcHR5T2JqZWN0KHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXXx8e30pfSxkaXNjYXJkOmZ1bmN0aW9uKGEpe2FbdGhpcy5leHBhbmRvXSYmZGVsZXRlIHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXX19O3ZhciBPPW5ldyBOLFA9bmV3IE4sUT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sUj0vKFtBLVpdKS9nO2Z1bmN0aW9uIFMoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShSLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6US50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fVAuc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBQLmhhc0RhdGEoYSl8fE8uaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFAuYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1AucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe08ucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1QLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIU8uZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxTKGYsZCxlW2RdKSkpO08uc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7UC5zZXQodGhpcyxhKX0pOk0odGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkPW4uY2FtZWxDYXNlKGEpO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9UC5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UC5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UyhmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9UC5nZXQodGhpcyxkKTtQLnNldCh0aGlzLGQsYiksLTEhPT1hLmluZGV4T2YoXCItXCIpJiZ2b2lkIDAhPT1jJiZQLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7UC5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Ty5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPU8uYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIE8uZ2V0KGEsYyl8fE8uYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtPLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1PLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBUPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxVPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pOyFmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksay5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGsubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgVj1cInVuZGVmaW5lZFwiO2suZm9jdXNpbkJ1YmJsZXM9XCJvbmZvY3VzaW5cImluIGE7dmFyIFc9L15rZXkvLFg9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay8sWT0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sWj0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiAkKCl7cmV0dXJuITB9ZnVuY3Rpb24gXygpe3JldHVybiExfWZ1bmN0aW9uIGFiKCl7dHJ5e3JldHVybiBsLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU8uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm4gdHlwZW9mIG4hPT1WJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChIKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9Wi5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcsITEpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU8uaGFzRGF0YShhKSYmTy5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChIKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9Wi5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJihkZWxldGUgci5oYW5kbGUsTy5yZW1vdmUoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmLGcsaCxpLGssbSxvLHA9W2R8fGxdLHE9ai5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ai5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGc9aD1kPWR8fGwsMyE9PWQubm9kZVR5cGUmJjghPT1kLm5vZGVUeXBlJiYhWS50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT49MCYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGs9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWU/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5uYW1lc3BhY2VfcmU9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZCksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGV8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShkLGMpIT09ITEpKXtpZighZSYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGQpKXtmb3IoaT1vLmRlbGVnYXRlVHlwZXx8cSxZLnRlc3QoaStxKXx8KGc9Zy5wYXJlbnROb2RlKTtnO2c9Zy5wYXJlbnROb2RlKXAucHVzaChnKSxoPWc7aD09PShkLm93bmVyRG9jdW1lbnR8fGwpJiZwLnB1c2goaC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3d8fGEpfWY9MDt3aGlsZSgoZz1wW2YrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1mPjE/aTpvLmJpbmRUeXBlfHxxLG09KE8uZ2V0KGcsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZPLmdldChnLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoZyxjKSxtPWsmJmdba10sbSYmbS5hcHBseSYmbi5hY2NlcHREYXRhKGcpJiYoYi5yZXN1bHQ9bS5hcHBseShnLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGV8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhbi5hY2NlcHREYXRhKGQpfHxrJiZuLmlzRnVuY3Rpb24oZFtxXSkmJiFuLmlzV2luZG93KGQpJiYoaD1kW2tdLGgmJihkW2tdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZFtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxoJiYoZFtrXT1oKSksYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZSxmLGcsaD1bXSxpPWQuY2FsbChhcmd1bWVudHMpLGo9KE8uZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLm5hbWVzcGFjZV9yZXx8YS5uYW1lc3BhY2VfcmUudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGU9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihhLnJlc3VsdD1lKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJighYS5idXR0b258fFwiY2xpY2tcIiE9PWEudHlwZSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+PTA6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxsLGQ9Yy5kb2N1bWVudEVsZW1lbnQsZT1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGQmJmQuc2Nyb2xsTGVmdHx8ZSYmZS5zY3JvbGxMZWZ0fHwwKS0oZCYmZC5jbGllbnRMZWZ0fHxlJiZlLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhkJiZkLnNjcm9sbFRvcHx8ZSYmZS5zY3JvbGxUb3B8fDApLShkJiZkLmNsaWVudFRvcHx8ZSYmZS5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1mfHwoYS53aGljaD0xJmY/MToyJmY/Mzo0JmY/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGQsZT1hLnR5cGUsZj1hLGc9dGhpcy5maXhIb29rc1tlXTtnfHwodGhpcy5maXhIb29rc1tlXT1nPVgudGVzdChlKT90aGlzLm1vdXNlSG9va3M6Vy50ZXN0KGUpP3RoaXMua2V5SG9va3M6e30pLGQ9Zy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChnLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZiksYj1kLmxlbmd0aDt3aGlsZShiLS0pYz1kW2JdLGFbY109ZltjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1sKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxnLmZpbHRlcj9nLmZpbHRlcihhLGYpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09YWIoKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09YWIoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/bi5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTpuLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT8kOl8pOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOl8saXNQcm9wYWdhdGlvblN0b3BwZWQ6Xyxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpfLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPSQsYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD0kLGEmJmEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD0kLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxrLmZvY3VzaW5CdWJibGVzfHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSwhMCl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1PLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE8uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ty5hY2Nlc3MoZCxiKS0xO2U/Ty5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxPLnJlbW92ZShkLGIpKX19fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWN8fGIsYj12b2lkIDApO2ZvcihnIGluIGEpdGhpcy5vbihnLGIsYyxhW2ddLGUpO3JldHVybiB0aGlzfWlmKG51bGw9PWMmJm51bGw9PWQ/KGQ9YixjPWI9dm9pZCAwKTpudWxsPT1kJiYoXCJzdHJpbmdcIj09dHlwZW9mIGI/KGQ9YyxjPXZvaWQgMCk6KGQ9YyxjPWIsYj12b2lkIDApKSxkPT09ITEpZD1fO2Vsc2UgaWYoIWQpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1lJiYoZj1kLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGQuZ3VpZD1mLmd1aWR8fChmLmd1aWQ9bi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGEsZCxjLGIpfSl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1fKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciBiYj0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksY2I9LzwoW1xcdzpdKykvLGRiPS88fCYjP1xcdys7LyxlYj0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLGZiPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksZ2I9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxoYj0vXnRydWVcXC8oLiopLyxpYj0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csamI9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtqYi5vcHRncm91cD1qYi5vcHRpb24samIudGJvZHk9amIudGZvb3Q9amIuY29sZ3JvdXA9amIuY2FwdGlvbj1qYi50aGVhZCxqYi50aD1qYi50ZDtmdW5jdGlvbiBrYihhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBsYihhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBtYihhKXt2YXIgYj1oYi5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gbmIoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTy5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Ty5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIG9iKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTy5oYXNEYXRhKGEpJiYoZj1PLmFjY2VzcyhhKSxnPU8uc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1QLmhhc0RhdGEoYSkmJihoPVAuYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksUC5zZXQoYixpKSl9fWZ1bmN0aW9uIHBiKGEsYil7dmFyIGM9YS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTphLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gcWIoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmVS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9bi5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoay5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9cGIoaCksZj1wYihhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXFiKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fHBiKGEpLGc9Z3x8cGIoaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylvYihmW2RdLGdbZF0pO2Vsc2Ugb2IoYSxoKTtyZXR1cm4gZz1wYihoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm5iKGcsIWkmJnBiKGEsXCJzY3JpcHRcIikpLGh9LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGksaixrPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGw9W10sbT0wLG89YS5sZW5ndGg7bz5tO20rKylpZihlPWFbbV0sZXx8MD09PWUpaWYoXCJvYmplY3RcIj09PW4udHlwZShlKSluLm1lcmdlKGwsZS5ub2RlVHlwZT9bZV06ZSk7ZWxzZSBpZihkYi50ZXN0KGUpKXtmPWZ8fGsuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxnPShjYi5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxoPWpiW2ddfHxqYi5fZGVmYXVsdCxmLmlubmVySFRNTD1oWzFdK2UucmVwbGFjZShiYixcIjwkMT48LyQyPlwiKStoWzJdLGo9aFswXTt3aGlsZShqLS0pZj1mLmxhc3RDaGlsZDtuLm1lcmdlKGwsZi5jaGlsZE5vZGVzKSxmPWsuZmlyc3RDaGlsZCxmLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBsLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShlKSk7ay50ZXh0Q29udGVudD1cIlwiLG09MDt3aGlsZShlPWxbbSsrXSlpZigoIWR8fC0xPT09bi5pbkFycmF5KGUsZCkpJiYoaT1uLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSxmPXBiKGsuYXBwZW5kQ2hpbGQoZSksXCJzY3JpcHRcIiksaSYmbmIoZiksYykpe2o9MDt3aGlsZShlPWZbaisrXSlnYi50ZXN0KGUudHlwZXx8XCJcIikmJmMucHVzaChlKX1yZXR1cm4ga30sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZSxmPW4uZXZlbnQuc3BlY2lhbCxnPTA7dm9pZCAwIT09KGM9YVtnXSk7ZysrKXtpZihuLmFjY2VwdERhdGEoYykmJihlPWNbTy5leHBhbmRvXSxlJiYoYj1PLmNhY2hlW2VdKSkpe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWZbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Ty5jYWNoZVtlXSYmZGVsZXRlIE8uY2FjaGVbZV19ZGVsZXRlIFAuY2FjaGVbY1tQLmV4cGFuZG9dXX19fSksbi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIE0odGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9a2IodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1rYih0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LHJlbW92ZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPWE/bi5maWx0ZXIoYSx0aGlzKTp0aGlzLGU9MDtudWxsIT0oYz1kW2VdKTtlKyspYnx8MSE9PWMubm9kZVR5cGV8fG4uY2xlYW5EYXRhKHBiKGMpKSxjLnBhcmVudE5vZGUmJihiJiZuLmNvbnRhaW5zKGMub3duZXJEb2N1bWVudCxjKSYmbmIocGIoYyxcInNjcmlwdFwiKSksYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpKTtyZXR1cm4gdGhpc30sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKHBiKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIE0odGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFlYi50ZXN0KGEpJiYhamJbKGNiLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1hLnJlcGxhY2UoYmIsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEocGIoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF07cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2E9dGhpcy5wYXJlbnROb2RlLG4uY2xlYW5EYXRhKHBiKHRoaXMpKSxhJiZhLnJlcGxhY2VDaGlsZChiLHRoaXMpfSksYSYmKGEubGVuZ3RofHxhLm5vZGVUeXBlKT90aGlzOnRoaXMucmVtb3ZlKCl9LGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGEsYil7YT1lLmFwcGx5KFtdLGEpO3ZhciBjLGQsZixnLGgsaSxqPTAsbD10aGlzLmxlbmd0aCxtPXRoaXMsbz1sLTEscD1hWzBdLHE9bi5pc0Z1bmN0aW9uKHApO2lmKHF8fGw+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHAmJiFrLmNoZWNrQ2xvbmUmJmZiLnRlc3QocCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZD1tLmVxKGMpO3EmJihhWzBdPXAuY2FsbCh0aGlzLGMsZC5odG1sKCkpKSxkLmRvbU1hbmlwKGEsYil9KTtpZihsJiYoYz1uLmJ1aWxkRnJhZ21lbnQoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksZD1jLmZpcnN0Q2hpbGQsMT09PWMuY2hpbGROb2Rlcy5sZW5ndGgmJihjPWQpLGQpKXtmb3IoZj1uLm1hcChwYihjLFwic2NyaXB0XCIpLGxiKSxnPWYubGVuZ3RoO2w+ajtqKyspaD1jLGohPT1vJiYoaD1uLmNsb25lKGgsITAsITApLGcmJm4ubWVyZ2UoZixwYihoLFwic2NyaXB0XCIpKSksYi5jYWxsKHRoaXNbal0saCxqKTtcbmlmKGcpZm9yKGk9ZltmLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGYsbWIpLGo9MDtnPmo7aisrKWg9ZltqXSxnYi50ZXN0KGgudHlwZXx8XCJcIikmJiFPLmFjY2VzcyhoLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhpLGgpJiYoaC5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChoLnNyYyk6bi5nbG9iYWxFdmFsKGgudGV4dENvbnRlbnQucmVwbGFjZShpYixcIlwiKSkpfXJldHVybiB0aGlzfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGc9ZS5sZW5ndGgtMSxoPTA7Zz49aDtoKyspYz1oPT09Zz90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZi5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bi5meD9uLmZ4LnNwZWVkc1thXXx8YTphLGI9Ynx8XCJmeFwiLHRoaXMucXVldWUoYixmdW5jdGlvbihiLGMpe3ZhciBkPXNldFRpbWVvdXQoYixhKTtjLnN0b3A9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZCl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1sLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixrLmNoZWNrT249XCJcIiE9PWEudmFsdWUsay5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsay5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixrLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciByYixzYix0Yj1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBNKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZihhJiYzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiB0eXBlb2YgYS5nZXRBdHRyaWJ1dGU9PT1WP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZD1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/c2I6cmIpKSx2b2lkIDA9PT1jP2QmJlwiZ2V0XCJpbiBkJiZudWxsIT09KGU9ZC5nZXQoYSxiKSk/ZTooZT1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWU/dm9pZCAwOmUpOm51bGwhPT1jP2QmJlwic2V0XCJpbiBkJiZ2b2lkIDAhPT0oZT1kLnNldChhLGMsYikpP2U6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTp2b2lkIG4ucmVtb3ZlQXR0cihhLGIpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChIKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksc2I9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9dGJbYl18fG4uZmluZC5hdHRyO3RiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj10YltiXSx0YltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsdGJbYl09ZiksZX19KTt2YXIgdWI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBNKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW4uaXNYTUxEb2MoYSksZiYmKGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8dWIudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxrLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciB2Yj0vW1xcdFxcclxcblxcZl0vZztuLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChIKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh2YixcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW4udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goSCl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodmIsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9uLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChIKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09Vnx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZPLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6Ty5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh2YixcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgd2I9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKHdiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sISghYy5zZWxlY3RlZCYmaSE9PWV8fChrLm9wdERpc2FibGVkP2MuZGlzYWJsZWQ6bnVsbCE9PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxjLnBhcmVudE5vZGUuZGlzYWJsZWQmJm4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KGQudmFsdWUsZik+PTApJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIHhiPW4ubm93KCkseWI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihhKXt2YXIgYixjO2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7Yz1uZXcgRE9NUGFyc2VyLGI9Yy5wYXJzZUZyb21TdHJpbmcoYSxcInRleHQveG1sXCIpfWNhdGNoKGQpe2I9dm9pZCAwfXJldHVybighYnx8Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYSksYn07dmFyIHpiLEFiLEJiPS8jLiokLyxDYj0vKFs/Jl0pXz1bXiZdKi8sRGI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxFYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxGYj0vXig/OkdFVHxIRUFEKSQvLEdiPS9eXFwvXFwvLyxIYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxJYj17fSxKYj17fSxLYj1cIiovXCIuY29uY2F0KFwiKlwiKTt0cnl7QWI9bG9jYXRpb24uaHJlZn1jYXRjaChMYil7QWI9bC5jcmVhdGVFbGVtZW50KFwiYVwiKSxBYi5ocmVmPVwiXCIsQWI9QWIuaHJlZn16Yj1IYi5leGVjKEFiLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBNYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goSCl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1KYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE9iKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBQYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiBRYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpBYix0eXBlOlwiR0VUXCIsaXNMb2NhbDpFYi50ZXN0KHpiWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpLYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP09iKE9iKGEsbi5hamF4U2V0dGluZ3MpLGIpOk9iKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOk1iKEliKSxhamF4VHJhbnNwb3J0Ok1iKEpiKSxhamF4OmZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGI9Ynx8e307dmFyIGMsZCxlLGYsZyxoLGksaixrPW4uYWpheFNldHVwKHt9LGIpLGw9ay5jb250ZXh0fHxrLG09ay5jb250ZXh0JiYobC5ub2RlVHlwZXx8bC5qcXVlcnkpP24obCk6bi5ldmVudCxvPW4uRGVmZXJyZWQoKSxwPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscT1rLnN0YXR1c0NvZGV8fHt9LHI9e30scz17fSx0PTAsdT1cImNhbmNlbGVkXCIsdj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT10KXtpZighZil7Zj17fTt3aGlsZShiPURiLmV4ZWMoZSkpZltiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1mW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXQ/ZTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB0fHwoYT1zW2NdPXNbY118fGEsclthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB0fHwoay5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj50KWZvcihiIGluIGEpcVtiXT1bcVtiXSxhW2JdXTtlbHNlIHYuYWx3YXlzKGFbdi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dTtyZXR1cm4gYyYmYy5hYm9ydChiKSx4KDAsYiksdGhpc319O2lmKG8ucHJvbWlzZSh2KS5jb21wbGV0ZT1wLmFkZCx2LnN1Y2Nlc3M9di5kb25lLHYuZXJyb3I9di5mYWlsLGsudXJsPSgoYXx8ay51cmx8fEFiKStcIlwiKS5yZXBsYWNlKEJiLFwiXCIpLnJlcGxhY2UoR2IsemJbMV0rXCIvL1wiKSxrLnR5cGU9Yi5tZXRob2R8fGIudHlwZXx8ay5tZXRob2R8fGsudHlwZSxrLmRhdGFUeXBlcz1uLnRyaW0oay5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goSCl8fFtcIlwiXSxudWxsPT1rLmNyb3NzRG9tYWluJiYoaD1IYi5leGVjKGsudXJsLnRvTG93ZXJDYXNlKCkpLGsuY3Jvc3NEb21haW49ISghaHx8aFsxXT09PXpiWzFdJiZoWzJdPT09emJbMl0mJihoWzNdfHwoXCJodHRwOlwiPT09aFsxXT9cIjgwXCI6XCI0NDNcIikpPT09KHpiWzNdfHwoXCJodHRwOlwiPT09emJbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGsuZGF0YSYmay5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGsuZGF0YSYmKGsuZGF0YT1uLnBhcmFtKGsuZGF0YSxrLnRyYWRpdGlvbmFsKSksTmIoSWIsayxiLHYpLDI9PT10KXJldHVybiB2O2k9ay5nbG9iYWwsaSYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxrLnR5cGU9ay50eXBlLnRvVXBwZXJDYXNlKCksay5oYXNDb250ZW50PSFGYi50ZXN0KGsudHlwZSksZD1rLnVybCxrLmhhc0NvbnRlbnR8fChrLmRhdGEmJihkPWsudXJsKz0oeWIudGVzdChkKT9cIiZcIjpcIj9cIikray5kYXRhLGRlbGV0ZSBrLmRhdGEpLGsuY2FjaGU9PT0hMSYmKGsudXJsPUNiLnRlc3QoZCk/ZC5yZXBsYWNlKENiLFwiJDFfPVwiK3hiKyspOmQrKHliLnRlc3QoZCk/XCImXCI6XCI/XCIpK1wiXz1cIit4YisrKSksay5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZF0pLG4uZXRhZ1tkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tkXSkpLChrLmRhdGEmJmsuaGFzQ29udGVudCYmay5jb250ZW50VHlwZSE9PSExfHxiLmNvbnRlbnRUeXBlKSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsay5jb250ZW50VHlwZSksdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsay5kYXRhVHlwZXNbMF0mJmsuYWNjZXB0c1trLmRhdGFUeXBlc1swXV0/ay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1rLmRhdGFUeXBlc1swXT9cIiwgXCIrS2IrXCI7IHE9MC4wMVwiOlwiXCIpOmsuYWNjZXB0c1tcIipcIl0pO2ZvcihqIGluIGsuaGVhZGVycyl2LnNldFJlcXVlc3RIZWFkZXIoaixrLmhlYWRlcnNbal0pO2lmKGsuYmVmb3JlU2VuZCYmKGsuYmVmb3JlU2VuZC5jYWxsKGwsdixrKT09PSExfHwyPT09dCkpcmV0dXJuIHYuYWJvcnQoKTt1PVwiYWJvcnRcIjtmb3IoaiBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl2W2pdKGtbal0pO2lmKGM9TmIoSmIsayxiLHYpKXt2LnJlYWR5U3RhdGU9MSxpJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt2LGtdKSxrLmFzeW5jJiZrLnRpbWVvdXQ+MCYmKGc9c2V0VGltZW91dChmdW5jdGlvbigpe3YuYWJvcnQoXCJ0aW1lb3V0XCIpfSxrLnRpbWVvdXQpKTt0cnl7dD0xLGMuc2VuZChyLHgpfWNhdGNoKHcpe2lmKCEoMj50KSl0aHJvdyB3O3goLTEsdyl9fWVsc2UgeCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB4KGEsYixmLGgpe3ZhciBqLHIscyx1LHcseD1iOzIhPT10JiYodD0yLGcmJmNsZWFyVGltZW91dChnKSxjPXZvaWQgMCxlPWh8fFwiXCIsdi5yZWFkeVN0YXRlPWE+MD80OjAsaj1hPj0yMDAmJjMwMD5hfHwzMDQ9PT1hLGYmJih1PVBiKGssdixmKSksdT1RYihrLHUsdixqKSxqPyhrLmlmTW9kaWZpZWQmJih3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtkXT13KSx3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZF09dykpLDIwND09PWF8fFwiSEVBRFwiPT09ay50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1hP3g9XCJub3Rtb2RpZmllZFwiOih4PXUuc3RhdGUscj11LmRhdGEscz11LmVycm9yLGo9IXMpKToocz14LChhfHwheCkmJih4PVwiZXJyb3JcIiwwPmEmJihhPTApKSksdi5zdGF0dXM9YSx2LnN0YXR1c1RleHQ9KGJ8fHgpK1wiXCIsaj9vLnJlc29sdmVXaXRoKGwsW3IseCx2XSk6by5yZWplY3RXaXRoKGwsW3YseCxzXSksdi5zdGF0dXNDb2RlKHEpLHE9dm9pZCAwLGkmJm0udHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt2LGssaj9yOnNdKSxwLmZpcmVXaXRoKGwsW3YseF0pLGkmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdixrXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gdn0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0pfX0pLG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX07dmFyIFJiPS8lMjAvZyxTYj0vXFxbXFxdJC8sVGI9L1xccj9cXG4vZyxVYj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksVmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIFdiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fFNiLnRlc3QoYSk/ZChhLGUpOldiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpV2IoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKVdiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoUmIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJlZiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFVYi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhVS50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKFRiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoVGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYSl7fX07dmFyIFhiPTAsWWI9e30sWmI9ezA6MjAwLDEyMjM6MjA0fSwkYj1uLmFqYXhTZXR0aW5ncy54aHIoKTthLkFjdGl2ZVhPYmplY3QmJm4oYSkub24oXCJ1bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBZYilZYlthXSgpfSksay5jb3JzPSEhJGImJlwid2l0aENyZWRlbnRpYWxzXCJpbiAkYixrLmFqYXg9JGI9ISEkYixuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGsuY29yc3x8JGImJiFhLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hLnhocigpLGc9KytYYjtpZihmLm9wZW4oYS50eXBlLGEudXJsLGEuYXN5bmMsYS51c2VybmFtZSxhLnBhc3N3b3JkKSxhLnhockZpZWxkcylmb3IoZSBpbiBhLnhockZpZWxkcylmW2VdPWEueGhyRmllbGRzW2VdO2EubWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlKGEubWltZVR5cGUpLGEuY3Jvc3NEb21haW58fGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoY1tcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZSBpbiBjKWYuc2V0UmVxdWVzdEhlYWRlcihlLGNbZV0pO2I9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmKGRlbGV0ZSBZYltnXSxiPWYub25sb2FkPWYub25lcnJvcj1udWxsLFwiYWJvcnRcIj09PWE/Zi5hYm9ydCgpOlwiZXJyb3JcIj09PWE/ZChmLnN0YXR1cyxmLnN0YXR1c1RleHQpOmQoWmJbZi5zdGF0dXNdfHxmLnN0YXR1cyxmLnN0YXR1c1RleHQsXCJzdHJpbmdcIj09dHlwZW9mIGYucmVzcG9uc2VUZXh0P3t0ZXh0OmYucmVzcG9uc2VUZXh0fTp2b2lkIDAsZi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sZi5vbmxvYWQ9YigpLGYub25lcnJvcj1iKFwiZXJyb3JcIiksYj1ZYltnXT1iKFwiYWJvcnRcIik7dHJ5e2Yuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCl9Y2F0Y2goaCl7aWYoYil0aHJvdyBofX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2FzeW5jOiEwLGNoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZShcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksbC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBfYj1bXSxhYz0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPV9iLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIreGIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoYWMudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYhKGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJmFjLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoYWMsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oeWIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLF9iLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxsO3ZhciBkPXkuZXhlYyhhKSxlPSFjJiZbXTtyZXR1cm4gZD9bYi5jcmVhdGVFbGVtZW50KGRbMV0pXTooZD1uLmJ1aWxkRnJhZ21lbnQoW2FdLGIsZSksZSYmZS5sZW5ndGgmJm4oZSkucmVtb3ZlKCksbi5tZXJnZShbXSxkLmNoaWxkTm9kZXMpKX07dmFyIGJjPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZiYylyZXR1cm4gYmMuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPj0wJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmNvbXBsZXRlKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSksdGhpc30sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIGNjPWEualF1ZXJ5LGRjPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPWRjKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1jYyksbn0sdHlwZW9mIGI9PT1WJiYoYS5qUXVlcnk9YS4kPW4pLG59KTtcblxuIiwiLyoqXG4gKiBDb29raWVzXG4gKlxuICogSlMgTGlicmFyeSB0byBkZWFsIHdpdGggQ29va2llc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjRcbiAqL1xuXG52YXIgQ29va2llcyA9IHtcblxuXHQvKipcblx0ICogR2V0XG5cdCAqXG5cdCAqIEdldHMgYSBjb29raWUgb3IgcmV0dXJucyB0aGUgZGVmYXVsdC4gU2V0IG5vIG5hbWUgdG8gZ2V0IGFsbFxuXHQgKlxuXHQgKiBAbmFtZSBnZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llIHRvIGZldGNoXG5cdCAqIEBwYXJhbSBzdHIgZGVmYXVsdF9cdFx0XHRUaGUgZGVmYXVsdCB2YWx1ZSB0byByZXR1cm4gaWYgbm8gY29va2llIGlzIGZvdW5kXG5cdCAqIEByZXR1cm4gc3RyfG51bGxcblx0ICovXG5cdGdldDogZnVuY3Rpb24obmFtZSwgZGVmYXVsdF8pIHtcblxuXHRcdC8vIFNldCB0aGUgZGVmYXVsdCBpZiBubyB2YWx1ZSBpcyBwYXNzZWRcblx0XHRpZih0eXBlb2YgZGVmYXVsdF8gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGRlZmF1bHRfID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBQYXJzZSBhbGwgY29va2llc1xuXHRcdHZhciBvQ29va2llcyA9IHt9XG5cdFx0dmFyIGxDb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jylcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbENvb2tpZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGwgPSBsQ29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0b0Nvb2tpZXNbbFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobFsxXSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBuYW1lLCByZXR1cm4gYWxsXG5cdFx0aWYodHlwZW9mIG5hbWUgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBvQ29va2llcztcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgY29va2llIGV4aXN0cyByZXR1cm4gaXQsIGVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0XG5cdFx0cmV0dXJuIChuYW1lIGluIG9Db29raWVzKSA/IG9Db29raWVzW25hbWVdIDogZGVmYXVsdF87XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlbW92ZVxuXHQgKlxuXHQgKiBEZWxldGVzIGEgY29va2llXG5cdCAqXG5cdCAqIEBuYW1lIHJlbW92ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyIG5hbWVcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBjb29raWUgdG8gZGVsZXRlXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJyZW1vdmVcIjogZnVuY3Rpb24obmFtZSwgZG9tYWluLCBwYXRoKSB7XG5cdFx0dGhpcy5zZXQobmFtZSwgJycsIC0xLCBkb21haW4sIHBhdGgpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXRcblx0ICpcblx0ICogU2V0cyBhIGNvb2tpZVxuXHQgKlxuXHQgKiBAbmFtZSBzZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llXG5cdCAqIEBwYXJhbSBzdHIgdmFsdWVcdFx0XHRcdFRoZSB2YWx1ZSB0byBzdG9yZVxuXHQgKiBAcGFyYW0gaW50IGV4cGlyZXNcdFx0XHRUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmVmb3JlIHRoZSBjb29raWUgZXhwaXJlc1xuXHQgKiBAcGFyYW0gc3RyIGRvbWFpblx0XHRcdFRoZSBvcHRpb25hbCBkb21haW4gdG8gc2V0IHRoZSBjb29raWUgb25cblx0ICogQHBhcmFtIHN0ciBwYXRoXHRcdFx0XHRUaGUgb3B0aW9uYWwgcGF0aCBvZiB0aGUgY29va2llXG5cdCAqIEByZXR1cm4gbnVsbFxuXHQgKi9cblx0c2V0OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZXhwaXJlcywgZG9tYWluLCBwYXRoKSB7XG5cblx0XHQvLyBHZW5lcmF0ZSB0aGUgZXhwaXJlcyB0aW1lXG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleHBpcmVzKjEwMDApKVxuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGNvb2tpZSBzdHJpbmdcblx0XHR2YXIgcyA9IG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICtcblx0XHRcdFx0JzsgZXhwaXJlcz0nICsgZC50b0dNVFN0cmluZygpICsgJzsnO1xuXHRcdGlmKGRvbWFpbikge1xuXHRcdFx0cyArPSAnIGRvbWFpbj0nICsgZG9tYWluICsgJzsnO1xuXHRcdH1cblx0XHRpZihwYXRoKSB7XG5cdFx0XHRzICs9ICcgcGF0aD0nICsgcGF0aCArICc7Jztcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvb2tpZVxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IHM7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gQ29va2llcztcbiIsIi8qKlxuICogRXZlbnRzXG4gKlxuICogRXZlbnQgbW9kZWwgZm9yIG5vbiBVSSBldmVudHNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gSW5pdCB0aGUgY2FsbGJhY2tzIG9iamVjdFxudmFyIF9jYWxsYmFja3MgPSB7fTtcblxuLyoqXG4gKiBBZGRcbiAqXG4gKiBBZGRzIGEgY2FsbGJhY2sgdG8gYW4gZXZlbnRcbiAqXG4gKiBAbmFtZSBhZGRcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0gc3RyIGV2ZW50XHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgdG8gYXR0YWNoIHRvIHRoZSBldmVudFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIGFkZChldmVudCwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB0aGUgZXZlbnQgZG9lc24ndCBleGlzdCB5ZXRcblx0aWYoIShldmVudCBpbiBfY2FsbGJhY2tzKSkge1xuXHRcdF9jYWxsYmFja3NbZXZlbnRdID0gW11cblx0fVxuXG5cdC8vIEFkZCB0aGUgY2FsbGJhY2sgdG8gdGhlIGxpc3Rcblx0X2NhbGxiYWNrc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICogUmVtb3ZlXG4gKlxuICogUmVtb3ZlcyBhIGNhbGxiYWNrIGZyb20gYSBzcGVjaWZpYyBldmVudFxuICpcbiAqIEBuYW1lIHJlbW92ZVxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSBzdHIgZXZlbnRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZW1vdmUgdGhlIGNhbGxiYWNrIGZyb21cbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgZXhhY3Qgc2FtZSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB0byB0aGUgZXZlbnRcbiAqIEByZXR1cm5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGV2ZW50LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHRoZSBuYW1lIGV4aXN0cyBpbiB0aGUgb2JqZWN0XG5cdGlmKGV2ZW50IGluIF9jYWxsYmFja3MpIHtcblxuXHRcdC8vIElmIHRoZSBjYWxsYmFjayBleGlzdHMgaW4gdGhlIGxpc3Rcblx0XHR2YXIgaSA9IF9jYWxsYmFja3NbZXZlbnRdLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdGlmKGkgIT0gLTEpIHtcblx0XHRcdF9jYWxsYmFja3NbZXZlbnRdLnNwbGljZShpLDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm90aGluZyBmb3VuZCwgcmV0dXJuIGZhbHNlXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyXG4gKlxuICogVHJpZ2dlcnMgYSBzcGVjaWZpYyBldmVudCBhbmQgY2FsbHMgYWxsIGNhbGxiYWNrcyBhc3NvY2lhdGVkXG4gKlxuICogQG5hbWUgdHJpZ2dlclxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSBzdHIgZXZlbnRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byB0cmlnZ2VyXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gdHJpZ2dlcihldmVudCkge1xuXG5cdC8vIElmIHdlIGhhdmUgY2FsbGJhY2tzIGZvciB0aGUgZXZlbnRcblx0aWYoZXZlbnQgaW4gX2NhbGxiYWNrcykge1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG5cdFx0Ly9cdGNhbGxiYWNrc1xuXHRcdHZhciBhcmdzID0gW107XG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpLnNsaWNlKDEpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYW55IGNhbGxiYWNrcywgY2FsbCB0aGVtIG9uZSBieSBvbmVcblx0XHRmb3IodmFyIGkgaW4gX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBiID0gX2NhbGxiYWNrc1tldmVudF1baV0uYXBwbHkobnVsbCwgYXJncyk7XG5cdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGV2ZW50ICsgJyBjYWxsYmFjayAnICsgaSArICcgdGhyZXcgZXhjZXB0aW9uOiAnICsgZXJyKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgZ290IGZhbHNlIGJhY2ssIHN0b3AgY2FsbGluZyB0aGUgY2FsbGJhY2tzXG5cdFx0XHRpZihiID09PSBmYWxzZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBObyBjYWxsYmFja3MgYXNzY29jaXRlZCB3aXRoIHRoZSBldmVudFxuXHRlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdldmVudCB2YWx1ZSBcIicgKyBldmVudCArICdcIiByZXR1cm5lZCwgYW5kIG5vIGNhbGxiYWNrcyB3ZXJlIGZvdW5kIHRvIGhhbmRsZSBpdCcpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgZnVuY3Rpb25zXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZGRcIjogYWRkLFxuXHRcInJlbW92ZVwiOiByZW1vdmUsXG5cdFwidHJpZ2dlclwiOiB0cmlnZ2VyXG59XG4iLCIvKipcbiAqIEhhc2hcbiAqXG4gKiBKUyBMaWJyYXJ5IHRvIG1hbmFnZSBoYXNoIHZhbHVlc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTItMDlcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBUb29scyA9IHJlcXVpcmUoJy4vdG9vbHMuanMnKTtcblxuLy8gVmFsdWVzXG52YXIgX2hhc2ggPSB7fTtcblxuLy8gbmFtZSByZWdleFxudmFyIF9uYW1lUkUgPSAvXlthLXpdKyQvO1xuXG4vLyBDYWxsYmFja3NcbnZhciBfd2F0Y2hlcyA9IHt9O1xuXG4vKipcbiAqIENoZWNrIFdhdGNoZXNcbiAqXG4gKiBHZXRzIG9sZCB2YWx1ZXMgYW5kIGNvbXBhcmVzIHRoZW0gdG8gZXhpc3RpbmcgdmFsdWVzLCBpZiBhbnlvbmUgaXMgd2F0Y2hpbmdcbiAqIGFueSBuYW1lcyB0aGF0IGFyZSBjaGFuZ2VkLCB0aGV5IGFyZSBub3RpZmllZFxuICpcbiAqIEBuYW1lIF9jaGVja1dhdGNoZXNcbiAqIEBwYXJhbSBvYmplY3Qgb2xkXHRcdFx0VGhlIG9sZCB2YWx1ZXMgdG8gY2hlY2sgYWdhaW5cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfY2hlY2tXYXRjaGVzKG9sZCkge1xuXG5cdC8vIElmIHRoZXJlIGFyZSB3YXRjaGVzXG5cdGlmKCFUb29scy5lbXB0eShfd2F0Y2hlcykpIHtcblxuXHRcdC8vIENoZWNrIGVhY2ggd2F0Y2hcblx0XHRmb3IodmFyIG5hbWUgaW4gX3dhdGNoZXMpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGRpZG4ndCBleGlzdCBhbmQgbm93IGl0IGRvZXMsIG9yIGl0IGRpZCBleGlzdFxuXHRcdFx0Ly9cdGFuZCBub3cgaXQgZG9lc24ndCwgb3IgdGhlIHZhbHVlcyBkb24ndCBtYXRjaFxuXHRcdFx0aWYoKCEobmFtZSBpbiBvbGQpICYmIG5hbWUgaW4gX2hhc2gpIHx8XG5cdFx0XHRcdChuYW1lIGluIG9sZCAmJiAhKG5hbWUgaW4gX2hhc2gpKSB8fFxuXHRcdFx0XHRvbGRbbmFtZV0gIT0gX2hhc2hbbmFtZV0pIHtcblxuXHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggY2FsbGJhY2sgYW5kIGNhbGwgaXRcblx0XHRcdFx0Zm9yKHZhciBmIG9mIF93YXRjaGVzW25hbWVdKSB7XG5cdFx0XHRcdFx0ZihfaGFzaFtuYW1lXSB8fCBudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEhhc2ggQ2hhbmdlZFxuICpcbiAqIENhbGxlZCB3aGVuIHRoZSBsb2NhdGlvbiBoYXNoIGhhcyBiZWVuIGFsdGVyZWQsIG5vdGlmaWVzIGFueSB3YXRjaGVycyBvZlxuICogaGFzaCB2YWx1ZXMgY2hhbmdpbmdcbiAqXG4gKiBAbmFtZSBfaGFzaENoYW5nZWRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaGFzaENoYW5nZWQoKSB7XG5cblx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgaGFzaFxuXHR2YXIgb2xkID0gVG9vbHMuY2xvbmUoX2hhc2gpO1xuXG5cdC8vIFJlLXBhcnNlIHRoZSBjdXJyZW50IGxvY2F0aW9uIGhhc2hcblx0X3BhcnNlSGFzaCgpO1xuXG5cdC8vIENoZWNrIHRoZSB3YXRjaGVzXG5cdF9jaGVja1dhdGNoZXMob2xkKTtcbn1cblxuLyoqXG4gKiBQYXJzZSBIYXNoXG4gKlxuICogUGFyc2VzIHRoZSBjdXJyZW50IGxvY2F0aW9uIGhhc2ggaW50byBhbiBvYmplY3RcbiAqXG4gKiBAbmFtZSBfcGFyc2VIYXNoXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BhcnNlSGFzaCgpIHtcblxuXHQvLyBJZiB0aGVyZSdzIGFueXRoaW5nIGluIHRoZSBoYXNoXG5cdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+IDEpIHtcblx0XHR2YXIgcmVnZXggPSAvKFtePSZdKyk9PyhbXiZdKikvZ1xuXHRcdHZhciBmaWVsZCA9IG51bGw7XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggcGFydCBmb3VuZFxuXHRcdHdoaWxlKGZpZWxkID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKSB7XG5cdFx0XHRfaGFzaFtmaWVsZFsxXV0gPSBkZWNvZGVVUklDb21wb25lbnQoZmllbGRbMl0pLnJlcGxhY2UoJysnLCAnICcpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxudmFyIEhhc2ggPSB7XG5cblx0LyoqXG5cdCAqIEluaXRcblx0ICpcblx0ICogSW5pdGlhbGlzZXMgdGhlIGludGVybmFsIGhhc2ggYnkgZmV0Y2hpbmcgYW5kIHBhcnNpbmcgdGhlIGN1cnJlbnRcblx0ICogbG9jYXRpb24gaGFzaFxuXHQgKlxuXHQgKiBAbmFtZSBpbml0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRcImluaXRcIjogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBUcmFjayBjaGFuZ2VzXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIF9oYXNoQ2hhbmdlZCk7XG5cblx0XHQvLyBQYXJzZSB0aGUgY3VycmVudCBsb2NhdGlvbiBoYXNoXG5cdFx0X3BhcnNlSGFzaCgpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRcblx0ICpcblx0ICogUmV0dXJucyBhIGhhc2ggbmFtZVxuXHQgKlxuXHQgKiBAbmFtZSBnZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIG5hbWVcdFx0VGhlIG5hbWUgdG8gbG9vayBmb3Jcblx0ICogQHBhcmFtIHN0cmluZyBkZWZhdWx0X1x0VGhlIHZhbHVlIHRvIHJldHVybiBpZiB0aGUgbmFtZSBpc24ndCBmb3VuZFxuXHQgKiBAcmV0dXJuIHN0clxuXHQgKi9cblx0XCJnZXRcIjogZnVuY3Rpb24obmFtZSwgZGVmYXVsdF8pIHtcblxuXHRcdC8vIElmIHRoZSBuYW1lIGlzIGludmFsaWRcblx0XHRpZighX25hbWVSRS50ZXN0KG5hbWUpKSB7XG5cdFx0XHR0aHJvdyAnSW52YWxpZCBIYXNoIG5hbWUnO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlIGlzIGEgdmFsdWUgZm9yIHRoZSBuYW1lXG5cdFx0aWYodHlwZW9mIF9oYXNoW25hbWVdICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gX2hhc2hbbmFtZV07XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgcmV0dXJuIHRoZSBkZWZhdWx0XG5cdFx0ZWxzZSB7XG5cdFx0XHRyZXR1cm4gZGVmYXVsdF87XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXRcblx0ICpcblx0ICogU2V0cyBhIHNwZWNpZmljIG5hbWVcblx0ICpcblx0ICogQG5hbWUgc2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cnxvYmplY3QgbmFtZVx0VGhlIG5hbWUgdG8gc2V0LCBvciBhbiBvYmplY3Qgb2YgbmFtZS92YWx1ZSBwYWlyc1xuXHQgKiBAcGFyYW0gc3RyIHZhbHVlXHRcdFx0VGhlIHZhbHVlIHRvIHNldCB0aGUgbmFtZSB0b1xuXHQgKi9cblx0XCJzZXRcIjogZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblxuXHRcdC8vIElmIHRoZSBuYW1lIGlzIG5vdCBhbiBvYmplY3Rcblx0XHRpZighVG9vbHMuaXNPYmplY3QobmFtZSkpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGlzIG5vdCBkZWZpbmVkXG5cdFx0XHRpZih0eXBlb2YgdmFsdWUgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0dmFsdWUgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBKYXZhU2NyaXB0IGlzIGR1bWIgYW5kIHRoaW5rcyB7bmFtZTogdmFsdWV9IGlzIHRoZSBzYW1lIGFzXG5cdFx0XHQvL1x0e1wibmFtZVwiOiB2YWx1ZX1cblx0XHRcdHZhciB0ZW1wID0gbmFtZTtcblx0XHRcdG5hbWUgPSB7fTtcblx0XHRcdG5hbWVbdGVtcF0gPSB2YWx1ZTtcblx0XHR9XG5cblx0XHQvLyBTdG9yZSB0aGUgb2xkIGhhc2hcblx0XHR2YXIgb2xkID0gVG9vbHMuY2xvbmUoX2hhc2gpO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIG5hbWVcblx0XHRmb3IodmFyIG4gaW4gbmFtZSkge1xuXG5cdFx0XHQvLyBJZiB0aGUgbmFtZSBpcyBpbnZhbGlkXG5cdFx0XHRpZighX25hbWVSRS50ZXN0KG4pKSB7XG5cdFx0XHRcdHRocm93ICdJbnZhbGlkIEhhc2ggbmFtZTogJyArIG47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGdvdCBudWxsLCBkZWxldGUgdGhlIG5hbWVcblx0XHRcdGlmKG5hbWVbbl0gPT0gbnVsbCkge1xuXHRcdFx0XHRkZWxldGUgX2hhc2hbbl07XG5cdFx0XHR9XG5cdFx0XHQvLyBFbHNlLCBzZXQgdGhlIG5ldyB2YWx1ZVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdF9oYXNoW25dID0gbmFtZVtuXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDaGVjayBhbnlvbmUgd2F0Y2hpbmcgdGhpcyB2YWx1ZVxuXHRcdF9jaGVja1dhdGNoZXMob2xkKTtcblxuXHRcdC8vIEluaXQgYW4gYXJyYXkgdG8gc3RvcmUgdGhlIHBhcnRzXG5cdFx0dmFyIGhhc2ggPSBbXTtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBuYW1lXG5cdFx0Zm9yKHZhciBrIGluIF9oYXNoKSB7XG5cdFx0XHRoYXNoLnB1c2goayArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudChfaGFzaFtrXSkpO1xuXHRcdH1cblxuXHRcdC8vIFJlc2V0IHRoZSB3aW5kb3cgbG9jYXRpb24gaGFzaFxuXHRcdHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaGFzaC5qb2luKCcmJyk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFVud2F0Y2hcblx0ICpcblx0ICogUmVtb3ZlcyBhIGNhbGxiYWNrIGZyb20gdGhlIHdhdGNoZXNcblx0ICpcblx0ICogQG5hbWUgdW53YXRjaFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgbmFtZVx0XHRcdFRoZSBuYW1lIG9mIHRoZSB2YWx1ZSB0byBzdG9wIHdhdGNoaW5nXG5cdCAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgdG8gcmVtb3ZlXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJ1bndhdGNoXCI6IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBuYW1lXG5cdFx0aWYobmFtZSBpbiBfd2F0Y2hlcykge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIHRoZSBjYWxsYmFja3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBuYW1lXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3dhdGNoZXNbbmFtZV0ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBJZiB3ZSBmaW5kIHRoZSBjYWxsYmFja1xuXHRcdFx0XHRpZihfd2F0Y2hlc1tuYW1lXVtpXSA9PSBjYWxsYmFjaykge1xuXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIGl0XG5cdFx0XHRcdFx0X3dhdGNoZXNbbmFtZV0uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogV2F0Y2hcblx0ICpcblx0ICogQWRkcyBhIGNhbGxiYWNrIGZvciBhIHNwZWNpZmljIG5hbWUgd2hpY2ggd2lsbCBiZSBjYWxsZWQgaWYgdGhlIG5hbWUgaXNcblx0ICogYWRkZWQsIGRlbGV0ZWQsIG9yIGNoYW5nZWRcblx0ICpcblx0ICogQG5hbWUgd2F0Y2hcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIG5hbWVcdFx0XHRUaGUgbmFtZSBvZiB0aGUgdmFsdWUgdG8gd2F0Y2hcblx0ICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXNcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRcIndhdGNoXCI6IGZ1bmN0aW9uKG5hbWUsIGNhbGxiYWNrKSB7XG5cblx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIG5hbWVcblx0XHRpZihuYW1lIGluIF93YXRjaGVzKSB7XG5cblx0XHRcdC8vIEdvIHRocm91Z2ggdGhlIGNhbGxiYWNrcyBhc3NvY2lhdGVkIHdpdGggdGhlIG5hbWVcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBfd2F0Y2hlc1tuYW1lXS5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0aGUgY2FsbGJhY2sgdGhlcmUncyBubyBuZWVkIHRvIHN0b3JlIGl0XG5cdFx0XHRcdGlmKF93YXRjaGVzW25hbWVdW2ldID09IGNhbGxiYWNrKSB7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB3ZSBkb24ndCBoYXZlIGFueSBjYWxsYmFja3MgZm9yIHRoZSBuYW1lXG5cdFx0ZWxzZSB7XG5cdFx0XHRfd2F0Y2hlc1tuYW1lXSA9IFtdO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0aGUgY2FsbGJhY2sgdG8gdGhlIHdhdGNoZXNcblx0XHRfd2F0Y2hlc1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBIYXNoO1xuIiwiLyoqXG4gKiBMb2FkZXJcbiAqXG4gKiBTaG93cyBhIGxvYWRpbmcgZ3JhcGhpYyBkdXJpbmcgcmVxdWVzdHMvc3RhcnR1cFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjRcbiAqL1xuXG4vLyBLZWVwIHRyYWNrIG9mIHRoZSBzaG93L2hpZGUgY2FsbHNcbi8vXHRhc3N1bWUgdGhlIGxvYWRlciBzdGFydGVkIG9uXG52YXIgX2NvdW50ID0gMTtcblxuLy8gR2V0IHRoZSBET00gZWxlbWVudFxudmFyIF9lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2FkZXInKTtcblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXG5cdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRoaWRlOiBmdW5jdGlvbigpIHtcblxuXHRcdC8vIERlY3JlbWVudCB0aGUgY291bnRcblx0XHRfY291bnQtLTtcblxuXHRcdC8vIElmIHRoaXMgaXMgdGhlIGxhc3Qgb25lXG5cdFx0aWYoX2NvdW50ID09IDApIHtcblx0XHRcdF9lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdH1cblx0fSxcblxuXHQvLyBTaG93IHRoZSBsb2FkZXJcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJbmNyZW1lbnQgdGhlIGNvdW50XG5cdFx0X2NvdW50Kys7XG5cblx0XHQvLyBJZiB0aGlzIGlzIHRoZSBmaXJzdCBvbmVcblx0XHRpZihfY291bnQgPT0gMSkge1xuXHRcdFx0X2VsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRcdH1cblx0fVxufVxuIiwiLyoqXG4gKiBTZXJ2aWNlc1xuICpcbiAqIEhhbmRsZXMgY29ubmVjdGluZyB0byBhbmQgcmV0cmlldmluZyBkYXRhIGZyb20gc2VydmljZXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gRXh0ZXJuYWwgbW9kdWxlc1xudmFyICQgPSByZXF1aXJlKCcuLi8zcmQvanF1ZXJ5LmFqYXguanMnKTtcblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgQ29va2llcyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvY29va2llcy5qcycpO1xuXG4vLyBTZXJ2aWNlcyBkb21haW5cbnZhciBfZG9tYWluID0gJyc7XG5cbi8vIERlZmF1bHQgZXJyb3IgZnVuY3Rpb25cbnZhciBfZXJyb3IgPSBmdW5jdGlvbigpIHt9XG5cbi8qKlxuICogQ2xlYXJcbiAqXG4gKiBDbGVhcnMgdGhlIHNlc3Npb24gZnJvbSBsb2NhbCBzdG9yYWdlIGFuZCBjb29raWVzXG4gKlxuICogQG5hbWUgX2NsZWFyXG4gKiBhY2Nlc3MgcHJpdmF0ZVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9jbGVhcigpIHtcblxuXHQvLyBEZWxldGUgZnJvbSBsb2NhbFN0b3JhZ2Vcblx0ZGVsZXRlIGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXTtcblxuXHQvLyBEZWxldGUgdGhlIGNvb2tpZVxuXHRDb29raWVzLnJlbW92ZSgnX3Nlc3Npb24nLCAnLicgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUsICcvJyk7XG59XG5cbi8qKlxuICogUmVxdWVzdFxuICpcbiAqIEhhbmRsZXMgYWN0dWFsIHJlcXVlc3RzXG4gKlxuICogQG5hbWUgcmVxdWVzdFxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gc3RyaW5nIG1ldGhvZFx0XHRcdFRoZSBtZXRob2QgdXNlZCB0byBzZW5kIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0gc3RyaW5nIHVybFx0XHRcdFRoZSBmdWxsIFVSTCB0byB0aGUgc2VydmljZS9ub3VuXG4gKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG4gKiBAcGFyYW0gc3RyaW5nIGF1dGhcdFx0XHRPcHRpb25hbCBBdXRob3JpemF0aW9uIHRva2VuXG4gKiBAcmV0dXJuIHhoclxuICovXG5mdW5jdGlvbiBfcmVxdWVzdChtZXRob2QsIHVybCwgZGF0YSkge1xuXG5cdC8vIEdlbmVyYXRlIHRoZSBhamF4IGNvbmZpZ1xuXHR2YXIgb0NvbmZpZyA9IHtcblx0XHRcImJlZm9yZVNlbmRcIjogZnVuY3Rpb24oeGhyLCBzZXR0aW5ncykge1xuXHRcdFx0eGhyLl91cmwgPSB1cmw7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgYSBzZXNzaW9uXG5cdFx0XHRpZignX3Nlc3Npb24nIGluIGxvY2FsU3RvcmFnZSkge1xuXHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlcignQXV0aG9yaXphdGlvbicsIGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcImNvbnRlbnRUeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD11dGYtOFwiLFxuXHRcdFwiZXJyb3JcIjogZnVuY3Rpb24oeGhyLCBzdGF0dXMsIGVycm9yKSB7XG5cblx0XHRcdC8vIElmIHdlIGdvdCBhbiBBdXRob3JpemF0aW9uIGVycm9yXG5cdFx0XHRpZih4aHIuc3RhdHVzID09IDQwMSkge1xuXG5cdFx0XHRcdC8vIENsZWFyIHRoZSBjdXJyZW50IHRva2VuXG5cdFx0XHRcdF9jbGVhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQdXQgdGhlIGVycm9yIGluIHRoZSBjb25zb2xlXG5cdFx0XHRjb25zb2xlLmVycm9yKG1ldGhvZCArICcgJyArIHhoci5fdXJsICsgJyByZXR1cm5lZDogJyArIGVycm9yKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHRoZSB4aHIgdG8gdGhlIGVycm9yIGNhbGxiYWNrXG5cdFx0XHRfZXJyb3IoeGhyKTtcblx0XHR9LFxuXHRcdFwibWV0aG9kXCI6IG1ldGhvZCxcblx0XHRcInVybFwiOiB1cmxcblx0fVxuXG5cdC8vIElmIGl0J3MgYSBnZXQgcmVxdWVzdFxuXHRpZihtZXRob2QgPT0gJ2dldCcpIHtcblx0XHRpZih0eXBlb2YgZGF0YSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdG9Db25maWdbJ2RhdGEnXSA9IFwiZD1cIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG5cdFx0fVxuXHR9XG5cdC8vIEVsc2UgaXQncyBhbnkgb3RoZXIgbWV0aG9kXG5cdGVsc2Uge1xuXHRcdG9Db25maWcuZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHR9XG5cblx0Ly8gTWFrZSB0aGUgcmVxdWVzdCBhbmQgcmV0dXJuIHRoZSB4aHJcblx0cmV0dXJuICQuYWpheChvQ29uZmlnKTtcbn1cblxuLyoqXG4gKiBTdG9yZVxuICpcbiAqIFN0b3JlcyB0aGUgc2Vzc2lvbiB0b2tlbiBpbiBsb2NhbCBzdG9yYWdlIGFuZCBjb29raWVzXG4gKlxuICogQG5hbWUgX3N0b3JlXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSBzdHJpbmcgdG9rZW5cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc3RvcmUodG9rZW4pIHtcblxuXHQvLyBTZXQgdGhlIHNlc3Npb24gaW4gbG9jYWxTdG9yYWdlXG5cdGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSA9IHRva2VuXG5cblx0Ly8gU2V0IHRoZSBzZXNzaW9uIGluIGEgY29va2llXG5cdENvb2tpZXMuc2V0KCdfc2Vzc2lvbicsIHRva2VuLCA4NjQwMCwgJy4nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLCAnLycpO1xufVxuXG4vKipcbiAqIFN1Y2Nlc3NcbiAqXG4gKiBIYW5kbGVzIHN1Y2Nlc3MgZnJvbSB4aHJcbiAqXG4gKiBAbmFtZSBfc3VjY2Vzc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gc3RyaW5nIHJlc1x0XHRcdFRoZSByZXN1bHQgZnJvbSB0aGUgc2VydmVyXG4gKiBAcGFyYW0gc3RyaW5nIHN0YXR1c1x0XHRcdFRoZSBzdGF0dXMgb2YgdGhlIHJlcXVlc3RcbiAqIEBwYXJhbSB4aHIgeGhyXHRcdFx0XHRUaGUgcmVxdWVzdCBvYmplY3RcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc3VjY2VzcyhyZXMsIHN0YXR1cywgeGhyKSB7XG5cblx0Ly8gSWYgdGhlIHJlc3VsdCBpcyBhIHN0cmluZ1xuXHRpZih0eXBlb2YgcmVzID09ICdzdHJpbmcnKSB7XG5cblx0XHQvLyBUcnkgdG8gY29udmVyIGl0IHRvIEpTT05cblx0XHR0cnkge1xuXHRcdFx0cmVzXHQ9IEpTT04ucGFyc2UocmVzKTtcblx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtZXRob2QgKyAnICcgKyB4aHIuX3VybCArICcgcmV0dXJuZWQgaW52YWxpZCBKU09OOiAnICsgZXJyKTtcblx0XHRcdHJlcyA9IHtcImVycm9yXCI6e1wiY29kZVwiOjAsXCJtc2dcIjplcnJ9fTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBTZXJ2aWNlc1xuICovXG52YXIgU2VydmljZXMgPSB7XG5cblx0LyoqXG5cdCAqIEluaXRcblx0ICpcblx0ICogSW5pdGlhbGlzZXMgdGhlIFNlcnZpY2VzIG1vZHVsZXNcblx0ICpcblx0ICogQG5hbWUgaW5pdFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHN1YmRvbWFpblx0XHRUaGUgc3ViLWRvbWFpbiBzZXJ2aWNlcyBjYW4gYmUgcmVhY2hlZCB0aHJvdWdoXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJpbml0XCI6IGZ1bmN0aW9uKHN1YmRvbWFpbiwgZXJyb3IpIHtcblxuXHRcdC8vIFN0b3JlIHRoZSBmdWxsIGRvbWFpbiBuYW1lIGZvciBzZXJ2aWNlIGNhbGxzXG5cdFx0X2RvbWFpbiA9ICcvLycgKyBzdWJkb21haW4gK1xuXHRcdFx0XHRcdCcuJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSArXG5cdFx0XHRcdFx0Jy8nO1xuXG5cdFx0Ly8gRG8gd2UgaGF2ZSBhIHNlc3Npb24gaW4gc3RvcmFnZVxuXHRcdGlmKCdfc2Vzc2lvbicgaW4gbG9jYWxTdG9yYWdlICYmIGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSkge1xuXHRcdFx0dGhpcy5zZXNzaW9uKGxvY2FsU3RvcmFnZVsnX3Nlc3Npb24nXSlcblx0XHR9XG5cblx0XHQvLyBFbHNlIGRvIHdlIGhhdmUgb25lIGluIGEgY29va2llXG5cdFx0ZWxzZSB7XG5cdFx0XHR2YXIgY29va2llID0gQ29va2llcy5nZXQoJ19zZXNzaW9uJyk7XG5cdFx0XHRpZihjb29raWUpIHtcblx0XHRcdFx0dGhpcy5zZXNzaW9uKGNvb2tpZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgYW4gZXJyb3Igd2FzIHBhc3NlZFxuXHRcdGlmKHR5cGVvZiBlcnJvciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdF9lcnJvciA9IGVycm9yO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQ3JlYXRlXG5cdCAqXG5cdCAqIENhbGxzIHRoZSBjcmVhdGUgYWN0aW9uIG9uIGEgc3BlY2lmaWMgc2VydmljZSBub3VuZVxuXHQgKlxuXHQgKiBAbmFtZSBjcmVhdGVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcImNyZWF0ZVwiOiBmdW5jdGlvbihzZXJ2aWNlLCBub3VuLCBkYXRhKSB7XG5cdFx0cmV0dXJuIF9yZXF1ZXN0KCdwb3N0JywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogRGVsZXRlXG5cdCAqXG5cdCAqIENhbGxzIHRoZSBkZWxldGUgYWN0aW9uIG9uIGEgc3BlY2lmaWMgc2VydmljZSBub3VuZVxuXHQgKlxuXHQgKiBAbmFtZSBkZWxldGVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcImRlbGV0ZVwiOiBmdW5jdGlvbihzZXJ2aWNlLCBub3VuLCBkYXRhKSB7XG5cdFx0cmV0dXJuIF9yZXF1ZXN0KCdkZWxldGUnLCBfZG9tYWluICsgc2VydmljZSArICcvJyArIG5vdW4sIGRhdGEpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBSZWFkXG5cdCAqXG5cdCAqIENhbGxzIHRoZSByZWFkIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgcmVhZFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gY2FsbFxuXHQgKiBAcGFyYW0gc3RyaW5nIG5vdW5cdFx0XHRUaGUgbm91biB0byBjYWxsIG9uIHRoZSBzZXJ2aWNlXG5cdCAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2Vcblx0ICogQHJldHVybiB4aHJcblx0ICovXG5cdFwicmVhZFwiOiBmdW5jdGlvbihzZXJ2aWNlLCBub3VuLCBkYXRhKSB7XG5cdFx0cmV0dXJuIF9yZXF1ZXN0KCdnZXQnLCBfZG9tYWluICsgc2VydmljZSArICcvJyArIG5vdW4sIGRhdGEpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXNzaW9uXG5cdCAqXG5cdCAqIFNldCBvciBnZXQgdGhlIHNlc3Npb24gdG9rZW5cblx0ICpcblx0ICogQG5hbWUgc2Vzc2lvblxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHRva2VuXHRcdFx0VGhlIHRva2VuIHRvIHN0b3JlXG5cdCAqIEByZXR1cm4gdm9pZHxzdHJcblx0ICovXG5cdFwic2Vzc2lvblwiOiBmdW5jdGlvbih0b2tlbikge1xuXG5cdFx0Ly8gSWYgd2UgYXJlIHNldHRpbmcgdGhlIHNlc3Npb25cblx0XHRpZih0eXBlb2YgdG9rZW4gIT09ICd1bmRlZmluZWQnKSB7XG5cblx0XHRcdC8vIElmIG51bGwgd2FzIHBhc3NlZCwgZGVsZXRlIHRoZSBzZXNzaW9uXG5cdFx0XHRpZih0b2tlbiA9PSBudWxsKSB7XG5cdFx0XHRcdF9jbGVhcigpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlLCBzZXQgdGhlIHNlc3Npb25cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfc3RvcmUodG9rZW4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgYXJlIHJldHVybmluZyB0aGUgc2Vzc2lvblxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuICgnX3Nlc3Npb24nIGluIGxvY2FsU3RvcmFnZSkgP1xuXHRcdFx0XHRsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10gOlxuXHRcdFx0XHQnJztcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFVwZGF0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgdXBkYXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgdXBkYXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJ1cGRhdGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgncHV0JywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fVxufTtcblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gU2VydmljZXM7XG4iLCIvKipcbiAqIFRvb2xzXG4gKlxuICogVXNlZnVsIGZ1bmN0aW9ucyB0aGF0IGJlbG9uZyB0byBhbnkgc3BlY2lmaWMgbW9kdWxlXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNVxuICovXG5cbi8qKlxuICogVG9vbHNcbiAqL1xudmFyIFRvb2xzID0ge1xuXG5cdC8qKlxuXHQgKiBDbG9uZVxuXHQgKlxuXHQgKiBEZWVwIGNsb25lIGFueSB0eXBlIG9mIG9iamVjdCwgcmV0dXJuaW5nIGEgbmV3IG9uZVxuXHQgKlxuXHQgKiBAbmFtZSBjbG9uZVxuXHQgKiBAcGFyYW0gbWl4ZWQgb1x0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIGNsb25lXG5cdCAqIEByZXR1cm4gbWl4ZWRcblx0ICovXG5cdGNsb25lOiBmdW5jdGlvbihvKSB7XG5cdFx0Ly8gTmV3IHZhclxuXHRcdHZhciBuID0gbnVsbDtcblxuXHRcdC8vIElmIGl0J3MgYW4gYXJyYXlcblx0XHRpZihBcnJheS5pc0FycmF5KCkpIHtcblx0XHRcdG4gPSBbXTtcblx0XHRcdGZvcih2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdG4ucHVzaChUb29scy5jbG9uZShvW2tdKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB0aGUgdmFsdWUgaXMgYW4gb2JqZWN0XG5cdFx0ZWxzZSBpZihUb29scy5pc09iamVjdChvKSkge1xuXHRcdFx0biA9IHt9XG5cdFx0XHRmb3IodmFyIGsgaW4gbykge1xuXHRcdFx0XHRuW2tdID0gVG9vbHMuY2xvbmUob1trXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgY29weSBhcyBpc1xuXHRcdGVsc2Uge1xuXHRcdFx0biA9IG87XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBuZXcgdmFyXG5cdFx0cmV0dXJuIG47XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbXBhcmVcblx0ICpcblx0ICogQ29tcGFyZXMgdHdvIHZhbHVlcyBvZiBhbnkgdHlwZSB0byBzZWUgaWYgdGhleSBjb250YWluIHRoZSBzYW1lXG5cdCAqIGRhdGEgb3Igbm90XG5cdCAqXG5cdCAqIEBuYW1lIGNvbXBhcmVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIHYxXHRcdFx0XHRUaGUgZmlyc3QgdmFsdWVcblx0ICogQHBhcmFtIG1peGVkIHYyXHRcdFx0XHRUaGUgc2Vjb25kIHZhbHVlXG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0Y29tcGFyZSh2MSwgdjIpIHtcblxuXHRcdC8vIElmIHRoZXkncmUgYm90aCBhcnJheXNcblx0XHRpZihBcnJheS5pc0FycmF5KHYxKSAmJiBBcnJheS5pc0FycmF5KHYyKSkge1xuXG5cdFx0XHQvLyBJZiB0aGV5IGRvbid0IGhhdmUgdGhlIHNhbWUgbGVuZ3RoXG5cdFx0XHRpZih2MS5sZW5ndGggIT0gdjIubGVuZ3RoKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGFyZSB0aGUgdmFsdWVzXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdjEubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0aWYoIVRvb2xzLmNvbXBhcmUodjFbaV0sIHYyW2ldKSkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgdGhleSdyZSBib3RoIG9iamVjdHNcblx0XHRlbHNlIGlmKFRvb2xzLmlzT2JqZWN0KHYxKSAmJiBUb29scy5pc09iamVjdCh2MikpIHtcblxuXHRcdFx0Ly8gSWYgdGhleSBkb24ndCBoYXZlIHRoZSBzYW1lIGtleXNcblx0XHRcdGlmKCFUb29scy5jb21wYXJlKE9iamVjdC5rZXlzKHYxKS5zb3J0KCksIE9iamVjdC5rZXlzKHYyKS5zb3J0KCkpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGFyZSBlYWNoIGtleVxuXHRcdFx0Zm9yKHZhciBrIGluIHYxKSB7XG5cdFx0XHRcdGlmKCFUb29scy5jb21wYXJlKHYxW2tdLCB2MltrXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlLCBjb21wYXJlIGFzIGlzXG5cdFx0ZWxzZSB7XG5cdFx0XHRpZih2MSAhPT0gdjIpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJldHVybiBlcXVhbFxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBFbXB0eVxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhbHVlIHR5cGUgaXMgZW1wdHlcblx0ICpcblx0ICogQG5hbWUgZW1wdHlcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YWx1ZSB0byBjaGVjaywgY2FuIGJlIG9iamVjdCwgYXJyYXksIHN0cmluZywgZXRjXG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0ZW1wdHk6IGZ1bmN0aW9uKG0pIHtcblxuXHRcdC8vIElmIGl0J3MgYW4gb2JqZWN0XG5cdFx0aWYoVG9vbHMuaXNPYmplY3QobSkpIHtcblx0XHRcdGZvcih2YXIgcCBpbiBtKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgaXQncyBhbiBhcnJheSBvciBhIHN0cmluZ1xuXHRcdGVsc2UgaWYoQXJyYXkuaXNBcnJheShtKSB8fCB0eXBlb2YgbSA9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIG0ubGVuZ3RoID4gMCA/IHRydWUgOiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBFbHNlXG5cdFx0ZWxzZSB7XG5cblx0XHRcdC8vIElmIGl0J3MgbnVsbCBvciB1bmRlZmluZWRcblx0XHRcdGlmKHR5cGVvZiBtID09ICd1bmRlZmluZWQnIHx8IG0gPT0gbnVsbCkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSByZXR1cm4gZmFsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIElzIERlY2ltYWxcblx0ICpcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YXJpYWJsZSBpcyBhIG51bWJlclxuXHQgKlxuXHQgKiBAbmFtZSBpc0RlY2ltYWxcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byB0ZXN0XG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0aXNEZWNpbWFsOiBmdW5jdGlvbihtKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBtID09ICdudW1iZXInO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBJcyBJbnRlZ2VyXG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgYSB0cnVlIGludGVnZXJcblx0ICpcblx0ICogQG5hbWUgaXNJbnRlZ2VyXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFyaWFibGUgdG8gdGVzdFxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGlzSW50ZWdlcjogZnVuY3Rpb24obSkge1xuXHRcdHJldHVybiBtID09PSArbSAmJiBtID09PSAobXwwKTtcblx0fSxcblxuXHQvKipcblx0ICogSXMgT2JqZWN0XG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgYSB0cnVlIG9iamVjdFxuXHQgKlxuXHQgKiBAbmFtZSBpc09iamVjdFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgbVx0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIHRlc3Rcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRpc09iamVjdDogZnVuY3Rpb24obSkge1xuXHRcdGlmKG0gPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0XHRpZih0eXBlb2YgbSAhPSAnb2JqZWN0JykgcmV0dXJuIGZhbHNlO1xuXHRcdGlmKEFycmF5LmlzQXJyYXkobSkpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKipcblx0ICogT2JqZWN0IE1hcFxuXHQgKlxuXHQgKiBXb3JrcyBsaWtlIG1hcCBmb3IgYXJyYXlzLCBidXQgaXRlcmF0ZXMgb3ZlciBhbiBvYmplY3Rcblx0ICpcblx0ICogQG5hbWUgb21hcFxuXHQgKiBAcGFyYW0ge29iamVjdH0gb1x0XHRcdFRoZSBvYmplY3QgdG8gbWFwXG5cdCAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXHRUaGUgZnVuY3Rpb24gdG8gY2FsbCBlYWNoIGl0ZXJhdGlvblxuXHQgKiBAcmV0dXJuIGFycmF5XG5cdCAqL1xuXHRvbWFwOiBmdW5jdGlvbihvLCBjYWxsYmFjaykge1xuXHRcdHZhciByZXQgPSBbXTtcblx0XHRmb3IodmFyIGsgaW4gbykge1xuXHRcdFx0cmV0LnB1c2goY2FsbGJhY2sob1trXSwgaykpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBVVUlEIHY0XG5cdCAqXG5cdCAqIFJldHVybnMgYSBwc3VlZG8gcmFuZG9tIHN0cmluZyBpbiBVVUlEIGZvcm1hdCAoTk9UIEFDVFVBTExZIEEgVVVJRClcblx0ICpcblx0ICogQG5hbWUgdXVpZHY0XG5cdCAqIEByZXR1cm4gc3RyXG5cdCAqL1xuXHR1dWlkdjQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiAoWzFlN10rLTFlMystNGUzKy04ZTMrLTFlMTEpLnJlcGxhY2UoL1swMThdL2csIGMgPT5cblx0XHRcdChjIF4gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhuZXcgVWludDhBcnJheSgxKSlbMF0gJiAxNSA+PiBjIC8gNCkudG9TdHJpbmcoMTYpXG5cdFx0KVxuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IFRvb2xzO1xuIiwiLyoqXG4gKiBXZWJzb2NrZXRcbiAqXG4gKiBTaW1wbGlmaWVzIHVzaW5nIGEgd2Vic29ja2V0XG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxNy0wNS0xN1xuICovXG5cbi8vIEV4cG9ydCB0aGUgZnVuY3Rpb25cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXJsLCBjb25mKSB7XG5cblx0Ly8gSWYgd2UgY2FuJ3QgaGFuZGxlIHdlYnNvY2tldHNcblx0aWYoISgnV2ViU29ja2V0JyBpbiB3aW5kb3cpKSB7XG5cdFx0Y29uc29sZS5lcnJvcignd2Vic29ja2V0OiBXZWJTb2NrZXRzIG5vdCBzdXBwb3J0ZWQnKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBJZiBjb25mIGlzIG5vdCBkZWZpbmVkXG5cdGlmKHR5cGVvZiBjb25mID09ICd1bmRlZmluZWQnKSB7XG5cdFx0Y29uZiA9IHt9XG5cdH1cblxuXHQvLyBFbHNlLCBpZiBpdCdzIG5vdCBhbiBvYmplY3QsIHdlIGhhdmUgYSBwcm9ibGVtXG5cdGVsc2UgaWYodHlwZW9mIGNvbmYgIT0gJ29iamVjdCcpIHtcblx0XHRjb25zb2xlLmVycm9yKCd3ZWJzb2NrZXQ6IHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIENyZWF0ZSB0aGUgV2ViU29ja2V0XG5cdHZhciBvU29jayA9IG5ldyBXZWJTb2NrZXQodXJsKTtcblxuXHQvLyBBZGQgdGhlIFVSTCB0byB0aGUgaW5zdGFuY2Vcblx0b1NvY2sudXJsID0gdXJsO1xuXG5cdC8vIFNldCB0aGUgb3BlbiBjYWxsYmFja1xuXHRvU29jay5vbm9wZW4gPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIElmIGFuIG9wZW4gY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ29wZW4nIGluIGNvbmYpIHtcblx0XHRcdGNvbmZbJ29wZW4nXShvU29jayk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBvcGVuZWQnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIG1lc3NhZ2UgY2FsbGJhY2tcblx0b1NvY2sub25tZXNzYWdlXHQ9IGZ1bmN0aW9uKGV2KSB7XG5cblx0XHQvLyBJZiBhIG1lc3NhZ2UgY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ21lc3NhZ2UnIGluIGNvbmYpIHtcblx0XHRcdGNvbmZbJ21lc3NhZ2UnXShvU29jaywgZXYpO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGp1c3QgbG9nIHRoZSBldmVudFxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3dlYnNvY2tldDogbWVzc2FnZSByZWNlaXZlZCwgXCInICsgZXYuZGF0YSArICdcIicpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgZXJyb3IgY2FsbGJhY2tcblx0b1NvY2sub25lcnJvciA9IGZ1bmN0aW9uKGV2KSB7XG5cblx0XHQvLyBJZiBhbiBlcnJvciBjYWxsYmFjayBpcyBzZXRcblx0XHRpZignZXJyb3InIGluIGNvbmYpIHtcblx0XHRcdGNvbmZbJ2Vycm9yJ10ob1NvY2ssIGV2KTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IGVycm9yLCBcIicgKyBKU09OLnN0cmluZ2lmeShldikgKyAnXCInKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGNsb3NlIGNhbGxiYWNrXG5cdG9Tb2NrLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdC8vIElmIGEgY2xvc2UgY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ2Nsb3NlJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydjbG9zZSddKG9Tb2NrKTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IGNsb3NlZCcpO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgc29ja2V0XG5cdHJldHVybiBvU29jaztcbn1cbiIsIi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgc3BlY2lmaWNcbnZhciBSZXF1ZXN0cyA9IHJlcXVpcmUoJy4vcmVxdWVzdHMuanMnKTtcblxuLy8gQ29tcG9uZW50c1xudmFyIFNpdGUgPSByZXF1aXJlKCcuL3JlYWN0L3NpdGUuanN4Jyk7XG5cbihmdW5jdGlvbigpIHtcblxuXHQvLyBSZW5kZXIgdGhlIExvZ2luQ29tcG9uZW50XG5cdFJlYWN0RE9NLnJlbmRlcihcblx0XHRSZWFjdC5jcmVhdGVFbGVtZW50KFNpdGUsIHt9KSxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QnKVxuXHQpO1xuXG5cdC8vIEluaXQgdGhlIHJlcXVlc3RzXG5cdFJlcXVlc3RzLmluaXQoKTtcblxuXHQvLyBJbml0IHRoZSBzZXJ2aWNlc1xuXHRTZXJ2aWNlcy5pbml0KFwic2VydmljZXNcIiwgZnVuY3Rpb24oeGhyKSB7XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSA0MDEsIGxldCBldmVyeW9uZSBrbm93IHdlIHNpZ25lZCBvdXRcblx0XHRpZih4aHIuc3RhdHVzID09IDQwMSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25vdXQnKTtcblx0XHR9XG5cdH0pO1xuXG5cdC8vIElmIHdlIGhhdmUgYSBzZXNzaW9uLCBmZXRjaCB0aGUgdGhyb3dlclxuXHRpZihTZXJ2aWNlcy5zZXNzaW9uKCkpIHtcblx0XHRMb2FkZXIuc2hvdygpO1xuXHRcdFNlcnZpY2VzLnJlYWQoJ2F1dGgnLCAnc2Vzc2lvbicsIHt9KS5kb25lKHJlcyA9PiB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbmluJywgcmVzLmRhdGEpO1xuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdExvYWRlci5oaWRlKCk7XG5cblx0Ly8gTWFrZSBFdmVudHMgYXZhaWxhYmxlIGZyb20gY29uc29sZVxuXHR3aW5kb3cuRXZlbnRzID0gRXZlbnRzO1xufSkoKTtcblxuLy8gRXhwb3J0XG5tb2R1bGUuZXhwb3J0cyA9IG51bGw7XG4iLCIvKipcbiAqIEZvcm1zIE1vZHVsZVxuICpcbiAqIENsYXNzZXMgYW5kIGZ1bmN0aW9ucyB1c2VkIGJ5IGFsbCBmb3Jtc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBGVUVMIGZvciB0aGUgRklSRVxuICogQGNyZWF0ZSAyMDE4LTEyLTA4XG4gKi9cblxuLy8gRXJyb3IgY2xhc3MgZGVmaW5lXG52YXIgRVJST1JfQ0xBU1MgPSAnZXJyb3InO1xuXG4vKipcbiAqIEFkZCBDbGFzc1xuICpcbiAqIEFkZHMgdGhlIGVycm9yIGNsYXNzIG5hbWUgdG8gYW4gZWxlbWVudFxuICpcbiAqIEBuYW1lIF9hZGRDbGFzc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gRWxlbWVudCBlbFx0VGhlIGVsZW1lbnQgdG8gcmVtb3ZlIHRoZSBjbGFzcyBmcm9tXG4gKi9cbmZ1bmN0aW9uIF9hZGRDbGFzcyhlbCkge1xuXHRpZighZWwuY2xhc3NOYW1lKSB7XG5cdFx0ZWwuY2xhc3NOYW1lID0gRVJST1JfQ0xBU1M7XG5cdH0gZWxzZSB7XG5cdFx0bGV0IG5hbWVzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cdFx0aWYobmFtZXMuaW5kZXhPZihFUlJPUl9DTEFTUykgPT0gLTEpIHtcblx0XHRcdG5hbWVzLnB1c2goRVJST1JfQ0xBU1MpO1xuXHRcdFx0ZWwuY2xhc3NOYW1lID0gbmFtZXMuam9pbignICcpO1xuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIFJlbW92ZSBDbGFzc1xuICpcbiAqIFJlbW92ZXMgdGhlIGVycm9yIGNsYXNzIG5hbWUgZnJvbSBhbiBlbGVtZW50XG4gKlxuICogQG5hbWUgX3JlbW92ZUNsYXNzXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSBFbGVtZW50IGVsXHRUaGUgZWxlbWVudCB0byByZW1vdmUgdGhlIGNsYXNzIGZyb21cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcmVtb3ZlQ2xhc3MoZWwpIHtcblx0aWYoZWwuY2xhc3NOYW1lLmluY2x1ZGVzKEVSUk9SX0NMQVNTKSkge1xuXHRcdGxldCBuYW1lcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXHRcdG5hbWVzLnNwbGljZShuYW1lcy5pbmRleE9mKEVSUk9SX0NMQVNTKSwgMSk7XG5cdFx0ZWwuY2xhc3NOYW1lID0gbmFtZXMuam9pbignICcpXG5cdH1cbn1cblxuLy8gQ3JlYXRlIHRoZSBCYXNlIE5vZGUgQ29tcG9uZW50XG5jbGFzcyBfQmFzZU5vZGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0ZXJyb3JzKGVycm9ycykge1xuXHRcdGZvcihsZXQgayBpbiBlcnJvcnMpIHtcblx0XHRcdGlmKHRoaXMucmVmc1trXS5lcnJvcnMpIHtcblx0XHRcdFx0dGhpcy5yZWZzW2tdLmVycm9ycyhlcnJvcnNba10pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X2FkZENsYXNzKHRoaXMucmVmc1trXSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgQXJyYXkgRm9ybSBDb21wb25lbnRcbmNsYXNzIEFycmF5Tm9kZSBleHRlbmRzIF9CYXNlTm9kZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJldHVyblxuXHRcdHZhciB2YWx1ZSA9IFtdXG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCByZWZzXG5cdFx0Zm9yKHZhciByIGluIHRoaXMucmVmcykge1xuXHRcdFx0aWYodGhpcy5yZWZzW3JdLnR5cGUgJiYgdGhpcy5yZWZzW3JdLnR5cGUgPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHR2YWx1ZS5wdXNoKHRoaXMucmVmc1tyXS5jaGVja2VkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlLnB1c2godGhpcy5yZWZzW3JdLnZhbHVlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIHZhbHVlc1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG5jbGFzcyBOb2RlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGVycm9ycyhtc2cpIHtcblx0XHRpZih0aGlzLnJlZnMuZWwuZXJyb3JzKSB7XG5cdFx0XHR0aGlzLnJlZnMuZWwuZXJyb3JzKG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9hZGRDbGFzcyh0aGlzLnJlZnMuZWwpO1xuXHRcdH1cblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5yZWZzLmVsLnZhbHVlO1xuXHR9XG5cblx0c2V0IHZhbHVlKHYpIHtcblx0XHR0aGlzLnJlZnMuZWwudmFsdWUgPSB2O1xuXHRcdGlmKHRoaXMudmFsdWVTZXQpIHtcblx0XHRcdHRoaXMudmFsdWVTZXQoKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQ3JlYXRlIHRoZSBiYXNlIENvbXBvbmVudFxuY2xhc3MgUGFyZW50IGV4dGVuZHMgX0Jhc2VOb2RlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmV0dXJuXG5cdFx0dmFyIHZhbHVlID0ge31cblxuXHRcdC8vIEdvIHRocm91Z2ggYWxsIHJlZnNcblx0XHRmb3IodmFyIHIgaW4gdGhpcy5yZWZzKSB7XG5cdFx0XHRpZih0aGlzLnJlZnNbcl0udHlwZSAmJiB0aGlzLnJlZnNbcl0udHlwZSA9PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdHZhbHVlW3JdID0gdGhpcy5yZWZzW3JdLmNoZWNrZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZVtyXSA9IHRoaXMucmVmc1tyXS52YWx1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIHZhbHVlXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0QXJyYXlOb2RlOiBBcnJheU5vZGUsXG5cdE5vZGU6IE5vZGUsXG5cdFBhcmVudDogUGFyZW50LFxuXHRlcnJvckFkZDogX2FkZENsYXNzLFxuXHRlcnJvclJlbW92ZTogX3JlbW92ZUNsYXNzLFxuXHRlcnJvckZvY3VzOiBmdW5jdGlvbihldikge1xuXG5cdFx0Ly8gSWYgdGhlIHNwZWNpYWwgZWxlbWVudHMgcHJvcCBpcyBzZXRcblx0XHRpZihldi5lbGVtZW50cykge1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV2LmVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdF9yZW1vdmVDbGFzcyhldi5lbGVtZW50c1tpXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgYXNzdW1pbmcgY3VycmVudFRhcmdldFxuXHRcdGVsc2Uge1xuXHRcdFx0X3JlbW92ZUNsYXNzKGV2LmN1cnJlbnRUYXJnZXQpO1xuXHRcdH1cblx0fVxufTtcbiIsIi8qKlxuICogSW5wdXQgRW50ZXJcbiAqXG4gKiBBbiBpbnB1dCBib3ggdGhhdCBoYW5kbGVzIEVudGVyIGtleSBwcmVzc2VzIGFuZCBzZW5kcyB0aGVtIHRvIGEgb25FbnRlclxuICogY2FsbGJhY2tcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgRlVFTCBmb3IgdGhlIEZJUkVcbiAqIEBjcmVhdGVkIDIwMTgtMTItMDFcbiAqL1xuXG4vLyBSZWFjdCBCYXNlXG52YXIgRm9ybXMgPSByZXF1aXJlKCcuLi9iYXNlL2Zvcm1zLmpzeCcpO1xuXG4vLyBDcmVhdGUgdGhlIENvbXBvbmVudFxuY2xhc3MgSW5wdXRFbnRlciBleHRlbmRzIEZvcm1zLk5vZGUge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTdG9yZSB0aGUgY2FsbGJhY2tcblx0XHR0aGlzLm9uRW50ZXIgPSBwcm9wcy5vbkVudGVyO1xuXHRcdGRlbGV0ZSB0aGlzLnByb3BzLm9uRW50ZXI7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge31cblxuXHRcdC8vIEJpbmQgZnVuY3Rpb25zXG5cdFx0dGhpcy5rZXlQcmVzcyA9IHRoaXMua2V5UHJlc3MuYmluZCh0aGlzKTtcblx0fVxuXG5cdGtleVByZXNzKGV2KSB7XG5cblx0XHQvLyBJZiBhbiBFbnRlciBrZXkgd2FzIHByZXNzZWQgYW5kIHRoZSBjYWxsYmFjayB3YXMgc2V0XG5cdFx0aWYoZXYua2V5ID09ICdFbnRlcicgJiYgdGhpcy5vbkVudGVyKSB7XG5cdFx0XHR0aGlzLm9uRW50ZXIoZXYuY3VycmVudFRhcmdldC52YWx1ZSk7XG5cdFx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBvbktleVByZXNzIGNhbGxiYWNrXG5cdFx0aWYodGhpcy5wcm9wcy5vbktleVByZXNzKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uS2V5UHJlc3MoZXYpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7IG9uRW50ZXIsIC4uLnJlc3QgfSA9IHRoaXMucHJvcHNcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdHsuLi5yZXN0fVxuXHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdHJlZj1cImVsXCJcblx0XHRcdFx0b25LZXlQcmVzcz17dGhpcy5rZXlQcmVzc31cblx0XHRcdC8+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBJbnB1dEVudGVyO1xuIiwiLyoqXG4gKiBNZW51IENvbXBvbmVudFxuICpcbiAqIEEgY29tcG9uZW50IHRvIGRpc3BsYXkgYSBtZW51IG9uIHRoZSBzY3JlZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTExXG4gKi9cblxuLy8gQ3JlYXRlIHRoZSBNZW51IENvbXBvbmVudFxuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgYmFzZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRzZWxlY3RlZDogdGhpcy5wcm9wcy5zZWxlY3RlZFxuXHRcdH07XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIGNsb3NlXG5cdFx0aWYoIXRoaXMucHJvcHMub25DaGFuZ2UpIHtcblx0XHRcdHRocm93ICdNZW51IHJlcXVpcmVzIG9uQ2hhbmdlIGNhbGxiYWNrJztcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLml0ZW1DbGljayA9IHRoaXMuaXRlbUNsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRpdGVtQ2xpY2sobmFtZSkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogbmFtZX0sICgpID0+IHtcblx0XHRcdHNlbGYucHJvcHMub25DaGFuZ2UobmFtZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXJDaGlsZHJlbigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIFJlYWN0LkNoaWxkcmVuLm1hcCh0aGlzLnByb3BzLmNoaWxkcmVuLCAoY2hpbGQsIGkpID0+IHtcblx0XHRcdHZhciBzdGF0dXMgPSAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA9PSBjaGlsZC5wcm9wcy5uYW1lKSA/ICdhY3RpdmUnIDogJyc7XG5cdFx0XHRyZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCB7XG5cdFx0XHRcdG9uQ2xpY2s6IHNlbGYuaXRlbUNsaWNrLFxuXHRcdFx0XHRjbGFzc05hbWU6IHN0YXR1c1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHRcdHt0aGlzLnJlbmRlckNoaWxkcmVuKCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Z2V0IHNlbGVjdGVkKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXRlLnNlbGVjdGVkO1xuXHR9XG5cblx0c2V0IHNlbGVjdGVkKG4pIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzZWxlY3RlZDogbn0pXG5cdH1cbn1cblxuLy8gQ3JlYXRlIHRoZSBNZW51IEl0ZW0gQ29tcG9uZW50XG5jbGFzcyBJdGVtIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudFxue1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gU2V0IHRoZSBiYXNlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBuYW1lXG5cdFx0aWYoIXRoaXMucHJvcHMubmFtZSkge1xuXHRcdFx0dGhyb3cgJ0l0ZW0gcmVxdWlyZXMgbmFtZSBhdHRyaWJ1dGUnO1xuXHRcdH1cblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuY2xpY2sgPSB0aGlzLmNsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjbGljayhldikge1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdGV2LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0dGhpcy5wcm9wcy5vbkNsaWNrKHRoaXMucHJvcHMubmFtZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxzcGFuIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9IG9uQ2xpY2s9e3RoaXMuY2xpY2t9PlxuXHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvc3Bhbj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCBjb21wb25lbnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJNZW51XCI6IE1lbnUsXG5cdFwiSXRlbVwiOiBJdGVtXG59XG4iLCIvKipcbiAqIE1lc3NhZ2VzXG4gKlxuICogU2hvd3MgYSBtZXNzYWdlIHdpdGggYnV0dG9ucyB0byBhY2NlcHQsIGRpc21pc3MsIGV0Y1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMzFcbiAqL1xuXG4vLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBUb29scyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvdG9vbHMuanMnKTtcblxuLy8gTWFrZSBzdXJlIHRoZXJlIGlzbid0IG1vcmUgdGhhbiBvbmUgTWVzc2FnZXNcbnZhciBfaW5zdGFuY2UgPSBmYWxzZTtcblxuLy8gQ3JlYXRlIHRoZSBtZXNzYWdlIGNvbXBvbmVudFxuY2xhc3MgTWVzc2FnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYnV0dG9uID0gdGhpcy5idXR0b24uYmluZCh0aGlzKTtcblx0fVxuXG5cdGJ1dHRvbihldikge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgY2FsbGJhY2sgYXNzb2NpYXRlZCwgaWYgaXQgcmV0dXJucyBzdWNjZXNzZnVsLCByZW1vdmUgdGhlXG5cdFx0Ly9cdG1lc3NhZ2Vcblx0XHRpZih0aGlzLnByb3BzLmJ1dHRvbnNbZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XS5jYWxsYmFjayh0aGlzLnByb3BzLmlkKSkge1xuXHRcdFx0dGhpcy5wcm9wcy5yZW1vdmUodGhpcy5wcm9wcy5pZCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlXCI+XG5cdFx0XHRcdDxwPntzZWxmLnByb3BzLnRleHR9PC9wPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNcIj5cblx0XHRcdFx0XHR7c2VsZi5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbihiLCBpKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gPGJ1dHRvbiBrZXk9e2l9IGRhdGEtaW5kZXg9e2l9IG9uQ2xpY2s9e3NlbGYuYnV0dG9ufT57Yi50aXRsZX08L2J1dHRvbj5cblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgcHJpbWFyeSBjb21wb25lbnRcbmNsYXNzIE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIGFuIGluc3RhbmNlXG5cdFx0aWYoX2luc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyAnQ2FuXFwndCBoYXZlIG1vcmUgdGhhbiBvbmUgTWVzc2FnZXMnO1xuXHRcdH1cblx0XHRfaW5zdGFuY2UgPSB0cnVlO1xuXG5cdFx0Ly8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1lc3NhZ2VzOiBbXVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm1lc3NhZ2UgPSB0aGlzLm1lc3NhZ2UuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Ly8gVHJhY2sgYW55IG1lc3NhZ2UgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnbWVzc2FnZScsIHRoaXMubWVzc2FnZSk7XG5cdFx0RXZlbnRzLmFkZCgnbWVzc2FnZV9yZW1vdmUnLCB0aGlzLnJlbW92ZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBtZXNzYWdlIGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2UpO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ21lc3NhZ2VfcmVtb3ZlJywgdGhpcy5yZW1vdmUpO1xuXHR9XG5cblx0bWVzc2FnZShpZCwgY29uZikge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1lc3NhZ2VzXG5cdFx0dmFyIG1zZ3MgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcblxuXHRcdC8vIFB1c2ggdGhlIG5ldyBtZXNzYWdlXG5cdFx0bXNnc1tpZF0gPSBjb25mO1xuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1wibWVzc2FnZXNcIjogbXNnc30pO1xuXHR9XG5cblx0cmVtb3ZlKGlkKSB7XG5cblx0XHQvLyBDbG9uZSB0aGUgbWVzc2FnZXNcblx0XHR2YXIgbXNncyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSByZXF1ZXN0ZWQgSURcblx0XHRkZWxldGUgbXNnc1tpZF07XG5cblx0XHQvLyBTZXQgdGhlIHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtZXNzYWdlc1wiOiBtc2dzfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwibWVzc2FnZXNcIj5cblx0XHRcdFx0e1Rvb2xzLm9tYXAodGhpcy5zdGF0ZS5tZXNzYWdlcywgZnVuY3Rpb24obSwgaykge1xuXHRcdFx0XHRcdHJldHVybiA8TWVzc2FnZSB7Li4ubX0ga2V5PXtrfSBpZD17a30gcmVtb3ZlPXtzZWxmLnJlbW92ZX0gLz5cblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgQ29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IE1lc3NhZ2VzXG4iLCIvKipcbiAqIE1vZGVsIENvbXBvbmVudFxuICpcbiAqIEEgY29tcG9uZW50IHRvIGRpc3BsYXkgYSBtb2RhbCBib3ggb24gdGhlIHNjcmVlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMTFcbiAqL1xuXG4vLyBDcmVhdGUgdGhlIENvbXBvbmVudFxuY2xhc3MgTW9kYWwgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50XG57XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIGNsb3NlXG5cdFx0aWYoIXRoaXMucHJvcHMuY2xvc2UpIHtcblx0XHRcdHRocm93ICdNb2RhbCByZXF1aXJlcyBjbG9zZSBjYWxsYmFjayc7XG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5idXR0b25DbGljayA9IHRoaXMuYnV0dG9uQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLnRyYXBFc2NhcGUgPSB0aGlzLnRyYXBFc2NhcGUuYmluZCh0aGlzKTtcblx0fVxuXG5cdC8vIElmIGEgYnV0dG9uIGlzIHB1c2hlZFxuXHRidXR0b25DbGljayhldikge1xuXG5cdFx0Ly8gR2V0IHRoZSBidXR0b24gdXNpbmcgdGhlIGluZGV4XG5cdFx0dmFyIGJ0biA9IHRoaXMucHJvcHMuYnV0dG9uc1tldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIGNhbGxiYWNrXG5cdFx0aWYodHlwZW9mIGJ0bi5jYWxsYmFjayA9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRidG4uY2FsbGJhY2soYnRuKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHQvLyBUcmFwIHRoZSBlc2NhcGUga2V5XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMudHJhcEVzY2FwZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHQvLyBTdG9wIHRyYXBwaW5nIHRoZSBlc2NhcGUga2V5XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMudHJhcEVzY2FwZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIHN0eWxlc1xuXHRcdHZhciBzdHlsZXMgPSB7fVxuXHRcdGlmKHRoaXMucHJvcHMuaGVpZ2h0KSBzdHlsZXMuaGVpZ2h0ID0gdGhpcy5wcm9wcy5oZWlnaHQ7XG5cdFx0aWYodGhpcy5wcm9wcy5tYXhIZWlnaHQpIHN0eWxlcy5tYXhIZWlnaHQgPSB0aGlzLnByb3BzLm1heEhlaWdodDtcblx0XHRpZih0aGlzLnByb3BzLm1heFdpZHRoKSBzdHlsZXMubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG5cdFx0aWYodGhpcy5wcm9wcy53aWR0aCkgc3R5bGVzLndpZHRoID0gdGhpcy5wcm9wcy53aWR0aDtcblxuXHRcdC8vIFJldHVybiB0aGUgSFRNTFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2VsbFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3N0eWxlc30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtd2luZG93LWNsb3NlXCIgb25DbGljaz17dGhpcy5wcm9wcy5jbG9zZX0+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57dGhpcy5wcm9wcy50aXRsZX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5jaGlsZHJlbn1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuYnV0dG9ucyAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvb3RlclwiPlxuXHRcdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uKGJ0biwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBkYXRhLWluZGV4PXtpfSBjbGFzc05hbWU9XCJzbWFsbFwiIG9uQ2xpY2s9e3NlbGYuYnV0dG9uQ2xpY2t9IGRpc2FibGVkPXtidG5bJ2Rpc2FibGVkJ119PntidG5bJ25hbWUnXX08L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdC8vIFRyYXBzIEVTQyBrZXkgY2xpY2tzIHNvIHdlIGNhbiBjbG9zZSB0aGUgTW9kYWwgd2luZG93XG5cdHRyYXBFc2NhcGUoZXYpIHtcblx0XHRpZihldi5rZXlDb2RlID09PSAyNykge1xuXHRcdFx0dGhpcy5wcm9wcy5jbG9zZSgpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBNb2RhbDtcbiIsIi8qKlxuICogUG9wdXBzXG4gKlxuICogU2hvd3MgYSBwb3B1cCBvZiB0eXBlIGVycm9yLCBzdWNjZXNzLCBvciB3YXJuaW5nXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMi0wOFxuICovXG5cbi8vIERlZmluZXNcbnZhciBTVUNDRVNTX1RJTUVPVVQgPSAyMDAwO1xudmFyIEVSUk9SX1RJTUVPVVQgPSAxMDAwMDtcbnZhciBXQVJOSU5HX1RJTUVPVVQgPSA1MDAwO1xudmFyIFNURVBfVElNRU9VVCA9IDIwO1xudmFyIFdJRFRIX1NURVBTID0gNDA7XG52YXIgSEVJR0hUX1NURVBTID0gMjA7XG52YXIgTUFSR0lOID0gNTtcblxuLy8gR2VuZXJpY1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIE1ha2Ugc3VyZSB0aGVyZSBpc24ndCBtb3JlIHRoYW4gb25lIFBvcHVwc1xudmFyIF9pbnN0YW5jZSA9IGZhbHNlO1xuXG4vLyBDcmVhdGUgdGhlIENvbXBvbmVudFxuY2xhc3MgUG9wdXBzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIGFuIGluc3RhbmNlXG5cdFx0aWYoX2luc3RhbmNlKSB7XG5cdFx0XHR0aHJvdyAnQ2FuXFwndCBoYXZlIG1vcmUgdGhhbiBvbmUgUG9wdXBzJztcblx0XHR9XG5cdFx0X2luc3RhbmNlID0gdHJ1ZTtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRwb3B1cHM6IFtdLFxuXHRcdFx0dGltZXI6IG51bGxcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5lcnJvciA9IHRoaXMuZXJyb3IuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvcHVwID0gdGhpcy5wb3B1cC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJvY2VzcyA9IHRoaXMucHJvY2Vzcy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMud2FybmluZyA9IHRoaXMud2FybmluZy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdC8vIFRyYWNrIGFueSBwb3B1cCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdlcnJvcicsIHRoaXMuZXJyb3IpO1xuXHRcdEV2ZW50cy5hZGQoJ3BvcHVwJywgdGhpcy5wb3B1cCk7XG5cdFx0RXZlbnRzLmFkZCgnc3VjY2VzcycsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5hZGQoJ3dhcm5pbmcnLCB0aGlzLndhcm5pbmcpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgcG9wdXAgZXZlbnRzXG5cdFx0RXZlbnRzLnJlbW92ZSgnZXJyb3InLCB0aGlzLmVycm9yKTtcblx0XHRFdmVudHMucmVtb3ZlKCdwb3B1cCcsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3N1Y2Nlc3MnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMucmVtb3ZlKCd3YXJuaW5nJywgdGhpcy53YXJuaW5nKTtcblx0fVxuXG5cdGVycm9yKG1zZykge1xuXHRcdHRoaXMucG9wdXAobXNnLCAnZXJyb3InKTtcblx0fVxuXG5cdHByb2Nlc3MoKSB7XG5cblx0XHQvLyBDbG9uZSB0aGUgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlKTtcblxuXHRcdC8vIElmIHdlIHdlcmUgd2FpdGluZ1xuXHRcdGlmKHN0YXRlLnRpbWVyLnN0ZXAgPT0gMCkge1xuXG5cdFx0XHQvLyBTdGFydCB0aGUgcHJvY2VzcyB0byBoaWRlIHRoZSBmaXJzdCBwb3B1cFxuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydsJ10gPSBNQVJHSU47XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ3InXSA9IE1BUkdJTjtcblxuXHRcdFx0Ly8gU3RhcnQgdGhlIHN0ZXAgdGltZW91dHNcblx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBTVEVQX1RJTUVPVVQpO1xuXHRcdFx0c3RhdGUudGltZXIuc3RlcCA9IDE7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSBuZWVkIHRvIG1vdmUgdGhlIGZpcnN0IHBvcHVwIG9mZiB0aGUgc2NyZWVuXG5cdFx0ZWxzZSBpZihzdGF0ZS50aW1lci5zdGVwID49IDEgJiYgc3RhdGUudGltZXIuc3RlcCA8PSA0MCkge1xuXG5cdFx0XHQvLyBHZXQgdGhlIGlubmVyIHdpZHRoIG9mIHRoZSBzY3JlZW4gYW5kIGRpdmlkZSBieSB0aGUgc3RlcHNcblx0XHRcdHZhciBzdGVwID0gd2luZG93LmlubmVyV2lkdGggLyBXSURUSF9TVEVQUztcblxuXHRcdFx0Ly8gU3VidHJhY3QgaXQgZnJvbSB0aGUgbGVmdCBhbmQgcmlnaHRcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnbCddIC09IHN0ZXA7XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ3InXSArPSBzdGVwO1xuXG5cdFx0XHQvLyBTZXQgdGhlIG5leHQgdGltZW91dFxuXHRcdFx0c3RhdGUudGltZXIucmVzID0gc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIFNURVBfVElNRU9VVCk7XG5cdFx0XHRzdGF0ZS50aW1lci5zdGVwICs9IDE7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSBuZWVkIHRvIG1vdmUgdGhlIGZpcnN0IHBvcHVwIHVwXG5cdFx0ZWxzZSBpZihzdGF0ZS50aW1lci5zdGVwID49IDQxICYmIHN0YXRlLnRpbWVyLnN0ZXAgPD0gNjApIHtcblxuXHRcdFx0Ly8gSWYgd2UncmUgb24gdGhlIGZpcnN0IHN0ZXBcblx0XHRcdGlmKHN0YXRlLnRpbWVyLnN0ZXAgPT0gNDEpIHtcblx0XHRcdFx0c3RhdGUucG9wdXBzWzBdWydvaCddID0gdGhpcy5yZWZzW1wiMFwiXS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHRcdHN0YXRlLnBvcHVwc1swXVsnaCddID0gdGhpcy5yZWZzW1wiMFwiXS5vZmZzZXRIZWlnaHQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdldCB0aGUgaGVpZ2h0IG9mIHRoZSBkaXYgYW5kIGRpdmlkZSBieSB0aGUgc3RlcHNcblx0XHRcdHZhciBzdGVwID0gc3RhdGUucG9wdXBzWzBdWydvaCddIC8gSEVJR0hUX1NURVBTO1xuXG5cdFx0XHQvLyBTdWJ0cmFjdCBpdCBmcm9tIHRoZSBjdXJyZW50IGhlaWdodFxuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydoJ10gLT0gc3RlcDtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXh0IHRpbWVvdXRcblx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBTVEVQX1RJTUVPVVQpO1xuXHRcdFx0c3RhdGUudGltZXIuc3RlcCArPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byByZW1vdmUgdGhlIHBvcHVwIGNvbXBsZXRlbHlcblx0XHRlbHNlIGlmKHN0YXRlLnRpbWVyLnN0ZXAgPT0gNjEpIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBjdXJyZW50IGZpcnN0IHBvcHVwXG5cdFx0XHRzdGF0ZS5wb3B1cHMuc3BsaWNlKDAsIDEpO1xuXG5cdFx0XHQvLyBJZiB3ZSBzdGlsbCBoYXZlIHBvcHVwc1xuXHRcdFx0aWYoc3RhdGUucG9wdXBzLmxlbmd0aCkge1xuXG5cdFx0XHRcdC8vIFJlc2V0IHRoZSB0aW1lciBzdGVwc1xuXHRcdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2Vzcywgc3RhdGUucG9wdXBzWzBdLnRpbWVvdXQpO1xuXHRcdFx0XHRzdGF0ZS50aW1lci5zdGVwID0gMDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgbm8gbW9yZSB0aW1lb3V0c1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0YXRlLnRpbWVyID0gbnVsbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInBvcHVwc1wiIHN0eWxlPXt7ZGlzcGxheTogdGhpcy5zdGF0ZS5wb3B1cHMubGVuZ3RoID8gJ2Jsb2NrJyA6ICdub25lJ319PlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wb3B1cHMubWFwKChtc2csIGkpID0+IHtcblx0XHRcdFx0XHRsZXQgc3R5bGUgPSB7fVxuXHRcdFx0XHRcdGlmKHR5cGVvZiBtc2cubCAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0c3R5bGUubWFyZ2luTGVmdCA9IG1zZy5sICsgJ3B4Jztcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpblJpZ2h0ID0gbXNnLnIgKyAncHgnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZih0eXBlb2YgbXNnLmggIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHN0eWxlLmhlaWdodCA9IG1zZy5oICsgJ3B4Jztcblx0XHRcdFx0XHRcdHN0eWxlLnBhZGRpbmcgPSAwO1xuXHRcdFx0XHRcdFx0c3R5bGUubWFyZ2luQm90dG9tID0gMDtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpblRvcCA9IDA7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSByZWY9e1wiXCIgKyBpfSBjbGFzc05hbWU9e21zZy50eXBlfSBzdHlsZT17c3R5bGV9PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9e1wiZmFzIGZhLVwiICsgbXNnLmljb259IC8+XG5cdFx0XHRcdFx0XHRcdHttc2cudGV4dH1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdClcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cG9wdXAodGV4dCwgdHlwZSkge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyB0eXBlXG5cdFx0aWYodHlwZW9mIHR5cGUgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHR5cGUgPSAnc3VjY2Vzcyc7XG5cdFx0fVxuXG5cdFx0dmFyIGlUaW1lb3V0ID0gMDtcblx0XHR2YXIgc0ljb24gPSAnJztcblx0XHRzd2l0Y2godHlwZSkge1xuXHRcdFx0Y2FzZSAnc3VjY2Vzcyc6XG5cdFx0XHRcdGlUaW1lb3V0ID0gU1VDQ0VTU19USU1FT1VUO1xuXHRcdFx0XHRzSWNvbiA9ICdjaGVjay1jaXJjbGUnO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ2Vycm9yJzpcblx0XHRcdFx0aVRpbWVvdXQgPSBFUlJPUl9USU1FT1VUO1xuXHRcdFx0XHRzSWNvbiA9ICdleGNsYW1hdGlvbi1jaXJjbGUnO1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKHRleHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ3dhcm5pbmcnOlxuXHRcdFx0XHRpVGltZW91dCA9IFdBUk5JTkdfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnZXhjbGFtYXRpb24tdHJpYW5nbGUnO1xuXHRcdFx0XHRjb25zb2xlLndhcm4odGV4dCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dGhyb3cgXCJJbnZhbGlkIHBvcHVwIHR5cGU6IFwiICsgdHlwZTtcblx0XHR9XG5cblx0XHQvLyBDbG9uZSB0aGUgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlKTtcblxuXHRcdC8vIEFkZCB0aGUgcG9wdXBcblx0XHRzdGF0ZS5wb3B1cHMucHVzaCh7XG5cdFx0XHRpY29uOiBzSWNvbixcblx0XHRcdHRleHQ6IHRleHQsXG5cdFx0XHR0aW1lb3V0OiBpVGltZW91dCxcblx0XHRcdHR5cGU6IHR5cGVcblx0XHR9KTtcblxuXHRcdC8vIFNldCB0aGUgdGltZXJcblx0XHRpZihzdGF0ZS50aW1lciA9PSBudWxsKSB7XG5cdFx0XHRzdGF0ZS50aW1lciA9IHtcblx0XHRcdFx0cmVzOiBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgaVRpbWVvdXQpLFxuXHRcdFx0XHRzdGVwOiAwXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fVxuXG5cdHdhcm5pbmcobXNnKSB7XG5cdFx0dGhpcy5wb3B1cChtc2csICd3YXJuaW5nJyk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gUG9wdXBzO1xuIiwiLyoqXG4gKiBIZWFkZXJcbiAqXG4gKiBNYW5hZ2VzIHNpZ24gaW4gLyBzaWduIG91dCAvIHNpZ24gdXBcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIxXG4gKi9cblxuLy8gY29tcG9uZW50c1xudmFyIEZvcm1zID0gcmVxdWlyZSgnLi9iYXNlL2Zvcm1zLmpzeCcpO1xudmFyIE1vZGFsID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tb2RhbC5qc3gnKTtcbnZhciBUaHJvd2VyID0gcmVxdWlyZSgnLi90aHJvd2VyLmpzeCcpO1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG5cbi8vIEhlYWRlciBjb21wb25lbnRcbmNsYXNzIEhlYWRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcInRocm93ZXJcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5hY2NvdW50U2hvdyA9IHRoaXMuYWNjb3VudFNob3cuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhvbWUgPSB0aGlzLmhvbWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW5TaG93ID0gdGhpcy5zaWduaW5TaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW5UcmlnZ2VyID0gdGhpcy5zaWduaW5UcmlnZ2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0VHJpZ2dlciA9IHRoaXMuc2lnbm91dFRyaWdnZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ251cCA9IHRoaXMuc2lnbnVwLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdudXBTaG93ID0gdGhpcy5zaWdudXBTaG93LmJpbmQodGhpcyk7XG5cdH1cblxuXHRhY2NvdW50U2hvdyhldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kYWxcIjogdGhpcy5zdGF0ZS5tb2RhbCA9PSBcImFjY291bnRcIiA/IGZhbHNlIDogJ2FjY291bnQnfSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW5UcmlnZ2VyKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0VHJpZ2dlcik7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluVHJpZ2dlcik7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbm91dCcsIHRoaXMuc2lnbm91dFRyaWdnZXIpO1xuXHR9XG5cblx0aG9tZSgpIHtcblx0XHRIYXNoLnNldChcInBhZ2VcIiwgbnVsbCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aGVhZGVyPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdGlvbnMgZnJpZ2h0IGFyaWdodFwiPlxuXHRcdFx0XHRcdHtzZWxmLnN0YXRlLnRocm93ZXIgP1xuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXIgZmEtdXNlclwiIHRpdGxlPVwiQWNjb3VudFwiIG9uQ2xpY2s9e3NlbGYuYWNjb3VudFNob3d9PjwvaT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXBvd2VyLW9mZlwiIHRpdGxlPVwiU2lnbiBPdXRcIiBvbkNsaWNrPXtzZWxmLnNpZ25vdXR9PjwvaT5cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci1wbHVzXCIgdGl0bGU9XCJDcmVhdGUgQWNjb3VudFwiIG9uQ2xpY2s9e3NlbGYuc2lnbnVwU2hvd30+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtc2lnbi1pbi1hbHRcIiB0aXRsZT1cIlNpZ24gSW5cIiBvbkNsaWNrPXtzZWxmLnNpZ25pblNob3d9PjwvaT5cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGgxIHN0eWxlPXt7XCJjdXJzb3JcIjogXCJwb2ludGVyXCJ9fSBvbkNsaWNrPXt0aGlzLmhvbWV9PkF4ZUdhaW5zLmNvbTwvaDE+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGFsID09ICdzaWduaW4nICYmXG5cdFx0XHRcdFx0PGRpdiBpZD1cInNpZ25pblwiIGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJhbGlhc1wiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJhbGlhc1wiIHBsYWNlaG9sZGVyPVwiYWxpYXNcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJwYXNzd2RcIiB0eXBlPVwicGFzc3dvcmRcIiB0aXRsZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXJpZ2h0XCI+PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLnNpZ25pbn0+c2lnbiBpbjwvYnV0dG9uPjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnc2lnbnVwJyAmJlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJzaWdudXBcIiBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwic2lnbnVwX2FsaWFzXCIgdHlwZT1cInRleHRcIiB0aXRsZT1cImFsaWFzXCIgcGxhY2Vob2xkZXI9XCJhbGlhc1wiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cImVtYWlsXCIgdHlwZT1cInRleHRcIiB0aXRsZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJlbWFpbCAobm90IHJlcXVpcmVkKVwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInNpZ251cF9wYXNzd2RcIiB0eXBlPVwicGFzc3dvcmRcIiB0aXRsZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInJlcGVhdF9wYXNzd2RcIiB0eXBlPVwicGFzc3dvcmRcIiB0aXRsZT1cInJlcGVhdCBwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicmVwZWF0IHBhc3N3b3JkXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhcmlnaHRcIj48YnV0dG9uIG9uQ2xpY2s9e3NlbGYuc2lnbnVwfT5zaWduIHVwPC9idXR0b24+PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGFsID09ICdhY2NvdW50JyAmJlxuXHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0dGl0bGU9XCJBY2NvdW50XCJcblx0XHRcdFx0XHRcdGNsb3NlPXtzZWxmLmFjY291bnRTaG93fVxuXHRcdFx0XHRcdFx0d2lkdGg9XCI5NSVcIlxuXHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxUaHJvd2VyIC8+XG5cdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0fVxuXHRcdFx0PC9oZWFkZXI+XG5cdFx0KTtcblx0fVxuXG5cdHNpZ25pbihldikge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBhbGlhc1xuXHRcdHZhciBhbGlhcyA9IHRoaXMucmVmcy5hbGlhcy52YWx1ZTtcblxuXHRcdC8vIENhbGwgdGhlIHNpZ25pblxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdzaWduaW4nLCB7XG5cdFx0XHRcImFsaWFzXCI6IGFsaWFzLFxuXHRcdFx0XCJwYXNzd2RcIjogdGhpcy5yZWZzLnBhc3N3ZC52YWx1ZVxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHR2YXIgZXJyb3IgPSAnICc7XG5cdFx0XHRcdHN3aXRjaChyZXMuZXJyb3IuY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgMTAwMTpcblx0XHRcdFx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCBtZXNzYWdlIGFuZCBtYWtlIHRoZSByZWYgcmVkXG5cdFx0XHRcdFx0XHRmb3IodmFyIGkgaW4gcmVzLmVycm9yLm1zZykge1xuXHRcdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbaV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMjAxOlxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0FsaWFzIG9yIHBhc3N3b3JkIGludmFsaWQnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwNDpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snc2lnbnVwX3Bhc3N3ZCddKTtcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdQYXNzd29yZCBub3Qgc3Ryb25nIGVub3VnaCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgc2Vzc2lvbiB3aXRoIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFNlcnZpY2VzLnNlc3Npb24ocmVzLmRhdGEuc2Vzc2lvbik7XG5cblx0XHRcdFx0Ly8gR3JlZXQgdGhyb3dlclxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsIFwiV2VsY29tZSBiYWNrIHRvIEF4ZUdhaW5zIFwiICsgYWxpYXMpO1xuXG5cdFx0XHRcdC8vIFRyaWdnZXIgdGhlIHNpZ25pbiBldmVudFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbmluJywgcmVzLmRhdGEudGhyb3dlcik7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWduaW5TaG93KGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RhbFwiOiAodGhpcy5zdGF0ZS5tb2RhbCA9PSAnc2lnbmluJyA/IGZhbHNlIDogJ3NpZ25pbicpfSk7XG5cdH1cblxuXHRzaWduaW5UcmlnZ2VyKHRocm93ZXIpIHtcblxuXHRcdC8vIEhpZGUgYW55IG1vZGFscyBhbmQgc2V0IHRoZSB0aHJvd2VyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHRocm93ZXJcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25vdXQoZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzaWdub3V0XG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ3NpZ25vdXQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdGhlIHNlc3Npb25cblx0XHRcdFx0U2VydmljZXMuc2Vzc2lvbihudWxsKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWdub3V0IGV2ZW50XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWdub3V0Jyk7XG5cdFx0XHR9XG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbm91dFRyaWdnZXIoKSB7XG5cblx0XHQvLyBIaWRlIGFuZCBtb2RhbHMgYW5kIHNldCB0aGUgdGhyb3dlciB0byBmYWxzZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RhbFwiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0c2lnbnVwKGV2KSB7XG5cblx0XHQvLyBJZiB0aGUgYWxpYXMgaXMgbm90IGxvbmcgZW5vdWdoXG5cdFx0aWYodGhpcy5yZWZzLnNpZ251cF9hbGlhcy50cmltKCkubGVuZ3RoIDwgMykge1xuXHRcdFx0Rm9ybXMuZXJyb3JBZGQodGhpcy5yZWZzLnNpZ251cF9hbGlhcyk7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnQWxpYXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgcGFzc3dvcmRzIGRvbid0IG1hdGNoXG5cdFx0aWYodGhpcy5yZWZzLnNpZ251cF9wYXNzd2QudmFsdWUgIT0gdGhpcy5yZWZzLnJlcGVhdF9wYXNzd2QudmFsdWUpIHtcblx0XHRcdEZvcm1zLmVycm9yQWRkKHRoaXMucmVmcy5yZXBlYXRfcGFzc3dkKTtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEluaXQgdGhlIGRhdGFcblx0XHR2YXIgb0RhdGEgPSB7XG5cdFx0XHRcImFsaWFzXCI6IHRoaXMucmVmcy5zaWdudXBfYWxpYXMudmFsdWUudHJpbSgpLFxuXHRcdFx0XCJwYXNzd2RcIjogdGhpcy5yZWZzLnNpZ251cF9wYXNzd2QudmFsdWVcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGUtbWFpbFxuXHRcdGlmKHRoaXMucmVmcy5lbWFpbC52YWx1ZSkge1xuXHRcdFx0dmFyIGVtYWlsID0gdGhpcy5yZWZzLmVtYWlsLnZhbHVlLnRyaW0oKTtcblx0XHRcdGlmKGVtYWlsKSB7XG5cdFx0XHRcdG9EYXRhWydlbWFpbCddID0gZW1haWw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgc2lnbnVwXG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ3NpZ251cCcsIG9EYXRhKS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0dmFyIGVycm9yID0gJyAnO1xuXHRcdFx0XHRzd2l0Y2gocmVzLmVycm9yLmNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDEwMDE6XG5cdFx0XHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbWVzc2FnZSBhbmQgbWFrZSB0aGUgcmVmIHJlZFxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIHJlcy5lcnJvci5tc2cpIHtcblx0XHRcdFx0XHRcdFx0aWYoaSA9PSAnYWxpYXMnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aSA9ICdzaWdudXBfYWxpYXMnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYoaSA9PSAncGFzc3dkJykge1xuXHRcdFx0XHRcdFx0XHRcdGkgPSAnc2lnbnVwX3Bhc3N3ZCc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwMDpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snc2lnbnVwX2FsaWFzJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0FsaWFzIGlzIGFscmVhZHkgaW4gdXNlJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDQ6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9wYXNzd2QnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmQgbm90IHN0cm9uZyBlbm91Z2gnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwNjpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snZW1haWwnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnRS1NYWlsIGFscmVhZHkgaW4gdXNlJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBzZXNzaW9uIHdpdGggdGhlIHNlcnZpY2Vcblx0XHRcdFx0U2VydmljZXMuc2Vzc2lvbihyZXMuZGF0YS50aHJvd2VyLl9pZCk7XG5cblx0XHRcdFx0Ly8gUmV2ZXJ0IHRvIHNpZ24gaW4gYW5kIHNob3cgc3VjY2VzcyBtZXNzYWdlXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJ0aHJvd2VyXCI6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gR3JlZXQgdGhyb3dlclxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsIFwiV2VsY29tZSB0byBBeGVHYWlucyBcIiArIHJlcy5kYXRhLnRocm93ZXIuYWxpYXMpO1xuXG5cdFx0XHRcdC8vIFRyaWdnZXIgdGhlIHNpZ25pbiBldmVudFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbmluJywgcmVzLmRhdGEudGhyb3dlcik7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWdudXBTaG93KGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RhbFwiOiAodGhpcy5zdGF0ZS5tb2RhbCA9PSAnc2lnbnVwJyA/IGZhbHNlIDogJ3NpZ251cCcpfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gSGVhZGVyO1xuIiwiLyoqXG4gKiBNYXRjaFxuICpcbiAqIE1hbmFnZXMgT3JnIG1lbnUgZm9yIG1hdGNoZXMgYW5kIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIG9uZSBiYXNlZCBvbiB3aGF0XG4gKiBpcyBjaG9zZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI2XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRzXG52YXIgTmF0ZiA9IHJlcXVpcmUoJy4vbmF0Zi9tYXRjaC5qc3gnKTtcblxuLy8gTWF0Y2ggY29tcG9uZW50XG5jbGFzcyBNYXRjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwib3JnXCI6IEhhc2guZ2V0KCdvcmcnLCAnbmF0ZicpXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMub3JnQ2hhbmdlID0gdGhpcy5vcmdDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC51bndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIG9yZyBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ29yZycsIG51bGwpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdGlmKG9yZyA9PSBudWxsKSB7XG5cdFx0XHRcdG9yZyA9ICduYXRmJztcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJtYXRjaFwiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgdGhyb3dlcj17dGhpcy5wcm9wcy50aHJvd2VyfSAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7XG4iLCIvKipcbiAqIE5BVEYgQm9hcmRcbiAqXG4gKiBNYW5hZ2VzIGEgc3RhbmRhcmQgTkFURiBib2FyZFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMTlcbiAqL1xuXG4vLyBCb2FyZCBjb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBvblBvaW50cyBwcm9wXG5cdFx0aWYoIXByb3BzLm9uUG9pbnRzKSB7XG5cdFx0XHR0aHJvdyAnbXVzdCBzcGVjaWZ5IG9uUG9pbnRzIHByb3BlcnR5IGZvciBOQVRGIEJvYXJkJztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImNsdXRjaE1vZGVcIjogcHJvcHMuY2x1dGNoTW9kZSxcblx0XHRcdFwic2VsZWN0ZWRcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5jbHV0Y2hDbGljayA9IHRoaXMuY2x1dGNoQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyb3BDbGljayA9IHRoaXMuZHJvcENsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludENsaWNrID0gdGhpcy5wb2ludENsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjbHV0Y2hDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gSWYgY2x1dGNoZXMgYXJlIG5vdCBhbGxvd2VkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdub25lJykge1xuXG5cdFx0XHQvLyBTdG9yZSB0aGUgY3VycmVudCB0YXJnZXRcblx0XHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVcblx0XHRcdHZhciBjbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGludmFsaWQgY2xhc3Ncblx0XHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIGludmFsaWQnO1xuXG5cdFx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblx0XHRcdH0sIDUwMCk7XG5cblx0XHRcdC8vIERvbid0IGNvdW50IHRoZSBjbGlja1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25Qb2ludHModHJ1ZSwgNyk7XG5cdFx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1wic2VsZWN0ZWRcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRyb3BDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBTZW5kIG91dCB0aGUgZHJvcFxuXHRcdHRoaXMucHJvcHMub25Qb2ludHModGhpcy5zdGF0ZS5zZWxlY3RlZCwgJ2QnKTtcblxuXHRcdC8vIERlLXNlbGVjdCB0aGUgY2x1dGNoIGlmIHRoZXJlJ3Mgb25lIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5yZXNldENsdXRjaCgpO1xuXHRcdH1cblxuXHRcdC8vIFR1cm4gb24gdGhlIGFjdGl2ZSBmbGFnXG5cdFx0dGFyZ2V0LmNsYXNzTmFtZSA9ICdkcm9wIGFjdGl2ZSc7XG5cblx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gJ2Ryb3AnO1xuXHRcdH0sIDUwMCk7XG5cdH1cblxuXHRyZXNldENsdXRjaCgpIHtcblxuXHRcdC8vIElmIHRoZSBtb2RlIGlzIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdzZWxlY3QnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkXCI6IGZhbHNlfSk7XG5cdFx0fVxuXHR9XG5cblx0cG9pbnRDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVzXG5cdFx0dmFyIGNsYXNzTmFtZXMgPSB0YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cblx0XHQvLyBJZiBpdCdzIGFscmVhZHkgYWN0aXZlLCBkbyBub3RoaW5nXG5cdFx0aWYoY2xhc3NOYW1lc1sxXSAmJiBjbGFzc05hbWVzWzFdID09ICdhY3RpdmUnKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgY2x1dGNoIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblBvaW50cyh0cnVlLCAwKTtcblx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5vblBvaW50cyhmYWxzZSwgdGFyZ2V0LmRhdGFzZXQudmFsdWUpO1xuXHRcdH1cblxuXHRcdC8vIFR1cm4gb24gdGhlIGFjdGl2ZSBmbGFnXG5cdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbMF0gKyAnIGFjdGl2ZSc7XG5cblx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lc1swXTtcblx0XHR9LCA1MDApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2FyZFwiIGRhdGEtdmFsdWU9ezB9IG9uQ2xpY2s9e3NlbGYucG9pbnRDbGlja30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNsdXRjaCBsZWZ0XCIgKyAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpfSBvbkNsaWNrPXtzZWxmLmNsdXRjaENsaWNrfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wXCIgb25DbGljaz17c2VsZi5kcm9wQ2xpY2t9PkRST1A8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1wiY2x1dGNoIHJpZ2h0XCIgKyAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpfSBvbkNsaWNrPXtzZWxmLmNsdXRjaENsaWNrfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvbmVcIiBkYXRhLXZhbHVlPXsxfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGhyZWVcIiBkYXRhLXZhbHVlPXszfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXZlXCIgZGF0YS12YWx1ZT17NX0gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0c2V0IGNsdXRjaE1vZGUobW9kZSkge1xuXG5cdFx0Ly8gRmlndXJlIG91dCB0aGUgc2VsZWN0ZWQgdmFsdWVcblx0XHR2YXIgc2VsZWN0ZWQgPSBudWxsO1xuXHRcdHN3aXRjaChtb2RlKSB7XG5cdFx0XHRjYXNlICdub25lJzogc2VsZWN0ZWQgPSBmYWxzZTsgYnJlYWs7XG5cdFx0XHRjYXNlICdleHBlY3RlZCc6IHNlbGVjdGVkID0gdHJ1ZTsgYnJlYWs7XG5cdFx0XHRjYXNlICdzZWxlY3QnOiBzZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQ7IGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImNsdXRjaE1vZGVcIjogbW9kZSxcblx0XHRcdFwic2VsZWN0ZWRcIjogc2VsZWN0ZWRcblx0XHR9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcbiIsIi8qKlxuICogTkFURiBNYXRjaFxuICpcbiAqIE1hbmFnZXMgY3JlYXRpbmcgYW5kIHBsYXlpbmcgYSBzdGFuZGFyZCBOQVRGIG1hdGNoXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvaGFzaC5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFR3b1dheSA9IHJlcXVpcmUoJy4uLy4uL3R3b3dheS5qcycpO1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMuanMnKTtcblxuLy8gUmVhY3QgY29tcG9uZW50c1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZC5qc3gnKTtcbnZhciBPcHBvbmVudCA9IHJlcXVpcmUoJy4uL29wcG9uZW50LmpzeCcpO1xuXG4vLyBNYXRjaCBDb21wb25lbnRcbmNsYXNzIE1hdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJhbGlhc1wiOiAnJyxcblx0XHRcdFwiYmlnYXhlXCI6IGZhbHNlLFxuXHRcdFx0XCJleGlzdGluZ1wiIDogZmFsc2UsXG5cdFx0XHRcImdhbWVzXCI6IGZhbHNlLFxuXHRcdFx0XCJpZFwiOiBmYWxzZSxcblx0XHRcdFwibWF0Y2hfc3RhdGVcIjogZmFsc2UsXG5cdFx0XHRcIm1vZGVcIjogXCJvcHBvbmVudFwiLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXIsXG5cdFx0XHRcInRocm93ZXJJc1wiOiAnJyxcblx0XHRcdFwib3Bwb25lbnRcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5leGlzdGluZ0NvbnRpbnVlID0gdGhpcy5leGlzdGluZ0NvbnRpbnVlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5leGlzdGluZ0RlbGV0ZSA9IHRoaXMuZXhpc3RpbmdEZWxldGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmlkQ2FsbGJhY2sgPSB0aGlzLmlkQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm1hdGNoQ2FsbGJhY2sgPSB0aGlzLm1hdGNoQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm92ZXJ3cml0ZSA9IHRoaXMub3ZlcndyaXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHMgPSB0aGlzLnBvaW50cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVxdWVzdENhbGxiYWNrID0gdGhpcy5yZXF1ZXN0Q2FsbGJhY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlcXVlc3RDYW5jZWwgPSB0aGlzLnJlcXVlc3RDYW5jZWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlcXVlc3RDcmVhdGUgPSB0aGlzLnJlcXVlc3RDcmVhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjYWxjdWxhdGVNYXRjaFN0YXRlKGRhdGEpIHtcblxuXHRcdC8vIEluaXQgdGhlIHN0YXRlXG5cdFx0dmFyIHN0YXRlID0ge1xuXHRcdFx0XCJyb3VuZFwiOiAxLFxuXHRcdFx0XCJ0aHJvd1wiOiAxXG5cdFx0fTtcblxuXHRcdC8vIEFyZSB3ZSBvcHBvbmVudCBvciBpbml0aWF0b3Jcblx0XHR2YXIgdCA9ICh0aGlzLnN0YXRlLnRocm93ZXIgPT0gZGF0YS5pbml0aWF0b3IpID8gJ2knIDogJ28nO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbnkgYmlnYXhlIGRhdGEgaXQncyBzYWZlIHRvIGFzc3VtZSB3ZSdyZSBkb25lIHdpdGggdGhlXG5cdFx0Ly9cdHJlZ3VsYXIgbWF0Y2hcblx0XHRpZihkYXRhLmJpZ2F4ZSAmJiAhVG9vbHMuZW1wdHkoZGF0YS5iaWdheGUpKSB7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgcG9pbnRzXG5cdFx0XHRpZihkYXRhLmJpZ2F4ZS5wb2ludHMgJiYgZGF0YS5iaWdheGUucG9pbnRzLmxlbmd0aCkge1xuXG5cdFx0XHRcdC8vIFNldCBiaWdheGUgdG8gcG9pbnRzXG5cdFx0XHRcdHN0YXRlLmJpZ2F4ZSA9ICdwb2ludHMnO1xuXG5cdFx0XHRcdC8vIFN0ZXAgdGhyb3VnaCB0aGUgcG9pbnRzXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkYXRhLmJpZ2F4ZS5wb2ludHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRpZih0eXBlb2YgZGF0YS5iaWdheGUucG9pbnRzW2ldW3RdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZS5yb3VuZCA9IGk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2Ugd2UncmUgc3RpbGwgb24gdGFyZ2V0XG5cdFx0XHRlbHNlIHtcblxuXHRcdFx0XHQvLyBTZXQgYmlnYXhlIHRvIHRhcmdldFxuXHRcdFx0XHRzdGF0ZS5iaWdheGUgPSAndGFyZ2V0JztcblxuXHRcdFx0XHQvLyBTdGVwIHRocm91Z2ggdGhlIHRhcmdldFxuXHRcdFx0XHRmb3IodmFyIGk7IGkgPCBkYXRhLmJpZ2F4ZS50YXJnZXQubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0XHRpZih0eXBlb2YgZGF0YS5iaWdheGUudGFyZ2V0W2ldW3RdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzdGF0ZS5yb3VuZCA9IGk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgYXNzdW1lIHdlIGFyZSBpbiBnYW1lc1xuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggZ2FtZVxuXHRcdFx0dmFyIGcgPSAxO1xuXHRcdFx0Zm9yKDsgZyA8PSAzOyArK2kpIHtcblxuXHRcdFx0XHQvLyBBcyBhIHN0cmluZ1xuXHRcdFx0XHR2YXIgc0cgPSBnLnRvU3RyaW5nKCk7XG5cblx0XHRcdFx0Ly8gSWYgaXQgZG9lc24ndCBleGlzdFxuXHRcdFx0XHRpZih0eXBlb2YgZGF0YS5nYW1lc1tzR10gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gZGF0YSBmb3IgdGhlIHRocm93ZXJcblx0XHRcdFx0aWYodHlwZW9mIGRhdGEuZ2FtZXNbc0ddW3RdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggcm91bmRcblx0XHRcdFx0dmFyIHIgPSAxO1xuXHRcdFx0XHRmb3IoOyByIDw9IDU7ICsrcikge1xuXG5cdFx0XHRcdFx0Ly8gQXMgYSBzdHJpbmdcblx0XHRcdFx0XHR2YXIgc1IgPSByLnRvU3RyaW5nKCk7XG5cblx0XHRcdFx0XHQvLyBJZiBpdCBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdFx0aWYodHlwZW9mIGRhdGEuZ2FtZXNbc0ddW3RdW3NSXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3RvcmUgdGhlIHJvdW5kXG5cdFx0XHRcdHN0YXRlLnJvdW5kID0gcjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RvcmUgdGhlIGdhbWVcblx0XHRcdHN0YXRlLmdhbWUgPSBnO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgc3RhdGVcblx0XHRyZXR1cm4gc3RhdGU7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gVHJhY2sgSUQgaW4gaGFzaFxuXHRcdEhhc2gud2F0Y2goJ2lkJywgdGhpcy5pZENhbGxiYWNrKTtcblxuXHRcdC8vIElmIHdlJ3JlIHNpZ25lZCBpblxuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIElEIGluIHRoZSBoYXNoXG5cdFx0XHR2YXIgaWQgPSBIYXNoLmdldCgnaWQnKTtcblx0XHRcdGlmKGlkKSB7XG5cdFx0XHRcdHRoaXMuaWRDYWxsYmFjayhpZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLmV4aXN0aW5nRmV0Y2goKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgSUQgaW4gaGFzaCBhbmQgcmVtb3ZlIGl0XG5cdFx0SGFzaC51bndhdGNoKCdpZCcsIHRoaXMuaWRDYWxsYmFjayk7XG5cdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cblx0XHQvLyBJZiB3ZSdyZSBpbiByZXF1ZXN0IG1vZGVcblx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3JlcXVlc3QnKSB7XG5cblx0XHRcdC8vIFN0b3AgdHJhY2tpbmcgdGhlIHJlcXVlc3Rcblx0XHRcdFR3b1dheS51bnRyYWNrKFxuXHRcdFx0XHQnYXV0aCcsICdyZXF1ZXN0LScgKyB0aGlzLnN0YXRlLmlkLFxuXHRcdFx0XHR0aGlzLnJlcXVlc3RDYWxsYmFja1xuXHRcdFx0KVxuXHRcdH1cblxuXHRcdGVsc2UgaWYodGhpcy5zdGF0ZS5tb2RlID09ICdtYXRjaCcpIHtcblxuXHRcdFx0Ly8gU3RvcCB0cmFja2luZyB0aGUgbWF0Y2hcblx0XHRcdFR3b1dheS51bnRyYWNrKFxuXHRcdFx0XHQnbmF0ZicsICdtYXRjaC0nICsgdGhpcy5zdGF0ZS5pZCxcblx0XHRcdFx0dGhpcy5tYXRjaENhbGxiYWNrXG5cdFx0XHQpXG5cdFx0fVxuXHR9XG5cblx0ZXhpc3RpbmdDb250aW51ZShldikge1xuXHRcdEhhc2guc2V0KCdpZCcsICdtfCcgKyBldi5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZCk7XG5cdH1cblxuXHRleGlzdGluZ0RlbGV0ZShldikge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBTdG9yZSB0aGUgaWRcblx0XHR2YXIgaWQgPSBldi5jdXJyZW50VGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pZDtcblxuXHRcdC8vIE5vdGlmeSB0aGUgc2VydmljZSB0aGUgbWF0Y2ggd29uJ3QgYmUgY29tcGxldGVkXG5cdFx0U2VydmljZXMuZGVsZXRlKCduYXRmJywgJ21hdGNoJywge1xuXHRcdFx0XCJpZFwiOiBpZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXG5cdFx0XHRcdC8vIElmIHRoZSB0aHJvd2VyIGNhbid0IGRlbGV0ZSB0aGF0IHJlY29yZCwgb3IgaXQncyBmaW5pc2hlZFxuXHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSA9PSAxMDAwKSB7XG5cdFx0XHRcdFx0c2VsZi5leGlzdGluZ1JlbW92ZShpZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gSWYgaXQncyBhbHJlYWR5IGRlbGV0ZWRcblx0XHRcdFx0ZWxzZSBpZihyZXMuZXJyb3IuY29kZSA9PSAxMTA0KSB7XG5cdFx0XHRcdFx0c2VsZi5leGlzdGluZ1JlbW92ZShpZCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gVW5rbm93biBlcnJvclxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cdFx0XHRcdHNlbGYuZXhpc3RpbmdSZW1vdmUoaWQpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KVxuXHR9XG5cblx0ZXhpc3RpbmdGZXRjaCgpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmluZCBvdXQgaWYgdGhlcmUncyBhbnkgdW5maW5pc2hlZCBnYW1lcyBhc3NvY2lhdGVkIHdpdGggdGhpc1xuXHRcdC8vXHR0aHJvd2VyXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdtYXRjaC91bmZpbmlzaGVkJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW55XG5cdFx0XHRcdGlmKHJlcy5kYXRhLmxlbmd0aCkge1xuXG5cdFx0XHRcdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XCJtb2RlXCI6IFwiZXhpc3RpbmdcIixcblx0XHRcdFx0XHRcdFwiZXhpc3RpbmdcIjogcmVzLmRhdGFcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pXG5cdH1cblxuXHRleGlzdGluZ1JlbW92ZShpZCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGV4aXN0aW5nXG5cdFx0dmFyIGV4aXN0aW5nID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5leGlzdGluZyk7XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggb25lXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRpZihleGlzdGluZ1tpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0ZXhpc3Rpbmcuc3BsaWNlKGksIDEpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEluaXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHZhciBzdGF0ZSA9IHtcImV4aXN0aW5nXCI6IGV4aXN0aW5nfVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBtb3JlIGV4aXN0aW5nXG5cdFx0aWYoZXhpc3RpbmcubGVuZ3RoID09IDApIHtcblx0XHRcdHN0YXRlLm1vZGUgPSAnb3Bwb25lbnQnO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblxuXHRpZENhbGxiYWNrKGlkKSB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIElEXG5cdFx0aWYoaWQpIHtcblxuXHRcdFx0Ly8gU3BsaXQgdGhlIElEXG5cdFx0XHRpZCA9IGlkLnNwbGl0KCd8Jyk7XG5cblx0XHRcdC8vIElmIGl0J3MgYSByZXF1ZXN0XG5cdFx0XHRpZihpZFswXSA9PSAncicpIHtcblxuXHRcdFx0XHQvLyBDaGFuZ2UgdGhlIG1vZGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJpZFwiOiBpZFsxXSxcblx0XHRcdFx0XHRcIm1vZGVcIjogXCJyZXF1ZXN0XCIsXG5cdFx0XHRcdFx0XCJvcHBvbmVudFwiOiB7XCJhbGlhc1wiOiBpZFsyXX1cblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gTGlzdGVuIGZvciBhbiB1cGRhdGUgb24gdGhlIHJlcXVlc3Rcblx0XHRcdFx0VHdvV2F5LnRyYWNrKFxuXHRcdFx0XHRcdCdhdXRoJywgJ3JlcXVlc3QtJyArIGlkWzFdLFxuXHRcdFx0XHRcdHRoaXMucmVxdWVzdENhbGxiYWNrXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaWYgaXQncyBhIG1hdGNoXG5cdFx0XHRlbHNlIGlmKGlkWzBdID09ICdtJykge1xuXG5cdFx0XHRcdC8vIENoYW5nZSB0aGUgbW9kZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcImJpZ2F4ZVwiOiBmYWxzZSxcblx0XHRcdFx0XHRcImdhbWVzXCI6IHtcblx0XHRcdFx0XHRcdFwiMVwiOiB7fVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJpZFwiOiBpZFsxXSxcblx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjoge1xuXHRcdFx0XHRcdFx0XCJyb3VuZFwiOiAxLFxuXHRcdFx0XHRcdFx0XCJ0aHJvd1wiOiAxLFxuXHRcdFx0XHRcdFx0XCJiaWdheGVcIjogZmFsc2Vcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwibW9kZVwiOiBcIm1hdGNoXCIsXG5cdFx0XHRcdFx0XCJvcHBvbmVudFwiOiB7XCJhbGlhc1wiOiAnJ30sXG5cdFx0XHRcdFx0XCJ0aHJvd2VySXNcIjogXCJpXCJcblx0XHRcdFx0fSlcblxuXHRcdFx0XHQvLyBMaXN0IGZvciBhbiB1cGRhdGUgb24gdGhlIG1hdGNoXG5cdFx0XHRcdFR3b1dheS50cmFjayhcblx0XHRcdFx0XHQnbmF0ZicsICdtYXRjaC0nICsgaWRbMV0sXG5cdFx0XHRcdFx0dGhpcy5tYXRjaENhbGxiYWNrXG5cdFx0XHRcdClcblxuXHRcdFx0XHQvLyBTYXZlIHRoaXNcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdC8vIEZldGNoIHRoZSBtYXRjaFxuXHRcdFx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ21hdGNoJywge1xuXHRcdFx0XHRcdFwiaWRcIjogaWRbMV1cblx0XHRcdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIG1hdGNoIG5vIGxvbmdlciBleGlzdHNcblx0XHRcdFx0XHRcdGlmKHJlcy5lcnJvci5jb2RlID09IDExMDQpIHtcblx0XHRcdFx0XHRcdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0XHRcdC8vIEFyZSB3ZSBpbml0aWF0b3Igb3Igb3Bwb25lbnQ/XG5cdFx0XHRcdFx0XHR2YXIgdCA9IHJlcy5kYXRhLmluaXRpYXRvciA9PSBzZWxmLnN0YXRlLnRocm93ZXIuX2lkID8gJ2knIDogJ28nO1xuXG5cdFx0XHRcdFx0XHQvLyBTdG9yZSBpdCBpbiB0aGUgc3RhdGVcblx0XHRcdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XHRcImFsaWFzXCI6IHQgPT0gJ2knID8gcmVzLmRhdGFbJ29wcG9uZW50X2FsaWFzJ10gOiByZXMuZGF0YVsnaW5pdGlhdG9yX2FsaWFzJ10sXG5cdFx0XHRcdFx0XHRcdFwiYmlnYXhlXCI6IHJlcy5kYXRhLmJpZ2F4ZSxcblx0XHRcdFx0XHRcdFx0XCJnYW1lc1wiOiByZXMuZGF0YS5nYW1lcyxcblx0XHRcdFx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IHNlbGYuY2FsY3VsYXRlTWF0Y2hTdGF0ZShyZXMuZGF0YSksXG5cdFx0XHRcdFx0XHRcdFwidGhyb3dlcklzXCI6IHQsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIHJlc2V0XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGVcIjogXCJvcHBvbmVudFwifSk7XG5cdFx0fVxuXHR9XG5cblx0bWF0Y2hDYWxsYmFjayhtc2cpIHtcblxuXHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdH1cblxuXHRvdmVyd3JpdGUoZXYpIHtcblxuXHR9XG5cblx0cG9pbnRzKGNsdXRjaCwgdmFsdWUpIHtcblxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXRmXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1vZGUgPT0gJ29wcG9uZW50JyAmJlxuXHRcdFx0XHRcdDxPcHBvbmVudCB0aHJvd2VyPXt0aGlzLnN0YXRlLnRocm93ZXJ9IG9uU2VsZWN0PXt0aGlzLnJlcXVlc3RDcmVhdGV9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuc3RhdGUubW9kZSA9PSAncmVxdWVzdCcgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxwPldhaXRpbmcgZm9yIHtzZWxmLnN0YXRlLm9wcG9uZW50LmFsaWFzfSB0byBhY2NlcHQgeW91ciBtYXRjaCByZXF1ZXN0PC9wPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLnJlcXVlc3RDYW5jZWx9PkNhbmNlbCBSZXF1ZXN0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuc3RhdGUubW9kZSA9PSAnZXhpc3RpbmcnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2VudGVyXCI+XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5leGlzdGluZy5tYXAoZnVuY3Rpb24obSwgaSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSBkYXRhLWlkPXttLl9pZH0gY2xhc3NOYW1lPVwiZXhpc3RpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPllvdSBoYXZlIGFuIGV4aXN0aW5nIG1hdGNoIHdpdGgge20uYWxpYXN9LCBkbyB5b3Ugd2lzaCB0byBjb250aW51ZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NlbGYuZXhpc3RpbmdEZWxldGV9PkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLmV4aXN0aW5nQ29udGludWV9PkNvbnRpbnVlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tb2RlID09ICdtYXRjaCcgJiZcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PEJvYXJkIHJlZj1cImJvYXJkXCIgY2x1dGNoTW9kZT1cIm5vbmVcIiBvblBvaW50cz17c2VsZi5wb2ludHN9IC8+XG5cdFx0XHRcdFx0XHR7dGhpcy5yZW5kZXJNYXRjaCgpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVuZGVyQmlnQXhlKCkge1xuXHRcdHJldHVybiA8ZGl2IC8+XG5cdH1cblxuXHRyZW5kZXJHYW1lKCkge1xuXHRcdHJldHVybiA8ZGl2IC8+XG5cdH1cblxuXHRyZW5kZXJNYXRjaCgpIHtcblxuXHRcdC8vIElmIHdlJ3JlIGluIGJpZyBheGUgbW9kZVxuXHRcdGlmKHRoaXMuc3RhdGUuYmlnYXhlKSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR0aGlzLnJlbmRlck92ZXJhbGwoKSxcblx0XHRcdFx0dGhpcy5yZW5kZXJCaWdBeGUoKVxuXHRcdFx0XVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHR0aGlzLnJlbmRlck92ZXJhbGwoKSxcblx0XHRcdFx0dGhpcy5yZW5kZXJHYW1lKClcblx0XHRcdF1cblx0XHR9XG5cdH1cblxuXHRyZW5kZXJPdmVyYWxsKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8dGFibGU+XG5cdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHQ8dHI+PHRoPlRocm93ZXI8L3RoPjx0aD4xPC90aD48dGg+MjwvdGg+PHRoPjM8L3RoPjwvdHI+XG5cdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdDx0Ym9keT5cblxuXHRcdFx0XHRcdDx0cj48dGQ+e3RoaXMuc3RhdGUudGhyb3dlci5hbGlhc308L3RkPjx0ZD4xPC90ZD48dGQ+MjwvdGQ+PHRkPjM8L3RkPjwvdHI+XG5cdFx0XHRcdFx0PHRyPjx0ZD57dGhpcy5zdGF0ZS5hbGlhc308L3RkPjx0ZD4xPC90ZD48dGQ+MjwvdGQ+PHRkPjM8L3RkPjwvdHI+XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdCk7XG5cdH1cblxuXHRyZXF1ZXN0Q2FsbGJhY2sobXNnKSB7XG5cblx0XHQvLyBJZiB0aGUgbWF0Y2ggd2FzIGFjY2VwdGVkXG5cdFx0aWYobXNnLnR5cGUgPT0gJ2FjY2VwdGVkJykge1xuXHRcdFx0SGFzaC5zZXQoJ2lkJywgJ218JyArIG1zZy5tYXRjaCk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiBpdCB3YXMgcmVqZWN0ZWRcblx0XHRlbHNlIGlmKG1zZy50eXBlID09ICdyZWplY3RlZCcpIHtcblx0XHRcdHRoaXMucmVxdWVzdFJlc2V0KCk7XG5cdFx0fVxuXHR9XG5cblx0cmVxdWVzdENhbmNlbCgpIHtcblx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3JlcXVlc3QnKSB7XG5cblx0XHRcdC8vIFN0b3JlIHRoaXNcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0XHQvLyBDYW5jZWwgdGhlIG1hdGNoIHJlcXVlc3Rcblx0XHRcdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUuaWRcblx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblxuXHRcdFx0XHRcdC8vIElmIGl0J3MgYWxyZWFkeSBkZWxldGVkXG5cdFx0XHRcdFx0aWYocmVzLmVycm9yLmNvZGUgIT0gMTEwNCkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZXF1ZXN0UmVzZXQoKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0XHRzZWxmLnJlcXVlc3RSZXNldCgpO1xuXHRcdFx0XHR9XG5cblx0XHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0XHRMb2FkZXIuaGlkZSgpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdHJlcXVlc3RDcmVhdGUob3Bwb25lbnQpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gTWFrZSBhIG1hdGNoIHJlcXVlc3QgZm9yIHRoaXMgb3Bwb25lbnRcblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdCcsIHtcblx0XHRcdFwib3Bwb25lbnRcIjogb3Bwb25lbnQuX2lkLFxuXHRcdFx0XCJvcmdcIjogXCJOQVRGXCJcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIGhhc2hcblx0XHRcdFx0SGFzaC5zZXQoJ2lkJywgJ3J8JyArIHJlcy5kYXRhICsgJ3wnICsgb3Bwb25lbnQuYWxpYXMpXG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVxdWVzdFJlc2V0KCkge1xuXG5cdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgZm9yIGFuIHVwZGF0ZSBvbiB0aGUgcmVxdWVzdFxuXHRcdFR3b1dheS51bnRyYWNrKFxuXHRcdFx0J2F1dGgnLFxuXHRcdFx0J3JlcXVlc3QtJyArIHRoaXMuc3RhdGUuaWQsXG5cdFx0XHR0aGlzLnJlcXVlc3RDYWxsYmFja1xuXHRcdCk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIElEIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblxuXHRcdC8vIENoYW5nZSB0aGUgbW9kZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJpZFwiOiBmYWxzZSxcblx0XHRcdFwibW9kZVwiOiBcIm9wcG9uZW50XCIsXG5cdFx0XHRcIm9wcG9uZW50XCI6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXG5cdFx0Ly8gU2V0IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IHRocm93ZXJ9KTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gSUQgaW4gdGhlIGhhc2hcblx0XHR2YXIgaWQgPSBIYXNoLmdldCgnaWQnKTtcblx0XHRpZihpZCkge1xuXHRcdFx0dGhpcy5pZENhbGxiYWNrKGlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5leGlzdGluZ0ZldGNoKCk7XG5cdFx0fVxuXHR9XG5cblx0c2lnbm91dCgpIHtcblxuXHRcdC8vIFNldCBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBJRCBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7XG4iLCIvKipcbiAqIE5BVEYgUHJhY3RpY2VcbiAqXG4gKiBNYW5hZ2VzIHRyYWNraW5nIGFuZCBzdG9yaW5nIHByYWN0aWNlIG9uIGFuIE5BVEYgYm9hcmRcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIwXG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzLmpzJyk7XG5cbi8vIFJlYWN0IGNvbXBvbmVudHNcbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4uL2VsZW1lbnRzL21vZGFsLmpzeCcpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZC5qc3gnKTtcblxuLy8gUHJhY3RpY2UgQ29tcG9uZW50XG5jbGFzcyBQcmFjdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogMCxcblx0XHRcdFwiY2x1dGNoSGl0c1wiOiAwLFxuXHRcdFx0XCJtb2RlXCI6IG51bGwsXG5cdFx0XHRcInBvaW50c1wiOiBbXSxcblx0XHRcdFwic2hvd1BvaW50c1wiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiBwcm9wcy50aHJvd2VyLFxuXHRcdFx0XCJ0b3RhbFBvaW50c1wiOiAwXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMubW9kZVNlbGVjdCA9IHRoaXMubW9kZVNlbGVjdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3ZlcndyaXRlID0gdGhpcy5vdmVyd3JpdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50cyA9IHRoaXMucG9pbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHNIaWRlID0gdGhpcy5wb2ludHNIaWRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHNTaG93ID0gdGhpcy5wb2ludHNTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBkYXRhIGluIGxvY2FsIHN0b3JhZ2Vcblx0XHRpZignbmF0Zl9wcmFjdGljZScgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0XHR2YXIgbmV3X3N0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXSk7XG5cdFx0XHRuZXdfc3RhdGUudGhyb3dlciA9IHRoaXMuc3RhdGUudGhyb3dlcjtcblx0XHRcdHRoaXMuc2V0U3RhdGUobmV3X3N0YXRlLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdzdXBlcm5hdHVyYWwnKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoICUgNSA9PSA0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnY2x1dGNoJykge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGRlbGV0ZSBsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIElmIHdlIGhhdmUgcG9pbnRzLCBzdG9yZSB0aGVtIGluIGxvY2FsIHN0b3JhZ2Vcblx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgpIHtcblx0XHRcdGxvY2FsU3RvcmFnZVsnbmF0Zl9wcmFjdGljZSddID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSk7XG5cdFx0fVxuXHR9XG5cblx0bW9kZVNlbGVjdChldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RlXCI6IGV2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tb2RlXG5cdFx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRzd2l0Y2godGhpcy5zdGF0ZS5tb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2ZyZWUnOlxuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7IGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzdXBlcm5hdHVyYWwnOlxuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnOyBicmVhaztcblx0XHRcdFx0Y2FzZSAnY2x1dGNoJzpcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7IGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0b3ZlcndyaXRlKGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJvdmVyd3JpdGVcIjogdHJ1ZX0sIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiB0aGUgbW9kZSBpcyBmcmVlXG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ2ZyZWUnKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaWYgdGhlIG1vZGUgaXMgc3VwZXJuYXR1cmFsXG5cdFx0XHRlbHNlIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3VwZXJuYXR1cmFsJykge1xuXG5cdFx0XHRcdC8vIElmIHdlJ3JlIGRpdmlzaWJsZSBieSA1XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cG9pbnRzKGNsdXRjaCwgdmFsdWUpIHtcblxuXHRcdC8vIEdldCB0aGUgaW50IHZlcnNpb24gb2YgdGhlIHZhbHVlXG5cdFx0dmFyIHYgPSBwYXJzZUludCh2YWx1ZSk7XG5cblx0XHQvLyBJZiB0aGUgb3ZlcndyaXRlIGZsYWcgaXMgc2V0XG5cdFx0aWYodGhpcy5zdGF0ZS5vdmVyd3JpdGUpIHtcblxuXHRcdFx0Ly8gR3JhYiB0aGUgbGFzdCB2YWx1ZVxuXHRcdFx0dmFyIGxhc3QgPSB0aGlzLnN0YXRlLnBvaW50c1t0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgtMV07XG5cblx0XHRcdC8vIEJhY2t0cmFjayB0aGUgY2x1dGNoIHN0YXRzXG5cdFx0XHRpZihsYXN0WzBdKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMgLT0gMTtcblx0XHRcdFx0aWYobGFzdFsxXSA9PSA3KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hIaXRzIC09IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQmFja3RyYWNrIHRoZSBwb2ludHMgc3RhdHNcblx0XHRcdGlmKGxhc3RbMV0gIT0gJ2QnKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUudG90YWxQb2ludHMgLT0gbGFzdFsxXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBsYXN0IGl0ZW1cblx0XHRcdHRoaXMuc3RhdGUucG9pbnRzLnBvcCgpO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0byB0aGUgcG9pbnRzIGxpc3Rcblx0XHR0aGlzLnN0YXRlLnBvaW50cy5wdXNoKFtjbHV0Y2gsICh2YWx1ZSA9PSAnZCcgPyB2YWx1ZSA6IHYpXSk7XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSBjbHV0Y2ggYXR0ZW1wdFxuXHRcdGlmKGNsdXRjaCkge1xuXHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hBdHRlbXB0cyArPSAxO1xuXHRcdFx0aWYodmFsdWUgPT0gNykge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmNsdXRjaEhpdHMgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSB2YWx1ZVxuXHRcdGlmKHYgPiAwKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnRvdGFsUG9pbnRzICs9IHY7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMsXG5cdFx0XHRcImNsdXRjaEhpdHNcIjogdGhpcy5zdGF0ZS5jbHV0Y2hIaXRzLFxuXHRcdFx0XCJvdmVyd3JpdGVcIjogZmFsc2UsXG5cdFx0XHRcInBvaW50c1wiOiB0aGlzLnN0YXRlLnBvaW50cyxcblx0XHRcdFwidG90YWxQb2ludHNcIjogdGhpcy5zdGF0ZS50b3RhbFBvaW50c1xuXHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdzdXBlcm5hdHVyYWwnKSB7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gNCkge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cG9pbnRzSGlkZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInNob3dQb2ludHNcIjogZmFsc2V9KTtcblx0fVxuXG5cdHBvaW50c1Nob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJzaG93UG9pbnRzXCI6IHRydWV9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHBvaW50c1xuXHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCkge1xuXG5cdFx0XHQvLyBJbml0IHRoZSBsYXN0IGluZGV4XG5cdFx0XHR2YXIgbGFzdCA9IDI4O1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGxlc3MgdGhhbiAyOVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoIDwgMjkpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAtIDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF0ZlwiPlxuXHRcdFx0XHQ8ZGwgY2xhc3NOYW1lPVwic2VsZWN0XCIgc3R5bGU9e3tcImRpc3BsYXlcIjogc2VsZi5zdGF0ZS5tb2RlID09IG51bGwgPyAnYmxvY2snOidub25lJ319PlxuXHRcdFx0XHRcdDxkdCBkYXRhLW1vZGU9XCJmcmVlXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5GcmVlIFByYWN0aWNlPC9kdD5cblx0XHRcdFx0XHQ8ZGQ+SW4gZnJlZSBwcmFjdGljZSBhbnkgcG9pbnRzIGFyZSBhdmFpbGFibGUgYXQgYW55IHRpbWUuIFlvdSBtdXN0IHNlbGVjdCB0aGUgY2x1dGNoIGZpcnN0IGlmIHlvdSB3aXNoIHRvIHRyeSBmb3IgaXQuPC9kZD5cblx0XHRcdFx0XHQ8ZHQgZGF0YS1tb2RlPVwic3VwZXJuYXR1cmFsXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5TdXBlcm5hdHVyYWw8L2R0PlxuXHRcdFx0XHRcdDxkZD5JbiBzdXBlcm5hdHVyYWwgcHJhY3RpY2UgZXZlcnkgZmlmdGggdGhyb3cgaXMgZm9yIGNsdXRjaCwgYW5kIGl0IHdpbGwgYmUgcHJlLXNlbGVjdGVkIGZvciB5b3Ugb24gdGhvc2UgdHVybnMuPC9kZD5cblx0XHRcdFx0XHQ8ZHQgZGF0YS1tb2RlPVwiY2x1dGNoXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5DbHV0Y2g8L2R0PlxuXHRcdFx0XHRcdDxkZD5JbiBjbHV0Y2ggcHJhY3RpY2UgZXZlcnkgdGhyb3cgaXMgZm9yIHRoZSBjbHV0Y2gsIGFuZCBpdCB3aWxsIGJlIHByZS1zZWxlY3RlZCBldmVyeSB0dXJuLjwvZGQ+XG5cdFx0XHRcdDwvZGw+XG5cdFx0XHRcdDxkaXYgc3R5bGU9e3tcImRpc3BsYXlcIjogc2VsZi5zdGF0ZS5tb2RlID09IG51bGwgPyAnbm9uZSc6J2Jsb2NrJ319PlxuXHRcdFx0XHRcdDxCb2FyZCByZWY9XCJib2FyZFwiIGNsdXRjaE1vZGU9e3NlbGYuc3RhdGUubW9kZX0gb25Qb2ludHM9e3NlbGYucG9pbnRzfSAvPlxuXHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYXZlcmFnZXNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjbHV0Y2hlcyBmcmlnaHRcIj48Yj5DbHV0Y2ggJTogPC9iPjxzcGFuPntzZWxmLnN0YXRlLmNsdXRjaEF0dGVtcHRzID09IDAgPyBcIjAuMFwiIDogKChzZWxmLnN0YXRlLmNsdXRjaEhpdHMgLyBzZWxmLnN0YXRlLmNsdXRjaEF0dGVtcHRzKSAqIDEwMC4wKS50b0ZpeGVkKDEpfTwvc3Bhbj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYXZlcmFnZSBmbGVmdFwiPjxiPkF2ZyBUaHJvdzogPC9iPjxzcGFuPnsoc2VsZi5zdGF0ZS50b3RhbFBvaW50cyAvIHNlbGYuc3RhdGUucG9pbnRzLmxlbmd0aCkudG9GaXhlZCgyKX08L3NwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxiciAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb2ludHNcIj5cblx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMubGVuZ3RoID4gMjkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGtleT17LTF9IGNsYXNzTmFtZT1cImxpbmsgYm9sZFwiIG9uQ2xpY2s9e3NlbGYucG9pbnRzU2hvd30+Li4uPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMuc2xpY2UoLTI5KS5tYXAoZnVuY3Rpb24ocCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYoaSA9PSBsYXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17XCJsYXN0IFwiICsgKHNlbGYuc3RhdGUub3ZlcndyaXRlID8gJ292ZXJ3cml0ZScgOiAocFswXSA/ICdjbHV0Y2gnIDogJycpKX0gb25DbGljaz17c2VsZi5vdmVyd3JpdGV9PntwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17cFswXSA/ICdjbHV0Y2gnOicnfT57cFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyZXNldCBmcmlnaHRcIiBvbkNsaWNrPXtzZWxmLnJlc2V0fT5SZXNldDwvZGl2PlxuXHRcdFx0XHRcdHsodGhpcy5zdGF0ZS50aHJvd2VyICYmIHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCA+IDApICYmXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNhdmUgZmxlZnRcIiBvbkNsaWNrPXtzZWxmLnNhdmV9PlNhdmUgJiBSZXNldDwvZGl2PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5zaG93UG9pbnRzICYmXG5cdFx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdFx0dGl0bGU9XCJBbGwgcG9pbnRzIHRoaXMgcHJhY3RpY2VcIlxuXHRcdFx0XHRcdFx0XHRjbG9zZT17c2VsZi5wb2ludHNIaWRlfVxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsbFBvaW50c1wiPlxuXHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnBvaW50cy5tYXAoZnVuY3Rpb24ocCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtwWzBdID8gJ2NsdXRjaCc6Jyd9PntwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0cmVzZXQoKSB7XG5cblx0XHQvLyBJbml0IHRoZSByZXNldCBmbGFnXG5cdFx0dmFyIHJlc2V0ID0gdHJ1ZTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgcG9pbnRzXG5cdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoKSB7XG5cdFx0XHQvLyBVcGRhdGUgdGhlIGZsYWcgYmFzZWQgb24gdGhlIHVzZXIncyByZXNwb25zZVxuXHRcdFx0cmVzZXQgPSBjb25maXJtKCdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcmVzZXQgeW91ciBwcmFjdGljZT8nKTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSBjYW4gcmVzZXRcblx0XHRpZihyZXNldCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogMCxcblx0XHRcdFx0XCJjbHV0Y2hIaXRzXCI6IDAsXG5cdFx0XHRcdFwibW9kZVwiOiBudWxsLFxuXHRcdFx0XHRcInBvaW50c1wiOiBbXSxcblx0XHRcdFx0XCJzaG93UG9pbnRzXCI6IGZhbHNlLFxuXHRcdFx0XHRcInRvdGFsUG9pbnRzXCI6IDBcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdHNhdmUoZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBTZW5kIHRoZSBwcmFjdGljZSB0byB0aGUgTkFURiBzZXJ2aWNlXG5cdFx0U2VydmljZXMuY3JlYXRlKCduYXRmJywgJ3ByYWN0aWNlJywge1xuXHRcdFx0XCJwb2ludHNcIjogdGhpcy5zdGF0ZS5wb2ludHNcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBOb3RpZnlcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCAnUHJhY3RpY2Ugc2F2ZWQhJyk7XG5cblx0XHRcdFx0Ly8gUmVzZXRcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJjbHV0Y2hBdHRlbXB0c1wiOiAwLFxuXHRcdFx0XHRcdFwiY2x1dGNoSGl0c1wiOiAwLFxuXHRcdFx0XHRcdFwibW9kZVwiOiBudWxsLFxuXHRcdFx0XHRcdFwicG9pbnRzXCI6IFtdLFxuXHRcdFx0XHRcdFwic2hvd1BvaW50c1wiOiBmYWxzZSxcblx0XHRcdFx0XHRcInRvdGFsUG9pbnRzXCI6IDBcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0aHJvd2VyfSk7XG5cdH1cblxuXHRzaWdub3V0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFByYWN0aWNlO1xuIiwiLyoqXG4gKiBOQVRGIFN0YXRzXG4gKlxuICogRmV0Y2hzIGFuZCBkaXNwbGF5cyBOQVRGIHN0YXRzIGZvciBwcmFjdGljZSBhbmQgbWF0Y2hlc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjVcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMuanMnKTtcblxuLy8gQ29tcG9uZW50c1xudmFyIE1vZGFsID0gcmVxdWlyZSgnLi4vZWxlbWVudHMvbW9kYWwuanN4Jyk7XG5cbi8vIFN0YXRzIGNvbXBvbmVudFxuY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm1hdGNoXCI6IG51bGwsXG5cdFx0XHRcInByYWN0aWNlXCI6IG51bGwsXG5cdFx0XHRcInByYWN0aWNlX2FsbFwiOiBmYWxzZSxcblx0XHRcdFwicHJhY3RpY2VfZGF0YVwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm1hdGNoU3RhdHMgPSB0aGlzLm1hdGNoU3RhdHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByYWN0aWNlRGF0YSA9IHRoaXMucHJhY3RpY2VEYXRhLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZURhdGFIaWRlID0gdGhpcy5wcmFjdGljZURhdGFIaWRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzID0gdGhpcy5wcmFjdGljZVN0YXRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzQWxsID0gdGhpcy5wcmFjdGljZVN0YXRzQWxsLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgc2lnbmluIC8gc2lnbm91dFxuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIElmIHNvbWVvbmUgaXMgbG9nZ2VkIGluXG5cdFx0aWYodGhpcy5zdGF0ZS50aHJvd2VyKSB7XG5cblx0XHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBzdGF0c1xuXHRcdFx0dGhpcy5wcmFjdGljZVN0YXRzKCk7XG5cblx0XHRcdC8vIEZldGNoIHRoZSBtYXRjaCBzdGF0c1xuXHRcdFx0Ly90aGlzLm1hdGNoU3RhdHMoKTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgc2lnbmluIC8gc2lnbm91dFxuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHR9XG5cblx0bWF0Y2hTdGF0cygpIHtcblxuXHRcdC8vIFNhdmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgbWF0Y2ggc3RhdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ21hdGNoL3N0YXRzJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgc3RhdHMgdG8gdGhlIHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwibWF0Y2hcIjogcmVzLmRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJhY3RpY2VEYXRhKGV2KSB7XG5cblx0XHQvLyBTYXZlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIHByYWN0aWNlIGRhdGFcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ3ByYWN0aWNlL2RhdGEnLCB7XG5cdFx0XHRcImlkXCI6IGV2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgc3RhdHMgdG8gdGhlIHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwicHJhY3RpY2VfZGF0YVwiOiByZXMuZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcmFjdGljZURhdGFIaWRlKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wicHJhY3RpY2VfZGF0YVwiOiBmYWxzZX0pO1xuXHR9XG5cblx0cHJhY3RpY2VTdGF0cyhhbGwpIHtcblxuXHRcdC8vIElmIEFsbCBpcyBub3QgcGFzc2VkXG5cdFx0aWYodHlwZW9mIGFsbCA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0YWxsID0gZmFsc2Vcblx0XHR9XG5cblx0XHQvLyBTYXZlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIHByYWN0aWNlIHN0YXRzXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdwcmFjdGljZS9zdGF0cycsIHtcblx0XHRcdFwiYWxsXCI6IGFsbFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgc3RhdHMgdG8gdGhlIHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwicHJhY3RpY2VcIjogcmVzLmRhdGEsXG5cdFx0XHRcdFx0XCJwcmFjdGljZV9hbGxcIjogYWxsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByYWN0aWNlU3RhdHNBbGwoKSB7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzKHRydWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR2YXIgcHJhY3RpY2UgPSB0aGlzLnN0YXRlLnByYWN0aWNlO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdGZcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUucHJhY3RpY2UgJiZcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHQ8aDI+UHJhY3RpY2U8L2gyPlxuXHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cInByYWN0aWNlXCI+XG5cdFx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJkYXRlXCI+IDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJwb2ludHNcIj5Qb2ludHM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwidGhyb3dzXCI+VGhyb3dzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cImRyb3BzXCI+RHJvcHM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49XCIyXCI+QXZlcmFnZSBQb2ludHM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNvbFNwYW49XCIzXCI+SGl0IFJhdGVzPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJhdmVyYWdlXCI+VG90YWw8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImF2ZXJhZ2VcIj5UYXJnZXQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInJhdGVcIj5Ub3RhbDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF0ZVwiPlRhcmdldDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF0ZVwiPkNsdXRjaDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD5PdmVyYWxsPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucG9pbnRzLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnRocm93cy5hdHRlbXB0c308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC50aHJvd3MuZHJvcHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwuYXZlcmFnZS50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5hdmVyYWdlLnRhcmdldH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5yYXRlLnRvdGFsfSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5yYXRlLnRhcmdldH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucmF0ZS5jbHV0Y2h9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHR7cHJhY3RpY2UubGFzdC5tYXAoZnVuY3Rpb24obywgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHRyIGtleT17aX0gZGF0YS1pZD17by5faWR9IGNsYXNzTmFtZT1cInNlc3Npb25cIiBvbkNsaWNrPXtzZWxmLnByYWN0aWNlRGF0YX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntVdGlscy5kYXRlKG8uX2NyZWF0ZWQpfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnBvaW50cy50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by50aHJvd3MuYXR0ZW1wdHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28udGhyb3dzLmRyb3BzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLmF2ZXJhZ2UudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28uYXZlcmFnZS50YXJnZXR9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucmF0ZS50b3RhbH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucmF0ZS50YXJnZXR9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnJhdGUuY2x1dGNofSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdFx0XHR7IXRoaXMuc3RhdGUucHJhY3RpY2VfYWxsICYmXG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXt0aGlzLnByYWN0aWNlU3RhdHNBbGx9PkZldGNoIEFsbDwvcD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLnByYWN0aWNlX2RhdGEgJiZcblx0XHRcdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJQcmFjdGljZSBEYXRhXCJcblx0XHRcdFx0XHRcdFx0XHRjbG9zZT17c2VsZi5wcmFjdGljZURhdGFIaWRlfVxuXHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGxQb2ludHNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLnByYWN0aWNlX2RhdGEubWFwKGZ1bmN0aW9uKHAsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxzcGFuIGtleT17aX0gY2xhc3NOYW1lPXtwWzBdID8gJ2NsdXRjaCc6Jyd9PntcIlwiICsgcFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1hdGNoICYmXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHNpZ25pbih0aHJvd2VyKSB7XG5cblx0XHQvLyBTZXQgdGhlIHRocm93ZXJcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogdGhyb3dlcn0pO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIHByYWN0aWNlIHN0YXRzXG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzKCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgbWF0Y2ggc3RhdHNcblx0XHQvL3RoaXMubWF0Y2hTdGF0cygpO1xuXHR9XG5cblx0c2lnbm91dCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBTdGF0cztcbiIsIi8qKlxuICogT3Bwb25lbnRcbiAqXG4gKiBBIGNvbXBvbmVudCBmb3Igc2VsZWN0aW5nIGFuIG9wcG9uZW50IHZpYSBmYXZvdXJpdGVzIG9yIHNlYXJjaFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjdcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKTtcblxuLy8gRWxlbWVudHNcbnZhciBJbnB1dEVudGVyID0gcmVxdWlyZShcIi4vZWxlbWVudHMvaW5wdXRFbnRlci5qc3hcIik7XG5cbi8vIFNvcnQgZmF2b3VyaXRlc1xuZnVuY3Rpb24gYWxpYXNTb3J0KGEsIGIpIHtcblx0cmV0dXJuIGEuYWxpYXMubG9jYWxlQ29tcGFyZShiLmFsaWFzKTtcbn1cblxuY2xhc3MgT3Bwb25lbnRSb3cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImZhdm91cml0ZVwiOiBwcm9wcy5mYXZvdXJpdGUsXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlclxuXHRcdH1cblxuXHRcdC8vIEJpbmQgbWV0aG9kXG5cdFx0dGhpcy5hZGQgPSB0aGlzLmFkZC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3RlZC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YWRkKGV2KSB7XG5cblx0XHQvLyBTdG9wIGFueSBmdXJ0aGVyIGV2ZW50c1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGFkZCB0aGUgZmF2b3VyaXRlXG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ2Zhdm91cml0ZScsIHtcblx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS50aHJvd2VyLl9pZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcImZhdm91cml0ZVwiOiB0cnVlfSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlKGV2KSB7XG5cblx0XHQvLyBTdG9wIGFueSBmdXJ0aGVyIGV2ZW50c1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGFkZCB0aGUgZmF2b3VyaXRlXG5cdFx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ2Zhdm91cml0ZScsIHtcblx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS50aHJvd2VyLl9pZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcImZhdm91cml0ZVwiOiBmYWxzZX0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWR9PlxuXHRcdFx0XHQ8dGQ+e3RoaXMuc3RhdGUudGhyb3dlci5hbGlhc308L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuZmF2b3VyaXRlID9cblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLXRpbWVzXCIgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19IG9uQ2xpY2s9e3RoaXMucmVtb3ZlfT48L2k+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItcGx1c1wiIHN0eWxlPXt7Y29sb3I6IFwiZ3JlZW5cIn19IG9uQ2xpY2s9e3RoaXMuYWRkfT48L2k+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cblxuXHRzZWxlY3RlZChldikge1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMucHJvcHMuc2VsZWN0ZWQodGhpcy5zdGF0ZS50aHJvd2VyKTtcblx0fVxufVxuXG4vLyBPcHBvbmVudCBDb21wb25lbnRcbmNsYXNzIE9wcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJmYXZvdXJpdGVzXCI6IFtdLFxuXHRcdFx0XCJtb2RlXCI6IFwiZmF2b3VyaXRlc1wiLFxuXHRcdFx0XCJzZWFyY2hcIjogW10sXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlclxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmZhdm91cml0ZVNob3cgPSB0aGlzLmZhdm91cml0ZVNob3cuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWFyY2hTaG93ID0gdGhpcy5zZWFyY2hTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXG5cdFx0Ly8gSWYgc29tZW9uZSBpcyBsb2dnZWQgaW5cblx0XHRpZih0aGlzLnN0YXRlLnRocm93ZXIpIHtcblx0XHRcdHRoaXMuZmF2b3VyaXRlcygpO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0fVxuXG5cdGZhdm91cml0ZXMoKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIENhbGwgdGhlIHNlcnZpY2UgdG8gZ2V0IHRoZSBmYXZvdXJpdGVzXG5cdFx0U2VydmljZXMucmVhZCgnYXV0aCcsICdmYXZvdXJpdGVzJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNvcnQgdGhlIGRhdGFcblx0XHRcdFx0cmVzLmRhdGEuc29ydChhbGlhc1NvcnQpO1xuXG5cdFx0XHRcdC8vIFN0b3JlIHRoZSBmYXZvdXJpdGVzXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1wiZmF2b3VyaXRlc1wiOiByZXMuZGF0YX0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdGZhdm91cml0ZVNob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RlXCI6IFwiZmF2b3VyaXRlc1wifSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kZSA9PSAnZmF2b3VyaXRlcycgP1xuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5GYXZvcml0ZXM8L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwibGlua1wiIG9uQ2xpY2s9e3NlbGYuc2VhcmNoU2hvd30+U2VhcmNoPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ6XG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXtzZWxmLmZhdm91cml0ZVNob3d9PkZhdm9yaXRlczwvc3Bhbj4gfCA8c3Bhbj5TZWFyY2g8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0XHRcdFx0XHQ8cD48SW5wdXRFbnRlciBvbkVudGVyPXtzZWxmLnNlYXJjaH0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgYWxpYXNcIiAvPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj48dGg+QWxpYXM8L3RoPjx0aD5GYXZvcml0ZTwvdGg+PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGUgPT0gJ2Zhdm91cml0ZXMnID9cblx0XHRcdFx0XHRcdFx0c2VsZi5zdGF0ZS5mYXZvdXJpdGVzLm1hcChmdW5jdGlvbih0LCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxPcHBvbmVudFJvdyBrZXk9e2l9IHRocm93ZXI9e3R9IGZhdm91cml0ZT17dHJ1ZX0gc2VsZWN0ZWQ9e3NlbGYuc2VsZWN0ZWR9IC8+XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdHNlbGYuc3RhdGUuc2VhcmNoLm1hcChmdW5jdGlvbih0LCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxPcHBvbmVudFJvdyBrZXk9e2l9IHRocm93ZXI9e3R9IGZhdm91cml0ZT17ZmFsc2V9IHNlbGVjdGVkPXtzZWxmLnNlbGVjdGVkfSAvPlxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdCk7XG5cdH1cblxuXHRzZWFyY2gocSkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGdldCB0aGUgc2VhcmNoIHJlc3VsdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ3NlYXJjaCcsIHtcblx0XHRcdFwicVwiOiBxXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU29ydCB0aGUgZGF0YVxuXHRcdFx0XHRyZXMuZGF0YS5zb3J0KGFsaWFzU29ydCk7XG5cblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGZhdm91cml0ZXNcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJzZWFyY2hcIjogcmVzLmRhdGF9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdHNlYXJjaFNob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RlXCI6IFwic2VhcmNoXCJ9KVxuXHR9XG5cblx0c2VsZWN0ZWQodGhyb3dlcikge1xuXHRcdGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uU2VsZWN0ID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZWxlY3QodGhyb3dlcik7XG5cdFx0fVxuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblx0XHR0aGlzLmZhdm91cml0ZXMoKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBPcHBvbmVudDtcbiIsIi8qKlxuICogUHJhY2l0Y2VcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBwcmFjdGljZSBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgb25lIGJhc2VkIG9uIHdoYXRcbiAqIGlzIGNob3NlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBOYXRmID0gcmVxdWlyZSgnLi9uYXRmL3ByYWN0aWNlLmpzeCcpO1xuXG4vLyBQcmFjdGljZSBjb21wb25lbnRcbmNsYXNzIFByYWN0aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJvcmdcIjogSGFzaC5nZXQoJ29yZycsICduYXRmJylcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5vcmdDaGFuZ2UgPSB0aGlzLm9yZ0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLnVud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgb3JnIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnb3JnJywgbnVsbCk7XG5cdH1cblxuXHRtZW51Q2hhbmdlKG9yZykge1xuXHRcdEhhc2guc2V0KCdvcmcnLCBvcmcpO1xuXHR9XG5cblx0b3JnQ2hhbmdlKG9yZykge1xuXHRcdGlmKG9yZyAhPSB0aGlzLnN0YXRlLm9yZykge1xuXHRcdFx0aWYob3JnID09IG51bGwpIHtcblx0XHRcdFx0b3JnID0gJ25hdGYnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJvcmdcIjogb3JnfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInByYWN0aWNlXCI+XG5cdFx0XHRcdDxNZW51IGNsYXNzTmFtZT1cIm1lbnUgc2Vjb25kYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUub3JnfSBvbkNoYW5nZT17c2VsZi5tZW51Q2hhbmdlfT5cblx0XHRcdFx0XHQ8SXRlbSBuYW1lPVwibmF0ZlwiPk5BVEY8L0l0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0PGRpdiBpZD1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUub3JnID09ICduYXRmJyAmJlxuXHRcdFx0XHRcdFx0XHQ8TmF0ZiB0aHJvd2VyPXtzZWxmLnByb3BzLnRocm93ZXJ9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBQcmFjdGljZTtcbiIsIi8qKlxuICogU2l0ZVxuICpcbiAqIFByaW1hcnkgY29tcG9uZW50IGZvciB0aGUgZW50aXJlIHNpdGVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIwXG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcbnZhciBNZXNzYWdlcyA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVzc2FnZXMuanN4Jyk7XG52YXIgUG9wdXBzID0gcmVxdWlyZSAoJy4vZWxlbWVudHMvcG9wdXBzLmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBIZWFkZXIgPSByZXF1aXJlKCcuL2hlYWRlci5qc3gnKTtcbnZhciBNYXRjaCA9IHJlcXVpcmUoJy4vbWF0Y2guanN4Jyk7XG52YXIgUHJhY3RpY2UgPSByZXF1aXJlKCcuL3ByYWN0aWNlLmpzeCcpO1xudmFyIFN0YXRzID0gcmVxdWlyZSgnLi9zdGF0cy5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRcbmNsYXNzIFNpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0IHRoZSBoYXNoIG1vZHVsZSBhbmQgd2F0Y2ggZm9yIHBhZ2UgY2hhbmdlc1xuXHRcdEhhc2guaW5pdCgpO1xuXHRcdEhhc2gud2F0Y2goJ3BhZ2UnLCB0aGlzLmhhc2hDaGFuZ2UuYmluZCh0aGlzKSlcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0LmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJwYWdlXCI6IEhhc2guZ2V0KCdwYWdlJywgJ2hvbWUnKSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLnBhZ2VDaGFuZ2UgPSB0aGlzLnBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhc2hDaGFuZ2UocGFnZSkge1xuXHRcdC8vIElmIHRoZSBwYWdlIGhhcyBjaGFuZ2VkXG5cdFx0aWYocGFnZSAhPSB0aGlzLnN0YXRlLnBhZ2UpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wicGFnZVwiOiBwYWdlID8gcGFnZSA6IFwiaG9tZVwifSlcblx0XHRcdHRoaXMucmVmcy5tZW51LnNlbGVjdGVkID0gcGFnZTtcblx0XHR9XG5cdH1cblxuXHRwYWdlQ2hhbmdlKG5hbWUpIHtcblx0XHRIYXNoLnNldChcInBhZ2VcIiwgbmFtZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU3R1cGlkIHJlYWN0XG5cdFx0dmFyIGl0ZW1zID0gW1xuXHRcdFx0Lyo8SXRlbSBrZXk9ezB9IG5hbWU9XCJnYW1lc1wiPkdhbWVzPC9JdGVtPiwqL1xuXHRcdFx0PEl0ZW0ga2V5PXsxfSBuYW1lPVwicHJhY3RpY2VcIj5QcmFjdGljZTwvSXRlbT5cblx0XHRdO1xuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXHRcdFx0aXRlbXMucHVzaCg8SXRlbSBrZXk9ezJ9IG5hbWU9XCJtYXRjaFwiPk1hdGNoPC9JdGVtPik7XG5cdFx0XHQvL2l0ZW1zLnB1c2goPEl0ZW0ga2V5PXszfSBuYW1lPVwibGVhZ3VlXCI+TGVhZ3VlPC9JdGVtPik7XG5cdFx0XHRpdGVtcy5wdXNoKDxJdGVtIGtleT17NH0gbmFtZT1cInN0YXRzXCI+U3RhdHM8L0l0ZW0+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInNpdGVcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8TWVudSByZWY9XCJtZW51XCIgY2xhc3NOYW1lPVwibWVudSBwcmltYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUucGFnZX0gb25DaGFuZ2U9e3NlbGYucGFnZUNoYW5nZX0+XG5cdFx0XHRcdFx0e2l0ZW1zfVxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ2hvbWUnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGwgaWQ9XCJob21lXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGR0PnYxLjEuMDwvZHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZhLXVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkNhbiBub3cgZmV0Y2ggYWxsIHByYWN0aWNlIHN0YXRzIGluc3RlYWQgb2YganVzdCB0aGUgbGFzdCBmaXZlLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkNsaWNraW5nIG9uIGFueSByb3cgaW4gc3RhdHMgd2lsbCBicmluZyB1cCBhbGwgdGhyb3dzIGluIHRoYXQgcHJhY3RpY2Ugc2Vzc2lvbi48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5GaXhlZCBhIGJ1ZyB0aGF0IGRpZG4ndCBhbGxvdyB5b3UgdG8gc2lnbiB1cCB3aXRoIGFuIGUtbWFpbC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5GaXhlZCBhIGJ1ZyB0aGF0IGNhdXNlZCBzaWduIGluIG5vdCB0byBiZSByZWNvZ25pc2VkIGFmdGVyIHNpZ24gdXAuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kZD5cblx0XHRcdFx0XHRcdFx0XHQ8ZHQ+djEuMC4wPC9kdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZmEtdWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+TkFURiBwcmFjdGljZSBpcyBhdmFpbGFibGUsIG5vIHNpZ24gaW4gcmVxdWlyZWQuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+V2l0aCBhbiBhY2NvdW50IHlvdSBjYW4gc2F2ZSB5b3VyIHByYWN0aWNlIHNlc3Npb24gYW5kIGtlZXAgdHJhY2sgb2YgeW91ciBvdmVyIGFsbCBwcm9ncmVzcyBpbiB0aGUgU3RhdHMgbWVudS48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2RkPlxuXHRcdFx0XHRcdFx0XHQ8L2RsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUucGFnZSA9PSAncHJhY3RpY2UnICYmXG5cdFx0XHRcdFx0PFByYWN0aWNlIHRocm93ZXI9e3NlbGYuc3RhdGUudGhyb3dlcn0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5wYWdlID09ICdtYXRjaCcgJiZcblx0XHRcdFx0XHQ8TWF0Y2ggdGhyb3dlcj17c2VsZi5zdGF0ZS50aHJvd2VyfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ3N0YXRzJyAmJlxuXHRcdFx0XHRcdDxTdGF0cyAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdDxQb3B1cHMgLz5cblx0XHRcdFx0PE1lc3NhZ2VzIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogdGhyb3dlcn0pO1xuXHR9XG5cblx0c2lnbm91dCgpIHtcblxuXHRcdC8vIElmIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHNpZ25lZCBpblxuXHRcdGlmKFsncHJhY3RpY2UnXS5pbmRleE9mKHRoaXMuc3RhdGUucGFnZSkgPT0gLTEpIHtcblx0XHRcdEhhc2guc2V0KCdwYWdlJywgbnVsbCk7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSB0aHJvd2VyIGZsYWdcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBTaXRlO1xuIiwiLyoqXG4gKiBTdGF0c1xuICpcbiAqIE1hbmFnZXMgT3JnIG1lbnUgZm9yIHN0YXRzIGFuZCBkaXNwbGF5IHRoZSBhcHByb3ByaWF0ZSBvbmUgYmFzZWQgb24gd2hhdFxuICogaXMgY2hvc2VuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbnZhciB7TWVudSwgSXRlbX0gPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lbnUuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50c1xudmFyIE5hdGYgPSByZXF1aXJlKCcuL25hdGYvc3RhdHMuanN4Jyk7XG5cbi8vIFN0YXRzIGNvbXBvbmVudFxuY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm9yZ1wiOiBIYXNoLmdldCgnb3JnJywgJ25hdGYnKVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm9yZ0NoYW5nZSA9IHRoaXMub3JnQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gudW53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBvcmcgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdvcmcnLCBudWxsKTtcblx0fVxuXG5cdG1lbnVDaGFuZ2Uob3JnKSB7XG5cdFx0SGFzaC5zZXQoJ29yZycsIG9yZyk7XG5cdH1cblxuXHRvcmdDaGFuZ2Uob3JnKSB7XG5cdFx0aWYob3JnICE9IHRoaXMuc3RhdGUub3JnKSB7XG5cdFx0XHRpZihvcmcgPT0gbnVsbCkge1xuXHRcdFx0XHRvcmcgPSAnbmF0Zic7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcIm9yZ1wiOiBvcmd9KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwic3RhdHNcIj5cblx0XHRcdFx0PE1lbnUgY2xhc3NOYW1lPVwibWVudSBzZWNvbmRhcnlcIiBzZWxlY3RlZD17c2VsZi5zdGF0ZS5vcmd9IG9uQ2hhbmdlPXtzZWxmLm1lbnVDaGFuZ2V9PlxuXHRcdFx0XHRcdDxJdGVtIG5hbWU9XCJuYXRmXCI+TkFURjwvSXRlbT5cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0XHQ8ZGl2IGlkPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5vcmcgPT0gJ25hdGYnICYmXG5cdFx0XHRcdFx0XHRcdDxOYXRmIHRocm93ZXI9e3NlbGYucHJvcHMudGhyb3dlcn0gLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRzO1xuIiwiLyoqXG4gKiBUaHJvd2VyXG4gKlxuICogTWFuYWdlcyBlZGl0aW5nIGRldGFpbHMgZm9yIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHRocm93ZXJcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI1XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcblxuLy8gVGhyb3dlciBjb21wb25lbnRcbmNsYXNzIFRocm93ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdiAvPlxuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFRocm93ZXI7XG4iLCIvKipcbiAqIFJlcXVlc3RzXG4gKlxuICogTWFuYWdlcyBtYXRjaCByZXF1ZXN0c1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMzFcbiAqL1xuXG4vLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuL2dlbmVyaWMvaGFzaC5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIHNwZWNpZmljXG52YXIgVHdvV2F5ID0gcmVxdWlyZSgnLi90d293YXkuanMnKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcblxuLy8gU2lnbmVkIGluIHRocm93ZXJcbl9fdGhyb3dlciA9IG51bGw7XG5cbi8vIFBlbmRpbmcgcmVxdWVzdHNcbl9fcGVuZGluZyA9IFtdO1xuXG4vKipcbiAqIEluaXRcbiAqXG4gKiBJbml0aWFsaXNlcyB0aGUgbW9kdWxlIGJ5IHRyYWNraW5nIGFueSBzaWduIGluIC8gc2lnbiBvdXQgZXZlbnRzXG4gKlxuICogQG5hbWUgX2luaXRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaW5pdCgpIHtcblxuXHQvLyBHZXQgbm90aWZpZWQgb2YgYW55IGNoYW5nZSBpbiB0aHJvd2VyXG5cdEV2ZW50cy5hZGQoJ3NpZ25pbicsIF9zaWduaW4pO1xuXHRFdmVudHMuYWRkKCdzaWdub3V0JywgX3NpZ25vdXQpO1xufVxuXG4vKipcbiAqIFBlbmRpbmdcbiAqXG4gKiBGZXRjaGVzIHBlbmRpbmcgcmVxdWVzdHNcbiAqXG4gKiBAbmFtZSBfcGVuZGluZ1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wZW5kaW5nKCkge1xuXG5cdC8vIFNob3cgdGhlIGxvYWRlclxuXHRMb2FkZXIuc2hvdygpO1xuXG5cdC8vIEZldGNoIHRoZSByZXF1ZXN0c1xuXHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ21hdGNoL3JlcXVlc3RzJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdF9wZW5kaW5nUHJvY2VzcyhyZXMuZGF0YSk7XG5cdFx0fVxuXHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdExvYWRlci5oaWRlKCk7XG5cdH0pXG59XG5cbi8qKlxuICogUGVuZGluZyBQcm9jZXNzXG4gKlxuICogUHJvY2Vzc2VzIGFueSBwZW5kaW5nIHJlcXVlc3RzIHRoYXQgYXJlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxuICpcbiAqIEBuYW1lIF9wZW5kaW5nUHJvY2Vzc1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wZW5kaW5nUHJvY2VzcyhyZXF1ZXN0cykge1xuXG5cdC8vIFN0b3JlIHRoZSBwZW5kaW5nIHJlcXVlc3RzXG5cdF9fcGVuZGluZyA9IHJlcXVlc3RzO1xuXG5cdC8vIEdvIHRocm91Z2ggZWFjaCBpbiB3aGljaCB0aGUgdGhyb3dlciBpcyB0aGUgb3Bwb25lbnRcblx0Zm9yKHZhciBvIG9mIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG8uX2lkLCB7XG5cdFx0XHRcInRleHRcIjogXCJZb3UgaGF2ZSBhbiBcIiArIG8ub3JnICsgXCIgbWF0Y2ggcmVxdWVzdCBmcm9tIFwiICtcblx0XHRcdFx0XHRvLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHN0YXJ0IHRoaXMgbWF0Y2ggbm93P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWNsaW5lXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWNsaW5lfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJBY2NlcHRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdEFjY2VwdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEdvIHRocm91Z2ggZWFjaCBpbiB3aGljaCB0aGUgdGhyb3dlciBpcyB0aGUgaW5pdGlhdG9yXG5cdGZvcih2YXIgbyBvZiBfX3BlbmRpbmdbJ2luaXRpYXRvciddKSB7XG5cblx0XHQvLyBBZGQgYSBuZXcgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlJywgby5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBpbml0aWF0ZWQgYW4gXCIgKyBvLm9yZyArIFwiIG1hdGNoIHdpdGggXCIgK1xuXHRcdFx0XHRcdG8uYWxpYXMgKyBcIi4gRG8geW91IHdhbnQgdG8gd2FpdCBmb3IgdGhpcyBtYXRjaCB0byBzdGFydD9cIixcblx0XHRcdFwiYnV0dG9uc1wiOiBbXG5cdFx0XHRcdHtcInRpdGxlXCI6IFwiRGVsZXRlXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWxldGV9LFxuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIldhaXRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdFdhaXR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXF1ZXN0IEFjY2VwdFxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBhY2NlcHRlZCBieSB0aGUgb3Bwb25lbnRcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdEFjY2VwdFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0QWNjZXB0KGlkKSB7XG5cblx0Ly8gTGV0IHRoZSBzZXJ2ZXIga25vdyB0aGUgbWF0Y2ggd2FzIGFjY2VwdGVkXG5cdFNlcnZpY2VzLnVwZGF0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFwiaWRcIjogaWRcblx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHQvLyBGaW5kIHRoZSBwZW5kaW5nIG1hdGNoLCBzdG9yZSBpdCwgdGhlbiByZW1vdmUgaXQgZnJvbSBwZW5kaW5nXG5cdFx0XHR2YXIgcmVxID0gbnVsbDtcblx0XHRcdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ29wcG9uZW50J10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRcdHJlcSA9IF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXTtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdEhhc2guc2V0KHtcblx0XHRcdFx0XCJwYWdlXCI6IFwibWF0Y2hcIixcblx0XHRcdFx0XCJvcmdcIjogcmVxLm9yZy50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcImlkXCI6IFwibXxcIiArIHJlcy5kYXRhICsgXCJ8XCIgKyByZXEuYWxpYXNcblx0XHRcdH0pXG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGFjY2VwdGVkXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgRGVjbGluZVxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBkZWNsaW5lZCBieSB0aGUgb3Bwb25lbnRcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdERlY2xpbmVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlY2xpbmUoaWQpIHtcblxuXHQvLyBMZXQgdGhlIHNlcnZlciBrbm93IHRoZSBtYXRjaCB3YXMgZGVjbGluZWRcblx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cdFx0XHRcdGlmKF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGRlbGV0ZWRcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmVxdWVzdCBEZWxldGVcbiAqXG4gKiBDYWxsZWQgd2hlbiBhIG1hdGNoIHJlcXVlc3QgaXMgZGVsZXRlZCBieSB0aGUgaW5pdGlhdG9yXG4gKlxuICogQG5hbWUgX3JlcXVlc3REZWxldGVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlbGV0ZShpZCkge1xuXG5cdC8vIExldCB0aGUgc2VydmVyIGtub3cgd2UgYXJlIHJlbW92aW5nIG91ciByZXF1ZXN0XG5cdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFwiaWRcIjogaWRcblx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHQvLyBEZWxldGUgdGhlIHJlcXVlc3QgZnJvbSB0aGUgcGVuZGluZ1xuXHRcdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ2luaXRpYXRvciddLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgZGVsZXRlZFxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IE5ld1xuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB0aHJvd2VyIHJlY2lldmVzIGEgbmV3IG1hdGNoIHJlcXVlc3RcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdE5ld1xuICogQHBhcmFtIG9iamVjdCBtc2dcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdE5ldyhtc2cpIHtcblxuXHQvLyBJZiB0aGlzIGlzIGEgbmV3IHJlcXVlc3Rcblx0aWYobXNnLnR5cGUgPT0gJ21hdGNoX3JlcXVlc3QnKSB7XG5cblx0XHQvLyBBZGQgaXQgdG8gdGhlIHBlbmRpbmdcblx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10ucHVzaChtc2cpO1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG1zZy5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBoYXZlIGFuIFwiICsgbXNnLm9yZyArIFwiIG1hdGNoIHJlcXVlc3QgZnJvbSBcIiArXG5cdFx0XHRcdFx0bXNnLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHN0YXJ0IHRoaXMgbWF0Y2ggbm93P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWNsaW5lXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWNsaW5lfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJBY2NlcHRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdEFjY2VwdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEVsc2UgaWYgd2UgbmVlZCB0byBkZWxldGVcblx0ZWxzZSBpZihtc2cudHlwZSA9PSBcIm1hdGNoX3JlcXVlc3RfZGVsZXRlXCIpIHtcblxuXHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBtc2cuaWQpIHtcblx0XHRcdFx0X19wZW5kaW5nWydvcHBvbmVudCddLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBtc2cuaWQpO1xuXHR9XG59XG5cbi8qKlxuICogUmVxdWVzdCBXYWl0XG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIGluaXRpYXRvciBvZiBhIG1hdGNoIHJlcXVlc3QgaGFzIGNob3NlbiB0byB3YWl0IGZvciBpdFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0V2FpdFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0V2FpdChpZCkge1xuXG5cdC8vIEZpbmQgdGhlIHBlbmRpbmcgbWF0Y2gsIHN0b3JlIGl0LCB0aGVuIHJlbW92ZSBpdCBmcm9tIHBlbmRpbmdcblx0dmFyIHJlcSA9IG51bGw7XG5cdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ2luaXRpYXRvciddKSB7XG5cdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdHJlcSA9IF9fcGVuZGluZ1snaW5pdGlhdG9yJ11baV07XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hhbmdlIHRoZSBwYWdlIGFuZCBzdG9yZSB0aGUgcmVxdWVzdCBpbmZvXG5cdEhhc2guc2V0KHtcblx0XHRcInBhZ2VcIjogXCJtYXRjaFwiLFxuXHRcdFwib3JnXCI6IHJlcS5vcmcudG9Mb3dlckNhc2UoKSxcblx0XHRcImlkXCI6IFwicnxcIiArIHJlcS5faWQgKyAnfCcgKyByZXEuYWxpYXNcblx0fSlcblxuXHQvLyBSZXR1cm4gT0tcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogU2lnbmluXG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2lnbnMgaW4gKG9yIHdhcyBhbHJlYWR5IHNpZ25lZCBpbikuIEZldGNoZXMgcGVuZGluZ1xuICogcmVxdWVzdHMgYW5kIHN0YXJ0cyB0cmFja2luZyBhbnkgbmV3IHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25pblxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9zaWduaW4odGhyb3dlcikge1xuXG5cdC8vIFN0b3JlIHRoZSB0aHJvd2VyXG5cdF9fdGhyb3dlciA9IHRocm93ZXI7XG5cblx0Ly8gRmV0Y2ggdGhlIHBlbmRpbmcgcmVxdWVzdHNcblx0X3BlbmRpbmcoKTtcblxuXHQvLyBUcmFjayBhbnkgbmV3IHJlcXVlc3RzXG5cdFR3b1dheS50cmFjayhcblx0XHQnYXV0aCcsICdyZXF1ZXN0cy0nICsgX190aHJvd2VyLFxuXHRcdF9yZXF1ZXN0TmV3XG5cdCk7XG59XG5cbi8qKlxuICogU2lnbm91dFxuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNpZ25zIG91dCBvciBpcyBzaWduZWQgb3V0LiBSZW1vdmVzIGFsbCBtZXNzYWdlcyBhbmRcbiAqIHN0b3BzIHRyYWNraW5nIHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25vdXRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc2lnbm91dCgpIHtcblxuXHQvLyBEZWxldGUgYWxsIG1lc3NhZ2VzXG5cdGZvcih2YXIgbyBpbiBfX3BlbmRpbmcpIHtcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBvLl9pZCk7XG5cdH1cblxuXHQvLyBTdG9wIHRyYWNraW5nIHRoZSB0aHJvd2VyXG5cdFR3b1dheS51bnRyYWNrKFxuXHRcdCdhdXRoJywgJ3JlcXVlc3RzLScgKyBfX3Rocm93ZXIsXG5cdFx0X3JlcXVlc3ROZXdcblx0KTtcbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluaXRcIjogX2luaXQsXG59XG4iLCIvKipcbiAqIFR3byBXYXlcbiAqXG4gKiBBbGxvd3MgY2xpZW50cyB0byBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHZpYSB3ZWJzb2NrZXQgc28gZXZlbnRzIGNhbiBiZVxuICogdHJhY2tlZCBpbiByZWFsIHRpbWVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI5XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuL2dlbmVyaWMvc2VydmljZXMuanMnKTtcbnZhciBUb29scyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy90b29scy5qcycpO1xudmFyIFdTSGVscGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL3dlYnNvY2tldC5qcycpO1xuXG4vLyBUaGUgcGluZyB0aW1lclxudmFyIF9fcGluZyA9IG51bGw7XG5cbi8vIFRoZSB2YWxpZCBjbG9zZSBmbGFnXG52YXIgX19jbG9zZSA9IGZhbHNlO1xuXG4vLyBUaGUgd2Vic29ja2V0XG52YXIgX19zb2NrZXQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBzZXJ2aWNlIGNhbGxiYWNrc1xuICpcbiAqIHdpbGwgY29udGFpbiBhIHN0cmluZyBmb3IgdGhlIHNlcnZpY2UgLyBrZXkgd2l0aCBjYWxsYmFja3MgZm9yIHRob3NlIGtleXMsXG4gKiBlLmcuIHtcbiAqXHRcInNlcnZpY2UxXCI6IHtcbiAqXHRcdFwia2V5MVwiOiBbZnVuY3Rpb24xLCBmdW5jdGlvbjJdLFxuICpcdFx0XCJrZXkyXCI6IFtmdW5jdGlvbjNdXG4gKlx0fSxcbiAqXHRcInNlcnZpY2UyXCI6IHtcbiAqXHRcdFwia2V5M1wiOiBbZnVuY3Rpb240XVxuICpcdH1cbiAqIH1cbiAqL1xudmFyIF9fc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgVHJhY2tcbiAqXG4gKiBBZGRzIHRyYWNraW5nIGZvciBhIHNwZWNpZmljIHNlcnZpY2Uga2V5XG4gKlxuICogQG5hbWUgX2FkZFRyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcbiAqIEBwYXJhbSBzdHJpbmcga2V5XG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHRoZSBVUkwgZG9lc24ndCBleGlzdFxuXHRpZighX19zb2NrZXQpIHtcblx0XHRjb25zb2xlLmVycm9yKCd0d293YXk6IHNvbWV0aGluZyB3ZW50IHdyb25nLCBubyBzb2NrZXQgZm91bmQnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZW5kIHRoZSB0cmFja2luZyBtZXNzYWdlIHRocm91Z2ggdGhlIHdlYnNvY2tldFxuXHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcIl90eXBlXCI6IFwidHJhY2tcIixcblx0XHRcInNlcnZpY2VcIjogc2VydmljZSxcblx0XHRcImtleVwiOiBrZXlcblx0fSkpO1xuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIHNlcnZpY2UsIGFkZCBpdFxuXHRpZighKHNlcnZpY2UgaW4gX19zZXJ2aWNlcykpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdID0ge31cblx0fVxuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIGtleSBmb3IgdGhlIGdpdmVuIHNlcnZpY2UsIGFkZCB0aGUgbGlzdCB3aXRoXG5cdC8vXHR0aGUgY2FsbGJhY2tcblx0aWYoIShrZXkgaW4gX19zZXJ2aWNlc1tzZXJ2aWNlXSkpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0gPSBbY2FsbGJhY2tdXG5cdH1cblxuXHQvLyBFbHNlLCBhZGQgdGhlIGNhbGxiYWNrLCB0byB0aGUgZ2l2ZW4gc2VydmljZS9rZXlcblx0ZWxzZSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLnB1c2goY2FsbGJhY2spO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIENsb3NlXG4gKlxuICogQ2hlY2tzIGlmIGl0J3MgYSBsZWdpdGltYXRlIGNsb3NlZCBzb2NrZXQsIG9yIGlmIHdlIG5lZWQgdG8gcmVjb25uZWN0IHRvXG4gKiBldmVyeXRoaW5nXG4gKlxuICogQG5hbWUgX2hhbmRsZUNsb3NlXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhbmRsZUNsb3NlKCkge1xuXG5cdC8vIElmIGl0J3MgYSB2YWxpZCBjbG9zZVxuXHRpZihfX2Nsb3NlKSB7XG5cdFx0X19zb2NrZXQgPSBudWxsO1xuXHR9XG5cblx0Ly8gRWxzZSwgcmVvcGVuIHRoZSBzb2NrZXQgYW5kIHJlLXRyYWNrIGFsbCBldmVudHNcblx0ZWxzZSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBOb3RpZnkgdGhlIGJhY2tlbmQgb2YgYSBuZXcgd3MgY29ubmVjdGlvblxuXHRcdFx0U2VydmljZXMucmVhZCgnd2VicG9sbCcsICd3ZWJzb2NrZXQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgd2Vic29ja2V0XG5cdFx0XHRcdF9fc29ja2V0ID0gV1NIZWxwZXIoJ3dzczovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnL3dzJywge1xuXHRcdFx0XHRcdFwib3BlblwiOiBmdW5jdGlvbihzb2NrKSB7XG5cblx0XHRcdFx0XHRcdC8vIFNlbmQgdGhlIGNvbm5lY3QgbWVzc2FnZVxuXHRcdFx0XHRcdFx0c29jay5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcImNvbm5lY3RcIixcblx0XHRcdFx0XHRcdFx0XCJrZXlcIjogcmVzLmRhdGFcblx0XHRcdFx0XHRcdH0pKVxuXG5cdFx0XHRcdFx0XHQvLyBSZXRyYWNrIGV2ZXJ5IHNlcnZpY2Uva2V5XG5cdFx0XHRcdFx0XHRmb3IodmFyIHMgaW4gX19zZXJ2aWNlcykge1xuXHRcdFx0XHRcdFx0XHRmb3IodmFyIGsgaW4gX19zZXJ2aWNlc1tzXSkge1xuXHRcdFx0XHRcdFx0XHRcdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcInRyYWNrXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcInNlcnZpY2VcIjogcyxcblx0XHRcdFx0XHRcdFx0XHRcdFwia2V5XCI6IGtcblx0XHRcdFx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwibWVzc2FnZVwiOiBfaGFuZGxlTWVzc2FnZSxcblx0XHRcdFx0XHRcImNsb3NlXCI6IF9oYW5kbGVDbG9zZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sIDUwMDApO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIE1lc3NhZ2VzXG4gKlxuICogUmVjaWV2ZXMgbWVzc2FnZXMgZnJvbSB3ZWJzb2NrZXRzIGFuZCBkaXJlY3RzIHRoZSBkYXRhIHRvIHRoZSBhcHByb3ByaWF0ZVxuICogY2FsbGJhY2tcbiAqXG4gKiBAbmFtZSBfaGFuZGxlTWVzc2FnZVxuICogQHBhcmFtIFdlYlNvY2tldCBzb2NrXHRcdFRoZSBzb2NrZXQgdGhlIG1lc3NhZ2UgY2FtZSBvblxuICogQHBhcmFtIE1lc3NhZ2VFdmVudCBldlx0XHRUaGUgZXZlbnQgbWVzc2FnZSByZWNlaXZlZFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9oYW5kbGVNZXNzYWdlKHNvY2ssIGV2KSB7XG5cblx0Ly8gSWYgaXQncyBwb25nXG5cdGlmKGV2LmRhdGEgPT0gJ3BvbmcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2NyZXcgeW91IGphdmFzY3JpcHRcblx0dmFyIHIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gUGFyc2UgdGhlIGRhdGFcblx0XHRvTXNnID0gSlNPTi5wYXJzZShyLnJlc3VsdCk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBzZXJ2aWNlXG5cdFx0aWYob01zZy5zZXJ2aWNlIGluIF9fc2VydmljZXMpIHtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSB0aGUga2V5XG5cdFx0XHRpZihvTXNnLmtleSBpbiBfX3NlcnZpY2VzW29Nc2cuc2VydmljZV0pIHtcblxuXHRcdFx0XHQvLyBDYWxsIGVhY2ggY2FsbGJhY2tcblx0XHRcdFx0Zm9yKHZhciBmIG9mIF9fc2VydmljZXNbb01zZy5zZXJ2aWNlXVtvTXNnLmtleV0pIHtcblx0XHRcdFx0XHRmKG9Nc2cuZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRyLnJlYWRBc1RleHQoZXYuZGF0YSk7XG59XG5cbi8qKlxuICogUGluZ1xuICpcbiAqIFNlbmQgYSBwaW5nIHRvIGtlZXAgdGhlIHNvY2tldCBhbGl2ZVxuICpcbiAqIEBuYW1lIF9waW5nXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BpbmcoKSB7XG5cblx0Ly8gU2VuZCBhIHBpbmcgbWVzc2FnZSBvdmVyIHRoZSBzb2NrZXQgdG8ga2VlcCBpdCBhbGl2ZVxuXHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcIl90eXBlXCI6IFwicGluZ1wiXG5cdH0pKTtcbn1cblxuLyoqXG4gKiBUcmFja1xuICpcbiAqIFRha2VzIGEgVVJMIGFuZCBhbiBldmVudCB0eXBlIGFuZCBhKSBvcGVucyBhIG5ldyB3ZWJzb2NrZXQgb3IgdXNlcyBhblxuICogZXhpc3Rpbmcgb25lLCB0aGVuIGIpIHNlbmRzIGEgdHJhY2tpbmcgbWVzc2FnZSB0aHJvdWdoIHRoZSB3ZWJzb2NrZXQgc28gdGhlXG4gKiBiYWNrZW5kIGtub3dzbiB0byBzZW5kIHRoZSBrZXkgdHlwZSB0byB1c1xuICpcbiAqIEBuYW1lIF90cmFja1xuICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRoZSBrZXkgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0gc3RyaW5nIGtleVx0XHRcdFRoZSBrZXkgdG8gdHJhY2tcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgZm9yIGFueSBtZXNzYWdlcyBvZiB0aGUga2V5IHZhbHVlXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3RyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB3ZSBkb24ndCBoYXZlIGEgc29ja2V0XG5cdGlmKCFfX3NvY2tldCkge1xuXG5cdFx0Ly8gTm90aWZ5IHRoZSBiYWNrZW5kIG9mIGEgbmV3IHdzIGNvbm5lY3Rpb25cblx0XHRTZXJ2aWNlcy5yZWFkKCd3ZWJwb2xsJywgJ3dlYnNvY2tldCcsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgd2Vic29ja2V0XG5cdFx0XHRfX3NvY2tldCA9IFdTSGVscGVyKCd3c3M6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJy93cycsIHtcblx0XHRcdFx0XCJvcGVuXCI6IGZ1bmN0aW9uKHNvY2spIHtcblxuXHRcdFx0XHRcdC8vIFJlc2V0IHRoZSBjbG9zZSBmbGFnXG5cdFx0XHRcdFx0X19jbG9zZSA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0Ly8gU2VuZCB0aGUgY29ubmVjdCBtZXNzYWdlXG5cdFx0XHRcdFx0c29jay5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdFwiX3R5cGVcIjogXCJjb25uZWN0XCIsXG5cdFx0XHRcdFx0XHRcImtleVwiOiByZXMuZGF0YVxuXHRcdFx0XHRcdH0pKVxuXG5cdFx0XHRcdFx0Ly8gU2VuZCB0aGUgdHJhY2tpbmcgbWVzc2FnZSBhbmQgc3RvcmUgdGhlIGNhbGxiYWNrXG5cdFx0XHRcdFx0X2FkZFRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibWVzc2FnZVwiOiBfaGFuZGxlTWVzc2FnZSxcblx0XHRcdFx0XCJjbG9zZVwiOiBfaGFuZGxlQ2xvc2Vcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBQaW5nIGF0IDUgbWludXRlIGludGVydmFsc1xuXHRcdFx0X19waW5nID0gc2V0SW50ZXJ2YWwoX3BpbmcsIDMwMDAwMCk7XG5cdFx0fSk7XG5cblx0fSBlbHNlIHtcblx0XHRfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjayk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbnRyYWNrXG4gKlxuICogUmVtb3ZlcyBhIGNhbGxiYWNrIGFuZCBub3RpZmllcyB0aGUgd2Vic29ja2V0IHdlIGFyZSBub3QgdHJhY2tpbmcgYW55bW9yZVxuICpcbiAqIEBuYW1lIF91bnRyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdGhlIGtleSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSBzdHJpbmcga2V5XHRcdFx0VGhlIGtleSB0byB1bnRyYWNrXG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIGFzc29jaWF0ZWQgd2l0aCB0aGUgdHJhY2tcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfdW50cmFjayhzZXJ2aWNlLCBrZXksIGNhbGxiYWNrKSB7XG5cblx0Ly8gSWYgd2UgaGF2ZSB0aGUgc2VydmljZVxuXHRpZihzZXJ2aWNlIGluIF9fc2VydmljZXMpIHtcblxuXHRcdC8vIElmIHdlIGhhdmUgdGhlIGtleVxuXHRcdGlmKGtleSBpbiBfX3NlcnZpY2VzW3NlcnZpY2VdKSB7XG5cblx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCBjYWxsYmFja1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHRcdC8vIElmIHRoZSBjYWxsYmFjayBtYXRjaGVzXG5cdFx0XHRcdGlmKGNhbGxiYWNrID09IF9fc2VydmljZXNbc2VydmljZV1ba2V5XVtpXSkge1xuXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBjYWxsYmFja1xuXHRcdFx0XHRcdF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5zcGxpY2UoaSwgMSk7XG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBoYXZlIG5vIG1vcmUgY2FsbGJhY2tzXG5cdFx0XHRcdFx0aWYoX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLmxlbmd0aCA9PSAwKSB7XG5cblx0XHRcdFx0XHRcdC8vIE5vdGlmeSB0aGUgd2Vic29ja2V0IHdlIGFyZW4ndCB0cmFja2luZyB0aGUga2V5XG5cdFx0XHRcdFx0XHQvL1x0YW55bW9yZVxuXHRcdFx0XHRcdFx0X19zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0XHRcdFwiX3R5cGVcIjogXCJ1bnRyYWNrXCIsXG5cdFx0XHRcdFx0XHRcdFwic2VydmljZVwiOiBzZXJ2aWNlLFxuXHRcdFx0XHRcdFx0XHRcImtleVwiOiBrZXlcblx0XHRcdFx0XHRcdH0pKTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBrZXlcblx0XHRcdFx0XHRcdGRlbGV0ZSBfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV07XG5cblx0XHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgbm8gbW9yZSBrZXlzIGluIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFx0XHRpZihUb29scy5lbXB0eShfX3NlcnZpY2VzW3NlcnZpY2VdKSkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUgc2VydmljZVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgX19zZXJ2aWNlc1tzZXJ2aWNlXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIG5vIG1vcmUgc2VydmljZXNcblx0XHRcdFx0XHRcdFx0aWYoVG9vbHMuZW1wdHkoX19zZXJ2aWNlcykpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFR1cm4gb2ZmIHRoZSBwaW5nIGludGVydmFsXG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfX3BpbmcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2xvc2UgdGhlIHNvY2tldFxuXHRcdFx0XHRcdFx0XHRcdF9fY2xvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9fc29ja2V0LmNsb3NlKDEwMDAsICdub3RoaW5nIGVsc2UgdG8gdHJhY2snKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENhbGxiYWNrIGZvdW5kIGFuZCByZW1vdmVkXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDYWxsYmFjayBub3QgZm91bmRcblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vLyBleHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHJhY2tcIjogX3RyYWNrLFxuXHRcInVudHJhY2tcIjogX3VudHJhY2tcbn1cbiIsIi8qKlxuICogVXRpbHNcbiAqXG4gKiBTaGFyZWQgdXRpbGl0aWVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNFxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9ldmVudHMuanMnKTtcblxuLyoqXG4gKiBVdGlsc1xuICovXG52YXIgVXRpbHMgPSB7XG5cblx0ZGF0ZTogZnVuY3Rpb24odHMpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKHRzKjEwMDApO1xuXHRcdHZhciBZID0gJycgKyBkLmdldEZ1bGxZZWFyKCk7XG5cdFx0dmFyIE0gPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKTtcblx0XHRpZihNLmxlbmd0aCA9PSAxKSBNID0gJzAnICsgTTtcblx0XHR2YXIgRCA9ICcnICsgZC5nZXREYXRlKCk7XG5cdFx0aWYoRC5sZW5ndGggPT0gMSkgRCA9ICcwJyArIEQ7XG5cdFx0cmV0dXJuIFkgKyAnLycgKyBNICsgJy8nICsgRDtcblx0fSxcblxuXHRlcnJvclRyZWU6IGZ1bmN0aW9uKGVycm9ycykge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmV0dXJuXG5cdFx0dmFyIG9SZXQgPSB7fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGVycm9yXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHQvLyBJZiB0aGUgZXJyb3IgZmllbGQgaGFzIGEgcGVyaW9kXG5cdFx0XHRpZihlcnJvcnNbaV1bMF0uaW5jbHVkZXMoJy4nKSkge1xuXG5cdFx0XHRcdC8vIFNwbGl0IGl0XG5cdFx0XHRcdGxGaWVsZCA9IGVycm9yc1tpXVswXS5zcGxpdCgvXFwuKC4qKS8pXG5cblx0XHRcdFx0Ly8gSWYgd2UgZG9uJ3QgaGF2ZSB0aGUgZmllbGQgYWxyZWFkeVxuXHRcdFx0XHRpZighb1JldFtsRmllbGRbMF1dKSB7XG5cdFx0XHRcdFx0b1JldFtsRmllbGRbMF1dID0gW11cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCB0aGUgcmVzdFxuXHRcdFx0XHRvUmV0W2xGaWVsZFswXV0ucHVzaChbbEZpZWxkWzFdLCBlcnJvcnNbaV1bMV1dKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpdCdzIGEgZmxhdCBmaWVsZFxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9SZXRbZXJyb3JzW2ldWzBdXSA9IGVycm9yc1tpXVsxXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCB0aGUgZXJyb3JzIHdlIGZvdW5kXG5cdFx0Zm9yKGxldCBrIGluIG9SZXQpIHtcblxuXHRcdFx0Ly8gSWYgd2UgZmluZCBhbiBhcnJheVxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShvUmV0W2tdKSkge1xuXG5cdFx0XHRcdC8vIFJlY3Vyc2Vcblx0XHRcdFx0b1JldFtrXSA9IFV0aWxzLmVycm9yVHJlZShvUmV0W2tdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIFRyZWVcblx0XHRyZXR1cm4gb1JldDtcblx0fSxcblxuXHRzZXJ2aWNlRXJyb3I6IGZ1bmN0aW9uKGVycikge1xuXG5cdFx0Ly8gV2hhdCBlcnJvciBpcyBpdD9cblx0XHRzd2l0Y2goZXJyLmNvZGUpIHtcblxuXHRcdFx0Ly8gTm8gU2Vzc2lvblxuXHRcdFx0Y2FzZSAxMDI6XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciBzaWdub3V0XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKFwic2lnbm91dFwiKTtcblxuXHRcdFx0XHQvLyBOb3RoaW5nIGVsc2UgdG8gZG9cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdC8vIEludmFsaWQgZmllbGRzXG5cdFx0XHRjYXNlIDEwMDE6XG5cblx0XHRcdFx0Ly8gUmVidWlsZCB0aGUgZXJyb3IgbWVzc2FnZVxuXHRcdFx0XHRlcnIubXNnID0gVXRpbHMuZXJyb3JUcmVlKGVyci5tc2cpO1xuXG5cdFx0XHRcdC8vIEJ1dCBhbGxvdyB0aGUgY2hpbGQgdG8gZGVhbCB3aXRoIHRoZSBtZXNzYWdlcyB0aGVtc2VsdmVzXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBGYWlsZWQgdG8gcHJvY2VzcyBlcnJvclxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=