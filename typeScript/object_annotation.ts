//consider the object
let example = {
    name:'rohan',
    age:10
}
// now how to annotate is giving annotation to each property of the object
let example2:{
    name : string,
    age : number
} = {
    name:'Rohan',
    age: 24
};
//you can give the annotation to some of the properties without declaring or assigning them in the object
let example3 : {
    name : string,
    age : number,
    address? : string
} = {
    name : 'Ramesh',
    age : 65
};