const pascalCase =require('../../stringMethod/pascalCase');

test('pascalCase ', () => {
    expect(pascalCase()).toBeUndefined();
    expect(pascalCase('a')).toBe('A');
    expect(pascalCase('foo bar baz')).toBe('FooBarBaz');
    expect(pascalCase('  foo bar baz  ')).toBe('FooBarBaz');
    expect(pascalCase('foo_bar-baz')).toBe('FooBarBaz');
    expect(pascalCase('foo.bar.baz')).toBe('FooBarBaz');
    expect(pascalCase('#foo+bar*baz')).toBe('FooBarBaz');
    expect(pascalCase('$foo~bar`baz')).toBe('FooBarBaz');
    expect(pascalCase('foo2bar[5baz')).toBe('Foo2bar5baz');
   
})