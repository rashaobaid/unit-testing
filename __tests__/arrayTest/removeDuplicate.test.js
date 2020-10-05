const removeDuplicate =require('../../arrayMethod/removeDuplicate');
test('should ', () => {
    
    let myData =[1,2,2,1,4]; 
    expect(removeDuplicate([])).toEqual([]);
    expect(removeDuplicate(myData)).toEqual([1,2,4]);
    expect(removeDuplicate([{a:1, b:2} , {a:1, b:3} ], x=>x.a)).toEqual([{a:1, b:2}].sort());
    expect(removeDuplicate([{a:1, b:2} , {a:1, b:3} ], x=>x.b )).toEqual([{a:1, b:2} ,{a:1, b:3}].sort());
    expect(removeDuplicate([ {a:1}, {a:1},{a:2}])).toEqual([{a:1},{a:2}]);
    expect(removeDuplicate([{a:1, b:2},{a:1, b:3} ])).toEqual([{a:1, b:2},{a:1, b:3}]);
    expect(removeDuplicate([{a:1, b:2},{a:1, b:2}])).toEqual([{a:1, b:2}]);
})
 

