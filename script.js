
const num = parseInt(prompt("Enter a number: "));
if (!isNaN(num)) {
  const result = (num % 2 === 0) ? "Even" : "Odd";
  alert(`The number ${num} is ${result}.`);
} else {
  alert("Invalid input. Please enter a valid number.");
}