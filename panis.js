class Motors {
    constructor(model, cubicCapacity, yearModel, color) {
      this.model = model;
      this.cubicCapacity = cubicCapacity;
      this.yearModel = yearModel;
      this.color = color;
    }
  
    displayDetails() {
      return `Model: ${this.model}
  CC: ${this.cubicCapacity}
  Year: ${this.yearModel}
  Color: ${this.color}`;
    }
  }
  
  function displayOptions(motors) {
    console.log("Choose a motor model:");
    motors.forEach((motor, index) => {
      console.log(`${index + 1}. ${motor.model}`);
    });
  }
  
  function handleSelection(motors, selection) {
    if (selection > 0 && selection <= motors.length) {
      console.log("\nMotor Details:");
      console.log(motors[selection - 1].displayDetails());
    } else {
      console.log("Invalid selection. Please choose a valid number.");
    }
  }
  
  // Create instances of different motors
  const sniper = new Motors('SNIPER', '150cc', 2022, 'Red');
  const nmax = new Motors('NMAX', '155cc', 2023, 'Blue');
  const aerox = new Motors('AEROX', '125cc', 2024, 'Black');
  
  // Array of motor options
  const motorOptions = [sniper, nmax, aerox];
  
  // Display the options
  displayOptions(motorOptions);
  
  // Simulating user input in a Node.js environment
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('Please enter the number of the motor model you want to select: ', (input) => {
    const userSelection = parseInt(input, 10);
    handleSelection(motorOptions, userSelection);
    rl.close();
  });