// example of var keyword function scoped 
// Declare a const name as browserVersion (global), Assign value as Chrome
    const browserVersion = "Chrome";

// Create a function by name getBrowserVersion
    function getBrowserVersion ()
    {
// Check if browser is Chrome
    if (browserVersion == "Chrome") 
    {

    // Declare a local variable (color) using var keyword inside if block
        var color = "pink";
    // Print the variable inside if block
        console.log("color can be access inside if block:", color);
    }
    
    // var is function-scoped, so it can be accessed outside the if block
    console.log("color can also access outside if block and also inside function since it is function scopded is:", color);
}

// call the function to see the result
getBrowserVersion()
