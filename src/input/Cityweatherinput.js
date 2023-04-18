import React, { useState } from 'react'
import Requests from './requests/Requests'

const Cityweatherinput = () => {
    let [requestName, setrequestName] = useState("")
  return (
    <div>
        <input type="text" placeholder='enter your city/town' value={requestName} onChange={(e) => setrequestName(e.target.value)}/>
        {requestName && <Requests requestname={requestName}/>}

    </div>
  )
}

export default Cityweatherinput