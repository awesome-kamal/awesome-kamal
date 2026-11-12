import {readFile,writeFile} from 'node:fs/promises';
const groups = [["official","Official"],["deployment","Deployment tools"],["configuration","Configuration"],["operations","Operations"],["infrastructure","Infrastructure"],["examples","Examples & recipes"],["learning","Learning"]];
const resources=[];
const ids=new Set(), urls=new Set();
for(const [cat] of groups){
 const entries=JSON.parse(await readFile('resources/'+cat+'.json','utf8'));
 if(!Array.isArray(entries))throw Error(cat+': expected array');
 for(const entry of entries){
  for(const field of ['id','name','url','category','description','kind','tags']) if(entry[field]==null)throw Error(cat+': missing '+field);
  if(!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(entry.id))throw Error('Invalid ID '+entry.id);
  if(entry.category!==cat)throw Error(entry.id+': wrong category');
  if(!Array.isArray(entry.tags)||entry.tags.some(x=>typeof x!=='string'))throw Error(entry.id+': tags');
  if(typeof entry.description!=='string'||!entry.description.trim()||entry.description.length>220)throw Error(entry.id+': description');
  const url=new URL(entry.url); if(url.protocol!=='https:')throw Error(entry.id+': HTTPS required');
  const normalized=(url.origin+url.pathname.replace(/\\/$/,'' )).toLowerCase();
  if(ids.has(entry.id)||urls.has(normalized))throw Error('Duplicate '+entry.id);
  ids.add(entry.id);urls.add(normalized);resources.push(entry);
 }
}
const c={schema_version:1,categories:groups.map(([id,name])=>({id,name})),resources};
const lines=["# Awesome Kamal","","A community-curated directory of tools, guides, and resources for deploying and operating with [Kamal](https://kamal-deploy.org/).","","**Website:** [awesomekamal.com](https://awesomekamal.com/) · **Suggest a resource:** [GitHub issues](https://github.com/awesome-kamal/awesome-kamal/issues/new/choose)","","> Independent community project, supported by [Upstate](https://upstate.run/). Not affiliated with the official Kamal maintainers.",""];
for(const group of c.categories){
 lines.push("## "+group.name,"");
 for(const r of c.resources.filter(x=>x.category===group.id))lines.push("- ["+r.name+"]("+r.url+") — "+r.description+(r.kind==='commercial'?' **(commercial)**':''));
 lines.push("");
}
lines.push("---","","Contributions welcome — see [CONTRIBUTING.md](CONTRIBUTING.md). Repository existence was checked on November 12, 2026, but functionality and compatibility have not been tested. Listings are not endorsements.","","Inspired by the original [awesome-kamal](https://github.com/anthonynsimon/awesome-kamal) directory. Catalog metadata is dedicated to the public domain under [CC0](LICENSE).","");
const artifacts=[['README.md',lines.join('\\n')],['catalog.json',JSON.stringify(c,null,2)+'\\n']];
const check=process.argv.includes('--check');
for(const [path,output] of artifacts){if(check){const current=await readFile(path,'utf8').catch(()=>null);if(current!==output)throw Error('Stale '+path+'; run npm run build');}else await writeFile(path,output);}
console.log((check?'Validated ':'Generated ')+resources.length+' entries');
