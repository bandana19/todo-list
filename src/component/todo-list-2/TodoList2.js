import React, { Fragment, useState } from 'react'
import ModalBox from './ModalBox'

const TodoList2 = () => {
    const [openModal, setOpenModal] = useState(false)
    const [studentList, setStudentList] = useState([{ name: "Bandan sahani", email: "bandanasahani20@gmail.com", roll: 1 },
    { name: "Sundeep Sahani", email: "sundeepsahani19@gmail.com", roll: 2 },
    { name: "Satendra Sahani", email: "satendrasahani19@gmail.com", roll: 3 },
    { name: "Krishna Sahani", email: "ks123455@gmail.com", roll: 4 },
    { name: "Mohan Sahani", email: "mohansanahi23455@gmail.com", roll: 5 }])

    const [edit, setEdit] = useState({
        indexNo: -1,
        types: "",
    })

    const [newArr, setNewArr] = useState([])

    const changeName = (e, index) => {
        let valye = e.target.value
        let tempArr = [...studentList]
        tempArr[index].name = valye
        setStudentList(tempArr)
        setNewArr(tempArr)
    }

    const changeEmail = (e, index) => {
        let emailValue = e.target.value
        let newEmail = [...studentList]
        newEmail[index].email = emailValue
        setStudentList(newEmail)
        setNewArr(newEmail)
    }

    const changeRoll = (e, index) => {
        let noValue = e.target.value
        let newRollNumber = [...studentList]
        newRollNumber[index].roll = noValue
        setStudentList(newRollNumber)
        setNewArr(newRollNumber)
    }

    //    modal box
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [roll, setRoll] = useState("")


    const addData = () => {
        let newArr = [...studentList]
        let tempObj = { name: name, email: email, roll: roll }
        setStudentList([...newArr, tempObj])
        setOpenModal(false)
        setNewArr([...newArr, tempObj])
    }

    const deleteElement = (item, ind) => {
        let deleteItem = studentList.filter((_, index) => index !== ind)
        setStudentList(deleteItem)
    }

    const searchElement = (e) => {
        let searchData = e.target.value.toUpperCase()
        let resultData = newArr.filter((item) => item.name.includes(searchData.toUpperCase()))
        setStudentList(resultData)
    }

    return (

        <Fragment>
            <ModalBox openModal={openModal} setOpenModal={setOpenModal} setName={setName} setEmail={setEmail} setRoll={setRoll}
                addData={addData} />
            <div className='input-box'>
                <input className='text-box text-white' type='text' placeholder='Enter Your Name'
                    onChange={(e) => searchElement(e)} />
                <button className='text-center add-button' onClick={() => setOpenModal(true)}>Add</button>
            </div>
            <table className='table'>
                <thead className='bg-dark text-white text-center'>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>RollNo</th>
                        <th>Section</th>
                    </tr>
                </thead>
                <tbody className='border bg text-white text-center h-200'>
                    {
                        studentList.map((item, index) => (
                            <tr>
                                <td
                                    onClick={() => setEdit({ indexNo: index, types: "name" })}
                                >
                                    {index === edit.indexNo && edit.types == "name" ? <input type='text' className='name-input' value={item.name}
                                        onChange={(e) => changeName(e, index)} /> : item.name}
                                </td>
                                <td
                                    onClick={() => setEdit({ indexNo: index, types: "email" })}
                                > {index == edit.indexNo && edit.types == "email" ? <input type='email' className='email-input' value={item.email}
                                    onChange={(e) => changeEmail(e, index)} /> : item.email}</td>

                                <td
                                    onClick={() => setEdit({ indexNo: index, types: "rollNo" })}>
                                    {index == edit.indexNo && edit.types == "rollNo" ? <input type='number' className='roll-input' value={item.roll}
                                        onChange={(e) => changeRoll(e, index)} /> : item.roll}
                                </td>
                                <td><button className='btn btn-danger' onClick={() => deleteElement(item, index)}>Delete</button></td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>

        </Fragment>
    )
}

export default TodoList2