angular.module('renu')
.service('editCustomerHelper', ['$http', function($http){
	var customerToEdit=null;
	return {
		getCustomerToEdit:function(){
			return customerToEdit;
		},
		setCustomerToEdit:function(customer){
			customerToEdit=customer
		}
	};
}]);