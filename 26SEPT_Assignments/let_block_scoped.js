// example of let keyword blocked scoped

// Declare a const name as browserVersion (global), Assign value as Chrome
const browserVersion = "Chrome";

// Create a function by name getBrowserVersion
function getBrowserVersion() {
  // Check if browserVersion is equal to Chrome
  if (browserVersion === "Chrome") {
    // Declare a local variable (color) using let keyword inside if block
    let color = "pink";
    // Print the variable color inside if block
    console.log(
      color,
      "color can be accessed inside if block since let is a block scoped",
    );
  }
}
// call the function to see the result
getBrowserVersion();
