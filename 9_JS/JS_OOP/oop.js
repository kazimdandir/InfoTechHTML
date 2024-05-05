class Animal{ //baseClass, superClass

    isAlive = true;
    type = 'Animal';
    
    eat = function(){
        console.log('Eating...');
    }

    constructor(color, legs){
        this.color = color;
        this.legs = legs;
    }

    walk() {
        console.log('Walking...');
    }
}

const animal = new Animal('brown', 4);

console.log(animal.walk());


class Bird extends Animal{ //Animal'dan kalıtım
    
    type = 'Bird'; //override edilmiş oldu
    
    constructor(color, name){
        super(color, 2);
        this.name = name;
    }

    walk(){ //override edilmiş oldu
        // super.walk(); //Animal'daki gibi çalışmış olur böylece
        console.log('I can not walk. I can fly.')
    }
}

const twitty = new Bird('yellow', 'Twitty');


class Employees{
    
    constructor(name, surname, age){
        this.nameOf = name;
        this.surnameOf = surname;
        this.ageOf = age;
    }

    fullName = function(){
        return this.nameOf + ' ' + this.surnameOf;
    }
}

const employee1 = new Employees("Ali", "Yılmaz", 25);
console.log(employee1.fullName());

Employees.prototype.city = 'İstanbul';

console.log(employee1.city);

//------------------

class Araba{
    constructor(marka){
        this.arabaMarka = marka;
    }

    present(){
        return 'I have a ' + this.arabaMarka;
    }
}

class Model extends Araba{
    constructor(marka, mod){
        super(marka);
        this.arabaModel = mod;
    }

    goster() {
        return this.present() + ', it is a ' + this.arabaModel;
    }
}

const myCar = new Model('Ford', 'Mustang');
console.log(myCar.goster());

console.clear();


//Callback

function add(x, y){
    return x + y; 
}

add(2, 6); //8

function matOps(x, callback){
    return callback(x);
}

function double(num){
    return num * 2;
}

function square(num){
    return num * num;
}

function triple(num){
    return num * 3;
}

const doubled = matOps(5, double);
alert(doubled);

const squared = matOps(5, square);
alert(squared);

const tripled = matOps(5, square);
alert(tripled);

console.clear();

//callback detaylı

function logger(arr){
    map(arr, console.log)
}

const myArray = ['Jake', 'John', 'Alice', 'Bob'];

logger(myArray);

//---

function map(arr, callback){
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function greetings(arr){
    map(arr, function(name){
        console.log('Hello my name is ' + name);
    })
}

logger(myArray);
greetings(myArray);

function map1(arr, callback){

    let result = [];
    for (let i = 0; i < arr.length; i++) {
       const output = callback(arr[i]);
       result.push(output);
    }
    return result;
}

function double1(num){
    return num * 2;
}

const numArr = [2, 24, 13, 22, 6];

const doubleArr = map1(numArr, double1);
console.log(doubleArr);