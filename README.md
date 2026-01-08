QA Automation Runner (Learning Project)

This is a simple QA automation project built to understand how real testing systems decide PASS and FAIL, instead of assuming every error is a failure.

The project focuses on application behavior, not just test scripts.

What this project does

Opens a real website in a browser

Performs user actions like login (typing and clicking)

Checks what appears on the screen

Marks the test PASS or FAIL based on expected behavior

The project supports both successful flows and error flows.

How PASS and FAIL work

Wrong login + correct error message → PASS

Correct login + proper redirect → PASS

Behavior not matching the expectation → FAIL

PASS means the application behaved correctly.
FAIL means something unexpected happened.

Error handling and screenshots

Tests fail only when behavior is unexpected

When a test fails, a screenshot is automatically captured

Screenshots help in understanding what went wrong

Screenshots are not taken for successful runs.

Demo note (important)

One failure shown in the demo is intentional.

For demonstration purposes:

The test was temporarily changed to expect a wrong message

This forces a failure

A screenshot is captured to show failure handling

The application itself works correctly.
This change is done only to demonstrate how failures are detected and recorded.

Tools used

Node.js

Playwright

JavaScript

Postman

What I learned

PASS does not mean “no error happened”

FAIL means “behavior did not match expectation”

How to run

Install dependencies

Start the server

Trigger test flows using Postman

Real QA focuses on expected behavior

Screenshots are useful only when something goes wrong
