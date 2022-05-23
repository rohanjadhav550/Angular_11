// class in ts are as same as in js but with additional options
//consider the class of students. now to apply annotation to the class we will use interface 
//consider the interface for the student class

interface IDetails {
    name : string,
    age : number,
    address? : string
}

//now to apply interface to class we have must suffix keyword 'implements' to class name, as follows

class Student implements IDetails {
// when interface is applied the mandatory properties must be initalized in the calls as follows
    name;
    age;

    public data(name,age)
    {
        this.name = name;
        this.age = age;
        this.disp();
    }
    private disp()
    {
        console.log('Name: '+this.name);
        console.log('Age: '+this.age)
    } 
}

// You can initalyze the property in the constructor of the class

class Student2 implements IDetails {
    constructor(public name, public age)
    {
        this.disp();
    }

    private disp()
    {
        console.log('Name: '+this.name);
        console.log('Age: '+this.age);
    }
}