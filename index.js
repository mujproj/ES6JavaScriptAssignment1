var i = 10;
var i = "hello";

var func = function variable(name){
    name = "jayio";
    return name;
}
console.log(func());
// console.log(variable());

for(var i=0; i<10; i++){
    console.log(i);
}

var user = {
    username: "jay",
    age: 15,
    toString: function(){
        return 1;
    }
}
console.log(user.age , user.username , user.toString());

var o = document.getElementById("name");
function setting(){
    var p = document.getElementById("id");
    console.log(p.value);
}
o.innerHTML="hello";
console.log("hello");

var a = [1, 2, 3, 4];
console.log(a);
a.push(1);
console.log(a);