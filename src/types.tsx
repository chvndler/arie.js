
import { CanvasSpace, Bound, CanvasForm, Group, Tempo, IPlayer } from 'pts';
/**
 *
 *
 *
 * @MainCurser....
 *
 *
 *
 */
export type Cursor = {
  /*
   * Mouse position
   */
  position: {
    /*
     * Client position - browser rendered content
     */
    client: { x: number | null; y: number | null };
    /*
     * Screen position - monitor
     */
    screen: { x: number | null; y: number | null };
    /*
     * Page position - viewport
     */
    page: { x: number | null; y: number | null };
  };
  /*
   * Mouse buttons
   */
  scroll: {
    wheelDown: boolean | null;
    wheelUp: boolean | null;
  };
  eventType: string | null;
  selectedElement: SelectedElement;
};

export type SelectedElement = {
  /*
   * Mouse relative position to selected element
   */
  position: {
    /*
     * Angle between cursor and element : in degrees
     */
    angle: number | null;
    /*
     * Distance between cursor and element
     */
    x: number | null;
    y: number | null;
  };
  /*
   * Bounding rectangle of selected element
   */
  boundingRect: {
    left: number | null;
    top: number | null;
    width: number | null;
    height: number | null;
  };
  /*
   * Cursor over selected element
   */
  isHover: boolean;
};

export interface CursorDot {
  dotSize?: number; // useArieDot() hook
}

export interface CursorDotPosition {
  // useArieDot() hook
  x: number;
  y: number;
}

export interface ScrollProps {
  // useArieScroll() hook

  /**
   * The window object.
   */
  window: Window;
  /**
   * The document object.
   */
  document: Document;
  /**
   * className for custom styling..
   */
  className?: string;
}

export type EType =
  | 'mousemove'
  | 'mousedown'
  | 'mouseup'
  | 'touchmove'
  | 'touchstart'
  | 'wheel';

export type EventType = [
  'mousemove',
  'mousedown',
  'mouseup',
  'touchmove',
  'touchstart',
  'wheel'
][number];


export type HandleStartFn = (
  bound: Bound,
  space: CanvasSpace,
  form: CanvasForm
) => void;

export type HandleAnimateFn = (
  space: CanvasSpace,
  form: CanvasForm,
  time: number,
  ftime: number
) => void;

export type HandleResizeFn = (
  space: CanvasSpace,
  form: CanvasForm,
  size: Group,
  evt: Event // eslint-disable-line no-undef
) => void;

export type HandleActionFn = (
  space: CanvasSpace,
  form: CanvasForm,
  type: string,
  px: number,
  py: number,
  evt: Event // eslint-disable-line no-undef
) => void;

export type PtsCanvasProps = {
  name?: string;
  background?: string;
  resize?: boolean;
  retina?: boolean;
  play?: boolean;
  touch?: boolean;
  style?: object; // eslint-disable-line no-undef
  canvasStyle?: object; // eslint-disable-line no-undef
  onStart?: HandleStartFn;
  onAnimate: HandleAnimateFn;
  onResize?: HandleResizeFn;
  onAction?: HandleActionFn;
  tempo?: Tempo;
};




/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/**
 * Typescript interface: ISpacePlayers represents a map of IPlayer instances.
 */
export interface ISpacePlayers {
  [key: string]: IPlayer;
}

/**
 *Typescript interface: ITimer represents a time-recording object.
 */
export interface ITimer {
  prev: number;
  diff: number;
  end: number;
  min: number;
}

/**
 * Typescript type: TouchPointsKey represents a set of acceptable string keys for defining touch action.
 */
export type TouchPointsKey = 'touches' | 'changedTouches' | 'targetTouches';

/**
 * Typescript interface: this extends Canvas's 2D context with backingStorePixelRatio property.
 */
export interface PtsCanvasRenderingContext2D extends CanvasRenderingContext2D {
  webkitBackingStorePixelRatio?: number;
  mozBackingStorePixelRatio?: number;
  msBackingStorePixelRatio?: number;
  oBackingStorePixelRatio?: number;
  backingStorePixelRatio?: number;
}

/**
 * Typescript type: Setup options for CanvasSpace. See [`CanvasSpace.setup()`](#link) function.
 */
export type CanvasSpaceOptions = {
  bgcolor?: string;
  resize?: boolean;
  retina?: boolean;
  offscreen?: boolean;
  pixelDensity?: number;
};

/**
 * Typescript type: ColorType represents a defined set of string values such as "rgb" and "lab".
 */
export type ColorType = 'rgb' | 'hsl' | 'hsb' | 'lab' | 'lch' | 'luv' | 'xyz';

/**
 * Typescript type: DOMFormContext represents the current context for an DOMForm.
 */
export type DOMFormContext = {
  group: Element;
  groupID: string;
  groupCount: number;
  currentID: string;
  currentClass?: string;
  style: object;
};

/**
 * Typescript type: WarningType specifies a level of warning for [`Util.warnLevel`](#link).
 */
export type WarningType = 'error' | 'warn' | 'mute';

/**
 * Typescript type: a callback function type used in `tempo.every(...).start( fn )`
 */
export type ITempoStartFn = (count: number) => void | boolean;

/**
 * Typescript type: a callback function type used in `tempo.every(...).progress( fn )`
 */
export type ITempoProgressFn = (
  count: number,
  t: number,
  ms: number,
  start: boolean
) => void | boolean;

/**
 * Typescript type: ITempoListener represents a listener created by Tempo class
 */
export type ITempoListener = {
  name?: string; // reference id
  beats?: number | number[]; // rhythm in beats
  period?: number; // current number of beats per period
  duration?: number; // current duration in ms per period
  offset?: number; // time offset
  continuous?: boolean; // track progress is true, otherwise track only triggers
  index?: number; // if beats is an array, this is the current index
  fn: Function; // callback function
};

/**
 * Typescript type: the return type of `tempo.every(...)`
 */
export type ITempoResponses = {
  start: (fn: ITempoStartFn, offset: number, name?: string) => string;
  progress: (fn: ITempoProgressFn, offset: number, name?: string) => string;
};

/**
 * Typescript type: ISoundAnalyzer represents an object that stores the AnalyzerNode properties
 */
export type ISoundAnalyzer = {
  node: AnalyserNode;
  size: number;
  data: Uint8Array;
};

/**
 * Typescript type: SoundType represents a type of sound input. It corresponds to Sound.type property.
 */
export type SoundType = 'file' | 'gen' | 'input';

/**
 * Typescript type: DefaultFormStyle represents a default object for visual styles such as fill, stroke, line width, and others.
 */
export type DefaultFormStyle = {
  fillStyle?: string | CanvasGradient | CanvasPattern;
  strokeStyle?: string | CanvasGradient | CanvasPattern;
  lineWidth?: number;
  lineJoin?: string;
  lineCap?: string;
  globalAlpha?: number;
};

/**
 * Typescript type: CanvasPatternRepetition represents the string options to specify pattern repetition
 */
export type CanvasPatternRepetition =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat';
