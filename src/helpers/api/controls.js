// @flow
import env from 'config/env'
import { get, post, put, del, mock } from './'

const { API_URL, USE_MOCK_API } = env

export const getControlMock = () => {

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

export const getControl = () => {

  return USE_MOCK_API
    ? getControlMock()
    : get(`${API_URL}/api/v1/control`)

}

export const saveControlMock = (control: Object) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      return resolve({
        control,
      })

    }, 1000)

  })

}

export const saveControl = (control: Object) => {

  const urlCall = control.id
    ? put(`${API_URL}/api/v1/control/${control.id}`, control)
    : post(`${API_URL}/api/v1/control`, control)

  return USE_MOCK_API
    ? getControlMock()
    : urlCall

}

export const removeControlMock = () => {

  return mock({})

}

export const removeControl = (controlId: number) => {

  return USE_MOCK_API
    ? removeControlMock()
    : del(`${API_URL}/api/v1/control/${controlId}`)

}
