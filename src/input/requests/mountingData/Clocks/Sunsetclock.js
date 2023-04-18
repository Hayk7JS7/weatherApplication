import React from 'react'


const Sunsetclock = ({data}) => {
  const calc = data.timezone / 3600
  const utcOffset = calc
  const sunsetEpochTime = data.sys.sunset 
  const sunsetDate = new Date(sunsetEpochTime * 1000)    
  sunsetDate.setUTCHours(sunsetDate.getUTCHours() + utcOffset)
  const sunsetTimeString = sunsetDate.toLocaleTimeString()
  return (
    <div>
        {sunsetTimeString}
    </div>
  )
}

export default Sunsetclock
