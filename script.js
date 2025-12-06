let choice = prompt(
    "Choose operation:\n" +
    "1. Addition (+)\n" +
    "2. Subtraction (-)\n" +
    "3. Multiplication (*)\n" +
    "4. Division (/)\n" +
    "5. Remainder (%)\n" +
    "6. Exponentiation (**)\n" +
    "7. Increment (++)\n" +
    "8. Decrement (--)\n"
);

let num1, num2, result;

if (choice >= 1 && choice <= 6) {
    num1 = parseFloat(prompt("Enter first number:"));
    num2 = parseFloat(prompt("Enter second number:"));
}

switch (choice) {

    case "1":
        result = num1 + num2;
        alert("Result = " + result);
        break;

    case "2":
        result = num1 - num2;
        alert("Result = " + result);
        break;

    case "3":
        result = num1 * num2;
        alert("Result = " + result);
        break;

    case "4":
        result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by 0";
        alert("Result = " + result);
        break;

    case "5":
        result = num1 % num2;
        alert("Result = " + result);
        break;

    case "6":
        result = num1 ** num2; // exponentiation
        alert("Result = " + result);
        break;

    case "7":
        num1 = parseFloat(prompt("Enter a number to increment:"));
        num1++;  
        alert("Incremented value = " + num1);
        break;

    case "8":
        num1 = parseFloat(prompt("Enter a number to decrement:"));
        num1--;  
        alert("Decremented value = " + num1);
        break;

    default:
        alert("Invalid choice!");
}
