// @flow
import { createSelector } from 'reselect'

const getList = (state) => {

  return state.device.list

}

const getId = (state, deviceId) => {

  return deviceId

}

const getDeviceById = createSelector(
  [getList, getId],
  (devices, deviceId) => {

    const selectedDevice = devices.find((device) => {

      return device.id === deviceId

    })
    return selectedDevice

  }
)

export default getDeviceById
