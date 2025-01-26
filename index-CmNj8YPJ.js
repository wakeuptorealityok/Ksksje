(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const i of l)
            if (i.type === "childList")
                for (const o of i.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const i = {};
        return l.integrity && (i.integrity = l.integrity), l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? i.credentials = "include" : l.crossOrigin === "anonymous" ? i.credentials = "omit" : i.credentials = "same-origin", i
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const i = n(l);
        fetch(l.href, i)
    }
})();
var tu = {
        exports: {}
    },
    al = {},
    nu = {
        exports: {}
    },
    I = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"),
    _c = Symbol.for("react.portal"),
    Tc = Symbol.for("react.fragment"),
    Ic = Symbol.for("react.strict_mode"),
    Mc = Symbol.for("react.profiler"),
    Dc = Symbol.for("react.provider"),
    Lc = Symbol.for("react.context"),
    Rc = Symbol.for("react.forward_ref"),
    Fc = Symbol.for("react.suspense"),
    Bc = Symbol.for("react.memo"),
    Uc = Symbol.for("react.lazy"),
    Qo = Symbol.iterator;

function Oc(e) {
    return e === null || typeof e != "object" ? null : (e = Qo && e[Qo] || e["@@iterator"], typeof e == "function" ? e : null)
}
var ru = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    lu = Object.assign,
    iu = {};

function fn(e, t, n) {
    this.props = e, this.context = t, this.refs = iu, this.updater = n || ru
}
fn.prototype.isReactComponent = {};
fn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
fn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function ou() {}
ou.prototype = fn.prototype;

function Gi(e, t, n) {
    this.props = e, this.context = t, this.refs = iu, this.updater = n || ru
}
var Zi = Gi.prototype = new ou;
Zi.constructor = Gi;
lu(Zi, fn.prototype);
Zi.isPureReactComponent = !0;
var Ho = Array.isArray,
    su = Object.prototype.hasOwnProperty,
    Xi = {
        current: null
    },
    uu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function au(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) su.call(t, r) && !uu.hasOwnProperty(r) && (l[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) l.children = n;
    else if (1 < s) {
        for (var u = Array(s), d = 0; d < s; d++) u[d] = arguments[d + 2];
        l.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps, s) l[r] === void 0 && (l[r] = s[r]);
    return {
        $$typeof: tr,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Xi.current
    }
}

