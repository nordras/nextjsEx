import React from 'react'
import Link from 'next/link'
import Header from '../components/Header'
import axios from 'axios'

const index = (props) => {
  
  return (
    <>
      <Header/>
      <h1>Hello next 2</h1>
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <h4>Dados do mockApi</h4>
      <section>
        {/* {JSON.stringify(props.data)}} */}
        {
          props.data.map(item => {
            return (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <img src={item.avatar}/>
            </div>)
          })
        }
      </section>
    </>
  )
}

index.getInitialProps = async () => {
  console.log('Logando pagina index')
  const api = 'https://5da4daf857f48b0014fba3e4.mockapi.io/v1'
  const data = await axios.get(`${api}/user`)
  return {
    data: data.data
  }
}

export default index
