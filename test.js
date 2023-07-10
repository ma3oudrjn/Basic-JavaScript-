var product=[
{id:1,Name:'laptop',Price:100},
{id:2,Name:'phone',Price:120},
{id:3,Name:'mouse',Price:12},
{id:4,Name:'kyboard',Price:14},
{id:5,Name:'monitor',Price:110},
{id:6,Name:'coolpad',Price:28}

];
var off =product.filter(function(x){

return x.Price>99
})

var sell=off.length*5

var some =0

var final=product.forEach(function(y){
some = some + y.Price
})
var total = some+sell
console.log(total);