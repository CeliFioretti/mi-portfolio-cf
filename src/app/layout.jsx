import globals from '@/app/globals.css'
import { Roboto } from 'next/font/google';
import { config } from '@fortawesome/fontawesome-svg-core';
import { Analytics } from "@vercel/analytics/next"
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
});


export const metadata = {
  title: "Mi Portfolio CF | Celina Fioretti",
  description: "Explora mi trabajo como desarrolladora de software: proyectos, habilidades, experiencia y enfoque en buenas prácticas y seguridad.",
  keywords: ["Desarrollo Web", "Fullstack", "React", "Next.js", "JavaScript", "Portfolio", "Celina Fioretti"],
  authors: [{ name: "Celina Fioretti" }],
  creator: "Celina Fioretti",
  openGraph: {
    title: "Mi Portfolio CF | Celina Fioretti",
    description: "Explora mi trabajo como desarrolladora de software: proyectos, habilidades, experiencia y enfoque en buenas prácticas y seguridad.",
    url: "https://mi-portfolio-cf.vercel.app",
    siteName: "Mi Portfolio CF",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "/img/avatar.jpg",
        width: 800,
        height: 600,
        alt: "Celina Fioretti Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Portfolio CF | Celina Fioretti",
    description: "Explora mi trabajo como desarrolladora de software: proyectos, habilidades, experiencia y enfoque en buenas prácticas y seguridad.",
    images: ["/img/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={roboto.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
