
var myapp = angular.module('ngcalc', []);

        
myapp.controller('mycalculator', function($scope) {
    
    $scope.inputval = '';
    $scope.lastval = 0;
    $scope.result = 0;
    $scope.power = false;
    
    $scope.getval = function( $event, numval ) {
        $scope.power = true;

        if((''+$scope.inputval).length <= 10) {
            if($scope.inputval==0)
              $scope.inputval = $scope.inputval + numval;
            else
              $scope.inputval = $scope.inputval + '' + numval;
        }
    };

    $scope.getoperator = function( $event, sign ) {
        $scope.power = true;

        $scope.operator = sign;
        $scope.lastval  = $scope.inputval;
        $scope.inputval = 0;
    };
    
    $scope.getresult = function()
    {
        $scope.power = true;
        $scope.temp = 0;
        
        if ($scope.operator == '+') {
            $scope.temp = ($scope.lastval) + ($scope.inputval);
        }
        if ($scope.operator == '-') {
            $scope.temp = ($scope.lastval) - ($scope.inputval);
        }
        if ($scope.operator == '*') {
            $scope.temp = ($scope.lastval) * ($scope.inputval);
        }
        if ($scope.operator == '/') {
            $scope.temp = ($scope.lastval) / ($scope.inputval);
        }
        
        $scope.inputval = $scope.temp;
    }
    
    $scope.reset = function()
    {
        $scope.temp = $scope.lastval = $scope.inputval = 0;
        $scope.power = true;
    }
 
    
    
});
