import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router'

import { useTheme } from './provider/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'

import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

import './styles/index.scss'

export const App = () => {

  const { theme, toggleTheme } = useTheme()


  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage />} />
          <Route path={'/'} element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  )
}
