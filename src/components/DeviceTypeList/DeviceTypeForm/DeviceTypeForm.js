// @flow
import React from 'react'
import { Field } from 'redux-form'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionCancel from 'material-ui/svg-icons/navigation/cancel'
import FlatButton from 'material-ui/FlatButton'
import { TextField } from 'redux-form-material-ui'

import css from './DeviceTypeForm.style.css'

import type { ReduxProps } from './DeviceTypeForm.index'

type ReactProps = {
  id: string,
  isAdding: boolean,
  isEditing: string,
  handleSubmit: Function,
}

type Props = ReactProps & ReduxProps

const DeviceTypeForm = (props: Props): ?React$Element<any> => {

  const {
    handleSubmit,
  } = props

  const changeState = () => {

    if (props.isAdding) {

      props.changeAddState()

    }
    if (props.isEditing) {

      props.changeEditState(props.id)

    }

  }

  return (
    <div >
      <form
        className={css.container}
        onSubmit={handleSubmit}
        id="deviceTypeForm"
      >
        <div className={css.column}>
          <Field
            name="name"
            component={TextField}
            hintText="Name"
            style={{ width: '90%' }}
          />
        </div>
        <div className={css.column}>
          <Field
            name="httpApi"
            component={TextField}
            hintText="HTTP API"
            style={{ width: '90%' }}
          />
        </div>
        <div className={css.column}>
          -
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

export default DeviceTypeForm
