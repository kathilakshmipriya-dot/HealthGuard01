function calculateBMI() {

let height = document.getElementById("height").value;
let weight = document.getElementById("weight").value;

if(height === "" || weight === ""){

document.getElementById("result").innerHTML =
"⚠ Please enter height and weight";

return;

}

let bmi = weight / ((height / 100) * (height / 100));

document.getElementById("result").innerHTML =
"Your BMI: " + bmi.toFixed(1);

localStorage.setItem("bmi", bmi.toFixed(1));

let status = "";

if(bmi < 18.5){
status = "⚠ Underweight";
}
else if(bmi < 25){
status = "✅ Normal Weight";
}
else if(bmi < 30){
status = "⚠ Overweight";
}
else{
status = "❌ Obese";
}

document.getElementById("status").innerHTML = status;

}