import { c as create_ssr_component, f as compute_rest_props, h as get_current_component, g as getContext, s as setContext, o as onDestroy, v as validate_component, m as missing_component, q as globals, r as noop, t as safe_not_equal, i as spread, j as escape_attribute_value, k as escape_object, n as add_attribute, e as each, a as escape, u as createEventDispatcher } from "./index-37c8fe4c.js";
import { MDCTopAppBarBaseFoundation, MDCShortTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCTopAppBarFoundation } from "@material/top-app-bar";
import { f as forwardEventsBuilder, R as Ripple, d as classMap, B as Button, A, e as dispatch, g as Span, c as classAdderBuilder, D as Div, H as H1, h as H2, S as Span$1, a as List, I as Item, G as Graphic, T as Text, i as Separator, j as Subheader, k as H6 } from "./pill-logo.svelte_svelte_type_style_lang-01533bd5.js";
import { MDCIconButtonToggleFoundation } from "@material/icon-button";
import "@material/ripple";
import "@material/dom";
import "@material/checkbox";
import "@material/form-field";
import "@material/list";
import { MDCDismissibleDrawerFoundation, MDCModalDrawerFoundation } from "@material/drawer";
const { Object: Object_1$1 } = globals;
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "toggle",
    "pressed",
    "ariaLabelOn",
    "ariaLabelOff",
    "touch",
    "displayFlex",
    "size",
    "href",
    "action",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {
  };
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = void 0 } = $$props;
  let { toggle = false } = $$props;
  let { pressed = uninitializedValue } = $$props;
  let { ariaLabelOn = void 0 } = $$props;
  let { ariaLabelOff = void 0 } = $$props;
  let { touch = false } = $$props;
  let { displayFlex = true } = $$props;
  let { size = "normal" } = $$props;
  let { href = void 0 } = $$props;
  let { action = void 0 } = $$props;
  let element;
  let instance;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let context = getContext("SMUI:icon-button:context");
  let ariaDescribedby = getContext("SMUI:icon-button:aria-describedby");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:icon:context", "icon-button");
  let oldToggle = null;
  onDestroy(() => {
    instance && instance.destroy();
  });
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
  function getAttr(name) {
    var _a;
    return name in internalAttrs ? (_a = internalAttrs[name]) !== null && _a !== void 0 ? _a : null : getElement().getAttribute(name);
  }
  function addAttr(name, value) {
    if (internalAttrs[name] !== value) {
      internalAttrs[name] = value;
    }
  }
  function handleChange(evtData) {
    pressed = evtData.isOn;
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.pressed === void 0 && $$bindings.pressed && pressed !== void 0)
    $$bindings.pressed(pressed);
  if ($$props.ariaLabelOn === void 0 && $$bindings.ariaLabelOn && ariaLabelOn !== void 0)
    $$bindings.ariaLabelOn(ariaLabelOn);
  if ($$props.ariaLabelOff === void 0 && $$bindings.ariaLabelOff && ariaLabelOff !== void 0)
    $$bindings.ariaLabelOff(ariaLabelOff);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.displayFlex === void 0 && $$bindings.displayFlex && displayFlex !== void 0)
    $$bindings.displayFlex(displayFlex);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = (() => {
      if (context === "data-table:pagination") {
        switch (action) {
          case "first-page":
            return { "data-first-page": "true" };
          case "prev-page":
            return { "data-prev-page": "true" };
          case "next-page":
            return { "data-next-page": "true" };
          case "last-page":
            return { "data-last-page": "true" };
          default:
            return { "data-action": "true" };
        }
      } else if (context === "dialog:header") {
        return { "data-mdc-dialog-action": action };
      } else {
        return { action };
      }
    })();
    {
      if (previousDisabled !== $$restProps.disabled) {
        const elem = getElement();
        if ("blur" in elem) {
          elem.blur();
        }
        previousDisabled = $$restProps.disabled;
      }
    }
    {
      if (element && getElement() && toggle !== oldToggle) {
        if (toggle && !instance) {
          instance = new MDCIconButtonToggleFoundation({
            addClass,
            hasClass,
            notifyChange: (evtData) => {
              handleChange(evtData);
              dispatch(getElement(), "SMUIIconButtonToggle:change", evtData, void 0, true);
            },
            removeClass,
            getAttr,
            setAttr: addAttr
          });
          instance.init();
        } else if (!toggle && instance) {
          instance.destroy();
          instance = void 0;
          internalClasses = {};
          internalAttrs = {};
        }
        oldToggle = toggle;
      }
    }
    {
      if (instance && !isUninitializedValue(pressed) && instance.isOn() !== pressed) {
        instance.toggle(pressed);
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1$1.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: true,
            color,
            disabled: !!$$restProps.disabled,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap({
        [className]: true,
        "mdc-icon-button": true,
        "mdc-icon-button--on": !isUninitializedValue(pressed) && pressed,
        "mdc-icon-button--touch": touch,
        "mdc-icon-button--display-flex": displayFlex,
        "smui-icon-button--size-button": size === "button",
        "mdc-icon-button--reduced-size": size === "mini" || size === "button",
        "mdc-card__action": context === "card:action",
        "mdc-card__action--icon": context === "card:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__dismiss": context === "snackbar:actions",
        "mdc-data-table__pagination-button": context === "data-table:pagination",
        "mdc-data-table__sort-icon-button": context === "data-table:sortable-header-cell",
        "mdc-dialog__close": context === "dialog:header" && action === "close",
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, {
      "aria-pressed": !isUninitializedValue(pressed) ? pressed ? "true" : "false" : null
    }, {
      "aria-label": pressed ? ariaLabelOn : ariaLabelOff
    }, { "data-aria-label-on": ariaLabelOn }, { "data-aria-label-off": ariaLabelOff }, { "aria-describedby": ariaDescribedby }, { href }, actionProp, internalAttrs, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div class="${"mdc-icon-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-icon-button__touch"}"></div>` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
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
const { Object: Object_1 } = globals;
const Button_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let actionProp;
  let defaultProp;
  let secondaryProp;
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "style",
    "ripple",
    "color",
    "variant",
    "touch",
    "href",
    "action",
    "defaultAction",
    "secondary",
    "component",
    "getElement"
  ]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { ripple = true } = $$props;
  let { color = "primary" } = $$props;
  let { variant = "text" } = $$props;
  let { touch = false } = $$props;
  let { href = void 0 } = $$props;
  let { action = "close" } = $$props;
  let { defaultAction = false } = $$props;
  let { secondary = false } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let context = getContext("SMUI:button:context");
  let { component = href == null ? Button : A } = $$props;
  let previousDisabled = $$restProps.disabled;
  setContext("SMUI:label:context", "button");
  setContext("SMUI:icon:context", "button");
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
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.touch === void 0 && $$bindings.touch && touch !== void 0)
    $$bindings.touch(touch);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if ($$props.defaultAction === void 0 && $$bindings.defaultAction && defaultAction !== void 0)
    $$bindings.defaultAction(defaultAction);
  if ($$props.secondary === void 0 && $$bindings.secondary && secondary !== void 0)
    $$bindings.secondary(secondary);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    actionProp = context === "dialog:action" && action != null ? { "data-mdc-dialog-action": action } : { action: $$props.action };
    defaultProp = context === "dialog:action" && defaultAction ? { "data-mdc-dialog-button-default": "" } : { default: $$props.default };
    secondaryProp = context === "banner" ? {} : { secondary: $$props.secondary };
    {
      if (previousDisabled !== $$restProps.disabled) {
        getElement().blur();
        previousDisabled = $$restProps.disabled;
      }
    }
    $$rendered = `${validate_component(component || missing_component, "svelte:component").$$render($$result, Object_1.assign({
      use: [
        [
          Ripple,
          {
            ripple,
            unbounded: false,
            color,
            disabled: !!$$restProps.disabled,
            addClass,
            removeClass,
            addStyle
          }
        ],
        forwardEvents,
        ...use
      ]
    }, {
      class: classMap({
        [className]: true,
        "mdc-button": true,
        "mdc-button--raised": variant === "raised",
        "mdc-button--unelevated": variant === "unelevated",
        "mdc-button--outlined": variant === "outlined",
        "smui-button--color-secondary": color === "secondary",
        "mdc-button--touch": touch,
        "mdc-card__action": context === "card:action",
        "mdc-card__action--button": context === "card:action",
        "mdc-dialog__button": context === "dialog:action",
        "mdc-top-app-bar__navigation-icon": context === "top-app-bar:navigation",
        "mdc-top-app-bar__action-item": context === "top-app-bar:action",
        "mdc-snackbar__action": context === "snackbar:actions",
        "mdc-banner__secondary-action": context === "banner" && secondary,
        "mdc-banner__primary-action": context === "banner" && !secondary,
        "mdc-tooltip__action": context === "tooltip:rich-actions",
        ...internalClasses
      })
    }, {
      style: Object.entries(internalStyles).map(([name, value]) => `${name}: ${value};`).concat([style]).join(" ")
    }, actionProp, defaultProp, secondaryProp, { href }, $$restProps, { this: element }), {
      this: ($$value) => {
        element = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `<div class="${"mdc-button__ripple"}"></div>
  ${slots.default ? slots.default({}) : ``}${touch ? `<div class="${"mdc-button__touch"}"></div>` : ``}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
const Drawer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "variant", "open", "fixed", "setOpen", "isOpen", "getElement"]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { variant = void 0 } = $$props;
  let { open = false } = $$props;
  let { fixed = true } = $$props;
  let element;
  let instance = void 0;
  let internalClasses = {};
  let previousFocus = null;
  let focusTrap;
  let scrim = false;
  setContext("SMUI:list:nav", true);
  setContext("SMUI:list:item:nav", true);
  setContext("SMUI:list:wrapFocus", true);
  let oldVariant = variant;
  onDestroy(() => {
    instance && instance.destroy();
    scrim && scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
  });
  function getInstance() {
    var _a, _b;
    if (scrim) {
      scrim.removeEventListener("SMUIDrawerScrim:click", handleScrimClick);
    }
    if (variant === "modal") {
      scrim = (_b = (_a = element.parentNode) === null || _a === void 0 ? void 0 : _a.querySelector(".mdc-drawer-scrim")) !== null && _b !== void 0 ? _b : false;
      if (scrim) {
        scrim.addEventListener("SMUIDrawerScrim:click", handleScrimClick);
      }
    }
    const Foundation = variant === "dismissible" ? MDCDismissibleDrawerFoundation : variant === "modal" ? MDCModalDrawerFoundation : void 0;
    return Foundation ? new Foundation({
      addClass,
      removeClass,
      hasClass,
      elementHasClass: (element2, className2) => element2.classList.contains(className2),
      saveFocus: () => previousFocus = document.activeElement,
      restoreFocus: () => {
        if (previousFocus && "focus" in previousFocus && element.contains(document.activeElement)) {
          previousFocus.focus();
        }
      },
      focusActiveNavigationItem: () => {
        const activeNavItemEl = element.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");
        if (activeNavItemEl) {
          activeNavItemEl.focus();
        }
      },
      notifyClose: () => {
        open = false;
        dispatch(element, "SMUIDrawer:closed", void 0, void 0, true);
      },
      notifyOpen: () => {
        open = true;
        dispatch(element, "SMUIDrawer:opened", void 0, void 0, true);
      },
      trapFocus: () => focusTrap.trapFocus(),
      releaseFocus: () => focusTrap.releaseFocus()
    }) : void 0;
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
  function handleScrimClick() {
    instance && "handleScrimClick" in instance && instance.handleScrimClick();
  }
  function setOpen(value) {
    open = value;
  }
  function isOpen() {
    return open;
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
    $$bindings.variant(variant);
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
  if ($$props.setOpen === void 0 && $$bindings.setOpen && setOpen !== void 0)
    $$bindings.setOpen(setOpen);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  {
    if (oldVariant !== variant) {
      oldVariant = variant;
      instance && instance.destroy();
      internalClasses = {};
      instance = getInstance();
      instance && instance.init();
    }
  }
  {
    if (instance && instance.isOpen() !== open) {
      if (open) {
        instance.open();
      } else {
        instance.close();
      }
    }
  }
  return `<aside${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-drawer": true,
        "mdc-drawer--dismissible": variant === "dismissible",
        "mdc-drawer--modal": variant === "modal",
        "smui-drawer__absolute": variant === "modal" && !fixed,
        ...internalClasses
      }))
    },
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</aside>`;
});
var AppContent = classAdderBuilder({
  class: "mdc-drawer-app-content",
  component: Div
});
var Content = classAdderBuilder({
  class: "mdc-drawer__content",
  component: Div
});
var Header = classAdderBuilder({
  class: "mdc-drawer__header",
  component: Div
});
var Title$1 = classAdderBuilder({
  class: "mdc-drawer__title",
  component: H1
});
var Subtitle = classAdderBuilder({
  class: "mdc-drawer__subtitle",
  component: H2
});
const Scrim$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fixed", "component", "getElement"]);
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { fixed = true } = $$props;
  let element;
  let { component = Div } = $$props;
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.fixed === void 0 && $$bindings.fixed && fixed !== void 0)
    $$bindings.fixed(fixed);
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
        "mdc-drawer-scrim": true,
        "smui-drawer-scrim__absolute": !fixed
      })
    }, $$restProps, { this: element }), {
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
const Scrim = Scrim$1;
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
var Row = classAdderBuilder({
  class: "mdc-top-app-bar__row",
  component: Div
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
var Title = classAdderBuilder({
  class: "mdc-top-app-bar__title",
  component: Span$1
});
const Section = Section$1;
var brandBanner_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => '.branding.svelte-52x6u9{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-52x6u9{width:auto;display:block;padding:3px 1em;font-family:"open Sans", san-serif;font-size:1.1em;line-height:2em;font-weight:500}')();
const css$4 = {
  code: '.branding.svelte-52x6u9{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-52x6u9{width:auto;display:block;padding:3px 1em;font-family:"open Sans", san-serif;font-size:1.1em;line-height:2em;font-weight:500}',
  map: null
};
const Brand_banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<div class="${"branding svelte-52x6u9"}"><a href="${"https://liu.edu"}" target="${"_blank"}" class="${"logo light svelte-52x6u9"}">LONG ISLAND UNIVERSITY
  </a>
</div>`;
});
var navSubmenu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "@media(max-width: 480px){}")();
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
var navMenu_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".nav-container.svelte-vy4uvo{position:relative;display:flex;height:auto;overflow:hidden;z-index:0}")();
const css$2 = {
  code: ".nav-container.svelte-vy4uvo{position:relative;display:flex;height:auto;overflow:hidden;z-index:0}",
  map: null
};
const Nav_menu = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { active = "Home" } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$2);
  return `<div class="${"nav-container svelte-vy4uvo"}">${validate_component(List, "List").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Item, "Item").$$render($$result, { href: "/", activated: active === "Home" }, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {
            class: "material-icons",
            "aria-hidden": "true"
          }, {}, {
            default: () => {
              return `inbox`;
            }
          })}
      ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Home`;
            }
          })}`;
        }
      })}
    ${validate_component(Item, "Item").$$render($$result, {
        href: "/about",
        activated: active === "About"
      }, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {
            class: "material-icons",
            "aria-hidden": "true"
          }, {}, {
            default: () => {
              return `star`;
            }
          })}
      ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `About CRIB`;
            }
          })}`;
        }
      })}
    ${validate_component(Item, "Item").$$render($$result, {
        href: "/research",
        activated: active === "Research"
      }, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {
            class: "material-icons",
            "aria-hidden": "true"
          }, {}, {
            default: () => {
              return `drafts`;
            }
          })}
      ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Research`;
            }
          })}`;
        }
      })}
    ${validate_component(Item, "Item").$$render($$result, {
        href: "/contact",
        activated: active === "Contact"
      }, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {
            class: "material-icons",
            "aria-hidden": "true"
          }, {}, {
            default: () => {
              return `send`;
            }
          })}
      ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Contact`;
            }
          })}`;
        }
      })}

    <div class="${"hidden"}">${validate_component(Separator, "Separator").$$render($$result, {}, {}, {})}
      ${validate_component(Subheader, "Subheader").$$render($$result, { component: H6 }, {}, {
        default: () => {
          return `Labels`;
        }
      })}
      ${validate_component(Item, "Item").$$render($$result, {
        href: "javascript:void(0)",
        activated: active === "Family"
      }, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {
            class: "material-icons",
            "aria-hidden": "true"
          }, {}, {
            default: () => {
              return `bookmark`;
            }
          })}
        ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Family`;
            }
          })}`;
        }
      })}
      ${validate_component(Item, "Item").$$render($$result, {
        href: "javascript:void(0)",
        activated: active === "Friends"
      }, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {
            class: "material-icons",
            "aria-hidden": "true"
          }, {}, {
            default: () => {
              return `bookmark`;
            }
          })}
        ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Friends`;
            }
          })}`;
        }
      })}
      ${validate_component(Item, "Item").$$render($$result, {
        href: "javascript:void(0)",
        activated: active === "Work"
      }, {}, {
        default: () => {
          return `${validate_component(Graphic, "Graphic").$$render($$result, {
            class: "material-icons",
            "aria-hidden": "true"
          }, {}, {
            default: () => {
              return `bookmark`;
            }
          })}
        ${validate_component(Text, "Text").$$render($$result, {}, {}, {
            default: () => {
              return `Work`;
            }
          })}`;
        }
      })}</div>`;
    }
  })}
</div>`;
});
var topbar_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}")();
const css$1 = {
  code: "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}",
  map: null
};
const Topbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css$1);
  return `<div class="${"hid den"}">${validate_component(TopAppBar, "TopAppBar").$$render($$result, { variant: "fixed", color: "secondary" }, {}, {
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
});
var drawer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".drawer-container.svelte-ww01vv{position:absolute;display:flex;height:auto;overflow:hidden}.svelte-ww01vv .app-content{flex:auto;overflow:auto;position:relative;flex-grow:1}.main-content.svelte-ww01vv{overflow:auto;height:100%;box-sizing:border-box}")();
const css = {
  code: ".drawer-container.svelte-ww01vv{position:absolute;display:flex;height:auto;overflow:hidden}.svelte-ww01vv .app-content{flex:auto;overflow:auto;position:relative;flex-grow:1}.main-content.svelte-ww01vv{overflow:auto;height:100%;box-sizing:border-box}",
  map: null
};
const Drawer_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { open = false } = $$props;
  let { active = "Inbox" } = $$props;
  createEventDispatcher();
  if ($$props.open === void 0 && $$bindings.open && open !== void 0)
    $$bindings.open(open);
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<div class="${"drawer-container svelte-ww01vv"}">
  ${validate_component(Drawer, "Drawer").$$render($$result, { variant: "modal", open }, {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(Header, "Header").$$render($$result, { align: "end" }, {}, {
          default: () => {
            return `${validate_component(Button_1, "Button").$$render($$result, {}, {}, {
              default: () => {
                return `close ${validate_component(IconButton, "IconButton").$$render($$result, { class: "material-icons" }, {}, {
                  default: () => {
                    return `close`;
                  }
                })}`;
              }
            })}
      ${validate_component(Title$1, "Title").$$render($$result, {}, {}, {
              default: () => {
                return `CRIB`;
              }
            })}
      ${validate_component(Subtitle, "Subtitle").$$render($$result, {}, {}, {
              default: () => {
                return `Center for Research Innovation in Biotechnology`;
              }
            })}`;
          }
        })}
    ${validate_component(Content, "Content").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Nav_menu, "NavMenu").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    })}

  
  ${validate_component(Scrim, "Scrim").$$render($$result, { fixed: false }, {}, {})}
  ${validate_component(AppContent, "AppContent").$$render($$result, { class: "app-content" }, {}, {
      default: () => {
        return `<main class="${"main-content svelte-ww01vv"}"></main>`;
      }
    })}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
export { Button_1 as B, Drawer_1 as D, IconButton as I, Label as L, Topbar as T };
