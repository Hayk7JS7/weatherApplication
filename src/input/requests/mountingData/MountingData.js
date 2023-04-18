import Formulakelvin from '../../../logic/FormulaKelvin'
import './MountingData.css';
import Windspeed from '../../../logic/Windspeed';
import Clock from './Clocks/Clock';
import Sunriseclock from './Clocks/Sunriseclock';
import Sunsetclock from './Clocks/Sunsetclock';
import Loadmorebutton from '../../../input/requestfourdays/Loadmorebutton'
import Visibility from '../../../logic/Visibility'

const MountingData = ({data}) => {
  return (
    <div className='Mount'>
      <div className='overlay'>
      <Clock data={data}/>
        <div className='container'>
          <div className='section__temperature'>
              <div className='item'>
                <h3>{data.name.substring(0, 1).toUpperCase() + data.name.substring(1, Infinity).toLowerCase()}, {data.sys.country}</h3>
              </div>
              <div className='item'>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
              </div>
              <div className='item'>
                <h3>{data.weather[0].description}</h3>
              </div>   
            <div className='item'>
                <h1> <Formulakelvin number={data.main.temp}/>°C</h1>
            </div>
          </div>
          <div className='main-measurements'>
            <div className='items'>
              <p>feels like</p>
              <Formulakelvin number={data.main.feels_like}/>°C
            </div>
            <div className='items'>
              <p>min ↓ </p>
              <Formulakelvin number={data.main.temp_min}/>°C
            </div>
            <div className='items'>
              <p>max ↑ </p>
              <Formulakelvin number={data.main.temp_max}/>°C 
            </div>
          </div>
          <div className='secondary-measurements'>
            <div className='items'>
                <p>humidity</p>
                {data.main.humidity}%
              </div>
              <div className='items'>
                <p>pressure</p>
                {data.main.pressure}hPa
              </div>
              <div className='items'>
                <p>wind speed</p>
                <Windspeed speed={data.wind.speed}/>kmph
              </div>
            </div>
          <div className='time'>
            <div className='clockTime'>
              <p>sunrise</p>
              <Sunriseclock data={data}/>
            </div>
            <div className='clockTime'>
              <p>sunset</p>
              <Sunsetclock data={data}/>
            </div>
            <div className='clockTime'>
              <p>visibility</p>
              <Visibility count={data.visibility}/>km
            </div>
          </div>
          <Loadmorebutton cityName={data.name}/>
          </div>
      </div>
    </div>
  )
}

export default MountingData