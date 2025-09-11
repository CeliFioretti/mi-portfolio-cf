import globals from '@/app/globals.css'
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});


export const metadata = {
  title: "Mi Portfolio CF",
  description: "Explora mi trabajo como desarrolladora de software: proyectos, habilidades, experiencia y enfoque en buenas prácticas y seguridad.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={roboto.className}>
      <body>

        {children}
      </body>
    </html>
  );
}
