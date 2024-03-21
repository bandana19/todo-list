import React, { Fragment } from 'react'

const ModalBox = ({openModal,setOpenModal,setName,setEmail,setRoll,addData}) => {
  return (
    <Fragment>
  { openModal &&
     <div className='modal-box'>
       <div className='header'><i class="fa fa-close arrow" onClick={()=>setOpenModal(false)}></i></div>
       <div className='list-box'>
        <input type='text' className='name' placeholder='Enter Your Name' onChange={(e)=>setName(e.target.value)}/>
        <input type='email' className='email'placeholder='Enter Your Email' onChange={(e)=>setEmail(e.target.value)}/>
        <input type='number'className='rollNo' placeholder='Enter RollNo' onChange={(e)=>setRoll(e.target.value)}/>
        <button className='button-add' onClick={addData}>Add</button>
       </div>
        </div>
    }
    </Fragment>
  )
}

export default ModalBox