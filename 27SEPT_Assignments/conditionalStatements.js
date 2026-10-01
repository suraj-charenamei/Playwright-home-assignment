/*Create and call JavaScript function: `launchBrowser` with `if-else` 
for browser launch messages.*/

//Function 1: launchBrowser
function launchBrowser(browserName) {
  if (browserName === "chrome") {
    console.log("Launching Chrome browser");
  } else {
    console.log("Launching" + " " + browserName + " " + "browser");
  }
}
//Calling the function
launchBrowser("firefox");

/*Create and call JavaScript function: `runTests` with `switch` for test type messages.*/

//Function 2: runTests
function runTests(testType) {
  switch (testType) {
    case "smoke":
      console.log("Running Smoke Testing");

      break;
    case "sanity":
      console.log("Running Sanity Testing");

      break;
    case "regression":
      console.log("Running Regression Testing");

      break;

    default:
      console.log("Running Default Testing");
      break;
  }
}
//Calling the function
runTests("regression");
