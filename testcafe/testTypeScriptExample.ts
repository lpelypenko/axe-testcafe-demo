import { runAxe } from '@testcafe-community/axe';
import { createHtmlReport } from 'axe-html-reporter';
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { t } from 'testcafe';
const customAxeRulesMap = require("../enableAxeRules.json");

fixture('TestCafe tests with Axe (TypeScript Example)').page('http://example.com');

test('Automated accessibility testing', async (t) => {
    const axeContext = { exclude: [['select']] };
    const axeOptions = { rules: customAxeRulesMap };
    const { error, results } = await runAxe(axeContext, axeOptions);
    await t.expect(error).eql(null, `axe check failed with an error: ${error}`);
    // prints full report with failed violations and passed rules summary
    prettyPrintAxeReport({
        violations: results.violations,
        passes: results.passes,
        url: 'www.example.com',
    });
    // creates html report with the default file name `accessibilityReport.html`
    createHtmlReport({
        violations: results.violations,
        passes: results.passes,
        incomplete: results.incomplete,
        url: results.url,
        projectKey: 'EXAMPLE',
        reportFileName: 'example.html'
    });
});
