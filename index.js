const random = Math.floor(Math.random() *1000);
// console.log (random);
const earlyRegister = false;
const runnerAge = 18;
let raceNumber = random;
if (runnerAge >= 18 && earlyRegister === true){
    
    console.log( 'you will race at 9:30 am, with your race mumber: ' + raceNumber);
} 
else if (runnerAge >= 18 && earlyRegister !== true ){
    console.log('you race is at 11:00 am, with the race number: ' + raceNumber);
} else if (runnerAge < 18) {
    console.log('Youth registrant is at 12:30 pm, your race number: ' + raceNumber);
} else {
    console.log('you should go check our registration desk');
}
