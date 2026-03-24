const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle0' });
  
  const title = await page.title();
  const description = await page.$eval("meta[name='description']", el => el.content).catch(() => 'No description');
  const canonical = await page.$eval("link[rel='canonical']", el => el.href).catch(() => 'No canonical');
  const ogTitle = await page.$eval("meta[property='og:title']", el => el.content).catch(() => 'No og:title');
  const twitterSite = await page.$eval("meta[name='twitter:site']", el => el.content).catch(() => 'No twitter:site');
  const jsonLd = await page.$eval("script[type='application/ld+json']", el => el.innerText).catch(() => 'No structured data');
  
  console.log('--- Home Page SEO ---');
  console.log('Title:', title);
  console.log('Description:', description);
  console.log('Canonical:', canonical);
  console.log('OG Title:', ogTitle);
  console.log('Twitter Site:', twitterSite);
  console.log('Organization Schema present:', jsonLd !== 'No structured data');

  await page.goto('http://localhost:3000/privacy-policy', { waitUntil: 'networkidle0' });
  const ppTitle = await page.title();
  const ppRobots = await page.$eval("meta[name='robots']", el => el.content).catch(() => 'No robots tag');
  console.log('\n--- Privacy Policy SEO ---');
  console.log('Title:', ppTitle);
  console.log('Robots:', ppRobots);

  await browser.close();
})();
