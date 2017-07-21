// @flow
import React from 'react'
import { Field } from 'redux-form'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionCancel from 'material-ui/svg-icons/navigation/cancel'
import FlatButton from 'material-ui/FlatButton'
import { TextField } from 'redux-form-material-ui'

import css from './DeviceForm.style.css'

import type { ReduxProps } from './DeviceForm.index'

type ReactProps = {
  id: string,
  isAdding: boolean,
  isEditing: string,
  handleSubmit: Function,
}

type Props = ReactProps & ReduxProps

const DeviceForm = (props: Props): ?React$Element<any> => {

  const {
    handleSubmit,
    deviceTypes,
  } = props

  const changeState = () => {

    if (props.isAdding) {

      props.changeAddState()

    }
    if (props.isEditing) {

      props.changeEditState(props.id)

    }

  }

  const typeOptions = deviceTypes.map((option, index) => {

    return <option value={option.id} key={index}>{option.name}</option>

  })

  typeOptions.unshift(<option value="" key="opt">Select a type...</option>)

  const style = { width: '90%' }

  return (
    <div >
      <form
        className={css.container}
        onSubmit={handleSubmit}
        id="deviceForm"
      >
        <div className={css.column}>
          <Field
            name="name"
            component={TextField}
            hintText="Name"
            style={style}
          />
        </div>
        <div className={css.column}>
          <Field
            name="type"
            component="select"
            style={style}
          >
            {typeOptions}
          </Field>
        </div>
        <div className={css.column}>
          <Field
            name="ip"
            component={TextField}
            hintText="IP"
            style={style}
          />
        </div>
        <div className={css.column}>
          <FlatButton
            icon={<ActionDone />}
            type="submit"
            disabled={props.pristine}
            primary
          />
          <FlatButton
            icon={<ActionCancel />}
            primary
            onClick={changeState}
          />
        </div>
      </form>
    </div>
  )

}

export default DeviceForm
