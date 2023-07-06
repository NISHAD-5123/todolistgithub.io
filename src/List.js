import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import './index.css';
const List = (props) => {
  return (
    <>
    <div className='list'>
        <span onClick={()=>{
            props.onSelect(props.id)
        }}>x</span>
        <li>
            {props.text}
        </li>
    </div>
    </>
    
  )
}

export default List;