

const time=new Date().getTime()
console.log(time)
console.log(typeof(time))
const fiveMinutesLater = time+5 * 60 * 1000
console.log(fiveMinutesLater)
console.log(typeof(fiveMinutesLater))
let diff=5*60*1000
let diff1=fiveMinutesLater-time
if(diff1===diff)
    console.log("idsah")