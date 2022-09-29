import React from 'react'
const brand =new URL("../brand.png", import.meta.url)

function Brand() {
  return (
    <div>
    <img style={{ height:'100%',
    width:'100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',}} src={brand}/>
    
    </div>
  )
}

export default Brand