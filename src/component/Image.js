import React from 'react'
import data from '../data.json'

const Image = () => {
    
  return (
    <div> 
    <div className="photo-part1">
 

        {data.map((a)=>{
          return   <img src={a.image}  />
           
        })}
     </div>
 </div>
  )
}

export default Image