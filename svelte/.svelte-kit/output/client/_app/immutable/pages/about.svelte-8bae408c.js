import {
  S as q,
  i as y,
  s as L,
  T as R,
  a0 as S,
  w as i,
  k as b,
  x as m,
  m as w,
  y as c,
  g,
  a1 as G,
  q as u,
  o as _,
  B as d,
  d as f,
  e as v,
  t as H,
  c as C,
  a as E,
  h as N,
  b as P,
  N as D,
  E as T,
} from "../chunks/index-ec06594a.js";
import { D as V, T as j } from "../chunks/drawer-b3e5472e.js";
import {
  L as x,
  C as I,
} from "../chunks/pill-logo.svelte_svelte_type_style_lang-a71f6f3e.js";
import "../chunks/index-db7e7858.js";
function z($) {
  let e, n, s;
  return {
    c() {
      (e = v("div")), (n = v("h1")), (s = H("About CRIB")), this.h();
    },
    l(o) {
      e = C(o, "DIV", {});
      var t = E(e);
      n = C(t, "H1", { class: !0 });
      var r = E(n);
      (s = N(r, "About CRIB")), r.forEach(f), t.forEach(f), this.h();
    },
    h() {
      P(n, "class", "thin uppercase");
    },
    m(o, t) {
      g(o, e, t), D(e, n), D(n, s);
    },
    p: T,
    d(o) {
      o && f(e);
    },
  };
}
function F($) {
  let e;
  return {
    c() {
      e = v("p");
    },
    l(n) {
      (e = C(n, "P", {})), E(e).forEach(f);
    },
    m(n, s) {
      g(n, e, s);
    },
    p: T,
    d(n) {
      n && f(e);
    },
  };
}
function J($) {
  let e, n, s, o;
  return (
    (e = new I({
      props: {
        span: 12,
        class: "cell left",
        $$slots: { default: [z] },
        $$scope: { ctx: $ },
      },
    })),
    (s = new I({
      props: {
        span: 12,
        class: "cell  center",
        $$slots: { default: [F] },
        $$scope: { ctx: $ },
      },
    })),
    {
      c() {
        i(e.$$.fragment), (n = b()), i(s.$$.fragment);
      },
      l(t) {
        m(e.$$.fragment, t), (n = w(t)), m(s.$$.fragment, t);
      },
      m(t, r) {
        c(e, t, r), g(t, n, r), c(s, t, r), (o = !0);
      },
      p(t, r) {
        const p = {};
        r & 8 && (p.$$scope = { dirty: r, ctx: t }), e.$set(p);
        const h = {};
        r & 8 && (h.$$scope = { dirty: r, ctx: t }), s.$set(h);
      },
      i(t) {
        o || (u(e.$$.fragment, t), u(s.$$.fragment, t), (o = !0));
      },
      o(t) {
        _(e.$$.fragment, t), _(s.$$.fragment, t), (o = !1);
      },
      d(t) {
        d(e, t), t && f(n), d(s, t);
      },
    }
  );
}
function K($) {
  let e, n, s, o, t, r, p;
  function h(a) {
    $[1](a);
  }
  let k = {};
  return (
    $[0] !== void 0 && (k.open = $[0]),
    (e = new V({ props: k })),
    R.push(() => S(e, "open", h)),
    (o = new j({})),
    o.$on("message", $[2]),
    (r = new x({ props: { $$slots: { default: [J] }, $$scope: { ctx: $ } } })),
    {
      c() {
        i(e.$$.fragment),
          (s = b()),
          i(o.$$.fragment),
          (t = b()),
          i(r.$$.fragment);
      },
      l(a) {
        m(e.$$.fragment, a),
          (s = w(a)),
          m(o.$$.fragment, a),
          (t = w(a)),
          m(r.$$.fragment, a);
      },
      m(a, l) {
        c(e, a, l), g(a, s, l), c(o, a, l), g(a, t, l), c(r, a, l), (p = !0);
      },
      p(a, [l]) {
        const A = {};
        !n && l & 1 && ((n = !0), (A.open = a[0]), G(() => (n = !1))),
          e.$set(A);
        const B = {};
        l & 8 && (B.$$scope = { dirty: l, ctx: a }), r.$set(B);
      },
      i(a) {
        p ||
          (u(e.$$.fragment, a),
          u(o.$$.fragment, a),
          u(r.$$.fragment, a),
          (p = !0));
      },
      o(a) {
        _(e.$$.fragment, a), _(o.$$.fragment, a), _(r.$$.fragment, a), (p = !1);
      },
      d(a) {
        d(e, a), a && f(s), d(o, a), a && f(t), d(r, a);
      },
    }
  );
}
function M($, e, n) {
  let s;
  function o(r) {
    (s = r), n(0, s);
  }
  return [s, o, () => n(0, (s = !s))];
}
class X extends q {
  constructor(e) {
    super(), y(this, e, M, K, L, {});
  }
}
export { X as default };
