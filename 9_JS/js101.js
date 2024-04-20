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

//change value
myArr[0] = 'Bob';
console.log(myArr);

//değer ekleme
//en sona değer ekleme yapar

myArr.push('Alice');
console.log(myArr);

//en başa değer ekleme

myArr.unshift('David');
console.log(myArr);

//değer çıkartmak
//pop() en sondaki değeri arraydan çıkartır

myArr.pop();
console.log(myArr);

//ilk sıradakini çıkartmak

myArr.shift();
console.log(myArr);

//Math operators
//Toplama

var sum = 23 + 12;
console.log(sum);

//çıkarma
var sub = 33 - 10;

//çarpma
var times = 4 * 5;

//bölme 
var div = 36 / 6;

//mod alma
var modVar = 35 % 2;

//üs alma
var multi = 2 ** 3;

//math shortcuts

var x = 4;

x += 4;
console.log(x);

x -= 4;
console.log(x);

x *= 4;
console.log(x);

x /= 4;
console.log(x);

//1 arttırıp 1 azaltma

x++; //x += 1;
x--; //x -= 1;

console.clear();

//conditional operators

var n = 13;
var l = 7;

var con1 = n > 1;
console.log(con1);

var con2 = n < 1;
console.log(con2);

var con3 = 13 <= n;
console.log(con3);

//Equality check
var con5 = 5 == '5';
console.log(con5);

//strict equality check

var con6 = '25' === 25;
console.log(con6);

//not equal check

var con9 = '44' !== 44;
console.log(con9);

//if

if(3>5){
    console.log('3 büyüktür 5');
}
else{
    console.log('3 küçüktür 5');
}

var msg = 'Hello';
if(msg === 'Hello'){
    console.log('Message is Hello!');
}

var age = 45;
if(age>= 65){
    console.log('Aşı olduk mu?')
}
else{
    console.log('Daha gençsin!');
}

//else if
var johnAge = 29;

if(johnAge>=45){
    console.log('john 45 yaşından büyüktür');
}
else if(johnAge>=18){
    console.log('john bir yetişkindir');
}
else if(johnAge>=12){
    console.log('john genç birisidir');
}
else{
    console.log('john çocuktur');
}

//switch case 

var firstName = 'Alice';

switch(firstName){
    case 'Bob' :
        console.log('Sen bobsun');
        break;
    case 'John' :
        console.log('Sen Johnsun');
        break;
    case 'Alice' :
        console.log('Sen Alicesin');
        break;
    default:
        console.log('Sen kimsin?');
        break;
}

//Döngüler
//For

var loopArray = ['John', 'Alice', 'Bob', 'Betty'];

for (let i = 0; i < loopArray.length; i++) {
    console.log(loopArray[i]);
}

// var z = 2;
let z = 2;

for (let z = 0; z < 5; z++) {
    console.log('z = ', z);
}

console.log('Global z =', z);

//negatif yönlü for döngüsü

for (let i = 10; i > 0; i--) {
    console.log('i = ', i);
}

//while 

let myAge = 33;

while(myAge<=65){
    console.log('Hala emekli değilsin!');
    myAge++;
}

console.log('Artık emekli olabilirsin');

//do while

let yourAge = 100;

do{
    console.log('90 yaşından küçüksün');
    yourAge ++;
}while(yourAge<90);

console.log(yourAge);

console.clear();

//FUNCTIONS

function add(){
    console.log('Add Function', 4 + 10);
}

add();

//parametre alan fonksiyon
function double(n){
    console.log(n*2);
}

double(23);
double(3);

function multiply(x,y){
    console.log(x*y);
}

multiply(3,2);

console.log(loopArray);

//anonym function

var addFn = function(a,b){
    console.log(a+b);
}

const output1 = addFn(5, 7);
console.log(output1);

function toplam(a,b){
    console.log('a değerinin number olup olmadığı kontrol ediliyor');
    if(typeof a !== 'number'){
        console.log('a değişkeni bir number değil');
        return;
    }
    
    console.log('a 10 dan küçükmü diye kontrol ediliyor');

    if (a>=10){
        return a+b;
    }

    console.log('Sonuç hesaplanıyor');
    return 10 + a + b;
}

const result1 = toplam(3,5);
console.log(result1);

const result2 = toplam(12,3);
console.log(result2);

const result3 = toplam('Hello',4);
console.log(result3);