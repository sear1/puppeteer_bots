/*
@desc: imdb information scraper

*/

const puppeteer = require('puppeteer');//import base puppeteer module

(async () =>{

    let movieUrl = 'https://www.imdb.com/title/tt4154796'//select url target

    let browser = await puppeteer.launch({//start puppeteer and options
        headless: false,
        devtools: true,
        slowMo: 250 //250 slow down browser actions
    });
    let page = await browser.newPage();//launch a new puppeteer browser page

    await page.goto(movieUrl, {waitUntil: 'networkidle2'});//go to movie url

    let data = await page.evaluate(() => {//this will allow puppeteer to evaluate the information on the page you are at//save the data into a variable

        let title = document.querySelector('div[class="title_wrapper"] > h1').innerText.trim();//selector for title 
        let rating = document.querySelector('span[itemprop="ratingValue"]').innerText.trim();//selector for rating
        let totalRating = document.querySelector('span[itemprop="ratingCount"]').innerText.trim();//selector for totalRatings

        return{
            title,
            rating,
            totalRating
        }


    });

    console.log(data);//show whats in the terminal

    debugger;//debug values
    await browser.close();//close it up

})();//run from here

//junk pastes
