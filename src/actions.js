export const ADD_HOBBY = 'ADD_HOBBY'
export const REMOVE_HOBBY = 'REMOVE_HOBBY'
export const CHANGE_VIEW = 'CHANGE_VIEW'

export function addHobby(hobby) {
  return {
    type: ADD_HOBBY,
    hobby
  }
}

export function removeHobby(hobby) {
  return {
    type: REMOVE_HOBBY,
    hobby
  }
}

export function changeView(view) {
  return{
    type:CHANGE_VIEW,
    view
  }
}