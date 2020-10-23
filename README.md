# axe-testcafe-demo

This project meant to provide a simple demo of using TestCafe with axe-core and additional helpers.
[axe-core](https://github.com/dequelabs/axe-core)

TestCafe framework specific wrapper: 
[@testcafe-community/axe](https://www.npmjs.com/package/@testcafe-community/axe) 

Helper to create HTML report from aXe violations, passes, incomplete and incompatible results: 
[axe-html-reporter](https://www.npmjs.com/package/axe-html-reporter)

Helper to provide pretty console output for the axe results: 
[axe-result-pretty-print](https://www.npmjs.com/package/axe-result-pretty-print)

# How to use

Install packages and run the tests `npm install && npm test`

```shell script
$ npm run test

> axe-testcafe-demo@1.0.0 test /gitlab/axe-testcafe-demo
> testcafe chrome:headless testcafe/** && open ./artifacts/accessibilityReport.html

The "src", "browsers" options from the configuration file will be ignored.
 Running tests in:
 - Chrome xx.xx / OS xxx

 TestCafe tests with Axe
Axe core library found 9 violations for the www.example.com
┌─────────┬───────────────────────────────────────────────────────────────────┬─────────────────────┬────────────────────┬────────────┬───────┐
│ (index) │                            description                            │         id          │        wcag        │   impact   │ nodes │
├─────────┼───────────────────────────────────────────────────────────────────┼─────────────────────┼────────────────────┼────────────┼───────┤
│    0    │ 'Ensures role attribute has an appropriate value for the element' │ 'aria-allowed-role' │  'Best practice'   │  'minor'   │   1   │
│    1    │      'Ensures the order of headings is semantically correct'      │   'heading-order'   │  'Best practice'   │ 'moderate' │   1   │
│    2    │             'Ensures every form element has a label'              │       'label'       │ 'WCAG 2.0 Level A' │ 'critical' │   1   │
│    3    │       'Ensures all page content is contained by landmarks'        │      'region'       │  'Best practice'   │ 'moderate' │   6   │
└─────────┴───────────────────────────────────────────────────────────────────┴─────────────────────┴────────────────────┴────────────┴───────┘
1. id: 'aria-allowed-role'      learn more: https://dequeuniversity.com/rules/axe/3.5/aria-allowed-role?application=axeAPI
   name: ARIA role must be appropriate for the element
   description: Ensures role attribute has an appropriate value for the element
   WCAG: 'Best practice'
   Affected elements:
        Selector: "#toggle"     Source code: <input type="checkbox" role="button" aria-haspopup="true" id="toggle" class="hide-visually">

2. id: 'heading-order'  learn more: https://dequeuniversity.com/rules/axe/3.5/heading-order?application=axeAPI
   name: Heading levels should only increase by one
   description: Ensures the order of headings is semantically correct
   WCAG: 'Best practice'
   Affected elements:
        Selector: "h4"  Source code: <h4>Latest from the Blog</h4>

3. id: 'label'  learn more: https://dequeuniversity.com/rules/axe/3.5/label?application=axeAPI
   name: Form elements must have labels
   description: Ensures every form element has a label
   WCAG: 'WCAG 2.0 Level A'
   Affected elements:
        Selector: "#toggle"     Source code: <input type="checkbox" role="button" aria-haspopup="true" id="toggle" class="hide-visually">

4. id: 'region' learn more: https://dequeuniversity.com/rules/axe/3.5/region?application=axeAPI
   name: All page content must be contained by landmarks
   description: Ensures all page content is contained by landmarks
   WCAG: 'Best practice'
   Affected elements:
        Selector: ".marketing-bar-text" Source code: <div class="marketing-bar-text">Create your website at WordPress.com</div>
        Selector: ".marketing-bar-button"       Source code: <a class="marketing-bar-button" href="https://wordpress.com/start/?ref=marketing_bar">Get started</a>
        Selector: ".widget"     Source code: <div class="widget widget_eu_cookie_law_widget" style="display: block;">
        Selector: ".actnbr-btn > .actnbr-action.actnbr-actn-follow[href=""]"    Source code: <a class="actnbr-action actnbr-actn-follow" href="">
        Selector: ".gridicon__ellipsis" Source code: <svg class="gridicon gridicon__ellipsis" height="24" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g><circle cx="5" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle></g></svg>
        Selector: "#wpstats"    Source code: <img src="https://pixel.wp.com/g.gif?blog=184117659&amp;v=wpcom&amp;tz=9&amp;user_id=0&amp;post=5&amp;subd=a11ydemo&amp;host=a11ydemo.wordpress.com&amp;ref=http%3A%2F%2F192.168.0.6%3A58762%2Fbrowser%2Fidle%2FqzGnDMP&amp;fcp=864&amp;rand=0.8896532220700655" alt=":)" id="wpstats">

Page passed 44 axe rules: aria-allowed-attr, aria-hidden-body, aria-required-attr, aria-required-children, aria-required-parent, aria-roles, aria-valid-attr-value, aria-valid-attr, avoid-inline-spacing, button-name, bypass, color-contrast, document-title, duplicate-id-aria, duplicate-id, empty-heading, form-field-multiple-labels, heading-order, hidden-content, html-has-lang, html-lang-valid, image-alt, image-redundant-alt, input-button-name, label-title-only, label, landmark-banner-is-top-level, landmark-contentinfo-is-top-level, landmark-main-is-top-level, landmark-no-duplicate-banner, landmark-no-duplicate-contentinfo, landmark-no-duplicate-main, landmark-one-main, landmark-unique, link-in-text-block, link-name, list, listitem, meta-viewport-large, meta-viewport, p-as-heading, page-has-heading-one, region, skip-link
HTML report was saved into the following directory /gitlab/axe-testcafe-demo/artifacts/accessibilityReport.html
 ✓ Automated accessibility testing

 TestCafe tests with Axe (TypeScript Example)
Axe core library found 3 violations for the www.example.com
┌─────────┬──────────────────────────────────────────────────────┬─────────────────────┬────────────────────┬────────────┬───────┐
│ (index) │                     description                      │         id          │        wcag        │   impact   │ nodes │
├─────────┼──────────────────────────────────────────────────────┼─────────────────────┼────────────────────┼────────────┼───────┤
│    0    │  'Ensures every HTML document has a lang attribute'  │   'html-has-lang'   │ 'WCAG 2.0 Level A' │ 'serious'  │   1   │
│    1    │      'Ensures the document has a main landmark'      │ 'landmark-one-main' │  'Best practice'   │ 'moderate' │   1   │
│    2    │ 'Ensures all page content is contained by landmarks' │      'region'       │  'Best practice'   │ 'moderate' │   1   │
└─────────┴──────────────────────────────────────────────────────┴─────────────────────┴────────────────────┴────────────┴───────┘
1. id: 'html-has-lang'  learn more: https://dequeuniversity.com/rules/axe/3.5/html-has-lang?application=axeAPI
   name: <html> element must have a lang attribute
   description: Ensures every HTML document has a lang attribute
   WCAG: 'WCAG 2.0 Level A'
   Affected elements:
        Selector: "html"        Source code: <html>

2. id: 'landmark-one-main'      learn more: https://dequeuniversity.com/rules/axe/3.5/landmark-one-main?application=axeAPI
   name: Document must have one main landmark
   description: Ensures the document has a main landmark
   WCAG: 'Best practice'
   Affected elements:
        Selector: "html"        Source code: <html>

3. id: 'region' learn more: https://dequeuniversity.com/rules/axe/3.5/region?application=axeAPI
   name: All page content must be contained by landmarks
   description: Ensures all page content is contained by landmarks
   WCAG: 'Best practice'
   Affected elements:
        Selector: "div" Source code: <div>
    <h1>Example Domain</h1>
    <p>This domain is for use in illustrative examples in documents. You may use this
    domain in literature without prior coordination or asking for permission.</p>
    <p><a href="https://www.iana.org/domains/example">More information...</a></p>
</div>

Page passed 12 axe rules: aria-hidden-body, bypass, color-contrast, document-title, empty-heading, heading-order, hidden-content, link-name, meta-viewport-large, meta-viewport, page-has-heading-one, region
HTML report was saved into the following directory /gitlab/axe-testcafe-demo/artifacts/example.html
 ✓ Automated accessibility testing


 2 passed (3s)


```

`npm test` command automatically opens html report file in your browser.

# Sample output

See [sample html report output](https://lpelypenko.github.io/axe-html-reporter/)
