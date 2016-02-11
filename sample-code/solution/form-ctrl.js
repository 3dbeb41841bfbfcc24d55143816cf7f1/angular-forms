'use strict';

angular.module('myApp', ['ngMessages', 'ngAnimate'])
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
