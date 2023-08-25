import React from 'react'
import { Header } from '../Header/Header'
import { Section } from '../Section/Section'
// import {Products} from './components/Products/Products'
import { Cards } from '../Cards/Cards'
import  Footer  from '../Footer/Footer'



export const Home = () => {
  return (
    <div>
     <Header/>
     <Section/>
     {/* <Cards/> */}
     <Footer/>
     {/* <Products/> */}
    </div>
  )
}
