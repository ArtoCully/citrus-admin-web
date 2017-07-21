// @flow
import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Layout from 'src/components/shared/Layout/Layout.index'
import Device from './Device/Device.index'
import DeviceForm from './DeviceForm/DeviceForm.index'
import css from './DeviceList.style.css'
import type { ReduxProps } from './DeviceList.index'

type Props = {
  fetchDevices: Function,
} & ReduxProps

class DeviceList extends Component {

  constructor (props: Props) {

    super(props)
    this.addDevice = this.addDevice.bind(this)

  }

  componentDidMount () {

    this.props.fetchDevices()
    this.props.fetchDeviceTypes()

  }

  showDevices () {

    const {
      devices: {
        list: devices,
        isEditing,
      },
      location,
    } = this.props

    return devices.map((item, index) => {

      if (isEditing === item.id) {

        return (
          <DeviceForm
            key={index}
            {...item}
            location={location}
          />
        )

      }

      return (
        <Device
          key={index}
          {...item}
          location={location}
        />
      )

    })

  }

  buttonsDisabled () {

    const {
      isAdding,
      isEditing,
      isRemoving,
    } = this.props.devices

    return (isAdding || !!isEditing || isRemoving)

  }

  addDevice () {

    const {
      devices: {
        isEditing,
      },
      changeAddState,
    } = this.props

    if (!isEditing) {

      changeAddState()

    }

  }

  props: Props
  addDevice: Function
  showDevices: Function

  render () {

    const {
      routes,
      devices: {
        isAdding,
      },
      location,
    } = this.props

    const showDeviceForm = isAdding ? <DeviceForm location={location} /> : null

    return (
      <Layout routes={routes}>
        <div className={css.container}>
          <div className={css.tableDevice}>
            <div className={css.tableHeader}>
              <div className={css.tableTitle}>
                Devices
              </div>
              <div className={css.addButton}>
                <FloatingActionButton
                  disabled={this.buttonsDisabled()}
                >
                  <ContentAdd
                    onClick={this.addDevice}
                  />
                </FloatingActionButton>
              </div>
            </div>
            <div className={css.haderColumn}>
              Name
            </div>
            <div className={css.haderColumn}>
              Type
            </div>
            <div className={css.haderColumn}>
              IP
            </div>
            <div className={css.haderColumn}>
              Actions
            </div>
            <div className={css.tableBody}>
              {showDeviceForm}
              {this.showDevices()}
            </div>
          </div>
        </div>
      </Layout>
    )

  }

}

export default DeviceList
