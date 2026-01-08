async function assert_url(page, text) {

  const url = page.url();

  if (url.indexOf(text) === -1) {
    throw new Error("Wrong page opened");
  }
}

async function assert_text_contains(page, selector, text) {

  const element = await page.waitForSelector(selector);
  const pageText = await element.textContent();

  if (pageText.indexOf(text) === -1) {
    throw new Error("Expected text not found");
  }
}

module.exports = {
  assert_url,
  assert_text_contains
};
