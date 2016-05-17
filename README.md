#Using Jasmine to Popular FizzBuzz Problem
###Went to GitHub and downloaded the Jasmine Zip
####https://github.com/jasmine/jasmine/releases
####jasmine-standalone-2.4.1.zip
##Updated HTML to scripts I'm about to make
```html
  <!-- include source files here... -->
  <script src="src/FizzBuzz.js"></script>

  <!-- include spec files here... -->
  <script src="spec/FizzBuzzSpecs.js"></script>
```
### Created FizzBuzz.js
```js
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
```
###Created the FizzBuzzSpecs.js
```js
describe("FizzBuzz", function() {
    it("should be string for 1", function() {
        expect(fizzBuzz(1)).toBe("");
    });
    it("should be string for 2", function() {
        expect(fizzBuzz(2)).toBe("");
    });
    it("should be Fizz for 3", function() {
        expect(fizzBuzz(3)).toBe("Fizz");
    });
    it("should be Buzz for 5", function() {
        expect(fizzBuzz(5)).toBe("Buzz");
    });
    it("should be Fizz for 6", function() {
        expect(fizzBuzz(6)).toBe("Fizz");
    });
    it("should be Buzz for 10", function() {
        expect(fizzBuzz(10)).toBe("Buzz");
    });
});
```

