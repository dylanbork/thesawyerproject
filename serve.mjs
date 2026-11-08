import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root=resolve('dist');
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'application/javascript; charset=utf-8','.svg':'image/svg+xml','.jpeg':'image/jpeg','.png':'image/png'};
async function sendError(res,status){
 try{
  const data=await readFile(resolve(root,`${status}.html`));
  res.writeHead(status,{'Content-Type':types['.html']});
  res.end(data);
 }catch{
  res.writeHead(status,{'Content-Type':'text/plain; charset=utf-8'});
  res.end(status===404?'Page not found.':'Something went wrong.');
 }
}

http.createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,'http://localhost');
  const path=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
  if(!path.startsWith(root+sep)){
   res.writeHead(403,{'Content-Type':'text/plain; charset=utf-8'});
   return res.end('Access denied.');
  }
  const data=await readFile(path);
  res.writeHead(200,{'Content-Type':types[extname(path)]||'application/octet-stream'});
  res.end(data);
 }catch(error){
  await sendError(res,['ENOENT','ENOTDIR','EISDIR'].includes(error.code)?404:500);
 }
}).listen(Number(process.env.PORT||4173),'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${process.env.PORT||4173}`));
