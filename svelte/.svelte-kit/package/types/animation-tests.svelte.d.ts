/** @typedef {typeof __propDef.props}  AnimationTestsProps */
/** @typedef {typeof __propDef.events}  AnimationTestsEvents */
/** @typedef {typeof __propDef.slots}  AnimationTestsSlots */
export default class AnimationTests extends SvelteComponentTyped<
  {},
  {
    [evt: string]: CustomEvent<any>;
  },
  {}
> {}
export type AnimationTestsProps = typeof __propDef.props;
export type AnimationTestsEvents = typeof __propDef.events;
export type AnimationTestsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {};
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {};
};
export {};
