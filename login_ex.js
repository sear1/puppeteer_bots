const puppeteer = require('puppeteer');
​
(async () => {
  const browser = await puppeteer.launch({
      headless: false,
      //arg: ['--proxy-server=192.168.0.1:8080']
      devtools: true
    //   defaultViewport: {
    //       width: 1920,
    //       height: 1080
    //   },
      //isMobile: true
  });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36')
  await page.goto('http://quotes.toscrape.com/login');
  await page.type('input[id="username"]', 'administrator', {delay: 150}); 
  await page.type('input[id="password"]', 'admin', {delay: 150}); 
  await page.waitFor(1000);
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  //await page.screenshot({path: 'example.png'});
  await page.waitFor(3000);
  await page.click('a[href="/logout"', 'left');
  await page.waitFor(3000);
​
  await page.setUserAgent('Mozilla/5.0 (Android 4.4; Mobile; rv:41.0) Gecko/41.0 Firefox/41.0')
  await page.click('a[href="/login"', 'left');
  await page.type('input[id="username"]', 'employee', {delay: 200});
  await page.type('input[id="password"]', 'password', {delay: 200});
  await page.waitFor(1000);
  await page.keyboard.press('Enter');
  await page.waitForNavigation();
  
  //await browser.close();
​
  debugger;
