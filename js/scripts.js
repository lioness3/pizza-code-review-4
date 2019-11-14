//Buisiness Logic
function Pizza(topping, size, crust){
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.price = 0;
}
//Uses ID in radio input to tell what has been checked
  Pizza.prototype.selectSize = function(){
    if (this.size = "medium"){
      this.price = 5;
    }else if (this.size = "large"){
      this.price = 7;
    }else {
      alert("Please, choose either Medium or Large!")
// Clears totaled price if size is not selected.
      document.getElementById("displayPrice").reset();
    }
    return this.price;
    };
  Pizza.prototype.selectTopping = function(){
    if (this.topping = "cheese"{
      this.price = 6;
    }else if (this.topping =  "pep"){
      this.price = 8;
    }else if (this.topping =  "special"){
      this.price = 20;
    }else{
//Does not add to the price if no selection is made.
      this.price = 0;
    }
    return this.price;
    };
  Pizza.prototype.selectCrust = function(){
    if (this.crust = "thin"){
      this.price = 4;
   }else if (this.crust = "deep"){
     this.price = 8;
   }else if (this.crust = "glutenFree"){
     this.price = 11;
   }else{
     alert("Please select a crust!")
// Clears totaled price if crust is not selected.
   }
   return this.price;
  };
//UI
$(document).ready(function(){
  $("#order").submit(function(event){
    event.preventDefault();
    var customPizza = new Pizza(toppingSum,sizeSum);
    var sizeSum = customPizza.selectSize();
    var toppingSum = customPizza.selectTopping();
    var crustSum = customPizza.selectCrust();
    var total = (toppingSum + sizeSum + crustSum);
    console.log(total);

    $("#displayPrice").text(total);
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
