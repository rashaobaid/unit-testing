function entries(obj){
    if(Array.isArray(obj)){
        let result =[...new Map(Object.values(obj).map((e, idx) => ([idx, e])))];
       return result.sort();
    }
        let arr = [];
        for (var key in obj) {
            arr.push([key, obj[key]]);
        }
        return arr.sort();

    
}

module.exports = entries