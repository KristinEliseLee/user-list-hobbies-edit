import React from 'react'
import { reduxForm } from 'redux-form'


function HobbyForm(props){
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">X</button>
    </form>
  )
}

const RemoveHobbyForm = reduxForm({
  form: 'removeHobby'
})(HobbyForm)

 export default RemoveHobbyForm