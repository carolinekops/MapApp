/**
 * ng-controller=control
 */

angular
	.module('myApplication')
	.controller('control', function ($scope, $http){
		
				
		$("#thebtn").mouseover(function(){
	        $("#lookup").toggle();
	    });
		
		$('#lookup').on("keydown", function(e) {
		    if (e.keyCode == 13) {
		        $scope.getEvent();
		    }
		});
		
		
		$scope.getEvent = function() {

			countrycode = 'name'; 
			$http.get('https://restcountries.eu/rest/v2/name/' + $scope.countrycode + '?fullText=true').then(function getEvent(response) {
				console.log($scope.countrycode);
				$scope.data = response.data[0];
				console.log();
				
			}),
			function fail(error){
				console.log(error);
			};
		}
		
		$scope.showDetails = function() {
			
			let name = event.target.getAttribute('data-name');
			//country = 'name'; 
			$http.get('https://restcountries.eu/rest/v2/name/' + name + '?fullText=true').then(function getEvent(response) {
				//console.log($scope.country);
				$scope.data = response.data[0];
				console.log();
				
			}),
			function fail(error){
				console.log(error);
			};
			
			
			
		}

	});