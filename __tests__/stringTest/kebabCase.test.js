const kebabCase =require('../../stringMethod/kebabCase');

test('kebabCase ', () => {
    expect(kebabCase()).toBeUndefined();
    expect(kebabCase("AliAhmad")).toBe("ali-ahmad")
    expect(kebabCase("aliAhmad")).toBe("ali-ahmad")
    expect(kebabCase("ali-ahmad")).toBe("ali-ahmad")
    expect(kebabCase("ali_ahmad")).toBe("ali-ahmad")
    expect(kebabCase("ALI_AHMAD")).toBe("ali-ahmad")
    expect(kebabCase("ALi_AHMAd")).toBe("ali-ahmad")
    expect(kebabCase("ALi_AHMAd_AHMAd")).toBe("ali-ahmad-ahmad")
    expect(kebabCase("ALi_AHMAdAHMAd")).toBe("ali-ahmad-ahmad") 
    expect(kebabCase("ALi")).toBe("ali")
})