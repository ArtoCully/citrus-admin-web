// @flow
import React, { PureComponent } from 'react'
import LinkReplace from 'src/components/shared/LinkReplace/LinkReplace'
import css from './DeleteTypeControl.style.css'
import type { ReduxProps } from './DeleteTypeControl.index'


type Props = ReduxProps & {
  location: Object,
}

type State = {
  location: {
    typeControl: Object
  },
}

class DeleteTypeControl extends PureComponent {

  state: State

  delete = (index: Number) => {

    const deviceType = {
      ...this.props.location.state.deviceType,
      controls: [
        ...this.props.location.state.deviceType.controls,
      ],
    }
    deviceType.controls.splice(index, 1)
    this.props.editDeviceTypes(deviceType)

  }

  props: Props

  render (): ?React$Element<any> {

    const {
      location: {
        state: {
          typeControl = {},
        },
        pathname,
      },
    } = this.props

    return (
      <div className={css.deleteTypeControl}>
        <div className={css.header}>
          <div className={css.title}>DELETE TYPE CONTROL</div>
          <div className="pt4 pb4">
            Are you sure you want to delete {typeControl.name}?
          </div>
        </div>
        <LinkReplace to={pathname}>
          <button className={css.btnCancel}>Cancel</button>
        </LinkReplace>
        <LinkReplace to={pathname}>
          <button
            className={`${css.btnDelete} ml2`}
            onClick={() => {

              this.delete(typeControl.index)

            }}
          >
            Delete
          </button>
        </LinkReplace>
      </div>
    )

  }

}

export default DeleteTypeControl
