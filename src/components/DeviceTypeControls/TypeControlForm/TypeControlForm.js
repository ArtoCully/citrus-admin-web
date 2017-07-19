// @flow
import React, { PureComponent } from 'react'
import { Field } from 'redux-form'
import ContentAddBox from 'material-ui/svg-icons/content/add-box'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionDone from 'material-ui/svg-icons/action/done'
import ActionCancel from 'material-ui/svg-icons/navigation/cancel'
import FlatButton from 'material-ui/FlatButton'
import { TextField } from 'redux-form-material-ui'

import css from './TypeControlForm.style.css'

import type { ReduxProps } from './TypeControlForm.index'

type ReactProps = {
  isAdding: boolean,
  isEditing: string,
  textInput: Object,
  addOption: Function,
  removeOption: Function,
  changeState: Function,
}

type Props = ReactProps & ReduxProps


class TypeControlForm extends PureComponent {

  constructor (props: Props) {

    super(props)
    this.addOption = this.addOption.bind(this)
    this.removeOption = this.removeOption.bind(this)
    this.changeState = this.changeState.bind(this)

  }

  addOption: Function
  removeOption: Function
  changeState: Function

  addOption (option: Object) {

    if (!this.textInput.value) return

    const deviceType = {
      ...this.props.deviceType,
      controls: [
        ...this.props.deviceType.controls,
      ],
    }

    const { index } = this.props

    deviceType.controls[index].options.push(this.textInput.value)
    this.props.editDeviceTypes(deviceType)

  }

  removeOption (optIndex: Number) {

    const deviceType = {
      ...this.props.deviceType,
      controls: [
        ...this.props.deviceType.controls,
      ],
    }

    const { index } = this.props

    deviceType.controls[index].options.splice(optIndex, 1)
    this.props.editDeviceTypes(deviceType)

  }

  changeState () {

    if (this.props.isAdding) {

      this.props.changeAddState()

    }
    if (this.props.isEditing) {

      this.props.changeEditState(this.props.index)

    }

  }

  props: Props
  textInput: Object

  render (): ?React$Element<any> {

    const {
      handleSubmit,
      type: controlType,
      options,
      type,
    } = this.props

    const optionList = type === 'select' ? options.map((option, i) => {

      return (
        <li key={i} className={css.option}>
          <ActionDelete
            className={css.clickable}
            onClick={() => {

              this.removeOption(i)

            }}
          />
          {option}
        </li>
      )

    }) : []

    if (controlType === 'select') {

      optionList.push(
        <li key={'addOption'}>
          <ContentAddBox className={css.clickable} onClick={this.addOption} />
          <input
            type="text"
            className={css.textInput}
            placeholder={'Insert new option...'}
            ref={(input) => {

              this.textInput = input

            }}
          />
        </li>
      )

    }

    const style = { width: '90%' }

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
              style={style}
            />
          </div>
          <div className={css.column}>
            <Field
              name="type"
              component="select"
              style={style}
            >
              <option value="">Select a type...</option>
              <option value="slider">Slider</option>
              <option value="select">Select</option>
              <option value="button">Button</option>
            </Field>
          </div>
          <div className={css.column}>
            <ul>
              {optionList}
            </ul>
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

export default TypeControlForm
