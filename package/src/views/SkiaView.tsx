/* global SkiaViewApi:false */

import React from "react";

import type { SkRect } from "../skia";
import type { SkiaReadonlyValue } from "../values";

import { NativeSkiaView } from "./types";
import type { DrawMode, RNSkiaDrawCallback, RNSkiaViewProps } from "./types";

let SkiaViewNativeId = 1000;

export class SkiaView extends React.Component<RNSkiaViewProps> {
  constructor(props: RNSkiaViewProps) {
    super(props);
    this._skiaId = SkiaViewNativeId++;
    const { onDraw } = props;
    if (onDraw) {
      assertDrawCallbacksEnabled();
      setDrawCallback(this._skiaId, onDraw);
    }
  }

  private _skiaId: number;  

  public get nativeId() {
    return this._skiaId;
  }

  componentDidUpdate(prevProps: RNSkiaViewProps) {
    const { onDraw } = this.props;
    if (onDraw !== prevProps.onDraw) {
      assertDrawCallbacksEnabled();
      setDrawCallback(this._skiaId, onDraw);
    }
  }

  /**
   * Creates a snapshot from the canvas in the surface
   * @param rect Rect to use as bounds. Optional.
   * @returns An Image object.
   */
  public makeImageSnapshot(rect?: SkRect) {
    assertDrawCallbacksEnabled();
    return makeImageSnapshot(this._skiaId, rect);
  }

  /**
   * Sends a redraw request to the native SkiaView.
   */
  public redraw() {
    assertDrawCallbacksEnabled();
    invalidateSkiaView(this._skiaId);
  }

  /**
   * Updates the drawing mode for the skia view. This is the same
   * as declaratively setting the mode property on the SkiaView.
   * There are two drawing modes, "continuous" and "default",
   * where the continuous mode will continuously redraw the view and
   * the default mode will only redraw when any of the regular react
   * properties are changed like size and margins.
   * @param mode Drawing mode to use.
   */
  public setDrawMode(mode: DrawMode) {
    assertDrawCallbacksEnabled();
    setDrawingModeForSkiaView(this._skiaId, mode);
  }

  /**
   * Registers one or move values as a dependant value of the Skia View. The view will
   * The view will redraw itself when any of the values change.
   * @param values Values to register
   */
  public registerValues(values: SkiaReadonlyValue<unknown>[]) {
    assertDrawCallbacksEnabled();
    return registerValuesInSkiaView(this._skiaId, values);
  }

  render() {
    const { style, mode, debug = false } = this.props;
    return (
      <NativeSkiaView
        style={style}
        collapsable={false}
        skiaId={this._skiaId}
        mode={mode}
        debug={debug}
      />
    );
  }
}

const setDrawCallback = (
  nativeId: number,
  drawCallback: RNSkiaDrawCallback | undefined
) => {
  return SkiaViewApi.setDrawCallback(nativeId, drawCallback);
};

export const invalidateSkiaView = (nativeId: number) => {
  SkiaViewApi.invalidateSkiaView(nativeId);
};

export const makeImageSnapshot = (nativeId: number, rect?: SkRect) => {
  return SkiaViewApi.makeImageSnapshot(nativeId, rect);
};

const setDrawingModeForSkiaView = (nativeId: number, mode: DrawMode) => {
  SkiaViewApi.setDrawMode(nativeId, mode);
};

const registerValuesInSkiaView = (
  nativeId: number,
  values: SkiaReadonlyValue<unknown>[]
) => {
  return SkiaViewApi.registerValuesInView(nativeId, values);
};

const assertDrawCallbacksEnabled = () => {
  if (
    SkiaViewApi === null ||
    SkiaViewApi.setDrawCallback == null ||
    SkiaViewApi.invalidateSkiaView == null
  ) {
    throw Error("Skia Api is not enabled.");
  }
};