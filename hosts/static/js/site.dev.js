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
      _hash[field[1]] = field[2].replace('+', ' ');
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
      if (ev.key == 'Enter' && this.props.onEnter) {
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
    value: function signinTrigger() {
      // Hide any modals and set a thrower to true
      this.setState({
        "modal": false,
        "thrower": true
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
          Services.session(res.data); // Revert to sign in and show success message

          self.setState({
            "modal": false,
            "thrower": true
          }); // Greet thrower

          Events.trigger('success', "Welcome to AxeGains " + oData.alias); // Trigger the signin event

          Events.trigger('signin');
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
      Hash.unwatch('org', this.orgChange);
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
    value: function existingContinue(ev) {}
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
                "alias": id[2]
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
                // Store it in the state
                self.setState({
                  "bigaxe": res.data.bigaxe,
                  "games": res.data.games,
                  "matchState": self.calculateMatchState(res.data),
                  "throwerIs": res.data.initiator == self.state.thrower ? 'i' : 'o'
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
      })));
    }
  }, {
    key: "renderBigAxe",
    value: function renderBigAxe() {
      return React.createElement("div", null);
    }
  }, {
    key: "renderGames",
    value: function renderGames() {
      return React.createElement("div", null);
    }
  }, {
    key: "renderMatch",
    value: function renderMatch() {
      // If we're in big axe mode
      if (this.state.bigaxe) {
        return this.renderBigAxe();
      } else {
        return this.renderGames();
      }
    }
  }, {
    key: "renderOverall",
    value: function renderOverall() {
      return React.createElement("div", null);
    }
  }, {
    key: "requestCallback",
    value: function requestCallback(msg) {
      // If the match was accepted
      if (msg.type == 'accepted') {
        Hash.set('id', 'm|' + msg.match + '|' + this.state.opponent.alias);
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
    value: function signin() {
      this.setState({
        "thrower": true
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
    return _this;
  }

  _createClass(Stats, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // Fetch the practice stats
      this.practiceStats(); // Fetch the match stats
      //this.matchStats();
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
    value: function add() {
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
      "org": Hash.get('org', 'natf'),
      "thrower": props.thrower ? props.thrower : false
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
      Hash.unwatch('org', this.orgChange);
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
        thrower: self.state.thrower
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
    value: function signin() {
      this.setState({
        "thrower": true
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
      Hash.unwatch('org', this.orgChange);
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
      }, React.createElement("div", null, self.state.org == 'natf' && React.createElement(Natf, null))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL21vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrLzNyZC9qcXVlcnkuYWpheC5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvY29va2llcy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9oYXNoLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9nZW5lcmljL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svZ2VuZXJpYy90b29scy5qcyIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL2dlbmVyaWMvd2Vic29ja2V0LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9iYXNlL2Zvcm1zLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L2VsZW1lbnRzL2lucHV0RW50ZXIuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvZWxlbWVudHMvbWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tZXNzYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9tb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9lbGVtZW50cy9wb3B1cHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvaGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L21hdGNoLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvYm9hcmQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvbmF0Zi9tYXRjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9uYXRmL3ByYWN0aWNlLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlYWN0L25hdGYvc3RhdHMuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvb3Bwb25lbnQuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3QvcHJhY3RpY2UuanN4Iiwid2VicGFjazovLy8uL3dlYnBhY2svcmVhY3Qvc2l0ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC9zdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vd2VicGFjay9yZWFjdC90aHJvd2VyLmpzeCIsIndlYnBhY2s6Ly8vLi93ZWJwYWNrL3JlcXVlc3RzLmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdHdvd2F5LmpzIiwid2VicGFjazovLy8uL3dlYnBhY2svdXRpbHMuanMiXSwibmFtZXMiOlsiYSIsImIiLCJtb2R1bGUiLCJleHBvcnRzIiwiZG9jdW1lbnQiLCJFcnJvciIsIndpbmRvdyIsImMiLCJkIiwic2xpY2UiLCJlIiwiY29uY2F0IiwiZiIsInB1c2giLCJnIiwiaW5kZXhPZiIsImgiLCJpIiwidG9TdHJpbmciLCJqIiwiaGFzT3duUHJvcGVydHkiLCJrIiwibCIsIm0iLCJuIiwiZm4iLCJpbml0IiwibyIsInAiLCJxIiwiciIsInRvVXBwZXJDYXNlIiwicHJvdG90eXBlIiwianF1ZXJ5IiwiY29uc3RydWN0b3IiLCJzZWxlY3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwicHVzaFN0YWNrIiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiY29udGV4dCIsImVhY2giLCJtYXAiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwiZW5kIiwic29ydCIsInNwbGljZSIsImV4dGVuZCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm5vb3AiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsInBhcnNlRmxvYXQiLCJub2RlVHlwZSIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiZXZhbCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhbWVsQ2FzZSIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJzIiwibWFrZUFycmF5IiwiT2JqZWN0IiwiaW5BcnJheSIsImdyZXAiLCJndWlkIiwicHJveHkiLCJub3ciLCJEYXRlIiwic3VwcG9ydCIsInNwbGl0IiwidCIsImRvY3VtZW50RWxlbWVudCIsInUiLCJ2IiwibWF0Y2hlcyIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsIm1vek1hdGNoZXNTZWxlY3RvciIsIm9NYXRjaGVzU2VsZWN0b3IiLCJtc01hdGNoZXNTZWxlY3RvciIsInciLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImNvbnRhaW5zIiwiZmluZCIsIm1hdGNoZXNTZWxlY3RvciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ1bmlxdWUiLCJ0ZXh0Q29udGVudCIsIm5vZGVWYWx1ZSIsImlzWE1MRG9jIiwib3duZXJEb2N1bWVudCIsImV4cHIiLCJhdHRySGFuZGxlIiwibWF0Y2giLCJib29sIiwibmVlZHNDb250ZXh0IiwiYXR0ciIsImdldEF0dHJpYnV0ZSIsIngiLCJ5IiwieiIsIkEiLCJ0ZXN0IiwiZmlsdGVyIiwibm90IiwiaXMiLCJCIiwiQyIsIkQiLCJleGVjIiwicGFyc2VIVE1MIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZWFkeSIsIkUiLCJGIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsIm5leHQiLCJwcmV2IiwiZGlyIiwic2libGluZyIsIm5leHRTaWJsaW5nIiwiaGFzIiwiY2xvc2VzdCIsImluZGV4IiwicHJldkFsbCIsImFkZCIsImFkZEJhY2siLCJHIiwicGFyZW50IiwicGFyZW50cyIsInBhcmVudHNVbnRpbCIsIm5leHRBbGwiLCJuZXh0VW50aWwiLCJwcmV2VW50aWwiLCJzaWJsaW5ncyIsImZpcnN0Q2hpbGQiLCJjb250ZW50RG9jdW1lbnQiLCJjaGlsZE5vZGVzIiwicmV2ZXJzZSIsIkgiLCJJIiwiSiIsIkNhbGxiYWNrcyIsIm9uY2UiLCJtZW1vcnkiLCJzdG9wT25GYWxzZSIsInNoaWZ0IiwiZGlzYWJsZSIsInJlbW92ZSIsImVtcHR5IiwiZGlzYWJsZWQiLCJsb2NrIiwibG9ja2VkIiwiZmlyZVdpdGgiLCJmaXJlIiwiZmlyZWQiLCJEZWZlcnJlZCIsInN0YXRlIiwiYWx3YXlzIiwiZG9uZSIsImZhaWwiLCJ0aGVuIiwicHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInBpcGUiLCJ3aGVuIiwibm90aWZ5V2l0aCIsInJlc29sdmVXaXRoIiwiSyIsInJlYWR5V2FpdCIsImhvbGRSZWFkeSIsInRyaWdnZXJIYW5kbGVyIiwib2ZmIiwiTCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCIsImFkZEV2ZW50TGlzdGVuZXIiLCJNIiwiYWNjZXNzIiwiYWNjZXB0RGF0YSIsIk4iLCJkZWZpbmVQcm9wZXJ0eSIsImNhY2hlIiwidWlkIiwiYWNjZXB0cyIsImtleSIsInZhbHVlIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsImhhc0RhdGEiLCJkaXNjYXJkIiwiTyIsIlAiLCJRIiwiUiIsIlMiLCJwYXJzZUpTT04iLCJkYXRhIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJhdHRyaWJ1dGVzIiwibmFtZSIsInF1ZXVlIiwiZGVxdWV1ZSIsIl9xdWV1ZUhvb2tzIiwidW5zaGlmdCIsInN0b3AiLCJjbGVhclF1ZXVlIiwiVCIsInNvdXJjZSIsIlUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50Iiwic2V0QXR0cmlidXRlIiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsImxhc3RDaGlsZCIsImNoZWNrZWQiLCJpbm5lckhUTUwiLCJub0Nsb25lQ2hlY2tlZCIsImRlZmF1bHRWYWx1ZSIsIlYiLCJmb2N1c2luQnViYmxlcyIsIlciLCJYIiwiWSIsIloiLCIkIiwiXyIsImFiIiwiYWN0aXZlRWxlbWVudCIsImV2ZW50IiwiZ2xvYmFsIiwiaGFuZGxlciIsImV2ZW50cyIsImhhbmRsZSIsInRyaWdnZXJlZCIsImRpc3BhdGNoIiwic3BlY2lhbCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwib3JpZ1R5cGUiLCJuYW1lc3BhY2UiLCJqb2luIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwiUmVnRXhwIiwidGVhcmRvd24iLCJyZW1vdmVFdmVudCIsInRyaWdnZXIiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsInJlc3VsdCIsInRhcmdldCIsIm5vQnViYmxlIiwiZGVmYXVsdFZpZXciLCJwYXJlbnRXaW5kb3ciLCJpc1Byb3BhZ2F0aW9uU3RvcHBlZCIsInByZXZlbnREZWZhdWx0IiwiaXNEZWZhdWx0UHJldmVudGVkIiwiX2RlZmF1bHQiLCJwb3AiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaGFuZGxlcnMiLCJjdXJyZW50VGFyZ2V0IiwiZWxlbSIsImlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkIiwiaGFuZGxlT2JqIiwic3RvcFByb3BhZ2F0aW9uIiwicG9zdERpc3BhdGNoIiwiYnV0dG9uIiwicHJvcHMiLCJmaXhIb29rcyIsImtleUhvb2tzIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJtb3VzZUhvb2tzIiwicGFnZVgiLCJjbGllbnRYIiwiYm9keSIsInNjcm9sbExlZnQiLCJjbGllbnRMZWZ0IiwicGFnZVkiLCJjbGllbnRZIiwic2Nyb2xsVG9wIiwiY2xpZW50VG9wIiwibG9hZCIsImZvY3VzIiwiYmx1ciIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwib3JpZ2luYWxFdmVudCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsInJlbGF0ZWRUYXJnZXQiLCJvbiIsIm9uZSIsImJiIiwiY2IiLCJkYiIsImViIiwiZmIiLCJnYiIsImhiIiwiaWIiLCJqYiIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwia2IiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImxiIiwibWIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJuYiIsIm9iIiwicGIiLCJxYiIsImNsb25lIiwiYnVpbGRGcmFnbWVudCIsImNyZWF0ZVRleHROb2RlIiwiY2xlYW5EYXRhIiwiYXBwZW5kIiwiZG9tTWFuaXAiLCJwcmVwZW5kIiwiaW5zZXJ0QmVmb3JlIiwiYmVmb3JlIiwiYWZ0ZXIiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJzcmMiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiZGVsYXkiLCJmeCIsInNwZWVkcyIsImNsZWFyVGltZW91dCIsImNoZWNrT24iLCJvcHRTZWxlY3RlZCIsInNlbGVjdGVkIiwib3B0RGlzYWJsZWQiLCJyYWRpb1ZhbHVlIiwicmIiLCJzYiIsInRiIiwicmVtb3ZlQXR0ciIsInByb3AiLCJhdHRySG9va3MiLCJwcm9wRml4IiwidWIiLCJyZW1vdmVQcm9wIiwicHJvcEhvb2tzIiwidGFiSW5kZXgiLCJoYXNBdHRyaWJ1dGUiLCJocmVmIiwic2VsZWN0ZWRJbmRleCIsInZiIiwiYWRkQ2xhc3MiLCJjbGFzc05hbWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwiaGFzQ2xhc3MiLCJ3YiIsInZhbCIsInZhbEhvb2tzIiwic2VsZWN0Iiwib3B0aW9ucyIsImhvdmVyIiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsInhiIiwieWIiLCJKU09OIiwicGFyc2UiLCJwYXJzZVhNTCIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsInpiIiwiQWIiLCJCYiIsIkNiIiwiRGIiLCJFYiIsIkZiIiwiR2IiLCJIYiIsIkliIiwiSmIiLCJLYiIsImxvY2F0aW9uIiwiTGIiLCJNYiIsIk5iIiwiZGF0YVR5cGVzIiwiT2IiLCJhamF4U2V0dGluZ3MiLCJmbGF0T3B0aW9ucyIsIlBiIiwibWltZVR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsImNvbnZlcnRlcnMiLCJRYiIsInJlc3BvbnNlRmllbGRzIiwiZGF0YUZpbHRlciIsImRhdGFUeXBlIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJ4bWwiLCJqc29uIiwiU3RyaW5nIiwiYWpheFNldHVwIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4Iiwic3RhdHVzQ29kZSIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJvdmVycmlkZU1pbWVUeXBlIiwic3RhdHVzIiwiYWJvcnQiLCJjb21wbGV0ZSIsInN1Y2Nlc3MiLCJtZXRob2QiLCJjcm9zc0RvbWFpbiIsInBhcmFtIiwidHJhZGl0aW9uYWwiLCJoYXNDb250ZW50IiwiaWZNb2RpZmllZCIsImhlYWRlcnMiLCJiZWZvcmVTZW5kIiwidGltZW91dCIsInNlbmQiLCJzdGF0dXNUZXh0IiwicmVqZWN0V2l0aCIsImdldEpTT04iLCJnZXRTY3JpcHQiLCJSYiIsIlNiIiwiVGIiLCJVYiIsIlZiIiwiV2IiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwiWGIiLCJZYiIsIlpiIiwiJGIiLCJBY3RpdmVYT2JqZWN0IiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsInJlc3BvbnNlVGV4dCIsInNjcmlwdCIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiX2IiLCJhYyIsImpzb25wIiwianNvbnBDYWxsYmFjayIsImJjIiwiZGVmaW5lIiwiY2MiLCJqUXVlcnkiLCJkYyIsIm5vQ29uZmxpY3QiLCJDb29raWVzIiwiZGVmYXVsdF8iLCJvQ29va2llcyIsImxDb29raWVzIiwiY29va2llIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwiZG9tYWluIiwicGF0aCIsImV4cGlyZXMiLCJzZXRUaW1lIiwiZ2V0VGltZSIsInRvR01UU3RyaW5nIiwiX2NhbGxiYWNrcyIsImNhbGxiYWNrIiwiYXJncyIsImVyciIsImNvbnNvbGUiLCJUb29scyIsInJlcXVpcmUiLCJfaGFzaCIsIl9uYW1lUkUiLCJfd2F0Y2hlcyIsIl9jaGVja1dhdGNoZXMiLCJvbGQiLCJfaGFzaENoYW5nZWQiLCJfcGFyc2VIYXNoIiwiaGFzaCIsInJlZ2V4IiwiZmllbGQiLCJzdWJzdHJpbmciLCJIYXNoIiwiaXNPYmplY3QiLCJ0ZW1wIiwiX2NvdW50IiwiX2VsIiwiaGlkZSIsInN0eWxlIiwiZGlzcGxheSIsInNob3ciLCJfZG9tYWluIiwiX2Vycm9yIiwiX2NsZWFyIiwibG9jYWxTdG9yYWdlIiwiaG9zdG5hbWUiLCJfcmVxdWVzdCIsIm9Db25maWciLCJzZXR0aW5ncyIsIl91cmwiLCJzdHJpbmdpZnkiLCJfc3RvcmUiLCJ0b2tlbiIsIl9zdWNjZXNzIiwicmVzIiwiU2VydmljZXMiLCJzdWJkb21haW4iLCJzZXNzaW9uIiwic2VydmljZSIsIm5vdW4iLCJjb21wYXJlIiwidjEiLCJ2MiIsImtleXMiLCJpc0RlY2ltYWwiLCJpc0ludGVnZXIiLCJvbWFwIiwicmV0IiwidXVpZHY0IiwiY3J5cHRvIiwiZ2V0UmFuZG9tVmFsdWVzIiwiVWludDhBcnJheSIsImNvbmYiLCJvU29jayIsIldlYlNvY2tldCIsIm9ub3BlbiIsImxvZyIsIm9ubWVzc2FnZSIsImV2Iiwib25jbG9zZSIsIkV2ZW50cyIsIkxvYWRlciIsIlJlcXVlc3RzIiwiU2l0ZSIsIlJlYWN0RE9NIiwicmVuZGVyIiwiUmVhY3QiLCJyZWFkIiwiRVJST1JfQ0xBU1MiLCJfYWRkQ2xhc3MiLCJlbCIsIm5hbWVzIiwiX3JlbW92ZUNsYXNzIiwiaW5jbHVkZXMiLCJfQmFzZU5vZGUiLCJlcnJvcnMiLCJyZWZzIiwiUHVyZUNvbXBvbmVudCIsIkFycmF5Tm9kZSIsIk5vZGUiLCJtc2ciLCJ2YWx1ZVNldCIsIlBhcmVudCIsImVycm9yQWRkIiwiZXJyb3JSZW1vdmUiLCJlcnJvckZvY3VzIiwiZWxlbWVudHMiLCJGb3JtcyIsIklucHV0RW50ZXIiLCJvbkVudGVyIiwia2V5UHJlc3MiLCJvbktleVByZXNzIiwicmVzdCIsIk1lbnUiLCJvbkNoYW5nZSIsIml0ZW1DbGljayIsInNlbGYiLCJzZXRTdGF0ZSIsIkNoaWxkcmVuIiwiY2hpbGQiLCJjbG9uZUVsZW1lbnQiLCJvbkNsaWNrIiwicmVuZGVyQ2hpbGRyZW4iLCJJdGVtIiwiX2luc3RhbmNlIiwiTWVzc2FnZSIsImJ1dHRvbnMiLCJkYXRhc2V0IiwiaWQiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIk1lc3NhZ2VzIiwibWVzc2FnZXMiLCJtZXNzYWdlIiwibXNncyIsIk1vZGFsIiwiY2xvc2UiLCJidXR0b25DbGljayIsInRyYXBFc2NhcGUiLCJidG4iLCJzdHlsZXMiLCJoZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsIndpZHRoIiwiU1VDQ0VTU19USU1FT1VUIiwiRVJST1JfVElNRU9VVCIsIldBUk5JTkdfVElNRU9VVCIsIlNURVBfVElNRU9VVCIsIldJRFRIX1NURVBTIiwiSEVJR0hUX1NURVBTIiwiTUFSR0lOIiwiUG9wdXBzIiwicG9wdXBzIiwidGltZXIiLCJwb3B1cCIsInByb2Nlc3MiLCJ3YXJuaW5nIiwic3RlcCIsImlubmVyV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nIiwibWFyZ2luQm90dG9tIiwibWFyZ2luVG9wIiwiaWNvbiIsImlUaW1lb3V0Iiwic0ljb24iLCJ3YXJuIiwiVGhyb3dlciIsIlV0aWxzIiwiSGVhZGVyIiwiYWNjb3VudFNob3ciLCJob21lIiwic2lnbmluIiwic2lnbmluU2hvdyIsInNpZ25pblRyaWdnZXIiLCJzaWdub3V0Iiwic2lnbm91dFRyaWdnZXIiLCJzaWdudXAiLCJzaWdudXBTaG93IiwibW9kYWwiLCJ0aHJvd2VyIiwiYWxpYXMiLCJjcmVhdGUiLCJwYXNzd2QiLCJzZXJ2aWNlRXJyb3IiLCJjb2RlIiwic2lnbnVwX2FsaWFzIiwic2lnbnVwX3Bhc3N3ZCIsInJlcGVhdF9wYXNzd2QiLCJvRGF0YSIsImVtYWlsIiwiTmF0ZiIsIk1hdGNoIiwib3JnQ2hhbmdlIiwid2F0Y2giLCJ1bndhdGNoIiwib3JnIiwibWVudUNoYW5nZSIsIkJvYXJkIiwib25Qb2ludHMiLCJjbHV0Y2hNb2RlIiwiY2x1dGNoQ2xpY2siLCJkcm9wQ2xpY2siLCJwb2ludENsaWNrIiwicmVzZXRDbHV0Y2giLCJjbGFzc05hbWVzIiwibW9kZSIsIlR3b1dheSIsIk9wcG9uZW50IiwiZXhpc3RpbmdDb250aW51ZSIsImV4aXN0aW5nRGVsZXRlIiwiaWRDYWxsYmFjayIsIm1hdGNoQ2FsbGJhY2siLCJvdmVyd3JpdGUiLCJwb2ludHMiLCJyZXF1ZXN0Q2FsbGJhY2siLCJyZXF1ZXN0Q2FuY2VsIiwicmVxdWVzdENyZWF0ZSIsImluaXRpYXRvciIsImJpZ2F4ZSIsInJvdW5kIiwic0ciLCJnYW1lcyIsInNSIiwiZ2FtZSIsImV4aXN0aW5nRmV0Y2giLCJ1bnRyYWNrIiwiZXhpc3RpbmdSZW1vdmUiLCJleGlzdGluZyIsIl9pZCIsInRyYWNrIiwiY2FsY3VsYXRlTWF0Y2hTdGF0ZSIsImNsdXRjaCIsIm9wcG9uZW50IiwicmVuZGVyQmlnQXhlIiwicmVuZGVyR2FtZXMiLCJyZXF1ZXN0UmVzZXQiLCJQcmFjdGljZSIsIm1vZGVTZWxlY3QiLCJwb2ludHNIaWRlIiwicG9pbnRzU2hvdyIsInJlc2V0Iiwic2F2ZSIsIm5ld19zdGF0ZSIsImJvYXJkIiwicGFyc2VJbnQiLCJjbHV0Y2hBdHRlbXB0cyIsImNsdXRjaEhpdHMiLCJ0b3RhbFBvaW50cyIsInRvRml4ZWQiLCJzaG93UG9pbnRzIiwiY29uZmlybSIsIlN0YXRzIiwibWF0Y2hTdGF0cyIsInByYWN0aWNlRGF0YSIsInByYWN0aWNlRGF0YUhpZGUiLCJwcmFjdGljZVN0YXRzIiwicHJhY3RpY2VTdGF0c0FsbCIsImFsbCIsInByYWN0aWNlIiwidG90YWwiLCJhdHRlbXB0cyIsImRyb3BzIiwiYXZlcmFnZSIsInJhdGUiLCJkYXRlIiwiX2NyZWF0ZWQiLCJwcmFjdGljZV9hbGwiLCJwcmFjdGljZV9kYXRhIiwiYWxpYXNTb3J0IiwibG9jYWxlQ29tcGFyZSIsIk9wcG9uZW50Um93IiwiZmF2b3VyaXRlIiwiY29sb3IiLCJmYXZvdXJpdGVTaG93Iiwic2VhcmNoIiwic2VhcmNoU2hvdyIsImZhdm91cml0ZXMiLCJvblNlbGVjdCIsImhhc2hDaGFuZ2UiLCJwYWdlQ2hhbmdlIiwicGFnZSIsIm1lbnUiLCJpdGVtcyIsIl9fdGhyb3dlciIsIl9fcGVuZGluZyIsIl9pbml0IiwiX3NpZ25pbiIsIl9zaWdub3V0IiwiX3BlbmRpbmciLCJfcGVuZGluZ1Byb2Nlc3MiLCJyZXF1ZXN0cyIsIl9yZXF1ZXN0RGVjbGluZSIsIl9yZXF1ZXN0QWNjZXB0IiwiX3JlcXVlc3REZWxldGUiLCJfcmVxdWVzdFdhaXQiLCJ1cGRhdGUiLCJyZXEiLCJfcmVxdWVzdE5ldyIsIldTSGVscGVyIiwiX19waW5nIiwiX19jbG9zZSIsIl9fc29ja2V0IiwiX19zZXJ2aWNlcyIsIl9hZGRUcmFjayIsIl9oYW5kbGVDbG9zZSIsInNvY2siLCJfaGFuZGxlTWVzc2FnZSIsIkZpbGVSZWFkZXIiLCJvTXNnIiwicmVhZEFzVGV4dCIsIl9waW5nIiwiX3RyYWNrIiwic2V0SW50ZXJ2YWwiLCJfdW50cmFjayIsImNsZWFySW50ZXJ2YWwiLCJ0cyIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiZXJyb3JUcmVlIiwib1JldCIsImxGaWVsZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyQkE7QUFDQSxDQUFDLFVBQVNBLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQUMsNENBQWlCQyxNQUFqQixNQUF5QixvQkFBaUJBLE1BQU0sQ0FBQ0MsT0FBeEIsQ0FBekIsR0FBeURELE1B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LENBQUNULE9BQU4sQ0FBY2d5QixJQUFJLENBQUNwMEIsQ0FBRCxDQUFsQixDQUFILEVBQTJCO0FBRTFCO0FBQ0FvMEIsWUFBSSxDQUFDcDBCLENBQUQsQ0FBSixHQUFVMnFCLEtBQUssQ0FBQ3dKLFNBQU4sQ0FBZ0JDLElBQUksQ0FBQ3AwQixDQUFELENBQXBCLENBQVY7QUFDQTtBQUNELEtBdEMwQixDQXdDM0I7OztBQUNBLFdBQU9vMEIsSUFBUDtBQUNBLEdBdERVO0FBd0RYekksY0FBWSxFQUFFLHNCQUFTMUssR0FBVCxFQUFjO0FBRTNCO0FBQ0EsWUFBT0EsR0FBRyxDQUFDMkssSUFBWDtBQUVDO0FBQ0EsV0FBSyxHQUFMO0FBRUM7QUFDQTVHLGNBQU0sQ0FBQy9VLE9BQVAsQ0FBZSxTQUFmLEVBSEQsQ0FLQzs7QUFDQSxlQUFPLElBQVA7QUFFRDs7QUFDQSxXQUFLLElBQUw7QUFFQztBQUNBZ1IsV0FBRyxDQUFDbUYsR0FBSixHQUFVdUUsS0FBSyxDQUFDd0osU0FBTixDQUFnQmxULEdBQUcsQ0FBQ21GLEdBQXBCLENBQVYsQ0FIRCxDQUtDOztBQUNBLGVBQU8sS0FBUDtBQWxCRixLQUgyQixDQXdCM0I7OztBQUNBLFdBQU8sS0FBUDtBQUNBLEdBbEZVLENBcUZaOztBQXJGWSxDQUFaO0FBc0ZBdm5CLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjZyQixLQUFqQixDIiwiZmlsZSI6Ii4uL2hvc3RzL3N0YXRpYy9qcy9zaXRlLmRldi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vd2VicGFjay9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIi8qISBqUXVlcnkgdjIuMS4xIC1jc3MsLWNzcy9hZGRHZXRIb29rSWYsLWNzcy9jdXJDU1MsLWNzcy9kZWZhdWx0RGlzcGxheSwtY3NzL2hpZGRlblZpc2libGVTZWxlY3RvcnMsLWNzcy9zdXBwb3J0LC1jc3Mvc3dhcCwtY3NzL3Zhci9jc3NFeHBhbmQsLWNzcy92YXIvZ2V0U3R5bGVzLC1jc3MvdmFyL2lzSGlkZGVuLC1jc3MvdmFyL3JtYXJnaW4sLWNzcy92YXIvcm51bW5vbnB4LC1lZmZlY3RzLC1lZmZlY3RzL1R3ZWVuLC1lZmZlY3RzL2FuaW1hdGVkU2VsZWN0b3IsLWRpbWVuc2lvbnMsLW9mZnNldCwtZGVwcmVjYXRlZCwtZXZlbnQtYWxpYXMsLXdyYXAgfCAoYykgMjAwNSwgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiB8IGpxdWVyeS5vcmcvbGljZW5zZSAqL1xuIWZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZSYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZS5leHBvcnRzP21vZHVsZS5leHBvcnRzPWEuZG9jdW1lbnQ/YihhLCEwKTpmdW5jdGlvbihhKXtpZighYS5kb2N1bWVudCl0aHJvdyBuZXcgRXJyb3IoXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIpO3JldHVybiBiKGEpfTpiKGEpfShcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp0aGlzLGZ1bmN0aW9uKGEsYil7dmFyIGM9W10sZD1jLnNsaWNlLGU9Yy5jb25jYXQsZj1jLnB1c2gsZz1jLmluZGV4T2YsaD17fSxpPWgudG9TdHJpbmcsaj1oLmhhc093blByb3BlcnR5LGs9e30sbD1hLmRvY3VtZW50LG09XCIyLjEuMSAtY3NzLC1jc3MvYWRkR2V0SG9va0lmLC1jc3MvY3VyQ1NTLC1jc3MvZGVmYXVsdERpc3BsYXksLWNzcy9oaWRkZW5WaXNpYmxlU2VsZWN0b3JzLC1jc3Mvc3VwcG9ydCwtY3NzL3N3YXAsLWNzcy92YXIvY3NzRXhwYW5kLC1jc3MvdmFyL2dldFN0eWxlcywtY3NzL3Zhci9pc0hpZGRlbiwtY3NzL3Zhci9ybWFyZ2luLC1jc3MvdmFyL3JudW1ub25weCwtZWZmZWN0cywtZWZmZWN0cy9Ud2VlbiwtZWZmZWN0cy9hbmltYXRlZFNlbGVjdG9yLC1kaW1lbnNpb25zLC1vZmZzZXQsLWRlcHJlY2F0ZWQsLWV2ZW50LWFsaWFzLC13cmFwXCIsbj1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgbi5mbi5pbml0KGEsYil9LG89L15bXFxzXFx1RkVGRlxceEEwXSt8W1xcc1xcdUZFRkZcXHhBMF0rJC9nLHA9L14tbXMtLyxxPS8tKFtcXGRhLXpdKS9naSxyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX07bi5mbj1uLnByb3RvdHlwZT17anF1ZXJ5Om0sY29uc3RydWN0b3I6bixzZWxlY3RvcjpcIlwiLGxlbmd0aDowLHRvQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gZC5jYWxsKHRoaXMpfSxnZXQ6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/MD5hP3RoaXNbYSt0aGlzLmxlbmd0aF06dGhpc1thXTpkLmNhbGwodGhpcyl9LHB1c2hTdGFjazpmdW5jdGlvbihhKXt2YXIgYj1uLm1lcmdlKHRoaXMuY29uc3RydWN0b3IoKSxhKTtyZXR1cm4gYi5wcmV2T2JqZWN0PXRoaXMsYi5jb250ZXh0PXRoaXMuY29udGV4dCxifSxlYWNoOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZWFjaCh0aGlzLGEsYil9LG1hcDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2sobi5tYXAodGhpcyxmdW5jdGlvbihiLGMpe3JldHVybiBhLmNhbGwoYixjLGIpfSkpfSxzbGljZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLnB1c2hTdGFjayhkLmFwcGx5KHRoaXMsYXJndW1lbnRzKSl9LGZpcnN0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZXEoMCl9LGxhc3Q6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lcSgtMSl9LGVxOmZ1bmN0aW9uKGEpe3ZhciBiPXRoaXMubGVuZ3RoLGM9K2ErKDA+YT9iOjApO3JldHVybiB0aGlzLnB1c2hTdGFjayhjPj0wJiZiPmM/W3RoaXNbY11dOltdKX0sZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucHJldk9iamVjdHx8dGhpcy5jb25zdHJ1Y3RvcihudWxsKX0scHVzaDpmLHNvcnQ6Yy5zb3J0LHNwbGljZTpjLnNwbGljZX0sbi5leHRlbmQ9bi5mbi5leHRlbmQ9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZCxlLGYsZz1hcmd1bWVudHNbMF18fHt9LGg9MSxpPWFyZ3VtZW50cy5sZW5ndGgsaj0hMTtmb3IoXCJib29sZWFuXCI9PXR5cGVvZiBnJiYoaj1nLGc9YXJndW1lbnRzW2hdfHx7fSxoKyspLFwib2JqZWN0XCI9PXR5cGVvZiBnfHxuLmlzRnVuY3Rpb24oZyl8fChnPXt9KSxoPT09aSYmKGc9dGhpcyxoLS0pO2k+aDtoKyspaWYobnVsbCE9KGE9YXJndW1lbnRzW2hdKSlmb3IoYiBpbiBhKWM9Z1tiXSxkPWFbYl0sZyE9PWQmJihqJiZkJiYobi5pc1BsYWluT2JqZWN0KGQpfHwoZT1uLmlzQXJyYXkoZCkpKT8oZT8oZT0hMSxmPWMmJm4uaXNBcnJheShjKT9jOltdKTpmPWMmJm4uaXNQbGFpbk9iamVjdChjKT9jOnt9LGdbYl09bi5leHRlbmQoaixmLGQpKTp2b2lkIDAhPT1kJiYoZ1tiXT1kKSk7cmV0dXJuIGd9LG4uZXh0ZW5kKHtleHBhbmRvOlwialF1ZXJ5XCIrKG0rTWF0aC5yYW5kb20oKSkucmVwbGFjZSgvXFxEL2csXCJcIiksaXNSZWFkeTohMCxlcnJvcjpmdW5jdGlvbihhKXt0aHJvdyBuZXcgRXJyb3IoYSl9LG5vb3A6ZnVuY3Rpb24oKXt9LGlzRnVuY3Rpb246ZnVuY3Rpb24oYSl7cmV0dXJuXCJmdW5jdGlvblwiPT09bi50eXBlKGEpfSxpc0FycmF5OkFycmF5LmlzQXJyYXksaXNXaW5kb3c6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWEmJmE9PT1hLndpbmRvd30saXNOdW1lcmljOmZ1bmN0aW9uKGEpe3JldHVybiFuLmlzQXJyYXkoYSkmJmEtcGFyc2VGbG9hdChhKT49MH0saXNQbGFpbk9iamVjdDpmdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiIT09bi50eXBlKGEpfHxhLm5vZGVUeXBlfHxuLmlzV2luZG93KGEpPyExOmEuY29uc3RydWN0b3ImJiFqLmNhbGwoYS5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsXCJpc1Byb3RvdHlwZU9mXCIpPyExOiEwfSxpc0VtcHR5T2JqZWN0OmZ1bmN0aW9uKGEpe3ZhciBiO2ZvcihiIGluIGEpcmV0dXJuITE7cmV0dXJuITB9LHR5cGU6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PWE/YStcIlwiOlwib2JqZWN0XCI9PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2hbaS5jYWxsKGEpXXx8XCJvYmplY3RcIjp0eXBlb2YgYX0sZ2xvYmFsRXZhbDpmdW5jdGlvbihhKXt2YXIgYixjPWV2YWw7YT1uLnRyaW0oYSksYSYmKDE9PT1hLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpPyhiPWwuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKSxiLnRleHQ9YSxsLmhlYWQuYXBwZW5kQ2hpbGQoYikucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChiKSk6YyhhKSl9LGNhbWVsQ2FzZTpmdW5jdGlvbihhKXtyZXR1cm4gYS5yZXBsYWNlKHAsXCJtcy1cIikucmVwbGFjZShxLHIpfSxub2RlTmFtZTpmdW5jdGlvbihhLGIpe3JldHVybiBhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk9PT1iLnRvTG93ZXJDYXNlKCl9LGVhY2g6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9MCxmPWEubGVuZ3RoLGc9cyhhKTtpZihjKXtpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmFwcGx5KGFbZV0sYyksZD09PSExKWJyZWFrfWVsc2UgZm9yKGUgaW4gYSlpZihkPWIuYXBwbHkoYVtlXSxjKSxkPT09ITEpYnJlYWt9ZWxzZSBpZihnKXtmb3IoO2Y+ZTtlKyspaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVha31lbHNlIGZvcihlIGluIGEpaWYoZD1iLmNhbGwoYVtlXSxlLGFbZV0pLGQ9PT0hMSlicmVhaztyZXR1cm4gYX0sdHJpbTpmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOihhK1wiXCIpLnJlcGxhY2UobyxcIlwiKX0sbWFrZUFycmF5OmZ1bmN0aW9uKGEsYil7dmFyIGM9Ynx8W107cmV0dXJuIG51bGwhPWEmJihzKE9iamVjdChhKSk/bi5tZXJnZShjLFwic3RyaW5nXCI9PXR5cGVvZiBhP1thXTphKTpmLmNhbGwoYyxhKSksY30saW5BcnJheTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG51bGw9PWI/LTE6Zy5jYWxsKGIsYSxjKX0sbWVyZ2U6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9K2IubGVuZ3RoLGQ9MCxlPWEubGVuZ3RoO2M+ZDtkKyspYVtlKytdPWJbZF07cmV0dXJuIGEubGVuZ3RoPWUsYX0sZ3JlcDpmdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGU9W10sZj0wLGc9YS5sZW5ndGgsaD0hYztnPmY7ZisrKWQ9IWIoYVtmXSxmKSxkIT09aCYmZS5wdXNoKGFbZl0pO3JldHVybiBlfSxtYXA6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGY9MCxnPWEubGVuZ3RoLGg9cyhhKSxpPVtdO2lmKGgpZm9yKDtnPmY7ZisrKWQ9YihhW2ZdLGYsYyksbnVsbCE9ZCYmaS5wdXNoKGQpO2Vsc2UgZm9yKGYgaW4gYSlkPWIoYVtmXSxmLGMpLG51bGwhPWQmJmkucHVzaChkKTtyZXR1cm4gZS5hcHBseShbXSxpKX0sZ3VpZDoxLHByb3h5OmZ1bmN0aW9uKGEsYil7dmFyIGMsZSxmO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiYoYz1hW2JdLGI9YSxhPWMpLG4uaXNGdW5jdGlvbihhKT8oZT1kLmNhbGwoYXJndW1lbnRzLDIpLGY9ZnVuY3Rpb24oKXtyZXR1cm4gYS5hcHBseShifHx0aGlzLGUuY29uY2F0KGQuY2FsbChhcmd1bWVudHMpKSl9LGYuZ3VpZD1hLmd1aWQ9YS5ndWlkfHxuLmd1aWQrKyxmKTp2b2lkIDB9LG5vdzpEYXRlLm5vdyxzdXBwb3J0Omt9KSxuLmVhY2goXCJCb29sZWFuIE51bWJlciBTdHJpbmcgRnVuY3Rpb24gQXJyYXkgRGF0ZSBSZWdFeHAgT2JqZWN0IEVycm9yXCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7aFtcIltvYmplY3QgXCIrYitcIl1cIl09Yi50b0xvd2VyQ2FzZSgpfSk7ZnVuY3Rpb24gcyhhKXt2YXIgYj1hLmxlbmd0aCxjPW4udHlwZShhKTtyZXR1cm5cImZ1bmN0aW9uXCI9PT1jfHxuLmlzV2luZG93KGEpPyExOjE9PT1hLm5vZGVUeXBlJiZiPyEwOlwiYXJyYXlcIj09PWN8fDA9PT1ifHxcIm51bWJlclwiPT10eXBlb2YgYiYmYj4wJiZiLTEgaW4gYX12YXIgdD1hLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCx1LHY9dC5tYXRjaGVzfHx0LndlYmtpdE1hdGNoZXNTZWxlY3Rvcnx8dC5tb3pNYXRjaGVzU2VsZWN0b3J8fHQub01hdGNoZXNTZWxlY3Rvcnx8dC5tc01hdGNoZXNTZWxlY3Rvcix3PWZ1bmN0aW9uKGEsYil7aWYoYT09PWIpcmV0dXJuIHU9ITAsMDt2YXIgYz1iLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uJiZhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGIpO3JldHVybiBjPzEmYz9hPT09bHx8bi5jb250YWlucyhsLGEpPy0xOmI9PT1sfHxuLmNvbnRhaW5zKGwsYik/MTowOjQmYz8tMToxOmEuY29tcGFyZURvY3VtZW50UG9zaXRpb24/LTE6MX07bi5leHRlbmQoe2ZpbmQ6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnPTA7aWYoYz1jfHxbXSxiPWJ8fGwsIWF8fFwic3RyaW5nXCIhPXR5cGVvZiBhKXJldHVybiBjO2lmKDEhPT0oZj1iLm5vZGVUeXBlKSYmOSE9PWYpcmV0dXJuW107aWYoZCl3aGlsZShlPWRbZysrXSluLmZpbmQubWF0Y2hlc1NlbGVjdG9yKGUsYSkmJmMucHVzaChlKTtlbHNlIG4ubWVyZ2UoYyxiLnF1ZXJ5U2VsZWN0b3JBbGwoYSkpO3JldHVybiBjfSx1bmlxdWU6ZnVuY3Rpb24oYSl7dmFyIGIsYz1bXSxkPTAsZT0wO2lmKHU9ITEsYS5zb3J0KHcpLHUpe3doaWxlKGI9YVtkKytdKWI9PT1hW2RdJiYoZT1jLnB1c2goZCkpO3doaWxlKGUtLSlhLnNwbGljZShjW2VdLDEpfXJldHVybiBhfSx0ZXh0OmZ1bmN0aW9uKGEpe3ZhciBiLGM9XCJcIixkPTAsZT1hLm5vZGVUeXBlO2lmKGUpe2lmKDE9PT1lfHw5PT09ZXx8MTE9PT1lKXJldHVybiBhLnRleHRDb250ZW50O2lmKDM9PT1lfHw0PT09ZSlyZXR1cm4gYS5ub2RlVmFsdWV9ZWxzZSB3aGlsZShiPWFbZCsrXSljKz1uLnRleHQoYik7cmV0dXJuIGN9LGNvbnRhaW5zOmZ1bmN0aW9uKGEsYil7dmFyIGM9OT09PWEubm9kZVR5cGU/YS5kb2N1bWVudEVsZW1lbnQ6YSxkPWImJmIucGFyZW50Tm9kZTtyZXR1cm4gYT09PWR8fCEoIWR8fDEhPT1kLm5vZGVUeXBlfHwhYy5jb250YWlucyhkKSl9LGlzWE1MRG9jOmZ1bmN0aW9uKGEpe3JldHVyblwiSFRNTFwiIT09KGEub3duZXJEb2N1bWVudHx8YSkuZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lfSxleHByOnthdHRySGFuZGxlOnt9LG1hdGNoOntib29sOi9eKD86Y2hlY2tlZHxzZWxlY3RlZHxhc3luY3xhdXRvZm9jdXN8YXV0b3BsYXl8Y29udHJvbHN8ZGVmZXJ8ZGlzYWJsZWR8aGlkZGVufGlzbWFwfGxvb3B8bXVsdGlwbGV8b3BlbnxyZWFkb25seXxyZXF1aXJlZHxzY29wZWQpJC9pLG5lZWRzQ29udGV4dDovXltcXHgyMFxcdFxcclxcblxcZl0qWz4rfl0vfX19KSxuLmV4dGVuZChuLmZpbmQse21hdGNoZXM6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbi5maW5kKGEsbnVsbCxudWxsLGIpfSxtYXRjaGVzU2VsZWN0b3I6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdi5jYWxsKGEsYil9LGF0dHI6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5nZXRBdHRyaWJ1dGUoYil9fSk7dmFyIHg9bi5leHByLm1hdGNoLm5lZWRzQ29udGV4dCx5PS9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyx6PS9eLlteOiNcXFtcXC4sXSokLztmdW5jdGlvbiBBKGEsYixjKXtpZihuLmlzRnVuY3Rpb24oYikpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEsZCl7cmV0dXJuISFiLmNhbGwoYSxkLGEpIT09Y30pO2lmKGIubm9kZVR5cGUpcmV0dXJuIG4uZ3JlcChhLGZ1bmN0aW9uKGEpe3JldHVybiBhPT09YiE9PWN9KTtpZihcInN0cmluZ1wiPT10eXBlb2YgYil7aWYoei50ZXN0KGIpKXJldHVybiBuLmZpbHRlcihiLGEsYyk7Yj1uLmZpbHRlcihiLGEpfXJldHVybiBuLmdyZXAoYSxmdW5jdGlvbihhKXtyZXR1cm4gZy5jYWxsKGIsYSk+PTAhPT1jfSl9bi5maWx0ZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWJbMF07cmV0dXJuIGMmJihhPVwiOm5vdChcIithK1wiKVwiKSwxPT09Yi5sZW5ndGgmJjE9PT1kLm5vZGVUeXBlP24uZmluZC5tYXRjaGVzU2VsZWN0b3IoZCxhKT9bZF06W106bi5maW5kLm1hdGNoZXMoYSxuLmdyZXAoYixmdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV9KSl9LG4uZm4uZXh0ZW5kKHtmaW5kOmZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5sZW5ndGgsZD1bXSxlPXRoaXM7aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGEpcmV0dXJuIHRoaXMucHVzaFN0YWNrKG4oYSkuZmlsdGVyKGZ1bmN0aW9uKCl7Zm9yKGI9MDtjPmI7YisrKWlmKG4uY29udGFpbnMoZVtiXSx0aGlzKSlyZXR1cm4hMH0pKTtmb3IoYj0wO2M+YjtiKyspbi5maW5kKGEsZVtiXSxkKTtyZXR1cm4gZD10aGlzLnB1c2hTdGFjayhjPjE/bi51bmlxdWUoZCk6ZCksZC5zZWxlY3Rvcj10aGlzLnNlbGVjdG9yP3RoaXMuc2VsZWN0b3IrXCIgXCIrYTphLGR9LGZpbHRlcjpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soQSh0aGlzLGF8fFtdLCExKSl9LG5vdDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5wdXNoU3RhY2soQSh0aGlzLGF8fFtdLCEwKSl9LGlzOmZ1bmN0aW9uKGEpe3JldHVybiEhQSh0aGlzLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZ4LnRlc3QoYSk/bihhKTphfHxbXSwhMSkubGVuZ3RofX0pO3ZhciBCLEM9L14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKikpJC8sRD1uLmZuLmluaXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkO2lmKCFhKXJldHVybiB0aGlzO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBhKXtpZihjPVwiPFwiPT09YVswXSYmXCI+XCI9PT1hW2EubGVuZ3RoLTFdJiZhLmxlbmd0aD49Mz9bbnVsbCxhLG51bGxdOkMuZXhlYyhhKSwhY3x8IWNbMV0mJmIpcmV0dXJuIWJ8fGIuanF1ZXJ5PyhifHxCKS5maW5kKGEpOnRoaXMuY29uc3RydWN0b3IoYikuZmluZChhKTtpZihjWzFdKXtpZihiPWIgaW5zdGFuY2VvZiBuP2JbMF06YixuLm1lcmdlKHRoaXMsbi5wYXJzZUhUTUwoY1sxXSxiJiZiLm5vZGVUeXBlP2Iub3duZXJEb2N1bWVudHx8YjpsLCEwKSkseS50ZXN0KGNbMV0pJiZuLmlzUGxhaW5PYmplY3QoYikpZm9yKGMgaW4gYiluLmlzRnVuY3Rpb24odGhpc1tjXSk/dGhpc1tjXShiW2NdKTp0aGlzLmF0dHIoYyxiW2NdKTtyZXR1cm4gdGhpc31yZXR1cm4gZD1sLmdldEVsZW1lbnRCeUlkKGNbMl0pLGQmJmQucGFyZW50Tm9kZSYmKHRoaXMubGVuZ3RoPTEsdGhpc1swXT1kKSx0aGlzLmNvbnRleHQ9bCx0aGlzLnNlbGVjdG9yPWEsdGhpc31yZXR1cm4gYS5ub2RlVHlwZT8odGhpcy5jb250ZXh0PXRoaXNbMF09YSx0aGlzLmxlbmd0aD0xLHRoaXMpOm4uaXNGdW5jdGlvbihhKT9cInVuZGVmaW5lZFwiIT10eXBlb2YgQi5yZWFkeT9CLnJlYWR5KGEpOmEobik6KHZvaWQgMCE9PWEuc2VsZWN0b3ImJih0aGlzLnNlbGVjdG9yPWEuc2VsZWN0b3IsdGhpcy5jb250ZXh0PWEuY29udGV4dCksbi5tYWtlQXJyYXkoYSx0aGlzKSl9O0QucHJvdG90eXBlPW4uZm4sQj1uKGwpO3ZhciBFPS9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLEY9e2NoaWxkcmVuOiEwLGNvbnRlbnRzOiEwLG5leHQ6ITAscHJldjohMH07bi5leHRlbmQoe2RpcjpmdW5jdGlvbihhLGIsYyl7dmFyIGQ9W10sZT12b2lkIDAhPT1jO3doaWxlKChhPWFbYl0pJiY5IT09YS5ub2RlVHlwZSlpZigxPT09YS5ub2RlVHlwZSl7aWYoZSYmbihhKS5pcyhjKSlicmVhaztkLnB1c2goYSl9cmV0dXJuIGR9LHNpYmxpbmc6ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9W107YTthPWEubmV4dFNpYmxpbmcpMT09PWEubm9kZVR5cGUmJmEhPT1iJiZjLnB1c2goYSk7cmV0dXJuIGN9fSksbi5mbi5leHRlbmQoe2hhczpmdW5jdGlvbihhKXt2YXIgYj1uKGEsdGhpcyksYz1iLmxlbmd0aDtyZXR1cm4gdGhpcy5maWx0ZXIoZnVuY3Rpb24oKXtmb3IodmFyIGE9MDtjPmE7YSsrKWlmKG4uY29udGFpbnModGhpcyxiW2FdKSlyZXR1cm4hMH0pfSxjbG9zZXN0OmZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjLGQ9MCxlPXRoaXMubGVuZ3RoLGY9W10sZz14LnRlc3QoYSl8fFwic3RyaW5nXCIhPXR5cGVvZiBhP24oYSxifHx0aGlzLmNvbnRleHQpOjA7ZT5kO2QrKylmb3IoYz10aGlzW2RdO2MmJmMhPT1iO2M9Yy5wYXJlbnROb2RlKWlmKGMubm9kZVR5cGU8MTEmJihnP2cuaW5kZXgoYyk+LTE6MT09PWMubm9kZVR5cGUmJm4uZmluZC5tYXRjaGVzU2VsZWN0b3IoYyxhKSkpe2YucHVzaChjKTticmVha31yZXR1cm4gdGhpcy5wdXNoU3RhY2soZi5sZW5ndGg+MT9uLnVuaXF1ZShmKTpmKX0saW5kZXg6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/XCJzdHJpbmdcIj09dHlwZW9mIGE/Zy5jYWxsKG4oYSksdGhpc1swXSk6Zy5jYWxsKHRoaXMsYS5qcXVlcnk/YVswXTphKTp0aGlzWzBdJiZ0aGlzWzBdLnBhcmVudE5vZGU/dGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGg6LTF9LGFkZDpmdW5jdGlvbihhLGIpe3JldHVybiB0aGlzLnB1c2hTdGFjayhuLnVuaXF1ZShuLm1lcmdlKHRoaXMuZ2V0KCksbihhLGIpKSkpfSxhZGRCYWNrOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFkZChudWxsPT1hP3RoaXMucHJldk9iamVjdDp0aGlzLnByZXZPYmplY3QuZmlsdGVyKGEpKX19KTtmdW5jdGlvbiBHKGEsYil7d2hpbGUoKGE9YVtiXSkmJjEhPT1hLm5vZGVUeXBlKTtyZXR1cm4gYX1uLmVhY2goe3BhcmVudDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJjExIT09Yi5ub2RlVHlwZT9iOm51bGx9LHBhcmVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwYXJlbnROb2RlXCIpfSxwYXJlbnRzVW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicGFyZW50Tm9kZVwiLGMpfSxuZXh0OmZ1bmN0aW9uKGEpe3JldHVybiBHKGEsXCJuZXh0U2libGluZ1wiKX0scHJldjpmdW5jdGlvbihhKXtyZXR1cm4gRyhhLFwicHJldmlvdXNTaWJsaW5nXCIpfSxuZXh0QWxsOmZ1bmN0aW9uKGEpe3JldHVybiBuLmRpcihhLFwibmV4dFNpYmxpbmdcIil9LHByZXZBbGw6ZnVuY3Rpb24oYSl7cmV0dXJuIG4uZGlyKGEsXCJwcmV2aW91c1NpYmxpbmdcIil9LG5leHRVbnRpbDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZGlyKGEsXCJuZXh0U2libGluZ1wiLGMpfSxwcmV2VW50aWw6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuLmRpcihhLFwicHJldmlvdXNTaWJsaW5nXCIsYyl9LHNpYmxpbmdzOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoKGEucGFyZW50Tm9kZXx8e30pLmZpcnN0Q2hpbGQsYSl9LGNoaWxkcmVuOmZ1bmN0aW9uKGEpe3JldHVybiBuLnNpYmxpbmcoYS5maXJzdENoaWxkKX0sY29udGVudHM6ZnVuY3Rpb24oYSl7cmV0dXJuIGEuY29udGVudERvY3VtZW50fHxuLm1lcmdlKFtdLGEuY2hpbGROb2Rlcyl9fSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYyxkKXt2YXIgZT1uLm1hcCh0aGlzLGIsYyk7cmV0dXJuXCJVbnRpbFwiIT09YS5zbGljZSgtNSkmJihkPWMpLGQmJlwic3RyaW5nXCI9PXR5cGVvZiBkJiYoZT1uLmZpbHRlcihkLGUpKSx0aGlzLmxlbmd0aD4xJiYoRlthXXx8bi51bmlxdWUoZSksRS50ZXN0KGEpJiZlLnJldmVyc2UoKSksdGhpcy5wdXNoU3RhY2soZSl9fSk7dmFyIEg9L1xcUysvZyxJPXt9O2Z1bmN0aW9uIEooYSl7dmFyIGI9SVthXT17fTtyZXR1cm4gbi5lYWNoKGEubWF0Y2goSCl8fFtdLGZ1bmN0aW9uKGEsYyl7YltjXT0hMH0pLGJ9bi5DYWxsYmFja3M9ZnVuY3Rpb24oYSl7YT1cInN0cmluZ1wiPT10eXBlb2YgYT9JW2FdfHxKKGEpOm4uZXh0ZW5kKHt9LGEpO3ZhciBiLGMsZCxlLGYsZyxoPVtdLGk9IWEub25jZSYmW10saj1mdW5jdGlvbihsKXtmb3IoYj1hLm1lbW9yeSYmbCxjPSEwLGc9ZXx8MCxlPTAsZj1oLmxlbmd0aCxkPSEwO2gmJmY+ZztnKyspaWYoaFtnXS5hcHBseShsWzBdLGxbMV0pPT09ITEmJmEuc3RvcE9uRmFsc2Upe2I9ITE7YnJlYWt9ZD0hMSxoJiYoaT9pLmxlbmd0aCYmaihpLnNoaWZ0KCkpOmI/aD1bXTprLmRpc2FibGUoKSl9LGs9e2FkZDpmdW5jdGlvbigpe2lmKGgpe3ZhciBjPWgubGVuZ3RoOyFmdW5jdGlvbiBnKGIpe24uZWFjaChiLGZ1bmN0aW9uKGIsYyl7dmFyIGQ9bi50eXBlKGMpO1wiZnVuY3Rpb25cIj09PWQ/YS51bmlxdWUmJmsuaGFzKGMpfHxoLnB1c2goYyk6YyYmYy5sZW5ndGgmJlwic3RyaW5nXCIhPT1kJiZnKGMpfSl9KGFyZ3VtZW50cyksZD9mPWgubGVuZ3RoOmImJihlPWMsaihiKSl9cmV0dXJuIHRoaXN9LHJlbW92ZTpmdW5jdGlvbigpe3JldHVybiBoJiZuLmVhY2goYXJndW1lbnRzLGZ1bmN0aW9uKGEsYil7dmFyIGM7d2hpbGUoKGM9bi5pbkFycmF5KGIsaCxjKSk+LTEpaC5zcGxpY2UoYywxKSxkJiYoZj49YyYmZi0tLGc+PWMmJmctLSl9KSx0aGlzfSxoYXM6ZnVuY3Rpb24oYSl7cmV0dXJuIGE/bi5pbkFycmF5KGEsaCk+LTE6ISghaHx8IWgubGVuZ3RoKX0sZW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gaD1bXSxmPTAsdGhpc30sZGlzYWJsZTpmdW5jdGlvbigpe3JldHVybiBoPWk9Yj12b2lkIDAsdGhpc30sZGlzYWJsZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haH0sbG9jazpmdW5jdGlvbigpe3JldHVybiBpPXZvaWQgMCxifHxrLmRpc2FibGUoKSx0aGlzfSxsb2NrZWQ6ZnVuY3Rpb24oKXtyZXR1cm4haX0sZmlyZVdpdGg6ZnVuY3Rpb24oYSxiKXtyZXR1cm4haHx8YyYmIWl8fChiPWJ8fFtdLGI9W2EsYi5zbGljZT9iLnNsaWNlKCk6Yl0sZD9pLnB1c2goYik6aihiKSksdGhpc30sZmlyZTpmdW5jdGlvbigpe3JldHVybiBrLmZpcmVXaXRoKHRoaXMsYXJndW1lbnRzKSx0aGlzfSxmaXJlZDpmdW5jdGlvbigpe3JldHVybiEhY319O3JldHVybiBrfSxuLmV4dGVuZCh7RGVmZXJyZWQ6ZnVuY3Rpb24oYSl7dmFyIGI9W1tcInJlc29sdmVcIixcImRvbmVcIixuLkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFwicmVzb2x2ZWRcIl0sW1wicmVqZWN0XCIsXCJmYWlsXCIsbi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcInJlamVjdGVkXCJdLFtcIm5vdGlmeVwiLFwicHJvZ3Jlc3NcIixuLkNhbGxiYWNrcyhcIm1lbW9yeVwiKV1dLGM9XCJwZW5kaW5nXCIsZD17c3RhdGU6ZnVuY3Rpb24oKXtyZXR1cm4gY30sYWx3YXlzOmZ1bmN0aW9uKCl7cmV0dXJuIGUuZG9uZShhcmd1bWVudHMpLmZhaWwoYXJndW1lbnRzKSx0aGlzfSx0aGVuOmZ1bmN0aW9uKCl7dmFyIGE9YXJndW1lbnRzO3JldHVybiBuLkRlZmVycmVkKGZ1bmN0aW9uKGMpe24uZWFjaChiLGZ1bmN0aW9uKGIsZil7dmFyIGc9bi5pc0Z1bmN0aW9uKGFbYl0pJiZhW2JdO2VbZlsxXV0oZnVuY3Rpb24oKXt2YXIgYT1nJiZnLmFwcGx5KHRoaXMsYXJndW1lbnRzKTthJiZuLmlzRnVuY3Rpb24oYS5wcm9taXNlKT9hLnByb21pc2UoKS5kb25lKGMucmVzb2x2ZSkuZmFpbChjLnJlamVjdCkucHJvZ3Jlc3MoYy5ub3RpZnkpOmNbZlswXStcIldpdGhcIl0odGhpcz09PWQ/Yy5wcm9taXNlKCk6dGhpcyxnP1thXTphcmd1bWVudHMpfSl9KSxhPW51bGx9KS5wcm9taXNlKCl9LHByb21pc2U6ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPWE/bi5leHRlbmQoYSxkKTpkfX0sZT17fTtyZXR1cm4gZC5waXBlPWQudGhlbixuLmVhY2goYixmdW5jdGlvbihhLGYpe3ZhciBnPWZbMl0saD1mWzNdO2RbZlsxXV09Zy5hZGQsaCYmZy5hZGQoZnVuY3Rpb24oKXtjPWh9LGJbMV5hXVsyXS5kaXNhYmxlLGJbMl1bMl0ubG9jayksZVtmWzBdXT1mdW5jdGlvbigpe3JldHVybiBlW2ZbMF0rXCJXaXRoXCJdKHRoaXM9PT1lP2Q6dGhpcyxhcmd1bWVudHMpLHRoaXN9LGVbZlswXStcIldpdGhcIl09Zy5maXJlV2l0aH0pLGQucHJvbWlzZShlKSxhJiZhLmNhbGwoZSxlKSxlfSx3aGVuOmZ1bmN0aW9uKGEpe3ZhciBiPTAsYz1kLmNhbGwoYXJndW1lbnRzKSxlPWMubGVuZ3RoLGY9MSE9PWV8fGEmJm4uaXNGdW5jdGlvbihhLnByb21pc2UpP2U6MCxnPTE9PT1mP2E6bi5EZWZlcnJlZCgpLGg9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBmdW5jdGlvbihlKXtiW2FdPXRoaXMsY1thXT1hcmd1bWVudHMubGVuZ3RoPjE/ZC5jYWxsKGFyZ3VtZW50cyk6ZSxjPT09aT9nLm5vdGlmeVdpdGgoYixjKTotLWZ8fGcucmVzb2x2ZVdpdGgoYixjKX19LGksaixrO2lmKGU+MSlmb3IoaT1uZXcgQXJyYXkoZSksaj1uZXcgQXJyYXkoZSksaz1uZXcgQXJyYXkoZSk7ZT5iO2IrKyljW2JdJiZuLmlzRnVuY3Rpb24oY1tiXS5wcm9taXNlKT9jW2JdLnByb21pc2UoKS5kb25lKGgoYixrLGMpKS5mYWlsKGcucmVqZWN0KS5wcm9ncmVzcyhoKGIsaixpKSk6LS1mO3JldHVybiBmfHxnLnJlc29sdmVXaXRoKGssYyksZy5wcm9taXNlKCl9fSk7dmFyIEs7bi5mbi5yZWFkeT1mdW5jdGlvbihhKXtyZXR1cm4gbi5yZWFkeS5wcm9taXNlKCkuZG9uZShhKSx0aGlzfSxuLmV4dGVuZCh7aXNSZWFkeTohMSxyZWFkeVdhaXQ6MSxob2xkUmVhZHk6ZnVuY3Rpb24oYSl7YT9uLnJlYWR5V2FpdCsrOm4ucmVhZHkoITApfSxyZWFkeTpmdW5jdGlvbihhKXsoYT09PSEwPy0tbi5yZWFkeVdhaXQ6bi5pc1JlYWR5KXx8KG4uaXNSZWFkeT0hMCxhIT09ITAmJi0tbi5yZWFkeVdhaXQ+MHx8KEsucmVzb2x2ZVdpdGgobCxbbl0pLG4uZm4udHJpZ2dlckhhbmRsZXImJihuKGwpLnRyaWdnZXJIYW5kbGVyKFwicmVhZHlcIiksbihsKS5vZmYoXCJyZWFkeVwiKSkpKX19KTtmdW5jdGlvbiBMKCl7bC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLEwsITEpLGEucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImxvYWRcIixMLCExKSxuLnJlYWR5KCl9bi5yZWFkeS5wcm9taXNlPWZ1bmN0aW9uKGIpe3JldHVybiBLfHwoSz1uLkRlZmVycmVkKCksXCJjb21wbGV0ZVwiPT09bC5yZWFkeVN0YXRlP3NldFRpbWVvdXQobi5yZWFkeSk6KGwuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIixMLCExKSxhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsTCwhMSkpKSxLLnByb21pc2UoYil9LG4ucmVhZHkucHJvbWlzZSgpO3ZhciBNPW4uYWNjZXNzPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcpe3ZhciBoPTAsaT1hLmxlbmd0aCxqPW51bGw9PWM7aWYoXCJvYmplY3RcIj09PW4udHlwZShjKSl7ZT0hMDtmb3IoaCBpbiBjKW4uYWNjZXNzKGEsYixoLGNbaF0sITAsZixnKX1lbHNlIGlmKHZvaWQgMCE9PWQmJihlPSEwLG4uaXNGdW5jdGlvbihkKXx8KGc9ITApLGomJihnPyhiLmNhbGwoYSxkKSxiPW51bGwpOihqPWIsYj1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIGouY2FsbChuKGEpLGMpfSkpLGIpKWZvcig7aT5oO2grKyliKGFbaF0sYyxnP2Q6ZC5jYWxsKGFbaF0saCxiKGFbaF0sYykpKTtyZXR1cm4gZT9hOmo/Yi5jYWxsKGEpOmk/YihhWzBdLGMpOmZ9O24uYWNjZXB0RGF0YT1mdW5jdGlvbihhKXtyZXR1cm4gMT09PWEubm9kZVR5cGV8fDk9PT1hLm5vZGVUeXBlfHwhK2Eubm9kZVR5cGV9O2Z1bmN0aW9uIE4oKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcy5jYWNoZT17fSwwLHtnZXQ6ZnVuY3Rpb24oKXtyZXR1cm57fX19KSx0aGlzLmV4cGFuZG89bi5leHBhbmRvK01hdGgucmFuZG9tKCl9Ti51aWQ9MSxOLmFjY2VwdHM9bi5hY2NlcHREYXRhLE4ucHJvdG90eXBlPXtrZXk6ZnVuY3Rpb24oYSl7aWYoIU4uYWNjZXB0cyhhKSlyZXR1cm4gMDt2YXIgYj17fSxjPWFbdGhpcy5leHBhbmRvXTtpZighYyl7Yz1OLnVpZCsrO3RyeXtiW3RoaXMuZXhwYW5kb109e3ZhbHVlOmN9LE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGEsYil9Y2F0Y2goZCl7Ylt0aGlzLmV4cGFuZG9dPWMsbi5leHRlbmQoYSxiKX19cmV0dXJuIHRoaXMuY2FjaGVbY118fCh0aGlzLmNhY2hlW2NdPXt9KSxjfSxzZXQ6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5rZXkoYSksZj10aGlzLmNhY2hlW2VdO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBiKWZbYl09YztlbHNlIGlmKG4uaXNFbXB0eU9iamVjdChmKSluLmV4dGVuZCh0aGlzLmNhY2hlW2VdLGIpO2Vsc2UgZm9yKGQgaW4gYilmW2RdPWJbZF07cmV0dXJuIGZ9LGdldDpmdW5jdGlvbihhLGIpe3ZhciBjPXRoaXMuY2FjaGVbdGhpcy5rZXkoYSldO3JldHVybiB2b2lkIDA9PT1iP2M6Y1tiXX0sYWNjZXNzOmZ1bmN0aW9uKGEsYixjKXt2YXIgZDtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmXCJzdHJpbmdcIj09dHlwZW9mIGImJnZvaWQgMD09PWM/KGQ9dGhpcy5nZXQoYSxiKSx2b2lkIDAhPT1kP2Q6dGhpcy5nZXQoYSxuLmNhbWVsQ2FzZShiKSkpOih0aGlzLnNldChhLGIsYyksdm9pZCAwIT09Yz9jOmIpfSxyZW1vdmU6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzLmtleShhKSxnPXRoaXMuY2FjaGVbZl07aWYodm9pZCAwPT09Yil0aGlzLmNhY2hlW2ZdPXt9O2Vsc2V7bi5pc0FycmF5KGIpP2Q9Yi5jb25jYXQoYi5tYXAobi5jYW1lbENhc2UpKTooZT1uLmNhbWVsQ2FzZShiKSxiIGluIGc/ZD1bYixlXTooZD1lLGQ9ZCBpbiBnP1tkXTpkLm1hdGNoKEgpfHxbXSkpLGM9ZC5sZW5ndGg7d2hpbGUoYy0tKWRlbGV0ZSBnW2RbY11dfX0saGFzRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4hbi5pc0VtcHR5T2JqZWN0KHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXXx8e30pfSxkaXNjYXJkOmZ1bmN0aW9uKGEpe2FbdGhpcy5leHBhbmRvXSYmZGVsZXRlIHRoaXMuY2FjaGVbYVt0aGlzLmV4cGFuZG9dXX19O3ZhciBPPW5ldyBOLFA9bmV3IE4sUT0vXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sUj0vKFtBLVpdKS9nO2Z1bmN0aW9uIFMoYSxiLGMpe3ZhciBkO2lmKHZvaWQgMD09PWMmJjE9PT1hLm5vZGVUeXBlKWlmKGQ9XCJkYXRhLVwiK2IucmVwbGFjZShSLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCksYz1hLmdldEF0dHJpYnV0ZShkKSxcInN0cmluZ1wiPT10eXBlb2YgYyl7dHJ5e2M9XCJ0cnVlXCI9PT1jPyEwOlwiZmFsc2VcIj09PWM/ITE6XCJudWxsXCI9PT1jP251bGw6K2MrXCJcIj09PWM/K2M6US50ZXN0KGMpP24ucGFyc2VKU09OKGMpOmN9Y2F0Y2goZSl7fVAuc2V0KGEsYixjKX1lbHNlIGM9dm9pZCAwO3JldHVybiBjfW4uZXh0ZW5kKHtoYXNEYXRhOmZ1bmN0aW9uKGEpe3JldHVybiBQLmhhc0RhdGEoYSl8fE8uaGFzRGF0YShhKX0sZGF0YTpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFAuYWNjZXNzKGEsYixjKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe1AucmVtb3ZlKGEsYil9LF9kYXRhOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gTy5hY2Nlc3MoYSxiLGMpfSxfcmVtb3ZlRGF0YTpmdW5jdGlvbihhLGIpe08ucmVtb3ZlKGEsYil9fSksbi5mbi5leHRlbmQoe2RhdGE6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj10aGlzWzBdLGc9ZiYmZi5hdHRyaWJ1dGVzO2lmKHZvaWQgMD09PWEpe2lmKHRoaXMubGVuZ3RoJiYoZT1QLmdldChmKSwxPT09Zi5ub2RlVHlwZSYmIU8uZ2V0KGYsXCJoYXNEYXRhQXR0cnNcIikpKXtjPWcubGVuZ3RoO3doaWxlKGMtLSlnW2NdJiYoZD1nW2NdLm5hbWUsMD09PWQuaW5kZXhPZihcImRhdGEtXCIpJiYoZD1uLmNhbWVsQ2FzZShkLnNsaWNlKDUpKSxTKGYsZCxlW2RdKSkpO08uc2V0KGYsXCJoYXNEYXRhQXR0cnNcIiwhMCl9cmV0dXJuIGV9cmV0dXJuXCJvYmplY3RcIj09dHlwZW9mIGE/dGhpcy5lYWNoKGZ1bmN0aW9uKCl7UC5zZXQodGhpcyxhKX0pOk0odGhpcyxmdW5jdGlvbihiKXt2YXIgYyxkPW4uY2FtZWxDYXNlKGEpO2lmKGYmJnZvaWQgMD09PWIpe2lmKGM9UC5nZXQoZixhKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UC5nZXQoZixkKSx2b2lkIDAhPT1jKXJldHVybiBjO2lmKGM9UyhmLGQsdm9pZCAwKSx2b2lkIDAhPT1jKXJldHVybiBjfWVsc2UgdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGM9UC5nZXQodGhpcyxkKTtQLnNldCh0aGlzLGQsYiksLTEhPT1hLmluZGV4T2YoXCItXCIpJiZ2b2lkIDAhPT1jJiZQLnNldCh0aGlzLGEsYil9KX0sbnVsbCxiLGFyZ3VtZW50cy5sZW5ndGg+MSxudWxsLCEwKX0scmVtb3ZlRGF0YTpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7UC5yZW1vdmUodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIsYyl7dmFyIGQ7cmV0dXJuIGE/KGI9KGJ8fFwiZnhcIikrXCJxdWV1ZVwiLGQ9Ty5nZXQoYSxiKSxjJiYoIWR8fG4uaXNBcnJheShjKT9kPU8uYWNjZXNzKGEsYixuLm1ha2VBcnJheShjKSk6ZC5wdXNoKGMpKSxkfHxbXSk6dm9pZCAwfSxkZXF1ZXVlOmZ1bmN0aW9uKGEsYil7Yj1ifHxcImZ4XCI7dmFyIGM9bi5xdWV1ZShhLGIpLGQ9Yy5sZW5ndGgsZT1jLnNoaWZ0KCksZj1uLl9xdWV1ZUhvb2tzKGEsYiksZz1mdW5jdGlvbigpe24uZGVxdWV1ZShhLGIpfTtcImlucHJvZ3Jlc3NcIj09PWUmJihlPWMuc2hpZnQoKSxkLS0pLGUmJihcImZ4XCI9PT1iJiZjLnVuc2hpZnQoXCJpbnByb2dyZXNzXCIpLGRlbGV0ZSBmLnN0b3AsZS5jYWxsKGEsZyxmKSksIWQmJmYmJmYuZW1wdHkuZmlyZSgpfSxfcXVldWVIb29rczpmdW5jdGlvbihhLGIpe3ZhciBjPWIrXCJxdWV1ZUhvb2tzXCI7cmV0dXJuIE8uZ2V0KGEsYyl8fE8uYWNjZXNzKGEsYyx7ZW1wdHk6bi5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKXtPLnJlbW92ZShhLFtiK1wicXVldWVcIixjXSl9KX0pfX0pLG4uZm4uZXh0ZW5kKHtxdWV1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPTI7cmV0dXJuXCJzdHJpbmdcIiE9dHlwZW9mIGEmJihiPWEsYT1cImZ4XCIsYy0tKSxhcmd1bWVudHMubGVuZ3RoPGM/bi5xdWV1ZSh0aGlzWzBdLGEpOnZvaWQgMD09PWI/dGhpczp0aGlzLmVhY2goZnVuY3Rpb24oKXt2YXIgYz1uLnF1ZXVlKHRoaXMsYSxiKTtuLl9xdWV1ZUhvb2tzKHRoaXMsYSksXCJmeFwiPT09YSYmXCJpbnByb2dyZXNzXCIhPT1jWzBdJiZuLmRlcXVldWUodGhpcyxhKX0pfSxkZXF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmRlcXVldWUodGhpcyxhKX0pfSxjbGVhclF1ZXVlOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLnF1ZXVlKGF8fFwiZnhcIixbXSl9LHByb21pc2U6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkPTEsZT1uLkRlZmVycmVkKCksZj10aGlzLGc9dGhpcy5sZW5ndGgsaD1mdW5jdGlvbigpey0tZHx8ZS5yZXNvbHZlV2l0aChmLFtmXSl9O1wic3RyaW5nXCIhPXR5cGVvZiBhJiYoYj1hLGE9dm9pZCAwKSxhPWF8fFwiZnhcIjt3aGlsZShnLS0pYz1PLmdldChmW2ddLGErXCJxdWV1ZUhvb2tzXCIpLGMmJmMuZW1wdHkmJihkKyssYy5lbXB0eS5hZGQoaCkpO3JldHVybiBoKCksZS5wcm9taXNlKGIpfX0pO3ZhciBUPS9bKy1dPyg/OlxcZCpcXC58KVxcZCsoPzpbZUVdWystXT9cXGQrfCkvLnNvdXJjZSxVPS9eKD86Y2hlY2tib3h8cmFkaW8pJC9pOyFmdW5jdGlvbigpe3ZhciBhPWwuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGI9YS5hcHBlbmRDaGlsZChsLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikpLGM9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7Yy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsXCJyYWRpb1wiKSxjLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIixcImNoZWNrZWRcIiksYy5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsXCJ0XCIpLGIuYXBwZW5kQ2hpbGQoYyksay5jaGVja0Nsb25lPWIuY2xvbmVOb2RlKCEwKS5jbG9uZU5vZGUoITApLmxhc3RDaGlsZC5jaGVja2VkLGIuaW5uZXJIVE1MPVwiPHRleHRhcmVhPng8L3RleHRhcmVhPlwiLGsubm9DbG9uZUNoZWNrZWQ9ISFiLmNsb25lTm9kZSghMCkubGFzdENoaWxkLmRlZmF1bHRWYWx1ZX0oKTt2YXIgVj1cInVuZGVmaW5lZFwiO2suZm9jdXNpbkJ1YmJsZXM9XCJvbmZvY3VzaW5cImluIGE7dmFyIFc9L15rZXkvLFg9L14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay8sWT0vXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sWj0vXihbXi5dKikoPzpcXC4oLispfCkkLztmdW5jdGlvbiAkKCl7cmV0dXJuITB9ZnVuY3Rpb24gXygpe3JldHVybiExfWZ1bmN0aW9uIGFiKCl7dHJ5e3JldHVybiBsLmFjdGl2ZUVsZW1lbnR9Y2F0Y2goYSl7fX1uLmV2ZW50PXtnbG9iYWw6e30sYWRkOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU8uZ2V0KGEpO2lmKHIpe2MuaGFuZGxlciYmKGY9YyxjPWYuaGFuZGxlcixlPWYuc2VsZWN0b3IpLGMuZ3VpZHx8KGMuZ3VpZD1uLmd1aWQrKyksKGk9ci5ldmVudHMpfHwoaT1yLmV2ZW50cz17fSksKGc9ci5oYW5kbGUpfHwoZz1yLmhhbmRsZT1mdW5jdGlvbihiKXtyZXR1cm4gdHlwZW9mIG4hPT1WJiZuLmV2ZW50LnRyaWdnZXJlZCE9PWIudHlwZT9uLmV2ZW50LmRpc3BhdGNoLmFwcGx5KGEsYXJndW1lbnRzKTp2b2lkIDB9KSxiPShifHxcIlwiKS5tYXRjaChIKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWg9Wi5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8mJihsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30sbz0oZT9sLmRlbGVnYXRlVHlwZTpsLmJpbmRUeXBlKXx8byxsPW4uZXZlbnQuc3BlY2lhbFtvXXx8e30saz1uLmV4dGVuZCh7dHlwZTpvLG9yaWdUeXBlOnEsZGF0YTpkLGhhbmRsZXI6YyxndWlkOmMuZ3VpZCxzZWxlY3RvcjplLG5lZWRzQ29udGV4dDplJiZuLmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoZSksbmFtZXNwYWNlOnAuam9pbihcIi5cIil9LGYpLChtPWlbb10pfHwobT1pW29dPVtdLG0uZGVsZWdhdGVDb3VudD0wLGwuc2V0dXAmJmwuc2V0dXAuY2FsbChhLGQscCxnKSE9PSExfHxhLmFkZEV2ZW50TGlzdGVuZXImJmEuYWRkRXZlbnRMaXN0ZW5lcihvLGcsITEpKSxsLmFkZCYmKGwuYWRkLmNhbGwoYSxrKSxrLmhhbmRsZXIuZ3VpZHx8KGsuaGFuZGxlci5ndWlkPWMuZ3VpZCkpLGU/bS5zcGxpY2UobS5kZWxlZ2F0ZUNvdW50KyssMCxrKTptLnB1c2goayksbi5ldmVudC5nbG9iYWxbb109ITApfX0scmVtb3ZlOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGksaixrLGwsbSxvLHAscSxyPU8uaGFzRGF0YShhKSYmTy5nZXQoYSk7aWYociYmKGk9ci5ldmVudHMpKXtiPShifHxcIlwiKS5tYXRjaChIKXx8W1wiXCJdLGo9Yi5sZW5ndGg7d2hpbGUoai0tKWlmKGg9Wi5leGVjKGJbal0pfHxbXSxvPXE9aFsxXSxwPShoWzJdfHxcIlwiKS5zcGxpdChcIi5cIikuc29ydCgpLG8pe2w9bi5ldmVudC5zcGVjaWFsW29dfHx7fSxvPShkP2wuZGVsZWdhdGVUeXBlOmwuYmluZFR5cGUpfHxvLG09aVtvXXx8W10saD1oWzJdJiZuZXcgUmVnRXhwKFwiKF58XFxcXC4pXCIrcC5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikrXCIoXFxcXC58JClcIiksZz1mPW0ubGVuZ3RoO3doaWxlKGYtLSlrPW1bZl0sIWUmJnEhPT1rLm9yaWdUeXBlfHxjJiZjLmd1aWQhPT1rLmd1aWR8fGgmJiFoLnRlc3Qoay5uYW1lc3BhY2UpfHxkJiZkIT09ay5zZWxlY3RvciYmKFwiKipcIiE9PWR8fCFrLnNlbGVjdG9yKXx8KG0uc3BsaWNlKGYsMSksay5zZWxlY3RvciYmbS5kZWxlZ2F0ZUNvdW50LS0sbC5yZW1vdmUmJmwucmVtb3ZlLmNhbGwoYSxrKSk7ZyYmIW0ubGVuZ3RoJiYobC50ZWFyZG93biYmbC50ZWFyZG93bi5jYWxsKGEscCxyLmhhbmRsZSkhPT0hMXx8bi5yZW1vdmVFdmVudChhLG8sci5oYW5kbGUpLGRlbGV0ZSBpW29dKX1lbHNlIGZvcihvIGluIGkpbi5ldmVudC5yZW1vdmUoYSxvK2Jbal0sYyxkLCEwKTtuLmlzRW1wdHlPYmplY3QoaSkmJihkZWxldGUgci5oYW5kbGUsTy5yZW1vdmUoYSxcImV2ZW50c1wiKSl9fSx0cmlnZ2VyOmZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmLGcsaCxpLGssbSxvLHA9W2R8fGxdLHE9ai5jYWxsKGIsXCJ0eXBlXCIpP2IudHlwZTpiLHI9ai5jYWxsKGIsXCJuYW1lc3BhY2VcIik/Yi5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpOltdO2lmKGc9aD1kPWR8fGwsMyE9PWQubm9kZVR5cGUmJjghPT1kLm5vZGVUeXBlJiYhWS50ZXN0KHErbi5ldmVudC50cmlnZ2VyZWQpJiYocS5pbmRleE9mKFwiLlwiKT49MCYmKHI9cS5zcGxpdChcIi5cIikscT1yLnNoaWZ0KCksci5zb3J0KCkpLGs9cS5pbmRleE9mKFwiOlwiKTwwJiZcIm9uXCIrcSxiPWJbbi5leHBhbmRvXT9iOm5ldyBuLkV2ZW50KHEsXCJvYmplY3RcIj09dHlwZW9mIGImJmIpLGIuaXNUcmlnZ2VyPWU/MjozLGIubmFtZXNwYWNlPXIuam9pbihcIi5cIiksYi5uYW1lc3BhY2VfcmU9Yi5uYW1lc3BhY2U/bmV3IFJlZ0V4cChcIihefFxcXFwuKVwiK3Iuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpK1wiKFxcXFwufCQpXCIpOm51bGwsYi5yZXN1bHQ9dm9pZCAwLGIudGFyZ2V0fHwoYi50YXJnZXQ9ZCksYz1udWxsPT1jP1tiXTpuLm1ha2VBcnJheShjLFtiXSksbz1uLmV2ZW50LnNwZWNpYWxbcV18fHt9LGV8fCFvLnRyaWdnZXJ8fG8udHJpZ2dlci5hcHBseShkLGMpIT09ITEpKXtpZighZSYmIW8ubm9CdWJibGUmJiFuLmlzV2luZG93KGQpKXtmb3IoaT1vLmRlbGVnYXRlVHlwZXx8cSxZLnRlc3QoaStxKXx8KGc9Zy5wYXJlbnROb2RlKTtnO2c9Zy5wYXJlbnROb2RlKXAucHVzaChnKSxoPWc7aD09PShkLm93bmVyRG9jdW1lbnR8fGwpJiZwLnB1c2goaC5kZWZhdWx0Vmlld3x8aC5wYXJlbnRXaW5kb3d8fGEpfWY9MDt3aGlsZSgoZz1wW2YrK10pJiYhYi5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpKWIudHlwZT1mPjE/aTpvLmJpbmRUeXBlfHxxLG09KE8uZ2V0KGcsXCJldmVudHNcIil8fHt9KVtiLnR5cGVdJiZPLmdldChnLFwiaGFuZGxlXCIpLG0mJm0uYXBwbHkoZyxjKSxtPWsmJmdba10sbSYmbS5hcHBseSYmbi5hY2NlcHREYXRhKGcpJiYoYi5yZXN1bHQ9bS5hcHBseShnLGMpLGIucmVzdWx0PT09ITEmJmIucHJldmVudERlZmF1bHQoKSk7cmV0dXJuIGIudHlwZT1xLGV8fGIuaXNEZWZhdWx0UHJldmVudGVkKCl8fG8uX2RlZmF1bHQmJm8uX2RlZmF1bHQuYXBwbHkocC5wb3AoKSxjKSE9PSExfHwhbi5hY2NlcHREYXRhKGQpfHxrJiZuLmlzRnVuY3Rpb24oZFtxXSkmJiFuLmlzV2luZG93KGQpJiYoaD1kW2tdLGgmJihkW2tdPW51bGwpLG4uZXZlbnQudHJpZ2dlcmVkPXEsZFtxXSgpLG4uZXZlbnQudHJpZ2dlcmVkPXZvaWQgMCxoJiYoZFtrXT1oKSksYi5yZXN1bHR9fSxkaXNwYXRjaDpmdW5jdGlvbihhKXthPW4uZXZlbnQuZml4KGEpO3ZhciBiLGMsZSxmLGcsaD1bXSxpPWQuY2FsbChhcmd1bWVudHMpLGo9KE8uZ2V0KHRoaXMsXCJldmVudHNcIil8fHt9KVthLnR5cGVdfHxbXSxrPW4uZXZlbnQuc3BlY2lhbFthLnR5cGVdfHx7fTtpZihpWzBdPWEsYS5kZWxlZ2F0ZVRhcmdldD10aGlzLCFrLnByZURpc3BhdGNofHxrLnByZURpc3BhdGNoLmNhbGwodGhpcyxhKSE9PSExKXtoPW4uZXZlbnQuaGFuZGxlcnMuY2FsbCh0aGlzLGEsaiksYj0wO3doaWxlKChmPWhbYisrXSkmJiFhLmlzUHJvcGFnYXRpb25TdG9wcGVkKCkpe2EuY3VycmVudFRhcmdldD1mLmVsZW0sYz0wO3doaWxlKChnPWYuaGFuZGxlcnNbYysrXSkmJiFhLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkpKCFhLm5hbWVzcGFjZV9yZXx8YS5uYW1lc3BhY2VfcmUudGVzdChnLm5hbWVzcGFjZSkpJiYoYS5oYW5kbGVPYmo9ZyxhLmRhdGE9Zy5kYXRhLGU9KChuLmV2ZW50LnNwZWNpYWxbZy5vcmlnVHlwZV18fHt9KS5oYW5kbGV8fGcuaGFuZGxlcikuYXBwbHkoZi5lbGVtLGkpLHZvaWQgMCE9PWUmJihhLnJlc3VsdD1lKT09PSExJiYoYS5wcmV2ZW50RGVmYXVsdCgpLGEuc3RvcFByb3BhZ2F0aW9uKCkpKX1yZXR1cm4gay5wb3N0RGlzcGF0Y2gmJmsucG9zdERpc3BhdGNoLmNhbGwodGhpcyxhKSxhLnJlc3VsdH19LGhhbmRsZXJzOmZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZz1bXSxoPWIuZGVsZWdhdGVDb3VudCxpPWEudGFyZ2V0O2lmKGgmJmkubm9kZVR5cGUmJighYS5idXR0b258fFwiY2xpY2tcIiE9PWEudHlwZSkpZm9yKDtpIT09dGhpcztpPWkucGFyZW50Tm9kZXx8dGhpcylpZihpLmRpc2FibGVkIT09ITB8fFwiY2xpY2tcIiE9PWEudHlwZSl7Zm9yKGQ9W10sYz0wO2g+YztjKyspZj1iW2NdLGU9Zi5zZWxlY3RvcitcIiBcIix2b2lkIDA9PT1kW2VdJiYoZFtlXT1mLm5lZWRzQ29udGV4dD9uKGUsdGhpcykuaW5kZXgoaSk+PTA6bi5maW5kKGUsdGhpcyxudWxsLFtpXSkubGVuZ3RoKSxkW2VdJiZkLnB1c2goZik7ZC5sZW5ndGgmJmcucHVzaCh7ZWxlbTppLGhhbmRsZXJzOmR9KX1yZXR1cm4gaDxiLmxlbmd0aCYmZy5wdXNoKHtlbGVtOnRoaXMsaGFuZGxlcnM6Yi5zbGljZShoKX0pLGd9LHByb3BzOlwiYWx0S2V5IGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgZXZlbnRQaGFzZSBtZXRhS2V5IHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgdGFyZ2V0IHRpbWVTdGFtcCB2aWV3IHdoaWNoXCIuc3BsaXQoXCIgXCIpLGZpeEhvb2tzOnt9LGtleUhvb2tzOntwcm9wczpcImNoYXIgY2hhckNvZGUga2V5IGtleUNvZGVcIi5zcGxpdChcIiBcIiksZmlsdGVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGw9PWEud2hpY2gmJihhLndoaWNoPW51bGwhPWIuY2hhckNvZGU/Yi5jaGFyQ29kZTpiLmtleUNvZGUpLGF9fSxtb3VzZUhvb2tzOntwcm9wczpcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxmaWx0ZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1iLmJ1dHRvbjtyZXR1cm4gbnVsbD09YS5wYWdlWCYmbnVsbCE9Yi5jbGllbnRYJiYoYz1hLnRhcmdldC5vd25lckRvY3VtZW50fHxsLGQ9Yy5kb2N1bWVudEVsZW1lbnQsZT1jLmJvZHksYS5wYWdlWD1iLmNsaWVudFgrKGQmJmQuc2Nyb2xsTGVmdHx8ZSYmZS5zY3JvbGxMZWZ0fHwwKS0oZCYmZC5jbGllbnRMZWZ0fHxlJiZlLmNsaWVudExlZnR8fDApLGEucGFnZVk9Yi5jbGllbnRZKyhkJiZkLnNjcm9sbFRvcHx8ZSYmZS5zY3JvbGxUb3B8fDApLShkJiZkLmNsaWVudFRvcHx8ZSYmZS5jbGllbnRUb3B8fDApKSxhLndoaWNofHx2b2lkIDA9PT1mfHwoYS53aGljaD0xJmY/MToyJmY/Mzo0JmY/MjowKSxhfX0sZml4OmZ1bmN0aW9uKGEpe2lmKGFbbi5leHBhbmRvXSlyZXR1cm4gYTt2YXIgYixjLGQsZT1hLnR5cGUsZj1hLGc9dGhpcy5maXhIb29rc1tlXTtnfHwodGhpcy5maXhIb29rc1tlXT1nPVgudGVzdChlKT90aGlzLm1vdXNlSG9va3M6Vy50ZXN0KGUpP3RoaXMua2V5SG9va3M6e30pLGQ9Zy5wcm9wcz90aGlzLnByb3BzLmNvbmNhdChnLnByb3BzKTp0aGlzLnByb3BzLGE9bmV3IG4uRXZlbnQoZiksYj1kLmxlbmd0aDt3aGlsZShiLS0pYz1kW2JdLGFbY109ZltjXTtyZXR1cm4gYS50YXJnZXR8fChhLnRhcmdldD1sKSwzPT09YS50YXJnZXQubm9kZVR5cGUmJihhLnRhcmdldD1hLnRhcmdldC5wYXJlbnROb2RlKSxnLmZpbHRlcj9nLmZpbHRlcihhLGYpOmF9LHNwZWNpYWw6e2xvYWQ6e25vQnViYmxlOiEwfSxmb2N1czp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzIT09YWIoKSYmdGhpcy5mb2N1cz8odGhpcy5mb2N1cygpLCExKTp2b2lkIDB9LGRlbGVnYXRlVHlwZTpcImZvY3VzaW5cIn0sYmx1cjp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVybiB0aGlzPT09YWIoKSYmdGhpcy5ibHVyPyh0aGlzLmJsdXIoKSwhMSk6dm9pZCAwfSxkZWxlZ2F0ZVR5cGU6XCJmb2N1c291dFwifSxjbGljazp7dHJpZ2dlcjpmdW5jdGlvbigpe3JldHVyblwiY2hlY2tib3hcIj09PXRoaXMudHlwZSYmdGhpcy5jbGljayYmbi5ub2RlTmFtZSh0aGlzLFwiaW5wdXRcIik/KHRoaXMuY2xpY2soKSwhMSk6dm9pZCAwfSxfZGVmYXVsdDpmdW5jdGlvbihhKXtyZXR1cm4gbi5ub2RlTmFtZShhLnRhcmdldCxcImFcIil9fSxiZWZvcmV1bmxvYWQ6e3Bvc3REaXNwYXRjaDpmdW5jdGlvbihhKXt2b2lkIDAhPT1hLnJlc3VsdCYmYS5vcmlnaW5hbEV2ZW50JiYoYS5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlPWEucmVzdWx0KX19fSxzaW11bGF0ZTpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1uLmV4dGVuZChuZXcgbi5FdmVudCxjLHt0eXBlOmEsaXNTaW11bGF0ZWQ6ITAsb3JpZ2luYWxFdmVudDp7fX0pO2Q/bi5ldmVudC50cmlnZ2VyKGUsbnVsbCxiKTpuLmV2ZW50LmRpc3BhdGNoLmNhbGwoYixlKSxlLmlzRGVmYXVsdFByZXZlbnRlZCgpJiZjLnByZXZlbnREZWZhdWx0KCl9fSxuLnJlbW92ZUV2ZW50PWZ1bmN0aW9uKGEsYixjKXthLnJlbW92ZUV2ZW50TGlzdGVuZXImJmEucmVtb3ZlRXZlbnRMaXN0ZW5lcihiLGMsITEpfSxuLkV2ZW50PWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuLkV2ZW50PyhhJiZhLnR5cGU/KHRoaXMub3JpZ2luYWxFdmVudD1hLHRoaXMudHlwZT1hLnR5cGUsdGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQ9YS5kZWZhdWx0UHJldmVudGVkfHx2b2lkIDA9PT1hLmRlZmF1bHRQcmV2ZW50ZWQmJmEucmV0dXJuVmFsdWU9PT0hMT8kOl8pOnRoaXMudHlwZT1hLGImJm4uZXh0ZW5kKHRoaXMsYiksdGhpcy50aW1lU3RhbXA9YSYmYS50aW1lU3RhbXB8fG4ubm93KCksdm9pZCh0aGlzW24uZXhwYW5kb109ITApKTpuZXcgbi5FdmVudChhLGIpfSxuLkV2ZW50LnByb3RvdHlwZT17aXNEZWZhdWx0UHJldmVudGVkOl8saXNQcm9wYWdhdGlvblN0b3BwZWQ6Xyxpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDpfLHByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vcmlnaW5hbEV2ZW50O3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPSQsYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5wcmV2ZW50RGVmYXVsdCgpfSxzdG9wUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD0kLGEmJmEuc3RvcFByb3BhZ2F0aW9uJiZhLnN0b3BQcm9wYWdhdGlvbigpfSxzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm9yaWdpbmFsRXZlbnQ7dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZD0kLGEmJmEuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZhLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLHRoaXMuc3RvcFByb3BhZ2F0aW9uKCl9fSxuLmVhY2goe21vdXNlZW50ZXI6XCJtb3VzZW92ZXJcIixtb3VzZWxlYXZlOlwibW91c2VvdXRcIixwb2ludGVyZW50ZXI6XCJwb2ludGVyb3ZlclwiLHBvaW50ZXJsZWF2ZTpcInBvaW50ZXJvdXRcIn0sZnVuY3Rpb24oYSxiKXtuLmV2ZW50LnNwZWNpYWxbYV09e2RlbGVnYXRlVHlwZTpiLGJpbmRUeXBlOmIsaGFuZGxlOmZ1bmN0aW9uKGEpe3ZhciBjLGQ9dGhpcyxlPWEucmVsYXRlZFRhcmdldCxmPWEuaGFuZGxlT2JqO3JldHVybighZXx8ZSE9PWQmJiFuLmNvbnRhaW5zKGQsZSkpJiYoYS50eXBlPWYub3JpZ1R5cGUsYz1mLmhhbmRsZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpLGEudHlwZT1iKSxjfX19KSxrLmZvY3VzaW5CdWJibGVzfHxuLmVhY2goe2ZvY3VzOlwiZm9jdXNpblwiLGJsdXI6XCJmb2N1c291dFwifSxmdW5jdGlvbihhLGIpe3ZhciBjPWZ1bmN0aW9uKGEpe24uZXZlbnQuc2ltdWxhdGUoYixhLnRhcmdldCxuLmV2ZW50LmZpeChhKSwhMCl9O24uZXZlbnQuc3BlY2lhbFtiXT17c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZD10aGlzLm93bmVyRG9jdW1lbnR8fHRoaXMsZT1PLmFjY2VzcyhkLGIpO2V8fGQuYWRkRXZlbnRMaXN0ZW5lcihhLGMsITApLE8uYWNjZXNzKGQsYiwoZXx8MCkrMSl9LHRlYXJkb3duOmZ1bmN0aW9uKCl7dmFyIGQ9dGhpcy5vd25lckRvY3VtZW50fHx0aGlzLGU9Ty5hY2Nlc3MoZCxiKS0xO2U/Ty5hY2Nlc3MoZCxiLGUpOihkLnJlbW92ZUV2ZW50TGlzdGVuZXIoYSxjLCEwKSxPLnJlbW92ZShkLGIpKX19fSksbi5mbi5leHRlbmQoe29uOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZztpZihcIm9iamVjdFwiPT10eXBlb2YgYSl7XCJzdHJpbmdcIiE9dHlwZW9mIGImJihjPWN8fGIsYj12b2lkIDApO2ZvcihnIGluIGEpdGhpcy5vbihnLGIsYyxhW2ddLGUpO3JldHVybiB0aGlzfWlmKG51bGw9PWMmJm51bGw9PWQ/KGQ9YixjPWI9dm9pZCAwKTpudWxsPT1kJiYoXCJzdHJpbmdcIj09dHlwZW9mIGI/KGQ9YyxjPXZvaWQgMCk6KGQ9YyxjPWIsYj12b2lkIDApKSxkPT09ITEpZD1fO2Vsc2UgaWYoIWQpcmV0dXJuIHRoaXM7cmV0dXJuIDE9PT1lJiYoZj1kLGQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG4oKS5vZmYoYSksZi5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGQuZ3VpZD1mLmd1aWR8fChmLmd1aWQ9bi5ndWlkKyspKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LmFkZCh0aGlzLGEsZCxjLGIpfSl9LG9uZTpmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gdGhpcy5vbihhLGIsYyxkLDEpfSxvZmY6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU7aWYoYSYmYS5wcmV2ZW50RGVmYXVsdCYmYS5oYW5kbGVPYmopcmV0dXJuIGQ9YS5oYW5kbGVPYmosbihhLmRlbGVnYXRlVGFyZ2V0KS5vZmYoZC5uYW1lc3BhY2U/ZC5vcmlnVHlwZStcIi5cIitkLm5hbWVzcGFjZTpkLm9yaWdUeXBlLGQuc2VsZWN0b3IsZC5oYW5kbGVyKSx0aGlzO2lmKFwib2JqZWN0XCI9PXR5cGVvZiBhKXtmb3IoZSBpbiBhKXRoaXMub2ZmKGUsYixhW2VdKTtyZXR1cm4gdGhpc31yZXR1cm4oYj09PSExfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBiKSYmKGM9YixiPXZvaWQgMCksYz09PSExJiYoYz1fKSx0aGlzLmVhY2goZnVuY3Rpb24oKXtuLmV2ZW50LnJlbW92ZSh0aGlzLGEsYyxiKX0pfSx0cmlnZ2VyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe24uZXZlbnQudHJpZ2dlcihhLGIsdGhpcyl9KX0sdHJpZ2dlckhhbmRsZXI6ZnVuY3Rpb24oYSxiKXt2YXIgYz10aGlzWzBdO3JldHVybiBjP24uZXZlbnQudHJpZ2dlcihhLGIsYywhMCk6dm9pZCAwfX0pO3ZhciBiYj0vPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksY2I9LzwoW1xcdzpdKykvLGRiPS88fCYjP1xcdys7LyxlYj0vPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLGZiPS9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksZ2I9L14kfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSxoYj0vXnRydWVcXC8oLiopLyxpYj0vXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csamI9e29wdGlvbjpbMSxcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIixcIjwvc2VsZWN0PlwiXSx0aGVhZDpbMSxcIjx0YWJsZT5cIixcIjwvdGFibGU+XCJdLGNvbDpbMixcIjx0YWJsZT48Y29sZ3JvdXA+XCIsXCI8L2NvbGdyb3VwPjwvdGFibGU+XCJdLHRyOlsyLFwiPHRhYmxlPjx0Ym9keT5cIixcIjwvdGJvZHk+PC90YWJsZT5cIl0sdGQ6WzMsXCI8dGFibGU+PHRib2R5Pjx0cj5cIixcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiXSxfZGVmYXVsdDpbMCxcIlwiLFwiXCJdfTtqYi5vcHRncm91cD1qYi5vcHRpb24samIudGJvZHk9amIudGZvb3Q9amIuY29sZ3JvdXA9amIuY2FwdGlvbj1qYi50aGVhZCxqYi50aD1qYi50ZDtmdW5jdGlvbiBrYihhLGIpe3JldHVybiBuLm5vZGVOYW1lKGEsXCJ0YWJsZVwiKSYmbi5ub2RlTmFtZSgxMSE9PWIubm9kZVR5cGU/YjpiLmZpcnN0Q2hpbGQsXCJ0clwiKT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGJvZHlcIilbMF18fGEuYXBwZW5kQ2hpbGQoYS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSk6YX1mdW5jdGlvbiBsYihhKXtyZXR1cm4gYS50eXBlPShudWxsIT09YS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKStcIi9cIithLnR5cGUsYX1mdW5jdGlvbiBtYihhKXt2YXIgYj1oYi5leGVjKGEudHlwZSk7cmV0dXJuIGI/YS50eXBlPWJbMV06YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpLGF9ZnVuY3Rpb24gbmIoYSxiKXtmb3IodmFyIGM9MCxkPWEubGVuZ3RoO2Q+YztjKyspTy5zZXQoYVtjXSxcImdsb2JhbEV2YWxcIiwhYnx8Ty5nZXQoYltjXSxcImdsb2JhbEV2YWxcIikpfWZ1bmN0aW9uIG9iKGEsYil7dmFyIGMsZCxlLGYsZyxoLGksajtpZigxPT09Yi5ub2RlVHlwZSl7aWYoTy5oYXNEYXRhKGEpJiYoZj1PLmFjY2VzcyhhKSxnPU8uc2V0KGIsZiksaj1mLmV2ZW50cykpe2RlbGV0ZSBnLmhhbmRsZSxnLmV2ZW50cz17fTtmb3IoZSBpbiBqKWZvcihjPTAsZD1qW2VdLmxlbmd0aDtkPmM7YysrKW4uZXZlbnQuYWRkKGIsZSxqW2VdW2NdKX1QLmhhc0RhdGEoYSkmJihoPVAuYWNjZXNzKGEpLGk9bi5leHRlbmQoe30saCksUC5zZXQoYixpKSl9fWZ1bmN0aW9uIHBiKGEsYil7dmFyIGM9YS5nZXRFbGVtZW50c0J5VGFnTmFtZT9hLmdldEVsZW1lbnRzQnlUYWdOYW1lKGJ8fFwiKlwiKTphLnF1ZXJ5U2VsZWN0b3JBbGw/YS5xdWVyeVNlbGVjdG9yQWxsKGJ8fFwiKlwiKTpbXTtyZXR1cm4gdm9pZCAwPT09Ynx8YiYmbi5ub2RlTmFtZShhLGIpP24ubWVyZ2UoW2FdLGMpOmN9ZnVuY3Rpb24gcWIoYSxiKXt2YXIgYz1iLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XCJpbnB1dFwiPT09YyYmVS50ZXN0KGEudHlwZSk/Yi5jaGVja2VkPWEuY2hlY2tlZDooXCJpbnB1dFwiPT09Y3x8XCJ0ZXh0YXJlYVwiPT09YykmJihiLmRlZmF1bHRWYWx1ZT1hLmRlZmF1bHRWYWx1ZSl9bi5leHRlbmQoe2Nsb25lOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZyxoPWEuY2xvbmVOb2RlKCEwKSxpPW4uY29udGFpbnMoYS5vd25lckRvY3VtZW50LGEpO2lmKCEoay5ub0Nsb25lQ2hlY2tlZHx8MSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZXx8bi5pc1hNTERvYyhhKSkpZm9yKGc9cGIoaCksZj1wYihhKSxkPTAsZT1mLmxlbmd0aDtlPmQ7ZCsrKXFiKGZbZF0sZ1tkXSk7aWYoYilpZihjKWZvcihmPWZ8fHBiKGEpLGc9Z3x8cGIoaCksZD0wLGU9Zi5sZW5ndGg7ZT5kO2QrKylvYihmW2RdLGdbZF0pO2Vsc2Ugb2IoYSxoKTtyZXR1cm4gZz1wYihoLFwic2NyaXB0XCIpLGcubGVuZ3RoPjAmJm5iKGcsIWkmJnBiKGEsXCJzY3JpcHRcIikpLGh9LGJ1aWxkRnJhZ21lbnQ6ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGksaixrPWIuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLGw9W10sbT0wLG89YS5sZW5ndGg7bz5tO20rKylpZihlPWFbbV0sZXx8MD09PWUpaWYoXCJvYmplY3RcIj09PW4udHlwZShlKSluLm1lcmdlKGwsZS5ub2RlVHlwZT9bZV06ZSk7ZWxzZSBpZihkYi50ZXN0KGUpKXtmPWZ8fGsuYXBwZW5kQ2hpbGQoYi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpKSxnPShjYi5leGVjKGUpfHxbXCJcIixcIlwiXSlbMV0udG9Mb3dlckNhc2UoKSxoPWpiW2ddfHxqYi5fZGVmYXVsdCxmLmlubmVySFRNTD1oWzFdK2UucmVwbGFjZShiYixcIjwkMT48LyQyPlwiKStoWzJdLGo9aFswXTt3aGlsZShqLS0pZj1mLmxhc3RDaGlsZDtuLm1lcmdlKGwsZi5jaGlsZE5vZGVzKSxmPWsuZmlyc3RDaGlsZCxmLnRleHRDb250ZW50PVwiXCJ9ZWxzZSBsLnB1c2goYi5jcmVhdGVUZXh0Tm9kZShlKSk7ay50ZXh0Q29udGVudD1cIlwiLG09MDt3aGlsZShlPWxbbSsrXSlpZigoIWR8fC0xPT09bi5pbkFycmF5KGUsZCkpJiYoaT1uLmNvbnRhaW5zKGUub3duZXJEb2N1bWVudCxlKSxmPXBiKGsuYXBwZW5kQ2hpbGQoZSksXCJzY3JpcHRcIiksaSYmbmIoZiksYykpe2o9MDt3aGlsZShlPWZbaisrXSlnYi50ZXN0KGUudHlwZXx8XCJcIikmJmMucHVzaChlKX1yZXR1cm4ga30sY2xlYW5EYXRhOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQsZSxmPW4uZXZlbnQuc3BlY2lhbCxnPTA7dm9pZCAwIT09KGM9YVtnXSk7ZysrKXtpZihuLmFjY2VwdERhdGEoYykmJihlPWNbTy5leHBhbmRvXSxlJiYoYj1PLmNhY2hlW2VdKSkpe2lmKGIuZXZlbnRzKWZvcihkIGluIGIuZXZlbnRzKWZbZF0/bi5ldmVudC5yZW1vdmUoYyxkKTpuLnJlbW92ZUV2ZW50KGMsZCxiLmhhbmRsZSk7Ty5jYWNoZVtlXSYmZGVsZXRlIE8uY2FjaGVbZV19ZGVsZXRlIFAuY2FjaGVbY1tQLmV4cGFuZG9dXX19fSksbi5mbi5leHRlbmQoe3RleHQ6ZnVuY3Rpb24oYSl7cmV0dXJuIE0odGhpcyxmdW5jdGlvbihhKXtyZXR1cm4gdm9pZCAwPT09YT9uLnRleHQodGhpcyk6dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKXsoMT09PXRoaXMubm9kZVR5cGV8fDExPT09dGhpcy5ub2RlVHlwZXx8OT09PXRoaXMubm9kZVR5cGUpJiYodGhpcy50ZXh0Q29udGVudD1hKX0pfSxudWxsLGEsYXJndW1lbnRzLmxlbmd0aCl9LGFwcGVuZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmRvbU1hbmlwKGFyZ3VtZW50cyxmdW5jdGlvbihhKXtpZigxPT09dGhpcy5ub2RlVHlwZXx8MTE9PT10aGlzLm5vZGVUeXBlfHw5PT09dGhpcy5ub2RlVHlwZSl7dmFyIGI9a2IodGhpcyxhKTtiLmFwcGVuZENoaWxkKGEpfX0pfSxwcmVwZW5kOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe2lmKDE9PT10aGlzLm5vZGVUeXBlfHwxMT09PXRoaXMubm9kZVR5cGV8fDk9PT10aGlzLm5vZGVUeXBlKXt2YXIgYj1rYih0aGlzLGEpO2IuaW5zZXJ0QmVmb3JlKGEsYi5maXJzdENoaWxkKX19KX0sYmVmb3JlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMpfSl9LGFmdGVyOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGEpe3RoaXMucGFyZW50Tm9kZSYmdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLHRoaXMubmV4dFNpYmxpbmcpfSl9LHJlbW92ZTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYyxkPWE/bi5maWx0ZXIoYSx0aGlzKTp0aGlzLGU9MDtudWxsIT0oYz1kW2VdKTtlKyspYnx8MSE9PWMubm9kZVR5cGV8fG4uY2xlYW5EYXRhKHBiKGMpKSxjLnBhcmVudE5vZGUmJihiJiZuLmNvbnRhaW5zKGMub3duZXJEb2N1bWVudCxjKSYmbmIocGIoYyxcInNjcmlwdFwiKSksYy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGMpKTtyZXR1cm4gdGhpc30sZW1wdHk6ZnVuY3Rpb24oKXtmb3IodmFyIGEsYj0wO251bGwhPShhPXRoaXNbYl0pO2IrKykxPT09YS5ub2RlVHlwZSYmKG4uY2xlYW5EYXRhKHBiKGEsITEpKSxhLnRleHRDb250ZW50PVwiXCIpO3JldHVybiB0aGlzfSxjbG9uZTpmdW5jdGlvbihhLGIpe3JldHVybiBhPW51bGw9PWE/ITE6YSxiPW51bGw9PWI/YTpiLHRoaXMubWFwKGZ1bmN0aW9uKCl7cmV0dXJuIG4uY2xvbmUodGhpcyxhLGIpfSl9LGh0bWw6ZnVuY3Rpb24oYSl7cmV0dXJuIE0odGhpcyxmdW5jdGlvbihhKXt2YXIgYj10aGlzWzBdfHx7fSxjPTAsZD10aGlzLmxlbmd0aDtpZih2b2lkIDA9PT1hJiYxPT09Yi5ub2RlVHlwZSlyZXR1cm4gYi5pbm5lckhUTUw7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGEmJiFlYi50ZXN0KGEpJiYhamJbKGNiLmV4ZWMoYSl8fFtcIlwiLFwiXCJdKVsxXS50b0xvd2VyQ2FzZSgpXSl7YT1hLnJlcGxhY2UoYmIsXCI8JDE+PC8kMj5cIik7dHJ5e2Zvcig7ZD5jO2MrKyliPXRoaXNbY118fHt9LDE9PT1iLm5vZGVUeXBlJiYobi5jbGVhbkRhdGEocGIoYiwhMSkpLGIuaW5uZXJIVE1MPWEpO2I9MH1jYXRjaChlKXt9fWImJnRoaXMuZW1wdHkoKS5hcHBlbmQoYSl9LG51bGwsYSxhcmd1bWVudHMubGVuZ3RoKX0scmVwbGFjZVdpdGg6ZnVuY3Rpb24oKXt2YXIgYT1hcmd1bWVudHNbMF07cmV0dXJuIHRoaXMuZG9tTWFuaXAoYXJndW1lbnRzLGZ1bmN0aW9uKGIpe2E9dGhpcy5wYXJlbnROb2RlLG4uY2xlYW5EYXRhKHBiKHRoaXMpKSxhJiZhLnJlcGxhY2VDaGlsZChiLHRoaXMpfSksYSYmKGEubGVuZ3RofHxhLm5vZGVUeXBlKT90aGlzOnRoaXMucmVtb3ZlKCl9LGRldGFjaDpmdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5yZW1vdmUoYSwhMCl9LGRvbU1hbmlwOmZ1bmN0aW9uKGEsYil7YT1lLmFwcGx5KFtdLGEpO3ZhciBjLGQsZixnLGgsaSxqPTAsbD10aGlzLmxlbmd0aCxtPXRoaXMsbz1sLTEscD1hWzBdLHE9bi5pc0Z1bmN0aW9uKHApO2lmKHF8fGw+MSYmXCJzdHJpbmdcIj09dHlwZW9mIHAmJiFrLmNoZWNrQ2xvbmUmJmZiLnRlc3QocCkpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbihjKXt2YXIgZD1tLmVxKGMpO3EmJihhWzBdPXAuY2FsbCh0aGlzLGMsZC5odG1sKCkpKSxkLmRvbU1hbmlwKGEsYil9KTtpZihsJiYoYz1uLmJ1aWxkRnJhZ21lbnQoYSx0aGlzWzBdLm93bmVyRG9jdW1lbnQsITEsdGhpcyksZD1jLmZpcnN0Q2hpbGQsMT09PWMuY2hpbGROb2Rlcy5sZW5ndGgmJihjPWQpLGQpKXtmb3IoZj1uLm1hcChwYihjLFwic2NyaXB0XCIpLGxiKSxnPWYubGVuZ3RoO2w+ajtqKyspaD1jLGohPT1vJiYoaD1uLmNsb25lKGgsITAsITApLGcmJm4ubWVyZ2UoZixwYihoLFwic2NyaXB0XCIpKSksYi5jYWxsKHRoaXNbal0saCxqKTtcbmlmKGcpZm9yKGk9ZltmLmxlbmd0aC0xXS5vd25lckRvY3VtZW50LG4ubWFwKGYsbWIpLGo9MDtnPmo7aisrKWg9ZltqXSxnYi50ZXN0KGgudHlwZXx8XCJcIikmJiFPLmFjY2VzcyhoLFwiZ2xvYmFsRXZhbFwiKSYmbi5jb250YWlucyhpLGgpJiYoaC5zcmM/bi5fZXZhbFVybCYmbi5fZXZhbFVybChoLnNyYyk6bi5nbG9iYWxFdmFsKGgudGV4dENvbnRlbnQucmVwbGFjZShpYixcIlwiKSkpfXJldHVybiB0aGlzfX0pLG4uZWFjaCh7YXBwZW5kVG86XCJhcHBlbmRcIixwcmVwZW5kVG86XCJwcmVwZW5kXCIsaW5zZXJ0QmVmb3JlOlwiYmVmb3JlXCIsaW5zZXJ0QWZ0ZXI6XCJhZnRlclwiLHJlcGxhY2VBbGw6XCJyZXBsYWNlV2l0aFwifSxmdW5jdGlvbihhLGIpe24uZm5bYV09ZnVuY3Rpb24oYSl7Zm9yKHZhciBjLGQ9W10sZT1uKGEpLGc9ZS5sZW5ndGgtMSxoPTA7Zz49aDtoKyspYz1oPT09Zz90aGlzOnRoaXMuY2xvbmUoITApLG4oZVtoXSlbYl0oYyksZi5hcHBseShkLGMuZ2V0KCkpO3JldHVybiB0aGlzLnB1c2hTdGFjayhkKX19KSxuLmZuLmRlbGF5PWZ1bmN0aW9uKGEsYil7cmV0dXJuIGE9bi5meD9uLmZ4LnNwZWVkc1thXXx8YTphLGI9Ynx8XCJmeFwiLHRoaXMucXVldWUoYixmdW5jdGlvbihiLGMpe3ZhciBkPXNldFRpbWVvdXQoYixhKTtjLnN0b3A9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoZCl9fSl9LGZ1bmN0aW9uKCl7dmFyIGE9bC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiksYj1sLmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiksYz1iLmFwcGVuZENoaWxkKGwuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKSk7YS50eXBlPVwiY2hlY2tib3hcIixrLmNoZWNrT249XCJcIiE9PWEudmFsdWUsay5vcHRTZWxlY3RlZD1jLnNlbGVjdGVkLGIuZGlzYWJsZWQ9ITAsay5vcHREaXNhYmxlZD0hYy5kaXNhYmxlZCxhPWwuY3JlYXRlRWxlbWVudChcImlucHV0XCIpLGEudmFsdWU9XCJ0XCIsYS50eXBlPVwicmFkaW9cIixrLnJhZGlvVmFsdWU9XCJ0XCI9PT1hLnZhbHVlfSgpO3ZhciByYixzYix0Yj1uLmV4cHIuYXR0ckhhbmRsZTtuLmZuLmV4dGVuZCh7YXR0cjpmdW5jdGlvbihhLGIpe3JldHVybiBNKHRoaXMsbi5hdHRyLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVBdHRyOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtuLnJlbW92ZUF0dHIodGhpcyxhKX0pfX0pLG4uZXh0ZW5kKHthdHRyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGY9YS5ub2RlVHlwZTtpZihhJiYzIT09ZiYmOCE9PWYmJjIhPT1mKXJldHVybiB0eXBlb2YgYS5nZXRBdHRyaWJ1dGU9PT1WP24ucHJvcChhLGIsYyk6KDE9PT1mJiZuLmlzWE1MRG9jKGEpfHwoYj1iLnRvTG93ZXJDYXNlKCksZD1uLmF0dHJIb29rc1tiXXx8KG4uZXhwci5tYXRjaC5ib29sLnRlc3QoYik/c2I6cmIpKSx2b2lkIDA9PT1jP2QmJlwiZ2V0XCJpbiBkJiZudWxsIT09KGU9ZC5nZXQoYSxiKSk/ZTooZT1uLmZpbmQuYXR0cihhLGIpLG51bGw9PWU/dm9pZCAwOmUpOm51bGwhPT1jP2QmJlwic2V0XCJpbiBkJiZ2b2lkIDAhPT0oZT1kLnNldChhLGMsYikpP2U6KGEuc2V0QXR0cmlidXRlKGIsYytcIlwiKSxjKTp2b2lkIG4ucmVtb3ZlQXR0cihhLGIpKX0scmVtb3ZlQXR0cjpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT0wLGY9YiYmYi5tYXRjaChIKTtpZihmJiYxPT09YS5ub2RlVHlwZSl3aGlsZShjPWZbZSsrXSlkPW4ucHJvcEZpeFtjXXx8YyxuLmV4cHIubWF0Y2guYm9vbC50ZXN0KGMpJiYoYVtkXT0hMSksYS5yZW1vdmVBdHRyaWJ1dGUoYyl9LGF0dHJIb29rczp7dHlwZTp7c2V0OmZ1bmN0aW9uKGEsYil7aWYoIWsucmFkaW9WYWx1ZSYmXCJyYWRpb1wiPT09YiYmbi5ub2RlTmFtZShhLFwiaW5wdXRcIikpe3ZhciBjPWEudmFsdWU7cmV0dXJuIGEuc2V0QXR0cmlidXRlKFwidHlwZVwiLGIpLGMmJihhLnZhbHVlPWMpLGJ9fX19fSksc2I9e3NldDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIGI9PT0hMT9uLnJlbW92ZUF0dHIoYSxjKTphLnNldEF0dHJpYnV0ZShjLGMpLGN9fSxuLmVhY2gobi5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKC9cXHcrL2cpLGZ1bmN0aW9uKGEsYil7dmFyIGM9dGJbYl18fG4uZmluZC5hdHRyO3RiW2JdPWZ1bmN0aW9uKGEsYixkKXt2YXIgZSxmO3JldHVybiBkfHwoZj10YltiXSx0YltiXT1lLGU9bnVsbCE9YyhhLGIsZCk/Yi50b0xvd2VyQ2FzZSgpOm51bGwsdGJbYl09ZiksZX19KTt2YXIgdWI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtuLmZuLmV4dGVuZCh7cHJvcDpmdW5jdGlvbihhLGIpe3JldHVybiBNKHRoaXMsbi5wcm9wLGEsYixhcmd1bWVudHMubGVuZ3RoPjEpfSxyZW1vdmVQcm9wOmZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKXtkZWxldGUgdGhpc1tuLnByb3BGaXhbYV18fGFdfSl9fSksbi5leHRlbmQoe3Byb3BGaXg6e1wiZm9yXCI6XCJodG1sRm9yXCIsXCJjbGFzc1wiOlwiY2xhc3NOYW1lXCJ9LHByb3A6ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnPWEubm9kZVR5cGU7aWYoYSYmMyE9PWcmJjghPT1nJiYyIT09ZylyZXR1cm4gZj0xIT09Z3x8IW4uaXNYTUxEb2MoYSksZiYmKGI9bi5wcm9wRml4W2JdfHxiLGU9bi5wcm9wSG9va3NbYl0pLHZvaWQgMCE9PWM/ZSYmXCJzZXRcImluIGUmJnZvaWQgMCE9PShkPWUuc2V0KGEsYyxiKSk/ZDphW2JdPWM6ZSYmXCJnZXRcImluIGUmJm51bGwhPT0oZD1lLmdldChhLGIpKT9kOmFbYl19LHByb3BIb29rczp7dGFiSW5kZXg6e2dldDpmdW5jdGlvbihhKXtyZXR1cm4gYS5oYXNBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiKXx8dWIudGVzdChhLm5vZGVOYW1lKXx8YS5ocmVmP2EudGFiSW5kZXg6LTF9fX19KSxrLm9wdFNlbGVjdGVkfHwobi5wcm9wSG9va3Muc2VsZWN0ZWQ9e2dldDpmdW5jdGlvbihhKXt2YXIgYj1hLnBhcmVudE5vZGU7cmV0dXJuIGImJmIucGFyZW50Tm9kZSYmYi5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXgsbnVsbH19KSxuLmVhY2goW1widGFiSW5kZXhcIixcInJlYWRPbmx5XCIsXCJtYXhMZW5ndGhcIixcImNlbGxTcGFjaW5nXCIsXCJjZWxsUGFkZGluZ1wiLFwicm93U3BhblwiLFwiY29sU3BhblwiLFwidXNlTWFwXCIsXCJmcmFtZUJvcmRlclwiLFwiY29udGVudEVkaXRhYmxlXCJdLGZ1bmN0aW9uKCl7bi5wcm9wRml4W3RoaXMudG9Mb3dlckNhc2UoKV09dGhpc30pO3ZhciB2Yj0vW1xcdFxcclxcblxcZl0vZztuLmZuLmV4dGVuZCh7YWRkQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9XCJzdHJpbmdcIj09dHlwZW9mIGEmJmEsaT0wLGo9dGhpcy5sZW5ndGg7aWYobi5pc0Z1bmN0aW9uKGEpKXJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oYil7bih0aGlzKS5hZGRDbGFzcyhhLmNhbGwodGhpcyxiLHRoaXMuY2xhc3NOYW1lKSl9KTtpZihoKWZvcihiPShhfHxcIlwiKS5tYXRjaChIKXx8W107aj5pO2krKylpZihjPXRoaXNbaV0sZD0xPT09Yy5ub2RlVHlwZSYmKGMuY2xhc3NOYW1lPyhcIiBcIitjLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh2YixcIiBcIik6XCIgXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPDAmJihkKz1lK1wiIFwiKTtnPW4udHJpbShkKSxjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30scmVtb3ZlQ2xhc3M6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGg9MD09PWFyZ3VtZW50cy5sZW5ndGh8fFwic3RyaW5nXCI9PXR5cGVvZiBhJiZhLGk9MCxqPXRoaXMubGVuZ3RoO2lmKG4uaXNGdW5jdGlvbihhKSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKGIpe24odGhpcykucmVtb3ZlQ2xhc3MoYS5jYWxsKHRoaXMsYix0aGlzLmNsYXNzTmFtZSkpfSk7aWYoaClmb3IoYj0oYXx8XCJcIikubWF0Y2goSCl8fFtdO2o+aTtpKyspaWYoYz10aGlzW2ldLGQ9MT09PWMubm9kZVR5cGUmJihjLmNsYXNzTmFtZT8oXCIgXCIrYy5jbGFzc05hbWUrXCIgXCIpLnJlcGxhY2UodmIsXCIgXCIpOlwiXCIpKXtmPTA7d2hpbGUoZT1iW2YrK10pd2hpbGUoZC5pbmRleE9mKFwiIFwiK2UrXCIgXCIpPj0wKWQ9ZC5yZXBsYWNlKFwiIFwiK2UrXCIgXCIsXCIgXCIpO2c9YT9uLnRyaW0oZCk6XCJcIixjLmNsYXNzTmFtZSE9PWcmJihjLmNsYXNzTmFtZT1nKX1yZXR1cm4gdGhpc30sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oYSxiKXt2YXIgYz10eXBlb2YgYTtyZXR1cm5cImJvb2xlYW5cIj09dHlwZW9mIGImJlwic3RyaW5nXCI9PT1jP2I/dGhpcy5hZGRDbGFzcyhhKTp0aGlzLnJlbW92ZUNsYXNzKGEpOnRoaXMuZWFjaChuLmlzRnVuY3Rpb24oYSk/ZnVuY3Rpb24oYyl7bih0aGlzKS50b2dnbGVDbGFzcyhhLmNhbGwodGhpcyxjLHRoaXMuY2xhc3NOYW1lLGIpLGIpfTpmdW5jdGlvbigpe2lmKFwic3RyaW5nXCI9PT1jKXt2YXIgYixkPTAsZT1uKHRoaXMpLGY9YS5tYXRjaChIKXx8W107d2hpbGUoYj1mW2QrK10pZS5oYXNDbGFzcyhiKT9lLnJlbW92ZUNsYXNzKGIpOmUuYWRkQ2xhc3MoYil9ZWxzZShjPT09Vnx8XCJib29sZWFuXCI9PT1jKSYmKHRoaXMuY2xhc3NOYW1lJiZPLnNldCh0aGlzLFwiX19jbGFzc05hbWVfX1wiLHRoaXMuY2xhc3NOYW1lKSx0aGlzLmNsYXNzTmFtZT10aGlzLmNsYXNzTmFtZXx8YT09PSExP1wiXCI6Ty5nZXQodGhpcyxcIl9fY2xhc3NOYW1lX19cIil8fFwiXCIpfSl9LGhhc0NsYXNzOmZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1cIiBcIithK1wiIFwiLGM9MCxkPXRoaXMubGVuZ3RoO2Q+YztjKyspaWYoMT09PXRoaXNbY10ubm9kZVR5cGUmJihcIiBcIit0aGlzW2NdLmNsYXNzTmFtZStcIiBcIikucmVwbGFjZSh2YixcIiBcIikuaW5kZXhPZihiKT49MClyZXR1cm4hMDtyZXR1cm4hMX19KTt2YXIgd2I9L1xcci9nO24uZm4uZXh0ZW5kKHt2YWw6ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpc1swXTt7aWYoYXJndW1lbnRzLmxlbmd0aClyZXR1cm4gZD1uLmlzRnVuY3Rpb24oYSksdGhpcy5lYWNoKGZ1bmN0aW9uKGMpe3ZhciBlOzE9PT10aGlzLm5vZGVUeXBlJiYoZT1kP2EuY2FsbCh0aGlzLGMsbih0aGlzKS52YWwoKSk6YSxudWxsPT1lP2U9XCJcIjpcIm51bWJlclwiPT10eXBlb2YgZT9lKz1cIlwiOm4uaXNBcnJheShlKSYmKGU9bi5tYXAoZSxmdW5jdGlvbihhKXtyZXR1cm4gbnVsbD09YT9cIlwiOmErXCJcIn0pKSxiPW4udmFsSG9va3NbdGhpcy50eXBlXXx8bi52YWxIb29rc1t0aGlzLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCldLGImJlwic2V0XCJpbiBiJiZ2b2lkIDAhPT1iLnNldCh0aGlzLGUsXCJ2YWx1ZVwiKXx8KHRoaXMudmFsdWU9ZSkpfSk7aWYoZSlyZXR1cm4gYj1uLnZhbEhvb2tzW2UudHlwZV18fG4udmFsSG9va3NbZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpXSxiJiZcImdldFwiaW4gYiYmdm9pZCAwIT09KGM9Yi5nZXQoZSxcInZhbHVlXCIpKT9jOihjPWUudmFsdWUsXCJzdHJpbmdcIj09dHlwZW9mIGM/Yy5yZXBsYWNlKHdiLFwiXCIpOm51bGw9PWM/XCJcIjpjKX19fSksbi5leHRlbmQoe3ZhbEhvb2tzOntvcHRpb246e2dldDpmdW5jdGlvbihhKXt2YXIgYj1uLmZpbmQuYXR0cihhLFwidmFsdWVcIik7cmV0dXJuIG51bGwhPWI/YjpuLnRyaW0obi50ZXh0KGEpKX19LHNlbGVjdDp7Z2V0OmZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjLGQ9YS5vcHRpb25zLGU9YS5zZWxlY3RlZEluZGV4LGY9XCJzZWxlY3Qtb25lXCI9PT1hLnR5cGV8fDA+ZSxnPWY/bnVsbDpbXSxoPWY/ZSsxOmQubGVuZ3RoLGk9MD5lP2g6Zj9lOjA7aD5pO2krKylpZihjPWRbaV0sISghYy5zZWxlY3RlZCYmaSE9PWV8fChrLm9wdERpc2FibGVkP2MuZGlzYWJsZWQ6bnVsbCE9PWMuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikpfHxjLnBhcmVudE5vZGUuZGlzYWJsZWQmJm4ubm9kZU5hbWUoYy5wYXJlbnROb2RlLFwib3B0Z3JvdXBcIikpKXtpZihiPW4oYykudmFsKCksZilyZXR1cm4gYjtnLnB1c2goYil9cmV0dXJuIGd9LHNldDpmdW5jdGlvbihhLGIpe3ZhciBjLGQsZT1hLm9wdGlvbnMsZj1uLm1ha2VBcnJheShiKSxnPWUubGVuZ3RoO3doaWxlKGctLSlkPWVbZ10sKGQuc2VsZWN0ZWQ9bi5pbkFycmF5KGQudmFsdWUsZik+PTApJiYoYz0hMCk7cmV0dXJuIGN8fChhLnNlbGVjdGVkSW5kZXg9LTEpLGZ9fX19KSxuLmVhY2goW1wicmFkaW9cIixcImNoZWNrYm94XCJdLGZ1bmN0aW9uKCl7bi52YWxIb29rc1t0aGlzXT17c2V0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uaXNBcnJheShiKT9hLmNoZWNrZWQ9bi5pbkFycmF5KG4oYSkudmFsKCksYik+PTA6dm9pZCAwfX0say5jaGVja09ufHwobi52YWxIb29rc1t0aGlzXS5nZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGw9PT1hLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpP1wib25cIjphLnZhbHVlfSl9KSxuLmVhY2goXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIuc3BsaXQoXCIgXCIpLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhLGMpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPjA/dGhpcy5vbihiLG51bGwsYSxjKTp0aGlzLnRyaWdnZXIoYil9fSksbi5mbi5leHRlbmQoe2hvdmVyOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMubW91c2VlbnRlcihhKS5tb3VzZWxlYXZlKGJ8fGEpfSxiaW5kOmZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gdGhpcy5vbihhLG51bGwsYixjKX0sdW5iaW5kOmZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub2ZmKGEsbnVsbCxiKX0sZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMub24oYixhLGMsZCl9LHVuZGVsZWdhdGU6ZnVuY3Rpb24oYSxiLGMpe3JldHVybiAxPT09YXJndW1lbnRzLmxlbmd0aD90aGlzLm9mZihhLFwiKipcIik6dGhpcy5vZmYoYixhfHxcIioqXCIsYyl9fSk7dmFyIHhiPW4ubm93KCkseWI9L1xcPy87bi5wYXJzZUpTT049ZnVuY3Rpb24oYSl7cmV0dXJuIEpTT04ucGFyc2UoYStcIlwiKX0sbi5wYXJzZVhNTD1mdW5jdGlvbihhKXt2YXIgYixjO2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7Yz1uZXcgRE9NUGFyc2VyLGI9Yy5wYXJzZUZyb21TdHJpbmcoYSxcInRleHQveG1sXCIpfWNhdGNoKGQpe2I9dm9pZCAwfXJldHVybighYnx8Yi5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBhcnNlcmVycm9yXCIpLmxlbmd0aCkmJm4uZXJyb3IoXCJJbnZhbGlkIFhNTDogXCIrYSksYn07dmFyIHpiLEFiLEJiPS8jLiokLyxDYj0vKFs/Jl0pXz1bXiZdKi8sRGI9L14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9nbSxFYj0vXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxGYj0vXig/OkdFVHxIRUFEKSQvLEdiPS9eXFwvXFwvLyxIYj0vXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxJYj17fSxKYj17fSxLYj1cIiovXCIuY29uY2F0KFwiKlwiKTt0cnl7QWI9bG9jYXRpb24uaHJlZn1jYXRjaChMYil7QWI9bC5jcmVhdGVFbGVtZW50KFwiYVwiKSxBYi5ocmVmPVwiXCIsQWI9QWIuaHJlZn16Yj1IYi5leGVjKEFiLnRvTG93ZXJDYXNlKCkpfHxbXTtmdW5jdGlvbiBNYihhKXtyZXR1cm4gZnVuY3Rpb24oYixjKXtcInN0cmluZ1wiIT10eXBlb2YgYiYmKGM9YixiPVwiKlwiKTt2YXIgZCxlPTAsZj1iLnRvTG93ZXJDYXNlKCkubWF0Y2goSCl8fFtdO2lmKG4uaXNGdW5jdGlvbihjKSl3aGlsZShkPWZbZSsrXSlcIitcIj09PWRbMF0/KGQ9ZC5zbGljZSgxKXx8XCIqXCIsKGFbZF09YVtkXXx8W10pLnVuc2hpZnQoYykpOihhW2RdPWFbZF18fFtdKS5wdXNoKGMpfX1mdW5jdGlvbiBOYihhLGIsYyxkKXt2YXIgZT17fSxmPWE9PT1KYjtmdW5jdGlvbiBnKGgpe3ZhciBpO3JldHVybiBlW2hdPSEwLG4uZWFjaChhW2hdfHxbXSxmdW5jdGlvbihhLGgpe3ZhciBqPWgoYixjLGQpO3JldHVyblwic3RyaW5nXCIhPXR5cGVvZiBqfHxmfHxlW2pdP2Y/IShpPWopOnZvaWQgMDooYi5kYXRhVHlwZXMudW5zaGlmdChqKSxnKGopLCExKX0pLGl9cmV0dXJuIGcoYi5kYXRhVHlwZXNbMF0pfHwhZVtcIipcIl0mJmcoXCIqXCIpfWZ1bmN0aW9uIE9iKGEsYil7dmFyIGMsZCxlPW4uYWpheFNldHRpbmdzLmZsYXRPcHRpb25zfHx7fTtmb3IoYyBpbiBiKXZvaWQgMCE9PWJbY10mJigoZVtjXT9hOmR8fChkPXt9KSlbY109YltjXSk7cmV0dXJuIGQmJm4uZXh0ZW5kKCEwLGEsZCksYX1mdW5jdGlvbiBQYihhLGIsYyl7dmFyIGQsZSxmLGcsaD1hLmNvbnRlbnRzLGk9YS5kYXRhVHlwZXM7d2hpbGUoXCIqXCI9PT1pWzBdKWkuc2hpZnQoKSx2b2lkIDA9PT1kJiYoZD1hLm1pbWVUeXBlfHxiLmdldFJlc3BvbnNlSGVhZGVyKFwiQ29udGVudC1UeXBlXCIpKTtpZihkKWZvcihlIGluIGgpaWYoaFtlXSYmaFtlXS50ZXN0KGQpKXtpLnVuc2hpZnQoZSk7YnJlYWt9aWYoaVswXWluIGMpZj1pWzBdO2Vsc2V7Zm9yKGUgaW4gYyl7aWYoIWlbMF18fGEuY29udmVydGVyc1tlK1wiIFwiK2lbMF1dKXtmPWU7YnJlYWt9Z3x8KGc9ZSl9Zj1mfHxnfXJldHVybiBmPyhmIT09aVswXSYmaS51bnNoaWZ0KGYpLGNbZl0pOnZvaWQgMH1mdW5jdGlvbiBRYihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGo9e30saz1hLmRhdGFUeXBlcy5zbGljZSgpO2lmKGtbMV0pZm9yKGcgaW4gYS5jb252ZXJ0ZXJzKWpbZy50b0xvd2VyQ2FzZSgpXT1hLmNvbnZlcnRlcnNbZ107Zj1rLnNoaWZ0KCk7d2hpbGUoZilpZihhLnJlc3BvbnNlRmllbGRzW2ZdJiYoY1thLnJlc3BvbnNlRmllbGRzW2ZdXT1iKSwhaSYmZCYmYS5kYXRhRmlsdGVyJiYoYj1hLmRhdGFGaWx0ZXIoYixhLmRhdGFUeXBlKSksaT1mLGY9ay5zaGlmdCgpKWlmKFwiKlwiPT09ZilmPWk7ZWxzZSBpZihcIipcIiE9PWkmJmkhPT1mKXtpZihnPWpbaStcIiBcIitmXXx8altcIiogXCIrZl0sIWcpZm9yKGUgaW4gailpZihoPWUuc3BsaXQoXCIgXCIpLGhbMV09PT1mJiYoZz1qW2krXCIgXCIraFswXV18fGpbXCIqIFwiK2hbMF1dKSl7Zz09PSEwP2c9altlXTpqW2VdIT09ITAmJihmPWhbMF0say51bnNoaWZ0KGhbMV0pKTticmVha31pZihnIT09ITApaWYoZyYmYVtcInRocm93c1wiXSliPWcoYik7ZWxzZSB0cnl7Yj1nKGIpfWNhdGNoKGwpe3JldHVybntzdGF0ZTpcInBhcnNlcmVycm9yXCIsZXJyb3I6Zz9sOlwiTm8gY29udmVyc2lvbiBmcm9tIFwiK2krXCIgdG8gXCIrZn19fXJldHVybntzdGF0ZTpcInN1Y2Nlc3NcIixkYXRhOmJ9fW4uZXh0ZW5kKHthY3RpdmU6MCxsYXN0TW9kaWZpZWQ6e30sZXRhZzp7fSxhamF4U2V0dGluZ3M6e3VybDpBYix0eXBlOlwiR0VUXCIsaXNMb2NhbDpFYi50ZXN0KHpiWzFdKSxnbG9iYWw6ITAscHJvY2Vzc0RhdGE6ITAsYXN5bmM6ITAsY29udGVudFR5cGU6XCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixhY2NlcHRzOntcIipcIjpLYix0ZXh0OlwidGV4dC9wbGFpblwiLGh0bWw6XCJ0ZXh0L2h0bWxcIix4bWw6XCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsanNvbjpcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwifSxjb250ZW50czp7eG1sOi94bWwvLGh0bWw6L2h0bWwvLGpzb246L2pzb24vfSxyZXNwb25zZUZpZWxkczp7eG1sOlwicmVzcG9uc2VYTUxcIix0ZXh0OlwicmVzcG9uc2VUZXh0XCIsanNvbjpcInJlc3BvbnNlSlNPTlwifSxjb252ZXJ0ZXJzOntcIiogdGV4dFwiOlN0cmluZyxcInRleHQgaHRtbFwiOiEwLFwidGV4dCBqc29uXCI6bi5wYXJzZUpTT04sXCJ0ZXh0IHhtbFwiOm4ucGFyc2VYTUx9LGZsYXRPcHRpb25zOnt1cmw6ITAsY29udGV4dDohMH19LGFqYXhTZXR1cDpmdW5jdGlvbihhLGIpe3JldHVybiBiP09iKE9iKGEsbi5hamF4U2V0dGluZ3MpLGIpOk9iKG4uYWpheFNldHRpbmdzLGEpfSxhamF4UHJlZmlsdGVyOk1iKEliKSxhamF4VHJhbnNwb3J0Ok1iKEpiKSxhamF4OmZ1bmN0aW9uKGEsYil7XCJvYmplY3RcIj09dHlwZW9mIGEmJihiPWEsYT12b2lkIDApLGI9Ynx8e307dmFyIGMsZCxlLGYsZyxoLGksaixrPW4uYWpheFNldHVwKHt9LGIpLGw9ay5jb250ZXh0fHxrLG09ay5jb250ZXh0JiYobC5ub2RlVHlwZXx8bC5qcXVlcnkpP24obCk6bi5ldmVudCxvPW4uRGVmZXJyZWQoKSxwPW4uQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikscT1rLnN0YXR1c0NvZGV8fHt9LHI9e30scz17fSx0PTAsdT1cImNhbmNlbGVkXCIsdj17cmVhZHlTdGF0ZTowLGdldFJlc3BvbnNlSGVhZGVyOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKDI9PT10KXtpZighZil7Zj17fTt3aGlsZShiPURiLmV4ZWMoZSkpZltiWzFdLnRvTG93ZXJDYXNlKCldPWJbMl19Yj1mW2EudG9Mb3dlckNhc2UoKV19cmV0dXJuIG51bGw9PWI/bnVsbDpifSxnZXRBbGxSZXNwb25zZUhlYWRlcnM6ZnVuY3Rpb24oKXtyZXR1cm4gMj09PXQ/ZTpudWxsfSxzZXRSZXF1ZXN0SGVhZGVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YS50b0xvd2VyQ2FzZSgpO3JldHVybiB0fHwoYT1zW2NdPXNbY118fGEsclthXT1iKSx0aGlzfSxvdmVycmlkZU1pbWVUeXBlOmZ1bmN0aW9uKGEpe3JldHVybiB0fHwoay5taW1lVHlwZT1hKSx0aGlzfSxzdGF0dXNDb2RlOmZ1bmN0aW9uKGEpe3ZhciBiO2lmKGEpaWYoMj50KWZvcihiIGluIGEpcVtiXT1bcVtiXSxhW2JdXTtlbHNlIHYuYWx3YXlzKGFbdi5zdGF0dXNdKTtyZXR1cm4gdGhpc30sYWJvcnQ6ZnVuY3Rpb24oYSl7dmFyIGI9YXx8dTtyZXR1cm4gYyYmYy5hYm9ydChiKSx4KDAsYiksdGhpc319O2lmKG8ucHJvbWlzZSh2KS5jb21wbGV0ZT1wLmFkZCx2LnN1Y2Nlc3M9di5kb25lLHYuZXJyb3I9di5mYWlsLGsudXJsPSgoYXx8ay51cmx8fEFiKStcIlwiKS5yZXBsYWNlKEJiLFwiXCIpLnJlcGxhY2UoR2IsemJbMV0rXCIvL1wiKSxrLnR5cGU9Yi5tZXRob2R8fGIudHlwZXx8ay5tZXRob2R8fGsudHlwZSxrLmRhdGFUeXBlcz1uLnRyaW0oay5kYXRhVHlwZXx8XCIqXCIpLnRvTG93ZXJDYXNlKCkubWF0Y2goSCl8fFtcIlwiXSxudWxsPT1rLmNyb3NzRG9tYWluJiYoaD1IYi5leGVjKGsudXJsLnRvTG93ZXJDYXNlKCkpLGsuY3Jvc3NEb21haW49ISghaHx8aFsxXT09PXpiWzFdJiZoWzJdPT09emJbMl0mJihoWzNdfHwoXCJodHRwOlwiPT09aFsxXT9cIjgwXCI6XCI0NDNcIikpPT09KHpiWzNdfHwoXCJodHRwOlwiPT09emJbMV0/XCI4MFwiOlwiNDQzXCIpKSkpLGsuZGF0YSYmay5wcm9jZXNzRGF0YSYmXCJzdHJpbmdcIiE9dHlwZW9mIGsuZGF0YSYmKGsuZGF0YT1uLnBhcmFtKGsuZGF0YSxrLnRyYWRpdGlvbmFsKSksTmIoSWIsayxiLHYpLDI9PT10KXJldHVybiB2O2k9ay5nbG9iYWwsaSYmMD09PW4uYWN0aXZlKysmJm4uZXZlbnQudHJpZ2dlcihcImFqYXhTdGFydFwiKSxrLnR5cGU9ay50eXBlLnRvVXBwZXJDYXNlKCksay5oYXNDb250ZW50PSFGYi50ZXN0KGsudHlwZSksZD1rLnVybCxrLmhhc0NvbnRlbnR8fChrLmRhdGEmJihkPWsudXJsKz0oeWIudGVzdChkKT9cIiZcIjpcIj9cIikray5kYXRhLGRlbGV0ZSBrLmRhdGEpLGsuY2FjaGU9PT0hMSYmKGsudXJsPUNiLnRlc3QoZCk/ZC5yZXBsYWNlKENiLFwiJDFfPVwiK3hiKyspOmQrKHliLnRlc3QoZCk/XCImXCI6XCI/XCIpK1wiXz1cIit4YisrKSksay5pZk1vZGlmaWVkJiYobi5sYXN0TW9kaWZpZWRbZF0mJnYuc2V0UmVxdWVzdEhlYWRlcihcIklmLU1vZGlmaWVkLVNpbmNlXCIsbi5sYXN0TW9kaWZpZWRbZF0pLG4uZXRhZ1tkXSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiSWYtTm9uZS1NYXRjaFwiLG4uZXRhZ1tkXSkpLChrLmRhdGEmJmsuaGFzQ29udGVudCYmay5jb250ZW50VHlwZSE9PSExfHxiLmNvbnRlbnRUeXBlKSYmdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsay5jb250ZW50VHlwZSksdi5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0XCIsay5kYXRhVHlwZXNbMF0mJmsuYWNjZXB0c1trLmRhdGFUeXBlc1swXV0/ay5hY2NlcHRzW2suZGF0YVR5cGVzWzBdXSsoXCIqXCIhPT1rLmRhdGFUeXBlc1swXT9cIiwgXCIrS2IrXCI7IHE9MC4wMVwiOlwiXCIpOmsuYWNjZXB0c1tcIipcIl0pO2ZvcihqIGluIGsuaGVhZGVycyl2LnNldFJlcXVlc3RIZWFkZXIoaixrLmhlYWRlcnNbal0pO2lmKGsuYmVmb3JlU2VuZCYmKGsuYmVmb3JlU2VuZC5jYWxsKGwsdixrKT09PSExfHwyPT09dCkpcmV0dXJuIHYuYWJvcnQoKTt1PVwiYWJvcnRcIjtmb3IoaiBpbntzdWNjZXNzOjEsZXJyb3I6MSxjb21wbGV0ZToxfSl2W2pdKGtbal0pO2lmKGM9TmIoSmIsayxiLHYpKXt2LnJlYWR5U3RhdGU9MSxpJiZtLnRyaWdnZXIoXCJhamF4U2VuZFwiLFt2LGtdKSxrLmFzeW5jJiZrLnRpbWVvdXQ+MCYmKGc9c2V0VGltZW91dChmdW5jdGlvbigpe3YuYWJvcnQoXCJ0aW1lb3V0XCIpfSxrLnRpbWVvdXQpKTt0cnl7dD0xLGMuc2VuZChyLHgpfWNhdGNoKHcpe2lmKCEoMj50KSl0aHJvdyB3O3goLTEsdyl9fWVsc2UgeCgtMSxcIk5vIFRyYW5zcG9ydFwiKTtmdW5jdGlvbiB4KGEsYixmLGgpe3ZhciBqLHIscyx1LHcseD1iOzIhPT10JiYodD0yLGcmJmNsZWFyVGltZW91dChnKSxjPXZvaWQgMCxlPWh8fFwiXCIsdi5yZWFkeVN0YXRlPWE+MD80OjAsaj1hPj0yMDAmJjMwMD5hfHwzMDQ9PT1hLGYmJih1PVBiKGssdixmKSksdT1RYihrLHUsdixqKSxqPyhrLmlmTW9kaWZpZWQmJih3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMYXN0LU1vZGlmaWVkXCIpLHcmJihuLmxhc3RNb2RpZmllZFtkXT13KSx3PXYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJldGFnXCIpLHcmJihuLmV0YWdbZF09dykpLDIwND09PWF8fFwiSEVBRFwiPT09ay50eXBlP3g9XCJub2NvbnRlbnRcIjozMDQ9PT1hP3g9XCJub3Rtb2RpZmllZFwiOih4PXUuc3RhdGUscj11LmRhdGEscz11LmVycm9yLGo9IXMpKToocz14LChhfHwheCkmJih4PVwiZXJyb3JcIiwwPmEmJihhPTApKSksdi5zdGF0dXM9YSx2LnN0YXR1c1RleHQ9KGJ8fHgpK1wiXCIsaj9vLnJlc29sdmVXaXRoKGwsW3IseCx2XSk6by5yZWplY3RXaXRoKGwsW3YseCxzXSksdi5zdGF0dXNDb2RlKHEpLHE9dm9pZCAwLGkmJm0udHJpZ2dlcihqP1wiYWpheFN1Y2Nlc3NcIjpcImFqYXhFcnJvclwiLFt2LGssaj9yOnNdKSxwLmZpcmVXaXRoKGwsW3YseF0pLGkmJihtLnRyaWdnZXIoXCJhamF4Q29tcGxldGVcIixbdixrXSksLS1uLmFjdGl2ZXx8bi5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIikpKX1yZXR1cm4gdn0sZ2V0SlNPTjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIG4uZ2V0KGEsYixjLFwianNvblwiKX0sZ2V0U2NyaXB0OmZ1bmN0aW9uKGEsYil7cmV0dXJuIG4uZ2V0KGEsdm9pZCAwLGIsXCJzY3JpcHRcIil9fSksbi5lYWNoKFtcImdldFwiLFwicG9zdFwiXSxmdW5jdGlvbihhLGIpe25bYl09ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIG4uaXNGdW5jdGlvbihjKSYmKGU9ZXx8ZCxkPWMsYz12b2lkIDApLG4uYWpheCh7dXJsOmEsdHlwZTpiLGRhdGFUeXBlOmUsZGF0YTpjLHN1Y2Nlc3M6ZH0pfX0pLG4uZWFjaChbXCJhamF4U3RhcnRcIixcImFqYXhTdG9wXCIsXCJhamF4Q29tcGxldGVcIixcImFqYXhFcnJvclwiLFwiYWpheFN1Y2Nlc3NcIixcImFqYXhTZW5kXCJdLGZ1bmN0aW9uKGEsYil7bi5mbltiXT1mdW5jdGlvbihhKXtyZXR1cm4gdGhpcy5vbihiLGEpfX0pLG4uX2V2YWxVcmw9ZnVuY3Rpb24oYSl7cmV0dXJuIG4uYWpheCh7dXJsOmEsdHlwZTpcIkdFVFwiLGRhdGFUeXBlOlwic2NyaXB0XCIsYXN5bmM6ITEsZ2xvYmFsOiExLFwidGhyb3dzXCI6ITB9KX07dmFyIFJiPS8lMjAvZyxTYj0vXFxbXFxdJC8sVGI9L1xccj9cXG4vZyxVYj0vXig/OnN1Ym1pdHxidXR0b258aW1hZ2V8cmVzZXR8ZmlsZSkkL2ksVmI9L14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO2Z1bmN0aW9uIFdiKGEsYixjLGQpe3ZhciBlO2lmKG4uaXNBcnJheShiKSluLmVhY2goYixmdW5jdGlvbihiLGUpe2N8fFNiLnRlc3QoYSk/ZChhLGUpOldiKGErXCJbXCIrKFwib2JqZWN0XCI9PXR5cGVvZiBlP2I6XCJcIikrXCJdXCIsZSxjLGQpfSk7ZWxzZSBpZihjfHxcIm9iamVjdFwiIT09bi50eXBlKGIpKWQoYSxiKTtlbHNlIGZvcihlIGluIGIpV2IoYStcIltcIitlK1wiXVwiLGJbZV0sYyxkKX1uLnBhcmFtPWZ1bmN0aW9uKGEsYil7dmFyIGMsZD1bXSxlPWZ1bmN0aW9uKGEsYil7Yj1uLmlzRnVuY3Rpb24oYik/YigpOm51bGw9PWI/XCJcIjpiLGRbZC5sZW5ndGhdPWVuY29kZVVSSUNvbXBvbmVudChhKStcIj1cIitlbmNvZGVVUklDb21wb25lbnQoYil9O2lmKHZvaWQgMD09PWImJihiPW4uYWpheFNldHRpbmdzJiZuLmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbCksbi5pc0FycmF5KGEpfHxhLmpxdWVyeSYmIW4uaXNQbGFpbk9iamVjdChhKSluLmVhY2goYSxmdW5jdGlvbigpe2UodGhpcy5uYW1lLHRoaXMudmFsdWUpfSk7ZWxzZSBmb3IoYyBpbiBhKVdiKGMsYVtjXSxiLGUpO3JldHVybiBkLmpvaW4oXCImXCIpLnJlcGxhY2UoUmIsXCIrXCIpfSxuLmZuLmV4dGVuZCh7c2VyaWFsaXplOmZ1bmN0aW9uKCl7cmV0dXJuIG4ucGFyYW0odGhpcy5zZXJpYWxpemVBcnJheSgpKX0sc2VyaWFsaXplQXJyYXk6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKXt2YXIgYT1uLnByb3AodGhpcyxcImVsZW1lbnRzXCIpO3JldHVybiBhP24ubWFrZUFycmF5KGEpOnRoaXN9KS5maWx0ZXIoZnVuY3Rpb24oKXt2YXIgYT10aGlzLnR5cGU7cmV0dXJuIHRoaXMubmFtZSYmIW4odGhpcykuaXMoXCI6ZGlzYWJsZWRcIikmJlZiLnRlc3QodGhpcy5ub2RlTmFtZSkmJiFVYi50ZXN0KGEpJiYodGhpcy5jaGVja2VkfHwhVS50ZXN0KGEpKX0pLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPW4odGhpcykudmFsKCk7cmV0dXJuIG51bGw9PWM/bnVsbDpuLmlzQXJyYXkoYyk/bi5tYXAoYyxmdW5jdGlvbihhKXtyZXR1cm57bmFtZTpiLm5hbWUsdmFsdWU6YS5yZXBsYWNlKFRiLFwiXFxyXFxuXCIpfX0pOntuYW1lOmIubmFtZSx2YWx1ZTpjLnJlcGxhY2UoVGIsXCJcXHJcXG5cIil9fSkuZ2V0KCl9fSksbi5hamF4U2V0dGluZ3MueGhyPWZ1bmN0aW9uKCl7dHJ5e3JldHVybiBuZXcgWE1MSHR0cFJlcXVlc3R9Y2F0Y2goYSl7fX07dmFyIFhiPTAsWWI9e30sWmI9ezA6MjAwLDEyMjM6MjA0fSwkYj1uLmFqYXhTZXR0aW5ncy54aHIoKTthLkFjdGl2ZVhPYmplY3QmJm4oYSkub24oXCJ1bmxvYWRcIixmdW5jdGlvbigpe2Zvcih2YXIgYSBpbiBZYilZYlthXSgpfSksay5jb3JzPSEhJGImJlwid2l0aENyZWRlbnRpYWxzXCJpbiAkYixrLmFqYXg9JGI9ISEkYixuLmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oYSl7dmFyIGI7cmV0dXJuIGsuY29yc3x8JGImJiFhLmNyb3NzRG9tYWluP3tzZW5kOmZ1bmN0aW9uKGMsZCl7dmFyIGUsZj1hLnhocigpLGc9KytYYjtpZihmLm9wZW4oYS50eXBlLGEudXJsLGEuYXN5bmMsYS51c2VybmFtZSxhLnBhc3N3b3JkKSxhLnhockZpZWxkcylmb3IoZSBpbiBhLnhockZpZWxkcylmW2VdPWEueGhyRmllbGRzW2VdO2EubWltZVR5cGUmJmYub3ZlcnJpZGVNaW1lVHlwZSYmZi5vdmVycmlkZU1pbWVUeXBlKGEubWltZVR5cGUpLGEuY3Jvc3NEb21haW58fGNbXCJYLVJlcXVlc3RlZC1XaXRoXCJdfHwoY1tcIlgtUmVxdWVzdGVkLVdpdGhcIl09XCJYTUxIdHRwUmVxdWVzdFwiKTtmb3IoZSBpbiBjKWYuc2V0UmVxdWVzdEhlYWRlcihlLGNbZV0pO2I9ZnVuY3Rpb24oYSl7cmV0dXJuIGZ1bmN0aW9uKCl7YiYmKGRlbGV0ZSBZYltnXSxiPWYub25sb2FkPWYub25lcnJvcj1udWxsLFwiYWJvcnRcIj09PWE/Zi5hYm9ydCgpOlwiZXJyb3JcIj09PWE/ZChmLnN0YXR1cyxmLnN0YXR1c1RleHQpOmQoWmJbZi5zdGF0dXNdfHxmLnN0YXR1cyxmLnN0YXR1c1RleHQsXCJzdHJpbmdcIj09dHlwZW9mIGYucmVzcG9uc2VUZXh0P3t0ZXh0OmYucmVzcG9uc2VUZXh0fTp2b2lkIDAsZi5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSkpfX0sZi5vbmxvYWQ9YigpLGYub25lcnJvcj1iKFwiZXJyb3JcIiksYj1ZYltnXT1iKFwiYWJvcnRcIik7dHJ5e2Yuc2VuZChhLmhhc0NvbnRlbnQmJmEuZGF0YXx8bnVsbCl9Y2F0Y2goaCl7aWYoYil0aHJvdyBofX0sYWJvcnQ6ZnVuY3Rpb24oKXtiJiZiKCl9fTp2b2lkIDB9KSxuLmFqYXhTZXR1cCh7YWNjZXB0czp7c2NyaXB0OlwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIn0sY29udGVudHM6e3NjcmlwdDovKD86amF2YXxlY21hKXNjcmlwdC99LGNvbnZlcnRlcnM6e1widGV4dCBzY3JpcHRcIjpmdW5jdGlvbihhKXtyZXR1cm4gbi5nbG9iYWxFdmFsKGEpLGF9fX0pLG4uYWpheFByZWZpbHRlcihcInNjcmlwdFwiLGZ1bmN0aW9uKGEpe3ZvaWQgMD09PWEuY2FjaGUmJihhLmNhY2hlPSExKSxhLmNyb3NzRG9tYWluJiYoYS50eXBlPVwiR0VUXCIpfSksbi5hamF4VHJhbnNwb3J0KFwic2NyaXB0XCIsZnVuY3Rpb24oYSl7aWYoYS5jcm9zc0RvbWFpbil7dmFyIGIsYztyZXR1cm57c2VuZDpmdW5jdGlvbihkLGUpe2I9bihcIjxzY3JpcHQ+XCIpLnByb3Aoe2FzeW5jOiEwLGNoYXJzZXQ6YS5zY3JpcHRDaGFyc2V0LHNyYzphLnVybH0pLm9uKFwibG9hZCBlcnJvclwiLGM9ZnVuY3Rpb24oYSl7Yi5yZW1vdmUoKSxjPW51bGwsYSYmZShcImVycm9yXCI9PT1hLnR5cGU/NDA0OjIwMCxhLnR5cGUpfSksbC5oZWFkLmFwcGVuZENoaWxkKGJbMF0pfSxhYm9ydDpmdW5jdGlvbigpe2MmJmMoKX19fX0pO3ZhciBfYj1bXSxhYz0vKD0pXFw/KD89JnwkKXxcXD9cXD8vO24uYWpheFNldHVwKHtqc29ucDpcImNhbGxiYWNrXCIsanNvbnBDYWxsYmFjazpmdW5jdGlvbigpe3ZhciBhPV9iLnBvcCgpfHxuLmV4cGFuZG8rXCJfXCIreGIrKztyZXR1cm4gdGhpc1thXT0hMCxhfX0pLG4uYWpheFByZWZpbHRlcihcImpzb24ganNvbnBcIixmdW5jdGlvbihiLGMsZCl7dmFyIGUsZixnLGg9Yi5qc29ucCE9PSExJiYoYWMudGVzdChiLnVybCk/XCJ1cmxcIjpcInN0cmluZ1wiPT10eXBlb2YgYi5kYXRhJiYhKGIuY29udGVudFR5cGV8fFwiXCIpLmluZGV4T2YoXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIikmJmFjLnRlc3QoYi5kYXRhKSYmXCJkYXRhXCIpO3JldHVybiBofHxcImpzb25wXCI9PT1iLmRhdGFUeXBlc1swXT8oZT1iLmpzb25wQ2FsbGJhY2s9bi5pc0Z1bmN0aW9uKGIuanNvbnBDYWxsYmFjayk/Yi5qc29ucENhbGxiYWNrKCk6Yi5qc29ucENhbGxiYWNrLGg/YltoXT1iW2hdLnJlcGxhY2UoYWMsXCIkMVwiK2UpOmIuanNvbnAhPT0hMSYmKGIudXJsKz0oeWIudGVzdChiLnVybCk/XCImXCI6XCI/XCIpK2IuanNvbnArXCI9XCIrZSksYi5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl09ZnVuY3Rpb24oKXtyZXR1cm4gZ3x8bi5lcnJvcihlK1wiIHdhcyBub3QgY2FsbGVkXCIpLGdbMF19LGIuZGF0YVR5cGVzWzBdPVwianNvblwiLGY9YVtlXSxhW2VdPWZ1bmN0aW9uKCl7Zz1hcmd1bWVudHN9LGQuYWx3YXlzKGZ1bmN0aW9uKCl7YVtlXT1mLGJbZV0mJihiLmpzb25wQ2FsbGJhY2s9Yy5qc29ucENhbGxiYWNrLF9iLnB1c2goZSkpLGcmJm4uaXNGdW5jdGlvbihmKSYmZihnWzBdKSxnPWY9dm9pZCAwfSksXCJzY3JpcHRcIik6dm9pZCAwfSksbi5wYXJzZUhUTUw9ZnVuY3Rpb24oYSxiLGMpe2lmKCFhfHxcInN0cmluZ1wiIT10eXBlb2YgYSlyZXR1cm4gbnVsbDtcImJvb2xlYW5cIj09dHlwZW9mIGImJihjPWIsYj0hMSksYj1ifHxsO3ZhciBkPXkuZXhlYyhhKSxlPSFjJiZbXTtyZXR1cm4gZD9bYi5jcmVhdGVFbGVtZW50KGRbMV0pXTooZD1uLmJ1aWxkRnJhZ21lbnQoW2FdLGIsZSksZSYmZS5sZW5ndGgmJm4oZSkucmVtb3ZlKCksbi5tZXJnZShbXSxkLmNoaWxkTm9kZXMpKX07dmFyIGJjPW4uZm4ubG9hZDtuLmZuLmxvYWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKFwic3RyaW5nXCIhPXR5cGVvZiBhJiZiYylyZXR1cm4gYmMuYXBwbHkodGhpcyxhcmd1bWVudHMpO3ZhciBkLGUsZixnPXRoaXMsaD1hLmluZGV4T2YoXCIgXCIpO3JldHVybiBoPj0wJiYoZD1uLnRyaW0oYS5zbGljZShoKSksYT1hLnNsaWNlKDAsaCkpLG4uaXNGdW5jdGlvbihiKT8oYz1iLGI9dm9pZCAwKTpiJiZcIm9iamVjdFwiPT10eXBlb2YgYiYmKGU9XCJQT1NUXCIpLGcubGVuZ3RoPjAmJm4uYWpheCh7dXJsOmEsdHlwZTplLGRhdGFUeXBlOlwiaHRtbFwiLGRhdGE6Yn0pLmRvbmUoZnVuY3Rpb24oYSl7Zj1hcmd1bWVudHMsZy5odG1sKGQ/bihcIjxkaXY+XCIpLmFwcGVuZChuLnBhcnNlSFRNTChhKSkuZmluZChkKTphKX0pLmNvbXBsZXRlKGMmJmZ1bmN0aW9uKGEsYil7Zy5lYWNoKGMsZnx8W2EucmVzcG9uc2VUZXh0LGIsYV0pfSksdGhpc30sXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoXCJqcXVlcnlcIixbXSxmdW5jdGlvbigpe3JldHVybiBufSk7dmFyIGNjPWEualF1ZXJ5LGRjPWEuJDtyZXR1cm4gbi5ub0NvbmZsaWN0PWZ1bmN0aW9uKGIpe3JldHVybiBhLiQ9PT1uJiYoYS4kPWRjKSxiJiZhLmpRdWVyeT09PW4mJihhLmpRdWVyeT1jYyksbn0sdHlwZW9mIGI9PT1WJiYoYS5qUXVlcnk9YS4kPW4pLG59KTtcblxuIiwiLyoqXG4gKiBDb29raWVzXG4gKlxuICogSlMgTGlicmFyeSB0byBkZWFsIHdpdGggQ29va2llc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjRcbiAqL1xuXG52YXIgQ29va2llcyA9IHtcblxuXHQvKipcblx0ICogR2V0XG5cdCAqXG5cdCAqIEdldHMgYSBjb29raWUgb3IgcmV0dXJucyB0aGUgZGVmYXVsdC4gU2V0IG5vIG5hbWUgdG8gZ2V0IGFsbFxuXHQgKlxuXHQgKiBAbmFtZSBnZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llIHRvIGZldGNoXG5cdCAqIEBwYXJhbSBzdHIgZGVmYXVsdF9cdFx0XHRUaGUgZGVmYXVsdCB2YWx1ZSB0byByZXR1cm4gaWYgbm8gY29va2llIGlzIGZvdW5kXG5cdCAqIEByZXR1cm4gc3RyfG51bGxcblx0ICovXG5cdGdldDogZnVuY3Rpb24obmFtZSwgZGVmYXVsdF8pIHtcblxuXHRcdC8vIFNldCB0aGUgZGVmYXVsdCBpZiBubyB2YWx1ZSBpcyBwYXNzZWRcblx0XHRpZih0eXBlb2YgZGVmYXVsdF8gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdGRlZmF1bHRfID0gbnVsbDtcblx0XHR9XG5cblx0XHQvLyBQYXJzZSBhbGwgY29va2llc1xuXHRcdHZhciBvQ29va2llcyA9IHt9XG5cdFx0dmFyIGxDb29raWVzID0gZG9jdW1lbnQuY29va2llLnNwbGl0KCc7Jylcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgbENvb2tpZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdGwgPSBsQ29va2llc1tpXS5zcGxpdCgnPScpO1xuXHRcdFx0b0Nvb2tpZXNbbFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQobFsxXSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBuYW1lLCByZXR1cm4gYWxsXG5cdFx0aWYodHlwZW9mIG5hbWUgPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHJldHVybiBvQ29va2llcztcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgY29va2llIGV4aXN0cyByZXR1cm4gaXQsIGVsc2UgcmV0dXJuIHRoZSBkZWZhdWx0XG5cdFx0cmV0dXJuIChuYW1lIGluIG9Db29raWVzKSA/IG9Db29raWVzW25hbWVdIDogZGVmYXVsdF87XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlbW92ZVxuXHQgKlxuXHQgKiBEZWxldGVzIGEgY29va2llXG5cdCAqXG5cdCAqIEBuYW1lIHJlbW92ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyIG5hbWVcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBjb29raWUgdG8gZGVsZXRlXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJyZW1vdmVcIjogZnVuY3Rpb24obmFtZSwgZG9tYWluLCBwYXRoKSB7XG5cdFx0dGhpcy5zZXQobmFtZSwgJycsIC0xLCBkb21haW4sIHBhdGgpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBTZXRcblx0ICpcblx0ICogU2V0cyBhIGNvb2tpZVxuXHQgKlxuXHQgKiBAbmFtZSBzZXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0ciBuYW1lXHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgY29va2llXG5cdCAqIEBwYXJhbSBzdHIgdmFsdWVcdFx0XHRcdFRoZSB2YWx1ZSB0byBzdG9yZVxuXHQgKiBAcGFyYW0gaW50IGV4cGlyZXNcdFx0XHRUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmVmb3JlIHRoZSBjb29raWUgZXhwaXJlc1xuXHQgKiBAcGFyYW0gc3RyIGRvbWFpblx0XHRcdFRoZSBvcHRpb25hbCBkb21haW4gdG8gc2V0IHRoZSBjb29raWUgb25cblx0ICogQHBhcmFtIHN0ciBwYXRoXHRcdFx0XHRUaGUgb3B0aW9uYWwgcGF0aCBvZiB0aGUgY29va2llXG5cdCAqIEByZXR1cm4gbnVsbFxuXHQgKi9cblx0c2V0OiBmdW5jdGlvbihuYW1lLCB2YWx1ZSwgZXhwaXJlcywgZG9tYWluLCBwYXRoKSB7XG5cblx0XHQvLyBHZW5lcmF0ZSB0aGUgZXhwaXJlcyB0aW1lXG5cdFx0dmFyIGQgPSBuZXcgRGF0ZSgpO1xuXHRcdGQuc2V0VGltZShkLmdldFRpbWUoKSArIChleHBpcmVzKjEwMDApKVxuXG5cdFx0Ly8gR2VuZXJhdGUgdGhlIGNvb2tpZSBzdHJpbmdcblx0XHR2YXIgcyA9IG5hbWUgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpICtcblx0XHRcdFx0JzsgZXhwaXJlcz0nICsgZC50b0dNVFN0cmluZygpICsgJzsnO1xuXHRcdGlmKGRvbWFpbikge1xuXHRcdFx0cyArPSAnIGRvbWFpbj0nICsgZG9tYWluICsgJzsnO1xuXHRcdH1cblx0XHRpZihwYXRoKSB7XG5cdFx0XHRzICs9ICcgcGF0aD0nICsgcGF0aCArICc7Jztcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvb2tpZVxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IHM7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gQ29va2llcztcbiIsIi8qKlxuICogRXZlbnRzXG4gKlxuICogRXZlbnQgbW9kZWwgZm9yIG5vbiBVSSBldmVudHNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gSW5pdCB0aGUgY2FsbGJhY2tzIG9iamVjdFxudmFyIF9jYWxsYmFja3MgPSB7fTtcblxuLyoqXG4gKiBBZGRcbiAqXG4gKiBBZGRzIGEgY2FsbGJhY2sgdG8gYW4gZXZlbnRcbiAqXG4gKiBAbmFtZSBhZGRcbiAqIEBhY2Nlc3MgcHVibGljXG4gKiBAcGFyYW0gc3RyIGV2ZW50XHRcdFx0XHRUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgdG8gYXR0YWNoIHRvIHRoZSBldmVudFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIGFkZChldmVudCwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB0aGUgZXZlbnQgZG9lc24ndCBleGlzdCB5ZXRcblx0aWYoIShldmVudCBpbiBfY2FsbGJhY2tzKSkge1xuXHRcdF9jYWxsYmFja3NbZXZlbnRdID0gW11cblx0fVxuXG5cdC8vIEFkZCB0aGUgY2FsbGJhY2sgdG8gdGhlIGxpc3Rcblx0X2NhbGxiYWNrc1tldmVudF0ucHVzaChjYWxsYmFjayk7XG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8qKlxuICogUmVtb3ZlXG4gKlxuICogUmVtb3ZlcyBhIGNhbGxiYWNrIGZyb20gYSBzcGVjaWZpYyBldmVudFxuICpcbiAqIEBuYW1lIHJlbW92ZVxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSBzdHIgZXZlbnRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byByZW1vdmUgdGhlIGNhbGxiYWNrIGZyb21cbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgZXhhY3Qgc2FtZSBjYWxsYmFjayB0aGF0IHdhcyBhZGRlZCB0byB0aGUgZXZlbnRcbiAqIEByZXR1cm5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlKGV2ZW50LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHRoZSBuYW1lIGV4aXN0cyBpbiB0aGUgb2JqZWN0XG5cdGlmKGV2ZW50IGluIF9jYWxsYmFja3MpIHtcblxuXHRcdC8vIElmIHRoZSBjYWxsYmFjayBleGlzdHMgaW4gdGhlIGxpc3Rcblx0XHR2YXIgaSA9IF9jYWxsYmFja3NbZXZlbnRdLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdGlmKGkgIT0gLTEpIHtcblx0XHRcdF9jYWxsYmFja3NbZXZlbnRdLnNwbGljZShpLDEpO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9XG5cblx0Ly8gTm90aGluZyBmb3VuZCwgcmV0dXJuIGZhbHNlXG5cdHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBUcmlnZ2VyXG4gKlxuICogVHJpZ2dlcnMgYSBzcGVjaWZpYyBldmVudCBhbmQgY2FsbHMgYWxsIGNhbGxiYWNrcyBhc3NvY2lhdGVkXG4gKlxuICogQG5hbWUgdHJpZ2dlclxuICogQGFjY2VzcyBwdWJsaWNcbiAqIEBwYXJhbSBzdHIgZXZlbnRcdFx0XHRcdFRoZSBuYW1lIG9mIHRoZSBldmVudCB0byB0cmlnZ2VyXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gdHJpZ2dlcihldmVudCkge1xuXG5cdC8vIElmIHdlIGhhdmUgY2FsbGJhY2tzIGZvciB0aGUgZXZlbnRcblx0aWYoZXZlbnQgaW4gX2NhbGxiYWNrcykge1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIGFkZGl0aW9uYWwgYXJndW1lbnRzIHRoYXQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG5cdFx0Ly9cdGNhbGxiYWNrc1xuXHRcdHZhciBhcmdzID0gW107XG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcblx0XHRcdGFyZ3MgPSBBcnJheS5hcHBseShudWxsLCBhcmd1bWVudHMpLnNsaWNlKDEpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYW55IGNhbGxiYWNrcywgY2FsbCB0aGVtIG9uZSBieSBvbmVcblx0XHRmb3IodmFyIGkgaW4gX2NhbGxiYWNrc1tldmVudF0pIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciBiID0gX2NhbGxiYWNrc1tldmVudF1baV0uYXBwbHkobnVsbCwgYXJncyk7XG5cdFx0XHR9IGNhdGNoKGVycikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKGV2ZW50ICsgJyBjYWxsYmFjayAnICsgaSArICcgdGhyZXcgZXhjZXB0aW9uOiAnICsgZXJyKTtcblx0XHRcdFx0YnJlYWtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgd2UgZ290IGZhbHNlIGJhY2ssIHN0b3AgY2FsbGluZyB0aGUgY2FsbGJhY2tzXG5cdFx0XHRpZihiID09PSBmYWxzZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBObyBjYWxsYmFja3MgYXNzY29jaXRlZCB3aXRoIHRoZSBldmVudFxuXHRlbHNlIHtcblx0XHRjb25zb2xlLmVycm9yKCdldmVudCB2YWx1ZSBcIicgKyBldmVudCArICdcIiByZXR1cm5lZCwgYW5kIG5vIGNhbGxiYWNrcyB3ZXJlIGZvdW5kIHRvIGhhbmRsZSBpdCcpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgZnVuY3Rpb25zXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJhZGRcIjogYWRkLFxuXHRcInJlbW92ZVwiOiByZW1vdmUsXG5cdFwidHJpZ2dlclwiOiB0cmlnZ2VyXG59XG4iLCIvKipcbiAqIEhhc2hcbiAqXG4gKiBKUyBMaWJyYXJ5IHRvIG1hbmFnZSBoYXNoIHZhbHVlc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTItMDlcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBUb29scyA9IHJlcXVpcmUoJy4vdG9vbHMuanMnKTtcblxuLy8gVmFsdWVzXG52YXIgX2hhc2ggPSB7fTtcblxuLy8gbmFtZSByZWdleFxudmFyIF9uYW1lUkUgPSAvXlthLXpdKyQvO1xuXG4vLyBDYWxsYmFja3NcbnZhciBfd2F0Y2hlcyA9IHt9O1xuXG4vKipcbiAqIENoZWNrIFdhdGNoZXNcbiAqXG4gKiBHZXRzIG9sZCB2YWx1ZXMgYW5kIGNvbXBhcmVzIHRoZW0gdG8gZXhpc3RpbmcgdmFsdWVzLCBpZiBhbnlvbmUgaXMgd2F0Y2hpbmdcbiAqIGFueSBuYW1lcyB0aGF0IGFyZSBjaGFuZ2VkLCB0aGV5IGFyZSBub3RpZmllZFxuICpcbiAqIEBuYW1lIF9jaGVja1dhdGNoZXNcbiAqIEBwYXJhbSBvYmplY3Qgb2xkXHRcdFx0VGhlIG9sZCB2YWx1ZXMgdG8gY2hlY2sgYWdhaW5cbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfY2hlY2tXYXRjaGVzKG9sZCkge1xuXG5cdC8vIElmIHRoZXJlIGFyZSB3YXRjaGVzXG5cdGlmKCFUb29scy5lbXB0eShfd2F0Y2hlcykpIHtcblxuXHRcdC8vIENoZWNrIGVhY2ggd2F0Y2hcblx0XHRmb3IodmFyIG5hbWUgaW4gX3dhdGNoZXMpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIHZhbHVlIGRpZG4ndCBleGlzdCBhbmQgbm93IGl0IGRvZXMsIG9yIGl0IGRpZCBleGlzdFxuXHRcdFx0Ly9cdGFuZCBub3cgaXQgZG9lc24ndCwgb3IgdGhlIHZhbHVlcyBkb24ndCBtYXRjaFxuXHRcdFx0aWYoKCEobmFtZSBpbiBvbGQpICYmIG5hbWUgaW4gX2hhc2gpIHx8XG5cdFx0XHRcdChuYW1lIGluIG9sZCAmJiAhKG5hbWUgaW4gX2hhc2gpKSB8fFxuXHRcdFx0XHRvbGRbbmFtZV0gIT0gX2hhc2hbbmFtZV0pIHtcblxuXHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggY2FsbGJhY2sgYW5kIGNhbGwgaXRcblx0XHRcdFx0Zm9yKHZhciBmIG9mIF93YXRjaGVzW25hbWVdKSB7XG5cdFx0XHRcdFx0ZihfaGFzaFtuYW1lXSB8fCBudWxsKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKipcbiAqIEhhc2ggQ2hhbmdlZFxuICpcbiAqIENhbGxlZCB3aGVuIHRoZSBsb2NhdGlvbiBoYXNoIGhhcyBiZWVuIGFsdGVyZWQsIG5vdGlmaWVzIGFueSB3YXRjaGVycyBvZlxuICogaGFzaCB2YWx1ZXMgY2hhbmdpbmdcbiAqXG4gKiBAbmFtZSBfaGFzaENoYW5nZWRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaGFzaENoYW5nZWQoKSB7XG5cblx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgaGFzaFxuXHR2YXIgb2xkID0gVG9vbHMuY2xvbmUoX2hhc2gpO1xuXG5cdC8vIFJlLXBhcnNlIHRoZSBjdXJyZW50IGxvY2F0aW9uIGhhc2hcblx0X3BhcnNlSGFzaCgpO1xuXG5cdC8vIENoZWNrIHRoZSB3YXRjaGVzXG5cdF9jaGVja1dhdGNoZXMob2xkKTtcbn1cblxuLyoqXG4gKiBQYXJzZSBIYXNoXG4gKlxuICogUGFyc2VzIHRoZSBjdXJyZW50IGxvY2F0aW9uIGhhc2ggaW50byBhbiBvYmplY3RcbiAqXG4gKiBAbmFtZSBfcGFyc2VIYXNoXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BhcnNlSGFzaCgpIHtcblxuXHQvLyBJZiB0aGVyZSdzIGFueXRoaW5nIGluIHRoZSBoYXNoXG5cdGlmKHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+IDEpIHtcblx0XHR2YXIgcmVnZXggPSAvKFtePSZdKyk9PyhbXiZdKikvZ1xuXHRcdHZhciBmaWVsZCA9IG51bGw7XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggcGFydCBmb3VuZFxuXHRcdHdoaWxlKGZpZWxkID0gcmVnZXguZXhlYyh3aW5kb3cubG9jYXRpb24uaGFzaC5zdWJzdHJpbmcoMSkpKSB7XG5cdFx0XHRfaGFzaFtmaWVsZFsxXV0gPSBmaWVsZFsyXS5yZXBsYWNlKCcrJywgJyAnKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbnZhciBIYXNoID0ge1xuXG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqXG5cdCAqIEluaXRpYWxpc2VzIHRoZSBpbnRlcm5hbCBoYXNoIGJ5IGZldGNoaW5nIGFuZCBwYXJzaW5nIHRoZSBjdXJyZW50XG5cdCAqIGxvY2F0aW9uIGhhc2hcblx0ICpcblx0ICogQG5hbWUgaW5pdFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJpbml0XCI6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gVHJhY2sgY2hhbmdlc1xuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLCBfaGFzaENoYW5nZWQpO1xuXG5cdFx0Ly8gUGFyc2UgdGhlIGN1cnJlbnQgbG9jYXRpb24gaGFzaFxuXHRcdF9wYXJzZUhhc2goKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0XG5cdCAqXG5cdCAqIFJldHVybnMgYSBoYXNoIG5hbWVcblx0ICpcblx0ICogQG5hbWUgZ2V0XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cmluZyBuYW1lXHRcdFRoZSBuYW1lIHRvIGxvb2sgZm9yXG5cdCAqIEBwYXJhbSBzdHJpbmcgZGVmYXVsdF9cdFRoZSB2YWx1ZSB0byByZXR1cm4gaWYgdGhlIG5hbWUgaXNuJ3QgZm91bmRcblx0ICogQHJldHVybiBzdHJcblx0ICovXG5cdFwiZ2V0XCI6IGZ1bmN0aW9uKG5hbWUsIGRlZmF1bHRfKSB7XG5cblx0XHQvLyBJZiB0aGUgbmFtZSBpcyBpbnZhbGlkXG5cdFx0aWYoIV9uYW1lUkUudGVzdChuYW1lKSkge1xuXHRcdFx0dGhyb3cgJ0ludmFsaWQgSGFzaCBuYW1lJztcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBpcyBhIHZhbHVlIGZvciB0aGUgbmFtZVxuXHRcdGlmKHR5cGVvZiBfaGFzaFtuYW1lXSAhPSAndW5kZWZpbmVkJykge1xuXHRcdFx0cmV0dXJuIF9oYXNoW25hbWVdO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIHJldHVybiB0aGUgZGVmYXVsdFxuXHRcdGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRfO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogU2V0XG5cdCAqXG5cdCAqIFNldHMgYSBzcGVjaWZpYyBuYW1lXG5cdCAqXG5cdCAqIEBuYW1lIHNldFxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAc3RhdGljXG5cdCAqIEBwYXJhbSBzdHJ8b2JqZWN0IG5hbWVcdFRoZSBuYW1lIHRvIHNldCwgb3IgYW4gb2JqZWN0IG9mIG5hbWUvdmFsdWUgcGFpcnNcblx0ICogQHBhcmFtIHN0ciB2YWx1ZVx0XHRcdFRoZSB2YWx1ZSB0byBzZXQgdGhlIG5hbWUgdG9cblx0ICovXG5cdFwic2V0XCI6IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cblx0XHQvLyBJZiB0aGUgbmFtZSBpcyBub3QgYW4gb2JqZWN0XG5cdFx0aWYoIVRvb2xzLmlzT2JqZWN0KG5hbWUpKSB7XG5cblx0XHRcdC8vIElmIHRoZSB2YWx1ZSBpcyBub3QgZGVmaW5lZFxuXHRcdFx0aWYodHlwZW9mIHZhbHVlID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdHZhbHVlID0gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSmF2YVNjcmlwdCBpcyBkdW1iIGFuZCB0aGlua3Mge25hbWU6IHZhbHVlfSBpcyB0aGUgc2FtZSBhc1xuXHRcdFx0Ly9cdHtcIm5hbWVcIjogdmFsdWV9XG5cdFx0XHR2YXIgdGVtcCA9IG5hbWU7XG5cdFx0XHRuYW1lID0ge307XG5cdFx0XHRuYW1lW3RlbXBdID0gdmFsdWU7XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhlIG9sZCBoYXNoXG5cdFx0dmFyIG9sZCA9IFRvb2xzLmNsb25lKF9oYXNoKTtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBuYW1lXG5cdFx0Zm9yKHZhciBuIGluIG5hbWUpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIG5hbWUgaXMgaW52YWxpZFxuXHRcdFx0aWYoIV9uYW1lUkUudGVzdChuKSkge1xuXHRcdFx0XHR0aHJvdyAnSW52YWxpZCBIYXNoIG5hbWU6ICcgKyBuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgbnVsbCwgZGVsZXRlIHRoZSBuYW1lXG5cdFx0XHRpZihuYW1lW25dID09IG51bGwpIHtcblx0XHRcdFx0ZGVsZXRlIF9oYXNoW25dO1xuXHRcdFx0fVxuXHRcdFx0Ly8gRWxzZSwgc2V0IHRoZSBuZXcgdmFsdWVcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRfaGFzaFtuXSA9IG5hbWVbbl07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2hlY2sgYW55b25lIHdhdGNoaW5nIHRoaXMgdmFsdWVcblx0XHRfY2hlY2tXYXRjaGVzKG9sZCk7XG5cblx0XHQvLyBJbml0IGFuIGFycmF5IHRvIHN0b3JlIHRoZSBwYXJ0c1xuXHRcdHZhciBoYXNoID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbmFtZVxuXHRcdGZvcih2YXIgayBpbiBfaGFzaCkge1xuXHRcdFx0aGFzaC5wdXNoKGsgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoX2hhc2hba10pKTtcblx0XHR9XG5cblx0XHQvLyBSZXNldCB0aGUgd2luZG93IGxvY2F0aW9uIGhhc2hcblx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IGhhc2guam9pbignJicpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBVbndhdGNoXG5cdCAqXG5cdCAqIFJlbW92ZXMgYSBjYWxsYmFjayBmcm9tIHRoZSB3YXRjaGVzXG5cdCAqXG5cdCAqIEBuYW1lIHVud2F0Y2hcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHN0YXRpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIG5hbWVcdFx0XHRUaGUgbmFtZSBvZiB0aGUgdmFsdWUgdG8gc3RvcCB3YXRjaGluZ1xuXHQgKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIHRvIHJlbW92ZVxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwidW53YXRjaFwiOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSB0aGUgbmFtZVxuXHRcdGlmKG5hbWUgaW4gX3dhdGNoZXMpIHtcblxuXHRcdFx0Ly8gR28gdGhyb3VnaCB0aGUgY2FsbGJhY2tzIGFzc29jaWF0ZWQgd2l0aCB0aGUgbmFtZVxuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF93YXRjaGVzW25hbWVdLmxlbmd0aDsgKytpKSB7XG5cblx0XHRcdFx0Ly8gSWYgd2UgZmluZCB0aGUgY2FsbGJhY2tcblx0XHRcdFx0aWYoX3dhdGNoZXNbbmFtZV1baV0gPT0gY2FsbGJhY2spIHtcblxuXHRcdFx0XHRcdC8vIFJlbW92ZSBpdFxuXHRcdFx0XHRcdF93YXRjaGVzW25hbWVdLnNwbGljZShpLCAxKTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIFdhdGNoXG5cdCAqXG5cdCAqIEFkZHMgYSBjYWxsYmFjayBmb3IgYSBzcGVjaWZpYyBuYW1lIHdoaWNoIHdpbGwgYmUgY2FsbGVkIGlmIHRoZSBuYW1lIGlzXG5cdCAqIGFkZGVkLCBkZWxldGVkLCBvciBjaGFuZ2VkXG5cdCAqXG5cdCAqIEBuYW1lIHdhdGNoXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBzdGF0aWNcblx0ICogQHBhcmFtIHN0cmluZyBuYW1lXHRcdFx0VGhlIG5hbWUgb2YgdGhlIHZhbHVlIHRvIHdhdGNoXG5cdCAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB2YWx1ZSBjaGFuZ2VzXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0XCJ3YXRjaFwiOiBmdW5jdGlvbihuYW1lLCBjYWxsYmFjaykge1xuXG5cdFx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIHRoZSBuYW1lXG5cdFx0aWYobmFtZSBpbiBfd2F0Y2hlcykge1xuXG5cdFx0XHQvLyBHbyB0aHJvdWdoIHRoZSBjYWxsYmFja3MgYXNzb2NpYXRlZCB3aXRoIHRoZSBuYW1lXG5cdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgX3dhdGNoZXNbbmFtZV0ubGVuZ3RoOyArK2kpIHtcblxuXHRcdFx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIGNhbGxiYWNrIHRoZXJlJ3Mgbm8gbmVlZCB0byBzdG9yZSBpdFxuXHRcdFx0XHRpZihfd2F0Y2hlc1tuYW1lXVtpXSA9PSBjYWxsYmFjaykge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgd2UgZG9uJ3QgaGF2ZSBhbnkgY2FsbGJhY2tzIGZvciB0aGUgbmFtZVxuXHRcdGVsc2Uge1xuXHRcdFx0X3dhdGNoZXNbbmFtZV0gPSBbXTtcblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIGNhbGxiYWNrIHRvIHRoZSB3YXRjaGVzXG5cdFx0X3dhdGNoZXNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0gSGFzaDtcbiIsIi8qKlxuICogTG9hZGVyXG4gKlxuICogU2hvd3MgYSBsb2FkaW5nIGdyYXBoaWMgZHVyaW5nIHJlcXVlc3RzL3N0YXJ0dXBcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTI0XG4gKi9cblxuLy8gS2VlcCB0cmFjayBvZiB0aGUgc2hvdy9oaWRlIGNhbGxzXG4vL1x0YXNzdW1lIHRoZSBsb2FkZXIgc3RhcnRlZCBvblxudmFyIF9jb3VudCA9IDE7XG5cbi8vIEdldCB0aGUgRE9NIGVsZW1lbnRcbnZhciBfZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGVyJyk7XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IHtcblxuXHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0aGlkZTogZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBEZWNyZW1lbnQgdGhlIGNvdW50XG5cdFx0X2NvdW50LS07XG5cblx0XHQvLyBJZiB0aGlzIGlzIHRoZSBsYXN0IG9uZVxuXHRcdGlmKF9jb3VudCA9PSAwKSB7XG5cdFx0XHRfZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblx0XHR9XG5cdH0sXG5cblx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gSW5jcmVtZW50IHRoZSBjb3VudFxuXHRcdF9jb3VudCsrO1xuXG5cdFx0Ly8gSWYgdGhpcyBpcyB0aGUgZmlyc3Qgb25lXG5cdFx0aWYoX2NvdW50ID09IDEpIHtcblx0XHRcdF9lbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblx0XHR9XG5cdH1cbn1cbiIsIi8qKlxuICogU2VydmljZXNcbiAqXG4gKiBIYW5kbGVzIGNvbm5lY3RpbmcgdG8gYW5kIHJldHJpZXZpbmcgZGF0YSBmcm9tIHNlcnZpY2VzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0yNFxuICovXG5cbi8vIEV4dGVybmFsIG1vZHVsZXNcbnZhciAkID0gcmVxdWlyZSgnLi4vM3JkL2pxdWVyeS5hamF4LmpzJyk7XG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIENvb2tpZXMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2Nvb2tpZXMuanMnKTtcblxuLy8gU2VydmljZXMgZG9tYWluXG52YXIgX2RvbWFpbiA9ICcnO1xuXG4vLyBEZWZhdWx0IGVycm9yIGZ1bmN0aW9uXG52YXIgX2Vycm9yID0gZnVuY3Rpb24oKSB7fVxuXG4vKipcbiAqIENsZWFyXG4gKlxuICogQ2xlYXJzIHRoZSBzZXNzaW9uIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgY29va2llc1xuICpcbiAqIEBuYW1lIF9jbGVhclxuICogYWNjZXNzIHByaXZhdGVcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfY2xlYXIoKSB7XG5cblx0Ly8gRGVsZXRlIGZyb20gbG9jYWxTdG9yYWdlXG5cdGRlbGV0ZSBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ107XG5cblx0Ly8gRGVsZXRlIHRoZSBjb29raWVcblx0Q29va2llcy5yZW1vdmUoJ19zZXNzaW9uJywgJy4nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLCAnLycpO1xufVxuXG4vKipcbiAqIFJlcXVlc3RcbiAqXG4gKiBIYW5kbGVzIGFjdHVhbCByZXF1ZXN0c1xuICpcbiAqIEBuYW1lIHJlcXVlc3RcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHN0cmluZyBtZXRob2RcdFx0XHRUaGUgbWV0aG9kIHVzZWQgdG8gc2VuZCB0aGUgcmVxdWVzdFxuICogQHBhcmFtIHN0cmluZyB1cmxcdFx0XHRUaGUgZnVsbCBVUkwgdG8gdGhlIHNlcnZpY2Uvbm91blxuICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuICogQHBhcmFtIHN0cmluZyBhdXRoXHRcdFx0T3B0aW9uYWwgQXV0aG9yaXphdGlvbiB0b2tlblxuICogQHJldHVybiB4aHJcbiAqL1xuZnVuY3Rpb24gX3JlcXVlc3QobWV0aG9kLCB1cmwsIGRhdGEpIHtcblxuXHQvLyBHZW5lcmF0ZSB0aGUgYWpheCBjb25maWdcblx0dmFyIG9Db25maWcgPSB7XG5cdFx0XCJiZWZvcmVTZW5kXCI6IGZ1bmN0aW9uKHhociwgc2V0dGluZ3MpIHtcblx0XHRcdHhoci5fdXJsID0gdXJsO1xuXG5cdFx0XHQvLyBJZiB3ZSBoYXZlIGEgc2Vzc2lvblxuXHRcdFx0aWYoJ19zZXNzaW9uJyBpbiBsb2NhbFN0b3JhZ2UpIHtcblx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJjb250ZW50VHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9dXRmLThcIixcblx0XHRcImVycm9yXCI6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuXG5cdFx0XHQvLyBJZiB3ZSBnb3QgYW4gQXV0aG9yaXphdGlvbiBlcnJvclxuXHRcdFx0aWYoeGhyLnN0YXR1cyA9PSA0MDEpIHtcblxuXHRcdFx0XHQvLyBDbGVhciB0aGUgY3VycmVudCB0b2tlblxuXHRcdFx0XHRfY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHV0IHRoZSBlcnJvciBpbiB0aGUgY29uc29sZVxuXHRcdFx0Y29uc29sZS5lcnJvcihtZXRob2QgKyAnICcgKyB4aHIuX3VybCArICcgcmV0dXJuZWQ6ICcgKyBlcnJvcik7XG5cblx0XHRcdC8vIFJldHVybiB0aGUgeGhyIHRvIHRoZSBlcnJvciBjYWxsYmFja1xuXHRcdFx0X2Vycm9yKHhocik7XG5cdFx0fSxcblx0XHRcIm1ldGhvZFwiOiBtZXRob2QsXG5cdFx0XCJ1cmxcIjogdXJsXG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZ2V0IHJlcXVlc3Rcblx0aWYobWV0aG9kID09ICdnZXQnKSB7XG5cdFx0aWYodHlwZW9mIGRhdGEgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRvQ29uZmlnWydkYXRhJ10gPSBcImQ9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXHRcdH1cblx0fVxuXHQvLyBFbHNlIGl0J3MgYW55IG90aGVyIG1ldGhvZFxuXHRlbHNlIHtcblx0XHRvQ29uZmlnLmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblx0fVxuXG5cdC8vIE1ha2UgdGhlIHJlcXVlc3QgYW5kIHJldHVybiB0aGUgeGhyXG5cdHJldHVybiAkLmFqYXgob0NvbmZpZyk7XG59XG5cbi8qKlxuICogU3RvcmVcbiAqXG4gKiBTdG9yZXMgdGhlIHNlc3Npb24gdG9rZW4gaW4gbG9jYWwgc3RvcmFnZSBhbmQgY29va2llc1xuICpcbiAqIEBuYW1lIF9zdG9yZVxuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gc3RyaW5nIHRva2VuXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3N0b3JlKHRva2VuKSB7XG5cblx0Ly8gU2V0IHRoZSBzZXNzaW9uIGluIGxvY2FsU3RvcmFnZVxuXHRsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10gPSB0b2tlblxuXG5cdC8vIFNldCB0aGUgc2Vzc2lvbiBpbiBhIGNvb2tpZVxuXHRDb29raWVzLnNldCgnX3Nlc3Npb24nLCB0b2tlbiwgODY0MDAsICcuJyArIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSwgJy8nKTtcbn1cblxuLyoqXG4gKiBTdWNjZXNzXG4gKlxuICogSGFuZGxlcyBzdWNjZXNzIGZyb20geGhyXG4gKlxuICogQG5hbWUgX3N1Y2Nlc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIHN0cmluZyByZXNcdFx0XHRUaGUgcmVzdWx0IGZyb20gdGhlIHNlcnZlclxuICogQHBhcmFtIHN0cmluZyBzdGF0dXNcdFx0XHRUaGUgc3RhdHVzIG9mIHRoZSByZXF1ZXN0XG4gKiBAcGFyYW0geGhyIHhoclx0XHRcdFx0VGhlIHJlcXVlc3Qgb2JqZWN0XG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3N1Y2Nlc3MocmVzLCBzdGF0dXMsIHhocikge1xuXG5cdC8vIElmIHRoZSByZXN1bHQgaXMgYSBzdHJpbmdcblx0aWYodHlwZW9mIHJlcyA9PSAnc3RyaW5nJykge1xuXG5cdFx0Ly8gVHJ5IHRvIGNvbnZlciBpdCB0byBKU09OXG5cdFx0dHJ5IHtcblx0XHRcdHJlc1x0PSBKU09OLnBhcnNlKHJlcyk7XG5cdFx0fSBjYXRjaChlcnIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobWV0aG9kICsgJyAnICsgeGhyLl91cmwgKyAnIHJldHVybmVkIGludmFsaWQgSlNPTjogJyArIGVycik7XG5cdFx0XHRyZXMgPSB7XCJlcnJvclwiOntcImNvZGVcIjowLFwibXNnXCI6ZXJyfX07XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogU2VydmljZXNcbiAqL1xudmFyIFNlcnZpY2VzID0ge1xuXG5cdC8qKlxuXHQgKiBJbml0XG5cdCAqXG5cdCAqIEluaXRpYWxpc2VzIHRoZSBTZXJ2aWNlcyBtb2R1bGVzXG5cdCAqXG5cdCAqIEBuYW1lIGluaXRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzdWJkb21haW5cdFx0VGhlIHN1Yi1kb21haW4gc2VydmljZXMgY2FuIGJlIHJlYWNoZWQgdGhyb3VnaFxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdFwiaW5pdFwiOiBmdW5jdGlvbihzdWJkb21haW4sIGVycm9yKSB7XG5cblx0XHQvLyBTdG9yZSB0aGUgZnVsbCBkb21haW4gbmFtZSBmb3Igc2VydmljZSBjYWxsc1xuXHRcdF9kb21haW4gPSAnLy8nICsgc3ViZG9tYWluICtcblx0XHRcdFx0XHQnLicgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgK1xuXHRcdFx0XHRcdCcvJztcblxuXHRcdC8vIERvIHdlIGhhdmUgYSBzZXNzaW9uIGluIHN0b3JhZ2Vcblx0XHRpZignX3Nlc3Npb24nIGluIGxvY2FsU3RvcmFnZSAmJiBsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pIHtcblx0XHRcdHRoaXMuc2Vzc2lvbihsb2NhbFN0b3JhZ2VbJ19zZXNzaW9uJ10pXG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSBkbyB3ZSBoYXZlIG9uZSBpbiBhIGNvb2tpZVxuXHRcdGVsc2Uge1xuXHRcdFx0dmFyIGNvb2tpZSA9IENvb2tpZXMuZ2V0KCdfc2Vzc2lvbicpO1xuXHRcdFx0aWYoY29va2llKSB7XG5cdFx0XHRcdHRoaXMuc2Vzc2lvbihjb29raWUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIElmIGFuIGVycm9yIHdhcyBwYXNzZWRcblx0XHRpZih0eXBlb2YgZXJyb3IgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRfZXJyb3IgPSBlcnJvcjtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIENyZWF0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgY3JlYXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgY3JlYXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJjcmVhdGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgncG9zdCcsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIERlbGV0ZVxuXHQgKlxuXHQgKiBDYWxscyB0aGUgZGVsZXRlIGFjdGlvbiBvbiBhIHNwZWNpZmljIHNlcnZpY2Ugbm91bmVcblx0ICpcblx0ICogQG5hbWUgZGVsZXRlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBzdHJpbmcgc2VydmljZVx0XHRUaGUgbmFtZSBvZiB0aGUgc2VydmljZSB0byBjYWxsXG5cdCAqIEBwYXJhbSBzdHJpbmcgbm91blx0XHRcdFRoZSBub3VuIHRvIGNhbGwgb24gdGhlIHNlcnZpY2Vcblx0ICogQHBhcmFtIG9iamVjdCBkYXRhXHRcdFx0VGhlIGRhdGEgdG8gc2VuZCB0byB0aGUgc2VydmljZVxuXHQgKiBAcmV0dXJuIHhoclxuXHQgKi9cblx0XCJkZWxldGVcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgnZGVsZXRlJywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogUmVhZFxuXHQgKlxuXHQgKiBDYWxscyB0aGUgcmVhZCBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIHJlYWRcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRvIGNhbGxcblx0ICogQHBhcmFtIHN0cmluZyBub3VuXHRcdFx0VGhlIG5vdW4gdG8gY2FsbCBvbiB0aGUgc2VydmljZVxuXHQgKiBAcGFyYW0gb2JqZWN0IGRhdGFcdFx0XHRUaGUgZGF0YSB0byBzZW5kIHRvIHRoZSBzZXJ2aWNlXG5cdCAqIEByZXR1cm4geGhyXG5cdCAqL1xuXHRcInJlYWRcIjogZnVuY3Rpb24oc2VydmljZSwgbm91biwgZGF0YSkge1xuXHRcdHJldHVybiBfcmVxdWVzdCgnZ2V0JywgX2RvbWFpbiArIHNlcnZpY2UgKyAnLycgKyBub3VuLCBkYXRhKTtcblx0fSxcblxuXHQvKipcblx0ICogU2Vzc2lvblxuXHQgKlxuXHQgKiBTZXQgb3IgZ2V0IHRoZSBzZXNzaW9uIHRva2VuXG5cdCAqXG5cdCAqIEBuYW1lIHNlc3Npb25cblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIHN0cmluZyB0b2tlblx0XHRcdFRoZSB0b2tlbiB0byBzdG9yZVxuXHQgKiBAcmV0dXJuIHZvaWR8c3RyXG5cdCAqL1xuXHRcInNlc3Npb25cIjogZnVuY3Rpb24odG9rZW4pIHtcblxuXHRcdC8vIElmIHdlIGFyZSBzZXR0aW5nIHRoZSBzZXNzaW9uXG5cdFx0aWYodHlwZW9mIHRva2VuICE9PSAndW5kZWZpbmVkJykge1xuXG5cdFx0XHQvLyBJZiBudWxsIHdhcyBwYXNzZWQsIGRlbGV0ZSB0aGUgc2Vzc2lvblxuXHRcdFx0aWYodG9rZW4gPT0gbnVsbCkge1xuXHRcdFx0XHRfY2xlYXIoKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSwgc2V0IHRoZSBzZXNzaW9uXG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0X3N0b3JlKHRva2VuKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIGFyZSByZXR1cm5pbmcgdGhlIHNlc3Npb25cblx0XHRlbHNlIHtcblx0XHRcdHJldHVybiAoJ19zZXNzaW9uJyBpbiBsb2NhbFN0b3JhZ2UpID9cblx0XHRcdFx0bG9jYWxTdG9yYWdlWydfc2Vzc2lvbiddIDpcblx0XHRcdFx0Jyc7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBVcGRhdGVcblx0ICpcblx0ICogQ2FsbHMgdGhlIHVwZGF0ZSBhY3Rpb24gb24gYSBzcGVjaWZpYyBzZXJ2aWNlIG5vdW5lXG5cdCAqXG5cdCAqIEBuYW1lIHVwZGF0ZVxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdG8gY2FsbFxuXHQgKiBAcGFyYW0gc3RyaW5nIG5vdW5cdFx0XHRUaGUgbm91biB0byBjYWxsIG9uIHRoZSBzZXJ2aWNlXG5cdCAqIEBwYXJhbSBvYmplY3QgZGF0YVx0XHRcdFRoZSBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZpY2Vcblx0ICogQHJldHVybiB4aHJcblx0ICovXG5cdFwidXBkYXRlXCI6IGZ1bmN0aW9uKHNlcnZpY2UsIG5vdW4sIGRhdGEpIHtcblx0XHRyZXR1cm4gX3JlcXVlc3QoJ3B1dCcsIF9kb21haW4gKyBzZXJ2aWNlICsgJy8nICsgbm91biwgZGF0YSk7XG5cdH1cbn07XG5cbi8vIEV4cG9ydCB0aGUgbW9kdWxlXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2VzO1xuIiwiLyoqXG4gKiBUb29sc1xuICpcbiAqIFVzZWZ1bCBmdW5jdGlvbnMgdGhhdCBiZWxvbmcgdG8gYW55IHNwZWNpZmljIG1vZHVsZVxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTEtMjVcbiAqL1xuXG4vKipcbiAqIFRvb2xzXG4gKi9cbnZhciBUb29scyA9IHtcblxuXHQvKipcblx0ICogQ2xvbmVcblx0ICpcblx0ICogRGVlcCBjbG9uZSBhbnkgdHlwZSBvZiBvYmplY3QsIHJldHVybmluZyBhIG5ldyBvbmVcblx0ICpcblx0ICogQG5hbWUgY2xvbmVcblx0ICogQHBhcmFtIG1peGVkIG9cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byBjbG9uZVxuXHQgKiBAcmV0dXJuIG1peGVkXG5cdCAqL1xuXHRjbG9uZTogZnVuY3Rpb24obykge1xuXHRcdC8vIE5ldyB2YXJcblx0XHR2YXIgbiA9IG51bGw7XG5cblx0XHQvLyBJZiBpdCdzIGFuIGFycmF5XG5cdFx0aWYoQXJyYXkuaXNBcnJheSgpKSB7XG5cdFx0XHRuID0gW107XG5cdFx0XHRmb3IodmFyIGkgaW4gbykge1xuXHRcdFx0XHRuLnB1c2goVG9vbHMuY2xvbmUob1trXSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgaWYgdGhlIHZhbHVlIGlzIGFuIG9iamVjdFxuXHRcdGVsc2UgaWYoVG9vbHMuaXNPYmplY3QobykpIHtcblx0XHRcdG4gPSB7fVxuXHRcdFx0Zm9yKHZhciBrIGluIG8pIHtcblx0XHRcdFx0bltrXSA9IFRvb2xzLmNsb25lKG9ba10pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGNvcHkgYXMgaXNcblx0XHRlbHNlIHtcblx0XHRcdG4gPSBvO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgbmV3IHZhclxuXHRcdHJldHVybiBuO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb21wYXJlXG5cdCAqXG5cdCAqIENvbXBhcmVzIHR3byB2YWx1ZXMgb2YgYW55IHR5cGUgdG8gc2VlIGlmIHRoZXkgY29udGFpbiB0aGUgc2FtZVxuXHQgKiBkYXRhIG9yIG5vdFxuXHQgKlxuXHQgKiBAbmFtZSBjb21wYXJlXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCB2MVx0XHRcdFx0VGhlIGZpcnN0IHZhbHVlXG5cdCAqIEBwYXJhbSBtaXhlZCB2Mlx0XHRcdFx0VGhlIHNlY29uZCB2YWx1ZVxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGNvbXBhcmUodjEsIHYyKSB7XG5cblx0XHQvLyBJZiB0aGV5J3JlIGJvdGggYXJyYXlzXG5cdFx0aWYoQXJyYXkuaXNBcnJheSh2MSkgJiYgQXJyYXkuaXNBcnJheSh2MikpIHtcblxuXHRcdFx0Ly8gSWYgdGhleSBkb24ndCBoYXZlIHRoZSBzYW1lIGxlbmd0aFxuXHRcdFx0aWYodjEubGVuZ3RoICE9IHYyLmxlbmd0aCkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBhcmUgdGhlIHZhbHVlc1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IHYxLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGlmKCFUb29scy5jb21wYXJlKHYxW2ldLCB2MltpXSkpIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIHRoZXkncmUgYm90aCBvYmplY3RzXG5cdFx0ZWxzZSBpZihUb29scy5pc09iamVjdCh2MSkgJiYgVG9vbHMuaXNPYmplY3QodjIpKSB7XG5cblx0XHRcdC8vIElmIHRoZXkgZG9uJ3QgaGF2ZSB0aGUgc2FtZSBrZXlzXG5cdFx0XHRpZighVG9vbHMuY29tcGFyZShPYmplY3Qua2V5cyh2MSkuc29ydCgpLCBPYmplY3Qua2V5cyh2Mikuc29ydCgpKSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBhcmUgZWFjaCBrZXlcblx0XHRcdGZvcih2YXIgayBpbiB2MSkge1xuXHRcdFx0XHRpZighVG9vbHMuY29tcGFyZSh2MVtrXSwgdjJba10pKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwgY29tcGFyZSBhcyBpc1xuXHRcdGVsc2Uge1xuXHRcdFx0aWYodjEgIT09IHYyKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gZXF1YWxcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHQvKipcblx0ICogRW1wdHlcblx0ICpcblx0ICogUmV0dXJucyB0cnVlIGlmIHRoZSB2YWx1ZSB0eXBlIGlzIGVtcHR5XG5cdCAqXG5cdCAqIEBuYW1lIGVtcHR5XG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFsdWUgdG8gY2hlY2ssIGNhbiBiZSBvYmplY3QsIGFycmF5LCBzdHJpbmcsIGV0Y1xuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGVtcHR5OiBmdW5jdGlvbihtKSB7XG5cblx0XHQvLyBJZiBpdCdzIGFuIG9iamVjdFxuXHRcdGlmKFRvb2xzLmlzT2JqZWN0KG0pKSB7XG5cdFx0XHRmb3IodmFyIHAgaW4gbSkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIGl0J3MgYW4gYXJyYXkgb3IgYSBzdHJpbmdcblx0XHRlbHNlIGlmKEFycmF5LmlzQXJyYXkobSkgfHwgdHlwZW9mIG0gPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiBtLmxlbmd0aCA+IDAgPyB0cnVlIDogZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZVxuXHRcdGVsc2Uge1xuXG5cdFx0XHQvLyBJZiBpdCdzIG51bGwgb3IgdW5kZWZpbmVkXG5cdFx0XHRpZih0eXBlb2YgbSA9PSAndW5kZWZpbmVkJyB8fCBtID09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UgcmV0dXJuIGZhbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBJcyBEZWNpbWFsXG5cdCAqXG5cdCAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmFyaWFibGUgaXMgYSBudW1iZXJcblx0ICpcblx0ICogQG5hbWUgaXNEZWNpbWFsXG5cdCAqIEBhY2Nlc3MgcHVibGljXG5cdCAqIEBwYXJhbSBtaXhlZCBtXHRcdFx0XHRUaGUgdmFyaWFibGUgdG8gdGVzdFxuXHQgKiBAcmV0dXJuIGJvb2xcblx0ICovXG5cdGlzRGVjaW1hbDogZnVuY3Rpb24obSkge1xuXHRcdHJldHVybiB0eXBlb2YgbSA9PSAnbnVtYmVyJztcblx0fSxcblxuXHQvKipcblx0ICogSXMgSW50ZWdlclxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgdHJ1ZSBpbnRlZ2VyXG5cdCAqXG5cdCAqIEBuYW1lIGlzSW50ZWdlclxuXHQgKiBAYWNjZXNzIHB1YmxpY1xuXHQgKiBAcGFyYW0gbWl4ZWQgbVx0XHRcdFx0VGhlIHZhcmlhYmxlIHRvIHRlc3Rcblx0ICogQHJldHVybiBib29sXG5cdCAqL1xuXHRpc0ludGVnZXI6IGZ1bmN0aW9uKG0pIHtcblx0XHRyZXR1cm4gbSA9PT0gK20gJiYgbSA9PT0gKG18MCk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIElzIE9iamVjdFxuXHQgKlxuXHQgKiBSZXR1cm5zIHRydWUgaWYgdGhlIHZhcmlhYmxlIGlzIGEgdHJ1ZSBvYmplY3Rcblx0ICpcblx0ICogQG5hbWUgaXNPYmplY3Rcblx0ICogQGFjY2VzcyBwdWJsaWNcblx0ICogQHBhcmFtIG1peGVkIG1cdFx0XHRcdFRoZSB2YXJpYWJsZSB0byB0ZXN0XG5cdCAqIEByZXR1cm4gYm9vbFxuXHQgKi9cblx0aXNPYmplY3Q6IGZ1bmN0aW9uKG0pIHtcblx0XHRpZihtID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYodHlwZW9mIG0gIT0gJ29iamVjdCcpIHJldHVybiBmYWxzZTtcblx0XHRpZihBcnJheS5pc0FycmF5KG0pKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIE9iamVjdCBNYXBcblx0ICpcblx0ICogV29ya3MgbGlrZSBtYXAgZm9yIGFycmF5cywgYnV0IGl0ZXJhdGVzIG92ZXIgYW4gb2JqZWN0XG5cdCAqXG5cdCAqIEBuYW1lIG9tYXBcblx0ICogQHBhcmFtIHtvYmplY3R9IG9cdFx0XHRUaGUgb2JqZWN0IHRvIG1hcFxuXHQgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1x0VGhlIGZ1bmN0aW9uIHRvIGNhbGwgZWFjaCBpdGVyYXRpb25cblx0ICogQHJldHVybiBhcnJheVxuXHQgKi9cblx0b21hcDogZnVuY3Rpb24obywgY2FsbGJhY2spIHtcblx0XHR2YXIgcmV0ID0gW107XG5cdFx0Zm9yKHZhciBrIGluIG8pIHtcblx0XHRcdHJldC5wdXNoKGNhbGxiYWNrKG9ba10sIGspKTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvKipcblx0ICogVVVJRCB2NFxuXHQgKlxuXHQgKiBSZXR1cm5zIGEgcHN1ZWRvIHJhbmRvbSBzdHJpbmcgaW4gVVVJRCBmb3JtYXQgKE5PVCBBQ1RVQUxMWSBBIFVVSUQpXG5cdCAqXG5cdCAqIEBuYW1lIHV1aWR2NFxuXHQgKiBAcmV0dXJuIHN0clxuXHQgKi9cblx0dXVpZHY0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG5cdFx0XHQoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxuXHRcdClcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBUb29scztcbiIsIi8qKlxuICogV2Vic29ja2V0XG4gKlxuICogU2ltcGxpZmllcyB1c2luZyBhIHdlYnNvY2tldFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTctMDUtMTdcbiAqL1xuXG4vLyBFeHBvcnQgdGhlIGZ1bmN0aW9uXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVybCwgY29uZikge1xuXG5cdC8vIElmIHdlIGNhbid0IGhhbmRsZSB3ZWJzb2NrZXRzXG5cdGlmKCEoJ1dlYlNvY2tldCcgaW4gd2luZG93KSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoJ3dlYnNvY2tldDogV2ViU29ja2V0cyBub3Qgc3VwcG9ydGVkJyk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gSWYgY29uZiBpcyBub3QgZGVmaW5lZFxuXHRpZih0eXBlb2YgY29uZiA9PSAndW5kZWZpbmVkJykge1xuXHRcdGNvbmYgPSB7fVxuXHR9XG5cblx0Ly8gRWxzZSwgaWYgaXQncyBub3QgYW4gb2JqZWN0LCB3ZSBoYXZlIGEgcHJvYmxlbVxuXHRlbHNlIGlmKHR5cGVvZiBjb25mICE9ICdvYmplY3QnKSB7XG5cdFx0Y29uc29sZS5lcnJvcignd2Vic29ja2V0OiBzZWNvbmQgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QnKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvLyBDcmVhdGUgdGhlIFdlYlNvY2tldFxuXHR2YXIgb1NvY2sgPSBuZXcgV2ViU29ja2V0KHVybCk7XG5cblx0Ly8gQWRkIHRoZSBVUkwgdG8gdGhlIGluc3RhbmNlXG5cdG9Tb2NrLnVybCA9IHVybDtcblxuXHQvLyBTZXQgdGhlIG9wZW4gY2FsbGJhY2tcblx0b1NvY2sub25vcGVuID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJZiBhbiBvcGVuIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdvcGVuJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydvcGVuJ10ob1NvY2spO1xuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGp1c3QgbG9nIHRoZSBldmVudFxuXHRcdGVsc2Uge1xuXHRcdFx0Y29uc29sZS5sb2coJ3dlYnNvY2tldDogb3BlbmVkJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBtZXNzYWdlIGNhbGxiYWNrXG5cdG9Tb2NrLm9ubWVzc2FnZVx0PSBmdW5jdGlvbihldikge1xuXG5cdFx0Ly8gSWYgYSBtZXNzYWdlIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdtZXNzYWdlJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydtZXNzYWdlJ10ob1NvY2ssIGV2KTtcblx0XHR9XG5cblx0XHQvLyBFbHNlLCBqdXN0IGxvZyB0aGUgZXZlbnRcblx0XHRlbHNlIHtcblx0XHRcdGNvbnNvbGUubG9nKCd3ZWJzb2NrZXQ6IG1lc3NhZ2UgcmVjZWl2ZWQsIFwiJyArIGV2LmRhdGEgKyAnXCInKTtcblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGVycm9yIGNhbGxiYWNrXG5cdG9Tb2NrLm9uZXJyb3IgPSBmdW5jdGlvbihldikge1xuXG5cdFx0Ly8gSWYgYW4gZXJyb3IgY2FsbGJhY2sgaXMgc2V0XG5cdFx0aWYoJ2Vycm9yJyBpbiBjb25mKSB7XG5cdFx0XHRjb25mWydlcnJvciddKG9Tb2NrLCBldik7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBlcnJvciwgXCInICsgSlNPTi5zdHJpbmdpZnkoZXYpICsgJ1wiJyk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBjbG9zZSBjYWxsYmFja1xuXHRvU29jay5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XG5cblx0XHQvLyBJZiBhIGNsb3NlIGNhbGxiYWNrIGlzIHNldFxuXHRcdGlmKCdjbG9zZScgaW4gY29uZikge1xuXHRcdFx0Y29uZlsnY2xvc2UnXShvU29jayk7XG5cdFx0fVxuXG5cdFx0Ly8gRWxzZSwganVzdCBsb2cgdGhlIGV2ZW50XG5cdFx0ZWxzZSB7XG5cdFx0XHRjb25zb2xlLmxvZygnd2Vic29ja2V0OiBjbG9zZWQnKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHNvY2tldFxuXHRyZXR1cm4gb1NvY2s7XG59XG4iLCIvLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIHNwZWNpZmljXG52YXIgUmVxdWVzdHMgPSByZXF1aXJlKCcuL3JlcXVlc3RzLmpzJyk7XG5cbi8vIENvbXBvbmVudHNcbnZhciBTaXRlID0gcmVxdWlyZSgnLi9yZWFjdC9zaXRlLmpzeCcpO1xuXG4oZnVuY3Rpb24oKSB7XG5cblx0Ly8gUmVuZGVyIHRoZSBMb2dpbkNvbXBvbmVudFxuXHRSZWFjdERPTS5yZW5kZXIoXG5cdFx0UmVhY3QuY3JlYXRlRWxlbWVudChTaXRlLCB7fSksXG5cdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlYWN0Jylcblx0KTtcblxuXHQvLyBJbml0IHRoZSByZXF1ZXN0c1xuXHRSZXF1ZXN0cy5pbml0KCk7XG5cblx0Ly8gSW5pdCB0aGUgc2VydmljZXNcblx0U2VydmljZXMuaW5pdChcInNlcnZpY2VzXCIsIGZ1bmN0aW9uKHhocikge1xuXG5cdFx0Ly8gSWYgd2UgZ290IGEgNDAxLCBsZXQgZXZlcnlvbmUga25vdyB3ZSBzaWduZWQgb3V0XG5cdFx0aWYoeGhyLnN0YXR1cyA9PSA0MDEpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWdub3V0Jyk7XG5cdFx0fVxuXHR9KTtcblxuXHQvLyBJZiB3ZSBoYXZlIGEgc2Vzc2lvbiwgZmV0Y2ggdGhlIHRocm93ZXJcblx0aWYoU2VydmljZXMuc2Vzc2lvbigpKSB7XG5cdFx0TG9hZGVyLnNob3coKTtcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ3Nlc3Npb24nLCB7fSkuZG9uZShyZXMgPT4ge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicsIHJlcy5kYXRhKTtcblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRMb2FkZXIuaGlkZSgpO1xuXG5cdC8vIE1ha2UgRXZlbnRzIGF2YWlsYWJsZSBmcm9tIGNvbnNvbGVcblx0d2luZG93LkV2ZW50cyA9IEV2ZW50cztcbn0pKCk7XG5cbi8vIEV4cG9ydFxubW9kdWxlLmV4cG9ydHMgPSBudWxsO1xuIiwiLyoqXG4gKiBGb3JtcyBNb2R1bGVcbiAqXG4gKiBDbGFzc2VzIGFuZCBmdW5jdGlvbnMgdXNlZCBieSBhbGwgZm9ybXNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgRlVFTCBmb3IgdGhlIEZJUkVcbiAqIEBjcmVhdGUgMjAxOC0xMi0wOFxuICovXG5cbi8vIEVycm9yIGNsYXNzIGRlZmluZVxudmFyIEVSUk9SX0NMQVNTID0gJ2Vycm9yJztcblxuLyoqXG4gKiBBZGQgQ2xhc3NcbiAqXG4gKiBBZGRzIHRoZSBlcnJvciBjbGFzcyBuYW1lIHRvIGFuIGVsZW1lbnRcbiAqXG4gKiBAbmFtZSBfYWRkQ2xhc3NcbiAqIEBhY2Nlc3MgcHJpdmF0ZVxuICogQHBhcmFtIEVsZW1lbnQgZWxcdFRoZSBlbGVtZW50IHRvIHJlbW92ZSB0aGUgY2xhc3MgZnJvbVxuICovXG5mdW5jdGlvbiBfYWRkQ2xhc3MoZWwpIHtcblx0aWYoIWVsLmNsYXNzTmFtZSkge1xuXHRcdGVsLmNsYXNzTmFtZSA9IEVSUk9SX0NMQVNTO1xuXHR9IGVsc2Uge1xuXHRcdGxldCBuYW1lcyA9IGVsLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuXHRcdGlmKG5hbWVzLmluZGV4T2YoRVJST1JfQ0xBU1MpID09IC0xKSB7XG5cdFx0XHRuYW1lcy5wdXNoKEVSUk9SX0NMQVNTKTtcblx0XHRcdGVsLmNsYXNzTmFtZSA9IG5hbWVzLmpvaW4oJyAnKTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4gKiBSZW1vdmUgQ2xhc3NcbiAqXG4gKiBSZW1vdmVzIHRoZSBlcnJvciBjbGFzcyBuYW1lIGZyb20gYW4gZWxlbWVudFxuICpcbiAqIEBuYW1lIF9yZW1vdmVDbGFzc1xuICogQGFjY2VzcyBwcml2YXRlXG4gKiBAcGFyYW0gRWxlbWVudCBlbFx0VGhlIGVsZW1lbnQgdG8gcmVtb3ZlIHRoZSBjbGFzcyBmcm9tXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3JlbW92ZUNsYXNzKGVsKSB7XG5cdGlmKGVsLmNsYXNzTmFtZS5pbmNsdWRlcyhFUlJPUl9DTEFTUykpIHtcblx0XHRsZXQgbmFtZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcblx0XHRuYW1lcy5zcGxpY2UobmFtZXMuaW5kZXhPZihFUlJPUl9DTEFTUyksIDEpO1xuXHRcdGVsLmNsYXNzTmFtZSA9IG5hbWVzLmpvaW4oJyAnKVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgQmFzZSBOb2RlIENvbXBvbmVudFxuY2xhc3MgX0Jhc2VOb2RlIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGVycm9ycyhlcnJvcnMpIHtcblx0XHRmb3IobGV0IGsgaW4gZXJyb3JzKSB7XG5cdFx0XHRpZih0aGlzLnJlZnNba10uZXJyb3JzKSB7XG5cdFx0XHRcdHRoaXMucmVmc1trXS5lcnJvcnMoZXJyb3JzW2tdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdF9hZGRDbGFzcyh0aGlzLnJlZnNba10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIEFycmF5IEZvcm0gQ29tcG9uZW50XG5jbGFzcyBBcnJheU5vZGUgZXh0ZW5kcyBfQmFzZU5vZGUge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cblx0XHQvLyBJbml0IHRoZSByZXR1cm5cblx0XHR2YXIgdmFsdWUgPSBbXVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBhbGwgcmVmc1xuXHRcdGZvcih2YXIgciBpbiB0aGlzLnJlZnMpIHtcblx0XHRcdGlmKHRoaXMucmVmc1tyXS50eXBlICYmIHRoaXMucmVmc1tyXS50eXBlID09ICdjaGVja2JveCcpIHtcblx0XHRcdFx0dmFsdWUucHVzaCh0aGlzLnJlZnNbcl0uY2hlY2tlZCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWx1ZS5wdXNoKHRoaXMucmVmc1tyXS52YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSB2YWx1ZXNcblx0XHRyZXR1cm4gdmFsdWU7XG5cdH1cbn1cblxuY2xhc3MgTm9kZSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHRlcnJvcnMobXNnKSB7XG5cdFx0aWYodGhpcy5yZWZzLmVsLmVycm9ycykge1xuXHRcdFx0dGhpcy5yZWZzLmVsLmVycm9ycyhtc2cpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYWRkQ2xhc3ModGhpcy5yZWZzLmVsKTtcblx0XHR9XG5cdH1cblxuXHRnZXQgdmFsdWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMucmVmcy5lbC52YWx1ZTtcblx0fVxuXG5cdHNldCB2YWx1ZSh2KSB7XG5cdFx0dGhpcy5yZWZzLmVsLnZhbHVlID0gdjtcblx0XHRpZih0aGlzLnZhbHVlU2V0KSB7XG5cdFx0XHR0aGlzLnZhbHVlU2V0KCk7XG5cdFx0fVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgYmFzZSBDb21wb25lbnRcbmNsYXNzIFBhcmVudCBleHRlbmRzIF9CYXNlTm9kZSB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdGdldCB2YWx1ZSgpIHtcblxuXHRcdC8vIEluaXQgdGhlIHJldHVyblxuXHRcdHZhciB2YWx1ZSA9IHt9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCByZWZzXG5cdFx0Zm9yKHZhciByIGluIHRoaXMucmVmcykge1xuXHRcdFx0aWYodGhpcy5yZWZzW3JdLnR5cGUgJiYgdGhpcy5yZWZzW3JdLnR5cGUgPT0gJ2NoZWNrYm94Jykge1xuXHRcdFx0XHR2YWx1ZVtyXSA9IHRoaXMucmVmc1tyXS5jaGVja2VkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWVbcl0gPSB0aGlzLnJlZnNbcl0udmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSB2YWx1ZVxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdEFycmF5Tm9kZTogQXJyYXlOb2RlLFxuXHROb2RlOiBOb2RlLFxuXHRQYXJlbnQ6IFBhcmVudCxcblx0ZXJyb3JBZGQ6IF9hZGRDbGFzcyxcblx0ZXJyb3JSZW1vdmU6IF9yZW1vdmVDbGFzcyxcblx0ZXJyb3JGb2N1czogZnVuY3Rpb24oZXYpIHtcblxuXHRcdC8vIElmIHRoZSBzcGVjaWFsIGVsZW1lbnRzIHByb3AgaXMgc2V0XG5cdFx0aWYoZXYuZWxlbWVudHMpIHtcblx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBldi5lbGVtZW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRfcmVtb3ZlQ2xhc3MoZXYuZWxlbWVudHNbaV0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UsIGFzc3VtaW5nIGN1cnJlbnRUYXJnZXRcblx0XHRlbHNlIHtcblx0XHRcdF9yZW1vdmVDbGFzcyhldi5jdXJyZW50VGFyZ2V0KTtcblx0XHR9XG5cdH1cbn07XG4iLCIvKipcbiAqIElucHV0IEVudGVyXG4gKlxuICogQW4gaW5wdXQgYm94IHRoYXQgaGFuZGxlcyBFbnRlciBrZXkgcHJlc3NlcyBhbmQgc2VuZHMgdGhlbSB0byBhIG9uRW50ZXJcbiAqIGNhbGxiYWNrXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IEZVRUwgZm9yIHRoZSBGSVJFXG4gKiBAY3JlYXRlZCAyMDE4LTEyLTAxXG4gKi9cblxuLy8gUmVhY3QgQmFzZVxudmFyIEZvcm1zID0gcmVxdWlyZSgnLi4vYmFzZS9mb3Jtcy5qc3gnKTtcblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIElucHV0RW50ZXIgZXh0ZW5kcyBGb3Jtcy5Ob2RlIHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGNhbGxiYWNrXG5cdFx0dGhpcy5vbkVudGVyID0gcHJvcHMub25FbnRlcjtcblx0XHRkZWxldGUgdGhpcy5wcm9wcy5vbkVudGVyO1xuXG5cdFx0Ly8gU2V0IHRoZSBpbml0aWFsIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHt9XG5cblx0XHQvLyBCaW5kIGZ1bmN0aW9uc1xuXHRcdHRoaXMua2V5UHJlc3MgPSB0aGlzLmtleVByZXNzLmJpbmQodGhpcyk7XG5cdH1cblxuXHRrZXlQcmVzcyhldikge1xuXG5cdFx0Ly8gSWYgYW4gRW50ZXIga2V5IHdhcyBwcmVzc2VkIGFuZCB0aGUgY2FsbGJhY2sgd2FzIHNldFxuXHRcdGlmKGV2LmtleSA9PSAnRW50ZXInICYmIHRoaXMucHJvcHMub25FbnRlcikge1xuXHRcdFx0dGhpcy5vbkVudGVyKGV2LmN1cnJlbnRUYXJnZXQudmFsdWUpO1xuXHRcdFx0ZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gb25LZXlQcmVzcyBjYWxsYmFja1xuXHRcdGlmKHRoaXMucHJvcHMub25LZXlQcmVzcykge1xuXHRcdFx0dGhpcy5wcm9wcy5vbktleVByZXNzKGV2KTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBvbkVudGVyLCAuLi5yZXN0IH0gPSB0aGlzLnByb3BzXG5cdFx0cmV0dXJuIChcblx0XHRcdDxpbnB1dFxuXHRcdFx0XHR7Li4ucmVzdH1cblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRyZWY9XCJlbFwiXG5cdFx0XHRcdG9uS2V5UHJlc3M9e3RoaXMua2V5UHJlc3N9XG5cdFx0XHQvPlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gSW5wdXRFbnRlcjtcbiIsIi8qKlxuICogTWVudSBDb21wb25lbnRcbiAqXG4gKiBBIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbWVudSBvbiB0aGUgc2NyZWVuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOC0xMS0xMVxuICovXG5cbi8vIENyZWF0ZSB0aGUgTWVudSBDb21wb25lbnRcbmNsYXNzIE1lbnUgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50XG57XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIGJhc2Ugc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0c2VsZWN0ZWQ6IHRoaXMucHJvcHMuc2VsZWN0ZWRcblx0XHR9O1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBjbG9zZVxuXHRcdGlmKCF0aGlzLnByb3BzLm9uQ2hhbmdlKSB7XG5cdFx0XHR0aHJvdyAnTWVudSByZXF1aXJlcyBvbkNoYW5nZSBjYWxsYmFjayc7XG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5pdGVtQ2xpY2sgPSB0aGlzLml0ZW1DbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aXRlbUNsaWNrKG5hbWUpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IG5hbWV9LCAoKSA9PiB7XG5cdFx0XHRzZWxmLnByb3BzLm9uQ2hhbmdlKG5hbWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4oKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiBSZWFjdC5DaGlsZHJlbi5tYXAodGhpcy5wcm9wcy5jaGlsZHJlbiwgKGNoaWxkLCBpKSA9PiB7XG5cdFx0XHR2YXIgc3RhdHVzID0gKHNlbGYuc3RhdGUuc2VsZWN0ZWQgPT0gY2hpbGQucHJvcHMubmFtZSkgPyAnYWN0aXZlJyA6ICcnO1xuXHRcdFx0cmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwge1xuXHRcdFx0XHRvbkNsaWNrOiBzZWxmLml0ZW1DbGljayxcblx0XHRcdFx0Y2xhc3NOYW1lOiBzdGF0dXNcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuXHRcdFx0XHR7dGhpcy5yZW5kZXJDaGlsZHJlbigpfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdGdldCBzZWxlY3RlZCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGF0ZS5zZWxlY3RlZDtcblx0fVxuXG5cdHNldCBzZWxlY3RlZChuKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VsZWN0ZWQ6IG59KVxuXHR9XG59XG5cbi8vIENyZWF0ZSB0aGUgTWVudSBJdGVtIENvbXBvbmVudFxuY2xhc3MgSXRlbSBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnRcbntcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgYmFzZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gbmFtZVxuXHRcdGlmKCF0aGlzLnByb3BzLm5hbWUpIHtcblx0XHRcdHRocm93ICdJdGVtIHJlcXVpcmVzIG5hbWUgYXR0cmlidXRlJztcblx0XHR9XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmNsaWNrID0gdGhpcy5jbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y2xpY2soZXYpIHtcblx0XHRldi5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRldi5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRoaXMucHJvcHMub25DbGljayh0aGlzLnByb3BzLm5hbWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9e3RoaXMucHJvcHMuY2xhc3NOYW1lfSBvbkNsaWNrPXt0aGlzLmNsaWNrfT5cblx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHQ8L3NwYW4+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgY29tcG9uZW50c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiTWVudVwiOiBNZW51LFxuXHRcIkl0ZW1cIjogSXRlbVxufVxuIiwiLyoqXG4gKiBNZXNzYWdlc1xuICpcbiAqIFNob3dzIGEgbWVzc2FnZSB3aXRoIGJ1dHRvbnMgdG8gYWNjZXB0LCBkaXNtaXNzLCBldGNcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTMxXG4gKi9cblxuLy8gR2VuZXJpY1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIE1ha2Ugc3VyZSB0aGVyZSBpc24ndCBtb3JlIHRoYW4gb25lIE1lc3NhZ2VzXG52YXIgX2luc3RhbmNlID0gZmFsc2U7XG5cbi8vIENyZWF0ZSB0aGUgbWVzc2FnZSBjb21wb25lbnRcbmNsYXNzIE1lc3NhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnRcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge307XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmJ1dHRvbiA9IHRoaXMuYnV0dG9uLmJpbmQodGhpcyk7XG5cdH1cblxuXHRidXR0b24oZXYpIHtcblxuXHRcdC8vIENhbGwgdGhlIGNhbGxiYWNrIGFzc29jaWF0ZWQsIGlmIGl0IHJldHVybnMgc3VjY2Vzc2Z1bCwgcmVtb3ZlIHRoZVxuXHRcdC8vXHRtZXNzYWdlXG5cdFx0aWYodGhpcy5wcm9wcy5idXR0b25zW2V2LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF0uY2FsbGJhY2sodGhpcy5wcm9wcy5pZCkpIHtcblx0XHRcdHRoaXMucHJvcHMucmVtb3ZlKHRoaXMucHJvcHMuaWQpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZVwiPlxuXHRcdFx0XHQ8cD57c2VsZi5wcm9wcy50ZXh0fTwvcD5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJidXR0b25zXCI+XG5cdFx0XHRcdFx0e3NlbGYucHJvcHMuYnV0dG9ucy5tYXAoZnVuY3Rpb24oYiwgaSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIDxidXR0b24ga2V5PXtpfSBkYXRhLWluZGV4PXtpfSBvbkNsaWNrPXtzZWxmLmJ1dHRvbn0+e2IudGl0bGV9PC9idXR0b24+XG5cdFx0XHRcdFx0fSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBDcmVhdGUgdGhlIHByaW1hcnkgY29tcG9uZW50XG5jbGFzcyBNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhbiBpbnN0YW5jZVxuXHRcdGlmKF9pbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgJ0NhblxcJ3QgaGF2ZSBtb3JlIHRoYW4gb25lIE1lc3NhZ2VzJztcblx0XHR9XG5cdFx0X2luc3RhbmNlID0gdHJ1ZTtcblxuXHRcdC8vIFNldCB0aGUgaW5pdGlhbCBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtZXNzYWdlczogW11cblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5tZXNzYWdlID0gdGhpcy5tZXNzYWdlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXHRcdC8vIFRyYWNrIGFueSBtZXNzYWdlIGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ21lc3NhZ2UnLCB0aGlzLm1lc3NhZ2UpO1xuXHRcdEV2ZW50cy5hZGQoJ21lc3NhZ2VfcmVtb3ZlJywgdGhpcy5yZW1vdmUpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgbWVzc2FnZSBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlKTtcblx0XHRFdmVudHMucmVtb3ZlKCdtZXNzYWdlX3JlbW92ZScsIHRoaXMucmVtb3ZlKTtcblx0fVxuXG5cdG1lc3NhZ2UoaWQsIGNvbmYpIHtcblxuXHRcdC8vIENsb25lIHRoZSBtZXNzYWdlc1xuXHRcdHZhciBtc2dzID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG5cblx0XHQvLyBQdXNoIHRoZSBuZXcgbWVzc2FnZVxuXHRcdG1zZ3NbaWRdID0gY29uZjtcblxuXHRcdC8vIFNldCB0aGUgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1lc3NhZ2VzXCI6IG1zZ3N9KTtcblx0fVxuXG5cdHJlbW92ZShpZCkge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIG1lc3NhZ2VzXG5cdFx0dmFyIG1zZ3MgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgcmVxdWVzdGVkIElEXG5cdFx0ZGVsZXRlIG1zZ3NbaWRdO1xuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1wibWVzc2FnZXNcIjogbXNnc30pO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBpZD1cIm1lc3NhZ2VzXCI+XG5cdFx0XHRcdHtUb29scy5vbWFwKHRoaXMuc3RhdGUubWVzc2FnZXMsIGZ1bmN0aW9uKG0sIGspIHtcblx0XHRcdFx0XHRyZXR1cm4gPE1lc3NhZ2Ugey4uLm19IGtleT17a30gaWQ9e2t9IHJlbW92ZT17c2VsZi5yZW1vdmV9IC8+XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIENvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBNZXNzYWdlc1xuIiwiLyoqXG4gKiBNb2RlbCBDb21wb25lbnRcbiAqXG4gKiBBIGNvbXBvbmVudCB0byBkaXNwbGF5IGEgbW9kYWwgYm94IG9uIHRoZSBzY3JlZW5cbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE4LTExLTExXG4gKi9cblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIE1vZGFsIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudFxue1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBjbG9zZVxuXHRcdGlmKCF0aGlzLnByb3BzLmNsb3NlKSB7XG5cdFx0XHR0aHJvdyAnTW9kYWwgcmVxdWlyZXMgY2xvc2UgY2FsbGJhY2snO1xuXHRcdH1cblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYnV0dG9uQ2xpY2sgPSB0aGlzLmJ1dHRvbkNsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy50cmFwRXNjYXBlID0gdGhpcy50cmFwRXNjYXBlLmJpbmQodGhpcyk7XG5cdH1cblxuXHQvLyBJZiBhIGJ1dHRvbiBpcyBwdXNoZWRcblx0YnV0dG9uQ2xpY2soZXYpIHtcblxuXHRcdC8vIEdldCB0aGUgYnV0dG9uIHVzaW5nIHRoZSBpbmRleFxuXHRcdHZhciBidG4gPSB0aGlzLnByb3BzLmJ1dHRvbnNbZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4XTtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYSBjYWxsYmFja1xuXHRcdGlmKHR5cGVvZiBidG4uY2FsbGJhY2sgPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0YnRuLmNhbGxiYWNrKGJ0bik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucHJvcHMuY2xvc2UoKTtcblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0Ly8gVHJhcCB0aGUgZXNjYXBlIGtleVxuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnRyYXBFc2NhcGUpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cdFx0Ly8gU3RvcCB0cmFwcGluZyB0aGUgZXNjYXBlIGtleVxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLnRyYXBFc2NhcGUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIEdlbmVyYXRlIHRoZSBzdHlsZXNcblx0XHR2YXIgc3R5bGVzID0ge31cblx0XHRpZih0aGlzLnByb3BzLmhlaWdodCkgc3R5bGVzLmhlaWdodCA9IHRoaXMucHJvcHMuaGVpZ2h0O1xuXHRcdGlmKHRoaXMucHJvcHMubWF4SGVpZ2h0KSBzdHlsZXMubWF4SGVpZ2h0ID0gdGhpcy5wcm9wcy5tYXhIZWlnaHQ7XG5cdFx0aWYodGhpcy5wcm9wcy5tYXhXaWR0aCkgc3R5bGVzLm1heEhlaWdodCA9IHRoaXMucHJvcHMubWF4SGVpZ2h0O1xuXHRcdGlmKHRoaXMucHJvcHMud2lkdGgpIHN0eWxlcy53aWR0aCA9IHRoaXMucHJvcHMud2lkdGg7XG5cblx0XHQvLyBSZXR1cm4gdGhlIEhUTUxcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXtzdHlsZXN9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXdpbmRvdy1jbG9zZVwiIG9uQ2xpY2s9e3RoaXMucHJvcHMuY2xvc2V9PjwvaT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+e3RoaXMucHJvcHMudGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0e3RoaXMucHJvcHMuY2hpbGRyZW59XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdHt0aGlzLnByb3BzLmJ1dHRvbnMgJiZcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHR7dGhpcy5wcm9wcy5idXR0b25zLm1hcChmdW5jdGlvbihidG4sIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gZGF0YS1pbmRleD17aX0gY2xhc3NOYW1lPVwic21hbGxcIiBvbkNsaWNrPXtzZWxmLmJ1dHRvbkNsaWNrfSBkaXNhYmxlZD17YnRuWydkaXNhYmxlZCddfT57YnRuWyduYW1lJ119PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cblxuXHQvLyBUcmFwcyBFU0Mga2V5IGNsaWNrcyBzbyB3ZSBjYW4gY2xvc2UgdGhlIE1vZGFsIHdpbmRvd1xuXHR0cmFwRXNjYXBlKGV2KSB7XG5cdFx0aWYoZXYua2V5Q29kZSA9PT0gMjcpIHtcblx0XHRcdHRoaXMucHJvcHMuY2xvc2UoKTtcblx0XHR9XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTW9kYWw7XG4iLCIvKipcbiAqIFBvcHVwc1xuICpcbiAqIFNob3dzIGEgcG9wdXAgb2YgdHlwZSBlcnJvciwgc3VjY2Vzcywgb3Igd2FybmluZ1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTgtMTItMDhcbiAqL1xuXG4vLyBEZWZpbmVzXG52YXIgU1VDQ0VTU19USU1FT1VUID0gMjAwMDtcbnZhciBFUlJPUl9USU1FT1VUID0gMTAwMDA7XG52YXIgV0FSTklOR19USU1FT1VUID0gNTAwMDtcbnZhciBTVEVQX1RJTUVPVVQgPSAyMDtcbnZhciBXSURUSF9TVEVQUyA9IDQwO1xudmFyIEhFSUdIVF9TVEVQUyA9IDIwO1xudmFyIE1BUkdJTiA9IDU7XG5cbi8vIEdlbmVyaWNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIFRvb2xzID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy90b29scy5qcycpO1xuXG4vLyBNYWtlIHN1cmUgdGhlcmUgaXNuJ3QgbW9yZSB0aGFuIG9uZSBQb3B1cHNcbnZhciBfaW5zdGFuY2UgPSBmYWxzZTtcblxuLy8gQ3JlYXRlIHRoZSBDb21wb25lbnRcbmNsYXNzIFBvcHVwcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudFxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSBhbiBpbnN0YW5jZVxuXHRcdGlmKF9pbnN0YW5jZSkge1xuXHRcdFx0dGhyb3cgJ0NhblxcJ3QgaGF2ZSBtb3JlIHRoYW4gb25lIFBvcHVwcyc7XG5cdFx0fVxuXHRcdF9pbnN0YW5jZSA9IHRydWU7XG5cblx0XHQvLyBTZXQgdGhlIGluaXRpYWwgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0cG9wdXBzOiBbXSxcblx0XHRcdHRpbWVyOiBudWxsXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuZXJyb3IgPSB0aGlzLmVycm9yLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb3B1cCA9IHRoaXMucG9wdXAuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByb2Nlc3MgPSB0aGlzLnByb2Nlc3MuYmluZCh0aGlzKTtcblx0XHR0aGlzLndhcm5pbmcgPSB0aGlzLndhcm5pbmcuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblx0XHQvLyBUcmFjayBhbnkgcG9wdXAgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnZXJyb3InLCB0aGlzLmVycm9yKTtcblx0XHRFdmVudHMuYWRkKCdwb3B1cCcsIHRoaXMucG9wdXApO1xuXHRcdEV2ZW50cy5hZGQoJ3N1Y2Nlc3MnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMuYWRkKCd3YXJuaW5nJywgdGhpcy53YXJuaW5nKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdC8vIFN0b3AgdHJhY2tpbmcgYW55IHBvcHVwIGV2ZW50c1xuXHRcdEV2ZW50cy5yZW1vdmUoJ2Vycm9yJywgdGhpcy5lcnJvcik7XG5cdFx0RXZlbnRzLnJlbW92ZSgncG9wdXAnLCB0aGlzLnBvcHVwKTtcblx0XHRFdmVudHMucmVtb3ZlKCdzdWNjZXNzJywgdGhpcy5wb3B1cCk7XG5cdFx0RXZlbnRzLnJlbW92ZSgnd2FybmluZycsIHRoaXMud2FybmluZyk7XG5cdH1cblxuXHRlcnJvcihtc2cpIHtcblx0XHR0aGlzLnBvcHVwKG1zZywgJ2Vycm9yJyk7XG5cdH1cblxuXHRwcm9jZXNzKCkge1xuXG5cdFx0Ly8gQ2xvbmUgdGhlIHN0YXRlXG5cdFx0dmFyIHN0YXRlID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZSk7XG5cblx0XHQvLyBJZiB3ZSB3ZXJlIHdhaXRpbmdcblx0XHRpZihzdGF0ZS50aW1lci5zdGVwID09IDApIHtcblxuXHRcdFx0Ly8gU3RhcnQgdGhlIHByb2Nlc3MgdG8gaGlkZSB0aGUgZmlyc3QgcG9wdXBcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnbCddID0gTUFSR0lOO1xuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydyJ10gPSBNQVJHSU47XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBzdGVwIHRpbWVvdXRzXG5cdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgU1RFUF9USU1FT1VUKTtcblx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byBtb3ZlIHRoZSBmaXJzdCBwb3B1cCBvZmYgdGhlIHNjcmVlblxuXHRcdGVsc2UgaWYoc3RhdGUudGltZXIuc3RlcCA+PSAxICYmIHN0YXRlLnRpbWVyLnN0ZXAgPD0gNDApIHtcblxuXHRcdFx0Ly8gR2V0IHRoZSBpbm5lciB3aWR0aCBvZiB0aGUgc2NyZWVuIGFuZCBkaXZpZGUgYnkgdGhlIHN0ZXBzXG5cdFx0XHR2YXIgc3RlcCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gV0lEVEhfU1RFUFM7XG5cblx0XHRcdC8vIFN1YnRyYWN0IGl0IGZyb20gdGhlIGxlZnQgYW5kIHJpZ2h0XG5cdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2wnXSAtPSBzdGVwO1xuXHRcdFx0c3RhdGUucG9wdXBzWzBdWydyJ10gKz0gc3RlcDtcblxuXHRcdFx0Ly8gU2V0IHRoZSBuZXh0IHRpbWVvdXRcblx0XHRcdHN0YXRlLnRpbWVyLnJlcyA9IHNldFRpbWVvdXQodGhpcy5wcm9jZXNzLCBTVEVQX1RJTUVPVVQpO1xuXHRcdFx0c3RhdGUudGltZXIuc3RlcCArPSAxO1xuXHRcdH1cblxuXHRcdC8vIEVsc2Ugd2UgbmVlZCB0byBtb3ZlIHRoZSBmaXJzdCBwb3B1cCB1cFxuXHRcdGVsc2UgaWYoc3RhdGUudGltZXIuc3RlcCA+PSA0MSAmJiBzdGF0ZS50aW1lci5zdGVwIDw9IDYwKSB7XG5cblx0XHRcdC8vIElmIHdlJ3JlIG9uIHRoZSBmaXJzdCBzdGVwXG5cdFx0XHRpZihzdGF0ZS50aW1lci5zdGVwID09IDQxKSB7XG5cdFx0XHRcdHN0YXRlLnBvcHVwc1swXVsnb2gnXSA9IHRoaXMucmVmc1tcIjBcIl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0XHRzdGF0ZS5wb3B1cHNbMF1bJ2gnXSA9IHRoaXMucmVmc1tcIjBcIl0ub2Zmc2V0SGVpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBHZXQgdGhlIGhlaWdodCBvZiB0aGUgZGl2IGFuZCBkaXZpZGUgYnkgdGhlIHN0ZXBzXG5cdFx0XHR2YXIgc3RlcCA9IHN0YXRlLnBvcHVwc1swXVsnb2gnXSAvIEhFSUdIVF9TVEVQUztcblxuXHRcdFx0Ly8gU3VidHJhY3QgaXQgZnJvbSB0aGUgY3VycmVudCBoZWlnaHRcblx0XHRcdHN0YXRlLnBvcHVwc1swXVsnaCddIC09IHN0ZXA7XG5cblx0XHRcdC8vIFNldCB0aGUgbmV4dCB0aW1lb3V0XG5cdFx0XHRzdGF0ZS50aW1lci5yZXMgPSBzZXRUaW1lb3V0KHRoaXMucHJvY2VzcywgU1RFUF9USU1FT1VUKTtcblx0XHRcdHN0YXRlLnRpbWVyLnN0ZXAgKz0gMTtcblx0XHR9XG5cblx0XHQvLyBFbHNlIHdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBwb3B1cCBjb21wbGV0ZWx5XG5cdFx0ZWxzZSBpZihzdGF0ZS50aW1lci5zdGVwID09IDYxKSB7XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgY3VycmVudCBmaXJzdCBwb3B1cFxuXHRcdFx0c3RhdGUucG9wdXBzLnNwbGljZSgwLCAxKTtcblxuXHRcdFx0Ly8gSWYgd2Ugc3RpbGwgaGF2ZSBwb3B1cHNcblx0XHRcdGlmKHN0YXRlLnBvcHVwcy5sZW5ndGgpIHtcblxuXHRcdFx0XHQvLyBSZXNldCB0aGUgdGltZXIgc3RlcHNcblx0XHRcdFx0c3RhdGUudGltZXIucmVzID0gc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIHN0YXRlLnBvcHVwc1swXS50aW1lb3V0KTtcblx0XHRcdFx0c3RhdGUudGltZXIuc3RlcCA9IDA7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEVsc2UsIG5vIG1vcmUgdGltZW91dHNcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdGF0ZS50aW1lciA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJwb3B1cHNcIiBzdHlsZT17e2Rpc3BsYXk6IHRoaXMuc3RhdGUucG9wdXBzLmxlbmd0aCA/ICdibG9jaycgOiAnbm9uZSd9fT5cblx0XHRcdFx0e3RoaXMuc3RhdGUucG9wdXBzLm1hcCgobXNnLCBpKSA9PiB7XG5cdFx0XHRcdFx0bGV0IHN0eWxlID0ge31cblx0XHRcdFx0XHRpZih0eXBlb2YgbXNnLmwgIT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpbkxlZnQgPSBtc2cubCArICdweCc7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5SaWdodCA9IG1zZy5yICsgJ3B4Jztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYodHlwZW9mIG1zZy5oICE9ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRzdHlsZS5oZWlnaHQgPSBtc2cuaCArICdweCc7XG5cdFx0XHRcdFx0XHRzdHlsZS5wYWRkaW5nID0gMDtcblx0XHRcdFx0XHRcdHN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XG5cdFx0XHRcdFx0XHRzdHlsZS5tYXJnaW5Ub3AgPSAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGtleT17aX0gcmVmPXtcIlwiICsgaX0gY2xhc3NOYW1lPXttc2cudHlwZX0gc3R5bGU9e3N0eWxlfT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPXtcImZhcyBmYS1cIiArIG1zZy5pY29ufSAvPlxuXHRcdFx0XHRcdFx0XHR7bXNnLnRleHR9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpXG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHBvcHVwKHRleHQsIHR5cGUpIHtcblxuXHRcdC8vIElmIHRoZXJlJ3Mgbm8gdHlwZVxuXHRcdGlmKHR5cGVvZiB0eXBlID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHR0eXBlID0gJ3N1Y2Nlc3MnO1xuXHRcdH1cblxuXHRcdHZhciBpVGltZW91dCA9IDA7XG5cdFx0dmFyIHNJY29uID0gJyc7XG5cdFx0c3dpdGNoKHR5cGUpIHtcblx0XHRcdGNhc2UgJ3N1Y2Nlc3MnOlxuXHRcdFx0XHRpVGltZW91dCA9IFNVQ0NFU1NfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnY2hlY2stY2lyY2xlJztcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdlcnJvcic6XG5cdFx0XHRcdGlUaW1lb3V0ID0gRVJST1JfVElNRU9VVDtcblx0XHRcdFx0c0ljb24gPSAnZXhjbGFtYXRpb24tY2lyY2xlJztcblx0XHRcdFx0Y29uc29sZS5lcnJvcih0ZXh0KTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICd3YXJuaW5nJzpcblx0XHRcdFx0aVRpbWVvdXQgPSBXQVJOSU5HX1RJTUVPVVQ7XG5cdFx0XHRcdHNJY29uID0gJ2V4Y2xhbWF0aW9uLXRyaWFuZ2xlJztcblx0XHRcdFx0Y29uc29sZS53YXJuKHRleHQpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHRocm93IFwiSW52YWxpZCBwb3B1cCB0eXBlOiBcIiArIHR5cGU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2xvbmUgdGhlIHN0YXRlXG5cdFx0dmFyIHN0YXRlID0gVG9vbHMuY2xvbmUodGhpcy5zdGF0ZSk7XG5cblx0XHQvLyBBZGQgdGhlIHBvcHVwXG5cdFx0c3RhdGUucG9wdXBzLnB1c2goe1xuXHRcdFx0aWNvbjogc0ljb24sXG5cdFx0XHR0ZXh0OiB0ZXh0LFxuXHRcdFx0dGltZW91dDogaVRpbWVvdXQsXG5cdFx0XHR0eXBlOiB0eXBlXG5cdFx0fSk7XG5cblx0XHQvLyBTZXQgdGhlIHRpbWVyXG5cdFx0aWYoc3RhdGUudGltZXIgPT0gbnVsbCkge1xuXHRcdFx0c3RhdGUudGltZXIgPSB7XG5cdFx0XHRcdHJlczogc2V0VGltZW91dCh0aGlzLnByb2Nlc3MsIGlUaW1lb3V0KSxcblx0XHRcdFx0c3RlcDogMFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZShzdGF0ZSk7XG5cdH1cblxuXHR3YXJuaW5nKG1zZykge1xuXHRcdHRoaXMucG9wdXAobXNnLCAnd2FybmluZycpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFBvcHVwcztcbiIsIi8qKlxuICogSGVhZGVyXG4gKlxuICogTWFuYWdlcyBzaWduIGluIC8gc2lnbiBvdXQgLyBzaWduIHVwXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yMVxuICovXG5cbi8vIGNvbXBvbmVudHNcbnZhciBGb3JtcyA9IHJlcXVpcmUoJy4vYmFzZS9mb3Jtcy5qc3gnKTtcbnZhciBNb2RhbCA9IHJlcXVpcmUoJy4vZWxlbWVudHMvbW9kYWwuanN4Jyk7XG52YXIgVGhyb3dlciA9IHJlcXVpcmUoJy4vdGhyb3dlci5qc3gnKTtcblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcbnZhciBIYXNoID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9oYXNoLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpO1xuXG4vLyBIZWFkZXIgY29tcG9uZW50XG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IGZhbHNlXG5cdFx0fTtcblxuXHRcdC8vIEJpbmQgbWV0aG9kc1xuXHRcdHRoaXMuYWNjb3VudFNob3cgPSB0aGlzLmFjY291bnRTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5ob21lID0gdGhpcy5ob21lLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluU2hvdyA9IHRoaXMuc2lnbmluU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluVHJpZ2dlciA9IHRoaXMuc2lnbmluVHJpZ2dlci5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dFRyaWdnZXIgPSB0aGlzLnNpZ25vdXRUcmlnZ2VyLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWdudXAgPSB0aGlzLnNpZ251cC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbnVwU2hvdyA9IHRoaXMuc2lnbnVwU2hvdy5iaW5kKHRoaXMpO1xuXHR9XG5cblx0YWNjb3VudFNob3coZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcIm1vZGFsXCI6IHRoaXMuc3RhdGUubW9kYWwgPT0gXCJhY2NvdW50XCIgPyBmYWxzZSA6ICdhY2NvdW50J30pO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluVHJpZ2dlcik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dFRyaWdnZXIpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pblRyaWdnZXIpO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXRUcmlnZ2VyKTtcblx0fVxuXG5cdGhvbWUoKSB7XG5cdFx0SGFzaC5zZXQoXCJwYWdlXCIsIG51bGwpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGhlYWRlcj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zIGZyaWdodCBhcmlnaHRcIj5cblx0XHRcdFx0XHR7c2VsZi5zdGF0ZS50aHJvd2VyID9cblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFyIGZhLXVzZXJcIiB0aXRsZT1cIkFjY291bnRcIiBvbkNsaWNrPXtzZWxmLmFjY291bnRTaG93fT48L2k+XG5cdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS1wb3dlci1vZmZcIiB0aXRsZT1cIlNpZ24gT3V0XCIgb25DbGljaz17c2VsZi5zaWdub3V0fT48L2k+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdDpcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItcGx1c1wiIHRpdGxlPVwiQ3JlYXRlIEFjY291bnRcIiBvbkNsaWNrPXtzZWxmLnNpZ251cFNob3d9PjwvaT5cblx0XHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXNpZ24taW4tYWx0XCIgdGl0bGU9XCJTaWduIEluXCIgb25DbGljaz17c2VsZi5zaWduaW5TaG93fT48L2k+XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxoMSBzdHlsZT17e1wiY3Vyc29yXCI6IFwicG9pbnRlclwifX0gb25DbGljaz17dGhpcy5ob21lfT5BeGVHYWlucy5jb208L2gxPlxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnc2lnbmluJyAmJlxuXHRcdFx0XHRcdDxkaXYgaWQ9XCJzaWduaW5cIiBjbGFzc05hbWU9XCJmb3JtXCI+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwiYWxpYXNcIiB0eXBlPVwidGV4dFwiIHRpdGxlPVwiYWxpYXNcIiBwbGFjZWhvbGRlcj1cImFsaWFzXCIgb25DbGljaz17Rm9ybXMuZXJyb3JGb2N1c30gLz48L3A+XG5cdFx0XHRcdFx0XHQ8cD48aW5wdXQgcmVmPVwicGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImFyaWdodFwiPjxidXR0b24gb25DbGljaz17c2VsZi5zaWduaW59PnNpZ24gaW48L2J1dHRvbj48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kYWwgPT0gJ3NpZ251cCcgJiZcblx0XHRcdFx0XHQ8ZGl2IGlkPVwic2lnbnVwXCIgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0XHRcdFx0PHA+PGlucHV0IHJlZj1cInNpZ251cF9hbGlhc1wiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJhbGlhc1wiIHBsYWNlaG9sZGVyPVwiYWxpYXNcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgdGl0bGU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWwgKG5vdCByZXF1aXJlZClcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJzaWdudXBfcGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiBvbkNsaWNrPXtGb3Jtcy5lcnJvckZvY3VzfSAvPjwvcD5cblx0XHRcdFx0XHRcdDxwPjxpbnB1dCByZWY9XCJyZXBlYXRfcGFzc3dkXCIgdHlwZT1cInBhc3N3b3JkXCIgdGl0bGU9XCJyZXBlYXQgcGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiIG9uQ2xpY2s9e0Zvcm1zLmVycm9yRm9jdXN9IC8+PC9wPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiYXJpZ2h0XCI+PGJ1dHRvbiBvbkNsaWNrPXtzZWxmLnNpZ251cH0+c2lnbiB1cDwvYnV0dG9uPjwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5tb2RhbCA9PSAnYWNjb3VudCcgJiZcblx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdHRpdGxlPVwiQWNjb3VudFwiXG5cdFx0XHRcdFx0XHRjbG9zZT17c2VsZi5hY2NvdW50U2hvd31cblx0XHRcdFx0XHRcdHdpZHRoPVwiOTUlXCJcblx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8VGhyb3dlciAvPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdH1cblx0XHRcdDwvaGVhZGVyPlxuXHRcdCk7XG5cdH1cblxuXHRzaWduaW4oZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBTdG9yZSB0aGUgYWxpYXNcblx0XHR2YXIgYWxpYXMgPSB0aGlzLnJlZnMuYWxpYXMudmFsdWU7XG5cblx0XHQvLyBDYWxsIHRoZSBzaWduaW5cblx0XHRTZXJ2aWNlcy5jcmVhdGUoJ2F1dGgnLCAnc2lnbmluJywge1xuXHRcdFx0XCJhbGlhc1wiOiBhbGlhcyxcblx0XHRcdFwicGFzc3dkXCI6IHRoaXMucmVmcy5wYXNzd2QudmFsdWVcblx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0dmFyIGVycm9yID0gJyAnO1xuXHRcdFx0XHRzd2l0Y2gocmVzLmVycm9yLmNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDEwMDE6XG5cdFx0XHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbWVzc2FnZSBhbmQgbWFrZSB0aGUgcmVmIHJlZFxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIHJlcy5lcnJvci5tc2cpIHtcblx0XHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwMTpcblx0XHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdBbGlhcyBvciBwYXNzd29yZCBpbnZhbGlkJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDQ6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9wYXNzd2QnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmQgbm90IHN0cm9uZyBlbm91Z2gnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIHNlc3Npb24gd2l0aCB0aGUgc2VydmljZVxuXHRcdFx0XHRTZXJ2aWNlcy5zZXNzaW9uKHJlcy5kYXRhLnNlc3Npb24pO1xuXG5cdFx0XHRcdC8vIEdyZWV0IHRocm93ZXJcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3N1Y2Nlc3MnLCBcIldlbGNvbWUgYmFjayB0byBBeGVHYWlucyBcIiArIGFsaWFzKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWduaW4gZXZlbnRcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicsIHJlcy5kYXRhLnRocm93ZXIpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbmluU2hvdyhldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kYWxcIjogKHRoaXMuc3RhdGUubW9kYWwgPT0gJ3NpZ25pbicgPyBmYWxzZSA6ICdzaWduaW4nKX0pO1xuXHR9XG5cblx0c2lnbmluVHJpZ2dlcigpIHtcblxuXHRcdC8vIEhpZGUgYW55IG1vZGFscyBhbmQgc2V0IGEgdGhyb3dlciB0byB0cnVlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcIm1vZGFsXCI6IGZhbHNlLFxuXHRcdFx0XCJ0aHJvd2VyXCI6IHRydWVcblx0XHR9KTtcblx0fVxuXG5cdHNpZ25vdXQoZXYpIHtcblxuXHRcdC8vIFN0b3JlIHRoaXNcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTaG93IGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzaWdub3V0XG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ3NpZ25vdXQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gUmVzZXQgdGhlIHNlc3Npb25cblx0XHRcdFx0U2VydmljZXMuc2Vzc2lvbihudWxsKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWdub3V0IGV2ZW50XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzaWdub3V0Jyk7XG5cdFx0XHR9XG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbm91dFRyaWdnZXIoKSB7XG5cblx0XHQvLyBIaWRlIGFuZCBtb2RhbHMgYW5kIHNldCB0aGUgdGhyb3dlciB0byBmYWxzZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJtb2RhbFwiOiBmYWxzZSxcblx0XHRcdFwidGhyb3dlclwiOiBmYWxzZVxuXHRcdH0pO1xuXHR9XG5cblx0c2lnbnVwKGV2KSB7XG5cblx0XHQvLyBJZiB0aGUgYWxpYXMgaXMgbm90IGxvbmcgZW5vdWdoXG5cdFx0aWYodGhpcy5yZWZzLnNpZ251cF9hbGlhcy50cmltKCkubGVuZ3RoIDwgMykge1xuXHRcdFx0Rm9ybXMuZXJyb3JBZGQodGhpcy5yZWZzLnNpZ251cF9hbGlhcyk7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnQWxpYXMgbXVzdCBiZSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgcGFzc3dvcmRzIGRvbid0IG1hdGNoXG5cdFx0aWYodGhpcy5yZWZzLnNpZ251cF9wYXNzd2QudmFsdWUgIT0gdGhpcy5yZWZzLnJlcGVhdF9wYXNzd2QudmFsdWUpIHtcblx0XHRcdEZvcm1zLmVycm9yQWRkKHRoaXMucmVmcy5yZXBlYXRfcGFzc3dkKTtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsICdQYXNzd29yZHMgZG8gbm90IG1hdGNoJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEluaXQgdGhlIGRhdGFcblx0XHR2YXIgb0RhdGEgPSB7XG5cdFx0XHRcImFsaWFzXCI6IHRoaXMucmVmcy5zaWdudXBfYWxpYXMudmFsdWUudHJpbSgpLFxuXHRcdFx0XCJwYXNzd2RcIjogdGhpcy5yZWZzLnNpZ251cF9wYXNzd2QudmFsdWVcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGUtbWFpbFxuXHRcdGlmKHRoaXMucmVmcy5lbWFpbC52YWx1ZSkge1xuXHRcdFx0dmFyIGVtYWlsID0gdGhpcy5yZWZzLmVtYWlsLnZhbHVlLnRyaW0oKTtcblx0XHRcdGlmKGVtYWlsKSB7XG5cdFx0XHRcdG9EYXRhWydlbWFpbCddID0gZW1haWw7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgc2lnbnVwXG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ3NpZ251cCcsIG9EYXRhKS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdFx0dmFyIGVycm9yID0gJyAnO1xuXHRcdFx0XHRzd2l0Y2gocmVzLmVycm9yLmNvZGUpIHtcblx0XHRcdFx0XHRjYXNlIDEwMDE6XG5cdFx0XHRcdFx0XHQvLyBHbyB0aHJvdWdoIGVhY2ggbWVzc2FnZSBhbmQgbWFrZSB0aGUgcmVmIHJlZFxuXHRcdFx0XHRcdFx0Zm9yKHZhciBpIGluIHJlcy5lcnJvci5tc2cpIHtcblx0XHRcdFx0XHRcdFx0aWYoaSA9PSAnYWxpYXMnKSB7XG5cdFx0XHRcdFx0XHRcdFx0aSA9ICdzaWdudXBfYWxpYXMnO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYoaSA9PSAncGFzc3dkJykge1xuXHRcdFx0XHRcdFx0XHRcdGkgPSAnc2lnbnVwX3Bhc3N3ZCc7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Rm9ybXMuZXJyb3JBZGQoc2VsZi5yZWZzW2ldKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwMDpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snc2lnbnVwX2FsaWFzJ10pO1xuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgJ0FsaWFzIGlzIGFscmVhZHkgaW4gdXNlJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRjYXNlIDEyMDQ6XG5cdFx0XHRcdFx0XHRGb3Jtcy5lcnJvckFkZChzZWxmLnJlZnNbJ3NpZ251cF9wYXNzd2QnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnUGFzc3dvcmQgbm90IHN0cm9uZyBlbm91Z2gnKTtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdGNhc2UgMTIwNjpcblx0XHRcdFx0XHRcdEZvcm1zLmVycm9yQWRkKHNlbGYucmVmc1snZW1haWwnXSk7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCAnRS1NYWlsIGFscmVhZHkgaW4gdXNlJyk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBzZXNzaW9uIHdpdGggdGhlIHNlcnZpY2Vcblx0XHRcdFx0U2VydmljZXMuc2Vzc2lvbihyZXMuZGF0YSk7XG5cblx0XHRcdFx0Ly8gUmV2ZXJ0IHRvIHNpZ24gaW4gYW5kIHNob3cgc3VjY2VzcyBtZXNzYWdlXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwibW9kYWxcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJ0aHJvd2VyXCI6IHRydWVcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gR3JlZXQgdGhyb3dlclxuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignc3VjY2VzcycsIFwiV2VsY29tZSB0byBBeGVHYWlucyBcIiArIG9EYXRhLmFsaWFzKTtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBzaWduaW4gZXZlbnRcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3NpZ25pbicpO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbnVwU2hvdyhldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kYWxcIjogKHRoaXMuc3RhdGUubW9kYWwgPT0gJ3NpZ251cCcgPyBmYWxzZSA6ICdzaWdudXAnKX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRlcjtcbiIsIi8qKlxuICogTWF0Y2hcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBtYXRjaGVzIGFuZCBkaXNwbGF5IHRoZSBhcHByb3ByaWF0ZSBvbmUgYmFzZWQgb24gd2hhdFxuICogaXMgY2hvc2VuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbnZhciB7TWVudSwgSXRlbX0gPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lbnUuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50c1xudmFyIE5hdGYgPSByZXF1aXJlKCcuL25hdGYvbWF0Y2guanN4Jyk7XG5cbi8vIE1hdGNoIGNvbXBvbmVudFxuY2xhc3MgTWF0Y2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm9yZ1wiOiBIYXNoLmdldCgnb3JnJywgJ25hdGYnKVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm9yZ0NoYW5nZSA9IHRoaXMub3JnQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gudW53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJtYXRjaFwiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgdGhyb3dlcj17dGhpcy5wcm9wcy50aHJvd2VyfSAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gTWF0Y2g7XG4iLCIvKipcbiAqIE5BVEYgQm9hcmRcbiAqXG4gKiBNYW5hZ2VzIGEgc3RhbmRhcmQgTkFURiBib2FyZFxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMTlcbiAqL1xuXG4vLyBCb2FyZCBjb21wb25lbnRcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBubyBvblBvaW50cyBwcm9wXG5cdFx0aWYoIXByb3BzLm9uUG9pbnRzKSB7XG5cdFx0XHR0aHJvdyAnbXVzdCBzcGVjaWZ5IG9uUG9pbnRzIHByb3BlcnR5IGZvciBOQVRGIEJvYXJkJztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImNsdXRjaE1vZGVcIjogcHJvcHMuY2x1dGNoTW9kZSxcblx0XHRcdFwic2VsZWN0ZWRcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5jbHV0Y2hDbGljayA9IHRoaXMuY2x1dGNoQ2xpY2suYmluZCh0aGlzKTtcblx0XHR0aGlzLmRyb3BDbGljayA9IHRoaXMuZHJvcENsaWNrLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludENsaWNrID0gdGhpcy5wb2ludENsaWNrLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjbHV0Y2hDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gSWYgY2x1dGNoZXMgYXJlIG5vdCBhbGxvd2VkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdub25lJykge1xuXG5cdFx0XHQvLyBTdG9yZSB0aGUgY3VycmVudCB0YXJnZXRcblx0XHRcdHZhciB0YXJnZXQgPSBldi5jdXJyZW50VGFyZ2V0O1xuXG5cdFx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVcblx0XHRcdHZhciBjbGFzc05hbWUgPSB0YXJnZXQuY2xhc3NOYW1lO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGludmFsaWQgY2xhc3Ncblx0XHRcdHRhcmdldC5jbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIGludmFsaWQnO1xuXG5cdFx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcblx0XHRcdH0sIDUwMCk7XG5cblx0XHRcdC8vIERvbid0IGNvdW50IHRoZSBjbGlja1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGVsc2Uge1xuXG5cdFx0XHRpZih0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XG5cdFx0XHRcdHRoaXMucHJvcHMub25Qb2ludHModHJ1ZSwgNyk7XG5cdFx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1wic2VsZWN0ZWRcIjogdHJ1ZX0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRyb3BDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBTZW5kIG91dCB0aGUgZHJvcFxuXHRcdHRoaXMucHJvcHMub25Qb2ludHModGhpcy5zdGF0ZS5zZWxlY3RlZCwgJ2QnKTtcblxuXHRcdC8vIERlLXNlbGVjdCB0aGUgY2x1dGNoIGlmIHRoZXJlJ3Mgb25lIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5yZXNldENsdXRjaCgpO1xuXHRcdH1cblxuXHRcdC8vIFR1cm4gb24gdGhlIGFjdGl2ZSBmbGFnXG5cdFx0dGFyZ2V0LmNsYXNzTmFtZSA9ICdkcm9wIGFjdGl2ZSc7XG5cblx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gJ2Ryb3AnO1xuXHRcdH0sIDUwMCk7XG5cdH1cblxuXHRyZXNldENsdXRjaCgpIHtcblxuXHRcdC8vIElmIHRoZSBtb2RlIGlzIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5jbHV0Y2hNb2RlID09ICdzZWxlY3QnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcInNlbGVjdGVkXCI6IGZhbHNlfSk7XG5cdFx0fVxuXHR9XG5cblx0cG9pbnRDbGljayhldikge1xuXG5cdFx0Ly8gU3RvcCBwcm9wYWdhdGlvbiBubyBtYXR0ZXIgd2hhdFxuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhlIGN1cnJlbnQgdGFyZ2V0XG5cdFx0dmFyIHRhcmdldCA9IGV2LmN1cnJlbnRUYXJnZXQ7XG5cblx0XHQvLyBHZXQgdGhlIGNsYXNzIG5hbWVzXG5cdFx0dmFyIGNsYXNzTmFtZXMgPSB0YXJnZXQuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XG5cblx0XHQvLyBJZiBpdCdzIGFscmVhZHkgYWN0aXZlLCBkbyBub3RoaW5nXG5cdFx0aWYoY2xhc3NOYW1lc1sxXSAmJiBjbGFzc05hbWVzWzFdID09ICdhY3RpdmUnKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgY2x1dGNoIHNlbGVjdGVkXG5cdFx0aWYodGhpcy5zdGF0ZS5zZWxlY3RlZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblBvaW50cyh0cnVlLCAwKTtcblx0XHRcdHRoaXMucmVzZXRDbHV0Y2goKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wcm9wcy5vblBvaW50cyhmYWxzZSwgdGFyZ2V0LmRhdGFzZXQudmFsdWUpO1xuXHRcdH1cblxuXHRcdC8vIFR1cm4gb24gdGhlIGFjdGl2ZSBmbGFnXG5cdFx0dGFyZ2V0LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbMF0gKyAnIGFjdGl2ZSc7XG5cblx0XHQvLyBBbmQgc2V0IGEgdGltZW91dCB0byB0dXJuIGl0IG9mZlxuXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHR0YXJnZXQuY2xhc3NOYW1lID0gY2xhc3NOYW1lc1swXTtcblx0XHR9LCA1MDApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib2FyZFwiIGRhdGEtdmFsdWU9ezB9IG9uQ2xpY2s9e3NlbGYucG9pbnRDbGlja30+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtcImNsdXRjaCBsZWZ0XCIgKyAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpfSBvbkNsaWNrPXtzZWxmLmNsdXRjaENsaWNrfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wXCIgb25DbGljaz17c2VsZi5kcm9wQ2xpY2t9PkRST1A8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1wiY2x1dGNoIHJpZ2h0XCIgKyAoc2VsZi5zdGF0ZS5zZWxlY3RlZCA/ICcgc2VsZWN0ZWQnIDogJycpfSBvbkNsaWNrPXtzZWxmLmNsdXRjaENsaWNrfT48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJvbmVcIiBkYXRhLXZhbHVlPXsxfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGhyZWVcIiBkYXRhLXZhbHVlPXszfSBvbkNsaWNrPXtzZWxmLnBvaW50Q2xpY2t9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJmaXZlXCIgZGF0YS12YWx1ZT17NX0gb25DbGljaz17c2VsZi5wb2ludENsaWNrfT48L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG5cblx0c2V0IGNsdXRjaE1vZGUobW9kZSkge1xuXG5cdFx0Ly8gRmlndXJlIG91dCB0aGUgc2VsZWN0ZWQgdmFsdWVcblx0XHR2YXIgc2VsZWN0ZWQgPSBudWxsO1xuXHRcdHN3aXRjaChtb2RlKSB7XG5cdFx0XHRjYXNlICdub25lJzogc2VsZWN0ZWQgPSBmYWxzZTsgYnJlYWs7XG5cdFx0XHRjYXNlICdleHBlY3RlZCc6IHNlbGVjdGVkID0gdHJ1ZTsgYnJlYWs7XG5cdFx0XHRjYXNlICdzZWxlY3QnOiBzZWxlY3RlZCA9IHRoaXMuc3RhdGUuc2VsZWN0ZWQ7IGJyZWFrO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgbmV3IHN0YXRlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImNsdXRjaE1vZGVcIjogbW9kZSxcblx0XHRcdFwic2VsZWN0ZWRcIjogc2VsZWN0ZWRcblx0XHR9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBCb2FyZDtcbiIsIi8qKlxuICogTkFURiBNYXRjaFxuICpcbiAqIE1hbmFnZXMgY3JlYXRpbmcgYW5kIHBsYXlpbmcgYSBzdGFuZGFyZCBOQVRGIG1hdGNoXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvaGFzaC5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG52YXIgVG9vbHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3Rvb2xzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFR3b1dheSA9IHJlcXVpcmUoJy4uLy4uL3R3b3dheS5qcycpO1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMuanMnKTtcblxuLy8gUmVhY3QgY29tcG9uZW50c1xudmFyIEJvYXJkID0gcmVxdWlyZSgnLi9ib2FyZC5qc3gnKTtcbnZhciBPcHBvbmVudCA9IHJlcXVpcmUoJy4uL29wcG9uZW50LmpzeCcpO1xuXG4vLyBNYXRjaCBDb21wb25lbnRcbmNsYXNzIE1hdGNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJiaWdheGVcIjogZmFsc2UsXG5cdFx0XHRcImV4aXN0aW5nXCIgOiBmYWxzZSxcblx0XHRcdFwiZ2FtZXNcIjogZmFsc2UsXG5cdFx0XHRcImlkXCI6IGZhbHNlLFxuXHRcdFx0XCJtYXRjaF9zdGF0ZVwiOiBmYWxzZSxcblx0XHRcdFwibW9kZVwiOiBcIm9wcG9uZW50XCIsXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlcixcblx0XHRcdFwidGhyb3dlcklzXCI6ICcnLFxuXHRcdFx0XCJvcHBvbmVudFwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmV4aXN0aW5nQ29udGludWUgPSB0aGlzLmV4aXN0aW5nQ29udGludWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLmV4aXN0aW5nRGVsZXRlID0gdGhpcy5leGlzdGluZ0RlbGV0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaWRDYWxsYmFjayA9IHRoaXMuaWRDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMubWF0Y2hDYWxsYmFjayA9IHRoaXMubWF0Y2hDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMub3ZlcndyaXRlID0gdGhpcy5vdmVyd3JpdGUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnBvaW50cyA9IHRoaXMucG9pbnRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZXF1ZXN0Q2FsbGJhY2sgPSB0aGlzLnJlcXVlc3RDYWxsYmFjay5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVxdWVzdENhbmNlbCA9IHRoaXMucmVxdWVzdENhbmNlbC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVxdWVzdENyZWF0ZSA9IHRoaXMucmVxdWVzdENyZWF0ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbmluID0gdGhpcy5zaWduaW4uYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25vdXQgPSB0aGlzLnNpZ25vdXQuYmluZCh0aGlzKTtcblx0fVxuXG5cdGNhbGN1bGF0ZU1hdGNoU3RhdGUoZGF0YSkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgc3RhdGVcblx0XHR2YXIgc3RhdGUgPSB7XG5cdFx0XHRcInJvdW5kXCI6IDEsXG5cdFx0XHRcInRocm93XCI6IDFcblx0XHR9O1xuXG5cdFx0Ly8gQXJlIHdlIG9wcG9uZW50IG9yIGluaXRpYXRvclxuXHRcdHZhciB0ID0gKHRoaXMuc3RhdGUudGhyb3dlciA9PSBkYXRhLmluaXRpYXRvcikgPyAnaScgOiAnbyc7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFueSBiaWdheGUgZGF0YSBpdCdzIHNhZmUgdG8gYXNzdW1lIHdlJ3JlIGRvbmUgd2l0aCB0aGVcblx0XHQvL1x0cmVndWxhciBtYXRjaFxuXHRcdGlmKGRhdGEuYmlnYXhlICYmICFUb29scy5lbXB0eShkYXRhLmJpZ2F4ZSkpIHtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBwb2ludHNcblx0XHRcdGlmKGRhdGEuYmlnYXhlLnBvaW50cyAmJiBkYXRhLmJpZ2F4ZS5wb2ludHMubGVuZ3RoKSB7XG5cblx0XHRcdFx0Ly8gU2V0IGJpZ2F4ZSB0byBwb2ludHNcblx0XHRcdFx0c3RhdGUuYmlnYXhlID0gJ3BvaW50cyc7XG5cblx0XHRcdFx0Ly8gU3RlcCB0aHJvdWdoIHRoZSBwb2ludHNcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRhdGEuYmlnYXhlLnBvaW50cy5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBkYXRhLmJpZ2F4ZS5wb2ludHNbaV1bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHN0YXRlLnJvdW5kID0gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSB3ZSdyZSBzdGlsbCBvbiB0YXJnZXRcblx0XHRcdGVsc2Uge1xuXG5cdFx0XHRcdC8vIFNldCBiaWdheGUgdG8gdGFyZ2V0XG5cdFx0XHRcdHN0YXRlLmJpZ2F4ZSA9ICd0YXJnZXQnO1xuXG5cdFx0XHRcdC8vIFN0ZXAgdGhyb3VnaCB0aGUgdGFyZ2V0XG5cdFx0XHRcdGZvcih2YXIgaTsgaSA8IGRhdGEuYmlnYXhlLnRhcmdldC5sZW5ndGg7ICsraSkge1xuXHRcdFx0XHRcdGlmKHR5cGVvZiBkYXRhLmJpZ2F4ZS50YXJnZXRbaV1bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdHN0YXRlLnJvdW5kID0gaTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBFbHNlLCBhc3N1bWUgd2UgYXJlIGluIGdhbWVzXG5cdFx0ZWxzZSB7XG5cblx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCBnYW1lXG5cdFx0XHR2YXIgZyA9IDE7XG5cdFx0XHRmb3IoOyBnIDw9IDM7ICsraSkge1xuXG5cdFx0XHRcdC8vIEFzIGEgc3RyaW5nXG5cdFx0XHRcdHZhciBzRyA9IGcudG9TdHJpbmcoKTtcblxuXHRcdFx0XHQvLyBJZiBpdCBkb2Vzbid0IGV4aXN0XG5cdFx0XHRcdGlmKHR5cGVvZiBkYXRhLmdhbWVzW3NHXSA9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBubyBkYXRhIGZvciB0aGUgdGhyb3dlclxuXHRcdFx0XHRpZih0eXBlb2YgZGF0YS5nYW1lc1tzR11bdF0gPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCByb3VuZFxuXHRcdFx0XHR2YXIgciA9IDE7XG5cdFx0XHRcdGZvcig7IHIgPD0gNTsgKytyKSB7XG5cblx0XHRcdFx0XHQvLyBBcyBhIHN0cmluZ1xuXHRcdFx0XHRcdHZhciBzUiA9IHIudG9TdHJpbmcoKTtcblxuXHRcdFx0XHRcdC8vIElmIGl0IGRvZXNuJ3QgZXhpc3Rcblx0XHRcdFx0XHRpZih0eXBlb2YgZGF0YS5nYW1lc1tzR11bdF1bc1JdID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTdG9yZSB0aGUgcm91bmRcblx0XHRcdFx0c3RhdGUucm91bmQgPSByO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdG9yZSB0aGUgZ2FtZVxuXHRcdFx0c3RhdGUuZ2FtZSA9IGc7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBzdGF0ZVxuXHRcdHJldHVybiBzdGF0ZTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxNb3VudCgpIHtcblxuXHRcdC8vIFRyYWNrIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMuYWRkKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBUcmFjayBJRCBpbiBoYXNoXG5cdFx0SGFzaC53YXRjaCgnaWQnLCB0aGlzLmlkQ2FsbGJhY2spO1xuXG5cdFx0Ly8gSWYgd2UncmUgc2lnbmVkIGluXG5cdFx0aWYodGhpcy5zdGF0ZS50aHJvd2VyKSB7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gSUQgaW4gdGhlIGhhc2hcblx0XHRcdHZhciBpZCA9IEhhc2guZ2V0KCdpZCcpO1xuXHRcdFx0aWYoaWQpIHtcblx0XHRcdFx0dGhpcy5pZENhbGxiYWNrKGlkKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuZXhpc3RpbmdGZXRjaCgpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25vdXQnLCB0aGlzLnNpZ25vdXQpO1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBJRCBpbiBoYXNoIGFuZCByZW1vdmUgaXRcblx0XHRIYXNoLnVud2F0Y2goJ2lkJywgdGhpcy5pZENhbGxiYWNrKTtcblx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblxuXHRcdC8vIElmIHdlJ3JlIGluIHJlcXVlc3QgbW9kZVxuXHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAncmVxdWVzdCcpIHtcblxuXHRcdFx0Ly8gU3RvcCB0cmFja2luZyB0aGUgcmVxdWVzdFxuXHRcdFx0VHdvV2F5LnVudHJhY2soXG5cdFx0XHRcdCdhdXRoJywgJ3JlcXVlc3QtJyArIHRoaXMuc3RhdGUuaWQsXG5cdFx0XHRcdHRoaXMucmVxdWVzdENhbGxiYWNrXG5cdFx0XHQpXG5cdFx0fVxuXG5cdFx0ZWxzZSBpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ21hdGNoJykge1xuXG5cdFx0XHQvLyBTdG9wIHRyYWNraW5nIHRoZSBtYXRjaFxuXHRcdFx0VHdvV2F5LnVudHJhY2soXG5cdFx0XHRcdCduYXRmJywgJ21hdGNoLScgKyB0aGlzLnN0YXRlLmlkLFxuXHRcdFx0XHR0aGlzLm1hdGNoQ2FsbGJhY2tcblx0XHRcdClcblx0XHR9XG5cdH1cblxuXHRleGlzdGluZ0NvbnRpbnVlKGV2KSB7XG5cblx0fVxuXG5cdGV4aXN0aW5nRGVsZXRlKGV2KSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIFN0b3JlIHRoZSBpZFxuXHRcdHZhciBpZCA9IGV2LmN1cnJlbnRUYXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmlkO1xuXG5cdFx0Ly8gTm90aWZ5IHRoZSBzZXJ2aWNlIHRoZSBtYXRjaCB3b24ndCBiZSBjb21wbGV0ZWRcblx0XHRTZXJ2aWNlcy5kZWxldGUoJ25hdGYnLCAnbWF0Y2gnLCB7XG5cdFx0XHRcImlkXCI6IGlkXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlIHRocm93ZXIgY2FuJ3QgZGVsZXRlIHRoYXQgcmVjb3JkLCBvciBpdCdzIGZpbmlzaGVkXG5cdFx0XHRcdGlmKHJlcy5lcnJvci5jb2RlID09IDEwMDApIHtcblx0XHRcdFx0XHRzZWxmLmV4aXN0aW5nUmVtb3ZlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBJZiBpdCdzIGFscmVhZHkgZGVsZXRlZFxuXHRcdFx0XHRlbHNlIGlmKHJlcy5lcnJvci5jb2RlID09IDExMDQpIHtcblx0XHRcdFx0XHRzZWxmLmV4aXN0aW5nUmVtb3ZlKGlkKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBVbmtub3duIGVycm9yXG5cdFx0XHRcdGVsc2Uge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdFx0c2VsZi5leGlzdGluZ1JlbW92ZShpZCk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pXG5cdH1cblxuXHRleGlzdGluZ0ZldGNoKCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGaW5kIG91dCBpZiB0aGVyZSdzIGFueSB1bmZpbmlzaGVkIGdhbWVzIGFzc29jaWF0ZWQgd2l0aCB0aGlzXG5cdFx0Ly9cdHRocm93ZXJcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ21hdGNoL3VuZmluaXNoZWQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUncyBhbnlcblx0XHRcdFx0aWYocmVzLmRhdGEubGVuZ3RoKSB7XG5cblx0XHRcdFx0XHQvLyBTZXQgdGhlIHN0YXRlXG5cdFx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XHRcIm1vZGVcIjogXCJleGlzdGluZ1wiLFxuXHRcdFx0XHRcdFx0XCJleGlzdGluZ1wiOiByZXMuZGF0YVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdGV4aXN0aW5nUmVtb3ZlKGlkKSB7XG5cblx0XHQvLyBTdG9yZSB0aGUgZXhpc3Rpbmdcblx0XHR2YXIgZXhpc3RpbmcgPSBUb29scy5jbG9uZSh0aGlzLnN0YXRlLmV4aXN0aW5nKTtcblxuXHRcdC8vIEdvIHRocm91Z2ggZWFjaCBvbmVcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmcubGVuZ3RoOyArK2kpIHtcblx0XHRcdGlmKGV4aXN0aW5nW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRleGlzdGluZy5zcGxpY2UoaSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgbmV3IHN0YXRlXG5cdFx0dmFyIHN0YXRlID0ge1wiZXhpc3RpbmdcIjogZXhpc3Rpbmd9XG5cblx0XHQvLyBJZiB0aGVyZSdzIG5vIG1vcmUgZXhpc3Rpbmdcblx0XHRpZihleGlzdGluZy5sZW5ndGggPT0gMCkge1xuXHRcdFx0c3RhdGUubW9kZSA9ICdvcHBvbmVudCc7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBuZXcgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHN0YXRlKTtcblx0fVxuXG5cdGlkQ2FsbGJhY2soaWQpIHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gSURcblx0XHRpZihpZCkge1xuXG5cdFx0XHQvLyBTcGxpdCB0aGUgSURcblx0XHRcdGlkID0gaWQuc3BsaXQoJ3wnKTtcblxuXHRcdFx0Ly8gSWYgaXQncyBhIHJlcXVlc3Rcblx0XHRcdGlmKGlkWzBdID09ICdyJykge1xuXG5cdFx0XHRcdC8vIENoYW5nZSB0aGUgbW9kZVxuXHRcdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcImlkXCI6IGlkWzFdLFxuXHRcdFx0XHRcdFwibW9kZVwiOiBcInJlcXVlc3RcIixcblx0XHRcdFx0XHRcIm9wcG9uZW50XCI6IHtcImFsaWFzXCI6IGlkWzJdfVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHQvLyBMaXN0ZW4gZm9yIGFuIHVwZGF0ZSBvbiB0aGUgcmVxdWVzdFxuXHRcdFx0XHRUd29XYXkudHJhY2soXG5cdFx0XHRcdFx0J2F1dGgnLCAncmVxdWVzdC0nICsgaWRbMV0sXG5cdFx0XHRcdFx0dGhpcy5yZXF1ZXN0Q2FsbGJhY2tcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpZiBpdCdzIGEgbWF0Y2hcblx0XHRcdGVsc2UgaWYoaWRbMF0gPT0gJ20nKSB7XG5cblx0XHRcdFx0Ly8gQ2hhbmdlIHRoZSBtb2RlXG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiYmlnYXhlXCI6IGZhbHNlLFxuXHRcdFx0XHRcdFwiZ2FtZXNcIjoge1xuXHRcdFx0XHRcdFx0XCIxXCI6IHt9XG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcImlkXCI6IGlkWzFdLFxuXHRcdFx0XHRcdFwibWF0Y2hTdGF0ZVwiOiB7XG5cdFx0XHRcdFx0XHRcInJvdW5kXCI6IDEsXG5cdFx0XHRcdFx0XHRcInRocm93XCI6IDEsXG5cdFx0XHRcdFx0XHRcImJpZ2F4ZVwiOiBmYWxzZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XCJtb2RlXCI6IFwibWF0Y2hcIixcblx0XHRcdFx0XHRcIm9wcG9uZW50XCI6IHtcImFsaWFzXCI6IGlkWzJdfSxcblx0XHRcdFx0XHRcInRocm93ZXJJc1wiOiBcImlcIlxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdC8vIExpc3QgZm9yIGFuIHVwZGF0ZSBvbiB0aGUgbWF0Y2hcblx0XHRcdFx0VHdvV2F5LnRyYWNrKFxuXHRcdFx0XHRcdCduYXRmJywgJ21hdGNoLScgKyBpZFsxXSxcblx0XHRcdFx0XHR0aGlzLm1hdGNoQ2FsbGJhY2tcblx0XHRcdFx0KVxuXG5cdFx0XHRcdC8vIFNhdmUgdGhpc1xuXHRcdFx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cblx0XHRcdFx0Ly8gRmV0Y2ggdGhlIG1hdGNoXG5cdFx0XHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAnbWF0Y2gnLCB7XG5cdFx0XHRcdFx0XCJpZFwiOiBpZFsxXVxuXHRcdFx0XHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgbWF0Y2ggbm8gbG9uZ2VyIGV4aXN0c1xuXHRcdFx0XHRcdFx0aWYocmVzLmVycm9yLmNvZGUgPT0gMTEwNCkge1xuXHRcdFx0XHRcdFx0XHRIYXNoLnNldCgnaWQnLCBudWxsKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRcdFx0aWYocmVzLmRhdGEpIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3RvcmUgaXQgaW4gdGhlIHN0YXRlXG5cdFx0XHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcblx0XHRcdFx0XHRcdFx0XCJiaWdheGVcIjogcmVzLmRhdGEuYmlnYXhlLFxuXHRcdFx0XHRcdFx0XHRcImdhbWVzXCI6IHJlcy5kYXRhLmdhbWVzLFxuXHRcdFx0XHRcdFx0XHRcIm1hdGNoU3RhdGVcIjogc2VsZi5jYWxjdWxhdGVNYXRjaFN0YXRlKHJlcy5kYXRhKSxcblx0XHRcdFx0XHRcdFx0XCJ0aHJvd2VySXNcIjogcmVzLmRhdGEuaW5pdGlhdG9yID09IHNlbGYuc3RhdGUudGhyb3dlciA/ICdpJyA6ICdvJyxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVsc2UgcmVzZXRcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wibW9kZVwiOiBcIm9wcG9uZW50XCJ9KTtcblx0XHR9XG5cdH1cblxuXHRtYXRjaENhbGxiYWNrKG1zZykge1xuXG5cdFx0Y29uc29sZS5sb2cobXNnKTtcblx0fVxuXG5cdG92ZXJ3cml0ZShldikge1xuXG5cdH1cblxuXHRwb2ludHMoY2x1dGNoLCB2YWx1ZSkge1xuXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdGZcIj5cblx0XHRcdFx0e3RoaXMuc3RhdGUubW9kZSA9PSAnb3Bwb25lbnQnICYmXG5cdFx0XHRcdFx0PE9wcG9uZW50IHRocm93ZXI9e3RoaXMuc3RhdGUudGhyb3dlcn0gb25TZWxlY3Q9e3RoaXMucmVxdWVzdENyZWF0ZX0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tb2RlID09ICdyZXF1ZXN0JyAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PHA+V2FpdGluZyBmb3Ige3NlbGYuc3RhdGUub3Bwb25lbnQuYWxpYXN9IHRvIGFjY2VwdCB5b3VyIG1hdGNoIHJlcXVlc3Q8L3A+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NlbGYucmVxdWVzdENhbmNlbH0+Q2FuY2VsIFJlcXVlc3Q8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5tb2RlID09ICdleGlzdGluZycgJiZcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFjZW50ZXJcIj5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmV4aXN0aW5nLm1hcChmdW5jdGlvbihtLCBpKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBrZXk9e2l9IGRhdGEtaWQ9e20uX2lkfSBjbGFzc05hbWU9XCJleGlzdGluZ1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+WW91IGhhdmUgYW4gZXhpc3RpbmcgbWF0Y2ggd2l0aCB7bS5hbGlhc30sIGRvIHlvdSB3aXNoIHRvIGNvbnRpbnVlPzwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gb25DbGljaz17c2VsZi5leGlzdGluZ0RlbGV0ZX0+RGVsZXRlPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIG9uQ2xpY2s9e3NlbGYuZXhpc3RpbmdDb250aW51ZX0+Q29udGludWU8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHt0aGlzLnN0YXRlLm1vZGUgPT0gJ21hdGNoJyAmJlxuXHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHQ8Qm9hcmQgcmVmPVwiYm9hcmRcIiBjbHV0Y2hNb2RlPVwibm9uZVwiIG9uUG9pbnRzPXtzZWxmLnBvaW50c30gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0fVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlbmRlckJpZ0F4ZSgpIHtcblx0XHRyZXR1cm4gPGRpdiAvPlxuXHR9XG5cblx0cmVuZGVyR2FtZXMoKSB7XG5cdFx0cmV0dXJuIDxkaXYgLz5cblx0fVxuXG5cdHJlbmRlck1hdGNoKCkge1xuXG5cdFx0Ly8gSWYgd2UncmUgaW4gYmlnIGF4ZSBtb2RlXG5cdFx0aWYodGhpcy5zdGF0ZS5iaWdheGUpIHtcblx0XHRcdHJldHVybiB0aGlzLnJlbmRlckJpZ0F4ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5yZW5kZXJHYW1lcygpO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlck92ZXJhbGwoKSB7XG5cdFx0cmV0dXJuIDxkaXYgLz5cblx0fVxuXG5cdHJlcXVlc3RDYWxsYmFjayhtc2cpIHtcblxuXHRcdC8vIElmIHRoZSBtYXRjaCB3YXMgYWNjZXB0ZWRcblx0XHRpZihtc2cudHlwZSA9PSAnYWNjZXB0ZWQnKSB7XG5cdFx0XHRIYXNoLnNldCgnaWQnLCAnbXwnICsgbXNnLm1hdGNoICsgJ3wnICsgdGhpcy5zdGF0ZS5vcHBvbmVudC5hbGlhcylcblx0XHR9XG5cblx0XHQvLyBFbHNlIGlmIGl0IHdhcyByZWplY3RlZFxuXHRcdGVsc2UgaWYobXNnLnR5cGUgPT0gJ3JlamVjdGVkJykge1xuXHRcdFx0dGhpcy5yZXF1ZXN0UmVzZXQoKTtcblx0XHR9XG5cdH1cblxuXHRyZXF1ZXN0Q2FuY2VsKCkge1xuXHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAncmVxdWVzdCcpIHtcblxuXHRcdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0XHQvLyBTaG93IHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5zaG93KCk7XG5cblx0XHRcdC8vIENhbmNlbCB0aGUgbWF0Y2ggcmVxdWVzdFxuXHRcdFx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS5pZFxuXHRcdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXG5cdFx0XHRcdFx0Ly8gSWYgaXQncyBhbHJlYWR5IGRlbGV0ZWRcblx0XHRcdFx0XHRpZihyZXMuZXJyb3IuY29kZSAhPSAxMTA0KSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlcXVlc3RSZXNldCgpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRcdHNlbGYucmVxdWVzdFJlc2V0KCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRcdExvYWRlci5oaWRlKClcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG5cblx0cmVxdWVzdENyZWF0ZShvcHBvbmVudCkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBNYWtlIGEgbWF0Y2ggcmVxdWVzdCBmb3IgdGhpcyBvcHBvbmVudFxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFx0XCJvcHBvbmVudFwiOiBvcHBvbmVudC5faWQsXG5cdFx0XHRcIm9yZ1wiOiBcIk5BVEZcIlxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgaGFzaFxuXHRcdFx0XHRIYXNoLnNldCgnaWQnLCAncnwnICsgcmVzLmRhdGEgKyAnfCcgKyBvcHBvbmVudC5hbGlhcylcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXF1ZXN0UmVzZXQoKSB7XG5cblx0XHQvLyBTdG9wIGxpc3RlbmluZyBmb3IgYW4gdXBkYXRlIG9uIHRoZSByZXF1ZXN0XG5cdFx0VHdvV2F5LnVudHJhY2soXG5cdFx0XHQnYXV0aCcsXG5cdFx0XHQncmVxdWVzdC0nICsgdGhpcy5zdGF0ZS5pZCxcblx0XHRcdHRoaXMucmVxdWVzdENhbGxiYWNrXG5cdFx0KTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgSUQgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdpZCcsIG51bGwpO1xuXG5cdFx0Ly8gQ2hhbmdlIHRoZSBtb2RlXG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcImlkXCI6IGZhbHNlLFxuXHRcdFx0XCJtb2RlXCI6IFwib3Bwb25lbnRcIixcblx0XHRcdFwib3Bwb25lbnRcIjogZmFsc2Vcblx0XHR9KTtcblx0fVxuXG5cblx0c2lnbmluKHRocm93ZXIpIHtcblxuXHRcdC8vIFNldCBzdGF0ZVxuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0aHJvd2VyfSk7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIElEIGluIHRoZSBoYXNoXG5cdFx0dmFyIGlkID0gSGFzaC5nZXQoJ2lkJyk7XG5cdFx0aWYoaWQpIHtcblx0XHRcdHRoaXMuaWRDYWxsYmFjayhpZCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXhpc3RpbmdGZXRjaCgpO1xuXHRcdH1cblx0fVxuXG5cdHNpZ25vdXQoKSB7XG5cblx0XHQvLyBTZXQgc3RhdGVcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblxuXHRcdC8vIFJlbW92ZSB0aGUgSUQgZnJvbSB0aGUgaGFzaFxuXHRcdEhhc2guc2V0KCdpZCcsIG51bGwpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IE1hdGNoO1xuIiwiLyoqXG4gKiBOQVRGIFByYWN0aWNlXG4gKlxuICogTWFuYWdlcyB0cmFja2luZyBhbmQgc3RvcmluZyBwcmFjdGljZSBvbiBhbiBOQVRGIGJvYXJkXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yMFxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi8uLi91dGlscy5qcycpO1xuXG4vLyBSZWFjdCBjb21wb25lbnRzXG52YXIgTW9kYWwgPSByZXF1aXJlKCcuLi9lbGVtZW50cy9tb2RhbC5qc3gnKTtcbnZhciBCb2FyZCA9IHJlcXVpcmUoJy4vYm9hcmQuanN4Jyk7XG5cbi8vIFByYWN0aWNlIENvbXBvbmVudFxuY2xhc3MgUHJhY3RpY2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IDAsXG5cdFx0XHRcImNsdXRjaEhpdHNcIjogMCxcblx0XHRcdFwibW9kZVwiOiBudWxsLFxuXHRcdFx0XCJwb2ludHNcIjogW10sXG5cdFx0XHRcInNob3dQb2ludHNcIjogZmFsc2UsXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlcixcblx0XHRcdFwidG90YWxQb2ludHNcIjogMFxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm1vZGVTZWxlY3QgPSB0aGlzLm1vZGVTZWxlY3QuYmluZCh0aGlzKTtcblx0XHR0aGlzLm92ZXJ3cml0ZSA9IHRoaXMub3ZlcndyaXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wb2ludHMgPSB0aGlzLnBvaW50cy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9pbnRzSGlkZSA9IHRoaXMucG9pbnRzSGlkZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucG9pbnRzU2hvdyA9IHRoaXMucG9pbnRzU2hvdy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMucmVzZXQgPSB0aGlzLnJlc2V0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaWduaW4gPSB0aGlzLnNpZ25pbi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2lnbm91dCA9IHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbE1vdW50KCkge1xuXG5cdFx0Ly8gVHJhY2sgYW55IHNpZ25pbi9zaWdub3V0IGV2ZW50c1xuXHRcdEV2ZW50cy5hZGQoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0XHRFdmVudHMuYWRkKCdzaWdub3V0JywgdGhpcy5zaWdub3V0KTtcblxuXHRcdC8vIElmIHdlIGhhdmUgZGF0YSBpbiBsb2NhbCBzdG9yYWdlXG5cdFx0aWYoJ25hdGZfcHJhY3RpY2UnIGluIGxvY2FsU3RvcmFnZSkge1xuXHRcdFx0dmFyIG5ld19zdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlWyduYXRmX3ByYWN0aWNlJ10pO1xuXHRcdFx0bmV3X3N0YXRlLnRocm93ZXIgPSB0aGlzLnN0YXRlLnRocm93ZXI7XG5cdFx0XHR0aGlzLnNldFN0YXRlKG5ld19zdGF0ZSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3VwZXJuYXR1cmFsJykge1xuXHRcdFx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCAlIDUgPT0gNCkge1xuXHRcdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnZXhwZWN0ZWQnO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ2NsdXRjaCcpIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnc2VsZWN0Jztcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0XHRkZWxldGUgbG9jYWxTdG9yYWdlWyduYXRmX3ByYWN0aWNlJ107XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVubW91bnQoKSB7XG5cblx0XHQvLyBTdG9wIHRyYWNraW5nIGFueSBzaWduaW4vc2lnbm91dCBldmVudHNcblx0XHRFdmVudHMucmVtb3ZlKCdzaWduaW4nLCB0aGlzLnNpZ25pbik7XG5cdFx0RXZlbnRzLnJlbW92ZSgnc2lnbm91dCcsIHRoaXMuc2lnbm91dCk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHBvaW50cywgc3RvcmUgdGhlbSBpbiBsb2NhbCBzdG9yYWdlXG5cdFx0aWYodGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoKSB7XG5cdFx0XHRsb2NhbFN0b3JhZ2VbJ25hdGZfcHJhY3RpY2UnXSA9IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUpO1xuXHRcdH1cblx0fVxuXG5cdG1vZGVTZWxlY3QoZXYpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFwibW9kZVwiOiBldi5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubW9kZVxuXHRcdH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0c3dpdGNoKHRoaXMuc3RhdGUubW9kZSkge1xuXHRcdFx0XHRjYXNlICdmcmVlJzpcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnOyBicmVhaztcblx0XHRcdFx0Y2FzZSAnc3VwZXJuYXR1cmFsJzpcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdub25lJzsgYnJlYWs7XG5cdFx0XHRcdGNhc2UgJ2NsdXRjaCc6XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnZXhwZWN0ZWQnOyBicmVhaztcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdG92ZXJ3cml0ZShldikge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wib3ZlcndyaXRlXCI6IHRydWV9LCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSWYgdGhlIG1vZGUgaXMgZnJlZVxuXHRcdFx0aWYodGhpcy5zdGF0ZS5tb2RlID09ICdmcmVlJykge1xuXHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdzZWxlY3QnO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBFbHNlIGlmIHRoZSBtb2RlIGlzIHN1cGVybmF0dXJhbFxuXHRcdFx0ZWxzZSBpZih0aGlzLnN0YXRlLm1vZGUgPT0gJ3N1cGVybmF0dXJhbCcpIHtcblxuXHRcdFx0XHQvLyBJZiB3ZSdyZSBkaXZpc2libGUgYnkgNVxuXHRcdFx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggJSA1ID09IDApIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHBvaW50cyhjbHV0Y2gsIHZhbHVlKSB7XG5cblx0XHQvLyBHZXQgdGhlIGludCB2ZXJzaW9uIG9mIHRoZSB2YWx1ZVxuXHRcdHZhciB2ID0gcGFyc2VJbnQodmFsdWUpO1xuXG5cdFx0Ly8gSWYgdGhlIG92ZXJ3cml0ZSBmbGFnIGlzIHNldFxuXHRcdGlmKHRoaXMuc3RhdGUub3ZlcndyaXRlKSB7XG5cblx0XHRcdC8vIEdyYWIgdGhlIGxhc3QgdmFsdWVcblx0XHRcdHZhciBsYXN0ID0gdGhpcy5zdGF0ZS5wb2ludHNbdGhpcy5zdGF0ZS5wb2ludHMubGVuZ3RoLTFdO1xuXG5cdFx0XHQvLyBCYWNrdHJhY2sgdGhlIGNsdXRjaCBzdGF0c1xuXHRcdFx0aWYobGFzdFswXSkge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmNsdXRjaEF0dGVtcHRzIC09IDE7XG5cdFx0XHRcdGlmKGxhc3RbMV0gPT0gNykge1xuXHRcdFx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoSGl0cyAtPSAxO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEJhY2t0cmFjayB0aGUgcG9pbnRzIHN0YXRzXG5cdFx0XHRpZihsYXN0WzFdICE9ICdkJykge1xuXHRcdFx0XHR0aGlzLnN0YXRlLnRvdGFsUG9pbnRzIC09IGxhc3RbMV07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSB0aGUgbGFzdCBpdGVtXG5cdFx0XHR0aGlzLnN0YXRlLnBvaW50cy5wb3AoKTtcblx0XHR9XG5cblx0XHQvLyBBZGQgdG8gdGhlIHBvaW50cyBsaXN0XG5cdFx0dGhpcy5zdGF0ZS5wb2ludHMucHVzaChbY2x1dGNoLCAodmFsdWUgPT0gJ2QnID8gdmFsdWUgOiB2KV0pO1xuXG5cdFx0Ly8gSWYgd2UgZ290IGEgY2x1dGNoIGF0dGVtcHRcblx0XHRpZihjbHV0Y2gpIHtcblx0XHRcdHRoaXMuc3RhdGUuY2x1dGNoQXR0ZW1wdHMgKz0gMTtcblx0XHRcdGlmKHZhbHVlID09IDcpIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5jbHV0Y2hIaXRzICs9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ290IGEgdmFsdWVcblx0XHRpZih2ID4gMCkge1xuXHRcdFx0dGhpcy5zdGF0ZS50b3RhbFBvaW50cyArPSB2O1xuXHRcdH1cblxuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XCJjbHV0Y2hBdHRlbXB0c1wiOiB0aGlzLnN0YXRlLmNsdXRjaEF0dGVtcHRzLFxuXHRcdFx0XCJjbHV0Y2hIaXRzXCI6IHRoaXMuc3RhdGUuY2x1dGNoSGl0cyxcblx0XHRcdFwib3ZlcndyaXRlXCI6IGZhbHNlLFxuXHRcdFx0XCJwb2ludHNcIjogdGhpcy5zdGF0ZS5wb2ludHMsXG5cdFx0XHRcInRvdGFsUG9pbnRzXCI6IHRoaXMuc3RhdGUudG90YWxQb2ludHNcblx0XHR9LCBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMuc3RhdGUubW9kZSA9PSAnc3VwZXJuYXR1cmFsJykge1xuXHRcdFx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggJSA1ID09IDQpIHtcblx0XHRcdFx0XHR0aGlzLnJlZnMuYm9hcmQuY2x1dGNoTW9kZSA9ICdleHBlY3RlZCc7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5yZWZzLmJvYXJkLmNsdXRjaE1vZGUgPSAnbm9uZSc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdHBvaW50c0hpZGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJzaG93UG9pbnRzXCI6IGZhbHNlfSk7XG5cdH1cblxuXHRwb2ludHNTaG93KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1wic2hvd1BvaW50c1wiOiB0cnVlfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gSWYgd2UgaGF2ZSBwb2ludHNcblx0XHRpZih0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGgpIHtcblxuXHRcdFx0Ly8gSW5pdCB0aGUgbGFzdCBpbmRleFxuXHRcdFx0dmFyIGxhc3QgPSAyODtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSBsZXNzIHRoYW4gMjlcblx0XHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCA8IDI5KSB7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggLSAxO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5hdGZcIj5cblx0XHRcdFx0PGRsIGNsYXNzTmFtZT1cInNlbGVjdFwiIHN0eWxlPXt7XCJkaXNwbGF5XCI6IHNlbGYuc3RhdGUubW9kZSA9PSBudWxsID8gJ2Jsb2NrJzonbm9uZSd9fT5cblx0XHRcdFx0XHQ8ZHQgZGF0YS1tb2RlPVwiZnJlZVwiIG9uQ2xpY2s9e3RoaXMubW9kZVNlbGVjdH0+RnJlZSBQcmFjdGljZTwvZHQ+XG5cdFx0XHRcdFx0PGRkPkluIGZyZWUgcHJhY3RpY2UgYW55IHBvaW50cyBhcmUgYXZhaWxhYmxlIGF0IGFueSB0aW1lLiBZb3UgbXVzdCBzZWxlY3QgdGhlIGNsdXRjaCBmaXJzdCBpZiB5b3Ugd2lzaCB0byB0cnkgZm9yIGl0LjwvZGQ+XG5cdFx0XHRcdFx0PGR0IGRhdGEtbW9kZT1cInN1cGVybmF0dXJhbFwiIG9uQ2xpY2s9e3RoaXMubW9kZVNlbGVjdH0+U3VwZXJuYXR1cmFsPC9kdD5cblx0XHRcdFx0XHQ8ZGQ+SW4gc3VwZXJuYXR1cmFsIHByYWN0aWNlIGV2ZXJ5IGZpZnRoIHRocm93IGlzIGZvciBjbHV0Y2gsIGFuZCBpdCB3aWxsIGJlIHByZS1zZWxlY3RlZCBmb3IgeW91IG9uIHRob3NlIHR1cm5zLjwvZGQ+XG5cdFx0XHRcdFx0PGR0IGRhdGEtbW9kZT1cImNsdXRjaFwiIG9uQ2xpY2s9e3RoaXMubW9kZVNlbGVjdH0+Q2x1dGNoPC9kdD5cblx0XHRcdFx0XHQ8ZGQ+SW4gY2x1dGNoIHByYWN0aWNlIGV2ZXJ5IHRocm93IGlzIGZvciB0aGUgY2x1dGNoLCBhbmQgaXQgd2lsbCBiZSBwcmUtc2VsZWN0ZWQgZXZlcnkgdHVybi48L2RkPlxuXHRcdFx0XHQ8L2RsPlxuXHRcdFx0XHQ8ZGl2IHN0eWxlPXt7XCJkaXNwbGF5XCI6IHNlbGYuc3RhdGUubW9kZSA9PSBudWxsID8gJ25vbmUnOidibG9jayd9fT5cblx0XHRcdFx0XHQ8Qm9hcmQgcmVmPVwiYm9hcmRcIiBjbHV0Y2hNb2RlPXtzZWxmLnN0YXRlLm1vZGV9IG9uUG9pbnRzPXtzZWxmLnBvaW50c30gLz5cblx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImF2ZXJhZ2VzXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY2x1dGNoZXMgZnJpZ2h0XCI+PGI+Q2x1dGNoICU6IDwvYj48c3Bhbj57c2VsZi5zdGF0ZS5jbHV0Y2hBdHRlbXB0cyA9PSAwID8gXCIwLjBcIiA6ICgoc2VsZi5zdGF0ZS5jbHV0Y2hIaXRzIC8gc2VsZi5zdGF0ZS5jbHV0Y2hBdHRlbXB0cykgKiAxMDAuMCkudG9GaXhlZCgxKX08L3NwYW4+PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImF2ZXJhZ2UgZmxlZnRcIj48Yj5BdmcgVGhyb3c6IDwvYj48c3Bhbj57KHNlbGYuc3RhdGUudG90YWxQb2ludHMgLyBzZWxmLnN0YXRlLnBvaW50cy5sZW5ndGgpLnRvRml4ZWQoMil9PC9zcGFuPjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8YnIgLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9pbnRzXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLmxlbmd0aCA+IDI5ICYmXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBrZXk9ey0xfSBjbGFzc05hbWU9XCJsaW5rIGJvbGRcIiBvbkNsaWNrPXtzZWxmLnBvaW50c1Nob3d9Pi4uLjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucG9pbnRzLnNsaWNlKC0yOSkubWFwKGZ1bmN0aW9uKHAsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGkgPT0gbGFzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e1wibGFzdCBcIiArIChzZWxmLnN0YXRlLm92ZXJ3cml0ZSA/ICdvdmVyd3JpdGUnIDogKHBbMF0gPyAnY2x1dGNoJyA6ICcnKSl9IG9uQ2xpY2s9e3NlbGYub3ZlcndyaXRlfT57cFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3BbMF0gPyAnY2x1dGNoJzonJ30+e3BbMV19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicmVzZXQgZnJpZ2h0XCIgb25DbGljaz17c2VsZi5yZXNldH0+UmVzZXQ8L2Rpdj5cblx0XHRcdFx0XHR7KHRoaXMuc3RhdGUudGhyb3dlciAmJiB0aGlzLnN0YXRlLnBvaW50cy5sZW5ndGggPiAwKSAmJlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzYXZlIGZsZWZ0XCIgb25DbGljaz17c2VsZi5zYXZlfT5TYXZlICYgUmVzZXQ8L2Rpdj5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0e3NlbGYuc3RhdGUuc2hvd1BvaW50cyAmJlxuXHRcdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHRcdHRpdGxlPVwiQWxsIHBvaW50cyB0aGlzIHByYWN0aWNlXCJcblx0XHRcdFx0XHRcdFx0Y2xvc2U9e3NlbGYucG9pbnRzSGlkZX1cblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhbGxQb2ludHNcIj5cblx0XHRcdFx0XHRcdFx0XHR7c2VsZi5zdGF0ZS5wb2ludHMubWFwKGZ1bmN0aW9uKHAsIGkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiA8c3BhbiBrZXk9e2l9IGNsYXNzTmFtZT17cFswXSA/ICdjbHV0Y2gnOicnfT57cFsxXX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHJlc2V0KCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmVzZXQgZmxhZ1xuXHRcdHZhciByZXNldCA9IHRydWU7XG5cblx0XHQvLyBJZiB0aGVyZSdzIHBvaW50c1xuXHRcdGlmKHRoaXMuc3RhdGUucG9pbnRzLmxlbmd0aCkge1xuXHRcdFx0Ly8gVXBkYXRlIHRoZSBmbGFnIGJhc2VkIG9uIHRoZSB1c2VyJ3MgcmVzcG9uc2Vcblx0XHRcdHJlc2V0ID0gY29uZmlybSgnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlc2V0IHlvdXIgcHJhY3RpY2U/Jyk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgY2FuIHJlc2V0XG5cdFx0aWYocmVzZXQpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcImNsdXRjaEF0dGVtcHRzXCI6IDAsXG5cdFx0XHRcdFwiY2x1dGNoSGl0c1wiOiAwLFxuXHRcdFx0XHRcIm1vZGVcIjogbnVsbCxcblx0XHRcdFx0XCJwb2ludHNcIjogW10sXG5cdFx0XHRcdFwic2hvd1BvaW50c1wiOiBmYWxzZSxcblx0XHRcdFx0XCJ0b3RhbFBvaW50c1wiOiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRzYXZlKGV2KSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyBsb2FkZXJcblx0XHRMb2FkZXIuc2hvdygpO1xuXG5cdFx0Ly8gU2VuZCB0aGUgcHJhY3RpY2UgdG8gdGhlIE5BVEYgc2VydmljZVxuXHRcdFNlcnZpY2VzLmNyZWF0ZSgnbmF0ZicsICdwcmFjdGljZScsIHtcblx0XHRcdFwicG9pbnRzXCI6IHRoaXMuc3RhdGUucG9pbnRzXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gTm90aWZ5XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdzdWNjZXNzJywgJ1ByYWN0aWNlIHNhdmVkIScpO1xuXG5cdFx0XHRcdC8vIFJlc2V0XG5cdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0XHRcdFwiY2x1dGNoQXR0ZW1wdHNcIjogMCxcblx0XHRcdFx0XHRcImNsdXRjaEhpdHNcIjogMCxcblx0XHRcdFx0XHRcIm1vZGVcIjogbnVsbCxcblx0XHRcdFx0XHRcInBvaW50c1wiOiBbXSxcblx0XHRcdFx0XHRcInNob3dQb2ludHNcIjogZmFsc2UsXG5cdFx0XHRcdFx0XCJ0b3RhbFBvaW50c1wiOiAwXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0c2lnbmluKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiB0cnVlfSk7XG5cdH1cblxuXHRzaWdub3V0KCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1widGhyb3dlclwiOiBmYWxzZX0pO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFByYWN0aWNlO1xuIiwiLyoqXG4gKiBOQVRGIFN0YXRzXG4gKlxuICogRmV0Y2hzIGFuZCBkaXNwbGF5cyBOQVRGIHN0YXRzIGZvciBwcmFjdGljZSBhbmQgbWF0Y2hlc1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjVcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4uLy4uL2dlbmVyaWMvbG9hZGVyLmpzJyk7XG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuLi8uLi9nZW5lcmljL3NlcnZpY2VzLmpzJyk7XG5cbi8vIFNpdGUgbW9kdWxlc1xudmFyIFV0aWxzID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMuanMnKTtcblxuLy8gQ29tcG9uZW50c1xudmFyIE1vZGFsID0gcmVxdWlyZSgnLi4vZWxlbWVudHMvbW9kYWwuanN4Jyk7XG5cbi8vIFN0YXRzIGNvbXBvbmVudFxuY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm1hdGNoXCI6IG51bGwsXG5cdFx0XHRcInByYWN0aWNlXCI6IG51bGwsXG5cdFx0XHRcInByYWN0aWNlX2FsbFwiOiBmYWxzZSxcblx0XHRcdFwicHJhY3RpY2VfZGF0YVwiOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm1hdGNoU3RhdHMgPSB0aGlzLm1hdGNoU3RhdHMuYmluZCh0aGlzKTtcblx0XHR0aGlzLnByYWN0aWNlRGF0YSA9IHRoaXMucHJhY3RpY2VEYXRhLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZURhdGFIaWRlID0gdGhpcy5wcmFjdGljZURhdGFIaWRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzID0gdGhpcy5wcmFjdGljZVN0YXRzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5wcmFjdGljZVN0YXRzQWxsID0gdGhpcy5wcmFjdGljZVN0YXRzQWxsLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2Ugc3RhdHNcblx0XHR0aGlzLnByYWN0aWNlU3RhdHMoKTtcblxuXHRcdC8vIEZldGNoIHRoZSBtYXRjaCBzdGF0c1xuXHRcdC8vdGhpcy5tYXRjaFN0YXRzKCk7XG5cdH1cblxuXHRtYXRjaFN0YXRzKCkge1xuXG5cdFx0Ly8gU2F2ZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIEZldGNoIHRoZSBtYXRjaCBzdGF0c1xuXHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAnbWF0Y2gvc3RhdHMnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBzdGF0cyB0byB0aGUgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJtYXRjaFwiOiByZXMuZGF0YVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRwcmFjdGljZURhdGEoZXYpIHtcblxuXHRcdC8vIFNhdmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2UgZGF0YVxuXHRcdFNlcnZpY2VzLnJlYWQoJ25hdGYnLCAncHJhY3RpY2UvZGF0YScsIHtcblx0XHRcdFwiaWRcIjogZXYuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBzdGF0cyB0byB0aGUgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJwcmFjdGljZV9kYXRhXCI6IHJlcy5kYXRhXG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHByYWN0aWNlRGF0YUhpZGUoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJwcmFjdGljZV9kYXRhXCI6IGZhbHNlfSk7XG5cdH1cblxuXHRwcmFjdGljZVN0YXRzKGFsbCkge1xuXG5cdFx0Ly8gSWYgQWxsIGlzIG5vdCBwYXNzZWRcblx0XHRpZih0eXBlb2YgYWxsID09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHRhbGwgPSBmYWxzZVxuXHRcdH1cblxuXHRcdC8vIFNhdmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBGZXRjaCB0aGUgcHJhY3RpY2Ugc3RhdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCduYXRmJywgJ3ByYWN0aWNlL3N0YXRzJywge1xuXHRcdFx0XCJhbGxcIjogYWxsXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gQWRkIHRoZSBzdGF0cyB0byB0aGUgc3RhdGVcblx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdFx0XCJwcmFjdGljZVwiOiByZXMuZGF0YSxcblx0XHRcdFx0XHRcInByYWN0aWNlX2FsbFwiOiBhbGxcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cHJhY3RpY2VTdGF0c0FsbCgpIHtcblx0XHR0aGlzLnByYWN0aWNlU3RhdHModHJ1ZSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHZhciBwcmFjdGljZSA9IHRoaXMuc3RhdGUucHJhY3RpY2U7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmF0ZlwiPlxuXHRcdFx0XHR7dGhpcy5zdGF0ZS5wcmFjdGljZSAmJlxuXHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHRcdDxoMj5QcmFjdGljZTwvaDI+XG5cdFx0XHRcdFx0XHQ8dGFibGUgY2xhc3NOYW1lPVwicHJhY3RpY2VcIj5cblx0XHRcdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cImRhdGVcIj4gPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCByb3dTcGFuPVwiMlwiIGNsYXNzTmFtZT1cInBvaW50c1wiPlBvaW50czwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggcm93U3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJ0aHJvd3NcIj5UaHJvd3M8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIHJvd1NwYW49XCIyXCIgY2xhc3NOYW1lPVwiZHJvcHNcIj5Ecm9wczwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj1cIjJcIj5BdmVyYWdlIFBvaW50czwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY29sU3Bhbj1cIjNcIj5IaXQgUmF0ZXM8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cImF2ZXJhZ2VcIj5Ub3RhbDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwiYXZlcmFnZVwiPlRhcmdldDwvdGg+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwicmF0ZVwiPlRvdGFsPC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJyYXRlXCI+VGFyZ2V0PC90aD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJyYXRlXCI+Q2x1dGNoPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPk92ZXJhbGw8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5wb2ludHMudG90YWx9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57cHJhY3RpY2UudG90YWwudGhyb3dzLmF0dGVtcHRzfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnRocm93cy5kcm9wc308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5hdmVyYWdlLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLmF2ZXJhZ2UudGFyZ2V0fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnJhdGUudG90YWx9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e3ByYWN0aWNlLnRvdGFsLnJhdGUudGFyZ2V0fSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHRkPntwcmFjdGljZS50b3RhbC5yYXRlLmNsdXRjaH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdFx0XHRcdHtwcmFjdGljZS5sYXN0Lm1hcChmdW5jdGlvbihvLCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8dHIga2V5PXtpfSBkYXRhLWlkPXtvLl9pZH0gY2xhc3NOYW1lPVwic2Vzc2lvblwiIG9uQ2xpY2s9e3NlbGYucHJhY3RpY2VEYXRhfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e1V0aWxzLmRhdGUoby5fY3JlYXRlZCl9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucG9pbnRzLnRvdGFsfTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHRkPntvLnRocm93cy5hdHRlbXB0c308L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by50aHJvd3MuZHJvcHN9PC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28uYXZlcmFnZS50b3RhbH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5hdmVyYWdlLnRhcmdldH08L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5yYXRlLnRvdGFsfSU8L3RkPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx0ZD57by5yYXRlLnRhcmdldH0lPC90ZD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dGQ+e28ucmF0ZS5jbHV0Y2h9JTwvdGQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHRcdFx0PC90YWJsZT5cblx0XHRcdFx0XHRcdHshdGhpcy5zdGF0ZS5wcmFjdGljZV9hbGwgJiZcblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibGlua1wiIG9uQ2xpY2s9e3RoaXMucHJhY3RpY2VTdGF0c0FsbH0+RmV0Y2ggQWxsPC9wPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0e3RoaXMuc3RhdGUucHJhY3RpY2VfZGF0YSAmJlxuXHRcdFx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIlByYWN0aWNlIERhdGFcIlxuXHRcdFx0XHRcdFx0XHRcdGNsb3NlPXtzZWxmLnByYWN0aWNlRGF0YUhpZGV9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsbFBvaW50c1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3NlbGYuc3RhdGUucHJhY3RpY2VfZGF0YS5tYXAoZnVuY3Rpb24ocCwgaSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gPHNwYW4ga2V5PXtpfSBjbGFzc05hbWU9e3BbMF0gPyAnY2x1dGNoJzonJ30+e1wiXCIgKyBwWzFdfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3RoaXMuc3RhdGUubWF0Y2ggJiZcblx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQ+XG5cblx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHR9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRzO1xuIiwiLyoqXG4gKiBPcHBvbmVudFxuICpcbiAqIEEgY29tcG9uZW50IGZvciBzZWxlY3RpbmcgYW4gb3Bwb25lbnQgdmlhIGZhdm91cml0ZXMgb3Igc2VhcmNoXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yN1xuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgTG9hZGVyID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvc2VydmljZXMuanMnKTtcblxuLy8gU2l0ZSBtb2R1bGVzXG52YXIgVXRpbHMgPSByZXF1aXJlKCcuLi91dGlscy5qcycpO1xuXG4vLyBFbGVtZW50c1xudmFyIElucHV0RW50ZXIgPSByZXF1aXJlKFwiLi9lbGVtZW50cy9pbnB1dEVudGVyLmpzeFwiKTtcblxuLy8gU29ydCBmYXZvdXJpdGVzXG5mdW5jdGlvbiBhbGlhc1NvcnQoYSwgYikge1xuXHRyZXR1cm4gYS5hbGlhcy5sb2NhbGVDb21wYXJlKGIuYWxpYXMpO1xufVxuXG5jbGFzcyBPcHBvbmVudFJvdyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblxuXHRcdC8vIENhbGwgdGhlIHBhcmVudCBjb25zdHJ1Y3RvclxuXHRcdHN1cGVyKHByb3BzKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwiZmF2b3VyaXRlXCI6IHByb3BzLmZhdm91cml0ZSxcblx0XHRcdFwidGhyb3dlclwiOiBwcm9wcy50aHJvd2VyXG5cdFx0fVxuXG5cdFx0Ly8gQmluZCBtZXRob2Rcblx0XHR0aGlzLmFkZCA9IHRoaXMuYWRkLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5yZW1vdmUgPSB0aGlzLnJlbW92ZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGVkLmJpbmQodGhpcyk7XG5cdH1cblxuXHRhZGQoKSB7XG5cblx0XHQvLyBTdG9wIGFueSBmdXJ0aGVyIGV2ZW50c1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGFkZCB0aGUgZmF2b3VyaXRlXG5cdFx0U2VydmljZXMuY3JlYXRlKCdhdXRoJywgJ2Zhdm91cml0ZScsIHtcblx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS50aHJvd2VyLl9pZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcImZhdm91cml0ZVwiOiB0cnVlfSk7XG5cdFx0XHR9XG5cblx0XHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdFx0Ly8gSGlkZSB0aGUgbG9hZGVyXG5cdFx0XHRMb2FkZXIuaGlkZSgpO1xuXHRcdH0pO1xuXHR9XG5cblx0cmVtb3ZlKGV2KSB7XG5cblx0XHQvLyBTdG9wIGFueSBmdXJ0aGVyIGV2ZW50c1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGFkZCB0aGUgZmF2b3VyaXRlXG5cdFx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ2Zhdm91cml0ZScsIHtcblx0XHRcdFwiaWRcIjogdGhpcy5zdGF0ZS50aHJvd2VyLl9pZFxuXHRcdH0pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXHRcdFx0XHRzZWxmLnNldFN0YXRlKHtcImZhdm91cml0ZVwiOiBmYWxzZX0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PHRyIG9uQ2xpY2s9e3RoaXMuc2VsZWN0ZWR9PlxuXHRcdFx0XHQ8dGQ+e3RoaXMuc3RhdGUudGhyb3dlci5hbGlhc308L3RkPlxuXHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0e3RoaXMuc3RhdGUuZmF2b3VyaXRlID9cblx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cImZhcyBmYS11c2VyLXRpbWVzXCIgc3R5bGU9e3tjb2xvcjogXCJyZWRcIn19IG9uQ2xpY2s9e3RoaXMucmVtb3ZlfT48L2k+XG5cdFx0XHRcdFx0OlxuXHRcdFx0XHRcdFx0PGkgY2xhc3NOYW1lPVwiZmFzIGZhLXVzZXItcGx1c1wiIHN0eWxlPXt7Y29sb3I6IFwiZ3JlZW5cIn19IG9uQ2xpY2s9e3RoaXMuYWRkfT48L2k+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3RkPlxuXHRcdFx0PC90cj5cblx0XHQpXG5cdH1cblxuXHRzZWxlY3RlZChldikge1xuXHRcdGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdHRoaXMucHJvcHMuc2VsZWN0ZWQodGhpcy5zdGF0ZS50aHJvd2VyKTtcblx0fVxufVxuXG4vLyBPcHBvbmVudCBDb21wb25lbnRcbmNsYXNzIE9wcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJmYXZvdXJpdGVzXCI6IFtdLFxuXHRcdFx0XCJtb2RlXCI6IFwiZmF2b3VyaXRlc1wiLFxuXHRcdFx0XCJzZWFyY2hcIjogW10sXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlclxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLmZhdm91cml0ZVNob3cgPSB0aGlzLmZhdm91cml0ZVNob3cuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNlYXJjaCA9IHRoaXMuc2VhcmNoLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWFyY2hTaG93ID0gdGhpcy5zZWFyY2hTaG93LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWQuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNpZ25pbiA9IHRoaXMuc2lnbmluLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4pO1xuXG5cdFx0Ly8gSWYgc29tZW9uZSBpcyBsb2dnZWQgaW5cblx0XHRpZih0aGlzLnN0YXRlLnRocm93ZXIpIHtcblx0XHRcdHRoaXMuZmF2b3VyaXRlcygpO1xuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXHRcdEV2ZW50cy5yZW1vdmUoJ3NpZ25pbicsIHRoaXMuc2lnbmluKTtcblx0fVxuXG5cdGZhdm91cml0ZXMoKSB7XG5cblx0XHQvLyBTdG9yZSB0aGlzXG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gU2hvdyB0aGUgbG9hZGVyXG5cdFx0TG9hZGVyLnNob3coKTtcblxuXHRcdC8vIENhbGwgdGhlIHNlcnZpY2UgdG8gZ2V0IHRoZSBmYXZvdXJpdGVzXG5cdFx0U2VydmljZXMucmVhZCgnYXV0aCcsICdmYXZvdXJpdGVzJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHRcdC8vIFNvcnQgdGhlIGRhdGFcblx0XHRcdFx0cmVzLmRhdGEuc29ydChhbGlhc1NvcnQpO1xuXG5cdFx0XHRcdC8vIFN0b3JlIHRoZSBmYXZvdXJpdGVzXG5cdFx0XHRcdHNlbGYuc2V0U3RhdGUoe1wiZmF2b3VyaXRlc1wiOiByZXMuZGF0YX0pO1xuXHRcdFx0fVxuXG5cdFx0fSkuYWx3YXlzKCgpID0+IHtcblx0XHRcdC8vIEhpZGUgdGhlIGxvYWRlclxuXHRcdFx0TG9hZGVyLmhpZGUoKTtcblx0XHR9KTtcblx0fVxuXG5cdGZhdm91cml0ZVNob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RlXCI6IFwiZmF2b3VyaXRlc1wifSlcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxSZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0e3NlbGYuc3RhdGUubW9kZSA9PSAnZmF2b3VyaXRlcycgP1xuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj5GYXZvcml0ZXM8L3NwYW4+IHwgPHNwYW4gY2xhc3NOYW1lPVwibGlua1wiIG9uQ2xpY2s9e3NlbGYuc2VhcmNoU2hvd30+U2VhcmNoPC9zcGFuPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ6XG5cdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJhY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImxpbmtcIiBvbkNsaWNrPXtzZWxmLmZhdm91cml0ZVNob3d9PkZhdm9yaXRlczwvc3Bhbj4gfCA8c3Bhbj5TZWFyY2g8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZm9ybVwiPlxuXHRcdFx0XHRcdFx0XHQ8cD48SW5wdXRFbnRlciBvbkVudGVyPXtzZWxmLnNlYXJjaH0gcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgYWxpYXNcIiAvPjwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdH1cblx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0cj48dGg+QWxpYXM8L3RoPjx0aD5GYXZvcml0ZTwvdGg+PC90cj5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm1vZGUgPT0gJ2Zhdm91cml0ZXMnID9cblx0XHRcdFx0XHRcdFx0c2VsZi5zdGF0ZS5mYXZvdXJpdGVzLm1hcChmdW5jdGlvbih0LCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxPcHBvbmVudFJvdyBrZXk9e2l9IHRocm93ZXI9e3R9IGZhdm91cml0ZT17dHJ1ZX0gc2VsZWN0ZWQ9e3NlbGYuc2VsZWN0ZWR9IC8+XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHQ6XG5cdFx0XHRcdFx0XHRcdHNlbGYuc3RhdGUuc2VhcmNoLm1hcChmdW5jdGlvbih0LCBpKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDxPcHBvbmVudFJvdyBrZXk9e2l9IHRocm93ZXI9e3R9IGZhdm91cml0ZT17ZmFsc2V9IHNlbGVjdGVkPXtzZWxmLnNlbGVjdGVkfSAvPlxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdCk7XG5cdH1cblxuXHRzZWFyY2gocSkge1xuXG5cdFx0Ly8gU3RvcmUgdGhpc1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFNob3cgdGhlIGxvYWRlclxuXHRcdExvYWRlci5zaG93KCk7XG5cblx0XHQvLyBDYWxsIHRoZSBzZXJ2aWNlIHRvIGdldCB0aGUgc2VhcmNoIHJlc3VsdHNcblx0XHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ3NlYXJjaCcsIHtcblx0XHRcdFwicVwiOiBxXG5cdFx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdFx0Ly8gU29ydCB0aGUgZGF0YVxuXHRcdFx0XHRyZXMuZGF0YS5zb3J0KGFsaWFzU29ydCk7XG5cblx0XHRcdFx0Ly8gU3RvcmUgdGhlIGZhdm91cml0ZXNcblx0XHRcdFx0c2VsZi5zZXRTdGF0ZSh7XCJzZWFyY2hcIjogcmVzLmRhdGF9KTtcblx0XHRcdH1cblxuXHRcdH0pLmFsd2F5cygoKSA9PiB7XG5cdFx0XHQvLyBIaWRlIHRoZSBsb2FkZXJcblx0XHRcdExvYWRlci5oaWRlKCk7XG5cdFx0fSlcblx0fVxuXG5cdHNlYXJjaFNob3coKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XCJtb2RlXCI6IFwic2VhcmNoXCJ9KVxuXHR9XG5cblx0c2VsZWN0ZWQodGhyb3dlcikge1xuXHRcdGlmKHR5cGVvZiB0aGlzLnByb3BzLm9uU2VsZWN0ID09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZWxlY3QodGhyb3dlcik7XG5cdFx0fVxuXHR9XG5cblx0c2lnbmluKHRocm93ZXIpIHtcblx0XHR0aGlzLmZhdm91cml0ZXMoKTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBPcHBvbmVudDtcbiIsIi8qKlxuICogUHJhY2l0Y2VcbiAqXG4gKiBNYW5hZ2VzIE9yZyBtZW51IGZvciBwcmFjdGljZSBhbmQgZGlzcGxheSB0aGUgYXBwcm9wcmlhdGUgb25lIGJhc2VkIG9uIHdoYXRcbiAqIGlzIGNob3NlblxuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMjZcbiAqL1xuXG4vLyBHZW5lcmljIG1vZHVsZXNcbnZhciBFdmVudHMgPSByZXF1aXJlKCcuLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuLi9nZW5lcmljL2hhc2guanMnKTtcblxuLy8gR2VuZXJpYyBjb21wb25lbnRzXG52YXIge01lbnUsIEl0ZW19ID0gcmVxdWlyZSgnLi9lbGVtZW50cy9tZW51LmpzeCcpO1xuXG4vLyBTaXRlIGNvbXBvbmVudHNcbnZhciBOYXRmID0gcmVxdWlyZSgnLi9uYXRmL3ByYWN0aWNlLmpzeCcpO1xuXG4vLyBQcmFjdGljZSBjb21wb25lbnRcbmNsYXNzIFByYWN0aWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdGlhbGlzZSB0aGUgc3RhdGVcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0XCJvcmdcIjogSGFzaC5nZXQoJ29yZycsICduYXRmJyksXG5cdFx0XHRcInRocm93ZXJcIjogcHJvcHMudGhyb3dlciA/IHByb3BzLnRocm93ZXIgOiBmYWxzZVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm9yZ0NoYW5nZSA9IHRoaXMub3JnQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gudW53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJwcmFjdGljZVwiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgdGhyb3dlcj17c2VsZi5zdGF0ZS50aHJvd2VyfSAvPlxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuLy8gRXhwb3J0IHRoZSBjb21wb25lbnRcbm1vZHVsZS5leHBvcnRzID0gUHJhY3RpY2U7XG4iLCIvKipcbiAqIFNpdGVcbiAqXG4gKiBQcmltYXJ5IGNvbXBvbmVudCBmb3IgdGhlIGVudGlyZSBzaXRlXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yMFxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbnZhciB7TWVudSwgSXRlbX0gPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lbnUuanN4Jyk7XG52YXIgTWVzc2FnZXMgPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lc3NhZ2VzLmpzeCcpO1xudmFyIFBvcHVwcyA9IHJlcXVpcmUgKCcuL2VsZW1lbnRzL3BvcHVwcy5qc3gnKTtcblxuLy8gU2l0ZSBjb21wb25lbnRzXG52YXIgSGVhZGVyID0gcmVxdWlyZSgnLi9oZWFkZXIuanN4Jyk7XG52YXIgTWF0Y2ggPSByZXF1aXJlKCcuL21hdGNoLmpzeCcpO1xudmFyIFByYWN0aWNlID0gcmVxdWlyZSgnLi9wcmFjdGljZS5qc3gnKTtcbnZhciBTdGF0cyA9IHJlcXVpcmUoJy4vc3RhdHMuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50XG5jbGFzcyBTaXRlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXG5cdFx0Ly8gQ2FsbCB0aGUgcGFyZW50IGNvbnN0cnVjdG9yXG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0Ly8gSW5pdCB0aGUgaGFzaCBtb2R1bGUgYW5kIHdhdGNoIGZvciBwYWdlIGNoYW5nZXNcblx0XHRIYXNoLmluaXQoKTtcblx0XHRIYXNoLndhdGNoKCdwYWdlJywgdGhpcy5oYXNoQ2hhbmdlLmJpbmQodGhpcykpXG5cblx0XHQvLyBUcmFjayBhbnkgc2lnbmluL3NpZ25vdXQgZXZlbnRzXG5cdFx0RXZlbnRzLmFkZCgnc2lnbmluJywgdGhpcy5zaWduaW4uYmluZCh0aGlzKSk7XG5cdFx0RXZlbnRzLmFkZCgnc2lnbm91dCcsIHRoaXMuc2lnbm91dC5iaW5kKHRoaXMpKTtcblxuXHRcdC8vIEluaXRpYWxpc2UgdGhlIHN0YXRlXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdFwicGFnZVwiOiBIYXNoLmdldCgncGFnZScsICdob21lJyksXG5cdFx0XHRcInRocm93ZXJcIjogZmFsc2Vcblx0XHR9O1xuXG5cdFx0Ly8gQmluZCBtZXRob2RzXG5cdFx0dGhpcy5wYWdlQ2hhbmdlID0gdGhpcy5wYWdlQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYXNoQ2hhbmdlKHBhZ2UpIHtcblx0XHQvLyBJZiB0aGUgcGFnZSBoYXMgY2hhbmdlZFxuXHRcdGlmKHBhZ2UgIT0gdGhpcy5zdGF0ZS5wYWdlKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcInBhZ2VcIjogcGFnZSA/IHBhZ2UgOiBcImhvbWVcIn0pXG5cdFx0XHR0aGlzLnJlZnMubWVudS5zZWxlY3RlZCA9IHBhZ2U7XG5cdFx0fVxuXHR9XG5cblx0cGFnZUNoYW5nZShuYW1lKSB7XG5cdFx0SGFzaC5zZXQoXCJwYWdlXCIsIG5hbWUpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXHRcdC8vIFN0dXBpZCByZWFjdFxuXHRcdHZhciBpdGVtcyA9IFtcblx0XHRcdC8qPEl0ZW0ga2V5PXswfSBuYW1lPVwiZ2FtZXNcIj5HYW1lczwvSXRlbT4sKi9cblx0XHRcdDxJdGVtIGtleT17MX0gbmFtZT1cInByYWN0aWNlXCI+UHJhY3RpY2U8L0l0ZW0+XG5cdFx0XTtcblx0XHRpZih0aGlzLnN0YXRlLnRocm93ZXIpIHtcblx0XHRcdGl0ZW1zLnB1c2goPEl0ZW0ga2V5PXsyfSBuYW1lPVwibWF0Y2hcIj5NYXRjaDwvSXRlbT4pO1xuXHRcdFx0Ly9pdGVtcy5wdXNoKDxJdGVtIGtleT17M30gbmFtZT1cImxlYWd1ZVwiPkxlYWd1ZTwvSXRlbT4pO1xuXHRcdFx0aXRlbXMucHVzaCg8SXRlbSBrZXk9ezR9IG5hbWU9XCJzdGF0c1wiPlN0YXRzPC9JdGVtPik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJzaXRlXCI+XG5cdFx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdFx0PE1lbnUgcmVmPVwibWVudVwiIGNsYXNzTmFtZT1cIm1lbnUgcHJpbWFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLnBhZ2V9IG9uQ2hhbmdlPXtzZWxmLnBhZ2VDaGFuZ2V9PlxuXHRcdFx0XHRcdHtpdGVtc31cblx0XHRcdFx0PC9NZW51PlxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5wYWdlID09ICdob21lJyAmJlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuXHRcdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdFx0PGRsIGlkPVwiaG9tZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkdD52MS4xLjA8L2R0PlxuXHRcdFx0XHRcdFx0XHRcdDxkZD5cblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmYS11bFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5DYW4gbm93IGZldGNoIGFsbCBwcmFjdGljZSBzdGF0cyBpbnN0ZWFkIG9mIGp1c3QgdGhlIGxhc3QgZml2ZS48L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+PGkgY2xhc3NOYW1lPVwiZmEtbGkgZmFzIGZhLWFuZ2xlLWRvdWJsZS1yaWdodFwiPjwvaT5DbGlja2luZyBvbiBhbnkgcm93IGluIHN0YXRzIHdpbGwgYnJpbmcgdXAgYWxsIHRocm93cyBpbiB0aGF0IHByYWN0aWNlIHNlc3Npb24uPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Rml4ZWQgYSBidWcgdGhhdCBkaWRuJ3QgYWxsb3cgeW91IHRvIHNpZ24gdXAgd2l0aCBhbiBlLW1haWwuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPjxpIGNsYXNzTmFtZT1cImZhLWxpIGZhcyBmYS1hbmdsZS1kb3VibGUtcmlnaHRcIj48L2k+Rml4ZWQgYSBidWcgdGhhdCBjYXVzZWQgc2lnbiBpbiBub3QgdG8gYmUgcmVjb2duaXNlZCBhZnRlciBzaWduIHVwLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGR0PnYxLjAuMDwvZHQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRkPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImZhLXVsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPk5BVEYgcHJhY3RpY2UgaXMgYXZhaWxhYmxlLCBubyBzaWduIGluIHJlcXVpcmVkLjwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT48aSBjbGFzc05hbWU9XCJmYS1saSBmYXMgZmEtYW5nbGUtZG91YmxlLXJpZ2h0XCI+PC9pPldpdGggYW4gYWNjb3VudCB5b3UgY2FuIHNhdmUgeW91ciBwcmFjdGljZSBzZXNzaW9uIGFuZCBrZWVwIHRyYWNrIG9mIHlvdXIgb3ZlciBhbGwgcHJvZ3Jlc3MgaW4gdGhlIFN0YXRzIG1lbnUuPC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdFx0PC9kZD5cblx0XHRcdFx0XHRcdFx0PC9kbD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR9XG5cdFx0XHRcdHtzZWxmLnN0YXRlLnBhZ2UgPT0gJ3ByYWN0aWNlJyAmJlxuXHRcdFx0XHRcdDxQcmFjdGljZSB0aHJvd2VyPXtzZWxmLnN0YXRlLnRocm93ZXJ9IC8+XG5cdFx0XHRcdH1cblx0XHRcdFx0e3NlbGYuc3RhdGUucGFnZSA9PSAnbWF0Y2gnICYmXG5cdFx0XHRcdFx0PE1hdGNoIHRocm93ZXI9e3NlbGYuc3RhdGUudGhyb3dlcn0gLz5cblx0XHRcdFx0fVxuXHRcdFx0XHR7c2VsZi5zdGF0ZS5wYWdlID09ICdzdGF0cycgJiZcblx0XHRcdFx0XHQ8U3RhdHMgLz5cblx0XHRcdFx0fVxuXHRcdFx0XHQ8UG9wdXBzIC8+XG5cdFx0XHRcdDxNZXNzYWdlcyAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fVxuXG5cdHNpZ25pbigpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogdHJ1ZX0pO1xuXHR9XG5cblx0c2lnbm91dCgpIHtcblxuXHRcdC8vIElmIHRoZSBwYWdlIG5lZWRzIHRvIGJlIHNpZ25lZCBpblxuXHRcdGlmKFsncHJhY3RpY2UnXS5pbmRleE9mKHRoaXMuc3RhdGUucGFnZSkgPT0gLTEpIHtcblx0XHRcdEhhc2guc2V0KCdwYWdlJywgbnVsbCk7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSB0aHJvd2VyIGZsYWdcblx0XHR0aGlzLnNldFN0YXRlKHtcInRocm93ZXJcIjogZmFsc2V9KTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIGNvbXBvbmVudFxubW9kdWxlLmV4cG9ydHMgPSBTaXRlO1xuIiwiLyoqXG4gKiBTdGF0c1xuICpcbiAqIE1hbmFnZXMgT3JnIG1lbnUgZm9yIHN0YXRzIGFuZCBkaXNwbGF5IHRoZSBhcHByb3ByaWF0ZSBvbmUgYmFzZWQgb24gd2hhdFxuICogaXMgY2hvc2VuXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNlxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvZXZlbnRzLmpzJyk7XG52YXIgSGFzaCA9IHJlcXVpcmUoJy4uL2dlbmVyaWMvaGFzaC5qcycpO1xuXG4vLyBHZW5lcmljIGNvbXBvbmVudHNcbnZhciB7TWVudSwgSXRlbX0gPSByZXF1aXJlKCcuL2VsZW1lbnRzL21lbnUuanN4Jyk7XG5cbi8vIFNpdGUgY29tcG9uZW50c1xudmFyIE5hdGYgPSByZXF1aXJlKCcuL25hdGYvc3RhdHMuanN4Jyk7XG5cbi8vIFN0YXRzIGNvbXBvbmVudFxuY2xhc3MgU3RhdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRcIm9yZ1wiOiBIYXNoLmdldCgnb3JnJywgJ25hdGYnKVxuXHRcdH07XG5cblx0XHQvLyBCaW5kIG1ldGhvZHNcblx0XHR0aGlzLm9yZ0NoYW5nZSA9IHRoaXMub3JnQ2hhbmdlLmJpbmQodGhpcyk7XG5cdH1cblxuXHRjb21wb25lbnRXaWxsTW91bnQoKSB7XG5cblx0XHQvLyBUcmFjayBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gud2F0Y2goJ29yZycsIHRoaXMub3JnQ2hhbmdlKTtcblx0fVxuXG5cdGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuXG5cdFx0Ly8gU3RvcCB0cmFja2luZyBhbnkgb3JnIGhhc2ggY2hhbmdlIGV2ZW50c1xuXHRcdEhhc2gudW53YXRjaCgnb3JnJywgdGhpcy5vcmdDaGFuZ2UpO1xuXHR9XG5cblx0bWVudUNoYW5nZShvcmcpIHtcblx0XHRIYXNoLnNldCgnb3JnJywgb3JnKTtcblx0fVxuXG5cdG9yZ0NoYW5nZShvcmcpIHtcblx0XHRpZihvcmcgIT0gdGhpcy5zdGF0ZS5vcmcpIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe1wib3JnXCI6IG9yZ30pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgaWQ9XCJzdGF0c1wiPlxuXHRcdFx0XHQ8TWVudSBjbGFzc05hbWU9XCJtZW51IHNlY29uZGFyeVwiIHNlbGVjdGVkPXtzZWxmLnN0YXRlLm9yZ30gb25DaGFuZ2U9e3NlbGYubWVudUNoYW5nZX0+XG5cdFx0XHRcdFx0PEl0ZW0gbmFtZT1cIm5hdGZcIj5OQVRGPC9JdGVtPlxuXHRcdFx0XHQ8L01lbnU+XG5cdFx0XHRcdDxkaXYgaWQ9XCJjb250ZW50XCI+XG5cdFx0XHRcdFx0PGRpdj5cblx0XHRcdFx0XHRcdHtzZWxmLnN0YXRlLm9yZyA9PSAnbmF0ZicgJiZcblx0XHRcdFx0XHRcdFx0PE5hdGYgLz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFN0YXRzO1xuIiwiLyoqXG4gKiBUaHJvd2VyXG4gKlxuICogTWFuYWdlcyBlZGl0aW5nIGRldGFpbHMgZm9yIHRoZSBjdXJyZW50bHkgbG9nZ2VkIGluIHRocm93ZXJcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI1XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi4vZ2VuZXJpYy9ldmVudHMuanMnKTtcblxuLy8gVGhyb3dlciBjb21wb25lbnRcbmNsYXNzIFRocm93ZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cblx0XHQvLyBDYWxsIHRoZSBwYXJlbnQgY29uc3RydWN0b3Jcblx0XHRzdXBlcihwcm9wcyk7XG5cblx0XHQvLyBJbml0aWFsaXNlIHRoZSBzdGF0ZVxuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRyZXR1cm4gPGRpdiAvPlxuXHR9XG59XG5cbi8vIEV4cG9ydCB0aGUgY29tcG9uZW50XG5tb2R1bGUuZXhwb3J0cyA9IFRocm93ZXI7XG4iLCIvKipcbiAqIFJlcXVlc3RzXG4gKlxuICogTWFuYWdlcyBtYXRjaCByZXF1ZXN0c1xuICpcbiAqIEBhdXRob3IgQ2hyaXMgTmFzclxuICogQGNvcHlyaWdodCBPdXJvYm9yb3NDb2RpbmdcbiAqIEBjcmVhdGVkIDIwMTktMDMtMzFcbiAqL1xuXG4vLyBHZW5lcmljXG52YXIgRXZlbnRzID0gcmVxdWlyZSgnLi9nZW5lcmljL2V2ZW50cy5qcycpO1xudmFyIEhhc2ggPSByZXF1aXJlKCcuL2dlbmVyaWMvaGFzaC5qcycpO1xudmFyIExvYWRlciA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9sb2FkZXIuanMnKTtcbnZhciBTZXJ2aWNlcyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9zZXJ2aWNlcy5qcycpO1xuXG4vLyBTaXRlIHNwZWNpZmljXG52YXIgVHdvV2F5ID0gcmVxdWlyZSgnLi90d293YXkuanMnKTtcbnZhciBVdGlscyA9IHJlcXVpcmUoJy4vdXRpbHMuanMnKTtcblxuLy8gU2lnbmVkIGluIHRocm93ZXJcbl9fdGhyb3dlciA9IG51bGw7XG5cbi8vIFBlbmRpbmcgcmVxdWVzdHNcbl9fcGVuZGluZyA9IFtdO1xuXG4vKipcbiAqIEluaXRcbiAqXG4gKiBJbml0aWFsaXNlcyB0aGUgbW9kdWxlIGJ5IHRyYWNraW5nIGFueSBzaWduIGluIC8gc2lnbiBvdXQgZXZlbnRzXG4gKlxuICogQG5hbWUgX2luaXRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfaW5pdCgpIHtcblxuXHQvLyBHZXQgbm90aWZpZWQgb2YgYW55IGNoYW5nZSBpbiB0aHJvd2VyXG5cdEV2ZW50cy5hZGQoJ3NpZ25pbicsIF9zaWduaW4pO1xuXHRFdmVudHMuYWRkKCdzaWdub3V0JywgX3NpZ25vdXQpO1xufVxuXG4vKipcbiAqIFBlbmRpbmdcbiAqXG4gKiBGZXRjaGVzIHBlbmRpbmcgcmVxdWVzdHNcbiAqXG4gKiBAbmFtZSBfcGVuZGluZ1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wZW5kaW5nKCkge1xuXG5cdC8vIFNob3cgdGhlIGxvYWRlclxuXHRMb2FkZXIuc2hvdygpO1xuXG5cdC8vIEZldGNoIHRoZSByZXF1ZXN0c1xuXHRTZXJ2aWNlcy5yZWFkKCdhdXRoJywgJ21hdGNoL3JlcXVlc3RzJywge30pLmRvbmUocmVzID0+IHtcblxuXHRcdC8vIElmIHRoZXJlJ3MgYW4gZXJyb3Jcblx0XHRpZihyZXMuZXJyb3IgJiYgIVV0aWxzLnNlcnZpY2VFcnJvcihyZXMuZXJyb3IpKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignZXJyb3InLCBKU09OLnN0cmluZ2lmeShyZXMuZXJyb3IpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGEgd2FybmluZ1xuXHRcdGlmKHJlcy53YXJuaW5nKSB7XG5cdFx0XHRFdmVudHMudHJpZ2dlcignd2FybmluZycsIEpTT04uc3RyaW5naWZ5KHJlcy53YXJuaW5nKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBkYXRhXG5cdFx0aWYocmVzLmRhdGEpIHtcblx0XHRcdF9wZW5kaW5nUHJvY2VzcyhyZXMuZGF0YSk7XG5cdFx0fVxuXHR9KS5hbHdheXMoKCkgPT4ge1xuXHRcdExvYWRlci5oaWRlKCk7XG5cdH0pXG59XG5cbi8qKlxuICogUGVuZGluZyBQcm9jZXNzXG4gKlxuICogUHJvY2Vzc2VzIGFueSBwZW5kaW5nIHJlcXVlc3RzIHRoYXQgYXJlIHJldHVybmVkIGZyb20gdGhlIHNlcnZlclxuICpcbiAqIEBuYW1lIF9wZW5kaW5nUHJvY2Vzc1xuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9wZW5kaW5nUHJvY2VzcyhyZXF1ZXN0cykge1xuXG5cdC8vIFN0b3JlIHRoZSBwZW5kaW5nIHJlcXVlc3RzXG5cdF9fcGVuZGluZyA9IHJlcXVlc3RzO1xuXG5cdC8vIEdvIHRocm91Z2ggZWFjaCBpbiB3aGljaCB0aGUgdGhyb3dlciBpcyB0aGUgb3Bwb25lbnRcblx0Zm9yKHZhciBvIG9mIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG8uX2lkLCB7XG5cdFx0XHRcInRleHRcIjogXCJZb3UgaGF2ZSBhbiBcIiArIG8ub3JnICsgXCIgbWF0Y2ggcmVxdWVzdCBmcm9tIFwiICtcblx0XHRcdFx0XHRvLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHN0YXJ0IHRoaXMgbWF0Y2ggbm93P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWNsaW5lXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWNsaW5lfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJBY2NlcHRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdEFjY2VwdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEdvIHRocm91Z2ggZWFjaCBpbiB3aGljaCB0aGUgdGhyb3dlciBpcyB0aGUgaW5pdGlhdG9yXG5cdGZvcih2YXIgbyBvZiBfX3BlbmRpbmdbJ2luaXRpYXRvciddKSB7XG5cblx0XHQvLyBBZGQgYSBuZXcgbWVzc2FnZVxuXHRcdEV2ZW50cy50cmlnZ2VyKCdtZXNzYWdlJywgby5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBpbml0aWF0ZWQgYW4gXCIgKyBvLm9yZyArIFwiIG1hdGNoIHdpdGggXCIgK1xuXHRcdFx0XHRcdG8uYWxpYXMgKyBcIi4gRG8geW91IHdhbnQgdG8gd2FpdCBmb3IgdGhpcyBtYXRjaCB0byBzdGFydD9cIixcblx0XHRcdFwiYnV0dG9uc1wiOiBbXG5cdFx0XHRcdHtcInRpdGxlXCI6IFwiRGVsZXRlXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWxldGV9LFxuXHRcdFx0XHR7XCJ0aXRsZVwiOiBcIldhaXRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdFdhaXR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXF1ZXN0IEFjY2VwdFxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBhY2NlcHRlZCBieSB0aGUgb3Bwb25lbnRcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdEFjY2VwdFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0QWNjZXB0KGlkKSB7XG5cblx0Ly8gTGV0IHRoZSBzZXJ2ZXIga25vdyB0aGUgbWF0Y2ggd2FzIGFjY2VwdGVkXG5cdFNlcnZpY2VzLnVwZGF0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFwiaWRcIjogaWRcblx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHQvLyBGaW5kIHRoZSBwZW5kaW5nIG1hdGNoLCBzdG9yZSBpdCwgdGhlbiByZW1vdmUgaXQgZnJvbSBwZW5kaW5nXG5cdFx0XHR2YXIgcmVxID0gbnVsbDtcblx0XHRcdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ29wcG9uZW50J10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBpZCkge1xuXHRcdFx0XHRcdHJlcSA9IF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXTtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdEhhc2guc2V0KHtcblx0XHRcdFx0XCJwYWdlXCI6IFwibWF0Y2hcIixcblx0XHRcdFx0XCJvcmdcIjogcmVxLm9yZy50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcImlkXCI6IFwibXxcIiArIHJlcy5kYXRhICsgXCJ8XCIgKyByZXEuYWxpYXNcblx0XHRcdH0pXG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGFjY2VwdGVkXG5cdHJldHVybiB0cnVlO1xufVxuXG4vKipcbiAqIFJlcXVlc3QgRGVjbGluZVxuICpcbiAqIENhbGxlZCB3aGVuIGEgbWF0Y2ggcmVxdWVzdCBpcyBkZWNsaW5lZCBieSB0aGUgb3Bwb25lbnRcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdERlY2xpbmVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlY2xpbmUoaWQpIHtcblxuXHQvLyBMZXQgdGhlIHNlcnZlciBrbm93IHRoZSBtYXRjaCB3YXMgZGVjbGluZWRcblx0U2VydmljZXMuZGVsZXRlKCdhdXRoJywgJ21hdGNoL3JlcXVlc3QnLCB7XG5cdFx0XCJpZFwiOiBpZFxuXHR9KS5kb25lKHJlcyA9PiB7XG5cblx0XHQvLyBJZiB0aGVyZSdzIGFuIGVycm9yXG5cdFx0aWYocmVzLmVycm9yICYmICFVdGlscy5zZXJ2aWNlRXJyb3IocmVzLmVycm9yKSkge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ2Vycm9yJywgSlNPTi5zdHJpbmdpZnkocmVzLmVycm9yKSk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUncyBhIHdhcm5pbmdcblx0XHRpZihyZXMud2FybmluZykge1xuXHRcdFx0RXZlbnRzLnRyaWdnZXIoJ3dhcm5pbmcnLCBKU09OLnN0cmluZ2lmeShyZXMud2FybmluZykpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgZGF0YVxuXHRcdGlmKHJlcy5kYXRhKSB7XG5cblx0XHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0XHRmb3IodmFyIGkgaW4gX19wZW5kaW5nWydvcHBvbmVudCddKSB7XG5cdFx0XHRcdGlmKF9fcGVuZGluZ1snb3Bwb25lbnQnXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10uc3BsaWNlKGksIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxuXG5cdC8vIFJldHVybiB0cnVlLCBhc3N1bWUgdGhlIHJlcXVlc3Qgd2FzIGRlbGV0ZWRcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogUmVxdWVzdCBEZWxldGVcbiAqXG4gKiBDYWxsZWQgd2hlbiBhIG1hdGNoIHJlcXVlc3QgaXMgZGVsZXRlZCBieSB0aGUgaW5pdGlhdG9yXG4gKlxuICogQG5hbWUgX3JlcXVlc3REZWxldGVcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdERlbGV0ZShpZCkge1xuXG5cdC8vIExldCB0aGUgc2VydmVyIGtub3cgd2UgYXJlIHJlbW92aW5nIG91ciByZXF1ZXN0XG5cdFNlcnZpY2VzLmRlbGV0ZSgnYXV0aCcsICdtYXRjaC9yZXF1ZXN0Jywge1xuXHRcdFwiaWRcIjogaWRcblx0fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0Ly8gSWYgdGhlcmUncyBhbiBlcnJvclxuXHRcdGlmKHJlcy5lcnJvciAmJiAhVXRpbHMuc2VydmljZUVycm9yKHJlcy5lcnJvcikpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCdlcnJvcicsIEpTT04uc3RyaW5naWZ5KHJlcy5lcnJvcikpO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlJ3MgYSB3YXJuaW5nXG5cdFx0aWYocmVzLndhcm5pbmcpIHtcblx0XHRcdEV2ZW50cy50cmlnZ2VyKCd3YXJuaW5nJywgSlNPTi5zdHJpbmdpZnkocmVzLndhcm5pbmcpKTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSdzIGRhdGFcblx0XHRpZihyZXMuZGF0YSkge1xuXG5cdFx0XHQvLyBEZWxldGUgdGhlIHJlcXVlc3QgZnJvbSB0aGUgcGVuZGluZ1xuXHRcdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snaW5pdGlhdG9yJ10pIHtcblx0XHRcdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdFx0XHRfX3BlbmRpbmdbJ2luaXRpYXRvciddLnNwbGljZShpLCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG5cblx0Ly8gUmV0dXJuIHRydWUsIGFzc3VtZSB0aGUgcmVxdWVzdCB3YXMgZGVsZXRlZFxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0IE5ld1xuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB0aHJvd2VyIHJlY2lldmVzIGEgbmV3IG1hdGNoIHJlcXVlc3RcbiAqXG4gKiBAbmFtZSBfcmVxdWVzdE5ld1xuICogQHBhcmFtIG9iamVjdCBtc2dcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfcmVxdWVzdE5ldyhtc2cpIHtcblxuXHQvLyBJZiB0aGlzIGlzIGEgbmV3IHJlcXVlc3Rcblx0aWYobXNnLnR5cGUgPT0gJ21hdGNoX3JlcXVlc3QnKSB7XG5cblx0XHQvLyBBZGQgaXQgdG8gdGhlIHBlbmRpbmdcblx0XHRfX3BlbmRpbmdbJ29wcG9uZW50J10ucHVzaChtc2cpO1xuXG5cdFx0Ly8gQWRkIGEgbmV3IG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZScsIG1zZy5faWQsIHtcblx0XHRcdFwidGV4dFwiOiBcIllvdSBoYXZlIGFuIFwiICsgbXNnLm9yZyArIFwiIG1hdGNoIHJlcXVlc3QgZnJvbSBcIiArXG5cdFx0XHRcdFx0bXNnLmFsaWFzICsgXCIuIERvIHlvdSB3YW50IHRvIHN0YXJ0IHRoaXMgbWF0Y2ggbm93P1wiLFxuXHRcdFx0XCJidXR0b25zXCI6IFtcblx0XHRcdFx0e1widGl0bGVcIjogXCJEZWNsaW5lXCIsIFwiY2FsbGJhY2tcIjogX3JlcXVlc3REZWNsaW5lfSxcblx0XHRcdFx0e1widGl0bGVcIjogXCJBY2NlcHRcIiwgXCJjYWxsYmFja1wiOiBfcmVxdWVzdEFjY2VwdH1cblx0XHRcdF1cblx0XHR9KTtcblx0fVxuXG5cdC8vIEVsc2UgaWYgd2UgbmVlZCB0byBkZWxldGVcblx0ZWxzZSBpZihtc2cudHlwZSA9PSBcIm1hdGNoX3JlcXVlc3RfZGVsZXRlXCIpIHtcblxuXHRcdC8vIERlbGV0ZSB0aGUgcmVxdWVzdCBmcm9tIHRoZSBwZW5kaW5nXG5cdFx0Zm9yKHZhciBpIGluIF9fcGVuZGluZ1snb3Bwb25lbnQnXSkge1xuXHRcdFx0aWYoX19wZW5kaW5nWydvcHBvbmVudCddW2ldLl9pZCA9PSBtc2cuaWQpIHtcblx0XHRcdFx0X19wZW5kaW5nWydvcHBvbmVudCddLnNwbGljZShpLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIG1lc3NhZ2Vcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBtc2cuaWQpO1xuXHR9XG59XG5cbi8qKlxuICogUmVxdWVzdCBXYWl0XG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIGluaXRpYXRvciBvZiBhIG1hdGNoIHJlcXVlc3QgaGFzIGNob3NlbiB0byB3YWl0IGZvciBpdFxuICpcbiAqIEBuYW1lIF9yZXF1ZXN0V2FpdFxuICogQHJldHVybiBib29sXG4gKi9cbmZ1bmN0aW9uIF9yZXF1ZXN0V2FpdChpZCkge1xuXG5cdC8vIEZpbmQgdGhlIHBlbmRpbmcgbWF0Y2gsIHN0b3JlIGl0LCB0aGVuIHJlbW92ZSBpdCBmcm9tIHBlbmRpbmdcblx0dmFyIHJlcSA9IG51bGw7XG5cdGZvcih2YXIgaSBpbiBfX3BlbmRpbmdbJ2luaXRpYXRvciddKSB7XG5cdFx0aWYoX19wZW5kaW5nWydpbml0aWF0b3InXVtpXS5faWQgPT0gaWQpIHtcblx0XHRcdHJlcSA9IF9fcGVuZGluZ1snaW5pdGlhdG9yJ11baV07XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hhbmdlIHRoZSBwYWdlIGFuZCBzdG9yZSB0aGUgcmVxdWVzdCBpbmZvXG5cdEhhc2guc2V0KHtcblx0XHRcInBhZ2VcIjogXCJtYXRjaFwiLFxuXHRcdFwib3JnXCI6IHJlcS5vcmcudG9Mb3dlckNhc2UoKSxcblx0XHRcImlkXCI6IFwicnxcIiArIHJlcS5faWQgKyAnfCcgKyByZXEuYWxpYXNcblx0fSlcblxuXHQvLyBSZXR1cm4gT0tcblx0cmV0dXJuIHRydWU7XG59XG5cbi8qKlxuICogU2lnbmluXG4gKlxuICogQ2FsbGVkIHdoZW4gdGhlIHVzZXIgc2lnbnMgaW4gKG9yIHdhcyBhbHJlYWR5IHNpZ25lZCBpbikuIEZldGNoZXMgcGVuZGluZ1xuICogcmVxdWVzdHMgYW5kIHN0YXJ0cyB0cmFja2luZyBhbnkgbmV3IHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25pblxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9zaWduaW4odGhyb3dlcikge1xuXG5cdC8vIFN0b3JlIHRoZSB0aHJvd2VyXG5cdF9fdGhyb3dlciA9IHRocm93ZXI7XG5cblx0Ly8gRmV0Y2ggdGhlIHBlbmRpbmcgcmVxdWVzdHNcblx0X3BlbmRpbmcoKTtcblxuXHQvLyBUcmFjayBhbnkgbmV3IHJlcXVlc3RzXG5cdFR3b1dheS50cmFjayhcblx0XHQnYXV0aCcsICdyZXF1ZXN0cy0nICsgX190aHJvd2VyLFxuXHRcdF9yZXF1ZXN0TmV3XG5cdCk7XG59XG5cbi8qKlxuICogU2lnbm91dFxuICpcbiAqIENhbGxlZCB3aGVuIHRoZSB1c2VyIHNpZ25zIG91dCBvciBpcyBzaWduZWQgb3V0LiBSZW1vdmVzIGFsbCBtZXNzYWdlcyBhbmRcbiAqIHN0b3BzIHRyYWNraW5nIHJlcXVlc3RzXG4gKlxuICogQG5hbWUgX3NpZ25vdXRcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfc2lnbm91dCgpIHtcblxuXHQvLyBEZWxldGUgYWxsIG1lc3NhZ2VzXG5cdGZvcih2YXIgbyBpbiBfX3BlbmRpbmcpIHtcblx0XHRFdmVudHMudHJpZ2dlcignbWVzc2FnZV9yZW1vdmUnLCBvLl9pZCk7XG5cdH1cblxuXHQvLyBTdG9wIHRyYWNraW5nIHRoZSB0aHJvd2VyXG5cdFR3b1dheS51bnRyYWNrKFxuXHRcdCdhdXRoJywgJ3JlcXVlc3RzLScgKyBfX3Rocm93ZXIsXG5cdFx0X3JlcXVlc3ROZXdcblx0KTtcbn1cblxuLy8gRXhwb3J0IHRoZSBtb2R1bGVcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluaXRcIjogX2luaXQsXG59XG4iLCIvKipcbiAqIFR3byBXYXlcbiAqXG4gKiBBbGxvd3MgY2xpZW50cyB0byBjb25uZWN0IHRvIHRoZSBiYWNrZW5kIHZpYSB3ZWJzb2NrZXQgc28gZXZlbnRzIGNhbiBiZVxuICogdHJhY2tlZCBpbiByZWFsIHRpbWVcbiAqXG4gKiBAYXV0aG9yIENocmlzIE5hc3JcbiAqIEBjb3B5cmlnaHQgT3Vyb2Jvcm9zQ29kaW5nXG4gKiBAY3JlYXRlZCAyMDE5LTAzLTI5XG4gKi9cblxuLy8gR2VuZXJpYyBtb2R1bGVzXG52YXIgU2VydmljZXMgPSByZXF1aXJlKCcuL2dlbmVyaWMvc2VydmljZXMuanMnKTtcbnZhciBUb29scyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy90b29scy5qcycpO1xudmFyIFdTSGVscGVyID0gcmVxdWlyZSgnLi9nZW5lcmljL3dlYnNvY2tldC5qcycpO1xuXG4vLyBUaGUgcGluZyB0aW1lclxudmFyIF9fcGluZyA9IG51bGw7XG5cbi8vIFRoZSB2YWxpZCBjbG9zZSBmbGFnXG52YXIgX19jbG9zZSA9IGZhbHNlO1xuXG4vLyBUaGUgd2Vic29ja2V0XG52YXIgX19zb2NrZXQgPSBudWxsO1xuXG4vKipcbiAqIFRoZSBzZXJ2aWNlIGNhbGxiYWNrc1xuICpcbiAqIHdpbGwgY29udGFpbiBhIHN0cmluZyBmb3IgdGhlIHNlcnZpY2UgLyBrZXkgd2l0aCBjYWxsYmFja3MgZm9yIHRob3NlIGtleXMsXG4gKiBlLmcuIHtcbiAqXHRcInNlcnZpY2UxXCI6IHtcbiAqXHRcdFwia2V5MVwiOiBbZnVuY3Rpb24xLCBmdW5jdGlvbjJdLFxuICpcdFx0XCJrZXkyXCI6IFtmdW5jdGlvbjNdXG4gKlx0fSxcbiAqXHRcInNlcnZpY2UyXCI6IHtcbiAqXHRcdFwia2V5M1wiOiBbZnVuY3Rpb240XVxuICpcdH1cbiAqIH1cbiAqL1xudmFyIF9fc2VydmljZXMgPSB7fTtcblxuLyoqXG4gKiBBZGQgVHJhY2tcbiAqXG4gKiBBZGRzIHRyYWNraW5nIGZvciBhIHNwZWNpZmljIHNlcnZpY2Uga2V5XG4gKlxuICogQG5hbWUgX2FkZFRyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcbiAqIEBwYXJhbSBzdHJpbmcga2V5XG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcbiAqIEByZXR1cm4gdm9pZFxuICovXG5mdW5jdGlvbiBfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjaykge1xuXG5cdC8vIElmIHRoZSBVUkwgZG9lc24ndCBleGlzdFxuXHRpZighX19zb2NrZXQpIHtcblx0XHRjb25zb2xlLmVycm9yKCd0d293YXk6IHNvbWV0aGluZyB3ZW50IHdyb25nLCBubyBzb2NrZXQgZm91bmQnKTtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTZW5kIHRoZSB0cmFja2luZyBtZXNzYWdlIHRocm91Z2ggdGhlIHdlYnNvY2tldFxuXHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcIl90eXBlXCI6IFwidHJhY2tcIixcblx0XHRcInNlcnZpY2VcIjogc2VydmljZSxcblx0XHRcImtleVwiOiBrZXlcblx0fSkpO1xuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIHNlcnZpY2UsIGFkZCBpdFxuXHRpZighKHNlcnZpY2UgaW4gX19zZXJ2aWNlcykpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdID0ge31cblx0fVxuXG5cdC8vIElmIHdlIGRvbid0IGhhdmUgdGhlIGtleSBmb3IgdGhlIGdpdmVuIHNlcnZpY2UsIGFkZCB0aGUgbGlzdCB3aXRoXG5cdC8vXHR0aGUgY2FsbGJhY2tcblx0aWYoIShrZXkgaW4gX19zZXJ2aWNlc1tzZXJ2aWNlXSkpIHtcblx0XHRfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV0gPSBbY2FsbGJhY2tdXG5cdH1cblxuXHQvLyBFbHNlLCBhZGQgdGhlIGNhbGxiYWNrLCB0byB0aGUgZ2l2ZW4gc2VydmljZS9rZXlcblx0ZWxzZSB7XG5cdFx0X19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLnB1c2goY2FsbGJhY2spO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIENsb3NlXG4gKlxuICogQ2hlY2tzIGlmIGl0J3MgYSBsZWdpdGltYXRlIGNsb3NlZCBzb2NrZXQsIG9yIGlmIHdlIG5lZWQgdG8gcmVjb25uZWN0IHRvXG4gKiBldmVyeXRoaW5nXG4gKlxuICogQG5hbWUgX2hhbmRsZUNsb3NlXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX2hhbmRsZUNsb3NlKCkge1xuXG5cdC8vIElmIGl0J3MgYSB2YWxpZCBjbG9zZVxuXHRpZihfX2Nsb3NlKSB7XG5cdFx0X19zb2NrZXQgPSBudWxsO1xuXHR9XG5cblx0Ly8gRWxzZSwgcmVvcGVuIHRoZSBzb2NrZXQgYW5kIHJlLXRyYWNrIGFsbCBldmVudHNcblx0ZWxzZSB7XG5cblx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBOb3RpZnkgdGhlIGJhY2tlbmQgb2YgYSBuZXcgd3MgY29ubmVjdGlvblxuXHRcdFx0U2VydmljZXMucmVhZCgnd2VicG9sbCcsICd3ZWJzb2NrZXQnLCB7fSkuZG9uZShyZXMgPT4ge1xuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgd2Vic29ja2V0XG5cdFx0XHRcdF9fc29ja2V0ID0gV1NIZWxwZXIoJ3dzczovLycgKyB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUgKyAnL3dzJywge1xuXHRcdFx0XHRcdFwib3BlblwiOiBmdW5jdGlvbihzb2NrKSB7XG5cblx0XHRcdFx0XHRcdC8vIFNlbmQgdGhlIGNvbm5lY3QgbWVzc2FnZVxuXHRcdFx0XHRcdFx0c29jay5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcImNvbm5lY3RcIixcblx0XHRcdFx0XHRcdFx0XCJrZXlcIjogcmVzLmRhdGFcblx0XHRcdFx0XHRcdH0pKVxuXG5cdFx0XHRcdFx0XHQvLyBSZXRyYWNrIGV2ZXJ5IHNlcnZpY2Uva2V5XG5cdFx0XHRcdFx0XHRmb3IodmFyIHMgaW4gX19zZXJ2aWNlcykge1xuXHRcdFx0XHRcdFx0XHRmb3IodmFyIGsgaW4gX19zZXJ2aWNlc1tzXSkge1xuXHRcdFx0XHRcdFx0XHRcdF9fc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XCJfdHlwZVwiOiBcInRyYWNrXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcInNlcnZpY2VcIjogcyxcblx0XHRcdFx0XHRcdFx0XHRcdFwia2V5XCI6IGtcblx0XHRcdFx0XHRcdFx0XHR9KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFwibWVzc2FnZVwiOiBfaGFuZGxlTWVzc2FnZSxcblx0XHRcdFx0XHRcImNsb3NlXCI6IF9oYW5kbGVDbG9zZVxuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH0sIDUwMDApO1xuXHR9XG59XG5cbi8qKlxuICogSGFuZGxlIE1lc3NhZ2VzXG4gKlxuICogUmVjaWV2ZXMgbWVzc2FnZXMgZnJvbSB3ZWJzb2NrZXRzIGFuZCBkaXJlY3RzIHRoZSBkYXRhIHRvIHRoZSBhcHByb3ByaWF0ZVxuICogY2FsbGJhY2tcbiAqXG4gKiBAbmFtZSBfaGFuZGxlTWVzc2FnZVxuICogQHBhcmFtIFdlYlNvY2tldCBzb2NrXHRcdFRoZSBzb2NrZXQgdGhlIG1lc3NhZ2UgY2FtZSBvblxuICogQHBhcmFtIE1lc3NhZ2VFdmVudCBldlx0XHRUaGUgZXZlbnQgbWVzc2FnZSByZWNlaXZlZFxuICogQHJldHVybiB2b2lkXG4gKi9cbmZ1bmN0aW9uIF9oYW5kbGVNZXNzYWdlKHNvY2ssIGV2KSB7XG5cblx0Ly8gSWYgaXQncyBwb25nXG5cdGlmKGV2LmRhdGEgPT0gJ3BvbmcnKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU2NyZXcgeW91IGphdmFzY3JpcHRcblx0dmFyIHIgPSBuZXcgRmlsZVJlYWRlcigpO1xuXHRyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZW5kXCIsIGZ1bmN0aW9uKCkge1xuXG5cdFx0Ly8gUGFyc2UgdGhlIGRhdGFcblx0XHRvTXNnID0gSlNPTi5wYXJzZShyLnJlc3VsdCk7XG5cblx0XHQvLyBJZiB3ZSBoYXZlIHRoZSBzZXJ2aWNlXG5cdFx0aWYob01zZy5zZXJ2aWNlIGluIF9fc2VydmljZXMpIHtcblxuXHRcdFx0Ly8gSWYgd2UgaGF2ZSB0aGUga2V5XG5cdFx0XHRpZihvTXNnLmtleSBpbiBfX3NlcnZpY2VzW29Nc2cuc2VydmljZV0pIHtcblxuXHRcdFx0XHQvLyBDYWxsIGVhY2ggY2FsbGJhY2tcblx0XHRcdFx0Zm9yKHZhciBmIG9mIF9fc2VydmljZXNbb01zZy5zZXJ2aWNlXVtvTXNnLmtleV0pIHtcblx0XHRcdFx0XHRmKG9Nc2cuZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xuXHRyLnJlYWRBc1RleHQoZXYuZGF0YSk7XG59XG5cbi8qKlxuICogUGluZ1xuICpcbiAqIFNlbmQgYSBwaW5nIHRvIGtlZXAgdGhlIHNvY2tldCBhbGl2ZVxuICpcbiAqIEBuYW1lIF9waW5nXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3BpbmcoKSB7XG5cblx0Ly8gU2VuZCBhIHBpbmcgbWVzc2FnZSBvdmVyIHRoZSBzb2NrZXQgdG8ga2VlcCBpdCBhbGl2ZVxuXHRfX3NvY2tldC5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcIl90eXBlXCI6IFwicGluZ1wiXG5cdH0pKTtcbn1cblxuLyoqXG4gKiBUcmFja1xuICpcbiAqIFRha2VzIGEgVVJMIGFuZCBhbiBldmVudCB0eXBlIGFuZCBhKSBvcGVucyBhIG5ldyB3ZWJzb2NrZXQgb3IgdXNlcyBhblxuICogZXhpc3Rpbmcgb25lLCB0aGVuIGIpIHNlbmRzIGEgdHJhY2tpbmcgbWVzc2FnZSB0aHJvdWdoIHRoZSB3ZWJzb2NrZXQgc28gdGhlXG4gKiBiYWNrZW5kIGtub3dzbiB0byBzZW5kIHRoZSBrZXkgdHlwZSB0byB1c1xuICpcbiAqIEBuYW1lIF90cmFja1xuICogQHBhcmFtIHN0cmluZyBzZXJ2aWNlXHRcdFRoZSBuYW1lIG9mIHRoZSBzZXJ2aWNlIHRoZSBrZXkgaXMgYXNzb2NpYXRlZCB3aXRoXG4gKiBAcGFyYW0gc3RyaW5nIGtleVx0XHRcdFRoZSBrZXkgdG8gdHJhY2tcbiAqIEBwYXJhbSBmdW5jdGlvbiBjYWxsYmFja1x0XHRUaGUgY2FsbGJhY2sgZm9yIGFueSBtZXNzYWdlcyBvZiB0aGUga2V5IHZhbHVlXG4gKiBAcmV0dXJuIHZvaWRcbiAqL1xuZnVuY3Rpb24gX3RyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spIHtcblxuXHQvLyBJZiB3ZSBkb24ndCBoYXZlIGEgc29ja2V0XG5cdGlmKCFfX3NvY2tldCkge1xuXG5cdFx0Ly8gTm90aWZ5IHRoZSBiYWNrZW5kIG9mIGEgbmV3IHdzIGNvbm5lY3Rpb25cblx0XHRTZXJ2aWNlcy5yZWFkKCd3ZWJwb2xsJywgJ3dlYnNvY2tldCcsIHt9KS5kb25lKHJlcyA9PiB7XG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgd2Vic29ja2V0XG5cdFx0XHRfX3NvY2tldCA9IFdTSGVscGVyKCd3c3M6Ly8nICsgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lICsgJy93cycsIHtcblx0XHRcdFx0XCJvcGVuXCI6IGZ1bmN0aW9uKHNvY2spIHtcblxuXHRcdFx0XHRcdC8vIFJlc2V0IHRoZSBjbG9zZSBmbGFnXG5cdFx0XHRcdFx0X19jbG9zZSA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0Ly8gU2VuZCB0aGUgY29ubmVjdCBtZXNzYWdlXG5cdFx0XHRcdFx0c29jay5zZW5kKEpTT04uc3RyaW5naWZ5KHtcblx0XHRcdFx0XHRcdFwiX3R5cGVcIjogXCJjb25uZWN0XCIsXG5cdFx0XHRcdFx0XHRcImtleVwiOiByZXMuZGF0YVxuXHRcdFx0XHRcdH0pKVxuXG5cdFx0XHRcdFx0Ly8gU2VuZCB0aGUgdHJhY2tpbmcgbWVzc2FnZSBhbmQgc3RvcmUgdGhlIGNhbGxiYWNrXG5cdFx0XHRcdFx0X2FkZFRyYWNrKHNlcnZpY2UsIGtleSwgY2FsbGJhY2spXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwibWVzc2FnZVwiOiBfaGFuZGxlTWVzc2FnZSxcblx0XHRcdFx0XCJjbG9zZVwiOiBfaGFuZGxlQ2xvc2Vcblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBQaW5nIGF0IDUgbWludXRlIGludGVydmFsc1xuXHRcdFx0X19waW5nID0gc2V0SW50ZXJ2YWwoX3BpbmcsIDMwMDAwMCk7XG5cdFx0fSk7XG5cblx0fSBlbHNlIHtcblx0XHRfYWRkVHJhY2soc2VydmljZSwga2V5LCBjYWxsYmFjayk7XG5cdH1cbn1cblxuLyoqXG4gKiBVbnRyYWNrXG4gKlxuICogUmVtb3ZlcyBhIGNhbGxiYWNrIGFuZCBub3RpZmllcyB0aGUgd2Vic29ja2V0IHdlIGFyZSBub3QgdHJhY2tpbmcgYW55bW9yZVxuICpcbiAqIEBuYW1lIF91bnRyYWNrXG4gKiBAcGFyYW0gc3RyaW5nIHNlcnZpY2VcdFx0VGhlIG5hbWUgb2YgdGhlIHNlcnZpY2UgdGhlIGtleSBpcyBhc3NvY2lhdGVkIHdpdGhcbiAqIEBwYXJhbSBzdHJpbmcga2V5XHRcdFx0VGhlIGtleSB0byB1bnRyYWNrXG4gKiBAcGFyYW0gZnVuY3Rpb24gY2FsbGJhY2tcdFx0VGhlIGNhbGxiYWNrIGFzc29jaWF0ZWQgd2l0aCB0aGUgdHJhY2tcbiAqIEByZXR1cm4gYm9vbFxuICovXG5mdW5jdGlvbiBfdW50cmFjayhzZXJ2aWNlLCBrZXksIGNhbGxiYWNrKSB7XG5cblx0Ly8gSWYgd2UgaGF2ZSB0aGUgc2VydmljZVxuXHRpZihzZXJ2aWNlIGluIF9fc2VydmljZXMpIHtcblxuXHRcdC8vIElmIHdlIGhhdmUgdGhlIGtleVxuXHRcdGlmKGtleSBpbiBfX3NlcnZpY2VzW3NlcnZpY2VdKSB7XG5cblx0XHRcdC8vIEdvIHRocm91Z2ggZWFjaCBjYWxsYmFja1xuXHRcdFx0Zm9yKHZhciBpID0gMDsgaSA8IF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHRcdC8vIElmIHRoZSBjYWxsYmFjayBtYXRjaGVzXG5cdFx0XHRcdGlmKGNhbGxiYWNrID09IF9fc2VydmljZXNbc2VydmljZV1ba2V5XVtpXSkge1xuXG5cdFx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBjYWxsYmFja1xuXHRcdFx0XHRcdF9fc2VydmljZXNbc2VydmljZV1ba2V5XS5zcGxpY2UoaSwgMSk7XG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBoYXZlIG5vIG1vcmUgY2FsbGJhY2tzXG5cdFx0XHRcdFx0aWYoX19zZXJ2aWNlc1tzZXJ2aWNlXVtrZXldLmxlbmd0aCA9PSAwKSB7XG5cblx0XHRcdFx0XHRcdC8vIE5vdGlmeSB0aGUgd2Vic29ja2V0IHdlIGFyZW4ndCB0cmFja2luZyB0aGUga2V5XG5cdFx0XHRcdFx0XHQvL1x0YW55bW9yZVxuXHRcdFx0XHRcdFx0X19zb2NrZXQuc2VuZChKU09OLnN0cmluZ2lmeSh7XG5cdFx0XHRcdFx0XHRcdFwiX3R5cGVcIjogXCJ1bnRyYWNrXCIsXG5cdFx0XHRcdFx0XHRcdFwic2VydmljZVwiOiBzZXJ2aWNlLFxuXHRcdFx0XHRcdFx0XHRcImtleVwiOiBrZXlcblx0XHRcdFx0XHRcdH0pKTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIHRoZSBrZXlcblx0XHRcdFx0XHRcdGRlbGV0ZSBfX3NlcnZpY2VzW3NlcnZpY2VdW2tleV07XG5cblx0XHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgbm8gbW9yZSBrZXlzIGluIHRoZSBzZXJ2aWNlXG5cdFx0XHRcdFx0XHRpZihUb29scy5lbXB0eShfX3NlcnZpY2VzW3NlcnZpY2VdKSkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJlbW92ZSB0aGUgc2VydmljZVxuXHRcdFx0XHRcdFx0XHRkZWxldGUgX19zZXJ2aWNlc1tzZXJ2aWNlXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiB0aGVyZSdzIG5vIG1vcmUgc2VydmljZXNcblx0XHRcdFx0XHRcdFx0aWYoVG9vbHMuZW1wdHkoX19zZXJ2aWNlcykpIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFR1cm4gb2ZmIHRoZSBwaW5nIGludGVydmFsXG5cdFx0XHRcdFx0XHRcdFx0Y2xlYXJJbnRlcnZhbChfX3BpbmcpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2xvc2UgdGhlIHNvY2tldFxuXHRcdFx0XHRcdFx0XHRcdF9fY2xvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdFx0XHRcdF9fc29ja2V0LmNsb3NlKDEwMDAsICdub3RoaW5nIGVsc2UgdG8gdHJhY2snKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIENhbGxiYWNrIGZvdW5kIGFuZCByZW1vdmVkXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDYWxsYmFjayBub3QgZm91bmRcblx0cmV0dXJuIGZhbHNlO1xufVxuXG4vLyBleHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidHJhY2tcIjogX3RyYWNrLFxuXHRcInVudHJhY2tcIjogX3VudHJhY2tcbn1cbiIsIi8qKlxuICogVXRpbHNcbiAqXG4gKiBTaGFyZWQgdXRpbGl0aWVzXG4gKlxuICogQGF1dGhvciBDaHJpcyBOYXNyXG4gKiBAY29weXJpZ2h0IE91cm9ib3Jvc0NvZGluZ1xuICogQGNyZWF0ZWQgMjAxOS0wMy0yNFxuICovXG5cbi8vIEdlbmVyaWMgbW9kdWxlc1xudmFyIEV2ZW50cyA9IHJlcXVpcmUoJy4vZ2VuZXJpYy9ldmVudHMuanMnKTtcblxuLyoqXG4gKiBVdGlsc1xuICovXG52YXIgVXRpbHMgPSB7XG5cblx0ZGF0ZTogZnVuY3Rpb24odHMpIHtcblx0XHR2YXIgZCA9IG5ldyBEYXRlKHRzKjEwMDApO1xuXHRcdHZhciBZID0gJycgKyBkLmdldEZ1bGxZZWFyKCk7XG5cdFx0dmFyIE0gPSAnJyArIChkLmdldE1vbnRoKCkgKyAxKTtcblx0XHRpZihNLmxlbmd0aCA9PSAxKSBNID0gJzAnICsgTTtcblx0XHR2YXIgRCA9ICcnICsgZC5nZXREYXRlKCk7XG5cdFx0aWYoRC5sZW5ndGggPT0gMSkgRCA9ICcwJyArIEQ7XG5cdFx0cmV0dXJuIFkgKyAnLycgKyBNICsgJy8nICsgRDtcblx0fSxcblxuXHRlcnJvclRyZWU6IGZ1bmN0aW9uKGVycm9ycykge1xuXG5cdFx0Ly8gSW5pdCB0aGUgcmV0dXJuXG5cdFx0dmFyIG9SZXQgPSB7fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBlYWNoIGVycm9yXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IGVycm9ycy5sZW5ndGg7ICsraSkge1xuXG5cdFx0XHQvLyBJZiB0aGUgZXJyb3IgZmllbGQgaGFzIGEgcGVyaW9kXG5cdFx0XHRpZihlcnJvcnNbaV1bMF0uaW5jbHVkZXMoJy4nKSkge1xuXG5cdFx0XHRcdC8vIFNwbGl0IGl0XG5cdFx0XHRcdGxGaWVsZCA9IGVycm9yc1tpXVswXS5zcGxpdCgvXFwuKC4qKS8pXG5cblx0XHRcdFx0Ly8gSWYgd2UgZG9uJ3QgaGF2ZSB0aGUgZmllbGQgYWxyZWFkeVxuXHRcdFx0XHRpZighb1JldFtsRmllbGRbMF1dKSB7XG5cdFx0XHRcdFx0b1JldFtsRmllbGRbMF1dID0gW11cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCB0aGUgcmVzdFxuXHRcdFx0XHRvUmV0W2xGaWVsZFswXV0ucHVzaChbbEZpZWxkWzFdLCBlcnJvcnNbaV1bMV1dKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRWxzZSBpdCdzIGEgZmxhdCBmaWVsZFxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdG9SZXRbZXJyb3JzW2ldWzBdXSA9IGVycm9yc1tpXVsxXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGFsbCB0aGUgZXJyb3JzIHdlIGZvdW5kXG5cdFx0Zm9yKGxldCBrIGluIG9SZXQpIHtcblxuXHRcdFx0Ly8gSWYgd2UgZmluZCBhbiBhcnJheVxuXHRcdFx0aWYoQXJyYXkuaXNBcnJheShvUmV0W2tdKSkge1xuXG5cdFx0XHRcdC8vIFJlY3Vyc2Vcblx0XHRcdFx0b1JldFtrXSA9IFV0aWxzLmVycm9yVHJlZShvUmV0W2tdKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIFRyZWVcblx0XHRyZXR1cm4gb1JldDtcblx0fSxcblxuXHRzZXJ2aWNlRXJyb3I6IGZ1bmN0aW9uKGVycikge1xuXG5cdFx0Ly8gV2hhdCBlcnJvciBpcyBpdD9cblx0XHRzd2l0Y2goZXJyLmNvZGUpIHtcblxuXHRcdFx0Ly8gTm8gU2Vzc2lvblxuXHRcdFx0Y2FzZSAxMDI6XG5cblx0XHRcdFx0Ly8gVHJpZ2dlciBzaWdub3V0XG5cdFx0XHRcdEV2ZW50cy50cmlnZ2VyKFwic2lnbm91dFwiKTtcblxuXHRcdFx0XHQvLyBOb3RoaW5nIGVsc2UgdG8gZG9cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdC8vIEludmFsaWQgZmllbGRzXG5cdFx0XHRjYXNlIDEwMDE6XG5cblx0XHRcdFx0Ly8gUmVidWlsZCB0aGUgZXJyb3IgbWVzc2FnZVxuXHRcdFx0XHRlcnIubXNnID0gVXRpbHMuZXJyb3JUcmVlKGVyci5tc2cpO1xuXG5cdFx0XHRcdC8vIEJ1dCBhbGxvdyB0aGUgY2hpbGQgdG8gZGVhbCB3aXRoIHRoZSBtZXNzYWdlcyB0aGVtc2VsdmVzXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBGYWlsZWQgdG8gcHJvY2VzcyBlcnJvclxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG4vLyBFeHBvcnQgdGhlIG1vZHVsZVxubW9kdWxlLmV4cG9ydHMgPSBVdGlscztcbiJdLCJzb3VyY2VSb290IjoiIn0=