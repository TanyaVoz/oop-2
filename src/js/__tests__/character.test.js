import Character from '../character';

test('valid arguments', () => {
  const result = new Character('Character', 'Magician');
  expect(result).toEqual({
    name: 'Character',
    type: 'Magician',
    health: 100,
    attack: undefined,
    defence: undefined,
    level: 1,
  });
});

test('short name', () => {
  expect(() => new Character('M')).toThrowError('неверное имя');
});

test('long name', () => {
  expect(() => new Character('CharacterCharacter', 'Magician')).toThrowError('неверное имя');
});

test('invalid type', () => {
  expect(() => new Character('Character', 'Magicianman')).toThrowError('неверный тип');
});
