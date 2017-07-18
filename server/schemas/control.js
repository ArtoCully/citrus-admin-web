// @flow
import joi from 'joi'

export default joi.object({
  type: joi.string().valid('slider', 'select', 'button').required(),
  name: joi.string().required(),
  options: joi.array().items(
    joi.string(),
  ),
  value: joi.alternatives().try(
    joi.boolean(),
    joi.number(),
    joi.string().allow(''),
  ),
})
