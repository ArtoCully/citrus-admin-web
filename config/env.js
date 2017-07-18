// @flow

export type EnvState = {

  NODE_ENV: string,

  API_URL: string,
  ROOT_URL: string,
  USE_MOCK_API: boolean,
  SECURE_COOKIE: boolean,
  SHOW_ERRORS: boolean,

}


// Grab from env vars if they are set
const {

  NODE_ENV,

  API_URL,
  ROOT_URL,
  USE_MOCK_API,
  SECURE_COOKIE,
  SHOW_ERRORS,

} = process.env


// Set defaults
const env: EnvState = {

  // Since NODE_ENV is automatically used by many plugins, we can't ensure it
  // will produce dev/prod parity by itself. Consequently, we need to use
  // separate ENVs for apps.
  NODE_ENV: NODE_ENV || 'production',

  // App settings
  API_URL: API_URL || 'http://localhost:3000',
  ROOT_URL: ROOT_URL || 'http://localhost:3000',
  USE_MOCK_API: USE_MOCK_API === 'true' || false,
  SECURE_COOKIE: SECURE_COOKIE === 'true' || false,
  SHOW_ERRORS: SHOW_ERRORS === 'true' || true,

}


export const isBrowser = (): boolean => {

  return Boolean(typeof window !== 'undefined' && window.document)

}


const getEnv = (): EnvState => {

  if (NODE_ENV === 'test') return env

  if (isBrowser()) {

    return window.__ENV__

  }

  return env

}


const dynamicEnv = getEnv()


export default dynamicEnv
