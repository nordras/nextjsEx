import React, { Component } from 'react'
import Link from 'next/link'
import Header from '../components/Header'

export default class About extends Component {
  render() {
    return (
      <>
        <Header/>
        Testando o about
        <Link href="/">
          <a>Home Page</a>
        </Link>
      </>
    )
  }
}
