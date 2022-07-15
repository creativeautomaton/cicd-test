import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {
    active?: string | undefined;
  };
  events: {
    message: CustomEvent<any>;
  } & {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export declare type NavMenuProps = typeof __propDef.props;
export declare type NavMenuEvents = typeof __propDef.events;
export declare type NavMenuSlots = typeof __propDef.slots;
export default class NavMenu extends SvelteComponentTyped<
  NavMenuProps,
  NavMenuEvents,
  NavMenuSlots
> {}
export {};
