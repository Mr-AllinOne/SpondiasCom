
import { AiFillCaretRight } from "react-icons/ai";
import { PiCaretRightBold } from "react-icons/pi"
const BankApp = () => {
    return (
        <div className="mb-6">
            <div className="mx-10  mt-10 flex flex-row flex-1 mr-2 items-center px-5 py-4 pr-2">
                <div className="flex flex-col px-2">

                    <div className="flex flex-row items-center w-[50%] ">
                        <span className="text-[46px] text-[#469BE0] font-semibold">Bank App</span>
                        <PiCaretRightBold size={30} className="text-[#469BE0]" />
                        <span className="text-[36px] font-semibold ">SPAY</span>
                    </div>
                    <div className="text-start w-[80%] ">
                        <p className='mr-10  tracking-normal leading-[20px]  '>
                            Mobile banking refers to the use of a mobile device to carry out financial
                            transactions. The service is provided by some financial institutions, especially banks.
                            Mobile banking enables clients and users to carry out
                            various transactions, which may vary depending on the institution.
                        </p>
                    </div>
                </div>

                <div className="h-[255px] w-[50%]  w-full rounded-lg flex justify-center" >
                    <img src="./images/bank.jpg" alt="bankSpan" className="h-[255px] w-[255px]" />
                </div>
            </div>

            <div className="mx-20 mt-10  mb-4">
                <img src='./images/fintech.png' alt='fintech' className='w-[1070px] h-[306px]' />
            </div>

            <div className="flex flex-row flex-1 items-center mx-20 h-[617px] w-[1067px]">
                <div className="flex flex-col px-2">
                    <div className=" leading-10 pl-2">
                        <p className="font-semibold text-[43px] ">DOWLOAD APP &</p>
                        <p className="font-mdbold text-[26px] ">GET THE VOUCHER</p>
                    </div>
                    <p className="text-[#888888] pt-2 text-[36px] font-regular">
                        Get 30% off for first
                        <br />
                        transaction using
                        <br />
                        Rondovision mobile
                        app for now
                    </p>
                    <img src="./images/google.jpeg" alt="goole" className="h-[161px] w-[435px] " />
                </div>

                <div>
                    <img src="./images/mobileBank.jpeg" alt="app" className="h-[517px] w-[500px]" />
                </div>
            </div>
        </div>
    )
}

export default BankApp;