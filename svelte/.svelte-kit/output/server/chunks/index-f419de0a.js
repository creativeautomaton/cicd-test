import { c as create_ssr_component, h as get_current_component, k as add_attribute, g as compute_rest_props, i as spread, r as escape_attribute_value, j as escape_object, v as validate_component } from "./index-5d194541.js";
import { f as forwardEventsBuilder, b as classMap } from "./drawer.svelte_svelte_type_style_lang-d9b42fa3.js";
function exclude(obj, keys) {
  let names = Object.getOwnPropertyNames(obj);
  const newObj = {};
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const cashIndex = name.indexOf("$");
    if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
      continue;
    }
    if (keys.indexOf(name) !== -1) {
      continue;
    }
    newObj[name] = obj[name];
  }
  return newObj;
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
const InnerGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${add_attribute("class", classMap({
    [className]: true,
    "mdc-layout-grid__inner": true
  }), 0)}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const LayoutGrid = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "fixedColumnWidth", "align", "getElement"]);
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
  if ($$props.fixedColumnWidth === void 0 && $$bindings.fixedColumnWidth && fixedColumnWidth !== void 0)
    $$bindings.fixedColumnWidth(fixedColumnWidth);
  if ($$props.align === void 0 && $$bindings.align && align !== void 0)
    $$bindings.align(align);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-layout-grid": true,
        "mdc-layout-grid--fixed-column-width": fixedColumnWidth,
        ["mdc-layout-grid--align-" + align]: align != null
      }))
    },
    escape_object(exclude($$restProps, ["innerGrid$"]))
  ], {})}${add_attribute("this", element, 0)}>${validate_component(InnerGrid, "InnerGrid").$$render($$result, Object.assign(prefixFilter($$restProps, "innerGrid$")), {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}
</div>`;
});
const Cell$1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["use", "class", "align", "order", "span", "spanDevices", "getElement"]);
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
  if ($$props.spanDevices === void 0 && $$bindings.spanDevices && spanDevices !== void 0)
    $$bindings.spanDevices(spanDevices);
  if ($$props.getElement === void 0 && $$bindings.getElement && getElement !== void 0)
    $$bindings.getElement(getElement);
  return `<div${spread([
    {
      class: escape_attribute_value(classMap({
        [className]: true,
        "mdc-layout-grid__cell": true,
        ["mdc-layout-grid__cell--align-" + align]: align != null,
        ["mdc-layout-grid__cell--order-" + order]: order != null,
        ["mdc-layout-grid__cell--span-" + span]: span != null,
        ...Object.fromEntries(Object.entries(spanDevices).map(([device, span2]) => [`mdc-layout-grid__cell--span-${span2}-${device}`, true]))
      }))
    },
    escape_object($$restProps)
  ], {})}${add_attribute("this", element, 0)}>${slots.default ? slots.default({}) : ``}
</div>`;
});
const Cell = Cell$1;
export { Cell as C, LayoutGrid as L };
