import { c as create_ssr_component, v as validate_component } from "../../chunks/index-5d194541.js";
import { D as Drawer_1 } from "../../chunks/drawer-da496e50.js";
import "@material/icon-button";
import "@material/ripple";
import "@material/dom";
import "@material/list";
import "../../chunks/drawer.svelte_svelte_type_style_lang-d9b42fa3.js";
import { L as LayoutGrid, C as Cell } from "../../chunks/index-f419de0a.js";
import "@material/drawer";
import "@material/top-app-bar";
import "@material/checkbox";
import "@material/form-field";
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Drawer_1, "NavDrawer").$$render($$result, {}, {}, {})}

<h1>Contact Us</h1>


${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, { class: " center" }, {}, {
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
export { Contact as default };
