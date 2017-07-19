// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getDeviceTypeById from 'src/selectors/deviceTypeById'
import {
  changeEditState,
} from 'src/redux/modules/device-type'
import TypeControl from './TypeControl'

type StateProps = {
  isEditing: string,
  isAdding: boolean,
}

type DispatchProps = {
  changeEditState: Function,
}

function mapStateToProps (
  state: GlobalReducerState,
  ownProps: Object,
): StateProps {

  const {
    isEditing,
    isAdding,
  } = state.deviceType

  return {

    deviceType: getDeviceTypeById(state, ownProps.params.typeId) || {},
    isEditing,
    isAdding,

  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TypeControl)
export type ReduxProps = StateProps & DispatchProps
