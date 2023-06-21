
import React, { useEffect, useState } from 'react'

export default function Results({addPoint,setAddPoint}) {

    console.log(addPoint);

    let massege;
    if({addPoint}>8)
    {
massege="grate!!"
    }
    else if({addPoint}>5 && {addPoint}<8)
    {
      massege="almost good"
    }
    else{
      massege="try agen"
    }
  return (
<div>
      <div><h3>{massege}</h3></div>
    <div> <h1> your Results : {addPoint} / 9 </h1> </div>
</div>
  )
}
