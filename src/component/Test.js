import React, { useState } from 'react';
import "../App.css";
import { Toaster } from './Toaster';
import TodoList from './todo-list-1/TodoList';
import EditList from './todo-list-1/EditList';
import UpDateList from './todo-list-1/UpDateList';

const Test = () => {
    const [list, setList] = useState(false);
    const [indexNo, setIndexNo] = useState(-1)
    const [editList, setEditList] = useState(false)
    const [name, setName] = useState("")
    const [rollNo, setRollNo] = useState("")
    const [itemName, setItemName] = useState("")


    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [arr, setArr] = useState([
        { name: 'Bandan Sahani', rollNo: 12 },
        { name: 'Sundeep Sahani', rollNo: 1 },
        { name: 'Satendra Sahani', rollNo: 10 },
        { name: 'Krishna Sahani', rollNo: 15 },
        { name: 'Bandan Sahani', rollNo: 12 },
        { name: 'Sundeep Sahani', rollNo: 1 },
        { name: 'Satendra Sahani', rollNo: 10 },
        { name: 'Krishna Sahani', rollNo: 15 },
        { name: 'Bandan Sahani', rollNo: 12 },
        { name: 'Sundeep Sahani', rollNo: 1 },
    ]);
    const handleContextMenu = (e, index, newItem) => {
        e.preventDefault();
        setList(true);
        const boundingBox = e.currentTarget.getBoundingClientRect();
        setPosition({ x: boundingBox.left, y: boundingBox.bottom + 72 });
        setIndexNo(index)
        setItemName(newItem)
    };

    const editElement = (e) => {
        e.stopPropagation()
        setEditList(true)
        setName(itemName.name)
        setRollNo(itemName.rollNo)

    }


    const deleteItem = () => {
        let deleteName = arr.filter((item, ind) => ind !== indexNo)
        setArr(deleteName)
        Toaster.success("Delete Successfully")
    }

    const upDateElement = () => {
        let newArr = [...arr]
        newArr[indexNo] = { name: name, rollNo: rollNo }
        setArr(newArr)
        Toaster.success("Update Successfully")
        setEditList(false)
        setList(false);
    }

    return (
        <div onClick={() => { setList(false); setEditList(false) }}>
            <h1>Todo-List</h1>
          <TodoList handleContextMenu={handleContextMenu} arr={arr}/>
         {  list && <EditList editElement={editElement} deleteItem={deleteItem} position={position}/>}

            {editList &&<UpDateList upDateElement={upDateElement}
             position={position} setName={setName} setRollNo={setRollNo} name={name} rollNo={rollNo}/>}
        </div>
    );
};

export default Test;
