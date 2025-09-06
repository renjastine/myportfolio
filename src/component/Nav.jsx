import React, { useState } from 'react'
import Links from './Links'
import Burger from './Burger'

export default function Nav() {

  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener("resize", () => setWidth(window.innerWidth))

  return (
    <nav className='d-flex-r'>
      <h3 className='poppins-medium color-1'>Portfolio</h3>
      {
        width >= 515 ? <Links /> : <Burger />
      }
    </nav>
  )
}
