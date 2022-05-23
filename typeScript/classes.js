// class in ts are as same as in js but with additional options
//consider the class of students. now to apply annotation to the class we will use interface 
//consider the interface for the student class
//now to apply interface to class we have must suffix keyword 'implements' to class name, as follows
var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.data = function (name, age) {
        this.name = name;
        this.age = age;
        this.disp();
    };
    Student.prototype.disp = function () {
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
    };
    return Student;
}());
// You can initalyze the property in the constructor of the class
var Student2 = /** @class */ (function () {
    function Student2(name, age) {
        this.name = name;
        this.age = age;
        this.disp();
    }
    Student2.prototype.disp = function () {
        console.log('Name: ' + this.name);
        console.log('Age: ' + this.age);
    };
    return Student2;
}());
