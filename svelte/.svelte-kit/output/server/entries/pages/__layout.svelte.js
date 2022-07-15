import { c as create_ssr_component, v as validate_component, e as each, a as escape, b as createEventDispatcher } from "../../chunks/index-5d194541.js";
import "@material/drawer";
import "@material/dom";
import { c as classAdderBuilder, D as Div, H as H5, a as H6, L as List, I as Item, T as Text } from "../../chunks/drawer.svelte_svelte_type_style_lang-d9b42fa3.js";
import "@material/ripple";
import "@material/list";
import "@material/icon-button";
import "@material/top-app-bar";
import "@material/checkbox";
import "@material/form-field";
import { L as LayoutGrid, C as Cell } from "../../chunks/index-f419de0a.js";
import { P as Pill_logo } from "../../chunks/blue-swoop.svelte_svelte_type_style_lang-acacb985.js";
import "@material/banner";
var logoHero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-1ar9nkk{padding:2em 0em 0em 0em}.lead.svelte-1ar9nkk{max-width:650px;font-size:1.5em;font-weight:300;line-height:1.2;display:block;padding:1em 0em}")();
var colophon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".colophon.svelte-eqpud5.svelte-eqpud5{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-eqpud5.svelte-eqpud5{width:auto;display:block;padding:5px 1em}.logo.svelte-eqpud5 img.svelte-eqpud5{width:250px;display:block}")();
const css$2 = {
  code: ".colophon.svelte-eqpud5.svelte-eqpud5{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-eqpud5.svelte-eqpud5{width:auto;display:block;padding:5px 1em}.logo.svelte-eqpud5 img.svelte-eqpud5{width:250px;display:block}",
  map: null
};
const Colophon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"colophon svelte-eqpud5"}">${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, { span: 5 }, {}, {
        default: () => {
          return `<a href="${"https://liu.edu"}" target="${"_blank"}" class="${"logo svelte-eqpud5"}"><img src="${"https://secureservercdn.net/198.71.233.194/509.251.myftpupload.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-07-at-3.54.02-PM.png"}" class="${"svelte-eqpud5"}"></a>`;
        }
      })}
    ${validate_component(Cell, "Cell").$$render($$result, { span: 2 }, {}, {})}
    ${validate_component(Cell, "Cell").$$render($$result, { span: 5 }, {}, {
        default: () => {
          return `<small>Copyright \xA92022 Long Island University \xB7 All rights reserved
      </small>`;
        }
      })}
    `;
    }
  })}
</div>`;
});
classAdderBuilder({
  class: "smui-paper__content",
  component: Div
});
classAdderBuilder({
  class: "smui-paper__title",
  component: H5
});
classAdderBuilder({
  class: "smui-paper__subtitle",
  component: H6
});
var footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".footer.svelte-n2qh7s{min-height:300px;background-color:var(--mdc-theme-secondary, #fff);color:#fff}")();
const css$1 = {
  code: ".footer.svelte-n2qh7s{min-height:300px;background-color:var(--mdc-theme-secondary, #fff);color:#fff}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nav_menu = [
    { slug: "home", title: "Home" },
    { slug: "about", title: "About" },
    { slug: "research", title: "Research" },
    { slug: "contact", title: "Contact" }
  ];
  let { active = "Home" } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  return `

<div class="${"footer  svelte-n2qh7s"}">${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `
    ${validate_component(Cell, "Cell").$$render($$result, { span: 12 }, {}, {
        default: () => {
          return `${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Cell, "Cell").$$render($$result, { span: 2, class: "center" }, {}, {
                default: () => {
                  return `<div style="display: contents; --width:${"4em"};">${validate_component(Pill_logo, "PillLogo").$$render($$result, {}, {}, {})}</div>
          <small>CRIB \xA9 2022</small>`;
                }
              })}
        ${validate_component(Cell, "Cell").$$render($$result, { span: 3 }, {}, {
                default: () => {
                  return `<h3>Menu</h3>
          ${validate_component(List, "List").$$render($$result, {}, {}, {
                    default: () => {
                      return `${each(nav_menu, (todo) => {
                        return `${todo.title === "Home" ? `${validate_component(Item, "Item").$$render($$result, { href: "/" }, {}, {
                          default: () => {
                            return `<a href="${"/"}" class="${"light"}">${validate_component(Text, "Text").$$render($$result, {}, {}, {
                              default: () => {
                                return `${escape(todo.title)}`;
                              }
                            })}</a>
                `;
                          }
                        })}` : `${validate_component(Item, "Item").$$render($$result, {}, {}, {
                          default: () => {
                            return `<a href="${"/" + escape(todo.slug, true)}" class="${"light"}">${validate_component(Text, "Text").$$render($$result, {}, {}, {
                              default: () => {
                                return `${escape(todo.title)}`;
                              }
                            })}</a>
                `;
                          }
                        })}`}`;
                      })}`;
                    }
                  })}`;
                }
              })}
        ${validate_component(Cell, "Cell").$$render($$result, { span: 3 }, {}, {
                default: () => {
                  return `<h3>About</h3>`;
                }
              })}
        ${validate_component(Cell, "Cell").$$render($$result, { span: 2 }, {}, {
                default: () => {
                  return `<h3>Research</h3>`;
                }
              })}
        ${validate_component(Cell, "Cell").$$render($$result, { span: 2 }, {}, {
                default: () => {
                  return `<h3>Contact</h3>`;
                }
              })}`;
            }
          })}`;
        }
      })}
    `;
    }
  })}

  ${validate_component(Colophon, "Colophon").$$render($$result, {}, {}, {})}
</div>`;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}")();
const css = {
  code: "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css);
  return `


${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
