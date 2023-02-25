const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");
async function testcase() {
  let driver = await new Builder().forBrowser("chrome").build();
try {
  // Maximise the browser window
    await driver.manage().window().maximize();
// Launch the website
    await driver.get(
      "https://unergia-saas-staging-solarladder.vercel.app/login"
    );
// Enter a Email
    await driver
      .findElement(By.name("email"))
      .sendKeys("solarladdertest787@yopmail.com", Key.RETURN);
// Enter a Password
    await driver
      .findElement(By.name("password"))
      .sendKeys("password", Key.RETURN);  
// Click On Sign In
    await driver.findElement(By.xpath("//button[@type='submit']")).click();
// Click on the Project tab
await driver.findElement(By.xpath("//a[text()='Project']")).click();
// Clear the Project size field and enter 5
const projectSizeField = await driver.findElement(By.name('projectSize'));
projectSizeField.clear();
projectSizeField.sendKeys('5');
// Enter the customer name
await driver.findElement(By.name('customerName')).sendKeys('John');
// Enter the customer phone number
await driver.findElement(By.name('customerPhone')).sendKeys('9899999999');
// Enter the project location
await driver.findElement(By.name('projectLocation')).sendKeys('Jharkhand');

// Click on the Add Project button
await driver.findElement(By.xpath("//button[text()='Add Project']")).click();

// Wait for the page to load
driver.wait(until.elementLocated(By.xpath("//div[@class='enquiry-draggable']/div[@class='project-card']")), 10000);

// Drag the added project from Enquiry to Site Visit
const enquiryProject =await driver.findElement(By.xpath("//div[@class='enquiry-draggable']/div[@class='project-card']"));
const siteVisitArea =await driver.findElement(By.xpath("//div[@class='site-visit-draggable']"));
driver.actions().dragAndDrop(enquiryProject, siteVisitArea).perform();

// Wait for the page to load
driver.wait(until.elementLocated(By.xpath("//div[@class='site-visit-draggable']/div[@class='project-card']")), 10000);
} finally {
    await driver.quit();
  }

}
testcase() ;
