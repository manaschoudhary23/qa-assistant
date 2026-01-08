const {chromium} = require('playwright');
async function createContext(){
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    return {browser, context, page};
}

module.exports = { createContext };