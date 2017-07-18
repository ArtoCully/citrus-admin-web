/* eslint-disable */

import type { EnvState } from 'redux/modules/env'
import type { RequestState } from 'redux/modules/request'
import type { InitState } from 'redux/modules/init'
import type { UIState } from 'redux/modules/ui'
import type { DeviceTypeState } from 'redux/modules/device-type'


type GlobalReducerState = {
  env: EnvState,
  request: RequestState,
  init: InitState,
  ui: UIState,
  deviceType: DeviceTypeState,

  // redux-form
  form: Object,
  // react-router-redux
  routing: Object,
}

type GlobalFSA<T> = {
  type: string,
  payload: T,
  error?: boolean,
  meta?: Object,
}
