const Dayconventer = ({date}) => {
    if(date === undefined || false || null) return 
    const day = new Date(date)
    const weekday = day.getDay()
    let certainDay = weekday === 0 ? "sunday" : weekday === 1 ? "monday" : weekday === 2 ? "tuesday" : weekday === 3 ? "wednesday" : weekday === 4 ? "thursday" : weekday === 5 ? "friday" : "saturday"
    return `${certainDay} ${day.getDate()}`
}

export default Dayconventer
