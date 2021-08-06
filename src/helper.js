const chromium = require("chrome-aws-lambda");
 
const generatePDF = async (html) => {
  let browser = null;
  try {
      const executablePath = await chromium.executablePath;
      browser = await chromium.puppeteer.launch({
          args: chromium.args,
          executablePath,
        });
      const page = await browser.newPage();
      const loaded = page.waitForNavigation({
        waitUntil: "load",
      });

      await page.setContent(html, { waitUntil: 'networkidle2' });
      await page.addStyleTag({path: 'styles/pdf.css'})
      await loaded;
      await page.evaluateHandle('document.fonts.ready');

      return await page.pdf({path: 'intro.pdf', format: 'A4' });
  } catch (error) {
    return error;
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }
}

export { generatePDF }