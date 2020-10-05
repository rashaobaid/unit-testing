function removeDuplicate (array,fn ){
    if (typeof fn !== "function") {
        if(Array.isArray(array)){ 
         return Array.from(new Set(array));
     }
    else{
       return Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse);
      }
    }
    const res = new Map();
   const r = {};
    array.forEach(item=>{
   if (!res.has(fn(item))) {
    res.set(fn(item), item)
  }
  })
 return Array.from(res.values());
    
}
   
module.exports = removeDuplicate