// @flow
import joi from 'joi'
import { deviceType } from './deviceType'

export const deviceId = joi.object({
  id: joi.string().required(),
})

export const deviceBody = joi.object({
  name: joi.string().required(),
  ip: joi.string().required(),
  type: deviceType,
})
