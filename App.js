// Even or Odd

let number = prompt("Enter Number",);
if (number % 2 === 0) {
    console.log(`${number} is Even`);
} else {
    console.log(`${number} is Odd`);
}

// Problem 2

const employess = [{ name: "abc", age: 50 }, { name: "xyxy", age: 40 }];

function chechRetiredAge(data) {
    const result = data?.map((x) => ({ ...x, isRetired: x.age >= 50 }));
    return result;
}
let retired = chechRetiredAge(employess);
console.log(retired);