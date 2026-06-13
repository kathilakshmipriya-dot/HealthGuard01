let calories =
parseInt(
localStorage.getItem("calories")
) || 0;

updateCalories();

function addCalories(){

let food =
parseInt(
document.getElementById("food").value
);

calories += food;

localStorage.setItem(
"calories",
calories
);

updateCalories();

}

function resetCalories(){

calories = 0;

localStorage.setItem(
"calories",
0
);

updateCalories();

}

function updateCalories(){

document.getElementById("totalCalories")
.innerHTML =
"Total Calories: " + calories;

}