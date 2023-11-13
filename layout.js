import { Inter } from 'next/font/google'
import './globals.scss'
import Cabecalho from '@/components/Cabecalho'
import Rodape from '@/components/Rodape'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Primeira Aula NEXT',
  description: 'Página para aprender os primeiros passos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Cabecalho/>
        {children}
        <Rodape/>
      </body>
    </html>
  )
}
