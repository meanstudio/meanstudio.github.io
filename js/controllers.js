/** *************Angular controller JS*********************/
"use strict";
app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function(contactform, e) {
		e.preventDefault();
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'https://formspree.io/vviidditt@gmail.com',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            })
        }
    }
});
