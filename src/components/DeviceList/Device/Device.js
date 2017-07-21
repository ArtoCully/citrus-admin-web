// @flow
import React, { Component } from 'react'
import ActionBorderColor from 'material-ui/svg-icons/editor/border-color'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionViewList from 'material-ui/svg-icons/action/view-list'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router'
import css from './Device.style.css'

import type { ReduxProps } from './Device.index'

type ReactProps = {
  id: string,
  created: string,
  name: string,
  isRemoving: boolean,
}

type Props = ReactProps & ReduxProps

class Device extends Component {

  constructor (props: Props) {

    super(props)
    this.state = {
      isRemoving: false,
    }
    this.changeEditState = this.changeEditState.bind(this)
    this.removeDevice = this.removeDevice.bind(this)
    this.buttonsDisabled = this.buttonsDisabled.bind(this)

  }

  state: {
    isRemoving: boolean,
  }

  changeEditState: Function
  removeDevice: Function
  buttonsDisabled: Function

  changeEditState () {

    const { id, changeEditState } = this.props
    changeEditState(id)

  }

  removeDevice () {

    if (this.state.isRemoving) {

      this.props.removeDevice(this.props.id)
      this.setState({
        isRemoving: false,
      })

    }
    else {

      this.setState({
        isRemoving: true,
      })

    }

  }

  buttonsDisabled () {

    const {
      isAdding,
      isEditing,
      isRemoving,
    } = this.props

    return (isAdding || !!isEditing || isRemoving)

  }

  props: Props

  render () {

    const { id, name, type, ip, location } = this.props

    const disabled = this.buttonsDisabled()
    const disabledLink = disabled ? css.disabledLink : ''

    return (
      <div className={css.container}>
        <div className={css.column}>
          {name}
        </div>
        <div className={css.column}>
          {type.name}
        </div>
        <div className={css.column}>
          {ip || '-'}
        </div>
        <div className={css.column}>
          <FlatButton
            icon={<ActionBorderColor />}
            primary
            onClick={this.changeEditState}
            disabled={disabled}
          />
          <Link to={`/device/${id}/controls`} className={disabledLink}>
            <IconButton
              disabled={disabled}
              tooltip="Controls"
            >
              <ActionViewList />
            </IconButton>
          </Link>
          <Link
            to={{
              pathname: location.pathname,
              state: { modal: `delete-device`, device: this.props },
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

export default Device
