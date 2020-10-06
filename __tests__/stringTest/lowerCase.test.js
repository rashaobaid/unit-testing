const lowerCase =require('../../stringMethod/lowerCase');

test('lowerCase ', () => {
    expect(lowerCase()).toBeUndefined();
    expect(lowerCase('ALI')).toBe('ali');
    expect(lowerCase('ali')).toBe('ali');
    expect(lowerCase(' ALI')).toBe('ali');
    expect(lowerCase('ALI-ahmad')).toBe('ali-ahmad');
    expect(lowerCase('ALI ahmad')).toBe('ali ahmad');
    expect(lowerCase(' ahmad ALI ')).toBe('ahmad ali');
})