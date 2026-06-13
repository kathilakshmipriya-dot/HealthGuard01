loadMedicines();

function saveMedicine(){

let name =
document.getElementById("medicineName").value;

let time =
document.getElementById("medicineTime").value;

if(name === "" || time === ""){
alert("Please fill all fields");
return;
}

let medicines =
JSON.parse(
localStorage.getItem("medicines")
) || [];

medicines.push({
name:name,
time:time
});

localStorage.setItem(
"medicines",
JSON.stringify(medicines)
);

document.getElementById("medicineName").value = "";
document.getElementById("medicineTime").value = "";

loadMedicines();

}

function loadMedicines(){

let medicines =
JSON.parse(
localStorage.getItem("medicines")
) || [];

let list =
document.getElementById("medicineList");

if(!list) return;

list.innerHTML = "";

medicines.forEach((medicine,index)=>{

list.innerHTML += `
<li class="list-group-item d-flex justify-content-between">

<span>
${medicine.name}
</span>

<span>
${medicine.time}
</span>

</li>
`;

});

}