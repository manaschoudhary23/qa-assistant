function replaceVariables(steps, testData) {

  for (let i = 0; i < steps.length; i++) {
    const step = steps[i];

    for (let key in step) {
      if (typeof step[key] === "string" && step[key].startsWith("$")) {
        const variableName = step[key].substring(1);

        if (!testData[variableName]) {
          throw new Error(`Missing value for ${variableName}`);
        }

        step[key] = testData[variableName];
      }
    }

    if (step.then) {
      replaceVariables(step.then, testData);
    }

    if (step.else) {
      replaceVariables(step.else, testData);
    }
  }

  return steps;
}

module.exports = { replaceVariables };
