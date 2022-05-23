//the below example is to show the annotation to the array
let item: number[] = [];
//the above array will take only numbers. Below mentioned method is assigning union type to the array
let set: number[] | string[] = [];
//typeScript will take the annotation on its own if not mentioned explicitly based on data in the array
let own = [1,'he',0.1];