
import { useDispatch } from "react-redux";
import { updateTodo, addTodo } from "../redux/features/todoSlice";
const Form = ({name, setName, isEditing, editID,  setIsEditing, setEditiID}) => {
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
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
    
    
      
    return ( 
        <form onSubmit={handleSubmit} className="flex gap-4">
        <input type="text" placeholder='add task' onChange={(event) => setName(event.target.value)} value={name} className="underline-none border py-4 px-10 rounded shadow-lg" />
        <button className='bg-blue-600 py-3 px-5 text-white font-medium rounded' type='submit'>{isEditing ? "edit" : "add"}</button>
      </form>
     );
}
 
export default Form;