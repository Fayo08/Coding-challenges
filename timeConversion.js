function timeConversion(s) {
    // Write your code here

  const hr = s.slice(0, 2)
  const newHr = parseInt(hr) + 12

  const min = s.slice(3, 5)
  const sec = s.slice(6, 8)
  const timeofDay = s.slice(8, 11)
  
const newTime = newHr + ":" + min + ":"  + sec 
  console.log(newTime)

}
timeConversion("07:05:45PM")