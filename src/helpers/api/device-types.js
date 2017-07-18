// @flow
import env from 'config/env'
import { get, post, put, del, mock } from './'

const { API_URL, USE_MOCK_API } = env

export const getDeviceTypeMock = () => {

  return mock({
    list: [
      {
        id: 't1500670834368',
        name: 'Samsung Audio',
        httpApi: '',
        controls: [
          {
            type: 'button',
            name: 'Power',
          },
          {
            type: 'slider',
            name: 'Volume',
          },
          {
            type: 'select',
            name: 'Playlist',
            options: [
              'AC/DC - thunderstruck',
              'Metallica - Nothing else matters',
              'Foo Fighters - Run',
            ],
          },
        ],
      },
    ],
  })

}

export const getDeviceType = () => {

  return USE_MOCK_API
    ? getDeviceTypeMock()
    : get(`${API_URL}/api/v1/device-type`)

}

export const saveDeviceTypeMock = (deviceType: Object) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      return resolve({
        deviceType,
      })

    }, 1000)

  })

}

export const saveDeviceType = (deviceType: Object) => {

  const deviceTypePayload = {
    name: deviceType.name,
    httpApi: deviceType.httpApi,
    controls: deviceType.controls,
  }

  const urlCall = deviceType.id
    ? put(`${API_URL}/api/v1/device-type/${deviceType.id}`, deviceTypePayload)
    : post(`${API_URL}/api/v1/device-type`, deviceTypePayload)

  return USE_MOCK_API
    ? getDeviceTypeMock()
    : urlCall

}

export const removeDeviceTypeMock = () => {

  return mock({
    success: true,
  })

}

export const removeDeviceType = (deviceTypeId: number) => {

  return USE_MOCK_API
    ? removeDeviceTypeMock()
    : del(`${API_URL}/api/v1/device-type/${deviceTypeId}`)

}
