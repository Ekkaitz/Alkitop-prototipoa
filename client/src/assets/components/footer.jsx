import React from 'react'
import logo from '../img/logotxuria.png'

import insta from '../svg/instagram.svg'
import x from '../svg/x.svg'
import facebook from '../svg/facebook.svg'

export const Footer = () => {
  return (
    <div className=' bg-success text-white row align-items-center p-0 m-0 align-content-center '>

      <div className='col-lg-2 text-center '>
        <img src={logo} className='w-50' />
        <p>AlkiTop</p>
      </div>

      <div className=' col-lg-3 '>
        <div className='row justify-content-center '>
          <img src={insta} className='col-lg-1 w-25 ' />
          <img src={x} className='col-lg-1 w-25' />
          <img src={facebook} className='col-lg-1 w-25 ' />
        </div>

      </div>

      <div className='container mt-5 col-lg-4 p-5 '>
        <h2 className='mb-4 text-center '>Kontaktua</h2>
        <form>
          <div className='form-group'>
            <label htmlFor='nombre'>Izena:</label>
            <input type='text' className='form-control' id='nombre' placeholder='Sartu zure izena' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Posta elektronikoa:</label>
            <input type='email' className='form-control' id='email' placeholder='Sartu ezazu zure posta elektronikoa' />
          </div>
          <div className='form-group'>
            <label htmlFor='asunto'>Gaia:</label>
            <input type='text' className='form-control' id='asunto' placeholder='Sartu kontzeptua' />
          </div>
          <div className='form-group'>
            <label htmlFor='mensaje'>Mezua:</label>
            <textarea className='form-control' id='mensaje' rows='4' placeholder='Idatzi ezazu hemen zure mezua' />
          </div>
          <button type='submit' className='btn btn-outline-light mt-3  '>Enviar Mensaje</button>
        </form>
      </div>
    </div>

  )
}
