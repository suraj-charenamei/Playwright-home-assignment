/* 
Browser -> Actual browser engine
Context -> isolated and incognito window
Page -> tab or page specific to context */

import { chromium, test } from "@playwright/test"; //import test function from playwright test modules

test("learn to launch the browser", async () => {
  let browser = await chromium.launch(); // use await only when any method return promise, also use headless=false if wanted to run test in UI mode
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://www.amazon.in/");

  // store the url in variable and print it
  const URL = page.url(); //no need to use await when the method does not return promise
  console.log(URL);
  // store title in variable and print it
  //await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(6000); // This practice is not recommended, as it will slow down execution
  const title = await page.title();
  console.log(title);
});

//to execute test use this cmd (npx playwright test filename.spec.ts) ex: npx playwright test launchBrowser.spec.ts
//use await only when any method return promise
//use headless=false if you wanted to run test in UI mode
//no need to use await when the method does not return promise, even when we used code will not give any error because “await’ has no effect on the type of this expression
//if you want config.ts file to be executed, must run test from root directory where config file is present
//The priority of lauching browser: first from code, second from terminal and third from config.

// create the browser, context, page instances using page fixture

test.only("to launch testleaf website using page fixture", async ({ page }) => {
  await page.goto("https://leaftaps.com/opentaps/control/main");
  const URL = page.url();
  console.log(URL);
  //await page.waitForLoadState("domcontentloaded");
  await page.waitForTimeout(6000); // This practice is not recommended, as it will slow down execution
  const title = await page.title();
  console.log(title);
});
