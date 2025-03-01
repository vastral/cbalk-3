import Ve, { forwardRef as _r, createElement as Fe, useState as G, useRef as $e, useEffect as le, StrictMode as qe } from "react";
import wr from "react-dom";
var fe = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Cr() {
  if (Le) return Y;
  Le = 1;
  var m = Ve, g = Symbol.for("react.element"), O = Symbol.for("react.fragment"), S = Object.prototype.hasOwnProperty, y = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(C, c, x) {
    var p, _ = {}, T = null, A = null;
    x !== void 0 && (T = "" + x), c.key !== void 0 && (T = "" + c.key), c.ref !== void 0 && (A = c.ref);
    for (p in c) S.call(c, p) && !R.hasOwnProperty(p) && (_[p] = c[p]);
    if (C && C.defaultProps) for (p in c = C.defaultProps, c) _[p] === void 0 && (_[p] = c[p]);
    return { $$typeof: g, type: C, key: T, ref: A, props: _, _owner: y.current };
  }
  return Y.Fragment = O, Y.jsx = w, Y.jsxs = w, Y;
}
var U = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function xr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var m = Ve, g = Symbol.for("react.element"), O = Symbol.for("react.portal"), S = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), C = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), V = Symbol.iterator, q = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[q];
      return typeof r == "function" ? r : null;
    }
    var P = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        B("error", e, t);
      }
    }
    function B(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var v = !1, h = !1, F = !1, ee = !1, Je = !1, ve;
    ve = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === S || e === R || Je || e === y || e === x || e === p || ee || e === A || v || h || F || typeof e == "object" && e !== null && (e.$$typeof === T || e.$$typeof === _ || e.$$typeof === w || e.$$typeof === C || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ve || e.getModuleId !== void 0));
    }
    function ze(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function pe(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case S:
          return "Fragment";
        case O:
          return "Portal";
        case R:
          return "Profiler";
        case y:
          return "StrictMode";
        case x:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case C:
            var r = e;
            return pe(r) + ".Consumer";
          case w:
            var t = e;
            return pe(t._context) + ".Provider";
          case c:
            return ze(e, e.render, "ForwardRef");
          case _:
            var n = e.displayName || null;
            return n !== null ? n : k(e.type) || "Memo";
          case T: {
            var i = e, u = i._payload, o = i._init;
            try {
              return k(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, $ = 0, he, me, ge, be, ye, Ee, Re;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function Xe() {
      {
        if ($ === 0) {
          he = console.log, me = console.info, ge = console.warn, be = console.error, ye = console.group, Ee = console.groupCollapsed, Re = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        $++;
      }
    }
    function Ge() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: he
            }),
            info: D({}, e, {
              value: me
            }),
            warn: D({}, e, {
              value: ge
            }),
            error: D({}, e, {
              value: be
            }),
            group: D({}, e, {
              value: ye
            }),
            groupCollapsed: D({}, e, {
              value: Ee
            }),
            groupEnd: D({}, e, {
              value: Re
            })
          });
        }
        $ < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = P.ReactCurrentDispatcher, te;
    function J(e, r, t) {
      {
        if (te === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            te = n && n[1] || "";
          }
        return `
` + te + e;
      }
    }
    var ne = !1, K;
    {
      var He = typeof WeakMap == "function" ? WeakMap : Map;
      K = new He();
    }
    function we(e, r) {
      if (!e || ne)
        return "";
      {
        var t = K.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ne = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = re.current, re.current = null, Xe();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (E) {
              n = E;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var a = E.stack.split(`
`), b = n.stack.split(`
`), l = a.length - 1, f = b.length - 1; l >= 1 && f >= 0 && a[l] !== b[f]; )
            f--;
          for (; l >= 1 && f >= 0; l--, f--)
            if (a[l] !== b[f]) {
              if (l !== 1 || f !== 1)
                do
                  if (l--, f--, f < 0 || a[l] !== b[f]) {
                    var j = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && K.set(e, j), j;
                  }
                while (l >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        ne = !1, re.current = u, Ge(), Error.prepareStackTrace = i;
      }
      var I = e ? e.displayName || e.name : "", M = I ? J(I) : "";
      return typeof e == "function" && K.set(e, M), M;
    }
    function Ze(e, r, t) {
      return we(e, !1);
    }
    function Qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function z(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, Qe(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case x:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ze(e.render);
          case _:
            return z(e.type, r, t);
          case T: {
            var n = e, i = n._payload, u = n._init;
            try {
              return z(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var L = Object.prototype.hasOwnProperty, Ce = {}, xe = P.ReactDebugCurrentFrame;
    function X(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        xe.setExtraStackFrame(t);
      } else
        xe.setExtraStackFrame(null);
    }
    function er(e, r, t, n, i) {
      {
        var u = Function.call.bind(L);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (X(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), X(null)), a instanceof Error && !(a.message in Ce) && (Ce[a.message] = !0, X(i), d("Failed %s type: %s", t, a.message), X(null));
          }
      }
    }
    var rr = Array.isArray;
    function ae(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function nr(e) {
      try {
        return je(e), !1;
      } catch {
        return !0;
      }
    }
    function je(e) {
      return "" + e;
    }
    function Te(e) {
      if (nr(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), je(e);
    }
    var W = P.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, Se, oe;
    oe = {};
    function or(e) {
      if (L.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function sr(e) {
      if (L.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ir(e, r) {
      if (typeof e.ref == "string" && W.current && r && W.current.stateNode !== r) {
        var t = k(W.current.type);
        oe[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(W.current.type), e.ref), oe[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Oe || (Oe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Se || (Se = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function fr(e, r, t, n, i) {
      {
        var u, o = {}, a = null, b = null;
        t !== void 0 && (Te(t), a = "" + t), sr(r) && (Te(r.key), a = "" + r.key), or(r) && (b = r.ref, ir(r, i));
        for (u in r)
          L.call(r, u) && !ar.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || b) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && ur(o, f), b && cr(o, f);
        }
        return lr(e, a, b, i, n, W.current, o);
      }
    }
    var se = P.ReactCurrentOwner, ke = P.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = z(e.type, e._source, r ? r.type : null);
        ke.setExtraStackFrame(t);
      } else
        ke.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function ue(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function Pe() {
      {
        if (se.current) {
          var e = k(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      return "";
    }
    var Ae = {};
    function vr(e) {
      {
        var r = Pe();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = vr(r);
        if (Ae[t])
          return;
        Ae[t] = !0;
        var n = "";
        e && e._owner && e._owner !== se.current && (n = " It was passed a child from " + k(e._owner.type) + "."), N(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), N(null);
      }
    }
    function Me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ae(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ue(n) && De(n, r);
          }
        else if (ue(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Q(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              ue(o.value) && De(o.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = k(r);
          er(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ie) {
          ie = !0;
          var i = k(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            N(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    var Ne = {};
    function Ie(e, r, t, n, i, u) {
      {
        var o = Ke(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = dr();
          b ? a += b : a += Pe();
          var l;
          e === null ? l = "null" : ae(e) ? l = "array" : e !== void 0 && e.$$typeof === g ? (l = "<" + (k(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var f = fr(e, r, t, i, u);
        if (f == null)
          return f;
        if (o) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (ae(j)) {
                for (var I = 0; I < j.length; I++)
                  Me(j[I], e);
                Object.freeze && Object.freeze(j);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(j, e);
        }
        if (L.call(r, "key")) {
          var M = k(e), E = Object.keys(r).filter(function(Rr) {
            return Rr !== "key";
          }), ce = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[M + ce]) {
            var Er = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ce, M, Er, M), Ne[M + ce] = !0;
          }
        }
        return e === S ? hr(f) : pr(f), f;
      }
    }
    function mr(e, r, t) {
      return Ie(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Ie(e, r, t, !1);
    }
    var br = gr, yr = mr;
    U.Fragment = S, U.jsx = br, U.jsxs = yr;
  }()), U;
}
process.env.NODE_ENV === "production" ? fe.exports = Cr() : fe.exports = xr();
var s = fe.exports, Z, H = wr;
if (process.env.NODE_ENV === "production")
  Z = H.createRoot, H.hydrateRoot;
else {
  var Ye = H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  Z = function(m, g) {
    Ye.usingClientEntryPoint = !0;
    try {
      return H.createRoot(m, g);
    } finally {
      Ye.usingClientEntryPoint = !1;
    }
  };
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var jr = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tr = (m) => m.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim(), de = (m, g) => {
  const O = _r(
    ({
      color: S = "currentColor",
      size: y = 24,
      strokeWidth: R = 2,
      absoluteStrokeWidth: w,
      className: C = "",
      children: c,
      ...x
    }, p) => Fe(
      "svg",
      {
        ref: p,
        ...jr,
        width: y,
        height: y,
        stroke: S,
        strokeWidth: w ? Number(R) * 24 / Number(y) : R,
        className: ["lucide", `lucide-${Tr(m)}`, C].join(" "),
        ...x
      },
      [
        ...g.map(([_, T]) => Fe(_, T)),
        ...Array.isArray(c) ? c : [c]
      ]
    )
  );
  return O.displayName = `${m}`, O;
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ue = de("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Or = de("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }]
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sr = de("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]);
function Be() {
  var d, B;
  const m = ((d = window.MariaChatbotConfig) == null ? void 0 : d.welcomeMessage) || "¡Hola! Soy María, tu asistente virtual. ¿En qué puedo ayudarte hoy?", g = ((B = window.MariaChatbotConfig) == null ? void 0 : B.webhookUrl) || "https://acd4-77-230-34-180.ngrok-free.app/webhook/5cdeb1ba-025d-4533-9ca4-ad7793432eb7/chat", [O, S] = G(!1), [y, R] = G([]), [w, C] = G(""), [c, x] = G(!1), p = $e(null), _ = $e(null);
  le(() => {
    const v = localStorage.getItem("chatMessages");
    if (v)
      try {
        const h = JSON.parse(v);
        if (Array.isArray(h) && h.length > 0) {
          R(h);
          return;
        }
      } catch (h) {
        console.error("Error parsing saved messages:", h);
      }
    R([{
      text: m,
      sender: "bot",
      timestamp: Date.now()
    }]);
  }, [m]), le(() => {
    y.length > 0 && localStorage.setItem("chatMessages", JSON.stringify(y));
  }, [y]), le(() => {
    T();
  }, [y]);
  const T = () => {
    var v;
    (v = p.current) == null || v.scrollIntoView({ behavior: "smooth" });
  }, A = () => {
    S(!O);
  }, V = (v) => {
    C(v.target.value);
  }, q = async () => {
    if (w.trim() === "") return;
    const v = {
      text: w,
      sender: "user",
      timestamp: Date.now()
    };
    R((h) => [...h, v]), C(""), x(!0);
    try {
      const h = await fetch(g, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: w })
      });
      if (!h.ok)
        throw new Error("Network response was not ok");
      const F = await h.json();
      setTimeout(() => {
        x(!1), R((ee) => [
          ...ee,
          {
            text: F.response || "Lo siento, parece que hubo un problema con mi respuesta.",
            sender: "bot",
            timestamp: Date.now()
          }
        ]);
      }, 1500);
    } catch (h) {
      console.error("Error:", h), setTimeout(() => {
        x(!1), R((F) => [
          ...F,
          {
            text: "Lo siento, parece que hay un problema de conexión. Por favor, intenta de nuevo más tarde.",
            sender: "bot",
            timestamp: Date.now()
          }
        ]);
      }, 1500);
    }
  }, Q = (v) => {
    v.key === "Enter" && q();
  }, P = (v) => new Date(v).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  return /* @__PURE__ */ s.jsx("div", { className: "chatbot-container", children: O ? /* @__PURE__ */ s.jsxs("div", { className: "chatbot-box", children: [
    /* @__PURE__ */ s.jsxs("div", { className: "chatbot-header", children: [
      /* @__PURE__ */ s.jsxs("div", { className: "chatbot-title", children: [
        /* @__PURE__ */ s.jsx(Ue, { size: 20 }),
        /* @__PURE__ */ s.jsx("span", { children: "Chat con María" })
      ] }),
      /* @__PURE__ */ s.jsx("div", { className: "chatbot-actions", children: /* @__PURE__ */ s.jsx("button", { className: "close-button", onClick: A, children: /* @__PURE__ */ s.jsx(Sr, { size: 20 }) }) })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "chatbot-messages", ref: _, children: [
      y.map((v, h) => /* @__PURE__ */ s.jsx(
        "div",
        {
          className: `message ${v.sender === "user" ? "user-message" : "bot-message"}`,
          children: /* @__PURE__ */ s.jsxs("div", { className: "message-content", children: [
            /* @__PURE__ */ s.jsx("div", { className: "message-text", children: v.text }),
            /* @__PURE__ */ s.jsx("div", { className: "message-time", children: P(v.timestamp) })
          ] })
        },
        h
      )),
      c && /* @__PURE__ */ s.jsx("div", { className: "message bot-message", children: /* @__PURE__ */ s.jsx("div", { className: "message-content", children: /* @__PURE__ */ s.jsxs("div", { className: "typing-indicator", children: [
        "María está escribiendo",
        /* @__PURE__ */ s.jsx("span", { children: "." }),
        /* @__PURE__ */ s.jsx("span", { children: "." }),
        /* @__PURE__ */ s.jsx("span", { children: "." })
      ] }) }) }),
      /* @__PURE__ */ s.jsx("div", { ref: p })
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "chatbot-input", children: [
      /* @__PURE__ */ s.jsx(
        "input",
        {
          type: "text",
          placeholder: "Escribe un mensaje...",
          value: w,
          onChange: V,
          onKeyPress: Q
        }
      ),
      /* @__PURE__ */ s.jsx("button", { className: "send-button", onClick: q, children: /* @__PURE__ */ s.jsx(Or, { size: 20 }) })
    ] })
  ] }) : /* @__PURE__ */ s.jsx("button", { className: "chatbot-bubble", onClick: A, children: /* @__PURE__ */ s.jsx(Ue, { size: 24 }) }) });
}
window.MariaChatbotConfig = {
  welcomeMessage: "Hola, soy María 😊, la asistenta virtual de Alkanatur. Pregúntame cualquier duda que tengas."
};
const kr = {
  // Function to create and inject the chatbot into any website
  createChatbot: (m = {}) => {
    window.MariaChatbotConfig = {
      ...window.MariaChatbotConfig,
      ...m
    };
    const g = document.createElement("div");
    return g.id = "maria-chatbot-container", document.body.appendChild(g), Z(g).render(
      /* @__PURE__ */ s.jsx(qe, { children: /* @__PURE__ */ s.jsx(Be, {}) })
    ), !0;
  }
};
window.MariaChatbot = kr;
document.getElementById("root") && Z(document.getElementById("root")).render(
  /* @__PURE__ */ s.jsx(qe, { children: /* @__PURE__ */ s.jsx(Be, {}) })
);
