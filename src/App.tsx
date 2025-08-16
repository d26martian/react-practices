import React, { Suspense } from 'react'
import { Counter } from './components/Counter'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router'

import { AboutPageAcync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'

import './index.scss'

export const App = () => {
  return (
    <div className='app'>
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
