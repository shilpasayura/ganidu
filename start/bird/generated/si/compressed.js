// Automatically generated file.  Do not edit!
var g, h = this;

function aa() {}

function ba(a) {
    a.Wb = function() {
        return a.vh ? a.vh : a.vh = new a
    }
}

function ca(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function da(a) {
    return "array" == ca(a)
}

function ea(a) {
    var b = ca(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function p(a) {
    return "string" == typeof a
}

function fa(a) {
    return "number" == typeof a
}

function ga(a) {
    return "function" == ca(a)
}

function ha(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b
}

function ia(a) {
    return a[ja] || (a[ja] = ++ka)
}
var ja = "closure_uid_" + (1E9 * Math.random() >>> 0),
    ka = 0;

function la(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function ma(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function na(a, b, c) {
    na = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? la : ma;
    return na.apply(null, arguments)
}

function oa(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = c.slice();
        b.push.apply(b, arguments);
        return a.apply(this, b)
    }
}

function t(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.w = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.vq = function(a, c, f) {
        for (var k = Array(arguments.length - 2), l = 2; l < arguments.length; l++) k[l - 2] = arguments[l];
        return b.prototype[c].apply(a, k)
    }
};

function pa(a, b) {
    null != a && this.ib.apply(this, arguments)
}
g = pa.prototype;
g.Qc = "";
g.set = function(a) {
    this.Qc = "" + a
};
g.ib = function(a, b, c) {
    this.Qc += String(a);
    if (null != b)
        for (var d = 1; d < arguments.length; d++) this.Qc += arguments[d];
    return this
};
g.clear = function() {
    this.Qc = ""
};
g.toString = function() {
    return this.Qc
};
var qa;

function ra(a) {
    return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
}
var sa = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function ta(a, b) {
    var c = String(a).toLowerCase(),
        d = String(b).toLowerCase();
    return c < d ? -1 : c == d ? 0 : 1
}

function ua(a) {
    if (!va.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(wa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(xa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ya, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(za, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Aa, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ba, "&#0;"));
    return a
}
var wa = /&/g,
    xa = /</g,
    ya = />/g,
    za = /"/g,
    Aa = /'/g,
    Ba = /\x00/g,
    va = /[\x00&<>"']/;

function Ca(a) {
    return -1 != a.indexOf("&") ? "document" in h ? Da(a) : Ea(a) : a
}

function Da(a) {
    var b = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        },
        c;
    c = h.document.createElement("div");
    return a.replace(Fa, function(a, e) {
        var f = b[a];
        if (f) return f;
        if ("#" == e.charAt(0)) {
            var k = Number("0" + e.substr(1));
            isNaN(k) || (f = String.fromCharCode(k))
        }
        f || (c.innerHTML = a + " ", f = c.firstChild.nodeValue.slice(0, -1));
        return b[a] = f
    })
}

function Ea(a) {
    return a.replace(/&([^;]+);/g, function(a, c) {
        switch (c) {
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                if ("#" == c.charAt(0)) {
                    var d = Number("0" + c.substr(1));
                    if (!isNaN(d)) return String.fromCharCode(d)
                }
                return a
        }
    })
}
var Fa = /&([^;\s<&]+);?/g;

function Ga(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
}

function Ha() {
    return "background-color".replace(/\-([a-z])/g, function(a, b) {
        return b.toUpperCase()
    })
}

function Ia(a) {
    var b = p(void 0) ? "undefined".replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08") : "\\s";
    return a.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a, b, e) {
        return b + e.toUpperCase()
    })
};

function Ja() {
    this.g = Ka
}
Ja.prototype.Tc = !0;
Ja.prototype.uc = function() {
    return ""
};
Ja.prototype.toString = function() {
    return "Const{}"
};

function La(a) {
    return a instanceof Ja && a.constructor === Ja && a.g === Ka ? "" : "type_error:Const"
}
var Ka = {};

function Ma() {
    this.g = "";
    this.h = Na
}
Ma.prototype.Tc = !0;
Ma.prototype.uc = function() {
    return this.g
};
Ma.prototype.Tf = !0;
Ma.prototype.jd = function() {
    return 1
};
var Oa = /^(?:(?:https?|mailto|ftp):|[^&:/?#]*(?:[/?#]|$))/i,
    Na = {};

function Pa(a) {
    var b = new Ma;
    b.g = a;
    return b
}
Pa("about:blank");
var Qa = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (p(a)) return p(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    Ra = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    Sa = Array.prototype.filter ? function(a, b, c) {
        return Array.prototype.filter.call(a,
            b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = [], f = 0, k = p(a) ? a.split("") : a, l = 0; l < d; l++)
            if (l in k) {
                var n = k[l];
                b.call(c, n, l, a) && (e[f++] = n)
            }
        return e
    },
    Ta = Array.prototype.map ? function(a, b, c) {
        return Array.prototype.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f = p(a) ? a.split("") : a, k = 0; k < d; k++) k in f && (e[k] = b.call(c, f[k], k, a));
        return e
    },
    Ua = Array.prototype.every ? function(a, b, c) {
        return Array.prototype.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = p(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in
                e && !b.call(c, e[f], f, a)) return !1;
        return !0
    };

function Va(a, b) {
    return 0 <= Qa(a, b)
}

function Wa(a, b) {
    var c = Qa(a, b),
        d;
    (d = 0 <= c) && Array.prototype.splice.call(a, c, 1);
    return d
}

function Xa(a) {
    return Array.prototype.concat.apply(Array.prototype, arguments)
}

function Ya(a) {
    var b = a.length;
    if (0 < b) {
        for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
        return c
    }
    return []
}

function Za(a, b) {
    for (var c = 1; c < arguments.length; c++) {
        var d = arguments[c];
        if (ea(d)) {
            var e = a.length || 0,
                f = d.length || 0;
            a.length = e + f;
            for (var k = 0; k < f; k++) a[e + k] = d[k]
        } else a.push(d)
    }
}

function $a(a, b, c, d) {
    Array.prototype.splice.apply(a, ab(arguments, 1))
}

function ab(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};

function bb() {
    this.g = "";
    this.h = cb
}
bb.prototype.Tc = !0;
var cb = {};
bb.prototype.uc = function() {
    return this.g
};

function db(a) {
    var b = new bb;
    b.g = a;
    return b
}
var eb = db("");

function fb(a) {
    var b = "",
        c;
    for (c in a) {
        if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c);
        var d = a[c];
        if (null != d) {
            if (d instanceof Ja) d = La(d);
            else if (gb.test(d)) {
                for (var e = !0, f = !0, k = 0; k < d.length; k++) {
                    var l = d.charAt(k);
                    "'" == l && f ? e = !e : '"' == l && e && (f = !f)
                }
                e && f || (d = "zClosurez")
            } else d = "zClosurez";
            b += c + ":" + d + ";"
        }
    }
    return b ? db(b) : eb
}
var gb = /^([-,."'%_!# a-zA-Z0-9]+|(?:rgb|hsl)a?\([0-9.%, ]+\))$/;

function hb() {
    this.g = ib
}
hb.prototype.Tc = !0;
hb.prototype.uc = function() {
    return ""
};
hb.prototype.Tf = !0;
hb.prototype.jd = function() {
    return 1
};
var ib = {};

function jb(a, b, c) {
    for (var d in a) b.call(c, a[d], d, a)
}
var kb = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

function lb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < kb.length; f++) c = kb[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var mb = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    command: !0,
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
};
var nb;
a: {
    var ob = h.navigator;
    if (ob) {
        var pb = ob.userAgent;
        if (pb) {
            nb = pb;
            break a
        }
    }
    nb = ""
}

function qb(a) {
    return -1 != nb.indexOf(a)
};

function rb() {
    this.g = "";
    this.i = sb;
    this.h = null
}
rb.prototype.Tf = !0;
rb.prototype.jd = function() {
    return this.h
};
rb.prototype.Tc = !0;
rb.prototype.uc = function() {
    return this.g
};

function tb(a) {
    if (a instanceof rb && a.constructor === rb && a.i === sb) return a.g;
    ca(a);
    return "type_error:SafeHtml"
}

function ub(a) {
    if (a instanceof rb) return a;
    var b = null;
    a.Tf && (b = a.jd());
    a = ua(a.Tc ? a.uc() : String(a));
    return vb(a, b)
}
var wb = /^[a-zA-Z0-9-]+$/,
    xb = {
        action: !0,
        cite: !0,
        data: !0,
        formaction: !0,
        href: !0,
        manifest: !0,
        poster: !0,
        src: !0
    },
    yb = {
        APPLET: !0,
        BASE: !0,
        EMBED: !0,
        IFRAME: !0,
        LINK: !0,
        MATH: !0,
        META: !0,
        OBJECT: !0,
        SCRIPT: !0,
        STYLE: !0,
        SVG: !0,
        TEMPLATE: !0
    };

function zb(a, b, c) {
    if (!wb.test(a)) throw Error("Invalid tag name <" + a + ">.");
    if (a.toUpperCase() in yb) throw Error("Tag name <" + a + "> is not allowed for SafeHtml.");
    var d = null,
        e, f = "";
    if (b)
        for (e in b) {
            if (!wb.test(e)) throw Error('Invalid attribute name "' + e + '".');
            var k = b[e];
            if (null != k) {
                var l, n = a;
                l = e;
                if (k instanceof Ja) k = La(k);
                else if ("style" == l.toLowerCase()) {
                    if (!ha(k)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof k + " given: " + k);
                    k instanceof bb || (k =
                        fb(k));
                    k instanceof bb && k.constructor === bb && k.h === cb ? k = k.g : (ca(k), k = "type_error:SafeStyle")
                } else {
                    if (/^on/i.test(l)) throw Error('Attribute "' + l + '" requires goog.string.Const value, "' + k + '" given.');
                    if (l.toLowerCase() in xb)
                        if (k instanceof hb) k instanceof hb && k.constructor === hb && k.g === ib ? k = "" : (ca(k), k = "type_error:TrustedResourceUrl");
                        else if (k instanceof Ma) k instanceof Ma && k.constructor === Ma && k.h === Na ? k = k.g : (ca(k), k = "type_error:SafeUrl");
                    else if (p(k)) k instanceof Ma || (k = k.Tc ? k.uc() : String(k), Oa.test(k) ||
                        (k = "about:invalid#zClosurez"), k = Pa(k)), k = k.uc();
                    else throw Error('Attribute "' + l + '" on tag "' + n + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + k + '" given.');
                }
                k.Tc && (k = k.uc());
                l = l + '="' + ua(String(k)) + '"';
                f += " " + l
            }
        }
    e = "<" + a + f;
    null != c ? da(c) || (c = [c]) : c = [];
    !0 === mb[a.toLowerCase()] ? e += ">" : (d = Ab(c), e += ">" + tb(d) + "</" + a + ">", d = d.jd());
    (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
    return vb(e, d)
}

function Ab(a) {
    function b(a) {
        da(a) ? Ra(a, b) : (a = ub(a), d += tb(a), a = a.jd(), 0 == c ? c = a : 0 != a && c != a && (c = null))
    }
    var c = 0,
        d = "";
    Ra(arguments, b);
    return vb(d, c)
}
var sb = {};

function vb(a, b) {
    var c = new rb;
    c.g = a;
    c.h = b;
    return c
}
vb("<!DOCTYPE html>", 0);
var Bb = vb("", 0),
    Cb = vb("<br>", 0);
var Db = {},
    Eb = {};

function Fb() {
    throw Error("Do not instantiate directly");
}
Fb.prototype.we = null;
Fb.prototype.toString = function() {
    return this.content
};
Fb.prototype.ef = function() {
    if (this.xe === Eb) return ub(this.toString());
    if (this.xe !== Db) throw Error("Sanitized content was not of kind TEXT or HTML.");
    return vb(this.toString(), this.we || null)
};
var Gb = qb("Opera"),
    u = qb("Trident") || qb("MSIE"),
    Hb = qb("Edge"),
    Ib = qb("Gecko") && !(-1 != nb.toLowerCase().indexOf("webkit") && !qb("Edge")) && !(qb("Trident") || qb("MSIE")) && !qb("Edge"),
    v = -1 != nb.toLowerCase().indexOf("webkit") && !qb("Edge"),
    Jb = v && qb("Mobile"),
    Kb = qb("Macintosh"),
    Lb = qb("Android"),
    Mb = qb("iPhone") && !qb("iPod") && !qb("iPad"),
    Nb = qb("iPad");

function Ob() {
    var a = h.document;
    return a ? a.documentMode : void 0
}
var Pb;
a: {
    var Qb = "",
        Rb = function() {
            var a = nb;
            if (Ib) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (Hb) return /Edge\/([\d\.]+)/.exec(a);
            if (u) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (v) return /WebKit\/(\S+)/.exec(a);
            if (Gb) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    Rb && (Qb = Rb ? Rb[1] : "");
    if (u) {
        var Sb = Ob();
        if (null != Sb && Sb > parseFloat(Qb)) {
            Pb = String(Sb);
            break a
        }
    }
    Pb = Qb
}
var Tb = {};

function Ub(a) {
    var b;
    if (!(b = Tb[a])) {
        b = 0;
        for (var c = sa(String(Pb)).split("."), d = sa(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var k = c[f] || "",
                l = d[f] || "",
                n = RegExp("(\\d*)(\\D*)", "g"),
                m = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = n.exec(k) || ["", "", ""],
                    r = m.exec(l) || ["", "", ""];
                if (0 == q[0].length && 0 == r[0].length) break;
                b = Ga(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || Ga(0 == q[2].length, 0 == r[2].length) || Ga(q[2], r[2])
            } while (0 == b)
        }
        b = Tb[a] = 0 <= b
    }
    return b
}
var Vb = h.document,
    Wb = Vb && u ? Ob() || ("CSS1Compat" == Vb.compatMode ? parseInt(Pb, 10) : 5) : void 0;

function Xb(a, b) {
    this.width = a;
    this.height = b
}
g = Xb.prototype;
g.clone = function() {
    return new Xb(this.width, this.height)
};
g.Gk = function() {
    return this.width * this.height
};
g.wh = function() {
    return !this.Gk()
};
g.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.width *= a;
    this.height *= c;
    return this
};

function Yb(a, b) {
    a.innerHTML = tb(b)
};
var Zb = !u || 9 <= Number(Wb),
    $b = !Ib && !u || u && 9 <= Number(Wb) || Ib && Ub("1.9.1"),
    ac = u && !Ub("9");

function cc(a, b, c) {
    return Math.min(Math.max(a, b), c)
}

function dc(a) {
    a %= 360;
    return 0 > 360 * a ? a + 360 : a
}
var ec = Math.sign || function(a) {
    return 0 < a ? 1 : 0 > a ? -1 : a
};

function w(a, b) {
    this.x = void 0 !== a ? a : 0;
    this.y = void 0 !== b ? b : 0
}
g = w.prototype;
g.clone = function() {
    return new w(this.x, this.y)
};

function fc(a, b) {
    return a == b ? !0 : a && b ? a.x == b.x && a.y == b.y : !1
}

function gc(a, b) {
    var c = a.x - b.x,
        d = a.y - b.y;
    return Math.sqrt(c * c + d * d)
}

function hc(a, b) {
    return new w(a.x - b.x, a.y - b.y)
}
g.ceil = function() {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this
};
g.floor = function() {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this
};
g.round = function() {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), fa(b) && (this.y += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.x *= a;
    this.y *= c;
    return this
};

function ic(a) {
    return a ? new jc(kc(a)) : qa || (qa = new jc)
}

function lc(a, b) {
    var c = document,
        c = b || c;
    if (c.querySelectorAll && c.querySelector) return c.querySelectorAll("TBODY" + (a ? "." + a : ""));
    if (a && c.getElementsByClassName) {
        for (var c = c.getElementsByClassName(a), d = {}, e = 0, f = 0, k; k = c[f]; f++) "TBODY" == k.nodeName && (d[e++] = k);
        d.length = e;
        return d
    }
    c = c.getElementsByTagName("TBODY");
    if (a) {
        d = {};
        for (f = e = 0; k = c[f]; f++) {
            var l = k.className;
            "function" == typeof l.split && Va(l.split(/\s+/), a) && (d[e++] = k)
        }
        d.length = e;
        return d
    }
    return c
}

function mc(a, b) {
    jb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : nc.hasOwnProperty(d) ? a.setAttribute(nc[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var nc = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
};

function oc() {
    var a = window.document,
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
    return new Xb(a.clientWidth, a.clientHeight)
}

function pc(a) {
    return a.scrollingElement ? a.scrollingElement : v || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
}

function x(a, b, c) {
    return qc(document, arguments)
}

function qc(a, b) {
    var c = b[0],
        d = b[1];
    if (!Zb && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', ua(d.name), '"');
        if (d.type) {
            c.push(' type="', ua(d.type), '"');
            var e = {};
            lb(e, d);
            delete e.type;
            d = e
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (p(d) ? c.className = d : da(d) ? c.className = d.join(" ") : mc(c, d));
    2 < b.length && rc(a, c, b);
    return c
}

function rc(a, b, c) {
    function d(c) {
        c && b.appendChild(p(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        !ea(f) || ha(f) && 0 < f.nodeType ? d(f) : Ra(sc(f) ? Ya(f) : f, d)
    }
}

function tc(a) {
    for (var b; b = a.firstChild;) a.removeChild(b)
}

function uc(a, b) {
    b.parentNode && b.parentNode.insertBefore(a, b.nextSibling)
}

function y(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function vc(a, b) {
    if (!a || !b) return !1;
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function kc(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function wc(a, b) {
    if ("textContent" in a) a.textContent = b;
    else if (3 == a.nodeType) a.data = b;
    else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else tc(a), a.appendChild(kc(a).createTextNode(String(b)))
}
var xc = {
        SCRIPT: 1,
        STYLE: 1,
        HEAD: 1,
        IFRAME: 1,
        OBJECT: 1
    },
    yc = {
        IMG: " ",
        BR: "\n"
    };

function zc(a) {
    a = a.getAttributeNode("tabindex");
    return null != a && a.specified
}

function Bc(a) {
    a = a.tabIndex;
    return fa(a) && 0 <= a && 32768 > a
}

function Cc(a) {
    if (ac && null !== a && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
    else {
        var b = [];
        Dc(a, b, !0);
        a = b.join("")
    }
    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
    a = a.replace(/\u200B/g, "");
    ac || (a = a.replace(/ +/g, " "));
    " " != a && (a = a.replace(/^\s*/, ""));
    return a
}

function Ec(a) {
    var b = [];
    Dc(a, b, !1);
    return b.join("")
}

function Dc(a, b, c) {
    if (!(a.nodeName in xc))
        if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
        else if (a.nodeName in yc) b.push(yc[a.nodeName]);
    else
        for (a = a.firstChild; a;) Dc(a, b, c), a = a.nextSibling
}

function sc(a) {
    if (a && "number" == typeof a.length) {
        if (ha(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ga(a)) return "function" == typeof a.item
    }
    return !1
}

function jc(a) {
    this.g = a || h.document || document
}
g = jc.prototype;
g.D = function(a) {
    return p(a) ? this.g.getElementById(a) : a
};
g.xb = function(a, b, c) {
    return qc(this.g, arguments)
};
g.appendChild = function(a, b) {
    a.appendChild(b)
};
g.Dh = tc;
g.Oc = function(a) {
    return $b && void 0 != a.children ? a.children : Sa(a.childNodes, function(a) {
        return 1 == a.nodeType
    })
};
g.contains = vc;
u && Ub(8);

function Fc(a) {
    if (null != a) switch (a.we) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function Gc() {
    Fb.call(this)
}
t(Gc, Fb);
Gc.prototype.xe = Db;

function Hc(a) {
    return null != a && a.xe === Db ? a : Ic(String(String(a)).replace(Jc, Kc), Fc(a))
}

function Lc() {
    Fb.call(this)
}
t(Lc, Fb);
Lc.prototype.xe = {}.Im;

function Mc(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.we = d);
        return e
    }
}
var Ic = Mc(Gc);
Mc(Lc);
(function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        if (!String(a)) return "";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.we = d);
        return e
    }
})(Gc);
var Nc = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
};

function Kc(a) {
    return Nc[a]
}
var Jc = /[\x00\x22\x26\x27\x3c\x3e]/g;
var Oc = {},
    Pc, C, Qc, Rc, Sc, Tc;

function Uc() {
    for (var a = Vc, b = D, c = '<div style="display: none"><span id="Games_name">ගනිදු ක්‍රීඩා</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_linesOfCode1">ඔබ මේ කොටස ජාවාස්ක්‍රිප්ට් පේළි  එකකින් විසඳුවේය</span><span id="Games_linesOfCode2">ඔබ මේ කොටස ජාවාස්ක්‍රිප්ට් පේළි  %1 කින් විසඳුවේය.</span><span id="Games_nextLevel">ඔබ %1 මට්ටමට ලෑස්තිද?</span><span id="Games_finalLevel">ඔබ ඊ ළඟ අභියෝගයට ලෑස්තිද?</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip"ඔබ ලියූ ප්‍රෝග්‍රෑමය දුවවන්න.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">උදව්</span><span id="Games_dialogOk">හරි</span><span id="Games_dialogCancel">අවලංගු</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\n\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span></div><div style="display: none"><span id="Bird_noWorm">පණුවෙක් නොමැත</span><span id="Bird_heading">දිශාව</span><span id="Bird_noWormTooltip">පණුවෙකු නොලැබුණු කුරුල්ලාගේ තත්වය \\nදුර්වලයි. </span><span id="Bird_headingTooltip">ඔබ දෙන කෝණය අනුව කුරු‍ල්ලා පියාඹයි. 0 නම් දකුණට, 90 නම් ඉහලට.</span><span id="Bird_positionTooltip">x සහ y කුරුල්ලාගේ තැනයි. \\nx = 0 විට කුරුල්ලා වම් පැත්තට ළඟයි\\n x = 100 විට කුරුල්ලා දකුණු පැත්තට ලඟයි.\\n y = 0 විට කුරුල්ලා පහලයි\\n y = 100 විට කුරුල්ලා ඉහළයි. </span></div><table width="100%"><tr><td><h1>' + ('<span id="title">' +
            (Wc ? '<a href="index.html?lang=' + Hc(a) + '">' : '<a href="./?lang=' + Hc(a) + '">') + "ගනිදු ක්‍රීඩා</a> : " + Hc("Bird") + "</span>"), d = " &nbsp; ", e = 1; 11 > e; e++) d += " " + (e == b ? '<span class="level_number level_done" id="level' + Hc(e) + '">' + Hc(e) + "</span>" : 10 == e ? '<a class="level_number" id="level' + Hc(e) + '" href="?lang=' + Hc(a) + "&level=" + Hc(e) + Hc("") + '">' + Hc(e) + "</a>" : '<a class="level_dot" id="level' + Hc(e) + '" href="?lang=' + Hc(a) + "&level=" + Hc(e) + Hc("") + '"></a>');
    return c + d + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> ප්‍රෝගෑමය දුවන්න</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>' +
        ('<xml id="toolbox" style="display: none;"><block type="bird_heading"></block>' + (2 <= b ? (4 == b || 5 == b ? '<block type="bird_noWorm" disabled="true"></block>' : '<block type="bird_noWorm"></block>') + (4 <= b ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' + (5 <= b ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' +
            (8 <= b ? '<block type="bird_and"></block>' : "") : "") : "") : "") + "</xml>") + '<div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">සුබපැතුම්!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">අවලංගු</button><button id="doneOk" class="secondary">හරි</button></div></div><div id="dialogAbort" class="dialogHiddenContent">මේ මට්ටම ඉතාම අමාරුයි. ඔබ අනිත් ක්‍රීඩාවට ගොස් නැවත පැමිණීමට කැමතිද?<div id="dialogAbortButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">අවලංගු</button><button id="abortOk" class="secondary">හරි</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div><div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">හරි</button></div></div><div id="dialogHelp" class="dialogHiddenContent">' +
        (1 == b ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>කුරුල්ලාගේ දිසාව වෙනස් කර පණුවා ගෙන කූඩුවට යාමට සලස්වන්න.</td></tr></table>' : 2 == b ? '<table><tr><td><img src="common/help.png"></td><td>මේ කොටස භාවිතා කර පණුවා අ‍ල්ලා ගත්තේ නම් එක දිසාවකටද, නැතිනම් වෙනත් දිසාවකට ද යන්න.</td><td><img src="bird/help_up.png"></td></tr></table>' :
            4 == b ? "<table><tr><td><img src=\"common/help.png\"></td><td>x කුරුල්ලා දැන් ඉන්නා තිරස් තැනයි. මේ කොටස භාවිතා කර x යම් ගණනකට වඩා අඩුනම් එක දිසාවකටද, නැතිනම් වෙනත් දිසාවකටද කුරුල්ලා යාමට සලස්වන්න.</td><td><img src=\"bird/help_up.png\"></td></tr></table>" : 5 == b ? '<table><tr><td><img src="bird/help_up.png"></td><td>රූපය මත කොටා \'if\' කොටස වෙනස් කරන්න.</td><td><img src="common/help.png"></td></tr></table>' : 6 == b ? "<table><tr><td><img src=\"bird/help_up.png\"></td><td>මේ මට්ටමට \'else\' හා \'else if\' කොටස් අවශ්‍ය වේ.</td><td><img src=\"common/help.png\"></td></tr></table>" :
            8 == b ? '<table><tr><td><img src="bird/help_up.png"></td><td>\'and\' කොටස සත්‍ය වන්නේ එයට අැතු‍ල් කරන දත්ත දෙකම සත්‍ය නම් පමණි.</td><td><img src="common/help.png"></td></tr></table>' : "") + "</div>" + (5 == b ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>\'if\' කොටසට  \'else\' කොටස අැදගන යන්න.</td></tr></table></div>' : "")
};

function Xc(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
g = Xc.prototype;
g.Hb = function() {
    return this.right - this.left
};
g.Pc = function() {
    return this.bottom - this.top
};
g.clone = function() {
    return new Xc(this.top, this.right, this.bottom, this.left)
};
g.contains = function(a) {
    return this && a ? a instanceof Xc ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
};
g.ceil = function() {
    this.top = Math.ceil(this.top);
    this.right = Math.ceil(this.right);
    this.bottom = Math.ceil(this.bottom);
    this.left = Math.ceil(this.left);
    return this
};
g.floor = function() {
    this.top = Math.floor(this.top);
    this.right = Math.floor(this.right);
    this.bottom = Math.floor(this.bottom);
    this.left = Math.floor(this.left);
    return this
};
g.round = function() {
    this.top = Math.round(this.top);
    this.right = Math.round(this.right);
    this.bottom = Math.round(this.bottom);
    this.left = Math.round(this.left);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, fa(b) && (this.top += b, this.bottom += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.right *= a;
    this.top *= c;
    this.bottom *= c;
    return this
};

function Yc(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
g = Yc.prototype;
g.clone = function() {
    return new Yc(this.left, this.top, this.width, this.height)
};
g.contains = function(a) {
    return a instanceof Yc ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
g.ceil = function() {
    this.left = Math.ceil(this.left);
    this.top = Math.ceil(this.top);
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
g.floor = function() {
    this.left = Math.floor(this.left);
    this.top = Math.floor(this.top);
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
g.round = function() {
    this.left = Math.round(this.left);
    this.top = Math.round(this.top);
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
g.translate = function(a, b) {
    a instanceof w ? (this.left += a.x, this.top += a.y) : (this.left += a, fa(b) && (this.top += b));
    return this
};
g.scale = function(a, b) {
    var c = fa(b) ? b : a;
    this.left *= a;
    this.width *= a;
    this.top *= c;
    this.height *= c;
    return this
};

function Zc(a) {
    Zc[" "](a);
    return a
}
Zc[" "] = aa;
var $c = {};

function ad(a, b) {
    var c = kc(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null)) ? c[b] || c.getPropertyValue(b) || "" : ""
}

function bd(a, b) {
    return ad(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
}

function cd() {
    var a = document,
        b = a.body,
        a = a.documentElement;
    return new w(b.scrollLeft || a.scrollLeft, b.scrollTop || a.scrollTop)
}

function dd(a) {
    var b;
    try {
        b = a.getBoundingClientRect()
    } catch (c) {
        return {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        }
    }
    u && a.ownerDocument.body && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function ed(a) {
    var b = kc(a),
        c = new w(0, 0),
        d;
    d = b ? kc(b) : document;
    d = !u || 9 <= Number(Wb) || "CSS1Compat" == ic(d).g.compatMode ? d.documentElement : d.body;
    if (a == d) return c;
    a = dd(a);
    d = ic(b).g;
    b = pc(d);
    d = d.parentWindow || d.defaultView;
    b = u && Ub("10") && d.pageYOffset != b.scrollTop ? new w(b.scrollLeft, b.scrollTop) : new w(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
    c.x = a.left + b.x;
    c.y = a.top + b.y;
    return c
}

function fd(a) {
    var b = gd;
    if ("none" != bd(a, "display")) return b(a);
    var c = a.style,
        d = c.display,
        e = c.visibility,
        f = c.position;
    c.visibility = "hidden";
    c.position = "absolute";
    c.display = "inline";
    a = b(a);
    c.display = d;
    c.position = f;
    c.visibility = e;
    return a
}

function gd(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = v && !b && !c;
    return (void 0 === b || d) && a.getBoundingClientRect ? (a = dd(a), new Xb(a.right - a.left, a.bottom - a.top)) : new Xb(b, c)
}

function hd(a, b) {
    a.style.display = b ? "" : "none"
}
var id = Ib ? "MozUserSelect" : v || Hb ? "WebkitUserSelect" : null;

function jd(a, b) {
    var c = b ? null : a.getElementsByTagName("*");
    if (id) {
        var d = "none";
        a.style && (a.style[id] = d);
        if (c)
            for (var e = 0, f; f = c[e]; e++) f.style && (f.style[id] = d)
    } else if (u || Gb)
        if (d = "on", a.setAttribute("unselectable", d), c)
            for (e = 0; f = c[e]; e++) f.setAttribute("unselectable", d)
}
var kd = {
    thin: 2,
    medium: 4,
    thick: 6
};

function ld(a, b) {
    if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
    var c = a.currentStyle ? a.currentStyle[b + "Width"] : null,
        d;
    if (c in kd) d = kd[c];
    else if (/^\d+px?$/.test(c)) d = parseInt(c, 10);
    else {
        d = a.style.left;
        var e = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = c;
        c = a.style.pixelLeft;
        a.style.left = d;
        a.runtimeStyle.left = e;
        d = c
    }
    return d
};

function md() {
    0 != nd && (od[ia(this)] = this);
    this.K = this.K;
    this.I = this.I
}
var nd = 0,
    od = {};
md.prototype.K = !1;
md.prototype.C = function() {
    if (!this.K && (this.K = !0, this.xa(), 0 != nd)) {
        var a = ia(this);
        delete od[a]
    }
};

function pd(a, b) {
    a.K ? b.call(void 0) : (a.I || (a.I = []), a.I.push(b))
}
md.prototype.xa = function() {
    if (this.I)
        for (; this.I.length;) this.I.shift()()
};

function qd(a) {
    a && "function" == typeof a.C && a.C()
};
var rd = "closure_listenable_" + (1E6 * Math.random() | 0),
    sd = 0;

function td(a, b, c, d, e) {
    this.listener = a;
    this.g = null;
    this.src = b;
    this.type = c;
    this.ue = !!d;
    this.Ne = e;
    this.nh = ++sd;
    this.wd = this.te = !1
}

function ud(a) {
    a.wd = !0;
    a.listener = null;
    a.g = null;
    a.src = null;
    a.Ne = null
};

function vd(a) {
    this.src = a;
    this.g = {};
    this.h = 0
}
vd.prototype.add = function(a, b, c, d, e) {
    var f = a.toString();
    a = this.g[f];
    a || (a = this.g[f] = [], this.h++);
    var k = wd(a, b, d, e); - 1 < k ? (b = a[k], c || (b.te = !1)) : (b = new td(b, this.src, f, !!d, e), b.te = c, a.push(b));
    return b
};

function xd(a, b) {
    var c = b.type;
    c in a.g && Wa(a.g[c], b) && (ud(b), 0 == a.g[c].length && (delete a.g[c], a.h--))
}

function yd(a, b, c, d, e) {
    a = a.g[b.toString()];
    b = -1;
    a && (b = wd(a, c, d, e));
    return -1 < b ? a[b] : null
}

function wd(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
        var f = a[e];
        if (!f.wd && f.listener == b && f.ue == !!c && f.Ne == d) return e
    }
    return -1
};

function zd(a, b) {
    this.type = a;
    this.i = this.target = b;
    this.j = !1;
    this.Eh = !0
}
zd.prototype.stopPropagation = function() {
    this.j = !0
};
zd.prototype.preventDefault = function() {
    this.Eh = !1
};
var Ad = !u || 9 <= Number(Wb),
    Bd = !u || 9 <= Number(Wb),
    Cd = u && !Ub("9");
!v || Ub("528");
Ib && Ub("1.9b") || u && Ub("8") || Gb && Ub("9.5") || v && Ub("528");
Ib && !Ub("8") || u && Ub("9");
var Dd = "ontouchstart" in h || !!(h.document && document.documentElement && "ontouchstart" in document.documentElement) || !(!h.navigator || !h.navigator.msMaxTouchPoints);

function Ed(a, b) {
    zd.call(this, a ? a.type : "");
    this.u = this.i = this.target = null;
    this.B = this.g = this.clientY = this.clientX = 0;
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.state = null;
    this.F = !1;
    this.h = null;
    a && this.G(a, b)
}
t(Ed, zd);
var Fd = [1, 4, 2];
Ed.prototype.G = function(a, b) {
    var c = this.type = a.type,
        d = a.changedTouches ? a.changedTouches[0] : null;
    this.target = a.target || a.srcElement;
    this.i = b;
    var e = a.relatedTarget;
    if (e) {
        if (Ib) {
            var f;
            a: {
                try {
                    Zc(e.nodeName);
                    f = !0;
                    break a
                } catch (k) {}
                f = !1
            }
            f || (e = null)
        }
    } else "mouseover" == c ? e = a.fromElement : "mouseout" == c && (e = a.toElement);
    this.u = e;
    null === d ? (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY) : (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !==
        d.clientY ? d.clientY : d.pageY);
    this.g = a.keyCode || 0;
    this.B = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.F = Kb ? a.metaKey : a.ctrlKey;
    this.state = a.state;
    this.h = a;
    a.defaultPrevented && this.preventDefault()
};

function Gd(a) {
    return Ad ? 0 == a.h.button : "click" == a.type ? !0 : !!(a.h.button & Fd[0])
}
Ed.prototype.stopPropagation = function() {
    Ed.w.stopPropagation.call(this);
    this.h.stopPropagation ? this.h.stopPropagation() : this.h.cancelBubble = !0
};
Ed.prototype.preventDefault = function() {
    Ed.w.preventDefault.call(this);
    var a = this.h;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = !1, Cd) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
var Hd = "closure_lm_" + (1E6 * Math.random() | 0),
    Id = {},
    Jd = 0;

function Kd(a, b, c, d, e) {
    if (da(b)) {
        for (var f = 0; f < b.length; f++) Kd(a, b[f], c, d, e);
        return null
    }
    c = Ld(c);
    if (a && a[rd]) a = a.X(b, c, d, e);
    else {
        if (!b) throw Error("Invalid event type");
        var f = !!d,
            k = Md(a);
        k || (a[Hd] = k = new vd(a));
        c = k.add(b, c, !1, d, e);
        if (!c.g) {
            d = Nd();
            c.g = d;
            d.src = a;
            d.listener = c;
            if (a.addEventListener) a.addEventListener(b.toString(), d, f);
            else if (a.attachEvent) a.attachEvent(Od(b.toString()), d);
            else throw Error("addEventListener and attachEvent are unavailable.");
            Jd++
        }
        a = c
    }
    return a
}

function Nd() {
    var a = Pd,
        b = Bd ? function(c) {
            return a.call(b.src, b.listener, c)
        } : function(c) {
            c = a.call(b.src, b.listener, c);
            if (!c) return c
        };
    return b
}

function Qd(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) Qd(a, b[f], c, d, e);
    else c = Ld(c), a && a[rd] ? a.Db(b, c, d, e) : a && (a = Md(a)) && (b = yd(a, b, c, !!d, e)) && Rd(b)
}

function Rd(a) {
    if (!fa(a) && a && !a.wd) {
        var b = a.src;
        if (b && b[rd]) xd(b.tc, a);
        else {
            var c = a.type,
                d = a.g;
            b.removeEventListener ? b.removeEventListener(c, d, a.ue) : b.detachEvent && b.detachEvent(Od(c), d);
            Jd--;
            (c = Md(b)) ? (xd(c, a), 0 == c.h && (c.src = null, b[Hd] = null)) : ud(a)
        }
    }
}

function Od(a) {
    return a in Id ? Id[a] : Id[a] = "on" + a
}

function Sd(a, b, c, d) {
    var e = !0;
    if (a = Md(a))
        if (b = a.g[b.toString()])
            for (b = b.concat(), a = 0; a < b.length; a++) {
                var f = b[a];
                f && f.ue == c && !f.wd && (f = Td(f, d), e = e && !1 !== f)
            }
        return e
}

function Td(a, b) {
    var c = a.listener,
        d = a.Ne || a.src;
    a.te && Rd(a);
    return c.call(d, b)
}

function Pd(a, b) {
    if (a.wd) return !0;
    if (!Bd) {
        var c;
        if (!(c = b)) a: {
            c = ["window", "event"];
            for (var d = h, e; e = c.shift();)
                if (null != d[e]) d = d[e];
                else {
                    c = null;
                    break a
                }
            c = d
        }
        e = c;
        c = new Ed(e, this);
        d = !0;
        if (!(0 > e.keyCode || void 0 != e.returnValue)) {
            a: {
                var f = !1;
                if (0 == e.keyCode) try {
                    e.keyCode = -1;
                    break a
                } catch (n) {
                    f = !0
                }
                if (f || void 0 == e.returnValue) e.returnValue = !0
            }
            e = [];
            for (f = c.i; f; f = f.parentNode) e.push(f);
            for (var f = a.type, k = e.length - 1; !c.j && 0 <= k; k--) {
                c.i = e[k];
                var l = Sd(e[k], f, !0, c),
                    d = d && l
            }
            for (k = 0; !c.j && k < e.length; k++) c.i = e[k],
            l = Sd(e[k],
                f, !1, c),
            d = d && l
        }
        return d
    }
    return Td(a, new Ed(b, this))
}

function Md(a) {
    a = a[Hd];
    return a instanceof vd ? a : null
}
var Ud = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

function Ld(a) {
    if (ga(a)) return a;
    a[Ud] || (a[Ud] = function(b) {
        return a.handleEvent(b)
    });
    return a[Ud]
};

function Vd() {
    md.call(this);
    this.tc = new vd(this);
    this.Cd = this;
    this.fc = null
}
t(Vd, md);
Vd.prototype[rd] = !0;
g = Vd.prototype;
g.Je = function() {
    return this.fc
};
g.bf = function(a) {
    this.fc = a
};
g.removeEventListener = function(a, b, c, d) {
    Qd(this, a, b, c, d)
};

function Wd(a, b) {
    var c, d = a.Je();
    if (d)
        for (c = []; d; d = d.Je()) c.push(d);
    var d = a.Cd,
        e = b,
        f = e.type || e;
    if (p(e)) e = new zd(e, d);
    else if (e instanceof zd) e.target = e.target || d;
    else {
        var k = e,
            e = new zd(f, d);
        lb(e, k)
    }
    var k = !0,
        l;
    if (c)
        for (var n = c.length - 1; !e.j && 0 <= n; n--) l = e.i = c[n], k = Yd(l, f, !0, e) && k;
    e.j || (l = e.i = d, k = Yd(l, f, !0, e) && k, e.j || (k = Yd(l, f, !1, e) && k));
    if (c)
        for (n = 0; !e.j && n < c.length; n++) l = e.i = c[n], k = Yd(l, f, !1, e) && k;
    return k
}
g.xa = function() {
    Vd.w.xa.call(this);
    if (this.tc) {
        var a = this.tc,
            b = 0,
            c;
        for (c in a.g) {
            for (var d = a.g[c], e = 0; e < d.length; e++) ++b, ud(d[e]);
            delete a.g[c];
            a.h--
        }
    }
    this.fc = null
};
g.X = function(a, b, c, d) {
    return this.tc.add(String(a), b, !1, c, d)
};
g.Db = function(a, b, c, d) {
    var e;
    e = this.tc;
    a = String(a).toString();
    if (a in e.g) {
        var f = e.g[a];
        b = wd(f, b, c, d); - 1 < b ? (ud(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete e.g[a], e.h--), e = !0) : e = !1
    } else e = !1;
    return e
};

function Yd(a, b, c, d) {
    b = a.tc.g[String(b)];
    if (!b) return !0;
    b = b.concat();
    for (var e = !0, f = 0; f < b.length; ++f) {
        var k = b[f];
        if (k && !k.wd && k.ue == c) {
            var l = k.listener,
                n = k.Ne || k.src;
            k.te && xd(a.tc, k);
            e = !1 !== l.call(n, d) && e
        }
    }
    return e && 0 != d.Eh
};

function Zd(a, b, c) {
    if (ga(a)) c && (a = na(a, c));
    else if (a && "function" == typeof a.handleEvent) a = na(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0)
};
// Copyright 2011 Google Inc.  Apache License 2.0
var $d = {},
    ae, be;

function ce(a, b) {
    this.v = a;
    this.type = b;
    a.A.N && (this.ub = a.A.N[b], this.Id = a.A.N[de[b]], this.Rf = !this.ub)
}
g = ce.prototype;
g.M = null;
g.Kc = null;
g.Yb = null;
g.kb = 0;
g.ua = 0;
g.yc = !1;
g.ub = null;
g.Id = null;
g.Rf = null;
g.ve = function(a) {
    console.log("non-rendered connecting_: " + a);
    var b = this,
        c = b.v,
        d = a.v;
    a.M && ee(a);
    if (b.M) {
        var e = E(b),
            f = b.Yb;
        b.Yb = null;
        if (e.i) f = fe(e), e.C(), e = null;
        else if (1 == b.type) {
            if (!e.L) throw "Orphan block does not have an output connection.";
            var k = ge(d, e);
            k && (e.L.connect(k), e = null)
        } else if (3 == b.type) {
            if (!e.S) throw "Orphan block does not have a previous connection.";
            for (k = d; k.g;)
                if (k.g.M) k = he(k);
                else {
                    ie(e.S, k.g) && (k.g.connect(e.S), e = null);
                    break
                }
        }
        if (e && (ee(b), je)) {
            var l = ke;
            setTimeout(function() {
                e.A &&
                    !e.getParent() && (F(l), e.L ? le(e.L, b) : e.S && le(e.S, b), F(!1))
            }, me)
        }
        b.Yb = f
    }
    var n;
    0 == G && (n = new ne(d));
    oe(b, a);
    d.ke(c);
    n && (pe(n), H(n))
};
g.C = function() {
    if (this.M) throw "Disconnect connection before disposing of it.";
    this.yc && qe(this.ub, this);
    re == this && (re = null);
    se == this && (se = null);
    this.Id = this.ub = null
};

function te(a) {
    return 1 == a.type || 3 == a.type
}

function ue(a, b) {
    if (!b) return 3;
    if (te(a)) var c = a.v,
        d = b.v;
    else d = a.v, c = b.v;
    return c && c == d ? 1 : b.type != de[a.type] ? 2 : c && d && c.A !== d.A ? 5 : ie(a, b) ? c.i && !d.i ? 6 : 0 : 4
}
g.Se = function(a) {
    var b = ue(this, a);
    if (0 != b && b != ce.h) return !1;
    if (2 == a.type || 4 == a.type)
        if (a.M || this.M) return !1;
    return 1 == a.type && a.M && !ve(E(a)) && !E(a).i || 4 == this.type && a.M && !this.v.g || -1 != we.indexOf(a) ? !1 : !0
};
g.connect = function(a) {
    console.log("non-rendered connecting: " + a);
    if (this.M != a) {
        switch (ue(this, a)) {
            case 0:
                break;
            case 1:
                throw "Attempted to connect a block to itself.";
            case 5:
                throw "Blocks not on same workspace.";
            case 2:
                throw "Attempt to connect incompatible types.";
            case 3:
                throw "Target connection is null.";
            case 4:
                throw "Connection checks failed.";
            case 6:
                throw "Connecting non-shadow to shadow block.";
            default:
                throw "Unknown connection failure: this should never happen!";
        }
        console.log(a instanceof xe);
        console.log(a instanceof ce);
        te(this) ? (console.log("sup"), this.ve(a)) : (console.log("inf"), a.ve(this))
    }
};

function oe(a, b) {
    a.M = b;
    b.M = a
}

function ye(a, b) {
    for (var c = !1, d = 0; d < a.h.length; d++) {
        var e = a.h[d].J;
        if (e && 1 == e.type && ie(b.L, e)) {
            if (c) return null;
            c = e
        }
    }
    return c
}

function ge(a, b) {
    for (var c = a, d; d = ye(c, b);)
        if (c = E(d), !c || c.i) return d;
    return null
}

function ee(a) {
    var b = a.M,
        c, d;
    te(a) ? (c = a.v, d = b.v, b = a) : (c = b.v, d = a.v);
    a.Ff(c, d);
    b.gg()
}
g.Ff = function(a, b) {
    var c;
    0 == G && (c = new ne(b));
    this.M = this.M.M = null;
    b.ke(null);
    c && (pe(c), H(c))
};
g.gg = function() {
    var a = this.v,
        b = this.Yb;
    if (a.A && b && je)
        if (a = ze(b, a.A), a.L) this.connect(a.L);
        else if (a.S) this.connect(a.S);
    else throw "Child block does not have output or previous statement.";
};

function E(a) {
    return a.M ? a.M.v : null
}

function ie(a, b) {
    if (!a.Kc || !b.Kc) return !0;
    for (var c = 0; c < a.Kc.length; c++)
        if (-1 != b.Kc.indexOf(a.Kc[c])) return !0;
    return !1
}

function Ae(a, b) {
    b ? (da(b) || (b = [b]), a.Kc = b, a.M && !ie(a, a.M) && (Be(te(a) ? E(a) : a.v), Ce(a.v))) : a.Kc = null
};
// Copyright 2016 Google Inc.  Apache License 2.0
function xe(a, b) {
    xe.w.constructor.call(this, a, b);
    this.g = new w(0, 0);
    console.log("rendered connector")
}
t(xe, ce);

function De(a, b) {
    var c = a.kb - b.kb,
        d = a.ua - b.ua;
    return Math.sqrt(c * c + d * d)
}

function le(a, b) {
    if (0 == I) {
        var c = Ee(a.v);
        if (!c.F) {
            var d = !1;
            if (!ve(c)) {
                c = Ee(b.v);
                if (!ve(c)) return;
                b = a;
                d = !0
            }
            c.o.parentNode.appendChild(c.o);
            var e = b.kb + Fe - a.kb,
                f = b.ua + Fe - a.ua;
            d && (f = -f);
            c.s && (e = -e);
            c.moveBy(e, f)
        }
    }
}

function Ge(a, b, c) {
    a.yc && qe(a.ub, a);
    a.kb = b;
    a.ua = c;
    a.Rf || He(a.ub, a)
}
g = xe.prototype;
g.moveBy = function(a, b) {
    Ge(this, this.kb + a, this.ua + b)
};

function Ie(a, b) {
    Ge(a, b.x + a.g.x, b.y + a.g.y)
}

function Je(a, b, c) {
    a.g.x = b;
    a.g.y = c
}

function Ke(a) {
    var b = a.M.kb - a.kb,
        c = a.M.ua - a.ua;
    if (0 != b || 0 != c) {
        a = E(a);
        var d = a.o;
        if (!d) throw "block is not rendered.";
        d = Le(d);
        a.o.setAttribute("transform", "translate(" + (d.x - b) + "," + (d.y - c) + ")");
        Me(a, -b, -c)
    }
}
g.Pe = function() {
    var a;
    a = 1 == this.type || 2 == this.type ? "m 0,0 v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5 v 5" : "m -20,0 h 5 l 6,4 3,0 6,-4 h 5";
    var b = this.v.oa();
    ce.g = J("path", {
        "class": "blocklyHighlightedConnectionPath",
        d: a,
        transform: "translate(" + (this.kb - b.x) + "," + (this.ua - b.y) + ")" + (this.v.s ? " scale(-1 1)" : "")
    }, this.v.o)
};

function Ne(a) {
    Oe(a, !1);
    var b = [];
    if (1 != a.type && 3 != a.type) return b;
    if (a = E(a)) {
        var c;
        a.j ? (c = [], a.L && c.push(a.L), a.g && c.push(a.g), a.S && c.push(a.S)) : c = a.Vb(!0);
        for (var d = 0; d < c.length; d++) b.push.apply(b, Ne(c[d]));
        b.length || (b[0] = a)
    }
    return b
}

function Pe() {
    y(ce.g);
    delete ce.g
}

function Oe(a, b) {
    (a.Rf = b) && a.yc ? qe(a.ub, a) : b || a.yc || He(a.ub, a)
}
g.Se = function(a, b) {
    return De(this, a) > b ? !1 : xe.w.Se.call(this, a)
};
g.Ff = function(a, b) {
    xe.w.Ff.call(this, a, b);
    a.P && a.V();
    b.P && (Qe(b), b.V())
};
g.gg = function() {
    var a = this.v,
        b = this.Yb;
    if (a.A && b && je) {
        xe.w.gg.call(this);
        b = E(this);
        if (!b) throw "Couldn't respawn the shadow block that should exist here.";
        b.zc();
        b.V(!1);
        a.P && a.V()
    }
};
g.ve = function(a) {
    console.log("rendered connect");
    xe.w.ve.call(this, a);
    var b = this.v;
    a = a.v;
    b.P && Qe(b);
    a.P && Qe(a);
    console.log("connecting: " + b + " " + a);
    b.P && a.P && (3 == this.type || 4 == this.type ? (a.V(), console.log("childBlock")) : (b.V(), console.log("parentBlock")))
};

function Re(a) {
    md.call(this);
    this.h = a;
    this.g = {}
}
t(Re, md);
var Se = [];
Re.prototype.X = function(a, b, c, d) {
    da(b) || (b && (Se[0] = b.toString()), b = Se);
    for (var e = 0; e < b.length; e++) {
        var f = Kd(a, b[e], c || this.handleEvent, d || !1, this.h || this);
        if (!f) break;
        this.g[f.nh] = f
    }
    return this
};
Re.prototype.Db = function(a, b, c, d, e) {
    if (da(b))
        for (var f = 0; f < b.length; f++) this.Db(a, b[f], c, d, e);
    else c = c || this.handleEvent, e = e || this.h || this, c = Ld(c), d = !!d, b = a && a[rd] ? yd(a.tc, String(b), c, d, e) : a ? (a = Md(a)) ? yd(a, b, c, d, e) : null : null, b && (Rd(b), delete this.g[b.nh]);
    return this
};

function Te(a) {
    jb(a.g, function(a, c) {
        this.g.hasOwnProperty(c) && Rd(a)
    }, a);
    a.g = {}
}
Re.prototype.xa = function() {
    Re.w.xa.call(this);
    Te(this)
};
Re.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
};

function Ue() {}
ba(Ue);
Ue.prototype.g = 0;

function Ve(a) {
    Vd.call(this);
    this.i = a || ic();
    this.Ra = We;
    this.La = null;
    this.ba = !1;
    this.g = null;
    this.vc = void 0;
    this.F = this.j = this.B = this.Qa = null
}
t(Ve, Vd);
Ve.prototype.re = Ue.Wb();
var We = null;

function Xe(a, b) {
    switch (a) {
        case 1:
            return b ? "disable" : "enable";
        case 2:
            return b ? "highlight" : "unhighlight";
        case 4:
            return b ? "activate" : "deactivate";
        case 8:
            return b ? "select" : "unselect";
        case 16:
            return b ? "check" : "uncheck";
        case 32:
            return b ? "focus" : "blur";
        case 64:
            return b ? "open" : "close"
    }
    throw Error("Invalid component state");
}

function Ye(a) {
    return a.La || (a.La = ":" + (a.re.g++).toString(36))
}
g = Ve.prototype;
g.D = function() {
    return this.g
};

function Ze(a) {
    a.vc || (a.vc = new Re(a));
    return a.vc
}

function $e(a, b) {
    if (a == b) throw Error("Unable to set parent component");
    if (b && a.B && a.La && af(a.B, a.La) && a.B != b) throw Error("Unable to set parent component");
    a.B = b;
    Ve.w.bf.call(a, b)
}
g.getParent = function() {
    return this.B
};
g.bf = function(a) {
    if (this.B && this.B != a) throw Error("Method not supported");
    Ve.w.bf.call(this, a)
};
g.ld = function() {
    this.g = this.i.g.createElement("DIV")
};
g.V = function(a) {
    bf(this, a)
};

function bf(a, b, c) {
    if (a.ba) throw Error("Component already rendered");
    a.g || a.ld();
    b ? b.insertBefore(a.g, c || null) : a.i.g.body.appendChild(a.g);
    a.B && !a.B.ba || a.Ia()
}
g.Ia = function() {
    this.ba = !0;
    cf(this, function(a) {
        !a.ba && a.D() && a.Ia()
    })
};
g.wb = function() {
    cf(this, function(a) {
        a.ba && a.wb()
    });
    this.vc && Te(this.vc);
    this.ba = !1
};
g.xa = function() {
    this.ba && this.wb();
    this.vc && (this.vc.C(), delete this.vc);
    cf(this, function(a) {
        a.C()
    });
    this.g && y(this.g);
    this.B = this.Qa = this.g = this.F = this.j = null;
    Ve.w.xa.call(this)
};
g.Gd = function(a, b) {
    this.fd(a, df(this), b)
};
g.fd = function(a, b, c) {
    if (a.ba && (c || !this.ba)) throw Error("Component already rendered");
    if (0 > b || b > df(this)) throw Error("Child component index out of bounds");
    this.F && this.j || (this.F = {}, this.j = []);
    if (a.getParent() == this) {
        var d = Ye(a);
        this.F[d] = a;
        Wa(this.j, a)
    } else {
        var d = this.F,
            e = Ye(a);
        if (null !== d && e in d) throw Error('The object already contains the key "' + e + '"');
        d[e] = a
    }
    $e(a, this);
    $a(this.j, b, 0, a);
    a.ba && this.ba && a.getParent() == this ? (c = this.Le(), b = c.childNodes[b] || null, b != a.D() && c.insertBefore(a.D(), b)) :
        c ? (this.g || this.ld(), b = ef(this, b + 1), bf(a, this.Le(), b ? b.g : null)) : this.ba && !a.ba && a.g && a.g.parentNode && 1 == a.g.parentNode.nodeType && a.Ia()
};
g.Le = function() {
    return this.g
};

function ff(a) {
    null == a.Ra && (a.Ra = "rtl" == bd(a.ba ? a.g : a.i.g.body, "direction"));
    return a.Ra
}
g.md = function(a) {
    if (this.ba) throw Error("Component already rendered");
    this.Ra = a
};

function gf(a) {
    return !!a.j && 0 != a.j.length
}

function df(a) {
    return a.j ? a.j.length : 0
}

function af(a, b) {
    var c;
    a.F && b ? (c = a.F, c = (null !== c && b in c ? c[b] : void 0) || null) : c = null;
    return c
}

function ef(a, b) {
    return a.j ? a.j[b] || null : null
}

function cf(a, b, c) {
    a.j && Ra(a.j, b, c)
}

function hf(a, b) {
    return a.j && b ? Qa(a.j, b) : -1
}
g.removeChild = function(a, b) {
    if (a) {
        var c = p(a) ? a : Ye(a);
        a = af(this, c);
        if (c && a) {
            var d = this.F;
            c in d && delete d[c];
            Wa(this.j, a);
            b && (a.wb(), a.g && y(a.g));
            $e(a, null)
        }
    }
    if (!a) throw Error("Child is not in parent component");
    return a
};
g.Dh = function(a) {
    for (var b = []; gf(this);) b.push(this.removeChild(ef(this, 0), a));
    return b
};

function jf(a) {
    if (a.classList) return a.classList;
    a = a.className;
    return p(a) && a.match(/\S+/g) || []
}

function kf(a, b) {
    return a.classList ? a.classList.contains(b) : Va(jf(a), b)
}

function lf(a, b) {
    a.classList ? a.classList.add(b) : kf(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
}

function mf(a, b) {
    if (a.classList) Ra(b, function(b) {
        lf(a, b)
    });
    else {
        var c = {};
        Ra(jf(a), function(a) {
            c[a] = !0
        });
        Ra(b, function(a) {
            c[a] = !0
        });
        a.className = "";
        for (var d in c) a.className += 0 < a.className.length ? " " + d : d
    }
}

function nf(a, b) {
    a.classList ? a.classList.remove(b) : kf(a, b) && (a.className = Sa(jf(a), function(a) {
        return a != b
    }).join(" "))
}

function of(a, b) {
    a.classList ? Ra(b, function(b) {
        nf(a, b)
    }) : a.className = Sa(jf(a), function(a) {
        return !Va(b, a)
    }).join(" ")
};

function pf(a, b) {
    if (!a) throw Error("Invalid class name " + a);
    if (!ga(b)) throw Error("Invalid decorator function " + b);
}
var qf = {};
var rf;

function sf(a, b) {
    b ? a.setAttribute("role", b) : a.removeAttribute("role")
}

function tf(a, b, c) {
    da(c) && (c = c.join(" "));
    var d = "aria-" + b;
    "" === c || void 0 == c ? (rf || (rf = {
        atomic: !1,
        autocomplete: "none",
        dropeffect: "none",
        haspopup: !1,
        live: "off",
        multiline: !1,
        multiselectable: !1,
        orientation: "vertical",
        readonly: !1,
        relevant: "additions text",
        required: !1,
        sort: "none",
        busy: !1,
        disabled: !1,
        hidden: !1,
        invalid: "false"
    }), c = rf, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
}

function uf(a) {
    a.removeAttribute("aria-activedescendant")
}

function vf(a, b) {
    var c = a.getAttribute("aria-" + b);
    return null == c || void 0 == c ? "" : String(c)
};

function wf() {}
var xf;
ba(wf);
var yf = {
    button: "pressed",
    checkbox: "checked",
    menuitem: "selected",
    menuitemcheckbox: "checked",
    menuitemradio: "checked",
    radio: "checked",
    tab: "selected",
    treeitem: "selected"
};
g = wf.prototype;
g.qh = function() {};
g.Me = function(a) {
    return a.i.xb("DIV", zf(this, a).join(" "), a.mb)
};
g.pd = function(a) {
    return a
};

function Af(a, b, c) {
    if (a = a.D ? a.D() : a) {
        var d = [b];
        u && !Ub("7") && (d = Bf(jf(a), b), d.push(b));
        (c ? mf : of)(a, d)
    }
}

function Cf(a, b, c) {
    if (a = c || a.qh()) c = b.getAttribute("role") || null, a != c && sf(b, a)
}

function Df(a, b) {
    a.Z() || tf(b, "hidden", !a.Z());
    a.isEnabled() || Ef(b, 1, !a.isEnabled());
    a.Ea & 8 && Ef(b, 8, !!(a.ha & 8));
    a.Ea & 16 && Ef(b, 16, !!(a.ha & 16));
    a.Ea & 64 && Ef(b, 64, !!(a.ha & 64))
}

function Ff(a, b) {
    var c;
    if (a.Ea & 32 && (c = a.D())) {
        if (!b && a.ha & 32) {
            try {
                c.blur()
            } catch (d) {}
            a.ha & 32 && a.rh()
        }(zc(c) && Bc(c)) != b && (b ? c.tabIndex = 0 : (c.tabIndex = -1, c.removeAttribute("tabIndex")))
    }
}
g.$ = function(a, b) {
    hd(a, b);
    a && tf(a, "hidden", !b)
};

function Ef(a, b, c) {
    xf || (xf = {
        1: "disabled",
        8: "selected",
        16: "checked",
        64: "expanded"
    });
    b = xf[b];
    var d = a.getAttribute("role") || null;
    d && (d = yf[d] || b, b = "checked" == b || "selected" == b ? d : b);
    b && tf(a, b, c)
}
g.Rd = function(a, b) {
    var c = this.pd(a);
    if (c && (tc(c), b))
        if (p(b)) wc(c, b);
        else {
            var d = function(a) {
                if (a) {
                    var b = kc(c);
                    c.appendChild(p(a) ? b.createTextNode(a) : a)
                }
            };
            da(b) ? Ra(b, d) : !ea(b) || "nodeType" in b ? d(b) : Ra(Ya(b), d)
        }
};
g.na = function() {
    return "goog-control"
};

function zf(a, b) {
    var c = a.na(),
        d = [c],
        e = a.na();
    e != c && d.push(e);
    c = b.ha;
    for (e = []; c;) {
        var f = c & -c;
        e.push(a.Ee(f));
        c &= ~f
    }
    d.push.apply(d, e);
    (c = b.kh) && d.push.apply(d, c);
    u && !Ub("7") && d.push.apply(d, Bf(d));
    return d
}

function Bf(a, b) {
    var c = [];
    b && (a = Xa(a, [b]));
    Ra([], function(d) {
        !Ua(d, oa(Va, a)) || b && !Va(d, b) || c.push(d.join("_"))
    });
    return c
}
g.Ee = function(a) {
    if (!this.g) {
        var b = this.na();
        b.replace(/\xa0|\s/g, " ");
        this.g = {
            1: b + "-disabled",
            2: b + "-hover",
            4: b + "-active",
            8: b + "-selected",
            16: b + "-checked",
            32: b + "-focused",
            64: b + "-open"
        }
    }
    return this.g[a]
};

function Gf(a, b, c, d, e) {
    if (!(u || Hb || v && Ub("525"))) return !0;
    if (Kb && e) return Hf(a);
    if (e && !d) return !1;
    fa(b) && (b = If(b));
    if (!c && (17 == b || 18 == b || Kb && 91 == b)) return !1;
    if ((v || Hb) && d && c) switch (a) {
        case 220:
        case 219:
        case 221:
        case 192:
        case 186:
        case 189:
        case 187:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
            return !1
    }
    if (u && d && b == a) return !1;
    switch (a) {
        case 13:
            return !0;
        case 27:
            return !(v || Hb)
    }
    return Hf(a)
}

function Hf(a) {
    if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || (v || Hb) && 0 == a) return !0;
    switch (a) {
        case 32:
        case 43:
        case 63:
        case 64:
        case 107:
        case 109:
        case 110:
        case 111:
        case 186:
        case 59:
        case 189:
        case 187:
        case 61:
        case 188:
        case 190:
        case 191:
        case 192:
        case 222:
        case 219:
        case 220:
        case 221:
            return !0;
        default:
            return !1
    }
}

function If(a) {
    if (Ib) a = Jf(a);
    else if (Kb && v) a: switch (a) {
        case 93:
            a = 91;
            break a
    }
    return a
}

function Jf(a) {
    switch (a) {
        case 61:
            return 187;
        case 59:
            return 186;
        case 173:
            return 189;
        case 224:
            return 91;
        case 0:
            return 224;
        default:
            return a
    }
};

function Kf(a, b) {
    Vd.call(this);
    a && Lf(this, a, b)
}
t(Kf, Vd);
g = Kf.prototype;
g.kd = null;
g.Te = null;
g.Xf = null;
g.Ue = null;
g.Bb = -1;
g.Ac = -1;
g.uf = !1;
var Mf = {
        3: 13,
        12: 144,
        63232: 38,
        63233: 40,
        63234: 37,
        63235: 39,
        63236: 112,
        63237: 113,
        63238: 114,
        63239: 115,
        63240: 116,
        63241: 117,
        63242: 118,
        63243: 119,
        63244: 120,
        63245: 121,
        63246: 122,
        63247: 123,
        63248: 44,
        63272: 46,
        63273: 36,
        63275: 35,
        63276: 33,
        63277: 34,
        63289: 144,
        63302: 45
    },
    Nf = {
        Up: 38,
        Down: 40,
        Left: 37,
        Right: 39,
        Enter: 13,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        "U+007F": 46,
        Home: 36,
        End: 35,
        PageUp: 33,
        PageDown: 34,
        Insert: 45
    },
    Of = u || Hb || v && Ub("525"),
    Pf = Kb && Ib;
g = Kf.prototype;
g.il = function(a) {
    if (v || Hb)
        if (17 == this.Bb && !a.ctrlKey || 18 == this.Bb && !a.altKey || Kb && 91 == this.Bb && !a.metaKey) this.Ac = this.Bb = -1; - 1 == this.Bb && (a.ctrlKey && 17 != a.g ? this.Bb = 17 : a.altKey && 18 != a.g ? this.Bb = 18 : a.metaKey && 91 != a.g && (this.Bb = 91));
    Of && !Gf(a.g, this.Bb, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.Ac = If(a.g), Pf && (this.uf = a.altKey))
};
g.jl = function(a) {
    this.Ac = this.Bb = -1;
    this.uf = a.altKey
};
g.handleEvent = function(a) {
    var b = a.h,
        c, d, e = b.altKey;
    u && "keypress" == a.type ? (c = this.Ac, d = 13 != c && 27 != c ? b.keyCode : 0) : (v || Hb) && "keypress" == a.type ? (c = this.Ac, d = 0 <= b.charCode && 63232 > b.charCode && Hf(c) ? b.charCode : 0) : Gb && !v ? (c = this.Ac, d = Hf(c) ? b.keyCode : 0) : (c = b.keyCode || this.Ac, d = b.charCode || 0, Pf && (e = this.uf), Kb && 63 == d && 224 == c && (c = 191));
    var f = c = If(c),
        k = b.keyIdentifier;
    c ? 63232 <= c && c in Mf ? f = Mf[c] : 25 == c && a.shiftKey && (f = 9) : k && k in Nf && (f = Nf[k]);
    this.Bb = f;
    a = new Qf(f, d, 0, b);
    a.altKey = e;
    Wd(this, a)
};
g.D = function() {
    return this.kd
};

function Lf(a, b, c) {
    a.Ue && Rf(a);
    a.kd = b;
    a.Te = Kd(a.kd, "keypress", a, c);
    a.Xf = Kd(a.kd, "keydown", a.il, c, a);
    a.Ue = Kd(a.kd, "keyup", a.jl, c, a)
}

function Rf(a) {
    a.Te && (Rd(a.Te), Rd(a.Xf), Rd(a.Ue), a.Te = null, a.Xf = null, a.Ue = null);
    a.kd = null;
    a.Bb = -1;
    a.Ac = -1
}
g.xa = function() {
    Kf.w.xa.call(this);
    Rf(this)
};

function Qf(a, b, c, d) {
    Ed.call(this, d);
    this.type = "key";
    this.g = a;
    this.B = b
}
t(Qf, Ed);

function K(a, b, c) {
    Ve.call(this, c);
    if (!b) {
        b = this.constructor;
        for (var d; b;) {
            d = ia(b);
            if (d = qf[d]) break;
            b = b.w ? b.w.constructor : null
        }
        b = d ? ga(d.Wb) ? d.Wb() : new d : null
    }
    this.h = b;
    this.Ze(void 0 !== a ? a : null)
}
t(K, Ve);
g = K.prototype;
g.mb = null;
g.ha = 0;
g.Ea = 39;
g.xf = 255;
g.ad = 0;
g.Mf = !0;
g.kh = null;
g.Td = !0;
g.ld = function() {
    var a = this.h.Me(this);
    this.g = a;
    Cf(this.h, a, this.Ke());
    jd(a, !u && !Gb);
    this.Z() || this.h.$(a, !1)
};
g.Ke = function() {
    return null
};
g.Le = function() {
    return this.h.pd(this.D())
};
g.Ia = function() {
    K.w.Ia.call(this);
    Df(this, this.g);
    var a = this.h;
    if (ff(this)) {
        var b = this.D();
        Af(b, a.na() + "-rtl", !0)
    }
    this.isEnabled() && Ff(this, this.Z());
    this.Ea & -2 && (this.Td && Sf(this, !0), this.Ea & 32 && (a = this.D())) && (b = this.u || (this.u = new Kf), Lf(b, a), Ze(this).X(b, "key", this.Ab).X(a, "focus", this.Zk).X(a, "blur", this.rh))
};

function Sf(a, b) {
    var c = Ze(a),
        d = a.D();
    b ? (c.X(d, "mouseover", a.Ud).X(d, "mousedown", a.kc).X(d, "mouseup", a.qd).X(d, "mouseout", a.Pf), a.Sd != aa && c.X(d, "contextmenu", a.Sd), u && (Ub(9) || c.X(d, "dblclick", a.sh), a.N || (a.N = new Tf(a), pd(a, oa(qd, a.N))))) : (c.Db(d, "mouseover", a.Ud).Db(d, "mousedown", a.kc).Db(d, "mouseup", a.qd).Db(d, "mouseout", a.Pf), a.Sd != aa && c.Db(d, "contextmenu", a.Sd), u && (Ub(9) || c.Db(d, "dblclick", a.sh), qd(a.N), a.N = null))
}
g.wb = function() {
    K.w.wb.call(this);
    this.u && Rf(this.u);
    this.Z() && this.isEnabled() && Ff(this, !1)
};
g.xa = function() {
    K.w.xa.call(this);
    this.u && (this.u.C(), delete this.u);
    delete this.h;
    this.N = this.kh = this.mb = null
};
g.Ze = function(a) {
    this.mb = a
};
g.De = function() {
    var a = this.mb;
    if (!a) return "";
    a = p(a) ? a : da(a) ? Ta(a, Ec).join("") : Cc(a);
    return ra(a)
};
g.md = function(a) {
    K.w.md.call(this, a);
    var b = this.D();
    b && Af(b, this.h.na() + "-rtl", a)
};
g.Z = function() {
    return this.Mf
};
g.$ = function(a, b) {
    if (b || this.Mf != a && Wd(this, a ? "show" : "hide")) {
        var c = this.D();
        c && this.h.$(c, a);
        this.isEnabled() && Ff(this, a);
        this.Mf = a;
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return !(this.ha & 1)
};
g.ce = function(a) {
    var b = this.getParent();
    b && "function" == typeof b.isEnabled && !b.isEnabled() || !Uf(this, 1, !a) || (a || (Vf(this, !1), this.yb(!1)), this.Z() && Ff(this, a), Wf(this, 1, !a, !0))
};
g.yb = function(a) {
    Uf(this, 2, a) && Wf(this, 2, a)
};

function Vf(a, b) {
    Uf(a, 4, b) && Wf(a, 4, b)
}
g.kg = function(a) {
    Uf(this, 8, a) && Wf(this, 8, a)
};

function Xf(a, b) {
    Uf(a, 16, b) && Wf(a, 16, b)
}

function Yf(a, b) {
    Uf(a, 64, b) && Wf(a, 64, b)
}

function Wf(a, b, c, d) {
    if (!d && 1 == b) a.ce(!c);
    else if (a.Ea & b && c != !!(a.ha & b)) {
        var e = a.h;
        if (d = a.D())(e = e.Ee(b)) && Af(a, e, c), Ef(d, b, c);
        a.ha = c ? a.ha | b : a.ha & ~b
    }
}
g.qb = function(a, b) {
    if (this.ba && this.ha & a && !b) throw Error("Component already rendered");
    !b && this.ha & a && Wf(this, a, !1);
    this.Ea = b ? this.Ea | a : this.Ea & ~a
};

function Zf(a, b) {
    return !!(a.xf & b) && !!(a.Ea & b)
}

function Uf(a, b, c) {
    return !!(a.Ea & b) && !!(a.ha & b) != c && (!(a.ad & b) || Wd(a, Xe(b, c))) && !a.K
}
g.Ud = function(a) {
    !$f(a, this.D()) && Wd(this, "enter") && this.isEnabled() && Zf(this, 2) && this.yb(!0)
};
g.Pf = function(a) {
    !$f(a, this.D()) && Wd(this, "leave") && (Zf(this, 4) && Vf(this, !1), Zf(this, 2) && this.yb(!1))
};
g.Sd = aa;

function $f(a, b) {
    return !!a.u && vc(b, a.u)
}
g.kc = function(a) {
    if (this.isEnabled() && (Zf(this, 2) && this.yb(!0), Gd(a) && !(v && Kb && a.ctrlKey))) {
        Zf(this, 4) && Vf(this, !0);
        var b;
        if (b = this.h) {
            var c;
            b = this.Ea & 32 && (c = this.D()) ? zc(c) && Bc(c) : !1
        }
        b && this.D().focus()
    }!Gd(a) || v && Kb && a.ctrlKey || a.preventDefault()
};
g.qd = function(a) {
    this.isEnabled() && (Zf(this, 2) && this.yb(!0), this.ha & 4 && this.Cc(a) && Zf(this, 4) && Vf(this, !1))
};
g.sh = function(a) {
    this.isEnabled() && this.Cc(a)
};
g.Cc = function(a) {
    Zf(this, 16) && Xf(this, !(this.ha & 16));
    Zf(this, 8) && this.kg(!0);
    Zf(this, 64) && Yf(this, !(this.ha & 64));
    var b = new zd("action", this);
    a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.F = a.F);
    return Wd(this, b)
};
g.Zk = function() {
    Zf(this, 32) && Uf(this, 32, !0) && Wf(this, 32, !0)
};
g.rh = function() {
    Zf(this, 4) && Vf(this, !1);
    Zf(this, 32) && Uf(this, 32, !1) && Wf(this, 32, !1)
};
g.Ab = function(a) {
    return this.Z() && this.isEnabled() && this.Lf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.Lf = function(a) {
    return 13 == a.g && this.Cc(a)
};
if (!ga(K)) throw Error("Invalid component class " + K);
if (!ga(wf)) throw Error("Invalid renderer class " + wf);
var ag = ia(K);
qf[ag] = wf;
pf("goog-control", function() {
    return new K(null)
});

function Tf(a) {
    md.call(this);
    this.h = a;
    this.g = !1;
    this.i = new Re(this);
    pd(this, oa(qd, this.i));
    a = this.h.g;
    this.i.X(a, "mousedown", this.u).X(a, "mouseup", this.B).X(a, "click", this.j)
}
t(Tf, md);
var bg = !u || 9 <= Number(Wb);
Tf.prototype.u = function() {
    this.g = !1
};
Tf.prototype.B = function() {
    this.g = !0
};

function cg(a, b) {
    if (!bg) return a.button = 0, a.type = b, a;
    var c = document.createEvent("MouseEvents");
    c.initMouseEvent(b, a.bubbles, a.cancelable, a.view || null, a.detail, a.screenX, a.screenY, a.clientX, a.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, a.relatedTarget || null);
    return c
}
Tf.prototype.j = function(a) {
    if (this.g) this.g = !1;
    else {
        var b = a.h,
            c = b.button,
            d = b.type,
            e = cg(b, "mousedown");
        this.h.kc(new Ed(e, a.i));
        e = cg(b, "mouseup");
        this.h.qd(new Ed(e, a.i));
        bg || (b.button = c, b.type = d)
    }
};
Tf.prototype.xa = function() {
    this.h = null;
    Tf.w.xa.call(this)
};

function dg() {
    this.h = []
}
t(dg, wf);
ba(dg);

function eg(a, b) {
    var c = a.h[b];
    if (!c) {
        switch (b) {
            case 0:
                c = a.na() + "-highlight";
                break;
            case 1:
                c = a.na() + "-checkbox";
                break;
            case 2:
                c = a.na() + "-content"
        }
        a.h[b] = c
    }
    return c
}
g = dg.prototype;
g.qh = function() {
    return "menuitem"
};
g.Me = function(a) {
    var b = a.i.xb("DIV", zf(this, a).join(" "), fg(this, a.mb, a.i));
    gg(this, a, b, !!(a.Ea & 8) || !!(a.Ea & 16));
    return b
};
g.pd = function(a) {
    return a && a.firstChild
};
g.Rd = function(a, b) {
    var c = this.pd(a),
        d = hg(this, a) ? c.firstChild : null;
    dg.w.Rd.call(this, a, b);
    d && !hg(this, a) && c.insertBefore(d, c.firstChild || null)
};

function fg(a, b, c) {
    a = eg(a, 2);
    return c.xb("DIV", a, b)
}

function hg(a, b) {
    var c = a.pd(b);
    if (c) {
        var c = c.firstChild,
            d = eg(a, 1);
        return !!c && ha(c) && 1 == c.nodeType && kf(c, d)
    }
    return !1
}

function gg(a, b, c, d) {
    Cf(a, c, b.Ke());
    Df(b, c);
    d != hg(a, c) && (d ? lf(c, "goog-option") : nf(c, "goog-option"), c = a.pd(c), d ? (a = eg(a, 1), c.insertBefore(b.i.xb("DIV", a), c.firstChild || null)) : c.removeChild(c.firstChild))
}
g.Ee = function(a) {
    switch (a) {
        case 2:
            return eg(this, 0);
        case 16:
        case 8:
            return "goog-option-selected";
        default:
            return dg.w.Ee.call(this, a)
    }
};
g.na = function() {
    return "goog-menuitem"
};

function ig(a, b, c, d) {
    K.call(this, a, d || dg.Wb(), c);
    this.Qa = b
}
t(ig, K);
g = ig.prototype;
g.Wa = function() {
    var a = this.Qa;
    return null != a ? a : this.De()
};
g.qb = function(a, b) {
    ig.w.qb.call(this, a, b);
    switch (a) {
        case 8:
            this.ha & 16 && !b && Xf(this, !1);
            var c = this.D();
            c && this && c && gg(this.h, this, c, b);
            break;
        case 16:
            (c = this.D()) && this && c && gg(this.h, this, c, b)
    }
};
g.De = function() {
    var a = this.mb;
    return da(a) ? (a = Ta(a, function(a) {
        return ha(a) && 1 == a.nodeType && (kf(a, "goog-menuitem-accel") || kf(a, "goog-menuitem-mnemonic-separator")) ? "" : Ec(a)
    }).join(""), ra(a)) : ig.w.De.call(this)
};
g.qd = function(a) {
    var b = this.getParent();
    if (b) {
        var c = b.h;
        b.h = null;
        if (c && fa(a.clientX) && fc(c, new w(a.clientX, a.clientY))) return
    }
    ig.w.qd.call(this, a)
};
g.Lf = function(a) {
    return a.g == this.yh && this.Cc(a) ? !0 : ig.w.Lf.call(this, a)
};
g.Yk = function() {
    return this.yh
};
pf("goog-menuitem", function() {
    return new ig(null)
});
ig.prototype.Ke = function() {
    return this.Ea & 16 ? "menuitemcheckbox" : this.Ea & 8 ? "menuitemradio" : ig.w.Ke.call(this)
};
ig.prototype.getParent = function() {
    return K.prototype.getParent.call(this)
};
ig.prototype.Je = function() {
    return K.prototype.Je.call(this)
};

function jg(a) {
    this.h = a
}
ba(jg);

function kg(a, b) {
    a && (a.tabIndex = b ? 0 : -1)
}
jg.prototype.g = function(a) {
    a = a.D();
    jd(a, Ib);
    u && (a.hideFocus = !0);
    var b = this.h;
    b && sf(a, b)
};
jg.prototype.na = function() {
    return "goog-container"
};

function lg(a, b) {
    var c = a.na(),
        d = [c, b.ud == mg ? c + "-horizontal" : c + "-vertical"];
    b.isEnabled() || d.push(c + "-disabled");
    return d
};

function ng() {}
t(ng, wf);
ba(ng);
ng.prototype.Me = function(a) {
    return a.i.xb("DIV", this.na())
};
ng.prototype.Rd = function() {};
ng.prototype.na = function() {
    return "goog-menuseparator"
};

function og(a, b) {
    K.call(this, null, a || ng.Wb(), b);
    this.qb(1, !1);
    this.qb(2, !1);
    this.qb(4, !1);
    this.qb(32, !1);
    this.ha = 1
}
t(og, K);
og.prototype.Ia = function() {
    og.w.Ia.call(this);
    var a = this.D();
    sf(a, "separator")
};
pf("goog-menuseparator", function() {
    return new og
});

function pg(a) {
    this.h = a || "menu"
}
t(pg, jg);
ba(pg);
pg.prototype.na = function() {
    return "goog-menu"
};
pg.prototype.g = function(a) {
    pg.w.g.call(this, a);
    a = a.D();
    tf(a, "haspopup", "true")
};
pf("goog-menuseparator", function() {
    return new og
});

function qg(a, b, c) {
    Ve.call(this, c);
    this.Qd = b || jg.Wb();
    this.ud = a || rg
}
t(qg, Ve);
var mg = "horizontal",
    rg = "vertical";
g = qg.prototype;
g.Yf = null;
g.Rc = null;
g.Qd = null;
g.ud = null;
g.wc = !0;
g.Mc = !0;
g.nd = !0;
g.za = -1;
g.Ja = null;
g.td = !1;
g.ic = null;

function sg(a) {
    return a.Yf || a.D()
}
g.ld = function() {
    this.g = this.i.xb("DIV", lg(this.Qd, this).join(" "))
};
g.Le = function() {
    return this.D()
};
g.Ia = function() {
    qg.w.Ia.call(this);
    cf(this, function(a) {
        a.ba && tg(this, a)
    }, this);
    var a = this.D();
    this.Qd.g(this);
    this.$(this.wc, !0);
    Ze(this).X(this, "enter", this.Nf).X(this, "highlight", this.hl).X(this, "unhighlight", this.ol).X(this, "open", this.kl).X(this, "close", this.cl).X(a, "mousedown", this.kc).X(kc(a), "mouseup", this.dl).X(a, ["mousedown", "mouseup", "mouseover", "mouseout", "contextmenu"], this.bl);
    this.nd && ug(this, !0)
};

function ug(a, b) {
    var c = Ze(a),
        d = sg(a);
    b ? c.X(d, "focus", a.ph).X(d, "blur", a.oh).X(a.Rc || (a.Rc = new Kf(sg(a))), "key", a.Ab) : c.Db(d, "focus", a.ph).Db(d, "blur", a.oh).Db(a.Rc || (a.Rc = new Kf(sg(a))), "key", a.Ab)
}
g.wb = function() {
    this.od(-1);
    this.Ja && Yf(this.Ja, !1);
    this.td = !1;
    qg.w.wb.call(this)
};
g.xa = function() {
    qg.w.xa.call(this);
    this.Rc && (this.Rc.C(), this.Rc = null);
    this.Qd = this.Ja = this.ic = this.Yf = null
};
g.Nf = function() {
    return !0
};
g.hl = function(a) {
    var b = hf(this, a.target);
    if (-1 < b && b != this.za) {
        var c = ef(this, this.za);
        c && c.yb(!1);
        this.za = b;
        c = ef(this, this.za);
        this.td && Vf(c, !0);
        this.Ja && c != this.Ja && (c.Ea & 64 ? Yf(c, !0) : Yf(this.Ja, !1))
    }
    b = this.D();
    null != a.target.D() && tf(b, "activedescendant", a.target.D().id)
};
g.ol = function(a) {
    a.target == ef(this, this.za) && (this.za = -1);
    a = this.D();
    uf(a)
};
g.kl = function(a) {
    (a = a.target) && a != this.Ja && a.getParent() == this && (this.Ja && Yf(this.Ja, !1), this.Ja = a)
};
g.cl = function(a) {
    a.target == this.Ja && (this.Ja = null);
    var b = this.D(),
        c = a.target.D();
    b && a.target.ha & 2 && c && (a = "", c && (a = c.id), tf(b, "activedescendant", a))
};
g.kc = function(a) {
    this.Mc && (this.td = !0);
    var b = sg(this);
    b && zc(b) && Bc(b) ? b.focus() : a.preventDefault()
};
g.dl = function() {
    this.td = !1
};
g.bl = function(a) {
    var b = vg(this, a.target);
    if (b) switch (a.type) {
        case "mousedown":
            b.kc(a);
            break;
        case "mouseup":
            b.qd(a);
            break;
        case "mouseover":
            b.Ud(a);
            break;
        case "mouseout":
            b.Pf(a);
            break;
        case "contextmenu":
            b.Sd(a)
    }
};

function vg(a, b) {
    if (a.ic)
        for (var c = a.D(); b && b !== c;) {
            var d = b.id;
            if (d in a.ic) return a.ic[d];
            b = b.parentNode
        }
    return null
}
g.ph = function() {};
g.oh = function() {
    this.od(-1);
    this.td = !1;
    this.Ja && Yf(this.Ja, !1)
};
g.Ab = function(a) {
    return this.isEnabled() && this.Z() && (0 != df(this) || this.Yf) && this.Kf(a) ? (a.preventDefault(), a.stopPropagation(), !0) : !1
};
g.Kf = function(a) {
    var b = ef(this, this.za);
    if (b && "function" == typeof b.Ab && b.Ab(a) || this.Ja && this.Ja != b && "function" == typeof this.Ja.Ab && this.Ja.Ab(a)) return !0;
    if (a.shiftKey || a.ctrlKey || a.metaKey || a.altKey) return !1;
    switch (a.g) {
        case 27:
            if (this.nd) sg(this).blur();
            else return !1;
            break;
        case 36:
            wg(this);
            break;
        case 35:
            xg(this);
            break;
        case 38:
            if (this.ud == rg) yg(this);
            else return !1;
            break;
        case 37:
            if (this.ud == mg) ff(this) ? zg(this) : yg(this);
            else return !1;
            break;
        case 40:
            if (this.ud == rg) zg(this);
            else return !1;
            break;
        case 39:
            if (this.ud ==
                mg) ff(this) ? yg(this) : zg(this);
            else return !1;
            break;
        default:
            return !1
    }
    return !0
};

function tg(a, b) {
    var c = b.D(),
        c = c.id || (c.id = Ye(b));
    a.ic || (a.ic = {});
    a.ic[c] = b
}
g.Gd = function(a, b) {
    qg.w.Gd.call(this, a, b)
};
g.fd = function(a, b, c) {
    a.ad |= 2;
    a.ad |= 64;
    a.qb(32, !1);
    a.ba && 0 != a.Td && Sf(a, !1);
    a.Td = !1;
    var d = a.getParent() == this ? hf(this, a) : -1;
    qg.w.fd.call(this, a, b, c);
    a.ba && this.ba && tg(this, a);
    a = d; - 1 == a && (a = df(this));
    a == this.za ? this.za = Math.min(df(this) - 1, b) : a > this.za && b <= this.za ? this.za++ : a < this.za && b > this.za && this.za--
};
g.removeChild = function(a, b) {
    if (a = p(a) ? af(this, a) : a) {
        var c = hf(this, a); - 1 != c && (c == this.za ? (a.yb(!1), this.za = -1) : c < this.za && this.za--);
        var d = a.D();
        d && d.id && this.ic && (c = this.ic, d = d.id, d in c && delete c[d])
    }
    c = a = qg.w.removeChild.call(this, a, b);
    c.ba && 1 != c.Td && Sf(c, !0);
    c.Td = !0;
    return a
};
g.Z = function() {
    return this.wc
};
g.$ = function(a, b) {
    if (b || this.wc != a && Wd(this, a ? "show" : "hide")) {
        this.wc = a;
        var c = this.D();
        c && (hd(c, a), this.nd && kg(sg(this), this.Mc && this.wc), b || Wd(this, this.wc ? "aftershow" : "afterhide"));
        return !0
    }
    return !1
};
g.isEnabled = function() {
    return this.Mc
};
g.ce = function(a) {
    this.Mc != a && Wd(this, a ? "enable" : "disable") && (a ? (this.Mc = !0, cf(this, function(a) {
        a.Jh ? delete a.Jh : a.ce(!0)
    })) : (cf(this, function(a) {
        a.isEnabled() ? a.ce(!1) : a.Jh = !0
    }), this.td = this.Mc = !1), this.nd && kg(sg(this), a && this.wc))
};

function Ag(a, b) {
    b != a.nd && a.ba && ug(a, b);
    a.nd = b;
    a.Mc && a.wc && kg(sg(a), b)
}
g.od = function(a) {
    (a = ef(this, a)) ? a.yb(!0): -1 < this.za && ef(this, this.za).yb(!1)
};

function wg(a) {
    Bg(a, function(a, c) {
        return (a + 1) % c
    }, df(a) - 1)
}

function xg(a) {
    Bg(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, 0)
}

function zg(a) {
    Bg(a, function(a, c) {
        return (a + 1) % c
    }, a.za)
}

function yg(a) {
    Bg(a, function(a, c) {
        a--;
        return 0 > a ? c - 1 : a
    }, a.za)
}

function Bg(a, b, c) {
    c = 0 > c ? hf(a, a.Ja) : c;
    var d = df(a);
    c = b.call(a, c, d);
    for (var e = 0; e <= d;) {
        var f = ef(a, c);
        if (f && a.Ng(f)) {
            a.od(c);
            break
        }
        e++;
        c = b.call(a, c, d)
    }
}
g.Ng = function(a) {
    return a.Z() && a.isEnabled() && !!(a.Ea & 2)
};

function Cg() {}
t(Cg, wf);
ba(Cg);
Cg.prototype.na = function() {
    return "goog-menuheader"
};

function Dg(a, b, c) {
    K.call(this, a, c || Cg.Wb(), b);
    this.qb(1, !1);
    this.qb(2, !1);
    this.qb(4, !1);
    this.qb(32, !1);
    this.ha = 1
}
t(Dg, K);
pf("goog-menuheader", function() {
    return new Dg(null)
});

function Eg(a, b) {
    qg.call(this, rg, b || pg.Wb(), a);
    Ag(this, !1)
}
t(Eg, qg);
g = Eg.prototype;
g.tf = !0;
g.na = function() {
    return this.Qd.na()
};

function Fg(a) {
    a.tf = !0;
    Ag(a, !0)
}
g.$ = function(a, b, c) {
    (b = Eg.w.$.call(this, a, b)) && a && this.ba && this.tf && sg(this).focus();
    a && c && fa(c.clientX) ? this.h = new w(c.clientX, c.clientY) : this.h = null;
    return b
};
g.Nf = function(a) {
    this.tf && sg(this).focus();
    return Eg.w.Nf.call(this, a)
};
g.Ng = function(a) {
    return a.isEnabled() && a.Z() && !!(a.Ea & 2)
};
g.Kf = function(a) {
    var b = Eg.w.Kf.call(this, a);
    b || cf(this, function(c) {
        !b && c.Yk && c.yh == a.g && (this.isEnabled() && this.od(hf(this, c)), b = c.Ab(a))
    }, this);
    return b
};
g.od = function(a) {
    Eg.w.od.call(this, a);
    if (a = ef(this, a)) {
        var b = a.D(),
            c = (a = this.D() || pc(document)) || pc(document),
            d = ed(b),
            e = ed(c),
            f;
        if (!u || 9 <= Number(Wb)) k = ad(c, "borderLeftWidth"), f = ad(c, "borderRightWidth"), l = ad(c, "borderTopWidth"), n = ad(c, "borderBottomWidth"), f = new Xc(parseFloat(l), parseFloat(f), parseFloat(n), parseFloat(k));
        else {
            var k = ld(c, "borderLeft");
            f = ld(c, "borderRight");
            var l = ld(c, "borderTop"),
                n = ld(c, "borderBottom");
            f = new Xc(l, f, n, k)
        }
        c == pc(document) ? (k = d.x - c.scrollLeft, d = d.y - c.scrollTop, !u || 10 <= Number(Wb) ||
            (k += f.left, d += f.top)) : (k = d.x - e.x - f.left, d = d.y - e.y - f.top);
        e = c.clientHeight - b.offsetHeight;
        f = c.scrollLeft;
        l = c.scrollTop;
        f += Math.min(k, Math.max(k - (c.clientWidth - b.offsetWidth), 0));
        l += Math.min(d, Math.max(d - e, 0));
        b = new w(f, l);
        a.scrollLeft = b.x;
        a.scrollTop = b.y
    }
};
var Hg = {
    ye: null,
    show: function(a, b, c) {
        Gg(Hg, c, null);
        if (b.length) {
            var d = new Eg;
            d.md(c);
            for (var e = 0, f; f = b[e]; e++) {
                var k = new ig(f.text);
                k.md(c);
                d.Gd(k, !0);
                k.ce(f.enabled);
                f.enabled && Kd(k, "action", f.$a)
            }
            Kd(d, "action", Hg.lc);
            b = oc();
            e = cd();
            d.V(L);
            var l = d.D();
            Ig(l, "blocklyContextMenu");
            M(l, "contextmenu", null, Jg);
            f = fd(l);
            var k = a.clientX + e.x,
                n = a.clientY + e.y;
            a.clientY + f.height >= b.height && (n -= f.height);
            c ? f.width >= a.clientX && (k += f.width) : a.clientX + f.width >= b.width && (k -= f.width);
            Kg(k, n, b, e, c);
            Fg(d);
            setTimeout(function() {
                    l.focus()
                },
                1);
            Hg.ye = null
        } else Hg.lc()
    },
    lc: function() {
        Lg(Hg);
        Hg.ye = null
    },
    wq: function(a, b) {
        return function() {
            G++;
            var c = ze(b, a.A),
                d = a.oa();
            d.x = a.s ? d.x - Fe : d.x + Fe;
            d.y += 2 * Fe;
            c.moveBy(d.x, d.y);
            G--;
            0 == G && !c.i && H(new Mg(c));
            c.select()
        }
    }
};
// Copyright 2012 Google Inc.  Apache License 2.0
function Ng(a) {
    this.id = Og();
    Pg[this.id] = this;
    this.options = a || {};
    this.s = !!this.options.s;
    this.mc = !!this.options.mc;
    this.ea = this.options.ea;
    this.i = [];
    this.B = [];
    this.j = [];
    this.F = [];
    this.Rb = Object.create(null)
}
g = Ng.prototype;
g.P = !1;
g.C = function() {
    this.B.length = 0;
    this.clear();
    delete Pg[this.id]
};

function Qg(a, b) {
    for (var c = !1, d, e = 0; d = a.i[e]; e++)
        if (d == b) {
            a.i.splice(e, 1);
            c = !0;
            break
        }
    if (!c) throw "Block not present in workspace's list of top-most blocks.";
}

function Rg(a, b) {
    var c = [].concat(a.i);
    if (b && 1 < c.length) {
        var d = Math.sin(3 * Math.PI / 180);
        a.s && (d *= -1);
        c.sort(function(a, b) {
            var c = a.oa(),
                l = b.oa();
            return c.y + d * c.x - (l.y + d * l.x)
        })
    }
    return c
}
g.Nc = function() {
    for (var a = Rg(this, !1), b = 0; b < a.length; b++) a.push.apply(a, a[b].Oc());
    return a
};
g.clear = function() {
    var a = ke;
    for (a || F(!0); this.i.length;) this.i[0].C();
    a || F(!1)
};
g.Hb = function() {
    return 0
};
g.Zd = function(a, b) {
    return new Sg(this, a, b)
};

function Tg(a) {
    return isNaN(a.options.F) ? Infinity : a.options.F - a.Nc().length
}
g.qg = function(a) {
    var b = a ? this.F : this.j,
        c = a ? this.j : this.F,
        d = b.pop();
    if (d) {
        for (var e = [d]; b.length && d.i && d.i == b[b.length - 1].i;) e.push(b.pop());
        for (b = 0; d = e[b]; b++) c.push(d);
        e = Ug(e, a);
        je = !1;
        for (b = 0; d = e[b]; b++) d.j(a);
        je = !0
    }
};
g.Og = function() {
    this.j.length = 0;
    for (var a = this.F.length = 0, b; b = Vg[a]; a++) b.cg = !1
};
g.Qb = function(a) {
    this.B.push(a);
    return a
};
g.vd = function(a) {
    a = this.B.indexOf(a); - 1 != a && this.B.splice(a, 1)
};
var Pg = Object.create(null);
Ng.prototype.clear = Ng.prototype.clear;
Ng.prototype.clearUndo = Ng.prototype.Og;
Ng.prototype.addChangeListener = Ng.prototype.Qb;
Ng.prototype.removeChangeListener = Ng.prototype.vd;

function Wg(a) {
    var b = x("xml");
    a = Rg(a, !0);
    for (var c = 0, d; d = a[c]; c++) b.appendChild(Xg(d));
    return b
}

function Xg(a) {
    var b;
    a.A.s && (b = a.A.Hb());
    var c = fe(a),
        d = a.oa();
    c.setAttribute("x", Math.round(a.A.s ? b - d.x : d.x));
    c.setAttribute("y", Math.round(d.y));
    return c
}

function fe(a) {
    var b = x(a.i ? "shadow" : "block");
    b.setAttribute("type", a.type);
    b.setAttribute("id", a.id);
    if (a.T) {
        var c = a.T();
        c && (c.hasChildNodes() || c.hasAttributes()) && b.appendChild(c)
    }
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.Ba[e]; e++)
            if (f.name && f.cd) {
                var k = x("field", null, f.Wa());
                k.setAttribute("name", f.name);
                b.appendChild(k)
            }
    if (c = a.Fe()) c = x("comment", null, c), "object" == typeof a.wa && (c.setAttribute("pinned", a.wa.Z()), d = Yg(a.wa), c.setAttribute("h", d.height), c.setAttribute("w", d.width)), b.appendChild(c);
    a.data && (c = x("data", null, a.data), b.appendChild(c));
    for (c = 0; d = a.h[c]; c++) {
        var l;
        f = !0;
        5 != d.type && (k = E(d.J), 1 == d.type ? l = x("value") : 3 == d.type && (l = x("statement")), e = d.J.Yb, !e || k && k.i || l.appendChild(Zg(e)), k && (l.appendChild(fe(k)), f = !1), l.setAttribute("name", d.name), f || b.appendChild(l))
    }
    a.rg != a.N && b.setAttribute("inline", a.N);
    a.j && b.setAttribute("collapsed", !0);
    a.disabled && b.setAttribute("disabled", !0);
    $g(a) || a.i || b.setAttribute("deletable", !1);
    ve(a) || a.i || b.setAttribute("movable", !1);
    ah(a) || b.setAttribute("editable", !1);
    if (c = he(a)) l = x("next", null, fe(c)), b.appendChild(l);
    e = a.g && a.g.Yb;
    !e || c && c.i || l.appendChild(Zg(e));
    return b
}

function Zg(a) {
    for (var b = a = a.cloneNode(!0), c; b;)
        if (b.firstChild) b = b.firstChild;
        else {
            for (; b && !b.nextSibling;) c = b, b = b.parentNode, 3 == c.nodeType && "" == c.data.trim() && b.firstChild != c && y(c);
            b && (c = b, b = b.nextSibling, 3 == c.nodeType && "" == c.data.trim() && y(c))
        }
    return a
}

function bh(a) {
    return (new XMLSerializer).serializeToString(a)
}

function ch(a) {
    return (new DOMParser).parseFromString(a, "text/xml").firstChild
}

function eh(a, b) {
    if (a instanceof Ng) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments.")
    }
    var d;
    b.s && (d = b.Hb());
    fh();
    var c = a.childNodes.length,
        e = ke;
    e || F(!0);
    for (var f = 0; f < c; f++) {
        var k = a.childNodes[f];
        if ("block" == k.nodeName.toLowerCase()) {
            var l = ze(k, b),
                n = parseInt(k.getAttribute("x"), 10),
                k = parseInt(k.getAttribute("y"), 10);
            isNaN(n) || isNaN(k) || l.moveBy(b.s ? d - n : n, k)
        }
    }
    e || F(!1);
    gh()
}

function ze(a, b) {
    if (a instanceof Ng) {
        var c = a;
        a = b;
        b = c;
        console.warn("Deprecated call to Blockly.Xml.domToBlock, swap the arguments.")
    }
    G++;
    var d = hh(a, b);
    if (b.P) {
        ih(d, !0);
        for (var c = d.bb(), e = c.length - 1; 0 <= e; e--) c[e].zc();
        for (e = c.length - 1; 0 <= e; e--) c[e].V(!1);
        setTimeout(function() {
            d.A && ih(d, !1)
        }, 1);
        Qe(d);
        jh(b)
    }
    G--;
    0 == G && H(new Mg(d));
    return d
}

function hh(a, b) {
    for (var c = null, d = a.getAttribute("type"), e = a.getAttribute("id"), c = b.Zd(d, e), f = null, e = 0, k; k = a.childNodes[e]; e++)
        if (3 != k.nodeType) {
            for (var l = f = null, n = 0, m; m = k.childNodes[n]; n++) 1 == m.nodeType && ("block" == m.nodeName.toLowerCase() ? f = m : "shadow" == m.nodeName.toLowerCase() && (l = m));
            !f && l && (f = l);
            n = k.getAttribute("name");
            switch (k.nodeName.toLowerCase()) {
                case "mutation":
                    c.ga && (c.ga(k), c.zc && c.zc());
                    break;
                case "comment":
                    c.be(k.textContent);
                    var q = k.getAttribute("pinned");
                    q && !c.F && setTimeout(function() {
                        c.wa &&
                            c.wa.$ && c.wa.$("true" == q)
                    }, 1);
                    f = parseInt(k.getAttribute("w"), 10);
                    k = parseInt(k.getAttribute("h"), 10);
                    !isNaN(f) && !isNaN(k) && c.wa && c.wa.$ && kh(c.wa, f, k);
                    break;
                case "data":
                    c.data = k.textContent;
                    break;
                case "title":
                case "field":
                    f = lh(c, n);
                    if (!f) {
                        console.warn("Ignoring non-existent field " + n + " in block " + d);
                        break
                    }
                    f.va(k.textContent);
                    break;
                case "value":
                case "statement":
                    k = mh(c, n);
                    if (!k) {
                        console.warn("Ignoring non-existent input " + n + " in block " + d);
                        break
                    }
                    l && (k.J.Yb = l);
                    f && (f = hh(f, b), f.L ? k.J.connect(f.L) : f.S && k.J.connect(f.S));
                    break;
                case "next":
                    l && c.g && (c.g.Yb = l);
                    f && (f = hh(f, b), c.g.connect(f.S));
                    break;
                default:
                    console.warn("Ignoring unknown tag: " + k.nodeName)
            }
        }(d = a.getAttribute("inline")) && c.Nb("true" == d);
    (d = a.getAttribute("disabled")) && c.xd("true" == d);
    if (d = a.getAttribute("deletable")) c.Jd = "true" == d;
    (d = a.getAttribute("movable")) && c.$e("true" == d);
    (d = a.getAttribute("editable")) && c.jg("true" == d);
    (d = a.getAttribute("collapsed")) && c.Yc("true" == d);
    if ("shadow" == a.nodeName.toLowerCase()) {
        d = c.Oc();
        for (e = 0; d[e]; e++);
        c.lg(!0)
    }
    c.Hg &&
        c.Hg();
    return c
}
h.Blockly || (h.Blockly = {});
h.Blockly.Xml || (h.Blockly.Xml = {});
h.Blockly.Xml.domToText = bh;
h.Blockly.Xml.domToWorkspace = eh;
h.Blockly.Xml.textToDom = ch;
h.Blockly.Xml.workspaceToDom = Wg;

function nh(a, b, c, d, e, f) {
    this.m = a;
    this.u = b;
    this.B = c;
    c = oh;
    this.m.s && (c = -c);
    this.F = c * Math.PI / 180;
    a.g.appendChild(ph(this, b, !(!e || !f)));
    this.Jc = d;
    this.ae && qh(this);
    e && f || (b = this.u.getBBox(), e = b.width + 2 * rh, f = b.height + 2 * rh);
    sh(this, e, f);
    qh(this);
    th(this);
    this.ae = !0;
    a.options.i || (M(this.i, "mousedown", this, this.Ik), this.g && M(this.g, "mousedown", this, this.Dl))
}
var rh = 6,
    oh = 20,
    uh = null,
    vh = null;
g = nh.prototype;
g.fg = null;

function wh() {
    uh && (N(uh), uh = null);
    vh && (N(vh), vh = null)
}
g.ae = !1;
g.Jc = null;
g.Wc = 0;
g.$d = 0;
g.Y = 0;
g.Bd = 0;
g.wf = !0;

function ph(a, b, c) {
    a.h = J("g", {}, null);
    var d = {
        filter: "url(#" + a.m.options.K + ")"
    }; - 1 != nb.indexOf("JavaFX") && (d = {});
    d = J("g", d, a.h);
    a.j = J("path", {}, d);
    a.i = J("rect", {
        "class": "blocklyDraggable",
        x: 0,
        y: 0,
        rx: rh,
        ry: rh
    }, d);
    c ? (a.g = J("g", {
            "class": a.m.s ? "blocklyResizeSW" : "blocklyResizeSE"
        }, a.h), c = 2 * rh, J("polygon", {
            points: "0,x x,x x,0".replace(/x/g, c.toString())
        }, a.g), J("line", {
            "class": "blocklyResizeLine",
            x1: c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: c / 3
        }, a.g), J("line", {
            "class": "blocklyResizeLine",
            x1: 2 * c / 3,
            y1: c - 1,
            x2: c - 1,
            y2: 2 * c / 3
        }, a.g)) :
        a.g = null;
    a.h.appendChild(b);
    return a.h
}
g.Ik = function(a) {
    xh(this);
    wh();
    yh(a) ? a.stopPropagation() : zh(a) || (Ah(Bh), Ch(this.m, a, new w(this.m.s ? -this.Wc : this.Wc, this.$d)), uh = M(document, "mouseup", this, wh), vh = M(document, "mousemove", this, this.Jk), Dh(), a.stopPropagation())
};
g.Jk = function(a) {
    this.wf = !1;
    a = Eh(this.m, a);
    this.Wc = this.m.s ? -a.x : a.x;
    this.$d = a.y;
    qh(this);
    th(this)
};
g.Dl = function(a) {
    xh(this);
    wh();
    yh(a) || (Ah(Bh), Ch(this.m, a, new w(this.m.s ? -this.Y : this.Y, this.Bd)), uh = M(document, "mouseup", this, wh), vh = M(document, "mousemove", this, this.El), Dh());
    a.stopPropagation()
};
g.El = function(a) {
    this.wf = !1;
    a = Eh(this.m, a);
    sh(this, this.m.s ? -a.x : a.x, a.y);
    this.m.s && qh(this)
};

function xh(a) {
    a.h.parentNode.appendChild(a.h)
}

function qh(a) {
    var b = a.Jc.x,
        b = a.m.s ? b - (a.Wc + a.Y) : b + a.Wc;
    a.h.setAttribute("transform", "translate(" + b + "," + (a.$d + a.Jc.y) + ")")
}

function Fh(a) {
    return {
        width: a.Y,
        height: a.Bd
    }
}

function sh(a, b, c) {
    var d = 2 * rh;
    b = Math.max(b, d + 45);
    c = Math.max(c, d + 20);
    a.Y = b;
    a.Bd = c;
    a.i.setAttribute("width", b);
    a.i.setAttribute("height", c);
    a.g && (a.m.s ? a.g.setAttribute("transform", "translate(" + 2 * rh + "," + (c - d) + ") scale(-1 1)") : a.g.setAttribute("transform", "translate(" + (b - d) + "," + (c - d) + ")"));
    if (a.ae) {
        if (a.wf) {
            b = -a.Y / 4;
            c = -a.Bd - 25;
            d = a.m.Ca();
            d.aa /= a.m.scale;
            d.Ga /= a.m.scale;
            var e = a.Jc.x;
            a.m.s ? e - d.Ga - b - a.Y < P ? b = e - d.Ga - a.Y - P : e - d.Ga - b > d.aa && (b = e - d.Ga - d.aa) : e + b < d.Ga ? b = d.Ga - e : d.Ga + d.aa < e + b + a.Y + 10 + P && (b = d.Ga + d.aa -
                e - a.Y - P);
            a.Jc.y + c < d.$b && (c = a.B.getBBox().height);
            a.Wc = b;
            a.$d = c
        }
        qh(a);
        th(a)
    }
    a.fg && a.fg()
}

function th(a) {
    var b = [],
        c = a.Y / 2,
        d = a.Bd / 2,
        e = -a.Wc,
        f = -a.$d;
    if (c == e && d == f) b.push("M " + c + "," + d);
    else {
        f -= d;
        e -= c;
        a.m.s && (e *= -1);
        var k = Math.sqrt(f * f + e * e),
            l = Math.acos(e / k);
        0 > f && (l = 2 * Math.PI - l);
        var n = l + Math.PI / 2;
        n > 2 * Math.PI && (n -= 2 * Math.PI);
        var m = Math.sin(n),
            q = Math.cos(n),
            r = Fh(a),
            n = (r.width + r.height) / 10,
            n = Math.min(n, r.width, r.height) / 2,
            r = 1 - 8 / k,
            e = c + r * e,
            f = d + r * f,
            r = c + n * q,
            z = d + n * m,
            c = c - n * q,
            d = d - n * m,
            m = l + a.F;
        m > 2 * Math.PI && (m -= 2 * Math.PI);
        l = Math.sin(m) * k / 4;
        k = Math.cos(m) * k / 4;
        b.push("M" + r + "," + z);
        b.push("C" + (r + k) + "," + (z + l) +
            " " + e + "," + f + " " + e + "," + f);
        b.push("C" + e + "," + f + " " + (c + k) + "," + (d + l) + " " + c + "," + d)
    }
    b.push("z");
    a.j.setAttribute("d", b.join(" "))
}
g.C = function() {
    wh();
    y(this.h);
    this.B = this.u = this.m = this.g = this.i = this.j = this.h = null
};

function Gh(a) {
    this.m = a
}
g = Gh.prototype;
g.kf = !1;
g.o = null;
g.df = null;
g.Zf = 0;
g.Bc = 0;
g.ac = 0;
g.le = 0;
g.G = function(a) {
    this.g = 20 + a;
    Hh(this, !1);
    return this.g + 60
};
g.C = function() {
    this.o && (y(this.o), this.o = null);
    this.m = this.df = null;
    h.clearTimeout(this.Zf)
};
g.position = function() {
    var a = this.m.Ca();
    a && (this.m.s ? (this.ac = 20 + P, 2 == a.ea && (this.ac += a.Be, this.m.W && (this.ac += a.Ha))) : (this.ac = a.aa + a.Ha - 47 - 20 - P, 3 == a.ea && (this.ac -= a.Be)), this.le = a.ya + a.Na - 60 - this.g, 1 == a.ea && (this.le -= a.lh), this.o.setAttribute("transform", "translate(" + this.ac + "," + this.le + ")"))
};
g.Md = function() {
    var a = this.o.getBoundingClientRect();
    return new Yc(a.left + 0 - 10, a.top + 32 - 10, 67, 80)
};

function Hh(a, b) {
    a.kf != b && (h.clearTimeout(a.Zf), a.kf = b, a.vf())
}
g.vf = function() {
    this.Bc += this.kf ? .2 : -.2;
    this.Bc = cc(this.Bc, 0, 1);
    var a = 45 * this.Bc;
    this.df.setAttribute("transform", "rotate(" + (this.m.s ? -a : a) + "," + (this.m.s ? 4 : 43) + ",14)");
    this.o.style.opacity = .4 + .4 * this.Bc;
    0 < this.Bc && 1 > this.Bc && (this.Zf = Zd(this.vf, 20, this))
};
g.close = function() {
    Hh(this, !1)
};
g.Sh = function() {
    var a = this.m.ng - this.m.scrollX,
        b = this.m.og - this.m.scrollY;
    Math.sqrt(a * a + b * b) > Ih || console.log("TODO: Inspect trash.")
};

function Jh(a) {
    this.m = a;
    this.h = new Kh(a, !0, !0);
    this.i = new Kh(a, !1, !0);
    this.j = J("rect", {
        height: P,
        width: P,
        "class": "blocklyScrollbarBackground"
    }, null);
    Lh(this.j, a.g)
}
Jh.prototype.g = null;
Jh.prototype.C = function() {
    y(this.j);
    this.g = this.m = this.j = null;
    this.h.C();
    this.h = null;
    this.i.C();
    this.i = null
};
Jh.prototype.resize = function() {
    var a = this.m.Ca();
    if (a) {
        var b = !1,
            c = !1;
        this.g && this.g.aa == a.aa && this.g.ya == a.ya && this.g.Na == a.Na && this.g.Ha == a.Ha ? (this.g && this.g.ab == a.ab && this.g.Ga == a.Ga && this.g.sb == a.sb || (b = !0), this.g && this.g.Ua == a.Ua && this.g.$b == a.$b && this.g.tb == a.tb || (c = !0)) : c = b = !0;
        b && this.h.resize(a);
        c && this.i.resize(a);
        this.g && this.g.aa == a.aa && this.g.Ha == a.Ha || this.j.setAttribute("x", this.i.I.x);
        this.g && this.g.ya == a.ya && this.g.Na == a.Na || this.j.setAttribute("y", this.h.I.y);
        this.g = a
    }
};
Jh.prototype.set = function(a, b) {
    var c = {},
        d = a * this.h.g,
        e = b * this.i.g,
        f = this.i.i;
    c.x = Mh(d, this.h.i);
    c.y = Mh(e, f);
    this.m.Ec(c);
    Nh(this.h, d);
    Nh(this.i, e)
};

function Mh(a, b) {
    var c = a / b;
    return isNaN(c) ? 0 : c
}

function Kh(a, b, c) {
    this.m = a;
    this.F = c || !1;
    this.B = b;
    this.N = null;
    this.o = J("g", {
        "class": "blocklyScrollbar" + (this.B ? "Horizontal" : "Vertical")
    }, null);
    this.h = J("rect", {
        "class": "blocklyScrollbarBackground"
    }, this.o);
    a = Math.floor((P - 5) / 2);
    this.j = J("rect", {
        "class": "blocklyScrollbarHandle",
        rx: a,
        ry: a
    }, this.o);
    Lh(this.o, this.m.g);
    this.I = new w(0, 0);
    b ? (this.h.setAttribute("height", P), this.j.setAttribute("height", P - 5), this.j.setAttribute("y", 2.5), this.K = "width", this.La = "x") : (this.h.setAttribute("width", P), this.j.setAttribute("width",
        P - 5), this.j.setAttribute("x", 2.5), this.K = "height", this.La = "y");
    this.ga = M(this.h, "mousedown", this, this.xl);
    this.ma = M(this.j, "mousedown", this, this.yl)
}
var Oh, Ph;
Kh.prototype.i = 0;
Kh.prototype.u = 0;
Kh.prototype.H = 0;
Kh.prototype.T = !0;
var P = 15;
Dd && (P = 25);
g = Kh.prototype;
g.C = function() {
    this.We();
    N(this.ga);
    this.ga = null;
    N(this.ma);
    this.ma = null;
    y(this.o);
    this.m = this.j = this.h = this.o = null
};

function Nh(a, b) {
    a.H = b;
    a.j.setAttribute(a.La, a.H)
}

function Qh(a, b, c) {
    a.I.x = b;
    a.I.y = c;
    a.o.setAttribute("transform", "translate(" + a.I.x + "," + a.I.y + ")")
}
g.resize = function(a) {
    if (!a && (a = this.m.Ca(), !a)) return;
    var b = this.N;
    if (!a || !b || a.aa != b.aa || a.ya != b.ya || a.Ga != b.Ga || a.$b != b.$b || a.Na != b.Na || a.Ha != b.Ha || a.ab != b.ab || a.Ua != b.Ua || a.sb != b.sb || a.tb != b.tb) {
        this.N = a;
        if (this.B) {
            b = a.aa - 1;
            this.F && (b -= P);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.K, this.i);
            b = a.Ha + .5;
            this.F && this.m.s && (b += P);
            Qh(this, b, a.Na + a.ya - P - .5);
            this.F || this.$(this.i < a.ab);
            this.g = this.i / a.ab;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.u = Math.max(0, a.aa * this.g);
            this.j.setAttribute(this.K,
                this.u);
            Nh(this, Rh(this, (a.Ga - a.sb) * this.g))
        } else {
            b = a.ya - 1;
            this.F && (b -= P);
            this.i = Math.max(0, b);
            this.h.setAttribute(this.K, this.i);
            b = a.Ha + .5;
            this.m.s || (b += a.aa - P - 1);
            Qh(this, b, a.Na + .5);
            this.F || this.$(this.i < a.Ua);
            this.g = this.i / a.Ua;
            if (-Infinity == this.g || Infinity == this.g || isNaN(this.g)) this.g = 0;
            this.u = Math.max(0, a.ya * this.g);
            this.j.setAttribute(this.K, this.u);
            Nh(this, Rh(this, (a.$b - a.tb) * this.g))
        }
        Sh(this)
    }
};
g.Z = function() {
    return this.T
};
g.$ = function(a) {
    if (a != this.Z()) {
        if (this.F) throw "Unable to toggle visibility of paired scrollbars.";
        (this.T = a) ? this.o.setAttribute("display", "block"): (this.m.Ec({
            x: 0,
            y: 0
        }), this.o.setAttribute("display", "none"))
    }
};
g.xl = function(a) {
    this.We();
    if (yh(a)) a.stopPropagation();
    else {
        var b = Th(a, Uh(this.m)),
            b = this.B ? b.x : b.y,
            c = Vh(this.j, this.m),
            c = this.B ? c.x : c.y,
            d = this.H,
            e = .95 * this.u;
        b <= c ? d -= e : b >= c + this.u && (d += e);
        Nh(this, Rh(this, d));
        Sh(this);
        a.stopPropagation();
        a.preventDefault()
    }
};
g.yl = function(a) {
    this.We();
    yh(a) ? a.stopPropagation() : (this.Qa = this.H, this.Ra = this.B ? a.clientX : a.clientY, Oh = M(document, "mouseup", this, this.We), Ph = M(document, "mousemove", this, this.Al), a.stopPropagation(), a.preventDefault())
};
g.Al = function(a) {
    Nh(this, Rh(this, this.Qa + ((this.B ? a.clientX : a.clientY) - this.Ra)));
    Sh(this)
};
g.We = function() {
    Dh(!0);
    Oh && (N(Oh), Oh = null);
    Ph && (N(Ph), Ph = null)
};

function Rh(a, b) {
    return b = 0 >= b || isNaN(b) ? 0 : Math.min(b, a.i - a.u)
}

function Sh(a) {
    var b = a.H / a.i;
    isNaN(b) && (b = 0);
    var c = {};
    a.B ? c.x = b : c.y = b;
    a.m.Ec(c)
}
g.set = function(a) {
    Nh(this, Rh(this, a * this.g));
    Sh(this)
};

function Lh(a, b) {
    var c = b.nextSibling,
        d = b.parentNode;
    if (!d) throw "Reference node has no parent.";
    c ? d.insertBefore(a, c) : d.appendChild(a)
};

function Wh() {}
Wh.prototype = [];

function He(a, b) {
    if (b.yc) throw "Connection already in database.";
    b.v.F || (a.splice(Xh(a, b), 0, b), b.yc = !0)
}

function Yh(a, b) {
    if (!a.length) return -1;
    var c = Xh(a, b);
    if (c >= a.length) return -1;
    for (var d = b.ua, e = c; 0 <= e && a[e].ua == d;) {
        if (a[e] == b) return e;
        e--
    }
    for (; c < a.length && a[c].ua == d;) {
        if (a[c] == b) return c;
        c++
    }
    return -1
}

function Xh(a, b) {
    if (!a.length) return 0;
    for (var c = 0, d = a.length; c < d;) {
        var e = Math.floor((c + d) / 2);
        if (a[e].ua < b.ua) c = e + 1;
        else if (a[e].ua > b.ua) d = e;
        else {
            c = e;
            break
        }
    }
    return c
}

function qe(a, b) {
    if (!b.yc) throw "Connection not in database.";
    var c = Yh(a, b);
    if (-1 == c) throw "Unable to find connection in connectionDB.";
    b.yc = !1;
    a.splice(c, 1)
}

function Zh(a, b) {
    var c = Fe;

    function d(a) {
        var b = f - e[a].kb,
            d = k - e[a].ua;
        Math.sqrt(b * b + d * d) <= c && q.push(e[a]);
        return d < c
    }
    for (var e = a, f = b.kb, k = b.ua, l = 0, n = e.length - 2, m = n; l < m;) e[m].ua < k ? l = m : n = m, m = Math.floor((l + n) / 2);
    var q = [],
        n = l = m;
    if (e.length) {
        for (; 0 <= l && d(l);) l--;
        do n++; while (n < e.length && d(n))
    }
    return q
}

function $h(a, b, c, d) {
    if (!a.length) return {
        J: null,
        Ch: c
    };
    var e = b.ua,
        f = b.kb;
    b.kb = f + d.x;
    b.ua = e + d.y;
    var k = Xh(a, b);
    d = null;
    for (var l = c, n, m = k - 1; 0 <= m && Math.abs(a[m].ua - b.ua) <= c;) n = a[m], b.Se(n, l) && (d = n, l = De(n, b)), m--;
    for (; k < a.length && Math.abs(a[k].ua - b.ua) <= c;) n = a[k], b.Se(n, l) && (d = n, l = De(n, b)), k++;
    b.kb = f;
    b.ua = e;
    return {
        J: d,
        Ch: l
    }
};
// Copyright 2015 Google Inc.  Apache License 2.0
function ai(a) {
    this.m = a
}
g = ai.prototype;
g.o = null;
g.bc = 0;
g.me = 0;

function bi(a) {
    var b = a.m;
    a.o = J("g", {
        "class": "blocklyZoom"
    }, null);
    var c = String(Math.random()).substring(2),
        d = J("clipPath", {
            id: "blocklyZoomoutClipPath" + c
        }, a.o);
    J("rect", {
        width: 32,
        height: 32,
        y: 77
    }, d);
    var e = J("image", {
        width: ci,
        height: di,
        x: -64,
        y: -15,
        "clip-path": "url(#blocklyZoomoutClipPath" + c + ")"
    }, a.o);
    e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.Lb + ei);
    d = J("clipPath", {
        id: "blocklyZoominClipPath" + c
    }, a.o);
    J("rect", {
        width: 32,
        height: 32,
        y: 43
    }, d);
    var f = J("image", {
        width: ci,
        height: di,
        x: -32,
        y: -49,
        "clip-path": "url(#blocklyZoominClipPath" + c + ")"
    }, a.o);
    f.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.Lb + ei);
    d = J("clipPath", {
        id: "blocklyZoomresetClipPath" + c
    }, a.o);
    J("rect", {
        width: 32,
        height: 32
    }, d);
    c = J("image", {
        width: ci,
        height: di,
        y: -92,
        "clip-path": "url(#blocklyZoomresetClipPath" + c + ")"
    }, a.o);
    c.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", b.options.Lb + ei);
    M(c, "mousedown", null, function(a) {
        fi(b, 1);
        if (b.Da) {
            var c = b.Ca(),
                d = (c.ab - c.aa) / 2;
            b.R && (d -= b.R.Y / 2);
            b.Da.set(d, (c.Ua - c.ya) / 2)
        }
        a.stopPropagation();
        a.preventDefault()
    });
    M(f, "mousedown", null, function(a) {
        gi(b, 1);
        a.stopPropagation();
        a.preventDefault()
    });
    M(e, "mousedown", null, function(a) {
        gi(b, -1);
        a.stopPropagation();
        a.preventDefault()
    });
    return a.o
}
g.G = function(a) {
    this.g = 20 + a;
    return this.g + 110
};
g.C = function() {
    this.o && (y(this.o), this.o = null);
    this.m = null
};
g.position = function() {
    var a = this.m.Ca();
    a && (this.m.s ? (this.bc = 20 + P, 2 == a.ea && (this.bc += a.Be, this.m.W && (this.bc += a.Ha))) : (this.bc = a.aa + a.Ha - 32 - 20 - P, 3 == a.ea && (this.bc -= a.Be)), this.me = a.ya + a.Na - 110 - this.g, 1 == a.ea && (this.me -= a.lh), this.o.setAttribute("transform", "translate(" + this.bc + "," + this.me + ")"))
};

function hi(a) {
    var b = !!a.readOnly;
    if (b) var c = null,
        d = !1,
        e = !1,
        f = !1,
        k = !1,
        l = !1,
        n = !1;
    else {
        var m = a.toolbox;
        m ? ("string" != typeof m && ("undefined" == typeof XSLTProcessor && m.outerHTML ? m = m.outerHTML : m instanceof Element || (m = null)), "string" == typeof m && (m = ch(m))) : m = null;
        c = m;
        d = !(!c || !c.getElementsByTagName("category").length);
        e = a.trashcan;
        void 0 === e && (e = d);
        f = a.collapse;
        void 0 === f && (f = d);
        k = a.comments;
        void 0 === k && (k = d);
        l = a.disable;
        void 0 === l && (l = d);
        n = a.sounds;
        void 0 === n && (n = !0)
    }
    var m = !!a.rtl,
        q = a.horizontalLayout;
    void 0 ===
        q && (q = !1);
    var r = a.toolboxPosition,
        r = "end" === r ? !1 : !0,
        z = a.scrollbars;
    void 0 === z && (z = d);
    var B = a.css;
    void 0 === B && (B = !0);
    var A = "https://blockly-demo.appspot.com/static/media/";
    a.media ? A = a.media : a.path && (A = a.path + "media/");
    this.s = m;
    this.u = f;
    this.H = k;
    this.I = l;
    this.i = b;
    this.F = a.maxBlocks || Infinity;
    this.Lb = A;
    this.N = d;
    this.B = z;
    this.ma = e;
    this.ga = n;
    this.T = B;
    this.mc = q;
    this.rd = c;
    b = a.grid || {};
    c = {};
    c.spacing = parseFloat(b.spacing) || 0;
    c.xq = b.colour || "#888";
    c.length = parseFloat(b.length) || 1;
    c.Fq = 0 < c.spacing && !!b.snap;
    this.h = c;
    a = a.zoom || {};
    b = {};
    b.controls = void 0 === a.controls ? !1 : !!a.controls;
    b.Ol = void 0 === a.wheel ? !1 : !!a.wheel;
    b.Jl = void 0 === a.startScale ? 1 : parseFloat(a.startScale);
    b.Xd = void 0 === a.maxScale ? 3 : parseFloat(a.maxScale);
    b.Yd = void 0 === a.minScale ? .3 : parseFloat(a.minScale);
    b.Gl = void 0 === a.scaleSpeed ? 1.2 : parseFloat(a.scaleSpeed);
    this.g = b;
    this.ea = q ? r ? 0 : 1 : r == m ? 3 : 2
}
hi.prototype.Kb = null;
hi.prototype.Ec = function() {};
hi.prototype.Ca = function() {
    return null
};
// Copyright 2014 Google Inc.  Apache License 2.0
function ii(a) {
    ii.w.constructor.call(this, a);
    this.Ca = a.Ca;
    this.Ec = a.Ec;
    a = [];
    a[1] = new Wh;
    a[2] = new Wh;
    a[3] = new Wh;
    a[4] = new Wh;
    this.N = a;
    this.I = Object.create(null)
}
t(ii, Ng);
g = ii.prototype;
g.P = !0;
g.Vf = !1;
g.Wf = !1;
g.scrollX = 0;
g.scrollY = 0;
g.ng = 0;
g.og = 0;
g.jh = null;
g.scale = 1;
g.fb = null;
g.Da = null;
g.xh = null;

function ji(a, b) {
    a.o = J("g", {
        "class": "blocklyWorkspace"
    }, null);
    b && (a.h = J("rect", {
        height: "100%",
        width: "100%",
        "class": b
    }, a.o), "blocklyMainBackground" == b && (a.h.style.fill = "url(#" + a.options.j.id + ")"));
    a.Pa = J("g", {
        "class": "blocklyBlockCanvas"
    }, a.o);
    a.g = J("g", {
        "class": "blocklyBubbleCanvas"
    }, a.o);
    var c = P;
    a.options.ma && (c = ki(a, c));
    a.options.g && a.options.g.controls && (c = li(a, c));
    M(a.o, "mousedown", a, a.Ad);
    M(a.o, "touchstart", null, function(b) {
        mi(b, a)
    });
    a.options.g && a.options.g.Ol && M(a.o, "wheel", a, a.Bl);
    a.options.N ?
        a.W = new ni(a) : a.options.rd && oi(a);
    pi(a);
    return a.o
}
g.C = function() {
    this.P = !1;
    ii.w.C.call(this);
    this.o && (y(this.o), this.o = null);
    this.g = this.Pa = null;
    this.W && (this.W.C(), this.W = null);
    this.R && (this.R.C(), this.R = null);
    this.fb && (this.fb.C(), this.fb = null);
    this.Da && (this.Da.C(), this.Da = null);
    this.u && (this.u.C(), this.u = null);
    this.options.Kb || y(Uh(this))
};
g.Zd = function(a, b) {
    return new qi(this, a, b)
};

function ki(a, b) {
    a.fb = new Gh(a);
    var c = a.fb;
    c.o = J("g", {
        "class": "blocklyTrash"
    }, null);
    var d = String(Math.random()).substring(2),
        e = J("clipPath", {
            id: "blocklyTrashBodyClipPath" + d
        }, c.o);
    J("rect", {
        width: 47,
        height: 44,
        y: 16
    }, e);
    J("image", {
        width: ci,
        x: -0,
        height: di,
        y: -32,
        "clip-path": "url(#blocklyTrashBodyClipPath" + d + ")"
    }, c.o).setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.m.options.Lb + ei);
    e = J("clipPath", {
        id: "blocklyTrashLidClipPath" + d
    }, c.o);
    J("rect", {
        width: 47,
        height: 16
    }, e);
    c.df = J("image", {
        width: ci,
        x: -0,
        height: di,
        y: -32,
        "clip-path": "url(#blocklyTrashLidClipPath" + d + ")"
    }, c.o);
    c.df.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", c.m.options.Lb + ei);
    M(c.o, "mouseup", c, c.Sh);
    c.vf();
    a.o.insertBefore(c.o, a.Pa);
    return a.fb.G(b)
}

function li(a, b) {
    a.u = new ai(a);
    var c = bi(a.u);
    a.o.appendChild(c);
    return a.u.G(b)
}

function oi(a) {
    a.R = new ri({
        Kd: a.options.Kd,
        Kb: a,
        s: a.s,
        mc: a.mc,
        ea: a.options.ea
    });
    a.R.Hd = !1;
    var b = si(a.R);
    a.o.insertBefore(b, a.Pa)
}

function jh(a) {
    a.Da && a.Da.resize()
}
g.resize = function() {
    this.W && this.W.position();
    this.R && this.R.position();
    this.fb && this.fb.position();
    this.u && this.u.position();
    this.Da && this.Da.resize()
};

function Uh(a) {
    if (a.ma) return a.ma;
    for (var b = a.o; b;) {
        if ("svg" == b.tagName) return a.ma = b;
        b = b.parentNode
    }
    return null
}
g.translate = function(a, b) {
    var c = "translate(" + a + "," + b + ") scale(" + this.scale + ")";
    this.Pa.setAttribute("transform", c);
    this.g.setAttribute("transform", c)
};
g.Hb = function() {
    var a = this.Ca();
    return a ? a.aa / this.scale : 0
};
g.$ = function(a) {
    Uh(this).style.display = a ? "block" : "none";
    this.W && (this.W.cc.style.display = a ? "block" : "none");
    a ? (this.V(), this.W && this.W.position()) : Dh(!0)
};
g.V = function() {
    for (var a = this.Nc(), b = a.length - 1; 0 <= b; b--) a[b].V(!1)
};

function ti(a, b) {
    a.pg = b;
    a.ga && (N(a.ga), a.ga = null);
    b && (a.ga = M(a.Pa, "blocklySelectChange", a, function() {
        this.pg = !1
    }))
}

function ui(a) {
    var b = vi;
    b.pg && 0 != I && ti(b, !1);
    if (b.pg) {
        var c = null;
        if (a && (c = b.Rb[a] || null, !c)) return;
        ti(b, !1);
        c ? c.select() : Q && wi(Q);
        setTimeout(function() {
            ti(b, !0)
        }, 1)
    }
}

function xi(a) {
    var b = yi;
    if (a.P && !(b.getElementsByTagName("block").length >= Tg(a))) {
        zi();
        G++;
        var c = ze(b, a),
            d = parseInt(b.getAttribute("x"), 10),
            b = parseInt(b.getAttribute("y"), 10);
        if (!isNaN(d) && !isNaN(b)) {
            a.s && (d = -d);
            do {
                for (var e = !1, f = a.Nc(), k = 0, l; l = f[k]; k++)
                    if (l = l.oa(), 1 >= Math.abs(d - l.x) && 1 >= Math.abs(b - l.y)) {
                        e = !0;
                        break
                    }
                if (!e)
                    for (f = c.Vb(!1), k = 0; l = f[k]; k++)
                        if ($h(l.Id, l, Fe, new w(d, b)).J) {
                            e = !0;
                            break
                        }
                e && (d = a.s ? d - Fe : d + Fe, b += 2 * Fe)
            } while (e);
            c.moveBy(d, b)
        }
        G--;
        0 == G && !c.i && H(new Mg(c));
        c.select()
    }
}

function Ai(a, b) {
    var c = new w(b.clientX, b.clientY);
    if (a.T) {
        if (a.T.contains(c)) return Hh(a.fb, !0), Ah(Bi), !0;
        Hh(a.fb, !1)
    }
    if (a.H && a.H.contains(c)) return Ah(Bi), !0;
    Ah(Bh);
    return !1
}
g.Ad = function(a) {
    this.sd();
    zh(a) || (zi(), Dh(), a.target && a.target.nodeName && ("svg" == a.target.nodeName.toLowerCase() || a.target == this.h) && Q && !this.options.i && wi(Q), yh(a) ? Ci(this, a) : this.Da && (this.Wf = !0, this.Qa = a.clientX, this.Ra = a.clientY, this.La = this.Ca(), this.ng = this.scrollX, this.og = this.scrollY, "mouseup" in Di && (Ei = Ei || [], Ei = Ei.concat(M(document, "mouseup", null, Fi))), ae = ae || [], ae = ae.concat(M(document, "mousemove", null, Gi))), a.stopPropagation(), a.preventDefault())
};

function Ch(a, b, c) {
    b = Th(b, Uh(a));
    b.x /= a.scale;
    b.y /= a.scale;
    a.jh = hc(c, b)
}

function Eh(a, b) {
    var c = Th(b, Uh(a));
    c.x /= a.scale;
    c.y /= a.scale;
    var d = a.jh;
    return new w(d.x + c.x, d.y + c.y)
}
g.Bl = function(a) {
    zi();
    var b = 0 < a.deltaY ? -1 : 1,
        c = Th(a, Uh(this));
    Hi(this, c.x, c.y, b);
    a.preventDefault()
};
g.Lk = function() {
    F(!0);
    for (var a = Rg(this, !0), b = 0, c = 0, d; d = a[c]; c++) {
        var e = d.oa();
        d.moveBy(-e.x, b - e.y);
        Ii(d);
        b = d.oa().y + Ji(d).height + 25
    }
    F(!1);
    jh(this)
};

function Ci(a, b) {
    function c(a) {
        if ($g(a)) z = z.concat(a.bb());
        else {
            a = a.Oc();
            for (var b = 0; b < a.length; b++) c(a[b])
        }
    }

    function d() {
        F(k);
        var a = z.shift();
        a && (a.A ? (a.C(!1, !0), setTimeout(d, 10)) : d());
        F(!1)
    }
    if (!a.options.i && !a.Vf) {
        var e = [],
            f = Rg(a, !0),
            k = Og(),
            l = {};
        l.text = R.Fk;
        l.enabled = 0 < a.j.length;
        l.$a = a.qg.bind(a, !1);
        e.push(l);
        l = {};
        l.text = R.Ck;
        l.enabled = 0 < a.F.length;
        l.$a = a.qg.bind(a, !0);
        e.push(l);
        a.Da && (l = {}, l.text = R.Uh, l.enabled = 1 < f.length, l.$a = a.Lk.bind(a), e.push(l));
        if (a.options.u) {
            for (var n = l = !1, m = 0; m < f.length; m++)
                for (var q =
                        f[m]; q;) q.j ? l = !0 : n = !0, q = he(q);
            var r = function(a) {
                    for (var b = 0, c = 0; c < f.length; c++)
                        for (var d = f[c]; d;) setTimeout(d.Yc.bind(d, a), b), d = he(d), b += 10
                },
                n = {
                    enabled: n
                };
            n.text = R.Vh;
            n.$a = function() {
                r(!0)
            };
            e.push(n);
            l = {
                enabled: l
            };
            l.text = R.li;
            l.$a = function() {
                r(!1)
            };
            e.push(l)
        }
        for (var z = [], m = 0; m < f.length; m++) c(f[m]);
        l = {
            text: 1 == z.length ? R.vg : R.wg.replace("%1", String(z.length)),
            enabled: 0 < z.length,
            $a: function() {
                (2 > z.length || window.confirm(R.gi.replace("%1", String(z.length)))) && d()
            }
        };
        e.push(l);
        Hg.show(b, e, a.s)
    }
}

function Ki(a, b, c) {
    if (b.length) {
        try {
            var d = new window.Audio
        } catch (n) {
            return
        }
        for (var e, f = 0; f < b.length; f++) {
            var k = b[f],
                l = k.match(/\.(\w+)$/);
            if (l && d.canPlayType("audio/" + l[1])) {
                e = new window.Audio(k);
                break
            }
        }
        e && e.play && (a.I[c] = e)
    }
}

function Li(a, b, c) {
    var d = a.I[b];
    d ? (b = new Date, b - a.xh < Mi || (a.xh = b, a = Wb && 9 === Wb || Nb || Lb ? d : d.cloneNode(), a.volume = void 0 === c ? 1 : c, a.play())) : a.options.Kb && Li(a.options.Kb, b, c)
}
g.sd = function() {
    this.options.Kb ? this.options.Kb.sd() : Ni = this
};

function Hi(a, b, c, d) {
    var e = a.options.g.Gl,
        f = a.Ca(),
        k = Uh(a).createSVGPoint();
    k.x = b;
    k.y = c;
    k = k.matrixTransform(a.Pa.getCTM().inverse());
    b = k.x;
    c = k.y;
    k = a.Pa;
    e = 1 == d ? e : 1 / e;
    d = a.scale * e;
    d > a.options.g.Xd ? e = a.options.g.Xd / a.scale : d < a.options.g.Yd && (e = a.options.g.Yd / a.scale);
    a.scale != d && (a.Da && (b = k.getCTM().translate(b * (1 - e), c * (1 - e)).scale(e), a.scrollX = b.e - f.Ha, a.scrollY = b.f - f.Na), fi(a, d))
}

function gi(a, b) {
    var c = a.Ca();
    Hi(a, c.aa / 2, c.ya / 2, b)
}

function fi(a, b) {
    a.options.g.Xd && b > a.options.g.Xd ? b = a.options.g.Xd : a.options.g.Yd && b < a.options.g.Yd && (b = a.options.g.Yd);
    a.scale = b;
    pi(a);
    a.Da ? a.Da.resize() : a.translate(a.scrollX, a.scrollY);
    Dh(!1);
    a.R && a.R.eg()
}

function pi(a) {
    if (a.options.j) {
        var b = a.options.h.spacing * a.scale || 100;
        a.options.j.setAttribute("width", b);
        a.options.j.setAttribute("height", b);
        var b = Math.floor(a.options.h.spacing / 2) + .5,
            c = b - a.options.h.length / 2,
            d = b + a.options.h.length / 2,
            e = a.options.j.firstChild,
            f = e && e.nextSibling,
            b = b * a.scale,
            c = c * a.scale,
            d = d * a.scale;
        e && (e.setAttribute("stroke-width", a.scale), e.setAttribute("x1", c), e.setAttribute("y1", b), e.setAttribute("x2", d), e.setAttribute("y2", b));
        f && (f.setAttribute("stroke-width", a.scale), f.setAttribute("x1",
            b), f.setAttribute("y1", c), f.setAttribute("x2", b), f.setAttribute("y2", d))
    }
}
ii.prototype.setVisible = ii.prototype.$;
// Copyright 2013 Google Inc.  Apache License 2.0
function Oi(a) {
    this.O = a
}
g = Oi.prototype;
g.Pg = !0;
g.Aa = null;
g.Sc = null;

function Pi(a) {
    a.g || (a.g = J("g", {
        "class": "blocklyIconGroup"
    }, null), a.Gf(a.g), a.O.o.appendChild(a.g), M(a.g, "mouseup", a, a.Sf), a.pc())
}
g.C = function() {
    y(this.g);
    this.g = null;
    this.$(!1);
    this.O = null
};
g.pc = function() {
    this.O.F || !ah(this.O) ? Ig(this.g, "blocklyIconGroupReadonly") : Qi(this.g, "blocklyIconGroupReadonly")
};
g.Z = function() {
    return !!this.Aa
};
g.Sf = function(a) {
    2 != I && (this.O.F || yh(a) || this.$(!this.Z()))
};
g.nc = function() {
    if (this.Z()) {
        var a = this.Aa,
            b = this.O.Tb;
        a.i.setAttribute("fill", b);
        a.j.setAttribute("fill", b)
    }
};

function Ri(a) {
    var b = a.O.oa(),
        c = Le(a.g),
        b = new w(b.x + c.x + 8.5, b.y + c.y + 8.5);
    fc(a.Sc, b) || (a.Sc = b, a.Z() && (a = a.Aa, a.Jc = b, a.ae && qh(a)))
};

function Si(a) {
    Si.w.constructor.call(this, null);
    this.u = a
}
t(Si, Oi);
g = Si.prototype;
g.zd = 0;
g.ge = 0;
g.Gf = function(a) {
    J("rect", {
        "class": "blocklyIconShape",
        rx: "4",
        ry: "4",
        height: "16",
        width: "16"
    }, a);
    J("path", {
        "class": "blocklyIconSymbol",
        d: "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z"
    }, a);
    J("circle", {
        "class": "blocklyIconShape",
        r: "2.7",
        cx: "8",
        cy: "8"
    }, a)
};
g.Sf = function(a) {
    ah(this.O) && Oi.prototype.Sf.call(this, a)
};

function Ti(a) {
    a.i = J("svg", {
        x: rh,
        y: rh
    }, null);
    if (a.u.length)
        for (var b = x("xml"), c = 0, d; d = a.u[c]; c++) b.appendChild(x("block", {
            type: d
        }));
    else b = null;
    a.m = new ii({
        rd: b,
        Kb: a.O.A,
        Lb: a.O.A.options.Lb,
        s: a.O.s,
        ea: a.O.s ? 3 : 2,
        mc: !1,
        Ca: a.Xk.bind(a),
        Ec: null
    });
    a.i.appendChild(ji(a.m, "blocklyMutatorBackground"));
    return a.i
}
g.pc = function() {
    ah(this.O) ? Oi.prototype.pc.call(this) : (this.$(!1), this.g && Ig(this.g, "blocklyIconGroupReadonly"))
};

function Ui(a) {
    var b = 2 * rh,
        c = a.m.Pa.getBBox(),
        d;
    a.O.s ? d = -c.x : d = c.width + c.x;
    c = c.height + 3 * b;
    if (a.m.R) var e = a.m.R.Nd(),
        c = Math.max(c, e.Ua + 20);
    d += 3 * b;
    if (Math.abs(a.zd - d) > b || Math.abs(a.ge - c) > b) a.zd = d, a.ge = c, sh(a.Aa, d + b, c + b), a.i.setAttribute("width", a.zd), a.i.setAttribute("height", a.ge);
    a.O.s && a.m.Pa.setAttribute("transform", "translate(" + a.zd + ",0)");
    a.m.resize()
}
g.$ = function(a) {
    if (a != this.Z())
        if (H(new Vi(this.O, "mutatorOpen", 0, a)), a) {
            this.Aa = new nh(this.O.A, Ti(this), this.O.K, this.Sc, null, null);
            if (a = this.m.options.rd) this.m.R.G(this.m), this.m.R.show(a.childNodes);
            this.h = this.O.Dg(this.m);
            a = this.h.bb();
            for (var b = 0, c; c = a[b]; b++) c.V();
            this.h.$e(!1);
            this.h.Jd = !1;
            this.m.R ? (a = 2 * this.m.R.U, b = this.m.R.Y + a) : b = a = 16;
            this.O.s && (b = -b);
            this.h.moveBy(b, a);
            if (this.O.ec) {
                var d = this;
                this.O.ec(this.h);
                this.j = function() {
                    d.O.ec(d.h)
                };
                this.O.A.Qb(this.j)
            }
            Ui(this);
            this.m.Qb(this.Ql.bind(this));
            this.nc()
        } else this.i = null, this.m.C(), this.h = this.m = null, this.Aa.C(), this.Aa = null, this.ge = this.zd = 0, this.j && (this.O.A.vd(this.j), this.j = null)
};
g.Ql = function() {
    if (0 == I)
        for (var a = Rg(this.m, !1), b = 0, c; c = a[b]; b++) {
            var d = c.oa(),
                e = Ji(c);
            20 > d.y + e.height && c.moveBy(0, 20 - e.height - d.y)
        }
    if (this.h.A == this.m) {
        F(!0);
        c = this.O;
        a = (a = c.T()) && bh(a);
        b = c.P;
        c.P = !1;
        c.qe(this.h);
        c.P = b;
        c.zc();
        b = (b = c.T()) && bh(b);
        if (a != b) {
            H(new Wi(c, "mutation", null, a, b));
            var f = ke;
            setTimeout(function() {
                F(f);
                Ce(c);
                F(!1)
            }, me)
        }
        c.P && c.V();
        Ui(this);
        F(!1)
    }
};
g.Xk = function() {
    return {
        ya: this.ge,
        aa: this.zd,
        Na: 0,
        Ha: 0
    }
};
g.C = function() {
    this.O.Ib = null;
    Oi.prototype.C.call(this)
};

function Xi(a, b, c) {
    if (!a || !a.v.A) return !1;
    c = mh(b, c).J;
    var d = E(a);
    return d && d != b || c.M == a ? !1 : (c.M && ee(c), c.connect(a), !0)
}
h.Blockly || (h.Blockly = {});
h.Blockly.Mutator || (h.Blockly.Mutator = {});
h.Blockly.Mutator.reconnect = Xi;
var S = {};

function Yi(a) {
    Yi.w.constructor.call(this, a);
    Pi(this)
}
t(Yi, Oi);
g = Yi.prototype;
g.qa = "";
g.Y = 160;
g.ff = 80;
g.Gf = function(a) {
    J("circle", {
        "class": "blocklyIconShape",
        r: "8",
        cx: "8",
        cy: "8"
    }, a);
    J("path", {
        "class": "blocklyIconSymbol",
        d: "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.405 0.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25 -1.201,0.998 -1.201,1.528 -1.204,2.19z"
    }, a);
    J("rect", {
        "class": "blocklyIconSymbol",
        x: "6.8",
        y: "10.78",
        height: "2",
        width: "2"
    }, a)
};

function Zi(a) {
    a.i = J("foreignObject", {
        x: rh,
        y: rh
    }, null);
    var b = document.createElementNS("http://www.w3.org/1999/xhtml", "body");
    b.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
    b.className = "blocklyMinimalBody";
    var c = document.createElementNS("http://www.w3.org/1999/xhtml", "textarea");
    c.className = "blocklyCommentTextarea";
    c.setAttribute("dir", a.O.s ? "RTL" : "LTR");
    b.appendChild(c);
    a.h = c;
    a.i.appendChild(b);
    M(c, "mouseup", a, a.Nl);
    M(c, "wheel", a, function(a) {
        a.stopPropagation()
    });
    M(c, "change", a, function() {
        this.qa !=
            c.value && (H(new Wi(this.O, "comment", null, this.qa, c.value)), this.qa = c.value)
    });
    setTimeout(function() {
        c.focus()
    }, 0);
    return a.i
}
g.pc = function() {
    this.Z() && (this.$(!1), this.$(!0));
    Oi.prototype.pc.call(this)
};
g.Nh = function() {
    if (this.Z()) {
        var a = Fh(this.Aa),
            b = 2 * rh;
        this.i.setAttribute("width", a.width - b);
        this.i.setAttribute("height", a.height - b);
        this.h.style.width = a.width - b - 4 + "px";
        this.h.style.height = a.height - b - 4 + "px"
    }
};
g.$ = function(a) {
    if (a != this.Z())
        if (H(new Vi(this.O, "commentOpen", 0, a)), !ah(this.O) && !this.h || u) $i.prototype.$.call(this, a);
        else {
            var b = this.h ? this.h.value : this.qa,
                c = Yg(this);
            a ? (this.Aa = new nh(this.O.A, Zi(this), this.O.K, this.Sc, this.Y, this.ff), this.Aa.fg = this.Nh.bind(this), this.nc()) : (this.Aa.C(), this.i = this.h = this.Aa = null);
            aj(this, b);
            kh(this, c.width, c.height)
        }
};
g.Nl = function() {
    xh(this.Aa);
    this.h.focus()
};

function Yg(a) {
    return a.Z() ? Fh(a.Aa) : {
        width: a.Y,
        height: a.ff
    }
}

function kh(a, b, c) {
    a.h ? sh(a.Aa, b, c) : (a.Y = b, a.ff = c)
}

function aj(a, b) {
    a.qa != b && (H(new Wi(a.O, "comment", null, a.qa, b)), a.qa = b);
    a.h && (a.h.value = b)
}
g.C = function() {
    0 == G && aj(this, "");
    this.O.wa = null;
    Oi.prototype.C.call(this)
};
var bj = !1,
    cj = 0,
    dj = 0,
    ej = 0,
    fj = 0,
    gj = null,
    hj = null,
    ij = null;

function jj(a) {
    M(a, "mouseover", null, kj);
    M(a, "mouseout", null, lj);
    M(a, "mousemove", null, mj)
}

function kj(a) {
    for (a = a.target; !p(a.Fa) && !ga(a.Fa);) a = a.Fa;
    gj != a && (nj(), hj = null, gj = a);
    clearTimeout(cj)
}

function lj() {
    cj = setTimeout(function() {
        hj = gj = null;
        nj()
    }, 1);
    clearTimeout(dj)
}

function mj(a) {
    if (gj && gj.Fa && 0 == I && !oj)
        if (bj) {
            var b = ej - a.pageX;
            a = fj - a.pageY;
            10 < Math.sqrt(b * b + a * a) && nj()
        } else hj != gj && (clearTimeout(dj), ej = a.pageX, fj = a.pageY, dj = setTimeout(pj, 750))
}

function nj() {
    bj && (bj = !1, ij && (ij.style.display = "none"));
    clearTimeout(dj)
}

function pj() {
    hj = gj;
    if (ij) {
        tc(ij);
        for (var a = gj.Fa; ga(a);) a = a();
        var b = a,
            a = 50;
        if (b.length <= a) a = b;
        else {
            for (var c = b.trim().split(/\s+/), d = 0; d < c.length; d++) c[d].length > a && (a = c[d].length);
            var e, d = -Infinity,
                f, k = 1;
            do {
                e = d;
                f = b;
                for (var b = [], l = c.length / k, n = 1, d = 0; d < c.length - 1; d++) n < (d + 1.5) / l ? (n++, b[d] = !0) : b[d] = !1;
                for (var b = qj(c, b, a), d = rj(c, b, a), l = c, n = [], m = 0; m < l.length; m++) n.push(l[m]), void 0 !== b[m] && n.push(b[m] ? "\n" : " ");
                b = n.join("");
                k++
            } while (d > e);
            a = f
        }
        a = a.split("\n");
        for (c = 0; c < a.length; c++) e = document.createElement("div"),
            e.appendChild(document.createTextNode(a[c])), ij.appendChild(e);
        a = gj.s;
        c = oc();
        ij.style.direction = a ? "rtl" : "ltr";
        ij.style.display = "block";
        bj = !0;
        e = ej;
        e = a ? e - (0 + ij.offsetWidth) : e + 0;
        f = fj + 10;
        f + ij.offsetHeight > c.height + window.scrollY && (f -= ij.offsetHeight + 20);
        a ? e = Math.max(5 - window.scrollX, e) : e + ij.offsetWidth > c.width + window.scrollX - 10 && (e = c.width - ij.offsetWidth - 10);
        ij.style.top = f + "px";
        ij.style.left = e + "px"
    }
}

function rj(a, b, c) {
    for (var d = [0], e = [], f = 0; f < a.length; f++) d[d.length - 1] += a[f].length, !0 === b[f] ? (d.push(0), e.push(a[f].charAt(a[f].length - 1))) : !1 === b[f] && d[d.length - 1]++;
    a = Math.max.apply(Math, d);
    for (f = b = 0; f < d.length; f++) b -= 2 * Math.pow(Math.abs(c - d[f]), 1.5), b -= Math.pow(a - d[f], 1.5), -1 != ".?!".indexOf(e[f]) ? b += c / 3 : -1 != ",;)]}".indexOf(e[f]) && (b += c / 4);
    1 < d.length && d[d.length - 1] <= d[d.length - 2] && (b += .5);
    return b
}

function qj(a, b, c) {
    for (var d = rj(a, b, c), e, f = 0; f < b.length - 1; f++)
        if (b[f] != b[f + 1]) {
            var k = [].concat(b);
            k[f] = !k[f];
            k[f + 1] = !k[f + 1];
            var l = rj(a, k, c);
            l > d && (d = l, e = k)
        }
    return e ? qj(a, e, c) : b
};

function sj(a, b) {
    this.u = new Xb(0, 25);
    this.va(a);
    this.ee(b)
}
var tj = null,
    uj = 0;
g = sj.prototype;
g.name = void 0;
g.qa = "";
g.v = null;
g.Ic = !0;
g.Xa = null;
g.cd = !0;
g.G = function() {
    this.g || (this.g = J("g", {}, null), this.Ic || (this.g.style.display = "none"), this.j = J("rect", {
        rx: 4,
        ry: 4,
        x: -5,
        y: 0,
        height: 16
    }, this.g), this.h = J("text", {
        "class": "blocklyText",
        y: this.u.height - 12.5
    }, this.g), this.pc(), this.v.o.appendChild(this.g), this.H = M(this.g, "mouseup", this, this.Oh), vj(this), 0 == G && H(new Wi(this.v, "field", this.name, "", this.Wa())))
};
g.C = function() {
    this.H && (N(this.H), this.H = null);
    this.v = null;
    y(this.g);
    this.Xa = this.j = this.h = this.g = null
};
g.pc = function() {
    this.cd && this.v && (ah(this.v) ? (Ig(this.g, "blocklyEditableText"), Qi(this.g, "blocklyNoNEditableText"), this.g.style.cursor = this.oe) : (Ig(this.g, "blocklyNonEditableText"), Qi(this.g, "blocklyEditableText"), this.g.style.cursor = ""))
};
g.Z = function() {
    return this.Ic
};
g.$ = function(a) {
    if (this.Ic != a) {
        this.Ic = a;
        var b = this.gf();
        b && (b.style.display = a ? "block" : "none", this.hf())
    }
};
g.ee = function(a) {
    this.Xa = a
};
g.gf = function() {
    return this.g
};
g.hf = function() {
    if (this.Ic && this.h) {
        var a = this.h.textContent + "\n" + this.h.className.baseVal;
        if (tj && tj[a]) var b = tj[a];
        else {
            try {
                b = this.h.getComputedTextLength()
            } catch (c) {
                b = 8 * this.h.textContent.length
            }
            tj && (tj[a] = b)
        }
        this.j && this.j.setAttribute("width", b + 10)
    } else b = 0;
    this.u.width = b
};

function fh() {
    uj++;
    tj || (tj = {})
}

function gh() {
    uj--;
    uj || (tj = null)
}

function wj(a) {
    var b = a.j.getBBox();
    return new Xb(b.width * a.v.A.scale, b.height * a.v.A.scale)
}
g.Hc = function() {
    return this.qa
};
g.Eb = function(a) {
    null !== a && (a = String(a), a !== this.qa && (this.qa = a, vj(this), this.v && this.v.P && (this.v.V(), Ce(this.v))))
};

function vj(a) {
    if (a.h) {
        var b = a.qa;
        50 < b.length && (b = b.substring(0, 48) + "\u2026");
        tc(a.h);
        b = b.replace(/\s/g, "\u00a0");
        a.v.s && b && (b += "\u200f");
        b || (b = "\u00a0");
        a.h.appendChild(document.createTextNode(b));
        a.u.width = 0
    }
}
g.Wa = function() {
    return this.Hc()
};
g.va = function(a) {
    if (null !== a) {
        var b = this.Wa();
        b != a && (this.v && 0 == G && H(new Wi(this.v, "field", this.name, b, a)), this.Eb(a))
    }
};
g.Oh = function(a) {
    if (!Mb && !Nb || Ub("537.51.2") || 0 === a.layerX || 0 === a.layerY) yh(a) || 2 != I && ah(this.v) && this.$c()
};

function xj(a, b) {
    this.u = new Xb(0, 17.5);
    this.i = b;
    this.va(a)
}
t(xj, sj);
xj.prototype.cd = !1;
xj.prototype.G = function() {
    this.h || (this.h = J("text", {
        "class": "blocklyText",
        y: this.u.height - 5
    }, null), this.i && Ig(this.h, this.i), this.Ic || (this.h.style.display = "none"), this.v.o.appendChild(this.h), this.h.Fa = this.v, jj(this.h), vj(this))
};
xj.prototype.C = function() {
    y(this.h);
    this.h = null
};
xj.prototype.gf = function() {
    return this.h
};

function yj(a, b, c, d) {
    this.type = a;
    this.name = b;
    this.v = c;
    this.J = d;
    this.Ba = []
}
g = yj.prototype;
g.align = -1;
g.jf = !0;

function T(a, b, c) {
    if (!b && !c) return a;
    p(b) && (b = new xj(b));
    b.v = a.v;
    a.v.P && b.G();
    b.name = c;
    b.K && T(a, b.K);
    a.Ba.push(b);
    b.N && T(a, b.N);
    a.v.P && (a.v.V(), Ce(a.v));
    return a
}
g.Z = function() {
    return this.jf
};
g.$ = function(a) {
    var b = [];
    if (this.jf == a) return b;
    for (var c = (this.jf = a) ? "block" : "none", d = 0, e; e = this.Ba[d]; d++) e.$(a);
    if (this.J) {
        if (a) b = Ne(this.J);
        else if (d = this.J, Oe(d, !0), d.M)
            for (d = E(d).bb(), e = 0; e < d.length; e++) {
                for (var f = d[e], k = f.Vb(!0), l = 0; l < k.length; l++) Oe(k[l], !0);
                f = zj(f);
                for (k = 0; k < f.length; k++) f[k].$(!1)
            }
        if (d = E(this.J)) d.o.style.display = c, a || (d.P = !1)
    }
    return b
};

function Aj(a, b) {
    if (!a.J) throw "This input does not have a connection.";
    Ae(a.J, b);
    return a
}
g.G = function() {
    if (this.v.A.P)
        for (var a = 0; a < this.Ba.length; a++) this.Ba[a].G()
};
g.C = function() {
    for (var a = 0, b; b = this.Ba[a]; a++) b.C();
    this.J && this.J.C();
    this.v = null
};

function $i(a) {
    $i.w.constructor.call(this, a);
    Pi(this);
    this.qa = {}
}
t($i, Oi);
$i.prototype.Pg = !1;
$i.prototype.Gf = function(a) {
    J("path", {
        "class": "blocklyIconShape",
        d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z"
    }, a);
    J("path", {
        "class": "blocklyIconSymbol",
        d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z"
    }, a);
    J("rect", {
        "class": "blocklyIconSymbol",
        x: "7",
        y: "11",
        height: "2",
        width: "2"
    }, a)
};
$i.prototype.$ = function(a) {
    if (a != this.Z())
        if (H(new Vi(this.O, "warningOpen", 0, a)), a) {
            var b = Bj(this);
            a = J("text", {
                "class": "blocklyText blocklyBubbleText",
                y: rh
            }, null);
            for (var b = b.split("\n"), c = 0; c < b.length; c++) J("tspan", {
                dy: "1em",
                x: rh
            }, a).appendChild(document.createTextNode(b[c]));
            this.Aa = new nh(this.O.A, a, this.O.K, this.Sc, null, null);
            if (this.O.s)
                for (var b = a.getBBox().width, c = 0, d; d = a.childNodes[c]; c++) d.setAttribute("text-anchor", "end"), d.setAttribute("x", b + rh);
            this.nc();
            a = Fh(this.Aa);
            sh(this.Aa, a.width,
                a.height)
        } else this.Aa.C(), this.Aa = null
};

function Cj(a, b, c) {
    a.qa[c] != b && (b ? a.qa[c] = b : delete a.qa[c], a.Z() && (a.$(!1), a.$(!0)))
}

function Bj(a) {
    var b = [],
        c;
    for (c in a.qa) b.push(a.qa[c]);
    return b.join("\n")
}
$i.prototype.C = function() {
    this.O.rb = null;
    Oi.prototype.C.call(this)
};

function Sg(a, b, c) {
    this.id = c && !a.Rb[c] ? c : Og();
    a.Rb[this.id] = this;
    this.S = this.g = this.L = null;
    this.h = [];
    this.N = void 0;
    this.disabled = !1;
    this.Fa = "";
    this.Qa = !0;
    this.H = null;
    this.I = [];
    this.dd = this.Cd = this.Jd = !0;
    this.j = this.i = !1;
    this.wa = null;
    this.Fd = new w(0, 0);
    this.A = a;
    this.F = a.Vf;
    this.s = a.s;
    if (b) {
        this.type = b;
        b = S[b];
        for (var d in b) this[d] = b[d]
    }
    a.i.push(this);
    ga(this.G) && this.G();
    this.rg = this.N;
    0 == G && H(new Mg(this));
    ga(this.onchange) && (this.dc = this.onchange.bind(this), this.A.Qb(this.dc))
}
g = Sg.prototype;
g.data = null;
g.Tb = "#000000";
g.C = function(a) {
    this.dc && this.A.vd(this.dc);
    Be(this, a);
    0 == G && H(new Dj(this));
    G++;
    this.A && (Qg(this.A, this), delete this.A.Rb[this.id], this.A = null);
    for (a = this.I.length - 1; 0 <= a; a--) this.I[a].C(!1);
    a = 0;
    for (var b; b = this.h[a]; a++) b.C();
    this.h.length = 0;
    b = this.Vb(!0);
    for (a = 0; a < b.length; a++) {
        var c = b[a];
        c.M && ee(c);
        b[a].C()
    }
    G--
};

function Be(a, b) {
    if (a.L) a.L.M && ee(a.L);
    else if (a.S) {
        var c = null;
        a.S.M && (c = a.S.M, ee(a.S));
        var d = he(a);
        b && d && (d = a.g.M, ee(d), c && ie(c, d) && c.connect(d))
    }
}
g.Vb = function() {
    var a = [];
    this.L && a.push(this.L);
    this.S && a.push(this.S);
    this.g && a.push(this.g);
    for (var b = 0, c; c = this.h[b]; b++) c.J && a.push(c.J);
    return a
};

function Ce(a) {
    if (a.A && 0 == I) {
        var b = Ee(a);
        if (!b.F) {
            a = a.Vb(!1);
            for (var c = 0, d; d = a[c]; c++) {
                d.M && te(d) && Ce(E(d));
                var e;
                e = Zh(d.Id, d);
                for (var f = 0, k; k = e[f]; f++) d.M && k.M || Ee(k.v) != b && (te(d) ? le(k, d) : le(d, k))
            }
        }
    }
}
g.getParent = function() {
    return this.H
};

function Ej(a) {
    do {
        var b = a;
        a = a.getParent();
        if (!a) return null
    } while (he(a) == b);
    return a
}

function he(a) {
    return a.g && E(a.g)
}

function Ee(a) {
    var b = a;
    do a = b, b = a.H; while (b);
    return a
}
g.Oc = function() {
    return this.I
};
g.ke = function(a) {
    if (a != this.H) {
        if (this.H) {
            for (var b = this.H.I, c, d = 0; c = b[d]; d++)
                if (c == this) {
                    b.splice(d, 1);
                    break
                }
            if (this.S && this.S.M) throw "Still connected to previous block.";
            if (this.L && this.L.M) throw "Still connected to parent block.";
            this.H = null
        } else Qg(this.A, this);
        (this.H = a) ? a.I.push(this): this.A.i.push(this)
    }
};
g.bb = function() {
    for (var a = [this], b, c = 0; b = this.I[c]; c++) a.push.apply(a, b.bb());
    return a
};

function $g(a) {
    return a.Jd && !a.i && !(a.A && a.A.options.i)
}

function ve(a) {
    return a.Cd && !a.i && !(a.A && a.A.options.i)
}
g.$e = function(a) {
    this.Cd = a
};
g.lg = function(a) {
    this.i = a
};

function ah(a) {
    return a.dd && !(a.A && a.A.options.i)
}
g.jg = function(a) {
    this.dd = a;
    a = 0;
    for (var b; b = this.h[a]; a++)
        for (var c = 0, d; d = b.Ba[c]; c++) d.pc()
};

function ih(a, b) {
    if (!b && a.j) {
        if (a.L && Oe(a.L, b), a.S && Oe(a.S, b), a.g) {
            Oe(a.g, b);
            var c = E(a.g);
            c && ih(c, b)
        }
    } else
        for (var d = a.Vb(!0), e = 0; c = d[e]; e++) Oe(c, b), te(c) && (c = E(c)) && ih(c, b)
}

function Fj(a, b) {
    a.Fa = b
}
g.Ma = function(a) {
    var b = parseFloat(a);
    if (isNaN(b))
        if (p(a) && a.match(/^#[0-9a-fA-F]{6}$/)) this.Tb = a;
        else throw "Invalid colour: " + a;
    else this.Tb = Gj(Hj(b))
};

function lh(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        for (var e = 0, f; f = d.Ba[e]; e++)
            if (f.name === b) return f;
    return null
}

function U(a, b) {
    var c = lh(a, b);
    return c ? c.Wa() : null
}
g.Fc = function(a, b) {
    a ? (void 0 === b && (b = null), this.S || (this.S = this.Wd(4)), Ae(this.S, b)) : this.S && (this.S.C(), this.S = null)
};
g.Zc = function(a, b) {
    a ? (void 0 === b && (b = null), this.g || (this.g = this.Wd(3)), Ae(this.g, b)) : this.g && (this.g.C(), this.g = null)
};
g.Ob = function(a, b) {
    a ? (void 0 === b && (b = null), this.L || (this.L = this.Wd(2)), Ae(this.L, b)) : this.L && (this.L.C(), this.L = null)
};
g.Nb = function(a) {
    this.N != a && (H(new Wi(this, "inline", null, this.N, a)), this.N = a)
};

function Ij(a) {
    if (void 0 != a.N) return a.N;
    for (var b = 1; b < a.h.length; b++)
        if (5 == a.h[b - 1].type && 5 == a.h[b].type) return !1;
    for (b = 1; b < a.h.length; b++)
        if (1 == a.h[b - 1].type && 5 == a.h[b].type) return !0;
    return !1
}
g.xd = function(a) {
    this.disabled != a && (H(new Wi(this, "disabled", null, this.disabled, a)), this.disabled = a)
};

function Jj(a) {
    for (;;) {
        a = Ej(a);
        if (!a) return !1;
        if (a.disabled) return !0
    }
}
g.Yc = function(a) {
    this.j != a && (H(new Wi(this, "collapsed", null, this.j, a)), this.j = a)
};
g.toString = function(a) {
    var b = [];
    if (this.j) b.push(mh(this, "_TEMP_COLLAPSED_INPUT").Ba[0].qa);
    else
        for (var c = 0, d; d = this.h[c]; c++) {
            for (var e = 0, f; f = d.Ba[e]; e++) b.push(f.Hc());
            d.J && ((d = E(d.J)) ? b.push(d.toString()) : b.push("?"))
        }
    b = sa(b.join(" ")) || "???";
    a && b.length > a && (b = b.substring(0, a - 3) + "...");
    return b
};

function Kj(a, b) {
    return a.sa(5, b || "")
}

function Lj(a, b) {
    void 0 !== b.colour && a.Ma(b.colour);
    for (var c = 0; void 0 !== b["message" + c];) {
        var d = a,
            e = b["args" + c] || [],
            f = b["lastDummyAlign" + c],
            k, l = [],
            n = b["message" + c].split("");
        n.push("");
        k = 0;
        for (var m = [], q = null, r = 0; r < n.length; r++) {
            var z = n[r];
            0 == k ? "%" == z ? k = 1 : m.push(z) : 1 == k ? "%" == z ? (m.push(z), k = 0) : "0" <= z && "9" >= z ? (k = 2, q = z, (z = m.join("")) && l.push(z), m.length = 0) : (m.push("%", z), k = 0) : 2 == k && ("0" <= z && "9" >= z ? q += z : (l.push(parseInt(q, 10)), r--, k = 0))
        }(z = m.join("")) && l.push(z);
        k = l;
        m = 0;
        l = [];
        for (n = 0; n < k.length; n++) q = k[n],
            "number" == typeof q ? (m++, l.push(e[q - 1])) : (q = q.trim()) && l.push(q);
        !l.length || "string" != typeof l[l.length - 1] && 0 != l[l.length - 1].type.indexOf("field_") || (e = {
            type: "input_dummy"
        }, f && (e.align = f), l.push(e));
        f = {
            LEFT: -1,
            RIGHT: 1,
            CENTRE: 0
        };
        e = [];
        for (n = 0; n < l.length; n++)
            if (m = l[n], "string" == typeof m) e.push([m, void 0]);
            else {
                k = q = null;
                do switch (r = !1, m.type) {
                    case "input_value":
                        k = d.sa(1, m.name);
                        break;
                    case "input_statement":
                        k = d.sa(3, m.name);
                        break;
                    case "input_dummy":
                        k = Kj(d, m.name);
                        break;
                    case "field_label":
                        q = new xj(m.text,
                            m["class"]);
                        break;
                    case "field_input":
                        q = new Mj(m.text);
                        "boolean" == typeof m.spellcheck && (q.Hh = m.spellcheck);
                        break;
                    case "field_angle":
                        q = new Nj(m.angle);
                        break;
                    case "field_checkbox":
                        q = new Oj(m.checked ? "TRUE" : "FALSE");
                        break;
                    case "field_colour":
                        q = new Pj(m.colour);
                        break;
                    case "field_variable":
                        q = new Qj(m.variable);
                        break;
                    case "field_dropdown":
                        q = new Rj(m.options);
                        break;
                    case "field_image":
                        q = new Sj(m.src, m.width, m.height, m.alt);
                        break;
                    case "field_number":
                        q = new Tj(m.text);
                        break;
                    case "field_date":
                        if ($d.pf) {
                            q = new $d.pf(m.date);
                            break
                        }
                    default:
                        m.alt && (m = m.alt, r = !0)
                }
                while (r);
                if (q) e.push([q, m.name]);
                else if (k) {
                    m.check && Aj(k, m.check);
                    m.align && (q = k, q.align = f[m.align], q.v.P && q.v.V());
                    for (m = 0; m < e.length; m++) T(k, e[m][0], e[m][1]);
                    e.length = 0
                }
            }
        c++
    }
    void 0 !== b.inputsInline && a.Nb(b.inputsInline);
    void 0 !== b.output && a.Ob(!0, b.output);
    void 0 !== b.previousStatement && a.Fc(!0, b.previousStatement);
    void 0 !== b.nextStatement && a.Zc(!0, b.nextStatement);
    void 0 !== b.tooltip && (a.Fa = b.tooltip);
    void 0 !== b.helpUrl && (a.u = b.helpUrl)
}
g.sa = function(a, b) {
    var c = null;
    if (1 == a || 3 == a) c = this.Wd(a);
    c = new yj(a, b, this, c);
    this.h.push(c);
    return c
};
g.Xc = function(a) {
    for (var b = 0, c; c = this.h[b]; b++)
        if (c.name == a) {
            c.J && c.J.M && (c.J.Yb = null, a = E(c.J), a.i ? a.C() : Be(a));
            c.C();
            this.h.splice(b, 1);
            break
        }
};

function mh(a, b) {
    for (var c = 0, d; d = a.h[c]; c++)
        if (d.name == b) return d;
    return null
}

function Uj(a, b) {
    var c = mh(a, b);
    return c && c.J && E(c.J)
}
g.Fe = function() {
    return this.wa || ""
};
g.be = function(a) {
    this.wa != a && (H(new Wi(this, "comment", null, this.wa, a || "")), this.wa = a)
};
g.jb = function() {};
g.Gh = function() {};
g.oa = function() {
    return this.Fd
};
g.moveBy = function(a, b) {
    var c = new ne(this);
    this.Fd.translate(a, b);
    pe(c);
    H(c)
};
g.Wd = function(a) {
    return new ce(this, a)
};

function qi(a, b, c) {
    this.o = J("g", {}, null);
    this.La = J("path", {
        "class": "blocklyPathDark",
        transform: "translate(1,1)"
    }, this.o);
    this.K = J("path", {
        "class": "blocklyPath"
    }, this.o);
    this.ma = J("path", {
        "class": "blocklyPathLight"
    }, this.o);
    this.K.Fa = this;
    this.P = !1;
    jj(this.K);
    qi.w.constructor.call(this, a, b, c)
}
t(qi, Sg);
g = qi.prototype;
g.height = 0;
g.width = 0;
g.Ld = null;
g.zc = function() {
    for (var a = 0, b; b = this.h[a]; a++) b.G();
    b = zj(this);
    for (a = 0; a < b.length; a++) Pi(b[a]);
    this.nc();
    Vj(this);
    if (!this.A.options.i && !this.Eg) {
        M(this.o, "mousedown", this, this.Ad);
        var c = this;
        M(this.o, "touchstart", null, function(a) {
            mi(a, c)
        })
    }
    this.Eg = !0;
    this.o.parentNode || this.A.Pa.appendChild(this.o)
};
g.select = function() {
    if (this.i && this.getParent()) this.getParent().select();
    else if (Q != this) {
        Q && (G++, wi(Q), G--);
        var a = new Vi(null, "selected", 0, this.id);
        a.g = this.A.id;
        H(a);
        Q = this;
        this.sf()
    }
};

function wi(a) {
    if (Q == a) {
        var b = new Vi(null, "selected", 0, null);
        b.g = a.A.id;
        H(b);
        Q = null;
        a.Xe()
    }
}
g.Ib = null;
g.wa = null;
g.rb = null;

function zj(a) {
    var b = [];
    a.Ib && b.push(a.Ib);
    a.wa && b.push(a.wa);
    a.rb && b.push(a.rb);
    return b
}
var Wj = null,
    Xj = null;

function Yj() {
    Zj();
    Wj && (N(Wj), Wj = null);
    Xj && (N(Xj), Xj = null);
    var a = Q;
    if (2 == I && a) {
        var b = a.oa(),
            b = hc(b, a.Ld),
            c = new ne(a);
        c.H = a.Ld;
        pe(c);
        H(c);
        Me(a, b.x, b.y);
        delete a.Ra;
        ak(a, !1);
        a.V();
        var d = ke;
        setTimeout(function() {
            F(d);
            Ii(a);
            F(!1)
        }, me / 2);
        setTimeout(function() {
            F(d);
            Ce(a);
            F(!1)
        }, me);
        jh(a.A)
    }
    I = 0;
    Ah(bk)
}
g = qi.prototype;
g.ke = function(a) {
    if (a != this.H) {
        var b = this.o;
        if (this.H && b) {
            var c = this.oa();
            this.A.Pa.appendChild(b);
            b.setAttribute("transform", "translate(" + c.x + "," + c.y + ")")
        }
        fh();
        qi.w.ke.call(this, a);
        gh();
        a && (c = this.oa(), a.o.appendChild(b), a = this.oa(), Me(this, a.x - c.x, a.y - c.y))
    }
};
g.oa = function() {
    var a = 0,
        b = 0,
        c = this.o;
    if (c) {
        do var d = Le(c),
            a = a + d.x,
            b = b + d.y,
            c = c.parentNode; while (c && c != this.A.Pa)
    }
    return new w(a, b)
};
g.moveBy = function(a, b) {
    var c = new ne(this),
        d = this.oa();
    this.o.setAttribute("transform", "translate(" + (d.x + a) + "," + (d.y + b) + ")");
    Me(this, a, b);
    pe(c);
    H(c)
};

function Ii(a) {
    if (a.A && 0 == I && !a.getParent() && !a.F && a.A.options.h && a.A.options.h.snap) {
        var b = a.A.options.h.spacing,
            c = b / 2,
            d = a.oa(),
            e = Math.round((d.x - c) / b) * b + c - d.x,
            b = Math.round((d.y - c) / b) * b + c - d.y,
            e = Math.round(e),
            b = Math.round(b);
        0 == e && 0 == b || a.moveBy(e, b)
    }
}

function Ji(a) {
    var b = a.height,
        c = a.width,
        d = he(a);
    d ? (a = Ji(d), b += a.height - 4, c = Math.max(c, a.width)) : a.g || a.L || (b += 2);
    return {
        height: b,
        width: c
    }
}

function ck(a) {
    var b = a.oa(a),
        c = a.L ? 8 : 0,
        d = Ji(a);
    a.s ? (a = new w(b.x - (d.width - c), b.y), b = new w(b.x + c, b.y + d.height)) : (a = new w(b.x - c, b.y), b = new w(b.x + d.width - c, b.y + d.height));
    return {
        Cb: a,
        Sb: b
    }
}
g.Yc = function(a) {
    if (this.j != a) {
        for (var b = [], c = 0, d; d = this.h[c]; c++) b.push.apply(b, d.$(!a));
        if (a) {
            d = zj(this);
            for (c = 0; c < d.length; c++) d[c].$(!1);
            c = this.toString(dk);
            T(Kj(this, "_TEMP_COLLAPSED_INPUT"), c).G()
        } else this.Xc("_TEMP_COLLAPSED_INPUT"), this.jb(null);
        qi.w.Yc.call(this, a);
        b.length || (b[0] = this);
        if (this.P)
            for (c = 0; a = b[c]; c++) a.V()
    }
};
g.tab = function(a, b) {
    for (var c = [], d = 0, e; e = this.h[d]; d++) {
        for (var f = 0, k; k = e.Ba[f]; f++) k instanceof Mj && c.push(k);
        e.J && (e = E(e.J)) && c.push(e)
    }
    d = c.indexOf(a); - 1 == d && (d = b ? -1 : c.length);
    (c = c[b ? d + 1 : d - 1]) ? c instanceof sj ? c.$c() : c.tab(null, b): (c = this.getParent()) && c.tab(this, b)
};
g.Ad = function(a) {
    if (!this.A.options.i)
        if (this.F) a.stopPropagation();
        else {
            this.A.sd();
            zi();
            this.select();
            Dh();
            var b = this.A;
            b.fb ? b.T = b.fb.Md() : b.T = null;
            b.R ? b.H = b.R.Md() : b.W ? b.H = b.W.Md() : b.H = null;
            if (yh(a)) ek(this, a);
            else if (ve(this)) {
                ke || F(!0);
                Ah(Bh);
                this.Ld = this.oa();
                Ch(this.A, a, this.Ld);
                I = 1;
                Wj = M(document, "mouseup", this, this.Mh);
                Xj = M(document, "mousemove", this, this.Lh);
                this.Ra = [];
                for (var b = this.bb(), c = 0, d; d = b[c]; c++) {
                    d = zj(d);
                    for (var e = 0; e < d.length; e++) {
                        var f = d[e].Sc;
                        f.Hk = d[e];
                        this.Ra.push(f)
                    }
                }
            } else return;
            a.stopPropagation();
            a.preventDefault()
        }
};
g.Mh = function(a) {
    2 == I || oj || H(new Vi(this, "click", 0, void 0));
    zi();
    if (Q && re) {
        se.connect(re);
        if (this.P && (a = (te(se) ? re : se).v, Li(a.A, "click"), !(1 > a.A.scale))) {
            var b = Vh(a.o, a.A);
            a.L ? (b.x += (a.s ? 3 : -3) * a.A.scale, b.y += 13 * a.A.scale) : a.S && (b.x += (a.s ? -23 : 23) * a.A.scale, b.y += 3 * a.A.scale);
            b = J("circle", {
                cx: b.x,
                cy: b.y,
                r: 0,
                fill: "none",
                stroke: "#888",
                "stroke-width": 10
            }, Uh(a.A));
            fk(b, new Date, a.A.scale)
        }
        this.A.fb && this.A.fb.close()
    } else !this.getParent() && $g(Q) && Ai(this.A, a) && ((a = this.A.fb) && Zd(a.close, 100, a), a = Q.A, Q.C(!1, !0), jh(a));
    re && (Pe(), re = null);
    Ah(bk);
    oj || F(!1)
};

function ek(a, b) {
    if (!a.A.options.i && a.Qa) {
        var c = [];
        if ($g(a) && ve(a) && !a.F) {
            var d = {
                text: R.ji,
                enabled: !0,
                $a: function() {
                    var b = yi,
                        c = gk;
                    hk(a);
                    xi(a.A);
                    yi = b;
                    gk = c
                }
            };
            a.bb().length > Tg(a.A) && (d.enabled = !1);
            c.push(d);
            ah(a) && !a.j && a.A.options.H && (d = {
                enabled: !u
            }, a.wa ? (d.text = R.Dk, d.$a = function() {
                a.be(null)
            }) : (d.text = R.Kh, d.$a = function() {
                a.be("")
            }), c.push(d));
            if (!a.j)
                for (d = 1; d < a.h.length; d++)
                    if (3 != a.h[d - 1].type && 3 != a.h[d].type) {
                        var d = {
                                enabled: !0
                            },
                            e = Ij(a);
                        d.text = e ? R.ni : R.pi;
                        d.$a = function() {
                            a.Nb(!e)
                        };
                        c.push(d);
                        break
                    }
            a.A.options.u &&
                (a.j ? (d = {
                    enabled: !0
                }, d.text = R.mi, d.$a = function() {
                    a.Yc(!1)
                }, c.push(d)) : (d = {
                    enabled: !0
                }, d.text = R.Wh, d.$a = function() {
                    a.Yc(!0)
                }, c.push(d)));
            a.A.options.I && (d = {
                text: a.disabled ? R.ki : R.ii,
                enabled: !Jj(a),
                $a: function() {
                    a.xd(!a.disabled)
                }
            }, c.push(d));
            var d = a.bb().length,
                f = he(a);
            f && (d -= f.bb().length);
            d = {
                text: 1 == d ? R.vg : R.wg.replace("%1", String(d)),
                enabled: !0,
                $a: function() {
                    F(!0);
                    a.C(!0, !0);
                    F(!1)
                }
            };
            c.push(d)
        }
        d = {
            enabled: !(ga(a.u) ? !a.u() : !a.u)
        };
        d.text = R.oi;
        d.$a = function() {
            var b = ga(a.u) ? a.u() : a.u;
            b && window.open(b)
        };
        c.push(d);
        a.re && !a.F && a.re(c);
        Hg.show(b, c, a.s);
        Hg.ye = a
    }
}

function Me(a, b, c) {
    if (a.P) {
        for (var d = a.Vb(!1), e = 0; e < d.length; e++) d[e].moveBy(b, c);
        d = zj(a);
        for (e = 0; e < d.length; e++) Ri(d[e]);
        for (e = 0; e < a.I.length; e++) Me(a.I[e], b, c)
    }
}

function ak(a, b) {
    if (b) {
        var c = a.o;
        c.h = "";
        c.g = "";
        Ig(a.o, "blocklyDragging");
        we = we.concat(a.Vb(!0))
    } else Qi(a.o, "blocklyDragging"), we = [];
    for (c = 0; c < a.I.length; c++) ak(a.I[c], b)
}
g.Lh = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = this.oa(),
            c = Eh(this.A, a);
        if (1 == I && gc(b, c) * this.A.scale > Ih) {
            I = 2;
            ik();
            if (this.H) {
                Be(this);
                var d = this.o;
                d.h = "translate(" + c.x + "," + c.y + ")";
                Li(this.A, "disconnect");
                1 > this.A.scale || (d = Math.atan(10 / Ji(this).height) / Math.PI * 180, this.s || (d *= -1), jk(this.o, d, new Date))
            }
            ak(this, !0)
        }
        if (2 == I) {
            b = hc(b, this.Ld);
            d = this.o;
            d.h = "translate(" + c.x + "," + c.y + ")";
            d.setAttribute("transform", d.h + d.g);
            for (c = 0; c < this.Ra.length; c++) {
                var e =
                    this.Ra[c],
                    d = e.Hk,
                    e = new w(e.x + b.x, e.y + b.y);
                d.Sc = e;
                d.Z() && (d = d.Aa, d.Jc = e, d.ae && qh(d))
            }
            d = this.Vb(!1);
            a: {
                for (c = this.g; c;) {
                    e = E(c);
                    if (!e) break a;
                    c = e.g
                }
                c = null
            }
            c && c != this.g && d.push(c);
            for (var f = e = null, k = Fe, c = 0; c < d.length; c++) {
                var l = d[c],
                    n;
                n = $h(l.Id, l, k, b);
                n.J && (e = n.J, f = l, k = n.Ch)
            }
            re && re != e && (Pe(), se = re = null);
            e && e != re && (e.Pe(), re = e, se = f);
            $g(this) && Ai(this.A, a)
        }
        a.stopPropagation();
        a.preventDefault()
    }
};

function Vj(a) {
    ve(a) ? Ig(a.o, "blocklyDraggable") : Qi(a.o, "blocklyDraggable")
}
g.$e = function(a) {
    qi.w.$e.call(this, a);
    Vj(this)
};
g.jg = function(a) {
    qi.w.jg.call(this, a);
    if (this.P) {
        a = zj(this);
        for (var b = 0; b < a.length; b++) a[b].pc()
    }
};
g.lg = function(a) {
    qi.w.lg.call(this, a);
    this.nc()
};
g.C = function(a, b) {
    nj();
    fh();
    Q == this && (wi(this), zi());
    Hg.ye == this && Hg.lc();
    if (b && this.P) {
        Be(this, a);
        Li(this.A, "delete");
        var c = Vh(this.o, this.A),
            d = this.o.cloneNode(!0);
        d.B = c.x;
        d.F = c.y;
        d.setAttribute("transform", "translate(" + d.B + "," + d.F + ")");
        Uh(this.A).appendChild(d);
        d.i = d.getBBox();
        kk(d, this.s, new Date, this.A.scale)
    }
    this.P = !1;
    G++;
    c = zj(this);
    for (d = 0; d < c.length; d++) c[d].C();
    G--;
    qi.w.C.call(this, a);
    y(this.o);
    this.La = this.ma = this.K = this.o = null;
    gh()
};

function kk(a, b, c, d) {
    var e = (new Date - c) / 150;
    1 < e ? y(a) : (a.setAttribute("transform", "translate(" + (a.B + (b ? -1 : 1) * a.i.width * d / 2 * e) + "," + (a.F + a.i.height * d * e) + ") scale(" + (1 - e) * d + ")"), setTimeout(function() {
        kk(a, b, c, d)
    }, 10))
}

function fk(a, b, c) {
    var d = (new Date - b) / 150;
    1 < d ? y(a) : (a.setAttribute("r", 25 * d * c), a.style.opacity = 1 - d, setTimeout(function() {
        fk(a, b, c)
    }, 10))
}

function jk(a, b, c) {
    var d = (new Date - c) / 200;
    1 < d ? a.g = "" : (a.g = "skewX(" + Math.round(Math.sin(d * Math.PI * 3) * (1 - d) * b) + ")", lk = a, mk = setTimeout(function() {
        jk(a, b, c)
    }, 10));
    a.setAttribute("transform", a.h + a.g)
}

function Zj() {
    if (lk) {
        clearTimeout(mk);
        var a = lk;
        a.g = "";
        a.setAttribute("transform", a.h);
        lk = null
    }
}
var mk = 0,
    lk = null;
g = qi.prototype;
g.nc = function() {
    if (!this.disabled) {
        var a = this.Tb,
            b = nk(a);
        if (this.i) b = ok([255, 255, 255], b, .6), a = Gj(b), this.ma.style.display = "none", this.La.setAttribute("fill", a);
        else {
            this.ma.style.display = "";
            var c = Gj(ok([255, 255, 255], b, .3)),
                b = Gj(ok([0, 0, 0], b, .2));
            this.ma.setAttribute("stroke", c);
            this.La.setAttribute("fill", b)
        }
        this.K.setAttribute("fill", a);
        a = zj(this);
        for (c = 0; c < a.length; c++) a[c].nc();
        for (a = 0; c = this.h[a]; a++)
            for (var b = 0, d; d = c.Ba[b]; b++) d.Eb(null)
    }
};

function Qe(a) {
    var b;
    b = -1 != (" " + a.o.getAttribute("class") + " ").indexOf(" blocklyDisabled ");
    a.disabled || Jj(a) ? b || (Ig(a.o, "blocklyDisabled"), a.K.setAttribute("fill", "url(#" + a.A.options.Kd + ")")) : b && (Qi(a.o, "blocklyDisabled"), a.nc());
    a = a.Oc();
    b = 0;
    for (var c; c = a[b]; b++) Qe(c)
}
g.Fe = function() {
    var a;
    this.wa ? (a = this.wa, a = (a.h ? a.h.value : a.qa).replace(/\s+$/, "").replace(/ +\n/g, "\n")) : a = "";
    return a
};
g.be = function(a) {
    var b = !1;
    p(a) ? (this.wa || (this.wa = new Yi(this), b = !0), aj(this.wa, a)) : this.wa && (this.wa.C(), b = !0);
    b && this.P && (this.V(), Ce(this))
};
g.jb = function(a, b) {
    this.jb.g || (this.jb.g = Object.create(null));
    var c = b || "";
    if (c) this.jb.g[c] && (clearTimeout(this.jb.g[c]), delete this.jb.g[c]);
    else
        for (var d in this.jb.g) clearTimeout(this.jb.g[d]), delete this.jb.g[d];
    if (2 == I) {
        var e = this;
        this.jb.g[c] = setTimeout(function() {
            e.A && (delete e.jb.g[c], e.jb(a, c))
        }, 100)
    } else {
        this.F && (a = null);
        d = Ej(this);
        for (var f = null; d;) d.j && (f = d), d = Ej(d);
        f && f.jb(a, "collapsed " + this.id + " " + c);
        d = !1;
        p(a) ? (this.rb || (this.rb = new $i(this), d = !0), Cj(this.rb, a, c)) : this.rb && !c ? (this.rb.C(),
            d = !0) : this.rb && (d = Bj(this.rb), Cj(this.rb, "", c), (f = Bj(this.rb)) || this.rb.C(), d = d == f);
        d && this.P && (this.V(), Ce(this))
    }
};
g.Gh = function(a) {
    this.Ib && this.Ib !== a && this.Ib.C();
    a && (a.O = this, this.Ib = a, Pi(a))
};
g.xd = function(a) {
    this.disabled != a && (qi.w.xd.call(this, a), this.P && Qe(this))
};
g.sf = function() {
    Ig(this.o, "blocklySelected");
    this.o.parentNode.appendChild(this.o)
};
g.Xe = function() {
    Qi(this.o, "blocklySelected")
};
g.Ma = function(a) {
    qi.w.Ma.call(this, a);
    this.P && this.nc()
};
g.Fc = function(a, b) {
    qi.w.Fc.call(this, a, b);
    this.P && (this.V(), Ce(this))
};
g.Zc = function(a, b) {
    qi.w.Zc.call(this, a, b);
    this.P && (this.V(), Ce(this))
};
g.Ob = function(a, b) {
    qi.w.Ob.call(this, a, b);
    this.P && (this.V(), Ce(this))
};
g.Nb = function(a) {
    qi.w.Nb.call(this, a);
    this.P && (this.V(), Ce(this))
};
g.Xc = function(a, b) {
    qi.w.Xc.call(this, a, b);
    this.P && (this.V(), Ce(this))
};
g.sa = function(a, b) {
    var c = qi.w.sa.call(this, a, b);
    this.P && (this.V(), Ce(this));
    return c
};
g.Vb = function(a) {
    var b = [];
    if (a || this.P)
        if (this.L && b.push(this.L), this.S && b.push(this.S), this.g && b.push(this.g), a || !this.j) {
            a = 0;
            for (var c; c = this.h[a]; a++) c.J && b.push(c.J)
        }
    return b
};
g.Wd = function(a) {
    return new xe(this, a)
};
var pk = 7.5 * (1 - Math.SQRT1_2) + .5,
    qk = 8.5 * (1 - Math.SQRT1_2) - .5,
    rk = "m " + pk + "," + pk,
    sk = "a 8,8 0 0,0 " + (-qk - .5) + "," + (8 - qk),
    tk = "a 8.5,8.5 0 0,0 " + (8 - qk) + "," + (qk + .5);
qi.prototype.V = function(a) {
    fh();
    this.P = !0;
    var b = 10;
    this.s && (b = -b);
    for (var c = zj(this), d = 0; d < c.length; d++) {
        var e = c[d];
        e.Pg && e.O.j ? e.g.setAttribute("display", "none") : (e.g.setAttribute("display", "block"), e.O.s && (b -= 17), e.g.setAttribute("transform", "translate(" + b + ",5)"), Ri(e), b = e.O.s ? b - 10 : b + 27)
    }
    var f = b += this.s ? 10 : -10,
        k = this.h,
        c = [];
    c.g = f + 20;
    if (this.S || this.g) c.g = Math.max(c.g, 40);
    for (var e = d = 0, l = !1, n = !1, m = !1, q = void 0, r = Ij(this) && !this.j, z = 0, B; B = k[z]; z++)
        if (B.Z()) {
            var A;
            r && q && 3 != q && 3 != B.type ? A = c[c.length -
                1] : (q = B.type, A = [], A.type = r && 3 != B.type ? -1 : B.type, A.height = 0, c.push(A));
            A.push(B);
            B.Dc = 25;
            B.Oa = r && 1 == B.type ? 20.5 : 0;
            if (B.J && B.J.M) {
                var Xd = Ji(E(B.J));
                B.Dc = Math.max(B.Dc, Xd.height);
                B.Oa = Math.max(B.Oa, Xd.width)
            }
            r || z != k.length - 1 ? !r && 1 == B.type && k[z + 1] && 3 == k[z + 1].type && B.Dc-- : B.Dc--;
            A.height = Math.max(A.height, B.Dc);
            B.Gb = 0;
            1 == c.length && (B.Gb += this.s ? -f : f);
            for (var Xd = !1, dh = 0, bc; bc = B.Ba[dh]; dh++) {
                0 != dh && (B.Gb += 10);
                var Ac;
                Ac = bc;
                Ac.u.width || Ac.hf();
                Ac = Ac.u;
                bc.Oa = Ac.width;
                bc.I = Xd && bc.cd ? 10 : 0;
                B.Gb += bc.Oa + bc.I;
                A.height =
                    Math.max(A.height, Ac.height);
                Xd = bc.cd
            } - 1 != A.type && (3 == A.type ? (n = !0, e = Math.max(e, B.Gb)) : (1 == A.type ? l = !0 : 5 == A.type && (m = !0), d = Math.max(d, B.Gb)))
        }
    for (f = 0; A = c[f]; f++)
        if (A.Ih = !1, -1 == A.type)
            for (k = 0; B = A[k]; k++)
                if (1 == B.type) {
                    A.height += 10;
                    A.Ih = !0;
                    break
                }
    c.h = 20 + e;
    n && (c.g = Math.max(c.g, c.h + 30));
    l ? c.g = Math.max(c.g, d + 28) : m && (c.g = Math.max(c.g, d + 20));
    c.i = l;
    c.u = n;
    c.j = m;
    e = b;
    this.hc = !1;
    this.height = 0;
    this.L ? this.fc = this.Fb = !0 : (this.fc = this.Fb = !1, this.S && (b = E(this.S)) && he(b) == this && (this.Fb = !0), he(this) && (this.fc = !0));
    l = [];
    n = [];
    b = [];
    d = [];
    m = c.g;
    this.Fb ? (l.push("m 0,0"), b.push("m 0.5,0.5"), this.hc && (l.push("c 30,-15 70,-15 100,0"), b.push(this.s ? "m 25,-8.7 c 29.7,-6.2 57.2,-0.5 75,8.7" : "c 17.8,-9.2 45.3,-14.9 75,-8.7 M 100.5,0.5"))) : (l.push("m 0,8"), b.push(this.s ? rk : "m 0.5,7.5"), l.push("A 8,8 0 0,1 8,0"), b.push("A 7.5,7.5 0 0,1 8,0.5"));
    this.S && (l.push("H", 15), b.push("H", 15), l.push("l 6,4 3,0 6,-4"), b.push("l 6,4 3,0 6,-4"), Je(this.S, this.s ? -30 : 30, 0));
    l.push("H", m);
    b.push("H", m - .5);
    this.width = m;
    var m = 0,
        O;
    for (B = 0; A =
        c[B]; B++) {
        q = 10;
        0 == B && (q += this.s ? -e : e);
        b.push("M", c.g - .5 + "," + (m + .5));
        if (this.j) f = A[0], r = m, uk(this, f.Ba, q, r), l.push("l 8,0 0,4 8,4 -16,8 8,4"), b.push("h 8"), f = A.height - 20, l.push("v", f), this.s && (b.push("v 3.9 l 7.2,3.4 m -14.5,8.9 l 7.3,3.5"), b.push("v", f - .7)), this.width += 15;
        else if (-1 == A.type) {
            for (k = 0; f = A[k]; k++) r = m, A.Ih && (r += 5), q = uk(this, f.Ba, q, r), 5 != f.type && (q += f.Oa + 10), 1 == f.type && (n.push("M", q - 10 + "," + (m + 5)), n.push("h", 6 - f.Oa), n.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), n.push("v", f.Dc + 1 - 20),
                n.push("h", f.Oa + 2 - 8), n.push("z"), this.s ? (d.push("M", q - 10 - 2.5 + 8 - f.Oa + "," + (m + 5 + .5)), d.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), d.push("v", f.Dc - 20 + 2.5), d.push("h", f.Oa - 8 + 2)) : (d.push("M", q - 10 + .5 + "," + (m + 5 + .5)), d.push("v", f.Dc + 1), d.push("h", 6 - f.Oa), d.push("M", q - f.Oa - 10 + .9 + "," + (m + 5 + 20 - .7)), d.push("l", "3.68,-2.1")), this.s ? O = -q - 8 + 10 + f.Oa + 1 : O = q + 8 - 10 - f.Oa - 1, r = m + 5 + 1, Je(f.J, O, r));
            q = Math.max(q, c.g);
            this.width = Math.max(this.width, q);
            l.push("H", q);
            b.push("H", q - .5);
            l.push("v", A.height);
            this.s &&
                b.push("v", A.height - 1)
        } else 1 == A.type ? (f = A[0], r = m, -1 != f.align && (k = c.g - f.Gb - 8 - 20, 1 == f.align ? q += k : 0 == f.align && (q += k / 2)), uk(this, f.Ba, q, r), l.push("v 5 c 0,10 -8,-8 -8,7.5 s 8,-2.5 8,7.5"), O = A.height - 20, l.push("v", O), this.s ? (b.push("v 6.5 m -7.76,3 q -0.4,10 2.4,9.5 m 5.36,-1.9 v 1.4"), b.push("v", O + .5)) : (b.push("M", c.g - 5 + "," + (m + 20 - .7)), b.push("l", "3.68,-2.1")), O = this.s ? -c.g - 1 : c.g + 1, Je(f.J, O, m), f.J.M && (this.width = Math.max(this.width, c.g + Ji(E(f.J)).width - 8 + 1))) : 5 == A.type ? (f = A[0], r = m, -1 != f.align && (k = c.g -
            f.Gb - 20, c.i && (k -= 8), 1 == f.align ? q += k : 0 == f.align && (q += k / 2)), uk(this, f.Ba, q, r), l.push("v", A.height), this.s && b.push("v", A.height - 1)) : 3 == A.type && (f = A[0], 0 == B && (l.push("v", 10), this.s && b.push("v", 9), m += 10), r = m, -1 != f.align && (k = c.h - f.Gb - 20, 1 == f.align ? q += k : 0 == f.align && (q += k / 2)), uk(this, f.Ba, q, r), q = c.h + 30, l.push("H", q), l.push("l -6,4 -3,0 -6,-4 h -7 a 8,8 0 0,0 -8,8"), l.push("v", A.height - 16), l.push("a 8,8 0 0,0 8,8"), l.push("H", c.g), this.s ? (b.push("M", q - 30 + qk + "," + (m + qk)), b.push(sk), b.push("v", A.height - 16), b.push("a 8.5,8.5 0 0,0 8.5,8.5")) :
            (b.push("M", q - 30 + qk + "," + (m + A.height - qk)), b.push(tk)), b.push("H", c.g - .5), O = this.s ? -q : q + 1, Je(f.J, O, m + 1), f.J.M && (this.width = Math.max(this.width, c.h + Ji(E(f.J)).width)), B == c.length - 1 || 3 == c[B + 1].type) && (l.push("v", 10), this.s && b.push("v", 9), m += 10);
        m += A.height
    }
    c.length || (m = 25, l.push("V", m), this.s && b.push("V", m - 1));
    O = m;
    this.height += O + 1;
    this.g && (l.push("H", 30 + (this.s ? .5 : -.5) + " l -6,4 -3,0 -6,-4"), Je(this.g, this.s ? -30 : 30, O + 1), this.height += 4);
    this.fc ? (l.push("H 0"), this.s || b.push("M", "0.5," + (O - .5))) : (l.push("H",
        8), l.push("a", "8,8 0 0,1 -8,-8"), this.s || (b.push("M", pk + "," + (O - pk)), b.push("A", "7.5,7.5 0 0,1 0.5," + (O - 8))));
    this.L ? (Je(this.L, 0, 0), l.push("V", 20), l.push("c 0,-10 -8,8 -8,-7.5 s 8,2.5 8,-7.5"), this.s ? (b.push("M", "-2,8.4"), b.push("l", "-3.6,-2.1")) : (b.push("V", 18.5), b.push("m", "-7.36,-0.5 q -1.52,-5.5 0,-11"), b.push("m", "7.36,1 V 0.5 H 1")), this.width += 8) : this.s || (this.Fb ? b.push("V", .5) : b.push("V", 8));
    l.push("z");
    O = l.join(" ") + "\n" + n.join(" ");
    this.K.setAttribute("d", O);
    this.La.setAttribute("d", O);
    O = b.join(" ") + "\n" + d.join(" ");
    this.ma.setAttribute("d", O);
    this.s && (this.K.setAttribute("transform", "scale(-1 1)"), this.ma.setAttribute("transform", "scale(-1 1)"), this.La.setAttribute("transform", "translate(1,1) scale(-1 1)"));
    O = this.oa();
    this.S && Ie(this.S, O);
    this.L && Ie(this.L, O);
    for (c = 0; c < this.h.length; c++)
        if (b = this.h[c].J) Ie(b, O), b.M && Ke(b);
    this.g && (Ie(this.g, O), this.g.M && Ke(this.g));
    !1 !== a && ((a = this.getParent()) ? a.V(!0) : jh(this.A));
    gh()
};

function uk(a, b, c, d) {
    d += 5;
    a.s && (c = -c);
    for (var e = 0, f; f = b[e]; e++) {
        var k = f.gf();
        k && (a.s ? (c -= f.I + f.Oa, k.setAttribute("transform", "translate(" + c + "," + d + ")"), f.Oa && (c -= 10)) : (k.setAttribute("transform", "translate(" + (c + f.I) + "," + d + ")"), f.Oa && (c += f.I + f.Oa + 10)))
    }
    return a.s ? -c : c
};
var R = {};

function Mj(a, b) {
    Mj.w.constructor.call(this, a, b)
}
var vk;
t(Mj, sj);
g = Mj.prototype;
g.oe = "text";
g.Hh = !0;
g.C = function() {
    Lg(this);
    Mj.w.C.call(this)
};
g.va = function(a) {
    if (null !== a) {
        if (this.v && this.Xa) {
            var b = this.Xa(a);
            null !== b && void 0 !== b && (a = b)
        }
        sj.prototype.va.call(this, a)
    }
};
g.$c = function(a) {
    this.m = this.v.A;
    a = a || !1;
    if (!a && (Jb || Lb || Nb)) {
        a = window.prompt(R.Th, this.qa);
        if (this.v && this.Xa) {
            var b = this.Xa(a);
            void 0 !== b && (a = b)
        }
        this.va(a)
    } else {
        Gg(this, this.v.s, wk(this));
        var b = L,
            c = x("input", "blocklyHtmlInput");
        c.setAttribute("spellcheck", this.Hh);
        var d = 11 * this.m.scale + "pt";
        b.style.fontSize = d;
        c.style.fontSize = d;
        vk = c;
        b.appendChild(c);
        c.value = c.defaultValue = this.qa;
        c.j = null;
        xk(this);
        this.Ye();
        a || (c.focus(), c.select());
        c.I = M(c, "keydown", this, this.wl);
        c.K = M(c, "keyup", this, this.Ah);
        c.H = M(c, "keypress", this, this.Ah);
        c.u = this.Ye.bind(this);
        this.m.Qb(c.u)
    }
};
g.wl = function(a) {
    var b = vk;
    13 == a.keyCode ? yk() : 27 == a.keyCode ? (b.value = b.defaultValue, yk()) : 9 == a.keyCode && (yk(), this.v.tab(this, !a.shiftKey), a.preventDefault())
};
g.Ah = function() {
    var a = vk,
        b = a.value;
    b !== a.j ? (a.j = b, this.va(b), xk(this)) : v && this.v.V();
    this.Ye()
};

function xk(a) {
    var b = !0,
        c = vk;
    a.v && a.Xa && (b = a.Xa(c.value));
    null === b ? Ig(c, "blocklyInvalidInput") : Qi(c, "blocklyInvalidInput")
}
g.Ye = function() {
    var a = L,
        b = this.g.getBBox();
    a.style.width = b.width * this.m.scale + "px";
    a.style.height = b.height * this.m.scale + "px";
    b = ed(this.j);
    if (this.v.s) {
        var c = wj(this);
        b.x += c.width;
        b.x -= a.offsetWidth
    }
    b.y += 1;
    Ib && L.style.top && (--b.x, --b.y);
    v && (b.y -= 3);
    a.style.left = b.x + "px";
    a.style.top = b.y + "px"
};

function wk(a) {
    return function() {
        var b = vk,
            c = b.value;
        if (a.v && a.Xa) {
            var d = a.Xa(c);
            null === d ? c = b.defaultValue : void 0 !== d && (c = d)
        }
        a.va(c);
        a.v.P && a.v.V();
        N(b.I);
        N(b.K);
        N(b.H);
        a.m.vd(b.u);
        vk = null;
        b = L.style;
        b.width = "auto";
        b.height = "auto";
        b.fontSize = ""
    }
}

function zk(a) {
    if (null === a) return null;
    a = String(a);
    a = a.replace(/O/ig, "0");
    a = a.replace(/,/g, "");
    a = parseFloat(a || 0);
    return isNaN(a) ? null : String(a)
};

function Rj(a, b) {
    this.F = a;
    Ak(this);
    var c = Bk(this)[0];
    Rj.w.constructor.call(this, c[1], b)
}
t(Rj, sj);
var Ck = Lb ? "\u25bc" : "\u25be";
g = Rj.prototype;
g.oe = "default";
g.G = function() {
    if (!this.g) {
        this.B = J("tspan", {}, null);
        this.B.appendChild(document.createTextNode(this.v.s ? Ck + " " : " " + Ck));
        Rj.w.G.call(this);
        var a = this.qa;
        this.qa = null;
        this.Eb(a)
    }
};
g.$c = function() {
    Gg(this, this.v.s, null);
    var a = this,
        b = new Eg;
    b.md(this.v.s);
    for (var c = Bk(this), d = 0; d < c.length; d++) {
        var e = c[d][1],
            f = new ig(c[d][0]);
        f.md(this.v.s);
        f.Qa = e;
        f.qb(16, !0);
        b.Gd(f, !0);
        Xf(f, e == this.i)
    }
    Kd(b, "action", function(b) {
        if (b = b.target) {
            b = b.Wa();
            if (a.v && a.Xa) {
                var c = a.Xa(b);
                void 0 !== c && (b = c)
            }
            null !== b && a.va(b)
        }
        Lg(a)
    });
    Ze(b).X(b.D(), "touchstart", function(a) {
        vg(this, a.target).kc(a)
    });
    Ze(b).X(b.D(), "touchend", function(a) {
        vg(this, a.target).Cc(a)
    });
    c = oc();
    d = cd();
    e = ed(this.j);
    f = wj(this);
    b.V(L);
    var k = b.D();
    Ig(k, "blocklyDropdownMenu");
    var l = fd(k);
    l.height = k.scrollHeight;
    e.y = e.y + l.height + f.height >= c.height + d.y ? e.y - (l.height + 2) : e.y + f.height;
    this.v.s ? (e.x += f.width, e.x += 25, e.x < d.x + l.width && (e.x = d.x + l.width)) : (e.x -= 25, e.x > c.width + d.x - l.width && (e.x = c.width + d.x - l.width));
    Kg(e.x, e.y, c, d, this.v.s);
    Fg(b);
    k.focus()
};

function Ak(a) {
    a.K = null;
    a.N = null;
    var b = a.F;
    if (da(b) && !(2 > b.length)) {
        var c = b.map(function(a) {
                return a[0]
            }),
            d = Dk(c),
            e = Ek(c, d),
            f = Fk(c, d);
        if ((e || f) && !(d <= e + f)) {
            e && (a.K = c[0].substring(0, e - 1));
            f && (a.N = c[0].substr(1 - f));
            c = [];
            for (d = 0; d < b.length; d++) {
                var k = b[d][0],
                    l = b[d][1],
                    k = k.substring(e, k.length - f);
                c[d] = [k, l]
            }
            a.F = c
        }
    }
}

function Bk(a) {
    return ga(a.F) ? a.F.call(a) : a.F
}
g.Wa = function() {
    return this.i
};
g.va = function(a) {
    if (null !== a && a !== this.i) {
        this.v && 0 == G && H(new Wi(this.v, "field", this.name, this.i, a));
        this.i = a;
        for (var b = Bk(this), c = 0; c < b.length; c++)
            if (b[c][1] == a) {
                this.Eb(b[c][0]);
                return
            }
        this.Eb(a)
    }
};
g.Eb = function(a) {
    this.v && this.B && (this.B.style.fill = this.v.Tb);
    null !== a && a !== this.qa && (this.qa = a, vj(this), this.h && (this.v.s ? this.h.insertBefore(this.B, this.h.firstChild) : this.h.appendChild(this.B)), this.v && this.v.P && (this.v.V(), Ce(this.v)))
};
g.C = function() {
    Lg(this);
    Rj.w.C.call(this)
};

function Gk(a) {
    var b;
    if (a.bb) b = a.bb();
    else if (a.Nc) b = a.Nc();
    else throw "Not Block or Workspace: " + a;
    a = Object.create(null);
    for (var c = 0; c < b.length; c++) {
        var d;
        d = b[c];
        for (var e = [], f = 0, k; k = d.h[f]; f++)
            for (var l = 0, n; n = k.Ba[l]; l++) n instanceof Qj && e.push(n.Wa());
        d = e;
        for (e = 0; e < d.length; e++)(f = d[e]) && (a[f.toLowerCase()] = f)
    }
    b = [];
    for (var m in a) b.push(a[m]);
    return b
}

function Hk(a, b, c) {
    F(!0);
    c = c.Nc();
    for (var d = 0; d < c.length; d++)
        for (var e = c[d], f = a, k = b, l = 0, n; n = e.h[l]; l++)
            for (var m = 0, q; q = n.Ba[m]; m++) {
                var r;
                if (r = q instanceof Qj) r = q.Wa(), r = f.toLowerCase() == r.toLowerCase();
                r && q.va(k)
            }
    F(!1)
}

function Ik(a) {
    a = Gk(a);
    a.sort(ta);
    Wa(a, R.ed);
    a.unshift(R.ed);
    for (var b = [], c = 0; c < a.length; c++) {
        if (S.variables_set) {
            var d = x("block");
            d.setAttribute("type", "variables_set");
            S.variables_get && d.setAttribute("gap", 8);
            var e = x("field", null, a[c]);
            e.setAttribute("name", "VAR");
            d.appendChild(e);
            b.push(d)
        }
        S.variables_get && (d = x("block"), d.setAttribute("type", "variables_get"), S.variables_set && d.setAttribute("gap", 24), e = x("field", null, a[c]), e.setAttribute("name", "VAR"), d.appendChild(e), b.push(d))
    }
    return b
}

function Jk(a) {
    a = Gk(a);
    var b = "";
    if (a.length)
        for (var c = 1, d = 0, e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d); !b;) {
            for (var f = !1, k = 0; k < a.length; k++)
                if (a[k].toLowerCase() == e) {
                    f = !0;
                    break
                }
            f ? (d++, 25 == d && (d = 0, c++), e = "ijkmnopqrstuvwxyzabcdefgh".charAt(d), 1 < c && (e += c)) : b = e
        } else b = "i";
    return b
};

function Qj(a, b) {
    Qj.w.constructor.call(this, Kk, b);
    this.va(a || "")
}
t(Qj, Rj);
Qj.prototype.ee = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = Lk.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = Lk;
    Qj.w.ee.call(this, b)
};
Qj.prototype.G = function() {
    this.g || (Qj.w.G.call(this), this.Wa() || this.va(Jk(this.v.F ? this.v.A.K : this.v.A)))
};
Qj.prototype.Wa = function() {
    return this.Hc()
};
Qj.prototype.va = function(a) {
    this.v && 0 == G && H(new Wi(this.v, "field", this.name, this.i, a));
    this.i = a;
    this.Eb(a)
};

function Kk() {
    var a = this.v && this.v.A ? Gk(this.v.A) : [],
        b = this.Hc();
    b && -1 == a.indexOf(b) && a.push(b);
    a.sort(ta);
    a.push(R.rf);
    a.push(R.qf);
    for (var b = [], c = 0; c < a.length; c++) b[c] = [a[c], a[c]];
    return b
}

function Lk(a) {
    function b(a, b) {
        Dh();
        var c = window.prompt(a, b);
        c && (c = c.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, ""), c == R.rf || c == R.qf) && (c = null);
        return c
    }
    var c = this.v.A;
    if (a == R.rf) {
        var d = this.Hc();
        (a = b(R.Ek.replace("%1", d), d)) && Hk(d, a, c);
        return null
    }
    if (a == R.qf) return (a = b(R.xk, "")) ? (Hk(a, a, c), a) : null
};
var bk = "handopen",
    Bh = "handclosed",
    Bi = "handdelete",
    Mk = "",
    Nk = null,
    Ok = "";

function Ah(a) {
    if (Mk != a) {
        Mk = a;
        var b = "url(" + Ok + "/" + a + ".cur), auto",
            c = ".blocklyDraggable {\n  cursor: " + b + ";\n}\n";
        Nk.deleteRule(0);
        Nk.insertRule(c, 0);
        for (var c = document.getElementsByClassName("blocklyToolboxDiv"), d = 0, e; e = c[d]; d++) e.style.cursor = a == Bi ? b : "";
        document.body.parentNode.style.cursor = a == bk ? "" : b
    }
}
var Pk = [".blocklySvg {", "background-color: #fff;", "outline: none;", "overflow: hidden;", "}", ".blocklyWidgetDiv {", "display: none;", "position: absolute;", "z-index: 999;", "}", ".blocklyTooltipDiv {", "background-color: #ffffc7;", "border: 1px solid #ddc;", "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);", "color: #000;", "display: none;", "font-family: sans-serif;", "font-size: 9pt;", "opacity: 0.9;", "padding: 2px;", "position: absolute;", "z-index: 1000;", "}", ".blocklyResizeSE {", "cursor: se-resize;", "fill: #aaa;",
    "}", ".blocklyResizeSW {", "cursor: sw-resize;", "fill: #aaa;", "}", ".blocklyResizeLine {", "stroke: #888;", "stroke-width: 1;", "}", ".blocklyHighlightedConnectionPath {", "fill: none;", "stroke: #fc3;", "stroke-width: 4px;", "}", ".blocklyPathLight {", "fill: none;", "stroke-linecap: round;", "stroke-width: 1;", "}", ".blocklySelected>.blocklyPath {", "stroke: #fc3;", "stroke-width: 3px;", "}", ".blocklySelected>.blocklyPathLight {", "display: none;", "}", ".blocklyDragging>.blocklyPath,", ".blocklyDragging>.blocklyPathLight {",
    "fill-opacity: .8;", "stroke-opacity: .8;", "}", ".blocklyDragging>.blocklyPathDark {", "display: none;", "}", ".blocklyDisabled>.blocklyPath {", "fill-opacity: .5;", "stroke-opacity: .5;", "}", ".blocklyDisabled>.blocklyPathLight,", ".blocklyDisabled>.blocklyPathDark {", "display: none;", "}", ".blocklyText {", "cursor: default;", "fill: #fff;", "font-family: sans-serif;", "font-size: 11pt;", "}", ".blocklyNonEditableText>text {", "pointer-events: none;", "}", ".blocklyNonEditableText>rect,", ".blocklyEditableText>rect {",
    "fill: #fff;", "fill-opacity: .6;", "}", ".blocklyNonEditableText>text,", ".blocklyEditableText>text {", "fill: #000;", "}", ".blocklyEditableText:hover>rect {", "stroke: #fff;", "stroke-width: 2;", "}", ".blocklyBubbleText {", "fill: #000;", "}", ".blocklySvg text {", "user-select: none;", "-moz-user-select: none;", "-webkit-user-select: none;", "cursor: inherit;", "}", ".blocklyHidden {", "display: none;", "}", ".blocklyFieldDropdown:not(.blocklyHidden) {", "display: block;", "}", ".blocklyIconGroup {", "cursor: default;",
    "}", ".blocklyIconGroup:not(:hover),", ".blocklyIconGroupReadonly {", "opacity: .6;", "}", ".blocklyIconShape {", "fill: #00f;", "stroke: #fff;", "stroke-width: 1px;", "}", ".blocklyIconSymbol {", "fill: #fff;", "}", ".blocklyMinimalBody {", "margin: 0;", "padding: 0;", "}", ".blocklyCommentTextarea {", "background-color: #ffc;", "border: 0;", "margin: 0;", "padding: 2px;", "resize: none;", "}", ".blocklyHtmlInput {", "border: none;", "border-radius: 4px;", "font-family: sans-serif;", "height: 100%;", "margin: 0;", "outline: none;",
    "padding: 0 1px;", "width: 100%", "}", ".blocklyMainBackground {", "stroke-width: 1;", "stroke: #c6c6c6;", "}", ".blocklyMutatorBackground {", "fill: #fff;", "stroke: #ddd;", "stroke-width: 1;", "}", ".blocklyFlyoutBackground {", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyScrollbarBackground {", "opacity: 0;", "}", ".blocklyScrollbarHandle {", "fill: #ccc;", "}", ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyScrollbarHandle:hover {", "fill: #bbb;", "}", ".blocklyZoom>image {", "opacity: .4;",
    "}", ".blocklyZoom>image:hover {", "opacity: .6;", "}", ".blocklyZoom>image:active {", "opacity: .8;", "}", ".blocklyFlyout .blocklyScrollbarHandle {", "fill: #bbb;", "}", ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,", ".blocklyFlyout .blocklyScrollbarHandle:hover {", "fill: #aaa;", "}", ".blocklyInvalidInput {", "background: #faa;", "}", ".blocklyAngleCircle {", "stroke: #444;", "stroke-width: 1;", "fill: #ddd;", "fill-opacity: .8;", "}", ".blocklyAngleMarks {", "stroke: #444;", "stroke-width: 1;",
    "}", ".blocklyAngleGauge {", "fill: #f88;", "fill-opacity: .8;", "}", ".blocklyAngleLine {", "stroke: #f00;", "stroke-width: 2;", "stroke-linecap: round;", "}", ".blocklyContextMenu {", "border-radius: 4px;", "}", ".blocklyDropdownMenu {", "padding: 0 !important;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px !important;", "}", ".blocklyToolboxDiv {", "background-color: #ddd;",
    "overflow-x: visible;", "overflow-y: auto;", "position: absolute;", "}", ".blocklyTreeRoot {", "padding: 4px 0;", "}", ".blocklyTreeRoot:focus {", "outline: none;", "}", ".blocklyTreeRow {", "height: 22px;", "line-height: 22px;", "margin-bottom: 3px;", "padding-right: 8px;", "white-space: nowrap;", "}", ".blocklyHorizontalTree {", "float: left;", "margin: 1px 5px 8px 0;", "}", ".blocklyHorizontalTreeRtl {", "float: right;", "margin: 1px 0 8px 5px;", "}", '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {', "margin-left: 8px;",
    "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeSeparator {", "border-bottom: solid #e5e5e5 1px;", "height: 0;", "margin: 5px 0;", "}", ".blocklyTreeSeparatorHorizontal {", "border-right: solid #e5e5e5 1px;", "width: 0;", "padding: 5px 0;", "margin: 0 5px;", "}", ".blocklyTreeIcon {", "background-image: url(<<<PATH>>>/sprites.png);", "height: 16px;", "vertical-align: middle;", "width: 16px;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -1px;",
    "}", ".blocklyTreeIconClosedRtl {", "background-position: 0px -1px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -1px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconClosedRtl {", "background-position: 0px -17px;", "}", ".blocklyTreeSelected>.blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeIconNone,", ".blocklyTreeSelected>.blocklyTreeIconNone {", "background-position: -48px -1px;",
    "}", ".blocklyTreeLabel {", "cursor: default;", "font-family: sans-serif;", "font-size: 16px;", "padding: 0 3px;", "vertical-align: middle;", "}", ".blocklyTreeSelected .blocklyTreeLabel {", "color: #fff;", "}", ".blocklyWidgetDiv .goog-palette {", "outline: none;", "cursor: default;", "}", ".blocklyWidgetDiv .goog-palette-table {", "border: 1px solid #666;", "border-collapse: collapse;", "}", ".blocklyWidgetDiv .goog-palette-cell {", "height: 13px;", "width: 15px;", "margin: 0;", "border: 0;", "text-align: center;", "vertical-align: middle;",
    "border-right: 1px solid #666;", "font-size: 1px;", "}", ".blocklyWidgetDiv .goog-palette-colorswatch {", "position: relative;", "height: 13px;", "width: 15px;", "border: 1px solid #666;", "}", ".blocklyWidgetDiv .goog-palette-cell-hover .goog-palette-colorswatch {", "border: 1px solid #FFF;", "}", ".blocklyWidgetDiv .goog-palette-cell-selected .goog-palette-colorswatch {", "border: 1px solid #000;", "color: #fff;", "}", ".blocklyWidgetDiv .goog-menu {", "background: #fff;", "border-color: #ccc #666 #666 #ccc;", "border-style: solid;",
    "border-width: 1px;", "cursor: default;", "font: normal 13px Arial, sans-serif;", "margin: 0;", "outline: none;", "padding: 4px 0;", "position: absolute;", "overflow-y: auto;", "overflow-x: hidden;", "max-height: 100%;", "z-index: 20000;", "}", ".blocklyWidgetDiv .goog-menuitem {", "color: #000;", "font: normal 13px Arial, sans-serif;", "list-style: none;", "margin: 0;", "padding: 4px 7em 4px 28px;", "white-space: nowrap;", "}", ".blocklyWidgetDiv .goog-menuitem.goog-menuitem-rtl {", "padding-left: 7em;", "padding-right: 28px;",
    "}", ".blocklyWidgetDiv .goog-menu-nocheckbox .goog-menuitem,", ".blocklyWidgetDiv .goog-menu-noicon .goog-menuitem {", "padding-left: 12px;", "}", ".blocklyWidgetDiv .goog-menu-noaccel .goog-menuitem {", "padding-right: 20px;", "}", ".blocklyWidgetDiv .goog-menuitem-content {", "color: #000;", "font: normal 13px Arial, sans-serif;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-accel,", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-content {", "color: #ccc !important;", "}", ".blocklyWidgetDiv .goog-menuitem-disabled .goog-menuitem-icon {",
    "opacity: 0.3;", "-moz-opacity: 0.3;", "filter: alpha(opacity=30);", "}", ".blocklyWidgetDiv .goog-menuitem-highlight,", ".blocklyWidgetDiv .goog-menuitem-hover {", "background-color: #d6e9f8;", "border-color: #d6e9f8;", "border-style: dotted;", "border-width: 1px 0;", "padding-bottom: 3px;", "padding-top: 3px;", "}", ".blocklyWidgetDiv .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-icon {", "background-repeat: no-repeat;", "height: 16px;", "left: 6px;", "position: absolute;", "right: auto;", "vertical-align: middle;",
    "width: 16px;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-icon {", "left: auto;", "right: 6px;", "}", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-checkbox,", ".blocklyWidgetDiv .goog-option-selected .goog-menuitem-icon {", "background: url(//ssl.gstatic.com/editor/editortoolbar.png) no-repeat -512px 0;", "}", ".blocklyWidgetDiv .goog-menuitem-accel {", "color: #999;", "direction: ltr;", "left: auto;", "padding: 0 6px;",
    "position: absolute;", "right: 0;", "text-align: right;", "}", ".blocklyWidgetDiv .goog-menuitem-rtl .goog-menuitem-accel {", "left: 0;", "right: auto;", "text-align: left;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-hint {", "text-decoration: underline;", "}", ".blocklyWidgetDiv .goog-menuitem-mnemonic-separator {", "color: #999;", "font-size: 12px;", "padding-left: 4px;", "}", ".blocklyWidgetDiv .goog-menuseparator {", "border-top: 1px solid #ccc;", "margin: 4px 0;", "padding: 0;", "}", ""
];

function Qk(a, b) {
    p(a) && (a = document.getElementById(a) || document.querySelector(a));
    if (!vc(document, a)) throw "Error: container is not in current document.";
    var c = new hi(b || {}),
        d = a;
    d.setAttribute("dir", "LTR");
    We = c.s;
    var e = c.T,
        f = c.Lb;
    console.log("CSS!!!");
    if (!Nk) {
        var k = ".blocklyDraggable {}\n";
        e && (k += Pk.join("\n"), $d.pf && (k += $d.pf.CSS.join("\n")));
        Ok = f.replace(/[\\\/]$/, "");
        k = k.replace(/<<<PATH>>>/g, Ok);
        e = document.createElement("style");
        document.head.appendChild(e);
        e.appendChild(document.createTextNode(k));
        Nk = e.sheet;
        Ah(bk)
    }
    d = J("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:html": "http://www.w3.org/1999/xhtml",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        version: "1.1",
        "class": "blocklySvg"
    }, d);
    k = J("defs", {}, d);
    e = String(Math.random()).substring(2);
    f = J("filter", {
        id: "blocklyEmbossFilter" + e
    }, k);
    J("feGaussianBlur", {
        "in": "SourceAlpha",
        stdDeviation: 1,
        result: "blur"
    }, f);
    var l = J("feSpecularLighting", {
            "in": "blur",
            surfaceScale: 1,
            specularConstant: .5,
            specularExponent: 10,
            "lighting-color": "white",
            result: "specOut"
        },
        f);
    J("fePointLight", {
        x: -5E3,
        y: -1E4,
        z: 2E4
    }, l);
    J("feComposite", {
        "in": "specOut",
        in2: "SourceAlpha",
        operator: "in",
        result: "specOut"
    }, f);
    J("feComposite", {
        "in": "SourceGraphic",
        in2: "specOut",
        operator: "arithmetic",
        k1: 0,
        k2: 1,
        k3: 1,
        k4: 0
    }, f);
    c.K = f.id;
    f = J("pattern", {
        id: "blocklyDisabledPattern" + e,
        patternUnits: "userSpaceOnUse",
        width: 10,
        height: 10
    }, k);
    J("rect", {
        width: 10,
        height: 10,
        fill: "#aaa"
    }, f);
    J("path", {
        d: "M 0 0 L 10 10 M 10 0 L 0 10",
        stroke: "#cc0"
    }, f);
    c.Kd = f.id;
    k = J("pattern", {
            id: "blocklyGridPattern" + e,
            patternUnits: "userSpaceOnUse"
        },
        k);
    0 < c.h.length && 0 < c.h.spacing && (J("line", {
        stroke: c.h.colour
    }, k), 1 < c.h.length && J("line", {
        stroke: c.h.colour
    }, k));
    c.j = k;
    c = Rk(d, c);
    Sk(c);
    c.sd();
    M(d, "focus", c, c.sd);
    Tk(c);
    return c
}

function Rk(a, b) {
    b.Kb = null;
    b.Ca = Uk;
    b.Ec = Vk;
    var c = new ii(b);
    c.scale = b.g.Jl;
    a.appendChild(ji(c, "blocklyMainBackground"));
    c.translate(0, 0);
    c.sd();
    b.i || b.B || c.Qb(function() {
        if (0 == I) {
            var a = c.Ca(),
                e = a.Ga + a.Ha,
                f = a.$b + a.Na;
            if (a.tb < f || a.tb + a.Ua > a.ya + f || a.sb < (b.s ? a.Ga : e) || a.sb + a.ab > (b.s ? a.aa : a.aa + e))
                for (var k = Rg(c, !1), l = 0, n; n = k[l]; l++) {
                    var m = n.oa(),
                        q = Ji(n),
                        r = f + 25 - q.height - m.y;
                    0 < r && n.moveBy(0, r);
                    r = f + a.ya - 25 - m.y;
                    0 > r && n.moveBy(0, r);
                    r = 25 + e - m.x - (b.s ? 0 : q.width);
                    0 < r && n.moveBy(r, 0);
                    m = e + a.aa - 25 - m.x + (b.s ? q.width : 0);
                    0 > m && n.moveBy(m, 0)
                }
        }
    });
    Tk(c);
    L || (L = x("div", "blocklyWidgetDiv"), document.body.appendChild(L));
    ij || (ij = x("div", "blocklyTooltipDiv"), document.body.appendChild(ij));
    return c
}

function Sk(a) {
    var b = a.options,
        c = Uh(a);
    M(c, "contextmenu", null, function(a) {
        zh(a) || a.preventDefault()
    });
    M(window, "resize", null, function() {
        Dh(!0);
        Tk(a)
    });
    Wk();
    b.rd && (a.W ? a.W.G(a) : a.R && (a.R.G(a), a.R.show(b.rd.childNodes), Xk(a.R), a.scrollX = a.R.Y, 3 == b.ea && (a.scrollX *= -1), a.translate(a.scrollX, 0)));
    b.B && (a.Da = new Jh(a), a.Da.resize());
    b.ga && Yk(b.Lb, a)
}

function Wk() {
    be || (M(document, "keydown", null, Zk), M(document, "touchend", null, ik), M(document, "touchcancel", null, ik), document.addEventListener("mouseup", Fi, !1), Nb && M(window, "orientationchange", document, function() {
        Tk(Ni)
    }));
    be = !0
}

function Yk(a, b) {
    function c() {
        for (; d.length;) N(d.pop());
        for (var a in b.I) {
            var c = b.I[a];
            c.volume = .01;
            c.play();
            c.pause();
            if (Nb || Mb) break
        }
    }
    Ki(b, [a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
    Ki(b, [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"], "disconnect");
    Ki(b, [a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
    var d = [];
    d.push(M(document, "mousemove", null, c));
    d.push(M(document, "touchstart", null, c))
};

function $k() {
    this.dc = RegExp("{leCUI8hutHZI4480Dc}", "g")
}

function al() {
    var a = V,
        b = vi;
    b || (console.warn("No workspace specified in workspaceToCode call.  Guessing."), b = Ni);
    var c = [];
    a.G(b);
    for (var b = Rg(b, !0), d = 0, e; e = b[d]; d++) {
        var f = bl(a, e);
        da(f) && (f = f[0]);
        f && (e.L && a.Sa && (f = a.Sa(f)), c.push(f))
    }
    c = c.join("\n");
    c = a.finish(c);
    c = c.replace(/^\s+\n/, "");
    c = c.replace(/\n\s+$/, "\n");
    return c = c.replace(/[ \t]+\n/g, "\n")
}

function cl(a, b) {
    return b + a.replace(/\n(.)/g, "\n" + b + "$1")
}

function bl(a, b) {
    if (!b) return "";
    if (b.disabled) return bl(a, he(b));
    var c = a[b.type].call(b, b);
    if (da(c)) return [a.Fb(b, c[0]), c[1]];
    if (p(c)) return a.Fb(b, c);
    if (null === c) return ""
}

function W(a, b, c) {
    a = Uj(a, b);
    if (!a) return "";
    b = bl(V, a);
    if ("" === b) return "";
    a = b[0];
    b = b[1];
    a && c <= b && (c != b || 0 != c && 99 != c) && (a = "(" + a + ")");
    return a
}

function dl(a, b) {
    var c = bl(V, Uj(a, b));
    c && (c = cl(c, "  "));
    return c
}
$k.prototype.N = "";

function el(a) {
    var b = V;
    b.N += a + ","
}

function fl(a, b) {
    var c = V;
    if (!c.j[a]) {
        var d = gl(c.u, a, c.dd);
        c.T[a] = d;
        for (var d = b.join("\n").replace(c.dc, d), e; e != d;) e = d, d = d.replace(/^((  )*)  /gm, "$1  ");
        c.j[a] = d
    }
    return c.T[a]
};
var Ih = 5,
    Fe = 20,
    me = 250,
    dk = 30,
    Mi = 100,
    ci = 96,
    di = 124,
    ei = "sprites.png",
    de = [, 2, 1, 4, 3];

function hl(a, b) {
    this.i = b || "";
    this.h = Object.create(null);
    if (a)
        for (var c = a.split(","), d = 0; d < c.length; d++) this.h[c[d]] = !0;
    this.reset()
}
hl.prototype.reset = function() {
    this.ub = Object.create(null);
    this.g = Object.create(null)
};
hl.prototype.getName = function(a, b) {
    var c = a.toLowerCase() + "_" + b,
        d = "VARIABLE" == b ? this.i : "";
    if (c in this.ub) return d + this.ub[c];
    var e = gl(this, a, b);
    this.ub[c] = e.substr(d.length);
    return e
};

function gl(a, b, c) {
    b ? (b = encodeURI(b.replace(/ /g, "_")).replace(/[^\w]/g, "_"), -1 != "0123456789".indexOf(b[0]) && (b = "my_" + b)) : b = "unnamed";
    for (var d = ""; a.g[b + d] || b + d in a.h;) d = d ? d + 1 : 2;
    b += d;
    a.g[b] = !0;
    return ("VARIABLE" == c ? a.i : "") + b
};

function il(a) {
    a = a.Nc();
    for (var b = [], c = [], d = 0; d < a.length; d++)
        if (a[d].Fg) {
            var e = a[d].Fg();
            e && (e[2] ? b.push(e) : c.push(e))
        }
    c.sort(jl);
    b.sort(jl);
    return [c, b]
}

function jl(a, b) {
    return a[0].toLowerCase().localeCompare(b[0].toLowerCase())
}

function kl(a) {
    function b(a, b) {
        for (var d = 0; d < a.length; d++) {
            var l = a[d][0],
                n = a[d][1],
                m = x("block");
            m.setAttribute("type", b);
            m.setAttribute("gap", 16);
            var q = x("mutation");
            q.setAttribute("name", l);
            m.appendChild(q);
            for (l = 0; l < n.length; l++) {
                var r = x("arg");
                r.setAttribute("name", n[l]);
                q.appendChild(r)
            }
            c.push(m)
        }
    }
    var c = [];
    if (S.procedures_defnoreturn) {
        var d = x("block");
        d.setAttribute("type", "procedures_defnoreturn");
        d.setAttribute("gap", 16);
        c.push(d)
    }
    S.procedures_defreturn && (d = x("block"), d.setAttribute("type",
        "procedures_defreturn"), d.setAttribute("gap", 16), c.push(d));
    S.procedures_ifreturn && (d = x("block"), d.setAttribute("type", "procedures_ifreturn"), d.setAttribute("gap", 16), c.push(d));
    c.length && c[c.length - 1].setAttribute("gap", 24);
    a = il(a);
    b(a[0], "procedures_callnoreturn");
    b(a[1], "procedures_callreturn");
    return c
};

function Ig(a, b) {
    var c = a.getAttribute("class") || ""; - 1 == (" " + c + " ").indexOf(" " + b + " ") && (c && (c += " "), a.setAttribute("class", c + b))
}

function Qi(a, b) {
    var c = a.getAttribute("class");
    if (-1 != (" " + c + " ").indexOf(" " + b + " ")) {
        for (var c = c.split(/\s+/), d = 0; d < c.length; d++) c[d] && c[d] != b || (c.splice(d, 1), d--);
        c.length ? a.setAttribute("class", c.join(" ")) : a.removeAttribute("class")
    }
}

function M(a, b, c, d) {
    var e = c ? function(a) {
        d.call(c, a)
    } : d;
    a.addEventListener(b, e, !1);
    var f = [
        [a, b, e]
    ];
    if (b in Di)
        for (var e = function(a) {
                if (1 == a.changedTouches.length) {
                    var b = a.changedTouches[0];
                    a.clientX = b.clientX;
                    a.clientY = b.clientY
                }
                d.call(c, a);
                a.preventDefault()
            }, k = 0, l; l = Di[b][k]; k++) a.addEventListener(l, e, !1), f.push([a, l, e]);
    return f
}
var Di = {};
Dd && (Di = {
    mousedown: ["touchstart"],
    mousemove: ["touchmove"],
    mouseup: ["touchend", "touchcancel"]
});

function N(a) {
    for (; a.length;) {
        var b = a.pop();
        b[0].removeEventListener(b[1], b[2], !1)
    }
}

function Jg(a) {
    a.preventDefault();
    a.stopPropagation()
}

function zh(a) {
    return "textarea" == a.target.type || "text" == a.target.type || "number" == a.target.type || "email" == a.target.type || "password" == a.target.type || "search" == a.target.type || "tel" == a.target.type || "url" == a.target.type || a.target.isContentEditable
}

function Le(a) {
    var b = new w(0, 0),
        c = a.getAttribute("x");
    c && (b.x = parseInt(c, 10));
    if (c = a.getAttribute("y")) b.y = parseInt(c, 10);
    if (a = (a = a.getAttribute("transform")) && a.match(ll)) b.x += parseFloat(a[1]), a[3] && (b.y += parseFloat(a[3]));
    return b
}
var ll = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*\))?/;

function Vh(a, b) {
    var c = 0,
        d = 0,
        e = 1;
    if (vc(b.Pa, a) || vc(b.g, a)) e = b.scale;
    do {
        var f = Le(a);
        if (a == b.Pa || a == b.g) e = 1;
        c += f.x * e;
        d += f.y * e;
        a = a.parentNode
    } while (a && a != Uh(b));
    return new w(c, d)
}

function J(a, b, c) {
    a = document.createElementNS("http://www.w3.org/2000/svg", a);
    for (var d in b) a.setAttribute(d, b[d]);
    document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
    c && c.appendChild(a);
    return a
}

function yh(a) {
    return a.ctrlKey && Kb ? !0 : 2 == a.button
}

function Th(a, b) {
    var c = b.createSVGPoint();
    c.x = a.clientX;
    c.y = a.clientY;
    var d = b.getScreenCTM(),
        d = d.inverse();
    return c.matrixTransform(d)
}

function Dk(a) {
    if (!a.length) return 0;
    for (var b = a[0].length, c = 1; c < a.length; c++) b = Math.min(b, a[c].length);
    return b
}

function Ek(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || Dk(a), e = 0; e < d; e++) {
        for (var f = a[0][e], k = 1; k < a.length; k++)
            if (f != a[k][e]) return c;
            " " == f && (c = e + 1)
    }
    for (k = 1; k < a.length; k++)
        if ((f = a[k][e]) && " " != f) return c;
    return d
}

function Fk(a, b) {
    if (!a.length) return 0;
    if (1 == a.length) return a[0].length;
    for (var c = 0, d = b || Dk(a), e = 0; e < d; e++) {
        for (var f = a[0].substr(-e - 1, 1), k = 1; k < a.length; k++)
            if (f != a[k].substr(-e - 1, 1)) return c;
            " " == f && (c = e + 1)
    }
    for (k = 1; k < a.length; k++)
        if ((f = a[k].charAt(a[k].length - e - 1)) && " " != f) return c;
    return d
}

function Og() {
    for (var a = ml.length, b = [], c = 0; 20 > c; c++) b[c] = ml.charAt(Math.random() * a);
    return b.join("")
}
var ml = "!#%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
var L = null,
    oj = null,
    nl = null;

function Gg(a, b, c) {
    yk();
    oj = a;
    nl = c;
    L.style.top = cd().y + "px";
    L.style.direction = b ? "rtl" : "ltr";
    L.style.display = "block"
}

function yk() {
    oj && (oj = null, L.style.display = "none", L.style.left = "", L.style.top = "", L.style.height = "", nl && nl(), nl = null, tc(L))
}

function Lg(a) {
    oj == a && yk()
}

function Kg(a, b, c, d, e) {
    b < d.y && (b = d.y);
    e ? a > c.width + d.x && (a = c.width + d.x) : a < d.x && (a = d.x);
    L.style.left = a + "px";
    L.style.top = b + "px";
    L.style.height = c.height - b + d.y + "px"
};

function Nj(a, b) {
    this.B = J("tspan", {}, null);
    this.B.appendChild(document.createTextNode("\u00b0"));
    Nj.w.constructor.call(this, a, b)
}
t(Nj, Mj);
Nj.prototype.ee = function(a) {
    var b;
    a ? b = function(b) {
        var d = a.call(this, b);
        if (null === d) var e = d;
        else void 0 === d && (d = b), e = ol.call(this, d), void 0 === e && (e = d);
        return e === b ? void 0 : e
    } : b = ol;
    Nj.w.ee.call(this, b)
};
Nj.prototype.$c = function() {
    Nj.w.$c.call(this, Jb || Lb || Nb);
    var a = L;
    if (a.firstChild) {
        var a = J("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:html": "http://www.w3.org/1999/xhtml",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                version: "1.1",
                height: "100px",
                width: "100px"
            }, a),
            b = J("circle", {
                cx: 50,
                cy: 50,
                r: 49,
                "class": "blocklyAngleCircle"
            }, a);
        this.i = J("path", {
            "class": "blocklyAngleGauge"
        }, a);
        this.F = J("line", {
            x1: 50,
            y1: 50,
            "class": "blocklyAngleLine"
        }, a);
        for (var c = 0; 360 > c; c += 15) J("line", {
            x1: 99,
            y1: 50,
            x2: 99 - (0 == c % 45 ?
                10 : 5),
            y2: 50,
            "class": "blocklyAngleMarks",
            transform: "rotate(" + c + ",50,50)"
        }, a);
        a.style.marginLeft = "-34px";
        M(a, "click", this, yk);
        M(b, "mousemove", this, this.T);
        M(this.i, "mousemove", this, this.T);
        pl(this)
    }
};
Nj.prototype.T = function(a) {
    var b = this.i.ownerSVGElement.getBoundingClientRect(),
        c = a.clientX - b.left - 50;
    a = a.clientY - b.top - 50;
    b = Math.atan(-a / c);
    isNaN(b) || (b = 180 * b / Math.PI, 0 > c ? b += 180 : 0 < a && (b += 360), b = 15 * Math.round((b - 0) / 15), b = ol(b), vk.value = b, this.va(b), xk(this), this.Ye())
};
Nj.prototype.Eb = function(a) {
    Nj.w.Eb.call(this, a);
    this.h && (pl(this), this.v.s ? this.h.insertBefore(this.B, this.h.firstChild) : this.h.appendChild(this.B), this.u.width = 0)
};

function pl(a) {
    if (a.i) {
        var b = (Number(a.Hc()) + 0) * Math.PI / 180,
            c = ["M ", 50, ",", 50],
            d = 50,
            e = 50;
        if (!isNaN(b)) {
            var f = 0 * Math.PI / 180,
                k = 49 * Math.cos(f),
                l = -49 * Math.sin(f),
                d = d + 49 * Math.cos(b),
                e = e - 49 * Math.sin(b);
            c.push(" l ", k, ",", l, " A ", 49, ",", 49, " 0 ", Math.abs(Math.floor((b - f) / Math.PI) % 2), " ", Number(!1), " ", d, ",", e, " z")
        }
        a.i.setAttribute("d", c.join(""));
        a.F.setAttribute("x2", d);
        a.F.setAttribute("y2", e)
    }
}

function ol(a) {
    a = zk(a);
    null !== a && (a %= 360, 0 > a && (a += 360), 360 < a && (a -= 360), a = String(a));
    return a
};

function ql(a, b, c) {
    Ve.call(this, c);
    this.h = b || rl;
    a instanceof rb || (a = ub(a), b = tb(a).replace(/(\r\n|\r|\n)/g, "<br>"), a = vb(b, a.jd()));
    this.ga = a;
    this.T = this.Sa = !1;
    this.Dd = Bb;
    this.ze = -1
}
t(ql, Ve);
var sl = {};
g = ql.prototype;
g.xa = function() {
    ql.w.xa.call(this);
    this.bd && (tl(this.bd.N, this), this.bd = null);
    this.g = null
};
g.Re = function() {
    var a = this.D();
    if (a) {
        var b = ul(this);
        b && !b.id && (b.id = Ye(this) + ".label");
        sf(a, "treeitem");
        tf(a, "selected", !1);
        tf(a, "expanded", !1);
        tf(a, "level", this.hd());
        b && tf(a, "labelledby", b.id);
        (a = this.He()) && sf(a, "presentation");
        (a = this.Ge()) && sf(a, "presentation");
        if (a = vl(this))
            if (sf(a, "group"), a.hasChildNodes())
                for (a = df(this), b = 1; b <= a; b++) {
                    var c = ef(this, b - 1).D();
                    tf(c, "setsize", a);
                    tf(c, "posinset", b)
                }
    }
};
g.ld = function() {
    var a = this.ef(),
        b = this.i.g,
        c = b.createElement("DIV");
    u ? (Yb(c, Ab(Cb, a)), c.removeChild(c.firstChild)) : Yb(c, a);
    if (1 == c.childNodes.length) c = c.removeChild(c.firstChild);
    else {
        for (a = b.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);
        c = a
    }
    this.g = c
};
g.Ia = function() {
    ql.w.Ia.call(this);
    sl[Ye(this)] = this;
    this.Re()
};
g.wb = function() {
    ql.w.wb.call(this);
    delete sl[Ye(this)]
};
g.fd = function(a, b) {
    var c = ef(this, b - 1),
        d = ef(this, b);
    ql.w.fd.call(this, a, b);
    a.Vc = c;
    a.Jb = d;
    c ? c.Jb = a : this.qc = a;
    d ? d.Vc = a : this.dd = a;
    var e = this.hb();
    e && wl(a, e);
    xl(a, this.hd() + 1);
    if (this.D() && (this.yd(), this.Va())) {
        e = vl(this);
        a.D() || a.ld();
        var f = a.D(),
            k = d && d.D();
        e.insertBefore(f, k);
        this.ba && a.Ia();
        d || (c ? c.yd() : (hd(e, !0), this.Mb(this.Va())))
    }
};
g.add = function(a, b) {
    a.getParent() && a.getParent().removeChild(a);
    this.fd(a, b ? hf(this, b) : df(this));
    return a
};
g.removeChild = function(a) {
    var b = this.hb(),
        c = b ? b.u : null;
    if (c == a || a.contains(c)) b.dc ? (this.select(), Zd(this.Cl, 10, this)) : this.select();
    ql.w.removeChild.call(this, a);
    this.dd == a && (this.dd = a.Vc);
    this.qc == a && (this.qc = a.Jb);
    a.Vc && (a.Vc.Jb = a.Jb);
    a.Jb && (a.Jb.Vc = a.Vc);
    c = !a.Jb;
    a.bd = null;
    a.ze = -1;
    if (b && (tl(b.N, a), this.ba)) {
        b = vl(this);
        if (a.ba) {
            var d = a.D();
            b.removeChild(d);
            a.wb()
        }
        c && (c = ef(this, df(this) - 1)) && c.yd();
        gf(this) || (b.style.display = "none", this.yd(), this.He().className = this.Ce())
    }
    return a
};
g.Cl = function() {
    this.select()
};
g.hd = function() {
    var a = this.ze;
    0 > a && (a = (a = this.getParent()) ? a.hd() + 1 : 0, xl(this, a));
    return a
};

function xl(a, b) {
    if (b != a.ze) {
        a.ze = b;
        var c = yl(a);
        if (c) {
            var d = zl(a) + "px";
            ff(a) ? c.style.paddingRight = d : c.style.paddingLeft = d
        }
        cf(a, function(a) {
            xl(a, b + 1)
        })
    }
}
g.contains = function(a) {
    for (; a;) {
        if (a == this) return !0;
        a = a.getParent()
    }
    return !1
};
g.Oc = function() {
    var a = [];
    cf(this, function(b) {
        a.push(b)
    });
    return a
};
g.select = function() {
    var a = this.hb();
    a && a.pb(this)
};

function Al(a, b) {
    if (a.Sa != b) {
        a.Sa = b;
        Bl(a);
        var c = a.D();
        c && (tf(c, "selected", b), b && (c = a.hb().D(), tf(c, "activedescendant", Ye(a))))
    }
}
g.Va = function() {
    return this.T
};
g.Mb = function(a) {
    var b = a != this.T;
    if (!b || Wd(this, a ? "beforeexpand" : "beforecollapse")) {
        var c;
        this.T = a;
        c = this.hb();
        var d = this.D();
        if (gf(this)) {
            if (!a && c && this.contains(c.u) && this.select(), d) {
                if (c = vl(this))
                    if (hd(c, a), a && this.ba && !c.hasChildNodes()) {
                        var e = [];
                        cf(this, function(a) {
                            e.push(a.ef())
                        });
                        Yb(c, Ab(e));
                        cf(this, function(a) {
                            a.Ia()
                        })
                    }
                this.yd()
            }
        } else(c = vl(this)) && hd(c, !1);
        d && (this.He().className = this.Ce(), tf(d, "expanded", a));
        b && Wd(this, a ? "expand" : "collapse")
    }
};
g.hg = function() {
    var a = this.getParent();
    a && (a.Mb(!0), a.hg())
};
g.ef = function() {
    var a = !this.hb().ma || (this.getParent(), 0) ? this.h.Tg : this.h.Sg,
        b = this.Va() && gf(this),
        a = {
            "class": a,
            style: Cl(this)
        },
        c = [];
    b && cf(this, function(a) {
        c.push(a.ef())
    });
    b = zb("div", a, c);
    return zb("div", {
        "class": this.h.ah,
        id: Ye(this)
    }, [Dl(this), b])
};

function zl(a) {
    return Math.max(0, (a.hd() - 1) * a.h.Uf)
}

function Dl(a) {
    var b = {};
    b["padding-" + (ff(a) ? "right" : "left")] = zl(a) + "px";
    var b = {
            "class": a.Od(),
            style: b
        },
        c = a.If(),
        d = zb("span", {
            style: {
                display: "inline-block"
            },
            "class": a.Ce()
        }),
        e = zb("span", {
            "class": a.h.bh,
            title: null
        }, a.ga);
    a = Ab(e, zb("span", {}, a.Dd));
    return zb("div", b, [c, d, a])
}
g.Od = function() {
    return this.h.Af + (this.Sa ? " " + this.h.eh : "")
};
g.If = function() {
    return zb("span", {
        type: "expand",
        style: {
            display: "inline-block"
        },
        "class": El(this)
    })
};

function El(a) {
    var b = a.hb(),
        c = !b.ma || b == a.getParent() && !1,
        d = a.h,
        e = new pa;
    e.ib(d.Lc, " ", d.Nk, " ");
    if (gf(a)) {
        var f = 0;
        b.hc && (f = a.Va() ? 2 : 1);
        c || (f = a.Jb ? f + 8 : f + 4);
        switch (f) {
            case 1:
                e.ib(d.Rk);
                break;
            case 2:
                e.ib(d.Qk);
                break;
            case 4:
                e.ib(d.Xg);
                break;
            case 5:
                e.ib(d.Pk);
                break;
            case 6:
                e.ib(d.Ok);
                break;
            case 8:
                e.ib(d.Yg);
                break;
            case 9:
                e.ib(d.Tk);
                break;
            case 10:
                e.ib(d.Sk);
                break;
            default:
                e.ib(d.Wg)
        }
    } else c ? e.ib(d.Wg) : a.Jb ? e.ib(d.Yg) : e.ib(d.Xg);
    return e.toString()
}

function Cl(a) {
    var b = a.Va() && gf(a);
    return fb({
        "background-position": Fl(a),
        display: b ? null : "none"
    })
}

function Fl(a) {
    return (a.Jb ? (a.hd() - 1) * a.h.Uf : "-100") + "px 0"
}
g.D = function() {
    var a = ql.w.D.call(this);
    a || (this.g = a = this.i.D(Ye(this)));
    return a
};

function yl(a) {
    return (a = a.D()) ? a.firstChild : null
}
g.Ge = function() {
    var a = yl(this);
    return a ? a.firstChild : null
};
g.He = function() {
    var a = yl(this);
    return a ? a.childNodes[1] : null
};

function ul(a) {
    return (a = yl(a)) && a.lastChild ? a.lastChild.previousSibling : null
}

function vl(a) {
    return (a = a.D()) ? a.lastChild : null
}

function Bl(a) {
    var b = yl(a);
    b && (b.className = a.Od())
}
g.yd = function() {
    var a = this.Ge();
    a && (a.className = El(this));
    if (a = vl(this)) a.style.backgroundPosition = Fl(this)
};
g.ag = function(a) {
    "expand" == a.target.getAttribute("type") && gf(this) ? this.Mb(!this.Va()) : (this.select(), Bl(this))
};
g.zh = function(a) {
    "expand" == a.target.getAttribute("type") && gf(this) || this.Mb(!this.Va())
};

function Gl(a) {
    return a.Va() && gf(a) ? Gl(ef(a, df(a) - 1)) : a
}

function wl(a, b) {
    a.bd != b && (a.bd = b, Hl(b.N, a), cf(a, function(a) {
        wl(a, b)
    }))
}
var rl = {
    Uf: 19,
    dh: "goog-tree-root goog-tree-item",
    $g: "goog-tree-hide-root",
    ah: "goog-tree-item",
    Sg: "goog-tree-children",
    Tg: "goog-tree-children-nolines",
    Af: "goog-tree-row",
    bh: "goog-tree-item-label",
    Lc: "goog-tree-icon",
    Nk: "goog-tree-expand-icon",
    Rk: "goog-tree-expand-icon-plus",
    Qk: "goog-tree-expand-icon-minus",
    Tk: "goog-tree-expand-icon-tplus",
    Sk: "goog-tree-expand-icon-tminus",
    Pk: "goog-tree-expand-icon-lplus",
    Ok: "goog-tree-expand-icon-lminus",
    Yg: "goog-tree-expand-icon-t",
    Xg: "goog-tree-expand-icon-l",
    Wg: "goog-tree-expand-icon-blank",
    yf: "goog-tree-expanded-folder-icon",
    Ug: "goog-tree-collapsed-folder-icon",
    zf: "goog-tree-file-icon",
    Zg: "goog-tree-expanded-folder-icon",
    Vg: "goog-tree-collapsed-folder-icon",
    eh: "selected"
};

function Il(a, b, c) {
    ql.call(this, a, b, c)
}
t(Il, ql);
Il.prototype.hb = function() {
    if (this.bd) return this.bd;
    var a = this.getParent();
    return a && (a = a.hb()) ? (wl(this, a), a) : null
};
Il.prototype.Ce = function() {
    var a = this.Va(),
        b = this.Ed;
    if (a && b) return b;
    b = this.qe;
    if (!a && b) return b;
    b = this.h;
    if (gf(this)) {
        if (a && b.yf) return b.Lc + " " + b.yf;
        if (!a && b.Ug) return b.Lc + " " + b.Ug
    } else if (b.zf) return b.Lc + " " + b.zf;
    return ""
};
var ke = "",
    je = !0,
    G = 0,
    Vg = [];

function H(a) {
    0 == G && (Vg.length || setTimeout(Jl, 0), Vg.push(a))
}

function Jl() {
    for (var a = Ug(Vg, !0), b = Vg.length = 0, c; c = a[b]; b++) {
        var d = Pg[c.g] || null;
        if (d) {
            c.cg && (d.j.push(c), d.F.length = 0, 1024 < d.j.length && d.j.unshift());
            for (var e = 0, f; f = d.B[e]; e++) f(c)
        }
    }
}

function Ug(a, b) {
    var c = Ya(a);
    b || c.reverse();
    for (var d = 0, e; e = c[d]; d++)
        for (var f = d + 1, k; k = c[f]; f++) e.type == k.type && e.h == k.h && e.g == k.g && ("move" == e.type ? (e.F = k.F, e.B = k.B, e.u = k.u, c.splice(f, 1), f--) : "change" == e.type && e.element == k.element && e.name == k.name ? (e.newValue = k.newValue, c.splice(f, 1), f--) : "ui" != e.type || "click" != k.element || "commentOpen" != e.element && "mutatorOpen" != e.element && "warningOpen" != e.element || (e.newValue = k.newValue, c.splice(f, 1), f--));
    for (d = c.length - 1; 0 <= d; d--) c[d].I() && c.splice(d, 1);
    b || c.reverse();
    for (d = 1; e = c[d]; d++) "change" == e.type && "mutation" == e.element && c.unshift(c.splice(d, 1)[0]);
    return c
}

function F(a) {
    ke = "boolean" == typeof a ? a ? Og() : "" : a
}

function Kl(a) {
    var b = [];
    a = a.bb();
    for (var c = 0, d; d = a[c]; c++) b[c] = d.id;
    return b
}

function Ll(a) {
    a && (this.h = a.id, this.g = a.A.id);
    this.i = ke;
    this.cg = je
}
Ll.prototype.I = function() {
    return !1
};
Ll.prototype.j = function() {};

function Mg(a) {
    a && (Mg.w.constructor.call(this, a), this.K = Xg(a), this.H = Kl(a))
}
t(Mg, Ll);
Mg.prototype.type = "create";
Mg.prototype.j = function(a) {
    var b = Pg[this.g] || null;
    if (a) a = x("xml"), a.appendChild(this.K), eh(a, b);
    else {
        a = 0;
        for (var c; c = this.H[a]; a++) {
            var d = b.Rb[c] || null;
            d ? d.C(!1, !1) : c == this.h && console.warn("Can't uncreate non-existant block: " + c)
        }
    }
};

function Dj(a) {
    if (a) {
        if (a.getParent()) throw "Connected blocks cannot be deleted.";
        Dj.w.constructor.call(this, a);
        this.K = Xg(a);
        this.H = Kl(a)
    }
}
t(Dj, Ll);
Dj.prototype.type = "delete";
Dj.prototype.j = function(a) {
    var b = Pg[this.g] || null;
    if (a) {
        a = 0;
        for (var c; c = this.H[a]; a++) {
            var d = b.Rb[c] || null;
            d ? d.C(!1, !1) : c == this.h && console.warn("Can't delete non-existant block: " + c)
        }
    } else a = x("xml"), a.appendChild(this.K), eh(a, b)
};

function Wi(a, b, c, d, e) {
    a && (Wi.w.constructor.call(this, a), this.element = b, this.name = c, this.H = d, this.newValue = e)
}
t(Wi, Ll);
Wi.prototype.type = "change";
Wi.prototype.I = function() {
    return this.H == this.newValue
};
Wi.prototype.j = function(a) {
    var b = (Pg[this.g] || null).Rb[this.h] || null;
    if (b) switch (b.Ib && b.Ib.$(!1), a = a ? this.newValue : this.H, this.element) {
        case "field":
            (b = lh(b, this.name)) ? b.va(a): console.warn("Can't set non-existant field: " + this.name);
            break;
        case "comment":
            b.be(a || null);
            break;
        case "collapsed":
            b.Yc(a);
            break;
        case "disabled":
            b.xd(a);
            break;
        case "inline":
            b.Nb(a);
            break;
        case "mutation":
            var c = "";
            b.T && (c = (c = b.T()) && bh(c));
            if (b.ga) {
                a = a || "<mutation></mutation>";
                var d = ch("<xml>" + a + "</xml>");
                b.ga(d.firstChild)
            }
            H(new Wi(b,
                "mutation", null, c, a));
            break;
        default:
            console.warn("Unknown change type: " + this.element)
    } else console.warn("Can't change non-existant block: " + this.h)
};

function ne(a) {
    a && (ne.w.constructor.call(this, a), a = Ml(this), this.N = a.Bh, this.K = a.uh, this.H = a.Rg)
}
t(ne, Ll);
ne.prototype.type = "move";

function pe(a) {
    var b = Ml(a);
    a.F = b.Bh;
    a.B = b.uh;
    a.u = b.Rg
}

function Ml(a) {
    var b = (Pg[a.g] || null).Rb[a.h] || null;
    a = {};
    var c = b.getParent();
    if (c) {
        a.Bh = c.id;
        a: {
            for (var d = 0, e; e = c.h[d]; d++)
                if (e.J && E(e.J) == b) {
                    b = e;
                    break a
                }
            b = null
        }
        b && (a.uh = b.name)
    } else a.Rg = b.oa();
    return a
}
ne.prototype.I = function() {
    return this.N == this.F && this.K == this.B && fc(this.H, this.u)
};
ne.prototype.j = function(a) {
    var b = Pg[this.g] || null,
        c = b.Rb[this.h] || null;
    if (c) {
        var d = a ? this.F : this.N,
            e = a ? this.B : this.K;
        a = a ? this.u : this.H;
        var f = null;
        if (d && (f = b.Rb[d] || null, !f)) {
            console.warn("Can't connect to non-existant block: " + d);
            return
        }
        c.getParent() && Be(c);
        if (a) e = c.oa(), c.moveBy(a.x - e.x, a.y - e.y);
        else {
            var c = c.L || c.S,
                k;
            if (e) {
                if (b = mh(f, e)) k = b.J
            } else 4 == c.type && (k = f.g);
            k ? c.connect(k) : console.warn("Can't connect to non-existant input: " + e)
        }
    } else console.warn("Can't move non-existant block: " + this.h)
};

function Vi(a, b, c, d) {
    Vi.w.constructor.call(this, a);
    this.element = b;
    this.newValue = d;
    this.cg = !1
}
t(Vi, Ll);
Vi.prototype.type = "ui";

function ri(a) {
    a.Ca = this.Nd.bind(this);
    a.Ec = this.Hl.bind(this);
    this.m = new ii(a);
    this.m.Vf = !0;
    this.s = !!a.s;
    this.g = a.mc;
    this.i = a.ea;
    this.H = [];
    this.se = [];
    this.j = [];
    this.K = []
}
var Nl, Ol, Pl, Ql, Rl, Sl;
g = ri.prototype;
g.Hd = !0;
g.U = 8;
g.gc = ri.prototype.U;
g.Y = 0;
g.Pb = 0;

function si(a) {
    a.o = J("g", {
        "class": "blocklyFlyout"
    }, null);
    a.h = J("path", {
        "class": "blocklyFlyoutBackground"
    }, a.o);
    a.o.appendChild(ji(a.m));
    return a.o
}
g.G = function(a) {
    this.B = a;
    this.m.K = a;
    this.u = new Kh(this.m, this.g, !1);
    this.lc();
    Array.prototype.push.apply(this.H, M(this.o, "wheel", this, this.Pl));
    this.Hd || (this.F = this.Hf.bind(this), this.B.Qb(this.F));
    Array.prototype.push.apply(this.H, M(this.o, "mousedown", this, this.Ph))
};
g.C = function() {
    this.lc();
    N(this.H);
    this.F && (this.B.vd(this.F), this.F = null);
    this.u && (this.u.C(), this.u = null);
    this.m && (this.m.K = null, this.m.C(), this.m = null);
    this.o && (y(this.o), this.o = null);
    this.B = this.h = null
};
g.Hb = function() {
    return this.Y
};
g.Pc = function() {
    return this.Pb
};
g.Nd = function() {
    if (!this.Z()) return null;
    try {
        var a = this.m.Pa.getBBox()
    } catch (f) {
        a = {
            height: 0,
            y: 0,
            width: 0,
            x: 0
        }
    }
    var b = 2,
        c = 2;
    if (this.g) {
        1 == this.i && (b = 0);
        var d = this.Pb;
        0 == this.i && (d += this.gc - 2);
        var e = this.Y - 4
    } else c = 0, d = this.Pb - 4, e = this.Y, this.s || (e -= 2);
    return {
        ya: d,
        aa: e,
        Ua: (a.height + 2 * this.gc) * this.m.scale,
        ab: (a.width + 2 * this.gc) * this.m.scale,
        $b: -this.m.scrollY,
        Ga: -this.m.scrollX,
        tb: 0,
        sb: 0,
        Na: b,
        Ha: c
    }
};
g.Hl = function(a) {
    var b = this.Nd();
    b && (!this.g && fa(a.y) ? this.m.scrollY = -b.Ua * a.y : this.g && fa(a.x) && (this.m.scrollX = -b.ab * a.x), this.m.translate(this.m.scrollX + b.Ha, this.m.scrollY + b.Na))
};
g.position = function() {
    if (this.Z()) {
        var a = this.B.Ca();
        if (a) {
            var b = this.g ? a.aa : this.Y,
                b = b - this.U;
            3 == this.i && (b *= -1);
            var c = this.g ? this.Pb : a.ya;
            if (this.g) {
                var d = 0 == this.i,
                    e = ["M 0," + (d ? 0 : this.U)];
                d ? (e.push("h", b + this.U), e.push("v", c), e.push("a", this.U, this.U, 0, 0, 1, -this.U, this.U), e.push("h", -1 * (b - this.U)), e.push("a", this.U, this.U, 0, 0, 1, -this.U, -this.U)) : (e.push("a", this.U, this.U, 0, 0, 1, this.U, -this.U), e.push("h", b - this.U), e.push("a", this.U, this.U, 0, 0, 1, this.U, this.U), e.push("v", c - this.U), e.push("h", -b -
                    this.U))
            } else d = 3 == this.i, e = ["M " + (d ? this.Y : 0) + ",0"], e.push("h", b), e.push("a", this.U, this.U, 0, 0, d ? 0 : 1, d ? -this.U : this.U, this.U), e.push("v", Math.max(0, c - 2 * this.U)), e.push("a", this.U, this.U, 0, 0, d ? 0 : 1, d ? this.U : -this.U, this.U), e.push("h", -b);
            e.push("z");
            this.h.setAttribute("d", e.join(" "));
            b = a.Ha;
            3 == this.i && (b += a.aa, b -= this.Y);
            c = a.Na;
            1 == this.i && (c += a.ya, c -= this.Pb);
            this.o.setAttribute("transform", "translate(" + b + "," + c + ")");
            this.g ? this.Y = a.aa : this.Pb = a.ya;
            this.u && this.u.resize()
        }
    }
};

function Xk(a) {
    a.u.set(a.g && a.s ? Infinity : 0)
}
g.Pl = function(a) {
    var b = this.g ? a.deltaX : a.deltaY;
    if (b) {
        Ib && (b *= 10);
        var c = this.Nd(),
            b = this.g ? c.Ga + b : c.$b + b,
            b = Math.min(b, this.g ? c.ab - c.aa : c.Ua - c.ya),
            b = Math.max(b, 0);
        this.u.set(b)
    }
    a.preventDefault();
    a.stopPropagation()
};
g.Z = function() {
    return this.o && "block" == this.o.style.display
};
g.lc = function() {
    if (this.Z()) {
        this.o.style.display = "none";
        for (var a = 0, b; b = this.j[a]; a++) N(b);
        this.j.length = 0;
        this.I && (this.m.vd(this.I), this.I = null)
    }
};
g.show = function(a) {
    this.lc();
    Tl(this);
    "VARIABLE" == a ? a = Ik(this.m.K) : "PROCEDURE" == a && (a = kl(this.m.K));
    this.o.style.display = "block";
    for (var b = [], c = [], d = this.K.length = 0, e; e = a[d]; d++)
        if (e.tagName && "BLOCK" == e.tagName.toUpperCase()) {
            var f = ze(e, this.m);
            f.disabled && this.K.push(f);
            b.push(f);
            e = parseInt(e.getAttribute("gap"), 10);
            c.push(isNaN(e) ? 3 * this.gc : e)
        }
    Ul(this, b, c);
    this.j.push(M(this.h, "mouseover", this, function() {
        for (var a = Rg(this.m, !1), b = 0, c; c = a[b]; b++) c.Xe()
    }));
    this.g ? this.Pb = 0 : this.Y = 0;
    this.eg();
    Vl(this,
        Rg(this.m, !1));
    this.Hf();
    this.position();
    this.I = this.eg.bind(this);
    this.m.Qb(this.I)
};

function Ul(a, b, c) {
    for (var d = a.gc * a.m.scale, e = a.s ? d : d + 8, f = 0, k; k = b[f]; f++) {
        for (var l = k.bb(), n = 0, m; m = l[n]; n++) m.F = !0;
        k.V();
        n = k.o;
        l = Ji(k);
        m = k.L ? 8 : 0;
        a.g && (e += m);
        k.moveBy(a.g && a.s ? -e : e, d);
        a.g ? e += l.width + c[f] - m : d += l.height + c[f];
        m = J("rect", {
            "fill-opacity": 0
        }, null);
        m.Fa = k;
        jj(m);
        a.m.Pa.insertBefore(m, k.o);
        k.B = m;
        a.se[f] = m;
        l = a;
        l.Hd ? (l.j.push(M(n, "mousedown", null, Wl(l, k))), l.j.push(M(m, "mousedown", null, Wl(l, k)))) : (l.j.push(M(n, "mousedown", null, Xl(l, k))), l.j.push(M(m, "mousedown", null, Xl(l, k))));
        l.j.push(M(n, "mouseover",
            k, k.sf));
        l.j.push(M(n, "mouseout", k, k.Xe));
        l.j.push(M(m, "mouseover", k, k.sf));
        l.j.push(M(m, "mouseout", k, k.Xe))
    }
}

function Tl(a) {
    for (var b = Rg(a.m, !1), c = 0, d; d = b[c]; c++) d.A == a.m && d.C(!1, !1);
    for (b = 0; c = a.se[b]; b++) y(c);
    a.se.length = 0
}

function Xl(a, b) {
    return function(c) {
        zi();
        Dh();
        yh(c) ? ek(b, c) : (Ah(Bh), Nl = c, Ol = b, Pl = a, Ql = M(document, "mouseup", this, a.Rh), Rl = M(document, "mousemove", this, a.zl));
        c.stopPropagation()
    }
}
g.Ph = function(a) {
    yh(a) || (Dh(!0), Yl(), this.T = a.clientY, this.N = a.clientX, Sl = M(document, "mousemove", this, this.Qh), Ql = M(document, "mouseup", this, Yl), a.preventDefault(), a.stopPropagation())
};
g.Rh = function() {
    2 == I || oj || H(new Vi(Ol, "click", 0, void 0));
    zi()
};
g.Qh = function(a) {
    var b = this.Nd();
    if (this.g) {
        if (!(0 > b.ab - b.aa)) {
            var c = a.clientX - this.N;
            this.N = a.clientX;
            a = b.Ga - c;
            a = cc(a, 0, b.ab - b.aa);
            this.u.set(a)
        }
    } else 0 > b.Ua - b.ya || (c = a.clientY - this.T, this.T = a.clientY, a = b.$b - c, a = cc(a, 0, b.Ua - b.ya), this.u.set(a))
};
g.zl = function(a) {
    if ("mousemove" == a.type && 1 >= a.clientX && 0 == a.clientY && 0 == a.button) a.stopPropagation();
    else {
        var b = a.clientX - Nl.clientX;
        a = a.clientY - Nl.clientY;
        Math.sqrt(b * b + a * a) > Ih && Wl(Pl, Ol)(Nl)
    }
};

function Wl(a, b) {
    return function(c) {
        if (!yh(c) && !b.disabled) {
            G++;
            var d = a.B,
                e = b.o;
            if (!e) throw "originBlock is not rendered.";
            var e = Vh(e, d),
                f = a.m.scrollX,
                k = a.m.scale;
            e.x += f / k - f;
            3 == a.i && (f = d.Ca().aa - a.Y, k = d.scale, e.x += f / k - f);
            f = a.m.scrollY;
            k = a.m.scale;
            e.y += f / k - f;
            1 == a.i && (f = d.Ca().ya - a.Pb, k = d.scale, e.y += f / k - f);
            k = fe(b);
            k = ze(k, d);
            f = k.o;
            if (!f) throw "block is not rendered.";
            f = Vh(f, d);
            f.x += d.scrollX / d.scale - d.scrollX;
            f.y += d.scrollY / d.scale - d.scrollY;
            d.W && !d.Da && (f.x += d.W.Hb() / d.scale, f.y += d.W.Pc() / d.scale);
            k.moveBy(e.x -
                f.x, e.y - f.y);
            G--;
            0 == G && (F(!0), H(new Mg(k)));
            a.Hd ? a.lc() : a.Hf();
            k.Ad(c);
            I = 2;
            ak(k, !0)
        }
    }
}
g.Hf = function() {
    for (var a = Tg(this.B), b = Rg(this.m, !1), c = 0, d; d = b[c]; c++)
        if (-1 == this.K.indexOf(d)) {
            var e = d.bb();
            d.xd(e.length > a)
        }
};
g.Md = function() {
    var a = this.o.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 0 == this.i ? new Yc(-1E9, c - 1E9, 2E9, 1E9 + a) : 1 == this.i ? new Yc(-1E9, c, 2E9, 1E9 + a) : 2 == this.i ? new Yc(b - 1E9, -1E9, 1E9 + d, 2E9) : new Yc(b, -1E9, 1E9 + d, 2E9)
};

function Yl() {
    Ql && (N(Ql), Ql = null);
    Rl && (N(Rl), Rl = null);
    Sl && (N(Sl), Sl = null);
    Ql && (N(Ql), Ql = null);
    Pl = Ol = Nl = null
}
g.eg = function() {
    var a = Rg(this.m, !1);
    if (this.g) {
        this.m.scale = this.B.scale;
        for (var b = 0, c = 0, d; d = a[c]; c++) b = Math.max(b, Ji(d).height);
        b += 1.5 * this.gc;
        b *= this.m.scale;
        b += P;
        if (this.Pb != b) {
            for (c = 0; d = a[c]; c++) {
                var e = Ji(d);
                if (d.B) {
                    d.B.setAttribute("width", e.width);
                    d.B.setAttribute("height", e.height);
                    var f = d.L ? 8 : 0,
                        k = d.oa();
                    d.B.setAttribute("y", k.y);
                    d.B.setAttribute("x", this.s ? k.x - e.width + f : k.x - f);
                    (e = d.hc ? 15 : 0) && d.moveBy(0, e);
                    d.B.setAttribute("y", k.y)
                }
            }
            this.Pb = b;
            jh(this.m)
        }
    } else {
        this.m.scale = this.B.scale;
        for (c =
            b = 0; d = a[c]; c++) k = Ji(d).width, d.L && (k -= 8), b = Math.max(b, k);
        b += 1.5 * this.gc + 8;
        b *= this.m.scale;
        b += P;
        if (this.Y != b) {
            for (c = 0; d = a[c]; c++) k = Ji(d), this.s && (e = d.oa().x, f = b - this.gc, f /= this.m.scale, f -= 8, d.moveBy(f - e, 0)), d.B && (d.B.setAttribute("width", k.width), d.B.setAttribute("height", k.height), f = d.L ? 8 : 0, e = d.oa(), d.B.setAttribute("x", this.s ? e.x - k.width + f : e.x - f), (k = d.hc ? 15 : 0) && d.moveBy(0, k), d.B.setAttribute("y", e.y));
            this.Y = b;
            jh(this.m)
        }
    }
};

function Vl(a, b) {
    if (a.g && a.s) {
        a.position();
        try {
            var c = a.m.Pa.getBBox()
        } catch (f) {
            c = {
                height: 0,
                y: 0,
                width: 0,
                x: 0
            }
        }
        for (var c = Math.max(-c.x + a.gc, a.Y / a.m.scale), d = 0, e; e = b[d]; d++) e.moveBy(c, 0), e.B && e.B.setAttribute("x", c + Number(e.B.getAttribute("x")))
    }
};

function Zl(a) {
    if (a.Pd && "function" == typeof a.Pd) return a.Pd();
    if (p(a)) return a.split("");
    if (ea(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    b = [];
    c = 0;
    for (d in a) b[c++] = a[d];
    return b
};

function $l(a) {
    this.i = void 0;
    this.Ta = {};
    if (a) {
        var b;
        if (a.Ie && "function" == typeof a.Ie) b = a.Ie();
        else if (a.Pd && "function" == typeof a.Pd) b = void 0;
        else if (ea(a) || p(a)) {
            b = [];
            for (var c = a.length, d = 0; d < c; d++) b.push(d)
        } else
            for (d in b = [], c = 0, a) b[c++] = d;
        a = Zl(a);
        for (c = 0; c < b.length; c++) this.set(b[c], a[c])
    }
}
g = $l.prototype;
g.set = function(a, b) {
    am(this, a, b, !1)
};
g.add = function(a, b) {
    am(this, a, b, !0)
};

function am(a, b, c, d) {
    for (var e = 0; e < b.length; e++) {
        var f = b.charAt(e);
        a.Ta[f] || (a.Ta[f] = new $l);
        a = a.Ta[f]
    }
    if (d && void 0 !== a.i) throw Error('The collection already contains the key "' + b + '"');
    a.i = c
}

function bm(a, b) {
    var c;
    a: {
        c = a;
        for (var d = 0; d < b.length; d++)
            if (c = c.Ta[b.charAt(d)], !c) {
                c = void 0;
                break a
            }
    }
    return c ? c.i : void 0
}
g.Pd = function() {
    var a = [];
    cm(this, a);
    return a
};

function cm(a, b) {
    void 0 !== a.i && b.push(a.i);
    for (var c in a.Ta) cm(a.Ta[c], b)
}
g.Ie = function(a) {
    var b = [];
    if (a) {
        for (var c = this, d = 0; d < a.length; d++) {
            var e = a.charAt(d);
            if (!c.Ta[e]) return [];
            c = c.Ta[e]
        }
        dm(c, a, b)
    } else dm(this, "", b);
    return b
};

function dm(a, b, c) {
    void 0 !== a.i && c.push(b);
    for (var d in a.Ta) dm(a.Ta[d], b + d, c)
}
g.clear = function() {
    this.Ta = {};
    this.i = void 0
};
g.clone = function() {
    return new $l(this)
};
g.wh = function() {
    var a;
    if (a = void 0 === this.i) a: {
        a = this.Ta;
        for (var b in a) {
            a = !1;
            break a
        }
        a = !0
    }
    return a
};

function em() {
    this.h = new $l;
    this.g = "";
    this.u = this.B = null;
    this.i = this.j = 0
}

function Hl(a, b) {
    var c = Ca(tb(b.ga));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = bm(a.h, c);
        d ? d.push(b) : a.h.set(c, [b])
    }
}

function tl(a, b) {
    var c = Ca(tb(b.ga));
    if (c && !/^[\s\xa0]*$/.test(null == c ? "" : String(c))) {
        var c = c.toLowerCase(),
            d = bm(a.h, c);
        if (d) {
            for (var e = df(b), f = 0; f < e; f++) tl(a, ef(b, f));
            Wa(d, b);
            if (!d.length) {
                for (var e = c, f = a.h, c = [], k = 0; k < e.length; k++) {
                    d = e.charAt(k);
                    if (!f.Ta[d]) throw Error('The collection does not have the key "' + e + '"');
                    c.push([f, d]);
                    f = f.Ta[d]
                }
                for (delete f.i; 0 < c.length;)
                    if (d = c.pop(), e = d[0], d = d[1], e.Ta[d].wh()) delete e.Ta[d];
                    else break
            }
        }
    }
}

function fm(a, b) {
    var c = !1,
        d = a.h.Ie(b);
    d && d.length && (a.i = 0, a.j = 0, c = gm(a, bm(a.h, d[0]))) && (a.B = d);
    return c
}

function gm(a, b) {
    var c;
    b && (a.i < b.length && (c = b[a.i], a.u = b), c && (c.hg(), c.select()));
    return !!c
}
em.prototype.clear = function() {
    this.g = ""
};
var hm = "StopIteration" in h ? h.StopIteration : {
    message: "StopIteration",
    stack: ""
};

function im() {}
im.prototype.next = function() {
    throw hm;
};
im.prototype.Gg = function() {
    return this
};

function jm(a) {
    if (a instanceof im) return a;
    if ("function" == typeof a.Gg) return a.Gg();
    if (ea(a)) {
        var b = 0,
            c = new im;
        c.next = function() {
            for (;;) {
                if (b >= a.length) throw hm;
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    throw Error("Not implemented");
}

function km(a) {
    try {
        return jm(a).next()
    } catch (b) {
        if (b != hm) throw b;
        return null
    }
};

function lm(a) {
    Vd.call(this);
    this.g = a;
    a = u ? "focusout" : "blur";
    this.h = Kd(this.g, u ? "focusin" : "focus", this, !u);
    this.i = Kd(this.g, a, this, !u)
}
t(lm, Vd);
lm.prototype.handleEvent = function(a) {
    var b = new Ed(a.h);
    b.type = "focusin" == a.type || "focus" == a.type ? "focusin" : "focusout";
    Wd(this, b)
};
lm.prototype.xa = function() {
    lm.w.xa.call(this);
    Rd(this.h);
    Rd(this.i);
    delete this.g
};

function mm(a, b, c) {
    ql.call(this, a, b, c);
    this.T = !0;
    Al(this, !0);
    this.u = this;
    this.N = new em;
    this.Fb = this.ec = null;
    this.dc = !1;
    this.H = this.hc = this.ma = !0;
    if (u) try {
        document.execCommand("BackgroundImageCache", !1, !0)
    } catch (d) {}
}
t(mm, ql);
g = mm.prototype;
g.hb = function() {
    return this
};
g.hd = function() {
    return 0
};
g.hg = function() {};
g.fl = function() {
    this.dc = !0;
    lf(this.D(), "focused");
    this.u && this.u.select()
};
g.al = function() {
    this.dc = !1;
    nf(this.D(), "focused")
};
g.Va = function() {
    return !this.H || mm.w.Va.call(this)
};
g.Mb = function(a) {
    this.H ? mm.w.Mb.call(this, a) : this.T = a
};
g.If = function() {
    return Bb
};
g.He = function() {
    var a = yl(this);
    return a ? a.firstChild : null
};
g.Ge = function() {
    return null
};
g.yd = function() {};
g.Od = function() {
    return mm.w.Od.call(this) + (this.H ? "" : " " + this.h.$g)
};
g.Ce = function() {
    var a = this.Va(),
        b = this.Ed;
    if (a && b) return b;
    b = this.qe;
    if (!a && b) return b;
    b = this.h;
    return a && b.Zg ? b.Lc + " " + b.Zg : !a && b.Vg ? b.Lc + " " + b.Vg : ""
};
g.pb = function(a) {
    if (this.u != a) {
        var b = !1;
        this.u && (b = null == this.u, Al(this.u, !1));
        if (this.u = a) Al(a, !0), b && a.select();
        Wd(this, "change")
    }
};

function nm(a) {
    0 != a.ma && (a.ma = !1, a.ba && om(a))
}

function om(a) {
    function b(a) {
        var e = vl(a);
        if (e) {
            var f = !c || (a.getParent(), 0) ? a.h.Tg : a.h.Sg;
            e.className = f;
            if (e = a.Ge()) e.className = El(a)
        }
        cf(a, b)
    }
    var c = a.ma;
    b(a)
}

function pm(a) {
    0 != a.hc && (a.hc = !1, a.ba && om(a))
}

function qm(a) {
    if (0 != a.H) {
        a.H = !1;
        if (a.ba) {
            var b = yl(a);
            b && (b.className = a.Od())
        }
        a.u == a && ef(a, 0) && a.pb(ef(a, 0))
    }
}
g.Re = function() {
    mm.w.Re.call(this);
    var a = this.D();
    sf(a, "tree");
    tf(a, "labelledby", ul(this).id)
};
g.Ia = function() {
    mm.w.Ia.call(this);
    var a = this.D();
    a.className = this.h.dh;
    a.setAttribute("hideFocus", "true");
    a = this.D();
    a.tabIndex = 0;
    var b = this.ec = new Kf(a),
        c = this.Fb = new lm(a);
    Ze(this).X(c, "focusout", this.al).X(c, "focusin", this.fl).X(b, "key", this.Ab).X(a, "mousedown", this.Of).X(a, "click", this.Of).X(a, "dblclick", this.Of);
    this.Re()
};
g.wb = function() {
    mm.w.wb.call(this);
    this.ec.C();
    this.ec = null;
    this.Fb.C();
    this.Fb = null
};
g.Of = function(a) {
    var b = rm(this, a);
    if (b) switch (a.type) {
        case "mousedown":
            b.ag(a);
            break;
        case "click":
            a.preventDefault();
            break;
        case "dblclick":
            b.zh(a)
    }
};
g.Ab = function(a) {
    var b;
    b = this.N;
    var c = !1;
    switch (a.g) {
        case 40:
        case 38:
            if (a.ctrlKey) {
                var c = 40 == a.g ? 1 : -1,
                    d = b.B;
                if (d) {
                    var e = null,
                        f = !1;
                    if (b.u) {
                        var k = b.i + c;
                        0 <= k && k < b.u.length ? (b.i = k, e = b.u) : f = !0
                    }
                    e || (k = b.j + c, 0 <= k && k < d.length && (b.j = k), d.length > b.j && (e = bm(b.h, d[b.j])), e && e.length && f && (b.i = -1 == c ? e.length - 1 : 0));
                    gm(b, e) && (b.B = d)
                }
                c = !0
            }
            break;
        case 8:
            d = b.g.length - 1;
            c = !0;
            0 < d ? (b.g = b.g.substring(0, d), fm(b, b.g)) : 0 == d ? b.g = "" : c = !1;
            break;
        case 27:
            b.g = "", c = !0
    }
    if (!(b = c) && (b = this.u)) {
        b = this.u;
        c = !0;
        switch (a.g) {
            case 39:
                if (a.altKey) break;
                gf(b) && (b.Va() ? ef(b, 0).select() : b.Mb(!0));
                break;
            case 37:
                if (a.altKey) break;
                gf(b) && b.Va() ? b.Mb(!1) : (d = b.getParent(), e = b.hb(), d && (e.H || d != e) && d.select());
                break;
            case 40:
                a: if (gf(b) && b.Va()) d = ef(b, 0);
                    else {
                        for (d = b; d != b.hb();) {
                            e = d.Jb;
                            if (null != e) {
                                d = e;
                                break a
                            }
                            d = d.getParent()
                        }
                        d = null
                    }
                d && d.select();
                break;
            case 38:
                d = b.Vc;
                null != d ? d = Gl(d) : (d = b.getParent(), e = b.hb(), d = !e.H && d == e || b == e ? null : d);
                d && d.select();
                break;
            default:
                c = !1
        }
        c && (a.preventDefault(), (e = b.hb()) && e.N.clear());
        b = c
    }
    b || (b = this.N, c = !1, a.ctrlKey || a.altKey ||
        (d = String.fromCharCode(a.B || a.g).toLowerCase(), (1 == d.length && " " <= d && "~" >= d || "\u0080" <= d && "\ufffd" >= d) && (" " != d || b.g) && (b.g += d, c = fm(b, b.g))), b = c);
    b && a.preventDefault();
    return b
};

function rm(a, b) {
    for (var c, d = b.target; null != d;) {
        if (c = sl[d.id]) return c;
        if (d == a.D()) break;
        d = d.parentNode
    }
    return null
}
g.createNode = function(a) {
    return new Il(a || Bb, this.h, this.i)
};

function ni(a) {
    this.m = a;
    this.s = a.options.s;
    this.h = a.options.mc;
    this.ea = a.options.ea;
    this.g = {
        Uf: 19,
        dh: "blocklyTreeRoot",
        $g: "blocklyHidden",
        ah: "",
        Af: "blocklyTreeRow",
        bh: "blocklyTreeLabel",
        Lc: "blocklyTreeIcon",
        yf: "blocklyTreeIconOpen",
        zf: "blocklyTreeIconNone",
        eh: "blocklyTreeSelected"
    };
    this.i = {
        Af: "blocklyTreeSeparator"
    };
    this.h && (this.g.cssTreeRow += a.s ? " blocklyHorizontalTreeRtl" : " blocklyHorizontalTree", this.i.cssTreeRow = "blocklyTreeSeparatorHorizontal " + (a.s ? "blocklyHorizontalTreeRtl" : "blocklyHorizontalTree"),
        this.g.cssTreeIcon = "")
}
g = ni.prototype;
g.width = 0;
g.height = 0;
g.Vd = null;
g.G = function() {
    var a = this.m;
    this.cc = x("div", "blocklyToolboxDiv");
    this.cc.setAttribute("dir", a.s ? "RTL" : "LTR");
    document.body.appendChild(this.cc);
    M(this.cc, "mousedown", this, function(a) {
        yh(a) || a.target == this.cc ? Dh(!1) : Dh(!0)
    });
    this.R = new ri({
        Kd: a.options.Kd,
        Kb: a,
        s: a.s,
        mc: a.mc,
        ea: a.options.ea
    });
    uc(si(this.R), a.o);
    this.R.G(a);
    this.g.cleardotPath = a.options.Lb + "1x1.gif";
    this.g.cssCollapsedFolderIcon = "blocklyTreeIconClosed" + (a.s ? "Rtl" : "Ltr");
    var b = new sm(this, this.g);
    this.Gc = b;
    qm(b);
    nm(b);
    pm(b);
    b.pb(null);
    tm(this, a.options.rd);
    b.V(this.cc);
    um(this);
    this.position()
};
g.C = function() {
    this.R.C();
    this.Gc.C();
    y(this.cc);
    this.Vd = this.m = null
};
g.Hb = function() {
    return this.width
};
g.Pc = function() {
    return this.height
};
g.position = function() {
    var a = this.cc;
    if (a) {
        var b = Uh(this.m),
            c = ed(b),
            b = vm(b);
        this.h ? (a.style.left = c.x + "px", a.style.height = "auto", a.style.width = b.width + "px", this.height = a.offsetHeight, a.style.top = 0 == this.ea ? c.y + "px" : c.y + b.height - a.offsetHeight + "px") : (a.style.left = 3 == this.ea ? c.x + b.width - a.offsetWidth + "px" : c.x + "px", a.style.height = b.height + "px", a.style.top = c.y + "px", this.width = a.offsetWidth, 2 == this.ea && --this.width);
        this.R.position()
    }
};

function tm(a, b) {
    function c(a, b, n) {
        for (var m = null, q = 0, r; r = a.childNodes[q]; q++)
            if (r.tagName) switch (r.tagName.toUpperCase()) {
                case "CATEGORY":
                    m = d.createNode(r.getAttribute("name"));
                    m.rc = [];
                    b.add(m);
                    var z = r.getAttribute("custom");
                    z ? m.rc = z : c(r, m, n);
                    z = r.getAttribute("colour");
                    p(z) ? (z.match(/^#[0-9a-fA-F]{6}$/) ? m.Oe = z : m.Oe = Gj(Hj(z)), f = !0) : m.Oe = "";
                    "true" == r.getAttribute("expanded") ? (m.rc.length && d.pb(m), m.Mb(!0)) : m.Mb(!1);
                    m = r;
                    break;
                case "SEP":
                    m && ("CATEGORY" == m.tagName.toUpperCase() ? b.add(new wm(e.i)) : (r =
                        parseFloat(r.getAttribute("gap")), isNaN(r) || (z = parseFloat(m.getAttribute("gap")), m.setAttribute("gap", isNaN(z) ? r : z + r))));
                    break;
                case "BLOCK":
                case "SHADOW":
                    b.rc.push(r), m = r
            }
    }
    var d = a.Gc,
        e = a;
    d.Dh();
    d.rc = [];
    var f = !1;
    c(b, a.Gc, a.m.options.Lb);
    a.j = f;
    if (d.rc.length) throw "Toolbox cannot have both blocks and categories in the root level.";
    jh(a.m)
}

function um(a, b) {
    for (var c = (b || a.Gc).Oc(), d = 0, e; e = c[d]; d++) {
        var f = yl(e);
        if (f) {
            var k = a.j ? "8px solid " + (e.Oe || "#ddd") : "none";
            a.m.s ? f.style.borderRight = k : f.style.borderLeft = k
        }
        um(a, e)
    }
}
g.Md = function() {
    var a = this.cc.getBoundingClientRect(),
        b = a.left,
        c = a.top,
        d = a.width,
        a = a.height;
    return 2 == this.ea ? new Yc(-1E7, -1E7, 1E7 + b + d, 2E7) : 3 == this.ea ? new Yc(b, -1E7, 1E7 + d, 2E7) : 0 == this.ea ? new Yc(-1E7, -1E7, 2E7, 1E7 + c + a) : new Yc(0, c, 2E7, 1E7 + d)
};

function sm(a, b) {
    this.W = a;
    mm.call(this, Bb, b)
}
t(sm, mm);
sm.prototype.Ia = function() {
    sm.w.Ia.call(this);
    if (Dd) {
        var a = this.D();
        M(a, "touchstart", this, this.Fd)
    }
};
sm.prototype.Fd = function(a) {
    a.preventDefault();
    var b = rm(this, a);
    b && "touchstart" === a.type && setTimeout(function() {
        b.ag(a)
    }, 1)
};
sm.prototype.createNode = function(a) {
    return new xm(this.W, a ? ub(a) : Bb, this.h, this.i)
};
sm.prototype.pb = function(a) {
    var b = this.W;
    if (a != this.u && a != b.Gc) {
        b.Vd && (yl(b.Vd).style.backgroundColor = "");
        if (a) {
            var c = a.Oe || "#57e";
            yl(a).style.backgroundColor = c;
            um(b, a)
        }
        c = this.u;
        mm.prototype.pb.call(this, a);
        a && a.rc && a.rc.length ? (b.R.show(a.rc), b.Vd != a && Xk(b.R)) : b.R.lc();
        c != a && c != this && (c = new Vi(null, "category", c && tb(c.ga), a && tb(a.ga)), c.g = b.m.id, H(c));
        a && (b.Vd = a)
    }
};

function xm(a, b, c, d) {
    ql.call(this, b, c, d);
    a && (b = function() {
        Tk(a.m)
    }, Kd(a.Gc, "expand", b), Kd(a.Gc, "collapse", b))
}
t(xm, Il);
xm.prototype.If = function() {
    return zb("span")
};
xm.prototype.ag = function() {
    gf(this) ? (this.Mb(!this.Va()), this.select()) : this.Sa ? this.hb().pb(null) : this.select();
    Bl(this)
};
xm.prototype.zh = function() {};

function wm(a) {
    xm.call(this, null, "", a)
}
t(wm, xm);
var ym = {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    steelblue: "#4682b4",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    tomato: "#ff6347",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
};

function zm(a) {
    var b = {};
    a = String(a);
    var c = "#" == a.charAt(0) ? a : "#" + a;
    if (Am.test(c)) return b.Qf = Bm(c), b.type = "hex", b;
    a: {
        var d = a.match(Cm);
        if (d) {
            var c = Number(d[1]),
                e = Number(d[2]),
                d = Number(d[3]);
            if (0 <= c && 255 >= c && 0 <= e && 255 >= e && 0 <= d && 255 >= d) {
                c = [c, e, d];
                break a
            }
        }
        c = []
    }
    if (c.length) return b.Qf = Gj(c), b.type = "rgb", b;
    if (ym && (c = ym[a.toLowerCase()])) return b.Qf = c, b.type = "named", b;
    throw Error(a + " is not a valid color string");
}
var Dm = /#(.)(.)(.)/;

function Bm(a) {
    if (!Am.test(a)) throw Error("'" + a + "' is not a valid hex color");
    4 == a.length && (a = a.replace(Dm, "#$1$1$2$2$3$3"));
    return a.toLowerCase()
}

function nk(a) {
    a = Bm(a);
    return [parseInt(a.substr(1, 2), 16), parseInt(a.substr(3, 2), 16), parseInt(a.substr(5, 2), 16)]
}

function Gj(a) {
    var b = a[0],
        c = a[1];
    a = a[2];
    b = Number(b);
    c = Number(c);
    a = Number(a);
    if (b != (b & 255) || c != (c & 255) || a != (a & 255)) throw Error('"(' + b + "," + c + "," + a + '") is not a valid RGB color');
    b = Em(b.toString(16));
    c = Em(c.toString(16));
    a = Em(a.toString(16));
    return "#" + b + c + a
}
var Am = /^#(?:[0-9a-f]{3}){1,2}$/i,
    Cm = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;

function Em(a) {
    return 1 == a.length ? "0" + a : a
}

function Hj(a) {
    var b = 0,
        c = 0,
        d = 0,
        e = Math.floor(a / 60),
        f = a / 60 - e;
    a = 165.75 * .55;
    var k = 165.75 * (1 - .45 * f),
        f = 165.75 * (1 - .45 * (1 - f));
    switch (e) {
        case 1:
            b = k;
            c = 165.75;
            d = a;
            break;
        case 2:
            b = a;
            c = 165.75;
            d = f;
            break;
        case 3:
            b = a;
            c = k;
            d = 165.75;
            break;
        case 4:
            b = f;
            c = a;
            d = 165.75;
            break;
        case 5:
            b = 165.75;
            c = a;
            d = k;
            break;
        case 6:
        case 0:
            b = 165.75, c = f, d = a
    }
    return [Math.floor(b), Math.floor(c), Math.floor(d)]
}

function ok(a, b, c) {
    c = cc(c, 0, 1);
    return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])]
};

function Tj(a, b) {
    Tj.w.constructor.call(this, a, b)
}
t(Tj, Mj);

function Sj(a, b, c, d) {
    this.v = null;
    this.B = Number(c);
    this.Y = Number(b);
    this.u = new Xb(this.Y, this.B + 10);
    this.qa = d || "";
    this.va(a)
}
t(Sj, sj);
g = Sj.prototype;
g.dg = null;
g.cd = !1;
g.G = function() {
    if (!this.g) {
        this.g = J("g", {}, null);
        this.Ic || (this.g.style.display = "none");
        this.i = J("image", {
            height: this.B + "px",
            width: this.Y + "px"
        }, this.g);
        this.va(this.F);
        Ib && (this.dg = J("rect", {
            height: this.B + "px",
            width: this.Y + "px",
            "fill-opacity": 0
        }, this.g));
        this.v.o.appendChild(this.g);
        var a = this.dg || this.i;
        a.Fa = this.v;
        jj(a)
    }
};
g.C = function() {
    y(this.g);
    this.dg = this.i = this.g = null
};
g.Wa = function() {
    return this.F
};
g.va = function(a) {
    null !== a && (this.F = a, this.i && this.i.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", p(a) ? a : ""))
};
g.Eb = function(a) {
    null !== a && (this.qa = a)
};
g.hf = function() {};

function Oj(a, b) {
    Oj.w.constructor.call(this, "", b);
    this.va(a)
}
t(Oj, sj);
g = Oj.prototype;
g.oe = "default";
g.G = function() {
    this.g || (Oj.w.G.call(this), this.i = J("text", {
        "class": "blocklyText blocklyCheckbox",
        x: -3,
        y: 14
    }, this.g), this.i.appendChild(document.createTextNode("\u2713")), this.i.style.display = this.ha ? "block" : "none")
};
g.Wa = function() {
    return String(this.ha).toUpperCase()
};
g.va = function(a) {
    a = "TRUE" == a;
    this.ha !== a && (this.v && 0 == G && H(new Wi(this.v, "field", this.name, this.ha, a)), this.ha = a, this.i && (this.i.style.display = a ? "block" : "none"))
};
g.$c = function() {
    var a = !this.ha;
    if (this.v && this.Xa) {
        var b = this.Xa(a);
        void 0 !== b && (a = b)
    }
    null !== a && this.va(String(a).toUpperCase())
};

function Fm(a) {
    Vd.call(this);
    this.g = [];
    Gm(this, a)
}
t(Fm, Vd);
g = Fm.prototype;
g.xc = null;
g.ig = null;

function Gm(a, b) {
    b && (Ra(b, function(a) {
        Hm(this, a, !1)
    }, a), Za(a.g, b))
}
g.pb = function(a) {
    a != this.xc && (Hm(this, this.xc, !1), this.xc = a, Hm(this, a, !0));
    Wd(this, "select")
};
g.clear = function() {
    var a = this.g;
    if (!da(a))
        for (var b = a.length - 1; 0 <= b; b--) delete a[b];
    a.length = 0;
    this.xc = null
};
g.xa = function() {
    Fm.w.xa.call(this);
    delete this.g;
    this.xc = null
};

function Hm(a, b, c) {
    b && ("function" == typeof a.ig ? a.ig(b, c) : "function" == typeof b.kg && b.kg(c))
};

function Im(a, b, c, d, e) {
    this.g = !!b;
    this.node = null;
    this.i = 0;
    this.u = !1;
    this.j = !c;
    a && Jm(this, a, d);
    this.h = void 0 != e ? e : this.i || 0;
    this.g && (this.h *= -1)
}
t(Im, im);

function Jm(a, b, c) {
    if (a.node = b) a.i = fa(c) ? c : 1 != a.node.nodeType ? 0 : a.g ? -1 : 1;
    fa(void 0) && (a.h = void 0)
}
Im.prototype.clone = function() {
    return new Im(this.node, this.g, !this.j, this.i, this.h)
};
Im.prototype.next = function() {
    var a;
    if (this.u) {
        if (!this.node || this.j && 0 == this.h) throw hm;
        a = this.node;
        var b = this.g ? -1 : 1;
        if (this.i == b) {
            var c = this.g ? a.lastChild : a.firstChild;
            c ? Jm(this, c) : Jm(this, a, -1 * b)
        } else(c = this.g ? a.previousSibling : a.nextSibling) ? Jm(this, c) : Jm(this, a.parentNode, -1 * b);
        this.h += this.i * (this.g ? -1 : 1)
    } else this.u = !0;
    a = this.node;
    if (!this.node) throw hm;
    return a
};
Im.prototype.splice = function(a) {
    var b = this.node,
        c = this.g ? 1 : -1;
    this.i == c && (this.i = -1 * c, this.h += this.i * (this.g ? -1 : 1));
    this.g = !this.g;
    Im.prototype.next.call(this);
    this.g = !this.g;
    for (var c = ea(arguments[0]) ? arguments[0] : arguments, d = c.length - 1; 0 <= d; d--) uc(c[d], b);
    y(b)
};

function Km(a, b, c, d) {
    Im.call(this, a, b, c, null, d)
}
t(Km, Im);
Km.prototype.next = function() {
    do Km.w.next.call(this); while (-1 == this.i);
    return this.node
};

function Lm() {}
t(Lm, wf);
ba(Lm);
var Mm = 0;
Lm.prototype.Me = function(a) {
    var b = zf(this, a);
    a = a.i.xb("DIV", b ? b.join(" ") : null, Nm(this, a.mb, a.zb, a.i));
    sf(a, "grid");
    return a
};

function Nm(a, b, c, d) {
    for (var e = [], f = 0, k = 0; f < c.height; f++) {
        for (var l = [], n = 0; n < c.width; n++) {
            var m = b && b[k++];
            l.push(Om(a, m, d))
        }
        e.push(Pm(a, l, d))
    }
    a = d.xb("TABLE", a.na() + "-table", d.xb("TBODY", a.na() + "-body", e));
    a.cellSpacing = 0;
    a.cellPadding = 0;
    return a
}

function Pm(a, b, c) {
    a = c.xb("TR", a.na() + "-row", b);
    sf(a, "row");
    return a
}

function Om(a, b, c) {
    a = c.xb("TD", {
        "class": a.na() + "-cell",
        id: a.na() + "-cell-" + Mm++
    }, b);
    sf(a, "gridcell");
    tf(a, "selected", !1);
    if (!Cc(a) && !vf(a, "label")) {
        var d;
        b = new Km(a);
        for (c = ""; !c && (d = km(b));) 1 == d.nodeType && (c = vf(d, "label") || d.title);
        (d = c) && tf(a, "label", d)
    }
    return a
}
Lm.prototype.Rd = function(a, b) {
    if (a) {
        var c = lc(this.na() + "-body", a)[0];
        if (c) {
            var d = 0;
            Ra(c.rows, function(a) {
                Ra(a.cells, function(a) {
                    tc(a);
                    if (b) {
                        var c = b[d++];
                        c && a.appendChild(c)
                    }
                })
            });
            if (d < b.length) {
                for (var e = [], f = ic(a), k = c.rows[0].cells.length; d < b.length;) {
                    var l = b[d++];
                    e.push(Om(this, l, f));
                    e.length == k && (l = Pm(this, e, f), c.appendChild(l), e.length = 0)
                }
                if (0 < e.length) {
                    for (; e.length < k;) e.push(Om(this, "", f));
                    l = Pm(this, e, f);
                    c.appendChild(l)
                }
            }
        }
        jd(a, Ib)
    }
};

function Qm(a, b, c) {
    for (b = b.D(); c && 1 == c.nodeType && c != b;) {
        if ("TD" == c.tagName && kf(c, a.na() + "-cell")) return c.firstChild;
        c = c.parentNode
    }
    return null
}
Lm.prototype.na = function() {
    return "goog-palette"
};

function Rm(a, b, c) {
    K.call(this, a, b || Lm.Wb(), c);
    this.xf &= -89;
    this.H = new Sm;
    this.H.bf(this);
    this.Sa = -1
}
t(Rm, K);
g = Rm.prototype;
g.zb = null;
g.jc = -1;
g.Ka = null;
g.xa = function() {
    Rm.w.xa.call(this);
    this.Ka && (this.Ka.C(), this.Ka = null);
    this.zb = null;
    this.H.C()
};
g.Ze = function(a) {
    Rm.w.Ze.call(this, a);
    Tm(this);
    this.Ka ? (this.Ka.clear(), Gm(this.Ka, a)) : (this.Ka = new Fm(a), a = na(this.$k, this), this.Ka.ig = a, Ze(this).X(this.Ka, "select", this.ll));
    this.jc = -1
};
g.De = function() {
    return ""
};
g.Ud = function(a) {
    Rm.w.Ud.call(this, a);
    var b = Qm(this.h, this, a.target);
    b && a.u && vc(b, a.u) || b == Um(this) || (a = this.mb, Vm(this, a && b ? Qa(a, b) : -1))
};
g.kc = function(a) {
    Rm.w.kc.call(this, a);
    if (this.ha & 4 && (a = Qm(this.h, this, a.target), a != Um(this))) {
        var b = this.mb;
        Vm(this, b && a ? Qa(b, a) : -1)
    }
};
g.Cc = function(a) {
    var b = Um(this);
    return b ? (a && (this.Ka && this.Ka.xc ? "mouseup" != a.type || Qm(this.h, this, a.target) : 1) && this.pb(b), Rm.w.Cc.call(this, a)) : !1
};
g.Ab = function(a) {
    var b = this.mb,
        b = b ? b.length : 0,
        c = this.zb.width;
    if (0 == b || !this.isEnabled()) return !1;
    if (13 == a.g || 32 == a.g) return this.Cc(a);
    if (36 == a.g) return Vm(this, 0), !0;
    if (35 == a.g) return Vm(this, b - 1), !0;
    var d;
    if (0 > this.jc)
        if (this.Ka) {
            d = this.Ka;
            var e = d.xc;
            d = e ? Qa(d.g, e) : -1
        } else d = -1;
    else d = this.jc;
    switch (a.g) {
        case 37:
            if (-1 == d || 0 == d) d = b;
            Vm(this, d - 1);
            a.preventDefault();
            return !0;
        case 39:
            return d == b - 1 && (d = -1), Vm(this, d + 1), a.preventDefault(), !0;
        case 38:
            -1 == d && (d = b + c - 1);
            if (d >= c) return Vm(this, d - c), a.preventDefault(), !0;
            break;
        case 40:
            if (-1 == d && (d = -c), d < b - c) return Vm(this, d + c), a.preventDefault(), !0
    }
    return !1
};
g.ll = function() {};

function Wm(a, b) {
    if (a.D()) throw Error("Component already rendered");
    a.zb = fa(b) ? new Xb(b, void 0) : b;
    Tm(a)
}

function Um(a) {
    var b = a.mb;
    return b && b[a.jc]
}

function Vm(a, b) {
    b != a.jc && (Xm(a, a.jc, !1), a.Sa = a.jc, a.jc = b, Xm(a, b, !0), Wd(a, "a"))
}

function Ym(a, b) {
    if (a.Ka) {
        var c = a.Ka;
        c.pb(c.g[b] || null)
    }
}
g.pb = function(a) {
    this.Ka && this.Ka.pb(a)
};

function Xm(a, b, c) {
    if (a.D()) {
        var d = a.mb;
        if (d && 0 <= b && b < d.length) {
            var e;
            e = (e = Um(a)) ? e.parentNode : null;
            a.H.D() != e && (a.H.g = e);
            e = a.H;
            e.yb(c);
            !!(e.ha & 2) == c && (b = d[b]) && (b = b ? b.parentNode : null, d = a.h.na() + "-cell-hover", c ? lf(b, d) : nf(b, d), c ? tf(a.g, "activedescendant", b.id) : b.id == vf(a.g, "activedescendant") && uf(a.g))
        }
    }
}
g.yb = function(a) {
    a && -1 == this.jc ? Vm(this, -1 < this.Sa ? this.Sa : 0) : a || Vm(this, -1);
    Rm.w.yb.call(this, a)
};
g.$k = function(a, b) {
    if (this.D() && a) {
        var c = a.parentNode,
            d = this.h.na() + "-cell-selected";
        b ? lf(c, d) : nf(c, d);
        tf(c, "selected", b)
    }
};

function Tm(a) {
    var b = a.mb;
    if (b)
        if (a.zb && a.zb.width) {
            if (b = Math.ceil(b.length / a.zb.width), !fa(a.zb.height) || a.zb.height < b) a.zb.height = b
        } else b = Math.ceil(Math.sqrt(b.length)), a.zb = new Xb(b, b);
    else a.zb = new Xb(0, 0)
}

function Sm() {
    K.call(this, null);
    this.ad |= 2
}
t(Sm, K);

function Zm(a, b, c) {
    this.T = a || [];
    Rm.call(this, null, b || Lm.Wb(), c);
    $m(this, this.T)
}
t(Zm, Rm);
Zm.prototype.ma = null;
Zm.prototype.ga = null;

function $m(a, b) {
    a.T = b;
    a.ga = null;
    a.ma = null;
    var c = an(a);
    a.h.Rd(a.D(), c);
    a.Ze(c)
}
Zm.prototype.Jf = function() {
    var a = this.Ka ? this.Ka.xc : null;
    if (a) {
        var b = a.style[Ha()];
        if ("undefined" !== typeof b) a = b;
        else {
            var b = a.style,
                c = $c["background-color"];
            if (!c) {
                var d = Ha(),
                    c = d;
                void 0 === a.style[d] && (d = (v ? "Webkit" : Ib ? "Moz" : u ? "ms" : Gb ? "O" : null) + Ia(d), void 0 !== a.style[d] && (c = d));
                $c["background-color"] = c
            }
            a = b[c] || ""
        }
        return bn(a)
    }
    return null
};

function cn(a, b) {
    var c = bn(b);
    a.ma || (a.ma = Ta(a.T, function(a) {
        return bn(a)
    }));
    Ym(a, c ? Qa(a.ma, c) : -1)
}

function an(a) {
    return Ta(a.T, function(a, c) {
        var d = this.i.xb("DIV", {
            "class": this.h.na() + "-colorswatch",
            style: "background-color:" + a
        });
        d.title = this.ga && this.ga[c] ? this.ga[c] : "#" == a.charAt(0) ? "RGB (" + nk(a).join(", ") + ")" : a;
        return d
    }, a)
}

function bn(a) {
    if (a) try {
        return zm(a).Qf
    } catch (b) {}
    return null
};

function dn(a, b) {
    Ve.call(this, a);
    this.h = b || null;
    Ze(this).X(this, "action", this.vl)
}
t(dn, Ve);

function en(a) {
    var b = fn;
    a.h ? $m(a.h, b) : gn(a, b)
}

function hn(a) {
    a.h || gn(a, []);
    Wm(a.h, 7)
}
g = dn.prototype;
g.Jf = function() {
    return this.h ? this.h.Jf() : null
};

function jn(a, b) {
    a.h && cn(a.h, b)
}
g.Ia = function() {
    dn.w.Ia.call(this);
    this.h && this.h.V(this.D());
    this.D().unselectable = "on"
};
g.xa = function() {
    dn.w.xa.call(this);
    this.h && (this.h.C(), this.h = null)
};
g.focus = function() {
    this.h && this.h.D().focus()
};
g.vl = function(a) {
    a.stopPropagation();
    Wd(this, "change")
};

function gn(a, b) {
    var c = new Zm(b, null, a.i);
    Wm(c, 5);
    c.qb(32, !0);
    a.Gd(c);
    a.h = c;
    a.ba && a.h.V(a.D())
}
var fn = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(" ");

function Pj(a, b) {
    Pj.w.constructor.call(this, a, b);
    this.Eb("\u00a0\u00a0\u00a0")
}
var kn;
t(Pj, sj);
g = Pj.prototype;
g.G = function() {
    Pj.w.G.call(this);
    this.j.style.fillOpacity = 1;
    this.va(this.Wa())
};
g.oe = "default";
g.C = function() {
    Lg(this);
    Pj.w.C.call(this)
};
g.Wa = function() {
    return this.Tb
};
g.va = function(a) {
    this.v && 0 == G && this.Tb != a && H(new Wi(this.v, "field", this.name, this.Tb, a));
    this.Tb = a;
    this.j && (this.j.style.fill = a)
};
g.Hc = function() {
    var a = this.Tb,
        b = a.match(/^#(.)\1(.)\2(.)\3$/);
    b && (a = "#" + b[1] + b[2] + b[3]);
    return a
};
g.$c = function() {
    Gg(this, this.v.s, ln);
    var a = new dn;
    hn(a);
    en(a);
    var b = oc(),
        c = cd(),
        d = ed(this.j),
        e = wj(this);
    a.V(L);
    jn(a, this.Wa());
    var f = fd(a.D());
    d.y = d.y + f.height + e.height >= b.height + c.y ? d.y - (f.height - 1) : d.y + (e.height - 1);
    this.v.s ? (d.x += e.width, d.x -= f.width, d.x < c.x && (d.x = c.x)) : d.x > b.width + c.x - f.width && (d.x = b.width + c.x - f.width);
    Kg(d.x, d.y, b, c, this.v.s);
    var k = this;
    kn = Kd(a, "change", function(a) {
        a = a.target.Jf() || "#000000";
        yk();
        if (k.v && k.Xa) {
            var b = k.Xa(a);
            void 0 !== b && (a = b)
        }
        null !== a && k.va(a)
    })
};

function ln() {
    kn && Rd(kn)
};
var Ni = null,
    Q = null,
    re = null,
    se = null,
    we = [],
    yi = null,
    gk = null,
    I = 0,
    Ei = null;

function vm(a) {
    return {
        width: a.Mg,
        height: a.Lg
    }
}

function Tk(a) {
    for (; a.options.Kb;) a = a.options.Kb;
    var b = Uh(a),
        c = b.parentNode;
    if (c) {
        var d = c.offsetWidth,
            c = c.offsetHeight;
        b.Mg != d && (b.setAttribute("width", d + "px"), b.Mg = d);
        b.Lg != c && (b.setAttribute("height", c + "px"), b.Lg = c);
        a.resize()
    }
}

function Fi() {
    var a = Ni;
    Ah(bk);
    a.Wf = !1;
    Ei && (N(Ei), Ei = null);
    ae && (N(ae), ae = null)
}

function Gi(a) {
    if (!(a.touches && 2 <= a.touches.length)) {
        var b = Ni;
        if (b.Wf) {
            var c = a.clientX - b.Qa,
                d = a.clientY - b.Ra,
                e = b.La,
                f = b.ng + c,
                k = b.og + d,
                f = Math.min(f, -e.sb),
                k = Math.min(k, -e.tb),
                f = Math.max(f, e.aa - e.sb - e.ab),
                k = Math.max(k, e.ya - e.tb - e.Ua);
            b.Da.set(-f - e.sb, -k - e.tb);
            Math.sqrt(c * c + d * d) > Ih && ik();
            a.stopPropagation();
            a.preventDefault()
        }
    }
}

function Zk(a) {
    if (!Ni.options.i && !zh(a)) {
        var b = !1;
        if (27 == a.keyCode) Dh();
        else if (8 == a.keyCode || 46 == a.keyCode) a.preventDefault(), Q && $g(Q) && (b = !0);
        else if (a.altKey || a.ctrlKey || a.metaKey) Q && $g(Q) && ve(Q) && (67 == a.keyCode ? (Dh(), hk(Q)) : 88 == a.keyCode && (hk(Q), b = !0)), 86 == a.keyCode ? yi && xi(gk) : 90 == a.keyCode && (Dh(), Ni.qg(a.shiftKey));
        b && (F(!0), Dh(), Q.C(2 != I, !0), re && (Pe(), re = null), F(!1))
    }
}

function zi() {
    Yj();
    Yl()
}
var mn = 0;

function mi(a, b) {
    ik();
    mn = setTimeout(function() {
        a.button = 2;
        b.Ad(a)
    }, 750)
}

function ik() {
    mn && (clearTimeout(mn), mn = 0)
}

function hk(a) {
    var b = fe(a);
    if (2 != I)
        for (var c = 0, d; d = b.childNodes[c]; c++)
            if ("next" == d.nodeName.toLowerCase()) {
                b.removeChild(d);
                break
            }
    c = a.oa();
    b.setAttribute("x", a.s ? -c.x : c.x);
    b.setAttribute("y", c.y);
    yi = b;
    gk = a.A
}

function Dh(a) {
    nj();
    yk();
    a || (a = Ni, a.W && a.W.R && a.W.R.Hd && a.W.Gc.pb(null))
}

function Uk() {
    var a, b, c, d, e = vm(Uh(this));
    if (this.W)
        if (0 == this.ea || 1 == this.ea) e.height -= this.W.Pc();
        else if (2 == this.ea || 3 == this.ea) e.width -= this.W.Hb();
    var f = ri.prototype.U - 1,
        k = e.width - f,
        f = e.height - f;
    a = Rg(this);
    if (a.length) {
        d = ck(a[0]);
        for (b = 1; b < a.length; b++) {
            var l = ck(a[b]);
            l.Cb.x < d.Cb.x && (d.Cb.x = l.Cb.x);
            l.Sb.x > d.Sb.x && (d.Sb.x = l.Sb.x);
            l.Cb.y < d.Cb.y && (d.Cb.y = l.Cb.y);
            l.Sb.y > d.Sb.y && (d.Sb.y = l.Sb.y)
        }
        a = d.Cb.x;
        b = d.Cb.y;
        c = d.Sb.x - d.Cb.x;
        d = d.Sb.y - d.Cb.y
    } else d = c = b = a = 0;
    var n = c * this.scale,
        l = d * this.scale,
        m = a * this.scale,
        q = b * this.scale;
    this.Da ? (a = Math.min(m - k / 2, m + n - k), k = Math.max(m + n + k / 2, m + k), b = Math.min(q - f / 2, q + l - f), f = Math.max(q + l + f / 2, q + f)) : (k = a + c, f = b + d);
    d = 0;
    this.W && 2 == this.ea && (d = this.W.Hb());
    l = 0;
    this.W && 0 == this.ea && (l = this.W.Pc());
    return {
        ya: e.height,
        aa: e.width,
        Ua: f - b,
        ab: k - a,
        $b: -this.scrollY,
        Ga: -this.scrollX,
        tb: b,
        sb: a,
        Na: l,
        Ha: d,
        Hq: this.W ? this.W.Hb() : 0,
        Gq: this.W ? this.W.Pc() : 0,
        Be: this.R ? this.R.Hb() : 0,
        lh: this.R ? this.R.Pc() : 0,
        ea: this.ea
    }
}

function Vk(a) {
    if (!this.Da) throw "Attempt to set main workspace scroll without scrollbars.";
    var b = this.Ca();
    fa(a.x) && (this.scrollX = -b.ab * a.x - b.sb);
    fa(a.y) && (this.scrollY = -b.Ua * a.y - b.tb);
    a = this.scrollX + b.Ha;
    b = this.scrollY + b.Na;
    this.translate(a, b);
    this.options.j && (this.options.j.setAttribute("x", a), this.options.j.setAttribute("y", b), u && pi(this))
}
h.Blockly || (h.Blockly = {});
h.Blockly.getMainWorkspace = function() {
    return Ni
};
h.Blockly.addChangeListener = function(a) {
    console.warn("Deprecated call to Blockly.addChangeListener, use workspace.addChangeListener instead.");
    return Ni.Qb(a)
};
R.zq = {};
R.Kh = "Add Comment";
R.Rl = "Please authorize this app to enable your work to be saved and to allow it to be shared by you.";
R.Th = "Change value:";
R.Sl = "Chat with your collaborator by typing in this box!";
R.Uh = "Clean up Blocks";
R.Vh = "Collapse Blocks";
R.Wh = "Collapse Block";
R.Tl = "colour 1";
R.Ul = "colour 2";
R.Vl = "http://meyerweb.com/eric/tools/color-blend/";
R.Wl = "ratio";
R.Xl = "blend";
R.Yl = "Blends two colours together with a given ratio (0.0 - 1.0).";
R.Zl = "https://en.wikipedia.org/wiki/Color";
R.$l = "Choose a colour from the palette.";
R.am = "http://randomcolour.com";
R.bm = "random colour";
R.cm = "Choose a colour at random.";
R.dm = "blue";
R.em = "green";
R.fm = "http://www.december.com/html/spec/colorper.html";
R.gm = "red";
R.hm = "colour with";
R.im = "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
R.jm = "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
R.lm = "break out of loop";
R.mm = "continue with next iteration of loop";
R.nm = "Break out of the containing loop.";
R.om = "Skip the rest of this loop, and continue with the next iteration.";
R.pm = "Warning: This block may only be used within a loop.";
R.qm = "https://github.com/google/blockly/wiki/Loops#for-each";
R.sm = "for each item %1 in list %2";
R.tm = "For each item in a list, set the variable '%1' to the item, and then do some statements.";
R.um = "https://github.com/google/blockly/wiki/Loops#count-with";
R.wm = "count with %1 from %2 to %3 by %4";
R.xm = "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
R.Yh = "Add a condition to the if block.";
R.$h = "Add a final, catch-all condition to the if block.";
R.sg = "https://github.com/google/blockly/wiki/IfElse";
R.bi = "Add, remove, or reorder sections to reconfigure this if block.";
R.lf = "else";
R.tg = "else if";
R.mf = "if";
R.ci = "If a value is true, then do some statements.";
R.ug = "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
R.di = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
R.ei = "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
R.ym = "https://en.wikipedia.org/wiki/For_loop";
R.ne = "do";
R.zm = "repeat %1 times";
R.Am = "Do some statements several times.";
R.Bm = "https://github.com/google/blockly/wiki/Loops#repeat";
R.Dm = "repeat until";
R.Em = "repeat while";
R.Fm = "While a value is false, then do some statements.";
R.Gm = "While a value is true, then do some statements.";
R.gi = "Delete all %1 blocks?";
R.vg = "Delete Block";
R.wg = "Delete %1 Blocks";
R.ii = "Disable Block";
R.ji = "Duplicate";
R.ki = "Enable Block";
R.li = "Expand Blocks";
R.mi = "Expand Block";
R.ni = "External Inputs";
R.oi = "Help";
R.pi = "Inline Inputs";
R.Jm = "https://github.com/google/blockly/wiki/Lists#create-empty-list";
R.Km = "create empty list";
R.Lm = "Returns a list, of length 0, containing no data records";
R.Mm = "list";
R.Nm = "Add, remove, or reorder sections to reconfigure this list block.";
R.Om = "https://github.com/google/blockly/wiki/Lists#create-list-with";
R.Pm = "create list with";
R.Rm = "Add an item to the list.";
R.Sm = "Create a list with any number of items.";
R.Tm = "first";
R.Um = "# from end";
R.Vm = "#";
R.Wm = "get";
R.Xm = "get and remove";
R.$m = "last";
R.an = "random";
R.bn = "remove";
R.cn = "";
R.dn = "Returns the first item in a list.";
R.fn = "Returns the item at the specified position in a list. #1 is the last item.";
R.gn = "Returns the item at the specified position in a list. #1 is the first item.";
R.hn = "Returns the last item in a list.";
R.jn = "Returns a random item in a list.";
R.kn = "Removes and returns the first item in a list.";
R.ln = "Removes and returns the item at the specified position in a list. #1 is the last item.";
R.mn = "Removes and returns the item at the specified position in a list. #1 is the first item.";
R.nn = "Removes and returns the last item in a list.";
R.on = "Removes and returns a random item in a list.";
R.pn = "Removes the first item in a list.";
R.qn = "Removes the item at the specified position in a list. #1 is the last item.";
R.rn = "Removes the item at the specified position in a list. #1 is the first item.";
R.sn = "Removes the last item in a list.";
R.tn = "Removes a random item in a list.";
R.un = "to # from end";
R.vn = "to #";
R.wn = "to last";
R.xn = "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
R.zn = "get sub-list from first";
R.An = "get sub-list from # from end";
R.Bn = "get sub-list from #";
R.Cn = "";
R.Dn = "Creates a copy of the specified portion of a list.";
R.En = "find first occurrence of item";
R.ri = "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
R.Gn = "find last occurrence of item";
R.Hn = "Returns the index of the first/last occurrence of the item in the list. Returns 0 if item is not found.";
R.pe = "in list";
R.In = "https://github.com/google/blockly/wiki/Lists#is-empty";
R.Jn = "%1 is empty";
R.Kn = "Returns true if the list is empty.";
R.Ln = "https://github.com/google/blockly/wiki/Lists#length-of";
R.Mn = "length of %1";
R.Nn = "Returns the length of a list.";
R.On = "https://github.com/google/blockly/wiki/Lists#create-list-with";
R.Pn = "create list with item %1 repeated %2 times";
R.Qn = "Creates a list consisting of the given value repeated the specified number of times.";
R.Rn = "https://github.com/google/blockly/wiki/Lists#in-list--set";
R.Tn = "as";
R.Un = "insert at";
R.Vn = "set";
R.Wn = "Inserts the item at the start of a list.";
R.Xn = "Inserts the item at the specified position in a list. #1 is the last item.";
R.Yn = "Inserts the item at the specified position in a list. #1 is the first item.";
R.Zn = "Append the item to the end of a list.";
R.$n = "Inserts the item randomly in a list.";
R.ao = "Sets the first item in a list.";
R.bo = "Sets the item at the specified position in a list. #1 is the last item.";
R.co = "Sets the item at the specified position in a list. #1 is the first item.";
R.eo = "Sets the last item in a list.";
R.ho = "Sets a random item in a list.";
R.io = "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
R.jo = "ascending";
R.lo = "descending";
R.mo = "sort %1 %2 %3";
R.no = "Sort a copy of a list.";
R.oo = "alphabetic, ignore case";
R.po = "numeric";
R.qo = "alphabetic";
R.so = "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
R.to = "make list from text";
R.uo = "make text from list";
R.vo = "Join a list of texts into one text, separated by a delimiter.";
R.wo = "Split text into a list of texts, breaking at each delimiter.";
R.xo = "with delimiter";
R.ti = "false";
R.ui = "https://github.com/google/blockly/wiki/Logic#values";
R.wi = "Returns either true or false.";
R.xi = "true";
R.xg = "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
R.yi = "Return true if both inputs equal each other.";
R.yg = "Return true if the first input is greater than the second input.";
R.zi = "Return true if the first input is greater than or equal to the second input.";
R.zg = "Return true if the first input is smaller than the second input.";
R.Ai = "Return true if the first input is smaller than or equal to the second input.";
R.Bi = "Return true if both inputs are not equal to each other.";
R.Ci = "https://github.com/google/blockly/wiki/Logic#not";
R.Di = "not %1";
R.Ei = "Returns true if the input is false. Returns false if the input is true.";
R.Fi = "null";
R.Gi = "https://en.wikipedia.org/wiki/Nullable_type";
R.Hi = "Returns null.";
R.Ag = "and";
R.Bg = "https://github.com/google/blockly/wiki/Logic#logical-operations";
R.Ii = "or";
R.Cg = "Return true if both inputs are true.";
R.Ji = "Return true if at least one of the inputs is true.";
R.Ki = "test";
R.Li = "https://en.wikipedia.org/wiki/%3F:";
R.Mi = "if false";
R.Ni = "if true";
R.Oi = "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
R.Pi = "+";
R.Qi = "https://en.wikipedia.org/wiki/Arithmetic";
R.Ri = "Return the sum of the two numbers.";
R.Si = "Return the quotient of the two numbers.";
R.Ti = "Return the difference of the two numbers.";
R.Ui = "Return the product of the two numbers.";
R.Vi = "Return the first number raised to the power of the second number.";
R.Wi = "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
R.Xi = "change %1 by %2";
R.Zi = "Add a number to variable '%1'.";
R.$i = "https://en.wikipedia.org/wiki/Mathematical_constant";
R.aj = "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
R.bj = "https://en.wikipedia.org/wiki/Clamping_%28graphics%29";
R.cj = "constrain %1 low %2 high %3";
R.dj = "Constrain a number to be between the specified limits (inclusive).";
R.ej = "\u00f7";
R.fj = "is divisible by";
R.gj = "is even";
R.hj = "is negative";
R.ij = "is odd";
R.jj = "is positive";
R.kj = "is prime";
R.lj = "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
R.mj = "is whole";
R.nj = "https://en.wikipedia.org/wiki/Modulo_operation";
R.oj = "remainder of %1 \u00f7 %2";
R.pj = "Return the remainder from dividing the two numbers.";
R.qj = "\u00d7";
R.rj = "https://en.wikipedia.org/wiki/Number";
R.sj = "A number.";
R.tj = "";
R.uj = "average of list";
R.vj = "max of list";
R.wj = "median of list";
R.xj = "min of list";
R.yj = "modes of list";
R.zj = "random item of list";
R.Aj = "standard deviation of list";
R.Bj = "sum of list";
R.Cj = "Return the average (arithmetic mean) of the numeric values in the list.";
R.Dj = "Return the largest number in the list.";
R.Ej = "Return the median number in the list.";
R.Fj = "Return the smallest number in the list.";
R.Gj = "Return a list of the most common item(s) in the list.";
R.Hj = "Return a random element from the list.";
R.Ij = "Return the standard deviation of the list.";
R.Jj = "Return the sum of all the numbers in the list.";
R.Kj = "^";
R.Lj = "https://en.wikipedia.org/wiki/Random_number_generation";
R.Mj = "random fraction";
R.Nj = "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
R.Oj = "https://en.wikipedia.org/wiki/Random_number_generation";
R.Pj = "random integer from %1 to %2";
R.Qj = "Return a random integer between the two specified limits, inclusive.";
R.Rj = "https://en.wikipedia.org/wiki/Rounding";
R.Sj = "round";
R.Tj = "round down";
R.Uj = "round up";
R.Vj = "Round a number up or down.";
R.Wj = "https://en.wikipedia.org/wiki/Square_root";
R.Xj = "absolute";
R.Yj = "square root";
R.Zj = "Return the absolute value of a number.";
R.$j = "Return e to the power of a number.";
R.ak = "Return the natural logarithm of a number.";
R.bk = "Return the base 10 logarithm of a number.";
R.ck = "Return the negation of a number.";
R.dk = "Return 10 to the power of a number.";
R.ek = "Return the square root of a number.";
R.fk = "-";
R.gk = "acos";
R.hk = "asin";
R.ik = "atan";
R.jk = "cos";
R.kk = "https://en.wikipedia.org/wiki/Trigonometric_functions";
R.lk = "sin";
R.nk = "tan";
R.pk = "Return the arccosine of a number.";
R.qk = "Return the arcsine of a number.";
R.rk = "Return the arctangent of a number.";
R.tk = "Return the cosine of a degree (not radian).";
R.vk = "Return the sine of a degree (not radian).";
R.wk = "Return the tangent of a degree (not radian).";
R.zo = "Me";
R.qf = "New variable...";
R.xk = "New variable name:";
R.Ao = "";
R.Bo = "allow statements";
R.Co = "with:";
R.Do = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
R.Eo = "Run the user-defined function '%1'.";
R.Fo = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
R.Go = "Run the user-defined function '%1' and use its output.";
R.Ho = "with:";
R.Io = "Create '%1'";
R.yk = "Describe this function...";
R.zk = "";
R.Jo = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
R.Ak = "do something";
R.Bk = "to";
R.Ko = "Creates a function with no output.";
R.No = "https://en.wikipedia.org/wiki/Procedure_%28computer_science%29";
R.Po = "return";
R.Ro = "Creates a function with an output.";
R.So = "Warning: This function has duplicate parameters.";
R.To = "Highlight function definition";
R.Uo = "http://c2.com/cgi/wiki?GuardClause";
R.Vo = "If a value is true, then return a second value.";
R.Wo = "Warning: This block may be used only within a function definition.";
R.Xo = "input name:";
R.Yo = "Add an input to the function.";
R.Zo = "inputs";
R.$o = "Add, remove, or reorder inputs to this function.";
R.Ck = "Redo";
R.Dk = "Remove Comment";
R.rf = "Rename variable...";
R.Ek = "Rename all '%1' variables to:";
R.ap = "append text";
R.bp = "https://github.com/google/blockly/wiki/Text#text-modification";
R.cp = "to";
R.ep = "Append some text to variable '%1'.";
R.gp = "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
R.hp = "to lower case";
R.ip = "to Title Case";
R.jp = "to UPPER CASE";
R.kp = "Return a copy of the text in a different case.";
R.lp = "get first letter";
R.mp = "get letter # from end";
R.np = "get letter #";
R.op = "https://github.com/google/blockly/wiki/Text#extracting-text";
R.pp = "in text";
R.qp = "get last letter";
R.rp = "get random letter";
R.sp = "";
R.tp = "Returns the letter at the specified position.";
R.vp = "Add an item to the text.";
R.wp = "join";
R.xp = "Add, remove, or reorder sections to reconfigure this text block.";
R.yp = "to letter # from end";
R.zp = "to letter #";
R.Ap = "to last letter";
R.Bp = "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
R.Cp = "in text";
R.Dp = "get substring from first letter";
R.Ep = "get substring from letter # from end";
R.Fp = "get substring from letter #";
R.Gp = "";
R.Hp = "Returns a specified portion of the text.";
R.Ip = "https://github.com/google/blockly/wiki/Text#finding-text";
R.Jp = "in text";
R.Kp = "find first occurrence of text";
R.Lp = "find last occurrence of text";
R.Mp = "";
R.Np = "Returns the index of the first/last occurrence of the first text in the second text. Returns 0 if text is not found.";
R.Op = "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
R.Pp = "%1 is empty";
R.Qp = "Returns true if the provided text is empty.";
R.Rp = "https://github.com/google/blockly/wiki/Text#text-creation";
R.Sp = "create text with";
R.Tp = "Create a piece of text by joining together any number of items.";
R.Vp = "https://github.com/google/blockly/wiki/Text#text-modification";
R.Wp = "length of %1";
R.Xp = "Returns the number of letters (including spaces) in the provided text.";
R.Yp = "https://github.com/google/blockly/wiki/Text#printing-text";
R.Zp = "print %1";
R.$p = "Print the specified text, number or other value.";
R.aq = "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
R.bq = "Prompt for user for a number.";
R.cq = "Prompt for user for some text.";
R.eq = "prompt for number with message";
R.fq = "prompt for text with message";
R.gq = "https://en.wikipedia.org/wiki/String_(computer_science)";
R.hq = "A letter, word, or line of text.";
R.iq = "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
R.jq = "trim spaces from both sides of";
R.kq = "trim spaces from left side of";
R.lq = "trim spaces from right side of";
R.mq = "Return a copy of the text with spaces removed from one or both ends.";
R.nq = "Today";
R.Fk = "Undo";
R.ed = "item";
R.oq = "Create 'set %1'";
R.pq = "https://github.com/google/blockly/wiki/Variables#get";
R.qq = "Returns the value of this variable.";
R.rq = "set %1 to %2";
R.sq = "Create 'get %1'";
R.tq = "https://github.com/google/blockly/wiki/Variables#set";
R.uq = "Sets this variable to be equal to the input.";
R.Qo = R.Bk;
R.ai = R.mf;
R.Cm = R.ne;
R.nf = R.ne;
R.Zh = R.lf;
R.Oo = R.Ak;
R.yn = R.pe;
R.Zm = R.pe;
R.Yi = R.ed;
R.Mo = R.zk;
R.Xh = R.tg;
R.Ym = R.ri;
R.rm = R.ne;
R.Sn = R.pe;
R.vm = R.ne;
R.Qm = R.ed;
R.fp = R.ed;
R.up = R.ed;
R.Fn = R.pe;
R.Lo = R.yk;

function nn(a, b) {
    var c;
    c = a.className;
    for (var d = c = p(c) && c.match(/\S+/g) || [], e = ab(arguments, 1), f = 0; f < e.length; f++) Va(d, e[f]) || d.push(e[f]);
    a.className = c.join(" ")
};
var on = {
        ace: "\u0628\u0647\u0633\u0627 \u0627\u0686\u064a\u0647",
        af: "Afrikaans",
        ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
        az: "Az\u0259rbaycanca",
        "be-tarask": "Tara\u0161kievica",
        bg: "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
        br: "Brezhoneg",
        ca: "Catal\u00e0",
        cdo: "\u95a9\u6771\u8a9e",
        cs: "\u010cesky",
        da: "Dansk",
        de: "Deutsch",
        el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
        en: "English",
        es: "Espa\u00f1ol",
        eu: "Euskara",
        fa: "\u0641\u0627\u0631\u0633\u06cc",
        fi: "Suomi",
        fo: "F\u00f8royskt",
        fr: "Fran\u00e7ais",
        frr: "Frasch",
        gl: "Galego",
        hak: "\u5ba2\u5bb6\u8a71",
        he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
        hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
        hrx: "Hunsrik",
        hu: "Magyar",
        ia: "Interlingua",
        id: "Bahasa Indonesia",
        is: "\u00cdslenska",
        it: "Italiano",
        ja: "\u65e5\u672c\u8a9e",
        ka: "\u10e5\u10d0\u10e0\u10d7\u10e3\u10da\u10d8",
        km: "\u1797\u17b6\u179f\u17b6\u1781\u17d2\u1798\u17c2\u179a",
        ko: "\ud55c\uad6d\uc5b4",
        ksh: "Ripoar\u0117sch",
        ky: "\u041a\u044b\u0440\u0433\u044b\u0437\u0447\u0430",
        la: "Latine",
        lb: "L\u00ebtzebuergesch",
        lt: "Lietuvi\u0173",
        lv: "Latvie\u0161u",
        mg: "Malagasy",
        ml: "\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02",
        mk: "\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438",
        mr: "\u092e\u0930\u093e\u0920\u0940",
        ms: "Bahasa Melayu",
        mzn: "\u0645\u0627\u0632\u0650\u0631\u0648\u0646\u06cc",
        nb: "Norsk Bokm\u00e5l",
        nl: "Nederlands, Vlaams",
        oc: "Lenga d'\u00f2c",
        pa: "\u092a\u0902\u091c\u093e\u092c\u0940",
        pl: "Polski",
        pms: "Piemont\u00e8is",
        ps: "\u067e\u069a\u062a\u0648",
        pt: "Portugu\u00eas",
        "pt-br": "Portugu\u00eas Brasileiro",
        ro: "Rom\u00e2n\u0103",
        ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
        sc: "Sardu",
        sco: "Scots",
        si: "\u0dc3\u0dd2\u0d82\u0dc4\u0dbd",
        sk: "Sloven\u010dina",
        sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
        sv: "Svenska",
        sw: "Kishwahili",
        ta: "\u0ba4\u0bae\u0bbf\u0bb4\u0bcd",
        th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
        tl: "Tagalog",
        tr: "T\u00fcrk\u00e7e",
        uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
        vi: "Ti\u1ebfng Vi\u1ec7t",
        "zh-hans": "\u7c21\u9ad4\u4e2d\u6587",
        "zh-hant": "\u6b63\u9ad4\u4e2d\u6587"
    },
    pn = "ace ar fa he mzn ps".split(" "),
    Vc = window.BlocklyGamesLang,
    qn = window.BlocklyGamesLanguages,
    Wc = !!window.location.pathname.match(/\.html$/),
    vi = null;

function rn() {
    return -1 != pn.indexOf(Vc)
}
var D, sn = Number,
    tn, un = window.location.search.match(/[?&]level=([^&]+)/);
tn = un ? decodeURIComponent(un[1].replace(/\+/g, "%20")) : "NaN";
var vn = sn(tn);
D = isNaN(vn) ? 1 : cc(1, vn, 10);

function wn() {
    document.title = document.getElementById("title").textContent;
    document.dir = rn() ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", Vc);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < qn.length; c++) {
            var d = qn[c];
            b.push([on[d], d])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var e = b[c],
                d = e[1],
                e = new Option(e[0], d);
            d == Vc && (e.selected = !0);
            a.options.add(e)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (c =
        1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!xn(c), a && b && nn(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(yn, 1)
}

function xn(a) {
    var b = zn,
        c;
    try {
        c = window.sessionStorage[b + a]
    } catch (d) {}
    return c
}

function An(a) {
    var b;
    (b = document.getElementById(a)) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    return null === b ? "[Unknown message: " + a + "]" : b
}

function Bn(a, b) {
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function yn() {
    if (!Wc) {
        window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
        var a = function() {
            (a.q = a.q || []).push(arguments)
        };
        window.GoogleAnalyticsFunction = a;
        a.l = 1 * new Date;
        var b = document.createElement("script");
        b.async = 1;
        b.src = "//www.google-analytics.com/analytics.js";
        document.head.appendChild(b);
        a("create", "UA-50448074-1", "auto");
        a("send", "pageview")
    }
};
var Y = {
    gd: null,
    G: function() {
        wn();
        var a = document.getElementById("linkButton");
        "BlocklyStorage" in window ? (BlocklyStorage.HTTPREQUEST_ERROR = An("Games_httpRequestError"), BlocklyStorage.LINK_ALERT = An("Games_linkAlert"), BlocklyStorage.HASH_ERROR = An("Games_hashError"), BlocklyStorage.XML_ERROR = An("Games_xmlError"), BlocklyStorage.alert = X.Ll, a && Bn(a, BlocklyStorage.link)) : a && (a.style.display = "none");
        (a = document.getElementById("languageMenu")) && a.addEventListener("change", Y.Kk, !0)
    },
    sl: function(a, b) {
        if ("BlocklyStorage" in
            window && 1 < window.location.hash.length) BlocklyStorage.retrieveXml(window.location.hash.substring(1));
        else {
            var c = null;
            try {
                c = window.sessionStorage.g
            } catch (f) {}
            c && delete window.sessionStorage.g;
            var d = xn(D),
                e = b && xn(D - 1);
            (c = c || d || e || a) && Y.Fh(c)
        }
    },
    Fh: function(a) {
        Y.gd ? Y.gd.setValue(a, -1) : (a = ch(a), vi.clear(), eh(a, vi), vi.Og())
    },
	
    mh: function() {
        if (Y.gd) var a = Y.gd.getValue();
        else a = Wg(vi), a = bh(a);
        return a
    },
    Fl: function() {
        window.sessionStorage && (window.sessionStorage[zn + D] = Y.mh())
    },
    Qe: function() {
        window.location = (Wc ?
            "index.html" : "./") + "?lang=" + Vc
    },
    Kk: function() {
        if (window.sessionStorage) {
            if (Y.gd) var a = Y.gd.getValue();
            else a = Wg(vi), a = bh(a);
            window.sessionStorage.g = a
        }
        var a = document.getElementById("languageMenu"),
            a = encodeURIComponent(a.options[a.selectedIndex].value),
            b = window.location.search,
            b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
        window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
    },
    Pe: function(a) {
        if (a) {
            var b =
                a.match(/^block_id_([^']+)$/);
            b && (a = b[1])
        }
        ui(a)
    },
    Dq: function(a, b) {
        var c = document.getElementById(a);
        c.firstChild || (c = Qk(c, {
            rtl: rn(),
            readOnly: !0
        }), "string" != typeof b && (b = b.join("")), eh(ch(b), c))
    },
    Ml: function(a) {
        return a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")").replace(/[\s\xa0]+$/, "")
    },
    Ub: function(a) {
        if ("click" == a.type && "touchend" == Y.Ub.h && Y.Ub.g + 2E3 > Date.now() || Y.Ub.h == a.type && Y.Ub.g + 400 > Date.now()) return a.preventDefault(), a.stopPropagation(), !0;
        Y.Ub.h = a.type;
        Y.Ub.g = Date.now();
        return !1
    }
};
Y.Ub.h = null;
Y.Ub.g = 0;
Y.ql = function() {
    var a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "third-party/JS-Interpreter/compiled.js");
    document.head.appendChild(a)
};
Y.rl = function() {
    var a = document.createElement("link");
    a.setAttribute("rel", "stylesheet");
    a.setAttribute("type", "text/css");
    a.setAttribute("href", "common/prettify.css");
    document.head.appendChild(a);
    a = document.createElement("script");
    a.setAttribute("type", "text/javascript");
    a.setAttribute("src", "common/prettify.js");
    document.head.appendChild(a)
};
window.BlocklyInterface = Y;
Y.setCode = Y.Fh;
Y.getCode = Y.mh;
var X = {
    Uc: !1,
    gh: null,
    Ae: null,
    cf: function(a, b, c, d, e, f) {
        function k() {
            X.Uc && (l.style.visibility = "visible", l.style.zIndex = 10, n.style.visibility = "hidden")
        }
        X.Uc && X.Xb(!1);
        Dh(!0);
        X.Uc = !0;
        X.gh = b;
        X.Ae = f;
        var l = document.getElementById("dialog");
        f = document.getElementById("dialogShadow");
        var n = document.getElementById("dialogBorder"),
            m;
        for (m in e) l.style[m] = e[m];
        d && (f.style.visibility = "visible", f.style.opacity = .3, f.style.zIndex = 9, d = document.createElement("div"), d.id = "dialogHeader", l.appendChild(d), X.Bf = M(d, "mousedown",
            null, X.Uk));
        l.appendChild(a);
        a.className = a.className.replace("dialogHiddenContent", "");
        c && b ? (X.Ve(b, !1, .2), X.Ve(l, !0, .8), setTimeout(k, 175)) : k()
    },
    hh: 0,
    ih: 0,
    Uk: function(a) {
        X.Ef();
        if (!yh(a)) {
            var b = document.getElementById("dialog");
            X.hh = b.offsetLeft - a.clientX;
            X.ih = b.offsetTop - a.clientY;
            X.Df = M(document, "mouseup", null, X.Ef);
            X.Cf = M(document, "mousemove", null, X.Vk);
            a.stopPropagation()
        }
    },
    Vk: function(a) {
        var b = document.getElementById("dialog"),
            c = X.hh + a.clientX;
        a = X.ih + a.clientY;
        a = Math.max(a, 0);
        a = Math.min(a, window.innerHeight -
            b.offsetHeight);
        c = Math.max(c, 0);
        c = Math.min(c, window.innerWidth - b.offsetWidth);
        b.style.left = c + "px";
        b.style.top = a + "px"
    },
    Ef: function() {
        X.Df && (N(X.Df), X.Df = null);
        X.Cf && (N(X.Cf), X.Cf = null)
    },
    Xb: function(a) {
        function b() {
            d.style.zIndex = -1;
            d.style.visibility = "hidden";
            document.getElementById("dialogBorder").style.visibility = "hidden"
        }
        if (X.Uc) {
            X.Ef();
            X.Bf && (N(X.Bf), X.Bf = null);
            X.Uc = !1;
            X.Ae && X.Ae();
            X.Ae = null;
            var c = !1 === a ? null : X.gh;
            a = document.getElementById("dialog");
            var d = document.getElementById("dialogShadow");
            d.style.opacity = 0;
            c ? (X.Ve(a, !1, .8), X.Ve(c, !0, .2), setTimeout(b, 175)) : b();
            a.style.visibility = "hidden";
            a.style.zIndex = -1;
            for ((c = document.getElementById("dialogHeader")) && c.parentNode.removeChild(c); a.firstChild;) c = a.firstChild, c.className += " dialogHiddenContent", document.body.appendChild(c)
        }
    },
    Ve: function(a, b, c) {
        function d() {
            e.style.width = f.width + "px";
            e.style.height = f.height + "px";
            e.style.left = f.x + "px";
            e.style.top = f.y + "px";
            e.style.opacity = c
        }
        if (a) {
            var e = document.getElementById("dialogBorder"),
                f = X.Wk(a);
            b ? (e.className = "dialogAnimate", setTimeout(d, 1)) : (e.className = "", d());
            e.style.visibility = "visible"
        }
    },
    Wk: function(a) {
        var b = ed(a);
        a.getBBox ? (a = a.getBBox(), b.height = a.height, b.width = a.width) : (b.height = a.offsetHeight, b.width = a.offsetWidth);
        return b
    },
    Ll: function(a) {
        var b = document.getElementById("containerStorage");
        b.textContent = "";
        a = a.split("\n");
        for (var c = 0; c < a.length; c++) {
            var d = document.createElement("p");
            d.appendChild(document.createTextNode(a[c]));
            b.appendChild(d)
        }
        b = document.getElementById("dialogStorage");
        a = document.getElementById("linkButton");
        X.cf(b, a, !0, !0, {
            width: "50%",
            left: "25%",
            top: "5em"
        }, X.Kl);
        X.Il()
    },
    Jg: function() {
        if (!xn(D))
            if (X.Uc || 0 != I) setTimeout(X.Jg, 15E3);
            else {
                var a = document.getElementById("dialogAbort"),
                    b = document.getElementById("abortCancel");
                b.addEventListener("click", X.Xb, !0);
                b.addEventListener("touchend", X.Xb, !0);
                b = document.getElementById("abortOk");
                b.addEventListener("click", Y.Qe, !0);
                b.addEventListener("touchend", Y.Qe, !0);
                X.cf(a, null, !1, !0, {
                    width: "40%",
                    left: "30%",
                    top: "3em"
                }, function() {
                    document.body.removeEventListener("keydown",
                        X.Ig, !0)
                });
                document.body.addEventListener("keydown", X.Ig, !0)
            }
    },
    Mk: function() {
        var a = document.getElementById("dialogDone");
        if (vi) {
            var b = document.getElementById("dialogLinesText");
            b.textContent = "";
            var c = al(),
                c = Y.Ml(c),
                d = c.split("\n").length,
                e = document.getElementById("containerCode");
            e.textContent = c;
            "function" == typeof prettyPrintOne && (c = e.innerHTML, c = prettyPrintOne(c, "js"), e.innerHTML = c);
            c = 1 == d ? An("Games_linesOfCode1") : An("Games_linesOfCode2").replace("%1", d);
            b.appendChild(document.createTextNode(c))
        }
        c =
            10 > D ? An("Games_nextLevel").replace("%1", D + 1) : An("Games_finalLevel");
        b = document.getElementById("doneCancel");
        b.addEventListener("click", X.Xb, !0);
        b.addEventListener("touchend", X.Xb, !0);
        b = document.getElementById("doneOk");
        b.addEventListener("click", Y.$f, !0);
        b.addEventListener("touchend", Y.$f, !0);
        X.cf(a, null, !1, !0, {
            width: "40%",
            left: "30%",
            top: "3em"
        }, function() {
            document.body.removeEventListener("keydown", X.Qg, !0)
        });
        document.body.addEventListener("keydown", X.Qg, !0);
        document.getElementById("dialogDoneText").textContent =
            c
    },
    fh: function(a) {
        !X.Uc || 13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode || (X.Xb(!0), a.stopPropagation(), a.preventDefault())
    },
    Il: function() {
        document.body.addEventListener("keydown", X.fh, !0)
    },
    Kl: function() {
        document.body.removeEventListener("keydown", X.fh, !0)
    },
    Qg: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.Xb(!0), a.stopPropagation(), a.preventDefault(), 27 != a.keyCode && Y.$f()
    },
    Ig: function(a) {
        if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode) X.Xb(!0), a.stopPropagation(), a.preventDefault(), 27 !=
            a.keyCode && Y.Qe()
    }
};
window.BlocklyDialogs = X;
X.hideDialog = X.Xb;
// Copyright 2012 Google Inc.  Apache License 2.0
var V = new $k;
el("Blockly,break,case,catch,continue,debugger,default,delete,do,else,finally,for,function,if,in,instanceof,new,return,switch,this,throw,try,typeof,var,void,while,with,class,enum,export,extends,import,super,implements,interface,let,package,private,protected,public,static,yield,const,null,true,false,Array,ArrayBuffer,Boolean,Date,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Error,eval,EvalError,Float32Array,Float64Array,Function,Infinity,Int16Array,Int32Array,Int8Array,isFinite,isNaN,Iterator,JSON,Math,NaN,Number,Object,parseFloat,parseInt,RangeError,ReferenceError,RegExp,StopIteration,String,SyntaxError,TypeError,Uint16Array,Uint32Array,Uint8Array,Uint8ClampedArray,undefined,uneval,URIError,applicationCache,closed,Components,content,_content,controllers,crypto,defaultStatus,dialogArguments,directories,document,frameElement,frames,fullScreen,globalStorage,history,innerHeight,innerWidth,length,location,locationbar,localStorage,menubar,messageManager,mozAnimationStartTime,mozInnerScreenX,mozInnerScreenY,mozPaintCount,name,navigator,opener,outerHeight,outerWidth,pageXOffset,pageYOffset,parent,performance,personalbar,pkcs11,returnValue,screen,screenX,screenY,scrollbars,scrollMaxX,scrollMaxY,scrollX,scrollY,self,sessionStorage,sidebar,status,statusbar,toolbar,top,URL,window,addEventListener,alert,atob,back,blur,btoa,captureEvents,clearImmediate,clearInterval,clearTimeout,close,confirm,disableExternalCapture,dispatchEvent,dump,enableExternalCapture,escape,find,focus,forward,GeckoActiveXObject,getAttention,getAttentionWithCycleCount,getComputedStyle,getSelection,home,matchMedia,maximize,minimize,moveBy,moveTo,mozRequestAnimationFrame,open,openDialog,postMessage,print,prompt,QueryInterface,releaseEvents,removeEventListener,resizeBy,resizeTo,restore,routeEvent,scroll,scrollBy,scrollByLines,scrollByPages,scrollTo,setCursor,setImmediate,setInterval,setResizable,setTimeout,showModalDialog,sizeToContent,stop,unescape,updateCommands,XPCNativeWrapper,XPCSafeJSObjectWrapper,onabort,onbeforeunload,onblur,onchange,onclick,onclose,oncontextmenu,ondevicemotion,ondeviceorientation,ondragdrop,onerror,onfocus,onhashchange,onkeydown,onkeypress,onkeyup,onload,onmousedown,onmousemove,onmouseout,onmouseover,onmouseup,onmozbeforepaint,onpaint,onpopstate,onreset,onresize,onscroll,onselect,onsubmit,onunload,onpageshow,onpagehide,Image,Option,Worker,Event,Range,File,FileReader,Blob,BlobBuilder,Attr,CDATASection,CharacterData,Comment,console,DocumentFragment,DocumentType,DomConfiguration,DOMError,DOMErrorHandler,DOMException,DOMImplementation,DOMImplementationList,DOMImplementationRegistry,DOMImplementationSource,DOMLocator,DOMObject,DOMString,DOMStringList,DOMTimeStamp,DOMUserData,Entity,EntityReference,MediaQueryList,MediaQueryListListener,NameList,NamedNodeMap,Node,NodeFilter,NodeIterator,NodeList,Notation,Plugin,PluginArray,ProcessingInstruction,SharedWorker,Text,TimeRanges,Treewalker,TypeInfo,UserDataHandler,Worker,WorkerGlobalScope,HTMLDocument,HTMLElement,HTMLAnchorElement,HTMLAppletElement,HTMLAudioElement,HTMLAreaElement,HTMLBaseElement,HTMLBaseFontElement,HTMLBodyElement,HTMLBRElement,HTMLButtonElement,HTMLCanvasElement,HTMLDirectoryElement,HTMLDivElement,HTMLDListElement,HTMLEmbedElement,HTMLFieldSetElement,HTMLFontElement,HTMLFormElement,HTMLFrameElement,HTMLFrameSetElement,HTMLHeadElement,HTMLHeadingElement,HTMLHtmlElement,HTMLHRElement,HTMLIFrameElement,HTMLImageElement,HTMLInputElement,HTMLKeygenElement,HTMLLabelElement,HTMLLIElement,HTMLLinkElement,HTMLMapElement,HTMLMenuElement,HTMLMetaElement,HTMLModElement,HTMLObjectElement,HTMLOListElement,HTMLOptGroupElement,HTMLOptionElement,HTMLOutputElement,HTMLParagraphElement,HTMLParamElement,HTMLPreElement,HTMLQuoteElement,HTMLScriptElement,HTMLSelectElement,HTMLSourceElement,HTMLSpanElement,HTMLStyleElement,HTMLTableElement,HTMLTableCaptionElement,HTMLTableCellElement,HTMLTableDataCellElement,HTMLTableHeaderCellElement,HTMLTableColElement,HTMLTableRowElement,HTMLTableSectionElement,HTMLTextAreaElement,HTMLTimeElement,HTMLTitleElement,HTMLTrackElement,HTMLUListElement,HTMLUnknownElement,HTMLVideoElement,HTMLCanvasElement,CanvasRenderingContext2D,CanvasGradient,CanvasPattern,TextMetrics,ImageData,CanvasPixelArray,HTMLAudioElement,HTMLVideoElement,NotifyAudioAvailableEvent,HTMLCollection,HTMLAllCollection,HTMLFormControlsCollection,HTMLOptionsCollection,HTMLPropertiesCollection,DOMTokenList,DOMSettableTokenList,DOMStringMap,RadioNodeList,SVGDocument,SVGElement,SVGAElement,SVGAltGlyphElement,SVGAltGlyphDefElement,SVGAltGlyphItemElement,SVGAnimationElement,SVGAnimateElement,SVGAnimateColorElement,SVGAnimateMotionElement,SVGAnimateTransformElement,SVGSetElement,SVGCircleElement,SVGClipPathElement,SVGColorProfileElement,SVGCursorElement,SVGDefsElement,SVGDescElement,SVGEllipseElement,SVGFilterElement,SVGFilterPrimitiveStandardAttributes,SVGFEBlendElement,SVGFEColorMatrixElement,SVGFEComponentTransferElement,SVGFECompositeElement,SVGFEConvolveMatrixElement,SVGFEDiffuseLightingElement,SVGFEDisplacementMapElement,SVGFEDistantLightElement,SVGFEFloodElement,SVGFEGaussianBlurElement,SVGFEImageElement,SVGFEMergeElement,SVGFEMergeNodeElement,SVGFEMorphologyElement,SVGFEOffsetElement,SVGFEPointLightElement,SVGFESpecularLightingElement,SVGFESpotLightElement,SVGFETileElement,SVGFETurbulenceElement,SVGComponentTransferFunctionElement,SVGFEFuncRElement,SVGFEFuncGElement,SVGFEFuncBElement,SVGFEFuncAElement,SVGFontElement,SVGFontFaceElement,SVGFontFaceFormatElement,SVGFontFaceNameElement,SVGFontFaceSrcElement,SVGFontFaceUriElement,SVGForeignObjectElement,SVGGElement,SVGGlyphElement,SVGGlyphRefElement,SVGGradientElement,SVGLinearGradientElement,SVGRadialGradientElement,SVGHKernElement,SVGImageElement,SVGLineElement,SVGMarkerElement,SVGMaskElement,SVGMetadataElement,SVGMissingGlyphElement,SVGMPathElement,SVGPathElement,SVGPatternElement,SVGPolylineElement,SVGPolygonElement,SVGRectElement,SVGScriptElement,SVGStopElement,SVGStyleElement,SVGSVGElement,SVGSwitchElement,SVGSymbolElement,SVGTextElement,SVGTextPathElement,SVGTitleElement,SVGTRefElement,SVGTSpanElement,SVGUseElement,SVGViewElement,SVGVKernElement,SVGAngle,SVGColor,SVGICCColor,SVGElementInstance,SVGElementInstanceList,SVGLength,SVGLengthList,SVGMatrix,SVGNumber,SVGNumberList,SVGPaint,SVGPoint,SVGPointList,SVGPreserveAspectRatio,SVGRect,SVGStringList,SVGTransform,SVGTransformList,SVGAnimatedAngle,SVGAnimatedBoolean,SVGAnimatedEnumeration,SVGAnimatedInteger,SVGAnimatedLength,SVGAnimatedLengthList,SVGAnimatedNumber,SVGAnimatedNumberList,SVGAnimatedPreserveAspectRatio,SVGAnimatedRect,SVGAnimatedString,SVGAnimatedTransformList,SVGPathSegList,SVGPathSeg,SVGPathSegArcAbs,SVGPathSegArcRel,SVGPathSegClosePath,SVGPathSegCurvetoCubicAbs,SVGPathSegCurvetoCubicRel,SVGPathSegCurvetoCubicSmoothAbs,SVGPathSegCurvetoCubicSmoothRel,SVGPathSegCurvetoQuadraticAbs,SVGPathSegCurvetoQuadraticRel,SVGPathSegCurvetoQuadraticSmoothAbs,SVGPathSegCurvetoQuadraticSmoothRel,SVGPathSegLinetoAbs,SVGPathSegLinetoHorizontalAbs,SVGPathSegLinetoHorizontalRel,SVGPathSegLinetoRel,SVGPathSegLinetoVerticalAbs,SVGPathSegLinetoVerticalRel,SVGPathSegMovetoAbs,SVGPathSegMovetoRel,ElementTimeControl,TimeEvent,SVGAnimatedPathData,SVGAnimatedPoints,SVGColorProfileRule,SVGCSSRule,SVGExternalResourcesRequired,SVGFitToViewBox,SVGLangSpace,SVGLocatable,SVGRenderingIntent,SVGStylable,SVGTests,SVGTextContentElement,SVGTextPositioningElement,SVGTransformable,SVGUnitTypes,SVGURIReference,SVGViewSpec,SVGZoomAndPan");
V.I = 0;
V.B = 1;
V.Kg = 1;
V.g = 2;
V.rg = 3;
V.Dg = 3;
V.ec = 4;
V.Ed = 4;
V.Bq = 4;
V.Ra = 4;
V.yq = 4;
V.Cq = 4;
V.Eg = 4;
V.hc = 5;
V.K = 5;
V.F = 5;
V.ga = 6;
V.qc = 6;
V.qe = 7;
V.Qa = 8;
V.Fg = 8;
V.Hg = 8;
V.ma = 9;
V.Dd = 10;
V.re = 11;
V.Fd = 12;
V.La = 13;
V.fc = 14;
V.H = 15;
V.Cd = 16;
V.i = 17;
V.h = 99;
V.G = function(a) {
    V.j = Object.create(null);
    V.T = Object.create(null);
    V.u ? V.u.reset() : V.u = new hl(V.N);
    var b = [];
    a = Gk(a);
    if (a.length) {
        for (var c = 0; c < a.length; c++) b[c] = V.u.getName(a[c], "VARIABLE");
        V.j.variables = "var " + b.join(", ") + ";"
    }
};
V.finish = function(a) {
    var b = [],
        c;
    for (c in V.j) b.push(V.j[c]);
    delete V.j;
    delete V.T;
    V.u.reset();
    return b.join("\n\n") + "\n\n\n" + a
};
V.Sa = function(a) {
    return a + ";\n"
};
V.Eq = function(a) {
    a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
    return "'" + a + "'"
};
V.Fb = function(a, b) {
    var c = "";
    if (!a.L || !a.L.M) {
        var d = a.Fe();
        d && (c += cl(d, "// ") + "\n");
        for (var e = 0; e < a.h.length; e++)
            if (1 == a.h[e].type) {
                var f = E(a.h[e].J);
                if (f) {
                    for (var d = [], f = f.bb(), k = 0; k < f.length; k++) {
                        var l = f[k].Fe();
                        l && d.push(l)
                    }
                    d.length && d.push("");
                    (d = d.join("\n")) && (c += cl(d, "// "))
                }
            }
    }
    e = bl(V, a.g && E(a.g));
    return c + b + e
};
V.eb = {};
V.math_number = function(a) {
    return [parseFloat(U(a, "NUM")), V.I]
};
V.math_arithmetic = function(a) {
    var b = {
            ADD: [" + ", V.ga],
            MINUS: [" - ", V.qc],
            MULTIPLY: [" * ", V.hc],
            DIVIDE: [" / ", V.K],
            POWER: [null, V.i]
        }[U(a, "OP")],
        c = b[0],
        b = b[1],
        d = W(a, "A", b) || "0";
    a = W(a, "B", b) || "0";
    return c ? [d + c + a, b] : ["Math.pow(" + d + ", " + a + ")", V.g]
};
V.math_single = function(a) {
    var b = U(a, "OP"),
        c;
    if ("NEG" == b) return a = W(a, "NUM", V.Ra) || "0", "-" == a[0] && (a = " " + a), ["-" + a, V.Ra];
    a = "SIN" == b || "COS" == b || "TAN" == b ? W(a, "NUM", V.K) || "0" : W(a, "NUM", V.h) || "0";
    switch (b) {
        case "ABS":
            c = "Math.abs(" + a + ")";
            break;
        case "ROOT":
            c = "Math.sqrt(" + a + ")";
            break;
        case "LN":
            c = "Math.log(" + a + ")";
            break;
        case "EXP":
            c = "Math.exp(" + a + ")";
            break;
        case "POW10":
            c = "Math.pow(10," + a + ")";
            break;
        case "ROUND":
            c = "Math.round(" + a + ")";
            break;
        case "ROUNDUP":
            c = "Math.ceil(" + a + ")";
            break;
        case "ROUNDDOWN":
            c = "Math.floor(" +
                a + ")";
            break;
        case "SIN":
            c = "Math.sin(" + a + " / 180 * Math.PI)";
            break;
        case "COS":
            c = "Math.cos(" + a + " / 180 * Math.PI)";
            break;
        case "TAN":
            c = "Math.tan(" + a + " / 180 * Math.PI)"
    }
    if (c) return [c, V.g];
    switch (b) {
        case "LOG10":
            c = "Math.log(" + a + ") / Math.log(10)";
            break;
        case "ASIN":
            c = "Math.asin(" + a + ") / Math.PI * 180";
            break;
        case "ACOS":
            c = "Math.acos(" + a + ") / Math.PI * 180";
            break;
        case "ATAN":
            c = "Math.atan(" + a + ") / Math.PI * 180";
            break;
        default:
            throw "Unknown math operator: " + b;
    }
    return [c, V.K]
};
V.math_constant = function(a) {
    return {
        PI: ["Math.PI", V.B],
        E: ["Math.E", V.B],
        GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", V.K],
        SQRT2: ["Math.SQRT2", V.B],
        SQRT1_2: ["Math.SQRT1_2", V.B],
        INFINITY: ["Infinity", V.I]
    }[U(a, "CONSTANT")]
};
V.math_number_property = function(a) {
    var b = W(a, "NUMBER_TO_CHECK", V.F) || "0",
        c = U(a, "PROPERTY"),
        d;
    if ("PRIME" == c) return d = fl("mathIsPrime", ["function {leCUI8hutHZI4480Dc}(n) {", "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods", "  if (n == 2 || n == 3) {", "    return true;", "  }", "  // False if n is NaN, negative, is 1, or not whole.", "  // And false if n is divisible by 2 or 3.", "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {", "    return false;", "  }", "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
        "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {", "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {", "      return false;", "    }", "  }", "  return true;", "}"
    ]) + "(" + b + ")", [d, V.g];
    switch (c) {
        case "EVEN":
            d = b + " % 2 == 0";
            break;
        case "ODD":
            d = b + " % 2 == 1";
            break;
        case "WHOLE":
            d = b + " % 1 == 0";
            break;
        case "POSITIVE":
            d = b + " > 0";
            break;
        case "NEGATIVE":
            d = b + " < 0";
            break;
        case "DIVISIBLE_BY":
            a = W(a, "DIVISOR", V.F) || "0", d = b + " % " + a + " == 0"
    }
    return [d, V.ma]
};
V.math_change = function(a) {
    var b = W(a, "DELTA", V.ga) || "0";
    a = V.u.getName(U(a, "VAR"), "VARIABLE");
    return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + b + ";\n"
};
V.math_round = V.math_single;
V.math_trig = V.math_single;
V.math_on_list = function(a) {
    var b = U(a, "OP");
    switch (b) {
        case "SUM":
            a = W(a, "LIST", V.B) || "[]";
            a += ".reduce(function(x, y) {return x + y;})";
            break;
        case "MIN":
            a = W(a, "LIST", V.i) || "[]";
            a = "Math.min.apply(null, " + a + ")";
            break;
        case "MAX":
            a = W(a, "LIST", V.i) || "[]";
            a = "Math.max.apply(null, " + a + ")";
            break;
        case "AVERAGE":
            b = fl("mathMean", ["function {leCUI8hutHZI4480Dc}(myList) {", "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;", "}"]);
            a = W(a, "LIST", V.h) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MEDIAN":
            b = fl("mathMedian", ["function {leCUI8hutHZI4480Dc}(myList) {", "  var localList = myList.filter(function (x) {return typeof x == 'number';});", "  if (!localList.length) return null;", "  localList.sort(function(a, b) {return b - a;});", "  if (localList.length % 2 == 0) {", "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;", "  } else {", "    return localList[(localList.length - 1) / 2];", "  }", "}"]);
            a = W(a, "LIST", V.h) || "[]";
            a = b + "(" + a + ")";
            break;
        case "MODE":
            b = fl("mathModes", ["function {leCUI8hutHZI4480Dc}(values) {",
                "  var modes = [];", "  var counts = [];", "  var maxCount = 0;", "  for (var i = 0; i < values.length; i++) {", "    var value = values[i];", "    var found = false;", "    var thisCount;", "    for (var j = 0; j < counts.length; j++) {", "      if (counts[j][0] === value) {", "        thisCount = ++counts[j][1];", "        found = true;", "        break;", "      }", "    }", "    if (!found) {", "      counts.push([value, 1]);", "      thisCount = 1;", "    }", "    maxCount = Math.max(thisCount, maxCount);", "  }",
                "  for (var j = 0; j < counts.length; j++) {", "    if (counts[j][1] == maxCount) {", "        modes.push(counts[j][0]);", "    }", "  }", "  return modes;", "}"
            ]);
            a = W(a, "LIST", V.h) || "[]";
            a = b + "(" + a + ")";
            break;
        case "STD_DEV":
            b = fl("mathStandardDeviation", ["function {leCUI8hutHZI4480Dc}(numbers) {", "  var n = numbers.length;", "  if (!n) return null;", "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;", "  var variance = 0;", "  for (var j = 0; j < n; j++) {", "    variance += Math.pow(numbers[j] - mean, 2);",
                "  }", "  variance = variance / n;", "  return Math.sqrt(variance);", "}"
            ]);
            a = W(a, "LIST", V.h) || "[]";
            a = b + "(" + a + ")";
            break;
        case "RANDOM":
            b = fl("mathRandomList", ["function {leCUI8hutHZI4480Dc}(list) {", "  var x = Math.floor(Math.random() * list.length);", "  return list[x];", "}"]);
            a = W(a, "LIST", V.h) || "[]";
            a = b + "(" + a + ")";
            break;
        default:
            throw "Unknown operator: " + b;
    }
    return [a, V.g]
};
V.math_modulo = function(a) {
    var b = W(a, "DIVIDEND", V.F) || "0";
    a = W(a, "DIVISOR", V.F) || "0";
    return [b + " % " + a, V.F]
};
V.math_constrain = function(a) {
    var b = W(a, "VALUE", V.i) || "0",
        c = W(a, "LOW", V.i) || "0";
    a = W(a, "HIGH", V.i) || "Infinity";
    return ["Math.min(Math.max(" + b + ", " + c + "), " + a + ")", V.g]
};
V.math_random_int = function(a) {
    var b = W(a, "FROM", V.i) || "0";
    a = W(a, "TO", V.i) || "0";
    return [fl("mathRandomInt", ["function {leCUI8hutHZI4480Dc}(a, b) {", "  if (a > b) {", "    // Swap a and b to ensure a is smaller.", "    var c = a;", "    a = b;", "    b = c;", "  }", "  return Math.floor(Math.random() * (b - a + 1) + a);", "}"]) + "(" + b + ", " + a + ")", V.g]
};
V.math_random_float = function() {
    return ["Math.random()", V.g]
};
V.cb = {};
V.controls_if = function(a) {
    for (var b = 0, c = W(a, "IF" + b, V.h) || "false", d = dl(a, "DO" + b), e = "if (" + c + ") {\n" + d + "}", b = 1; b <= a.gb; b++) c = W(a, "IF" + b, V.h) || "false", d = dl(a, "DO" + b), e += " else if (" + c + ") {\n" + d + "}";
    a.vb && (d = dl(a, "ELSE"), e += " else {\n" + d + "}");
    return e + "\n"
};
V.logic_compare = function(a) {
    var b = {
            EQ: "==",
            NEQ: "!=",
            LT: "<",
            LTE: "<=",
            GT: ">",
            GTE: ">="
        }[U(a, "OP")],
        c = "==" == b || "!=" == b ? V.ma : V.Qa,
        d = W(a, "A", c) || "0";
    a = W(a, "B", c) || "0";
    return [d + " " + b + " " + a, c]
};
V.logic_operation = function(a) {
    var b = "AND" == U(a, "OP") ? "&&" : "||",
        c = "&&" == b ? V.La : V.fc,
        d = W(a, "A", c);
    a = W(a, "B", c);
    if (d || a) {
        var e = "&&" == b ? "true" : "false";
        d || (d = e);
        a || (a = e)
    } else a = d = "false";
    return [d + " " + b + " " + a, c]
};
V.logic_negate = function(a) {
    var b = V.ec;
    return ["!" + (W(a, "BOOL", b) || "true"), b]
};
V.logic_boolean = function(a) {
    return ["TRUE" == U(a, "BOOL") ? "true" : "false", V.I]
};
V.logic_null = function() {
    return ["null", V.I]
};
V.logic_ternary = function(a) {
    var b = W(a, "IF", V.H) || "false",
        c = W(a, "THEN", V.H) || "null";
    a = W(a, "ELSE", V.H) || "null";
    return [b + " ? " + c + " : " + a, V.H]
};
S.cb = {};
S.cb.ra = 210;
S.controls_if = {
    G: function() {
        this.u = R.sg;
        this.Ma(S.cb.ra);
        T(Aj(this.sa(1, "IF0"), "Boolean"), R.mf);
        T(this.sa(3, "DO0"), R.nf);
        this.Fc(!0);
        this.Zc(!0);
        this.Gh(new Si(["controls_if_elseif", "controls_if_else"]));
        var a = this;
        Fj(this, function() {
            if (a.gb || a.vb) {
                if (!a.gb && a.vb) return R.ug;
                if (a.gb && !a.vb) return R.di;
                if (a.gb && a.vb) return R.ei
            } else return R.ci;
            return ""
        });
        this.vb = this.gb = 0
    },
    T: function() {
        if (!this.gb && !this.vb) return null;
        var a = document.createElement("mutation");
        this.gb && a.setAttribute("elseif", this.gb);
        this.vb && a.setAttribute("else", 1);
        return a
    },
    ga: function(a) {
        this.gb = parseInt(a.getAttribute("elseif"), 10) || 0;
        this.vb = parseInt(a.getAttribute("else"), 10) || 0;
        this.fe()
    },
    Dg: function(a) {
        var b = a.Zd("controls_if_if");
        b.zc();
        for (var c = b.g, d = 1; d <= this.gb; d++) {
            var e = a.Zd("controls_if_elseif");
            e.zc();
            c.connect(e.S);
            c = e.g
        }
        this.vb && (a = a.Zd("controls_if_else"), a.zc(), c.connect(a.S));
        return b
    },
    qe: function(a) {
        var b = E(a.g);
        this.vb = this.gb = 0;
        a = [null];
        for (var c = [null], d = null; b;) {
            switch (b.type) {
                case "controls_if_elseif":
                    this.gb++;
                    a.push(b.Kg);
                    c.push(b.qc);
                    break;
                case "controls_if_else":
                    this.vb++;
                    d = b.qc;
                    break;
                default:
                    throw "Unknown block type.";
            }
            b = b.g && E(b.g)
        }
        this.fe();
        for (b = 1; b <= this.gb; b++) Xi(a[b], this, "IF" + b), Xi(c[b], this, "DO" + b);
        Xi(d, this, "ELSE")
    },
    ec: function(a) {
        a = E(a.g);
        for (var b = 1; a;) {
            switch (a.type) {
                case "controls_if_elseif":
                    var c = mh(this, "IF" + b),
                        d = mh(this, "DO" + b);
                    a.Kg = c && c.J.M;
                    a.qc = d && d.J.M;
                    b++;
                    break;
                case "controls_if_else":
                    d = mh(this, "ELSE");
                    a.qc = d && d.J.M;
                    break;
                default:
                    throw "Unknown block type.";
            }
            a = a.g && E(a.g)
        }
    },
    fe: function() {
        mh(this,
            "ELSE") && this.Xc("ELSE");
        for (var a = 1; mh(this, "IF" + a);) this.Xc("IF" + a), this.Xc("DO" + a), a++;
        for (a = 1; a <= this.gb; a++) T(Aj(this.sa(1, "IF" + a), "Boolean"), R.tg), T(this.sa(3, "DO" + a), R.nf);
        this.vb && T(this.sa(3, "ELSE"), R.lf)
    }
};
S.controls_if_if = {
    G: function() {
        this.Ma(S.cb.ra);
        T(Kj(this), R.ai);
        this.Zc(!0);
        this.Fa = R.bi;
        this.Qa = !1
    }
};
S.controls_if_elseif = {
    G: function() {
        this.Ma(S.cb.ra);
        T(Kj(this), R.Xh);
        this.Fc(!0);
        this.Zc(!0);
        this.Fa = R.Yh;
        this.Qa = !1
    }
};
S.controls_if_else = {
    G: function() {
        this.Ma(S.cb.ra);
        T(Kj(this), R.Zh);
        this.Fc(!0);
        this.Fa = R.$h;
        this.Qa = !1
    }
};
S.logic_compare = {
    G: function() {
        var a = [
                ["=", "EQ"],
                ["\u2260", "NEQ"],
                [">", "LT"],
                ["\u2265", "LTE"],
                ["<", "GT"],
                ["\u2264", "GTE"]
            ],
            b = [
                ["=", "EQ"],
                ["\u2260", "NEQ"],
                ["<", "LT"],
                ["\u2264", "LTE"],
                [">", "GT"],
                ["\u2265", "GTE"]
            ],
            a = this.s ? a : b;
        this.u = R.xg;
        this.Ma(S.cb.ra);
        this.Ob(!0, "Boolean");
        this.sa(1, "A");
        T(this.sa(1, "B"), new Rj(a), "OP");
        this.Nb(!0);
        var c = this;
        Fj(this, function() {
            var a = U(c, "OP");
            return {
                EQ: R.yi,
                NEQ: R.Bi,
                LT: R.zg,
                LTE: R.Ai,
                GT: R.yg,
                GTE: R.zi
            }[a]
        });
        this.Sa = [null, null]
    },
    onchange: function(a) {
        var b = Uj(this, "A"),
            c = Uj(this, "B");
        if (b && c && !ie(b.L, c.L)) {
            F(a.i);
            for (a = 0; a < this.Sa.length; a++) {
                var d = this.Sa[a];
                if (d === b || d === c) Be(d), Ce(d)
            }
            F(!1)
        }
        this.Sa[0] = b;
        this.Sa[1] = c
    }
};
S.logic_operation = {
    G: function() {
        var a = [
            [R.Ag, "AND"],
            [R.Ii, "OR"]
        ];
        this.u = R.Bg;
        this.Ma(S.cb.ra);
        this.Ob(!0, "Boolean");
        Aj(this.sa(1, "A"), "Boolean");
        T(Aj(this.sa(1, "B"), "Boolean"), new Rj(a), "OP");
        this.Nb(!0);
        var b = this;
        Fj(this, function() {
            var a = U(b, "OP");
            return {
                AND: R.Cg,
                OR: R.Ji
            }[a]
        })
    }
};
S.logic_negate = {
    G: function() {
        Lj(this, {
            message0: R.Di,
            args0: [{
                type: "input_value",
                name: "BOOL",
                check: "Boolean"
            }],
            output: "Boolean",
            colour: S.cb.ra,
            tooltip: R.Ei,
            helpUrl: R.Ci
        })
    }
};
S.logic_boolean = {
    G: function() {
        Lj(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "BOOL",
                options: [
                    [R.xi, "TRUE"],
                    [R.ti, "FALSE"]
                ]
            }],
            output: "Boolean",
            colour: S.cb.ra,
            tooltip: R.wi,
            helpUrl: R.ui
        })
    }
};
S.logic_null = {
    G: function() {
        Lj(this, {
            message0: R.Fi,
            output: null,
            colour: S.cb.ra,
            tooltip: R.Hi,
            helpUrl: R.Gi
        })
    }
};
S.logic_ternary = {
    G: function() {
        this.u = R.Li;
        this.Ma(S.cb.ra);
        T(Aj(this.sa(1, "IF"), "Boolean"), R.Ki);
        T(this.sa(1, "THEN"), R.Ni);
        T(this.sa(1, "ELSE"), R.Mi);
        this.Ob(!0);
        this.Fa = R.Oi;
        this.Dd = null
    },
    onchange: function(a) {
        var b = Uj(this, "THEN"),
            c = Uj(this, "ELSE"),
            d = this.L.M;
        if ((b || c) && d)
            for (var e = 0; 2 > e; e++) {
                var f = 1 == e ? b : c;
                f && !ie(f.L, d) && (F(a.i), d === this.Dd ? (Be(this), Ce(d.v)) : (Be(f), Ce(f)), F(!1))
            }
        this.Dd = d
    }
};
S.eb = {};
S.eb.ra = 230;
S.math_number = {
    G: function() {
        this.u = R.rj;
        this.Ma(S.eb.ra);
        T(Kj(this), new Tj("0", zk), "NUM");
        this.Ob(!0, "Number");
        var a = this;
        Fj(this, function() {
            var b = a.getParent();
            return b && Ij(b) && b.Fa || R.sj
        })
    }
};
S.math_arithmetic = {
    G: function() {
        Lj(this, {
            message0: "%1 %2 %3",
            args0: [{
                type: "input_value",
                name: "A",
                check: "Number"
            }, {
                type: "field_dropdown",
                name: "OP",
                options: [
                    [R.Pi, "ADD"],
                    [R.fk, "MINUS"],
                    [R.qj, "MULTIPLY"],
                    [R.ej, "DIVIDE"],
                    [R.Kj, "POWER"]
                ]
            }, {
                type: "input_value",
                name: "B",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: S.eb.ra,
            helpUrl: R.Qi
        });
        var a = this;
        Fj(this, function() {
            var b = U(a, "OP");
            return {
                ADD: R.Ri,
                MINUS: R.Ti,
                MULTIPLY: R.Ui,
                DIVIDE: R.Si,
                POWER: R.Vi
            }[b]
        })
    }
};
S.math_single = {
    G: function() {
        Lj(this, {
            message0: "%1 %2",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [
                    [R.Yj, "ROOT"],
                    [R.Xj, "ABS"],
                    ["-", "NEG"],
                    ["ln", "LN"],
                    ["log10", "LOG10"],
                    ["e^", "EXP"],
                    ["10^", "POW10"]
                ]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            output: "Number",
            colour: S.eb.ra,
            helpUrl: R.Wj
        });
        var a = this;
        Fj(this, function() {
            var b = U(a, "OP");
            return {
                ROOT: R.ek,
                ABS: R.Zj,
                NEG: R.ck,
                LN: R.ak,
                LOG10: R.bk,
                EXP: R.$j,
                POW10: R.dk
            }[b]
        })
    }
};
S.math_trig = {
    G: function() {
        Lj(this, {
            message0: "%1 %2",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [
                    [R.lk, "SIN"],
                    [R.jk, "COS"],
                    [R.nk, "TAN"],
                    [R.hk, "ASIN"],
                    [R.gk, "ACOS"],
                    [R.ik, "ATAN"]
                ]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            output: "Number",
            colour: S.eb.ra,
            helpUrl: R.kk
        });
        var a = this;
        Fj(this, function() {
            var b = U(a, "OP");
            return {
                SIN: R.vk,
                COS: R.tk,
                TAN: R.wk,
                ASIN: R.qk,
                ACOS: R.pk,
                ATAN: R.rk
            }[b]
        })
    }
};
S.math_constant = {
    G: function() {
        Lj(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "CONSTANT",
                options: [
                    ["\u03c0", "PI"],
                    ["e", "E"],
                    ["\u03c6", "GOLDEN_RATIO"],
                    ["sqrt(2)", "SQRT2"],
                    ["sqrt(\u00bd)", "SQRT1_2"],
                    ["\u221e", "INFINITY"]
                ]
            }],
            output: "Number",
            colour: S.eb.ra,
            tooltip: R.aj,
            helpUrl: R.$i
        })
    }
};
S.math_number_property = {
    G: function() {
        var a = [
            [R.gj, "EVEN"],
            [R.ij, "ODD"],
            [R.kj, "PRIME"],
            [R.mj, "WHOLE"],
            [R.jj, "POSITIVE"],
            [R.hj, "NEGATIVE"],
            [R.fj, "DIVISIBLE_BY"]
        ];
        this.Ma(S.eb.ra);
        Aj(this.sa(1, "NUMBER_TO_CHECK"), "Number");
        a = new Rj(a, function(a) {
            this.v.fe("DIVISIBLE_BY" == a)
        });
        T(Kj(this), a, "PROPERTY");
        this.Nb(!0);
        this.Ob(!0, "Boolean");
        this.Fa = R.lj
    },
    T: function() {
        var a = document.createElement("mutation"),
            b = "DIVISIBLE_BY" == U(this, "PROPERTY");
        a.setAttribute("divisor_input", b);
        return a
    },
    ga: function(a) {
        a = "true" ==
            a.getAttribute("divisor_input");
        this.fe(a)
    },
    fe: function(a) {
        var b = mh(this, "DIVISOR");
        a ? b || Aj(this.sa(1, "DIVISOR"), "Number") : b && this.Xc("DIVISOR")
    }
};
S.math_change = {
    G: function() {
        Lj(this, {
            message0: R.Xi,
            args0: [{
                type: "field_variable",
                name: "VAR",
                variable: R.Yi
            }, {
                type: "input_value",
                name: "DELTA",
                check: "Number"
            }],
            previousStatement: null,
            nextStatement: null,
            colour: S.eb.ra,
            helpUrl: R.Wi
        });
        var a = this;
        Fj(this, function() {
            return R.Zi.replace("%1", U(a, "VAR"))
        })
    }
};
S.math_round = {
    G: function() {
        Lj(this, {
            message0: "%1 %2",
            args0: [{
                type: "field_dropdown",
                name: "OP",
                options: [
                    [R.Sj, "ROUND"],
                    [R.Uj, "ROUNDUP"],
                    [R.Tj, "ROUNDDOWN"]
                ]
            }, {
                type: "input_value",
                name: "NUM",
                check: "Number"
            }],
            output: "Number",
            colour: S.eb.ra,
            tooltip: R.Vj,
            helpUrl: R.Rj
        })
    }
};
S.math_on_list = {
    G: function() {
        var a = [
                [R.Bj, "SUM"],
                [R.xj, "MIN"],
                [R.vj, "MAX"],
                [R.uj, "AVERAGE"],
                [R.wj, "MEDIAN"],
                [R.yj, "MODE"],
                [R.Aj, "STD_DEV"],
                [R.zj, "RANDOM"]
            ],
            b = this;
        this.u = R.tj;
        this.Ma(S.eb.ra);
        this.Ob(!0, "Number");
        a = new Rj(a, function(a) {
            b.Ed(a)
        });
        T(Aj(this.sa(1, "LIST"), "Array"), a, "OP");
        Fj(this, function() {
            var a = U(b, "OP");
            return {
                SUM: R.Jj,
                MIN: R.Fj,
                MAX: R.Dj,
                AVERAGE: R.Cj,
                MEDIAN: R.Ej,
                MODE: R.Gj,
                STD_DEV: R.Ij,
                RANDOM: R.Hj
            }[a]
        })
    },
    Ed: function(a) {
        "MODE" == a ? Ae(this.L, "Array") : Ae(this.L, "Number")
    },
    T: function() {
        var a =
            document.createElement("mutation");
        a.setAttribute("op", U(this, "OP"));
        return a
    },
    ga: function(a) {
        this.Ed(a.getAttribute("op"))
    }
};
S.math_modulo = {
    G: function() {
        Lj(this, {
            message0: R.oj,
            args0: [{
                type: "input_value",
                name: "DIVIDEND",
                check: "Number"
            }, {
                type: "input_value",
                name: "DIVISOR",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: S.eb.ra,
            tooltip: R.pj,
            helpUrl: R.nj
        })
    }
};
S.math_constrain = {
    G: function() {
        Lj(this, {
            message0: R.cj,
            args0: [{
                type: "input_value",
                name: "VALUE",
                check: "Number"
            }, {
                type: "input_value",
                name: "LOW",
                check: "Number"
            }, {
                type: "input_value",
                name: "HIGH",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: S.eb.ra,
            tooltip: R.dj,
            helpUrl: R.bj
        })
    }
};
S.math_random_int = {
    G: function() {
        Lj(this, {
            message0: R.Pj,
            args0: [{
                type: "input_value",
                name: "FROM",
                check: "Number"
            }, {
                type: "input_value",
                name: "TO",
                check: "Number"
            }],
            inputsInline: !0,
            output: "Number",
            colour: S.eb.ra,
            tooltip: R.Qj,
            helpUrl: R.Oj
        })
    }
};
S.math_random_float = {
    G: function() {
        Lj(this, {
            message0: R.Mj,
            output: "Number",
            colour: S.eb.ra,
            tooltip: R.Nj,
            helpUrl: R.Lj
        })
    }
};
S.bird_noWorm = {
    G: function() {
        Lj(this, {
            message0: An("Bird_noWorm"),
            output: "Boolean",
            colour: 330,
            tooltip: An("Bird_noWormTooltip")
        })
    }
};
V.bird_noWorm = function() {
    return ["noWorm()", V.g]
};
S.bird_heading = {
    G: function() {
        this.Ma(290);
        T(T(Kj(this), An("Bird_heading")), new Nj("90"), "ANGLE");
        this.Fc(!0);
        this.Fa = An("Bird_headingTooltip")
    }
};
V.bird_heading = function(a) {
    return "heading(" + parseFloat(U(a, "ANGLE")) + ", 'block_id_" + a.id + "');\n"
};
S.bird_position = {
    G: function() {
        Lj(this, {
            message0: "%1",
            args0: [{
                type: "field_dropdown",
                name: "XY",
                options: [
                    ["x", "X"],
                    ["y", "Y"]
                ]
            }],
            output: "Number",
            colour: 330,
            tooltip: An("Bird_positionTooltip")
        })
    }
};
V.bird_position = function(a) {
    return ["get" + U(a, "XY").charAt(0) + "()", V.g]
};
S.bird_compare = {
    G: function() {
        this.u = R.xg;
        var a = rn() ? [
            [">", "LT"],
            ["<", "GT"]
        ] : [
            ["<", "LT"],
            [">", "GT"]
        ];
        this.Ma(S.cb.ra);
        this.Ob(!0, "Boolean");
        Aj(this.sa(1, "A"), "Number");
        T(Aj(this.sa(1, "B"), "Number"), new Rj(a), "OP");
        this.Nb(!0);
        var b = this;
        Fj(this, function() {
            var a = U(b, "OP");
            return {
                yo: R.zg,
                Hm: R.yg
            }[a]
        })
    }
};
V.bird_compare = function(a) {
    var b = "LT" == U(a, "OP") ? "<" : ">",
        c = V.Qa,
        d = W(a, "A", c) || "0";
    a = W(a, "B", c) || "0";
    return [d + " " + b + " " + a, c]
};
S.bird_and = {
    G: function() {
        this.u = R.Bg;
        this.Ma(S.cb.ra);
        this.Ob(!0, "Boolean");
        Aj(this.sa(1, "A"), "Boolean");
        T(Aj(this.sa(1, "B"), "Boolean"), R.Ag);
        this.Nb(!0);
        this.Fa = R.Cg
    }
};
V.bird_and = function(a) {
    var b = V.La,
        c = W(a, "A", b);
    a = W(a, "B", b);
    c || a ? (c || (c = "true"), a || (a = "true")) : a = c = "false";
    return [c + " && " + a, b]
};
S.bird_ifElse = {
    G: function() {
        this.u = R.sg;
        this.Ma(S.cb.ra);
        Aj(T(this.sa(1, "CONDITION"), R.mf), "Boolean");
        T(this.sa(3, "DO"), R.nf);
        T(this.sa(3, "ELSE"), R.lf);
        this.Jd = !1;
        this.Fa = R.ug
    }
};
V.bird_ifElse = function(a) {
    var b = W(a, "CONDITION", V.h) || "false",
        c = dl(a, "DO");
    a = dl(a, "ELSE");
    return "if (" + b + ") {\n" + c + "} else {\n" + a + "}\n"
};
S.controls_if.ul = S.controls_if.G;
S.controls_if.G = function() {
    this.ul();
    this.Fc(!1);
    this.Zc(!1);
    this.Jd = !1
};

function Z(a, b, c, d) {
    this.ie = a;
    this.je = b;
    this.x1 = c;
    this.y1 = d
}
Z.prototype.clone = function() {
    return new Z(this.ie, this.je, this.x1, this.y1)
};
var zn = "bird";
Y.$f = function() {
    10 > D ? window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + "?lang=" + Vc + "&level=" + (D + 1) : Y.Qe()
};
var Cn = [void 0, {
        start: new w(20, 20),
        Zb: 90,
        Za: new w(50, 50),
        ob: new w(80, 80),
        Ya: []
    }, {
        start: new w(20, 20),
        Zb: 0,
        Za: new w(80, 20),
        ob: new w(80, 80),
        Ya: [new Z(0, 50, 60, 50)]
    }, {
        start: new w(20, 70),
        Zb: 270,
        Za: new w(50, 20),
        ob: new w(80, 70),
        Ya: [new Z(50, 50, 50, 100)]
    }, {
        start: new w(20, 80),
        Zb: 0,
        Za: null,
        ob: new w(80, 20),
        Ya: [new Z(0, 0, 65, 65)]
    }, {
        start: new w(80, 80),
        Zb: 270,
        Za: null,
        ob: new w(20, 20),
        Ya: [new Z(0, 100, 65, 35)]
    }, {
        start: new w(20, 40),
        Zb: 0,
        Za: new w(80, 20),
        ob: new w(20, 80),
        Ya: [new Z(0, 59, 50, 59)]
    }, {
        start: new w(80, 80),
        Zb: 180,
        Za: new w(80, 20),
        ob: new w(20, 20),
        Ya: [new Z(0, 70, 40, 70), new Z(70, 50, 100, 50)]
    }, {
        start: new w(20, 25),
        Zb: 90,
        Za: new w(80, 25),
        ob: new w(80, 75),
        Ya: [new Z(50, 0, 50, 25), new Z(75, 50, 100, 50), new Z(50, 100, 50, 75), new Z(0, 50, 25, 50)]
    }, {
        start: new w(80, 70),
        Zb: 180,
        Za: new w(20, 20),
        ob: new w(80, 20),
        Ya: [new Z(0, 69, 31, 100), new Z(40, 50, 71, 0), new Z(80, 50, 100, 50)]
    }, {
        start: new w(20, 20),
        Zb: 90,
        Za: new w(80, 50),
        ob: new w(20, 20),
        Ya: [new Z(40, 60, 60, 60), new Z(40, 60, 60, 30), new Z(60, 30, 100, 30)]
    }][D],
    Dn = [],
    En = 1;

function Fn() {
    var a = document.getElementById("svgBird");
    Cn.Ya.push(new Z(-5, -5, -5, 105));
    Cn.Ya.push(new Z(-5, 105, 105, 105));
    Cn.Ya.push(new Z(105, 105, 105, -5));
    Cn.Ya.push(new Z(105, -5, -5, -5));
    for (var b = 0; b < Cn.Ya.length; b++) {
        var c = Cn.Ya[b],
            d = document.createElementNS("http://www.w3.org/2000/svg", "line");
        d.setAttribute("x1", c.ie / 100 * 400);
        d.setAttribute("y1", 400 * (1 - c.je / 100));
        d.setAttribute("x2", c.x1 / 100 * 400);
        d.setAttribute("y2", 400 * (1 - c.y1 / 100));
        d.setAttribute("stroke", "#CCB");
        d.setAttribute("stroke-width",
            10);
        d.setAttribute("stroke-linecap", "round");
        a.appendChild(d)
    }
    b = document.createElementNS("http://www.w3.org/2000/svg", "image");
    b.setAttribute("id", "nest");
    b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "bird/nest.png");
    b.setAttribute("height", 100);
    b.setAttribute("width", 100);
    a.appendChild(b);
    Cn.Za && (b = document.createElementNS("http://www.w3.org/2000/svg", "image"), b.setAttribute("id", "worm"), b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "bird/worm.png"), b.setAttribute("height",
        100), b.setAttribute("width", 100), a.appendChild(b));
    b = document.createElementNS("http://www.w3.org/2000/svg", "clipPath");
    b.setAttribute("id", "birdClipPath");
    c = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    c.setAttribute("id", "clipRect");
    c.setAttribute("width", 120);
    c.setAttribute("height", 120);
    b.appendChild(c);
    a.appendChild(b);
    b = document.createElementNS("http://www.w3.org/2000/svg", "image");
    b.setAttribute("id", "bird");
    b.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "bird/birds-120.png");
    b.setAttribute("height", 480);
    b.setAttribute("width", 1440);
    b.setAttribute("clip-path", "url(#birdClipPath)");
    a.appendChild(b);
    b = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    b.setAttribute("class", "edges");
    b.setAttribute("width", 400);
    b.setAttribute("height", 400);
    a.appendChild(b);
    for (var b = 3 < D, c = 4 < D, d = 1, e = .1;.9 > e; e += .1) {
        if (b) {
            var f = document.createElementNS("http://www.w3.org/2000/svg", "line");
            f.setAttribute("class", "edges");
            f.setAttribute("x1", 400 * e);
            f.setAttribute("y1", 400);
            f.setAttribute("x2",
                400 * e);
            f.setAttribute("y2", 400 - 9 * d);
            a.appendChild(f)
        }
        c && (f = document.createElementNS("http://www.w3.org/2000/svg", "line"), f.setAttribute("class", "edges"), f.setAttribute("x1", 0), f.setAttribute("y1", 400 * e), f.setAttribute("x2", 9 * d), f.setAttribute("y2", 400 * e), a.appendChild(f));
        2 == d && (b && (f = document.createElementNS("http://www.w3.org/2000/svg", "text"), f.setAttribute("class", "edgeX"), f.setAttribute("x", 400 * e + 2), f.setAttribute("y", 396), f.appendChild(document.createTextNode(Math.round(100 * e))), a.appendChild(f)),
            c && (f = document.createElementNS("http://www.w3.org/2000/svg", "text"), f.setAttribute("class", "edgeY"), f.setAttribute("x", 3), f.setAttribute("y", 400 * e - 2), f.appendChild(document.createTextNode(Math.round(100 - 100 * e))), a.appendChild(f)));
        d = 1 == d ? 2 : 1
    }
}
window.addEventListener("load", function() {
    function a() {
        c.style.top = Math.max(10, d.offsetTop - window.pageYOffset) + "px";
        c.style.left = b ? "10px" : "420px";
        c.style.width = window.innerWidth - 440 + "px"
    }
    document.body.innerHTML = Uc();
    Y.G();
    var b = rn(),
        c = document.getElementById("blockly"),
        d = document.getElementById("visualization");
    window.addEventListener("scroll", function() {
        a();
        $d.Aq(window, "resize")
    });
    window.addEventListener("resize", a);
    a();
    var e = document.getElementById("toolbox");
    vi = Qk("blockly", {
        media: "third-party/blockly/media/",
        rtl: b,
        toolbox: e,
        trashcan: !0
    });
    Ki(vi, ["bird/quack.ogg", "bird/quack.mp3"], "quack");
    Ki(vi, ["bird/whack.mp3", "bird/whack.ogg"], "whack");
    Ki(vi, ["bird/worm.mp3", "bird/worm.ogg"], "worm");
    el("noWorm,heading,getX,getY");
    Fn();
    e = "";
    e = 1 == D ? '<xml>  <block type="bird_heading" x="70" y="70"></block></xml>' : 5 > D ? '<xml>  <block type="bird_ifElse" x="70" y="70"></block></xml>' : '<xml>  <block type="controls_if" x="70" y="70"></block></xml>';
    Y.sl(e, !1);
    Gn();
    Bn("runButton", Hn);
    Bn("resetButton", In);
    setTimeout(function() {
        vi.Qb(function() {
            Jn()
        });
        Jn()
    }, 5E3);
    8 < D && setTimeout(X.Jg, 3E5);
    setTimeout(Y.ql, 1);
    setTimeout(Y.rl, 1)
});
var Kn = 0;

function Jn() {
    if (0 == I && Oc.result != Ln && !xn(D)) {
        var a = rn(),
            b = bh(Wg(vi)),
            c = Rg(vi.R.m, !0),
            d = document.getElementById("dialogHelp"),
            e = null,
            f = null;
        if (1 == D) - 1 == b.indexOf(">90<") && -1 != b.indexOf("bird_heading") || oj || (f = {
            width: "370px",
            top: "140px"
        }, f[a ? "right" : "left"] = "215px", e = Rg(vi, !0), e = e.length ? e[0].o : c[0].o);
        else if (2 == D) - 1 == b.indexOf("bird_noWorm") && (f = {
            width: "350px",
            top: "170px"
        }, f[a ? "right" : "left"] = "180px", e = c[1].o);
        else if (4 == D) - 1 == b.indexOf("bird_compare") && (f = {
            width: "350px",
            top: "230px"
        }, f[a ? "right" :
            "left"] = "180px", e = c[2].o);
        else if (5 == D) {
            if (Kn || (Kn = setInterval(Jn, 100)), -1 == b.indexOf("mutation else")) {
                e = Rg(vi, !1);
                for (f = 0;
                    (c = e[f]) && "controls_if" != c.type; f++);
                c.Ib.Z() ? (d = document.getElementById("dialogMutatorHelp"), e = c.Ib.m.R.se[1], b = ed(e), f = {
                    width: "340px",
                    top: b.y + 60 + "px"
                }, f.left = b.x - (a ? 310 : 0) + "px") : (b = ed(c.o), f = {
                    width: "340px",
                    top: b.y + 100 + "px"
                }, f.left = b.x - (a ? 350 : 0) + "px", e = c.o)
            }
        } else if (6 == D) {
            if (-1 == b.indexOf("mutation")) {
                e = Rg(vi, !1);
                for (f = 0;
                    (c = e[f]) && "controls_if" != c.type; f++);
                b = ed(c.o);
                f = {
                    width: "350px",
                    top: b.y + 220 + "px"
                };
                f.left = b.x - (a ? 350 : 0) + "px";
                e = c.o
            }
        } else 8 == D && -1 == b.indexOf("bird_and") && (f = {
            width: "350px",
            top: "360px"
        }, f[a ? "right" : "left"] = "450px", e = c[4].o);
        f ? d.parentNode != document.getElementById("dialog") && X.cf(d, e, !0, !1, f, null) : X.Xb(!1)
    }
}

function Gn() {
    for (var a = 0; a < Dn.length; a++) window.clearTimeout(Dn[a]);
    Dn = [];
    C = Cn.start.clone();
    Rc = Qc = Cn.Zb;
    Sc = !Cn.Za;
    En = 1;
    Mn();
    if (a = document.getElementById("worm")) a.setAttribute("x", Cn.Za.x / 100 * 400 - 50), a.setAttribute("y", 400 * (1 - Cn.Za.y / 100) - 50), a.style.visibility = "visible";
    a = document.getElementById("nest");
    a.setAttribute("x", Cn.ob.x / 100 * 400 - 50);
    a.setAttribute("y", 400 * (1 - Cn.ob.y / 100) - 50)
}

function Hn(a) {
    if (!Y.Ub(a)) {
        a = document.getElementById("runButton");
        var b = document.getElementById("resetButton");
        b.style.minWidth || (b.style.minWidth = a.offsetWidth + "px");
        a.style.display = "none";
        b.style.display = "inline";
        ti(vi, !0);
        Gn();
        Nn()
    }
}

function In(a) {
    Y.Ub(a) || (document.getElementById("runButton").style.display = "inline", document.getElementById("resetButton").style.display = "none", ti(vi, !1), Gn())
}
var Ln = 1;

function On(a, b) {
    a.setProperty(b, "heading", a.createNativeFunction(function(a, b) {
        var e = a.valueOf(),
            f = b.toString(),
            k = e * Math.PI / 180;
        C.x += Math.cos(k);
        C.y += Math.sin(k);
        Qc = e;
        Tc.push(["move", C.x, C.y, Qc, f]);
        if (Sc && 15 > gc(C, Cn.ob)) throw Tc.push(["play", "quack", null]), Pn(Cn.ob), Tc.push(["finish", null]), !0;
        !Sc && Cn.Za && 15 > gc(C, Cn.Za) && (Pn(Cn.Za), Tc.push(["worm", null]), Tc.push(["play", "worm", null]), Sc = !0);
        a: {
            for (e = 0; f = Cn.Ya[e]; e++) {
                var k = C,
                    l;
                k instanceof w ? (l = k.y, k = k.x) : l = void 0;
                var n = f.ie,
                    m = f.je,
                    q = f.x1 - f.ie,
                    r =
                    f.y1 - f.je,
                    k = cc(((Number(k) - n) * (f.x1 - n) + (Number(l) - m) * (f.y1 - m)) / (q * q + r * r), 0, 1);
                l = f.ie;
                n = f.je;
                if (6 > gc(new w(l + k * (f.x1 - l), n + k * (f.y1 - n)), C)) {
                    e = !0;
                    break a
                }
            }
            e = !1
        }
        if (e) throw Tc.push(["play", "whack", null]), !1;
    }));
    a.setProperty(b, "noWorm", a.createNativeFunction(function() {
        return a.createPrimitive(!Sc)
    }));
    a.setProperty(b, "getX", a.createNativeFunction(function() {
        return a.createPrimitive(C.x)
    }));
    a.setProperty(b, "getY", a.createNativeFunction(function() {
        return a.createPrimitive(C.y)
    }))
}

function Nn() {
    if ("Interpreter" in window) {
        Tc = [];
        var a = al(),
            b = a.indexOf("if ("),
            c = a.indexOf("}\n"); - 1 != b && -1 != c && (a = a.substring(b, c + 2));
        b = 0;
        a = new Interpreter("while(true) {\n" + a + "}", On);
        try {
            for (c = 1E5; a.step();)
                if (0 == c--) throw Infinity;
            b = -1
        } catch (d) {
            Infinity === d ? b = 2 : !0 === d ? b = Ln : !1 === d ? b = -2 : (b = -2, window.alert(d))
        }
        Pc = b == Ln ? 10 : 15;
        Gn();
        Dn.push(setTimeout(Qn, 1))
    } else setTimeout(Nn, 250)
}

function Qn() {
    Dn = [];
    var a = Tc.shift();
    a ? (Y.Pe(a.pop()), "move" == a[0] || "goto" == a[0] ? (C.x = a[1], C.y = a[2], Qc = a[3], En = "move" == a[0] ? 2 : 1, Mn()) : "worm" == a[0] ? document.getElementById("worm").style.visibility = "hidden" : "finish" == a[0] ? (En = 3, Mn(), Y.Fl(), X.Mk()) : "play" == a[0] && Li(vi, a[1], .5), Dn.push(setTimeout(Qn, 5 * Pc))) : Y.Pe(null)
}

function Mn() {
    var a;
    a = dc(Rc) - dc(Qc);
    180 < a ? a -= 360 : -180 >= a && (a = 360 + a);
    10 >= Math.abs(a) ? Rc = Qc : (Rc -= 10 * ec(a), Rc = dc(Rc));
    var b = (14 - Math.round(Rc / 360 * 12)) % 12,
        c = Rc % 30;
    15 <= c && (c -= 30);
    var c = -1 * c,
        d;
    if (1 == En) d = 0;
    else if (3 == En) d = 3;
    else if (2 == En) d = Math.round(Date.now() / 100) % 3;
    else throw "Unknown pose.";
    a = C.x / 100 * 400 - 60;
    var e = 400 * (1 - C.y / 100) - 60,
        f = document.getElementById("bird");
    f.setAttribute("x", a - 120 * b);
    f.setAttribute("y", e - 120 * d);
    f.setAttribute("transform", "rotate(" + c + ", " + (a + 60) + ", " + (e + 60) + ")");
    b = document.getElementById("clipRect");
    b.setAttribute("x", a);
    b.setAttribute("y", e)
}

function Pn(a) {
    var b = Math.round(gc(C, a));
    a = dc(180 * Math.atan2(a.y - C.y, a.x - C.x) / Math.PI);
    for (var c = a * Math.PI / 180, d = 0; d < b; d++) C.x += Math.cos(c), C.y += Math.sin(c), Tc.push(["goto", C.x, C.y, a, null])
};