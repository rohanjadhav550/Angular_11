//generic is the placeholder for the types given to each objects of the class
//consider the first example with straight forward annotation
var Straightforward = /** @class */ (function () {
    function Straightforward() {
        this.data = [];
    }
    Straightforward.prototype.add = function (item) {
        this.data.push(item);
    };
    Straightforward.prototype.disp = function () {
        console.log(this.data);
    };
    return Straightforward;
}());
var first = new Straightforward();
first.add('hello');
first.disp();
//now if u see above the objects we create, must always send data of type string while you cannot send any other data type 
//not even if u create new object of class.
//here comes generics
var Generic = /** @class */ (function () {
    function Generic() {
        this.data = [];
    }
    Generic.prototype.add = function (item) {
        this.data.push(item);
    };
    Generic.prototype.disp = function () {
        console.log(this.data);
    };
    return Generic;
}());
//first object will have string type data exchange
var firstObj = new Generic();
firstObj.add('first');
firstObj.disp();
//second object will exchange data in numbers
var numObj = new Generic();
numObj.add(10);
numObj.disp();
//this explains generics and it's not you must use T for annotation, it's been used by developer as universal notation.
