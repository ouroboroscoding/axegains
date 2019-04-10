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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLzNyZC9qcXVlcnkuYWpheC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9oYXNoLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9nZW5lcmljL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvd2Vic29ja2V0LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9iYXNlL2Zvcm1zLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L2VsZW1lbnRzL2lucHV0RW50ZXIuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvbWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tZXNzYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9wb3B1cHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L21hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvYm9hcmQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvbmF0Zi9tYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9uYXRmL3ByYWN0aWNlLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvc3RhdHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvb3Bwb25lbnQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvcHJhY3RpY2UuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvc2l0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9zdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC90aHJvd2VyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdHdvd2F5LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdXRpbHMuanMiXSwibmFtZXMiOlsiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImMiLCJkIiwic2xpY2UiLCJlIiwiY29uY2F0IiwiZiIsInB1c2giLCJnIiwiaW5kZXhPZiIsImgiLCJpIiwidG9TdHJpbmciLCJqIiwiaGFzT3duUHJvcGVydHkiLCJrIiwibCIsIm0iLCJuIiwiZm4iLCJpbml0IiwibyIsInAiLCJxIiwiciIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiY29udGV4dCIsImVhY2giLCJtYXAiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsInBhcnNlRmxvYXQiLCJub2RlVHlwZSIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiZXZhbCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhbWVsQ2FzZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJzIiwibWFrZUFycmF5IiwiT2JqZWN0IiwiaW5BcnJheSIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsInNwbGl0IiwidCIsImRvY3VtZW50RWxlbWVudCIsInUiLCJ2IiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInciLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwiZmluZCIsIm1hdGNoZXNTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bmlxdWUiLCJ0ZXh0Q29udGVudCIsIm5vZGVWYWx1ZSIsImlzWE1MRG9jIiwib3duZXJEb2N1bWVudCIsImV4cHIiLCJhdHRySGFuZGxlIiwibWF0Y2giLCJib29sIiwibmVlZHNDb250ZXh0IiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIngiLCJ5IiwieiIsIkEiLCJ0ZXN0IiwiZmlsdGVyIiwibm90IiwiaXMiLCJCIiwiQyIsIkQiLCJleGVjIiwicGFyc2VIVE1MIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWFkeSIsIkUiLCJGIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsIm5leHQiLCJwcmV2IiwiZGlyIiwic2libGluZyIsIm5leHRTaWJsaW5nIiwiaGFzIiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJHIiwicGFyZW50IiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImZpcnN0Q2hpbGQiLCJjb250ZW50RG9jdW1lbnQiLCJjaGlsZE5vZGVzIiwicmV2ZXJzZSIsIkgiLCJJIiwiSiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJtZW1vcnkiLCJzdG9wT25GYWxzZSIsInNoaWZ0IiwiZGlzYWJsZSIsInJlbW92ZSIsImVtcHR5IiwiZGlzYWJsZWQiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInBpcGUiLCJ3aGVuIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiSyIsInJlYWR5V2FpdCIsImhvbGRSZWFkeSIsInRyaWdnZXJIYW5kbGVyIiwib2ZmIiwiTCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNIiwiYWNjZXNzIiwiYWNjZXB0RGF0YSIsIk4iLCJkZWZpbmVQcm9wZXJ0eSIsImNhY2hlIiwidWlkIiwiYWNjZXB0cyIsImtleSIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsImhhc0RhdGEiLCJkaXNjYXJkIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJwYXJzZUpTT04iLCJkYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJhdHRyaWJ1dGVzIiwibmFtZSIsInF1ZXVlIiwiZGVxdWV1ZSIsIl9xdWV1ZUhvb2tzIiwidW5zaGlmdCIsInN0b3AiLCJjbGVhclF1ZXVlIiwiVCIsInNvdXJjZSIsIlUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2V0QXR0cmlidXRlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsImxhc3RDaGlsZCIsImNoZWNrZWQiLCJpbm5lckhUTUwiLCJub0Nsb25lQ2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsIlYiLCJmb2N1c2luQnViYmxlcyIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFiIiwiYWN0aXZlRWxlbWVudCIsImV2ZW50IiwiZ2xvYmFsIiwiaGFuZGxlciIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJqb2luIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwiUmVnRXhwIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsInRyaWdnZXIiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsInJlc3VsdCIsInRhcmdldCIsIm5vQnViYmxlIiwiZGVmYXVsdFZpZXciLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2RlZmF1bHQiLCJwb3AiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbSIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaGFuZGxlT2JqIiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwiYnV0dG9uIiwicHJvcHMiLCJmaXhIb29rcyIsImtleUhvb2tzIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJtb3VzZUhvb2tzIiwicGFnZVgiLCJjbGllbnRYIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibG9hZCIsImZvY3VzIiwiYmx1ciIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwib3JpZ2luYWxFdmVudCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInJlbGF0ZWRUYXJnZXQiLCJvbiIsIm9uZSIsImJiIiwiY2IiLCJkYiIsImViIiwiZmIiLCJnYiIsImhiIiwiaWIiLCJqYiIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwia2IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxiIiwibWIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuYiIsIm9iIiwicGIiLCJxYiIsImNsb25lIiwiYnVpbGRGcmFnbWVudCIsImNyZWF0ZVRleHROb2RlIiwiY2xlYW5EYXRhIiwiYXBwZW5kIiwiZG9tTWFuaXAiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJzcmMiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiZGVsYXkiLCJmeCIsInNwZWVkcyIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInNlbGVjdGVkIiwib3B0RGlzYWJsZWQiLCJyYWRpb1ZhbHVlIiwicmIiLCJzYiIsInRiIiwicmVtb3ZlQXR0ciIsInByb3AiLCJhdHRySG9va3MiLCJwcm9wRml4IiwidWIiLCJyZW1vdmVQcm9wIiwicHJvcEhvb2tzIiwidGFiSW5kZXgiLCJoYXNBdHRyaWJ1dGUiLCJocmVmIiwic2VsZWN0ZWRJbmRleCIsInZiIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJ3YiIsInZhbCIsInZhbEhvb2tzIiwic2VsZWN0Iiwib3B0aW9ucyIsImhvdmVyIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsInhiIiwieWIiLCJKU09OIiwicGFyc2UiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsImxvY2F0aW9uIiwiTGIiLCJNYiIsIk5iIiwiZGF0YVR5cGVzIiwiT2IiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsIlBiIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJRYiIsInJlc3BvbnNlRmllbGRzIiwiZGF0YUZpbHRlciIsImRhdGFUeXBlIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJ4bWwiLCJqc29uIiwiU3RyaW5nIiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4Iiwic3RhdHVzQ29kZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwic3RhdHVzIiwiYWJvcnQiLCJjb21wbGV0ZSIsInN1Y2Nlc3MiLCJtZXRob2QiLCJjcm9zc0RvbWFpbiIsInBhcmFtIiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwicmVqZWN0V2l0aCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJSYiIsIlNiIiwiVGIiLCJVYiIsIlZiIiwiV2IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiWGIiLCJZYiIsIlpiIiwiJGIiLCJBY3RpdmVYT2JqZWN0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsInJlc3BvbnNlVGV4dCIsInNjcmlwdCIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiX2IiLCJhYyIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImJjIiwiZGVmaW5lIiwiY2MiLCJqUXVlcnkiLCJkYyIsIm5vQ29uZmxpY3QiLCJDb29raWVzIiwiZGVmYXVsdF8iLCJvQ29va2llcyIsImxDb29raWVzIiwiY29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG9tYWluIiwicGF0aCIsImV4cGlyZXMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiX2NhbGxiYWNrcyIsImNhbGxiYWNrIiwiYXJncyIsImVyciIsImNvbnNvbGUiLCJUb29scyIsInJlcXVpcmUiLCJfaGFzaCIsIl9uYW1lUkUiLCJfd2F0Y2hlcyIsIl9jaGVja1dhdGNoZXMiLCJvbGQiLCJfaGFzaENoYW5nZWQiLCJfcGFyc2VIYXNoIiwiaGFzaCIsInJlZ2V4IiwiZmllbGQiLCJzdWJzdHJpbmciLCJIYXNoIiwiaXNPYmplY3QiLCJ0ZW1wIiwiX2NvdW50IiwiX2VsIiwiaGlkZSIsInN0eWxlIiwiZGlzcGxheSIsInNob3ciLCJfZG9tYWluIiwiX2Vycm9yIiwiX2NsZWFyIiwibG9jYWxTdG9yYWdlIiwiaG9zdG5hbWUiLCJfcmVxdWVzdCIsIm9Db25maWciLCJzZXR0aW5ncyIsIl91cmwiLCJzdHJpbmdpZnkiLCJfc3RvcmUiLCJ0b2tlbiIsIl9zdWNjZXNzIiwicmVzIiwiU2VydmljZXMiLCJzdWJkb21haW4iLCJzZXNzaW9uIiwic2VydmljZSIsIm5vdW4iLCJjb21wYXJlIiwidjEiLCJ2MiIsImtleXMiLCJpc0RlY2ltYWwiLCJpc0ludGVnZXIiLCJvbWFwIiwicmV0IiwidXVpZHY0IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsImNvbmYiLCJvU29jayIsIldlYlNvY2tldCIsIm9ub3BlbiIsImxvZyIsIm9ubWVzc2FnZSIsImV2Iiwib25jbG9zZSIsIkV2ZW50cyIsIkxvYWRlciIsIlJlcXVlc3RzIiwiU2l0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUmVhY3QiLCJyZWFkIiwiRVJST1JfQ0xBU1MiLCJfYWRkQ2xhc3MiLCJlbCIsIm5hbWVzIiwiX3JlbW92ZUNsYXNzIiwiaW5jbHVkZXMiLCJfQmFzZU5vZGUiLCJlcnJvcnMiLCJyZWZzIiwiUHVyZUNvbXBvbmVudCIsIkFycmF5Tm9kZSIsIk5vZGUiLCJtc2ciLCJ2YWx1ZVNldCIsIlBhcmVudCIsImVycm9yQWRkIiwiZXJyb3JSZW1vdmUiLCJlcnJvckZvY3VzIiwiZWxlbWVudHMiLCJGb3JtcyIsIklucHV0RW50ZXIiLCJvbkVudGVyIiwia2V5UHJlc3MiLCJvbktleVByZXNzIiwicmVzdCIsIk1lbnUiLCJvbkNoYW5nZSIsIml0ZW1DbGljayIsInNlbGYiLCJzZXRTdGF0ZSIsIkNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVuZGVyQ2hpbGRyZW4iLCJJdGVtIiwiX2luc3RhbmNlIiwiTWVzc2FnZSIsImJ1dHRvbnMiLCJkYXRhc2V0IiwiaWQiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIk1lc3NhZ2VzIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwibXNncyIsIk1vZGFsIiwiY2xvc2UiLCJidXR0b25DbGljayIsInRyYXBFc2NhcGUiLCJidG4iLCJzdHlsZXMiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwiU1VDQ0VTU19USU1FT1VUIiwiRVJST1JfVElNRU9VVCIsIldBUk5JTkdfVElNRU9VVCIsIlNURVBfVElNRU9VVCIsIldJRFRIX1NURVBTIiwiSEVJR0hUX1NURVBTIiwiTUFSR0lOIiwiUG9wdXBzIiwicG9wdXBzIiwidGltZXIiLCJwb3B1cCIsInByb2Nlc3MiLCJ3YXJuaW5nIiwic3RlcCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaWNvbiIsImlUaW1lb3V0Iiwic0ljb24iLCJ3YXJuIiwiVGhyb3dlciIsIlV0aWxzIiwiSGVhZGVyIiwiYWNjb3VudFNob3ciLCJob21lIiwic2lnbmluIiwic2lnbmluU2hvdyIsInNpZ25pblRyaWdnZXIiLCJzaWdub3V0Iiwic2lnbm91dFRyaWdnZXIiLCJzaWdudXAiLCJzaWdudXBTaG93IiwibW9kYWwiLCJ0aHJvd2VyIiwiYWxpYXMiLCJjcmVhdGUiLCJwYXNzd2QiLCJzZXJ2aWNlRXJyb3IiLCJjb2RlIiwic2lnbnVwX2FsaWFzIiwic2lnbnVwX3Bhc3N3ZCIsInJlcGVhdF9wYXNzd2QiLCJvRGF0YSIsImVtYWlsIiwiX2lkIiwiTmF0ZiIsIk1hdGNoIiwib3JnQ2hhbmdlIiwid2F0Y2giLCJ1bndhdGNoIiwib3JnIiwibWVudUNoYW5nZSIsIkJvYXJkIiwib25Qb2ludHMiLCJjbHV0Y2hNb2RlIiwiY2x1dGNoQ2xpY2siLCJkcm9wQ2xpY2siLCJwb2ludENsaWNrIiwicmVzZXRDbHV0Y2giLCJjbGFzc05hbWVzIiwiYWNjZXB0ZWQiLCJwYXJzZUludCIsIm1vZGUiLCJUd29XYXkiLCJPcHBvbmVudCIsIkZJTklTSEVEX0lOSVRJQVRPUiIsIkZJTklTSEVEX09QUE9ORU5UIiwiRklOSVNIRURfQk9USCIsImJpZ2F4ZUZpbmlzaCIsImV4aXN0aW5nQ29udGludWUiLCJleGlzdGluZ0RlbGV0ZSIsImdhbWVGaW5pc2giLCJpZENhbGxiYWNrIiwibWF0Y2hDYWxsYmFjayIsIm92ZXJ3cml0ZSIsInBvaW50cyIsInJlcXVlc3RDYWxsYmFjayIsInJlcXVlc3RDYW5jZWwiLCJyZXF1ZXN0Q3JlYXRlIiwibWF0Y2hTdGF0ZSIsIm1zIiwiYmlnYXhlX2Nhbl9maW5pc2giLCJ3YWl0aW5nIiwidXBkYXRlIiwidGhyb3dzIiwiYmlnYXhlIiwidmFscyIsImlDb24iLCJpbml0aWF0b3IiLCJmaW5pc2hlZCIsImNhbGN1bGF0ZUJpZ0F4ZUZpbmlzaGVkIiwiZ2FtZXNfZmluaXNoZWQiLCJnYW1lcyIsImdhbWUiLCJleGlzdGluZ0ZldGNoIiwidW50cmFjayIsImV4aXN0aW5nUmVtb3ZlIiwiZXhpc3RpbmciLCJ0cmFjayIsImNhbGN1bGF0ZU1hdGNoU3RhdGUiLCJib2FyZCIsInJlc2V0Iiwic3VidHlwZSIsImJhIiwiY2x1dGNoIiwic08iLCJyZW5kZXJQcmltYXJ5IiwicmVuZGVyU2Vjb25kYXJ5Iiwid2lubmVyIiwibG9zZXIiLCJyb3dzIiwiYWRkX3RvX3BvaW50cyIsImNvbHVtbnMiLCJyZW5kZXJHYW1lVGhyb3ciLCJvUG9pbnRzIiwiaUciLCJyZW5kZXJHYW1lIiwicmVuZGVyQmlnQXhlIiwicmVxdWVzdFJlc2V0Iiwib3Bwb25lbnQiLCJQcmFjdGljZSIsIm1vZGVTZWxlY3QiLCJwb2ludHNIaWRlIiwicG9pbnRzU2hvdyIsInNhdmUiLCJuZXdfc3RhdGUiLCJjbHV0Y2hBdHRlbXB0cyIsImNsdXRjaEhpdHMiLCJ0b3RhbFBvaW50cyIsInRvRml4ZWQiLCJzaG93UG9pbnRzIiwiY29uZmlybSIsIlN0YXRzIiwibWF0Y2hTdGF0cyIsInByYWN0aWNlRGF0YSIsInByYWN0aWNlRGF0YUhpZGUiLCJwcmFjdGljZVN0YXRzIiwicHJhY3RpY2VTdGF0c0FsbCIsImFsbCIsInByYWN0aWNlIiwidG90YWwiLCJhdHRlbXB0cyIsImRyb3BzIiwiYXZlcmFnZSIsInJhdGUiLCJkYXRlIiwiX2NyZWF0ZWQiLCJwcmFjdGljZV9hbGwiLCJwcmFjdGljZV9kYXRhIiwiYWxpYXNTb3J0IiwibG9jYWxlQ29tcGFyZSIsIk9wcG9uZW50Um93IiwiZmF2b3VyaXRlIiwicHJldlByb3BzIiwiY29sb3IiLCJmYXZvdXJpdGVTaG93Iiwic2VhcmNoIiwic2VhcmNoU2hvdyIsImZhdm91cml0ZXMiLCJvblNlbGVjdCIsImhhc2hDaGFuZ2UiLCJwYWdlQ2hhbmdlIiwicGFnZSIsIm1lbnUiLCJpdGVtcyIsIl9fdGhyb3dlciIsIl9fcGVuZGluZyIsIl9pbml0IiwiX3NpZ25pbiIsIl9zaWdub3V0IiwiX3BlbmRpbmciLCJfcGVuZGluZ1Byb2Nlc3MiLCJyZXF1ZXN0cyIsIl9yZXF1ZXN0RGVjbGluZSIsIl9yZXF1ZXN0QWNjZXB0IiwiX3JlcXVlc3REZWxldGUiLCJfcmVxdWVzdFdhaXQiLCJyZXEiLCJfcmVxdWVzdE5ldyIsIldTSGVscGVyIiwiX19waW5nIiwiX19jbG9zZSIsIl9fc29ja2V0IiwiX19zZXJ2aWNlcyIsIl9hZGRUcmFjayIsIl9oYW5kbGVDbG9zZSIsIl9vcGVuU29ja2V0IiwiX2hhbmRsZU1lc3NhZ2UiLCJzb2NrIiwiRmlsZVJlYWRlciIsIm9Nc2ciLCJyZWFkQXNUZXh0IiwibE1zZ3MiLCJzZXRJbnRlcnZhbCIsIl9waW5nIiwiX3RyYWNrIiwiX3VudHJhY2siLCJjbGVhckludGVydmFsIiwidHMiLCJnZXRGdWxsWWVhciIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImVycm9yVHJlZSIsIm9SZXQiLCJsRmllbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FB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Q0F3QzNCOzs7QUFDQSxXQUFPaTJCLElBQVA7QUFDQSxHQXREVTtBQXdEWHRLLGNBQVksRUFBRSxzQkFBUzFLLEdBQVQsRUFBYztBQUUzQjtBQUNBLFlBQU9BLEdBQUcsQ0FBQzJLLElBQVg7QUFFQztBQUNBLFdBQUssR0FBTDtBQUVDO0FBQ0E1RyxjQUFNLENBQUMvVSxPQUFQLENBQWUsU0FBZixFQUhELENBS0M7O0FBQ0EsZUFBTyxJQUFQO0FBRUQ7O0FBQ0EsV0FBSyxJQUFMO0FBRUM7QUFDQWdSLFdBQUcsQ0FBQ21GLEdBQUosR0FBVXVFLEtBQUssQ0FBQ3FMLFNBQU4sQ0FBZ0IvVSxHQUFHLENBQUNtRixHQUFwQixDQUFWLENBSEQsQ0FLQzs7QUFDQSxlQUFPLEtBQVA7QUFsQkYsS0FIMkIsQ0F3QjNCOzs7QUFDQSxXQUFPLEtBQVA7QUFDQSxHQWxGVSxDQXFGWjs7QUFyRlksQ0FBWjtBQXNGQXZuQixNQUFNLENBQUNDLE9BQVAsR0FBaUI2ckIsS0FBakIsQyIsImZpbGUiOiIuLi9ob3N0cy9zdGF0aWMvanMvc2l0ZS5kZXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3dlYnBhY2svaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCIvKiEgalF1ZXJ5IHYyLjEuMSAtY3NzLC1jc3MvYWRkR2V0SG9va0lmLC1jc3MvY3VyQ1NTLC1jc3MvZGVmYXVsdERpc3BsYXksLWNzcy9oaWRkZW5WaXNpYmxlU2VsZWN0b3JzLC1jc3Mvc3VwcG9ydCwtY3NzL3N3YXAsLWNzcy92YXIvY3NzRXhwYW5kLC1jc3MvdmFyL2dldFN0eWxlcywtY3NzL3Zhci9pc0hpZGRlbiwtY3NzL3Zhci9ybWFyZ2luLC1jc3MvdmFyL3JudW1ub25weCwtZWZmZWN0cywtZWZmZWN0cy9Ud2VlbiwtZWZmZWN0cy9hbmltYXRlZFNlbGVjdG9yLC1kaW1lbnNpb25zLC1vZmZzZXQsLWRlcHJlY2F0ZWQsLWV2ZW50LWFsaWFzLC13cmFwIHwgKGMpIDIwMDUsIDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gfCBqcXVlcnkub3JnL2xpY2Vuc2UgKi9cbiFmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1hLmRvY3VtZW50P2IoYSwhMCk6ZnVuY3Rpb24oYSl7aWYoIWEuZG9jdW1lbnQpdGhyb3cgbmV3IEVycm9yKFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiKTtyZXR1cm4gYihhKX06YihhKX0oXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6dGhpcyxmdW5jdGlvbihhLGIpe3ZhciBjPVtdLGQ9Yy5zbGljZSxlPWMuY29uY2F0LGY9Yy5wdXNoLGc9Yy5pbmRleE9mLGg9e30saT1oLnRvU3RyaW5nLGo9aC5oYXNPd25Qcm9wZXJ0eSxrPXt9LGw9YS5kb2N1bWVudCxtPVwiMi4xLjEgLWNzcywtY3NzL2FkZEdldEhvb2tJZiwtY3NzL2N1ckNTUywtY3NzL2RlZmF1bHREaXNwbGF5LC1jc3MvaGlkZGVuVmlzaWJsZVNlbGVjdG9ycywtY3NzL3N1cHBvcnQsLWNzcy9zd2FwLC1jc3MvdmFyL2Nzc0V4cGFuZCwtY3NzL3Zhci9nZXRTdHlsZXMsLWNzcy92YXIvaXNIaWRkZW4sLWNzcy92YXIvcm1hcmdpbiwtY3NzL3Zhci9ybnVtbm9ucHgsLWVmZmVjdHMsLWVmZmVjdHMvVHdlZW4sLWVmZmVjdHMvYW5pbWF0ZWRTZWxlY3RvciwtZGltZW5zaW9ucywtb2Zmc2V0LC1kZXByZWNhdGVkLC1ldmVudC1hbGlhcywtd3JhcFwiLG49ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IG4uZm4uaW5pdChhLGIpfSxvPS9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxwPS9eLW1zLS8scT0vLShbXFxkYS16XSkvZ2kscj1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9O24uZm49bi5wcm90b3R5cGU9e2pxdWVyeTptLGNvbnN0cnVjdG9yOm4sc2VsZWN0b3I6XCJcIixsZW5ndGg6MCx0b0FycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIGQuY2FsbCh0aGlzKX0sZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hPzA+YT90aGlzW2ErdGhpcy5sZW5ndGhdOnRoaXNbYV06ZC5jYWxsKHRoaXMpfSxwdXNoU3RhY2s6ZnVuY3Rpb24oYSl7dmFyIGI9bi5tZXJnZSh0aGlzLmNvbnN0cnVjdG9yKCksYSk7cmV0dXJuIGIucHJldk9iamVjdD10aGlzLGIuY29udGV4dD10aGlzLmNvbnRleHQsYn0sZWFjaDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmVhY2godGhpcyxhLGIpfSxtYXA6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKG4ubWFwKHRoaXMsZnVuY3Rpb24oYixjKXtyZXR1cm4gYS5jYWxsKGIsYyxiKX0pKX0sc2xpY2U6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZC5hcHBseSh0aGlzLGFyZ3VtZW50cykpfSxmaXJzdDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmVxKDApfSxsYXN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoLTEpfSxlcTpmdW5jdGlvbihhKXt2YXIgYj10aGlzLmxlbmd0aCxjPSthKygwPmE/YjowKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soYz49MCYmYj5jP1t0aGlzW2NdXTpbXSl9LGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnByZXZPYmplY3R8fHRoaXMuY29uc3RydWN0b3IobnVsbCl9LHB1c2g6Zixzb3J0OmMuc29ydCxzcGxpY2U6Yy5zcGxpY2V9LG4uZXh0ZW5kPW4uZm4uZXh0ZW5kPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQsZSxmLGc9YXJndW1lbnRzWzBdfHx7fSxoPTEsaT1hcmd1bWVudHMubGVuZ3RoLGo9ITE7Zm9yKFwiYm9vbGVhblwiPT10eXBlb2YgZyYmKGo9ZyxnPWFyZ3VtZW50c1toXXx8e30saCsrKSxcIm9iamVjdFwiPT10eXBlb2YgZ3x8bi5pc0Z1bmN0aW9uKGcpfHwoZz17fSksaD09PWkmJihnPXRoaXMsaC0tKTtpPmg7aCsrKWlmKG51bGwhPShhPWFyZ3VtZW50c1toXSkpZm9yKGIgaW4gYSljPWdbYl0sZD1hW2JdLGchPT1kJiYoaiYmZCYmKG4uaXNQbGFpbk9iamVjdChkKXx8KGU9bi5pc0FycmF5KGQpKSk/KGU/KGU9ITEsZj1jJiZuLmlzQXJyYXkoYyk/YzpbXSk6Zj1jJiZuLmlzUGxhaW5PYmplY3QoYyk/Yzp7fSxnW2JdPW4uZXh0ZW5kKGosZixkKSk6dm9pZCAwIT09ZCYmKGdbYl09ZCkpO3JldHVybiBnfSxuLmV4dGVuZCh7ZXhwYW5kbzpcImpRdWVyeVwiKyhtK01hdGgucmFuZG9tKCkpLnJlcGxhY2UoL1xcRC9nLFwiXCIpLGlzUmVhZHk6ITAsZXJyb3I6ZnVuY3Rpb24oYSl7dGhyb3cgbmV3IEVycm9yKGEpfSxub29wOmZ1bmN0aW9uKCl7fSxpc0Z1bmN0aW9uOmZ1bmN0aW9uKGEpe3JldHVyblwiZnVuY3Rpb25cIj09PW4udHlwZShhKX0saXNBcnJheTpBcnJheS5pc0FycmF5LGlzV2luZG93OmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hJiZhPT09YS53aW5kb3d9LGlzTnVtZXJpYzpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0FycmF5KGEpJiZhLXBhcnNlRmxvYXQoYSk+PTB9LGlzUGxhaW5PYmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuXCJvYmplY3RcIiE9PW4udHlwZShhKXx8YS5ub2RlVHlwZXx8bi5pc1dpbmRvdyhhKT8hMTphLmNvbnN0cnVjdG9yJiYhai5jYWxsKGEuY29uc3RydWN0b3IucHJvdG90eXBlLFwiaXNQcm90b3R5cGVPZlwiKT8hMTohMH0saXNFbXB0eU9iamVjdDpmdW5jdGlvbihhKXt2YXIgYjtmb3IoYiBpbiBhKXJldHVybiExO3JldHVybiEwfSx0eXBlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT1hP2ErXCJcIjpcIm9iamVjdFwiPT10eXBlb2YgYXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYT9oW2kuY2FsbChhKV18fFwib2JqZWN0XCI6dHlwZW9mIGF9LGdsb2JhbEV2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYz1ldmFsO2E9bi50cmltKGEpLGEmJigxPT09YS5pbmRleE9mKFwidXNlIHN0cmljdFwiKT8oYj1sLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiksYi50ZXh0PWEsbC5oZWFkLmFwcGVuZENoaWxkKGIpLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYikpOmMoYSkpfSxjYW1lbENhc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIGEucmVwbGFjZShwLFwibXMtXCIpLnJlcGxhY2UocSxyKX0sbm9kZU5hbWU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpPT09Yi50b0xvd2VyQ2FzZSgpfSxlYWNoOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPTAsZj1hLmxlbmd0aCxnPXMoYSk7aWYoYyl7aWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5hcHBseShhW2VdLGMpLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgaWYoZyl7Zm9yKDtmPmU7ZSsrKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWt9ZWxzZSBmb3IoZSBpbiBhKWlmKGQ9Yi5jYWxsKGFbZV0sZSxhW2VdKSxkPT09ITEpYnJlYWs7cmV0dXJuIGF9LHRyaW06ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjooYStcIlwiKS5yZXBsYWNlKG8sXCJcIil9LG1ha2VBcnJheTpmdW5jdGlvbihhLGIpe3ZhciBjPWJ8fFtdO3JldHVybiBudWxsIT1hJiYocyhPYmplY3QoYSkpP24ubWVyZ2UoYyxcInN0cmluZ1wiPT10eXBlb2YgYT9bYV06YSk6Zi5jYWxsKGMsYSkpLGN9LGluQXJyYXk6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBudWxsPT1iPy0xOmcuY2FsbChiLGEsYyl9LG1lcmdlOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPStiLmxlbmd0aCxkPTAsZT1hLmxlbmd0aDtjPmQ7ZCsrKWFbZSsrXT1iW2RdO3JldHVybiBhLmxlbmd0aD1lLGF9LGdyZXA6ZnVuY3Rpb24oYSxiLGMpe2Zvcih2YXIgZCxlPVtdLGY9MCxnPWEubGVuZ3RoLGg9IWM7Zz5mO2YrKylkPSFiKGFbZl0sZiksZCE9PWgmJmUucHVzaChhW2ZdKTtyZXR1cm4gZX0sbWFwOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxmPTAsZz1hLmxlbmd0aCxoPXMoYSksaT1bXTtpZihoKWZvcig7Zz5mO2YrKylkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtlbHNlIGZvcihmIGluIGEpZD1iKGFbZl0sZixjKSxudWxsIT1kJiZpLnB1c2goZCk7cmV0dXJuIGUuYXBwbHkoW10saSl9LGd1aWQ6MSxwcm94eTpmdW5jdGlvbihhLGIpe3ZhciBjLGUsZjtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYiYmKGM9YVtiXSxiPWEsYT1jKSxuLmlzRnVuY3Rpb24oYSk/KGU9ZC5jYWxsKGFyZ3VtZW50cywyKSxmPWZ1bmN0aW9uKCl7cmV0dXJuIGEuYXBwbHkoYnx8dGhpcyxlLmNvbmNhdChkLmNhbGwoYXJndW1lbnRzKSkpfSxmLmd1aWQ9YS5ndWlkPWEuZ3VpZHx8bi5ndWlkKyssZik6dm9pZCAwfSxub3c6RGF0ZS5ub3csc3VwcG9ydDprfSksbi5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe2hbXCJbb2JqZWN0IFwiK2IrXCJdXCJdPWIudG9Mb3dlckNhc2UoKX0pO2Z1bmN0aW9uIHMoYSl7dmFyIGI9YS5sZW5ndGgsYz1uLnR5cGUoYSk7cmV0dXJuXCJmdW5jdGlvblwiPT09Y3x8bi5pc1dpbmRvdyhhKT8hMToxPT09YS5ub2RlVHlwZSYmYj8hMDpcImFycmF5XCI9PT1jfHwwPT09Ynx8XCJudW1iZXJcIj09dHlwZW9mIGImJmI+MCYmYi0xIGluIGF9dmFyIHQ9YS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsdSx2PXQubWF0Y2hlc3x8dC53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fHQubW96TWF0Y2hlc1NlbGVjdG9yfHx0Lm9NYXRjaGVzU2VsZWN0b3J8fHQubXNNYXRjaGVzU2VsZWN0b3Isdz1mdW5jdGlvbihhLGIpe2lmKGE9PT1iKXJldHVybiB1PSEwLDA7dmFyIGM9Yi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiYmYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihiKTtyZXR1cm4gYz8xJmM/YT09PWx8fG4uY29udGFpbnMobCxhKT8tMTpiPT09bHx8bi5jb250YWlucyhsLGIpPzE6MDo0JmM/LTE6MTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPy0xOjF9O24uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZz0wO2lmKGM9Y3x8W10sYj1ifHxsLCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gYztpZigxIT09KGY9Yi5ub2RlVHlwZSkmJjkhPT1mKXJldHVybltdO2lmKGQpd2hpbGUoZT1kW2crK10pbi5maW5kLm1hdGNoZXNTZWxlY3RvcihlLGEpJiZjLnB1c2goZSk7ZWxzZSBuLm1lcmdlKGMsYi5xdWVyeVNlbGVjdG9yQWxsKGEpKTtyZXR1cm4gY30sdW5pcXVlOmZ1bmN0aW9uKGEpe3ZhciBiLGM9W10sZD0wLGU9MDtpZih1PSExLGEuc29ydCh3KSx1KXt3aGlsZShiPWFbZCsrXSliPT09YVtkXSYmKGU9Yy5wdXNoKGQpKTt3aGlsZShlLS0pYS5zcGxpY2UoY1tlXSwxKX1yZXR1cm4gYX0sdGV4dDpmdW5jdGlvbihhKXt2YXIgYixjPVwiXCIsZD0wLGU9YS5ub2RlVHlwZTtpZihlKXtpZigxPT09ZXx8OT09PWV8fDExPT09ZSlyZXR1cm4gYS50ZXh0Q29udGVudDtpZigzPT09ZXx8ND09PWUpcmV0dXJuIGEubm9kZVZhbHVlfWVsc2Ugd2hpbGUoYj1hW2QrK10pYys9bi50ZXh0KGIpO3JldHVybiBjfSxjb250YWluczpmdW5jdGlvbihhLGIpe3ZhciBjPTk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEsZD1iJiZiLnBhcmVudE5vZGU7cmV0dXJuIGE9PT1kfHwhKCFkfHwxIT09ZC5ub2RlVHlwZXx8IWMuY29udGFpbnMoZCkpfSxpc1hNTERvYzpmdW5jdGlvbihhKXtyZXR1cm5cIkhUTUxcIiE9PShhLm93bmVyRG9jdW1lbnR8fGEpLmRvY3VtZW50RWxlbWVudC5ub2RlTmFtZX0sZXhwcjp7YXR0ckhhbmRsZTp7fSxtYXRjaDp7Ym9vbDovXig/OmNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkKSQvaSxuZWVkc0NvbnRleHQ6L15bXFx4MjBcXHRcXHJcXG5cXGZdKls+K35dL319fSksbi5leHRlbmQobi5maW5kLHttYXRjaGVzOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZmluZChhLG51bGwsbnVsbCxiKX0sbWF0Y2hlc1NlbGVjdG9yOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHYuY2FsbChhLGIpfSxhdHRyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuZ2V0QXR0cmlidXRlKGIpfX0pO3ZhciB4PW4uZXhwci5tYXRjaC5uZWVkc0NvbnRleHQseT0vXjwoXFx3KylcXHMqXFwvPz4oPzo8XFwvXFwxPnwpJC8sej0vXi5bXjojXFxbXFwuLF0qJC87ZnVuY3Rpb24gQShhLGIsYyl7aWYobi5pc0Z1bmN0aW9uKGIpKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhLGQpe3JldHVybiEhYi5jYWxsKGEsZCxhKSE9PWN9KTtpZihiLm5vZGVUeXBlKXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gYT09PWIhPT1jfSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGIpe2lmKHoudGVzdChiKSlyZXR1cm4gbi5maWx0ZXIoYixhLGMpO2I9bi5maWx0ZXIoYixhKX1yZXR1cm4gbi5ncmVwKGEsZnVuY3Rpb24oYSl7cmV0dXJuIGcuY2FsbChiLGEpPj0wIT09Y30pfW4uZmlsdGVyPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iWzBdO3JldHVybiBjJiYoYT1cIjpub3QoXCIrYStcIilcIiksMT09PWIubGVuZ3RoJiYxPT09ZC5ub2RlVHlwZT9uLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGQsYSk/W2RdOltdOm4uZmluZC5tYXRjaGVzKGEsbi5ncmVwKGIsZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfSkpfSxuLmZuLmV4dGVuZCh7ZmluZDpmdW5jdGlvbihhKXt2YXIgYixjPXRoaXMubGVuZ3RoLGQ9W10sZT10aGlzO2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiB0aGlzLnB1c2hTdGFjayhuKGEpLmZpbHRlcihmdW5jdGlvbigpe2ZvcihiPTA7Yz5iO2IrKylpZihuLmNvbnRhaW5zKGVbYl0sdGhpcykpcmV0dXJuITB9KSk7Zm9yKGI9MDtjPmI7YisrKW4uZmluZChhLGVbYl0sZCk7cmV0dXJuIGQ9dGhpcy5wdXNoU3RhY2soYz4xP24udW5pcXVlKGQpOmQpLGQuc2VsZWN0b3I9dGhpcy5zZWxlY3Rvcj90aGlzLnNlbGVjdG9yK1wiIFwiK2E6YSxkfSxmaWx0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEEodGhpcyxhfHxbXSwhMSkpfSxub3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucHVzaFN0YWNrKEEodGhpcyxhfHxbXSwhMCkpfSxpczpmdW5jdGlvbihhKXtyZXR1cm4hIUEodGhpcyxcInN0cmluZ1wiPT10eXBlb2YgYSYmeC50ZXN0KGEpP24oYSk6YXx8W10sITEpLmxlbmd0aH19KTt2YXIgQixDPS9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLEQ9bi5mbi5pbml0PWZ1bmN0aW9uKGEsYil7dmFyIGMsZDtpZighYSlyZXR1cm4gdGhpcztpZihcInN0cmluZ1wiPT10eXBlb2YgYSl7aWYoYz1cIjxcIj09PWFbMF0mJlwiPlwiPT09YVthLmxlbmd0aC0xXSYmYS5sZW5ndGg+PTM/W251bGwsYSxudWxsXTpDLmV4ZWMoYSksIWN8fCFjWzFdJiZiKXJldHVybiFifHxiLmpxdWVyeT8oYnx8QikuZmluZChhKTp0aGlzLmNvbnN0cnVjdG9yKGIpLmZpbmQoYSk7aWYoY1sxXSl7aWYoYj1iIGluc3RhbmNlb2Ygbj9iWzBdOmIsbi5tZXJnZSh0aGlzLG4ucGFyc2VIVE1MKGNbMV0sYiYmYi5ub2RlVHlwZT9iLm93bmVyRG9jdW1lbnR8fGI6bCwhMCkpLHkudGVzdChjWzFdKSYmbi5pc1BsYWluT2JqZWN0KGIpKWZvcihjIGluIGIpbi5pc0Z1bmN0aW9uKHRoaXNbY10pP3RoaXNbY10oYltjXSk6dGhpcy5hdHRyKGMsYltjXSk7cmV0dXJuIHRoaXN9cmV0dXJuIGQ9bC5nZXRFbGVtZW50QnlJZChjWzJdKSxkJiZkLnBhcmVudE5vZGUmJih0aGlzLmxlbmd0aD0xLHRoaXNbMF09ZCksdGhpcy5jb250ZXh0PWwsdGhpcy5zZWxlY3Rvcj1hLHRoaXN9cmV0dXJuIGEubm9kZVR5cGU/KHRoaXMuY29udGV4dD10aGlzWzBdPWEsdGhpcy5sZW5ndGg9MSx0aGlzKTpuLmlzRnVuY3Rpb24oYSk/XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEIucmVhZHk/Qi5yZWFkeShhKTphKG4pOih2b2lkIDAhPT1hLnNlbGVjdG9yJiYodGhpcy5zZWxlY3Rvcj1hLnNlbGVjdG9yLHRoaXMuY29udGV4dD1hLmNvbnRleHQpLG4ubWFrZUFycmF5KGEsdGhpcykpfTtELnByb3RvdHlwZT1uLmZuLEI9bihsKTt2YXIgRT0vXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxGPXtjaGlsZHJlbjohMCxjb250ZW50czohMCxuZXh0OiEwLHByZXY6ITB9O24uZXh0ZW5kKHtkaXI6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPVtdLGU9dm9pZCAwIT09Yzt3aGlsZSgoYT1hW2JdKSYmOSE9PWEubm9kZVR5cGUpaWYoMT09PWEubm9kZVR5cGUpe2lmKGUmJm4oYSkuaXMoYykpYnJlYWs7ZC5wdXNoKGEpfXJldHVybiBkfSxzaWJsaW5nOmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPVtdO2E7YT1hLm5leHRTaWJsaW5nKTE9PT1hLm5vZGVUeXBlJiZhIT09YiYmYy5wdXNoKGEpO3JldHVybiBjfX0pLG4uZm4uZXh0ZW5kKHtoYXM6ZnVuY3Rpb24oYSl7dmFyIGI9bihhLHRoaXMpLGM9Yi5sZW5ndGg7cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7Yz5hO2ErKylpZihuLmNvbnRhaW5zKHRoaXMsYlthXSkpcmV0dXJuITB9KX0sY2xvc2VzdDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPTAsZT10aGlzLmxlbmd0aCxmPVtdLGc9eC50ZXN0KGEpfHxcInN0cmluZ1wiIT10eXBlb2YgYT9uKGEsYnx8dGhpcy5jb250ZXh0KTowO2U+ZDtkKyspZm9yKGM9dGhpc1tkXTtjJiZjIT09YjtjPWMucGFyZW50Tm9kZSlpZihjLm5vZGVUeXBlPDExJiYoZz9nLmluZGV4KGMpPi0xOjE9PT1jLm5vZGVUeXBlJiZuLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGMsYSkpKXtmLnB1c2goYyk7YnJlYWt9cmV0dXJuIHRoaXMucHVzaFN0YWNrKGYubGVuZ3RoPjE/bi51bmlxdWUoZik6Zil9LGluZGV4OmZ1bmN0aW9uKGEpe3JldHVybiBhP1wic3RyaW5nXCI9PXR5cGVvZiBhP2cuY2FsbChuKGEpLHRoaXNbMF0pOmcuY2FsbCh0aGlzLGEuanF1ZXJ5P2FbMF06YSk6dGhpc1swXSYmdGhpc1swXS5wYXJlbnROb2RlP3RoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoOi0xfSxhZGQ6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi51bmlxdWUobi5tZXJnZSh0aGlzLmdldCgpLG4oYSxiKSkpKX0sYWRkQmFjazpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5hZGQobnVsbD09YT90aGlzLnByZXZPYmplY3Q6dGhpcy5wcmV2T2JqZWN0LmZpbHRlcihhKSl9fSk7ZnVuY3Rpb24gRyhhLGIpe3doaWxlKChhPWFbYl0pJiYxIT09YS5ub2RlVHlwZSk7cmV0dXJuIGF9bi5lYWNoKHtwYXJlbnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiYxMSE9PWIubm9kZVR5cGU/YjpudWxsfSxwYXJlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiKX0scGFyZW50c1VudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInBhcmVudE5vZGVcIixjKX0sbmV4dDpmdW5jdGlvbihhKXtyZXR1cm4gRyhhLFwibmV4dFNpYmxpbmdcIil9LHByZXY6ZnVuY3Rpb24oYSl7cmV0dXJuIEcoYSxcInByZXZpb3VzU2libGluZ1wiKX0sbmV4dEFsbDpmdW5jdGlvbihhKXtyZXR1cm4gbi5kaXIoYSxcIm5leHRTaWJsaW5nXCIpfSxwcmV2QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIixjKX0scHJldlVudGlsOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbi5kaXIoYSxcInByZXZpb3VzU2libGluZ1wiLGMpfSxzaWJsaW5nczpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKChhLnBhcmVudE5vZGV8fHt9KS5maXJzdENoaWxkLGEpfSxjaGlsZHJlbjpmdW5jdGlvbihhKXtyZXR1cm4gbi5zaWJsaW5nKGEuZmlyc3RDaGlsZCl9LGNvbnRlbnRzOmZ1bmN0aW9uKGEpe3JldHVybiBhLmNvbnRlbnREb2N1bWVudHx8bi5tZXJnZShbXSxhLmNoaWxkTm9kZXMpfX0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGMsZCl7dmFyIGU9bi5tYXAodGhpcyxiLGMpO3JldHVyblwiVW50aWxcIiE9PWEuc2xpY2UoLTUpJiYoZD1jKSxkJiZcInN0cmluZ1wiPT10eXBlb2YgZCYmKGU9bi5maWx0ZXIoZCxlKSksdGhpcy5sZW5ndGg+MSYmKEZbYV18fG4udW5pcXVlKGUpLEUudGVzdChhKSYmZS5yZXZlcnNlKCkpLHRoaXMucHVzaFN0YWNrKGUpfX0pO3ZhciBIPS9cXFMrL2csST17fTtmdW5jdGlvbiBKKGEpe3ZhciBiPUlbYV09e307cmV0dXJuIG4uZWFjaChhLm1hdGNoKEgpfHxbXSxmdW5jdGlvbihhLGMpe2JbY109ITB9KSxifW4uQ2FsbGJhY2tzPWZ1bmN0aW9uKGEpe2E9XCJzdHJpbmdcIj09dHlwZW9mIGE/SVthXXx8SihhKTpuLmV4dGVuZCh7fSxhKTt2YXIgYixjLGQsZSxmLGcsaD1bXSxpPSFhLm9uY2UmJltdLGo9ZnVuY3Rpb24obCl7Zm9yKGI9YS5tZW1vcnkmJmwsYz0hMCxnPWV8fDAsZT0wLGY9aC5sZW5ndGgsZD0hMDtoJiZmPmc7ZysrKWlmKGhbZ10uYXBwbHkobFswXSxsWzFdKT09PSExJiZhLnN0b3BPbkZhbHNlKXtiPSExO2JyZWFrfWQ9ITEsaCYmKGk/aS5sZW5ndGgmJmooaS5zaGlmdCgpKTpiP2g9W106ay5kaXNhYmxlKCkpfSxrPXthZGQ6ZnVuY3Rpb24oKXtpZihoKXt2YXIgYz1oLmxlbmd0aDshZnVuY3Rpb24gZyhiKXtuLmVhY2goYixmdW5jdGlvbihiLGMpe3ZhciBkPW4udHlwZShjKTtcImZ1bmN0aW9uXCI9PT1kP2EudW5pcXVlJiZrLmhhcyhjKXx8aC5wdXNoKGMpOmMmJmMubGVuZ3RoJiZcInN0cmluZ1wiIT09ZCYmZyhjKX0pfShhcmd1bWVudHMpLGQ/Zj1oLmxlbmd0aDpiJiYoZT1jLGooYikpfXJldHVybiB0aGlzfSxyZW1vdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaCYmbi5lYWNoKGFyZ3VtZW50cyxmdW5jdGlvbihhLGIpe3ZhciBjO3doaWxlKChjPW4uaW5BcnJheShiLGgsYykpPi0xKWguc3BsaWNlKGMsMSksZCYmKGY+PWMmJmYtLSxnPj1jJiZnLS0pfSksdGhpc30saGFzOmZ1bmN0aW9uKGEpe3JldHVybiBhP24uaW5BcnJheShhLGgpPi0xOiEoIWh8fCFoLmxlbmd0aCl9LGVtcHR5OmZ1bmN0aW9uKCl7cmV0dXJuIGg9W10sZj0wLHRoaXN9LGRpc2FibGU6ZnVuY3Rpb24oKXtyZXR1cm4gaD1pPWI9dm9pZCAwLHRoaXN9LGRpc2FibGVkOmZ1bmN0aW9uKCl7cmV0dXJuIWh9LGxvY2s6ZnVuY3Rpb24oKXtyZXR1cm4gaT12b2lkIDAsYnx8ay5kaXNhYmxlKCksdGhpc30sbG9ja2VkOmZ1bmN0aW9uKCl7cmV0dXJuIWl9LGZpcmVXaXRoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIWh8fGMmJiFpfHwoYj1ifHxbXSxiPVthLGIuc2xpY2U/Yi5zbGljZSgpOmJdLGQ/aS5wdXNoKGIpOmooYikpLHRoaXN9LGZpcmU6ZnVuY3Rpb24oKXtyZXR1cm4gay5maXJlV2l0aCh0aGlzLGFyZ3VtZW50cyksdGhpc30sZmlyZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hIWN9fTtyZXR1cm4ga30sbi5leHRlbmQoe0RlZmVycmVkOmZ1bmN0aW9uKGEpe3ZhciBiPVtbXCJyZXNvbHZlXCIsXCJkb25lXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlc29sdmVkXCJdLFtcInJlamVjdFwiLFwiZmFpbFwiLG4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksXCJyZWplY3RlZFwiXSxbXCJub3RpZnlcIixcInByb2dyZXNzXCIsbi5DYWxsYmFja3MoXCJtZW1vcnlcIildXSxjPVwicGVuZGluZ1wiLGQ9e3N0YXRlOmZ1bmN0aW9uKCl7cmV0dXJuIGN9LGFsd2F5czpmdW5jdGlvbigpe3JldHVybiBlLmRvbmUoYXJndW1lbnRzKS5mYWlsKGFyZ3VtZW50cyksdGhpc30sdGhlbjpmdW5jdGlvbigpe3ZhciBhPWFyZ3VtZW50cztyZXR1cm4gbi5EZWZlcnJlZChmdW5jdGlvbihjKXtuLmVhY2goYixmdW5jdGlvbihiLGYpe3ZhciBnPW4uaXNGdW5jdGlvbihhW2JdKSYmYVtiXTtlW2ZbMV1dKGZ1bmN0aW9uKCl7dmFyIGE9ZyYmZy5hcHBseSh0aGlzLGFyZ3VtZW50cyk7YSYmbi5pc0Z1bmN0aW9uKGEucHJvbWlzZSk/YS5wcm9taXNlKCkuZG9uZShjLnJlc29sdmUpLmZhaWwoYy5yZWplY3QpLnByb2dyZXNzKGMubm90aWZ5KTpjW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1kP2MucHJvbWlzZSgpOnRoaXMsZz9bYV06YXJndW1lbnRzKX0pfSksYT1udWxsfSkucHJvbWlzZSgpfSxwcm9taXNlOmZ1bmN0aW9uKGEpe3JldHVybiBudWxsIT1hP24uZXh0ZW5kKGEsZCk6ZH19LGU9e307cmV0dXJuIGQucGlwZT1kLnRoZW4sbi5lYWNoKGIsZnVuY3Rpb24oYSxmKXt2YXIgZz1mWzJdLGg9ZlszXTtkW2ZbMV1dPWcuYWRkLGgmJmcuYWRkKGZ1bmN0aW9uKCl7Yz1ofSxiWzFeYV1bMl0uZGlzYWJsZSxiWzJdWzJdLmxvY2spLGVbZlswXV09ZnVuY3Rpb24oKXtyZXR1cm4gZVtmWzBdK1wiV2l0aFwiXSh0aGlzPT09ZT9kOnRoaXMsYXJndW1lbnRzKSx0aGlzfSxlW2ZbMF0rXCJXaXRoXCJdPWcuZmlyZVdpdGh9KSxkLnByb21pc2UoZSksYSYmYS5jYWxsKGUsZSksZX0sd2hlbjpmdW5jdGlvbihhKXt2YXIgYj0wLGM9ZC5jYWxsKGFyZ3VtZW50cyksZT1jLmxlbmd0aCxmPTEhPT1lfHxhJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9lOjAsZz0xPT09Zj9hOm4uRGVmZXJyZWQoKSxoPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gZnVuY3Rpb24oZSl7YlthXT10aGlzLGNbYV09YXJndW1lbnRzLmxlbmd0aD4xP2QuY2FsbChhcmd1bWVudHMpOmUsYz09PWk/Zy5ub3RpZnlXaXRoKGIsYyk6LS1mfHxnLnJlc29sdmVXaXRoKGIsYyl9fSxpLGosaztpZihlPjEpZm9yKGk9bmV3IEFycmF5KGUpLGo9bmV3IEFycmF5KGUpLGs9bmV3IEFycmF5KGUpO2U+YjtiKyspY1tiXSYmbi5pc0Z1bmN0aW9uKGNbYl0ucHJvbWlzZSk/Y1tiXS5wcm9taXNlKCkuZG9uZShoKGIsayxjKSkuZmFpbChnLnJlamVjdCkucHJvZ3Jlc3MoaChiLGosaSkpOi0tZjtyZXR1cm4gZnx8Zy5yZXNvbHZlV2l0aChrLGMpLGcucHJvbWlzZSgpfX0pO3ZhciBLO24uZm4ucmVhZHk9ZnVuY3Rpb24oYSl7cmV0dXJuIG4ucmVhZHkucHJvbWlzZSgpLmRvbmUoYSksdGhpc30sbi5leHRlbmQoe2lzUmVhZHk6ITEscmVhZHlXYWl0OjEsaG9sZFJlYWR5OmZ1bmN0aW9uKGEpe2E/bi5yZWFkeVdhaXQrKzpuLnJlYWR5KCEwKX0scmVhZHk6ZnVuY3Rpb24oYSl7KGE9PT0hMD8tLW4ucmVhZHlXYWl0Om4uaXNSZWFkeSl8fChuLmlzUmVhZHk9ITAsYSE9PSEwJiYtLW4ucmVhZHlXYWl0PjB8fChLLnJlc29sdmVXaXRoKGwsW25dKSxuLmZuLnRyaWdnZXJIYW5kbGVyJiYobihsKS50cmlnZ2VySGFuZGxlcihcInJlYWR5XCIpLG4obCkub2ZmKFwicmVhZHlcIikpKSl9fSk7ZnVuY3Rpb24gTCgpe2wucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixMLCExKSxhLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsTCwhMSksbi5yZWFkeSgpfW4ucmVhZHkucHJvbWlzZT1mdW5jdGlvbihiKXtyZXR1cm4gS3x8KEs9bi5EZWZlcnJlZCgpLFwiY29tcGxldGVcIj09PWwucmVhZHlTdGF0ZT9zZXRUaW1lb3V0KG4ucmVhZHkpOihsLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsTCwhMSksYS5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLEwsITEpKSksSy5wcm9taXNlKGIpfSxuLnJlYWR5LnByb21pc2UoKTt2YXIgTT1uLmFjY2Vzcz1mdW5jdGlvbihhLGIsYyxkLGUsZixnKXt2YXIgaD0wLGk9YS5sZW5ndGgsaj1udWxsPT1jO2lmKFwib2JqZWN0XCI9PT1uLnR5cGUoYykpe2U9ITA7Zm9yKGggaW4gYyluLmFjY2VzcyhhLGIsaCxjW2hdLCEwLGYsZyl9ZWxzZSBpZih2b2lkIDAhPT1kJiYoZT0hMCxuLmlzRnVuY3Rpb24oZCl8fChnPSEwKSxqJiYoZz8oYi5jYWxsKGEsZCksYj1udWxsKTooaj1iLGI9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBqLmNhbGwobihhKSxjKX0pKSxiKSlmb3IoO2k+aDtoKyspYihhW2hdLGMsZz9kOmQuY2FsbChhW2hdLGgsYihhW2hdLGMpKSk7cmV0dXJuIGU/YTpqP2IuY2FsbChhKTppP2IoYVswXSxjKTpmfTtuLmFjY2VwdERhdGE9ZnVuY3Rpb24oYSl7cmV0dXJuIDE9PT1hLm5vZGVUeXBlfHw5PT09YS5ub2RlVHlwZXx8ISthLm5vZGVUeXBlfTtmdW5jdGlvbiBOKCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRoaXMuY2FjaGU9e30sMCx7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJue319fSksdGhpcy5leHBhbmRvPW4uZXhwYW5kbytNYXRoLnJhbmRvbSgpfU4udWlkPTEsTi5hY2NlcHRzPW4uYWNjZXB0RGF0YSxOLnByb3RvdHlwZT17a2V5OmZ1bmN0aW9uKGEpe2lmKCFOLmFjY2VwdHMoYSkpcmV0dXJuIDA7dmFyIGI9e30sYz1hW3RoaXMuZXhwYW5kb107aWYoIWMpe2M9Ti51aWQrKzt0cnl7Ylt0aGlzLmV4cGFuZG9dPXt2YWx1ZTpjfSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhhLGIpfWNhdGNoKGQpe2JbdGhpcy5leHBhbmRvXT1jLG4uZXh0ZW5kKGEsYil9fXJldHVybiB0aGlzLmNhY2hlW2NdfHwodGhpcy5jYWNoZVtjXT17fSksY30sc2V0OmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPXRoaXMua2V5KGEpLGY9dGhpcy5jYWNoZVtlXTtpZihcInN0cmluZ1wiPT10eXBlb2YgYilmW2JdPWM7ZWxzZSBpZihuLmlzRW1wdHlPYmplY3QoZikpbi5leHRlbmQodGhpcy5jYWNoZVtlXSxiKTtlbHNlIGZvcihkIGluIGIpZltkXT1iW2RdO3JldHVybiBmfSxnZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzLmNhY2hlW3RoaXMua2V5KGEpXTtyZXR1cm4gdm9pZCAwPT09Yj9jOmNbYl19LGFjY2VzczpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIHZvaWQgMD09PWJ8fGImJlwic3RyaW5nXCI9PXR5cGVvZiBiJiZ2b2lkIDA9PT1jPyhkPXRoaXMuZ2V0KGEsYiksdm9pZCAwIT09ZD9kOnRoaXMuZ2V0KGEsbi5jYW1lbENhc2UoYikpKToodGhpcy5zZXQoYSxiLGMpLHZvaWQgMCE9PWM/YzpiKX0scmVtb3ZlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpcy5rZXkoYSksZz10aGlzLmNhY2hlW2ZdO2lmKHZvaWQgMD09PWIpdGhpcy5jYWNoZVtmXT17fTtlbHNle24uaXNBcnJheShiKT9kPWIuY29uY2F0KGIubWFwKG4uY2FtZWxDYXNlKSk6KGU9bi5jYW1lbENhc2UoYiksYiBpbiBnP2Q9W2IsZV06KGQ9ZSxkPWQgaW4gZz9bZF06ZC5tYXRjaChIKXx8W10pKSxjPWQubGVuZ3RoO3doaWxlKGMtLSlkZWxldGUgZ1tkW2NdXX19LGhhc0RhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIW4uaXNFbXB0eU9iamVjdCh0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV18fHt9KX0sZGlzY2FyZDpmdW5jdGlvbihhKXthW3RoaXMuZXhwYW5kb10mJmRlbGV0ZSB0aGlzLmNhY2hlW2FbdGhpcy5leHBhbmRvXV19fTt2YXIgTz1uZXcgTixQPW5ldyBOLFE9L14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFI9LyhbQS1aXSkvZztmdW5jdGlvbiBTKGEsYixjKXt2YXIgZDtpZih2b2lkIDA9PT1jJiYxPT09YS5ub2RlVHlwZSlpZihkPVwiZGF0YS1cIitiLnJlcGxhY2UoUixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpLGM9YS5nZXRBdHRyaWJ1dGUoZCksXCJzdHJpbmdcIj09dHlwZW9mIGMpe3RyeXtjPVwidHJ1ZVwiPT09Yz8hMDpcImZhbHNlXCI9PT1jPyExOlwibnVsbFwiPT09Yz9udWxsOitjK1wiXCI9PT1jPytjOlEudGVzdChjKT9uLnBhcnNlSlNPTihjKTpjfWNhdGNoKGUpe31QLnNldChhLGIsYyl9ZWxzZSBjPXZvaWQgMDtyZXR1cm4gY31uLmV4dGVuZCh7aGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gUC5oYXNEYXRhKGEpfHxPLmhhc0RhdGEoYSl9LGRhdGE6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBQLmFjY2VzcyhhLGIsYyl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtQLnJlbW92ZShhLGIpfSxfZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIE8uYWNjZXNzKGEsYixjKX0sX3JlbW92ZURhdGE6ZnVuY3Rpb24oYSxiKXtPLnJlbW92ZShhLGIpfX0pLG4uZm4uZXh0ZW5kKHtkYXRhOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9dGhpc1swXSxnPWYmJmYuYXR0cmlidXRlcztpZih2b2lkIDA9PT1hKXtpZih0aGlzLmxlbmd0aCYmKGU9UC5nZXQoZiksMT09PWYubm9kZVR5cGUmJiFPLmdldChmLFwiaGFzRGF0YUF0dHJzXCIpKSl7Yz1nLmxlbmd0aDt3aGlsZShjLS0pZ1tjXSYmKGQ9Z1tjXS5uYW1lLDA9PT1kLmluZGV4T2YoXCJkYXRhLVwiKSYmKGQ9bi5jYW1lbENhc2UoZC5zbGljZSg1KSksUyhmLGQsZVtkXSkpKTtPLnNldChmLFwiaGFzRGF0YUF0dHJzXCIsITApfXJldHVybiBlfXJldHVyblwib2JqZWN0XCI9PXR5cGVvZiBhP3RoaXMuZWFjaChmdW5jdGlvbigpe1Auc2V0KHRoaXMsYSl9KTpNKHRoaXMsZnVuY3Rpb24oYil7dmFyIGMsZD1uLmNhbWVsQ2FzZShhKTtpZihmJiZ2b2lkIDA9PT1iKXtpZihjPVAuZ2V0KGYsYSksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVAuZ2V0KGYsZCksdm9pZCAwIT09YylyZXR1cm4gYztpZihjPVMoZixkLHZvaWQgMCksdm9pZCAwIT09YylyZXR1cm4gY31lbHNlIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciBjPVAuZ2V0KHRoaXMsZCk7UC5zZXQodGhpcyxkLGIpLC0xIT09YS5pbmRleE9mKFwiLVwiKSYmdm9pZCAwIT09YyYmUC5zZXQodGhpcyxhLGIpfSl9LG51bGwsYixhcmd1bWVudHMubGVuZ3RoPjEsbnVsbCwhMCl9LHJlbW92ZURhdGE6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe1AucmVtb3ZlKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkO3JldHVybiBhPyhiPShifHxcImZ4XCIpK1wicXVldWVcIixkPU8uZ2V0KGEsYiksYyYmKCFkfHxuLmlzQXJyYXkoYyk/ZD1PLmFjY2VzcyhhLGIsbi5tYWtlQXJyYXkoYykpOmQucHVzaChjKSksZHx8W10pOnZvaWQgMH0sZGVxdWV1ZTpmdW5jdGlvbihhLGIpe2I9Ynx8XCJmeFwiO3ZhciBjPW4ucXVldWUoYSxiKSxkPWMubGVuZ3RoLGU9Yy5zaGlmdCgpLGY9bi5fcXVldWVIb29rcyhhLGIpLGc9ZnVuY3Rpb24oKXtuLmRlcXVldWUoYSxiKX07XCJpbnByb2dyZXNzXCI9PT1lJiYoZT1jLnNoaWZ0KCksZC0tKSxlJiYoXCJmeFwiPT09YiYmYy51bnNoaWZ0KFwiaW5wcm9ncmVzc1wiKSxkZWxldGUgZi5zdG9wLGUuY2FsbChhLGcsZikpLCFkJiZmJiZmLmVtcHR5LmZpcmUoKX0sX3F1ZXVlSG9va3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz1iK1wicXVldWVIb29rc1wiO3JldHVybiBPLmdldChhLGMpfHxPLmFjY2VzcyhhLGMse2VtcHR5Om4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCl7Ty5yZW1vdmUoYSxbYitcInF1ZXVlXCIsY10pfSl9KX19KSxuLmZuLmV4dGVuZCh7cXVldWU6ZnVuY3Rpb24oYSxiKXt2YXIgYz0yO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9XCJmeFwiLGMtLSksYXJndW1lbnRzLmxlbmd0aDxjP24ucXVldWUodGhpc1swXSxhKTp2b2lkIDA9PT1iP3RoaXM6dGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9bi5xdWV1ZSh0aGlzLGEsYik7bi5fcXVldWVIb29rcyh0aGlzLGEpLFwiZnhcIj09PWEmJlwiaW5wcm9ncmVzc1wiIT09Y1swXSYmbi5kZXF1ZXVlKHRoaXMsYSl9KX0sZGVxdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5kZXF1ZXVlKHRoaXMsYSl9KX0sY2xlYXJRdWV1ZTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5xdWV1ZShhfHxcImZ4XCIsW10pfSxwcm9taXNlOmZ1bmN0aW9uKGEsYil7dmFyIGMsZD0xLGU9bi5EZWZlcnJlZCgpLGY9dGhpcyxnPXRoaXMubGVuZ3RoLGg9ZnVuY3Rpb24oKXstLWR8fGUucmVzb2x2ZVdpdGgoZixbZl0pfTtcInN0cmluZ1wiIT10eXBlb2YgYSYmKGI9YSxhPXZvaWQgMCksYT1hfHxcImZ4XCI7d2hpbGUoZy0tKWM9Ty5nZXQoZltnXSxhK1wicXVldWVIb29rc1wiKSxjJiZjLmVtcHR5JiYoZCsrLGMuZW1wdHkuYWRkKGgpKTtyZXR1cm4gaCgpLGUucHJvbWlzZShiKX19KTt2YXIgVD0vWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLy5zb3VyY2UsVT0vXig/OmNoZWNrYm94fHJhZGlvKSQvaTshZnVuY3Rpb24oKXt2YXIgYT1sLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxiPWEuYXBwZW5kQ2hpbGQobC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxjPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO2Muc2V0QXR0cmlidXRlKFwidHlwZVwiLFwicmFkaW9cIiksYy5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsXCJjaGVja2VkXCIpLGMuc2V0QXR0cmlidXRlKFwibmFtZVwiLFwidFwiKSxiLmFwcGVuZENoaWxkKGMpLGsuY2hlY2tDbG9uZT1iLmNsb25lTm9kZSghMCkuY2xvbmVOb2RlKCEwKS5sYXN0Q2hpbGQuY2hlY2tlZCxiLmlubmVySFRNTD1cIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIixrLm5vQ2xvbmVDaGVja2VkPSEhYi5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWV9KCk7dmFyIFY9XCJ1bmRlZmluZWRcIjtrLmZvY3VzaW5CdWJibGVzPVwib25mb2N1c2luXCJpbiBhO3ZhciBXPS9ea2V5LyxYPS9eKD86bW91c2V8cG9pbnRlcnxjb250ZXh0bWVudSl8Y2xpY2svLFk9L14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFo9L14oW14uXSopKD86XFwuKC4rKXwpJC87ZnVuY3Rpb24gJCgpe3JldHVybiEwfWZ1bmN0aW9uIF8oKXtyZXR1cm4hMX1mdW5jdGlvbiBhYigpe3RyeXtyZXR1cm4gbC5hY3RpdmVFbGVtZW50fWNhdGNoKGEpe319bi5ldmVudD17Z2xvYmFsOnt9LGFkZDpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1PLmdldChhKTtpZihyKXtjLmhhbmRsZXImJihmPWMsYz1mLmhhbmRsZXIsZT1mLnNlbGVjdG9yKSxjLmd1aWR8fChjLmd1aWQ9bi5ndWlkKyspLChpPXIuZXZlbnRzKXx8KGk9ci5ldmVudHM9e30pLChnPXIuaGFuZGxlKXx8KGc9ci5oYW5kbGU9ZnVuY3Rpb24oYil7cmV0dXJuIHR5cGVvZiBuIT09ViYmbi5ldmVudC50cmlnZ2VyZWQhPT1iLnR5cGU/bi5ldmVudC5kaXNwYXRjaC5hcHBseShhLGFyZ3VtZW50cyk6dm9pZCAwfSksYj0oYnx8XCJcIikubWF0Y2goSCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSloPVouZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvJiYobD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LG89KGU/bC5kZWxlZ2F0ZVR5cGU6bC5iaW5kVHlwZSl8fG8sbD1uLmV2ZW50LnNwZWNpYWxbb118fHt9LGs9bi5leHRlbmQoe3R5cGU6byxvcmlnVHlwZTpxLGRhdGE6ZCxoYW5kbGVyOmMsZ3VpZDpjLmd1aWQsc2VsZWN0b3I6ZSxuZWVkc0NvbnRleHQ6ZSYmbi5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KGUpLG5hbWVzcGFjZTpwLmpvaW4oXCIuXCIpfSxmKSwobT1pW29dKXx8KG09aVtvXT1bXSxtLmRlbGVnYXRlQ291bnQ9MCxsLnNldHVwJiZsLnNldHVwLmNhbGwoYSxkLHAsZykhPT0hMXx8YS5hZGRFdmVudExpc3RlbmVyJiZhLmFkZEV2ZW50TGlzdGVuZXIobyxnLCExKSksbC5hZGQmJihsLmFkZC5jYWxsKGEsayksay5oYW5kbGVyLmd1aWR8fChrLmhhbmRsZXIuZ3VpZD1jLmd1aWQpKSxlP20uc3BsaWNlKG0uZGVsZWdhdGVDb3VudCsrLDAsayk6bS5wdXNoKGspLG4uZXZlbnQuZ2xvYmFsW29dPSEwKX19LHJlbW92ZTpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpLGosayxsLG0sbyxwLHEscj1PLmhhc0RhdGEoYSkmJk8uZ2V0KGEpO2lmKHImJihpPXIuZXZlbnRzKSl7Yj0oYnx8XCJcIikubWF0Y2goSCl8fFtcIlwiXSxqPWIubGVuZ3RoO3doaWxlKGotLSlpZihoPVouZXhlYyhiW2pdKXx8W10sbz1xPWhbMV0scD0oaFsyXXx8XCJcIikuc3BsaXQoXCIuXCIpLnNvcnQoKSxvKXtsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZD9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxtPWlbb118fFtdLGg9aFsyXSYmbmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Auam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpLGc9Zj1tLmxlbmd0aDt3aGlsZShmLS0paz1tW2ZdLCFlJiZxIT09ay5vcmlnVHlwZXx8YyYmYy5ndWlkIT09ay5ndWlkfHxoJiYhaC50ZXN0KGsubmFtZXNwYWNlKXx8ZCYmZCE9PWsuc2VsZWN0b3ImJihcIioqXCIhPT1kfHwhay5zZWxlY3Rvcil8fChtLnNwbGljZShmLDEpLGsuc2VsZWN0b3ImJm0uZGVsZWdhdGVDb3VudC0tLGwucmVtb3ZlJiZsLnJlbW92ZS5jYWxsKGEsaykpO2cmJiFtLmxlbmd0aCYmKGwudGVhcmRvd24mJmwudGVhcmRvd24uY2FsbChhLHAsci5oYW5kbGUpIT09ITF8fG4ucmVtb3ZlRXZlbnQoYSxvLHIuaGFuZGxlKSxkZWxldGUgaVtvXSl9ZWxzZSBmb3IobyBpbiBpKW4uZXZlbnQucmVtb3ZlKGEsbytiW2pdLGMsZCwhMCk7bi5pc0VtcHR5T2JqZWN0KGkpJiYoZGVsZXRlIHIuaGFuZGxlLE8ucmVtb3ZlKGEsXCJldmVudHNcIikpfX0sdHJpZ2dlcjpmdW5jdGlvbihiLGMsZCxlKXt2YXIgZixnLGgsaSxrLG0sbyxwPVtkfHxsXSxxPWouY2FsbChiLFwidHlwZVwiKT9iLnR5cGU6YixyPWouY2FsbChiLFwibmFtZXNwYWNlXCIpP2IubmFtZXNwYWNlLnNwbGl0KFwiLlwiKTpbXTtpZihnPWg9ZD1kfHxsLDMhPT1kLm5vZGVUeXBlJiY4IT09ZC5ub2RlVHlwZSYmIVkudGVzdChxK24uZXZlbnQudHJpZ2dlcmVkKSYmKHEuaW5kZXhPZihcIi5cIik+PTAmJihyPXEuc3BsaXQoXCIuXCIpLHE9ci5zaGlmdCgpLHIuc29ydCgpKSxrPXEuaW5kZXhPZihcIjpcIik8MCYmXCJvblwiK3EsYj1iW24uZXhwYW5kb10/YjpuZXcgbi5FdmVudChxLFwib2JqZWN0XCI9PXR5cGVvZiBiJiZiKSxiLmlzVHJpZ2dlcj1lPzI6MyxiLm5hbWVzcGFjZT1yLmpvaW4oXCIuXCIpLGIubmFtZXNwYWNlX3JlPWIubmFtZXNwYWNlP25ldyBSZWdFeHAoXCIoXnxcXFxcLilcIityLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKStcIihcXFxcLnwkKVwiKTpudWxsLGIucmVzdWx0PXZvaWQgMCxiLnRhcmdldHx8KGIudGFyZ2V0PWQpLGM9bnVsbD09Yz9bYl06bi5tYWtlQXJyYXkoYyxbYl0pLG89bi5ldmVudC5zcGVjaWFsW3FdfHx7fSxlfHwhby50cmlnZ2VyfHxvLnRyaWdnZXIuYXBwbHkoZCxjKSE9PSExKSl7aWYoIWUmJiFvLm5vQnViYmxlJiYhbi5pc1dpbmRvdyhkKSl7Zm9yKGk9by5kZWxlZ2F0ZVR5cGV8fHEsWS50ZXN0KGkrcSl8fChnPWcucGFyZW50Tm9kZSk7ZztnPWcucGFyZW50Tm9kZSlwLnB1c2goZyksaD1nO2g9PT0oZC5vd25lckRvY3VtZW50fHxsKSYmcC5wdXNoKGguZGVmYXVsdFZpZXd8fGgucGFyZW50V2luZG93fHxhKX1mPTA7d2hpbGUoKGc9cFtmKytdKSYmIWIuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSliLnR5cGU9Zj4xP2k6by5iaW5kVHlwZXx8cSxtPShPLmdldChnLFwiZXZlbnRzXCIpfHx7fSlbYi50eXBlXSYmTy5nZXQoZyxcImhhbmRsZVwiKSxtJiZtLmFwcGx5KGcsYyksbT1rJiZnW2tdLG0mJm0uYXBwbHkmJm4uYWNjZXB0RGF0YShnKSYmKGIucmVzdWx0PW0uYXBwbHkoZyxjKSxiLnJlc3VsdD09PSExJiZiLnByZXZlbnREZWZhdWx0KCkpO3JldHVybiBiLnR5cGU9cSxlfHxiLmlzRGVmYXVsdFByZXZlbnRlZCgpfHxvLl9kZWZhdWx0JiZvLl9kZWZhdWx0LmFwcGx5KHAucG9wKCksYykhPT0hMXx8IW4uYWNjZXB0RGF0YShkKXx8ayYmbi5pc0Z1bmN0aW9uKGRbcV0pJiYhbi5pc1dpbmRvdyhkKSYmKGg9ZFtrXSxoJiYoZFtrXT1udWxsKSxuLmV2ZW50LnRyaWdnZXJlZD1xLGRbcV0oKSxuLmV2ZW50LnRyaWdnZXJlZD12b2lkIDAsaCYmKGRba109aCkpLGIucmVzdWx0fX0sZGlzcGF0Y2g6ZnVuY3Rpb24oYSl7YT1uLmV2ZW50LmZpeChhKTt2YXIgYixjLGUsZixnLGg9W10saT1kLmNhbGwoYXJndW1lbnRzKSxqPShPLmdldCh0aGlzLFwiZXZlbnRzXCIpfHx7fSlbYS50eXBlXXx8W10saz1uLmV2ZW50LnNwZWNpYWxbYS50eXBlXXx8e307aWYoaVswXT1hLGEuZGVsZWdhdGVUYXJnZXQ9dGhpcywhay5wcmVEaXNwYXRjaHx8ay5wcmVEaXNwYXRjaC5jYWxsKHRoaXMsYSkhPT0hMSl7aD1uLmV2ZW50LmhhbmRsZXJzLmNhbGwodGhpcyxhLGopLGI9MDt3aGlsZSgoZj1oW2IrK10pJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKXthLmN1cnJlbnRUYXJnZXQ9Zi5lbGVtLGM9MDt3aGlsZSgoZz1mLmhhbmRsZXJzW2MrK10pJiYhYS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpKSghYS5uYW1lc3BhY2VfcmV8fGEubmFtZXNwYWNlX3JlLnRlc3QoZy5uYW1lc3BhY2UpKSYmKGEuaGFuZGxlT2JqPWcsYS5kYXRhPWcuZGF0YSxlPSgobi5ldmVudC5zcGVjaWFsW2cub3JpZ1R5cGVdfHx7fSkuaGFuZGxlfHxnLmhhbmRsZXIpLmFwcGx5KGYuZWxlbSxpKSx2b2lkIDAhPT1lJiYoYS5yZXN1bHQ9ZSk9PT0hMSYmKGEucHJldmVudERlZmF1bHQoKSxhLnN0b3BQcm9wYWdhdGlvbigpKSl9cmV0dXJuIGsucG9zdERpc3BhdGNoJiZrLnBvc3REaXNwYXRjaC5jYWxsKHRoaXMsYSksYS5yZXN1bHR9fSxoYW5kbGVyczpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9W10saD1iLmRlbGVnYXRlQ291bnQsaT1hLnRhcmdldDtpZihoJiZpLm5vZGVUeXBlJiYoIWEuYnV0dG9ufHxcImNsaWNrXCIhPT1hLnR5cGUpKWZvcig7aSE9PXRoaXM7aT1pLnBhcmVudE5vZGV8fHRoaXMpaWYoaS5kaXNhYmxlZCE9PSEwfHxcImNsaWNrXCIhPT1hLnR5cGUpe2ZvcihkPVtdLGM9MDtoPmM7YysrKWY9YltjXSxlPWYuc2VsZWN0b3IrXCIgXCIsdm9pZCAwPT09ZFtlXSYmKGRbZV09Zi5uZWVkc0NvbnRleHQ/bihlLHRoaXMpLmluZGV4KGkpPj0wOm4uZmluZChlLHRoaXMsbnVsbCxbaV0pLmxlbmd0aCksZFtlXSYmZC5wdXNoKGYpO2QubGVuZ3RoJiZnLnB1c2goe2VsZW06aSxoYW5kbGVyczpkfSl9cmV0dXJuIGg8Yi5sZW5ndGgmJmcucHVzaCh7ZWxlbTp0aGlzLGhhbmRsZXJzOmIuc2xpY2UoaCl9KSxnfSxwcm9wczpcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxmaXhIb29rczp7fSxrZXlIb29rczp7cHJvcHM6XCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLGZpbHRlcjpmdW5jdGlvbihhLGIpe3JldHVybiBudWxsPT1hLndoaWNoJiYoYS53aGljaD1udWxsIT1iLmNoYXJDb2RlP2IuY2hhckNvZGU6Yi5rZXlDb2RlKSxhfX0sbW91c2VIb29rczp7cHJvcHM6XCJidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnRcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9Yi5idXR0b247cmV0dXJuIG51bGw9PWEucGFnZVgmJm51bGwhPWIuY2xpZW50WCYmKGM9YS50YXJnZXQub3duZXJEb2N1bWVudHx8bCxkPWMuZG9jdW1lbnRFbGVtZW50LGU9Yy5ib2R5LGEucGFnZVg9Yi5jbGllbnRYKyhkJiZkLnNjcm9sbExlZnR8fGUmJmUuc2Nyb2xsTGVmdHx8MCktKGQmJmQuY2xpZW50TGVmdHx8ZSYmZS5jbGllbnRMZWZ0fHwwKSxhLnBhZ2VZPWIuY2xpZW50WSsoZCYmZC5zY3JvbGxUb3B8fGUmJmUuc2Nyb2xsVG9wfHwwKS0oZCYmZC5jbGllbnRUb3B8fGUmJmUuY2xpZW50VG9wfHwwKSksYS53aGljaHx8dm9pZCAwPT09Znx8KGEud2hpY2g9MSZmPzE6MiZmPzM6NCZmPzI6MCksYX19LGZpeDpmdW5jdGlvbihhKXtpZihhW24uZXhwYW5kb10pcmV0dXJuIGE7dmFyIGIsYyxkLGU9YS50eXBlLGY9YSxnPXRoaXMuZml4SG9va3NbZV07Z3x8KHRoaXMuZml4SG9va3NbZV09Zz1YLnRlc3QoZSk/dGhpcy5tb3VzZUhvb2tzOlcudGVzdChlKT90aGlzLmtleUhvb2tzOnt9KSxkPWcucHJvcHM/dGhpcy5wcm9wcy5jb25jYXQoZy5wcm9wcyk6dGhpcy5wcm9wcyxhPW5ldyBuLkV2ZW50KGYpLGI9ZC5sZW5ndGg7d2hpbGUoYi0tKWM9ZFtiXSxhW2NdPWZbY107cmV0dXJuIGEudGFyZ2V0fHwoYS50YXJnZXQ9bCksMz09PWEudGFyZ2V0Lm5vZGVUeXBlJiYoYS50YXJnZXQ9YS50YXJnZXQucGFyZW50Tm9kZSksZy5maWx0ZXI/Zy5maWx0ZXIoYSxmKTphfSxzcGVjaWFsOntsb2FkOntub0J1YmJsZTohMH0sZm9jdXM6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcyE9PWFiKCkmJnRoaXMuZm9jdXM/KHRoaXMuZm9jdXMoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c2luXCJ9LGJsdXI6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcz09PWFiKCkmJnRoaXMuYmx1cj8odGhpcy5ibHVyKCksITEpOnZvaWQgMH0sZGVsZWdhdGVUeXBlOlwiZm9jdXNvdXRcIn0sY2xpY2s6e3RyaWdnZXI6ZnVuY3Rpb24oKXtyZXR1cm5cImNoZWNrYm94XCI9PT10aGlzLnR5cGUmJnRoaXMuY2xpY2smJm4ubm9kZU5hbWUodGhpcyxcImlucHV0XCIpPyh0aGlzLmNsaWNrKCksITEpOnZvaWQgMH0sX2RlZmF1bHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG4ubm9kZU5hbWUoYS50YXJnZXQsXCJhXCIpfX0sYmVmb3JldW5sb2FkOntwb3N0RGlzcGF0Y2g6ZnVuY3Rpb24oYSl7dm9pZCAwIT09YS5yZXN1bHQmJmEub3JpZ2luYWxFdmVudCYmKGEub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZT1hLnJlc3VsdCl9fX0sc2ltdWxhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9bi5leHRlbmQobmV3IG4uRXZlbnQsYyx7dHlwZTphLGlzU2ltdWxhdGVkOiEwLG9yaWdpbmFsRXZlbnQ6e319KTtkP24uZXZlbnQudHJpZ2dlcihlLG51bGwsYik6bi5ldmVudC5kaXNwYXRjaC5jYWxsKGIsZSksZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSYmYy5wcmV2ZW50RGVmYXVsdCgpfX0sbi5yZW1vdmVFdmVudD1mdW5jdGlvbihhLGIsYyl7YS5yZW1vdmVFdmVudExpc3RlbmVyJiZhLnJlbW92ZUV2ZW50TGlzdGVuZXIoYixjLCExKX0sbi5FdmVudD1mdW5jdGlvbihhLGIpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbi5FdmVudD8oYSYmYS50eXBlPyh0aGlzLm9yaWdpbmFsRXZlbnQ9YSx0aGlzLnR5cGU9YS50eXBlLHRoaXMuaXNEZWZhdWx0UHJldmVudGVkPWEuZGVmYXVsdFByZXZlbnRlZHx8dm9pZCAwPT09YS5kZWZhdWx0UHJldmVudGVkJiZhLnJldHVyblZhbHVlPT09ITE/JDpfKTp0aGlzLnR5cGU9YSxiJiZuLmV4dGVuZCh0aGlzLGIpLHRoaXMudGltZVN0YW1wPWEmJmEudGltZVN0YW1wfHxuLm5vdygpLHZvaWQodGhpc1tuLmV4cGFuZG9dPSEwKSk6bmV3IG4uRXZlbnQoYSxiKX0sbi5FdmVudC5wcm90b3R5cGU9e2lzRGVmYXVsdFByZXZlbnRlZDpfLGlzUHJvcGFnYXRpb25TdG9wcGVkOl8saXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ6XyxwcmV2ZW50RGVmYXVsdDpmdW5jdGlvbigpe3ZhciBhPXRoaXMub3JpZ2luYWxFdmVudDt0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD0kLGEmJmEucHJldmVudERlZmF1bHQmJmEucHJldmVudERlZmF1bHQoKX0sc3RvcFByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNQcm9wYWdhdGlvblN0b3BwZWQ9JCxhJiZhLnN0b3BQcm9wYWdhdGlvbiYmYS5zdG9wUHJvcGFnYXRpb24oKX0sc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQ9JCxhJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiYmYS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSx0aGlzLnN0b3BQcm9wYWdhdGlvbigpfX0sbi5lYWNoKHttb3VzZWVudGVyOlwibW91c2VvdmVyXCIsbW91c2VsZWF2ZTpcIm1vdXNlb3V0XCIscG9pbnRlcmVudGVyOlwicG9pbnRlcm92ZXJcIixwb2ludGVybGVhdmU6XCJwb2ludGVyb3V0XCJ9LGZ1bmN0aW9uKGEsYil7bi5ldmVudC5zcGVjaWFsW2FdPXtkZWxlZ2F0ZVR5cGU6YixiaW5kVHlwZTpiLGhhbmRsZTpmdW5jdGlvbihhKXt2YXIgYyxkPXRoaXMsZT1hLnJlbGF0ZWRUYXJnZXQsZj1hLmhhbmRsZU9iajtyZXR1cm4oIWV8fGUhPT1kJiYhbi5jb250YWlucyhkLGUpKSYmKGEudHlwZT1mLm9yaWdUeXBlLGM9Zi5oYW5kbGVyLmFwcGx5KHRoaXMsYXJndW1lbnRzKSxhLnR5cGU9YiksY319fSksay5mb2N1c2luQnViYmxlc3x8bi5lYWNoKHtmb2N1czpcImZvY3VzaW5cIixibHVyOlwiZm9jdXNvdXRcIn0sZnVuY3Rpb24oYSxiKXt2YXIgYz1mdW5jdGlvbihhKXtuLmV2ZW50LnNpbXVsYXRlKGIsYS50YXJnZXQsbi5ldmVudC5maXgoYSksITApfTtuLmV2ZW50LnNwZWNpYWxbYl09e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ty5hY2Nlc3MoZCxiKTtlfHxkLmFkZEV2ZW50TGlzdGVuZXIoYSxjLCEwKSxPLmFjY2VzcyhkLGIsKGV8fDApKzEpfSx0ZWFyZG93bjpmdW5jdGlvbigpe3ZhciBkPXRoaXMub3duZXJEb2N1bWVudHx8dGhpcyxlPU8uYWNjZXNzKGQsYiktMTtlP08uYWNjZXNzKGQsYixlKTooZC5yZW1vdmVFdmVudExpc3RlbmVyKGEsYywhMCksTy5yZW1vdmUoZCxiKSl9fX0pLG4uZm4uZXh0ZW5kKHtvbjpmdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGc7aWYoXCJvYmplY3RcIj09dHlwZW9mIGEpe1wic3RyaW5nXCIhPXR5cGVvZiBiJiYoYz1jfHxiLGI9dm9pZCAwKTtmb3IoZyBpbiBhKXRoaXMub24oZyxiLGMsYVtnXSxlKTtyZXR1cm4gdGhpc31pZihudWxsPT1jJiZudWxsPT1kPyhkPWIsYz1iPXZvaWQgMCk6bnVsbD09ZCYmKFwic3RyaW5nXCI9PXR5cGVvZiBiPyhkPWMsYz12b2lkIDApOihkPWMsYz1iLGI9dm9pZCAwKSksZD09PSExKWQ9XztlbHNlIGlmKCFkKXJldHVybiB0aGlzO3JldHVybiAxPT09ZSYmKGY9ZCxkPWZ1bmN0aW9uKGEpe3JldHVybiBuKCkub2ZmKGEpLGYuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxkLmd1aWQ9Zi5ndWlkfHwoZi5ndWlkPW4uZ3VpZCsrKSksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5hZGQodGhpcyxhLGQsYyxiKX0pfSxvbmU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYSxiLGMsZCwxKX0sb2ZmOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlO2lmKGEmJmEucHJldmVudERlZmF1bHQmJmEuaGFuZGxlT2JqKXJldHVybiBkPWEuaGFuZGxlT2JqLG4oYS5kZWxlZ2F0ZVRhcmdldCkub2ZmKGQubmFtZXNwYWNlP2Qub3JpZ1R5cGUrXCIuXCIrZC5uYW1lc3BhY2U6ZC5vcmlnVHlwZSxkLnNlbGVjdG9yLGQuaGFuZGxlciksdGhpcztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7Zm9yKGUgaW4gYSl0aGlzLm9mZihlLGIsYVtlXSk7cmV0dXJuIHRoaXN9cmV0dXJuKGI9PT0hMXx8XCJmdW5jdGlvblwiPT10eXBlb2YgYikmJihjPWIsYj12b2lkIDApLGM9PT0hMSYmKGM9XyksdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5ldmVudC5yZW1vdmUodGhpcyxhLGMsYil9KX0sdHJpZ2dlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnRyaWdnZXIoYSxiLHRoaXMpfSl9LHRyaWdnZXJIYW5kbGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpc1swXTtyZXR1cm4gYz9uLmV2ZW50LnRyaWdnZXIoYSxiLGMsITApOnZvaWQgMH19KTt2YXIgYmI9LzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW1xcdzpdKylbXj5dKilcXC8+L2dpLGNiPS88KFtcXHc6XSspLyxkYj0vPHwmIz9cXHcrOy8sZWI9LzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxmYj0vY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLGdiPS9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksaGI9L150cnVlXFwvKC4qKS8saWI9L15cXHMqPCEoPzpcXFtDREFUQVxcW3wtLSl8KD86XFxdXFxdfC0tKT5cXHMqJC9nLGpiPXtvcHRpb246WzEsXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsXCI8L3NlbGVjdD5cIl0sdGhlYWQ6WzEsXCI8dGFibGU+XCIsXCI8L3RhYmxlPlwiXSxjb2w6WzIsXCI8dGFibGU+PGNvbGdyb3VwPlwiLFwiPC9jb2xncm91cD48L3RhYmxlPlwiXSx0cjpbMixcIjx0YWJsZT48dGJvZHk+XCIsXCI8L3Rib2R5PjwvdGFibGU+XCJdLHRkOlszLFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIl0sX2RlZmF1bHQ6WzAsXCJcIixcIlwiXX07amIub3B0Z3JvdXA9amIub3B0aW9uLGpiLnRib2R5PWpiLnRmb290PWpiLmNvbGdyb3VwPWpiLmNhcHRpb249amIudGhlYWQsamIudGg9amIudGQ7ZnVuY3Rpb24ga2IoYSxiKXtyZXR1cm4gbi5ub2RlTmFtZShhLFwidGFibGVcIikmJm4ubm9kZU5hbWUoMTEhPT1iLm5vZGVUeXBlP2I6Yi5maXJzdENoaWxkLFwidHJcIik/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdfHxhLmFwcGVuZENoaWxkKGEub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIikpOmF9ZnVuY3Rpb24gbGIoYSl7cmV0dXJuIGEudHlwZT0obnVsbCE9PWEuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkrXCIvXCIrYS50eXBlLGF9ZnVuY3Rpb24gbWIoYSl7dmFyIGI9aGIuZXhlYyhhLnR5cGUpO3JldHVybiBiP2EudHlwZT1iWzFdOmEucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKSxhfWZ1bmN0aW9uIG5iKGEsYil7Zm9yKHZhciBjPTAsZD1hLmxlbmd0aDtkPmM7YysrKU8uc2V0KGFbY10sXCJnbG9iYWxFdmFsXCIsIWJ8fE8uZ2V0KGJbY10sXCJnbG9iYWxFdmFsXCIpKX1mdW5jdGlvbiBvYihhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGo7aWYoMT09PWIubm9kZVR5cGUpe2lmKE8uaGFzRGF0YShhKSYmKGY9Ty5hY2Nlc3MoYSksZz1PLnNldChiLGYpLGo9Zi5ldmVudHMpKXtkZWxldGUgZy5oYW5kbGUsZy5ldmVudHM9e307Zm9yKGUgaW4gailmb3IoYz0wLGQ9altlXS5sZW5ndGg7ZD5jO2MrKyluLmV2ZW50LmFkZChiLGUsaltlXVtjXSl9UC5oYXNEYXRhKGEpJiYoaD1QLmFjY2VzcyhhKSxpPW4uZXh0ZW5kKHt9LGgpLFAuc2V0KGIsaSkpfX1mdW5jdGlvbiBwYihhLGIpe3ZhciBjPWEuZ2V0RWxlbWVudHNCeVRhZ05hbWU/YS5nZXRFbGVtZW50c0J5VGFnTmFtZShifHxcIipcIik6YS5xdWVyeVNlbGVjdG9yQWxsP2EucXVlcnlTZWxlY3RvckFsbChifHxcIipcIik6W107cmV0dXJuIHZvaWQgMD09PWJ8fGImJm4ubm9kZU5hbWUoYSxiKT9uLm1lcmdlKFthXSxjKTpjfWZ1bmN0aW9uIHFiKGEsYil7dmFyIGM9Yi5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1wiaW5wdXRcIj09PWMmJlUudGVzdChhLnR5cGUpP2IuY2hlY2tlZD1hLmNoZWNrZWQ6KFwiaW5wdXRcIj09PWN8fFwidGV4dGFyZWFcIj09PWMpJiYoYi5kZWZhdWx0VmFsdWU9YS5kZWZhdWx0VmFsdWUpfW4uZXh0ZW5kKHtjbG9uZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNsb25lTm9kZSghMCksaT1uLmNvbnRhaW5zKGEub3duZXJEb2N1bWVudCxhKTtpZighKGsubm9DbG9uZUNoZWNrZWR8fDEhPT1hLm5vZGVUeXBlJiYxMSE9PWEubm9kZVR5cGV8fG4uaXNYTUxEb2MoYSkpKWZvcihnPXBiKGgpLGY9cGIoYSksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylxYihmW2RdLGdbZF0pO2lmKGIpaWYoYylmb3IoZj1mfHxwYihhKSxnPWd8fHBiKGgpLGQ9MCxlPWYubGVuZ3RoO2U+ZDtkKyspb2IoZltkXSxnW2RdKTtlbHNlIG9iKGEsaCk7cmV0dXJuIGc9cGIoaCxcInNjcmlwdFwiKSxnLmxlbmd0aD4wJiZuYihnLCFpJiZwYihhLFwic2NyaXB0XCIpKSxofSxidWlsZEZyYWdtZW50OmZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZSxmLGcsaCxpLGosaz1iLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxsPVtdLG09MCxvPWEubGVuZ3RoO28+bTttKyspaWYoZT1hW21dLGV8fDA9PT1lKWlmKFwib2JqZWN0XCI9PT1uLnR5cGUoZSkpbi5tZXJnZShsLGUubm9kZVR5cGU/W2VdOmUpO2Vsc2UgaWYoZGIudGVzdChlKSl7Zj1mfHxrLmFwcGVuZENoaWxkKGIuY3JlYXRlRWxlbWVudChcImRpdlwiKSksZz0oY2IuZXhlYyhlKXx8W1wiXCIsXCJcIl0pWzFdLnRvTG93ZXJDYXNlKCksaD1qYltnXXx8amIuX2RlZmF1bHQsZi5pbm5lckhUTUw9aFsxXStlLnJlcGxhY2UoYmIsXCI8JDE+PC8kMj5cIikraFsyXSxqPWhbMF07d2hpbGUoai0tKWY9Zi5sYXN0Q2hpbGQ7bi5tZXJnZShsLGYuY2hpbGROb2RlcyksZj1rLmZpcnN0Q2hpbGQsZi50ZXh0Q29udGVudD1cIlwifWVsc2UgbC5wdXNoKGIuY3JlYXRlVGV4dE5vZGUoZSkpO2sudGV4dENvbnRlbnQ9XCJcIixtPTA7d2hpbGUoZT1sW20rK10paWYoKCFkfHwtMT09PW4uaW5BcnJheShlLGQpKSYmKGk9bi5jb250YWlucyhlLm93bmVyRG9jdW1lbnQsZSksZj1wYihrLmFwcGVuZENoaWxkKGUpLFwic2NyaXB0XCIpLGkmJm5iKGYpLGMpKXtqPTA7d2hpbGUoZT1mW2orK10pZ2IudGVzdChlLnR5cGV8fFwiXCIpJiZjLnB1c2goZSl9cmV0dXJuIGt9LGNsZWFuRGF0YTpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkLGUsZj1uLmV2ZW50LnNwZWNpYWwsZz0wO3ZvaWQgMCE9PShjPWFbZ10pO2crKyl7aWYobi5hY2NlcHREYXRhKGMpJiYoZT1jW08uZXhwYW5kb10sZSYmKGI9Ty5jYWNoZVtlXSkpKXtpZihiLmV2ZW50cylmb3IoZCBpbiBiLmV2ZW50cylmW2RdP24uZXZlbnQucmVtb3ZlKGMsZCk6bi5yZW1vdmVFdmVudChjLGQsYi5oYW5kbGUpO08uY2FjaGVbZV0mJmRlbGV0ZSBPLmNhY2hlW2VdfWRlbGV0ZSBQLmNhY2hlW2NbUC5leHBhbmRvXV19fX0pLG4uZm4uZXh0ZW5kKHt0ZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBNKHRoaXMsZnVuY3Rpb24oYSl7cmV0dXJuIHZvaWQgMD09PWE/bi50ZXh0KHRoaXMpOnRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCl7KDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKSYmKHRoaXMudGV4dENvbnRlbnQ9YSl9KX0sbnVsbCxhLGFyZ3VtZW50cy5sZW5ndGgpfSxhcHBlbmQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5kb21NYW5pcChhcmd1bWVudHMsZnVuY3Rpb24oYSl7aWYoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpe3ZhciBiPWtiKHRoaXMsYSk7Yi5hcHBlbmRDaGlsZChhKX19KX0scHJlcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9a2IodGhpcyxhKTtiLmluc2VydEJlZm9yZShhLGIuZmlyc3RDaGlsZCl9fSl9LGJlZm9yZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzKX0pfSxhZnRlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXt0aGlzLnBhcmVudE5vZGUmJnRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoYSx0aGlzLm5leHRTaWJsaW5nKX0pfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGMsZD1hP24uZmlsdGVyKGEsdGhpcyk6dGhpcyxlPTA7bnVsbCE9KGM9ZFtlXSk7ZSsrKWJ8fDEhPT1jLm5vZGVUeXBlfHxuLmNsZWFuRGF0YShwYihjKSksYy5wYXJlbnROb2RlJiYoYiYmbi5jb250YWlucyhjLm93bmVyRG9jdW1lbnQsYykmJm5iKHBiKGMsXCJzY3JpcHRcIikpLGMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjKSk7cmV0dXJuIHRoaXN9LGVtcHR5OmZ1bmN0aW9uKCl7Zm9yKHZhciBhLGI9MDtudWxsIT0oYT10aGlzW2JdKTtiKyspMT09PWEubm9kZVR5cGUmJihuLmNsZWFuRGF0YShwYihhLCExKSksYS50ZXh0Q29udGVudD1cIlwiKTtyZXR1cm4gdGhpc30sY2xvbmU6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYT1udWxsPT1hPyExOmEsYj1udWxsPT1iP2E6Yix0aGlzLm1hcChmdW5jdGlvbigpe3JldHVybiBuLmNsb25lKHRoaXMsYSxiKX0pfSxodG1sOmZ1bmN0aW9uKGEpe3JldHVybiBNKHRoaXMsZnVuY3Rpb24oYSl7dmFyIGI9dGhpc1swXXx8e30sYz0wLGQ9dGhpcy5sZW5ndGg7aWYodm9pZCAwPT09YSYmMT09PWIubm9kZVR5cGUpcmV0dXJuIGIuaW5uZXJIVE1MO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhJiYhZWIudGVzdChhKSYmIWpiWyhjYi5leGVjKGEpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKV0pe2E9YS5yZXBsYWNlKGJiLFwiPCQxPjwvJDI+XCIpO3RyeXtmb3IoO2Q+YztjKyspYj10aGlzW2NdfHx7fSwxPT09Yi5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKHBiKGIsITEpKSxiLmlubmVySFRNTD1hKTtiPTB9Y2F0Y2goZSl7fX1iJiZ0aGlzLmVtcHR5KCkuYXBwZW5kKGEpfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LHJlcGxhY2VXaXRoOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzWzBdO3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihiKXthPXRoaXMucGFyZW50Tm9kZSxuLmNsZWFuRGF0YShwYih0aGlzKSksYSYmYS5yZXBsYWNlQ2hpbGQoYix0aGlzKX0pLGEmJihhLmxlbmd0aHx8YS5ub2RlVHlwZSk/dGhpczp0aGlzLnJlbW92ZSgpfSxkZXRhY2g6ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMucmVtb3ZlKGEsITApfSxkb21NYW5pcDpmdW5jdGlvbihhLGIpe2E9ZS5hcHBseShbXSxhKTt2YXIgYyxkLGYsZyxoLGksaj0wLGw9dGhpcy5sZW5ndGgsbT10aGlzLG89bC0xLHA9YVswXSxxPW4uaXNGdW5jdGlvbihwKTtpZihxfHxsPjEmJlwic3RyaW5nXCI9PXR5cGVvZiBwJiYhay5jaGVja0Nsb25lJiZmYi50ZXN0KHApKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9bS5lcShjKTtxJiYoYVswXT1wLmNhbGwodGhpcyxjLGQuaHRtbCgpKSksZC5kb21NYW5pcChhLGIpfSk7aWYobCYmKGM9bi5idWlsZEZyYWdtZW50KGEsdGhpc1swXS5vd25lckRvY3VtZW50LCExLHRoaXMpLGQ9Yy5maXJzdENoaWxkLDE9PT1jLmNoaWxkTm9kZXMubGVuZ3RoJiYoYz1kKSxkKSl7Zm9yKGY9bi5tYXAocGIoYyxcInNjcmlwdFwiKSxsYiksZz1mLmxlbmd0aDtsPmo7aisrKWg9YyxqIT09byYmKGg9bi5jbG9uZShoLCEwLCEwKSxnJiZuLm1lcmdlKGYscGIoaCxcInNjcmlwdFwiKSkpLGIuY2FsbCh0aGlzW2pdLGgsaik7XG5pZihnKWZvcihpPWZbZi5sZW5ndGgtMV0ub3duZXJEb2N1bWVudCxuLm1hcChmLG1iKSxqPTA7Zz5qO2orKyloPWZbal0sZ2IudGVzdChoLnR5cGV8fFwiXCIpJiYhTy5hY2Nlc3MoaCxcImdsb2JhbEV2YWxcIikmJm4uY29udGFpbnMoaSxoKSYmKGguc3JjP24uX2V2YWxVcmwmJm4uX2V2YWxVcmwoaC5zcmMpOm4uZ2xvYmFsRXZhbChoLnRleHRDb250ZW50LnJlcGxhY2UoaWIsXCJcIikpKX1yZXR1cm4gdGhpc319KSxuLmVhY2goe2FwcGVuZFRvOlwiYXBwZW5kXCIscHJlcGVuZFRvOlwicHJlcGVuZFwiLGluc2VydEJlZm9yZTpcImJlZm9yZVwiLGluc2VydEFmdGVyOlwiYWZ0ZXJcIixyZXBsYWNlQWxsOlwicmVwbGFjZVdpdGhcIn0sZnVuY3Rpb24oYSxiKXtuLmZuW2FdPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYyxkPVtdLGU9bihhKSxnPWUubGVuZ3RoLTEsaD0wO2c+PWg7aCsrKWM9aD09PWc/dGhpczp0aGlzLmNsb25lKCEwKSxuKGVbaF0pW2JdKGMpLGYuYXBwbHkoZCxjLmdldCgpKTtyZXR1cm4gdGhpcy5wdXNoU3RhY2soZCl9fSksbi5mbi5kZWxheT1mdW5jdGlvbihhLGIpe3JldHVybiBhPW4uZng/bi5meC5zcGVlZHNbYV18fGE6YSxiPWJ8fFwiZnhcIix0aGlzLnF1ZXVlKGIsZnVuY3Rpb24oYixjKXt2YXIgZD1zZXRUaW1lb3V0KGIsYSk7Yy5zdG9wPWZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGQpfX0pfSxmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGI9bC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpLGM9Yi5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIikpO2EudHlwZT1cImNoZWNrYm94XCIsay5jaGVja09uPVwiXCIhPT1hLnZhbHVlLGsub3B0U2VsZWN0ZWQ9Yy5zZWxlY3RlZCxiLmRpc2FibGVkPSEwLGsub3B0RGlzYWJsZWQ9IWMuZGlzYWJsZWQsYT1sLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKSxhLnZhbHVlPVwidFwiLGEudHlwZT1cInJhZGlvXCIsay5yYWRpb1ZhbHVlPVwidFwiPT09YS52YWx1ZX0oKTt2YXIgcmIsc2IsdGI9bi5leHByLmF0dHJIYW5kbGU7bi5mbi5leHRlbmQoe2F0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTSh0aGlzLG4uYXR0cixhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7bi5yZW1vdmVBdHRyKHRoaXMsYSl9KX19KSxuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEubm9kZVR5cGU7aWYoYSYmMyE9PWYmJjghPT1mJiYyIT09ZilyZXR1cm4gdHlwZW9mIGEuZ2V0QXR0cmlidXRlPT09Vj9uLnByb3AoYSxiLGMpOigxPT09ZiYmbi5pc1hNTERvYyhhKXx8KGI9Yi50b0xvd2VyQ2FzZSgpLGQ9bi5hdHRySG9va3NbYl18fChuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGIpP3NiOnJiKSksdm9pZCAwPT09Yz9kJiZcImdldFwiaW4gZCYmbnVsbCE9PShlPWQuZ2V0KGEsYikpP2U6KGU9bi5maW5kLmF0dHIoYSxiKSxudWxsPT1lP3ZvaWQgMDplKTpudWxsIT09Yz9kJiZcInNldFwiaW4gZCYmdm9pZCAwIT09KGU9ZC5zZXQoYSxjLGIpKT9lOihhLnNldEF0dHJpYnV0ZShiLGMrXCJcIiksYyk6dm9pZCBuLnJlbW92ZUF0dHIoYSxiKSl9LHJlbW92ZUF0dHI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9MCxmPWImJmIubWF0Y2goSCk7aWYoZiYmMT09PWEubm9kZVR5cGUpd2hpbGUoYz1mW2UrK10pZD1uLnByb3BGaXhbY118fGMsbi5leHByLm1hdGNoLmJvb2wudGVzdChjKSYmKGFbZF09ITEpLGEucmVtb3ZlQXR0cmlidXRlKGMpfSxhdHRySG9va3M6e3R5cGU6e3NldDpmdW5jdGlvbihhLGIpe2lmKCFrLnJhZGlvVmFsdWUmJlwicmFkaW9cIj09PWImJm4ubm9kZU5hbWUoYSxcImlucHV0XCIpKXt2YXIgYz1hLnZhbHVlO3JldHVybiBhLnNldEF0dHJpYnV0ZShcInR5cGVcIixiKSxjJiYoYS52YWx1ZT1jKSxifX19fX0pLHNiPXtzZXQ6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBiPT09ITE/bi5yZW1vdmVBdHRyKGEsYyk6YS5zZXRBdHRyaWJ1dGUoYyxjKSxjfX0sbi5lYWNoKG4uZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCgvXFx3Ky9nKSxmdW5jdGlvbihhLGIpe3ZhciBjPXRiW2JdfHxuLmZpbmQuYXR0cjt0YltiXT1mdW5jdGlvbihhLGIsZCl7dmFyIGUsZjtyZXR1cm4gZHx8KGY9dGJbYl0sdGJbYl09ZSxlPW51bGwhPWMoYSxiLGQpP2IudG9Mb3dlckNhc2UoKTpudWxsLHRiW2JdPWYpLGV9fSk7dmFyIHViPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2k7bi5mbi5leHRlbmQoe3Byb3A6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTSh0aGlzLG4ucHJvcCxhLGIsYXJndW1lbnRzLmxlbmd0aD4xKX0scmVtb3ZlUHJvcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7ZGVsZXRlIHRoaXNbbi5wcm9wRml4W2FdfHxhXX0pfX0pLG4uZXh0ZW5kKHtwcm9wRml4OntcImZvclwiOlwiaHRtbEZvclwiLFwiY2xhc3NcIjpcImNsYXNzTmFtZVwifSxwcm9wOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZz1hLm5vZGVUeXBlO2lmKGEmJjMhPT1nJiY4IT09ZyYmMiE9PWcpcmV0dXJuIGY9MSE9PWd8fCFuLmlzWE1MRG9jKGEpLGYmJihiPW4ucHJvcEZpeFtiXXx8YixlPW4ucHJvcEhvb2tzW2JdKSx2b2lkIDAhPT1jP2UmJlwic2V0XCJpbiBlJiZ2b2lkIDAhPT0oZD1lLnNldChhLGMsYikpP2Q6YVtiXT1jOmUmJlwiZ2V0XCJpbiBlJiZudWxsIT09KGQ9ZS5nZXQoYSxiKSk/ZDphW2JdfSxwcm9wSG9va3M6e3RhYkluZGV4OntnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuaGFzQXR0cmlidXRlKFwidGFiaW5kZXhcIil8fHViLnRlc3QoYS5ub2RlTmFtZSl8fGEuaHJlZj9hLnRhYkluZGV4Oi0xfX19fSksay5vcHRTZWxlY3RlZHx8KG4ucHJvcEhvb2tzLnNlbGVjdGVkPXtnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9YS5wYXJlbnROb2RlO3JldHVybiBiJiZiLnBhcmVudE5vZGUmJmIucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4LG51bGx9fSksbi5lYWNoKFtcInRhYkluZGV4XCIsXCJyZWFkT25seVwiLFwibWF4TGVuZ3RoXCIsXCJjZWxsU3BhY2luZ1wiLFwiY2VsbFBhZGRpbmdcIixcInJvd1NwYW5cIixcImNvbFNwYW5cIixcInVzZU1hcFwiLFwiZnJhbWVCb3JkZXJcIixcImNvbnRlbnRFZGl0YWJsZVwiXSxmdW5jdGlvbigpe24ucHJvcEZpeFt0aGlzLnRvTG93ZXJDYXNlKCldPXRoaXN9KTt2YXIgdmI9L1tcXHRcXHJcXG5cXGZdL2c7bi5mbi5leHRlbmQoe2FkZENsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPVwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykuYWRkQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goSCl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodmIsXCIgXCIpOlwiIFwiKSl7Zj0wO3doaWxlKGU9YltmKytdKWQuaW5kZXhPZihcIiBcIitlK1wiIFwiKTwwJiYoZCs9ZStcIiBcIik7Zz1uLnRyaW0oZCksYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHJlbW92ZUNsYXNzOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoPTA9PT1hcmd1bWVudHMubGVuZ3RofHxcInN0cmluZ1wiPT10eXBlb2YgYSYmYSxpPTAsaj10aGlzLmxlbmd0aDtpZihuLmlzRnVuY3Rpb24oYSkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihiKXtuKHRoaXMpLnJlbW92ZUNsYXNzKGEuY2FsbCh0aGlzLGIsdGhpcy5jbGFzc05hbWUpKX0pO2lmKGgpZm9yKGI9KGF8fFwiXCIpLm1hdGNoKEgpfHxbXTtqPmk7aSsrKWlmKGM9dGhpc1tpXSxkPTE9PT1jLm5vZGVUeXBlJiYoYy5jbGFzc05hbWU/KFwiIFwiK2MuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKHZiLFwiIFwiKTpcIlwiKSl7Zj0wO3doaWxlKGU9YltmKytdKXdoaWxlKGQuaW5kZXhPZihcIiBcIitlK1wiIFwiKT49MClkPWQucmVwbGFjZShcIiBcIitlK1wiIFwiLFwiIFwiKTtnPWE/bi50cmltKGQpOlwiXCIsYy5jbGFzc05hbWUhPT1nJiYoYy5jbGFzc05hbWU9Zyl9cmV0dXJuIHRoaXN9LHRvZ2dsZUNsYXNzOmZ1bmN0aW9uKGEsYil7dmFyIGM9dHlwZW9mIGE7cmV0dXJuXCJib29sZWFuXCI9PXR5cGVvZiBiJiZcInN0cmluZ1wiPT09Yz9iP3RoaXMuYWRkQ2xhc3MoYSk6dGhpcy5yZW1vdmVDbGFzcyhhKTp0aGlzLmVhY2gobi5pc0Z1bmN0aW9uKGEpP2Z1bmN0aW9uKGMpe24odGhpcykudG9nZ2xlQ2xhc3MoYS5jYWxsKHRoaXMsYyx0aGlzLmNsYXNzTmFtZSxiKSxiKX06ZnVuY3Rpb24oKXtpZihcInN0cmluZ1wiPT09Yyl7dmFyIGIsZD0wLGU9bih0aGlzKSxmPWEubWF0Y2goSCl8fFtdO3doaWxlKGI9ZltkKytdKWUuaGFzQ2xhc3MoYik/ZS5yZW1vdmVDbGFzcyhiKTplLmFkZENsYXNzKGIpfWVsc2UoYz09PVZ8fFwiYm9vbGVhblwiPT09YykmJih0aGlzLmNsYXNzTmFtZSYmTy5zZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIix0aGlzLmNsYXNzTmFtZSksdGhpcy5jbGFzc05hbWU9dGhpcy5jbGFzc05hbWV8fGE9PT0hMT9cIlwiOk8uZ2V0KHRoaXMsXCJfX2NsYXNzTmFtZV9fXCIpfHxcIlwiKX0pfSxoYXNDbGFzczpmdW5jdGlvbihhKXtmb3IodmFyIGI9XCIgXCIrYStcIiBcIixjPTAsZD10aGlzLmxlbmd0aDtkPmM7YysrKWlmKDE9PT10aGlzW2NdLm5vZGVUeXBlJiYoXCIgXCIrdGhpc1tjXS5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodmIsXCIgXCIpLmluZGV4T2YoYik+PTApcmV0dXJuITA7cmV0dXJuITF9fSk7dmFyIHdiPS9cXHIvZztuLmZuLmV4dGVuZCh7dmFsOmZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXNbMF07e2lmKGFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGQ9bi5pc0Z1bmN0aW9uKGEpLHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZTsxPT09dGhpcy5ub2RlVHlwZSYmKGU9ZD9hLmNhbGwodGhpcyxjLG4odGhpcykudmFsKCkpOmEsbnVsbD09ZT9lPVwiXCI6XCJudW1iZXJcIj09dHlwZW9mIGU/ZSs9XCJcIjpuLmlzQXJyYXkoZSkmJihlPW4ubWFwKGUsZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/XCJcIjphK1wiXCJ9KSksYj1uLnZhbEhvb2tzW3RoaXMudHlwZV18fG4udmFsSG9va3NbdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcInNldFwiaW4gYiYmdm9pZCAwIT09Yi5zZXQodGhpcyxlLFwidmFsdWVcIil8fCh0aGlzLnZhbHVlPWUpKX0pO2lmKGUpcmV0dXJuIGI9bi52YWxIb29rc1tlLnR5cGVdfHxuLnZhbEhvb2tzW2Uubm9kZU5hbWUudG9Mb3dlckNhc2UoKV0sYiYmXCJnZXRcImluIGImJnZvaWQgMCE9PShjPWIuZ2V0KGUsXCJ2YWx1ZVwiKSk/YzooYz1lLnZhbHVlLFwic3RyaW5nXCI9PXR5cGVvZiBjP2MucmVwbGFjZSh3YixcIlwiKTpudWxsPT1jP1wiXCI6Yyl9fX0pLG4uZXh0ZW5kKHt2YWxIb29rczp7b3B0aW9uOntnZXQ6ZnVuY3Rpb24oYSl7dmFyIGI9bi5maW5kLmF0dHIoYSxcInZhbHVlXCIpO3JldHVybiBudWxsIT1iP2I6bi50cmltKG4udGV4dChhKSl9fSxzZWxlY3Q6e2dldDpmdW5jdGlvbihhKXtmb3IodmFyIGIsYyxkPWEub3B0aW9ucyxlPWEuc2VsZWN0ZWRJbmRleCxmPVwic2VsZWN0LW9uZVwiPT09YS50eXBlfHwwPmUsZz1mP251bGw6W10saD1mP2UrMTpkLmxlbmd0aCxpPTA+ZT9oOmY/ZTowO2g+aTtpKyspaWYoYz1kW2ldLCEoIWMuc2VsZWN0ZWQmJmkhPT1lfHwoay5vcHREaXNhYmxlZD9jLmRpc2FibGVkOm51bGwhPT1jLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpKXx8Yy5wYXJlbnROb2RlLmRpc2FibGVkJiZuLm5vZGVOYW1lKGMucGFyZW50Tm9kZSxcIm9wdGdyb3VwXCIpKSl7aWYoYj1uKGMpLnZhbCgpLGYpcmV0dXJuIGI7Zy5wdXNoKGIpfXJldHVybiBnfSxzZXQ6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGU9YS5vcHRpb25zLGY9bi5tYWtlQXJyYXkoYiksZz1lLmxlbmd0aDt3aGlsZShnLS0pZD1lW2ddLChkLnNlbGVjdGVkPW4uaW5BcnJheShkLnZhbHVlLGYpPj0wKSYmKGM9ITApO3JldHVybiBjfHwoYS5zZWxlY3RlZEluZGV4PS0xKSxmfX19fSksbi5lYWNoKFtcInJhZGlvXCIsXCJjaGVja2JveFwiXSxmdW5jdGlvbigpe24udmFsSG9va3NbdGhpc109e3NldDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmlzQXJyYXkoYik/YS5jaGVja2VkPW4uaW5BcnJheShuKGEpLnZhbCgpLGIpPj0wOnZvaWQgMH19LGsuY2hlY2tPbnx8KG4udmFsSG9va3NbdGhpc10uZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiBudWxsPT09YS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKT9cIm9uXCI6YS52YWx1ZX0pfSksbi5lYWNoKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBlcnJvciBjb250ZXh0bWVudVwiLnNwbGl0KFwiIFwiKSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSxjKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4wP3RoaXMub24oYixudWxsLGEsYyk6dGhpcy50cmlnZ2VyKGIpfX0pLG4uZm4uZXh0ZW5kKHtob3ZlcjpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm1vdXNlZW50ZXIoYSkubW91c2VsZWF2ZShifHxhKX0sYmluZDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMub24oYSxudWxsLGIsYyl9LHVuYmluZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLm9mZihhLG51bGwsYil9LGRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLm9uKGIsYSxjLGQpfSx1bmRlbGVnYXRlOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gMT09PWFyZ3VtZW50cy5sZW5ndGg/dGhpcy5vZmYoYSxcIioqXCIpOnRoaXMub2ZmKGIsYXx8XCIqKlwiLGMpfX0pO3ZhciB4Yj1uLm5vdygpLHliPS9cXD8vO24ucGFyc2VKU09OPWZ1bmN0aW9uKGEpe3JldHVybiBKU09OLnBhcnNlKGErXCJcIil9LG4ucGFyc2VYTUw9ZnVuY3Rpb24oYSl7dmFyIGIsYztpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7dHJ5e2M9bmV3IERPTVBhcnNlcixiPWMucGFyc2VGcm9tU3RyaW5nKGEsXCJ0ZXh0L3htbFwiKX1jYXRjaChkKXtiPXZvaWQgMH1yZXR1cm4oIWJ8fGIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwYXJzZXJlcnJvclwiKS5sZW5ndGgpJiZuLmVycm9yKFwiSW52YWxpZCBYTUw6IFwiK2EpLGJ9O3ZhciB6YixBYixCYj0vIy4qJC8sQ2I9LyhbPyZdKV89W14mXSovLERiPS9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvZ20sRWI9L14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sRmI9L14oPzpHRVR8SEVBRCkkLyxHYj0vXlxcL1xcLy8sSGI9L14oW1xcdy4rLV0rOikoPzpcXC9cXC8oPzpbXlxcLz8jXSpAfCkoW15cXC8/IzpdKikoPzo6KFxcZCspfCl8KS8sSWI9e30sSmI9e30sS2I9XCIqL1wiLmNvbmNhdChcIipcIik7dHJ5e0FiPWxvY2F0aW9uLmhyZWZ9Y2F0Y2goTGIpe0FiPWwuY3JlYXRlRWxlbWVudChcImFcIiksQWIuaHJlZj1cIlwiLEFiPUFiLmhyZWZ9emI9SGIuZXhlYyhBYi50b0xvd2VyQ2FzZSgpKXx8W107ZnVuY3Rpb24gTWIoYSl7cmV0dXJuIGZ1bmN0aW9uKGIsYyl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWIsYj1cIipcIik7dmFyIGQsZT0wLGY9Yi50b0xvd2VyQ2FzZSgpLm1hdGNoKEgpfHxbXTtpZihuLmlzRnVuY3Rpb24oYykpd2hpbGUoZD1mW2UrK10pXCIrXCI9PT1kWzBdPyhkPWQuc2xpY2UoMSl8fFwiKlwiLChhW2RdPWFbZF18fFtdKS51bnNoaWZ0KGMpKTooYVtkXT1hW2RdfHxbXSkucHVzaChjKX19ZnVuY3Rpb24gTmIoYSxiLGMsZCl7dmFyIGU9e30sZj1hPT09SmI7ZnVuY3Rpb24gZyhoKXt2YXIgaTtyZXR1cm4gZVtoXT0hMCxuLmVhY2goYVtoXXx8W10sZnVuY3Rpb24oYSxoKXt2YXIgaj1oKGIsYyxkKTtyZXR1cm5cInN0cmluZ1wiIT10eXBlb2Yganx8Znx8ZVtqXT9mPyEoaT1qKTp2b2lkIDA6KGIuZGF0YVR5cGVzLnVuc2hpZnQoaiksZyhqKSwhMSl9KSxpfXJldHVybiBnKGIuZGF0YVR5cGVzWzBdKXx8IWVbXCIqXCJdJiZnKFwiKlwiKX1mdW5jdGlvbiBPYihhLGIpe3ZhciBjLGQsZT1uLmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9uc3x8e307Zm9yKGMgaW4gYil2b2lkIDAhPT1iW2NdJiYoKGVbY10/YTpkfHwoZD17fSkpW2NdPWJbY10pO3JldHVybiBkJiZuLmV4dGVuZCghMCxhLGQpLGF9ZnVuY3Rpb24gUGIoYSxiLGMpe3ZhciBkLGUsZixnLGg9YS5jb250ZW50cyxpPWEuZGF0YVR5cGVzO3doaWxlKFwiKlwiPT09aVswXSlpLnNoaWZ0KCksdm9pZCAwPT09ZCYmKGQ9YS5taW1lVHlwZXx8Yi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKSk7aWYoZClmb3IoZSBpbiBoKWlmKGhbZV0mJmhbZV0udGVzdChkKSl7aS51bnNoaWZ0KGUpO2JyZWFrfWlmKGlbMF1pbiBjKWY9aVswXTtlbHNle2ZvcihlIGluIGMpe2lmKCFpWzBdfHxhLmNvbnZlcnRlcnNbZStcIiBcIitpWzBdXSl7Zj1lO2JyZWFrfWd8fChnPWUpfWY9Znx8Z31yZXR1cm4gZj8oZiE9PWlbMF0mJmkudW5zaGlmdChmKSxjW2ZdKTp2b2lkIDB9ZnVuY3Rpb24gUWIoYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPXt9LGs9YS5kYXRhVHlwZXMuc2xpY2UoKTtpZihrWzFdKWZvcihnIGluIGEuY29udmVydGVycylqW2cudG9Mb3dlckNhc2UoKV09YS5jb252ZXJ0ZXJzW2ddO2Y9ay5zaGlmdCgpO3doaWxlKGYpaWYoYS5yZXNwb25zZUZpZWxkc1tmXSYmKGNbYS5yZXNwb25zZUZpZWxkc1tmXV09YiksIWkmJmQmJmEuZGF0YUZpbHRlciYmKGI9YS5kYXRhRmlsdGVyKGIsYS5kYXRhVHlwZSkpLGk9ZixmPWsuc2hpZnQoKSlpZihcIipcIj09PWYpZj1pO2Vsc2UgaWYoXCIqXCIhPT1pJiZpIT09Zil7aWYoZz1qW2krXCIgXCIrZl18fGpbXCIqIFwiK2ZdLCFnKWZvcihlIGluIGopaWYoaD1lLnNwbGl0KFwiIFwiKSxoWzFdPT09ZiYmKGc9altpK1wiIFwiK2hbMF1dfHxqW1wiKiBcIitoWzBdXSkpe2c9PT0hMD9nPWpbZV06altlXSE9PSEwJiYoZj1oWzBdLGsudW5zaGlmdChoWzFdKSk7YnJlYWt9aWYoZyE9PSEwKWlmKGcmJmFbXCJ0aHJvd3NcIl0pYj1nKGIpO2Vsc2UgdHJ5e2I9ZyhiKX1jYXRjaChsKXtyZXR1cm57c3RhdGU6XCJwYXJzZXJlcnJvclwiLGVycm9yOmc/bDpcIk5vIGNvbnZlcnNpb24gZnJvbSBcIitpK1wiIHRvIFwiK2Z9fX1yZXR1cm57c3RhdGU6XCJzdWNjZXNzXCIsZGF0YTpifX1uLmV4dGVuZCh7YWN0aXZlOjAsbGFzdE1vZGlmaWVkOnt9LGV0YWc6e30sYWpheFNldHRpbmdzOnt1cmw6QWIsdHlwZTpcIkdFVFwiLGlzTG9jYWw6RWIudGVzdCh6YlsxXSksZ2xvYmFsOiEwLHByb2Nlc3NEYXRhOiEwLGFzeW5jOiEwLGNvbnRlbnRUeXBlOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsYWNjZXB0czp7XCIqXCI6S2IsdGV4dDpcInRleHQvcGxhaW5cIixodG1sOlwidGV4dC9odG1sXCIseG1sOlwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLGpzb246XCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIn0sY29udGVudHM6e3htbDoveG1sLyxodG1sOi9odG1sLyxqc29uOi9qc29uL30scmVzcG9uc2VGaWVsZHM6e3htbDpcInJlc3BvbnNlWE1MXCIsdGV4dDpcInJlc3BvbnNlVGV4dFwiLGpzb246XCJyZXNwb25zZUpTT05cIn0sY29udmVydGVyczp7XCIqIHRleHRcIjpTdHJpbmcsXCJ0ZXh0IGh0bWxcIjohMCxcInRleHQganNvblwiOm4ucGFyc2VKU09OLFwidGV4dCB4bWxcIjpuLnBhcnNlWE1MfSxmbGF0T3B0aW9uczp7dXJsOiEwLGNvbnRleHQ6ITB9fSxhamF4U2V0dXA6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYj9PYihPYihhLG4uYWpheFNldHRpbmdzKSxiKTpPYihuLmFqYXhTZXR0aW5ncyxhKX0sYWpheFByZWZpbHRlcjpNYihJYiksYWpheFRyYW5zcG9ydDpNYihKYiksYWpheDpmdW5jdGlvbihhLGIpe1wib2JqZWN0XCI9PXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxiPWJ8fHt9O3ZhciBjLGQsZSxmLGcsaCxpLGosaz1uLmFqYXhTZXR1cCh7fSxiKSxsPWsuY29udGV4dHx8ayxtPWsuY29udGV4dCYmKGwubm9kZVR5cGV8fGwuanF1ZXJ5KT9uKGwpOm4uZXZlbnQsbz1uLkRlZmVycmVkKCkscD1uLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLHE9ay5zdGF0dXNDb2RlfHx7fSxyPXt9LHM9e30sdD0wLHU9XCJjYW5jZWxlZFwiLHY9e3JlYWR5U3RhdGU6MCxnZXRSZXNwb25zZUhlYWRlcjpmdW5jdGlvbihhKXt2YXIgYjtpZigyPT09dCl7aWYoIWYpe2Y9e307d2hpbGUoYj1EYi5leGVjKGUpKWZbYlsxXS50b0xvd2VyQ2FzZSgpXT1iWzJdfWI9ZlthLnRvTG93ZXJDYXNlKCldfXJldHVybiBudWxsPT1iP251bGw6Yn0sZ2V0QWxsUmVzcG9uc2VIZWFkZXJzOmZ1bmN0aW9uKCl7cmV0dXJuIDI9PT10P2U6bnVsbH0sc2V0UmVxdWVzdEhlYWRlcjpmdW5jdGlvbihhLGIpe3ZhciBjPWEudG9Mb3dlckNhc2UoKTtyZXR1cm4gdHx8KGE9c1tjXT1zW2NdfHxhLHJbYV09YiksdGhpc30sb3ZlcnJpZGVNaW1lVHlwZTpmdW5jdGlvbihhKXtyZXR1cm4gdHx8KGsubWltZVR5cGU9YSksdGhpc30sc3RhdHVzQ29kZTpmdW5jdGlvbihhKXt2YXIgYjtpZihhKWlmKDI+dClmb3IoYiBpbiBhKXFbYl09W3FbYl0sYVtiXV07ZWxzZSB2LmFsd2F5cyhhW3Yuc3RhdHVzXSk7cmV0dXJuIHRoaXN9LGFib3J0OmZ1bmN0aW9uKGEpe3ZhciBiPWF8fHU7cmV0dXJuIGMmJmMuYWJvcnQoYikseCgwLGIpLHRoaXN9fTtpZihvLnByb21pc2UodikuY29tcGxldGU9cC5hZGQsdi5zdWNjZXNzPXYuZG9uZSx2LmVycm9yPXYuZmFpbCxrLnVybD0oKGF8fGsudXJsfHxBYikrXCJcIikucmVwbGFjZShCYixcIlwiKS5yZXBsYWNlKEdiLHpiWzFdK1wiLy9cIiksay50eXBlPWIubWV0aG9kfHxiLnR5cGV8fGsubWV0aG9kfHxrLnR5cGUsay5kYXRhVHlwZXM9bi50cmltKGsuZGF0YVR5cGV8fFwiKlwiKS50b0xvd2VyQ2FzZSgpLm1hdGNoKEgpfHxbXCJcIl0sbnVsbD09ay5jcm9zc0RvbWFpbiYmKGg9SGIuZXhlYyhrLnVybC50b0xvd2VyQ2FzZSgpKSxrLmNyb3NzRG9tYWluPSEoIWh8fGhbMV09PT16YlsxXSYmaFsyXT09PXpiWzJdJiYoaFszXXx8KFwiaHR0cDpcIj09PWhbMV0/XCI4MFwiOlwiNDQzXCIpKT09PSh6YlszXXx8KFwiaHR0cDpcIj09PXpiWzFdP1wiODBcIjpcIjQ0M1wiKSkpKSxrLmRhdGEmJmsucHJvY2Vzc0RhdGEmJlwic3RyaW5nXCIhPXR5cGVvZiBrLmRhdGEmJihrLmRhdGE9bi5wYXJhbShrLmRhdGEsay50cmFkaXRpb25hbCkpLE5iKEliLGssYix2KSwyPT09dClyZXR1cm4gdjtpPWsuZ2xvYmFsLGkmJjA9PT1uLmFjdGl2ZSsrJiZuLmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIiksay50eXBlPWsudHlwZS50b1VwcGVyQ2FzZSgpLGsuaGFzQ29udGVudD0hRmIudGVzdChrLnR5cGUpLGQ9ay51cmwsay5oYXNDb250ZW50fHwoay5kYXRhJiYoZD1rLnVybCs9KHliLnRlc3QoZCk/XCImXCI6XCI/XCIpK2suZGF0YSxkZWxldGUgay5kYXRhKSxrLmNhY2hlPT09ITEmJihrLnVybD1DYi50ZXN0KGQpP2QucmVwbGFjZShDYixcIiQxXz1cIit4YisrKTpkKyh5Yi50ZXN0KGQpP1wiJlwiOlwiP1wiKStcIl89XCIreGIrKykpLGsuaWZNb2RpZmllZCYmKG4ubGFzdE1vZGlmaWVkW2RdJiZ2LnNldFJlcXVlc3RIZWFkZXIoXCJJZi1Nb2RpZmllZC1TaW5jZVwiLG4ubGFzdE1vZGlmaWVkW2RdKSxuLmV0YWdbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU5vbmUtTWF0Y2hcIixuLmV0YWdbZF0pKSwoay5kYXRhJiZrLmhhc0NvbnRlbnQmJmsuY29udGVudFR5cGUhPT0hMXx8Yi5jb250ZW50VHlwZSkmJnYuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLGsuY29udGVudFR5cGUpLHYuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdFwiLGsuZGF0YVR5cGVzWzBdJiZrLmFjY2VwdHNbay5kYXRhVHlwZXNbMF1dP2suYWNjZXB0c1trLmRhdGFUeXBlc1swXV0rKFwiKlwiIT09ay5kYXRhVHlwZXNbMF0/XCIsIFwiK0tiK1wiOyBxPTAuMDFcIjpcIlwiKTprLmFjY2VwdHNbXCIqXCJdKTtmb3IoaiBpbiBrLmhlYWRlcnMpdi5zZXRSZXF1ZXN0SGVhZGVyKGosay5oZWFkZXJzW2pdKTtpZihrLmJlZm9yZVNlbmQmJihrLmJlZm9yZVNlbmQuY2FsbChsLHYsayk9PT0hMXx8Mj09PXQpKXJldHVybiB2LmFib3J0KCk7dT1cImFib3J0XCI7Zm9yKGogaW57c3VjY2VzczoxLGVycm9yOjEsY29tcGxldGU6MX0pdltqXShrW2pdKTtpZihjPU5iKEpiLGssYix2KSl7di5yZWFkeVN0YXRlPTEsaSYmbS50cmlnZ2VyKFwiYWpheFNlbmRcIixbdixrXSksay5hc3luYyYmay50aW1lb3V0PjAmJihnPXNldFRpbWVvdXQoZnVuY3Rpb24oKXt2LmFib3J0KFwidGltZW91dFwiKX0say50aW1lb3V0KSk7dHJ5e3Q9MSxjLnNlbmQocix4KX1jYXRjaCh3KXtpZighKDI+dCkpdGhyb3cgdzt4KC0xLHcpfX1lbHNlIHgoLTEsXCJObyBUcmFuc3BvcnRcIik7ZnVuY3Rpb24geChhLGIsZixoKXt2YXIgaixyLHMsdSx3LHg9YjsyIT09dCYmKHQ9MixnJiZjbGVhclRpbWVvdXQoZyksYz12b2lkIDAsZT1ofHxcIlwiLHYucmVhZHlTdGF0ZT1hPjA/NDowLGo9YT49MjAwJiYzMDA+YXx8MzA0PT09YSxmJiYodT1QYihrLHYsZikpLHU9UWIoayx1LHYsaiksaj8oay5pZk1vZGlmaWVkJiYodz12LmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKSx3JiYobi5sYXN0TW9kaWZpZWRbZF09dyksdz12LmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKSx3JiYobi5ldGFnW2RdPXcpKSwyMDQ9PT1hfHxcIkhFQURcIj09PWsudHlwZT94PVwibm9jb250ZW50XCI6MzA0PT09YT94PVwibm90bW9kaWZpZWRcIjooeD11LnN0YXRlLHI9dS5kYXRhLHM9dS5lcnJvcixqPSFzKSk6KHM9eCwoYXx8IXgpJiYoeD1cImVycm9yXCIsMD5hJiYoYT0wKSkpLHYuc3RhdHVzPWEsdi5zdGF0dXNUZXh0PShifHx4KStcIlwiLGo/by5yZXNvbHZlV2l0aChsLFtyLHgsdl0pOm8ucmVqZWN0V2l0aChsLFt2LHgsc10pLHYuc3RhdHVzQ29kZShxKSxxPXZvaWQgMCxpJiZtLnRyaWdnZXIoaj9cImFqYXhTdWNjZXNzXCI6XCJhamF4RXJyb3JcIixbdixrLGo/cjpzXSkscC5maXJlV2l0aChsLFt2LHhdKSxpJiYobS50cmlnZ2VyKFwiYWpheENvbXBsZXRlXCIsW3Ysa10pLC0tbi5hY3RpdmV8fG4uZXZlbnQudHJpZ2dlcihcImFqYXhTdG9wXCIpKSl9cmV0dXJuIHZ9LGdldEpTT046ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmdldChhLGIsYyxcImpzb25cIil9LGdldFNjcmlwdDpmdW5jdGlvbihhLGIpe3JldHVybiBuLmdldChhLHZvaWQgMCxiLFwic2NyaXB0XCIpfX0pLG4uZWFjaChbXCJnZXRcIixcInBvc3RcIl0sZnVuY3Rpb24oYSxiKXtuW2JdPWZ1bmN0aW9uKGEsYyxkLGUpe3JldHVybiBuLmlzRnVuY3Rpb24oYykmJihlPWV8fGQsZD1jLGM9dm9pZCAwKSxuLmFqYXgoe3VybDphLHR5cGU6YixkYXRhVHlwZTplLGRhdGE6YyxzdWNjZXNzOmR9KX19KSxuLmVhY2goW1wiYWpheFN0YXJ0XCIsXCJhamF4U3RvcFwiLFwiYWpheENvbXBsZXRlXCIsXCJhamF4RXJyb3JcIixcImFqYXhTdWNjZXNzXCIsXCJhamF4U2VuZFwiXSxmdW5jdGlvbihhLGIpe24uZm5bYl09ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMub24oYixhKX19KSxuLl9ldmFsVXJsPWZ1bmN0aW9uKGEpe3JldHVybiBuLmFqYXgoe3VybDphLHR5cGU6XCJHRVRcIixkYXRhVHlwZTpcInNjcmlwdFwiLGFzeW5jOiExLGdsb2JhbDohMSxcInRocm93c1wiOiEwfSl9O3ZhciBSYj0vJTIwL2csU2I9L1xcW1xcXSQvLFRiPS9cXHI/XFxuL2csVWI9L14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFZiPS9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGtleWdlbikvaTtmdW5jdGlvbiBXYihhLGIsYyxkKXt2YXIgZTtpZihuLmlzQXJyYXkoYikpbi5lYWNoKGIsZnVuY3Rpb24oYixlKXtjfHxTYi50ZXN0KGEpP2QoYSxlKTpXYihhK1wiW1wiKyhcIm9iamVjdFwiPT10eXBlb2YgZT9iOlwiXCIpK1wiXVwiLGUsYyxkKX0pO2Vsc2UgaWYoY3x8XCJvYmplY3RcIiE9PW4udHlwZShiKSlkKGEsYik7ZWxzZSBmb3IoZSBpbiBiKVdiKGErXCJbXCIrZStcIl1cIixiW2VdLGMsZCl9bi5wYXJhbT1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9W10sZT1mdW5jdGlvbihhLGIpe2I9bi5pc0Z1bmN0aW9uKGIpP2IoKTpudWxsPT1iP1wiXCI6YixkW2QubGVuZ3RoXT1lbmNvZGVVUklDb21wb25lbnQoYSkrXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGIpfTtpZih2b2lkIDA9PT1iJiYoYj1uLmFqYXhTZXR0aW5ncyYmbi5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWwpLG4uaXNBcnJheShhKXx8YS5qcXVlcnkmJiFuLmlzUGxhaW5PYmplY3QoYSkpbi5lYWNoKGEsZnVuY3Rpb24oKXtlKHRoaXMubmFtZSx0aGlzLnZhbHVlKX0pO2Vsc2UgZm9yKGMgaW4gYSlXYihjLGFbY10sYixlKTtyZXR1cm4gZC5qb2luKFwiJlwiKS5yZXBsYWNlKFJiLFwiK1wiKX0sbi5mbi5leHRlbmQoe3NlcmlhbGl6ZTpmdW5jdGlvbigpe3JldHVybiBuLnBhcmFtKHRoaXMuc2VyaWFsaXplQXJyYXkoKSl9LHNlcmlhbGl6ZUFycmF5OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCl7dmFyIGE9bi5wcm9wKHRoaXMsXCJlbGVtZW50c1wiKTtyZXR1cm4gYT9uLm1ha2VBcnJheShhKTp0aGlzfSkuZmlsdGVyKGZ1bmN0aW9uKCl7dmFyIGE9dGhpcy50eXBlO3JldHVybiB0aGlzLm5hbWUmJiFuKHRoaXMpLmlzKFwiOmRpc2FibGVkXCIpJiZWYi50ZXN0KHRoaXMubm9kZU5hbWUpJiYhVWIudGVzdChhKSYmKHRoaXMuY2hlY2tlZHx8IVUudGVzdChhKSl9KS5tYXAoZnVuY3Rpb24oYSxiKXt2YXIgYz1uKHRoaXMpLnZhbCgpO3JldHVybiBudWxsPT1jP251bGw6bi5pc0FycmF5KGMpP24ubWFwKGMsZnVuY3Rpb24oYSl7cmV0dXJue25hbWU6Yi5uYW1lLHZhbHVlOmEucmVwbGFjZShUYixcIlxcclxcblwiKX19KTp7bmFtZTpiLm5hbWUsdmFsdWU6Yy5yZXBsYWNlKFRiLFwiXFxyXFxuXCIpfX0pLmdldCgpfX0pLG4uYWpheFNldHRpbmdzLnhocj1mdW5jdGlvbigpe3RyeXtyZXR1cm4gbmV3IFhNTEh0dHBSZXF1ZXN0fWNhdGNoKGEpe319O3ZhciBYYj0wLFliPXt9LFpiPXswOjIwMCwxMjIzOjIwNH0sJGI9bi5hamF4U2V0dGluZ3MueGhyKCk7YS5BY3RpdmVYT2JqZWN0JiZuKGEpLm9uKFwidW5sb2FkXCIsZnVuY3Rpb24oKXtmb3IodmFyIGEgaW4gWWIpWWJbYV0oKX0pLGsuY29ycz0hISRiJiZcIndpdGhDcmVkZW50aWFsc1wiaW4gJGIsay5hamF4PSRiPSEhJGIsbi5hamF4VHJhbnNwb3J0KGZ1bmN0aW9uKGEpe3ZhciBiO3JldHVybiBrLmNvcnN8fCRiJiYhYS5jcm9zc0RvbWFpbj97c2VuZDpmdW5jdGlvbihjLGQpe3ZhciBlLGY9YS54aHIoKSxnPSsrWGI7aWYoZi5vcGVuKGEudHlwZSxhLnVybCxhLmFzeW5jLGEudXNlcm5hbWUsYS5wYXNzd29yZCksYS54aHJGaWVsZHMpZm9yKGUgaW4gYS54aHJGaWVsZHMpZltlXT1hLnhockZpZWxkc1tlXTthLm1pbWVUeXBlJiZmLm92ZXJyaWRlTWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZShhLm1pbWVUeXBlKSxhLmNyb3NzRG9tYWlufHxjW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXXx8KGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdPVwiWE1MSHR0cFJlcXVlc3RcIik7Zm9yKGUgaW4gYylmLnNldFJlcXVlc3RIZWFkZXIoZSxjW2VdKTtiPWZ1bmN0aW9uKGEpe3JldHVybiBmdW5jdGlvbigpe2ImJihkZWxldGUgWWJbZ10sYj1mLm9ubG9hZD1mLm9uZXJyb3I9bnVsbCxcImFib3J0XCI9PT1hP2YuYWJvcnQoKTpcImVycm9yXCI9PT1hP2QoZi5zdGF0dXMsZi5zdGF0dXNUZXh0KTpkKFpiW2Yuc3RhdHVzXXx8Zi5zdGF0dXMsZi5zdGF0dXNUZXh0LFwic3RyaW5nXCI9PXR5cGVvZiBmLnJlc3BvbnNlVGV4dD97dGV4dDpmLnJlc3BvbnNlVGV4dH06dm9pZCAwLGYuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkpKX19LGYub25sb2FkPWIoKSxmLm9uZXJyb3I9YihcImVycm9yXCIpLGI9WWJbZ109YihcImFib3J0XCIpO3RyeXtmLnNlbmQoYS5oYXNDb250ZW50JiZhLmRhdGF8fG51bGwpfWNhdGNoKGgpe2lmKGIpdGhyb3cgaH19LGFib3J0OmZ1bmN0aW9uKCl7YiYmYigpfX06dm9pZCAwfSksbi5hamF4U2V0dXAoe2FjY2VwdHM6e3NjcmlwdDpcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJ9LGNvbnRlbnRzOntzY3JpcHQ6Lyg/OmphdmF8ZWNtYSlzY3JpcHQvfSxjb252ZXJ0ZXJzOntcInRleHQgc2NyaXB0XCI6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZ2xvYmFsRXZhbChhKSxhfX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJzY3JpcHRcIixmdW5jdGlvbihhKXt2b2lkIDA9PT1hLmNhY2hlJiYoYS5jYWNoZT0hMSksYS5jcm9zc0RvbWFpbiYmKGEudHlwZT1cIkdFVFwiKX0pLG4uYWpheFRyYW5zcG9ydChcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe2lmKGEuY3Jvc3NEb21haW4pe3ZhciBiLGM7cmV0dXJue3NlbmQ6ZnVuY3Rpb24oZCxlKXtiPW4oXCI8c2NyaXB0PlwiKS5wcm9wKHthc3luYzohMCxjaGFyc2V0OmEuc2NyaXB0Q2hhcnNldCxzcmM6YS51cmx9KS5vbihcImxvYWQgZXJyb3JcIixjPWZ1bmN0aW9uKGEpe2IucmVtb3ZlKCksYz1udWxsLGEmJmUoXCJlcnJvclwiPT09YS50eXBlPzQwNDoyMDAsYS50eXBlKX0pLGwuaGVhZC5hcHBlbmRDaGlsZChiWzBdKX0sYWJvcnQ6ZnVuY3Rpb24oKXtjJiZjKCl9fX19KTt2YXIgX2I9W10sYWM9Lyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztuLmFqYXhTZXR1cCh7anNvbnA6XCJjYWxsYmFja1wiLGpzb25wQ2FsbGJhY2s6ZnVuY3Rpb24oKXt2YXIgYT1fYi5wb3AoKXx8bi5leHBhbmRvK1wiX1wiK3hiKys7cmV0dXJuIHRoaXNbYV09ITAsYX19KSxuLmFqYXhQcmVmaWx0ZXIoXCJqc29uIGpzb25wXCIsZnVuY3Rpb24oYixjLGQpe3ZhciBlLGYsZyxoPWIuanNvbnAhPT0hMSYmKGFjLnRlc3QoYi51cmwpP1widXJsXCI6XCJzdHJpbmdcIj09dHlwZW9mIGIuZGF0YSYmIShiLmNvbnRlbnRUeXBlfHxcIlwiKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpJiZhYy50ZXN0KGIuZGF0YSkmJlwiZGF0YVwiKTtyZXR1cm4gaHx8XCJqc29ucFwiPT09Yi5kYXRhVHlwZXNbMF0/KGU9Yi5qc29ucENhbGxiYWNrPW4uaXNGdW5jdGlvbihiLmpzb25wQ2FsbGJhY2spP2IuanNvbnBDYWxsYmFjaygpOmIuanNvbnBDYWxsYmFjayxoP2JbaF09YltoXS5yZXBsYWNlKGFjLFwiJDFcIitlKTpiLmpzb25wIT09ITEmJihiLnVybCs9KHliLnRlc3QoYi51cmwpP1wiJlwiOlwiP1wiKStiLmpzb25wK1wiPVwiK2UpLGIuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdPWZ1bmN0aW9uKCl7cmV0dXJuIGd8fG4uZXJyb3IoZStcIiB3YXMgbm90IGNhbGxlZFwiKSxnWzBdfSxiLmRhdGFUeXBlc1swXT1cImpzb25cIixmPWFbZV0sYVtlXT1mdW5jdGlvbigpe2c9YXJndW1lbnRzfSxkLmFsd2F5cyhmdW5jdGlvbigpe2FbZV09ZixiW2VdJiYoYi5qc29ucENhbGxiYWNrPWMuanNvbnBDYWxsYmFjayxfYi5wdXNoKGUpKSxnJiZuLmlzRnVuY3Rpb24oZikmJmYoZ1swXSksZz1mPXZvaWQgMH0pLFwic2NyaXB0XCIpOnZvaWQgMH0pLG4ucGFyc2VIVE1MPWZ1bmN0aW9uKGEsYixjKXtpZighYXx8XCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIG51bGw7XCJib29sZWFuXCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpLGI9Ynx8bDt2YXIgZD15LmV4ZWMoYSksZT0hYyYmW107cmV0dXJuIGQ/W2IuY3JlYXRlRWxlbWVudChkWzFdKV06KGQ9bi5idWlsZEZyYWdtZW50KFthXSxiLGUpLGUmJmUubGVuZ3RoJiZuKGUpLnJlbW92ZSgpLG4ubWVyZ2UoW10sZC5jaGlsZE5vZGVzKSl9O3ZhciBiYz1uLmZuLmxvYWQ7bi5mbi5sb2FkPWZ1bmN0aW9uKGEsYixjKXtpZihcInN0cmluZ1wiIT10eXBlb2YgYSYmYmMpcmV0dXJuIGJjLmFwcGx5KHRoaXMsYXJndW1lbnRzKTt2YXIgZCxlLGYsZz10aGlzLGg9YS5pbmRleE9mKFwiIFwiKTtyZXR1cm4gaD49MCYmKGQ9bi50cmltKGEuc2xpY2UoaCkpLGE9YS5zbGljZSgwLGgpKSxuLmlzRnVuY3Rpb24oYik/KGM9YixiPXZvaWQgMCk6YiYmXCJvYmplY3RcIj09dHlwZW9mIGImJihlPVwiUE9TVFwiKSxnLmxlbmd0aD4wJiZuLmFqYXgoe3VybDphLHR5cGU6ZSxkYXRhVHlwZTpcImh0bWxcIixkYXRhOmJ9KS5kb25lKGZ1bmN0aW9uKGEpe2Y9YXJndW1lbnRzLGcuaHRtbChkP24oXCI8ZGl2PlwiKS5hcHBlbmQobi5wYXJzZUhUTUwoYSkpLmZpbmQoZCk6YSl9KS5jb21wbGV0ZShjJiZmdW5jdGlvbihhLGIpe2cuZWFjaChjLGZ8fFthLnJlc3BvbnNlVGV4dCxiLGFdKX0pLHRoaXN9LFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZCYmZGVmaW5lKFwianF1ZXJ5XCIsW10sZnVuY3Rpb24oKXtyZXR1cm4gbn0pO3ZhciBjYz1hLmpRdWVyeSxkYz1hLiQ7cmV0dXJuIG4ubm9Db25mbGljdD1mdW5jdGlvbihiKXtyZXR1cm4gYS4kPT09biYmKGEuJD1kYyksYiYmYS5qUXVlcnk9PT1uJiYoYS5qUXVlcnk9Y2MpLG59LHR5cGVvZiBiPT09ViYmKGEualF1ZXJ5PWEuJD1uKSxufSk7XG5cbiIsIi8qKlxuICogQ29va2llc1xuICpcbiAqIEpTIExpYnJhcnkgdG8gZGVhbCB3aXRoIENvb2tpZXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxudmFyIENvb2tpZXMgPSB7XG5cblx0LyoqXG5cdCAqIEdldFxuXHQgKlxuXHQgKiBHZXRzIGEgY29va2llIG9yIHJldHVybnMgdGhlIGRlZmF1bHQuIFNldCBubyBuYW1lIHRvIGdldCBhbGxcblx0ICpcblx0ICogQG5hbWUgZ2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHIgbmFtZVx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGNvb2tpZSB0byBmZXRjaFxuXHQgKiBAcGFyYW0gc3RyIGRlZmF1bHRfXHRcdFx0VGhlIGRlZmF1bHQgdmFsdWUgdG8gcmV0dXJuIGlmIG5vIGNvb2tpZSBpcyBmb3VuZFxuXHQgKiBAcmV0dXJuIHN0cnxudWxsXG5cdCAqL1xuXHRnZXQ6IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfKSB7XG5cblx0XHQvLyBTZXQgdGhlIGRlZmF1bHQgaWYgbm8gdmFsdWUgaXMgcGFzc2VkXG5cdFx0aWYodHlwZW9mIGRlZmF1bHRfID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRkZWZhdWx0XyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Ly8gUGFyc2UgYWxsIGNvb2tpZXNcblx0XHR2YXIgb0Nvb2tpZXMgPSB7fVxuXHRcdHZhciBsQ29va2llcyA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IGxDb29raWVzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRsID0gbENvb2tpZXNbaV0uc3BsaXQoJz0nKTtcblx0XHRcdG9Db29raWVzW2xbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGxbMV0pO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gbmFtZSwgcmV0dXJuIGFsbFxuXHRcdGlmKHR5cGVvZiBuYW1lID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRyZXR1cm4gb0Nvb2tpZXM7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIGNvb2tpZSBleGlzdHMgcmV0dXJuIGl0LCBlbHNlIHJldHVybiB0aGUgZGVmYXVsdFxuXHRcdHJldHVybiAobmFtZSBpbiBvQ29va2llcykgPyBvQ29va2llc1tuYW1lXSA6IGRlZmF1bHRfO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBSZW1vdmVcblx0ICpcblx0ICogRGVsZXRlcyBhIGNvb2tpZVxuXHQgKlxuXHQgKiBAbmFtZSByZW1vdmVcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llIHRvIGRlbGV0ZVxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwicmVtb3ZlXCI6IGZ1bmN0aW9uKG5hbWUsIGRvbWFpbiwgcGF0aCkge1xuXHRcdHRoaXMuc2V0KG5hbWUsICcnLCAtMSwgZG9tYWluLCBwYXRoKTtcblx0fSxcblxuXHQvKipcblx0ICogU2V0XG5cdCAqXG5cdCAqIFNldHMgYSBjb29raWVcblx0ICpcblx0ICogQG5hbWUgc2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHIgbmFtZVx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGNvb2tpZVxuXHQgKiBAcGFyYW0gc3RyIHZhbHVlXHRcdFx0XHRUaGUgdmFsdWUgdG8gc3RvcmVcblx0ICogQHBhcmFtIGludCBleHBpcmVzXHRcdFx0VGhlIG51bWJlciBvZiBzZWNvbmRzIGJlZm9yZSB0aGUgY29va2llIGV4cGlyZXNcblx0ICogQHBhcmFtIHN0ciBkb21haW5cdFx0XHRUaGUgb3B0aW9uYWwgZG9tYWluIHRvIHNldCB0aGUgY29va2llIG9uXG5cdCAqIEBwYXJhbSBzdHIgcGF0aFx0XHRcdFx0VGhlIG9wdGlvbmFsIHBhdGggb2YgdGhlIGNvb2tpZVxuXHQgKiBAcmV0dXJuIG51bGxcblx0ICovXG5cdHNldDogZnVuY3Rpb24obmFtZSwgdmFsdWUsIGV4cGlyZXMsIGRvbWFpbiwgcGF0aCkge1xuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGV4cGlyZXMgdGltZVxuXHRcdHZhciBkID0gbmV3IERhdGUoKTtcblx0XHRkLnNldFRpbWUoZC5nZXRUaW1lKCkgKyAoZXhwaXJlcyoxMDAwKSlcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBjb29raWUgc3RyaW5nXG5cdFx0dmFyIHMgPSBuYW1lICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSArXG5cdFx0XHRcdCc7IGV4cGlyZXM9JyArIGQudG9HTVRTdHJpbmcoKSArICc7Jztcblx0XHRpZihkb21haW4pIHtcblx0XHRcdHMgKz0gJyBkb21haW49JyArIGRvbWFpbiArICc7Jztcblx0XHR9XG5cdFx0aWYocGF0aCkge1xuXHRcdFx0cyArPSAnIHBhdGg9JyArIHBhdGggKyAnOyc7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBjb29raWVcblx0XHRkb2N1bWVudC5jb29raWUgPSBzO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IENvb2tpZXM7XG4iLCIvKipcbiAqIEV2ZW50c1xuICpcbiAqIEV2ZW50IG1vZGVsIGZvciBub24gVUkgZXZlbnRzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNFxuICovXG5cbi8vIEluaXQgdGhlIGNhbGxiYWNrcyBvYmplY3RcbnZhciBfY2FsbGJhY2tzID0ge307XG5cbi8qKlxuICogQWRkXG4gKlxuICogQWRkcyBhIGNhbGxiYWNrIHRvIGFuIGV2ZW50XG4gKlxuICogQG5hbWUgYWRkXG4gKiBAYWNjZXNzIHB1YmxpY1xuICogQHBhcmFtIHN0ciBldmVudFx0XHRcdFx0VGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIHRvIGF0dGFjaCB0byB0aGUgZXZlbnRcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBhZGQoZXZlbnQsIGNhbGxiYWNrKSB7XG5cblx0Ly8gSWYgdGhlIGV2ZW50IGRvZXNuJ3QgZXhpc3QgeWV0XG5cdGlmKCEoZXZlbnQgaW4gX2NhbGxiYWNrcykpIHtcblx0XHRfY2FsbGJhY2tzW2V2ZW50XSA9IFtdXG5cdH1cblxuXHQvLyBBZGQgdGhlIGNhbGxiYWNrIHRvIHRoZSBsaXN0XG5cdF9jYWxsYmFja3NbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vKipcbiAqIFJlbW92ZVxuICpcbiAqIFJlbW92ZXMgYSBjYWxsYmFjayBmcm9tIGEgc3BlY2lmaWMgZXZlbnRcbiAqXG4gKiBAbmFtZSByZW1vdmVcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0gc3RyIGV2ZW50XHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gcmVtb3ZlIHRoZSBjYWxsYmFjayBmcm9tXG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGV4YWN0IHNhbWUgY2FsbGJhY2sgdGhhdCB3YXMgYWRkZWQgdG8gdGhlIGV2ZW50XG4gKiBAcmV0dXJuXG4gKi9cbmZ1bmN0aW9uIHJlbW92ZShldmVudCwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB0aGUgbmFtZSBleGlzdHMgaW4gdGhlIG9iamVjdFxuXHRpZihldmVudCBpbiBfY2FsbGJhY2tzKSB7XG5cblx0XHQvLyBJZiB0aGUgY2FsbGJhY2sgZXhpc3RzIGluIHRoZSBsaXN0XG5cdFx0dmFyIGkgPSBfY2FsbGJhY2tzW2V2ZW50XS5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRpZihpICE9IC0xKSB7XG5cdFx0XHRfY2FsbGJhY2tzW2V2ZW50XS5zcGxpY2UoaSwxKTtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fVxuXG5cdC8vIE5vdGhpbmcgZm91bmQsIHJldHVybiBmYWxzZVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogVHJpZ2dlclxuICpcbiAqIFRyaWdnZXJzIGEgc3BlY2lmaWMgZXZlbnQgYW5kIGNhbGxzIGFsbCBjYWxsYmFja3MgYXNzb2NpYXRlZFxuICpcbiAqIEBuYW1lIHRyaWdnZXJcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0gc3RyIGV2ZW50XHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZXZlbnQgdG8gdHJpZ2dlclxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIHRyaWdnZXIoZXZlbnQpIHtcblxuXHQvLyBJZiB3ZSBoYXZlIGNhbGxiYWNrcyBmb3IgdGhlIGV2ZW50XG5cdGlmKGV2ZW50IGluIF9jYWxsYmFja3MpIHtcblxuXHRcdC8vIENoZWNrIGZvciBhZGRpdGlvbmFsIGFyZ3VtZW50cyB0aGF0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuXHRcdC8vXHRjYWxsYmFja3Ncblx0XHR2YXIgYXJncyA9IFtdO1xuXHRcdGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG5cdFx0XHRhcmdzID0gQXJyYXkuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5zbGljZSgxKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFueSBjYWxsYmFja3MsIGNhbGwgdGhlbSBvbmUgYnkgb25lXG5cdFx0Zm9yKHZhciBpIGluIF9jYWxsYmFja3NbZXZlbnRdKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR2YXIgYiA9IF9jYWxsYmFja3NbZXZlbnRdW2ldLmFwcGx5KG51bGwsIGFyZ3MpO1xuXHRcdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihldmVudCArICcgY2FsbGJhY2sgJyArIGkgKyAnIHRocmV3IGV4Y2VwdGlvbjogJyArIGVycik7XG5cdFx0XHRcdGJyZWFrXG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHdlIGdvdCBmYWxzZSBiYWNrLCBzdG9wIGNhbGxpbmcgdGhlIGNhbGxiYWNrc1xuXHRcdFx0aWYoYiA9PT0gZmFsc2UpIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm8gY2FsbGJhY2tzIGFzc2NvY2l0ZWQgd2l0aCB0aGUgZXZlbnRcblx0ZWxzZSB7XG5cdFx0Y29uc29sZS5lcnJvcignZXZlbnQgdmFsdWUgXCInICsgZXZlbnQgKyAnXCIgcmV0dXJuZWQsIGFuZCBubyBjYWxsYmFja3Mgd2VyZSBmb3VuZCB0byBoYW5kbGUgaXQnKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGZ1bmN0aW9uc1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYWRkXCI6IGFkZCxcblx0XCJyZW1vdmVcIjogcmVtb3ZlLFxuXHRcInRyaWdnZXJcIjogdHJpZ2dlclxufVxuIiwiLyoqXG4gKiBIYXNoXG4gKlxuICogSlMgTGlicmFyeSB0byBtYW5hZ2UgaGFzaCB2YWx1ZXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTEyLTA5XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgVG9vbHMgPSByZXF1aXJlKCcuL3Rvb2xzLmpzJyk7XG5cbi8vIFZhbHVlc1xudmFyIF9oYXNoID0ge307XG5cbi8vIG5hbWUgcmVnZXhcbnZhciBfbmFtZVJFID0gL15bYS16XSskLztcblxuLy8gQ2FsbGJhY2tzXG52YXIgX3dhdGNoZXMgPSB7fTtcblxuLyoqXG4gKiBDaGVjayBXYXRjaGVzXG4gKlxuICogR2V0cyBvbGQgdmFsdWVzIGFuZCBjb21wYXJlcyB0aGVtIHRvIGV4aXN0aW5nIHZhbHVlcywgaWYgYW55b25lIGlzIHdhdGNoaW5nXG4gKiBhbnkgbmFtZXMgdGhhdCBhcmUgY2hhbmdlZCwgdGhleSBhcmUgbm90aWZpZWRcbiAqXG4gKiBAbmFtZSBfY2hlY2tXYXRjaGVzXG4gKiBAcGFyYW0gb2JqZWN0IG9sZFx0XHRcdFRoZSBvbGQgdmFsdWVzIHRvIGNoZWNrIGFnYWluXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2NoZWNrV2F0Y2hlcyhvbGQpIHtcblxuXHQvLyBJZiB0aGVyZSBhcmUgd2F0Y2hlc1xuXHRpZighVG9vbHMuZW1wdHkoX3dhdGNoZXMpKSB7XG5cblx0XHQvLyBDaGVjayBlYWNoIHdhdGNoXG5cdFx0Zm9yKHZhciBuYW1lIGluIF93YXRjaGVzKSB7XG5cblx0XHRcdC8vIElmIHRoZSB2YWx1ZSBkaWRuJ3QgZXhpc3QgYW5kIG5vdyBpdCBkb2VzLCBvciBpdCBkaWQgZXhpc3Rcblx0XHRcdC8vXHRhbmQgbm93IGl0IGRvZXNuJ3QsIG9yIHRoZSB2YWx1ZXMgZG9uJ3QgbWF0Y2hcblx0XHRcdGlmKCghKG5hbWUgaW4gb2xkKSAmJiBuYW1lIGluIF9oYXNoKSB8fFxuXHRcdFx0XHQobmFtZSBpbiBvbGQgJiYgIShuYW1lIGluIF9oYXNoKSkgfHxcblx0XHRcdFx0b2xkW25hbWVdICE9IF9oYXNoW25hbWVdKSB7XG5cblx0XHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGNhbGxiYWNrIGFuZCBjYWxsIGl0XG5cdFx0XHRcdGZvcih2YXIgZiBvZiBfd2F0Y2hlc1tuYW1lXSkge1xuXHRcdFx0XHRcdGYoX2hhc2hbbmFtZV0gfHwgbnVsbCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBIYXNoIENoYW5nZWRcbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgbG9jYXRpb24gaGFzaCBoYXMgYmVlbiBhbHRlcmVkLCBub3RpZmllcyBhbnkgd2F0Y2hlcnMgb2ZcbiAqIGhhc2ggdmFsdWVzIGNoYW5naW5nXG4gKlxuICogQG5hbWUgX2hhc2hDaGFuZ2VkXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhc2hDaGFuZ2VkKCkge1xuXG5cdC8vIFN0b3JlIHRoZSBjdXJyZW50IGhhc2hcblx0dmFyIG9sZCA9IFRvb2xzLmNsb25lKF9oYXNoKTtcblxuXHQvLyBSZS1wYXJzZSB0aGUgY3VycmVudCBsb2NhdGlvbiBoYXNoXG5cdF9wYXJzZUhhc2goKTtcblxuXHQvLyBDaGVjayB0aGUgd2F0Y2hlc1xuXHRfY2hlY2tXYXRjaGVzKG9sZCk7XG59XG5cbi8qKlxuICogUGFyc2UgSGFzaFxuICpcbiAqIFBhcnNlcyB0aGUgY3VycmVudCBsb2NhdGlvbiBoYXNoIGludG8gYW4gb2JqZWN0XG4gKlxuICogQG5hbWUgX3BhcnNlSGFzaFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wYXJzZUhhc2goKSB7XG5cblx0Ly8gSWYgdGhlcmUncyBhbnl0aGluZyBpbiB0aGUgaGFzaFxuXHRpZih3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPiAxKSB7XG5cdFx0dmFyIHJlZ2V4ID0gLyhbXj0mXSspPT8oW14mXSopL2dcblx0XHR2YXIgZmllbGQgPSBudWxsO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIHBhcnQgZm91bmRcblx0XHR3aGlsZShmaWVsZCA9IHJlZ2V4LmV4ZWMod2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKDEpKSkge1xuXHRcdFx0X2hhc2hbZmllbGRbMV1dID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpZWxkWzJdKS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbnZhciBIYXNoID0ge1xuXG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqXG5cdCAqIEluaXRpYWxpc2VzIHRoZSBpbnRlcm5hbCBoYXNoIGJ5IGZldGNoaW5nIGFuZCBwYXJzaW5nIHRoZSBjdXJyZW50XG5cdCAqIGxvY2F0aW9uIGhhc2hcblx0ICpcblx0ICogQG5hbWUgaW5pdFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJpbml0XCI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gVHJhY2sgY2hhbmdlc1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBfaGFzaENoYW5nZWQpO1xuXG5cdFx0Ly8gUGFyc2UgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaFxuXHRcdF9wYXJzZUhhc2goKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0XG5cdCAqXG5cdCAqIFJldHVybnMgYSBoYXNoIG5hbWVcblx0ICpcblx0ICogQG5hbWUgZ2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cmluZyBuYW1lXHRcdFRoZSBuYW1lIHRvIGxvb2sgZm9yXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGVmYXVsdF9cdFRoZSB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIG5hbWUgaXNuJ3QgZm91bmRcblx0ICogQHJldHVybiBzdHJcblx0ICovXG5cdFwiZ2V0XCI6IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfKSB7XG5cblx0XHQvLyBJZiB0aGUgbmFtZSBpcyBpbnZhbGlkXG5cdFx0aWYoIV9uYW1lUkUudGVzdChuYW1lKSkge1xuXHRcdFx0dGhyb3cgJ0ludmFsaWQgSGFzaCBuYW1lJztcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBpcyBhIHZhbHVlIGZvciB0aGUgbmFtZVxuXHRcdGlmKHR5cGVvZiBfaGFzaFtuYW1lXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIF9oYXNoW25hbWVdO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIHJldHVybiB0aGUgZGVmYXVsdFxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRfO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogU2V0XG5cdCAqXG5cdCAqIFNldHMgYSBzcGVjaWZpYyBuYW1lXG5cdCAqXG5cdCAqIEBuYW1lIHNldFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSBzdHJ8b2JqZWN0IG5hbWVcdFRoZSBuYW1lIHRvIHNldCwgb3IgYW4gb2JqZWN0IG9mIG5hbWUvdmFsdWUgcGFpcnNcblx0ICogQHBhcmFtIHN0ciB2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byBzZXQgdGhlIG5hbWUgdG9cblx0ICovXG5cdFwic2V0XCI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cblx0XHQvLyBJZiB0aGUgbmFtZSBpcyBub3QgYW4gb2JqZWN0XG5cdFx0aWYoIVRvb2xzLmlzT2JqZWN0KG5hbWUpKSB7XG5cblx0XHRcdC8vIElmIHRoZSB2YWx1ZSBpcyBub3QgZGVmaW5lZFxuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHZhbHVlID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSmF2YVNjcmlwdCBpcyBkdW1iIGFuZCB0aGlua3Mge25hbWU6IHZhbHVlfSBpcyB0aGUgc2FtZSBhc1xuXHRcdFx0Ly9cdHtcIm5hbWVcIjogdmFsdWV9XG5cdFx0XHR2YXIgdGVtcCA9IG5hbWU7XG5cdFx0XHRuYW1lID0ge307XG5cdFx0XHRuYW1lW3RlbXBdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhlIG9sZCBoYXNoXG5cdFx0dmFyIG9sZCA9IFRvb2xzLmNsb25lKF9oYXNoKTtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBuYW1lXG5cdFx0Zm9yKHZhciBuIGluIG5hbWUpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIG5hbWUgaXMgaW52YWxpZFxuXHRcdFx0aWYoIV9uYW1lUkUudGVzdChuKSkge1xuXHRcdFx0XHR0aHJvdyAnSW52YWxpZCBIYXNoIG5hbWU6ICcgKyBuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgbnVsbCwgZGVsZXRlIHRoZSBuYW1lXG5cdFx0XHRpZihuYW1lW25dID09IG51bGwpIHtcblx0XHRcdFx0ZGVsZXRlIF9oYXNoW25dO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWxzZSwgc2V0IHRoZSBuZXcgdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfaGFzaFtuXSA9IG5hbWVbbl07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgYW55b25lIHdhdGNoaW5nIHRoaXMgdmFsdWVcblx0XHRfY2hlY2tXYXRjaGVzKG9sZCk7XG5cblx0XHQvLyBJbml0IGFuIGFycmF5IHRvIHN0b3JlIHRoZSBwYXJ0c1xuXHRcdHZhciBoYXNoID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbmFtZVxuXHRcdGZvcih2YXIgayBpbiBfaGFzaCkge1xuXHRcdFx0aGFzaC5wdXNoKGsgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoX2hhc2hba10pKTtcblx0XHR9XG5cblx0XHQvLyBSZXNldCB0aGUgd2luZG93IGxvY2F0aW9uIGhhc2hcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2guam9pbignJicpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBVbndhdGNoXG5cdCAqXG5cdCAqIFJlbW92ZXMgYSBjYWxsYmFjayBmcm9tIHRoZSB3YXRjaGVzXG5cdCAqXG5cdCAqIEBuYW1lIHVud2F0Y2hcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIG5hbWVcdFx0XHRUaGUgbmFtZSBvZiB0aGUgdmFsdWUgdG8gc3RvcCB3YXRjaGluZ1xuXHQgKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIHRvIHJlbW92ZVxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwidW53YXRjaFwiOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSB0aGUgbmFtZVxuXHRcdGlmKG5hbWUgaW4gX3dhdGNoZXMpIHtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCB0aGUgY2FsbGJhY2tzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmFtZVxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF93YXRjaGVzW25hbWVdLmxlbmd0aDsgKytpKSB7XG5cblx0XHRcdFx0Ly8gSWYgd2UgZmluZCB0aGUgY2FsbGJhY2tcblx0XHRcdFx0aWYoX3dhdGNoZXNbbmFtZV1baV0gPT0gY2FsbGJhY2spIHtcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSBpdFxuXHRcdFx0XHRcdF93YXRjaGVzW25hbWVdLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFdhdGNoXG5cdCAqXG5cdCAqIEFkZHMgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBuYW1lIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBuYW1lIGlzXG5cdCAqIGFkZGVkLCBkZWxldGVkLCBvciBjaGFuZ2VkXG5cdCAqXG5cdCAqIEBuYW1lIHdhdGNoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cmluZyBuYW1lXHRcdFx0VGhlIG5hbWUgb2YgdGhlIHZhbHVlIHRvIHdhdGNoXG5cdCAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJ3YXRjaFwiOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuXG5cdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBuYW1lXG5cdFx0aWYobmFtZSBpbiBfd2F0Y2hlcykge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIHRoZSBjYWxsYmFja3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBuYW1lXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3dhdGNoZXNbbmFtZV0ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIGNhbGxiYWNrIHRoZXJlJ3Mgbm8gbmVlZCB0byBzdG9yZSBpdFxuXHRcdFx0XHRpZihfd2F0Y2hlc1tuYW1lXVtpXSA9PSBjYWxsYmFjaykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgY2FsbGJhY2tzIGZvciB0aGUgbmFtZVxuXHRcdGVsc2Uge1xuXHRcdFx0X3dhdGNoZXNbbmFtZV0gPSBbXTtcblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIGNhbGxiYWNrIHRvIHRoZSB3YXRjaGVzXG5cdFx0X3dhdGNoZXNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsIi8qKlxuICogTG9hZGVyXG4gKlxuICogU2hvd3MgYSBsb2FkaW5nIGdyYXBoaWMgZHVyaW5nIHJlcXVlc3RzL3N0YXJ0dXBcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gS2VlcCB0cmFjayBvZiB0aGUgc2hvdy9oaWRlIGNhbGxzXG4vL1x0YXNzdW1lIHRoZSBsb2FkZXIgc3RhcnRlZCBvblxudmFyIF9jb3VudCA9IDE7XG5cbi8vIEdldCB0aGUgRE9NIGVsZW1lbnRcbnZhciBfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0aGlkZTogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBEZWNyZW1lbnQgdGhlIGNvdW50XG5cdFx0X2NvdW50LS07XG5cblx0XHQvLyBJZiB0aGlzIGlzIHRoZSBsYXN0IG9uZVxuXHRcdGlmKF9jb3VudCA9PSAwKSB7XG5cdFx0XHRfZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cdH0sXG5cblx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gSW5jcmVtZW50IHRoZSBjb3VudFxuXHRcdF9jb3VudCsrO1xuXG5cdFx0Ly8gSWYgdGhpcyBpcyB0aGUgZmlyc3Qgb25lXG5cdFx0aWYoX2NvdW50ID09IDEpIHtcblx0XHRcdF9lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9XG5cdH1cbn1cbiIsIi8qKlxuICogU2VydmljZXNcbiAqXG4gKiBIYW5kbGVzIGNvbm5lY3RpbmcgdG8gYW5kIHJldHJpZXZpbmcgZGF0YSBmcm9tIHNlcnZpY2VzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNFxuICovXG5cbi8vIEV4dGVybmFsIG1vZHVsZXNcbnZhciAkID0gcmVxdWlyZSgnLi4vM3JkL2pxdWVyeS5hamF4LmpzJyk7XG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIENvb2tpZXMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2Nvb2tpZXMuanMnKTtcblxuLy8gU2VydmljZXMgZG9tYWluXG52YXIgX2RvbWFpbiA9ICcnO1xuXG4vLyBEZWZhdWx0IGVycm9yIGZ1bmN0aW9uXG52YXIgX2Vycm9yID0gZnVuY3Rpb24oKSB7fVxuXG4vKipcbiAqIENsZWFyXG4gKlxuICogQ2xlYXJzIHRoZSBzZXNzaW9uIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgY29va2llc1xuICpcbiAqIEBuYW1lIF9jbGVhclxuICogYWNjZXNzIHByaXZhdGVcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfY2xlYXIoKSB7XG5cblx0Ly8gRGVsZXRlIGZyb20gbG9jYWxTdG9yYWdlXG5cdGRlbGV0ZSBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ107XG5cblx0Ly8gRGVsZXRlIHRoZSBjb29raWVcblx0Q29va2llcy5yZW1vdmUoJ19zZXNzaW9uJywgJy4nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLCAnLycpO1xufVxuXG4vKipcbiAqIFJlcXVlc3RcbiAqXG4gKiBIYW5kbGVzIGFjdHVhbCByZXF1ZXN0c1xuICpcbiAqIEBuYW1lIHJlcXVlc3RcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHN0cmluZyBtZXRob2RcdFx0XHRUaGUgbWV0aG9kIHVzZWQgdG8gc2VuZCB0aGUgcmVxdWVzdFxuICogQHBhcmFtIHN0cmluZyB1cmxcdFx0XHRUaGUgZnVsbCBVUkwgdG8gdGhlIHNlcnZpY2Uvbm91blxuICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuICogQHBhcmFtIHN0cmluZyBhdXRoXHRcdFx0T3B0aW9uYWwgQXV0aG9yaXphdGlvbiB0b2tlblxuICogQHJldHVybiB4aHJcbiAqL1xuZnVuY3Rpb24gX3JlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEpIHtcblxuXHQvLyBHZW5lcmF0ZSB0aGUgYWpheCBjb25maWdcblx0dmFyIG9Db25maWcgPSB7XG5cdFx0XCJiZWZvcmVTZW5kXCI6IGZ1bmN0aW9uKHhociwgc2V0dGluZ3MpIHtcblx0XHRcdHhoci5fdXJsID0gdXJsO1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGEgc2Vzc2lvblxuXHRcdFx0aWYoJ19zZXNzaW9uJyBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJjb250ZW50VHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcblx0XHRcImVycm9yXCI6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgYW4gQXV0aG9yaXphdGlvbiBlcnJvclxuXHRcdFx0aWYoeGhyLnN0YXR1cyA9PSA0MDEpIHtcblxuXHRcdFx0XHQvLyBDbGVhciB0aGUgY3VycmVudCB0b2tlblxuXHRcdFx0XHRfY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHV0IHRoZSBlcnJvciBpbiB0aGUgY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihtZXRob2QgKyAnICcgKyB4aHIuX3VybCArICcgcmV0dXJuZWQ6ICcgKyBlcnJvcik7XG5cblx0XHRcdC8vIFJldHVybiB0aGUgeGhyIHRvIHRoZSBlcnJvciBjYWxsYmFja1xuXHRcdFx0X2Vycm9yKHhocik7XG5cdFx0fSxcblx0XHRcIm1ldGhvZFwiOiBtZXRob2QsXG5cdFx0XCJ1cmxcIjogdXJsXG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZ2V0IHJlcXVlc3Rcblx0aWYobWV0aG9kID09ICdnZXQnKSB7XG5cdFx0aWYodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRvQ29uZmlnWydkYXRhJ10gPSBcImQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdH1cblx0fVxuXHQvLyBFbHNlIGl0J3MgYW55IG90aGVyIG1ldGhvZFxuXHRlbHNlIHtcblx0XHRvQ29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdC8vIE1ha2UgdGhlIHJlcXVlc3QgYW5kIHJldHVybiB0aGUgeGhyXG5cdHJldHVybiAkLmFqYXgob0NvbmZpZyk7XG59XG5cbi8qKlxuICogU3RvcmVcbiAqXG4gKiBTdG9yZXMgdGhlIHNlc3Npb24gdG9rZW4gaW4gbG9jYWwgc3RvcmFnZSBhbmQgY29va2llc1xuICpcbiAqIEBuYW1lIF9zdG9yZVxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gc3RyaW5nIHRva2VuXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3N0b3JlKHRva2VuKSB7XG5cblx0Ly8gU2V0IHRoZSBzZXNzaW9uIGluIGxvY2FsU3RvcmFnZVxuXHRsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10gPSB0b2tlblxuXG5cdC8vIFNldCB0aGUgc2Vzc2lvbiBpbiBhIGNvb2tpZVxuXHRDb29raWVzLnNldCgnX3Nlc3Npb24nLCB0b2tlbiwgODY0MDAsICcuJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSwgJy8nKTtcbn1cblxuLyoqXG4gKiBTdWNjZXNzXG4gKlxuICogSGFuZGxlcyBzdWNjZXNzIGZyb20geGhyXG4gKlxuICogQG5hbWUgX3N1Y2Nlc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHN0cmluZyByZXNcdFx0XHRUaGUgcmVzdWx0IGZyb20gdGhlIHNlcnZlclxuICogQHBhcmFtIHN0cmluZyBzdGF0dXNcdFx0XHRUaGUgc3RhdHVzIG9mIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0geGhyIHhoclx0XHRcdFx0VGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3N1Y2Nlc3MocmVzLCBzdGF0dXMsIHhocikge1xuXG5cdC8vIElmIHRoZSByZXN1bHQgaXMgYSBzdHJpbmdcblx0aWYodHlwZW9mIHJlcyA9PSAnc3RyaW5nJykge1xuXG5cdFx0Ly8gVHJ5IHRvIGNvbnZlciBpdCB0byBKU09OXG5cdFx0dHJ5IHtcblx0XHRcdHJlc1x0PSBKU09OLnBhcnNlKHJlcyk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobWV0aG9kICsgJyAnICsgeGhyLl91cmwgKyAnIHJldHVybmVkIGludmFsaWQgSlNPTjogJyArIGVycik7XG5cdFx0XHRyZXMgPSB7XCJlcnJvclwiOntcImNvZGVcIjowLFwibXNnXCI6ZXJyfX07XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogU2VydmljZXNcbiAqL1xudmFyIFNlcnZpY2VzID0ge1xuXG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqXG5cdCAqIEluaXRpYWxpc2VzIHRoZSBTZXJ2aWNlcyBtb2R1bGVzXG5cdCAqXG5cdCAqIEBuYW1lIGluaXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzdWJkb21haW5cdFx0VGhlIHN1Yi1kb21haW4gc2VydmljZXMgY2FuIGJlIHJlYWNoZWQgdGhyb3VnaFxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwiaW5pdFwiOiBmdW5jdGlvbihzdWJkb21haW4sIGVycm9yKSB7XG5cblx0XHQvLyBTdG9yZSB0aGUgZnVsbCBkb21haW4gbmFtZSBmb3Igc2VydmljZSBjYWxsc1xuXHRcdF9kb21haW4gPSAnLy8nICsgc3ViZG9tYWluICtcblx0XHRcdFx0XHQnLicgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xuXHRcdFx0XHRcdCcvJztcblxuXHRcdC8vIERvIHdlIGhhdmUgYSBzZXNzaW9uIGluIHN0b3JhZ2Vcblx0XHRpZignX3Nlc3Npb24nIGluIGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pIHtcblx0XHRcdHRoaXMuc2Vzc2lvbihsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pXG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBkbyB3ZSBoYXZlIG9uZSBpbiBhIGNvb2tpZVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGNvb2tpZSA9IENvb2tpZXMuZ2V0KCdfc2Vzc2lvbicpO1xuXHRcdFx0aWYoY29va2llKSB7XG5cdFx0XHRcdHRoaXMuc2Vzc2lvbihjb29raWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIGFuIGVycm9yIHdhcyBwYXNzZWRcblx0XHRpZih0eXBlb2YgZXJyb3IgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRfZXJyb3IgPSBlcnJvcjtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIENyZWF0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgY3JlYXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgY3JlYXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJjcmVhdGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgncG9zdCcsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIERlbGV0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgZGVsZXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgZGVsZXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJkZWxldGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgnZGVsZXRlJywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogUmVhZFxuXHQgKlxuXHQgKiBDYWxscyB0aGUgcmVhZCBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIHJlYWRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcInJlYWRcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgnZ2V0JywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogU2Vzc2lvblxuXHQgKlxuXHQgKiBTZXQgb3IgZ2V0IHRoZSBzZXNzaW9uIHRva2VuXG5cdCAqXG5cdCAqIEBuYW1lIHNlc3Npb25cblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyB0b2tlblx0XHRcdFRoZSB0b2tlbiB0byBzdG9yZVxuXHQgKiBAcmV0dXJuIHZvaWR8c3RyXG5cdCAqL1xuXHRcInNlc3Npb25cIjogZnVuY3Rpb24odG9rZW4pIHtcblxuXHRcdC8vIElmIHdlIGFyZSBzZXR0aW5nIHRoZSBzZXNzaW9uXG5cdFx0aWYodHlwZW9mIHRva2VuICE9PSAndW5kZWZpbmVkJykge1xuXG5cdFx0XHQvLyBJZiBudWxsIHdhcyBwYXNzZWQsIGRlbGV0ZSB0aGUgc2Vzc2lvblxuXHRcdFx0aWYodG9rZW4gPT0gbnVsbCkge1xuXHRcdFx0XHRfY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgc2V0IHRoZSBzZXNzaW9uXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X3N0b3JlKHRva2VuKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIGFyZSByZXR1cm5pbmcgdGhlIHNlc3Npb25cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiAoJ19zZXNzaW9uJyBpbiBsb2NhbFN0b3JhZ2UpID9cblx0XHRcdFx0bG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddIDpcblx0XHRcdFx0Jyc7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBVcGRhdGVcblx0ICpcblx0ICogQ2FsbHMgdGhlIHVwZGF0ZSBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIHVwZGF0ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gY2FsbFxuXHQgKiBAcGFyYW0gc3RyaW5nIG5vdW5cdFx0XHRUaGUgbm91biB0byBjYWxsIG9uIHRoZSBzZXJ2aWNlXG5cdCAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2Vcblx0ICogQHJldHVybiB4aHJcblx0ICovXG5cdFwidXBkYXRlXCI6IGZ1bmN0aW9uKHNlcnZpY2UsIG5vdW4sIGRhdGEpIHtcblx0XHRyZXR1cm4gX3JlcXVlc3QoJ3B1dCcsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH1cbn07XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2VzO1xuIiwiLyoqXG4gKiBUb29sc1xuICpcbiAqIFVzZWZ1bCBmdW5jdGlvbnMgdGhhdCBiZWxvbmcgdG8gYW55IHNwZWNpZmljIG1vZHVsZVxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjVcbiAqL1xuXG4vKipcbiAqIFRvb2xzXG4gKi9cbnZhciBUb29scyA9IHtcblxuXHQvKipcblx0ICogQ2xvbmVcblx0ICpcblx0ICogRGVlcCBjbG9uZSBhbnkgdHlwZSBvZiBvYmplY3QsIHJldHVybmluZyBhIG5ldyBvbmVcblx0ICpcblx0ICogQG5hbWUgY2xvbmVcblx0ICogQHBhcmFtIG1peGVkIG9cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byBjbG9uZVxuXHQgKiBAcmV0dXJuIG1peGVkXG5cdCAqL1xuXHRjbG9uZTogZnVuY3Rpb24obykge1xuXHRcdC8vIE5ldyB2YXJcblx0XHR2YXIgbiA9IG51bGw7XG5cblx0XHQvLyBJZiBpdCdzIGFuIGFycmF5XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgpKSB7XG5cdFx0XHRuID0gW107XG5cdFx0XHRmb3IodmFyIGkgaW4gbykge1xuXHRcdFx0XHRuLnB1c2goVG9vbHMuY2xvbmUob1trXSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdFxuXHRcdGVsc2UgaWYoVG9vbHMuaXNPYmplY3QobykpIHtcblx0XHRcdG4gPSB7fVxuXHRcdFx0Zm9yKHZhciBrIGluIG8pIHtcblx0XHRcdFx0bltrXSA9IFRvb2xzLmNsb25lKG9ba10pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGNvcHkgYXMgaXNcblx0XHRlbHNlIHtcblx0XHRcdG4gPSBvO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgbmV3IHZhclxuXHRcdHJldHVybiBuO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb21wYXJlXG5cdCAqXG5cdCAqIENvbXBhcmVzIHR3byB2YWx1ZXMgb2YgYW55IHR5cGUgdG8gc2VlIGlmIHRoZXkgY29udGFpbiB0aGUgc2FtZVxuXHQgKiBkYXRhIG9yIG5vdFxuXHQgKlxuXHQgKiBAbmFtZSBjb21wYXJlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCB2MVx0XHRcdFx0VGhlIGZpcnN0IHZhbHVlXG5cdCAqIEBwYXJhbSBtaXhlZCB2Mlx0XHRcdFx0VGhlIHNlY29uZCB2YWx1ZVxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGNvbXBhcmUodjEsIHYyKSB7XG5cblx0XHQvLyBJZiB0aGV5J3JlIGJvdGggYXJyYXlzXG5cdFx0aWYoQXJyYXkuaXNBcnJheSh2MSkgJiYgQXJyYXkuaXNBcnJheSh2MikpIHtcblxuXHRcdFx0Ly8gSWYgdGhleSBkb24ndCBoYXZlIHRoZSBzYW1lIGxlbmd0aFxuXHRcdFx0aWYodjEubGVuZ3RoICE9IHYyLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBhcmUgdGhlIHZhbHVlc1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHYxLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmKCFUb29scy5jb21wYXJlKHYxW2ldLCB2MltpXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIHRoZXkncmUgYm90aCBvYmplY3RzXG5cdFx0ZWxzZSBpZihUb29scy5pc09iamVjdCh2MSkgJiYgVG9vbHMuaXNPYmplY3QodjIpKSB7XG5cblx0XHRcdC8vIElmIHRoZXkgZG9uJ3QgaGF2ZSB0aGUgc2FtZSBrZXlzXG5cdFx0XHRpZighVG9vbHMuY29tcGFyZShPYmplY3Qua2V5cyh2MSkuc29ydCgpLCBPYmplY3Qua2V5cyh2Mikuc29ydCgpKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBhcmUgZWFjaCBrZXlcblx0XHRcdGZvcih2YXIgayBpbiB2MSkge1xuXHRcdFx0XHRpZighVG9vbHMuY29tcGFyZSh2MVtrXSwgdjJba10pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgY29tcGFyZSBhcyBpc1xuXHRcdGVsc2Uge1xuXHRcdFx0aWYodjEgIT09IHYyKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gZXF1YWxcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKipcblx0ICogRW1wdHlcblx0ICpcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSB0eXBlIGlzIGVtcHR5XG5cdCAqXG5cdCAqIEBuYW1lIGVtcHR5XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFsdWUgdG8gY2hlY2ssIGNhbiBiZSBvYmplY3QsIGFycmF5LCBzdHJpbmcsIGV0Y1xuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGVtcHR5OiBmdW5jdGlvbihtKSB7XG5cblx0XHQvLyBJZiBpdCdzIGFuIG9iamVjdFxuXHRcdGlmKFRvb2xzLmlzT2JqZWN0KG0pKSB7XG5cdFx0XHRmb3IodmFyIHAgaW4gbSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIGl0J3MgYW4gYXJyYXkgb3IgYSBzdHJpbmdcblx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkobSkgfHwgdHlwZW9mIG0gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBtLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZVxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBJZiBpdCdzIG51bGwgb3IgdW5kZWZpbmVkXG5cdFx0XHRpZih0eXBlb2YgbSA9PSAndW5kZWZpbmVkJyB8fCBtID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgcmV0dXJuIGZhbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBJcyBEZWNpbWFsXG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgYSBudW1iZXJcblx0ICpcblx0ICogQG5hbWUgaXNEZWNpbWFsXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFyaWFibGUgdG8gdGVzdFxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGlzRGVjaW1hbDogZnVuY3Rpb24obSkge1xuXHRcdHJldHVybiB0eXBlb2YgbSA9PSAnbnVtYmVyJztcblx0fSxcblxuXHQvKipcblx0ICogSXMgSW50ZWdlclxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgdHJ1ZSBpbnRlZ2VyXG5cdCAqXG5cdCAqIEBuYW1lIGlzSW50ZWdlclxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgbVx0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIHRlc3Rcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRpc0ludGVnZXI6IGZ1bmN0aW9uKG0pIHtcblx0XHRyZXR1cm4gbSA9PT0gK20gJiYgbSA9PT0gKG18MCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIElzIE9iamVjdFxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgdHJ1ZSBvYmplY3Rcblx0ICpcblx0ICogQG5hbWUgaXNPYmplY3Rcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byB0ZXN0XG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0aXNPYmplY3Q6IGZ1bmN0aW9uKG0pIHtcblx0XHRpZihtID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYodHlwZW9mIG0gIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblx0XHRpZihBcnJheS5pc0FycmF5KG0pKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIE9iamVjdCBNYXBcblx0ICpcblx0ICogV29ya3MgbGlrZSBtYXAgZm9yIGFycmF5cywgYnV0IGl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0XG5cdCAqXG5cdCAqIEBuYW1lIG9tYXBcblx0ICogQHBhcmFtIHtvYmplY3R9IG9cdFx0XHRUaGUgb2JqZWN0IHRvIG1hcFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1x0VGhlIGZ1bmN0aW9uIHRvIGNhbGwgZWFjaCBpdGVyYXRpb25cblx0ICogQHJldHVybiBhcnJheVxuXHQgKi9cblx0b21hcDogZnVuY3Rpb24obywgY2FsbGJhY2spIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0Zm9yKHZhciBrIGluIG8pIHtcblx0XHRcdHJldC5wdXNoKGNhbGxiYWNrKG9ba10sIGspKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvKipcblx0ICogVVVJRCB2NFxuXHQgKlxuXHQgKiBSZXR1cm5zIGEgcHN1ZWRvIHJhbmRvbSBzdHJpbmcgaW4gVVVJRCBmb3JtYXQgKE5PVCBBQ1RVQUxMWSBBIFVVSUQpXG5cdCAqXG5cdCAqIEBuYW1lIHV1aWR2NFxuXHQgKiBAcmV0dXJuIHN0clxuXHQgKi9cblx0dXVpZHY0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG5cdFx0XHQoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxuXHRcdClcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBUb29scztcbiIsIi8qKlxuICogV2Vic29ja2V0XG4gKlxuICogU2ltcGxpZmllcyB1c2luZyBhIHdlYnNvY2tldFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTctMDUtMTdcbiAqL1xuXG4vLyBFeHBvcnQgdGhlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCwgY29uZikge1xuXG5cdC8vIElmIHdlIGNhbid0IGhhbmRsZSB3ZWJzb2NrZXRzXG5cdGlmKCEoJ1dlYlNvY2tldCcgaW4gd2luZG93KSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ3dlYnNvY2tldDogV2ViU29ja2V0cyBub3Qgc3VwcG9ydGVkJyk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSWYgY29uZiBpcyBub3QgZGVmaW5lZFxuXHRpZih0eXBlb2YgY29uZiA9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbmYgPSB7fVxuXHR9XG5cblx0Ly8gRWxzZSwgaWYgaXQncyBub3QgYW4gb2JqZWN0LCB3ZSBoYXZlIGEgcHJvYmxlbVxuXHRlbHNlIGlmKHR5cGVvZiBjb25mICE9ICdvYmplY3QnKSB7XG5cdFx0Y29uc29sZS5lcnJvcignd2Vic29ja2V0OiBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIFdlYlNvY2tldFxuXHR2YXIgb1NvY2sgPSBuZXcgV2ViU29ja2V0KHVybCk7XG5cblx0Ly8gQWRkIHRoZSBVUkwgdG8gdGhlIGluc3RhbmNlXG5cdG9Tb2NrLnVybCA9IHVybDtcblxuXHQvLyBTZXQgdGhlIG9wZW4gY2FsbGJhY2tcblx0b1NvY2sub25vcGVuID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJZiBhbiBvcGVuIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdvcGVuJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydvcGVuJ10ob1NvY2spO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGp1c3QgbG9nIHRoZSBldmVudFxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3dlYnNvY2tldDogb3BlbmVkJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBtZXNzYWdlIGNhbGxiYWNrXG5cdG9Tb2NrLm9ubWVzc2FnZVx0PSBmdW5jdGlvbihldikge1xuXG5cdFx0Ly8gSWYgYSBtZXNzYWdlIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdtZXNzYWdlJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydtZXNzYWdlJ10ob1NvY2ssIGV2KTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IG1lc3NhZ2UgcmVjZWl2ZWQsIFwiJyArIGV2LmRhdGEgKyAnXCInKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGVycm9yIGNhbGxiYWNrXG5cdG9Tb2NrLm9uZXJyb3IgPSBmdW5jdGlvbihldikge1xuXG5cdFx0Ly8gSWYgYW4gZXJyb3IgY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ2Vycm9yJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydlcnJvciddKG9Tb2NrLCBldik7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBlcnJvciwgXCInICsgSlNPTi5zdHJpbmdpZnkoZXYpICsgJ1wiJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBjbG9zZSBjYWxsYmFja1xuXHRvU29jay5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJZiBhIGNsb3NlIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdjbG9zZScgaW4gY29uZikge1xuXHRcdFx0Y29uZlsnY2xvc2UnXShvU29jayk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBjbG9zZWQnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHNvY2tldFxuXHRyZXR1cm4gb1NvY2s7XG59XG4iLCIvLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIHNwZWNpZmljXG52YXIgUmVxdWVzdHMgPSByZXF1aXJlKCcuL3JlcXVlc3RzLmpzJyk7XG5cbi8vIENvbXBvbmVudHNcbnZhciBTaXRlID0gcmVxdWlyZSgnLi9yZWFjdC9zaXRlLmpzeCcpO1xuXG4oZnVuY3Rpb24oKSB7XG5cblx0Ly8gUmVuZGVyIHRoZSBMb2dpbkNvbXBvbmVudFxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0UmVhY3QuY3JlYXRlRWxlbWVudChTaXRlLCB7fSksXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0Jylcblx0KTtcblxuXHQvLyBJbml0IHRoZSByZXF1ZXN0c1xuXHRSZXF1ZXN0cy5pbml0KCk7XG5cblx0Ly8gSW5pdCB0aGUgc2VydmljZXNcblx0U2VydmljZXMuaW5pdChcInNlcnZpY2VzXCIsIGZ1bmN0aW9uKHhocikge1xuXG5cdFx0Ly8gSWYgd2UgZ290IGEgNDAxLCBsZXQgZXZlcnlvbmUga25vdyB3ZSBzaWduZWQgb3V0XG5cdFx0aWYoeGhyLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdZb3UgaGF2ZSBiZWVuIHNpZ25lZCBvdXQhJyk7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignc2lnbm91dCcpO1xuXHRcdH1cblx0fSk7XG5cblx0Ly8gSWYgd2UgaGF2ZSBhIHNlc3Npb24sIGZldGNoIHRoZSB0aHJvd2VyXG5cdGlmKFNlcnZpY2VzLnNlc3Npb24oKSkge1xuXHRcdExvYWRlci5zaG93KCk7XG5cdFx0U2VydmljZXMucmVhZCgnYXV0aCcsICdzZXNzaW9uJywge30pLmRvbmUocmVzID0+IHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWduaW4nLCByZXMuZGF0YSk7XG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0TG9hZGVyLmhpZGUoKTtcblxuXHQvLyBNYWtlIEV2ZW50cyBhdmFpbGFibGUgZnJvbSBjb25zb2xlXG5cdHdpbmRvdy5FdmVudHMgPSBFdmVudHM7XG59KSgpO1xuXG4vLyBFeHBvcnRcbm1vZHVsZS5leHBvcnRzID0gbnVsbDtcbiIsIi8qKlxuICogRm9ybXMgTW9kdWxlXG4gKlxuICogQ2xhc3NlcyBhbmQgZnVuY3Rpb25zIHVzZWQgYnkgYWxsIGZvcm1zXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IEZVRUwgZm9yIHRoZSBGSVJFXG4gKiBAY3JlYXRlIDIwMTgtMTItMDhcbiAqL1xuXG4vLyBFcnJvciBjbGFzcyBkZWZpbmVcbnZhciBFUlJPUl9DTEFTUyA9ICdlcnJvcic7XG5cbi8qKlxuICogQWRkIENsYXNzXG4gKlxuICogQWRkcyB0aGUgZXJyb3IgY2xhc3MgbmFtZSB0byBhbiBlbGVtZW50XG4gKlxuICogQG5hbWUgX2FkZENsYXNzXG4gKiBAYWNjZXNzIHByaXZhdGVcbiAqIEBwYXJhbSBFbGVtZW50IGVsXHRUaGUgZWxlbWVudCB0byByZW1vdmUgdGhlIGNsYXNzIGZyb21cbiAqL1xuZnVuY3Rpb24gX2FkZENsYXNzKGVsKSB7XG5cdGlmKCFlbC5jbGFzc05hbWUpIHtcblx0XHRlbC5jbGFzc05hbWUgPSBFUlJPUl9DTEFTUztcblx0fSBlbHNlIHtcblx0XHRsZXQgbmFtZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRpZihuYW1lcy5pbmRleE9mKEVSUk9SX0NMQVNTKSA9PSAtMSkge1xuXHRcdFx0bmFtZXMucHVzaChFUlJPUl9DTEFTUyk7XG5cdFx0XHRlbC5jbGFzc05hbWUgPSBuYW1lcy5qb2luKCcgJyk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUmVtb3ZlIENsYXNzXG4gKlxuICogUmVtb3ZlcyB0aGUgZXJyb3IgY2xhc3MgbmFtZSBmcm9tIGFuIGVsZW1lbnRcbiAqXG4gKiBAbmFtZSBfcmVtb3ZlQ2xhc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIEVsZW1lbnQgZWxcdFRoZSBlbGVtZW50IHRvIHJlbW92ZSB0aGUgY2xhc3MgZnJvbVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9yZW1vdmVDbGFzcyhlbCkge1xuXHRpZihlbC5jbGFzc05hbWUuaW5jbHVkZXMoRVJST1JfQ0xBU1MpKSB7XG5cdFx0bGV0IG5hbWVzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cdFx0bmFtZXMuc3BsaWNlKG5hbWVzLmluZGV4T2YoRVJST1JfQ0xBU1MpLCAxKTtcblx0XHRlbC5jbGFzc05hbWUgPSBuYW1lcy5qb2luKCcgJylcblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIEJhc2UgTm9kZSBDb21wb25lbnRcbmNsYXNzIF9CYXNlTm9kZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRlcnJvcnMoZXJyb3JzKSB7XG5cdFx0Zm9yKGxldCBrIGluIGVycm9ycykge1xuXHRcdFx0aWYodGhpcy5yZWZzW2tdLmVycm9ycykge1xuXHRcdFx0XHR0aGlzLnJlZnNba10uZXJyb3JzKGVycm9yc1trXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfYWRkQ2xhc3ModGhpcy5yZWZzW2tdKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cblxuLy8gQ3JlYXRlIHRoZSBBcnJheSBGb3JtIENvbXBvbmVudFxuY2xhc3MgQXJyYXlOb2RlIGV4dGVuZHMgX0Jhc2VOb2RlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmV0dXJuXG5cdFx0dmFyIHZhbHVlID0gW11cblxuXHRcdC8vIEdvIHRocm91Z2ggYWxsIHJlZnNcblx0XHRmb3IodmFyIHIgaW4gdGhpcy5yZWZzKSB7XG5cdFx0XHRpZih0aGlzLnJlZnNbcl0udHlwZSAmJiB0aGlzLnJlZnNbcl0udHlwZSA9PSAnY2hlY2tib3gnKSB7XG5cdFx0XHRcdHZhbHVlLnB1c2godGhpcy5yZWZzW3JdLmNoZWNrZWQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUucHVzaCh0aGlzLnJlZnNbcl0udmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgdmFsdWVzXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9XG59XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0ZXJyb3JzKG1zZykge1xuXHRcdGlmKHRoaXMucmVmcy5lbC5lcnJvcnMpIHtcblx0XHRcdHRoaXMucmVmcy5lbC5lcnJvcnMobXNnKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2FkZENsYXNzKHRoaXMucmVmcy5lbCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IHZhbHVlKCkge1xuXHRcdHJldHVybiB0aGlzLnJlZnMuZWwudmFsdWU7XG5cdH1cblxuXHRzZXQgdmFsdWUodikge1xuXHRcdHRoaXMucmVmcy5lbC52YWx1ZSA9IHY7XG5cdFx0aWYodGhpcy52YWx1ZVNldCkge1xuXHRcdFx0dGhpcy52YWx1ZVNldCgpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIGJhc2UgQ29tcG9uZW50XG5jbGFzcyBQYXJlbnQgZXh0ZW5kcyBfQmFzZU5vZGUge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cblx0XHQvLyBJbml0IHRoZSByZXR1cm5cblx0XHR2YXIgdmFsdWUgPSB7fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBhbGwgcmVmc1xuXHRcdGZvcih2YXIgciBpbiB0aGlzLnJlZnMpIHtcblx0XHRcdGlmKHRoaXMucmVmc1tyXS50eXBlICYmIHRoaXMucmVmc1tyXS50eXBlID09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0dmFsdWVbcl0gPSB0aGlzLnJlZnNbcl0uY2hlY2tlZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhbHVlW3JdID0gdGhpcy5yZWZzW3JdLnZhbHVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgdmFsdWVcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRBcnJheU5vZGU6IEFycmF5Tm9kZSxcblx0Tm9kZTogTm9kZSxcblx0UGFyZW50OiBQYXJlbnQsXG5cdGVycm9yQWRkOiBfYWRkQ2xhc3MsXG5cdGVycm9yUmVtb3ZlOiBfcmVtb3ZlQ2xhc3MsXG5cdGVycm9yRm9jdXM6IGZ1bmN0aW9uKGV2KSB7XG5cblx0XHQvLyBJZiB0aGUgc3BlY2lhbCBlbGVtZW50cyBwcm9wIGlzIHNldFxuXHRcdGlmKGV2LmVsZW1lbnRzKSB7XG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXYuZWxlbWVudHMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0X3JlbW92ZUNsYXNzKGV2LmVsZW1lbnRzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlLCBhc3N1bWluZyBjdXJyZW50VGFyZ2V0XG5cdFx0ZWxzZSB7XG5cdFx0XHRfcmVtb3ZlQ2xhc3MoZXYuY3VycmVudFRhcmdldCk7XG5cdFx0fVxuXHR9XG59O1xuIiwiLyoqXG4gKiBJbnB1dCBFbnRlclxuICpcbiAqIEFuIGlucHV0IGJveCB0aGF0IGhhbmRsZXMgRW50ZXIga2V5IHByZXNzZXMgYW5kIHNlbmRzIHRoZW0gdG8gYSBvbkVudGVyXG4gKiBjYWxsYmFja1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBGVUVMIGZvciB0aGUgRklSRVxuICogQGNyZWF0ZWQgMjAxOC0xMi0wMVxuICovXG5cbi8vIFJlYWN0IEJhc2VcbnZhciBGb3JtcyA9IHJlcXVpcmUoJy4uL2Jhc2UvZm9ybXMuanN4Jyk7XG5cbi8vIENyZWF0ZSB0aGUgQ29tcG9uZW50XG5jbGFzcyBJbnB1dEVudGVyIGV4dGVuZHMgRm9ybXMuTm9kZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBjYWxsYmFja1xuXHRcdHRoaXMub25FbnRlciA9IHByb3BzLm9uRW50ZXI7XG5cdFx0ZGVsZXRlIHRoaXMucHJvcHMub25FbnRlcjtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fVxuXG5cdFx0Ly8gQmluZCBmdW5jdGlvbnNcblx0XHR0aGlzLmtleVByZXNzID0gdGhpcy5rZXlQcmVzcy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0a2V5UHJlc3MoZXYpIHtcblxuXHRcdC8vIElmIGFuIEVudGVyIGtleSB3YXMgcHJlc3NlZCBhbmQgdGhlIGNhbGxiYWNrIHdhcyBzZXRcblx0XHRpZihldi5rZXkgPT0gJ0VudGVyJyAmJiB0aGlzLm9uRW50ZXIpIHtcblx0XHRcdHRoaXMub25FbnRlcihldi5jdXJyZW50VGFyZ2V0LnZhbHVlKTtcblx0XHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIG9uS2V5UHJlc3MgY2FsbGJhY2tcblx0XHRpZih0aGlzLnByb3BzLm9uS2V5UHJlc3MpIHtcblx0XHRcdHRoaXMucHJvcHMub25LZXlQcmVzcyhldik7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgb25FbnRlciwgLi4ucmVzdCB9ID0gdGhpcy5wcm9wc1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0ey4uLnJlc3R9XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0cmVmPVwiZWxcIlxuXHRcdFx0XHRvbktleVByZXNzPXt0aGlzLmtleVByZXNzfVxuXHRcdFx0Lz5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IElucHV0RW50ZXI7XG4iLCIvKipcbiAqIE1lbnUgQ29tcG9uZW50XG4gKlxuICogQSBjb21wb25lbnQgdG8gZGlzcGxheSBhIG1lbnUgb24gdGhlIHNjcmVlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMTFcbiAqL1xuXG4vLyBDcmVhdGUgdGhlIE1lbnUgQ29tcG9uZW50XG5jbGFzcyBNZW51IGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudFxue1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gU2V0IHRoZSBiYXNlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHNlbGVjdGVkOiB0aGlzLnByb3BzLnNlbGVjdGVkXG5cdFx0fTtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gY2xvc2Vcblx0XHRpZighdGhpcy5wcm9wcy5vbkNoYW5nZSkge1xuXHRcdFx0dGhyb3cgJ01lbnUgcmVxdWlyZXMgb25DaGFuZ2UgY2FsbGJhY2snO1xuXHRcdH1cblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuaXRlbUNsaWNrID0gdGhpcy5pdGVtQ2xpY2suYmluZCh0aGlzKTtcblx0fVxuXG5cdGl0ZW1DbGljayhuYW1lKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiBuYW1lfSwgKCkgPT4ge1xuXHRcdFx0c2VsZi5wcm9wcy5vbkNoYW5nZShuYW1lKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlckNoaWxkcmVuKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKHRoaXMucHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaSkgPT4ge1xuXHRcdFx0dmFyIHN0YXR1cyA9IChzZWxmLnN0YXRlLnNlbGVjdGVkID09IGNoaWxkLnByb3BzLm5hbWUpID8gJ2FjdGl2ZScgOiAnJztcblx0XHRcdHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcblx0XHRcdFx0b25DbGljazogc2VsZi5pdGVtQ2xpY2ssXG5cdFx0XHRcdGNsYXNzTmFtZTogc3RhdHVzXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdFx0e3RoaXMucmVuZGVyQ2hpbGRyZW4oKX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRnZXQgc2VsZWN0ZWQoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhdGUuc2VsZWN0ZWQ7XG5cdH1cblxuXHRzZXQgc2VsZWN0ZWQobikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NlbGVjdGVkOiBufSlcblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIE1lbnUgSXRlbSBDb21wb25lbnRcbmNsYXNzIEl0ZW0gZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50XG57XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIGJhc2Ugc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge307XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIG5hbWVcblx0XHRpZighdGhpcy5wcm9wcy5uYW1lKSB7XG5cdFx0XHR0aHJvdyAnSXRlbSByZXF1aXJlcyBuYW1lIGF0dHJpYnV0ZSc7XG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5jbGljayA9IHRoaXMuY2xpY2suYmluZCh0aGlzKTtcblx0fVxuXG5cdGNsaWNrKGV2KSB7XG5cdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0ZXYucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnByb3BzLm9uQ2xpY2sodGhpcy5wcm9wcy5uYW1lKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPXt0aGlzLnByb3BzLmNsYXNzTmFtZX0gb25DbGljaz17dGhpcy5jbGlja30+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9zcGFuPlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IGNvbXBvbmVudHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIk1lbnVcIjogTWVudSxcblx0XCJJdGVtXCI6IEl0ZW1cbn1cbiIsIi8qKlxuICogTWVzc2FnZXNcbiAqXG4gKiBTaG93cyBhIG1lc3NhZ2Ugd2l0aCBidXR0b25zIHRvIGFjY2VwdCwgZGlzbWlzcywgZXRjXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0zMVxuICovXG5cbi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIFRvb2xzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy90b29scy5qcycpO1xuXG4vLyBNYWtlIHN1cmUgdGhlcmUgaXNuJ3QgbW9yZSB0aGFuIG9uZSBNZXNzYWdlc1xudmFyIF9pbnN0YW5jZSA9IGZhbHNlO1xuXG4vLyBDcmVhdGUgdGhlIG1lc3NhZ2UgY29tcG9uZW50XG5jbGFzcyBNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5idXR0b24gPSB0aGlzLmJ1dHRvbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YnV0dG9uKGV2KSB7XG5cblx0XHQvLyBDYWxsIHRoZSBjYWxsYmFjayBhc3NvY2lhdGVkLCBpZiBpdCByZXR1cm5zIHN1Y2Nlc3NmdWwsIHJlbW92ZSB0aGVcblx0XHQvL1x0bWVzc2FnZVxuXHRcdGlmKHRoaXMucHJvcHMuYnV0dG9uc1tldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaW5kZXhdLmNhbGxiYWNrKHRoaXMucHJvcHMuaWQpKSB7XG5cdFx0XHR0aGlzLnByb3BzLnJlbW92ZSh0aGlzLnByb3BzLmlkKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1lc3NhZ2VcIj5cblx0XHRcdFx0PHA+e3NlbGYucHJvcHMudGV4dH08L3A+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHRcdHtzZWxmLnByb3BzLmJ1dHRvbnMubWFwKGZ1bmN0aW9uKGIsIGkpIHtcblx0XHRcdFx0XHRcdHJldHVybiA8YnV0dG9uIGtleT17aX0gZGF0YS1pbmRleD17aX0gb25DbGljaz17c2VsZi5idXR0b259PntiLnRpdGxlfTwvYnV0dG9uPlxuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gQ3JlYXRlIHRoZSBwcmltYXJ5IGNvbXBvbmVudFxuY2xhc3MgTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYW4gaW5zdGFuY2Vcblx0XHRpZihfaW5zdGFuY2UpIHtcblx0XHRcdHRocm93ICdDYW5cXCd0IGhhdmUgbW9yZSB0aGFuIG9uZSBNZXNzYWdlcyc7XG5cdFx0fVxuXHRcdF9pbnN0YW5jZSA9IHRydWU7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0bWVzc2FnZXM6IFtdXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMubWVzc2FnZSA9IHRoaXMubWVzc2FnZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVtb3ZlID0gdGhpcy5yZW1vdmUuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHQvLyBUcmFjayBhbnkgbWVzc2FnZSBldmVudHNcblx0XHRFdmVudHMuYWRkKCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlKTtcblx0XHRFdmVudHMuYWRkKCdtZXNzYWdlX3JlbW92ZScsIHRoaXMucmVtb3ZlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IG1lc3NhZ2UgZXZlbnRzXG5cdFx0RXZlbnRzLnJlbW92ZSgnbWVzc2FnZScsIHRoaXMubWVzc2FnZSk7XG5cdFx0RXZlbnRzLnJlbW92ZSgnbWVzc2FnZV9yZW1vdmUnLCB0aGlzLnJlbW92ZSk7XG5cdH1cblxuXHRtZXNzYWdlKGlkLCBjb25mKSB7XG5cblx0XHQvLyBDbG9uZSB0aGUgbWVzc2FnZXNcblx0XHR2YXIgbXNncyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuXG5cdFx0Ly8gUHVzaCB0aGUgbmV3IG1lc3NhZ2Vcblx0XHRtc2dzW2lkXSA9IGNvbmY7XG5cblx0XHQvLyBTZXQgdGhlIHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtZXNzYWdlc1wiOiBtc2dzfSk7XG5cdH1cblxuXHRyZW1vdmUoaWQpIHtcblxuXHRcdC8vIENsb25lIHRoZSBtZXNzYWdlc1xuXHRcdHZhciBtc2dzID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIHJlcXVlc3RlZCBJRFxuXHRcdGRlbGV0ZSBtc2dzW2lkXTtcblxuXHRcdC8vIFNldCB0aGUgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1lc3NhZ2VzXCI6IG1zZ3N9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJtZXNzYWdlc1wiPlxuXHRcdFx0XHR7VG9vbHMub21hcCh0aGlzLnN0YXRlLm1lc3NhZ2VzLCBmdW5jdGlvbihtLCBrKSB7XG5cdFx0XHRcdFx0cmV0dXJuIDxNZXNzYWdlIHsuLi5tfSBrZXk9e2t9IGlkPXtrfSByZW1vdmU9e3NlbGYucmVtb3ZlfSAvPlxuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBDb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTWVzc2FnZXNcbiIsIi8qKlxuICogTW9kZWwgQ29tcG9uZW50XG4gKlxuICogQSBjb21wb25lbnQgdG8gZGlzcGxheSBhIG1vZGFsIGJveCBvbiB0aGUgc2NyZWVuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0xMVxuICovXG5cbi8vIENyZWF0ZSB0aGUgQ29tcG9uZW50XG5jbGFzcyBNb2RhbCBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gY2xvc2Vcblx0XHRpZighdGhpcy5wcm9wcy5jbG9zZSkge1xuXHRcdFx0dGhyb3cgJ01vZGFsIHJlcXVpcmVzIGNsb3NlIGNhbGxiYWNrJztcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmJ1dHRvbkNsaWNrID0gdGhpcy5idXR0b25DbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMudHJhcEVzY2FwZSA9IHRoaXMudHJhcEVzY2FwZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Ly8gSWYgYSBidXR0b24gaXMgcHVzaGVkXG5cdGJ1dHRvbkNsaWNrKGV2KSB7XG5cblx0XHQvLyBHZXQgdGhlIGJ1dHRvbiB1c2luZyB0aGUgaW5kZXhcblx0XHR2YXIgYnRuID0gdGhpcy5wcm9wcy5idXR0b25zW2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF07XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgY2FsbGJhY2tcblx0XHRpZih0eXBlb2YgYnRuLmNhbGxiYWNrID09ICdmdW5jdGlvbicpIHtcblx0XHRcdGJ0bi5jYWxsYmFjayhidG4pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnByb3BzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdC8vIFRyYXAgdGhlIGVzY2FwZSBrZXlcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy50cmFwRXNjYXBlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdC8vIFN0b3AgdHJhcHBpbmcgdGhlIGVzY2FwZSBrZXlcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy50cmFwRXNjYXBlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBHZW5lcmF0ZSB0aGUgc3R5bGVzXG5cdFx0dmFyIHN0eWxlcyA9IHt9XG5cdFx0aWYodGhpcy5wcm9wcy5oZWlnaHQpIHN0eWxlcy5oZWlnaHQgPSB0aGlzLnByb3BzLmhlaWdodDtcblx0XHRpZih0aGlzLnByb3BzLm1heEhlaWdodCkgc3R5bGVzLm1heEhlaWdodCA9IHRoaXMucHJvcHMubWF4SGVpZ2h0O1xuXHRcdGlmKHRoaXMucHJvcHMubWF4V2lkdGgpIHN0eWxlcy5tYXhIZWlnaHQgPSB0aGlzLnByb3BzLm1heEhlaWdodDtcblx0XHRpZih0aGlzLnByb3BzLndpZHRoKSBzdHlsZXMud2lkdGggPSB0aGlzLnByb3BzLndpZHRoO1xuXG5cdFx0Ly8gUmV0dXJuIHRoZSBIVE1MXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjZWxsXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBzdHlsZT17c3R5bGVzfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS13aW5kb3ctY2xvc2VcIiBvbkNsaWNrPXt0aGlzLnByb3BzLmNsb3NlfT48L2k+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPnt0aGlzLnByb3BzLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmNoaWxkcmVufVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5idXR0b25zICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24oYnRuLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGRhdGEtaW5kZXg9e2l9IGNsYXNzTmFtZT1cInNtYWxsXCIgb25DbGljaz17c2VsZi5idXR0b25DbGlja30gZGlzYWJsZWQ9e2J0blsnZGlzYWJsZWQnXX0+e2J0blsnbmFtZSddfTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0Ly8gVHJhcHMgRVNDIGtleSBjbGlja3Mgc28gd2UgY2FuIGNsb3NlIHRoZSBNb2RhbCB3aW5kb3dcblx0dHJhcEVzY2FwZShldikge1xuXHRcdGlmKGV2LmtleUNvZGUgPT09IDI3KSB7XG5cdFx0XHR0aGlzLnByb3BzLmNsb3NlKCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IE1vZGFsO1xuIiwiLyoqXG4gKiBQb3B1cHNcbiAqXG4gKiBTaG93cyBhIHBvcHVwIG9mIHR5cGUgZXJyb3IsIHN1Y2Nlc3MsIG9yIHdhcm5pbmdcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTEyLTA4XG4gKi9cblxuLy8gRGVmaW5lc1xudmFyIFNVQ0NFU1NfVElNRU9VVCA9IDIwMDA7XG52YXIgRVJST1JfVElNRU9VVCA9IDEwMDAwO1xudmFyIFdBUk5JTkdfVElNRU9VVCA9IDUwMDA7XG52YXIgU1RFUF9USU1FT1VUID0gMjA7XG52YXIgV0lEVEhfU1RFUFMgPSA0MDtcbnZhciBIRUlHSFRfU1RFUFMgPSAyMDtcbnZhciBNQVJHSU4gPSA1O1xuXG4vLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBUb29scyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvdG9vbHMuanMnKTtcblxuLy8gTWFrZSBzdXJlIHRoZXJlIGlzbid0IG1vcmUgdGhhbiBvbmUgUG9wdXBzXG52YXIgX2luc3RhbmNlID0gZmFsc2U7XG5cbi8vIENyZWF0ZSB0aGUgQ29tcG9uZW50XG5jbGFzcyBQb3B1cHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgYW4gaW5zdGFuY2Vcblx0XHRpZihfaW5zdGFuY2UpIHtcblx0XHRcdHRocm93ICdDYW5cXCd0IGhhdmUgbW9yZSB0aGFuIG9uZSBQb3B1cHMnO1xuXHRcdH1cblx0XHRfaW5zdGFuY2UgPSB0cnVlO1xuXG5cdFx0Ly8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdHBvcHVwczogW10sXG5cdFx0XHR0aW1lcjogbnVsbFxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmVycm9yID0gdGhpcy5lcnJvci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9wdXAgPSB0aGlzLnBvcHVwLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcm9jZXNzID0gdGhpcy5wcm9jZXNzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy53YXJuaW5nID0gdGhpcy53YXJuaW5nLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Ly8gVHJhY2sgYW55IHBvcHVwIGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ2Vycm9yJywgdGhpcy5lcnJvcik7XG5cdFx0RXZlbnRzLmFkZCgncG9wdXAnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMuYWRkKCdzdWNjZXNzJywgdGhpcy5wb3B1cCk7XG5cdFx0RXZlbnRzLmFkZCgnd2FybmluZycsIHRoaXMud2FybmluZyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBwb3B1cCBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdlcnJvcicsIHRoaXMuZXJyb3IpO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3BvcHVwJywgdGhpcy5wb3B1cCk7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc3VjY2VzcycsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3dhcm5pbmcnLCB0aGlzLndhcm5pbmcpO1xuXHR9XG5cblx0ZXJyb3IobXNnKSB7XG5cdFx0dGhpcy5wb3B1cChtc2csICdlcnJvcicpO1xuXHR9XG5cblx0cHJvY2VzcygpIHtcblxuXHRcdC8vIENsb25lIHRoZSBzdGF0ZVxuXHRcdHZhciBzdGF0ZSA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUpO1xuXG5cdFx0Ly8gSWYgd2Ugd2VyZSB3YWl0aW5nXG5cdFx0aWYoc3RhdGUudGltZXIuc3RlcCA9PSAwKSB7XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBwcm9jZXNzIHRvIGhpZGUgdGhlIGZpcnN0IHBvcHVwXG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2wnXSA9IE1BUkdJTjtcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnciddID0gTUFSR0lOO1xuXG5cdFx0XHQvLyBTdGFydCB0aGUgc3RlcCB0aW1lb3V0c1xuXHRcdFx0c3RhdGUudGltZXIucmVzID0gc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIFNURVBfVElNRU9VVCk7XG5cdFx0XHRzdGF0ZS50aW1lci5zdGVwID0gMTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIG5lZWQgdG8gbW92ZSB0aGUgZmlyc3QgcG9wdXAgb2ZmIHRoZSBzY3JlZW5cblx0XHRlbHNlIGlmKHN0YXRlLnRpbWVyLnN0ZXAgPj0gMSAmJiBzdGF0ZS50aW1lci5zdGVwIDw9IDQwKSB7XG5cblx0XHRcdC8vIEdldCB0aGUgaW5uZXIgd2lkdGggb2YgdGhlIHNjcmVlbiBhbmQgZGl2aWRlIGJ5IHRoZSBzdGVwc1xuXHRcdFx0dmFyIHN0ZXAgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIFdJRFRIX1NURVBTO1xuXG5cdFx0XHQvLyBTdWJ0cmFjdCBpdCBmcm9tIHRoZSBsZWZ0IGFuZCByaWdodFxuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydsJ10gLT0gc3RlcDtcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnciddICs9IHN0ZXA7XG5cblx0XHRcdC8vIFNldCB0aGUgbmV4dCB0aW1lb3V0XG5cdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgU1RFUF9USU1FT1VUKTtcblx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgKz0gMTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIG5lZWQgdG8gbW92ZSB0aGUgZmlyc3QgcG9wdXAgdXBcblx0XHRlbHNlIGlmKHN0YXRlLnRpbWVyLnN0ZXAgPj0gNDEgJiYgc3RhdGUudGltZXIuc3RlcCA8PSA2MCkge1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSBvbiB0aGUgZmlyc3Qgc3RlcFxuXHRcdFx0aWYoc3RhdGUudGltZXIuc3RlcCA9PSA0MSkge1xuXHRcdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ29oJ10gPSB0aGlzLnJlZnNbXCIwXCJdLm9mZnNldEhlaWdodDtcblx0XHRcdFx0c3RhdGUucG9wdXBzWzBdWydoJ10gPSB0aGlzLnJlZnNbXCIwXCJdLm9mZnNldEhlaWdodDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gR2V0IHRoZSBoZWlnaHQgb2YgdGhlIGRpdiBhbmQgZGl2aWRlIGJ5IHRoZSBzdGVwc1xuXHRcdFx0dmFyIHN0ZXAgPSBzdGF0ZS5wb3B1cHNbMF1bJ29oJ10gLyBIRUlHSFRfU1RFUFM7XG5cblx0XHRcdC8vIFN1YnRyYWN0IGl0IGZyb20gdGhlIGN1cnJlbnQgaGVpZ2h0XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2gnXSAtPSBzdGVwO1xuXG5cdFx0XHQvLyBTZXQgdGhlIG5leHQgdGltZW91dFxuXHRcdFx0c3RhdGUudGltZXIucmVzID0gc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIFNURVBfVElNRU9VVCk7XG5cdFx0XHRzdGF0ZS50aW1lci5zdGVwICs9IDE7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSBuZWVkIHRvIHJlbW92ZSB0aGUgcG9wdXAgY29tcGxldGVseVxuXHRcdGVsc2UgaWYoc3RhdGUudGltZXIuc3RlcCA9PSA2MSkge1xuXG5cdFx0XHQvLyBSZW1vdmUgdGhlIGN1cnJlbnQgZmlyc3QgcG9wdXBcblx0XHRcdHN0YXRlLnBvcHVwcy5zcGxpY2UoMCwgMSk7XG5cblx0XHRcdC8vIElmIHdlIHN0aWxsIGhhdmUgcG9wdXBzXG5cdFx0XHRpZihzdGF0ZS5wb3B1cHMubGVuZ3RoKSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdGhlIHRpbWVyIHN0ZXBzXG5cdFx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBzdGF0ZS5wb3B1cHNbMF0udGltZW91dCk7XG5cdFx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgPSAwO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlLCBubyBtb3JlIHRpbWVvdXRzXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3RhdGUudGltZXIgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGlkPVwicG9wdXBzXCIgc3R5bGU9e3tkaXNwbGF5OiB0aGlzLnN0YXRlLnBvcHVwcy5sZW5ndGggPyAnYmxvY2snIDogJ25vbmUnfX0+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnBvcHVwcy5tYXAoKG1zZywgaSkgPT4ge1xuXHRcdFx0XHRcdGxldCBzdHlsZSA9IHt9XG5cdFx0XHRcdFx0aWYodHlwZW9mIG1zZy5sICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5MZWZ0ID0gbXNnLmwgKyAncHgnO1xuXHRcdFx0XHRcdFx0c3R5bGUubWFyZ2luUmlnaHQgPSBtc2cuciArICdweCc7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHR5cGVvZiBtc2cuaCAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0c3R5bGUuaGVpZ2h0ID0gbXNnLmggKyAncHgnO1xuXHRcdFx0XHRcdFx0c3R5bGUucGFkZGluZyA9IDA7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5Cb3R0b20gPSAwO1xuXHRcdFx0XHRcdFx0c3R5bGUubWFyZ2luVG9wID0gMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l9IHJlZj17XCJcIiArIGl9IGNsYXNzTmFtZT17bXNnLnR5cGV9IHN0eWxlPXtzdHlsZX0+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT17XCJmYXMgZmEtXCIgKyBtc2cuaWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0e21zZy50ZXh0fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHR9KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRwb3B1cCh0ZXh0LCB0eXBlKSB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIHR5cGVcblx0XHRpZih0eXBlb2YgdHlwZSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dHlwZSA9ICdzdWNjZXNzJztcblx0XHR9XG5cblx0XHR2YXIgaVRpbWVvdXQgPSAwO1xuXHRcdHZhciBzSWNvbiA9ICcnO1xuXHRcdHN3aXRjaCh0eXBlKSB7XG5cdFx0XHRjYXNlICdzdWNjZXNzJzpcblx0XHRcdFx0aVRpbWVvdXQgPSBTVUNDRVNTX1RJTUVPVVQ7XG5cdFx0XHRcdHNJY29uID0gJ2NoZWNrLWNpcmNsZSc7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnZXJyb3InOlxuXHRcdFx0XHRpVGltZW91dCA9IEVSUk9SX1RJTUVPVVQ7XG5cdFx0XHRcdHNJY29uID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IodGV4dCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAnd2FybmluZyc6XG5cdFx0XHRcdGlUaW1lb3V0ID0gV0FSTklOR19USU1FT1VUO1xuXHRcdFx0XHRzSWNvbiA9ICdleGNsYW1hdGlvbi10cmlhbmdsZSc7XG5cdFx0XHRcdGNvbnNvbGUud2Fybih0ZXh0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR0aHJvdyBcIkludmFsaWQgcG9wdXAgdHlwZTogXCIgKyB0eXBlO1xuXHRcdH1cblxuXHRcdC8vIENsb25lIHRoZSBzdGF0ZVxuXHRcdHZhciBzdGF0ZSA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUpO1xuXG5cdFx0Ly8gQWRkIHRoZSBwb3B1cFxuXHRcdHN0YXRlLnBvcHVwcy5wdXNoKHtcblx0XHRcdGljb246IHNJY29uLFxuXHRcdFx0dGV4dDogdGV4dCxcblx0XHRcdHRpbWVvdXQ6IGlUaW1lb3V0LFxuXHRcdFx0dHlwZTogdHlwZVxuXHRcdH0pO1xuXG5cdFx0Ly8gU2V0IHRoZSB0aW1lclxuXHRcdGlmKHN0YXRlLnRpbWVyID09IG51bGwpIHtcblx0XHRcdHN0YXRlLnRpbWVyID0ge1xuXHRcdFx0XHRyZXM6IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBpVGltZW91dCksXG5cdFx0XHRcdHN0ZXA6IDBcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9XG5cblx0d2FybmluZyhtc2cpIHtcblx0XHR0aGlzLnBvcHVwKG1zZywgJ3dhcm5pbmcnKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBQb3B1cHM7XG4iLCIvKipcbiAqIEhlYWRlclxuICpcbiAqIE1hbmFnZXMgc2lnbiBpbiAvIHNpZ24gb3V0IC8gc2lnbiB1cFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjFcbiAqL1xuXG4vLyBjb21wb25lbnRzXG52YXIgRm9ybXMgPSByZXF1aXJlKCcuL2Jhc2UvZm9ybXMuanN4Jyk7XG52YXIgTW9kYWwgPSByZXF1aXJlKCcuL2VsZW1lbnRzL21vZGFsLmpzeCcpO1xudmFyIFRocm93ZXIgPSByZXF1aXJlKCcuL3Rocm93ZXIuanN4Jyk7XG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vdXRpbHMuanMnKTtcblxuLy8gSGVhZGVyIGNvbXBvbmVudFxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJtb2RhbFwiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmFjY291bnRTaG93ID0gdGhpcy5hY2NvdW50U2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaG9tZSA9IHRoaXMuaG9tZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluID0gdGhpcy5zaWduaW4uYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pblNob3cgPSB0aGlzLnNpZ25pblNob3cuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pblRyaWdnZXIgPSB0aGlzLnNpZ25pblRyaWdnZXIuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25vdXQgPSB0aGlzLnNpZ25vdXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25vdXRUcmlnZ2VyID0gdGhpcy5zaWdub3V0VHJpZ2dlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbnVwID0gdGhpcy5zaWdudXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ251cFNob3cgPSB0aGlzLnNpZ251cFNob3cuYmluZCh0aGlzKTtcblx0fVxuXG5cdGFjY291bnRTaG93KGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RhbFwiOiB0aGlzLnN0YXRlLm1vZGFsID09IFwiYWNjb3VudFwiID8gZmFsc2UgOiAnYWNjb3VudCd9KTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pblRyaWdnZXIpO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXRUcmlnZ2VyKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbmluJywgdGhpcy5zaWduaW5UcmlnZ2VyKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0VHJpZ2dlcik7XG5cdH1cblxuXHRob21lKCkge1xuXHRcdEhhc2guc2V0KFwicGFnZVwiLCBudWxsKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxoZWFkZXI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9ucyBmcmlnaHQgYXJpZ2h0XCI+XG5cdFx0XHRcdFx0e3NlbGYuc3RhdGUudGhyb3dlciA/XG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhciBmYS11c2VyXCIgdGl0bGU9XCJBY2NvdW50XCIgb25DbGljaz17c2VsZi5hY2NvdW50U2hvd30+PC9pPlxuXHRcdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtcG93ZXItb2ZmXCIgdGl0bGU9XCJTaWduIE91dFwiIG9uQ2xpY2s9e3NlbGYuc2lnbm91dH0+PC9pPlxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLXBsdXNcIiB0aXRsZT1cIkNyZWF0ZSBBY2NvdW50XCIgb25DbGljaz17c2VsZi5zaWdudXBTaG93fT48L2k+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1zaWduLWluLWFsdFwiIHRpdGxlPVwiU2lnbiBJblwiIG9uQ2xpY2s9e3NlbGYuc2lnbmluU2hvd30+PC9pPlxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PGJyIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8aDEgc3R5bGU9e3tcImN1cnNvclwiOiBcInBvaW50ZXJcIn19IG9uQ2xpY2s9e3RoaXMuaG9tZX0+QXhlR2FpbnMuY29tPC9oMT5cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kYWwgPT0gJ3NpZ25pbicgJiZcblx0XHRcdFx0XHQ8ZGl2IGlkPVwic2lnbmluXCIgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cImFsaWFzXCIgdHlwZT1cInRleHRcIiB0aXRsZT1cImFsaWFzXCIgcGxhY2Vob2xkZXI9XCJhbGlhc1wiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInBhc3N3ZFwiIHR5cGU9XCJwYXNzd29yZFwiIHRpdGxlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJhcmlnaHRcIj48YnV0dG9uIG9uQ2xpY2s9e3NlbGYuc2lnbmlufT5zaWduIGluPC9idXR0b24+PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGFsID09ICdzaWdudXAnICYmXG5cdFx0XHRcdFx0PGRpdiBpZD1cInNpZ251cFwiIGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJzaWdudXBfYWxpYXNcIiB0eXBlPVwidGV4dFwiIHRpdGxlPVwiYWxpYXNcIiBwbGFjZWhvbGRlcj1cImFsaWFzXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiIHRpdGxlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cImVtYWlsIChub3QgcmVxdWlyZWQpXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwic2lnbnVwX3Bhc3N3ZFwiIHR5cGU9XCJwYXNzd29yZFwiIHRpdGxlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwicmVwZWF0X3Bhc3N3ZFwiIHR5cGU9XCJwYXNzd29yZFwiIHRpdGxlPVwicmVwZWF0IHBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJyZXBlYXQgcGFzc3dvcmRcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFyaWdodFwiPjxidXR0b24gb25DbGljaz17c2VsZi5zaWdudXB9PnNpZ24gdXA8L2J1dHRvbj48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kYWwgPT0gJ2FjY291bnQnICYmXG5cdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHR0aXRsZT1cIkFjY291bnRcIlxuXHRcdFx0XHRcdFx0Y2xvc2U9e3NlbGYuYWNjb3VudFNob3d9XG5cdFx0XHRcdFx0XHR3aWR0aD1cIjk1JVwiXG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFRocm93ZXIgLz5cblx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2hlYWRlcj5cblx0XHQpO1xuXHR9XG5cblx0c2lnbmluKGV2KSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGFsaWFzXG5cdFx0dmFyIGFsaWFzID0gdGhpcy5yZWZzLmFsaWFzLnZhbHVlO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2lnbmluXG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ3NpZ25pbicsIHtcblx0XHRcdFwiYWxpYXNcIjogYWxpYXMsXG5cdFx0XHRcInBhc3N3ZFwiOiB0aGlzLnJlZnMucGFzc3dkLnZhbHVlXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdHZhciBlcnJvciA9ICcgJztcblx0XHRcdFx0c3dpdGNoKHJlcy5lcnJvci5jb2RlKSB7XG5cdFx0XHRcdFx0Y2FzZSAxMDAxOlxuXHRcdFx0XHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIG1lc3NhZ2UgYW5kIG1ha2UgdGhlIHJlZiByZWRcblx0XHRcdFx0XHRcdGZvcih2YXIgaSBpbiByZXMuZXJyb3IubXNnKSB7XG5cdFx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1tpXSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDE6XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnQWxpYXMgb3IgcGFzc3dvcmQgaW52YWxpZCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMjA0OlxuXHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzWydzaWdudXBfcGFzc3dkJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ1Bhc3N3b3JkIG5vdCBzdHJvbmcgZW5vdWdoJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBzZXNzaW9uIHdpdGggdGhlIHNlcnZpY2Vcblx0XHRcdFx0U2VydmljZXMuc2Vzc2lvbihyZXMuZGF0YS5zZXNzaW9uKTtcblxuXHRcdFx0XHQvLyBHcmVldCB0aHJvd2VyXG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzdWNjZXNzJywgXCJXZWxjb21lIGJhY2sgdG8gQXhlR2FpbnMgXCIgKyBhbGlhcyk7XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciB0aGUgc2lnbmluIGV2ZW50XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWduaW4nLCByZXMuZGF0YS50aHJvd2VyKTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25pblNob3coZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGFsXCI6ICh0aGlzLnN0YXRlLm1vZGFsID09ICdzaWduaW4nID8gZmFsc2UgOiAnc2lnbmluJyl9KTtcblx0fVxuXG5cdHNpZ25pblRyaWdnZXIodGhyb3dlcikge1xuXG5cdFx0Ly8gSGlkZSBhbnkgbW9kYWxzIGFuZCBzZXQgdGhlIHRocm93ZXJcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcInRocm93ZXJcIjogdGhyb3dlclxuXHRcdH0pO1xuXHR9XG5cblx0c2lnbm91dChldikge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIENhbGwgdGhlIHNpZ25vdXRcblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnc2lnbm91dCcsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB0aGUgc2Vzc2lvblxuXHRcdFx0XHRTZXJ2aWNlcy5zZXNzaW9uKG51bGwpO1xuXG5cdFx0XHRcdC8vIFRyaWdnZXIgdGhlIHNpZ25vdXQgZXZlbnRcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25vdXQnKTtcblx0XHRcdH1cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRzaWdub3V0VHJpZ2dlcigpIHtcblxuXHRcdC8vIEhpZGUgYW5kIG1vZGFscyBhbmQgc2V0IHRoZSB0aHJvd2VyIHRvIGZhbHNlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRzaWdudXAoZXYpIHtcblxuXHRcdC8vIElmIHRoZSBhbGlhcyBpcyBub3QgbG9uZyBlbm91Z2hcblx0XHRpZih0aGlzLnJlZnMuc2lnbnVwX2FsaWFzLnRyaW0oKS5sZW5ndGggPCAzKSB7XG5cdFx0XHRGb3Jtcy5lcnJvckFkZCh0aGlzLnJlZnMuc2lnbnVwX2FsaWFzKTtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdBbGlhcyBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycycpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBwYXNzd29yZHMgZG9uJ3QgbWF0Y2hcblx0XHRpZih0aGlzLnJlZnMuc2lnbnVwX3Bhc3N3ZC52YWx1ZSAhPSB0aGlzLnJlZnMucmVwZWF0X3Bhc3N3ZC52YWx1ZSkge1xuXHRcdFx0Rm9ybXMuZXJyb3JBZGQodGhpcy5yZWZzLnJlcGVhdF9wYXNzd2QpO1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ1Bhc3N3b3JkcyBkbyBub3QgbWF0Y2gnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gSW5pdCB0aGUgZGF0YVxuXHRcdHZhciBvRGF0YSA9IHtcblx0XHRcdFwiYWxpYXNcIjogdGhpcy5yZWZzLnNpZ251cF9hbGlhcy52YWx1ZS50cmltKCksXG5cdFx0XHRcInBhc3N3ZFwiOiB0aGlzLnJlZnMuc2lnbnVwX3Bhc3N3ZC52YWx1ZVxuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gZS1tYWlsXG5cdFx0aWYodGhpcy5yZWZzLmVtYWlsLnZhbHVlKSB7XG5cdFx0XHR2YXIgZW1haWwgPSB0aGlzLnJlZnMuZW1haWwudmFsdWUudHJpbSgpO1xuXHRcdFx0aWYoZW1haWwpIHtcblx0XHRcdFx0b0RhdGFbJ2VtYWlsJ10gPSBlbWFpbDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsIHRoZSBzaWdudXBcblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnc2lnbnVwJywgb0RhdGEpLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHR2YXIgZXJyb3IgPSAnICc7XG5cdFx0XHRcdHN3aXRjaChyZXMuZXJyb3IuY29kZSkge1xuXHRcdFx0XHRcdGNhc2UgMTAwMTpcblx0XHRcdFx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCBtZXNzYWdlIGFuZCBtYWtlIHRoZSByZWYgcmVkXG5cdFx0XHRcdFx0XHRmb3IodmFyIGkgaW4gcmVzLmVycm9yLm1zZykge1xuXHRcdFx0XHRcdFx0XHRpZihpID09ICdhbGlhcycpIHtcblx0XHRcdFx0XHRcdFx0XHRpID0gJ3NpZ251cF9hbGlhcyc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZihpID09ICdwYXNzd2QnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aSA9ICdzaWdudXBfcGFzc3dkJztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbaV0pO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMjAwOlxuXHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzWydzaWdudXBfYWxpYXMnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnQWxpYXMgaXMgYWxyZWFkeSBpbiB1c2UnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwNDpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snc2lnbnVwX3Bhc3N3ZCddKTtcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdQYXNzd29yZCBub3Qgc3Ryb25nIGVub3VnaCcpO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0Y2FzZSAxMjA2OlxuXHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzWydlbWFpbCddKTtcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdFLU1haWwgYWxyZWFkeSBpbiB1c2UnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIHNlc3Npb24gd2l0aCB0aGUgc2VydmljZVxuXHRcdFx0XHRTZXJ2aWNlcy5zZXNzaW9uKHJlcy5kYXRhLnRocm93ZXIuX2lkKTtcblxuXHRcdFx0XHQvLyBSZXZlcnQgdG8gc2lnbiBpbiBhbmQgc2hvdyBzdWNjZXNzIG1lc3NhZ2Vcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJtb2RhbFwiOiBmYWxzZSxcblx0XHRcdFx0XHRcInRocm93ZXJcIjogdHJ1ZVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBHcmVldCB0aHJvd2VyXG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzdWNjZXNzJywgXCJXZWxjb21lIHRvIEF4ZUdhaW5zIFwiICsgcmVzLmRhdGEudGhyb3dlci5hbGlhcyk7XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciB0aGUgc2lnbmluIGV2ZW50XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWduaW4nLCByZXMuZGF0YS50aHJvd2VyKTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHNpZ251cFNob3coZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGFsXCI6ICh0aGlzLnN0YXRlLm1vZGFsID09ICdzaWdudXAnID8gZmFsc2UgOiAnc2lnbnVwJyl9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBIZWFkZXI7XG4iLCIvKipcbiAqIE1hdGNoXG4gKlxuICogTWFuYWdlcyBPcmcgbWVudSBmb3IgbWF0Y2hlcyBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgb25lIGJhc2VkIG9uIHdoYXRcbiAqIGlzIGNob3NlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBOYXRmID0gcmVxdWlyZSgnLi9uYXRmL21hdGNoLmpzeCcpO1xuXG4vLyBNYXRjaCBjb21wb25lbnRcbmNsYXNzIE1hdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJvcmdcIjogSGFzaC5nZXQoJ29yZycsICduYXRmJylcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5vcmdDaGFuZ2UgPSB0aGlzLm9yZ0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLnVud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgb3JnIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnb3JnJywgbnVsbCk7XG5cdH1cblxuXHRtZW51Q2hhbmdlKG9yZykge1xuXHRcdEhhc2guc2V0KCdvcmcnLCBvcmcpO1xuXHR9XG5cblx0b3JnQ2hhbmdlKG9yZykge1xuXHRcdGlmKG9yZyAhPSB0aGlzLnN0YXRlLm9yZykge1xuXHRcdFx0aWYob3JnID09IG51bGwpIHtcblx0XHRcdFx0b3JnID0gJ25hdGYnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJvcmdcIjogb3JnfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIm1hdGNoXCI+XG5cdFx0XHRcdDxNZW51IGNsYXNzTmFtZT1cIm1lbnUgc2Vjb25kYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUub3JnfSBvbkNoYW5nZT17c2VsZi5tZW51Q2hhbmdlfT5cblx0XHRcdFx0XHQ8SXRlbSBuYW1lPVwibmF0ZlwiPk5BVEY8L0l0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0PGRpdiBpZD1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUub3JnID09ICduYXRmJyAmJlxuXHRcdFx0XHRcdFx0XHQ8TmF0ZiB0aHJvd2VyPXt0aGlzLnByb3BzLnRocm93ZXJ9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBNYXRjaDtcbiIsIi8qKlxuICogTkFURiBCb2FyZFxuICpcbiAqIE1hbmFnZXMgYSBzdGFuZGFyZCBOQVRGIGJvYXJkXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0xOVxuICovXG5cbi8vIEJvYXJkIGNvbXBvbmVudFxuY2xhc3MgQm9hcmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIG9uUG9pbnRzIHByb3Bcblx0XHRpZighcHJvcHMub25Qb2ludHMpIHtcblx0XHRcdHRocm93ICdtdXN0IHNwZWNpZnkgb25Qb2ludHMgcHJvcGVydHkgZm9yIE5BVEYgQm9hcmQnO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiY2x1dGNoTW9kZVwiOiBwcm9wcy5jbHV0Y2hNb2RlLFxuXHRcdFx0XCJzZWxlY3RlZFwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmNsdXRjaENsaWNrID0gdGhpcy5jbHV0Y2hDbGljay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZHJvcENsaWNrID0gdGhpcy5kcm9wQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50Q2xpY2sgPSB0aGlzLnBvaW50Q2xpY2suYmluZCh0aGlzKTtcblx0fVxuXG5cdGNsdXRjaENsaWNrKGV2KSB7XG5cblx0XHQvLyBTdG9wIHByb3BhZ2F0aW9uIG5vIG1hdHRlciB3aGF0XG5cdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHQvLyBJZiBjbHV0Y2hlcyBhcmUgbm90IGFsbG93ZWRcblx0XHRpZih0aGlzLnN0YXRlLmNsdXRjaE1vZGUgPT0gJ25vbmUnKSB7XG5cblx0XHRcdC8vIFN0b3JlIHRoZSBjdXJyZW50IHRhcmdldFxuXHRcdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHRcdC8vIEdldCB0aGUgY2xhc3MgbmFtZVxuXHRcdFx0dmFyIGNsYXNzTmFtZSA9IHRhcmdldC5jbGFzc05hbWU7XG5cblx0XHRcdC8vIFNldCB0aGUgaW52YWxpZCBjbGFzc1xuXHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgaW52YWxpZCc7XG5cblx0XHRcdC8vIEFuZCBzZXQgYSB0aW1lb3V0IHRvIHR1cm4gaXQgb2ZmXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuXHRcdFx0fSwgNTAwKTtcblxuXHRcdFx0Ly8gRG9uJ3QgY291bnQgdGhlIGNsaWNrXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZWxzZSB7XG5cblx0XHRcdGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWQpIHtcblx0XHRcdFx0aWYodGhpcy5wcm9wcy5vblBvaW50cyh0cnVlLCA3KSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLnJlc2V0Q2x1dGNoKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1wic2VsZWN0ZWRcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRyb3BDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBTZW5kIG91dCB0aGUgZHJvcFxuXHRcdGlmKHRoaXMucHJvcHMub25Qb2ludHModGhpcy5zdGF0ZS5zZWxlY3RlZCwgJ2QnKSAhPT0gZmFsc2UpIHtcblxuXHRcdFx0Ly8gRGUtc2VsZWN0IHRoZSBjbHV0Y2ggaWYgdGhlcmUncyBvbmUgc2VsZWN0ZWRcblx0XHRcdGlmKHRoaXMuc3RhdGUuc2VsZWN0ZWQpIHtcblx0XHRcdFx0dGhpcy5yZXNldENsdXRjaCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUdXJuIG9uIHRoZSBhY3RpdmUgZmxhZ1xuXHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9ICdkcm9wIGFjdGl2ZSc7XG5cblx0XHRcdC8vIEFuZCBzZXQgYSB0aW1lb3V0IHRvIHR1cm4gaXQgb2ZmXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gJ2Ryb3AnO1xuXHRcdFx0fSwgNTAwKTtcblx0XHR9XG5cdH1cblxuXHRyZXNldENsdXRjaCgpIHtcblxuXHRcdC8vIElmIHRoZSBtb2RlIGlzIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdzZWxlY3QnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkXCI6IGZhbHNlfSk7XG5cdFx0fVxuXHR9XG5cblx0cG9pbnRDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVzXG5cdFx0dmFyIGNsYXNzTmFtZXMgPSB0YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cblx0XHQvLyBJZiBpdCdzIGFscmVhZHkgYWN0aXZlLCBkbyBub3RoaW5nXG5cdFx0aWYoY2xhc3NOYW1lc1sxXSAmJiBjbGFzc05hbWVzWzFdID09ICdhY3RpdmUnKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgY2x1dGNoIHNlbGVjdGVkXG5cdFx0dmFyIGFjY2VwdGVkID0gdHJ1ZTtcblx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHRhY2NlcHRlZCA9IHRoaXMucHJvcHMub25Qb2ludHModHJ1ZSwgMCk7XG5cdFx0XHRpZihhY2NlcHRlZCAhPT0gZmFsc2UpIHtcblx0XHRcdFx0dGhpcy5yZXNldENsdXRjaCgpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRhY2NlcHRlZCA9IHRoaXMucHJvcHMub25Qb2ludHMoZmFsc2UsIHBhcnNlSW50KHRhcmdldC5kYXRhc2V0LnZhbHVlKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlIHBvaW50cyB3ZXJlIG5vdCByZWplY3RlZCBhY2NlcHRlZFxuXHRcdGlmKGFjY2VwdGVkICE9PSBmYWxzZSkge1xuXG5cdFx0XHQvLyBUdXJuIG9uIHRoZSBhY3RpdmUgZmxhZ1xuXHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbMF0gKyAnIGFjdGl2ZSc7XG5cblx0XHRcdC8vIEFuZCBzZXQgYSB0aW1lb3V0IHRvIHR1cm4gaXQgb2ZmXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lc1swXTtcblx0XHRcdH0sIDUwMCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2FyZFwiIGRhdGEtdmFsdWU9ezB9IG9uQ2xpY2s9e3NlbGYucG9pbnRDbGlja30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNsdXRjaCBsZWZ0XCIgKyAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpfSBvbkNsaWNrPXtzZWxmLmNsdXRjaENsaWNrfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wXCIgb25DbGljaz17c2VsZi5kcm9wQ2xpY2t9PkRST1A8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1wiY2x1dGNoIHJpZ2h0XCIgKyAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpfSBvbkNsaWNrPXtzZWxmLmNsdXRjaENsaWNrfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvbmVcIiBkYXRhLXZhbHVlPXsxfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGhyZWVcIiBkYXRhLXZhbHVlPXszfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXZlXCIgZGF0YS12YWx1ZT17NX0gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0c2V0IGNsdXRjaE1vZGUobW9kZSkge1xuXG5cdFx0Ly8gRmlndXJlIG91dCB0aGUgc2VsZWN0ZWQgdmFsdWVcblx0XHR2YXIgc2VsZWN0ZWQgPSBudWxsO1xuXHRcdHN3aXRjaChtb2RlKSB7XG5cdFx0XHRjYXNlICdub25lJzogc2VsZWN0ZWQgPSBmYWxzZTsgYnJlYWs7XG5cdFx0XHRjYXNlICdleHBlY3RlZCc6IHNlbGVjdGVkID0gdHJ1ZTsgYnJlYWs7XG5cdFx0XHRjYXNlICdzZWxlY3QnOiBzZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQ7IGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImNsdXRjaE1vZGVcIjogbW9kZSxcblx0XHRcdFwic2VsZWN0ZWRcIjogc2VsZWN0ZWRcblx0XHR9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcbiIsIi8qKlxuICogTkFURiBNYXRjaFxuICpcbiAqIE1hbmFnZXMgY3JlYXRpbmcgYW5kIHBsYXlpbmcgYSBzdGFuZGFyZCBOQVRGIG1hdGNoXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvaGFzaC5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFR3b1dheSA9IHJlcXVpcmUoJy4uLy4uL3R3b3dheS5qcycpO1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMuanMnKTtcblxuLy8gUmVhY3QgY29tcG9uZW50c1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZC5qc3gnKTtcbnZhciBPcHBvbmVudCA9IHJlcXVpcmUoJy4uL29wcG9uZW50LmpzeCcpO1xuXG4vLyBEZWZpbmVzXG5GSU5JU0hFRF9JTklUSUFUT1IgPSAweDAxO1xuRklOSVNIRURfT1BQT05FTlQgPSAweDAyO1xuRklOSVNIRURfQk9USCA9IDB4MDM7XG5cbi8vIE1hdGNoIENvbXBvbmVudFxuY2xhc3MgTWF0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImFsaWFzXCI6ICcnLFxuXHRcdFx0XCJiaWdheGVcIjogZmFsc2UsXG5cdFx0XHRcImV4aXN0aW5nXCIgOiBmYWxzZSxcblx0XHRcdFwiZ2FtZXNcIjogZmFsc2UsXG5cdFx0XHRcImlkXCI6IGZhbHNlLFxuXHRcdFx0XCJsb3NlclwiOiBmYWxzZSxcblx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBmYWxzZSxcblx0XHRcdFwibW9kZVwiOiBcIm9wcG9uZW50XCIsXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlcixcblx0XHRcdFwiaXNcIjogJycsXG5cdFx0XHRcIndpbm5lclwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmJpZ2F4ZUZpbmlzaCA9IHRoaXMuYmlnYXhlRmluaXNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5leGlzdGluZ0NvbnRpbnVlID0gdGhpcy5leGlzdGluZ0NvbnRpbnVlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5leGlzdGluZ0RlbGV0ZSA9IHRoaXMuZXhpc3RpbmdEZWxldGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdhbWVGaW5pc2ggPSB0aGlzLmdhbWVGaW5pc2guYmluZCh0aGlzKTtcblx0XHR0aGlzLmlkQ2FsbGJhY2sgPSB0aGlzLmlkQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm1hdGNoQ2FsbGJhY2sgPSB0aGlzLm1hdGNoQ2FsbGJhY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLm92ZXJ3cml0ZSA9IHRoaXMub3ZlcndyaXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHMgPSB0aGlzLnBvaW50cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVxdWVzdENhbGxiYWNrID0gdGhpcy5yZXF1ZXN0Q2FsbGJhY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlcXVlc3RDYW5jZWwgPSB0aGlzLnJlcXVlc3RDYW5jZWwuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlcXVlc3RDcmVhdGUgPSB0aGlzLnJlcXVlc3RDcmVhdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRiaWdheGVGaW5pc2goKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIElmIHdlJ3JlIGluIHBvaW50cyBtb2RlXG5cdFx0dmFyIG5vdW4gPSAnJztcblx0XHRpZih0aGlzLnN0YXRlLm1hdGNoU3RhdGUubW9kZSA9PSAnYmlnYXhlX3BvaW50cycpIHtcblx0XHRcdG5vdW4gPSAnbWF0Y2gvZmluaXNoL2JpZ2F4ZS9wb2ludHMnO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRub3VuID0gJ21hdGNoL2ZpbmlzaC9iaWdheGUvdGFyZ2V0Jztcblx0XHR9XG5cblx0XHQvLyBDbG9uZSB0aGUgbWF0Y2ggc3RhdGVcblx0XHR2YXIgbXMgPSBzZWxmLnN0YXRlLm1hdGNoU3RhdGVcblxuXHRcdC8vIFJlbW92ZSB0aGUgZmluaXNoIGFuZCBzZXQgdGhlIHdhaXRpbmdcblx0XHRtcy5iaWdheGVfY2FuX2ZpbmlzaCA9IGZhbHNlO1xuXHRcdG1zLndhaXRpbmcgPSB0cnVlO1xuXG5cdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1hdGNoU3RhdGVcIjogbXN9KTtcblxuXHRcdC8vIExldCB0aGUgc2VydmljZSBrbm93XG5cdFx0U2VydmljZXMudXBkYXRlKCduYXRmJywgbm91biwge1xuXHRcdFx0XCJpZFwiOiB0aGlzLnN0YXRlLmlkXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdGNhbGN1bGF0ZUJpZ0F4ZUZpbmlzaGVkKHR5cGUsIGRhdGEpIHtcblxuXHRcdC8vIE1ha2UgbXkgbGlmZSBlYXNpZXJcblx0XHR2YXIgdGhyb3dzID0gZGF0YS5iaWdheGVbdHlwZV07XG5cblx0XHQvLyBJZiB0aGUgbGVuZ3RocyBkb24ndCBtYXRjaFxuXHRcdGlmKHRocm93c1snaSddLmxlbmd0aCAhPSB0aHJvd3NbJ28nXS5sZW5ndGgpIHtcblxuXHRcdFx0Ly8gV2UgYXJlbid0IGRvbmVcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSdyZSBjaGVja2luZyBwb2ludHNcblx0XHRpZih0eXBlID09ICdwb2ludHMnKSB7XG5cblx0XHRcdC8vIExvb3AgdGhyb3VnaCB0aWxsIHdlIGhhdmUgbm8gbW9yZSB0aHJvd3Ncblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aHJvd3NbJ2knXS5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHRcdC8vIERvbid0IG92ZXJ3cml0ZSB0aGUgYWN0dWFsIGRhdGFcblx0XHRcdFx0dmFyIHZhbHMgPSB7XG5cdFx0XHRcdFx0J2knOiB0aHJvd3NbJ2knXVtpXS52YWx1ZSxcblx0XHRcdFx0XHQnbyc6IHRocm93c1snbyddW2ldLnZhbHVlXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gSWYgd2UgZ290IGEgZHJvcCwgY29uc2lkZXIgaXQgYSB6ZXJvXG5cdFx0XHRcdGlmKHZhbHNbJ2knXSA9PSAnZCcpIHtcblx0XHRcdFx0XHR2YWxzWydpJ10gPSAwO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmKHZhbHNbJ28nXSA9PSAnZCcpIHtcblx0XHRcdFx0XHR2YWxzWydvJ10gPSAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHZhbHVlcyBkb24ndCBtYXRjaCwgc29tZW9uZSB3b25cblx0XHRcdFx0aWYodmFsc1snaSddICE9IHZhbHNbJ28nXSkge1xuXG5cdFx0XHRcdFx0Ly8gQWxsb3cgZmluaXNoaW5nXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlJ3JlIGNoZWNraW5nIHRhcmdldFxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBJbml0IGNvbnNlY3V0aXZlIGhpdHNcblx0XHRcdHZhciBpQ29uID0gMDtcblxuXHRcdFx0Ly8gTG9vcCB0aHJvdWdoIHRpbGwgd2UgaGF2ZSBubyBtb3JlIHRocm93c1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRocm93c1snaSddLmxlbmd0aDsgKytpKSB7XG5cblx0XHRcdFx0Ly8gSWYgd2UgZ290IGRvdWJsZSBmYWlsdXJlc1xuXHRcdFx0XHRpZigodGhyb3dzWydpJ11baV0gPT0gJ2QnIHx8IHRocm93c1snaSddW2ldID09IDApICYmXG5cdFx0XHRcdFx0KHRocm93c1snbyddW2ldID09ICdkJyB8fCB0aHJvd3NbJ28nXVtpXSA9PSAwKSkge1xuXG5cdFx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNvbnNlY3V0aXZlIGFuZCBjb250aW51ZSB0aGUgbG9vcFxuXHRcdFx0XHRcdGlDb24gPSAwO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgd2UgZ290IGRvdWJsZSAxc1xuXHRcdFx0XHRpZih0aHJvd3NbJ2knXVtpXSA9PSAxICYmIHRocm93c1snbyddW2ldID09IDEpIHtcblxuXHRcdFx0XHRcdC8vIEluY3JlYXNlIHRoZSBjb25zZWN1dGl2ZVxuXHRcdFx0XHRcdCsraUNvbjtcblxuXHRcdFx0XHRcdC8vIElmIHdlIGdvdCAzXG5cdFx0XHRcdFx0aWYoaUNvbiA9PSAzKSB7XG5cblx0XHRcdFx0XHRcdC8vIEFsbG93IGZpbmlzaGluZ1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQ29udGludWUgdGhlIGxvb3Bcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb2tzIGxpa2Ugc29tZW9uZSB3b25cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTm90IGRvbmUgeWV0XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Y2FsY3VsYXRlTWF0Y2hTdGF0ZShkYXRhKSB7XG5cblx0XHQvLyBJbml0IHRoZSBzdGF0ZVxuXHRcdHZhciBzdGF0ZSA9IHtcblx0XHRcdFwiZ2FtZVwiOiBcIjFcIixcblx0XHRcdFwidGhyb3dcIjogXCIxXCIsXG5cdFx0XHRcIndhaXRpbmdcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQXJlIHdlIG9wcG9uZW50IG9yIGluaXRpYXRvclxuXHRcdHZhciBpcyA9ICh0aGlzLnN0YXRlLnRocm93ZXIuX2lkID09IGRhdGEuaW5pdGlhdG9yKSA/ICdpJyA6ICdvJztcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW55IGJpZ2F4ZSBkYXRhIGl0J3Mgc2FmZSB0byBhc3N1bWUgd2UncmUgZG9uZSB3aXRoIHRoZVxuXHRcdC8vXHRyZWd1bGFyIG1hdGNoXG5cdFx0aWYoZGF0YS5iaWdheGUgJiYgIVRvb2xzLmVtcHR5KGRhdGEuYmlnYXhlKSkge1xuXG5cdFx0XHQvLyBCaWdheGUgdGhyb3cgc3RhcnRzIGF0IDBcblx0XHRcdHN0YXRlLnRocm93ID0gMDtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBwb2ludHNcblx0XHRcdGlmKGRhdGEuYmlnYXhlLnBvaW50cykge1xuXG5cdFx0XHRcdC8vIFNldCBiaWdheGUgdG8gcG9pbnRzXG5cdFx0XHRcdHN0YXRlLm1vZGUgPSBcImJpZ2F4ZV9wb2ludHNcIjtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIHRocm93IHRvIHRoZSBjdXJyZW50IGxlbmd0aCBvZiBleGlzdGluZyB0aHJvd3Ncblx0XHRcdFx0c3RhdGUudGhyb3cgPSBkYXRhLmJpZ2F4ZS5wb2ludHNbaXNdLmxlbmd0aDtcblxuXHRcdFx0XHQvLyBJZiB3ZSdyZSBmaW5pc2hlZFxuXHRcdFx0XHRpZihkYXRhLmJpZ2F4ZS5wb2ludHMuZmluaXNoZWRbaXNdKSB7XG5cdFx0XHRcdFx0c3RhdGUud2FpdGluZyA9IHRydWU7XG5cdFx0XHRcdFx0c3RhdGUuYmlnYXhlX2Nhbl9maW5pc2ggPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIERvIHdlIG5lZWQgdG8gc2hvdyB0aGUgZmluaXNoIGJ1dHRvbj9cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0c3RhdGUuYmlnYXhlX2Nhbl9maW5pc2ggPSB0aGlzLmNhbGN1bGF0ZUJpZ0F4ZUZpbmlzaGVkKCdwb2ludHMnLCBkYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIHdlJ3JlIHN0aWxsIG9uIHRhcmdldFxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Ly8gU2V0IGJpZ2F4ZSB0byB0YXJnZXRcblx0XHRcdFx0c3RhdGUubW9kZSA9IFwiYmlnYXhlX3RhcmdldFwiO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgdGhyb3cgdG8gdGhlIGN1cnJlbnQgbGVuZ3RoIG9mIGV4aXN0aW5nIHRocm93c1xuXHRcdFx0XHRzdGF0ZS50aHJvdyA9IGRhdGEuYmlnYXhlLnRhcmdldFtpc10ubGVuZ3RoO1xuXG5cdFx0XHRcdC8vIElmIHdlJ3JlIGZpbmlzaGVkXG5cdFx0XHRcdGlmKGRhdGEuYmlnYXhlLnRhcmdldC5maW5pc2hlZFtpc10pIHtcblx0XHRcdFx0XHRzdGF0ZS53YWl0aW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRzdGF0ZS5iaWdheGVfY2FuX2ZpbmlzaCA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRG8gd2UgbmVlZCB0byBzaG93IHRoZSBmaW5pc2ggYnV0dG9uP1xuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRzdGF0ZS5iaWdheGVfY2FuX2ZpbmlzaCA9IHRoaXMuY2FsY3VsYXRlQmlnQXhlRmluaXNoZWQoJ3RhcmdldCcsIGRhdGEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgYXNzdW1lIHdlIGFyZSBpbiBnYW1lc1xuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBTZXQgdGhlIG1vZGVcblx0XHRcdHN0YXRlLm1vZGUgPSBcImdhbWVzXCI7XG5cblx0XHRcdC8vIElmIHdlJ3JlIGZpbmlzaGVkXG5cdFx0XHRpZihkYXRhLmdhbWVzX2ZpbmlzaGVkW2lzXSkge1xuXHRcdFx0XHRzdGF0ZS53YWl0aW5nID0gdHJ1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgZ28gdGhyb3VnaCBlYWNoIGdhbWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR2YXIgZyA9IFwiMVwiO1xuXHRcdFx0XHRmb3IoZyBvZiBbXCIxXCIsIFwiMlwiLCBcIjNcIl0pIHtcblxuXHRcdFx0XHRcdC8vIElmIGl0IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0XHRpZih0eXBlb2YgZGF0YS5nYW1lc1tnXSA9PSAndW5kZWZpbmVkJyB8fFxuXHRcdFx0XHRcdFx0dHlwZW9mIGRhdGEuZ2FtZXNbZ11baXNdID09ICd1bmRlZmluZWQnIHx8XG5cdFx0XHRcdFx0XHRUb29scy5lbXB0eShkYXRhLmdhbWVzW2ddW2lzXSkpIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN0b3JlIHRoZSBnYW1lXG5cdFx0XHRcdFx0c3RhdGUuZ2FtZSA9IGc7XG5cblx0XHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggdGhyb3dcblx0XHRcdFx0XHR2YXIgdCA9IFwiMVwiO1xuXHRcdFx0XHRcdGZvcih0IG9mIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiXSkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiBpdCBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdFx0XHRpZih0eXBlb2YgZGF0YS5nYW1lc1tnXVtpc11bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3RvcmUgdGhlIHJvdW5kXG5cdFx0XHRcdFx0c3RhdGUudGhyb3cgPSB0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBzdGF0ZVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBUcmFjayBJRCBpbiBoYXNoXG5cdFx0SGFzaC53YXRjaCgnaWQnLCB0aGlzLmlkQ2FsbGJhY2spO1xuXG5cdFx0Ly8gSWYgd2UncmUgc2lnbmVkIGluXG5cdFx0aWYodGhpcy5zdGF0ZS50aHJvd2VyKSB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gSUQgaW4gdGhlIGhhc2hcblx0XHRcdHZhciBpZCA9IEhhc2guZ2V0KCdpZCcpO1xuXHRcdFx0aWYoaWQpIHtcblx0XHRcdFx0dGhpcy5pZENhbGxiYWNrKGlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZXhpc3RpbmdGZXRjaCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBJRCBpbiBoYXNoIGFuZCByZW1vdmUgaXRcblx0XHRIYXNoLnVud2F0Y2goJ2lkJywgdGhpcy5pZENhbGxiYWNrKTtcblx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblxuXHRcdC8vIElmIHdlJ3JlIGluIHJlcXVlc3QgbW9kZVxuXHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAncmVxdWVzdCcpIHtcblxuXHRcdFx0Ly8gU3RvcCB0cmFja2luZyB0aGUgcmVxdWVzdFxuXHRcdFx0VHdvV2F5LnVudHJhY2soXG5cdFx0XHRcdCdhdXRoJywgJ3JlcXVlc3QtJyArIHRoaXMuc3RhdGUuaWQsXG5cdFx0XHRcdHRoaXMucmVxdWVzdENhbGxiYWNrXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0ZWxzZSBpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ21hdGNoJykge1xuXG5cdFx0XHQvLyBTdG9wIHRyYWNraW5nIHRoZSBtYXRjaFxuXHRcdFx0VHdvV2F5LnVudHJhY2soXG5cdFx0XHRcdCduYXRmJywgJ21hdGNoLScgKyB0aGlzLnN0YXRlLmlkLFxuXHRcdFx0XHR0aGlzLm1hdGNoQ2FsbGJhY2tcblx0XHRcdClcblx0XHR9XG5cdH1cblxuXHRleGlzdGluZ0NvbnRpbnVlKGV2KSB7XG5cdFx0SGFzaC5zZXQoJ2lkJywgJ218JyArIGV2LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmlkKTtcblx0fVxuXG5cdGV4aXN0aW5nRGVsZXRlKGV2KSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBpZFxuXHRcdHZhciBpZCA9IGV2LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXG5cdFx0Ly8gTm90aWZ5IHRoZSBzZXJ2aWNlIHRoZSBtYXRjaCB3b24ndCBiZSBjb21wbGV0ZWRcblx0XHRTZXJ2aWNlcy5kZWxldGUoJ25hdGYnLCAnbWF0Y2gnLCB7XG5cdFx0XHRcImlkXCI6IGlkXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRocm93ZXIgY2FuJ3QgZGVsZXRlIHRoYXQgcmVjb3JkLCBvciBpdCdzIGZpbmlzaGVkXG5cdFx0XHRcdGlmKHJlcy5lcnJvci5jb2RlID09IDEwMDApIHtcblx0XHRcdFx0XHRzZWxmLmV4aXN0aW5nUmVtb3ZlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiBpdCdzIGFscmVhZHkgZGVsZXRlZFxuXHRcdFx0XHRlbHNlIGlmKHJlcy5lcnJvci5jb2RlID09IDExMDQpIHtcblx0XHRcdFx0XHRzZWxmLmV4aXN0aW5nUmVtb3ZlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBVbmtub3duIGVycm9yXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0c2VsZi5leGlzdGluZ1JlbW92ZShpZCk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pXG5cdH1cblxuXHRleGlzdGluZ0ZldGNoKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGaW5kIG91dCBpZiB0aGVyZSdzIGFueSB1bmZpbmlzaGVkIGdhbWVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzXG5cdFx0Ly9cdHRocm93ZXJcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ21hdGNoL3VuZmluaXNoZWQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbnlcblx0XHRcdFx0aWYocmVzLmRhdGEubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyBTZXQgdGhlIHN0YXRlXG5cdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcIm1vZGVcIjogXCJleGlzdGluZ1wiLFxuXHRcdFx0XHRcdFx0XCJleGlzdGluZ1wiOiByZXMuZGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdGV4aXN0aW5nUmVtb3ZlKGlkKSB7XG5cblx0XHQvLyBTdG9yZSB0aGUgZXhpc3Rpbmdcblx0XHR2YXIgZXhpc3RpbmcgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmV4aXN0aW5nKTtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBvbmVcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmcubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmKGV4aXN0aW5nW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRleGlzdGluZy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgbmV3IHN0YXRlXG5cdFx0dmFyIHN0YXRlID0ge1wiZXhpc3RpbmdcIjogZXhpc3Rpbmd9XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIG1vcmUgZXhpc3Rpbmdcblx0XHRpZihleGlzdGluZy5sZW5ndGggPT0gMCkge1xuXHRcdFx0c3RhdGUubW9kZSA9ICdvcHBvbmVudCc7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fVxuXG5cdGdhbWVGaW5pc2goZXYpIHtcblxuXHRcdC8vIENsb25lIHRoZSBtYXRjaCBzdGF0ZVxuXHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHQvLyBJZiB3ZSdyZSBvbiBnYW1lIDNcblx0XHRpZihtcy5nYW1lID09IFwiM1wiKSB7XG5cblx0XHRcdC8vIFN0b3JlIHRoaXNcblx0XHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuc2hvdygpXG5cblx0XHRcdC8vIENsb25lIHRoZSBtYXRjaCBzdGF0ZVxuXHRcdFx0dmFyIG1zID0gVG9vbHMuY2xvbmUoc2VsZi5zdGF0ZS5tYXRjaFN0YXRlKTtcblxuXHRcdFx0Ly8gU2V0IHRoZSBtYXRjaCBzdGF0ZSB0byB3YWl0aW5nXG5cdFx0XHRtcy53YWl0aW5nID0gdHJ1ZTtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogbXNcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBOb3RpZnkgYmFja2VuZCB0aGUgbWF0Y2ggaXMgb3ZlclxuXHRcdFx0U2VydmljZXMudXBkYXRlKCduYXRmJywgJ21hdGNoL2ZpbmlzaC9nYW1lcycsIHtcblx0XHRcdFx0XCJpZFwiOiB0aGlzLnN0YXRlLmlkXG5cdFx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgZ28gdG8gdGhlIG5leHQgZ2FtZVxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBDbG9uZSB0aGUgZ2FtZXNcblx0XHRcdHZhciBnYW1lcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUuZ2FtZXMpO1xuXG5cdFx0XHQvLyBJbmNyZWFzZSB0aGUgZ2FtZSBhbmQgdGhyb3cgaW4gdGhlIG1hdGNoIHN0YXRlXG5cdFx0XHRtcy5nYW1lID0gKHBhcnNlSW50KG1zLmdhbWUpICsgMSkudG9TdHJpbmcoKTtcblx0XHRcdG1zLnRocm93ID0gXCIxXCI7XG5cblx0XHRcdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIG5leHQgZ2FtZSwgYWRkIGl0XG5cdFx0XHRpZih0eXBlb2YgZ2FtZXNbbXMuZ2FtZV0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0Z2FtZXNbbXMuZ2FtZV0gPSB7XG5cdFx0XHRcdFx0XCJpXCI6IHt9LFxuXHRcdFx0XHRcdFwib1wiOiB7fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaWYgaXQgZG9lcyBleGlzdFxuXHRcdFx0ZWxzZSB7XG5cblx0XHRcdFx0Ly8gSWYgaXQgZG9lc24ndCBoYXZlIGFuIGluaXRpYXRvclxuXHRcdFx0XHRpZih0eXBlb2YgZ2FtZXNbbXMuZ2FtZV1bJ2knXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGdhbWVzW21zLmdhbWVdWydpJ10gPSB7fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIGl0IGRvZXNuJ3QgaGF2ZSBhbiBvcHBvbmVudFxuXHRcdFx0XHRpZih0eXBlb2YgZ2FtZXNbbXMuZ2FtZV1bJ28nXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGdhbWVzW21zLmdhbWVdWydvJ10gPSB7fTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFwiZ2FtZXNcIjogZ2FtZXMsXG5cdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtc1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0aWRDYWxsYmFjayhpZCkge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBJRFxuXHRcdGlmKGlkKSB7XG5cblx0XHRcdC8vIFNwbGl0IHRoZSBJRFxuXHRcdFx0aWQgPSBpZC5zcGxpdCgnfCcpO1xuXG5cdFx0XHQvLyBJZiBpdCdzIGEgcmVxdWVzdFxuXHRcdFx0aWYoaWRbMF0gPT0gJ3InKSB7XG5cblx0XHRcdFx0Ly8gRmV0Y2ggdGhlIG1hdGNoXG5cdFx0XHRcdFNlcnZpY2VzLnJlYWQoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdCcsIHtcblx0XHRcdFx0XHRcImlkXCI6IGlkWzFdXG5cdFx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIHRoZSBtYXRjaCBubyBsb25nZXIgZXhpc3RzXG5cdFx0XHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSA9PSAxMTA0KSB7XG5cdFx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIFwiVGhpcyBtYXRjaCByZXF1ZXN0IG5vIGxvbmdlciBleGlzdHMuXCIpO1xuXHRcdFx0XHRcdFx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHRcdC8vIENoYW5nZSB0aGUgbW9kZVxuXHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFx0XCJhbGlhc1wiOiByZXMuZGF0YS5hbGlhcyxcblx0XHRcdFx0XHRcdFwiaWRcIjogaWRbMV0sXG5cdFx0XHRcdFx0XHRcIm1vZGVcIjogXCJyZXF1ZXN0XCJcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdC8vIExpc3RlbiBmb3IgYW4gdXBkYXRlIG9uIHRoZSByZXF1ZXN0XG5cdFx0XHRcdFx0VHdvV2F5LnRyYWNrKFxuXHRcdFx0XHRcdFx0J2F1dGgnLCAncmVxdWVzdC0nICsgaWRbMV0sXG5cdFx0XHRcdFx0XHR0aGlzLnJlcXVlc3RDYWxsYmFja1xuXHRcdFx0XHRcdCk7XG5cblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIGlmIGl0J3MgYSBtYXRjaFxuXHRcdFx0ZWxzZSBpZihpZFswXSA9PSAnbScpIHtcblxuXHRcdFx0XHQvLyBMaXN0IGZvciBhbiB1cGRhdGUgb24gdGhlIG1hdGNoXG5cdFx0XHRcdFR3b1dheS50cmFjayhcblx0XHRcdFx0XHQnbmF0ZicsICdtYXRjaC0nICsgaWRbMV0sXG5cdFx0XHRcdFx0dGhpcy5tYXRjaENhbGxiYWNrXG5cdFx0XHRcdClcblxuXHRcdFx0XHQvLyBTYXZlIHRoaXNcblx0XHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHRcdC8vIEZldGNoIHRoZSBtYXRjaFxuXHRcdFx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ21hdGNoJywge1xuXHRcdFx0XHRcdFwiaWRcIjogaWRbMV1cblx0XHRcdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIG1hdGNoIG5vIGxvbmdlciBleGlzdHNcblx0XHRcdFx0XHRcdGlmKHJlcy5lcnJvci5jb2RlID09IDExMDQpIHtcblx0XHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgXCJUaGlzIG1hdGNoIG5vIGxvbmdlciBleGlzdHMuXCIpO1xuXHRcdFx0XHRcdFx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIGdhbWUgaXMgZmluaXNoZWRcblx0XHRcdFx0XHRcdGlmKHJlcy5kYXRhLmZpbmlzaGVkKSB7XG5cdFx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIFwiVGhpcyBtYXRjaCBpcyBhbHJlYWR5IGZpbmlzaGVkLlwiKTtcblx0XHRcdFx0XHRcdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gQXJlIHdlIGluaXRpYXRvciBvciBvcHBvbmVudD9cblx0XHRcdFx0XHRcdHZhciB0ID0gcmVzLmRhdGEuaW5pdGlhdG9yID09IHNlbGYuc3RhdGUudGhyb3dlci5faWQgPyAnaScgOiAnbyc7XG5cblx0XHRcdFx0XHRcdC8vIE1ha2Ugc3VyZSBlYWNoIGdhbWUgaGFzIGFuIGludGlhdG9yIGFuZCBvcHBvbmVudFxuXHRcdFx0XHRcdFx0Zm9yKHZhciBrIGluIHJlcy5kYXRhLmdhbWVzKSB7XG5cdFx0XHRcdFx0XHRcdGZvcih2YXIgdyBvZiBbJ2knLCAnbyddKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYodHlwZW9mIHJlcy5kYXRhLmdhbWVzW2tdW3ddID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXMuZGF0YS5nYW1lc1trXVt3XSA9IHt9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgbWF0Y2ggc3RhdGVcblx0XHRcdFx0XHRcdHZhciBtcyA9IHNlbGYuY2FsY3VsYXRlTWF0Y2hTdGF0ZShyZXMuZGF0YSk7XG5cblx0XHRcdFx0XHRcdC8vIFN0b3JlIGl0IGluIHRoZSBzdGF0ZVxuXHRcdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFwiYWxpYXNcIjogdCA9PSAnaScgPyByZXMuZGF0YVsnb3Bwb25lbnRfYWxpYXMnXSA6IHJlcy5kYXRhWydpbml0aWF0b3JfYWxpYXMnXSxcblx0XHRcdFx0XHRcdFx0XCJiaWdheGVcIjogcmVzLmRhdGEuYmlnYXhlLFxuXHRcdFx0XHRcdFx0XHRcImdhbWVzXCI6IHJlcy5kYXRhLmdhbWVzLFxuXHRcdFx0XHRcdFx0XHRcImlkXCI6IGlkWzFdLFxuXHRcdFx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogbXMsXG5cdFx0XHRcdFx0XHRcdFwibW9kZVwiOiBcIm1hdGNoXCIsXG5cdFx0XHRcdFx0XHRcdFwiaXNcIjogdCxcblx0XHRcdFx0XHRcdH0sIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHdlJ3JlIGluIGdhbWVzIG1vZGUgb24gdGhyb3cgZml2ZSwgb3IgYmlnIGF4ZVxuXHRcdFx0XHRcdFx0XHQvL1x0cG9pbnRzIG1vZGUsIGFsbG93IGNsdXRjaGVzXG5cdFx0XHRcdFx0XHRcdGlmKChtcy5tb2RlID09ICdnYW1lcycgJiYgbXMudGhyb3cgPT0gJzUnKSB8fFxuXHRcdFx0XHRcdFx0XHRcdG1zLm1vZGUgPT0gJ2JpZ2F4ZV9wb2ludHMnKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2VsZi5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnc2VsZWN0Jztcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSByZXNldCB0aGUgc3RhdGVcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucmVzZXQoKTtcblx0XHR9XG5cdH1cblxuXHRtYXRjaENhbGxiYWNrKG1zZykge1xuXG5cdFx0Y29uc29sZS5sb2cobXNnKTtcblxuXHRcdC8vIElmIHdlIGdvdCBhbiB1cGRhdGUgb24gYSBiaWcgYXhlIHBvaW50cyB0aHJvd1xuXHRcdGlmKG1zZy50eXBlID09IFwiYmlnYXhlX3BvaW50c1wiKSB7XG5cblx0XHRcdC8vIElmIHdlIG5lZWQgdG8gc3RhcnRcblx0XHRcdGlmKG1zZy5zdWJ0eXBlID09IFwic3RhcnRcIikge1xuXG5cdFx0XHRcdC8vIENsb25lIHRoZSBtYXRjaCBzdGF0ZSBhbmQgYmlnYXhlXG5cdFx0XHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cdFx0XHRcdHZhciBiYSA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUuYmlnYXhlKTtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIG1vZGUgdG8gYmlnIGF4ZSB0YXJnZXQgYW5kIHJlc2V0IHRoZSB0aHJvdyB0byAxXG5cdFx0XHRcdG1zLm1vZGUgPSBcImJpZ2F4ZV9wb2ludHNcIjtcblx0XHRcdFx0bXMudGhyb3cgPSAwO1xuXHRcdFx0XHRtcy53YWl0aW5nID0gZmFsc2U7XG5cdFx0XHRcdG1zLmJpZ2F4ZV9jYW5fZmluaXNoXG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBwb2ludHMgc2VjdGlvblxuXHRcdFx0XHRiYVsncG9pbnRzJ10gPSB7XG5cdFx0XHRcdFx0XCJpXCI6IFtdLFxuXHRcdFx0XHRcdFwib1wiOiBbXVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBib2FyZCBtb2RlXG5cdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJiaWdheGVcIjogYmEsXG5cdFx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIGlmIHdlIGdvdCBhIHRocm93XG5cdFx0XHRlbHNlIGlmKG1zZy5zdWJ0eXBlID09IFwidGhyb3dcIikge1xuXG5cdFx0XHRcdC8vIENsb25lIHRoZSBiaWdheGUgYW5kIG1hdGNoIHN0YXRlXG5cdFx0XHRcdHZhciBiYSA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUuYmlnYXhlKTtcblx0XHRcdFx0dmFyIG1zID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tYXRjaFN0YXRlKTtcblxuXHRcdFx0XHQvLyBJZiBwb2ludHMgZG9lc24ndCBleGlzdFxuXHRcdFx0XHRpZih0eXBlb2YgYmFbJ3BvaW50cyddID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0YmFbJ3BvaW50cyddID0ge1wiaVwiOiBbXSwgXCJvXCI6IFtdfTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSB0aHJvd2VyIGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0aWYodHlwZW9mIGJhWydwb2ludHMnXVttc2cudGhyb3dlcl0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRiYVsncG9pbnRzJ11bbXNnLnRocm93ZXJdID0gW107XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgdGhyb3cgZG9lc24ndCBleGlzdFxuXHRcdFx0XHRpZihiYVsncG9pbnRzJ11bbXNnLnRocm93ZXJdLmxlbmd0aCA9PSBtc2cudGhyb3cpIHtcblx0XHRcdFx0XHRiYVsncG9pbnRzJ11bbXNnLnRocm93ZXJdLnB1c2goe1wiY2x1dGNoXCI6IG1zZy5jbHV0Y2gsIFwidmFsdWVcIjogbXNnLnZhbHVlfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YmFbJ3BvaW50cyddW21zZy50aHJvd2VyXVttc2cudGhyb3ddID0ge1wiY2x1dGNoXCI6IG1zZy5jbHV0Y2gsIFwidmFsdWVcIjogbXNnLnZhbHVlfTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgdGhyb3dzIHNvIHdlIGNhbiBrbm93IGlmIHdlJ3JlIGRvbmVcblx0XHRcdFx0bXMuYmlnYXhlX2Nhbl9maW5pc2ggPSB0aGlzLmNhbGN1bGF0ZUJpZ0F4ZUZpbmlzaGVkKCdwb2ludHMnLCB0aGlzLnN0YXRlKTtcblx0XHRcdFx0bXMud2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiYmlnYXhlXCI6IGJhLFxuXHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtc1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSB3ZSBhcmVuJ3QgYWN0dWFsbHkgZmluaXNoZWRcblx0XHRcdGVsc2UgaWYobXNnLnN1YnR5cGUgPT0gJ25vdGZpbmlzaGVkJykge1xuXG5cdFx0XHRcdC8vIENsb25lIHRoZSBtYXRjaCBzdGF0ZVxuXHRcdFx0XHR2YXIgbXMgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1hdGNoU3RhdGUpO1xuXG5cdFx0XHRcdC8vIFJlbW92ZSB3YWl0aW5nIGFuZCBzZXQgdG8gYmlnYXhlIHBvaW50cyBqdXN0IGluIGNhc2Vcblx0XHRcdFx0bXMubW9kZSA9ICdiaWdheGVfcG9pbnRzJztcblx0XHRcdFx0bXMud2FpdGluZyA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1wibWF0Y2hTdGF0ZVwiOiBtc30pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgd2UgZ290IGFuIHVwZGF0ZSBvbiBhIGJpZyBheGUgdGFyZ2V0IHRocm93XG5cdFx0ZWxzZSBpZihtc2cudHlwZSA9PSBcImJpZ2F4ZV90YXJnZXRcIikge1xuXG5cdFx0XHQvLyBJZiB3ZSBuZWVkIHRvIHN0YXJ0XG5cdFx0XHRpZihtc2cuc3VidHlwZSA9PSBcInN0YXJ0XCIpIHtcblxuXHRcdFx0XHQvLyBDbG9uZSB0aGUgbWF0Y2ggc3RhdGVcblx0XHRcdFx0dmFyIG1zID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tYXRjaFN0YXRlKTtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIG1vZGUgdG8gYmlnIGF4ZSB0YXJnZXQgYW5kIHJlc2V0IHRoZSB0aHJvdyB0byAxXG5cdFx0XHRcdG1zLm1vZGUgPSBcImJpZ2F4ZV90YXJnZXRcIjtcblx0XHRcdFx0bXMudGhyb3cgPSAwO1xuXHRcdFx0XHRtcy53YWl0aW5nID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBib2FyZCBtb2RlXG5cdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnO1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiYmlnYXhlXCI6IHtcblx0XHRcdFx0XHRcdFwidGFyZ2V0XCI6IHtcblx0XHRcdFx0XHRcdFx0XCJpXCI6IFtdLFxuXHRcdFx0XHRcdFx0XHRcIm9cIjogW11cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiBtc1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpZiB3ZSBnb3QgYSB0aHJvd1xuXHRcdFx0ZWxzZSBpZihtc2cuc3VidHlwZSA9PSBcInRocm93XCIpIHtcblxuXHRcdFx0XHQvLyBDbG9uZSB0aGUgYmlnYXhlIGFuZCBtYXRjaCBzdGF0ZVxuXHRcdFx0XHR2YXIgYmEgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmJpZ2F4ZSk7XG5cdFx0XHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHRcdFx0Ly8gSWYgaXQncyBmYWxzZSBvciB0YXJnZXQgZG9lc24ndCBleGlzdFxuXHRcdFx0XHRpZighYmEgfHwgdHlwZW9mIGJhWyd0YXJnZXQnXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGJhID0ge1widGFyZ2V0XCI6IHtcImlcIjogW10sIFwib1wiOiBbXX19XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgdGhyb3dlciBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdGlmKHR5cGVvZiBiYVsndGFyZ2V0J11bbXNnLnRocm93ZXJdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0YmFbJ3RhcmdldCddW21zZy50aHJvd2VyXSA9IFtdO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRocm93IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0aWYoYmFbJ3RhcmdldCddW21zZy50aHJvd2VyXS5sZW5ndGggPT0gbXNnLnRocm93KSB7XG5cdFx0XHRcdFx0YmFbJ3RhcmdldCddW21zZy50aHJvd2VyXS5wdXNoKG1zZy52YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0YmFbJ3RhcmdldCddW21zZy50aHJvd2VyXVttc2cudGhyb3ddID0gbXNnLnZhbHVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHRoZSB0aHJvd3Mgc28gd2UgY2FuIGtub3cgaWYgd2UncmUgZG9uZVxuXHRcdFx0XHRtcy5iaWdheGVfY2FuX2ZpbmlzaCA9IHRoaXMuY2FsY3VsYXRlQmlnQXhlRmluaXNoZWQoJ3RhcmdldCcsIHRoaXMuc3RhdGUpO1xuXHRcdFx0XHRtcy53YWl0aW5nID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJiaWdheGVcIjogYmEsXG5cdFx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIHdlIGFyZW4ndCBhY3R1YWxseSBmaW5pc2hlZFxuXHRcdFx0ZWxzZSBpZihtc2cuc3VidHlwZSA9PSAnbm90ZmluaXNoZWQnKSB7XG5cblx0XHRcdFx0Ly8gQ2xvbmUgdGhlIG1hdGNoIHN0YXRlXG5cdFx0XHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIHdhaXRpbmcgYW5kIHNldCB0byBiaWdheGUgdGFyZ2V0IGp1c3QgaW4gY2FzZVxuXHRcdFx0XHRtcy5tb2RlID0gJ2JpZ2F4ZV90YXJnZXQnO1xuXHRcdFx0XHRtcy53YWl0aW5nID0gZmFsc2U7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJtYXRjaFN0YXRlXCI6IG1zfSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB0aGUgbWF0Y2ggd2FzIGRlbGV0ZWRcblx0XHRlbHNlIGlmKG1zZy50eXBlID09ICdkZWxldGVkJykge1xuXG5cdFx0XHQvLyBOb3RpZnkgdGhlIHRocm93ZXJcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIHRoaXMuc3RhdGUuYWxpYXMgKyBcIiBkZWxldGVkIHRoZSBtYXRjaC5cIik7XG5cblx0XHRcdC8vIFJlc2V0XG5cdFx0XHR0aGlzLnJlc2V0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB3ZSBnb3QgYSBtZXNzYWdlIGFib3V0IGEgbmV3IHRocm93IGluIGEgZ2FtZVxuXHRcdGVsc2UgaWYobXNnLnR5cGUgPT0gJ2dhbWVzX3Rocm93Jykge1xuXG5cdFx0XHQvLyBDbG9uZSB0aGUgZ2FtZXNcblx0XHRcdHZhciBnYW1lcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUuZ2FtZXMpO1xuXG5cdFx0XHQvLyBDcmVhdGUgdGhlIGdhbWUgaWYgaXQgZG9lc24ndCBleGlzdFxuXHRcdFx0aWYodHlwZW9mIGdhbWVzW21zZy5nYW1lXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRnYW1lc1ttc2cuZ2FtZV0gPSB7XG5cdFx0XHRcdFx0XCJpXCI6IHt9LFxuXHRcdFx0XHRcdFwib1wiOiB7fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGUgdGhyb3dlciBzZWN0aW9uIG9mIHRoZSBnYW1lIGRvZXNuJ3QgZXhpc3Rcblx0XHRcdGlmKHR5cGVvZiBnYW1lc1ttc2cuZ2FtZV1bbXNnLnRocm93ZXJdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdGdhbWVzW21zZy5nYW1lXVttc2cudGhyb3dlcl0gPSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHRoZSB0aHJvd1xuXHRcdFx0Z2FtZXNbbXNnLmdhbWVdW21zZy50aHJvd2VyXVttc2cudGhyb3ddID0gbXNnLnZhbHVlO1xuXG5cdFx0XHQvLyBTZXQgdGhlIG5ldyBzdGF0ZVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJnYW1lc1wiOiBnYW1lc30pO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgd2UgZ290IGEgd2lubmVyXG5cdFx0ZWxzZSBpZihtc2cudHlwZSA9PSAnd2lubmVyJykge1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSB0aGUgd2lubmVyXG5cdFx0XHRpZihtc2cuaXMgPT0gdGhpcy5zdGF0ZS5pcykge1xuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcIndpbm5lclwiOiB0cnVlfSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2Ugd2UncmUgdGhlIGxvc2VyXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJsb3NlclwiOiB0cnVlfSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBhIHRpbWVvdXQgdG8gcmVzZXRcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdEhhc2guc2V0KFwiaWRcIiwgbnVsbCk7XG5cdFx0XHR9LCA1MDAwKTtcblx0XHR9XG5cdH1cblxuXHRvdmVyd3JpdGUoZXYpIHtcblxuXHRcdC8vIENsb25lIHRoZSBtYXRjaCBzdGF0ZVxuXHRcdHZhciBtcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUubWF0Y2hTdGF0ZSk7XG5cblx0XHQvLyBJZiB3ZSdyZSBpbiBnYW1lcyBtb2RlXG5cdFx0aWYobXMubW9kZSA9PSAnZ2FtZXMnKSB7XG5cblx0XHRcdC8vIENoYW5nZSB0aGUgdGhyb3dcblx0XHRcdG1zLnRocm93ID0gZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LnRocm93O1xuXG5cdFx0XHQvLyBTZXQgdGhlIGJvYXJkIG1vZGVcblx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gbXMudGhyb3cgPT0gJzUnID8gJ3NlbGVjdCcgOiAnbm9uZSc7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBpZiB3ZSdyZSBpbiBiaWdheGUgdGFyZ2V0IG1vZGVcblx0XHRlbHNlIGlmKG1zLm1vZGUgPT0gXCJiaWdheGVfdGFyZ2V0XCIgfHwgbXMubW9kZSA9PSAnYmlnYXhlX3BvaW50cycpIHtcblxuXHRcdFx0Ly8gQ2hhbmdlIHRoZSB0aHJvd1xuXHRcdFx0bXMudGhyb3cgPSBwYXJzZUludChldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudGhyb3cpO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcIm1hdGNoU3RhdGVcIjogbXMsXG5cdFx0XHRcIm92ZXJ3cml0ZVwiOiB0cnVlXG5cdFx0fSk7XG5cdH1cblxuXHRwb2ludHMoY2x1dGNoLCB2YWx1ZSkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIENsb25lIG1hdGNoIHN0YXRlXG5cdFx0dmFyIG1zID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tYXRjaFN0YXRlKTtcblxuXHRcdC8vIElmIHdlJ3JlIGluIGJpZyBheGUgbW9kZVxuXHRcdGlmKG1zLm1vZGUgPT0gXCJnYW1lc1wiKSB7XG5cblx0XHRcdC8vIElmIHdlJ3JlIG9uIHRocm93IFwiNlwiLCBha2EsIHdhaXRpbmcgdG8gZmluaXNoXG5cdFx0XHRpZihtcy50aHJvdyA9PSAnNicpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgXCJHbyB0byBuZXh0IGdhbWUgb3Igc2VsZWN0IGEgdGhyb3cgdG8gb3ZlcndyaXRlLlwiKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5zaG93KCk7XG5cblx0XHRcdC8vIENsb25lIHRoZSBnYW1lcyBhbmQgbWF0Y2ggc3RhdGVcblx0XHRcdHZhciBnYW1lcyA9IFRvb2xzLmNsb25lKHRoaXMuc3RhdGUuZ2FtZXMpO1xuXG5cdFx0XHQvLyBHZXQgdGhlIHZhbHVlIG9yIHZhbHVlL2NsdXRjaFxuXHRcdFx0dmFyIHZhbHVlID0gKG1zLnRocm93ID09ICc1JykgPyB7XCJjbHV0Y2hcIjogY2x1dGNoLCBcInZhbHVlXCI6IHZhbHVlfSA6IHZhbHVlO1xuXG5cdFx0XHQvLyBTdG9yZSB0aGUgcG9pbnQgdmFsdWVcblx0XHRcdGdhbWVzW21zLmdhbWVdW3RoaXMuc3RhdGUuaXNdW21zLnRocm93XSA9IHZhbHVlO1xuXG5cdFx0XHQvLyBTYXZlIHRoZSB2YWx1ZSBhbmQgbm90aWZ5IHRoZSBvcHBvbmVudFxuXHRcdFx0U2VydmljZXMudXBkYXRlKCduYXRmJywgJ21hdGNoL2dhbWUnLCB7XG5cdFx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS5pZCxcblx0XHRcdFx0XCJnYW1lXCI6IG1zLmdhbWUsXG5cdFx0XHRcdFwidGhyb3dcIjogbXMudGhyb3csXG5cdFx0XHRcdFwidmFsdWVcIjogdmFsdWVcblx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGUgb3ZlcndyaXRlIGZsYWcgaXMgc2V0XG5cdFx0XHRcdFx0aWYoc2VsZi5zdGF0ZS5vdmVyd3JpdGUpIHtcblx0XHRcdFx0XHRcdHZhciB0ID0gXCI2XCJcblx0XHRcdFx0XHRcdGZvcih0IG9mIFtcIjFcIiwgXCIyXCIsIFwiM1wiLCBcIjRcIiwgXCI1XCIsIFwiNlwiXSkge1xuXHRcdFx0XHRcdFx0XHRpZih0eXBlb2YgZ2FtZXNbbXMuZ2FtZV1bc2VsZi5zdGF0ZS5pc11bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bXMudGhyb3cgPSB0O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRtcy50aHJvdyA9IChwYXJzZUludChtcy50aHJvdykgKyAxKS50b1N0cmluZygpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFNldCB0aGUgYm9hcmQgbW9kZVxuXHRcdFx0XHRcdHNlbGYucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gbXMudGhyb3cgPT0gJzUnID8gJ3NlbGVjdCcgOiAnbm9uZSc7XG5cblx0XHRcdFx0XHQvLyBVcGRhdGUgdGhlIHN0YXRlXG5cdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcImdhbWVzXCI6IGdhbWVzLFxuXHRcdFx0XHRcdFx0XCJtYXRjaFN0YXRlXCI6IG1zLFxuXHRcdFx0XHRcdFx0XCJvdmVyd3JpdGVcIjogZmFsc2Vcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXG5cdFx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHRcdH0pXG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSB3ZSdyZSBpbiBhIGJpZ2F4ZSBtb2RlXG5cdFx0ZWxzZSB7XG5cblx0XHRcdC8vIENsb25lIHRoZSBiaWdheGUgc3RhdGVcblx0XHRcdHZhciBiaWdheGUgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmJpZ2F4ZSk7XG5cblx0XHRcdC8vIE9wcG9uZW50IGlzIG9wcG9zaXRlIG9mIHRocm93ZXJcblx0XHRcdHZhciBzTyA9IHRoaXMuc3RhdGUuaXMgPT0gJ2knID8gJ28nIDogJ2knO1xuXG5cdFx0XHQvLyBJZiB3ZSdyZSBpbiB0YXJnZXRcblx0XHRcdGlmKG1zLm1vZGUgPT0gXCJiaWdheGVfdGFyZ2V0XCIpIHtcblxuXHRcdFx0XHQvLyBJZiB0aGUgdmFsdWUgaXMgMSwgMywgb3IgNSwgaXQncyBjb25zaWRlcmVkIGEgMVxuXHRcdFx0XHRpZihbMSwgMywgNV0uaW5kZXhPZih2YWx1ZSkgPiAwKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSAxO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyB0YXJnZXRcblx0XHRcdFx0aWYodHlwZW9mIGJpZ2F4ZVsndGFyZ2V0J10gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRiaWdheGVbJ3RhcmdldCddID0ge1xuXHRcdFx0XHRcdFx0XCJmaW5pc2hlZFwiOiAwLFxuXHRcdFx0XHRcdFx0XCJpXCI6IFtdLFxuXHRcdFx0XHRcdFx0XCJvXCI6IFtdXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZSBsZW5ndGggb2YgdGhpcyB0aHJvd2VycyB0aHJvd3MgaXMgbm90IGVxdWFsIG9yIDEgbGVzc1xuXHRcdFx0XHQvL1x0dGhhbiB0aGUgb3Bwb25lbnRzLCB3ZSBjYW4ndCBhY2NlcHQgdGhpcyB0aHJvd1xuXHRcdFx0XHRpZighdGhpcy5zdGF0ZS5vdmVyd3JpdGUgJiYgYmlnYXhlWyd0YXJnZXQnXVt0aGlzLnN0YXRlLmlzXS5sZW5ndGggPiBiaWdheGVbJ3RhcmdldCddW3NPXS5sZW5ndGgpIHtcblx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBcIlBsZWFzZSB3YWl0IGZvciBcIiArIHRoaXMuc3RhdGUuYWxpYXMgKyBcIiB0byBtYWtlIHRoZWlyIHRocm93LlwiKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRcdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdFx0XHQvLyBJZiB0aGUgdmFsdWUgZG9lc24ndCBleGlzdCB5ZXQsIHB1c2ggaXRcblx0XHRcdFx0aWYoYmlnYXhlWyd0YXJnZXQnXVt0aGlzLnN0YXRlLmlzXS5sZW5ndGggPT0gbXMudGhyb3cpIHtcblx0XHRcdFx0XHRiaWdheGVbJ3RhcmdldCddW3RoaXMuc3RhdGUuaXNdLnB1c2godmFsdWUpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRWxzZSwgb3ZlcndyaXRlIGl0XG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdGJpZ2F4ZVsndGFyZ2V0J11bdGhpcy5zdGF0ZS5pc11bbXMudGhyb3ddID0gdmFsdWU7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTYXZlIHRoZSB2YWx1ZSBhbmQgbm90aWZ5IHRoZSBvcHBvbmVudFxuXHRcdFx0XHRTZXJ2aWNlcy51cGRhdGUoJ25hdGYnLCAnbWF0Y2gvYmlnYXhlL3RhcmdldCcsIHtcblx0XHRcdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUuaWQsXG5cdFx0XHRcdFx0XCJ0aHJvd1wiOiBtcy50aHJvdyxcblx0XHRcdFx0XHRcInZhbHVlXCI6IHZhbHVlXG5cdFx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIG92ZXJ3cml0ZSBmbGFnIGlzIHNldFxuXHRcdFx0XHRcdFx0aWYoc2VsZi5zdGF0ZS5vdmVyd3JpdGUpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHQgPSAwO1xuXHRcdFx0XHRcdFx0XHRmb3IoOyB0cnVlOyArK3QpIHtcblx0XHRcdFx0XHRcdFx0XHRpZih0eXBlb2YgYmlnYXhlWyd0YXJnZXQnXVtzZWxmLnN0YXRlLmlzXVt0XSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG1zLnRocm93ID0gdDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1zLnRocm93ICs9IDE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgdGhyb3dzIHNvIHdlIGNhbiBrbm93IGlmIHdlJ3JlIGRvbmVcblx0XHRcdFx0XHRcdG1zLmJpZ2F4ZV9jYW5fZmluaXNoID0gc2VsZi5jYWxjdWxhdGVCaWdBeGVGaW5pc2hlZCgndGFyZ2V0Jywgc2VsZi5zdGF0ZSk7XG5cblx0XHRcdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFx0XCJiaWdheGVcIjogYmlnYXhlLFxuXHRcdFx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogbXMsXG5cdFx0XHRcdFx0XHRcdFwib3ZlcndyaXRlXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2Ugd2UncmUgaW4gcG9pbnRzXG5cdFx0XHRlbHNlIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIG5vIHBvaW50c1xuXHRcdFx0XHRpZih0eXBlb2YgYmlnYXhlWydwb2ludHMnXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGJpZ2F4ZVsncG9pbnRzJ10gPSB7XG5cdFx0XHRcdFx0XHRcImZpbmlzaGVkXCI6IDAsXG5cdFx0XHRcdFx0XHRcImlcIjogW10sXG5cdFx0XHRcdFx0XHRcIm9cIjogW11cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGxlbmd0aCBvZiB0aGlzIHRocm93ZXJzIHRocm93cyBpcyBub3QgZXF1YWwgb3IgMSBsZXNzXG5cdFx0XHRcdC8vXHR0aGFuIHRoZSBvcHBvbmVudHMsIHdlIGNhbid0IGFjY2VwdCB0aGlzIHRocm93XG5cdFx0XHRcdGlmKCF0aGlzLnN0YXRlLm92ZXJ3cml0ZSAmJiBiaWdheGVbJ3BvaW50cyddW3RoaXMuc3RhdGUuaXNdLmxlbmd0aCA+IGJpZ2F4ZVsncG9pbnRzJ11bc09dLmxlbmd0aCkge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIFwiUGxlYXNlIHdhaXQgZm9yIFwiICsgdGhpcy5zdGF0ZS5hbGlhcyArIFwiIHRvIG1ha2UgdGhlaXIgdGhyb3cuXCIpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdFx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0XHRcdC8vIElmIHRoZSB2YWx1ZSBkb2Vzbid0IGV4aXN0IHlldCwgcHVzaCBpdFxuXHRcdFx0XHRpZihiaWdheGVbJ3BvaW50cyddW3RoaXMuc3RhdGUuaXNdLmxlbmd0aCA9PSBtcy50aHJvdykge1xuXHRcdFx0XHRcdGJpZ2F4ZVsncG9pbnRzJ11bdGhpcy5zdGF0ZS5pc10ucHVzaCh2YWx1ZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBFbHNlLCBvdmVyd3JpdGUgaXRcblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0YmlnYXhlWydwb2ludHMnXVt0aGlzLnN0YXRlLmlzXVttcy50aHJvd10gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNhdmUgdGhlIHZhbHVlIGFuZCBub3RpZnkgdGhlIG9wcG9uZW50XG5cdFx0XHRcdFNlcnZpY2VzLnVwZGF0ZSgnbmF0ZicsICdtYXRjaC9iaWdheGUvcG9pbnRzJywge1xuXHRcdFx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS5pZCxcblx0XHRcdFx0XHRcInRocm93XCI6IG1zLnRocm93LFxuXHRcdFx0XHRcdFwiY2x1dGNoXCI6IGNsdXRjaCxcblx0XHRcdFx0XHRcInZhbHVlXCI6IHZhbHVlXG5cdFx0XHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIG92ZXJ3cml0ZSBmbGFnIGlzIHNldFxuXHRcdFx0XHRcdFx0aWYoc2VsZi5zdGF0ZS5vdmVyd3JpdGUpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHQgPSAwO1xuXHRcdFx0XHRcdFx0XHRmb3IoOyB0cnVlOyArK3QpIHtcblx0XHRcdFx0XHRcdFx0XHRpZih0eXBlb2YgYmlnYXhlWydwb2ludHMnXVtzZWxmLnN0YXRlLmlzXVt0XSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdG1zLnRocm93ID0gdDtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG1zLnRocm93ICs9IDE7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgdGhyb3dzIHNvIHdlIGNhbiBrbm93IGlmIHdlJ3JlIGRvbmVcblx0XHRcdFx0XHRcdG1zLmJpZ2F4ZV9jYW5fZmluaXNoID0gc2VsZi5jYWxjdWxhdGVCaWdBeGVGaW5pc2hlZCgncG9pbnRzJywgc2VsZi5zdGF0ZSk7XG5cblx0XHRcdFx0XHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFx0XCJiaWdheGVcIjogYmlnYXhlLFxuXHRcdFx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogbXMsXG5cdFx0XHRcdFx0XHRcdFwib3ZlcndyaXRlXCI6IGZhbHNlXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0XHQvLyBIaWRlIGxvYWRlclxuXHRcdFx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXRmXCI+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGUgPT0gJ29wcG9uZW50JyAmJlxuXHRcdFx0XHRcdDxPcHBvbmVudCB0aHJvd2VyPXtzZWxmLnN0YXRlLnRocm93ZXJ9IG9uU2VsZWN0PXtzZWxmLnJlcXVlc3RDcmVhdGV9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kZSA9PSAncmVxdWVzdCcgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXhpc3RpbmdcIj5cblx0XHRcdFx0XHRcdFx0PHA+V2FpdGluZyBmb3Ige3NlbGYuc3RhdGUuYWxpYXN9IHRvIGFjY2VwdCB5b3VyIG1hdGNoIHJlcXVlc3Q8L3A+XG5cdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17c2VsZi5yZXF1ZXN0Q2FuY2VsfT5DYW5jZWwgUmVxdWVzdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kZSA9PSAnZXhpc3RpbmcnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2VudGVyXCI+XG5cdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5leGlzdGluZy5tYXAoZnVuY3Rpb24obSwgaSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXYga2V5PXtpfSBkYXRhLWlkPXttLl9pZH0gY2xhc3NOYW1lPVwiZXhpc3RpbmdcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwPllvdSBoYXZlIGFuIGV4aXN0aW5nIG1hdGNoIHdpdGgge20uYWxpYXN9LCBkbyB5b3Ugd2lzaCB0byBjb250aW51ZT88L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NlbGYuZXhpc3RpbmdEZWxldGV9PkRlbGV0ZTwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLmV4aXN0aW5nQ29udGludWV9PkNvbnRpbnVlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RlID09ICdtYXRjaCcgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjdHVhbFwiPlxuXHRcdFx0XHRcdFx0PEJvYXJkIHJlZj1cImJvYXJkXCIgY2x1dGNoTW9kZT1cIm5vbmVcIiBvblBvaW50cz17c2VsZi5wb2ludHN9IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInN0YXRzXCI+XG5cdFx0XHRcdFx0XHRcdHtzZWxmLnJlbmRlclByaW1hcnkoKX1cblx0XHRcdFx0XHRcdFx0e3NlbGYucmVuZGVyU2Vjb25kYXJ5KCl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiIHN0eWxlPXt7XCJkaXNwbGF5XCI6IHNlbGYuc3RhdGUubWF0Y2hTdGF0ZS53YWl0aW5nID8gJ2Jsb2NrJyA6ICdub25lJ319PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuPldhaXRpbmcgZm9yIHtzZWxmLnN0YXRlLmFsaWFzfTwvc3Bhbj48L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUud2lubmVyICYmXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZmlyZXdvcmtzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cIndpbm5lclwiPllPVSBXT04hPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicHlyb1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiZWZvcmVcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWZ0ZXJcIj48L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5sb3NlciAmJlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuIGNsYXNzTmFtZT1cImxvc2VyXCI+U2FkbHksIHlvdSBsb3N0LiBCZXR0ZXIgbHVjayBuZXh0IHRpbWUuPC9zcGFuPjwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlckJpZ0F4ZSgpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBJbml0IHRoZSByb3dzXG5cdFx0dmFyIHJvd3MgPSBbXTtcblxuXHRcdC8vIE9wcG9uZW50IGlzIG9wcG9zaXRlIG9mIHRocm93ZXJcblx0XHR2YXIgc08gPSB0aGlzLnN0YXRlLmlzID09ICdpJyA/ICdvJzogJ2knO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBhIHRhcmdldCBzZWN0aW9uXG5cdFx0dmFyIGFkZF90b19wb2ludHMgPSAwO1xuXHRcdGlmKHRoaXMuc3RhdGUuYmlnYXhlLnRhcmdldCkge1xuXHRcdFx0dmFyIHRhcmdldCA9IHRoaXMuc3RhdGUuYmlnYXhlLnRhcmdldDtcblx0XHRcdGZvcih2YXIgaSA9IDA7IHRydWU7ICsraSkge1xuXHRcdFx0XHRpZih0YXJnZXRbdGhpcy5zdGF0ZS5pc10ubGVuZ3RoIDw9IGkgJiZcblx0XHRcdFx0XHR0YXJnZXRbc09dLmxlbmd0aCA8PSBpKSB7XG5cdFx0XHRcdFx0YWRkX3RvX3BvaW50cyA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFyIGNvbHVtbnMgPSBbJycsICcnXTtcblx0XHRcdFx0aWYodHlwZW9mIHRhcmdldFt0aGlzLnN0YXRlLmlzXVtpXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGNvbHVtbnNbMF0gPSB0YXJnZXRbdGhpcy5zdGF0ZS5pc11baV07XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYodHlwZW9mIHRhcmdldFtzT11baV0gIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRjb2x1bW5zWzFdID0gdGFyZ2V0W3NPXVtpXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCB0aGUgcm93XG5cdFx0XHRcdHJvd3MucHVzaCg8dHI+XG5cdFx0XHRcdFx0XHRcdDx0ZD57aSsxfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZFxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5vdmVyd3JpdGUgJiYgdGhpcy5zdGF0ZS5tYXRjaFN0YXRlLm1vZGUgPT0gJ2JpZ2F4ZV90YXJnZXQnICYmIHRoaXMuc3RhdGUubWF0Y2hTdGF0ZS50aHJvdyA9PSBpID8gJ292ZXJ3cml0ZScgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRocm93PXtpfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3ZlcndyaXRlfVxuXHRcdFx0XHRcdFx0XHQ+e2NvbHVtbnNbMF19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntjb2x1bW5zWzFdfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBhIHBvaW50cyBzZWN0aW9uXG5cdFx0aWYodGhpcy5zdGF0ZS5iaWdheGUucG9pbnRzKSB7XG5cdFx0XHR2YXIgcG9pbnRzID0gdGhpcy5zdGF0ZS5iaWdheGUucG9pbnRzO1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgdHJ1ZTsgKytpKSB7XG5cdFx0XHRcdGlmKHBvaW50c1t0aGlzLnN0YXRlLmlzXS5sZW5ndGggPD0gaSAmJlxuXHRcdFx0XHRcdHBvaW50c1tzT10ubGVuZ3RoIDw9IGkpIHtcblx0XHRcdFx0XHRhZGRfdG9fcG9pbnRzID0gaTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgY29sdW1ucyA9IFsnJywgJyddO1xuXHRcdFx0XHRpZih0eXBlb2YgcG9pbnRzW3RoaXMuc3RhdGUuaXNdW2ldICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0Y29sdW1uc1swXSA9IHBvaW50c1t0aGlzLnN0YXRlLmlzXVtpXTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZih0eXBlb2YgcG9pbnRzW3NPXVtpXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGNvbHVtbnNbMV0gPSBwb2ludHNbc09dW2ldO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSByb3dcblx0XHRcdFx0cm93cy5wdXNoKDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPnthZGRfdG9fcG9pbnRzK2krMX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGRcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3RoaXMuc3RhdGUub3ZlcndyaXRlICYmIHRoaXMuc3RhdGUubWF0Y2hTdGF0ZS50aHJvdyA9PSBpID8gJ292ZXJ3cml0ZScgOiAoY29sdW1uc1swXS5jbHV0Y2ggPyAnY2x1dGNoJyA6ICcnKX1cblx0XHRcdFx0XHRcdFx0XHRkYXRhLXRocm93PXtpfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMub3ZlcndyaXRlfVxuXHRcdFx0XHRcdFx0XHQ+e2NvbHVtbnNbMF0udmFsdWV9PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzTmFtZT17Y29sdW1uc1sxXS5jbHV0Y2ggPyAnY2x1dGNoJyA6ICcnfT57Y29sdW1uc1sxXS52YWx1ZX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj4pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJpZ2F4ZVwiPlxuXHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+QjwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS50aHJvd2VyLmFsaWFzfTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS5hbGlhc308L3RoPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdHtyb3dzfVxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1hdGNoU3RhdGUuYmlnYXhlX2Nhbl9maW5pc2ggJiZcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuYmlnYXhlRmluaXNofT5GaW5pc2hlZDwvYnV0dG9uPlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cblxuXHRyZW5kZXJHYW1lKCkge1xuXG5cdFx0Ly8gT3Bwb25lbnQgaXMgb3Bwb3NpdGUgb2YgdGhyb3dlclxuXHRcdHZhciBzTyA9IHRoaXMuc3RhdGUuaXMgPT0gJ2knID8gJ28nOiAnaSc7XG5cblx0XHQvLyBXaGF0IGdhbWUgYXJlIHdlIGluP1xuXHRcdHZhciBnID0gdGhpcy5zdGF0ZS5nYW1lc1t0aGlzLnN0YXRlLm1hdGNoU3RhdGUuZ2FtZV07XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJnYW1lXCI+XG5cdFx0XHRcdDx0YWJsZT5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdDx0aD5UPC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPnt0aGlzLnN0YXRlLnRocm93ZXIuYWxpYXN9PC90aD5cblx0XHRcdFx0XHRcdFx0PHRoPnt0aGlzLnN0YXRlLmFsaWFzfTwvdGg+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+MTwvdGQ+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckdhbWVUaHJvdyhcIjFcIil9XG5cdFx0XHRcdFx0XHRcdDx0ZD57Z1tzT11bXCIxXCJdfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+MjwvdGQ+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckdhbWVUaHJvdyhcIjJcIil9XG5cdFx0XHRcdFx0XHRcdDx0ZD57Z1tzT11bXCIyXCJdfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+MzwvdGQ+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckdhbWVUaHJvdyhcIjNcIil9XG5cdFx0XHRcdFx0XHRcdDx0ZD57Z1tzT11bXCIzXCJdfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+NDwvdGQ+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckdhbWVUaHJvdyhcIjRcIil9XG5cdFx0XHRcdFx0XHRcdDx0ZD57Z1tzT11bXCI0XCJdfTwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+NTwvdGQ+XG5cdFx0XHRcdFx0XHRcdHt0aGlzLnJlbmRlckdhbWVUaHJvdyhcIjVcIil9XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzc05hbWU9e2dbc09dW1wiNVwiXSAmJiBnW3NPXVtcIjVcIl0uY2x1dGNoID8gJ2NsdXRjaCcgOiAnJ30+e2dbc09dW1wiNVwiXSA/IChnW3NPXVtcIjVcIl0udmFsdWUpIDogJyd9PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0e3RoaXMuc3RhdGUubWF0Y2hTdGF0ZS50aHJvdyA9PSAnNicgJiZcblx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuZ2FtZUZpbmlzaH0+e3RoaXMuc3RhdGUubWF0Y2hTdGF0ZS5nYW1lID09IFwiM1wiID8gXCJGaW5pc2hcIiA6IFwiTmV4dCBHYW1lXCJ9PC9idXR0b24+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRyZW5kZXJHYW1lVGhyb3codCkge1xuXG5cdFx0Ly8gVGhlIGdhbWVcblx0XHR2YXIgZyA9IHRoaXMuc3RhdGUubWF0Y2hTdGF0ZS5nYW1lO1xuXG5cdFx0Ly8gVGhlIHZhbHVlIG9mIHRoZSB0aHJvd1xuXHRcdHZhciB2ID0gbnVsbDtcblx0XHRpZih0aGlzLnN0YXRlLmdhbWVzW2ddICYmIHR5cGVvZiB0aGlzLnN0YXRlLmdhbWVzW2ddW3RoaXMuc3RhdGUuaXNdKSB7XG5cdFx0XHR2ID0gdGhpcy5zdGF0ZS5nYW1lc1tnXVt0aGlzLnN0YXRlLmlzXVt0XTtcblx0XHR9XG5cblx0XHQvLyBJZiB3ZSdyZSB3b3JraW5nIG9uIDVcblx0XHRpZih0ID09ICc1Jykge1xuXG5cdFx0XHQvLyBJZiB0aGUgdmFsdWUgZXhpc3RzXG5cdFx0XHRpZih0eXBlb2YgdiAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRyZXR1cm4gPHRkXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5vdmVyd3JpdGUgJiYgdGhpcy5zdGF0ZS5tYXRjaFN0YXRlLnRocm93ID09IHQgPyAnb3ZlcndyaXRlJyA6ICh2LmNsdXRjaCA/ICdjbHV0Y2gnIDogJycpfVxuXHRcdFx0XHRcdFx0XHRkYXRhLXRocm93PXt0fVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0aGlzLm92ZXJ3cml0ZX1cblx0XHRcdFx0XHRcdD57di52YWx1ZX08L3RkPlxuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlLCB0aGVyZSdzIG5vIHZhbHVlXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cmV0dXJuIDx0ZD48L3RkPlxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaXQncyAxIHRvIDRcblx0XHRlbHNlIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGV4aXN0c1xuXHRcdFx0aWYodHlwZW9mIHYgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0cmV0dXJuIDx0ZFxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e3RoaXMuc3RhdGUub3ZlcndyaXRlICYmIHRoaXMuc3RhdGUubWF0Y2hTdGF0ZS50aHJvdyA9PSB0ID8gJ292ZXJ3cml0ZScgOiAnJ31cblx0XHRcdFx0XHRcdFx0ZGF0YS10aHJvdz17dH1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17dGhpcy5vdmVyd3JpdGV9XG5cdFx0XHRcdFx0XHQ+e3Z9PC90ZD5cblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgdGhlcmUncyBubyB2YWx1ZVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHJldHVybiA8dGQ+PC90ZD5cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZW5kZXJQcmltYXJ5KCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcG9pbnRzIHBlciBnYW1lXG5cdFx0dmFyIG9Qb2ludHMgPSB7XG5cdFx0XHRcImlcIjogWzAsIDAsIDBdLFxuXHRcdFx0XCJvXCI6IFswLCAwLCAwXVxuXHRcdH1cblxuXHRcdC8vIE9wcG9uZW50IGlzIG9wcG9zaXRlIG9mIHRocm93ZXJcblx0XHR2YXIgc08gPSB0aGlzLnN0YXRlLmlzID09ICdpJyA/ICdvJzogJ2knO1xuXG5cdFx0Ly8gQ2FsY3VsYXRlIHRoZSBwb2ludHNcblx0XHRmb3IodmFyIGcgb2YgW1wiMVwiLCBcIjJcIiwgXCIzXCJdKSB7XG5cdFx0XHR2YXIgaUcgPSBwYXJzZUludChnKSAtIDE7XG5cdFx0XHRpZih0aGlzLnN0YXRlLmdhbWVzW2ddKSB7XG5cdFx0XHRcdGZvcih2YXIgdCBvZiBbXCIxXCIsIFwiMlwiLCBcIjNcIiwgXCI0XCIsIFwiNVwiXSkge1xuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUuZ2FtZXNbZ11bJ2knXVt0XSkge1xuXHRcdFx0XHRcdFx0aWYodCA9PSAnNScpIHtcblx0XHRcdFx0XHRcdFx0b1BvaW50c1snaSddW2lHXSArPSB0aGlzLnN0YXRlLmdhbWVzW2ddWydpJ11bdF0udmFsdWUgPT0gJ2QnID8gMCA6IHRoaXMuc3RhdGUuZ2FtZXNbZ11bJ2knXVt0XS52YWx1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG9Qb2ludHNbJ2knXVtpR10gKz0gdGhpcy5zdGF0ZS5nYW1lc1tnXVsnaSddW3RdID09ICdkJyA/IDAgOiB0aGlzLnN0YXRlLmdhbWVzW2ddWydpJ11bdF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUuZ2FtZXNbZ11bJ28nXVt0XSkge1xuXHRcdFx0XHRcdFx0aWYodCA9PSAnNScpIHtcblx0XHRcdFx0XHRcdFx0b1BvaW50c1snbyddW2lHXSArPSB0aGlzLnN0YXRlLmdhbWVzW2ddWydvJ11bdF0udmFsdWUgPT0gJ2QnID8gMCA6IHRoaXMuc3RhdGUuZ2FtZXNbZ11bJ28nXVt0XS52YWx1ZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG9Qb2ludHNbJ28nXVtpR10gKz0gdGhpcy5zdGF0ZS5nYW1lc1tnXVsnbyddW3RdID09ICdkJyA/IDAgOiB0aGlzLnN0YXRlLmdhbWVzW2ddWydvJ11bdF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwib3ZlcmFsbFwiPlxuXHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHQ8dGg+RzwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS50aHJvd2VyLmFsaWFzfTwvdGg+XG5cdFx0XHRcdFx0XHRcdDx0aD57dGhpcy5zdGF0ZS5hbGlhc308L3RoPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjE8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e29Qb2ludHNbdGhpcy5zdGF0ZS5pc11bMF19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3NPXVswXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjI8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e29Qb2ludHNbdGhpcy5zdGF0ZS5pc11bMV19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3NPXVsxXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PHRkPjM8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e29Qb2ludHNbdGhpcy5zdGF0ZS5pc11bMl19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPntvUG9pbnRzW3NPXVsyXX08L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlclNlY29uZGFyeSgpIHtcblxuXHRcdC8vIElmIHdlJ3JlIGluIGdhbWVzIG1vZGVcblx0XHRpZih0aGlzLnN0YXRlLm1hdGNoU3RhdGUubW9kZSA9PSBcImdhbWVzXCIpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbmRlckdhbWUoKTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlJ3JlIGluIGEgYmlnYXhlIG1vZGVcblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbmRlckJpZ0F4ZSgpO1xuXHRcdH1cblx0fVxuXG5cdHJlcXVlc3RDYWxsYmFjayhtc2cpIHtcblxuXHRcdC8vIElmIHRoZSBtYXRjaCB3YXMgYWNjZXB0ZWRcblx0XHRpZihtc2cudHlwZSA9PSAnYWNjZXB0ZWQnKSB7XG5cdFx0XHRIYXNoLnNldCgnaWQnLCAnbXwnICsgbXNnLm1hdGNoKTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIGl0IHdhcyByZWplY3RlZFxuXHRcdGVsc2UgaWYobXNnLnR5cGUgPT0gJ3JlamVjdGVkJykge1xuXHRcdFx0dGhpcy5yZXF1ZXN0UmVzZXQoKTtcblx0XHR9XG5cdH1cblxuXHRyZXF1ZXN0Q2FuY2VsKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAncmVxdWVzdCcpIHtcblxuXHRcdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5zaG93KCk7XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgbWF0Y2ggcmVxdWVzdFxuXHRcdFx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS5pZFxuXHRcdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgaXQncyBhbHJlYWR5IGRlbGV0ZWRcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSAhPSAxMTA0KSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlcXVlc3RSZXNldCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRcdHNlbGYucmVxdWVzdFJlc2V0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRcdExvYWRlci5oaWRlKClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVxdWVzdENyZWF0ZShvcHBvbmVudCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBNYWtlIGEgbWF0Y2ggcmVxdWVzdCBmb3IgdGhpcyBvcHBvbmVudFxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFx0XCJvcHBvbmVudFwiOiBvcHBvbmVudC5faWQsXG5cdFx0XHRcIm9yZ1wiOiBcIk5BVEZcIlxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgaGFzaFxuXHRcdFx0XHRIYXNoLnNldCgnaWQnLCAncnwnICsgcmVzLmRhdGEpXG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVxdWVzdFJlc2V0KCkge1xuXG5cdFx0Ly8gU3RvcCBsaXN0ZW5pbmcgZm9yIGFuIHVwZGF0ZSBvbiB0aGUgcmVxdWVzdFxuXHRcdFR3b1dheS51bnRyYWNrKFxuXHRcdFx0J2F1dGgnLFxuXHRcdFx0J3JlcXVlc3QtJyArIHRoaXMuc3RhdGUuaWQsXG5cdFx0XHR0aGlzLnJlcXVlc3RDYWxsYmFja1xuXHRcdCk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIElEIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblxuXHRcdC8vIENoYW5nZSB0aGUgbW9kZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJpZFwiOiBmYWxzZSxcblx0XHRcdFwibW9kZVwiOiBcIm9wcG9uZW50XCJcblx0XHR9KTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJhbGlhc1wiOiAnJyxcblx0XHRcdFwiYmlnYXhlXCI6IGZhbHNlLFxuXHRcdFx0XCJleGlzdGluZ1wiIDogZmFsc2UsXG5cdFx0XHRcImdhbWVzXCI6IGZhbHNlLFxuXHRcdFx0XCJpZFwiOiBmYWxzZSxcblx0XHRcdFwibG9zZXJcIjogZmFsc2UsXG5cdFx0XHRcIm1hdGNoU3RhdGVcIjogZmFsc2UsXG5cdFx0XHRcIm1vZGVcIjogXCJvcHBvbmVudFwiLFxuXHRcdFx0XCJpc1wiOiAnJyxcblx0XHRcdFwid2lubmVyXCI6IGZhbHNlXG5cdFx0fSk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXG5cdFx0Ly8gU2V0IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IHRocm93ZXJ9KTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gSUQgaW4gdGhlIGhhc2hcblx0XHR2YXIgaWQgPSBIYXNoLmdldCgnaWQnKTtcblx0XHRpZihpZCkge1xuXHRcdFx0dGhpcy5pZENhbGxiYWNrKGlkKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5leGlzdGluZ0ZldGNoKCk7XG5cdFx0fVxuXHR9XG5cblx0c2lnbm91dCgpIHtcblxuXHRcdC8vIFNldCBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBJRCBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ2lkJywgbnVsbCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7XG4iLCIvKipcbiAqIE5BVEYgUHJhY3RpY2VcbiAqXG4gKiBNYW5hZ2VzIHRyYWNraW5nIGFuZCBzdG9yaW5nIHByYWN0aWNlIG9uIGFuIE5BVEYgYm9hcmRcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIwXG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzLmpzJyk7XG5cbi8vIFJlYWN0IGNvbXBvbmVudHNcbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4uL2VsZW1lbnRzL21vZGFsLmpzeCcpO1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZC5qc3gnKTtcblxuLy8gUHJhY3RpY2UgQ29tcG9uZW50XG5jbGFzcyBQcmFjdGljZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogMCxcblx0XHRcdFwiY2x1dGNoSGl0c1wiOiAwLFxuXHRcdFx0XCJtb2RlXCI6IG51bGwsXG5cdFx0XHRcInBvaW50c1wiOiBbXSxcblx0XHRcdFwic2hvd1BvaW50c1wiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiBwcm9wcy50aHJvd2VyLFxuXHRcdFx0XCJ0b3RhbFBvaW50c1wiOiAwXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMubW9kZVNlbGVjdCA9IHRoaXMubW9kZVNlbGVjdC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3ZlcndyaXRlID0gdGhpcy5vdmVyd3JpdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50cyA9IHRoaXMucG9pbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHNIaWRlID0gdGhpcy5wb2ludHNIaWRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHNTaG93ID0gdGhpcy5wb2ludHNTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXNldCA9IHRoaXMucmVzZXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdub3V0ID0gdGhpcy5zaWdub3V0LmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBkYXRhIGluIGxvY2FsIHN0b3JhZ2Vcblx0XHRpZignbmF0Zl9wcmFjdGljZScgaW4gbG9jYWxTdG9yYWdlKSB7XG5cdFx0XHR2YXIgbmV3X3N0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXSk7XG5cdFx0XHRuZXdfc3RhdGUudGhyb3dlciA9IHRoaXMuc3RhdGUudGhyb3dlcjtcblx0XHRcdHRoaXMuc2V0U3RhdGUobmV3X3N0YXRlLCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdzdXBlcm5hdHVyYWwnKSB7XG5cdFx0XHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoICUgNSA9PSA0KSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnY2x1dGNoJykge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRcdGRlbGV0ZSBsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIElmIHdlIGhhdmUgcG9pbnRzLCBzdG9yZSB0aGVtIGluIGxvY2FsIHN0b3JhZ2Vcblx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgpIHtcblx0XHRcdGxvY2FsU3RvcmFnZVsnbmF0Zl9wcmFjdGljZSddID0gSlNPTi5zdHJpbmdpZnkodGhpcy5zdGF0ZSk7XG5cdFx0fVxuXHR9XG5cblx0bW9kZVNlbGVjdChldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RlXCI6IGV2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5tb2RlXG5cdFx0fSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRzd2l0Y2godGhpcy5zdGF0ZS5tb2RlKSB7XG5cdFx0XHRcdGNhc2UgJ2ZyZWUnOlxuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7IGJyZWFrO1xuXHRcdFx0XHRjYXNlICdzdXBlcm5hdHVyYWwnOlxuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ25vbmUnOyBicmVhaztcblx0XHRcdFx0Y2FzZSAnY2x1dGNoJzpcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7IGJyZWFrO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0b3ZlcndyaXRlKGV2KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJvdmVyd3JpdGVcIjogdHJ1ZX0sIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBJZiB0aGUgbW9kZSBpcyBmcmVlXG5cdFx0XHRpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ2ZyZWUnKSB7XG5cdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ3NlbGVjdCc7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaWYgdGhlIG1vZGUgaXMgc3VwZXJuYXR1cmFsXG5cdFx0XHRlbHNlIGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3VwZXJuYXR1cmFsJykge1xuXG5cdFx0XHRcdC8vIElmIHdlJ3JlIGRpdmlzaWJsZSBieSA1XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gMCkge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cG9pbnRzKGNsdXRjaCwgdmFsdWUpIHtcblxuXHRcdC8vIEdldCB0aGUgaW50IHZlcnNpb24gb2YgdGhlIHZhbHVlXG5cdFx0dmFyIHYgPSBwYXJzZUludCh2YWx1ZSk7XG5cblx0XHQvLyBJZiB0aGUgb3ZlcndyaXRlIGZsYWcgaXMgc2V0XG5cdFx0aWYodGhpcy5zdGF0ZS5vdmVyd3JpdGUpIHtcblxuXHRcdFx0Ly8gR3JhYiB0aGUgbGFzdCB2YWx1ZVxuXHRcdFx0dmFyIGxhc3QgPSB0aGlzLnN0YXRlLnBvaW50c1t0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgtMV07XG5cblx0XHRcdC8vIEJhY2t0cmFjayB0aGUgY2x1dGNoIHN0YXRzXG5cdFx0XHRpZihsYXN0WzBdKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMgLT0gMTtcblx0XHRcdFx0aWYobGFzdFsxXSA9PSA3KSB7XG5cdFx0XHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hIaXRzIC09IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQmFja3RyYWNrIHRoZSBwb2ludHMgc3RhdHNcblx0XHRcdGlmKGxhc3RbMV0gIT0gJ2QnKSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUudG90YWxQb2ludHMgLT0gbGFzdFsxXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBsYXN0IGl0ZW1cblx0XHRcdHRoaXMuc3RhdGUucG9pbnRzLnBvcCgpO1xuXHRcdH1cblxuXHRcdC8vIEFkZCB0byB0aGUgcG9pbnRzIGxpc3Rcblx0XHR0aGlzLnN0YXRlLnBvaW50cy5wdXNoKFtjbHV0Y2gsICh2YWx1ZSA9PSAnZCcgPyB2YWx1ZSA6IHYpXSk7XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSBjbHV0Y2ggYXR0ZW1wdFxuXHRcdGlmKGNsdXRjaCkge1xuXHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hBdHRlbXB0cyArPSAxO1xuXHRcdFx0aWYodmFsdWUgPT0gNykge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmNsdXRjaEhpdHMgKz0gMTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB3ZSBnb3QgYSB2YWx1ZVxuXHRcdGlmKHYgPiAwKSB7XG5cdFx0XHR0aGlzLnN0YXRlLnRvdGFsUG9pbnRzICs9IHY7XG5cdFx0fVxuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMsXG5cdFx0XHRcImNsdXRjaEhpdHNcIjogdGhpcy5zdGF0ZS5jbHV0Y2hIaXRzLFxuXHRcdFx0XCJvdmVyd3JpdGVcIjogZmFsc2UsXG5cdFx0XHRcInBvaW50c1wiOiB0aGlzLnN0YXRlLnBvaW50cyxcblx0XHRcdFwidG90YWxQb2ludHNcIjogdGhpcy5zdGF0ZS50b3RhbFBvaW50c1xuXHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdzdXBlcm5hdHVyYWwnKSB7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gNCkge1xuXHRcdFx0XHRcdHRoaXMucmVmcy5ib2FyZC5jbHV0Y2hNb2RlID0gJ2V4cGVjdGVkJztcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cG9pbnRzSGlkZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInNob3dQb2ludHNcIjogZmFsc2V9KTtcblx0fVxuXG5cdHBvaW50c1Nob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJzaG93UG9pbnRzXCI6IHRydWV9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHBvaW50c1xuXHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCkge1xuXG5cdFx0XHQvLyBJbml0IHRoZSBsYXN0IGluZGV4XG5cdFx0XHR2YXIgbGFzdCA9IDI4O1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGxlc3MgdGhhbiAyOVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoIDwgMjkpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAtIDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF0ZlwiPlxuXHRcdFx0XHQ8ZGwgY2xhc3NOYW1lPVwic2VsZWN0XCIgc3R5bGU9e3tcImRpc3BsYXlcIjogc2VsZi5zdGF0ZS5tb2RlID09IG51bGwgPyAnYmxvY2snOidub25lJ319PlxuXHRcdFx0XHRcdDxkdCBkYXRhLW1vZGU9XCJmcmVlXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5GcmVlIFByYWN0aWNlPC9kdD5cblx0XHRcdFx0XHQ8ZGQ+SW4gZnJlZSBwcmFjdGljZSBhbnkgcG9pbnRzIGFyZSBhdmFpbGFibGUgYXQgYW55IHRpbWUuIFlvdSBtdXN0IHNlbGVjdCB0aGUgY2x1dGNoIGZpcnN0IGlmIHlvdSB3aXNoIHRvIHRyeSBmb3IgaXQuPC9kZD5cblx0XHRcdFx0XHQ8ZHQgZGF0YS1tb2RlPVwic3VwZXJuYXR1cmFsXCIgb25DbGljaz17dGhpcy5tb2RlU2VsZWN0fT5TdXBlcm5hdHVyYWwgLyBVbmljb3JuPC9kdD5cblx0XHRcdFx0XHQ8ZGQ+SW4gc3VwZXJuYXR1cmFsIHByYWN0aWNlIGV2ZXJ5IGZpZnRoIHRocm93IGlzIGZvciBjbHV0Y2gsIGFuZCBpdCB3aWxsIGJlIHByZS1zZWxlY3RlZCBmb3IgeW91IG9uIHRob3NlIHR1cm5zLjwvZGQ+XG5cdFx0XHRcdFx0PGR0IGRhdGEtbW9kZT1cImNsdXRjaFwiIG9uQ2xpY2s9e3RoaXMubW9kZVNlbGVjdH0+Q2x1dGNoPC9kdD5cblx0XHRcdFx0XHQ8ZGQ+SW4gY2x1dGNoIHByYWN0aWNlIGV2ZXJ5IHRocm93IGlzIGZvciB0aGUgY2x1dGNoLCBhbmQgaXQgd2lsbCBiZSBwcmUtc2VsZWN0ZWQgZXZlcnkgdHVybi48L2RkPlxuXHRcdFx0XHQ8L2RsPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XCJkaXNwbGF5XCI6IHNlbGYuc3RhdGUubW9kZSA9PSBudWxsID8gJ25vbmUnOidibG9jayd9fT5cblx0XHRcdFx0XHQ8Qm9hcmQgcmVmPVwiYm9hcmRcIiBjbHV0Y2hNb2RlPXtzZWxmLnN0YXRlLm1vZGV9IG9uUG9pbnRzPXtzZWxmLnBvaW50c30gLz5cblx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2ZXJhZ2VzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2x1dGNoZXMgZnJpZ2h0XCI+PGI+Q2x1dGNoICU6IDwvYj48c3Bhbj57c2VsZi5zdGF0ZS5jbHV0Y2hBdHRlbXB0cyA9PSAwID8gXCIwLjBcIiA6ICgoc2VsZi5zdGF0ZS5jbHV0Y2hIaXRzIC8gc2VsZi5zdGF0ZS5jbHV0Y2hBdHRlbXB0cykgKiAxMDAuMCkudG9GaXhlZCgxKX08L3NwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImF2ZXJhZ2UgZmxlZnRcIj48Yj5BdmcgVGhyb3c6IDwvYj48c3Bhbj57KHNlbGYuc3RhdGUudG90YWxQb2ludHMgLyBzZWxmLnN0YXRlLnBvaW50cy5sZW5ndGgpLnRvRml4ZWQoMil9PC9zcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLmxlbmd0aCA+IDI5ICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBrZXk9ey0xfSBjbGFzc05hbWU9XCJsaW5rIGJvbGRcIiBvbkNsaWNrPXtzZWxmLnBvaW50c1Nob3d9Pi4uLjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLnNsaWNlKC0yOSkubWFwKGZ1bmN0aW9uKHAsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGkgPT0gbGFzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e1wibGFzdCBcIiArIChzZWxmLnN0YXRlLm92ZXJ3cml0ZSA/ICdvdmVyd3JpdGUnIDogKHBbMF0gPyAnY2x1dGNoJyA6ICcnKSl9IG9uQ2xpY2s9e3NlbGYub3ZlcndyaXRlfT57cFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3BbMF0gPyAnY2x1dGNoJzonJ30+e3BbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzZXQgZnJpZ2h0XCIgb25DbGljaz17c2VsZi5yZXNldH0+UmVzZXQ8L2Rpdj5cblx0XHRcdFx0XHR7KHRoaXMuc3RhdGUudGhyb3dlciAmJiB0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggPiAwKSAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzYXZlIGZsZWZ0XCIgb25DbGljaz17c2VsZi5zYXZlfT5TYXZlICYgUmVzZXQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e3NlbGYuc3RhdGUuc2hvd1BvaW50cyAmJlxuXHRcdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHRcdHRpdGxlPVwiQWxsIHBvaW50cyB0aGlzIHByYWN0aWNlXCJcblx0XHRcdFx0XHRcdFx0Y2xvc2U9e3NlbGYucG9pbnRzSGlkZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGxQb2ludHNcIj5cblx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMubWFwKGZ1bmN0aW9uKHAsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17cFswXSA/ICdjbHV0Y2gnOicnfT57cFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmVzZXQgZmxhZ1xuXHRcdHZhciByZXNldCA9IHRydWU7XG5cblx0XHQvLyBJZiB0aGVyZSdzIHBvaW50c1xuXHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCkge1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBmbGFnIGJhc2VkIG9uIHRoZSB1c2VyJ3MgcmVzcG9uc2Vcblx0XHRcdHJlc2V0ID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHlvdXIgcHJhY3RpY2U/Jyk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgY2FuIHJlc2V0XG5cdFx0aWYocmVzZXQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IDAsXG5cdFx0XHRcdFwiY2x1dGNoSGl0c1wiOiAwLFxuXHRcdFx0XHRcIm1vZGVcIjogbnVsbCxcblx0XHRcdFx0XCJwb2ludHNcIjogW10sXG5cdFx0XHRcdFwic2hvd1BvaW50c1wiOiBmYWxzZSxcblx0XHRcdFx0XCJ0b3RhbFBvaW50c1wiOiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzYXZlKGV2KSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gU2VuZCB0aGUgcHJhY3RpY2UgdG8gdGhlIE5BVEYgc2VydmljZVxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnbmF0ZicsICdwcmFjdGljZScsIHtcblx0XHRcdFwicG9pbnRzXCI6IHRoaXMuc3RhdGUucG9pbnRzXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gTm90aWZ5XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzdWNjZXNzJywgJ1ByYWN0aWNlIHNhdmVkIScpO1xuXG5cdFx0XHRcdC8vIFJlc2V0XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogMCxcblx0XHRcdFx0XHRcImNsdXRjaEhpdHNcIjogMCxcblx0XHRcdFx0XHRcIm1vZGVcIjogbnVsbCxcblx0XHRcdFx0XHRcInBvaW50c1wiOiBbXSxcblx0XHRcdFx0XHRcInNob3dQb2ludHNcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJ0b3RhbFBvaW50c1wiOiAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogdGhyb3dlcn0pO1xuXHR9XG5cblx0c2lnbm91dCgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBQcmFjdGljZTtcbiIsIi8qKlxuICogTkFURiBTdGF0c1xuICpcbiAqIEZldGNocyBhbmQgZGlzcGxheXMgTkFURiBzdGF0cyBmb3IgcHJhY3RpY2UgYW5kIG1hdGNoZXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI1XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzLmpzJyk7XG5cbi8vIENvbXBvbmVudHNcbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4uL2VsZW1lbnRzL21vZGFsLmpzeCcpO1xuXG4vLyBTdGF0cyBjb21wb25lbnRcbmNsYXNzIFN0YXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJtYXRjaFwiOiBudWxsLFxuXHRcdFx0XCJwcmFjdGljZVwiOiBudWxsLFxuXHRcdFx0XCJwcmFjdGljZV9hbGxcIjogZmFsc2UsXG5cdFx0XHRcInByYWN0aWNlX2RhdGFcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5tYXRjaFN0YXRzID0gdGhpcy5tYXRjaFN0YXRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZURhdGEgPSB0aGlzLnByYWN0aWNlRGF0YS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJhY3RpY2VEYXRhSGlkZSA9IHRoaXMucHJhY3RpY2VEYXRhSGlkZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0cyA9IHRoaXMucHJhY3RpY2VTdGF0cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0c0FsbCA9IHRoaXMucHJhY3RpY2VTdGF0c0FsbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluID0gdGhpcy5zaWduaW4uYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25vdXQgPSB0aGlzLnNpZ25vdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIHNpZ25pbiAvIHNpZ25vdXRcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBJZiBzb21lb25lIGlzIGxvZ2dlZCBpblxuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXG5cdFx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2Ugc3RhdHNcblx0XHRcdHRoaXMucHJhY3RpY2VTdGF0cygpO1xuXG5cdFx0XHQvLyBGZXRjaCB0aGUgbWF0Y2ggc3RhdHNcblx0XHRcdC8vdGhpcy5tYXRjaFN0YXRzKCk7XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIHNpZ25pbiAvIHNpZ25vdXRcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0fVxuXG5cdG1hdGNoU3RhdHMoKSB7XG5cblx0XHQvLyBTYXZlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIG1hdGNoIHN0YXRzXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdtYXRjaC9zdGF0cycsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXRzIHRvIHRoZSBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcIm1hdGNoXCI6IHJlcy5kYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByYWN0aWNlRGF0YShldikge1xuXG5cdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBkYXRhXG5cdFx0U2VydmljZXMucmVhZCgnbmF0ZicsICdwcmFjdGljZS9kYXRhJywge1xuXHRcdFx0XCJpZFwiOiBldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWRcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXRzIHRvIHRoZSBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcInByYWN0aWNlX2RhdGFcIjogcmVzLmRhdGFcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJhY3RpY2VEYXRhSGlkZSgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInByYWN0aWNlX2RhdGFcIjogZmFsc2V9KTtcblx0fVxuXG5cdHByYWN0aWNlU3RhdHMoYWxsKSB7XG5cblx0XHQvLyBJZiBBbGwgaXMgbm90IHBhc3NlZFxuXHRcdGlmKHR5cGVvZiBhbGwgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGFsbCA9IGZhbHNlXG5cdFx0fVxuXG5cdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBzdGF0c1xuXHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAncHJhY3RpY2Uvc3RhdHMnLCB7XG5cdFx0XHRcImFsbFwiOiBhbGxcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBBZGQgdGhlIHN0YXRzIHRvIHRoZSBzdGF0ZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcInByYWN0aWNlXCI6IHJlcy5kYXRhLFxuXHRcdFx0XHRcdFwicHJhY3RpY2VfYWxsXCI6IGFsbFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcmFjdGljZVN0YXRzQWxsKCkge1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0cyh0cnVlKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dmFyIHByYWN0aWNlID0gdGhpcy5zdGF0ZS5wcmFjdGljZTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuYXRmXCI+XG5cdFx0XHRcdHt0aGlzLnN0YXRlLnByYWN0aWNlICYmXG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PGgyPlByYWN0aWNlPC9oMj5cblx0XHRcdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJwcmFjdGljZVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwiZGF0ZVwiPiA8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwicG9pbnRzXCI+UG9pbnRzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInRocm93c1wiPlRocm93czwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJkcm9wc1wiPkRyb3BzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPVwiMlwiPkF2ZXJhZ2UgUG9pbnRzPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjb2xTcGFuPVwiM1wiPkhpdCBSYXRlczwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiYXZlcmFnZVwiPlRvdGFsPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJhdmVyYWdlXCI+VGFyZ2V0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJyYXRlXCI+VG90YWw8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInJhdGVcIj5UYXJnZXQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInJhdGVcIj5DbHV0Y2g8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+T3ZlcmFsbDwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnBvaW50cy50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC50aHJvd3MuYXR0ZW1wdHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwudGhyb3dzLmRyb3BzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLmF2ZXJhZ2UudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwuYXZlcmFnZS50YXJnZXR9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucmF0ZS50b3RhbH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwucmF0ZS50YXJnZXR9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnJhdGUuY2x1dGNofSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0e3ByYWN0aWNlLmxhc3QubWFwKGZ1bmN0aW9uKG8sIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDx0ciBrZXk9e2l9IGRhdGEtaWQ9e28uX2lkfSBjbGFzc05hbWU9XCJzZXNzaW9uXCIgb25DbGljaz17c2VsZi5wcmFjdGljZURhdGF9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57VXRpbHMuZGF0ZShvLl9jcmVhdGVkKX08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5wb2ludHMudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28udGhyb3dzLmF0dGVtcHRzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnRocm93cy5kcm9wc308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5hdmVyYWdlLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLmF2ZXJhZ2UudGFyZ2V0fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnJhdGUudG90YWx9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnJhdGUudGFyZ2V0fSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5yYXRlLmNsdXRjaH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0XHRcdFx0eyF0aGlzLnN0YXRlLnByYWN0aWNlX2FsbCAmJlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17dGhpcy5wcmFjdGljZVN0YXRzQWxsfT5GZXRjaCBBbGw8L3A+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7dGhpcy5zdGF0ZS5wcmFjdGljZV9kYXRhICYmXG5cdFx0XHRcdFx0XHRcdDxNb2RhbFxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiUHJhY3RpY2UgRGF0YVwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xvc2U9e3NlbGYucHJhY3RpY2VEYXRhSGlkZX1cblx0XHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxsUG9pbnRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wcmFjdGljZV9kYXRhLm1hcChmdW5jdGlvbihwLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17cFswXSA/ICdjbHV0Y2gnOicnfT57XCJcIiArIHBbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tYXRjaCAmJlxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXG5cdFx0Ly8gU2V0IHRoZSB0aHJvd2VyXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IHRocm93ZXJ9KTtcblxuXHRcdC8vIEZldGNoIHRoZSBwcmFjdGljZSBzdGF0c1xuXHRcdHRoaXMucHJhY3RpY2VTdGF0cygpO1xuXG5cdFx0Ly8gRmV0Y2ggdGhlIG1hdGNoIHN0YXRzXG5cdFx0Ly90aGlzLm1hdGNoU3RhdHMoKTtcblx0fVxuXG5cdHNpZ25vdXQoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJ0aHJvd2VyXCI6IGZhbHNlfSk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gU3RhdHM7XG4iLCIvKipcbiAqIE9wcG9uZW50XG4gKlxuICogQSBjb21wb25lbnQgZm9yIHNlbGVjdGluZyBhbiBvcHBvbmVudCB2aWEgZmF2b3VyaXRlcyBvciBzZWFyY2hcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI3XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBMb2FkZXIgPSByZXF1aXJlKCcuLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIG1vZHVsZXNcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4uL3V0aWxzLmpzJyk7XG5cbi8vIEVsZW1lbnRzXG52YXIgSW5wdXRFbnRlciA9IHJlcXVpcmUoXCIuL2VsZW1lbnRzL2lucHV0RW50ZXIuanN4XCIpO1xuXG4vLyBTb3J0IGZhdm91cml0ZXNcbmZ1bmN0aW9uIGFsaWFzU29ydChhLCBiKSB7XG5cdHJldHVybiBhLmFsaWFzLmxvY2FsZUNvbXBhcmUoYi5hbGlhcyk7XG59XG5cbmNsYXNzIE9wcG9uZW50Um93IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJmYXZvdXJpdGVcIjogcHJvcHMuZmF2b3VyaXRlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXJcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZFxuXHRcdHRoaXMuYWRkID0gdGhpcy5hZGQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnJlbW92ZSA9IHRoaXMucmVtb3ZlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcblx0XHRpZihwcmV2UHJvcHMudGhyb3dlci5faWQgIT0gdGhpcy5wcm9wcy50aHJvd2VyLl9pZCkge1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFwiZmF2b3VyaXRlXCI6IHRoaXMucHJvcHMuZmF2b3VyaXRlLFxuXHRcdFx0XHRcInRocm93ZXJcIjogdGhpcy5wcm9wcy50aHJvd2VyXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuXG5cdGFkZChldikge1xuXG5cdFx0Ly8gU3RvcCBhbnkgZnVydGhlciBldmVudHNcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2VydmljZSB0byBhZGQgdGhlIGZhdm91cml0ZVxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdmYXZvdXJpdGUnLCB7XG5cdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUudGhyb3dlci5faWRcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJmYXZvdXJpdGVcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbW92ZShldikge1xuXG5cdFx0Ly8gU3RvcCBhbnkgZnVydGhlciBldmVudHNcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gQ2FsbCB0aGUgc2VydmljZSB0byBhZGQgdGhlIGZhdm91cml0ZVxuXHRcdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdmYXZvdXJpdGUnLCB7XG5cdFx0XHRcImlkXCI6IHRoaXMuc3RhdGUudGhyb3dlci5faWRcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJmYXZvdXJpdGVcIjogZmFsc2V9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDx0ciBvbkNsaWNrPXt0aGlzLnNlbGVjdGVkfT5cblx0XHRcdFx0PHRkPnt0aGlzLnN0YXRlLnRocm93ZXIuYWxpYXN9PC90ZD5cblx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdHt0aGlzLnN0YXRlLmZhdm91cml0ZSA/XG5cdFx0XHRcdFx0XHQ8aSBjbGFzc05hbWU9XCJmYXMgZmEtdXNlci10aW1lc1wiIHN0eWxlPXt7Y29sb3I6IFwicmVkXCJ9fSBvbkNsaWNrPXt0aGlzLnJlbW92ZX0+PC9pPlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLXBsdXNcIiBzdHlsZT17e2NvbG9yOiBcImdyZWVuXCJ9fSBvbkNsaWNrPXt0aGlzLmFkZH0+PC9pPlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0PC90ZD5cblx0XHRcdDwvdHI+XG5cdFx0KVxuXHR9XG5cblx0c2VsZWN0ZWQoZXYpIHtcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHR0aGlzLnByb3BzLnNlbGVjdGVkKHRoaXMuc3RhdGUudGhyb3dlcik7XG5cdH1cbn1cblxuLy8gT3Bwb25lbnQgQ29tcG9uZW50XG5jbGFzcyBPcHBvbmVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiZmF2b3VyaXRlc1wiOiBbXSxcblx0XHRcdFwibW9kZVwiOiBcImZhdm91cml0ZXNcIixcblx0XHRcdFwic2VhcmNoXCI6IFtdLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHByb3BzLnRocm93ZXJcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5mYXZvdXJpdGVTaG93ID0gdGhpcy5mYXZvdXJpdGVTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWFyY2ggPSB0aGlzLnNlYXJjaC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VhcmNoU2hvdyA9IHRoaXMuc2VhcmNoU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblxuXHRcdC8vIElmIHNvbWVvbmUgaXMgbG9nZ2VkIGluXG5cdFx0aWYodGhpcy5zdGF0ZS50aHJvd2VyKSB7XG5cdFx0XHR0aGlzLmZhdm91cml0ZXMoKTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdH1cblxuXHRmYXZvdXJpdGVzKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGdldCB0aGUgZmF2b3VyaXRlc1xuXHRcdFNlcnZpY2VzLnJlYWQoJ2F1dGgnLCAnZmF2b3VyaXRlcycsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTb3J0IHRoZSBkYXRhXG5cdFx0XHRcdHJlcy5kYXRhLnNvcnQoYWxpYXNTb3J0KTtcblxuXHRcdFx0XHQvLyBTdG9yZSB0aGUgZmF2b3VyaXRlc1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcImZhdm91cml0ZXNcIjogcmVzLmRhdGF9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRmYXZvdXJpdGVTaG93KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kZVwiOiBcImZhdm91cml0ZXNcIn0pXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGUgPT0gJ2Zhdm91cml0ZXMnID9cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4+RmF2b3JpdGVzPC9zcGFuPiB8IDxzcGFuIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXtzZWxmLnNlYXJjaFNob3d9PlNlYXJjaDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0OlxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJsaW5rXCIgb25DbGljaz17c2VsZi5mYXZvdXJpdGVTaG93fT5GYXZvcml0ZXM8L3NwYW4+IHwgPHNwYW4+U2VhcmNoPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImZvcm1cIj5cblx0XHRcdFx0XHRcdFx0PHA+PElucHV0RW50ZXIgb25FbnRlcj17c2VsZi5zZWFyY2h9IHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IGFsaWFzXCIgLz48L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHRcdDx0YWJsZT5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dHI+PHRoPkFsaWFzPC90aD48dGg+RmF2b3JpdGU8L3RoPjwvdHI+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RlID09ICdmYXZvdXJpdGVzJyA/XG5cdFx0XHRcdFx0XHRcdHNlbGYuc3RhdGUuZmF2b3VyaXRlcy5tYXAoZnVuY3Rpb24odCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8T3Bwb25lbnRSb3cga2V5PXtpfSB0aHJvd2VyPXt0fSBmYXZvdXJpdGU9e3RydWV9IHNlbGVjdGVkPXtzZWxmLnNlbGVjdGVkfSAvPlxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0XHRzZWxmLnN0YXRlLnNlYXJjaC5tYXAoZnVuY3Rpb24odCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiA8T3Bwb25lbnRSb3cga2V5PXtpfSB0aHJvd2VyPXt0fSBmYXZvdXJpdGU9e2ZhbHNlfSBzZWxlY3RlZD17c2VsZi5zZWxlY3RlZH0gLz5cblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHQpO1xuXHR9XG5cblx0c2VhcmNoKHEpIHtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gcXVlcnksIGRvIG5vdGhpbmdcblx0XHRpZihxLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGdldCB0aGUgc2VhcmNoIHJlc3VsdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ3NlYXJjaCcsIHtcblx0XHRcdFwicVwiOiBxXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU29ydCB0aGUgZGF0YVxuXHRcdFx0XHRyZXMuZGF0YS5zb3J0KGFsaWFzU29ydCk7XG5cblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGZhdm91cml0ZXNcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJzZWFyY2hcIjogcmVzLmRhdGF9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdHNlYXJjaFNob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RlXCI6IFwic2VhcmNoXCJ9KVxuXHR9XG5cblx0c2VsZWN0ZWQodGhyb3dlcikge1xuXHRcdGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uU2VsZWN0ID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZWxlY3QodGhyb3dlcik7XG5cdFx0fVxuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblx0XHR0aGlzLmZhdm91cml0ZXMoKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBPcHBvbmVudDtcbiIsIi8qKlxuICogUHJhY2l0Y2VcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBwcmFjdGljZSBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgb25lIGJhc2VkIG9uIHdoYXRcbiAqIGlzIGNob3NlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBOYXRmID0gcmVxdWlyZSgnLi9uYXRmL3ByYWN0aWNlLmpzeCcpO1xuXG4vLyBQcmFjdGljZSBjb21wb25lbnRcbmNsYXNzIFByYWN0aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJvcmdcIjogSGFzaC5nZXQoJ29yZycsICduYXRmJylcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5vcmdDaGFuZ2UgPSB0aGlzLm9yZ0NoYW5nZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcblxuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IG9yZyBoYXNoIGNoYW5nZSBldmVudHNcblx0XHRIYXNoLnVud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgb3JnIGZyb20gdGhlIGhhc2hcblx0XHRIYXNoLnNldCgnb3JnJywgbnVsbCk7XG5cdH1cblxuXHRtZW51Q2hhbmdlKG9yZykge1xuXHRcdEhhc2guc2V0KCdvcmcnLCBvcmcpO1xuXHR9XG5cblx0b3JnQ2hhbmdlKG9yZykge1xuXHRcdGlmKG9yZyAhPSB0aGlzLnN0YXRlLm9yZykge1xuXHRcdFx0aWYob3JnID09IG51bGwpIHtcblx0XHRcdFx0b3JnID0gJ25hdGYnO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XCJvcmdcIjogb3JnfSk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInByYWN0aWNlXCI+XG5cdFx0XHRcdDxNZW51IGNsYXNzTmFtZT1cIm1lbnUgc2Vjb25kYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUub3JnfSBvbkNoYW5nZT17c2VsZi5tZW51Q2hhbmdlfT5cblx0XHRcdFx0XHQ8SXRlbSBuYW1lPVwibmF0ZlwiPk5BVEY8L0l0ZW0+XG5cdFx0XHRcdDwvTWVudT5cblx0XHRcdFx0PGRpdiBpZD1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUub3JnID09ICduYXRmJyAmJlxuXHRcdFx0XHRcdFx0XHQ8TmF0ZiB0aHJvd2VyPXtzZWxmLnByb3BzLnRocm93ZXJ9IC8+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBQcmFjdGljZTtcbiIsIi8qKlxuICogU2l0ZVxuICpcbiAqIFByaW1hcnkgY29tcG9uZW50IGZvciB0aGUgZW50aXJlIHNpdGVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTIwXG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcbnZhciBNZXNzYWdlcyA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVzc2FnZXMuanN4Jyk7XG52YXIgUG9wdXBzID0gcmVxdWlyZSAoJy4vZWxlbWVudHMvcG9wdXBzLmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBIZWFkZXIgPSByZXF1aXJlKCcuL2hlYWRlci5qc3gnKTtcbnZhciBNYXRjaCA9IHJlcXVpcmUoJy4vbWF0Y2guanN4Jyk7XG52YXIgUHJhY3RpY2UgPSByZXF1aXJlKCcuL3ByYWN0aWNlLmpzeCcpO1xudmFyIFN0YXRzID0gcmVxdWlyZSgnLi9zdGF0cy5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRcbmNsYXNzIFNpdGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0IHRoZSBoYXNoIG1vZHVsZSBhbmQgd2F0Y2ggZm9yIHBhZ2UgY2hhbmdlc1xuXHRcdEhhc2guaW5pdCgpO1xuXHRcdEhhc2gud2F0Y2goJ3BhZ2UnLCB0aGlzLmhhc2hDaGFuZ2UuYmluZCh0aGlzKSlcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0LmJpbmQodGhpcykpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJwYWdlXCI6IEhhc2guZ2V0KCdwYWdlJywgJ2hvbWUnKSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLnBhZ2VDaGFuZ2UgPSB0aGlzLnBhZ2VDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGhhc2hDaGFuZ2UocGFnZSkge1xuXHRcdC8vIElmIHRoZSBwYWdlIGhhcyBjaGFuZ2VkXG5cdFx0aWYocGFnZSAhPSB0aGlzLnN0YXRlLnBhZ2UpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wicGFnZVwiOiBwYWdlID8gcGFnZSA6IFwiaG9tZVwifSlcblx0XHRcdHRoaXMucmVmcy5tZW51LnNlbGVjdGVkID0gcGFnZTtcblx0XHR9XG5cdH1cblxuXHRwYWdlQ2hhbmdlKG5hbWUpIHtcblx0XHRIYXNoLnNldChcInBhZ2VcIiwgbmFtZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU3R1cGlkIHJlYWN0XG5cdFx0dmFyIGl0ZW1zID0gW1xuXHRcdFx0Lyo8SXRlbSBrZXk9ezB9IG5hbWU9XCJnYW1lc1wiPkdhbWVzPC9JdGVtPiwqL1xuXHRcdFx0PEl0ZW0ga2V5PXsxfSBuYW1lPVwicHJhY3RpY2VcIj5QcmFjdGljZTwvSXRlbT5cblx0XHRdO1xuXHRcdGlmKHRoaXMuc3RhdGUudGhyb3dlcikge1xuXHRcdFx0aXRlbXMucHVzaCg8SXRlbSBrZXk9ezJ9IG5hbWU9XCJtYXRjaFwiPk1hdGNoPC9JdGVtPik7XG5cdFx0XHQvL2l0ZW1zLnB1c2goPEl0ZW0ga2V5PXszfSBuYW1lPVwibGVhZ3VlXCI+TGVhZ3VlPC9JdGVtPik7XG5cdFx0XHRpdGVtcy5wdXNoKDxJdGVtIGtleT17NH0gbmFtZT1cInN0YXRzXCI+U3RhdHM8L0l0ZW0+KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cInNpdGVcIj5cblx0XHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0XHQ8TWVudSByZWY9XCJtZW51XCIgY2xhc3NOYW1lPVwibWVudSBwcmltYXJ5XCIgc2VsZWN0ZWQ9e3NlbGYuc3RhdGUucGFnZX0gb25DaGFuZ2U9e3NlbGYucGFnZUNoYW5nZX0+XG5cdFx0XHRcdFx0e2l0ZW1zfVxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ2hvbWUnICYmXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGwgaWQ9XCJob21lXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGR0PnYxLjIuMDwvZHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZhLXVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPk5BVEYgTWF0Y2hlcyBub3cgYXZhaWxhYmxlLiBGaW5kIG90aGVyIHNpZ25lZCB1cCB0aHJvd2VycyBhbmQgY2hhbGxlbmdlIHRoZW0gdG8gYSAzIGdhbWUgbWF0Y2guPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+VGhyb3dlcnMgY2FuIGJlIGFkZGVkIHRvIHlvdXIgZmF2b3JpdGVzIGxpc3QgZm9yIGVhc3kgbWF0Y2ggc3RhcnRpbmcgYnkgY2xpY2tpbmcgb24gdGhlIGdyZWVuIGljb24gYmVzaWRlIHRoZWlyIG5hbWUuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+TWF0Y2ggc3RhdHMgYXJlIG5vdCB5ZXQgYXZhaWxhYmxlLCBidXQgZmVhciBub3QsIHRoZSBzdGF0cyB3aWxsIG5vdCBiZSBsb3N0LCBhbmQgYW55IG1hdGNoZXMgcGxheWVkIG5vdyB3aWxsIHN0aWxsIHNob3cgdXAgaW4gc3RhdHMgb25jZSB0aGUgZmVhdHVyZSBpcyBjb21wbGV0ZWQuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kZD5cblx0XHRcdFx0XHRcdFx0XHQ8ZHQ+djEuMS4wPC9kdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiZmEtdWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Q2FuIG5vdyBmZXRjaCBhbGwgcHJhY3RpY2Ugc3RhdHMgaW5zdGVhZCBvZiBqdXN0IHRoZSBsYXN0IGZpdmUuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Q2xpY2tpbmcgb24gYW55IHJvdyBpbiBzdGF0cyB3aWxsIGJyaW5nIHVwIGFsbCB0aHJvd3MgaW4gdGhhdCBwcmFjdGljZSBzZXNzaW9uLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkZpeGVkIGEgYnVnIHRoYXQgZGlkbid0IGFsbG93IHlvdSB0byBzaWduIHVwIHdpdGggYW4gZS1tYWlsLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPkZpeGVkIGEgYnVnIHRoYXQgY2F1c2VkIHNpZ24gaW4gbm90IHRvIGJlIHJlY29nbmlzZWQgYWZ0ZXIgc2lnbiB1cC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHQ8L2RkPlxuXHRcdFx0XHRcdFx0XHRcdDxkdD52MS4wLjA8L2R0PlxuXHRcdFx0XHRcdFx0XHRcdDxkZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmYS11bFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5OQVRGIHByYWN0aWNlIGlzIGF2YWlsYWJsZSwgbm8gc2lnbiBpbiByZXF1aXJlZC48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5XaXRoIGFuIGFjY291bnQgeW91IGNhbiBzYXZlIHlvdXIgcHJhY3RpY2Ugc2Vzc2lvbiBhbmQga2VlcCB0cmFjayBvZiB5b3VyIG92ZXIgYWxsIHByb2dyZXNzIGluIHRoZSBTdGF0cyBtZW51LjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGQ+XG5cdFx0XHRcdFx0XHRcdDwvZGw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5wYWdlID09ICdwcmFjdGljZScgJiZcblx0XHRcdFx0XHQ8UHJhY3RpY2UgdGhyb3dlcj17c2VsZi5zdGF0ZS50aHJvd2VyfSAvPlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ21hdGNoJyAmJlxuXHRcdFx0XHRcdDxNYXRjaCB0aHJvd2VyPXtzZWxmLnN0YXRlLnRocm93ZXJ9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUucGFnZSA9PSAnc3RhdHMnICYmXG5cdFx0XHRcdFx0PFN0YXRzIC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0PFBvcHVwcyAvPlxuXHRcdFx0XHQ8TWVzc2FnZXMgLz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHRzaWduaW4odGhyb3dlcikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0aHJvd2VyfSk7XG5cdH1cblxuXHRzaWdub3V0KCkge1xuXG5cdFx0Ly8gSWYgdGhlIHBhZ2UgbmVlZHMgdG8gYmUgc2lnbmVkIGluXG5cdFx0aWYoWydwcmFjdGljZSddLmluZGV4T2YodGhpcy5zdGF0ZS5wYWdlKSA9PSAtMSkge1xuXHRcdFx0SGFzaC5zZXQoJ3BhZ2UnLCBudWxsKTtcblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIHRocm93ZXIgZmxhZ1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFNpdGU7XG4iLCIvKipcbiAqIFN0YXRzXG4gKlxuICogTWFuYWdlcyBPcmcgbWVudSBmb3Igc3RhdHMgYW5kIGRpc3BsYXkgdGhlIGFwcHJvcHJpYXRlIG9uZSBiYXNlZCBvbiB3aGF0XG4gKiBpcyBjaG9zZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI2XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG5cbi8vIEdlbmVyaWMgY29tcG9uZW50c1xudmFyIHtNZW51LCBJdGVtfSA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbWVudS5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRzXG52YXIgTmF0ZiA9IHJlcXVpcmUoJy4vbmF0Zi9zdGF0cy5qc3gnKTtcblxuLy8gU3RhdHMgY29tcG9uZW50XG5jbGFzcyBTdGF0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwib3JnXCI6IEhhc2guZ2V0KCdvcmcnLCAnbmF0ZicpXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMub3JnQ2hhbmdlID0gdGhpcy5vcmdDaGFuZ2UuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBvcmcgaGFzaCBjaGFuZ2UgZXZlbnRzXG5cdFx0SGFzaC51bndhdGNoKCdvcmcnLCB0aGlzLm9yZ0NoYW5nZSk7XG5cblx0XHQvLyBSZW1vdmUgdGhlIG9yZyBmcm9tIHRoZSBoYXNoXG5cdFx0SGFzaC5zZXQoJ29yZycsIG51bGwpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdGlmKG9yZyA9PSBudWxsKSB7XG5cdFx0XHRcdG9yZyA9ICduYXRmJztcblx0XHRcdH1cblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJzdGF0c1wiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgdGhyb3dlcj17c2VsZi5wcm9wcy50aHJvd2VyfSAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gU3RhdHM7XG4iLCIvKipcbiAqIFRocm93ZXJcbiAqXG4gKiBNYW5hZ2VzIGVkaXRpbmcgZGV0YWlscyBmb3IgdGhlIGN1cnJlbnRseSBsb2dnZWQgaW4gdGhyb3dlclxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjVcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xuXG4vLyBUaHJvd2VyIGNvbXBvbmVudFxuY2xhc3MgVGhyb3dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiA8ZGl2IC8+XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gVGhyb3dlcjtcbiIsIi8qKlxuICogUmVxdWVzdHNcbiAqXG4gKiBNYW5hZ2VzIG1hdGNoIHJlcXVlc3RzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0zMVxuICovXG5cbi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9oYXNoLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL2xvYWRlci5qcycpO1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgc3BlY2lmaWNcbnZhciBUd29XYXkgPSByZXF1aXJlKCcuL3R3b3dheS5qcycpO1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi91dGlscy5qcycpO1xuXG4vLyBTaWduZWQgaW4gdGhyb3dlclxuX190aHJvd2VyID0gbnVsbDtcblxuLy8gUGVuZGluZyByZXF1ZXN0c1xuX19wZW5kaW5nID0gW107XG5cbi8qKlxuICogSW5pdFxuICpcbiAqIEluaXRpYWxpc2VzIHRoZSBtb2R1bGUgYnkgdHJhY2tpbmcgYW55IHNpZ24gaW4gLyBzaWduIG91dCBldmVudHNcbiAqXG4gKiBAbmFtZSBfaW5pdFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9pbml0KCkge1xuXG5cdC8vIEdldCBub3RpZmllZCBvZiBhbnkgY2hhbmdlIGluIHRocm93ZXJcblx0RXZlbnRzLmFkZCgnc2lnbmluJywgX3NpZ25pbik7XG5cdEV2ZW50cy5hZGQoJ3NpZ25vdXQnLCBfc2lnbm91dCk7XG59XG5cbi8qKlxuICogUGVuZGluZ1xuICpcbiAqIEZldGNoZXMgcGVuZGluZyByZXF1ZXN0c1xuICpcbiAqIEBuYW1lIF9wZW5kaW5nXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BlbmRpbmcoKSB7XG5cblx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdExvYWRlci5zaG93KCk7XG5cblx0Ly8gRmV0Y2ggdGhlIHJlcXVlc3RzXG5cdFNlcnZpY2VzLnJlYWQoJ2F1dGgnLCAnbWF0Y2gvcmVxdWVzdHMnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0X3BlbmRpbmdQcm9jZXNzKHJlcy5kYXRhKTtcblx0XHR9XG5cdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0TG9hZGVyLmhpZGUoKTtcblx0fSlcbn1cblxuLyoqXG4gKiBQZW5kaW5nIFByb2Nlc3NcbiAqXG4gKiBQcm9jZXNzZXMgYW55IHBlbmRpbmcgcmVxdWVzdHMgdGhhdCBhcmUgcmV0dXJuZWQgZnJvbSB0aGUgc2VydmVyXG4gKlxuICogQG5hbWUgX3BlbmRpbmdQcm9jZXNzXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BlbmRpbmdQcm9jZXNzKHJlcXVlc3RzKSB7XG5cblx0Ly8gU3RvcmUgdGhlIHBlbmRpbmcgcmVxdWVzdHNcblx0X19wZW5kaW5nID0gcmVxdWVzdHM7XG5cblx0Ly8gR28gdGhyb3VnaCBlYWNoIGluIHdoaWNoIHRoZSB0aHJvd2VyIGlzIHRoZSBvcHBvbmVudFxuXHRmb3IodmFyIG8gb2YgX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cblx0XHQvLyBBZGQgYSBuZXcgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlJywgby5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBoYXZlIGFuIFwiICsgby5vcmcgKyBcIiBtYXRjaCByZXF1ZXN0IGZyb20gXCIgK1xuXHRcdFx0XHRcdG8uYWxpYXMgKyBcIi4gRG8geW91IHdhbnQgdG8gc3RhcnQgdGhpcyBtYXRjaCBub3c/XCIsXG5cdFx0XHRcImJ1dHRvbnNcIjogW1xuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkRlY2xpbmVcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdERlY2xpbmV9LFxuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIkFjY2VwdFwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0QWNjZXB0fVxuXHRcdFx0XVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gR28gdGhyb3VnaCBlYWNoIGluIHdoaWNoIHRoZSB0aHJvd2VyIGlzIHRoZSBpbml0aWF0b3Jcblx0Zm9yKHZhciBvIG9mIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblxuXHRcdC8vIEFkZCBhIG5ldyBtZXNzYWdlXG5cdFx0RXZlbnRzLnRyaWdnZXIoJ21lc3NhZ2UnLCBvLl9pZCwge1xuXHRcdFx0XCJ0ZXh0XCI6IFwiWW91IGluaXRpYXRlZCBhbiBcIiArIG8ub3JnICsgXCIgbWF0Y2ggd2l0aCBcIiArXG5cdFx0XHRcdFx0by5hbGlhcyArIFwiLiBEbyB5b3Ugd2FudCB0byB3YWl0IGZvciB0aGlzIG1hdGNoIHRvIHN0YXJ0P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWxldGVcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdERlbGV0ZX0sXG5cdFx0XHRcdHtcInRpdGxlXCI6IFwiV2FpdFwiLCBcImNhbGxiYWNrXCI6IF9yZXF1ZXN0V2FpdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxufVxuXG4vKipcbiAqIFJlcXVlc3QgQWNjZXB0XG4gKlxuICogQ2FsbGVkIHdoZW4gYSBtYXRjaCByZXF1ZXN0IGlzIGFjY2VwdGVkIGJ5IHRoZSBvcHBvbmVudFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0QWNjZXB0XG4gKiBAcmV0dXJuIGJvb2xcbiAqL1xuZnVuY3Rpb24gX3JlcXVlc3RBY2NlcHQoaWQpIHtcblxuXHQvLyBMZXQgdGhlIHNlcnZlciBrbm93IHRoZSBtYXRjaCB3YXMgYWNjZXB0ZWRcblx0U2VydmljZXMudXBkYXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIEZpbmQgdGhlIHBlbmRpbmcgbWF0Y2gsIHN0b3JlIGl0LCB0aGVuIHJlbW92ZSBpdCBmcm9tIHBlbmRpbmdcblx0XHRcdHZhciByZXEgPSBudWxsO1xuXHRcdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXHRcdFx0XHRpZihfX3BlbmRpbmdbJ29wcG9uZW50J11baV0uX2lkID09IGlkKSB7XG5cdFx0XHRcdFx0cmVxID0gX19wZW5kaW5nWydvcHBvbmVudCddW2ldO1xuXHRcdFx0XHRcdF9fcGVuZGluZ1snb3Bwb25lbnQnXS5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0SGFzaC5zZXQoe1xuXHRcdFx0XHRcInBhZ2VcIjogXCJtYXRjaFwiLFxuXHRcdFx0XHRcIm9yZ1wiOiByZXEub3JnLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFwiaWRcIjogXCJtfFwiICsgcmVzLmRhdGFcblx0XHRcdH0pXG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGFjY2VwdGVkXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgRGVjbGluZVxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBkZWNsaW5lZCBieSB0aGUgb3Bwb25lbnRcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdERlY2xpbmVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlY2xpbmUoaWQpIHtcblxuXHQvLyBMZXQgdGhlIHNlcnZlciBrbm93IHRoZSBtYXRjaCB3YXMgZGVjbGluZWRcblx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cdFx0XHRcdGlmKF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGRlbGV0ZWRcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmVxdWVzdCBEZWxldGVcbiAqXG4gKiBDYWxsZWQgd2hlbiBhIG1hdGNoIHJlcXVlc3QgaXMgZGVsZXRlZCBieSB0aGUgaW5pdGlhdG9yXG4gKlxuICogQG5hbWUgX3JlcXVlc3REZWxldGVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlbGV0ZShpZCkge1xuXG5cdC8vIExldCB0aGUgc2VydmVyIGtub3cgd2UgYXJlIHJlbW92aW5nIG91ciByZXF1ZXN0XG5cdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFwiaWRcIjogaWRcblx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHQvLyBEZWxldGUgdGhlIHJlcXVlc3QgZnJvbSB0aGUgcGVuZGluZ1xuXHRcdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ2luaXRpYXRvciddLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgZGVsZXRlZFxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IE5ld1xuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB0aHJvd2VyIHJlY2lldmVzIGEgbmV3IG1hdGNoIHJlcXVlc3RcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdE5ld1xuICogQHBhcmFtIG9iamVjdCBtc2dcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdE5ldyhtc2cpIHtcblxuXHQvLyBJZiB0aGlzIGlzIGEgbmV3IHJlcXVlc3Rcblx0aWYobXNnLnR5cGUgPT0gJ21hdGNoX3JlcXVlc3QnKSB7XG5cblx0XHQvLyBBZGQgaXQgdG8gdGhlIHBlbmRpbmdcblx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10ucHVzaChtc2cpO1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG1zZy5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBoYXZlIGFuIFwiICsgbXNnLm9yZyArIFwiIG1hdGNoIHJlcXVlc3QgZnJvbSBcIiArXG5cdFx0XHRcdFx0bXNnLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHN0YXJ0IHRoaXMgbWF0Y2ggbm93P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWNsaW5lXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWNsaW5lfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJBY2NlcHRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdEFjY2VwdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEVsc2UgaWYgd2UgbmVlZCB0byBkZWxldGVcblx0ZWxzZSBpZihtc2cudHlwZSA9PSBcIm1hdGNoX3JlcXVlc3RfZGVsZXRlXCIpIHtcblxuXHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBtc2cuaWQpIHtcblx0XHRcdFx0X19wZW5kaW5nWydvcHBvbmVudCddLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBtc2cuaWQpO1xuXHR9XG59XG5cbi8qKlxuICogUmVxdWVzdCBXYWl0XG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIGluaXRpYXRvciBvZiBhIG1hdGNoIHJlcXVlc3QgaGFzIGNob3NlbiB0byB3YWl0IGZvciBpdFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0V2FpdFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0V2FpdChpZCkge1xuXG5cdC8vIEZpbmQgdGhlIHBlbmRpbmcgbWF0Y2gsIHN0b3JlIGl0LCB0aGVuIHJlbW92ZSBpdCBmcm9tIHBlbmRpbmdcblx0dmFyIHJlcSA9IG51bGw7XG5cdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ2luaXRpYXRvciddKSB7XG5cdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdHJlcSA9IF9fcGVuZGluZ1snaW5pdGlhdG9yJ11baV07XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hhbmdlIHRoZSBwYWdlIGFuZCBzdG9yZSB0aGUgcmVxdWVzdCBpbmZvXG5cdEhhc2guc2V0KHtcblx0XHRcInBhZ2VcIjogXCJtYXRjaFwiLFxuXHRcdFwib3JnXCI6IHJlcS5vcmcudG9Mb3dlckNhc2UoKSxcblx0XHRcImlkXCI6IFwicnxcIiArIHJlcS5faWRcblx0fSlcblxuXHQvLyBSZXR1cm4gT0tcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogU2lnbmluXG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2lnbnMgaW4gKG9yIHdhcyBhbHJlYWR5IHNpZ25lZCBpbikuIEZldGNoZXMgcGVuZGluZ1xuICogcmVxdWVzdHMgYW5kIHN0YXJ0cyB0cmFja2luZyBhbnkgbmV3IHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25pblxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9zaWduaW4odGhyb3dlcikge1xuXG5cdC8vIFN0b3JlIHRoZSB0aHJvd2VyXG5cdF9fdGhyb3dlciA9IHRocm93ZXIuX2lkO1xuXG5cdC8vIEZldGNoIHRoZSBwZW5kaW5nIHJlcXVlc3RzXG5cdF9wZW5kaW5nKCk7XG5cblx0Ly8gVHJhY2sgYW55IG5ldyByZXF1ZXN0c1xuXHRUd29XYXkudHJhY2soXG5cdFx0J2F1dGgnLCAncmVxdWVzdHMtJyArIF9fdGhyb3dlcixcblx0XHRfcmVxdWVzdE5ld1xuXHQpO1xufVxuXG4vKipcbiAqIFNpZ25vdXRcbiAqXG4gKiBDYWxsZWQgd2hlbiB0aGUgdXNlciBzaWducyBvdXQgb3IgaXMgc2lnbmVkIG91dC4gUmVtb3ZlcyBhbGwgbWVzc2FnZXMgYW5kXG4gKiBzdG9wcyB0cmFja2luZyByZXF1ZXN0c1xuICpcbiAqIEBuYW1lIF9zaWdub3V0XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3NpZ25vdXQoKSB7XG5cblx0Ly8gRGVsZXRlIGFsbCBtZXNzYWdlc1xuXHRmb3IodmFyIG8gaW4gX19wZW5kaW5nKSB7XG5cdFx0RXZlbnRzLnRyaWdnZXIoJ21lc3NhZ2VfcmVtb3ZlJywgby5faWQpO1xuXHR9XG5cblx0Ly8gU3RvcCB0cmFja2luZyB0aGUgdGhyb3dlclxuXHRUd29XYXkudW50cmFjayhcblx0XHQnYXV0aCcsICdyZXF1ZXN0cy0nICsgX190aHJvd2VyLFxuXHRcdF9yZXF1ZXN0TmV3XG5cdCk7XG59XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbml0XCI6IF9pbml0LFxufVxuIiwiLyoqXG4gKiBUd28gV2F5XG4gKlxuICogQWxsb3dzIGNsaWVudHMgdG8gY29ubmVjdCB0byB0aGUgYmFja2VuZCB2aWEgd2Vic29ja2V0IHNvIGV2ZW50cyBjYW4gYmVcbiAqIHRyYWNrZWQgaW4gcmVhbCB0aW1lXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yOVxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIFNlcnZpY2VzID0gcmVxdWlyZSgnLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvdG9vbHMuanMnKTtcbnZhciBXU0hlbHBlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy93ZWJzb2NrZXQuanMnKTtcblxuLy8gVGhlIHBpbmcgdGltZXJcbnZhciBfX3BpbmcgPSBudWxsO1xuXG4vLyBUaGUgdmFsaWQgY2xvc2UgZmxhZ1xudmFyIF9fY2xvc2UgPSBmYWxzZTtcblxuLy8gVGhlIHdlYnNvY2tldFxudmFyIF9fc29ja2V0ID0gbnVsbDtcblxuLyoqXG4gKiBUaGUgc2VydmljZSBjYWxsYmFja3NcbiAqXG4gKiB3aWxsIGNvbnRhaW4gYSBzdHJpbmcgZm9yIHRoZSBzZXJ2aWNlIC8ga2V5IHdpdGggY2FsbGJhY2tzIGZvciB0aG9zZSBrZXlzLFxuICogZS5nLiB7XG4gKlx0XCJzZXJ2aWNlMVwiOiB7XG4gKlx0XHRcImtleTFcIjogW2Z1bmN0aW9uMSwgZnVuY3Rpb24yXSxcbiAqXHRcdFwia2V5MlwiOiBbZnVuY3Rpb24zXVxuICpcdH0sXG4gKlx0XCJzZXJ2aWNlMlwiOiB7XG4gKlx0XHRcImtleTNcIjogW2Z1bmN0aW9uNF1cbiAqXHR9XG4gKiB9XG4gKi9cbnZhciBfX3NlcnZpY2VzID0ge307XG5cbi8qKlxuICogQWRkIFRyYWNrXG4gKlxuICogQWRkcyB0cmFja2luZyBmb3IgYSBzcGVjaWZpYyBzZXJ2aWNlIGtleVxuICpcbiAqIEBuYW1lIF9hZGRUcmFja1xuICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXG4gKiBAcGFyYW0gc3RyaW5nIGtleVxuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2FkZFRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB3ZSBkb24ndCBoYXZlIHRoZSBzZXJ2aWNlLCBhZGQgaXRcblx0aWYoIShzZXJ2aWNlIGluIF9fc2VydmljZXMpKSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXSA9IHt9XG5cdH1cblxuXHQvLyBJZiB3ZSBkb24ndCBoYXZlIHRoZSBrZXkgZm9yIHRoZSBnaXZlbiBzZXJ2aWNlLCBhZGQgdGhlIGxpc3Qgd2l0aFxuXHQvL1x0dGhlIGNhbGxiYWNrXG5cdGlmKCEoa2V5IGluIF9fc2VydmljZXNbc2VydmljZV0pKSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldID0gW2NhbGxiYWNrXVxuXHR9XG5cblx0Ly8gRWxzZSwgYWRkIHRoZSBjYWxsYmFjaywgdG8gdGhlIGdpdmVuIHNlcnZpY2Uva2V5XG5cdGVsc2Uge1xuXHRcdF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5wdXNoKGNhbGxiYWNrKTtcblx0fVxufVxuXG4vKipcbiAqIEhhbmRsZSBDbG9zZVxuICpcbiAqIENoZWNrcyBpZiBpdCdzIGEgbGVnaXRpbWF0ZSBjbG9zZWQgc29ja2V0LCBvciBpZiB3ZSBuZWVkIHRvIHJlY29ubmVjdCB0b1xuICogZXZlcnl0aGluZ1xuICpcbiAqIEBuYW1lIF9oYW5kbGVDbG9zZVxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9oYW5kbGVDbG9zZSgpIHtcblxuXHQvLyBJZiBpdCdzIGEgdmFsaWQgY2xvc2Vcblx0aWYoX19jbG9zZSkge1xuXHRcdF9fc29ja2V0ID0gbnVsbDtcblx0fVxuXG5cdC8vIEVsc2UsIHdhaXQgNSBzZWNvbmRzLCBhbmQgcmVvcGVuIHRoZSBzb2NrZXRcblx0ZWxzZSB7XG5cdFx0c2V0VGltZW91dChfb3BlblNvY2tldCwgNTAwMCk7XG5cdH1cbn1cblxuLyoqXG4gKiBIYW5kbGUgTWVzc2FnZXNcbiAqXG4gKiBSZWNpZXZlcyBtZXNzYWdlcyBmcm9tIHdlYnNvY2tldHMgYW5kIGRpcmVjdHMgdGhlIGRhdGEgdG8gdGhlIGFwcHJvcHJpYXRlXG4gKiBjYWxsYmFja1xuICpcbiAqIEBuYW1lIF9oYW5kbGVNZXNzYWdlXG4gKiBAcGFyYW0gV2ViU29ja2V0IHNvY2tcdFx0VGhlIHNvY2tldCB0aGUgbWVzc2FnZSBjYW1lIG9uXG4gKiBAcGFyYW0gTWVzc2FnZUV2ZW50IGV2XHRcdFRoZSBldmVudCBtZXNzYWdlIHJlY2VpdmVkXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhbmRsZU1lc3NhZ2Uoc29jaywgZXYpIHtcblxuXHQvLyBJZiBpdCdzIHBvbmdcblx0aWYoZXYuZGF0YSA9PSAncG9uZycpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTY3JldyB5b3UgamF2YXNjcmlwdFxuXHR2YXIgciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRlbmRcIiwgZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBQYXJzZSB0aGUgZGF0YVxuXHRcdG9Nc2cgPSBKU09OLnBhcnNlKHIucmVzdWx0KTtcblxuXHRcdC8vIElmIHdlIGhhdmUgdGhlIHNlcnZpY2Vcblx0XHRpZihvTXNnLnNlcnZpY2UgaW4gX19zZXJ2aWNlcykge1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBrZXlcblx0XHRcdGlmKG9Nc2cua2V5IGluIF9fc2VydmljZXNbb01zZy5zZXJ2aWNlXSkge1xuXG5cdFx0XHRcdC8vIENhbGwgZWFjaCBjYWxsYmFja1xuXHRcdFx0XHRmb3IodmFyIGYgb2YgX19zZXJ2aWNlc1tvTXNnLnNlcnZpY2VdW29Nc2cua2V5XSkge1xuXHRcdFx0XHRcdGYob01zZy5kYXRhKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cdHIucmVhZEFzVGV4dChldi5kYXRhKTtcbn1cblxuLyoqXG4gKiBPcGVuIFNvY2tldFxuICpcbiAqIE9wZW5zIGEgbmV3IHdlYnNvY2tldCBieSBmaXJzdCBzZW5kaW5nIGEgbWVzc2FnZSB0byB3ZWJwb2xsIHRvIHN0YXJ0IHRoZVxuICogYXV0aGVudGljYXRpb24gaGFuZHNoYWtlLCB0aGVuIG1ha2luZyB0aGUgY29ubmVjdGlvbiwgYW5kIGZpbmFsbHkgc2VuZGluZ1xuICogYWxsIHRoZSB0cmFjayBtZXNzYWdlcyBzdG9yZWRcbiAqXG4gKiBAbmFtZSBfb3BlblNvY2tldFxuICogQHBhcmFtXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX29wZW5Tb2NrZXQoKSB7XG5cblx0Ly8gTm90aWZ5IHRoZSBiYWNrZW5kIG9mIGEgbmV3IHdzIGNvbm5lY3Rpb25cblx0U2VydmljZXMucmVhZCgnd2VicG9sbCcsICd3ZWJzb2NrZXQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gQ3JlYXRlIHRoZSB3ZWJzb2NrZXRcblx0XHRfX3NvY2tldCA9IFdTSGVscGVyKCd3c3M6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJy93cycsIHtcblx0XHRcdFwib3BlblwiOiBmdW5jdGlvbihzb2NrKSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdGhlIGNsb3NlIGZsYWdcblx0XHRcdFx0X19jbG9zZSA9IGZhbHNlO1xuXG5cdFx0XHRcdC8vIEluaXQgdGhlIG1lc3NhZ2UgbGlzdFxuXHRcdFx0XHRsTXNncyA9IFtdO1xuXG5cdFx0XHRcdC8vIEFkZCB0aGUgY29ubmVjdCBtZXNzYWdlXG5cdFx0XHRcdGxNc2dzLnB1c2goe1xuXHRcdFx0XHRcdFwiX3R5cGVcIjogXCJjb25uZWN0XCIsXG5cdFx0XHRcdFx0XCJrZXlcIjogcmVzLmRhdGFcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQWRkIGVhY2ggdHJhY2sgbWVzc2FnZVxuXHRcdFx0XHRmb3IodmFyIHMgaW4gX19zZXJ2aWNlcykge1xuXHRcdFx0XHRcdGZvcih2YXIgayBpbiBfX3NlcnZpY2VzW3NdKSB7XG5cdFx0XHRcdFx0XHRsTXNncy5wdXNoKHtcblx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcInRyYWNrXCIsXG5cdFx0XHRcdFx0XHRcdFwic2VydmljZVwiOiBzLFxuXHRcdFx0XHRcdFx0XHRcImtleVwiOiBrXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZW5kIHRoZSBtZXNzYWdlc1xuXHRcdFx0XHRzb2NrLnNlbmQoSlNPTi5zdHJpbmdpZnkobE1zZ3MpKVxuXHRcdFx0fSxcblx0XHRcdFwibWVzc2FnZVwiOiBfaGFuZGxlTWVzc2FnZSxcblx0XHRcdFwiY2xvc2VcIjogX2hhbmRsZUNsb3NlXG5cdFx0fSk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlbid0IGFscmVhZHkgc2V0dXAgdGhlIHBpbmcgaW50ZXJ2YWxcblx0XHRpZihfX3BpbmcgPT0gbnVsbCkge1xuXHRcdFx0X19waW5nID0gc2V0SW50ZXJ2YWwoX3BpbmcsIDMwMDAwMCk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLyoqXG4gKiBQaW5nXG4gKlxuICogU2VuZCBhIHBpbmcgdG8ga2VlcCB0aGUgc29ja2V0IGFsaXZlXG4gKlxuICogQG5hbWUgX3BpbmdcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcGluZygpIHtcblxuXHQvLyBTZW5kIGEgcGluZyBtZXNzYWdlIG92ZXIgdGhlIHNvY2tldCB0byBrZWVwIGl0IGFsaXZlXG5cdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFwiX3R5cGVcIjogXCJwaW5nXCJcblx0fSkpO1xufVxuXG4vKipcbiAqIFRyYWNrXG4gKlxuICogVGFrZXMgYSBVUkwgYW5kIGFuIGV2ZW50IHR5cGUgYW5kIGEpIG9wZW5zIGEgbmV3IHdlYnNvY2tldCBvciB1c2VzIGFuXG4gKiBleGlzdGluZyBvbmUsIHRoZW4gYikgc2VuZHMgYSB0cmFja2luZyBtZXNzYWdlIHRocm91Z2ggdGhlIHdlYnNvY2tldCBzbyB0aGVcbiAqIGJhY2tlbmQga25vd3NuIHRvIHNlbmQgdGhlIGtleSB0eXBlIHRvIHVzXG4gKlxuICogQG5hbWUgX3RyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdGhlIGtleSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSBzdHJpbmcga2V5XHRcdFx0VGhlIGtleSB0byB0cmFja1xuICogQHBhcmFtIGZ1bmN0aW9uIGNhbGxiYWNrXHRcdFRoZSBjYWxsYmFjayBmb3IgYW55IG1lc3NhZ2VzIG9mIHRoZSBrZXkgdmFsdWVcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfdHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIEFkZCB0aGUgdHJhY2tpbmcgY2FsbGJhY2tcblx0X2FkZFRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spO1xuXG5cdC8vIElmIHdlIGhhdmUgbm8gc29ja2V0XG5cdGlmKCFfX3NvY2tldCkge1xuXG5cdFx0Ly8gSWYgaXQncyBudWxsXG5cdFx0aWYoX19zb2NrZXQgPT0gbnVsbCkge1xuXG5cdFx0XHQvLyBTZXQgc29ja2V0IHRvIGZhbHNlIHNvIHdlIGRvbid0IHRyeSB0byByZS1vcGVuXG5cdFx0XHRfX3NvY2tldCA9IGZhbHNlO1xuXG5cdFx0XHQvLyBPcGVuIGEgbmV3IG9uZVxuXHRcdFx0X29wZW5Tb2NrZXQoKTtcblx0XHR9XG5cdH1cblxuXHQvLyBFbHNlIGlmIGl0J3Mgb3BlblxuXHRlbHNlIGlmKF9fc29ja2V0LnJlYWR5U3RhdGUgPT0gMSkge1xuXG5cdFx0Ly8gU2VuZCB0aGUgdHJhY2tpbmcgbWVzc2FnZSB0aHJvdWdoIHRoZSB3ZWJzb2NrZXRcblx0XHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFwiX3R5cGVcIjogXCJ0cmFja1wiLFxuXHRcdFx0XCJzZXJ2aWNlXCI6IHNlcnZpY2UsXG5cdFx0XHRcImtleVwiOiBrZXlcblx0XHR9KSk7XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIG5vIHNvY2tldCwgb3IgaXQncyBvcGVuaW5nLCB0aGVuIHVwb24gb3BlbmluZyBhbGwgc2Vydml2ZXMvXG5cdC8vXHRrZXlzIGluIHRoZSB0cmFja2luZyBsaXN0IHdpbGwgYmUgc2VudCBhcyBtZXNzYWdlc1xufVxuXG4vKipcbiAqIFVudHJhY2tcbiAqXG4gKiBSZW1vdmVzIGEgY2FsbGJhY2sgYW5kIG5vdGlmaWVzIHRoZSB3ZWJzb2NrZXQgd2UgYXJlIG5vdCB0cmFja2luZyBhbnltb3JlXG4gKlxuICogQG5hbWUgX3VudHJhY2tcbiAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0aGUga2V5IGlzIGFzc29jaWF0ZWQgd2l0aFxuICogQHBhcmFtIHN0cmluZyBrZXlcdFx0XHRUaGUga2V5IHRvIHVudHJhY2tcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgYXNzb2NpYXRlZCB3aXRoIHRoZSB0cmFja1xuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF91bnRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB3ZSBoYXZlIHRoZSBzZXJ2aWNlXG5cdGlmKHNlcnZpY2UgaW4gX19zZXJ2aWNlcykge1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSB0aGUga2V5XG5cdFx0aWYoa2V5IGluIF9fc2VydmljZXNbc2VydmljZV0pIHtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGNhbGxiYWNrXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLmxlbmd0aDsgKytpKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGNhbGxiYWNrIG1hdGNoZXNcblx0XHRcdFx0aWYoY2FsbGJhY2sgPT0gX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldW2ldKSB7XG5cblx0XHRcdFx0XHQvLyBSZW1vdmUgdGhlIGNhbGxiYWNrXG5cdFx0XHRcdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLnNwbGljZShpLCAxKTtcblxuXHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgbm8gbW9yZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRpZihfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0ubGVuZ3RoID09IDApIHtcblxuXHRcdFx0XHRcdFx0Ly8gTm90aWZ5IHRoZSB3ZWJzb2NrZXQgd2UgYXJlbid0IHRyYWNraW5nIHRoZSBrZXlcblx0XHRcdFx0XHRcdC8vXHRhbnltb3JlXG5cdFx0XHRcdFx0XHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcInVudHJhY2tcIixcblx0XHRcdFx0XHRcdFx0XCJzZXJ2aWNlXCI6IHNlcnZpY2UsXG5cdFx0XHRcdFx0XHRcdFwia2V5XCI6IGtleVxuXHRcdFx0XHRcdFx0fSkpO1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgdGhlIGtleVxuXHRcdFx0XHRcdFx0ZGVsZXRlIF9fc2VydmljZXNbc2VydmljZV1ba2V5XTtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBubyBtb3JlIGtleXMgaW4gdGhlIHNlcnZpY2Vcblx0XHRcdFx0XHRcdGlmKFRvb2xzLmVtcHR5KF9fc2VydmljZXNbc2VydmljZV0pKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBfX3NlcnZpY2VzW3NlcnZpY2VdO1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHRoZXJlJ3Mgbm8gbW9yZSBzZXJ2aWNlc1xuXHRcdFx0XHRcdFx0XHRpZihUb29scy5lbXB0eShfX3NlcnZpY2VzKSkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gVHVybiBvZmYgdGhlIHBpbmcgaW50ZXJ2YWxcblx0XHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKF9fcGluZyk7XG5cdFx0XHRcdFx0XHRcdFx0X19waW5nID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENsb3NlIHRoZSBzb2NrZXRcblx0XHRcdFx0XHRcdFx0XHRfX2Nsb3NlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0XHRfX3NvY2tldC5jbG9zZSgxMDAwLCAnbm90aGluZyBlbHNlIHRvIHRyYWNrJyk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBDYWxsYmFjayBmb3VuZCBhbmQgcmVtb3ZlZFxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2FsbGJhY2sgbm90IGZvdW5kXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLy8gZXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRyYWNrXCI6IF90cmFjayxcblx0XCJ1bnRyYWNrXCI6IF91bnRyYWNrXG59XG4iLCIvKipcbiAqIFV0aWxzXG4gKlxuICogU2hhcmVkIHV0aWxpdGllc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjRcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG5cbi8qKlxuICogVXRpbHNcbiAqL1xudmFyIFV0aWxzID0ge1xuXG5cdGRhdGU6IGZ1bmN0aW9uKHRzKSB7XG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSh0cyoxMDAwKTtcblx0XHR2YXIgWSA9ICcnICsgZC5nZXRGdWxsWWVhcigpO1xuXHRcdHZhciBNID0gJycgKyAoZC5nZXRNb250aCgpICsgMSk7XG5cdFx0aWYoTS5sZW5ndGggPT0gMSkgTSA9ICcwJyArIE07XG5cdFx0dmFyIEQgPSAnJyArIGQuZ2V0RGF0ZSgpO1xuXHRcdGlmKEQubGVuZ3RoID09IDEpIEQgPSAnMCcgKyBEO1xuXHRcdHJldHVybiBZICsgJy8nICsgTSArICcvJyArIEQ7XG5cdH0sXG5cblx0ZXJyb3JUcmVlOiBmdW5jdGlvbihlcnJvcnMpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJldHVyblxuXHRcdHZhciBvUmV0ID0ge31cblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBlcnJvclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBlcnJvcnMubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIGVycm9yIGZpZWxkIGhhcyBhIHBlcmlvZFxuXHRcdFx0aWYoZXJyb3JzW2ldWzBdLmluY2x1ZGVzKCcuJykpIHtcblxuXHRcdFx0XHQvLyBTcGxpdCBpdFxuXHRcdFx0XHRsRmllbGQgPSBlcnJvcnNbaV1bMF0uc3BsaXQoL1xcLiguKikvKVxuXG5cdFx0XHRcdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIGZpZWxkIGFscmVhZHlcblx0XHRcdFx0aWYoIW9SZXRbbEZpZWxkWzBdXSkge1xuXHRcdFx0XHRcdG9SZXRbbEZpZWxkWzBdXSA9IFtdXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZGQgdGhlIHJlc3Rcblx0XHRcdFx0b1JldFtsRmllbGRbMF1dLnB1c2goW2xGaWVsZFsxXSwgZXJyb3JzW2ldWzFdXSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgaXQncyBhIGZsYXQgZmllbGRcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRvUmV0W2Vycm9yc1tpXVswXV0gPSBlcnJvcnNbaV1bMV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBhbGwgdGhlIGVycm9ycyB3ZSBmb3VuZFxuXHRcdGZvcihsZXQgayBpbiBvUmV0KSB7XG5cblx0XHRcdC8vIElmIHdlIGZpbmQgYW4gYXJyYXlcblx0XHRcdGlmKEFycmF5LmlzQXJyYXkob1JldFtrXSkpIHtcblxuXHRcdFx0XHQvLyBSZWN1cnNlXG5cdFx0XHRcdG9SZXRba10gPSBVdGlscy5lcnJvclRyZWUob1JldFtrXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBUcmVlXG5cdFx0cmV0dXJuIG9SZXQ7XG5cdH0sXG5cblx0c2VydmljZUVycm9yOiBmdW5jdGlvbihlcnIpIHtcblxuXHRcdC8vIFdoYXQgZXJyb3IgaXMgaXQ/XG5cdFx0c3dpdGNoKGVyci5jb2RlKSB7XG5cblx0XHRcdC8vIE5vIFNlc3Npb25cblx0XHRcdGNhc2UgMTAyOlxuXG5cdFx0XHRcdC8vIFRyaWdnZXIgc2lnbm91dFxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcihcInNpZ25vdXRcIik7XG5cblx0XHRcdFx0Ly8gTm90aGluZyBlbHNlIHRvIGRvXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXG5cdFx0XHQvLyBJbnZhbGlkIGZpZWxkc1xuXHRcdFx0Y2FzZSAxMDAxOlxuXG5cdFx0XHRcdC8vIFJlYnVpbGQgdGhlIGVycm9yIG1lc3NhZ2Vcblx0XHRcdFx0ZXJyLm1zZyA9IFV0aWxzLmVycm9yVHJlZShlcnIubXNnKTtcblxuXHRcdFx0XHQvLyBCdXQgYWxsb3cgdGhlIGNoaWxkIHRvIGRlYWwgd2l0aCB0aGUgbWVzc2FnZXMgdGhlbXNlbHZlc1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRmFpbGVkIHRvIHByb2Nlc3MgZXJyb3Jcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gVXRpbHM7XG4iXSwic291cmNlUm9vdCI6IiJ9