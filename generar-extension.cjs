'use strict';
// Solo escribe una extensión JSON local. No descarga, instala, exporta ni ejecuta SDK.
const fs=require('node:fs'),path=require('node:path');
function crear(url,sha){
 if(typeof url!=='string'||!/^https:\/\/github\.com\/[A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+\.git$/.test(url))throw Error('Se requiere la URL HTTPS real del repositorio GitHub, terminada en .git, sin token ni fragmento.');
 if(!/^[a-f0-9]{40}$/.test(sha||'')||/^([a-f0-9])\1{39}$/.test(sha))throw Error('Se requiere el SHA completo real del commit (40 caracteres hexadecimales minúsculos); no usar un tag o una rama.');
 const ext=JSON.parse(fs.readFileSync(path.join(__dirname,'gdevelop/AuroraUmpManifestGit.plantilla.json'),'utf8'));
 ext.fullName='UMP experimental con manifiesto demo por Git';
 ext.description='Dependencias fijadas para diagnóstico; compatibilidad de descarga/instalación y Android pendiente. Sin operaciones nativas.';
 ext.dependencies.push({name:'Aurora Manifest Demo Git',exportName:'aurora-ump-manifest-demo-prototype',version:url+'#'+sha,type:'cordova'});
 return ext;
}
module.exports={crear};
if(require.main===module){try{if(process.argv.length!==4)throw Error('Uso: node generar-extension.cjs URL_GITHUB_REAL SHA_COMMIT_REAL');const ext=crear(process.argv[2],process.argv[3]),dest=path.join(__dirname,'gdevelop/AuroraUmpManifestGit.json');fs.writeFileSync(dest,JSON.stringify(ext,null,2)+'\n',{flag:'wx'});console.log('Extensión generada localmente; URL/SHA deben corresponder a un repositorio real revisado. No se comprobó su existencia por red.');}catch(e){console.error(e.message);process.exitCode=1}}
