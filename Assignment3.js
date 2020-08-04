//Very Easy
//Question 1:
function minutesToSeconds(minutes){
    return Math.floor(minutes * 60);
}
var minutes1 = minutesToSeconds(5);
console.log(minutesToSeconds(5));
console.log(minutesToSeconds(3));
console.log(minutesToSeconds(2));

//Question 2
function dividesEvenly(x,y)
{
    return(x%y==0)
}
console.log(dividesEvenly(98,7));
console.log(dividesEvenly(85,4));

//Easy
//Question 1:
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}
console.log(char_count('chamber of secrets', 'e'));

//Question 2:
function addup(num)
{
    var sum=0;
    for(var i = 1; i <= num ; i++){
        sum +=i;
    }
    return sum;
}
console.log(addup(4));

//Medium
//Question 1:
function reverseStringWords (sentence) {
    return sentence.split(' ').map(function(word, index) {
      if ((index+1)%3==0) return word.split('').reverse().join('');
      else return word;
    }).join(' ');
  }
  
console.log(reverseStringWords("london is so awesome"));
  
//Question 2:
const allEqual = arr => arr.every(val => val === arr[0]);
console.log(allEqual([1,1,1,1]));
console.log(allEqual([1,5,,9,10]));

//Question 3:
var arr = [7,7,2,3,3,2,4,4,5,5];

    function similar(array){

        var newArray = [];
        newArray.push(array[0]);
        for(var i = 0; i < array.length -1; i++) {
            if(array[i] != array[i + 1]) {
                newArray.push(array[i + 1]);
            }
        }
        console.log(newArray);
    }
    similar(arr);

//Hard Questions
//Question 1:
function realType(value) {
    switch (typeof (value)) {
        case 'object':
            if (value instanceof Array)
                return 'Array';
            if (value instanceof Date)
                return 'Date';
            if (value instanceof RegExp)
                return 'regexp';
            if (value instanceof String)
                return 'String';
            if (value instanceof Number)
                return 'Number';
            else if (value === null)
                return "null";
            return 'object';
            // valueect literals
        default:
            return typeof (value);
    }
}
console.log(typeof 12);





