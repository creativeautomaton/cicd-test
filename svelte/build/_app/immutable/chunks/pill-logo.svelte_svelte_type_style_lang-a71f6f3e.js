import {
  Y as It,
  Z as Kt,
  a4 as qt,
  a5 as Zt,
  Q as Ie,
  S as x,
  i as z,
  s as j,
  F as Z,
  C as E,
  e as ne,
  c as ie,
  a as le,
  d as b,
  U as O,
  g as N,
  V as F,
  G as Q,
  H as J,
  I as Y,
  z as W,
  W as oe,
  q as k,
  o as U,
  X as ue,
  O as L,
  P as X,
  R as $,
  T as V,
  k as Qt,
  m as Jt,
  w as De,
  l as be,
  x as Ke,
  y as Fe,
  A as Ae,
  n as at,
  B as Me,
  p as lt,
  r as Se,
  v as Ft,
  K as pt,
  b as ft,
} from "./index-ec06594a.js";
var mt = function (n, e) {
  return (
    (mt =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (t, i) {
          t.__proto__ = i;
        }) ||
      function (t, i) {
        for (var a in i)
          Object.prototype.hasOwnProperty.call(i, a) && (t[a] = i[a]);
      }),
    mt(n, e)
  );
};
function Mt(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError(
      "Class extends value " + String(e) + " is not a constructor or null"
    );
  mt(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype =
    e === null ? Object.create(e) : ((t.prototype = e.prototype), new t());
}
var Be = function () {
  return (
    (Be =
      Object.assign ||
      function (e) {
        for (var t, i = 1, a = arguments.length; i < a; i++) {
          t = arguments[i];
          for (var l in t)
            Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
        }
        return e;
      }),
    Be.apply(this, arguments)
  );
};
function nt(n) {
  var e = typeof Symbol == "function" && Symbol.iterator,
    t = e && n[e],
    i = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number")
    return {
      next: function () {
        return (
          n && i >= n.length && (n = void 0), { value: n && n[i++], done: !n }
        );
      },
    };
  throw new TypeError(
    e ? "Object is not iterable." : "Symbol.iterator is not defined."
  );
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var Ot = (function () {
  function n(e) {
    e === void 0 && (e = {}), (this.adapter = e);
  }
  return (
    Object.defineProperty(n, "cssClasses", {
      get: function () {
        return {};
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(n, "strings", {
      get: function () {
        return {};
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(n, "numbers", {
      get: function () {
        return {};
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(n, "defaultAdapter", {
      get: function () {
        return {};
      },
      enumerable: !1,
      configurable: !0,
    }),
    (n.prototype.init = function () {}),
    (n.prototype.destroy = function () {}),
    n
  );
})();
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ function Yt(n) {
  return n === void 0 && (n = window), $t(n) ? { passive: !0 } : !1;
}
function $t(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
        get passive() {
          return (e = !0), !1;
        },
      },
      i = function () {};
    n.document.addEventListener("test", i, t),
      n.document.removeEventListener("test", i, t);
  } catch {
    e = !1;
  }
  return e;
}
var en = Object.freeze(
  Object.defineProperty(
    { __proto__: null, applyPassive: Yt },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ function tn(n, e) {
  if (n.closest) return n.closest(e);
  for (var t = n; t; ) {
    if (kt(t, e)) return t;
    t = t.parentElement;
  }
  return null;
}
function kt(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function nn(n) {
  var e = n;
  if (e.offsetParent !== null) return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"),
    t.style.setProperty("transform", "translate(-9999px, -9999px)"),
    document.documentElement.appendChild(t);
  var i = t.scrollWidth;
  return document.documentElement.removeChild(t), i;
}
var Ut = Object.freeze(
  Object.defineProperty(
    { __proto__: null, closest: tn, matches: kt, estimateScrollWidth: nn },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var sn = {
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded",
  },
  rn = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top",
  },
  Et = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300,
  },
  it;
function an(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS,
    i = it;
  if (typeof it == "boolean" && !e) return it;
  var a = t && typeof t.supports == "function";
  if (!a) return !1;
  var l = t.supports("--css-vars", "yes"),
    d = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return (i = l || d), e || (it = i), i;
}
function ln(n, e, t) {
  if (!n) return { x: 0, y: 0 };
  var i = e.x,
    a = e.y,
    l = i + t.left,
    d = a + t.top,
    s,
    u;
  if (n.type === "touchstart") {
    var c = n;
    (s = c.changedTouches[0].pageX - l), (u = c.changedTouches[0].pageY - d);
  } else {
    var r = n;
    (s = r.pageX - l), (u = r.pageY - d);
  }
  return { x: s, y: u };
}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var At = ["touchstart", "pointerdown", "mousedown", "keydown"],
  _t = ["touchend", "pointerup", "mouseup", "contextmenu"],
  st = [],
  on = (function (n) {
    Mt(e, n);
    function e(t) {
      var i = n.call(this, Be(Be({}, e.defaultAdapter), t)) || this;
      return (
        (i.activationAnimationHasEnded = !1),
        (i.activationTimer = 0),
        (i.fgDeactivationRemovalTimer = 0),
        (i.fgScale = "0"),
        (i.frame = { width: 0, height: 0 }),
        (i.initialSize = 0),
        (i.layoutFrame = 0),
        (i.maxRadius = 0),
        (i.unboundedCoords = { left: 0, top: 0 }),
        (i.activationState = i.defaultActivationState()),
        (i.activationTimerCallback = function () {
          (i.activationAnimationHasEnded = !0),
            i.runDeactivationUXLogicIfReady();
        }),
        (i.activateHandler = function (a) {
          i.activateImpl(a);
        }),
        (i.deactivateHandler = function () {
          i.deactivateImpl();
        }),
        (i.focusHandler = function () {
          i.handleFocus();
        }),
        (i.blurHandler = function () {
          i.handleBlur();
        }),
        (i.resizeHandler = function () {
          i.layout();
        }),
        i
      );
    }
    return (
      Object.defineProperty(e, "cssClasses", {
        get: function () {
          return sn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "strings", {
        get: function () {
          return rn;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "numbers", {
        get: function () {
          return Et;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "defaultAdapter", {
        get: function () {
          return {
            addClass: function () {},
            browserSupportsCssVars: function () {
              return !0;
            },
            computeBoundingRect: function () {
              return {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: 0,
                height: 0,
              };
            },
            containsEventTarget: function () {
              return !0;
            },
            deregisterDocumentInteractionHandler: function () {},
            deregisterInteractionHandler: function () {},
            deregisterResizeHandler: function () {},
            getWindowPageOffset: function () {
              return { x: 0, y: 0 };
            },
            isSurfaceActive: function () {
              return !0;
            },
            isSurfaceDisabled: function () {
              return !0;
            },
            isUnbounded: function () {
              return !0;
            },
            registerDocumentInteractionHandler: function () {},
            registerInteractionHandler: function () {},
            registerResizeHandler: function () {},
            removeClass: function () {},
            updateCssVariable: function () {},
          };
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.prototype.init = function () {
        var t = this,
          i = this.supportsPressRipple();
        if ((this.registerRootHandlers(i), i)) {
          var a = e.cssClasses,
            l = a.ROOT,
            d = a.UNBOUNDED;
          requestAnimationFrame(function () {
            t.adapter.addClass(l),
              t.adapter.isUnbounded() &&
                (t.adapter.addClass(d), t.layoutInternal());
          });
        }
      }),
      (e.prototype.destroy = function () {
        var t = this;
        if (this.supportsPressRipple()) {
          this.activationTimer &&
            (clearTimeout(this.activationTimer),
            (this.activationTimer = 0),
            this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)),
            this.fgDeactivationRemovalTimer &&
              (clearTimeout(this.fgDeactivationRemovalTimer),
              (this.fgDeactivationRemovalTimer = 0),
              this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
          var i = e.cssClasses,
            a = i.ROOT,
            l = i.UNBOUNDED;
          requestAnimationFrame(function () {
            t.adapter.removeClass(a),
              t.adapter.removeClass(l),
              t.removeCssVars();
          });
        }
        this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
      }),
      (e.prototype.activate = function (t) {
        this.activateImpl(t);
      }),
      (e.prototype.deactivate = function () {
        this.deactivateImpl();
      }),
      (e.prototype.layout = function () {
        var t = this;
        this.layoutFrame && cancelAnimationFrame(this.layoutFrame),
          (this.layoutFrame = requestAnimationFrame(function () {
            t.layoutInternal(), (t.layoutFrame = 0);
          }));
      }),
      (e.prototype.setUnbounded = function (t) {
        var i = e.cssClasses.UNBOUNDED;
        t ? this.adapter.addClass(i) : this.adapter.removeClass(i);
      }),
      (e.prototype.handleFocus = function () {
        var t = this;
        requestAnimationFrame(function () {
          return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
        });
      }),
      (e.prototype.handleBlur = function () {
        var t = this;
        requestAnimationFrame(function () {
          return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
        });
      }),
      (e.prototype.supportsPressRipple = function () {
        return this.adapter.browserSupportsCssVars();
      }),
      (e.prototype.defaultActivationState = function () {
        return {
          activationEvent: void 0,
          hasDeactivationUXRun: !1,
          isActivated: !1,
          isProgrammatic: !1,
          wasActivatedByPointer: !1,
          wasElementMadeActive: !1,
        };
      }),
      (e.prototype.registerRootHandlers = function (t) {
        var i, a;
        if (t) {
          try {
            for (var l = nt(At), d = l.next(); !d.done; d = l.next()) {
              var s = d.value;
              this.adapter.registerInteractionHandler(s, this.activateHandler);
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              d && !d.done && (a = l.return) && a.call(l);
            } finally {
              if (i) throw i.error;
            }
          }
          this.adapter.isUnbounded() &&
            this.adapter.registerResizeHandler(this.resizeHandler);
        }
        this.adapter.registerInteractionHandler("focus", this.focusHandler),
          this.adapter.registerInteractionHandler("blur", this.blurHandler);
      }),
      (e.prototype.registerDeactivationHandlers = function (t) {
        var i, a;
        if (t.type === "keydown")
          this.adapter.registerInteractionHandler(
            "keyup",
            this.deactivateHandler
          );
        else
          try {
            for (var l = nt(_t), d = l.next(); !d.done; d = l.next()) {
              var s = d.value;
              this.adapter.registerDocumentInteractionHandler(
                s,
                this.deactivateHandler
              );
            }
          } catch (u) {
            i = { error: u };
          } finally {
            try {
              d && !d.done && (a = l.return) && a.call(l);
            } finally {
              if (i) throw i.error;
            }
          }
      }),
      (e.prototype.deregisterRootHandlers = function () {
        var t, i;
        try {
          for (var a = nt(At), l = a.next(); !l.done; l = a.next()) {
            var d = l.value;
            this.adapter.deregisterInteractionHandler(d, this.activateHandler);
          }
        } catch (s) {
          t = { error: s };
        } finally {
          try {
            l && !l.done && (i = a.return) && i.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        this.adapter.deregisterInteractionHandler("focus", this.focusHandler),
          this.adapter.deregisterInteractionHandler("blur", this.blurHandler),
          this.adapter.isUnbounded() &&
            this.adapter.deregisterResizeHandler(this.resizeHandler);
      }),
      (e.prototype.deregisterDeactivationHandlers = function () {
        var t, i;
        this.adapter.deregisterInteractionHandler(
          "keyup",
          this.deactivateHandler
        );
        try {
          for (var a = nt(_t), l = a.next(); !l.done; l = a.next()) {
            var d = l.value;
            this.adapter.deregisterDocumentInteractionHandler(
              d,
              this.deactivateHandler
            );
          }
        } catch (s) {
          t = { error: s };
        } finally {
          try {
            l && !l.done && (i = a.return) && i.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
      }),
      (e.prototype.removeCssVars = function () {
        var t = this,
          i = e.strings,
          a = Object.keys(i);
        a.forEach(function (l) {
          l.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(i[l], null);
        });
      }),
      (e.prototype.activateImpl = function (t) {
        var i = this;
        if (!this.adapter.isSurfaceDisabled()) {
          var a = this.activationState;
          if (!a.isActivated) {
            var l = this.previousActivationEvent,
              d = l && t !== void 0 && l.type !== t.type;
            if (!d) {
              (a.isActivated = !0),
                (a.isProgrammatic = t === void 0),
                (a.activationEvent = t),
                (a.wasActivatedByPointer = a.isProgrammatic
                  ? !1
                  : t !== void 0 &&
                    (t.type === "mousedown" ||
                      t.type === "touchstart" ||
                      t.type === "pointerdown"));
              var s =
                t !== void 0 &&
                st.length > 0 &&
                st.some(function (u) {
                  return i.adapter.containsEventTarget(u);
                });
              if (s) {
                this.resetActivationState();
                return;
              }
              t !== void 0 &&
                (st.push(t.target), this.registerDeactivationHandlers(t)),
                (a.wasElementMadeActive = this.checkElementMadeActive(t)),
                a.wasElementMadeActive && this.animateActivation(),
                requestAnimationFrame(function () {
                  (st = []),
                    !a.wasElementMadeActive &&
                      t !== void 0 &&
                      (t.key === " " || t.keyCode === 32) &&
                      ((a.wasElementMadeActive = i.checkElementMadeActive(t)),
                      a.wasElementMadeActive && i.animateActivation()),
                    a.wasElementMadeActive ||
                      (i.activationState = i.defaultActivationState());
                });
            }
          }
        }
      }),
      (e.prototype.checkElementMadeActive = function (t) {
        return t !== void 0 && t.type === "keydown"
          ? this.adapter.isSurfaceActive()
          : !0;
      }),
      (e.prototype.animateActivation = function () {
        var t = this,
          i = e.strings,
          a = i.VAR_FG_TRANSLATE_START,
          l = i.VAR_FG_TRANSLATE_END,
          d = e.cssClasses,
          s = d.FG_DEACTIVATION,
          u = d.FG_ACTIVATION,
          c = e.numbers.DEACTIVATION_TIMEOUT_MS;
        this.layoutInternal();
        var r = "",
          o = "";
        if (!this.adapter.isUnbounded()) {
          var f = this.getFgTranslationCoordinates(),
            I = f.startPoint,
            p = f.endPoint;
          (r = I.x + "px, " + I.y + "px"), (o = p.x + "px, " + p.y + "px");
        }
        this.adapter.updateCssVariable(a, r),
          this.adapter.updateCssVariable(l, o),
          clearTimeout(this.activationTimer),
          clearTimeout(this.fgDeactivationRemovalTimer),
          this.rmBoundedActivationClasses(),
          this.adapter.removeClass(s),
          this.adapter.computeBoundingRect(),
          this.adapter.addClass(u),
          (this.activationTimer = setTimeout(function () {
            t.activationTimerCallback();
          }, c));
      }),
      (e.prototype.getFgTranslationCoordinates = function () {
        var t = this.activationState,
          i = t.activationEvent,
          a = t.wasActivatedByPointer,
          l;
        a
          ? (l = ln(
              i,
              this.adapter.getWindowPageOffset(),
              this.adapter.computeBoundingRect()
            ))
          : (l = { x: this.frame.width / 2, y: this.frame.height / 2 }),
          (l = {
            x: l.x - this.initialSize / 2,
            y: l.y - this.initialSize / 2,
          });
        var d = {
          x: this.frame.width / 2 - this.initialSize / 2,
          y: this.frame.height / 2 - this.initialSize / 2,
        };
        return { startPoint: l, endPoint: d };
      }),
      (e.prototype.runDeactivationUXLogicIfReady = function () {
        var t = this,
          i = e.cssClasses.FG_DEACTIVATION,
          a = this.activationState,
          l = a.hasDeactivationUXRun,
          d = a.isActivated,
          s = l || !d;
        s &&
          this.activationAnimationHasEnded &&
          (this.rmBoundedActivationClasses(),
          this.adapter.addClass(i),
          (this.fgDeactivationRemovalTimer = setTimeout(function () {
            t.adapter.removeClass(i);
          }, Et.FG_DEACTIVATION_MS)));
      }),
      (e.prototype.rmBoundedActivationClasses = function () {
        var t = e.cssClasses.FG_ACTIVATION;
        this.adapter.removeClass(t),
          (this.activationAnimationHasEnded = !1),
          this.adapter.computeBoundingRect();
      }),
      (e.prototype.resetActivationState = function () {
        var t = this;
        (this.previousActivationEvent = this.activationState.activationEvent),
          (this.activationState = this.defaultActivationState()),
          setTimeout(function () {
            return (t.previousActivationEvent = void 0);
          }, e.numbers.TAP_DELAY_MS);
      }),
      (e.prototype.deactivateImpl = function () {
        var t = this,
          i = this.activationState;
        if (!!i.isActivated) {
          var a = Be({}, i);
          i.isProgrammatic
            ? (requestAnimationFrame(function () {
                t.animateDeactivation(a);
              }),
              this.resetActivationState())
            : (this.deregisterDeactivationHandlers(),
              requestAnimationFrame(function () {
                (t.activationState.hasDeactivationUXRun = !0),
                  t.animateDeactivation(a),
                  t.resetActivationState();
              }));
        }
      }),
      (e.prototype.animateDeactivation = function (t) {
        var i = t.wasActivatedByPointer,
          a = t.wasElementMadeActive;
        (i || a) && this.runDeactivationUXLogicIfReady();
      }),
      (e.prototype.layoutInternal = function () {
        var t = this;
        this.frame = this.adapter.computeBoundingRect();
        var i = Math.max(this.frame.height, this.frame.width),
          a = function () {
            var d = Math.sqrt(
              Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2)
            );
            return d + e.numbers.PADDING;
          };
        this.maxRadius = this.adapter.isUnbounded() ? i : a();
        var l = Math.floor(i * e.numbers.INITIAL_ORIGIN_SCALE);
        this.adapter.isUnbounded() && l % 2 !== 0
          ? (this.initialSize = l - 1)
          : (this.initialSize = l),
          (this.fgScale = "" + this.maxRadius / this.initialSize),
          this.updateLayoutCssVars();
      }),
      (e.prototype.updateLayoutCssVars = function () {
        var t = e.strings,
          i = t.VAR_FG_SIZE,
          a = t.VAR_LEFT,
          l = t.VAR_TOP,
          d = t.VAR_FG_SCALE;
        this.adapter.updateCssVariable(i, this.initialSize + "px"),
          this.adapter.updateCssVariable(d, this.fgScale),
          this.adapter.isUnbounded() &&
            ((this.unboundedCoords = {
              left: Math.round(this.frame.width / 2 - this.initialSize / 2),
              top: Math.round(this.frame.height / 2 - this.initialSize / 2),
            }),
            this.adapter.updateCssVariable(a, this.unboundedCoords.left + "px"),
            this.adapter.updateCssVariable(l, this.unboundedCoords.top + "px"));
      }),
      e
    );
  })(Ot);
function ae(n) {
  return Object.entries(n)
    .filter(([e, t]) => e !== "" && t)
    .map(([e]) => e)
    .join(" ");
}
function Ve(n, e, t, i = { bubbles: !0 }, a = !1) {
  if (typeof Event != "undefined" && n) {
    const l = new CustomEvent(
      e,
      Object.assign(Object.assign({}, i), { detail: t })
    );
    if ((n == null || n.dispatchEvent(l), a && e.startsWith("SMUI"))) {
      const d = new CustomEvent(
        e.replace(/^SMUI/g, () => "MDC"),
        Object.assign(Object.assign({}, i), { detail: t })
      );
      n == null || n.dispatchEvent(d), d.defaultPrevented && l.preventDefault();
    }
    return l;
  }
}
function vt(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a],
      d = l.indexOf("$");
    (d !== -1 && e.indexOf(l.substring(0, d + 1)) !== -1) ||
      (e.indexOf(l) === -1 && (i[l] = n[l]));
  }
  return i;
}
const St =
    /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,
  un =
    /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function K(n) {
  let e,
    t = [];
  n.$on = (a, l) => {
    let d = a,
      s = () => {};
    return (
      e ? (s = e(d, l)) : t.push([d, l]),
      d.match(St) &&
        console &&
        console.warn(
          'Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',
          d
        ),
      () => {
        s();
      }
    );
  };
  function i(a) {
    Kt(n, a);
  }
  return (a) => {
    const l = [],
      d = {};
    e = (s, u) => {
      let c = s,
        r = u,
        o = !1;
      const f = c.match(St),
        I = c.match(un),
        p = f || I;
      if (c.match(/^SMUI:\w+:/)) {
        const v = c.split(":");
        let M = "";
        for (let g = 0; g < v.length; g++)
          M +=
            g === v.length - 1
              ? ":" + v[g]
              : v[g]
                  .split("-")
                  .map((te) => te.slice(0, 1).toUpperCase() + te.slice(1))
                  .join("");
        console.warn(
          `The event ${c.split("$")[0]} has been renamed to ${M.split("$")[0]}.`
        ),
          (c = M);
      }
      if (p) {
        const v = c.split(f ? ":" : "$");
        c = v[0];
        const M = Object.fromEntries(v.slice(1).map((g) => [g, !0]));
        M.passive && ((o = o || {}), (o.passive = !0)),
          M.nonpassive && ((o = o || {}), (o.passive = !1)),
          M.capture && ((o = o || {}), (o.capture = !0)),
          M.once && ((o = o || {}), (o.once = !0)),
          M.preventDefault && (r = qt(r)),
          M.stopPropagation && (r = Zt(r));
      }
      const S = It(a, c, r, o),
        R = () => {
          S();
          const v = l.indexOf(R);
          v > -1 && l.splice(v, 1);
        };
      return l.push(R), c in d || (d[c] = It(a, c, i)), R;
    };
    for (let s = 0; s < t.length; s++) e(t[s][0], t[s][1]);
    return {
      destroy: () => {
        for (let s = 0; s < l.length; s++) l[s]();
        for (let s of Object.entries(d)) s[1]();
      },
    };
  };
}
function Ct(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const i = {};
  for (let a = 0; a < t.length; a++) {
    const l = t[a];
    l.substring(0, e.length) === e && (i[l.substring(e.length)] = n[l]);
  }
  return i;
}
function de(n, e) {
  let t = [];
  if (e)
    for (let i = 0; i < e.length; i++) {
      const a = e[i],
        l = Array.isArray(a) ? a[0] : a;
      Array.isArray(a) && a.length > 1 ? t.push(l(n, a[1])) : t.push(l(n));
    }
  return {
    update(i) {
      if (((i && i.length) || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (i)
        for (let a = 0; a < i.length; a++) {
          const l = t[a];
          if (l && l.update) {
            const d = i[a];
            Array.isArray(d) && d.length > 1 ? l.update(d[1]) : l.update();
          }
        }
    },
    destroy() {
      for (let i = 0; i < t.length; i++) {
        const a = t[i];
        a && a.destroy && a.destroy();
      }
    },
  };
}
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var T = {
    UNKNOWN: "Unknown",
    BACKSPACE: "Backspace",
    ENTER: "Enter",
    SPACEBAR: "Spacebar",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    END: "End",
    HOME: "Home",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    DELETE: "Delete",
    ESCAPE: "Escape",
    TAB: "Tab",
  },
  ce = new Set();
ce.add(T.BACKSPACE);
ce.add(T.ENTER);
ce.add(T.SPACEBAR);
ce.add(T.PAGE_UP);
ce.add(T.PAGE_DOWN);
ce.add(T.END);
ce.add(T.HOME);
ce.add(T.ARROW_LEFT);
ce.add(T.ARROW_UP);
ce.add(T.ARROW_RIGHT);
ce.add(T.ARROW_DOWN);
ce.add(T.DELETE);
ce.add(T.ESCAPE);
ce.add(T.TAB);
var pe = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9,
  },
  fe = new Map();
fe.set(pe.BACKSPACE, T.BACKSPACE);
fe.set(pe.ENTER, T.ENTER);
fe.set(pe.SPACEBAR, T.SPACEBAR);
fe.set(pe.PAGE_UP, T.PAGE_UP);
fe.set(pe.PAGE_DOWN, T.PAGE_DOWN);
fe.set(pe.END, T.END);
fe.set(pe.HOME, T.HOME);
fe.set(pe.ARROW_LEFT, T.ARROW_LEFT);
fe.set(pe.ARROW_UP, T.ARROW_UP);
fe.set(pe.ARROW_RIGHT, T.ARROW_RIGHT);
fe.set(pe.ARROW_DOWN, T.ARROW_DOWN);
fe.set(pe.DELETE, T.DELETE);
fe.set(pe.ESCAPE, T.ESCAPE);
fe.set(pe.TAB, T.TAB);
var He = new Set();
He.add(T.PAGE_UP);
He.add(T.PAGE_DOWN);
He.add(T.END);
He.add(T.HOME);
He.add(T.ARROW_LEFT);
He.add(T.ARROW_UP);
He.add(T.ARROW_RIGHT);
He.add(T.ARROW_DOWN);
function re(n) {
  var e = n.key;
  if (ce.has(e)) return e;
  var t = fe.get(n.keyCode);
  return t || T.UNKNOWN;
}
const { applyPassive: rt } = en,
  { matches: dn } = Ut;
function yt(
  n,
  {
    ripple: e = !0,
    surface: t = !1,
    unbounded: i = !1,
    disabled: a = !1,
    color: l,
    active: d,
    rippleElement: s,
    eventTarget: u,
    activeTarget: c,
    addClass: r = (p) => n.classList.add(p),
    removeClass: o = (p) => n.classList.remove(p),
    addStyle: f = (p, S) => n.style.setProperty(p, S),
    initPromise: I = Promise.resolve(),
  } = {}
) {
  let p,
    S = Ie("SMUI:addLayoutListener"),
    R,
    v = d,
    M = u,
    g = c;
  function te() {
    t
      ? (r("mdc-ripple-surface"),
        l === "primary"
          ? (r("smui-ripple-surface--primary"),
            o("smui-ripple-surface--secondary"))
          : l === "secondary"
          ? (o("smui-ripple-surface--primary"),
            r("smui-ripple-surface--secondary"))
          : (o("smui-ripple-surface--primary"),
            o("smui-ripple-surface--secondary")))
      : (o("mdc-ripple-surface"),
        o("smui-ripple-surface--primary"),
        o("smui-ripple-surface--secondary")),
      p && v !== d && ((v = d), d ? p.activate() : d === !1 && p.deactivate()),
      e && !p
        ? ((p = new on({
            addClass: r,
            browserSupportsCssVars: () => an(window),
            computeBoundingRect: () => (s || n).getBoundingClientRect(),
            containsEventTarget: (G) => n.contains(G),
            deregisterDocumentInteractionHandler: (G, B) =>
              document.documentElement.removeEventListener(G, B, rt()),
            deregisterInteractionHandler: (G, B) =>
              (u || n).removeEventListener(G, B, rt()),
            deregisterResizeHandler: (G) =>
              window.removeEventListener("resize", G),
            getWindowPageOffset: () => ({
              x: window.pageXOffset,
              y: window.pageYOffset,
            }),
            isSurfaceActive: () => (d == null ? dn(c || n, ":active") : d),
            isSurfaceDisabled: () => !!a,
            isUnbounded: () => !!i,
            registerDocumentInteractionHandler: (G, B) =>
              document.documentElement.addEventListener(G, B, rt()),
            registerInteractionHandler: (G, B) =>
              (u || n).addEventListener(G, B, rt()),
            registerResizeHandler: (G) => window.addEventListener("resize", G),
            removeClass: o,
            updateCssVariable: f,
          })),
          I.then(() => {
            p && (p.init(), p.setUnbounded(i));
          }))
        : p &&
          !e &&
          I.then(() => {
            p && (p.destroy(), (p = void 0));
          }),
      p &&
        (M !== u || g !== c) &&
        ((M = u),
        (g = c),
        p.destroy(),
        requestAnimationFrame(() => {
          p && (p.init(), p.setUnbounded(i));
        })),
      !e && i && r("mdc-ripple-upgraded--unbounded");
  }
  te(), S && (R = S(me));
  function me() {
    p && p.layout();
  }
  return {
    update(G) {
      ({
        ripple: e,
        surface: t,
        unbounded: i,
        disabled: a,
        color: l,
        active: d,
        rippleElement: s,
        eventTarget: u,
        activeTarget: c,
        addClass: r,
        removeClass: o,
        addStyle: f,
        initPromise: I,
      } = Object.assign(
        {
          ripple: !0,
          surface: !1,
          unbounded: !1,
          disabled: !1,
          color: void 0,
          active: void 0,
          rippleElement: void 0,
          eventTarget: void 0,
          activeTarget: void 0,
          addClass: (B) => n.classList.add(B),
          removeClass: (B) => n.classList.remove(B),
          addStyle: (B, Le) => n.style.setProperty(B, Le),
          initPromise: Promise.resolve(),
        },
        G
      )),
        te();
    },
    destroy() {
      p &&
        (p.destroy(),
        (p = void 0),
        o("mdc-ripple-surface"),
        o("smui-ripple-surface--primary"),
        o("smui-ripple-surface--secondary")),
        R && R();
    },
  };
}
function cn(n) {
  let e, t, i, a, l;
  const d = n[7].default,
    s = Z(d, n, n[6], null);
  let u = [{ href: n[1] }, n[4]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("a")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "A", { href: !0 });
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[8](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[3].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 64) &&
        Q(s, d, r, r[6], i ? Y(d, r[6], o, null) : J(r[6]), null),
        O(e, (c = W(u, [(!i || o & 2) && { href: r[1] }, o & 16 && r[4]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[8](null), (a = !1), ue(l);
    },
  };
}
function fn(n, e, t) {
  const i = ["use", "href", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e,
    { href: u = "javascript:void(0);" } = e;
  const c = K(X());
  let r;
  function o() {
    return r;
  }
  function f(I) {
    V[I ? "unshift" : "push"](() => {
      (r = I), t(2, r);
    });
  }
  return (
    (n.$$set = (I) => {
      (e = E(E({}, e), $(I))),
        t(4, (a = L(e, i))),
        "use" in I && t(0, (s = I.use)),
        "href" in I && t(1, (u = I.href)),
        "$$scope" in I && t(6, (d = I.$$scope));
    }),
    [s, u, r, c, a, o, d, l, f]
  );
}
class mn extends x {
  constructor(e) {
    super(), z(this, e, fn, cn, j, { use: 0, href: 1, getElement: 5 });
  }
  get getElement() {
    return this.$$.ctx[5];
  }
}
function hn(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("button")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "BUTTON", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        e.autofocus && e.focus(),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function pn(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class gn extends x {
  constructor(e) {
    super(), z(this, e, pn, hn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function In(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("div")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "DIV", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function En(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class Pt extends x {
  constructor(e) {
    super(), z(this, e, En, In, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function An(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("h1")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "H1", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function _n(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class vn extends x {
  constructor(e) {
    super(), z(this, e, _n, An, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Sn(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("h2")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "H2", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function Cn(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class yn extends x {
  constructor(e) {
    super(), z(this, e, Cn, Sn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function bn(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("h3")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "H3", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function Ln(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class Tn extends x {
  constructor(e) {
    super(), z(this, e, Ln, bn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Rn(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("h6")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "H6", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function Dn(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class Fn extends x {
  constructor(e) {
    super(), z(this, e, Dn, Rn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Mn(n) {
  let e,
    t,
    i,
    a,
    l,
    d,
    s = [n[3]],
    u = {};
  for (let o = 0; o < s.length; o += 1) u = E(u, s[o]);
  const c = n[6].default,
    r = Z(c, n, n[5], null);
  return {
    c() {
      (e = ne("hr")), (i = Qt()), r && r.c(), this.h();
    },
    l(o) {
      (e = ie(o, "HR", {})), (i = Jt(o)), r && r.l(o), this.h();
    },
    h() {
      O(e, u);
    },
    m(o, f) {
      N(o, e, f),
        n[7](e),
        N(o, i, f),
        r && r.m(o, f),
        (a = !0),
        l ||
          ((d = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (l = !0));
    },
    p(o, [f]) {
      O(e, (u = W(s, [f & 8 && o[3]]))),
        t && oe(t.update) && f & 1 && t.update.call(null, o[0]),
        r &&
          r.p &&
          (!a || f & 32) &&
          Q(r, c, o, o[5], a ? Y(c, o[5], f, null) : J(o[5]), null);
    },
    i(o) {
      a || (k(r, o), (a = !0));
    },
    o(o) {
      U(r, o), (a = !1);
    },
    d(o) {
      o && b(e), n[7](null), o && b(i), r && r.d(o), (l = !1), ue(d);
    },
  };
}
function On(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class kn extends x {
  constructor(e) {
    super(), z(this, e, On, Mn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Un(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("li")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "LI", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function Pn(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class Hn extends x {
  constructor(e) {
    super(), z(this, e, Pn, Un, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Gn(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("nav")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "NAV", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function Bn(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class Nn extends x {
  constructor(e) {
    super(), z(this, e, Bn, Gn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function wn(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("span")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "SPAN", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function Wn(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class xn extends x {
  constructor(e) {
    super(), z(this, e, Wn, wn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function zn(n) {
  let e, t, i, a, l;
  const d = n[6].default,
    s = Z(d, n, n[5], null);
  let u = [n[3]],
    c = {};
  for (let r = 0; r < u.length; r += 1) c = E(c, u[r]);
  return {
    c() {
      (e = ne("ul")), s && s.c(), this.h();
    },
    l(r) {
      e = ie(r, "UL", {});
      var o = le(e);
      s && s.l(o), o.forEach(b), this.h();
    },
    h() {
      O(e, c);
    },
    m(r, o) {
      N(r, e, o),
        s && s.m(e, null),
        n[7](e),
        (i = !0),
        a ||
          ((l = [F((t = de.call(null, e, n[0]))), F(n[2].call(null, e))]),
          (a = !0));
    },
    p(r, [o]) {
      s &&
        s.p &&
        (!i || o & 32) &&
        Q(s, d, r, r[5], i ? Y(d, r[5], o, null) : J(r[5]), null),
        O(e, (c = W(u, [o & 8 && r[3]]))),
        t && oe(t.update) && o & 1 && t.update.call(null, r[0]);
    },
    i(r) {
      i || (k(s, r), (i = !0));
    },
    o(r) {
      U(s, r), (i = !1);
    },
    d(r) {
      r && b(e), s && s.d(r), n[7](null), (a = !1), ue(l);
    },
  };
}
function jn(n, e, t) {
  const i = ["use", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e;
  const u = K(X());
  let c;
  function r() {
    return c;
  }
  function o(f) {
    V[f ? "unshift" : "push"](() => {
      (c = f), t(1, c);
    });
  }
  return (
    (n.$$set = (f) => {
      (e = E(E({}, e), $(f))),
        t(3, (a = L(e, i))),
        "use" in f && t(0, (s = f.use)),
        "$$scope" in f && t(5, (d = f.$$scope));
    }),
    [s, c, u, a, r, d, l, o]
  );
}
class Xn extends x {
  constructor(e) {
    super(), z(this, e, jn, zn, j, { use: 0, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
const Vn = mn,
  ki = gn,
  Kn = Pt,
  Ui = vn,
  Pi = yn,
  qn = Tn,
  Hi = Fn,
  Zn = kn,
  Ht = Hn,
  Qn = Nn,
  qe = xn,
  Jn = Xn;
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var ke,
  Re,
  y = {
    LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
    LIST_ITEM_CLASS: "mdc-list-item",
    LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
    LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
    LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
    LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
    ROOT: "mdc-list",
  };
(ke = {}),
  (ke["" + y.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated"),
  (ke["" + y.LIST_ITEM_CLASS] = "mdc-list-item"),
  (ke["" + y.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled"),
  (ke["" + y.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected"),
  (ke["" + y.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text"),
  (ke["" + y.ROOT] = "mdc-list");
var We =
    ((Re = {}),
    (Re["" + y.LIST_ITEM_ACTIVATED_CLASS] =
      "mdc-deprecated-list-item--activated"),
    (Re["" + y.LIST_ITEM_CLASS] = "mdc-deprecated-list-item"),
    (Re["" + y.LIST_ITEM_DISABLED_CLASS] =
      "mdc-deprecated-list-item--disabled"),
    (Re["" + y.LIST_ITEM_SELECTED_CLASS] =
      "mdc-deprecated-list-item--selected"),
    (Re["" + y.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text"),
    (Re["" + y.LIST_ITEM_PRIMARY_TEXT_CLASS] =
      "mdc-deprecated-list-item__primary-text"),
    (Re["" + y.ROOT] = "mdc-deprecated-list"),
    Re),
  Ue = {
    ACTION_EVENT: "MDCList:action",
    ARIA_CHECKED: "aria-checked",
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: "aria-current",
    ARIA_DISABLED: "aria-disabled",
    ARIA_ORIENTATION: "aria-orientation",
    ARIA_ORIENTATION_HORIZONTAL: "horizontal",
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: "aria-selected",
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:
      `
    .` +
      y.LIST_ITEM_CLASS +
      ` button:not(:disabled),
    .` +
      y.LIST_ITEM_CLASS +
      ` a,
    .` +
      We[y.LIST_ITEM_CLASS] +
      ` button:not(:disabled),
    .` +
      We[y.LIST_ITEM_CLASS] +
      ` a
  `,
    DEPRECATED_SELECTOR: ".mdc-deprecated-list",
    FOCUSABLE_CHILD_ELEMENTS:
      `
    .` +
      y.LIST_ITEM_CLASS +
      ` button:not(:disabled),
    .` +
      y.LIST_ITEM_CLASS +
      ` a,
    .` +
      y.LIST_ITEM_CLASS +
      ` input[type="radio"]:not(:disabled),
    .` +
      y.LIST_ITEM_CLASS +
      ` input[type="checkbox"]:not(:disabled),
    .` +
      We[y.LIST_ITEM_CLASS] +
      ` button:not(:disabled),
    .` +
      We[y.LIST_ITEM_CLASS] +
      ` a,
    .` +
      We[y.LIST_ITEM_CLASS] +
      ` input[type="radio"]:not(:disabled),
    .` +
      We[y.LIST_ITEM_CLASS] +
      ` input[type="checkbox"]:not(:disabled)
  `,
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]',
  },
  q = { UNSET_INDEX: -1, TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300 };
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ var Yn = ["input", "button", "textarea", "select"],
  Ge = function (n) {
    var e = n.target;
    if (!!e) {
      var t = ("" + e.tagName).toLowerCase();
      Yn.indexOf(t) === -1 && n.preventDefault();
    }
  };
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ function $n() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: "",
  };
  return n;
}
function ei(n, e) {
  for (var t = new Map(), i = 0; i < n; i++) {
    var a = e(i).trim();
    if (!!a) {
      var l = a[0].toLowerCase();
      t.has(l) || t.set(l, []),
        t.get(l).push({ text: a.toLowerCase(), index: i });
    }
  }
  return (
    t.forEach(function (d) {
      d.sort(function (s, u) {
        return s.index - u.index;
      });
    }),
    t
  );
}
function ht(n, e) {
  var t = n.nextChar,
    i = n.focusItemAtIndex,
    a = n.sortedIndexByFirstChar,
    l = n.focusedItemIndex,
    d = n.skipFocus,
    s = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout),
    (e.bufferClearTimeout = setTimeout(function () {
      Bt(e);
    }, q.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS)),
    (e.typeaheadBuffer = e.typeaheadBuffer + t);
  var u;
  return (
    e.typeaheadBuffer.length === 1 ? (u = ti(a, l, s, e)) : (u = ni(a, s, e)),
    u !== -1 && !d && i(u),
    u
  );
}
function ti(n, e, t, i) {
  var a = i.typeaheadBuffer[0],
    l = n.get(a);
  if (!l) return -1;
  if (a === i.currentFirstChar && l[i.sortedIndexCursor].index === e) {
    i.sortedIndexCursor = (i.sortedIndexCursor + 1) % l.length;
    var d = l[i.sortedIndexCursor].index;
    if (!t(d)) return d;
  }
  i.currentFirstChar = a;
  var s = -1,
    u;
  for (u = 0; u < l.length; u++)
    if (!t(l[u].index)) {
      s = u;
      break;
    }
  for (; u < l.length; u++)
    if (l[u].index > e && !t(l[u].index)) {
      s = u;
      break;
    }
  return s !== -1
    ? ((i.sortedIndexCursor = s), l[i.sortedIndexCursor].index)
    : -1;
}
function ni(n, e, t) {
  var i = t.typeaheadBuffer[0],
    a = n.get(i);
  if (!a) return -1;
  var l = a[t.sortedIndexCursor];
  if (l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(l.index))
    return l.index;
  for (
    var d = (t.sortedIndexCursor + 1) % a.length, s = -1;
    d !== t.sortedIndexCursor;

  ) {
    var u = a[d],
      c = u.text.lastIndexOf(t.typeaheadBuffer, 0) === 0,
      r = !e(u.index);
    if (c && r) {
      s = d;
      break;
    }
    d = (d + 1) % a.length;
  }
  return s !== -1
    ? ((t.sortedIndexCursor = s), a[t.sortedIndexCursor].index)
    : -1;
}
function Gt(n) {
  return n.typeaheadBuffer.length > 0;
}
function Bt(n) {
  n.typeaheadBuffer = "";
}
function bt(n, e) {
  var t = n.event,
    i = n.isTargetListItem,
    a = n.focusedItemIndex,
    l = n.focusItemAtIndex,
    d = n.sortedIndexByFirstChar,
    s = n.isItemAtIndexDisabled,
    u = re(t) === "ArrowLeft",
    c = re(t) === "ArrowUp",
    r = re(t) === "ArrowRight",
    o = re(t) === "ArrowDown",
    f = re(t) === "Home",
    I = re(t) === "End",
    p = re(t) === "Enter",
    S = re(t) === "Spacebar";
  if (t.ctrlKey || t.metaKey || u || c || r || o || f || I || p) return -1;
  var R = !S && t.key.length === 1;
  if (R) {
    Ge(t);
    var v = {
      focusItemAtIndex: l,
      focusedItemIndex: a,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: d,
      skipFocus: !1,
      isItemAtIndexDisabled: s,
    };
    return ht(v, e);
  }
  if (!S) return -1;
  i && Ge(t);
  var M = i && Gt(e);
  if (M) {
    var v = {
      focusItemAtIndex: l,
      focusedItemIndex: a,
      nextChar: " ",
      sortedIndexByFirstChar: d,
      skipFocus: !1,
      isItemAtIndexDisabled: s,
    };
    return ht(v, e);
  }
  return -1;
}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */ function ii(n) {
  return n instanceof Array;
}
var si = (function (n) {
  Mt(e, n);
  function e(t) {
    var i = n.call(this, Be(Be({}, e.defaultAdapter), t)) || this;
    return (
      (i.wrapFocus = !1),
      (i.isVertical = !0),
      (i.isSingleSelectionList = !1),
      (i.selectedIndex = q.UNSET_INDEX),
      (i.focusedItemIndex = q.UNSET_INDEX),
      (i.useActivatedClass = !1),
      (i.useSelectedAttr = !1),
      (i.ariaCurrentAttrValue = null),
      (i.isCheckboxList = !1),
      (i.isRadioList = !1),
      (i.hasTypeahead = !1),
      (i.typeaheadState = $n()),
      (i.sortedIndexByFirstChar = new Map()),
      i
    );
  }
  return (
    Object.defineProperty(e, "strings", {
      get: function () {
        return Ue;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e, "cssClasses", {
      get: function () {
        return y;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e, "numbers", {
      get: function () {
        return q;
      },
      enumerable: !1,
      configurable: !0,
    }),
    Object.defineProperty(e, "defaultAdapter", {
      get: function () {
        return {
          addClassForElementIndex: function () {},
          focusItemAtIndex: function () {},
          getAttributeForElementIndex: function () {
            return null;
          },
          getFocusedElementIndex: function () {
            return 0;
          },
          getListItemCount: function () {
            return 0;
          },
          hasCheckboxAtIndex: function () {
            return !1;
          },
          hasRadioAtIndex: function () {
            return !1;
          },
          isCheckboxCheckedAtIndex: function () {
            return !1;
          },
          isFocusInsideList: function () {
            return !1;
          },
          isRootFocused: function () {
            return !1;
          },
          listItemAtIndexHasClass: function () {
            return !1;
          },
          notifyAction: function () {},
          removeClassForElementIndex: function () {},
          setAttributeForElementIndex: function () {},
          setCheckedCheckboxOrRadioAtIndex: function () {},
          setTabIndexForListItemChildren: function () {},
          getPrimaryTextAtIndex: function () {
            return "";
          },
        };
      },
      enumerable: !1,
      configurable: !0,
    }),
    (e.prototype.layout = function () {
      this.adapter.getListItemCount() !== 0 &&
        (this.adapter.hasCheckboxAtIndex(0)
          ? (this.isCheckboxList = !0)
          : this.adapter.hasRadioAtIndex(0)
          ? (this.isRadioList = !0)
          : this.maybeInitializeSingleSelection(),
        this.hasTypeahead &&
          (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex()));
    }),
    (e.prototype.getFocusedItemIndex = function () {
      return this.focusedItemIndex;
    }),
    (e.prototype.setWrapFocus = function (t) {
      this.wrapFocus = t;
    }),
    (e.prototype.setVerticalOrientation = function (t) {
      this.isVertical = t;
    }),
    (e.prototype.setSingleSelection = function (t) {
      (this.isSingleSelectionList = t),
        t &&
          (this.maybeInitializeSingleSelection(),
          (this.selectedIndex = this.getSelectedIndexFromDOM()));
    }),
    (e.prototype.maybeInitializeSingleSelection = function () {
      var t = this.getSelectedIndexFromDOM();
      if (t !== q.UNSET_INDEX) {
        var i = this.adapter.listItemAtIndexHasClass(
          t,
          y.LIST_ITEM_ACTIVATED_CLASS
        );
        i && this.setUseActivatedClass(!0),
          (this.isSingleSelectionList = !0),
          (this.selectedIndex = t);
      }
    }),
    (e.prototype.getSelectedIndexFromDOM = function () {
      for (
        var t = q.UNSET_INDEX, i = this.adapter.getListItemCount(), a = 0;
        a < i;
        a++
      ) {
        var l = this.adapter.listItemAtIndexHasClass(
            a,
            y.LIST_ITEM_SELECTED_CLASS
          ),
          d = this.adapter.listItemAtIndexHasClass(
            a,
            y.LIST_ITEM_ACTIVATED_CLASS
          );
        if (!!(l || d)) {
          t = a;
          break;
        }
      }
      return t;
    }),
    (e.prototype.setHasTypeahead = function (t) {
      (this.hasTypeahead = t),
        t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }),
    (e.prototype.isTypeaheadInProgress = function () {
      return this.hasTypeahead && Gt(this.typeaheadState);
    }),
    (e.prototype.setUseActivatedClass = function (t) {
      this.useActivatedClass = t;
    }),
    (e.prototype.setUseSelectedAttribute = function (t) {
      this.useSelectedAttr = t;
    }),
    (e.prototype.getSelectedIndex = function () {
      return this.selectedIndex;
    }),
    (e.prototype.setSelectedIndex = function (t, i) {
      var a = i === void 0 ? {} : i,
        l = a.forceUpdate;
      !this.isIndexValid(t) ||
        (this.isCheckboxList
          ? this.setCheckboxAtIndex(t)
          : this.isRadioList
          ? this.setRadioAtIndex(t)
          : this.setSingleSelectionAtIndex(t, { forceUpdate: l }));
    }),
    (e.prototype.handleFocusIn = function (t) {
      t >= 0 &&
        ((this.focusedItemIndex = t),
        this.adapter.setAttributeForElementIndex(t, "tabindex", "0"),
        this.adapter.setTabIndexForListItemChildren(t, "0"));
    }),
    (e.prototype.handleFocusOut = function (t) {
      var i = this;
      t >= 0 &&
        (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"),
        this.adapter.setTabIndexForListItemChildren(t, "-1")),
        setTimeout(function () {
          i.adapter.isFocusInsideList() ||
            i.setTabindexToFirstSelectedOrFocusedItem();
        }, 0);
    }),
    (e.prototype.handleKeydown = function (t, i, a) {
      var l = this,
        d = re(t) === "ArrowLeft",
        s = re(t) === "ArrowUp",
        u = re(t) === "ArrowRight",
        c = re(t) === "ArrowDown",
        r = re(t) === "Home",
        o = re(t) === "End",
        f = re(t) === "Enter",
        I = re(t) === "Spacebar",
        p = t.key === "A" || t.key === "a";
      if (this.adapter.isRootFocused()) {
        if (
          (s || o
            ? (t.preventDefault(), this.focusLastElement())
            : (c || r) && (t.preventDefault(), this.focusFirstElement()),
          this.hasTypeahead)
        ) {
          var S = {
            event: t,
            focusItemAtIndex: function (M) {
              l.focusItemAtIndex(M);
            },
            focusedItemIndex: -1,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function (M) {
              return l.adapter.listItemAtIndexHasClass(
                M,
                y.LIST_ITEM_DISABLED_CLASS
              );
            },
          };
          bt(S, this.typeaheadState);
        }
        return;
      }
      var R = this.adapter.getFocusedElementIndex();
      if (!(R === -1 && ((R = a), R < 0))) {
        if ((this.isVertical && c) || (!this.isVertical && u))
          Ge(t), this.focusNextElement(R);
        else if ((this.isVertical && s) || (!this.isVertical && d))
          Ge(t), this.focusPrevElement(R);
        else if (r) Ge(t), this.focusFirstElement();
        else if (o) Ge(t), this.focusLastElement();
        else if (p && t.ctrlKey && this.isCheckboxList)
          t.preventDefault(),
            this.toggleAll(
              this.selectedIndex === q.UNSET_INDEX ? [] : this.selectedIndex
            );
        else if ((f || I) && i) {
          var v = t.target;
          if (
            (v && v.tagName === "A" && f) ||
            (Ge(t),
            this.adapter.listItemAtIndexHasClass(R, y.LIST_ITEM_DISABLED_CLASS))
          )
            return;
          this.isTypeaheadInProgress() ||
            (this.isSelectableList() && this.setSelectedIndexOnAction(R),
            this.adapter.notifyAction(R));
        }
        if (this.hasTypeahead) {
          var S = {
            event: t,
            focusItemAtIndex: function (g) {
              l.focusItemAtIndex(g);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: i,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function (g) {
              return l.adapter.listItemAtIndexHasClass(
                g,
                y.LIST_ITEM_DISABLED_CLASS
              );
            },
          };
          bt(S, this.typeaheadState);
        }
      }
    }),
    (e.prototype.handleClick = function (t, i) {
      t !== q.UNSET_INDEX &&
        (this.adapter.listItemAtIndexHasClass(t, y.LIST_ITEM_DISABLED_CLASS) ||
          (this.isSelectableList() && this.setSelectedIndexOnAction(t, i),
          this.adapter.notifyAction(t)));
    }),
    (e.prototype.focusNextElement = function (t) {
      var i = this.adapter.getListItemCount(),
        a = t + 1;
      if (a >= i)
        if (this.wrapFocus) a = 0;
        else return t;
      return this.focusItemAtIndex(a), a;
    }),
    (e.prototype.focusPrevElement = function (t) {
      var i = t - 1;
      if (i < 0)
        if (this.wrapFocus) i = this.adapter.getListItemCount() - 1;
        else return t;
      return this.focusItemAtIndex(i), i;
    }),
    (e.prototype.focusFirstElement = function () {
      return this.focusItemAtIndex(0), 0;
    }),
    (e.prototype.focusLastElement = function () {
      var t = this.adapter.getListItemCount() - 1;
      return this.focusItemAtIndex(t), t;
    }),
    (e.prototype.focusInitialElement = function () {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }),
    (e.prototype.setEnabled = function (t, i) {
      !this.isIndexValid(t) ||
        (i
          ? (this.adapter.removeClassForElementIndex(
              t,
              y.LIST_ITEM_DISABLED_CLASS
            ),
            this.adapter.setAttributeForElementIndex(
              t,
              Ue.ARIA_DISABLED,
              "false"
            ))
          : (this.adapter.addClassForElementIndex(
              t,
              y.LIST_ITEM_DISABLED_CLASS
            ),
            this.adapter.setAttributeForElementIndex(
              t,
              Ue.ARIA_DISABLED,
              "true"
            )));
    }),
    (e.prototype.setSingleSelectionAtIndex = function (t, i) {
      var a = i === void 0 ? {} : i,
        l = a.forceUpdate;
      if (!(this.selectedIndex === t && !l)) {
        var d = y.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (d = y.LIST_ITEM_ACTIVATED_CLASS),
          this.selectedIndex !== q.UNSET_INDEX &&
            this.adapter.removeClassForElementIndex(this.selectedIndex, d),
          this.setAriaForSingleSelectionAtIndex(t),
          this.setTabindexAtIndex(t),
          t !== q.UNSET_INDEX && this.adapter.addClassForElementIndex(t, d),
          (this.selectedIndex = t);
      }
    }),
    (e.prototype.setAriaForSingleSelectionAtIndex = function (t) {
      this.selectedIndex === q.UNSET_INDEX &&
        (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(
          t,
          Ue.ARIA_CURRENT
        ));
      var i = this.ariaCurrentAttrValue !== null,
        a = i ? Ue.ARIA_CURRENT : Ue.ARIA_SELECTED;
      if (
        (this.selectedIndex !== q.UNSET_INDEX &&
          this.adapter.setAttributeForElementIndex(
            this.selectedIndex,
            a,
            "false"
          ),
        t !== q.UNSET_INDEX)
      ) {
        var l = i ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, a, l);
      }
    }),
    (e.prototype.getSelectionAttribute = function () {
      return this.useSelectedAttr ? Ue.ARIA_SELECTED : Ue.ARIA_CHECKED;
    }),
    (e.prototype.setRadioAtIndex = function (t) {
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0),
        this.selectedIndex !== q.UNSET_INDEX &&
          this.adapter.setAttributeForElementIndex(
            this.selectedIndex,
            i,
            "false"
          ),
        this.adapter.setAttributeForElementIndex(t, i, "true"),
        (this.selectedIndex = t);
    }),
    (e.prototype.setCheckboxAtIndex = function (t) {
      for (
        var i = this.getSelectionAttribute(), a = 0;
        a < this.adapter.getListItemCount();
        a++
      ) {
        var l = !1;
        t.indexOf(a) >= 0 && (l = !0),
          this.adapter.setCheckedCheckboxOrRadioAtIndex(a, l),
          this.adapter.setAttributeForElementIndex(a, i, l ? "true" : "false");
      }
      this.selectedIndex = t;
    }),
    (e.prototype.setTabindexAtIndex = function (t) {
      this.focusedItemIndex === q.UNSET_INDEX && t !== 0
        ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1")
        : this.focusedItemIndex >= 0 &&
          this.focusedItemIndex !== t &&
          this.adapter.setAttributeForElementIndex(
            this.focusedItemIndex,
            "tabindex",
            "-1"
          ),
        !(this.selectedIndex instanceof Array) &&
          this.selectedIndex !== t &&
          this.adapter.setAttributeForElementIndex(
            this.selectedIndex,
            "tabindex",
            "-1"
          ),
        t !== q.UNSET_INDEX &&
          this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }),
    (e.prototype.isSelectableList = function () {
      return (
        this.isSingleSelectionList || this.isCheckboxList || this.isRadioList
      );
    }),
    (e.prototype.setTabindexToFirstSelectedOrFocusedItem = function () {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }),
    (e.prototype.getFirstSelectedOrFocusedItemIndex = function () {
      return this.isSelectableList()
        ? typeof this.selectedIndex == "number" &&
          this.selectedIndex !== q.UNSET_INDEX
          ? this.selectedIndex
          : ii(this.selectedIndex) && this.selectedIndex.length > 0
          ? this.selectedIndex.reduce(function (t, i) {
              return Math.min(t, i);
            })
          : 0
        : Math.max(this.focusedItemIndex, 0);
    }),
    (e.prototype.isIndexValid = function (t) {
      var i = this;
      if (t instanceof Array) {
        if (!this.isCheckboxList)
          throw new Error(
            "MDCListFoundation: Array of index is only supported for checkbox based list"
          );
        return t.length === 0
          ? !0
          : t.some(function (a) {
              return i.isIndexInRange(a);
            });
      } else if (typeof t == "number") {
        if (this.isCheckboxList)
          throw new Error(
            "MDCListFoundation: Expected array of index for checkbox based list but got number: " +
              t
          );
        return (
          this.isIndexInRange(t) ||
          (this.isSingleSelectionList && t === q.UNSET_INDEX)
        );
      } else return !1;
    }),
    (e.prototype.isIndexInRange = function (t) {
      var i = this.adapter.getListItemCount();
      return t >= 0 && t < i;
    }),
    (e.prototype.setSelectedIndexOnAction = function (t, i) {
      i === void 0 && (i = !0),
        this.isCheckboxList
          ? this.toggleCheckboxAtIndex(t, i)
          : this.setSelectedIndex(t);
    }),
    (e.prototype.toggleCheckboxAtIndex = function (t, i) {
      var a = this.getSelectionAttribute(),
        l = this.adapter.isCheckboxCheckedAtIndex(t);
      i && ((l = !l), this.adapter.setCheckedCheckboxOrRadioAtIndex(t, l)),
        this.adapter.setAttributeForElementIndex(t, a, l ? "true" : "false");
      var d =
        this.selectedIndex === q.UNSET_INDEX ? [] : this.selectedIndex.slice();
      l
        ? d.push(t)
        : (d = d.filter(function (s) {
            return s !== t;
          })),
        (this.selectedIndex = d);
    }),
    (e.prototype.focusItemAtIndex = function (t) {
      this.adapter.focusItemAtIndex(t), (this.focusedItemIndex = t);
    }),
    (e.prototype.toggleAll = function (t) {
      var i = this.adapter.getListItemCount();
      if (t.length === i) this.setCheckboxAtIndex([]);
      else {
        for (var a = [], l = 0; l < i; l++)
          (!this.adapter.listItemAtIndexHasClass(
            l,
            y.LIST_ITEM_DISABLED_CLASS
          ) ||
            t.indexOf(l) > -1) &&
            a.push(l);
        this.setCheckboxAtIndex(a);
      }
    }),
    (e.prototype.typeaheadMatchItem = function (t, i, a) {
      var l = this;
      a === void 0 && (a = !1);
      var d = {
        focusItemAtIndex: function (s) {
          l.focusItemAtIndex(s);
        },
        focusedItemIndex: i || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: a,
        isItemAtIndexDisabled: function (s) {
          return l.adapter.listItemAtIndexHasClass(
            s,
            y.LIST_ITEM_DISABLED_CLASS
          );
        },
      };
      return ht(d, this.typeaheadState);
    }),
    (e.prototype.typeaheadInitSortedIndex = function () {
      return ei(
        this.adapter.getListItemCount(),
        this.adapter.getPrimaryTextAtIndex
      );
    }),
    (e.prototype.clearTypeaheadBuffer = function () {
      Bt(this.typeaheadState);
    }),
    e
  );
})(Ot);
function ri(n) {
  let e;
  const t = n[37].default,
    i = Z(t, n, n[43], null);
  return {
    c() {
      i && i.c();
    },
    l(a) {
      i && i.l(a);
    },
    m(a, l) {
      i && i.m(a, l), (e = !0);
    },
    p(a, l) {
      i &&
        i.p &&
        (!e || l[1] & 4096) &&
        Q(i, t, a, a[43], e ? Y(t, a[43], l, null) : J(a[43]), null);
    },
    i(a) {
      e || (k(i, a), (e = !0));
    },
    o(a) {
      U(i, a), (e = !1);
    },
    d(a) {
      i && i.d(a);
    },
  };
}
function ai(n) {
  let e, t, i;
  const a = [
    { use: [n[17], ...n[0]] },
    {
      class: ae({
        [n[1]]: !0,
        "mdc-deprecated-list": !0,
        "mdc-deprecated-list--non-interactive": n[2],
        "mdc-deprecated-list--dense": n[3],
        "mdc-deprecated-list--textual-list": n[4],
        "mdc-deprecated-list--avatar-list": n[5] || n[18],
        "mdc-deprecated-list--icon-list": n[6],
        "mdc-deprecated-list--image-list": n[7],
        "mdc-deprecated-list--thumbnail-list": n[8],
        "mdc-deprecated-list--video-list": n[9],
        "mdc-deprecated-list--two-line": n[10],
        "smui-list--three-line": n[11] && !n[10],
      }),
    },
    { role: n[15] },
    n[23],
  ];
  var l = n[12];
  function d(s) {
    let u = { $$slots: { default: [ri] }, $$scope: { ctx: s } };
    for (let c = 0; c < a.length; c += 1) u = E(u, a[c]);
    return { props: u };
  }
  return (
    l &&
      ((e = new l(d(n))),
      n[38](e),
      e.$on("keydown", n[39]),
      e.$on("focusin", n[40]),
      e.$on("focusout", n[41]),
      e.$on("click", n[42]),
      e.$on("SMUIListItem:mount", n[19]),
      e.$on("SMUIListItem:unmount", n[20]),
      e.$on("SMUI:action", n[21])),
    {
      c() {
        e && De(e.$$.fragment), (t = be());
      },
      l(s) {
        e && Ke(e.$$.fragment, s), (t = be());
      },
      m(s, u) {
        e && Fe(e, s, u), N(s, t, u), (i = !0);
      },
      p(s, u) {
        const c =
          u[0] & 8818687
            ? W(a, [
                u[0] & 131073 && { use: [s[17], ...s[0]] },
                u[0] & 266238 && {
                  class: ae({
                    [s[1]]: !0,
                    "mdc-deprecated-list": !0,
                    "mdc-deprecated-list--non-interactive": s[2],
                    "mdc-deprecated-list--dense": s[3],
                    "mdc-deprecated-list--textual-list": s[4],
                    "mdc-deprecated-list--avatar-list": s[5] || s[18],
                    "mdc-deprecated-list--icon-list": s[6],
                    "mdc-deprecated-list--image-list": s[7],
                    "mdc-deprecated-list--thumbnail-list": s[8],
                    "mdc-deprecated-list--video-list": s[9],
                    "mdc-deprecated-list--two-line": s[10],
                    "smui-list--three-line": s[11] && !s[10],
                  }),
                },
                u[0] & 32768 && { role: s[15] },
                u[0] & 8388608 && Ae(s[23]),
              ])
            : {};
        if (
          (u[1] & 4096 && (c.$$scope = { dirty: u, ctx: s }), l !== (l = s[12]))
        ) {
          if (e) {
            at();
            const r = e;
            U(r.$$.fragment, 1, 0, () => {
              Me(r, 1);
            }),
              lt();
          }
          l
            ? ((e = new l(d(s))),
              s[38](e),
              e.$on("keydown", s[39]),
              e.$on("focusin", s[40]),
              e.$on("focusout", s[41]),
              e.$on("click", s[42]),
              e.$on("SMUIListItem:mount", s[19]),
              e.$on("SMUIListItem:unmount", s[20]),
              e.$on("SMUI:action", s[21]),
              De(e.$$.fragment),
              k(e.$$.fragment, 1),
              Fe(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(s) {
        i || (e && k(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && U(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        n[38](null), s && b(t), e && Me(e, s);
      },
    }
  );
}
function li(n, e, t) {
  const i = [
    "use",
    "class",
    "nonInteractive",
    "dense",
    "textualList",
    "avatarList",
    "iconList",
    "imageList",
    "thumbnailList",
    "videoList",
    "twoLine",
    "threeLine",
    "vertical",
    "wrapFocus",
    "singleSelection",
    "selectedIndex",
    "radioList",
    "checkList",
    "hasTypeahead",
    "component",
    "layout",
    "setEnabled",
    "getTypeaheadInProgress",
    "getSelectedIndex",
    "getFocusedItemIndex",
    "getElement",
  ];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e;
  var s;
  const { closest: u, matches: c } = Ut,
    r = K(X());
  let { use: o = [] } = e,
    { class: f = "" } = e,
    { nonInteractive: I = !1 } = e,
    { dense: p = !1 } = e,
    { textualList: S = !1 } = e,
    { avatarList: R = !1 } = e,
    { iconList: v = !1 } = e,
    { imageList: M = !1 } = e,
    { thumbnailList: g = !1 } = e,
    { videoList: te = !1 } = e,
    { twoLine: me = !1 } = e,
    { threeLine: G = !1 } = e,
    { vertical: B = !0 } = e,
    {
      wrapFocus: Le = (s = Ie("SMUI:list:wrapFocus")) !== null && s !== void 0
        ? s
        : !1,
    } = e,
    { singleSelection: Ce = !1 } = e,
    { selectedIndex: ge = -1 } = e,
    { radioList: se = !1 } = e,
    { checkList: Ee = !1 } = e,
    { hasTypeahead: he = !1 } = e,
    P,
    D,
    ye = [],
    Te = Ie("SMUI:list:role"),
    ot = Ie("SMUI:list:nav");
  const Ne = new WeakMap();
  let Ze = Ie("SMUI:dialog:selection"),
    Qe = Ie("SMUI:addLayoutListener"),
    ze,
    { component: Je = ot ? Qn : Jn } = e;
  Se("SMUI:list:nonInteractive", I),
    Se("SMUI:separator:context", "list"),
    Te ||
      (Ce
        ? ((Te = "listbox"), Se("SMUI:list:item:role", "option"))
        : se
        ? ((Te = "radiogroup"), Se("SMUI:list:item:role", "radio"))
        : Ee
        ? ((Te = "group"), Se("SMUI:list:item:role", "checkbox"))
        : ((Te = "list"), Se("SMUI:list:item:role", void 0))),
    Qe && (ze = Qe(je)),
    Ft(() => {
      t(
        13,
        (D = new si({
          addClassForElementIndex: _e,
          focusItemAtIndex: we,
          getAttributeForElementIndex: (_, A) => {
            var H, Xe;
            return (Xe =
              (H = w()[_]) === null || H === void 0 ? void 0 : H.getAttr(A)) !==
              null && Xe !== void 0
              ? Xe
              : null;
          },
          getFocusedElementIndex: () =>
            document.activeElement
              ? w()
                  .map((_) => _.element)
                  .indexOf(document.activeElement)
              : -1,
          getListItemCount: () => ye.length,
          getPrimaryTextAtIndex: ee,
          hasCheckboxAtIndex: (_) => {
            var A, H;
            return (H =
              (A = w()[_]) === null || A === void 0
                ? void 0
                : A.hasCheckbox) !== null && H !== void 0
              ? H
              : !1;
          },
          hasRadioAtIndex: (_) => {
            var A, H;
            return (H =
              (A = w()[_]) === null || A === void 0 ? void 0 : A.hasRadio) !==
              null && H !== void 0
              ? H
              : !1;
          },
          isCheckboxCheckedAtIndex: (_) => {
            var A;
            const H = w()[_];
            return (A = (H == null ? void 0 : H.hasCheckbox) && H.checked) !==
              null && A !== void 0
              ? A
              : !1;
          },
          isFocusInsideList: () =>
            P != null &&
            Oe() !== document.activeElement &&
            Oe().contains(document.activeElement),
          isRootFocused: () => P != null && document.activeElement === Oe(),
          listItemAtIndexHasClass: Ye,
          notifyAction: (_) => {
            t(24, (ge = _)),
              P != null &&
                Ve(Oe(), "SMUIList:action", { index: _ }, void 0, !0);
          },
          removeClassForElementIndex: $e,
          setAttributeForElementIndex: et,
          setCheckedCheckboxOrRadioAtIndex: (_, A) => {
            w()[_].checked = A;
          },
          setTabIndexForListItemChildren: (_, A) => {
            const H = w()[_],
              Xe = "button:not(:disabled), a";
            Array.prototype.forEach.call(
              H.element.querySelectorAll(Xe),
              (Vt) => {
                Vt.setAttribute("tabindex", A);
              }
            );
          },
        }))
      );
      const m = {
        get element() {
          return Oe();
        },
        get items() {
          return ye;
        },
        get typeaheadInProgress() {
          return D.isTypeaheadInProgress();
        },
        typeaheadMatchItem(_, A) {
          return D.typeaheadMatchItem(_, A, !0);
        },
        getOrderedList: w,
        focusItemAtIndex: we,
        addClassForElementIndex: _e,
        removeClassForElementIndex: $e,
        setAttributeForElementIndex: et,
        removeAttributeForElementIndex: h,
        getAttributeFromElementIndex: C,
        getPrimaryTextAtIndex: ee,
      };
      return (
        Ve(Oe(), "SMUIList:mount", m),
        D.init(),
        () => {
          D.destroy();
        }
      );
    }),
    pt(() => {
      ze && ze();
    });
  function ut(m) {
    ye.push(m.detail),
      Ne.set(m.detail.element, m.detail),
      Ce && m.detail.selected && t(24, (ge = ve(m.detail.element))),
      m.stopPropagation();
  }
  function dt(m) {
    var _;
    const A =
      (_ = m.detail && ye.indexOf(m.detail)) !== null && _ !== void 0 ? _ : -1;
    A !== -1 && (ye.splice(A, 1), (ye = ye), Ne.delete(m.detail.element)),
      m.stopPropagation();
  }
  function ct(m) {
    if (se || Ee) {
      const _ = ve(m.target);
      if (_ !== -1) {
        const A = w()[_];
        A &&
          ((se && !A.checked) || Ee) &&
          ((A.checked = !A.checked),
          A.activateRipple(),
          window.requestAnimationFrame(() => {
            A.deactivateRipple();
          }));
      }
    }
  }
  function w() {
    return P == null
      ? []
      : [...Oe().children]
          .map((m) => Ne.get(m))
          .filter((m) => m && m._smui_list_item_accessor);
  }
  function we(m) {
    const _ = w()[m];
    _ && "focus" in _.element && _.element.focus();
  }
  function Ye(m, _) {
    var A;
    const H = w()[m];
    return (A = H && H.hasClass(_)) !== null && A !== void 0 ? A : !1;
  }
  function _e(m, _) {
    const A = w()[m];
    A && A.addClass(_);
  }
  function $e(m, _) {
    const A = w()[m];
    A && A.removeClass(_);
  }
  function et(m, _, A) {
    const H = w()[m];
    H && H.addAttr(_, A);
  }
  function h(m, _) {
    const A = w()[m];
    A && A.removeAttr(_);
  }
  function C(m, _) {
    const A = w()[m];
    return A ? A.getAttr(_) : null;
  }
  function ee(m) {
    var _;
    const A = w()[m];
    return (_ = A && A.getPrimaryText()) !== null && _ !== void 0 ? _ : "";
  }
  function ve(m) {
    const _ = u(m, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return _ && c(_, ".mdc-deprecated-list-item")
      ? w()
          .map((A) => (A == null ? void 0 : A.element))
          .indexOf(_)
      : -1;
  }
  function je() {
    return D.layout();
  }
  function tt(m, _) {
    return D.setEnabled(m, _);
  }
  function Nt() {
    return D.isTypeaheadInProgress();
  }
  function gt() {
    return D.getSelectedIndex();
  }
  function wt() {
    return D.getFocusedItemIndex();
  }
  function Oe() {
    return P.getElement();
  }
  function Wt(m) {
    V[m ? "unshift" : "push"](() => {
      (P = m), t(14, P);
    });
  }
  const xt = (m) =>
      D &&
      D.handleKeydown(
        m,
        m.target.classList.contains("mdc-deprecated-list-item"),
        ve(m.target)
      ),
    zt = (m) => D && D.handleFocusIn(ve(m.target)),
    jt = (m) => D && D.handleFocusOut(ve(m.target)),
    Xt = (m) =>
      D &&
      D.handleClick(
        ve(m.target),
        !c(m.target, 'input[type="checkbox"], input[type="radio"]')
      );
  return (
    (n.$$set = (m) => {
      (e = E(E({}, e), $(m))),
        t(23, (a = L(e, i))),
        "use" in m && t(0, (o = m.use)),
        "class" in m && t(1, (f = m.class)),
        "nonInteractive" in m && t(2, (I = m.nonInteractive)),
        "dense" in m && t(3, (p = m.dense)),
        "textualList" in m && t(4, (S = m.textualList)),
        "avatarList" in m && t(5, (R = m.avatarList)),
        "iconList" in m && t(6, (v = m.iconList)),
        "imageList" in m && t(7, (M = m.imageList)),
        "thumbnailList" in m && t(8, (g = m.thumbnailList)),
        "videoList" in m && t(9, (te = m.videoList)),
        "twoLine" in m && t(10, (me = m.twoLine)),
        "threeLine" in m && t(11, (G = m.threeLine)),
        "vertical" in m && t(25, (B = m.vertical)),
        "wrapFocus" in m && t(26, (Le = m.wrapFocus)),
        "singleSelection" in m && t(27, (Ce = m.singleSelection)),
        "selectedIndex" in m && t(24, (ge = m.selectedIndex)),
        "radioList" in m && t(28, (se = m.radioList)),
        "checkList" in m && t(29, (Ee = m.checkList)),
        "hasTypeahead" in m && t(30, (he = m.hasTypeahead)),
        "component" in m && t(12, (Je = m.component)),
        "$$scope" in m && t(43, (d = m.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 33562624 && D && D.setVerticalOrientation(B),
        n.$$.dirty[0] & 67117056 && D && D.setWrapFocus(Le),
        n.$$.dirty[0] & 1073750016 && D && D.setHasTypeahead(he),
        n.$$.dirty[0] & 134225920 && D && D.setSingleSelection(Ce),
        n.$$.dirty[0] & 151003136 &&
          D &&
          Ce &&
          gt() !== ge &&
          D.setSelectedIndex(ge);
    }),
    [
      o,
      f,
      I,
      p,
      S,
      R,
      v,
      M,
      g,
      te,
      me,
      G,
      Je,
      D,
      P,
      Te,
      c,
      r,
      Ze,
      ut,
      dt,
      ct,
      ve,
      a,
      ge,
      B,
      Le,
      Ce,
      se,
      Ee,
      he,
      je,
      tt,
      Nt,
      gt,
      wt,
      Oe,
      l,
      Wt,
      xt,
      zt,
      jt,
      Xt,
      d,
    ]
  );
}
class Gi extends x {
  constructor(e) {
    super(),
      z(
        this,
        e,
        li,
        ai,
        j,
        {
          use: 0,
          class: 1,
          nonInteractive: 2,
          dense: 3,
          textualList: 4,
          avatarList: 5,
          iconList: 6,
          imageList: 7,
          thumbnailList: 8,
          videoList: 9,
          twoLine: 10,
          threeLine: 11,
          vertical: 25,
          wrapFocus: 26,
          singleSelection: 27,
          selectedIndex: 24,
          radioList: 28,
          checkList: 29,
          hasTypeahead: 30,
          component: 12,
          layout: 31,
          setEnabled: 32,
          getTypeaheadInProgress: 33,
          getSelectedIndex: 34,
          getFocusedItemIndex: 35,
          getElement: 36,
        },
        null,
        [-1, -1]
      );
  }
  get layout() {
    return this.$$.ctx[31];
  }
  get setEnabled() {
    return this.$$.ctx[32];
  }
  get getTypeaheadInProgress() {
    return this.$$.ctx[33];
  }
  get getSelectedIndex() {
    return this.$$.ctx[34];
  }
  get getFocusedItemIndex() {
    return this.$$.ctx[35];
  }
  get getElement() {
    return this.$$.ctx[36];
  }
}
function Lt(n) {
  let e;
  return {
    c() {
      (e = ne("span")), this.h();
    },
    l(t) {
      (e = ie(t, "SPAN", { class: !0 })), le(e).forEach(b), this.h();
    },
    h() {
      ft(e, "class", "mdc-deprecated-list-item__ripple");
    },
    m(t, i) {
      N(t, e, i);
    },
    d(t) {
      t && b(e);
    },
  };
}
function oi(n) {
  let e,
    t,
    i = n[7] && Lt();
  const a = n[32].default,
    l = Z(a, n, n[35], null);
  return {
    c() {
      i && i.c(), (e = be()), l && l.c();
    },
    l(d) {
      i && i.l(d), (e = be()), l && l.l(d);
    },
    m(d, s) {
      i && i.m(d, s), N(d, e, s), l && l.m(d, s), (t = !0);
    },
    p(d, s) {
      d[7]
        ? i || ((i = Lt()), i.c(), i.m(e.parentNode, e))
        : i && (i.d(1), (i = null)),
        l &&
          l.p &&
          (!t || s[1] & 16) &&
          Q(l, a, d, d[35], t ? Y(a, d[35], s, null) : J(d[35]), null);
    },
    i(d) {
      t || (k(l, d), (t = !0));
    },
    o(d) {
      U(l, d), (t = !1);
    },
    d(d) {
      i && i.d(d), d && b(e), l && l.d(d);
    },
  };
}
function ui(n) {
  let e, t, i;
  const a = [
    {
      use: [
        ...(n[6]
          ? []
          : [
              [
                yt,
                {
                  ripple: !n[14],
                  unbounded: !1,
                  color: (n[1] || n[0]) && n[5] == null ? "primary" : n[5],
                  disabled: n[9],
                  addClass: n[22],
                  removeClass: n[23],
                  addStyle: n[24],
                },
              ],
            ]),
        n[20],
        ...n[2],
      ],
    },
    {
      class: ae({
        [n[3]]: !0,
        "mdc-deprecated-list-item": !0,
        "mdc-deprecated-list-item--activated": n[1],
        "mdc-deprecated-list-item--selected": n[0],
        "mdc-deprecated-list-item--disabled": n[9],
        "mdc-menu-item--selected": !n[21] && n[8] === "menuitem" && n[0],
        "smui-menu-item--non-interactive": n[6],
        ...n[16],
      }),
    },
    { style: Object.entries(n[17]).map(Tt).concat([n[4]]).join(" ") },
    n[21] && n[1] ? { "aria-current": "page" } : {},
    n[21] ? {} : { role: n[8] },
    !n[21] && n[8] === "option"
      ? { "aria-selected": n[0] ? "true" : "false" }
      : {},
    !n[21] && (n[8] === "radio" || n[8] === "checkbox")
      ? { "aria-checked": n[14] && n[14].checked ? "true" : "false" }
      : {},
    n[21] ? {} : { "aria-disabled": n[9] ? "true" : "false" },
    { "data-menu-item-skip-restore-focus": n[10] || void 0 },
    { tabindex: n[19] },
    { href: n[11] },
    n[18],
    n[27],
  ];
  var l = n[12];
  function d(s) {
    let u = { $$slots: { default: [oi] }, $$scope: { ctx: s } };
    for (let c = 0; c < a.length; c += 1) u = E(u, a[c]);
    return { props: u };
  }
  return (
    l &&
      ((e = new l(d(n))),
      n[33](e),
      e.$on("click", n[13]),
      e.$on("keydown", n[25]),
      e.$on("SMUIGenericInput:mount", n[26]),
      e.$on("SMUIGenericInput:unmount", n[34])),
    {
      c() {
        e && De(e.$$.fragment), (t = be());
      },
      l(s) {
        e && Ke(e.$$.fragment, s), (t = be());
      },
      m(s, u) {
        e && Fe(e, s, u), N(s, t, u), (i = !0);
      },
      p(s, u) {
        const c =
          u[0] & 167726975
            ? W(a, [
                u[0] & 30425703 && {
                  use: [
                    ...(s[6]
                      ? []
                      : [
                          [
                            yt,
                            {
                              ripple: !s[14],
                              unbounded: !1,
                              color:
                                (s[1] || s[0]) && s[5] == null
                                  ? "primary"
                                  : s[5],
                              disabled: s[9],
                              addClass: s[22],
                              removeClass: s[23],
                              addStyle: s[24],
                            },
                          ],
                        ]),
                    s[20],
                    ...s[2],
                  ],
                },
                u[0] & 2163531 && {
                  class: ae({
                    [s[3]]: !0,
                    "mdc-deprecated-list-item": !0,
                    "mdc-deprecated-list-item--activated": s[1],
                    "mdc-deprecated-list-item--selected": s[0],
                    "mdc-deprecated-list-item--disabled": s[9],
                    "mdc-menu-item--selected":
                      !s[21] && s[8] === "menuitem" && s[0],
                    "smui-menu-item--non-interactive": s[6],
                    ...s[16],
                  }),
                },
                u[0] & 131088 && {
                  style: Object.entries(s[17]).map(Tt).concat([s[4]]).join(" "),
                },
                u[0] & 2097154 &&
                  Ae(s[21] && s[1] ? { "aria-current": "page" } : {}),
                u[0] & 2097408 && Ae(s[21] ? {} : { role: s[8] }),
                u[0] & 2097409 &&
                  Ae(
                    !s[21] && s[8] === "option"
                      ? { "aria-selected": s[0] ? "true" : "false" }
                      : {}
                  ),
                u[0] & 2113792 &&
                  Ae(
                    !s[21] && (s[8] === "radio" || s[8] === "checkbox")
                      ? {
                          "aria-checked":
                            s[14] && s[14].checked ? "true" : "false",
                        }
                      : {}
                  ),
                u[0] & 2097664 &&
                  Ae(s[21] ? {} : { "aria-disabled": s[9] ? "true" : "false" }),
                u[0] & 1024 && {
                  "data-menu-item-skip-restore-focus": s[10] || void 0,
                },
                u[0] & 524288 && { tabindex: s[19] },
                u[0] & 2048 && { href: s[11] },
                u[0] & 262144 && Ae(s[18]),
                u[0] & 134217728 && Ae(s[27]),
              ])
            : {};
        if (
          ((u[0] & 128) | (u[1] & 16) && (c.$$scope = { dirty: u, ctx: s }),
          l !== (l = s[12]))
        ) {
          if (e) {
            at();
            const r = e;
            U(r.$$.fragment, 1, 0, () => {
              Me(r, 1);
            }),
              lt();
          }
          l
            ? ((e = new l(d(s))),
              s[33](e),
              e.$on("click", s[13]),
              e.$on("keydown", s[25]),
              e.$on("SMUIGenericInput:mount", s[26]),
              e.$on("SMUIGenericInput:unmount", s[34]),
              De(e.$$.fragment),
              k(e.$$.fragment, 1),
              Fe(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(s) {
        i || (e && k(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && U(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        n[33](null), s && b(t), e && Me(e, s);
      },
    }
  );
}
let di = 0;
const Tt = ([n, e]) => `${n}: ${e};`;
function ci(n, e, t) {
  let i;
  const a = [
    "use",
    "class",
    "style",
    "color",
    "nonInteractive",
    "ripple",
    "activated",
    "role",
    "selected",
    "disabled",
    "skipRestoreFocus",
    "tabindex",
    "inputId",
    "href",
    "component",
    "action",
    "getPrimaryText",
    "getElement",
  ];
  let l = L(e, a),
    { $$slots: d = {}, $$scope: s } = e;
  var u;
  const c = K(X());
  let r = () => {};
  function o(h) {
    return h === r;
  }
  let { use: f = [] } = e,
    { class: I = "" } = e,
    { style: p = "" } = e,
    { color: S = void 0 } = e,
    {
      nonInteractive: R = (u = Ie("SMUI:list:nonInteractive")) !== null &&
      u !== void 0
        ? u
        : !1,
    } = e;
  Se("SMUI:list:nonInteractive", void 0);
  let { ripple: v = !R } = e,
    { activated: M = !1 } = e,
    { role: g = Ie("SMUI:list:item:role") } = e;
  Se("SMUI:list:item:role", void 0);
  let { selected: te = !1 } = e,
    { disabled: me = !1 } = e,
    { skipRestoreFocus: G = !1 } = e,
    { tabindex: B = r } = e,
    { inputId: Le = "SMUI-form-field-list-" + di++ } = e,
    { href: Ce = void 0 } = e,
    ge,
    se = {},
    Ee = {},
    he = {},
    P,
    D,
    ye = Ie("SMUI:list:item:nav"),
    { component: Te = ye ? (Ce ? Vn : qe) : Ht } = e;
  Se("SMUI:generic:input:props", { id: Le }),
    Se("SMUI:separator:context", void 0),
    Ft(() => {
      if (!te && !R) {
        let C = !0,
          ee = ge;
        for (; ee.previousSibling; )
          if (
            ((ee = ee.previousSibling),
            ee.nodeType === 1 &&
              ee.classList.contains("mdc-deprecated-list-item") &&
              !ee.classList.contains("mdc-deprecated-list-item--disabled"))
          ) {
            C = !1;
            break;
          }
        C && (D = window.requestAnimationFrame(dt));
      }
      const h = {
        _smui_list_item_accessor: !0,
        get element() {
          return _e();
        },
        get selected() {
          return te;
        },
        set selected(C) {
          t(0, (te = C));
        },
        hasClass: ot,
        addClass: Ne,
        removeClass: Ze,
        getAttr: ze,
        addAttr: Je,
        removeAttr: ut,
        getPrimaryText: Ye,
        get checked() {
          var C;
          return (C = P && P.checked) !== null && C !== void 0 ? C : !1;
        },
        set checked(C) {
          P && t(14, (P.checked = !!C), P);
        },
        get hasCheckbox() {
          return !!(P && "_smui_checkbox_accessor" in P);
        },
        get hasRadio() {
          return !!(P && "_smui_radio_accessor" in P);
        },
        activateRipple() {
          P && P.activateRipple();
        },
        deactivateRipple() {
          P && P.deactivateRipple();
        },
        getValue() {
          return l.value;
        },
        action: we,
        get tabindex() {
          return i;
        },
        set tabindex(C) {
          t(28, (B = C));
        },
        get disabled() {
          return me;
        },
        get activated() {
          return M;
        },
        set activated(C) {
          t(1, (M = C));
        },
      };
      return (
        Ve(_e(), "SMUIListItem:mount", h),
        () => {
          Ve(_e(), "SMUIListItem:unmount", h);
        }
      );
    }),
    pt(() => {
      D && window.cancelAnimationFrame(D);
    });
  function ot(h) {
    return h in se ? se[h] : _e().classList.contains(h);
  }
  function Ne(h) {
    se[h] || t(16, (se[h] = !0), se);
  }
  function Ze(h) {
    (!(h in se) || se[h]) && t(16, (se[h] = !1), se);
  }
  function Qe(h, C) {
    Ee[h] != C &&
      (C === "" || C == null
        ? (delete Ee[h], t(17, Ee))
        : t(17, (Ee[h] = C), Ee));
  }
  function ze(h) {
    var C;
    return h in he
      ? (C = he[h]) !== null && C !== void 0
        ? C
        : null
      : _e().getAttribute(h);
  }
  function Je(h, C) {
    he[h] !== C && t(18, (he[h] = C), he);
  }
  function ut(h) {
    (!(h in he) || he[h] != null) && t(18, (he[h] = void 0), he);
  }
  function dt() {
    let h = !0,
      C = ge.getElement();
    for (; C.nextElementSibling; )
      if (
        ((C = C.nextElementSibling),
        C.nodeType === 1 && C.classList.contains("mdc-deprecated-list-item"))
      ) {
        const ee = C.attributes.getNamedItem("tabindex");
        if (ee && ee.value === "0") {
          h = !1;
          break;
        }
      }
    h && t(19, (i = 0));
  }
  function ct(h) {
    const C = h.key === "Enter",
      ee = h.key === "Space";
    (C || ee) && we(h);
  }
  function w(h) {
    ("_smui_checkbox_accessor" in h.detail ||
      "_smui_radio_accessor" in h.detail) &&
      t(14, (P = h.detail));
  }
  function we(h) {
    me || Ve(_e(), "SMUI:action", h);
  }
  function Ye() {
    var h, C, ee;
    const ve = _e(),
      je = ve.querySelector(".mdc-deprecated-list-item__primary-text");
    if (je) return (h = je.textContent) !== null && h !== void 0 ? h : "";
    const tt = ve.querySelector(".mdc-deprecated-list-item__text");
    return tt
      ? (C = tt.textContent) !== null && C !== void 0
        ? C
        : ""
      : (ee = ve.textContent) !== null && ee !== void 0
      ? ee
      : "";
  }
  function _e() {
    return ge.getElement();
  }
  function $e(h) {
    V[h ? "unshift" : "push"](() => {
      (ge = h), t(15, ge);
    });
  }
  const et = () => t(14, (P = void 0));
  return (
    (n.$$set = (h) => {
      (e = E(E({}, e), $(h))),
        t(27, (l = L(e, a))),
        "use" in h && t(2, (f = h.use)),
        "class" in h && t(3, (I = h.class)),
        "style" in h && t(4, (p = h.style)),
        "color" in h && t(5, (S = h.color)),
        "nonInteractive" in h && t(6, (R = h.nonInteractive)),
        "ripple" in h && t(7, (v = h.ripple)),
        "activated" in h && t(1, (M = h.activated)),
        "role" in h && t(8, (g = h.role)),
        "selected" in h && t(0, (te = h.selected)),
        "disabled" in h && t(9, (me = h.disabled)),
        "skipRestoreFocus" in h && t(10, (G = h.skipRestoreFocus)),
        "tabindex" in h && t(28, (B = h.tabindex)),
        "inputId" in h && t(29, (Le = h.inputId)),
        "href" in h && t(11, (Ce = h.href)),
        "component" in h && t(12, (Te = h.component)),
        "$$scope" in h && t(35, (s = h.$$scope));
    }),
    (n.$$.update = () => {
      n.$$.dirty[0] & 268452417 &&
        t(
          19,
          (i = o(B) ? (!R && !me && (te || (P && P.checked)) ? 0 : -1) : B)
        );
    }),
    [
      te,
      M,
      f,
      I,
      p,
      S,
      R,
      v,
      g,
      me,
      G,
      Ce,
      Te,
      we,
      P,
      ge,
      se,
      Ee,
      he,
      i,
      c,
      ye,
      Ne,
      Ze,
      Qe,
      ct,
      w,
      l,
      B,
      Le,
      Ye,
      _e,
      d,
      $e,
      et,
      s,
    ]
  );
}
class fi extends x {
  constructor(e) {
    super(),
      z(
        this,
        e,
        ci,
        ui,
        j,
        {
          use: 2,
          class: 3,
          style: 4,
          color: 5,
          nonInteractive: 6,
          ripple: 7,
          activated: 1,
          role: 8,
          selected: 0,
          disabled: 9,
          skipRestoreFocus: 10,
          tabindex: 28,
          inputId: 29,
          href: 11,
          component: 12,
          action: 13,
          getPrimaryText: 30,
          getElement: 31,
        },
        null,
        [-1, -1]
      );
  }
  get action() {
    return this.$$.ctx[13];
  }
  get getPrimaryText() {
    return this.$$.ctx[30];
  }
  get getElement() {
    return this.$$.ctx[31];
  }
}
function mi(n) {
  let e;
  const t = n[10].default,
    i = Z(t, n, n[12], null);
  return {
    c() {
      i && i.c();
    },
    l(a) {
      i && i.l(a);
    },
    m(a, l) {
      i && i.m(a, l), (e = !0);
    },
    p(a, l) {
      i &&
        i.p &&
        (!e || l & 4096) &&
        Q(i, t, a, a[12], e ? Y(t, a[12], l, null) : J(a[12]), null);
    },
    i(a) {
      e || (k(i, a), (e = !0));
    },
    o(a) {
      U(i, a), (e = !1);
    },
    d(a) {
      i && i.d(a);
    },
  };
}
function hi(n) {
  let e, t, i;
  const a = [
    { use: [n[7], ...n[0]] },
    { class: ae({ [n[1]]: !0, [n[5]]: !0, ...n[4] }) },
    n[6],
    n[8],
  ];
  var l = n[2];
  function d(s) {
    let u = { $$slots: { default: [mi] }, $$scope: { ctx: s } };
    for (let c = 0; c < a.length; c += 1) u = E(u, a[c]);
    return { props: u };
  }
  return (
    l && ((e = new l(d(n))), n[11](e)),
    {
      c() {
        e && De(e.$$.fragment), (t = be());
      },
      l(s) {
        e && Ke(e.$$.fragment, s), (t = be());
      },
      m(s, u) {
        e && Fe(e, s, u), N(s, t, u), (i = !0);
      },
      p(s, [u]) {
        const c =
          u & 499
            ? W(a, [
                u & 129 && { use: [s[7], ...s[0]] },
                u & 50 && { class: ae({ [s[1]]: !0, [s[5]]: !0, ...s[4] }) },
                u & 64 && Ae(s[6]),
                u & 256 && Ae(s[8]),
              ])
            : {};
        if (
          (u & 4096 && (c.$$scope = { dirty: u, ctx: s }), l !== (l = s[2]))
        ) {
          if (e) {
            at();
            const r = e;
            U(r.$$.fragment, 1, 0, () => {
              Me(r, 1);
            }),
              lt();
          }
          l
            ? ((e = new l(d(s))),
              s[11](e),
              De(e.$$.fragment),
              k(e.$$.fragment, 1),
              Fe(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(s) {
        i || (e && k(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && U(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        n[11](null), s && b(t), e && Me(e, s);
      },
    }
  );
}
const Pe = { component: Pt, class: "", classMap: {}, contexts: {}, props: {} };
function pi(n, e, t) {
  const i = ["use", "class", "component", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e,
    { use: s = [] } = e,
    { class: u = "" } = e,
    c;
  const r = Pe.class,
    o = {},
    f = [],
    I = Pe.contexts,
    p = Pe.props;
  let { component: S = Pe.component } = e;
  Object.entries(Pe.classMap).forEach(([g, te]) => {
    const me = Ie(te);
    me &&
      "subscribe" in me &&
      f.push(
        me.subscribe((G) => {
          t(4, (o[g] = G), o);
        })
      );
  });
  const R = K(X());
  for (let g in I) I.hasOwnProperty(g) && Se(g, I[g]);
  pt(() => {
    for (const g of f) g();
  });
  function v() {
    return c.getElement();
  }
  function M(g) {
    V[g ? "unshift" : "push"](() => {
      (c = g), t(3, c);
    });
  }
  return (
    (n.$$set = (g) => {
      (e = E(E({}, e), $(g))),
        t(8, (a = L(e, i))),
        "use" in g && t(0, (s = g.use)),
        "class" in g && t(1, (u = g.class)),
        "component" in g && t(2, (S = g.component)),
        "$$scope" in g && t(12, (d = g.$$scope));
    }),
    [s, u, S, c, o, r, p, R, a, v, l, M, d]
  );
}
class gi extends x {
  constructor(e) {
    super(),
      z(this, e, pi, hi, j, { use: 0, class: 1, component: 2, getElement: 9 });
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
const Rt = Object.assign({}, Pe);
function xe(n) {
  return new Proxy(gi, {
    construct: function (e, t) {
      return Object.assign(Pe, Rt, n), new e(...t);
    },
    get: function (e, t) {
      return Object.assign(Pe, Rt, n), e[t];
    },
  });
}
var Bi = xe({ class: "mdc-deprecated-list-item__text", component: qe }),
  Ni = xe({ class: "mdc-deprecated-list-item__primary-text", component: qe }),
  wi = xe({ class: "mdc-deprecated-list-item__secondary-text", component: qe });
function Ii(n) {
  let e, t, i, a, l, d;
  const s = n[8].default,
    u = Z(s, n, n[7], null);
  let c = [
      {
        class: (t = ae({
          [n[1]]: !0,
          "mdc-deprecated-list-item__graphic": !0,
          "mdc-menu__selection-group-icon": n[4],
        })),
      },
      n[5],
    ],
    r = {};
  for (let o = 0; o < c.length; o += 1) r = E(r, c[o]);
  return {
    c() {
      (e = ne("span")), u && u.c(), this.h();
    },
    l(o) {
      e = ie(o, "SPAN", { class: !0 });
      var f = le(e);
      u && u.l(f), f.forEach(b), this.h();
    },
    h() {
      O(e, r);
    },
    m(o, f) {
      N(o, e, f),
        u && u.m(e, null),
        n[9](e),
        (a = !0),
        l ||
          ((d = [F((i = de.call(null, e, n[0]))), F(n[3].call(null, e))]),
          (l = !0));
    },
    p(o, [f]) {
      u &&
        u.p &&
        (!a || f & 128) &&
        Q(u, s, o, o[7], a ? Y(s, o[7], f, null) : J(o[7]), null),
        O(
          e,
          (r = W(c, [
            (!a ||
              (f & 2 &&
                t !==
                  (t = ae({
                    [o[1]]: !0,
                    "mdc-deprecated-list-item__graphic": !0,
                    "mdc-menu__selection-group-icon": o[4],
                  })))) && { class: t },
            f & 32 && o[5],
          ]))
        ),
        i && oe(i.update) && f & 1 && i.update.call(null, o[0]);
    },
    i(o) {
      a || (k(u, o), (a = !0));
    },
    o(o) {
      U(u, o), (a = !1);
    },
    d(o) {
      o && b(e), u && u.d(o), n[9](null), (l = !1), ue(d);
    },
  };
}
function Ei(n, e, t) {
  const i = ["use", "class", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e;
  const s = K(X());
  let { use: u = [] } = e,
    { class: c = "" } = e,
    r,
    o = Ie("SMUI:list:graphic:menu-selection-group");
  function f() {
    return r;
  }
  function I(p) {
    V[p ? "unshift" : "push"](() => {
      (r = p), t(2, r);
    });
  }
  return (
    (n.$$set = (p) => {
      (e = E(E({}, e), $(p))),
        t(5, (a = L(e, i))),
        "use" in p && t(0, (u = p.use)),
        "class" in p && t(1, (c = p.class)),
        "$$scope" in p && t(7, (d = p.$$scope));
    }),
    [u, c, r, s, o, a, f, d, l, I]
  );
}
class Ai extends x {
  constructor(e) {
    super(), z(this, e, Ei, Ii, j, { use: 0, class: 1, getElement: 6 });
  }
  get getElement() {
    return this.$$.ctx[6];
  }
}
xe({ class: "mdc-deprecated-list-item__meta", component: qe });
xe({ class: "mdc-deprecated-list-group", component: Kn });
var Wi = xe({ class: "mdc-deprecated-list-group__subheader", component: qn });
function _i(n) {
  let e, t, i;
  const a = [
    { use: [n[9], ...n[0]] },
    {
      class: ae({
        [n[1]]: !0,
        "mdc-deprecated-list-divider": !0,
        "mdc-deprecated-list-divider--padded": n[2],
        "mdc-deprecated-list-divider--inset": n[3],
        "mdc-deprecated-list-divider--inset-leading": n[4],
        "mdc-deprecated-list-divider--inset-trailing": n[5],
        "mdc-deprecated-list-divider--inset-padding": n[6],
      }),
    },
    { role: "separator" },
    n[10],
  ];
  var l = n[7];
  function d(s) {
    let u = {};
    for (let c = 0; c < a.length; c += 1) u = E(u, a[c]);
    return { props: u };
  }
  return (
    l && ((e = new l(d())), n[12](e)),
    {
      c() {
        e && De(e.$$.fragment), (t = be());
      },
      l(s) {
        e && Ke(e.$$.fragment, s), (t = be());
      },
      m(s, u) {
        e && Fe(e, s, u), N(s, t, u), (i = !0);
      },
      p(s, [u]) {
        const c =
          u & 1663
            ? W(a, [
                u & 513 && { use: [s[9], ...s[0]] },
                u & 126 && {
                  class: ae({
                    [s[1]]: !0,
                    "mdc-deprecated-list-divider": !0,
                    "mdc-deprecated-list-divider--padded": s[2],
                    "mdc-deprecated-list-divider--inset": s[3],
                    "mdc-deprecated-list-divider--inset-leading": s[4],
                    "mdc-deprecated-list-divider--inset-trailing": s[5],
                    "mdc-deprecated-list-divider--inset-padding": s[6],
                  }),
                },
                a[2],
                u & 1024 && Ae(s[10]),
              ])
            : {};
        if (l !== (l = s[7])) {
          if (e) {
            at();
            const r = e;
            U(r.$$.fragment, 1, 0, () => {
              Me(r, 1);
            }),
              lt();
          }
          l
            ? ((e = new l(d())),
              s[12](e),
              De(e.$$.fragment),
              k(e.$$.fragment, 1),
              Fe(e, t.parentNode, t))
            : (e = null);
        } else l && e.$set(c);
      },
      i(s) {
        i || (e && k(e.$$.fragment, s), (i = !0));
      },
      o(s) {
        e && U(e.$$.fragment, s), (i = !1);
      },
      d(s) {
        n[12](null), s && b(t), e && Me(e, s);
      },
    }
  );
}
function vi(n, e, t) {
  const i = [
    "use",
    "class",
    "padded",
    "inset",
    "insetLeading",
    "insetTrailing",
    "insetPadding",
    "component",
    "getElement",
  ];
  let a = L(e, i);
  const l = K(X());
  let { use: d = [] } = e,
    { class: s = "" } = e,
    { padded: u = !1 } = e,
    { inset: c = !1 } = e,
    { insetLeading: r = !1 } = e,
    { insetTrailing: o = !1 } = e,
    { insetPadding: f = !1 } = e,
    I,
    p = Ie("SMUI:list:item:nav"),
    S = Ie("SMUI:separator:context"),
    { component: R = p || S !== "list" ? Zn : Ht } = e;
  function v() {
    return I.getElement();
  }
  function M(g) {
    V[g ? "unshift" : "push"](() => {
      (I = g), t(8, I);
    });
  }
  return (
    (n.$$set = (g) => {
      (e = E(E({}, e), $(g))),
        t(10, (a = L(e, i))),
        "use" in g && t(0, (d = g.use)),
        "class" in g && t(1, (s = g.class)),
        "padded" in g && t(2, (u = g.padded)),
        "inset" in g && t(3, (c = g.inset)),
        "insetLeading" in g && t(4, (r = g.insetLeading)),
        "insetTrailing" in g && t(5, (o = g.insetTrailing)),
        "insetPadding" in g && t(6, (f = g.insetPadding)),
        "component" in g && t(7, (R = g.component));
    }),
    [d, s, u, c, r, o, f, R, I, l, a, v, M]
  );
}
class Si extends x {
  constructor(e) {
    super(),
      z(this, e, vi, _i, j, {
        use: 0,
        class: 1,
        padded: 2,
        inset: 3,
        insetLeading: 4,
        insetTrailing: 5,
        insetPadding: 6,
        component: 7,
        getElement: 11,
      });
  }
  get getElement() {
    return this.$$.ctx[11];
  }
}
const xi = fi,
  zi = Ai,
  ji = Si;
function Ci(n) {
  let e, t, i, a, l, d;
  const s = n[6].default,
    u = Z(s, n, n[5], null);
  return {
    c() {
      (e = ne("div")), u && u.c(), this.h();
    },
    l(c) {
      e = ie(c, "DIV", { class: !0 });
      var r = le(e);
      u && u.l(r), r.forEach(b), this.h();
    },
    h() {
      ft(e, "class", (t = ae({ [n[1]]: !0, "mdc-layout-grid__inner": !0 })));
    },
    m(c, r) {
      N(c, e, r),
        u && u.m(e, null),
        n[7](e),
        (a = !0),
        l ||
          ((d = [F((i = de.call(null, e, n[0]))), F(n[3].call(null, e))]),
          (l = !0));
    },
    p(c, [r]) {
      u &&
        u.p &&
        (!a || r & 32) &&
        Q(u, s, c, c[5], a ? Y(s, c[5], r, null) : J(c[5]), null),
        (!a ||
          (r & 2 &&
            t !== (t = ae({ [c[1]]: !0, "mdc-layout-grid__inner": !0 })))) &&
          ft(e, "class", t),
        i && oe(i.update) && r & 1 && i.update.call(null, c[0]);
    },
    i(c) {
      a || (k(u, c), (a = !0));
    },
    o(c) {
      U(u, c), (a = !1);
    },
    d(c) {
      c && b(e), u && u.d(c), n[7](null), (l = !1), ue(d);
    },
  };
}
function yi(n, e, t) {
  let { $$slots: i = {}, $$scope: a } = e;
  const l = K(X());
  let { use: d = [] } = e,
    { class: s = "" } = e,
    u;
  function c() {
    return u;
  }
  function r(o) {
    V[o ? "unshift" : "push"](() => {
      (u = o), t(2, u);
    });
  }
  return (
    (n.$$set = (o) => {
      "use" in o && t(0, (d = o.use)),
        "class" in o && t(1, (s = o.class)),
        "$$scope" in o && t(5, (a = o.$$scope));
    }),
    [d, s, u, l, c, a, i, r]
  );
}
class bi extends x {
  constructor(e) {
    super(), z(this, e, yi, Ci, j, { use: 0, class: 1, getElement: 4 });
  }
  get getElement() {
    return this.$$.ctx[4];
  }
}
function Li(n) {
  let e;
  const t = n[8].default,
    i = Z(t, n, n[10], null);
  return {
    c() {
      i && i.c();
    },
    l(a) {
      i && i.l(a);
    },
    m(a, l) {
      i && i.m(a, l), (e = !0);
    },
    p(a, l) {
      i &&
        i.p &&
        (!e || l & 1024) &&
        Q(i, t, a, a[10], e ? Y(t, a[10], l, null) : J(a[10]), null);
    },
    i(a) {
      e || (k(i, a), (e = !0));
    },
    o(a) {
      U(i, a), (e = !1);
    },
    d(a) {
      i && i.d(a);
    },
  };
}
function Ti(n) {
  let e, t, i, a, l, d, s;
  const u = [Ct(n[6], "innerGrid$")];
  let c = { $$slots: { default: [Li] }, $$scope: { ctx: n } };
  for (let f = 0; f < u.length; f += 1) c = E(c, u[f]);
  t = new bi({ props: c });
  let r = [
      {
        class: (i = ae({
          [n[1]]: !0,
          "mdc-layout-grid": !0,
          "mdc-layout-grid--fixed-column-width": n[2],
          ["mdc-layout-grid--align-" + n[3]]: n[3] != null,
        })),
      },
      vt(n[6], ["innerGrid$"]),
    ],
    o = {};
  for (let f = 0; f < r.length; f += 1) o = E(o, r[f]);
  return {
    c() {
      (e = ne("div")), De(t.$$.fragment), this.h();
    },
    l(f) {
      e = ie(f, "DIV", { class: !0 });
      var I = le(e);
      Ke(t.$$.fragment, I), I.forEach(b), this.h();
    },
    h() {
      O(e, o);
    },
    m(f, I) {
      N(f, e, I),
        Fe(t, e, null),
        n[9](e),
        (l = !0),
        d ||
          ((s = [F((a = de.call(null, e, n[0]))), F(n[5].call(null, e))]),
          (d = !0));
    },
    p(f, [I]) {
      const p = I & 64 ? W(u, [Ae(Ct(f[6], "innerGrid$"))]) : {};
      I & 1024 && (p.$$scope = { dirty: I, ctx: f }),
        t.$set(p),
        O(
          e,
          (o = W(r, [
            (!l ||
              (I & 14 &&
                i !==
                  (i = ae({
                    [f[1]]: !0,
                    "mdc-layout-grid": !0,
                    "mdc-layout-grid--fixed-column-width": f[2],
                    ["mdc-layout-grid--align-" + f[3]]: f[3] != null,
                  })))) && { class: i },
            I & 64 && vt(f[6], ["innerGrid$"]),
          ]))
        ),
        a && oe(a.update) && I & 1 && a.update.call(null, f[0]);
    },
    i(f) {
      l || (k(t.$$.fragment, f), (l = !0));
    },
    o(f) {
      U(t.$$.fragment, f), (l = !1);
    },
    d(f) {
      f && b(e), Me(t), n[9](null), (d = !1), ue(s);
    },
  };
}
function Ri(n, e, t) {
  const i = ["use", "class", "fixedColumnWidth", "align", "getElement"];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e;
  const s = K(X());
  let { use: u = [] } = e,
    { class: c = "" } = e,
    { fixedColumnWidth: r = !1 } = e,
    { align: o = void 0 } = e,
    f;
  function I() {
    return f;
  }
  function p(S) {
    V[S ? "unshift" : "push"](() => {
      (f = S), t(4, f);
    });
  }
  return (
    (n.$$set = (S) => {
      (e = E(E({}, e), $(S))),
        t(6, (a = L(e, i))),
        "use" in S && t(0, (u = S.use)),
        "class" in S && t(1, (c = S.class)),
        "fixedColumnWidth" in S && t(2, (r = S.fixedColumnWidth)),
        "align" in S && t(3, (o = S.align)),
        "$$scope" in S && t(10, (d = S.$$scope));
    }),
    [u, c, r, o, f, s, a, I, l, p, d]
  );
}
class Xi extends x {
  constructor(e) {
    super(),
      z(this, e, Ri, Ti, j, {
        use: 0,
        class: 1,
        fixedColumnWidth: 2,
        align: 3,
        getElement: 7,
      });
  }
  get getElement() {
    return this.$$.ctx[7];
  }
}
function Di(n) {
  let e, t, i, a, l, d;
  const s = n[11].default,
    u = Z(s, n, n[10], null);
  let c = [
      {
        class: (t = ae({
          [n[1]]: !0,
          "mdc-layout-grid__cell": !0,
          ["mdc-layout-grid__cell--align-" + n[2]]: n[2] != null,
          ["mdc-layout-grid__cell--order-" + n[3]]: n[3] != null,
          ["mdc-layout-grid__cell--span-" + n[4]]: n[4] != null,
          ...Object.fromEntries(Object.entries(n[5]).map(Dt)),
        })),
      },
      n[8],
    ],
    r = {};
  for (let o = 0; o < c.length; o += 1) r = E(r, c[o]);
  return {
    c() {
      (e = ne("div")), u && u.c(), this.h();
    },
    l(o) {
      e = ie(o, "DIV", { class: !0 });
      var f = le(e);
      u && u.l(f), f.forEach(b), this.h();
    },
    h() {
      O(e, r);
    },
    m(o, f) {
      N(o, e, f),
        u && u.m(e, null),
        n[12](e),
        (a = !0),
        l ||
          ((d = [F((i = de.call(null, e, n[0]))), F(n[7].call(null, e))]),
          (l = !0));
    },
    p(o, [f]) {
      u &&
        u.p &&
        (!a || f & 1024) &&
        Q(u, s, o, o[10], a ? Y(s, o[10], f, null) : J(o[10]), null),
        O(
          e,
          (r = W(c, [
            (!a ||
              (f & 62 &&
                t !==
                  (t = ae({
                    [o[1]]: !0,
                    "mdc-layout-grid__cell": !0,
                    ["mdc-layout-grid__cell--align-" + o[2]]: o[2] != null,
                    ["mdc-layout-grid__cell--order-" + o[3]]: o[3] != null,
                    ["mdc-layout-grid__cell--span-" + o[4]]: o[4] != null,
                    ...Object.fromEntries(Object.entries(o[5]).map(Dt)),
                  })))) && { class: t },
            f & 256 && o[8],
          ]))
        ),
        i && oe(i.update) && f & 1 && i.update.call(null, o[0]);
    },
    i(o) {
      a || (k(u, o), (a = !0));
    },
    o(o) {
      U(u, o), (a = !1);
    },
    d(o) {
      o && b(e), u && u.d(o), n[12](null), (l = !1), ue(d);
    },
  };
}
const Dt = ([n, e]) => [`mdc-layout-grid__cell--span-${e}-${n}`, !0];
function Fi(n, e, t) {
  const i = [
    "use",
    "class",
    "align",
    "order",
    "span",
    "spanDevices",
    "getElement",
  ];
  let a = L(e, i),
    { $$slots: l = {}, $$scope: d } = e;
  const s = K(X());
  let { use: u = [] } = e,
    { class: c = "" } = e,
    { align: r = void 0 } = e,
    { order: o = void 0 } = e,
    { span: f = void 0 } = e,
    { spanDevices: I = {} } = e,
    p;
  function S() {
    return p;
  }
  function R(v) {
    V[v ? "unshift" : "push"](() => {
      (p = v), t(6, p);
    });
  }
  return (
    (n.$$set = (v) => {
      (e = E(E({}, e), $(v))),
        t(8, (a = L(e, i))),
        "use" in v && t(0, (u = v.use)),
        "class" in v && t(1, (c = v.class)),
        "align" in v && t(2, (r = v.align)),
        "order" in v && t(3, (o = v.order)),
        "span" in v && t(4, (f = v.span)),
        "spanDevices" in v && t(5, (I = v.spanDevices)),
        "$$scope" in v && t(10, (d = v.$$scope));
    }),
    [u, c, r, o, f, I, p, s, a, S, d, l, R]
  );
}
class Mi extends x {
  constructor(e) {
    super(),
      z(this, e, Fi, Di, j, {
        use: 0,
        class: 1,
        align: 2,
        order: 3,
        span: 4,
        spanDevices: 5,
        getElement: 9,
      });
  }
  get getElement() {
    return this.$$.ctx[9];
  }
}
const Vi = Mi;
export {
  Vn as A,
  ki as B,
  Vi as C,
  Kn as D,
  zi as G,
  Ui as H,
  xi as I,
  Xi as L,
  Ot as M,
  Ni as P,
  yt as R,
  qe as S,
  Bi as T,
  Mt as _,
  Be as a,
  nt as b,
  ae as c,
  Ve as d,
  xe as e,
  K as f,
  en as g,
  vt as h,
  Gi as i,
  wi as j,
  xn as k,
  Pi as l,
  ji as m,
  Wi as n,
  Hi as o,
  Ct as p,
  de as u,
};
