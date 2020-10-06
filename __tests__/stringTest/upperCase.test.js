const upperCase =require('../../stringMethod/upperCase');

test('upperCase ', () => {
    expect(upperCase()).toBeUndefined();
    expect(upperCase('ali')).toBe('ALI');
    expect(upperCase('ALI')).toBe('ALI');
    expect(upperCase(' aLi')).toBe('ALI');
    expect(upperCase('ALI-ahmad')).toBe('ALI-AHMAD');
    expect(upperCase('ALI ahmad')).toBe('ALI AHMAD');
    expect(upperCase(' ahmad ALI')).toBe('AHMAD ALI');
})
 
