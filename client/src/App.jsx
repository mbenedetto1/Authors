import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/Nav'
import Dashboard from './components/Dashboard'
import NewAuthor from './components/NewAuthor'
import { Routes, Route } from 'react-router-dom'
import ShowAuthor from './components/ShowAuthor'

function App() {


  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path='/authors/new' element={<NewAuthor />}/>
        <Route path= '/authors/:id' element={<ShowAuthor />}></Route>
        
      </Routes>
    </>
  )
}

export default App
