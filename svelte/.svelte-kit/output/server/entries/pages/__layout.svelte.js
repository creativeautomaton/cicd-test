import { c as create_ssr_component, v as validate_component, e as each, a as escape } from "../../chunks/index-37c8fe4c.js";
import "@material/icon-button";
import "@material/ripple";
import "@material/dom";
import { L as LayoutGrid, C as Cell, c as classAdderBuilder, D as Div, S as Span, a as List, I as Item, T as Text, P as PrimaryText, b as SecondaryText } from "../../chunks/pill-logo.svelte_svelte_type_style_lang-01533bd5.js";
import { P as Pill_logo } from "../../chunks/ActionIcons-66c0a0d6.js";
import "@material/list";
import "@material/banner";
import "@material/textfield";
import "@material/floating-label";
import "@material/line-ripple";
import "@material/notched-outline";
var logoHero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".container.svelte-1ar9nkk{padding:2em 0em 0em 0em}.lead.svelte-1ar9nkk{max-width:650px;font-size:1.5em;font-weight:300;line-height:1.2;display:block;padding:1em 0em}")();
var colophon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".colophon.svelte-vx54ka{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-vx54ka{width:auto;display:block;padding:5px 1em}img.svelte-vx54ka{width:250px;display:block}")();
const css$2 = {
  code: ".colophon.svelte-vx54ka{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-vx54ka{width:auto;display:block;padding:5px 1em}img.svelte-vx54ka{width:250px;display:block}",
  map: null
};
const Colophon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"colophon svelte-vx54ka"}">${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, { span: 5 }, {}, {
        default: () => {
          return `<a href="${"https://liu.edu"}" target="${"_blank"}" class="${"logo svelte-vx54ka"}"><img src="${"https://secureservercdn.net/198.71.233.194/509.251.myftpupload.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-07-at-3.54.02-PM.png"}" class="${"svelte-vx54ka"}"></a>`;
        }
      })}
    ${validate_component(Cell, "Cell").$$render($$result, { span: 2 }, {}, {})}
    ${validate_component(Cell, "Cell").$$render($$result, { span: 5 }, {}, {
        default: () => {
          return `<small>Copyright \xA92022 - All rights reserved. </small>`;
        }
      })}
    `;
    }
  })}
</div>`;
});
classAdderBuilder({
  class: "mdc-text-field-helper-line",
  component: Div
});
classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  component: Span
});
classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  component: Span
});
var footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".footer.svelte-d6boib{min-height:300px;background-color:var(--mdc-theme-secondary, #fff);color:#fff;overflow:hidden}")();
const css$1 = {
  code: ".footer.svelte-d6boib{min-height:300px;background-color:var(--mdc-theme-secondary, #fff);color:#fff;overflow:hidden}",
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
  return `<div class="${"footer  svelte-d6boib"}"><div class="${"container"}">${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, { span: 3, class: "center" }, {}, {
        default: () => {
          return `${validate_component(Cell, "Cell").$$render($$result, { span: 6, class: "center" }, {}, {
            default: () => {
              return `<h1>CRIB</h1>`;
            }
          })}
        ${validate_component(Cell, "Cell").$$render($$result, { span: 6, class: "center" }, {}, {
            default: () => {
              return `<div style="display: contents; --width:${"6em"};">${validate_component(Pill_logo, "PillLogo").$$render($$result, {}, {}, {})}</div>`;
            }
          })}
        `;
        }
      })}
      ${validate_component(Cell, "Cell").$$render($$result, { span: 3, class: "center" }, {}, {
        default: () => {
          return `<h3 class="${"thin uppercase"}">Quick Links</h3>
        <div>${validate_component(List, "List").$$render($$result, { oneLine: true }, {}, {
            default: () => {
              return `${each(nav_menu, (todo) => {
                return `${todo.title === "Home" ? `<a href="${"/"}">${validate_component(Item, "Item").$$render($$result, { class: "center light" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(todo.title)}`;
                          }
                        })}
                    `;
                      }
                    })}
                  `;
                  }
                })}
                </a>` : `<a href="${"/" + escape(todo.slug, true)}">${validate_component(Item, "Item").$$render($$result, { class: "center light" }, {}, {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                      default: () => {
                        return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                          default: () => {
                            return `${escape(todo.title)}`;
                          }
                        })}
                    `;
                      }
                    })}
                  `;
                  }
                })}
                </a>`}`;
              })}`;
            }
          })}</div>`;
        }
      })}

      ${validate_component(Cell, "Cell").$$render($$result, { span: 3, class: "center" }, {}, {
        default: () => {
          return `<h3 class="${"thin uppercase"}">Latest Research</h3>
        <div>${validate_component(List, "List").$$render($$result, { oneLine: true }, {}, {
            default: () => {
              return `<a href="${"#"}">${validate_component(Item, "Item").$$render($$result, { class: "center" }, {}, {
                default: () => {
                  return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `FruitPhone Pro`;
                        }
                      })}
                  ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `A beautiful phone with good specs.`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</a>
            <a href="${"#"}">${validate_component(Item, "Item").$$render($$result, { class: "center" }, {}, {
                default: () => {
                  return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `Robot Phone Max`;
                        }
                      })}
                  ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {
                        title: "Pretty much the same phone, but a different brand name and OS. It spies on you more, too."
                      }, {}, {
                        default: () => {
                          return `Pretty much the same phone, but a different brand name and
                    OS. It spies on you more, too.`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</a>
            <a href="${"#"}">${validate_component(Item, "Item").$$render($$result, { class: "center" }, {}, {
                default: () => {
                  return `${validate_component(Text, "Text").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(PrimaryText, "PrimaryText").$$render($$result, {}, {}, {
                        default: () => {
                          return `Penguin Phone`;
                        }
                      })}
                  ${validate_component(SecondaryText, "SecondaryText").$$render($$result, {
                        title: "A very weak phone that you can install literally anything on. Compile your own kernel, you nerd. :D"
                      }, {}, {
                        default: () => {
                          return `A very weak phone that you can install literally anything
                    on. Compile your own kernel, you nerd. :D`;
                        }
                      })}`;
                    }
                  })}`;
                }
              })}</a>`;
            }
          })}</div>`;
        }
      })}

      ${validate_component(Cell, "Cell").$$render($$result, { span: 3, class: "center hidden" }, {}, {
        default: () => {
          return `<h3 class="${"thin uppercase"}">Newsletter</h3>`;
        }
      })}`;
    }
  })}</div>
  ${validate_component(Colophon, "Colophon").$$render($$result, {}, {}, {})}
</div>`;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}")();
const css = {
  code: "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
