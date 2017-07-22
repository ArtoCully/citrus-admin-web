// @flow
import React, { Component } from 'react'
import ActionBorderColor from 'material-ui/svg-icons/editor/border-color'
import FlatButton from 'material-ui/FlatButton'
import css from './DeviceControl.style.css'

import type { ReduxProps } from './DeviceControl.index'

type ReactProps = {
  id: string,
  name: string,
  type: string,
  options: Array<string>,
}

type Props = ReactProps & ReduxProps

class DeviceControl extends Component {

  constructor (props: Props) {

    super(props)
    this.changeEditState = this.changeEditState.bind(this)
    this.buttonsDisabled = this.buttonsDisabled.bind(this)

  }

  changeEditState: Function
  buttonsDisabled: Function

  changeEditState () {

    const { index, changeEditState } = this.props
    changeEditState(`${index}`)

  }

  buttonsDisabled () {

    const {
      isAdding,
      isEditing,
    } = this.props

    return (isAdding || !!isEditing)

  }

  props: Props

  render () {

    const {
      name,
      type,
      value,
    } = this.props

    const disabled = this.buttonsDisabled()

    let val = value
    if (type === 'button') val = value ? 'On' : 'Off'
    if (type === 'slider') val = value || 0
    if (type === 'select') val = value || '-'

    return (
      <div className={css.container}>
        <div className={css.column}>
          {name}
        </div>
        <div className={css.column}>
          {type}
        </div>
        <div className={css.column}>
          {val}
        </div>
        <div className={css.column}>
          <FlatButton
            icon={<ActionBorderColor />}
            primary
            onClick={this.changeEditState}
            disabled={disabled}
          />
        </div>
      </div>
    )

  }

}

export default DeviceControl
