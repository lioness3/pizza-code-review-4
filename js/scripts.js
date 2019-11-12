//Buisiness Logic
function Pizza(topping, size, crust){
  this.topping = topping;
  this.size = size;
  this.crust = crust;
  this.price = 0;
}

  Pizza.prototype.selectSize = function(){
    if (this.size = medium.checked){
      this.price = 5;
    }else if (this.size = large.checked){
      this.price = 7;
    }else{
      this.price = 0;
    }
    return this.price;
    };
  Pizza.prototype.selectTopping = function(){
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
  Pizza.prototype.selectCrust = function(){
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
//UI
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
    $("#order").hide();
    $("input[name=size]").prop("checked", false);
    $("input[name=topping]").prop("checked", false);
    $("input[name=crust]").prop("checked", false);
    });
  $("#goBack").click(function(event){
    event.preventDefault();
    $("#order").toggle();
    $("#displayPrice").text("");
  });
});
