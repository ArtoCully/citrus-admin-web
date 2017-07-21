/* eslint-disable */

import type { EnvState } from 'redux/modules/env'
import type { RequestState } from 'redux/modules/request'
import type { InitState } from 'redux/modules/init'
import type { UIState } from 'redux/modules/ui'
import type { DeviceTypeState } from 'redux/modules/device-type'
import type { DeviceState } from 'redux/modules/device'


type GlobalReducerState = {
  env: EnvState,
  request: RequestState,
  init: InitState,
  ui: UIState,
  deviceType: DeviceTypeState,
  device: DeviceState,

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
