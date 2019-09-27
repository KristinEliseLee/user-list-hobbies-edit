// handles switching to detail view by clicking on a list item

import store from '../store'
import {changeView} from '../actions'

export default function handleListClick(userType){

  return (userID)=>{
    store.dispatch(changeView({detailView:true, userType:userType, userID:userID}))

  }
}