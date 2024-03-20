import React from 'react'

const TodoList = ({handleContextMenu,arr}) => {
  return (
    <table>
    <thead>
        <tr>
            <th>NAME</th>
            <th>RollNo</th>
        </tr>
    </thead>
    <tbody>
        {arr.map((item, currentIndex) => (
            <tr onContextMenu={(e) => handleContextMenu(e, currentIndex, item)}>
                <td>{item.name}</td>
                <td>{item.rollNo}</td>
            </tr>
        ))}
    </tbody>
</table>
  )
}

export default TodoList