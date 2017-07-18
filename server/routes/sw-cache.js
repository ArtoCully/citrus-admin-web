// @flow

export default [
  // Service workers and app cache
  {
    method: 'GET',
    path: '/sw.js',
    handler: {
      file: 'build/public/sw.js',
    },
  },
  {
    method: 'GET',
    path: '/appcache/{param*}',
    handler: {
      directory: {
        path: 'build/public/appcache',
      },
    },
  },
]
