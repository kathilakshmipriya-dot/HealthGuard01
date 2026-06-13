let water = localStorage.getItem("water");

if(water === null){
water = 0;
}else{
water = parseInt(water);
}

updateUI();

function addWater(){

if(water < 8){
water++;
}

localStorage.setItem("water", water);

updateUI();

}

function resetWater(){

water = 0;

localStorage.setItem("water", water);

updateUI();

}

function updateUI(){

document.getElementById("waterCount")
.innerHTML = water + " / 8 Glasses";

let percent = (water / 8) * 100;

document.getElementById("waterProgress")
.style.width = percent + "%";

document.getElementById("waterProgress")
.innerHTML = percent + "%";

}