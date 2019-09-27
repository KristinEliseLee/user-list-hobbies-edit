import React from 'react'
import { Field, reduxForm } from 'redux-form'


function HobbyForm(props){
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="hobbyName">Hobby Name</label>
        <Field name="hobbyName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="numYears">Years Performed</label>
        <Field name="numYears" component="input" type="number" min="0" max='100' />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

const AddHobbyForm = reduxForm({
  form: 'addHobby'
})(HobbyForm)

 export default AddHobbyForm