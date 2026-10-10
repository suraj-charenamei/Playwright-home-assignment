//launch two separate browser instances (Edge and Webkit) and verify page title and URL of each browser

//import browers type object, test function from playwright node modules
import { chromium, webkit, test } from "@playwright/test";

test("launch redbus and flipkart", async () => {
  let chromiumbrowser = await chromium.launch();
  let chromiumcontext = await chromiumbrowser.newContext();
  let chromiumpage = await chromiumcontext.newPage();
  await chromiumpage.goto("https://www.redbus.in/");
  await chromiumpage.waitForLoadState("domcontentloaded");

  //To retrieve current page title
  const redbustitle = await chromiumpage.title();
  console.log(redbustitle);

  //To retrieve current page URL
  const redbusURL = chromiumpage.url();
  console.log(redbusURL);
  await chromiumbrowser.close();

  let webkitbrowser = await webkit.launch();
  let webkitcontext = await webkitbrowser.newContext();
  let webkitpage = await webkitcontext.newPage();
  await webkitpage.goto("https://www.flipkart.com/");
  await webkitpage.waitForLoadState("domcontentloaded");

  //To retrieve current page title
  const flipkarttitle = await webkitpage.title();
  console.log(flipkarttitle);

  //To retrieve current page URL
  const flipkartURL = webkitpage.url();
  console.log(flipkartURL);
  await webkitbrowser.close();
});

// I have made the setting as bellow in config.ts file
/*trace: "on",
    screenshot: "on",
    video: "on",
    headless: false, */

// also commentted the below firefox brower not to run it, so that it runs only in chromium and webket

// {
//   name: "firefox",
//   use: { ...devices["Desktop Firefox"] },
// },
