import {
  S as ne,
  i as fe,
  s as ae,
  e as k,
  c as D,
  a as V,
  d as o,
  b as M,
  g as c,
  N as S,
  E as Q,
  a7 as se,
  F as De,
  Y as Ee,
  G as Ie,
  H as Re,
  I as Be,
  q as b,
  o as w,
  f as A,
  w as R,
  k as E,
  x as B,
  m as I,
  y as P,
  B as C,
  a3 as Pe,
  a1 as be,
  l as Y,
  n as U,
  p as Z,
  a8 as K,
  T as we,
  a0 as he,
  t as H,
  h as L,
} from "../chunks/index-ec06594a.js";
import {
  D as ke,
  T as Ce,
  f as W,
  I as q,
  B as x,
  L as ie,
} from "../chunks/drawer-b3e5472e.js";
import {
  L as re,
  C as G,
} from "../chunks/pill-logo.svelte_svelte_type_style_lang-a71f6f3e.js";
import { C as ze, P as oe } from "../chunks/ActionIcons-1f783b7d.js";
import "../chunks/index-db7e7858.js";
function Ve(a) {
  let t, l;
  return {
    c() {
      (t = k("div")), (l = k("span")), this.h();
    },
    l(e) {
      t = D(e, "DIV", { class: !0 });
      var s = V(t);
      (l = D(s, "SPAN", { class: !0 })),
        V(l).forEach(o),
        s.forEach(o),
        this.h();
    },
    h() {
      M(l, "class", "blue-swoop svelte-1kz5pl8"),
        M(t, "class", "svg-holder svelte-1kz5pl8");
    },
    m(e, s) {
      c(e, t, s), S(t, l);
    },
    p: Q,
    i: Q,
    o: Q,
    d(e) {
      e && o(t);
    },
  };
}
function Se(a) {
  return [];
}
class Te extends ne {
  constructor(t) {
    super(), fe(this, t, Se, Ve, ae, {});
  }
}
const Ne = (a) => ({ visible: a & 2 }),
  ue = (a) => ({ visible: a[1] });
