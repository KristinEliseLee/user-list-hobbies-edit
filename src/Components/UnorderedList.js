/* Renders an unordered list out of a title and an array of arrays
 with onClick function taking on first index of each item. 
 */

import React from 'react'
import { PropTypes } from 'prop-types'

function UnorderedList (props){
  return(<div id={props.id}>
    <h3>{props.title}</h3>
    <ul>
    {props.items.map((item)=><li key={item[0]} onClick={()=>props.onClick(item[0])}>{item[1]}</li>)}
    </ul>
    </div>
    )
}

UnorderedList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.array).isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  id: PropTypes.string.isRequired
}

export default UnorderedList
