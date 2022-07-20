import {
  r as listen,
  t as bubble,
  u as prevent_default,
  w as stop_propagation,
  e as getContext,
  c as create_ssr_component,
  d as compute_rest_props,
  g as get_current_component,
  f as spread,
  h as escape_attribute_value,
  i as escape_object,
  j as add_attribute,
  x as noop,
  y as safe_not_equal,
  s as setContext,
  o as onDestroy,
  v as validate_component,
  m as missing_component,
  l as globals,
} from "./index-4b7b92f5.js";
import "@material/list";
import { events, ponyfill } from "@material/dom";
import { MDCRippleFoundation, util } from "@material/ripple";
function classMap(classObj) {
  return Object.entries(classObj)
    .filter(([name, value]) => name !== "" && value)
    .map(([name]) => name)
    .join(" ");
}
function dispatch(
  element,
  eventType,
  detail,
  eventInit = { bubbles: true },
  duplicateEventForMDC = false
) {
  if (typeof Event !== "undefined" && element) {
    const event = new CustomEvent(
      eventType,
      Object.assign(Object.assign({}, eventInit), { detail })
    );
    element === null || element === void 0
      ? void 0
      : element.dispatchEvent(event);
    if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
      const duplicateEvent = new CustomEvent(
        eventType.replace(/^SMUI/g, () => "MDC"),
        Object.assign(Object.assign({}, eventInit), { detail })
      );
      element === null || element === void 0
        ? void 0
        : element.dispatchEvent(duplicateEvent);
      if (duplicateEvent.defaultPrevented) {
        event.preventDefault();
      }
    }
    return event;
  }
}
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (
      cashIndex !== -1 &&
      keys.indexOf(name.substring(0, cashIndex + 1)) !== -1
    ) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
}
const oldModifierRegex =
  /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
const newModifierRegex =
  /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
