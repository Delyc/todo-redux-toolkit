import './App.css';
import { useState } from 'react';
import List from './components/List';
import { useSelector } from 'react-redux';
import Form from './components/Form';

function App() {
  const todos = useSelector((state) => state.todos)
  const [name, setName] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditiID] = useState(null)
  const editItem = (item) => {
    setIsEditing(true)
    setEditiID(item.id)
    setName(item.title)
  }

  return (
    <>
      <section className='flex flex-col items-center gap-10 py-20'>
        <h1 className='text-4xl uppercase font-bold'>react todo using redux</h1>
        <Form name={name} setIsEditing={setIsEditing} isEditing={isEditing} editID={editID} setEditiID={setEditiID} setName={setName}/>
        {todos ?
          <div className='flex flex-col gap-10'>
            <List items={todos} editItem={editItem} />
          </div>
          : ""}
      </section>
    </>
  );
}

export default App;
