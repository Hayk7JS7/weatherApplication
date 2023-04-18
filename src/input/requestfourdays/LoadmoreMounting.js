import React, { useState, useEffect } from 'react'
import './LoadmoreMounting.css';
import Dayconventer from './dayConventer';
import Geticon from './Geticon';
import Loadmoreinfo from './Loadmoreinfo';

export const Datacontext = React.createContext()

const LoadmoreMounting = ({data}) => {
  const [show, setShow] = useState(false)
  const [arr, setArr] = useState([])
  const [infoTemp, setInfoTemp] = useState()
  const [infoHumid, setInfoHumid] = useState()
  const list = data.list


    const sortedWeatherData = list.sort((a, b) => {
      return a.dt - b.dt;
    })
    const getWeatherData = () => {
        return sortedWeatherData.reduce((acc, data) => {
        const date = new Date(data.dt_txt).toLocaleDateString()
  
        const index = acc.findIndex((day) => day[0].date === date)
  
        if (index !== -1) {
          acc[index].push(data)
        } else {
          acc.push([{ date, data }])
        }
        return acc
        }, [])
      }

  useEffect(() => {
    setArr(getWeatherData())
  }, [data])

const handleClickForWeather = (value) => {
  setInfoTemp(value)
  setInfoHumid(null)
  setShow(true)
}

const handleClickForHumidity = (value) => {
  setInfoHumid(value)
  setInfoTemp(null)
  setShow(true)
}

  return (
    <div className='load_more'>
        <h3>More information</h3>
      <div className='container_load_more'>
          {arr.map((array, i) => {
            return (
            <div className='seperate_childs_day_1' key={i}>
              <div>
                {array.map(r => {
                  return <div key={Math.random()}>
                    <p>{<Dayconventer date={r?.data?.dt_txt} key={Math.random()}/>}</p>
                    <p onClick={() => handleClickForHumidity(r?.data?.dt_txt)}>{<Geticon iconCode={r?.data?.weather?.[0]?.icon} key={Math.random()}/>}</p>
                    <p>{r?.data?.weather?.[0]?.description}</p>
                    <p onClick={() => handleClickForWeather(r?.data?.dt_txt)}>{r?.data?.main?.temp && `${Math.round(r?.data?.main?.temp - 273.15)}°C`}</p>
                  </div>
                })}
              </div>
            </div>
            )
          })}
      </div>
      <Datacontext.Provider value={arr}>
      {show && <Loadmoreinfo info={infoTemp ? infoTemp : infoHumid} check={infoTemp ? "temperature" : "humidity"}/>}
      </Datacontext.Provider>
    </div>
  )
}

export default LoadmoreMounting