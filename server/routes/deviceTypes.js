// @flow
import fs from 'fs'
import Boom from 'boom'
import { find, findIndex, filter } from 'lodash'
import { typeId, typeBody } from 'server/schemas/deviceType'
import { devices, deviceTypes } from 'server/data'

const applyChangesToDevices = (deviceType, isDeleted) => {

  const devicesToChange = filter(devices, (device) => {

    const { type = {} } = device
    return `${type.id}` === `${deviceType.id}`

  })
  devicesToChange.forEach((device) => {

    const index = findIndex(devices, { id: device.id })
    if (index >= 0) {

      const type = isDeleted ? null : deviceType
      devices[index] = {
        ...device,
        type,
      }
      fs.writeFile('server/data/devices.json', JSON.stringify(devices))

    }

  })

}

export default [
  {
    method: 'GET',
    path: '/api/v1/device-type',
    handler: (request: Object, reply: Function) => {

      reply(deviceTypes)

    },
  },
  {
    method: 'GET',
    path: '/api/v1/device-type/{id}',
    config: {
      validate: {
        params: typeId,
      },
    },
    handler: (request: Object, reply: Function) => {

      const deviceType = find(deviceTypes, { id: request.params.id })
      if (deviceType) reply(deviceType)
      else reply(Boom.notFound())

    },
  },
  {
    method: 'POST',
    path: '/api/v1/device-type',
    config: {
      validate: {
        payload: typeBody,
      },
    },
    handler: (request: Object, reply: Function) => {

      const newDeviceTypes = {
        id: `t${Date.now()}`,
        ...request.payload,
      }
      deviceTypes.push(newDeviceTypes)
      fs.writeFile('server/data/deviceTypes.json', JSON.stringify(deviceTypes))
      reply(newDeviceTypes)

    },
  },
  {
    method: 'PUT',
    path: '/api/v1/device-type/{id}',
    config: {
      validate: {
        params: typeId,
        payload: typeBody,
      },
    },
    handler: (request: Object, reply: Function) => {

      const index = findIndex(deviceTypes, { id: request.params.id })
      if (index >= 0) {

        deviceTypes[index] = {
          id: request.params.id,
          ...request.payload,
        }
        fs.writeFile('server/data/deviceTypes.json', JSON.stringify(deviceTypes))
        applyChangesToDevices(deviceTypes[index])
        reply(deviceTypes[index])

      }
      else reply(Boom.notFound())

    },
  },
  {
    method: 'DELETE',
    path: '/api/v1/device-type/{id}',
    config: {
      validate: {
        params: typeId,
      },
    },
    handler: (request: Object, reply: Function) => {

      const index = findIndex(deviceTypes, { id: request.params.id })
      if (index >= 0) {

        deviceTypes.splice(index, 1)
        fs.writeFile('server/data/deviceTypes.json', JSON.stringify(deviceTypes))
        applyChangesToDevices(deviceTypes[index], true)
        reply({ success: true })

      }
      else reply(Boom.notFound())

    },
  },

]
