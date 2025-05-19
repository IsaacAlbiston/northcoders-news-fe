import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import ArticlesPage from './pages/ArticlesPage'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/articles' element= {<ArticlesPage/>} />
    </Routes>
    </>
  )
}

export default App
