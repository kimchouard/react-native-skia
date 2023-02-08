import { useEffect } from "react";

import {
  HAS_REANIMATED,
  useSharedValue,
  SharedValueType,
  runOnJS,
  startMapper,
  stopMapper,
} from "./moduleWrapper";

/**
 * Connects a shared value from reanimated to a SkiaView or Canvas
 * so whenever the shared value changes the SkiaView will redraw.
 * @param cb Callback that will be called whenever the shared value changes.
 * @param values One or more shared values to listen for.
 */
export const useSharedValueEffect = <T = number>(
  cb: () => void,
  value: SharedValueType<T>,
  ...values: SharedValueType<T>[]
) => {
  const input = useSharedValue(0);

  useEffect(() => {
    if (!HAS_REANIMATED) {
      console.warn(
        "Reanimated was not found and the useSharedValueEffect hook will have no effect."
      );
    } else {
      // Start a mapper in Reanimated
      const mapperId = startMapper(
        () => {
          "worklet";
          runOnJS(cb)();
        },
        [value, ...values],
        [input]
      );
      // Return unregistering the mapper
      return () => {
        if (stopMapper && mapperId !== undefined) {
          stopMapper(mapperId);
        }
      };
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input, value, ...values]);
};
