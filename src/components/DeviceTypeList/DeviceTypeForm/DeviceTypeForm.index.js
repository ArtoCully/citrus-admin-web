// @flow
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import {
  changeEditState,
  changeAddState,
  addDeviceTypes,
  editDeviceTypes,
} from 'src/redux/modules/device-type'
import DeviceTypeForm from './DeviceTypeForm'

const validate = (values) => {

  const errors = {}
  const requiredFields = [
    'name',
  ]

  requiredFields.forEach((field) => {

    if (!values[field]) {

      errors[field] = 'Required'

    }

  })

  return errors

}

const onSubmit = (values, dispatch, props): Promise<*> => {

  if (props.isAdding) {

    props.changeAddState()

  }
  if (props.isEditing) {

    props.changeEditState(props.id)

  }
  if (!values.id) {

    return addDeviceTypes(values)(dispatch)

  }
  return editDeviceTypes(values)(dispatch)

}

const reduxFormConfig = {
  form: 'deviceTypeForm',
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
    ? { ...ownProps }
    : {
      id: null,
      name: '',
      httpApi: '',
      controls: [],
    }

  return {
    initialValues,
    isAdding: state.deviceType.isAdding,
    isEditing: state.deviceType.isEditing,
  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),
    changeAddState: bindActionCreators(changeAddState, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(reduxFormConfig)(DeviceTypeForm)
)
export type ReduxProps = StateProps & DispatchProps
