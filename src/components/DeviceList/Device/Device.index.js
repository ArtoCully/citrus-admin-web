// @flow
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {
  changeEditState,
  removeDevice,
} from 'src/redux/modules/device'
import Device from './Device'

type StateProps = {
  isEditing: string,
  isAdding: boolean,
}

type DispatchProps = {
  changeEditState: Function,
  removeDevice: Function,
}

function mapStateToProps (state: GlobalReducerState): StateProps {

  const {
    isEditing,
    isAdding,
  } = state.device

  return {

    isEditing,
    isAdding,

  }

}

function mapDispatchToProps (dispatch: any): DispatchProps {

  return {

    changeEditState: bindActionCreators(changeEditState, dispatch),
    removeDevice: bindActionCreators(removeDevice, dispatch),

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(Device)
export type ReduxProps = StateProps & DispatchProps
