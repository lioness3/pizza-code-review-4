function Pizza(topping, size, crust){
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.price = 0;
}

  Pizza.prototype.selectSize = function(){

    if (this.size = medium.checked)
    {
       this.price = 5;
    }else if (this.size = large.checked){
       this.price = 7;
   }else{
     this.price = 0;
   }
   return this.price;
  };
  Pizza.prototype.selectTopping = function() {
    if (this.topping = cheese.checked){
         this.price = 6;
   }else if (this.topping =  pep.checked){
         this.price = 8;
   }else if (this.topping =  special.checked){
         this.price = 20;
   }else{
     // warning;
   }
   return this.price;
  };
  Pizza.prototype.selectCrust = function() {
    if (this.crust = thin.checked){
         this.price = 4;
   }else if (this.crust = deep.checked){
         this.price = 8;
   }else if (this.crust = glutenFree.checked){
         this.price = 11;
   }else{
     // warning;
   }
   return this.price;
  };

// document.getElementByClass("clearRadio").checked = false;
$(document).ready(function(){
  $("#order").submit(function(event){
    event.preventDefault();
    var customPizza = new Pizza(toppingSum,sizeSum);
    var sizeSum =  parseInt(customPizza.selectSize());
    var toppingSum = customPizza.selectTopping();
    var crustSum = customPizza.selectCrust();
    var total = (toppingSum + sizeSum + crustSum);
    console.log(sizeSum);
    console.log(toppingSum);
    console.log(crustSum);
    $("#displayPrice").text(total);
    $("#order").toggle();
    $("input[name=size]").prop("checked", false);
    $("input[name=topping]").prop("checked", false);
    $("input[name=crust]").prop("checked", false);
    });
  $("#goBack").click(function(event){
    event.preventDefault();
    $("#order").toggle();
    var total = [];
  });
});
  // var element = document.getElementById(id)
 // function Pizza() {
//   // this.size = size,
//   // this.toppings = toppings,
//   // this.crust = crust,
//   this.price = 0
// }
//
//  Pizza.prototype.getPrice = function() {
//
//   if( medium){
//     this.price += 10;
//   }else if(large){
//     this.price += 20;
//   }else if(catering){
//     this.price+= 25
//   }else if(extraMeat){
//     this.price += 5;
//   }else if(extraCheese){
//     this.price += 3;
//   }else if (thinCrust){
//     this.price += 4;
//   }else if(deepDish) {
//     this.price += 7;
//   }else if(glutenFree){
//     this.price += 10;
//   }
// return this.price;
// }
// console.log(this.price);
// var customPizza = new Pizza();
// var price = customPizza.getPrice();
// var medium = $("#medium:checked")
// var large = $("#large:checked")
// var catering = $("#catering:checked")
// var extraMeat = $("#xPep:checked")
// var extraCheese = $("#xCheese:checked")
// var thinCrust = $("#thin:checked")
// var deepDish = $("#deep:checked")
// var glutenFree = $("#glutenFree:checked")
//
//
//
//   //
//   Pizza.prototype.getPrice();
//
//
// // Pizza.prototype.extraToppings = function() {
// //   if(this.toppings === extraMeat){
// //     this.price += 5;
// //   }else if(this.toppings === extraCheese) {
// //     this.price += 3;
// //   }else {
// //   } return this.price;
// // }
// // Pizza.prototype.crust = function() {
// //   if (this.crust === thinCrust){
// //     this.price += 4;
// //   }else if(this.crust === deepDish) {
// //   this.price += 7;
// // }else if (this.crust === glutenFree){
// //     this.price += 10;
// //   }else{
// //
// //   }return this.price;
// // }
// // Pizza.prototype.getPrice = function() {
// // this.price = (Pizza.size + Pizza.extraToppings + Pizza.crust);
// // return this.price
// // }
//
// //
// $(document).ready(function(){
//   $("#placeOrder").submit(function(event){
//     event.preventDefault();
//
//     $("#displayPrice").text(price);
//   });
//
//
// })
// console.log(price);
// // //
// // var customPizza = new Pizza(sizeInput,toppingsInput,crustInput)
// // var sizeInput = (medium+large+catering)
// // var toppingsInput = (extraMeat+extraCheese)
// // var crustInput = (thinCrust+deepDish+glutenFree)
