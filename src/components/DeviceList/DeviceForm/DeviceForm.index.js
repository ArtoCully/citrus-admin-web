// @flow
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import { find } from 'lodash'
import {
  changeEditState,
  changeAddState,
  addDevices,
  editDevices,
} from 'src/redux/modules/device'
import DeviceForm from './DeviceForm'

const validate = (values) => {

  const errors = {}
  const requiredFields = [
    'id',
    'name',
    'type',
    'ip',
  ]

  requiredFields.forEach((field) => {

    if (!values[field]) {

      errors[field] = 'Required'

    }

  })

  return errors

}

const onSubmit = (values, dispatch, props): Promise<*> => {

  const deviceType = find(props.deviceTypes, (type) => {

    return type.id === values.type

  })
  const device = {
    ...values,
    type: {
      ...deviceType,
    },
  }
  if (props.isAdding) {

    props.changeAddState()

  }
  if (props.isEditing) {

    props.changeEditState(props.id)

  }
  if (!values.id) {

    return addDevices(device)(dispatch)

  }
  return editDevices(device)(dispatch)

}

const reduxFormConfig = {
  form: 'deviceForm',
  enableOnReinitialize: true,
  keepDirtyOnReinitialize: true,
  onSubmit,
  validate,
}

type StateProps = {
  initialValues: Object,
  isAdding: boolean,
  isEditing: boolean,
}

type DispatchProps = {
  changeEditState: Function,
  changeAddState: Function,
}

const mapStateToProps = (
  state: GlobalReducerState,
  ownProps: Object
): StateProps => {

  const initialValues = ownProps.id
    ? {
      ...ownProps,
      type: ownProps.type.id,
    }
    : {
      id: null,
      name: '',
      type: '',
      ip: '',
    }

  return {
    initialValues,
    deviceTypes: state.deviceType.list,
    isAdding: state.device.isAdding,
    isEditing: state.device.isEditing,
  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),
    changeAddState: bindActionCreators(changeAddState, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(reduxFormConfig)(DeviceForm)
)
export type ReduxProps = StateProps & DispatchProps
