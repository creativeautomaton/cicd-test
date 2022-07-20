import {
  c as create_ssr_component,
  a as subscribe,
  s as setContext,
  o as onDestroy,
  b as set_store_value,
  v as validate_component,
  d as compute_rest_props,
  g as get_current_component,
  e as getContext,
  f as spread,
  h as escape_attribute_value,
  i as escape_object,
  j as add_attribute,
  k as escape,
  l as globals,
  n as compute_slots,
  p as each,
  q as createEventDispatcher,
} from "../../chunks/index-4b7b92f5.js";
import "@material/icon-button";
import "@material/ripple";
import "@material/dom";
import {
  w as writable,
  L as LayoutGrid,
  C as Cell,
  f as forwardEventsBuilder,
  c as classMap,
  a as classAdderBuilder,
  D as Div,
  S as Span,
  e as exclude,
  p as prefixFilter,
  b as List,
  I as Item,
  T as Text,
  P as PrimaryText,
  d as SecondaryText,
} from "../../chunks/pill-logo.svelte_svelte_type_style_lang-e6f75325.js";
import {
  P as Pill_logo,
  C as Card,
} from "../../chunks/ActionIcons-5afdc96c.js";
import "@material/list";
import "@material/banner";
import "@material/textfield";
import "@material/floating-label";
import "@material/line-ripple";
import "@material/notched-outline";
const ContextFragment = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $storeValue, $$unsubscribe_storeValue;
    let { key } = $$props;
    let { value } = $$props;
    const storeValue = writable(value);
    $$unsubscribe_storeValue = subscribe(
      storeValue,
      (value2) => ($storeValue = value2)
    );
    setContext(key, storeValue);
    onDestroy(() => {
      storeValue.set(void 0);
    });
    if ($$props.key === void 0 && $$bindings.key && key !== void 0)
      $$bindings.key(key);
    if ($$props.value === void 0 && $$bindings.value && value !== void 0)
      $$bindings.value(value);
    set_store_value(storeValue, ($storeValue = value), $storeValue);
    $$unsubscribe_storeValue();
    return `${slots.default ? slots.default({}) : ``}`;
  }
);
var logoHero_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
  ".container.svelte-1ar9nkk{padding:2em 0em 0em 0em}.lead.svelte-1ar9nkk{max-width:650px;font-size:1.5em;font-weight:300;line-height:1.2;display:block;padding:1em 0em}")();
var colophon_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
  ".colophon.svelte-eqpud5.svelte-eqpud5{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-eqpud5.svelte-eqpud5{width:auto;display:block;padding:5px 1em}.logo.svelte-eqpud5 img.svelte-eqpud5{width:250px;display:block}")();