function forwardEventsBuilder(component) {
  let $on;
  let events2 = [];
  component.$on = (fullEventType, callback) => {
    let eventType = fullEventType;
    let destructor = () => {};
    if ($on) {
      destructor = $on(eventType, callback);
    } else {
      events2.push([eventType, callback]);
    }
    const oldModifierMatch = eventType.match(oldModifierRegex);
    if (oldModifierMatch && console) {
      console.warn(
        'Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',
        eventType
      );
    }
    return () => {
      destructor();
    };
  };
  function forward(e) {
    bubble(component, e);
  }
  return (node) => {
    const destructors = [];
    const forwardDestructors = {};
    $on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let handler = callback;
      let options = false;
      const oldModifierMatch = eventType.match(oldModifierRegex);
      const newModifierMatch = eventType.match(newModifierRegex);
      const modifierMatch = oldModifierMatch || newModifierMatch;
      if (eventType.match(/^SMUI:\w+:/)) {
        const newEventTypeParts = eventType.split(":");
        let newEventType = "";
        for (let i = 0; i < newEventTypeParts.length; i++) {
          newEventType +=
            i === newEventTypeParts.length - 1
              ? ":" + newEventTypeParts[i]
              : newEventTypeParts[i]
                  .split("-")
                  .map(
                    (value) => value.slice(0, 1).toUpperCase() + value.slice(1)
                  )
                  .join("");
        }
        console.warn(
          `The event ${eventType.split("$")[0]} has been renamed to ${
            newEventType.split("$")[0]
          }.`
        );
        eventType = newEventType;
      }
      if (modifierMatch) {
        const parts = eventType.split(oldModifierMatch ? ":" : "$");
        eventType = parts[0];
        const eventOptions = Object.fromEntries(
          parts.slice(1).map((mod) => [mod, true])
        );
        if (eventOptions.passive) {
          options = options || {};
          options.passive = true;
        }
        if (eventOptions.nonpassive) {
          options = options || {};
          options.passive = false;
        }
        if (eventOptions.capture) {
          options = options || {};
          options.capture = true;
        }
        if (eventOptions.once) {
          options = options || {};
          options.once = true;
        }
        if (eventOptions.preventDefault) {
          handler = prevent_default(handler);
        }
        if (eventOptions.stopPropagation) {
          handler = stop_propagation(handler);
        }
      }
      const off = listen(node, eventType, handler, options);
      const destructor = () => {
        off();
        const idx = destructors.indexOf(destructor);
        if (idx > -1) {
          destructors.splice(idx, 1);
        }
      };
      destructors.push(destructor);
      if (!(eventType in forwardDestructors)) {
        forwardDestructors[eventType] = listen(node, eventType, forward);
      }
      return destructor;
    };
    for (let i = 0; i < events2.length; i++) {
      $on(events2[i][0], events2[i][1]);
    }
    return {
      destroy: () => {
        for (let i = 0; i < destructors.length; i++) {
          destructors[i]();
        }
        for (let entry of Object.entries(forwardDestructors)) {
          entry[1]();
        }
      },
    };
  };
}
function prefixFilter(obj, prefix) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    if (name.substring(0, prefix.length) === prefix) {
      newObj[name.substring(prefix.length)] = obj[name];
    }
  }
  return newObj;
}
const { applyPassive } = events;
const { matches } = ponyfill;
function Ripple(
  node,
  {
    ripple = true,
    surface = false,
    unbounded = false,
    disabled = false,
    color,
    active,
    rippleElement,
    eventTarget,
    activeTarget,
    addClass = (className) => node.classList.add(className),
    removeClass = (className) => node.classList.remove(className),
    addStyle = (name, value) => node.style.setProperty(name, value),
    initPromise = Promise.resolve(),
  } = {}
) {
  let instance;
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let oldActive = active;
  let oldEventTarget = eventTarget;
  let oldActiveTarget = activeTarget;
  function handleProps() {
    if (surface) {
      addClass("mdc-ripple-surface");
      if (color === "primary") {
        addClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      } else if (color === "secondary") {
        removeClass("smui-ripple-surface--primary");
        addClass("smui-ripple-surface--secondary");
      } else {
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
    } else {
      removeClass("mdc-ripple-surface");
      removeClass("smui-ripple-surface--primary");
      removeClass("smui-ripple-surface--secondary");
    }
    if (instance && oldActive !== active) {
      oldActive = active;
      if (active) {
        instance.activate();
      } else if (active === false) {
        instance.deactivate();
      }
    }
    if (ripple && !instance) {
      instance = new MDCRippleFoundation({
        addClass,
        browserSupportsCssVars: () => util.supportsCssVariables(window),
        computeBoundingRect: () =>
          (rippleElement || node).getBoundingClientRect(),
        containsEventTarget: (target) => node.contains(target),
        deregisterDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterInteractionHandler: (evtType, handler) =>
          (eventTarget || node).removeEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        deregisterResizeHandler: (handler) =>
          window.removeEventListener("resize", handler),
        getWindowPageOffset: () => ({
          x: window.pageXOffset,
          y: window.pageYOffset,
        }),
        isSurfaceActive: () =>
          active == null ? matches(activeTarget || node, ":active") : active,
        isSurfaceDisabled: () => !!disabled,
        isUnbounded: () => !!unbounded,
        registerDocumentInteractionHandler: (evtType, handler) =>
          document.documentElement.addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerInteractionHandler: (evtType, handler) =>
          (eventTarget || node).addEventListener(
            evtType,
            handler,
            applyPassive()
          ),
        registerResizeHandler: (handler) =>
          window.addEventListener("resize", handler),
        removeClass,
        updateCssVariable: addStyle,
      });
      initPromise.then(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    } else if (instance && !ripple) {
      initPromise.then(() => {
        if (instance) {
          instance.destroy();
          instance = void 0;
        }
      });
    }
    if (
      instance &&
      (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)
    ) {
      oldEventTarget = eventTarget;
      oldActiveTarget = activeTarget;
      instance.destroy();
      requestAnimationFrame(() => {
        if (instance) {
          instance.init();
          instance.setUnbounded(unbounded);
        }
      });
    }
    if (!ripple && unbounded) {
      addClass("mdc-ripple-upgraded--unbounded");
    }
  }
  handleProps();
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  function layout() {
    if (instance) {
      instance.layout();
    }
  }
  return {
    update(props) {
      ({
        ripple,
        surface,
        unbounded,
        disabled,
        color,
        active,
        rippleElement,
        eventTarget,
        activeTarget,
        addClass,
        removeClass,
        addStyle,
        initPromise,
      } = Object.assign(
        {
          ripple: true,
          surface: false,
          unbounded: false,
          disabled: false,
          color: void 0,
          active: void 0,
          rippleElement: void 0,
          eventTarget: void 0,
          activeTarget: void 0,
          addClass: (className) => node.classList.add(className),
          removeClass: (className) => node.classList.remove(className),
          addStyle: (name, value) => node.style.setProperty(name, value),
          initPromise: Promise.resolve(),
        },
        props
      ));
      handleProps();
    },
    destroy() {
      if (instance) {
        instance.destroy();
        instance = void 0;
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    },
  };
}
const A$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "href", "getElement"]);
  let { use = [] } = $$props;
  let { href = "javascript:void(0);" } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<a${spread(
    [{ href: escape_attribute_value(href) }, escape_object($$restProps)],
    {}
  )}${add_attribute("this", element, 0)}>${
    slots.default ? slots.default({}) : ``
  }</a>`;
});
const Button$1 = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
    let { use = [] } = $$props;
    forwardEventsBuilder(get_current_component());
    let element;
    function getElement() {
      return element;
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    return `<button${spread([escape_object($$restProps)], {})}${add_attribute(
      "this",
      element,
      0
    )}>${slots.default ? slots.default({}) : ``}</button>`;
  }
);
const Div$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const H1$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<h1${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</h1>`;
});
const H2$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<h2${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</h2>`;
});
const H3$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<h3${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</h3>`;
});
const H6$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<h6${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</h6>`;
});
const Hr$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<hr${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>
${slots.default ? slots.default({}) : ``}`;
});
const Li$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<li${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</li>`;
});
const Nav$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<nav${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</nav>`;
});
const Span$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<span${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}</span>`;
});
const Ul$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "getElement"]);
  let { use = [] } = $$props;
  forwardEventsBuilder(get_current_component());
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<ul${spread([escape_object($$restProps)], {})}${add_attribute(
    "this",
    element,
    0
  )}>${slots.default ? slots.default({}) : ``}
</ul>`;
});
const A = A$1;
const Button = Button$1;
const Div = Div$1;
const H1 = H1$1;
const H2 = H2$1;
const H3 = H3$1;
const H6 = H6$1;
const Hr = Hr$1;
const Li = Li$1;
const Nav = Nav$1;
const Span = Span$1;
const Ul = Ul$1;
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe,
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
const List = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
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
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { nonInteractive = false } = $$props;
  let { dense = false } = $$props;
  let { textualList = false } = $$props;
  let { avatarList = false } = $$props;
  let { iconList = false } = $$props;
  let { imageList = false } = $$props;
  let { thumbnailList = false } = $$props;
  let { videoList = false } = $$props;
  let { twoLine = false } = $$props;
  let { threeLine = false } = $$props;
  let { vertical = true } = $$props;
  let {
    wrapFocus = (_a = getContext("SMUI:list:wrapFocus")) !== null &&
    _a !== void 0
      ? _a
      : false,
  } = $$props;
  let { singleSelection = false } = $$props;
  let { selectedIndex = -1 } = $$props;
  let { radioList = false } = $$props;
  let { checkList = false } = $$props;
  let { hasTypeahead = false } = $$props;
  let element;
  let instance;
  let role = getContext("SMUI:list:role");
  let nav = getContext("SMUI:list:nav");
  let selectionDialog = getContext("SMUI:dialog:selection");
  let addLayoutListener = getContext("SMUI:addLayoutListener");
  let removeLayoutListener;
  let { component = nav ? Nav : Ul } = $$props;
  setContext("SMUI:list:nonInteractive", nonInteractive);
  setContext("SMUI:separator:context", "list");
  if (!role) {
    if (singleSelection) {
      role = "listbox";
      setContext("SMUI:list:item:role", "option");
    } else if (radioList) {
      role = "radiogroup";
      setContext("SMUI:list:item:role", "radio");
    } else if (checkList) {
      role = "group";
      setContext("SMUI:list:item:role", "checkbox");
    } else {
      role = "list";
      setContext("SMUI:list:item:role", void 0);
    }
  }
  if (addLayoutListener) {
    removeLayoutListener = addLayoutListener(layout);
  }
  onDestroy(() => {
    if (removeLayoutListener) {
      removeLayoutListener();
    }
  });
  function layout() {
    return instance.layout();
  }
  function setEnabled(itemIndex, isEnabled) {
    return instance.setEnabled(itemIndex, isEnabled);
  }
  function getTypeaheadInProgress() {
    return instance.isTypeaheadInProgress();
  }
  function getSelectedIndex() {
    return instance.getSelectedIndex();
  }
  function getFocusedItemIndex() {
    return instance.getFocusedItemIndex();
  }
  function getElement() {
    return element.getElement();
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if (
    $$props.nonInteractive === void 0 &&
    $$bindings.nonInteractive &&
    nonInteractive !== void 0
  )
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.dense === void 0 && $$bindings.dense && dense !== void 0)
    $$bindings.dense(dense);
  if (
    $$props.textualList === void 0 &&
    $$bindings.textualList &&
    textualList !== void 0
  )
    $$bindings.textualList(textualList);
  if (
    $$props.avatarList === void 0 &&
    $$bindings.avatarList &&
    avatarList !== void 0
  )
    $$bindings.avatarList(avatarList);
  if ($$props.iconList === void 0 && $$bindings.iconList && iconList !== void 0)
    $$bindings.iconList(iconList);
  if (
    $$props.imageList === void 0 &&
    $$bindings.imageList &&
    imageList !== void 0
  )
    $$bindings.imageList(imageList);
  if (
    $$props.thumbnailList === void 0 &&
    $$bindings.thumbnailList &&
    thumbnailList !== void 0
  )
    $$bindings.thumbnailList(thumbnailList);
  if (
    $$props.videoList === void 0 &&
    $$bindings.videoList &&
    videoList !== void 0
  )
    $$bindings.videoList(videoList);
  if ($$props.twoLine === void 0 && $$bindings.twoLine && twoLine !== void 0)
    $$bindings.twoLine(twoLine);
  if (
    $$props.threeLine === void 0 &&
    $$bindings.threeLine &&
    threeLine !== void 0
  )
    $$bindings.threeLine(threeLine);
  if ($$props.vertical === void 0 && $$bindings.vertical && vertical !== void 0)
    $$bindings.vertical(vertical);
  if (
    $$props.wrapFocus === void 0 &&
    $$bindings.wrapFocus &&
    wrapFocus !== void 0
  )
    $$bindings.wrapFocus(wrapFocus);
  if (
    $$props.singleSelection === void 0 &&
    $$bindings.singleSelection &&
    singleSelection !== void 0
  )
    $$bindings.singleSelection(singleSelection);
  if (
    $$props.selectedIndex === void 0 &&
    $$bindings.selectedIndex &&
    selectedIndex !== void 0
  )
    $$bindings.selectedIndex(selectedIndex);
  if (
    $$props.radioList === void 0 &&
    $$bindings.radioList &&
    radioList !== void 0
  )
    $$bindings.radioList(radioList);
  if (
    $$props.checkList === void 0 &&
    $$bindings.checkList &&
    checkList !== void 0
  )
    $$bindings.checkList(checkList);
  if (
    $$props.hasTypeahead === void 0 &&
    $$bindings.hasTypeahead &&
    hasTypeahead !== void 0
  )
    $$bindings.hasTypeahead(hasTypeahead);
  if (
    $$props.component === void 0 &&
    $$bindings.component &&
    component !== void 0
  )
    $$bindings.component(component);
  if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
    $$bindings.layout(layout);
  if (
    $$props.setEnabled === void 0 &&
    $$bindings.setEnabled &&
    setEnabled !== void 0
  )
    $$bindings.setEnabled(setEnabled);
  if (
    $$props.getTypeaheadInProgress === void 0 &&
    $$bindings.getTypeaheadInProgress &&
    getTypeaheadInProgress !== void 0
  )
    $$bindings.getTypeaheadInProgress(getTypeaheadInProgress);
  if (
    $$props.getSelectedIndex === void 0 &&
    $$bindings.getSelectedIndex &&
    getSelectedIndex !== void 0
  )
    $$bindings.getSelectedIndex(getSelectedIndex);
  if (
    $$props.getFocusedItemIndex === void 0 &&
    $$bindings.getFocusedItemIndex &&
    getFocusedItemIndex !== void 0
  )
    $$bindings.getFocusedItemIndex(getFocusedItemIndex);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(
      component || missing_component,
      "svelte:component"
    ).$$render(
      $$result,
      Object.assign(
        { use: [forwardEvents, ...use] },
        {
          class: classMap({
            [className]: true,
            "mdc-deprecated-list": true,
            "mdc-deprecated-list--non-interactive": nonInteractive,
            "mdc-deprecated-list--dense": dense,
            "mdc-deprecated-list--textual-list": textualList,
            "mdc-deprecated-list--avatar-list": avatarList || selectionDialog,
            "mdc-deprecated-list--icon-list": iconList,
            "mdc-deprecated-list--image-list": imageList,
            "mdc-deprecated-list--thumbnail-list": thumbnailList,
            "mdc-deprecated-list--video-list": videoList,
            "mdc-deprecated-list--two-line": twoLine,
            "smui-list--three-line": threeLine && !twoLine,
          }),
        },
        { role },
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        },
      },
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        },
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const { Object: Object_1$1 } = globals;
let counter = 0;
const Item$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let tabindex;
  let $$restProps = compute_rest_props($$props, [
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
  ]);
  var _a;
  const forwardEvents = forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};
  function isUninitializedValue(value) {
    return value === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { style = "" } = $$props;
  let { color = void 0 } = $$props;
  let {
    nonInteractive = (_a = getContext("SMUI:list:nonInteractive")) !== null &&
    _a !== void 0
      ? _a
      : false,
  } = $$props;
  setContext("SMUI:list:nonInteractive", void 0);
  let { ripple = !nonInteractive } = $$props;
  let { activated = false } = $$props;
  let { role = getContext("SMUI:list:item:role") } = $$props;
  setContext("SMUI:list:item:role", void 0);
  let { selected = false } = $$props;
  let { disabled = false } = $$props;
  let { skipRestoreFocus = false } = $$props;
  let { tabindex: tabindexProp = uninitializedValue } = $$props;
  let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
  let { href = void 0 } = $$props;
  let element;
  let internalClasses = {};
  let internalStyles = {};
  let internalAttrs = {};
  let input;
  let nav = getContext("SMUI:list:item:nav");
  let { component = nav ? (href ? A : Span) : Li } = $$props;
  setContext("SMUI:generic:input:props", { id: inputId });
  setContext("SMUI:separator:context", void 0);
  onDestroy(() => {});
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
  function action(e) {
    if (!disabled) {
      dispatch(getElement(), "SMUI:action", e);
    }
  }
  function getPrimaryText() {
    var _a2, _b, _c;
    const element2 = getElement();
    const primaryText = element2.querySelector(
      ".mdc-deprecated-list-item__primary-text"
    );
    if (primaryText) {
      return (_a2 = primaryText.textContent) !== null && _a2 !== void 0
        ? _a2
        : "";
    }
    const text = element2.querySelector(".mdc-deprecated-list-item__text");
    if (text) {
      return (_b = text.textContent) !== null && _b !== void 0 ? _b : "";
    }
    return (_c = element2.textContent) !== null && _c !== void 0 ? _c : "";
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
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if (
    $$props.nonInteractive === void 0 &&
    $$bindings.nonInteractive &&
    nonInteractive !== void 0
  )
    $$bindings.nonInteractive(nonInteractive);
  if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
    $$bindings.ripple(ripple);
  if (
    $$props.activated === void 0 &&
    $$bindings.activated &&
    activated !== void 0
  )
    $$bindings.activated(activated);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if (
    $$props.skipRestoreFocus === void 0 &&
    $$bindings.skipRestoreFocus &&
    skipRestoreFocus !== void 0
  )
    $$bindings.skipRestoreFocus(skipRestoreFocus);
  if (
    $$props.tabindex === void 0 &&
    $$bindings.tabindex &&
    tabindexProp !== void 0
  )
    $$bindings.tabindex(tabindexProp);
  if ($$props.inputId === void 0 && $$bindings.inputId && inputId !== void 0)
    $$bindings.inputId(inputId);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if (
    $$props.component === void 0 &&
    $$bindings.component &&
    component !== void 0
  )
    $$bindings.component(component);
  if ($$props.action === void 0 && $$bindings.action && action !== void 0)
    $$bindings.action(action);
  if (
    $$props.getPrimaryText === void 0 &&
    $$bindings.getPrimaryText &&
    getPrimaryText !== void 0
  )
    $$bindings.getPrimaryText(getPrimaryText);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    tabindex = isUninitializedValue(tabindexProp)
      ? !nonInteractive && !disabled && (selected || input)
        ? 0
        : -1
      : tabindexProp;
    $$rendered = `${validate_component(
      component || missing_component,
      "svelte:component"
    ).$$render(
      $$result,
      Object_1$1.assign(
        {
          use: [
            ...(nonInteractive
              ? []
              : [
                  [
                    Ripple,
                    {
                      ripple: !input,
                      unbounded: false,
                      color:
                        (activated || selected) && color == null
                          ? "primary"
                          : color,
                      disabled,
                      addClass,
                      removeClass,
                      addStyle,
                    },
                  ],
                ]),
            forwardEvents,
            ...use,
          ],
        },
        {
          class: classMap({
            [className]: true,
            "mdc-deprecated-list-item": true,
            "mdc-deprecated-list-item--activated": activated,
            "mdc-deprecated-list-item--selected": selected,
            "mdc-deprecated-list-item--disabled": disabled,
            "mdc-menu-item--selected": !nav && role === "menuitem" && selected,
            "smui-menu-item--non-interactive": nonInteractive,
            ...internalClasses,
          }),
        },
        {
          style: Object.entries(internalStyles)
            .map(([name, value]) => `${name}: ${value};`)
            .concat([style])
            .join(" "),
        },
        nav && activated ? { "aria-current": "page" } : {},
        !nav ? { role } : {},
        !nav && role === "option"
          ? {
              "aria-selected": selected ? "true" : "false",
            }
          : {},
        !nav && (role === "radio" || role === "checkbox")
          ? {
              "aria-checked": "false",
            }
          : {},
        !nav
          ? {
              "aria-disabled": disabled ? "true" : "false",
            }
          : {},
        {
          "data-menu-item-skip-restore-focus": skipRestoreFocus || void 0,
        },
        { tabindex },
        { href },
        internalAttrs,
        $$restProps,
        { this: element }
      ),
      {
        this: ($$value) => {
          element = $$value;
          $$settled = false;
        },
      },
      {
        default: () => {
          return `${
            ripple
              ? `<span class="${"mdc-deprecated-list-item__ripple"}"></span>`
              : ``
          }${slots.default ? slots.default({}) : ``}`;
        },
      }
    )}`;
  } while (!$$settled);
  return $$rendered;
});
const { Object: Object_1 } = globals;
const internals = {
  component: Div$1,
  class: "",
  classMap: {},
  contexts: {},
  props: {},
};
const ClassAdder = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "component",
      "getElement",
    ]);
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let element;
    const smuiClass = internals.class;
    const smuiClassMap = {};
    const smuiClassUnsubscribes = [];
    const contexts = internals.contexts;
    const props = internals.props;
    let { component = internals.component } = $$props;
    Object.entries(internals.classMap).forEach(([name, context]) => {
      const store = getContext(context);
      if (store && "subscribe" in store) {
        smuiClassUnsubscribes.push(
          store.subscribe((value) => {
            smuiClassMap[name] = value;
          })
        );
      }
    });
    const forwardEvents = forwardEventsBuilder(get_current_component());
    for (let context in contexts) {
      if (contexts.hasOwnProperty(context)) {
        setContext(context, contexts[context]);
      }
    }
    onDestroy(() => {
      for (const unsubscribe of smuiClassUnsubscribes) {
        unsubscribe();
      }
    });
    function getElement() {
      return element.getElement();
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if (
      $$props.component === void 0 &&
      $$bindings.component &&
      component !== void 0
    )
      $$bindings.component(component);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    let $$settled;
    let $$rendered;
    do {
      $$settled = true;
      $$rendered = `${validate_component(
        component || missing_component,
        "svelte:component"
      ).$$render(
        $$result,
        Object_1.assign(
          { use: [forwardEvents, ...use] },
          {
            class: classMap({
              [className]: true,
              [smuiClass]: true,
              ...smuiClassMap,
            }),
          },
          props,
          $$restProps,
          { this: element }
        ),
        {
          this: ($$value) => {
            element = $$value;
            $$settled = false;
          },
        },
        {
          default: () => {
            return `${slots.default ? slots.default({}) : ``}`;
          },
        }
      )}`;
    } while (!$$settled);
    return $$rendered;
  }
);
const defaults = Object.assign({}, internals);
function classAdderBuilder(props) {
  return new Proxy(ClassAdder, {
    construct: function (target, args) {
      Object.assign(internals, defaults, props);
      return new target(...args);
    },
    get: function (target, prop) {
      Object.assign(internals, defaults, props);
      return target[prop];
    },
  });
}
var Text = classAdderBuilder({
  class: "mdc-deprecated-list-item__text",
  component: Span,
});
var PrimaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__primary-text",
  component: Span,
});
var SecondaryText = classAdderBuilder({
  class: "mdc-deprecated-list-item__secondary-text",
  component: Span,
});
const Graphic$1 = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "getElement",
    ]);
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let element;
    let menuSelectionGroup = getContext(
      "SMUI:list:graphic:menu-selection-group"
    );
    function getElement() {
      return element;
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    return `<span${spread(
      [
        {
          class: escape_attribute_value(
            classMap({
              [className]: true,
              "mdc-deprecated-list-item__graphic": true,
              "mdc-menu__selection-group-icon": menuSelectionGroup,
            })
          ),
        },
        escape_object($$restProps),
      ],
      {}
    )}${add_attribute("this", element, 0)}>${
      slots.default ? slots.default({}) : ``
    }</span>`;
  }
);
classAdderBuilder({
  class: "mdc-deprecated-list-item__meta",
  component: Span,
});
classAdderBuilder({
  class: "mdc-deprecated-list-group",
  component: Div,
});
var Subheader = classAdderBuilder({
  class: "mdc-deprecated-list-group__subheader",
  component: H3,
});
const Separator$1 = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "padded",
      "inset",
      "insetLeading",
      "insetTrailing",
      "insetPadding",
      "component",
      "getElement",
    ]);
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { padded = false } = $$props;
    let { inset = false } = $$props;
    let { insetLeading = false } = $$props;
    let { insetTrailing = false } = $$props;
    let { insetPadding = false } = $$props;
    let element;
    let nav = getContext("SMUI:list:item:nav");
    let context = getContext("SMUI:separator:context");
    let { component = nav || context !== "list" ? Hr : Li } = $$props;
    function getElement() {
      return element.getElement();
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if ($$props.padded === void 0 && $$bindings.padded && padded !== void 0)
      $$bindings.padded(padded);
    if ($$props.inset === void 0 && $$bindings.inset && inset !== void 0)
      $$bindings.inset(inset);
    if (
      $$props.insetLeading === void 0 &&
      $$bindings.insetLeading &&
      insetLeading !== void 0
    )
      $$bindings.insetLeading(insetLeading);
    if (
      $$props.insetTrailing === void 0 &&
      $$bindings.insetTrailing &&
      insetTrailing !== void 0
    )
      $$bindings.insetTrailing(insetTrailing);
    if (
      $$props.insetPadding === void 0 &&
      $$bindings.insetPadding &&
      insetPadding !== void 0
    )
      $$bindings.insetPadding(insetPadding);
    if (
      $$props.component === void 0 &&
      $$bindings.component &&
      component !== void 0
    )
      $$bindings.component(component);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    let $$settled;
    let $$rendered;
    do {
      $$settled = true;
      $$rendered = `${validate_component(
        component || missing_component,
        "svelte:component"
      ).$$render(
        $$result,
        Object.assign(
          { use: [forwardEvents, ...use] },
          {
            class: classMap({
              [className]: true,
              "mdc-deprecated-list-divider": true,
              "mdc-deprecated-list-divider--padded": padded,
              "mdc-deprecated-list-divider--inset": inset,
              "mdc-deprecated-list-divider--inset-leading": insetLeading,
              "mdc-deprecated-list-divider--inset-trailing": insetTrailing,
              "mdc-deprecated-list-divider--inset-padding": insetPadding,
            }),
          },
          { role: "separator" },
          $$restProps,
          { this: element }
        ),
        {
          this: ($$value) => {
            element = $$value;
            $$settled = false;
          },
        },
        {}
      )}`;
    } while (!$$settled);
    return $$rendered;
  }
);
const Item = Item$1;
const Graphic = Graphic$1;
const Separator = Separator$1;
const InnerGrid = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let element;
    function getElement() {
      return element;
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    return `<div${add_attribute(
      "class",
      classMap({
        [className]: true,
        "mdc-layout-grid__inner": true,
      }),
      0
    )}${add_attribute("this", element, 0)}>${
      slots.default ? slots.default({}) : ``
    }
</div>`;
  }
);
const LayoutGrid = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "fixedColumnWidth",
      "align",
      "getElement",
    ]);
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { fixedColumnWidth = false } = $$props;
    let { align = void 0 } = $$props;
    let element;
    function getElement() {
      return element;
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if (
      $$props.fixedColumnWidth === void 0 &&
      $$bindings.fixedColumnWidth &&
      fixedColumnWidth !== void 0
    )
      $$bindings.fixedColumnWidth(fixedColumnWidth);
    if ($$props.align === void 0 && $$bindings.align && align !== void 0)
      $$bindings.align(align);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    return `<div${spread(
      [
        {
          class: escape_attribute_value(
            classMap({
              [className]: true,
              "mdc-layout-grid": true,
              "mdc-layout-grid--fixed-column-width": fixedColumnWidth,
              ["mdc-layout-grid--align-" + align]: align != null,
            })
          ),
        },
        escape_object(exclude($$restProps, ["innerGrid$"])),
      ],
      {}
    )}${add_attribute("this", element, 0)}>${validate_component(
      InnerGrid,
      "InnerGrid"
    ).$$render(
      $$result,
      Object.assign(prefixFilter($$restProps, "innerGrid$")),
      {},
      {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        },
      }
    )}
</div>`;
  }
);
const Cell$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "align",
    "order",
    "span",
    "spanDevices",
    "getElement",
  ]);
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { align = void 0 } = $$props;
  let { order = void 0 } = $$props;
  let { span = void 0 } = $$props;
  let { spanDevices = {} } = $$props;
  let element;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.order === void 0 && $$bindings.order && order !== void 0)
    $$bindings.order(order);
  if ($$props.span === void 0 && $$bindings.span && span !== void 0)
    $$bindings.span(span);
  if (
    $$props.spanDevices === void 0 &&
    $$bindings.spanDevices &&
    spanDevices !== void 0
  )
    $$bindings.spanDevices(spanDevices);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(
          classMap({
            [className]: true,
            "mdc-layout-grid__cell": true,
            ["mdc-layout-grid__cell--align-" + align]: align != null,
            ["mdc-layout-grid__cell--order-" + order]: order != null,
            ["mdc-layout-grid__cell--span-" + span]: span != null,
            ...Object.fromEntries(
              Object.entries(spanDevices).map(([device, span2]) => [
                `mdc-layout-grid__cell--span-${span2}-${device}`,
                true,
              ])
            ),
          })
        ),
      },
      escape_object($$restProps),
    ],
    {}
  )}${add_attribute("this", element, 0)}>${
    slots.default ? slots.default({}) : ``
  }
