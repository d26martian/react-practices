import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'

import * as cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string
}


export const Navbar = ({ className }: NavbarProps) => {
  console.log('=-=-=-', cls)
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
    </div>
  )
}