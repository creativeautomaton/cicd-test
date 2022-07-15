import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {};
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export declare type ColophonProps = typeof __propDef.props;
export declare type ColophonEvents = typeof __propDef.events;
export declare type ColophonSlots = typeof __propDef.slots;
export default class Colophon extends SvelteComponentTyped<
  ColophonProps,
  ColophonEvents,
  ColophonSlots
> {}
export {};
