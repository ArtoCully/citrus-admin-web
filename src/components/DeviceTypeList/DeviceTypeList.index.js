// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchDeviceTypes,
  changeEditState,
  changeAddState,
} from 'src/redux/modules/device-type'
import DeviceTypeList from './DeviceTypeList'

type StateProps = {
  deviceTypes: Object,
}

function mapStateToProps (
  state: GlobalReducerState
): StateProps {

  return {
    deviceTypes: state.deviceType,
  }

}

type DispatchProps = {
  fetchDeviceTypes: Function,
};

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    fetchDeviceTypes: bindActionCreators(fetchDeviceTypes, dispatch),
    changeEditState: bindActionCreators(changeEditState, dispatch),
    changeAddState: bindActionCreators(changeAddState, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceTypeList)
export type ReduxProps = StateProps & DispatchProps
