//1.how to compare two json have the same properties without order ?
//let obj1 = {name: "Person 1", age:5);
//let obj2 = {age:5, name: "Person 1");

//=> Solution:

let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

let str1 = JSON.stringify(obj1);
let str2 = JSON.stringify(obj2);

if (str1 === str2) {
  console.log("The two JSON objects are equal.");
} else {
  console.log("The two JSON objects are not equal.");
}

//1.Print Odd number in an array
//let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//function checkOdd(Item1){
//    if (Item1 % 2 === 1){
//    return true;
//    }
//    else{
//    return false;
//    }
//}

//let OddNumbers = numbers.filter(checkOdd);
//console.log(OddNumbers);
//=> Output=(1,3,5,7,9)

//2.
//let titleCase = function(string) {
//    let words = string.toLowerCase().split(' ');
//    for (let i = 0; i < words.length; i++) {
//    words[i] = words[i].toUpperCase();
//    }
//    return words.join(' ');
//}
//  console.log(titleCase("a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z")); // Output: "This Is A Test String"
//=> Output=A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z

3. //Sum all the number in array ?
//let sum=0;
//for(i=0;i<=10;i++){
//    sum=sum+i;
//}
//console.log(sum);

4.
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);






