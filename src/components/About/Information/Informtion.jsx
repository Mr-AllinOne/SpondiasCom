import React from 'react'
import UserForm from './UserForm'
import UserInforMap from './UserInforMap'

const Informtion = () => {
    return (
        <div className='flex flex-row flex-1 mx-20 my-4 rounded-xl'>
            <UserInforMap />
            <UserForm />

        </div>
    )
}

export default Informtion
