function unix(timestamp, type) {
  const milliseconds = timestamp * 1000
  const dateObj = new Date(milliseconds)
  let result = 
    type == 'weekday' ? dateObj.toLocaleString("ru-Ru", {weekday: 'long'}):  
    type == 'month' ?  dateObj.toLocaleString("ru-Ru", {month: 'long'}): 
    type == 'day' ? dateObj.toLocaleString("ru-Ru", {day: 'numeric'}):  
    type == 'hour' ? dateObj.toLocaleString("ru-Ru", {hour: 'numeric'}):  
    type == 'minute' ? dateObj.toLocaleString("ru-Ru", {minute: 'numeric'}): '';
  return result 
}
export default unix