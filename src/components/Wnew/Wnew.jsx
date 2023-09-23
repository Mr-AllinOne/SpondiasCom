import React from 'react'

const Wnew = ({ id, image, title, description, }) => {
  return (
    <div className='bg-[#C7E4FC26]
     shadow-lg
    mx-2 py-2 h-[468px] ' >
      <div className='flex flex-col items-center  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;' >
        <div className='h-[238px] w-[344px]'
          style={{backgroundImage:`url(./Wnew/${image})`}}
        >
        </div>
        <h2 className='text-2xl my-4 font-semibold'>{title}</h2>
        <div>
          <p className='text-center mx-6'>{description}</p>
        </div>
        
        <button className='bg-[#29A9E2] rounded-lg font-medium px-6 tracking-wide py-2 my-4 '>Read this Artical</button>


      </div>

    </div>
  )
}

export default Wnew