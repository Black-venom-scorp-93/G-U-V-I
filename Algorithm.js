  function isEvenOrOdd(number) {
    let lastDigit = number(number.length - 1) // Get the last digit of the number
    
    if (lastDigit % 2 === 0) {
        return true; // even number
    } else {
        return false; // odd number
    }
};

let number = '27';

if (isEvenOrOdd(number)) {
    console.log('even number');
} else {
    console.log('odd number');
}

