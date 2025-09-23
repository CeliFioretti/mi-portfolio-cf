'use client'

import React, { useState } from 'react'

function FormularioContacto() {
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);

    const data = Object.fromEntries(new FormData(e.target))

    const res = await fetch('/api/enviarMensaje', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    setEnviando(false)

    if (res.ok) {
      setEnviado(true)
    } else {
      alert('Hubo un error al enviar el mensaje')
    }
  }

  return (
    <div className="flex flex-col items-center justify-center font-bold fondo-blanco py-15">
    <h2 className='text-5xl text-neutral-900'>¿Hablamos?</h2>

      {enviado ? (
        <div className="mt-10 p-8 bg-green-50 rounded-2xl text-center text-green-800">
          <h4 className="text-2xl font-semibold mb-4">¡Gracias por tu mensaje!</h4>
          <p className="text-base font-light">
            Lo recibí correctamente y te responderé pronto.  
            <br />
            Revisa tu correo para la confirmación.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} method="post" className="flex flex-col mt-10 p-8 bg-gray-50 rounded-2xl w-full max-w-xl">
          <h4 className="font-medium text-lg mb-5">Completa el formulario y me pondré en contacto.</h4>

          <input required type="text" name="nombre" placeholder="Nombre completo" className="py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light" />
          <input required type="email" name="correo" placeholder="Correo electrónico" className="py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light" />
          <input required type="text" name="asunto" placeholder="Asunto" className="py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light" />
          <textarea required name="mensaje" placeholder="Mensaje" className="py-3 border border-gray-200 rounded-sm p-4 mb-4 text-base font-light" />

          <button
            type="submit"
            disabled={enviando}
            className={`py-2 px-5 text-base text-white rounded-sm font-light boton-enviar cursor-pointer flex items-center justify-center gap-2 ${
              enviando ? 'bg-gray-400' : 'bg-neutral-900 hover:bg-neutral-800'
            }`}
          >
            {enviando ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                Enviando...
              </>
            ) : (
              'Enviar'
            )}
          </button>

          <hr className="my-6 border-t border-gray-300" />

          <p className="font-extralight text-gray-500 text-sm text-center">
            Recibirás un correo confirmando la recepción del mensaje.
          </p>
        </form>
      )}
    </div>
  )
}

export default FormularioContacto