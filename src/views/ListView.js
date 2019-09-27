// view for user listing

import React from 'react'
import UnorderedList from '../Components/UnorderedList'
import handleListClick from '../Handlers/handleListClick'
import { connect } from "react-redux";
import { PropTypes } from 'prop-types'
const _ = require('lodash');


function ConnectedListView(props) {
  const teacherClick = handleListClick('teachers')
  const studentClick = handleListClick('students')
  return (<div id='pageBody'>
    <UnorderedList items={props.teachers} onClick={teacherClick} title={'Teachers'} id='teacherList'/>
    <UnorderedList items={props.students} onClick={studentClick} title={'Students'} id='studentList'/>
    </div>)
}

ConnectedListView.propTypes = {
  teachers: PropTypes.arrayOf(PropTypes.array).isRequired,
  students: PropTypes.arrayOf(PropTypes.array).isRequired
}

function mapStateToProps(state) {
  const teachers = state.userData.teachers
  const students = state.userData.students

  const allTeachers = _.toPairs(teachers).map((item) => [item[0], item[1].firstName + ' ' + item[1].lastName])
  const allStudents = _.toPairs(students).map((item) => [item[0], item[1].firstName + ' ' + item[1].lastName])
  return({teachers:allTeachers, students:allStudents})
}
const ListView = connect(mapStateToProps)(ConnectedListView)
export default ListView