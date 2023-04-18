const Timeconverter = ({time}) => {
  const epochTime = time
  const date = new Date(epochTime * 1000)
  const hours = date.getUTCHours()
  const minutes = date.getUTCMinutes()
  return `${hours}: ${minutes}`
}

export default Timeconverter
