function showTime(){

    let date = new Date();

    document.getElementById("time").innerHTML =
    date.toLocaleString();
}

setInterval(showTime,1000);


function refreshData(){

    document.getElementById("studentsCount").innerHTML =
    Math.floor(Math.random()*2000);

    document.getElementById("examCount").innerHTML =
    Math.floor(Math.random()*50);

    document.getElementById("pendingCount").innerHTML =
    Math.floor(Math.random()*20);
}


function showSection(section){

    document.getElementById("dashboard").style.display = "none";

    document.getElementById("students").style.display = "none";

    document.getElementById("settings").style.display = "none";

    document.getElementById(section).style.display = "block";

    document.getElementById("pageTitle").innerHTML =
    section.charAt(0).toUpperCase() + section.slice(1);
}


document.getElementById("dashboard").style.display = "block";

