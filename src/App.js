import React from 'react'
import logo from './logo.svg'
import './App.css'
import BooksContextProvider from './context/BooksContext'
import Navbar from './components/Navbar'
import ListBook from './components/ListBook'
import FormAdd from './components/FormAdd'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BooksContextProvider>
        <Navbar />
        <ListBook />
        <FormAdd />
      </BooksContextProvider>
    </div>
  )
}

export default App
