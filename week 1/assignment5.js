var users=[
    {
        name:"Birju",
        age:20
    },
    {
        name:"Bablu",
        age:18
    },
    {
        name:"Dablu",
        age:17
    },
    {
        name:"Chintu",
        age:14
    }
];

AligibleSort(users);

function AligibleSort(arr){
    var aligibleuser=[];
    var i=0;
    arr.forEach(element => {
        if(element.age>=18){
            aligibleuser[i]=element;
            i++;
        }
    });

    aligibleuser.forEach(element =>{
console.log(element);
    });
}


//or using push()

AligibleSortpush(users);

function AligibleSortpush(arr){
    var aligibleuser=[];
   
    arr.forEach(element => {
        if(element.age>=18){
            aligibleuser.push(element);
           
        }
    });

    aligibleuser.forEach(element =>{
console.log(element);
    });
}

//or using filter()

AligibleSortfilter(users);

function AligibleSortfilter(arr){
    
   
   
    var aligibleuser= users.filter(element => element.age >=18);
   

    aligibleuser.forEach(element =>{
console.log(element);
    });
}
