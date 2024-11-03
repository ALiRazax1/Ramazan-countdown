let currentDate = new Date().getTime()
let ramzanDate = new Date("February 28, 2025").getTime()
let currentDateHours = Math.round(currentDate/(1000 *60 *60))
let ramzanDateHours = Math.round(ramzanDate/(1000 *60 *60))
let currentDateDays = Math.round(currentDate/(1000 * 60 * 60 *24))
let ramzanDateDays = Math.round(ramzanDate/(1000 * 60 * 60 *24))
let currentDateMonths = Math.round(currentDate/(1000 * 60 * 60 *24 *30))
let ramzanDateMonths = Math.round(ramzanDate/(1000 * 60 * 60 *24 *30))
document.getElementById("days").innerText =ramzanDateDays - currentDateDays
document.getElementById("months").innerText =ramzanDateMonths - currentDateMonths
document.getElementById("hours").innerText =ramzanDateHours - currentDateHours

