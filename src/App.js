import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import BooksContextProvider from './context/BooksContext'
import Navbar from './components/Navbar'
import ListBook from './components/ListBook'
import Add from './components/Add'
import ModalConfirm from './components/ModalConfirm'
import { Input, Button, Icon } from 'antd'
import { useQuery, useMutation } from '@apollo/react-hooks'
import {TODOS_QUERY, ADD_TODO, DELETE_TODO, UPDATE_TODO} from './graphql'

function App() {
  const { data } = useQuery(TODOS_QUERY)
  const [title, setTitle] = useState('')
  const [deleteTodo] = useMutation(DELETE_TODO, {
    update(cache, { data: { deleteTodo } }) {
      const { todoes } = cache.readQuery({ query: TODOS_QUERY })
      cache.writeQuery({
        query: TODOS_QUERY,
        data: { todoes: todoes.filter(todo => todo.id !== deleteTodo.id) }
      })
    }
  })

  const [createTodo] = useMutation(ADD_TODO, {
    update(cache, { data: { createTodo } }) {
      const { todoes } = cache.readQuery({ query: TODOS_QUERY })
      cache.writeQuery({
        query: TODOS_QUERY,
        data: { todoes: todoes.concat([createTodo]) }
      })
    }
  })

  const [updateTodo] = useMutation(UPDATE_TODO)

  const handleAddClick = () => {
    createTodo({ variables: { title } })
    setTitle('')
  }

  const handleDeleteClick = id => {
    deleteTodo({ variables: { id } })
  }

  const handleEditClick = id => {
    updateTodo({ variables: { id, title: 'dodo', completed: true } })
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

      <Input
        type="text"
        placeholder="Type"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <Button type="primary" onClick={handleAddClick} disabled={!title.trim()}>Ass Todo</Button>
      {data &&
        data.todoes &&
        data.todoes.map((todo, index) => (
          <li key={index}>
            {todo.title} / {todo.id} &nbsp; &nbsp;
            <Icon type="delete" onClick={() => handleDeleteClick(todo.id)} />
            &nbsp; &nbsp;
            <Icon type="edit" onClick={() => handleEditClick(todo.id)} />
          </li>
        ))}
    </div>
  )
}

export default App
