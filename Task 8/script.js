function Calculator() {
    this.sum = function(a, b) {
      return a + b;
    }
  
    this.subtraction = function(a, b) {
      return a - b;
    }
  
    this.multiplication = function(a, b) {
      return a * b;
    }
  
    this.division = function(a, b) {
      if (b === 0) {
        return "Dalyba iš nulio negalima";
      }
      return a / b;
    }
  }
  
  var calc = new Calculator();
  
  console.log(calc.sum(5, 3))
  console.log(calc.subtraction(10, 4))
  console.log(calc.multiplication(2, 6))
  console.log(calc.division(10, 2))
  console.log(calc.division(8, 2))
  