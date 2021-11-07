const {Builder, By} = require("selenium-webdriver");

async function teste() {
    let driver = await new Builder().forBrowser("MicrosoftEdge").build();
    await driver.get("https://folows1.github.io/projeto_StatusCovidMG");
    await driver.findElement(By.id("cidades")).click();
    await driver.findElement(By.id("op2")).click();
    await driver.findElement(By.css(".b3")).click();
    await driver.findElement(By.css(".b1")).click();
    await driver.findElement(By.css(".b2")).click();
    await driver.findElement(By.id("op2")).click();
    await driver.findElement(By.css(".b3")).click();
    await driver.findElement(By.css(".b1")).click();
    await driver.findElement(By.css(".b2")).click();
    await driver.findElement(By.id("op4")).click();
    await driver.findElement(By.id("mapas")).click();
    await driver.findElement(By.css(".div-link")).click();

}

teste();