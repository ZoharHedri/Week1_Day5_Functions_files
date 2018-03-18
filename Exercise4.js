
//Write a JavaScript function that accepts an array of integers as a parameter
//and returns the average of all its items.


//var ArrNum = [];
//ArrNum = prompt ("Enter numberes");
var ArrNum = [1,2,3,4,5];

var avg = function(arr){

    var sum = 0;
    var count = 0;
    for (var i = 0; i < arr.length; i++)
    {
        sum += arr[i];
        count++;
    }

    sum = sum / count;
    return sum;

}

var ArrAvg = avg(ArrNum);
console.log(ArrAvg);