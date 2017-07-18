// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeDeviceType } from 'src/redux/modules/device-type'
import DeleteDeviceType from './DeleteDeviceType'

type StateProps = {}

function mapStateToProps (
  state: GlobalReducerState,
  ownProps: Object,
): StateProps {

  return {}

}

type DispatchProps = {
  deleteDeviceType: Function,
}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {
    deleteDeviceType: bindActionCreators(removeDeviceType, dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDeviceType)
export type ReduxProps = StateProps
