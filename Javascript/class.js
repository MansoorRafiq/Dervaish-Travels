class Fruit
{
  constructor(name)
  {
    this.name;
  }

  fol()
  {
    console.log(this.name+ ' Is is too much tasty');
  }

  static Apple()
  {
    console.log('Apple is very popular Fruit');
  }
}

let add = new Fruit('Mango');
add.fol();