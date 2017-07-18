// @flow
import htmlHandler from 'server/handlers/html'
import staticFiles from './static'
import swAndCache from './sw-cache'
import devices from './devices'
import deviceTypes from './deviceTypes'

export default [
  ...staticFiles,
  ...swAndCache,
  ...devices,
  ...deviceTypes,
  // Catch-all for react-router
  {
    method: 'GET',
    path: '/{param*}',
    handler: htmlHandler,
  },
]
