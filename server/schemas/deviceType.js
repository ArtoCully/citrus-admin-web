// @flow
import joi from 'joi'
import control from './control'

export const typeId = joi.object({
  id: joi.string().required(),
})

export const typeBody = joi.object({
  name: joi.string().required(),
  httpApi: joi.string().allow(''),
  controls: joi.array().items(control).required(),
})

export const deviceType = joi.object({
  id: joi.string().required(),
  name: joi.string().required(),
  httpApi: joi.string().allow(''),
  controls: joi.array().items(control).required(),
})
