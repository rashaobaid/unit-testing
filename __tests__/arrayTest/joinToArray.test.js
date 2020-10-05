const joinToArray =require('../../arrayMethod/joinToArray');

test.skip('should ', () => {
    let myData =[-2,1,12,5,11,9,12];
    expect(joinToArray(myData, "k")).toEqual([-2,"k",1,"k",12,"k",5,"k",11,"k",9,"k",12]);
    
})