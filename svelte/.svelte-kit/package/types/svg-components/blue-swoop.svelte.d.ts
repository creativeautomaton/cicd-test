import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {};
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export declare type BlueSwoopProps = typeof __propDef.props;
export declare type BlueSwoopEvents = typeof __propDef.events;
export declare type BlueSwoopSlots = typeof __propDef.slots;
export default class BlueSwoop extends SvelteComponentTyped<
  BlueSwoopProps,
  BlueSwoopEvents,
  BlueSwoopSlots
> {}
export {};
