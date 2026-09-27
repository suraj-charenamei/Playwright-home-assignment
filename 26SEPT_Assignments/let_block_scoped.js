// example of let keyword blocked scoped 
// Declare a const name as browserVersion (global), Assign value as Chrome
    const browserVersion = "Chrome";

    // Create a function by name getBrowserVersion
    function getBrowserVersion ()
    {
    // Check if browser is Chrome
    if (browserVersion == "Chrome") 
        {

        // Declare a local variable (browserVersion) using let keyword inside if block
        let color = "pink";
        // Print the variable inside if block
        console.log("color variable can be access inside if block since let it is a block scoped:", color);
        }
    
    // let is block-scoped, so it cannot be access outside the function, will throw not defined
        console.log("color cannot be access outside if block since let is block scoped:", color);

    }
    // call the function to see the result
    getBrowserVersion()