//Pizza Ordering Application
//Constructors:
//Order: contains user name, phone number, pizzas ordered and price.
//Pizza: contains size, toppings, pizza type (normal, thin, deep dish, stuffed crust)
//objects
//size: list of sizes and price of each
//type: type of pizza and prices of each
//topping: list contains price of each individual topping)
//
//make an object of toppings with values set for each toppings
//make a pizza constructor
//populate a new pizza object with toppings and tally the total
//make size and type objects and add it to the pizza and output total




function Pizza(size,top,type) {
  this.size = size;
  this.top = top;
  this.type = type;
}

Pizza.prototype.price = function() {
  return sum(this);
}

var sizes = {
  small:     6,
  medium:    8,
  large:     10,
  xlarge:    12,
}

var types = {
  normal:     0,
  thin:    1,
  deep:     3,
  stuffed:    2,
}

var toppings = {
  cheese:     1,
  egg:        1,
  pepperoni:  2,
  sausage:    2,
  ham:        2,
  anchovy:    2,
  olive:      .5,
  mushroom:   .5,
  bellPeppers:.5,
  pineapple:  .5,
  spinach:    .5,
  onion:      .5
}

var meatlovers = new Pizza(sizes.large,[],types.stuffed);

function sum( obj ) {                                                   //adds up the values inside an object, checks for arrays and adds up those values as well
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      if (Array.isArray(obj[el])) {
        for (var i = 0; i < obj[el].length; i++) {
          sum += obj[el][i];
        }
      } else {
        sum += parseFloat( obj[el] );
      }
    }
  }
  return sum;
}




$(document).ready(function(){
meatlovers.top.push(toppings.cheese);
meatlovers.top.push(toppings.pepperoni);
meatlovers.top.push(toppings.sausage);
meatlovers.top.push(toppings.ham);

console.log(meatlovers.price());






});
