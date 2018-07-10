/**
 * Second assignment for the course
 * https://www.coursera.org/learn/single-page-web-apps-with-angularjs/home/welcome
 *
 * @author Tchernopyatov Alexey
 * @version 1.1, 07/10/2018
 */
(function() {
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  /**
   * The controller for a toBuyList
   *
   * @author Tchernopyatov Alexey
   * @since 1.1, 07/10/2018
   */
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.name = "";
    toBuy.quantity = 0;
    toBuy.errorMessage = "";

    toBuy.items = ShoppingListCheckOffService.getToBuyList();
    toBuy.buy = function(idx) {
      ShoppingListCheckOffService.buy(idx);
    };
    toBuy.addItem = function() {
      try {
        ShoppingListCheckOffService.addItem(toBuy.name,toBuy.quantity);
      } catch (error) {
        toBuy.errorMessage = error.message;
      }
    };
  };
  /**
   * The controller for a alreadyBoughtList
   *
   * @author Tchernopyatov Alexey
   * @since 1.1, 07/10/2018
   */
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getBoughtList();
  };
  /**
   * The service for working with buy and bought lists
   *
   * @author Tchernopyatov Alexey
   * @since 1.1, 07/10/2018
   */
  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      { name: "Deathclaw steak", quantity: 1 },
      { name: "Iguana-on-a-stick", quantity: 8 },
      { name: "Mole rat meat", quantity: 15 },
      { name: "Cram", quantity: 3 },
      { name: "Nuka-Cola", quantity: 50 },
    ];

    var boughtList = [];

    service.getToBuyList = function() {
      return toBuyList;
    }
    service.getBoughtList = function() {
      return boughtList;
    }
    service.buy = function(idx) {
      //console.log('service.buy('+idx+')');
      var bought = toBuyList.splice(idx,1);
      //boughtList = boughtList.concat(bought);
      for(var i = 0; i < bought.length; i++) {
        boughtList.push(bought[i]);
      }

      //console.log('bought ' +JSON.stringify(bought));
      //console.log('toBuyList ' +JSON.stringify(toBuyList));
      //console.log('boughtList ' +JSON.stringify(boughtList));
    }
    service.addItem = function(name,quantity) {
      var item = { name : name.trim() , quantity : parseFloat(quantity)};

      if(item.name.length == 0) {
        throw new Error("Name cant be empty");
      }
      if(isNaN(item.quantity) || !isFinite(item.quantity)) {
        throw new Error("Quantity must be a number");
      }
      if(item.quantity == 0) {
        throw new Error("Quantity cant be empty");
      }
      toBuyList.push(item);
    };

  };//end of ShoppingListCheckOffService
}());
