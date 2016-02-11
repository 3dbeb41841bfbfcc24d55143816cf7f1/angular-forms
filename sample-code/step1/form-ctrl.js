'use strict';

angular.module('myApp')
.controller('formCtrl', function() {

  this.formData = {
    userName: '',
    email: '',
    zipcode: ''
  };

  this.submitForm = function () {
    alert("Send a request to the server: " + JSON.stringify(this.formData));
  };
});
