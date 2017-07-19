// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'
import ActionBorderColor from 'material-ui/svg-icons/editor/border-color'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import FlatButton from 'material-ui/FlatButton'
import css from './TypeControl.style.css'

import type { ReduxProps } from './TypeControl.index'

type ReactProps = {
  id: string,
  name: string,
  type: string,
  options: Array<string>,
}

type Props = ReactProps & ReduxProps

class DeviceType extends Component {

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
      options = [],
      location,
      deviceType,
    } = this.props

    const disabled = this.buttonsDisabled()
    const disabledLink = disabled ? css.disabledLink : ''

    const optionList = type === 'select' ? options.map((option, index) => {

      return <li key={index}>- {option}</li>

    }) : null

    return (
      <div className={css.container}>
        <div className={css.column}>
          {name}
        </div>
        <div className={css.column}>
          {type}
        </div>
        <div className={css.column}>
          <ul>{optionList}</ul>
        </div>
        <div className={css.column}>
          <FlatButton
            icon={<ActionBorderColor />}
            primary
            onClick={this.changeEditState}
            disabled={disabled}
          />
          <Link
            to={{
              pathname: location.pathname,
              state: {
                modal: `delete-type-control`,
                deviceType,
                typeControl: this.props,
              },
            }}
            className={disabledLink}
          >
            <FlatButton
              icon={<ActionDelete />}
              primary
              disabled={disabled}
            />
          </Link>
        </div>
      </div>
    )

  }

}

export default DeviceType
