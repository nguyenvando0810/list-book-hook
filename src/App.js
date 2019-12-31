import React from 'react'
import logo from './logo.svg'
import './App.css'
import BooksContextProvider from './context/BooksContext'
import Navbar from './components/Navbar'
import ListBook from './components/ListBook'
import FormAdd from './components/FormAdd'
import ModalConfirm from './components/ModalConfirm'

import { gql } from "apollo-boost"
import { useQuery } from '@apollo/react-hooks'

const AUTHORS_QUERY = gql`
  query {
    authors {
      id
      name
      status
    }
  }
`;

function App() {
  const { data } = useQuery(AUTHORS_QUERY);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <BooksContextProvider>
        <Navbar />
        <ListBook />
        <FormAdd />
        <ModalConfirm />
      </BooksContextProvider>

      {data && data.authors && data.authors.map((author, index) => <li key={index}>{author.name} / {author.id} / {author.status}</li>)}
    </div>
  )
}

export default App
