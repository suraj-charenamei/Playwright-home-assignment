//write a callbacks function to handle asynchronous tasks in JavaScript.

let browser = "Chrome"; //Declare a global variable browser and assign it the value "Chrome".

// create a function that accepts a callback
function checkBrowserVersion(callback) {
  setTimeout(() => {}, 2000);
  callback(browser);
}

// create a Callback function that print the browser version
function printBrowserVersion(browserVersion) {
  console.log("Browser version using callback is:", browserVersion);
}

// Call the function and pass the callback to it
checkBrowserVersion(printBrowserVersion);
