import React from 'react'
import Banner from '../components/Banner'
import { useState } from 'react';

const Home = () =>{
  
  const[query, setQuery] = useState("") ;
  const handleInputChange = (event) =>{
    setQuery(eventarget.value) ;
  }

   return(
     <div  >
      <Banner query={query} handleInputChange={handleInputChange}/> 
     </div>
   )
}


export default Home 