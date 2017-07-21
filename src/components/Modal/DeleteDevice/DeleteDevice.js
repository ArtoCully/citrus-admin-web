// @flow
import React, { PureComponent } from 'react'
import LinkReplace from 'src/components/shared/LinkReplace/LinkReplace'
import css from './DeleteDevice.style.css'
import type { ReduxProps } from './DeleteDevice.index'


type Props = ReduxProps & {
  location: Object,
}

type State = {
  location: {
    device: Object
  },
}

class DeleteDevice extends PureComponent {

  state: State

  delete = (id: Number) => {

    this.props.deleteDevice(id)

  }

  props: Props

  render (): ?React$Element<any> {

    const {
      location: {
        state: {
          device = {},
        },
        pathname,
      },
    } = this.props

    return (
      <div className={css.deleteDevice}>
        <div className={css.header}>
          <div className={css.title}>DELETE DEVICE</div>
          <div className="pt4 pb4">
            Are you sure you want to delete {device.name}?
          </div>
        </div>
        <LinkReplace to={pathname}>
          <button className={css.btnCancel}>Cancel</button>
        </LinkReplace>
        <LinkReplace to={pathname}>
          <button
            className={`${css.btnDelete} ml2`}
            onClick={() => {

              this.delete(device.id)

            }}
          >
            Delete
          </button>
        </LinkReplace>
      </div>
    )

  }

}

export default DeleteDevice