const css$2 = {
  code: ".colophon.svelte-eqpud5.svelte-eqpud5{background-color:var(--mdc-theme-primary, #fff)}.logo.svelte-eqpud5.svelte-eqpud5{width:auto;display:block;padding:5px 1em}.logo.svelte-eqpud5 img.svelte-eqpud5{width:250px;display:block}",
  map: null,
};
const Colophon = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    $$result.css.add(css$2);
    return `<div class="${"colophon svelte-eqpud5"}">${validate_component(
      LayoutGrid,
      "LayoutGrid"
    ).$$render(
      $$result,
      {},
      {},
      {
        default: () => {
          return `${validate_component(Cell, "Cell").$$render(
            $$result,
            { span: 5 },
            {},
            {
              default: () => {
                return `<a href="${"https://liu.edu"}" target="${"_blank"}" class="${"logo svelte-eqpud5"}"><img src="${"https://secureservercdn.net/198.71.233.194/509.251.myftpupload.com/wp-content/uploads/2022/06/Screen-Shot-2022-06-07-at-3.54.02-PM.png"}" class="${"svelte-eqpud5"}"></a>`;
              },
            }
          )}
    ${validate_component(Cell, "Cell").$$render($$result, { span: 2 }, {}, {})}
    ${validate_component(Cell, "Cell").$$render(
      $$result,
      { span: 5 },
      {},
      {
        default: () => {
          return `<small>Copyright \xA92022 -  All rights reserved. </small>`;
        },
      }
    )}
    `;
        },
      }
    )}
</div>`;
  }
);
const FloatingLabel = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "style",
      "for",
      "floatAbove",
      "required",
      "wrapped",
      "shake",
      "float",
      "setRequired",
      "getWidth",
      "getElement",
    ]);
    var _a;
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { for: forId = void 0 } = $$props;
    let { floatAbove = false } = $$props;
    let { required = false } = $$props;
    let { wrapped = false } = $$props;
    let element;
    let instance;
    let internalClasses = {};
    let internalStyles = {};
    let inputProps =
      (_a = getContext("SMUI:generic:input:props")) !== null && _a !== void 0
        ? _a
        : {};
    function shake(shouldShake) {
      instance.shake(shouldShake);
    }
    function float(shouldFloat) {
      floatAbove = shouldFloat;
    }
    function setRequired(isRequired) {
      required = isRequired;
    }
    function getWidth() {
      return instance.getWidth();
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
    if ($$props.for === void 0 && $$bindings.for && forId !== void 0)
      $$bindings.for(forId);
    if (
      $$props.floatAbove === void 0 &&
      $$bindings.floatAbove &&
      floatAbove !== void 0
    )
      $$bindings.floatAbove(floatAbove);
    if (
      $$props.required === void 0 &&
      $$bindings.required &&
      required !== void 0
    )
      $$bindings.required(required);
    if ($$props.wrapped === void 0 && $$bindings.wrapped && wrapped !== void 0)
      $$bindings.wrapped(wrapped);
    if ($$props.shake === void 0 && $$bindings.shake && shake !== void 0)
      $$bindings.shake(shake);
    if ($$props.float === void 0 && $$bindings.float && float !== void 0)
      $$bindings.float(float);
    if (
      $$props.setRequired === void 0 &&
      $$bindings.setRequired &&
      setRequired !== void 0
    )
      $$bindings.setRequired(setRequired);
    if (
      $$props.getWidth === void 0 &&
      $$bindings.getWidth &&
      getWidth !== void 0
    )
      $$bindings.getWidth(getWidth);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    return `${
      wrapped
        ? `<span${spread(
            [
              {
                class: escape_attribute_value(
                  classMap({
                    [className]: true,
                    "mdc-floating-label": true,
                    "mdc-floating-label--float-above": floatAbove,
                    "mdc-floating-label--required": required,
                    ...internalClasses,
                  })
                ),
              },
              {
                style: escape_attribute_value(
                  Object.entries(internalStyles)
                    .map(([name, value]) => `${name}: ${value};`)
                    .concat([style])
                    .join(" ")
                ),
              },
              escape_object($$restProps),
            ],
            {}
          )}${add_attribute("this", element, 0)}>${
            slots.default ? slots.default({}) : ``
          }</span>`
        : `<label${spread(
            [
              {
                class: escape_attribute_value(
                  classMap({
                    [className]: true,
                    "mdc-floating-label": true,
                    "mdc-floating-label--float-above": floatAbove,
                    "mdc-floating-label--required": required,
                    ...internalClasses,
                  })
                ),
              },
              {
                style: escape_attribute_value(
                  Object.entries(internalStyles)
                    .map(([name, value]) => `${name}: ${value};`)
                    .concat([style])
                    .join(" ")
                ),
              },
              {
                for: escape_attribute_value(
                  forId || (inputProps ? inputProps.id : void 0)
                ),
              },
              escape_object($$restProps),
            ],
            {}
          )}${add_attribute("this", element, 0)}>${
            slots.default ? slots.default({}) : ``
          }</label>`
    }`;
  }
);
const LineRipple = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "style",
      "active",
      "activate",
      "deactivate",
      "setRippleCenter",
      "getElement",
    ]);
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { active = false } = $$props;
    let element;
    let instance;
    let internalClasses = {};
    let internalStyles = {};
    function activate() {
      instance.activate();
    }
    function deactivate() {
      instance.deactivate();
    }
    function setRippleCenter(xCoordinate) {
      instance.setRippleCenter(xCoordinate);
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
    if ($$props.active === void 0 && $$bindings.active && active !== void 0)
      $$bindings.active(active);
    if (
      $$props.activate === void 0 &&
      $$bindings.activate &&
      activate !== void 0
    )
      $$bindings.activate(activate);
    if (
      $$props.deactivate === void 0 &&
      $$bindings.deactivate &&
      deactivate !== void 0
    )
      $$bindings.deactivate(deactivate);
    if (
      $$props.setRippleCenter === void 0 &&
      $$bindings.setRippleCenter &&
      setRippleCenter !== void 0
    )
      $$bindings.setRippleCenter(setRippleCenter);
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
              "mdc-line-ripple": true,
              "mdc-line-ripple--active": active,
              ...internalClasses,
            })
          ),
        },
        {
          style: escape_attribute_value(
            Object.entries(internalStyles)
              .map(([name, value]) => `${name}: ${value};`)
              .concat([style])
              .join(" ")
          ),
        },
        escape_object($$restProps),
      ],
      {}
    )}${add_attribute("this", element, 0)}></div>`;
  }
);
const NotchedOutline = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "notched",
      "noLabel",
      "notch",
      "closeNotch",
      "getElement",
    ]);
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { notched = false } = $$props;
    let { noLabel = false } = $$props;
    let element;
    let instance;
    let internalClasses = {};
    let notchStyles = {};
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        internalClasses[className2] = false;
      }
    }
    function notch(notchWidth) {
      instance.notch(notchWidth);
    }
    function closeNotch() {
      instance.closeNotch();
    }
    function getElement() {
      return element;
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if ($$props.notched === void 0 && $$bindings.notched && notched !== void 0)
      $$bindings.notched(notched);
    if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
      $$bindings.noLabel(noLabel);
    if ($$props.notch === void 0 && $$bindings.notch && notch !== void 0)
      $$bindings.notch(notch);
    if (
      $$props.closeNotch === void 0 &&
      $$bindings.closeNotch &&
      closeNotch !== void 0
    )
      $$bindings.closeNotch(closeNotch);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    {
      {
        removeClass("mdc-notched-outline--upgraded");
      }
    }
    return `<div${spread(
      [
        {
          class: escape_attribute_value(
            classMap({
              [className]: true,
              "mdc-notched-outline": true,
              "mdc-notched-outline--notched": notched,
              "mdc-notched-outline--no-label": noLabel,
              ...internalClasses,
            })
          ),
        },
        escape_object($$restProps),
      ],
      {}
    )}${add_attribute(
      "this",
      element,
      0
    )}><div class="${"mdc-notched-outline__leading"}"></div>
  ${
    !noLabel
      ? `<div class="${"mdc-notched-outline__notch"}"${add_attribute(
          "style",
          Object.entries(notchStyles)
            .map(([name, value]) => `${name}: ${value};`)
            .join(" "),
          0
        )}>${slots.default ? slots.default({}) : ``}</div>`
      : ``
  }
  <div class="${"mdc-notched-outline__trailing"}"></div>
