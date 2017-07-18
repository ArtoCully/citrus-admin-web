// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  changeEditState,
  removeDeviceType,
} from 'src/redux/modules/device-type'
import DeviceType from './DeviceType'

type StateProps = {
  isEditing: string,
  isAdding: boolean,
}

type DispatchProps = {
  changeEditState: Function,
  removeDeviceType: Function,
}

function mapStateToProps (state: GlobalReducerState): StateProps {

  const {
    isEditing,
    isAdding,
  } = state.deviceType

  return {

    isEditing,
    isAdding,

  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),
    removeDeviceType: bindActionCreators(removeDeviceType, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceType)
export type ReduxProps = StateProps & DispatchProps
