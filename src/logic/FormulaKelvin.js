const Formulakelvin = ({number = 273}) => {
    let temp = 273.15;
    const celsius = Math.round(number - temp)
  return celsius
}

export default Formulakelvin
