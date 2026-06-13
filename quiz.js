let dailyQuestions =
questions
.sort(() => Math.random() - 0.5)
.slice(0,5);

let html = "";

dailyQuestions.forEach((q,index)=>{

html += `
<div class="card p-3 mb-3">
<h5>${index+1}. ${q.question}</h5>

${q.options.map(option => `
<div>
<input type="radio"
name="q${index}"
value="${option}">
${option}
</div>
`).join("")}

</div>
`;

});

document.getElementById("quizContainer")
.innerHTML = html;
function submitQuiz(){

let score = 0;

dailyQuestions.forEach((q,index)=>{

let selected = document.querySelector(
`input[name="q${index}"]:checked`
);

if(selected &&
selected.value === q.answer){

score++;

}

});

document.getElementById("resultCard")
.classList.remove("d-none");

document.getElementById("scoreText")
.innerHTML =
`🎯 Your Score: ${score}/5`;

let badge = "";
let message = "";

if(score === 5){

badge = "🏆 Health Expert";
message = "Excellent! You have strong health knowledge.";

}
else if(score >= 3){

badge = "🥈 Health Learner";
message = "Good job! Keep improving.";

}
else{

badge = "🥉 Beginner";
message = "Keep learning and try again tomorrow.";

}

document.getElementById("badgeText")
.innerHTML = badge;

document.getElementById("messageText")
.innerHTML = message;

}