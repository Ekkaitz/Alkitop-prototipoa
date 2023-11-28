import React from 'react'
import { Header } from './assets/components/Header'
import { IconMenu } from './assets/components/IconMenu'
import { Card } from './assets/components/card'
import { Title } from './assets/components/Title'

import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

import plane from './assets/svg/plane.svg'
import book from './assets/svg/book.svg'
import scooter from './assets/svg/scooter.svg'
import camera from './assets/svg/camera.svg'
import controller from './assets/svg/controller.svg'
import bicycle from './assets/svg/bicycle.svg'
import car from './assets/svg/car.svg'

import tent from './assets/img/high-peak-minipack-2p-azul-tienda-de-campana-canadiense.jpg'

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

      <div className=' m-5 '>
        <div className=' my-5 '>
          <hr />
        </div>

        <Title title='ECO produktuak' />
        <div className='row row-cols-5 rounded-3 flex-wrap-reverse justify-content-around'>

          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
        </div>

        <Title title='Beste produktuak' className=' mt-5' />
        <div className='row row-cols-5 rounded-3 flex-wrap-reverse justify-content-around '>

          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
          <Card image={tent} product='Produktua' />
        </div>
      </div>

    </>
  )
}

export default App
