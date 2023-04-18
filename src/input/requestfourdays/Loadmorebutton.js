import React, { useEffect, useState } from 'react'
import LoadmoreMounting from './LoadmoreMounting'


const Loadmorebutton = ({cityName}) => {
    const [data, setData] = useState()
    const [show, setShow] = useState(false)
    
    const fetchData = async () => {
        await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=994ff34bac1f7e2f790479d311622faf`)
        .then(responce => responce.json())
        .then(res => setData(res))
    }
    useEffect(() => {
        if(!cityName) return 
        const timer = setTimeout(() => {
            fetchData()
        }, 1000);
        return (() => {
            clearTimeout(timer)
        })
    }, [cityName])
    
    useEffect(() => {
        setShow(false)
    }, [data])

    const loadButton = () => {
        setShow(true)
    }
    if(!data) return <h2>loading...</h2>
        
  return (
    <div>
        {show ? <LoadmoreMounting data={data}/> : <button onClick={loadButton}>load more</button>}
    </div>
  )
}

export default Loadmorebutton
