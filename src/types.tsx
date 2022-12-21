import {useEffect, useRef, forwardRef, ForwardedRef} from 'react'
import {CanvasSpace, Bound, CanvasForm, Group, Tempo, IPlayer} from 'pts'
import {useIsomorphicLayoutEffect} from './hooks'

import React from 'react'
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
    client: {x: number | null; y: number | null}
    /*
     * Screen position - monitor
     */
    screen: {x: number | null; y: number | null}
    /*
     * Page position - viewport
     */
    page: {x: number | null; y: number | null}
  }
  /*
   * Mouse buttons
   */
  scroll: {
    wheelDown: boolean | null
    wheelUp: boolean | null
  }
  eventType: string | null
  selectedElement: SelectedElement
}

type SelectedElement = {
  /*
   * Mouse relative position to selected element
   */
  position: {
    /*
     * Angle between cursor and element : in degrees
     */
    angle: number | null
    /*
     * Distance between cursor and element
     */
    x: number | null
    y: number | null
  }
  /*
   * Bounding rectangle of selected element
   */
  boundingRect: {
    left: number | null
    top: number | null
    width: number | null
    height: number | null
  }
  /*
   * Cursor over selected element
   */
  isHover: boolean
}

export type EventType = 'mousemove' | 'mousedown' | 'mouseup' | 'touchmove' | 'touchstart' | 'wheel'

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

export type HandleStartFn = (bound: Bound, space: CanvasSpace, form: CanvasForm) => void

export type HandleAnimateFn = (space: CanvasSpace, form: CanvasForm, time: number, ftime: number) => void

export type HandleResizeFn = (
  space: CanvasSpace,
  form: CanvasForm,
  size: Group,
  evt: Event // eslint-disable-line no-undef
) => void

export type HandleActionFn = (
  space: CanvasSpace,
  form: CanvasForm,
  type: string,
  px: number,
  py: number,
  evt: Event // eslint-disable-line no-undef
) => void

export type PtsCanvasProps = {
  name?: string
  background?: string
  resize?: boolean
  retina?: boolean
  play?: boolean
  touch?: boolean
  style?: object // eslint-disable-line no-undef
  canvasStyle?: object // eslint-disable-line no-undef
  onStart?: HandleStartFn
  onAnimate: HandleAnimateFn
  onResize?: HandleResizeFn
  onAction?: HandleActionFn
  tempo?: Tempo
}

const PtsCanvasComponent = (
  {
    name = 'pts-react', // maps to className of the container div
    background = '#9ab',
    resize = true,
    retina = true,
    play = true,
    touch = true,
    style = {},
    canvasStyle = {},
    onStart = undefined,
    onAnimate = () => {
      console.log('animating')
    },
    onResize = undefined,
    onAction = undefined,
    tempo = undefined
  }: PtsCanvasProps,
  ref: ForwardedRef<HTMLCanvasElement>
) => {
  // Set canvRef to be either the forwarded ref if its a MutableRefObject, or our own local ref otherwise
  const canvRef = ref && typeof ref !== 'function' ? ref : useRef(null)
  const spaceRef = useRef<CanvasSpace>()
  const formRef = useRef<CanvasForm>()
  const playerRef = useRef<IPlayer>()

  /**
   * When canvRef Updates (ready for space)
   */
  useIsomorphicLayoutEffect(() => {
    if (!canvRef || !canvRef.current) return
    // Create CanvasSpace with the canvRef and assign to spaceRef
    // Add animation, tempo, and play when ready (call back on CanvasSpace constructor)
    spaceRef.current = new CanvasSpace(canvRef.current).setup({
      bgcolor: background,
      resize,
      retina
    })

    // Assign formRef
    formRef.current = spaceRef.current.getForm()

    // Player object
    playerRef.current = {
      start: (bound: Bound) => {
        if (onStart && spaceRef.current && formRef.current) {
          onStart(bound, spaceRef.current, formRef.current)
        }
      },
      animate: (time?: number, ftime?: number) => {
        if (time && ftime && spaceRef.current && formRef.current) {
          onAnimate(spaceRef.current, formRef.current, time, ftime)
        }
      },
      resize: (bound: Bound, event: Event) => {
        if (onResize && spaceRef.current && formRef.current) {
          onResize(spaceRef.current, formRef.current, bound, event)
        }
      },
      action: (type: string, px: number, py: number, evt: Event) => {
        if (onAction && spaceRef.current && formRef.current) {
          onAction(spaceRef.current, formRef.current, type, px, py, evt)
        }
      }
    }

    // By having individual handler props, we can expose what we need to the
    // underlying functions, like our Form instance
    spaceRef.current.add(playerRef.current)

    // Add tempo if provided
    if (tempo) {
      spaceRef.current.add(tempo)
    }

    // Return the cleanup function (similar to ComponentWillUnmount)
    return () => {
      spaceRef.current && spaceRef.current.dispose()
    }
  }, [canvRef])

  /**
   * When onStart callback updates
   */
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.start = (bound: Bound) => {
        if (onStart && spaceRef.current && formRef.current) {
          onStart(bound, spaceRef.current, formRef.current)
        }
      }
    }
  }, [onStart])

  /**
   * When onAnimate callback updates
   */
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.animate = (time?: number, ftime?: number) => {
        if (time && ftime && spaceRef.current && formRef.current) {
          onAnimate(spaceRef.current, formRef.current, time, ftime)
        }
      }
    }
  }, [onAnimate])

  /**
   * When onResize callback updates
   */
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.resize = (bound: Bound, event: Event) => {
        if (onResize && spaceRef.current && formRef.current) {
          onResize(spaceRef.current, formRef.current, bound, event)
        }
      }
    }
  }, [onResize])

  /**
   * When onAction callback updates
   */
  useEffect(() => {
    if (playerRef.current) {
      playerRef.current.action = (type: string, px: number, py: number, evt: Event) => {
        if (onAction && spaceRef.current && formRef.current) {
          onAction(spaceRef.current, formRef.current, type, px, py, evt)
        }
      }
    }
  }, [onAction])

  /**
   * When Touch updates
   */
  useEffect(() => {
    spaceRef.current && spaceRef.current.bindMouse(touch).bindTouch(touch)
  }, [touch])

  /**
   * Play or stop based on play prop
   * */
  const maybePlay = () => {
    const space = spaceRef.current
    if (!space) return
    if (play) {
      if (space.isPlaying) {
        space.resume()
      } else {
        space.replay() // if space has stopped, replay
      }
    } else {
      space.pause(true)
    }
  }

  /**
   * When anything updates
   */
  useEffect(() => {
    maybePlay()
  })

  return (
    <div className={name || ''} style={style}>
      <canvas className={name ? name + '-canvas' : ''} ref={canvRef} style={canvasStyle} />
    </div>
  )
}

