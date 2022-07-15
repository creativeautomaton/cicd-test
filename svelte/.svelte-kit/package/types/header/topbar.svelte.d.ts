import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {};
  events: {
    message: CustomEvent<any>;
  } & {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export declare type TopbarProps = typeof __propDef.props;
export declare type TopbarEvents = typeof __propDef.events;
export declare type TopbarSlots = typeof __propDef.slots;
export default class Topbar extends SvelteComponentTyped<
  TopbarProps,
  TopbarEvents,
  TopbarSlots
> {}
export {};
