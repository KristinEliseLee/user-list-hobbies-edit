/* Validates AddHobby form at submission, throws errors if invalid. */

import handleAddHobby from '../Handlers/handleAddHobby'
import { SubmissionError } from 'redux-form'

export default function handleAddHobbyFormSubmit(values) {
  if (!values.hobbyName) {
    throw new SubmissionError({ hobbyName: 'Hobby needs a name', _error: 'Submit failed!' })
  } 
  if (!values.numYears) {
    throw new SubmissionError({ numYears: 'Hobby needs years performed', _error: 'Submit failed!' })
  } 
  if (values.numYears < 0 || values.numYears > 100) {

    throw new SubmissionError({ numYears: 'Please use a number between 0 and 100', _error: 'Submit failed!' })
  } 

    handleAddHobby(values)
}