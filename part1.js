// Task 1 : Simple Programs todo for variables

// 1. Declare four variables without assigning values and print them in console

let a ;
let b ;
let c ;
let d ;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

// 2. How to get value of the variable myvar as output

let myvar = 1;
console.log(myvar);

// 3. Declare variables to store your first name, last name, marital status, country and age in multiple lines

let firstName = "Ganesh Babu";
let lastName = "E";
let maritalStatus = "Yes";
let country = "India";
let age = 26;

console.log(`${firstName}
${lastName}
${maritalStatus}
${country}
${age}`);

// 4. Declare variables to store your first name, last name, marital status, country and age in a single line

console.log(`${firstName}, ${lastName}, ${maritalStatus}, ${country}, ${age}`);

// 5. Declare variables and assign string, boolean, undefined and null data types

let string = "Ganesh Babu E";
let boolean = true;
let u ;
let j = null ;

console.log(typeof(string));
console.log(typeof(boolean));
console.log(typeof(undefined));
console.log(typeof(j));

// 6. Convert the string to integer

let i = "100"
console.log(parseInt(i));

// 7. Write 6 statement which provide truthy & falsey values

// Falsey Statements
console.log(`Falsey Statements :
false
0 (zero)
-0 (minus zero)
'', "", (empty string)
null
undefined
NaN`);

// Truthy Statements
console.log(`Truthy Statements :
'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)`);


// Task 2: Simple Programs todo for Operators

// 1. Square of a number

let no = 2
console.log(Math.pow(no,2));

// 2. Swapping 2 numbers

let no1 = 5;
let no2 = 2;
[no1,no2] = [no2,no1] //By using destructive function in js
console.log(`${no1}, ${no2}`);

// 3. Addition of 3 numbers

let no3 = 7;
console.log(no1+no2+no3);

// 4. Celsius to Fahrenheit conversion

let celsius = 10;
let fahrenheit = (celsius * (9/5)) + 32;
console.log(fahrenheit);

// 5. Meter to miles

let meter = 1
let miles = meter * 0.000621;
console.log("Miles =",miles.toFixed(4));

// 6. Pounds to kg

let pounds = 1
let kg = meter * 0.453592;
console.log("Kg =",kg.toFixed(3));

// 7. Calculate Batting Average

let batsman1 = 100;
let batsman2 = 100;
let batsman3 = 100;

let sum = batsman1 + batsman2 + batsman3;
let average = sum / 3;
console.log(average);

// 8. Calculate five test scores and print their average

let test1 = [125, 275, 150, 250, 300];
let sum1 = 0;
for (i=0; i<test1.length; i++){
    sum1 += test1[i];
}
let average1 = sum1 / test1.length;
console.log(average1);

// 9. Power of any number x ^ y.

let x = 2;
let y = 8;
let power = (Math.pow(x,y))
console.log(power);

// 10. Calculate Simple Interest

let principal = 200000;
let rate = 11.25;
let time = 36;
let simpleIntrest = (principal * rate * time) / 100
console.log(simpleIntrest);

// 11. Calculate area of an equilateral triangle

let side = 10;
let area = (Math.sqrt(3) / 4) * Math.pow(side,2)
console.log(area);

// 12. Area Of Isosceles Triangle

let isobase = 10;
let isoheight = 10;
let isoarea = (1/2) * isobase * isoheight;
console.log(isoarea);

// 13. Volume Of Sphere

let radius = 10;
let volume = (4/3) * 3.14 * Math.pow(radius,3);
console.log(volume);

// 14. Volume Of Prism

let height = 10;
let prismvol = area * height;
console.log(prismvol);

// 15. Find area of a triangle.

let tribase = 10;
let triheight = 10;
let triarea = (1/2) * tribase * triheight;
console.log(triarea);

// 16. Give the Actual cost and Sold cost, Calculate Discount Of Product

let actualCost = 15;
let soldCost = 13.5;
let discount = actualCost - soldCost;
console.log(discount);

// 17. Given their radius of a circle and find its diameter, circumference and area.

let radius1 = 10;
let diameter = 2 * radius1;
let circumference = 2 * 3.14 * radius1;
let areaCircle = 3.14 * Math.pow(radius1,2)
console.log(diameter);
console.log(circumference);
console.log(areaCircle);

// 18. Given two numbers and perform all arithmetic operations.

let n1 = 5;
let n2 = 6;
console.log("Addition", n1 +n2);
console.log("Subraction",n1 -n2);
console.log("Multiplication",n1 *n2);
console.log("division",n1 /n2);

// 19. Display the asterisk pattern as shown below(No loop needed):

console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");
console.log("*****");

// *****
// *****
// *****
// *****
// *****

// 20. Calculate electricity bill?

// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?

let perdayWatt = 100;
let unit = 1000;
let cost = 10;
let days = 30;
let bill = ((perdayWatt * days) / unit) * cost;
console.log(bill);

// Task 3: Simple Programs todo for Condition , Looping and Arrays

// 1. Get the first item, the middle item and the last item of the array

let array = [1,2,3,4,10];
let middle = Math.ceil(array.length / 2)
console.log("First Array = ",array[0]);
console.log("Middle Array = ",array[(Math.ceil(array.length / 2))-1]);
console.log("Last Array = ",array[array.length-1]);

// 2. Add your name to the end of the friends array, and add another name to beginning.

let friends = ["raj", "vicky"];
friends.unshift("Ganesh")
friends.push("Babu")
console.log(friends);

// 3. Add Mr or Ms to the names in the friends array.

for(let i=0; i<friends.length; i++){
    console.log(`Mr.${friends[i]}`);
}

// 4. Concat all the names the friends array and return as comma “,” seperated string.

let seperate = friends.join(",")
console.log(seperate);

// 5. Find the friends names who has letter ‘a’ and return the list.

let letter ;
let include = (arr)=>{
    for (let i=0; i<friends.length; i++){
        letter = arr[i].includes("v");
        if (letter == true) {console.log(arr[i]);};
    }
}
include(friends);

// 6. Find the avg length of all the friends names. Get the individual length of the names and do the avg.

let length ;
let friendssum = 0;
let friendsavg ;
for (let i=0; i<friends.length; i++){
    length = friends[i].length
    friendssum = friendssum + length;
}
friendsavg = friendssum / friends.length
console.log(friendsavg);

// 7. Find the names and return the list starting with letter M.

let answer ;
function firstN(y){
    for (let i=0; i<y.length; i++){
      answer = y[i].startsWith("B");
      if (answer == true) {
        console.log(y[i]);    
        }
      }
  }
  firstN(friends);

// 8. Find the name with max characters and return the name.

let strlength = 0;
let maxchar ;
let longest = (arr)=>{
for (var i = 0; i < arr.length; i++) {
  if (arr[i].length > strlength) {
    strlength = arr[i].length;
    maxchar = arr[i];
  }
}
console.log(maxchar);
}
longest(friends);

// 9. Find the name with min characters and return the name.

let strlengthmin = Infinity;
let minchar ;
let smallest = (arr)=>{
for (var i = 0; i < arr.length; i++) {
  if (arr[i].length < strlengthmin) {
    strlengthmin = arr[i].length;
    minchar = arr[i];
  }
}
console.log(minchar);
}
smallest(friends);