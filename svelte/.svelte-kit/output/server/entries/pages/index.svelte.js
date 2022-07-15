import { c as create_ssr_component, g as compute_rest_props, h as get_current_component, n as getContext, v as validate_component, m as missing_component, t as noop, u as safe_not_equal, i as spread, r as escape_attribute_value, j as escape_object, k as add_attribute, s as setContext, e as each, a as escape, b as createEventDispatcher } from "../../chunks/index-5d194541.js";
import { B as Button_1, I as IconButton, D as Drawer_1 } from "../../chunks/drawer-da496e50.js";
import { MDCTopAppBarBaseFoundation, MDCShortTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCTopAppBarFoundation } from "@material/top-app-bar";
import { f as forwardEventsBuilder, b as classMap, k as Span, d as dispatch, l as Row, m as Title } from "../../chunks/drawer.svelte_svelte_type_style_lang-d9b42fa3.js";
import "@material/icon-button";
import "@material/ripple";
import "@material/dom";
import "@material/checkbox";
import "@material/form-field";
import "@material/list";
import { P as Pill_logo } from "../../chunks/blue-swoop.svelte_svelte_type_style_lang-acacb985.js";
import { L as LayoutGrid, C as Cell } from "../../chunks/index-f419de0a.js";
import "@material/drawer";
const CommonLabel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let element;
  let { component = Span } = $$props;
  const context = getContext("SMUI:label:context");
  const tabindex = getContext("SMUI:label:tabindex");
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object.assign({ use: [forwardEvents, ...use] }, {
      class: classMap({
        [className]: true,
        "mdc-button__label": context === "button",
        "mdc-fab__label": context === "fab",
        "mdc-tab__text-label": context === "tab",
        "mdc-image-list__label": context === "image-list",
        "mdc-snackbar__label": context === "snackbar",
        "mdc-banner__text": context === "banner",
        "mdc-segmented-button__label": context === "segmented-button",
        "mdc-data-table__pagination-rows-per-page-label": context === "data-table:pagination",
        "mdc-data-table__header-cell-label": context === "data-table:sortable-header-cell"
      })
    }, context === "snackbar" ? { "aria-atomic": "false" } : {}, { tabindex }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${slots.default ? slots.default({}) : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
const Label = CommonLabel;
const TopAppBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "variant",
    "color",
    "collapsed",
    "prominent",
    "dense",
    "scrollTarget",
    "getPropStore",
    "getElement"
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { variant = "standard" } = $$props;
  let { color = "primary" } = $$props;
  let { collapsed = uninitializedValue } = $$props;
  const alwaysCollapsed = !isUninitializedValue(collapsed) && !!collapsed;
  if (isUninitializedValue(collapsed)) {
    collapsed = false;
  }
  let { prominent = false } = $$props;
  let { dense = false } = $$props;
  let { scrollTarget = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let propStoreSet;
  let propStore = readable({ variant, prominent, dense }, (set) => {
    propStoreSet = set;
  });
  let oldScrollTarget = void 0;
  let oldVariant = variant;
  function getInstance() {
    const Foundation = {
      static: MDCTopAppBarBaseFoundation,
      short: MDCShortTopAppBarFoundation,
      fixed: MDCFixedTopAppBarFoundation
    }[variant] || MDCTopAppBarFoundation;
    return new Foundation({
      hasClass,
      addClass,
      removeClass,
      setStyle: addStyle,
      getTopAppBarHeight: () => element.clientHeight,
      notifyNavigationIconClicked: () => dispatch(element, "SMUITopAppBar:nav", void 0, void 0, true),
      getViewportScrollY: () => scrollTarget == null ? window.pageYOffset : scrollTarget.scrollTop,
      getTotalActionItems: () => element.querySelectorAll(".mdc-top-app-bar__action-item").length
    });
  }
  function hasClass(className2) {
    return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
  }
  function addClass(className2) {
    if (!internalClasses[className2]) {
      internalClasses[className2] = true;
    }
  }
  function removeClass(className2) {
    if (!(className2 in internalClasses) || internalClasses[className2]) {
      internalClasses[className2] = false;
    }
  }
  function addStyle(name, value) {
    if (internalStyles[name] != value) {
      if (value === "" || value == null) {
        delete internalStyles[name];
        internalStyles = internalStyles;
      } else {
        internalStyles[name] = value;
      }
    }
  }
  function handleTargetScroll() {
    if (instance) {
      instance.handleTargetScroll();
      if (variant === "short") {
        collapsed = "isCollapsed" in instance && instance.isCollapsed;
      }
    }
  }
  function getPropStore() {
    return propStore;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.collapsed === void 0 && $$bindings.collapsed && collapsed !== void 0)
    $$bindings.collapsed(collapsed);
  if ($$props.prominent === void 0 && $$bindings.prominent && prominent !== void 0)
    $$bindings.prominent(prominent);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if ($$props.scrollTarget === void 0 && $$bindings.scrollTarget && scrollTarget !== void 0)
    $$bindings.scrollTarget(scrollTarget);
  if ($$props.getPropStore === void 0 && $$bindings.getPropStore && getPropStore !== void 0)
    $$bindings.getPropStore(getPropStore);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (propStoreSet) {
      propStoreSet({ variant, prominent, dense });
    }
  }
  {
    if (oldVariant !== variant && instance) {
      oldVariant = variant;
      instance.destroy();
      internalClasses = {};
      internalStyles = {};
      instance = getInstance();
      instance.init();
    }
  }
  {
    if (instance && variant === "short" && "setAlwaysCollapsed" in instance) {
      instance.setAlwaysCollapsed(alwaysCollapsed);
    }
  }
  {
    if (oldScrollTarget !== scrollTarget) {
      if (oldScrollTarget) {
        oldScrollTarget.removeEventListener("scroll", handleTargetScroll);
      }
      if (scrollTarget) {
        scrollTarget.addEventListener("scroll", handleTargetScroll);
      }
      oldScrollTarget = scrollTarget;
    }
  }
  return `

<header${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar": true,
        "mdc-top-app-bar--short": variant === "short",
        "mdc-top-app-bar--short-collapsed": collapsed,
        "mdc-top-app-bar--fixed": variant === "fixed",
        "smui-top-app-bar--static": variant === "static",
        "smui-top-app-bar--color-secondary": color === "secondary",
        "mdc-top-app-bar--prominent": prominent,
        "mdc-top-app-bar--dense": dense,
        ...internalClasses
      }))
    },
    {
      style: escape_attribute_value(Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" "))
    },
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</header>`;
});
const Section$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "toolbar", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = "start" } = $$props;
  let { toolbar = false } = $$props;
  let element;
  setContext("SMUI:icon-button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  setContext("SMUI:button:context", toolbar ? "top-app-bar:action" : "top-app-bar:navigation");
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.toolbar === void 0 && $$bindings.toolbar && toolbar !== void 0)
    $$bindings.toolbar(toolbar);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<section${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-top-app-bar__section": true,
        "mdc-top-app-bar__section--align-start": align === "start",
        "mdc-top-app-bar__section--align-end": align === "end"
      }))
    },
    escape_object(toolbar ? { role: "toolbar" } : {}),
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</section>`;
});
const Section = Section$1;
const css$4 = {
  code: '.branding.svelte-1535w6g{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-1535w6g{width:auto;display:block;padding:3px 1em;font-family:"open Sans", san-serif;font-size:1.1em;line-height:2em;font-weight:500}',
  map: null
};
const Brand_banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"branding svelte-1535w6g"}"><a href="${"https://liu.edu"}" target="${"_blank"}" class="${"logo light svelte-1535w6g"}">LONG ISLAND UNIVERSITY
  </a>
</div>`;
});
const css$3 = {
  code: "@media(max-width: 480px){}",
  map: null
};
const Nav_submenu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nav_menu = [
    { slug: "home", title: "Home" },
    { slug: "about", title: "About" },
    { slug: "research", title: "Research" },
    { slug: "contact", title: "Contact" }
  ];
  let { active = "Home" } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$3);
  return `${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "static", dense: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "brand-color" }, {}, {
        default: () => {
          return `${validate_component(Section, "Section").$$render($$result, { align: "start", toolbar: true }, {}, {})}
    ${validate_component(Section, "Section").$$render($$result, { align: "start", toolbar: true }, {}, {
            default: () => {
              return `${each(nav_menu, (todo) => {
                return `${todo.title === "Home" ? `${validate_component(Button_1, "Button").$$render($$result, {
                  href: "/",
                  activated: active === todo.title,
                  class: "nav-" + todo.slug
                }, {}, {
                  default: () => {
                    return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(todo.title)}`;
                      }
                    })}
          `;
                  }
                })}` : `${validate_component(Button_1, "Button").$$render($$result, {
                  href: "/" + todo.slug,
                  activated: active === todo.title,
                  class: "nav-" + todo.slug
                }, {}, {
                  default: () => {
                    return `${validate_component(Label, "Label").$$render($$result, {}, {}, {
                      default: () => {
                        return `${escape(todo.title)}`;
                      }
                    })}
          `;
                  }
                })}`}`;
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
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
const css$2 = {
  code: "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}",
  map: null
};
const Topbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let topAppBar;
  createEventDispatcher();
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"hid den"}">${validate_component(TopAppBar, "TopAppBar").$$render($$result, {
      variant: "fixed",
      color: "secondary",
      this: topAppBar
    }, {
      this: ($$value) => {
        topAppBar = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Brand_banner, "BrandBanner").$$render($$result, {}, {}, {})}
    ${validate_component(Row, "Row").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Section, "Section").$$render($$result, {}, {}, {
              default: () => {
                return `
        ${validate_component(Button_1, "Button").$$render($$result, {}, {}, {
                  default: () => {
                    return `Menu
          ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                      default: () => {
                        return `menu`;
                      }
                    })}`;
                  }
                })}
        ${validate_component(Title, "Title").$$render($$result, {}, {}, {
                  default: () => {
                    return `<span class="${"desktop"}">Center for Research Innovation in Biotechnology
          </span>
          <span class="${"mobile"}">CRIB</span>`;
                  }
                })}`;
              }
            })}
      ${validate_component(Section, "Section").$$render($$result, { align: "end", toolbar: true }, {}, {
              default: () => {
                return `${validate_component(IconButton, "IconButton").$$render($$result, {
                  class: "material-icons",
                  "aria-label": "Download"
                }, {}, {
                  default: () => {
                    return `account_circle`;
                  }
                })}`;
              }
            })}`;
          }
        })}
    <div class="${"desktop"}">${validate_component(Nav_submenu, "NavSubmenu").$$render($$result, {}, {}, {})}</div>`;
      }
    })}
  <div style="${"padding-bottom: 9em;"}"></div>
</div>`;
  } while (!$$settled);
  return $$rendered;
});
const css$1 = {
  code: `.svg-holder.svelte-1kz5pl8{position:absolute;width:var(--width, "3em")}.blue-swoop.svelte-1kz5pl8{z-index:0;transform:skewY(-6deg);transform-origin:top left;background-color:#4e5e69;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23518CB5'/%3E%3Cstop offset='1' stop-color='%234E5E69'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%2350758f'/%3E%3Cstop offset='1' stop-color='%234E5E69'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");background-attachment:fixed;background-size:cover;background-attachment:fixed;background-size:cover;height:80vh !important;min-height:600px;max-height:600px;display:block;position:absolute;width:100vw;padding:0;margin:0em 0;z-index:0}@keyframes svelte-1kz5pl8-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`,
  map: null
};
const Blue_swoop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"svg-holder svelte-1kz5pl8"}"><span class="${"blue-swoop svelte-1kz5pl8"}"></span>
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
  return `
${validate_component(Topbar, "Topbar").$$render($$result, {}, {}, {})}
${validate_component(Drawer_1, "NavDrawer").$$render($$result, {}, {}, {})}



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
            ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                    default: () => {
                      return `menu`;
                    }
                  })}`;
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


