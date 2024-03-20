import React from 'react'

const EditList = ({deleteItem,editElement,position}) => {
  return (
 
        <div className='list' style={{ position: "absolute", top: position.y, left: position.x }}>
            <p className='del' onClick={deleteItem}>Delete</p>
            <p className='edit' onClick={editElement}>Edit</p>
        </div>
  
  )
}

export default EditList