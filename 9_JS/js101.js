console.log('Merhaba JS');

//DYNAMİC TYPES
var a = 'Hello World';
a = 23;
a = true;
a = 'Hello Again';

console.log(a);

let b = 'Another keyword for variables';
b = 'Other var';

console.log(b);

// const c = 'Constant Variables';
// c = 'Change Contant'

// console.log(c);

//DATA TYPES
//Primitive Data Types

var str = 'STRING';
var number = 23;
var boolean = true;
var nullVar = null;
var notANumber = NaN;
var myUndefined = undefined;
var myVar; //default olarak undefined değeri ile başlıyor

//Complex Data Types
//Object

var myObj = {
    name :'John',
    age : 23,
    isEngineer : true
}

console.log(myObj);

//Değer okuma
console.log(myObj['age']);
console.log(myObj.name);

//yeni bir proje oluşturma
myObj.country = 'USA';
console.log(myObj);

//property silme
delete myObj.isEngineer

//property değerini değiştirme
myObj.name = 'Jane';
console.log(myObj);

//Array
myArr = ['John', 'Jane', 33, 57, true, false, null, NaN];

console.log(myArr);

//Read a value
console.log(myArr[0]);