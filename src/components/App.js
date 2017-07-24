import React from 'react'
import FiltersBar from './FiltersBar/FiltersBar.js'
import AddToDo from './AddToDo/AddToDo.js'
import VisibleToDoList from './ToDoList/VisibleToDoList.js'

const App = () => (
  <div>
    <AddToDo />
    <VisibleToDoList />
    <FiltersBar />
  </div>
)

export default App
