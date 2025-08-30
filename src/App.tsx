import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router'

import { AboutPageAcync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

import './styles/index.scss'
import { useTheme } from './theme/useTheme'

export const App = () => {

  const { theme, toggleTheme } = useTheme()


  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAcync />} />
          <Route path={'/'} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  )
}
