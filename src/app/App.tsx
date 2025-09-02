import React from 'react'
import { Link } from 'react-router'

import { useTheme } from './provider/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './provider/router'

import './styles/index.scss'

export const App = () => {

  const { theme, toggleTheme } = useTheme()


  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <AppRouter />
    </div>
  )
}
