import React from 'react'
import './index.css';
import List from './List';

// const ToDoItem = (event)=>{
//   return (
//     <>
//       <List
//       text = {event} 
//       key = {index}
//       id = {index}
//       />
//     </>
//   )
// }




const App = () => {

const [item , setItem] = React.useState('');
const [itemValue , setItemValue] = React.useState([]);

    const addItem = (obj)=>{
      setItem(obj.target.value);
      console.log(obj.target.value);
    }
    
    const storeValue = ()=>{
      setItemValue((itemValue)=>{
        return [...itemValue,item];
      });
      setItem('');
    
    }  
    const deleteItem = (id)=>{
      setItemValue((itemValue)=>{
        return itemValue.filter((curElem, index)=>{
            return index!== id;
        })
      })
    }
    return (
    <>
    <div className='center'>
      <div className='full-page'>
          <h1 className='title'> ToDoList</h1>
            <div className='addSymbol'>
             <input type="text" value={item} onChange={addItem} placeholder="Add a Items" autoFocus='off'/>
             <h1 onClick={storeValue}>+</h1>
            </div>
          {itemValue.map((ToDoItem, index)=>{
             return (
              <>
                <List
                text = {ToDoItem} 
                key = {index}
                id = {index}
                onSelect = {deleteItem}
                />
              </>
            )
          })
          }
      </div>
    </div>
    </>
  )
}

export default App;