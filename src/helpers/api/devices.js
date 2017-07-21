// @flow
import env from 'config/env'
import { get, post, put, del, mock } from './'

const { API_URL, USE_MOCK_API } = env

export const getDeviceMock = () => {

  return mock({
    list: [
      {
        id: '1',
        name: 'Senadores 2017',
        description: 'Sondeo de elecciones en Rosario',
        created: '2017-06-12 18:37:18',
        visible: '0',
        active: '1',
      },
      {
        id: '2',
        name: 'Seguridad Publica',
        description: 'Sensación de seguridad en la gente',
        created: '2017-06-12 18:38:08',
        visible: '1',
        active: '1',
      },
    ],
  })

}

export const getDevice = () => {

  return USE_MOCK_API
    ? getDeviceMock()
    : get(`${API_URL}/api/v1/device`)

}

export const saveDeviceMock = (device: Object) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      return resolve({
        device,
      })

    }, 1000)

  })

}

export const saveDevice = (device: Object) => {

  const devicePayload = {
    name: device.name,
    ip: device.ip,
    type: device.type,
  }

  const urlCall = device.id
    ? put(`${API_URL}/api/v1/device/${device.id}`, devicePayload)
    : post(`${API_URL}/api/v1/device`, devicePayload)

  return USE_MOCK_API
    ? getDeviceMock()
    : urlCall

}

export const removeDeviceMock = () => {

  return mock({})

}

export const removeDevice = (deviceId: number) => {

  return USE_MOCK_API
    ? removeDeviceMock()
    : del(`${API_URL}/api/v1/device/${deviceId}`)

}
