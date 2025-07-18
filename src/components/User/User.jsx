import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userId} = useParams()
    return (
        <div className='bg-gray-600 p-4 text-3xl text-white'>
            User: {userId}
        </div>
    )
}

export default User
