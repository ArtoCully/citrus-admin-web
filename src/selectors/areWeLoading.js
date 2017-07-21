// @flow
import { createSelector } from 'reselect'

const getInitLoading = (state) => {

  return state.init.isLoading

}

const getDevice = (state) => {

  return state.device.isFetching

}

const getDeviceType = (state) => {

  return state.deviceType.isFetching

}

const getUiLoading = (state) => {

  return state.ui.showLoading

}


const areWeLoading = createSelector([
  getInitLoading,
  getDevice,
  getDeviceType,
  getUiLoading,
], (
  initLoading,
  device,
  deviceType,
  uiLoading,
) => {

  if (
    initLoading
    || device
    || deviceType
    || uiLoading
  ) {

    return true

  }
  // default
  return false

})


export default areWeLoading
