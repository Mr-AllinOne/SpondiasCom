import React from 'react'

const WhatCrm = () => {
    return (
        <div className="mx-20  mt-10 flex flex-row flex-1  items-center px-5 py-4 pr-2 gap-4 mb-10">
            <div className="h-[350px] w-[50%] rounded-lg flex justify-center items-center" >
                <img src="./images/crm/crmText.png" alt="crm" className="h-[350px] w-[350px]" />
            </div>
            <div className="flex flex-col px-2 w-[50%] gap-2">
                <div className="text-start w-[80%] ">
                    <p className='text-[20px]  tracking-normal leading-[30px] mt-6 px-2 '>
                        CRM software is one of the most important sales tools in sales reps' arsenal.
                        It is more than a contact management system.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WhatCrm
