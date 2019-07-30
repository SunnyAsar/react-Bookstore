const START_LOADER = 'START_LOADER'
const STOP_LOADER = 'STOP_LOADER'

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
