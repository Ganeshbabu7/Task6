// GUVI: Zen Class — Part 3: Find the culprits and nail them — debugging javascript

// Fix the code to get the largest of three.

let f,s,t;
let aa = (f,s,t) => {
 
 if(f>s && f>t){
 console.log(f)
}
 else if(s>f && s>t){
 console.log(s)
}
 else{
 console.log(t)
}
}
aa(1,8,3);

// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to Sum of the digits present in the number

// Code:

let n = 12345;

function add(number) {
    let sum = 0;
    number = number.toString();
    for (let i=0; i<number.length; i++){
    sum = sum + parseInt(number[i]);
    }
    console.log("Sum = ",sum);
}
add(n);

// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to Sum of all numbers using IIFE function

const arr = [9,8,5,6,4,3,2,1];

(()=>{
    let sum = 0;
    for (let i = 0; i <arr.length; i++){
    sum = sum + arr[i];
    }
     console.log("Sum = ",sum);
})(arr);

// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to gen Title caps.

var arr1 = ["guvi", "geek", "zen", "fullstack"];

var ano = function(arro) {
 for (var i = 0; i < arro.length; i++){
 console.log(arro[i][0].toUpperCase() + arro[i].substr(1));
 }
}
ano(arr1);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to return the Prime numbers

const newArray=[1,3,2,5,10];

const myPrime = newArray.filter(num=>{
 for(let i=2; i<=num.length; i++){
 if(num % i === 0){
 return true;
 }
 }
 return num === 1;
});
console.log(myPrime);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100] 

const sum1 = (a, b) => a + b
const sum2 = num.reduce(sum1)
console.log(sum2);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to rotate an array by k times and return rotated array using IIFE function

let arrno = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];

let k = 3;
k = arrno.length % k;
(function() {
 let out = arrno.slice(k +1, arrno.length);
 let count = out.length;
 for (var i = 0; i < k +1 ; i++) {
 out[count] = arrno[i];
 count += 1;
 }
 console.log(out);})(arrno);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to gen Title caps.

let arrn = ["guvi", "geek", "zen", "fullstack"];

(function() {
 for (var i = 0; i < arrn.length; i++) {
 let uppercase = arrn[i][0].toUpperCase() + arrn[i].substr(1);
 console.log(uppercase);
 }
})(arrn);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// print all odd numbers in an array using IIFE function

let arrodd = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
let oddarr = [];

(function() {
 for (var i = 0; i < arrodd.length; i++){
 if (arrodd[i] % 2 !== 0) {
 oddarr.push(arrodd[i]);
 }}
console.log(oddarr);
})(arrodd);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to reverse.

(function(str){
 let str1 = str.split("").reverse().join("");
 console.log(str1); 
})("abcd")
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to remove duplicates.

let res = function(arr){
newArr = [];
 for(let i=0; i <arr.length; i++){
 if(newArr.indexOf(arr[i]) == -1) {
 newArr.push(arr[i]);
//  console.log(newArr);
 } 
}
 console.log(newArr)
}
res(["guvi","geek","guvi","duplicate","geeK"])
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to give the below output:

// Expected Output:

// [{firstName: "Vasanth", lastName: "Raja", age: 24, role: "JSWizard"},
// {firstName: "Sri", lastName: "Devi", age: 28, role: "Coder"}]

let array =[[["firstname","vasanth"],["lastname","Raje"],["age",24],["role","JSWizard"]],[["firstname","Sri"],["lastname","Devi"],["age",28],["role", "Coder"]]];
let new_object = {};
let final=[];

while(array.length!=0){
 let outer_remove = array.shift();

 while(outer_remove.length !=0 ){
    let inner_remove = outer_remove.shift()
    let key = inner_remove[0]
    let value = inner_remove[1]
    new_object[key]=value
}
    final.push(new_object)
}
    console.log(final);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to give the below 

// output: Sum of odd numbers in an array

let ars=[12,34,5,6,2,56,6,2,1];
let oddarrs = [];
let odarsum = 0;
for (let i=0; i<ars.length; i++){
    if (ars[i] %2 !=0){
        oddarrs.push(ars[i])
    }
}
for (let i=0; i<oddarrs.length; i++){
    odarsum = oddarrs[i] + odarsum
}
console.log(odarsum);

// let sumo =arrs.reduce(function(a,c){
//  if(c%2 !=0)
//  {
//  return a+c;
//  }
//  return a;});
// console.log(sumo);
// — — — — — — — — — — — — — — — — — — — — — — — — —

// Fix the code to give the below 

// output: Swap the odd and even digits

let aa1 = (data)=>{
 let a = data;
 let l='';
 for(i=0; i<a.length-1; i++){
    let s = a[i+1]
    let b = a[i]
    l+=s
    l+=b
    i=i+1
 } 
//  if((a.length%2)!=0){
//     l+=a[a.length-1]
//  }
console.log(l);
}
aa1("1234");
// — — — — — — — — — — — — — — — — — — — — — — — — —