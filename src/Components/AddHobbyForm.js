/* Renders a form to add new hobby to current user. */

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { PropTypes } from 'prop-types'


function renderField({ input, label, type, meta: { touched, error } }){
  return(
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
  )
}

function HobbyForm(props){
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hobbyName">Hobby Name</label>
        <Field name="hobbyName" component={renderField} type="text" required />
      </div>
      <div>
        <label htmlFor="numYears">Years Performed</label>
        <Field name="numYears" required component={renderField} type="number" min="0" max='100' />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

HobbyForm.propTypes = {
  handleSubmit:PropTypes.func.isRequired
}

const AddHobbyForm = reduxForm({
  form: 'addHobby'
})(HobbyForm)

AddHobbyForm.propTypes = {
  onSubmit:PropTypes.func.isRequired
}

 export default AddHobbyForm
