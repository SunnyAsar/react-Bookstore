import { SHOW_ALERT, HIDE_ALERT } from '../actions/actionConstants'

const defaultState = {
  show: false,
  message: ''
}

const alertReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        show: true,
        message: action.message
      }
    case HIDE_ALERT:
      return { show: false, message: '' }
    default:
      return state
  }
}

export default alertReducer
