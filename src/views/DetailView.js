import React from 'react'
import handleReturnListClick from '../Handlers/handleReturnListClick'
import { connect } from "react-redux";
import BasicTable from '../Components/BasicTable'
const _ = require('lodash');

function ConnectedDetailView(props) {
  return(<div>
  <h6 onClick={handleReturnListClick}>Return to List</h6>
  <h3> Details</h3>
  <BasicTable data={props.infoTableData}/>
  <h3> Hobbies </h3>
  <BasicTable data={props.hobbyTableData}/>

  </div>
  )


}

function mapStateToProps(state) {
  const whichUser = state.view.detailViewUser
  const user = state.userData[whichUser.userType][whichUser.userID]
  const infoTableData = _.toPairs(_.omit(user, 'hobbies'))
  const hobbyTableData = _.toPairs(user.hobbies)

  return({user, infoTableData, hobbyTableData})
}
const DetailView = connect(mapStateToProps)(ConnectedDetailView)
export default DetailView
