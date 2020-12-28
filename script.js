let seconds=0;
let minutes=0;
let hours=0;
let microseconds=0;
let displayseconds = 0;
let displayminutes = 0;
let displayhours = 0;
let interval;
let status = "stopped";
//selectors
let display = document.querySelector(".display");
let microsec = document.querySelector(".microsec");
let startstop = document.querySelector(".startstop");
let reset = document.querySelector(".reset");
//creating conditions to increment parameters
function stopwatch() {
    microseconds++;
    if(microseconds/250==1){
        microseconds = 0;
        seconds++;
    }
    if(seconds/60==1) {
        seconds = 0;
        minutes++;
    }
    if(minutes/60==1) {
        minutes = 0;
        hours++;
    }
    if(seconds<10) {
        displayseconds = 0 + seconds.toString();
    } else {
        displayseconds = seconds.toString();
    }
    if(minutes<10) {
        displayminutes = 0 + minutes.toString();
    } else {
        displayminutes = minutes.toString();
    }
    if(hours<10) {
        displayhours = 0 + hours.toString();
    } else {
        displayhours = hours.toString();
    }  
    microsec.innerText = microseconds;
    display.innerText = displayhours+':'+displayminutes+':'+displayseconds;
}
//function for start and stop button
startstop.addEventListener('click', function startstop() {
    if(status=="stopped") {
        document.querySelector(".startstop").innerText = "stop";
        interval = window.setInterval(stopwatch, 1);
        document.querySelector(".startstop").style.backgroundColor="red";
        status="started";
        } else {    
        document.querySelector(".startstop").innerText = "start";
        document.querySelector(".startstop").style.backgroundColor="#005500";
        window.clearInterval(interval);
        status="stopped";
        }
    });
    //function for reset button
reset.addEventListener('click', function reset(){
        window.clearInterval(interval);
        microseconds = 0;
        seconds = 0;
        minutes = 0;
        hours = 0;
        microsec.innerText = "00";
        display.innerText = "00:00:00";
        startstop.innerText= "start";
        document.querySelector(".startstop").style.backgroundColor="#005500";
        status="stopped";
});