import React from 'react'

export const Footer = () => {
  return (
    <div>

        

        <div class="container mt-5">
            <h2 class="mb-4">Formulario de Contacto</h2>
            <form>
                <div class="form-group">
                    <label for="nombre">Nombre:</label>
                    <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre"/>
                </div>
                <div class="form-group">
                    <label for="email">Correo Electrónico:</label>
                    <input type="email" class="form-control" id="email" placeholder="Ingrese su correo electrónico"/>
                </div>
                <div class="form-group">
                    <label for="asunto">Asunto:</label>
                    <input type="text" class="form-control" id="asunto" placeholder="Ingrese el asunto del mensaje"/>
                </div>
                <div class="form-group">
                    <label for="mensaje">Mensaje:</label>
                    <textarea class="form-control" id="mensaje" rows="4" placeholder="Escriba su mensaje"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Enviar Mensaje</button>
            </form>
        </div>
    </div>
    
  )
}
