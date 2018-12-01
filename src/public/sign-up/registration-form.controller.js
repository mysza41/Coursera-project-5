(function () {
"use strict";

angular.module('public')
.controller('registrationFormController', registrationFormController);

registrationFormController.$inject = ['MenuService'];
function registrationFormController(MenuService) {
  var reg = this;

  reg.save = function (regForm) {
    var promise =  MenuService.getMenuItem(regForm.favouriteDish).
    then(function (result) {
      reg.messege = "Your information has been saved";
      MenuService.saveProfile(regForm, result);
    })
    .catch(function (error) {
      reg.messege = "No such menu number exists"
    });
  };


}

})();
