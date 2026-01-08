function planSteps(prompt) {

  if (!prompt.toLowerCase().includes("login")) {
    throw new Error("Only login tests are supported");
  }

  return {
    steps: [
      { action: "navigate", url: "https://the-internet.herokuapp.com/login" },

      { action: "fill_input", selector: "#username", value: "$USERNAME" },
      { action: "fill_input", selector: "#password", value: "$PASSWORD" },

      { action: "click", selector: "button[type='submit']" },

      {
        if: { exists: "#flash.error" },
        then: [
          {
            action: "assert_text_contains",
            selector: "#flash",
            expectedText: "invalid"
          }
        ],
        else: [
          {
            action: "assert_url",
            contains: "/secure"
          }
        ]
      }
    ]
  };
}

module.exports = { planSteps };