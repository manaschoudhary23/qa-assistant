QA Automation Runner (Learning Project)

This is a simple QA automation project built to understand how real testing systems decide PASS and FAIL, instead of assuming every error is a failure.

The focus of this project is application behavior, not just test scripts.

1. What this project does

Opens a real website in a browser

Performs user actions like login (typing and clicking)

Checks what appears on the screen

Decides whether the test should PASS or FAIL

The project supports both:

Successful flows

Error flows

2. How PASS and FAIL are decided

Wrong login + correct error message → PASS

Correct login + proper redirect → PASS

Behavior not matching expectation → FAIL

Important:
PASS does not mean “no error happened”.
PASS means “the application behaved correctly”.

3. Error handling and screenshots

Tests fail only when behavior is unexpected

When a test fails, a screenshot is automatically captured

Screenshots help in understanding what went wrong

Screenshots are not taken for successful runs

4. Demo note (important)

One failure shown in the demo is intentional.

For demonstration purposes:

The test was temporarily changed to expect a wrong message

This forces a failure

A screenshot is captured to show failure handling

The application itself is working correctly.
This change is done only to demonstrate how failures are detected and recorded.

5. Tools used

Node.js

Playwright

JavaScript

Postman

6. What I learned from this project

PASS does not mean “no error happened”

FAIL means “behavior did not match expectation”

Real QA focuses on expected behavior

Screenshots are useful only when something goes wrong

7. How to run (basic steps)

Install dependencies

Start the server

Trigger test flows using Postman
