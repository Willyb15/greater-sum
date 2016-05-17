function fizzBuzz(input) {
    if (input == 1) {
        return "";
    }
    if (input == 2) {
        return "";
    }
    if (input == 3) {
        return "Fizz";
    }
    if (input == 5) {
        return "Buzz";
    }
    if (input % 3 === 0) {
        return "Fizz";
    }
    if (input % 5 === 0) {
        return "Buzz";
    }

    return input.toString();
}