const removeDuplicate =require('../../arrayMethod/removeDuplicate');
test('should ', () => {
    
    let myData =[1,5,10,11,8,9,12,5,11,8,5,10,-2,1]; 
    expect(removeDuplicate(myData)).toEqual([1, 5, 10, 11, 8, 9, 12, -2])
})