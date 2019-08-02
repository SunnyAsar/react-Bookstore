import { START_LOADER, STOP_LOADER } from '../actions/actionConstants'

const loaderReducer = (state = true, actions) => {
  switch (actions.type) {
    case START_LOADER:
      return true
    case STOP_LOADER:
      return false
    default:
      return state
  }
}

export default loaderReducer
