import { c as create_ssr_component, k as escape, q as createEventDispatcher, v as validate_component } from "../../chunks/index-4b7b92f5.js";
import { D as Drawer_1, T as Topbar, B as Button_1, I as IconButton, L as Label } from "../../chunks/drawer-6761d044.js";
import "@material/list";
import "@material/dom";
import "@material/ripple";
import { L as LayoutGrid, C as Cell } from "../../chunks/pill-logo.svelte_svelte_type_style_lang-e6f75325.js";
import { P as Pill_logo, C as Card } from "../../chunks/ActionIcons-5afdc96c.js";
import "@material/top-app-bar";
import "@material/icon-button";
import "@material/checkbox";
import "@material/form-field";
import "@material/drawer";
const css$2 = {
  code: `.svg-holder.svelte-1kz5pl8{position:absolute;width:var(--width, "3em")}.blue-swoop.svelte-1kz5pl8{z-index:0;transform:skewY(-6deg);transform-origin:top left;background-color:#4e5e69;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23518CB5'/%3E%3Cstop offset='1' stop-color='%234E5E69'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%2350758f'/%3E%3Cstop offset='1' stop-color='%234E5E69'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");background-attachment:fixed;background-size:cover;background-attachment:fixed;background-size:cover;height:80vh !important;min-height:600px;max-height:600px;display:block;position:absolute;width:100vw;padding:0;margin:0em 0;z-index:0}@keyframes svelte-1kz5pl8-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`,
  map: null
};
const Blue_swoop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="${"svg-holder svelte-1kz5pl8"}"><span class="${"blue-swoop svelte-1kz5pl8"}"></span>
</div>`;
});
const Scroll_actions = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  let visible;
  function scrollCheck(y2) {
    visible = y2 < 50 ? false : true;
  }
  {
    scrollCheck(y);
  }
  return `
${slots.default ? slots.default({ visible }) : ``}`;
});
var backgroundImages_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".bg-holder.svelte-p28e45{position:relative;top:0;left:0}.background-image.svelte-p28e45{position:absolute;width:100vw;height:100%;min-height:700px;margin:0;padding:0;left:-20%;z-index:-1;top:-3em;padding:3em 0em;animation:svelte-p28e45-scale 30s linear infinite}@keyframes svelte-p28e45-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-p28e45-scale{0%{transform:skew(0deg, 0deg) scale(1.25, 1.25)}50%{transform:skew(8deg, 6deg) scale(1.15, 1.15)}100%{transform:skew(0deg, 0deg) scale(1.25, 1.25)}}")();
const css$1 = {
  code: ".bg-holder.svelte-p28e45{position:relative;top:0;left:0}.background-image.svelte-p28e45{position:absolute;width:100vw;height:100%;min-height:700px;margin:0;padding:0;left:-20%;z-index:-1;top:-3em;padding:3em 0em;animation:svelte-p28e45-scale 30s linear infinite}@keyframes svelte-p28e45-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes svelte-p28e45-scale{0%{transform:skew(0deg, 0deg) scale(1.25, 1.25)}50%{transform:skew(8deg, 6deg) scale(1.15, 1.15)}100%{transform:skew(0deg, 0deg) scale(1.25, 1.25)}}",
  map: null
};
const Background_images = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { variant } = $$props;
  let { animation } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.animation === void 0 && $$bindings.animation && animation !== void 0)
    $$bindings.animation(animation);
  $$result.css.add(css$1);
  return `<div class="${"bg-holder svelte-p28e45"}"><span class="${"background-image svelte-p28e45"}" style="${"background: url(" + escape(src, true) + "); background-position: 50% -21px; background-attachment: " + escape(variant, true) + "; background-size: cover;"}"></span>
