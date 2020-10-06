function entries(obj){
        let arr = [];
        for (var key in obj) {
            arr.push([key, obj[key]]);
        }
        return arr;

}

module.exports = entries