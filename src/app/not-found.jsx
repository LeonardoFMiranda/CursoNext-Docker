import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function NotFound() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Image src={'/img/404.png'}
        width={656}
        height={367}
      />
      <h2 style={{ color: `#81ff89` }}>Opa! Página não encontrada</h2>
      <span style={{ color: `#a5a6a7` }}>Você pode voltar ao feed e continuar buscando porjetos incriveis</span>
      <Link href={`/`}>Voltar ao feed</Link>
    </div>
  )
}

export default NotFound
