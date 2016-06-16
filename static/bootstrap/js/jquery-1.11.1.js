/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
        var c = [],
            d = c.slice,
            e = c.concat,
            f = c.push,
            g = c.indexOf,
            h = {},
            i = h.toString,
            j = h.hasOwnProperty,
            k = {},
            l = "1.11.1",
            m = function(a, b) {
                return new m.fn.init(a, b)
            },
            n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            o = /^-ms-/,
            p = /-([\da-z])/gi,
            q = function(a, b) {
                return b.toUpperCase()
            };
        m.fn = m.prototype = {
            jquery: l,
            constructor: m,
            selector: "",
            length: 0,
            toArray: function() {
                return d.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
            },
            pushStack: function(a) {
                var b = m.merge(this.constructor(), a);
                return b.prevObject = this, b.context = this.context, b
            },
            each: function(a, b) {
                return m.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(m.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(d.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length,
                    c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: f,
            sort: c.sort,
            splice: c.splice
        }, m.extend = m.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {},
                h = 1,
                i = arguments.length,
                j = !1;
            for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
                if (null != (e = arguments[h]))
                    for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
            return g
        }, m.extend({
            expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === m.type(a)
            },
            isArray: Array.isArray || function(a) {
                return "array" === m.type(a)
            },
            isWindow: function(a) {
                return null != a && a == a.window
            },
            isNumeric: function(a) {
                return !m.isArray(a) && a - parseFloat(a) >= 0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a) return !1;
                return !0
            },
            isPlainObject: function(a) {
                var b;
                if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
                try {
                    if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
                } catch (c) {
                    return !1
                }
                if (k.ownLast)
                    for (b in a) return j.call(a, b);
                for (b in a);
                return void 0 === b || j.call(a, b)
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
            },
            globalEval: function(b) {
                b && m.trim(b) && (a.execScript || function(b) {
                    a.eval.call(a, b)
                })(b)
            },
            camelCase: function(a) {
                return a.replace(o, "ms-").replace(p, q)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, c) {
                var d, e = 0,
                    f = a.length,
                    g = r(a);
                if (c) {
                    if (g) {
                        for (; f > e; e++)
                            if (d = b.apply(a[e], c), d === !1) break
                    } else
                        for (e in a)
                            if (d = b.apply(a[e], c), d === !1) break
                } else if (g) {
                    for (; f > e; e++)
                        if (d = b.call(a[e], e, a[e]), d === !1) break
                } else
                    for (e in a)
                        if (d = b.call(a[e], e, a[e]), d === !1) break; return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(n, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
            },
            inArray: function(a, b, c) {
                var d;
                if (b) {
                    if (g) return g.call(b, a, c);
                    for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                        if (c in b && b[c] === a) return c
                }
                return -1
            },
            merge: function(a, b) {
                var c = +b.length,
                    d = 0,
                    e = a.length;
                while (c > d) a[e++] = b[d++];
                if (c !== c)
                    while (void 0 !== b[d]) a[e++] = b[d++];
                return a.length = e, a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, f = 0,
                    g = a.length,
                    h = r(a),
                    i = [];
                if (h)
                    for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
                else
                    for (f in a) d = b(a[f], f, c), null != d && i.push(d);
                return e.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, e, f;
                return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() {
                    return a.apply(b || this, c.concat(d.call(arguments)))
                }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
            },
            now: function() {
                return +new Date
            },
            support: k
        }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            h["[object " + b + "]"] = b.toLowerCase()
        });

        function r(a) {
            var b = a.length,
                c = m.type(a);
            return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var s = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
                v = a.document,
                w = 0,
                x = 0,
                y = gb(),
                z = gb(),
                A = gb(),
                B = function(a, b) {
                    return a === b && (l = !0), 0
                },
                C = "undefined",
                D = 1 << 31,
                E = {}.hasOwnProperty,
                F = [],
                G = F.pop,
                H = F.push,
                I = F.push,
                J = F.slice,
                K = F.indexOf || function(a) {
                    for (var b = 0, c = this.length; c > b; b++)
                        if (this[b] === a) return b;
                    return -1
                },
                L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                M = "[\\x20\\t\\r\\n\\f]",
                N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                O = N.replace("w", "w#"),
                P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
                Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
                R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
                S = new RegExp("^" + M + "*," + M + "*"),
                T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
                U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
                V = new RegExp(Q),
                W = new RegExp("^" + O + "$"),
                X = {
                    ID: new RegExp("^#(" + N + ")"),
                    CLASS: new RegExp("^\\.(" + N + ")"),
                    TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
                    ATTR: new RegExp("^" + P),
                    PSEUDO: new RegExp("^" + Q),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + L + ")$", "i"),
                    needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
                },
                Y = /^(?:input|select|textarea|button)$/i,
                Z = /^h\d$/i,
                $ = /^[^{]+\{\s*\[native \w/,
                _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                ab = /[+~]/,
                bb = /'|\\/g,
                cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
                db = function(a, b, c) {
                    var d = "0x" + b - 65536;
                    return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
                };
            try {
                I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
            } catch (eb) {
                I = {
                    apply: F.length ? function(a, b) {
                        H.apply(a, J.call(b))
                    } : function(a, b) {
                        var c = a.length,
                            d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
                }
            }

            function fb(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w, x;
                if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
                if (1 !== (k = b.nodeType) && 9 !== k) return [];
                if (p && !e) {
                    if (f = _.exec(a))
                        if (j = f[1]) {
                            if (9 === k) {
                                if (h = b.getElementById(j), !h || !h.parentNode) return d;
                                if (h.id === j) return d.push(h), d
                            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d
                        } else {
                            if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d;
                            if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d
                        }
                    if (c.qsa && (!q || !q.test(a))) {
                        if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                            o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                            while (l--) o[l] = s + qb(o[l]);
                            w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                        }
                        if (x) try {
                            return I.apply(d, w.querySelectorAll(x)), d
                        } catch (y) {} finally {
                            r || b.removeAttribute("id")
                        }
                    }
                }
                return i(a.replace(R, "$1"), b, d, e)
            }

            function gb() {
                var a = [];

                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
                }
                return b
            }

            function hb(a) {
                return a[u] = !0, a
            }

            function ib(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b), b = null
                }
            }

            function jb(a, b) {
                var c = a.split("|"),
                    e = a.length;
                while (e--) d.attrHandle[c[e]] = b
            }

            function kb(a, b) {
                var c = b && a,
                    d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
                if (d) return d;
                if (c)
                    while (c = c.nextSibling)
                        if (c === b) return -1;
                return a ? 1 : -1
            }

            function lb(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }

            function mb(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }

            function nb(a) {
                return hb(function(b) {
                    return b = +b, hb(function(c, d) {
                        var e, f = a([], c.length, b),
                            g = f.length;
                        while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }

            function ob(a) {
                return a && typeof a.getElementsByTagName !== C && a
            }
            c = fb.support = {}, f = fb.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }, m = fb.setDocument = function(a) {
                var b, e = a ? a.ownerDocument || a : v,
                    g = e.defaultView;
                return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                    m()
                }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                    m()
                })), c.attributes = ib(function(a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ib(function(a) {
                    return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), c.getById = ib(function(a) {
                    return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function(a, b) {
                    if (typeof b.getElementById !== C && p) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }, d.filter.ID = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }) : (delete d.find.ID, d.filter.ID = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
                } : function(a, b) {
                    var c, d = [],
                        e = 0,
                        f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++]) 1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) {
                    a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
                }), ib(function(a) {
                    var b = e.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a,
                        d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                } : function(a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a) return !0;
                    return !1
                }, B = b ? function(a, b) {
                    if (a === b) return l = !0, 0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
                } : function(a, b) {
                    if (a === b) return l = !0, 0;
                    var c, d = 0,
                        f = a.parentNode,
                        g = b.parentNode,
                        h = [a],
                        i = [b];
                    if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                    if (f === g) return kb(a, b);
                    c = a;
                    while (c = c.parentNode) h.unshift(c);
                    c = b;
                    while (c = c.parentNode) i.unshift(c);
                    while (h[d] === i[d]) d++;
                    return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                }, e) : n
            }, fb.matches = function(a, b) {
                return fb(a, null, null, b)
            }, fb.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                    var d = s.call(a, b);
                    if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
                } catch (e) {}
                return fb(b, n, null, [a]).length > 0
            }, fb.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a), t(a, b)
            }, fb.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()],
                    f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }, fb.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }, fb.uniqueSort = function(a) {
                var b, d = [],
                    e = 0,
                    f = 0;
                if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                    while (b = a[f++]) b === a[f] && (e = d.push(f));
                    while (e--) a.splice(d[e], 1)
                }
                return k = null, a
            }, e = fb.getText = function(a) {
                var b, c = "",
                    d = 0,
                    f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent) return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                    } else if (3 === f || 4 === f) return a.nodeValue
                } else
                    while (b = a[d++]) c += e(b);
                return c
            }, d = fb.selectors = {
                cacheLength: 50,
                createPseudo: hb,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(cb, db).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        } : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = fb.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3),
                            g = "last" !== a.slice(-4),
                            h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                                q = b.parentNode,
                                r = h && b.nodeName.toLowerCase(),
                                s = !i && !h;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        l = b;
                                        while (l = l[p])
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [w, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                                else
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                            var d, f = e(a, b),
                                g = f.length;
                            while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }) : e
                    }
                },
                pseudos: {
                    not: hb(function(a) {
                        var b = [],
                            c = [],
                            d = h(a.replace(R, "$1"));
                        return d[u] ? hb(function(a, b, c, e) {
                            var f, g = d(a, null, e, []),
                                h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a, d(b, null, f, c), !c.pop()
                        }
                    }),
                    has: hb(function(a) {
                        return function(b) {
                            return fb(a, b).length > 0
                        }
                    }),
                    contains: hb(function(a) {
                        return function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                    }),
                    lang: hb(function(a) {
                        return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                            function(b) {
                                var c;
                                do
                                    if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                                while ((b = b.parentNode) && 1 === b.nodeType);
                                return !1
                            }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Z.test(a.nodeName)
                    },
                    input: function(a) {
                        return Y.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: nb(function() {
                        return [0]
                    }),
                    last: nb(function(a, b) {
                        return [b - 1]
                    }),
                    eq: nb(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: nb(function(a, b) {
                        for (var c = 0; b > c; c += 2) a.push(c);
                        return a
                    }),
                    odd: nb(function(a, b) {
                        for (var c = 1; b > c; c += 2) a.push(c);
                        return a
                    }),
                    lt: nb(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                        return a
                    }),
                    gt: nb(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                        return a
                    })
                }
            }, d.pseudos.nth = d.pseudos.eq;
            for (b in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) d.pseudos[b] = lb(b);
            for (b in {
                    submit: !0,
                    reset: !0
                }) d.pseudos[b] = mb(b);

            function pb() {}
            pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k) return b ? 0 : k.slice(0);
                h = a, i = [], j = d.preFilter;
                while (h) {
                    (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                        value: c,
                        type: e[0].replace(R, " ")
                    }), h = h.slice(c.length));
                    for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                        value: c,
                        type: g,
                        matches: e
                    }), h = h.slice(c.length));
                    if (!c) break
                }
                return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
            };

            function qb(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
                return d
            }

            function rb(a, b, c) {
                var d = b.dir,
                    e = c && "parentNode" === d,
                    f = x++;
                return b.first ? function(b, c, f) {
                    while (b = b[d])
                        if (1 === b.nodeType || e) return a(b, c, f)
                } : function(b, c, g) {
                    var h, i, j = [w, f];
                    if (g) {
                        while (b = b[d])
                            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                                if (i[d] = j, j[2] = a(b, c, g)) return !0
                            }
                }
            }

            function sb(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } : a[0]
            }

            function tb(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c);
                return c
            }

            function ub(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
                return g
            }

            function vb(a, b, c, d, e, f) {
                return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                    var j, k, l, m = [],
                        n = [],
                        o = g.length,
                        p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                        q = !a || !f && b ? p : ub(p, m, a, h, i),
                        r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i), d) {
                        j = ub(r, n), d(j, [], h, i), k = j.length;
                        while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [], k = r.length;
                                while (k--)(l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
                })
            }

            function wb(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) {
                        return a === b
                    }, h, !0), l = rb(function(a) {
                        return K.call(b, a) > -1
                    }, h, !0), m = [function(a, c, d) {
                        return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                    }]; f > i; i++)
                    if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                            for (e = ++i; f > e; e++)
                                if (d.relative[a[e].type]) break;
                            return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                        }
                        m.push(c)
                    }
                return sb(m)
            }

            function xb(a, b) {
                var c = b.length > 0,
                    e = a.length > 0,
                    f = function(f, g, h, i, k) {
                        var l, m, o, p = 0,
                            q = "0",
                            r = f && [],
                            s = [],
                            t = j,
                            u = f || e && d.find.TAG("*", k),
                            v = w += null == t ? 1 : Math.random() || .1,
                            x = u.length;
                        for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                            if (e && l) {
                                m = 0;
                                while (o = a[m++])
                                    if (o(l, g, h)) {
                                        i.push(l);
                                        break
                                    }
                                k && (w = v)
                            }
                            c && ((l = !o && l) && p--, f && r.push(l))
                        }
                        if (p += q, c && q !== p) {
                            m = 0;
                            while (o = b[m++]) o(r, s, g, h);
                            if (f) {
                                if (p > 0)
                                    while (q--) r[q] || s[q] || (s[q] = G.call(i));
                                s = ub(s)
                            }
                            I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                        }
                        return k && (w = v, j = t), r
                    };
                return c ? hb(f) : f
            }
            return h = fb.compile = function(a, b) {
                var c, d = [],
                    e = [],
                    f = A[a + " "];
                if (!f) {
                    b || (b = g(a)), c = b.length;
                    while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                    f = A(a, xb(e, d)), f.selector = a
                }
                return f
            }, i = fb.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a,
                    o = !f && g(a = n.selector || a);
                if (e = e || [], 1 === o.length) {
                    if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                        n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                    }
                    i = X.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i], d.relative[l = k.type]) break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                            if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
            }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }), ib(function(a) {
                return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
            }) || jb("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }), c.attributes && ib(function(a) {
                return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
            }) || jb("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }), ib(function(a) {
                return null == a.getAttribute("disabled")
            }) || jb(L, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }), fb
        }(a);
        m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
        var t = m.expr.match.needsContext,
            u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            v = /^.[^:#\[\.,]*$/;

        function w(a, b, c) {
            if (m.isFunction(b)) return m.grep(a, function(a, d) {
                return !!b.call(a, d, a) !== c
            });
            if (b.nodeType) return m.grep(a, function(a) {
                return a === b !== c
            });
            if ("string" == typeof b) {
                if (v.test(b)) return m.filter(b, a, c);
                b = m.filter(b, a)
            }
            return m.grep(a, function(a) {
                return m.inArray(a, b) >= 0 !== c
            })
        }
        m.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }, m.fn.extend({
            find: function(a) {
                var b, c = [],
                    d = this,
                    e = d.length;
                if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                    for (b = 0; e > b; b++)
                        if (m.contains(d[b], this)) return !0
                }));
                for (b = 0; e > b; b++) m.find(a, d[b], c);
                return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
            },
            filter: function(a) {
                return this.pushStack(w(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(w(this, a || [], !0))
            },
            is: function(a) {
                return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
            }
        });
        var x, y = a.document,
            z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            A = m.fn.init = function(a, b) {
                var c, d;
                if (!a) return this;
                if ("string" == typeof a) {
                    if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                    if (c[1]) {
                        if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                            for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                        return this
                    }
                    if (d = y.getElementById(c[2]), d && d.parentNode) {
                        if (d.id !== c[2]) return x.find(a);
                        this.length = 1, this[0] = d
                    }
                    return this.context = y, this.selector = a, this
                }
                return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
            };
        A.prototype = m.fn, x = m(y);
        var B = /^(?:parents|prev(?:Until|All))/,
            C = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        m.extend({
            dir: function(a, b, c) {
                var d = [],
                    e = a[b];
                while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }), m.fn.extend({
            has: function(a) {
                var b, c = m(a, this),
                    d = c.length;
                return this.filter(function() {
                    for (b = 0; d > b; b++)
                        if (m.contains(this, c[b])) return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? m.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });

        function D(a, b) {
            do a = a[b]; while (a && 1 !== a.nodeType);
            return a
        }
        m.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return m.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return m.dir(a, "parentNode", c)
            },
            next: function(a) {
                return D(a, "nextSibling")
            },
            prev: function(a) {
                return D(a, "previousSibling")
            },
            nextAll: function(a) {
                return m.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return m.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return m.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return m.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return m.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return m.sibling(a.firstChild)
            },
            contents: function(a) {
                return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
            }
        }, function(a, b) {
            m.fn[a] = function(c, d) {
                var e = m.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
            }
        });
        var E = /\S+/g,
            F = {};

        function G(a) {
            var b = F[a] = {};
            return m.each(a.match(E) || [], function(a, c) {
                b[c] = !0
            }), b
        }
        m.Callbacks = function(a) {
            a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
            var b, c, d, e, f, g, h = [],
                i = !a.once && [],
                j = function(l) {
                    for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                        if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                            c = !1;
                            break
                        }
                    b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
                },
                k = {
                    add: function() {
                        if (h) {
                            var d = h.length;
                            ! function f(b) {
                                m.each(b, function(b, c) {
                                    var d = m.type(c);
                                    "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                                })
                            }(arguments), b ? e = h.length : c && (g = d, j(c))
                        }
                        return this
                    },
                    remove: function() {
                        return h && m.each(arguments, function(a, c) {
                            var d;
                            while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                        }), this
                    },
                    has: function(a) {
                        return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
                    },
                    empty: function() {
                        return h = [], e = 0, this
                    },
                    disable: function() {
                        return h = i = c = void 0, this
                    },
                    disabled: function() {
                        return !h
                    },
                    lock: function() {
                        return i = void 0, c || k.disable(), this
                    },
                    locked: function() {
                        return !i
                    },
                    fireWith: function(a, c) {
                        return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
                    },
                    fire: function() {
                        return k.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!d
                    }
                };
            return k
        }, m.extend({
            Deferred: function(a) {
                var b = [
                        ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", m.Callbacks("memory")]
                    ],
                    c = "pending",
                    d = {
                        state: function() {
                            return c
                        },
                        always: function() {
                            return e.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var a = arguments;
                            return m.Deferred(function(c) {
                                m.each(b, function(b, f) {
                                    var g = m.isFunction(a[b]) && a[b];
                                    e[f[1]](function() {
                                        var a = g && g.apply(this, arguments);
                                        a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                    })
                                }), a = null
                            }).promise()
                        },
                        promise: function(a) {
                            return null != a ? m.extend(a, d) : d
                        }
                    },
                    e = {};
                return d.pipe = d.then, m.each(b, function(a, f) {
                    var g = f[2],
                        h = f[3];
                    d[f[1]] = g.add, h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments), this
                    }, e[f[0] + "With"] = g.fireWith
                }), d.promise(e), a && a.call(e, e), e
            },
            when: function(a) {
                var b = 0,
                    c = d.call(arguments),
                    e = c.length,
                    f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                    g = 1 === f ? a : m.Deferred(),
                    h = function(a, b, c) {
                        return function(e) {
                            b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                        }
                    },
                    i, j, k;
                if (e > 1)
                    for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                return f || g.resolveWith(k, c), g.promise()
            }
        });
        var H;
        m.fn.ready = function(a) {
            return m.ready.promise().done(a), this
        }, m.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? m.readyWait++ : m.ready(!0)
            },
            ready: function(a) {
                if (a === !0 ? !--m.readyWait : !m.isReady) {
                    if (!y.body) return setTimeout(m.ready);
                    m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
                }
            }
        });

        function I() {
            y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
        }

        function J() {
            (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
        }
        m.ready.promise = function(b) {
            if (!H)
                if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
                else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
            else {
                y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
                var c = !1;
                try {
                    c = null == a.frameElement && y.documentElement
                } catch (d) {}
                c && c.doScroll && ! function e() {
                    if (!m.isReady) {
                        try {
                            c.doScroll("left")
                        } catch (a) {
                            return setTimeout(e, 50)
                        }
                        I(), m.ready()
                    }
                }()
            }
            return H.promise(b)
        };
        var K = "undefined",
            L;
        for (L in m(k)) break;
        k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
                var a, b, c, d;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
            }),
            function() {
                var a = y.createElement("div");
                if (null == k.deleteExpando) {
                    k.deleteExpando = !0;
                    try {
                        delete a.test
                    } catch (b) {
                        k.deleteExpando = !1
                    }
                }
                a = null
            }(), m.acceptData = function(a) {
                var b = m.noData[(a.nodeName + " ").toLowerCase()],
                    c = +a.nodeType || 1;
                return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
            };
        var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            N = /([A-Z])/g;

        function O(a, b, c) {
            if (void 0 === c && 1 === a.nodeType) {
                var d = "data-" + b.replace(N, "-$1").toLowerCase();
                if (c = a.getAttribute(d), "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                    } catch (e) {}
                    m.data(a, b, c)
                } else c = void 0
            }
            return c
        }

        function P(a) {
            var b;
            for (b in a)
                if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
            return !0
        }

        function Q(a, b, d, e) {
            if (m.acceptData(a)) {
                var f, g, h = m.expando,
                    i = a.nodeType,
                    j = i ? m.cache : a,
                    k = i ? a[h] : a[h] && h;
                if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {
                    toJSON: m.noop
                }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
            }
        }

        function R(a, b, c) {
            if (m.acceptData(a)) {
                var d, e, f = a.nodeType,
                    g = f ? m.cache : a,
                    h = f ? a[m.expando] : m.expando;
                if (g[h]) {
                    if (b && (d = c ? g[h] : g[h].data)) {
                        m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                        while (e--) delete d[b[e]];
                        if (c ? !P(d) : !m.isEmptyObject(d)) return
                    }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
                }
            }
        }
        m.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
            },
            data: function(a, b, c) {
                return Q(a, b, c)
            },
            removeData: function(a, b) {
                return R(a, b)
            },
            _data: function(a, b, c) {
                return Q(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return R(a, b, !0)
            }
        }), m.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                        m._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    m.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    m.data(this, a, b)
                }) : f ? O(f, a, m.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    m.removeData(this, a)
                })
            }
        }), m.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = m.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = m._queueHooks(a, b),
                    g = function() {
                        m.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return m._data(a, c) || m._data(a, c, {
                    empty: m.Callbacks("once memory").add(function() {
                        m._removeData(a, b + "queue"), m._removeData(a, c)
                    })
                })
            }
        }), m.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = m.queue(this, a, b);
                    m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    m.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = m.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        });
        var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            T = ["Top", "Right", "Bottom", "Left"],
            U = function(a, b) {
                return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
            },
            V = m.access = function(a, b, c, d, e, f, g) {
                var h = 0,
                    i = a.length,
                    j = null == c;
                if ("object" === m.type(c)) {
                    e = !0;
                    for (h in c) m.access(a, b, h, c[h], !0, f, g)
                } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                        return j.call(m(a), c)
                    })), b))
                    for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
                return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
            },
            W = /^(?:checkbox|radio)$/i;
        ! function() {
            var a = y.createElement("input"),
                b = y.createElement("div"),
                c = y.createDocumentFragment();
            if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
                    k.noCloneEvent = !1
                }), b.cloneNode(!0).click()), null == k.deleteExpando) {
                k.deleteExpando = !0;
                try {
                    delete b.test
                } catch (d) {
                    k.deleteExpando = !1
                }
            }
        }(),
        function() {
            var b, c, d = y.createElement("div");
            for (b in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
            d = null
        }();
        var X = /^(?:input|select|textarea)$/i,
            Y = /^key/,
            Z = /^(?:mouse|pointer|contextmenu)|click/,
            $ = /^(?:focusinfocus|focusoutblur)$/,
            _ = /^([^.]*)(?:\.(.+)|)$/;

        function ab() {
            return !0
        }

        function bb() {
            return !1
        }

        function cb() {
            try {
                return y.activeElement
            } catch (a) {}
        }
        m.event = {
                global: {},
                add: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
                    if (r) {
                        c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                            return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                        }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                        while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                            type: o,
                            origType: q,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && m.expr.match.needsContext.test(e),
                            namespace: p.join(".")
                        }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                        a = null
                    }
                },
                remove: function(a, b, c, d, e) {
                    var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
                    if (r && (k = r.events)) {
                        b = (b || "").match(E) || [""], j = b.length;
                        while (j--)
                            if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                                l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                                while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                                i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                            } else
                                for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                        m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
                    }
                },
                trigger: function(b, c, d, e) {
                        var f, g, h, i, k, l, n, o = [d || y],
                            p = j.call(b, "type") ? b.type : b,
                            q = j.call(b, "namespace") ? b.namespace.split(".") : [];
                        if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                            if (!e && !k.noBubble && !m.isWindow(d)) {
                                for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                                l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                            }
                            n = 0;
                            while ((h = o[n