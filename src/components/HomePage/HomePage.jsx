import React, { useEffect, useState } from 'react'
import  data from "../Json/test.json";
import { Link } from 'react-router-dom';
import "../HomePage/HomePage.css"

export default function HomePage() {


  return (

      <div className='test'>
        
      <p><strong>start the test : </strong></p>
      <img src="https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg" alt=""  style={{borderRadius: "20%"}}/>
      <ul className='test-ul'>
        <li><Link to={"easy"} style={{paddingLeft: 13, textDecoration: 'none'}} >easy</Link></li>
        <li><Link to={"medium"} style={{paddingLeft: 13, textDecoration: 'none'}} >medium</Link></li>
        <li><Link to={"hard"} style={{paddingLeft: 13, textDecoration: 'none'}} >hard</Link></li>
      </ul>


    
       </div>
    
  )
}