</div>`;
  }
);
var HelperLine = classAdderBuilder({
  class: "mdc-text-field-helper-line",
  component: Div,
});
var Prefix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--prefix",
  component: Span,
});
var Suffix = classAdderBuilder({
  class: "mdc-text-field__affix mdc-text-field__affix--suffix",
  component: Span,
});
const Input = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "type",
    "placeholder",
    "value",
    "files",
    "dirty",
    "invalid",
    "updateInvalid",
    "emptyValueNull",
    "emptyValueUndefined",
    "getAttr",
    "addAttr",
    "removeAttr",
    "focus",
    "blur",
    "getElement",
  ]);
  forwardEventsBuilder(get_current_component());
  let uninitializedValue = () => {};
  function isUninitializedValue(value2) {
    return value2 === uninitializedValue;
  }
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { type = "text" } = $$props;
  let { placeholder = " " } = $$props;
  let { value = uninitializedValue } = $$props;
  const valueUninitialized = isUninitializedValue(value);
  if (valueUninitialized) {
    value = "";
  }
  let { files = null } = $$props;
  let { dirty = false } = $$props;
  let { invalid = false } = $$props;
  let { updateInvalid = true } = $$props;
  let { emptyValueNull = value === null } = $$props;
  if (valueUninitialized && emptyValueNull) {
    value = null;
  }
  let { emptyValueUndefined = value === void 0 } = $$props;
  if (valueUninitialized && emptyValueUndefined) {
    value = void 0;
  }
  let element;
  let internalAttrs = {};
  let valueProp = {};
  function getAttr(name) {
    var _a;
    return name in internalAttrs
      ? (_a = internalAttrs[name]) !== null && _a !== void 0
        ? _a
        : null
      : getElement().getAttribute(name);
  }
  function addAttr(name, value2) {
    if (internalAttrs[name] !== value2) {
      internalAttrs[name] = value2;
    }
  }
  function removeAttr(name) {
    if (!(name in internalAttrs) || internalAttrs[name] != null) {
      internalAttrs[name] = void 0;
    }
  }
  function focus() {
    getElement().focus();
  }
  function blur() {
    getElement().blur();
  }
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if (
    $$props.placeholder === void 0 &&
    $$bindings.placeholder &&
    placeholder !== void 0
  )
    $$bindings.placeholder(placeholder);
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.files === void 0 && $$bindings.files && files !== void 0)
    $$bindings.files(files);
  if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
    $$bindings.dirty(dirty);
  if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
    $$bindings.invalid(invalid);
  if (
    $$props.updateInvalid === void 0 &&
    $$bindings.updateInvalid &&
    updateInvalid !== void 0
  )
    $$bindings.updateInvalid(updateInvalid);
  if (
    $$props.emptyValueNull === void 0 &&
    $$bindings.emptyValueNull &&
    emptyValueNull !== void 0
  )
    $$bindings.emptyValueNull(emptyValueNull);
  if (
    $$props.emptyValueUndefined === void 0 &&
    $$bindings.emptyValueUndefined &&
    emptyValueUndefined !== void 0
  )
    $$bindings.emptyValueUndefined(emptyValueUndefined);
  if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
    $$bindings.getAttr(getAttr);
  if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
    $$bindings.addAttr(addAttr);
  if (
    $$props.removeAttr === void 0 &&
    $$bindings.removeAttr &&
    removeAttr !== void 0
  )
    $$bindings.removeAttr(removeAttr);
  if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
    $$bindings.focus(focus);
  if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
    $$bindings.blur(blur);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  {
    if (type === "file") {
      delete valueProp.value;
      valueProp = valueProp;
    } else {
      valueProp.value = value == null ? "" : value;
    }
  }
  return `<input${spread(
    [
      {
        class: escape_attribute_value(
          classMap({
            [className]: true,
            "mdc-text-field__input": true,
          })
        ),
      },
      { type: escape_attribute_value(type) },
      {
        placeholder: escape_attribute_value(placeholder),
      },
      escape_object(valueProp),
      escape_object(internalAttrs),
      escape_object($$restProps),
    ],
    {}
  )}${add_attribute("this", element, 0)}>`;
});
const Textarea = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "style",
      "value",
      "dirty",
      "invalid",
      "updateInvalid",
      "resizable",
      "getAttr",
      "addAttr",
      "removeAttr",
      "focus",
      "blur",
      "getElement",
    ]);
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { value = "" } = $$props;
    let { dirty = false } = $$props;
    let { invalid = false } = $$props;
    let { updateInvalid = true } = $$props;
    let { resizable = true } = $$props;
    let element;
    let internalAttrs = {};
    function getAttr(name) {
      var _a;
      return name in internalAttrs
        ? (_a = internalAttrs[name]) !== null && _a !== void 0
          ? _a
          : null
        : getElement().getAttribute(name);
    }
    function addAttr(name, value2) {
      if (internalAttrs[name] !== value2) {
        internalAttrs[name] = value2;
      }
    }
    function removeAttr(name) {
      if (!(name in internalAttrs) || internalAttrs[name] != null) {
        internalAttrs[name] = void 0;
      }
    }
    function focus() {
      getElement().focus();
    }
    function blur() {
      getElement().blur();
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
    if ($$props.value === void 0 && $$bindings.value && value !== void 0)
      $$bindings.value(value);
    if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
      $$bindings.dirty(dirty);
    if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
      $$bindings.invalid(invalid);
    if (
      $$props.updateInvalid === void 0 &&
      $$bindings.updateInvalid &&
      updateInvalid !== void 0
    )
      $$bindings.updateInvalid(updateInvalid);
    if (
      $$props.resizable === void 0 &&
      $$bindings.resizable &&
      resizable !== void 0
    )
      $$bindings.resizable(resizable);
    if ($$props.getAttr === void 0 && $$bindings.getAttr && getAttr !== void 0)
      $$bindings.getAttr(getAttr);
    if ($$props.addAttr === void 0 && $$bindings.addAttr && addAttr !== void 0)
      $$bindings.addAttr(addAttr);
    if (
      $$props.removeAttr === void 0 &&
      $$bindings.removeAttr &&
      removeAttr !== void 0
    )
      $$bindings.removeAttr(removeAttr);
    if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
      $$bindings.focus(focus);
    if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
      $$bindings.blur(blur);
    if (
      $$props.getElement === void 0 &&
      $$bindings.getElement &&
      getElement !== void 0
    )
      $$bindings.getElement(getElement);
    return `<textarea${spread(
      [
        {
          class: escape_attribute_value(
            classMap({
              [className]: true,
              "mdc-text-field__input": true,
            })
          ),
        },
        {
          style: escape_attribute_value(
            `${resizable ? "" : "resize: none; "}${style}`
          ),
        },
        escape_object(internalAttrs),
        escape_object($$restProps),
      ],
      {}
    )}${add_attribute("this", element, 0)}>${value || ""}</textarea>`;
  }
);
const { Object: Object_1 } = globals;
const Textfield = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "style",
      "ripple",
      "disabled",
      "required",
      "textarea",
      "variant",
      "noLabel",
      "label",
      "type",
      "value",
      "files",
      "invalid",
      "updateInvalid",
      "dirty",
      "prefix",
      "suffix",
      "validateOnValueChange",
      "useNativeValidation",
      "withLeadingIcon",
      "withTrailingIcon",
      "input",
      "floatingLabel",
      "lineRipple",
      "notchedOutline",
      "focus",
      "blur",
      "layout",
      "getElement",
    ]);
    let $$slots = compute_slots(slots);
    forwardEventsBuilder(get_current_component());
    let uninitializedValue = () => {};
    function isUninitializedValue(value2) {
      return value2 === uninitializedValue;
    }
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { ripple = true } = $$props;
    let { disabled = false } = $$props;
    let { required = false } = $$props;
    let { textarea = false } = $$props;
    let { variant = textarea ? "outlined" : "standard" } = $$props;
    let { noLabel = false } = $$props;
    let { label = void 0 } = $$props;
    let { type = "text" } = $$props;
    let {
      value = $$restProps.input$emptyValueUndefined
        ? void 0
        : uninitializedValue,
    } = $$props;
    let { files = uninitializedValue } = $$props;
    const valued = !isUninitializedValue(value) || !isUninitializedValue(files);
    if (isUninitializedValue(value)) {
      value = void 0;
    }
    if (isUninitializedValue(files)) {
      files = null;
    }
    let { invalid = uninitializedValue } = $$props;
    let { updateInvalid = isUninitializedValue(invalid) } = $$props;
    if (isUninitializedValue(invalid)) {
      invalid = false;
    }
    let { dirty = false } = $$props;
    let { prefix = void 0 } = $$props;
    let { suffix = void 0 } = $$props;
    let { validateOnValueChange = updateInvalid } = $$props;
    let { useNativeValidation = updateInvalid } = $$props;
    let { withLeadingIcon = uninitializedValue } = $$props;
    let { withTrailingIcon = uninitializedValue } = $$props;
    let { input = void 0 } = $$props;
    let { floatingLabel = void 0 } = $$props;
    let { lineRipple = void 0 } = $$props;
    let { notchedOutline = void 0 } = $$props;
    let element;
    let internalClasses = {};
    let internalStyles = {};
    let helperId = void 0;
    let addLayoutListener = getContext("SMUI:addLayoutListener");
    let removeLayoutListener;
    new Promise((resolve) => resolve);
    if (addLayoutListener) {
      removeLayoutListener = addLayoutListener(layout);
    }
    onDestroy(() => {
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    });
    function focus() {
      input === null || input === void 0 ? void 0 : input.focus();
    }
    function blur() {
      input === null || input === void 0 ? void 0 : input.blur();
    }
    function layout() {}
    function getElement() {
      return element;
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if ($$props.style === void 0 && $$bindings.style && style !== void 0)
      $$bindings.style(style);
    if ($$props.ripple === void 0 && $$bindings.ripple && ripple !== void 0)
      $$bindings.ripple(ripple);
    if (
      $$props.disabled === void 0 &&
      $$bindings.disabled &&
      disabled !== void 0
    )
      $$bindings.disabled(disabled);
    if (
      $$props.required === void 0 &&
      $$bindings.required &&
      required !== void 0
    )
      $$bindings.required(required);
    if (
      $$props.textarea === void 0 &&
      $$bindings.textarea &&
      textarea !== void 0
    )
      $$bindings.textarea(textarea);
    if ($$props.variant === void 0 && $$bindings.variant && variant !== void 0)
      $$bindings.variant(variant);
    if ($$props.noLabel === void 0 && $$bindings.noLabel && noLabel !== void 0)
      $$bindings.noLabel(noLabel);
    if ($$props.label === void 0 && $$bindings.label && label !== void 0)
      $$bindings.label(label);
    if ($$props.type === void 0 && $$bindings.type && type !== void 0)
      $$bindings.type(type);
    if ($$props.value === void 0 && $$bindings.value && value !== void 0)
      $$bindings.value(value);
    if ($$props.files === void 0 && $$bindings.files && files !== void 0)
      $$bindings.files(files);
    if ($$props.invalid === void 0 && $$bindings.invalid && invalid !== void 0)
      $$bindings.invalid(invalid);
    if (
      $$props.updateInvalid === void 0 &&
      $$bindings.updateInvalid &&
      updateInvalid !== void 0
    )
      $$bindings.updateInvalid(updateInvalid);
    if ($$props.dirty === void 0 && $$bindings.dirty && dirty !== void 0)
      $$bindings.dirty(dirty);
    if ($$props.prefix === void 0 && $$bindings.prefix && prefix !== void 0)
      $$bindings.prefix(prefix);
    if ($$props.suffix === void 0 && $$bindings.suffix && suffix !== void 0)
      $$bindings.suffix(suffix);
    if (
      $$props.validateOnValueChange === void 0 &&
      $$bindings.validateOnValueChange &&
      validateOnValueChange !== void 0
    )
      $$bindings.validateOnValueChange(validateOnValueChange);
    if (
      $$props.useNativeValidation === void 0 &&
      $$bindings.useNativeValidation &&
      useNativeValidation !== void 0
    )
      $$bindings.useNativeValidation(useNativeValidation);
    if (
      $$props.withLeadingIcon === void 0 &&
      $$bindings.withLeadingIcon &&
      withLeadingIcon !== void 0
    )
      $$bindings.withLeadingIcon(withLeadingIcon);
    if (
      $$props.withTrailingIcon === void 0 &&
      $$bindings.withTrailingIcon &&
      withTrailingIcon !== void 0
    )
      $$bindings.withTrailingIcon(withTrailingIcon);
    if ($$props.input === void 0 && $$bindings.input && input !== void 0)
      $$bindings.input(input);
    if (
      $$props.floatingLabel === void 0 &&
      $$bindings.floatingLabel &&
      floatingLabel !== void 0
    )
      $$bindings.floatingLabel(floatingLabel);
    if (
      $$props.lineRipple === void 0 &&
      $$bindings.lineRipple &&
      lineRipple !== void 0
    )
      $$bindings.lineRipple(lineRipple);
    if (
      $$props.notchedOutline === void 0 &&
      $$bindings.notchedOutline &&
      notchedOutline !== void 0
    )
      $$bindings.notchedOutline(notchedOutline);
    if ($$props.focus === void 0 && $$bindings.focus && focus !== void 0)
      $$bindings.focus(focus);
    if ($$props.blur === void 0 && $$bindings.blur && blur !== void 0)
      $$bindings.blur(blur);
    if ($$props.layout === void 0 && $$bindings.layout && layout !== void 0)
      $$bindings.layout(layout);
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
      input && input.getElement();
      $$rendered = `${
        valued
          ? `<label${spread(
              [
                {
                  class: escape_attribute_value(
                    classMap({
                      [className]: true,
                      "mdc-text-field": true,
                      "mdc-text-field--disabled": disabled,
                      "mdc-text-field--textarea": textarea,
                      "mdc-text-field--filled": variant === "filled",
                      "mdc-text-field--outlined": variant === "outlined",
                      "smui-text-field--standard":
                        variant === "standard" && !textarea,
                      "mdc-text-field--no-label":
                        noLabel || (label == null && !$$slots.label),
                      "mdc-text-field--label-floating":
                        value != null && value !== "",
                      "mdc-text-field--with-leading-icon": isUninitializedValue(
                        withLeadingIcon
                      )
                        ? $$slots.leadingIcon
                        : withLeadingIcon,
                      "mdc-text-field--with-trailing-icon":
                        isUninitializedValue(withTrailingIcon)
                          ? $$slots.trailingIcon
                          : withTrailingIcon,
                      "mdc-text-field--with-internal-counter":
                        textarea && $$slots.internalCounter,
                      "mdc-text-field--invalid": invalid,
                      ...internalClasses,
                    })
                  ),
                },
                {
                  style: escape_attribute_value(
                    Object.entries(internalStyles)
                      .map(([name, value2]) => `${name}: ${value2};`)
                      .concat([style])
                      .join(" ")
                  ),
                },
                {
                  for: escape_attribute_value(void 0),
                },
                escape_object(
                  exclude($$restProps, [
                    "input$",
                    "label$",
                    "ripple$",
                    "outline$",
                    "helperLine$",
                  ])
                ),
              ],
              {}
            )}${add_attribute("this", element, 0)}>${
              !textarea && variant !== "outlined"
                ? `${
                    variant === "filled"
                      ? `<span class="${"mdc-text-field__ripple"}"></span>`
                      : ``
                  }
      ${
        !noLabel && (label != null || $$slots.label)
          ? `${validate_component(FloatingLabel, "FloatingLabel").$$render(
              $$result,
              Object_1.assign(
                {
                  floatAbove: value != null && value !== "",
                },
                { required },
                { wrapped: true },
                prefixFilter($$restProps, "label$"),
                { this: floatingLabel }
              ),
              {
                this: ($$value) => {
                  floatingLabel = $$value;
                  $$settled = false;
                },
              },
              {
                default: () => {
                  return `${escape(label == null ? "" : label)}${
                    slots.label ? slots.label({}) : ``
                  }`;
                },
              }
            )}`
          : ``
      }`
                : ``
            }
    ${
      textarea || variant === "outlined"
        ? `${validate_component(NotchedOutline, "NotchedOutline").$$render(
            $$result,
            Object_1.assign(
              {
                noLabel: noLabel || (label == null && !$$slots.label),
              },
              prefixFilter($$restProps, "outline$"),
              { this: notchedOutline }
            ),
            {
              this: ($$value) => {
                notchedOutline = $$value;
                $$settled = false;
              },
            },
            {
              default: () => {
                return `${
                  !noLabel && (label != null || $$slots.label)
                    ? `${validate_component(
                        FloatingLabel,
                        "FloatingLabel"
                      ).$$render(
                        $$result,
                        Object_1.assign(
                          {
                            floatAbove: value != null && value !== "",
                          },
                          { required },
                          { wrapped: true },
                          prefixFilter($$restProps, "label$"),
                          { this: floatingLabel }
                        ),
                        {
                          this: ($$value) => {
                            floatingLabel = $$value;
                            $$settled = false;
                          },
                        },
                        {
                          default: () => {
                            return `${escape(label == null ? "" : label)}${
                              slots.label ? slots.label({}) : ``
                            }`;
                          },
                        }
                      )}`
                    : ``
                }`;
              },
            }
          )}`
        : ``
    }
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true,
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        },
      }
    )}
    ${slots.default ? slots.default({}) : ``}
    ${
      textarea && typeof value === "string"
        ? `<span${add_attribute(
            "class",
            classMap({
              "mdc-text-field__resizer":
                !("input$resizable" in $$restProps) ||
                $$restProps.input$resizable,
            }),
            0
          )}>${validate_component(Textarea, "Textarea").$$render(
            $$result,
            Object_1.assign(
              { disabled },
              { required },
              { updateInvalid },
              { "aria-controls": helperId },
              { "aria-describedby": helperId },
              prefixFilter($$restProps, "input$"),
              { this: input },
              { value },
              { dirty },
              { invalid }
            ),
            {
              this: ($$value) => {
                input = $$value;
                $$settled = false;
              },
              value: ($$value) => {
                value = $$value;
                $$settled = false;
              },
              dirty: ($$value) => {
                dirty = $$value;
                $$settled = false;
              },
              invalid: ($$value) => {
                invalid = $$value;
                $$settled = false;
              },
            },
            {}
          )}
        ${slots.internalCounter ? slots.internalCounter({}) : ``}</span>`
        : `${slots.prefix ? slots.prefix({}) : ``}
      ${
        prefix != null
          ? `${validate_component(Prefix, "Prefix").$$render(
              $$result,
              {},
              {},
              {
                default: () => {
                  return `${escape(prefix)}`;
                },
              }
            )}`
          : ``
      }
      ${validate_component(Input, "Input").$$render(
        $$result,
        Object_1.assign(
          { type },
          { disabled },
          { required },
          { updateInvalid },
          { "aria-controls": helperId },
          { "aria-describedby": helperId },
          noLabel && label != null ? { placeholder: label } : {},
          prefixFilter($$restProps, "input$"),
          { this: input },
          { value },
          { files },
          { dirty },
          { invalid }
        ),
        {
          this: ($$value) => {
            input = $$value;
            $$settled = false;
          },
          value: ($$value) => {
            value = $$value;
            $$settled = false;
          },
          files: ($$value) => {
            files = $$value;
            $$settled = false;
          },
          dirty: ($$value) => {
            dirty = $$value;
            $$settled = false;
          },
          invalid: ($$value) => {
            invalid = $$value;
            $$settled = false;
          },
        },
        {}
      )}
      ${
        suffix != null
          ? `${validate_component(Suffix, "Suffix").$$render(
              $$result,
              {},
              {},
              {
                default: () => {
                  return `${escape(suffix)}`;
                },
              }
            )}`
          : ``
      }
      ${slots.suffix ? slots.suffix({}) : ``}`
    }
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false,
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        },
      }
    )}
    ${
      !textarea && variant !== "outlined" && ripple
        ? `${validate_component(LineRipple, "LineRipple").$$render(
            $$result,
            Object_1.assign(prefixFilter($$restProps, "ripple$"), {
              this: lineRipple,
            }),
            {
              this: ($$value) => {
                lineRipple = $$value;
                $$settled = false;
              },
            },
            {}
          )}`
        : ``
    }</label>`
          : `<div${spread(
              [
                {
                  class: escape_attribute_value(
                    classMap({
                      [className]: true,
                      "mdc-text-field": true,
                      "mdc-text-field--disabled": disabled,
                      "mdc-text-field--textarea": textarea,
                      "mdc-text-field--filled": variant === "filled",
                      "mdc-text-field--outlined": variant === "outlined",
                      "smui-text-field--standard":
                        variant === "standard" && !textarea,
                      "mdc-text-field--no-label": noLabel || !$$slots.label,
                      "mdc-text-field--with-leading-icon": $$slots.leadingIcon,
                      "mdc-text-field--with-trailing-icon":
                        $$slots.trailingIcon,
                      "mdc-text-field--invalid": invalid,
                      ...internalClasses,
                    })
                  ),
                },
                {
                  style: escape_attribute_value(
                    Object.entries(internalStyles)
                      .map(([name, value2]) => `${name}: ${value2};`)
                      .concat([style])
                      .join(" ")
                  ),
                },
                escape_object(
                  exclude($$restProps, [
                    "input$",
                    "label$",
                    "ripple$",
                    "outline$",
                    "helperLine$",
                  ])
                ),
              ],
              {}
            )}${add_attribute("this", element, 0)}>${
              slots.label ? slots.label({}) : ``
            }
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: true,
      },
      {},
      {
        default: () => {
          return `${slots.leadingIcon ? slots.leadingIcon({}) : ``}`;
        },
      }
    )}
    ${slots.default ? slots.default({}) : ``}
    ${validate_component(ContextFragment, "ContextFragment").$$render(
      $$result,
      {
        key: "SMUI:textfield:icon:leading",
        value: false,
      },
      {},
      {
        default: () => {
          return `${slots.trailingIcon ? slots.trailingIcon({}) : ``}`;
        },
      }
    )}
    ${slots.ripple ? slots.ripple({}) : ``}</div>`
      }
