// @flow
import fs from 'fs'
import Boom from 'boom'
import { find, findIndex } from 'lodash'
import { deviceId, deviceBody } from 'server/schemas/device'
import { devices } from 'server/data'

export default [
  {
    method: 'GET',
    path: '/api/v1/device',
    handler: (request: Object, reply: Function) => {

      reply(devices)

    },
  },
  {
    method: 'GET',
    path: '/api/v1/device/{id}',
    config: {
      validate: {
        params: deviceId,
      },
    },
    handler: (request: Object, reply: Function) => {

      const device = find(devices, { id: request.params.id })
      if (device) reply(device)
      else reply(Boom.notFound())

    },
  },
  {
    method: 'POST',
    path: '/api/v1/device',
    config: {
      validate: {
        payload: deviceBody,
      },
    },
    handler: (request: Object, reply: Function) => {

      const newDevice = {
        id: `d${Date.now()}`,
        ...request.payload,
      }
      devices.push(newDevice)
      fs.writeFile('server/data/devices.json', JSON.stringify(devices))
      reply(newDevice)

    },
  },
  {
    method: 'PUT',
    path: '/api/v1/device/{id}',
    config: {
      validate: {
        params: deviceId,
        payload: deviceBody,
      },
    },
    handler: (request: Object, reply: Function) => {

      const index = findIndex(devices, { id: request.params.id })
      if (index >= 0) {

        devices[index] = {
          id: request.params.id,
          ...request.payload,
        }
        fs.writeFile('server/data/devices.json', JSON.stringify(devices))
        reply(devices[index])

      }
      else reply(Boom.notFound())

    },
  },
  {
    method: 'DELETE',
    path: '/api/v1/device/{id}',
    config: {
      validate: {
        params: deviceId,
      },
    },
    handler: (request: Object, reply: Function) => {

      const index = findIndex(devices, { id: request.params.id })
      if (index >= 0) {

        devices.splice(index, 1)
        fs.writeFile('server/data/devices.json', JSON.stringify(devices))
        reply({ success: true })

      }
      else reply(Boom.notFound())

    },
  },

]
