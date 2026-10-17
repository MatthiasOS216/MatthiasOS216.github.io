// Run with: node docs/check-app-pages.cjs <playwright module> <output directory> [base URL]
const {chromium}=require(process.argv[2]);
const fs=require('fs'),path=require('path');
const out=path.resolve(process.argv[3]),base=process.argv[4]||'http://127.0.0.1:8802';
fs.mkdirSync(out,{recursive:true});
(async()=>{const browser=await chromium.launch({headless:true,...(process.env.ELVN_CHROME?{executablePath:process.env.ELVN_CHROME}:{})});const results=[];
try{for(const width of [320,390,1440]){const context=await browser.newContext({viewport:{width,height:width<500?844:1000},reducedMotion:'reduce'});
for(const slug of ['', 'cortex/','metona/','matthias/','resonance/','synapse/','coherence/','house-of-data/']){const page=await context.newPage(),errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(base+'/apps/'+slug,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready); await page.locator("img[loading]").evaluateAll(images=>images.forEach(i=>i.loading="eager")); await page.waitForFunction(()=>[...document.images].every(i=>i.complete));
const check=await page.evaluate(()=>({title:document.title,h1:document.querySelectorAll('h1').length,overflow:document.documentElement.scrollWidth>innerWidth,images:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),tinyLinks:[...document.querySelectorAll('a')].filter(a=>!a.classList.contains('skip')&&a.getBoundingClientRect().height<44).map(a=>a.textContent),links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href'))}));
if(check.h1!==1||check.overflow||check.images.length||check.tinyLinks.length||errors.length)throw Error(JSON.stringify({width,slug,check,errors}));
for(const href of check.links){if(href.startsWith('#'))continue;const res=await context.request.get(new URL(href,page.url()).href);if(!res.ok())throw Error('Broken '+href+' on '+slug);}
await page.keyboard.press('Tab');if(await page.locator(':focus').textContent()!=='Skip to content')throw Error('Skip not first');await page.keyboard.press('Enter');if(await page.locator(':focus').getAttribute('id')!=='main')throw Error('Skip target not focused');
await page.locator("#main").evaluate(el=>el.blur()); await page.screenshot({path:path.join(out,(slug.replace('/','')||'directory')+'-'+width+'.png'),fullPage:true});results.push({width,slug:slug||'directory',...check,errors});await page.close();}
await context.close();}
const context=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}}),page=await context.newPage();await page.goto(base+'/apps/');await page.getByRole('link',{name:/Coherence/}).click();if(!(await page.title()).includes('Coherence'))throw Error('No-JS link failed');results.push({noJavaScriptNavigation:true});await context.close();
fs.writeFileSync(path.join(out,'report.json'),JSON.stringify(results,null,2));console.log('PASS: 24 responsive pages, local links/images, focus, 44px targets, no-JS navigation.');
}finally{await browser.close();}})().catch(e=>{console.error(e);process.exitCode=1;});


