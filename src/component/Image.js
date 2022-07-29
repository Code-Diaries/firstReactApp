import React from 'react'
import data from '../data.json'

const Image = () => {
   
    console.log(data)
  return (
    <div> 
    <div class="photo-part1">
        {data.map(a=>{
            return <img src={a.image}  />
        })}
     </div>
 </div>
  )
}

export default Image