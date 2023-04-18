const Windspeed = ({speed = 0}) => {
    let temp = 3.6;
    const kmph = Math.round(speed * temp)
  return kmph
}

export default Windspeed
