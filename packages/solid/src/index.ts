export {
  createRoot,
  createSignal,
  createEffect,
  createRenderEffect,
  createComputed,
  createDeferred,
  createSelector,
  createMemo,
  createResource,
  getListener,
  onMount,
  onCleanup,
  onError,
  untrack,
  batch,
  on,
  useTransition,
  createContext,
  useContext,
  children,
  getOwner,
  runWithOwner,
  equalFn,
  serializeGraph
} from "./reactive/signal";
export type { Resource } from "./reactive/signal";

export { createState, createNotifier, unwrap, $RAW } from "./reactive/state";
export type { State, SetStateFunction } from "./reactive/state";
export * from "./reactive/mutable";

export { reconcile, produce } from "./reactive/stateModifiers";

export * from "./reactive/scheduler";
export * from "./reactive/array";
export * from "./render";
export type { JSX } from "./jsx";

// mock server endpoint for dom-expressions
export function awaitSuspense() {}

// handle multiple instance check
declare global {
  var Solid$$: boolean;
}

if ("_SOLID_DEV_" && globalThis) {
  if (!globalThis.Solid$$) globalThis.Solid$$ = true;
  else
    console.warn(
      "You appear to have multiple instances of Solid. This can lead to unexpected behavior."
    );
}
