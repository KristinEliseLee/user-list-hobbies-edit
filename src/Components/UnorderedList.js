import React from 'react'

function UnorderedList (props){
  return( <ul>
    {props.items.map((item)=><li key={item[0]} onClick={()=>props.onClick(item[0])}>{item[1]}</li>)}
    </ul>)
}

export default UnorderedList
