import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import ArticlesPage from './pages/ArticlesPage'
import NavBar from './components/NavBar'
import ArticlePage from './pages/ArticlePage'

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/articles' element= {<ArticlesPage/>} />
      <Route path='/articles/:articleId' element= {<ArticlePage/>} />
    </Routes>
    </>
  )
}

export default App
