import {
  S as y,
  i as L,
  s as S,
  T as B,
  a0 as G,
  w as c,
  k as w,
  x as i,
  m as v,
  y as m,
  g,
  a1 as H,
  q as u,
  o as _,
  B as d,
  d as f,
  e as b,
  t as I,
  c as E,
  a as k,
  h as N,
  b as V,
  N as R,
  E as q,
} from "../chunks/index-ec06594a.js";
import { D as j, T as x } from "../chunks/drawer-b3e5472e.js";
import {
  L as z,
  C as T,
} from "../chunks/pill-logo.svelte_svelte_type_style_lang-a71f6f3e.js";
import "../chunks/index-db7e7858.js";
function A(o) {
  let e, n, s;
  return {
    c() {
      (e = b("div")), (n = b("h1")), (s = I("Research Papers")), this.h();
    },
    l($) {
      e = E($, "DIV", {});
      var t = k(e);
      n = E(t, "H1", { class: !0 });
      var r = k(n);
      (s = N(r, "Research Papers")), r.forEach(f), t.forEach(f), this.h();
    },
    h() {
      V(n, "class", "thin uppercase");
    },
    m($, t) {
      g($, e, t), R(e, n), R(n, s);
    },
    p: q,
    d($) {
      $ && f(e);
    },
  };
}
function F(o) {
  let e;
  return {
    c() {
      e = b("p");
    },
    l(n) {
      (e = E(n, "P", {})), k(e).forEach(f);
    },
    m(n, s) {
      g(n, e, s);
    },
    p: q,
    d(n) {
      n && f(e);
    },
  };
}
function J(o) {
  let e, n, s, $;
  return (
    (e = new T({
      props: {
        span: 12,
        class: "cell left",
        $$slots: { default: [A] },
        $$scope: { ctx: o },
      },
    })),
    (s = new T({
      props: {
        span: 12,
        class: "cell  center",
        $$slots: { default: [F] },
        $$scope: { ctx: o },
      },
    })),
    {
      c() {
        c(e.$$.fragment), (n = w()), c(s.$$.fragment);
      },
      l(t) {
        i(e.$$.fragment, t), (n = v(t)), i(s.$$.fragment, t);
      },
      m(t, r) {
        m(e, t, r), g(t, n, r), m(s, t, r), ($ = !0);
      },
      p(t, r) {
        const p = {};
        r & 8 && (p.$$scope = { dirty: r, ctx: t }), e.$set(p);
        const h = {};
        r & 8 && (h.$$scope = { dirty: r, ctx: t }), s.$set(h);
      },
      i(t) {
        $ || (u(e.$$.fragment, t), u(s.$$.fragment, t), ($ = !0));
      },
      o(t) {
        _(e.$$.fragment, t), _(s.$$.fragment, t), ($ = !1);
      },
      d(t) {
        d(e, t), t && f(n), d(s, t);
      },
    }
  );
}
function K(o) {
  let e, n, s, $, t, r, p;
  function h(a) {
    o[1](a);
  }
  let C = {};
  return (
    o[0] !== void 0 && (C.open = o[0]),
    (e = new j({ props: C })),
    B.push(() => G(e, "open", h)),
    ($ = new x({})),
    $.$on("message", o[2]),
    (r = new z({ props: { $$slots: { default: [J] }, $$scope: { ctx: o } } })),
    {
      c() {
        c(e.$$.fragment),
          (s = w()),
          c($.$$.fragment),
          (t = w()),
          c(r.$$.fragment);
      },
      l(a) {
        i(e.$$.fragment, a),
          (s = v(a)),
          i($.$$.fragment, a),
          (t = v(a)),
          i(r.$$.fragment, a);
      },
      m(a, l) {
        m(e, a, l), g(a, s, l), m($, a, l), g(a, t, l), m(r, a, l), (p = !0);
      },
      p(a, [l]) {
        const D = {};
        !n && l & 1 && ((n = !0), (D.open = a[0]), H(() => (n = !1))),
          e.$set(D);
        const P = {};
        l & 8 && (P.$$scope = { dirty: l, ctx: a }), r.$set(P);
      },
      i(a) {
        p ||
          (u(e.$$.fragment, a),
          u($.$$.fragment, a),
          u(r.$$.fragment, a),
          (p = !0));
      },
      o(a) {
        _(e.$$.fragment, a), _($.$$.fragment, a), _(r.$$.fragment, a), (p = !1);
      },
      d(a) {
        d(e, a), a && f(s), d($, a), a && f(t), d(r, a);
      },
    }
  );
}
function M(o, e, n) {
  let s;
  function $(r) {
    (s = r), n(0, s);
  }
  return [s, $, () => n(0, (s = !s))];
}
class X extends y {
  constructor(e) {
    super(), L(this, e, M, K, S, {});
  }
}
export { X as default };
