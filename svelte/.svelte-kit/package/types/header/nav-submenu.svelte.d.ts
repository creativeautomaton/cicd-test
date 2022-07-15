import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {
    active?: string | undefined;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export declare type NavSubmenuProps = typeof __propDef.props;
export declare type NavSubmenuEvents = typeof __propDef.events;
export declare type NavSubmenuSlots = typeof __propDef.slots;
export default class NavSubmenu extends SvelteComponentTyped<
  NavSubmenuProps,
  NavSubmenuEvents,
  NavSubmenuSlots
> {}
export {};
