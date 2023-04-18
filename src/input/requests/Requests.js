import React, { useEffect, useState } from 'react'
import MountingData from './mountingData/MountingData'

const Requests = ({requestname}) => {
    const [data, setData] = useState("")
    const [error, setError] = useState()
    const fetchInfo = {
        url: 'https://api.openweathermap.org/data/2.5/weather?q=',
        key: '&appid=8d96b2ac78a4706f6ab0df81a16cb24a'
    }

    const fetchData = async () => {
        await fetch(`${fetchInfo.url}${requestname}${fetchInfo.key}`)
                .then(responce => responce.json())
                .then(result => {
                    if(result.cod >= 400){
                        setError(result)
                    } else {
                        setError(undefined)
                        setData(result)
                    }
                })
    }

    useEffect(() => {
        if(requestname == "") return 
        const optimizationRequest = setTimeout(() => {
                fetchData()
        }, 2000);
        return (() => {
            clearTimeout(optimizationRequest)
        })
    }, [requestname])
    if(!error && !data) return <h2>loading...</h2>
  return (
    <>
        {!error ? <MountingData data={data}/> : <h2>{error.message}</h2>}    
    </>
  )
}

export default Requests
