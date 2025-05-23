import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import ArticlesPage from './pages/ArticlesPage'
import NavBar from './components/NavBar'
import ArticlePage from './pages/ArticlePage'
import { SessionProvider } from './contexts/SessionContext'
import BadPathPage from './pages/BadPathPage'
import HomePage from './pages/HomePage'
import UsersPage from './pages/UsersPage'
import AccountPage from './pages/AccountPage'

function App() {

  return (
    <div className='loading'>
    <SessionProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/articles/:pageNumber/:topic?' element= {<ArticlesPage/>} />
        <Route path='/article/:articleId/:pageNumber' element= {<ArticlePage/>} />
        <Route path='/users' element={<UsersPage/>} />
        <Route path='/users/:usernameParam' element={<AccountPage/>} />
        <Route path={'*'} element= {<BadPathPage/>} />
      </Routes>
    </SessionProvider>
    </div>
  )
}

export default App
