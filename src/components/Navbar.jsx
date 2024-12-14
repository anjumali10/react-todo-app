import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-emerald-600 flex gap-10 p-2 text-white align-middle justify-around'>
        <h1 className='text-xl font-bold'>AJ-Task</h1>
        <ul className='flex gap-10'>
            <li className='hover:font-bold cursor-pointer'>Home</li>
            <li className='hover:font-bold cursor-pointer'>My Todo's</li>
        </ul>
    </div>
  )
}

export default Navbar