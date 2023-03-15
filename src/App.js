import './App.css';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import List from './components/List';

const getLocalStorage = () => {
  let list = localStorage.getItem("list")
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")))
  } else {
    return []
  }
}
function App() {
  const [name, setName] = useState("")
  const [list, setList] = useState(getLocalStorage())
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditiID] = useState(null)

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list))
  }, [list])


  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alert("please enter a task")
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName("")
      setEditiID(null)
      setIsEditing(false)
    } else {
      const newItem = { id: nanoid(), title: name, completed: false }
      setList([...list, newItem])
      setName("")
    }

  }
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id))
  }
  const editItem = (id) => {
    const editItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditiID(id)
    setName(editItem.title)

  }
  const markCompleted = (id) => {
    const complete = list.map((item) => 

      item.id === id ? {...item, completed: !item.completed} : item
  
    )
    setList(complete)
  }
  return (
    <>
    <section className='flex flex-col items-center gap-10 py-20'>
      <h1 className='text-4xl uppercase font-bold'>react todo</h1>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input type="text" placeholder='add task' onChange={(e) => setName(e.target.value)} value={name} className="underline-none border py-4 px-10 rounded shadow-lg" />
        <button className='bg-blue-600 py-3 px-5 text-white font-medium rounded' type='submit'>{isEditing ? "edit" : "add"}</button>
      </form>
      {list.length > 0 && (
        <div className='flex flex-col gap-10'>
          <List  items={list} removeItem={removeItem} editItem={editItem} markCompleted={markCompleted}/>
        </div>
      )}
      </section>
    </>
  );
}

export default App;
