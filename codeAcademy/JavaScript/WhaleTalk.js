/*Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!
*/
//const input = 'turpentine and turtles';
//const input = 'Hi, Human';
const input = 'a whale of a deal!'
const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];
for (i = 0; i < input.length; i++)
{
  if (input[i]=== 'e'){
  resultArray.push(input[i]);
}
 if (input[i]=== 'u'){
  resultArray.push(input[i]);
}
for(j = 0; j < vowels.length; j++){
 //onsole.log('j is ' + j);
if (input[i] === vowels[j]){
resultArray.push(input[i]);
}
}
}

console.log(resultArray);
console.log(resultArray.join(' ').toUpperCase());
