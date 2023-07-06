var ye = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function _n() {
  if (rr)
    return L;
  rr = 1;
  var t = Symbol.for("react.element"), e = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), _ = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), b = Symbol.iterator;
  function x(f) {
    return f === null || typeof f != "object" ? null : (f = b && f[b] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var A = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, S = Object.assign, D = {};
  function M(f, w, P) {
    this.props = f, this.context = w, this.refs = D, this.updater = P || A;
  }
  M.prototype.isReactComponent = {}, M.prototype.setState = function(f, w) {
    if (typeof f != "object" && typeof f != "function" && f != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, w, "setState");
  }, M.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function tt() {
  }
  tt.prototype = M.prototype;
  function at(f, w, P) {
    this.props = f, this.context = w, this.refs = D, this.updater = P || A;
  }
  var I = at.prototype = new tt();
  I.constructor = at, S(I, M.prototype), I.isPureReactComponent = !0;
  var O = Array.isArray, V = Object.prototype.hasOwnProperty, H = { current: null }, yt = { key: !0, ref: !0, __self: !0, __source: !0 };
  function wt(f, w, P) {
    var U, z = {}, W = null, st = null;
    if (w != null)
      for (U in w.ref !== void 0 && (st = w.ref), w.key !== void 0 && (W = "" + w.key), w)
        V.call(w, U) && !yt.hasOwnProperty(U) && (z[U] = w[U]);
    var G = arguments.length - 2;
    if (G === 1)
      z.children = P;
    else if (1 < G) {
      for (var X = Array(G), ht = 0; ht < G; ht++)
        X[ht] = arguments[ht + 2];
      z.children = X;
    }
    if (f && f.defaultProps)
      for (U in G = f.defaultProps, G)
        z[U] === void 0 && (z[U] = G[U]);
    return { $$typeof: t, type: f, key: W, ref: st, props: z, _owner: H.current };
  }
  function $t(f, w) {
    return { $$typeof: t, type: f.type, key: w, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function Lt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === t;
  }
  function ie(f) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(P) {
      return w[P];
    });
  }
  var qt = /\/+/g;
  function Ot(f, w) {
    return typeof f == "object" && f !== null && f.key != null ? ie("" + f.key) : w.toString(36);
  }
  function kt(f, w, P, U, z) {
    var W = typeof f;
    (W === "undefined" || W === "boolean") && (f = null);
    var st = !1;
    if (f === null)
      st = !0;
    else
      switch (W) {
        case "string":
        case "number":
          st = !0;
          break;
        case "object":
          switch (f.$$typeof) {
            case t:
            case e:
              st = !0;
          }
      }
    if (st)
      return st = f, z = z(st), f = U === "" ? "." + Ot(st, 0) : U, O(z) ? (P = "", f != null && (P = f.replace(qt, "$&/") + "/"), kt(z, w, P, "", function(ht) {
        return ht;
      })) : z != null && (Lt(z) && (z = $t(z, P + (!z.key || st && st.key === z.key ? "" : ("" + z.key).replace(qt, "$&/") + "/") + f)), w.push(z)), 1;
    if (st = 0, U = U === "" ? "." : U + ":", O(f))
      for (var G = 0; G < f.length; G++) {
        W = f[G];
        var X = U + Ot(W, G);
        st += kt(W, w, P, X, z);
      }
    else if (X = x(f), typeof X == "function")
      for (f = X.call(f), G = 0; !(W = f.next()).done; )
        W = W.value, X = U + Ot(W, G++), st += kt(W, w, P, X, z);
    else if (W === "object")
      throw w = String(f), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
    return st;
  }
  function _t(f, w, P) {
    if (f == null)
      return f;
    var U = [], z = 0;
    return kt(f, U, "", "", function(W) {
      return w.call(P, W, z++);
    }), U;
  }
  function Et(f) {
    if (f._status === -1) {
      var w = f._result;
      w = w(), w.then(function(P) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = P);
      }, function(P) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = P);
      }), f._status === -1 && (f._status = 0, f._result = w);
    }
    if (f._status === 1)
      return f._result.default;
    throw f._result;
  }
  var T = { current: null }, Mt = { transition: null }, Ut = { ReactCurrentDispatcher: T, ReactCurrentBatchConfig: Mt, ReactCurrentOwner: H };
  return L.Children = { map: _t, forEach: function(f, w, P) {
    _t(f, function() {
      w.apply(this, arguments);
    }, P);
  }, count: function(f) {
    var w = 0;
    return _t(f, function() {
      w++;
    }), w;
  }, toArray: function(f) {
    return _t(f, function(w) {
      return w;
    }) || [];
  }, only: function(f) {
    if (!Lt(f))
      throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, L.Component = M, L.Fragment = r, L.Profiler = i, L.PureComponent = at, L.StrictMode = n, L.Suspense = c, L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ut, L.cloneElement = function(f, w, P) {
    if (f == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var U = S({}, f.props), z = f.key, W = f.ref, st = f._owner;
    if (w != null) {
      if (w.ref !== void 0 && (W = w.ref, st = H.current), w.key !== void 0 && (z = "" + w.key), f.type && f.type.defaultProps)
        var G = f.type.defaultProps;
      for (X in w)
        V.call(w, X) && !yt.hasOwnProperty(X) && (U[X] = w[X] === void 0 && G !== void 0 ? G[X] : w[X]);
    }
    var X = arguments.length - 2;
    if (X === 1)
      U.children = P;
    else if (1 < X) {
      G = Array(X);
      for (var ht = 0; ht < X; ht++)
        G[ht] = arguments[ht + 2];
      U.children = G;
    }
    return { $$typeof: t, type: f.type, key: z, ref: W, props: U, _owner: st };
  }, L.createContext = function(f) {
    return f = { $$typeof: o, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: a, _context: f }, f.Consumer = f;
  }, L.createElement = wt, L.createFactory = function(f) {
    var w = wt.bind(null, f);
    return w.type = f, w;
  }, L.createRef = function() {
    return { current: null };
  }, L.forwardRef = function(f) {
    return { $$typeof: u, render: f };
  }, L.isValidElement = Lt, L.lazy = function(f) {
    return { $$typeof: y, _payload: { _status: -1, _result: f }, _init: Et };
  }, L.memo = function(f, w) {
    return { $$typeof: _, type: f, compare: w === void 0 ? null : w };
  }, L.startTransition = function(f) {
    var w = Mt.transition;
    Mt.transition = {};
    try {
      f();
    } finally {
      Mt.transition = w;
    }
  }, L.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, L.useCallback = function(f, w) {
    return T.current.useCallback(f, w);
  }, L.useContext = function(f) {
    return T.current.useContext(f);
  }, L.useDebugValue = function() {
  }, L.useDeferredValue = function(f) {
    return T.current.useDeferredValue(f);
  }, L.useEffect = function(f, w) {
    return T.current.useEffect(f, w);
  }, L.useId = function() {
    return T.current.useId();
  }, L.useImperativeHandle = function(f, w, P) {
    return T.current.useImperativeHandle(f, w, P);
  }, L.useInsertionEffect = function(f, w) {
    return T.current.useInsertionEffect(f, w);
  }, L.useLayoutEffect = function(f, w) {
    return T.current.useLayoutEffect(f, w);
  }, L.useMemo = function(f, w) {
    return T.current.useMemo(f, w);
  }, L.useReducer = function(f, w, P) {
    return T.current.useReducer(f, w, P);
  }, L.useRef = function(f) {
    return T.current.useRef(f);
  }, L.useState = function(f) {
    return T.current.useState(f);
  }, L.useSyncExternalStore = function(f, w, P) {
    return T.current.useSyncExternalStore(f, w, P);
  }, L.useTransition = function() {
    return T.current.useTransition();
  }, L.version = "18.2.0", L;
}
var Ft = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ft.exports;
var nr;
function gn() {
  return nr || (nr = 1, function(t, e) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var r = "18.2.0", n = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), _ = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), A = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), M = Symbol.iterator, tt = "@@iterator";
      function at(s) {
        if (s === null || typeof s != "object")
          return null;
        var l = M && s[M] || s[tt];
        return typeof l == "function" ? l : null;
      }
      var I = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, O = {
        transition: null
      }, V = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, yt = {}, wt = null;
      function $t(s) {
        wt = s;
      }
      yt.setExtraStackFrame = function(s) {
        wt = s;
      }, yt.getCurrentStack = null, yt.getStackAddendum = function() {
        var s = "";
        wt && (s += wt);
        var l = yt.getCurrentStack;
        return l && (s += l() || ""), s;
      };
      var Lt = !1, ie = !1, qt = !1, Ot = !1, kt = !1, _t = {
        ReactCurrentDispatcher: I,
        ReactCurrentBatchConfig: O,
        ReactCurrentOwner: H
      };
      _t.ReactDebugCurrentFrame = yt, _t.ReactCurrentActQueue = V;
      function Et(s) {
        {
          for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
            d[p - 1] = arguments[p];
          Mt("warn", s, d);
        }
      }
      function T(s) {
        {
          for (var l = arguments.length, d = new Array(l > 1 ? l - 1 : 0), p = 1; p < l; p++)
            d[p - 1] = arguments[p];
          Mt("error", s, d);
        }
      }
      function Mt(s, l, d) {
        {
          var p = _t.ReactDebugCurrentFrame, v = p.getStackAddendum();
          v !== "" && (l += "%s", d = d.concat([v]));
          var R = d.map(function(E) {
            return String(E);
          });
          R.unshift("Warning: " + l), Function.prototype.apply.call(console[s], console, R);
        }
      }
      var Ut = {};
      function f(s, l) {
        {
          var d = s.constructor, p = d && (d.displayName || d.name) || "ReactClass", v = p + "." + l;
          if (Ut[v])
            return;
          T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", l, p), Ut[v] = !0;
        }
      }
      var w = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(s) {
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
        enqueueForceUpdate: function(s, l, d) {
          f(s, "forceUpdate");
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
        enqueueReplaceState: function(s, l, d, p) {
          f(s, "replaceState");
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
        enqueueSetState: function(s, l, d, p) {
          f(s, "setState");
        }
      }, P = Object.assign, U = {};
      Object.freeze(U);
      function z(s, l, d) {
        this.props = s, this.context = l, this.refs = U, this.updater = d || w;
      }
      z.prototype.isReactComponent = {}, z.prototype.setState = function(s, l) {
        if (typeof s != "object" && typeof s != "function" && s != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, s, l, "setState");
      }, z.prototype.forceUpdate = function(s) {
        this.updater.enqueueForceUpdate(this, s, "forceUpdate");
      };
      {
        var W = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, st = function(s, l) {
          Object.defineProperty(z.prototype, s, {
            get: function() {
              Et("%s(...) is deprecated in plain JavaScript React classes. %s", l[0], l[1]);
            }
          });
        };
        for (var G in W)
          W.hasOwnProperty(G) && st(G, W[G]);
      }
      function X() {
      }
      X.prototype = z.prototype;
      function ht(s, l, d) {
        this.props = s, this.context = l, this.refs = U, this.updater = d || w;
      }
      var se = ht.prototype = new X();
      se.constructor = ht, P(se, z.prototype), se.isPureReactComponent = !0;
      function lr() {
        var s = {
          current: null
        };
        return Object.seal(s), s;
      }
      var ur = Array.isArray;
      function Nt(s) {
        return ur(s);
      }
      function cr(s) {
        {
          var l = typeof Symbol == "function" && Symbol.toStringTag, d = l && s[Symbol.toStringTag] || s.constructor.name || "Object";
          return d;
        }
      }
      function hr(s) {
        try {
          return we(s), !1;
        } catch {
          return !0;
        }
      }
      function we(s) {
        return "" + s;
      }
      function Vt(s) {
        if (hr(s))
          return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(s)), we(s);
      }
      function fr(s, l, d) {
        var p = s.displayName;
        if (p)
          return p;
        var v = l.displayName || l.name || "";
        return v !== "" ? d + "(" + v + ")" : d;
      }
      function be(s) {
        return s.displayName || "Context";
      }
      function Ct(s) {
        if (s == null)
          return null;
        if (typeof s.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
          return s.displayName || s.name || null;
        if (typeof s == "string")
          return s;
        switch (s) {
          case a:
            return "Fragment";
          case i:
            return "Portal";
          case u:
            return "Profiler";
          case o:
            return "StrictMode";
          case b:
            return "Suspense";
          case x:
            return "SuspenseList";
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case _:
              var l = s;
              return be(l) + ".Consumer";
            case c:
              var d = s;
              return be(d._context) + ".Provider";
            case y:
              return fr(s, s.render, "ForwardRef");
            case A:
              var p = s.displayName || null;
              return p !== null ? p : Ct(s.type) || "Memo";
            case S: {
              var v = s, R = v._payload, E = v._init;
              try {
                return Ct(E(R));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var zt = Object.prototype.hasOwnProperty, xe = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Ee, Ce, ae;
      ae = {};
      function Ae(s) {
        if (zt.call(s, "ref")) {
          var l = Object.getOwnPropertyDescriptor(s, "ref").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return s.ref !== void 0;
      }
      function Re(s) {
        if (zt.call(s, "key")) {
          var l = Object.getOwnPropertyDescriptor(s, "key").get;
          if (l && l.isReactWarning)
            return !1;
        }
        return s.key !== void 0;
      }
      function dr(s, l) {
        var d = function() {
          Ee || (Ee = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: d,
          configurable: !0
        });
      }
      function pr(s, l) {
        var d = function() {
          Ce || (Ce = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", l));
        };
        d.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: d,
          configurable: !0
        });
      }
      function mr(s) {
        if (typeof s.ref == "string" && H.current && s.__self && H.current.stateNode !== s.__self) {
          var l = Ct(H.current.type);
          ae[l] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', l, s.ref), ae[l] = !0);
        }
      }
      var oe = function(s, l, d, p, v, R, E) {
        var k = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: n,
          // Built-in properties that belong on the element
          type: s,
          key: l,
          ref: d,
          props: E,
          // Record the component responsible for creating this element.
          _owner: R
        };
        return k._store = {}, Object.defineProperty(k._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(k, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: p
        }), Object.defineProperty(k, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: v
        }), Object.freeze && (Object.freeze(k.props), Object.freeze(k)), k;
      };
      function _r(s, l, d) {
        var p, v = {}, R = null, E = null, k = null, B = null;
        if (l != null) {
          Ae(l) && (E = l.ref, mr(l)), Re(l) && (Vt(l.key), R = "" + l.key), k = l.__self === void 0 ? null : l.__self, B = l.__source === void 0 ? null : l.__source;
          for (p in l)
            zt.call(l, p) && !xe.hasOwnProperty(p) && (v[p] = l[p]);
        }
        var Y = arguments.length - 2;
        if (Y === 1)
          v.children = d;
        else if (Y > 1) {
          for (var K = Array(Y), Z = 0; Z < Y; Z++)
            K[Z] = arguments[Z + 2];
          Object.freeze && Object.freeze(K), v.children = K;
        }
        if (s && s.defaultProps) {
          var et = s.defaultProps;
          for (p in et)
            v[p] === void 0 && (v[p] = et[p]);
        }
        if (R || E) {
          var ot = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          R && dr(v, ot), E && pr(v, ot);
        }
        return oe(s, R, E, k, B, H.current, v);
      }
      function gr(s, l) {
        var d = oe(s.type, l, s.ref, s._self, s._source, s._owner, s.props);
        return d;
      }
      function yr(s, l, d) {
        if (s == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + s + ".");
        var p, v = P({}, s.props), R = s.key, E = s.ref, k = s._self, B = s._source, Y = s._owner;
        if (l != null) {
          Ae(l) && (E = l.ref, Y = H.current), Re(l) && (Vt(l.key), R = "" + l.key);
          var K;
          s.type && s.type.defaultProps && (K = s.type.defaultProps);
          for (p in l)
            zt.call(l, p) && !xe.hasOwnProperty(p) && (l[p] === void 0 && K !== void 0 ? v[p] = K[p] : v[p] = l[p]);
        }
        var Z = arguments.length - 2;
        if (Z === 1)
          v.children = d;
        else if (Z > 1) {
          for (var et = Array(Z), ot = 0; ot < Z; ot++)
            et[ot] = arguments[ot + 2];
          v.children = et;
        }
        return oe(s.type, R, E, k, B, Y, v);
      }
      function St(s) {
        return typeof s == "object" && s !== null && s.$$typeof === n;
      }
      var Te = ".", vr = ":";
      function wr(s) {
        var l = /[=:]/g, d = {
          "=": "=0",
          ":": "=2"
        }, p = s.replace(l, function(v) {
          return d[v];
        });
        return "$" + p;
      }
      var Me = !1, br = /\/+/g;
      function De(s) {
        return s.replace(br, "$&/");
      }
      function le(s, l) {
        return typeof s == "object" && s !== null && s.key != null ? (Vt(s.key), wr("" + s.key)) : l.toString(36);
      }
      function Yt(s, l, d, p, v) {
        var R = typeof s;
        (R === "undefined" || R === "boolean") && (s = null);
        var E = !1;
        if (s === null)
          E = !0;
        else
          switch (R) {
            case "string":
            case "number":
              E = !0;
              break;
            case "object":
              switch (s.$$typeof) {
                case n:
                case i:
                  E = !0;
              }
          }
        if (E) {
          var k = s, B = v(k), Y = p === "" ? Te + le(k, 0) : p;
          if (Nt(B)) {
            var K = "";
            Y != null && (K = De(Y) + "/"), Yt(B, l, K, "", function(mn) {
              return mn;
            });
          } else
            B != null && (St(B) && (B.key && (!k || k.key !== B.key) && Vt(B.key), B = gr(
              B,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              d + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (B.key && (!k || k.key !== B.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                De("" + B.key) + "/"
              ) : "") + Y
            )), l.push(B));
          return 1;
        }
        var Z, et, ot = 0, ut = p === "" ? Te : p + vr;
        if (Nt(s))
          for (var Qt = 0; Qt < s.length; Qt++)
            Z = s[Qt], et = ut + le(Z, Qt), ot += Yt(Z, l, d, et, v);
        else {
          var ge = at(s);
          if (typeof ge == "function") {
            var Qe = s;
            ge === Qe.entries && (Me || Et("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var dn = ge.call(Qe), tr, pn = 0; !(tr = dn.next()).done; )
              Z = tr.value, et = ut + le(Z, pn++), ot += Yt(Z, l, d, et, v);
          } else if (R === "object") {
            var er = String(s);
            throw new Error("Objects are not valid as a React child (found: " + (er === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : er) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return ot;
      }
      function Ht(s, l, d) {
        if (s == null)
          return s;
        var p = [], v = 0;
        return Yt(s, p, "", "", function(R) {
          return l.call(d, R, v++);
        }), p;
      }
      function xr(s) {
        var l = 0;
        return Ht(s, function() {
          l++;
        }), l;
      }
      function Er(s, l, d) {
        Ht(s, function() {
          l.apply(this, arguments);
        }, d);
      }
      function Cr(s) {
        return Ht(s, function(l) {
          return l;
        }) || [];
      }
      function Ar(s) {
        if (!St(s))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return s;
      }
      function Rr(s) {
        var l = {
          $$typeof: _,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: s,
          _currentValue2: s,
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
        l.Provider = {
          $$typeof: c,
          _context: l
        };
        var d = !1, p = !1, v = !1;
        {
          var R = {
            $$typeof: _,
            _context: l
          };
          Object.defineProperties(R, {
            Provider: {
              get: function() {
                return p || (p = !0, T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), l.Provider;
              },
              set: function(E) {
                l.Provider = E;
              }
            },
            _currentValue: {
              get: function() {
                return l._currentValue;
              },
              set: function(E) {
                l._currentValue = E;
              }
            },
            _currentValue2: {
              get: function() {
                return l._currentValue2;
              },
              set: function(E) {
                l._currentValue2 = E;
              }
            },
            _threadCount: {
              get: function() {
                return l._threadCount;
              },
              set: function(E) {
                l._threadCount = E;
              }
            },
            Consumer: {
              get: function() {
                return d || (d = !0, T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), l.Consumer;
              }
            },
            displayName: {
              get: function() {
                return l.displayName;
              },
              set: function(E) {
                v || (Et("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", E), v = !0);
              }
            }
          }), l.Consumer = R;
        }
        return l._currentRenderer = null, l._currentRenderer2 = null, l;
      }
      var Bt = -1, ue = 0, $e = 1, Tr = 2;
      function Mr(s) {
        if (s._status === Bt) {
          var l = s._result, d = l();
          if (d.then(function(R) {
            if (s._status === ue || s._status === Bt) {
              var E = s;
              E._status = $e, E._result = R;
            }
          }, function(R) {
            if (s._status === ue || s._status === Bt) {
              var E = s;
              E._status = Tr, E._result = R;
            }
          }), s._status === Bt) {
            var p = s;
            p._status = ue, p._result = d;
          }
        }
        if (s._status === $e) {
          var v = s._result;
          return v === void 0 && T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, v), "default" in v || T(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, v), v.default;
        } else
          throw s._result;
      }
      function Dr(s) {
        var l = {
          // We use these fields to store the result.
          _status: Bt,
          _result: s
        }, d = {
          $$typeof: S,
          _payload: l,
          _init: Mr
        };
        {
          var p, v;
          Object.defineProperties(d, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return p;
              },
              set: function(R) {
                T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), p = R, Object.defineProperty(d, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return v;
              },
              set: function(R) {
                T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), v = R, Object.defineProperty(d, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return d;
      }
      function $r(s) {
        s != null && s.$$typeof === A ? T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof s != "function" ? T("forwardRef requires a render function but was given %s.", s === null ? "null" : typeof s) : s.length !== 0 && s.length !== 2 && T("forwardRef render functions accept exactly two parameters: props and ref. %s", s.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), s != null && (s.defaultProps != null || s.propTypes != null) && T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var l = {
          $$typeof: y,
          render: s
        };
        {
          var d;
          Object.defineProperty(l, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return d;
            },
            set: function(p) {
              d = p, !s.name && !s.displayName && (s.displayName = p);
            }
          });
        }
        return l;
      }
      var ke;
      ke = Symbol.for("react.module.reference");
      function Se(s) {
        return !!(typeof s == "string" || typeof s == "function" || s === a || s === u || kt || s === o || s === b || s === x || Ot || s === D || Lt || ie || qt || typeof s == "object" && s !== null && (s.$$typeof === S || s.$$typeof === A || s.$$typeof === c || s.$$typeof === _ || s.$$typeof === y || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        s.$$typeof === ke || s.getModuleId !== void 0));
      }
      function kr(s, l) {
        Se(s) || T("memo: The first argument must be a component. Instead received: %s", s === null ? "null" : typeof s);
        var d = {
          $$typeof: A,
          type: s,
          compare: l === void 0 ? null : l
        };
        {
          var p;
          Object.defineProperty(d, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return p;
            },
            set: function(v) {
              p = v, !s.name && !s.displayName && (s.displayName = v);
            }
          });
        }
        return d;
      }
      function ft() {
        var s = I.current;
        return s === null && T(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), s;
      }
      function Sr(s) {
        var l = ft();
        if (s._context !== void 0) {
          var d = s._context;
          d.Consumer === s ? T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : d.Provider === s && T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return l.useContext(s);
      }
      function Pr(s) {
        var l = ft();
        return l.useState(s);
      }
      function Ir(s, l, d) {
        var p = ft();
        return p.useReducer(s, l, d);
      }
      function Lr(s) {
        var l = ft();
        return l.useRef(s);
      }
      function Or(s, l) {
        var d = ft();
        return d.useEffect(s, l);
      }
      function zr(s, l) {
        var d = ft();
        return d.useInsertionEffect(s, l);
      }
      function Br(s, l) {
        var d = ft();
        return d.useLayoutEffect(s, l);
      }
      function jr(s, l) {
        var d = ft();
        return d.useCallback(s, l);
      }
      function Fr(s, l) {
        var d = ft();
        return d.useMemo(s, l);
      }
      function qr(s, l, d) {
        var p = ft();
        return p.useImperativeHandle(s, l, d);
      }
      function Ur(s, l) {
        {
          var d = ft();
          return d.useDebugValue(s, l);
        }
      }
      function Nr() {
        var s = ft();
        return s.useTransition();
      }
      function Vr(s) {
        var l = ft();
        return l.useDeferredValue(s);
      }
      function Yr() {
        var s = ft();
        return s.useId();
      }
      function Hr(s, l, d) {
        var p = ft();
        return p.useSyncExternalStore(s, l, d);
      }
      var jt = 0, Pe, Ie, Le, Oe, ze, Be, je;
      function Fe() {
      }
      Fe.__reactDisabledLog = !0;
      function Wr() {
        {
          if (jt === 0) {
            Pe = console.log, Ie = console.info, Le = console.warn, Oe = console.error, ze = console.group, Be = console.groupCollapsed, je = console.groupEnd;
            var s = {
              configurable: !0,
              enumerable: !0,
              value: Fe,
              writable: !0
            };
            Object.defineProperties(console, {
              info: s,
              log: s,
              warn: s,
              error: s,
              group: s,
              groupCollapsed: s,
              groupEnd: s
            });
          }
          jt++;
        }
      }
      function Gr() {
        {
          if (jt--, jt === 0) {
            var s = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: P({}, s, {
                value: Pe
              }),
              info: P({}, s, {
                value: Ie
              }),
              warn: P({}, s, {
                value: Le
              }),
              error: P({}, s, {
                value: Oe
              }),
              group: P({}, s, {
                value: ze
              }),
              groupCollapsed: P({}, s, {
                value: Be
              }),
              groupEnd: P({}, s, {
                value: je
              })
            });
          }
          jt < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var ce = _t.ReactCurrentDispatcher, he;
      function Wt(s, l, d) {
        {
          if (he === void 0)
            try {
              throw Error();
            } catch (v) {
              var p = v.stack.trim().match(/\n( *(at )?)/);
              he = p && p[1] || "";
            }
          return `
` + he + s;
        }
      }
      var fe = !1, Gt;
      {
        var Xr = typeof WeakMap == "function" ? WeakMap : Map;
        Gt = new Xr();
      }
      function qe(s, l) {
        if (!s || fe)
          return "";
        {
          var d = Gt.get(s);
          if (d !== void 0)
            return d;
        }
        var p;
        fe = !0;
        var v = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var R;
        R = ce.current, ce.current = null, Wr();
        try {
          if (l) {
            var E = function() {
              throw Error();
            };
            if (Object.defineProperty(E.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(E, []);
              } catch (ut) {
                p = ut;
              }
              Reflect.construct(s, [], E);
            } else {
              try {
                E.call();
              } catch (ut) {
                p = ut;
              }
              s.call(E.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (ut) {
              p = ut;
            }
            s();
          }
        } catch (ut) {
          if (ut && p && typeof ut.stack == "string") {
            for (var k = ut.stack.split(`
`), B = p.stack.split(`
`), Y = k.length - 1, K = B.length - 1; Y >= 1 && K >= 0 && k[Y] !== B[K]; )
              K--;
            for (; Y >= 1 && K >= 0; Y--, K--)
              if (k[Y] !== B[K]) {
                if (Y !== 1 || K !== 1)
                  do
                    if (Y--, K--, K < 0 || k[Y] !== B[K]) {
                      var Z = `
` + k[Y].replace(" at new ", " at ");
                      return s.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", s.displayName)), typeof s == "function" && Gt.set(s, Z), Z;
                    }
                  while (Y >= 1 && K >= 0);
                break;
              }
          }
        } finally {
          fe = !1, ce.current = R, Gr(), Error.prepareStackTrace = v;
        }
        var et = s ? s.displayName || s.name : "", ot = et ? Wt(et) : "";
        return typeof s == "function" && Gt.set(s, ot), ot;
      }
      function Kr(s, l, d) {
        return qe(s, !1);
      }
      function Zr(s) {
        var l = s.prototype;
        return !!(l && l.isReactComponent);
      }
      function Xt(s, l, d) {
        if (s == null)
          return "";
        if (typeof s == "function")
          return qe(s, Zr(s));
        if (typeof s == "string")
          return Wt(s);
        switch (s) {
          case b:
            return Wt("Suspense");
          case x:
            return Wt("SuspenseList");
        }
        if (typeof s == "object")
          switch (s.$$typeof) {
            case y:
              return Kr(s.render);
            case A:
              return Xt(s.type, l, d);
            case S: {
              var p = s, v = p._payload, R = p._init;
              try {
                return Xt(R(v), l, d);
              } catch {
              }
            }
          }
        return "";
      }
      var Ue = {}, Ne = _t.ReactDebugCurrentFrame;
      function Kt(s) {
        if (s) {
          var l = s._owner, d = Xt(s.type, s._source, l ? l.type : null);
          Ne.setExtraStackFrame(d);
        } else
          Ne.setExtraStackFrame(null);
      }
      function Jr(s, l, d, p, v) {
        {
          var R = Function.call.bind(zt);
          for (var E in s)
            if (R(s, E)) {
              var k = void 0;
              try {
                if (typeof s[E] != "function") {
                  var B = Error((p || "React class") + ": " + d + " type `" + E + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[E] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw B.name = "Invariant Violation", B;
                }
                k = s[E](l, E, p, d, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Y) {
                k = Y;
              }
              k && !(k instanceof Error) && (Kt(v), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", d, E, typeof k), Kt(null)), k instanceof Error && !(k.message in Ue) && (Ue[k.message] = !0, Kt(v), T("Failed %s type: %s", d, k.message), Kt(null));
            }
        }
      }
      function Pt(s) {
        if (s) {
          var l = s._owner, d = Xt(s.type, s._source, l ? l.type : null);
          $t(d);
        } else
          $t(null);
      }
      var de;
      de = !1;
      function Ve() {
        if (H.current) {
          var s = Ct(H.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
      function Qr(s) {
        if (s !== void 0) {
          var l = s.fileName.replace(/^.*[\\\/]/, ""), d = s.lineNumber;
          return `

Check your code at ` + l + ":" + d + ".";
        }
        return "";
      }
      function tn(s) {
        return s != null ? Qr(s.__source) : "";
      }
      var Ye = {};
      function en(s) {
        var l = Ve();
        if (!l) {
          var d = typeof s == "string" ? s : s.displayName || s.name;
          d && (l = `

Check the top-level render call using <` + d + ">.");
        }
        return l;
      }
      function He(s, l) {
        if (!(!s._store || s._store.validated || s.key != null)) {
          s._store.validated = !0;
          var d = en(l);
          if (!Ye[d]) {
            Ye[d] = !0;
            var p = "";
            s && s._owner && s._owner !== H.current && (p = " It was passed a child from " + Ct(s._owner.type) + "."), Pt(s), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', d, p), Pt(null);
          }
        }
      }
      function We(s, l) {
        if (typeof s == "object") {
          if (Nt(s))
            for (var d = 0; d < s.length; d++) {
              var p = s[d];
              St(p) && He(p, l);
            }
          else if (St(s))
            s._store && (s._store.validated = !0);
          else if (s) {
            var v = at(s);
            if (typeof v == "function" && v !== s.entries)
              for (var R = v.call(s), E; !(E = R.next()).done; )
                St(E.value) && He(E.value, l);
          }
        }
      }
      function Ge(s) {
        {
          var l = s.type;
          if (l == null || typeof l == "string")
            return;
          var d;
          if (typeof l == "function")
            d = l.propTypes;
          else if (typeof l == "object" && (l.$$typeof === y || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          l.$$typeof === A))
            d = l.propTypes;
          else
            return;
          if (d) {
            var p = Ct(l);
            Jr(d, s.props, "prop", p, s);
          } else if (l.PropTypes !== void 0 && !de) {
            de = !0;
            var v = Ct(l);
            T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
          }
          typeof l.getDefaultProps == "function" && !l.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function rn(s) {
        {
          for (var l = Object.keys(s.props), d = 0; d < l.length; d++) {
            var p = l[d];
            if (p !== "children" && p !== "key") {
              Pt(s), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), Pt(null);
              break;
            }
          }
          s.ref !== null && (Pt(s), T("Invalid attribute `ref` supplied to `React.Fragment`."), Pt(null));
        }
      }
      function Xe(s, l, d) {
        var p = Se(s);
        if (!p) {
          var v = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = tn(l);
          R ? v += R : v += Ve();
          var E;
          s === null ? E = "null" : Nt(s) ? E = "array" : s !== void 0 && s.$$typeof === n ? (E = "<" + (Ct(s.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : E = typeof s, T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", E, v);
        }
        var k = _r.apply(this, arguments);
        if (k == null)
          return k;
        if (p)
          for (var B = 2; B < arguments.length; B++)
            We(arguments[B], s);
        return s === a ? rn(k) : Ge(k), k;
      }
      var Ke = !1;
      function nn(s) {
        var l = Xe.bind(null, s);
        return l.type = s, Ke || (Ke = !0, Et("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(l, "type", {
          enumerable: !1,
          get: function() {
            return Et("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: s
            }), s;
          }
        }), l;
      }
      function sn(s, l, d) {
        for (var p = yr.apply(this, arguments), v = 2; v < arguments.length; v++)
          We(arguments[v], p.type);
        return Ge(p), p;
      }
      function an(s, l) {
        var d = O.transition;
        O.transition = {};
        var p = O.transition;
        O.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          s();
        } finally {
          if (O.transition = d, d === null && p._updatedFibers) {
            var v = p._updatedFibers.size;
            v > 10 && Et("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), p._updatedFibers.clear();
          }
        }
      }
      var Ze = !1, Zt = null;
      function on(s) {
        if (Zt === null)
          try {
            var l = ("require" + Math.random()).slice(0, 7), d = t && t[l];
            Zt = d.call(t, "timers").setImmediate;
          } catch {
            Zt = function(v) {
              Ze === !1 && (Ze = !0, typeof MessageChannel > "u" && T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var R = new MessageChannel();
              R.port1.onmessage = v, R.port2.postMessage(void 0);
            };
          }
        return Zt(s);
      }
      var It = 0, Je = !1;
      function ln(s) {
        {
          var l = It;
          It++, V.current === null && (V.current = []);
          var d = V.isBatchingLegacy, p;
          try {
            if (V.isBatchingLegacy = !0, p = s(), !d && V.didScheduleLegacyUpdate) {
              var v = V.current;
              v !== null && (V.didScheduleLegacyUpdate = !1, _e(v));
            }
          } catch (et) {
            throw Jt(l), et;
          } finally {
            V.isBatchingLegacy = d;
          }
          if (p !== null && typeof p == "object" && typeof p.then == "function") {
            var R = p, E = !1, k = {
              then: function(et, ot) {
                E = !0, R.then(function(ut) {
                  Jt(l), It === 0 ? pe(ut, et, ot) : et(ut);
                }, function(ut) {
                  Jt(l), ot(ut);
                });
              }
            };
            return !Je && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              E || (Je = !0, T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), k;
          } else {
            var B = p;
            if (Jt(l), It === 0) {
              var Y = V.current;
              Y !== null && (_e(Y), V.current = null);
              var K = {
                then: function(et, ot) {
                  V.current === null ? (V.current = [], pe(B, et, ot)) : et(B);
                }
              };
              return K;
            } else {
              var Z = {
                then: function(et, ot) {
                  et(B);
                }
              };
              return Z;
            }
          }
        }
      }
      function Jt(s) {
        s !== It - 1 && T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), It = s;
      }
      function pe(s, l, d) {
        {
          var p = V.current;
          if (p !== null)
            try {
              _e(p), on(function() {
                p.length === 0 ? (V.current = null, l(s)) : pe(s, l, d);
              });
            } catch (v) {
              d(v);
            }
          else
            l(s);
        }
      }
      var me = !1;
      function _e(s) {
        if (!me) {
          me = !0;
          var l = 0;
          try {
            for (; l < s.length; l++) {
              var d = s[l];
              do
                d = d(!0);
              while (d !== null);
            }
            s.length = 0;
          } catch (p) {
            throw s = s.slice(l + 1), p;
          } finally {
            me = !1;
          }
        }
      }
      var un = Xe, cn = sn, hn = nn, fn = {
        map: Ht,
        forEach: Er,
        count: xr,
        toArray: Cr,
        only: Ar
      };
      e.Children = fn, e.Component = z, e.Fragment = a, e.Profiler = u, e.PureComponent = ht, e.StrictMode = o, e.Suspense = b, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = _t, e.cloneElement = cn, e.createContext = Rr, e.createElement = un, e.createFactory = hn, e.createRef = lr, e.forwardRef = $r, e.isValidElement = St, e.lazy = Dr, e.memo = kr, e.startTransition = an, e.unstable_act = ln, e.useCallback = jr, e.useContext = Sr, e.useDebugValue = Ur, e.useDeferredValue = Vr, e.useEffect = Or, e.useId = Yr, e.useImperativeHandle = qr, e.useInsertionEffect = zr, e.useLayoutEffect = Br, e.useMemo = Fr, e.useReducer = Ir, e.useRef = Lr, e.useState = Pr, e.useSyncExternalStore = Hr, e.useTransition = Nr, e.version = r, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ft, Ft.exports)), Ft.exports;
}
process.env.NODE_ENV === "production" ? ye.exports = _n() : ye.exports = gn();
var nt = ye.exports;
const ir = {
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
}, Tn = (t = !0, e = null, r = { x: 0, y: 0 }) => {
  const [n, i] = nt.useState(ir);
  let a = null;
  const o = (y) => {
    let b, x, A, S, D, M;
    const tt = { ...n.scroll };
    switch (y.type) {
      case "mousemove":
      case "mousedown":
      case "mouseup":
      case "wheel":
        const O = y;
        b = O.clientX, x = O.clientY, A = O.screenX, S = O.screenY, D = O.pageX, M = O.pageY, tt.wheelDown = y.deltaY > 0, tt.wheelUp = y.deltaY < 0;
        break;
      case "touchmove":
      case "touchstart":
        const { touches: V } = y, H = V[0];
        b = H.clientX, x = H.clientY, A = H.screenX, S = H.screenY, D = H.pageX, M = H.pageY;
        break;
      default:
        throw new Error(`Unknown event triggered "${y.type}"`);
    }
    const at = { ...n.selectedElement.position }, I = { ...n.selectedElement.boundingRect };
    if (a) {
      const { left: O, top: V, width: H, height: yt } = a.getBoundingClientRect();
      at.x = b - O - r.x, at.y = x - V - r.y;
      const wt = 180 / Math.PI, $t = 180;
      at.angle = Math.atan2(at.y, -at.x) * wt + $t, I.left = O, I.top = V, I.width = H, I.height = yt;
    }
    i((O) => ({
      ...O,
      position: {
        client: { x: b, y: x },
        screen: { x: A, y: S },
        page: { x: D, y: M }
      },
      scroll: tt,
      eventType: y.type,
      selectedElement: {
        ...O.selectedElement,
        position: at,
        boundingRect: I
      }
    }));
  }, u = () => {
    i(ir);
  }, c = () => {
    const y = { ...n.selectedElement };
    y.isHover = !0, i((b) => ({
      ...b,
      selectedElement: y
    }));
  }, _ = () => {
    const y = { ...n.selectedElement };
    y.isHover = !1, i((b) => ({
      ...b,
      selectedElement: y
    }));
  };
  return nt.useEffect(() => {
    if (e) {
      if (a = document.getElementById(e), !a)
        throw new Error(
          `Element with id="${e}" doesn't exists`
        );
      a.addEventListener("mouseenter", c), a.addEventListener("mouseleave", _);
    }
    return document.addEventListener("mousemove", o), document.addEventListener("mousedown", o), document.addEventListener("mouseup", o), document.addEventListener("wheel", o), document.addEventListener("mouseleave", u), t && (window.addEventListener("touchmove", o), window.addEventListener("touchstart", o), window.addEventListener("touchend", u)), () => {
      document.removeEventListener("mousemove", o), document.removeEventListener("mousedown", o), document.removeEventListener("mouseup", o), document.removeEventListener("wheel", o), document.removeEventListener("mouseleave", u), t && (window.removeEventListener("touchmove", o), window.removeEventListener("touchstart", o), window.removeEventListener("touchend", u));
    };
  }, []), n;
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
const Mn = () => {
  const [t, e] = nt.useState("X: 00000, Y: 00000");
  return nt.useEffect(() => {
    const r = (i, a = 5) => i.toString().padStart(a, "0"), n = (i) => {
      const a = r(i.clientX), o = r(i.clientY);
      e(`X: ${a}, Y: ${o}`);
    };
    return window.addEventListener("mousemove", n), () => {
      window.removeEventListener("mousemove", n);
    };
  }, []), t;
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
const yn = ({ window: t, document: e }) => Math.min(t.scrollY / (e.body.offsetHeight - 770), 0.999), Dn = () => {
  const [t, e] = nt.useState("0000");
  return nt.useEffect(() => {
    const r = (i, a = 4) => i.toString().padStart(a, "0"), n = () => {
      const i = yn({ window, document });
      e(`SCR: 0.${r(i.toFixed(3), 2)}`);
    };
    return window.addEventListener("scroll", n), () => {
      window.removeEventListener("scroll", n);
    };
  }, [window, document]), t;
}, $n = ({
  dotSize: t = 10
}) => {
  const [e, r] = nt.useState({
    x: 0,
    y: 0
  });
  return nt.useEffect(() => {
    const n = (i) => {
      const { clientX: a, clientY: o } = i;
      r({ x: a, y: o });
    };
    return window.addEventListener("mousemove", n), () => {
      window.removeEventListener("mousemove", n);
    };
  }, []), [e, t];
}, vn = typeof document < "u" ? nt.useLayoutEffect : nt.useEffect;
var q = class {
  static add(t, e) {
    if (typeof e == "number")
      for (let r = 0, n = t.length; r < n; r++)
        t[r] += e;
    else
      for (let r = 0, n = t.length; r < n; r++)
        t[r] += e[r] || 0;
    return t;
  }
  static subtract(t, e) {
    if (typeof e == "number")
      for (let r = 0, n = t.length; r < n; r++)
        t[r] -= e;
    else
      for (let r = 0, n = t.length; r < n; r++)
        t[r] -= e[r] || 0;
    return t;
  }
  static multiply(t, e) {
    if (typeof e == "number")
      for (let r = 0, n = t.length; r < n; r++)
        t[r] *= e;
    else {
      if (t.length != e.length)
        throw new Error(`Cannot do element-wise multiply since the array lengths don't match: ${t.toString()} multiply-with ${e.toString()}`);
      for (let r = 0, n = t.length; r < n; r++)
        t[r] *= e[r];
    }
    return t;
  }
  static divide(t, e) {
    if (typeof e == "number") {
      if (e === 0)
        throw new Error("Cannot divide by zero");
      for (let r = 0, n = t.length; r < n; r++)
        t[r] /= e;
    } else {
      if (t.length != e.length)
        throw new Error(`Cannot do element-wise divide since the array lengths don't match. ${t.toString()} divide-by ${e.toString()}`);
      for (let r = 0, n = t.length; r < n; r++)
        t[r] /= e[r];
    }
    return t;
  }
  static dot(t, e) {
    if (t.length != e.length)
      throw new Error("Array lengths don't match");
    let r = 0;
    for (let n = 0, i = t.length; n < i; n++)
      r += t[n] * e[n];
    return r;
  }
  static cross2D(t, e) {
    return t[0] * e[1] - t[1] * e[0];
  }
  static cross(t, e) {
    return new h(t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]);
  }
  static magnitude(t) {
    return Math.sqrt(q.dot(t, t));
  }
  static unit(t, e = void 0) {
    let r = e === void 0 ? q.magnitude(t) : e;
    return r === 0 ? h.make(t.length) : q.divide(t, r);
  }
  static abs(t) {
    return q.map(t, Math.abs);
  }
  static floor(t) {
    return q.map(t, Math.floor);
  }
  static ceil(t) {
    return q.map(t, Math.ceil);
  }
  static round(t) {
    return q.map(t, Math.round);
  }
  static max(t) {
    let e = Number.MIN_VALUE, r = 0;
    for (let n = 0, i = t.length; n < i; n++)
      e = Math.max(e, t[n]), e === t[n] && (r = n);
    return { value: e, index: r };
  }
  static min(t) {
    let e = Number.MAX_VALUE, r = 0;
    for (let n = 0, i = t.length; n < i; n++)
      e = Math.min(e, t[n]), e === t[n] && (r = n);
    return { value: e, index: r };
  }
  static sum(t) {
    let e = 0;
    for (let r = 0, n = t.length; r < n; r++)
      e += t[r];
    return e;
  }
  static map(t, e) {
    for (let r = 0, n = t.length; r < n; r++)
      t[r] = e(t[r], r, t);
    return t;
  }
}, j = class {
  constructor() {
    this.reset();
  }
  get value() {
    return this._33;
  }
  get domMatrix() {
    return new DOMMatrix(j.toDOMMatrix(this._33));
  }
  reset() {
    this._33 = j.scale2DMatrix(1, 1);
  }
  scale2D(t, e = [0, 0]) {
    const r = j.scaleAt2DMatrix(t[0] || 1, t[1] || 1, e);
    return this._33 = j.multiply(this._33, r), this;
  }
  rotate2D(t, e = [0, 0]) {
    const r = j.rotateAt2DMatrix(Math.cos(t), Math.sin(t), e);
    return this._33 = j.multiply(this._33, r), this;
  }
  translate2D(t) {
    const e = j.translate2DMatrix(t[0] || 0, t[1] || 0);
    return this._33 = j.multiply(this._33, e), this;
  }
  shear2D(t, e = [0, 0]) {
    const r = j.shearAt2DMatrix(Math.tan(t[0] || 0), Math.tan(t[1] || 1), e);
    return this._33 = j.multiply(this._33, r), this;
  }
  static add(t, e) {
    if (typeof e != "number") {
      if (t[0].length != e[0].length)
        throw new Error("Cannot add matrix if rows' and columns' size don't match.");
      if (t.length != e.length)
        throw new Error("Cannot add matrix if rows' and columns' size don't match.");
    }
    let r = new g(), n = typeof e == "number";
    for (let i = 0, a = t.length; i < a; i++)
      r.push(t[i].$add(n ? e : e[i]));
    return r;
  }
  static multiply(t, e, r = !1, n = !1) {
    let i = new g();
    if (typeof e != "number")
      if (n) {
        if (t.length != e.length)
          throw new Error("Cannot multiply matrix element-wise because the matrices' sizes don't match.");
        for (let a = 0, o = t.length; a < o; a++)
          i.push(t[a].$multiply(e[a]));
      } else {
        if (!r && t[0].length != e.length)
          throw new Error("Cannot multiply matrix if rows in matrix-a don't match columns in matrix-b.");
        if (r && t[0].length != e[0].length)
          throw new Error("Cannot multiply matrix if transposed and the columns in both matrices don't match.");
        r || (e = j.transpose(e));
        for (let a = 0, o = t.length; a < o; a++) {
          let u = h.make(e.length, 0);
          for (let c = 0, _ = e.length; c < _; c++)
            u[c] = q.dot(t[a], e[c]);
          i.push(u);
        }
      }
    else
      for (let a = 0, o = t.length; a < o; a++)
        i.push(t[a].$multiply(e));
    return i;
  }
  static zipSlice(t, e, r = !1) {
    let n = [];
    for (let i = 0, a = t.length; i < a; i++) {
      if (t[i].length - 1 < e && r === !1)
        throw `Index ${e} is out of bounds`;
      n.push(t[i][e] || r);
    }
    return new h(n);
  }
  static zip(t, e = !1, r = !1) {
    let n = new g(), i = r ? t.reduce((a, o) => Math.max(a, o.length), 0) : t[0].length;
    for (let a = 0; a < i; a++)
      n.push(j.zipSlice(t, a, e));
    return n;
  }
  static transpose(t, e = !1, r = !1) {
    return j.zip(t, e, r);
  }
  static toDOMMatrix(t) {
    return [t[0][0], t[0][1], t[1][0], t[1][1], t[2][0], t[2][1]];
  }
  static transform2D(t, e) {
    let r = t[0] * e[0][0] + t[1] * e[1][0] + e[2][0], n = t[0] * e[0][1] + t[1] * e[1][1] + e[2][1];
    return new h(r, n);
  }
  static scale2DMatrix(t, e) {
    return new g(
      new h(t, 0, 0),
      new h(0, e, 0),
      new h(0, 0, 1)
    );
  }
  static rotate2DMatrix(t, e) {
    return new g(
      new h(t, e, 0),
      new h(-e, t, 0),
      new h(0, 0, 1)
    );
  }
  static shear2DMatrix(t, e) {
    return new g(
      new h(1, t, 0),
      new h(e, 1, 0),
      new h(0, 0, 1)
    );
  }
  static translate2DMatrix(t, e) {
    return new g(
      new h(1, 0, 0),
      new h(0, 1, 0),
      new h(t, e, 1)
    );
  }
  static scaleAt2DMatrix(t, e, r) {
    let n = j.scale2DMatrix(t, e);
    return n[2][0] = -r[0] * t + r[0], n[2][1] = -r[1] * e + r[1], n;
  }
  static rotateAt2DMatrix(t, e, r) {
    let n = j.rotate2DMatrix(t, e);
    return n[2][0] = r[0] * (1 - t) + r[1] * e, n[2][1] = r[1] * (1 - t) - r[0] * e, n;
  }
  static shearAt2DMatrix(t, e, r) {
    let n = j.shear2DMatrix(t, e);
    return n[2][0] = -r[1] * e, n[2][1] = -r[0] * t, n;
  }
  static reflectAt2DMatrix(t, e) {
    let r = it.intercept(t, e);
    if (r == null)
      return [
        new h([-1, 0, 0]),
        new h([0, 1, 0]),
        new h([t[0] + e[0], 0, 1])
      ];
    {
      let n = r.yi, i = Math.atan(r.slope) * 2, a = Math.cos(i), o = Math.sin(i);
      return [
        new h([a, o, 0]),
        new h([o, -a, 0]),
        new h([-n * o, n + n * a, 1])
      ];
    }
  }
}, Rt = (t, e = "expected") => m.warn("Group's length is less than " + e, t), wn = (t, e = "") => m.warn(`Index ${e} is out of bound in Group`, t), it = class {
  static fromAngle(t, e, r) {
    let n = new g(new h(t), new h(t));
    return n[1].toAngle(e, r, !0), n;
  }
  static slope(t, e) {
    return e[0] - t[0] === 0 ? void 0 : (e[1] - t[1]) / (e[0] - t[0]);
  }
  static intercept(t, e) {
    if (e[0] - t[0] !== 0) {
      let r = (e[1] - t[1]) / (e[0] - t[0]), n = t[1] - r * t[0];
      return { slope: r, yi: n, xi: r === 0 ? void 0 : -n / r };
    }
  }
  static sideOfPt2D(t, e) {
    let r = m.iterToArray(t);
    return (r[1][0] - r[0][0]) * (e[1] - r[0][1]) - (e[0] - r[0][0]) * (r[1][1] - r[0][1]);
  }
  static collinear(t, e, r, n = 0.01) {
    let i = new h(0, 0, 0).to(t).$subtract(e), a = new h(0, 0, 0).to(t).$subtract(r);
    return i.$cross(a).divide(1e3).equals(new h(0, 0, 0), n);
  }
  static magnitude(t) {
    let e = m.iterToArray(t);
    return e.length >= 2 ? e[1].$subtract(e[0]).magnitude() : 0;
  }
  static magnitudeSq(t) {
    let e = m.iterToArray(t);
    return e.length >= 2 ? e[1].$subtract(e[0]).magnitudeSq() : 0;
  }
  static perpendicularFromPt(t, e, r = !1) {
    let n = m.iterToArray(t);
    if (n[0].equals(n[1]))
      return;
    let i = n[0].$subtract(n[1]), a = n[1].$subtract(e), o = a.$subtract(i.$project(a));
    return r ? o : o.$add(e);
  }
  static distanceFromPt(t, e) {
    let r = m.iterToArray(t), n = it.perpendicularFromPt(r, e, !0);
    return n ? n.magnitude() : r[0].$subtract(e).magnitude();
  }
  static intersectRay2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = it.intercept(r[0], r[1]), a = it.intercept(n[0], n[1]), o = r[0], u = n[0];
    if (i == null) {
      if (a == null)
        return;
      let c = -a.slope * (u[0] - o[0]) + u[1];
      return new h(o[0], c);
    } else if (a == null) {
      let c = -i.slope * (o[0] - u[0]) + o[1];
      return new h(u[0], c);
    } else if (a.slope != i.slope) {
      let c = (i.slope * o[0] - a.slope * u[0] + u[1] - o[1]) / (i.slope - a.slope), _ = i.slope * (c - o[0]) + o[1];
      return new h(c, _);
    } else
      return i.yi == a.yi ? new h(o[0], o[1]) : void 0;
  }
  static intersectLine2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = it.intersectRay2D(r, n);
    return i && $.withinBound(i, r[0], r[1]) && $.withinBound(i, n[0], n[1]) ? i : void 0;
  }
  static intersectLineWithRay2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = it.intersectRay2D(r, n);
    return i && $.withinBound(i, r[0], r[1]) ? i : void 0;
  }
  static intersectPolygon2D(t, e, r = !1) {
    let n = m.iterToArray(t), i = m.iterToArray(e), a = r ? it.intersectLineWithRay2D : it.intersectLine2D, o = new g();
    for (let u = 0, c = i.length; u < c; u++) {
      let _ = u === c - 1 ? 0 : u + 1, y = a([i[u], i[_]], n);
      y && o.push(y);
    }
    return o.length > 0 ? o : void 0;
  }
  static intersectLines2D(t, e, r = !1) {
    let n = new g(), i = r ? it.intersectLineWithRay2D : it.intersectLine2D;
    for (let a of t)
      for (let o of e) {
        let u = i(a, o);
        u && n.push(u);
      }
    return n;
  }
  static intersectGridWithRay2D(t, e) {
    let r = m.iterToArray(t), n = it.intercept(new h(r[0]).subtract(e), new h(r[1]).subtract(e)), i = new g();
    return n && n.xi && i.push(new h(e[0] + n.xi, e[1])), n && n.yi && i.push(new h(e[0], e[1] + n.yi)), i;
  }
  static intersectGridWithLine2D(t, e) {
    let r = m.iterToArray(t), n = it.intersectGridWithRay2D(r, e), i = new g();
    for (let a = 0, o = n.length; a < o; a++)
      $.withinBound(n[a], r[0], r[1]) && i.push(n[a]);
    return i;
  }
  static intersectRect2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = $.boundingBox(g.fromPtArray(r));
    return N.hasIntersectRect2D(i, n) ? it.intersectLines2D([r], N.sides(n)) : new g();
  }
  static subpoints(t, e) {
    let r = m.iterToArray(t), n = new g();
    for (let i = 1; i <= e; i++)
      n.push($.interpolate(r[0], r[1], i / (e + 1)));
    return n;
  }
  static crop(t, e, r = 0, n = !0) {
    let i = m.iterToArray(t), o = i[r === 0 ? 1 : 0].$subtract(i[r]);
    if (o[0] === 0 || e[0] === 0)
      return i[r];
    if (n) {
      let u = o.unit().multiply(e[1]);
      return i[r].$add(u);
    } else {
      let u = N.fromCenter(i[r], e), c = N.sides(u), _ = 0;
      return Math.abs(o[1] / o[0]) > Math.abs(e[1] / e[0]) ? _ = o[1] < 0 ? 0 : 2 : _ = o[0] < 0 ? 3 : 1, it.intersectRay2D(c[_], i);
    }
  }
  static marker(t, e, r = "arrow", n = !0) {
    let i = m.iterToArray(t), a = n ? 0 : 1, o = n ? 1 : 0, u = i[a].$subtract(i[o]);
    if (u.magnitudeSq() === 0)
      return new g();
    u.unit();
    let c = $.perpendicular(u).multiply(e[0]).add(i[o]);
    return r == "arrow" ? (c.add(u.$multiply(e[1])), new g(i[o], c[0], c[1])) : new g(c[0], c[1]);
  }
  static toRect(t) {
    let e = m.iterToArray(t);
    return new g(e[0].$min(e[1]), e[0].$max(e[1]));
  }
}, N = class {
  static from(t, e, r) {
    return N.fromTopLeft(t, e, r);
  }
  static fromTopLeft(t, e, r) {
    let n = typeof e == "number" ? [e, r || e] : e;
    return new g(new h(t), new h(t).add(n));
  }
  static fromCenter(t, e, r) {
    let n = typeof e == "number" ? [e / 2, (r || e) / 2] : new h(e).divide(2);
    return new g(new h(t).subtract(n), new h(t).add(n));
  }
  static toCircle(t, e = !0) {
    return Tt.fromRect(t, e);
  }
  static toSquare(t, e = !1) {
    let r = m.iterToArray(t), n = N.size(r), i = e ? n.maxValue().value : n.minValue().value;
    return N.fromCenter(N.center(r), i, i);
  }
  static size(t) {
    let e = m.iterToArray(t);
    return e[0].$max(e[1]).subtract(e[0].$min(e[1]));
  }
  static center(t) {
    let e = m.iterToArray(t), r = e[0].$min(e[1]), n = e[0].$max(e[1]);
    return r.add(n.$subtract(r).divide(2));
  }
  static corners(t) {
    let e = m.iterToArray(t), r = e[0].$min(e[1]), n = e[0].$max(e[1]);
    return new g(r, new h(n.x, r.y), n, new h(r.x, n.y));
  }
  static sides(t) {
    let [e, r, n, i] = N.corners(t);
    return [
      new g(e, r),
      new g(r, n),
      new g(n, i),
      new g(i, e)
    ];
  }
  static boundingBox(t) {
    let e = m.iterToArray(t), r = m.flatten(e, !1), n = h.make(2, Number.MAX_VALUE), i = h.make(2, Number.MIN_VALUE);
    for (let a = 0, o = r.length; a < o; a++) {
      let u = 0;
      for (let c of r[a])
        if (n[u] = Math.min(n[u], c[u]), i[u] = Math.max(i[u], c[u]), ++u >= 2)
          break;
    }
    return new g(n, i);
  }
  static polygon(t) {
    return N.corners(t);
  }
  static quadrants(t, e) {
    let r = m.iterToArray(t), n = N.corners(r), i = e != null ? new h(e) : N.center(r);
    return n.map((a) => new g(a, i).boundingBox());
  }
  static halves(t, e = 0.5, r = !1) {
    let n = m.iterToArray(t), i = n[0].$min(n[1]), a = n[0].$max(n[1]), o = r ? dt.lerp(i[1], a[1], e) : dt.lerp(i[0], a[0], e);
    return r ? [new g(i, new h(a[0], o)), new g(new h(i[0], o), a)] : [new g(i, new h(o, a[1])), new g(new h(o, i[1]), a)];
  }
  static withinBound(t, e) {
    let r = m.iterToArray(t);
    return $.withinBound(e, r[0], r[1]);
  }
  static hasIntersectRect2D(t, e, r = !1) {
    let n = m.iterToArray(t), i = m.iterToArray(e);
    return r && (n = $.boundingBox(n), i = $.boundingBox(i)), !(n[0][0] > i[1][0] || i[0][0] > n[1][0] || n[0][1] > i[1][1] || i[0][1] > n[1][1]);
  }
  static intersectRect2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e);
    return N.hasIntersectRect2D(r, n) ? it.intersectLines2D(N.sides(r), N.sides(n)) : new g();
  }
}, Tt = class {
  static fromRect(t, e = !1) {
    let r = m.iterToArray(t), n = 0, i = n = N.size(r).minValue().value / 2;
    if (e) {
      let a = N.size(r).maxValue().value / 2;
      n = Math.sqrt(i * i + a * a);
    } else
      n = i;
    return new g(N.center(r), new h(n, n));
  }
  static fromTriangle(t, e = !1) {
    return e ? vt.circumcircle(t) : vt.incircle(t);
  }
  static fromCenter(t, e) {
    return new g(new h(t), new h(e, e));
  }
  static withinBound(t, e, r = 0) {
    let n = m.iterToArray(t), i = n[0].$subtract(e);
    return i.dot(i) + r < n[1].x * n[1].x;
  }
  static intersectRay2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = n[0].$subtract(n[1]), a = r[0].$subtract(n[0]), o = i.dot(i), u = a.dot(i), c = a.dot(a) - r[1].x * r[1].x, _ = u / o, y = c / o, b = _ * _ - y;
    if (b < 0)
      return new g();
    {
      let x = Math.sqrt(b), A = -_ + x, S = n[0].$subtract(i.$multiply(A));
      if (b === 0)
        return new g(S);
      let D = -_ - x, M = n[0].$subtract(i.$multiply(D));
      return new g(S, M);
    }
  }
  static intersectLine2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = Tt.intersectRay2D(r, n), a = new g();
    if (i.length > 0)
      for (let o = 0, u = i.length; o < u; o++)
        N.withinBound(n, i[o]) && a.push(i[o]);
    return a;
  }
  static intersectCircle2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = n[0].$subtract(r[0]), a = i.magnitudeSq(), o = Math.sqrt(a), u = r[1].x, c = n[1].x, _ = u * u, y = c * c;
    if (o > u + c)
      return new g();
    if (o < Math.abs(u - c))
      return new g(r[0].clone());
    {
      let b = (_ - y + a) / (2 * o), x = Math.sqrt(_ - b * b), A = i.$multiply(b / o).add(r[0]);
      return new g(
        new h(A.x + x * i.y / o, A.y - x * i.x / o),
        new h(A.x - x * i.y / o, A.y + x * i.x / o)
      );
    }
  }
  static intersectRect2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = N.sides(n), a = [];
    for (let o = 0, u = i.length; o < u; o++) {
      let c = Tt.intersectLine2D(r, i[o]);
      c.length > 0 && a.push(c);
    }
    return m.flatten(a);
  }
  static toRect(t, e = !1) {
    let r = m.iterToArray(t), n = r[1][0];
    if (e) {
      let i = Math.sqrt(n * n) / 2;
      return new g(r[0].$subtract(i), r[0].$add(i));
    } else
      return new g(r[0].$subtract(n), r[0].$add(n));
  }
  static toTriangle(t, e = !0) {
    let r = m.iterToArray(t);
    if (e) {
      let n = -Math.PI / 2, i = Math.PI * 2 / 3, a = new g();
      for (let o = 0; o < 3; o++)
        a.push(r[0].clone().toAngle(n, r[1][0], !0)), n += i;
      return a;
    } else
      return vt.fromCenter(r[0], r[1][0]);
  }
}, vt = class {
  static fromRect(t) {
    let e = m.iterToArray(t), r = e[0].$add(e[1]).divide(2);
    r.y = e[0][1];
    let n = e[1].clone();
    return n.x = e[0][0], new g(r, e[1].clone(), n);
  }
  static fromCircle(t) {
    return Tt.toTriangle(t, !0);
  }
  static fromCenter(t, e) {
    return vt.fromCircle(Tt.fromCenter(t, e));
  }
  static medial(t) {
    let e = m.iterToArray(t);
    return e.length < 3 ? Rt(new g(), 3) : lt.midpoints(e, !0);
  }
  static oppositeSide(t, e) {
    let r = m.iterToArray(t);
    return r.length < 3 ? Rt(new g(), 3) : e === 0 ? g.fromPtArray([r[1], r[2]]) : e === 1 ? g.fromPtArray([r[0], r[2]]) : g.fromPtArray([r[0], r[1]]);
  }
  static altitude(t, e) {
    let r = m.iterToArray(t), n = vt.oppositeSide(r, e);
    return n.length > 1 ? new g(r[e], it.perpendicularFromPt(n, r[e])) : new g();
  }
  static orthocenter(t) {
    let e = m.iterToArray(t);
    if (e.length < 3)
      return Rt(void 0, 3);
    let r = vt.altitude(e, 0), n = vt.altitude(e, 1);
    return it.intersectRay2D(r, n);
  }
  static incenter(t) {
    let e = m.iterToArray(t);
    if (e.length < 3)
      return Rt(void 0, 3);
    let r = lt.bisector(e, 0).add(e[0]), n = lt.bisector(e, 1).add(e[1]);
    return it.intersectRay2D(new g(e[0], r), new g(e[1], n));
  }
  static incircle(t, e) {
    let r = m.iterToArray(t), n = e || vt.incenter(r), i = lt.area(r), a = lt.perimeter(r, !0), o = 2 * i / a.total;
    return Tt.fromCenter(n, o);
  }
  static circumcenter(t) {
    let e = m.iterToArray(t), r = vt.medial(e), n = [r[0], $.perpendicular(e[0].$subtract(r[0])).p1.$add(r[0])], i = [r[1], $.perpendicular(e[1].$subtract(r[1])).p1.$add(r[1])];
    return it.intersectRay2D(n, i);
  }
  static circumcircle(t, e) {
    let r = m.iterToArray(t), n = e || vt.circumcenter(r), i = r[0].$subtract(n).magnitude();
    return Tt.fromCenter(n, i);
  }
}, lt = class {
  static centroid(t) {
    return $.centroid(t);
  }
  static rectangle(t, e, r) {
    return N.corners(N.fromCenter(t, e, r));
  }
  static fromCenter(t, e, r) {
    let n = new g();
    for (let i = 0; i < r; i++) {
      let a = Math.PI * 2 * i / r;
      n.push(new h(Math.cos(a) * e, Math.sin(a) * e).add(t));
    }
    return n;
  }
  static lineAt(t, e) {
    let r = m.iterToArray(t);
    if (e < 0 || e >= r.length)
      throw new Error("index out of the Polygon's range");
    return new g(r[e], e === r.length - 1 ? r[0] : r[e + 1]);
  }
  static lines(t, e = !0) {
    let r = m.iterToArray(t);
    if (r.length < 2)
      return Rt(new g(), 2);
    let n = m.split(r, 2, 1);
    return e && n.push(new g(r[r.length - 1], r[0])), n.map((i) => i);
  }
  static midpoints(t, e = !1, r = 0.5) {
    return lt.lines(t, e).map((a) => $.interpolate(a[0], a[1], r));
  }
  static adjacentSides(t, e, r = !1) {
    let n = m.iterToArray(t);
    if (n.length < 2)
      return Rt(new g(), 2);
    if (e < 0 || e >= n.length)
      return wn(new g(), e);
    let i = [], a = e - 1;
    r && a < 0 && (a = n.length - 1), a >= 0 && i.push(new g(n[e], n[a]));
    let o = e + 1;
    return r && o > n.length - 1 && (o = 0), o <= n.length - 1 && i.push(new g(n[e], n[o])), i;
  }
  static bisector(t, e) {
    let r = lt.adjacentSides(t, e, !0);
    if (r.length >= 2) {
      let n = r[0][1].$subtract(r[0][0]).unit(), i = r[1][1].$subtract(r[1][0]).unit();
      return n.add(i).divide(2);
    } else
      return;
  }
  static perimeter(t, e = !1) {
    let r = lt.lines(t, e), n = 0, i = h.make(r.length, 0);
    for (let a = 0, o = r.length; a < o; a++) {
      let u = it.magnitude(r[a]);
      n += u, i[a] = u;
    }
    return {
      total: n,
      segments: i
    };
  }
  static area(t) {
    let e = m.iterToArray(t);
    if (e.length < 3)
      return Rt(new g(), 3);
    let r = (i, a) => i[0] * a[1] - i[1] * a[0], n = 0;
    for (let i = 0, a = e.length; i < a; i++)
      i < e.length - 1 ? n += r(e[i], e[i + 1]) : n += r(e[i], e[0]);
    return Math.abs(n / 2);
  }
  static convexHull(t, e = !1) {
    let r = m.iterToArray(t);
    if (r.length < 3)
      return Rt(new g(), 3);
    e || (r = r.slice(), r.sort((c, _) => c[0] - _[0]));
    let n = (c, _, y) => (_[0] - c[0]) * (y[1] - c[1]) - (y[0] - c[0]) * (_[1] - c[1]) > 0, i = [], a = r.length - 2, o = a + 3;
    i[a] = r[2], i[o] = r[2], n(r[0], r[1], r[2]) ? (i[a + 1] = r[0], i[a + 2] = r[1]) : (i[a + 1] = r[1], i[a + 2] = r[0]);
    for (let c = 3, _ = r.length; c < _; c++) {
      let y = r[c];
      if (!(n(i[a], i[a + 1], y) && n(i[o - 1], i[o], y))) {
        for (; !n(i[a], i[a + 1], y); )
          a += 1;
        for (a -= 1, i[a] = y; !n(i[o - 1], i[o], y); )
          o -= 1;
        o += 1, i[o] = y;
      }
    }
    let u = new g();
    for (let c = 0; c < o - a; c++)
      u.push(i[a + c]);
    return u;
  }
  static network(t, e = 0) {
    let r = m.iterToArray(t), n = [];
    for (let i = 0, a = r.length; i < a; i++)
      i != e && n.push(new g(r[e], r[i]));
    return n;
  }
  static nearestPt(t, e) {
    let r = Number.MAX_VALUE, n = -1, i = 0;
    for (let a of t) {
      let o = a.$subtract(e).magnitudeSq();
      o < r && (r = o, n = i), i++;
    }
    return n;
  }
  static projectAxis(t, e) {
    let r = m.iterToArray(t), n = e.dot(r[0]), i = new h(n, n);
    for (let a = 1, o = r.length; a < o; a++)
      n = e.dot(r[a]), i = new h(Math.min(n, i[0]), Math.max(n, i[1]));
    return i;
  }
  static _axisOverlap(t, e, r) {
    let n = lt.projectAxis(t, r), i = lt.projectAxis(e, r);
    return n[0] < i[0] ? i[0] - n[1] : n[0] - i[1];
  }
  static hasIntersectPoint(t, e) {
    let r = m.iterToArray(t), n = !1;
    for (let i = 0, a = r.length; i < a; i++) {
      let o = lt.lineAt(r, i);
      o[0][1] > e[1] != o[1][1] > e[1] && e[0] < (o[1][0] - o[0][0]) * (e[1] - o[0][1]) / (o[1][1] - o[0][1]) + o[0][0] && (n = !n);
    }
    return n;
  }
  static hasIntersectCircle(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = {
      which: -1,
      dist: 0,
      normal: null,
      edge: null,
      vertex: null
    }, a = n[0], o = n[1][0], u = Number.MAX_SAFE_INTEGER;
    for (let _ = 0, y = r.length; _ < y; _++) {
      let b = lt.lineAt(r, _), x = new h(b[0].y - b[1].y, b[1].x - b[0].x).unit(), A = new g(a.$add(x.$multiply(o)), a.$subtract(x.$multiply(o))), S = lt._axisOverlap(r, A, x);
      if (S > 0)
        return null;
      Math.abs(S) < u && (N.withinBound(b, it.perpendicularFromPt(b, a)) || Tt.intersectLine2D(e, b).length > 0) && (i.edge = b, i.normal = x, u = Math.abs(S), i.which = _);
    }
    return i.edge ? (a.$subtract(lt.centroid(r)).dot(i.normal) < 0 && i.normal.multiply(-1), i.dist = u, i.vertex = a, i) : null;
  }
  static hasIntersectPolygon(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = {
      which: -1,
      dist: 0,
      normal: new h(),
      edge: new g(),
      vertex: new h()
    }, a = Number.MAX_SAFE_INTEGER;
    for (let x = 0, A = r.length + n.length; x < A; x++) {
      let S = x < r.length ? lt.lineAt(r, x) : lt.lineAt(n, x - r.length), D = new h(S[0].y - S[1].y, S[1].x - S[0].x).unit(), M = lt._axisOverlap(r, n, D);
      if (M > 0)
        return null;
      Math.abs(M) < a && (i.edge = S, i.normal = D, a = Math.abs(M), i.which = x < r.length ? 0 : 1);
    }
    i.dist = a;
    let o = i.which === 0 ? n : r, u = i.which === 0 ? r : n, c = lt.centroid(o), _ = lt.centroid(u);
    c.$subtract(_).dot(i.normal) < 0 && i.normal.multiply(-1);
    let b = Number.MAX_SAFE_INTEGER;
    for (let x = 0, A = o.length; x < A; x++) {
      let S = i.normal.dot(o[x].$subtract(_));
      S < b && (b = S, i.vertex = o[x]);
    }
    return i;
  }
  static intersectPolygon2D(t, e) {
    let r = m.iterToArray(t), n = m.iterToArray(e), i = lt.lines(r), a = [];
    for (let o = 0, u = i.length; o < u; o++) {
      let c = it.intersectPolygon2D(i[o], n, !1);
      c && a.push(c);
    }
    return m.flatten(a, !0);
  }
  static toRects(t) {
    let e = [];
    for (let n of t)
      e.push($.boundingBox(n));
    let r = m.flatten(e, !1);
    return e.unshift($.boundingBox(r)), e;
  }
}, J = class {
  static getSteps(t) {
    let e = new g();
    for (let r = 0; r <= t; r++) {
      let n = r / t;
      e.push(new h(n * n * n, n * n, n, 1));
    }
    return e;
  }
  static controlPoints(t, e = 0, r = !1) {
    let n = m.iterToArray(t);
    if (e > n.length - 1)
      return new g();
    let i = (o) => o < n.length - 1 ? o : n.length - 1, a = n[e];
    return e = r ? e : e + 1, new g(
      a,
      n[i(e++)],
      n[i(e++)],
      n[i(e++)]
    );
  }
  static _calcPt(t, e) {
    let r = t.reduce((i, a, o) => i + a.x * e[o], 0), n = t.reduce((i, a, o) => i + a.y * e[o], 0);
    if (t[0].length > 2) {
      let i = t.reduce((a, o, u) => a + o.z * e[u], 0);
      return new h(r, n, i);
    }
    return new h(r, n);
  }
  static catmullRom(t, e = 10) {
    let r = m.iterToArray(t);
    if (r.length < 2)
      return new g();
    let n = new g(), i = J.getSteps(e), a = J.controlPoints(r, 0, !0);
    for (let u = 0; u <= e; u++)
      n.push(J.catmullRomStep(i[u], a));
    let o = 0;
    for (; o < r.length - 2; ) {
      let u = J.controlPoints(r, o);
      if (u.length > 0) {
        for (let c = 0; c <= e; c++)
          n.push(J.catmullRomStep(i[c], u));
        o++;
      }
    }
    return n;
  }
  static catmullRomStep(t, e) {
    let r = new g(
      new h(-0.5, 1, -0.5, 0),
      new h(1.5, -2.5, 0, 1),
      new h(-1.5, 2, 0.5, 0),
      new h(0.5, -0.5, 0, 0)
    );
    return J._calcPt(e, j.multiply([t], r, !0)[0]);
  }
  static cardinal(t, e = 10, r = 0.5) {
    let n = m.iterToArray(t);
    if (n.length < 2)
      return new g();
    let i = new g(), a = J.getSteps(e), o = J.controlPoints(n, 0, !0);
    for (let c = 0; c <= e; c++)
      i.push(J.cardinalStep(a[c], o, r));
    let u = 0;
    for (; u < n.length - 2; ) {
      let c = J.controlPoints(n, u);
      if (c.length > 0) {
        for (let _ = 0; _ <= e; _++)
          i.push(J.cardinalStep(a[_], c, r));
        u++;
      }
    }
    return i;
  }
  static cardinalStep(t, e, r = 0.5) {
    let n = new g(
      new h(-1, 2, -1, 0),
      new h(-1, 1, 0, 0),
      new h(1, -2, 1, 0),
      new h(1, -1, 0, 0)
    ), i = j.multiply([t], n, !0)[0].multiply(r), a = 2 * t[0] - 3 * t[1] + 1, o = -2 * t[0] + 3 * t[1], u = J._calcPt(e, i);
    return u.x += a * e[1].x + o * e[2].x, u.y += a * e[1].y + o * e[2].y, u.length > 2 && (u.z += a * e[1].z + o * e[2].z), u;
  }
  static bezier(t, e = 10) {
    let r = m.iterToArray(t);
    if (r.length < 4)
      return new g();
    let n = new g(), i = J.getSteps(e), a = 0;
    for (; a < r.length - 3; ) {
      let o = J.controlPoints(r, a);
      if (o.length > 0) {
        for (let u = 0; u <= e; u++)
          n.push(J.bezierStep(i[u], o));
        a += 3;
      }
    }
    return n;
  }
  static bezierStep(t, e) {
    let r = new g(
      new h(-1, 3, -3, 1),
      new h(3, -6, 3, 0),
      new h(-3, 3, 0, 0),
      new h(1, 0, 0, 0)
    );
    return J._calcPt(e, j.multiply([t], r, !0)[0]);
  }
  static bspline(t, e = 10, r = 1) {
    let n = m.iterToArray(t);
    if (n.length < 2)
      return new g();
    let i = new g(), a = J.getSteps(e), o = 0;
    for (; o < n.length - 3; ) {
      let u = J.controlPoints(n, o);
      if (u.length > 0) {
        if (r !== 1)
          for (let c = 0; c <= e; c++)
            i.push(J.bsplineTensionStep(a[c], u, r));
        else
          for (let c = 0; c <= e; c++)
            i.push(J.bsplineStep(a[c], u));
        o++;
      }
    }
    return i;
  }
  static bsplineStep(t, e) {
    let r = new g(
      new h(-0.16666666666666666, 0.5, -0.5, 0.16666666666666666),
      new h(0.5, -1, 0, 0.6666666666666666),
      new h(-0.5, 0.5, 0.5, 0.16666666666666666),
      new h(0.16666666666666666, 0, 0, 0)
    );
    return J._calcPt(e, j.multiply([t], r, !0)[0]);
  }
  static bsplineTensionStep(t, e, r = 1) {
    let n = new g(
      new h(-0.16666666666666666, 0.5, -0.5, 0.16666666666666666),
      new h(-1.5, 2, 0, -0.3333333333333333),
      new h(1.5, -2.5, 0.5, 0.16666666666666666),
      new h(0.16666666666666666, 0, 0, 0)
    ), i = j.multiply([t], n, !0)[0].multiply(r), a = 2 * t[0] - 3 * t[1] + 1, o = -2 * t[0] + 3 * t[1], u = J._calcPt(e, i);
    return u.x += a * e[1].x + o * e[2].x, u.y += a * e[1].y + o * e[2].y, u.length > 2 && (u.z += a * e[1].z + o * e[2].z), u;
  }
};
function bn() {
  var t = 4022871197, e = function(r) {
    if (r) {
      r = r.toString();
      for (var n = 0; n < r.length; n++) {
        t += r.charCodeAt(n);
        var i = 0.02519603282416938 * t;
        t = i >>> 0, i -= t, i *= t, t = i >>> 0, i -= t, t += i * 4294967296;
      }
      return (t >>> 0) * 23283064365386963e-26;
    } else
      t = 4022871197;
  };
  return e;
}
function xn(t) {
  var e = 48, r = 1, n = e, i = new Array(e), a, o, u = 0, c = bn();
  for (a = 0; a < e; a++)
    i[a] = c(Math.random().toString());
  function _() {
    for (c(), a = 0; a < e; a++)
      i[a] = c(" ");
    r = 1, n = e;
  }
  function y(x) {
    return x = x.replace(/(^\s*)|(\s*$)/gi, ""), x = x.replace(/[\x00-\x1F]/gi, ""), x = x.replace(/\n /, `
`), x;
  }
  function b(x) {
    for (x = y(x), c(x), a = 0; a < x.length; a++)
      for (u = x.charCodeAt(a), o = 0; o < e; o++)
        i[o] -= c(u.toString()), i[o] < 0 && (i[o] += 1);
  }
  return _(), b(t), {
    random() {
      ++n >= e && (n = 0);
      var x = 1768863 * i[n] + r * 23283064365386963e-26;
      return i[n] = x - (r = x | 0);
    }
  };
}
var dt = class {
  static equals(t, e, r = 1e-5) {
    return Math.abs(t - e) < r;
  }
  static lerp(t, e, r) {
    return (1 - r) * t + r * e;
  }
  static clamp(t, e, r) {
    return Math.max(e, Math.min(r, t));
  }
  static boundValue(t, e, r) {
    let n = Math.abs(r - e), i = t % n;
    return i > r ? i -= n : i < e && (i += n), i;
  }
  static within(t, e, r) {
    return t >= Math.min(e, r) && t <= Math.max(e, r);
  }
  static randomRange(t, e = 0) {
    let r = t > e ? t - e : e - t;
    return t + dt.random() * r;
  }
  static randomPt(t, e) {
    let r = new h(t.length), n = e ? q.subtract(e, t) : t, i = e ? t : new h(t.length).fill(0);
    for (let a = 0, o = r.length; a < o; a++)
      r[a] = dt.random() * n[a] + i[a];
    return r;
  }
  static normalizeValue(t, e, r) {
    let n = Math.min(e, r), i = Math.max(e, r);
    return (t - n) / (i - n);
  }
  static sum(t) {
    let e = m.iterToArray(t), r = new h(e[0]);
    for (let n = 1, i = e.length; n < i; n++)
      q.add(r, e[n]);
    return r;
  }
  static average(t) {
    let e = m.iterToArray(t);
    return dt.sum(e).divide(e.length);
  }
  static cycle(t, e = te.sineInOut) {
    return e(t > 0.5 ? 2 - t * 2 : t * 2);
  }
  static mapToRange(t, e, r, n, i) {
    if (e == r)
      throw new Error("[currMin, currMax] must define a range that is not zero");
    let a = Math.min(n, i), o = Math.max(n, i);
    return dt.normalizeValue(t, e, r) * (o - a) + a;
  }
  static seed(t) {
    this.generator = xn(t);
  }
  static random() {
    return this.generator ? this.generator.random() : Math.random();
  }
}, $ = class {
  static boundAngle(t) {
    return dt.boundValue(t, 0, 360);
  }
  static boundRadian(t) {
    return dt.boundValue(t, 0, Q.two_pi);
  }
  static toRadian(t) {
    return t * Q.deg_to_rad;
  }
  static toDegree(t) {
    return t * Q.rad_to_deg;
  }
  static boundingBox(t) {
    let e, r;
    for (let n of t)
      e == null ? (e = n.clone(), r = n.clone()) : (e = e.$min(n), r = r.$max(n));
    return new g(e, r);
  }
  static centroid(t) {
    return dt.average(t);
  }
  static anchor(t, e = 0, r = "to") {
    let n = r == "to" ? "subtract" : "add", i = 0;
    for (let a of t)
      typeof e == "number" ? e !== i && a[n](t[e]) : a[n](e), i++;
  }
  static interpolate(t, e, r = 0.5) {
    let n = Math.min(t.length, e.length), i = h.make(n);
    for (let a = 0; a < n; a++)
      i[a] = t[a] * (1 - r) + e[a] * r;
    return i;
  }
  static perpendicular(t, e = Q.xy) {
    let r = e[1], n = e[0], i = new h(t), a = new h(i);
    a[n] = -i[r], a[r] = i[n];
    let o = new h(i);
    return o[n] = i[r], o[r] = -i[n], new g(a, o);
  }
  static isPerpendicular(t, e) {
    return new h(t).dot(e) === 0;
  }
  static withinBound(t, e, r) {
    for (let n = 0, i = Math.min(t.length, e.length, r.length); n < i; n++)
      if (!dt.within(t[n], e[n], r[n]))
        return !1;
    return !0;
  }
  static sortEdges(t) {
    let e = m.iterToArray(t), r = $.boundingBox(e), n = r[1].add(r[0]).divide(2), i = (a, o) => {
      if (a.length < 2 || o.length < 2)
        throw new Error("Pt dimension cannot be less than 2");
      let u = a.$subtract(n), c = o.$subtract(n);
      if (u[0] >= 0 && c[0] < 0)
        return 1;
      if (u[0] < 0 && c[0] >= 0)
        return -1;
      if (u[0] == 0 && c[0] == 0)
        return u[1] >= 0 || c[1] >= 0 ? u[1] > c[1] ? 1 : -1 : c[1] > u[1] ? 1 : -1;
      let _ = u.$cross2D(c);
      return _ < 0 ? 1 : _ > 0 ? -1 : u[0] * u[0] + u[1] * u[1] > c[0] * c[0] + c[1] * c[1] ? 1 : -1;
    };
    return e.sort(i);
  }
  static scale(t, e, r) {
    let n = m.iterToArray(t[0] !== void 0 && typeof t[0] == "number" ? [t] : t), i = typeof e == "number" ? h.make(n[0].length, e) : e;
    r || (r = h.make(n[0].length, 0));
    for (let a = 0, o = n.length; a < o; a++) {
      let u = n[a];
      for (let c = 0, _ = u.length; c < _; c++)
        u[c] = r && r[c] ? r[c] + (u[c] - r[c]) * i[c] : u[c] * i[c];
    }
    return $;
  }
  static rotate2D(t, e, r, n) {
    let i = m.iterToArray(t[0] !== void 0 && typeof t[0] == "number" ? [t] : t), a = r ? j.rotateAt2DMatrix : j.rotate2DMatrix;
    r || (r = h.make(i[0].length, 0));
    let o = Math.cos(e), u = Math.sin(e);
    for (let c = 0, _ = i.length; c < _; c++) {
      let y = n ? i[c].$take(n) : i[c];
      if (y.to(j.transform2D(y, a(o, u, r))), n)
        for (let b = 0; b < n.length; b++)
          i[c][n[b]] = y[b];
    }
    return $;
  }
  static shear2D(t, e, r, n) {
    let i = m.iterToArray(t[0] !== void 0 && typeof t[0] == "number" ? [t] : t), a = typeof e == "number" ? [e, e] : e;
    r || (r = h.make(i[0].length, 0));
    let o = r ? j.shearAt2DMatrix : j.shear2DMatrix, u = Math.tan(a[0]), c = Math.tan(a[1]);
    for (let _ = 0, y = i.length; _ < y; _++) {
      let b = n ? i[_].$take(n) : i[_];
      if (b.to(j.transform2D(b, o(u, c, r))), n)
        for (let x = 0; x < n.length; x++)
          i[_][n[x]] = b[x];
    }
    return $;
  }
  static reflect2D(t, e, r) {
    let n = m.iterToArray(t[0] !== void 0 && typeof t[0] == "number" ? [t] : t), i = m.iterToArray(e), a = j.reflectAt2DMatrix(i[0], i[1]);
    for (let o = 0, u = n.length; o < u; o++) {
      let c = r ? n[o].$take(r) : n[o];
      if (c.to(j.transform2D(c, a)), r)
        for (let _ = 0; _ < r.length; _++)
          n[o][r[_]] = c[_];
    }
    return $;
  }
  static cosTable() {
    let t = new Float64Array(360);
    for (let r = 0; r < 360; r++)
      t[r] = Math.cos(r * Math.PI / 180);
    return { table: t, cos: (r) => t[Math.floor($.boundAngle($.toDegree(r)))] };
  }
  static sinTable() {
    let t = new Float64Array(360);
    for (let r = 0; r < 360; r++)
      t[r] = Math.sin(r * Math.PI / 180);
    return { table: t, sin: (r) => t[Math.floor($.boundAngle($.toDegree(r)))] };
  }
}, te = class {
  static linear(t, e = 1) {
    return e * t;
  }
  static quadraticIn(t, e = 1) {
    return e * t * t;
  }
  static quadraticOut(t, e = 1) {
    return -e * t * (t - 2);
  }
  static quadraticInOut(t, e = 1) {
    let r = t * 2;
    return t < 0.5 ? e / 2 * t * t * 4 : -e / 2 * ((r - 1) * (r - 3) - 1);
  }
  static cubicIn(t, e = 1) {
    return e * t * t * t;
  }
  static cubicOut(t, e = 1) {
    let r = t - 1;
    return e * (r * r * r + 1);
  }
  static cubicInOut(t, e = 1) {
    let r = t * 2;
    return t < 0.5 ? e / 2 * r * r * r : e / 2 * ((r - 2) * (r - 2) * (r - 2) + 2);
  }
  static exponentialIn(t, e = 1, r = 0.25) {
    return e * Math.pow(t, 1 / r);
  }
  static exponentialOut(t, e = 1, r = 0.25) {
    return e * Math.pow(t, r);
  }
  static sineIn(t, e = 1) {
    return -e * Math.cos(t * Q.half_pi) + e;
  }
  static sineOut(t, e = 1) {
    return e * Math.sin(t * Q.half_pi);
  }
  static sineInOut(t, e = 1) {
    return -e / 2 * (Math.cos(Math.PI * t) - 1);
  }
  static cosineApprox(t, e = 1) {
    let r = t * t, n = r * r, i = n * r;
    return e * (4 * i / 9 - 17 * n / 9 + 22 * r / 9);
  }
  static circularIn(t, e = 1) {
    return -e * (Math.sqrt(1 - t * t) - 1);
  }
  static circularOut(t, e = 1) {
    let r = t - 1;
    return e * Math.sqrt(1 - r * r);
  }
  static circularInOut(t, e = 1) {
    let r = t * 2;
    return t < 0.5 ? -e / 2 * (Math.sqrt(1 - r * r) - 1) : e / 2 * (Math.sqrt(1 - (r - 2) * (r - 2)) + 1);
  }
  static elasticIn(t, e = 1, r = 0.7) {
    let n = t - 1, i = r / Q.two_pi * 1.5707963267948966;
    return e * (-Math.pow(2, 10 * n) * Math.sin((n - i) * Q.two_pi / r));
  }
  static elasticOut(t, e = 1, r = 0.7) {
    let n = r / Q.two_pi * 1.5707963267948966;
    return e * (Math.pow(2, -10 * t) * Math.sin((t - n) * Q.two_pi / r)) + e;
  }
  static elasticInOut(t, e = 1, r = 0.6) {
    let n = t * 2, i = r / Q.two_pi * 1.5707963267948966;
    return t < 0.5 ? (n -= 1, e * (-0.5 * (Math.pow(2, 10 * n) * Math.sin((n - i) * Q.two_pi / r)))) : (n -= 1, e * (0.5 * (Math.pow(2, -10 * n) * Math.sin((n - i) * Q.two_pi / r))) + e);
  }
  static bounceIn(t, e = 1) {
    return e - te.bounceOut(1 - t, e);
  }
  static bounceOut(t, e = 1) {
    return t < 1 / 2.75 ? e * (7.5625 * t * t) : t < 2 / 2.75 ? (t -= 1.5 / 2.75, e * (7.5625 * t * t + 0.75)) : t < 2.5 / 2.75 ? (t -= 2.25 / 2.75, e * (7.5625 * t * t + 0.9375)) : (t -= 2.625 / 2.75, e * (7.5625 * t * t + 0.984375));
  }
  static bounceInOut(t, e = 1) {
    return t < 0.5 ? te.bounceIn(t * 2, e) / 2 : te.bounceOut(t * 2 - 1, e) / 2 + e / 2;
  }
  static sigmoid(t, e = 1, r = 10) {
    let n = r * (t - 0.5);
    return e / (1 + Math.exp(-n));
  }
  static logSigmoid(t, e = 1, r = 0.7) {
    r = Math.max(Q.epsilon, Math.min(1 - Q.epsilon, r)), r = 1 / (1 - r);
    let n = 1 / (1 + Math.exp((t - 0.5) * r * -2)), i = 1 / (1 + Math.exp(r)), a = 1 / (1 + Math.exp(-r));
    return e * (n - i) / (a - i);
  }
  static seat(t, e = 1, r = 0.5) {
    return t < 0.5 ? e * Math.pow(2 * t, 1 - r) / 2 : e * (1 - Math.pow(2 * (1 - t), 1 - r) / 2);
  }
  static quadraticBezier(t, e = 1, r = [0.05, 0.95]) {
    let n = typeof r != "number" ? r[0] : r, i = typeof r != "number" ? r[1] : 0.5, a = 1 - 2 * n;
    a === 0 && (a = Q.epsilon);
    let o = (Math.sqrt(n * n + a * t) - n) / a;
    return e * ((1 - 2 * i) * (o * o) + 2 * i * o);
  }
  static cubicBezier(t, e = 1, r = [0.1, 0.7], n = [0.9, 0.2]) {
    let i = new g(new h(0, 0), new h(r), new h(n), new h(1, 1));
    return e * J.bezierStep(new h(t * t * t, t * t, t, 1), J.controlPoints(i)).y;
  }
  static quadraticTarget(t, e = 1, r = [0.2, 0.35]) {
    let n = Math.min(1 - Q.epsilon, Math.max(Q.epsilon, r[0])), i = Math.min(1, Math.max(0, r[1])), a = (1 - i) / (1 - n) - i / n, o = (a * (n * n) - i) / n, u = a * (t * t) - o * t;
    return e * Math.min(1, Math.max(0, u));
  }
  static cliff(t, e = 1, r = 0.5) {
    return t > r ? e : 0;
  }
  static step(t, e, r, n, ...i) {
    let a = 1 / e, o = Math.floor(r / a) * a;
    return t(o, n, ...i);
  }
}, Q = {
  xy: "xy",
  yz: "yz",
  xz: "xz",
  xyz: "xyz",
  horizontal: 0,
  vertical: 1,
  identical: 0,
  right: 4,
  bottom_right: 5,
  bottom: 6,
  bottom_left: 7,
  left: 8,
  top_left: 1,
  top: 2,
  top_right: 3,
  epsilon: 1e-4,
  max: Number.MAX_VALUE,
  min: Number.MIN_VALUE,
  pi: Math.PI,
  two_pi: 6.283185307179586,
  half_pi: 1.5707963267948966,
  quarter_pi: 0.7853981633974483,
  one_degree: 0.017453292519943295,
  rad_to_deg: 57.29577951308232,
  deg_to_rad: 0.017453292519943295,
  gravity: 9.81,
  newton: 0.10197,
  gaussian: 0.3989422804014327
}, Dt = class {
  static warnLevel(t) {
    return t && (Dt._warnLevel = t), Dt._warnLevel;
  }
  static getArgs(t) {
    if (t.length < 1)
      return [];
    let e = [], r = Array.isArray(t[0]) || ArrayBuffer.isView(t[0]);
    if (typeof t[0] == "number")
      e = Array.prototype.slice.call(t);
    else if (typeof t[0] == "object" && !r) {
      let n = ["x", "y", "z", "w"], i = t[0];
      for (let a = 0; a < n.length && !(i.length && a >= i.length || !(n[a] in i)); a++)
        e.push(i[n[a]]);
    } else
      r && (e = [].slice.call(t[0]));
    return e;
  }
  static warn(t = "error", e = void 0) {
    if (Dt.warnLevel() == "error")
      throw new Error(t);
    return Dt.warnLevel() == "warn" && console.warn(t), e;
  }
  static randomInt(t, e = 0) {
    return Dt.warn("Util.randomInt is deprecated. Please use `Num.randomRange`"), Math.floor(dt.random() * t) + e;
  }
  static split(t, e, r, n = !1, i = !0) {
    let a = [], o = [], u = r || e, c = 0;
    if (t.length <= 0 || u <= 0)
      return [];
    for (; c < t.length; ) {
      o = [];
      for (let _ = 0; _ < e; _++)
        if (n)
          o.push(t[(c + _) % t.length]);
        else {
          if (c + _ >= t.length)
            break;
          o.push(t[c + _]);
        }
      c += u, (!i || i && o.length === e) && a.push(o);
    }
    return a;
  }
  static flatten(t, e = !0) {
    let r = e ? new g() : new Array();
    return r.concat.apply(r, t);
  }
  static combine(t, e, r) {
    let n = [];
    for (let i = 0, a = t.length; i < a; i++)
      for (let o = 0, u = e.length; o < u; o++)
        n.push(r(t[i], e[o]));
    return n;
  }
  static zip(t) {
    let e = [];
    for (let r = 0, n = t[0].length; r < n; r++) {
      let i = [];
      for (let a = 0; a < t.length; a++)
        i.push(t[a][r]);
      e.push(i);
    }
    return e;
  }
  static stepper(t, e = 0, r = 1, n) {
    let i = e;
    return function() {
      return i += r, i >= t && (i = e + (i - t)), n && n(i), i;
    };
  }
  static forRange(t, e, r = 0, n = 1) {
    let i = [];
    for (let a = r, o = e; a < o; a += n)
      i[a] = t(a);
    return i;
  }
  static load(t, e) {
    var r = new XMLHttpRequest();
    r.open("GET", t, !0), r.onload = function() {
      r.status >= 200 && r.status < 400 ? e(r.responseText, !0) : e(`Server error (${r.status}) when loading "${t}"`, !1);
    }, r.onerror = function() {
      e("Unknown network error", !1);
    }, r.send();
  }
  static download(t, e = "pts_canvas_image", r = "png", n = 1) {
    const i = r === "jpg" ? "jpeg" : r;
    t.element.toBlob(function(a) {
      const o = document.createElement("a"), u = URL.createObjectURL(a);
      o.href = u, o.download = `${e}.${r}`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(u);
    }, `image/${i}`, n);
  }
  static performance(t = 10) {
    let e = Date.now(), r = [];
    return function() {
      const n = Date.now();
      return r.push(n - e), r.length >= t && r.shift(), e = n, Math.floor(r.reduce((i, a) => i + a, 0) / r.length);
    };
  }
  static arrayCheck(t, e = 2) {
    return Array.isArray(t) && t.length < e ? (Dt.warn(`Requires ${e} or more Pts in this Group.`), !1) : !0;
  }
  static iterToArray(t) {
    return Array.isArray(t) ? t : [...t];
  }
  static isMobile() {
    return /iPhone|iPad|Android/i.test(navigator.userAgent);
  }
}, m = Dt;
m._warnLevel = "mute";
var h = class extends Float32Array {
  constructor(...t) {
    var e = (...r) => {
      super(...r);
    };
    t.length === 1 && typeof t[0] == "number" ? e(t[0]) : e(t.length > 0 ? m.getArgs(t) : [0, 0]);
  }
  static make(t, e = 0, r = !1) {
    let n = new Float32Array(t);
    if (e && n.fill(e), r)
      for (let i = 0, a = n.length; i < a; i++)
        n[i] = n[i] * dt.random();
    return new h(n);
  }
  get id() {
    return this._id;
  }
  set id(t) {
    this._id = t;
  }
  get x() {
    return this[0];
  }
  set x(t) {
    this[0] = t;
  }
  get y() {
    return this[1];
  }
  set y(t) {
    this[1] = t;
  }
  get z() {
    return this[2];
  }
  set z(t) {
    this[2] = t;
  }
  get w() {
    return this[3];
  }
  set w(t) {
    this[3] = t;
  }
  clone() {
    return new h(this);
  }
  equals(t, e = 1e-6) {
    for (let r = 0, n = this.length; r < n; r++)
      if (Math.abs(this[r] - t[r]) > e)
        return !1;
    return !0;
  }
  to(...t) {
    let e = m.getArgs(t);
    for (let r = 0, n = Math.min(this.length, e.length); r < n; r++)
      this[r] = e[r];
    return this;
  }
  $to(...t) {
    return this.clone().to(...t);
  }
  toAngle(t, e, r = !1) {
    let n = e ?? this.magnitude(), i = [Math.cos(t) * n, Math.sin(t) * n];
    return r ? this.add(i) : this.to(i);
  }
  op(t) {
    let e = this;
    return (...r) => t(e, ...r);
  }
  ops(t) {
    let e = [];
    for (let r = 0, n = t.length; r < n; r++)
      e.push(this.op(t[r]));
    return e;
  }
  $take(t) {
    let e = [];
    for (let r = 0, n = t.length; r < n; r++)
      e.push(this[t[r]] || 0);
    return new h(e);
  }
  $concat(...t) {
    return new h(this.toArray().concat(m.getArgs(t)));
  }
  add(...t) {
    return t.length === 1 && typeof t[0] == "number" ? q.add(this, t[0]) : q.add(this, m.getArgs(t)), this;
  }
  $add(...t) {
    return this.clone().add(...t);
  }
  subtract(...t) {
    return t.length === 1 && typeof t[0] == "number" ? q.subtract(this, t[0]) : q.subtract(this, m.getArgs(t)), this;
  }
  $subtract(...t) {
    return this.clone().subtract(...t);
  }
  multiply(...t) {
    return t.length === 1 && typeof t[0] == "number" ? q.multiply(this, t[0]) : q.multiply(this, m.getArgs(t)), this;
  }
  $multiply(...t) {
    return this.clone().multiply(...t);
  }
  divide(...t) {
    return t.length === 1 && typeof t[0] == "number" ? q.divide(this, t[0]) : q.divide(this, m.getArgs(t)), this;
  }
  $divide(...t) {
    return this.clone().divide(...t);
  }
  magnitudeSq() {
    return q.dot(this, this);
  }
  magnitude() {
    return q.magnitude(this);
  }
  unit(t = void 0) {
    return q.unit(this, t), this;
  }
  $unit(t = void 0) {
    return this.clone().unit(t);
  }
  dot(...t) {
    return q.dot(this, m.getArgs(t));
  }
  $cross2D(...t) {
    return q.cross2D(this, m.getArgs(t));
  }
  $cross(...t) {
    return q.cross(this, m.getArgs(t));
  }
  $project(...t) {
    return this.$multiply(this.dot(...t) / this.magnitudeSq());
  }
  projectScalar(...t) {
    return this.dot(...t) / this.magnitude();
  }
  abs() {
    return q.abs(this), this;
  }
  $abs() {
    return this.clone().abs();
  }
  floor() {
    return q.floor(this), this;
  }
  $floor() {
    return this.clone().floor();
  }
  ceil() {
    return q.ceil(this), this;
  }
  $ceil() {
    return this.clone().ceil();
  }
  round() {
    return q.round(this), this;
  }
  $round() {
    return this.clone().round();
  }
  minValue() {
    return q.min(this);
  }
  maxValue() {
    return q.max(this);
  }
  $min(...t) {
    let e = m.getArgs(t), r = this.clone();
    for (let n = 0, i = Math.min(this.length, e.length); n < i; n++)
      r[n] = Math.min(this[n], e[n]);
    return r;
  }
  $max(...t) {
    let e = m.getArgs(t), r = this.clone();
    for (let n = 0, i = Math.min(this.length, e.length); n < i; n++)
      r[n] = Math.max(this[n], e[n]);
    return r;
  }
  angle(t = Q.xy) {
    return Math.atan2(this[t[1]], this[t[0]]);
  }
  angleBetween(t, e = Q.xy) {
    return $.boundRadian(this.angle(e)) - $.boundRadian(t.angle(e));
  }
  scale(t, e) {
    return $.scale(this, t, e || h.make(this.length, 0)), this;
  }
  rotate2D(t, e, r) {
    return $.rotate2D(this, t, e || h.make(this.length, 0), r), this;
  }
  shear2D(t, e, r) {
    return $.shear2D(this, t, e || h.make(this.length, 0), r), this;
  }
  reflect2D(t, e) {
    return $.reflect2D(this, t, e), this;
  }
  toString() {
    return `Pt(${this.join(", ")})`;
  }
  toArray() {
    return [].slice.call(this);
  }
  toGroup() {
    return new g(h.make(this.length), this.clone());
  }
  toBound() {
    return new gt(h.make(this.length), this.clone());
  }
}, g = class extends Array {
  constructor(...t) {
    super(...t);
  }
  get id() {
    return this._id;
  }
  set id(t) {
    this._id = t;
  }
  get p1() {
    return this[0];
  }
  get p2() {
    return this[1];
  }
  get p3() {
    return this[2];
  }
  get p4() {
    return this[3];
  }
  get q1() {
    return this[this.length - 1];
  }
  get q2() {
    return this[this.length - 2];
  }
  get q3() {
    return this[this.length - 3];
  }
  get q4() {
    return this[this.length - 4];
  }
  clone() {
    let t = new g();
    for (let e = 0, r = this.length; e < r; e++)
      t.push(this[e].clone());
    return t;
  }
  static fromArray(t) {
    let e = new g();
    for (let r of t) {
      let n = r instanceof h ? r : new h(r);
      e.push(n);
    }
    return e;
  }
  static fromPtArray(t) {
    return g.from(t);
  }
  split(t, e, r = !1) {
    return m.split(this, t, e, r);
  }
  insert(t, e = 0) {
    return g.prototype.splice.apply(this, [e, 0, ...t]), this;
  }
  remove(t = 0, e = 1) {
    let r = t < 0 ? [t * -1 - 1, e] : [t, e];
    return g.prototype.splice.apply(this, r);
  }
  segments(t = 2, e = 1, r = !1) {
    return this.split(t, e, r);
  }
  lines() {
    return this.segments(2, 1);
  }
  centroid() {
    return $.centroid(this);
  }
  boundingBox() {
    return $.boundingBox(this);
  }
  anchorTo(t = 0) {
    $.anchor(this, t, "to");
  }
  anchorFrom(t = 0) {
    $.anchor(this, t, "from");
  }
  op(t) {
    let e = this;
    return (...r) => t(e, ...r);
  }
  ops(t) {
    let e = [];
    for (let r = 0, n = t.length; r < n; r++)
      e.push(this.op(t[r]));
    return e;
  }
  interpolate(t) {
    t = dt.clamp(t, 0, 1);
    let e = this.length - 1, r = 1 / (this.length - 1), n = Math.floor(t / r);
    return $.interpolate(this[n], this[Math.min(this.length - 1, n + 1)], (t - n * r) * e);
  }
  moveBy(...t) {
    return this.add(...t);
  }
  moveTo(...t) {
    let e = new h(m.getArgs(t)).subtract(this[0]);
    return this.moveBy(e), this;
  }
  scale(t, e) {
    for (let r = 0, n = this.length; r < n; r++)
      $.scale(this[r], t, e || this[0]);
    return this;
  }
  rotate2D(t, e, r) {
    for (let n = 0, i = this.length; n < i; n++)
      $.rotate2D(this[n], t, e || this[0], r);
    return this;
  }
  shear2D(t, e, r) {
    for (let n = 0, i = this.length; n < i; n++)
      $.shear2D(this[n], t, e || this[0], r);
    return this;
  }
  reflect2D(t, e) {
    for (let r = 0, n = this.length; r < n; r++)
      $.reflect2D(this[r], t, e);
    return this;
  }
  sortByDimension(t, e = !1) {
    return this.sort((r, n) => e ? n[t] - r[t] : r[t] - n[t]);
  }
  forEachPt(t, ...e) {
    if (!this[0][t])
      return m.warn(`${t} is not a function of Pt`), this;
    for (let r = 0, n = this.length; r < n; r++)
      this[r] = this[r][t](...e);
    return this;
  }
  add(...t) {
    return this.forEachPt("add", ...t);
  }
  subtract(...t) {
    return this.forEachPt("subtract", ...t);
  }
  multiply(...t) {
    return this.forEachPt("multiply", ...t);
  }
  divide(...t) {
    return this.forEachPt("divide", ...t);
  }
  $matrixAdd(t) {
    return j.add(this, t);
  }
  $matrixMultiply(t, e = !1, r = !1) {
    return j.multiply(this, t, e, r);
  }
  zipSlice(t, e = !1) {
    return j.zipSlice(this, t, e);
  }
  $zip(t = void 0, e = !1) {
    return j.zip(this, t, e);
  }
  toBound() {
    return gt.fromGroup(this);
  }
  toString() {
    return "Group[ " + this.reduce((t, e) => t + e.toString() + " ", "") + " ]";
  }
}, gt = class extends g {
  constructor(...t) {
    super(...t), this._center = new h(), this._size = new h(), this._topLeft = new h(), this._bottomRight = new h(), this._inited = !1, this.init();
  }
  static fromBoundingRect(t) {
    let e = new gt(new h(t.left || 0, t.top || 0), new h(t.right || 0, t.bottom || 0));
    return t.width && t.height && (e.size = new h(t.width, t.height)), e;
  }
  static fromGroup(t) {
    let e = m.iterToArray(t);
    if (e.length < 2)
      throw new Error("Cannot create a Bound from a group that has less than 2 Pt");
    return new gt(e[0], e[e.length - 1]);
  }
  init() {
    if (this.p1 && (this._size = this.p1.clone(), this._inited = !0), this.p1 && this.p2) {
      let t = this.p1, e = this.p2;
      this.topLeft = t.$min(e), this._bottomRight = t.$max(e), this._updateSize(), this._inited = !0;
    }
  }
  clone() {
    return new gt(this._topLeft.clone(), this._bottomRight.clone());
  }
  _updateSize() {
    this._size = this._bottomRight.$subtract(this._topLeft).abs(), this._updateCenter();
  }
  _updateCenter() {
    this._center = this._size.$multiply(0.5).add(this._topLeft);
  }
  _updatePosFromTop() {
    this._bottomRight = this._topLeft.$add(this._size), this._updateCenter();
  }
  _updatePosFromBottom() {
    this._topLeft = this._bottomRight.$subtract(this._size), this._updateCenter();
  }
  _updatePosFromCenter() {
    let t = this._size.$multiply(0.5);
    this._topLeft = this._center.$subtract(t), this._bottomRight = this._center.$add(t);
  }
  get size() {
    return new h(this._size);
  }
  set size(t) {
    this._size = new h(t), this._updatePosFromTop();
  }
  get center() {
    return new h(this._center);
  }
  set center(t) {
    this._center = new h(t), this._updatePosFromCenter();
  }
  get topLeft() {
    return new h(this._topLeft);
  }
  set topLeft(t) {
    this._topLeft = new h(t), this[0] = this._topLeft, this._updateSize();
  }
  get bottomRight() {
    return new h(this._bottomRight);
  }
  set bottomRight(t) {
    this._bottomRight = new h(t), this[1] = this._bottomRight, this._updateSize();
  }
  get width() {
    return this._size.length > 0 ? this._size.x : 0;
  }
  set width(t) {
    this._size.x = t, this._updatePosFromTop();
  }
  get height() {
    return this._size.length > 1 ? this._size.y : 0;
  }
  set height(t) {
    this._size.y = t, this._updatePosFromTop();
  }
  get depth() {
    return this._size.length > 2 ? this._size.z : 0;
  }
  set depth(t) {
    this._size.z = t, this._updatePosFromTop();
  }
  get x() {
    return this.topLeft.x;
  }
  get y() {
    return this.topLeft.y;
  }
  get z() {
    return this.topLeft.z;
  }
  get inited() {
    return this._inited;
  }
  update() {
    return this._topLeft = this[0], this._bottomRight = this[1], this._updateSize(), this;
  }
}, pt = {
  up: "up",
  down: "down",
  move: "move",
  drag: "drag",
  uidrag: "uidrag",
  drop: "drop",
  uidrop: "uidrop",
  over: "over",
  out: "out",
  enter: "enter",
  leave: "leave",
  click: "click",
  keydown: "keydown",
  keyup: "keyup",
  contextmenu: "contextmenu",
  all: "all"
}, En = class {
  constructor() {
    this.id = "space", this.bound = new gt(), this._time = { prev: 0, diff: 0, end: -1, min: 0 }, this.players = {}, this.playerCount = 0, this._animID = -1, this._pause = !1, this._refresh = void 0, this._pointer = new h(), this._isReady = !1, this._playing = !1;
  }
  refresh(t) {
    return this._refresh = t, this;
  }
  minFrameTime(t = 0) {
    this._time.min = t;
  }
  add(t) {
    let e = typeof t == "function" ? { animate: t } : t, r = this.playerCount++, n = this.id + r;
    return this.players[n] = e, e.animateID = n, e.resize && this.bound.inited && e.resize(this.bound), this._refresh === void 0 && (this._refresh = !0), this;
  }
  remove(t) {
    return delete this.players[t.animateID], this;
  }
  removeAll() {
    return this.players = {}, this;
  }
  play(t = 0) {
    if (!(t === 0 && this._animID !== -1)) {
      if (this._animID = requestAnimationFrame(this.play.bind(this)), this._pause)
        return this;
      if (this._time.diff = t - this._time.prev, this._time.diff < this._time.min)
        return this;
      this._time.prev = t;
      try {
        this.playItems(t);
      } catch (e) {
        throw cancelAnimationFrame(this._animID), this._animID = -1, this._playing = !1, e;
      }
      return this;
    }
  }
  replay() {
    this._time.end = -1, this.play();
  }
  playItems(t) {
    if (this._playing = !0, this._refresh && this.clear(), this._isReady)
      for (let e in this.players)
        this.players[e].animate && this.players[e].animate(t, this._time.diff, this);
    this._time.end >= 0 && t > this._time.end && (cancelAnimationFrame(this._animID), this._animID = -1, this._playing = !1);
  }
  pause(t = !1) {
    return this._pause = t ? !this._pause : !0, this;
  }
  resume() {
    return this._pause = !1, this;
  }
  stop(t = 0) {
    return this._time.end = t, this;
  }
  playOnce(t = 0) {
    return this.play(), this.stop(t), this;
  }
  render(t) {
    return this._renderFunc && this._renderFunc(t, this), this;
  }
  set customRendering(t) {
    this._renderFunc = t;
  }
  get customRendering() {
    return this._renderFunc;
  }
  get isPlaying() {
    return this._playing;
  }
  get outerBound() {
    return this.bound.clone();
  }
  get innerBound() {
    return new gt(h.make(this.size.length, 0), this.size.clone());
  }
  get size() {
    return this.bound.size.clone();
  }
  get center() {
    return this.size.divide(2);
  }
  get width() {
    return this.bound.width;
  }
  get height() {
    return this.bound.height;
  }
}, ar = class extends En {
  constructor() {
    super(...arguments), this._pressed = !1, this._dragged = !1, this._hasMouse = !1, this._hasTouch = !1, this._hasKeyboard = !1;
  }
  get pointer() {
    let t = this._pointer.clone();
    return t.id = this._pointer.id, t;
  }
  bindCanvas(t, e, r = {}, n) {
    (n || this._canvas).addEventListener(t, e, r);
  }
  unbindCanvas(t, e, r = {}, n) {
    (n || this._canvas).removeEventListener(t, e, r);
  }
  bindDoc(t, e, r = {}) {
    document && document.addEventListener(t, e, r);
  }
  unbindDoc(t, e, r = {}) {
    document && document.removeEventListener(t, e, r);
  }
  bindMouse(t = !0, e) {
    return t ? (this._mouseDown = this._mouseDown.bind(this), this._mouseUp = this._mouseUp.bind(this), this._mouseOver = this._mouseOver.bind(this), this._mouseOut = this._mouseOut.bind(this), this._mouseMove = this._mouseMove.bind(this), this._mouseClick = this._mouseClick.bind(this), this._contextMenu = this._contextMenu.bind(this), this.bindCanvas("mousedown", this._mouseDown, {}, e), this.bindCanvas("mouseup", this._mouseUp, {}, e), this.bindCanvas("mouseover", this._mouseOver, {}, e), this.bindCanvas("mouseout", this._mouseOut, {}, e), this.bindCanvas("mousemove", this._mouseMove, {}, e), this.bindCanvas("click", this._mouseClick, {}, e), this.bindCanvas("contextmenu", this._contextMenu, {}, e), this._hasMouse = !0) : (this.unbindCanvas("mousedown", this._mouseDown, {}, e), this.unbindCanvas("mouseup", this._mouseUp, {}, e), this.unbindCanvas("mouseover", this._mouseOver, {}, e), this.unbindCanvas("mouseout", this._mouseOut, {}, e), this.unbindCanvas("mousemove", this._mouseMove, {}, e), this.unbindCanvas("click", this._mouseClick, {}, e), this.unbindCanvas("contextmenu", this._contextMenu, {}, e), this._hasMouse = !1), this;
  }
  bindTouch(t = !0, e = !1, r) {
    return t ? (this.bindCanvas("touchstart", this._touchStart.bind(this), { passive: e }, r), this.bindCanvas("touchend", this._mouseUp.bind(this), {}, r), this.bindCanvas("touchmove", this._touchMove.bind(this), { passive: e }, r), this.bindCanvas("touchcancel", this._mouseOut.bind(this), {}, r), this._hasTouch = !0) : (this.unbindCanvas("touchstart", this._touchStart.bind(this), { passive: e }, r), this.unbindCanvas("touchend", this._mouseUp.bind(this), {}, r), this.unbindCanvas("touchmove", this._touchMove.bind(this), { passive: e }, r), this.unbindCanvas("touchcancel", this._mouseOut.bind(this), {}, r), this._hasTouch = !1), this;
  }
  bindKeyboard(t = !0) {
    return t ? (this._keyDownBind = this._keyDown.bind(this), this._keyUpBind = this._keyUp.bind(this), this.bindDoc("keydown", this._keyDownBind, {}), this.bindDoc("keyup", this._keyUpBind, {}), this._hasKeyboard = !0) : (this.unbindDoc("keydown", this._keyDownBind, {}), this.unbindDoc("keyup", this._keyUpBind, {}), this._hasKeyboard = !1), this;
  }
  touchesToPoints(t, e = "touches") {
    if (!t || !t[e])
      return [];
    let r = [];
    for (var n = 0; n < t[e].length; n++) {
      let i = t[e].item(n);
      r.push(new h(i.pageX - this.bound.topLeft.x, i.pageY - this.bound.topLeft.y));
    }
    return r;
  }
  _mouseAction(t, e) {
    if (!this.isPlaying)
      return;
    let r = 0, n = 0;
    if (e instanceof MouseEvent) {
      for (let i in this.players)
        if (this.players.hasOwnProperty(i)) {
          let a = this.players[i];
          r = e.pageX - this.outerBound.x, n = e.pageY - this.outerBound.y, a.action && a.action(t, r, n, e);
        }
    } else
      for (let i in this.players)
        if (this.players.hasOwnProperty(i)) {
          let a = this.players[i], o = e.changedTouches && e.changedTouches.length > 0, u = e.changedTouches.item(0);
          r = o ? u.pageX - this.outerBound.x : 0, n = o ? u.pageY - this.outerBound.y : 0, a.action && a.action(t, r, n, e);
        }
    t && (this._pointer.to(r, n), this._pointer.id = t);
  }
  _mouseDown(t) {
    return this._mouseAction(pt.down, t), this._pressed = !0, !1;
  }
  _mouseUp(t) {
    return this._dragged ? this._mouseAction(pt.drop, t) : this._mouseAction(pt.up, t), this._pressed = !1, this._dragged = !1, !1;
  }
  _mouseMove(t) {
    return this._mouseAction(pt.move, t), this._pressed && (this._dragged = !0, this._mouseAction(pt.drag, t)), !1;
  }
  _mouseOver(t) {
    return this._mouseAction(pt.over, t), !1;
  }
  _mouseOut(t) {
    return this._mouseAction(pt.out, t), this._dragged && this._mouseAction(pt.drop, t), this._dragged = !1, !1;
  }
  _mouseClick(t) {
    return this._mouseAction(pt.click, t), this._pressed = !1, this._dragged = !1, !1;
  }
  _contextMenu(t) {
    return this._mouseAction(pt.contextmenu, t), !1;
  }
  _touchMove(t) {
    return this._mouseMove(t), t.preventDefault(), !1;
  }
  _touchStart(t) {
    return this._mouseDown(t), t.preventDefault(), !1;
  }
  _keyDown(t) {
    return this._keyboardAction(pt.keydown, t), !1;
  }
  _keyUp(t) {
    return this._keyboardAction(pt.keyup, t), !1;
  }
  _keyboardAction(t, e) {
    if (this.isPlaying) {
      for (let r in this.players)
        if (this.players.hasOwnProperty(r)) {
          let n = this.players[r];
          n.action && n.action(t, e.shiftKey ? 1 : 0, e.altKey ? 1 : 0, e);
        }
    }
  }
}, Cn = class {
  constructor() {
    this._ready = !1;
  }
  get ready() {
    return this._ready;
  }
}, ve = class extends Cn {
  constructor() {
    super(...arguments), this._filled = !0, this._stroked = !0, this._font = new ne(14, "sans-serif");
  }
  get filled() {
    return this._filled;
  }
  set filled(t) {
    this._filled = t;
  }
  get stroked() {
    return this._stroked;
  }
  set stroked(t) {
    this._stroked = t;
  }
  get currentFont() {
    return this._font;
  }
  _multiple(t, e, ...r) {
    if (!t)
      return this;
    for (let n = 0, i = t.length; n < i; n++)
      this[e](t[n], ...r);
    return this;
  }
  alpha(t) {
    return this;
  }
  fill(t) {
    return this;
  }
  fillOnly(t) {
    return this.stroke(!1), this.fill(t);
  }
  stroke(t, e, r, n) {
    return this;
  }
  strokeOnly(t, e, r, n) {
    return this.fill(!1), this.stroke(t, e, r, n);
  }
  points(t, e, r) {
    if (t) {
      for (let n = 0, i = t.length; n < i; n++)
        this.point(t[n], e, r);
      return this;
    }
  }
  circles(t) {
    return this._multiple(t, "circle");
  }
  squares(t) {
    return this._multiple(t, "square");
  }
  lines(t) {
    return this._multiple(t, "line");
  }
  polygons(t) {
    return this._multiple(t, "polygon");
  }
  rects(t) {
    return this._multiple(t, "rect");
  }
}, ne = class {
  constructor(t = 12, e = "sans-serif", r = "", n = "", i = 1.5) {
    this.size = t, this.face = e, this.style = n, this.weight = r, this.lineHeight = i;
  }
  get value() {
    return `${this.style} ${this.weight} ${this.size}px/${this.lineHeight} ${this.face}`;
  }
  toString() {
    return this.value;
  }
}, sr = class {
  static textWidthEstimator(t, e = ["M", "n", "."], r = [0.06, 0.8, 0.14]) {
    let n = e.map(t), i = new h(r).dot(n);
    return (a) => a.length * i;
  }
  static truncate(t, e, r, n = "") {
    let i = Math.floor(e.length * Math.min(1, r / t(e)));
    return i < e.length ? (i = Math.max(0, i - n.length), [e.substr(0, i) + n, i]) : [e, e.length];
  }
  static fontSizeToBox(t, e = 1, r = !0) {
    let n = gt.fromGroup(t), i = r ? n.height : n.width, a = e * i;
    return function(o) {
      let u = gt.fromGroup(o), c = (r ? u.height : u.width) / i;
      return a * c;
    };
  }
  static fontSizeToThreshold(t, e = 0) {
    return function(r, n) {
      let i = r * n / t;
      return e < 0 ? Math.min(i, r) : e > 0 ? Math.max(i, r) : i;
    };
  }
}, At = class {
  constructor(t = !1, e, r) {
    this._scale = 1, this._loaded = !1, this._editable = t, this._space = e, this._scale = this._space ? this._space.pixelScale : 1, this._img = new Image(), r && (this._img.crossOrigin = "Anonymous");
  }
  static load(t, e = !1, r, n) {
    const i = new At(e, r);
    return i.load(t).then((a) => {
      n && n(a);
    }), i;
  }
  static async loadAsync(t, e = !1, r) {
    return await new At(e, r).load(t);
  }
  static async loadPattern(t, e, r = "repeat", n = !1) {
    return (await At.loadAsync(t, n, e)).pattern(r);
  }
  static blank(t, e, r) {
    let n = new At(!0, e);
    const i = r || e.pixelScale;
    return n.initCanvas(t[0], t[1], i), n;
  }
  load(t) {
    return new Promise((e, r) => {
      this._editable && !document && r("Cannot create html canvas element. document not found."), this._img.src = t, this._img.onload = () => {
        this._editable && (this._cv || (this._cv = document.createElement("canvas")), this._drawToScale(this._scale, this._img), this._data = this._ctx.getImageData(0, 0, this._cv.width, this._cv.height)), this._loaded = !0, e(this);
      }, this._img.onerror = (n) => {
        r(n);
      };
    });
  }
  _drawToScale(t, e) {
    const r = e.width, n = e.height;
    this.initCanvas(r, n, t), e && this._ctx.drawImage(e, 0, 0, r, n, 0, 0, this._cv.width, this._cv.height);
  }
  initCanvas(t, e, r = 1) {
    if (!this._editable) {
      console.error("Cannot initiate canvas because this Img is not set to be editable");
      return;
    }
    this._cv || (this._cv = document.createElement("canvas"));
    const n = typeof r == "number" ? [r, r] : r;
    this._cv.width = t * n[0], this._cv.height = e * n[1], this._ctx = this._cv.getContext("2d"), this._loaded = !0;
  }
  bitmap(t) {
    const e = t ? t[0] : this._cv.width, r = t ? t[1] : this._cv.height;
    return createImageBitmap(this._cv, 0, 0, e, r);
  }
  pattern(t = "repeat", e = !1) {
    if (!this._space)
      throw "Cannot find CanvasSpace ctx to create image pattern";
    return this._space.ctx.createPattern(e ? this._cv : this._img, t);
  }
  sync() {
    this._scale !== 1 ? this.bitmap().then((t) => {
      this._drawToScale(1 / this._scale, t), this.load(this.toBase64());
    }) : this._img.src = this.toBase64();
  }
  pixel(t, e = !0) {
    const r = typeof e == "number" ? e : e ? this._scale : 1;
    return At.getPixel(this._data, [t[0] * r, t[1] * r]);
  }
  static getPixel(t, e) {
    const r = new h(0, 0, 0, 0);
    if (e[0] >= t.width || e[1] >= t.height)
      return r;
    const n = Math.floor(e[1]) * (t.width * 4) + Math.floor(e[0]) * 4, i = t.data;
    return n >= i.length - 4 ? r : new h(i[n], i[n + 1], i[n + 2], i[n + 3]);
  }
  resize(t, e = !1) {
    let r = e ? t : [t[0] / this._img.naturalWidth, t[1] / this._img.naturalHeight];
    return this._drawToScale(r, this._img), this._data = this._ctx.getImageData(0, 0, this._cv.width, this._cv.height), this;
  }
  crop(t) {
    let e = t.topLeft.scale(this._scale), r = t.size.scale(this._scale);
    return this._ctx.getImageData(e.x, e.y, r.x, r.y);
  }
  filter(t) {
    return this._ctx.filter = t, this._ctx.drawImage(this._cv, 0, 0), this._ctx.filter = "none", this;
  }
  cleanup() {
    this._cv && this._cv.remove(), this._img && this._img.remove(), this._data = null;
  }
  static fromBlob(t, e = !1, r) {
    let n = URL.createObjectURL(t);
    return new At(e, r).load(n);
  }
  static imageDataToBlob(t) {
    return new Promise(function(e, r) {
      document || r("Cannot create html canvas element. document not found.");
      let n = document.createElement("canvas");
      n.width = t.width, n.height = t.height, n.getContext("2d").putImageData(t, 0, 0), n.toBlob((i) => {
        e(i), n.remove();
      });
    });
  }
  toBase64() {
    return this._cv.toDataURL();
  }
  toBlob() {
    return new Promise((t) => {
      this._cv.toBlob((e) => t(e));
    });
  }
  getForm() {
    return this._editable || console.error("Cannot get a CanvasForm because this Img is not editable"), this._ctx ? new ct(this._ctx) : void 0;
  }
  get current() {
    return this._editable ? this._cv : this._img;
  }
  get image() {
    return this._img;
  }
  get canvas() {
    return this._cv;
  }
  get data() {
    return this._data;
  }
  get ctx() {
    return this._ctx;
  }
  get loaded() {
    return this._loaded;
  }
  get pixelScale() {
    return this._scale;
  }
  get imageSize() {
    return !this._img.width || !this._img.height ? this.canvasSize.$divide(this._scale) : new h(this._img.width, this._img.height);
  }
  get canvasSize() {
    return new h(this._cv.width, this._cv.height);
  }
  get scaledMatrix() {
    const t = 1 / this._scale;
    return new j().scale2D([t, t]);
  }
}, An = class extends ar {
  constructor(t, e) {
    super(), this._pixelScale = 1, this._autoResize = !0, this._bgcolor = "#e1e9f0", this._offscreen = !1, this._initialResize = !1;
    var r = null;
    if (this.id = "pt", t instanceof Element)
      r = t, this.id = "pts_existing_space";
    else {
      let n = t;
      n = t[0] === "#" || t[0] === "." ? t : "#" + t, r = document.querySelector(n), this.id = n.substr(1);
    }
    r ? r.nodeName.toLowerCase() != "canvas" ? (this._container = r, this._canvas = this._createElement("canvas", this.id + "_canvas"), this._container.appendChild(this._canvas), this._initialResize = !0) : (this._canvas = r, this._container = r.parentElement, this._autoResize = !1) : (this._container = this._createElement("div", this.id + "_container"), this._canvas = this._createElement("canvas", this.id), this._container.appendChild(this._canvas), document.body.appendChild(this._container)), setTimeout(this._ready.bind(this, e), 100), this._ctx = this._canvas.getContext("2d");
  }
  _createElement(t = "div", e) {
    let r = document.createElement(t);
    return r.setAttribute("id", e), r;
  }
  _ready(t) {
    if (!this._container)
      throw new Error(`Cannot initiate #${this.id} element`);
    this._isReady = !0, this._resizeHandler(null), this.clear(this._bgcolor), this._canvas.dispatchEvent(new Event("ready"));
    for (let e in this.players)
      this.players.hasOwnProperty(e) && this.players[e].start && this.players[e].start(this.bound.clone(), this);
    this._pointer = this.center, this._initialResize = !1, t && t(this.bound, this._canvas);
  }
  setup(t) {
    if (this._bgcolor = t.bgcolor ? t.bgcolor : "transparent", this.autoResize = t.resize != null ? t.resize : !1, t.retina !== !1) {
      let e = window && window.devicePixelRatio || 1, r = this._ctx.webkitBackingStorePixelRatio || this._ctx.mozBackingStorePixelRatio || this._ctx.msBackingStorePixelRatio || this._ctx.oBackingStorePixelRatio || this._ctx.backingStorePixelRatio || 1;
      this._pixelScale = Math.max(1, e / r);
    }
    return t.offscreen ? (this._offscreen = !0, this._offCanvas = this._createElement("canvas", this.id + "_offscreen"), this._offCtx = this._offCanvas.getContext("2d")) : this._offscreen = !1, t.pixelDensity && (this._pixelScale = t.pixelDensity), this;
  }
  set autoResize(t) {
    window && (this._autoResize = t, t ? window.addEventListener("resize", this._resizeHandler.bind(this)) : window.removeEventListener("resize", this._resizeHandler.bind(this)));
  }
  get autoResize() {
    return this._autoResize;
  }
  resize(t, e) {
    this.bound = t, this._canvas.width = Math.ceil(this.bound.size.x) * this._pixelScale, this._canvas.height = Math.ceil(this.bound.size.y) * this._pixelScale, this._canvas.style.width = Math.ceil(this.bound.size.x) + "px", this._canvas.style.height = Math.ceil(this.bound.size.y) + "px", this._offscreen && (this._offCanvas.width = Math.ceil(this.bound.size.x) * this._pixelScale, this._offCanvas.height = Math.ceil(this.bound.size.y) * this._pixelScale), this._pixelScale != 1 && (this._ctx.scale(this._pixelScale, this._pixelScale), this._offscreen && this._offCtx.scale(this._pixelScale, this._pixelScale));
    for (let r in this.players)
      if (this.players.hasOwnProperty(r)) {
        let n = this.players[r];
        n.resize && n.resize(this.bound, e);
      }
    return this.render(this._ctx), e && !this.isPlaying && this.playOnce(0), this;
  }
  _resizeHandler(t) {
    if (!window)
      return;
    let e = this._autoResize || this._initialResize ? this._container.getBoundingClientRect() : this._canvas.getBoundingClientRect();
    if (e) {
      let r = gt.fromBoundingRect(e);
      r.center = r.center.add(window.pageXOffset, window.pageYOffset), this.resize(r, t);
    }
  }
  set background(t) {
    this._bgcolor = t;
  }
  get background() {
    return this._bgcolor;
  }
  get pixelScale() {
    return this._pixelScale;
  }
  get hasOffscreen() {
    return this._offscreen;
  }
  get offscreenCtx() {
    return this._offCtx;
  }
  get offscreenCanvas() {
    return this._offCanvas;
  }
  getForm() {
    return new ct(this);
  }
  get element() {
    return this._canvas;
  }
  get parent() {
    return this._container;
  }
  get ready() {
    return this._isReady;
  }
  get ctx() {
    return this._ctx;
  }
  clear(t) {
    t && (this._bgcolor = t);
    const e = this._ctx.fillStyle, r = Math.ceil(this.pixelScale);
    return !this._bgcolor || this._bgcolor === "transparent" ? this._ctx.clearRect(-r, -r, this._canvas.width + r, this._canvas.height + r) : ((this._bgcolor.indexOf("rgba") === 0 || this._bgcolor.length === 9 && this._bgcolor.indexOf("#") === 0) && this._ctx.clearRect(-r, -r, this._canvas.width + r, this._canvas.height + r), this._ctx.fillStyle = this._bgcolor, this._ctx.fillRect(-r, -r, this._canvas.width + r, this._canvas.height + r)), this._ctx.fillStyle = e, this;
  }
  clearOffscreen(t) {
    if (this._offscreen) {
      const e = Math.ceil(this.pixelScale);
      t ? (this._offCtx.fillStyle = t, this._offCtx.fillRect(-e, -e, this._canvas.width + e, this._canvas.height + e)) : this._offCtx.clearRect(-e, -e, this._offCanvas.width + e, this._offCanvas.height + e);
    }
    return this;
  }
  playItems(t) {
    this._isReady && (this._ctx.save(), this._offscreen && this._offCtx.save(), super.playItems(t), this._ctx.restore(), this._offscreen && this._offCtx.restore(), this.render(this._ctx));
  }
  dispose() {
    if (window)
      return window.removeEventListener("resize", this._resizeHandler.bind(this)), this.stop(), this.removeAll(), this;
  }
  recorder(t, e = "webm", r = 15e6) {
    let n = this._canvas.captureStream();
    const i = new MediaRecorder(n, { mimeType: `video/${e}`, bitsPerSecond: r });
    return i.ondataavailable = function(a) {
      let o = URL.createObjectURL(new Blob([a.data], { type: `video/${e}` }));
      if (typeof t == "function")
        t(o);
      else if (t) {
        let u = document.createElement("a");
        u.href = o, u.download = `canvas_video.${e}`, u.click(), u.remove();
      }
    }, i;
  }
}, ct = class extends ve {
  constructor(t) {
    if (super(), this._style = {
      fillStyle: "#f03",
      strokeStyle: "#fff",
      lineWidth: 1,
      lineJoin: "bevel",
      lineCap: "butt",
      globalAlpha: 1
    }, !t)
      return this;
    const e = (r) => {
      this._ctx = r, this._ctx.fillStyle = this._style.fillStyle, this._ctx.strokeStyle = this._style.strokeStyle, this._ctx.lineJoin = "bevel", this._ctx.font = this._font.value, this._ready = !0;
    };
    t instanceof CanvasRenderingContext2D ? e(t) : (this._space = t, this._space.add({ start: () => {
      e(this._space.ctx);
    } }));
  }
  get space() {
    return this._space;
  }
  get ctx() {
    return this._ctx;
  }
  useOffscreen(t = !0, e = !1) {
    return e && this._space.clearOffscreen(typeof e == "string" ? e : null), this._ctx = this._space.hasOffscreen && t ? this._space.offscreenCtx : this._space.ctx, this;
  }
  renderOffscreen(t = [0, 0]) {
    this._space.hasOffscreen && this._space.ctx.drawImage(
      this._space.offscreenCanvas,
      t[0],
      t[1],
      this._space.width,
      this._space.height
    );
  }
  alpha(t) {
    return this._ctx.globalAlpha = t, this._style.globalAlpha = t, this;
  }
  fill(t) {
    return typeof t == "boolean" ? this.filled = t : (this.filled = !0, this._style.fillStyle = t, this._ctx.fillStyle = t), this;
  }
  stroke(t, e, r, n) {
    return typeof t == "boolean" ? this.stroked = t : (this.stroked = !0, this._style.strokeStyle = t, this._ctx.strokeStyle = t, e && (this._ctx.lineWidth = e, this._style.lineWidth = e), r && (this._ctx.lineJoin = r, this._style.lineJoin = r), n && (this._ctx.lineCap = n, this._style.lineCap = n)), this;
  }
  applyFillStroke(t = !0, e = !0, r = 1) {
    return t && (typeof t == "string" && this.fill(t), this._ctx.fill()), e && (typeof e == "string" && this.stroke(e, r), this._ctx.stroke()), this;
  }
  gradient(t) {
    let e = [];
    t.length < 2 && t.push([0.99, "#000"], [1, "#000"]);
    for (let r = 0, n = t.length; r < n; r++) {
      let i = typeof t[r] == "string" ? r * (1 / (t.length - 1)) : t[r][0], a = typeof t[r] == "string" ? t[r] : t[r][1];
      e.push([i, a]);
    }
    return (r, n) => {
      let i = n ? this._ctx.createRadialGradient(r[0][0], r[0][1], Math.abs(r[1][0]), n[0][0], n[0][1], Math.abs(n[1][0])) : this._ctx.createLinearGradient(r[0][0], r[0][1], r[1][0], r[1][1]);
      for (let a = 0, o = e.length; a < o; a++)
        i.addColorStop(e[a][0], e[a][1]);
      return i;
    };
  }
  composite(t = "source-over") {
    return this._ctx.globalCompositeOperation = t, this;
  }
  clip() {
    return this._ctx.clip(), this;
  }
  dash(t = !0, e = 0) {
    return t ? (t === !0 && (t = [5, 5]), this._ctx.setLineDash([t[0], t[1]]), this._ctx.lineDashOffset = e) : (this._ctx.setLineDash([]), this._ctx.lineDashOffset = 0), this;
  }
  font(t, e, r, n, i) {
    return typeof t == "number" ? (this._font.size = t, i && (this._font.face = i), e && (this._font.weight = e), r && (this._font.style = r), n && (this._font.lineHeight = n)) : this._font = t, this._ctx.font = this._font.value, this._estimateTextWidth && this.fontWidthEstimate(!0), this;
  }
  fontWidthEstimate(t = !0) {
    return this._estimateTextWidth = t ? sr.textWidthEstimator((e) => this._ctx.measureText(e).width) : void 0, this;
  }
  getTextWidth(t) {
    return this._estimateTextWidth ? this._estimateTextWidth(t) : this._ctx.measureText(t + " .").width;
  }
  _textTruncate(t, e, r = "") {
    return sr.truncate(this.getTextWidth.bind(this), t, e, r);
  }
  _textAlign(t, e, r, n) {
    let i = m.iterToArray(t);
    if (m.arrayCheck(i)) {
      n || (n = N.center(i));
      var a = i[0][0];
      this._ctx.textAlign == "end" || this._ctx.textAlign == "right" ? a = i[1][0] : (this._ctx.textAlign == "center" || this._ctx.textAlign == "middle") && (a = n[0]);
      var o = n[1];
      return e == "top" || e == "start" ? o = i[0][1] : (e == "end" || e == "bottom") && (o = i[1][1]), r ? new h(a + r[0], o + r[1]) : new h(a, o);
    }
  }
  reset() {
    for (let t in this._style)
      this._style.hasOwnProperty(t) && (this._ctx[t] = this._style[t]);
    return this._font = new ne(), this._ctx.font = this._font.value, this;
  }
  _paint() {
    this._filled && this._ctx.fill(), this._stroked && this._ctx.stroke();
  }
  static point(t, e, r = 5, n = "square") {
    if (e) {
      if (!ct[n])
        throw new Error(`${n} is not a static function of CanvasForm`);
      ct[n](t, e, r);
    }
  }
  point(t, e = 5, r = "square") {
    return ct.point(this._ctx, t, e, r), this._paint(), this;
  }
  static circle(t, e, r = 10) {
    e && (t.beginPath(), t.arc(e[0], e[1], r, 0, Q.two_pi, !1), t.closePath());
  }
  circle(t) {
    let e = m.iterToArray(t);
    return ct.circle(this._ctx, e[0], e[1][0]), this._paint(), this;
  }
  static ellipse(t, e, r, n = 0, i = 0, a = Q.two_pi, o = !1) {
    !e || !r || (t.beginPath(), t.ellipse(e[0], e[1], r[0], r[1], n, i, a, o));
  }
  ellipse(t, e, r = 0, n = 0, i = Q.two_pi, a = !1) {
    return ct.ellipse(this._ctx, t, e, r, n, i, a), this._paint(), this;
  }
  static arc(t, e, r, n, i, a) {
    e && (t.beginPath(), t.arc(e[0], e[1], r, n, i, a));
  }
  arc(t, e, r, n, i) {
    return ct.arc(this._ctx, t, e, r, n, i), this._paint(), this;
  }
  static square(t, e, r) {
    if (!e)
      return;
    let n = e[0] - r, i = e[1] - r, a = e[0] + r, o = e[1] + r;
    t.beginPath(), t.moveTo(n, i), t.lineTo(n, o), t.lineTo(a, o), t.lineTo(a, i), t.closePath();
  }
  square(t, e) {
    return ct.square(this._ctx, t, e), this._paint(), this;
  }
  static line(t, e) {
    if (!m.arrayCheck(e))
      return;
    let r = 0;
    t.beginPath();
    for (let n of e)
      n && (r++ > 0 ? t.lineTo(n[0], n[1]) : t.moveTo(n[0], n[1]));
  }
  line(t) {
    return ct.line(this._ctx, t), this._paint(), this;
  }
  static polygon(t, e) {
    m.arrayCheck(e) && (ct.line(t, e), t.closePath());
  }
  polygon(t) {
    return ct.polygon(this._ctx, t), this._paint(), this;
  }
  static rect(t, e) {
    let r = m.iterToArray(e);
    m.arrayCheck(r) && (t.beginPath(), t.moveTo(r[0][0], r[0][1]), t.lineTo(r[0][0], r[1][1]), t.lineTo(r[1][0], r[1][1]), t.lineTo(r[1][0], r[0][1]), t.closePath());
  }
  rect(t) {
    return ct.rect(this._ctx, t), this._paint(), this;
  }
  static image(t, e, r, n) {
    let i = m.iterToArray(e), a;
    if (typeof i[0] == "number")
      a = i;
    else if (n) {
      let o = m.iterToArray(n);
      a = [
        o[0][0],
        o[0][1],
        o[1][0] - o[0][0],
        o[1][1] - o[0][1],
        i[0][0],
        i[0][1],
        i[1][0] - i[0][0],
        i[1][1] - i[0][1]
      ];
    } else
      a = [i[0][0], i[0][1], i[1][0] - i[0][0], i[1][1] - i[0][1]];
    r instanceof At ? r.loaded && t.drawImage(r.image, ...a) : t.drawImage(r, ...a);
  }
  image(t, e, r) {
    return e instanceof At ? e.loaded && ct.image(this._ctx, t, e.image, r) : ct.image(this._ctx, t, e, r), this;
  }
  static imageData(t, e, r) {
    let n = m.iterToArray(e);
    typeof n[0] == "number" ? t.putImageData(r, n[0], n[1]) : t.putImageData(r, n[0][0], n[0][1], n[0][0], n[0][1], n[1][0], n[1][1]);
  }
  imageData(t, e) {
    return ct.imageData(this._ctx, t, e), this;
  }
  static text(t, e, r, n) {
    e && t.fillText(r, e[0], e[1], n);
  }
  text(t, e, r) {
    return ct.text(this._ctx, t, e, r), this;
  }
  textBox(t, e, r = "middle", n = "", i = !0) {
    i && (this._ctx.textBaseline = r);
    let a = N.size(t), o = this._textTruncate(e, a[0], n);
    return this.text(this._textAlign(t, r), o[0]), this;
  }
  paragraphBox(t, e, r = 1.2, n = "top", i = !0) {
    let a = m.iterToArray(t), o = N.size(a);
    this._ctx.textBaseline = "top";
    let u = this._font.size * r, c = (A, S = [], D = 0) => {
      if (!A || i && D * u > o[1] - u * 2)
        return S;
      if (D > 1e4)
        throw new Error("max recursion reached (10000)");
      let M = this._textTruncate(A, o[0], ""), tt = M[0].indexOf(`
`);
      if (tt >= 0)
        return S.push(M[0].substr(0, tt)), c(A.substr(tt + 1), S, D + 1);
      let at = M[0].lastIndexOf(" ") + 1;
      (at <= 0 || M[1] === A.length) && (at = void 0);
      let I = M[0].substr(0, at);
      return S.push(I), M[1] <= 0 || M[1] === A.length ? S : c(A.substr(at || M[1]), S, D + 1);
    }, _ = c(e), y = _.length * u, b = a;
    if (n == "middle" || n == "center") {
      let A = (o[1] - y) / 2;
      i && (A = Math.max(0, A)), b = new g(a[0].$add(0, A), a[1].$subtract(0, A));
    } else
      n == "bottom" ? b = new g(a[0].$add(0, o[1] - y), a[1]) : b = new g(a[0], a[0].$add(o[0], y));
    let x = N.center(b);
    for (let A = 0, S = _.length; A < S; A++)
      this.text(this._textAlign(b, "top", [0, A * u], x), _[A]);
    return this;
  }
  alignText(t = "left", e = "alphabetic") {
    return e == "center" && (e = "middle"), e == "baseline" && (e = "alphabetic"), this._ctx.textAlign = t, this._ctx.textBaseline = e, this;
  }
  log(t) {
    let e = this._ctx.measureText(t).width + 20;
    return this.stroke(!1).fill("rgba(0,0,0,.4)").rect([[0, 0], [e, 20]]), this.fill("#fff").text([10, 14], t), this;
  }
}, C = class extends h {
  constructor(...t) {
    super(...t), this._mode = "rgb", this._isNorm = !1;
  }
  static from(...t) {
    let e = [1, 1, 1, 1], r = m.getArgs(t);
    for (let n = 0, i = e.length; n < i; n++)
      n < r.length && (e[n] = r[n]);
    return new C(e);
  }
  static fromHex(t) {
    if (t[0] == "#" && (t = t.substr(1)), t.length <= 3) {
      let n = (i) => t[i] || "F";
      t = `${n(0)}${n(0)}${n(1)}${n(1)}${n(2)}${n(2)}`;
    }
    let e = 1;
    t.length === 8 && (e = t.substr(6) && 255 / 255, t = t.substring(0, 6));
    let r = parseInt(t, 16);
    return new C(r >> 16, r >> 8 & 255, r & 255, e);
  }
  static rgb(...t) {
    return C.from(...t).toMode("rgb");
  }
  static hsl(...t) {
    return C.from(...t).toMode("hsl");
  }
  static hsb(...t) {
    return C.from(...t).toMode("hsb");
  }
  static lab(...t) {
    return C.from(...t).toMode("lab");
  }
  static lch(...t) {
    return C.from(...t).toMode("lch");
  }
  static luv(...t) {
    return C.from(...t).toMode("luv");
  }
  static xyz(...t) {
    return C.from(...t).toMode("xyz");
  }
  static maxValues(t) {
    return C.ranges[t].zipSlice(1).$take([0, 1, 2]);
  }
  get hex() {
    return this.toString("hex");
  }
  get rgb() {
    return this.toString("rgb");
  }
  get rgba() {
    return this.toString("rgba");
  }
  clone() {
    let t = new C(this);
    return t.toMode(this._mode), t;
  }
  toMode(t, e = !1) {
    if (e) {
      let r = this._mode.toUpperCase() + "to" + t.toUpperCase();
      if (C[r])
        this.to(C[r](this, this._isNorm, this._isNorm));
      else
        throw new Error("Cannot convert color with " + r);
    }
    return this._mode = t, this;
  }
  get mode() {
    return this._mode;
  }
  get r() {
    return this[0];
  }
  set r(t) {
    this[0] = t;
  }
  get g() {
    return this[1];
  }
  set g(t) {
    this[1] = t;
  }
  get b() {
    return this[2];
  }
  set b(t) {
    this[2] = t;
  }
  get h() {
    return this._mode == "lch" ? this[2] : this[0];
  }
  set h(t) {
    let e = this._mode == "lch" ? 2 : 0;
    this[e] = t;
  }
  get s() {
    return this[1];
  }
  set s(t) {
    this[1] = t;
  }
  get l() {
    return this._mode == "hsl" ? this[2] : this[0];
  }
  set l(t) {
    let e = this._mode == "hsl" ? 2 : 0;
    this[e] = t;
  }
  get a() {
    return this[1];
  }
  set a(t) {
    this[1] = t;
  }
  get c() {
    return this[1];
  }
  set c(t) {
    this[1] = t;
  }
  get u() {
    return this[1];
  }
  set u(t) {
    this[1] = t;
  }
  get v() {
    return this[2];
  }
  set v(t) {
    this[2] = t;
  }
  set alpha(t) {
    this.length > 3 && (this[3] = t);
  }
  get alpha() {
    return this.length > 3 ? this[3] : 1;
  }
  get normalized() {
    return this._isNorm;
  }
  set normalized(t) {
    this._isNorm = t;
  }
  normalize(t = !0) {
    if (this._isNorm == t)
      return this;
    let e = C.ranges[this._mode];
    for (let r = 0; r < 3; r++)
      this[r] = t ? dt.mapToRange(this[r], e[r][0], e[r][1], 0, 1) : dt.mapToRange(this[r], 0, 1, e[r][0], e[r][1]);
    return this._isNorm = t, this;
  }
  $normalize(t = !0) {
    return this.clone().normalize(t);
  }
  toString(t = "mode") {
    if (t == "hex") {
      let e = (r) => {
        let n = Math.floor(r).toString(16);
        return n.length < 2 ? "0" + n : n;
      };
      return `#${e(this[0])}${e(this[1])}${e(this[2])}`;
    } else
      return t == "rgba" ? `rgba(${Math.floor(this[0])},${Math.floor(this[1])},${Math.floor(this[2])},${this.alpha})` : t == "rgb" ? `rgb(${Math.floor(this[0])},${Math.floor(this[1])},${Math.floor(this[2])})` : `${this._mode}(${this[0]},${this[1]},${this[2]},${this.alpha})`;
  }
  static RGBtoHSL(t, e = !1, r = !1) {
    let [n, i, a] = e ? t : t.$normalize(), o = Math.max(n, i, a), u = Math.min(n, i, a), c = (o + u) / 2, _ = c, y = c;
    if (o == u)
      c = 0, _ = 0;
    else {
      let b = o - u;
      _ = y > 0.5 ? b / (2 - o - u) : b / (o + u), c = 0, o === n ? c = (i - a) / b + (i < a ? 6 : 0) : o === i ? c = (a - n) / b + 2 : o === a && (c = (n - i) / b + 4);
    }
    return C.hsl(r ? c / 60 : c * 60, _, y, t.alpha);
  }
  static HSLtoRGB(t, e = !1, r = !1) {
    let [n, i, a] = t;
    if (e || (n = n / 360), i == 0)
      return C.rgb(a * 255, a * 255, a * 255, t.alpha);
    let o = a <= 0.5 ? a * (1 + i) : a + i - a * i, u = 2 * a - o, c = (y) => (y = y < 0 ? y + 1 : y > 1 ? y - 1 : y, y * 6 < 1 ? u + (o - u) * y * 6 : y * 2 < 1 ? o : y * 3 < 2 ? u + (o - u) * (2 / 3 - y) * 6 : u), _ = r ? 1 : 255;
    return C.rgb(
      _ * c(n + 1 / 3),
      _ * c(n),
      _ * c(n - 1 / 3),
      t.alpha
    );
  }
  static RGBtoHSB(t, e = !1, r = !1) {
    let [n, i, a] = e ? t : t.$normalize(), o = Math.max(n, i, a), u = Math.min(n, i, a), c = o - u, _ = 0, y = o === 0 ? 0 : c / o, b = o;
    return o != u && (o === n ? _ = (i - a) / c + (i < a ? 6 : 0) : o === i ? _ = (a - n) / c + 2 : o === a && (_ = (n - i) / c + 4)), C.hsb(r ? _ / 60 : _ * 60, y, b, t.alpha);
  }
  static HSBtoRGB(t, e = !1, r = !1) {
    let [n, i, a] = t;
    e || (n = n / 360);
    let o = Math.floor(n * 6), u = n * 6 - o, c = a * (1 - i), _ = a * (1 - u * i), y = a * (1 - (1 - u) * i), x = [
      [a, y, c],
      [_, a, c],
      [c, a, y],
      [c, _, a],
      [y, c, a],
      [a, c, _]
    ][o % 6], A = r ? 1 : 255;
    return C.rgb(
      A * x[0],
      A * x[1],
      A * x[2],
      t.alpha
    );
  }
  static RGBtoLAB(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t;
    return C.XYZtoLAB(C.RGBtoXYZ(n), !1, r);
  }
  static LABtoRGB(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t;
    return C.XYZtoRGB(C.LABtoXYZ(n), !1, r);
  }
  static RGBtoLCH(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t;
    return C.LABtoLCH(C.RGBtoLAB(n), !1, r);
  }
  static LCHtoRGB(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t;
    return C.LABtoRGB(C.LCHtoLAB(n), !1, r);
  }
  static RGBtoLUV(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t;
    return C.XYZtoLUV(C.RGBtoXYZ(n), !1, r);
  }
  static LUVtoRGB(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t;
    return C.XYZtoRGB(C.LUVtoXYZ(n), !1, r);
  }
  static RGBtoXYZ(t, e = !1, r = !1) {
    let n = e ? t.clone() : t.$normalize();
    for (let a = 0; a < 3; a++)
      n[a] = n[a] > 0.04045 ? Math.pow((n[a] + 0.055) / 1.055, 2.4) : n[a] / 12.92, r || (n[a] = n[a] * 100);
    let i = C.xyz(
      n[0] * 0.4124564 + n[1] * 0.3575761 + n[2] * 0.1804375,
      n[0] * 0.2126729 + n[1] * 0.7151522 + n[2] * 0.072175,
      n[0] * 0.0193339 + n[1] * 0.119192 + n[2] * 0.9503041,
      t.alpha
    );
    return r ? i.normalize() : i;
  }
  static XYZtoRGB(t, e = !1, r = !1) {
    let [n, i, a] = e ? t : t.$normalize(), o = [
      n * 3.2406254773200533 + i * -1.5372079722103187 + a * -0.4986285986982479,
      n * -0.9689307147293197 + i * 1.8757560608852415 + a * 0.041517523842953964,
      n * 0.055710120445510616 + i * -0.2040210505984867 + a * 1.0569959422543882
    ];
    for (let c = 0; c < 3; c++)
      o[c] = o[c] > 31308e-7 ? 1.055 * Math.pow(o[c], 1 / 2.4) - 0.055 : 12.92 * o[c], o[c] = Math.max(0, Math.min(1, o[c])), r || (o[c] = Math.round(o[c] * 255));
    let u = C.rgb(o[0], o[1], o[2], t.alpha);
    return r ? u.normalize() : u;
  }
  static XYZtoLAB(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t.clone();
    const i = 0.00885645167, a = 903.296296296;
    n.divide(C.D65);
    let o = (_) => _ > i ? Math.pow(_, 1 / 3) : (a * _ + 16) / 116, u = o(n[1]), c = C.lab(
      116 * u - 16,
      500 * (o(n[0]) - u),
      200 * (u - o(n[2])),
      t.alpha
    );
    return r ? c.normalize() : c;
  }
  static LABtoXYZ(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t, i = (n[0] + 16) / 116, a = n[1] / 500 + i, o = i - n[2] / 200;
    const u = 0.00885645167, c = 903.296296296;
    let _ = C.D65;
    const y = Math.pow(a, 3), b = Math.pow(o, 3);
    let x = C.xyz(
      _[0] * (y > u ? y : (116 * a - 16) / c),
      _[1] * (n[0] > c * u ? Math.pow((n[0] + 16) / 116, 3) : n[0] / c),
      _[2] * (b > u ? b : (116 * o - 16) / c),
      t.alpha
    );
    return r ? x.normalize() : x;
  }
  static XYZtoLUV(t, e = !1, r = !1) {
    let [n, i, a] = e ? t.$normalize(!1) : t, o = 4 * n / (n + 15 * i + 3 * a), u = 9 * i / (n + 15 * i + 3 * a);
    i = i / 100, i = i > 8856e-6 ? Math.pow(i, 1 / 3) : 7.787 * i + 16 / 116;
    let c = 4 * C.D65[0] / (C.D65[0] + 15 * C.D65[1] + 3 * C.D65[2]), _ = 9 * C.D65[1] / (C.D65[0] + 15 * C.D65[1] + 3 * C.D65[2]), y = 116 * i - 16;
    return C.luv(
      y,
      13 * y * (o - c),
      13 * y * (u - _),
      t.alpha
    );
  }
  static LUVtoXYZ(t, e = !1, r = !1) {
    let [n, i, a] = e ? t.$normalize(!1) : t, o = (n + 16) / 116, u = o * o * o;
    o = u > 8856e-6 ? u : (o - 16 / 116) / 7.787;
    let c = 4 * C.D65[0] / (C.D65[0] + 15 * C.D65[1] + 3 * C.D65[2]), _ = 9 * C.D65[1] / (C.D65[0] + 15 * C.D65[1] + 3 * C.D65[2]);
    i = i / (13 * n) + c, a = a / (13 * n) + _, o = o * 100;
    let y = -1 * (9 * o * i) / ((i - 4) * a - i * a), b = (9 * o - 15 * a * o - a * y) / (3 * a);
    return C.xyz(y, o, b, t.alpha);
  }
  static LABtoLCH(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t, i = $.toDegree($.boundRadian(Math.atan2(n[2], n[1])));
    return C.lch(
      n[0],
      Math.sqrt(n[1] * n[1] + n[2] * n[2]),
      i,
      t.alpha
    );
  }
  static LCHtoLAB(t, e = !1, r = !1) {
    let n = e ? t.$normalize(!1) : t, i = $.toRadian(n[2]);
    return C.lab(
      n[0],
      Math.cos(i) * n[1],
      Math.sin(i) * n[1],
      t.alpha
    );
  }
}, or = C;
or.D65 = new h(95.047, 100, 108.883, 1);
or.ranges = {
  rgb: new g(new h(0, 255), new h(0, 255), new h(0, 255)),
  hsl: new g(new h(0, 360), new h(0, 1), new h(0, 1)),
  hsb: new g(new h(0, 360), new h(0, 1), new h(0, 1)),
  lab: new g(new h(0, 100), new h(-128, 127), new h(-128, 127)),
  lch: new g(new h(0, 100), new h(0, 100), new h(0, 360)),
  luv: new g(new h(0, 100), new h(-134, 220), new h(-140, 122)),
  xyz: new g(new h(0, 100), new h(0, 100), new h(0, 100))
};
var mt = class extends ar {
  constructor(t, e) {
    super(), this.id = "domspace", this._autoResize = !0, this._bgcolor = "#e1e9f0", this._css = {};
    var r = null;
    this.id = "pts", t instanceof Element ? (r = t, this.id = "pts_existing_space") : (r = document.querySelector(t), this.id = t.substr(1)), r ? (this._canvas = r, this._container = r.parentElement) : (this._container = mt.createElement("div", "pts_container"), this._canvas = mt.createElement("div", "pts_element"), this._container.appendChild(this._canvas), document.body.appendChild(this._container)), setTimeout(this._ready.bind(this, e), 50);
  }
  static createElement(t = "div", e, r) {
    let n = document.createElement(t);
    return e && n.setAttribute("id", e), r && r.appendChild && r.appendChild(n), n;
  }
  _ready(t) {
    if (!this._container)
      throw new Error(`Cannot initiate #${this.id} element`);
    this._isReady = !0, this._resizeHandler(null), this.clear(this._bgcolor), this._canvas.dispatchEvent(new Event("ready"));
    for (let e in this.players)
      this.players.hasOwnProperty(e) && this.players[e].start && this.players[e].start(this.bound.clone(), this);
    this._pointer = this.center, this.refresh(!1), t && t(this.bound, this._canvas);
  }
  setup(t) {
    return t.bgcolor && (this._bgcolor = t.bgcolor), this.autoResize = t.resize != null ? t.resize : !1, this;
  }
  getForm() {
    return null;
  }
  set autoResize(t) {
    this._autoResize = t, t ? window.addEventListener("resize", this._resizeHandler.bind(this)) : (delete this._css.width, delete this._css.height, window.removeEventListener("resize", this._resizeHandler.bind(this)));
  }
  get autoResize() {
    return this._autoResize;
  }
  resize(t, e) {
    this.bound = t, this.styles({ width: `${t.width}px`, height: `${t.height}px` }, !0);
    for (let r in this.players)
      if (this.players.hasOwnProperty(r)) {
        let n = this.players[r];
        n.resize && n.resize(this.bound, e);
      }
    return this;
  }
  _resizeHandler(t) {
    let e = gt.fromBoundingRect(this._container.getBoundingClientRect());
    this._autoResize ? this.styles({ width: "100%", height: "100%" }, !0) : this.styles({ width: `${e.width}px`, height: `${e.height}px` }, !0), this.resize(e, t);
  }
  get element() {
    return this._canvas;
  }
  get parent() {
    return this._container;
  }
  get ready() {
    return this._isReady;
  }
  clear(t) {
    return t && (this.background = t), this._canvas.innerHTML = "", this;
  }
  set background(t) {
    this._bgcolor = t, this._container.style.backgroundColor = this._bgcolor;
  }
  get background() {
    return this._bgcolor;
  }
  style(t, e, r = !1) {
    return this._css[t] = e, r && (this._canvas.style[t] = e), this;
  }
  styles(t, e = !1) {
    for (let r in t)
      t.hasOwnProperty(r) && this.style(r, t[r], e);
    return this;
  }
  static setAttr(t, e) {
    for (let r in e)
      e.hasOwnProperty(r) && t.setAttribute(r, e[r]);
    return t;
  }
  static getInlineStyles(t) {
    let e = "";
    for (let r in t)
      t.hasOwnProperty(r) && t[r] && (e += `${r}: ${t[r]}; `);
    return e;
  }
  dispose() {
    return window.removeEventListener("resize", this._resizeHandler.bind(this)), this.stop(), this.removeAll(), this;
  }
}, bt = class extends mt {
  getForm() {
    return new ee(this);
  }
  static htmlElement(t, e, r, n = !0) {
    if (!t || !t.appendChild)
      throw new Error("parent is not a valid DOM element");
    let i = document.querySelector(`#${r}`);
    return i || (i = document.createElement(e), i.setAttribute("id", r), n && i.setAttribute("class", r.substring(0, r.indexOf("-"))), t.appendChild(i)), i;
  }
  remove(t) {
    return this._container.querySelectorAll("." + ee.scopeID(t)).forEach((r) => {
      r.parentNode.removeChild(r);
    }), super.remove(t);
  }
  removeAll() {
    return this._container.innerHTML = "", super.removeAll();
  }
}, rt = class extends ve {
  constructor(t) {
    super(), this._style = {
      filled: !0,
      stroked: !0,
      background: "#f03",
      "border-color": "#fff",
      color: "#000",
      "border-width": "1px",
      "border-radius": "0",
      "border-style": "solid",
      opacity: 1,
      position: "absolute",
      top: 0,
      left: 0,
      width: 0,
      height: 0
    }, this._ctx = {
      group: null,
      groupID: "pts",
      groupCount: 0,
      currentID: "pts0",
      currentClass: "",
      style: {}
    }, this._ready = !1, this._space = t, this._space.add({ start: () => {
      this._ctx.group = this._space.element, this._ctx.groupID = "pts_dom_" + rt.groupID++, this._ctx.style = Object.assign({}, this._style), this._ready = !0;
    } });
  }
  get space() {
    return this._space;
  }
  styleTo(t, e, r = "") {
    if (this._ctx.style[t] === void 0)
      throw new Error(`${t} style property doesn't exist`);
    this._ctx.style[t] = `${e}${r}`;
  }
  alpha(t) {
    return this.styleTo("opacity", t), this;
  }
  fill(t) {
    return typeof t == "boolean" ? (this.styleTo("filled", t), t || this.styleTo("background", "transparent")) : (this.styleTo("filled", !0), this.styleTo("background", t)), this;
  }
  stroke(t, e, r, n) {
    return typeof t == "boolean" ? (this.styleTo("stroked", t), t || this.styleTo("border-width", 0)) : (this.styleTo("stroked", !0), this.styleTo("border-color", t), this.styleTo("border-width", (e || 1) + "px")), this;
  }
  fillText(t) {
    return this.styleTo("color", t), this;
  }
  cls(t) {
    return typeof t == "boolean" ? this._ctx.currentClass = "" : this._ctx.currentClass = t, this;
  }
  font(t, e, r, n, i) {
    return typeof t == "number" ? (this._font.size = t, i && (this._font.face = i), e && (this._font.weight = e), r && (this._font.style = r), n && (this._font.lineHeight = n)) : this._font = t, this._ctx.style.font = this._font.value, this;
  }
  reset() {
    return this._ctx.style = Object.assign({}, this._style), this._font = new ne(10, "sans-serif"), this._ctx.style.font = this._font.value, this;
  }
  updateScope(t, e) {
    return this._ctx.group = e, this._ctx.groupID = t, this._ctx.groupCount = 0, this.nextID(), this._ctx;
  }
  scope(t) {
    if (!t || t.animateID == null)
      throw new Error("item not defined or not yet added to Space");
    return this.updateScope(rt.scopeID(t), this.space.element);
  }
  nextID() {
    return this._ctx.groupCount++, this._ctx.currentID = `${this._ctx.groupID}-${this._ctx.groupCount}`, this._ctx.currentID;
  }
  static getID(t) {
    return t.currentID || `p-${rt.domID++}`;
  }
  static scopeID(t) {
    return `item-${t.animateID}`;
  }
  static style(t, e) {
    let r = [];
    e.filled || r.push("background: none"), e.stroked || r.push("border: none");
    for (let n in e)
      if (e.hasOwnProperty(n) && n != "filled" && n != "stroked") {
        let i = e[n];
        if (i) {
          if (!e.filled && n.indexOf("background") === 0)
            continue;
          if (!e.stroked && n.indexOf("border-width") === 0)
            continue;
          r.push(`${n}: ${i}`);
        }
      }
    return bt.setAttr(t, { style: r.join(";") });
  }
  static rectStyle(t, e, r) {
    return t.style.left = e[0] + "px", t.style.top = e[1] + "px", t.style.width = r[0] + "px", t.style.height = r[1] + "px", t;
  }
  static textStyle(t, e) {
    return t.style.left = e[0] + "px", t.style.top = e[1] + "px", t;
  }
  static point(t, e, r = 5, n = "square") {
    return n === "circle" ? rt.circle(t, e, r) : rt.square(t, e, r);
  }
  point(t, e = 5, r = "square") {
    return this.nextID(), r == "circle" && this.styleTo("border-radius", "100%"), rt.point(this._ctx, t, e, r), this;
  }
  static circle(t, e, r = 10) {
    let n = bt.htmlElement(t.group, "div", rt.getID(t));
    return bt.setAttr(n, { class: `pts-form pts-circle ${t.currentClass}` }), rt.rectStyle(t, new h(e).$subtract(r), new h(r * 2, r * 2)), rt.style(n, t.style), n;
  }
  circle(t) {
    return this.nextID(), this.styleTo("border-radius", "100%"), rt.circle(this._ctx, t[0], t[1][0]), this;
  }
  static square(t, e, r) {
    let n = bt.htmlElement(t.group, "div", rt.getID(t));
    return bt.setAttr(n, { class: `pts-form pts-square ${t.currentClass}` }), rt.rectStyle(t, new h(e).$subtract(r), new h(r * 2, r * 2)), rt.style(n, t.style), n;
  }
  square(t, e) {
    return this.nextID(), rt.square(this._ctx, t, e), this;
  }
  static rect(t, e) {
    let r = m.iterToArray(e);
    if (!m.arrayCheck(r))
      return;
    let n = bt.htmlElement(t.group, "div", rt.getID(t));
    return bt.setAttr(n, { class: `pts-form pts-rect ${t.currentClass}` }), rt.rectStyle(t, r[0], r[1]), rt.style(n, t.style), n;
  }
  rect(t) {
    return this.nextID(), this.styleTo("border-radius", "0"), rt.rect(this._ctx, t), this;
  }
  static text(t, e, r) {
    let n = bt.htmlElement(t.group, "div", rt.getID(t));
    return bt.setAttr(n, { class: `pts-form pts-text ${t.currentClass}` }), n.textContent = r, rt.textStyle(t, e), rt.style(n, t.style), n;
  }
  text(t, e) {
    return this.nextID(), rt.text(this._ctx, t, e), this;
  }
  log(t) {
    return this.fill("#000").stroke("#fff", 0.5).text([10, 14], t), this;
  }
  arc(t, e, r, n, i) {
    return m.warn("arc is not implemented in HTMLForm"), this;
  }
  line(t) {
    return m.warn("line is not implemented in HTMLForm"), this;
  }
  polygon(t) {
    return m.warn("polygon is not implemented in HTMLForm"), this;
  }
}, ee = rt;
ee.groupID = 0;
ee.domID = 0;
var xt = class extends mt {
  constructor(t, e) {
    if (super(t, e), this._bgcolor = "#999", this._canvas.nodeName.toLowerCase() != "svg") {
      let r = xt.svgElement(this._canvas, "svg", `${this.id}_svg`);
      this._container = this._canvas, this._canvas = r;
    }
  }
  getForm() {
    return new re(this);
  }
  get element() {
    return this._canvas;
  }
  resize(t, e) {
    return super.resize(t, e), xt.setAttr(this.element, {
      viewBox: `0 0 ${this.bound.width} ${this.bound.height}`,
      width: `${this.bound.width}`,
      height: `${this.bound.height}`,
      xmlns: "http://www.w3.org/2000/svg",
      version: "1.1"
    }), this;
  }
  static svgElement(t, e, r) {
    if (!t || !t.appendChild)
      throw new Error("parent is not a valid DOM element");
    let n = document.querySelector(`#${r}`);
    return n || (n = document.createElementNS("http://www.w3.org/2000/svg", e), n.setAttribute("id", r), t.appendChild(n)), n;
  }
  remove(t) {
    return this._container.querySelectorAll("." + re.scopeID(t)).forEach((r) => {
      r.parentNode.removeChild(r);
    }), super.remove(t);
  }
  removeAll() {
    return this._container.innerHTML = "", super.removeAll();
  }
}, F = class extends ve {
  constructor(t) {
    super(), this._style = {
      filled: !0,
      stroked: !0,
      fill: "#f03",
      stroke: "#fff",
      "stroke-width": 1,
      "stroke-linejoin": "bevel",
      "stroke-linecap": "sqaure",
      opacity: 1
    }, this._ctx = {
      group: null,
      groupID: "pts",
      groupCount: 0,
      currentID: "pts0",
      currentClass: "",
      style: {}
    }, this._ready = !1, this._space = t, this._space.add({ start: () => {
      this._ctx.group = this._space.element, this._ctx.groupID = "pts_svg_" + F.groupID++, this._ctx.style = Object.assign({}, this._style), this._ready = !0;
    } });
  }
  get space() {
    return this._space;
  }
  styleTo(t, e) {
    if (this._ctx.style[t] === void 0)
      throw new Error(`${t} style property doesn't exist`);
    this._ctx.style[t] = e;
  }
  alpha(t) {
    return this.styleTo("opacity", t), this;
  }
  fill(t) {
    return typeof t == "boolean" ? this.styleTo("filled", t) : (this.styleTo("filled", !0), this.styleTo("fill", t)), this;
  }
  stroke(t, e, r, n) {
    return typeof t == "boolean" ? this.styleTo("stroked", t) : (this.styleTo("stroked", !0), this.styleTo("stroke", t), e && this.styleTo("stroke-width", e), r && this.styleTo("stroke-linejoin", r), n && this.styleTo("stroke-linecap", n)), this;
  }
  cls(t) {
    return typeof t == "boolean" ? this._ctx.currentClass = "" : this._ctx.currentClass = t, this;
  }
  font(t, e, r, n, i) {
    return typeof t == "number" ? (this._font.size = t, i && (this._font.face = i), e && (this._font.weight = e), r && (this._font.style = r), n && (this._font.lineHeight = n)) : this._font = t, this._ctx.style.font = this._font.value, this;
  }
  reset() {
    return this._ctx.style = Object.assign({}, this._style), this._font = new ne(10, "sans-serif"), this._ctx.style.font = this._font.value, this;
  }
  updateScope(t, e) {
    return this._ctx.group = e, this._ctx.groupID = t, this._ctx.groupCount = 0, this.nextID(), this._ctx;
  }
  scope(t) {
    if (!t || t.animateID == null)
      throw new Error("item not defined or not yet added to Space");
    return this.updateScope(F.scopeID(t), this.space.element);
  }
  nextID() {
    return this._ctx.groupCount++, this._ctx.currentID = `${this._ctx.groupID}-${this._ctx.groupCount}`, this._ctx.currentID;
  }
  static getID(t) {
    return t.currentID || `p-${F.domID++}`;
  }
  static scopeID(t) {
    return `item-${t.animateID}`;
  }
  static style(t, e) {
    let r = [];
    e.filled || r.push("fill: none"), e.stroked || r.push("stroke: none");
    for (let n in e)
      if (e.hasOwnProperty(n) && n != "filled" && n != "stroked") {
        let i = e[n];
        if (i) {
          if (!e.filled && n.indexOf("fill") === 0)
            continue;
          if (!e.stroked && n.indexOf("stroke") === 0)
            continue;
          r.push(`${n}: ${i}`);
        }
      }
    return mt.setAttr(t, { style: r.join(";") });
  }
  static point(t, e, r = 5, n = "square") {
    return n === "circle" ? F.circle(t, e, r) : F.square(t, e, r);
  }
  point(t, e = 5, r = "square") {
    return this.nextID(), F.point(this._ctx, t, e, r), this;
  }
  static circle(t, e, r = 10) {
    let n = xt.svgElement(t.group, "circle", F.getID(t));
    return mt.setAttr(n, {
      cx: e[0],
      cy: e[1],
      r,
      class: `pts-svgform pts-circle ${t.currentClass}`
    }), F.style(n, t.style), n;
  }
  circle(t) {
    this.nextID();
    let e = m.iterToArray(t);
    return F.circle(this._ctx, e[0], e[1][0]), this;
  }
  static arc(t, e, r, n, i, a) {
    let o = xt.svgElement(t.group, "path", F.getID(t));
    const u = new h(e).toAngle(n, r, !0), c = new h(e).toAngle(i, r, !0);
    let y = $.boundAngle(i) - $.boundAngle(n) > Q.pi;
    a && (y = !y);
    const b = a ? "0" : "1", x = `M ${u[0]} ${u[1]} A ${r} ${r} 0 ${y ? "1" : "0"} ${b} ${c[0]} ${c[1]}`;
    return mt.setAttr(o, {
      d: x,
      class: `pts-svgform pts-arc ${t.currentClass}`
    }), F.style(o, t.style), o;
  }
  arc(t, e, r, n, i) {
    return this.nextID(), F.arc(this._ctx, t, e, r, n, i), this;
  }
  static square(t, e, r) {
    let n = xt.svgElement(t.group, "rect", F.getID(t));
    return mt.setAttr(n, {
      x: e[0] - r,
      y: e[1] - r,
      width: r * 2,
      height: r * 2,
      class: `pts-svgform pts-square ${t.currentClass}`
    }), F.style(n, t.style), n;
  }
  square(t, e) {
    return this.nextID(), F.square(this._ctx, t, e), this;
  }
  static line(t, e) {
    let r = F.pointsString(e);
    if (r.count < 2)
      return;
    if (r.count > 2)
      return F._poly(t, r.string, !1);
    let n = xt.svgElement(t.group, "line", F.getID(t)), i = m.iterToArray(e);
    return mt.setAttr(n, {
      x1: i[0][0],
      y1: i[0][1],
      x2: i[1][0],
      y2: i[1][1],
      class: `pts-svgform pts-line ${t.currentClass}`
    }), F.style(n, t.style), n;
  }
  line(t) {
    return this.nextID(), F.line(this._ctx, t), this;
  }
  static _poly(t, e, r = !0) {
    let n = xt.svgElement(t.group, r ? "polygon" : "polyline", F.getID(t));
    return mt.setAttr(n, {
      points: e,
      class: `pts-svgform pts-polygon ${t.currentClass}`
    }), F.style(n, t.style), n;
  }
  static pointsString(t) {
    let e = "", r = 0;
    for (let n of t)
      e += `${n[0]},${n[1]} `, r++;
    return { string: e, count: r };
  }
  static polygon(t, e) {
    let r = F.pointsString(e);
    return F._poly(t, r.string, !0);
  }
  polygon(t) {
    return this.nextID(), F.polygon(this._ctx, t), this;
  }
  static rect(t, e) {
    if (!m.arrayCheck(e))
      return;
    let r = xt.svgElement(t.group, "rect", F.getID(t)), n = g.fromArray(e).boundingBox(), i = N.size(n);
    return mt.setAttr(r, {
      x: n[0][0],
      y: n[0][1],
      width: i[0],
      height: i[1],
      class: `pts-svgform pts-rect ${t.currentClass}`
    }), F.style(r, t.style), r;
  }
  rect(t) {
    return this.nextID(), F.rect(this._ctx, t), this;
  }
  static text(t, e, r) {
    let n = xt.svgElement(t.group, "text", F.getID(t));
    return mt.setAttr(n, {
      "pointer-events": "none",
      x: e[0],
      y: e[1],
      dx: 0,
      dy: 0,
      class: `pts-svgform pts-text ${t.currentClass}`
    }), n.textContent = r, F.style(n, t.style), n;
  }
  text(t, e) {
    return this.nextID(), F.text(this._ctx, t, e), this;
  }
  log(t) {
    return this.fill("#000").stroke("#fff", 0.5).text([10, 14], t), this;
  }
}, re = F;
re.groupID = 0;
re.domID = 0;
/*! Pts.js is licensed under Apache License 2.0. Copyright © 2017-current William Ngan and contributors. (https://github.com/williamngan/pts) */
const Rn = ({
  name: t = "pts-react",
  // maps to className of the container div
  background: e = "#9ab",
  resize: r = !0,
  retina: n = !0,
  play: i = !0,
  touch: a = !0,
  style: o = {},
  canvasStyle: u = {},
  onStart: c = void 0,
  onAnimate: _ = () => {
    console.log("animating");
  },
  onResize: y = void 0,
  onAction: b = void 0,
  tempo: x = void 0
}, A) => {
  const S = A && typeof A != "function" ? A : nt.useRef(null), D = nt.useRef(), M = nt.useRef(), tt = nt.useRef();
  vn(() => {
    if (!(!S || !S.current))
      return D.current = new An(S.current).setup({
        bgcolor: e,
        resize: r,
        retina: n
      }), M.current = D.current.getForm(), tt.current = {
        start: (I) => {
          c && D.current && M.current && c(I, D.current, M.current);
        },
        animate: (I, O) => {
          I && O && D.current && M.current && _(D.current, M.current, I, O);
        },
        resize: (I, O) => {
          y && D.current && M.current && y(D.current, M.current, I, O);
        },
        action: (I, O, V, H) => {
          b && D.current && M.current && b(D.current, M.current, I, O, V, H);
        }
      }, D.current.add(tt.current), x && D.current.add(x), () => {
        D.current && D.current.dispose();
      };
  }, [S]), nt.useEffect(() => {
    tt.current && (tt.current.start = (I) => {
      c && D.current && M.current && c(I, D.current, M.current);
    });
  }, [c]), nt.useEffect(() => {
    tt.current && (tt.current.animate = (I, O) => {
      I && O && D.current && M.current && _(D.current, M.current, I, O);
    });
  }, [_]), nt.useEffect(() => {
    tt.current && (tt.current.resize = (I, O) => {
      y && D.current && M.current && y(D.current, M.current, I, O);
    });
  }, [y]), nt.useEffect(() => {
    tt.current && (tt.current.action = (I, O, V, H) => {
      b && D.current && M.current && b(D.current, M.current, I, O, V, H);
    });
  }, [b]), nt.useEffect(() => {
    D.current && D.current.bindMouse(a).bindTouch(a);
  }, [a]);
  const at = () => {
    const I = D.current;
    I && (i ? I.isPlaying ? I.resume() : I.replay() : I.pause(!0));
  };
  return nt.useEffect(() => {
    at();
  }), /* @__PURE__ */ nt.createElement("div", { className: t || "", style: o }, /* @__PURE__ */ nt.createElement(
    "canvas",
    {
      className: t ? t + "-canvas" : "",
      ref: S,
      style: u
    }
  ));
}, kn = nt.forwardRef(
  Rn
);
export {
  kn as PtsCanvas,
  Tn as useArie,
  Mn as useArieCursor,
  $n as useArieDot,
  Dn as useArieScroll,
  vn as useIsomorphicLayoutEffect
};
