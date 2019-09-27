/* Handles clicking to return to ListView. */

import store from '../store'
import {changeView} from '../actions'

export default function handleReturnListClick(){

    store.dispatch(changeView({detailView:false, userType:'teachers', userID:1}))
  }
