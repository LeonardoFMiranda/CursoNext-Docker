'use client' // Error components must be Client Components

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image
        src={'/img/erro 400_desktop.png'}
        alt={`Imagem de error`}
        width={656}
        height={367}
      />
      <h2 style={{ color: '#81ff89' }}>Opa! Um erro ocorreu</h2>
      <span style={{ color: '#a5a7a6' }}>Não conseguimos carregar a página, volte para seguir navegando.</span>
      <Link href={`/`} style={{ color: '#7ba580', textDecoration: 'underline' }}>Voltar ao feed</Link>
    </div>
  )
}