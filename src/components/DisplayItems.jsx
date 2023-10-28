import React from 'react'
import Item from './Item'
import { useContext } from "react"
import ItemsContext from '../context/ItemContext'


function DisplayItems() {
  const { allTodos } = useContext(ItemsContext);
  
  if (allTodos.length > 0) {
    return (
      <div className='displayItems'>
        <ul>
          {allTodos.map((todo,index) => {
            return (
              <Item todo={todo} key={index} />
              )
          })}
        </ul>
        
      </div>
    )
  } else {
    return 
  }

  
}

export default DisplayItems