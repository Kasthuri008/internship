let fruits = ["apple","Banana","Grapes","cherry"]
console.log(fruits[3]);

fruits.push("apple");
console.log("After push: ",fruits);

fruits.shift();
console.log("After shift: ",fruits);

console.log("length of Array: ",fruits.length);

fruits.reverse()
console.log("reverse Array: ",fruits);

let num = [10,20,30,40];
let sum=0;
for(let i=0; i<num.length; i++){
    sum=sum+num[i];
}
console.log("Sum of number: ",sum);

for(let i=0;i<fruits.length;i++)
    console.log("All fruits: ",fruits[i]);

fruits.unshift("mango");
console.log("After unshift: ",fruits);

fruits.pop();
console.log("pop: ",fruits);