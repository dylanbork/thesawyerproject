import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {pages,donation} from './src/content.mjs';
for(const page of Object.keys(pages)){
 const html=await readFile(`dist/${page}`,'utf8');
 assert.equal((html.match(/<h1>/g)||[]).length,1,`${page}: one h1`);
 assert(html.includes('id="main"')&&html.includes('name="viewport"'),`${page}: landmarks and viewport`);
 assert(html.includes(donation),`${page}: supplied campaign`);
 for(const [,url] of html.matchAll(/(?:href|src)="([^"]+)"/g)){
  if(/^(https?:|tel:|sms:|#)/.test(url))continue;
  await access(`dist/${url}`);
 }
 assert(!/href="#"/.test(html),`${page}: no placeholder links`);
}
console.log(`Passed: all ${Object.keys(pages).length} pages, local links and assets, donation destinations, landmarks, and titles.`);
