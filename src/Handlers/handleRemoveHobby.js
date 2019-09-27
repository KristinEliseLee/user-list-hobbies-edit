import store from '../store'
import {removeHobby} from '../actions'

export default function handleAddHobby(name){
  return()=> {
  const view = store.getState().view.detailViewUser
  store.dispatch(removeHobby({ userType:view.userType, userID:view.userID, name:name, years:0}))
}}

