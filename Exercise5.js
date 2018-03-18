
/*
Write a JavaScript function that accepts two parameters:
one being an array of integers, and the other being a number.
The function should return true or false depending on whether the number exists in the array.
*/



var ArrNum = [1,2,3,4,5];
var number = prompt ("Enter number");

var inArr = function(arr,num)
{
    var temp = false;
    for(var i = 0; i < arr.length; i++)
    {
        if(num == arr[i])
        {
            temp = true;
            break;
        }
    }
    return temp;
}

var acc = inArr(ArrNum,number);
if (acc == true)
    console.log(true + " ,the number exists in the array");
else
    console.log(false + " ,the number NOT exists in the array");