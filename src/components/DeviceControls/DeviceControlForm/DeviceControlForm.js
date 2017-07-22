// @flow
import React, { PureComponent } from 'react'
import { Field } from 'redux-form'
import MenuItem from 'material-ui/MenuItem'
import { SelectField, Toggle, Slider } from 'redux-form-material-ui'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionCancel from 'material-ui/svg-icons/navigation/cancel'
import FlatButton from 'material-ui/FlatButton'

import css from './DeviceControlForm.style.css'

import type { ReduxProps } from './DeviceControlForm.index'

type ReactProps = {
  isEditing: string,
  handleSubmit: Function,
}

type Props = ReactProps & ReduxProps


class DeviceControlForm extends PureComponent {

  constructor (props: Props) {

    super(props)
    this.getInputElement = this.getInputElement.bind(this)
    this.changeState = this.changeState.bind(this)

  }

  getInputElement: Function

  getInputElement () {

    if (isNaN(this.props.index)) return null

    const {
      index,
      device: {
        type: {
          controls,
        },
      },
    } = this.props

    switch (controls[index].type) {
      case 'button':
        return (
          <Field
            name="value"
            component={Toggle}
          />
        )

      case 'slider':
        return (
          <Field
            name="value"
            component={Slider}
            defaultValue={0}
            format={null}
            min={0}
            max={100}
            step={1}
            style={{ width: '90%' }}
          />
        )

      case 'select':
        return (
          <Field
            name="value"
            component={SelectField}
            hintText={controls[index].name}
          >
            {controls[index].options.map((option, i) => {

              return (
                <MenuItem
                  key={i}
                  value={option}
                  primaryText={option}
                />
              )

            })}
          </Field>
        )

      default:
        return null
    }

  }

  changeState () {

    if (this.props.isEditing) {

      this.props.changeEditState(this.props.index)

    }

  }

  changeState: Function
  props: Props

  render (): ?React$Element<any> {

    const {
      handleSubmit,
      name,
      type: controlType,
    } = this.props

    return (
      <div >
        <form
          className={css.container}
          onSubmit={handleSubmit}
          id="deviceControlForm"
        >
          <div className={css.column}>
            {name}
          </div>
          <div className={css.column}>
            { controlType }
          </div>
          <div className={css.column}>
            {this.getInputElement()}
          </div>
          <div className={css.column}>
            <FlatButton
              icon={<ActionDone />}
              type="submit"
              disabled={this.props.pristine}
              primary
            />
            <FlatButton
              icon={<ActionCancel />}
              primary
              onClick={this.changeState}
            />
          </div>
        </form>
      </div>
    )

  }

}

export default DeviceControlForm
