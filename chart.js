const ctx =
document.getElementById('healthChart');

new Chart(ctx, {

type: 'bar',

data: {

labels: [
'Water',
'Sleep',
'Hygiene',
'Steps'
],

datasets: [{
label: 'Health progress',

data: [

parseInt(localStorage.getItem("water")) || 0,

parseInt(localStorage.getItem("sleepHours")) || 0,

parseInt(localStorage.getItem("hygieneScore")) || 0,

Math.round(
(parseInt(localStorage.getItem("steps")) || 0)
/ 100
)

],

backgroundColor: [

'#0d6efd',
'#198754',
'#ffc107',
'#dc3545'

]

}]

},

options: {
    responsive: true,
    maintainAspectRatio: false
}

});
