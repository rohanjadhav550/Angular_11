//the below object created seems lil messie.
const example1 : {
    name : string,
    age : number,
    address? : string
} = {
    name : 'Rohan',
    age : 24
}

//for clean code use interfaces, for better references for interface always start interface name with 'I'
interface IDetails {
    name : string,
    age : number,
    address? : string,
    disp? : ()=>void    //here the function can also be annoted and right now it's returning nothing
}

//now you can use this interface for object annotation

const address1 : IDetails = {
    name : 'Manju',
    age : 23
}

const address2 : IDetails = {
    name : 'Kanth',
    age : 45,
    address : 'Bangaluru'
}

const address3 : IDetails = {
    name : 'Komal',
    age: 34,
    address : 'Bangaluru',
    disp(){
        console.log('function display');
    }
}

//now the array of objects can be used as follows

let array : IDetails[];

