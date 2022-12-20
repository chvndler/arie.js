import {CanvasSpace, Group, Pt} from 'pts'

// const space = new CanvasSpace('#pts').setup({bgcolor: '#09F', resize: true, retina: true})
// const form = space.getForm()

const space = new CanvasSpace('#pts').setup({bgcolor: '#09F', resize: true, retina: true})
const form = space.getForm()

const chain = new Group()
let stretch = false

/**
 *
 * Initialize the CanvasSpace
 *
 */
space.add({
 start: () => {
  chain.push(space.pointer)
 },

 animate: (_time, _ftime) => {
  if (chain.length > (stretch ? 100 : 10)) chain.shift()

  form.strokeOnly('#123', 3).line(chain)
  form.fillOnly('#123').point(space.pointer, 10, 'circle')
 },

 action: (type, px, py) => {
  if (type == 'down') stretch = true
  if (type == 'up') stretch = false
  if (type == 'move') chain.push(new Pt(px, py))
 }
})

space
 .bindMouse()
 .bindTouch()
 .play()
