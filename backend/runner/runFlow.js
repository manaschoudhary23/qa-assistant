const actions = require('./actions');
const assertions = require('./assertions');
const conditions = require('./conditions');

async function runFlow(page, steps) {

  // loop through each step one by one
  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];

    // check if step is a condition
    if (step.if) {

      // get condition type and value
      const conditionName = Object.keys(step.if)[0];
      const conditionValue = step.if[conditionName];

      // get condition function
      const conditionFunction = conditions[conditionName];

      if (!conditionFunction) {
        throw new Error('Condition not supported: ' + conditionName);
      }

      // execute condition
      const conditionResult = await conditionFunction(page, conditionValue);

      // if condition is true, run "then" steps
      if (conditionResult) {
        await runFlow(page, step.then || []);
      } 
      // else run "else" steps
      else {
        await runFlow(page, step.else || []);
      }

      // move to next step
      continue;
    }

    // normal step (action or assertion)
    const actionName = step.action;

    // get all other values except action
    const params = Object.values(step).slice(1);

    // perform action
    if (actions[actionName]) {
      await actions[actionName](page, ...params);
    }
    // perform assertion
    else if (assertions[actionName]) {
      await assertions[actionName](page, ...params);
    }
    // unsupported step
    else {
      throw new Error('Action not supported: ' + actionName);
    }
  }
}

module.exports = { runFlow };
