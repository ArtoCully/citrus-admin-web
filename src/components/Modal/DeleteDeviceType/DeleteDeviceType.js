// @flow
import React, { PureComponent } from 'react'
import LinkReplace from 'src/components/shared/LinkReplace/LinkReplace'
import css from './DeleteDeviceType.style.css'
import type { ReduxProps } from './DeleteDeviceType.index'


type Props = ReduxProps & {
  location: Object,
}

type State = {
  location: {
    deviceType: Object
  },
}

class DeleteDeviceType extends PureComponent {

  state: State

  delete = (id: Number) => {

    this.props.deleteDeviceType(id)

  }

  props: Props

  render (): ?React$Element<any> {

    const {
      location: {
        state: {
          deviceType = {},
        },
        pathname,
      },
    } = this.props

    return (
      <div className={css.deleteDeviceType}>
        <div className={css.header}>
          <div className={css.title}>DELETE DEVICE TYPE</div>
          <div className="pt4 pb4">
            Are you sure you want to delete {deviceType.name}?
          </div>
        </div>
        <LinkReplace to={pathname}>
          <button className={css.btnCancel}>Cancel</button>
        </LinkReplace>
        <LinkReplace to={pathname}>
          <button
            className={`${css.btnDelete} ml2`}
            onClick={() => {

              this.delete(deviceType.id)

            }}
          >
            Delete
          </button>
        </LinkReplace>
      </div>
    )

  }

}

export default DeleteDeviceType
