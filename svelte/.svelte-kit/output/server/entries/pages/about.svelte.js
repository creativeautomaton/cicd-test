import { c as create_ssr_component, v as validate_component } from "../../chunks/index-37c8fe4c.js";
import { D as Drawer_1, T as Topbar } from "../../chunks/drawer-7f37b6ef.js";
import "@material/icon-button";
import "@material/ripple";
import "@material/dom";
import "@material/list";
import { L as LayoutGrid, C as Cell } from "../../chunks/pill-logo.svelte_svelte_type_style_lang-01533bd5.js";
import "@material/top-app-bar";
import "@material/checkbox";
import "@material/form-field";
import "@material/drawer";
const Test_post = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `


<div>${`<p>loading...</p>`}</div>

<div><ul>
    </ul>
</div>`;
});
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open;
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(Drawer_1, "NavDrawer").$$render($$result, { open }, {
      open: ($$value) => {
        open = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Topbar, "Topbar").$$render($$result, {}, {}, {})}


${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
      default: () => {
        return `${validate_component(Cell, "Cell").$$render($$result, { span: 12, class: "cell left" }, {}, {
          default: () => {
            return `<div><h1 class="${"thin uppercase"}">About CRIB</h1></div>`;
          }
        })}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 12, class: "cell  center" }, {}, {
          default: () => {
            return `${validate_component(Test_post, "TestPost").$$render($$result, {}, {}, {})}
    `;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { About as default };
