import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";

function App() {

  return (
    <>
      <Navbar/>
      <div className="main w-[50vw] m-auto bg-emerald-300 my-10 h-[80vh] rounded-lg p-5">
        <h2 className='text-center font-extrabold text-lg'>AJ-Task Manage Your Todos at One Place</h2>
        <h2 className='text-black font-bold'>Add ToDo</h2>
        <div className="input flex gap-5 my-3">
        <input className='w-full rounded-md' type="text" />
        <button className='bg-emerald-600 rounded-md px-3 py-1 text-white font-bold'>Save</button>
        </div>
        <div className='flex gap-3 text-black align-middle'>
          <input type="checkbox" />
          <h2>Show Finished</h2>
        </div>
        <div className="line h-0.5 bg-emerald-600 m-auto w-[90%] my-4"></div>
        <div className="todos">
          <div className="todo flex align-middle gap-3">
          <input type="checkbox" />
            <p className='text-black w-[30%]'>Hello</p>
            <div className='flex gap-2 align-middle'>
            <button className="edit bg-emerald-600 rounded-md px-3 py-1"><FaRegEdit className='text-white'/></button>
            <button className="delete bg-emerald-600 rounded-md px-3 py-1"><MdOutlineDelete className='text-white'/></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
