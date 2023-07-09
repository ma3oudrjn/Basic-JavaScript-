var araye=[
{id:1,namee:'apple',price:1.2},
{id:2,namee:'coconut',price:5}
];
var find=araye.some(function(a){
return a.namee =='coconut'
})
console.log(find)