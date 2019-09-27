import React from 'react'
const _ = require('lodash');

function BasicTable(props) {
  return(<table><tbody>
    {props.data.map((row, index)=><tr key={index}>{row.map((item, index)=><td 
      key={index}>{_.startCase(item)}</td>)}</tr>)}
    </tbody></table>
    )
}

export default BasicTable
