/** @typedef {typeof __propDef.props}  ScrollActionsProps */
/** @typedef {typeof __propDef.events}  ScrollActionsEvents */
/** @typedef {typeof __propDef.slots}  ScrollActionsSlots */
export default class ScrollActions extends SvelteComponentTyped<
  {},
  {
    [evt: string]: CustomEvent<any>;
  },
  {
    default: {
      visible: any;
    };
  }
> {}
export type ScrollActionsProps = typeof __propDef.props;
export type ScrollActionsEvents = typeof __propDef.events;
export type ScrollActionsSlots = typeof __propDef.slots;
import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
  props: {};
  events: {
    [evt: string]: CustomEvent<any>;
  };
  slots: {
    default: {
      visible: any;
    };
  };
};
export {};
