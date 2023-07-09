var users=[
{id:1,namee:"masouf",family:"ranj"},
{id:2,namee:"mamad",family:"mokhtari"},
];
console.log(users)

var newid=prompt("id: ")
var newnamee=prompt("name:")
var newfamily=prompt("family")

var addUser={
id: newid,
namee: newnamee,
family: newfamily,
}

users.push(addUser)
console.log(users)
