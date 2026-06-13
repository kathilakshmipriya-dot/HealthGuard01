function saveHygiene(){

let checks =
document.querySelectorAll(".hygiene");

let completed = 0;

checks.forEach(item => {

if(item.checked){
completed++;
}

});

let score =
Math.round((completed / checks.length) * 100);

document.getElementById("hygieneScore")
.innerHTML =
"Score: " + score + "%";

localStorage.setItem(
"hygieneScore",
score
);

}