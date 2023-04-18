import React from 'react'
import {useState} from 'react'
import { useEffect } from 'react'

const Clock = ({data}) => {
  const [hourhand, setHourhand] = useState(() => {
    const styles = {
      '--rotation': 360
    }
    return styles
  })
  const [minuteshand, setminuteshand] = useState(() => {
    const styles = {
      '--rotation': 360
    }
    return styles
  })
  const [sechand, setSecchand] = useState(() => {
    const styles = {
      '--rotation': 360
    }
    return styles
  })


  const setClock = () => {
    const calc = data.timezone / 3600
    const now = new Date();
    const utcTime = now.getTime();
    const timeZoneOffset = calc * 60 * 60 * 1000;
    const currentUTC = utcTime + timeZoneOffset;
    const date = new Date(currentUTC);

    setSecchand(() => {
      const secondsRatio = date.getUTCSeconds() / 60
      const styles = {
        '--rotation': secondsRatio * 360
      }
      return styles
    })

    setminuteshand(() => {
      const minutesRatio = ((date.getUTCSeconds() / 60) + date.getUTCMinutes()) / 60
      const styles = {
        '--rotation': minutesRatio * 360
      }
      return styles
    })

    setHourhand(() => {
      const hourHand = ((date.getUTCMinutes() / 60) + date.getUTCHours()) / 12
      const styles = {
        '--rotation': hourHand * 360
      }
      return styles
    })
  }

useEffect(() => {
  const timer = setInterval(setClock, 1000);
  return (() => {
    clearInterval(timer)
  })
}, [data])

  return (
    <div className='clocks'>
      <div className='timezone'>
              <div className='hand hour' style={hourhand}></div>
              <div className='hand minute'style={minuteshand}></div>
              <div className='hand second' style={sechand}></div>
              <div className='number number1'>1</div>            
              <div className='number number2'>2</div>
              <div className='number number3'>3</div>
              <div className='number number4'>4</div>
              <div className='number number5'>5</div>
              <div className='number number6'>6</div>
              <div className='number number7'>7</div>
              <div className='number number8'>8</div>             
              <div className='number number9'>9</div>
              <div className='number number10'>10</div>
              <div className='number number11'>11</div>
              <div className='number number12'>12</div>
          </div>
    </div>
  )
}

export default Clock