</div>`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@media(max-width: 599px){.pill-logo-container.svelte-13ld8k3{max-width:100px}}@media(min-width: 600px) and (max-width: 839px){.pill-logo-container.svelte-13ld8k3{max-width:200px}}@media(min-width: 839px){.pill-logo-container.svelte-13ld8k3{max-width:400px}}")();
const css = {
  code: "@media(max-width: 599px){.pill-logo-container.svelte-13ld8k3{max-width:100px}}@media(min-width: 600px) and (max-width: 839px){.pill-logo-container.svelte-13ld8k3{max-width:200px}}@media(min-width: 839px){.pill-logo-container.svelte-13ld8k3{max-width:400px}}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Scroll_actions, "ScrollActions").$$render($$result, {}, {}, {
      default: ({ visible }) => {
        return `${visible ? `${validate_component(Drawer_1, "NavDrawer").$$render($$result, { open }, {
          open: ($$value) => {
            open = $$value;
            $$settled = false;
          }
        }, {})}
    ${validate_component(Topbar, "Topbar").$$render($$result, {}, {}, {})}` : ``}`;
      }
    })}

${validate_component(Scroll_actions, "ScrollActions").$$render($$result, {}, {}, {
      default: ({ visible }) => {
        return `${!visible ? `${validate_component(Drawer_1, "NavDrawer").$$render($$result, { open }, {
          open: ($$value) => {
            open = $$value;
            $$settled = false;
          }
        }, {})}` : ``}`;
      }
    })}



${validate_component(Scroll_actions, "ScrollActions").$$render($$result, {}, {}, {
      default: ({ visible }) => {
        return `
  ${!visible ? `<div>${validate_component(Blue_swoop, "BlueSwoop").$$render($$result, {}, {}, {})}</div>` : ``}`;
      }
    })}
${validate_component(Scroll_actions, "ScrollActions").$$render($$result, {}, {}, {
      default: ({ visible }) => {
        return `${visible ? `<div style="${"display: block; height: 200px; width: 100%;"}"></div>` : ``}`;
      }
    })}
<div class="${"container"}">${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Scroll_actions, "ScrollActions").$$render($$result, {}, {}, {
          default: ({ visible }) => {
            return `${!visible ? `${validate_component(Cell, "Cell").$$render($$result, { span: 12, class: "right" }, {}, {
              default: () => {
                return `${validate_component(Button_1, "Button").$$render($$result, { class: "light" }, {}, {
                  default: () => {
                    return `Menu
            ${`${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                      default: () => {
                        return `menu`;
                      }
                    })}`}
            ${``}`;
                  }
                })}
          <div class="${"mobile"}">${validate_component(Button_1, "Button").$$render($$result, { class: "light" }, {}, {
                  default: () => {
                    return `<div style="display: contents; --width:${"3em"};">${validate_component(Pill_logo, "PillLogo").$$render($$result, {}, {}, {})}</div>`;
                  }
                })}</div>
          ${validate_component(IconButton, "IconButton").$$render($$result, {
                  class: "material-icons light",
                  "aria-label": "Download"
                }, {}, {
                  default: () => {
                    return `account_circle`;
                  }
                })}`;
              }
            })}` : ``}`;
          }
        })}`;
      }
    })}
  ${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Cell, "Cell").$$render($$result, { span: 5 }, {}, {
          default: () => {
            return `${validate_component(Scroll_actions, "ScrollActions").$$render($$result, {}, {}, {
              default: ({ visible }) => {
                return `${!visible ? `<div class="${"pill-logo-container desktop svelte-13ld8k3"}"><div style="display: contents; --width:${"20em"};">${validate_component(Pill_logo, "PillLogo").$$render($$result, {}, {}, {})}</div></div>` : ``}`;
              }
            })}`;
          }
        })}
    ${validate_component(Cell, "Cell").$$render($$result, { span: 7 }, {}, {
          default: () => {
            return `<div class="${"demo-cell"}">${validate_component(Scroll_actions, "ScrollActions").$$render($$result, {}, {}, {
              default: ({ visible }) => {
                return `${!visible ? `<div><h1 class="${"bold headline light"}">CRIB</h1>
              <p class="${"lead light"}">Center for Research Innovation in Biotechnology (<strong style="${"font-size: 1em;"}">CRIB</strong>) aggregates and analyzes the sources of scientific, medical
                and business innovations in therapeutics &amp; vaccines.
              </p>

              ${validate_component(Button_1, "Button").$$render($$result, {
                  color: "secondary",
                  href: "http://cdek.liu.edu/",
                  target: "_blank",
                  variant: "raised",
                  class: "mdc-elevation--z12"
                }, {}, {
                  default: () => {
                    return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                      default: () => {
                        return `Browse CDEK Data`;
                      }
                    })}
                ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                      default: () => {
                        return `link`;
                      }
                    })}`;
                  }
                })}
              <div class="${"mobile"}"><br></div>
              ${validate_component(Button_1, "Button").$$render($$result, {
                  color: "primary",
                  href: "#scroll-down",
                  variant: "raised",
                  class: "mdc-elevation--z12"
                }, {}, {
                  default: () => {
                    return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                      default: () => {
                        return `Discover More`;
                      }
                    })}
                ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                      default: () => {
                        return `south`;
                      }
                    })}`;
                  }
                })}

              <br>
              <br></div>` : ``}`;
              }
            })}</div>`;
          }
        })}`;
      }
    })}
  <div id="${"scroll-down"}" style="${"display: block; height: 150px; width: 100%;"}"></div></div>


${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {
      class: "center",
      style: "margin: 5em 0em; overflow: hidden;"
    }, {}, {
      default: () => {
        return `${validate_component(Background_images, "BackgroundImage").$$render($$result, {
          src: "/images/covid-data-bg.jpg",
          variant: "fixed",
          class: "desktop"
        }, {}, {})}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 2 }, {}, {})}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 6, class: "cell center" }, {}, {
          default: () => {
            return `${validate_component(Card, "Card").$$render($$result, {
              variant: "outlined",
              padded: true,
              class: "cell rounded mdc-elevation--z1"
            }, {}, {
              default: () => {
                return `<div style="display: contents; --width:${"8em"};">${validate_component(Pill_logo, "PillLogo").$$render($$result, {}, {}, {})}</div>
      <h1 class="${"thin"}">Powerful Insights of Clinical Trials Data</h1>
      <p class="${"mono"}">C.R.I.B. brings together expertise, skills &amp; knowledge in the
        Pharmacology, Data Science, Clinic Trials research sectors and provides
        clean, collected, and updated data on FDA Approved Drugs, Pharmacology
        Organizations, Drug pricing, and medical indications(MeSH).
      </p>
      <br>
      ${validate_component(Button_1, "Button").$$render($$result, {
                  color: "secondary",
                  href: "/about",
                  variant: "outlined",
                  class: " rou snded"
                }, {}, {
                  default: () => {
                    return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                      default: () => {
                        return `Learn About CRIB`;
                      }
                    })}`;
                  }
                })}
      <br>
      <br>`;
              }
            })}`;
          }
        })}

  <br>
  <br>
  <br>
  <br>
  <p></p>`;
      }
    })}

