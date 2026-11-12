import { readFile } from 'node:fs/promises';
const {resources}=JSON.parse(await readFile('catalog.json','utf8'));
let failed=0;
for(const r of resources){
 try{
   const res=await fetch(r.url,{method:'HEAD',redirect:'follow',signal:AbortSignal.timeout(12000),headers:{'user-agent':'AwesomeKamal-LinkChecker/1.0'}});
   if(res.status>=400){console.warn(r.id+' returned '+res.status);if(res.status===404||res.status===410)failed++;}
 }catch(e){console.warn(r.id+': '+e.message);}
}
if(failed)console.warn(failed+' dead links to review (advisory only)');
