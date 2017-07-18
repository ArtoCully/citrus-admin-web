// @flow
import { createSelector } from 'reselect'

const getList = (state) => {

  return state.deviceType.list

}

const getId = (state, deviceTypeId) => {

  return deviceTypeId

}

const getDeviceTypeById = createSelector(
  [getList, getId],
  (deviceTypes, deviceTypeId) => {

    const selectedDeviceType = deviceTypes.find((deviceType) => {

      return deviceType.id === deviceTypeId

    })
    return selectedDeviceType

  }
)

export default getDeviceTypeById
