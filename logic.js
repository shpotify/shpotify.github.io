/*var excuses = [
    'I\'m sick',
    'I have a doctors appointment today',
    'I have a dentist appointment today',
    'I have food poisoning',
    'I\'m not feeling well',
    'I\'m having furniture delivered today',
    'I\'m having car troubles',
    'I have a family emergency',
    'I have a vet appointment',
    'I have a sick kid',
    'My water pipes broke',
    'My basement is flooded',
    
    
]

function newExcuse(){
var randomNumber = Math.floor(Math.random() * (excuses.length));
     document.getElementById('display').innerHTML = excuses[randomNumber];

}
*/
{
var initialDate = new Date(2018, 02, 15); // Attention: month is zero-based
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSince = Math.floor(difference / millisecondsPerDay);
alert(daysSince); // 80
}
    
