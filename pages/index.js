import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'

const index = (props) => {
  
  return (
    <>
      <Header/>
      <h1>Hello next 2 {props.nome}</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </>
  )
}

index.getInitialProps = () => {
  console.log('Logando pagina index')
  return {
    nome: 'Igor'
  }
}

export default index
