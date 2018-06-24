

/*Time variable recording the number of milliseconds past since start of the chrono */
var numberms=0;

/* setInterval method ID*/
var runningChronoInterval;

/* boolean checking if loop is running */
var isChronoRunning=false;

/* Initialization: set the number of milliseconds to 0 and display on screen */
function init() {
    numberms = 0;
    formatAndDisplay(numberms);
}

/*  Starting our loop [including storing ID] 
 In the 'loop' : incrementing our time variable and asking for display on screen
 
 intervalms: number of milliseconds indenting the chrono  */
function start(intervalms) {
    //Checking we do not have already one loop running
    if (!isChronoRunning) {
        isChronoRunning=true;
        runningChronoInterval = setInterval(function() {
            numberms += intervalms;
            formatAndDisplay(numberms);

        }, intervalms);
    }
}

/* Stopping our loop*/
function stop() {
    clearInterval(runningChronoInterval);
    isChronoRunning=false;
}

/* Resetting: stopping the loop and inilization of data */
function reset() {
    stop();
    init();
}

/* Format the number of milliseconds as desired and displaying on screen */
function formatAndDisplay(numberOfMs) {
    
    //24 hours already past, rather than adding another modulus calculation (as we do not display days), set time to 0
    if (numberOfMs==86400000){ //8640000 = 24 * 60 * 60 * 1000
        numberOfMs=0;
    }
    
    var nbrHours=Math.floor(numberOfMs/3600000); //3600000 = 1 hour
    var nbrMin=Math.floor((numberOfMs-nbrHours*3600000)/60000); // Take off the hours to get the minutes
    var nbrSec=Math.floor((numberOfMs-nbrHours*3600000-nbrMin*60000)/1000); //// Take off the hours and minutes to and get the seconds
    
    var timeRepresentation=doubleDigit(nbrHours) + ':' + doubleDigit(nbrMin) + ':' + doubleDigit(nbrSec);
    
    document.getElementById("chrono").innerHTML = timeRepresentation;
    
}

/* Helper function to build double digit numbers */
function doubleDigit(nbr){
    return (nbr>9? nbr.toString():'0' + nbr.toString());
}

/* Initalization*/   
init();
