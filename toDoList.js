//No.130
var list=[
{id:1,name:"coding",status:true},
{id:2,name:"study",status:true},
{id:3,name:"make cake",status:true},
];



var doing=prompt("1= add to do \n 2= remove \n 3= change status")

// var add=[
//     {id:Math.random()*100,}
// ]
// add=Math.trunc(add)
// console.log(add);

if(doing==='1'){
    var addNewtext = prompt('plese add to do')

    var newToDo={
        //var addNewtext = prompt('plese add'),
    id: list.length+1,
    name: addNewtext,
    status: false
    }
list.push(newToDo)
console.log(list)
}else if(doing==='2'){


}else if(doing==='3'){


}else
console.log("pelese insert correct parameter!!!!!!!!");