import {ADD_HOBBY, REMOVE_HOBBY, CHANGE_VIEW} from './actions'
import {teachers, students} from './Data'


export const initialState = {
  userData:{teachers:teachers,
  students:students},
  view: { detailView:false,
  detailViewUser:{userType:'teachers', userID:1}}
}

export function view(state = {}, action){
  let newState
  switch(action.type) {
    case CHANGE_VIEW:
      newState = Object.assign({}, state)
      newState.detailView = action.view.detailView
      newState.detailViewUser = {userType:action.view.userType, userID:action.view.userID}
      return newState

    default:
      return state
    }

}

export function userData(state = {}, action) {
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

    default:
      return state
  }
}