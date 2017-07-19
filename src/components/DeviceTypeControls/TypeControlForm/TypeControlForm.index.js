// @flow
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { bindActionCreators } from 'redux'
import getDeviceTypeById from 'src/selectors/deviceTypeById'
import {
  changeEditState,
  changeAddState,
  editDeviceTypes,
} from 'src/redux/modules/device-type'
import TypeControlForm from './TypeControlForm'

const validate = (values) => {

  const errors = {}
  const requiredFields = [
    'name',
    'type',
  ]

  requiredFields.forEach((field) => {

    if (!values[field]) {

      errors[field] = 'Required'

    }

  })

  return errors

}

const onSubmit = (values, dispatch, props): Promise<*> => {

  const deviceType = {
    ...props.deviceType,
    controls: [
      ...props.deviceType.controls,
    ],
  }
  const control = {
    name: values.name,
    options: values.options,
    type: values.type,
  }
  if (props.index) {

    deviceType.controls.splice(props.index, 1, control)

  }
  else {

    deviceType.controls.push(control)

  }
  if (props.isAdding) {

    props.changeAddState()

  }
  if (props.isEditing) {

    props.changeEditState()

  }
  return editDeviceTypes(deviceType)(dispatch)

}

const reduxFormConfig = {
  form: 'deviceTypeControlForm',
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
  changeAddState: Function,
}

const mapStateToProps = (
  state: GlobalReducerState,
  ownProps: Object
): StateProps => {

  const {
    index,
    name = '',
    type = '',
    options = [],
  } = ownProps

  return {
    initialValues: { index, name, type, options },
    isAdding: state.deviceType.isAdding,
    isEditing: state.deviceType.isEditing,
    deviceType: getDeviceTypeById(state, ownProps.params.typeId) || {},
  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),
    changeAddState: bindActionCreators(changeAddState, dispatch),
    editDeviceTypes: bindActionCreators(editDeviceTypes, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(
  reduxForm(reduxFormConfig)(TypeControlForm)
)
export type ReduxProps = StateProps & DispatchProps
