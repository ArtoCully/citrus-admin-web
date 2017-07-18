// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { editDeviceTypes } from 'src/redux/modules/device-type'
import DeleteTypeControl from './DeleteTypeControl'

type StateProps = {}

function mapStateToProps (
  state: GlobalReducerState,
): StateProps {

  return {}

}

type DispatchProps = {
  editDeviceTypes: Function,
}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {
    editDeviceTypes: bindActionCreators(editDeviceTypes, dispatch),
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteTypeControl)
export type ReduxProps = StateProps
