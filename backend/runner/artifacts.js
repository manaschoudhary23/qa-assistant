// backend/runner/artifacts.js
const fs = require('fs');
const path = require('path');

// folder where screenshots and logs will be saved
const artifactsFolder = path.join(__dirname, '../artifacts');

// create artifacts folder if it does not exist
function createArtifactsFolder() {
  if (!fs.existsSync(artifactsFolder)) {
    fs.mkdirSync(artifactsFolder);
  }
}

// listen for browser errors and save them
function setupArtifactListeners(page) {
  createArtifactsFolder();

  // capture console errors
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const log = `[CONSOLE ERROR] ${msg.text()}\n`;
      fs.appendFileSync(
        path.join(artifactsFolder, 'console.log'),
        log
      );
    }
  });

  // capture page runtime errors
  page.on('pageerror', (error) => {
    const log = `[PAGE ERROR] ${error.message}\n`;
    fs.appendFileSync(
      path.join(artifactsFolder, 'pageerror.log'),
      log
    );
  });
}

// take screenshot when test fails
async function captureScreenshot(page, fileName = 'failure') {
  createArtifactsFolder();

  const screenshotPath = path.join(
    artifactsFolder,
    fileName + '.png'
  );

  await page.screenshot({ path: screenshotPath });

  return screenshotPath;
}

module.exports = {
  setupArtifactListeners,
  captureScreenshot
};
