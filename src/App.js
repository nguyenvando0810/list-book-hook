import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BooksContextProvider from './context/BooksContext'
import Navbar from './components/Navbar'
import ListBook from './components/ListBook'
import Add from './components/Add'
import ModalConfirm from './components/ModalConfirm'
import { Input, Button, Icon } from 'antd';

import { gql } from "apollo-boost"
import { useQuery, useMutation } from '@apollo/react-hooks'

const TODOS_QUERY = gql`
  query {
    todos {
      type
      id
    }
  }
`;

const ADD_TODO = gql`
  mutation addTodo($type: String!) {
    addTodo(type: $type) {
      type
      id
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: String!) {
    deleteTodo(id: $id) {
      type
      id
    }
  }
`;


function App() {
  const { data } = useQuery(TODOS_QUERY)
  const [type, setType] = useState('')
  const [deleteTodo] = useMutation(DELETE_TODO)
  const [addTodo] = useMutation(ADD_TODO,
    {
      update(cache, { data: { addTodo } }) {
        const { todos } = cache.readQuery({ query: TODOS_QUERY })
        cache.writeQuery({
          query: TODOS_QUERY,
          data: { todos: todos.concat([addTodo]) }
        })
      }
    })

  const handleAddClick = () => {
    addTodo({ variables: { type } })
    setType('')
  }

  const handleDeleteClick = (id) => {
    deleteTodo({ variables: { id } })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BooksContextProvider>
        <Navbar />
        <ListBook />
        <Add />
        <ModalConfirm />
      </BooksContextProvider>

      <Input type="text" placeholder="type" value={type} onChange={(e) => setType(e.target.value)} />
      <Button type="primary" onClick={handleAddClick} disabled={!type.trim()}> Ass Todo</Button>
      {data && data.todos && data.todos.map((todo, index) => <li key={index}>{todo.type} / {todo.id} &nbsp; &nbsp;
        <Icon type="delete" onClick={() => handleDeleteClick(todo.id)} />
      </li>)}
    </div >
  )
}

export default App
