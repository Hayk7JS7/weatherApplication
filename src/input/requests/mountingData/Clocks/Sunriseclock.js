import React from 'react'

const Sunriseclock = ({data}) => {
    // const calc = data.timezone / 3600
    // const utcOffset = calc
    const sunsetEpochTime = data.sys.sunrise 
    const sunsetDate = new Date(sunsetEpochTime * 1000)    
    sunsetDate.setUTCHours(sunsetDate.getUTCHours() + data.timezone)
    const sunriseTimeString = sunsetDate.toLocaleTimeString()
  return (
    <div>
      {sunriseTimeString}
    </div>
  )
}

export default Sunriseclock