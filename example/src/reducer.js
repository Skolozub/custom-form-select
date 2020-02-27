
const initialState = {
  techValue   : '0',
  profValue   : 'none',
  paymentValue: '0',
}

function selectsReducer(state, action) {
  switch (action.type) {
    case 'SET_TECH': {
      return ({
        ...state,
        techValue: action.payload,
      })
    }
    case 'SET_PROF': {
      return ({
        ...state,
        profValue: action.payload,
      })
    }
    case 'SET_PAYMENT': {
      return ({
        ...state,
        paymentValue: action.payload,
      })
    }

    default: {
      return state
    }
  }
}

export {
  initialState,
  selectsReducer,
}