import React from 'react'
import { Header } from './assets/components/Header'
import { IconMenu } from './assets/components/IconMenu'
import 'bootstrap/dist/css/bootstrap.css'

import plane from './assets/svg/plane.svg'
import book from './assets/svg/book.svg'
import scooter from './assets/svg/scooter.svg'
import camera from './assets/svg/camera.svg'
import controller from './assets/svg/controller.svg'
import bicycle from './assets/svg/bicycle.svg'
import car from './assets/svg/car.svg'

function App () {
  return (
    <>
      <Header />

      <div className='row pt-4 '>
        <IconMenu image={plane} href='#' />
        <IconMenu image={book} href='#' />
        <IconMenu image={scooter} href='#' />
        <IconMenu image={camera} href='#' />
      </div>

      <div className='row pt-4 '>
        <IconMenu image={controller} href='#' />
        <IconMenu image={bicycle} href='#' />
        <IconMenu image={car} href='#' />
        <IconMenu image={camera} href='#' />
      </div>

      <div className=' my-5 '>
        <hr />
      </div>

    </>
  )
}

export default App
