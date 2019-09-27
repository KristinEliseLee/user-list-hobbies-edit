import store from '../store'
import {addHobby} from '../actions'

export default function handleAddHobby(values){
  const view = store.getState().view.detailViewUser
  store.dispatch(addHobby({ userType:view.userType, userID:view.userID, name:values.hobbyName, years:values.numYears }))
}

