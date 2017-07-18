// @flow
import {
  getDeviceType,
  saveDeviceType,
  removeDeviceType as removeDeviceTypeApi,
} from 'src/helpers/api/device-types'

export const ADD_DEVICE_TYPES = 'citrus/device-types/ADD_DEVICE_TYPES'
export const EDIT_DEVICE_TYPES = 'citrus/device-types/EDIT_DEVICE_TYPES'
export const CHANGE_EDIT_STATE = 'citrus/device-types/CHANGE_EDIT_STATE'
export const CHANGE_ADD_STATE = 'citrus/device-types/CHANGE_ADD_STATE'
export const REMOVE_DEVICE_TYPES = 'citrus/device-types/REMOVE_DEVICE_TYPES'
export const FETCH_DEVICE_TYPES = 'citrus/device-types/FETCH_DEVICE_TYPES'

export type DeviceTypesState = {
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
  state: DeviceTypesState = initialState,
  action: GlobalFSA<*>,
) => {

  switch (action.type) {

    case `${REMOVE_DEVICE_TYPES}_PENDING`:
      return {
        ...state,
        isEditing: action.payload,
        isFetching: true,
      }
    case `${REMOVE_DEVICE_TYPES}_FULFILLED`: {

      const deviceTypeList = state.list
      const index = deviceTypeList.findIndex((item) => {

        return item.id === action.payload.data.id

      })
      if (index > -1) {


        deviceTypeList.splice(index, 1)

      }
      return {
        ...state,
        isEditing: '',
        isFetching: false,
        list: deviceTypeList,
      }

    }
    case `${REMOVE_DEVICE_TYPES}_REJECTED`: {

      return {
        ...state,
        isEditing: '',
        isFetching: false,
        error: action.payload,
      }

    }
    case CHANGE_EDIT_STATE: {

      const editing = !state.isEditing ? action.payload : ''

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
    case `${ADD_DEVICE_TYPES}_PENDING`:
      return {
        ...state,
        isFetching: true,
        isAdding: true,
      }

    case `${ADD_DEVICE_TYPES}_FULFILLED`: {

      const deviceTypeList = state.list

      const newDeviceType = {
        ...action.payload.data,
      }
      deviceTypeList.unshift(newDeviceType)
      return {
        ...state,
        isAdding: false,
        isFetching: false,
        list: deviceTypeList,
      }

    }
    case `${ADD_DEVICE_TYPES}_REJECTED`:
      return {
        ...state,
        isAdding: false,
        isFetching: false,
      }

    case `${EDIT_DEVICE_TYPES}_PENDING`:
      return {
        ...state,
        isFetching: true,
      }

    case `${EDIT_DEVICE_TYPES}_FULFILLED`: {

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
        isEditing: '',
        isFetching: false,
        list: newList,
      }

    }
    case `${EDIT_DEVICE_TYPES}_REJECTED`:
      return {
        ...state,
        isFetching: false,
      }
    case `${FETCH_DEVICE_TYPES}_PENDING`:
      return {
        ...state,
        isFetching: true,
      }

    case `${FETCH_DEVICE_TYPES}_FULFILLED`:
      return {
        ...state,
        isFetching: false,
        list: action.payload.data,
      }

    case `${FETCH_DEVICE_TYPES}_REJECTED`:
      return {
        ...state,
        error: action.payload.data,
        isFetching: false,
      }

    default:
      return state

  }

}

export const changeEditState = (deviceTypeId: string) => {

  return {
    type: CHANGE_EDIT_STATE,
    payload: deviceTypeId,
  }

}

export const changeAddState = () => {

  return {
    type: CHANGE_ADD_STATE,
  }

}


// thunk
export const addDeviceTypes = (deviceType: Object): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: ADD_DEVICE_TYPES,
      payload: saveDeviceType(deviceType),
    })

  }

}

export const editDeviceTypes = (deviceType: Object): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: EDIT_DEVICE_TYPES,
      payload: saveDeviceType(deviceType),
    })

  }

}

export const fetchDeviceTypes = (): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: FETCH_DEVICE_TYPES,
      payload: getDeviceType(),
    })

  }

}

export const removeDeviceType = (deviceTypeId: number): Function => {

  return (dispatch: Function) => {

    return dispatch({
      type: REMOVE_DEVICE_TYPES,
      payload: removeDeviceTypeApi(deviceTypeId),
    })

  }

}

export default reducer
