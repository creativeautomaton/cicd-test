import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {
    open?: boolean | undefined;
    active?: string | undefined;
  };
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export declare type DrawerProps = typeof __propDef.props;
export declare type DrawerEvents = typeof __propDef.events;
export declare type DrawerSlots = typeof __propDef.slots;
export default class Drawer extends SvelteComponentTyped<
  DrawerProps,
  DrawerEvents,
  DrawerSlots
> {}
export {};
