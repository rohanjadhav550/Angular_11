//generic is the placeholder for the types given to each objects of the class
//consider the first example with straight forward annotation
class Straightforward {
    private data = [];

    add(item : string){
        this.data.push(item);
    }

    disp(){
        console.log(this.data);
    }
}

const first = new Straightforward();

first.add('hello');

first.disp();

//now if u see above the objects we create, must always send data of type string while you cannot send any other data type 
//not even if u create new object of class.
//here comes generics

class Generic <T>{
    private data : T[] = [];

    add(item : T)
    {
        this.data.push(item);
    }

    disp(){
        console.log(this.data);
    }
}

//first object will have string type data exchange
const firstObj = new Generic();

firstObj.add('first');

firstObj.disp();
//second object will exchange data in numbers
const numObj = new Generic();

numObj.add(10);

numObj.disp();

//this explains generics and it's not you must use T for annotation, it's been used by developer as universal notation.
