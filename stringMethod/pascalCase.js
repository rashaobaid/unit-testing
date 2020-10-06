const pascalCase =(str) =>{
    if(str==undefined){
        return undefined
    }
     
    return str.toLowerCase().split(/[.\-_*$ +~`#\s \W]/).map((word)=> { 
        return (word.charAt(0).toUpperCase() + word.slice(1)); 
      }).join(''); 
   
}
module.exports = pascalCase;