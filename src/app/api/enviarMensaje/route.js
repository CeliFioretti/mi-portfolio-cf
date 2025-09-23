import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer';

export async function POST(request) {
  const {nombre, correo, asunto, mensaje} = await request.json();

  const transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
  })

  // Email para mí
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    replyTo: correo,
    to: 'celinainesfioretti@gmail.com',
    subject: `Vieron tu Portfolio: ${asunto}`,
    text: `De ${nombre} <${correo}>\n\n${mensaje}`
  })

  // Email para usuario
  await transporter.sendMail({
  from: 'celinainesfioretti@gmail.com',
  to: correo,
  subject: '¡Gracias por tu mensaje!',
  html: `
    <div style="font-family: sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px;">
      <h2 style="color: #333;">Hola ${nombre},</h2>
      <p style="font-size: 16px; color: #555;">
        ¡Gracias por ponerte en contacto! Recibí tu mensaje correctamente y me pondré en contacto contigo lo antes posible.
      </p>
      <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;" />
      <p style="font-size: 14px; color: #777;">
        Si tenés alguna duda adicional, podés responder a este correo.  
        <br /><br />
        ¡Gracias nuevamente!
      </p>
      <p style="font-size: 14px; color: #999;">— Celina Fioretti</p>
    </div>
  `
})


  return NextResponse.json({ success: true, message: 'Mensaje recibido' })
}