function Qc(e, t) {
    return {
        $$typeof: tr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function Yi(e) {
    return typeof e == "object" && e !== null && e.$$typeof === tr
}

function Hc(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Ko = /\/+/g;

function El(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Hc("" + e.key) : t.toString(36)
}

function Er(e, t, n, r, l) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (i) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case tr:
                case _c:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + El(o, 0) : r, Ho(l) ? (n = "", e != null && (n = e.replace(Ko, "$&/") + "/"), Er(l, t, n, "", function(d) {
        return d
    })) : l != null && (Yi(l) && (l = Qc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Ko, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", Ho(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var u = r + El(i, s);
            o += Er(i, t, n, u, l)
        } else if (u = Oc(e), typeof u == "function")
            for (e = u.call(e), s = 0; !(i = e.next()).done;) i = i.value, u = r + El(i, s++), o += Er(i, t, n, u, l);
        else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function ur(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return Er(e, r, "", "", function(i) {
        return t.call(n, i, l++)
    }), r
}

function Kc(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var ae = {
        current: null
    },
    jr = {
        transition: null
    },
    Vc = {
        ReactCurrentDispatcher: ae,
        ReactCurrentBatchConfig: jr,
        ReactCurrentOwner: Xi
    };

function cu() {
    throw Error("act(...) is not supported in production builds of React.")
}
I.Children = {
    map: ur,
    forEach: function(e, t, n) {
        ur(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return ur(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return ur(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Yi(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
I.Component = fn;
I.Fragment = Tc;
I.Profiler = Mc;
I.PureComponent = Gi;
I.StrictMode = Ic;
I.Suspense = Fc;
I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vc;
I.act = cu;
I.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = lu({}, e.props),
        l = e.key,
        i = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref, o = Xi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
        for (u in t) su.call(t, u) && !uu.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1) r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var d = 0; d < u; d++) s[d] = arguments[d + 2];
        r.children = s
    }
    return {
        $$typeof: tr,
        type: e.type,
        key: l,
        ref: i,
        props: r,
        _owner: o
    }
};
I.createContext = function(e) {
    return e = {
        $$typeof: Lc,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: Dc,
        _context: e
    }, e.Consumer = e
};
I.createElement = au;
I.createFactory = function(e) {
    var t = au.bind(null, e);
    return t.type = e, t
};
I.createRef = function() {
    return {
        current: null
    }
};
I.forwardRef = function(e) {
    return {
        $$typeof: Rc,
        render: e
    }
};
I.isValidElement = Yi;
I.lazy = function(e) {
    return {
        $$typeof: Uc,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Kc
    }
};
I.memo = function(e, t) {
    return {
        $$typeof: Bc,
        type: e,
        compare: t === void 0 ? null : t
    }
};
I.startTransition = function(e) {
    var t = jr.transition;
    jr.transition = {};
    try {
        e()
    } finally {
        jr.transition = t
    }
};
I.unstable_act = cu;
I.useCallback = function(e, t) {
    return ae.current.useCallback(e, t)
};
I.useContext = function(e) {
    return ae.current.useContext(e)
};
I.useDebugValue = function() {};
I.useDeferredValue = function(e) {
    return ae.current.useDeferredValue(e)
};
I.useEffect = function(e, t) {
    return ae.current.useEffect(e, t)
};
I.useId = function() {
    return ae.current.useId()
};
I.useImperativeHandle = function(e, t, n) {
    return ae.current.useImperativeHandle(e, t, n)
};
I.useInsertionEffect = function(e, t) {
    return ae.current.useInsertionEffect(e, t)
};
I.useLayoutEffect = function(e, t) {
    return ae.current.useLayoutEffect(e, t)
};
I.useMemo = function(e, t) {
    return ae.current.useMemo(e, t)
};
I.useReducer = function(e, t, n) {
    return ae.current.useReducer(e, t, n)
};
I.useRef = function(e) {
    return ae.current.useRef(e)
};
I.useState = function(e) {
    return ae.current.useState(e)
};
I.useSyncExternalStore = function(e, t, n) {
    return ae.current.useSyncExternalStore(e, t, n)
};
I.useTransition = function() {
    return ae.current.useTransition()
};
I.version = "18.3.1";
nu.exports = I;
var D = nu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc = D,
    Gc = Symbol.for("react.element"),
    Zc = Symbol.for("react.fragment"),
    Xc = Object.prototype.hasOwnProperty,
    Yc = Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Jc = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function du(e, t, n) {
    var r, l = {},
        i = null,
        o = null;
    n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Xc.call(t, r) && !Jc.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Gc,
        type: e,
        key: i,
        ref: o,
        props: l,
        _owner: Yc.current
    }
}
al.Fragment = Zc;
al.jsx = du;
al.jsxs = du;
tu.exports = al;
var a = tu.exports,
    fu = {
        exports: {}
    },
    we = {},
    pu = {
        exports: {}
    },
    mu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(C, P) {
        var T = C.length;
        C.push(P);
        e: for (; 0 < T;) {
            var W = T - 1 >>> 1,
                J = C[W];
            if (0 < l(J, P)) C[W] = P, C[T] = J, T = W;
            else break e
        }
    }

    function n(C) {
        return C.length === 0 ? null : C[0]
    }

    function r(C) {
        if (C.length === 0) return null;
        var P = C[0],
            T = C.pop();
        if (T !== P) {
            C[0] = T;
            e: for (var W = 0, J = C.length, or = J >>> 1; W < or;) {
                var wt = 2 * (W + 1) - 1,
                    Nl = C[wt],
                    St = wt + 1,
                    sr = C[St];
                if (0 > l(Nl, T)) St < J && 0 > l(sr, Nl) ? (C[W] = sr, C[St] = T, W = St) : (C[W] = Nl, C[wt] = T, W = wt);
                else if (St < J && 0 > l(sr, T)) C[W] = sr, C[St] = T, W = St;
                else break e
            }
        }
        return P
    }

    function l(C, P) {
        var T = C.sortIndex - P.sortIndex;
        return T !== 0 ? T : C.id - P.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var o = Date,
            s = o.now();
        e.unstable_now = function() {
            return o.now() - s
        }
    }
    var u = [],
        d = [],
        h = 1,
        m = null,
        g = 3,
        v = !1,
        x = !1,
        w = !1,
        z = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function p(C) {
        for (var P = n(d); P !== null;) {
            if (P.callback === null) r(d);
            else if (P.startTime <= C) r(d), P.sortIndex = P.expirationTime, t(u, P);
            else break;
            P = n(d)
        }
    }

    function A(C) {
        if (w = !1, p(C), !x)
            if (n(u) !== null) x = !0, gn(S);
            else {
                var P = n(d);
                P !== null && hn(A, P.startTime - C)
            }
    }

    function S(C, P) {
        x = !1, w && (w = !1, f(j), j = -1), v = !0;
        var T = g;
        try {
            for (p(P), m = n(u); m !== null && (!(m.expirationTime > P) || C && !he());) {
                var W = m.callback;
                if (typeof W == "function") {
                    m.callback = null, g = m.priorityLevel;
                    var J = W(m.expirationTime <= P);
                    P = e.unstable_now(), typeof J == "function" ? m.callback = J : m === n(u) && r(u), p(P)
                } else r(u);
                m = n(u)
            }
            if (m !== null) var or = !0;
            else {
                var wt = n(d);
                wt !== null && hn(A, wt.startTime - P), or = !1
            }
            return or
        } finally {
            m = null, g = T, v = !1
        }
    }
    var N = !1,
        E = null,
        j = -1,
        F = 5,
        _ = -1;

    function he() {
        return !(e.unstable_now() - _ < F)
    }

    function xt() {
        if (E !== null) {
            var C = e.unstable_now();
            _ = C;
            var P = !0;
            try {
                P = E(!0, C)
            } finally {
                P ? Re() : (N = !1, E = null)
            }
        } else N = !1
    }
    var Re;
    if (typeof c == "function") Re = function() {
        c(xt)
    };
    else if (typeof MessageChannel < "u") {
        var be = new MessageChannel,
            Ft = be.port2;
        be.port1.onmessage = xt, Re = function() {
            Ft.postMessage(null)
        }
    } else Re = function() {
        z(xt, 0)
    };

    function gn(C) {
        E = C, N || (N = !0, Re())
    }

    function hn(C, P) {
        j = z(function() {
            C(e.unstable_now())
        }, P)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
        C.callback = null
    }, e.unstable_continueExecution = function() {
        x || v || (x = !0, gn(S))
    }, e.unstable_forceFrameRate = function(C) {
        0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : F = 0 < C ? Math.floor(1e3 / C) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return g
    }, e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }, e.unstable_next = function(C) {
        switch (g) {
            case 1:
            case 2:
            case 3:
                var P = 3;
                break;
            default:
                P = g
        }
        var T = g;
        g = P;
        try {
            return C()
        } finally {
            g = T
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(C, P) {
        switch (C) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                C = 3
        }
        var T = g;
        g = C;
        try {
            return P()
        } finally {
            g = T
        }
    }, e.unstable_scheduleCallback = function(C, P, T) {
        var W = e.unstable_now();
        switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? W + T : W) : T = W, C) {
            case 1:
                var J = -1;
                break;
            case 2:
                J = 250;
                break;
            case 5:
                J = 1073741823;
                break;
            case 4:
                J = 1e4;
                break;
            default:
                J = 5e3
        }
        return J = T + J, C = {
            id: h++,
            callback: P,
            priorityLevel: C,
            startTime: T,
            expirationTime: J,
            sortIndex: -1
        }, T > W ? (C.sortIndex = T, t(d, C), n(u) === null && C === n(d) && (w ? (f(j), j = -1) : w = !0, hn(A, T - W))) : (C.sortIndex = J, t(u, C), x || v || (x = !0, gn(S))), C
    }, e.unstable_shouldYield = he, e.unstable_wrapCallback = function(C) {
        var P = g;
        return function() {
            var T = g;
            g = P;
            try {
                return C.apply(this, arguments)
            } finally {
                g = T
            }
        }
    }
})(mu);
pu.exports = mu;
var qc = pu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $c = D,
    xe = qc;

function y(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var gu = new Set,
    Bn = {};

function Lt(e, t) {
    rn(e, t), rn(e + "Capture", t)
}

function rn(e, t) {
    for (Bn[e] = t, e = 0; e < t.length; e++) gu.add(t[e])
}
var Xe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    $l = Object.prototype.hasOwnProperty,
    bc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Vo = {},
    Wo = {};

function ed(e) {
    return $l.call(Wo, e) ? !0 : $l.call(Vo, e) ? !1 : bc.test(e) ? Wo[e] = !0 : (Vo[e] = !0, !1)
}

function td(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function nd(e, t, n, r) {
    if (t === null || typeof t > "u" || td(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function ce(e, t, n, r, l, i, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    te[e] = new ce(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    te[t] = new ce(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    te[e] = new ce(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    te[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    te[e] = new ce(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    te[e] = new ce(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    te[e] = new ce(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    te[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var Ji = /[\-:]([a-z])/g;

function qi(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Ji, qi);
    te[t] = new ce(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Ji, qi);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Ji, qi);
    te[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
te.xlinkHref = new ce("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    te[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function $i(e, t, n, r) {
    var l = te.hasOwnProperty(t) ? te[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (nd(t, n, l, r) && (n = null), r || l === null ? ed(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var $e = $c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ar = Symbol.for("react.element"),
    Ut = Symbol.for("react.portal"),
    Ot = Symbol.for("react.fragment"),
    bi = Symbol.for("react.strict_mode"),
    bl = Symbol.for("react.profiler"),
    hu = Symbol.for("react.provider"),
    Au = Symbol.for("react.context"),
    eo = Symbol.for("react.forward_ref"),
    ei = Symbol.for("react.suspense"),
    ti = Symbol.for("react.suspense_list"),
    to = Symbol.for("react.memo"),
    tt = Symbol.for("react.lazy"),
    vu = Symbol.for("react.offscreen"),
    Go = Symbol.iterator;

function An(e) {
    return e === null || typeof e != "object" ? null : (e = Go && e[Go] || e["@@iterator"], typeof e == "function" ? e : null)
}
var K = Object.assign,
    jl;

function Nn(e) {
    if (jl === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        jl = t && t[1] || ""
    }
    return `
` + jl + e
}
var Pl = !1;

function zl(e, t) {
    if (!e || Pl) return "";
    Pl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (d) {
                    var r = d
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (d) {
                    r = d
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (d) {
                r = d
            }
            e()
        }
    } catch (d) {
        if (d && r && typeof d.stack == "string") {
            for (var l = d.stack.split(`
`), i = r.stack.split(`
`), o = l.length - 1, s = i.length - 1; 1 <= o && 0 <= s && l[o] !== i[s];) s--;
            for (; 1 <= o && 0 <= s; o--, s--)
                if (l[o] !== i[s]) {
                    if (o !== 1 || s !== 1)
                        do
                            if (o--, s--, 0 > s || l[o] !== i[s]) {
                                var u = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)), u
                            }
                    while (1 <= o && 0 <= s);
                    break
                }
        }
    } finally {
        Pl = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Nn(e) : ""
}

function rd(e) {
    switch (e.tag) {
        case 5:
            return Nn(e.type);
        case 16:
            return Nn("Lazy");
        case 13:
            return Nn("Suspense");
        case 19:
            return Nn("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = zl(e.type, !1), e;
        case 11:
            return e = zl(e.type.render, !1), e;
        case 1:
            return e = zl(e.type, !0), e;
        default:
            return ""
    }
}

function ni(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Ot:
            return "Fragment";
        case Ut:
            return "Portal";
        case bl:
            return "Profiler";
        case bi:
            return "StrictMode";
        case ei:
            return "Suspense";
        case ti:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Au:
            return (e.displayName || "Context") + ".Consumer";
        case hu:
            return (e._context.displayName || "Context") + ".Provider";
        case eo:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case to:
            return t = e.displayName || null, t !== null ? t : ni(e.type) || "Memo";
        case tt:
            t = e._payload, e = e._init;
            try {
                return ni(e(t))
            } catch {}
    }
    return null
}

function ld(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return ni(t);
        case 8:
            return t === bi ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function gt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function yu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function id(e) {
    var t = yu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, i.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function cr(e) {
    e._valueTracker || (e._valueTracker = id(e))
}

function xu(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = yu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Br(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function ri(e, t) {
    var n = t.checked;
    return K({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ? ? e._wrapperState.initialChecked
    })
}

function Zo(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = gt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function wu(e, t) {
    t = t.checked, t != null && $i(e, "checked", t, !1)
}

function li(e, t) {
    wu(e, t);
    var n = gt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? ii(e, t.type, n) : t.hasOwnProperty("defaultValue") && ii(e, t.type, gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Xo(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function ii(e, t, n) {
    (t !== "number" || Br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var En = Array.isArray;

function qt(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function oi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
    return K({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Yo(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(y(92));
            if (En(n)) {
                if (1 < n.length) throw Error(y(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: gt(n)
    }
}

function Su(e, t) {
    var n = gt(t.value),
        r = gt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Jo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function ku(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function si(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? ku(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var dr, Cu = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (dr = dr || document.createElement("div"), dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Un(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var zn = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    od = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function(e) {
    od.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e]
    })
});

function Nu(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px"
}

function Eu(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = Nu(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var sd = K({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function ui(e, t) {
    if (t) {
        if (sd[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(y(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(y(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(y(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(y(62))
    }
}

function ai(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var ci = null;

function no(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var di = null,
    $t = null,
    bt = null;

function qo(e) {
    if (e = lr(e)) {
        if (typeof di != "function") throw Error(y(280));
        var t = e.stateNode;
        t && (t = ml(t), di(e.stateNode, e.type, t))
    }
}

function ju(e) {
    $t ? bt ? bt.push(e) : bt = [e] : $t = e
}

function Pu() {
    if ($t) {
        var e = $t,
            t = bt;
        if (bt = $t = null, qo(e), t)
            for (e = 0; e < t.length; e++) qo(t[e])
    }
}

function zu(e, t) {
    return e(t)
}

function _u() {}
var _l = !1;

function Tu(e, t, n) {
    if (_l) return e(t, n);
    _l = !0;
    try {
        return zu(e, t, n)
    } finally {
        _l = !1, ($t !== null || bt !== null) && (_u(), Pu())
    }
}

function On(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ml(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(y(231, t, typeof n));
    return n
}
var fi = !1;
if (Xe) try {
    var vn = {};
    Object.defineProperty(vn, "passive", {
        get: function() {
            fi = !0
        }
    }), window.addEventListener("test", vn, vn), window.removeEventListener("test", vn, vn)
} catch {
    fi = !1
}

function ud(e, t, n, r, l, i, o, s, u) {
    var d = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, d)
    } catch (h) {
        this.onError(h)
    }
}
var _n = !1,
    Ur = null,
    Or = !1,
    pi = null,
    ad = {
        onError: function(e) {
            _n = !0, Ur = e
        }
    };

function cd(e, t, n, r, l, i, o, s, u) {
    _n = !1, Ur = null, ud.apply(ad, arguments)
}

function dd(e, t, n, r, l, i, o, s, u) {
    if (cd.apply(this, arguments), _n) {
        if (_n) {
            var d = Ur;
            _n = !1, Ur = null
        } else throw Error(y(198));
        Or || (Or = !0, pi = d)
    }
}

function Rt(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function Iu(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function $o(e) {
    if (Rt(e) !== e) throw Error(y(188))
}

function fd(e) {
    var t = e.alternate;
    if (!t) {
        if (t = Rt(e), t === null) throw Error(y(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var i = l.alternate;
        if (i === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === i.child) {
            for (i = l.child; i;) {
                if (i === n) return $o(l), e;
                if (i === r) return $o(l), t;
                i = i.sibling
            }
            throw Error(y(188))
        }
        if (n.return !== r.return) n = l, r = i;
        else {
            for (var o = !1, s = l.child; s;) {
                if (s === n) {
                    o = !0, n = l, r = i;
                    break
                }
                if (s === r) {
                    o = !0, r = l, n = i;
                    break
                }
                s = s.sibling
            }
            if (!o) {
                for (s = i.child; s;) {
                    if (s === n) {
                        o = !0, n = i, r = l;
                        break
                    }
                    if (s === r) {
                        o = !0, r = i, n = l;
                        break
                    }
                    s = s.sibling
                }
                if (!o) throw Error(y(189))
            }
        }
        if (n.alternate !== r) throw Error(y(190))
    }
    if (n.tag !== 3) throw Error(y(188));
    return n.stateNode.current === n ? e : t
}

function Mu(e) {
    return e = fd(e), e !== null ? Du(e) : null
}

function Du(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = Du(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var Lu = xe.unstable_scheduleCallback,
    bo = xe.unstable_cancelCallback,
    pd = xe.unstable_shouldYield,
    md = xe.unstable_requestPaint,
    G = xe.unstable_now,
    gd = xe.unstable_getCurrentPriorityLevel,
    ro = xe.unstable_ImmediatePriority,
    Ru = xe.unstable_UserBlockingPriority,
    Qr = xe.unstable_NormalPriority,
    hd = xe.unstable_LowPriority,
    Fu = xe.unstable_IdlePriority,
    cl = null,
    Qe = null;

function Ad(e) {
    if (Qe && typeof Qe.onCommitFiberRoot == "function") try {
        Qe.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var Me = Math.clz32 ? Math.clz32 : xd,
    vd = Math.log,
    yd = Math.LN2;

function xd(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vd(e) / yd | 0) | 0
}
var fr = 64,
    pr = 4194304;

function jn(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Hr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        i = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var s = o & ~l;
        s !== 0 ? r = jn(s) : (i &= o, i !== 0 && (r = jn(i)))
    } else o = n & ~l, o !== 0 ? r = jn(o) : i !== 0 && (r = jn(i));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function wd(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function Sd(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
        var o = 31 - Me(i),
            s = 1 << o,
            u = l[o];
        u === -1 ? (!(s & n) || s & r) && (l[o] = wd(s, t)) : u <= t && (e.expiredLanes |= s), i &= ~s
    }
}

function mi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function Bu() {
    var e = fr;
    return fr <<= 1, !(fr & 4194240) && (fr = 64), e
}

function Tl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function nr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n
}

function kd(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - Me(n),
            i = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i
    }
}

function lo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - Me(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var L = 0;

function Uu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Ou, io, Qu, Hu, Ku, gi = !1,
    mr = [],
    st = null,
    ut = null,
    at = null,
    Qn = new Map,
    Hn = new Map,
    rt = [],
    Cd = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function es(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            st = null;
            break;
        case "dragenter":
        case "dragleave":
            ut = null;
            break;
        case "mouseover":
        case "mouseout":
            at = null;
            break;
        case "pointerover":
        case "pointerout":
            Qn.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            Hn.delete(t.pointerId)
    }
}

function yn(e, t, n, r, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l]
    }, t !== null && (t = lr(t), t !== null && io(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function Nd(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return st = yn(st, e, t, n, r, l), !0;
        case "dragenter":
            return ut = yn(ut, e, t, n, r, l), !0;
        case "mouseover":
            return at = yn(at, e, t, n, r, l), !0;
        case "pointerover":
            var i = l.pointerId;
            return Qn.set(i, yn(Qn.get(i) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return i = l.pointerId, Hn.set(i, yn(Hn.get(i) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Vu(e) {
    var t = Nt(e.target);
    if (t !== null) {
        var n = Rt(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = Iu(n), t !== null) {
                    e.blockedOn = t, Ku(e.priority, function() {
                        Qu(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function Pr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = hi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ci = r, n.target.dispatchEvent(r), ci = null
        } else return t = lr(n), t !== null && io(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function ts(e, t, n) {
    Pr(e) && n.delete(t)
}

function Ed() {
    gi = !1, st !== null && Pr(st) && (st = null), ut !== null && Pr(ut) && (ut = null), at !== null && Pr(at) && (at = null), Qn.forEach(ts), Hn.forEach(ts)
}

function xn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, gi || (gi = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Ed)))
}

function Kn(e) {
    function t(l) {
        return xn(l, e)
    }
    if (0 < mr.length) {
        xn(mr[0], e);
        for (var n = 1; n < mr.length; n++) {
            var r = mr[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (st !== null && xn(st, e), ut !== null && xn(ut, e), at !== null && xn(at, e), Qn.forEach(t), Hn.forEach(t), n = 0; n < rt.length; n++) r = rt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < rt.length && (n = rt[0], n.blockedOn === null);) Vu(n), n.blockedOn === null && rt.shift()
}
var en = $e.ReactCurrentBatchConfig,
    Kr = !0;

function jd(e, t, n, r) {
    var l = L,
        i = en.transition;
    en.transition = null;
    try {
        L = 1, oo(e, t, n, r)
    } finally {
        L = l, en.transition = i
    }
}

function Pd(e, t, n, r) {
    var l = L,
        i = en.transition;
    en.transition = null;
    try {
        L = 4, oo(e, t, n, r)
    } finally {
        L = l, en.transition = i
    }
}

function oo(e, t, n, r) {
    if (Kr) {
        var l = hi(e, t, n, r);
        if (l === null) Ql(e, t, r, Vr, n), es(e, r);
        else if (Nd(l, e, t, n, r)) r.stopPropagation();
        else if (es(e, r), t & 4 && -1 < Cd.indexOf(e)) {
            for (; l !== null;) {
                var i = lr(l);
                if (i !== null && Ou(i), i = hi(e, t, n, r), i === null && Ql(e, t, r, Vr, n), i === l) break;
                l = i
            }
            l !== null && r.stopPropagation()
        } else Ql(e, t, r, null, n)
    }
}
var Vr = null;

function hi(e, t, n, r) {
    if (Vr = null, e = no(r), e = Nt(e), e !== null)
        if (t = Rt(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = Iu(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return Vr = e, null
}

function Wu(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (gd()) {
                case ro:
                    return 1;
                case Ru:
                    return 4;
                case Qr:
                case hd:
                    return 16;
                case Fu:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var it = null,
    so = null,
    zr = null;

function Gu() {
    if (zr) return zr;
    var e, t = so,
        n = t.length,
        r, l = "value" in it ? it.value : it.textContent,
        i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[i - r]; r++);
    return zr = l.slice(e, 1 < r ? 1 - r : void 0)
}

function _r(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function gr() {
    return !0
}

function ns() {
    return !1
}

function Se(e) {
    function t(n, r, l, i, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
        for (var s in e) e.hasOwnProperty(s) && (n = e[s], this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? gr : ns, this.isPropagationStopped = ns, this
    }
    return K(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gr)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gr)
        },
        persist: function() {},
        isPersistent: gr
    }), t
}
var pn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    uo = Se(pn),
    rr = K({}, pn, {
        view: 0,
        detail: 0
    }),
    zd = Se(rr),
    Il, Ml, wn, dl = K({}, rr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: ao,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== wn && (wn && e.type === "mousemove" ? (Il = e.screenX - wn.screenX, Ml = e.screenY - wn.screenY) : Ml = Il = 0, wn = e), Il)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : Ml
        }
    }),
    rs = Se(dl),
    _d = K({}, dl, {
        dataTransfer: 0
    }),
    Td = Se(_d),
    Id = K({}, rr, {
        relatedTarget: 0
    }),
    Dl = Se(Id),
    Md = K({}, pn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Dd = Se(Md),
    Ld = K({}, pn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Rd = Se(Ld),
    Fd = K({}, pn, {
        data: 0
    }),
    ls = Se(Fd),
    Bd = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Ud = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Od = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Qd(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Od[e]) ? !!t[e] : !1
}

function ao() {
    return Qd
}
var Hd = K({}, rr, {
        key: function(e) {
            if (e.key) {
                var t = Bd[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = _r(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ud[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: ao,
        charCode: function(e) {
            return e.type === "keypress" ? _r(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? _r(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Kd = Se(Hd),
    Vd = K({}, dl, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    is = Se(Vd),
    Wd = K({}, rr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: ao
    }),
    Gd = Se(Wd),
    Zd = K({}, pn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Xd = Se(Zd),
    Yd = K({}, dl, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Jd = Se(Yd),
    qd = [9, 13, 27, 32],
    co = Xe && "CompositionEvent" in window,
    Tn = null;
Xe && "documentMode" in document && (Tn = document.documentMode);
var $d = Xe && "TextEvent" in window && !Tn,
    Zu = Xe && (!co || Tn && 8 < Tn && 11 >= Tn),
    os = " ",
    ss = !1;

function Xu(e, t) {
    switch (e) {
        case "keyup":
            return qd.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function Yu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var Qt = !1;

function bd(e, t) {
    switch (e) {
        case "compositionend":
            return Yu(t);
        case "keypress":
            return t.which !== 32 ? null : (ss = !0, os);
        case "textInput":
            return e = t.data, e === os && ss ? null : e;
        default:
            return null
    }
}

function ef(e, t) {
    if (Qt) return e === "compositionend" || !co && Xu(e, t) ? (e = Gu(), zr = so = it = null, Qt = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Zu && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var tf = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function us(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!tf[e.type] : t === "textarea"
}

function Ju(e, t, n, r) {
    ju(r), t = Wr(t, "onChange"), 0 < t.length && (n = new uo("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var In = null,
    Vn = null;

function nf(e) {
    sa(e, 0)
}

function fl(e) {
    var t = Vt(e);
    if (xu(t)) return e
}

function rf(e, t) {
    if (e === "change") return t
}
var qu = !1;
if (Xe) {
    var Ll;
    if (Xe) {
        var Rl = "oninput" in document;
        if (!Rl) {
            var as = document.createElement("div");
            as.setAttribute("oninput", "return;"), Rl = typeof as.oninput == "function"
        }
        Ll = Rl
    } else Ll = !1;
    qu = Ll && (!document.documentMode || 9 < document.documentMode)
}

function cs() {
    In && (In.detachEvent("onpropertychange", $u), Vn = In = null)
}

function $u(e) {
    if (e.propertyName === "value" && fl(Vn)) {
        var t = [];
        Ju(t, Vn, e, no(e)), Tu(nf, t)
    }
}

function lf(e, t, n) {
    e === "focusin" ? (cs(), In = t, Vn = n, In.attachEvent("onpropertychange", $u)) : e === "focusout" && cs()
}

function of (e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(Vn)
}

function sf(e, t) {
    if (e === "click") return fl(t)
}

function uf(e, t) {
    if (e === "input" || e === "change") return fl(t)
}

function af(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var Le = typeof Object.is == "function" ? Object.is : af;

function Wn(e, t) {
    if (Le(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!$l.call(t, l) || !Le(e[l], t[l])) return !1
    }
    return !0
}

function ds(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function fs(e, t) {
    var n = ds(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = ds(n)
    }
}

function bu(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bu(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function ea() {
    for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Br(e.document)
    }
    return t
}

function fo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function cf(e) {
    var t = ea(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && bu(n.ownerDocument.documentElement, n)) {
        if (r !== null && fo(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    i = Math.min(r.start, l);
                r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = fs(n, i);
                var o = fs(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var df = Xe && "documentMode" in document && 11 >= document.documentMode,
    Ht = null,
    Ai = null,
    Mn = null,
    vi = !1;

function ps(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    vi || Ht == null || Ht !== Br(r) || (r = Ht, "selectionStart" in r && fo(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), Mn && Wn(Mn, r) || (Mn = r, r = Wr(Ai, "onSelect"), 0 < r.length && (t = new uo("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = Ht)))
}

function hr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var Kt = {
        animationend: hr("Animation", "AnimationEnd"),
        animationiteration: hr("Animation", "AnimationIteration"),
        animationstart: hr("Animation", "AnimationStart"),
        transitionend: hr("Transition", "TransitionEnd")
    },
    Fl = {},
    ta = {};
Xe && (ta = document.createElement("div").style, "AnimationEvent" in window || (delete Kt.animationend.animation, delete Kt.animationiteration.animation, delete Kt.animationstart.animation), "TransitionEvent" in window || delete Kt.transitionend.transition);

function pl(e) {
    if (Fl[e]) return Fl[e];
    if (!Kt[e]) return e;
    var t = Kt[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in ta) return Fl[e] = t[n];
    return e
}
var na = pl("animationend"),
    ra = pl("animationiteration"),
    la = pl("animationstart"),
    ia = pl("transitionend"),
    oa = new Map,
    ms = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function At(e, t) {
    oa.set(e, t), Lt(t, [e])
}
for (var Bl = 0; Bl < ms.length; Bl++) {
    var Ul = ms[Bl],
        ff = Ul.toLowerCase(),
        pf = Ul[0].toUpperCase() + Ul.slice(1);
    At(ff, "on" + pf)
}
At(na, "onAnimationEnd");
At(ra, "onAnimationIteration");
At(la, "onAnimationStart");
At("dblclick", "onDoubleClick");
At("focusin", "onFocus");
At("focusout", "onBlur");
At(ia, "onTransitionEnd");
rn("onMouseEnter", ["mouseout", "mouseover"]);
rn("onMouseLeave", ["mouseout", "mouseover"]);
rn("onPointerEnter", ["pointerout", "pointerover"]);
rn("onPointerLeave", ["pointerout", "pointerover"]);
Lt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Lt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Lt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));

function gs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, dd(r, t, void 0, e), e.currentTarget = null
}

function sa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o],
                        u = s.instance,
                        d = s.currentTarget;
                    if (s = s.listener, u !== i && l.isPropagationStopped()) break e;
                    gs(l, s, d), i = u
                } else
                    for (o = 0; o < r.length; o++) {
                        if (s = r[o], u = s.instance, d = s.currentTarget, s = s.listener, u !== i && l.isPropagationStopped()) break e;
                        gs(l, s, d), i = u
                    }
        }
    }
    if (Or) throw e = pi, Or = !1, pi = null, e
}

function B(e, t) {
    var n = t[ki];
    n === void 0 && (n = t[ki] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ua(t, e, 2, !1), n.add(r))
}

function Ol(e, t, n) {
    var r = 0;
    t && (r |= 4), ua(n, e, r, t)
}
var Ar = "_reactListening" + Math.random().toString(36).slice(2);

function Gn(e) {
    if (!e[Ar]) {
        e[Ar] = !0, gu.forEach(function(n) {
            n !== "selectionchange" && (mf.has(n) || Ol(n, !1, e), Ol(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ar] || (t[Ar] = !0, Ol("selectionchange", !1, t))
    }
}

function ua(e, t, n, r) {
    switch (Wu(t)) {
        case 1:
            var l = jd;
            break;
        case 4:
            l = Pd;
            break;
        default:
            l = oo
    }
    n = l.bind(null, t, n, e), l = void 0, !fi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Ql(e, t, n, r, l) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var s = r.stateNode.containerInfo;
            if (s === l || s.nodeType === 8 && s.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var u = o.tag;
                    if ((u === 3 || u === 4) && (u = o.stateNode.containerInfo, u === l || u.nodeType === 8 && u.parentNode === l)) return;
                    o = o.return
                }
            for (; s !== null;) {
                if (o = Nt(s), o === null) return;
                if (u = o.tag, u === 5 || u === 6) {
                    r = i = o;
                    continue e
                }
                s = s.parentNode
            }
        }
        r = r.return
    }
    Tu(function() {
        var d = i,
            h = no(n),
            m = [];
        e: {
            var g = oa.get(e);
            if (g !== void 0) {
                var v = uo,
                    x = e;
                switch (e) {
                    case "keypress":
                        if (_r(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        v = Kd;
                        break;
                    case "focusin":
                        x = "focus", v = Dl;
                        break;
                    case "focusout":
                        x = "blur", v = Dl;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        v = Dl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        v = rs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        v = Td;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        v = Gd;
                        break;
                    case na:
                    case ra:
                    case la:
                        v = Dd;
                        break;
                    case ia:
                        v = Xd;
                        break;
                    case "scroll":
                        v = zd;
                        break;
                    case "wheel":
                        v = Jd;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        v = Rd;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        v = is
                }
                var w = (t & 4) !== 0,
                    z = !w && e === "scroll",
                    f = w ? g !== null ? g + "Capture" : null : g;
                w = [];
                for (var c = d, p; c !== null;) {
                    p = c;
                    var A = p.stateNode;
                    if (p.tag === 5 && A !== null && (p = A, f !== null && (A = On(c, f), A != null && w.push(Zn(c, A, p)))), z) break;
                    c = c.return
                }
                0 < w.length && (g = new v(g, x, null, n, h), m.push({
                    event: g,
                    listeners: w
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (g = e === "mouseover" || e === "pointerover", v = e === "mouseout" || e === "pointerout", g && n !== ci && (x = n.relatedTarget || n.fromElement) && (Nt(x) || x[Ye])) break e;
                if ((v || g) && (g = h.window === h ? h : (g = h.ownerDocument) ? g.defaultView || g.parentWindow : window, v ? (x = n.relatedTarget || n.toElement, v = d, x = x ? Nt(x) : null, x !== null && (z = Rt(x), x !== z || x.tag !== 5 && x.tag !== 6) && (x = null)) : (v = null, x = d), v !== x)) {
                    if (w = rs, A = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = is, A = "onPointerLeave", f = "onPointerEnter", c = "pointer"), z = v == null ? g : Vt(v), p = x == null ? g : Vt(x), g = new w(A, c + "leave", v, n, h), g.target = z, g.relatedTarget = p, A = null, Nt(h) === d && (w = new w(f, c + "enter", x, n, h), w.target = p, w.relatedTarget = z, A = w), z = A, v && x) t: {
                        for (w = v, f = x, c = 0, p = w; p; p = Bt(p)) c++;
                        for (p = 0, A = f; A; A = Bt(A)) p++;
                        for (; 0 < c - p;) w = Bt(w),
                        c--;
                        for (; 0 < p - c;) f = Bt(f),
                        p--;
                        for (; c--;) {
                            if (w === f || f !== null && w === f.alternate) break t;
                            w = Bt(w), f = Bt(f)
                        }
                        w = null
                    }
                    else w = null;
                    v !== null && hs(m, g, v, w, !1), x !== null && z !== null && hs(m, z, x, w, !0)
                }
            }
            e: {
                if (g = d ? Vt(d) : window, v = g.nodeName && g.nodeName.toLowerCase(), v === "select" || v === "input" && g.type === "file") var S = rf;
                else if (us(g))
                    if (qu) S = uf;
                    else {
                        S = of ;
                        var N = lf
                    }
                else(v = g.nodeName) && v.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (S = sf);
                if (S && (S = S(e, d))) {
                    Ju(m, S, n, h);
                    break e
                }
                N && N(e, g, d),
                e === "focusout" && (N = g._wrapperState) && N.controlled && g.type === "number" && ii(g, "number", g.value)
            }
            switch (N = d ? Vt(d) : window, e) {
                case "focusin":
                    (us(N) || N.contentEditable === "true") && (Ht = N, Ai = d, Mn = null);
                    break;
                case "focusout":
                    Mn = Ai = Ht = null;
                    break;
                case "mousedown":
                    vi = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    vi = !1, ps(m, n, h);
                    break;
                case "selectionchange":
                    if (df) break;
                case "keydown":
                case "keyup":
                    ps(m, n, h)
            }
            var E;
            if (co) e: {
                switch (e) {
                    case "compositionstart":
                        var j = "onCompositionStart";
                        break e;
                    case "compositionend":
                        j = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        j = "onCompositionUpdate";
                        break e
                }
                j = void 0
            }
            else Qt ? Xu(e, n) && (j = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");j && (Zu && n.locale !== "ko" && (Qt || j !== "onCompositionStart" ? j === "onCompositionEnd" && Qt && (E = Gu()) : (it = h, so = "value" in it ? it.value : it.textContent, Qt = !0)), N = Wr(d, j), 0 < N.length && (j = new ls(j, e, null, n, h), m.push({
                event: j,
                listeners: N
            }), E ? j.data = E : (E = Yu(n), E !== null && (j.data = E)))),
            (E = $d ? bd(e, n) : ef(e, n)) && (d = Wr(d, "onBeforeInput"), 0 < d.length && (h = new ls("onBeforeInput", "beforeinput", null, n, h), m.push({
                event: h,
                listeners: d
            }), h.data = E))
        }
        sa(m, t)
    })
}

function Zn(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Wr(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            i = l.stateNode;
        l.tag === 5 && i !== null && (l = i, i = On(e, n), i != null && r.unshift(Zn(e, i, l)), i = On(e, t), i != null && r.push(Zn(e, i, l))), e = e.return
    }
    return r
}

function Bt(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function hs(e, t, n, r, l) {
    for (var i = t._reactName, o = []; n !== null && n !== r;) {
        var s = n,
            u = s.alternate,
            d = s.stateNode;
        if (u !== null && u === r) break;
        s.tag === 5 && d !== null && (s = d, l ? (u = On(n, i), u != null && o.unshift(Zn(n, u, s))) : l || (u = On(n, i), u != null && o.push(Zn(n, u, s)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var gf = /\r\n?/g,
    hf = /\u0000|\uFFFD/g;

function As(e) {
    return (typeof e == "string" ? e : "" + e).replace(gf, `
`).replace(hf, "")
}

function vr(e, t, n) {
    if (t = As(t), As(e) !== t && n) throw Error(y(425))
}

function Gr() {}
var yi = null,
    xi = null;

function wi(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Si = typeof setTimeout == "function" ? setTimeout : void 0,
    Af = typeof clearTimeout == "function" ? clearTimeout : void 0,
    vs = typeof Promise == "function" ? Promise : void 0,
    vf = typeof queueMicrotask == "function" ? queueMicrotask : typeof vs < "u" ? function(e) {
        return vs.resolve(null).then(e).catch(yf)
    } : Si;

function yf(e) {
    setTimeout(function() {
        throw e
    })
}

function Hl(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Kn(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Kn(t)
}

function ct(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function ys(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var mn = Math.random().toString(36).slice(2),
    Oe = "__reactFiber$" + mn,
    Xn = "__reactProps$" + mn,
    Ye = "__reactContainer$" + mn,
    ki = "__reactEvents$" + mn,
    xf = "__reactListeners$" + mn,
    wf = "__reactHandles$" + mn;

function Nt(e) {
    var t = e[Oe];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[Ye] || n[Oe]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = ys(e); e !== null;) {
                    if (n = e[Oe]) return n;
                    e = ys(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function lr(e) {
    return e = e[Oe] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Vt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(y(33))
}

function ml(e) {
    return e[Xn] || null
}
var Ci = [],
    Wt = -1;

function vt(e) {
    return {
        current: e
    }
}

function U(e) {
    0 > Wt || (e.current = Ci[Wt], Ci[Wt] = null, Wt--)
}

function R(e, t) {
    Wt++, Ci[Wt] = e.current, e.current = t
}
var ht = {},
    oe = vt(ht),
    pe = vt(!1),
    _t = ht;

function ln(e, t) {
    var n = e.type.contextTypes;
    if (!n) return ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        i;
    for (i in n) l[i] = t[i];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function me(e) {
    return e = e.childContextTypes, e != null
}

function Zr() {
    U(pe), U(oe)
}

function xs(e, t, n) {
    if (oe.current !== ht) throw Error(y(168));
    R(oe, t), R(pe, n)
}

function aa(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(y(108, ld(e) || "Unknown", l));
    return K({}, n, r)
}

function Xr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ht, _t = oe.current, R(oe, e), R(pe, pe.current), !0
}

function ws(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(y(169));
    n ? (e = aa(e, t, _t), r.__reactInternalMemoizedMergedChildContext = e, U(pe), U(oe), R(oe, e)) : U(pe), R(pe, n)
}
var Ve = null,
    gl = !1,
    Kl = !1;

function ca(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}

function Sf(e) {
    gl = !0, ca(e)
}

function yt() {
    if (!Kl && Ve !== null) {
        Kl = !0;
        var e = 0,
            t = L;
        try {
            var n = Ve;
            for (L = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            Ve = null, gl = !1
        } catch (l) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)), Lu(ro, yt), l
        } finally {
            L = t, Kl = !1
        }
    }
    return null
}
var Gt = [],
    Zt = 0,
    Yr = null,
    Jr = 0,
    ke = [],
    Ce = 0,
    Tt = null,
    We = 1,
    Ge = "";

function kt(e, t) {
    Gt[Zt++] = Jr, Gt[Zt++] = Yr, Yr = e, Jr = t
}

function da(e, t, n) {
    ke[Ce++] = We, ke[Ce++] = Ge, ke[Ce++] = Tt, Tt = e;
    var r = We;
    e = Ge;
    var l = 32 - Me(r) - 1;
    r &= ~(1 << l), n += 1;
    var i = 32 - Me(t) + l;
    if (30 < i) {
        var o = l - l % 5;
        i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, We = 1 << 32 - Me(t) + l | n << l | r, Ge = i + e
    } else We = 1 << i | n << l | r, Ge = e
}

function po(e) {
    e.return !== null && (kt(e, 1), da(e, 1, 0))
}

function mo(e) {
    for (; e === Yr;) Yr = Gt[--Zt], Gt[Zt] = null, Jr = Gt[--Zt], Gt[Zt] = null;
    for (; e === Tt;) Tt = ke[--Ce], ke[Ce] = null, Ge = ke[--Ce], ke[Ce] = null, We = ke[--Ce], ke[Ce] = null
}
var ye = null,
    ve = null,
    O = !1,
    Ie = null;

function fa(e, t) {
    var n = Ne(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Ss(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = ct(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tt !== null ? {
                id: We,
                overflow: Ge
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ne(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
        default:
            return !1
    }
}

function Ni(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Ei(e) {
    if (O) {
        var t = ve;
        if (t) {
            var n = t;
            if (!Ss(e, t)) {
                if (Ni(e)) throw Error(y(418));
                t = ct(n.nextSibling);
                var r = ye;
                t && Ss(e, t) ? fa(r, n) : (e.flags = e.flags & -4097 | 2, O = !1, ye = e)
            }
        } else {
            if (Ni(e)) throw Error(y(418));
            e.flags = e.flags & -4097 | 2, O = !1, ye = e
        }
    }
}

function ks(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    ye = e
}

function yr(e) {
    if (e !== ye) return !1;
    if (!O) return ks(e), O = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !wi(e.type, e.memoizedProps)), t && (t = ve)) {
        if (Ni(e)) throw pa(), Error(y(418));
        for (; t;) fa(e, t), t = ct(t.nextSibling)
    }
    if (ks(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(y(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            ve = ct(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            ve = null
        }
    } else ve = ye ? ct(e.stateNode.nextSibling) : null;
    return !0
}

function pa() {
    for (var e = ve; e;) e = ct(e.nextSibling)
}

function on() {
    ve = ye = null, O = !1
}

function go(e) {
    Ie === null ? Ie = [e] : Ie.push(e)
}
var kf = $e.ReactCurrentBatchConfig;

function Sn(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(y(309));
                var r = n.stateNode
            }
            if (!r) throw Error(y(147, e));
            var l = r,
                i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
                var s = l.refs;
                o === null ? delete s[i] : s[i] = o
            }, t._stringRef = i, t)
        }
        if (typeof e != "string") throw Error(y(284));
        if (!n._owner) throw Error(y(290, e))
    }
    return e
}

function xr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(y(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function Cs(e) {
    var t = e._init;
    return t(e._payload)
}

function ma(e) {
    function t(f, c) {
        if (e) {
            var p = f.deletions;
            p === null ? (f.deletions = [c], f.flags |= 16) : p.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = mt(f, c), f.index = 0, f.sibling = null, f
    }

    function i(f, c, p) {
        return f.index = p, e ? (p = f.alternate, p !== null ? (p = p.index, p < c ? (f.flags |= 2, c) : p) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function s(f, c, p, A) {
        return c === null || c.tag !== 6 ? (c = Jl(p, f.mode, A), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function u(f, c, p, A) {
        var S = p.type;
        return S === Ot ? h(f, c, p.props.children, A, p.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tt && Cs(S) === c.type) ? (A = l(c, p.props), A.ref = Sn(f, c, p), A.return = f, A) : (A = Fr(p.type, p.key, p.props, null, f.mode, A), A.ref = Sn(f, c, p), A.return = f, A)
    }

    function d(f, c, p, A) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== p.containerInfo || c.stateNode.implementation !== p.implementation ? (c = ql(p, f.mode, A), c.return = f, c) : (c = l(c, p.children || []), c.return = f, c)
    }

    function h(f, c, p, A, S) {
        return c === null || c.tag !== 7 ? (c = zt(p, f.mode, A, S), c.return = f, c) : (c = l(c, p), c.return = f, c)
    }

    function m(f, c, p) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Jl("" + c, f.mode, p), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case ar:
                    return p = Fr(c.type, c.key, c.props, null, f.mode, p), p.ref = Sn(f, null, c), p.return = f, p;
                case Ut:
                    return c = ql(c, f.mode, p), c.return = f, c;
                case tt:
                    var A = c._init;
                    return m(f, A(c._payload), p)
            }
            if (En(c) || An(c)) return c = zt(c, f.mode, p, null), c.return = f, c;
            xr(f, c)
        }
        return null
    }

    function g(f, c, p, A) {
        var S = c !== null ? c.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number") return S !== null ? null : s(f, c, "" + p, A);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ar:
                    return p.key === S ? u(f, c, p, A) : null;
                case Ut:
                    return p.key === S ? d(f, c, p, A) : null;
                case tt:
                    return S = p._init, g(f, c, S(p._payload), A)
            }
            if (En(p) || An(p)) return S !== null ? null : h(f, c, p, A, null);
            xr(f, p)
        }
        return null
    }

    function v(f, c, p, A, S) {
        if (typeof A == "string" && A !== "" || typeof A == "number") return f = f.get(p) || null, s(c, f, "" + A, S);
        if (typeof A == "object" && A !== null) {
            switch (A.$$typeof) {
                case ar:
                    return f = f.get(A.key === null ? p : A.key) || null, u(c, f, A, S);
                case Ut:
                    return f = f.get(A.key === null ? p : A.key) || null, d(c, f, A, S);
                case tt:
                    var N = A._init;
                    return v(f, c, p, N(A._payload), S)
            }
            if (En(A) || An(A)) return f = f.get(p) || null, h(c, f, A, S, null);
            xr(c, A)
        }
        return null
    }

    function x(f, c, p, A) {
        for (var S = null, N = null, E = c, j = c = 0, F = null; E !== null && j < p.length; j++) {
            E.index > j ? (F = E, E = null) : F = E.sibling;
            var _ = g(f, E, p[j], A);
            if (_ === null) {
                E === null && (E = F);
                break
            }
            e && E && _.alternate === null && t(f, E), c = i(_, c, j), N === null ? S = _ : N.sibling = _, N = _, E = F
        }
        if (j === p.length) return n(f, E), O && kt(f, j), S;
        if (E === null) {
            for (; j < p.length; j++) E = m(f, p[j], A), E !== null && (c = i(E, c, j), N === null ? S = E : N.sibling = E, N = E);
            return O && kt(f, j), S
        }
        for (E = r(f, E); j < p.length; j++) F = v(E, f, j, p[j], A), F !== null && (e && F.alternate !== null && E.delete(F.key === null ? j : F.key), c = i(F, c, j), N === null ? S = F : N.sibling = F, N = F);
        return e && E.forEach(function(he) {
            return t(f, he)
        }), O && kt(f, j), S
    }

    function w(f, c, p, A) {
        var S = An(p);
        if (typeof S != "function") throw Error(y(150));
        if (p = S.call(p), p == null) throw Error(y(151));
        for (var N = S = null, E = c, j = c = 0, F = null, _ = p.next(); E !== null && !_.done; j++, _ = p.next()) {
            E.index > j ? (F = E, E = null) : F = E.sibling;
            var he = g(f, E, _.value, A);
            if (he === null) {
                E === null && (E = F);
                break
            }
            e && E && he.alternate === null && t(f, E), c = i(he, c, j), N === null ? S = he : N.sibling = he, N = he, E = F
        }
        if (_.done) return n(f, E), O && kt(f, j), S;
        if (E === null) {
            for (; !_.done; j++, _ = p.next()) _ = m(f, _.value, A), _ !== null && (c = i(_, c, j), N === null ? S = _ : N.sibling = _, N = _);
            return O && kt(f, j), S
        }
        for (E = r(f, E); !_.done; j++, _ = p.next()) _ = v(E, f, j, _.value, A), _ !== null && (e && _.alternate !== null && E.delete(_.key === null ? j : _.key), c = i(_, c, j), N === null ? S = _ : N.sibling = _, N = _);
        return e && E.forEach(function(xt) {
            return t(f, xt)
        }), O && kt(f, j), S
    }

    function z(f, c, p, A) {
        if (typeof p == "object" && p !== null && p.type === Ot && p.key === null && (p = p.props.children), typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
                case ar:
                    e: {
                        for (var S = p.key, N = c; N !== null;) {
                            if (N.key === S) {
                                if (S = p.type, S === Ot) {
                                    if (N.tag === 7) {
                                        n(f, N.sibling), c = l(N, p.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === tt && Cs(S) === N.type) {
                                    n(f, N.sibling), c = l(N, p.props), c.ref = Sn(f, N, p), c.return = f, f = c;
                                    break e
                                }
                                n(f, N);
                                break
                            } else t(f, N);
                            N = N.sibling
                        }
                        p.type === Ot ? (c = zt(p.props.children, f.mode, A, p.key), c.return = f, f = c) : (A = Fr(p.type, p.key, p.props, null, f.mode, A), A.ref = Sn(f, c, p), A.return = f, f = A)
                    }
                    return o(f);
                case Ut:
                    e: {
                        for (N = p.key; c !== null;) {
                            if (c.key === N)
                                if (c.tag === 4 && c.stateNode.containerInfo === p.containerInfo && c.stateNode.implementation === p.implementation) {
                                    n(f, c.sibling), c = l(c, p.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = ql(p, f.mode, A),
                        c.return = f,
                        f = c
                    }
                    return o(f);
                case tt:
                    return N = p._init, z(f, c, N(p._payload), A)
            }
            if (En(p)) return x(f, c, p, A);
            if (An(p)) return w(f, c, p, A);
            xr(f, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, p), c.return = f, f = c) : (n(f, c), c = Jl(p, f.mode, A), c.return = f, f = c), o(f)) : n(f, c)
    }
    return z
}
var sn = ma(!0),
    ga = ma(!1),
    qr = vt(null),
    $r = null,
    Xt = null,
    ho = null;

function Ao() {
    ho = Xt = $r = null
}

function vo(e) {
    var t = qr.current;
    U(qr), e._currentValue = t
}

function ji(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function tn(e, t) {
    $r = e, ho = Xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null)
}

function je(e) {
    var t = e._currentValue;
    if (ho !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Xt === null) {
            if ($r === null) throw Error(y(308));
            Xt = e, $r.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Xt = Xt.next = e;
    return t
}
var Et = null;

function yo(e) {
    Et === null ? Et = [e] : Et.push(e)
}

function ha(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, yo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Je(e, r)
}

function Je(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var nt = !1;

function xo(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Aa(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function Ze(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function dt(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, M & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Je(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, yo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Je(e, n)
}

function Tr(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n)
    }
}

function Ns(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            i = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? l = i = o : i = i.next = o, n = n.next
            } while (n !== null);
            i === null ? l = i = t : i = i.next = t
        } else l = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function br(e, t, n, r) {
    var l = e.updateQueue;
    nt = !1;
    var i = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        s = l.shared.pending;
    if (s !== null) {
        l.shared.pending = null;
        var u = s,
            d = u.next;
        u.next = null, o === null ? i = d : o.next = d, o = u;
        var h = e.alternate;
        h !== null && (h = h.updateQueue, s = h.lastBaseUpdate, s !== o && (s === null ? h.firstBaseUpdate = d : s.next = d, h.lastBaseUpdate = u))
    }
    if (i !== null) {
        var m = l.baseState;
        o = 0, h = d = u = null, s = i;
        do {
            var g = s.lane,
                v = s.eventTime;
            if ((r & g) === g) {
                h !== null && (h = h.next = {
                    eventTime: v,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var x = e,
                        w = s;
                    switch (g = t, v = n, w.tag) {
                        case 1:
                            if (x = w.payload, typeof x == "function") {
                                m = x.call(v, m, g);
                                break e
                            }
                            m = x;
                            break e;
                        case 3:
                            x.flags = x.flags & -65537 | 128;
                        case 0:
                            if (x = w.payload, g = typeof x == "function" ? x.call(v, m, g) : x, g == null) break e;
                            m = K({}, m, g);
                            break e;
                        case 2:
                            nt = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64, g = l.effects, g === null ? l.effects = [s] : g.push(s))
            } else v = {
                eventTime: v,
                lane: g,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null
            }, h === null ? (d = h = v, u = m) : h = h.next = v, o |= g;
            if (s = s.next, s === null) {
                if (s = l.shared.pending, s === null) break;
                g = s, s = g.next, g.next = null, l.lastBaseUpdate = g, l.shared.pending = null
            }
        } while (!0);
        if (h === null && (u = m), l.baseState = u, l.firstBaseUpdate = d, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else i === null && (l.shared.lanes = 0);
        Mt |= o, e.lanes = o, e.memoizedState = m
    }
}

function Es(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(y(191, l));
                l.call(r)
            }
        }
}
var ir = {},
    He = vt(ir),
    Yn = vt(ir),
    Jn = vt(ir);

function jt(e) {
    if (e === ir) throw Error(y(174));
    return e
}

function wo(e, t) {
    switch (R(Jn, t), R(Yn, e), R(He, ir), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : si(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = si(t, e)
    }
    U(He), R(He, t)
}

function un() {
    U(He), U(Yn), U(Jn)
}

function va(e) {
    jt(Jn.current);
    var t = jt(He.current),
        n = si(t, e.type);
    t !== n && (R(Yn, e), R(He, n))
}

function So(e) {
    Yn.current === e && (U(He), U(Yn))
}
var Q = vt(0);

function el(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Vl = [];

function ko() {
    for (var e = 0; e < Vl.length; e++) Vl[e]._workInProgressVersionPrimary = null;
    Vl.length = 0
}
var Ir = $e.ReactCurrentDispatcher,
    Wl = $e.ReactCurrentBatchConfig,
    It = 0,
    H = null,
    X = null,
    q = null,
    tl = !1,
    Dn = !1,
    qn = 0,
    Cf = 0;

function re() {
    throw Error(y(321))
}

function Co(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Le(e[n], t[n])) return !1;
    return !0
}

function No(e, t, n, r, l, i) {
    if (It = i, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ir.current = e === null || e.memoizedState === null ? Pf : zf, e = n(r, l), Dn) {
        i = 0;
        do {
            if (Dn = !1, qn = 0, 25 <= i) throw Error(y(301));
            i += 1, q = X = null, t.updateQueue = null, Ir.current = _f, e = n(r, l)
        } while (Dn)
    }
    if (Ir.current = nl, t = X !== null && X.next !== null, It = 0, q = X = H = null, tl = !1, t) throw Error(y(300));
    return e
}

function Eo() {
    var e = qn !== 0;
    return qn = 0, e
}

function Ue() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return q === null ? H.memoizedState = q = e : q = q.next = e, q
}

function Pe() {
    if (X === null) {
        var e = H.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = X.next;
    var t = q === null ? H.memoizedState : q.next;
    if (t !== null) q = t, X = e;
    else {
        if (e === null) throw Error(y(310));
        X = e, e = {
            memoizedState: X.memoizedState,
            baseState: X.baseState,
            baseQueue: X.baseQueue,
            queue: X.queue,
            next: null
        }, q === null ? H.memoizedState = q = e : q = q.next = e
    }
    return q
}

function $n(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Gl(e) {
    var t = Pe(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = X,
        l = r.baseQueue,
        i = n.pending;
    if (i !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = i.next, i.next = o
        }
        r.baseQueue = l = i, n.pending = null
    }
    if (l !== null) {
        i = l.next, r = r.baseState;
        var s = o = null,
            u = null,
            d = i;
        do {
            var h = d.lane;
            if ((It & h) === h) u !== null && (u = u.next = {
                lane: 0,
                action: d.action,
                hasEagerState: d.hasEagerState,
                eagerState: d.eagerState,
                next: null
            }), r = d.hasEagerState ? d.eagerState : e(r, d.action);
            else {
                var m = {
                    lane: h,
                    action: d.action,
                    hasEagerState: d.hasEagerState,
                    eagerState: d.eagerState,
                    next: null
                };
                u === null ? (s = u = m, o = r) : u = u.next = m, H.lanes |= h, Mt |= h
            }
            d = d.next
        } while (d !== null && d !== i);
        u === null ? o = r : u.next = s, Le(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = u, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do i = l.lane, H.lanes |= i, Mt |= i, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Zl(e) {
    var t = Pe(),
        n = t.queue;
    if (n === null) throw Error(y(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        i = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do i = e(i, o.action), o = o.next; while (o !== l);
        Le(i, t.memoizedState) || (fe = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i
    }
    return [i, r]
}

function ya() {}

function xa(e, t) {
    var n = H,
        r = Pe(),
        l = t(),
        i = !Le(r.memoizedState, l);
    if (i && (r.memoizedState = l, fe = !0), r = r.queue, jo(ka.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || q !== null && q.memoizedState.tag & 1) {
        if (n.flags |= 2048, bn(9, Sa.bind(null, n, r, l, t), void 0, null), $ === null) throw Error(y(349));
        It & 30 || wa(n, t, l)
    }
    return l
}

function wa(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = H.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function Sa(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ca(t) && Na(e)
}

function ka(e, t, n) {
    return n(function() {
        Ca(t) && Na(e)
    })
}

function Ca(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !Le(e, n)
    } catch {
        return !0
    }
}

function Na(e) {
    var t = Je(e, 1);
    t !== null && De(t, e, 1, -1)
}

function js(e) {
    var t = Ue();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $n,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = jf.bind(null, H, e), [t.memoizedState, e]
}

function bn(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = H.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function Ea() {
    return Pe().memoizedState
}

function Mr(e, t, n, r) {
    var l = Ue();
    H.flags |= e, l.memoizedState = bn(1 | t, n, void 0, r === void 0 ? null : r)
}

function hl(e, t, n, r) {
    var l = Pe();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (X !== null) {
        var o = X.memoizedState;
        if (i = o.destroy, r !== null && Co(r, o.deps)) {
            l.memoizedState = bn(t, n, i, r);
            return
        }
    }
    H.flags |= e, l.memoizedState = bn(1 | t, n, i, r)
}

function Ps(e, t) {
    return Mr(8390656, 8, e, t)
}

function jo(e, t) {
    return hl(2048, 8, e, t)
}

function ja(e, t) {
    return hl(4, 2, e, t)
}

function Pa(e, t) {
    return hl(4, 4, e, t)
}

function za(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function _a(e, t, n) {
    return n = n != null ? n.concat([e]) : null, hl(4, 4, za.bind(null, t, e), n)
}

function Po() {}

function Ta(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Co(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function Ia(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Co(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function Ma(e, t, n) {
    return It & 21 ? (Le(n, t) || (n = Bu(), H.lanes |= n, Mt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n)
}

function Nf(e, t) {
    var n = L;
    L = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Wl.transition;
    Wl.transition = {};
    try {
        e(!1), t()
    } finally {
        L = n, Wl.transition = r
    }
}

function Da() {
    return Pe().memoizedState
}

function Ef(e, t, n) {
    var r = pt(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, La(e)) Ra(t, n);
    else if (n = ha(e, t, n, r), n !== null) {
        var l = ue();
        De(n, e, r, l), Fa(n, t, r)
    }
}

function jf(e, t, n) {
    var r = pt(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (La(e)) Ra(t, l);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
            var o = t.lastRenderedState,
                s = i(o, n);
            if (l.hasEagerState = !0, l.eagerState = s, Le(s, o)) {
                var u = t.interleaved;
                u === null ? (l.next = l, yo(t)) : (l.next = u.next, u.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = ha(e, t, l, r), n !== null && (l = ue(), De(n, e, r, l), Fa(n, t, r))
    }
}

function La(e) {
    var t = e.alternate;
    return e === H || t !== null && t === H
}

function Ra(e, t) {
    Dn = tl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function Fa(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, lo(e, n)
    }
}
var nl = {
        readContext: je,
        useCallback: re,
        useContext: re,
        useEffect: re,
        useImperativeHandle: re,
        useInsertionEffect: re,
        useLayoutEffect: re,
        useMemo: re,
        useReducer: re,
        useRef: re,
        useState: re,
        useDebugValue: re,
        useDeferredValue: re,
        useTransition: re,
        useMutableSource: re,
        useSyncExternalStore: re,
        useId: re,
        unstable_isNewReconciler: !1
    },
    Pf = {
        readContext: je,
        useCallback: function(e, t) {
            return Ue().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: je,
        useEffect: Ps,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Mr(4194308, 4, za.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Mr(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Mr(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = Ue();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = Ue();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = Ef.bind(null, H, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = Ue();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: js,
        useDebugValue: Po,
        useDeferredValue: function(e) {
            return Ue().memoizedState = e
        },
        useTransition: function() {
            var e = js(!1),
                t = e[0];
            return e = Nf.bind(null, e[1]), Ue().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = H,
                l = Ue();
            if (O) {
                if (n === void 0) throw Error(y(407));
                n = n()
            } else {
                if (n = t(), $ === null) throw Error(y(349));
                It & 30 || wa(r, t, n)
            }
            l.memoizedState = n;
            var i = {
                value: n,
                getSnapshot: t
            };
            return l.queue = i, Ps(ka.bind(null, r, i, e), [e]), r.flags |= 2048, bn(9, Sa.bind(null, r, i, n, t), void 0, null), n
        },
        useId: function() {
            var e = Ue(),
                t = $.identifierPrefix;
            if (O) {
                var n = Ge,
                    r = We;
                n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = qn++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = Cf++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    zf = {
        readContext: je,
        useCallback: Ta,
        useContext: je,
        useEffect: jo,
        useImperativeHandle: _a,
        useInsertionEffect: ja,
        useLayoutEffect: Pa,
        useMemo: Ia,
        useReducer: Gl,
        useRef: Ea,
        useState: function() {
            return Gl($n)
        },
        useDebugValue: Po,
        useDeferredValue: function(e) {
            var t = Pe();
            return Ma(t, X.memoizedState, e)
        },
        useTransition: function() {
            var e = Gl($n)[0],
                t = Pe().memoizedState;
            return [e, t]
        },
        useMutableSource: ya,
        useSyncExternalStore: xa,
        useId: Da,
        unstable_isNewReconciler: !1
    },
    _f = {
        readContext: je,
        useCallback: Ta,
        useContext: je,
        useEffect: jo,
        useImperativeHandle: _a,
        useInsertionEffect: ja,
        useLayoutEffect: Pa,
        useMemo: Ia,
        useReducer: Zl,
        useRef: Ea,
        useState: function() {
            return Zl($n)
        },
        useDebugValue: Po,
        useDeferredValue: function(e) {
            var t = Pe();
            return X === null ? t.memoizedState = e : Ma(t, X.memoizedState, e)
        },
        useTransition: function() {
            var e = Zl($n)[0],
                t = Pe().memoizedState;
            return [e, t]
        },
        useMutableSource: ya,
        useSyncExternalStore: xa,
        useId: Da,
        unstable_isNewReconciler: !1
    };

function _e(e, t) {
    if (e && e.defaultProps) {
        t = K({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}

function Pi(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Al = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? Rt(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = pt(e),
            i = Ze(r, l);
        i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (De(t, e, l, r), Tr(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = ue(),
            l = pt(e),
            i = Ze(r, l);
        i.tag = 1, i.payload = t, n != null && (i.callback = n), t = dt(e, i, l), t !== null && (De(t, e, l, r), Tr(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = ue(),
            r = pt(e),
            l = Ze(n, r);
        l.tag = 2, t != null && (l.callback = t), t = dt(e, l, r), t !== null && (De(t, e, r, n), Tr(t, e, r))
    }
};

function zs(e, t, n, r, l, i, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, i) : !0
}

function Ba(e, t, n) {
    var r = !1,
        l = ht,
        i = t.contextType;
    return typeof i == "object" && i !== null ? i = je(i) : (l = me(t) ? _t : oe.current, r = t.contextTypes, i = (r = r != null) ? ln(e, l) : ht), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Al, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t
}

function _s(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Al.enqueueReplaceState(t, t.state, null)
}

function zi(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, xo(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? l.context = je(i) : (i = me(t) ? _t : oe.current, l.context = ln(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Pi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Al.enqueueReplaceState(l, l.state, null), br(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function an(e, t) {
    try {
        var n = "",
            r = t;
        do n += rd(r), r = r.return; while (r);
        var l = n
    } catch (i) {
        l = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Xl(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ? ? null,
        digest: t ? ? null
    }
}

function _i(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Tf = typeof WeakMap == "function" ? WeakMap : Map;

function Ua(e, t, n) {
    n = Ze(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ll || (ll = !0, Oi = r), _i(e, t)
    }, n
}

function Oa(e, t, n) {
    n = Ze(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            _i(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        _i(e, t), typeof r != "function" && (ft === null ? ft = new Set([this]) : ft.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function Ts(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Tf;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Wf.bind(null, e, t, n), t.then(e, e))
}

function Is(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function Ms(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ze(-1, 1), t.tag = 2, dt(n, t, 1))), n.lanes |= 1), e)
}
var If = $e.ReactCurrentOwner,
    fe = !1;

function se(e, t, n, r) {
    t.child = e === null ? ga(t, null, n, r) : sn(t, e.child, n, r)
}

function Ds(e, t, n, r, l) {
    n = n.render;
    var i = t.ref;
    return tn(t, l), r = No(e, t, n, r, i, l), n = Eo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (O && n && po(t), t.flags |= 1, se(e, t, r, l), t.child)
}

function Ls(e, t, n, r, l) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !Ro(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Qa(e, t, i, r, l)) : (e = Fr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (i = e.child, !(e.lanes & l)) {
        var o = i.memoizedProps;
        if (n = n.compare, n = n !== null ? n : Wn, n(o, r) && e.ref === t.ref) return qe(e, t, l)
    }
    return t.flags |= 1, e = mt(i, r), e.ref = t.ref, e.return = t, t.child = e
}

function Qa(e, t, n, r, l) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (Wn(i, r) && e.ref === t.ref)
            if (fe = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
            else return t.lanes = e.lanes, qe(e, t, l)
    }
    return Ti(e, t, n, r, l)
}

function Ha(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, R(Jt, Ae), Ae |= n;
        else {
            if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, R(Jt, Ae), Ae |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = i !== null ? i.baseLanes : n, R(Jt, Ae), Ae |= r
        }
    else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, R(Jt, Ae), Ae |= r;
    return se(e, t, l, n), t.child
}

function Ka(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ti(e, t, n, r, l) {
    var i = me(n) ? _t : oe.current;
    return i = ln(t, i), tn(t, l), n = No(e, t, n, r, i, l), r = Eo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, qe(e, t, l)) : (O && r && po(t), t.flags |= 1, se(e, t, n, l), t.child)
}

function Rs(e, t, n, r, l) {
    if (me(n)) {
        var i = !0;
        Xr(t)
    } else i = !1;
    if (tn(t, l), t.stateNode === null) Dr(e, t), Ba(t, n, r), zi(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            s = t.memoizedProps;
        o.props = s;
        var u = o.context,
            d = n.contextType;
        typeof d == "object" && d !== null ? d = je(d) : (d = me(n) ? _t : oe.current, d = ln(t, d));
        var h = n.getDerivedStateFromProps,
            m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== r || u !== d) && _s(t, o, r, d), nt = !1;
        var g = t.memoizedState;
        o.state = g, br(t, r, o, l), u = t.memoizedState, s !== r || g !== u || pe.current || nt ? (typeof h == "function" && (Pi(t, n, h, r), u = t.memoizedState), (s = nt || zs(t, n, s, r, g, u, d)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = u), o.props = r, o.state = u, o.context = d, r = s) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Aa(e, t), s = t.memoizedProps, d = t.type === t.elementType ? s : _e(t.type, s), o.props = d, m = t.pendingProps, g = o.context, u = n.contextType, typeof u == "object" && u !== null ? u = je(u) : (u = me(n) ? _t : oe.current, u = ln(t, u));
        var v = n.getDerivedStateFromProps;
        (h = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (s !== m || g !== u) && _s(t, o, r, u), nt = !1, g = t.memoizedState, o.state = g, br(t, r, o, l);
        var x = t.memoizedState;
        s !== m || g !== x || pe.current || nt ? (typeof v == "function" && (Pi(t, n, v, r), x = t.memoizedState), (d = nt || zs(t, n, d, r, g, x, u) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, x, u), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, x, u)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = x), o.props = r, o.state = x, o.context = u, r = d) : (typeof o.componentDidUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && g === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Ii(e, t, n, r, i, l)
}

function Ii(e, t, n, r, l, i) {
    Ka(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && ws(t, n, !1), qe(e, t, i);
    r = t.stateNode, If.current = t;
    var s = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = sn(t, e.child, null, i), t.child = sn(t, null, s, i)) : se(e, t, s, i), t.memoizedState = r.state, l && ws(t, n, !0), t.child
}

function Va(e) {
    var t = e.stateNode;
    t.pendingContext ? xs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && xs(e, t.context, !1), wo(e, t.containerInfo)
}

function Fs(e, t, n, r, l) {
    return on(), go(l), t.flags |= 256, se(e, t, n, r), t.child
}
var Mi = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Di(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Wa(e, t, n) {
    var r = t.pendingProps,
        l = Q.current,
        i = !1,
        o = (t.flags & 128) !== 0,
        s;
    if ((s = o) || (s = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), s ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), R(Q, l & 1), e === null) return Ei(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = xl(o, r, 0, null), e = zt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Di(n), t.memoizedState = Mi, e) : zo(t, o));
    if (l = e.memoizedState, l !== null && (s = l.dehydrated, s !== null)) return Mf(e, t, o, r, s, l, n);
    if (i) {
        i = r.fallback, o = t.mode, l = e.child, s = l.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = u, t.deletions = null) : (r = mt(l, u), r.subtreeFlags = l.subtreeFlags & 14680064), s !== null ? i = mt(s, i) : (i = zt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Di(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Mi, r
    }
    return i = e.child, e = i.sibling, r = mt(i, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function zo(e, t) {
    return t = xl({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function wr(e, t, n, r) {
    return r !== null && go(r), sn(t, e.child, null, n), e = zo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Mf(e, t, n, r, l, i, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Xl(Error(y(422))), wr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = xl({
        mode: "visible",
        children: r.children
    }, l, 0, null), i = zt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && sn(t, e.child, null, o), t.child.memoizedState = Di(o), t.memoizedState = Mi, i);
    if (!(t.mode & 1)) return wr(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var s = r.dgst;
        return r = s, i = Error(y(419)), r = Xl(i, r, void 0), wr(e, t, o, r)
    }
    if (s = (o & e.childLanes) !== 0, fe || s) {
        if (r = $, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, Je(e, l), De(r, e, l, -1))
        }
        return Lo(), r = Xl(Error(y(421))), wr(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Gf.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, ve = ct(l.nextSibling), ye = t, O = !0, Ie = null, e !== null && (ke[Ce++] = We, ke[Ce++] = Ge, ke[Ce++] = Tt, We = e.id, Ge = e.overflow, Tt = t), t = zo(t, r.children), t.flags |= 4096, t)
}

function Bs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ji(e.return, t, n)
}

function Yl(e, t, n, r, l) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l)
}

function Ga(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        i = r.tail;
    if (se(e, t, r.children, n), r = Q.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && Bs(e, n, t);
            else if (e.tag === 19) Bs(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (R(Q, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && el(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Yl(t, !1, l, n, i);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && el(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Yl(t, !0, n, null, i);
            break;
        case "together":
            Yl(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Dr(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function qe(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Mt |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(y(153));
    if (t.child !== null) {
        for (e = t.child, n = mt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = mt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Df(e, t, n) {
    switch (t.tag) {
        case 3:
            Va(t), on();
            break;
        case 5:
            va(t);
            break;
        case 1:
            me(t.type) && Xr(t);
            break;
        case 4:
            wo(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            R(qr, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (R(Q, Q.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Wa(e, t, n) : (R(Q, Q.current & 1), e = qe(e, t, n), e !== null ? e.sibling : null);
            R(Q, Q.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Ga(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), R(Q, Q.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Ha(e, t, n)
    }
    return qe(e, t, n)
}
var Za, Li, Xa, Ya;
Za = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Li = function() {};
Xa = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, jt(He.current);
        var i = null;
        switch (n) {
            case "input":
                l = ri(e, l), r = ri(e, r), i = [];
                break;
            case "select":
                l = K({}, l, {
                    value: void 0
                }), r = K({}, r, {
                    value: void 0
                }), i = [];
                break;
            case "textarea":
                l = oi(e, l), r = oi(e, r), i = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Gr)
        }
        ui(n, r);
        var o;
        n = null;
        for (d in l)
            if (!r.hasOwnProperty(d) && l.hasOwnProperty(d) && l[d] != null)
                if (d === "style") {
                    var s = l[d];
                    for (o in s) s.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else d !== "dangerouslySetInnerHTML" && d !== "children" && d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (Bn.hasOwnProperty(d) ? i || (i = []) : (i = i || []).push(d, null));
        for (d in r) {
            var u = r[d];
            if (s = l != null ? l[d] : void 0, r.hasOwnProperty(d) && u !== s && (u != null || s != null))
                if (d === "style")
                    if (s) {
                        for (o in s) !s.hasOwnProperty(o) || u && u.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in u) u.hasOwnProperty(o) && s[o] !== u[o] && (n || (n = {}), n[o] = u[o])
                    } else n || (i || (i = []), i.push(d, n)), n = u;
            else d === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, s = s ? s.__html : void 0, u != null && s !== u && (i = i || []).push(d, u)) : d === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(d, "" + u) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && (Bn.hasOwnProperty(d) ? (u != null && d === "onScroll" && B("scroll", e), i || s === u || (i = [])) : (i = i || []).push(d, u))
        }
        n && (i = i || []).push("style", n);
        var d = i;
        (t.updateQueue = d) && (t.flags |= 4)
    }
};
Ya = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function kn(e, t) {
    if (!O) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function le(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Lf(e, t, n) {
    var r = t.pendingProps;
    switch (mo(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return le(t), null;
        case 1:
            return me(t.type) && Zr(), le(t), null;
        case 3:
            return r = t.stateNode, un(), U(pe), U(oe), ko(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (yr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ie !== null && (Ki(Ie), Ie = null))), Li(e, t), le(t), null;
        case 5:
            So(t);
            var l = jt(Jn.current);
            if (n = t.type, e !== null && t.stateNode != null) Xa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(y(166));
                    return le(t), null
                }
                if (e = jt(He.current), yr(t)) {
                    r = t.stateNode, n = t.type;
                    var i = t.memoizedProps;
                    switch (r[Oe] = t, r[Xn] = i, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            B("cancel", r), B("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            B("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < Pn.length; l++) B(Pn[l], r);
                            break;
                        case "source":
                            B("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            B("error", r), B("load", r);
                            break;
                        case "details":
                            B("toggle", r);
                            break;
                        case "input":
                            Zo(r, i), B("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!i.multiple
                            }, B("invalid", r);
                            break;
                        case "textarea":
                            Yo(r, i), B("invalid", r)
                    }
                    ui(n, i), l = null;
                    for (var o in i)
                        if (i.hasOwnProperty(o)) {
                            var s = i[o];
                            o === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && vr(r.textContent, s, e), l = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && vr(r.textContent, s, e), l = ["children", "" + s]) : Bn.hasOwnProperty(o) && s != null && o === "onScroll" && B("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            cr(r), Xo(r, i, !0);
                            break;
                        case "textarea":
                            cr(r), Jo(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof i.onClick == "function" && (r.onclick = Gr)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ku(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Oe] = t, e[Xn] = r, Za(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = ai(n, r), n) {
                            case "dialog":
                                B("cancel", e), B("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                B("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < Pn.length; l++) B(Pn[l], e);
                                l = r;
                                break;
                            case "source":
                                B("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                B("error", e), B("load", e), l = r;
                                break;
                            case "details":
                                B("toggle", e), l = r;
                                break;
                            case "input":
                                Zo(e, r), l = ri(e, r), B("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = K({}, r, {
                                    value: void 0
                                }), B("invalid", e);
                                break;
                            case "textarea":
                                Yo(e, r), l = oi(e, r), B("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        ui(n, l),
                        s = l;
                        for (i in s)
                            if (s.hasOwnProperty(i)) {
                                var u = s[i];
                                i === "style" ? Eu(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0, u != null && Cu(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && Un(e, u) : typeof u == "number" && Un(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Bn.hasOwnProperty(i) ? u != null && i === "onScroll" && B("scroll", e) : u != null && $i(e, i, u, o))
                            }
                        switch (n) {
                            case "input":
                                cr(e), Xo(e, r, !1);
                                break;
                            case "textarea":
                                cr(e), Jo(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + gt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, i = r.value, i != null ? qt(e, !!r.multiple, i, !1) : r.defaultValue != null && qt(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Gr)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return le(t), null;
        case 6:
            if (e && t.stateNode != null) Ya(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
                if (n = jt(Jn.current), jt(He.current), yr(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[Oe] = t, (i = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
                        case 3:
                            vr(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && vr(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    i && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Oe] = t, t.stateNode = r
            }
            return le(t), null;
        case 13:
            if (U(Q), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (O && ve !== null && t.mode & 1 && !(t.flags & 128)) pa(), on(), t.flags |= 98560, i = !1;
                else if (i = yr(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!i) throw Error(y(318));
                        if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(y(317));
                        i[Oe] = t
                    } else on(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    le(t), i = !1
                } else Ie !== null && (Ki(Ie), Ie = null), i = !0;
                if (!i) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || Q.current & 1 ? Y === 0 && (Y = 3) : Lo())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
        case 4:
            return un(), Li(e, t), e === null && Gn(t.stateNode.containerInfo), le(t), null;
        case 10:
            return vo(t.type._context), le(t), null;
        case 17:
            return me(t.type) && Zr(), le(t), null;
        case 19:
            if (U(Q), i = t.memoizedState, i === null) return le(t), null;
            if (r = (t.flags & 128) !== 0, o = i.rendering, o === null)
                if (r) kn(i, !1);
                else {
                    if (Y !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = el(e), o !== null) {
                                for (t.flags |= 128, kn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return R(Q, Q.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    i.tail !== null && G() > cn && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = el(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), kn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !O) return le(t), null
                    } else 2 * G() - i.renderingStartTime > cn && n !== 1073741824 && (t.flags |= 128, r = !0, kn(i, !1), t.lanes = 4194304);
                i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o)
            }
            return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = G(), t.sibling = null, n = Q.current, R(Q, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
        case 22:
        case 23:
            return Do(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ae & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(y(156, t.tag))
}

function Rf(e, t) {
    switch (mo(t), t.tag) {
        case 1:
            return me(t.type) && Zr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return un(), U(pe), U(oe), ko(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return So(t), null;
        case 13:
            if (U(Q), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(y(340));
                on()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return U(Q), null;
        case 4:
            return un(), null;
        case 10:
            return vo(t.type._context), null;
        case 22:
        case 23:
            return Do(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var Sr = !1,
    ie = !1,
    Ff = typeof WeakSet == "function" ? WeakSet : Set,
    k = null;

function Yt(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            V(e, t, r)
        } else n.current = null
}

function Ri(e, t, n) {
    try {
        n()
    } catch (r) {
        V(e, t, r)
    }
}
var Us = !1;

function Bf(e, t) {
    if (yi = Kr, e = ea(), fo(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    i = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, i.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    s = -1,
                    u = -1,
                    d = 0,
                    h = 0,
                    m = e,
                    g = null;
                t: for (;;) {
                    for (var v; m !== n || l !== 0 && m.nodeType !== 3 || (s = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (u = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (v = m.firstChild) !== null;) g = m, m = v;
                    for (;;) {
                        if (m === e) break t;
                        if (g === n && ++d === l && (s = o), g === i && ++h === r && (u = o), (v = m.nextSibling) !== null) break;
                        m = g, g = m.parentNode
                    }
                    m = v
                }
                n = s === -1 || u === -1 ? null : {
                    start: s,
                    end: u
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (xi = {
            focusedElem: e,
            selectionRange: n
        }, Kr = !1, k = t; k !== null;)
        if (t = k, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, k = e;
        else
            for (; k !== null;) {
                t = k;
                try {
                    var x = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (x !== null) {
                                var w = x.memoizedProps,
                                    z = x.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : _e(t.type, w), z);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(y(163))
                    }
                } catch (A) {
                    V(t, t.return, A)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, k = e;
                    break
                }
                k = t.return
            }
    return x = Us, Us = !1, x
}

function Ln(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var i = l.destroy;
                l.destroy = void 0, i !== void 0 && Ri(t, n, i)
            }
            l = l.next
        } while (l !== r)
    }
}

function vl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Fi(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function Ja(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Ja(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Oe], delete t[Xn], delete t[ki], delete t[xf], delete t[wf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function qa(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function Os(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || qa(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Bi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Gr));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Bi(e, t, n), e = e.sibling; e !== null;) Bi(e, t, n), e = e.sibling
}

function Ui(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ui(e, t, n), e = e.sibling; e !== null;) Ui(e, t, n), e = e.sibling
}
var b = null,
    Te = !1;

function et(e, t, n) {
    for (n = n.child; n !== null;) $a(e, t, n), n = n.sibling
}

function $a(e, t, n) {
    if (Qe && typeof Qe.onCommitFiberUnmount == "function") try {
        Qe.onCommitFiberUnmount(cl, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ie || Yt(n, t);
        case 6:
            var r = b,
                l = Te;
            b = null, et(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
            break;
        case 18:
            b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Hl(e.parentNode, n) : e.nodeType === 1 && Hl(e, n), Kn(e)) : Hl(b, n.stateNode));
            break;
        case 4:
            r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, et(e, t, n), b = r, Te = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ie && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var i = l,
                        o = i.destroy;
                    i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ri(n, t, o), l = l.next
                } while (l !== r)
            }
            et(e, t, n);
            break;
        case 1:
            if (!ie && (Yt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (s) {
                V(n, t, s)
            }
            et(e, t, n);
            break;
        case 21:
            et(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ie = (r = ie) || n.memoizedState !== null, et(e, t, n), ie = r) : et(e, t, n);
            break;
        default:
            et(e, t, n)
    }
}

function Qs(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ff), t.forEach(function(r) {
            var l = Zf.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function ze(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var i = e,
                    o = t,
                    s = o;
                e: for (; s !== null;) {
                    switch (s.tag) {
                        case 5:
                            b = s.stateNode, Te = !1;
                            break e;
                        case 3:
                            b = s.stateNode.containerInfo, Te = !0;
                            break e;
                        case 4:
                            b = s.stateNode.containerInfo, Te = !0;
                            break e
                    }
                    s = s.return
                }
                if (b === null) throw Error(y(160));
                $a(i, o, l), b = null, Te = !1;
                var u = l.alternate;
                u !== null && (u.return = null), l.return = null
            } catch (d) {
                V(l, t, d)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) ba(t, e), t = t.sibling
}

function ba(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (ze(t, e), Fe(e), r & 4) {
                try {
                    Ln(3, e, e.return), vl(3, e)
                } catch (w) {
                    V(e, e.return, w)
                }
                try {
                    Ln(5, e, e.return)
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            break;
        case 1:
            ze(t, e), Fe(e), r & 512 && n !== null && Yt(n, n.return);
            break;
        case 5:
            if (ze(t, e), Fe(e), r & 512 && n !== null && Yt(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Un(l, "")
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var i = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : i,
                    s = e.type,
                    u = e.updateQueue;
                if (e.updateQueue = null, u !== null) try {
                    s === "input" && i.type === "radio" && i.name != null && wu(l, i), ai(s, o);
                    var d = ai(s, i);
                    for (o = 0; o < u.length; o += 2) {
                        var h = u[o],
                            m = u[o + 1];
                        h === "style" ? Eu(l, m) : h === "dangerouslySetInnerHTML" ? Cu(l, m) : h === "children" ? Un(l, m) : $i(l, h, m, d)
                    }
                    switch (s) {
                        case "input":
                            li(l, i);
                            break;
                        case "textarea":
                            Su(l, i);
                            break;
                        case "select":
                            var g = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!i.multiple;
                            var v = i.value;
                            v != null ? qt(l, !!i.multiple, v, !1) : g !== !!i.multiple && (i.defaultValue != null ? qt(l, !!i.multiple, i.defaultValue, !0) : qt(l, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    l[Xn] = i
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            break;
        case 6:
            if (ze(t, e), Fe(e), r & 4) {
                if (e.stateNode === null) throw Error(y(162));
                l = e.stateNode, i = e.memoizedProps;
                try {
                    l.nodeValue = i
                } catch (w) {
                    V(e, e.return, w)
                }
            }
            break;
        case 3:
            if (ze(t, e), Fe(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Kn(t.containerInfo)
            } catch (w) {
                V(e, e.return, w)
            }
            break;
        case 4:
            ze(t, e), Fe(e);
            break;
        case 13:
            ze(t, e), Fe(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Io = G())), r & 4 && Qs(e);
            break;
        case 22:
            if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ie = (d = ie) || h, ze(t, e), ie = d) : ze(t, e), Fe(e), r & 8192) {
                if (d = e.memoizedState !== null, (e.stateNode.isHidden = d) && !h && e.mode & 1)
                    for (k = e, h = e.child; h !== null;) {
                        for (m = k = h; k !== null;) {
                            switch (g = k, v = g.child, g.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    Ln(4, g, g.return);
                                    break;
                                case 1:
                                    Yt(g, g.return);
                                    var x = g.stateNode;
                                    if (typeof x.componentWillUnmount == "function") {
                                        r = g, n = g.return;
                                        try {
                                            t = r, x.props = t.memoizedProps, x.state = t.memoizedState, x.componentWillUnmount()
                                        } catch (w) {
                                            V(r, n, w)
                                        }
                                    }
                                    break;
                                case 5:
                                    Yt(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        Ks(m);
                                        continue
                                    }
                            }
                            v !== null ? (v.return = g, k = v) : Ks(m)
                        }
                        h = h.sibling
                    }
                e: for (h = null, m = e;;) {
                    if (m.tag === 5) {
                        if (h === null) {
                            h = m;
                            try {
                                l = m.stateNode, d ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = m.stateNode, u = m.memoizedProps.style, o = u != null && u.hasOwnProperty("display") ? u.display : null, s.style.display = Nu("display", o))
                            } catch (w) {
                                V(e, e.return, w)
                            }
                        }
                    } else if (m.tag === 6) {
                        if (h === null) try {
                            m.stateNode.nodeValue = d ? "" : m.memoizedProps
                        } catch (w) {
                            V(e, e.return, w)
                        }
                    } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
                        m.child.return = m, m = m.child;
                        continue
                    }
                    if (m === e) break e;
                    for (; m.sibling === null;) {
                        if (m.return === null || m.return === e) break e;
                        h === m && (h = null), m = m.return
                    }
                    h === m && (h = null), m.sibling.return = m.return, m = m.sibling
                }
            }
            break;
        case 19:
            ze(t, e), Fe(e), r & 4 && Qs(e);
            break;
        case 21:
            break;
        default:
            ze(t, e), Fe(e)
    }
}

function Fe(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (qa(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(y(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Un(l, ""), r.flags &= -33);
                    var i = Os(e);
                    Ui(e, i, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        s = Os(e);
                    Bi(e, s, o);
                    break;
                default:
                    throw Error(y(161))
            }
        }
        catch (u) {
            V(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function Uf(e, t, n) {
    k = e, ec(e)
}

function ec(e, t, n) {
    for (var r = (e.mode & 1) !== 0; k !== null;) {
        var l = k,
            i = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || Sr;
            if (!o) {
                var s = l.alternate,
                    u = s !== null && s.memoizedState !== null || ie;
                s = Sr;
                var d = ie;
                if (Sr = o, (ie = u) && !d)
                    for (k = l; k !== null;) o = k, u = o.child, o.tag === 22 && o.memoizedState !== null ? Vs(l) : u !== null ? (u.return = o, k = u) : Vs(l);
                for (; i !== null;) k = i, ec(i), i = i.sibling;
                k = l, Sr = s, ie = d
            }
            Hs(e)
        } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, k = i) : Hs(e)
    }
}

function Hs(e) {
    for (; k !== null;) {
        var t = k;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ie || vl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ie)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : _e(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Es(t, i, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            Es(t, o, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    u.autoFocus && n.focus();
                                    break;
                                case "img":
                                    u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var d = t.alternate;
                            if (d !== null) {
                                var h = d.memoizedState;
                                if (h !== null) {
                                    var m = h.dehydrated;
                                    m !== null && Kn(m)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(y(163))
                }
                ie || t.flags & 512 && Fi(t)
            } catch (g) {
                V(t, t.return, g)
            }
        }
        if (t === e) {
            k = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, k = n;
            break
        }
        k = t.return
    }
}

function Ks(e) {
    for (; k !== null;) {
        var t = k;
        if (t === e) {
            k = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, k = n;
            break
        }
        k = t.return
    }
}

function Vs(e) {
    for (; k !== null;) {
        var t = k;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        vl(4, t)
                    } catch (u) {
                        V(t, n, u)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (u) {
                            V(t, l, u)
                        }
                    }
                    var i = t.return;
                    try {
                        Fi(t)
                    } catch (u) {
                        V(t, i, u)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Fi(t)
                    } catch (u) {
                        V(t, o, u)
                    }
            }
        } catch (u) {
            V(t, t.return, u)
        }
        if (t === e) {
            k = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return, k = s;
            break
        }
        k = t.return
    }
}
var Of = Math.ceil,
    rl = $e.ReactCurrentDispatcher,
    _o = $e.ReactCurrentOwner,
    Ee = $e.ReactCurrentBatchConfig,
    M = 0,
    $ = null,
    Z = null,
    ee = 0,
    Ae = 0,
    Jt = vt(0),
    Y = 0,
    er = null,
    Mt = 0,
    yl = 0,
    To = 0,
    Rn = null,
    de = null,
    Io = 0,
    cn = 1 / 0,
    Ke = null,
    ll = !1,
    Oi = null,
    ft = null,
    kr = !1,
    ot = null,
    il = 0,
    Fn = 0,
    Qi = null,
    Lr = -1,
    Rr = 0;

function ue() {
    return M & 6 ? G() : Lr !== -1 ? Lr : Lr = G()
}

function pt(e) {
    return e.mode & 1 ? M & 2 && ee !== 0 ? ee & -ee : kf.transition !== null ? (Rr === 0 && (Rr = Bu()), Rr) : (e = L, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Wu(e.type)), e) : 1
}

function De(e, t, n, r) {
    if (50 < Fn) throw Fn = 0, Qi = null, Error(y(185));
    nr(e, n, r), (!(M & 2) || e !== $) && (e === $ && (!(M & 2) && (yl |= n), Y === 4 && lt(e, ee)), ge(e, r), n === 1 && M === 0 && !(t.mode & 1) && (cn = G() + 500, gl && yt()))
}

function ge(e, t) {
    var n = e.callbackNode;
    Sd(e, t);
    var r = Hr(e, e === $ ? ee : 0);
    if (r === 0) n !== null && bo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && bo(n), t === 1) e.tag === 0 ? Sf(Ws.bind(null, e)) : ca(Ws.bind(null, e)), vf(function() {
            !(M & 6) && yt()
        }), n = null;
        else {
            switch (Uu(r)) {
                case 1:
                    n = ro;
                    break;
                case 4:
                    n = Ru;
                    break;
                case 16:
                    n = Qr;
                    break;
                case 536870912:
                    n = Fu;
                    break;
                default:
                    n = Qr
            }
            n = uc(n, tc.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function tc(e, t) {
    if (Lr = -1, Rr = 0, M & 6) throw Error(y(327));
    var n = e.callbackNode;
    if (nn() && e.callbackNode !== n) return null;
    var r = Hr(e, e === $ ? ee : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
    else {
        t = r;
        var l = M;
        M |= 2;
        var i = rc();
        ($ !== e || ee !== t) && (Ke = null, cn = G() + 500, Pt(e, t));
        do try {
            Kf();
            break
        } catch (s) {
            nc(e, s)
        }
        while (!0);
        Ao(), rl.current = i, M = l, Z !== null ? t = 0 : ($ = null, ee = 0, t = Y)
    }
    if (t !== 0) {
        if (t === 2 && (l = mi(e), l !== 0 && (r = l, t = Hi(e, l))), t === 1) throw n = er, Pt(e, 0), lt(e, r), ge(e, G()), n;
        if (t === 6) lt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !Qf(l) && (t = ol(e, r), t === 2 && (i = mi(e), i !== 0 && (r = i, t = Hi(e, i))), t === 1)) throw n = er, Pt(e, 0), lt(e, r), ge(e, G()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(y(345));
                case 2:
                    Ct(e, de, Ke);
                    break;
                case 3:
                    if (lt(e, r), (r & 130023424) === r && (t = Io + 500 - G(), 10 < t)) {
                        if (Hr(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            ue(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = Si(Ct.bind(null, e, de, Ke), t);
                        break
                    }
                    Ct(e, de, Ke);
                    break;
                case 4:
                    if (lt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - Me(r);
                        i = 1 << o, o = t[o], o > l && (l = o), r &= ~i
                    }
                    if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Of(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = Si(Ct.bind(null, e, de, Ke), r);
                        break
                    }
                    Ct(e, de, Ke);
                    break;
                case 5:
                    Ct(e, de, Ke);
                    break;
                default:
                    throw Error(y(329))
            }
        }
    }
    return ge(e, G()), e.callbackNode === n ? tc.bind(null, e) : null
}

function Hi(e, t) {
    var n = Rn;
    return e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256), e = ol(e, t), e !== 2 && (t = de, de = n, t !== null && Ki(t)), e
}

function Ki(e) {
    de === null ? de = e : de.push.apply(de, e)
}

function Qf(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        i = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!Le(i(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function lt(e, t) {
    for (t &= ~To, t &= ~yl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - Me(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function Ws(e) {
    if (M & 6) throw Error(y(327));
    nn();
    var t = Hr(e, 0);
    if (!(t & 1)) return ge(e, G()), null;
    var n = ol(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = mi(e);
        r !== 0 && (t = r, n = Hi(e, r))
    }
    if (n === 1) throw n = er, Pt(e, 0), lt(e, t), ge(e, G()), n;
    if (n === 6) throw Error(y(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Ct(e, de, Ke), ge(e, G()), null
}

function Mo(e, t) {
    var n = M;
    M |= 1;
    try {
        return e(t)
    } finally {
        M = n, M === 0 && (cn = G() + 500, gl && yt())
    }
}

function Dt(e) {
    ot !== null && ot.tag === 0 && !(M & 6) && nn();
    var t = M;
    M |= 1;
    var n = Ee.transition,
        r = L;
    try {
        if (Ee.transition = null, L = 1, e) return e()
    } finally {
        L = r, Ee.transition = n, M = t, !(M & 6) && yt()
    }
}

function Do() {
    Ae = Jt.current, U(Jt)
}

function Pt(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, Af(n)), Z !== null)
        for (n = Z.return; n !== null;) {
            var r = n;
            switch (mo(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Zr();
                    break;
                case 3:
                    un(), U(pe), U(oe), ko();
                    break;
                case 5:
                    So(r);
                    break;
                case 4:
                    un();
                    break;
                case 13:
                    U(Q);
                    break;
                case 19:
                    U(Q);
                    break;
                case 10:
                    vo(r.type._context);
                    break;
                case 22:
                case 23:
                    Do()
            }
            n = n.return
        }
    if ($ = e, Z = e = mt(e.current, null), ee = Ae = t, Y = 0, er = null, To = yl = Mt = 0, de = Rn = null, Et !== null) {
        for (t = 0; t < Et.length; t++)
            if (n = Et[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    i = n.pending;
                if (i !== null) {
                    var o = i.next;
                    i.next = l, r.next = o
                }
                n.pending = r
            }
        Et = null
    }
    return e
}

function nc(e, t) {
    do {
        var n = Z;
        try {
            if (Ao(), Ir.current = nl, tl) {
                for (var r = H.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                tl = !1
            }
            if (It = 0, q = X = H = null, Dn = !1, qn = 0, _o.current = null, n === null || n.return === null) {
                Y = 1, er = t, Z = null;
                break
            }
            e: {
                var i = e,
                    o = n.return,
                    s = n,
                    u = t;
                if (t = ee, s.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
                    var d = u,
                        h = s,
                        m = h.tag;
                    if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
                        var g = h.alternate;
                        g ? (h.updateQueue = g.updateQueue, h.memoizedState = g.memoizedState, h.lanes = g.lanes) : (h.updateQueue = null, h.memoizedState = null)
                    }
                    var v = Is(o);
                    if (v !== null) {
                        v.flags &= -257, Ms(v, o, s, i, t), v.mode & 1 && Ts(i, d, t), t = v, u = d;
                        var x = t.updateQueue;
                        if (x === null) {
                            var w = new Set;
                            w.add(u), t.updateQueue = w
                        } else x.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Ts(i, d, t), Lo();
                            break e
                        }
                        u = Error(y(426))
                    }
                } else if (O && s.mode & 1) {
                    var z = Is(o);
                    if (z !== null) {
                        !(z.flags & 65536) && (z.flags |= 256), Ms(z, o, s, i, t), go(an(u, s));
                        break e
                    }
                }
                i = u = an(u, s),
                Y !== 4 && (Y = 2),
                Rn === null ? Rn = [i] : Rn.push(i),
                i = o;do {
                    switch (i.tag) {
                        case 3:
                            i.flags |= 65536, t &= -t, i.lanes |= t;
                            var f = Ua(i, u, t);
                            Ns(i, f);
                            break e;
                        case 1:
                            s = u;
                            var c = i.type,
                                p = i.stateNode;
                            if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (ft === null || !ft.has(p)))) {
                                i.flags |= 65536, t &= -t, i.lanes |= t;
                                var A = Oa(i, s, t);
                                Ns(i, A);
                                break e
                            }
                    }
                    i = i.return
                } while (i !== null)
            }
            ic(n)
        } catch (S) {
            t = S, Z === n && n !== null && (Z = n = n.return);
            continue
        }
        break
    } while (!0)
}

function rc() {
    var e = rl.current;
    return rl.current = nl, e === null ? nl : e
}

function Lo() {
    (Y === 0 || Y === 3 || Y === 2) && (Y = 4), $ === null || !(Mt & 268435455) && !(yl & 268435455) || lt($, ee)
}

function ol(e, t) {
    var n = M;
    M |= 2;
    var r = rc();
    ($ !== e || ee !== t) && (Ke = null, Pt(e, t));
    do try {
        Hf();
        break
    } catch (l) {
        nc(e, l)
    }
    while (!0);
    if (Ao(), M = n, rl.current = r, Z !== null) throw Error(y(261));
    return $ = null, ee = 0, Y
}

function Hf() {
    for (; Z !== null;) lc(Z)
}

function Kf() {
    for (; Z !== null && !pd();) lc(Z)
}

function lc(e) {
    var t = sc(e.alternate, e, Ae);
    e.memoizedProps = e.pendingProps, t === null ? ic(e) : Z = t, _o.current = null
}

function ic(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = Rf(n, t), n !== null) {
                n.flags &= 32767, Z = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                Y = 6, Z = null;
                return
            }
        } else if (n = Lf(n, t, Ae), n !== null) {
            Z = n;
            return
        }
        if (t = t.sibling, t !== null) {
            Z = t;
            return
        }
        Z = t = e
    } while (t !== null);
    Y === 0 && (Y = 5)
}

function Ct(e, t, n) {
    var r = L,
        l = Ee.transition;
    try {
        Ee.transition = null, L = 1, Vf(e, t, n, r)
    } finally {
        Ee.transition = l, L = r
    }
    return null
}

function Vf(e, t, n, r) {
    do nn(); while (ot !== null);
    if (M & 6) throw Error(y(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(y(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (kd(e, i), e === $ && (Z = $ = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kr || (kr = !0, uc(Qr, function() {
            return nn(), null
        })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
        i = Ee.transition, Ee.transition = null;
        var o = L;
        L = 1;
        var s = M;
        M |= 4, _o.current = null, Bf(e, n), ba(n, e), cf(xi), Kr = !!yi, xi = yi = null, e.current = n, Uf(n), md(), M = s, L = o, Ee.transition = i
    } else e.current = n;
    if (kr && (kr = !1, ot = e, il = l), i = e.pendingLanes, i === 0 && (ft = null), Ad(n.stateNode), ge(e, G()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (ll) throw ll = !1, e = Oi, Oi = null, e;
    return il & 1 && e.tag !== 0 && nn(), i = e.pendingLanes, i & 1 ? e === Qi ? Fn++ : (Fn = 0, Qi = e) : Fn = 0, yt(), null
}

function nn() {
    if (ot !== null) {
        var e = Uu(il),
            t = Ee.transition,
            n = L;
        try {
            if (Ee.transition = null, L = 16 > e ? 16 : e, ot === null) var r = !1;
            else {
                if (e = ot, ot = null, il = 0, M & 6) throw Error(y(331));
                var l = M;
                for (M |= 4, k = e.current; k !== null;) {
                    var i = k,
                        o = i.child;
                    if (k.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var d = s[u];
                                for (k = d; k !== null;) {
                                    var h = k;
                                    switch (h.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Ln(8, h, i)
                                    }
                                    var m = h.child;
                                    if (m !== null) m.return = h, k = m;
                                    else
                                        for (; k !== null;) {
                                            h = k;
                                            var g = h.sibling,
                                                v = h.return;
                                            if (Ja(h), h === d) {
                                                k = null;
                                                break
                                            }
                                            if (g !== null) {
                                                g.return = v, k = g;
                                                break
                                            }
                                            k = v
                                        }
                                }
                            }
                            var x = i.alternate;
                            if (x !== null) {
                                var w = x.child;
                                if (w !== null) {
                                    x.child = null;
                                    do {
                                        var z = w.sibling;
                                        w.sibling = null, w = z
                                    } while (w !== null)
                                }
                            }
                            k = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && o !== null) o.return = i, k = o;
                    else e: for (; k !== null;) {
                        if (i = k, i.flags & 2048) switch (i.tag) {
                            case 0:
                            case 11:
                            case 15:
                                Ln(9, i, i.return)
                        }
                        var f = i.sibling;
                        if (f !== null) {
                            f.return = i.return, k = f;
                            break e
                        }
                        k = i.return
                    }
                }
                var c = e.current;
                for (k = c; k !== null;) {
                    o = k;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null) p.return = o, k = p;
                    else e: for (o = c; k !== null;) {
                        if (s = k, s.flags & 2048) try {
                            switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    vl(9, s)
                            }
                        } catch (S) {
                            V(s, s.return, S)
                        }
                        if (s === o) {
                            k = null;
                            break e
                        }
                        var A = s.sibling;
                        if (A !== null) {
                            A.return = s.return, k = A;
                            break e
                        }
                        k = s.return
                    }
                }
                if (M = l, yt(), Qe && typeof Qe.onPostCommitFiberRoot == "function") try {
                    Qe.onPostCommitFiberRoot(cl, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            L = n, Ee.transition = t
        }
    }
    return !1
}

function Gs(e, t, n) {
    t = an(n, t), t = Ua(e, t, 1), e = dt(e, t, 1), t = ue(), e !== null && (nr(e, 1, t), ge(e, t))
}

function V(e, t, n) {
    if (e.tag === 3) Gs(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                Gs(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ft === null || !ft.has(r))) {
                    e = an(n, e), e = Oa(t, e, 1), t = dt(t, e, 1), e = ue(), t !== null && (nr(t, 1, e), ge(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Wf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ue(), e.pingedLanes |= e.suspendedLanes & n, $ === e && (ee & n) === n && (Y === 4 || Y === 3 && (ee & 130023424) === ee && 500 > G() - Io ? Pt(e, 0) : To |= n), ge(e, t)
}

function oc(e, t) {
    t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
    var n = ue();
    e = Je(e, t), e !== null && (nr(e, t, n), ge(e, n))
}

function Gf(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), oc(e, n)
}

function Zf(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(y(314))
    }
    r !== null && r.delete(t), oc(e, n)
}
var sc;
sc = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || pe.current) fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, Df(e, t, n);
            fe = !!(e.flags & 131072)
        }
    else fe = !1, O && t.flags & 1048576 && da(t, Jr, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Dr(e, t), e = t.pendingProps;
            var l = ln(t, oe.current);
            tn(t, n), l = No(null, t, r, e, l, n);
            var i = Eo();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, me(r) ? (i = !0, Xr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xo(t), l.updater = Al, t.stateNode = l, l._reactInternals = t, zi(t, r, e, n), t = Ii(null, t, r, !0, i, n)) : (t.tag = 0, O && i && po(t), se(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Dr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Yf(r), e = _e(r, e), l) {
                    case 0:
                        t = Ti(null, t, r, e, n);
                        break e;
                    case 1:
                        t = Rs(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Ds(null, t, r, e, n);
                        break e;
                    case 14:
                        t = Ls(null, t, r, _e(r.type, e), n);
                        break e
                }
                throw Error(y(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _e(r, l), Ti(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _e(r, l), Rs(e, t, r, l, n);
        case 3:
            e: {
                if (Va(t), e === null) throw Error(y(387));r = t.pendingProps,
                i = t.memoizedState,
                l = i.element,
                Aa(e, t),
                br(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, i.isDehydrated)
                    if (i = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
                        l = an(Error(y(423)), t), t = Fs(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = an(Error(y(424)), t), t = Fs(e, t, r, n, l);
                    break e
                } else
                    for (ve = ct(t.stateNode.containerInfo.firstChild), ye = t, O = !0, Ie = null, n = ga(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (on(), r === l) {
                        t = qe(e, t, n);
                        break e
                    }
                    se(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return va(t), e === null && Ei(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, wi(r, l) ? o = null : i !== null && wi(r, i) && (t.flags |= 32), Ka(e, t), se(e, t, o, n), t.child;
        case 6:
            return e === null && Ei(t), null;
        case 13:
            return Wa(e, t, n);
        case 4:
            return wo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = sn(t, null, r, n) : se(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _e(r, l), Ds(e, t, r, l, n);
        case 7:
            return se(e, t, t.pendingProps, n), t.child;
        case 8:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return se(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, R(qr, r._currentValue), r._currentValue = o, i !== null)
                    if (Le(i.value, o)) {
                        if (i.children === l.children && !pe.current) {
                            t = qe(e, t, n);
                            break e
                        }
                    } else
                        for (i = t.child, i !== null && (i.return = t); i !== null;) {
                            var s = i.dependencies;
                            if (s !== null) {
                                o = i.child;
                                for (var u = s.firstContext; u !== null;) {
                                    if (u.context === r) {
                                        if (i.tag === 1) {
                                            u = Ze(-1, n & -n), u.tag = 2;
                                            var d = i.updateQueue;
                                            if (d !== null) {
                                                d = d.shared;
                                                var h = d.pending;
                                                h === null ? u.next = u : (u.next = h.next, h.next = u), d.pending = u
                                            }
                                        }
                                        i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), ji(i.return, n, t), s.lanes |= n;
                                        break
                                    }
                                    u = u.next
                                }
                            } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
                            else if (i.tag === 18) {
                                if (o = i.return, o === null) throw Error(y(341));
                                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), ji(o, n, t), o = i.sibling
                            } else o = i.child;
                            if (o !== null) o.return = i;
                            else
                                for (o = i; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (i = o.sibling, i !== null) {
                                        i.return = o.return, o = i;
                                        break
                                    }
                                    o = o.return
                                }
                            i = o
                        }
                se(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, tn(t, n), l = je(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = _e(r, t.pendingProps), l = _e(r.type, l), Ls(e, t, r, l, n);
        case 15:
            return Qa(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : _e(r, l), Dr(e, t), t.tag = 1, me(r) ? (e = !0, Xr(t)) : e = !1, tn(t, n), Ba(t, r, l), zi(t, r, l, n), Ii(null, t, r, !0, e, n);
        case 19:
            return Ga(e, t, n);
        case 22:
            return Ha(e, t, n)
    }
    throw Error(y(156, t.tag))
};

function uc(e, t) {
    return Lu(e, t)
}

function Xf(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ne(e, t, n, r) {
    return new Xf(e, t, n, r)
}

function Ro(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Yf(e) {
    if (typeof e == "function") return Ro(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === eo) return 11;
        if (e === to) return 14
    }
    return 2
}

function mt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ne(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function Fr(e, t, n, r, l, i) {
    var o = 2;
    if (r = e, typeof e == "function") Ro(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case Ot:
            return zt(n.children, l, i, t);
        case bi:
            o = 8, l |= 8;
            break;
        case bl:
            return e = Ne(12, n, t, l | 2), e.elementType = bl, e.lanes = i, e;
        case ei:
            return e = Ne(13, n, t, l), e.elementType = ei, e.lanes = i, e;
        case ti:
            return e = Ne(19, n, t, l), e.elementType = ti, e.lanes = i, e;
        case vu:
            return xl(n, l, i, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case hu:
                    o = 10;
                    break e;
                case Au:
                    o = 9;
                    break e;
                case eo:
                    o = 11;
                    break e;
                case to:
                    o = 14;
                    break e;
                case tt:
                    o = 16, r = null;
                    break e
            }
            throw Error(y(130, e == null ? e : typeof e, ""))
    }
    return t = Ne(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t
}

function zt(e, t, n, r) {
    return e = Ne(7, e, r, t), e.lanes = n, e
}

function xl(e, t, n, r) {
    return e = Ne(22, e, r, t), e.elementType = vu, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Jl(e, t, n) {
    return e = Ne(6, e, null, t), e.lanes = n, e
}

function ql(e, t, n) {
    return t = Ne(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Jf(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Tl(0), this.expirationTimes = Tl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Tl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Fo(e, t, n, r, l, i, o, s, u) {
    return e = new Jf(e, t, n, s, u), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ne(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, xo(i), e
}

function qf(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Ut,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function ac(e) {
    if (!e) return ht;
    e = e._reactInternals;
    e: {
        if (Rt(e) !== e || e.tag !== 1) throw Error(y(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (me(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(y(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (me(n)) return aa(e, n, t)
    }
    return t
}

function cc(e, t, n, r, l, i, o, s, u) {
    return e = Fo(n, r, !0, e, l, i, o, s, u), e.context = ac(null), n = e.current, r = ue(), l = pt(n), i = Ze(r, l), i.callback = t ? ? null, dt(n, i, l), e.current.lanes = l, nr(e, l, r), ge(e, r), e
}

function wl(e, t, n, r) {
    var l = t.current,
        i = ue(),
        o = pt(l);
    return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ze(i, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = dt(l, t, o), e !== null && (De(e, l, o, i), Tr(e, l, o)), o
}

function sl(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Zs(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Bo(e, t) {
    Zs(e, t), (e = e.alternate) && Zs(e, t)
}

function $f() {
    return null
}
var dc = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Uo(e) {
    this._internalRoot = e
}
Sl.prototype.render = Uo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(y(409));
    wl(e, t, null, null)
};
Sl.prototype.unmount = Uo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Dt(function() {
            wl(null, e, null, null)
        }), t[Ye] = null
    }
};

function Sl(e) {
    this._internalRoot = e
}
Sl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Hu();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < rt.length && t !== 0 && t < rt[n].priority; n++);
        rt.splice(n, 0, e), n === 0 && Vu(e)
    }
};

function Oo(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function kl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Xs() {}

function bf(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var d = sl(o);
                i.call(d)
            }
        }
        var o = cc(t, r, e, 0, null, !1, !1, "", Xs);
        return e._reactRootContainer = o, e[Ye] = o.current, Gn(e.nodeType === 8 ? e.parentNode : e), Dt(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var d = sl(u);
            s.call(d)
        }
    }
    var u = Fo(e, 0, !1, null, null, !1, !1, "", Xs);
    return e._reactRootContainer = u, e[Ye] = u.current, Gn(e.nodeType === 8 ? e.parentNode : e), Dt(function() {
        wl(t, u, n, r)
    }), u
}

function Cl(e, t, n, r, l) {
    var i = n._reactRootContainer;
    if (i) {
        var o = i;
        if (typeof l == "function") {
            var s = l;
            l = function() {
                var u = sl(o);
                s.call(u)
            }
        }
        wl(t, o, e, l)
    } else o = bf(n, t, e, l, r);
    return sl(o)
}
Ou = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = jn(t.pendingLanes);
                n !== 0 && (lo(t, n | 1), ge(t, G()), !(M & 6) && (cn = G() + 500, yt()))
            }
            break;
        case 13:
            Dt(function() {
                var r = Je(e, 1);
                if (r !== null) {
                    var l = ue();
                    De(r, e, 1, l)
                }
            }), Bo(e, 1)
    }
};
io = function(e) {
    if (e.tag === 13) {
        var t = Je(e, 134217728);
        if (t !== null) {
            var n = ue();
            De(t, e, 134217728, n)
        }
        Bo(e, 134217728)
    }
};
Qu = function(e) {
    if (e.tag === 13) {
        var t = pt(e),
            n = Je(e, t);
        if (n !== null) {
            var r = ue();
            De(n, e, t, r)
        }
        Bo(e, t)
    }
};
Hu = function() {
    return L
};
Ku = function(e, t) {
    var n = L;
    try {
        return L = e, t()
    } finally {
        L = n
    }
};
di = function(e, t, n) {
    switch (t) {
        case "input":
            if (li(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ml(r);
                        if (!l) throw Error(y(90));
                        xu(r), li(r, l)
                    }
                }
            }
            break;
        case "textarea":
            Su(e, n);
            break;
        case "select":
            t = n.value, t != null && qt(e, !!n.multiple, t, !1)
    }
};
zu = Mo;
_u = Dt;
var ep = {
        usingClientEntryPoint: !1,
        Events: [lr, Vt, ml, ju, Pu, Mo]
    },
    Cn = {
        findFiberByHostInstance: Nt,
        bundleType: 0,
        version: "18.3.1",
        rendererPackageName: "react-dom"
    },
    tp = {
        bundleType: Cn.bundleType,
        version: Cn.version,
        rendererPackageName: Cn.rendererPackageName,
        rendererConfig: Cn.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: $e.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = Mu(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: Cn.findFiberByHostInstance || $f,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Cr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Cr.isDisabled && Cr.supportsFiber) try {
        cl = Cr.inject(tp), Qe = Cr
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ep;
we.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oo(t)) throw Error(y(200));
    return qf(e, t, null, n)
};
we.createRoot = function(e, t) {
    if (!Oo(e)) throw Error(y(299));
    var n = !1,
        r = "",
        l = dc;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Fo(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Gn(e.nodeType === 8 ? e.parentNode : e), new Uo(t)
};
we.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(y(188)) : (e = Object.keys(e).join(","), Error(y(268, e)));
    return e = Mu(t), e = e === null ? null : e.stateNode, e
};
we.flushSync = function(e) {
    return Dt(e)
};
we.hydrate = function(e, t, n) {
    if (!kl(t)) throw Error(y(200));
    return Cl(null, e, t, !0, n)
};
we.hydrateRoot = function(e, t, n) {
    if (!Oo(e)) throw Error(y(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        i = "",
        o = dc;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = cc(t, null, e, 1, n ? ? null, l, !1, i, o), e[Ye] = t.current, Gn(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new Sl(t)
};
we.render = function(e, t, n) {
    if (!kl(t)) throw Error(y(200));
    return Cl(null, e, t, !1, n)
};
we.unmountComponentAtNode = function(e) {
    if (!kl(e)) throw Error(y(40));
    return e._reactRootContainer ? (Dt(function() {
        Cl(null, null, e, !1, function() {
            e._reactRootContainer = null, e[Ye] = null
        })
    }), !0) : !1
};
we.unstable_batchedUpdates = Mo;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!kl(n)) throw Error(y(200));
    if (e == null || e._reactInternals === void 0) throw Error(y(38));
    return Cl(e, t, n, !1, r)
};
we.version = "18.3.1-next-f1338f8080-20240426";

function fc() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(fc)
    } catch (e) {
        console.error(e)
    }
}
fc(), fu.exports = we;
var np = fu.exports,
    pc, Ys = np;
pc = Ys.createRoot, Ys.hydrateRoot;
const rp = ({
        msg: e
    }) => a.jsx("div", {
        className: "text-white z-20 text-sm fixed px-3 py-1 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-black/50 rounded-md msg_ani",
        children: e
    }),
    lp = "/assets/dragon-C47yss9Q.svg",
    ip = "/assets/chat-CvgHVdRU.png",
    op = () => a.jsxs("div", {
        className: "fixed right-4 bottom-20 flex flex-col items-center gap-4",
        children: [a.jsx("img", {
            src: lp,
            alt: "support",
            className: "w-[60px] drop-shadow-md"
        }), a.jsx("img", {
            src: ip,
            alt: "chat",
            className: "w-[60px] drop-shadow-md"
        })]
    }),
    Be = 1e3 * 60,
    Vi = [{
        period: "20241125100011424",
        bigSmall: "big",
        color: ["green", "violet"],
        number: 5,
        betAmount: 5e3,
        selected: "green",
        status: "succeed",
        timestamp: Date.now() - Be * 9.97
    }, {
        period: "20241125100011425",
        bigSmall: "big",
        color: ["green"],
        number: 9,
        betAmount: 15e3,
        selected: 9,
        status: "succeed",
        timestamp: Date.now() - Be * 9
    }, {
        period: "20241125100011426",
        bigSmall: "small",
        color: ["green"],
        number: 3,
        betAmount: 4e4,
        selected: "small",
        status: "succeed",
        timestamp: Date.now() - Be * 7.98
    }, {
        period: "20241125100011427",
        bigSmall: "big",
        color: ["green"],
        number: 7,
        betAmount: 3e3,
        selected: 0,
        status: "succeed",
        timestamp: Date.now() - Be * 6.94
    }, {
        period: "20241125100011428",
        bigSmall: "small",
        color: ["red", "violet"],
        number: 0,
        betAmount: 2e4,
        selected: "violet",
        status: "succeed",
        timestamp: Date.now() - Be * 6.04
    }, {
        period: "20241125100011429",
        bigSmall: "small",
        color: ["red"],
        number: 4,
        betAmount: 5e3,
        selected: "small",
        status: "succeed",
        timestamp: Date.now() - Be * 4.9
    }, {
        period: "20241125100011430",
        bigSmall: "big",
        color: ["red"],
        number: 6,
        betAmount: 3e3,
        selected: "big",
        status: "succeed",
        timestamp: Date.now() - Be * 4.1
    }, {
        period: "20241125100011431",
        bigSmall: "big",
        color: ["green", "violet"],
        number: 5,
        betAmount: 6e3,
        selected: 5,
        status: "succeed",
        timestamp: Date.now() - Be * 2.97
    }, {
        period: "20241125100011432",
        bigSmall: "small",
        color: ["red"],
        number: 2,
        betAmount: 2e4,
        selected: "small",
        status: "succeed",
        timestamp: Date.now() - Be * 2.01
    }, {
        period: "20241125100011433",
        bigSmall: "big",
        color: ["green"],
        number: 7,
        betAmount: 7e3,
        selected: "green",
        status: "succeed",
        timestamp: Date.now() - Be
    }],
    mc = [7, 4, 5, 6, 6],
    gc = [1, 5, 10, 20, 50, 100],
    Js = ["Your satisfaction is our top priority. If you attempt to make a deposit and the process fails 1-2 times due to unstable banks in India, don't worry—we recommend trying again a few times. If you use PhonePe, you may occasionally experience payment delays or failures. In these cases, we recommend using the barcode or PAYTM payment method. We appreciate your patience and continued support.", "Guard against deceptive websites that mimic our OKWIN official site, avoid sending funds to anyone, including agents, and do not share yourpayment proof or UTR numbers."],
    sp = {
        balance: 128760,
        gameMode: "1m",
        numberHistory: mc,
        gameHistory: Vi,
        betModalOpen: null,
        currentBet: null,
        qtySelected: 1,
        gamePeriodId: "20241125100011434",
        historyMode: "game",
        openResult: !1,
        toggleMsg: "Bet Succeed",
        timer: 60,
        bets: null,
        totalWinAmount: 0,
        setGameMode: () => {},
        setQtySelected: () => {},
        setHistoryMode: () => {},
        setBalance: () => {},
        setBetModalOpen: () => {},
        setCurrentBet: () => {},
        setGameHistory: () => {},
        setGamePeriodId: () => {},
        setNumberHistory: () => {},
        setTimer: () => {},
        setBets: () => {},
        setOpenResult: () => {},
        setToggleMsg: () => {},
        setTotalWinAmount: () => {}
    },
    hc = D.createContext(sp),
    up = ({
        children: e
    }) => {
        const [t, n] = D.useState(1e3), [r, l] = D.useState("1m"), [i, o] = D.useState(mc), [s, u] = D.useState([]), [d, h] = D.useState(null), [m, g] = D.useState(null), [v, x] = D.useState(1), [w, z] = D.useState("20241125100011433"), [f, c] = D.useState("game"), [p, A] = D.useState(60), [S, N] = D.useState(null), [E, j] = D.useState(!1), [F, _] = D.useState(null), [he, xt] = D.useState(0);
        return D.useEffect(() => {
            const be = new URLSearchParams(window.location.search).get("gameid") || "";
            if (be) {
                let Ft = [...Vi];
                Ft = Ft.map((gn, hn) => ({ ...gn,
                    period: qs(be, hn)
                })), u(Ft), z(qs(be, Ft.length))
            } else u(Vi)
        }, []), D.useEffect(() => {
            let Re;
            F && (console.log("I am triggered"), Re = setTimeout(() => {
                _(null), be()
            }, 4e3));
            const be = () => {
                Re && clearTimeout(Re)
            }
        }, [F]), a.jsx(hc.Provider, {
            value: {
                toggleMsg: F,
                balance: t,
                gameHistory: s,
                openResult: E,
                gameMode: r,
                numberHistory: i,
                bets: S,
                betModalOpen: d,
                currentBet: m,
                qtySelected: v,
                gamePeriodId: w,
                timer: p,
                totalWinAmount: he,
                setGameMode: l,
                setQtySelected: x,
                historyMode: f,
                setHistoryMode: c,
                setTotalWinAmount: xt,
                setBalance: n,
                setBetModalOpen: h,
                setGameHistory: u,
                setNumberHistory: o,
                setGamePeriodId: z,
                setCurrentBet: g,
                setTimer: A,
                setBets: N,
                setOpenResult: j,
                setToggleMsg: _
            },
            children: e
        })
    };

function qs(e, t) {
    return (BigInt(e) + BigInt(t)).toString()
}
const ne = () => D.useContext(hc),
    Wi = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAB1tAAAdbQGcq9LnAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAhxQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWFr4OgAAALN0Uk5TAAEDBAUGCQsNDxAREhMUFRYXGBkaGxwdHyAhIyQnKCkqKywtLi8wMjM2Nzg5Ojs8PT4/QEFCQ0RFRkdISUpLTE1OT1FVWFlaW11hYnFzdXd5ent8fX6Cg4aIiYqNj5CRlJWWl5ibnp+goaKlpqipqqusra6vsbKztLe4ubq8vb6/wMHCw8TFx8vMzc/Q0dLT1NXW19jZ2tvd4OHj5Obn6Orr7u/w8fLz9PX29/j5+vv8/f4cntQ7AAAG50lEQVR42u3cd3MVZQBGcYoCUqTZRaOIKIr0bgELdgUVGzbsDRFsFAsiIsVGUYhYUCFAQCDk/YL+qzOQQHKHubvP73yCneecW2be3e3TpykY/dCyVZta2w/u/mrFiwuHNMc14Vwx4amtneU/dGxc1GKVGCZvLKfgQwlkcP2acmo63rzMOrXnvJc7y2k5tshANWf4xtIlywfYqM6M31u6YdulVqov89tLt+ybYKfafv7PwH8pB26yVD0ZsbcUBeRy/telKCCYV8oZ06aA+jH2ZFFAMh+XooBgJpaigGS+LApIZlwpCkhmcVFANN8UBSQz7GRRQDL3l57RdrPtasGzRQHRvFMUEM3nRQHR7CgKiObvooBofi8KiGZrUUA0nxQFRPNaUUA0TxQFRDOtKCCa/vsVkM17RQHRPFAUEM2FRxtSwERLVpXniwKyvwLaFJDNk0UB0Qz6UwHZ3NXZmAIOKqCiLCkKiKbvSgVkM/A7BWRz8R4FZHOJAhSgAAUoIBj/AxTQqAJuMaYCoAAoAAqAAqAAKAAKgAKgACgACoACEFHAJGMqAApA9QrYrQAFKEABClBArzmkAAVAAVAAFAAFQAGoDhcpQAENKmCyMRUABUABUAAUAAVAAVAAFAAFQAFQAJq7gJ8VoIDGFDDFmAqAAqAAKAAKgAKgACgAWQUcVoACoAAoAApAagFTjVlJRitAAQpQgAIUoAAFKEABClCAAhSggLwCflKAAhSgAAUoQAEKUIACelfANGMqAAqAAqAAKAAKgAKgACgACoACoABkFNA+3ZgKgAJQOUYpQAEKUIACkgvYpQAFKEABClCAAhSgAAUoQAEKUIACFNDTAmYYUwFQABQABUABUAAUAAVAAVAAFAAFIKSAmcZUABSA6hWwUwEKUIACFKAABaQyslEFHFGAAqAAKAAKgAKQWcAsYyoACoACoAAoAAqAAqAAKAAKgAKgADR3ATsUoIDGFDDbmAqAAqAAKAAKgAKgACgACkAFGKEABShAAQpQQAMKmGNMBSC5gKMKUAAUAAVAAVAAFIAKFbBdAQpQgAIUoAAFKKC3Bcw1pgKgACgACoACoAAoAAqAAqAAKAAKQEgB84ypACgAlWO4AhSgAAUoILmAHxWgAAUoQAEKUIACFKAABSjAyZACekxbizGzC9g92JjZBazrZ8zsApbaMruAjqttmV3A+6bMLqDzBlNmF7DWkuEFXGvJ7AIeNWR2AevtmF3A8UF2zC7gbjNmF/C0FbMLeN2I1S7gh14GsNqG2QVsMWF2Ab9aMDuA3ywY7b9sM2G0f8dB4f7LW0aM9u+2sHD/5R4zVtd/A44CTlxgx2T/ZYMdo/27ISTcf/F8WLb/NZaM9t853pTJ/ssKU0b777jKlsn+y3O2jPb/mcfDo/23DjVmsv/D1xkz2f+x+caM9n+nMaP9LzAm/+Af/IN/8A/+wT/4B//gH/yjdv6d//EP/sE/+Af/4B/8g3/wD/7BP/hHvfzfYUz+wT/4B//gH83ufzv//PPPP//8889/D/mH/yoygn/+G+L/dmPyD/7BP/gH/+Af/IN/8A/+wT/4R63832ZM/sE/+Af/4B/8g3/wD/7BP/hH7fzfakz+wT/4B//gH/yDf/AP/sE/+Af/qJP/o/OMWUX/O/jnn3/++eeff/75559//vnnn3/++eeff/75559//k/nf64x+Qf/4B/8g3/wD/7BP/gH/2giRvLPP//899r/HGPyD/7BP/gH/+Af/IN/8A/+UUf/R/jnH7n+ZxuTf/AP/sE/+Af/4B/N6n8n//zzzz///PPPP//898T/LGPyD/7BP/gH/+Af/IN/8A/+wT/4R638zzQm/+Af/IN/8A/+keC/nX/+wT/4B//gH/wjw/8MY/IP/sE/+Af/4B9NzCj++eeff/75559//vnnn/+z9j/dmPyjav538c8///zzzz///PPPP//8888///zzzz///PPPf1f+pxkz2f9h/vkH/+Af/IN/8A/+wT/4B/9oJgZs4T+a5fxHs7hR/qfasoosOMl/MgP38R/N4/xHM/QA/9Es5T+awUf4j+Ze/rNZzn80/ffzH810/rNZwn82r/KfzUf8Z7O5l/6nmLDa/MJ/Nn/wn823/Gezlv9s3uix/0P814Fn+M9mIf/ZDD7Bfzbr+c/mYf6zGcN/OKv5z2ZcJ//ZvHt2/idbrGZceZz/bJ7lP5t+n/KfzZA9/GfT0sZ/NnMPde//r0l2qi9jW7vz//3lVqozw77o2v+qgTaqN/1f6OJVQceX9LVQ7bnmg9Po73j7CutEcOO6U+jvXNlimRjGPrb5f78EJzY8MsYqWYx4cNmqTa3tB3dvXPHSfUPsce74F4nfTC8n+KrHAAAAAElFTkSuQmCC",
    ap = "/assets/logo-3UuxD5q_.png",
    cp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAM1BMVEUAAAD///////////////////////////////////////////////////////////////+3leKCAAAAEHRSTlMAI9/vQqATwHGRUoHQYjKwCnzmPwAAAwJJREFUaN7tWd2aqyAMlEDkR1De/2nPsu6WtW0Y0O7F+bZz1yIzgYQE4/TGG2/8IczG8UaUM6XD/4YpZ22TusRufMw36J8DlL+xnGZXi84/QXVoOfyvzhlv8xE6Hfkr4nyJntgFdTBS5QJv5mlNdGqXZv62mtMT67iMrF+PxvJjcAnha++tez6xjKWbMeVhM2S+/6Ivs0SBKs1VrguKdsdVeiCwjQmsn/zaTQ18+7UaZPr5dUdk53sn0yA/g6DIn2DzYb57CFPMjx/Pd6Ax/y7ToEBUvfFZ+bEA3TLI0n3KfOXHAlPg+MFezyJGKvP81CsgADiA5t8T4DJNTb8moIADkIDTIJgsiGcgUOyzzQJTJoXzAmsGGWkDFsAtsm0CBQzAAqYdI9zWNz7qcqq8kaPINoOEWkUjUb6BkiTgStoQLWwMKpsPIPUggGuzL+m9fQGo0OH5QeNGpolijIad0wc1TSpwlXmyk7If51rF76DuKpy6SUgsogui6Pzs7n0p5CK5+jvJBany3ysIse5EHztpAfzIUzBi52Tr2vDp3OMxCwGxiUG09kevFwSUmJC1kEbs8+gNwwJ1AhKumXGo0o1O+H8EGlukhwRIcHKUnWwnIAwEajz6/rS5ihlnK5ZKZWLuLq9GTKc8nCpISmn+RckuDdk5GfEI2ufpmsSMY84VHHV8Q9cKszxqp0bJzLyXTF/0WtU1vqToV34QvSAe63vDAVYJJPXaIgy6zouXgNS8ni/o6mjL1TF6077/M7r8dgOXV3D7BhAINmDAlSUEON/WKD4DgjtgalI4gaXjFZVrDjj3isqoU6HBizhochA0LgAzQJMjXWqGYAf4S+0czE/zpYYU5ldXWmqYX69jTTs/9/egAT9oa+I9FfhBY7Z3m9xuDeAXKhgFmKBjBquFzXH0gQH6C9VImyQbnG1dADBU/UAR5gf2xDrv4A7zcQsksjOr+vxTBcf76uAeYpgtt4DpMRSTxK4XFDvjH+oqojcv/tTobdyPFG3szDy98cYbfwf/ACnpTX1HX6f8AAAAAElFTkSuQmCC",
    dp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAOVBMVEUAAAD///////////////////////////////////////////////////////////////////////8KOjVvAAAAEnRSTlMA34CfIL9gEO9wQKCvj1CQzzC1fPmtAAADOElEQVRo3u2Z3XLjIAyFLf4hGNu8/8NuFwcEiQGbZnZ2Wn9XaQd0KumgGHe6ubn5RUinKQfwX6iVU2LYJ4ObGfwbQN1nwhuqfAVFzbfDC+6bgPhWeAd5LEtJgPL1MxKMp1pwbWTZFo2prYMN17H2XMjD3mP5yIh14m66NXJ8PBfZy0kwONjJNieEMexAAthQfDDZWVjRrnw2aGNAhavxFxmDzKp+BuSCCtfi6xi+cha4iHa4qCD3kWOSWStgh5wKdpUnBeYQf0Oz7vBFbOwL45anJhp0C6vmk9Mh7HSlWbmWx2fAsnzT+QaQwqwcTVMzqA5py7MFoqVZ65MKFfjJI81wD5q1Rm5Qps6lQJNBJZq1ivZoH3IqBfn37wCslRc9R6B94EwKIgUV/fgvy0gn4dQqJTMztUH7xOx5p0LJQjR+6mJTkYJx2zUy8biw3nQhQGXWNs/iblPdksooYwKivdDmRVpi/ku3BWtKoJ1pSLW0z4qyFcIKNFNz3oagmIJ+NgGaAqGzcs8EOuMk/rVoHxl+3zZRgLu2hYSP6GxkuOeAbThjA5/h2vPWhiLt0Vy+D7bqRuVzoEZYxqddAQLFRlVTAH8eYKHyx4CsV1YRY6zvI7AwCHdGQH0g8dShvgLF3iI21Lk+kFTauIUhT+uQeADok/C4vU1xIKlDgWx6VtLsjJjiY19A3AK3wC1wC/wGAfJvBdxMC2YxJrDg08tSvrh4Y5WvVx2JH6vf+SDTk5otrj0HzK9ftySFWet1tCxd3MvkSl6vlOm2JS1+ZVceiyA+jbDyYqggQx0sCGuaD3f6pcg8sr7ZVqQw+CNC6mar0BPgnfi4D4YEWL4O3NTCEAqXBWgKTomZujxSpy3dsW0BFgzO0T1nBEjudOYPYXkC4qKAVPmNUR2eg1weposCu2dBNuy15NcRcVXgaT2Ls+aVR34Ph+m6ACvekhlNCrQp3r+xAYFJn3lrPMchdFUA62JZ9/0zmQYEwqfO+1ADsRsjAqjg6aGEnLHbYwLoT3iXkEThaBsVKP+JkGkwzeNp09OQgCKRh08An8kXswX8HU0L4YLAGP+PABkXWE4JyOEUOJtubm5+JH8AbPaZ16QDZ/oAAAAASUVORK5CYII=",
    fp = () => a.jsxs("header", {
        className: "sticky top-0 z-10 flex main_gradient items-center justify-between px-4 py-2",
        children: [a.jsx("div", {
            className: "flex-1 flex items-center",
            children: a.jsx("img", {
                src: Wi,
                alt: "back button",
                className: "invert w-4 rotate-180"
            })
        }), a.jsx("div", {
            className: "flex-1 flex items-center justify-center",
            children: a.jsx("img", {
                src: ap,
                alt: "Logo",
                className: "w-[120px]"
            })
        }), a.jsxs("div", {
            className: "flex-1 flex items-center justify-end gap-2",
            children: [a.jsx("img", {
                src: dp,
                alt: "support",
                className: "w-6"
            }), a.jsx("img", {
                src: cp,
                alt: "voice",
                className: "w-6"
            })]
        })]
    }),
    $s = ({
        name: e,
        isWithdraw: t = !1
    }) => a.jsx("button", {
        className: `${t?"bg-primary":"bg-green"} text-bg-white-1 px-8 py-[6px] rounded-full font-semibold`,
        children: e
    }),
    pp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAMAAABiM0N1AAAAOVBMVEUAAACoqKinp6eoqKinp6eoqKipqamnp6epqamfn5+np6eoqKioqKioqKipqamnp6empqampqaoqKisjl/uAAAAEnRSTlMAv0CAIN/voM8QYDCQcK9QkHDZRsljAAABi0lEQVRYw+3W2ZaDIAwG4ICJCri0vv/DTonWzKgsZ+CS/6IXXb6jWaTQ0tLSUjlqi2RcLGY665aK0lmQ3tIZMEfqVDjjIRFCafRAXuodFAcnlhDKs/a+f6aC5LzUQYXM/uZMrantooUkUjZz2saIQ/voZkh+ooKNM/Sd3DTkZyB46QsreZL9fGsO7QYbmZIOV9t6wA8IX1j3bwi98Ro+L3oKS2kIiRvKEAwByTh8goy7tJPwgEIS8dZfIfv7q3w3Dr4QqLvEPz4lgdC/Kw3jbgpkxu3eX9Pvzw+BpCbCby84oVOyD1tPKJDUZM+OCiTrYp4lgfheztOg508FEknDo3RC899aWiIHF4il4XlsCQ8Iz5pILhDHhBZgNAxJoROQ5CatHpJC3zIloaMuXKvIadJlQPKYiDxK3jI8SSm62it3IVtaIBQji5OSEoek4iKlo1/LsAInXCSCssiGTzUkK80ojKolGeKGYKkjB7d1plRSWyLZDekoLa2ZfxSTlIbM6PeiIpmhpaWlhfMDlnct3l5KoCQAAAAASUVORK5CYII=",
    mp = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='Frame'%20clip-path='url(%23clip0_862_30057)'%3e%3cpath%20id='Vector'%20d='M24%200H0V24H24V0Z'%20fill='white'%20fill-opacity='0.01'/%3e%3cpath%20id='Vector_2'%20d='M12%2022C16.1173%2022%2019.4999%2018.7371%2019.4999%2014.5491C19.4999%2013.5209%2019.4476%2012.4187%2018.8778%2010.7058C18.3079%208.9929%2018.1931%208.7718%2017.5905%207.71395C17.333%209.8727%2015.9555%2010.7724%2015.6055%2011.0413C15.6055%2010.7615%2014.7722%207.66795%2013.5088%205.81695C12.2685%204%2010.5817%202.80796%209.59265%202C9.59265%203.53489%209.16095%205.81695%208.5427%206.9797C7.92445%208.14245%207.80835%208.1848%207.0361%209.0501C6.2639%209.9154%205.90945%2010.1826%205.2637%2011.2325C4.61798%2012.2825%204.5%2013.6809%204.5%2014.7091C4.5%2018.8971%207.88265%2022%2012%2022Z'%20fill='white'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_862_30057'%3e%3crect%20width='24'%20height='24'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",
    gp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHAAAABxCAMAAAA6YtfcAAAB11BMVEUAAAAqKio1NTVEREQhISE9PT3Z2dksLCzV1dXW1tbX19fk5OTX19ft7e3V1dXi4uLb29vU1NTo6Ojm5ubU1NTg4ODJycns7OzT09PT09PExMTOzs6+vr7l5eXg4ODo6Ojr6+vi4uLb29vU1NTp6end3d3V1dXX19fPz8+kpKTW1tbZ2dnT09Pf39/b29vY2Njd3d3i4uLg4ODb29vX19fX19fZ2dnS0tLu7u7W1tbo6OjU1NTX19fT09Ph4eHv7+/l5eXt7e3q6urh4eHW1taqqqrDw8PGxsa+vr7AwMC3t7fa2tqwsLCioqLl5eWnp6e7u7vJycm5ubmysrK0tLTh4eHV1dWdnZ2fn5+ZmZmrq6ukpKSpqanW1taXl5etra3c3Nybm5vn5+fY2NjX19fe3t7U1NTj4+P8/Pzd3d3o6Ojg4ODf39/r6+vq6urt7e329vb7+/vp6enk5OTS0tLMzMzv7+/s7OzNzc1jY2Pz8/PPz8/6+vr19fXx8fH5+fn4+PhCQkL+/v7y8vJLS0tISEhnZ2fR0dF9fX1PT0+QkJB5eXlubm5OTk5/f39wcHBqampkZGRNTU2GhoZBQUGOjo6UlJR8fHyMjIyCgoJ0dHReXl5WVlbPy+sKAAAARnRSTlMABAYEBwj+Cv7+/v6h8O917+CjhIFmN+FhQigjE/Dw4MLCwcCUk3FjOBmRSTDg4ODRo4WEgXNWR+Dg0dCxkGTv4NGzsoQY/7ll7QAADSNJREFUaN7tmnlbGlcUxqNEoibR7G2Tpk2bPem+73tBGAQRAUVGR2AgyCKRRdRoNCYmJmliNEuT9sP2PedeZsSMVo39o8/jyzDAcO/9+Z5z7sBc3LWjHf3XauA7bg0NtgZ55L+TbZetwWYDSQjP6RXg24+CJR69oZG0m9TIamgEGNTtpQFHMElq2t0E8V6QdzMU/rdNwhnD9tQLzD0gwy4HeHtqhM2REQAuHD1z6Oev9o9A+7869cvhLy4QdU8TR5iQrx5MqhAyt6fp8uFTRBoj5cZyI2N4Cu6pdoIiwpzPVyRKdwja5TM/ggVOLg+NQnjI5XAAt9cOHaPgysBuPZmGu4vtp4gGMSsGDdM2PCy4cPrNUbhEUyC3joM9St3Fw/sFLj86DIi3ppg3hh1Rc/kcbAKJCgYS/bbIY3vtApcHLBYjULFYTAl5iwINJsUXSASWkVvxKXiXTzENOIYF7aWy3+HogBxO/2RJISz7ZOZrx+ESqdxCtYpi+f0M3CFvgqZMOl0vyX9bS6X2EhTIXO7wnprHzdtrbDr+2khO4orapMO1hpwhveYzn3/teJNI5GbO6g3sr+nofgOnII4sl3xc9bKaThWLQKJq97cjk5uckeK8eRjJGx1lXNmxvhgZTAFJcf1k00Qb+Ts0BhzZy1YdG1Ipy0iE9QxKh850G44o83jaefcWQ04M5sSOty6PLxwe9EB94c5IoIveozs18NuZiEwe2gwR9SJ5mHbF4KTTkMPt6xsg9YEXHmCFfd1OU6UgKhbFM3qIirXBtpHKaeD6PJMTUyHjNwZzRUCT6vX004Nk9riMRuV0MJiiM8HH8MifkxszeBg8nLhSGvH8jIuaBGhooE4RA+knYhFh/QSFs4HKgUHUZ3ueqrO41+4nEdAz0AdJi324QXhpWnY7RUs/EYNEPLqHiRso0Mbj+ymexVTcL9XR28di1goxWT7tdcjGMqqxk8eRx38/yVEC36Zy8QbTNV6gb5WGhvqGaF9/0F0japkglc7bFzmq6xM5gVQue4PZMvXGLsrjQ0x5SRKLh4AkVnUQUXFn+cuO7d9m4HGeDim9WmY5++uHD68SHRoit3jiKQvdzmZ4Rn7Jlbo+DwEdjsFfMEk9q2VnZxgDMqnG6jVkQqUGJVHNcq2+g28B9MGxrsGjOL14U0GlWq2Wq1V/pxixHtbJu85OEyvB4QD6kJQMe2ynSrWtPwXfjhFPnxQdB83hMDJhVmuFWYqBW/SbTAOY8p68iCyuXTbE+wHJRkBDk1UgJ90YSfqqg/ULmVDTqQM9JyerCZ2IRUx/TI21DSKDXpw/g9oky4GhpGokyfLhbgVFQz93vZ1GGoN7T15c8yTewHP+Bw5opsSdqr5V1hhVJ5CJeWfxfrjGjEyyEjoXTjuXjW2tkmn6BjwYLN0mdRPEhJm0KOSL4lFS7y0sLLwQPnF3cudSWs+A+A6XjW2ts+gFnEBhMFQiletxksW0SLQmYt7744+Fhb+Mtr5J7p5IZymNXyKLmBlrlMzHlMBMtsTqeQkXZdgKMRg8ABHTWj67RH8tS3PjrLBobbDppyICmo0nSdXVoazBBlcIyHtLSyCO3+3r5bZkMZksYQAlnUUaT9Ip3NKirXH3BSQQBtUQlHQzqh7HEHzcD3rogV89W7q5tLT017Plp2GjgzMUAjChcd0gpgBa8ABsL6bA00KsSB2OzS0vLntW6dlNaOnvxRfPAayVrYf/ZFWjLAY/3WN9BqdJ+A5VTEZRE6qqOnxSprvl2dnZe4wJSHnu3CT9/WjxxfJAp9mhpKoYRNGy2QzVqTUQn/QnKaK6PUFyGzRfVCZucZaJANXzFsYf3b/zZKifmoo+Dh7CntYxNd4SSbSomd3HUhRRPc6KmuaIh6xFH8wyMRDoYQUCd27VeM/+7Ov0cdFyv0CclU7DYvCYNRCnmS+CKFFdt5PKEsc8LpRI/9BfgtgjdefWrVvEm79/B7woFa2cmhE7S0tTFs9z1dgsvst8GiSDCsvBvAjjiAeDvXef/03Ax/fAesE8SPL6I4gBiNLlbTvGsGsazYyzTZTEBguHv1IG0xoDXXKSSx4UDf/57OHC7GPonmd+PiB4f4BH+YtwGxAF0q+wMDH0zMdWX9/4o/AdlKiuAYjNbU5yUZaeSO+TZ/fnb84+np19mJq5MjwgeQ/B8w2ixUqkS9FoICWtZ7MfMdAqh+8jollNyCNx5iwY7B9YfjE/fuvx4/BVVnHh1hL8PXgS9nkCVEMMFMQOLc1EDXX6PufQAtj0Fni6lmZ1EM7kUVFGOp8+fwji+MxMJebNFWbKzLsLnihageRuzrSOQTSFysZqXvCZtBElihTq2Ol6ye+p57ndgUjv3QcgugpzOVorKUwtzz98cLc36nG73XXEQDmkk9IKhstmLK8WKYfBLIhalqSXSk5B8wDHPIOYn5uukOYm+pkXcJN6SDKR/lKSB9GVNP72LAzCocUXtgzxtAw+VfAJ5fCwDJ5JrFQmpkjTFQ94kYC7u1sSAyTq4w9hlCxVoJYGkIrGah5mOAoZlkPSDB6G7Wbi88xI5Ro0MzbS+YR5kGFSIp0ZVHwwKyaGFdBGwLcyyDQuDEg9ZvYkj9UTDd/tzuenr964PpbX/xyKBnDQgtjBg2QATOsHeFpYrVu8zw6DKWrrZhyAGKWG6+rq6g5Ew30JsdYW8wz4PO4uOtrFRMkkooOBWQKmP7C8wgBw90dkEECSy4gmi3kkt8eHb4JeKOt52jkIHquOCGaZB9EB1NLvNll93yeH+7IgKsFiEWsufpMngXJgEMN9fWEfrrlRoDhqECWSgaEiSVOI+B0DrS5Ez2IWprUsr9+VeizsYYWtC4XTH366uPikrxcB7cYxHITqM6nxsp/GDn+zKlK2eB4G0cBLyoDGQDN/HSQKaqR/YHHxaadvsAc8Et4DkIlSXpadgNoXjQS0snhMfFTgchmN0bcOJ4EYuccTCc/P90U9PW4ck6LKMYlOWkyNpRQGHpOLC1bzAkBNKcZI5ZU8EM2hMR375+c7PeTPlKwcQQzx4mrQTsQDVucZWTXvpjVYDA6TtJfStwIZffTIR/mrB5qJ9PIQaeAU7V3riDLw0zTaKPooq0viZPrqBh8cH4/SQZerw2UAsclElnmAYTaofM4Rtb6YeQP+ICzPYXn3dn32IIwu1OEZfxSRLwxml2lSp/75lJ2IyjF2uMbl4QEmBvM5KNbBPBMHmcDxwZUHDJssF9ascdMVAn4AHnBWPBDPCov4KQJrpSX0lUATKZaFCSieOwygSbTnSMN2drjP2p9M4xsKyzsGjYxSXupoTIRcAQI6JG410jnG3TMKOzy2HhB1Sjx7doQVN2EMNNefAfTUXkhqh6Fh7pyLs8OPUDEI3ZoX+Z8z0D4qiH4DKL1ZAFkrXaojIxX0DQrg+fV/XbS9eYACEdcqrGGXCVzTIcsEOkXXMfDiXDIwuN5S22fkMB4vim66y2XQVqoHQDxYIB150TMTB89uP89zcD3gmwcQB8RiZJpllzBsFkAnbquQQXSqVKZjuHaK25UP1/fHyHPAwaM+PcfEEhejISfdnAIoF94l1MVIO/WamxtR4nE79HrD+gZ5teZdEBFU75xQ0nQHhJQEAk4ybSpzE9wpk4hTQD+UFbo+8g0BjI9NCCUcLwHh8FHAxBtARXbxJuKtFNETG/qR1nYJOHsirkzL7ppBM+QG0LlS3CDIzacmcvBHIf1s/QSaU+PDeAI1ltCm8W13AndvmatjbSCns1yZEqrgmp14X2/016CGEwfiLGWuUJiaKhQKlbg5uJ+Bz5cD5kuWMoGWJPDiRDxwYuM/ep+Px9GJiVLFshxfILp7w2565ucNKuULUpW4miBe/HPbJn6a/Qx96O9UJgqFmQILcQVCyuUOuPyGnKUcGoiGOUX0TByBvU1oXwJrNa1qq31kxpA3aSCqmt+Al5Nj9O716zPXZ2Zi6JdQW1sTlwi3WWICyETsuqmJWEjwit5gVdCUWMF8v5BFL8K17kM0N09EZ7VFVaaurdTIcBbfQbASr6aDwxN1b00rrcARcN9W/nngUgJqbVHVUKxwlXVN7l/WNdwKGTWkqtQDvC3pCGJKalWVkStXr0BXscfGd3qg1/LwteG42tKCDX2O7NqizrW1cFBDrSGlMnNlHU0N2xPUUIXaXt+1ZZ04GMIooRbcQqHitBj8xo0bV27wo6RdHcvgfZUaIf5fn9g6j8OqYighNZ6qFG6sUmEsY1fVZrRRm8ngpTe53yubFPnBgPHMaJ4WFSYm5ip5rx4HpIX/qGYVOv3GrlfX6wdDzfCHO3YcX5UiLKLYgkN8gB7bzr06TSKbm5OhJG3YsZKhZmLhMEDYh5LNbUcomtuF/DYEZhIbcZlKvGSpmbYkdqfPAbedem/fQSY2E7gFDOCkZ5j7XuZum5nnTrfBC5vCnoR92+kj/wHNhF4+8t3pg21AldoOfrvv+9ff27WjHe1oRzva0f9f/wDIC0gBmemkXgAAAABJRU5ErkJggg==",
    hp = "/assets/colored-watch-C_I6uSm6.png",
    Nr = ({
        mode: e
    }) => {
        const {
            gameMode: t,
            setGameMode: n
        } = ne();
        return a.jsxs("div", {
            onClick: () => n(e),
            className: `flex-1 select-none flex flex-col font-medium justify-center rounded-xl items-center py-2 ${t===e?"main_gradient2 text-white":"text-text-2"}`,
            children: [a.jsx("img", {
                src: t === e ? hp : gp,
                alt: "game",
                className: "w-12"
            }), a.jsx("span", {
                className: "text-xs",
                children: "Win Go"
            }), a.jsx("span", {
                className: "text-xs",
                children: e.replace("m", "Min")
            })]
        })
    },
    Ap = () => a.jsx("div", {
        className: "absolute -bottom-5 left-0 w-full px-4",
        children: a.jsxs("div", {
            className: "flex items-center justify-between bg-white rounded-xl",
            children: [a.jsx(Nr, {
                mode: "30s"
            }), a.jsx(Nr, {
                mode: "1m"
            }), a.jsx(Nr, {
                mode: "3m"
            }), a.jsx(Nr, {
                mode: "5m"
            })]
        })
    }),
    bs = e => {
        const t = new Date(e),
            n = h => h.toString().padStart(2, "0"),
            r = t.getFullYear(),
            l = n(t.getMonth() + 1),
            i = n(t.getDate()),
            o = n(t.getHours()),
            s = n(t.getMinutes()),
            u = n(t.getSeconds());
        return `${r}-${l}-${i} ${o}:${s}:${u}`
    },
    eu = ({
        period: e
    }) => {
        const t = Math.floor(Math.random() * 10);
        return {
            period: e,
            color: Ac(t),
            number: t,
            bigSmall: vc(t),
            timestamp: Date.now()
        }
    },
    vp = ({
        period: e,
        selected: t,
        isMultipleBets: n
    }) => {
        let r = 3;
        const l = dn(t);
        if (l === "color") {
            const o = Math.floor(Math.random() * 5),
                s = Math.floor(Math.random() * 2);
            switch (t) {
                case "green":
                    r = [1, 3, 7, 9, 5][o];
                    break;
                case "red":
                    r = [0, 2, 4, 6, 8][o];
                    break;
                default:
                    r = [0, 5][s]
            }
        } else if (l === "bigSmall") {
            const o = Math.floor(Math.random() * 5);
            t === "small" ? r = [0, 1, 2, 3, 4][o] : r = [5, 6, 7, 8, 9][o]
        } else r = t;
        return {
            period: e,
            color: Ac(r),
            number: r,
            bigSmall: vc(r),
            status: "succeed",
            selected: t,
            timestamp: Date.now(),
            isMultipleBets: !!n
        }
    },
    Ac = e => {
        if (e === 2 || e === 4 || e === 6 || e === 8) return ["red"];
        switch (e) {
            case 0:
                return ["violet", "red"];
            case 5:
                return ["violet", "green"];
            default:
                return ["green"]
        }
    },
    vc = e => e === 0 || e === 1 || e === 2 || e === 3 || e === 4 ? "small" : "big",
    dn = e => typeof e == "number" ? "number" : e === "big" || e === "small" ? "bigSmall" : "color",
    yc = ({
        amount: e,
        selected: t,
        resultNumber: n
    }) => {
        const r = e - e * .02,
            l = dn(t);
        let i = 0;
        return l === "color" && (t === "green" && (n === 1 || n === 3 || n === 7 || n === 9) ? i = r * 2 : t === "green" && n === 5 ? i = r * 1.5 : t === "red" && (n === 2 || n === 4 || n === 6 || n === 8) ? i = r * 2 : t === "red" && n === 0 ? i = r * 1.5 : t === "violet" && (n === 0 || n === 5) && (i = r * 4.5)), l === "bigSmall" && (t === "small" && (n === 0 || n === 1 || n === 2 || n === 3 || n === 4) || t === "big" && (n === 5 || n === 6 || n === 7 || n === 8 || n === 9)) && (i = r * 2), l === "number" && (i = r * 9), i
    },
    ul = e => parseFloat(e).toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }),
    yp = ({
        bet: e,
        bets: t
    }) => {
        let n = !1;
        return t.forEach(r => {
            dn(e.selected) === dn(e.selected) && (n = !0)
        }), n
    },
    xp = ({
        bet: e,
        selected: t
    }) => {
        const {
            number: n
        } = e, r = dn(t);
        return r === "bigSmall" ? t === "small" && (n === 0 || n === 1 || n === 2 || n === 3 || n === 4) || t === "big" && (n === 5 || n === 6 || n === 7 || n === 8 || n === 9) ? "succeed" : "failed" : r === "color" ? t === "green" && (n === 1 || n === 3 || n === 7 || n === 9) || t === "red" && (n === 2 || n === 4 || n === 6 || n === 8) || t === "violet" && (n === 0 || n === 5) ? "succeed" : "failed" : t === n ? "succeed" : "failed"
    },
    wp = e => {
        const t = dn(e);
        return t === "color" || t === "bigSmall" ? Sp(e) : e
    },
    Sp = e => e.charAt(0).toUpperCase() + e.slice(1),
    kp = () => {
        const {
            balance: e
        } = ne(), [t, n] = D.useState(0), r = D.useRef(null);
        return D.useEffect(() => {
            const l = new IntersectionObserver(o => {
                    o.forEach(s => {
                        s.isIntersecting || n(u => u === Js.length - 1 ? 0 : u + 1)
                    })
                }, {
                    threshold: .9
                }),
                i = r.current;
            return i && l.observe(i), () => {
                i && l.unobserve(i)
            }
        }, []), a.jsxs("section", {
            className: "relative main_gradient rounded-bl-[90px] py-2 rounded-br-[90px] w-full px-4  h-[296px] space-y-4",
            children: [a.jsxs("div", {
                className: "p-4 text-black-text gap-1 bg-bg-white-1 flex flex-col items-center justify-center rounded-3xl",
                children: [a.jsxs("span", {
                    className: "relative font-semibold text-lg",
                    children: [a.jsx("span", {
                        children: "₹"
                    }), ul(e.toString()), a.jsx("span", {
                        children: a.jsx("img", {
                            src: pp,
                            alt: "refersh balance",
                            className: "w-5 absolute top-1 -right-12"
                        })
                    })]
                }), a.jsx("span", {
                    className: "text-sm",
                    children: "Wallet Balance"
                }), a.jsxs("div", {
                    className: "mt-4 w-full flex items-center justify-around",
                    children: [a.jsx($s, {
                        name: "Withdraw",
                        isWithdraw: !0
                    }), a.jsx($s, {
                        name: "Deposit"
                    })]
                })]
            }), a.jsxs("div", {
                className: "px-3 py-[1px] bg-bg-white-1 flex items-center overflow-hidden justify-between rounded-full",
                children: [a.jsx("span", {
                    className: "icon-mask w-[18px] mr-2"
                }), a.jsx("div", {
                    ref: r,
                    className: "break-all w-[68%] animated_text h-[38px] overflow-hidden text-[12px]",
                    children: Js[t]
                }), a.jsxs("button", {
                    className: "flex items-center gap-1 py-[5px] rounded-full bg-primary px-4 text-bg-white-1",
                    children: [a.jsx("img", {
                        src: mp,
                        alt: "fire",
                        className: "w-3"
                    }), a.jsx("span", {
                        className: "text-xs font-medium",
                        children: "Detail"
                    })]
                })]
            }), a.jsx(Ap, {})]
        })
    },
    Cp = "/assets/bg-temp-CEx8JRqh.png",
    Np = "data:image/svg+xml,%3csvg%20data-v-3e4c6499=''%20xmlns='http://www.w3.org/2000/svg'%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%3e%3cpath%20data-v-3e4c6499=''%20d='M23.67%203H12.33C6.66%203%205.25%204.515%205.25%2010.56V27.45C5.25%2031.44%207.44%2032.385%2010.095%2029.535L10.11%2029.52C11.34%2028.215%2013.215%2028.32%2014.28%2029.745L15.795%2031.77C17.01%2033.375%2018.975%2033.375%2020.19%2031.77L21.705%2029.745C22.785%2028.305%2024.66%2028.2%2025.89%2029.52C28.56%2032.37%2030.735%2031.425%2030.735%2027.435V10.56C30.75%204.515%2029.34%203%2023.67%203ZM11.67%2018C10.845%2018%2010.17%2017.325%2010.17%2016.5C10.17%2015.675%2010.845%2015%2011.67%2015C12.495%2015%2013.17%2015.675%2013.17%2016.5C13.17%2017.325%2012.495%2018%2011.67%2018ZM11.67%2012C10.845%2012%2010.17%2011.325%2010.17%2010.5C10.17%209.675%2010.845%209%2011.67%209C12.495%209%2013.17%209.675%2013.17%2010.5C13.17%2011.325%2012.495%2012%2011.67%2012ZM24.345%2017.625H16.095C15.48%2017.625%2014.97%2017.115%2014.97%2016.5C14.97%2015.885%2015.48%2015.375%2016.095%2015.375H24.345C24.96%2015.375%2025.47%2015.885%2025.47%2016.5C25.47%2017.115%2024.96%2017.625%2024.345%2017.625ZM24.345%2011.625H16.095C15.48%2011.625%2014.97%2011.115%2014.97%2010.5C14.97%209.885%2015.48%209.375%2016.095%209.375H24.345C24.96%209.375%2025.47%209.885%2025.47%2010.5C25.47%2011.115%2024.96%2011.625%2024.345%2011.625Z'%20fill='currentColor'%3e%3c/path%3e%3c/svg%3e",
    xc = "/assets/0-BMsYMETk.png",
    wc = "/assets/1-DQoihf6M.png",
    Sc = "/assets/2-BdRIuobe.png",
    kc = "/assets/3-Di3ENqeN.png",
    Cc = "/assets/4-BgoHzGp7.png",
    Nc = "/assets/5-CevcLrZ3.png",
    Ec = "/assets/6-CuOXEhZU.png",
    jc = "/assets/7-EerjFCzD.png",
    Pc = "/assets/8-CcLSOOHO.png",
    zc = "/assets/9-BcSpChSK.png",
    Ep = () => {
        const {
            numberHistory: e,
            gameMode: t
        } = ne();
        return a.jsxs("div", {
            className: "flex-1 py-3 pl-1 text-white",
            children: [a.jsxs("div", {
                className: "border rounded-full gap-1 mr-4 px-2 py-[2px] flex items-center justify-center",
                children: [a.jsx("img", {
                    src: Np,
                    alt: "how to play",
                    className: "invert w-[18px]"
                }), a.jsx("span", {
                    className: "text-[11px]",
                    children: "How to play"
                })]
            }), a.jsxs("p", {
                className: "text-xs ml-2 mt-1",
                children: ["Win Go ", a.jsx("span", {
                    children: t.replace("m", "Min")
                })]
            }), a.jsx("div", {
                className: "flex justify-between mr-4 mt-[10px]",
                children: e.slice(0, 5).map((n, r) => {
                    let l;
                    switch (n) {
                        case 0:
                            l = xc;
                            break;
                        case 1:
                            l = wc;
                            break;
                        case 2:
                            l = Sc;
                            break;
                        case 3:
                            l = kc;
                            break;
                        case 4:
                            l = Cc;
                            break;
                        case 5:
                            l = Nc;
                            break;
                        case 6:
                            l = Ec;
                            break;
                        case 7:
                            l = jc;
                            break;
                        case 8:
                            l = Pc;
                            break;
                        default:
                            l = zc
                    }
                    return a.jsx("img", {
                        src: l,
                        alt: n.toString(),
                        className: "w-7"
                    }, r)
                })
            })]
        })
    },
    jp = () => {
        const {
            gamePeriodId: e,
            timer: t,
            setTimer: n
        } = ne();
        return D.useEffect(() => {
            const r = setInterval(() => {
                n(l => l === 1 ? 60 : l - 1)
            }, 1e3);
            return () => {
                clearInterval(r)
            }
        }, []), a.jsxs("div", {
            className: "flex-1",
            children: [a.jsx("p", {
                className: "text-xs text-end font-semibold text-white mt-3",
                children: "Time remaining"
            }), a.jsxs("div", {
                className: "flex gap-[5px] justify-end text-lg font-semibold mt-1",
                children: [a.jsx("div", {
                    className: "bg-bg-white-1 px-1 py-[3px]",
                    children: "0"
                }), a.jsx("div", {
                    className: "bg-bg-white-1 px-1 py-[3px]",
                    children: t >= 60 ? 1 : 0
                }), a.jsx("div", {
                    className: "bg-bg-white-1 px-1 py-[3px]",
                    children: ":"
                }), a.jsx("div", {
                    className: "bg-bg-white-1 px-1 py-[3px]",
                    children: t < 60 && t >= 10 ? t.toString().charAt(0) : 0
                }), a.jsx("div", {
                    className: "bg-bg-white-1 px-1 py-[3px]",
                    children: t < 60 ? t < 10 ? t.toString().charAt(0) : t.toString().charAt(1) : 0
                })]
            }), a.jsx("p", {
                className: "text-white mt-2 text-end font-bold",
                children: e
            })]
        })
    },
    Pp = () => a.jsxs("section", {
        className: "px-4 mt-10 relative",
        children: [a.jsx("img", {
            src: Cp,
            alt: "gamer"
        }), a.jsxs("div", {
            className: "absolute top-0 left-0 px-6 flex w-full h-full",
            children: [a.jsx(Ep, {}), a.jsx(jp, {})]
        })]
    }),
    zp = () => {
        const {
            setBetModalOpen: e
        } = ne(), t = n => {
            e({
                type: "color",
                selected: n
            })
        };
        return a.jsxs("div", {
            className: "flex items-center justify-between gap-4 text-white",
            children: [a.jsx("button", {
                onClick: () => t("green"),
                className: "bg-green font-medium w-full py-[6px] rounded-tr-xl rounded-bl-xl",
                children: "Green"
            }), a.jsx("button", {
                onClick: () => t("violet"),
                className: "font-medium bg-violet w-full py-[6px] rounded-md",
                children: "Violet"
            }), a.jsx("button", {
                onClick: () => t("red"),
                className: "bg- font-medium w-full py-[6px] rounded-tl-xl rounded-br-xl bg-primary",
                children: "Red"
            })]
        })
    },
    _p = () => {
        const {
            setBetModalOpen: e
        } = ne(), t = n => {
            e({
                type: "number",
                selected: n
            })
        };
        return a.jsxs("div", {
            className: "bg-bg-white-2 p-3 mt-4 rounded-lg grid grid-cols-5 gap-2",
            children: [a.jsx("img", {
                onClick: () => t(0),
                src: xc,
                alt: "0"
            }), a.jsx("img", {
                onClick: () => t(1),
                src: wc,
                alt: "1"
            }), a.jsx("img", {
                onClick: () => t(2),
                src: Sc,
                alt: "2"
            }), a.jsx("img", {
                onClick: () => t(3),
                src: kc,
                alt: "3"
            }), a.jsx("img", {
                onClick: () => t(4),
                src: Cc,
                alt: "4"
            }), a.jsx("img", {
                onClick: () => t(5),
                src: Nc,
                alt: "5"
            }), a.jsx("img", {
                onClick: () => t(6),
                src: Ec,
                alt: "6"
            }), a.jsx("img", {
                onClick: () => t(7),
                src: jc,
                alt: "7"
            }), a.jsx("img", {
                onClick: () => t(8),
                src: Pc,
                alt: "8"
            }), a.jsx("img", {
                onClick: () => t(9),
                src: zc,
                alt: "9"
            })]
        })
    },
    Tp = () => {
        const {
            qtySelected: e,
            setQtySelected: t
        } = ne();
        return a.jsxs("div", {
            className: "my-4 flex items-center justify-between gap-1",
            children: [a.jsx("button", {
                className: "text-primary border rounded-md px-2 py-1 border-primary",
                children: "Random"
            }), gc.map((n, r) => a.jsxs("span", {
                onClick: () => t(n),
                className: `text-sm ${e===n?"bg-green text-white":"bg-bg-white-2"}  px-2 py-[6px] rounded-md`,
                children: ["X", n]
            }, r))]
        })
    },
    Ip = () => {
        const {
            setBetModalOpen: e
        } = ne(), t = n => {
            e({
                type: "bigSmall",
                selected: n
            })
        };
        return a.jsxs("div", {
            className: "mt-4 px-4 flex items-center text-white justify-between",
            children: [a.jsx("button", {
                onClick: () => t("big"),
                className: "py-[6px] bg-big w-full rounded-l-full",
                children: "Big"
            }), a.jsx("button", {
                onClick: () => t("small"),
                className: "py-[6px] bg-small  w-full rounded-r-full",
                children: "Small"
            })]
        })
    },
    Mp = () => {
        const {
            timer: e,
            setGameHistory: t,
            gamePeriodId: n,
            bets: r,
            setGamePeriodId: l,
            gameHistory: i,
            setNumberHistory: o,
            setOpenResult: s,
            setBets: u,
            setBalance: d,
            setTotalWinAmount: h,
            setBetModalOpen: m
        } = ne();
        return D.useEffect(() => {
            if (e === 1) {
                let g = eu({
                    period: n
                });
                if (r) {
                    g = Array.from({
                        length: r.length
                    }).map(z => eu({
                        period: n
                    }));
                    let v = 0;
                    const x = vp({
                        period: n,
                        selected: r[r.length - 1].selected
                    });
                    g = g.map((z, f) => {
                        const c = r[f],
                            p = { ...x
                            },
                            A = xp({
                                bet: x,
                                selected: c.selected
                            });
                        if (p.isMultipleBets = f > 0, p.selected = c.selected, p.betAmount = c.amount, p.timestamp = c.timestamp, p.status = A, A === "succeed") {
                            const S = yc({
                                amount: c.amount,
                                resultNumber: x.number,
                                selected: c.selected
                            });
                            v += S
                        }
                        return p
                    }), u(g), s(!0), h(v), d(z => z + v);
                    const w = [...g.reverse(), ...i].sort((z, f) => {
                        const c = BigInt(z.period),
                            p = BigInt(f.period);
                        return c < p ? -1 : c > p ? 1 : 0
                    });
                    o(z => [g[0].number, ...z]), t(w)
                } else {
                    const v = [g, ...i].sort((x, w) => {
                        const z = BigInt(x.period),
                            f = BigInt(w.period);
                        return z < f ? -1 : z > f ? 1 : 0
                    });
                    o(x => [g.number, ...x]), t(v)
                }
                l(v => (BigInt(v) + BigInt(1)).toString())
            }
            e === 5 && m(!1)
        }, [e]), a.jsx("section", {
            className: "p-4",
            children: a.jsxs("div", {
                className: "p-2 relative overflow-hidden bg-white rounded-md",
                children: [a.jsx(zp, {}), a.jsx(_p, {}), a.jsx(Tp, {}), a.jsx(Ip, {}), e <= 5 && a.jsxs("div", {
                    className: "absolute gap-7 flex items-center justify-center top-0 left-0 w-full h-full bg-black/70",
                    children: [a.jsx("span", {
                        className: "bg-white text-primary w-[120px] h-[180px] rounded-xl flex items-center justify-center",
                        children: a.jsx("span", {
                            className: "text-[150px] font-semibold",
                            children: "0"
                        })
                    }), a.jsx("span", {
                        className: "bg-white text-primary w-[120px] h-[180px] rounded-xl flex items-center justify-center",
                        children: a.jsx("span", {
                            className: "text-[150px] font-semibold",
                            children: e
                        })
                    })]
                })]
            })
        })
    },
    Dp = () => {
        const {
            historyMode: e,
            setHistoryMode: t
        } = ne();
        return a.jsxs("div", {
            className: "flex justify-between gap-2",
            children: [a.jsx("button", {
                onClick: () => t("game"),
                className: `w-full py-[7px] ${e==="game"?"main_gradient font-semibold text-white":"bg-white text-silver-text"} text-sm rounded-md`,
                children: "Game History"
            }), a.jsx("button", {
                className: "w-full py-[7px] text-sm text-silver-text bg-white rounded-md",
                children: "Chart"
            }), a.jsx("button", {
                onClick: () => t("my"),
                className: `w-full py-[7px] ${e==="my"?"main_gradient font-semibold text-white":"bg-white text-silver-text"} text-sm bg-white rounded-md`,
                children: "My History"
            })]
        })
    },
    Lp = () => {
        const {
            gameHistory: e
        } = ne(), t = n => {
            switch (n) {
                case "green":
                    return "#18B660";
                case "red":
                    return "#f95959";
                case "violet":
                    return "#C86EFF"
            }
        };
        return a.jsxs("div", {
            className: "mt-4 bg-white rounded-lg",
            children: [a.jsxs("div", {
                className: "flex justify-between bg-primary rounded-t-lg py-[10px]",
                children: [a.jsx("h2", {
                    className: "flex-[1.2] text-white font-semibold text-[13px] text-center px-4",
                    children: "Period"
                }), a.jsx("h2", {
                    className: "flex-1 text-white font-semibold text-[13px] text-center",
                    children: "Number"
                }), a.jsx("h2", {
                    className: "flex-1 text-white font-semibold text-[13px] text-center",
                    children: "Big Small"
                }), a.jsx("h2", {
                    className: "flex-1 text-white font-semibold text-[13px] text-center",
                    children: "Color"
                })]
            }), e.filter(n => !n.isMultipleBets).slice(-10).reverse().map(({
                period: n,
                number: r,
                bigSmall: l,
                color: i
            }) => a.jsxs("div", {
                className: "flex justify-between rounded-t-lg py-1",
                children: [a.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: a.jsx("h2", {
                        className: "flex-[1.2] text-xs text-center px-4",
                        children: n
                    })
                }), a.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: a.jsx("h2", {
                        className: `flex-1 ${r==1||r==7||r==3||r==9?"text-green":r==2||r==4||r==6||r==8?"text-primary":r==0?"red_and_violet":"green_and_violet"} text-2xl font-semibold text-center`,
                        children: r
                    })
                }), a.jsx("div", {
                    className: "flex-1 flex items-center justify-center",
                    children: a.jsx("h2", {
                        className: "flex-1 text-xs text-center",
                        children: l.charAt(0).toUpperCase() + l.slice(1)
                    })
                }), a.jsx("div", {
                    className: "flex-1 flex items-center justify-center gap-2",
                    children: i.map((o, s) => a.jsx("span", {
                        style: {
                            backgroundColor: t(o)
                        },
                        className: " w-2 h-2 rounded-full"
                    }, s))
                })]
            }, n))]
        })
    },
    Rp = () => {
        const {
            historyMode: e
        } = ne();
        return a.jsxs("div", {
            className: "mt-4 bg-white gap-8 py-6 w-full rounded-lg flex items-center justify-center",
            children: [a.jsx("span", {
                className: "bg-bg-white-1 py-[10px] px-[10px] rounded-md",
                children: a.jsx("img", {
                    src: Wi,
                    alt: "back",
                    className: "w-4 h-4 rotate-180"
                })
            }), a.jsxs("span", {
                className: "text-text-2 text-sm",
                children: ["1/", e === "game" ? 467 : 23]
            }), a.jsx("span", {
                className: "bg-primary py-[10px] px-[10px] rounded-md",
                children: a.jsx("img", {
                    src: Wi,
                    alt: "back",
                    className: "w-4 h-4 invert"
                })
            })]
        })
    },
    Fp = () => {
        const {
            gameHistory: e,
            bets: t,
            gamePeriodId: n
        } = ne();
        return a.jsxs("div", {
            className: "p-4 bg-white mt-4 space-y-4",
            children: [a.jsx("div", {
                className: "flex items-center justify-end",
                children: a.jsxs("button", {
                    className: "px-3 py-1 flex items-center gap-1 rounded-lg text-sm text-primary border border-primary",
                    children: [a.jsx("span", {
                        children: "Detail"
                    }), a.jsx("span", {
                        className: "right_arrow"
                    })]
                })
            }), a.jsxs("div", {
                children: [!!t && (t == null ? void 0 : t.map((r, l) => a.jsx("div", {
                    className: "flex pb-4 border-b border-gray-100/50 mb-4",
                    children: a.jsxs("div", {
                        className: "flex gap-2",
                        children: [a.jsx("span", {
                            className: `text-center w-[39px] h-[39px] flex items-center justify-center text-white rounded-lg ${r.selected===0?"red_to_violet":r.selected===5?"green_to_violet":r.selected==="red"?"bg-primary":r.selected==="violet"?"bg-violet":r.selected==="green"||r.selected===1||r.selected===7||r.selected===3||r.selected===9?"bg-green":r.selected==="big"?"bg-big":r.selected==="small"?"bg-small":"bg-primary"}`,
                            children: r.selected !== "red" && r.selected !== "green" && r.selected !== "violet" ? a.jsx("span", {
                                className: `${r.selected==="big"||r.selected==="small"?"text-xs":"text-2xl"} font-medium `,
                                children: r.selected
                            }) : null
                        }), a.jsxs("div", {
                            children: [a.jsx("h2", {
                                className: "text-sm text-center text-black-text",
                                children: n
                            }), a.jsx("p", {
                                className: "text-[11px] mt-1 text-silver-text ",
                                children: bs(r.timestamp)
                            })]
                        })]
                    })
                }, l))), e.filter(r => r.betAmount).slice(-10).reverse().map(({
                    selected: r,
                    period: l,
                    timestamp: i,
                    status: o,
                    betAmount: s,
                    number: u
                }, d) => a.jsxs("div", {
                    className: "flex justify-between pb-4 border-gray-100/50 border-b mb-4",
                    children: [a.jsxs("div", {
                        className: "flex gap-2",
                        children: [a.jsx("span", {
                            className: `text-center w-[39px] h-[39px] flex items-center justify-center text-white rounded-lg ${r===0?"red_to_violet":r===5?"green_to_violet":r==="red"?"bg-primary":r==="violet"?"bg-violet":r==="green"||r===1||r===7||r===3||r===9?"bg-green":r==="big"?"bg-big":r==="small"?"bg-small":"bg-primary"}`,
                            children: r !== "red" && r !== "green" && r !== "violet" ? a.jsx("span", {
                                className: `${r==="big"||r==="small"?"text-xs":"text-2xl"} font-medium `,
                                children: r
                            }) : null
                        }), a.jsxs("div", {
                            children: [a.jsx("h2", {
                                className: "text-sm text-center text-black-text",
                                children: l
                            }), a.jsx("p", {
                                className: "text-[11px] mt-1 text-silver-text ",
                                children: bs(i)
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "flex flex-col gap-[2px] justify-start items-end",
                        children: [a.jsx("button", {
                            className: `px-5 py-[1px] flex items-center gap-1 rounded-md text-[11px] border ${o==="succeed"?"text-green border-green":"text-primary border-primary"}`,
                            children: (o == null ? void 0 : o.charAt(0).toUpperCase()) + `${o==null?void 0:o.slice(1)}`
                        }), a.jsxs("span", {
                            className: `text-sm  ${o==="succeed"?"text-green":"text-primary"} mr-1 font-medium`,
                            children: [o === "succeed" ? "+" : "-", "₹", ul(o === "succeed" ? yc({
                                amount: s,
                                resultNumber: u,
                                selected: r
                            }).toFixed(2) : (s - s * .02).toFixed(2))]
                        })]
                    })]
                }, d))]
            })]
        })
    },
    Bp = () => {
        const {
            historyMode: e
        } = ne();
        return a.jsxs("section", {
            className: "my-4 px-4",
            children: [a.jsx(Dp, {}), e === "game" ? a.jsx(Lp, {}) : a.jsx(Fp, {}), a.jsx(Rp, {})]
        })
    },
    Up = () => {
        const [e, t] = D.useState(1), {
            gameMode: n,
            qtySelected: r,
            setQtySelected: l,
            betModalOpen: i,
            setBetModalOpen: o,
            setBets: s,
            bets: u,
            setToggleMsg: d,
            setBalance: h
        } = ne(), m = (i == null ? void 0 : i.selected) === "green" ? "green_arrow" : (i == null ? void 0 : i.selected) === "violet" ? "violet_arrow" : (i == null ? void 0 : i.selected) === "red" ? "red_arrow" : (i == null ? void 0 : i.selected) === 1 || (i == null ? void 0 : i.selected) === 3 || (i == null ? void 0 : i.selected) === 7 || (i == null ? void 0 : i.selected) === 9 ? "green_arrow" : (i == null ? void 0 : i.selected) === 2 || (i == null ? void 0 : i.selected) === 4 || (i == null ? void 0 : i.selected) === 6 || (i == null ? void 0 : i.selected) === 8 ? "red_arrow" : (i == null ? void 0 : i.selected) === 0 ? "red_and_violet_arrow" : (i == null ? void 0 : i.selected) === 5 ? "green_and_violet_arrow" : (i == null ? void 0 : i.selected) === "small" ? "small_arrow" : "big_arrow", g = async () => {
            const v = {
                amount: e * r,
                selected: i == null ? void 0 : i.selected,
                timestamp: Date.now()
            };
            h(x => x - v.amount), u ? u.length < 3 ? yp({
                bets: u,
                bet: v
            }) && (s([v, ...u]), d("Bet Succeed")) : d("Bets Limit Exceeded") : (d("Bet Succeed"), s([v])), o(null), l(1)
        };
        return D.useEffect(() => (document.body.style.overflow = "hidden", () => {
            document.body.style.overflow = ""
        }), []), a.jsx("div", {
            className: "fixed bottom-0 left-1/2 w-full -translate-x-1/2 flex items-end max-w-[440px] h-screen bg-black/50 z-20 mx-auto",
            children: a.jsxs("section", {
                className: "w-full h-[48vh] flex flex-col justify-between rounded-t-2xl bg-white overflow-hidden ",
                children: [a.jsxs("div", {
                    className: `${m} gap-2 flex flex-col items-center justify-center`,
                    children: [a.jsxs("h1", {
                        className: "text-white z-10 text-[18px] font-bold",
                        children: ["Win Go ", n.replace("m", "Min")]
                    }), a.jsx("div", {
                        className: "w-[80%] h-[22px] z-10 bg-white flex items-center justify-center text-sm mb-5 rounded-md",
                        children: a.jsxs("span", {
                            className: "space-x-2",
                            children: [a.jsx("span", {
                                children: "Select"
                            }), a.jsx("span", {
                                children: wp(i == null ? void 0 : i.selected)
                            })]
                        })
                    })]
                }), a.jsxs("div", {
                    className: "h-auto flex flex-col justify-end gap-3",
                    children: [a.jsxs("div", {
                        className: "flex items-center justify-between px-4",
                        children: [a.jsx("span", {
                            className: "text-gray-700 font-medium",
                            children: "Balance"
                        }), a.jsxs("div", {
                            className: "flex space-x-2",
                            children: [a.jsx("button", {
                                className: `px-3 py-[2px] rounded ${e===1?m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green text-white":m==="small_arrow"?"bg-small text-white":m==="big_arrow"?"bg-big text-white":"bg-violet text-white":"bg-gray-200 text-gray-700"}`,
                                onClick: () => t(1),
                                children: "1"
                            }), a.jsx("button", {
                                className: `px-3 py-[2px] rounded ${e===10?m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green text-white":m==="small_arrow"?"bg-small text-white":m==="big_arrow"?"bg-big text-white":"bg-violet text-white":"bg-gray-200 text-gray-700"}`,
                                onClick: () => t(10),
                                children: "10"
                            }), a.jsx("button", {
                                className: `px-3 py-[2px] rounded ${e===100?m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green text-white":m==="small_arrow"?"bg-small text-white":m==="big_arrow"?"bg-big text-white":"bg-violet text-white":"bg-gray-200 text-gray-700"}`,
                                onClick: () => t(100),
                                children: "100"
                            }), a.jsx("button", {
                                className: `px-3 py-[2px] rounded ${e===1e3?m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green text-white":m==="small_arrow"?"bg-small text-white":m==="big_arrow"?"bg-big text-white":"bg-violet text-white":"bg-gray-200 text-gray-700"}`,
                                onClick: () => t(1e3),
                                children: "1000"
                            })]
                        })]
                    }), a.jsxs("div", {
                        className: "flex items-center justify-between px-4",
                        children: [a.jsx("span", {
                            className: "text-gray-700 font-medium",
                            children: "Quantity"
                        }), a.jsxs("div", {
                            className: "flex items-center space-x-2",
                            children: [a.jsx("button", {
                                className: `px-3 py-1 rounded ${m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green text-white":m==="small_arrow"?"bg-small text-white":m==="big_arrow"?"bg-big text-white":"bg-violet text-white"} text-white`,
                                onClick: () => l(Math.max(1, r - 1)),
                                children: "–"
                            }), a.jsx("div", {
                                className: "w-[102px] flex items-center justify-center py-1 bg-bg-white-2 text-gray-700 rounded",
                                children: a.jsx("span", {
                                    children: r
                                })
                            }), a.jsx("button", {
                                className: `px-3 py-1 rounded text-white ${m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green text-white":m==="small_arrow"?"bg-small text-white":m==="big_arrow"?"bg-big text-white":"bg-violet text-white"}`,
                                onClick: () => l(r + 1),
                                children: "+"
                            })]
                        })]
                    }), a.jsx("div", {
                        className: "flex justify-end px-4 gap-2",
                        children: gc.map((v, x) => a.jsxs("span", {
                            onClick: () => l(v),
                            className: `text-sm ${r===v?m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green  text-white":m==="small_arrow"?"bg-small text-white":m==="big_arrow"?"bg-big text-white":"bg-violet text-white":"bg-bg-white-2"}  px-2 py-[6px] rounded-md font-medium`,
                            children: ["X", v]
                        }, x))
                    }), a.jsx("div", {
                        className: "px-4",
                        children: a.jsxs("div", {
                            className: "agreement-container",
                            children: [a.jsx("div", {
                                className: "icon",
                                children: "✔"
                            }), a.jsx("span", {
                                className: "text",
                                children: "I agree"
                            }), a.jsx("span", {
                                className: "rules",
                                children: "《Pre-sale rules》"
                            })]
                        })
                    }), a.jsxs("div", {
                        className: "flex",
                        children: [a.jsx("button", {
                            onClick: () => o(null),
                            className: "bg-bg-white-2 text-silver-text px-12 text-sm py-2",
                            children: "Cancel"
                        }), a.jsxs("button", {
                            onClick: () => g(),
                            className: `w-full ${m==="red_and_violet_arrow"?"bg-primary text-white":m==="green_and_violet_arrow"?"bg-green text-white":m==="red_arrow"?"bg-primary text-white":m==="green_arrow"?"bg-green text-white":m==="small_arrow"?"bg-small":m==="big_arrow"?"bg-big":"bg-violet text-white"} text-white px-12 text-sm py-3`,
                            children: ["Total amount ₹", (e * r).toFixed(2)]
                        })]
                    })]
                })]
            })
        })
    },
    Op = "/assets/won-CVBJxzJu.png",
    Qp = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAQlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////8IX9KGAAAAFXRSTlMA7zDfIBBgQJ9wv8+AkFCgj3+vb7CjQUNJAAAEJklEQVRo3u2b63LbIBCFuV8lWXaq93/VTtNJTjFE8pGEnelkf9rAZ3bPrhBg8WObZpUbQtJaLn9M5xQG563oayoGvTQt36ISfcz6IJdV02E6HwvqqsngT53sFdRN086chDWzXDgL5gxsIIgEmnAyZ9dDGTbploBuY5yUeR/YGu/jmGQz1vu9nOrRxrZ0zHTJp/nb3c8jxdWRjEtnTNrOdw4e1AM+utzFZqYjbcoRcnx0BFd21KS7vSx6eypEen/ft8LJEV/sQRPdr//2G4kwIdZFSrNceIo3r3kyuJgub3Zkydd2dHmLBZnRlVYHny+aUJgnUpAi+4ebZnvCCiIjbGa1IcFlyXptwJng0uR5peLg5/HcbSe6jQBv6IpX2GaYsbra4HKm5OcDfcPRRFknK8m0HoyxWP7I5cY5oO4zrkrn2vrWyPfgKN610rTmNDR+ZrPG3JaFJStZB9TX+qqVFYSAfXZQtJSkaDk7VBNuZ5IEmZXwUghIfpUwoZ3laQGZ5P5qK3v8asJ3n0uGDG4dTf3xuW3nsKuGWiMTjX1b2BoTZshM09wSnceEieG4hrGVrgETJgbkmlnZyCh8RgzJNhpqeU1IMmJQugl8fe/pxEyHd0qq/KohLYJMciEvWfnAENLhuahS6u6XZCZZeC48G/Hsg+8JMl1ixjtQxsKEIfOlzZXlwiLEDJnnIsgW9RJiI8gkF4VKFQ5IgiPTXKjJFaVsFCSZ5oqxeDReIHKSTHKRuKGoZF6wZJYrpiKqGWCSzHKFKvJJI5soMs8VpgAjuSgyz0XJkAWYfVnguWDtAIMM7v8PPsnV8vniWl6ZTgCr3gUED8JclMypd8kEOL3sIfHax6LDm3TvhUAqFgLq+Usf/9rFHt5gei9vJ2RTIeux94I+QE2FyHXvV5iMxH3pSxvEFvu+prrKs5dXvZh7+KDfVgQ8PdUbMkPPzZeAQlX5WlpiSLaZhqdrX8d+G2yuscEGXed+W4rtXcsBP+fMTdTtbVor+28bt6vU2I7ybf9GeWpPOFRJ1hR2weXIshi+mjAyqnn2KAsuR948akE0a30lcFnyr1a6YsKw4fkHXvi2dra5LTIZAtvqM6+fDk+9DjXftk6QEylh8oWpVhYC2vfgWpvvdlSP+tXlcsL4Ha9jIMwgn8U13/PKjRDxPLIiLhmhdB6vJG8IG0rlJrm+3shfryS5IB+/OgcuT16C2TVdkguFwbTbE11Y5D0F9P6+0tMpuAttYy47mn3XG2H6kVgr3AM/cL3S6aW05FbZJqalNAk/7bvICsthasKNm3XVOKHpgUnDZJqj9x9X2dUU51vzKvt06PEyLPtMDojuUX/zf1d4NlqOR7GQjuacfKL5y7P/hAObLnqTakUfU/GW21AdohJ9zXo3hJT130lqncLglBU/tmW/ATL/KL98tI2VAAAAAElFTkSuQmCC",
    Hp = () => {
        const {
            setOpenResult: e,
            setBets: t,
            bets: n,
            totalWinAmount: r,
            setTotalWinAmount: l
        } = ne(), i = () => {
            l(0), e(!1), t(null)
        };
        return D.useEffect(() => (document.body.style.overflow = "hidden", () => {
            document.body.style.overflow = "auto"
        }), []), a.jsx("div", {
            className: "fixed top-0 left-0 w-full h-full",
            children: a.jsx("div", {
                className: "flex items-center justify-center max-w-[440px] h-screen bg-black/50 mx-auto",
                children: a.jsxs("section", {
                    className: "flex items-center justify-center flex-col gap-2 relative",
                    children: [a.jsx("img", {
                        src: Op,
                        alt: "result",
                        className: "h-[60vh]"
                    }), a.jsx("img", {
                        onClick: () => i(),
                        src: Qp,
                        alt: "close button",
                        className: "w-[32px]"
                    }), a.jsxs("div", {
                        className: "absolute top-0 left-0 w-full flex flex-col items-center",
                        children: [a.jsx("h1", {
                            className: "text-white font-semibold text-[3.2vh] mt-[18vh]",
                            children: "Congratulations"
                        }), a.jsxs("div", {
                            className: "flex gap-2 items-center w-full px-10 mt-[5vh]",
                            children: [a.jsx("span", {
                                className: "text-[1.5vh] text-white whitespace-nowrap",
                                children: "Lottery results"
                            }), a.jsxs("div", {
                                className: "flex items-center gap-2 text-[1.4vh] text-white ",
                                children: [a.jsx("span", {
                                    className: `${n[0].number===1||n[0].number===3||n[0].number===7||n[0].number===9?"bg-green":n[0].number===2||n[0].number===4||n[0].number===6||n[0].number===8?"bg-primary":n[0].number===0?"red_to_violet":"green_to_violet"} border border-white px-2 py-[2px] rounded-md`,
                                    children: n[0].color.map((o, s) => a.jsx("span", {
                                        className: "mr-1",
                                        children: o.charAt(0).toUpperCase() + o.slice(1)
                                    }, s))
                                }), a.jsx("span", {
                                    className: ` 
                    ${n[0].number===1||n[0].number===3||n[0].number===7||n[0].number===9?"bg-green":n[0].number===2||n[0].number===4||n[0].number===6||n[0].number===8?"bg-primary":n[0].number===0?"red_to_violet":"green_to_violet"} 
                     border border-white p-[2px] px-2 rounded-full`,
                                    children: n[0].number
                                }), a.jsx("span", {
                                    className: `${n[0].number===1||n[0].number===3||n[0].number===7||n[0].number===9?"bg-green":n[0].number===2||n[0].number===4||n[0].number===6||n[0].number===8?"bg-primary":n[0].number===0?"red_to_violet":"green_to_violet"}  border border-white px-2 py-[2px] rounded-md`,
                                    children: n[0].bigSmall.charAt(0).toUpperCase() + n[0].bigSmall.slice(1)
                                })]
                            })]
                        }), a.jsxs("div", {
                            className: "flex flex-col justify-center items-center mt-[4.8vh]",
                            children: [a.jsx("h2", {
                                className: "text-primary font-semibold text-[2vh]",
                                children: "Bonus"
                            }), a.jsxs("p", {
                                className: "text-primary font-semibold text-[2.5vh]",
                                children: [a.jsx("span", {
                                    className: "text-[2.8vh]",
                                    children: "₹"
                                }), a.jsx("span", {
                                    children: ul(r.toFixed(2))
                                })]
                            }), a.jsxs("p", {
                                className: "text-[1.5vh] text-silver-text mt-1",
                                children: ["Period: 1 minute ", n[0].period]
                            })]
                        }), a.jsxs("div", {
                            className: "flex items-center mt-14 mr-24",
                            children: [a.jsx("span", {
                                className: "w-[3.2vh] h-[3.2vh] border border-black rounded-full"
                            }), a.jsx("span", {
                                className: "text-white text-[1.6vh] ml-[1.2vh] font-medium",
                                children: "3 seconds auto close"
                            })]
                        })]
                    })]
                })
            })
        })
    };

function Kp() {
    const {
        betModalOpen: e,
        openResult: t,
        toggleMsg: n
    } = ne();
    return a.jsxs(a.Fragment, {
        children: [a.jsxs("main", {
            className: "relative max-w-[440px] select-none mx-auto min-h-screen pb-1 bg-bg-white-2",
            children: [a.jsx(fp, {}), a.jsx(kp, {}), a.jsx(Pp, {}), a.jsx(Mp, {}), a.jsx(Bp, {}), t && a.jsx(Hp, {}), a.jsx(op, {}), n ? a.jsx(rp, {
                msg: n
            }) : null]
        }), !!e && a.jsx(Up, {})]
    })
}
pc(document.getElementById("root")).render(a.jsx(D.StrictMode, {
    children: a.jsx(up, {
        children: a.jsx(Kp, {})
    })
}));