// Automatically generated file.  Do not edit!
var f = this;

function g(a) {
    var b = k;

    function c() {}
    c.prototype = b.prototype;
    a.D = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.u = function(a, c, h) {
        for (var v = Array(arguments.length - 2), p = 2; p < arguments.length; p++) v[p - 2] = arguments[p];
        return b.prototype[c].apply(a, v)
    }
};
var l = String.prototype.trim ? function(a) {
    return a.trim()
} : function(a) {
    return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
};

function m(a, b) {
    return a < b ? -1 : a > b ? 1 : 0
};
var aa = Array.prototype.indexOf ? function(a, b, c) {
    return Array.prototype.indexOf.call(a, b, c)
} : function(a, b, c) {
    c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
    if ("string" == typeof a) return "string" == typeof b && 1 == b.length ? a.indexOf(b, c) : -1;
    for (; c < a.length; c++)
        if (c in a && a[c] === b) return c;
    return -1
};

function ba(a, b, c) {
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
};
var n;
a: {
    var t = f.navigator;
    if (t) {
        var u = t.userAgent;
        if (u) {
            n = u;
            break a
        }
    }
    n = ""
};
var w = {
    B: !0
};

function k() {
    throw Error("Do not instantiate directly");
}
k.prototype.g = null;
k.prototype.toString = function() {
    return this.content
};
var ca = -1 != n.indexOf("Opera"),
    x = -1 != n.indexOf("Trident") || -1 != n.indexOf("MSIE"),
    da = -1 != n.indexOf("Edge"),
    y = -1 != n.indexOf("Gecko") && !(-1 != n.toLowerCase().indexOf("webkit") && -1 == n.indexOf("Edge")) && !(-1 != n.indexOf("Trident") || -1 != n.indexOf("MSIE")) && -1 == n.indexOf("Edge"),
    ea = -1 != n.toLowerCase().indexOf("webkit") && -1 == n.indexOf("Edge");

function z() {
    var a = f.document;
    return a ? a.documentMode : void 0
}
var A;
a: {
    var B = "",
        C = function() {
            var a = n;
            if (y) return /rv\:([^\);]+)(\)|;)/.exec(a);
            if (da) return /Edge\/([\d\.]+)/.exec(a);
            if (x) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
            if (ea) return /WebKit\/(\S+)/.exec(a);
            if (ca) return /(?:Version)[ \/]?(\S+)/.exec(a)
        }();
    C && (B = C ? C[1] : "");
    if (x) {
        var D = z();
        if (null != D && D > parseFloat(B)) {
            A = String(D);
            break a
        }
    }
    A = B
}
var E = {};

function F(a) {
    if (!E[a]) {
        for (var b = 0, c = l(String(A)).split("."), d = l(String(a)).split("."), e = Math.max(c.length, d.length), h = 0; 0 == b && h < e; h++) {
            var v = c[h] || "",
                p = d[h] || "",
                ga = RegExp("(\\d*)(\\D*)", "g"),
                ha = RegExp("(\\d*)(\\D*)", "g");
            do {
                var q = ga.exec(v) || ["", "", ""],
                    r = ha.exec(p) || ["", "", ""];
                if (0 == q[0].length && 0 == r[0].length) break;
                b = m(0 == q[1].length ? 0 : parseInt(q[1], 10), 0 == r[1].length ? 0 : parseInt(r[1], 10)) || m(0 == q[2].length, 0 == r[2].length) || m(q[2], r[2])
            } while (0 == b)
        }
        E[a] = 0 <= b
    }
}
var G = f.document,
    fa = G && x ? z() || ("CSS1Compat" == G.compatMode ? parseInt(A, 10) : 5) : void 0;
var H;
if (!(H = !y && !x)) {
    var I;
    if (I = x) I = 9 <= Number(fa);
    H = I
}
H || y && F("1.9.1");
x && F("9");
x && F(8);

function ia(a) {
    if (null != a) switch (a.g) {
        case 1:
            return 1;
        case -1:
            return -1;
        case 0:
            return 0
    }
    return null
}

function J() {
    k.call(this)
}
g(J);
J.prototype.i = w;

function K(a) {
    return null != a && a.i === w ? a : ja(String(String(a)).replace(ka, la), ia(a))
}

function L() {
    k.call(this)
}
g(L);
L.prototype.i = {
    A: !0
};
L.prototype.g = 1;

function M() {
    k.call(this)
}
g(M);
M.prototype.i = {}.o;

