import React from 'react'
import WnewData from '../../content/wNew.json'
import Wnew from './Wnew'

const Wnews = () => {
  return (
    <>
      <div className='flex mx-20 space-x-2  font-semibold'>
        <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>what's</spn>
        <span className='text-4xl tracking-wide'>New</span>
      </div>
    <div className='flex flex-row mx-8 my-4 py-2'>
      {
        WnewData.map(wNew => (
          <Wnew key={wNew.id} {...wNew} />
        ))
      }

    </div>
    </>
  )
}

export default Wnews

  // < div className = ' h-40 ml-20 my-2' >
  //   #dbedfb
  //   < div className = 'rounded-bl-[50px] bg-contain h-20 w-20 p-20 mx-2'
  //     // style={{ backgroundImage:"url(./images/amico.png"}}  
  //     >
  //   {
  //     WnewData.map(wNews => (
  //       <div key={wNews} className='bg-red-300'>
  //         <img src={`./Wnew/${wNews.image}`} />
  //       </div>
  //     ))
  //   }

  //     </ >
  //   </div >
