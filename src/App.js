import './App.css';
import { useState } from 'react';
import List from './components/List';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTodo } from './redux/reducers/todoSlice';
import { updateTodo } from './redux/reducers/todoSlice';
import { deleteTodo } from './redux/reducers/todoSlice';


function App() {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditiID] = useState(null)
  const todos = useSelector((state) => state.todos)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      alert("please enter a task")
    } else if (name && isEditing) {
      dispatch(updateTodo({ id: editID, title: name }))
      setName("")
      setEditiID(null)
      setIsEditing(false)
    } else {
      dispatch(addTodo({
        title: name
      }))
      setName("")
    }

  }
  const removeItem = (id) => {
    dispatch(deleteTodo(id))
  }
  const editItem = (item) => {
    setIsEditing(true)
    setEditiID(item.id)
    setName(item.title)
  }



  return (
    <>
      <section className='flex flex-col items-center gap-10 py-20'>
        <h1 className='text-4xl uppercase font-bold'>react todo</h1>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input type="text" placeholder='add task' onChange={(e) => setName(e.target.value)} value={name} className="underline-none border py-4 px-10 rounded shadow-lg" />
          <button className='bg-blue-600 py-3 px-5 text-white font-medium rounded' type='submit'>{isEditing ? "edit" : "add"}</button>
        </form>
        {todos.length > 0 && (
          <div className='flex flex-col gap-10'>
            <List items={todos} removeItem={removeItem} editItem={editItem} />
          </div>
        )}
      </section>
    </>
  );
}

export default App;
