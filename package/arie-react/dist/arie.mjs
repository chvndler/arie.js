var Ve = { exports: {} }, p = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var St;
function Dr() {
  if (St)
    return p;
  St = 1;
  var j = Symbol.for("react.element"), s = Symbol.for("react.portal"), Y = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), O = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), Q = Symbol.for("react.memo"), A = Symbol.for("react.lazy"), I = Symbol.iterator;
  function X(r) {
    return r === null || typeof r != "object" ? null : (r = I && r[I] || r["@@iterator"], typeof r == "function" ? r : null);
  }
  var N = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, B = Object.assign, J = {};
  function U(r, u, d) {
    this.props = r, this.context = u, this.refs = J, this.updater = d || N;
  }
  U.prototype.isReactComponent = {}, U.prototype.setState = function(r, u) {
    if (typeof r != "object" && typeof r != "function" && r != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, r, u, "setState");
  }, U.prototype.forceUpdate = function(r) {
    this.updater.enqueueForceUpdate(this, r, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = U.prototype;
  function V(r, u, d) {
    this.props = r, this.context = u, this.refs = J, this.updater = d || N;
  }
  var W = V.prototype = new Z();
  W.constructor = V, B(W, U.prototype), W.isPureReactComponent = !0;
  var T = Array.isArray, R = Object.prototype.hasOwnProperty, k = { current: null }, q = { key: !0, ref: !0, __self: !0, __source: !0 };
  function G(r, u, d) {
    var m, v = {}, g = null, L = null;
    if (u != null)
      for (m in u.ref !== void 0 && (L = u.ref), u.key !== void 0 && (g = "" + u.key), u)
        R.call(u, m) && !q.hasOwnProperty(m) && (v[m] = u[m]);
    var _ = arguments.length - 2;
    if (_ === 1)
      v.children = d;
    else if (1 < _) {
      for (var E = Array(_), F = 0; F < _; F++)
        E[F] = arguments[F + 2];
      v.children = E;
    }
    if (r && r.defaultProps)
      for (m in _ = r.defaultProps, _)
        v[m] === void 0 && (v[m] = _[m]);
    return { $$typeof: j, type: r, key: g, ref: L, props: v, _owner: k.current };
  }
  function oe(r, u) {
    return { $$typeof: j, type: r.type, key: u, ref: r.ref, props: r.props, _owner: r._owner };
  }
  function ce(r) {
    return typeof r == "object" && r !== null && r.$$typeof === j;
  }
  function ke(r) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + r.replace(/[=:]/g, function(d) {
      return u[d];
    });
  }
  var ye = /\/+/g;
  function le(r, u) {
    return typeof r == "object" && r !== null && r.key != null ? ke("" + r.key) : u.toString(36);
  }
  function ae(r, u, d, m, v) {
    var g = typeof r;
    (g === "undefined" || g === "boolean") && (r = null);
    var L = !1;
    if (r === null)
      L = !0;
    else
      switch (g) {
        case "string":
        case "number":
          L = !0;
          break;
        case "object":
          switch (r.$$typeof) {
            case j:
            case s:
              L = !0;
          }
      }
    if (L)
      return L = r, v = v(L), r = m === "" ? "." + le(L, 0) : m, T(v) ? (d = "", r != null && (d = r.replace(ye, "$&/") + "/"), ae(v, u, d, "", function(F) {
        return F;
      })) : v != null && (ce(v) && (v = oe(v, d + (!v.key || L && L.key === v.key ? "" : ("" + v.key).replace(ye, "$&/") + "/") + r)), u.push(v)), 1;
    if (L = 0, m = m === "" ? "." : m + ":", T(r))
      for (var _ = 0; _ < r.length; _++) {
        g = r[_];
        var E = m + le(g, _);
        L += ae(g, u, d, E, v);
      }
    else if (E = X(r), typeof E == "function")
      for (r = E.call(r), _ = 0; !(g = r.next()).done; )
        g = g.value, E = m + le(g, _++), L += ae(g, u, d, E, v);
    else if (g === "object")
      throw u = String(r), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return L;
  }
  function z(r, u, d) {
    if (r == null)
      return r;
    var m = [], v = 0;
    return ae(r, m, "", "", function(g) {
      return u.call(d, g, v++);
    }), m;
  }
  function ee(r) {
    if (r._status === -1) {
      var u = r._result;
      u = u(), u.then(function(d) {
        (r._status === 0 || r._status === -1) && (r._status = 1, r._result = d);
      }, function(d) {
        (r._status === 0 || r._status === -1) && (r._status = 2, r._result = d);
      }), r._status === -1 && (r._status = 0, r._result = u);
    }
    if (r._status === 1)
      return r._result.default;
    throw r._result;
  }
  var l = { current: null }, ne = { transition: null }, me = { ReactCurrentDispatcher: l, ReactCurrentBatchConfig: ne, ReactCurrentOwner: k };
  return p.Children = { map: z, forEach: function(r, u, d) {
    z(r, function() {
      u.apply(this, arguments);
    }, d);
  }, count: function(r) {
    var u = 0;
    return z(r, function() {
      u++;
    }), u;
  }, toArray: function(r) {
    return z(r, function(u) {
      return u;
    }) || [];
  }, only: function(r) {
    if (!ce(r))
      throw Error("React.Children.only expected to receive a single React element child.");
    return r;
  } }, p.Component = U, p.Fragment = Y, p.Profiler = $, p.PureComponent = V, p.StrictMode = S, p.Suspense = re, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = me, p.cloneElement = function(r, u, d) {
    if (r == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + r + ".");
    var m = B({}, r.props), v = r.key, g = r.ref, L = r._owner;
    if (u != null) {
      if (u.ref !== void 0 && (g = u.ref, L = k.current), u.key !== void 0 && (v = "" + u.key), r.type && r.type.defaultProps)
        var _ = r.type.defaultProps;
      for (E in u)
        R.call(u, E) && !q.hasOwnProperty(E) && (m[E] = u[E] === void 0 && _ !== void 0 ? _[E] : u[E]);
    }
    var E = arguments.length - 2;
    if (E === 1)
      m.children = d;
    else if (1 < E) {
      _ = Array(E);
      for (var F = 0; F < E; F++)
        _[F] = arguments[F + 2];
      m.children = _;
    }
    return { $$typeof: j, type: r.type, key: v, ref: g, props: m, _owner: L };
  }, p.createContext = function(r) {
    return r = { $$typeof: O, _currentValue: r, _currentValue2: r, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, r.Provider = { $$typeof: P, _context: r }, r.Consumer = r;
  }, p.createElement = G, p.createFactory = function(r) {
    var u = G.bind(null, r);
    return u.type = r, u;
  }, p.createRef = function() {
    return { current: null };
  }, p.forwardRef = function(r) {
    return { $$typeof: H, render: r };
  }, p.isValidElement = ce, p.lazy = function(r) {
    return { $$typeof: A, _payload: { _status: -1, _result: r }, _init: ee };
  }, p.memo = function(r, u) {
    return { $$typeof: Q, type: r, compare: u === void 0 ? null : u };
  }, p.startTransition = function(r) {
    var u = ne.transition;
    ne.transition = {};
    try {
      r();
    } finally {
      ne.transition = u;
    }
  }, p.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, p.useCallback = function(r, u) {
    return l.current.useCallback(r, u);
  }, p.useContext = function(r) {
    return l.current.useContext(r);
  }, p.useDebugValue = function() {
  }, p.useDeferredValue = function(r) {
    return l.current.useDeferredValue(r);
  }, p.useEffect = function(r, u) {
    return l.current.useEffect(r, u);
  }, p.useId = function() {
    return l.current.useId();
  }, p.useImperativeHandle = function(r, u, d) {
    return l.current.useImperativeHandle(r, u, d);
  }, p.useInsertionEffect = function(r, u) {
    return l.current.useInsertionEffect(r, u);
  }, p.useLayoutEffect = function(r, u) {
    return l.current.useLayoutEffect(r, u);
  }, p.useMemo = function(r, u) {
    return l.current.useMemo(r, u);
  }, p.useReducer = function(r, u, d) {
    return l.current.useReducer(r, u, d);
  }, p.useRef = function(r) {
    return l.current.useRef(r);
  }, p.useState = function(r) {
    return l.current.useState(r);
  }, p.useSyncExternalStore = function(r, u, d) {
    return l.current.useSyncExternalStore(r, u, d);
  }, p.useTransition = function() {
    return l.current.useTransition();
  }, p.version = "18.2.0", p;
}
var ve = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
ve.exports;
var Ot;
function Ir() {
  return Ot || (Ot = 1, function(j, s) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var Y = "18.2.0", S = Symbol.for("react.element"), $ = Symbol.for("react.portal"), P = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), Q = Symbol.for("react.context"), A = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), B = Symbol.for("react.lazy"), J = Symbol.for("react.offscreen"), U = Symbol.iterator, Z = "@@iterator";
      function V(e) {
        if (e === null || typeof e != "object")
          return null;
        var t = U && e[U] || e[Z];
        return typeof t == "function" ? t : null;
      }
      var W = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, T = {
        transition: null
      }, R = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, k = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, q = {}, G = null;
      function oe(e) {
        G = e;
      }
      q.setExtraStackFrame = function(e) {
        G = e;
      }, q.getCurrentStack = null, q.getStackAddendum = function() {
        var e = "";
        G && (e += G);
        var t = q.getCurrentStack;
        return t && (e += t() || ""), e;
      };
      var ce = !1, ke = !1, ye = !1, le = !1, ae = !1, z = {
        ReactCurrentDispatcher: W,
        ReactCurrentBatchConfig: T,
        ReactCurrentOwner: k
      };
      z.ReactDebugCurrentFrame = q, z.ReactCurrentActQueue = R;
      function ee(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          ne("warn", e, n);
        }
      }
      function l(e) {
        {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
            n[o - 1] = arguments[o];
          ne("error", e, n);
        }
      }
      function ne(e, t, n) {
        {
          var o = z.ReactDebugCurrentFrame, a = o.getStackAddendum();
          a !== "" && (t += "%s", n = n.concat([a]));
          var c = n.map(function(i) {
            return String(i);
          });
          c.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var me = {};
      function r(e, t) {
        {
          var n = e.constructor, o = n && (n.displayName || n.name) || "ReactClass", a = o + "." + t;
          if (me[a])
            return;
          l("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", t, o), me[a] = !0;
        }
      }
      var u = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, t, n) {
          r(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, t, n, o) {
          r(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, t, n, o) {
          r(e, "setState");
        }
      }, d = Object.assign, m = {};
      Object.freeze(m);
      function v(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || u;
      }
      v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState");
      }, v.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var g = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, L = function(e, t) {
          Object.defineProperty(v.prototype, e, {
            get: function() {
              ee("%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]);
            }
          });
        };
        for (var _ in g)
          g.hasOwnProperty(_) && L(_, g[_]);
      }
      function E() {
      }
      E.prototype = v.prototype;
      function F(e, t, n) {
        this.props = e, this.context = t, this.refs = m, this.updater = n || u;
      }
      var Pe = F.prototype = new E();
      Pe.constructor = F, d(Pe, v.prototype), Pe.isPureReactComponent = !0;
      function kt() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Pt = Array.isArray;
      function he(e) {
        return Pt(e);
      }
      function At(e) {
        {
          var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function Lt(e) {
        try {
          return We(e), !1;
        } catch {
          return !0;
        }
      }
      function We(e) {
        return "" + e;
      }
      function ge(e) {
        if (Lt(e))
          return l("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", At(e)), We(e);
      }
      function jt(e, t, n) {
        var o = e.displayName;
        if (o)
          return o;
        var a = t.displayName || t.name || "";
        return a !== "" ? n + "(" + a + ")" : n;
      }
      function Be(e) {
        return e.displayName || "Context";
      }
      function te(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && l("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case P:
            return "Fragment";
          case $:
            return "Portal";
          case H:
            return "Profiler";
          case O:
            return "StrictMode";
          case I:
            return "Suspense";
          case X:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Q:
              var t = e;
              return Be(t) + ".Consumer";
            case re:
              var n = e;
              return Be(n._context) + ".Provider";
            case A:
              return jt(e, e.render, "ForwardRef");
            case N:
              var o = e.displayName || null;
              return o !== null ? o : te(e.type) || "Memo";
            case B: {
              var a = e, c = a._payload, i = a._init;
              try {
                return te(i(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var fe = Object.prototype.hasOwnProperty, ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, He, Xe, Ae;
      Ae = {};
      function qe(e) {
        if (fe.call(e, "ref")) {
          var t = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ke(e) {
        if (fe.call(e, "key")) {
          var t = Object.getOwnPropertyDescriptor(e, "key").get;
          if (t && t.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function $t(e, t) {
        var n = function() {
          He || (He = !0, l("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function xt(e, t) {
        var n = function() {
          Xe || (Xe = !0, l("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Dt(e) {
        if (typeof e.ref == "string" && k.current && e.__self && k.current.stateNode !== e.__self) {
          var t = te(k.current.type);
          Ae[t] || (l('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', t, e.ref), Ae[t] = !0);
        }
      }
      var Le = function(e, t, n, o, a, c, i) {
        var f = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: S,
          // Built-in properties that belong on the element
          type: e,
          key: t,
          ref: n,
          props: i,
          // Record the component responsible for creating this element.
          _owner: c
        };
        return f._store = {}, Object.defineProperty(f._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(f, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(f, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.freeze && (Object.freeze(f.props), Object.freeze(f)), f;
      };
      function It(e, t, n) {
        var o, a = {}, c = null, i = null, f = null, y = null;
        if (t != null) {
          qe(t) && (i = t.ref, Dt(t)), Ke(t) && (ge(t.key), c = "" + t.key), f = t.__self === void 0 ? null : t.__self, y = t.__source === void 0 ? null : t.__source;
          for (o in t)
            fe.call(t, o) && !ze.hasOwnProperty(o) && (a[o] = t[o]);
        }
        var h = arguments.length - 2;
        if (h === 1)
          a.children = n;
        else if (h > 1) {
          for (var b = Array(h), w = 0; w < h; w++)
            b[w] = arguments[w + 2];
          Object.freeze && Object.freeze(b), a.children = b;
        }
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (o in C)
            a[o] === void 0 && (a[o] = C[o]);
        }
        if (c || i) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && $t(a, x), i && xt(a, x);
        }
        return Le(e, c, i, f, y, k.current, a);
      }
      function Ft(e, t) {
        var n = Le(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Mt(e, t, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, a = d({}, e.props), c = e.key, i = e.ref, f = e._self, y = e._source, h = e._owner;
        if (t != null) {
          qe(t) && (i = t.ref, h = k.current), Ke(t) && (ge(t.key), c = "" + t.key);
          var b;
          e.type && e.type.defaultProps && (b = e.type.defaultProps);
          for (o in t)
            fe.call(t, o) && !ze.hasOwnProperty(o) && (t[o] === void 0 && b !== void 0 ? a[o] = b[o] : a[o] = t[o]);
        }
        var w = arguments.length - 2;
        if (w === 1)
          a.children = n;
        else if (w > 1) {
          for (var C = Array(w), x = 0; x < w; x++)
            C[x] = arguments[x + 2];
          a.children = C;
        }
        return Le(e.type, c, i, f, y, h, a);
      }
      function ue(e) {
        return typeof e == "object" && e !== null && e.$$typeof === S;
      }
      var Ge = ".", Yt = ":";
      function Nt(e) {
        var t = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(t, function(a) {
          return n[a];
        });
        return "$" + o;
      }
      var Qe = !1, Ut = /\/+/g;
      function Je(e) {
        return e.replace(Ut, "$&/");
      }
      function je(e, t) {
        return typeof e == "object" && e !== null && e.key != null ? (ge(e.key), Nt("" + e.key)) : t.toString(36);
      }
      function _e(e, t, n, o, a) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var i = !1;
        if (e === null)
          i = !0;
        else
          switch (c) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case S:
                case $:
                  i = !0;
              }
          }
        if (i) {
          var f = e, y = a(f), h = o === "" ? Ge + je(f, 0) : o;
          if (he(y)) {
            var b = "";
            h != null && (b = Je(h) + "/"), _e(y, t, b, "", function(xr) {
              return xr;
            });
          } else
            y != null && (ue(y) && (y.key && (!f || f.key !== y.key) && ge(y.key), y = Ft(
              y,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              n + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (y.key && (!f || f.key !== y.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                Je("" + y.key) + "/"
              ) : "") + h
            )), t.push(y));
          return 1;
        }
        var w, C, x = 0, D = o === "" ? Ge : o + Yt;
        if (he(e))
          for (var Te = 0; Te < e.length; Te++)
            w = e[Te], C = D + je(w, Te), x += _e(w, t, n, C, a);
        else {
          var Ue = V(e);
          if (typeof Ue == "function") {
            var wt = e;
            Ue === wt.entries && (Qe || ee("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Qe = !0);
            for (var jr = Ue.call(wt), Rt, $r = 0; !(Rt = jr.next()).done; )
              w = Rt.value, C = D + je(w, $r++), x += _e(w, t, n, C, a);
          } else if (c === "object") {
            var Ct = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Ct === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Ct) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return x;
      }
      function Ee(e, t, n) {
        if (e == null)
          return e;
        var o = [], a = 0;
        return _e(e, o, "", "", function(c) {
          return t.call(n, c, a++);
        }), o;
      }
      function Vt(e) {
        var t = 0;
        return Ee(e, function() {
          t++;
        }), t;
      }
      function Wt(e, t, n) {
        Ee(e, function() {
          t.apply(this, arguments);
        }, n);
      }
      function Bt(e) {
        return Ee(e, function(t) {
          return t;
        }) || [];
      }
      function zt(e) {
        if (!ue(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function Ht(e) {
        var t = {
          $$typeof: Q,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        t.Provider = {
          $$typeof: re,
          _context: t
        };
        var n = !1, o = !1, a = !1;
        {
          var c = {
            $$typeof: Q,
            _context: t
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return o || (o = !0, l("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), t.Provider;
              },
              set: function(i) {
                t.Provider = i;
              }
            },
            _currentValue: {
              get: function() {
                return t._currentValue;
              },
              set: function(i) {
                t._currentValue = i;
              }
            },
            _currentValue2: {
              get: function() {
                return t._currentValue2;
              },
              set: function(i) {
                t._currentValue2 = i;
              }
            },
            _threadCount: {
              get: function() {
                return t._threadCount;
              },
              set: function(i) {
                t._threadCount = i;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, l("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), t.Consumer;
              }
            },
            displayName: {
              get: function() {
                return t.displayName;
              },
              set: function(i) {
                a || (ee("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", i), a = !0);
              }
            }
          }), t.Consumer = c;
        }
        return t._currentRenderer = null, t._currentRenderer2 = null, t;
      }
      var de = -1, $e = 0, Ze = 1, Xt = 2;
      function qt(e) {
        if (e._status === de) {
          var t = e._result, n = t();
          if (n.then(function(c) {
            if (e._status === $e || e._status === de) {
              var i = e;
              i._status = Ze, i._result = c;
            }
          }, function(c) {
            if (e._status === $e || e._status === de) {
              var i = e;
              i._status = Xt, i._result = c;
            }
          }), e._status === de) {
            var o = e;
            o._status = $e, o._result = n;
          }
        }
        if (e._status === Ze) {
          var a = e._result;
          return a === void 0 && l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, a), "default" in a || l(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, a), a.default;
        } else
          throw e._result;
      }
      function Kt(e) {
        var t = {
          // We use these fields to store the result.
          _status: de,
          _result: e
        }, n = {
          $$typeof: B,
          _payload: t,
          _init: qt
        };
        {
          var o, a;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(c) {
                l("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = c, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(c) {
                l("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = c, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function Gt(e) {
        e != null && e.$$typeof === N ? l("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? l("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && l("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && l("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var t = {
          $$typeof: A,
          render: e
        };
        {
          var n;
          Object.defineProperty(t, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(o) {
              n = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return t;
      }
      var et;
      et = Symbol.for("react.module.reference");
      function tt(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === P || e === H || ae || e === O || e === I || e === X || le || e === J || ce || ke || ye || typeof e == "object" && e !== null && (e.$$typeof === B || e.$$typeof === N || e.$$typeof === re || e.$$typeof === Q || e.$$typeof === A || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === et || e.getModuleId !== void 0));
      }
      function Qt(e, t) {
        tt(e) || l("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: N,
          type: e,
          compare: t === void 0 ? null : t
        };
        {
          var o;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(a) {
              o = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return n;
      }
      function M() {
        var e = W.current;
        return e === null && l(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function Jt(e) {
        var t = M();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? l("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && l("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return t.useContext(e);
      }
      function Zt(e) {
        var t = M();
        return t.useState(e);
      }
      function er(e, t, n) {
        var o = M();
        return o.useReducer(e, t, n);
      }
      function tr(e) {
        var t = M();
        return t.useRef(e);
      }
      function rr(e, t) {
        var n = M();
        return n.useEffect(e, t);
      }
      function nr(e, t) {
        var n = M();
        return n.useInsertionEffect(e, t);
      }
      function or(e, t) {
        var n = M();
        return n.useLayoutEffect(e, t);
      }
      function ar(e, t) {
        var n = M();
        return n.useCallback(e, t);
      }
      function ur(e, t) {
        var n = M();
        return n.useMemo(e, t);
      }
      function ir(e, t, n) {
        var o = M();
        return o.useImperativeHandle(e, t, n);
      }
      function sr(e, t) {
        {
          var n = M();
          return n.useDebugValue(e, t);
        }
      }
      function cr() {
        var e = M();
        return e.useTransition();
      }
      function lr(e) {
        var t = M();
        return t.useDeferredValue(e);
      }
      function fr() {
        var e = M();
        return e.useId();
      }
      function dr(e, t, n) {
        var o = M();
        return o.useSyncExternalStore(e, t, n);
      }
      var pe = 0, rt, nt, ot, at, ut, it, st;
      function ct() {
      }
      ct.__reactDisabledLog = !0;
      function pr() {
        {
          if (pe === 0) {
            rt = console.log, nt = console.info, ot = console.warn, at = console.error, ut = console.group, it = console.groupCollapsed, st = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ct,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          pe++;
        }
      }
      function vr() {
        {
          if (pe--, pe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: d({}, e, {
                value: rt
              }),
              info: d({}, e, {
                value: nt
              }),
              warn: d({}, e, {
                value: ot
              }),
              error: d({}, e, {
                value: at
              }),
              group: d({}, e, {
                value: ut
              }),
              groupCollapsed: d({}, e, {
                value: it
              }),
              groupEnd: d({}, e, {
                value: st
              })
            });
          }
          pe < 0 && l("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xe = z.ReactCurrentDispatcher, De;
      function be(e, t, n) {
        {
          if (De === void 0)
            try {
              throw Error();
            } catch (a) {
              var o = a.stack.trim().match(/\n( *(at )?)/);
              De = o && o[1] || "";
            }
          return `
` + De + e;
        }
      }
      var Ie = !1, we;
      {
        var yr = typeof WeakMap == "function" ? WeakMap : Map;
        we = new yr();
      }
      function lt(e, t) {
        if (!e || Ie)
          return "";
        {
          var n = we.get(e);
          if (n !== void 0)
            return n;
        }
        var o;
        Ie = !0;
        var a = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = xe.current, xe.current = null, pr();
        try {
          if (t) {
            var i = function() {
              throw Error();
            };
            if (Object.defineProperty(i.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(i, []);
              } catch (D) {
                o = D;
              }
              Reflect.construct(e, [], i);
            } else {
              try {
                i.call();
              } catch (D) {
                o = D;
              }
              e.call(i.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (D) {
              o = D;
            }
            e();
          }
        } catch (D) {
          if (D && o && typeof D.stack == "string") {
            for (var f = D.stack.split(`
`), y = o.stack.split(`
`), h = f.length - 1, b = y.length - 1; h >= 1 && b >= 0 && f[h] !== y[b]; )
              b--;
            for (; h >= 1 && b >= 0; h--, b--)
              if (f[h] !== y[b]) {
                if (h !== 1 || b !== 1)
                  do
                    if (h--, b--, b < 0 || f[h] !== y[b]) {
                      var w = `
` + f[h].replace(" at new ", " at ");
                      return e.displayName && w.includes("<anonymous>") && (w = w.replace("<anonymous>", e.displayName)), typeof e == "function" && we.set(e, w), w;
                    }
                  while (h >= 1 && b >= 0);
                break;
              }
          }
        } finally {
          Ie = !1, xe.current = c, vr(), Error.prepareStackTrace = a;
        }
        var C = e ? e.displayName || e.name : "", x = C ? be(C) : "";
        return typeof e == "function" && we.set(e, x), x;
      }
      function mr(e, t, n) {
        return lt(e, !1);
      }
      function hr(e) {
        var t = e.prototype;
        return !!(t && t.isReactComponent);
      }
      function Re(e, t, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return lt(e, hr(e));
        if (typeof e == "string")
          return be(e);
        switch (e) {
          case I:
            return be("Suspense");
          case X:
            return be("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case A:
              return mr(e.render);
            case N:
              return Re(e.type, t, n);
            case B: {
              var o = e, a = o._payload, c = o._init;
              try {
                return Re(c(a), t, n);
              } catch {
              }
            }
          }
        return "";
      }
      var ft = {}, dt = z.ReactDebugCurrentFrame;
      function Ce(e) {
        if (e) {
          var t = e._owner, n = Re(e.type, e._source, t ? t.type : null);
          dt.setExtraStackFrame(n);
        } else
          dt.setExtraStackFrame(null);
      }
      function gr(e, t, n, o, a) {
        {
          var c = Function.call.bind(fe);
          for (var i in e)
            if (c(e, i)) {
              var f = void 0;
              try {
                if (typeof e[i] != "function") {
                  var y = Error((o || "React class") + ": " + n + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw y.name = "Invariant Violation", y;
                }
                f = e[i](t, i, o, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (h) {
                f = h;
              }
              f && !(f instanceof Error) && (Ce(a), l("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", n, i, typeof f), Ce(null)), f instanceof Error && !(f.message in ft) && (ft[f.message] = !0, Ce(a), l("Failed %s type: %s", n, f.message), Ce(null));
            }
        }
      }
      function ie(e) {
        if (e) {
          var t = e._owner, n = Re(e.type, e._source, t ? t.type : null);
          oe(n);
        } else
          oe(null);
      }
      var Fe;
      Fe = !1;
      function pt() {
        if (k.current) {
          var e = te(k.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function _r(e) {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
      function Er(e) {
        return e != null ? _r(e.__source) : "";
      }
      var vt = {};
      function br(e) {
        var t = pt();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
      function yt(e, t) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = br(t);
          if (!vt[n]) {
            vt[n] = !0;
            var o = "";
            e && e._owner && e._owner !== k.current && (o = " It was passed a child from " + te(e._owner.type) + "."), ie(e), l('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, o), ie(null);
          }
        }
      }
      function mt(e, t) {
        if (typeof e == "object") {
          if (he(e))
            for (var n = 0; n < e.length; n++) {
              var o = e[n];
              ue(o) && yt(o, t);
            }
          else if (ue(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var a = V(e);
            if (typeof a == "function" && a !== e.entries)
              for (var c = a.call(e), i; !(i = c.next()).done; )
                ue(i.value) && yt(i.value, t);
          }
        }
      }
      function ht(e) {
        {
          var t = e.type;
          if (t == null || typeof t == "string")
            return;
          var n;
          if (typeof t == "function")
            n = t.propTypes;
          else if (typeof t == "object" && (t.$$typeof === A || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          t.$$typeof === N))
            n = t.propTypes;
          else
            return;
          if (n) {
            var o = te(t);
            gr(n, e.props, "prop", o, e);
          } else if (t.PropTypes !== void 0 && !Fe) {
            Fe = !0;
            var a = te(t);
            l("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", a || "Unknown");
          }
          typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && l("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function wr(e) {
        {
          for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
            var o = t[n];
            if (o !== "children" && o !== "key") {
              ie(e), l("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), ie(null);
              break;
            }
          }
          e.ref !== null && (ie(e), l("Invalid attribute `ref` supplied to `React.Fragment`."), ie(null));
        }
      }
      function gt(e, t, n) {
        var o = tt(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = Er(t);
          c ? a += c : a += pt();
          var i;
          e === null ? i = "null" : he(e) ? i = "array" : e !== void 0 && e.$$typeof === S ? (i = "<" + (te(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : i = typeof e, l("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", i, a);
        }
        var f = It.apply(this, arguments);
        if (f == null)
          return f;
        if (o)
          for (var y = 2; y < arguments.length; y++)
            mt(arguments[y], e);
        return e === P ? wr(f) : ht(f), f;
      }
      var _t = !1;
      function Rr(e) {
        var t = gt.bind(null, e);
        return t.type = e, _t || (_t = !0, ee("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(t, "type", {
          enumerable: !1,
          get: function() {
            return ee("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), t;
      }
      function Cr(e, t, n) {
        for (var o = Mt.apply(this, arguments), a = 2; a < arguments.length; a++)
          mt(arguments[a], o.type);
        return ht(o), o;
      }
      function Sr(e, t) {
        var n = T.transition;
        T.transition = {};
        var o = T.transition;
        T.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (T.transition = n, n === null && o._updatedFibers) {
            var a = o._updatedFibers.size;
            a > 10 && ee("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var Et = !1, Se = null;
      function Or(e) {
        if (Se === null)
          try {
            var t = ("require" + Math.random()).slice(0, 7), n = j && j[t];
            Se = n.call(j, "timers").setImmediate;
          } catch {
            Se = function(a) {
              Et === !1 && (Et = !0, typeof MessageChannel > "u" && l("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = a, c.port2.postMessage(void 0);
            };
          }
        return Se(e);
      }
      var se = 0, bt = !1;
      function Tr(e) {
        {
          var t = se;
          se++, R.current === null && (R.current = []);
          var n = R.isBatchingLegacy, o;
          try {
            if (R.isBatchingLegacy = !0, o = e(), !n && R.didScheduleLegacyUpdate) {
              var a = R.current;
              a !== null && (R.didScheduleLegacyUpdate = !1, Ne(a));
            }
          } catch (C) {
            throw Oe(t), C;
          } finally {
            R.isBatchingLegacy = n;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var c = o, i = !1, f = {
              then: function(C, x) {
                i = !0, c.then(function(D) {
                  Oe(t), se === 0 ? Me(D, C, x) : C(D);
                }, function(D) {
                  Oe(t), x(D);
                });
              }
            };
            return !bt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              i || (bt = !0, l("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), f;
          } else {
            var y = o;
            if (Oe(t), se === 0) {
              var h = R.current;
              h !== null && (Ne(h), R.current = null);
              var b = {
                then: function(C, x) {
                  R.current === null ? (R.current = [], Me(y, C, x)) : C(y);
                }
              };
              return b;
            } else {
              var w = {
                then: function(C, x) {
                  C(y);
                }
              };
              return w;
            }
          }
        }
      }
      function Oe(e) {
        e !== se - 1 && l("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), se = e;
      }
      function Me(e, t, n) {
        {
          var o = R.current;
          if (o !== null)
            try {
              Ne(o), Or(function() {
                o.length === 0 ? (R.current = null, t(e)) : Me(e, t, n);
              });
            } catch (a) {
              n(a);
            }
          else
            t(e);
        }
      }
      var Ye = !1;
      function Ne(e) {
        if (!Ye) {
          Ye = !0;
          var t = 0;
          try {
            for (; t < e.length; t++) {
              var n = e[t];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(t + 1), o;
          } finally {
            Ye = !1;
          }
        }
      }
      var kr = gt, Pr = Cr, Ar = Rr, Lr = {
        map: Ee,
        forEach: Wt,
        count: Vt,
        toArray: Bt,
        only: zt
      };
      s.Children = Lr, s.Component = v, s.Fragment = P, s.Profiler = H, s.PureComponent = F, s.StrictMode = O, s.Suspense = I, s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = z, s.cloneElement = Pr, s.createContext = Ht, s.createElement = kr, s.createFactory = Ar, s.createRef = kt, s.forwardRef = Gt, s.isValidElement = ue, s.lazy = Kt, s.memo = Qt, s.startTransition = Sr, s.unstable_act = Tr, s.useCallback = ar, s.useContext = Jt, s.useDebugValue = sr, s.useDeferredValue = lr, s.useEffect = rr, s.useId = fr, s.useImperativeHandle = ir, s.useInsertionEffect = nr, s.useLayoutEffect = or, s.useMemo = ur, s.useReducer = er, s.useRef = tr, s.useState = Zt, s.useSyncExternalStore = dr, s.useTransition = cr, s.version = Y, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(ve, ve.exports)), ve.exports;
}
process.env.NODE_ENV === "production" ? Ve.exports = Dr() : Ve.exports = Ir();
var K = Ve.exports;
const Tt = {
  position: {
    client: { x: null, y: null },
    screen: { x: null, y: null },
    page: { x: null, y: null }
  },
  scroll: {
    wheelDown: null,
    wheelUp: null
  },
  eventType: null,
  selectedElement: {
    position: {
      x: null,
      y: null,
      angle: null
    },
    boundingRect: {
      left: null,
      top: null,
      width: null,
      height: null
    },
    isHover: !1
  }
}, Mr = (j = !0, s = null, Y = { x: 0, y: 0 }) => {
  const [S, $] = K.useState(Tt);
  let P = null;
  const O = (A) => {
    let I, X, N, B, J, U;
    const Z = { ...S.scroll };
    switch (A.type) {
      case "mousemove":
      case "mousedown":
      case "mouseup":
      case "wheel":
        const T = A;
        I = T.clientX, X = T.clientY, N = T.screenX, B = T.screenY, J = T.pageX, U = T.pageY, Z.wheelDown = A.deltaY > 0, Z.wheelUp = A.deltaY < 0;
        break;
      case "touchmove":
      case "touchstart":
        const { touches: R } = A, k = R[0];
        I = k.clientX, X = k.clientY, N = k.screenX, B = k.screenY, J = k.pageX, U = k.pageY;
        break;
      default:
        throw new Error(`Unknown event triggered "${A.type}"`);
    }
    const V = { ...S.selectedElement.position }, W = { ...S.selectedElement.boundingRect };
    if (P) {
      const { left: T, top: R, width: k, height: q } = P.getBoundingClientRect();
      V.x = I - T - Y.x, V.y = X - R - Y.y;
      const G = 180 / Math.PI, oe = 180;
      V.angle = Math.atan2(V.y, -V.x) * G + oe, W.left = T, W.top = R, W.width = k, W.height = q;
    }
    $((T) => ({
      ...T,
      position: {
        client: { x: I, y: X },
        screen: { x: N, y: B },
        page: { x: J, y: U }
      },
      scroll: Z,
      eventType: A.type,
      selectedElement: {
        ...T.selectedElement,
        position: V,
        boundingRect: W
      }
    }));
  }, H = () => {
    $(Tt);
  }, re = () => {
    const A = { ...S.selectedElement };
    A.isHover = !0, $((I) => ({
      ...I,
      selectedElement: A
    }));
  }, Q = () => {
    const A = { ...S.selectedElement };
    A.isHover = !1, $((I) => ({
      ...I,
      selectedElement: A
    }));
  };
  return K.useEffect(() => {
    if (s) {
      if (P = document.getElementById(s), !P)
        throw new Error(
          `Element with id="${s}" doesn't exists`
        );
      P.addEventListener("mouseenter", re), P.addEventListener("mouseleave", Q);
    }
    return document.addEventListener("mousemove", O), document.addEventListener("mousedown", O), document.addEventListener("mouseup", O), document.addEventListener("wheel", O), document.addEventListener("mouseleave", H), j && (window.addEventListener("touchmove", O), window.addEventListener("touchstart", O), window.addEventListener("touchend", H)), () => {
      document.removeEventListener("mousemove", O), document.removeEventListener("mousedown", O), document.removeEventListener("mouseup", O), document.removeEventListener("wheel", O), document.removeEventListener("mouseleave", H), j && (window.removeEventListener("touchmove", O), window.removeEventListener("touchstart", O), window.removeEventListener("touchend", H));
    };
  }, []), S;
};
/**
 * @description
 * Creates a function that generates a formatted string of text(numbers) displaying the current pointer
 * coordinates and(or) scroll data.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This package is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use of this package.
 *
 * https://github.com/chvndler
 * Copyright © 2022. CDC® All rights reserved.
 **/
const Yr = () => {
  const [j, s] = K.useState("X: 00000, Y: 00000");
  return K.useEffect(() => {
    const Y = ($, P = 5) => $.toString().padStart(P, "0"), S = ($) => {
      const P = Y($.clientX), O = Y($.clientY);
      s(`X: ${P}, Y: ${O}`);
    };
    return window.addEventListener("mousemove", S), () => {
      window.removeEventListener("mousemove", S);
    };
  }, []), j;
};
/**
 * @description
 * Creates a function that generates a formatted string of text(numbers)
 * displaying the current scroll position.
 *
 * @author: Chandler Chappell <@chvndler>
 * @license This package is provided "as is," without warranty of any kind, expressed or implied.
 * In no event shall the author be held liable for any damages arising in any way from the use of this package.
 *
 * https://github.com/chvndler
 * Copyright © 2022. CDC® All rights reserved.
 **/
const Fr = ({ window: j, document: s }) => Math.min(j.scrollY / (s.body.offsetHeight - 770), 0.999), Nr = () => {
  const [j, s] = K.useState("0000");
  return K.useEffect(() => {
    const Y = ($, P = 4) => $.toString().padStart(P, "0"), S = () => {
      const $ = Fr({ window, document });
      s(`SCR: 0.${Y($.toFixed(3), 2)}`);
    };
    return window.addEventListener("scroll", S), () => {
      window.removeEventListener("scroll", S);
    };
  }, [window, document]), j;
}, Ur = ({
  dotSize: j = 10
}) => {
  const [s, Y] = K.useState({
    x: 0,
    y: 0
  });
  return K.useEffect(() => {
    const S = ($) => {
      const { clientX: P, clientY: O } = $;
      Y({ x: P, y: O });
    };
    return window.addEventListener("mousemove", S), () => {
      window.removeEventListener("mousemove", S);
    };
  }, []), [s, j];
}, Vr = typeof document < "u" ? K.useLayoutEffect : K.useEffect;
export {
  Mr as useArie,
  Yr as useArieCursor,
  Ur as useArieDot,
  Nr as useArieScroll,
  Vr as useIsomorphicLayoutEffect
};
//# sourceMappingURL=arie.mjs.map
