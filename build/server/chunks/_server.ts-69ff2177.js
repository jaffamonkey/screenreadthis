import * as puppeteer from 'puppeteer';

const POST = async ({ request, setHeaders }) => {
  const requestParams = await request.json();
  const requestedUrl = requestParams.url;
  console.log(`GET /getA11yTree for URL: `, requestedUrl, "...");
  console.log("Fire up puppeteer ...");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(requestedUrl, { waitUntil: "domcontentloaded" });
  const accessibilityTreeSnapshot = await page.accessibility.snapshot();
  let htmlLang = await page.evaluate(() => {
    return document.querySelector("html").getAttribute("lang");
  });
  console.log("evaluate page finished,", htmlLang);
  if (htmlLang === null) {
    htmlLang = "";
  }
  await browser.close();
  console.log("Successful! Sending json response, language detected: ...", htmlLang);
  const response = { ...accessibilityTreeSnapshot };
  response.htmlLangAttribute = htmlLang;
  return new Response(JSON.stringify(response));
};

export { POST };
//# sourceMappingURL=_server.ts-69ff2177.js.map
