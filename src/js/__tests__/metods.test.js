import Magician from '../magician';

test('levelUp health=100', () => {
  const hero = new Magician('Character');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'Character',
    type: 'Magician',
    health: 100,
    attack: 12,
    defence: 48,
    level: 2,
  });
});

test('levelUp health=0', () => {
  const hero = new Magician('Character');
  hero.health = 0;
  expect(() => {
    hero.levelUp();
  }).toThrowError('невозможно повысить level умершего');
});

test('damage, health=100, points=20', () => {
  const hero = new Magician('Character');
  hero.damage(20);
  expect(hero).toEqual({
    name: 'Character',
    type: 'Magician',
    health: 88,
    attack: 10,
    defence: 40,
    level: 1,
  });
});

test('damage, health=10, points=30', () => {
  const hero = new Magician('Character');
  hero.health = 10;
  hero.damage(30);
  expect(hero).toEqual({
    name: 'Character',
    type: 'Magician',
    health: 0,
    attack: 10,
    defence: 40,
    level: 1,
  });
});
