// export const INCREMENT_REQUESTED = 'counter/INCREMENT_REQUESTED'
export const MY_INCREMENT = 'mydata/MY_INCREMENT'
// export const DECREMENT_REQUESTED = 'counter/DECREMENT_REQUESTED'
// export const DECREMENT = 'counter/DECREMENT'

const initialState = {
  myData: [2, 3, 4, 5, 6],
  something: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    // case INCREMENT_REQUESTED:
    //   return {
    //     ...state,
    //     isIncrementing: true
    //   }

    case MY_INCREMENT:
      let myData = state.myData
      myData.push(2)
      return {
        ...state,
        myData
      }
    default:
      return state
  }
}

export const my_increment = () => {
  return dispatch => {
    dispatch({
      type: MY_INCREMENT
    })
  }
}
