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
//take in name and phone for new order
//take in pizza and accumulate pizza price in pizza order objects
//


function PizzaOrder(name,phone,pizza,price) {
  this.name = name;
  this.phone = phone;
  this.pizza = pizza;
  this.price = price;
}

function Pizza(size,sizeStr,top,topStr,type,typeStr) {
  this.size = size;
  this.sizeStr = sizeStr;
  this.top = top;
  this.topStr = topStr;
  this.type = type;
  this.typeStr = typeStr;
}

Pizza.prototype.price = function() {
  return sum(this);
}

var sizes = {
  small:     6,
  medium:    8,
  large:     10,
  xlarge:    12,
}                               // size object

var types = {
  normal:     0,
  thin:       1,
  deep:       3,
  stuffed:    2,
}                               // types object

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
}                            // topping object

var meatlovers = new Pizza(0,"",[],[],0,"");
var pOrder = new PizzaOrder("","",[],[]);

function sum( obj ) {                                  //calculates price of pizza                 //adds up the values inside an object, checks for arrays and adds up those values as well
  var sum = 0;
  for( var el in obj ) {
    if( obj.hasOwnProperty( el ) ) {
      if (Array.isArray(obj[el])) {
        for (var i = 0; i < obj[el].length; i++) {
          if(isNaN(obj[el])) {
          } else {
          sum += obj[el][i];
        }
        }
      } else {
        if(isNaN(obj[el])) {
        } else {
        sum += parseFloat( obj[el] );
      }
      }
    }
  }
  return sum;
}


function pizzaWrite(pizzaObject){             //takes in name of pizza object, reads form and calculates price, clears topping in pizza object
  var pizzaSize = $('input[name=Size]:checked').val();
  var pizzaType = $('input[name=pizzaType]:checked').val();
  pizzaObject.size = sizes[pizzaSize];
  pizzaObject.type = types[pizzaType];
  pizzaObject.sizeStr = pizzaSize;
  pizzaObject.typeStr = pizzaType;

  $("input:checkbox[name=Topping]:checked").each(function(){
    var toppingChecked = $(this).val();
    pizzaObject.top.push(toppings[toppingChecked]);
    pizzaObject.topStr.push(toppingChecked);
  });

  console.log(pizzaObject.sizeStr);
  console.log(pizzaObject.typeStr);
  for (var i = 0; i < pizzaObject.topStr.length; i++) {
    console.log(pizzaObject.topStr[i]);
  };
  console.log(pizzaObject.price());           //output pizza price
  pizzaObject.top = [];
  pizzaObject.topStr = [];
}


$(document).ready(function(){

  $("form#make_pizza").submit(function(event){
    event.preventDefault();
    pizzaWrite(meatlovers);


  });









});
