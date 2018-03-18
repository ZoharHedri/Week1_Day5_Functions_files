

/*
Write a C++ function (just kidding, use JavaScript) that accepts two parameters:
one being an array of integers, and the other being a number.
The function should print all the numbers from the array that are smaller than the number
that was passed in.
*/


var ArrNum = [1,5,3,2,4];
var number = prompt ("Enter number");

var printSmaller = function(arr,num)
{
    arr.sort();
    
    for(var i = 0; i < arr.length; i++)
    {
        if(num > arr[i])
        {
            console.log(arr[i])
        }
    }
}

var acc = printSmaller(ArrNum,number);