export const PtsCanvas = forwardRef<HTMLCanvasElement, PtsCanvasProps>(PtsCanvasComponent)

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
  [key: string]: IPlayer
}

/**
 *Typescript interface: ITimer represents a time-recording object.
 */
export interface ITimer {
  prev: number
  diff: number
  end: number
  min: number
}

/**
 * Typescript type: TouchPointsKey represents a set of acceptable string keys for defining touch action.
 */
export type TouchPointsKey = 'touches' | 'changedTouches' | 'targetTouches'

/**
 * Typescript interface: this extends Canvas's 2D context with backingStorePixelRatio property.
 */
export interface PtsCanvasRenderingContext2D extends CanvasRenderingContext2D {
  webkitBackingStorePixelRatio?: number
  mozBackingStorePixelRatio?: number
  msBackingStorePixelRatio?: number
  oBackingStorePixelRatio?: number
  backingStorePixelRatio?: number
}

/**
 * Typescript type: Setup options for CanvasSpace. See [`CanvasSpace.setup()`](#link) function.
 */
export type CanvasSpaceOptions = {
  bgcolor?: string
  resize?: boolean
  retina?: boolean
  offscreen?: boolean
  pixelDensity?: number
}

/**
 * Typescript type: ColorType represents a defined set of string values such as "rgb" and "lab".
 */
export type ColorType = 'rgb' | 'hsl' | 'hsb' | 'lab' | 'lch' | 'luv' | 'xyz'

/**
 * Typescript type: DOMFormContext represents the current context for an DOMForm.
 */
export type DOMFormContext = {
  group: Element
  groupID: string
  groupCount: number
  currentID: string
  currentClass?: string
  style: object
}

/**
 * Typescript type: WarningType specifies a level of warning for [`Util.warnLevel`](#link).
 */
export type WarningType = 'error' | 'warn' | 'mute'

/**
 * Typescript type: a callback function type used in `tempo.every(...).start( fn )`
 */
export type ITempoStartFn = (count: number) => void | boolean

/**
 * Typescript type: a callback function type used in `tempo.every(...).progress( fn )`
 */
export type ITempoProgressFn = (count: number, t: number, ms: number, start: boolean) => void | boolean

/**
 * Typescript type: ITempoListener represents a listener created by Tempo class
 */
export type ITempoListener = {
  name?: string // reference id
  beats?: number | number[] // rhythm in beats
  period?: number // current number of beats per period
  duration?: number // current duration in ms per period
  offset?: number // time offset
  continuous?: boolean // track progress is true, otherwise track only triggers
  index?: number // if beats is an array, this is the current index
  fn: Function // callback function
}

/**
 * Typescript type: the return type of `tempo.every(...)`
 */
export type ITempoResponses = {
  start: (fn: ITempoStartFn, offset: number, name?: string) => string
  progress: (fn: ITempoProgressFn, offset: number, name?: string) => string
}

/**
 * Typescript type: ISoundAnalyzer represents an object that stores the AnalyzerNode properties
 */
export type ISoundAnalyzer = {
  node: AnalyserNode
  size: number
  data: Uint8Array
}

/**
 * Typescript type: SoundType represents a type of sound input. It corresponds to Sound.type property.
 */
export type SoundType = 'file' | 'gen' | 'input'

/**
 * Typescript type: DefaultFormStyle represents a default object for visual styles such as fill, stroke, line width, and others.
 */
export type DefaultFormStyle = {
  fillStyle?: string | CanvasGradient | CanvasPattern
  strokeStyle?: string | CanvasGradient | CanvasPattern
  lineWidth?: number
  lineJoin?: string
  lineCap?: string
  globalAlpha?: number
}

/**
 * Typescript type: CanvasPatternRepetition represents the string options to specify pattern repetition
 */
export type CanvasPatternRepetition = 'repeat' | 'repeat-x' | 'repeat-y' | 'no-repeat'
