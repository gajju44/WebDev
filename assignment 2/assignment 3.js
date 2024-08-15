var user={
    name:"Gajendra",
    age:20,
    gender:"male"
}

greetuser(user);




function canvote(age){
    if(age>=18)
    {
return "allowed";
    }
    else{
       return "not allowed";
    }
}

function greetuser(user){

    var prefix;

if(user.gender=="male"){
    prefix="Mr.";

}
else if(user.gender=="female"){
    prefix="Mrs."
}

var ans =canvote(user.age);

console.log("Hi "+prefix +user.name+" your age is: "+user.age+" and you are "+ans+" to vote");

}

