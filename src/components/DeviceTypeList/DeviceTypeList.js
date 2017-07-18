// @flow
import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Layout from 'src/components/shared/Layout/Layout.index'
import DeviceType from './DeviceType/DeviceType.index'
import DeviceTypeForm from './DeviceTypeForm/DeviceTypeForm.index'
import css from './DeviceTypeList.style.css'
import type { ReduxProps } from './DeviceTypeList.index'

type Props = {
  fetchDeviceTypes: Function,
  location: Object,
} & ReduxProps

class DeviceTypeList extends Component {

  constructor (props: Props) {

    super(props)
    this.addDeviceType = this.addDeviceType.bind(this)

  }

  componentDidMount () {

    this.props.fetchDeviceTypes()

  }

  showDeviceTypes () {

    const {
      deviceTypes: {
        list: deviceTypes,
        isEditing,
      },
      location,
    } = this.props

    return deviceTypes.map((item, index) => {

      if (isEditing === item.id) {

        return (
          <DeviceTypeForm
            key={index}
            {...item}
          />
        )

      }

      return (
        <DeviceType
          key={index}
          location={location}
          {...item}
        />
      )

    })

  }

  buttonsDisabled () {

    const {
      isAdding,
      isEditing,
      isRemoving,
    } = this.props.deviceTypes

    return (isAdding || !!isEditing || isRemoving)

  }

  addDeviceType () {

    const {
      deviceTypes: {
        isEditing,
      },
      changeAddState,
    } = this.props

    if (!isEditing) {

      changeAddState()

    }

  }

  props: Props
  addDeviceType: Function
  showDeviceTypes: Function

  render () {

    const {
      routes,
      deviceTypes: {
        isAdding,
      },
    } = this.props

    const showDeviceTypeForm = isAdding ? <DeviceTypeForm /> : null

    return (
      <Layout routes={routes}>
        <div className={css.container}>
          <div className={css.tableDeviceType}>
            <div className={css.tableHeader}>
              <div className={css.tableTitle}>
                Device Types
              </div>
              <div className={css.addButton}>
                <FloatingActionButton
                  disabled={this.buttonsDisabled()}
                >
                  <ContentAdd
                    onClick={this.addDeviceType}
                  />
                </FloatingActionButton>
              </div>
            </div>
            <div className={css.haderColumn}>
              Name
            </div>
            <div className={css.haderColumn}>
              HTTP API
            </div>
            <div className={css.haderColumn}>
              Controls
            </div>
            <div className={css.haderColumn}>
              Actions
            </div>
            <div className={css.tableBody}>
              {showDeviceTypeForm}
              {this.showDeviceTypes()}
            </div>
          </div>
        </div>
      </Layout>
    )

  }

}

export default DeviceTypeList
