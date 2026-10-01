// example of var keyword function scoped
// Declare a const name as browserVersion (global), Assign value as Chrome
const browserVersion = "Chrome";

// Create a function by name getBrowserVersion
function getBrowserVersion() {
  // Check if browser is Chrome
  if (browserVersion === "Chrome") {
    // Declare a local variable (color) using var keyword inside if block
    var color = "pink";
    // Print color inside if block
    console.log(
      color,
      "color can be accessed inside if block since var is a function scoped",
    );
  }

  // print color again within function block
  console.log(
    color,
    "color can also be accessed inside function since var is a function scoped",
  );
}

// call the function to see the result
getBrowserVersion();