${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, { class: "center" }, {}, {
      default: () => {
        return `${validate_component(Cell, "Cell").$$render($$result, { span: 12, class: " center" }, {}, {
          default: () => {
            return `<span class="${"dark-grey"}"><div style="display: contents; --font-size:${"8em"};">${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons " }, {}, {
              default: () => {
                return `newspaper`;
              }
            })}</div></span>
    <br>
    <h1 class="${"thin"}">Peer Revied Research into Clinical Trials</h1>`;
          }
        })}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 4, class: "  center" }, {}, {
          default: () => {
            return `<span class="${"medium-blue"}"><div style="display: contents; --font-size:${"4em"};">${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons " }, {}, {
              default: () => {
                return `compare_arrows
      `;
              }
            })}</div></span>
    <h3>Source Comparisions</h3>
    <p>Cleaning clinical trials data from multiple sources.</p>`;
          }
        })}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 4, class: "cell center" }, {}, {
          default: () => {
            return `<span class="${"medium-blue"}"><div style="display: contents; --font-size:${"4em"};">${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons " }, {}, {
              default: () => {
                return `done_all`;
              }
            })}</div></span>
    <h3>Data Correction</h3>
    <p>Programatic filtering, ML modeling, and hands-on Trial data.</p>`;
          }
        })}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 4, class: "cell center " }, {}, {
          default: () => {
            return `<span class="${"medium-blue"}"><div style="display: contents; --font-size:${"4em"};">${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `auto_mode`;
              }
            })}</div></span>
    <h3>Data Synchronization</h3>
    <p>Daily, Weekly, Yearly data source updates and review of Trial data</p>`;
          }
        })}
  ${validate_component(Cell, "Cell").$$render($$result, {
          span: 4,
          class: "cell center primary hidden"
        }, {}, {
          default: () => {
            return `<span class="${"medium-blue"}"><div style="display: contents; --font-size:${"4em"};">${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
              default: () => {
                return `analytics`;
              }
            })}</div></span>
    <h3>Peer Reviewed</h3>
    <p>Published research and interactive data vizualizations.</p>`;
          }
        })}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 12 }, {}, {
          default: () => {
            return `<br>
    ${validate_component(Button_1, "Button").$$render($$result, {
              color: "secondary",
              href: "/research",
              variant: "outlined",
              class: " rou snded"
            }, {}, {
              default: () => {
                return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                  default: () => {
                    return `View Research Papers`;
                  }
                })}`;
              }
            })}
    <br>
    <br>`;
          }
        })}`;
      }
    })}





`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default };