function ye(a) {
  let t = !1,
    l = () => {
      t = !1;
    },
    e,
    s,
    r,
    i;
  se(a[4]);
  const u = a[3].default,
    n = De(u, a, a[2], ue);
  return {
    c() {
      n && n.c();
    },
    l($) {
      n && n.l($);
    },
    m($, _) {
      n && n.m($, _),
        (s = !0),
        r ||
          ((i = Ee(window, "scroll", () => {
            (t = !0), clearTimeout(e), (e = setTimeout(l, 100)), a[4]();
          })),
          (r = !0));
    },
    p($, [_]) {
      _ & 1 &&
        !t &&
        ((t = !0),
        clearTimeout(e),
        scrollTo(window.pageXOffset, $[0]),
        (e = setTimeout(l, 100))),
        n &&
          n.p &&
          (!s || _ & 6) &&
          Ie(n, u, $, $[2], s ? Be(u, $[2], _, Ne) : Re($[2]), ue);
    },
    i($) {
      s || (b(n, $), (s = !0));
    },
    o($) {
      w(n, $), (s = !1);
    },
    d($) {
      n && n.d($), (r = !1), i();
    },
  };
}
function Ae(a, t, l) {
  let { $$slots: e = {}, $$scope: s } = t,
    r,
    i;
  function u($) {
    l(1, (i = !($ < 50)));
  }
  function n() {
    l(0, (r = window.pageYOffset));
  }
  return (
    (a.$$set = ($) => {
      "$$scope" in $ && l(2, (s = $.$$scope));
    }),
    (a.$$.update = () => {
      a.$$.dirty & 1 && u(r);
    }),
    [r, i, s, e, n]
  );
}
class J extends ne {
  constructor(t) {
    super(), fe(this, t, Ae, ye, ae, {});
  }
}
function He(a) {
  let t, l;
  return {
    c() {
      (t = k("div")), (l = k("span")), this.h();
    },
    l(e) {
      t = D(e, "DIV", { class: !0 });
      var s = V(t);
      (l = D(s, "SPAN", { class: !0, style: !0 })),
        V(l).forEach(o),
        s.forEach(o),
        this.h();
    },
    h() {
      M(l, "class", "background-image svelte-p28e45"),
        A(l, "background", "url(" + a[0] + ")"),
        A(l, "background-position", "50% -21px"),
        A(l, "background-attachment", a[1]),
        A(l, "background-size", "cover"),
        M(t, "class", "bg-holder svelte-p28e45");
    },
    m(e, s) {
      c(e, t, s), S(t, l);
    },
    p(e, [s]) {
      s & 1 && A(l, "background", "url(" + e[0] + ")"),
        s & 2 && A(l, "background-attachment", e[1]);
    },
    i: Q,
    o: Q,
    d(e) {
      e && o(t);
    },
  };
}
function Le(a, t, l) {
  let { src: e } = t,
    { variant: s } = t,
    { animation: r } = t;
  return (
    (a.$$set = (i) => {
      "src" in i && l(0, (e = i.src)),
        "variant" in i && l(1, (s = i.variant)),
        "animation" in i && l(2, (r = i.animation));
    }),
    [e, s, r]
  );
}
class Me extends ne {
  constructor(t) {
    super(), fe(this, t, Le, He, ae, { src: 0, variant: 1, animation: 2 });
  }
}
function ce(a) {
  let t, l, e, s, r;
  function i(n) {
    a[1](n);
  }
  let u = {};
  return (
    a[0] !== void 0 && (u.open = a[0]),
    (t = new ke({ props: u })),
    we.push(() => he(t, "open", i)),
    (s = new Ce({})),
    s.$on("message", a[2]),
    {
      c() {
        R(t.$$.fragment), (e = E()), R(s.$$.fragment);
      },
      l(n) {
        B(t.$$.fragment, n), (e = I(n)), B(s.$$.fragment, n);
      },
      m(n, $) {
        P(t, n, $), c(n, e, $), P(s, n, $), (r = !0);
      },
      p(n, $) {
        const _ = {};
        !l && $ & 1 && ((l = !0), (_.open = n[0]), be(() => (l = !1))),
          t.$set(_);
      },
      i(n) {
        r || (b(t.$$.fragment, n), b(s.$$.fragment, n), (r = !0));
      },
      o(n) {
        w(t.$$.fragment, n), w(s.$$.fragment, n), (r = !1);
      },
      d(n) {
        C(t, n), n && o(e), C(s, n);
      },
    }
  );
}
function Oe(a) {
  let t,
    l,
    e = a[8] && ce(a);
  return {
    c() {
      e && e.c(), (t = Y());
    },
    l(s) {
      e && e.l(s), (t = Y());
    },
    m(s, r) {
      e && e.m(s, r), c(s, t, r), (l = !0);
    },
    p(s, r) {
      s[8]
        ? e
          ? (e.p(s, r), r & 256 && b(e, 1))
          : ((e = ce(s)), e.c(), b(e, 1), e.m(t.parentNode, t))
        : e &&
          (U(),
          w(e, 1, 1, () => {
            e = null;
          }),
          Z());
    },
    i(s) {
      l || (b(e), (l = !0));
    },
    o(s) {
      w(e), (l = !1);
    },
    d(s) {
      e && e.d(s), s && o(t);
    },
  };
}
function me(a) {
  let t, l, e;
  function s(i) {
    a[3](i);
  }
  let r = {};
  return (
    a[0] !== void 0 && (r.open = a[0]),
    (t = new ke({ props: r })),
    we.push(() => he(t, "open", s)),
    {
      c() {
        R(t.$$.fragment);
      },
      l(i) {
        B(t.$$.fragment, i);
      },
      m(i, u) {
        P(t, i, u), (e = !0);
      },
      p(i, u) {
        const n = {};
        !l && u & 1 && ((l = !0), (n.open = i[0]), be(() => (l = !1))),
          t.$set(n);
      },
      i(i) {
        e || (b(t.$$.fragment, i), (e = !0));
      },
      o(i) {
        w(t.$$.fragment, i), (e = !1);
      },
      d(i) {
        C(t, i);
      },
    }
  );
}
function Ye(a) {
  let t,
    l,
    e = !a[8] && me(a);
  return {
    c() {
      e && e.c(), (t = Y());
    },
    l(s) {
      e && e.l(s), (t = Y());
    },
    m(s, r) {
      e && e.m(s, r), c(s, t, r), (l = !0);
    },
    p(s, r) {
      s[8]
        ? e &&
          (U(),
          w(e, 1, 1, () => {
            e = null;
          }),
          Z())
        : e
        ? (e.p(s, r), r & 256 && b(e, 1))
        : ((e = me(s)), e.c(), b(e, 1), e.m(t.parentNode, t));
    },
    i(s) {
      l || (b(e), (l = !0));
    },
    o(s) {
      w(e), (l = !1);
    },
    d(s) {
      e && e.d(s), s && o(t);
    },
  };
}
function pe(a) {
  let t, l, e, s;
  return (
    (l = new Te({})),
    {
      c() {
        (t = k("div")), R(l.$$.fragment);
      },
      l(r) {
        t = D(r, "DIV", {});
        var i = V(t);
        B(l.$$.fragment, i), i.forEach(o);
      },
      m(r, i) {
        c(r, t, i), P(l, t, null), (s = !0);
      },
      i(r) {
        s ||
          (b(l.$$.fragment, r),
          se(() => {
            e || (e = K(t, W, { y: -500, duration: 400 }, !0)), e.run(1);
          }),
          (s = !0));
      },
      o(r) {
        w(l.$$.fragment, r),
          e || (e = K(t, W, { y: -500, duration: 400 }, !1)),
          e.run(0),
          (s = !1);
      },
      d(r) {
        r && o(t), C(l), r && e && e.end();
      },
    }
  );
}
function Fe(a) {
  let t,
    l,
    e = !a[8] && pe();
  return {
    c() {
      e && e.c(), (t = Y());
    },
    l(s) {
      e && e.l(s), (t = Y());
    },
    m(s, r) {
      e && e.m(s, r), c(s, t, r), (l = !0);
    },
    p(s, r) {
      s[8]
        ? e &&
          (U(),
          w(e, 1, 1, () => {
            e = null;
          }),
          Z())
        : e
        ? r & 256 && b(e, 1)
        : ((e = pe()), e.c(), b(e, 1), e.m(t.parentNode, t));
    },
    i(s) {
      l || (b(e), (l = !0));
    },
    o(s) {
      w(e), (l = !1);
    },
    d(s) {
      e && e.d(s), s && o(t);
    },
  };
}
function _e(a) {
  let t, l, e;
  return {
    c() {
      (t = k("div")), this.h();
    },
    l(s) {
      (t = D(s, "DIV", { style: !0 })), V(t).forEach(o), this.h();
    },
    h() {
      A(t, "display", "block"), A(t, "height", "200px"), A(t, "width", "100%");
    },
    m(s, r) {
      c(s, t, r), (e = !0);
    },
    i(s) {
      e ||
        (se(() => {
          l || (l = K(t, W, { y: 0, duration: 0 }, !0)), l.run(1);
        }),
        (e = !0));
    },
    o(s) {
      l || (l = K(t, W, { y: 0, duration: 0 }, !1)), l.run(0), (e = !1);
    },
    d(s) {
      s && o(t), s && l && l.end();
    },
  };
}
function Ge(a) {
  let t,
    l,
    e = a[8] && _e();
  return {
    c() {
      e && e.c(), (t = Y());
    },
    l(s) {
      e && e.l(s), (t = Y());
    },
    m(s, r) {
      e && e.m(s, r), c(s, t, r), (l = !0);
    },
    p(s, r) {
      s[8]
        ? e
          ? r & 256 && b(e, 1)
          : ((e = _e()), e.c(), b(e, 1), e.m(t.parentNode, t))
        : e &&
          (U(),
          w(e, 1, 1, () => {
            e = null;
          }),
          Z());
    },
    i(s) {
      l || (b(e), (l = !0));
    },
    o(s) {
      w(e), (l = !1);
    },
    d(s) {
      e && e.d(s), s && o(t);
    },
  };
}
function de(a) {
  let t, l;
  return (
    (t = new G({
      props: {
        span: 12,
        class: "right",
        $$slots: { default: [Je] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment);
      },
      l(e) {
        B(t.$$.fragment, e);
      },
      m(e, s) {
        P(t, e, s), (l = !0);
      },
      p(e, s) {
        const r = {};
        s & 513 && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
      },
      i(e) {
        l || (b(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        w(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        C(t, e);
      },
    }
  );
}
function qe(a) {
  let t, l;
  return (
    (t = new q({
      props: {
        class: "material-icons",
        $$slots: { default: [Ke] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment);
      },
      l(e) {
        B(t.$$.fragment, e);
      },
      m(e, s) {
        P(t, e, s), (l = !0);
      },
      i(e) {
        l || (b(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        w(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        C(t, e);
      },
    }
  );
}
function Ke(a) {
  let t;
  return {
    c() {
      t = H("menu");
    },
    l(l) {
      t = L(l, "menu");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function We(a) {
  let t,
    l,
    e,
    s,
    r = qe(a),
    i = Ct;
  return {
    c() {
      (t = H(`Menu
            `)),
        r && r.c(),
        (l = E()),
        (e = Y());
    },
    l(u) {
      (t = L(
        u,
        `Menu
            `
      )),
        r && r.l(u),
        (l = I(u)),
        (e = Y());
    },
    m(u, n) {
      c(u, t, n), r && r.m(u, n), c(u, l, n), c(u, e, n), (s = !0);
    },
    p: Q,
    i(u) {
      s || (b(r), b(i), (s = !0));
    },
    o(u) {
      w(r), w(i), (s = !1);
    },
    d(u) {
      u && o(t), r && r.d(u), u && o(l), u && o(e);
    },
  };
}
function je(a) {
  let t, l, e;
  return (
    (t = new oe({})),
    {
      c() {
        (l = k("div")), R(t.$$.fragment), this.h();
      },
      l(s) {
        l = D(s, "DIV", { style: !0 });
        var r = V(l);
        B(t.$$.fragment, r), this.h();
      },
      h() {
        A(l, "display", "contents"), A(l, "--width", "3em");
      },
      m(s, r) {
        c(s, l, r), P(t, l, null), (e = !0);
      },
      p: Q,
      i(s) {
        e || (b(t.$$.fragment, s), (e = !0));
      },
      o(s) {
        w(t.$$.fragment, s), (e = !1);
      },
      d(s) {
        s && o(l), C(t, s);
      },
    }
  );
}
function Xe(a) {
  let t;
  return {
    c() {
      t = H("account_circle");
    },
    l(l) {
      t = L(l, "account_circle");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function Je(a) {
  let t, l, e, s, r, i, u;
  return (
    (t = new x({
      props: {
        class: "light",
        $$slots: { default: [We] },
        $$scope: { ctx: a },
      },
    })),
    t.$on("click", a[4]),
    (s = new x({
      props: {
        class: "light",
        $$slots: { default: [je] },
        $$scope: { ctx: a },
      },
    })),
    s.$on("click", a[5]),
    (i = new q({
      props: {
        class: "material-icons light",
        "aria-label": "Download",
        $$slots: { default: [Xe] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment),
          (l = E()),
          (e = k("div")),
          R(s.$$.fragment),
          (r = E()),
          R(i.$$.fragment),
          this.h();
      },
      l(n) {
        B(t.$$.fragment, n), (l = I(n)), (e = D(n, "DIV", { class: !0 }));
        var $ = V(e);
        B(s.$$.fragment, $),
          $.forEach(o),
          (r = I(n)),
          B(i.$$.fragment, n),
          this.h();
      },
      h() {
        M(e, "class", "mobile");
      },
      m(n, $) {
        P(t, n, $),
          c(n, l, $),
          c(n, e, $),
          P(s, e, null),
          c(n, r, $),
          P(i, n, $),
          (u = !0);
      },
      p(n, $) {
        const _ = {};
        $ & 512 && (_.$$scope = { dirty: $, ctx: n }), t.$set(_);
        const f = {};
        $ & 512 && (f.$$scope = { dirty: $, ctx: n }), s.$set(f);
        const d = {};
        $ & 512 && (d.$$scope = { dirty: $, ctx: n }), i.$set(d);
      },
      i(n) {
        u ||
          (b(t.$$.fragment, n),
          b(s.$$.fragment, n),
          b(i.$$.fragment, n),
          (u = !0));
      },
      o(n) {
        w(t.$$.fragment, n), w(s.$$.fragment, n), w(i.$$.fragment, n), (u = !1);
      },
      d(n) {
        C(t, n), n && o(l), n && o(e), C(s), n && o(r), C(i, n);
      },
    }
  );
}
function Qe(a) {
  let t,
    l,
    e = !a[8] && de(a);
  return {
    c() {
      e && e.c(), (t = Y());
    },
    l(s) {
      e && e.l(s), (t = Y());
    },
    m(s, r) {
      e && e.m(s, r), c(s, t, r), (l = !0);
    },
    p(s, r) {
      s[8]
        ? e &&
          (U(),
          w(e, 1, 1, () => {
            e = null;
          }),
          Z())
        : e
        ? (e.p(s, r), r & 256 && b(e, 1))
        : ((e = de(s)), e.c(), b(e, 1), e.m(t.parentNode, t));
    },
    i(s) {
      l || (b(e), (l = !0));
    },
    o(s) {
      w(e), (l = !1);
    },
    d(s) {
      e && e.d(s), s && o(t);
    },
  };
}
function Ue(a) {
  let t, l;
  return (
    (t = new J({
      props: {
        $$slots: {
          default: [
            Qe,
            ({ visible: e }) => ({ 8: e }),
            ({ visible: e }) => (e ? 256 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment);
      },
      l(e) {
        B(t.$$.fragment, e);
      },
      m(e, s) {
        P(t, e, s), (l = !0);
      },
      p(e, s) {
        const r = {};
        s & 769 && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
      },
      i(e) {
        l || (b(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        w(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        C(t, e);
      },
    }
  );
}
function ge(a) {
  let t, l, e, s, r;
  return (
    (l = new oe({})),
    {
      c() {
        (t = k("div")), (e = k("div")), R(l.$$.fragment), this.h();
      },
      l(i) {
        t = D(i, "DIV", { class: !0 });
        var u = V(t);
        e = D(u, "DIV", { style: !0 });
        var n = V(e);
        B(l.$$.fragment, n), u.forEach(o), this.h();
      },
      h() {
        A(e, "display", "contents"),
          A(e, "--width", "20em"),
          M(t, "class", "pill-logo-container desktop svelte-13ld8k3");
      },
      m(i, u) {
        c(i, t, u), S(t, e), P(l, e, null), (r = !0);
      },
      i(i) {
        r ||
          (b(l.$$.fragment, i),
          se(() => {
            s || (s = K(t, W, { x: -500, duration: 500 }, !0)), s.run(1);
          }),
          (r = !0));
      },
      o(i) {
        w(l.$$.fragment, i),
          s || (s = K(t, W, { x: -500, duration: 500 }, !1)),
          s.run(0),
          (r = !1);
      },
      d(i) {
        i && o(t), C(l), i && s && s.end();
      },
    }
  );
}
function Ze(a) {
  let t,
    l,
    e = !a[8] && ge();
  return {
    c() {
      e && e.c(), (t = Y());
    },
    l(s) {
      e && e.l(s), (t = Y());
    },
    m(s, r) {
      e && e.m(s, r), c(s, t, r), (l = !0);
    },
    p(s, r) {
      s[8]
        ? e &&
          (U(),
          w(e, 1, 1, () => {
            e = null;
          }),
          Z())
        : e
        ? r & 256 && b(e, 1)
        : ((e = ge()), e.c(), b(e, 1), e.m(t.parentNode, t));
    },
    i(s) {
      l || (b(e), (l = !0));
    },
    o(s) {
      w(e), (l = !1);
    },
    d(s) {
      e && e.d(s), s && o(t);
    },
  };
}
function xe(a) {
  let t, l;
  return (
    (t = new J({
      props: {
        $$slots: {
          default: [
            Ze,
            ({ visible: e }) => ({ 8: e }),
            ({ visible: e }) => (e ? 256 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment);
      },
      l(e) {
        B(t.$$.fragment, e);
      },
      m(e, s) {
        P(t, e, s), (l = !0);
      },
      p(e, s) {
        const r = {};
        s & 768 && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
      },
      i(e) {
        l || (b(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        w(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        C(t, e);
      },
    }
  );
}
function ve(a) {
  let t, l, e, s, r, i, u, n, $, _, f, d, m, h, T, y, v, g, N, p, z, j;
  return (
    (f = new x({
      props: {
        color: "secondary",
        href: "http://cdek.liu.edu/",
        target: "_blank",
        variant: "raised",
        class: "mdc-elevation--z12",
        $$slots: { default: [lt] },
        $$scope: { ctx: a },
      },
    })),
    (y = new x({
      props: {
        color: "primary",
        href: "#scroll-down",
        variant: "raised",
        class: "mdc-elevation--z12",
        $$slots: { default: [nt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("div")),
          (l = k("h1")),
          (e = H("CRIB")),
          (s = E()),
          (r = k("p")),
          (i = H("Center for Research Innovation in Biotechnology (")),
          (u = k("strong")),
          (n = H("CRIB")),
          ($ = H(`) aggregates and analyzes the sources of scientific, medical
                and business innovations in therapeutics & vaccines.`)),
          (_ = E()),
          R(f.$$.fragment),
          (d = E()),
          (m = k("div")),
          (h = k("br")),
          (T = E()),
          R(y.$$.fragment),
          (v = E()),
          (g = k("br")),
          (N = E()),
          (p = k("br")),
          this.h();
      },
      l(F) {
        t = D(F, "DIV", {});
        var O = V(t);
        l = D(O, "H1", { class: !0 });
        var ee = V(l);
        (e = L(ee, "CRIB")),
          ee.forEach(o),
          (s = I(O)),
          (r = D(O, "P", { class: !0 }));
        var X = V(r);
        (i = L(X, "Center for Research Innovation in Biotechnology (")),
          (u = D(X, "STRONG", { style: !0 }));
        var te = V(u);
        (n = L(te, "CRIB")),
          te.forEach(o),
          ($ = L(
            X,
            `) aggregates and analyzes the sources of scientific, medical
                and business innovations in therapeutics & vaccines.`
          )),
          X.forEach(o),
          (_ = I(O)),
          B(f.$$.fragment, O),
          (d = I(O)),
          (m = D(O, "DIV", { class: !0 }));
        var le = V(m);
        (h = D(le, "BR", {})),
          le.forEach(o),
          (T = I(O)),
          B(y.$$.fragment, O),
          (v = I(O)),
          (g = D(O, "BR", {})),
          (N = I(O)),
          (p = D(O, "BR", {})),
          O.forEach(o),
          this.h();
      },
      h() {
        M(l, "class", "bold headline light"),
          A(u, "font-size", "1em"),
          M(r, "class", "lead light"),
          M(m, "class", "mobile");
      },
      m(F, O) {
        c(F, t, O),
          S(t, l),
          S(l, e),
          S(t, s),
          S(t, r),
          S(r, i),
          S(r, u),
          S(u, n),
          S(r, $),
          S(t, _),
          P(f, t, null),
          S(t, d),
          S(t, m),
          S(m, h),
          S(t, T),
          P(y, t, null),
          S(t, v),
          S(t, g),
          S(t, N),
          S(t, p),
          (j = !0);
      },
      i(F) {
        j ||
          (b(f.$$.fragment, F),
          b(y.$$.fragment, F),
          se(() => {
            z || (z = K(t, W, { x: 500, duration: 500 }, !0)), z.run(1);
          }),
          (j = !0));
      },
      o(F) {
        w(f.$$.fragment, F),
          w(y.$$.fragment, F),
          z || (z = K(t, W, { x: 500, duration: 500 }, !1)),
          z.run(0),
          (j = !1);
      },
      d(F) {
        F && o(t), C(f), C(y), F && z && z.end();
      },
    }
  );
}
function et(a) {
  let t;
  return {
    c() {
      t = H("Browse CDEK Data");
    },
    l(l) {
      t = L(l, "Browse CDEK Data");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function tt(a) {
  let t;
  return {
    c() {
      t = H("link");
    },
    l(l) {
      t = L(l, "link");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function lt(a) {
  let t, l, e, s;
  return (
    (t = new ie({
      props: { $$slots: { default: [et] }, $$scope: { ctx: a } },
    })),
    (e = new q({
      props: {
        class: "material-icons",
        $$slots: { default: [tt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment), (l = E()), R(e.$$.fragment);
      },
      l(r) {
        B(t.$$.fragment, r), (l = I(r)), B(e.$$.fragment, r);
      },
      m(r, i) {
        P(t, r, i), c(r, l, i), P(e, r, i), (s = !0);
      },
      p(r, i) {
        const u = {};
        i & 512 && (u.$$scope = { dirty: i, ctx: r }), t.$set(u);
        const n = {};
        i & 512 && (n.$$scope = { dirty: i, ctx: r }), e.$set(n);
      },
      i(r) {
        s || (b(t.$$.fragment, r), b(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        w(t.$$.fragment, r), w(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        C(t, r), r && o(l), C(e, r);
      },
    }
  );
}
function st(a) {
  let t;
  return {
    c() {
      t = H("Discover More");
    },
    l(l) {
      t = L(l, "Discover More");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function rt(a) {
  let t;
  return {
    c() {
      t = H("south");
    },
    l(l) {
      t = L(l, "south");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function nt(a) {
  let t, l, e, s;
  return (
    (t = new ie({
      props: { $$slots: { default: [st] }, $$scope: { ctx: a } },
    })),
    (e = new q({
      props: {
        class: "material-icons",
        $$slots: { default: [rt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment), (l = E()), R(e.$$.fragment);
      },
      l(r) {
        B(t.$$.fragment, r), (l = I(r)), B(e.$$.fragment, r);
      },
      m(r, i) {
        P(t, r, i), c(r, l, i), P(e, r, i), (s = !0);
      },
      p(r, i) {
        const u = {};
        i & 512 && (u.$$scope = { dirty: i, ctx: r }), t.$set(u);
        const n = {};
        i & 512 && (n.$$scope = { dirty: i, ctx: r }), e.$set(n);
      },
      i(r) {
        s || (b(t.$$.fragment, r), b(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        w(t.$$.fragment, r), w(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        C(t, r), r && o(l), C(e, r);
      },
    }
  );
}
function ft(a) {
  let t,
    l,
    e = !a[8] && ve(a);
  return {
    c() {
      e && e.c(), (t = Y());
    },
    l(s) {
      e && e.l(s), (t = Y());
    },
    m(s, r) {
      e && e.m(s, r), c(s, t, r), (l = !0);
    },
    p(s, r) {
      s[8]
        ? e &&
          (U(),
          w(e, 1, 1, () => {
            e = null;
          }),
          Z())
        : e
        ? r & 256 && b(e, 1)
        : ((e = ve(s)), e.c(), b(e, 1), e.m(t.parentNode, t));
    },
    i(s) {
      l || (b(e), (l = !0));
    },
    o(s) {
      w(e), (l = !1);
    },
    d(s) {
      e && e.d(s), s && o(t);
    },
  };
}
function at(a) {
  let t, l, e;
  return (
    (l = new J({
      props: {
        $$slots: {
          default: [
            ft,
            ({ visible: s }) => ({ 8: s }),
            ({ visible: s }) => (s ? 256 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("div")), R(l.$$.fragment), this.h();
      },
      l(s) {
        t = D(s, "DIV", { class: !0 });
        var r = V(t);
        B(l.$$.fragment, r), r.forEach(o), this.h();
      },
      h() {
        M(t, "class", "demo-cell");
      },
      m(s, r) {
        c(s, t, r), P(l, t, null), (e = !0);
      },
      p(s, r) {
        const i = {};
        r & 768 && (i.$$scope = { dirty: r, ctx: s }), l.$set(i);
      },
      i(s) {
        e || (b(l.$$.fragment, s), (e = !0));
      },
      o(s) {
        w(l.$$.fragment, s), (e = !1);
      },
      d(s) {
        s && o(t), C(l);
      },
    }
  );
}
function it(a) {
  let t, l, e, s;
  return (
    (t = new G({
      props: { span: 5, $$slots: { default: [xe] }, $$scope: { ctx: a } },
    })),
    (e = new G({
      props: { span: 7, $$slots: { default: [at] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        R(t.$$.fragment), (l = E()), R(e.$$.fragment);
      },
      l(r) {
        B(t.$$.fragment, r), (l = I(r)), B(e.$$.fragment, r);
      },
      m(r, i) {
        P(t, r, i), c(r, l, i), P(e, r, i), (s = !0);
      },
      p(r, i) {
        const u = {};
        i & 512 && (u.$$scope = { dirty: i, ctx: r }), t.$set(u);
        const n = {};
        i & 512 && (n.$$scope = { dirty: i, ctx: r }), e.$set(n);
      },
      i(r) {
        s || (b(t.$$.fragment, r), b(e.$$.fragment, r), (s = !0));
      },
      o(r) {
        w(t.$$.fragment, r), w(e.$$.fragment, r), (s = !1);
      },
      d(r) {
        C(t, r), r && o(l), C(e, r);
      },
    }
  );
}
function ot(a) {
  let t;
  return {
    c() {
      t = H("Learn About CRIB");
    },
    l(l) {
      t = L(l, "Learn About CRIB");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function $t(a) {
  let t, l;
  return (
    (t = new ie({
      props: { $$slots: { default: [ot] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        R(t.$$.fragment);
      },
      l(e) {
        B(t.$$.fragment, e);
      },
      m(e, s) {
        P(t, e, s), (l = !0);
      },
      p(e, s) {
        const r = {};
        s & 512 && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
      },
      i(e) {
        l || (b(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        w(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        C(t, e);
      },
    }
  );
}
function ut(a) {
  let t, l, e, s, r, i, u, n, $, _, f, d, m, h, T, y, v;
  return (
    (t = new oe({})),
    (d = new x({
      props: {
        color: "secondary",
        href: "/about",
        variant: "outlined",
        class: " rou snded",
        $$slots: { default: [$t] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (l = k("div")),
          R(t.$$.fragment),
          (e = E()),
          (s = k("h1")),
          (r = H("Powerful Insights of Clinical Trials Data")),
          (i = E()),
          (u = k("p")),
          (n = H(`C.R.I.B. brings together expertise, skills & knowledge in the
        Pharmacology, Data Science, Clinic Trials research sectors and provides
        clean, collected, and updated data on FDA Approved Drugs, Pharmacology
        Organizations, Drug pricing, and medical indications(MeSH).`)),
          ($ = E()),
          (_ = k("br")),
          (f = E()),
          R(d.$$.fragment),
          (m = E()),
          (h = k("br")),
          (T = E()),
          (y = k("br")),
          this.h();
      },
      l(g) {
        l = D(g, "DIV", { style: !0 });
        var N = V(l);
        B(t.$$.fragment, N), (e = I(g)), (s = D(g, "H1", { class: !0 }));
        var p = V(s);
        (r = L(p, "Powerful Insights of Clinical Trials Data")),
          p.forEach(o),
          (i = I(g)),
          (u = D(g, "P", { class: !0 }));
        var z = V(u);
        (n = L(
          z,
          `C.R.I.B. brings together expertise, skills & knowledge in the
        Pharmacology, Data Science, Clinic Trials research sectors and provides
        clean, collected, and updated data on FDA Approved Drugs, Pharmacology
        Organizations, Drug pricing, and medical indications(MeSH).`
        )),
          z.forEach(o),
          ($ = I(g)),
          (_ = D(g, "BR", {})),
          (f = I(g)),
          B(d.$$.fragment, g),
          (m = I(g)),
          (h = D(g, "BR", {})),
          (T = I(g)),
          (y = D(g, "BR", {})),
          this.h();
      },
      h() {
        A(l, "display", "contents"),
          A(l, "--width", "8em"),
          M(s, "class", "thin"),
          M(u, "class", "mono");
      },
      m(g, N) {
        c(g, l, N),
          P(t, l, null),
          c(g, e, N),
          c(g, s, N),
          S(s, r),
          c(g, i, N),
          c(g, u, N),
          S(u, n),
          c(g, $, N),
          c(g, _, N),
          c(g, f, N),
          P(d, g, N),
          c(g, m, N),
          c(g, h, N),
          c(g, T, N),
          c(g, y, N),
          (v = !0);
      },
      p(g, N) {
        const p = {};
        N & 512 && (p.$$scope = { dirty: N, ctx: g }), d.$set(p);
      },
      i(g) {
        v || (b(t.$$.fragment, g), b(d.$$.fragment, g), (v = !0));
      },
      o(g) {
        w(t.$$.fragment, g), w(d.$$.fragment, g), (v = !1);
      },
      d(g) {
        g && o(l),
          C(t, g),
          g && o(e),
          g && o(s),
          g && o(i),
          g && o(u),
          g && o($),
          g && o(_),
          g && o(f),
          C(d, g),
          g && o(m),
          g && o(h),
          g && o(T),
          g && o(y);
      },
    }
  );
}
function ct(a) {
  let t, l;
  return (
    (t = new ze({
      props: {
        variant: "outlined",
        padded: !0,
        class: "cell rounded mdc-elevation--z1",
        $$slots: { default: [ut] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment);
      },
      l(e) {
        B(t.$$.fragment, e);
      },
      m(e, s) {
        P(t, e, s), (l = !0);
      },
      p(e, s) {
        const r = {};
        s & 512 && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
      },
      i(e) {
        l || (b(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        w(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        C(t, e);
      },
    }
  );
}
function mt(a) {
  let t, l, e, s, r, i, u, n, $, _, f, d, m, h, T, y;
  return (
    (t = new Me({
      props: {
        src: "/images/covid-data-bg.jpg",
        variant: "fixed",
        class: "desktop",
      },
    })),
    (e = new G({ props: { span: 2 } })),
    (r = new G({
      props: {
        span: 6,
        class: "cell center",
        $$slots: { default: [ct] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment),
          (l = E()),
          R(e.$$.fragment),
          (s = E()),
          R(r.$$.fragment),
          (i = E()),
          (u = k("br")),
          (n = E()),
          ($ = k("br")),
          (_ = E()),
          (f = k("br")),
          (d = E()),
          (m = k("br")),
          (h = E()),
          (T = k("p"));
      },
      l(v) {
        B(t.$$.fragment, v),
          (l = I(v)),
          B(e.$$.fragment, v),
          (s = I(v)),
          B(r.$$.fragment, v),
          (i = I(v)),
          (u = D(v, "BR", {})),
          (n = I(v)),
          ($ = D(v, "BR", {})),
          (_ = I(v)),
          (f = D(v, "BR", {})),
          (d = I(v)),
          (m = D(v, "BR", {})),
          (h = I(v)),
          (T = D(v, "P", {})),
          V(T).forEach(o);
      },
      m(v, g) {
        P(t, v, g),
          c(v, l, g),
          P(e, v, g),
          c(v, s, g),
          P(r, v, g),
          c(v, i, g),
          c(v, u, g),
          c(v, n, g),
          c(v, $, g),
          c(v, _, g),
          c(v, f, g),
          c(v, d, g),
          c(v, m, g),
          c(v, h, g),
          c(v, T, g),
          (y = !0);
      },
      p(v, g) {
        const N = {};
        g & 512 && (N.$$scope = { dirty: g, ctx: v }), r.$set(N);
      },
      i(v) {
        y ||
          (b(t.$$.fragment, v),
          b(e.$$.fragment, v),
          b(r.$$.fragment, v),
          (y = !0));
      },
      o(v) {
        w(t.$$.fragment, v), w(e.$$.fragment, v), w(r.$$.fragment, v), (y = !1);
      },
      d(v) {
        C(t, v),
          v && o(l),
          C(e, v),
          v && o(s),
          C(r, v),
          v && o(i),
          v && o(u),
          v && o(n),
          v && o($),
          v && o(_),
          v && o(f),
          v && o(d),
          v && o(m),
          v && o(h),
          v && o(T);
      },
    }
  );
}
function pt(a) {
  let t;
  return {
    c() {
      t = H("newspaper");
    },
    l(l) {
      t = L(l, "newspaper");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function _t(a) {
  let t, l, e, s, r, i, u, n, $;
  return (
    (l = new q({
      props: {
        class: "material-icons ",
        $$slots: { default: [pt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("span")),
          (e = k("div")),
          R(l.$$.fragment),
          (s = E()),
          (r = k("br")),
          (i = E()),
          (u = k("h1")),
          (n = H("Peer Revied Research into Clinical Trials")),
          this.h();
      },
      l(_) {
        t = D(_, "SPAN", { class: !0 });
        var f = V(t);
        e = D(f, "DIV", { style: !0 });
        var d = V(e);
        B(l.$$.fragment, d),
          f.forEach(o),
          (s = I(_)),
          (r = D(_, "BR", {})),
          (i = I(_)),
          (u = D(_, "H1", { class: !0 }));
        var m = V(u);
        (n = L(m, "Peer Revied Research into Clinical Trials")),
          m.forEach(o),
          this.h();
      },
      h() {
        A(e, "display", "contents"),
          A(e, "--font-size", "8em"),
          M(t, "class", "dark-grey"),
          M(u, "class", "thin");
      },
      m(_, f) {
        c(_, t, f),
          S(t, e),
          P(l, e, null),
          c(_, s, f),
          c(_, r, f),
          c(_, i, f),
          c(_, u, f),
          S(u, n),
          ($ = !0);
      },
      p(_, f) {
        const d = {};
        f & 512 && (d.$$scope = { dirty: f, ctx: _ }), l.$set(d);
      },
      i(_) {
        $ || (b(l.$$.fragment, _), ($ = !0));
      },
      o(_) {
        w(l.$$.fragment, _), ($ = !1);
      },
      d(_) {
        _ && o(t), C(l), _ && o(s), _ && o(r), _ && o(i), _ && o(u);
      },
    }
  );
}
function dt(a) {
  let t;
  return {
    c() {
      t = H("compare_arrows");
    },
    l(l) {
      t = L(l, "compare_arrows");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function gt(a) {
  let t, l, e, s, r, i, u, n, $, _;
  return (
    (l = new q({
      props: {
        class: "material-icons ",
        $$slots: { default: [dt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("span")),
          (e = k("div")),
          R(l.$$.fragment),
          (s = E()),
          (r = k("h3")),
          (i = H("Source Comparisions")),
          (u = E()),
          (n = k("p")),
          ($ = H("Cleaning clinical trials data from multiple sources.")),
          this.h();
      },
      l(f) {
        t = D(f, "SPAN", { class: !0 });
        var d = V(t);
        e = D(d, "DIV", { style: !0 });
        var m = V(e);
        B(l.$$.fragment, m), d.forEach(o), (s = I(f)), (r = D(f, "H3", {}));
        var h = V(r);
        (i = L(h, "Source Comparisions")),
          h.forEach(o),
          (u = I(f)),
          (n = D(f, "P", {}));
        var T = V(n);
        ($ = L(T, "Cleaning clinical trials data from multiple sources.")),
          T.forEach(o),
          this.h();
      },
      h() {
        A(e, "display", "contents"),
          A(e, "--font-size", "4em"),
          M(t, "class", "medium-blue");
      },
      m(f, d) {
        c(f, t, d),
          S(t, e),
          P(l, e, null),
          c(f, s, d),
          c(f, r, d),
          S(r, i),
          c(f, u, d),
          c(f, n, d),
          S(n, $),
          (_ = !0);
      },
      p(f, d) {
        const m = {};
        d & 512 && (m.$$scope = { dirty: d, ctx: f }), l.$set(m);
      },
      i(f) {
        _ || (b(l.$$.fragment, f), (_ = !0));
      },
      o(f) {
        w(l.$$.fragment, f), (_ = !1);
      },
      d(f) {
        f && o(t), C(l), f && o(s), f && o(r), f && o(u), f && o(n);
      },
    }
  );
}
function vt(a) {
  let t;
  return {
    c() {
      t = H("done_all");
    },
    l(l) {
      t = L(l, "done_all");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function bt(a) {
  let t, l, e, s, r, i, u, n, $, _;
  return (
    (l = new q({
      props: {
        class: "material-icons ",
        $$slots: { default: [vt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("span")),
          (e = k("div")),
          R(l.$$.fragment),
          (s = E()),
          (r = k("h3")),
          (i = H("Data Correction")),
          (u = E()),
          (n = k("p")),
          ($ = H(
            "Programatic filtering, ML modeling, and hands-on Trial data."
          )),
          this.h();
      },
      l(f) {
        t = D(f, "SPAN", { class: !0 });
        var d = V(t);
        e = D(d, "DIV", { style: !0 });
        var m = V(e);
        B(l.$$.fragment, m), d.forEach(o), (s = I(f)), (r = D(f, "H3", {}));
        var h = V(r);
        (i = L(h, "Data Correction")),
          h.forEach(o),
          (u = I(f)),
          (n = D(f, "P", {}));
        var T = V(n);
        ($ = L(
          T,
          "Programatic filtering, ML modeling, and hands-on Trial data."
        )),
          T.forEach(o),
          this.h();
      },
      h() {
        A(e, "display", "contents"),
          A(e, "--font-size", "4em"),
          M(t, "class", "medium-blue");
      },
      m(f, d) {
        c(f, t, d),
          S(t, e),
          P(l, e, null),
          c(f, s, d),
          c(f, r, d),
          S(r, i),
          c(f, u, d),
          c(f, n, d),
          S(n, $),
          (_ = !0);
      },
      p(f, d) {
        const m = {};
        d & 512 && (m.$$scope = { dirty: d, ctx: f }), l.$set(m);
      },
      i(f) {
        _ || (b(l.$$.fragment, f), (_ = !0));
      },
      o(f) {
        w(l.$$.fragment, f), (_ = !1);
      },
      d(f) {
        f && o(t), C(l), f && o(s), f && o(r), f && o(u), f && o(n);
      },
    }
  );
}
function wt(a) {
  let t;
  return {
    c() {
      t = H("auto_mode");
    },
    l(l) {
      t = L(l, "auto_mode");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function ht(a) {
  let t, l, e, s, r, i, u, n, $, _;
  return (
    (l = new q({
      props: {
        class: "material-icons",
        $$slots: { default: [wt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("span")),
          (e = k("div")),
          R(l.$$.fragment),
          (s = E()),
          (r = k("h3")),
          (i = H("Data Synchronization")),
          (u = E()),
          (n = k("p")),
          ($ = H(
            "Daily, Weekly, Yearly data source updates and review of Trial data"
          )),
          this.h();
      },
      l(f) {
        t = D(f, "SPAN", { class: !0 });
        var d = V(t);
        e = D(d, "DIV", { style: !0 });
        var m = V(e);
        B(l.$$.fragment, m), d.forEach(o), (s = I(f)), (r = D(f, "H3", {}));
        var h = V(r);
        (i = L(h, "Data Synchronization")),
          h.forEach(o),
          (u = I(f)),
          (n = D(f, "P", {}));
        var T = V(n);
        ($ = L(
          T,
          "Daily, Weekly, Yearly data source updates and review of Trial data"
        )),
          T.forEach(o),
          this.h();
      },
      h() {
        A(e, "display", "contents"),
          A(e, "--font-size", "4em"),
          M(t, "class", "medium-blue");
      },
      m(f, d) {
        c(f, t, d),
          S(t, e),
          P(l, e, null),
          c(f, s, d),
          c(f, r, d),
          S(r, i),
          c(f, u, d),
          c(f, n, d),
          S(n, $),
          (_ = !0);
      },
      p(f, d) {
        const m = {};
        d & 512 && (m.$$scope = { dirty: d, ctx: f }), l.$set(m);
      },
      i(f) {
        _ || (b(l.$$.fragment, f), (_ = !0));
      },
      o(f) {
        w(l.$$.fragment, f), (_ = !1);
      },
      d(f) {
        f && o(t), C(l), f && o(s), f && o(r), f && o(u), f && o(n);
      },
    }
  );
}
function kt(a) {
  let t;
  return {
    c() {
      t = H("analytics");
    },
    l(l) {
      t = L(l, "analytics");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function Dt(a) {
  let t, l, e, s, r, i, u, n, $, _;
  return (
    (l = new q({
      props: {
        class: "material-icons",
        $$slots: { default: [kt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("span")),
          (e = k("div")),
          R(l.$$.fragment),
          (s = E()),
          (r = k("h3")),
          (i = H("Peer Reviewed")),
          (u = E()),
          (n = k("p")),
          ($ = H("Published research and interactive data vizualizations.")),
          this.h();
      },
      l(f) {
        t = D(f, "SPAN", { class: !0 });
        var d = V(t);
        e = D(d, "DIV", { style: !0 });
        var m = V(e);
        B(l.$$.fragment, m), d.forEach(o), (s = I(f)), (r = D(f, "H3", {}));
        var h = V(r);
        (i = L(h, "Peer Reviewed")),
          h.forEach(o),
          (u = I(f)),
          (n = D(f, "P", {}));
        var T = V(n);
        ($ = L(T, "Published research and interactive data vizualizations.")),
          T.forEach(o),
          this.h();
      },
      h() {
        A(e, "display", "contents"),
          A(e, "--font-size", "4em"),
          M(t, "class", "medium-blue");
      },
      m(f, d) {
        c(f, t, d),
          S(t, e),
          P(l, e, null),
          c(f, s, d),
          c(f, r, d),
          S(r, i),
          c(f, u, d),
          c(f, n, d),
          S(n, $),
          (_ = !0);
      },
      p(f, d) {
        const m = {};
        d & 512 && (m.$$scope = { dirty: d, ctx: f }), l.$set(m);
      },
      i(f) {
        _ || (b(l.$$.fragment, f), (_ = !0));
      },
      o(f) {
        w(l.$$.fragment, f), (_ = !1);
      },
      d(f) {
        f && o(t), C(l), f && o(s), f && o(r), f && o(u), f && o(n);
      },
    }
  );
}
function Et(a) {
  let t;
  return {
    c() {
      t = H("View Research Papers");
    },
    l(l) {
      t = L(l, "View Research Papers");
    },
    m(l, e) {
      c(l, t, e);
    },
    d(l) {
      l && o(t);
    },
  };
}
function It(a) {
  let t, l;
  return (
    (t = new ie({
      props: { $$slots: { default: [Et] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        R(t.$$.fragment);
      },
      l(e) {
        B(t.$$.fragment, e);
      },
      m(e, s) {
        P(t, e, s), (l = !0);
      },
      p(e, s) {
        const r = {};
        s & 512 && (r.$$scope = { dirty: s, ctx: e }), t.$set(r);
      },
      i(e) {
        l || (b(t.$$.fragment, e), (l = !0));
      },
      o(e) {
        w(t.$$.fragment, e), (l = !1);
      },
      d(e) {
        C(t, e);
      },
    }
  );
}
function Rt(a) {
  let t, l, e, s, r, i, u, n;
  return (
    (e = new x({
      props: {
        color: "secondary",
        href: "/research",
        variant: "outlined",
        class: " rou snded",
        $$slots: { default: [It] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        (t = k("br")),
          (l = E()),
          R(e.$$.fragment),
          (s = E()),
          (r = k("br")),
          (i = E()),
          (u = k("br"));
      },
      l($) {
        (t = D($, "BR", {})),
          (l = I($)),
          B(e.$$.fragment, $),
          (s = I($)),
          (r = D($, "BR", {})),
          (i = I($)),
          (u = D($, "BR", {}));
      },
      m($, _) {
        c($, t, _),
          c($, l, _),
          P(e, $, _),
          c($, s, _),
          c($, r, _),
          c($, i, _),
          c($, u, _),
          (n = !0);
      },
      p($, _) {
        const f = {};
        _ & 512 && (f.$$scope = { dirty: _, ctx: $ }), e.$set(f);
      },
      i($) {
        n || (b(e.$$.fragment, $), (n = !0));
      },
      o($) {
        w(e.$$.fragment, $), (n = !1);
      },
      d($) {
        $ && o(t),
          $ && o(l),
          C(e, $),
          $ && o(s),
          $ && o(r),
          $ && o(i),
          $ && o(u);
      },
    }
  );
}
function Bt(a) {
  let t, l, e, s, r, i, u, n, $, _, f, d;
  return (
    (t = new G({
      props: {
        span: 12,
        class: " center",
        $$slots: { default: [_t] },
        $$scope: { ctx: a },
      },
    })),
    (e = new G({
      props: {
        span: 4,
        class: "  center",
        $$slots: { default: [gt] },
        $$scope: { ctx: a },
      },
    })),
    (r = new G({
      props: {
        span: 4,
        class: "cell center",
        $$slots: { default: [bt] },
        $$scope: { ctx: a },
      },
    })),
    (u = new G({
      props: {
        span: 4,
        class: "cell center ",
        $$slots: { default: [ht] },
        $$scope: { ctx: a },
      },
    })),
    ($ = new G({
      props: {
        span: 4,
        class: "cell center primary hidden",
        $$slots: { default: [Dt] },
        $$scope: { ctx: a },
      },
    })),
    (f = new G({
      props: { span: 12, $$slots: { default: [Rt] }, $$scope: { ctx: a } },
    })),
    {
      c() {
        R(t.$$.fragment),
          (l = E()),
          R(e.$$.fragment),
          (s = E()),
          R(r.$$.fragment),
          (i = E()),
          R(u.$$.fragment),
          (n = E()),
          R($.$$.fragment),
          (_ = E()),
          R(f.$$.fragment);
      },
      l(m) {
        B(t.$$.fragment, m),
          (l = I(m)),
          B(e.$$.fragment, m),
          (s = I(m)),
          B(r.$$.fragment, m),
          (i = I(m)),
          B(u.$$.fragment, m),
          (n = I(m)),
          B($.$$.fragment, m),
          (_ = I(m)),
          B(f.$$.fragment, m);
      },
      m(m, h) {
        P(t, m, h),
          c(m, l, h),
          P(e, m, h),
          c(m, s, h),
          P(r, m, h),
          c(m, i, h),
          P(u, m, h),
          c(m, n, h),
          P($, m, h),
          c(m, _, h),
          P(f, m, h),
          (d = !0);
      },
      p(m, h) {
        const T = {};
        h & 512 && (T.$$scope = { dirty: h, ctx: m }), t.$set(T);
        const y = {};
        h & 512 && (y.$$scope = { dirty: h, ctx: m }), e.$set(y);
        const v = {};
        h & 512 && (v.$$scope = { dirty: h, ctx: m }), r.$set(v);
        const g = {};
        h & 512 && (g.$$scope = { dirty: h, ctx: m }), u.$set(g);
        const N = {};
        h & 512 && (N.$$scope = { dirty: h, ctx: m }), $.$set(N);
        const p = {};
        h & 512 && (p.$$scope = { dirty: h, ctx: m }), f.$set(p);
      },
      i(m) {
        d ||
          (b(t.$$.fragment, m),
          b(e.$$.fragment, m),
          b(r.$$.fragment, m),
          b(u.$$.fragment, m),
          b($.$$.fragment, m),
          b(f.$$.fragment, m),
          (d = !0));
      },
      o(m) {
        w(t.$$.fragment, m),
          w(e.$$.fragment, m),
          w(r.$$.fragment, m),
          w(u.$$.fragment, m),
          w($.$$.fragment, m),
          w(f.$$.fragment, m),
          (d = !1);
      },
      d(m) {
        C(t, m),
          m && o(l),
          C(e, m),
          m && o(s),
          C(r, m),
          m && o(i),
          C(u, m),
          m && o(n),
          C($, m),
          m && o(_),
          C(f, m);
      },
    }
  );
}
function Pt(a) {
  let t, l, e, s, r, i, u, n, $, _, f, d, m, h, T, y, v, g, N;
  return (
    (t = new J({
      props: {
        $$slots: {
          default: [
            Oe,
            ({ visible: p }) => ({ 8: p }),
            ({ visible: p }) => (p ? 256 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    (e = new J({
      props: {
        $$slots: {
          default: [
            Ye,
            ({ visible: p }) => ({ 8: p }),
            ({ visible: p }) => (p ? 256 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    (r = new J({
      props: {
        $$slots: {
          default: [
            Fe,
            ({ visible: p }) => ({ 8: p }),
            ({ visible: p }) => (p ? 256 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    (u = new J({
      props: {
        $$slots: {
          default: [
            Ge,
            ({ visible: p }) => ({ 8: p }),
            ({ visible: p }) => (p ? 256 : 0),
          ],
        },
        $$scope: { ctx: a },
      },
    })),
    (_ = new re({
      props: { $$slots: { default: [Ue] }, $$scope: { ctx: a } },
    })),
    (d = new re({
      props: { $$slots: { default: [it] }, $$scope: { ctx: a } },
    })),
    (y = new re({
      props: {
        class: "center",
        style: "margin: 5em 0em; overflow: hidden;",
        $$slots: { default: [mt] },
        $$scope: { ctx: a },
      },
    })),
    (g = new re({
      props: {
        class: "center",
        $$slots: { default: [Bt] },
        $$scope: { ctx: a },
      },
    })),
    {
      c() {
        R(t.$$.fragment),
          (l = E()),
          R(e.$$.fragment),
          (s = E()),
          R(r.$$.fragment),
          (i = E()),
          R(u.$$.fragment),
          (n = E()),
          ($ = k("div")),
          R(_.$$.fragment),
          (f = E()),
          R(d.$$.fragment),
          (m = E()),
          (h = k("div")),
          (T = E()),
          R(y.$$.fragment),
          (v = E()),
          R(g.$$.fragment),
          this.h();
      },
      l(p) {
        B(t.$$.fragment, p),
          (l = I(p)),
          B(e.$$.fragment, p),
          (s = I(p)),
          B(r.$$.fragment, p),
          (i = I(p)),
          B(u.$$.fragment, p),
          (n = I(p)),
          ($ = D(p, "DIV", { class: !0 }));
        var z = V($);
        B(_.$$.fragment, z),
          (f = I(z)),
          B(d.$$.fragment, z),
          (m = I(z)),
          (h = D(z, "DIV", { id: !0, style: !0 })),
          V(h).forEach(o),
          z.forEach(o),
          (T = I(p)),
          B(y.$$.fragment, p),
          (v = I(p)),
          B(g.$$.fragment, p),
          this.h();
      },
      h() {
        M(h, "id", "scroll-down"),
          A(h, "display", "block"),
          A(h, "height", "150px"),
          A(h, "width", "100%"),
          M($, "class", "container");
      },
      m(p, z) {
        P(t, p, z),
          c(p, l, z),
          P(e, p, z),
          c(p, s, z),
          P(r, p, z),
          c(p, i, z),
          P(u, p, z),
          c(p, n, z),
          c(p, $, z),
          P(_, $, null),
          S($, f),
          P(d, $, null),
          S($, m),
          S($, h),
          c(p, T, z),
          P(y, p, z),
          c(p, v, z),
          P(g, p, z),
          (N = !0);
      },
      p(p, [z]) {
        const j = {};
        z & 769 && (j.$$scope = { dirty: z, ctx: p }), t.$set(j);
        const F = {};
        z & 769 && (F.$$scope = { dirty: z, ctx: p }), e.$set(F);
        const O = {};
        z & 768 && (O.$$scope = { dirty: z, ctx: p }), r.$set(O);
        const ee = {};
        z & 768 && (ee.$$scope = { dirty: z, ctx: p }), u.$set(ee);
        const X = {};
        z & 513 && (X.$$scope = { dirty: z, ctx: p }), _.$set(X);
        const te = {};
        z & 512 && (te.$$scope = { dirty: z, ctx: p }), d.$set(te);
        const le = {};
        z & 512 && (le.$$scope = { dirty: z, ctx: p }), y.$set(le);
        const $e = {};
        z & 512 && ($e.$$scope = { dirty: z, ctx: p }), g.$set($e);
      },
      i(p) {
        N ||
          (b(t.$$.fragment, p),
          b(e.$$.fragment, p),
          b(r.$$.fragment, p),
          b(u.$$.fragment, p),
          b(_.$$.fragment, p),
          b(d.$$.fragment, p),
          b(y.$$.fragment, p),
          b(g.$$.fragment, p),
          (N = !0));
      },
      o(p) {
        w(t.$$.fragment, p),
          w(e.$$.fragment, p),
          w(r.$$.fragment, p),
          w(u.$$.fragment, p),
          w(_.$$.fragment, p),
          w(d.$$.fragment, p),
          w(y.$$.fragment, p),
          w(g.$$.fragment, p),
          (N = !1);
      },
      d(p) {
        C(t, p),
          p && o(l),
          C(e, p),
          p && o(s),
          C(r, p),
          p && o(i),
          C(u, p),
          p && o(n),
          p && o($),
          C(_),
          C(d),
          p && o(T),
          C(y, p),
          p && o(v),
          C(g, p);
      },
    }
  );
}
let Ct = !1;
function zt(a, t, l) {
  let { open: e = !1 } = t;
  Pe();
  function s($) {
    (e = $), l(0, e);
  }
  const r = () => l(0, (e = !e));
  function i($) {
    (e = $), l(0, e);
  }
  const u = () => l(0, (e = !e)),
    n = () => l(0, (e = !e));
  return (
    (a.$$set = ($) => {
      "open" in $ && l(0, (e = $.open));
    }),
    [e, s, r, i, u, n]
  );
}
class At extends ne {
  constructor(t) {
    super(), fe(this, t, zt, Pt, ae, { open: 0 });
  }
}
export { At as default };
