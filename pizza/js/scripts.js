function Pizza(size,toppings,crust) {
  this.size = size,
  this.toppings = toppings,
  this.crust = crust,
  this.price = 0
}

 Pizza.prototype.getPrice = function(size,toppings,crust) {

  if(this.size == medium){
    this.price += 10;
  }else if(this.size === large){
    this.price += 20;
  }else if(this.size === catering){
    this.price+= 25
  }else if(this.toppings === extraMeat){
    this.price += 5;
  }else if(this.toppings === extraCheese){
    this.price += 3;
  }else if (this.crust === thinCrust){
    this.price += 4;
  }else if(this.crust === deepDish) {
    this.price += 7;
  }else if (this.crust === glutenFree){
    this.price += 10;
  }
return this.price;
console.log(this.price);
}
var customPizza = new Pizza();
var price = customPizza.getPrice();
var medium = $("#medium:checked")
var large = $("#large:checked")
var catering = $("#catering:checked")
var extraMeat = $("#xPep:checked")
var extraCheese = $("#xCheese:checked")
var thinCrust = $("#thin:checked")
var deepDish = $("#deep:checked")
var glutenFree = $("#glutenFree:checked")



  //
  // Pizza.prototype.getPrice();


// Pizza.prototype.extraToppings = function() {
//   if(this.toppings === extraMeat){
//     this.price += 5;
//   }else if(this.toppings === extraCheese) {
//     this.price += 3;
//   }else {
//   } return this.price;
// }
// Pizza.prototype.crust = function() {
//   if (this.crust === thinCrust){
//     this.price += 4;
//   }else if(this.crust === deepDish) {
//   this.price += 7;
// }else if (this.crust === glutenFree){
//     this.price += 10;
//   }else{
//
//   }return this.price;
// }
// Pizza.prototype.getPrice = function() {
// this.price = (Pizza.size + Pizza.extraToppings + Pizza.crust);
// return this.price
// }

//
$(document).ready(function(){
  $("#placeOrder").submit(function(event){
    event.preventDefault();

    $("#displayPrice").text(price);
  });


})
console.log(price);
// //
// var customPizza = new Pizza(sizeInput,toppingsInput,crustInput)
// var sizeInput = (medium+large+catering)
// var toppingsInput = (extraMeat+extraCheese)
// var crustInput = (thinCrust+deepDish+glutenFree)
