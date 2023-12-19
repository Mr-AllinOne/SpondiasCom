import React from 'react'
import brands from '../../content/brands.json'

const Brands = () => {
    return (
        <div className='mx-20 mb-2 '>

            <h1 className='text-center text-[#469BE0] text-[48px] font-[600]' >Brands we Serve</h1>
            <div className='grid grid-cols-5 gap-2 px-2  border-1'>
                {brands.map((br, i) => (
                    <div key={br.id}>
                        <div className='mb-2 flex flex-row justify-center items-center ' >
                            <img src={`./clinet/Brands/${br.image}`} className='h-[150px] w-[280px]' />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default Brands
