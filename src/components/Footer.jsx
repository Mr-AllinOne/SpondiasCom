import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
      <div className='bg-red-100 w-auto h-96 mx-10 rounded-t-lg text-white '
          style={{ backgroundImage:'url(./images/footer.png)'}}
      >
          <div className='text-white flex justify-evenly items-center py-2'>
              <img src='./logos/logo_page.png' />
              <h2 className='font-semibold tracking-wide'>Who we are</h2>
              <h2 className='font-semibold tracking-wide'>Contact Us</h2>
          </div>
          
          <div className='ml-[200px] mr-20 mt-6 space-x-[110px] grid grid-cols-2 sm:grid-cols-3 border-b-2 pb-2 '>
              <div className=''>
                  <p>
                      Spondias is a business committed to providing personalized
                      service and specializing in corporate training and project
                      consulting. In order to provide you with what we believe to
                      be the greatest answer for your needs, we believe it is crucial to
                      take the time to carefully consider your unique requirements.
                  </p>
              </div>
              <div className=''>
                  <ul className='flex flex-col space-y-4 '>
                      <Link to='#'>About Spondias</Link>
                      <Link to='#' >Contact Us</Link>
                      <Link to='#' >News</Link>
                  </ul>
              </div>
              <div className=''>
                     <ul className='flex flex-col space-y-4 '>
                      <Link to='#'>Email</Link>
                      <Link to='#'>LinkedIn</Link>
                      <Link to='#'>Instgram</Link>
                      <Link to='#'>Twitter</Link>
                  </ul>
              </div>
          </div>

          <div className='flex justify-between ml-[200px] mr-20 mt-2'>
              <p>© 2023 Copyright Spondias. All Reserved</p>
              <div className='border-r-2'>
                  <p className='px-2'>Privacy Policy</p>
              </div>
          </div>

          
    </div>
  )
}

export default Footer