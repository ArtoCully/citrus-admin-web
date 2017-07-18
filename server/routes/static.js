// @flow

export default [
  {
    method: 'GET',
    path: '/static/{param*}',
    handler: {
      directory: {
        path: 'build/public',
        lookupCompressed: true,
      },
    },
  },
]
