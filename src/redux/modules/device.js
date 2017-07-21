// @flow
import {
  getDevice,
  saveDevice,
  removeDevice as removeDeviceApi,
} from 'src/helpers/api/devices'

export const ADD_DEVICES = 'citrus/devices/ADD_DEVICES'
export const EDIT_DEVICES = 'citrus/devices/EDIT_DEVICES'
export const CHANGE_EDIT_STATE = 'citrus/devices/CHANGE_EDIT_STATE'
export const CHANGE_ADD_STATE = 'citrus/devices/CHANGE_ADD_STATE'
export const REMOVE_DEVICES = 'citrus/devices/REMOVE_DEVICES'
export const FETCH_DEVICES = 'citrus/devices/FETCH_DEVICES'

export type DevicesState = {
  list: Array<Object>,
  isFetching: boolean,
  isEditing: string,
  isDeleting: boolean,
  isAdding: boolean,
  error: string,
}

const initialState = {
  list: [],
  isFetching: false,
  isEditing: '',
  isDeleting: false,
  isAdding: false,
  error: '',
}

const reducer = (
  state: DevicesState = initialState,
  action: GlobalFSA<*>,
) => {

  switch (action.type) {

    case `${REMOVE_DEVICES}_PENDING`:
      return {
        ...state,
        isFetching: true,
        isEditing: action.payload,
      }
    case `${REMOVE_DEVICES}_FULFILLED`: {

      const deviceList = state.list
      const index = deviceList.findIndex((item) => {

        return item.id === action.payload.data.id

      })
      if (index > -1) {


        deviceList.splice(index, 1)

      }
      return {
        ...state,
        isFetching: false,
        isEditing: '',
        list: deviceList,
      }

    }
    case `${REMOVE_DEVICES}_REJECTED`: {

      return {
        ...state,
        isFetching: false,
        isEditing: '',
        error: action.payload,
      }

    }
    case CHANGE_EDIT_STATE: {

      let editing = ''

      if (state.isEditing === '') {

        editing = action.payload

      }
      return {
        ...state,
        isEditing: editing,
      }

    }
    case CHANGE_ADD_STATE: {

      return {
        ...state,
        isAdding: !state.isAdding,
      }

    }
    case `${ADD_DEVICES}_PENDING`:
      return {
        ...state,
        isFetching: true,
        isAdding: true,
      }

    case `${ADD_DEVICES}_FULFILLED`: {

      const deviceList = state.list

      const newDevice = {
        ...action.payload.data,
      }
      deviceList.unshift(newDevice)
      return {
        ...state,
        isFetching: false,
        isAdding: false,
        list: deviceList,
      }

    }
    case `${ADD_DEVICES}_REJECTED`:
      return {
        ...state,
        isFetching: false,
        isAdding: false,
      }

    case `${EDIT_DEVICES}_PENDING`:
      return {
        ...state,
        isFetching: true,
      }

    case `${EDIT_DEVICES}_FULFILLED`: {


      const newList = state.list.map((item, index) => {

        if (item.id === action.payload.data.id) {

          return {
            ...item,
            ...action.payload.data,
          }

        }

        return item

      })
      return {
        ...state,
        isFetching: false,
        isEditing: '',
        list: newList,
      }

    }
    case `${EDIT_DEVICES}_REJECTED`:
      return {
        ...state,
        isFetching: false,
      }
    case `${FETCH_DEVICES}_PENDING`:
      return {
        ...state,
        isFetching: true,
      }

    case `${FETCH_DEVICES}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        list: action.payload.data,
      }

    case `${FETCH_DEVICES}_REJECTED`:
      return {
        ...state,
        error: action.payload.data,
        isFetching: false,
      }

    default:
      return state

  }

}

export const changeEditState = (deviceId: string) => {

  return {
    type: CHANGE_EDIT_STATE,
    payload: deviceId,
  }

}

export const changeAddState = () => {

  return {
    type: CHANGE_ADD_STATE,
  }

}


// thunk
export const addDevices = (device: Object): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: ADD_DEVICES,
      payload: saveDevice(device),
    })

  }

}

export const editDevices = (device: Object): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: EDIT_DEVICES,
      payload: saveDevice(device),
    })

  }

}

export const fetchDevices = (): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: FETCH_DEVICES,
      payload: getDevice(),
    })

  }

}

export const removeDevice = (deviceId: number): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: REMOVE_DEVICES,
      payload: removeDeviceApi(deviceId),
    })

  }

}

export default reducer
