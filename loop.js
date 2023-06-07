let a = (1234).split("");
let Even = [];
let Odd = [];

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 === 0) {
    Even.push(a[i]);
  } else {
    Odd.push(a[i]);
  }
}

// Splitting the console output of Even array
console.log("Even numbers:");
for (let j = 0; j < Even.length; j++) {
  console.log(Even[j]);
}

// Splitting the console output of Od0d array
console.log("Odd numbers:");
for (let k = 0; k < Odd.length; k++) {
  console.log(Odd[k]);
}
