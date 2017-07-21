// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  fetchDevices,
  changeEditState,
  changeAddState,
} from 'src/redux/modules/device'
import { fetchDeviceTypes } from 'src/redux/modules/device-type'
import DeviceList from './DeviceList'

type StateProps = {
  devices: Object,
}

function mapStateToProps (
  state: GlobalReducerState
): StateProps {

  return {
    devices: state.device,
  }

}

type DispatchProps = {
  fetchDevices: Function,
  fetchDeviceTypes: Function,
  changeEditState: Function,
  changeAddState: Function,
};

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    fetchDevices: bindActionCreators(fetchDevices, dispatch),
    fetchDeviceTypes: bindActionCreators(fetchDeviceTypes, dispatch),
    changeEditState: bindActionCreators(changeEditState, dispatch),
    changeAddState: bindActionCreators(changeAddState, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceList)
export type ReduxProps = StateProps & DispatchProps
