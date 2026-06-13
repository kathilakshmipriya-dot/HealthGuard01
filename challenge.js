const challenge = [

"💧 Drink 8 glasses of water today",
"🚶 Walk 5000 steps",
"😴 Sleep for 8 hours",
"🍎 Eat 2 fruits today",
"🥗 Eat a healthy meal",
"🏃 Exercise for 15 minutes",
"🧘 Meditate for 10 minutes",
"🚰 Avoid soft drinks today",
"🥦 Eat green vegetables",
"📵 Reduce screen time by 1 hour",
"🚴 Cycle for 20 minutes",
"🏊 Swim for 15 minutes",
"🦷 Brush twice today",
"📚 Learn one new health fact",
"❤️ Check your blood pressure",
"💪 Do 20 squats",
"🏋️ Do a short workout",
"🍋 Drink lemon water",
"🚶 Take stairs instead of lift",
"😄 Spend 10 minutes stress-free"

];

function loadChallenge(){

let today =
new Date().getDate();

let challenge =
challenges[today % challenges.length];

document.getElementById("challenge")
.innerHTML = challenge;

}

function completeChallenge() {

    let checked =
    document.querySelectorAll(".challenge:checked").length;

    if(checked < 4){

        document.getElementById("status").innerHTML = `
        <div class="alert alert-warning">
        ⚠ Please complete all challenges first!
        </div>
        `;

        return;
    }

    let completed =
    parseInt(localStorage.getItem("completedChallenges")) || 0;

    completed++;

    localStorage.setItem(
        "completedChallenges",
        completed
    );

    let badge = "No Badge Yet";

    if(completed >= 50){
        badge = "👑 Health Legend";
    }
    else if(completed >= 30){
        badge = "🚶 Walking Champion";
    }
    else if(completed >= 20){
        badge = "💧 Hydration Hero";
    }
    else if(completed >= 10){
        badge = "🥇 Health Expert";
    }
    else if(completed >= 5){
        badge = "🥈 Health Learner";
    }
    else if(completed >= 1){
        badge = "🥉 Beginner Badge";
    }

    document.getElementById("status").innerHTML = `
    <div class="alert alert-success">
    🏆 Challenge Completed Successfully!
    <br>
    Total Challenges Completed: ${completed}
    </div>
    `;

    document.getElementById("badgeResult").innerHTML =
    badge;
}