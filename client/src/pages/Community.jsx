import React, { useState } from 'react'

const Community = () => {
const [creations, setCreations] = useState();

  return (
    <div className='flex-1 h-full flex flex-col gap-4 p-6'>
      Creations 

      <div className='bg-white h-full w-full rounded-xl overflow-y-scroll' >

      </div>

    </div>
  )
}

export default Community


//3:13:15