${
  $$slots.helper
    ? `${validate_component(HelperLine, "HelperLine").$$render(
        $$result,
        Object_1.assign(prefixFilter($$restProps, "helperLine$")),
        {},
        {
          default: () => {
            return `${slots.helper ? slots.helper({}) : ``}`;
          },
        }
      )}`
    : ``
}`;
    } while (!$$settled);
    return $$rendered;
  }
);
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "getElement",
  ]);
  let $leadingStore, $$unsubscribe_leadingStore;
  forwardEventsBuilder(get_current_component());
  let { use = [] } = $$props;
  let { class: className = "" } = $$props;
  let { role = void 0 } = $$props;
  let { tabindex = role === "button" ? 0 : -1 } = $$props;
  let { disabled = false } = $$props;
  let element;
  let internalAttrs = {};
  const leadingStore = getContext("SMUI:textfield:icon:leading");
  $$unsubscribe_leadingStore = subscribe(
    leadingStore,
    (value) => ($leadingStore = value)
  );
  const leading = $leadingStore;
  function getElement() {
    return element;
  }
  if ($$props.use === void 0 && $$bindings.use && use !== void 0)
    $$bindings.use(use);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.role === void 0 && $$bindings.role && role !== void 0)
    $$bindings.role(role);
  if ($$props.tabindex === void 0 && $$bindings.tabindex && tabindex !== void 0)
    $$bindings.tabindex(tabindex);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if (
    $$props.getElement === void 0 &&
    $$bindings.getElement &&
    getElement !== void 0
  )
    $$bindings.getElement(getElement);
  $$unsubscribe_leadingStore();
  return `<i${spread(
    [
      {
        class: escape_attribute_value(
          classMap({
            [className]: true,
            "mdc-text-field__icon": true,
            "mdc-text-field__icon--leading": leading,
            "mdc-text-field__icon--trailing": !leading,
          })
        ),
      },
      {
        tabindex: escape_attribute_value(tabindex),
      },
      {
        "aria-hidden": escape_attribute_value(
          tabindex === -1 ? "true" : "false"
        ),
      },
      {
        "aria-disabled": escape_attribute_value(
          role === "button" ? (disabled ? "true" : "false") : void 0
        ),
      },
      { role: escape_attribute_value(role) },
      escape_object(internalAttrs),
      escape_object($$restProps),
    ],
    {}
  )}${add_attribute("this", element, 0)}>${`${
    slots.default ? slots.default({}) : ``
  }`}</i>`;
});
let counter = 0;
const HelperText = create_ssr_component(
  ($$result, $$props, $$bindings, slots) => {
    let $$restProps = compute_rest_props($$props, [
      "use",
      "class",
      "id",
      "persistent",
      "validationMsg",
      "getElement",
    ]);
    forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { id = "SMUI-textfield-helper-text-" + counter++ } = $$props;
    let { persistent = false } = $$props;
    let { validationMsg = false } = $$props;
    let element;
    let internalClasses = {};
    let internalAttrs = {};
    function getElement() {
      return element;
    }
    if ($$props.use === void 0 && $$bindings.use && use !== void 0)
      $$bindings.use(use);
    if ($$props.class === void 0 && $$bindings.class && className !== void 0)
      $$bindings.class(className);
    if ($$props.id === void 0 && $$bindings.id && id !== void 0)
      $$bindings.id(id);
    if (
      $$props.persistent === void 0 &&
      $$bindings.persistent &&
      persistent !== void 0
    )
      $$bindings.persistent(persistent);
    if (
      $$props.validationMsg === void 0 &&
      $$bindings.validationMsg &&
      validationMsg !== void 0
    )
      $$bindings.validationMsg(validationMsg);
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
              "mdc-text-field-helper-text": true,
              "mdc-text-field-helper-text--persistent": persistent,
              "mdc-text-field-helper-text--validation-msg": validationMsg,
              ...internalClasses,
            })
          ),
        },
        {
          "aria-hidden": escape_attribute_value(persistent ? void 0 : "true"),
        },
        { id: escape_attribute_value(id) },
        escape_object(internalAttrs),
        escape_object($$restProps),
      ],
      {}
    )}${add_attribute("this", element, 0)}>${`${
      slots.default ? slots.default({}) : ``
    }`}
</div>`;
  }
);
var footer_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
  ".footer.svelte-d6boib{min-height:300px;background-color:var(--mdc-theme-secondary, #fff);color:#fff;overflow:hidden}")();
