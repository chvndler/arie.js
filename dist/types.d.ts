import { CanvasSpace, Bound, CanvasForm, Group, Tempo, IPlayer } from 'pts';
import React from 'react';
/**
 *
 *
 *
 * @MainCurser....
 *
 *
 *
 */
export declare type Cursor = {
    position: {
        client: {
            x: number | null;
            y: number | null;
        };
        screen: {
            x: number | null;
            y: number | null;
        };
        page: {
            x: number | null;
            y: number | null;
        };
    };
    scroll: {
        wheelDown: boolean | null;
        wheelUp: boolean | null;
    };
    eventType: string | null;
    selectedElement: SelectedElement;
};
declare type SelectedElement = {
    position: {
        angle: number | null;
        x: number | null;
        y: number | null;
    };
    boundingRect: {
        left: number | null;
        top: number | null;
        width: number | null;
        height: number | null;
    };
    isHover: boolean;
};
export declare type EventType = 'mousemove' | 'mousedown' | 'mouseup' | 'touchmove' | 'touchstart' | 'wheel';
/**
 *
 *
 *
 *
 * @PTS
 *
 *
 *
 */
export declare type HandleStartFn = (bound: Bound, space: CanvasSpace, form: CanvasForm) => void;
export declare type HandleAnimateFn = (space: CanvasSpace, form: CanvasForm, time: number, ftime: number) => void;
export declare type HandleResizeFn = (space: CanvasSpace, form: CanvasForm, size: Group, evt: Event) => void;
export declare type HandleActionFn = (space: CanvasSpace, form: CanvasForm, type: string, px: number, py: number, evt: Event) => void;
export declare type PtsCanvasProps = {
    name?: string;
    background?: string;
    resize?: boolean;
    retina?: boolean;
    play?: boolean;
    touch?: boolean;
    style?: object;
    canvasStyle?: object;
    onStart?: HandleStartFn;
    onAnimate: HandleAnimateFn;
    onResize?: HandleResizeFn;
    onAction?: HandleActionFn;
    tempo?: Tempo;
};
export declare const PtsCanvas: React.ForwardRefExoticComponent<PtsCanvasProps & React.RefAttributes<HTMLCanvasElement>>;
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
export declare type TouchPointsKey = 'touches' | 'changedTouches' | 'targetTouches';
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
export declare type CanvasSpaceOptions = {
    bgcolor?: string;
    resize?: boolean;
    retina?: boolean;
    offscreen?: boolean;
    pixelDensity?: number;
};
/**
 * Typescript type: ColorType represents a defined set of string values such as "rgb" and "lab".
 */
export declare type ColorType = 'rgb' | 'hsl' | 'hsb' | 'lab' | 'lch' | 'luv' | 'xyz';
/**
 * Typescript type: DOMFormContext represents the current context for an DOMForm.
 */
export declare type DOMFormContext = {
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
export declare type WarningType = 'error' | 'warn' | 'mute';
/**
 * Typescript type: a callback function type used in `tempo.every(...).start( fn )`
 */
export declare type ITempoStartFn = (count: number) => void | boolean;
/**
 * Typescript type: a callback function type used in `tempo.every(...).progress( fn )`
 */
export declare type ITempoProgressFn = (count: number, t: number, ms: number, start: boolean) => void | boolean;
/**
 * Typescript type: ITempoListener represents a listener created by Tempo class
 */
export declare type ITempoListener = {
    name?: string;
    beats?: number | number[];
    period?: number;
    duration?: number;
    offset?: number;
    continuous?: boolean;
    index?: number;
    fn: Function;
};
/**
 * Typescript type: the return type of `tempo.every(...)`
 */
export declare type ITempoResponses = {
    start: (fn: ITempoStartFn, offset: number, name?: string) => string;
    progress: (fn: ITempoProgressFn, offset: number, name?: string) => string;
};
/**
 * Typescript type: ISoundAnalyzer represents an object that stores the AnalyzerNode properties
 */
export declare type ISoundAnalyzer = {
    node: AnalyserNode;
    size: number;
    data: Uint8Array;
};
/**
 * Typescript type: SoundType represents a type of sound input. It corresponds to Sound.type property.
 */
export declare type SoundType = 'file' | 'gen' | 'input';
/**
 * Typescript type: DefaultFormStyle represents a default object for visual styles such as fill, stroke, line width, and others.
 */
export declare type DefaultFormStyle = {
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
export declare type CanvasPatternRepetition = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat';
export {};
