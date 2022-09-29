import React from 'react'
const map =new URL("../map.png", import.meta.url)

function StoreLocation() {
  return (
    <>
    <div class="block-map block">
      <div class="block-map__body">
        <iframe
          src="https://maps.google.com/maps?width=802&amp;height=400&amp;hl=en&amp;q=Lothian Road, Kashmeri Gate, Delhi, 110006&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    
        </>
  )
}

export default StoreLocation