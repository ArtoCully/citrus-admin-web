// @flow
import React, { Component } from 'react'
import Layout from 'src/components/shared/Layout/Layout.index'
import DeviceControl from './DeviceControl/DeviceControl.index'
import DeviceControlForm from './DeviceControlForm/DeviceControlForm.index'
import css from './DeviceControls.style.css'
import type { ReduxProps } from './DeviceControls.index'

type Props = ReduxProps & {
  routes: Object,
}

class DeviceControls extends Component {

  constructor (props: Props) {

    super(props)
    this.showDeviceControls = this.showDeviceControls.bind(this)

  }

  componentDidMount () {

    this.props.fetchDevices()

  }


  showDeviceControls () {

    const {
      device: {
        type = {},
      },
      devices: {
        isEditing,
      },
      params,
      location,
    } = this.props

    const { controls = [] } = type

    return controls.map((item, index) => {

      if (isEditing === `${index}`) {

        return (
          <DeviceControlForm
            key={index}
            index={index}
            params={params}
            location={location}
            {...item}
          />
        )

      }

      return (
        <DeviceControl
          key={index}
          index={index}
          params={params}
          location={location}
          {...item}
        />
      )

    })

  }

  props: Props
  showDeviceControls: Function

  render () {

    const {
      routes,
      device: {
        name: deviceName,
      },
    } = this.props

    return (
      <Layout routes={routes}>
        <div className={css.container}>
          <div className={css.tableDeviceControl}>
            <div className={css.tableHeader}>
              <div className={css.tableTitle}>
                Device: {deviceName}
              </div>
            </div>
            <div className={css.haderColumn}>
              Control
            </div>
            <div className={css.haderColumn}>
              Type
            </div>
            <div className={css.haderColumn}>
              Value
            </div>
            <div className={css.haderColumn}>
              Actions
            </div>
            <div className={css.tableBody}>
              {this.showDeviceControls()}
            </div>
          </div>
        </div>
      </Layout>
    )

  }

}

export default DeviceControls
