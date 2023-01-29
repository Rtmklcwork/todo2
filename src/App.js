import './App.css';
import { useDispatch, useSelector  } from 'react-redux';
import { addTodo, removeLastTodo } from './toolkitRedux/todoSlice';


function App() {
  const dispatch = useDispatch()
  const todos = useSelector((state)=> state.toolkit.todos)

  return (
    <div className="App">
    <button className='custom-btn btn-1' onClick={()=>dispatch( removeLastTodo())}>Удалить таск</button>
    <button className='custom-btn btn-1' onClick={()=>dispatch(addTodo(prompt()))}>Добавить туду</button>
    <ul className='first'>
      {todos.map(todo=>
        <li  key={todo}>{todo}</li>
      )}
    </ul>
    </div>
  );
}

export default App;
