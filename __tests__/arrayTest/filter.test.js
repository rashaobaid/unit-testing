const filter =require('../../arrayMethod/filter');

test('should ', () => {
    let myData =[1,5,10,11,8,9,12];
    expect(filter(myData, 2)).toEqual([5,10,11,8,9,12]);
    
})
