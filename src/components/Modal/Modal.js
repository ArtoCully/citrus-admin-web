// @flow
import React from 'react'
import { isBrowser } from 'config/env'
import DeleteDevice from './DeleteDevice/DeleteDevice.index'
import DeleteDeviceType from './DeleteDeviceType/DeleteDeviceType.index'
import DeleteTypeControl from './DeleteTypeControl/DeleteTypeControl.index'
import css from './Modal.style.css'


type Props = {
  location: Object,
  params: Object, // eslint-disable-line
}


const getStateModal = (props: Props): ?React$Element<any> => {

  const { location } = props

  // Client-only routes
  if (!(location.state && location.state.modal)) return null

  switch (location.state.modal) {

    case 'delete-device':
      return <DeleteDevice {...props} />
    case 'delete-device-type':
      return <DeleteDeviceType {...props} />
    case 'delete-type-control':
      return <DeleteTypeControl {...props} />

    default:
      return null
  }

}


const getQueryModal = (props: Props): ?React$Element<any> => {

  // const { location } = props
  // if ('login' in location.query) {
  //   return <Login {...props} />
  // }

  return null

}


const Modal = (props: Props): ?React$Element<any> => {

  const stateModal = getStateModal(props)
  const queryModal = getQueryModal(props)

  if (!stateModal && !queryModal) {

    // TODO: side effect in stateless component...
    // quick fix to prevent scrolling
    if (isBrowser()
      && document
      && document.body
      && document.body.style) document.body.style.overflow = 'visible'
    return null

  }

  // TODO: side effect in stateless component...
  // quick fix to prevent scrolling
  if (isBrowser()
      && document
      && document.body
      && document.body.style) document.body.style.overflow = 'hidden'
  return (
    <div className={css.modal}>
      { getStateModal(props) }
      { getQueryModal(props) }
    </div>
  )

}

export default Modal
