# axe-testcafe-demo

This project meant to provide a simple demo of using TestCafe with axe-core and additional helpers.
[axe-core](https://github.com/dequelabs/axe-core)

TestCafe framework specific wrapper: 
[@testcafe-community/axe](https://www.npmjs.com/package/@testcafe-community/axe) 

Helper to create HTML report from aXe violations, passes, incomplete and incompatible results: 
[axe-html-reporter](https://www.npmjs.com/package/axe-html-reporter)

# How to use

Install packages and run the tests `npm install && npm test`

```shell script
$ npm test
 Running tests in:
 - Chrome 85.0.4183.121 / Linux

 TestCafe tests with Axe
HTML report was saved into the following directory /Users/axe-demos/artifacts/accessibilityReport.html
 ✓ Automated accessibility testing


 1 passed (1s)
```

`npm test` command automatically opens html report file in your browser.

# Sample output

See [sample html report output](https://lpelypenko.github.io/axe-testcafe-demo/)
