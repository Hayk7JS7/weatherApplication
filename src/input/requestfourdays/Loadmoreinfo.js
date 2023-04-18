import React, {useContext} from 'react'
import { Datacontext } from './LoadmoreMounting'
import './LoadDetailed.css';
import Graphicmounting from './Graphicmounting';

const Loadmoreinfo = ({info, check}) => {
    const arrData = useContext(Datacontext)
    const dates = info.substring(0, 10)
    const filtArr = arrData.filter(r => r[0]?.data?.dt_txt?.substring(0, 10) === dates)


  const filtDate = filtArr[0].map((r, i) => {
    if(i === 0){
      return r?.data?.dt_txt?.substring(10, 16)
    }
     return r?.dt_txt?.substring(10, 16)
  })
  const filtTemp = filtArr[0].map((r, i) => {
    if(i === 0){
      return Math.round(r?.data?.main?.temp - 273.15)
    }
     return Math.round(r?.main?.temp - 273.15)
  })

  const filtHum = filtArr[0].map((r, i) => {
    if(i === 0){
      return r?.data?.main?.humidity
    }
     return r?.main?.humidity
  })
  return (
    <div>
      <Graphicmounting filtDate={filtDate} filtTemp={check == "temperature" ? filtTemp : filtHum} sign={check}/>

    </div>
  )
}

export default Loadmoreinfo