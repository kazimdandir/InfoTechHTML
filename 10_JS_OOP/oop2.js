const users = [
    {
        name : 'John', age : 23, balance : 100,
        order : [
            {name : 'Bilgisayar', quantity: 1, price : 750},
            {name : 'Mouse Pad', quantity : 2, price : 20}
        ]
    },

    {
        name : 'Alice', age : 43, balance : 70,
        order : [
            {name : 'Robot', quantity: 1, price : 100}
        ]
    },

    {
        name : 'Bob', age : 30, balance : 125,
        order : [
            {name : 'Jelibon', quantity: 5, price : 15},
            {name : 'Mouse', quantity : 1, price : 150},
            {name : 'Keyboard', quantity : 1, price : 125}
        ]
    },
];

function reduce(arr, callback){
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        total = callback(total, arr[i]);
    }
    return total;
}

const totalBalance = reduce(users, function(total, user){
    return total + user.balance;
});

console.log(totalBalance);

const John = users[0];

const johnTotalOrder = reduce(John.order, function(total, product){
    return total + product.price;
});

console.log(johnTotalOrder);

function SumOrderPrice(user){
    const userTotal = reduce(user.order, function(total, product){
        return total + product.price;
    });
    return userTotal;
}

const usersTotalOrder = reduce(users, function(total, user){
    return total + SumOrderPrice(user);
});

console.log(usersTotalOrder);
