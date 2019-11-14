//Buisiness Logic
function Pizza(topping, size, crust){
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.price = 0
}
//Uses ID in radio input to tell what has been checked
  Pizza.prototype.cost = function(){
  this.price += (this.topping == "checked");
  this.price += (this.size == "checked");
  this.price += (this.crust == "checked");
  return this.price;
};

//      alert("Please select a crust!")
//
// // Clears totaled price if crust is not selected.
// // Clears totaled price if size is not selected.
// document.getElementById("displayPrice").reset();
//UI
$(document).ready(function(){
  $("#order").submit(function(event){
    event.preventDefault();
    var topping = parseInt($("input:radio[name='topping']:checked").val());
    var size = parseInt($("input:radio[name='size']:checked").val());
    var crust = parseInt($("input:radio[name='crust']:checked").val());
console.log(topping);
    var customPizza = new Pizza(topping, size, crust);
    console.log(customPizza.cost.price);
    $("#displayPrice").text(customPizza.price);
    $("#order").hide();
//Clears radio buttons
    $("input[name=size]").prop("checked", false);
    $("input[name=topping]").prop("checked", false);
    $("input[name=crust]").prop("checked", false);
    });
//Hides form and shows total. Clears total upon "Go Back!"
  $("#goBack").click(function(event){
    event.preventDefault();
    $("#order").toggle();
    $("#displayPrice").text("");
  });
});
