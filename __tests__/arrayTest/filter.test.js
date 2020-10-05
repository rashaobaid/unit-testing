const filter =require('../../arrayMethod/filter');

test('should ', () => {
    let myData =[1,5,12,0];
    expect(filter(myData, x=> x>2)).toEqual([5,12]);
    expect(filter([])).toEqual([]);
    expect(filter()).toEqual([]);
    expect(filter([],x=> x>2)).toEqual([]);
    expect(filter(myData)).toEqual([]);
    
   
    
})
