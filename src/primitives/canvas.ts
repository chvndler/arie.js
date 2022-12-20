import {CanvasSpace, Create, Polygon, GroupLike} from 'pts'

// Initiate Space and Form
const space = new CanvasSpace('#pts').setup({bgcolor: '#09F', resize: true, retina: true})
const form = space.getForm()

let landmarks: GroupLike | number[][]

space.add({
 /**
  *
  *
  *
  * Initialize the player
  *
  *
  *
  */
 start: (_bound) => {
  /**
   * Create a group of points that will be used as landmarks
   */

  /**
   *
   *
   */
  const radius = space.size.minValue().value / 3
  landmarks = Create.radialPts(space.center, radius, 30)
  landmarks.map((p: {add: (arg0: number) => any}) => p.add(50 * (Math.random() - Math.random())))
 },

 /**
  *
  *
  *
  * @animates
  *
  *
  *
  */

 animate: () => {
  landmarks[landmarks.length - 1] = space.pointer

  // convex hull the points
  let hull = Polygon.convexHull(landmarks)

  // eyes' positions
  let left = space.center.$subtract(50)
  let right = space.center.$add(50, -50)
  let leftB = left.clone().toAngle(space.pointer.$subtract(left).angle(), 10, true)
  let rightB = right.clone().toAngle(space.pointer.$subtract(right).angle(), 10, true)

  // draw face and eyes
  form.fillOnly('rgba(255, 255, 255, 0.5)').polygon(hull)
  form.fill('#fff').points([left, right], 20, 'circle')
  form.fill('#123').points([leftB, rightB], 5, 'circle')

  // draw the hull and pts
  form.fill('#fff').points(hull, 5, 'circle')
  form.fill('rgba(0,0,0,.5)').points(landmarks, 2, 'circle')
  form.fill('#f03').point(space.pointer, 10, 'circle')

  // draw mouth
  form.strokeOnly('#123', 5).line([left.$add(0, 80), right.$add(0, 80)])
 }
})

space
 .bindMouse()
 .bindTouch()
 .play()
