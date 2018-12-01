(function () {
"use strict";

angular.module('public')
.controller('ProfileInfoController', ProfileInfoController);

ProfileInfoController.$inject = ['profileData', 'ApiPath'];

function ProfileInfoController(profileData, ApiPath) {
  var $ctrl = this;
  $ctrl.profileData = profileData;
  $ctrl.basePath = ApiPath;
}

})();
