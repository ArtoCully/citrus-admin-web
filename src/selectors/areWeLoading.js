// @flow
import { createSelector } from 'reselect'

const getInitLoading = (state) => {

  return state.init.isLoading

}

const getDeviceType = (state) => {

  return state.deviceType.isFetching

}

const getUiLoading = (state) => {

  return state.ui.showLoading

}


const areWeLoading = createSelector([
  getInitLoading,
  getDeviceType,
  getUiLoading,
], (
  initLoading,
  deviceType,
  uiLoading,
) => {

  if (
    initLoading
    || deviceType
    || uiLoading
  ) {

    return true

  }
  // default
  return false

})


export default areWeLoading
