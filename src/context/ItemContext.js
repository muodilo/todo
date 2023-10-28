import { createContext, useState } from 'react';

const ItemsContext = createContext()

export const ItemsProvider = ({ children }) => {
  const [allTodos, setAllTodos] = useState([]);

  const [itemEdit, setItemEdit] = useState({
    item: {},
    edit:false
  })
  //Delete item
  const onDelete = (id) => {
    setAllTodos((prev) => {
      return prev.filter((todo)=>todo.id !==id)
    })
  }
  //add item
  const handleAdd = (item) => {
    setAllTodos((prev) => {
      return [...prev,item]
    })
  }
  //update item
const updateItem = (id, updItem) => {
  setAllTodos((prev) => {
    return prev.map((item) => {
      if (item.id === id) {
        return { ...item, ...updItem };
      }
      return item;
    });
  });
}

  //set item to be apdated
  const editItem = (item) => {
    setItemEdit({
      item,
      edit:true
    })
  }
  return (<ItemsContext.Provider value={{
    allTodos,
    itemEdit,
    onDelete,
    handleAdd,
    editItem,
    updateItem,
    setItemEdit
  }}>
    {children}
  </ItemsContext.Provider>)
} 

export default ItemsContext