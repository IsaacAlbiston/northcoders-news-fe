import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import ArticlesPage from './pages/ArticlesPage'
import NavBar from './components/NavBar'
import ArticlePage from './pages/ArticlePage'
import { SessionProvider } from './contexts/SessionContext'

function App() {

  return (
    <div className='loading'>
    <SessionProvider>
      <NavBar/>
      <Routes>
        <Route path='/articles/:topic?' element= {<ArticlesPage/>} />
        <Route path='/article/:articleId' element= {<ArticlePage/>} />
      </Routes>
    </SessionProvider>
    </div>
  )
}

export default App
