import React from 'react'

function Hablamos() {
    return (
        <div className='flex flex-col items-center justify-center font-bold fondo-blanco py-15'>
            <h2 className='text-5xl text-neutral-900'>¿Hablamos?</h2>

            <form action="enviarMensaje" method="post" className='flex flex-col mt-10 p-8 bg-gray-50 rounded-2xl'>
                <h4 className='font-medium text-lg mb-5'>Completa el formulario y me pondré en contacto.</h4>

                <input type="text" name="nombre" placeholder='Nombre completo' className='py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light' />
                <input type="email" name="correo" id="correo" placeholder='Correo electronico' className='py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light' />
                <input type="text" name="asunto" placeholder='Asunto' className='py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light' />
                <textarea placeholder='Mensaje' name="mensaje" id="" className='py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light' />

                <button type="submit" className='py-2 px-5 text-base text-white rounded-sm  font-light boton-enviar cursor-pointer'>Enviar</button>

                <hr className='my-6 border-t border-gray-300' />

                <p className='font-extralight text-gray-500 text-sm text-center'>Recibirás un correo confirmando la recepción del mensaje.</p>

            </form>

        </div>
    )
}

export default Hablamos