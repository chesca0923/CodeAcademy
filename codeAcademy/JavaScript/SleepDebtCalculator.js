/*Sleep Debt Calculator
Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.
*/
function getSleepHours(day){
    day = day.toLowerCase();
     if (day === 'monday') {
       return 17;
     } else if (day === 'tuesday') {
       return 8;
     } else if (day === 'wednesday') {
       return 0;
     }else if (day === 'thursday') {
       return 0;
     }else if (day === 'friday') {
       return 90;
     }else if (day === 'saturday') {
       return 5;
     }else if (day === 'sunday') {
       return 0;
     } else
     return 'Invalid!'
   };
   
   
   const getActualSleepHours = () => 
   getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
   
     
   
   
   function getIdealSleepHours(){
     const idealHours = 8;
     return idealHours * 7;
   };
   
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours();
   
   console.log('You have been sleeping for: ' + getActualSleepHours() + ' hour(s)'); // should print the sum of all sleep hours in the week
    
   console.log('The ideal sleep hours is: ' +   getIdealSleepHours()); // if idealHours is 8, should print 56
   
     if (actualSleepHours === idealSleepHours){
       console.log('You got the perfect amount of sleep.');
     } else if (actualSleepHours > idealSleepHours) {
     console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. You are sleeping too much!'); 
     } else if (actualSleepHours < idealSleepHours)
     console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
     };
     calculateSleepDebt();
   
   