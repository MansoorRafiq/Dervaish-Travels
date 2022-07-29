const Mango = 
{
  color : 'Yellow',
  price : 120,
  weight : 120,
  about : function()
  {
    return 'This Mango price is ${this.price} RS and the color is ${this.color} Name';
  }
}

console.log(Mango.about());