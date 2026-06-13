const tips = [

"Drink at least 8 glasses of water daily.",
"Sleep 7-8 hours every night.",
"Walk at least 5000 steps a day.",
"Wash your hands regularly.",
"Eat more fruits and vegetables.",
"Avoid excessive junk food.",
"Take short breaks while working.",
"Exercise for 30 minutes daily.",
"Reduce sugar intake.",
"Stay hydrated throughout the day."

];

function showTip(){

let random =
Math.floor(Math.random() * tips.length);

document.getElementById("tipText")
.innerHTML =
tips[random];

}

showTip();