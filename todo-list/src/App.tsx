
import './App.css'
import {useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'

function App() {
  
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }
    
    setTodos([newTodo, ...todos])
  }

  const onUpdate = (targetId) => {
    // todos state 값 중, 일치하는 값을 변경
    setTodos(todos.map((todo)=> 
        todo.id === targetId
        ? {...todo, isDone: !todo.isDone }
        : todo
      )
    );
  }

  const onDelete = (targetId) => {
    setTodos( todos.filter((todo) => todo.id !== targetId));
  }

  return (
    <div className='App'>
      <Header/>
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App



const mockData = [
  {
    id: 0,
    isDone: false, 
    content: "공부하기!",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: true, 
    content: "저장 공부하기!",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false, 
    content: "노래 연습!",
    date: new Date().getTime(),
  },
];