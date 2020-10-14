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
$ npx testcafe
 Running tests in:
 - Chrome xxx.xx.xxx / Linix

 TestCafe tests with Axe
HTML report was saved into the following directory /gitlab/axe-testcafe-demo/artifacts/accessibilityReport.html
 ✓ Automated accessibility testing

 TestCafe tests with Axe (TypeScript Example)
HTML report was saved into the following directory /gitlab/axe-testcafe-demo/artifacts/example.html
 ✓ Automated accessibility testing

```

`npm test` command automatically opens html report file in your browser.

# Sample output

See [sample html report output](https://lpelypenko.github.io/axe-testcafe-demo/)
