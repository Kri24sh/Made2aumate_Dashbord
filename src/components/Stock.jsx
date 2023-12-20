import React from 'react'

const Stock = ({felds}) => {
  return (
<>
    
{
felds.map((felds)=>(
<div key={felds.id} className= ' md:p-0 p-2 w-full md:h-36 h-28 overflow-hidden border-4 rounded-xl justify-center gap-4 items-center flex flex-col'>
    <div className='  text-xs font-extrabold md:text-2xl'>{felds.Name}</div>
    <div className=' w-full font-bold md:text-xl justify-center flex '>{felds.value}</div>
    </div>
))

}

    
</>



  )
}

export default Stock