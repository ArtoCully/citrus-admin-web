// @flow
import React, { Component } from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Layout from 'src/components/shared/Layout/Layout.index'
import TypeControl from './TypeControl/TypeControl.index'
import TypeControlForm from './TypeControlForm/TypeControlForm.index'
import css from './DeviceTypeControls.style.css'
import type { ReduxProps } from './DeviceTypeControls.index'

type Props = ReduxProps & {
  routes: Object,
}

class DeviceTypeControls extends Component {

  constructor (props: Props) {

    super(props)
    this.addDeviceTypeControl = this.addDeviceTypeControl.bind(this)

  }

  componentDidMount () {

    this.props.fetchDeviceTypes()

  }


  showDeviceTypeControls () {

    const {
      deviceType: {
        controls = [],
      },
      deviceTypes: {
        isEditing,
      },
      params,
      location,
    } = this.props


    return controls.map((item, index) => {

      if (isEditing === `${index}`) {

        return (
          <TypeControlForm
            key={index}
            index={index}
            params={params}
            location={location}
            {...item}
          />
        )

      }

      return (
        <TypeControl
          key={index}
          index={index}
          params={params}
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

  addDeviceTypeControl () {

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
  addDeviceTypeControl: Function
  showDeviceTypeControls: Function

  render () {

    const {
      routes,
      deviceType: {
        name: deviceTypeName,
      },
      deviceTypes: {
        isAdding,
      },
      params,
      location,
    } = this.props

    const showTypeControlForm = isAdding
      ? <TypeControlForm params={params} location={location} /> : null

    return (
      <Layout routes={routes}>
        <div className={css.container}>
          <div className={css.tableDeviceTypeControl}>
            <div className={css.tableHeader}>
              <div className={css.tableTitle}>
                Device Type: {deviceTypeName}
              </div>
              <div className={css.addButton}>
                <FloatingActionButton
                  disabled={this.buttonsDisabled()}
                >
                  <ContentAdd
                    onClick={this.addDeviceTypeControl}
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
              Options
            </div>
            <div className={css.haderColumn}>
              Actions
            </div>
            <div className={css.tableBody}>
              {showTypeControlForm}
              {this.showDeviceTypeControls()}
            </div>
          </div>
        </div>
      </Layout>
    )

  }

}

export default DeviceTypeControls
