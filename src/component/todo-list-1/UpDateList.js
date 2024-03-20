import React from 'react'

const UpDateList = ({upDateElement,position,setRollNo,setName,name,rollNo}) => {
  return (
    <div className='edit-list'
                onClick={(e) => e.stopPropagation()}
                style={{ position: "absolute", top: position.y, left: position.x }}>
                <label> Enter Name</label>
                <input value={name} type='text' onChange={(e) => setName(e.target.value)} />
                <label>Enter RollNo</label>
                <input type='number' value={rollNo} onChange={(e) => setRollNo(e.target.value)} />
                <button className='add-btn' onClick={upDateElement}>Add</button>
            </div>
  )
}

export default UpDateList