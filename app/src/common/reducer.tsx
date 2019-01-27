import { actionTypes } from './actions'

const defaultState = {
  dimensions: { height: 0, width: 0 },
}

const common = (state = defaultState, action: Action) => {
  switch (action.type) {
    case actionTypes.DIMENSIONS_SET: {
      return { ...state, dimensions: action.payload }
    }
    default: {
      return state
    }
  }
}

export default common
