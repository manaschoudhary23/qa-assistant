const express = require('express');
const { replaceVariables } = require('./utils/replaceVariables');
const { createContext } = require('./runner/context');
const { runFlow } = require('./runner/runFlow');
const { planSteps } = require('./planner/aiPlanner');
const {
  setupArtifactListeners,
  captureScreenshot
} = require('./runner/artifacts');

const app = express();
app.use(express.json());

app.post('/run', async (req, res) => {
  const steps = req.body.steps;ṅṅ

  if (!steps || !Array.isArray(steps)) {
    return res.status(400).json({
      status: 'FAIL',
      error: 'Steps array is required'
    });
  }

  const { browser, page } = await createContext();
  setupArtifactListeners(page);

  try {
    await runFlow(page, steps);
    await browser.close();

    res.json({ status: 'PASS' });
  } catch (err) {
    await captureScreenshot(page);
    await browser.close();

    res.status(400).json({
      status: 'FAIL',
      error: err.message
    });
  }
});

app.post('/plan-and-run', async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({
      error: 'Prompt is required'
    });
  }

  let steps;

  try {
const plan = await planSteps(prompt);
steps = replaceVariables(plan.steps, req.body.testData || {});

  } catch (err) {
    return res.status(400).json({
      error: `Planning failed: ${err.message}`
    });
  }

  const { browser, page } = await createContext();
  setupArtifactListeners(page);

  try {
    await runFlow(page, steps);
    await browser.close();

    res.json({
      status: 'PASS',
      steps
    });
  } catch (err) {
    await captureScreenshot(page);
    await browser.close();

    res.status(400).json({
      status: 'FAIL',
      error: err.message,
      steps
    });
  }
});

app.listen(3000, () => {
  console.log('QA Runner listening on port 3000');
});
