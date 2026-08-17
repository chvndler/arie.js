import ne, { useState as S, useEffect as k, useLayoutEffect as oe } from "react";
const H = {
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
}, se = (r = !0, n = null, d = { x: 0, y: 0 }) => {
  const [i, o] = S(H);
  let a = null;
  const s = (f) => {
    let p, R, h, y, P, g;
    const j = { ...i.scroll };
    switch (f.type) {
      case "mousemove":
      case "mousedown":
      case "mouseup":
      case "wheel":
        const v = f;
        p = v.clientX, R = v.clientY, h = v.screenX, y = v.screenY, P = v.pageX, g = v.pageY, j.wheelDown = f.deltaY > 0, j.wheelUp = f.deltaY < 0;
        break;
      case "touchmove":
      case "touchstart":
        const { touches: x } = f, w = x[0];
        p = w.clientX, R = w.clientY, h = w.screenX, y = w.screenY, P = w.pageX, g = w.pageY;
        break;
      default:
        throw new Error(`Unknown event triggered "${f.type}"`);
    }
    const _ = { ...i.selectedElement.position }, b = { ...i.selectedElement.boundingRect };
    if (a) {
      const { left: v, top: x, width: w, height: $ } = a.getBoundingClientRect();
      _.x = p - v - d.x, _.y = R - x - d.y;
      const X = 180 / Math.PI, O = 180;
      _.angle = Math.atan2(_.y, -_.x) * X + O, b.left = v, b.top = x, b.width = w, b.height = $;
    }
    o((v) => ({
      ...v,
      position: {
        client: { x: p, y: R },
        screen: { x: h, y },
        page: { x: P, y: g }
      },
      scroll: j,
      eventType: f.type,
      selectedElement: {
        ...v.selectedElement,
        position: _,
        boundingRect: b
      }
    }));
  }, E = () => {
    o(H);
  }, A = () => {
    const f = { ...i.selectedElement };
    f.isHover = !0, o((p) => ({
      ...p,
      selectedElement: f
    }));
  }, F = () => {
    const f = { ...i.selectedElement };
    f.isHover = !1, o((p) => ({
      ...p,
      selectedElement: f
    }));
  };
  return k(() => {
    if (n) {
      if (a = document.getElementById(n), !a)
        throw new Error(
          `Element with id="${n}" doesn't exists`
        );
      a.addEventListener("mouseenter", A), a.addEventListener("mouseleave", F);
    }
    return document.addEventListener("mousemove", s), document.addEventListener("mousedown", s), document.addEventListener("mouseup", s), document.addEventListener("wheel", s), document.addEventListener("mouseleave", E), r && (window.addEventListener("touchmove", s), window.addEventListener("touchstart", s), window.addEventListener("touchend", E)), () => {
      document.removeEventListener("mousemove", s), document.removeEventListener("mousedown", s), document.removeEventListener("mouseup", s), document.removeEventListener("wheel", s), document.removeEventListener("mouseleave", E), r && (window.removeEventListener("touchmove", s), window.removeEventListener("touchstart", s), window.removeEventListener("touchend", E));
    };
  }, []), i;
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
const ae = () => {
  const [r, n] = S("00000"), [d, i] = S("00000");
  return k(() => {
    const o = (s, E = 5) => s.toString().padStart(E, "0"), a = (s) => {
      const E = o(s.clientX), A = o(s.clientY);
      n(E), i(A);
    };
    return window.addEventListener("mousemove", a), () => {
      window.removeEventListener("mousemove", a);
    };
  }, []), { xValue: r, yValue: d };
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
const ie = ({ window: r, document: n }) => Math.min(r.scrollY / (n.body.offsetHeight - 770), 0.999), Ee = () => {
  const [r, n] = S("0000");
  return k(() => {
    const d = (o, a = 4) => o.toString().padStart(a, "0"), i = () => {
      const o = ie({ window, document });
      n(`SCR: 0.${d(o.toFixed(3), 2)}`);
    };
    return window.addEventListener("scroll", i), () => {
      window.removeEventListener("scroll", i);
    };
  }, [window, document]), r;
}, le = ({
  dotSize: r = 10
}) => {
  const [n, d] = S({
    x: 0,
    y: 0
  });
  return k(() => {
    const i = (o) => {
      const { clientX: a, clientY: s } = o;
      d({ x: a, y: s });
    };
    return window.addEventListener("mousemove", i), () => {
      window.removeEventListener("mousemove", i);
    };
  }, []), [n, r];
}, ce = () => {
  const [r, n] = S({
    x: null,
    y: null
  });
  return k(() => {
    const d = (i) => {
      n({ x: i.clientX, y: i.clientY });
    };
    return window.addEventListener("mousemove", d), () => {
      window.removeEventListener("mousemove", d);
    };
  }, []), r;
};
var N = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var B;
function ue() {
  if (B) return L;
  B = 1;
  var r = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
  function d(i, o, a) {
    var s = null;
    if (a !== void 0 && (s = "" + a), o.key !== void 0 && (s = "" + o.key), "key" in o) {
      a = {};
      for (var E in o)
        E !== "key" && (a[E] = o[E]);
    } else a = o;
    return o = a.ref, {
      $$typeof: r,
      type: i,
      key: s,
      ref: o !== void 0 ? o : null,
      props: a
    };
  }
  return L.Fragment = n, L.jsx = d, L.jsxs = d, L;
}
var Y = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function de() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && (function() {
    function r(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case g:
          return "Fragment";
        case _:
          return "Profiler";
        case j:
          return "StrictMode";
        case w:
          return "Suspense";
        case $:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case P:
            return "Portal";
          case v:
            return e.displayName || "Context";
          case b:
            return (e._context.displayName || "Context") + ".Consumer";
          case x:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case X:
            return t = e.displayName || null, t !== null ? t : r(e.type) || "Memo";
          case O:
            t = e._payload, e = e._init;
            try {
              return r(e(t));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function d(e) {
      try {
        n(e);
        var t = !1;
      } catch {
        t = !0;
      }
      if (t) {
        t = console;
        var l = t.error, c = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l.call(
          t,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          c
        ), n(e);
      }
    }
    function i(e) {
      if (e === g) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === O)
        return "<...>";
      try {
        var t = r(e);
        return t ? "<" + t + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function o() {
      var e = D.A;
      return e === null ? null : e.getOwner();
    }
    function a() {
      return Error("react-stack-top-frame");
    }
    function s(e) {
      if (U.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function E(e, t) {
      function l() {
        W || (W = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          t
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: l,
        configurable: !0
      });
    }
    function A() {
      var e = r(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function F(e, t, l, c, C, I) {
      var u = l.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: t,
        props: l,
        _owner: c
      }, (u !== void 0 ? u : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: A
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: C
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: I
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function f(e, t, l, c, C, I) {
      var u = t.children;
      if (u !== void 0)
        if (c)
          if (te(u)) {
            for (c = 0; c < u.length; c++)
              p(u[c]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else p(u);
      if (U.call(t, "key")) {
        u = r(e);
        var T = Object.keys(t).filter(function(re) {
          return re !== "key";
        });
        c = 0 < T.length ? "{key: someKey, " + T.join(": ..., ") + ": ...}" : "{key: someKey}", G[u + c] || (T = 0 < T.length ? "{" + T.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          c,
          u,
          T,
          u
        ), G[u + c] = !0);
      }
      if (u = null, l !== void 0 && (d(l), u = "" + l), s(t) && (d(t.key), u = "" + t.key), "key" in t) {
        l = {};
        for (var V in t)
          V !== "key" && (l[V] = t[V]);
      } else l = t;
      return u && E(
        l,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), F(
        e,
        u,
        l,
        o(),
        C,
        I
      );
    }
    function p(e) {
      R(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === O && (e._payload.status === "fulfilled" ? R(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function R(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var h = ne, y = Symbol.for("react.transitional.element"), P = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), b = Symbol.for("react.consumer"), v = Symbol.for("react.context"), x = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), $ = Symbol.for("react.suspense_list"), X = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), D = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, te = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var W, z = {}, J = h.react_stack_bottom_frame.bind(
      h,
      a
    )(), q = M(i(a)), G = {};
    Y.Fragment = g, Y.jsx = function(e, t, l) {
      var c = 1e4 > D.recentlyCreatedOwnerStacks++;
      return f(
        e,
        t,
        l,
        !1,
        c ? Error("react-stack-top-frame") : J,
        c ? M(i(e)) : q
      );
    }, Y.jsxs = function(e, t, l) {
      var c = 1e4 > D.recentlyCreatedOwnerStacks++;
      return f(
        e,
        t,
        l,
        !0,
        c ? Error("react-stack-top-frame") : J,
        c ? M(i(e)) : q
      );
    };
  })()), Y;
}
var Q;
function fe() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? N.exports = ue() : N.exports = de()), N.exports;
}
var m = fe();
const ve = (r) => {
  const n = se();
  return r.position.client ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    n.position.client.x,
    ", ",
    n.position.client.y
  ] }) : r.position.page ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    n.position.page.x,
    ", ",
    n.position.page.y
  ] }) : r.position.screen ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    n.position.screen.x,
    ", ",
    n.position.screen.y
  ] }) : null;
}, pe = () => {
  const { xValue: r, yValue: n } = ae();
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs("p", { children: [
      "X: ",
      r
    ] }),
    /* @__PURE__ */ m.jsxs("p", { children: [
      "Y: ",
      n
    ] })
  ] });
}, we = () => {
  const r = ce();
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: JSON.stringify(r) });
}, he = () => {
  const [r, n] = le({ dotSize: 10 });
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: /* @__PURE__ */ m.jsx(
    "div",
    {
      style: {
        position: "absolute",
        left: r.x,
        top: r.y,
        width: n,
        height: n,
        borderRadius: "50%",
        backgroundColor: "red"
      }
    }
  ) });
}, _e = typeof document < "u" ? oe : k;
export {
  ve as Arie,
  pe as ArieCursorPosition,
  he as ArieDot,
  we as AriePosition,
  se as useArie,
  ae as useArieCursor,
  le as useArieDot,
  ce as useAriePosition,
  Ee as useArieScroll,
  _e as useIsomorphicLayoutEffect
};
//# sourceMappingURL=arie.mjs.map
