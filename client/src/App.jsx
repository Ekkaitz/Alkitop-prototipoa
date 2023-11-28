import React from 'react'
import { Header } from './assets/components/Header'
import { IconMenu } from './assets/components/IconMenu'
import { Card } from './assets/components/card'
import { Title } from './assets/components/Title'
import { Footer } from './assets/components/footer'

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
import bizikleta from './assets/img/bici.jpg'
import camara from './assets/img/camara.png'
import eskiak from './assets/img/eskiak.png'

function App () {
  return (
    < >
      <Header/>


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

      <div className=' m-5 '>

        <Title title='ECO produktuak' />
        <div className='row row-cols-md-6 row-cols-sm-1 rounded-3 flex-wrap-reverse justify-content-around'>

          <Card image={tent} product='Denda' prezioa='12€/egun' />
          <Card image={camara} product='Kamara' prezioa='42€/egun' />
          <Card image={eskiak} product='Eskiak' prezioa='12€/egun' />
          <Card image={bizikleta} product='Bizikleta' prezioa='22€/egun' />
        </div>

        <Title title='Beste produktuak' />
        <div className='row row-cols-md-6 row-cols-sm-1 rounded-3 flex-wrap-reverse justify-content-around'>
          <Card image={tent} product='Denda' prezioa='12€/egun' />
          <Card image={camara} product='Kamara' prezioa='42€/egun' />
          <Card image={eskiak} product='Eskiak' prezioa='12€/egun' />
          <Card image={bizikleta} product='Bizikleta' prezioa='22€/egun' />
        </div>
      </div>


      <Footer/>
    </>
  )
}

export default App
