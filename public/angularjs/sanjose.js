/**
 * http://usejsdoc.org/
 */

var sanjose=angular.module('sanjose',[]);

sanjose.directive(
		'modal',
		function() {
			return {
				template : '<div class="modal fade">'
						+ '<div class="modal-dialog">'
						+ '<div class="modal-content">'
						+ '<div class="modal-header">'
						+ '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'
						+ '<h3 class="modal-title">{{ title }}</h3>'
						+ '</div>'
						+ '<div class="modal-body" ng-transclude></div>'
						+ '</div>' + '</div>' + '</div>',
				restrict : 'E',
				transclude : true,
				replace : true,

				scope : true,
				link : function postLink(scope, element, attrs) {
					scope.title = attrs.title;

					scope.$watch(attrs.visible, function(value) {
						if (value == true)
							$(element).modal('show');
						else
							$(element).modal('hide');
					});

					$(element).on('shown.bs.modal', function() {
						scope.$apply(function() {
							scope.$parent[attrs.visible] = true;
						});
					});

					$(element).on('hidden.bs.modal', function() {
						scope.$apply(function() {
							scope.$parent[attrs.visible] = false;
						});
					});
				}
			};
		});

sanjose.controller('signup',function($scope,$http)
{
    $scope.registered_email=true;
    $scope.unexpected_error=true;
    $scope.showBillModal = false;
    
    $scope.hello = function(){
    
    	$scope.showBillModal =  false;
    }
    
    $scope.submit=function()
    {
        $http({
            method:"POST",
            url:'/insertClientData',
            data : {
                "ssn" : $scope.ssn,
                "city":$scope.city,
                "disease" : $scope.disease
            }

        }).success(function(data)
        {
            if (data.statusCode == 401) {
                $scope.registered_email = false;
                $scope.unexpected_error = true;
            }
           if(data.statusCode==200)
           {
         //      window.location.assign("/newSignUpCustomer");
             //  $scope.message="bitch";
           //    alert("Successfully inserted");
               $scope.showBillModal = !$scope.showBillModal;
            }
        })
            .error(function(error) {
                $scope.unexpected_error = false;
                $scope.registered_email = true;
            });


    };


})
sanjose.controller('search',function($scope,$http)
		{  $scope.precation = true;
		    $scope.unexpected_error=true;
		    $scope.mp=true;
		    $scope.info=false;
		    $scope.submit=function()
		    {
		        if($scope.city == "San Jose"){
		            window.location="/SanJose";
		        } else if($scope.city == "San Diego"){
		            window.location="/SanDiego";
		        } else if($scope.city == "San Franscisco"){

		            window.location="/SanFranscisco";

		        }else if($scope.city == "Los Angeles"){

		            window.location="/LosAngeles";
		        }else {
		        	//alert("aaya");
		            window.location="/Yosemite";

		        }
		    }
		})

sanjose.controller('sanjose',function($scope,$http) {
	 $http({
         method:"POST",
         url:'/search',
         data : {

             "city":"San Jose"

         }

     }).success(function(data)
     {
//         console.log(data);
         if(data.statusCode==200)
         {
             console.log(data.count1);
             $scope.result1 = data.result1;
             $scope.result2 = data.result2;
             $scope.result3 = data.result3;
             $scope.result4 = data.result4;
             $scope.result5 = data.result5;
             $scope.count1 = data.count1,
                 $scope.count2 = data.count2,
                 $scope.count3 = data.count3,
                 $scope.count4 = data.count4,
                 $scope.count5 = data.count5
                 $scope.precation = false;             //$scope.count=data.count;
             $scope.mp=false;
             $scope.info=true;
         }
     })
         .error(function(error) {
             $scope.unexpected_error = false;
             $scope.search=true;
         });
})



sanjose.controller('sandiego',function($scope,$http) {
	    //console.log("aaya");
	 $http({
         method:"POST",
         url:'/search',
         data : {

             "city":"San Diego"

         }

     }).success(function(data)
     {
//         console.log(data);
         if(data.statusCode==200)
         {
             console.log(data.count1);
             $scope.result1 = data.result1;
             $scope.result2 = data.result2;
             $scope.result3 = data.result3;
             $scope.result4 = data.result4;
             $scope.result5 = data.result5;
             $scope.count1 = data.count1,
                 $scope.count2 = data.count2,
                 $scope.count3 = data.count3,
                 $scope.count4 = data.count4,
                 $scope.count5 = data.count5
                 $scope.precation = false;
             //$scope.count=data.count;
             $scope.mp=false;
             $scope.info=true;
         }
     })
         .error(function(error) {
             $scope.unexpected_error = false;
             $scope.search=true;

         });


 

})



sanjose.controller('sanfranscisco',function($scope,$http) {
	    //console.log("aaya");
	 $http({
         method:"POST",
         url:'/search',
         data : {

             "city":"San Franscisco"

         }

     }).success(function(data)
     {
//         console.log(data);
         if(data.statusCode==200)
         {
             console.log(data.count1);
             $scope.result1 = data.result1;
             $scope.result2 = data.result2;
             $scope.result3 = data.result3;
             $scope.result4 = data.result4;
             $scope.result5 = data.result5;
             $scope.count1 = data.count1,
                 $scope.count2 = data.count2,
                 $scope.count3 = data.count3,
                 $scope.count4 = data.count4,
                 $scope.count5 = data.count5
                 $scope.precation = false;
                         //$scope.count=data.count;
             $scope.mp=false;
             $scope.info=true;
         }
     })
         .error(function(error) {
             $scope.unexpected_error = false;
             $scope.search=true;

         });


 

})

sanjose.controller('losangeles',function($scope,$http) {
	    //console.log("aaya");
	 $http({
         method:"POST",
         url:'/search',
         data : {

             "city":"Los Angeles"

         }

     }).success(function(data)
     {
//         console.log(data);
         if(data.statusCode==200)
         {
             console.log(data.count1);
             $scope.result1 = data.result1;
             $scope.result2 = data.result2;
             $scope.result3 = data.result3;
             $scope.result4 = data.result4;
             $scope.result5 = data.result5;
             $scope.count1 = data.count1,
                 $scope.count2 = data.count2,
                 $scope.count3 = data.count3,
                 $scope.count4 = data.count4,
                 $scope.count5 = data.count5
                 $scope.precation = false;
                         //$scope.count=data.count;
             $scope.mp=false;
             $scope.info=true;
         }
     })
         .error(function(error) {
             $scope.unexpected_error = false;
             $scope.search=true;

         });


 

})


sanjose.controller('yosemite',function($scope,$http) {
	    //console.log("gaaya");
	 $http({
         method:"POST",
         url:'/search',
         data : {

             "city":"Yosemite"

         }

     }).success(function(data)
     {
//         console.log(data);
         if(data.statusCode==200)
         {
             console.log(data.count1);
             $scope.result1 = data.result1;
             $scope.result2 = data.result2;
             $scope.result3 = data.result3;
             $scope.result4 = data.result4;
             $scope.result5 = data.result5;
             $scope.count1 = data.count1,
                 $scope.count2 = data.count2,
                 $scope.count3 = data.count3,
                 $scope.count4 = data.count4,
                 $scope.count5 = data.count5
                 $scope.precation = false;
                         //$scope.count=data.count;
             $scope.mp=false;
             $scope.info=true;
         }
     })
         .error(function(error) {
             $scope.unexpected_error = false;
             $scope.search=true;

         });


 

})