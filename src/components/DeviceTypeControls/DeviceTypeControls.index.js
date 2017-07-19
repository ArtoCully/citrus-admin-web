// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import getDeviceTypeById from 'src/selectors/deviceTypeById'
import {
  fetchDeviceTypes,
  changeAddState,
} from 'src/redux/modules/device-type'
import DeviceTypeControls from './DeviceTypeControls'

type StateProps = {
  deviceType: Object,
  deviceTypes: Object,
}

function mapStateToProps (
  state: GlobalReducerState,
  ownProps: Object,
): StateProps {

  return {
    deviceType: getDeviceTypeById(state, ownProps.params.typeId) || {},
    deviceTypes: state.deviceType,
  }

}

type DispatchProps = {
  fetchDeviceTypes: Function,
  changeAddState: Function,
};

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {
    fetchDeviceTypes: bindActionCreators(fetchDeviceTypes, dispatch),
    changeAddState: bindActionCreators(changeAddState, dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeviceTypeControls)
export type ReduxProps = StateProps & DispatchProps
