import React from 'react'
import logo from '../img/logotxuria.png'


import insta from "../svg/instagram.svg"
import x from "../svg/x.svg"
import facebook from "../svg/facebook.svg"

export const Footer = () => {
  return (
    <div className=' bg-success text-white row align-items-center p-0 m-0 align-content-center '>

        <div className='col-lg-2 text-center '>
            <img src={logo} className='w-50'/>
            <p>AlkiTop</p>   
        </div>

        <div className=' col-lg-6'>
            <div className='row justify-content-center '>
                <img src={insta} className='col-lg-1'/>
                <img src={x} className='col-lg-1'/>
                <img src={facebook} className='col-lg-1'/>
            </div>
            
        </div>        

        <div class="container mt-5 col-lg-4 p-5 ">
            <h2 class="mb-4 text-center ">Kontaktua</h2>
            <form>
                <div class="form-group">
                    <label for="nombre">Izena:</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Sartu zure izena"/>
                </div>
                <div class="form-group">
                    <label for="email">Posta elektronikoa:</label>
                    <input type="email" class="form-control" id="email" placeholder="Sartu ezazu zure posta elektronikoa"/>
                </div>
                <div class="form-group">
                    <label for="asunto">Gaia:</label>
                    <input type="text" class="form-control" id="asunto" placeholder="Sartu kontzeptua"/>
                </div>
                <div class="form-group">
                    <label for="mensaje">Mezua:</label>
                    <textarea class="form-control" id="mensaje" rows="4" placeholder="Idatzi ezazu hemen zure mezua"></textarea>
                </div>
                <button type="submit" class="btn btn-outline-light mt-3  ">Enviar Mensaje</button>
            </form>
        </div>
    </div>
    
  )
}
