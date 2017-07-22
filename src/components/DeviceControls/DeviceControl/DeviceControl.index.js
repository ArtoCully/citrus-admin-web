// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getDeviceById from 'src/selectors/deviceById'
import {
  changeEditState,
} from 'src/redux/modules/device'
import DeviceControl from './DeviceControl'

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
  } = state.device

  return {

    device: getDeviceById(state, ownProps.params.deviceId) || {},
    isEditing,
    isAdding,

  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceControl)
export type ReduxProps = StateProps & DispatchProps
