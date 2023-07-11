var Mr = { exports: {} }, E = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Vt() {
  if (lt)
    return E;
  lt = 1;
  var g = Symbol.for("react.element"), l = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), O = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), I = Symbol.for("react.suspense"), te = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), D = Symbol.iterator;
  function J(n) {
    return n === null || typeof n != "object" ? null : (n = D && n[D] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Q = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, me = {};
  function ne(n, s, m) {
    this.props = n, this.context = s, this.refs = me, this.updater = m || Q;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ne.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function oe() {
  }
  oe.prototype = ne.prototype;
  function P(n, s, m) {
    this.props = n, this.context = s, this.refs = me, this.updater = m || Q;
  }
  var ce = P.prototype = new oe();
  ce.constructor = P, se(ce, ne.prototype), ce.isPureReactComponent = !0;
  var M = Array.isArray, $ = Object.prototype.hasOwnProperty, N = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, m) {
    var S, _ = {}, F = null, Y = null;
    if (s != null)
      for (S in s.ref !== void 0 && (Y = s.ref), s.key !== void 0 && (F = "" + s.key), s)
        $.call(s, S) && !de.hasOwnProperty(S) && (_[S] = s[S]);
    var x = arguments.length - 2;
    if (x === 1)
      _.children = m;
    else if (1 < x) {
      for (var k = Array(x), K = 0; K < x; K++)
        k[K] = arguments[K + 2];
      _.children = k;
    }
    if (n && n.defaultProps)
      for (S in x = n.defaultProps, x)
        _[S] === void 0 && (_[S] = x[S]);
    return { $$typeof: g, type: n, key: F, ref: Y, props: _, _owner: N.current };
  }
  function Ee(n, s) {
    return { $$typeof: g, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Te(n) {
    return typeof n == "object" && n !== null && n.$$typeof === g;
  }
  function Be(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(m) {
      return s[m];
    });
  }
  var Oe = /\/+/g;
  function ae(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Be("" + n.key) : s.toString(36);
  }
  function le(n, s, m, S, _) {
    var F = typeof n;
    (F === "undefined" || F === "boolean") && (n = null);
    var Y = !1;
    if (n === null)
      Y = !0;
    else
      switch (F) {
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case g:
            case l:
              Y = !0;
          }
      }
    if (Y)
      return Y = n, _ = _(Y), n = S === "" ? "." + ae(Y, 0) : S, M(_) ? (m = "", n != null && (m = n.replace(Oe, "$&/") + "/"), le(_, s, m, "", function(K) {
        return K;
      })) : _ != null && (Te(_) && (_ = Ee(_, m + (!_.key || Y && Y.key === _.key ? "" : ("" + _.key).replace(Oe, "$&/") + "/") + n)), s.push(_)), 1;
    if (Y = 0, S = S === "" ? "." : S + ":", M(n))
      for (var x = 0; x < n.length; x++) {
        F = n[x];
        var k = S + ae(F, x);
        Y += le(F, s, m, k, _);
      }
    else if (k = J(n), typeof k == "function")
      for (n = k.call(n), x = 0; !(F = n.next()).done; )
        F = F.value, k = S + ae(F, x++), Y += le(F, s, m, k, _);
    else if (F === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return Y;
  }
  function Z(n, s, m) {
    if (n == null)
      return n;
    var S = [], _ = 0;
    return le(n, S, "", "", function(F) {
      return s.call(m, F, _++);
    }), S;
  }
  function pe(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = m);
      }, function(m) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = m);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var v = { current: null }, he = { transition: null }, Pe = { ReactCurrentDispatcher: v, ReactCurrentBatchConfig: he, ReactCurrentOwner: N };
  return E.Children = { map: Z, forEach: function(n, s, m) {
    Z(n, function() {
      s.apply(this, arguments);
    }, m);
  }, count: function(n) {
    var s = 0;
    return Z(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return Z(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!Te(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, E.Component = ne, E.Fragment = G, E.Profiler = U, E.PureComponent = P, E.StrictMode = T, E.Suspense = I, E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, E.cloneElement = function(n, s, m) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var S = se({}, n.props), _ = n.key, F = n.ref, Y = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (F = s.ref, Y = N.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var x = n.type.defaultProps;
      for (k in s)
        $.call(s, k) && !de.hasOwnProperty(k) && (S[k] = s[k] === void 0 && x !== void 0 ? x[k] : s[k]);
    }
    var k = arguments.length - 2;
    if (k === 1)
      S.children = m;
    else if (1 < k) {
      x = Array(k);
      for (var K = 0; K < k; K++)
        x[K] = arguments[K + 2];
      S.children = x;
    }
    return { $$typeof: g, type: n.type, key: _, ref: F, props: S, _owner: Y };
  }, E.createContext = function(n) {
    return n = { $$typeof: O, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: L, _context: n }, n.Consumer = n;
  }, E.createElement = ve, E.createFactory = function(n) {
    var s = ve.bind(null, n);
    return s.type = n, s;
  }, E.createRef = function() {
    return { current: null };
  }, E.forwardRef = function(n) {
    return { $$typeof: H, render: n };
  }, E.isValidElement = Te, E.lazy = function(n) {
    return { $$typeof: R, _payload: { _status: -1, _result: n }, _init: pe };
  }, E.memo = function(n, s) {
    return { $$typeof: te, type: n, compare: s === void 0 ? null : s };
  }, E.startTransition = function(n) {
    var s = he.transition;
    he.transition = {};
    try {
      n();
    } finally {
      he.transition = s;
    }
  }, E.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, E.useCallback = function(n, s) {
    return v.current.useCallback(n, s);
  }, E.useContext = function(n) {
    return v.current.useContext(n);
  }, E.useDebugValue = function() {
  }, E.useDeferredValue = function(n) {
    return v.current.useDeferredValue(n);
  }, E.useEffect = function(n, s) {
    return v.current.useEffect(n, s);
  }, E.useId = function() {
    return v.current.useId();
  }, E.useImperativeHandle = function(n, s, m) {
    return v.current.useImperativeHandle(n, s, m);
  }, E.useInsertionEffect = function(n, s) {
    return v.current.useInsertionEffect(n, s);
  }, E.useLayoutEffect = function(n, s) {
    return v.current.useLayoutEffect(n, s);
  }, E.useMemo = function(n, s) {
    return v.current.useMemo(n, s);
  }, E.useReducer = function(n, s, m) {
    return v.current.useReducer(n, s, m);
  }, E.useRef = function(n) {
    return v.current.useRef(n);
  }, E.useState = function(n) {
    return v.current.useState(n);
  }, E.useSyncExternalStore = function(n, s, m) {
    return v.current.useSyncExternalStore(n, s, m);
  }, E.useTransition = function() {
    return v.current.useTransition();
  }, E.version = "18.2.0", E;
}
var Je = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Je.exports;
var ft;
function Wt() {
  return ft || (ft = 1, function(g, l) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var G = "18.2.0", T = Symbol.for("react.element"), U = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), I = Symbol.for("react.provider"), te = Symbol.for("react.context"), R = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), me = Symbol.for("react.offscreen"), ne = Symbol.iterator, oe = "@@iterator";
      function P(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ne && e[ne] || e[oe];
        return typeof r == "function" ? r : null;
      }
      var ce = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, M = {
        transition: null
      }, $ = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, N = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ve = null;
      function Ee(e) {
        ve = e;
      }
      de.setExtraStackFrame = function(e) {
        ve = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Te = !1, Be = !1, Oe = !1, ae = !1, le = !1, Z = {
        ReactCurrentDispatcher: ce,
        ReactCurrentBatchConfig: M,
        ReactCurrentOwner: N
      };
      Z.ReactDebugCurrentFrame = de, Z.ReactCurrentActQueue = $;
      function pe(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            o[a - 1] = arguments[a];
          he("warn", e, o);
        }
      }
      function v(e) {
        {
          for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            o[a - 1] = arguments[a];
          he("error", e, o);
        }
      }
      function he(e, r, o) {
        {
          var a = Z.ReactDebugCurrentFrame, u = a.getStackAddendum();
          u !== "" && (r += "%s", o = o.concat([u]));
          var p = o.map(function(d) {
            return String(d);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Pe = {};
      function n(e, r) {
        {
          var o = e.constructor, a = o && (o.displayName || o.name) || "ReactClass", u = a + "." + r;
          if (Pe[u])
            return;
          v("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, a), Pe[u] = !0;
        }
      }
      var s = {
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
        enqueueForceUpdate: function(e, r, o) {
          n(e, "forceUpdate");
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
        enqueueReplaceState: function(e, r, o, a) {
          n(e, "replaceState");
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
        enqueueSetState: function(e, r, o, a) {
          n(e, "setState");
        }
      }, m = Object.assign, S = {};
      Object.freeze(S);
      function _(e, r, o) {
        this.props = e, this.context = r, this.refs = S, this.updater = o || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var F = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Y = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              pe("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var x in F)
          F.hasOwnProperty(x) && Y(x, F[x]);
      }
      function k() {
      }
      k.prototype = _.prototype;
      function K(e, r, o) {
        this.props = e, this.context = r, this.refs = S, this.updater = o || s;
      }
      var be = K.prototype = new k();
      be.constructor = K, m(be, _.prototype), be.isPureReactComponent = !0;
      function hr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Qe = Array.isArray;
      function $e(e) {
        return Qe(e);
      }
      function gr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return o;
        }
      }
      function Ye(e) {
        try {
          return ke(e), !1;
        } catch {
          return !0;
        }
      }
      function ke(e) {
        return "" + e;
      }
      function je(e) {
        if (Ye(e))
          return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(e)), ke(e);
      }
      function Ze(e, r, o) {
        var a = e.displayName;
        if (a)
          return a;
        var u = r.displayName || r.name || "";
        return u !== "" ? o + "(" + u + ")" : o;
      }
      function xe(e) {
        return e.displayName || "Context";
      }
      function ge(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case L:
            return "Fragment";
          case U:
            return "Portal";
          case H:
            return "Profiler";
          case O:
            return "StrictMode";
          case D:
            return "Suspense";
          case J:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case te:
              var r = e;
              return xe(r) + ".Consumer";
            case I:
              var o = e;
              return xe(o._context) + ".Provider";
            case R:
              return Ze(e, e.render, "ForwardRef");
            case Q:
              var a = e.displayName || null;
              return a !== null ? a : ge(e.type) || "Memo";
            case se: {
              var u = e, p = u._payload, d = u._init;
              try {
                return ge(d(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = Object.prototype.hasOwnProperty, Me = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, er, rr, Ne;
      Ne = {};
      function ze(e) {
        if (Ae.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Re(e) {
        if (Ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Er(e, r) {
        var o = function() {
          er || (er = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
      function tr(e, r) {
        var o = function() {
          rr || (rr = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
      function nr(e) {
        if (typeof e.ref == "string" && N.current && e.__self && N.current.stateNode !== e.__self) {
          var r = ge(N.current.type);
          Ne[r] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var De = function(e, r, o, a, u, p, d) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: T,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: o,
          props: d,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: u
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function _r(e, r, o) {
        var a, u = {}, p = null, d = null, y = null, w = null;
        if (r != null) {
          ze(r) && (d = r.ref, nr(r)), Re(r) && (je(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, w = r.__source === void 0 ? null : r.__source;
          for (a in r)
            Ae.call(r, a) && !Me.hasOwnProperty(a) && (u[a] = r[a]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          u.children = o;
        else if (A > 1) {
          for (var V = Array(A), W = 0; W < A; W++)
            V[W] = arguments[W + 2];
          Object.freeze && Object.freeze(V), u.children = V;
        }
        if (e && e.defaultProps) {
          var z = e.defaultProps;
          for (a in z)
            u[a] === void 0 && (u[a] = z[a]);
        }
        if (p || d) {
          var X = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && Er(u, X), d && tr(u, X);
        }
        return De(e, p, d, y, w, N.current, u);
      }
      function br(e, r) {
        var o = De(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return o;
      }
      function Rr(e, r, o) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, u = m({}, e.props), p = e.key, d = e.ref, y = e._self, w = e._source, A = e._owner;
        if (r != null) {
          ze(r) && (d = r.ref, A = N.current), Re(r) && (je(r.key), p = "" + r.key);
          var V;
          e.type && e.type.defaultProps && (V = e.type.defaultProps);
          for (a in r)
            Ae.call(r, a) && !Me.hasOwnProperty(a) && (r[a] === void 0 && V !== void 0 ? u[a] = V[a] : u[a] = r[a]);
        }
        var W = arguments.length - 2;
        if (W === 1)
          u.children = o;
        else if (W > 1) {
          for (var z = Array(W), X = 0; X < W; X++)
            z[X] = arguments[X + 2];
          u.children = z;
        }
        return De(e.type, p, d, y, w, A, u);
      }
      function we(e) {
        return typeof e == "object" && e !== null && e.$$typeof === T;
      }
      var or = ".", wr = ":";
      function Cr(e) {
        var r = /[=:]/g, o = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(r, function(u) {
          return o[u];
        });
        return "$" + a;
      }
      var Ve = !1, ar = /\/+/g;
      function _e(e) {
        return e.replace(ar, "$&/");
      }
      function Fe(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (je(e.key), Cr("" + e.key)) : r.toString(36);
      }
      function Ce(e, r, o, a, u) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var d = !1;
        if (e === null)
          d = !0;
        else
          switch (p) {
            case "string":
            case "number":
              d = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case T:
                case U:
                  d = !0;
              }
          }
        if (d) {
          var y = e, w = u(y), A = a === "" ? or + Fe(y, 0) : a;
          if ($e(w)) {
            var V = "";
            A != null && (V = _e(A) + "/"), Ce(w, r, V, "", function(Nt) {
              return Nt;
            });
          } else
            w != null && (we(w) && (w.key && (!y || y.key !== w.key) && je(w.key), w = br(
              w,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              o + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (w.key && (!y || y.key !== w.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                _e("" + w.key) + "/"
              ) : "") + A
            )), r.push(w));
          return 1;
        }
        var W, z, X = 0, re = a === "" ? or : a + wr;
        if ($e(e))
          for (var mr = 0; mr < e.length; mr++)
            W = e[mr], z = re + Fe(W, mr), X += Ce(W, r, o, z, u);
        else {
          var Yr = P(e);
          if (typeof Yr == "function") {
            var ut = e;
            Yr === ut.entries && (Ve || pe("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Yt = Yr.call(ut), st, Mt = 0; !(st = Yt.next()).done; )
              W = st.value, z = re + Fe(W, Mt++), X += Ce(W, r, o, z, u);
          } else if (p === "object") {
            var ct = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (ct === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : ct) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return X;
      }
      function Le(e, r, o) {
        if (e == null)
          return e;
        var a = [], u = 0;
        return Ce(e, a, "", "", function(p) {
          return r.call(o, p, u++);
        }), a;
      }
      function Sr(e) {
        var r = 0;
        return Le(e, function() {
          r++;
        }), r;
      }
      function ir(e, r, o) {
        Le(e, function() {
          r.apply(this, arguments);
        }, o);
      }
      function Tr(e) {
        return Le(e, function(r) {
          return r;
        }) || [];
      }
      function ur(e) {
        if (!we(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function sr(e) {
        var r = {
          $$typeof: te,
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
        r.Provider = {
          $$typeof: I,
          _context: r
        };
        var o = !1, a = !1, u = !1;
        {
          var p = {
            $$typeof: te,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return a || (a = !0, v("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(d) {
                r.Provider = d;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(d) {
                r._currentValue = d;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(d) {
                r._currentValue2 = d;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(d) {
                r._threadCount = d;
              }
            },
            Consumer: {
              get: function() {
                return o || (o = !0, v("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(d) {
                u || (pe("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", d), u = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Ie = -1, He = 0, qe = 1, Or = 2;
      function Pr(e) {
        if (e._status === Ie) {
          var r = e._result, o = r();
          if (o.then(function(p) {
            if (e._status === He || e._status === Ie) {
              var d = e;
              d._status = qe, d._result = p;
            }
          }, function(p) {
            if (e._status === He || e._status === Ie) {
              var d = e;
              d._status = Or, d._result = p;
            }
          }), e._status === Ie) {
            var a = e;
            a._status = He, a._result = o;
          }
        }
        if (e._status === qe) {
          var u = e._result;
          return u === void 0 && v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, u), "default" in u || v(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, u), u.default;
        } else
          throw e._result;
      }
      function kr(e) {
        var r = {
          // We use these fields to store the result.
          _status: Ie,
          _result: e
        }, o = {
          $$typeof: se,
          _payload: r,
          _init: Pr
        };
        {
          var a, u;
          Object.defineProperties(o, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(p) {
                v("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = p, Object.defineProperty(o, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return u;
              },
              set: function(p) {
                v("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), u = p, Object.defineProperty(o, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return o;
      }
      function jr(e) {
        e != null && e.$$typeof === Q ? v("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? v("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && v("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && v("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: R,
          render: e
        };
        {
          var o;
          Object.defineProperty(r, "displayName", {
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
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function i(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === L || e === H || le || e === O || e === D || e === J || ae || e === me || Te || Be || Oe || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === Q || e.$$typeof === I || e.$$typeof === te || e.$$typeof === R || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        i(e) || v("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var o = {
          $$typeof: Q,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var a;
          Object.defineProperty(o, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(u) {
              a = u, !e.name && !e.displayName && (e.displayName = u);
            }
          });
        }
        return o;
      }
      function f() {
        var e = ce.current;
        return e === null && v(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function C(e) {
        var r = f();
        if (e._context !== void 0) {
          var o = e._context;
          o.Consumer === e ? v("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : o.Provider === e && v("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function j(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, o) {
        var a = f();
        return a.useReducer(e, r, o);
      }
      function h(e) {
        var r = f();
        return r.useRef(e);
      }
      function ee(e, r) {
        var o = f();
        return o.useEffect(e, r);
      }
      function B(e, r) {
        var o = f();
        return o.useInsertionEffect(e, r);
      }
      function q(e, r) {
        var o = f();
        return o.useLayoutEffect(e, r);
      }
      function fe(e, r) {
        var o = f();
        return o.useCallback(e, r);
      }
      function Se(e, r) {
        var o = f();
        return o.useMemo(e, r);
      }
      function cr(e, r, o) {
        var a = f();
        return a.useImperativeHandle(e, r, o);
      }
      function ye(e, r) {
        {
          var o = f();
          return o.useDebugValue(e, r);
        }
      }
      function yt() {
        var e = f();
        return e.useTransition();
      }
      function mt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function ht() {
        var e = f();
        return e.useId();
      }
      function gt(e, r, o) {
        var a = f();
        return a.useSyncExternalStore(e, r, o);
      }
      var Xe = 0, Vr, Wr, Ur, Br, zr, Hr, qr;
      function Xr() {
      }
      Xr.__reactDisabledLog = !0;
      function Et() {
        {
          if (Xe === 0) {
            Vr = console.log, Wr = console.info, Ur = console.warn, Br = console.error, zr = console.group, Hr = console.groupCollapsed, qr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Xr,
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
          Xe++;
        }
      }
      function _t() {
        {
          if (Xe--, Xe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: m({}, e, {
                value: Vr
              }),
              info: m({}, e, {
                value: Wr
              }),
              warn: m({}, e, {
                value: Ur
              }),
              error: m({}, e, {
                value: Br
              }),
              group: m({}, e, {
                value: zr
              }),
              groupCollapsed: m({}, e, {
                value: Hr
              }),
              groupEnd: m({}, e, {
                value: qr
              })
            });
          }
          Xe < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var xr = Z.ReactCurrentDispatcher, Ar;
      function lr(e, r, o) {
        {
          if (Ar === void 0)
            try {
              throw Error();
            } catch (u) {
              var a = u.stack.trim().match(/\n( *(at )?)/);
              Ar = a && a[1] || "";
            }
          return `
` + Ar + e;
        }
      }
      var Dr = !1, fr;
      {
        var bt = typeof WeakMap == "function" ? WeakMap : Map;
        fr = new bt();
      }
      function Gr(e, r) {
        if (!e || Dr)
          return "";
        {
          var o = fr.get(e);
          if (o !== void 0)
            return o;
        }
        var a;
        Dr = !0;
        var u = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = xr.current, xr.current = null, Et();
        try {
          if (r) {
            var d = function() {
              throw Error();
            };
            if (Object.defineProperty(d.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(d, []);
              } catch (re) {
                a = re;
              }
              Reflect.construct(e, [], d);
            } else {
              try {
                d.call();
              } catch (re) {
                a = re;
              }
              e.call(d.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (re) {
              a = re;
            }
            e();
          }
        } catch (re) {
          if (re && a && typeof re.stack == "string") {
            for (var y = re.stack.split(`
`), w = a.stack.split(`
`), A = y.length - 1, V = w.length - 1; A >= 1 && V >= 0 && y[A] !== w[V]; )
              V--;
            for (; A >= 1 && V >= 0; A--, V--)
              if (y[A] !== w[V]) {
                if (A !== 1 || V !== 1)
                  do
                    if (A--, V--, V < 0 || y[A] !== w[V]) {
                      var W = `
` + y[A].replace(" at new ", " at ");
                      return e.displayName && W.includes("<anonymous>") && (W = W.replace("<anonymous>", e.displayName)), typeof e == "function" && fr.set(e, W), W;
                    }
                  while (A >= 1 && V >= 0);
                break;
              }
          }
        } finally {
          Dr = !1, xr.current = p, _t(), Error.prepareStackTrace = u;
        }
        var z = e ? e.displayName || e.name : "", X = z ? lr(z) : "";
        return typeof e == "function" && fr.set(e, X), X;
      }
      function Rt(e, r, o) {
        return Gr(e, !1);
      }
      function wt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function dr(e, r, o) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, wt(e));
        if (typeof e == "string")
          return lr(e);
        switch (e) {
          case D:
            return lr("Suspense");
          case J:
            return lr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case R:
              return Rt(e.render);
            case Q:
              return dr(e.type, r, o);
            case se: {
              var a = e, u = a._payload, p = a._init;
              try {
                return dr(p(u), r, o);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Jr = Z.ReactDebugCurrentFrame;
      function vr(e) {
        if (e) {
          var r = e._owner, o = dr(e.type, e._source, r ? r.type : null);
          Jr.setExtraStackFrame(o);
        } else
          Jr.setExtraStackFrame(null);
      }
      function Ct(e, r, o, a, u) {
        {
          var p = Function.call.bind(Ae);
          for (var d in e)
            if (p(e, d)) {
              var y = void 0;
              try {
                if (typeof e[d] != "function") {
                  var w = Error((a || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw w.name = "Invariant Violation", w;
                }
                y = e[d](r, d, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (A) {
                y = A;
              }
              y && !(y instanceof Error) && (vr(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, d, typeof y), vr(null)), y instanceof Error && !(y.message in Kr) && (Kr[y.message] = !0, vr(u), v("Failed %s type: %s", o, y.message), vr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, o = dr(e.type, e._source, r ? r.type : null);
          Ee(o);
        } else
          Ee(null);
      }
      var Fr;
      Fr = !1;
      function Qr() {
        if (N.current) {
          var e = ge(N.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function St(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + r + ":" + o + ".";
        }
        return "";
      }
      function Tt(e) {
        return e != null ? St(e.__source) : "";
      }
      var Zr = {};
      function Ot(e) {
        var r = Qr();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
      function et(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var o = Ot(r);
          if (!Zr[o]) {
            Zr[o] = !0;
            var a = "";
            e && e._owner && e._owner !== N.current && (a = " It was passed a child from " + ge(e._owner.type) + "."), We(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), We(null);
          }
        }
      }
      function rt(e, r) {
        if (typeof e == "object") {
          if ($e(e))
            for (var o = 0; o < e.length; o++) {
              var a = e[o];
              we(a) && et(a, r);
            }
          else if (we(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var u = P(e);
            if (typeof u == "function" && u !== e.entries)
              for (var p = u.call(e), d; !(d = p.next()).done; )
                we(d.value) && et(d.value, r);
          }
        }
      }
      function tt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var o;
          if (typeof r == "function")
            o = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === R || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === Q))
            o = r.propTypes;
          else
            return;
          if (o) {
            var a = ge(r);
            Ct(o, e.props, "prop", a, e);
          } else if (r.PropTypes !== void 0 && !Fr) {
            Fr = !0;
            var u = ge(r);
            v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Pt(e) {
        {
          for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
            var a = r[o];
            if (a !== "children" && a !== "key") {
              We(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function nt(e, r, o) {
        var a = i(e);
        if (!a) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = Tt(r);
          p ? u += p : u += Qr();
          var d;
          e === null ? d = "null" : $e(e) ? d = "array" : e !== void 0 && e.$$typeof === T ? (d = "<" + (ge(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, v("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, u);
        }
        var y = _r.apply(this, arguments);
        if (y == null)
          return y;
        if (a)
          for (var w = 2; w < arguments.length; w++)
            rt(arguments[w], e);
        return e === L ? Pt(y) : tt(y), y;
      }
      var ot = !1;
      function kt(e) {
        var r = nt.bind(null, e);
        return r.type = e, ot || (ot = !0, pe("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return pe("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function jt(e, r, o) {
        for (var a = Rr.apply(this, arguments), u = 2; u < arguments.length; u++)
          rt(arguments[u], a.type);
        return tt(a), a;
      }
      function xt(e, r) {
        var o = M.transition;
        M.transition = {};
        var a = M.transition;
        M.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (M.transition = o, o === null && a._updatedFibers) {
            var u = a._updatedFibers.size;
            u > 10 && pe("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var at = !1, pr = null;
      function At(e) {
        if (pr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), o = g && g[r];
            pr = o.call(g, "timers").setImmediate;
          } catch {
            pr = function(u) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && v("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = u, p.port2.postMessage(void 0);
            };
          }
        return pr(e);
      }
      var Ue = 0, it = !1;
      function Dt(e) {
        {
          var r = Ue;
          Ue++, $.current === null && ($.current = []);
          var o = $.isBatchingLegacy, a;
          try {
            if ($.isBatchingLegacy = !0, a = e(), !o && $.didScheduleLegacyUpdate) {
              var u = $.current;
              u !== null && ($.didScheduleLegacyUpdate = !1, $r(u));
            }
          } catch (z) {
            throw yr(r), z;
          } finally {
            $.isBatchingLegacy = o;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var p = a, d = !1, y = {
              then: function(z, X) {
                d = !0, p.then(function(re) {
                  yr(r), Ue === 0 ? Lr(re, z, X) : z(re);
                }, function(re) {
                  yr(r), X(re);
                });
              }
            };
            return !it && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              d || (it = !0, v("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var w = a;
            if (yr(r), Ue === 0) {
              var A = $.current;
              A !== null && ($r(A), $.current = null);
              var V = {
                then: function(z, X) {
                  $.current === null ? ($.current = [], Lr(w, z, X)) : z(w);
                }
              };
              return V;
            } else {
              var W = {
                then: function(z, X) {
                  z(w);
                }
              };
              return W;
            }
          }
        }
      }
      function yr(e) {
        e !== Ue - 1 && v("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ue = e;
      }
      function Lr(e, r, o) {
        {
          var a = $.current;
          if (a !== null)
            try {
              $r(a), At(function() {
                a.length === 0 ? ($.current = null, r(e)) : Lr(e, r, o);
              });
            } catch (u) {
              o(u);
            }
          else
            r(e);
        }
      }
      var Ir = !1;
      function $r(e) {
        if (!Ir) {
          Ir = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var o = e[r];
              do
                o = o(!0);
              while (o !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(r + 1), a;
          } finally {
            Ir = !1;
          }
        }
      }
      var Ft = nt, Lt = jt, It = kt, $t = {
        map: Le,
        forEach: ir,
        count: Sr,
        toArray: Tr,
        only: ur
      };
      l.Children = $t, l.Component = _, l.Fragment = L, l.Profiler = H, l.PureComponent = K, l.StrictMode = O, l.Suspense = D, l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Z, l.cloneElement = Lt, l.createContext = sr, l.createElement = Ft, l.createFactory = It, l.createRef = hr, l.forwardRef = jr, l.isValidElement = we, l.lazy = kr, l.memo = c, l.startTransition = xt, l.unstable_act = Dt, l.useCallback = fe, l.useContext = C, l.useDebugValue = ye, l.useDeferredValue = mt, l.useEffect = ee, l.useId = ht, l.useImperativeHandle = cr, l.useInsertionEffect = B, l.useLayoutEffect = q, l.useMemo = Se, l.useReducer = b, l.useRef = h, l.useState = j, l.useSyncExternalStore = gt, l.useTransition = yt, l.version = G, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Je, Je.exports)), Je.exports;
}
process.env.NODE_ENV === "production" ? Mr.exports = Vt() : Mr.exports = Wt();
var ue = Mr.exports;
const dt = {
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
}, Ut = (g = !0, l = null, G = { x: 0, y: 0 }) => {
  const [T, U] = ue.useState(dt);
  let L = null;
  const O = (R) => {
    let D, J, Q, se, me, ne;
    const oe = { ...T.scroll };
    switch (R.type) {
      case "mousemove":
      case "mousedown":
      case "mouseup":
      case "wheel":
        const M = R;
        D = M.clientX, J = M.clientY, Q = M.screenX, se = M.screenY, me = M.pageX, ne = M.pageY, oe.wheelDown = R.deltaY > 0, oe.wheelUp = R.deltaY < 0;
        break;
      case "touchmove":
      case "touchstart":
        const { touches: $ } = R, N = $[0];
        D = N.clientX, J = N.clientY, Q = N.screenX, se = N.screenY, me = N.pageX, ne = N.pageY;
        break;
      default:
        throw new Error(`Unknown event triggered "${R.type}"`);
    }
    const P = { ...T.selectedElement.position }, ce = { ...T.selectedElement.boundingRect };
    if (L) {
      const { left: M, top: $, width: N, height: de } = L.getBoundingClientRect();
      P.x = D - M - G.x, P.y = J - $ - G.y;
      const ve = 180 / Math.PI, Ee = 180;
      P.angle = Math.atan2(P.y, -P.x) * ve + Ee, ce.left = M, ce.top = $, ce.width = N, ce.height = de;
    }
    U((M) => ({
      ...M,
      position: {
        client: { x: D, y: J },
        screen: { x: Q, y: se },
        page: { x: me, y: ne }
      },
      scroll: oe,
      eventType: R.type,
      selectedElement: {
        ...M.selectedElement,
        position: P,
        boundingRect: ce
      }
    }));
  }, H = () => {
    U(dt);
  }, I = () => {
    const R = { ...T.selectedElement };
    R.isHover = !0, U((D) => ({
      ...D,
      selectedElement: R
    }));
  }, te = () => {
    const R = { ...T.selectedElement };
    R.isHover = !1, U((D) => ({
      ...D,
      selectedElement: R
    }));
  };
  return ue.useEffect(() => {
    if (l) {
      if (L = document.getElementById(l), !L)
        throw new Error(
          `Element with id="${l}" doesn't exists`
        );
      L.addEventListener("mouseenter", I), L.addEventListener("mouseleave", te);
    }
    return document.addEventListener("mousemove", O), document.addEventListener("mousedown", O), document.addEventListener("mouseup", O), document.addEventListener("wheel", O), document.addEventListener("mouseleave", H), g && (window.addEventListener("touchmove", O), window.addEventListener("touchstart", O), window.addEventListener("touchend", H)), () => {
      document.removeEventListener("mousemove", O), document.removeEventListener("mousedown", O), document.removeEventListener("mouseup", O), document.removeEventListener("wheel", O), document.removeEventListener("mouseleave", H), g && (window.removeEventListener("touchmove", O), window.removeEventListener("touchstart", O), window.removeEventListener("touchend", H));
    };
  }, []), T;
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
const Bt = () => {
  const [g, l] = ue.useState("00000"), [G, T] = ue.useState("00000");
  return ue.useEffect(() => {
    const U = (O, H = 5) => O.toString().padStart(H, "0"), L = (O) => {
      const H = U(O.clientX), I = U(O.clientY);
      l(H), T(I);
    };
    return window.addEventListener("mousemove", L), () => {
      window.removeEventListener("mousemove", L);
    };
  }, []), { xValue: g, yValue: G };
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
const zt = ({ window: g, document: l }) => Math.min(g.scrollY / (l.body.offsetHeight - 770), 0.999), Kt = () => {
  const [g, l] = ue.useState("0000");
  return ue.useEffect(() => {
    const G = (U, L = 4) => U.toString().padStart(L, "0"), T = () => {
      const U = zt({ window, document });
      l(`SCR: 0.${G(U.toFixed(3), 2)}`);
    };
    return window.addEventListener("scroll", T), () => {
      window.removeEventListener("scroll", T);
    };
  }, [window, document]), g;
}, Ht = ({
  dotSize: g = 10
}) => {
  const [l, G] = ue.useState({
    x: 0,
    y: 0
  });
  return ue.useEffect(() => {
    const T = (U) => {
      const { clientX: L, clientY: O } = U;
      G({ x: L, y: O });
    };
    return window.addEventListener("mousemove", T), () => {
      window.removeEventListener("mousemove", T);
    };
  }, []), [l, g];
}, qt = () => {
  const [g, l] = ue.useState({
    x: null,
    y: null
  });
  return ue.useEffect(() => {
    const G = (T) => {
      l({ x: T.clientX, y: T.clientY });
    };
    return window.addEventListener("mousemove", G), () => {
      window.removeEventListener("mousemove", G);
    };
  }, []), g;
};
var Nr = { exports: {} }, Ge = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function Xt() {
  if (vt)
    return Ge;
  vt = 1;
  var g = ue, l = Symbol.for("react.element"), G = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, U = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(H, I, te) {
    var R, D = {}, J = null, Q = null;
    te !== void 0 && (J = "" + te), I.key !== void 0 && (J = "" + I.key), I.ref !== void 0 && (Q = I.ref);
    for (R in I)
      T.call(I, R) && !L.hasOwnProperty(R) && (D[R] = I[R]);
    if (H && H.defaultProps)
      for (R in I = H.defaultProps, I)
        D[R] === void 0 && (D[R] = I[R]);
    return { $$typeof: l, type: H, key: J, ref: Q, props: D, _owner: U.current };
  }
  return Ge.Fragment = G, Ge.jsx = O, Ge.jsxs = O, Ge;
}
var Ke = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Gt() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    var g = ue, l = Symbol.for("react.element"), G = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), H = Symbol.for("react.context"), I = Symbol.for("react.forward_ref"), te = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), J = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), se = Symbol.iterator, me = "@@iterator";
    function ne(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = se && t[se] || t[me];
      return typeof i == "function" ? i : null;
    }
    var oe = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function P(t) {
      {
        for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
          c[f - 1] = arguments[f];
        ce("error", t, c);
      }
    }
    function ce(t, i, c) {
      {
        var f = oe.ReactDebugCurrentFrame, C = f.getStackAddendum();
        C !== "" && (i += "%s", c = c.concat([C]));
        var j = c.map(function(b) {
          return String(b);
        });
        j.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, j);
      }
    }
    var M = !1, $ = !1, N = !1, de = !1, ve = !1, Ee;
    Ee = Symbol.for("react.module.reference");
    function Te(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === T || t === L || ve || t === U || t === te || t === R || de || t === Q || M || $ || N || typeof t == "object" && t !== null && (t.$$typeof === J || t.$$typeof === D || t.$$typeof === O || t.$$typeof === H || t.$$typeof === I || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Ee || t.getModuleId !== void 0));
    }
    function Be(t, i, c) {
      var f = t.displayName;
      if (f)
        return f;
      var C = i.displayName || i.name || "";
      return C !== "" ? c + "(" + C + ")" : c;
    }
    function Oe(t) {
      return t.displayName || "Context";
    }
    function ae(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && P("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case T:
          return "Fragment";
        case G:
          return "Portal";
        case L:
          return "Profiler";
        case U:
          return "StrictMode";
        case te:
          return "Suspense";
        case R:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case H:
            var i = t;
            return Oe(i) + ".Consumer";
          case O:
            var c = t;
            return Oe(c._context) + ".Provider";
          case I:
            return Be(t, t.render, "ForwardRef");
          case D:
            var f = t.displayName || null;
            return f !== null ? f : ae(t.type) || "Memo";
          case J: {
            var C = t, j = C._payload, b = C._init;
            try {
              return ae(b(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, Z = 0, pe, v, he, Pe, n, s, m;
    function S() {
    }
    S.__reactDisabledLog = !0;
    function _() {
      {
        if (Z === 0) {
          pe = console.log, v = console.info, he = console.warn, Pe = console.error, n = console.group, s = console.groupCollapsed, m = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: S,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Z++;
      }
    }
    function F() {
      {
        if (Z--, Z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, t, {
              value: pe
            }),
            info: le({}, t, {
              value: v
            }),
            warn: le({}, t, {
              value: he
            }),
            error: le({}, t, {
              value: Pe
            }),
            group: le({}, t, {
              value: n
            }),
            groupCollapsed: le({}, t, {
              value: s
            }),
            groupEnd: le({}, t, {
              value: m
            })
          });
        }
        Z < 0 && P("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = oe.ReactCurrentDispatcher, x;
    function k(t, i, c) {
      {
        if (x === void 0)
          try {
            throw Error();
          } catch (C) {
            var f = C.stack.trim().match(/\n( *(at )?)/);
            x = f && f[1] || "";
          }
        return `
` + x + t;
      }
    }
    var K = !1, be;
    {
      var hr = typeof WeakMap == "function" ? WeakMap : Map;
      be = new hr();
    }
    function Qe(t, i) {
      if (!t || K)
        return "";
      {
        var c = be.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      K = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = Y.current, Y.current = null, _();
      try {
        if (i) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ye) {
              f = ye;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (ye) {
              f = ye;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ye) {
            f = ye;
          }
          t();
        }
      } catch (ye) {
        if (ye && f && typeof ye.stack == "string") {
          for (var h = ye.stack.split(`
`), ee = f.stack.split(`
`), B = h.length - 1, q = ee.length - 1; B >= 1 && q >= 0 && h[B] !== ee[q]; )
            q--;
          for (; B >= 1 && q >= 0; B--, q--)
            if (h[B] !== ee[q]) {
              if (B !== 1 || q !== 1)
                do
                  if (B--, q--, q < 0 || h[B] !== ee[q]) {
                    var fe = `
` + h[B].replace(" at new ", " at ");
                    return t.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", t.displayName)), typeof t == "function" && be.set(t, fe), fe;
                  }
                while (B >= 1 && q >= 0);
              break;
            }
        }
      } finally {
        K = !1, Y.current = j, F(), Error.prepareStackTrace = C;
      }
      var Se = t ? t.displayName || t.name : "", cr = Se ? k(Se) : "";
      return typeof t == "function" && be.set(t, cr), cr;
    }
    function $e(t, i, c) {
      return Qe(t, !1);
    }
    function gr(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Ye(t, i, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Qe(t, gr(t));
      if (typeof t == "string")
        return k(t);
      switch (t) {
        case te:
          return k("Suspense");
        case R:
          return k("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case I:
            return $e(t.render);
          case D:
            return Ye(t.type, i, c);
          case J: {
            var f = t, C = f._payload, j = f._init;
            try {
              return Ye(j(C), i, c);
            } catch {
            }
          }
        }
      return "";
    }
    var ke = Object.prototype.hasOwnProperty, je = {}, Ze = oe.ReactDebugCurrentFrame;
    function xe(t) {
      if (t) {
        var i = t._owner, c = Ye(t.type, t._source, i ? i.type : null);
        Ze.setExtraStackFrame(c);
      } else
        Ze.setExtraStackFrame(null);
    }
    function ge(t, i, c, f, C) {
      {
        var j = Function.call.bind(ke);
        for (var b in t)
          if (j(t, b)) {
            var h = void 0;
            try {
              if (typeof t[b] != "function") {
                var ee = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ee.name = "Invariant Violation", ee;
              }
              h = t[b](i, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (B) {
              h = B;
            }
            h && !(h instanceof Error) && (xe(C), P("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof h), xe(null)), h instanceof Error && !(h.message in je) && (je[h.message] = !0, xe(C), P("Failed %s type: %s", c, h.message), xe(null));
          }
      }
    }
    var Ae = Array.isArray;
    function Me(t) {
      return Ae(t);
    }
    function er(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, c = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function rr(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function ze(t) {
      if (rr(t))
        return P("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(t)), Ne(t);
    }
    var Re = oe.ReactCurrentOwner, Er = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, tr, nr, De;
    De = {};
    function _r(t) {
      if (ke.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function br(t) {
      if (ke.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rr(t, i) {
      if (typeof t.ref == "string" && Re.current && i && Re.current.stateNode !== i) {
        var c = ae(Re.current.type);
        De[c] || (P('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ae(Re.current.type), t.ref), De[c] = !0);
      }
    }
    function we(t, i) {
      {
        var c = function() {
          tr || (tr = !0, P("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function or(t, i) {
      {
        var c = function() {
          nr || (nr = !0, P("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var wr = function(t, i, c, f, C, j, b) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Cr(t, i, c, f, C) {
      {
        var j, b = {}, h = null, ee = null;
        c !== void 0 && (ze(c), h = "" + c), br(i) && (ze(i.key), h = "" + i.key), _r(i) && (ee = i.ref, Rr(i, C));
        for (j in i)
          ke.call(i, j) && !Er.hasOwnProperty(j) && (b[j] = i[j]);
        if (t && t.defaultProps) {
          var B = t.defaultProps;
          for (j in B)
            b[j] === void 0 && (b[j] = B[j]);
        }
        if (h || ee) {
          var q = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && we(b, q), ee && or(b, q);
        }
        return wr(t, h, ee, C, f, Re.current, b);
      }
    }
    var Ve = oe.ReactCurrentOwner, ar = oe.ReactDebugCurrentFrame;
    function _e(t) {
      if (t) {
        var i = t._owner, c = Ye(t.type, t._source, i ? i.type : null);
        ar.setExtraStackFrame(c);
      } else
        ar.setExtraStackFrame(null);
    }
    var Fe;
    Fe = !1;
    function Ce(t) {
      return typeof t == "object" && t !== null && t.$$typeof === l;
    }
    function Le() {
      {
        if (Ve.current) {
          var t = ae(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Sr(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + i + ":" + c + ".";
        }
        return "";
      }
    }
    var ir = {};
    function Tr(t) {
      {
        var i = Le();
        if (!i) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (i = `

Check the top-level render call using <` + c + ">.");
        }
        return i;
      }
    }
    function ur(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = Tr(i);
        if (ir[c])
          return;
        ir[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Ve.current && (f = " It was passed a child from " + ae(t._owner.type) + "."), _e(t), P('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), _e(null);
      }
    }
    function sr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Me(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            Ce(f) && ur(f, i);
          }
        else if (Ce(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var C = ne(t);
          if (typeof C == "function" && C !== t.entries)
            for (var j = C.call(t), b; !(b = j.next()).done; )
              Ce(b.value) && ur(b.value, i);
        }
      }
    }
    function Ie(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var c;
        if (typeof i == "function")
          c = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === I || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === D))
          c = i.propTypes;
        else
          return;
        if (c) {
          var f = ae(i);
          ge(c, t.props, "prop", f, t);
        } else if (i.PropTypes !== void 0 && !Fe) {
          Fe = !0;
          var C = ae(i);
          P("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && P("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(t) {
      {
        for (var i = Object.keys(t.props), c = 0; c < i.length; c++) {
          var f = i[c];
          if (f !== "children" && f !== "key") {
            _e(t), P("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), _e(null);
            break;
          }
        }
        t.ref !== null && (_e(t), P("Invalid attribute `ref` supplied to `React.Fragment`."), _e(null));
      }
    }
    function qe(t, i, c, f, C, j) {
      {
        var b = Te(t);
        if (!b) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ee = Sr(C);
          ee ? h += ee : h += Le();
          var B;
          t === null ? B = "null" : Me(t) ? B = "array" : t !== void 0 && t.$$typeof === l ? (B = "<" + (ae(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : B = typeof t, P("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", B, h);
        }
        var q = Cr(t, i, c, C, j);
        if (q == null)
          return q;
        if (b) {
          var fe = i.children;
          if (fe !== void 0)
            if (f)
              if (Me(fe)) {
                for (var Se = 0; Se < fe.length; Se++)
                  sr(fe[Se], t);
                Object.freeze && Object.freeze(fe);
              } else
                P("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              sr(fe, t);
        }
        return t === T ? He(q) : Ie(q), q;
      }
    }
    function Or(t, i, c) {
      return qe(t, i, c, !0);
    }
    function Pr(t, i, c) {
      return qe(t, i, c, !1);
    }
    var kr = Pr, jr = Or;
    Ke.Fragment = T, Ke.jsx = kr, Ke.jsxs = jr;
  }()), Ke;
}
process.env.NODE_ENV === "production" ? Nr.exports = Xt() : Nr.exports = Gt();
var ie = Nr.exports;
const Jt = (g) => {
  const l = Ut();
  return g.position.client ? /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    l.position.client.x,
    ", ",
    l.position.client.y
  ] }) : g.position.page ? /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    l.position.page.x,
    ", ",
    l.position.page.y
  ] }) : g.position.screen ? /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    l.position.screen.x,
    ", ",
    l.position.screen.y
  ] }) : null;
}, Qt = () => {
  const { xValue: g, yValue: l } = Bt();
  return /* @__PURE__ */ ie.jsxs(ie.Fragment, { children: [
    /* @__PURE__ */ ie.jsxs("p", { children: [
      "X: ",
      g
    ] }),
    /* @__PURE__ */ ie.jsxs("p", { children: [
      "Y: ",
      l
    ] })
  ] });
}, Zt = () => {
  const g = qt();
  return /* @__PURE__ */ ie.jsx(ie.Fragment, { children: JSON.stringify(g) });
}, en = () => {
  const [g, l] = Ht({ dotSize: 10 });
  return /* @__PURE__ */ ie.jsx(ie.Fragment, { children: /* @__PURE__ */ ie.jsx(
    "div",
    {
      style: {
        position: "absolute",
        left: g.x,
        top: g.y,
        width: l,
        height: l,
        borderRadius: "50%",
        backgroundColor: "red"
      }
    }
  ) });
}, rn = typeof document < "u" ? ue.useLayoutEffect : ue.useEffect;
export {
  Jt as Arie,
  Qt as ArieCursorPosition,
  en as ArieDot,
  Zt as AriePosition,
  Ut as useArie,
  Bt as useArieCursor,
  Ht as useArieDot,
  qt as useAriePosition,
  Kt as useArieScroll,
  rn as useIsomorphicLayoutEffect
};
//# sourceMappingURL=arie.mjs.map
