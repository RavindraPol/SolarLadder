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


  } finally {
    await driver.quit();
  }
  
}

testcase();
