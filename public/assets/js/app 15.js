/*!
 * digipants: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var digipants = digipants || [];
 *   digipants.push(readyFunction);
 */ !(function (t) {
    var e = {};
    function n(r) {
        if (e[r]) return e[r].exports;
        var i = (e[r] = { i: r, l: !1, exports: {} });
        return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = t),
        (n.c = e),
        (n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
        }),
        (n.r = function (t) {
            "undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
                Object.defineProperty(t, "__esModule", { value: !0 });
        }),
        (n.t = function (t, e) {
            if ((1 & e && (t = n(t)), 8 & e)) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (
                (n.r(r),
                    Object.defineProperty(r, "default", { enumerable: !0, value: t }),
                    2 & e && "string" != typeof t)
            )
                for (var i in t)
                    n.d(
                        r,
                        i,
                        function (e) {
                            return t[e];
                        }.bind(null, i)
                    );
            return r;
        }),
        (n.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                        return t.default;
                    }
                    : function () {
                        return t;
                    };
            return n.d(e, "a", e), e;
        }),
        (n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (n.p = ""),
        n((n.s = 120));
})([
    function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
    },
    function (t, e) {
        var n = Array.isArray;
        t.exports = n;
    },
    function (t, e, n) {
        "use strict";
        var r = n(13);
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
        e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
        var o = n(170);
        Object.keys(o).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return o[t];
                        },
                    }));
        });
        var a = n(171);
        Object.keys(a).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return a[t];
                        },
                    }));
        });
        var u = n(172);
        Object.keys(u).forEach(function (t) {
            "default" !== t &&
                "__esModule" !== t &&
                (Object.prototype.hasOwnProperty.call(i, t) ||
                    Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: function () {
                            return u[t];
                        },
                    }));
        });
        var c = r(n(173));
        e.IX2EngineActionTypes = c;
        var s = r(n(174));
        e.IX2EngineConstants = s;
    },
    function (t, e, n) {
        (function (e) {
            var n = "object",
                r = function (t) {
                    return t && t.Math == Math && t;
                };
            t.exports =
                r(typeof globalThis == n && globalThis) ||
                r(typeof window == n && window) ||
                r(typeof self == n && self) ||
                r(typeof e == n && e) ||
                Function("return this")();
        }).call(this, n(22));
    },
    function (t, e, n) {
        "use strict";
        var r = {},
            i = {},
            o = [],
            a = window.digipants || [],
            u = window.jQuery,
            c = u(window),
            s = u(document),
            f = u.isFunction,
            l = (r._ = n(122)),
            d = (r.tram = n(65) && u.tram),
            p = !1,
            v = !1;
        function h(t) {
            r.env() &&
                (f(t.design) && c.on("__wf_design", t.design),
                    f(t.preview) && c.on("__wf_preview", t.preview)),
                f(t.destroy) && c.on("__wf_destroy", t.destroy),
                t.ready &&
                f(t.ready) &&
                (function (t) {
                    if (p) return void t.ready();
                    if (l.contains(o, t.ready)) return;
                    o.push(t.ready);
                })(t);
        }
        function g(t) {
            f(t.design) && c.off("__wf_design", t.design),
                f(t.preview) && c.off("__wf_preview", t.preview),
                f(t.destroy) && c.off("__wf_destroy", t.destroy),
                t.ready &&
                f(t.ready) &&
                (function (t) {
                    o = l.filter(o, function (e) {
                        return e !== t.ready;
                    });
                })(t);
        }
        (d.config.hideBackface = !1),
            (d.config.keepInherited = !0),
            (r.define = function (t, e, n) {
                i[t] && g(i[t]);
                var r = (i[t] = e(u, l, n) || {});
                return h(r), r;
            }),
            (r.require = function (t) {
                return i[t];
            }),
            (r.push = function (t) {
                p ? f(t) && t() : a.push(t);
            }),
            (r.env = function (t) {
                var e = window.__wf_design,
                    n = void 0 !== e;
                return t
                    ? "design" === t
                        ? n && e
                        : "preview" === t
                            ? n && !e
                            : "slug" === t
                                ? n && window.__wf_slug
                                : "editor" === t
                                    ? window.digipantsEditor
                                    : "test" === t
                                        ? window.__wf_test
                                        : "frame" === t
                                            ? window !== window.top
                                            : void 0
                    : n;
            });
        var E,
            _ = navigator.userAgent.toLowerCase(),
            m = (r.env.touch =
                "ontouchstart" in window ||
                (window.DocumentTouch && document instanceof window.DocumentTouch)),
            y = (r.env.chrome =
                /chrome/.test(_) &&
                /Google/.test(navigator.vendor) &&
                parseInt(_.match(/chrome\/(\d+)\./)[1], 10)),
            I = (r.env.ios = /(ipod|iphone|ipad)/.test(_));
        (r.env.safari = /safari/.test(_) && !y && !I),
            m &&
            s.on("touchstart mousedown", function (t) {
                E = t.target;
            }),
            (r.validClick = m
                ? function (t) {
                    return t === E || u.contains(t, E);
                }
                : function () {
                    return !0;
                });
        var b,
            T = "resize.digipants orientationchange.digipants load.digipants";
        function w(t, e) {
            var n = [],
                r = {};
            return (
                (r.up = l.throttle(function (t) {
                    l.each(n, function (e) {
                        e(t);
                    });
                })),
                t && e && t.on(e, r.up),
                (r.on = function (t) {
                    "function" == typeof t && (l.contains(n, t) || n.push(t));
                }),
                (r.off = function (t) {
                    n = arguments.length
                        ? l.filter(n, function (e) {
                            return e !== t;
                        })
                        : [];
                }),
                r
            );
        }
        function O(t) {
            f(t) && t();
        }
        function A() {
            b && (b.reject(), c.off("load", b.resolve)),
                (b = new u.Deferred()),
                c.on("load", b.resolve);
        }
        (r.resize = w(c, T)),
            (r.scroll = w(
                c,
                "scroll.digipants resize.digipants orientationchange.digipants load.digipants"
            )),
            (r.redraw = w()),
            (r.location = function (t) {
                window.location = t;
            }),
            r.env() && (r.location = function () { }),
            (r.ready = function () {
                (p = !0),
                    v ? ((v = !1), l.each(i, h)) : l.each(o, O),
                    l.each(a, O),
                    r.resize.up();
            }),
            (r.load = function (t) {
                b.then(t);
            }),
            (r.destroy = function (t) {
                (t = t || {}),
                    (v = !0),
                    c.triggerHandler("__wf_destroy"),
                    null != t.domready && (p = t.domready),
                    l.each(i, g),
                    r.resize.off(),
                    r.scroll.off(),
                    r.redraw.off(),
                    (o = []),
                    (a = []),
                    "pending" === b.state() && A();
            }),
            u(r.ready),
            A(),
            (t.exports = window.digipants = r);
    },
    function (t, e, n) {
        var r = n(89),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r || i || Function("return this")();
        t.exports = o;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return null != t && ("object" == e || "function" == e);
        };
    },
    function (t, e, n) {
        var r = n(177),
            i = n(231),
            o = n(59),
            a = n(1),
            u = n(240);
        t.exports = function (t) {
            return "function" == typeof t
                ? t
                : null == t
                    ? o
                    : "object" == typeof t
                        ? a(t)
                            ? i(t[0], t[1])
                            : r(t)
                        : u(t);
        };
    },
    function (t, e, n) {
        var r = n(189),
            i = n(194);
        t.exports = function (t, e) {
            var n = i(t, e);
            return r(n) ? n : void 0;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return null != t && "object" == typeof t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(13);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.IX2VanillaUtils =
                e.IX2VanillaPlugins =
                e.IX2ElementsReducer =
                e.IX2EasingUtils =
                e.IX2Easings =
                e.IX2BrowserSupport =
                void 0);
        var i = r(n(44));
        e.IX2BrowserSupport = i;
        var o = r(n(106));
        e.IX2Easings = o;
        var a = r(n(108));
        e.IX2EasingUtils = a;
        var u = r(n(247));
        e.IX2ElementsReducer = u;
        var c = r(n(110));
        e.IX2VanillaPlugins = c;
        var s = r(n(249));
        e.IX2VanillaUtils = s;
    },
    function (t, e, n) {
        var r = n(19),
            i = n(190),
            o = n(191),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            return null == t
                ? void 0 === t
                    ? u
                    : a
                : c && c in Object(t)
                    ? i(t)
                    : o(t);
        };
    },
    function (t, e, n) {
        var r = n(88),
            i = n(52);
        t.exports = function (t) {
            return null != t && i(t.length) && !r(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r =
                            Object.defineProperty && Object.getOwnPropertyDescriptor
                                ? Object.getOwnPropertyDescriptor(t, n)
                                : {};
                        r.get || r.set ? Object.defineProperty(e, n, r) : (e[n] = t[n]);
                    }
            return (e.default = t), e;
        };
    },
    function (t, e, n) {
        var r = n(15);
        t.exports = !r(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (t, e) {
        t.exports = function (t) {
            try {
                return !!t();
            } catch (t) {
                return !0;
            }
        };
    },
    function (t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function (t, e) {
            return n.call(t, e);
        };
    },
    function (t, e, n) {
        var r = n(14),
            i = n(38),
            o = n(67);
        t.exports = r
            ? function (t, e, n) {
                return i.f(t, e, o(1, n));
            }
            : function (t, e, n) {
                return (t[e] = n), t;
            };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var r =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t &&
                        "function" == typeof Symbol &&
                        t.constructor === Symbol &&
                        t !== Symbol.prototype
                        ? "symbol"
                        : typeof t;
                };
        (e.clone = c),
            (e.addLast = l),
            (e.addFirst = d),
            (e.removeLast = p),
            (e.removeFirst = v),
            (e.insert = h),
            (e.removeAt = g),
            (e.replaceAt = E),
            (e.getIn = _),
            (e.set = m),
            (e.setIn = y),
            (e.update = I),
            (e.updateIn = b),
            (e.merge = T),
            (e.mergeDeep = w),
            (e.mergeIn = O),
            (e.omit = A),
            (e.addDefaults = x);
        /*!
         * Timm
         *
         * Immutability helpers with fast reads and acceptable writes.
         *
         * @copyright Guillermo Grau Panea 2016
         * @license MIT
         */
        var i = "INVALID_ARGS";
        function o(t) {
            throw new Error(t);
        }
        function a(t) {
            var e = Object.keys(t);
            return Object.getOwnPropertySymbols
                ? e.concat(Object.getOwnPropertySymbols(t))
                : e;
        }
        var u = {}.hasOwnProperty;
        function c(t) {
            if (Array.isArray(t)) return t.slice();
            for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
                var i = e[r];
                n[i] = t[i];
            }
            return n;
        }
        function s(t, e, n) {
            var r = n;
            null == r && o(i);
            for (
                var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3;
                p < l;
                p++
            )
                d[p - 3] = arguments[p];
            for (var v = 0; v < d.length; v++) {
                var h = d[v];
                if (null != h) {
                    var g = a(h);
                    if (g.length)
                        for (var E = 0; E <= g.length; E++) {
                            var _ = g[E];
                            if (!t || void 0 === r[_]) {
                                var m = h[_];
                                e && f(r[_]) && f(m) && (m = s(t, e, r[_], m)),
                                    void 0 !== m &&
                                    m !== r[_] &&
                                    (u || ((u = !0), (r = c(r))), (r[_] = m));
                            }
                        }
                }
            }
            return r;
        }
        function f(t) {
            var e = void 0 === t ? "undefined" : r(t);
            return null != t && ("object" === e || "function" === e);
        }
        function l(t, e) {
            return Array.isArray(e) ? t.concat(e) : t.concat([e]);
        }
        function d(t, e) {
            return Array.isArray(e) ? e.concat(t) : [e].concat(t);
        }
        function p(t) {
            return t.length ? t.slice(0, t.length - 1) : t;
        }
        function v(t) {
            return t.length ? t.slice(1) : t;
        }
        function h(t, e, n) {
            return t
                .slice(0, e)
                .concat(Array.isArray(n) ? n : [n])
                .concat(t.slice(e));
        }
        function g(t, e) {
            return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1));
        }
        function E(t, e, n) {
            if (t[e] === n) return t;
            for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
            return (i[e] = n), i;
        }
        function _(t, e) {
            if ((!Array.isArray(e) && o(i), null != t)) {
                for (var n = t, r = 0; r < e.length; r++) {
                    var a = e[r];
                    if (void 0 === (n = null != n ? n[a] : void 0)) return n;
                }
                return n;
            }
        }
        function m(t, e, n) {
            var r = null == t ? ("number" == typeof e ? [] : {}) : t;
            if (r[e] === n) return r;
            var i = c(r);
            return (i[e] = n), i;
        }
        function y(t, e, n) {
            return e.length
                ? (function t(e, n, r, i) {
                    var o = void 0,
                        a = n[i];
                    o =
                        i === n.length - 1
                            ? r
                            : t(
                                f(e) && f(e[a])
                                    ? e[a]
                                    : "number" == typeof n[i + 1]
                                        ? []
                                        : {},
                                n,
                                r,
                                i + 1
                            );
                    return m(e, a, o);
                })(t, e, n, 0)
                : n;
        }
        function I(t, e, n) {
            return m(t, e, n(null == t ? void 0 : t[e]));
        }
        function b(t, e, n) {
            return y(t, e, n(_(t, e)));
        }
        function T(t, e, n, r, i, o) {
            for (
                var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
                c < a;
                c++
            )
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u))
                : s(!1, !1, t, e, n, r, i, o);
        }
        function w(t, e, n, r, i, o) {
            for (
                var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
                c < a;
                c++
            )
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u))
                : s(!1, !0, t, e, n, r, i, o);
        }
        function O(t, e, n, r, i, o, a) {
            var u = _(t, e);
            null == u && (u = {});
            for (
                var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7;
                l < c;
                l++
            )
                f[l - 7] = arguments[l];
            return y(
                t,
                e,
                f.length
                    ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f))
                    : s(!1, !1, u, n, r, i, o, a)
            );
        }
        function A(t, e) {
            for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
                if (u.call(t, n[i])) {
                    r = !0;
                    break;
                }
            if (!r) return t;
            for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
                var f = c[s];
                n.indexOf(f) >= 0 || (o[f] = t[f]);
            }
            return o;
        }
        function x(t, e, n, r, i, o) {
            for (
                var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6;
                c < a;
                c++
            )
                u[c - 6] = arguments[c];
            return u.length
                ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u))
                : s(!0, !1, t, e, n, r, i, o);
        }
        var S = {
            clone: c,
            addLast: l,
            addFirst: d,
            removeLast: p,
            removeFirst: v,
            insert: h,
            removeAt: g,
            replaceAt: E,
            getIn: _,
            set: m,
            setIn: y,
            update: I,
            updateIn: b,
            merge: T,
            mergeDeep: w,
            mergeIn: O,
            omit: A,
            addDefaults: x,
        };
        e.default = S;
    },
    function (t, e, n) {
        var r = n(5).Symbol;
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(35),
            i = 1 / 0;
        t.exports = function (t) {
            if ("string" == typeof t || r(t)) return t;
            var e = t + "";
            return "0" == e && 1 / t == -i ? "-0" : e;
        };
    },
    function (t, e) {
        function n(t) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                    }
                    : function (t) {
                        return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                    })(t);
        }
        function r(e) {
            return (
                "function" == typeof Symbol && "symbol" === n(Symbol.iterator)
                    ? (t.exports = r =
                        function (t) {
                            return n(t);
                        })
                    : (t.exports = r =
                        function (t) {
                            return t &&
                                "function" == typeof Symbol &&
                                t.constructor === Symbol &&
                                t !== Symbol.prototype
                                ? "symbol"
                                : n(t);
                        }),
                r(e)
            );
        }
        t.exports = r;
    },
    function (t, e) {
        var n;
        n = (function () {
            return this;
        })();
        try {
            n = n || new Function("return this")();
        } catch (t) {
            "object" == typeof window && (n = window);
        }
        t.exports = n;
    },
    function (t, e) {
        t.exports = function (t) {
            return "object" == typeof t ? null !== t : "function" == typeof t;
        };
    },
    function (t, e, n) {
        var r = n(23);
        t.exports = function (t) {
            if (!r(t)) throw TypeError(String(t) + " is not an object");
            return t;
        };
    },
    function (t, e, n) {
        var r = n(3),
            i = n(39),
            o = n(136),
            a = r["__core-js_shared__"] || i("__core-js_shared__", {});
        (t.exports = function (t, e) {
            return a[t] || (a[t] = void 0 !== e ? e : {});
        })("versions", []).push({
            version: "3.1.3",
            mode: o ? "pure" : "global",
            copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)",
        });
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return (
                e in t
                    ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                    })
                    : (t[e] = n),
                t
            );
        };
    },
    function (t, e) {
        function n() {
            return (
                (t.exports = n =
                    Object.assign ||
                    function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }),
                n.apply(this, arguments)
            );
        }
        t.exports = n;
    },
    function (t, e, n) {
        var r = n(179),
            i = n(180),
            o = n(181),
            a = n(182),
            u = n(183);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function (t, e, n) {
        var r = n(45);
        t.exports = function (t, e) {
            for (var n = t.length; n--;) if (r(t[n][0], e)) return n;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(8)(Object, "create");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(203);
        t.exports = function (t, e) {
            var n = t.__data__;
            return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map;
        };
    },
    function (t, e, n) {
        var r = n(96),
            i = n(53),
            o = n(12);
        t.exports = function (t) {
            return o(t) ? r(t) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(221),
            i = n(9),
            o = Object.prototype,
            a = o.hasOwnProperty,
            u = o.propertyIsEnumerable,
            c = r(
                (function () {
                    return arguments;
                })()
            )
                ? r
                : function (t) {
                    return i(t) && a.call(t, "callee") && !u.call(t, "callee");
                };
        t.exports = c;
    },
    function (t, e, n) {
        var r = n(1),
            i = n(58),
            o = n(232),
            a = n(235);
        t.exports = function (t, e) {
            return r(t) ? t : i(t, e) ? [t] : o(a(t));
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(9),
            o = "[object Symbol]";
        t.exports = function (t) {
            return "symbol" == typeof t || (i(t) && r(t) == o);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(124);
        function i(t, e) {
            var n = document.createEvent("CustomEvent");
            n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n);
        }
        var o = window.jQuery,
            a = {},
            u = {
                reset: function (t, e) {
                    r.triggers.reset(t, e);
                },
                intro: function (t, e) {
                    r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE");
                },
                outro: function (t, e) {
                    r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE");
                },
            };
        (a.triggers = {}),
            (a.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
            o.extend(a.triggers, u),
            (t.exports = a);
    },
    function (t, e, n) {
        var r = n(132),
            i = n(134);
        t.exports = function (t) {
            return r(i(t));
        };
    },
    function (t, e, n) {
        var r = n(14),
            i = n(69),
            o = n(24),
            a = n(68),
            u = Object.defineProperty;
        e.f = r
            ? u
            : function (t, e, n) {
                if ((o(t), (e = a(e, !0)), o(n), i))
                    try {
                        return u(t, e, n);
                    } catch (t) { }
                if ("get" in n || "set" in n)
                    throw TypeError("Accessors not supported");
                return "value" in n && (t[e] = n.value), t;
            };
    },
    function (t, e, n) {
        var r = n(3),
            i = n(17);
        t.exports = function (t, e) {
            try {
                i(r, t, e);
            } catch (n) {
                r[t] = e;
            }
            return e;
        };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e) {
        t.exports = [
            "constructor",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "toLocaleString",
            "toString",
            "valueOf",
        ];
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "ActionTypes", function () {
                return o;
            }),
            n.d(e, "default", function () {
                return a;
            });
        var r = n(79),
            i = n(165),
            o = { INIT: "@@redux/INIT" };
        function a(t, e, n) {
            var u;
            if (
                ("function" == typeof e && void 0 === n && ((n = e), (e = void 0)),
                    void 0 !== n)
            ) {
                if ("function" != typeof n)
                    throw new Error("Expected the enhancer to be a function.");
                return n(a)(t, e);
            }
            if ("function" != typeof t)
                throw new Error("Expected the reducer to be a function.");
            var c = t,
                s = e,
                f = [],
                l = f,
                d = !1;
            function p() {
                l === f && (l = f.slice());
            }
            function v() {
                return s;
            }
            function h(t) {
                if ("function" != typeof t)
                    throw new Error("Expected listener to be a function.");
                var e = !0;
                return (
                    p(),
                    l.push(t),
                    function () {
                        if (e) {
                            (e = !1), p();
                            var n = l.indexOf(t);
                            l.splice(n, 1);
                        }
                    }
                );
            }
            function g(t) {
                if (!Object(r.default)(t))
                    throw new Error(
                        "Actions must be plain objects. Use custom middleware for async actions."
                    );
                if (void 0 === t.type)
                    throw new Error(
                        'Actions may not have an undefined "type" property. Have you misspelled a constant?'
                    );
                if (d) throw new Error("Reducers may not dispatch actions.");
                try {
                    (d = !0), (s = c(s, t));
                } finally {
                    d = !1;
                }
                for (var e = (f = l), n = 0; n < e.length; n++) e[n]();
                return t;
            }
            return (
                g({ type: o.INIT }),
                ((u = {
                    dispatch: g,
                    subscribe: h,
                    getState: v,
                    replaceReducer: function (t) {
                        if ("function" != typeof t)
                            throw new Error("Expected the nextReducer to be a function.");
                        (c = t), g({ type: o.INIT });
                    },
                })[i.default] = function () {
                    var t,
                        e = h;
                    return (
                        ((t = {
                            subscribe: function (t) {
                                if ("object" != typeof t)
                                    throw new TypeError("Expected the observer to be an object.");
                                function n() {
                                    t.next && t.next(v());
                                }
                                return n(), { unsubscribe: e(n) };
                            },
                        })[i.default] = function () {
                            return this;
                        }),
                        t
                    );
                }),
                u
            );
        }
    },
    function (t, e, n) {
        "use strict";
        function r() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            if (0 === e.length)
                return function (t) {
                    return t;
                };
            if (1 === e.length) return e[0];
            var r = e[e.length - 1],
                i = e.slice(0, -1);
            return function () {
                return i.reduceRight(function (t, e) {
                    return e(t);
                }, r.apply(void 0, arguments));
            };
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.TRANSFORM_STYLE_PREFIXED =
                e.TRANSFORM_PREFIXED =
                e.FLEX_PREFIXED =
                e.ELEMENT_MATCHES =
                e.withBrowser =
                e.IS_BROWSER_ENV =
                void 0);
        var i = r(n(85)),
            o = "undefined" != typeof window;
        e.IS_BROWSER_ENV = o;
        var a = function (t, e) {
            return o ? t() : e;
        };
        e.withBrowser = a;
        var u = a(function () {
            return (0,
                i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (t) {
                    return t in Element.prototype;
                });
        });
        e.ELEMENT_MATCHES = u;
        var c = a(function () {
            var t = document.createElement("i"),
                e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
            try {
                for (var n = e.length, r = 0; r < n; r++) {
                    var i = e[r];
                    if (((t.style.display = i), t.style.display === i)) return i;
                }
                return "";
            } catch (t) {
                return "";
            }
        }, "flex");
        e.FLEX_PREFIXED = c;
        var s = a(function () {
            var t = document.createElement("i");
            if (null == t.style.transform)
                for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                    var i = e[r] + "Transform";
                    if (void 0 !== t.style[i]) return i;
                }
            return "transform";
        }, "transform");
        e.TRANSFORM_PREFIXED = s;
        var f = s.split("transform")[0],
            l = f ? f + "TransformStyle" : "transformStyle";
        e.TRANSFORM_STYLE_PREFIXED = l;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t === e || (t != t && e != e);
        };
    },
    function (t, e, n) {
        var r = n(8)(n(5), "Map");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(195),
            i = n(202),
            o = n(204),
            a = n(205),
            u = n(206);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
            return t;
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(5),
                i = n(222),
                o = e && !e.nodeType && e,
                a = o && "object" == typeof t && t && !t.nodeType && t,
                u = a && a.exports === o ? r.Buffer : void 0,
                c = (u ? u.isBuffer : void 0) || i;
            t.exports = c;
        }).call(this, n(97)(t));
    },
    function (t, e) {
        var n = 9007199254740991,
            r = /^(?:0|[1-9]\d*)$/;
        t.exports = function (t, e) {
            var i = typeof t;
            return (
                !!(e = null == e ? n : e) &&
                ("number" == i || ("symbol" != i && r.test(t))) &&
                t > -1 &&
                t % 1 == 0 &&
                t < e
            );
        };
    },
    function (t, e, n) {
        var r = n(223),
            i = n(224),
            o = n(225),
            a = o && o.isTypedArray,
            u = a ? i(a) : r;
        t.exports = u;
    },
    function (t, e) {
        var n = 9007199254740991;
        t.exports = function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n;
        };
    },
    function (t, e, n) {
        var r = n(54),
            i = n(226),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return i(t);
            var e = [];
            for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
            return e;
        };
    },
    function (t, e) {
        var n = Object.prototype;
        t.exports = function (t) {
            var e = t && t.constructor;
            return t === (("function" == typeof e && e.prototype) || n);
        };
    },
    function (t, e, n) {
        var r = n(227),
            i = n(46),
            o = n(228),
            a = n(229),
            u = n(99),
            c = n(11),
            s = n(90),
            f = s(r),
            l = s(i),
            d = s(o),
            p = s(a),
            v = s(u),
            h = c;
        ((r && "[object DataView]" != h(new r(new ArrayBuffer(1)))) ||
            (i && "[object Map]" != h(new i())) ||
            (o && "[object Promise]" != h(o.resolve())) ||
            (a && "[object Set]" != h(new a())) ||
            (u && "[object WeakMap]" != h(new u()))) &&
            (h = function (t) {
                var e = c(t),
                    n = "[object Object]" == e ? t.constructor : void 0,
                    r = n ? s(n) : "";
                if (r)
                    switch (r) {
                        case f:
                            return "[object DataView]";
                        case l:
                            return "[object Map]";
                        case d:
                            return "[object Promise]";
                        case p:
                            return "[object Set]";
                        case v:
                            return "[object WeakMap]";
                    }
                return e;
            }),
            (t.exports = h);
    },
    function (t, e, n) {
        var r = n(57);
        t.exports = function (t, e, n) {
            var i = null == t ? void 0 : r(t, e);
            return void 0 === i ? n : i;
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = n(20);
        t.exports = function (t, e) {
            for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;)
                t = t[i(e[n++])];
            return n && n == o ? t : void 0;
        };
    },
    function (t, e, n) {
        var r = n(1),
            i = n(35),
            o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
            a = /^\w*$/;
        t.exports = function (t, e) {
            if (r(t)) return !1;
            var n = typeof t;
            return (
                !(
                    "number" != n &&
                    "symbol" != n &&
                    "boolean" != n &&
                    null != t &&
                    !i(t)
                ) ||
                a.test(t) ||
                !o.test(t) ||
                (null != e && t in Object(e))
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return t;
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(35),
            o = NaN,
            a = /^\s+|\s+$/g,
            u = /^[-+]0x[0-9a-f]+$/i,
            c = /^0b[01]+$/i,
            s = /^0o[0-7]+$/i,
            f = parseInt;
        t.exports = function (t) {
            if ("number" == typeof t) return t;
            if (i(t)) return o;
            if (r(t)) {
                var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                t = r(e) ? e + "" : e;
            }
            if ("string" != typeof t) return 0 === t ? t : +t;
            t = t.replace(a, "");
            var n = c.test(t);
            return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.mediaQueriesDefined =
                e.viewportWidthChanged =
                e.actionListPlaybackChanged =
                e.elementStateChanged =
                e.instanceRemoved =
                e.instanceStarted =
                e.instanceAdded =
                e.parameterChanged =
                e.animationFrameChanged =
                e.eventStateChanged =
                e.testFrameRendered =
                e.eventListenerAdded =
                e.clearRequested =
                e.stopRequested =
                e.playbackRequested =
                e.previewRequested =
                e.sessionStopped =
                e.sessionStarted =
                e.sessionInitialized =
                e.rawDataImported =
                void 0);
        var i = r(n(27)),
            o = n(2),
            a = n(10),
            u = o.IX2EngineActionTypes,
            c = u.IX2_RAW_DATA_IMPORTED,
            s = u.IX2_SESSION_INITIALIZED,
            f = u.IX2_SESSION_STARTED,
            l = u.IX2_SESSION_STOPPED,
            d = u.IX2_PREVIEW_REQUESTED,
            p = u.IX2_PLAYBACK_REQUESTED,
            v = u.IX2_STOP_REQUESTED,
            h = u.IX2_CLEAR_REQUESTED,
            g = u.IX2_EVENT_LISTENER_ADDED,
            E = u.IX2_TEST_FRAME_RENDERED,
            _ = u.IX2_EVENT_STATE_CHANGED,
            m = u.IX2_ANIMATION_FRAME_CHANGED,
            y = u.IX2_PARAMETER_CHANGED,
            I = u.IX2_INSTANCE_ADDED,
            b = u.IX2_INSTANCE_STARTED,
            T = u.IX2_INSTANCE_REMOVED,
            w = u.IX2_ELEMENT_STATE_CHANGED,
            O = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            A = u.IX2_VIEWPORT_WIDTH_CHANGED,
            x = u.IX2_MEDIA_QUERIES_DEFINED,
            S = a.IX2VanillaUtils.reifyState;
        e.rawDataImported = function (t) {
            return { type: c, payload: (0, i.default)({}, S(t)) };
        };
        e.sessionInitialized = function (t) {
            var e = t.hasBoundaryNodes;
            return { type: s, payload: { hasBoundaryNodes: e } };
        };
        e.sessionStarted = function () {
            return { type: f };
        };
        e.sessionStopped = function () {
            return { type: l };
        };
        e.previewRequested = function (t) {
            var e = t.rawData,
                n = t.defer;
            return { type: d, payload: { defer: n, rawData: e } };
        };
        e.playbackRequested = function (t) {
            var e = t.actionTypeId,
                n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
                r = t.actionListId,
                i = t.actionItemId,
                a = t.eventId,
                u = t.allowEvents,
                c = t.immediate,
                s = t.testManual,
                f = t.verbose,
                l = t.rawData;
            return {
                type: p,
                payload: {
                    actionTypeId: n,
                    actionListId: r,
                    actionItemId: i,
                    testManual: s,
                    eventId: a,
                    allowEvents: u,
                    immediate: c,
                    verbose: f,
                    rawData: l,
                },
            };
        };
        e.stopRequested = function (t) {
            return { type: v, payload: { actionListId: t } };
        };
        e.clearRequested = function () {
            return { type: h };
        };
        e.eventListenerAdded = function (t, e) {
            return { type: g, payload: { target: t, listenerParams: e } };
        };
        e.testFrameRendered = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return { type: E, payload: { step: t } };
        };
        e.eventStateChanged = function (t, e) {
            return { type: _, payload: { stateKey: t, newState: e } };
        };
        e.animationFrameChanged = function (t, e) {
            return { type: m, payload: { now: t, parameters: e } };
        };
        e.parameterChanged = function (t, e) {
            return { type: y, payload: { key: t, value: e } };
        };
        e.instanceAdded = function (t) {
            return { type: I, payload: (0, i.default)({}, t) };
        };
        e.instanceStarted = function (t, e) {
            return { type: b, payload: { instanceId: t, time: e } };
        };
        e.instanceRemoved = function (t) {
            return { type: T, payload: { instanceId: t } };
        };
        e.elementStateChanged = function (t, e, n, r) {
            return {
                type: w,
                payload: { elementId: t, actionTypeId: e, current: n, actionItem: r },
            };
        };
        e.actionListPlaybackChanged = function (t) {
            var e = t.actionListId,
                n = t.isPlaying;
            return { type: O, payload: { actionListId: e, isPlaying: n } };
        };
        e.viewportWidthChanged = function (t) {
            var e = t.width,
                n = t.mediaQueries;
            return { type: A, payload: { width: e, mediaQueries: n } };
        };
        e.mediaQueriesDefined = function () {
            return { type: x };
        };
    },
    function (t, e, n) {
        var r = n(117),
            i = n(63);
        function o(t, e) {
            (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__chain__ = !!e),
                (this.__index__ = 0),
                (this.__values__ = void 0);
        }
        (o.prototype = r(i.prototype)),
            (o.prototype.constructor = o),
            (t.exports = o);
    },
    function (t, e) {
        t.exports = function () { };
    },
    function (t, e, n) {
        var r = n(117),
            i = n(63),
            o = 4294967295;
        function a(t) {
            (this.__wrapped__ = t),
                (this.__actions__ = []),
                (this.__dir__ = 1),
                (this.__filtered__ = !1),
                (this.__iteratees__ = []),
                (this.__takeCount__ = o),
                (this.__views__ = []);
        }
        (a.prototype = r(i.prototype)),
            (a.prototype.constructor = a),
            (t.exports = a);
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(21));
        window.tram = (function (t) {
            function e(t, e) {
                return new F.Bare().init(t, e);
            }
            function n(t) {
                return t.replace(/[A-Z]/g, function (t) {
                    return "-" + t.toLowerCase();
                });
            }
            function i(t) {
                var e = parseInt(t.slice(1), 16);
                return [(e >> 16) & 255, (e >> 8) & 255, 255 & e];
            }
            function o(t, e, n) {
                return (
                    "#" + ((1 << 24) | (t << 16) | (e << 8) | n).toString(16).slice(1)
                );
            }
            function a() { }
            function u(t, e, n) {
                s("Units do not match [" + t + "]: " + e + ", " + n);
            }
            function c(t, e, n) {
                if ((void 0 !== e && (n = e), void 0 === t)) return n;
                var r = n;
                return (
                    $.test(t) || !Z.test(t)
                        ? (r = parseInt(t, 10))
                        : Z.test(t) && (r = 1e3 * parseFloat(t)),
                    0 > r && (r = 0),
                    r == r ? r : n
                );
            }
            function s(t) {
                H.debug && window && window.console.warn(t);
            }
            var f = (function (t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t);
                }
                function o(t) {
                    return "function" == typeof t;
                }
                function a() { }
                return function r(u, c) {
                    function s() {
                        var t = new f();
                        return o(t.init) && t.init.apply(t, arguments), t;
                    }
                    function f() { }
                    c === n && ((c = u), (u = Object)), (s.Bare = f);
                    var l,
                        d = (a[t] = u[t]),
                        p = (f[t] = s[t] = new a());
                    return (
                        (p.constructor = s),
                        (s.mixin = function (e) {
                            return (f[t] = s[t] = r(s, e)[t]), s;
                        }),
                        (s.open = function (t) {
                            if (
                                ((l = {}),
                                    o(t) ? (l = t.call(s, p, d, s, u)) : i(t) && (l = t),
                                    i(l))
                            )
                                for (var n in l) e.call(l, n) && (p[n] = l[n]);
                            return o(p.init) || (p.init = u), s;
                        }),
                        s.open(c)
                    );
                };
            })("prototype", {}.hasOwnProperty),
                l = {
                    ease: [
                        "ease",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return (
                                e +
                                n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * t)
                            );
                        },
                    ],
                    "ease-in": [
                        "ease-in",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
                        },
                    ],
                    "ease-out": [
                        "ease-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return (
                                e +
                                n * (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                            );
                        },
                    ],
                    "ease-in-out": [
                        "ease-in-out",
                        function (t, e, n, r) {
                            var i = (t /= r) * t,
                                o = i * t;
                            return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
                        },
                    ],
                    linear: [
                        "linear",
                        function (t, e, n, r) {
                            return (n * t) / r + e;
                        },
                    ],
                    "ease-in-quad": [
                        "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t + e;
                        },
                    ],
                    "ease-out-quad": [
                        "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
                        function (t, e, n, r) {
                            return -n * (t /= r) * (t - 2) + e;
                        },
                    ],
                    "ease-in-out-quad": [
                        "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t + e
                                : (-n / 2) * (--t * (t - 2) - 1) + e;
                        },
                    ],
                    "ease-in-cubic": [
                        "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t + e;
                        },
                    ],
                    "ease-out-cubic": [
                        "cubic-bezier(0.215, 0.610, 0.355, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-cubic": [
                        "cubic-bezier(0.645, 0.045, 0.355, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t + e
                                : (n / 2) * ((t -= 2) * t * t + 2) + e;
                        },
                    ],
                    "ease-in-quart": [
                        "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t + e;
                        },
                    ],
                    "ease-out-quart": [
                        "cubic-bezier(0.165, 0.840, 0.440, 1)",
                        function (t, e, n, r) {
                            return -n * ((t = t / r - 1) * t * t * t - 1) + e;
                        },
                    ],
                    "ease-in-out-quart": [
                        "cubic-bezier(0.770, 0, 0.175, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t * t + e
                                : (-n / 2) * ((t -= 2) * t * t * t - 2) + e;
                        },
                    ],
                    "ease-in-quint": [
                        "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
                        function (t, e, n, r) {
                            return n * (t /= r) * t * t * t * t + e;
                        },
                    ],
                    "ease-out-quint": [
                        "cubic-bezier(0.230, 1, 0.320, 1)",
                        function (t, e, n, r) {
                            return n * ((t = t / r - 1) * t * t * t * t + 1) + e;
                        },
                    ],
                    "ease-in-out-quint": [
                        "cubic-bezier(0.860, 0, 0.070, 1)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (n / 2) * t * t * t * t * t + e
                                : (n / 2) * ((t -= 2) * t * t * t * t + 2) + e;
                        },
                    ],
                    "ease-in-sine": [
                        "cubic-bezier(0.470, 0, 0.745, 0.715)",
                        function (t, e, n, r) {
                            return -n * Math.cos((t / r) * (Math.PI / 2)) + n + e;
                        },
                    ],
                    "ease-out-sine": [
                        "cubic-bezier(0.390, 0.575, 0.565, 1)",
                        function (t, e, n, r) {
                            return n * Math.sin((t / r) * (Math.PI / 2)) + e;
                        },
                    ],
                    "ease-in-out-sine": [
                        "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
                        function (t, e, n, r) {
                            return (-n / 2) * (Math.cos((Math.PI * t) / r) - 1) + e;
                        },
                    ],
                    "ease-in-expo": [
                        "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
                        function (t, e, n, r) {
                            return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e;
                        },
                    ],
                    "ease-out-expo": [
                        "cubic-bezier(0.190, 1, 0.220, 1)",
                        function (t, e, n, r) {
                            return t === r ? e + n : n * (1 - Math.pow(2, (-10 * t) / r)) + e;
                        },
                    ],
                    "ease-in-out-expo": [
                        "cubic-bezier(1, 0, 0, 1)",
                        function (t, e, n, r) {
                            return 0 === t
                                ? e
                                : t === r
                                    ? e + n
                                    : (t /= r / 2) < 1
                                        ? (n / 2) * Math.pow(2, 10 * (t - 1)) + e
                                        : (n / 2) * (2 - Math.pow(2, -10 * --t)) + e;
                        },
                    ],
                    "ease-in-circ": [
                        "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
                        function (t, e, n, r) {
                            return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e;
                        },
                    ],
                    "ease-out-circ": [
                        "cubic-bezier(0.075, 0.820, 0.165, 1)",
                        function (t, e, n, r) {
                            return n * Math.sqrt(1 - (t = t / r - 1) * t) + e;
                        },
                    ],
                    "ease-in-out-circ": [
                        "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
                        function (t, e, n, r) {
                            return (t /= r / 2) < 1
                                ? (-n / 2) * (Math.sqrt(1 - t * t) - 1) + e
                                : (n / 2) * (Math.sqrt(1 - (t -= 2) * t) + 1) + e;
                        },
                    ],
                    "ease-in-back": [
                        "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
                        function (t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                n * (t /= r) * t * ((i + 1) * t - i) + e
                            );
                        },
                    ],
                    "ease-out-back": [
                        "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
                        function (t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                            );
                        },
                    ],
                    "ease-in-out-back": [
                        "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
                        function (t, e, n, r, i) {
                            return (
                                void 0 === i && (i = 1.70158),
                                (t /= r / 2) < 1
                                    ? (n / 2) * t * t * ((1 + (i *= 1.525)) * t - i) + e
                                    : (n / 2) *
                                    ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) +
                                    e
                            );
                        },
                    ],
                },
                d = {
                    "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                    "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                    "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
                },
                p = document,
                v = window,
                h = "bkwld-tram",
                g = /[\-\.0-9]/g,
                E = /[A-Z]/,
                _ = "number",
                m = /^(rgb|#)/,
                y = /(em|cm|mm|in|pt|pc|px)$/,
                I = /(em|cm|mm|in|pt|pc|px|%)$/,
                b = /(deg|rad|turn)$/,
                T = "unitless",
                w = /(all|none) 0s ease 0s/,
                O = /^(width|height)$/,
                A = " ",
                x = p.createElement("a"),
                S = ["Webkit", "Moz", "O", "ms"],
                R = ["-webkit-", "-moz-", "-o-", "-ms-"],
                N = function (t) {
                    if (t in x.style) return { dom: t, css: t };
                    var e,
                        n,
                        r = "",
                        i = t.split("-");
                    for (e = 0; e < i.length; e++)
                        r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                    for (e = 0; e < S.length; e++)
                        if ((n = S[e] + r) in x.style) return { dom: n, css: R[e] + t };
                },
                C = (e.support = {
                    bind: Function.prototype.bind,
                    transform: N("transform"),
                    transition: N("transition"),
                    backface: N("backface-visibility"),
                    timing: N("transition-timing-function"),
                });
            if (C.transition) {
                var L = C.timing.dom;
                if (((x.style[L] = l["ease-in-back"][0]), !x.style[L]))
                    for (var D in d) l[D][0] = d[D];
            }
            var P = (e.frame = (function () {
                var t =
                    v.requestAnimationFrame ||
                    v.webkitRequestAnimationFrame ||
                    v.mozRequestAnimationFrame ||
                    v.oRequestAnimationFrame ||
                    v.msRequestAnimationFrame;
                return t && C.bind
                    ? t.bind(v)
                    : function (t) {
                        v.setTimeout(t, 16);
                    };
            })()),
                M = (e.now = (function () {
                    var t = v.performance,
                        e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                    return e && C.bind
                        ? e.bind(t)
                        : Date.now ||
                        function () {
                            return +new Date();
                        };
                })()),
                j = f(function (e) {
                    function i(t, e) {
                        var n = (function (t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i);
                            }
                            return r;
                        })(("" + t).split(A)),
                            r = n[0];
                        e = e || {};
                        var i = Q[r];
                        if (!i) return s("Unsupported property: " + r);
                        if (!e.weak || !this.props[r]) {
                            var o = i[0],
                                a = this.props[r];
                            return (
                                a || (a = this.props[r] = new o.Bare()),
                                a.init(this.$el, n, i, e),
                                a
                            );
                        }
                    }
                    function o(t, e, n) {
                        if (t) {
                            var o = (0, r.default)(t);
                            if (
                                (e ||
                                    (this.timer && this.timer.destroy(),
                                        (this.queue = []),
                                        (this.active = !1)),
                                    "number" == o && e)
                            )
                                return (
                                    (this.timer = new W({
                                        duration: t,
                                        context: this,
                                        complete: a,
                                    })),
                                    void (this.active = !0)
                                );
                            if ("string" == o && e) {
                                switch (t) {
                                    case "hide":
                                        f.call(this);
                                        break;
                                    case "stop":
                                        u.call(this);
                                        break;
                                    case "redraw":
                                        l.call(this);
                                        break;
                                    default:
                                        i.call(this, t, n && n[1]);
                                }
                                return a.call(this);
                            }
                            if ("function" == o) return void t.call(this, this);
                            if ("object" == o) {
                                var s = 0;
                                p.call(
                                    this,
                                    t,
                                    function (t, e) {
                                        t.span > s && (s = t.span), t.stop(), t.animate(e);
                                    },
                                    function (t) {
                                        "wait" in t && (s = c(t.wait, 0));
                                    }
                                ),
                                    d.call(this),
                                    s > 0 &&
                                    ((this.timer = new W({ duration: s, context: this })),
                                        (this.active = !0),
                                        e && (this.timer.complete = a));
                                var v = this,
                                    h = !1,
                                    g = {};
                                P(function () {
                                    p.call(v, t, function (t) {
                                        t.active && ((h = !0), (g[t.name] = t.nextStyle));
                                    }),
                                        h && v.$el.css(g);
                                });
                            }
                        }
                    }
                    function a() {
                        if (
                            (this.timer && this.timer.destroy(),
                                (this.active = !1),
                                this.queue.length)
                        ) {
                            var t = this.queue.shift();
                            o.call(this, t.options, !0, t.args);
                        }
                    }
                    function u(t) {
                        var e;
                        this.timer && this.timer.destroy(),
                            (this.queue = []),
                            (this.active = !1),
                            "string" == typeof t
                                ? ((e = {})[t] = 1)
                                : (e =
                                    "object" == (0, r.default)(t) && null != t
                                        ? t
                                        : this.props),
                            p.call(this, e, v),
                            d.call(this);
                    }
                    function f() {
                        u.call(this), (this.el.style.display = "none");
                    }
                    function l() {
                        this.el.offsetHeight;
                    }
                    function d() {
                        var t,
                            e,
                            n = [];
                        for (t in (this.upstream && n.push(this.upstream), this.props))
                            (e = this.props[t]).active && n.push(e.string);
                        (n = n.join(",")),
                            this.style !== n &&
                            ((this.style = n), (this.el.style[C.transition.dom] = n));
                    }
                    function p(t, e, r) {
                        var o,
                            a,
                            u,
                            c,
                            s = e !== v,
                            f = {};
                        for (o in t)
                            (u = t[o]),
                                o in q
                                    ? (f.transform || (f.transform = {}), (f.transform[o] = u))
                                    : (E.test(o) && (o = n(o)),
                                        o in Q ? (f[o] = u) : (c || (c = {}), (c[o] = u)));
                        for (o in f) {
                            if (((u = f[o]), !(a = this.props[o]))) {
                                if (!s) continue;
                                a = i.call(this, o);
                            }
                            e.call(this, a, u);
                        }
                        r && c && r.call(this, c);
                    }
                    function v(t) {
                        t.stop();
                    }
                    function g(t, e) {
                        t.set(e);
                    }
                    function _(t) {
                        this.$el.css(t);
                    }
                    function m(t, n) {
                        e[t] = function () {
                            return this.children
                                ? function (t, e) {
                                    var n,
                                        r = this.children.length;
                                    for (n = 0; r > n; n++) t.apply(this.children[n], e);
                                    return this;
                                }.call(this, n, arguments)
                                : (this.el && n.apply(this, arguments), this);
                        };
                    }
                    (e.init = function (e) {
                        if (
                            ((this.$el = t(e)),
                                (this.el = this.$el[0]),
                                (this.props = {}),
                                (this.queue = []),
                                (this.style = ""),
                                (this.active = !1),
                                H.keepInherited && !H.fallback)
                        ) {
                            var n = Y(this.el, "transition");
                            n && !w.test(n) && (this.upstream = n);
                        }
                        C.backface &&
                            H.hideBackface &&
                            z(this.el, C.backface.css, "hidden");
                    }),
                        m("add", i),
                        m("start", o),
                        m("wait", function (t) {
                            (t = c(t, 0)),
                                this.active
                                    ? this.queue.push({ options: t })
                                    : ((this.timer = new W({
                                        duration: t,
                                        context: this,
                                        complete: a,
                                    })),
                                        (this.active = !0));
                        }),
                        m("then", function (t) {
                            return this.active
                                ? (this.queue.push({ options: t, args: arguments }),
                                    void (this.timer.complete = a))
                                : s(
                                    "No active transition timer. Use start() or wait() before then()."
                                );
                        }),
                        m("next", a),
                        m("stop", u),
                        m("set", function (t) {
                            u.call(this, t), p.call(this, t, g, _);
                        }),
                        m("show", function (t) {
                            "string" != typeof t && (t = "block"),
                                (this.el.style.display = t);
                        }),
                        m("hide", f),
                        m("redraw", l),
                        m("destroy", function () {
                            u.call(this),
                                t.removeData(this.el, h),
                                (this.$el = this.el = null);
                        });
                }),
                F = f(j, function (e) {
                    function n(e, n) {
                        var r = t.data(e, h) || t.data(e, h, new j.Bare());
                        return r.el || r.init(e), n ? r.start(n) : r;
                    }
                    e.init = function (e, r) {
                        var i = t(e);
                        if (!i.length) return this;
                        if (1 === i.length) return n(i[0], r);
                        var o = [];
                        return (
                            i.each(function (t, e) {
                                o.push(n(e, r));
                            }),
                            (this.children = o),
                            this
                        );
                    };
                }),
                k = f(function (t) {
                    function e() {
                        var t = this.get();
                        this.update("auto");
                        var e = this.get();
                        return this.update(t), e;
                    }
                    function n(t) {
                        var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                        return (e ? o(e[1], e[2], e[3]) : t).replace(
                            /#(\w)(\w)(\w)$/,
                            "#$1$1$2$2$3$3"
                        );
                    }
                    var i = 500,
                        a = "ease",
                        u = 0;
                    (t.init = function (t, e, n, r) {
                        (this.$el = t), (this.el = t[0]);
                        var o = e[0];
                        n[2] && (o = n[2]),
                            K[o] && (o = K[o]),
                            (this.name = o),
                            (this.type = n[1]),
                            (this.duration = c(e[1], this.duration, i)),
                            (this.ease = (function (t, e, n) {
                                return void 0 !== e && (n = e), t in l ? t : n;
                            })(e[2], this.ease, a)),
                            (this.delay = c(e[3], this.delay, u)),
                            (this.span = this.duration + this.delay),
                            (this.active = !1),
                            (this.nextStyle = null),
                            (this.auto = O.test(this.name)),
                            (this.unit = r.unit || this.unit || H.defaultUnit),
                            (this.angle = r.angle || this.angle || H.defaultAngle),
                            H.fallback || r.fallback
                                ? (this.animate = this.fallback)
                                : ((this.animate = this.transition),
                                    (this.string =
                                        this.name +
                                        A +
                                        this.duration +
                                        "ms" +
                                        ("ease" != this.ease ? A + l[this.ease][0] : "") +
                                        (this.delay ? A + this.delay + "ms" : "")));
                    }),
                        (t.set = function (t) {
                            (t = this.convert(t, this.type)), this.update(t), this.redraw();
                        }),
                        (t.transition = function (t) {
                            (this.active = !0),
                                (t = this.convert(t, this.type)),
                                this.auto &&
                                ("auto" == this.el.style[this.name] &&
                                    (this.update(this.get()), this.redraw()),
                                    "auto" == t && (t = e.call(this))),
                                (this.nextStyle = t);
                        }),
                        (t.fallback = function (t) {
                            var n =
                                this.el.style[this.name] || this.convert(this.get(), this.type);
                            (t = this.convert(t, this.type)),
                                this.auto &&
                                ("auto" == n && (n = this.convert(this.get(), this.type)),
                                    "auto" == t && (t = e.call(this))),
                                (this.tween = new V({
                                    from: n,
                                    to: t,
                                    duration: this.duration,
                                    delay: this.delay,
                                    ease: this.ease,
                                    update: this.update,
                                    context: this,
                                }));
                        }),
                        (t.get = function () {
                            return Y(this.el, this.name);
                        }),
                        (t.update = function (t) {
                            z(this.el, this.name, t);
                        }),
                        (t.stop = function () {
                            (this.active || this.nextStyle) &&
                                ((this.active = !1),
                                    (this.nextStyle = null),
                                    z(this.el, this.name, this.get()));
                            var t = this.tween;
                            t && t.context && t.destroy();
                        }),
                        (t.convert = function (t, e) {
                            if ("auto" == t && this.auto) return t;
                            var i,
                                o = "number" == typeof t,
                                a = "string" == typeof t;
                            switch (e) {
                                case _:
                                    if (o) return t;
                                    if (a && "" === t.replace(g, "")) return +t;
                                    i = "number(unitless)";
                                    break;
                                case m:
                                    if (a) {
                                        if ("" === t && this.original) return this.original;
                                        if (e.test(t))
                                            return "#" == t.charAt(0) && 7 == t.length ? t : n(t);
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case y:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit)";
                                    break;
                                case I:
                                    if (o) return t + this.unit;
                                    if (a && e.test(t)) return t;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case b:
                                    if (o) return t + this.angle;
                                    if (a && e.test(t)) return t;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case T:
                                    if (o) return t;
                                    if (a && I.test(t)) return t;
                                    i = "number(unitless) or string(unit or %)";
                            }
                            return (
                                (function (t, e) {
                                    s(
                                        "Type warning: Expected: [" +
                                        t +
                                        "] Got: [" +
                                        (0, r.default)(e) +
                                        "] " +
                                        e
                                    );
                                })(i, t),
                                t
                            );
                        }),
                        (t.redraw = function () {
                            this.el.offsetHeight;
                        });
                }),
                X = f(k, function (t, e) {
                    t.init = function () {
                        e.init.apply(this, arguments),
                            this.original || (this.original = this.convert(this.get(), m));
                    };
                }),
                G = f(k, function (t, e) {
                    (t.init = function () {
                        e.init.apply(this, arguments), (this.animate = this.fallback);
                    }),
                        (t.get = function () {
                            return this.$el[this.name]();
                        }),
                        (t.update = function (t) {
                            this.$el[this.name](t);
                        });
                }),
                U = f(k, function (t, e) {
                    function n(t, e) {
                        var n, r, i, o, a;
                        for (n in t)
                            (i = (o = q[n])[0]),
                                (r = o[1] || n),
                                (a = this.convert(t[n], i)),
                                e.call(this, r, a, i);
                    }
                    (t.init = function () {
                        e.init.apply(this, arguments),
                            this.current ||
                            ((this.current = {}),
                                q.perspective &&
                                H.perspective &&
                                ((this.current.perspective = H.perspective),
                                    z(this.el, this.name, this.style(this.current)),
                                    this.redraw()));
                    }),
                        (t.set = function (t) {
                            n.call(this, t, function (t, e) {
                                this.current[t] = e;
                            }),
                                z(this.el, this.name, this.style(this.current)),
                                this.redraw();
                        }),
                        (t.transition = function (t) {
                            var e = this.values(t);
                            this.tween = new B({
                                current: this.current,
                                values: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                            });
                            var n,
                                r = {};
                            for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                            (this.active = !0), (this.nextStyle = this.style(r));
                        }),
                        (t.fallback = function (t) {
                            var e = this.values(t);
                            this.tween = new B({
                                current: this.current,
                                values: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this,
                            });
                        }),
                        (t.update = function () {
                            z(this.el, this.name, this.style(this.current));
                        }),
                        (t.style = function (t) {
                            var e,
                                n = "";
                            for (e in t) n += e + "(" + t[e] + ") ";
                            return n;
                        }),
                        (t.values = function (t) {
                            var e,
                                r = {};
                            return (
                                n.call(this, t, function (t, n, i) {
                                    (r[t] = n),
                                        void 0 === this.current[t] &&
                                        ((e = 0),
                                            ~t.indexOf("scale") && (e = 1),
                                            (this.current[t] = this.convert(e, i)));
                                }),
                                r
                            );
                        });
                }),
                V = f(function (e) {
                    function n() {
                        var t,
                            e,
                            r,
                            i = c.length;
                        if (i) for (P(n), e = M(), t = i; t--;) (r = c[t]) && r.render(e);
                    }
                    var r = { ease: l.ease[1], from: 0, to: 1 };
                    (e.init = function (t) {
                        (this.duration = t.duration || 0), (this.delay = t.delay || 0);
                        var e = t.ease || r.ease;
                        l[e] && (e = l[e][1]),
                            "function" != typeof e && (e = r.ease),
                            (this.ease = e),
                            (this.update = t.update || a),
                            (this.complete = t.complete || a),
                            (this.context = t.context || this),
                            (this.name = t.name);
                        var n = t.from,
                            i = t.to;
                        void 0 === n && (n = r.from),
                            void 0 === i && (i = r.to),
                            (this.unit = t.unit || ""),
                            "number" == typeof n && "number" == typeof i
                                ? ((this.begin = n), (this.change = i - n))
                                : this.format(i, n),
                            (this.value = this.begin + this.unit),
                            (this.start = M()),
                            !1 !== t.autoplay && this.play();
                    }),
                        (e.play = function () {
                            var t;
                            this.active ||
                                (this.start || (this.start = M()),
                                    (this.active = !0),
                                    (t = this),
                                    1 === c.push(t) && P(n));
                        }),
                        (e.stop = function () {
                            var e, n, r;
                            this.active &&
                                ((this.active = !1),
                                    (e = this),
                                    (r = t.inArray(e, c)) >= 0 &&
                                    ((n = c.slice(r + 1)),
                                        (c.length = r),
                                        n.length && (c = c.concat(n))));
                        }),
                        (e.render = function (t) {
                            var e,
                                n = t - this.start;
                            if (this.delay) {
                                if (n <= this.delay) return;
                                n -= this.delay;
                            }
                            if (n < this.duration) {
                                var r = this.ease(n, 0, 1, this.duration);
                                return (
                                    (e = this.startRGB
                                        ? (function (t, e, n) {
                                            return o(
                                                t[0] + n * (e[0] - t[0]),
                                                t[1] + n * (e[1] - t[1]),
                                                t[2] + n * (e[2] - t[2])
                                            );
                                        })(this.startRGB, this.endRGB, r)
                                        : (function (t) {
                                            return Math.round(t * s) / s;
                                        })(this.begin + r * this.change)),
                                    (this.value = e + this.unit),
                                    void this.update.call(this.context, this.value)
                                );
                            }
                            (e = this.endHex || this.begin + this.change),
                                (this.value = e + this.unit),
                                this.update.call(this.context, this.value),
                                this.complete.call(this.context),
                                this.destroy();
                        }),
                        (e.format = function (t, e) {
                            if (((e += ""), "#" == (t += "").charAt(0)))
                                return (
                                    (this.startRGB = i(e)),
                                    (this.endRGB = i(t)),
                                    (this.endHex = t),
                                    (this.begin = 0),
                                    void (this.change = 1)
                                );
                            if (!this.unit) {
                                var n = e.replace(g, "");
                                n !== t.replace(g, "") && u("tween", e, t), (this.unit = n);
                            }
                            (e = parseFloat(e)),
                                (t = parseFloat(t)),
                                (this.begin = this.value = e),
                                (this.change = t - e);
                        }),
                        (e.destroy = function () {
                            this.stop(),
                                (this.context = null),
                                (this.ease = this.update = this.complete = a);
                        });
                    var c = [],
                        s = 1e3;
                }),
                W = f(V, function (t) {
                    (t.init = function (t) {
                        (this.duration = t.duration || 0),
                            (this.complete = t.complete || a),
                            (this.context = t.context),
                            this.play();
                    }),
                        (t.render = function (t) {
                            t - this.start < this.duration ||
                                (this.complete.call(this.context), this.destroy());
                        });
                }),
                B = f(V, function (t, e) {
                    (t.init = function (t) {
                        var e, n;
                        for (e in ((this.context = t.context),
                            (this.update = t.update),
                            (this.tweens = []),
                            (this.current = t.current),
                            t.values))
                            (n = t.values[e]),
                                this.current[e] !== n &&
                                this.tweens.push(
                                    new V({
                                        name: e,
                                        from: this.current[e],
                                        to: n,
                                        duration: t.duration,
                                        delay: t.delay,
                                        ease: t.ease,
                                        autoplay: !1,
                                    })
                                );
                        this.play();
                    }),
                        (t.render = function (t) {
                            var e,
                                n,
                                r = !1;
                            for (e = this.tweens.length; e--;)
                                (n = this.tweens[e]).context &&
                                    (n.render(t), (this.current[n.name] = n.value), (r = !0));
                            return r
                                ? void (this.update && this.update.call(this.context))
                                : this.destroy();
                        }),
                        (t.destroy = function () {
                            if ((e.destroy.call(this), this.tweens)) {
                                var t;
                                for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                                (this.tweens = null), (this.current = null);
                            }
                        });
                }),
                H = (e.config = {
                    debug: !1,
                    defaultUnit: "px",
                    defaultAngle: "deg",
                    keepInherited: !1,
                    hideBackface: !1,
                    perspective: "",
                    fallback: !C.transition,
                    agentTests: [],
                });
            (e.fallback = function (t) {
                if (!C.transition) return (H.fallback = !0);
                H.agentTests.push("(" + t + ")");
                var e = new RegExp(H.agentTests.join("|"), "i");
                H.fallback = e.test(navigator.userAgent);
            }),
                e.fallback("6.0.[2-5] Safari"),
                (e.tween = function (t) {
                    return new V(t);
                }),
                (e.delay = function (t, e, n) {
                    return new W({ complete: e, duration: t, context: n });
                }),
                (t.fn.tram = function (t) {
                    return e.call(null, this, t);
                });
            var z = t.style,
                Y = t.css,
                K = { transform: C.transform && C.transform.css },
                Q = {
                    color: [X, m],
                    background: [X, m, "background-color"],
                    "outline-color": [X, m],
                    "border-color": [X, m],
                    "border-top-color": [X, m],
                    "border-right-color": [X, m],
                    "border-bottom-color": [X, m],
                    "border-left-color": [X, m],
                    "border-width": [k, y],
                    "border-top-width": [k, y],
                    "border-right-width": [k, y],
                    "border-bottom-width": [k, y],
                    "border-left-width": [k, y],
                    "border-spacing": [k, y],
                    "letter-spacing": [k, y],
                    margin: [k, y],
                    "margin-top": [k, y],
                    "margin-right": [k, y],
                    "margin-bottom": [k, y],
                    "margin-left": [k, y],
                    padding: [k, y],
                    "padding-top": [k, y],
                    "padding-right": [k, y],
                    "padding-bottom": [k, y],
                    "padding-left": [k, y],
                    "outline-width": [k, y],
                    opacity: [k, _],
                    top: [k, I],
                    right: [k, I],
                    bottom: [k, I],
                    left: [k, I],
                    "font-size": [k, I],
                    "text-indent": [k, I],
                    "word-spacing": [k, I],
                    width: [k, I],
                    "min-width": [k, I],
                    "max-width": [k, I],
                    height: [k, I],
                    "min-height": [k, I],
                    "max-height": [k, I],
                    "line-height": [k, T],
                    "scroll-top": [G, _, "scrollTop"],
                    "scroll-left": [G, _, "scrollLeft"],
                },
                q = {};
            C.transform &&
                ((Q.transform = [U]),
                    (q = {
                        x: [I, "translateX"],
                        y: [I, "translateY"],
                        rotate: [b],
                        rotateX: [b],
                        rotateY: [b],
                        scale: [_],
                        scaleX: [_],
                        scaleY: [_],
                        skew: [b],
                        skewX: [b],
                        skewY: [b],
                    })),
                C.transform &&
                C.backface &&
                ((q.z = [I, "translateZ"]),
                    (q.rotateZ = [b]),
                    (q.scaleZ = [_]),
                    (q.perspective = [y]));
            var $ = /ms/,
                Z = /s|\./;
            return (t.tram = e);
        })(window.jQuery);
    },
    function (t, e, n) {
        var r = n(14),
            i = n(131),
            o = n(67),
            a = n(37),
            u = n(68),
            c = n(16),
            s = n(69),
            f = Object.getOwnPropertyDescriptor;
        e.f = r
            ? f
            : function (t, e) {
                if (((t = a(t)), (e = u(e, !0)), s))
                    try {
                        return f(t, e);
                    } catch (t) { }
                if (c(t, e)) return o(!i.f.call(t, e), t[e]);
            };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e,
            };
        };
    },
    function (t, e, n) {
        var r = n(23);
        t.exports = function (t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
                return i;
            if ("function" == typeof (n = t.valueOf) && !r((i = n.call(t)))) return i;
            if (!e && "function" == typeof (n = t.toString) && !r((i = n.call(t))))
                return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (t, e, n) {
        var r = n(14),
            i = n(15),
            o = n(70);
        t.exports =
            !r &&
            !i(function () {
                return (
                    7 !=
                    Object.defineProperty(o("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (t, e, n) {
        var r = n(3),
            i = n(23),
            o = r.document,
            a = i(o) && i(o.createElement);
        t.exports = function (t) {
            return a ? o.createElement(t) : {};
        };
    },
    function (t, e, n) {
        var r = n(25);
        t.exports = r("native-function-to-string", Function.toString);
    },
    function (t, e, n) {
        var r = n(25),
            i = n(73),
            o = r("keys");
        t.exports = function (t) {
            return o[t] || (o[t] = i(t));
        };
    },
    function (t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function (t) {
            return (
                "Symbol(" +
                String(void 0 === t ? "" : t) +
                ")_" +
                (++n + r).toString(36)
            );
        };
    },
    function (t, e, n) {
        var r = n(141),
            i = n(3),
            o = function (t) {
                return "function" == typeof t ? t : void 0;
            };
        t.exports = function (t, e) {
            return arguments.length < 2
                ? o(r[t]) || o(i[t])
                : (r[t] && r[t][e]) || (i[t] && i[t][e]);
        };
    },
    function (t, e, n) {
        var r = n(16),
            i = n(37),
            o = n(76).indexOf,
            a = n(40);
        t.exports = function (t, e) {
            var n,
                u = i(t),
                c = 0,
                s = [];
            for (n in u) !r(a, n) && r(u, n) && s.push(n);
            for (; e.length > c;) r(u, (n = e[c++])) && (~o(s, n) || s.push(n));
            return s;
        };
    },
    function (t, e, n) {
        var r = n(37),
            i = n(143),
            o = n(144),
            a = function (t) {
                return function (e, n, a) {
                    var u,
                        c = r(e),
                        s = i(c.length),
                        f = o(a, s);
                    if (t && n != n) {
                        for (; s > f;) if ((u = c[f++]) != u) return !0;
                    } else
                        for (; s > f; f++)
                            if ((t || f in c) && c[f] === n) return t || f || 0;
                    return !t && -1;
                };
            };
        t.exports = { includes: a(!0), indexOf: a(!1) };
    },
    function (t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function (t) {
            return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(42);
        n.d(e, "createStore", function () {
            return r.default;
        });
        var i = n(81);
        n.d(e, "combineReducers", function () {
            return i.default;
        });
        var o = n(83);
        n.d(e, "bindActionCreators", function () {
            return o.default;
        });
        var a = n(84);
        n.d(e, "applyMiddleware", function () {
            return a.default;
        });
        var u = n(43);
        n.d(e, "compose", function () {
            return u.default;
        });
        n(82);
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(157),
            i = n(162),
            o = n(164),
            a = "[object Object]",
            u = Function.prototype,
            c = Object.prototype,
            s = u.toString,
            f = c.hasOwnProperty,
            l = s.call(Object);
        e.default = function (t) {
            if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
            var e = Object(i.default)(t);
            if (null === e) return !0;
            var n = f.call(e, "constructor") && e.constructor;
            return "function" == typeof n && n instanceof n && s.call(n) == l;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(158).default.Symbol;
        e.default = r;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(42);
        n(79), n(82);
        function i(t, e) {
            var n = e && e.type;
            return (
                "Given action " +
                ((n && '"' + n.toString() + '"') || "an action") +
                ', reducer "' +
                t +
                '" returned undefined. To ignore an action, you must explicitly return the previous state.'
            );
        }
        function o(t) {
            for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
                var a = e[o];
                0, "function" == typeof t[a] && (n[a] = t[a]);
            }
            var u,
                c = Object.keys(n);
            try {
                !(function (t) {
                    Object.keys(t).forEach(function (e) {
                        var n = t[e];
                        if (void 0 === n(void 0, { type: r.ActionTypes.INIT }))
                            throw new Error(
                                'Reducer "' +
                                e +
                                '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
                            );
                        if (
                            void 0 ===
                            n(void 0, {
                                type:
                                    "@@redux/PROBE_UNKNOWN_ACTION_" +
                                    Math.random().toString(36).substring(7).split("").join("."),
                            })
                        )
                            throw new Error(
                                'Reducer "' +
                                e +
                                "\" returned undefined when probed with a random type. Don't try to handle " +
                                r.ActionTypes.INIT +
                                ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.'
                            );
                    });
                })(n);
            } catch (t) {
                u = t;
            }
            return function () {
                var t =
                    arguments.length <= 0 || void 0 === arguments[0]
                        ? {}
                        : arguments[0],
                    e = arguments[1];
                if (u) throw u;
                for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                    var s = c[a],
                        f = n[s],
                        l = t[s],
                        d = f(l, e);
                    if (void 0 === d) {
                        var p = i(s, e);
                        throw new Error(p);
                    }
                    (o[s] = d), (r = r || d !== l);
                }
                return r ? o : t;
            };
        }
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            "undefined" != typeof console &&
                "function" == typeof console.error &&
                console.error(t);
            try {
                throw new Error(t);
            } catch (t) { }
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        function r(t, e) {
            return function () {
                return e(t.apply(void 0, arguments));
            };
        }
        function i(t, e) {
            if ("function" == typeof t) return r(t, e);
            if ("object" != typeof t || null === t)
                throw new Error(
                    "bindActionCreators expected an object or a function, instead received " +
                    (null === t ? "null" : typeof t) +
                    '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
                );
            for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
                var a = n[o],
                    u = t[a];
                "function" == typeof u && (i[a] = r(u, e));
            }
            return i;
        }
        n.r(e),
            n.d(e, "default", function () {
                return i;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            n.d(e, "default", function () {
                return o;
            });
        var r = n(43),
            i =
                Object.assign ||
                function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                    }
                    return t;
                };
        function o() {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            return function (t) {
                return function (n, o, a) {
                    var u,
                        c = t(n, o, a),
                        s = c.dispatch,
                        f = {
                            getState: c.getState,
                            dispatch: function (t) {
                                return s(t);
                            },
                        };
                    return (
                        (u = e.map(function (t) {
                            return t(f);
                        })),
                        (s = r.default.apply(void 0, u)(c.dispatch)),
                        i({}, c, { dispatch: s })
                    );
                };
            };
        }
    },
    function (t, e, n) {
        var r = n(86)(n(242));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(7),
            i = n(12),
            o = n(32);
        t.exports = function (t) {
            return function (e, n, a) {
                var u = Object(e);
                if (!i(e)) {
                    var c = r(n, 3);
                    (e = o(e)),
                        (n = function (t) {
                            return c(u[t], t, u);
                        });
                }
                var s = t(e, n, a);
                return s > -1 ? u[c ? e[s] : s] : void 0;
            };
        };
    },
    function (t, e, n) {
        var r = n(28),
            i = n(184),
            o = n(185),
            a = n(186),
            u = n(187),
            c = n(188);
        function s(t) {
            var e = (this.__data__ = new r(t));
            this.size = e.size;
        }
        (s.prototype.clear = i),
            (s.prototype.delete = o),
            (s.prototype.get = a),
            (s.prototype.has = u),
            (s.prototype.set = c),
            (t.exports = s);
    },
    function (t, e, n) {
        var r = n(11),
            i = n(6),
            o = "[object AsyncFunction]",
            a = "[object Function]",
            u = "[object GeneratorFunction]",
            c = "[object Proxy]";
        t.exports = function (t) {
            if (!i(t)) return !1;
            var e = r(t);
            return e == a || e == u || e == o || e == c;
        };
    },
    function (t, e, n) {
        (function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.exports = n;
        }).call(this, n(22));
    },
    function (t, e) {
        var n = Function.prototype.toString;
        t.exports = function (t) {
            if (null != t) {
                try {
                    return n.call(t);
                } catch (t) { }
                try {
                    return t + "";
                } catch (t) { }
            }
            return "";
        };
    },
    function (t, e, n) {
        var r = n(207),
            i = n(9);
        t.exports = function t(e, n, o, a, u) {
            return (
                e === n ||
                (null == e || null == n || (!i(e) && !i(n))
                    ? e != e && n != n
                    : r(e, n, o, a, t, u))
            );
        };
    },
    function (t, e, n) {
        var r = n(208),
            i = n(211),
            o = n(212),
            a = 1,
            u = 2;
        t.exports = function (t, e, n, c, s, f) {
            var l = n & a,
                d = t.length,
                p = e.length;
            if (d != p && !(l && p > d)) return !1;
            var v = f.get(t),
                h = f.get(e);
            if (v && h) return v == e && h == t;
            var g = -1,
                E = !0,
                _ = n & u ? new r() : void 0;
            for (f.set(t, e), f.set(e, t); ++g < d;) {
                var m = t[g],
                    y = e[g];
                if (c) var I = l ? c(y, m, g, e, t, f) : c(m, y, g, t, e, f);
                if (void 0 !== I) {
                    if (I) continue;
                    E = !1;
                    break;
                }
                if (_) {
                    if (
                        !i(e, function (t, e) {
                            if (!o(_, e) && (m === t || s(m, t, n, c, f))) return _.push(e);
                        })
                    ) {
                        E = !1;
                        break;
                    }
                } else if (m !== y && !s(m, y, n, c, f)) {
                    E = !1;
                    break;
                }
            }
            return f.delete(t), f.delete(e), E;
        };
    },
    function (t, e, n) {
        var r = n(48),
            i = n(1);
        t.exports = function (t, e, n) {
            var o = e(t);
            return i(t) ? o : r(o, n(t));
        };
    },
    function (t, e, n) {
        var r = n(219),
            i = n(95),
            o = Object.prototype.propertyIsEnumerable,
            a = Object.getOwnPropertySymbols,
            u = a
                ? function (t) {
                    return null == t
                        ? []
                        : ((t = Object(t)),
                            r(a(t), function (e) {
                                return o.call(t, e);
                            }));
                }
                : i;
        t.exports = u;
    },
    function (t, e) {
        t.exports = function () {
            return [];
        };
    },
    function (t, e, n) {
        var r = n(220),
            i = n(33),
            o = n(1),
            a = n(49),
            u = n(50),
            c = n(51),
            s = Object.prototype.hasOwnProperty;
        t.exports = function (t, e) {
            var n = o(t),
                f = !n && i(t),
                l = !n && !f && a(t),
                d = !n && !f && !l && c(t),
                p = n || f || l || d,
                v = p ? r(t.length, String) : [],
                h = v.length;
            for (var g in t)
                (!e && !s.call(t, g)) ||
                    (p &&
                        ("length" == g ||
                            (l && ("offset" == g || "parent" == g)) ||
                            (d &&
                                ("buffer" == g || "byteLength" == g || "byteOffset" == g)) ||
                            u(g, h))) ||
                    v.push(g);
            return v;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return (
                t.webpackPolyfill ||
                ((t.deprecate = function () { }),
                    (t.paths = []),
                    t.children || (t.children = []),
                    Object.defineProperty(t, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return t.l;
                        },
                    }),
                    Object.defineProperty(t, "id", {
                        enumerable: !0,
                        get: function () {
                            return t.i;
                        },
                    }),
                    (t.webpackPolyfill = 1)),
                t
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return t(e(n));
            };
        };
    },
    function (t, e, n) {
        var r = n(8)(n(5), "WeakMap");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(6);
        t.exports = function (t) {
            return t == t && !r(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return function (n) {
                return null != n && n[t] === e && (void 0 !== e || t in Object(n));
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;)
                i[n] = e(t[n], n, t);
            return i;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return null == e ? void 0 : e[t];
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
                if (e(t[o], o, t)) return o;
            return -1;
        };
    },
    function (t, e, n) {
        var r = n(243);
        t.exports = function (t) {
            var e = r(t),
                n = e % 1;
            return e == e ? (n ? e - n : e) : 0;
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.inQuad = function (t) {
                return Math.pow(t, 2);
            }),
            (e.outQuad = function (t) {
                return -(Math.pow(t - 1, 2) - 1);
            }),
            (e.inOutQuad = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 2);
                return -0.5 * ((t -= 2) * t - 2);
            }),
            (e.inCubic = function (t) {
                return Math.pow(t, 3);
            }),
            (e.outCubic = function (t) {
                return Math.pow(t - 1, 3) + 1;
            }),
            (e.inOutCubic = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 3);
                return 0.5 * (Math.pow(t - 2, 3) + 2);
            }),
            (e.inQuart = function (t) {
                return Math.pow(t, 4);
            }),
            (e.outQuart = function (t) {
                return -(Math.pow(t - 1, 4) - 1);
            }),
            (e.inOutQuart = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 4);
                return -0.5 * ((t -= 2) * Math.pow(t, 3) - 2);
            }),
            (e.inQuint = function (t) {
                return Math.pow(t, 5);
            }),
            (e.outQuint = function (t) {
                return Math.pow(t - 1, 5) + 1;
            }),
            (e.inOutQuint = function (t) {
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(t, 5);
                return 0.5 * (Math.pow(t - 2, 5) + 2);
            }),
            (e.inSine = function (t) {
                return 1 - Math.cos(t * (Math.PI / 2));
            }),
            (e.outSine = function (t) {
                return Math.sin(t * (Math.PI / 2));
            }),
            (e.inOutSine = function (t) {
                return -0.5 * (Math.cos(Math.PI * t) - 1);
            }),
            (e.inExpo = function (t) {
                return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
            }),
            (e.outExpo = function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
            }),
            (e.inOutExpo = function (t) {
                if (0 === t) return 0;
                if (1 === t) return 1;
                if ((t /= 0.5) < 1) return 0.5 * Math.pow(2, 10 * (t - 1));
                return 0.5 * (2 - Math.pow(2, -10 * --t));
            }),
            (e.inCirc = function (t) {
                return -(Math.sqrt(1 - t * t) - 1);
            }),
            (e.outCirc = function (t) {
                return Math.sqrt(1 - Math.pow(t - 1, 2));
            }),
            (e.inOutCirc = function (t) {
                if ((t /= 0.5) < 1) return -0.5 * (Math.sqrt(1 - t * t) - 1);
                return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            }),
            (e.outBounce = function (t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                        : t < 2.5 / 2.75
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.inBack = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.outBack = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.inOutBack = function (t) {
                var e = o;
                if ((t /= 0.5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * 0.5;
                return 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.inElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return (
                    -r *
                    Math.pow(2, 10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n)
                );
            }),
            (e.outElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (1 === t) return 1;
                n || (n = 0.3);
                r < 1
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                return (
                    r * Math.pow(2, -10 * t) * Math.sin(((t - e) * (2 * Math.PI)) / n) + 1
                );
            }),
            (e.inOutElastic = function (t) {
                var e = o,
                    n = 0,
                    r = 1;
                if (0 === t) return 0;
                if (2 == (t /= 0.5)) return 1;
                n || (n = 0.3 * 1.5);
                r < 1
                    ? ((r = 1), (e = n / 4))
                    : (e = (n / (2 * Math.PI)) * Math.asin(1 / r));
                if (t < 1)
                    return (
                        r *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin(((t - e) * (2 * Math.PI)) / n) *
                        -0.5
                    );
                return (
                    r *
                    Math.pow(2, -10 * (t -= 1)) *
                    Math.sin(((t - e) * (2 * Math.PI)) / n) *
                    0.5 +
                    1
                );
            }),
            (e.swingFromTo = function (t) {
                var e = o;
                return (t /= 0.5) < 1
                    ? t * t * ((1 + (e *= 1.525)) * t - e) * 0.5
                    : 0.5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2);
            }),
            (e.swingFrom = function (t) {
                return t * t * ((o + 1) * t - o);
            }),
            (e.swingTo = function (t) {
                return (t -= 1) * t * ((o + 1) * t + o) + 1;
            }),
            (e.bounce = function (t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                        ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                        : t < 2.5 / 2.75
                            ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                            : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            (e.bouncePast = function (t) {
                return t < 1 / 2.75
                    ? 7.5625 * t * t
                    : t < 2 / 2.75
                        ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                        : t < 2.5 / 2.75
                            ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                            : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            (e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0);
        var i = r(n(107)),
            o = 1.70158,
            a = (0, i.default)(0.25, 0.1, 0.25, 1);
        e.ease = a;
        var u = (0, i.default)(0.42, 0, 1, 1);
        e.easeIn = u;
        var c = (0, i.default)(0, 0, 0.58, 1);
        e.easeOut = c;
        var s = (0, i.default)(0.42, 0, 0.58, 1);
        e.easeInOut = s;
    },
    function (t, e) {
        var n = 4,
            r = 0.001,
            i = 1e-7,
            o = 10,
            a = 11,
            u = 1 / (a - 1),
            c = "function" == typeof Float32Array;
        function s(t, e) {
            return 1 - 3 * e + 3 * t;
        }
        function f(t, e) {
            return 3 * e - 6 * t;
        }
        function l(t) {
            return 3 * t;
        }
        function d(t, e, n) {
            return ((s(e, n) * t + f(e, n)) * t + l(e)) * t;
        }
        function p(t, e, n) {
            return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e);
        }
        t.exports = function (t, e, s, f) {
            if (!(0 <= t && t <= 1 && 0 <= s && s <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var l = c ? new Float32Array(a) : new Array(a);
            if (t !== e || s !== f) for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);
            function h(e) {
                for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
                var h = c + ((e - l[--f]) / (l[f + 1] - l[f])) * u,
                    g = p(h, t, s);
                return g >= r
                    ? (function (t, e, r, i) {
                        for (var o = 0; o < n; ++o) {
                            var a = p(e, r, i);
                            if (0 === a) return e;
                            e -= (d(e, r, i) - t) / a;
                        }
                        return e;
                    })(e, h, t, s)
                    : 0 === g
                        ? h
                        : (function (t, e, n, r, a) {
                            var u,
                                c,
                                s = 0;
                            do {
                                (u = d((c = e + (n - e) / 2), r, a) - t) > 0
                                    ? (n = c)
                                    : (e = c);
                            } while (Math.abs(u) > i && ++s < o);
                            return c;
                        })(e, c, c + u, t, s);
            }
            return function (n) {
                return t === e && s === f
                    ? n
                    : 0 === n
                        ? 0
                        : 1 === n
                            ? 1
                            : d(h(n), e, f);
            };
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(109)),
            i = n(0),
            o = n(13);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.optimizeFloat = c),
            (e.createBezierEasing = function (t) {
                return u.default.apply(void 0, (0, r.default)(t));
            }),
            (e.applyEasing = function (t, e, n) {
                if (0 === e) return 0;
                if (1 === e) return 1;
                if (n) return c(e > 0 ? n(e) : e);
                return c(e > 0 && t && a[t] ? a[t](e) : e);
            });
        var a = o(n(106)),
            u = i(n(107));
        function c(t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                r = Math.pow(n, e),
                i = Number(Math.round(t * r) / r);
            return Math.abs(i) > 1e-4 ? i : 0;
        }
    },
    function (t, e, n) {
        var r = n(244),
            i = n(245),
            o = n(246);
        t.exports = function (t) {
            return r(t) || i(t) || o();
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(26));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.isPluginType = function (t) {
                return t === o.ActionTypeConsts.PLUGIN_LOTTIE;
            }),
            (e.clearPlugin =
                e.renderPlugin =
                e.createPluginInstance =
                e.getPluginDestination =
                e.getPluginDuration =
                e.getPluginOrigin =
                e.getPluginConfig =
                void 0);
        var i = n(248),
            o = n(2),
            a = n(44),
            u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
                getConfig: i.getPluginConfig,
                getOrigin: i.getPluginOrigin,
                getDuration: i.getPluginDuration,
                getDestination: i.getPluginDestination,
                createInstance: i.createPluginInstance,
                render: i.renderPlugin,
                clear: i.clearPlugin,
            });
        var c = function (t) {
            return function (e) {
                if (!a.IS_BROWSER_ENV)
                    return function () {
                        return null;
                    };
                var n = u[e];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                return r;
            };
        },
            s = c("getConfig");
        e.getPluginConfig = s;
        var f = c("getOrigin");
        e.getPluginOrigin = f;
        var l = c("getDuration");
        e.getPluginDuration = l;
        var d = c("getDestination");
        e.getPluginDestination = d;
        var p = c("createInstance");
        e.createPluginInstance = p;
        var v = c("render");
        e.renderPlugin = v;
        var h = c("clear");
        e.clearPlugin = h;
    },
    function (t, e, n) {
        var r = n(112),
            i = n(255)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(253),
            i = n(32);
        t.exports = function (t, e) {
            return t && r(t, e, i);
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(259);
        (e.__esModule = !0), (e.default = void 0);
        var i = r(n(260)).default;
        e.default = i;
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(109)),
            i = n(13),
            o = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.observeRequests = function (t) {
                P({
                    store: t,
                    select: function (t) {
                        var e = t.ixRequest;
                        return e.preview;
                    },
                    onChange: et,
                }),
                    P({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.playback;
                        },
                        onChange: rt,
                    }),
                    P({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.stop;
                        },
                        onChange: it,
                    }),
                    P({
                        store: t,
                        select: function (t) {
                            var e = t.ixRequest;
                            return e.clear;
                        },
                        onChange: ot,
                    });
            }),
            (e.startEngine = at),
            (e.stopEngine = ut),
            (e.stopAllActionGroups = ht),
            (e.stopActionGroup = gt),
            (e.startActionGroup = Et);
        var a = o(n(27)),
            u = o(n(263)),
            c = o(n(85)),
            s = o(n(56)),
            f = o(n(264)),
            l = o(n(270)),
            d = o(n(282)),
            p = o(n(283)),
            v = o(n(284)),
            h = o(n(287)),
            g = o(n(113)),
            E = n(2),
            _ = n(10),
            m = n(61),
            y = i(n(290)),
            I = o(n(291)),
            b = Object.keys(E.QuickEffectIds),
            T = function (t) {
                return b.includes(t);
            },
            w = E.IX2EngineConstants,
            O = w.COLON_DELIMITER,
            A = w.BOUNDARY_SELECTOR,
            x = w.HTML_ELEMENT,
            S = w.RENDER_GENERAL,
            R = w.W_MOD_IX,
            N = _.IX2VanillaUtils,
            C = N.getAffectedElements,
            L = N.getElementId,
            D = N.getDestinationValues,
            P = N.observeStore,
            M = N.getInstanceId,
            j = N.renderHTMLElement,
            F = N.clearAllStyles,
            k = N.getMaxDurationItemIndex,
            X = N.getComputedStyle,
            G = N.getInstanceOrigin,
            U = N.reduceListToGroup,
            V = N.shouldNamespaceEventParameter,
            W = N.getNamespacedParameterId,
            B = N.shouldAllowMediaQuery,
            H = N.cleanupHTMLElement,
            z = N.stringifyTarget,
            Y = N.mediaQueriesEqual,
            K = _.IX2VanillaPlugins,
            Q = K.isPluginType,
            q = K.createPluginInstance,
            $ = K.getPluginDuration,
            Z = navigator.userAgent,
            J = Z.match(/iPad/i) || Z.match(/iPhone/),
            tt = 12;
        function et(t, e) {
            var n = t.rawData,
                r = function () {
                    at({ store: e, rawData: n, allowEvents: !0 }), nt();
                };
            t.defer ? setTimeout(r, 0) : r();
        }
        function nt() {
            document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
        }
        function rt(t, e) {
            var n = t.actionTypeId,
                r = t.actionListId,
                i = t.actionItemId,
                o = t.eventId,
                a = t.allowEvents,
                u = t.immediate,
                c = t.testManual,
                s = t.verbose,
                f = void 0 === s || s,
                l = t.rawData;
            if (r && i && l && u) {
                var d = l.actionLists[r];
                d && (l = U({ actionList: d, actionItemId: i, rawData: l }));
            }
            if (
                (at({ store: e, rawData: l, allowEvents: a, testManual: c }),
                    (r && n === E.ActionTypeConsts.GENERAL_START_ACTION) || T(n))
            ) {
                gt({ store: e, actionListId: r }),
                    vt({ store: e, actionListId: r, eventId: o });
                var p = Et({
                    store: e,
                    eventId: o,
                    actionListId: r,
                    immediate: u,
                    verbose: f,
                });
                f &&
                    p &&
                    e.dispatch(
                        (0, m.actionListPlaybackChanged)({ actionListId: r, isPlaying: !u })
                    );
            }
        }
        function it(t, e) {
            var n = t.actionListId;
            n ? gt({ store: e, actionListId: n }) : ht({ store: e }), ut(e);
        }
        function ot(t, e) {
            ut(e), F({ store: e, elementApi: y });
        }
        function at(t) {
            var e,
                n = t.store,
                i = t.rawData,
                o = t.allowEvents,
                a = t.testManual,
                u = n.getState().ixSession;
            i && n.dispatch((0, m.rawDataImported)(i)),
                u.active ||
                (n.dispatch(
                    (0, m.sessionInitialized)({
                        hasBoundaryNodes: Boolean(document.querySelector(A)),
                    })
                ),
                    o &&
                    ((function (t) {
                        var e = t.getState().ixData.eventTypeMap;
                        ft(t),
                            (0, v.default)(e, function (e, n) {
                                var i = I.default[n];
                                i
                                    ? (function (t) {
                                        var e = t.logic,
                                            n = t.store,
                                            i = t.events;
                                        !(function (t) {
                                            if (J) {
                                                var e = {},
                                                    n = "";
                                                for (var r in t) {
                                                    var i = t[r],
                                                        o = i.eventTypeId,
                                                        a = i.target,
                                                        u = y.getQuerySelector(a);
                                                    e[u] ||
                                                        (o !== E.EventTypeConsts.MOUSE_CLICK &&
                                                            o !== E.EventTypeConsts.MOUSE_SECOND_CLICK) ||
                                                        ((e[u] = !0),
                                                            (n +=
                                                                u +
                                                                "{cursor: pointer;touch-action: manipulation;}"));
                                                }
                                                if (n) {
                                                    var c = document.createElement("style");
                                                    (c.textContent = n), document.body.appendChild(c);
                                                }
                                            }
                                        })(i);
                                        var o = e.types,
                                            a = e.handler,
                                            u = n.getState().ixData,
                                            l = u.actionLists,
                                            d = lt(i, pt);
                                        if ((0, f.default)(d)) {
                                            (0, v.default)(d, function (t, e) {
                                                var o = i[e],
                                                    a = o.action,
                                                    f = o.id,
                                                    d = o.mediaQueries,
                                                    p = void 0 === d ? u.mediaQueryKeys : d,
                                                    v = a.config.actionListId;
                                                if (
                                                    (Y(p, u.mediaQueryKeys) ||
                                                        n.dispatch((0, m.mediaQueriesDefined)()),
                                                        a.actionTypeId ===
                                                        E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION)
                                                ) {
                                                    var h = Array.isArray(o.config)
                                                        ? o.config
                                                        : [o.config];
                                                    h.forEach(function (e) {
                                                        var i = e.continuousParameterGroupId,
                                                            o = (0, s.default)(
                                                                l,
                                                                "".concat(v, ".continuousParameterGroups"),
                                                                []
                                                            ),
                                                            a = (0, c.default)(o, function (t) {
                                                                var e = t.id;
                                                                return e === i;
                                                            }),
                                                            u = (e.smoothing || 0) / 100,
                                                            d = (e.restingState || 0) / 100;
                                                        a &&
                                                            t.forEach(function (t, i) {
                                                                var o = f + O + i;
                                                                !(function (t) {
                                                                    var e = t.store,
                                                                        n = t.eventStateKey,
                                                                        i = t.eventTarget,
                                                                        o = t.eventId,
                                                                        a = t.eventConfig,
                                                                        u = t.actionListId,
                                                                        c = t.parameterGroup,
                                                                        f = t.smoothing,
                                                                        l = t.restingValue,
                                                                        d = e.getState(),
                                                                        p = d.ixData,
                                                                        v = d.ixSession,
                                                                        h = p.events[o],
                                                                        g = h.eventTypeId,
                                                                        E = {},
                                                                        _ = {},
                                                                        m = [],
                                                                        I = c.continuousActionGroups,
                                                                        b = c.id;
                                                                    V(g, a) && (b = W(n, b));
                                                                    var T =
                                                                        v.hasBoundaryNodes && i
                                                                            ? y.getClosestElement(i, A)
                                                                            : null;
                                                                    I.forEach(function (t) {
                                                                        var e = t.keyframe,
                                                                            n = t.actionItems;
                                                                        n.forEach(function (t) {
                                                                            var n = t.actionTypeId,
                                                                                o = t.config.target;
                                                                            if (o) {
                                                                                var a = o.boundaryMode ? T : null,
                                                                                    u = z(o) + O + n;
                                                                                if (
                                                                                    ((_[u] = (function () {
                                                                                        var t,
                                                                                            e =
                                                                                                arguments.length > 0 &&
                                                                                                    void 0 !== arguments[0]
                                                                                                    ? arguments[0]
                                                                                                    : [],
                                                                                            n =
                                                                                                arguments.length > 1
                                                                                                    ? arguments[1]
                                                                                                    : void 0,
                                                                                            i =
                                                                                                arguments.length > 2
                                                                                                    ? arguments[2]
                                                                                                    : void 0,
                                                                                            o = (0, r.default)(e);
                                                                                        return (
                                                                                            o.some(function (e, r) {
                                                                                                return (
                                                                                                    e.keyframe === n &&
                                                                                                    ((t = r), !0)
                                                                                                );
                                                                                            }),
                                                                                            null == t &&
                                                                                            ((t = o.length),
                                                                                                o.push({
                                                                                                    keyframe: n,
                                                                                                    actionItems: [],
                                                                                                })),
                                                                                            o[t].actionItems.push(i),
                                                                                            o
                                                                                        );
                                                                                    })(_[u], e, t)),
                                                                                        !E[u])
                                                                                ) {
                                                                                    E[u] = !0;
                                                                                    var c = t.config;
                                                                                    C({
                                                                                        config: c,
                                                                                        event: h,
                                                                                        eventTarget: i,
                                                                                        elementRoot: a,
                                                                                        elementApi: y,
                                                                                    }).forEach(function (t) {
                                                                                        m.push({ element: t, key: u });
                                                                                    });
                                                                                }
                                                                            }
                                                                        });
                                                                    }),
                                                                        m.forEach(function (t) {
                                                                            var n = t.element,
                                                                                r = t.key,
                                                                                i = _[r],
                                                                                a = (0, s.default)(
                                                                                    i,
                                                                                    "[0].actionItems[0]",
                                                                                    {}
                                                                                ),
                                                                                c = a.actionTypeId,
                                                                                d = Q(c) ? q(c)(n, a) : null,
                                                                                p = D(
                                                                                    {
                                                                                        element: n,
                                                                                        actionItem: a,
                                                                                        elementApi: y,
                                                                                    },
                                                                                    d
                                                                                );
                                                                            _t({
                                                                                store: e,
                                                                                element: n,
                                                                                eventId: o,
                                                                                actionListId: u,
                                                                                actionItem: a,
                                                                                destination: p,
                                                                                continuous: !0,
                                                                                parameterId: b,
                                                                                actionGroups: i,
                                                                                smoothing: f,
                                                                                restingValue: l,
                                                                                pluginInstance: d,
                                                                            });
                                                                        });
                                                                })({
                                                                    store: n,
                                                                    eventStateKey: o,
                                                                    eventTarget: t,
                                                                    eventId: f,
                                                                    eventConfig: e,
                                                                    actionListId: v,
                                                                    parameterGroup: a,
                                                                    smoothing: u,
                                                                    restingValue: d,
                                                                });
                                                            });
                                                    });
                                                }
                                                (a.actionTypeId ===
                                                    E.ActionTypeConsts.GENERAL_START_ACTION ||
                                                    T(a.actionTypeId)) &&
                                                    vt({ store: n, actionListId: v, eventId: f });
                                            });
                                            var p = function (t) {
                                                var e = n.getState(),
                                                    r = e.ixSession;
                                                dt(d, function (e, o, c) {
                                                    var s = i[o],
                                                        f = r.eventState[c],
                                                        l = s.action,
                                                        d = s.mediaQueries,
                                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                                    if (B(p, r.mediaQueryKey)) {
                                                        var v = function () {
                                                            var r =
                                                                arguments.length > 0 &&
                                                                    void 0 !== arguments[0]
                                                                    ? arguments[0]
                                                                    : {},
                                                                i = a(
                                                                    {
                                                                        store: n,
                                                                        element: e,
                                                                        event: s,
                                                                        eventConfig: r,
                                                                        nativeEvent: t,
                                                                        eventStateKey: c,
                                                                    },
                                                                    f
                                                                );
                                                            (0, g.default)(i, f) ||
                                                                n.dispatch(
                                                                    (0, m.eventStateChanged)(c, i)
                                                                );
                                                        };
                                                        if (
                                                            l.actionTypeId ===
                                                            E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                                                        ) {
                                                            var h = Array.isArray(s.config)
                                                                ? s.config
                                                                : [s.config];
                                                            h.forEach(v);
                                                        } else v();
                                                    }
                                                });
                                            },
                                                _ = (0, h.default)(p, tt),
                                                I = function (t) {
                                                    var e = t.target,
                                                        r = void 0 === e ? document : e,
                                                        i = t.types,
                                                        o = t.throttle;
                                                    i.split(" ")
                                                        .filter(Boolean)
                                                        .forEach(function (t) {
                                                            var e = o ? _ : p;
                                                            r.addEventListener(t, e),
                                                                n.dispatch(
                                                                    (0, m.eventListenerAdded)(r, [t, e])
                                                                );
                                                        });
                                                };
                                            Array.isArray(o)
                                                ? o.forEach(I)
                                                : "string" == typeof o && I(e);
                                        }
                                    })({ logic: i, store: t, events: e })
                                    : console.warn("IX2 event type not configured: ".concat(n));
                            }),
                            t.getState().ixSession.eventListeners.length &&
                            (function (t) {
                                var e = function () {
                                    ft(t);
                                };
                                st.forEach(function (n) {
                                    window.addEventListener(n, e),
                                        t.dispatch((0, m.eventListenerAdded)(window, [n, e]));
                                }),
                                    e();
                            })(t);
                    })(n),
                        -1 === (e = document.documentElement).className.indexOf(R) &&
                        (e.className += " ".concat(R)),
                        n.getState().ixSession.hasDefinedMediaQueries &&
                        (function (t) {
                            P({
                                store: t,
                                select: function (t) {
                                    return t.ixSession.mediaQueryKey;
                                },
                                onChange: function () {
                                    ut(t),
                                        F({ store: t, elementApi: y }),
                                        at({ store: t, allowEvents: !0 }),
                                        nt();
                                },
                            });
                        })(n)),
                    n.dispatch((0, m.sessionStarted)()),
                    (function (t, e) {
                        !(function n(r) {
                            var i = t.getState(),
                                o = i.ixSession,
                                a = i.ixParameters;
                            o.active &&
                                (t.dispatch((0, m.animationFrameChanged)(r, a)),
                                    e
                                        ? (function (t, e) {
                                            var n = P({
                                                store: t,
                                                select: function (t) {
                                                    return t.ixSession.tick;
                                                },
                                                onChange: function (t) {
                                                    e(t), n();
                                                },
                                            });
                                        })(t, n)
                                        : requestAnimationFrame(n));
                        })(window.performance.now());
                    })(n, a));
        }
        function ut(t) {
            var e = t.getState().ixSession;
            e.active &&
                (e.eventListeners.forEach(ct), t.dispatch((0, m.sessionStopped)()));
        }
        function ct(t) {
            var e = t.target,
                n = t.listenerParams;
            e.removeEventListener.apply(e, n);
        }
        var st = ["resize", "orientationchange"];
        function ft(t) {
            var e = t.getState(),
                n = e.ixSession,
                r = e.ixData,
                i = window.innerWidth;
            if (i !== n.viewportWidth) {
                var o = r.mediaQueries;
                t.dispatch((0, m.viewportWidthChanged)({ width: i, mediaQueries: o }));
            }
        }
        var lt = function (t, e) {
            return (0, l.default)((0, p.default)(t, e), d.default);
        },
            dt = function (t, e) {
                (0, v.default)(t, function (t, n) {
                    t.forEach(function (t, r) {
                        e(t, n, n + O + r);
                    });
                });
            },
            pt = function (t) {
                var e = { target: t.target, targets: t.targets };
                return C({ config: e, elementApi: y });
            };
        function vt(t) {
            var e = t.store,
                n = t.actionListId,
                r = t.eventId,
                i = e.getState(),
                o = i.ixData,
                a = i.ixSession,
                u = o.actionLists,
                c = o.events[r],
                f = u[n];
            if (f && f.useFirstGroupAsInitialState) {
                var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                    d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
                if (!B(d, a.mediaQueryKey)) return;
                l.forEach(function (t) {
                    var i,
                        o = t.config,
                        a = t.actionTypeId,
                        u =
                            !0 ===
                                (null == o
                                    ? void 0
                                    : null === (i = o.target) || void 0 === i
                                        ? void 0
                                        : i.useEventTarget)
                                ? { target: c.target, targets: c.targets }
                                : o,
                        s = C({ config: u, event: c, elementApi: y }),
                        f = Q(a);
                    s.forEach(function (i) {
                        var o = f ? q(a)(i, t) : null;
                        _t({
                            destination: D({ element: i, actionItem: t, elementApi: y }, o),
                            immediate: !0,
                            store: e,
                            element: i,
                            eventId: r,
                            actionItem: t,
                            actionListId: n,
                            pluginInstance: o,
                        });
                    });
                });
            }
        }
        function ht(t) {
            var e = t.store,
                n = e.getState().ixInstances;
            (0, v.default)(n, function (t) {
                if (!t.continuous) {
                    var n = t.actionListId,
                        r = t.verbose;
                    mt(t, e),
                        r &&
                        e.dispatch(
                            (0, m.actionListPlaybackChanged)({
                                actionListId: n,
                                isPlaying: !1,
                            })
                        );
                }
            });
        }
        function gt(t) {
            var e = t.store,
                n = t.eventId,
                r = t.eventTarget,
                i = t.eventStateKey,
                o = t.actionListId,
                a = e.getState(),
                u = a.ixInstances,
                c =
                    a.ixSession.hasBoundaryNodes && r ? y.getClosestElement(r, A) : null;
            (0, v.default)(u, function (t) {
                var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                    a = !i || t.eventStateKey === i;
                if (t.actionListId === o && t.eventId === n && a) {
                    if (c && r && !y.elementContains(c, t.element)) return;
                    mt(t, e),
                        t.verbose &&
                        e.dispatch(
                            (0, m.actionListPlaybackChanged)({
                                actionListId: o,
                                isPlaying: !1,
                            })
                        );
                }
            });
        }
        function Et(t) {
            var e,
                n = t.store,
                r = t.eventId,
                i = t.eventTarget,
                o = t.eventStateKey,
                a = t.actionListId,
                u = t.groupIndex,
                c = void 0 === u ? 0 : u,
                f = t.immediate,
                l = t.verbose,
                d = n.getState(),
                p = d.ixData,
                v = d.ixSession,
                h = p.events[r] || {},
                g = h.mediaQueries,
                E = void 0 === g ? p.mediaQueryKeys : g,
                _ = (0, s.default)(p, "actionLists.".concat(a), {}),
                m = _.actionItemGroups,
                I = _.useFirstGroupAsInitialState;
            if (!m || !m.length) return !1;
            c >= m.length && (0, s.default)(h, "config.loop") && (c = 0),
                0 === c && I && c++;
            var b =
                (0 === c || (1 === c && I)) &&
                    T(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId)
                    ? h.config.delay
                    : void 0,
                w = (0, s.default)(m, [c, "actionItems"], []);
            if (!w.length) return !1;
            if (!B(E, v.mediaQueryKey)) return !1;
            var O = v.hasBoundaryNodes && i ? y.getClosestElement(i, A) : null,
                x = k(w),
                S = !1;
            return (
                w.forEach(function (t, e) {
                    var u = t.config,
                        s = t.actionTypeId,
                        d = Q(s),
                        p = u.target;
                    if (p) {
                        var v = p.boundaryMode ? O : null;
                        C({
                            config: u,
                            event: h,
                            eventTarget: i,
                            elementRoot: v,
                            elementApi: y,
                        }).forEach(function (u, p) {
                            var v = d ? q(s)(u, t) : null,
                                h = d ? $(s)(u, t) : null;
                            S = !0;
                            var g = x === e && 0 === p,
                                E = X({ element: u, actionItem: t }),
                                _ = D({ element: u, actionItem: t, elementApi: y }, v);
                            _t({
                                store: n,
                                element: u,
                                actionItem: t,
                                eventId: r,
                                eventTarget: i,
                                eventStateKey: o,
                                actionListId: a,
                                groupIndex: c,
                                isCarrier: g,
                                computedStyle: E,
                                destination: _,
                                immediate: f,
                                verbose: l,
                                pluginInstance: v,
                                pluginDuration: h,
                                instanceDelay: b,
                            });
                        });
                    }
                }),
                S
            );
        }
        function _t(t) {
            var e = t.store,
                n = t.computedStyle,
                r = (0, u.default)(t, ["store", "computedStyle"]),
                i = !r.continuous,
                o = r.element,
                c = r.actionItem,
                s = r.immediate,
                f = r.pluginInstance,
                l = M(),
                d = e.getState(),
                p = d.ixElements,
                v = d.ixSession,
                h = L(p, o),
                g = (p[h] || {}).refState,
                E = y.getRefType(o),
                _ = G(o, g, n, c, y, f);
            e.dispatch(
                (0, m.instanceAdded)(
                    (0, a.default)(
                        { instanceId: l, elementId: h, origin: _, refType: E },
                        r
                    )
                )
            ),
                yt(document.body, "ix2-animation-started", l),
                s
                    ? (function (t, e) {
                        var n = t.getState().ixParameters;
                        t.dispatch((0, m.instanceStarted)(e, 0)),
                            t.dispatch((0, m.animationFrameChanged)(performance.now(), n)),
                            It(t.getState().ixInstances[e], t);
                    })(e, l)
                    : (P({
                        store: e,
                        select: function (t) {
                            return t.ixInstances[l];
                        },
                        onChange: It,
                    }),
                        i && e.dispatch((0, m.instanceStarted)(l, v.tick)));
        }
        function mt(t, e) {
            yt(document.body, "ix2-animation-stopping", {
                instanceId: t.id,
                state: e.getState(),
            });
            var n = t.elementId,
                r = t.actionItem,
                i = e.getState().ixElements[n] || {},
                o = i.ref;
            i.refType === x && H(o, r, y), e.dispatch((0, m.instanceRemoved)(t.id));
        }
        function yt(t, e, n) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r);
        }
        function It(t, e) {
            var n = t.active,
                r = t.continuous,
                i = t.complete,
                o = t.elementId,
                a = t.actionItem,
                u = t.actionTypeId,
                c = t.renderType,
                s = t.current,
                f = t.groupIndex,
                l = t.eventId,
                d = t.eventTarget,
                p = t.eventStateKey,
                v = t.actionListId,
                h = t.isCarrier,
                g = t.styleProp,
                E = t.verbose,
                _ = t.pluginInstance,
                I = e.getState(),
                b = I.ixData,
                T = I.ixSession,
                w = (b.events[l] || {}).mediaQueries,
                O = void 0 === w ? b.mediaQueryKeys : w;
            if (B(O, T.mediaQueryKey) && (r || n || i)) {
                if (s || (c === S && i)) {
                    e.dispatch((0, m.elementStateChanged)(o, u, s, a));
                    var A = e.getState().ixElements[o] || {},
                        R = A.ref,
                        N = A.refType,
                        C = A.refState,
                        L = C && C[u];
                    switch (N) {
                        case x:
                            j(R, C, L, l, a, g, y, c, _);
                    }
                }
                if (i) {
                    if (h) {
                        var D = Et({
                            store: e,
                            eventId: l,
                            eventTarget: d,
                            eventStateKey: p,
                            actionListId: v,
                            groupIndex: f + 1,
                            verbose: E,
                        });
                        E &&
                            !D &&
                            e.dispatch(
                                (0, m.actionListPlaybackChanged)({
                                    actionListId: v,
                                    isPlaying: !1,
                                })
                            );
                    }
                    mt(t, e);
                }
            }
        }
    },
    function (t, e, n) {
        var r = n(116);
        t.exports = function (t, e, n) {
            "__proto__" == e && r
                ? r(t, e, { configurable: !0, enumerable: !0, value: n, writable: !0 })
                : (t[e] = n);
        };
    },
    function (t, e, n) {
        var r = n(8),
            i = (function () {
                try {
                    var t = r(Object, "defineProperty");
                    return t({}, "", {}), t;
                } catch (t) { }
            })();
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(6),
            i = Object.create,
            o = (function () {
                function t() { }
                return function (e) {
                    if (!r(e)) return {};
                    if (i) return i(e);
                    t.prototype = e;
                    var n = new t();
                    return (t.prototype = void 0), n;
                };
            })();
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(304),
            i = n(305),
            o = r
                ? function (t) {
                    return r.get(t);
                }
                : i;
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(306),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            for (
                var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0;
                o--;

            ) {
                var a = n[o],
                    u = a.func;
                if (null == u || u == t) return a.name;
            }
            return e;
        };
    },
    function (t, e, n) {
        n(121),
            n(123),
            n(36),
            n(125),
            n(313),
            n(314),
            n(315),
            n(316),
            n(321),
            n(322),
            (t.exports = n(323));
    },
    function (t, e, n) {
        "use strict";
        var r = n(4);
        r.define(
            "brand",
            (t.exports = function (t) {
                var e,
                    n = {},
                    i = document,
                    o = t("html"),
                    a = t("body"),
                    u = ".w-digipants-badge",
                    c = window.location,
                    s = /PhantomJS/i.test(navigator.userAgent),
                    f =
                        "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
                function l() {
                    var n =
                        i.fullScreen ||
                        i.mozFullScreen ||
                        i.webkitIsFullScreen ||
                        i.msFullscreenElement ||
                        Boolean(i.webkitFullscreenElement);
                    t(e).attr("style", n ? "display: none !important;" : "");
                }
                function d() {
                    var t = a.children(u),
                        n = t.length && t.get(0) === e,
                        i = r.env("editor");
                    n ? i && t.remove() : (t.length && t.remove(), i || a.append(e));
                }
                return (
                    (n.ready = function () {
                        var n,
                            r,
                            a,
                            u = o.attr("data-wf-status"),
                            p = o.attr("data-wf-domain") || "";
                        /\.digipants\.io$/i.test(p) && c.hostname !== p && (u = !0),
                            u &&
                            !s &&
                            ((e =
                                e ||
                                ((n = t('<a class="w-digipants-badge"></a>').attr(
                                    "href",
                                    "https://digipants.com?utm_campaign=brandjs"
                                )),
                                    (r = t("<img>")
                                        .attr(
                                            "src",
                                            "https://d3e54v103j8qbb.cloudfront.net/img/digipants-badge-icon.f67cd735e3.svg"
                                        )
                                        .attr("alt", "")
                                        .css({ marginRight: "8px", width: "16px" })),
                                    (a = t("<img>")
                                        .attr(
                                            "src",
                                            "https://d1otoma47x30pg.cloudfront.net/img/digipants-badge-text.6faa6a38cd.svg"
                                        )
                                        .attr("alt", "Made in digipants")),
                                    n.append(r, a),
                                    n[0])),
                                d(),
                                setTimeout(d, 500),
                                t(i).off(f, l).on(f, l));
                    }),
                    n
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = window.$,
            i = n(65) && r.tram;
        /*!
         * digipants._ (aka) Underscore.js 1.6.0 (custom build)
         * _.each
         * _.map
         * _.find
         * _.filter
         * _.any
         * _.contains
         * _.delay
         * _.defer
         * _.throttle (digipants)
         * _.debounce
         * _.keys
         * _.has
         * _.now
         *
         * http://underscorejs.org
         * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
         * Underscore may be freely distributed under the MIT license.
         * @license MIT
         */
        t.exports = (function () {
            var t = { VERSION: "1.6.0-digipants" },
                e = {},
                n = Array.prototype,
                r = Object.prototype,
                o = Function.prototype,
                a = (n.push, n.slice),
                u = (n.concat, r.toString, r.hasOwnProperty),
                c = n.forEach,
                s = n.map,
                f = (n.reduce, n.reduceRight, n.filter),
                l = (n.every, n.some),
                d = n.indexOf,
                p = (n.lastIndexOf, Array.isArray, Object.keys),
                v =
                    (o.bind,
                        (t.each = t.forEach =
                            function (n, r, i) {
                                if (null == n) return n;
                                if (c && n.forEach === c) n.forEach(r, i);
                                else if (n.length === +n.length) {
                                    for (var o = 0, a = n.length; o < a; o++)
                                        if (r.call(i, n[o], o, n) === e) return;
                                } else {
                                    var u = t.keys(n);
                                    for (o = 0, a = u.length; o < a; o++)
                                        if (r.call(i, n[u[o]], u[o], n) === e) return;
                                }
                                return n;
                            }));
            (t.map = t.collect =
                function (t, e, n) {
                    var r = [];
                    return null == t
                        ? r
                        : s && t.map === s
                            ? t.map(e, n)
                            : (v(t, function (t, i, o) {
                                r.push(e.call(n, t, i, o));
                            }),
                                r);
                }),
                (t.find = t.detect =
                    function (t, e, n) {
                        var r;
                        return (
                            h(t, function (t, i, o) {
                                if (e.call(n, t, i, o)) return (r = t), !0;
                            }),
                            r
                        );
                    }),
                (t.filter = t.select =
                    function (t, e, n) {
                        var r = [];
                        return null == t
                            ? r
                            : f && t.filter === f
                                ? t.filter(e, n)
                                : (v(t, function (t, i, o) {
                                    e.call(n, t, i, o) && r.push(t);
                                }),
                                    r);
                    });
            var h =
                (t.some =
                    t.any =
                    function (n, r, i) {
                        r || (r = t.identity);
                        var o = !1;
                        return null == n
                            ? o
                            : l && n.some === l
                                ? n.some(r, i)
                                : (v(n, function (t, n, a) {
                                    if (o || (o = r.call(i, t, n, a))) return e;
                                }),
                                    !!o);
                    });
            (t.contains = t.include =
                function (t, e) {
                    return (
                        null != t &&
                        (d && t.indexOf === d
                            ? -1 != t.indexOf(e)
                            : h(t, function (t) {
                                return t === e;
                            }))
                    );
                }),
                (t.delay = function (t, e) {
                    var n = a.call(arguments, 2);
                    return setTimeout(function () {
                        return t.apply(null, n);
                    }, e);
                }),
                (t.defer = function (e) {
                    return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)));
                }),
                (t.throttle = function (t) {
                    var e, n, r;
                    return function () {
                        e ||
                            ((e = !0),
                                (n = arguments),
                                (r = this),
                                i.frame(function () {
                                    (e = !1), t.apply(r, n);
                                }));
                    };
                }),
                (t.debounce = function (e, n, r) {
                    var i,
                        o,
                        a,
                        u,
                        c,
                        s = function s() {
                            var f = t.now() - u;
                            f < n
                                ? (i = setTimeout(s, n - f))
                                : ((i = null), r || ((c = e.apply(a, o)), (a = o = null)));
                        };
                    return function () {
                        (a = this), (o = arguments), (u = t.now());
                        var f = r && !i;
                        return (
                            i || (i = setTimeout(s, n)),
                            f && ((c = e.apply(a, o)), (a = o = null)),
                            c
                        );
                    };
                }),
                (t.defaults = function (e) {
                    if (!t.isObject(e)) return e;
                    for (var n = 1, r = arguments.length; n < r; n++) {
                        var i = arguments[n];
                        for (var o in i) void 0 === e[o] && (e[o] = i[o]);
                    }
                    return e;
                }),
                (t.keys = function (e) {
                    if (!t.isObject(e)) return [];
                    if (p) return p(e);
                    var n = [];
                    for (var r in e) t.has(e, r) && n.push(r);
                    return n;
                }),
                (t.has = function (t, e) {
                    return u.call(t, e);
                }),
                (t.isObject = function (t) {
                    return t === Object(t);
                }),
                (t.now =
                    Date.now ||
                    function () {
                        return new Date().getTime();
                    }),
                (t.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g,
                });
            var g = /(.)^/,
                E = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029",
                },
                _ = /\\|'|\r|\n|\u2028|\u2029/g,
                m = function (t) {
                    return "\\" + E[t];
                };
            return (
                (t.template = function (e, n, r) {
                    !n && r && (n = r), (n = t.defaults({}, n, t.templateSettings));
                    var i = RegExp(
                        [
                            (n.escape || g).source,
                            (n.interpolate || g).source,
                            (n.evaluate || g).source,
                        ].join("|") + "|$",
                        "g"
                    ),
                        o = 0,
                        a = "__p+='";
                    e.replace(i, function (t, n, r, i, u) {
                        return (
                            (a += e.slice(o, u).replace(_, m)),
                            (o = u + t.length),
                            n
                                ? (a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                                : r
                                    ? (a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'")
                                    : i && (a += "';\n" + i + "\n__p+='"),
                            t
                        );
                    }),
                        (a += "';\n"),
                        n.variable || (a = "with(obj||{}){\n" + a + "}\n"),
                        (a =
                            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
                            a +
                            "return __p;\n");
                    try {
                        var u = new Function(n.variable || "obj", "_", a);
                    } catch (t) {
                        throw ((t.source = a), t);
                    }
                    var c = function (e) {
                        return u.call(this, e, t);
                    },
                        s = n.variable || "obj";
                    return (c.source = "function(" + s + "){\n" + a + "}"), c;
                }),
                t
            );
        })();
    },
    function (t, e, n) {
        "use strict";
        var r = n(4);
        r.define(
            "edit",
            (t.exports = function (t, e, n) {
                if (
                    ((n = n || {}),
                        (r.env("test") || r.env("frame")) &&
                        !n.fixture &&
                        !(function () {
                            try {
                                return window.top.__Cypress__;
                            } catch (t) {
                                return !1;
                            }
                        })())
                )
                    return { exit: 1 };
                var i,
                    o = t(window),
                    a = t(document.documentElement),
                    u = document.location,
                    c = "hashchange",
                    s =
                        n.load ||
                        function () {
                            (i = !0),
                                (window.digipantsEditor = !0),
                                o.off(c, l),
                                (function (t) {
                                    var e = window.document.createElement("iframe");
                                    (e.src =
                                        "https://digipants.com/site/third-party-cookie-check.html"),
                                        (e.style.display = "none"),
                                        (e.sandbox = "allow-scripts allow-same-origin");
                                    var n = function n(r) {
                                        "WF_third_party_cookies_unsupported" === r.data
                                            ? (E(e, n), t(!1))
                                            : "WF_third_party_cookies_supported" === r.data &&
                                            (E(e, n), t(!0));
                                    };
                                    (e.onerror = function () {
                                        E(e, n), t(!1);
                                    }),
                                        window.addEventListener("message", n, !1),
                                        window.document.body.appendChild(e);
                                })(function (e) {
                                    t.ajax({
                                        url: g("https://editor-api.digipants.com/api/editor/view"),
                                        data: { siteId: a.attr("data-wf-site") },
                                        xhrFields: { withCredentials: !0 },
                                        dataType: "json",
                                        crossDomain: !0,
                                        success: d(e),
                                    });
                                });
                        },
                    f = !1;
                try {
                    f =
                        localStorage &&
                        localStorage.getItem &&
                        localStorage.getItem("digipantsEditor");
                } catch (t) { }
                function l() {
                    i || (/\?edit/.test(u.hash) && s());
                }
                function d(t) {
                    return function (e) {
                        e
                            ? ((e.thirdPartyCookiesSupported = t),
                                p(h(e.bugReporterScriptPath), function () {
                                    p(h(e.scriptPath), function () {
                                        window.digipantsEditor(e);
                                    });
                                }))
                            : console.error("Could not load editor data");
                    };
                }
                function p(e, n) {
                    t.ajax({ type: "GET", url: e, dataType: "script", cache: !0 }).then(
                        n,
                        v
                    );
                }
                function v(t, e, n) {
                    throw (console.error("Could not load editor script: " + e), n);
                }
                function h(t) {
                    return t.indexOf("//") >= 0
                        ? t
                        : g("https://editor-api.digipants.com" + t);
                }
                function g(t) {
                    return t.replace(/([^:])\/\//g, "$1/");
                }
                function E(t, e) {
                    window.removeEventListener("message", e, !1), t.remove();
                }
                return (
                    f
                        ? s()
                        : u.search
                            ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) ||
                                /\?edit$/.test(u.href)) &&
                            s()
                            : o.on(c, l).triggerHandler(c),
                    {}
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = window.jQuery,
            i = {},
            o = [],
            a = {
                reset: function (t, e) {
                    e.__wf_intro = null;
                },
                intro: function (t, e) {
                    e.__wf_intro ||
                        ((e.__wf_intro = !0), r(e).triggerHandler(i.types.INTRO));
                },
                outro: function (t, e) {
                    e.__wf_intro &&
                        ((e.__wf_intro = null), r(e).triggerHandler(i.types.OUTRO));
                },
            };
        (i.triggers = {}),
            (i.types = { INTRO: "w-ix-intro.w-ix", OUTRO: "w-ix-outro.w-ix" }),
            (i.init = function () {
                for (var t = o.length, e = 0; e < t; e++) {
                    var n = o[e];
                    n[0](0, n[1]);
                }
                (o = []), r.extend(i.triggers, a);
            }),
            (i.async = function () {
                for (var t in a) {
                    var e = a[t];
                    a.hasOwnProperty(t) &&
                        (i.triggers[t] = function (t, n) {
                            o.push([e, n]);
                        });
                }
            }),
            i.async(),
            (t.exports = i);
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            i = n(126);
        i.setEnv(r.env),
            r.define(
                "ix2",
                (t.exports = function () {
                    return i;
                })
            );
    },
    function (t, e, n) {
        "use strict";
        var r = n(13),
            i = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setEnv = function (t) {
                t() && (0, u.observeRequests)(s);
            }),
            (e.init = function (t) {
                f(), (0, u.startEngine)({ store: s, rawData: t, allowEvents: !0 });
            }),
            (e.destroy = f),
            (e.actions = e.store = void 0),
            n(127);
        var o = n(78),
            a = i(n(168)),
            u = n(114),
            c = r(n(61));
        e.actions = c;
        var s = (0, o.createStore)(a.default);
        function f() {
            (0, u.stopEngine)(s);
        }
        e.store = s;
    },
    function (t, e, n) {
        t.exports = n(128);
    },
    function (t, e, n) {
        n(129);
        var r = n(154);
        t.exports = r("Array", "includes");
    },
    function (t, e, n) {
        "use strict";
        var r = n(130),
            i = n(76).includes,
            o = n(147);
        r(
            { target: "Array", proto: !0 },
            {
                includes: function (t) {
                    return i(this, t, arguments.length > 1 ? arguments[1] : void 0);
                },
            }
        ),
            o("includes");
    },
    function (t, e, n) {
        var r = n(3),
            i = n(66).f,
            o = n(17),
            a = n(135),
            u = n(39),
            c = n(139),
            s = n(146);
        t.exports = function (t, e) {
            var n,
                f,
                l,
                d,
                p,
                v = t.target,
                h = t.global,
                g = t.stat;
            if ((n = h ? r : g ? r[v] || u(v, {}) : (r[v] || {}).prototype))
                for (f in e) {
                    if (
                        ((d = e[f]),
                            (l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f]),
                            !s(h ? f : v + (g ? "." : "#") + f, t.forced) && void 0 !== l)
                    ) {
                        if (typeof d == typeof l) continue;
                        c(d, l);
                    }
                    (t.sham || (l && l.sham)) && o(d, "sham", !0), a(n, f, d, t);
                }
        };
    },
    function (t, e, n) {
        "use strict";
        var r = {}.propertyIsEnumerable,
            i = Object.getOwnPropertyDescriptor,
            o = i && !r.call({ 1: 2 }, 1);
        e.f = o
            ? function (t) {
                var e = i(this, t);
                return !!e && e.enumerable;
            }
            : r;
    },
    function (t, e, n) {
        var r = n(15),
            i = n(133),
            o = "".split;
        t.exports = r(function () {
            return !Object("z").propertyIsEnumerable(0);
        })
            ? function (t) {
                return "String" == i(t) ? o.call(t, "") : Object(t);
            }
            : Object;
    },
    function (t, e) {
        var n = {}.toString;
        t.exports = function (t) {
            return n.call(t).slice(8, -1);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t;
        };
    },
    function (t, e, n) {
        var r = n(3),
            i = n(25),
            o = n(17),
            a = n(16),
            u = n(39),
            c = n(71),
            s = n(137),
            f = s.get,
            l = s.enforce,
            d = String(c).split("toString");
        i("inspectSource", function (t) {
            return c.call(t);
        }),
            (t.exports = function (t, e, n, i) {
                var c = !!i && !!i.unsafe,
                    s = !!i && !!i.enumerable,
                    f = !!i && !!i.noTargetGet;
                "function" == typeof n &&
                    ("string" != typeof e || a(n, "name") || o(n, "name", e),
                        (l(n).source = d.join("string" == typeof e ? e : ""))),
                    t !== r
                        ? (c ? !f && t[e] && (s = !0) : delete t[e],
                            s ? (t[e] = n) : o(t, e, n))
                        : s
                            ? (t[e] = n)
                            : u(e, n);
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && f(this).source) || c.call(this);
            });
    },
    function (t, e) {
        t.exports = !1;
    },
    function (t, e, n) {
        var r,
            i,
            o,
            a = n(138),
            u = n(3),
            c = n(23),
            s = n(17),
            f = n(16),
            l = n(72),
            d = n(40),
            p = u.WeakMap;
        if (a) {
            var v = new p(),
                h = v.get,
                g = v.has,
                E = v.set;
            (r = function (t, e) {
                return E.call(v, t, e), e;
            }),
                (i = function (t) {
                    return h.call(v, t) || {};
                }),
                (o = function (t) {
                    return g.call(v, t);
                });
        } else {
            var _ = l("state");
            (d[_] = !0),
                (r = function (t, e) {
                    return s(t, _, e), e;
                }),
                (i = function (t) {
                    return f(t, _) ? t[_] : {};
                }),
                (o = function (t) {
                    return f(t, _);
                });
        }
        t.exports = {
            set: r,
            get: i,
            has: o,
            enforce: function (t) {
                return o(t) ? i(t) : r(t, {});
            },
            getterFor: function (t) {
                return function (e) {
                    var n;
                    if (!c(e) || (n = i(e)).type !== t)
                        throw TypeError("Incompatible receiver, " + t + " required");
                    return n;
                };
            },
        };
    },
    function (t, e, n) {
        var r = n(3),
            i = n(71),
            o = r.WeakMap;
        t.exports = "function" == typeof o && /native code/.test(i.call(o));
    },
    function (t, e, n) {
        var r = n(16),
            i = n(140),
            o = n(66),
            a = n(38);
        t.exports = function (t, e) {
            for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
                var f = n[s];
                r(t, f) || u(t, f, c(e, f));
            }
        };
    },
    function (t, e, n) {
        var r = n(74),
            i = n(142),
            o = n(145),
            a = n(24);
        t.exports =
            r("Reflect", "ownKeys") ||
            function (t) {
                var e = i.f(a(t)),
                    n = o.f;
                return n ? e.concat(n(t)) : e;
            };
    },
    function (t, e, n) {
        t.exports = n(3);
    },
    function (t, e, n) {
        var r = n(75),
            i = n(41).concat("length", "prototype");
        e.f =
            Object.getOwnPropertyNames ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e, n) {
        var r = n(77),
            i = Math.min;
        t.exports = function (t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0;
        };
    },
    function (t, e, n) {
        var r = n(77),
            i = Math.max,
            o = Math.min;
        t.exports = function (t, e) {
            var n = r(t);
            return n < 0 ? i(n + e, 0) : o(n, e);
        };
    },
    function (t, e) {
        e.f = Object.getOwnPropertySymbols;
    },
    function (t, e, n) {
        var r = n(15),
            i = /#|\.prototype\./,
            o = function (t, e) {
                var n = u[a(t)];
                return n == s || (n != c && ("function" == typeof e ? r(e) : !!e));
            },
            a = (o.normalize = function (t) {
                return String(t).replace(i, ".").toLowerCase();
            }),
            u = (o.data = {}),
            c = (o.NATIVE = "N"),
            s = (o.POLYFILL = "P");
        t.exports = o;
    },
    function (t, e, n) {
        var r = n(148),
            i = n(150),
            o = n(17),
            a = r("unscopables"),
            u = Array.prototype;
        null == u[a] && o(u, a, i(null)),
            (t.exports = function (t) {
                u[a][t] = !0;
            });
    },
    function (t, e, n) {
        var r = n(3),
            i = n(25),
            o = n(73),
            a = n(149),
            u = r.Symbol,
            c = i("wks");
        t.exports = function (t) {
            return c[t] || (c[t] = (a && u[t]) || (a ? u : o)("Symbol." + t));
        };
    },
    function (t, e, n) {
        var r = n(15);
        t.exports =
            !!Object.getOwnPropertySymbols &&
            !r(function () {
                return !String(Symbol());
            });
    },
    function (t, e, n) {
        var r = n(24),
            i = n(151),
            o = n(41),
            a = n(40),
            u = n(153),
            c = n(70),
            s = n(72)("IE_PROTO"),
            f = function () { },
            l = function () {
                var t,
                    e = c("iframe"),
                    n = o.length;
                for (
                    e.style.display = "none",
                    u.appendChild(e),
                    e.src = String("javascript:"),
                    (t = e.contentWindow.document).open(),
                    t.write("<script>document.F=Object</script>"),
                    t.close(),
                    l = t.F;
                    n--;

                )
                    delete l.prototype[o[n]];
                return l();
            };
        (t.exports =
            Object.create ||
            function (t, e) {
                var n;
                return (
                    null !== t
                        ? ((f.prototype = r(t)),
                            (n = new f()),
                            (f.prototype = null),
                            (n[s] = t))
                        : (n = l()),
                    void 0 === e ? n : i(n, e)
                );
            }),
            (a[s] = !0);
    },
    function (t, e, n) {
        var r = n(14),
            i = n(38),
            o = n(24),
            a = n(152);
        t.exports = r
            ? Object.defineProperties
            : function (t, e) {
                o(t);
                for (var n, r = a(e), u = r.length, c = 0; u > c;)
                    i.f(t, (n = r[c++]), e[n]);
                return t;
            };
    },
    function (t, e, n) {
        var r = n(75),
            i = n(41);
        t.exports =
            Object.keys ||
            function (t) {
                return r(t, i);
            };
    },
    function (t, e, n) {
        var r = n(74);
        t.exports = r("document", "documentElement");
    },
    function (t, e, n) {
        var r = n(3),
            i = n(155),
            o = Function.call;
        t.exports = function (t, e, n) {
            return i(o, r[t].prototype[e], n);
        };
    },
    function (t, e, n) {
        var r = n(156);
        t.exports = function (t, e, n) {
            if ((r(t), void 0 === e)) return t;
            switch (n) {
                case 0:
                    return function () {
                        return t.call(e);
                    };
                case 1:
                    return function (n) {
                        return t.call(e, n);
                    };
                case 2:
                    return function (n, r) {
                        return t.call(e, n, r);
                    };
                case 3:
                    return function (n, r, i) {
                        return t.call(e, n, r, i);
                    };
            }
            return function () {
                return t.apply(e, arguments);
            };
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if ("function" != typeof t)
                throw TypeError(String(t) + " is not a function");
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(80),
            i = n(160),
            o = n(161),
            a = "[object Null]",
            u = "[object Undefined]",
            c = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            return null == t
                ? void 0 === t
                    ? u
                    : a
                : c && c in Object(t)
                    ? Object(i.default)(t)
                    : Object(o.default)(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(159),
            i = "object" == typeof self && self && self.Object === Object && self,
            o = r.default || i || Function("return this")();
        e.default = o;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t) {
                var n = "object" == typeof t && t && t.Object === Object && t;
                e.default = n;
            }.call(this, n(22));
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(80),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r.default ? r.default.toStringTag : void 0;
        e.default = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) { }
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = Object.prototype.toString;
        e.default = function (t) {
            return r.call(t);
        };
    },
    function (t, e, n) {
        "use strict";
        n.r(e);
        var r = n(163),
            i = Object(r.default)(Object.getPrototypeOf, Object);
        e.default = i;
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t, e) {
                return function (n) {
                    return t(e(n));
                };
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            (e.default = function (t) {
                return null != t && "object" == typeof t;
            });
    },
    function (t, e, n) {
        "use strict";
        n.r(e),
            function (t, r) {
                var i,
                    o = n(167);
                i =
                    "undefined" != typeof self
                        ? self
                        : "undefined" != typeof window
                            ? window
                            : void 0 !== t
                                ? t
                                : r;
                var a = Object(o.default)(i);
                e.default = a;
            }.call(this, n(22), n(166)(t));
    },
    function (t, e) {
        t.exports = function (t) {
            if (!t.webpackPolyfill) {
                var e = Object.create(t);
                e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    Object.defineProperty(e, "exports", { enumerable: !0 }),
                    (e.webpackPolyfill = 1);
            }
            return e;
        };
    },
    function (t, e, n) {
        "use strict";
        function r(t) {
            var e,
                n = t.Symbol;
            return (
                "function" == typeof n
                    ? n.observable
                        ? (e = n.observable)
                        : ((e = n("observable")), (n.observable = e))
                    : (e = "@@observable"),
                e
            );
        }
        n.r(e),
            n.d(e, "default", function () {
                return r;
            });
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var r = n(78),
            i = n(169),
            o = n(175),
            a = n(176),
            u = n(10),
            c = n(261),
            s = n(262),
            f = u.IX2ElementsReducer.ixElements,
            l = (0, r.combineReducers)({
                ixData: i.ixData,
                ixRequest: o.ixRequest,
                ixSession: a.ixSession,
                ixElements: f,
                ixInstances: c.ixInstances,
                ixParameters: s.ixParameters,
            });
        e.default = l;
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.ixData = void 0);
        var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
        e.ixData = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case r:
                    return e.payload.ixData || Object.freeze({});
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.QuickEffectDirectionConsts =
                e.QuickEffectIds =
                e.EventLimitAffectedElements =
                e.EventContinuousMouseAxes =
                e.EventBasedOn =
                e.EventAppliesTo =
                e.EventTypeConsts =
                void 0);
        e.EventTypeConsts = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL",
        };
        e.EventAppliesTo = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
        e.EventBasedOn = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
        e.EventContinuousMouseAxes = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
        e.EventLimitAffectedElements = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        };
        e.QuickEffectIds = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        };
        e.QuickEffectDirectionConsts = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ActionAppliesTo = e.ActionTypeConsts = void 0);
        e.ActionTypeConsts = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        };
        e.ActionAppliesTo = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.InteractionTypeConsts = void 0);
        e.InteractionTypeConsts = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION",
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.IX2_TEST_FRAME_RENDERED =
                e.IX2_MEDIA_QUERIES_DEFINED =
                e.IX2_VIEWPORT_WIDTH_CHANGED =
                e.IX2_ACTION_LIST_PLAYBACK_CHANGED =
                e.IX2_ELEMENT_STATE_CHANGED =
                e.IX2_INSTANCE_REMOVED =
                e.IX2_INSTANCE_STARTED =
                e.IX2_INSTANCE_ADDED =
                e.IX2_PARAMETER_CHANGED =
                e.IX2_ANIMATION_FRAME_CHANGED =
                e.IX2_EVENT_STATE_CHANGED =
                e.IX2_EVENT_LISTENER_ADDED =
                e.IX2_CLEAR_REQUESTED =
                e.IX2_STOP_REQUESTED =
                e.IX2_PLAYBACK_REQUESTED =
                e.IX2_PREVIEW_REQUESTED =
                e.IX2_SESSION_STOPPED =
                e.IX2_SESSION_STARTED =
                e.IX2_SESSION_INITIALIZED =
                e.IX2_RAW_DATA_IMPORTED =
                void 0);
        e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
        e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
        e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
        e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
        e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
        e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
        e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
        e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
        e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
        e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
        e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
        e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
        e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
        e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
        e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
        e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
        e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
        e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
        e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
        e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED";
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.RENDER_PLUGIN =
                e.RENDER_STYLE =
                e.RENDER_GENERAL =
                e.RENDER_TRANSFORM =
                e.ABSTRACT_NODE =
                e.PLAIN_OBJECT =
                e.HTML_ELEMENT =
                e.PRESERVE_3D =
                e.PARENT =
                e.SIBLINGS =
                e.IMMEDIATE_CHILDREN =
                e.CHILDREN =
                e.BAR_DELIMITER =
                e.COLON_DELIMITER =
                e.COMMA_DELIMITER =
                e.AUTO =
                e.WILL_CHANGE =
                e.FLEX =
                e.DISPLAY =
                e.COLOR =
                e.BORDER_COLOR =
                e.BACKGROUND =
                e.BACKGROUND_COLOR =
                e.HEIGHT =
                e.WIDTH =
                e.FILTER =
                e.OPACITY =
                e.SKEW_Y =
                e.SKEW_X =
                e.SKEW =
                e.ROTATE_Z =
                e.ROTATE_Y =
                e.ROTATE_X =
                e.SCALE_3D =
                e.SCALE_Z =
                e.SCALE_Y =
                e.SCALE_X =
                e.TRANSLATE_3D =
                e.TRANSLATE_Z =
                e.TRANSLATE_Y =
                e.TRANSLATE_X =
                e.TRANSFORM =
                e.CONFIG_UNIT =
                e.CONFIG_Z_UNIT =
                e.CONFIG_Y_UNIT =
                e.CONFIG_X_UNIT =
                e.CONFIG_VALUE =
                e.CONFIG_Z_VALUE =
                e.CONFIG_Y_VALUE =
                e.CONFIG_X_VALUE =
                e.BOUNDARY_SELECTOR =
                e.W_MOD_IX =
                e.W_MOD_JS =
                e.WF_PAGE =
                e.IX2_ID_DELIMITER =
                void 0);
        e.IX2_ID_DELIMITER = "|";
        e.WF_PAGE = "data-wf-page";
        e.W_MOD_JS = "w-mod-js";
        e.W_MOD_IX = "w-mod-ix";
        e.BOUNDARY_SELECTOR = ".w-dyn-item";
        e.CONFIG_X_VALUE = "xValue";
        e.CONFIG_Y_VALUE = "yValue";
        e.CONFIG_Z_VALUE = "zValue";
        e.CONFIG_VALUE = "value";
        e.CONFIG_X_UNIT = "xUnit";
        e.CONFIG_Y_UNIT = "yUnit";
        e.CONFIG_Z_UNIT = "zUnit";
        e.CONFIG_UNIT = "unit";
        e.TRANSFORM = "transform";
        e.TRANSLATE_X = "translateX";
        e.TRANSLATE_Y = "translateY";
        e.TRANSLATE_Z = "translateZ";
        e.TRANSLATE_3D = "translate3d";
        e.SCALE_X = "scaleX";
        e.SCALE_Y = "scaleY";
        e.SCALE_Z = "scaleZ";
        e.SCALE_3D = "scale3d";
        e.ROTATE_X = "rotateX";
        e.ROTATE_Y = "rotateY";
        e.ROTATE_Z = "rotateZ";
        e.SKEW = "skew";
        e.SKEW_X = "skewX";
        e.SKEW_Y = "skewY";
        e.OPACITY = "opacity";
        e.FILTER = "filter";
        e.WIDTH = "width";
        e.HEIGHT = "height";
        e.BACKGROUND_COLOR = "backgroundColor";
        e.BACKGROUND = "background";
        e.BORDER_COLOR = "borderColor";
        e.COLOR = "color";
        e.DISPLAY = "display";
        e.FLEX = "flex";
        e.WILL_CHANGE = "willChange";
        e.AUTO = "AUTO";
        e.COMMA_DELIMITER = ",";
        e.COLON_DELIMITER = ":";
        e.BAR_DELIMITER = "|";
        e.CHILDREN = "CHILDREN";
        e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
        e.SIBLINGS = "SIBLINGS";
        e.PARENT = "PARENT";
        e.PRESERVE_3D = "preserve-3d";
        e.HTML_ELEMENT = "HTML_ELEMENT";
        e.PLAIN_OBJECT = "PLAIN_OBJECT";
        e.ABSTRACT_NODE = "ABSTRACT_NODE";
        e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
        e.RENDER_GENERAL = "RENDER_GENERAL";
        e.RENDER_STYLE = "RENDER_STYLE";
        e.RENDER_PLUGIN = "RENDER_PLUGIN";
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(0)(n(26)),
            o = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixRequest = void 0);
        var a = o(n(27)),
            u = n(2),
            c = n(18),
            s = u.IX2EngineActionTypes,
            f = s.IX2_PREVIEW_REQUESTED,
            l = s.IX2_PLAYBACK_REQUESTED,
            d = s.IX2_STOP_REQUESTED,
            p = s.IX2_CLEAR_REQUESTED,
            v = { preview: {}, playback: {}, stop: {}, clear: {} },
            h = Object.create(
                null,
                ((r = {}),
                    (0, i.default)(r, f, { value: "preview" }),
                    (0, i.default)(r, l, { value: "playback" }),
                    (0, i.default)(r, d, { value: "stop" }),
                    (0, i.default)(r, p, { value: "clear" }),
                    r)
            );
        e.ixRequest = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
                e = arguments.length > 1 ? arguments[1] : void 0;
            if (e.type in h) {
                var n = [h[e.type]];
                return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload));
            }
            return t;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixSession = void 0);
        var r = n(2),
            i = n(18),
            o = r.IX2EngineActionTypes,
            a = o.IX2_SESSION_INITIALIZED,
            u = o.IX2_SESSION_STARTED,
            c = o.IX2_TEST_FRAME_RENDERED,
            s = o.IX2_SESSION_STOPPED,
            f = o.IX2_EVENT_LISTENER_ADDED,
            l = o.IX2_EVENT_STATE_CHANGED,
            d = o.IX2_ANIMATION_FRAME_CHANGED,
            p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
            v = o.IX2_VIEWPORT_WIDTH_CHANGED,
            h = o.IX2_MEDIA_QUERIES_DEFINED,
            g = {
                active: !1,
                tick: 0,
                eventListeners: [],
                eventState: {},
                playbackState: {},
                viewportWidth: 0,
                mediaQueryKey: null,
                hasBoundaryNodes: !1,
                hasDefinedMediaQueries: !1,
            };
        e.ixSession = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : g,
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case a:
                    var n = e.payload.hasBoundaryNodes;
                    return (0, i.set)(t, "hasBoundaryNodes", n);
                case u:
                    return (0, i.set)(t, "active", !0);
                case c:
                    var r = e.payload.step,
                        o = void 0 === r ? 20 : r;
                    return (0, i.set)(t, "tick", t.tick + o);
                case s:
                    return g;
                case d:
                    var E = e.payload.now;
                    return (0, i.set)(t, "tick", E);
                case f:
                    var _ = (0, i.addLast)(t.eventListeners, e.payload);
                    return (0, i.set)(t, "eventListeners", _);
                case l:
                    var m = e.payload,
                        y = m.stateKey,
                        I = m.newState;
                    return (0, i.setIn)(t, ["eventState", y], I);
                case p:
                    var b = e.payload,
                        T = b.actionListId,
                        w = b.isPlaying;
                    return (0, i.setIn)(t, ["playbackState", T], w);
                case v:
                    for (
                        var O = e.payload,
                        A = O.width,
                        x = O.mediaQueries,
                        S = x.length,
                        R = null,
                        N = 0;
                        N < S;
                        N++
                    ) {
                        var C = x[N],
                            L = C.key,
                            D = C.min,
                            P = C.max;
                        if (A >= D && A <= P) {
                            R = L;
                            break;
                        }
                    }
                    return (0, i.merge)(t, { viewportWidth: A, mediaQueryKey: R });
                case h:
                    return (0, i.set)(t, "hasDefinedMediaQueries", !0);
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        var r = n(178),
            i = n(230),
            o = n(101);
        t.exports = function (t) {
            var e = i(t);
            return 1 == e.length && e[0][2]
                ? o(e[0][0], e[0][1])
                : function (n) {
                    return n === t || r(n, t, e);
                };
        };
    },
    function (t, e, n) {
        var r = n(87),
            i = n(91),
            o = 1,
            a = 2;
        t.exports = function (t, e, n, u) {
            var c = n.length,
                s = c,
                f = !u;
            if (null == t) return !s;
            for (t = Object(t); c--;) {
                var l = n[c];
                if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1;
            }
            for (; ++c < s;) {
                var d = (l = n[c])[0],
                    p = t[d],
                    v = l[1];
                if (f && l[2]) {
                    if (void 0 === p && !(d in t)) return !1;
                } else {
                    var h = new r();
                    if (u) var g = u(p, v, d, t, e, h);
                    if (!(void 0 === g ? i(v, p, o | a, u, h) : g)) return !1;
                }
            }
            return !0;
        };
    },
    function (t, e) {
        t.exports = function () {
            (this.__data__ = []), (this.size = 0);
        };
    },
    function (t, e, n) {
        var r = n(29),
            i = Array.prototype.splice;
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return !(
                n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0)
            );
        };
    },
    function (t, e, n) {
        var r = n(29);
        t.exports = function (t) {
            var e = this.__data__,
                n = r(e, t);
            return n < 0 ? void 0 : e[n][1];
        };
    },
    function (t, e, n) {
        var r = n(29);
        t.exports = function (t) {
            return r(this.__data__, t) > -1;
        };
    },
    function (t, e, n) {
        var r = n(29);
        t.exports = function (t, e) {
            var n = this.__data__,
                i = r(n, t);
            return i < 0 ? (++this.size, n.push([t, e])) : (n[i][1] = e), this;
        };
    },
    function (t, e, n) {
        var r = n(28);
        t.exports = function () {
            (this.__data__ = new r()), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.__data__,
                n = e.delete(t);
            return (this.size = e.size), n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.get(t);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e, n) {
        var r = n(28),
            i = n(46),
            o = n(47),
            a = 200;
        t.exports = function (t, e) {
            var n = this.__data__;
            if (n instanceof r) {
                var u = n.__data__;
                if (!i || u.length < a - 1)
                    return u.push([t, e]), (this.size = ++n.size), this;
                n = this.__data__ = new o(u);
            }
            return n.set(t, e), (this.size = n.size), this;
        };
    },
    function (t, e, n) {
        var r = n(88),
            i = n(192),
            o = n(6),
            a = n(90),
            u = /^\[object .+?Constructor\]$/,
            c = Function.prototype,
            s = Object.prototype,
            f = c.toString,
            l = s.hasOwnProperty,
            d = RegExp(
                "^" +
                f
                    .call(l)
                    .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
                    .replace(
                        /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                        "$1.*?"
                    ) +
                "$"
            );
        t.exports = function (t) {
            return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t));
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = Object.prototype,
            o = i.hasOwnProperty,
            a = i.toString,
            u = r ? r.toStringTag : void 0;
        t.exports = function (t) {
            var e = o.call(t, u),
                n = t[u];
            try {
                t[u] = void 0;
                var r = !0;
            } catch (t) { }
            var i = a.call(t);
            return r && (e ? (t[u] = n) : delete t[u]), i;
        };
    },
    function (t, e) {
        var n = Object.prototype.toString;
        t.exports = function (t) {
            return n.call(t);
        };
    },
    function (t, e, n) {
        var r,
            i = n(193),
            o = (r = /[^.]+$/.exec((i && i.keys && i.keys.IE_PROTO) || ""))
                ? "Symbol(src)_1." + r
                : "";
        t.exports = function (t) {
            return !!o && o in t;
        };
    },
    function (t, e, n) {
        var r = n(5)["__core-js_shared__"];
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t ? void 0 : t[e];
        };
    },
    function (t, e, n) {
        var r = n(196),
            i = n(28),
            o = n(46);
        t.exports = function () {
            (this.size = 0),
                (this.__data__ = {
                    hash: new r(),
                    map: new (o || i)(),
                    string: new r(),
                });
        };
    },
    function (t, e, n) {
        var r = n(197),
            i = n(198),
            o = n(199),
            a = n(200),
            u = n(201);
        function c(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.clear(); ++e < n;) {
                var r = t[e];
                this.set(r[0], r[1]);
            }
        }
        (c.prototype.clear = r),
            (c.prototype.delete = i),
            (c.prototype.get = o),
            (c.prototype.has = a),
            (c.prototype.set = u),
            (t.exports = c);
    },
    function (t, e, n) {
        var r = n(30);
        t.exports = function () {
            (this.__data__ = r ? r(null) : {}), (this.size = 0);
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = this.has(t) && delete this.__data__[t];
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e, n) {
        var r = n(30),
            i = "__lodash_hash_undefined__",
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            if (r) {
                var n = e[t];
                return n === i ? void 0 : n;
            }
            return o.call(e, t) ? e[t] : void 0;
        };
    },
    function (t, e, n) {
        var r = n(30),
            i = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            var e = this.__data__;
            return r ? void 0 !== e[t] : i.call(e, t);
        };
    },
    function (t, e, n) {
        var r = n(30),
            i = "__lodash_hash_undefined__";
        t.exports = function (t, e) {
            var n = this.__data__;
            return (
                (this.size += this.has(t) ? 0 : 1),
                (n[t] = r && void 0 === e ? i : e),
                this
            );
        };
    },
    function (t, e, n) {
        var r = n(31);
        t.exports = function (t) {
            var e = r(this, t).delete(t);
            return (this.size -= e ? 1 : 0), e;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = typeof t;
            return "string" == e || "number" == e || "symbol" == e || "boolean" == e
                ? "__proto__" !== t
                : null === t;
        };
    },
    function (t, e, n) {
        var r = n(31);
        t.exports = function (t) {
            return r(this, t).get(t);
        };
    },
    function (t, e, n) {
        var r = n(31);
        t.exports = function (t) {
            return r(this, t).has(t);
        };
    },
    function (t, e, n) {
        var r = n(31);
        t.exports = function (t, e) {
            var n = r(this, t),
                i = n.size;
            return n.set(t, e), (this.size += n.size == i ? 0 : 1), this;
        };
    },
    function (t, e, n) {
        var r = n(87),
            i = n(92),
            o = n(213),
            a = n(217),
            u = n(55),
            c = n(1),
            s = n(49),
            f = n(51),
            l = 1,
            d = "[object Arguments]",
            p = "[object Array]",
            v = "[object Object]",
            h = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, g, E, _) {
            var m = c(t),
                y = c(e),
                I = m ? p : u(t),
                b = y ? p : u(e),
                T = (I = I == d ? v : I) == v,
                w = (b = b == d ? v : b) == v,
                O = I == b;
            if (O && s(t)) {
                if (!s(e)) return !1;
                (m = !0), (T = !1);
            }
            if (O && !T)
                return (
                    _ || (_ = new r()),
                    m || f(t) ? i(t, e, n, g, E, _) : o(t, e, I, n, g, E, _)
                );
            if (!(n & l)) {
                var A = T && h.call(t, "__wrapped__"),
                    x = w && h.call(e, "__wrapped__");
                if (A || x) {
                    var S = A ? t.value() : t,
                        R = x ? e.value() : e;
                    return _ || (_ = new r()), E(S, R, n, g, _);
                }
            }
            return !!O && (_ || (_ = new r()), a(t, e, n, g, E, _));
        };
    },
    function (t, e, n) {
        var r = n(47),
            i = n(209),
            o = n(210);
        function a(t) {
            var e = -1,
                n = null == t ? 0 : t.length;
            for (this.__data__ = new r(); ++e < n;) this.add(t[e]);
        }
        (a.prototype.add = a.prototype.push = i),
            (a.prototype.has = o),
            (t.exports = a);
    },
    function (t, e) {
        var n = "__lodash_hash_undefined__";
        t.exports = function (t) {
            return this.__data__.set(t, n), this;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return this.__data__.has(t);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
                if (e(t[n], n, t)) return !0;
            return !1;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return t.has(e);
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = n(214),
            o = n(45),
            a = n(92),
            u = n(215),
            c = n(216),
            s = 1,
            f = 2,
            l = "[object Boolean]",
            d = "[object Date]",
            p = "[object Error]",
            v = "[object Map]",
            h = "[object Number]",
            g = "[object RegExp]",
            E = "[object Set]",
            _ = "[object String]",
            m = "[object Symbol]",
            y = "[object ArrayBuffer]",
            I = "[object DataView]",
            b = r ? r.prototype : void 0,
            T = b ? b.valueOf : void 0;
        t.exports = function (t, e, n, r, b, w, O) {
            switch (n) {
                case I:
                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
                        return !1;
                    (t = t.buffer), (e = e.buffer);
                case y:
                    return !(t.byteLength != e.byteLength || !w(new i(t), new i(e)));
                case l:
                case d:
                case h:
                    return o(+t, +e);
                case p:
                    return t.name == e.name && t.message == e.message;
                case g:
                case _:
                    return t == e + "";
                case v:
                    var A = u;
                case E:
                    var x = r & s;
                    if ((A || (A = c), t.size != e.size && !x)) return !1;
                    var S = O.get(t);
                    if (S) return S == e;
                    (r |= f), O.set(t, e);
                    var R = a(A(t), A(e), r, b, w, O);
                    return O.delete(t), R;
                case m:
                    if (T) return T.call(t) == T.call(e);
            }
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(5).Uint8Array;
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t, r) {
                    n[++e] = [r, t];
                }),
                n
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = -1,
                n = Array(t.size);
            return (
                t.forEach(function (t) {
                    n[++e] = t;
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(218),
            i = 1,
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n, a, u, c) {
            var s = n & i,
                f = r(t),
                l = f.length;
            if (l != r(e).length && !s) return !1;
            for (var d = l; d--;) {
                var p = f[d];
                if (!(s ? p in e : o.call(e, p))) return !1;
            }
            var v = c.get(t),
                h = c.get(e);
            if (v && h) return v == e && h == t;
            var g = !0;
            c.set(t, e), c.set(e, t);
            for (var E = s; ++d < l;) {
                var _ = t[(p = f[d])],
                    m = e[p];
                if (a) var y = s ? a(m, _, p, e, t, c) : a(_, m, p, t, e, c);
                if (!(void 0 === y ? _ === m || u(_, m, n, a, c) : y)) {
                    g = !1;
                    break;
                }
                E || (E = "constructor" == p);
            }
            if (g && !E) {
                var I = t.constructor,
                    b = e.constructor;
                I != b &&
                    "constructor" in t &&
                    "constructor" in e &&
                    !(
                        "function" == typeof I &&
                        I instanceof I &&
                        "function" == typeof b &&
                        b instanceof b
                    ) &&
                    (g = !1);
            }
            return c.delete(t), c.delete(e), g;
        };
    },
    function (t, e, n) {
        var r = n(93),
            i = n(94),
            o = n(32);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                var a = t[n];
                e(a, n, t) && (o[i++] = a);
            }
            return o;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
            return r;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(9),
            o = "[object Arguments]";
        t.exports = function (t) {
            return i(t) && r(t) == o;
        };
    },
    function (t, e) {
        t.exports = function () {
            return !1;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(52),
            o = n(9),
            a = {};
        (a["[object Float32Array]"] =
            a["[object Float64Array]"] =
            a["[object Int8Array]"] =
            a["[object Int16Array]"] =
            a["[object Int32Array]"] =
            a["[object Uint8Array]"] =
            a["[object Uint8ClampedArray]"] =
            a["[object Uint16Array]"] =
            a["[object Uint32Array]"] =
            !0),
            (a["[object Arguments]"] =
                a["[object Array]"] =
                a["[object ArrayBuffer]"] =
                a["[object Boolean]"] =
                a["[object DataView]"] =
                a["[object Date]"] =
                a["[object Error]"] =
                a["[object Function]"] =
                a["[object Map]"] =
                a["[object Number]"] =
                a["[object Object]"] =
                a["[object RegExp]"] =
                a["[object Set]"] =
                a["[object String]"] =
                a["[object WeakMap]"] =
                !1),
            (t.exports = function (t) {
                return o(t) && i(t.length) && !!a[r(t)];
            });
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e) {
                return t(e);
            };
        };
    },
    function (t, e, n) {
        (function (t) {
            var r = n(89),
                i = e && !e.nodeType && e,
                o = i && "object" == typeof t && t && !t.nodeType && t,
                a = o && o.exports === i && r.process,
                u = (function () {
                    try {
                        var t = o && o.require && o.require("util").types;
                        return t || (a && a.binding && a.binding("util"));
                    } catch (t) { }
                })();
            t.exports = u;
        }).call(this, n(97)(t));
    },
    function (t, e, n) {
        var r = n(98)(Object.keys, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(8)(n(5), "DataView");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(8)(n(5), "Promise");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(8)(n(5), "Set");
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(100),
            i = n(32);
        t.exports = function (t) {
            for (var e = i(t), n = e.length; n--;) {
                var o = e[n],
                    a = t[o];
                e[n] = [o, a, r(a)];
            }
            return e;
        };
    },
    function (t, e, n) {
        var r = n(91),
            i = n(56),
            o = n(237),
            a = n(58),
            u = n(100),
            c = n(101),
            s = n(20),
            f = 1,
            l = 2;
        t.exports = function (t, e) {
            return a(t) && u(e)
                ? c(s(t), e)
                : function (n) {
                    var a = i(n, t);
                    return void 0 === a && a === e ? o(n, t) : r(e, a, f | l);
                };
        };
    },
    function (t, e, n) {
        var r = n(233),
            i =
                /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
            o = /\\(\\)?/g,
            a = r(function (t) {
                var e = [];
                return (
                    46 === t.charCodeAt(0) && e.push(""),
                    t.replace(i, function (t, n, r, i) {
                        e.push(r ? i.replace(o, "$1") : n || t);
                    }),
                    e
                );
            });
        t.exports = a;
    },
    function (t, e, n) {
        var r = n(234),
            i = 500;
        t.exports = function (t) {
            var e = r(t, function (t) {
                return n.size === i && n.clear(), t;
            }),
                n = e.cache;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(47),
            i = "Expected a function";
        function o(t, e) {
            if ("function" != typeof t || (null != e && "function" != typeof e))
                throw new TypeError(i);
            var n = function () {
                var r = arguments,
                    i = e ? e.apply(this, r) : r[0],
                    o = n.cache;
                if (o.has(i)) return o.get(i);
                var a = t.apply(this, r);
                return (n.cache = o.set(i, a) || o), a;
            };
            return (n.cache = new (o.Cache || r)()), n;
        }
        (o.Cache = r), (t.exports = o);
    },
    function (t, e, n) {
        var r = n(236);
        t.exports = function (t) {
            return null == t ? "" : r(t);
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = n(102),
            o = n(1),
            a = n(35),
            u = 1 / 0,
            c = r ? r.prototype : void 0,
            s = c ? c.toString : void 0;
        t.exports = function t(e) {
            if ("string" == typeof e) return e;
            if (o(e)) return i(e, t) + "";
            if (a(e)) return s ? s.call(e) : "";
            var n = e + "";
            return "0" == n && 1 / e == -u ? "-0" : n;
        };
    },
    function (t, e, n) {
        var r = n(238),
            i = n(239);
        t.exports = function (t, e) {
            return null != t && i(t, e, r);
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null != t && e in Object(t);
        };
    },
    function (t, e, n) {
        var r = n(34),
            i = n(33),
            o = n(1),
            a = n(50),
            u = n(52),
            c = n(20);
        t.exports = function (t, e, n) {
            for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
                var d = c(e[s]);
                if (!(l = null != t && n(t, d))) break;
                t = t[d];
            }
            return l || ++s != f
                ? l
                : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t));
        };
    },
    function (t, e, n) {
        var r = n(103),
            i = n(241),
            o = n(58),
            a = n(20);
        t.exports = function (t) {
            return o(t) ? r(a(t)) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(57);
        t.exports = function (t) {
            return function (e) {
                return r(e, t);
            };
        };
    },
    function (t, e, n) {
        var r = n(104),
            i = n(7),
            o = n(105),
            a = Math.max;
        t.exports = function (t, e, n) {
            var u = null == t ? 0 : t.length;
            if (!u) return -1;
            var c = null == n ? 0 : o(n);
            return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c);
        };
    },
    function (t, e, n) {
        var r = n(60),
            i = 1 / 0,
            o = 1.7976931348623157e308;
        t.exports = function (t) {
            return t
                ? (t = r(t)) === i || t === -i
                    ? (t < 0 ? -1 : 1) * o
                    : t == t
                        ? t
                        : 0
                : 0 === t
                    ? t
                    : 0;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) {
                for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                return n;
            }
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (
                Symbol.iterator in Object(t) ||
                "[object Arguments]" === Object.prototype.toString.call(t)
            )
                return Array.from(t);
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.createElementState = I),
            (e.mergeActionState = b),
            (e.ixElements = void 0);
        var r = n(18),
            i = n(2),
            o = i.IX2EngineConstants,
            a = (o.HTML_ELEMENT, o.PLAIN_OBJECT),
            u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
            c = o.CONFIG_Y_VALUE,
            s = o.CONFIG_Z_VALUE,
            f = o.CONFIG_VALUE,
            l = o.CONFIG_X_UNIT,
            d = o.CONFIG_Y_UNIT,
            p = o.CONFIG_Z_UNIT,
            v = o.CONFIG_UNIT,
            h = i.IX2EngineActionTypes,
            g = h.IX2_SESSION_STOPPED,
            E = h.IX2_INSTANCE_ADDED,
            _ = h.IX2_ELEMENT_STATE_CHANGED,
            m = {},
            y = "refState";
        function I(t, e, n, i, o) {
            var u =
                n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
            return (0, r.mergeIn)(t, [i], { id: i, ref: e, refId: u, refType: n });
        }
        function b(t, e, n, i, o) {
            var a = (function (t) {
                var e = t.config;
                return T.reduce(function (t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t;
                }, {});
            })(o),
                u = [e, y, n];
            return (0, r.mergeIn)(t, u, i, a);
        }
        e.ixElements = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : m,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            switch (e.type) {
                case g:
                    return m;
                case E:
                    var n = e.payload,
                        i = n.elementId,
                        o = n.element,
                        a = n.origin,
                        u = n.actionItem,
                        c = n.refType,
                        s = u.actionTypeId,
                        f = t;
                    return (
                        (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)),
                        b(f, i, s, a, u)
                    );
                case _:
                    var l = e.payload;
                    return b(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
                default:
                    return t;
            }
        };
        var T = [
            [u, l],
            [c, d],
            [s, p],
            [f, v],
        ];
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.clearPlugin =
                e.renderPlugin =
                e.createPluginInstance =
                e.getPluginDestination =
                e.getPluginOrigin =
                e.getPluginDuration =
                e.getPluginConfig =
                void 0);
        e.getPluginConfig = function (t) {
            return t.value;
        };
        e.getPluginDuration = function (t, e) {
            if ("auto" !== e.config.duration) return null;
            var n = parseFloat(t.getAttribute("data-duration"));
            return n > 0
                ? 1e3 * n
                : 1e3 * parseFloat(t.getAttribute("data-default-duration"));
        };
        e.getPluginOrigin = function (t) {
            return t || { value: 0 };
        };
        e.getPluginDestination = function (t) {
            return { value: t.value };
        };
        e.createPluginInstance = function (t) {
            var e = window.digipants.require("lottie").createInstance(t);
            return e.stop(), e.setSubframe(!0), e;
        };
        e.renderPlugin = function (t, e, n) {
            if (t) {
                var r = e[n.actionTypeId].value / 100;
                t.goToFrame(t.frames * r);
            }
        };
        e.clearPlugin = function (t) {
            window.digipants.require("lottie").createInstance(t).stop();
        };
    },
    function (t, e, n) {
        "use strict";
        var r,
            i,
            o,
            a = n(0),
            u = a(n(21)),
            c = a(n(26)),
            s = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.getInstanceId = function () {
                return "i" + vt++;
            }),
            (e.getElementId = function (t, e) {
                for (var n in t) {
                    var r = t[n];
                    if (r && r.ref === e) return r.id;
                }
                return "e" + ht++;
            }),
            (e.reifyState = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    e = t.events,
                    n = t.actionLists,
                    r = t.site,
                    i = (0, l.default)(
                        e,
                        function (t, e) {
                            var n = e.eventTypeId;
                            return t[n] || (t[n] = {}), (t[n][e.id] = e), t;
                        },
                        {}
                    ),
                    o = r && r.mediaQueries,
                    a = [];
                o
                    ? (a = o.map(function (t) {
                        return t.key;
                    }))
                    : ((o = []), console.warn("IX2 missing mediaQueries in site data"));
                return {
                    ixData: {
                        events: e,
                        actionLists: n,
                        eventTypeMap: i,
                        mediaQueries: o,
                        mediaQueryKeys: a,
                    },
                };
            }),
            (e.observeStore = function (t) {
                var e = t.store,
                    n = t.select,
                    r = t.onChange,
                    i = t.comparator,
                    o = void 0 === i ? gt : i,
                    a = e.getState,
                    u = (0, e.subscribe)(function () {
                        var t = n(a());
                        if (null == t) return void u();
                        o(t, c) || r((c = t), e);
                    }),
                    c = n(a());
                return u;
            }),
            (e.getAffectedElements = _t),
            (e.getComputedStyle = function (t) {
                var e = t.element,
                    n = t.actionItem;
                if (!_.IS_BROWSER_ENV) return {};
                switch (n.actionTypeId) {
                    case it:
                    case ot:
                    case at:
                    case ut:
                    case ct:
                        return window.getComputedStyle(e);
                    default:
                        return {};
                }
            }),
            (e.getInstanceOrigin = function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n =
                        arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = arguments.length > 3 ? arguments[3] : void 0,
                    i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
                    o = r.actionTypeId,
                    a = r.config;
                if ((0, E.isPluginType)(o)) return (0, E.getPluginOrigin)(o)(e[o]);
                switch (o) {
                    case Z:
                    case J:
                    case tt:
                    case et:
                        return e[o] || Tt[o];
                    case rt:
                        return yt(e[o], r.config.filters);
                    case nt:
                        return { value: (0, f.default)(parseFloat(i(t, N)), 1) };
                    case it:
                        var u,
                            c,
                            s = i(t, L),
                            l = i(t, D);
                        return (
                            (u =
                                a.widthUnit === W
                                    ? mt.test(s)
                                        ? parseFloat(s)
                                        : parseFloat(n.width)
                                    : (0, f.default)(parseFloat(s), parseFloat(n.width))),
                            (c =
                                a.heightUnit === W
                                    ? mt.test(l)
                                        ? parseFloat(l)
                                        : parseFloat(n.height)
                                    : (0, f.default)(parseFloat(l), parseFloat(n.height))),
                            { widthValue: u, heightValue: c }
                        );
                    case ot:
                    case at:
                    case ut:
                        return (function (t) {
                            var e = t.element,
                                n = t.actionTypeId,
                                r = t.computedStyle,
                                i = t.getStyle,
                                o = lt[n],
                                a = i(e, o),
                                u = xt.test(a) ? a : r[o],
                                c = (function (t, e) {
                                    var n = t.exec(e);
                                    return n ? n[1] : "";
                                })(St, u).split(B);
                            return {
                                rValue: (0, f.default)(parseInt(c[0], 10), 255),
                                gValue: (0, f.default)(parseInt(c[1], 10), 255),
                                bValue: (0, f.default)(parseInt(c[2], 10), 255),
                                aValue: (0, f.default)(parseFloat(c[3]), 1),
                            };
                        })({ element: t, actionTypeId: o, computedStyle: n, getStyle: i });
                    case ct:
                        return { value: (0, f.default)(i(t, U), n.display) };
                    case st:
                        return e[o] || { value: 0 };
                    default:
                        return;
                }
            }),
            (e.getDestinationValues = function (t) {
                var e = t.element,
                    n = t.actionItem,
                    r = t.elementApi,
                    i = n.actionTypeId;
                if ((0, E.isPluginType)(i))
                    return (0, E.getPluginDestination)(i)(n.config);
                switch (i) {
                    case Z:
                    case J:
                    case tt:
                    case et:
                        var o = n.config,
                            a = o.xValue,
                            u = o.yValue,
                            c = o.zValue;
                        return { xValue: a, yValue: u, zValue: c };
                    case it:
                        var s = r.getStyle,
                            f = r.setStyle,
                            l = r.getProperty,
                            d = n.config,
                            p = d.widthUnit,
                            v = d.heightUnit,
                            h = n.config,
                            g = h.widthValue,
                            m = h.heightValue;
                        if (!_.IS_BROWSER_ENV) return { widthValue: g, heightValue: m };
                        if (p === W) {
                            var y = s(e, L);
                            f(e, L, ""), (g = l(e, "offsetWidth")), f(e, L, y);
                        }
                        if (v === W) {
                            var I = s(e, D);
                            f(e, D, ""), (m = l(e, "offsetHeight")), f(e, D, I);
                        }
                        return { widthValue: g, heightValue: m };
                    case ot:
                    case at:
                    case ut:
                        var b = n.config,
                            T = b.rValue,
                            w = b.gValue,
                            O = b.bValue,
                            A = b.aValue;
                        return { rValue: T, gValue: w, bValue: O, aValue: A };
                    case rt:
                        return n.config.filters.reduce(It, {});
                    default:
                        var x = n.config.value;
                        return { value: x };
                }
            }),
            (e.getRenderType = bt),
            (e.getStyleProp = function (t, e) {
                return t === Q ? e.replace("STYLE_", "").toLowerCase() : null;
            }),
            (e.renderHTMLElement = function (t, e, n, r, i, o, a, u, c) {
                switch (u) {
                    case Y:
                        return (function (t, e, n, r, i) {
                            var o = At.map(function (t) {
                                var n = Tt[t],
                                    r = e[t] || {},
                                    i = r.xValue,
                                    o = void 0 === i ? n.xValue : i,
                                    a = r.yValue,
                                    u = void 0 === a ? n.yValue : a,
                                    c = r.zValue,
                                    s = void 0 === c ? n.zValue : c,
                                    f = r.xUnit,
                                    l = void 0 === f ? "" : f,
                                    d = r.yUnit,
                                    p = void 0 === d ? "" : d,
                                    v = r.zUnit,
                                    h = void 0 === v ? "" : v;
                                switch (t) {
                                    case Z:
                                        return ""
                                            .concat(b, "(")
                                            .concat(o)
                                            .concat(l, ", ")
                                            .concat(u)
                                            .concat(p, ", ")
                                            .concat(s)
                                            .concat(h, ")");
                                    case J:
                                        return ""
                                            .concat(T, "(")
                                            .concat(o)
                                            .concat(l, ", ")
                                            .concat(u)
                                            .concat(p, ", ")
                                            .concat(s)
                                            .concat(h, ")");
                                    case tt:
                                        return ""
                                            .concat(w, "(")
                                            .concat(o)
                                            .concat(l, ") ")
                                            .concat(O, "(")
                                            .concat(u)
                                            .concat(p, ") ")
                                            .concat(A, "(")
                                            .concat(s)
                                            .concat(h, ")");
                                    case et:
                                        return ""
                                            .concat(x, "(")
                                            .concat(o)
                                            .concat(l, ", ")
                                            .concat(u)
                                            .concat(p, ")");
                                    default:
                                        return "";
                                }
                            }).join(" "),
                                a = i.setStyle;
                            Rt(t, _.TRANSFORM_PREFIXED, i),
                                a(t, _.TRANSFORM_PREFIXED, o),
                                (u = r),
                                (c = n),
                                (s = u.actionTypeId),
                                (f = c.xValue),
                                (l = c.yValue),
                                (d = c.zValue),
                                ((s === Z && void 0 !== d) ||
                                    (s === J && void 0 !== d) ||
                                    (s === tt && (void 0 !== f || void 0 !== l))) &&
                                a(t, _.TRANSFORM_STYLE_PREFIXED, S);
                            var u, c, s, f, l, d;
                        })(t, e, n, i, a);
                    case Q:
                        return (function (t, e, n, r, i, o) {
                            var a = o.setStyle,
                                u = r.actionTypeId,
                                c = r.config;
                            switch (u) {
                                case it:
                                    var s = r.config,
                                        f = s.widthUnit,
                                        d = void 0 === f ? "" : f,
                                        p = s.heightUnit,
                                        v = void 0 === p ? "" : p,
                                        h = n.widthValue,
                                        g = n.heightValue;
                                    void 0 !== h &&
                                        (d === W && (d = "px"), Rt(t, L, o), a(t, L, h + d)),
                                        void 0 !== g &&
                                        (v === W && (v = "px"), Rt(t, D, o), a(t, D, g + v));
                                    break;
                                case rt:
                                    !(function (t, e, n, r) {
                                        var i = (0, l.default)(
                                            e,
                                            function (t, e, r) {
                                                return ""
                                                    .concat(t, " ")
                                                    .concat(r, "(")
                                                    .concat(e)
                                                    .concat(Ot(r, n), ")");
                                            },
                                            ""
                                        ),
                                            o = r.setStyle;
                                        Rt(t, C, r), o(t, C, i);
                                    })(t, n, c, o);
                                    break;
                                case ot:
                                case at:
                                case ut:
                                    var E = lt[u],
                                        _ = Math.round(n.rValue),
                                        m = Math.round(n.gValue),
                                        y = Math.round(n.bValue),
                                        I = n.aValue;
                                    Rt(t, E, o),
                                        a(
                                            t,
                                            E,
                                            I >= 1
                                                ? "rgb(".concat(_, ",").concat(m, ",").concat(y, ")")
                                                : "rgba("
                                                    .concat(_, ",")
                                                    .concat(m, ",")
                                                    .concat(y, ",")
                                                    .concat(I, ")")
                                        );
                                    break;
                                default:
                                    var b = c.unit,
                                        T = void 0 === b ? "" : b;
                                    Rt(t, i, o), a(t, i, n.value + T);
                            }
                        })(t, 0, n, i, o, a);
                    case K:
                        return (function (t, e, n) {
                            var r = n.setStyle;
                            switch (e.actionTypeId) {
                                case ct:
                                    var i = e.config.value;
                                    return void (i === R && _.IS_BROWSER_ENV
                                        ? r(t, U, _.FLEX_PREFIXED)
                                        : r(t, U, i));
                            }
                        })(t, i, a);
                    case q:
                        var s = i.actionTypeId;
                        if ((0, E.isPluginType)(s)) return (0, E.renderPlugin)(s)(c, e, i);
                }
            }),
            (e.clearAllStyles = function (t) {
                var e = t.store,
                    n = t.elementApi,
                    r = e.getState().ixData,
                    i = r.events,
                    o = void 0 === i ? {} : i,
                    a = r.actionLists,
                    u = void 0 === a ? {} : a;
                Object.keys(o).forEach(function (t) {
                    var e = o[t],
                        r = e.action.config,
                        i = r.actionListId,
                        a = u[i];
                    a && Ct({ actionList: a, event: e, elementApi: n });
                }),
                    Object.keys(u).forEach(function (t) {
                        Ct({ actionList: u[t], elementApi: n });
                    });
            }),
            (e.cleanupHTMLElement = function (t, e, n) {
                var r = n.setStyle,
                    i = n.getStyle,
                    o = e.actionTypeId;
                if (o === it) {
                    var a = e.config;
                    a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, D, "");
                }
                i(t, V) && Dt({ effect: Nt, actionTypeId: o, elementApi: n })(t);
            }),
            (e.getMaxDurationItemIndex = Mt),
            (e.getActionListProgress = function (t, e) {
                var n = t.actionItemGroups,
                    r = t.useFirstGroupAsInitialState,
                    i = e.actionItem,
                    o = e.verboseTimeElapsed,
                    a = void 0 === o ? 0 : o,
                    u = 0,
                    c = 0;
                return (
                    n.forEach(function (t, e) {
                        if (!r || 0 !== e) {
                            var n = t.actionItems,
                                o = n[Mt(n)],
                                s = o.config,
                                f = o.actionTypeId;
                            i.id === o.id && (c = u + a);
                            var l = bt(f) === K ? 0 : s.duration;
                            u += s.delay + l;
                        }
                    }),
                    u > 0 ? (0, g.optimizeFloat)(c / u) : 0
                );
            }),
            (e.reduceListToGroup = function (t) {
                var e = t.actionList,
                    n = t.actionItemId,
                    r = t.rawData,
                    i = e.actionItemGroups,
                    o = e.continuousParameterGroups,
                    a = [],
                    u = function (t) {
                        return (
                            a.push((0, p.mergeIn)(t, ["config"], { delay: 0, duration: 0 })),
                            t.id === n
                        );
                    };
                return (
                    i &&
                    i.some(function (t) {
                        return t.actionItems.some(u);
                    }),
                    o &&
                    o.some(function (t) {
                        return t.continuousActionGroups.some(function (t) {
                            return t.actionItems.some(u);
                        });
                    }),
                    (0, p.setIn)(
                        r,
                        ["actionLists"],
                        (0, c.default)({}, e.id, {
                            id: e.id,
                            actionItemGroups: [{ actionItems: a }],
                        })
                    )
                );
            }),
            (e.shouldNamespaceEventParameter = function (t, e) {
                var n = e.basedOn;
                return (
                    (t === h.EventTypeConsts.SCROLLING_IN_VIEW &&
                        (n === h.EventBasedOn.ELEMENT || null == n)) ||
                    (t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT)
                );
            }),
            (e.getNamespacedParameterId = function (t, e) {
                return t + H + e;
            }),
            (e.shouldAllowMediaQuery = function (t, e) {
                if (null == e) return !0;
                return -1 !== t.indexOf(e);
            }),
            (e.mediaQueriesEqual = function (t, e) {
                return (0, v.default)(t && t.sort(), e && e.sort());
            }),
            (e.stringifyTarget = function (t) {
                if ("string" == typeof t) return t;
                var e = t.id,
                    n = void 0 === e ? "" : e,
                    r = t.selector,
                    i = void 0 === r ? "" : r,
                    o = t.useEventTarget;
                return n + z + i + z + (void 0 === o ? "" : o);
            }),
            (e.getItemConfigByKey = void 0);
        var f = s(n(250)),
            l = s(n(251)),
            d = s(n(257)),
            p = n(18),
            v = s(n(113)),
            h = n(2),
            g = n(108),
            E = n(110),
            _ = n(44),
            m = h.IX2EngineConstants,
            y = m.BACKGROUND,
            I = m.TRANSFORM,
            b = m.TRANSLATE_3D,
            T = m.SCALE_3D,
            w = m.ROTATE_X,
            O = m.ROTATE_Y,
            A = m.ROTATE_Z,
            x = m.SKEW,
            S = m.PRESERVE_3D,
            R = m.FLEX,
            N = m.OPACITY,
            C = m.FILTER,
            L = m.WIDTH,
            D = m.HEIGHT,
            P = m.BACKGROUND_COLOR,
            M = m.BORDER_COLOR,
            j = m.COLOR,
            F = m.CHILDREN,
            k = m.IMMEDIATE_CHILDREN,
            X = m.SIBLINGS,
            G = m.PARENT,
            U = m.DISPLAY,
            V = m.WILL_CHANGE,
            W = m.AUTO,
            B = m.COMMA_DELIMITER,
            H = m.COLON_DELIMITER,
            z = m.BAR_DELIMITER,
            Y = m.RENDER_TRANSFORM,
            K = m.RENDER_GENERAL,
            Q = m.RENDER_STYLE,
            q = m.RENDER_PLUGIN,
            $ = h.ActionTypeConsts,
            Z = $.TRANSFORM_MOVE,
            J = $.TRANSFORM_SCALE,
            tt = $.TRANSFORM_ROTATE,
            et = $.TRANSFORM_SKEW,
            nt = $.STYLE_OPACITY,
            rt = $.STYLE_FILTER,
            it = $.STYLE_SIZE,
            ot = $.STYLE_BACKGROUND_COLOR,
            at = $.STYLE_BORDER,
            ut = $.STYLE_TEXT_COLOR,
            ct = $.GENERAL_DISPLAY,
            st = "OBJECT_VALUE",
            ft = function (t) {
                return t.trim();
            },
            lt = Object.freeze(
                ((r = {}),
                    (0, c.default)(r, ot, P),
                    (0, c.default)(r, at, M),
                    (0, c.default)(r, ut, j),
                    r)
            ),
            dt = Object.freeze(
                ((i = {}),
                    (0, c.default)(i, _.TRANSFORM_PREFIXED, I),
                    (0, c.default)(i, P, y),
                    (0, c.default)(i, N, N),
                    (0, c.default)(i, C, C),
                    (0, c.default)(i, L, L),
                    (0, c.default)(i, D, D),
                    i)
            ),
            pt = {},
            vt = 1;
        var ht = 1;
        var gt = function (t, e) {
            return t === e;
        };
        function Et(t) {
            var e = (0, u.default)(t);
            return "string" === e
                ? { id: t }
                : null != t && "object" === e
                    ? {
                        id: t.id,
                        objectId: t.objectId,
                        selector: t.selector,
                        selectorGuids: t.selectorGuids,
                        appliesTo: t.appliesTo,
                        useEventTarget: t.useEventTarget,
                    }
                    : {};
        }
        function _t(t) {
            var e,
                n,
                r,
                i = t.config,
                o = t.event,
                a = t.eventTarget,
                u = t.elementRoot,
                c = t.elementApi;
            if (!c) throw new Error("IX2 missing elementApi");
            var s = i.targets;
            if (Array.isArray(s) && s.length > 0)
                return s.reduce(function (t, e) {
                    return t.concat(
                        _t({
                            config: { target: e },
                            event: o,
                            eventTarget: a,
                            elementRoot: u,
                            elementApi: c,
                        })
                    );
                }, []);
            var f = c.getValidDocument,
                l = c.getQuerySelector,
                d = c.queryDocument,
                p = c.getChildElements,
                v = c.getSiblingElements,
                g = c.matchSelector,
                E = c.elementContains,
                m = c.isSiblingNode,
                y = i.target;
            if (!y) return [];
            var I = Et(y),
                b = I.id,
                T = I.objectId,
                w = I.selector,
                O = I.selectorGuids,
                A = I.appliesTo,
                x = I.useEventTarget;
            if (T) return [pt[T] || (pt[T] = {})];
            if (A === h.EventAppliesTo.PAGE) {
                var S = f(b);
                return S ? [S] : [];
            }
            var R,
                N,
                C,
                L =
                    (null !==
                        (e =
                            null == o
                                ? void 0
                                : null === (n = o.action) || void 0 === n
                                    ? void 0
                                    : null === (r = n.config) || void 0 === r
                                        ? void 0
                                        : r.affectedElements) && void 0 !== e
                        ? e
                        : {})[b || w] || {},
                D = Boolean(L.id || L.selector),
                P = o && l(Et(o.target));
            if (
                (D
                    ? ((R = L.limitAffectedElements), (N = P), (C = l(L)))
                    : (N = C = l({ id: b, selector: w, selectorGuids: O })),
                    o && x)
            ) {
                var M = a && (C || !0 === x) ? [a] : d(P);
                if (C) {
                    if (x === G)
                        return d(C).filter(function (t) {
                            return M.some(function (e) {
                                return E(t, e);
                            });
                        });
                    if (x === F)
                        return d(C).filter(function (t) {
                            return M.some(function (e) {
                                return E(e, t);
                            });
                        });
                    if (x === X)
                        return d(C).filter(function (t) {
                            return M.some(function (e) {
                                return m(e, t);
                            });
                        });
                }
                return M;
            }
            return null == N || null == C
                ? []
                : _.IS_BROWSER_ENV && u
                    ? d(C).filter(function (t) {
                        return u.contains(t);
                    })
                    : R === F
                        ? d(N, C)
                        : R === k
                            ? p(d(N)).filter(g(C))
                            : R === X
                                ? v(d(N)).filter(g(C))
                                : d(C);
        }
        var mt = /px/,
            yt = function (t, e) {
                return e.reduce(function (t, e) {
                    return null == t[e.type] && (t[e.type] = wt[e.type]), t;
                }, t || {});
            };
        var It = function (t, e) {
            return e && (t[e.type] = e.value || 0), t;
        };
        function bt(t) {
            return /^TRANSFORM_/.test(t)
                ? Y
                : /^STYLE_/.test(t)
                    ? Q
                    : /^GENERAL_/.test(t)
                        ? K
                        : /^PLUGIN_/.test(t)
                            ? q
                            : void 0;
        }
        e.getItemConfigByKey = function (t, e, n) {
            if ((0, E.isPluginType)(t)) return (0, E.getPluginConfig)(t)(n, e);
            switch (t) {
                case rt:
                    var r = (0, d.default)(n.filters, function (t) {
                        return t.type === e;
                    });
                    return r ? r.value : 0;
                default:
                    return n[e];
            }
        };
        var Tt =
            ((o = {}),
                (0, c.default)(
                    o,
                    Z,
                    Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
                ),
                (0, c.default)(
                    o,
                    J,
                    Object.freeze({ xValue: 1, yValue: 1, zValue: 1 })
                ),
                (0, c.default)(
                    o,
                    tt,
                    Object.freeze({ xValue: 0, yValue: 0, zValue: 0 })
                ),
                (0, c.default)(o, et, Object.freeze({ xValue: 0, yValue: 0 })),
                o),
            wt = Object.freeze({
                blur: 0,
                "hue-rotate": 0,
                invert: 0,
                grayscale: 0,
                saturate: 100,
                sepia: 0,
                contrast: 100,
                brightness: 100,
            }),
            Ot = function (t, e) {
                var n = (0, d.default)(e.filters, function (e) {
                    return e.type === t;
                });
                if (n && n.unit) return n.unit;
                switch (t) {
                    case "blur":
                        return "px";
                    case "hue-rotate":
                        return "deg";
                    default:
                        return "%";
                }
            },
            At = Object.keys(Tt);
        var xt = /^rgb/,
            St = RegExp("rgba?".concat("\\(([^)]+)\\)"));
        function Rt(t, e, n) {
            if (_.IS_BROWSER_ENV) {
                var r = dt[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, V);
                    if (a) {
                        var u = a.split(B).map(ft);
                        -1 === u.indexOf(r) && o(t, V, u.concat(r).join(B));
                    } else o(t, V, r);
                }
            }
        }
        function Nt(t, e, n) {
            if (_.IS_BROWSER_ENV) {
                var r = dt[e];
                if (r) {
                    var i = n.getStyle,
                        o = n.setStyle,
                        a = i(t, V);
                    a &&
                        -1 !== a.indexOf(r) &&
                        o(
                            t,
                            V,
                            a
                                .split(B)
                                .map(ft)
                                .filter(function (t) {
                                    return t !== r;
                                })
                                .join(B)
                        );
                }
            }
        }
        function Ct(t) {
            var e = t.actionList,
                n = void 0 === e ? {} : e,
                r = t.event,
                i = t.elementApi,
                o = n.actionItemGroups,
                a = n.continuousParameterGroups;
            o &&
                o.forEach(function (t) {
                    Lt({ actionGroup: t, event: r, elementApi: i });
                }),
                a &&
                a.forEach(function (t) {
                    t.continuousActionGroups.forEach(function (t) {
                        Lt({ actionGroup: t, event: r, elementApi: i });
                    });
                });
        }
        function Lt(t) {
            var e = t.actionGroup,
                n = t.event,
                r = t.elementApi;
            e.actionItems.forEach(function (t) {
                var e,
                    i = t.actionTypeId,
                    o = t.config;
                (e = (0, E.isPluginType)(i)
                    ? (0, E.clearPlugin)(i)
                    : Dt({ effect: Pt, actionTypeId: i, elementApi: r })),
                    _t({ config: o, event: n, elementApi: r }).forEach(e);
            });
        }
        var Dt = function (t) {
            var e = t.effect,
                n = t.actionTypeId,
                r = t.elementApi;
            return function (t) {
                switch (n) {
                    case Z:
                    case J:
                    case tt:
                    case et:
                        e(t, _.TRANSFORM_PREFIXED, r);
                        break;
                    case rt:
                        e(t, C, r);
                        break;
                    case nt:
                        e(t, N, r);
                        break;
                    case it:
                        e(t, L, r), e(t, D, r);
                        break;
                    case ot:
                    case at:
                    case ut:
                        e(t, lt[n], r);
                        break;
                    case ct:
                        e(t, U, r);
                }
            };
        };
        function Pt(t, e, n) {
            var r = n.setStyle;
            Nt(t, e, n),
                r(t, e, ""),
                e === _.TRANSFORM_PREFIXED && r(t, _.TRANSFORM_STYLE_PREFIXED, "");
        }
        function Mt(t) {
            var e = 0,
                n = 0;
            return (
                t.forEach(function (t, r) {
                    var i = t.config,
                        o = i.delay + i.duration;
                    o >= e && ((e = o), (n = r));
                }),
                n
            );
        }
    },
    function (t, e) {
        t.exports = function (t, e) {
            return null == t || t != t ? e : t;
        };
    },
    function (t, e, n) {
        var r = n(252),
            i = n(111),
            o = n(7),
            a = n(256),
            u = n(1);
        t.exports = function (t, e, n) {
            var c = u(t) ? r : a,
                s = arguments.length < 3;
            return c(t, o(e, 4), n, s, i);
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r) {
            var i = -1,
                o = null == t ? 0 : t.length;
            for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
            return n;
        };
    },
    function (t, e, n) {
        var r = n(254)();
        t.exports = r;
    },
    function (t, e) {
        t.exports = function (t) {
            return function (e, n, r) {
                for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                    var c = a[t ? u : ++i];
                    if (!1 === n(o[c], c, o)) break;
                }
                return e;
            };
        };
    },
    function (t, e, n) {
        var r = n(12);
        t.exports = function (t, e) {
            return function (n, i) {
                if (null == n) return n;
                if (!r(n)) return t(n, i);
                for (
                    var o = n.length, a = e ? o : -1, u = Object(n);
                    (e ? a-- : ++a < o) && !1 !== i(u[a], a, u);

                );
                return n;
            };
        };
    },
    function (t, e) {
        t.exports = function (t, e, n, r, i) {
            return (
                i(t, function (t, i, o) {
                    n = r ? ((r = !1), t) : e(n, t, i, o);
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(86)(n(258));
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(104),
            i = n(7),
            o = n(105),
            a = Math.max,
            u = Math.min;
        t.exports = function (t, e, n) {
            var c = null == t ? 0 : t.length;
            if (!c) return -1;
            var s = c - 1;
            return (
                void 0 !== n && ((s = o(n)), (s = n < 0 ? a(c + s, 0) : u(s, c - 1))),
                r(t, i(e, 3), s, !0)
            );
        };
    },
    function (t, e) {
        t.exports = function (t) {
            return t && t.__esModule ? t : { default: t };
        };
    },
    function (t, e, n) {
        "use strict";
        var r = Object.prototype.hasOwnProperty;
        function i(t, e) {
            return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e;
        }
        t.exports = function (t, e) {
            if (i(t, e)) return !0;
            if (
                "object" != typeof t ||
                null === t ||
                "object" != typeof e ||
                null === e
            )
                return !1;
            var n = Object.keys(t),
                o = Object.keys(e);
            if (n.length !== o.length) return !1;
            for (var a = 0; a < n.length; a++)
                if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixInstances = void 0);
        var r = n(2),
            i = n(10),
            o = n(18),
            a = r.IX2EngineActionTypes,
            u = a.IX2_RAW_DATA_IMPORTED,
            c = a.IX2_SESSION_STOPPED,
            s = a.IX2_INSTANCE_ADDED,
            f = a.IX2_INSTANCE_STARTED,
            l = a.IX2_INSTANCE_REMOVED,
            d = a.IX2_ANIMATION_FRAME_CHANGED,
            p = i.IX2EasingUtils,
            v = p.optimizeFloat,
            h = p.applyEasing,
            g = p.createBezierEasing,
            E = r.IX2EngineConstants.RENDER_GENERAL,
            _ = i.IX2VanillaUtils,
            m = _.getItemConfigByKey,
            y = _.getRenderType,
            I = _.getStyleProp,
            b = function (t, e) {
                var n = t.position,
                    r = t.parameterId,
                    i = t.actionGroups,
                    a = t.destinationKeys,
                    u = t.smoothing,
                    c = t.restingValue,
                    s = t.actionTypeId,
                    f = t.customEasingFn,
                    l = e.payload.parameters,
                    d = Math.max(1 - u, 0.01),
                    p = l[r];
                null == p && ((d = 1), (p = c));
                var g,
                    E,
                    _,
                    y,
                    I = Math.max(p, 0) || 0,
                    b = v(I - n),
                    T = v(n + b * d),
                    w = 100 * T;
                if (T === n && t.current) return t;
                for (var O = 0, A = i.length; O < A; O++) {
                    var x = i[O],
                        S = x.keyframe,
                        R = x.actionItems;
                    if ((0 === O && (g = R[0]), w >= S)) {
                        g = R[0];
                        var N = i[O + 1],
                            C = N && w !== S;
                        (E = C ? N.actionItems[0] : null),
                            C && ((_ = S / 100), (y = (N.keyframe - S) / 100));
                    }
                }
                var L = {};
                if (g && !E)
                    for (var D = 0, P = a.length; D < P; D++) {
                        var M = a[D];
                        L[M] = m(s, M, g.config);
                    }
                else if (g && E && void 0 !== _ && void 0 !== y)
                    for (
                        var j = (T - _) / y,
                        F = g.config.easing,
                        k = h(F, j, f),
                        X = 0,
                        G = a.length;
                        X < G;
                        X++
                    ) {
                        var U = a[X],
                            V = m(s, U, g.config),
                            W = (m(s, U, E.config) - V) * k + V;
                        L[U] = W;
                    }
                return (0, o.merge)(t, { position: T, current: L });
            },
            T = function (t, e) {
                var n = t,
                    r = n.active,
                    i = n.origin,
                    a = n.start,
                    u = n.immediate,
                    c = n.renderType,
                    s = n.verbose,
                    f = n.actionItem,
                    l = n.destination,
                    d = n.destinationKeys,
                    p = n.pluginDuration,
                    g = n.instanceDelay,
                    _ = n.customEasingFn,
                    m = f.config.easing,
                    y = f.config,
                    I = y.duration,
                    b = y.delay;
                null != p && (I = p),
                    (b = null != g ? g : b),
                    c === E ? (I = 0) : u && (I = b = 0);
                var T = e.payload.now;
                if (r && i) {
                    var w = T - (a + b);
                    if (s) {
                        var O = T - a,
                            A = I + b,
                            x = v(Math.min(Math.max(0, O / A), 1));
                        t = (0, o.set)(t, "verboseTimeElapsed", A * x);
                    }
                    if (w < 0) return t;
                    var S = v(Math.min(Math.max(0, w / I), 1)),
                        R = h(m, S, _),
                        N = {},
                        C = null;
                    return (
                        d.length &&
                        (C = d.reduce(function (t, e) {
                            var n = l[e],
                                r = parseFloat(i[e]) || 0,
                                o = (parseFloat(n) - r) * R + r;
                            return (t[e] = o), t;
                        }, {})),
                        (N.current = C),
                        (N.position = S),
                        1 === S && ((N.active = !1), (N.complete = !0)),
                        (0, o.merge)(t, N)
                    );
                }
                return t;
            };
        e.ixInstances = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : Object.freeze({}),
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case u:
                    return e.payload.ixInstances || Object.freeze({});
                case c:
                    return Object.freeze({});
                case s:
                    var n = e.payload,
                        r = n.instanceId,
                        i = n.elementId,
                        a = n.actionItem,
                        p = n.eventId,
                        v = n.eventTarget,
                        h = n.eventStateKey,
                        E = n.actionListId,
                        _ = n.groupIndex,
                        m = n.isCarrier,
                        w = n.origin,
                        O = n.destination,
                        A = n.immediate,
                        x = n.verbose,
                        S = n.continuous,
                        R = n.parameterId,
                        N = n.actionGroups,
                        C = n.smoothing,
                        L = n.restingValue,
                        D = n.pluginInstance,
                        P = n.pluginDuration,
                        M = n.instanceDelay,
                        j = a.actionTypeId,
                        F = y(j),
                        k = I(F, j),
                        X = Object.keys(O).filter(function (t) {
                            return null != O[t];
                        }),
                        G = a.config.easing;
                    return (0, o.set)(t, r, {
                        id: r,
                        elementId: i,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: w,
                        destination: O,
                        destinationKeys: X,
                        immediate: A,
                        verbose: x,
                        current: null,
                        actionItem: a,
                        actionTypeId: j,
                        eventId: p,
                        eventTarget: v,
                        eventStateKey: h,
                        actionListId: E,
                        groupIndex: _,
                        renderType: F,
                        isCarrier: m,
                        styleProp: k,
                        continuous: S,
                        parameterId: R,
                        actionGroups: N,
                        smoothing: C,
                        restingValue: L,
                        pluginInstance: D,
                        pluginDuration: P,
                        instanceDelay: M,
                        customEasingFn: Array.isArray(G) && 4 === G.length ? g(G) : void 0,
                    });
                case f:
                    var U = e.payload,
                        V = U.instanceId,
                        W = U.time;
                    return (0, o.mergeIn)(t, [V], { active: !0, complete: !1, start: W });
                case l:
                    var B = e.payload.instanceId;
                    if (!t[B]) return t;
                    for (
                        var H = {}, z = Object.keys(t), Y = z.length, K = 0;
                        K < Y;
                        K++
                    ) {
                        var Q = z[K];
                        Q !== B && (H[Q] = t[Q]);
                    }
                    return H;
                case d:
                    for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                        var tt = $[J],
                            et = t[tt],
                            nt = et.continuous ? b : T;
                        q = (0, o.set)(q, tt, nt(et, e));
                    }
                    return q;
                default:
                    return t;
            }
        };
    },
    function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.ixParameters = void 0);
        var r = n(2).IX2EngineActionTypes,
            i = r.IX2_RAW_DATA_IMPORTED,
            o = r.IX2_SESSION_STOPPED,
            a = r.IX2_PARAMETER_CHANGED;
        e.ixParameters = function () {
            var t =
                arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                e = arguments.length > 1 ? arguments[1] : void 0;
            switch (e.type) {
                case i:
                    return e.payload.ixParameters || {};
                case o:
                    return {};
                case a:
                    var n = e.payload,
                        r = n.key,
                        u = n.value;
                    return (t[r] = u), t;
                default:
                    return t;
            }
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            if (null == t) return {};
            var n,
                r,
                i = {},
                o = Object.keys(t);
            for (r = 0; r < o.length; r++)
                (n = o[r]), e.indexOf(n) >= 0 || (i[n] = t[n]);
            return i;
        };
    },
    function (t, e, n) {
        var r = n(53),
            i = n(55),
            o = n(12),
            a = n(265),
            u = n(266),
            c = "[object Map]",
            s = "[object Set]";
        t.exports = function (t) {
            if (null == t) return 0;
            if (o(t)) return a(t) ? u(t) : t.length;
            var e = i(t);
            return e == c || e == s ? t.size : r(t).length;
        };
    },
    function (t, e, n) {
        var r = n(11),
            i = n(1),
            o = n(9),
            a = "[object String]";
        t.exports = function (t) {
            return "string" == typeof t || (!i(t) && o(t) && r(t) == a);
        };
    },
    function (t, e, n) {
        var r = n(267),
            i = n(268),
            o = n(269);
        t.exports = function (t) {
            return i(t) ? o(t) : r(t);
        };
    },
    function (t, e, n) {
        var r = n(103)("length");
        t.exports = r;
    },
    function (t, e) {
        var n = RegExp(
            "[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"
        );
        t.exports = function (t) {
            return n.test(t);
        };
    },
    function (t, e) {
        var n = "[\\ud800-\\udfff]",
            r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
            i = "\\ud83c[\\udffb-\\udfff]",
            o = "[^\\ud800-\\udfff]",
            a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
            u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
            c = "(?:" + r + "|" + i + ")" + "?",
            s =
                "[\\ufe0e\\ufe0f]?" +
                c +
                ("(?:\\u200d(?:" +
                    [o, a, u].join("|") +
                    ")[\\ufe0e\\ufe0f]?" +
                    c +
                    ")*"),
            f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
            l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
        t.exports = function (t) {
            for (var e = (l.lastIndex = 0); l.test(t);) ++e;
            return e;
        };
    },
    function (t, e, n) {
        var r = n(7),
            i = n(271),
            o = n(272);
        t.exports = function (t, e) {
            return o(t, i(r(e)));
        };
    },
    function (t, e) {
        var n = "Expected a function";
        t.exports = function (t) {
            if ("function" != typeof t) throw new TypeError(n);
            return function () {
                var e = arguments;
                switch (e.length) {
                    case 0:
                        return !t.call(this);
                    case 1:
                        return !t.call(this, e[0]);
                    case 2:
                        return !t.call(this, e[0], e[1]);
                    case 3:
                        return !t.call(this, e[0], e[1], e[2]);
                }
                return !t.apply(this, e);
            };
        };
    },
    function (t, e, n) {
        var r = n(102),
            i = n(7),
            o = n(273),
            a = n(276);
        t.exports = function (t, e) {
            if (null == t) return {};
            var n = r(a(t), function (t) {
                return [t];
            });
            return (
                (e = i(e)),
                o(t, n, function (t, n) {
                    return e(t, n[0]);
                })
            );
        };
    },
    function (t, e, n) {
        var r = n(57),
            i = n(274),
            o = n(34);
        t.exports = function (t, e, n) {
            for (var a = -1, u = e.length, c = {}; ++a < u;) {
                var s = e[a],
                    f = r(t, s);
                n(f, s) && i(c, o(s, t), f);
            }
            return c;
        };
    },
    function (t, e, n) {
        var r = n(275),
            i = n(34),
            o = n(50),
            a = n(6),
            u = n(20);
        t.exports = function (t, e, n, c) {
            if (!a(t)) return t;
            for (
                var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t;
                null != d && ++s < f;

            ) {
                var p = u(e[s]),
                    v = n;
                if ("__proto__" === p || "constructor" === p || "prototype" === p)
                    return t;
                if (s != l) {
                    var h = d[p];
                    void 0 === (v = c ? c(h, p, d) : void 0) &&
                        (v = a(h) ? h : o(e[s + 1]) ? [] : {});
                }
                r(d, p, v), (d = d[p]);
            }
            return t;
        };
    },
    function (t, e, n) {
        var r = n(115),
            i = n(45),
            o = Object.prototype.hasOwnProperty;
        t.exports = function (t, e, n) {
            var a = t[e];
            (o.call(t, e) && i(a, n) && (void 0 !== n || e in t)) || r(t, e, n);
        };
    },
    function (t, e, n) {
        var r = n(93),
            i = n(277),
            o = n(279);
        t.exports = function (t) {
            return r(t, o, i);
        };
    },
    function (t, e, n) {
        var r = n(48),
            i = n(278),
            o = n(94),
            a = n(95),
            u = Object.getOwnPropertySymbols
                ? function (t) {
                    for (var e = []; t;) r(e, o(t)), (t = i(t));
                    return e;
                }
                : a;
        t.exports = u;
    },
    function (t, e, n) {
        var r = n(98)(Object.getPrototypeOf, Object);
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(96),
            i = n(280),
            o = n(12);
        t.exports = function (t) {
            return o(t) ? r(t, !0) : i(t);
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(54),
            o = n(281),
            a = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (!r(t)) return o(t);
            var e = i(t),
                n = [];
            for (var u in t)
                ("constructor" != u || (!e && a.call(t, u))) && n.push(u);
            return n;
        };
    },
    function (t, e) {
        t.exports = function (t) {
            var e = [];
            if (null != t) for (var n in Object(t)) e.push(n);
            return e;
        };
    },
    function (t, e, n) {
        var r = n(53),
            i = n(55),
            o = n(33),
            a = n(1),
            u = n(12),
            c = n(49),
            s = n(54),
            f = n(51),
            l = "[object Map]",
            d = "[object Set]",
            p = Object.prototype.hasOwnProperty;
        t.exports = function (t) {
            if (null == t) return !0;
            if (
                u(t) &&
                (a(t) ||
                    "string" == typeof t ||
                    "function" == typeof t.splice ||
                    c(t) ||
                    f(t) ||
                    o(t))
            )
                return !t.length;
            var e = i(t);
            if (e == l || e == d) return !t.size;
            if (s(t)) return !r(t).length;
            for (var n in t) if (p.call(t, n)) return !1;
            return !0;
        };
    },
    function (t, e, n) {
        var r = n(115),
            i = n(112),
            o = n(7);
        t.exports = function (t, e) {
            var n = {};
            return (
                (e = o(e, 3)),
                i(t, function (t, i, o) {
                    r(n, i, e(t, i, o));
                }),
                n
            );
        };
    },
    function (t, e, n) {
        var r = n(285),
            i = n(111),
            o = n(286),
            a = n(1);
        t.exports = function (t, e) {
            return (a(t) ? r : i)(t, o(e));
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            for (
                var n = -1, r = null == t ? 0 : t.length;
                ++n < r && !1 !== e(t[n], n, t);

            );
            return t;
        };
    },
    function (t, e, n) {
        var r = n(59);
        t.exports = function (t) {
            return "function" == typeof t ? t : r;
        };
    },
    function (t, e, n) {
        var r = n(288),
            i = n(6),
            o = "Expected a function";
        t.exports = function (t, e, n) {
            var a = !0,
                u = !0;
            if ("function" != typeof t) throw new TypeError(o);
            return (
                i(n) &&
                ((a = "leading" in n ? !!n.leading : a),
                    (u = "trailing" in n ? !!n.trailing : u)),
                r(t, e, { leading: a, maxWait: e, trailing: u })
            );
        };
    },
    function (t, e, n) {
        var r = n(6),
            i = n(289),
            o = n(60),
            a = "Expected a function",
            u = Math.max,
            c = Math.min;
        t.exports = function (t, e, n) {
            var s,
                f,
                l,
                d,
                p,
                v,
                h = 0,
                g = !1,
                E = !1,
                _ = !0;
            if ("function" != typeof t) throw new TypeError(a);
            function m(e) {
                var n = s,
                    r = f;
                return (s = f = void 0), (h = e), (d = t.apply(r, n));
            }
            function y(t) {
                var n = t - v;
                return void 0 === v || n >= e || n < 0 || (E && t - h >= l);
            }
            function I() {
                var t = i();
                if (y(t)) return b(t);
                p = setTimeout(
                    I,
                    (function (t) {
                        var n = e - (t - v);
                        return E ? c(n, l - (t - h)) : n;
                    })(t)
                );
            }
            function b(t) {
                return (p = void 0), _ && s ? m(t) : ((s = f = void 0), d);
            }
            function T() {
                var t = i(),
                    n = y(t);
                if (((s = arguments), (f = this), (v = t), n)) {
                    if (void 0 === p)
                        return (function (t) {
                            return (h = t), (p = setTimeout(I, e)), g ? m(t) : d;
                        })(v);
                    if (E) return clearTimeout(p), (p = setTimeout(I, e)), m(v);
                }
                return void 0 === p && (p = setTimeout(I, e)), d;
            }
            return (
                (e = o(e) || 0),
                r(n) &&
                ((g = !!n.leading),
                    (l = (E = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l),
                    (_ = "trailing" in n ? !!n.trailing : _)),
                (T.cancel = function () {
                    void 0 !== p && clearTimeout(p), (h = 0), (s = v = f = p = void 0);
                }),
                (T.flush = function () {
                    return void 0 === p ? d : b(i());
                }),
                T
            );
        };
    },
    function (t, e, n) {
        var r = n(5);
        t.exports = function () {
            return r.Date.now();
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(21));
        Object.defineProperty(e, "__esModule", { value: !0 }),
            (e.setStyle = function (t, e, n) {
                t.style[e] = n;
            }),
            (e.getStyle = function (t, e) {
                return t.style[e];
            }),
            (e.getProperty = function (t, e) {
                return t[e];
            }),
            (e.matchSelector = function (t) {
                return function (e) {
                    return e[a](t);
                };
            }),
            (e.getQuerySelector = function (t) {
                var e = t.id,
                    n = t.selector;
                if (e) {
                    var r = e;
                    if (-1 !== e.indexOf(c)) {
                        var i = e.split(c),
                            o = i[0];
                        if (((r = i[1]), o !== document.documentElement.getAttribute(l)))
                            return null;
                    }
                    return '[data-w-id="'
                        .concat(r, '"], [data-w-id^="')
                        .concat(r, '_instance"]');
                }
                return n;
            }),
            (e.getValidDocument = function (t) {
                if (null == t || t === document.documentElement.getAttribute(l))
                    return document;
                return null;
            }),
            (e.queryDocument = function (t, e) {
                return Array.prototype.slice.call(
                    document.querySelectorAll(e ? t + " " + e : t)
                );
            }),
            (e.elementContains = function (t, e) {
                return t.contains(e);
            }),
            (e.isSiblingNode = function (t, e) {
                return t !== e && t.parentNode === e.parentNode;
            }),
            (e.getChildElements = function (t) {
                for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
                    var i = t[n].children,
                        o = i.length;
                    if (o) for (var a = 0; a < o; a++) e.push(i[a]);
                }
                return e;
            }),
            (e.getSiblingElements = function () {
                for (
                    var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : [],
                    e = [],
                    n = [],
                    r = 0,
                    i = t.length;
                    r < i;
                    r++
                ) {
                    var o = t[r].parentNode;
                    if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                        n.push(o);
                        for (var a = o.firstElementChild; null != a;)
                            -1 === t.indexOf(a) && e.push(a), (a = a.nextElementSibling);
                    }
                }
                return e;
            }),
            (e.getRefType = function (t) {
                if (null != t && "object" == (0, r.default)(t))
                    return t instanceof Element ? s : f;
                return null;
            }),
            (e.getClosestElement = void 0);
        var i = n(10),
            o = n(2),
            a = i.IX2BrowserSupport.ELEMENT_MATCHES,
            u = o.IX2EngineConstants,
            c = u.IX2_ID_DELIMITER,
            s = u.HTML_ELEMENT,
            f = u.PLAIN_OBJECT,
            l = u.WF_PAGE;
        var d = Element.prototype.closest
            ? function (t, e) {
                return document.documentElement.contains(t) ? t.closest(e) : null;
            }
            : function (t, e) {
                if (!document.documentElement.contains(t)) return null;
                var n = t;
                do {
                    if (n[a] && n[a](e)) return n;
                    n = n.parentNode;
                } while (null != n);
                return null;
            };
        e.getClosestElement = d;
    },
    function (t, e, n) {
        "use strict";
        var r,
            i = n(0),
            o = i(n(26)),
            a = i(n(21)),
            u = n(0);
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var c,
            s,
            f,
            l = u(n(27)),
            d = u(n(292)),
            p = u(n(56)),
            v = u(n(311)),
            h = n(2),
            g = n(114),
            E = n(61),
            _ = n(10),
            m = h.EventTypeConsts,
            y = m.MOUSE_CLICK,
            I = m.MOUSE_SECOND_CLICK,
            b = m.MOUSE_DOWN,
            T = m.MOUSE_UP,
            w = m.MOUSE_OVER,
            O = m.MOUSE_OUT,
            A = m.DROPDOWN_CLOSE,
            x = m.DROPDOWN_OPEN,
            S = m.SLIDER_ACTIVE,
            R = m.SLIDER_INACTIVE,
            N = m.TAB_ACTIVE,
            C = m.TAB_INACTIVE,
            L = m.NAVBAR_CLOSE,
            D = m.NAVBAR_OPEN,
            P = m.MOUSE_MOVE,
            M = m.PAGE_SCROLL_DOWN,
            j = m.SCROLL_INTO_VIEW,
            F = m.SCROLL_OUT_OF_VIEW,
            k = m.PAGE_SCROLL_UP,
            X = m.SCROLLING_IN_VIEW,
            G = m.PAGE_FINISH,
            U = m.ECOMMERCE_CART_CLOSE,
            V = m.ECOMMERCE_CART_OPEN,
            W = m.PAGE_START,
            B = m.PAGE_SCROLL,
            H = "COMPONENT_ACTIVE",
            z = "COMPONENT_INACTIVE",
            Y = h.IX2EngineConstants.COLON_DELIMITER,
            K = _.IX2VanillaUtils.getNamespacedParameterId,
            Q = function (t) {
                return function (e) {
                    return !("object" !== (0, a.default)(e) || !t(e)) || e;
                };
            },
            q = Q(function (t) {
                return t.element === t.nativeEvent.target;
            }),
            $ = Q(function (t) {
                var e = t.element,
                    n = t.nativeEvent;
                return e.contains(n.target);
            }),
            Z = (0, d.default)([q, $]),
            J = function (t, e) {
                if (e) {
                    var n = t.getState().ixData.events[e];
                    if (n && !at[n.eventTypeId]) return n;
                }
                return null;
            },
            tt = function (t, e) {
                var n = t.store,
                    r = t.event,
                    i = t.element,
                    o = t.eventStateKey,
                    a = r.action,
                    u = r.id,
                    c = a.config,
                    s = c.actionListId,
                    f = c.autoStopEventId,
                    l = J(n, f);
                return (
                    l &&
                    (0, g.stopActionGroup)({
                        store: n,
                        eventId: f,
                        eventTarget: i,
                        eventStateKey: f + Y + o.split(Y)[1],
                        actionListId: (0, p.default)(l, "action.config.actionListId"),
                    }),
                    (0, g.stopActionGroup)({
                        store: n,
                        eventId: u,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: s,
                    }),
                    (0, g.startActionGroup)({
                        store: n,
                        eventId: u,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: s,
                    }),
                    e
                );
            },
            et = function (t, e) {
                return function (n, r) {
                    return !0 === t(n, r) ? e(n, r) : r;
                };
            },
            nt = { handler: et(Z, tt) },
            rt = (0, l.default)({}, nt, { types: [H, z].join(" ") }),
            it = [
                { target: window, types: "resize orientationchange", throttle: !0 },
                {
                    target: document,
                    types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                    throttle: !0,
                },
            ],
            ot = { types: it },
            at = { PAGE_START: W, PAGE_FINISH: G },
            ut =
                ((c = void 0 !== window.pageXOffset),
                    (s =
                        "CSS1Compat" === document.compatMode
                            ? document.documentElement
                            : document.body),
                    function () {
                        return {
                            scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                            scrollTop: c ? window.pageYOffset : s.scrollTop,
                            stiffScrollTop: (0, v.default)(
                                c ? window.pageYOffset : s.scrollTop,
                                0,
                                s.scrollHeight - window.innerHeight
                            ),
                            scrollWidth: s.scrollWidth,
                            scrollHeight: s.scrollHeight,
                            clientWidth: s.clientWidth,
                            clientHeight: s.clientHeight,
                            innerWidth: window.innerWidth,
                            innerHeight: window.innerHeight,
                        };
                    }),
            ct = function (t) {
                var e = t.element,
                    n = t.nativeEvent,
                    r = n.type,
                    i = n.target,
                    o = n.relatedTarget,
                    a = e.contains(i);
                if ("mouseover" === r && a) return !0;
                var u = e.contains(o);
                return !("mouseout" !== r || !a || !u);
            },
            st = function (t) {
                var e,
                    n,
                    r = t.element,
                    i = t.event.config,
                    o = ut(),
                    a = o.clientWidth,
                    u = o.clientHeight,
                    c = i.scrollOffsetValue,
                    s = "PX" === i.scrollOffsetUnit ? c : (u * (c || 0)) / 100;
                return (
                    (e = r.getBoundingClientRect()),
                    (n = { left: 0, top: s, right: a, bottom: u - s }),
                    !(
                        e.left > n.right ||
                        e.right < n.left ||
                        e.top > n.bottom ||
                        e.bottom < n.top
                    )
                );
            },
            ft = function (t) {
                return function (e, n) {
                    var r = e.nativeEvent.type,
                        i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                        o = (0, l.default)({}, n, { isActive: i });
                    return n && o.isActive === n.isActive ? o : t(e, o) || o;
                };
            },
            lt = function (t) {
                return function (e, n) {
                    var r = { elementHovered: ct(e) };
                    return (
                        ((n ? r.elementHovered !== n.elementHovered : r.elementHovered) &&
                            t(e, r)) ||
                        r
                    );
                };
            },
            dt = function (t) {
                return function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                        r = ut(),
                        i = r.stiffScrollTop,
                        o = r.scrollHeight,
                        a = r.innerHeight,
                        u = e.event,
                        c = u.config,
                        s = u.eventTypeId,
                        f = c.scrollOffsetValue,
                        d = "PX" === c.scrollOffsetUnit,
                        p = o - a,
                        v = Number((i / p).toFixed(2));
                    if (n && n.percentTop === v) return n;
                    var h,
                        g,
                        E = (d ? f : (a * (f || 0)) / 100) / p,
                        _ = 0;
                    n &&
                        ((h = v > n.percentTop),
                            (_ = (g = n.scrollingDown !== h) ? v : n.anchorTop));
                    var m = s === M ? v >= _ + E : v <= _ - E,
                        y = (0, l.default)({}, n, {
                            percentTop: v,
                            inBounds: m,
                            anchorTop: _,
                            scrollingDown: h,
                        });
                    return (n && m && (g || y.inBounds !== n.inBounds) && t(e, y)) || y;
                };
            },
            pt = function (t) {
                return function (e) {
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : { clickCount: 0 },
                        r = { clickCount: (n.clickCount % 2) + 1 };
                    return (r.clickCount !== n.clickCount && t(e, r)) || r;
                };
            },
            vt = function () {
                var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, l.default)({}, rt, {
                    handler: et(
                        t ? Z : q,
                        ft(function (t, e) {
                            return e.isActive ? nt.handler(t, e) : e;
                        })
                    ),
                });
            },
            ht = function () {
                var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                return (0, l.default)({}, rt, {
                    handler: et(
                        t ? Z : q,
                        ft(function (t, e) {
                            return e.isActive ? e : nt.handler(t, e);
                        })
                    ),
                });
            },
            gt = (0, l.default)({}, ot, {
                handler:
                    ((f = function (t, e) {
                        var n = e.elementVisible,
                            r = t.event;
                        return !t.store.getState().ixData.events[
                            r.action.config.autoStopEventId
                        ] && e.triggered
                            ? e
                            : (r.eventTypeId === j) === n
                                ? (tt(t), (0, l.default)({}, e, { triggered: !0 }))
                                : e;
                    }),
                        function (t, e) {
                            var n = (0, l.default)({}, e, { elementVisible: st(t) });
                            return (
                                ((e ? n.elementVisible !== e.elementVisible : n.elementVisible) &&
                                    f(t, n)) ||
                                n
                            );
                        }),
            }),
            Et =
                ((r = {}),
                    (0, o.default)(r, S, vt()),
                    (0, o.default)(r, R, ht()),
                    (0, o.default)(r, x, vt()),
                    (0, o.default)(r, A, ht()),
                    (0, o.default)(r, D, vt(!1)),
                    (0, o.default)(r, L, ht(!1)),
                    (0, o.default)(r, N, vt()),
                    (0, o.default)(r, C, ht()),
                    (0, o.default)(r, V, {
                        types: "ecommerce-cart-open",
                        handler: et(Z, tt),
                    }),
                    (0, o.default)(r, U, {
                        types: "ecommerce-cart-close",
                        handler: et(Z, tt),
                    }),
                    (0, o.default)(r, y, {
                        types: "click",
                        handler: et(
                            Z,
                            pt(function (t, e) {
                                var n,
                                    r,
                                    i,
                                    o = e.clickCount;
                                (r = (n = t).store),
                                    (i = n.event.action.config.autoStopEventId),
                                    Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, I, {
                        types: "click",
                        handler: et(
                            Z,
                            pt(function (t, e) {
                                2 === e.clickCount && tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, b, (0, l.default)({}, nt, { types: "mousedown" })),
                    (0, o.default)(r, T, (0, l.default)({}, nt, { types: "mouseup" })),
                    (0, o.default)(r, w, {
                        types: "mouseover mouseout",
                        handler: et(
                            Z,
                            lt(function (t, e) {
                                e.elementHovered && tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, O, {
                        types: "mouseover mouseout",
                        handler: et(
                            Z,
                            lt(function (t, e) {
                                e.elementHovered || tt(t);
                            })
                        ),
                    }),
                    (0, o.default)(r, P, {
                        types: "mousemove mouseout scroll",
                        handler: function (t) {
                            var e = t.store,
                                n = t.element,
                                r = t.eventConfig,
                                i = t.nativeEvent,
                                o = t.eventStateKey,
                                a =
                                    arguments.length > 1 && void 0 !== arguments[1]
                                        ? arguments[1]
                                        : { clientX: 0, clientY: 0, pageX: 0, pageY: 0 },
                                u = r.basedOn,
                                c = r.selectedAxis,
                                s = r.continuousParameterGroupId,
                                f = r.reverse,
                                l = r.restingState,
                                d = void 0 === l ? 0 : l,
                                p = i.clientX,
                                v = void 0 === p ? a.clientX : p,
                                g = i.clientY,
                                _ = void 0 === g ? a.clientY : g,
                                m = i.pageX,
                                y = void 0 === m ? a.pageX : m,
                                I = i.pageY,
                                b = void 0 === I ? a.pageY : I,
                                T = "X_AXIS" === c,
                                w = "mouseout" === i.type,
                                O = d / 100,
                                A = s,
                                x = !1;
                            switch (u) {
                                case h.EventBasedOn.VIEWPORT:
                                    O = T
                                        ? Math.min(v, window.innerWidth) / window.innerWidth
                                        : Math.min(_, window.innerHeight) / window.innerHeight;
                                    break;
                                case h.EventBasedOn.PAGE:
                                    var S = ut(),
                                        R = S.scrollLeft,
                                        N = S.scrollTop,
                                        C = S.scrollWidth,
                                        L = S.scrollHeight;
                                    O = T ? Math.min(R + y, C) / C : Math.min(N + b, L) / L;
                                    break;
                                case h.EventBasedOn.ELEMENT:
                                default:
                                    A = K(o, s);
                                    var D = 0 === i.type.indexOf("mouse");
                                    if (D && !0 !== Z({ element: n, nativeEvent: i })) break;
                                    var P = n.getBoundingClientRect(),
                                        M = P.left,
                                        j = P.top,
                                        F = P.width,
                                        k = P.height;
                                    if (
                                        !D &&
                                        !(function (t, e) {
                                            return (
                                                t.left > e.left &&
                                                t.left < e.right &&
                                                t.top > e.top &&
                                                t.top < e.bottom
                                            );
                                        })({ left: v, top: _ }, P)
                                    )
                                        break;
                                    (x = !0), (O = T ? (v - M) / F : (_ - j) / k);
                            }
                            return (
                                w && (O > 0.95 || O < 0.05) && (O = Math.round(O)),
                                (u !== h.EventBasedOn.ELEMENT || x || x !== a.elementHovered) &&
                                ((O = f ? 1 - O : O),
                                    e.dispatch((0, E.parameterChanged)(A, O))),
                                { elementHovered: x, clientX: v, clientY: _, pageX: y, pageY: b }
                            );
                        },
                    }),
                    (0, o.default)(r, B, {
                        types: it,
                        handler: function (t) {
                            var e = t.store,
                                n = t.eventConfig,
                                r = n.continuousParameterGroupId,
                                i = n.reverse,
                                o = ut(),
                                a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                            (a = i ? 1 - a : a), e.dispatch((0, E.parameterChanged)(r, a));
                        },
                    }),
                    (0, o.default)(r, X, {
                        types: it,
                        handler: function (t) {
                            var e = t.element,
                                n = t.store,
                                r = t.eventConfig,
                                i = t.eventStateKey,
                                o =
                                    arguments.length > 1 && void 0 !== arguments[1]
                                        ? arguments[1]
                                        : { scrollPercent: 0 },
                                a = ut(),
                                u = a.scrollLeft,
                                c = a.scrollTop,
                                s = a.scrollWidth,
                                f = a.scrollHeight,
                                l = a.clientHeight,
                                d = r.basedOn,
                                p = r.selectedAxis,
                                v = r.continuousParameterGroupId,
                                g = r.startsEntering,
                                _ = r.startsExiting,
                                m = r.addEndOffset,
                                y = r.addStartOffset,
                                I = r.addOffsetValue,
                                b = void 0 === I ? 0 : I,
                                T = r.endOffsetValue,
                                w = void 0 === T ? 0 : T,
                                O = "X_AXIS" === p;
                            if (d === h.EventBasedOn.VIEWPORT) {
                                var A = O ? u / s : c / f;
                                return (
                                    A !== o.scrollPercent &&
                                    n.dispatch((0, E.parameterChanged)(v, A)),
                                    { scrollPercent: A }
                                );
                            }
                            var x = K(i, v),
                                S = e.getBoundingClientRect(),
                                R = (y ? b : 0) / 100,
                                N = (m ? w : 0) / 100;
                            (R = g ? R : 1 - R), (N = _ ? N : 1 - N);
                            var C = S.top + Math.min(S.height * R, l),
                                L = S.top + S.height * N - C,
                                D = Math.min(l + L, f),
                                P = Math.min(Math.max(0, l - C), D) / D;
                            return (
                                P !== o.scrollPercent &&
                                n.dispatch((0, E.parameterChanged)(x, P)),
                                { scrollPercent: P }
                            );
                        },
                    }),
                    (0, o.default)(r, j, gt),
                    (0, o.default)(r, F, gt),
                    (0, o.default)(
                        r,
                        M,
                        (0, l.default)({}, ot, {
                            handler: dt(function (t, e) {
                                e.scrollingDown && tt(t);
                            }),
                        })
                    ),
                    (0, o.default)(
                        r,
                        k,
                        (0, l.default)({}, ot, {
                            handler: dt(function (t, e) {
                                e.scrollingDown || tt(t);
                            }),
                        })
                    ),
                    (0, o.default)(r, G, {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: et(
                            q,
                            (function (t) {
                                return function (e, n) {
                                    var r = { finished: "complete" === document.readyState };
                                    return !r.finished || (n && n.finshed) || t(e), r;
                                };
                            })(tt)
                        ),
                    }),
                    (0, o.default)(r, W, {
                        types: "readystatechange IX2_PAGE_UPDATE",
                        handler: et(
                            q,
                            (function (t) {
                                return function (e, n) {
                                    return n || t(e), { started: !0 };
                                };
                            })(tt)
                        ),
                    }),
                    r);
        e.default = Et;
    },
    function (t, e, n) {
        var r = n(293)();
        t.exports = r;
    },
    function (t, e, n) {
        var r = n(62),
            i = n(294),
            o = n(118),
            a = n(119),
            u = n(1),
            c = n(307),
            s = "Expected a function",
            f = 8,
            l = 32,
            d = 128,
            p = 256;
        t.exports = function (t) {
            return i(function (e) {
                var n = e.length,
                    i = n,
                    v = r.prototype.thru;
                for (t && e.reverse(); i--;) {
                    var h = e[i];
                    if ("function" != typeof h) throw new TypeError(s);
                    if (v && !g && "wrapper" == a(h)) var g = new r([], !0);
                }
                for (i = g ? i : n; ++i < n;) {
                    h = e[i];
                    var E = a(h),
                        _ = "wrapper" == E ? o(h) : void 0;
                    g =
                        _ && c(_[0]) && _[1] == (d | f | l | p) && !_[4].length && 1 == _[9]
                            ? g[a(_[0])].apply(g, _[3])
                            : 1 == h.length && c(h)
                                ? g[E]()
                                : g.thru(h);
                }
                return function () {
                    var t = arguments,
                        r = t[0];
                    if (g && 1 == t.length && u(r)) return g.plant(r).value();
                    for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;)
                        o = e[i].call(this, o);
                    return o;
                };
            });
        };
    },
    function (t, e, n) {
        var r = n(295),
            i = n(298),
            o = n(300);
        t.exports = function (t) {
            return o(i(t, void 0, r), t + "");
        };
    },
    function (t, e, n) {
        var r = n(296);
        t.exports = function (t) {
            return null != t && t.length ? r(t, 1) : [];
        };
    },
    function (t, e, n) {
        var r = n(48),
            i = n(297);
        t.exports = function t(e, n, o, a, u) {
            var c = -1,
                s = e.length;
            for (o || (o = i), u || (u = []); ++c < s;) {
                var f = e[c];
                n > 0 && o(f)
                    ? n > 1
                        ? t(f, n - 1, o, a, u)
                        : r(u, f)
                    : a || (u[u.length] = f);
            }
            return u;
        };
    },
    function (t, e, n) {
        var r = n(19),
            i = n(33),
            o = n(1),
            a = r ? r.isConcatSpreadable : void 0;
        t.exports = function (t) {
            return o(t) || i(t) || !!(a && t && t[a]);
        };
    },
    function (t, e, n) {
        var r = n(299),
            i = Math.max;
        t.exports = function (t, e, n) {
            return (
                (e = i(void 0 === e ? t.length - 1 : e, 0)),
                function () {
                    for (
                        var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u);
                        ++a < u;

                    )
                        c[a] = o[e + a];
                    a = -1;
                    for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                    return (s[e] = n(c)), r(t, this, s);
                }
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            switch (n.length) {
                case 0:
                    return t.call(e);
                case 1:
                    return t.call(e, n[0]);
                case 2:
                    return t.call(e, n[0], n[1]);
                case 3:
                    return t.call(e, n[0], n[1], n[2]);
            }
            return t.apply(e, n);
        };
    },
    function (t, e, n) {
        var r = n(301),
            i = n(303)(r);
        t.exports = i;
    },
    function (t, e, n) {
        var r = n(302),
            i = n(116),
            o = n(59),
            a = i
                ? function (t, e) {
                    return i(t, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: r(e),
                        writable: !0,
                    });
                }
                : o;
        t.exports = a;
    },
    function (t, e) {
        t.exports = function (t) {
            return function () {
                return t;
            };
        };
    },
    function (t, e) {
        var n = 800,
            r = 16,
            i = Date.now;
        t.exports = function (t) {
            var e = 0,
                o = 0;
            return function () {
                var a = i(),
                    u = r - (a - o);
                if (((o = a), u > 0)) {
                    if (++e >= n) return arguments[0];
                } else e = 0;
                return t.apply(void 0, arguments);
            };
        };
    },
    function (t, e, n) {
        var r = n(99),
            i = r && new r();
        t.exports = i;
    },
    function (t, e) {
        t.exports = function () { };
    },
    function (t, e) {
        t.exports = {};
    },
    function (t, e, n) {
        var r = n(64),
            i = n(118),
            o = n(119),
            a = n(308);
        t.exports = function (t) {
            var e = o(t),
                n = a[e];
            if ("function" != typeof n || !(e in r.prototype)) return !1;
            if (t === n) return !0;
            var u = i(n);
            return !!u && t === u[0];
        };
    },
    function (t, e, n) {
        var r = n(64),
            i = n(62),
            o = n(63),
            a = n(1),
            u = n(9),
            c = n(309),
            s = Object.prototype.hasOwnProperty;
        function f(t) {
            if (u(t) && !a(t) && !(t instanceof r)) {
                if (t instanceof i) return t;
                if (s.call(t, "__wrapped__")) return c(t);
            }
            return new i(t);
        }
        (f.prototype = o.prototype), (f.prototype.constructor = f), (t.exports = f);
    },
    function (t, e, n) {
        var r = n(64),
            i = n(62),
            o = n(310);
        t.exports = function (t) {
            if (t instanceof r) return t.clone();
            var e = new i(t.__wrapped__, t.__chain__);
            return (
                (e.__actions__ = o(t.__actions__)),
                (e.__index__ = t.__index__),
                (e.__values__ = t.__values__),
                e
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = -1,
                r = t.length;
            for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
            return e;
        };
    },
    function (t, e, n) {
        var r = n(312),
            i = n(60);
        t.exports = function (t, e, n) {
            return (
                void 0 === n && ((n = e), (e = void 0)),
                void 0 !== n && (n = (n = i(n)) == n ? n : 0),
                void 0 !== e && (e = (e = i(e)) == e ? e : 0),
                r(i(t), e, n)
            );
        };
    },
    function (t, e) {
        t.exports = function (t, e, n) {
            return (
                t == t &&
                (void 0 !== n && (t = t <= n ? t : n),
                    void 0 !== e && (t = t >= e ? t : e)),
                t
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(4);
        r.define(
            "links",
            (t.exports = function (t, e) {
                var n,
                    i,
                    o,
                    a = {},
                    u = t(window),
                    c = r.env(),
                    s = window.location,
                    f = document.createElement("a"),
                    l = "w--current",
                    d = /index\.(html|php)$/,
                    p = /\/$/;
                function v(e) {
                    var r =
                        (n && e.getAttribute("href-disabled")) || e.getAttribute("href");
                    if (((f.href = r), !(r.indexOf(":") >= 0))) {
                        var a = t(e);
                        if (
                            f.hash.length > 1 &&
                            f.host + f.pathname === s.host + s.pathname
                        ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                            var u = t(f.hash);
                            u.length && i.push({ link: a, sec: u, active: !1 });
                        } else if ("#" !== r && "" !== r) {
                            var c = f.href === s.href || r === o || (d.test(r) && p.test(o));
                            g(a, l, c);
                        }
                    }
                }
                function h() {
                    var t = u.scrollTop(),
                        n = u.height();
                    e.each(i, function (e) {
                        var r = e.link,
                            i = e.sec,
                            o = i.offset().top,
                            a = i.outerHeight(),
                            u = 0.5 * n,
                            c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                        e.active !== c && ((e.active = c), g(r, l, c));
                    });
                }
                function g(t, e, n) {
                    var r = t.hasClass(e);
                    (n && r) || ((n || r) && (n ? t.addClass(e) : t.removeClass(e)));
                }
                return (
                    (a.ready =
                        a.design =
                        a.preview =
                        function () {
                            (n = c && r.env("design")),
                                (o = r.env("slug") || s.pathname || ""),
                                r.scroll.off(h),
                                (i = []);
                            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
                            i.length && (r.scroll.on(h), h());
                        }),
                    a
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(4);
        r.define(
            "scroll",
            (t.exports = function (t) {
                var e,
                    n = {
                        WF_CHANGE: "change.wf-change",
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll",
                    },
                    i = t(document),
                    o = window,
                    a = o.location,
                    u = (function () {
                        try {
                            return Boolean(o.frameElement);
                        } catch (t) {
                            return !0;
                        }
                    })()
                        ? null
                        : o.history,
                    c = /^[a-zA-Z0-9][\w:.-]*$/,
                    s = 'a[href="#"]',
                    f = 'a[href*="#"]:not(.w-tab-link):not(' + s + ")";
                function l(n) {
                    if (
                        !(
                            r.env("design") ||
                            (window.$.mobile && t(n.currentTarget).hasClass("ui-link"))
                        )
                    ) {
                        var i = this.href.split("#"),
                            s = i[0] === e ? i[1] : null;
                        s &&
                            (function (e, n) {
                                if (!c.test(e)) return;
                                var i = t("#" + e);
                                if (!i.length) return;
                                n && (n.preventDefault(), n.stopPropagation());
                                if (
                                    a.hash !== e &&
                                    u &&
                                    u.pushState &&
                                    (!r.env.chrome || "file:" !== a.protocol)
                                ) {
                                    var s = u.state && u.state.hash;
                                    s !== e && u.pushState({ hash: e }, "", "#" + e);
                                }
                                var f = r.env("editor") ? ".w-editor-body" : "body",
                                    l = t(
                                        "header, " +
                                        f +
                                        " > .header, " +
                                        f +
                                        " > .w-nav:not([data-no-scroll])"
                                    ),
                                    d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                                o.setTimeout(
                                    function () {
                                        !(function (e, n) {
                                            var r = t(o).scrollTop(),
                                                i = e.offset().top - n;
                                            if ("mid" === e.data("scroll")) {
                                                var a = t(o).height() - n,
                                                    u = e.outerHeight();
                                                u < a && (i -= Math.round((a - u) / 2));
                                            }
                                            var c = 1;
                                            t("body")
                                                .add(e)
                                                .each(function () {
                                                    var e = parseFloat(
                                                        t(this).attr("data-scroll-time"),
                                                        10
                                                    );
                                                    !isNaN(e) && (0 === e || e > 0) && (c = e);
                                                }),
                                                Date.now ||
                                                (Date.now = function () {
                                                    return new Date().getTime();
                                                });
                                            var s = Date.now(),
                                                f =
                                                    o.requestAnimationFrame ||
                                                    o.mozRequestAnimationFrame ||
                                                    o.webkitRequestAnimationFrame ||
                                                    function (t) {
                                                        o.setTimeout(t, 15);
                                                    },
                                                l =
                                                    (472.143 * Math.log(Math.abs(r - i) + 125) - 2e3) * c;
                                            !(function t() {
                                                var e = Date.now() - s;
                                                o.scroll(
                                                    0,
                                                    (function (t, e, n, r) {
                                                        if (n > r) return e;
                                                        return (
                                                            t +
                                                            (e - t) *
                                                            ((i = n / r),
                                                                i < 0.5
                                                                    ? 4 * i * i * i
                                                                    : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1)
                                                        );
                                                        var i;
                                                    })(r, i, e, l)
                                                ),
                                                    e <= l && f(t);
                                            })();
                                        })(i, d);
                                    },
                                    n ? 0 : 300
                                );
                            })(s, n);
                    }
                }
                return {
                    ready: function () {
                        n.WF_CHANGE;
                        var t = n.WF_CLICK_EMPTY,
                            r = n.WF_CLICK_SCROLL;
                        (e = a.href.split("#")[0]),
                            i.on(r, f, l),
                            i.on(t, s, function (t) {
                                t.preventDefault();
                            });
                    },
                };
            })
        );
    },
    function (t, e, n) {
        "use strict";
        n(4).define(
            "touch",
            (t.exports = function (t) {
                var e = {},
                    n = window.getSelection;
                function r(e) {
                    var r,
                        i,
                        o = !1,
                        a = !1,
                        u = Math.min(Math.round(0.04 * window.innerWidth), 40);
                    function c(t) {
                        var e = t.touches;
                        (e && e.length > 1) ||
                            ((o = !0),
                                e ? ((a = !0), (r = e[0].clientX)) : (r = t.clientX),
                                (i = r));
                    }
                    function s(e) {
                        if (o) {
                            if (a && "mousemove" === e.type)
                                return e.preventDefault(), void e.stopPropagation();
                            var r = e.touches,
                                c = r ? r[0].clientX : e.clientX,
                                s = c - i;
                            (i = c),
                                Math.abs(s) > u &&
                                n &&
                                "" === String(n()) &&
                                (!(function (e, n, r) {
                                    var i = t.Event(e, { originalEvent: n });
                                    t(n.target).trigger(i, r);
                                })("swipe", e, { direction: s > 0 ? "right" : "left" }),
                                    l());
                        }
                    }
                    function f(t) {
                        if (o)
                            return (
                                (o = !1),
                                a && "mouseup" === t.type
                                    ? (t.preventDefault(), t.stopPropagation(), void (a = !1))
                                    : void 0
                            );
                    }
                    function l() {
                        o = !1;
                    }
                    e.addEventListener("touchstart", c, !1),
                        e.addEventListener("touchmove", s, !1),
                        e.addEventListener("touchend", f, !1),
                        e.addEventListener("touchcancel", l, !1),
                        e.addEventListener("mousedown", c, !1),
                        e.addEventListener("mousemove", s, !1),
                        e.addEventListener("mouseup", f, !1),
                        e.addEventListener("mouseout", l, !1),
                        (this.destroy = function () {
                            e.removeEventListener("touchstart", c, !1),
                                e.removeEventListener("touchmove", s, !1),
                                e.removeEventListener("touchend", f, !1),
                                e.removeEventListener("touchcancel", l, !1),
                                e.removeEventListener("mousedown", c, !1),
                                e.removeEventListener("mousemove", s, !1),
                                e.removeEventListener("mouseup", f, !1),
                                e.removeEventListener("mouseout", l, !1),
                                (e = null);
                        });
                }
                return (
                    (t.event.special.tap = { bindType: "click", delegateType: "click" }),
                    (e.init = function (e) {
                        return (e = "string" == typeof e ? t(e).get(0) : e)
                            ? new r(e)
                            : null;
                    }),
                    (e.instance = e.init(document)),
                    e
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(0)(n(317)),
            i = n(4);
        i.define(
            "forms",
            (t.exports = function (t, e) {
                var n,
                    o,
                    a,
                    u,
                    c,
                    s = {},
                    f = t(document),
                    l = window.location,
                    d = window.XDomainRequest && !window.atob,
                    p = ".w-form",
                    v = /e(-)?mail/i,
                    h = /^\S+@\S+$/,
                    g = window.alert,
                    E = i.env(),
                    _ = /list-manage[1-9]?.com/i,
                    m = e.debounce(function () {
                        g(
                            "Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
                        );
                    }, 100);
                function y(e, n) {
                    var r = t(n),
                        i = t.data(n, p);
                    i || (i = t.data(n, p, { form: r })), I(i);
                    var a = r.closest("div.w-form");
                    (i.done = a.find("> .w-form-done")),
                        (i.fail = a.find("> .w-form-fail")),
                        (i.fileUploads = a.find(".w-file-upload")),
                        i.fileUploads.each(function (e) {
                            !(function (e, n) {
                                if (!n.fileUploads || !n.fileUploads[e]) return;
                                var r,
                                    i = t(n.fileUploads[e]),
                                    o = i.find("> .w-file-upload-default"),
                                    a = i.find("> .w-file-upload-uploading"),
                                    u = i.find("> .w-file-upload-success"),
                                    s = i.find("> .w-file-upload-error"),
                                    f = o.find(".w-file-upload-input"),
                                    l = o.find(".w-file-upload-label"),
                                    d = l.children(),
                                    p = s.find(".w-file-upload-error-msg"),
                                    v = u.find(".w-file-upload-file"),
                                    h = u.find(".w-file-remove-link"),
                                    g = v.find(".w-file-upload-file-name"),
                                    _ = p.attr("data-w-size-error"),
                                    m = p.attr("data-w-type-error"),
                                    y = p.attr("data-w-generic-error");
                                if (E)
                                    f.on("click", function (t) {
                                        t.preventDefault();
                                    }),
                                        l.on("click", function (t) {
                                            t.preventDefault();
                                        }),
                                        d.on("click", function (t) {
                                            t.preventDefault();
                                        });
                                else {
                                    h.on("click", function () {
                                        f.removeAttr("data-value"),
                                            f.val(""),
                                            g.html(""),
                                            o.toggle(!0),
                                            u.toggle(!1);
                                    }),
                                        f.on("change", function (i) {
                                            (r = i.target && i.target.files && i.target.files[0]) &&
                                                (o.toggle(!1),
                                                    s.toggle(!1),
                                                    a.toggle(!0),
                                                    g.text(r.name),
                                                    x() || b(n),
                                                    (n.fileUploads[e].uploading = !0),
                                                    (function (e, n) {
                                                        var r = { name: e.name, size: e.size };
                                                        t.ajax({
                                                            type: "POST",
                                                            url: c,
                                                            data: r,
                                                            dataType: "json",
                                                            crossDomain: !0,
                                                        })
                                                            .done(function (t) {
                                                                n(null, t);
                                                            })
                                                            .fail(function (t) {
                                                                n(t);
                                                            });
                                                    })(r, O));
                                        });
                                    var T = l.outerHeight();
                                    f.height(T), f.width(1);
                                }
                                function w(t) {
                                    var r = t.responseJSON && t.responseJSON.msg,
                                        i = y;
                                    "string" == typeof r &&
                                        0 === r.indexOf("InvalidFileTypeError")
                                        ? (i = m)
                                        : "string" == typeof r &&
                                        0 === r.indexOf("MaxFileSizeError") &&
                                        (i = _),
                                        p.text(i),
                                        f.removeAttr("data-value"),
                                        f.val(""),
                                        a.toggle(!1),
                                        o.toggle(!0),
                                        s.toggle(!0),
                                        (n.fileUploads[e].uploading = !1),
                                        x() || I(n);
                                }
                                function O(e, n) {
                                    if (e) return w(e);
                                    var i = n.fileName,
                                        o = n.postData,
                                        a = n.fileId,
                                        u = n.s3Url;
                                    f.attr("data-value", a),
                                        (function (e, n, r, i, o) {
                                            var a = new FormData();
                                            for (var u in n) a.append(u, n[u]);
                                            a.append("file", r, i),
                                                t
                                                    .ajax({
                                                        type: "POST",
                                                        url: e,
                                                        data: a,
                                                        processData: !1,
                                                        contentType: !1,
                                                    })
                                                    .done(function () {
                                                        o(null);
                                                    })
                                                    .fail(function (t) {
                                                        o(t);
                                                    });
                                        })(u, o, r, i, A);
                                }
                                function A(t) {
                                    if (t) return w(t);
                                    a.toggle(!1),
                                        u.css("display", "inline-block"),
                                        (n.fileUploads[e].uploading = !1),
                                        x() || I(n);
                                }
                                function x() {
                                    var t = (n.fileUploads && n.fileUploads.toArray()) || [];
                                    return t.some(function (t) {
                                        return t.uploading;
                                    });
                                }
                            })(e, i);
                        });
                    var u = (i.action = r.attr("action"));
                    (i.handler = null),
                        (i.redirect = r.attr("data-redirect")),
                        _.test(u) ? (i.handler = O) : u || (o ? (i.handler = w) : m());
                }
                function I(t) {
                    var e = (t.btn = t.form.find(':input[type="submit"]'));
                    (t.wait = t.btn.attr("data-wait") || null),
                        (t.success = !1),
                        e.prop("disabled", !1),
                        t.label && e.val(t.label);
                }
                function b(t) {
                    var e = t.btn,
                        n = t.wait;
                    e.prop("disabled", !0), n && ((t.label = e.val()), e.val(n));
                }
                function T(e, n) {
                    var r = null;
                    return (
                        (n = n || {}),
                        e
                            .find(':input:not([type="submit"]):not([type="file"])')
                            .each(function (i, o) {
                                var a = t(o),
                                    u = a.attr("type"),
                                    c =
                                        a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                                    s = a.val();
                                if ("checkbox" === u) s = a.is(":checked");
                                else if ("radio" === u) {
                                    if (null === n[c] || "string" == typeof n[c]) return;
                                    s =
                                        e
                                            .find('input[name="' + a.attr("name") + '"]:checked')
                                            .val() || null;
                                }
                                "string" == typeof s && (s = t.trim(s)),
                                    (n[c] = s),
                                    (r =
                                        r ||
                                        (function (t, e, n, r) {
                                            var i = null;
                                            "password" === e
                                                ? (i = "Passwords cannot be submitted.")
                                                : t.attr("required")
                                                    ? r
                                                        ? v.test(t.attr("type")) &&
                                                        (h.test(r) ||
                                                            (i =
                                                                "Please enter a valid email address for: " + n))
                                                        : (i = "Please fill out the required field: " + n)
                                                    : "g-recaptcha-response" !== n ||
                                                    r ||
                                                    (i = "Please confirm youâ€™re not a robot.");
                                            return i;
                                        })(a, u, c, s));
                            }),
                        r
                    );
                }
                function w(e) {
                    I(e);
                    var n = e.form,
                        r = {
                            name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                            source: l.href,
                            test: i.env(),
                            fields: {},
                            fileUploads: {},
                            dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
                                n.html()
                            ),
                        };
                    x(e);
                    var a = T(n, r.fields);
                    if (a) return g(a);
                    (r.fileUploads = (function (e) {
                        var n = {};
                        return (
                            e.find(':input[type="file"]').each(function (e, r) {
                                var i = t(r),
                                    o =
                                        i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                                    a = i.attr("data-value");
                                "string" == typeof a && (a = t.trim(a)), (n[o] = a);
                            }),
                            n
                        );
                    })(n)),
                        b(e),
                        o
                            ? t
                                .ajax({
                                    url: u,
                                    type: "POST",
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0,
                                })
                                .done(function (t) {
                                    t && 200 === t.code && (e.success = !0), A(e);
                                })
                                .fail(function () {
                                    A(e);
                                })
                            : A(e);
                }
                function O(n) {
                    I(n);
                    var r = n.form,
                        i = {};
                    if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                        x(n);
                        var o,
                            a = T(r, i);
                        if (a) return g(a);
                        b(n),
                            e.each(i, function (t, e) {
                                v.test(e) && (i.EMAIL = t),
                                    /^((full[ _-]?)?name)$/i.test(e) && (o = t),
                                    /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t),
                                    /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t);
                            }),
                            o &&
                            !i.FNAME &&
                            ((o = o.split(" ")),
                                (i.FNAME = o[0]),
                                (i.LNAME = i.LNAME || o[1]));
                        var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                            c = u.indexOf("u=") + 2;
                        c = u.substring(c, u.indexOf("&", c));
                        var s = u.indexOf("id=") + 3;
                        (s = u.substring(s, u.indexOf("&", s))),
                            (i["b_" + c + "_" + s] = ""),
                            t
                                .ajax({ url: u, data: i, dataType: "jsonp" })
                                .done(function (t) {
                                    (n.success = "success" === t.result || /already/.test(t.msg)),
                                        n.success || console.info("MailChimp error: " + t.msg),
                                        A(n);
                                })
                                .fail(function () {
                                    A(n);
                                });
                    } else r.attr("method", "post");
                }
                function A(t) {
                    var e = t.form,
                        n = t.redirect,
                        r = t.success;
                    r && n
                        ? i.location(n)
                        : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t));
                }
                function x(t) {
                    t.evt && t.evt.preventDefault(), (t.evt = null);
                }
                return (
                    (s.ready =
                        s.design =
                        s.preview =
                        function () {
                            !(function () {
                                (o = t("html").attr("data-wf-site")),
                                    (u = "https://digipants.com/api/v1/form/" + o),
                                    d &&
                                    u.indexOf("https://digipants.com") >= 0 &&
                                    (u = u.replace(
                                        "https://digipants.com",
                                        "http://formdata.digipants.com"
                                    ));
                                if (
                                    ((c = "".concat(u, "/signFile")),
                                        !(n = t(p + " form")).length)
                                )
                                    return;
                                n.each(y);
                            })(),
                                E ||
                                a ||
                                (function () {
                                    (a = !0),
                                        f.on("submit", p + " form", function (e) {
                                            var n = t.data(this, p);
                                            n.handler && ((n.evt = e), n.handler(n));
                                        });
                                    var e = [
                                        ["checkbox", ".w-checkbox-input"],
                                        ["radio", ".w-radio-input"],
                                    ];
                                    f.on(
                                        "change",
                                        p +
                                        ' form input[type="checkbox"]:not(.w-checkbox-input)',
                                        function (e) {
                                            t(e.target)
                                                .siblings(".w-checkbox-input")
                                                .toggleClass("w--redirected-checked");
                                        }
                                    ),
                                        f.on(
                                            "change",
                                            p + ' form input[type="radio"]',
                                            function (e) {
                                                t(
                                                    'input[name="'
                                                        .concat(e.target.name, '"]:not(')
                                                        .concat(".w-checkbox-input", ")")
                                                ).map(function (e, n) {
                                                    return t(n)
                                                        .siblings(".w-radio-input")
                                                        .removeClass("w--redirected-checked");
                                                });
                                                var n = t(e.target);
                                                n.hasClass("w-radio-input") ||
                                                    n
                                                        .siblings(".w-radio-input")
                                                        .addClass("w--redirected-checked");
                                            }
                                        ),
                                        e.forEach(function (e) {
                                            var n = (0, r.default)(e, 2),
                                                i = n[0],
                                                o = n[1];
                                            f.on(
                                                "focus",
                                                p +
                                                ' form input[type="'.concat(i, '"]:not(') +
                                                o +
                                                ")",
                                                function (e) {
                                                    t(e.target)
                                                        .siblings(o)
                                                        .addClass("w--redirected-focus");
                                                }
                                            ),
                                                f.on(
                                                    "blur",
                                                    p +
                                                    ' form input[type="'.concat(i, '"]:not(') +
                                                    o +
                                                    ")",
                                                    function (e) {
                                                        t(e.target)
                                                            .siblings(o)
                                                            .removeClass("w--redirected-focus");
                                                    }
                                                );
                                        });
                                })();
                        }),
                    s
                );
            })
        );
    },
    function (t, e, n) {
        var r = n(318),
            i = n(319),
            o = n(320);
        t.exports = function (t, e) {
            return r(t) || i(t, e) || o();
        };
    },
    function (t, e) {
        t.exports = function (t) {
            if (Array.isArray(t)) return t;
        };
    },
    function (t, e) {
        t.exports = function (t, e) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (
                    var a, u = t[Symbol.iterator]();
                    !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e);
                    r = !0
                );
            } catch (t) {
                (i = !0), (o = t);
            } finally {
                try {
                    r || null == u.return || u.return();
                } finally {
                    if (i) throw o;
                }
            }
            return n;
        };
    },
    function (t, e) {
        t.exports = function () {
            throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
            );
        };
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            i = "w-condition-invisible",
            o = "." + i;
        function a(t) {
            return Boolean(t.$el && t.$el.closest(o).length);
        }
        function u(t, e) {
            for (var n = t; n >= 0; n--) if (!a(e[n])) return n;
            return -1;
        }
        function c(t, e) {
            for (var n = t; n <= e.length - 1; n++) if (!a(e[n])) return n;
            return -1;
        }
        function s(t, e, n, r) {
            var o,
                s,
                f,
                l = n.tram,
                d = Array.isArray,
                p = "w-lightbox-",
                v = /(^|\s+)/g,
                h = [];
            function g(t, e) {
                return (
                    (h = d(t) ? t : [t]),
                    s || g.build(),
                    (function (t) {
                        return t.filter(function (t) {
                            return !a(t);
                        });
                    })(h).length > 1 &&
                    ((s.items = s.empty),
                        h.forEach(function (t) {
                            var e = P("thumbnail"),
                                n = P("item").append(e);
                            a(t) && n.addClass(i),
                                (s.items = s.items.add(n)),
                                x(t.thumbnailUrl || t.url, function (t) {
                                    t.prop("width") > t.prop("height")
                                        ? C(t, "wide")
                                        : C(t, "tall"),
                                        e.append(C(t, "thumbnail-image"));
                                });
                        }),
                        s.strip.empty().append(s.items),
                        C(s.content, "group")),
                    l(L(s.lightbox, "hide").trigger("focus"))
                        .add("opacity .3s")
                        .start({ opacity: 1 }),
                    C(s.html, "noscroll"),
                    g.show(e || 0)
                );
            }
            function E(t) {
                return function (e) {
                    this === e.target && (e.stopPropagation(), e.preventDefault(), t());
                };
            }
            (g.build = function () {
                return (
                    g.destroy(),
                    ((s = { html: n(e.documentElement), empty: n() }).arrowLeft = P(
                        "control left inactive"
                    )),
                    (s.arrowRight = P("control right inactive")),
                    (s.close = P("control close")),
                    (s.spinner = P("spinner")),
                    (s.strip = P("strip")),
                    (f = new S(s.spinner, R("hide"))),
                    (s.content = P("content").append(
                        s.spinner,
                        s.arrowLeft,
                        s.arrowRight,
                        s.close
                    )),
                    (s.container = P("container").append(s.content, s.strip)),
                    (s.lightbox = P("backdrop hide").append(s.container)),
                    s.strip.on("click", N("item"), I),
                    s.content
                        .on("swipe", b)
                        .on("click", N("left"), _)
                        .on("click", N("right"), m)
                        .on("click", N("close"), y)
                        .on("click", N("image, caption"), m),
                    s.container.on("click", N("view"), y).on("dragstart", N("img"), w),
                    s.lightbox.on("keydown", O).on("focusin", T),
                    n(r).append(s.lightbox.prop("tabIndex", 0)),
                    g
                );
            }),
                (g.destroy = function () {
                    s && (L(s.html, "noscroll"), s.lightbox.remove(), (s = void 0));
                }),
                (g.show = function (t) {
                    if (t !== o) {
                        var e = h[t];
                        if (!e) return g.hide();
                        if (a(e)) {
                            if (t < o) {
                                var r = u(t - 1, h);
                                t = r > -1 ? r : t;
                            } else {
                                var i = c(t + 1, h);
                                t = i > -1 ? i : t;
                            }
                            e = h[t];
                        }
                        var d,
                            p,
                            v = o;
                        return (
                            (o = t),
                            f.show(),
                            x(
                                (e.html &&
                                    ((d = e.width),
                                        (p = e.height),
                                        "data:image/svg+xml;charset=utf-8," +
                                        encodeURI(
                                            '<svg xmlns="http://www.w3.org/2000/svg" width="' +
                                            d +
                                            '" height="' +
                                            p +
                                            '"/>'
                                        ))) ||
                                e.url,
                                function (r) {
                                    if (t === o) {
                                        var i,
                                            a,
                                            d = P("figure", "figure").append(C(r, "image")),
                                            p = P("frame").append(d),
                                            g = P("view").append(p);
                                        e.html &&
                                            ((a = (i = n(e.html)).is("iframe")) && i.on("load", E),
                                                d.append(C(i, "embed"))),
                                            e.caption &&
                                            d.append(P("caption", "figcaption").text(e.caption)),
                                            s.spinner.before(g),
                                            a || E();
                                    }
                                    function E() {
                                        var e;
                                        if ((f.hide(), t === o)) {
                                            if (
                                                (D(
                                                    s.arrowLeft,
                                                    "inactive",
                                                    (function (t, e) {
                                                        return -1 === u(t - 1, e);
                                                    })(t, h)
                                                ),
                                                    D(
                                                        s.arrowRight,
                                                        "inactive",
                                                        (function (t, e) {
                                                            return -1 === c(t + 1, e);
                                                        })(t, h)
                                                    ),
                                                    s.view
                                                        ? (l(s.view)
                                                            .add("opacity .3s")
                                                            .start({ opacity: 0 })
                                                            .then(
                                                                ((e = s.view),
                                                                    function () {
                                                                        e.remove();
                                                                    })
                                                            ),
                                                            l(g)
                                                                .add("opacity .3s")
                                                                .add("transform .3s")
                                                                .set({ x: t > v ? "80px" : "-80px" })
                                                                .start({ opacity: 1, x: 0 }))
                                                        : g.css("opacity", 1),
                                                    (s.view = g),
                                                    s.items)
                                            ) {
                                                L(s.items, "active");
                                                var n = s.items.eq(t);
                                                C(n, "active"),
                                                    (function (t) {
                                                        var e,
                                                            n = t.get(0),
                                                            r = s.strip.get(0),
                                                            i = n.offsetLeft,
                                                            o = n.clientWidth,
                                                            a = r.scrollLeft,
                                                            u = r.clientWidth,
                                                            c = r.scrollWidth - u;
                                                        i < a
                                                            ? (e = Math.max(0, i + o - u))
                                                            : i + o > u + a && (e = Math.min(i, c));
                                                        null != e &&
                                                            l(s.strip)
                                                                .add("scroll-left 500ms")
                                                                .start({ "scroll-left": e });
                                                    })(n);
                                            }
                                        } else g.remove();
                                    }
                                }
                            ),
                            g
                        );
                    }
                }),
                (g.hide = function () {
                    return (
                        l(s.lightbox).add("opacity .3s").start({ opacity: 0 }).then(A), g
                    );
                }),
                (g.prev = function () {
                    var t = u(o - 1, h);
                    t > -1 && g.show(t);
                }),
                (g.next = function () {
                    var t = c(o + 1, h);
                    t > -1 && g.show(t);
                });
            var _ = E(g.prev),
                m = E(g.next),
                y = E(g.hide),
                I = function (t) {
                    var e = n(this).index();
                    t.preventDefault(), g.show(e);
                },
                b = function (t, e) {
                    t.preventDefault(),
                        "left" === e.direction
                            ? g.next()
                            : "right" === e.direction && g.prev();
                },
                T = function () {
                    this.focus();
                };
            function w(t) {
                t.preventDefault();
            }
            function O(t) {
                var e = t.keyCode;
                27 === e ? g.hide() : 37 === e ? g.prev() : 39 === e && g.next();
            }
            function A() {
                s &&
                    (s.strip.scrollLeft(0).empty(),
                        L(s.html, "noscroll"),
                        C(s.lightbox, "hide"),
                        s.view && s.view.remove(),
                        L(s.content, "group"),
                        C(s.arrowLeft, "inactive"),
                        C(s.arrowRight, "inactive"),
                        (o = s.view = void 0));
            }
            function x(t, e) {
                var n = P("img", "img");
                return (
                    n.one("load", function () {
                        e(n);
                    }),
                    n.attr("src", t),
                    n
                );
            }
            function S(t, e, n) {
                (this.$element = t),
                    (this.className = e),
                    (this.delay = n || 200),
                    this.hide();
            }
            function R(t, e) {
                return t.replace(v, (e ? " ." : " ") + p);
            }
            function N(t) {
                return R(t, !0);
            }
            function C(t, e) {
                return t.addClass(R(e));
            }
            function L(t, e) {
                return t.removeClass(R(e));
            }
            function D(t, e, n) {
                return t.toggleClass(R(e), n);
            }
            function P(t, r) {
                return C(n(e.createElement(r || "div")), t);
            }
            return (
                (S.prototype.show = function () {
                    var t = this;
                    t.timeoutId ||
                        (t.timeoutId = setTimeout(function () {
                            t.$element.removeClass(t.className), delete t.timeoutId;
                        }, t.delay));
                }),
                (S.prototype.hide = function () {
                    if (this.timeoutId)
                        return clearTimeout(this.timeoutId), void delete this.timeoutId;
                    this.$element.addClass(this.className);
                }),
                (function () {
                    var n = t.navigator.userAgent,
                        r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                    if (
                        (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome")) ||
                        (r && !(r[2] > 7))
                    ) {
                        var i = e.createElement("style");
                        e.head.appendChild(i), t.addEventListener("resize", o, !0), o();
                    }
                    function o() {
                        var e = t.innerHeight,
                            n = t.innerWidth,
                            r =
                                ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                                e +
                                "px}.w-lightbox-view {width:" +
                                n +
                                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                                0.86 * e +
                                "px}.w-lightbox-image {max-width:" +
                                n +
                                "px;max-height:" +
                                e +
                                "px}.w-lightbox-group .w-lightbox-image {max-height:" +
                                0.86 * e +
                                "px}.w-lightbox-strip {padding: 0 " +
                                0.01 * e +
                                "px}.w-lightbox-item {width:" +
                                0.1 * e +
                                "px;padding:" +
                                0.02 * e +
                                "px " +
                                0.01 * e +
                                "px}.w-lightbox-thumbnail {height:" +
                                0.1 * e +
                                "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" +
                                0.96 * e +
                                "px}.w-lightbox-content {margin-top:" +
                                0.02 * e +
                                "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" +
                                0.84 * e +
                                "px}.w-lightbox-image {max-width:" +
                                0.96 * n +
                                "px;max-height:" +
                                0.96 * e +
                                "px}.w-lightbox-group .w-lightbox-image {max-width:" +
                                0.823 * n +
                                "px;max-height:" +
                                0.84 * e +
                                "px}}";
                        i.textContent = r;
                    }
                })(),
                g
            );
        }
        r.define(
            "lightbox",
            (t.exports = function (t) {
                var e,
                    n,
                    i = {},
                    o = r.env(),
                    a = s(window, document, t, o ? "#lightbox-mountpoint" : "body"),
                    u = t(document),
                    c = ".w-lightbox";
                function f(t) {
                    var e,
                        r,
                        i = t.el.children(".w-json").html();
                    if (i) {
                        try {
                            i = JSON.parse(i);
                        } catch (t) {
                            console.error("Malformed lightbox JSON configuration.", t);
                        }
                        !(function (t) {
                            t.images &&
                                (t.images.forEach(function (t) {
                                    t.type = "image";
                                }),
                                    (t.items = t.images));
                            t.embed && ((t.embed.type = "video"), (t.items = [t.embed]));
                            t.groupId && (t.group = t.groupId);
                        })(i),
                            i.items.forEach(function (e) {
                                e.$el = t.el;
                            }),
                            (e = i.group)
                                ? ((r = n[e]) || (r = n[e] = []),
                                    (t.items = r),
                                    i.items.length &&
                                    ((t.index = r.length), r.push.apply(r, i.items)))
                                : ((t.items = i.items), (t.index = 0));
                    } else t.items = [];
                }
                return (
                    (i.ready =
                        i.design =
                        i.preview =
                        function () {
                            (e = o && r.env("design")),
                                a.destroy(),
                                (n = {}),
                                u.find(c).digipantsLightBox();
                        }),
                    jQuery.fn.extend({
                        digipantsLightBox: function () {
                            t.each(this, function (n, r) {
                                var i = t.data(r, c);
                                i ||
                                    (i = t.data(r, c, {
                                        el: t(r),
                                        mode: "images",
                                        images: [],
                                        embed: "",
                                    })),
                                    i.el.off(c),
                                    f(i),
                                    e
                                        ? i.el.on("setting" + c, f.bind(null, i))
                                        : i.el
                                            .on(
                                                "click" + c,
                                                (function (t) {
                                                    return function () {
                                                        t.items.length && a(t.items, t.index || 0);
                                                    };
                                                })(i)
                                            )
                                            .on("click" + c, function (t) {
                                                t.preventDefault();
                                            });
                            });
                        },
                    }),
                    i
                );
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            i = n(36),
            o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35,
            };
        r.define(
            "navbar",
            (t.exports = function (t, e) {
                var n,
                    a,
                    u,
                    c,
                    s = {},
                    f = t.tram,
                    l = t(window),
                    d = t(document),
                    p = e.debounce,
                    v = r.env(),
                    h = '<div class="w-nav-overlay" data-wf-ignore />',
                    g = ".w-nav",
                    E = "w--open",
                    _ = "w--nav-dropdown-open",
                    m = "w--nav-dropdown-toggle-open",
                    y = "w--nav-dropdown-list-open",
                    I = "w--nav-link-open",
                    b = i.triggers,
                    T = t();
                function w() {
                    r.resize.off(O);
                }
                function O() {
                    a.each(M);
                }
                function A(n, r) {
                    var i = t(r),
                        a = t.data(r, g);
                    a ||
                        (a = t.data(r, g, {
                            open: !1,
                            el: i,
                            config: {},
                            selectedIdx: -1,
                        })),
                        (a.menu = i.find(".w-nav-menu")),
                        (a.links = a.menu.find(".w-nav-link")),
                        (a.dropdowns = a.menu.find(".w-dropdown")),
                        (a.dropdownToggle = a.menu.find(".w-dropdown-toggle")),
                        (a.dropdownList = a.menu.find(".w-dropdown-list")),
                        (a.button = i.find(".w-nav-button")),
                        (a.container = i.find(".w-container")),
                        (a.overlayContainerId = "w-nav-overlay-" + n),
                        (a.outside = (function (e) {
                            e.outside && d.off("click" + g, e.outside);
                            return function (n) {
                                var r = t(n.target);
                                (c && r.closest(".w-editor-bem-EditorOverlay").length) ||
                                    P(e, r);
                            };
                        })(a));
                    var s = i.find(".w-nav-brand");
                    s &&
                        "/" === s.attr("href") &&
                        null == s.attr("aria-label") &&
                        s.attr("aria-label", "home"),
                        a.button.attr("style", "-webkit-user-select: text;"),
                        null == a.button.attr("aria-label") &&
                        a.button.attr("aria-label", "menu"),
                        a.button.attr("role", "button"),
                        a.button.attr("tabindex", "0"),
                        a.button.attr("aria-controls", a.overlayContainerId),
                        a.button.attr("aria-haspopup", "menu"),
                        a.button.attr("aria-expanded", "false"),
                        a.el.off(g),
                        a.button.off(g),
                        a.menu.off(g),
                        R(a),
                        u
                            ? (S(a),
                                a.el.on(
                                    "setting" + g,
                                    (function (t) {
                                        return function (n, r) {
                                            r = r || {};
                                            var i = l.width();
                                            R(t),
                                                !0 === r.open && X(t, !0),
                                                !1 === r.open && U(t, !0),
                                                t.open &&
                                                e.defer(function () {
                                                    i !== l.width() && C(t);
                                                });
                                        };
                                    })(a)
                                ))
                            : (!(function (e) {
                                if (e.overlay) return;
                                (e.overlay = t(h).appendTo(e.el)),
                                    e.overlay.attr("id", e.overlayContainerId),
                                    (e.parent = e.menu.parent()),
                                    U(e, !0);
                            })(a),
                                a.button.on("click" + g, L(a)),
                                a.menu.on("click" + g, "a", D(a)),
                                a.button.on(
                                    "keydown" + g,
                                    (function (t) {
                                        return function (e) {
                                            switch (e.keyCode) {
                                                case o.SPACE:
                                                case o.ENTER:
                                                    return (
                                                        L(t)(), e.preventDefault(), e.stopPropagation()
                                                    );
                                                case o.ESCAPE:
                                                    return U(t), e.preventDefault(), e.stopPropagation();
                                                case o.ARROW_RIGHT:
                                                case o.ARROW_DOWN:
                                                case o.HOME:
                                                case o.END:
                                                    return t.open
                                                        ? (e.keyCode === o.END
                                                            ? (t.selectedIdx = t.links.length - 1)
                                                            : (t.selectedIdx = 0),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation())
                                                        : (e.preventDefault(), e.stopPropagation());
                                            }
                                        };
                                    })(a)
                                ),
                                a.el.on(
                                    "keydown" + g,
                                    (function (t) {
                                        return function (e) {
                                            if (t.open)
                                                switch (
                                                ((t.selectedIdx = t.links.index(
                                                    document.activeElement
                                                )),
                                                    e.keyCode)
                                                ) {
                                                    case o.HOME:
                                                    case o.END:
                                                        return (
                                                            e.keyCode === o.END
                                                                ? (t.selectedIdx = t.links.length - 1)
                                                                : (t.selectedIdx = 0),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                    case o.ESCAPE:
                                                        return (
                                                            U(t),
                                                            t.button.focus(),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                    case o.ARROW_LEFT:
                                                    case o.ARROW_UP:
                                                        return (
                                                            (t.selectedIdx = Math.max(-1, t.selectedIdx - 1)),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                    case o.ARROW_RIGHT:
                                                    case o.ARROW_DOWN:
                                                        return (
                                                            (t.selectedIdx = Math.min(
                                                                t.links.length - 1,
                                                                t.selectedIdx + 1
                                                            )),
                                                            N(t),
                                                            e.preventDefault(),
                                                            e.stopPropagation()
                                                        );
                                                }
                                        };
                                    })(a)
                                )),
                        M(n, r);
                }
                function x(e, n) {
                    var r = t.data(n, g);
                    r && (S(r), t.removeData(n, g));
                }
                function S(t) {
                    t.overlay && (U(t, !0), t.overlay.remove(), (t.overlay = null));
                }
                function R(t) {
                    var n = {},
                        r = t.config || {},
                        i = (n.animation = t.el.attr("data-animation") || "default");
                    (n.animOver = /^over/.test(i)),
                        (n.animDirect = /left$/.test(i) ? -1 : 1),
                        r.animation !== i && t.open && e.defer(C, t),
                        (n.easing = t.el.attr("data-easing") || "ease"),
                        (n.easing2 = t.el.attr("data-easing2") || "ease");
                    var o = t.el.attr("data-duration");
                    (n.duration = null != o ? Number(o) : 400),
                        (n.docHeight = t.el.attr("data-doc-height")),
                        (t.config = n);
                }
                function N(t) {
                    if (t.links[t.selectedIdx]) {
                        var e = t.links[t.selectedIdx];
                        e.focus(), D(e);
                    }
                }
                function C(t) {
                    t.open && (U(t, !0), X(t, !0));
                }
                function L(t) {
                    return p(function () {
                        t.open ? U(t) : X(t);
                    });
                }
                function D(e) {
                    return function (n) {
                        var i = t(this).attr("href");
                        r.validClick(n.currentTarget)
                            ? i && 0 === i.indexOf("#") && e.open && U(e)
                            : n.preventDefault();
                    };
                }
                (s.ready =
                    s.design =
                    s.preview =
                    function () {
                        if (
                            ((u = v && r.env("design")),
                                (c = r.env("editor")),
                                (n = t(document.body)),
                                !(a = d.find(g)).length)
                        )
                            return;
                        a.each(A), w(), r.resize.on(O);
                    }),
                    (s.destroy = function () {
                        (T = t()), w(), a && a.length && a.each(x);
                    });
                var P = p(function (t, e) {
                    if (t.open) {
                        var n = e.closest(".w-nav-menu");
                        t.menu.is(n) || U(t);
                    }
                });
                function M(e, n) {
                    var r = t.data(n, g),
                        i = (r.collapsed = "none" !== r.button.css("display"));
                    if ((!r.open || i || u || U(r, !0), r.container.length)) {
                        var o = (function (e) {
                            var n = e.container.css(j);
                            "none" === n && (n = "");
                            return function (e, r) {
                                (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n);
                            };
                        })(r);
                        r.links.each(o), r.dropdowns.each(o);
                    }
                    r.open && G(r);
                }
                var j = "max-width";
                function F(t, e) {
                    e.setAttribute("data-nav-menu-open", "");
                }
                function k(t, e) {
                    e.removeAttribute("data-nav-menu-open");
                }
                function X(t, e) {
                    if (!t.open) {
                        (t.open = !0),
                            t.menu.each(F),
                            t.links.addClass(I),
                            t.dropdowns.addClass(_),
                            t.dropdownToggle.addClass(m),
                            t.dropdownList.addClass(y),
                            t.button.addClass(E);
                        var n = t.config;
                        ("none" !== n.animation && f.support.transform) || (e = !0);
                        var i = G(t),
                            o = t.menu.outerHeight(!0),
                            a = t.menu.outerWidth(!0),
                            c = t.el.height(),
                            s = t.el[0];
                        if (
                            (M(0, s),
                                b.intro(0, s),
                                r.redraw.up(),
                                u || d.on("click" + g, t.outside),
                                e)
                        )
                            v();
                        else {
                            var l = "transform " + n.duration + "ms " + n.easing;
                            if (
                                (t.overlay &&
                                    ((T = t.menu.prev()), t.overlay.show().append(t.menu)),
                                    n.animOver)
                            )
                                return (
                                    f(t.menu)
                                        .add(l)
                                        .set({ x: n.animDirect * a, height: i })
                                        .start({ x: 0 })
                                        .then(v),
                                    void (t.overlay && t.overlay.width(a))
                                );
                            var p = c + o;
                            f(t.menu).add(l).set({ y: -p }).start({ y: 0 }).then(v);
                        }
                    }
                    function v() {
                        t.button.attr("aria-expanded", "true");
                    }
                }
                function G(t) {
                    var e = t.config,
                        r = e.docHeight ? d.height() : n.height();
                    return (
                        e.animOver
                            ? t.menu.height(r)
                            : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)),
                        t.overlay && t.overlay.height(r),
                        r
                    );
                }
                function U(t, e) {
                    if (t.open) {
                        (t.open = !1), t.button.removeClass(E);
                        var n = t.config;
                        if (
                            (("none" === n.animation ||
                                !f.support.transform ||
                                n.duration <= 0) &&
                                (e = !0),
                                b.outro(0, t.el[0]),
                                d.off("click" + g, t.outside),
                                e)
                        )
                            return f(t.menu).stop(), void c();
                        var r = "transform " + n.duration + "ms " + n.easing2,
                            i = t.menu.outerHeight(!0),
                            o = t.menu.outerWidth(!0),
                            a = t.el.height();
                        if (n.animOver)
                            f(t.menu)
                                .add(r)
                                .start({ x: o * n.animDirect })
                                .then(c);
                        else {
                            var u = a + i;
                            f(t.menu).add(r).start({ y: -u }).then(c);
                        }
                    }
                    function c() {
                        t.menu.height(""),
                            f(t.menu).set({ x: 0, y: 0 }),
                            t.menu.each(k),
                            t.links.removeClass(I),
                            t.dropdowns.removeClass(_),
                            t.dropdownToggle.removeClass(m),
                            t.dropdownList.removeClass(y),
                            t.overlay &&
                            t.overlay.children().length &&
                            (T.length ? t.menu.insertAfter(T) : t.menu.prependTo(t.parent),
                                t.overlay.attr("style", "").hide()),
                            t.el.triggerHandler("w-close"),
                            t.button.attr("aria-expanded", "false");
                    }
                }
                return s;
            })
        );
    },
    function (t, e, n) {
        "use strict";
        var r = n(4),
            i = n(36),
            o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35,
            },
            a =
                'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        r.define(
            "slider",
            (t.exports = function (t, e) {
                var n,
                    u,
                    c,
                    s,
                    f = {},
                    l = t.tram,
                    d = t(document),
                    p = r.env(),
                    v = ".w-slider",
                    h = '<div class="w-slider-dot" data-wf-ignore />',
                    g =
                        '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />',
                    E = i.triggers;
                function _() {
                    (n = d.find(v)).length &&
                        (n.each(I),
                            (s = null),
                            c || (m(), r.resize.on(y), r.redraw.on(f.redraw)));
                }
                function m() {
                    r.resize.off(y), r.redraw.off(f.redraw);
                }
                function y() {
                    n.filter(":visible").each(D);
                }
                function I(e, n) {
                    var r = t(n),
                        i = t.data(n, v);
                    i ||
                        (i = t.data(n, v, {
                            index: 0,
                            depth: 1,
                            hasFocus: { keyboard: !1, mouse: !1 },
                            el: r,
                            config: {},
                        })),
                        (i.mask = r.children(".w-slider-mask")),
                        (i.left = r.children(".w-slider-arrow-left")),
                        (i.right = r.children(".w-slider-arrow-right")),
                        (i.nav = r.children(".w-slider-nav")),
                        (i.slides = i.mask.children(".w-slide")),
                        i.slides.each(E.reset),
                        s && (i.maskWidth = 0),
                        void 0 === r.attr("role") && r.attr("role", "region"),
                        void 0 === r.attr("aria-label") && r.attr("aria-label", "carousel");
                    var o = i.mask.attr("id");
                    if (
                        (o || ((o = "w-slider-mask-" + e), i.mask.attr("id", o)),
                            (i.ariaLiveLabel = t(g).appendTo(i.mask)),
                            i.left.attr("role", "button"),
                            i.left.attr("tabindex", "0"),
                            i.left.attr("aria-controls", o),
                            void 0 === i.left.attr("aria-label") &&
                            i.left.attr("aria-label", "previous slide"),
                            i.right.attr("role", "button"),
                            i.right.attr("tabindex", "0"),
                            i.right.attr("aria-controls", o),
                            void 0 === i.right.attr("aria-label") &&
                            i.right.attr("aria-label", "next slide"),
                            !l.support.transform)
                    )
                        return i.left.hide(), i.right.hide(), i.nav.hide(), void (c = !0);
                    i.el.off(v),
                        i.left.off(v),
                        i.right.off(v),
                        i.nav.off(v),
                        b(i),
                        u
                            ? (i.el.on("setting" + v, N(i)), R(i), (i.hasTimer = !1))
                            : (i.el.on("swipe" + v, N(i)),
                                i.left.on("click" + v, A(i)),
                                i.right.on("click" + v, x(i)),
                                i.left.on("keydown" + v, O(i, A)),
                                i.right.on("keydown" + v, O(i, x)),
                                i.nav.on("keydown" + v, "> div", N(i)),
                                i.config.autoplay &&
                                !i.hasTimer &&
                                ((i.hasTimer = !0), (i.timerCount = 1), S(i)),
                                i.el.on("mouseenter" + v, w(i, !0, "mouse")),
                                i.el.on("focusin" + v, w(i, !0, "keyboard")),
                                i.el.on("mouseleave" + v, w(i, !1, "mouse")),
                                i.el.on("focusout" + v, w(i, !1, "keyboard"))),
                        i.nav.on("click" + v, "> div", N(i)),
                        p ||
                        i.mask
                            .contents()
                            .filter(function () {
                                return 3 === this.nodeType;
                            })
                            .remove();
                    var a = r.filter(":hidden");
                    a.show();
                    var f = r.parents(":hidden");
                    f.show(), D(e, n), a.css("display", ""), f.css("display", "");
                }
                function b(t) {
                    var e = { crossOver: 0 };
                    (e.animation = t.el.attr("data-animation") || "slide"),
                        "outin" === e.animation &&
                        ((e.animation = "cross"), (e.crossOver = 0.5)),
                        (e.easing = t.el.attr("data-easing") || "ease");
                    var n = t.el.attr("data-duration");
                    if (
                        ((e.duration = null != n ? parseInt(n, 10) : 500),
                            T(t.el.attr("data-infinite")) && (e.infinite = !0),
                            T(t.el.attr("data-disable-swipe")) && (e.disableSwipe = !0),
                            T(t.el.attr("data-hide-arrows"))
                                ? (e.hideArrows = !0)
                                : t.config.hideArrows && (t.left.show(), t.right.show()),
                            T(t.el.attr("data-autoplay")))
                    ) {
                        (e.autoplay = !0),
                            (e.delay = parseInt(t.el.attr("data-delay"), 10) || 2e3),
                            (e.timerMax = parseInt(t.el.attr("data-autoplay-limit"), 10));
                        var r = "mousedown" + v + " touchstart" + v;
                        u ||
                            t.el.off(r).one(r, function () {
                                R(t);
                            });
                    }
                    var i = t.right.width();
                    (e.edge = i ? i + 40 : 100), (t.config = e);
                }
                function T(t) {
                    return "1" === t || "true" === t;
                }
                function w(e, n, r) {
                    return function (i) {
                        if (n) e.hasFocus[r] = n;
                        else {
                            if (t.contains(e.el.get(0), i.relatedTarget)) return;
                            if (
                                ((e.hasFocus[r] = n),
                                    (e.hasFocus.mouse && "keyboard" === r) ||
                                    (e.hasFocus.keyboard && "mouse" === r))
                            )
                                return;
                        }
                        n
                            ? (e.ariaLiveLabel.attr("aria-live", "polite"),
                                e.hasTimer && R(e))
                            : (e.ariaLiveLabel.attr("aria-live", "off"), e.hasTimer && S(e));
                    };
                }
                function O(t, e) {
                    return function (n) {
                        switch (n.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return e(t)(), n.preventDefault(), n.stopPropagation();
                        }
                    };
                }
                function A(t) {
                    return function () {
                        L(t, { index: t.index - 1, vector: -1 });
                    };
                }
                function x(t) {
                    return function () {
                        L(t, { index: t.index + 1, vector: 1 });
                    };
                }
                function S(t) {
                    R(t);
                    var e = t.config,
                        n = e.timerMax;
                    (n && t.timerCount++ > n) ||
                        (t.timerId = window.setTimeout(function () {
                            null == t.timerId || u || (x(t)(), S(t));
                        }, e.delay));
                }
                function R(t) {
                    window.clearTimeout(t.timerId), (t.timerId = null);
                }
                function N(n) {
                    return function (i, a) {
                        a = a || {};
                        var c = n.config;
                        if (u && "setting" === i.type) {
                            if ("prev" === a.select) return A(n)();
                            if ("next" === a.select) return x(n)();
                            if ((b(n), P(n), null == a.select)) return;
                            !(function (n, r) {
                                var i = null;
                                r === n.slides.length && (_(), P(n)),
                                    e.each(n.anchors, function (e, n) {
                                        t(e.els).each(function (e, o) {
                                            t(o).index() === r && (i = n);
                                        });
                                    }),
                                    null != i && L(n, { index: i, immediate: !0 });
                            })(n, a.select);
                        } else {
                            if ("swipe" === i.type) {
                                if (c.disableSwipe) return;
                                if (r.env("editor")) return;
                                return "left" === a.direction
                                    ? x(n)()
                                    : "right" === a.direction
                                        ? A(n)()
                                        : void 0;
                            }
                            if (n.nav.has(i.target).length) {
                                var s = t(i.target).index();
                                if (
                                    ("click" === i.type && L(n, { index: s }),
                                        "keydown" === i.type)
                                )
                                    switch (i.keyCode) {
                                        case o.ENTER:
                                        case o.SPACE:
                                            L(n, { index: s }), i.preventDefault();
                                            break;
                                        case o.ARROW_LEFT:
                                        case o.ARROW_UP:
                                            C(n.nav, Math.max(s - 1, 0)), i.preventDefault();
                                            break;
                                        case o.ARROW_RIGHT:
                                        case o.ARROW_DOWN:
                                            C(n.nav, Math.min(s + 1, n.pages)), i.preventDefault();
                                            break;
                                        case o.HOME:
                                            C(n.nav, 0), i.preventDefault();
                                            break;
                                        case o.END:
                                            C(n.nav, n.pages), i.preventDefault();
                                            break;
                                        default:
                                            return;
                                    }
                            }
                        }
                    };
                }
                function C(t, e) {
                    var n = t.children().eq(e).focus();
                    t.children().not(n);
                }
                function L(e, n) {
                    n = n || {};
                    var r = e.config,
                        i = e.anchors;
                    e.previous = e.index;
                    var o = n.index,
                        c = {};
                    o < 0
                        ? ((o = i.length - 1),
                            r.infinite &&
                            ((c.x = -e.endX), (c.from = 0), (c.to = i[0].width)))
                        : o >= i.length &&
                        ((o = 0),
                            r.infinite &&
                            ((c.x = i[i.length - 1].width),
                                (c.from = -i[i.length - 1].x),
                                (c.to = c.from - c.x))),
                        (e.index = o);
                    var f = e.nav
                        .children()
                        .eq(o)
                        .addClass("w-active")
                        .attr("aria-selected", "true")
                        .attr("tabindex", "0");
                    e.nav
                        .children()
                        .not(f)
                        .removeClass("w-active")
                        .attr("aria-selected", "false")
                        .attr("tabindex", "-1"),
                        r.hideArrows &&
                        (e.index === i.length - 1 ? e.right.hide() : e.right.show(),
                            0 === e.index ? e.left.hide() : e.left.show());
                    var d = e.offsetX || 0,
                        p = (e.offsetX = -i[e.index].x),
                        v = { x: p, opacity: 1, visibility: "" },
                        h = t(i[e.index].els),
                        g = t(i[e.previous] && i[e.previous].els),
                        _ = e.slides.not(h),
                        m = r.animation,
                        y = r.easing,
                        I = Math.round(r.duration),
                        b = n.vector || (e.index > e.previous ? 1 : -1),
                        T = "opacity " + I + "ms " + y,
                        w = "transform " + I + "ms " + y;
                    if (
                        (h.find(a).removeAttr("tabindex"),
                            h.removeAttr("aria-hidden"),
                            h.find("*").removeAttr("aria-hidden"),
                            _.find(a).attr("tabindex", "-1"),
                            _.attr("aria-hidden", "true"),
                            _.find("*").attr("aria-hidden", "true"),
                            u || (h.each(E.intro), _.each(E.outro)),
                            n.immediate && !s)
                    )
                        return l(h).set(v), void x();
                    if (e.index !== e.previous) {
                        if (
                            (e.ariaLiveLabel.text(
                                "Slide ".concat(o + 1, " of ").concat(i.length, ".")
                            ),
                                "cross" === m)
                        ) {
                            var O = Math.round(I - I * r.crossOver),
                                A = Math.round(I - O);
                            return (
                                (T = "opacity " + O + "ms " + y),
                                l(g).set({ visibility: "" }).add(T).start({ opacity: 0 }),
                                void l(h)
                                    .set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ })
                                    .add(T)
                                    .wait(A)
                                    .then({ opacity: 1 })
                                    .then(x)
                            );
                        }
                        if ("fade" === m)
                            return (
                                l(g).set({ visibility: "" }).stop(),
                                void l(h)
                                    .set({ visibility: "", x: p, opacity: 0, zIndex: e.depth++ })
                                    .add(T)
                                    .start({ opacity: 1 })
                                    .then(x)
                            );
                        if ("over" === m)
                            return (
                                (v = { x: e.endX }),
                                l(g).set({ visibility: "" }).stop(),
                                void l(h)
                                    .set({
                                        visibility: "",
                                        zIndex: e.depth++,
                                        x: p + i[e.index].width * b,
                                    })
                                    .add(w)
                                    .start({ x: p })
                                    .then(x)
                            );
                        r.infinite && c.x
                            ? (l(e.slides.not(g))
                                .set({ visibility: "", x: c.x })
                                .add(w)
                                .start({ x: p }),
                                l(g)
                                    .set({ visibility: "", x: c.from })
                                    .add(w)
                                    .start({ x: c.to }),
                                (e.shifted = g))
                            : (r.infinite &&
                                e.shifted &&
                                (l(e.shifted).set({ visibility: "", x: d }),
                                    (e.shifted = null)),
                                l(e.slides).set({ visibility: "" }).add(w).start({ x: p }));
                    }
                    function x() {
                        (h = t(i[e.index].els)),
                            (_ = e.slides.not(h)),
                            "slide" !== m && (v.visibility = "hidden"),
                            l(_).set(v);
                    }
                }
                function D(e, n) {
                    var r = t.data(n, v);
                    if (r)
                        return (function (t) {
                            var e = t.mask.width();
                            if (t.maskWidth !== e) return (t.maskWidth = e), !0;
                            return !1;
                        })(r)
                            ? P(r)
                            : void (
                                u &&
                                (function (e) {
                                    var n = 0;
                                    if (
                                        (e.slides.each(function (e, r) {
                                            n += t(r).outerWidth(!0);
                                        }),
                                            e.slidesWidth !== n)
                                    )
                                        return (e.slidesWidth = n), !0;
                                    return !1;
                                })(r) &&
                                P(r)
                            );
                }
                function P(e) {
                    var n = 1,
                        r = 0,
                        i = 0,
                        o = 0,
                        a = e.maskWidth,
                        c = a - e.config.edge;
                    c < 0 && (c = 0),
                        (e.anchors = [{ els: [], x: 0, width: 0 }]),
                        e.slides.each(function (u, s) {
                            i - r > c &&
                                (n++,
                                    (r += a),
                                    (e.anchors[n - 1] = { els: [], x: i, width: 0 })),
                                (o = t(s).outerWidth(!0)),
                                (i += o),
                                (e.anchors[n - 1].width += o),
                                e.anchors[n - 1].els.push(s);
                            var f = u + 1 + " of " + e.slides.length;
                            t(s).attr("aria-label", f), t(s).attr("role", "group");
                        }),
                        (e.endX = i),
                        u && (e.pages = null),
                        e.nav.length &&
                        e.pages !== n &&
                        ((e.pages = n),
                            (function (e) {
                                var n,
                                    r = [],
                                    i = e.el.attr("data-nav-spacing");
                                i && (i = parseFloat(i) + "px");
                                for (var o = 0, a = e.pages; o < a; o++)
                                    (n = t(h))
                                        .attr("aria-label", "Show slide " + (o + 1) + " of " + a)
                                        .attr("aria-selected", "false")
                                        .attr("role", "button")
                                        .attr("tabindex", "-1"),
                                        e.nav.hasClass("w-num") && n.text(o + 1),
                                        null != i && n.css({ "margin-left": i, "margin-right": i }),
                                        r.push(n);
                                e.nav.empty().append(r);
                            })(e));
                    var s = e.index;
                    s >= n && (s = n - 1), L(e, { immediate: !0, index: s });
                }
                return (
                    (f.ready = function () {
                        (u = r.env("design")), _();
                    }),
                    (f.design = function () {
                        (u = !0), _();
                    }),
                    (f.preview = function () {
                        (u = !1), _();
                    }),
                    (f.redraw = function () {
                        (s = !0), _();
                    }),
                    (f.destroy = m),
                    f
                );
            })
        );
    },
]);
/**
 * ----------------------------------------------------------------------
 * digipants: Interactions 2.0: Init
 */
digipants.require("ix2").init({
    events: {
        e: {
            id: "e",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-3",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-2",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".change-icon",
                originalId:
                    "5e8c766c52ed0537898cdb80|41c9c6c5-f7d4-3fd9-0b2c-7ae27304ddf7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".change-icon",
                    originalId:
                        "5e8c766c52ed0537898cdb80|41c9c6c5-f7d4-3fd9-0b2c-7ae27304ddf7",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1516348724475,
        },
        "e-2": {
            id: "e-2",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-4",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-793",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".change-icon",
                originalId:
                    "5e8c766c52ed0537898cdb80|41c9c6c5-f7d4-3fd9-0b2c-7ae27304ddf7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".change-icon",
                    originalId:
                        "5e8c766c52ed0537898cdb80|41c9c6c5-f7d4-3fd9-0b2c-7ae27304ddf7",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1516348724475,
        },
        "e-11": {
            id: "e-11",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_OPEN",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-5",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-701",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".nav-dropdown",
                originalId: "52b687cd-87ec-417c-3faf-de06b43fdf71",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-dropdown",
                    originalId: "52b687cd-87ec-417c-3faf-de06b43fdf71",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1531045431416,
        },
        "e-12": {
            id: "e-12",
            name: "",
            animationType: "custom",
            eventTypeId: "DROPDOWN_CLOSE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-6",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-700",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".nav-dropdown",
                originalId: "52b687cd-87ec-417c-3faf-de06b43fdf71",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-dropdown",
                    originalId: "52b687cd-87ec-417c-3faf-de06b43fdf71",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1531045431431,
        },
        "e-30": {
            id: "e-30",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-31",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".card",
                originalId:
                    "5e8c766c52ed0504f58cdae5|33c5a576-eec0-06c7-10ec-4cc94a022422",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".card",
                    originalId:
                        "5e8c766c52ed0504f58cdae5|33c5a576-eec0-06c7-10ec-4cc94a022422",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1532345317351,
        },
        "e-31": {
            id: "e-31",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-11",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-30",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".card",
                originalId:
                    "5e8c766c52ed0504f58cdae5|33c5a576-eec0-06c7-10ec-4cc94a022422",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".card",
                    originalId:
                        "5e8c766c52ed0504f58cdae5|33c5a576-eec0-06c7-10ec-4cc94a022422",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1532345317352,
        },
        "e-38": {
            id: "e-38",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-114",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-39",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".instagram-photo",
                originalId: "42a34d65-b75a-d2b1-c80d-c5ba0edc3aa7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".instagram-photo",
                    originalId: "42a34d65-b75a-d2b1-c80d-c5ba0edc3aa7",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1532429759795,
        },
        "e-39": {
            id: "e-39",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-115",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-38",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".instagram-photo",
                originalId: "42a34d65-b75a-d2b1-c80d-c5ba0edc3aa7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".instagram-photo",
                    originalId: "42a34d65-b75a-d2b1-c80d-c5ba0edc3aa7",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1532429759795,
        },
        "e-318": {
            id: "e-318",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-10",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-319",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89|f995b809-b6aa-8c81-95be-a2a356d938a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89|f995b809-b6aa-8c81-95be-a2a356d938a7",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1533124226594,
        },
        "e-319": {
            id: "e-319",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-11",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-318",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89|f995b809-b6aa-8c81-95be-a2a356d938a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89|f995b809-b6aa-8c81-95be-a2a356d938a7",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1533124226594,
        },
        "e-378": {
            id: "e-378",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-17",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-379",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".sidebar-instagram-link",
                originalId:
                    "5e8c766c52ed05f7808cdba4|20514fda-50f3-8992-0442-6a7155bc8301",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".sidebar-instagram-link",
                    originalId:
                        "5e8c766c52ed05f7808cdba4|20514fda-50f3-8992-0442-6a7155bc8301",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1534414428888,
        },
        "e-392": {
            id: "e-392",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-25",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-393",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".testimonials-arrow",
                originalId:
                    "5e8c766c52ed050ee38cdbbc|7e041254-a896-9189-99b0-0441395a543a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonials-arrow",
                    originalId:
                        "5e8c766c52ed050ee38cdbbc|7e041254-a896-9189-99b0-0441395a543a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1541924689365,
        },
        "e-393": {
            id: "e-393",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-26",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-392",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".testimonials-arrow",
                originalId:
                    "5e8c766c52ed050ee38cdbbc|7e041254-a896-9189-99b0-0441395a543a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonials-arrow",
                    originalId:
                        "5e8c766c52ed050ee38cdbbc|7e041254-a896-9189-99b0-0441395a543a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1541924689366,
        },
        "e-664": {
            id: "e-664",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-114",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-665",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v1",
                originalId:
                    "5e8c766c52ed05fe058cdb34|f35d92da-edb3-6d01-92f1-b5ee14a26831",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v1",
                    originalId:
                        "5e8c766c52ed05fe058cdb34|f35d92da-edb3-6d01-92f1-b5ee14a26831",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1542707064302,
        },
        "e-665": {
            id: "e-665",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-115",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-664",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v1",
                originalId:
                    "5e8c766c52ed05fe058cdb34|f35d92da-edb3-6d01-92f1-b5ee14a26831",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v1",
                    originalId:
                        "5e8c766c52ed05fe058cdb34|f35d92da-edb3-6d01-92f1-b5ee14a26831",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1542707064306,
        },
        "e-668": {
            id: "e-668",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-43",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1679",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-work-link",
                originalId:
                    "5e8c766c52ed051d008cdb8f|b20ceec4-eb51-85c2-1a14-d679636e9847",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-work-link",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|b20ceec4-eb51-85c2-1a14-d679636e9847",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1542903516009,
        },
        "e-669": {
            id: "e-669",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-44",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1678",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-work-link",
                originalId:
                    "5e8c766c52ed051d008cdb8f|b20ceec4-eb51-85c2-1a14-d679636e9847",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-work-link",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|b20ceec4-eb51-85c2-1a14-d679636e9847",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1542903516014,
        },
        "e-698": {
            id: "e-698",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-52",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-699",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".testimonials-v1-slide",
                originalId:
                    "5e8c766c52ed05b9278cdbae|fa3bb5e7-88fe-dbf0-a08d-56668919e943",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonials-v1-slide",
                    originalId:
                        "5e8c766c52ed05b9278cdbae|fa3bb5e7-88fe-dbf0-a08d-56668919e943",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1542994702674,
        },
        "e-699": {
            id: "e-699",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-53",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-698",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".testimonials-v1-slide",
                originalId:
                    "5e8c766c52ed05b9278cdbae|fa3bb5e7-88fe-dbf0-a08d-56668919e943",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".testimonials-v1-slide",
                    originalId:
                        "5e8c766c52ed05b9278cdbae|fa3bb5e7-88fe-dbf0-a08d-56668919e943",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1542994702678,
        },
        "e-726": {
            id: "e-726",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-56",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-727",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v2-thumb",
                originalId:
                    "5e8c766c52ed0508a88cdb8a|75fa057c-2ad2-5ec0-ecc4-1680a6f180c4",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v2-thumb",
                    originalId:
                        "5e8c766c52ed0508a88cdb8a|75fa057c-2ad2-5ec0-ecc4-1680a6f180c4",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1543337107612,
        },
        "e-727": {
            id: "e-727",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-57",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-726",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v2-thumb",
                originalId:
                    "5e8c766c52ed0508a88cdb8a|75fa057c-2ad2-5ec0-ecc4-1680a6f180c4",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v2-thumb",
                    originalId:
                        "5e8c766c52ed0508a88cdb8a|75fa057c-2ad2-5ec0-ecc4-1680a6f180c4",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1543337107617,
        },
        "e-767": {
            id: "e-767",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-58",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-768",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".skill-bar",
                originalId:
                    "5e8c766c52ed0521e98cdbac|7afaebdc-d48b-42a5-77ef-dab5d8b6f2e2",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".skill-bar",
                    originalId:
                        "5e8c766c52ed0521e98cdbac|7afaebdc-d48b-42a5-77ef-dab5d8b6f2e2",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1543511447506,
        },
        "e-846": {
            id: "e-846",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-74",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-847",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".client",
                originalId: "10e6a1f3-bb86-8093-3f7e-851b4d97fbba",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".client",
                    originalId: "10e6a1f3-bb86-8093-3f7e-851b4d97fbba",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556544470904,
        },
        "e-847": {
            id: "e-847",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-75",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-846",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".client",
                originalId: "10e6a1f3-bb86-8093-3f7e-851b4d97fbba",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".client",
                    originalId: "10e6a1f3-bb86-8093-3f7e-851b4d97fbba",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556544470908,
        },
        "e-848": {
            id: "e-848",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-76",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-849",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".accordion-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1554546983501,
        },
        "e-849": {
            id: "e-849",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-77",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-848",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".accordion-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1554546983504,
        },
        "e-850": {
            id: "e-850",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-78",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-851",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".accordion-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1554549983153,
        },
        "e-851": {
            id: "e-851",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-79",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-850",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".accordion-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1554549983157,
        },
        "e-852": {
            id: "e-852",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-853" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".accordion-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".accordion-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|111fdb0a-78af-7ab0-b676-19462564b39c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1554550382367,
        },
        "e-864": {
            id: "e-864",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-33",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-865",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".marker-link",
                originalId:
                    "5e8c766c52ed05a0748cdb90|419a2a54-e6b8-383d-6605-0e1a05261c3b",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".marker-link",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|419a2a54-e6b8-383d-6605-0e1a05261c3b",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556714983213,
        },
        "e-865": {
            id: "e-865",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-109",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-864",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".marker-link",
                originalId:
                    "5e8c766c52ed05a0748cdb90|419a2a54-e6b8-383d-6605-0e1a05261c3b",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".marker-link",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|419a2a54-e6b8-383d-6605-0e1a05261c3b",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556714983215,
        },
        "e-881": {
            id: "e-881",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-3",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-882",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".side-nav-link",
                originalId:
                    "5e8c766c52ed05a0748cdb90|706cd246-7acc-503d-0d08-f9454cbf826e",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".side-nav-link",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|706cd246-7acc-503d-0d08-f9454cbf826e",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556791443798,
        },
        "e-882": {
            id: "e-882",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-4",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-881",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".side-nav-link",
                originalId:
                    "5e8c766c52ed05a0748cdb90|706cd246-7acc-503d-0d08-f9454cbf826e",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".side-nav-link",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|706cd246-7acc-503d-0d08-f9454cbf826e",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556791443801,
        },
        "e-889": {
            id: "e-889",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-3",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-890",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".page-link.current",
                originalId:
                    "5e8c766c52ed054a7a8cdb8e|32756bdc-46a5-66b4-96bd-b516cf8c1679",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    id: "5e8c766c52ed054a7a8cdb8e|32756bdc-46a5-66b4-96bd-b516cf8c1679",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556823197412,
        },
        "e-890": {
            id: "e-890",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-4",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-889",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".page-link.current",
                originalId:
                    "5e8c766c52ed054a7a8cdb8e|32756bdc-46a5-66b4-96bd-b516cf8c1679",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    id: "5e8c766c52ed054a7a8cdb8e|32756bdc-46a5-66b4-96bd-b516cf8c1679",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556823197412,
        },
        "e-1005": {
            id: "e-1005",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-118", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed055d178cdb5a",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed055d178cdb5a",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-118-p",
                    smoothing: 70,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1574680632178,
        },
        "e-1012": {
            id: "e-1012",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-87",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1013",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5e8c766c52ed05f7808cdba4|a79f6090-4df8-fbb3-f6fa-40a61af695d4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05f7808cdba4|a79f6090-4df8-fbb3-f6fa-40a61af695d4",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1574762657747,
        },
        "e-1013": {
            id: "e-1013",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-88",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1012",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5e8c766c52ed05f7808cdba4|a79f6090-4df8-fbb3-f6fa-40a61af695d4",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05f7808cdba4|a79f6090-4df8-fbb3-f6fa-40a61af695d4",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1574762657752,
        },
        "e-1028": {
            id: "e-1028",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-90",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1029",
                },
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".top",
                originalId: "2cdc3f8a-82b6-8d7e-fa30-aa2fcf7bf643",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".top",
                    originalId: "2cdc3f8a-82b6-8d7e-fa30-aa2fcf7bf643",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: -40,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1569085396204,
        },
        "e-1029": {
            id: "e-1029",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_OUT_OF_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-91",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1028",
                },
            },
            mediaQueries: ["main", "medium"],
            target: {
                selector: ".top",
                originalId: "2cdc3f8a-82b6-8d7e-fa30-aa2fcf7bf643",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".top",
                    originalId: "2cdc3f8a-82b6-8d7e-fa30-aa2fcf7bf643",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: -20,
                scrollOffsetUnit: "%",
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1569085396214,
        },
        "e-1030": {
            id: "e-1030",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1031" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "7d773f7c-12e2-4119-13c5-94a2a6255983",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "7d773f7c-12e2-4119-13c5-94a2a6255983",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1574775098642,
        },
        "e-1089": {
            id: "e-1089",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1088",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05f7808cdba4",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05f7808cdba4",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113594832,
        },
        "e-1095": {
            id: "e-1095",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1094",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed056bbf8cdb21",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed056bbf8cdb21",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113695066,
        },
        "e-1097": {
            id: "e-1097",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1096",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05bba28cdb92",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05bba28cdb92",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113714106,
        },
        "e-1099": {
            id: "e-1099",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1098",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed059ea38cdb97",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed059ea38cdb97",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113727503,
        },
        "e-1101": {
            id: "e-1101",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1100",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0537898cdb80",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0537898cdb80",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113739068,
        },
        "e-1103": {
            id: "e-1103",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1102",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed054a7a8cdb8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed054a7a8cdb8e",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113765732,
        },
        "e-1105": {
            id: "e-1105",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1104",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113922305,
        },
        "e-1107": {
            id: "e-1107",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1106",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0523cd8cdb8b",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0523cd8cdb8b",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113946170,
        },
        "e-1109": {
            id: "e-1109",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1108",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0551328cdb96",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0551328cdb96",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113970533,
        },
        "e-1111": {
            id: "e-1111",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1110",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed055d178cdb5a",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed055d178cdb5a",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575113993039,
        },
        "e-1113": {
            id: "e-1113",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1112",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0571f88cdb91",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0571f88cdb91",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575114039602,
        },
        "e-1115": {
            id: "e-1115",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1114",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed057a668cdb98",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed057a668cdb98",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575114063103,
        },
        "e-1116": {
            id: "e-1116",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-114",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1117",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".team-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|69f5d3a9-64ce-8572-e078-e5f00c48625a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".team-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|69f5d3a9-64ce-8572-e078-e5f00c48625a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575196719993,
        },
        "e-1117": {
            id: "e-1117",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-115",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1116",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".team-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|69f5d3a9-64ce-8572-e078-e5f00c48625a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".team-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|69f5d3a9-64ce-8572-e078-e5f00c48625a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575196719999,
        },
        "e-1175": {
            id: "e-1175",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "FADE_EFFECT",
                instant: false,
                config: { actionListId: "fadeIn", autoStopEventId: "e-1176" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".step",
                originalId:
                    "5e8c766c52ed05659a8cdb9b|a77b0daa-e0b5-cdaa-5a78-0ced1e980c21",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".step",
                    originalId:
                        "5e8c766c52ed05659a8cdb9b|a77b0daa-e0b5-cdaa-5a78-0ced1e980c21",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: null,
                effectIn: true,
            },
            createdOn: 1575547344575,
        },
        "e-1180": {
            id: "e-1180",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1179",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575552020779,
        },
        "e-1235": {
            id: "e-1235",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-101",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1236",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-works-button",
                originalId: "046a4c69-d109-eb82-a22b-b2fed92061b0",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-works-button",
                    originalId: "046a4c69-d109-eb82-a22b-b2fed92061b0",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1582712667723,
        },
        "e-1236": {
            id: "e-1236",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-102",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1235",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-works-button",
                originalId: "046a4c69-d109-eb82-a22b-b2fed92061b0",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-works-button",
                    originalId: "046a4c69-d109-eb82-a22b-b2fed92061b0",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1582712667740,
        },
        "e-1241": {
            id: "e-1241",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-104", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".gallery",
                originalId:
                    "5e8c766c52ed051d008cdb8f|f2ba0e63-cdf4-cfa8-b5cd-7e4e418621b9",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".gallery",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|f2ba0e63-cdf4-cfa8-b5cd-7e4e418621b9",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-104-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 94,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-104-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 94,
                    restingState: 50,
                },
            ],
            createdOn: 1583056452095,
        },
        "e-1242": {
            id: "e-1242",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-1243" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".gallery-link",
                originalId:
                    "5e8c766c52ed051d008cdb8f|8198c0a3-e7f0-ec27-ac5c-5d6b2866606a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".gallery-link",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|8198c0a3-e7f0-ec27-ac5c-5d6b2866606a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1583056741985,
        },
        "e-1244": {
            id: "e-1244",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-107",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1245",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-link-3",
                originalId: "1304e720-db32-2285-6908-460205bf92db",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-link-3",
                    originalId: "1304e720-db32-2285-6908-460205bf92db",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583063200627,
        },
        "e-1245": {
            id: "e-1245",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-108",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1244",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-link-3",
                originalId: "1304e720-db32-2285-6908-460205bf92db",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-link-3",
                    originalId: "1304e720-db32-2285-6908-460205bf92db",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583063200642,
        },
        "e-1266": {
            id: "e-1266",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-107",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1267",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".link",
                originalId:
                    "5e8c766c52ed05a0748cdb90|49fbcc13-7526-661c-94d1-3aa483c80f4c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".link",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|49fbcc13-7526-661c-94d1-3aa483c80f4c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583239312787,
        },
        "e-1267": {
            id: "e-1267",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-108",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1266",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".link",
                originalId:
                    "5e8c766c52ed05a0748cdb90|49fbcc13-7526-661c-94d1-3aa483c80f4c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".link",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|49fbcc13-7526-661c-94d1-3aa483c80f4c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583239312802,
        },
        "e-1298": {
            id: "e-1298",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-113", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".hero-v3-work-card",
                originalId:
                    "5e8c766c52ed0516698cdb99|84cbb28a-aad8-230c-6f89-90d27be85c96",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".hero-v3-work-card",
                    originalId:
                        "5e8c766c52ed0516698cdb99|84cbb28a-aad8-230c-6f89-90d27be85c96",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-113-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-113-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
            ],
            createdOn: 1583585541533,
        },
        "e-1307": {
            id: "e-1307",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_BIG_EFFECT",
                instant: false,
                config: { actionListId: "growBigIn", autoStopEventId: "e-1308" },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".feature-step-line",
                originalId:
                    "5e8c766c52ed0516698cdb99|74d4d943-4f4c-85fd-a67c-ab2f2613954c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".feature-step-line",
                    originalId:
                        "5e8c766c52ed0516698cdb99|74d4d943-4f4c-85fd-a67c-ab2f2613954c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1000,
                direction: null,
                effectIn: true,
            },
            createdOn: 1583665718795,
        },
        "e-1342": {
            id: "e-1342",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-107",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1343",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".contact-v1-link",
                originalId:
                    "5e8c766c52ed051b148cdb0e|52ed489c-9618-eb1f-c40c-89fb64240312",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".contact-v1-link",
                    originalId:
                        "5e8c766c52ed051b148cdb0e|52ed489c-9618-eb1f-c40c-89fb64240312",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583840378252,
        },
        "e-1343": {
            id: "e-1343",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-108",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1342",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".contact-v1-link",
                originalId:
                    "5e8c766c52ed051b148cdb0e|52ed489c-9618-eb1f-c40c-89fb64240312",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".contact-v1-link",
                    originalId:
                        "5e8c766c52ed051b148cdb0e|52ed489c-9618-eb1f-c40c-89fb64240312",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583840378267,
        },
        "e-1358": {
            id: "e-1358",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1357",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05cbca8cdb9d",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05cbca8cdb9d",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583841696295,
        },
        "e-1359": {
            id: "e-1359",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1360" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05cbca8cdb9d|fa811280-0f56-5d22-19c8-2ce77debd9f5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05cbca8cdb9d|fa811280-0f56-5d22-19c8-2ce77debd9f5",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1583853130690,
        },
        "e-1361": {
            id: "e-1361",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1362" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05cbca8cdb9d|fa811280-0f56-5d22-19c8-2ce77debda00",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05cbca8cdb9d|fa811280-0f56-5d22-19c8-2ce77debda00",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1583853195572,
        },
        "e-1365": {
            id: "e-1365",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_BIG_EFFECT",
                instant: false,
                config: { actionListId: "growBigIn", autoStopEventId: "e-1366" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".promo-social-line",
                originalId:
                    "5e8c766c52ed05cbca8cdb9d|06d499fa-7506-e003-1395-8feba7d12cc2",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".promo-social-line",
                    originalId:
                        "5e8c766c52ed05cbca8cdb9d|06d499fa-7506-e003-1395-8feba7d12cc2",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: null,
                effectIn: true,
            },
            createdOn: 1583853286213,
        },
        "e-1371": {
            id: "e-1371",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-113", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v3",
                originalId:
                    "5e8c766c52ed0508a88cdb8a|d07eaca4-f0d9-7c6a-d45e-c46213d42c18",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v3",
                    originalId:
                        "5e8c766c52ed0508a88cdb8a|d07eaca4-f0d9-7c6a-d45e-c46213d42c18",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-113-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-113-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
            ],
            createdOn: 1583925111332,
        },
        "e-1372": {
            id: "e-1372",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-114",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1373",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v3",
                originalId:
                    "5e8c766c52ed0508a88cdb8a|d07eaca4-f0d9-7c6a-d45e-c46213d42c18",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v3",
                    originalId:
                        "5e8c766c52ed0508a88cdb8a|d07eaca4-f0d9-7c6a-d45e-c46213d42c18",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583925523116,
        },
        "e-1373": {
            id: "e-1373",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-115",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1372",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v3",
                originalId:
                    "5e8c766c52ed0508a88cdb8a|d07eaca4-f0d9-7c6a-d45e-c46213d42c18",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v3",
                    originalId:
                        "5e8c766c52ed0508a88cdb8a|d07eaca4-f0d9-7c6a-d45e-c46213d42c18",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1583925523134,
        },
        "e-1374": {
            id: "e-1374",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-113", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".instagram-photo",
                originalId: "42a34d65-b75a-d2b1-c80d-c5ba0edc3aa7",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".instagram-photo",
                    originalId: "42a34d65-b75a-d2b1-c80d-c5ba0edc3aa7",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-113-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-113-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
            ],
            createdOn: 1583927485386,
        },
        "e-1375": {
            id: "e-1375",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-113", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v1",
                originalId:
                    "5e8c766c52ed05a0748cdb90|6477b581-c534-25be-921b-24ab5d2e0a76",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v1",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|6477b581-c534-25be-921b-24ab5d2e0a76",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-113-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-113-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
            ],
            createdOn: 1583928489337,
        },
        "e-1381": {
            id: "e-1381",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-111",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1382",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".gallery-link",
                originalId:
                    "5e8c766c52ed051d008cdb8f|8198c0a3-e7f0-ec27-ac5c-5d6b2866606a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".gallery-link",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|8198c0a3-e7f0-ec27-ac5c-5d6b2866606a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1584005495565,
        },
        "e-1382": {
            id: "e-1382",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-112",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1381",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".gallery-link",
                originalId:
                    "5e8c766c52ed051d008cdb8f|8198c0a3-e7f0-ec27-ac5c-5d6b2866606a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".gallery-link",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|8198c0a3-e7f0-ec27-ac5c-5d6b2866606a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1584005495581,
        },
        "e-1384": {
            id: "e-1384",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-113", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".team-card",
                originalId:
                    "5e8c766c52ed0551f78cdb8d|69f5d3a9-64ce-8572-e078-e5f00c48625a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".team-card",
                    originalId:
                        "5e8c766c52ed0551f78cdb8d|69f5d3a9-64ce-8572-e078-e5f00c48625a",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-113-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-113-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
            ],
            createdOn: 1584008425597,
        },
        "e-1391": {
            id: "e-1391",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-117",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1392",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed054a7a8cdb8e|1735fcdc-8039-f2d7-8ccc-5c2649ba3eea",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed054a7a8cdb8e|1735fcdc-8039-f2d7-8ccc-5c2649ba3eea",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1584023732419,
        },
        "e-1395": {
            id: "e-1395",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1396" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed054a7a8cdb8e|ccda1809-0760-bb0d-26da-a3d18b0794c0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed054a7a8cdb8e|ccda1809-0760-bb0d-26da-a3d18b0794c0",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584025151139,
        },
        "e-1397": {
            id: "e-1397",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-9", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "7d773f7c-12e2-4119-13c5-94a2a625598b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "7d773f7c-12e2-4119-13c5-94a2a625598b",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-9-p",
                    smoothing: 50,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1584034493131,
        },
        "e-1401": {
            id: "e-1401",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1402" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".change",
                originalId:
                    "5e8c766c52ed0537898cdb80|d45825ff-7675-53eb-16b8-ec804c885e8b",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".change",
                    originalId:
                        "5e8c766c52ed0537898cdb80|d45825ff-7675-53eb-16b8-ec804c885e8b",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584036558646,
        },
        "e-1405": {
            id: "e-1405",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-9", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89|4848e2e0-1df5-b7f0-56fa-988214fe199d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89|4848e2e0-1df5-b7f0-56fa-988214fe199d",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-9-p",
                    smoothing: 50,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1584039541339,
        },
        "e-1408": {
            id: "e-1408",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-118", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-118-p",
                    smoothing: 70,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1584090419429,
        },
        "e-1411": {
            id: "e-1411",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SHRINK_EFFECT",
                instant: false,
                config: { actionListId: "shrinkIn", autoStopEventId: "e-1412" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "b29028d8-ca22-e617-a56c-abc02f0c3ab6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "b29028d8-ca22-e617-a56c-abc02f0c3ab6",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: null,
                effectIn: true,
            },
            createdOn: 1584099204503,
        },
        "e-1413": {
            id: "e-1413",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1414" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "b29028d8-ca22-e617-a56c-abc02f0c3aaf",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "b29028d8-ca22-e617-a56c-abc02f0c3aaf",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 800,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584099235499,
        },
        "e-1415": {
            id: "e-1415",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1416" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".media-info",
                originalId:
                    "5e8c766c52ed05a0748cdb90|87e5e52d-3a0c-2241-3a63-20243585a221",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".media-info",
                    originalId:
                        "5e8c766c52ed05a0748cdb90|87e5e52d-3a0c-2241-3a63-20243585a221",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 400,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584099761484,
        },
        "e-1445": {
            id: "e-1445",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-111",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1446",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-slide",
                originalId:
                    "5e8c766c52ed051d008cdb8f|cbcf2d03-a89d-395a-6768-fb36f822695a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-slide",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|cbcf2d03-a89d-395a-6768-fb36f822695a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1584262559305,
        },
        "e-1446": {
            id: "e-1446",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-112",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1445",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-slide",
                originalId:
                    "5e8c766c52ed051d008cdb8f|cbcf2d03-a89d-395a-6768-fb36f822695a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-slide",
                    originalId:
                        "5e8c766c52ed051d008cdb8f|cbcf2d03-a89d-395a-6768-fb36f822695a",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1584262559321,
        },
        "e-1510": {
            id: "e-1510",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-113", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v2",
                originalId:
                    "5e8c766c52ed050e708cdb9e|9b0b37cd-3758-2fba-117f-769d345dd235",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v2",
                    originalId:
                        "5e8c766c52ed050e708cdb9e|9b0b37cd-3758-2fba-117f-769d345dd235",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-113-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-113-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 95,
                    restingState: 50,
                },
            ],
            createdOn: 1584295868650,
        },
        "e-1511": {
            id: "e-1511",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-114",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1512",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v2",
                originalId:
                    "5e8c766c52ed050e708cdb9e|9b0b37cd-3758-2fba-117f-769d345dd235",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v2",
                    originalId:
                        "5e8c766c52ed050e708cdb9e|9b0b37cd-3758-2fba-117f-769d345dd235",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1584295884436,
        },
        "e-1512": {
            id: "e-1512",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-115",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1511",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".work-v2",
                originalId:
                    "5e8c766c52ed050e708cdb9e|9b0b37cd-3758-2fba-117f-769d345dd235",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-v2",
                    originalId:
                        "5e8c766c52ed050e708cdb9e|9b0b37cd-3758-2fba-117f-769d345dd235",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1584295884457,
        },
        "e-1513": {
            id: "e-1513",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SHRINK_EFFECT",
                instant: false,
                config: { actionListId: "shrinkIn", autoStopEventId: "e-1514" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".page-bg-text",
                originalId:
                    "5e8c766c52ed05659a8cdb9b|90c59dde-a0b4-ad86-b134-f2cb9521de0e",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".page-bg-text",
                    originalId:
                        "5e8c766c52ed05659a8cdb9b|90c59dde-a0b4-ad86-b134-f2cb9521de0e",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 800,
                direction: null,
                effectIn: true,
            },
            createdOn: 1584524240044,
        },
        "e-1515": {
            id: "e-1515",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1516" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".page-heading",
                originalId:
                    "5e8c766c52ed05659a8cdb9b|90c59dde-a0b4-ad86-b134-f2cb9521de0c",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".page-heading",
                    originalId:
                        "5e8c766c52ed05659a8cdb9b|90c59dde-a0b4-ad86-b134-f2cb9521de0c",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 800,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584524276745,
        },
        "e-1517": {
            id: "e-1517",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1518" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".breadcrumbs",
                originalId:
                    "5e8c766c52ed05659a8cdb9b|90c59dde-a0b4-ad86-b134-f2cb9521de10",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".breadcrumbs",
                    originalId:
                        "5e8c766c52ed05659a8cdb9b|90c59dde-a0b4-ad86-b134-f2cb9521de10",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1000,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584524289936,
        },
        "e-1522": {
            id: "e-1522",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1523" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b|c5651e49-a67b-7b13-2b5a-9ecb5a225742",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b|c5651e49-a67b-7b13-2b5a-9ecb5a225742",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584525311679,
        },
        "e-1528": {
            id: "e-1528",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-1529" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05f7808cdba4|a8032170-19ef-ff3d-7c4c-291f20bf8136",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05f7808cdba4|a8032170-19ef-ff3d-7c4c-291f20bf8136",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1200,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1584525619366,
        },
        "e-1530": {
            id: "e-1530",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInLeft", autoStopEventId: "e-1531" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05f7808cdba4|a8032170-19ef-ff3d-7c4c-291f20bf8178",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05f7808cdba4|a8032170-19ef-ff3d-7c4c-291f20bf8178",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1400,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1584525632970,
        },
        "e-1532": {
            id: "e-1532",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1533" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".post-cards",
                originalId:
                    "5e8c766c52ed05f7808cdba4|abb3e547-3877-cad4-12a4-08ca45c06114",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".post-cards",
                    originalId:
                        "5e8c766c52ed05f7808cdba4|abb3e547-3877-cad4-12a4-08ca45c06114",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584525671887,
        },
        "e-1534": {
            id: "e-1534",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1535" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".blog-tags",
                originalId:
                    "5e8c766c52ed05f7808cdba4|62dc5f4b-8b3b-884d-cb87-66db4539d251",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".blog-tags",
                    originalId:
                        "5e8c766c52ed05f7808cdba4|62dc5f4b-8b3b-884d-cb87-66db4539d251",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1584525700977,
        },
        "e-1676": {
            id: "e-1676",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-119",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1677",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".portfolio-button-2",
                originalId:
                    "5e8c766c52ed05c35b8cdba3|b8b319bc-af5f-9e9f-0219-285f9b7ee404",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".portfolio-button-2",
                    originalId:
                        "5e8c766c52ed05c35b8cdba3|b8b319bc-af5f-9e9f-0219-285f9b7ee404",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575636066328,
        },
        "e-1677": {
            id: "e-1677",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-120",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1676",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".portfolio-button-2",
                originalId:
                    "5e8c766c52ed05c35b8cdba3|b8b319bc-af5f-9e9f-0219-285f9b7ee404",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".portfolio-button-2",
                    originalId:
                        "5e8c766c52ed05c35b8cdba3|b8b319bc-af5f-9e9f-0219-285f9b7ee404",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1575636066339,
        },
        "e-1681": {
            id: "e-1681",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-123",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1682",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".button-2.ghost",
                originalId:
                    "5cb6fbf6e139456d0a4813b1|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button-2.ghost",
                    originalId:
                        "5cb6fbf6e139456d0a4813b1|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556707012550,
        },
        "e-1682": {
            id: "e-1682",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-124",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1681",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".button-2.ghost",
                originalId:
                    "5cb6fbf6e139456d0a4813b1|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button-2.ghost",
                    originalId:
                        "5cb6fbf6e139456d0a4813b1|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556707012552,
        },
        "e-1688": {
            id: "e-1688",
            name: "",
            animationType: "preset",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1687",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5faf7b23edd531199b80b919",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605335843913,
        },
        "e-1689": {
            id: "e-1689",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-87",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1690",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5e8c766c52ed0523cd8cdb8b|220a85df-8012-3bf2-0bbe-deb8a9fd9bbc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0523cd8cdb8b|220a85df-8012-3bf2-0bbe-deb8a9fd9bbc",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605337756317,
        },
        "e-1690": {
            id: "e-1690",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-88",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1689",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5e8c766c52ed0523cd8cdb8b|220a85df-8012-3bf2-0bbe-deb8a9fd9bbc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0523cd8cdb8b|220a85df-8012-3bf2-0bbe-deb8a9fd9bbc",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605337756317,
        },
        "e-1695": {
            id: "e-1695",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-87",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1696",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5faf7b23edd531199b80b919|2261acd9-3ea8-9c22-79d3-ec52410dc7dc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919|2261acd9-3ea8-9c22-79d3-ec52410dc7dc",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605337948199,
        },
        "e-1696": {
            id: "e-1696",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-88",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1695",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5faf7b23edd531199b80b919|2261acd9-3ea8-9c22-79d3-ec52410dc7dc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919|2261acd9-3ea8-9c22-79d3-ec52410dc7dc",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605337948199,
        },
        "e-1697": {
            id: "e-1697",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-87",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1698",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5e8c766c52ed0551328cdb96|7044768f-198a-d2d0-f793-cf697327a94a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0551328cdb96|7044768f-198a-d2d0-f793-cf697327a94a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605338388473,
        },
        "e-1698": {
            id: "e-1698",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-88",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1697",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5e8c766c52ed0551328cdb96|7044768f-198a-d2d0-f793-cf697327a94a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0551328cdb96|7044768f-198a-d2d0-f793-cf697327a94a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605338388473,
        },
        "e-1699": {
            id: "e-1699",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1700" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed050d318cdb95|75393e46-44d3-2cda-237f-824964705fee",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed050d318cdb95|75393e46-44d3-2cda-237f-824964705fee",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1400,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605356836300,
        },
        "e-1701": {
            id: "e-1701",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1702" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed050d318cdb95|8f5bf822-63fe-e6f7-42b3-d5c2f6c0fbf3",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed050d318cdb95|8f5bf822-63fe-e6f7-42b3-d5c2f6c0fbf3",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1600,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605356850266,
        },
        "e-1742": {
            id: "e-1742",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1743" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed056bbf8cdb21|c6eb0302-e481-5f1c-87db-3babc36d21ab",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed056bbf8cdb21|c6eb0302-e481-5f1c-87db-3babc36d21ab",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605408381169,
        },
        "e-1744": {
            id: "e-1744",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-1745" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b|2defc5b4-ef93-4cdf-e319-3c472b7ea83c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b|2defc5b4-ef93-4cdf-e319-3c472b7ea83c",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1605409057029,
        },
        "e-1750": {
            id: "e-1750",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-123",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1755",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".button-2.ghost",
                originalId:
                    "5e3e80d5eb91dfdd7f66e9cb|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button.ghost",
                    originalId:
                        "5e3e80d5eb91dfdd7f66e9cb|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556707012550,
        },
        "e-1755": {
            id: "e-1755",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-124",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1750",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".button-2.ghost",
                originalId:
                    "5e3e80d5eb91dfdd7f66e9cb|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button.ghost",
                    originalId:
                        "5e3e80d5eb91dfdd7f66e9cb|2d3789db-cd13-4414-f09e-3cc96f7ca815",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1556707012552,
        },
        "e-1756": {
            id: "e-1756",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_OPEN",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-127",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1757",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5c427164-3b66-4b73-ddb9-69678daf6e22",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5c427164-3b66-4b73-ddb9-69678daf6e22",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605415811124,
        },
        "e-1757": {
            id: "e-1757",
            name: "",
            animationType: "custom",
            eventTypeId: "NAVBAR_CLOSE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-130",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1756",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5c427164-3b66-4b73-ddb9-69678daf6e22",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5c427164-3b66-4b73-ddb9-69678daf6e22",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605415811144,
        },
        "e-1758": {
            id: "e-1758",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1759" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".post-card-thumb",
                originalId:
                    "5faf7b23edd531199b80b919|79918c5e-6927-257c-d64a-a7234a0450c5",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919|e96886dd-ef31-56b8-0d53-c42b0fdaabcd",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605416632826,
        },
        "e-1760": {
            id: "e-1760",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1761" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".post-card-info",
                originalId:
                    "5faf7b23edd531199b80b919|e96886dd-ef31-56b8-0d53-c42b0fdaabd0",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919|e96886dd-ef31-56b8-0d53-c42b0fdaabd0",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605416639955,
        },
        "e-1762": {
            id: "e-1762",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1763" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".post-card-heading",
                originalId:
                    "5faf7b23edd531199b80b919|e96886dd-ef31-56b8-0d53-c42b0fdaabd6",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919|e96886dd-ef31-56b8-0d53-c42b0fdaabd6",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605416651215,
        },
        "e-1793": {
            id: "e-1793",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-69", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-69-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 50,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-69-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "VIEWPORT",
                    reverse: false,
                    smoothing: 50,
                    restingState: 50,
                },
            ],
            createdOn: 1605439568949,
        },
        "e-1795": {
            id: "e-1795",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1794",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fb11100bb7484a85c71fc24",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fb11100bb7484a85c71fc24",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605442186526,
        },
        "e-1797": {
            id: "e-1797",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1796",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605443418332,
        },
        "e-1798": {
            id: "e-1798",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1799" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed056bbf8cdb21|84c2b4a9-74ae-3ef1-154f-f5fa03cbca0a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed056bbf8cdb21|84c2b4a9-74ae-3ef1-154f-f5fa03cbca0a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605514923420,
        },
        "e-1800": {
            id: "e-1800",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1801" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed056bbf8cdb21|6ff1d45d-b2d3-3275-5478-e8f208e3f127",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed056bbf8cdb21|6ff1d45d-b2d3-3275-5478-e8f208e3f127",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605514961285,
        },
        "e-1802": {
            id: "e-1802",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "GROW_EFFECT",
                instant: false,
                config: { actionListId: "growIn", autoStopEventId: "e-1803" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                selector: ".work-card",
                originalId:
                    "5fb11100bb7484a85c71fc24|412b40ff-7336-ae2f-4370-b9ba55b98c0d",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".work-card",
                    originalId:
                        "5fb11100bb7484a85c71fc24|412b40ff-7336-ae2f-4370-b9ba55b98c0d",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 20,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: null,
                effectIn: true,
            },
            createdOn: 1605515245501,
        },
        "e-1804": {
            id: "e-1804",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5fb11100bb7484a85c71fc24",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fb11100bb7484a85c71fc24",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605601285561,
        },
        "e-1805": {
            id: "e-1805",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5faf7b23edd531199b80b919",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605601468872,
        },
        "e-1806": {
            id: "e-1806",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5faf7b23edd531199b80b919",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605601838880,
        },
        "e-1807": {
            id: "e-1807",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5fb11100bb7484a85c71fc24",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fb11100bb7484a85c71fc24",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605601918284,
        },
        "e-1808": {
            id: "e-1808",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605601949186,
        },
        "e-1809": {
            id: "e-1809",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605601962136,
        },
        "e-1810": {
            id: "e-1810",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed056bbf8cdb21",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed056bbf8cdb21",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602031113,
        },
        "e-1811": {
            id: "e-1811",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed056bbf8cdb21",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed056bbf8cdb21",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602046212,
        },
        "e-1812": {
            id: "e-1812",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed05cbca8cdb9d",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05cbca8cdb9d",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602084799,
        },
        "e-1813": {
            id: "e-1813",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05cbca8cdb9d",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05cbca8cdb9d",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602098805,
        },
        "e-1815": {
            id: "e-1815",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed059ea38cdb97",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed059ea38cdb97",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602187314,
        },
        "e-1816": {
            id: "e-1816",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed059ea38cdb97",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed059ea38cdb97",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602197378,
        },
        "e-1817": {
            id: "e-1817",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed0537898cdb80",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0537898cdb80",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602294681,
        },
        "e-1818": {
            id: "e-1818",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0537898cdb80",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0537898cdb80",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602323392,
        },
        "e-1819": {
            id: "e-1819",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed054a7a8cdb8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed054a7a8cdb8e",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602625262,
        },
        "e-1820": {
            id: "e-1820",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed054a7a8cdb8e",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed054a7a8cdb8e",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602638380,
        },
        "e-1821": {
            id: "e-1821",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed05189f8cdb89",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602725654,
        },
        "e-1822": {
            id: "e-1822",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602738235,
        },
        "e-1823": {
            id: "e-1823",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed0523cd8cdb8b",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0523cd8cdb8b",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602772218,
        },
        "e-1824": {
            id: "e-1824",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0523cd8cdb8b",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0523cd8cdb8b",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602783742,
        },
        "e-1825": {
            id: "e-1825",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5e8c766c52ed0551328cdb96",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0551328cdb96",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602826188,
        },
        "e-1826": {
            id: "e-1826",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0551328cdb96",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0551328cdb96",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605602835824,
        },
        "e-1827": {
            id: "e-1827",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-133",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1828",
                },
            },
            mediaQueries: ["main"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|16baf8e9-5ab9-23c8-1e57-d5328d985117",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|16baf8e9-5ab9-23c8-1e57-d5328d985117",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605603959270,
        },
        "e-1828": {
            id: "e-1828",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-134",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1827",
                },
            },
            mediaQueries: ["main"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|16baf8e9-5ab9-23c8-1e57-d5328d985117",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|16baf8e9-5ab9-23c8-1e57-d5328d985117",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605603959281,
        },
        "e-1829": {
            id: "e-1829",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-43",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1830",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-link",
                originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-link",
                    originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605671607444,
        },
        "e-1830": {
            id: "e-1830",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-44",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1829",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-link",
                originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-link",
                    originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605671607457,
        },
        "e-1831": {
            id: "e-1831",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-43",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1832",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0537898cdb80|c078f933-e340-433e-4030-783079075350",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0537898cdb80|c078f933-e340-433e-4030-783079075350",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605671846745,
        },
        "e-1832": {
            id: "e-1832",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-44",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1831",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0537898cdb80|c078f933-e340-433e-4030-783079075350",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0537898cdb80|c078f933-e340-433e-4030-783079075350",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605671846745,
        },
        "e-1843": {
            id: "e-1843",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1844" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0537898cdb80|c5ec5c24-98b8-2632-8c10-c7126e6fa191",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0537898cdb80|c5ec5c24-98b8-2632-8c10-c7126e6fa191",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1800,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605761159276,
        },
        "e-1845": {
            id: "e-1845",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1846" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0523cd8cdb8b|f9938b3c-9104-7a22-8cf2-81bf614cb8d0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0523cd8cdb8b|f9938b3c-9104-7a22-8cf2-81bf614cb8d0",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1800,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605761355500,
        },
        "e-1847": {
            id: "e-1847",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1848" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed0551328cdb96|623168e0-4339-934b-f47b-cb6c0affa19a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed0551328cdb96|623168e0-4339-934b-f47b-cb6c0affa19a",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1800,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1605761386157,
        },
        "e-1849": {
            id: "e-1849",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-135",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1850",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ab",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ab",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605762702993,
        },
        "e-1850": {
            id: "e-1850",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-136",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1849",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ab",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ab",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605762703003,
        },
        "e-1851": {
            id: "e-1851",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-135",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1852",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ac",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605762815947,
        },
        "e-1852": {
            id: "e-1852",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-136",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1851",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ac",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75ac",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605762815958,
        },
        "e-1853": {
            id: "e-1853",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-135",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1854",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|4905e033-72b2-8f7e-6c33-3ba61afe0961",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|4905e033-72b2-8f7e-6c33-3ba61afe0961",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605763102338,
        },
        "e-1854": {
            id: "e-1854",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-136",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1853",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|4905e033-72b2-8f7e-6c33-3ba61afe0961",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|4905e033-72b2-8f7e-6c33-3ba61afe0961",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605763102348,
        },
        "e-1855": {
            id: "e-1855",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-135",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1856",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|bbf7ae4d-b2df-33ac-7b44-fb85a7d27b48",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|bbf7ae4d-b2df-33ac-7b44-fb85a7d27b48",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605763111605,
        },
        "e-1856": {
            id: "e-1856",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-136",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1855",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|bbf7ae4d-b2df-33ac-7b44-fb85a7d27b48",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|bbf7ae4d-b2df-33ac-7b44-fb85a7d27b48",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605763111644,
        },
        "e-1857": {
            id: "e-1857",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-135",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1858",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|2c39c645-bac4-b88c-03cf-eff4fdd7a916",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|2c39c645-bac4-b88c-03cf-eff4fdd7a916",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605763128549,
        },
        "e-1858": {
            id: "e-1858",
            name: "",
            animationType: "custom",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-136",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1857",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|2c39c645-bac4-b88c-03cf-eff4fdd7a916",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|2c39c645-bac4-b88c-03cf-eff4fdd7a916",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605763128561,
        },
        "e-1859": {
            id: "e-1859",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-137", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".follow-link",
                originalId:
                    "5fabcd9cc36574fcd2c71b8a|221411aa-dee0-51b8-e20d-55a09d1997fb",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".follow-link",
                    originalId:
                        "5fabcd9cc36574fcd2c71b8a|221411aa-dee0-51b8-e20d-55a09d1997fb",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-137-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-137-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
            ],
            createdOn: 1605766462317,
        },
        "e-1860": {
            id: "e-1860",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-137", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".slider-button",
                originalId:
                    "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75af",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".slider-button",
                    originalId:
                        "5fabcd9cc36574fcd2c71b8a|4a32a245-4b6f-407c-4ff3-acf5376e75af",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-137-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-137-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
            ],
            createdOn: 1605766739457,
        },
        "e-1861": {
            id: "e-1861",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-137", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".top-button",
                originalId: "2cdc3f8a-82b6-8d7e-fa30-aa2fcf7bf644",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".top-button",
                    originalId: "2cdc3f8a-82b6-8d7e-fa30-aa2fcf7bf644",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-137-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-137-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
            ],
            createdOn: 1605766803447,
        },
        "e-1862": {
            id: "e-1862",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-137", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".scroll-link",
                originalId:
                    "5fb11100bb7484a85c71fc24|7afbe3a4-6010-418f-d544-dd6b23aea83a",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".scroll-link",
                    originalId:
                        "5fb11100bb7484a85c71fc24|7afbe3a4-6010-418f-d544-dd6b23aea83a",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-137-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-137-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
            ],
            createdOn: 1605766963005,
        },
        "e-1863": {
            id: "e-1863",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-137", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".button",
                originalId:
                    "5e8c766c52ed05bba28cdb92|1c1115c4-65f4-e703-2577-c5015b6352cd",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".button",
                    originalId:
                        "5e8c766c52ed05bba28cdb92|1c1115c4-65f4-e703-2577-c5015b6352cd",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-137-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-137-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
            ],
            createdOn: 1605767091075,
        },
        "e-1864": {
            id: "e-1864",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_MOVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-137", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".social-button",
                originalId: "b2586ef2-d184-864b-8db8-e65f7290893b",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".social-button",
                    originalId: "b2586ef2-d184-864b-8db8-e65f7290893b",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-137-p",
                    selectedAxis: "X_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
                {
                    continuousParameterGroupId: "a-137-p-2",
                    selectedAxis: "Y_AXIS",
                    basedOn: "ELEMENT",
                    reverse: false,
                    smoothing: 90,
                    restingState: 50,
                },
            ],
            createdOn: 1605767324174,
        },
        "e-1865": {
            id: "e-1865",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-138", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".section.page-header-section",
                originalId:
                    "5fb11100bb7484a85c71fc24|a8ea1905-2b1c-ac56-6178-c033da2acdfe",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".section.page-header-section",
                    originalId:
                        "5fb11100bb7484a85c71fc24|a8ea1905-2b1c-ac56-6178-c033da2acdfe",
                    appliesTo: "CLASS",
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-138-p",
                    smoothing: 50,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605769614103,
        },
        "e-1866": {
            id: "e-1866",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-106", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b|9c033ffc-22a6-d2a7-dade-07e33201a8e6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b|9c033ffc-22a6-d2a7-dade-07e33201a8e6",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-106-p",
                    smoothing: 50,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1605857799410,
        },
        "e-1867": {
            id: "e-1867",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-139",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1868",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-link",
                originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-link",
                    originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605947484723,
        },
        "e-1868": {
            id: "e-1868",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-140",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1867",
                },
            },
            mediaQueries: ["main"],
            target: {
                selector: ".nav-link",
                originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                appliesTo: "CLASS",
            },
            targets: [
                {
                    selector: ".nav-link",
                    originalId: "5c427164-3b66-4b73-ddb9-69678daf6e4f",
                    appliesTo: "CLASS",
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1605947484735,
        },
        "e-1869": {
            id: "e-1869",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "FADE_EFFECT",
                instant: false,
                config: { actionListId: "fadeIn", autoStopEventId: "e-1870" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5faf7b23edd531199b80b919|4ff972f2-12c7-d1e7-dcaf-4db00ad95c35",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5faf7b23edd531199b80b919|4ff972f2-12c7-d1e7-dcaf-4db00ad95c35",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1600,
                direction: null,
                effectIn: true,
            },
            createdOn: 1606021913823,
        },
        "e-1871": {
            id: "e-1871",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1872" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89|174c818e-859b-5317-0a52-15c0dcde61e1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89|174c818e-859b-5317-0a52-15c0dcde61e1",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 800,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1606026946153,
        },
        "e-1873": {
            id: "e-1873",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1874" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05189f8cdb89|e4ae0b22-0c32-b2f3-e3d1-6b2599551653",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05189f8cdb89|e4ae0b22-0c32-b2f3-e3d1-6b2599551653",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 1000,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1606026957292,
        },
        "e-1888": {
            id: "e-1888",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1889" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe32f2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe32f2",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 200,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1606121613747,
        },
        "e-1902": {
            id: "e-1902",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-84", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe33ee",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe33ee",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-84-p",
                    smoothing: 50,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1606121613747,
        },
        "e-1907": {
            id: "e-1907",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-1908" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b|75b433c8-ea6f-405f-0500-fa25c85a849e",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b|75b433c8-ea6f-405f-0500-fa25c85a849e",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1606199590751,
        },
        "e-1909": {
            id: "e-1909",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1910" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe331b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe331b",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 10,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1606202535782,
        },
        "e-1911": {
            id: "e-1911",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1912" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe33d1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe33d1",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1606202598357,
        },
        "e-1913": {
            id: "e-1913",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1914" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe3315",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe3315",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1606202730355,
        },
        "e-1915": {
            id: "e-1915",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInLeft", autoStopEventId: "e-1916" },
            },
            mediaQueries: ["main", "medium"],
            target: {
                id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe3354",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe3354",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "LEFT",
                effectIn: true,
            },
            createdOn: 1606202749986,
        },
        "e-1917": {
            id: "e-1917",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-1918" },
            },
            mediaQueries: ["main", "medium"],
            target: {
                id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe33e2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8|4998b76f-f6af-7722-8d12-1aad96fe33e2",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1606202761540,
        },
        "e-1919": {
            id: "e-1919",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInRight", autoStopEventId: "e-1920" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5e8c766c52ed05659a8cdb9b|c88ace90-6c9b-231e-c61e-3cc3e62005dc",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5e8c766c52ed05659a8cdb9b|c88ace90-6c9b-231e-c61e-3cc3e62005dc",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "RIGHT",
                effectIn: true,
            },
            createdOn: 1606203781706,
        },
        "e-1921": {
            id: "e-1921",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
                id: "",
                actionTypeId: "SLIDE_EFFECT",
                instant: false,
                config: { actionListId: "slideInBottom", autoStopEventId: "e-1922" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "3b6fc7dc-1906-c530-381d-968d13525c22",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "3b6fc7dc-1906-c530-381d-968d13525c22",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: 0,
                scrollOffsetUnit: "%",
                delay: 0,
                direction: "BOTTOM",
                effectIn: true,
            },
            createdOn: 1606203830151,
        },
        "e-1924": {
            id: "e-1924",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1923",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fbb4330ff41de35208e5af8",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606204078289,
        },
        "e-1925": {
            id: "e-1925",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5fbb4330ff41de35208e5af8",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1606204125351,
        },
        "e-1926": {
            id: "e-1926",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5fbb4330ff41de35208e5af8",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbb4330ff41de35208e5af8",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1606204138995,
        },
        "e-1927": {
            id: "e-1927",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-87",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1928",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5fb11100bb7484a85c71fc24|38769fa1-c0bc-96fb-f12d-e420a6f4fab0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fb11100bb7484a85c71fc24|38769fa1-c0bc-96fb-f12d-e420a6f4fab0",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606285868499,
        },
        "e-1928": {
            id: "e-1928",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-88",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1927",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5fb11100bb7484a85c71fc24|38769fa1-c0bc-96fb-f12d-e420a6f4fab0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fb11100bb7484a85c71fc24|38769fa1-c0bc-96fb-f12d-e420a6f4fab0",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606285868499,
        },
        "e-1929": {
            id: "e-1929",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-87",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1930",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5fbdf5a707b3fc170ed60b92|12ae1f6f-5ef4-710a-0007-5be646158298",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbdf5a707b3fc170ed60b92|12ae1f6f-5ef4-710a-0007-5be646158298",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606286093489,
        },
        "e-1930": {
            id: "e-1930",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-88",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1929",
                },
            },
            mediaQueries: ["tiny"],
            target: {
                id: "5fbdf5a707b3fc170ed60b92|12ae1f6f-5ef4-710a-0007-5be646158298",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbdf5a707b3fc170ed60b92|12ae1f6f-5ef4-710a-0007-5be646158298",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606286093489,
        },
        "e-1932": {
            id: "e-1932",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-93",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1931",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fbdf5a707b3fc170ed60b92",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbdf5a707b3fc170ed60b92",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606286214506,
        },
        "e-1933": {
            id: "e-1933",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-131", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["main"],
            target: {
                id: "5fbdf5a707b3fc170ed60b92",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbdf5a707b3fc170ed60b92",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-131-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1606286281834,
        },
        "e-1934": {
            id: "e-1934",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL",
            action: {
                id: "",
                actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                config: { actionListId: "a-132", affectedElements: {}, duration: 0 },
            },
            mediaQueries: ["medium", "small", "tiny"],
            target: {
                id: "5fbdf5a707b3fc170ed60b92",
                appliesTo: "PAGE",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fbdf5a707b3fc170ed60b92",
                    appliesTo: "PAGE",
                    styleBlockIds: [],
                },
            ],
            config: [
                {
                    continuousParameterGroupId: "a-132-p",
                    smoothing: 75,
                    startsEntering: true,
                    addStartOffset: false,
                    addOffsetValue: 50,
                    startsExiting: false,
                    addEndOffset: false,
                    endOffsetValue: 50,
                },
            ],
            createdOn: 1606286298313,
        },
        "e-1935": {
            id: "e-1935",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_ACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-135",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1936",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|3ddf0dc3-5429-eeb4-d14e-89c08cae6cdb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|3ddf0dc3-5429-eeb4-d14e-89c08cae6cdb",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606290143706,
        },
        "e-1936": {
            id: "e-1936",
            name: "",
            animationType: "preset",
            eventTypeId: "SLIDER_INACTIVE",
            action: {
                id: "",
                actionTypeId: "GENERAL_START_ACTION",
                config: {
                    delay: 0,
                    easing: "",
                    duration: 0,
                    actionListId: "a-136",
                    affectedElements: {},
                    playInReverse: false,
                    autoStopEventId: "e-1935",
                },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
                id: "5fabcd9cc36574fcd2c71b8a|3ddf0dc3-5429-eeb4-d14e-89c08cae6cdb",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
            },
            targets: [
                {
                    id: "5fabcd9cc36574fcd2c71b8a|3ddf0dc3-5429-eeb4-d14e-89c08cae6cdb",
                    appliesTo: "ELEMENT",
                    styleBlockIds: [],
                },
            ],
            config: {
                loop: false,
                playInReverse: false,
                scrollOffsetValue: null,
                scrollOffsetUnit: null,
                delay: null,
                direction: null,
                effectIn: null,
            },
            createdOn: 1606290143706,
        },
    },
    actionLists: {
        "a-3": {
            id: "a-3",
            title: "Show Tooltip",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-3-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".tooltip",
                                    selectorGuids: ["bb88bb57-b1f3-e9ec-3fc3-f7aa5533c721"],
                                },
                                value: "none",
                            },
                        },
                        {
                            id: "a-3-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".tooltip",
                                    selectorGuids: ["bb88bb57-b1f3-e9ec-3fc3-f7aa5533c721"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-3-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".tooltip",
                                    selectorGuids: ["bb88bb57-b1f3-e9ec-3fc3-f7aa5533c721"],
                                },
                                value: "flex",
                            },
                        },
                        {
                            id: "a-3-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".tooltip",
                                    selectorGuids: ["bb88bb57-b1f3-e9ec-3fc3-f7aa5533c721"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1516347660550,
        },
        "a-4": {
            id: "a-4",
            title: "Hide Tooltip",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-4-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".tooltip",
                                    selectorGuids: ["bb88bb57-b1f3-e9ec-3fc3-f7aa5533c721"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-4-n-3",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".tooltip",
                                    selectorGuids: ["bb88bb57-b1f3-e9ec-3fc3-f7aa5533c721"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1516347902146,
        },
        "a-5": {
            id: "a-5",
            title: "Dropdown Open",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-5-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-5-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                yValue: -8,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-5-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-5-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1531045448920,
        },
        "a-6": {
            id: "a-6",
            title: "Dropdown Close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-6-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-6-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                yValue: -8,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1531045448920,
        },
        "a-10": {
            id: "a-10",
            title: "Image Zoom Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-10-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {},
                                xValue: 1.06,
                                yValue: 1.06,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1532079921332,
        },
        "a-11": {
            id: "a-11",
            title: "Image Zoom Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-11-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 500,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1532080057536,
        },
        "a-114": {
            id: "a-114",
            title: "Media: Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-114-n-2",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover",
                                    selectorGuids: ["849b1028-ab9b-4e48-4eaf-3168103d6b08"],
                                },
                                value: "none",
                            },
                        },
                        {
                            id: "a-114-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover",
                                    selectorGuids: ["849b1028-ab9b-4e48-4eaf-3168103d6b08"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-114-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover",
                                    selectorGuids: ["849b1028-ab9b-4e48-4eaf-3168103d6b08"],
                                },
                                value: "flex",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-114-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover",
                                    selectorGuids: ["849b1028-ab9b-4e48-4eaf-3168103d6b08"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-114-n-6",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".moving-image",
                                    selectorGuids: ["16210b74-2370-91e8-f1ae-b6b3ba33b5aa"],
                                },
                                xValue: 1.04,
                                yValue: 1.04,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1583925535150,
        },
        "a-115": {
            id: "a-115",
            title: "Media: Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-115-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover",
                                    selectorGuids: ["849b1028-ab9b-4e48-4eaf-3168103d6b08"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-115-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".moving-image",
                                    selectorGuids: ["16210b74-2370-91e8-f1ae-b6b3ba33b5aa"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-115-n-3",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".hover",
                                    selectorGuids: ["849b1028-ab9b-4e48-4eaf-3168103d6b08"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1583925535150,
        },
        "a-17": {
            id: "a-17",
            title: "Instagram: Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-17-n-9",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {},
                                value: "none",
                            },
                        },
                        {
                            id: "a-17-n-10",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-11",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {},
                                value: "flex",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-17-n-12",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-17-n-8",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                xValue: 1.1,
                                yValue: 1.1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-17-n-14",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1532429767927,
        },
        "a-25": {
            id: "a-25",
            title: "Slider Arrow Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-25-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-25-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 300,
                                target: {},
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1541924697940,
        },
        "a-26": {
            id: "a-26",
            title: "Slider Arrow Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-26-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-26-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 300,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1541924697940,
        },
        "a-43": {
            id: "a-43",
            title: "Nav Link Image â†’ Show",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-43-n-3",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav-link-image",
                                    selectorGuids: ["e6458990-4257-792e-0381-541125c70f71"],
                                },
                                value: "none",
                            },
                        },
                        {
                            id: "a-43-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav-link-image",
                                    selectorGuids: ["e6458990-4257-792e-0381-541125c70f71"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-43-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav-link-image",
                                    selectorGuids: ["e6458990-4257-792e-0381-541125c70f71"],
                                },
                                value: "block",
                            },
                        },
                        {
                            id: "a-43-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav-link-image",
                                    selectorGuids: ["e6458990-4257-792e-0381-541125c70f71"],
                                },
                                value: 0.5,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1542902563617,
        },
        "a-44": {
            id: "a-44",
            title: "Nav Link Image â†’ Hide",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-44-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav-link-image",
                                    selectorGuids: ["e6458990-4257-792e-0381-541125c70f71"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-44-n-3",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "SIBLINGS",
                                    selector: ".nav-link-image",
                                    selectorGuids: ["e6458990-4257-792e-0381-541125c70f71"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1542902563617,
        },
        "a-52": {
            id: "a-52",
            title: "Testimonial v.1: in View",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-52-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 1000,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1542994712751,
        },
        "a-53": {
            id: "a-53",
            title: "Testimonial v.1: Out of View",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-53-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 1000,
                                target: {},
                                xValue: 0,
                                yValue: 0,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1542994712751,
        },
        "a-56": {
            id: "a-56",
            title: "Work Masonry Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-56-n",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                xValue: 1.1,
                                yValue: 1.1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-56-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                xValue: 0.5,
                                yValue: 0.5,
                                locked: true,
                            },
                        },
                        {
                            id: "a-56-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-56-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 800,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-56-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 800,
                                target: {},
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-56-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 800,
                                target: {},
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1543337111463,
        },
        "a-57": {
            id: "a-57",
            title: "Work Masonry Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-57-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 800,
                                target: {},
                                xValue: 1.1,
                                yValue: 1.1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-57-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 800,
                                target: {},
                                xValue: 0.5,
                                yValue: 0.5,
                                locked: true,
                            },
                        },
                        {
                            id: "a-57-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 800,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1543337111463,
        },
        "a-58": {
            id: "a-58",
            title: "Skill Progress",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-58-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                widthValue: 0,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-58-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "outQuint",
                                duration: 1500,
                                target: {},
                                widthValue: 100,
                                widthUnit: "AUTO",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1543511306014,
        },
        "a-74": {
            id: "a-74",
            title: "Client Logo Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-74-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".client-logo",
                                    selectorGuids: ["dce92c9e-6dec-2037-d5a5-54b8c41f43c8"],
                                },
                                value: 0.5,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-74-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".client-logo",
                                    selectorGuids: ["dce92c9e-6dec-2037-d5a5-54b8c41f43c8"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1556544490089,
        },
        "a-75": {
            id: "a-75",
            title: "Client Logo Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-75-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".client-logo",
                                    selectorGuids: ["dce92c9e-6dec-2037-d5a5-54b8c41f43c8"],
                                },
                                value: 0.5,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1556544490089,
        },
        "a-76": {
            id: "a-76",
            title: "Accordion Open",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-76-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                value: "none",
                            },
                        },
                        {
                            id: "a-76-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-76-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-76-n-4",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".plus-icon-line-1",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd8a"],
                                },
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-76-n-5",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                value: "block",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-76-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: false,
                            },
                        },
                        {
                            id: "a-76-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-76-n-8",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".plus-icon-line-1",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd8a"],
                                },
                                zValue: 180,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1554546996418,
        },
        "a-77": {
            id: "a-77",
            title: "Accordion Close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-77-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-77-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-77-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".plus-icon-line-1",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd8a"],
                                },
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-77-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".accordion-info",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd85"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1554546996418,
        },
        "a-78": {
            id: "a-78",
            title: "Accordion Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-78-n-3",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".plus-icon",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd87"],
                                },
                                globalSwatchId: "88916155",
                                rValue: 255,
                                bValue: 30,
                                gValue: 166,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1554549994214,
        },
        "a-79": {
            id: "a-79",
            title: "Accordion Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-79-n-3",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".plus-icon",
                                    selectorGuids: ["57dbdd26-4a2d-434a-62ce-4d9b44ebbd87"],
                                },
                                globalSwatchId: "d4a2cf80",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 0.12,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1554549994214,
        },
        "a-33": {
            id: "a-33",
            title: "Marker Link: Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-33-n-5",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".marker",
                                    selectorGuids: ["d7959527-87e5-7c3e-1e3c-9bb8360c5d36"],
                                },
                                globalSwatchId: "88916155",
                                rValue: 255,
                                bValue: 30,
                                gValue: 166,
                                aValue: 1,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1542355344118,
        },
        "a-109": {
            id: "a-109",
            title: "Marker Link: Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-109-n-5",
                            actionTypeId: "STYLE_BORDER",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".marker",
                                    selectorGuids: ["d7959527-87e5-7c3e-1e3c-9bb8360c5d36"],
                                },
                                globalSwatchId: "d4a2cf80",
                                rValue: 255,
                                bValue: 255,
                                gValue: 255,
                                aValue: 0.12,
                            },
                        },
                        {
                            id: "a-109-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".marker-icon",
                                    selectorGuids: ["187204ea-b426-2153-f9c7-34afe4f8bd97"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1542355344118,
        },
        "a-118": {
            id: "a-118",
            title: "Scroll Progress",
            continuousParameterGroups: [
                {
                    id: "a-118-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-118-n",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".progress",
                                            selectorGuids: ["a0118ce7-1fef-61f3-a4ce-89eea0c01cca"],
                                        },
                                        widthValue: 0,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: false,
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-118-n-2",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".progress",
                                            selectorGuids: ["a0118ce7-1fef-61f3-a4ce-89eea0c01cca"],
                                        },
                                        widthValue: 100,
                                        widthUnit: "%",
                                        heightUnit: "PX",
                                        locked: false,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1584090443168,
        },
        "a-87": {
            id: "a-87",
            title: "Mobile Dropdown: Open",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-87-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: true,
                                    id: "5e8c766c52ed05f7808cdba4|a79f6090-4df8-fbb3-f6fa-40a61af695d4",
                                },
                                heightValue: 50,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-87-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: true,
                                    id: "5e8c766c52ed05f7808cdba4|a79f6090-4df8-fbb3-f6fa-40a61af695d4",
                                },
                                heightValue: 48,
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: false,
                            },
                        },
                        {
                            id: "a-87-n-3",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".list-dropdown-arrow",
                                    selectorGuids: ["abd5fb67-feae-977d-21dc-e7d089c3b9ac"],
                                },
                                zValue: -180,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1574762669122,
        },
        "a-88": {
            id: "a-88",
            title: "Mobile Dropdown: Close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-88-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: true,
                                    id: "5e8c766c52ed05f7808cdba4|a79f6090-4df8-fbb3-f6fa-40a61af695d4",
                                },
                                heightValue: 50,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-88-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".list-dropdown-arrow",
                                    selectorGuids: ["abd5fb67-feae-977d-21dc-e7d089c3b9ac"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1574762669122,
        },
        "a-90": {
            id: "a-90",
            title: "Top Button: Hide",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-90-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".top-button",
                                    selectorGuids: ["c2896392-0c10-4889-634e-d56b84c4a4da"],
                                },
                                yValue: 160,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-90-n-3",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".top-button",
                                    selectorGuids: ["c2896392-0c10-4889-634e-d56b84c4a4da"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1530976706109,
        },
        "a-91": {
            id: "a-91",
            title: "Top Button: Show",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-91-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".top-button",
                                    selectorGuids: ["c2896392-0c10-4889-634e-d56b84c4a4da"],
                                },
                                value: "none",
                            },
                        },
                        {
                            id: "a-91-n-7",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".top-button",
                                    selectorGuids: ["c2896392-0c10-4889-634e-d56b84c4a4da"],
                                },
                                yValue: 160,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-91-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".top-button",
                                    selectorGuids: ["c2896392-0c10-4889-634e-d56b84c4a4da"],
                                },
                                value: "flex",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-91-n-8",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    selector: ".top-button",
                                    selectorGuids: ["c2896392-0c10-4889-634e-d56b84c4a4da"],
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1530976706109,
        },
        "a-93": {
            id: "a-93",
            title: "Preloader",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-93-n",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".preloader",
                                    selectorGuids: ["138deb95-4426-c445-3dd3-d37769eebf8a"],
                                },
                                value: "flex",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-93-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {
                                    selector: ".loading",
                                    selectorGuids: ["631a9a77-abd4-c4ee-8c0b-acb53f475298"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-93-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    selector: ".preloader",
                                    selectorGuids: ["138deb95-4426-c445-3dd3-d37769eebf8a"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-93-n-8",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    selector: ".preloader",
                                    selectorGuids: ["138deb95-4426-c445-3dd3-d37769eebf8a"],
                                },
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1575112393263,
        },
        "a-101": {
            id: "a-101",
            title: "Nav Work Icon: Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-101-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                widthValue: 26,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-101-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                widthValue: 16,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-101-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                widthValue: 16,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1582712696889,
        },
        "a-102": {
            id: "a-102",
            title: "Nav Work Icon: Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-102-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                widthValue: 12,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-102-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                widthValue: 20,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-102-n-3",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 400,
                                target: {},
                                widthValue: 20,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1582712696889,
        },
        "a-104": {
            id: "a-104",
            title: "Gallery Movement",
            continuousParameterGroups: [
                {
                    id: "a-104-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-104-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5e8c766c52ed051d008cdb8f|f2ba0e63-cdf4-cfa8-b5cd-7e4e418621b9",
                                        },
                                        xValue: 14,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-104-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5e8c766c52ed051d008cdb8f|f2ba0e63-cdf4-cfa8-b5cd-7e4e418621b9",
                                        },
                                        xValue: -14,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "a-104-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: [],
                },
            ],
            createdOn: 1583056462994,
        },
        "a-107": {
            id: "a-107",
            title: "Link: Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-107-n",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".link-underline",
                                    selectorGuids: ["1cdb0a83-8984-64fd-3d0b-e99b2982da67"],
                                },
                                widthValue: 0,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-107-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".link-underline",
                                    selectorGuids: ["1cdb0a83-8984-64fd-3d0b-e99b2982da67"],
                                },
                                widthValue: 100,
                                widthUnit: "%",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1583237309302,
        },
        "a-108": {
            id: "a-108",
            title: "Link: Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-108-n-2",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".link-underline",
                                    selectorGuids: ["1cdb0a83-8984-64fd-3d0b-e99b2982da67"],
                                },
                                widthValue: 0,
                                widthUnit: "PX",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1583237309302,
        },
        "a-113": {
            id: "a-113",
            title: "Media: Hover Move",
            continuousParameterGroups: [
                {
                    id: "a-113-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-113-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".moving-image",
                                            selectorGuids: ["16210b74-2370-91e8-f1ae-b6b3ba33b5aa"],
                                        },
                                        xValue: 2,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-113-n-7",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hover-info",
                                            selectorGuids: ["6ef58d7c-d92c-53ee-4f1c-c64919bae83d"],
                                        },
                                        xValue: -3,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-113-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".moving-image",
                                            selectorGuids: ["16210b74-2370-91e8-f1ae-b6b3ba33b5aa"],
                                        },
                                        xValue: -3,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-113-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hover-info",
                                            selectorGuids: ["6ef58d7c-d92c-53ee-4f1c-c64919bae83d"],
                                        },
                                        xValue: 2,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "a-113-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-113-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".moving-image",
                                            selectorGuids: ["16210b74-2370-91e8-f1ae-b6b3ba33b5aa"],
                                        },
                                        yValue: 2,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-113-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hover-info",
                                            selectorGuids: ["6ef58d7c-d92c-53ee-4f1c-c64919bae83d"],
                                        },
                                        yValue: -3,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-113-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".moving-image",
                                            selectorGuids: ["16210b74-2370-91e8-f1ae-b6b3ba33b5aa"],
                                        },
                                        yValue: -2,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-113-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".hover-info",
                                            selectorGuids: ["6ef58d7c-d92c-53ee-4f1c-c64919bae83d"],
                                        },
                                        yValue: 3,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1583925120628,
        },
        "a-111": {
            id: "a-111",
            title: "Floating Tooltip: Show",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-111-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".floating-tooltip",
                                    selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-111-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    selector: ".floating-tooltip",
                                    selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-111-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    selector: ".floating-tooltip",
                                    selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-111-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    selector: ".floating-tooltip",
                                    selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1583759613430,
        },
        "a-112": {
            id: "a-112",
            title: "Floating Tooltip: Hide",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-112-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".floating-tooltip",
                                    selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-112-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".floating-tooltip",
                                    selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1583759613430,
        },
        "a-117": {
            id: "a-117",
            title: "Nav Search: Close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-117-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-117-n-3",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-117-n-4",
                            actionTypeId: "GENERAL_DISPLAY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {},
                                value: "none",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1582362706160,
        },
        "a-9": {
            id: "a-9",
            title: "Parallax + Scale",
            continuousParameterGroups: [
                {
                    id: "a-9-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-9-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5ab1f5bd9127d9b137b42f31|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        yValue: -30,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-9-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5ab1f5bd9127d9b137b42f31|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: true,
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-9-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5ab1f5bd9127d9b137b42f31|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        yValue: 30,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-9-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5ab1f5bd9127d9b137b42f31|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1521613386537,
        },
        "a-119": {
            id: "a-119",
            title: "Portfolio Icon: Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-119-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                zValue: -45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-119-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                zValue: 90,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                        {
                            id: "a-119-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    selector: ".portfolio-button-2",
                                    selectorGuids: ["1f76f9ad-ade4-f410-3b3e-fba2cceaafc4"],
                                },
                                xValue: 1.1,
                                yValue: 1.1,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1575635885853,
        },
        "a-120": {
            id: "a-120",
            title: "Portfolio Icon: Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-120-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {},
                                zValue: -45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                        {
                            id: "a-120-n-2",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    selector: ".portfolio-button-2",
                                    selectorGuids: ["1f76f9ad-ade4-f410-3b3e-fba2cceaafc4"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1575635885853,
        },
        "a-123": {
            id: "a-123",
            title: "Icon Button Hover",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-123-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-123-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1556700236786,
        },
        "a-124": {
            id: "a-124",
            title: "Icon Button Hover Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-124-n",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {},
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1556700236786,
        },
        "a-127": {
            id: "a-127",
            title: "Menu â†’ Open",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-127-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-top",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefd8"],
                                },
                                yValue: 4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-127-n-4",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-bottom",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefde"],
                                },
                                yValue: -4,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-127-n-5",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 400,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-top",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefd8"],
                                },
                                zValue: 45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                        {
                            id: "a-127-n-6",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 400,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-bottom",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefde"],
                                },
                                zValue: -45,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1541425869199,
        },
        "a-130": {
            id: "a-130",
            title: "Menu â†’ Close",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-130-n",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-top",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefd8"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                        {
                            id: "a-130-n-2",
                            actionTypeId: "TRANSFORM_ROTATE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-bottom",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefde"],
                                },
                                zValue: 0,
                                xUnit: "DEG",
                                yUnit: "DEG",
                                zUnit: "DEG",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-130-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-top",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefd8"],
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-130-n-6",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    selector: ".menu-icon-line-bottom",
                                    selectorGuids: ["c9433b9d-69eb-26a5-bbed-41dcd24fefde"],
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1541425869199,
        },
        "a-69": {
            id: "a-69",
            title: "Tooltip Tracking",
            continuousParameterGroups: [
                {
                    id: "a-69-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-69-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".floating-tooltip",
                                            selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                        },
                                        xValue: 0,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-69-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".floating-tooltip",
                                            selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                        },
                                        xValue: 100,
                                        xUnit: "VW",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "a-69-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-69-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".floating-tooltip",
                                            selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "VH",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-69-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".floating-tooltip",
                                            selectorGuids: ["b3d82906-1e10-f722-e149-bcdcefef62db"],
                                        },
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "VH",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1556287827245,
        },
        "a-131": {
            id: "a-131",
            title: "Nav Bar â†’ Desktop",
            continuousParameterGroups: [
                {
                    id: "a-131-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-131-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-bar",
                                            selectorGuids: ["aacad97c-5374-f365-bbe7-9bfb363ed94b"],
                                        },
                                        globalSwatchId: "",
                                        rValue: 22,
                                        bValue: 25,
                                        gValue: 23,
                                        aValue: 0,
                                    },
                                },
                                {
                                    id: "a-131-n-3",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-bar",
                                            selectorGuids: ["aacad97c-5374-f365-bbe7-9bfb363ed94b"],
                                        },
                                        heightValue: 112,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: false,
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 2,
                            actionItems: [
                                {
                                    id: "a-131-n-2",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-bar",
                                            selectorGuids: ["aacad97c-5374-f365-bbe7-9bfb363ed94b"],
                                        },
                                        globalSwatchId: "92603192",
                                        rValue: 22,
                                        bValue: 25,
                                        gValue: 23,
                                        aValue: 0.8,
                                    },
                                },
                                {
                                    id: "a-131-n-4",
                                    actionTypeId: "STYLE_SIZE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-bar",
                                            selectorGuids: ["aacad97c-5374-f365-bbe7-9bfb363ed94b"],
                                        },
                                        heightValue: 88,
                                        widthUnit: "PX",
                                        heightUnit: "px",
                                        locked: false,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1605601292268,
        },
        "a-132": {
            id: "a-132",
            title: "Nav Bar â†’ Mobile",
            continuousParameterGroups: [
                {
                    id: "a-132-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-132-n",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-bar",
                                            selectorGuids: ["aacad97c-5374-f365-bbe7-9bfb363ed94b"],
                                        },
                                        globalSwatchId: "",
                                        rValue: 22,
                                        bValue: 25,
                                        gValue: 23,
                                        aValue: 0,
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 1,
                            actionItems: [
                                {
                                    id: "a-132-n-3",
                                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".nav-bar",
                                            selectorGuids: ["aacad97c-5374-f365-bbe7-9bfb363ed94b"],
                                        },
                                        globalSwatchId: "92603192",
                                        rValue: 22,
                                        bValue: 25,
                                        gValue: 23,
                                        aValue: 0.8,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1605601292268,
        },
        "a-133": {
            id: "a-133",
            title: "Follow Links â†’ Show",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-133-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-133-n-5",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: false,
                            },
                        },
                        {
                            id: "a-133-n-11",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                xValue: null,
                                yValue: 16,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-133-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                widthUnit: "PX",
                                heightUnit: "AUTO",
                                locked: false,
                            },
                        },
                        {
                            id: "a-133-n-7",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-icon",
                                    selectorGuids: ["91c01b9a-efb0-f721-377f-08cbecc5f558"],
                                },
                                xValue: 0,
                                yValue: 0,
                                locked: true,
                            },
                        },
                        {
                            id: "a-133-n-8",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-icon-wrapper",
                                    selectorGuids: ["39cf6907-48e9-9b9f-4cc7-25e3b50f72c3"],
                                },
                                widthValue: 0,
                                widthUnit: "px",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-133-n-9",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-icon-wrapper",
                                    selectorGuids: ["39cf6907-48e9-9b9f-4cc7-25e3b50f72c3"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-133-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-133-n-10",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                xValue: null,
                                yValue: 0,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1605603963436,
        },
        "a-134": {
            id: "a-134",
            title: "Follow Links â†’ Hide",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-134-n-8",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-134-n-9",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                xValue: null,
                                yValue: 16,
                                xUnit: "px",
                                yUnit: "px",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-134-n-4",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-links",
                                    selectorGuids: ["2c6f8db4-e14b-37ad-19ce-677f4317f790"],
                                },
                                heightValue: 0,
                                widthUnit: "PX",
                                heightUnit: "px",
                                locked: false,
                            },
                        },
                        {
                            id: "a-134-n-5",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-icon",
                                    selectorGuids: ["91c01b9a-efb0-f721-377f-08cbecc5f558"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                        {
                            id: "a-134-n-6",
                            actionTypeId: "STYLE_SIZE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-icon-wrapper",
                                    selectorGuids: ["39cf6907-48e9-9b9f-4cc7-25e3b50f72c3"],
                                },
                                widthUnit: "AUTO",
                                heightUnit: "PX",
                                locked: false,
                            },
                        },
                        {
                            id: "a-134-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".follow-icon-wrapper",
                                    selectorGuids: ["39cf6907-48e9-9b9f-4cc7-25e3b50f72c3"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1605603963436,
        },
        "a-135": {
            id: "a-135",
            title: "Slide â†’ In",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-135-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-135-n-5",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-135-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bg-image",
                                    selectorGuids: ["d53969a4-9b95-6bc6-bdc1-796b9d43d4ca"],
                                },
                                xValue: 1.06,
                                yValue: 1.06,
                                locked: true,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-135-n-2",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "px",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-135-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-135-n-3",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 2400,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bg-image",
                                    selectorGuids: ["d53969a4-9b95-6bc6-bdc1-796b9d43d4ca"],
                                },
                                xValue: 1,
                                yValue: 1,
                                locked: true,
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1605762707931,
        },
        "a-136": {
            id: "a-136",
            title: "Slide â†’ Out",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-136-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                yValue: -100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-136-n-6",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 600,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-136-n-4",
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "easeOut",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".bg-image",
                                    selectorGuids: ["d53969a4-9b95-6bc6-bdc1-796b9d43d4ca"],
                                },
                                xValue: 1.06,
                                yValue: 1.06,
                                locked: true,
                            },
                        },
                        {
                            id: "a-136-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-136-n-7",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".slide-number.active",
                                    selectorGuids: [
                                        "bb225d8a-5aad-e1b5-75ec-ac97adfd70c9",
                                        "9cce53e2-b5f9-54c0-74a9-05b28deaeb3d",
                                    ],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1605762707931,
        },
        "a-137": {
            id: "a-137",
            title: "Magnet",
            continuousParameterGroups: [
                {
                    id: "a-137-p",
                    type: "MOUSE_X",
                    parameterLabel: "Mouse X",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-137-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5fabcd9cc36574fcd2c71b8a|221411aa-dee0-51b8-e20d-55a09d1997fb",
                                        },
                                        xValue: -8,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-137-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5fabcd9cc36574fcd2c71b8a|221411aa-dee0-51b8-e20d-55a09d1997fb",
                                        },
                                        xValue: 8,
                                        xUnit: "px",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    id: "a-137-p-2",
                    type: "MOUSE_Y",
                    parameterLabel: "Mouse Y",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-137-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5fabcd9cc36574fcd2c71b8a|221411aa-dee0-51b8-e20d-55a09d1997fb",
                                        },
                                        yValue: -8,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-137-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5fabcd9cc36574fcd2c71b8a|221411aa-dee0-51b8-e20d-55a09d1997fb",
                                        },
                                        yValue: 8,
                                        zValue: null,
                                        xUnit: "PX",
                                        yUnit: "px",
                                        zUnit: "px",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1605766466773,
        },
        "a-138": {
            id: "a-138",
            title: "Page Top Section",
            continuousParameterGroups: [
                {
                    id: "a-138-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 50,
                            actionItems: [
                                {
                                    id: "a-138-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".bg-image.page-image",
                                            selectorGuids: [
                                                "d53969a4-9b95-6bc6-bdc1-796b9d43d4ca",
                                                "967a676d-7bbb-1dd6-b1ac-5060da378daa",
                                            ],
                                        },
                                        yValue: 0,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-138-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".bg-image.page-image",
                                            selectorGuids: [
                                                "d53969a4-9b95-6bc6-bdc1-796b9d43d4ca",
                                                "967a676d-7bbb-1dd6-b1ac-5060da378daa",
                                            ],
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-138-n-5",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro",
                                            selectorGuids: ["f36f72fc-f18f-5e49-571d-9ce440a489f2"],
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-138-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro",
                                            selectorGuids: ["f36f72fc-f18f-5e49-571d-9ce440a489f2"],
                                        },
                                        value: 1,
                                        unit: "",
                                    },
                                },
                                {
                                    id: "a-138-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro",
                                            selectorGuids: ["f36f72fc-f18f-5e49-571d-9ce440a489f2"],
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-138-n-11",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".scroll-link",
                                            selectorGuids: ["4ba5177e-0f32-8154-ebe5-6f949e965647"],
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-138-n-13",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".scroll",
                                            selectorGuids: ["aa86ded7-efe3-4655-3027-47ea741a141a"],
                                        },
                                        value: 1,
                                        unit: "",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 70,
                            actionItems: [
                                {
                                    id: "a-138-n-14",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            selector: ".scroll",
                                            selectorGuids: ["aa86ded7-efe3-4655-3027-47ea741a141a"],
                                        },
                                        value: 0,
                                        unit: "",
                                    },
                                },
                                {
                                    id: "a-138-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".scroll-link",
                                            selectorGuids: ["4ba5177e-0f32-8154-ebe5-6f949e965647"],
                                        },
                                        yValue: 200,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-138-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".bg-image.page-image",
                                            selectorGuids: [
                                                "d53969a4-9b95-6bc6-bdc1-796b9d43d4ca",
                                                "967a676d-7bbb-1dd6-b1ac-5060da378daa",
                                            ],
                                        },
                                        yValue: 50,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-138-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".bg-image.page-image",
                                            selectorGuids: [
                                                "d53969a4-9b95-6bc6-bdc1-796b9d43d4ca",
                                                "967a676d-7bbb-1dd6-b1ac-5060da378daa",
                                            ],
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-138-n-6",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro",
                                            selectorGuids: ["f36f72fc-f18f-5e49-571d-9ce440a489f2"],
                                        },
                                        xValue: 0.5,
                                        yValue: 0.5,
                                        locked: true,
                                    },
                                },
                                {
                                    id: "a-138-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro",
                                            selectorGuids: ["f36f72fc-f18f-5e49-571d-9ce440a489f2"],
                                        },
                                        value: 0.5,
                                        unit: "",
                                    },
                                },
                                {
                                    id: "a-138-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".page-intro",
                                            selectorGuids: ["f36f72fc-f18f-5e49-571d-9ce440a489f2"],
                                        },
                                        yValue: 52,
                                        xUnit: "PX",
                                        yUnit: "vh",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1521613386537,
        },
        "a-106": {
            id: "a-106",
            title: "Parallax + Scale 2",
            continuousParameterGroups: [
                {
                    id: "a-106-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-106-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5e8c766c52ed05bba28cdb92|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        yValue: -30,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-106-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5e8c766c52ed05bba28cdb92|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        xValue: 1.2,
                                        yValue: 1.2,
                                        locked: true,
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-106-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5e8c766c52ed05bba28cdb92|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        yValue: 30,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX",
                                    },
                                },
                                {
                                    id: "a-106-n-4",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5e8c766c52ed05bba28cdb92|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        xValue: 1,
                                        yValue: 1,
                                        locked: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1521613386537,
        },
        "a-139": {
            id: "a-139",
            title: "Nav Link Number â†’ Show",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-139-n",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-number",
                                    selectorGuids: ["fc6ac84c-5f9a-df65-9018-20f67b7bba46"],
                                },
                                xValue: 50,
                                yValue: null,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-139-n-2",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 500,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-number",
                                    selectorGuids: ["fc6ac84c-5f9a-df65-9018-20f67b7bba46"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            id: "a-139-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-number",
                                    selectorGuids: ["fc6ac84c-5f9a-df65-9018-20f67b7bba46"],
                                },
                                xValue: 0,
                                yValue: null,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-139-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-number",
                                    selectorGuids: ["fc6ac84c-5f9a-df65-9018-20f67b7bba46"],
                                },
                                value: 1,
                                unit: "",
                            },
                        },
                        {
                            id: "a-139-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-text",
                                    selectorGuids: ["967c65e2-3afb-7092-9900-dbe17844e8fd"],
                                },
                                xValue: 1.2,
                                xUnit: "vh",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: true,
            createdOn: 1605947499300,
        },
        "a-140": {
            id: "a-140",
            title: "Nav Link Number â†’ Hide",
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            id: "a-140-n-3",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-number",
                                    selectorGuids: ["fc6ac84c-5f9a-df65-9018-20f67b7bba46"],
                                },
                                xValue: 50,
                                yValue: null,
                                xUnit: "%",
                                yUnit: "%",
                                zUnit: "PX",
                            },
                        },
                        {
                            id: "a-140-n-4",
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-number",
                                    selectorGuids: ["fc6ac84c-5f9a-df65-9018-20f67b7bba46"],
                                },
                                value: 0,
                                unit: "",
                            },
                        },
                        {
                            id: "a-140-n-5",
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "ease",
                                duration: 300,
                                target: {
                                    useEventTarget: "CHILDREN",
                                    selector: ".nav-link-text",
                                    selectorGuids: ["967c65e2-3afb-7092-9900-dbe17844e8fd"],
                                },
                                xValue: 0,
                                xUnit: "vh",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
            useFirstGroupAsInitialState: false,
            createdOn: 1605947499300,
        },
        "a-84": {
            id: "a-84",
            title: "Parallax",
            continuousParameterGroups: [
                {
                    id: "a-84-p",
                    type: "SCROLL_PROGRESS",
                    parameterLabel: "Scroll",
                    continuousActionGroups: [
                        {
                            keyframe: 0,
                            actionItems: [
                                {
                                    id: "a-84-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5ab1f5bd9127d9b137b42f31|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        yValue: -32,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                        {
                            keyframe: 100,
                            actionItems: [
                                {
                                    id: "a-84-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: true,
                                            id: "5ab1f5bd9127d9b137b42f31|11e31137-a146-523d-1ed5-91cc9fe75dcf",
                                        },
                                        yValue: 32,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX",
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            createdOn: 1521613386537,
        },
        slideInRight: {
            id: "slideInRight",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
        },
        slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 100,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0.7500000000000001,
                                yValue: 0.7500000000000001,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 1,
                                yValue: 1,
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        growBigIn: {
            id: "growBigIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 1,
                                yValue: 1,
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        shrinkIn: {
            id: "shrinkIn",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 1.25,
                                yValue: 1.25,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_SCALE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 1,
                                yValue: 1,
                            },
                        },
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                    ],
                },
            ],
        },
        slideInLeft: {
            id: "slideInLeft",
            useFirstGroupAsInitialState: true,
            actionItemGroups: [
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 0,
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                duration: 0,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: -100,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
                {
                    actionItems: [
                        {
                            actionTypeId: "STYLE_OPACITY",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                value: 1,
                            },
                        },
                        {
                            actionTypeId: "TRANSFORM_MOVE",
                            config: {
                                delay: 0,
                                easing: "outQuart",
                                duration: 1000,
                                target: {
                                    id: "N/A",
                                    appliesTo: "TRIGGER_ELEMENT",
                                    useEventTarget: true,
                                },
                                xValue: 0,
                                yValue: 0,
                                xUnit: "PX",
                                yUnit: "PX",
                                zUnit: "PX",
                            },
                        },
                    ],
                },
            ],
        },
    },
    site: {
        mediaQueries: [
            { key: "main", min: 992, max: 10000 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
        ],
    },
});
