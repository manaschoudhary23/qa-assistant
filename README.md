🔹 QA Automation Runner (Learning Project)

This is a simple QA automation project built to understand how real testing systems decide PASS and FAIL, instead of assuming every error is a failure.
The focus of this project is application behavior, not just test scripts.

🔹 1. Project Purpose

The purpose of this project is to:
Learn how QA automation tools work internally
Understand how PASS and FAIL are decided
Handle both success and error scenarios properly
Capture evidence when a test fails

🔹 2. What This Project Does

Opens a real website in a browser
Performs user actions like login (typing and clicking)
Observes what appears on the screen
Marks the test as PASS or FAIL based on expected behavior
The project supports:
Successful flows
Error flows

🔹 3. PASS and FAIL Logic

PASS and FAIL are decided based on expected behavior.
Wrong login + correct error message → PASS
Correct login + proper redirect → PASS
Behavior not matching expectation → FAIL

Note:
PASS does not mean “no error happened”.
PASS means “the application behaved correctly”.

🔹 4. Error Handling and Screenshots

Tests fail only when behavior is unexpected
When a test fails, a screenshot is automatically captured
Screenshots help in understanding what went wrong
Screenshots are not taken for successful runs

🔹 5. Demo Explanation (Important)

One failure shown in the demo is intentional.
For demonstration purposes:
The test was temporarily changed to expect a wrong message
This forces a failure
A screenshot is captured to show failure handling
The application itself works correctly.
This change is done only to demonstrate how failures are detected and recorded.

🔹 6. Tools Used

Node.js
Playwright
JavaScript
Postman

🔹 7. What I Learned

PASS does not mean “no error happened”
FAIL means “behavior did not match expectation”
Real QA focuses on expected behavior
Screenshots are useful only when something goes wrong

🔹 8. How to Run (Basic Steps)

Install dependencies
Start the server
Trigger test flows using Postman

🔹 9. Project Status

This is a focused learning project and currently includes:
Browser-based automation
Conditional test logic
Clear PASS / FAIL reporting
Screenshot capture on failures
Further improvements can be added step by step.

🔹 Final Note

This project helped me understand real QA logic, not just automation syntax.
The goal was clarity and correctness, not complexity.
