import {ADD_HOBBY, REMOVE_HOBBY, CHANGE_VIEW} from './actions'
import {teachers, students} from './Data'


const initialState = {
  teachers:teachers,
  students:students,
  detailView:false,
  detailViewUser:{userType:'teachers', userID:1}
}

function Reducer(state = initialState, action) {
  let userType, userID, name, years, newState

  switch(action.type) {

    case ADD_HOBBY:

      ({userType, userID, name, years} = action.hobby)
      newState = Object.assign({}, state)
      newState[userType][userID].hobbies[name] = years
      return newState;

    case REMOVE_HOBBY:

      ({userType, userID, name} = action.hobby)
      newState = Object.assign({}, state)
      delete newState[userType][userID].hobbies[name]
      return newState

    case CHANGE_VIEW:
      newState = Object.assign({}, state)
      newState.detailView = action.view.detailView
      newState.detailViewUser = {userType:action.view.userType, userID:action.view.userID}
      return newState


    default:
      return state
  }
}

export default Reducer