</div>`;
});
const Cell = Cell$1;
var pillLogo_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
  `.svg-holder.svelte-f27m43{position:relative;width:100%;display:block;height:var(--width, 3em)}.pill-icon.svelte-f27m43{background-image:url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg xmlns:dc='http://purl.org/dc/elements/1.1/' xmlns:cc='http://creativecommons.org/ns%23' xmlns:rdf='http://www.w3.org/1999/02/22-rdf-syntax-ns%23' xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' id='svg639' version='1.1' viewBox='0 0 60 60' height='60mm' width='60mm'%3E%3Cdefs id='defs633'%3E%3ClinearGradient id='linearGradient3936'%3E%3Cstop style='stop-color:%23879d9d;stop-opacity:1' offset='0' id='stop3932' /%3E%3Cstop style='stop-color:%23ffffff;stop-opacity:1' offset='1' id='stop3934' /%3E%3C/linearGradient%3E%3ClinearGradient id='linearGradient3894'%3E%3Cstop style='stop-color:%23359082;stop-opacity:1' offset='0' id='stop3890' /%3E%3Cstop style='stop-color:%23ffffff;stop-opacity:1' offset='1' id='stop3892' /%3E%3C/linearGradient%3E%3ClinearGradient id='linearGradient3692'%3E%3Cstop id='stop3688' offset='0' style='stop-color:%23c2171b;stop-opacity:1;' /%3E%3Cstop id='stop3690' offset='1' style='stop-color:%23ffffff;stop-opacity:1' /%3E%3C/linearGradient%3E%3ClinearGradient id='linearGradient5143'%3E%3Cstop style='stop-color:%23cccccc;stop-opacity:1;' offset='0' id='stop5139' /%3E%3Cstop style='stop-color:%23ffffff;stop-opacity:1' offset='1' id='stop5141' /%3E%3C/linearGradient%3E%3ClinearGradient y2='157.3446' x2='121.51935' y1='160.5574' x1='107.60492' gradientTransform='matrix(-0.47942469,-0.8248045,0.87207026,-0.4534401,-26.02641,408.21645)' gradientUnits='userSpaceOnUse' id='linearGradient745' xlink:href='%23linearGradient5143' /%3E%3ClinearGradient y2='157.3446' x2='121.51935' y1='160.5574' x1='107.60492' gradientTransform='matrix(-0.43425199,0.91624216,-0.89829378,-0.44292857,273.2437,150.12853)' gradientUnits='userSpaceOnUse' id='linearGradient749' xlink:href='%23linearGradient5143' /%3E%3ClinearGradient y2='350.61835' x2='374.28946' y1='329.03238' x1='351.22818' gradientUnits='userSpaceOnUse' id='linearGradient3696' xlink:href='%23linearGradient3692' /%3E%3ClinearGradient xlink:href='%23linearGradient3894' id='linearGradient3696-2' gradientUnits='userSpaceOnUse' x1='351.22818' y1='329.03238' x2='374.28946' y2='350.61835' /%3E%3ClinearGradient xlink:href='%23linearGradient3936' id='linearGradient3696-1' gradientUnits='userSpaceOnUse' x1='351.22818' y1='329.03238' x2='374.28946' y2='350.61835' /%3E%3ClinearGradient y2='350.61835' x2='374.28946' y1='329.03238' x1='351.22818' gradientUnits='userSpaceOnUse' id='linearGradient4045' xlink:href='%23linearGradient3936' /%3E%3ClinearGradient y2='350.61835' x2='374.28946' y1='329.03238' x1='351.22818' gradientUnits='userSpaceOnUse' id='linearGradient4047' xlink:href='%23linearGradient3894' /%3E%3ClinearGradient y2='350.61835' x2='374.28946' y1='329.03238' x1='351.22818' gradientUnits='userSpaceOnUse' id='linearGradient4049' xlink:href='%23linearGradient3692' /%3E%3C/defs%3E%3Cmetadata id='metadata636'%3E%3Crdf:RDF%3E%3Ccc:Work rdf:about=''%3E%3Cdc:format%3Eimage/svg+xml%3C/dc:format%3E%3Cdc:type rdf:resource='http://purl.org/dc/dcmitype/StillImage' /%3E%3Cdc:title%3E%3C/dc:title%3E%3C/cc:Work%3E%3C/rdf:RDF%3E%3C/metadata%3E%3Cg id='layer1'%3E%3Cg id='g743' style='display:inline' transform='matrix(0.50000001,0,0,0.50000001,-12.994171,-72.494965)'%3E%3Cg transform='rotate(-3.5382685,205.69376,1557.7399)' id='g4043'%3E%3Cellipse id='ellipse725-5' cx='174.83798' cy='201.34293' rx='25.955479' ry='26.880892' style='display:inline;fill:%232885b9;fill-opacity:1;stroke:none;stroke-width:0.256505' /%3E%3Cg style='display:inline' id='g2852-6-2-6-3-7-3' transform='matrix(-0.59511076,0.10261028,-0.12258595,-0.53967428,438.15551,312.19224)'%3E%3Cpath d='m 316.83973,318.56604 c -8.547,9.2 -8.02,23.588 1.173,32.13 l 1.95,1.811 c 9.193,8.542 23.582,8.014 32.129,-1.184 l 50.205,-54.032 c 8.547,-9.199 8.018,-23.585 -1.176,-32.128 l -1.95,-1.812 c -9.191,-8.541 -23.579,-8.013 -32.127,1.183 l -50.204,54.032' style='fill:url(%23linearGradient4045);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1205-5-1-8-8-6-5' /%3E%3Cpath d='m 367.04373,264.53404 c 8.548,-9.196 22.936,-9.724 32.127,-1.183 l 1.95,1.812 c 9.194,8.543 9.723,22.929 1.176,32.128 l -25.102,27.017 c -10.82885,-1.02899 -24.23432,-12.47937 -30.052,-27.889 -1.73367,-1.62267 -3.46733,-3.24533 -5.201,-4.868 l 25.102,-27.017' style='fill:%23f9f9f9;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1207-5-3-9-5-2-2' /%3E%3Cpath d='m 322.04073,323.43404 c -11.205,12.49 -7.728,22.829 1.367,31.699 -1.205,-0.754 -2.367,-1.622 -3.445,-2.626 l -1.95,-1.811 c -9.193,-8.542 -9.72,-22.93 -1.173,-32.13 l 25.102,-27.015 5.201,4.868 -25.102,27.015' style='fill:%23677878;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1209-8-9-1-8-7-2' /%3E%3Cpath d='m 399.17073,263.35104 1.95,1.812 c 0.543,0.505 1.049,1.03 1.53,1.57 0.476,0.54 0.923,1.103 1.343,1.674 -8.492,-7.836 -18.947,-11.092 -31.75,0.996 l -25.101,27.016 -5.201,-4.868 25.102,-27.017 c 8.548,-9.196 22.936,-9.724 32.127,-1.183' style='fill:%23cccccc;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1213-1-7-4-9-0-6' /%3E%3C/g%3E%3Cg style='display:inline' id='g2852-6-2-6-3-7-4' transform='matrix(0.3720081,-0.47570544,-0.41741603,-0.3633724,147.37141,486.23053)'%3E%3Cpath d='m 316.83973,318.56604 c -8.547,9.2 -8.02,23.588 1.173,32.13 l 1.95,1.811 c 9.193,8.542 23.582,8.014 32.129,-1.184 l 50.205,-54.032 c 8.547,-9.199 8.018,-23.585 -1.176,-32.128 l -1.95,-1.812 c -9.191,-8.541 -23.579,-8.013 -32.127,1.183 l -50.204,54.032' style='fill:url(%23linearGradient4047);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1205-5-1-8-8-6-1' /%3E%3Cpath d='m 367.04373,264.53404 c 8.548,-9.196 22.936,-9.724 32.127,-1.183 l 1.95,1.812 c 9.194,8.543 9.723,22.929 1.176,32.128 l -25.102,27.017 c -10.82885,-1.02899 -24.23432,-12.47937 -30.052,-27.889 -1.73367,-1.62267 -3.46733,-3.24533 -5.201,-4.868 l 25.102,-27.017' style='fill:%23f9f9f9;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1207-5-3-9-5-2-3' /%3E%3Cpath d='m 322.04073,323.43404 c -11.205,12.49 -7.728,22.829 1.367,31.699 -1.205,-0.754 -2.367,-1.622 -3.445,-2.626 l -1.95,-1.811 c -9.193,-8.542 -9.72,-22.93 -1.173,-32.13 l 25.102,-27.015 5.201,4.868 -25.102,27.015' style='fill:%232b766b;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1209-8-9-1-8-7-7' /%3E%3Cpath d='m 399.17073,263.35104 1.95,1.812 c 0.543,0.505 1.049,1.03 1.53,1.57 0.476,0.54 0.923,1.103 1.343,1.674 -8.492,-7.836 -18.947,-11.092 -31.75,0.996 l -25.101,27.016 -5.201,-4.868 25.102,-27.017 c 8.548,-9.196 22.936,-9.724 32.127,-1.183' style='fill:%23cccccc;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' id='path1213-1-7-4-9-0-8' /%3E%3C/g%3E%3Cpath d='m 161.88685,210.9724 c -3.95243,-7.1874 -1.2827,-16.91642 5.95872,-21.7246 l 1.53631,-1.02014 c 7.24329,-4.80987 16.32386,-2.88515 20.27835,4.30206 l 6.89272,12.68635 c -2.89874,7.09636 -14.65529,19.66391 -25.47648,21.12241 -1.37317,0.90512 1.37316,-0.9051 0,0 l -9.18962,-15.36608' style='display:inline;fill:%232885b9;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.0671588' id='path1207-5-3-9-5-2-21' /%3E%3Cg transform='matrix(0.17929705,-0.57666131,0.5363767,0.13629261,-43.700486,384.98943)' id='g2852-6-2-6-3-7' style='display:inline'%3E%3Cpath id='path1205-5-1-8-8-6' style='fill:url(%23linearGradient4049);fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' d='m 316.83973,318.56604 c -8.547,9.2 -8.02,23.588 1.173,32.13 l 1.95,1.811 c 9.193,8.542 23.582,8.014 32.129,-1.184 l 50.205,-54.032 c 8.547,-9.199 8.018,-23.585 -1.176,-32.128 l -1.95,-1.812 c -9.191,-8.541 -23.579,-8.013 -32.127,1.183 l -50.204,54.032' /%3E%3Cpath id='path1207-5-3-9-5-2' style='fill:%23f9f9f9;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' d='m 367.04373,264.53404 c 8.548,-9.196 22.936,-9.724 32.127,-1.183 l 1.95,1.812 c 9.194,8.543 9.723,22.929 1.176,32.128 l -25.102,27.017 c -10.82885,-1.02899 -24.23432,-12.47937 -30.052,-27.889 -1.73367,-1.62267 -3.46733,-3.24533 -5.201,-4.868 l 25.102,-27.017' /%3E%3Cpath id='path1209-8-9-1-8-7' style='fill:%23891013;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' d='m 322.04073,323.43404 c -11.205,12.49 -7.728,22.829 1.367,31.699 -1.205,-0.754 -2.367,-1.622 -3.445,-2.626 l -1.95,-1.811 c -9.193,-8.542 -9.72,-22.93 -1.173,-32.13 l 25.102,-27.015 5.201,4.868 -25.102,27.015' /%3E%3Cpath id='path1213-1-7-4-9-0' style='fill:%23cccccc;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.1' d='m 399.17073,263.35104 1.95,1.812 c 0.543,0.505 1.049,1.03 1.53,1.57 0.476,0.54 0.923,1.103 1.343,1.674 -8.492,-7.836 -18.947,-11.092 -31.75,0.996 l -25.101,27.016 -5.201,-4.868 25.102,-27.017 c 8.548,-9.196 22.936,-9.724 32.127,-1.183' /%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");background-repeat:no-repeat no-repeat;background-position:center center;background-size:contain}`)();
export {
  A,
  Button as B,
  Cell as C,
  Div as D,
  Graphic as G,
  H1 as H,
  Item as I,
  LayoutGrid as L,
  PrimaryText as P,
  Ripple as R,
  Span as S,
  Text as T,
  classAdderBuilder as a,
  List as b,
  classMap as c,
  SecondaryText as d,
  exclude as e,
  forwardEventsBuilder as f,
  dispatch as g,
  Span$1 as h,
  H2 as i,
  Separator as j,
  Subheader as k,
  H6 as l,
  prefixFilter as p,
  readable as r,
  writable as w,
};
