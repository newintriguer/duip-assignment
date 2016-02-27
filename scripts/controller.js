var app=angular.module("myApp",[]);
app.controller("myController",function($scope){
	
	$scope.sno=1;
	$scope.posts=[];
	$scope.newPost={product_code: '', uom: '', quantity: '', rate: '', amount: ''}

	$scope.addRow=function(){
		$scope.posts.push($scope.newPost);
		$scope.newPost={ product_code: '', uom: '', quantity: '', rate: '', amount: ''}
		$scope.sno=$scope.sno+1;
	}



});

