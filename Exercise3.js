
/*
Write a JavaScript function called isPrime that accepts a number as a parameter
and checks if the number is prime or not.
Return true if it is prime or false if it is not prime. Don't Google this one ;)
*/

var isPrime = function(num){
    for (var i = 2; i < num; i++)
    {
        var temp = true;
        if ((num % i) == 0)
        {
            temp = false;
            break;
        }
            
    }
    
    return temp;
}

var number = prompt ("Enter number and i will checks if is prime or not");
var Pnum = isPrime(number);
if(Pnum == true)
    console.log(true);
else
    console.log(false);