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
