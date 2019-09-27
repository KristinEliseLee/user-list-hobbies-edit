import store from '../store'
import {addHobby} from '../actions'
import {reset} from 'redux-form'
const _=require('lodash')

export default function handleAddHobby(values){
  const view = store.getState().view.detailViewUser
  store.dispatch(addHobby({ userType:view.userType, userID:view.userID, name:_.lowerCase(values.hobbyName), years:values.numYears }))
  store.dispatch(reset('addHobby'))
}

