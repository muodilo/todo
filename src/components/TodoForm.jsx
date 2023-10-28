import React, { useState ,useEffect} from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { v4 as uuidv4 } from 'uuid';
import { useContext } from "react"
import ItemsContext from '../context/ItemContext';


function TodoForm() {
  const [item, setItem] = useState('');
  const handleChange = (e) => {
    const newitem = e.target.value;
    setItem(newitem)
  }
  const { handleAdd, itemEdit ,updateItem} = useContext(ItemsContext);

  useEffect(() => {
    setItem(itemEdit.item.text)
  },[itemEdit])
  const handleSubmit = (e) => {
    e.preventDefault()

    const newItemWithId = {
      id: uuidv4(),
      text: item,
    };
    if (itemEdit.edit === true) {
      updateItem(itemEdit.item.id, newItemWithId);
      itemEdit.edit = false
    } else {
      handleAdd(newItemWithId);
    }
    
    setItem('')
  }

  return (
    <form className='todoForm' onSubmit={handleSubmit}>
      <div className='input-group'>
        <input required type="text" className='form-control' placeholder='Write task here' value={item} onChange={ handleChange} />
        <button className='btn btn-primary' type='submit'><AddCircleIcon/></button>
      </div>
    </form>
  )
}

export default TodoForm
