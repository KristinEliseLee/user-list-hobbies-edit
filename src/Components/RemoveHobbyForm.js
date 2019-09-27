/* Renders a button to delete a hobby from the hobby table. */

import React from 'react'
import { reduxForm } from 'redux-form'
import { PropTypes } from 'prop-types'

function HobbyForm(props){
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Remove</button>
    </form>
  )
}

HobbyForm.propTypes = {
  handleSubmit:PropTypes.func.isRequired
}

const RemoveHobbyForm = reduxForm({
  form: 'removeHobby'
})(HobbyForm)

RemoveHobbyForm.propTypes = {
  onSubmit:PropTypes.func.isRequired
}

 export default RemoveHobbyForm