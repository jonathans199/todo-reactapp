import React from 'react'

function TodoItem(props){
    return (
      <div className="row"> 
        <input type="checkbox" checked={props.item.completed} onChange={() => console.log('onchange is working')}/> 
        <p>{props.item.text}</p>
      </div>
    )
}


export default TodoItem