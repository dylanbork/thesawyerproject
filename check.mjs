import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {pages,donation} from './src/content.mjs';
import {errorPages} from './src/error-pages.mjs';
for(const page of Object.keys({...pages,...errorPages})){
 const html=await readFile(`dist/${page}`,'utf8');
 assert.equal((html.match(/<h1(?:\s[^>]*)?>/g)||[]).length,1,`${page}: one h1`);
 assert(html.includes('id="main"')&&html.includes('name="viewport"'),`${page}: landmarks and viewport`);
 assert(html.includes(donation),`${page}: supplied campaign`);
 for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|tel:|sms:|#)/.test(url))continue;
  await access(`dist/${url}`);
 }
 assert(!/href="#"/.test(html),`${page}: no placeholder links`);
 if(errorPages[page]){
  assert(html.includes('name="robots" content="noindex"'),`${page}: excluded from indexing`);
  assert(!/(?:href|src)="(?![a-z]+:|\/|#)/i.test(html),`${page}: links and assets work at nested missing URLs`);
 }
}
console.log(`Passed: ${Object.keys(pages).length} content pages and ${Object.keys(errorPages).length} error pages, local links and assets, donation destinations, landmarks, and error-page URL handling.`);
