function $() {}
const st = (t) => t;
function ot(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function K(t) {
  return t();
}
function W() {
  return Object.create(null);
}
function x(t) {
  t.forEach(K);
}
function F(t) {
  return typeof t == "function";
}
function Rt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let C;
function qt(t, e) {
  return C || (C = document.createElement("a")), (C.href = e), t === C.href;
}
function ct(t) {
  return Object.keys(t).length === 0;
}
function lt(t, ...e) {
  if (t == null) return $;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function zt(t, e, n) {
  t.$$.on_destroy.push(lt(e, n));
}
function Bt(t, e, n, i) {
  if (t) {
    const s = Q(t, e, n, i);
    return t[0](s);
  }
}
function Q(t, e, n, i) {
  return t[1] && i ? ot(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Lt(t, e, n, i) {
  if (t[2] && i) {
    const s = t[2](i(n));
    if (e.dirty === void 0) return s;
    if (typeof s == "object") {
      const l = [],
        r = Math.max(e.dirty.length, s.length);
      for (let c = 0; c < r; c += 1) l[c] = e.dirty[c] | s[c];
      return l;
    }
    return e.dirty | s;
  }
  return e.dirty;
}
function Ft(t, e, n, i, s, l) {
  if (s) {
    const r = Q(e, n, i, l);
    t.p(r, s);
  }
}
function Ht(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function It(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Wt(t, e) {
  const n = {};
  e = new Set(e);
  for (const i in t) !e.has(i) && i[0] !== "$" && (n[i] = t[i]);
  return n;
}
function Gt(t) {
  const e = {};
  for (const n in t) e[n] = !0;
  return e;
}
function Jt(t, e, n) {
  return t.set(n), e;
}
function Kt(t) {
  return t && F(t.destroy) ? t.destroy : $;
}
const U = typeof window != "undefined";
let ut = U ? () => window.performance.now() : () => Date.now(),
  H = U ? (t) => requestAnimationFrame(t) : $;
const b = new Set();
function V(t) {
  b.forEach((e) => {
    e.c(t) || (b.delete(e), e.f());
  }),
    b.size !== 0 && H(V);
}
function at(t) {
  let e;
  return (
    b.size === 0 && H(V),
    {
      promise: new Promise((n) => {
        b.add((e = { c: t, f: n }));
      }),
      abort() {
        b.delete(e);
      },
    }
  );
}
let T = !1;
function ft() {
  T = !0;
}
function _t() {
  T = !1;
}
function dt(t, e, n, i) {
  for (; t < e; ) {
    const s = t + ((e - t) >> 1);
    n(s) <= i ? (t = s + 1) : (e = s);
  }
  return t;
}
function ht(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const o = [];
    for (let u = 0; u < e.length; u++) {
      const _ = e[u];
      _.claim_order !== void 0 && o.push(_);
    }
    e = o;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let s = 0;
  for (let o = 0; o < e.length; o++) {
    const u = e[o].claim_order,
      _ =
        (s > 0 && e[n[s]].claim_order <= u
          ? s + 1
          : dt(1, s, (a) => e[n[a]].claim_order, u)) - 1;
    i[o] = n[_] + 1;
    const f = _ + 1;
    (n[f] = o), (s = Math.max(f, s));
  }
  const l = [],
    r = [];
  let c = e.length - 1;
  for (let o = n[s] + 1; o != 0; o = i[o - 1]) {
    for (l.push(e[o - 1]); c >= o; c--) r.push(e[c]);
    c--;
  }
  for (; c >= 0; c--) r.push(e[c]);
  l.reverse(), r.sort((o, u) => o.claim_order - u.claim_order);
  for (let o = 0, u = 0; o < r.length; o++) {
    for (; u < l.length && r[o].claim_order >= l[u].claim_order; ) u++;
    const _ = u < l.length ? l[u] : null;
    t.insertBefore(r[o], _);
  }
}
function mt(t, e) {
  t.appendChild(e);
}
function X(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function pt(t) {
  const e = Y("style");
  return yt(X(t), e), e.sheet;
}
function yt(t, e) {
  mt(t.head || t, e);
}
function gt(t, e) {
  if (T) {
    for (
      ht(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentElement !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Qt(t, e, n) {
  T && !n
    ? gt(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function bt(t) {
  t.parentNode.removeChild(t);
}
function Ut(t, e) {
  for (let n = 0; n < t.length; n += 1) t[n] && t[n].d(e);
}
function Y(t) {
  return document.createElement(t);
}
function I(t) {
  return document.createTextNode(t);
}
function Vt() {
  return I(" ");
}
function Xt() {
  return I("");
}
function Yt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Zt(t) {
  return function (e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function te(t) {
  return function (e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function $t(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function ee(t, e) {
  const n = Object.getOwnPropertyDescriptors(t.__proto__);
  for (const i in e)
    e[i] == null
      ? t.removeAttribute(i)
      : i === "style"
      ? (t.style.cssText = e[i])
      : i === "__value"
      ? (t.value = t[i] = e[i])
      : n[i] && n[i].set
      ? (t[i] = e[i])
      : $t(t, i, e[i]);
}
function xt(t) {
  return Array.from(t.childNodes);
}
function wt(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Z(t, e, n, i, s = !1) {
  wt(t);
  const l = (() => {
    for (let r = t.claim_info.last_index; r < t.length; r++) {
      const c = t[r];
      if (e(c)) {
        const o = n(c);
        return (
          o === void 0 ? t.splice(r, 1) : (t[r] = o),
          s || (t.claim_info.last_index = r),
          c
        );
      }
    }
    for (let r = t.claim_info.last_index - 1; r >= 0; r--) {
      const c = t[r];
      if (e(c)) {
        const o = n(c);
        return (
          o === void 0 ? t.splice(r, 1) : (t[r] = o),
          s
            ? o === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = r),
          c
        );
      }
    }
    return i();
  })();
  return (
    (l.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    l
  );
}
function vt(t, e, n, i) {
  return Z(
    t,
    (s) => s.nodeName === e,
    (s) => {
      const l = [];
      for (let r = 0; r < s.attributes.length; r++) {
        const c = s.attributes[r];
        n[c.name] || l.push(c.name);
      }
      l.forEach((r) => s.removeAttribute(r));
    },
    () => i(e)
  );
}
function ne(t, e, n) {
  return vt(t, e, n, Y);
}
function Et(t, e) {
  return Z(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => I(e),
    !0
  );
}
function ie(t) {
  return Et(t, " ");
}
function re(t, e) {
  (e = "" + e), t.wholeText !== e && (t.data = e);
}
function se(t, e) {
  t.value = e == null ? "" : e;
}
function oe(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function tt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, n, i, e), s;
}
const P = new Map();
let M = 0;
function kt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function jt(t, e) {
  const n = { stylesheet: pt(e), rules: {} };
  return P.set(t, n), n;
}
function G(t, e, n, i, s, l, r, c = 0) {
  const o = 16.666 / i;
  let u = `{
`;
  for (let p = 0; p <= 1; p += o) {
    const g = e + (n - e) * l(p);
    u +=
      p * 100 +
      `%{${r(g, 1 - g)}}
`;
  }
  const _ =
      u +
      `100% {${r(n, 1 - n)}}
}`,
    f = `__svelte_${kt(_)}_${c}`,
    a = X(t),
    { stylesheet: d, rules: h } = P.get(a) || jt(a, t);
  h[f] ||
    ((h[f] = !0), d.insertRule(`@keyframes ${f} ${_}`, d.cssRules.length));
  const y = t.style.animation || "";
  return (
    (t.style.animation = `${
      y ? `${y}, ` : ""
    }${f} ${i}ms linear ${s}ms 1 both`),
    (M += 1),
    f
  );
}
function At(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e ? (l) => l.indexOf(e) < 0 : (l) => l.indexOf("__svelte") === -1
    ),
    s = n.length - i.length;
  s && ((t.style.animation = i.join(", ")), (M -= s), M || Ct());
}
function Ct() {
  H(() => {
    M ||
      (P.forEach((t) => {
        const { stylesheet: e } = t;
        let n = e.cssRules.length;
        for (; n--; ) e.deleteRule(n);
        t.rules = {};
      }),
      P.clear());
  });
}
let j;
function k(t) {
  j = t;
}
function w() {
  if (!j) throw new Error("Function called outside component initialization");
  return j;
}
function ce(t) {
  w().$$.on_mount.push(t);
}
function le(t) {
  w().$$.after_update.push(t);
}
function ue(t) {
  w().$$.on_destroy.push(t);
}
function ae() {
  const t = w();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const l = tt(e, n, { cancelable: i });
      return (
        s.slice().forEach((r) => {
          r.call(t, l);
        }),
        !l.defaultPrevented
      );
    }
    return !0;
  };
}
function fe(t, e) {
  return w().$$.context.set(t, e), e;
}
function _e(t) {
  return w().$$.context.get(t);
}
function de(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const E = [],
  J = [],
  S = [],
  B = [],
  et = Promise.resolve();
let L = !1;
function nt() {
  L || ((L = !0), et.then(it));
}
function he() {
  return nt(), et;
}
function O(t) {
  S.push(t);
}
function me(t) {
  B.push(t);
}
const q = new Set();
let N = 0;
function it() {
  const t = j;
  do {
    for (; N < E.length; ) {
      const e = E[N];
      N++, k(e), Nt(e.$$);
    }
    for (k(null), E.length = 0, N = 0; J.length; ) J.pop()();
    for (let e = 0; e < S.length; e += 1) {
      const n = S[e];
      q.has(n) || (q.add(n), n());
    }
    S.length = 0;
  } while (E.length);
  for (; B.length; ) B.pop()();
  (L = !1), q.clear(), k(t);
}
function Nt(t) {
  if (t.fragment !== null) {
    t.update(), x(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(O);
  }
}
let v;
function St() {
  return (
    v ||
      ((v = Promise.resolve()),
      v.then(() => {
        v = null;
      })),
    v
  );
}
function z(t, e, n) {
  t.dispatchEvent(tt(`${e ? "intro" : "outro"}${n}`));
}
const D = new Set();
let m;
function pe() {
  m = { r: 0, c: [], p: m };
}
function ye() {
  m.r || x(m.c), (m = m.p);
}
function Dt(t, e) {
  t && t.i && (D.delete(t), t.i(e));
}
function ge(t, e, n, i) {
  if (t && t.o) {
    if (D.has(t)) return;
    D.add(t),
      m.c.push(() => {
        D.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const Pt = { duration: 0 };
function be(t, e, n, i) {
  let s = e(t, n),
    l = i ? 0 : 1,
    r = null,
    c = null,
    o = null;
  function u() {
    o && At(t, o);
  }
  function _(a, d) {
    const h = a.b - l;
    return (
      (d *= Math.abs(h)),
      {
        a: l,
        b: a.b,
        d: h,
        duration: d,
        start: a.start,
        end: a.start + d,
        group: a.group,
      }
    );
  }
  function f(a) {
    const {
        delay: d = 0,
        duration: h = 300,
        easing: y = st,
        tick: p = $,
        css: g,
      } = s || Pt,
      R = { start: ut() + d, b: a };
    a || ((R.group = m), (m.r += 1)),
      r || c
        ? (c = R)
        : (g && (u(), (o = G(t, l, a, h, d, y, g))),
          a && p(0, 1),
          (r = _(R, h)),
          O(() => z(t, a, "start")),
          at((A) => {
            if (
              (c &&
                A > c.start &&
                ((r = _(c, h)),
                (c = null),
                z(t, r.b, "start"),
                g && (u(), (o = G(t, l, r.b, r.duration, 0, y, s.css)))),
              r)
            ) {
              if (A >= r.end)
                p((l = r.b), 1 - l),
                  z(t, r.b, "end"),
                  c || (r.b ? u() : --r.group.r || x(r.group.c)),
                  (r = null);
              else if (A >= r.start) {
                const rt = A - r.start;
                (l = r.a + r.d * y(rt / r.duration)), p(l, 1 - l);
              }
            }
            return !!(r || c);
          }));
  }
  return {
    run(a) {
      F(s)
        ? St().then(() => {
            (s = s()), f(a);
          })
        : f(a);
    },
    end() {
      u(), (r = c = null);
    },
  };
}
const $e =
  typeof window != "undefined"
    ? window
    : typeof globalThis != "undefined"
    ? globalThis
    : global;
function xe(t, e) {
  const n = {},
    i = {},
    s = { $$scope: 1 };
  let l = t.length;
  for (; l--; ) {
    const r = t[l],
      c = e[l];
    if (c) {
      for (const o in r) o in c || (i[o] = 1);
      for (const o in c) s[o] || ((n[o] = c[o]), (s[o] = 1));
      t[l] = c;
    } else for (const o in r) s[o] = 1;
  }
  for (const r in i) r in n || (n[r] = void 0);
  return n;
}
function we(t) {
  return typeof t == "object" && t !== null ? t : {};
}
function ve(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && ((t.$$.bound[i] = n), n(t.$$.ctx[i]));
}
function Ee(t) {
  t && t.c();
}
function ke(t, e) {
  t && t.l(e);
}
function Mt(t, e, n, i) {
  const { fragment: s, on_mount: l, on_destroy: r, after_update: c } = t.$$;
  s && s.m(e, n),
    i ||
      O(() => {
        const o = l.map(K).filter(F);
        r ? r.push(...o) : x(o), (t.$$.on_mount = []);
      }),
    c.forEach(O);
}
function Ot(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (x(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Tt(t, e) {
  t.$$.dirty[0] === -1 && (E.push(t), nt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function je(t, e, n, i, s, l, r, c = [-1]) {
  const o = j;
  k(t);
  const u = (t.$$ = {
    fragment: null,
    ctx: null,
    props: l,
    update: $,
    not_equal: s,
    bound: W(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    callbacks: W(),
    dirty: c,
    skip_bound: !1,
    root: e.target || o.$$.root,
  });
  r && r(u.root);
  let _ = !1;
  if (
    ((u.ctx = n
      ? n(t, e.props || {}, (f, a, ...d) => {
          const h = d.length ? d[0] : a;
          return (
            u.ctx &&
              s(u.ctx[f], (u.ctx[f] = h)) &&
              (!u.skip_bound && u.bound[f] && u.bound[f](h), _ && Tt(t, f)),
            a
          );
        })
      : []),
    u.update(),
    (_ = !0),
    x(u.before_update),
    (u.fragment = i ? i(u.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      ft();
      const f = xt(e.target);
      u.fragment && u.fragment.l(f), f.forEach(bt);
    } else u.fragment && u.fragment.c();
    e.intro && Dt(t.$$.fragment),
      Mt(t, e.target, e.anchor, e.customElement),
      _t(),
      it();
  }
  k(o);
}
class Ae {
  $destroy() {
    Ot(this, 1), (this.$destroy = $);
  }
  $on(e, n) {
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const s = i.indexOf(n);
        s !== -1 && i.splice(s, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !ct(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  Gt as $,
  we as A,
  Ot as B,
  ot as C,
  he as D,
  $ as E,
  Bt as F,
  Ft as G,
  Ht as H,
  Lt as I,
  zt as J,
  ue as K,
  Jt as L,
  qt as M,
  gt as N,
  Wt as O,
  w as P,
  _e as Q,
  It as R,
  Ae as S,
  J as T,
  ee as U,
  Kt as V,
  F as W,
  x as X,
  Yt as Y,
  de as Z,
  se as _,
  xt as a,
  ve as a0,
  me as a1,
  Ut as a2,
  ae as a3,
  Zt as a4,
  te as a5,
  $e as a6,
  O as a7,
  be as a8,
  $t as b,
  ne as c,
  bt as d,
  Y as e,
  oe as f,
  Qt as g,
  Et as h,
  je as i,
  re as j,
  Vt as k,
  Xt as l,
  ie as m,
  pe as n,
  ge as o,
  ye as p,
  Dt as q,
  fe as r,
  Rt as s,
  I as t,
  le as u,
  ce as v,
  Ee as w,
  ke as x,
  Mt as y,
  xe as z,
};
