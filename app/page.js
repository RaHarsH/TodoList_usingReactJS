'use client'
import Header from '@/Components/Header'
import React, { useState } from 'react'
import { render } from 'react-dom'


const page = () => {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [mainTask, setMainTask] = useState([])  //empty  array to hold multiple tasks

  const submitHandler = (e) => {
    e.preventDefault()
    // console.log(task) // console.log(desc)
    setMainTask([...mainTask, {task, desc}])
    setTask("")
    setDesc("")
    // console.log(mainTask)
  }
  let renderTask = <h2>No Task Available</h2>

  const deleteHandler = (i) => {
    let copyTask = [...mainTask]
    copyTask.splice(i, 1)
    setMainTask(copyTask)
  }

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key = {i} className='flex items-center justify-between mb-8'>
        <div className='flex items-center justify-between mb-5 w-2/3'>
          <h5 className='text-2xl font-semibold'>{t.task}</h5>
          <h6 className='text-lg font-medium'>{t.desc}</h6>
        </div>
        <button 
        onClick={() => {
          deleteHandler(i)
        }}
        className='bg-red-400 text-white px-4 py-2 rounded font-bold'>
        Delete
        </button>
        </li>
      )
    })
  }
  return (
    <>
    <Header/>
    <form onSubmit={submitHandler}>
      <input type = "text" 
      value = {task} 
      onChange={(e) => {
        setTask(e.target.value)
      }}
      className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
      placeholder= 'Enter task here'/>

      <input type = "text" 
      value = {desc} 
      onChange={(e) => {
        setDesc(e.target.value)
      }}
      className='text-2xl border-zinc-800 border-4 m-5 px-4 py-2'
      placeholder= 'Enter description here'/>

      <button className='bg-black text-white text-2xl px-4 py-2 font-bold rounded ml-5'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'>
      <ul>{renderTask}</ul>
    </div>
    </>
  )
}

export default page