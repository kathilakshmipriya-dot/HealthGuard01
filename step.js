let steps =
parseInt(
localStorage.getItem("steps")
) || 0;

updateSteps();

function addSteps(count){

steps += count;

localStorage.setItem(
"steps",
steps
);

updateSteps();

}

function resetSteps(){

steps = 0;

localStorage.setItem(
"steps",
0
);

updateSteps();

}

function updateSteps(){

document.getElementById("stepCount")
.innerHTML =
steps + " / 5000 Steps";

let percent =
Math.min((steps / 5000) * 100, 100);

document.getElementById("stepProgress")
.style.width =
percent + "%";

document.getElementById("stepProgress")
.innerHTML =
Math.round(percent) + "%";

}