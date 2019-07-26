const CHANGE_FILTER = 'CHANGE_FILTER'

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default filterReducer
