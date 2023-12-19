import React from 'react'

function CargoShiping() {
    return (
        <>

            <div className="mx-[80px]  mt-10 flex flex-row flex-1  items-center px-5 py-4 pr-2 gap-4">
                <div className="flex flex-col px-2 w-[60%] gap-2">
                    <div className='flex mx-5 space-x-2  font-semibold'>
                        <span className='text-4xl tracking-wide'>CARGO</span>
                        <spn className='text-4xl font-semibold text-[#4fa1f4] px-2'>SHIPPING</spn>
                    </div>
                    <div className="text-start w-[550px] ">
                        <p className='text-[18px]  tracking-normal leading-[30px] mt-6 px-2 '>
                            A shipping management system is a software solution that helps streamline
                            shipping procedures — from order processing, packaging,
                            optimal route planning, shipping, and shipment tracking to shipping cost calculation.
                        </p>
                    </div>
                </div>

                <div className="h-[255px] w-[350px] rounded-lg flex justify-center items-center" >
                    <img src="./images/Logistic/text.png" alt="text Logisticas" className="h-[250px] w-[250px] py-2 px-2" />
                </div>
            </div>


        </>
    )
}

export default CargoShiping
