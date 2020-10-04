const map =require('../../arrayMethod/map');
const keys =require('../../objectMethod/keys');

test('should ', () => {
    
let myData =[1,5,10,11,8,9,12];
expect( map( myData, x=>x+1) ) .toEqual([2,6,11,12,9,10,13])
})



test("test keys", ()=>{
    expect(keys([])).toEqual([])
    expect(keys({})).toEqual([])
    expect(keys({a:"123"})).toEqual(["a"])
    expect(keys({"14124":"123", [124]:"1234"})).toEqual(["124","14124"])
    expect(keys({"14124":"123", [124]:"1234"})).toEqual(["14124","124"].sort())
    expect(keys({"14124":"123", [124]:"1234"}).includes("124")).toBe(true)
    expect(keys({"14124":"123", [124]:"1234"}).includes("14124")).toBe(true)
    const myArr = []
    myArr.push(1);
    myArr["user"] = "ahmad";
    expect(keys(myArr)).toEqual(["0","user"].sort())
} )



// test ("kebab-case ",()=>{

//  expect(toKebab("AliAhmad")).toBe("ali-ahmad")
//  expect(toKebab("aliAhmad")).toBe("ali-ahmad")
//  expect(toKebab("ali-ahmad")).toBe("ali-ahmad")
//  expect(toKebab("ali_ahmad")).toBe("ali-ahmad")
//  expect(toKebab("ALI_AHMAD")).toBe("ali-ahmad")
//  expect(toKebab("ALi_AHMAd")).toBe("ali-ahmad")


// })





