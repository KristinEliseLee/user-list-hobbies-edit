import React from 'react'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import handleAddHobby from '../Handlers/handleAddHobby'

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

function submit(values) {
  let error = false
  if (!values.hobbyName) {
    error = true
    throw new SubmissionError({ hobbyName: 'Hobby needs a name', _error: 'Submit failed!' })
  } 
  if (!values.numYears) {
    error = true
    throw new SubmissionError({ numYears: 'Hobby needs years performed', _error: 'Submit failed!' })
    
  } 
  if (error === false) {
    handleAddHobby(values)
  }
}

function HobbyForm(props){
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <label htmlFor="hobbyName">Hobby Name</label>
        <Field name="hobbyName" component={renderField} type="text" />
      </div>
      <div>
        <label htmlFor="numYears">Years Performed</label>
        <Field name="numYears" component={renderField} type="number" min="0" max='100' />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const AddHobbyForm = reduxForm({
  form: 'addHobby'
})(HobbyForm)

 export default AddHobbyForm