import { c as create_ssr_component, a as compute_rest_props, g as get_current_component, i as getContext, v as validate_component, m as missing_component } from "../../chunks/index-9bef2b13.js";
import "@material/banner";
import "@material/dom";
import { f as forwardEventsBuilder, c as classMap, j as Span } from "../../chunks/logo-hero.svelte_svelte_type_style_lang-66de86f8.js";
import { L as LayoutGrid, C as Cell, B as Button_1, I as IconButton } from "../../chunks/index-27b92c51.js";
import "@material/top-app-bar";
import "@material/checkbox";
import "@material/ripple";
import "@material/form-field";
import "@material/drawer";
import "@material/list";
import "@material/icon-button";
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
const Label = CommonLabel;
const css$1 = {
  code: ".demo-cell.svelte-25tok8{height:auto;display:flex;justify-content:center;align-items:center;color:var(--mdc-theme-on-secondary, #333);padding:1em;margin:1em}.lead.svelte-25tok8{font-size:2em;font-weight:300;line-height:1.2;display:block}",
  map: null
};
const Logo_hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<br>
<br>
<br>
<br>
${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, { span: 4 }, {}, {
        default: () => {
          return `<div class="${"demo-cell svelte-25tok8"}"><svg class="${"pill-icon rotate-in"}" viewBox="${"0 0 119.0625 119.0625"}" style="${"width: 30em; top: 2em;"}"><defs id="${"defs992"}"><linearGradient inkscape:collect="${"always"}" xlink:href="${"#linearGradient5143"}" id="${"linearGradient963"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"matrix(0.97958221,0,0,0.98922839,26.360394,3.69165)"}" x1="${"107.60492"}" y1="${"160.5574"}" x2="${"121.51935"}" y2="${"157.3446"}"></linearGradient><linearGradient inkscape:collect="${"always"}" id="${"linearGradient5143"}"><stop style="${"stop-color:#cccccc;stop-opacity:1;"}" offset="${"0"}" id="${"stop5139"}"></stop><stop style="${"stop-color:#ffffff;stop-opacity:1"}" offset="${"1"}" id="${"stop5141"}"></stop></linearGradient><linearGradient inkscape:collect="${"always"}" xlink:href="${"#linearGradient5151"}" id="${"linearGradient5153"}" x1="${"140.98512"}" y1="${"180.10159"}" x2="${"125.10828"}" y2="${"188.22809"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"matrix(1.0769291,0,0,1.0330553,12.82733,-4.25291)"}"></linearGradient><linearGradient inkscape:collect="${"always"}" id="${"linearGradient5151"}"><stop style="${"stop-color:#a51417;stop-opacity:1;"}" offset="${"0"}" id="${"stop5147"}"></stop><stop style="${"stop-color:#e9cacb;stop-opacity:1"}" offset="${"1"}" id="${"stop5149"}"></stop></linearGradient><linearGradient inkscape:collect="${"always"}" xlink:href="${"#linearGradient5143"}" id="${"linearGradient957"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"matrix(-0.47942469,-0.8248045,0.87207026,-0.4534401,-26.02641,408.21645)"}" x1="${"107.60492"}" y1="${"160.5574"}" x2="${"121.51935"}" y2="${"157.3446"}"></linearGradient><linearGradient inkscape:collect="${"always"}" xlink:href="${"#linearGradient5258"}" id="${"linearGradient959"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"matrix(-0.42637411,-0.90031877,0.8819972,-0.4352311,-34.864115,416.43225)"}" x1="${"133.2366"}" y1="${"191.35564"}" x2="${"149.35953"}" y2="${"175.44536"}"></linearGradient><linearGradient id="${"linearGradient5258"}" inkscape:collect="${"always"}"><stop id="${"stop5254"}" offset="${"0"}" style="${"stop-color:#2d5f5f;stop-opacity:1"}"></stop><stop id="${"stop5256"}" offset="${"1"}" style="${"stop-color:#d0d0d0;stop-opacity:1"}"></stop></linearGradient><linearGradient inkscape:collect="${"always"}" xlink:href="${"#linearGradient5143"}" id="${"linearGradient5145-60"}" x1="${"107.60492"}" y1="${"160.5574"}" x2="${"121.51935"}" y2="${"157.3446"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"matrix(-0.43425199,0.91624216,-0.89829378,-0.44292857,224.01578,198.00481)"}"></linearGradient><linearGradient inkscape:collect="${"always"}" xlink:href="${"#linearGradient5242"}" id="${"linearGradient961"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"matrix(-0.48667458,0.91560955,-0.90656412,-0.49036596,233.68385,204.63363)"}" x1="${"144.28831"}" y1="${"180.22009"}" x2="${"127.1244"}" y2="${"188.42982"}"></linearGradient><linearGradient inkscape:collect="${"always"}" id="${"linearGradient5242"}"><stop style="${"stop-color:#318e80;stop-opacity:1;"}" offset="${"0"}" id="${"stop5238"}"></stop><stop style="${"stop-color:#97b6b1;stop-opacity:1"}" offset="${"1"}" id="${"stop5240"}"></stop></linearGradient><linearGradient inkscape:collect="${"always"}" xlink:href="${"#linearGradient5143"}" id="${"linearGradient1225"}" gradientUnits="${"userSpaceOnUse"}" gradientTransform="${"matrix(-0.47942469,-0.8248045,0.87207026,-0.4534401,-26.02641,408.21645)"}" x1="${"107.60492"}" y1="${"160.5574"}" x2="${"121.51935"}" y2="${"157.3446"}"></linearGradient></defs><g inkscape:label="${"bg"}" inkscape:groupmode="${"layer"}" id="${"layer1"}" transform="${"translate(-31.887321,-147.6801)"}"></g><g inkscape:groupmode="${"layer"}" id="${"layer12"}" inkscape:label="${"pill"}" transform="${"translate(-31.887321,-147.6801)"}"><g inkscape:groupmode="${"layer"}" id="${"layer11"}" inkscape:label="${"blue circle"}"></g><g inkscape:groupmode="${"layer"}" id="${"layer10"}" inkscape:label="${"grey pill"}"></g><g inkscape:groupmode="${"layer"}" id="${"layer9"}" inkscape:label="${"green pill"}"></g><g inkscape:groupmode="${"layer"}" id="${"layer7"}" inkscape:label="${"blue shadow"}" style="${"display:inline"}"></g><g inkscape:groupmode="${"layer"}" id="${"layer8"}" inkscape:label="${"red pill"}"><g id="${"g1223"}" transform="${"translate(-8.3154762,-0.37797622)"}"><ellipse style="${"display:inline;fill:#2885b9;fill-opacity:1;stroke:none;stroke-width:0.2565051"}" ry="${"26.880894"}" rx="${"25.955479"}" cy="${"197.44211"}" cx="${"97.742363"}" id="${"path1414"}"></ellipse><g id="${"g1090"}" style="${"display:inline"}" transform="${"translate(57.81543,-44.71928)"}"><g transform="${"rotate(3.2,81.004219,224.41439)"}" id="${"g1182"}"><path inkscape:connector-curvature="${"0"}" id="${"path5060-7"}" d="${"m 64.475102,232.86537 -11.19208,20.64245 c 0,0 -7.231112,7.97064 -17.855749,1.77366 -12.497317,-7.28925 -7.675683,-18.74379 -7.675683,-18.74379 l 4.104699,-6.60003 9.338014,-12.366 c 0,0 6.715093,-13.02391 19.639703,4.41156"}" style="${"fill:url(#linearGradient1225);fill-opacity:1;stroke:none;stroke-width:0.58069271;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:normal"}" sodipodi:nodetypes="${"ccscccc"}"></path><path sodipodi:nodetypes="${"ccsccc"}" inkscape:connector-curvature="${"0"}" id="${"path5058-2"}" d="${"m 64.475102,232.86537 12.627283,-19.67246 c 0,0 4.957437,-9.55557 -3.899935,-16.10025 -8.857362,-6.54467 -16.800632,-2.09793 -19.075801,0.91395 -2.275152,3.01193 -12.932346,19.56505 -12.932346,19.56505 0,0 11.847207,-3.20418 23.280799,15.29371 z"}" style="${"fill:url(#linearGradient959);fill-opacity:1;stroke:none;stroke-width:0.26187733px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}"></path></g></g><g id="${"g1136"}" style="${"display:inline"}" transform="${"translate(57.408839,-48.04229)"}"><path sodipodi:nodetypes="${"ccscccc"}" style="${"fill:url(#linearGradient5145-60);fill-opacity:1;stroke:none;stroke-width:2.01533842;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke markers fill"}" d="${"m 16.996649,232.43467 27.27703,-3.64029 c 0,0 11.086972,1.03534 11.902949,13.77318 0.959801,14.98297 -11.738151,18.13818 -11.738151,18.13818 l -8.086904,0.71229 -16.108571,-0.0387 c 0,0 -10.8055198,-7.2506 -3.246353,-28.9447"}" id="${"path5060-8"}" inkscape:connector-curvature="${"0"}"></path><path sodipodi:nodetypes="${"cccccc"}" style="${"opacity:1;fill:url(#linearGradient961);fill-opacity:1;stroke:none;stroke-width:0.27352175px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}" d="${"m 18.057046,232.25363 -24.4814776,3.17063 c 0,0 -10.7960874,1.36321 -10.7815954,12.95611 0.01451,11.5929 8.6188621,14.91031 12.530583,15.02108 3.91171669,0.11076 24.837322,-1.49224 24.837322,-1.49224 0,0 -10.4547461,-8.55131 -2.104832,-29.65558 z"}" id="${"path5058-1"}" inkscape:connector-curvature="${"0"}"></path></g><path inkscape:connector-curvature="${"0"}" id="${"path5060-5"}" d="${"m 89.600415,214.36477 -8.628123,-14.81314 c 0,0 -1.789208,-3.73427 -0.127373,-8.95226 0.74374,-2.33527 4.020595,-6.15266 7.437128,-7.87564 6.119007,-3.08586 10.068136,-3.20366 13.705113,-2.12834 2.99947,0.88683 5.67951,2.42206 5.67951,2.42206 l 3.1753,2.85732 3.10256,4.46861 2.99911,5.33105 4.56352,8.06802 c 0,0 -1.34717,17.30982 -25.159126,19.70108"}" style="${"display:inline;fill:#2885b9;fill-opacity:1;stroke:none;stroke-width:3.07599735;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"}" sodipodi:nodetypes="${"ccssscccccc"}"></path><g transform="${"translate(-47.720246,50.027083)"}" id="${"g1065"}"><path sodipodi:nodetypes="${"ccsscccc"}" style="${"display:inline;fill:url(#linearGradient963);fill-opacity:1;stroke:none;stroke-width:2.95318031;stroke-linecap:round;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1;paint-order:stroke fill markers"}" d="${"m 144.65806,173.91696 -13.8749,-23.74363 c 0,0 -4.55208,-9.02386 5.91434,-15.51637 5.77378,-3.58158 11.04678,-3.42182 14.87755,-1.75101 4.37454,1.90797 8.93052,9.70022 8.93052,9.70022 l 0.99927,1.7723 6.84978,14.39534 c 0,0 -1.66617,12.71278 -23.69656,15.14315"}" id="${"path5060"}" inkscape:connector-curvature="${"0"}"></path><path style="${"display:inline;fill:url(#linearGradient5153);fill-opacity:1;stroke:none;stroke-width:0.27907303px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"}" d="${"m 144.06828,173.41645 12.24543,20.0116 c 0,0 9.08425,9.23535 19.259,3.04131 8.97977,-5.46658 7.75861,-12.90539 5.92687,-16.41963 -1.83173,-3.51423 -13.14496,-21.27592 -13.14496,-21.27592 0,0 -0.88077,12.10458 -24.28634,14.64264 z"}" id="${"path5058"}" inkscape:connector-curvature="${"0"}" sodipodi:nodetypes="${"ccsccc"}"></path></g></g></g></g></svg></div>`;
        }
      })}
  ${validate_component(Cell, "Cell").$$render($$result, { span: 8 }, {}, {
        default: () => {
          return `<div class="${"demo-cell svelte-25tok8"}"><p class="${"lead svelte-25tok8"}">Center for Research Innovation in Biotechnology(<strong style="${"font-size: 1em;"}">CRIB</strong>) aggregates and analyzes the sources of scientific, medical and
        business innovations in therapeutics &amp; vaccines.
        <br>
        ${validate_component(Button_1, "Button").$$render($$result, {
            color: "secondary",
            href: "http://cdek.liu.edu/",
            target: "_blank",
            variant: "raised"
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
          })}</p></div>`;
        }
      })}`;
    }
  })}`;
});
var index_svelte_svelte_type_style_lang = /* @__PURE__ */ (() => ".demo-cell.svelte-xpzo69{height:60px;display:flex;justify-content:center;align-items:center}")();
const css = {
  code: ".demo-cell.svelte-xpzo69{height:60px;display:flex;justify-content:center;align-items:center}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Logo_hero, "LogoHero").$$render($$result, {}, {}, {})}

${validate_component(LayoutGrid, "LayoutGrid").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Cell, "Cell").$$render($$result, { span: 12 }, {}, {
        default: () => {
          return `<div class="${"demo-cell svelte-xpzo69"}"><h1>Welcome to SvelteKit</h1>
      <br>
      <br>
      <p>Visit <a href="${"https://kit.svelte.dev"}">kit.svelte.dev</a> to read the documentation
      </p></div>`;
        }
      })}`;
    }
  })}`;
});
export { Routes as default };
