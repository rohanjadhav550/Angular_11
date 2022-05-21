// here we have assigned the type annotation string and null where it can take both values 
let h : string | null = null;
h = 'hello';

// now this function will take only nubers for both variables and either number or bool

function sum(first : number, sec : number) : number | boolean {
    return first+sec;
}

console.log(sum(10,20));