// @flow
import React, { Component } from 'react'
import ActionBorderColor from 'material-ui/svg-icons/editor/border-color'
import ActionDelete from 'material-ui/svg-icons/action/delete'
import ActionViewList from 'material-ui/svg-icons/action/view-list'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import { Link } from 'react-router'
import css from './DeviceType.style.css'

import type { ReduxProps } from './DeviceType.index'

type ReactProps = {
  id: string,
  name: string,
  httpApi: string,
  location: Object,
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

    const { id, changeEditState } = this.props
    changeEditState(id)

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

    const { id, name, httpApi, controls, location } = this.props

    const disabled = this.buttonsDisabled()
    const disabledLink = disabled ? css.disabledLink : ''

    return (
      <div className={css.container}>
        <div className={css.column}>
          {name}
        </div>
        <div className={css.column}>
          {httpApi || '-'}
        </div>
        <div className={css.column}>
          <Link to={`/type/${id}/controls`} className={disabledLink}>
            {controls.length || '0'}
          </Link>
        </div>
        <div className={css.column}>
          <FlatButton
            icon={<ActionBorderColor />}
            primary
            onClick={this.changeEditState}
            disabled={disabled}
          />
          <Link to={`/type/${id}/controls`} className={disabledLink}>
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
              state: { modal: `delete-device-type`, deviceType: this.props },
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
