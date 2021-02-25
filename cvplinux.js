const puppeteer = require('puppeteer');


async function scraperProduct(){
     let exPath='/usr/bin/chromium';
     const browser = await puppeteer.launch({executablePath: exPath});
     const page = await browser.newPage();
     await page.setDefaultNavigationTimeout(0);
     await page.goto('https://news.google.com/covid19/map?hl=en-GB&mid=%2Fm%2F07ssc&gl=GB&ceid=GB%3Aen');

     const [el] = await page.$x('/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[2]/table/tbody/tr[1]/td[1]');
     const txt = await el.getProperty('textContent');
     const rawTxt = await txt.jsonValue();

     const [el2] = await page.$x('/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[2]/table/tbody/tr[1]/td[5]');
     const txt2 = await el2.getProperty('textContent');
     const rawTxt2 = await txt2.jsonValue();

     const [el3] = await page.$x('/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[2]/table/tbody/tr[2]/td[1]');
     const txt3 = await el3.getProperty('textContent');
     const rawTxt3 = await txt3.jsonValue();

     const [el4] = await page.$x('/html/body/c-wiz/div/div[2]/div[2]/div[4]/div/div/div[2]/div/div[2]/table/tbody/tr[2]/td[5]');
     const txt4 = await el4.getProperty('textContent');
     const rawTxt4 = await txt4.jsonValue();

     await page.goto('https://www.worldometers.info/coronavirus/country/uk/');

     const [el5] = await page.$x('/html/body/div[4]/div[2]/div[1]/div[6]/div/div[2]/div/div/ul/li/strong[2]');
     const txt5 = await el5.getProperty('textContent');
     const rawTxt5 = await txt5.jsonValue();
     browser.close()




console.log('Latest <WORLDWIDE> CoronaVirus Statistics:');
console.log(' ');
console.log(' ');
console.log('\x1b\x1b[33m%s\x1b[0m', 'Total Cases: ' + rawTxt);
console.log(' ');
console.log(' ');
console.log('\x1b\x1b[31m%s\x1b[0m', 'Total Deaths: ' + rawTxt2);
console.log(' ');
console.log(' ');

console.log('Latest <UK> CoronaVirus Statistics:');
console.log(' ');
console.log(' ');
console.log('\x1b\x1b[33m%s\x1b[0m' , 'Total Cases: ' + rawTxt3);
console.log(' ');
console.log(' ');
console.log('\x1b\x1b[31m%s\x1b[0m', 'Total Deaths: ' + rawTxt4);
console.log(' ');
console.log(' ');
console.log('\x1B[35m%s\x1b[0m', 'Today: ' + rawTxt5);
console.log(' ');
console.log(' ');
console.log(' ');

}

scraperProduct()




