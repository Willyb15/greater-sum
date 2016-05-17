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