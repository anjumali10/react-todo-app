import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showFinished, setshowFinished] = useState(true)

  useEffect(() => {
    let todosString = localStorage.getItem('todos')
    if (todosString){
      let todos = JSON.parse(localStorage.getItem('todos'))
      setTodos(todos)
    }
    
  }, [])
  
  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }

  const saveToLS = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  

  const handleChange = (e) =>{
    setTodo(e.target.value)
  }

  const handleAdd = () =>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted : false}])
    setTodo('')
    saveToLS()
  }

  const handleEdit = (e, id) =>{
    let t = todos.filter(item => {
      return item.id === id
    })
    setTodo(t[0].todo)
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleDelete = (e, id) =>{
    let newTodos = todos.filter(item => {
      return item.id !== id;
    })
    setTodos(newTodos)
    saveToLS()
  }

  const handleCheckbox = (e) => {
    let id = e.target.name
    let index = todos.findIndex(item =>{
      return item.id === id;
    })
    let newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  



  return (
    <>
    {/* Add Navbar */}
      <Navbar/>

      <div className="main mx-auto w-[90vw] sm:w-[50%] lg:w-[40%] m-auto bg-emerald-300 my-6 sm:my-10 min-h-[80vh] rounded-lg p-4 sm:p-5">
        <h2 className='text-center font-extrabold text-lg'>AJ-Task Manage Your Todos at One Place</h2>
        <h2 className='text-black font-bold'>Add ToDo</h2>
        <div className="input flex gap-5 my-3">
        <input className='w-full rounded-md' type="text" value = {todo} onChange={handleChange}/>
        <button onClick={handleAdd} disabled = {todo.length < 3} className='bg-emerald-600 rounded-md px-3 py-1 text-white font-bold'>Save</button>
        </div>

        {/* Code for show and hide finished tasks */}
        <div className='flex gap-3 text-black align-middle'>
          <input onChange={toggleFinished} type="checkbox" checked = {showFinished}/>
          <h2>Show Finished</h2>
        </div>

        {/* Add line */}
        <div className="line h-0.5 bg-emerald-600 m-auto w-[90%] my-4"></div>

        {/* Todos Conotainer */}
        <div className="todos">
          {todos.length == 0 && <div>No todos to display</div>}
          {todos.map(item =>{
          return (showFinished || !item.isCompleted) && <div key = {item.id} className="todo flex align-middle gap-3 my-3">
          <input onChange={handleCheckbox} name = {item.id} type="checkbox" checked={item.isCompleted}/>
          <p className={`text-black w-[30%] ${item.isCompleted ? 'line-through' : ''}`}>{item.todo}</p>
            <div className='flex gap-2 align-middle h-full'>
            <button onClick={(e) => {handleEdit(e, item.id)}} className="edit bg-emerald-600 rounded-md px-3 py-1"><FaRegEdit className='text-white'/></button>
            <button onClick={(e) => {handleDelete(e, item.id)}} className="delete bg-emerald-600 rounded-md px-3 py-1"><MdOutlineDelete className='text-white'/></button>
            </div>
          </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
