import React from 'react'
import mainPart from '../../../content/mainPart.json'
import MainPart from './MainPart'
const AboutMain = () => {
    return (
        <div className='flex flex-col flex-1 w-full mt-[170px] gap-x-[10px]'>
            {
                mainPart.map((main) => (
                    <MainPart key={main.id} {...main} />
                ))
            }
        </div>
    )
}

export default AboutMain