function N() {
    k.call(this)
}
g(N);
N.prototype.i = {
    C: !0
};
N.prototype.g = 1;

function O() {
    k.call(this)
}
g(O);
O.prototype.i = {
    w: !0
};
O.prototype.g = 1;

function P() {
    k.call(this)
}
g(P);
P.prototype.i = {
    v: !0
};
P.prototype.g = 1;

function Q(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.g = d);
        return e
    }
}
var ja = Q(J);
Q(M);
(function(a) {
    function b() {}
    b.prototype = a.prototype;
    return function(a, d) {
        if (!String(a)) return "";
        var e = new b;
        e.content = String(a);
        void 0 !== d && (e.g = d);
        return e
    }
})(J);
var ma = {
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

function la(a) {
    return ma[a]
}
var ka = /[\x00\x22\x26\x27\x3c\x3e]/g;

function na() {
    var a = {
        lang: R,
        j: S,
        m: -1 != T.indexOf(R)
    };
    return '<div style="display: none"><span id="title">ගනිදු ක්‍රීඩා</span><span id="Index_clear">ඔබේ සියලු ක්‍රීඩා මකන්නද?</span></div><div id="header"><img id="banner" src="index/title-beta.png" height="51" width="244" alt="ගනිදු ක්‍රීඩා"><div id="subtitle">හෙට දවසේ දක්‍ෂයන්ට ක්‍රීඩා. &nbsp;' + (a.j ? '<a href="about.html?lang=' + K(a.lang) + '">' : '<a href="about?lang=' + K(a.lang) + '">') + 'More info...</a></div></div><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g transform="translate(-80,-60)"><svg height="100%" width="100%" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 100 100" preserveAspectRatio="none" x=80 y=60><path id="path" d="M 10,15 C 15,60 35,100 50,70 S 80,20 90,85"' +
        (a.m ? 'transform="translate(100) scale(-1, 1)"' : "") + "/></svg>" + U({
            app: "puzzle",
            x: 10,
            y: 15,
            h: "ප්‍රහෙලිකා"
        }, a) + U({
            app: "maze",
            x: 16,
            y: 47,
            h: "වංකගිරිය"
        }, a) + U({
            app: "bird",
            x: 29,
            y: 75,
            h: "කුරුල්ලා"
        }, a) + U({
            app: "turtle",
            x: 49,
            y: 72,
            h: "කැස්බෑවා"
        }, a) + U({
            app: "movie",
            x: 64,
            y: 48,
            h: "කතන්දර"
        }, a) + U({
            app: "pond-tutor",
            x: 83,
            y: 53,
            h: "පොකුණු ප්‍රහාර"
        }, a) + U({
            app: "pond-duck",
            x: 90,
            y: 85,
            h: "පොකුණු සටන"
        }, a) + '</g></svg><select id="languageMenu"></select><p id="clearDataPara" style="visibility: hidden">නැවත පටන් ගන්න ඕනෙද?<button class="secondary" id="clearData">දත්ත මකන්න</span></button></p>'
}

function U(a, b) {
    return '<svg height="150" width="160" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (b.m ? 'x="' + K(100 - a.x) + '%"' : 'x="' + K(a.x) + '%"') + 'y="' + K(a.y) + '%"><path d="M 41.11,98.89 A 55 55 0 1 1 118.89,98.89" class="gaugeBack" id="back-' + K(a.app) + '" /><g class="icon" id="icon-' + K(a.app) + '"><circle cx=80 cy=60 r=50 class="iconBack" /><image xlink:href="index/' + K(a.app) + '.png" height="100" width="100" x=30 y=10 />' + (b.j ? '<a id="link-' + K(a.app) + '" xlink:href="' +
        K(a.app) + ".html?lang=" + K(b.lang) + '">' : '<a xlink:href="' + K(a.app) + "?lang=" + K(b.lang) + '">') + '<circle cx=80 cy=60 r=50 class="iconBorder" /><path d="M 21.11,98.89 A 55 55 0 1 1 21.11,98.89" class="gaugeFront" id="gauge-' + K(a.app) + '" /><text x="80" y="135">' + K(a.h) + "</text></a></g></svg>"
};

