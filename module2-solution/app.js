(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService){
 var list1 = this;
 list1.items = ShoppingListCheckOffService.getToBuyItems();
 list1.moveItems = function (itemIndex){
   ShoppingListCheckOffService.moveToBoughtItems(itemIndex);
 }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController (ShoppingListCheckOffService){
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getBoughtItems();

}


function ShoppingListCheckOffService(){
  var service = this ;
  //list of toBuy items
  var toBuyItems = [{ name: "cookies", quantity: 10 },{ name: "chips", quantity: 8 }
  , { name: "Pepsi", quantity: 1 } , { name: "donuts", quantity: 12 } ,
  { name: "apples", quantity: 6 }] ;

  //list of bought items
  var boughtItems = [] ;
  service.getToBuyItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function (){
      return boughtItems;
    };
    //move from toBuyItems to boughtItems
    service.moveToBoughtItems = function (itemIndex){
       var boughtItem = toBuyItems[itemIndex];
       toBuyItems.splice(itemIndex,1);
       boughtItems.push(boughtItem);
    };

}

})();
