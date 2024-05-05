//Filter Function

function filter(arr, callback){
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let output = callback(arr[i]);

        if (output)
        {  
            result.push(arr[i]);
        }  
    }

    return result;
}

function isLowerThan15(num){
    return num < 15;
}

const numbers = [2, 10, 22, 16];

const filteredNumbs = filter(numbers, isLowerThan15);
console.log(filteredNumbs);

const digerNumbers = filter(numbers, function(num){
    return num > 15;
});


//Foreach

var myArray = ['Defter', 'Kitap', 'Kalem', 'Silgi'];

//for ile
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

//callback ile foreach
myArray.forEach(myFunction);

function myFunction(yazi){
    console.log(yazi);
}

//anonim fonksiyon ile
myArray.forEach(function(yazi){
    console.log(yazi);
});

//arrow function ile
myArray.forEach(yazi=>console.log(yazi));

//dizinin kaçıncı eleman olduğu bilgisi ile
myArray.forEach((yazi, index)=>{
    console.log(index + ' => ' + yazi);
});