const filter =require('../../arrayMethod/filter');

test('should ', () => {
    let myData =[1,5,12,0];
    expect(filter(myData, x=> x>2)).toEqual([5,12]);
    expect(filter()).toEqual([]);
    expect(filter(myData)).toEqual([]);
    expect(filter([])).toEqual([]);
    expect(filter([],x=> x>2)).toEqual([]);
    expect(filter({})).toEqual([]);
    expect(filter({},x=> x>2)).toEqual([]);
    expect(filter({a:"123",b:"1",c:"5"},x=> x>2)).toEqual([{a:"123",c:"5"}])
    expect(filter({"14124":"123", [124]:"1234",c:"5"},x=> x==5)).toEqual([{c:"5"}])
    expect(filter({"14124":"1", [124]:"30"},x=> x>3)).toEqual([{[124]:"30"}])
    
})
