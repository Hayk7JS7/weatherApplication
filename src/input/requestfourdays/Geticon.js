import React from 'react'

const Geticon = ({iconCode}) => {
    if(iconCode){
      return <img key={Math.random()} src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`} alt='loading'/>
    }
    return 
  }

export default Geticon