export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Daemon', 'Zombie'];

    if (name.length < 2 || name.length > 10) {
      throw new Error('неверное имя');
    } else {
      this.name = name;
    }

    if (!types.includes(type)) {
      throw new Error('неверный тип');
    } else {
      this.type = type;
    }

    this.health = 100;
    this.level = 1;

    this.attack = undefined;
    this.defence = undefined;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack = (this.attack * 0.2) + this.attack;
      this.defence = (this.defence * 0.2) + this.defence;
      this.health = 100;
    } else {
      throw new Error('невозможно повысить level умершего');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
