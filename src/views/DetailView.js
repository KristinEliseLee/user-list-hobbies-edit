import React from 'react'
import handleReturnListClick from '../Handlers/handleReturnListClick'
import { connect } from "react-redux";
import BasicTable from '../Components/BasicTable'
import AddHobbyForm from '../Components/AddHobbyForm'
import RemoveHobbyForm from '../Components/RemoveHobbyForm'
import handleAddHobby from '../Handlers/handleAddHobby'
import handleRemoveHobby from '../Handlers/handleRemoveHobby'
const _ = require('lodash');

function ConnectedDetailView(props) {
  return(<div>
  <h6 onClick={handleReturnListClick}>Return to List</h6>
  <h3> Details</h3>
  <BasicTable data={props.infoTableData}/>
  <h3> Hobbies </h3>
  <BasicTable data={props.hobbyTablePlusForm}/>
  <AddHobbyForm onSubmit={handleAddHobby}/>

  </div>
  )

}

function mapStateToProps(state) {
  const whichUser = state.view.detailViewUser
  const user = state.userData[whichUser.userType][whichUser.userID]
  const infoTableData = _.toPairs(_.omit(user, 'hobbies'))
  const hobbyFormData = _.toPairs(user.hobbies)
  const hobbyTablePlusForm = hobbyFormData.map( item => (
    [item[0], item[1], <RemoveHobbyForm onSubmit={handleRemoveHobby(item[0])}/>]))

  return({user, infoTableData, hobbyTablePlusForm})
}
const DetailView = connect(mapStateToProps)(ConnectedDetailView)
export default DetailView
