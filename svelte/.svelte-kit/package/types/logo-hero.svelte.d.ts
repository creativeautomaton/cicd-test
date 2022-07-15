/** @typedef {typeof __propDef.props}  LogoHeroProps */
/** @typedef {typeof __propDef.events}  LogoHeroEvents */
/** @typedef {typeof __propDef.slots}  LogoHeroSlots */
export default class LogoHero extends SvelteComponentTyped<
  {},
  {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type LogoHeroProps = typeof __propDef.props;
export type LogoHeroEvents = typeof __propDef.events;
export type LogoHeroSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {};
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
