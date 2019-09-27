// Renders a basic table element out of an array of arrays of data

import React from 'react'
import { PropTypes } from 'prop-types'
const _ = require('lodash');

function BasicTable(props) {
  return(
    <div id={props.id}>
    <h3>{props.title}</h3>
    <table><tbody>
    {props.data.map((row, index)=><tr key={index}>{row.map((item, index)=><td 
      key={index}>{ (typeof item === 'string' ) ? _.startCase(item): item}</td>)}</tr>)}
    </tbody></table>
    </div>
    )
}

BasicTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.array).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default BasicTable