${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, { class: "center" }, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, {
        span: 6,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<div><h1>Welcome to SvelteKit</h1></div>`;
        }
      })}
  ${validate_component(Cell, "Cell").$$render($$result, {
        span: 6,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
    </p>`;
        }
      })}`;
    }
  })}


${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, { class: "center" }, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, {
        span: 4,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<div><h1>Welcome to SvelteKit</h1></div>`;
        }
      })}
  ${validate_component(Cell, "Cell").$$render($$result, {
        span: 4,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<div><img src="${"https://placeholder.pics/svg/100vwx100vh/DEDEDE/555555/test"}"></div>`;
        }
      })}
  ${validate_component(Cell, "Cell").$$render($$result, {
        span: 4,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
    </p>`;
        }
      })}`;
    }
  })}


${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, { class: "center" }, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, {
        span: 4,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<div><h1>Welcome to SvelteKit</h1></div>`;
        }
      })}
  ${validate_component(Cell, "Cell").$$render($$result, {
        span: 8,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
    </p>`;
        }
      })}`;
    }
  })}


${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, { class: "center" }, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, {
        span: 8,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<div><h1>Welcome to SvelteKit</h1></div>`;
        }
      })}
  ${validate_component(Cell, "Cell").$$render($$result, {
        span: 4,
        class: "cell rounded mdc-elevation--z1 center"
      }, {}, {
        default: () => {
          return `<p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
    </p>`;
        }
      })}`;
    }
  })}`;
});
export { Routes as default };
