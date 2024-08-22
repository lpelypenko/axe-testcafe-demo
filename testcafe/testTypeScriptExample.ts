import { runAxe } from '@testcafe-community/axe';
import { createHtmlReport } from 'axe-html-reporter';
import { prettyPrintAxeReport } from 'axe-result-pretty-print';
import { t } from 'testcafe';

const customAxeRulesMap = require('../enableAxeRules.json');

const urls = {
    example: 'www.example.com',
    axeHtmlReporterPages: 'https://lpelypenko.github.io/axe-html-reporter/',
};

fixture('TestCafe tests with Axe (TypeScript Example)');

test.page(urls.example)('Automated accessibility testing', async (t) => {
    const axeContext = { exclude: [['select']] };
    const axeOptions = { rules: customAxeRulesMap };
    const { error, results } = await runAxe(axeContext, axeOptions);
    await t.expect(error).eql(null, `axe check failed with an error: ${error}`);
    // prints full report with failed violations and passed rules summary
    prettyPrintAxeReport({
        violations: results.violations,
        passes: results.passes,
        url: urls.example,
    });
    // creates html report with name 'example.html' that overwrite the default file name `accessibilityReport.html`
    createHtmlReport({
        results,
        options: {
            projectKey: 'EXAMPLE',
            outputDirPath: 'docs',
            reportFileName: 'index.html',
        },
    });
});

test.page(urls.axeHtmlReporterPages)(
    'Accessibility testing for axe-html-reporter github pages',
    async (t) => {
        const axeContext = { exclude: [['select']] };
        const { error, results } = await runAxe(axeContext);
        await t.expect(error).eql(null, `axe check failed with an error: ${error}`);
        // prints full report with failed violations and passed rules summary
        prettyPrintAxeReport({
            violations: results.violations,
            passes: results.passes,
            url: 'https://lpelypenko.github.io/axe-html-reporter/',
        });
        // creates html report with name 'axe-html-reporter-pages.html'
        createHtmlReport({
            results,
            options: {
                reportFileName: 'axe-html-reporter-pages.html',
            },
        });
    }
);


test.page(urls.axeHtmlReporterPages)(
    'Example of using raw axe results',
    async (t) => {
        const rawAxeResults = require('./rawAxeResults.json');
        createHtmlReport({
            results: rawAxeResults,
            options: { outputDir: 'artifacts', reportFileName: 'reportFromRawAxeResults.html' },
        });
    }
);
