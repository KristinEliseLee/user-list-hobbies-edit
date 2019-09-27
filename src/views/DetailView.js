// Renders the user detail view, with add hobby form

import React from 'react'
import handleReturnListClick from '../Handlers/handleReturnListClick'
import { connect } from "react-redux";
import BasicTable from '../Components/BasicTable'
import AddHobbyForm from '../Components/AddHobbyForm'
import RemoveHobbyForm from '../Components/RemoveHobbyForm'
import handleRemoveHobby from '../Handlers/handleRemoveHobby'
import handleAddHobbyFormSubmit from '../Handlers/handleAddHobbyFormSubmit'
import { PropTypes } from 'prop-types'
const _ = require('lodash');

function ConnectedDetailView(props) {
  return(<React.Fragment>
  <div id='nav'><button onClick={handleReturnListClick}>Return to List</button></div>
  <div id='pageBody'><BasicTable data={props.infoTableData} title='Details' id='detailsTable'/>
  <BasicTable data={props.hobbyTablePlusForm} title='Hobbies' id='hobbiesTable'/>
  <div id='addHobbyForm'><AddHobbyForm onSubmit={handleAddHobbyFormSubmit}/></div>
  </div>
  </React.Fragment>
  )
}

ConnectedDetailView.propTypes = {
  infoTableData: PropTypes.arrayOf(PropTypes.array).isRequired,
  hobbyTablePlusForm: PropTypes.arrayOf(PropTypes.array).isRequired
}

function mapStateToProps(state) {
  const whichUser = state.view.detailViewUser
  const user = state.userData[whichUser.userType][whichUser.userID]
  const infoTableData = _.toPairs(_.omit(user, 'hobbies'))
  const hobbyTableData = _.toPairs(user.hobbies)
  const hobbyTablePlusForm = hobbyTableData.map( item => (
    [item[0], item[1] + ' Years', <RemoveHobbyForm onSubmit={handleRemoveHobby(item[0])}/>]))

  return({ infoTableData, hobbyTablePlusForm })
}
const DetailView = connect(mapStateToProps)(ConnectedDetailView)


export default DetailView
