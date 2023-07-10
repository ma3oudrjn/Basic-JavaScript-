var input=prompt("insert name")
var self=input.split('')
var w=self.reverse();
var reversstring=self.join('')
console.log(reversstring);
if(reversstring==input){

    console.log("same");
}else{
    console.log("not same");
}