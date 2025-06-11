import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {

    // const [data,setData] = useState([])
    // useEffect(() => {

    // fetch('https://api.github.com/users/pratyushpanwar')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    //     setData(data)
    // })

    // },[])
    const data = useLoaderData()
    return (

        <div className='bg-gray-600 p-4 text-3xl text-white text-center'>
            GitHub: {data.followers}
            <img src={data.avatar_url} alt="" className=''/>
        </div>
    )
}

export default GitHub


export const gitHubLoaders = async() => {
    const response = await fetch('https://api.github.com/users/pratyushpanwar')
    return response.json()
}