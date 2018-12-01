(function () {
'use strict';

angular.module('public')
.component('registrationForm', {
  templateUrl: 'src/public/sign-up/registration-form.html',
  controller: 'registrationFormController',
  bindings: {
    onSave: '&',
  }
});
})();
