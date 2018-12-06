/*! SWFObject + Canvas-to-Blob + JpegCamera */

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject = function() {
    var D = "undefined",
        r = "object",
        S = "Shockwave Flash",
        W = "ShockwaveFlash.ShockwaveFlash",
        q = "application/x-shockwave-flash",
        R = "SWFObjectExprInst",
        x = "onreadystatechange",
        O = window,
        j = document,
        t = navigator,
        T = false,
        U = [h],
        o = [],
        N = [],
        I = [],
        l,
        Q,
        E,
        B,
        J = false,
        a = false,
        n,
        G,
        m = true,
        M = function() {
            var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                ah = t.userAgent.toLowerCase(),
                Y = t.platform.toLowerCase(),
                ae = Y ? /win/.test(Y) : /win/.test(ah),
                ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                X = !+"\v1",
                ag = [0, 0, 0],
                ab = null;
            if (typeof t.plugins != D && typeof t.plugins[S] == r) {
                ab = t.plugins[S].description;
                if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                    T = true;
                    X = false;
                    ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                    ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                    ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                    ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                }
            } else {
                if (typeof O.ActiveXObject != D) {
                    try {
                        var ad = new ActiveXObject(W);
                        if (ad) {
                            ab = ad.GetVariable("$version");
                            if (ab) {
                                X = true;
                                ab = ab.split(" ")[1].split(",");
                                ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                            }
                        }
                    } catch (Z) {}
                }
            }
            return {
                w3: aa,
                pv: ag,
                wk: af,
                ie: X,
                win: ae,
                mac: ac
            }
        }(),
        k = function() {
            if (!M.w3) {
                return
            }
            if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                f()
            }
            if (!J) {
                if (typeof j.addEventListener != D) {
                    j.addEventListener("DOMContentLoaded", f, false)
                }
                if (M.ie && M.win) {
                    j.attachEvent(x, function() {
                        if (j.readyState == "complete") {
                            j.detachEvent(x, arguments.callee);
                            f()
                        }
                    });
                    if (O == top) {
                        (function() {
                            if (J) {
                                return
                            }
                            try {
                                j.documentElement.doScroll("left")
                            } catch (X) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                }
                if (M.wk) {
                    (function() {
                        if (J) {
                            return
                        }
                        if (!/loaded|complete/.test(j.readyState)) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    })()
                }
                s(f)
            }
        }();
    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }
    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }
    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function() {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }
    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }
    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function() {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            })()
        } else {
            H()
        }
    }
    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }
    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }
    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }
    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function() {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            }
            u(aa, ab, X)
        }
    }
    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function() {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            })()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }
    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }
    function u(ai, ag, Y) {
        var X,
            aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }
    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }
    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function() {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }
    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }
    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) {}
        return X
    }
    function C(X) {
        return j.createElement(X)
    }
    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }
    function F(Z) {
        var Y = M.pv,
            X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }
    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }
    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }
    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function() {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function() {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function(ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function(X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function(ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function() {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function() {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function() {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function(Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function(Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function(X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function(aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function(aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function() {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();
!function(t) {
    "use strict";
    var e = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype,
        o = t.Blob && function() {
            try {
                return Boolean(new Blob)
            } catch (t) {
                return !1
            }
        }(),
        n = o && t.Uint8Array && function() {
            try {
                return 100 === new Blob([new Uint8Array(100)]).size
            } catch (t) {
                return !1
            }
        }(),
        r = t.BlobBuilder || t.WebKitBlobBuilder || t.MozBlobBuilder || t.MSBlobBuilder,
        a = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
        i = (o || r) && t.atob && t.ArrayBuffer && t.Uint8Array && function(t) {
            var e,
                i,
                l,
                u,
                b,
                c,
                d,
                B,
                f;
            if (e = t.match(a), !e)
                throw new Error("invalid data URI");
            for (i = e[2] ? e[1] : "text/plain" + (e[3] || ";charset=US-ASCII"), l = !!e[4], u = t.slice(e[0].length), b = l ? atob(u) : decodeURIComponent(u), c = new ArrayBuffer(b.length), d = new Uint8Array(c), B = 0; B < b.length; B += 1)
                d[B] = b.charCodeAt(B);
            return o ? new Blob([n ? d : c], {
                type: i
            }) : (f = new r, f.append(c), f.getBlob(i))
        };
    t.HTMLCanvasElement && !e.toBlob && (e.mozGetAsFile ? e.toBlob = function(t, o, n) {
        t(n && e.toDataURL && i ? i(this.toDataURL(o, n)) : this.mozGetAsFile("blob", o))
    } : e.toDataURL && i && (e.toBlob = function(t, e, o) {
        t(i(this.toDataURL(e, o)))
    })), "function" == typeof define && define.amd ? define(function() {
        return i
    }) : "object" == typeof module && module.exports ? module.exports = i : t.dataURLtoBlob = i
}(window);

/*! JpegCamera 1.3.3 | 2016-09-18
    (c) 2013 Adam Wrobel
    https://amw.github.io/jpeg_camera */
(function() {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o = {}.hasOwnProperty,
        p = function(a, b) {
            function c() {
                this.constructor = a
            }
            for (var d in b)
                o.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        };
    if (a = function() {
        function a(a, b) {
            if ("string" == typeof a && (a = document.getElementById(a.replace("#", ""))), !a || !a.offsetWidth)
                throw "JpegCamera: invalid container";
            a.innerHTML = "", this.view_width = parseInt(a.offsetWidth, 10), this.view_height = parseInt(a.offsetHeight, 10), this.container = document.createElement("div"), this.container.style.width = "100%", this.container.style.height = "100%", this.container.style.position = "relative", a.appendChild(this.container), this.options = this._extend({}, this.constructor.DefaultOptions, b), this._engine_init()
        }
        return a.DefaultOptions = {
            shutter_ogg_url: "/jpeg_camera/shutter.ogg",
            shutter_mp3_url: "/jpeg_camera/shutter.mp3",
            swf_url: "/jpeg_camera/jpeg_camera.swf",
            on_debug: function(a) {
                return console && console.log ? console.log("JpegCamera: " + a) : void 0
            },
            quality: .9,
            shutter: !0,
            mirror: !1,
            timeout: 0,
            retry_success: !1,
            scale: 1
        }, a._canvas_supported = !!document.createElement("canvas").getContext, a.canvas_supported = function() {
            return this._canvas_supported
        }, a.prototype.ready = function(a) {
            return this.options.on_ready = a, this.options.on_ready && this._is_ready && this.options.on_ready.call(this, {
                video_width: this.video_width,
                video_height: this.video_height
            }), this
        }, a.prototype._is_ready = !1, a.prototype.error = function(a) {
            return this.options.on_error = a, this.options.on_error && this._error_occured && this.options.on_error.call(this, this._error_occured), this
        }, a.prototype._error_occured = !1, a.StatsCaptureScale = .2, a.prototype.get_stats = function(b) {
            var c,
                e;
            return c = new d(this, {}), this._engine_capture(c, !1, .1, a.StatsCaptureScale), e = this, c.get_stats(function(a) {
                return b.call(e, a)
            })
        }, a.prototype.capture = function(a) {
            var b,
                c,
                e;
            return null == a && (a = {}), c = new d(this, a), this._snapshots[c.id] = c, e = c._options(), e.shutter && this._engine_play_shutter_sound(), b = Math.min(1, e.scale), b = Math.max(.01, b), this._engine_capture(c, e.mirror, e.quality, b), c
        }, a.prototype._snapshots = {}, a.prototype.show_stream = function() {
            return this._engine_show_stream(), this._displayed_snapshot = null, this
        }, a.prototype.discard_all = function() {
            var a,
                b,
                c;
            this._displayed_snapshot && this.show_stream(), c = this._snapshots;
            for (a in c)
                b = c[a], this._engine_discard(b), b._discarded = !0;
            return this._snapshots = {}, this
        }, a.prototype._extend = function(a) {
            var b,
                c,
                d,
                e,
                f,
                g;
            for (d = Array.prototype.slice.call(arguments, 1), f = 0, g = d.length; g > f; f++)
                if (c = d[f])
                    for (b in c)
                        e = c[b], a[b] = e;
            return a
        }, a.prototype._debug = function(a) {
            return this.options.on_debug ? this.options.on_debug.call(this, a) : void 0
        }, a.prototype._display = function(a) {
            return this._engine_display(a), this._displayed_snapshot = a
        }, a.prototype._displayed_snapshot = null, a.prototype._discard = function(a) {
            return this._displayed_snapshot === a && this.show_stream(), this._engine_discard(a), a._discarded = !0, delete this._snapshots[a.id]
        }, a.prototype._prepared = function(a, b) {
            var c;
            return this.video_width = a, this.video_height = b, this._debug("Camera resolution " + this.video_width + "x" + this.video_height + "px"), c = this, setTimeout(function() {
                return c._wait_until_stream_looks_ok(!0)
            }, 1)
        }, a.prototype._wait_until_stream_looks_ok = function(a) {
            return this.get_stats(function(b) {
                var c;
                return b.std > 2 ? (this._debug("Stream mean gray value = " + b.mean + " standard deviation = " + b.std), this._debug("Camera is ready"), this._is_ready = !0, this.options.on_ready ? this.options.on_ready.call(this, {
                    video_width: this.video_width,
                    video_height: this.video_height
                }) : void 0) : (a && this._debug("Stream mean gray value = " + b.mean + " standard deviation = " + b.std), c = this, setTimeout(function() {
                    return c._wait_until_stream_looks_ok(!1)
                }, 100))
            })
        }, a.prototype._got_error = function(a) {
            return this._debug("Error - " + a), this._error_occured = a, this.options.on_error ? this.options.on_error.call(this, this._error_occured) : void 0
        }, a.prototype._block_element_access = function() {
            return this._overlay = document.createElement("div"), this._overlay.style.width = "100%", this._overlay.style.height = "100%", this._overlay.style.position = "absolute", this._overlay.style.top = 0, this._overlay.style.left = 0, this._overlay.style.zIndex = 2, this.container.appendChild(this._overlay)
        }, a.prototype._overlay = null, a.prototype.view_width = null, a.prototype.view_height = null, a._add_prefixed_style = function(a, b, c) {
            var d;
            return d = b.charAt(0).toUpperCase() + b.slice(1), a.style[b] = c, a.style["Webkit" + d] = c, a.style["Moz" + d] = c, a.style["ms" + d] = c, a.style["O" + d] = c
        }, a
    }(), navigator.getUserMedia || (navigator.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia), window.AudioContext || (window.AudioContext = window.webkitAudioContext), h = function() {
        var a;
        if (a = document.createElement("canvas"), a.getContext && !a.toBlob)
            throw "JpegCamera: Canvas-to-Blob is not loaded"
    }, navigator.getUserMedia && (h(), l = "audio/ogg; codecs=vorbis", i = "audio/mpeg; ", f = function(a) {
        var b;
        return b = document.createElement("video"), !(!b.canPlayType || !b.canPlayType(a).replace(/no/, ""))
    }, c = function(b) {
        function c() {
            return m = c.__super__.constructor.apply(this, arguments)
        }
        return p(c, b), c.prototype._engine_init = function() {
            var b,
                c,
                d,
                e,
                g,
                h,
                j;
            this._debug("Using HTML5 engine"), j = Math.floor(.2 * this.view_height), e = Math.floor(.2 * this.view_width), this.message = document.createElement("div"), this.message["class"] = "message", this.message.style.width = "100%", this.message.style.height = "100%", a._add_prefixed_style(this.message, "boxSizing", "border-box"), this.message.style.overflow = "hidden", this.message.style.textAlign = "center", this.message.style.paddingTop = "" + j + "px", this.message.style.paddingBottom = "" + j + "px", this.message.style.paddingLeft = "" + e + "px", this.message.style.paddingRight = "" + e + "px", this.message.style.position = "absolute", this.message.style.zIndex = 3, this.message.innerHTML = "Please allow camera access when prompted by the browser.<br><br>Look for camera icon around your address bar.", this.container.appendChild(this.message), this.video_container = document.createElement("div"), this.video_container.style.width = "" + this.view_width + "px", this.video_container.style.height = "" + this.view_height + "px", this.video_container.style.overflow = "hidden", this.video_container.style.position = "absolute", this.video_container.style.zIndex = 1, this.container.appendChild(this.video_container), this.video = document.createElement("video"), this.video.autoplay = !0, a._add_prefixed_style(this.video, "transform", "scalex(-1.0)"), window.AudioContext && (f(l) ? this._load_shutter_sound(this.options.shutter_ogg_url) : f(i) && this._load_shutter_sound(this.options.shutter_mp3_url)), d = {
                video: {
                    optional: [{
                        minWidth: 1280
                    }, {
                        minWidth: 640
                    }, {
                        minWidth: 480
                    }, {
                        minWidth: 360
                    }]
                }
            }, h = this, g = function(a) {
                return h._remove_message(), 
                window.URL?h.video.srcObject = a : h.video.srcObject = a,
                h._block_element_access(), 
                h._wait_for_video_ready()
            }, c = function(a) {
                var b,
                    c,
                    d;
                h.message.innerHTML = '<span style="color: red;">You have denied camera access.</span><br><br>Look for camera icon around your address bar to change your decision.', b = a.code;
                for (c in a)
                    if (d = a[c], "code" !== c)
                        return void h._got_error(c);
                return h._got_error("UNKNOWN ERROR")
            };
            try {
                return navigator.getUserMedia(d, g, c)
            } catch (k) {
                return b = k, navigator.getUserMedia("video", g, c)
            }
        }, c.prototype._engine_play_shutter_sound = function() {
            var a;
            if (this.shutter_buffer)
                return a = this.audio_context.createBufferSource(), a.buffer = this.shutter_buffer, a.connect(this.audio_context.destination), a.start(0)
        }, c.prototype._engine_capture = function(a, b, c, d) {
            var e,
                f,
                g;
            return g = this._get_capture_crop(), e = document.createElement("canvas"), e.width = Math.round(g.width * d), e.height = Math.round(g.height * d), f = e.getContext("2d"), f.drawImage(this.video, g.x_offset, g.y_offset, g.width, g.height, 0, 0, Math.round(g.width * d), Math.round(g.height * d)), a._canvas = e, a._mirror = b, a._quality = c
        }, c.prototype._engine_display = function(b) {
            return this.displayed_canvas && this.container.removeChild(this.displayed_canvas), this.displayed_canvas = b._canvas, this.displayed_canvas.style.width = "" + this.view_width + "px", this.displayed_canvas.style.height = "" + this.view_height + "px", this.displayed_canvas.style.top = 0, this.displayed_canvas.style.left = 0, this.displayed_canvas.style.position = "absolute", this.displayed_canvas.style.zIndex = 2, a._add_prefixed_style(this.displayed_canvas, "transform", "scalex(-1.0)"), this.container.appendChild(this.displayed_canvas)
        }, c.prototype._engine_get_canvas = function(a) {
            var b,
                c;
            return b = document.createElement("canvas"), b.width = a._canvas.width, b.height = a._canvas.height, c = b.getContext("2d"), c.drawImage(a._canvas, 0, 0), b
        }, c.prototype._engine_get_image_data = function(a) {
            var b,
                c;
            return b = a._canvas, c = b.getContext("2d"), c.getImageData(0, 0, b.width, b.height)
        }, c.prototype._engine_get_blob = function(a, b, c, d, e) {
            var f,
                g;
            return c ? (f = document.createElement("canvas"), f.width = a._canvas.width, f.height = a._canvas.height, g = f.getContext("2d"), g.setTransform(1, 0, 0, 1, 0, 0), g.translate(f.width, 0), g.scale(-1, 1), g.drawImage(a._canvas, 0, 0)) : f = a._canvas, f.toBlob(function(a) {
                return e(a)
            }, b, d)
        }, c.prototype._engine_discard = function(a) {
            return a._xhr && a._xhr.abort(), delete a._xhr, delete a._canvas
        }, c.prototype._engine_show_stream = function() {
            return this.displayed_canvas && (this.container.removeChild(this.displayed_canvas), this.displayed_canvas = null), this.video_container.style.display = "block"
        }, c.prototype._engine_upload = function(a, b, c, d) {
            return this._debug("Uploading the file"), a.get_blob(function(e) {
                var f,
                    g;
                return f = function(b) {
                    return delete a._xhr, a._status = b.target.status, a._response = b.target.responseText, a._status >= 200 && a._status < 300 ? a._upload_done() : (a._error_message = b.target.statusText || "Unknown error", a._upload_fail())
                }, g = new XMLHttpRequest, g.open("POST", b), g.timeout = d, c && g.setRequestHeader("X-CSRF-Token", c), g.onload = f, g.onerror = f, g.onabort = f, g.send(e), a._xhr = g
            }, "image/jpeg")
        }, c.prototype._remove_message = function() {
            return this.message.style.display = "none"
        }, c.prototype._load_shutter_sound = function(a) {
            var b,
                c;
            if (!this.audio_context)
                return this.audio_context = new AudioContext, b = new XMLHttpRequest, b.open("GET", a, !0), b.responseType = "arraybuffer", c = this, b.onload = function() {
                    return c.audio_context.decodeAudioData(b.response, function(a) {
                        return c.shutter_buffer = a
                    })
                }, b.send()
        }, c.prototype._wait_for_video_ready = function() {
            var a,
                b,
                c,
                d;
            return d = parseInt(this.video.videoWidth), c = parseInt(this.video.videoHeight), d > 0 && c > 0 ? (this.video_container.appendChild(this.video), this.video_width = d, this.video_height = c, a = this._get_video_crop(), this.video.style.position = "relative", this.video.style.width = "" + a.width + "px", this.video.style.height = "" + a.height + "px", this.video.style.left = "" + a.x_offset + "px", this.video.style.top = "" + a.y_offset + "px", this._prepared(this.video_width, this.video_height)) : this._status_checks_count > 100 ? this._got_error("Camera failed to initialize in 10 seconds") : (this._status_checks_count++, b = this, setTimeout(function() {
                return b._wait_for_video_ready()
            }, 100))
        }, c.prototype._status_checks_count = 0, c.prototype._get_video_crop = function() {
            var a,
                b,
                c,
                d,
                e;
            return c = this.video_width / this.video_height, e = this.view_width / this.view_height, c >= e ? (this._debug("Filling height"), d = this.view_height / this.video_height, b = Math.round(this.video_width * d), {
                width: b,
                height: this.view_height,
                x_offset: -Math.floor((b - this.view_width) / 2),
                y_offset: 0
            }) : (this._debug("Filling width"), d = this.view_width / this.video_width, a = Math.round(this.video_height * d), {
                width: this.view_width,
                height: a,
                x_offset: 0,
                y_offset: -Math.floor((a - this.view_height) / 2)
            })
        }, c.prototype._get_capture_crop = function() {
            var a,
                b,
                c,
                d;
            return c = this.video_width / this.video_height, d = this.view_width / this.view_height, c >= d ? (b = Math.round(this.video_height * d), {
                width: b,
                height: this.video_height,
                x_offset: Math.floor((this.video_width - b) / 2),
                y_offset: 0
            }) : (a = Math.round(this.video_width / d), {
                width: this.video_width,
                height: a,
                x_offset: 0,
                y_offset: Math.floor((this.video_height - a) / 2)
            })
        }, c
    }(a), window.JpegCamera = c), !window.swfobject)
        throw "JpegCamera: SWFObject is not loaded";
    k = "9", j = !window.JpegCamera || !window.AudioContext || window.jpeg_camera_force_flash, g = function() {
        return window.swfobject && swfobject.hasFlashPlayerVersion(k)
    }, j && g() && (b = function(b) {
        function c() {
            return n = c.__super__.constructor.apply(this, arguments)
        }
        return p(c, b), c._send_message = function(a, b) {
            var c,
                d;
            return (d = this._instances[parseInt(a)]) ? (c = Array.prototype.slice.call(arguments, 2), this.prototype[b].apply(d, c)) : void 0
        }, c._instances = {}, c._next_id = 1, c.prototype._engine_init = function() {
            var a,
                b,
                c,
                d,
                e,
                f,
                g;
            return this._debug("Using Flash engine"), this._id = this.constructor._next_id++, this.constructor._instances[this._id] = this, this.view_width < 215 || this.view_height < 138 ? void this._got_error("camera is too small to display privacy dialog") : (d = "flash_object_" + this._id, f = {
                loop: "false",
                allowScriptAccess: "always",
                allowFullScreen: "false",
                quality: "best",
                wmode: "opaque",
                menu: "false"
            }, a = {
                id: d,
                align: "middle"
            }, e = {
                id: this._id,
                width: this.view_width,
                height: this.view_height,
                shutter_url: this.options.shutter_mp3_url
            }, g = this, b = function(a) {
                return a.success ? (g._debug("Flash loaded"), g._flash = document.getElementById(d)) : g._got_error("Flash loading failed.")
            }, c = document.createElement("div"), c.id = "jpeg_camera_flash_" + this._id, c.style.width = "100%", c.style.height = "100%", this.container.appendChild(c), swfobject.embedSWF(this.options.swf_url, c.id, this.view_width, this.view_height, "9", null, e, f, a, b))
        }, c.prototype._engine_play_shutter_sound = function() {
            return this._flash._play_shutter()
        }, c.prototype._engine_capture = function(a, b, c, d) {
            return this._flash._capture(a.id, b, c, d)
        }, c.prototype._engine_display = function(a) {
            return this._flash._display(a.id)
        }, c.prototype._engine_get_canvas = function(a) {
            var b,
                c;
            return a._image_data || (a._image_data = this._engine_get_image_data(a)), b = document.createElement("canvas"), b.width = a._image_data.width, b.height = a._image_data.height, c = b.getContext("2d"), c.putImageData(a._image_data, 0, 0), b
        }, c.prototype._engine_get_image_data = function(b) {
            var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n,
                o;
            for (f = this._flash._get_image_data(b.id), a.canvas_supported() ? (d = document.createElement("canvas"), d.width = f.width, d.height = f.height, e = d.getContext("2d"), l = e.createImageData(f.width, f.height)) : l = {
                data: [],
                width: f.width,
                height: f.height
            }, o = f.data, h = m = 0, n = o.length; n > m; h = ++m)
                j = o[h], i = 4 * h, k = j >> 16 & 255, g = j >> 8 & 255, c = 255 & j, l.data[i + 0] = k, l.data[i + 1] = g, l.data[i + 2] = c, l.data[i + 3] = 255;
            return l
        }, c.prototype._engine_get_blob = function(a, b, c, d, e) {
            var f,
                g;
            return a._extra_canvas || (a._extra_canvas = this._engine_get_canvas(a)), c ? (f = document.createElement("canvas"), f.width = a._canvas.width, f.height = a._canvas.height, g = f.getContext("2d"), g.setTransform(1, 0, 0, 1, 0, 0), g.translate(f.width, 0), g.scale(-1, 1), g.drawImage(a._extra_canvas, 0, 0)) : f = a._extra_canvas, f.toBlob(function(a) {
                return e(a)
            }, b, d)
        }, c.prototype._engine_discard = function(a) {
            return this._flash._discard(a.id)
        }, c.prototype._engine_show_stream = function() {
            return this._flash._show_stream()
        }, c.prototype._engine_upload = function(a, b, c, d) {
            return this._flash._upload(a.id, b, c, d)
        }, c.prototype._flash_prepared = function(a, b) {
            return this._block_element_access(), document.body.tabIndex = 0, document.body.focus(), this._prepared(a, b)
        }, c.prototype._flash_upload_complete = function(a, b, c, d) {
            var e;
            return a = parseInt(a), e = this._snapshots[a], e._status = parseInt(b), e._response = d, e._status >= 200 && e._status < 300 ? e._upload_done() : (e._error_message = c, e._upload_fail())
        }, c
    }(a), window.JpegCamera = b), d = function() {
        function b(a, b) {
            this.camera = a, this.options = b, this.id = this.constructor._next_snapshot_id++
        }
        return b._next_snapshot_id = 1, b.prototype._discarded = !1, b.prototype.show = function() {
            return this._discarded && raise("discarded snapshot cannot be used"), this.camera._display(this), this
        }, b.prototype.hide = function() {
            return this.camera.displayed_snapshot() === this && this.camera.show_stream(), this
        }, b.prototype.get_stats = function(a) {
            return this._discarded && raise("discarded snapshot cannot be used"), this.get_image_data(function(b) {
                return this._get_stats(b, a)
            })
        }, b.prototype.get_canvas = function(b) {
            var c;
            return this._discarded && raise("discarded snapshot cannot be used"), !a._canvas_supported, c = this, setTimeout(function() {
                return c._extra_canvas || (c._extra_canvas = c.camera._engine_get_canvas(c)), a._add_prefixed_style(c._extra_canvas, "transform", "scalex(-1.0)"), b.call(c, c._extra_canvas)
            }, 1), !0
        }, b.prototype._extra_canvas = null, b.prototype.get_blob = function(b, c) {
            var d;
            return null == c && (c = "image/jpeg"), this._discarded && raise("discarded snapshot cannot be used"), !a._canvas_supported, d = this, setTimeout(function() {
                var a,
                    e;
                return d._blob_mime !== c && (d._blob = null), d._blob_mime = c, d._blob ? b.call(d, d._blob) : (a = d.options.mirror, e = d.options.quality, d.camera._engine_get_blob(d, c, a, e, function(a) {
                    return d._blob = a, b.call(d, d._blob)
                }))
            }, 1), !0
        }, b.prototype._blob = null, b.prototype._blob_mime = null, b.prototype.get_image_data = function(a) {
            var b;
            return this._discarded && raise("discarded snapshot cannot be used"), b = this, setTimeout(function() {
                return b._image_data || (b._image_data = b.camera._engine_get_image_data(b)), a.call(b, b._image_data)
            }, 1), null
        }, b.prototype._image_data = null, b.prototype.upload = function(a) {
            var b;
            if (null == a && (a = {}), this._discarded && raise("discarded snapshot cannot be used"), this._uploading)
                return void this.camera._debug("Upload already in progress");
            if (this._uploading = !0, this._retry = 1, this._upload_options = a, b = this._options(), !b.api_url)
                throw this.camera._debug("Snapshot#upload called without valid api_url"), "Snapshot#upload called without valid api_url";
            return this._start_upload(b), this
        }, b.prototype._upload_options = {}, b.prototype._uploading = !1, b.prototype._retry = 1, b.prototype.done = function(a) {
            var b;
            return this._discarded && raise("discarded snapshot cannot be used"), this._upload_options.on_upload_done = a, b = this._options(), b.on_upload_done && this._done && b.on_upload_done.call(this, this._response), this
        }, b.prototype._done = !1, b.prototype._response = null, b.prototype.fail = function(a) {
            var b;
            return this._discarded && raise("discarded snapshot cannot be used"), this._upload_options.on_upload_fail = a, b = this._options(), b.on_upload_fail && this._fail && b.on_upload_fail.call(this, this._status, this._error_message, this._response), this
        }, b.prototype._fail = !1, b.prototype._status = null, b.prototype._error_message = null, b.prototype.discard = function() {
            return this.camera._discard(this), delete this._extra_canvas, delete this._image_data, void delete this._blob
        }, b.prototype._options = function() {
            return this.camera._extend({}, this.camera.options, this.options, this._upload_options)
        }, b.prototype._start_upload = function(a) {
            var b;
            return b = "string" == typeof a.csrf_token && a.csrf_token.length > 0 ? a.csrf_token : null, this._done = !1, this._response = null, this._fail = !1, this._status = null, this._error_message = null, this.camera._engine_upload(this, a.api_url, b, a.timeout)
        }, b.prototype._get_stats = function(a, b) {
            var c,
                d,
                f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                n;
            if (!this._stats) {
                for (i = a.width * a.height, j = 0, d = new Array(i), f = l = 0; i > l; f = l += 1)
                    g = 4 * f, c = .2126 * a.data[g + 0] + .7152 * a.data[g + 1] + .0722 * a.data[g + 2], c = Math.round(c), j += c, d[f] = c;
                for (h = Math.round(j / i), k = 0, m = 0, n = d.length; n > m; m++)
                    c = d[m], k += Math.pow(c - h, 2);
                this._stats = new e, this._stats.mean = h, this._stats.std = Math.round(Math.sqrt(k / i))
            }
            return b.call(this, this._stats)
        }, b.prototype._stats = null, b.prototype._upload_done = function() {
            var a,
                b,
                c,
                d;
            return this.camera._debug("Upload completed with status " + this._status), this._done = !0, a = this._options(), c = a.retry_success && a.retry_if && a.retry_if.call(this, this._status, this._error_message, this._response, this._retry), !0 === c && (c = 0), "number" == typeof c ? (this._retry++, c > 0 ? (b = parseInt(c), this.camera._debug("Will retry the upload in " + b + "ms (attempt #" + this._retry + ")"), d = this, setTimeout(function() {
                return d._start_upload(a)
            }, b)) : (this.camera._debug("Will retry the upload immediately (attempt #" + this._retry + ")"), this._start_upload(a))) : (this._uploading = !1, a.on_upload_done ? a.on_upload_done.call(this, this._response) : void 0)
        }, b.prototype._upload_fail = function() {
            var a,
                b,
                c,
                d;
            return this.camera._debug("Upload failed with status " + this._status), this._fail = !0, a = this._options(), c = a.retry_if && a.retry_if.call(this, this._status, this._error_message, this._response, this._retry), !0 === c && (c = 0), "number" == typeof c ? (this._retry++, c > 0 ? (b = parseInt(c), this.camera._debug("Will retry the upload in " + b + "ms (attempt #" + this._retry + ")"), d = this, setTimeout(function() {
                return d._start_upload(a)
            }, b)) : (this.camera._debug("Will retry the upload immediately (attempt #" + this._retry + ")"), this._start_upload(a))) : (this._uploading = !1, a.on_upload_fail ? a.on_upload_fail.call(this, this._status, this._error_message, this._response) : void 0)
        }, b
    }(), e = function() {
        function a() {}
        return a.prototype.mean = null, a.prototype.std = null, a
    }()
}).call(this);

