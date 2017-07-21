// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { removeDevice } from 'src/redux/modules/device'
import DeleteDevice from './DeleteDevice'

type StateProps = {}

function mapStateToProps (
  state: GlobalReducerState,
  ownProps: Object,
): StateProps {

  return {}

}

type DispatchProps = {
  deleteDevice: Function,
}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {
    deleteDevice: bindActionCreators(removeDevice, dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteDevice)
export type ReduxProps = StateProps
