import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { useContext } from 'react'
import ItemsContext from '../context/ItemContext';



function Item({ todo}) {
  const {onDelete,editItem} = useContext(ItemsContext)
  const handleClick = () => {
    if (window.confirm("Are you sure you want to delete this item")) {
      onDelete(todo.id)
    }
    
  }
  return (
    <div className='item'>
      <li><span>{todo.text}</span> <span><EditNoteIcon style={{ color: '#0174BE' }} onClick={ ()=>{editItem(todo)}} /> <DeleteIcon style={{ color: '#0174BE' }} onClick={handleClick} /></span> </li>
      <hr />
    </div>
    
  )
}

export default Item