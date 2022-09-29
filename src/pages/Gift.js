import React from 'react'
const gift =new URL("../gift.png", import.meta.url)
function Gift() {
  return (
    <>
    
    <div ><br></br>
     <h1 style={{textAlign: "center"}}> Certificate Awarded</h1><br></br>

    <img style={{ maxWidth: "100%"}} src={gift}/>
    </div>
    
    
    </>
  )
}

export default Gift