function oa(a, b) {
    var c;
    c = a.className;
    for (var d = c = "string" == typeof c && c.match(/\S+/g) || [], e = ba(arguments, 1), h = 0; h < e.length; h++) 0 <= aa(d, e[h]) || d.push(e[h]);
    a.className = c.join(" ")
};
var pa = {},
    qa = {
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
    T = "ace ar fa he mzn ps".split(" "),
    R = window.BlocklyGamesLang,
    V = window.BlocklyGamesLanguages,
    S = !!window.location.pathname.match(/\.html$/),
    ra = Number,
    W, X = window.location.search.match(/[?&]level=([^&]+)/);
W = X ? decodeURIComponent(X[1].replace(/\+/g, "%20")) : "NaN";
ra(W);

function sa() {
    document.title = document.getElementById("title").textContent;
    document.dir = -1 != T.indexOf(R) ? "rtl" : "ltr";
    document.head.parentElement.setAttribute("lang", R);
    var a = document.getElementById("languageMenu");
    if (a) {
        for (var b = [], c = 0; c < V.length; c++) {
            var d = V[c];
            b.push([qa[d], d])
        }
        b.sort(function(a, b) {
            return a[0] > b[0] ? 1 : a[0] < b[0] ? -1 : 0
        });
        for (c = a.options.length = 0; c < b.length; c++) {
            var e = b[c],
                d = e[1],
                e = new Option(e[0], d);
            d == R && (e.selected = !0);
            a.options.add(e)
        }
        1 >= a.options.length && (a.style.display = "none")
    }
    for (c =
        1; 10 >= c; c++) a = document.getElementById("level" + c), b = !!Y(pa.s, c), a && b && oa(a, "level_done");
    (c = document.querySelector('meta[name="viewport"]')) && 725 > screen.availWidth && c.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
    setTimeout(ta, 1)
}

function ua() {
    var a = document.getElementById("languageMenu"),
        a = encodeURIComponent(a.options[a.selectedIndex].value),
        b = window.location.search,
        b = 1 >= b.length ? "?lang=" + a : b.match(/[?&]lang=[^&]*/) ? b.replace(/([?&]lang=)[^&]*/, "$1" + a) : b.replace(/\?/, "?lang=" + a + "&");
    window.location = window.location.protocol + "//" + window.location.host + window.location.pathname + b
}

function Y(a, b) {
    var c;
    try {
        c = window.sessionStorage[a + b]
    } catch (d) {}
    return c
}

function va(a) {
    var b = wa;
    "string" == typeof a && (a = document.getElementById(a));
    a.addEventListener("click", b, !0);
    a.addEventListener("touchend", b, !0)
}

function ta() {
    if (!S) {
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
var Z = "puzzle maze bird turtle movie pond-tutor pond-duck".split(" ");
window.addEventListener("load", function() {
    function a(a, b) {
        return function() {
            xa(a, 0, b)
        }
    }
    document.body.innerHTML = na();
    sa();
    document.getElementById("languageMenu").addEventListener("change", ua, !0);
    for (var b = !1, c = [], d = 0; d < Z.length; d++) {
        c[d] = 0;
        for (var e = 1; 10 >= e; e++) Y(Z[d], e) && (b = !0, c[d]++)
    }
    b && (document.getElementById("clearDataPara").style.visibility = "visible", d = document.getElementById("clearData"), va(d));
    for (d = 0; d < c.length; d++) b = Z[d], (e = c[d] / (0 == d ? 1 : 10) * 270) ? setTimeout(a(b, e), 1500) : (b = document.getElementById("gauge-" +
        b), b.parentNode.removeChild(b))
}, !1);

function xa(a, b, c) {
    b += 4;
    ya(a, Math.min(b, c));
    b < c && setTimeout(function() {
        xa(a, b, c)
    }, 10)
}

function ya(a, b) {
    var c = (b - 45) / 180 * Math.PI,
        d = 80 - 52.75 * Math.cos(c),
        c = 60 - 52.75 * Math.sin(c),
        e = 180 < b ? 1 : 0;
    document.getElementById("gauge-" + a).setAttribute("d", ["M 42.7,97.3 A", 52.75, 52.75, 0, e, 1, d, c].join(" "))
}

function wa() {
    var a = confirm,
        b;
    (b = document.getElementById("Index_clear")) ? (b = b.textContent, b = b.replace(/\\n/g, "\n")) : b = null;
    if (a(null === b ? "[Unknown message: Index_clear]" : b)) {
        for (a = 0; a < Z.length; a++)
            for (b = 1; 10 >= b; b++) delete window.sessionStorage[Z[a] + b];
        location.reload()
    }
};