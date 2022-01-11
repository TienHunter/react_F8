import { useStore, actions } from './store'
import { useRef, useState } from 'react'
import './App.css'
function App() {

  const [state, dispatch] = useStore()
  const { todos, todoInput } = state

  const [edit, setEdit] = useState({ isEdit: false, index: -1 })
  const inputRef = useRef()

  const handleAdd = () => {
    console.log('handleInput');
    dispatch(actions.addTodo(todoInput))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  const handleRemove = (index) => {
    console.log('handleRemove');

    dispatch(actions.removeTodo(index))
  }
  const handleChange = () => {
    setEdit({ isEdit: false })
    dispatch(actions.editTodo(todoInput, edit.index))
    dispatch(actions.setTodoInput(''))
    inputRef.current.focus()
  }
  const handleEdit = (todo, index) => {
    {
      dispatch(actions.setTodoInput(todo));
      inputRef.current.focus()
      setEdit({ isEdit: true, index: index })
    }
  }
  return (
    <div className='wrapper'>
      <input
        className='input'
        ref={inputRef}
        value={todoInput}
        placeholder='Enter todo...'
        onChange={(e) => dispatch(actions.setTodoInput(e.target.value))}
      />
      <button
        className='btn btn-confirm'
        onClick={edit.isEdit ? handleChange : handleAdd}
      >
        {edit.isEdit ? 'Change' : 'Add'}</button>

      <ul className='todos'>
        {todos.map((todo, index) => (
          <li
            className='todo'
            key={index}
          >
            <div>{todo}</div>
            <button className='btn btn-remove' onClick={() => handleRemove(index)}>&times;</button>
            <button
              className='btn btn-edit'
              onClick={() => handleEdit(todo, index)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App