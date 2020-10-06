const entries =require('../../objectMethod/entries');

test('entries ', () => {
    expect(entries([])).toEqual([]);
    expect(entries({})).toEqual([]);
    expect(entries(['a', 'b', 'c'])).toEqual([[0, 'a'],[1, 'b'],[2, 'c']]);
    expect(entries({ name: "mm", age:"sss" })).toEqual([["name","mm"],["age","sss"]]);

    
  
   
})