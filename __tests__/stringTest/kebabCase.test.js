const kebabCase =require('../../stringMethod/kebabCase');

test('kebabCase ', () => {
    expect(kebabCase()).toBeUndefined();
    expect(kebabCase('camelCase')).toBe('camel-case')
    expect(kebabCase("ali-ahmad")).toBe("ali-ahmad")
    expect(kebabCase("ali_ahmad")).toBe("ali-ahmad")
    expect(kebabCase("ALI_AHMAD")).toBe("ali-ahmad")
    expect(kebabCase("ALi_AHMAd")).toBe("ali-ahmad")

   
})