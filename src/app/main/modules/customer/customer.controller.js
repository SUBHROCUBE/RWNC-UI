'use strict';

angular.module('renu')
  .controller('CustomerCtrl',['$scope','$log','$state','httpRequest','editCustomerHelper'
   ,function ($scope,$log,$state,httpRequest,editCustomerHelper) {
    $scope.$parent.module="customer";
    $scope.filterCustomerName="";
  	$scope.opened=false;
    var customerMasterList=[];
    $scope.allCustomers=[];  
     $scope.openStart=function($event){
     	$event.preventDefault();
    	$event.stopPropagation();
     	$scope.StartOpened=true;
     };
     $scope.openTo=function($event){
     	$event.preventDefault();
    	$event.stopPropagation();
     	$scope.ToOpened=true;
     };
     
     $scope.$watch('filterCustomerName',function(newValue,oldValue){      
        if(newValue!="")    
          $scope.allCustomers=_.filter(customerMasterList, function(cust){ 
                                    return cust.alias.toLocaleLowerCase().includes(newValue.toLocaleLowerCase());
                               });
        else
          $scope.allCustomers=customerMasterList;
     });
     
    var getAllCustomers=function(){
        var api=config.api.allCustomers;
        httpRequest.get(api)
        .then(function(response){
          customerMasterList=response.data;
          $scope.allCustomers=response.data;
          $log.log(response);
        });
    }

     $scope.editCustomer=function(customer){
        editCustomerHelper.setCustomerToEdit(customer);
        $state.go('modules.editCustomer',{customerId:customer.id});
     };
     getAllCustomers();
  }]);
