async function navigate(page, url) {
    await page.goto(url);
}

async function fill_input(page,selector,value) {
    await page.fill(selector, value);
}

async function click(page, selector){
    await page.click(selector);
}

module.exports = { navigate, fill_input, click };