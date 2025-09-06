import React, { useState } from 'react'
import Links from './Links'
import Burger from './Burger'

export default function Nav({ width, form, setForm }) {
  console.log(width)

  return (
    <nav className='d-flex-r'>
      <h3 className='poppins-medium color-1'>Portfolio</h3>
      {
        width >= 515 ? <Links /> : <Burger form={form} setForm={setForm} />
      }
    </nav>
  )
}
