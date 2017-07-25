// @flow
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import getDeviceById from 'src/selectors/deviceById'
import {
  changeEditState,
  editDevices,
} from 'src/redux/modules/device'
import DeviceControlForm from './DeviceControlForm'

const validate = (values) => {

  const errors = {}
  const requiredFields = []

  requiredFields.forEach((field) => {

    if (!values[field]) {

      errors[field] = 'Required'

    }

  })

  return errors

}

const onSubmit = (values, dispatch, props): Promise<*> => {

  const device = {
    ...props.device,
    type: {
      ...props.device.type,
      controls: [
        ...props.device.type.controls,
      ],
    },

  }
  const control = {
    ...device.type.controls[props.index],
    value: values.value,
  }

  device.type.controls.splice(props.index, 1, control)

  if (props.isEditing) {

    props.changeEditState(props.index)

  }
  return editDevices(device)(dispatch)

}

const reduxFormConfig = {
  form: 'deviceControlForm',
  enableOnReinitialize: true,
  keepDirtyOnReinitialize: true,
  onSubmit,
  validate,
}

type StateProps = {
  initialValues: Object,
  isEditing: boolean,
}

type DispatchProps = {
  changeEditState: Function,
}

const mapStateToProps = (
  state: GlobalReducerState,
  ownProps: Object
): StateProps => {

  const {
    index,
    name = '',
    type = '',
  } = ownProps

  const value = ownProps.type === 'slider'
    ? parseInt(ownProps.type, 10)
    : ownProps.value

  return {
    initialValues: { index, name, type, value },
    isEditing: state.device.isEditing,
    device: getDeviceById(state, ownProps.params.deviceId) || {},
  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),
    editDevices: bindActionCreators(editDevices, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(reduxFormConfig)(DeviceControlForm)
)
export type ReduxProps = StateProps & DispatchProps
