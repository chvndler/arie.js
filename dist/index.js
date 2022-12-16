
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./arie-js.cjs.production.min.js')
} else {
  module.exports = require('./arie-js.cjs.development.js')
}