const css$1 = {
  code: ".footer.svelte-d6boib{min-height:300px;background-color:var(--mdc-theme-secondary, #fff);color:#fff;overflow:hidden}",
  map: null,
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let disabled;
  let nav_menu = [
    { slug: "home", title: "Home" },
    { slug: "about", title: "About" },
    { slug: "research", title: "Research" },
    { slug: "contact", title: "Contact" },
  ];
  let { active = "Home" } = $$props;
  let focused = false;
  let value = null;
  let dirty = false;
  let invalid = false;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0)
    $$bindings.active(active);
  $$result.css.add(css$1);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    disabled = !value || !dirty || invalid;
    $$rendered = `

<div class="${"footer  svelte-d6boib"}"><div class="${"container"}">${validate_component(
      LayoutGrid,
      "LayoutGrid"
    ).$$render(
      $$result,
      {},
      {},
      {
        default: () => {
          return `${validate_component(Cell, "Cell").$$render(
            $$result,
            { span: 3, class: "center" },
            {},
            {
              default: () => {
                return `${validate_component(Cell, "Cell").$$render(
                  $$result,
                  { span: 6, class: "center" },
                  {},
                  {
                    default: () => {
                      return `<h1>CRIB</h1>`;
                    },
                  }
                )}
        ${validate_component(Cell, "Cell").$$render(
          $$result,
          { span: 6, class: "center" },
          {},
          {
            default: () => {
              return `<div style="display: contents; --width:${"6em"};">${validate_component(
                Pill_logo,
                "PillLogo"
              ).$$render($$result, {}, {}, {})}</div>`;
            },
          }
        )}
        `;
              },
            }
          )}
      ${validate_component(Cell, "Cell").$$render(
        $$result,
        { span: 3, class: "center" },
        {},
        {
          default: () => {
            return `<h3 class="${"thin uppercase"}">Quick Links</h3>
        <div>${validate_component(List, "List").$$render(
          $$result,
          { oneLine: true },
          {},
          {
            default: () => {
              return `${each(nav_menu, (todo) => {
                return `${
                  todo.title === "Home"
                    ? `<a href="${"/"}">${validate_component(
                        Item,
                        "Item"
                      ).$$render(
                        $$result,
                        { class: "center light" },
                        {},
                        {
                          default: () => {
                            return `${validate_component(Text, "Text").$$render(
                              $$result,
                              {},
                              {},
                              {
                                default: () => {
                                  return `${validate_component(
                                    PrimaryText,
                                    "PrimaryText"
                                  ).$$render(
                                    $$result,
                                    {},
                                    {},
                                    {
                                      default: () => {
                                        return `${escape(todo.title)}`;
                                      },
                                    }
                                  )}
                    `;
                                },
                              }
                            )}
                  `;
                          },
                        }
                      )}
                </a>`
                    : `<a href="${
                        "/" + escape(todo.slug, true)
                      }">${validate_component(Item, "Item").$$render(
                        $$result,
                        { class: "center light" },
                        {},
                        {
                          default: () => {
                            return `${validate_component(Text, "Text").$$render(
                              $$result,
                              {},
                              {},
                              {
                                default: () => {
                                  return `${validate_component(
                                    PrimaryText,
                                    "PrimaryText"
                                  ).$$render(
                                    $$result,
                                    {},
                                    {},
                                    {
                                      default: () => {
                                        return `${escape(todo.title)}`;
                                      },
                                    }
                                  )}
                    `;
                                },
                              }
                            )}
                  `;
                          },
                        }
                      )}
                </a>`
                }`;
              })}`;
            },
          }
        )}</div>`;
          },
        }
      )}

      ${validate_component(Cell, "Cell").$$render(
        $$result,
        { span: 3, class: "center" },
        {},
        {
          default: () => {
            return `<h3 class="${"thin uppercase"}">Latest Research</h3>
        <div>${validate_component(List, "List").$$render(
          $$result,
          { oneLine: true },
          {},
          {
            default: () => {
              return `<a href="${"#"}">${validate_component(
                Item,
                "Item"
              ).$$render(
                $$result,
                { class: "center" },
                {},
                {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render(
                      $$result,
                      {},
                      {},
                      {
                        default: () => {
                          return `${validate_component(
                            PrimaryText,
                            "PrimaryText"
                          ).$$render(
                            $$result,
                            {},
                            {},
                            {
                              default: () => {
                                return `FruitPhone Pro`;
                              },
                            }
                          )}
                  ${validate_component(SecondaryText, "SecondaryText").$$render(
                    $$result,
                    {},
                    {},
                    {
                      default: () => {
                        return `A beautiful phone with good specs.`;
                      },
                    }
                  )}`;
                        },
                      }
                    )}`;
                  },
                }
              )}</a>
            <a href="${"#"}">${validate_component(Item, "Item").$$render(
                $$result,
                { class: "center" },
                {},
                {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render(
                      $$result,
                      {},
                      {},
                      {
                        default: () => {
                          return `${validate_component(
                            PrimaryText,
                            "PrimaryText"
                          ).$$render(
                            $$result,
                            {},
                            {},
                            {
                              default: () => {
                                return `Robot Phone Max`;
                              },
                            }
                          )}
                  ${validate_component(SecondaryText, "SecondaryText").$$render(
                    $$result,
                    {
                      title:
                        "Pretty much the same phone, but a different brand name and OS. It spies on you more, too.",
                    },
                    {},
                    {
                      default: () => {
                        return `Pretty much the same phone, but a different brand name and
                    OS. It spies on you more, too.`;
                      },
                    }
                  )}`;
                        },
                      }
                    )}`;
                  },
                }
              )}</a>
            <a href="${"#"}">${validate_component(Item, "Item").$$render(
                $$result,
                { class: "center" },
                {},
                {
                  default: () => {
                    return `${validate_component(Text, "Text").$$render(
                      $$result,
                      {},
                      {},
                      {
                        default: () => {
                          return `${validate_component(
                            PrimaryText,
                            "PrimaryText"
                          ).$$render(
                            $$result,
                            {},
                            {},
                            {
                              default: () => {
                                return `Penguin Phone`;
                              },
                            }
                          )}
                  ${validate_component(SecondaryText, "SecondaryText").$$render(
                    $$result,
                    {
                      title:
                        "A very weak phone that you can install literally anything on. Compile your own kernel, you nerd. :D",
                    },
                    {},
                    {
                      default: () => {
                        return `A very weak phone that you can install literally anything
                    on. Compile your own kernel, you nerd. :D`;
                      },
                    }
                  )}`;
                        },
                      }
                    )}`;
                  },
                }
              )}</a>`;
            },
          }
        )}</div>`;
          },
        }
      )}

      ${validate_component(Cell, "Cell").$$render(
        $$result,
        { span: 3, class: "center hidden" },
        {},
        {
          default: () => {
            return `<h3 class="${"thin uppercase"}">Newsletter</h3>
        ${validate_component(Card, "Card").$$render(
          $$result,
          { variant: "outlined", padded: true },
          {},
          {
            default: () => {
              return `<div class="${"margins dark"}">
            ${validate_component(Textfield, "Textfield").$$render(
              $$result,
              {
                type: "email",
                updateInvalid: true,
                label: "Enter Your Email",
                style: "min-width: 250px;",
                input$autocomplete: "email",
                withTrailingIcon: !disabled,
                dirty,
                invalid,
                value,
              },
              {
                dirty: ($$value) => {
                  dirty = $$value;
                  $$settled = false;
                },
                invalid: ($$value) => {
                  invalid = $$value;
                  $$settled = false;
                },
                value: ($$value) => {
                  value = $$value;
                  $$settled = false;
                },
              },
              {
                helper: () => {
                  return `${validate_component(
                    HelperText,
                    "HelperText"
                  ).$$render(
                    $$result,
                    { validationMsg: true, slot: "helper" },
                    {},
                    {
                      default: () => {
                        return `That&#39;s not a valid email address.
              `;
                      },
                    }
                  )}`;
                },
                trailingIcon: () => {
                  return `${
                    !disabled
                      ? `${validate_component(Icon, "Icon").$$render(
                          $$result,
                          { class: "material-icons", role: "button" },
                          {},
                          {
                            default: () => {
                              return `send`;
                            },
                          }
                        )}`
                      : ``
                  }
              `;
                },
              }
            )}
            <pre class="${"status hidden"}">            Focused: ${escape(
                focused
              )},
            Dirty: ${escape(dirty)},
            Invalid: ${escape(invalid)},
            Value: ${escape(value)}</pre></div>`;
            },
          }
        )}`;
          },
        }
      )}`;
        },
      }
    )}</div>
  ${validate_component(Colophon, "Colophon").$$render($$result, {}, {}, {})}
</div>`;
  } while (!$$settled);
  return $$rendered;
});
var __layout_svelte_svelte_type_style_lang = /* @__PURE__ */ (() =>
  "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}")();
const css = {
  code: "app,body,html{display:block !important;height:auto !important;width:auto !important;position:static !important}",
  map: null,
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  $$result.css.add(css);
  return `${slots.default ? slots.default({}) : ``}

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { _layout as default };
