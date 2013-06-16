function control($scope,$http)
{
	$scope.result="";
	$scope.two="";
	$scope.error="";
	$scope.nohost="";
	$scope.btext="Check Ping Status";
	$scope.imgresult="";
	// $scope.info = [
	
	// {task:'tea',done:'true'},
	// {task:'coffee',done:'false'}
	// ];
	$scope.func=function() {
	//$('#b1').button();
	//$scope.var1.button('loading');
	//alert($scope.val);
	$scope.btext="Checking...";
	$scope.imgresult="";
	if($scope.val==undefined || $scope.val=="")
	{
		$scope.btext="Check Ping Status";
		$scope.nohost="Enter server address";
		$scope.result="";
	$scope.two="";
	$scope.error="";
	//$('#b1').button('reset');
	
	}
	
	else
	{
	$scope.result="";
	$scope.two="";
	$scope.error="";
	$scope.nohost="";
	$scope.btext="Checking...";
	 $http({method: "GET", url: "ajax.jsp",params: {ip: $scope.val}}).
      success(function(data,status) {
	  //alert(data);
	  $scope.btext="Check Ping Status";
	   var dat=data.trim();
	  
	    if(dat=="success")
        {
		 $scope.result="success";
		$scope.two=status;
		$scope.error="no error";
		$scope.imgresult="icon-thumbs-up";
		
		 }
		  else
		 {
		 $scope.result="failure";
		 $scope.two=status;
		 $scope.error="error";
		 $scope.imgresult="icon-thumbs-down";
	}
		
      }).
      error(function(data,status) {
	  $scope.btext="Check Ping Status";
        $scope.result="ajax failed";
		$scope.two=status;
		$scope.error="ajax failed";
    });
	//$('#b1').button('reset');
	}
	};
	
	// $scope.func=function() {
	// // $scope.result="a";
	// // $scope.two="b";
	// // $scope.error="c";
	
	// alert($scope.val);
	// $scope.result="j";
	// $scope.two="v";
	// $scope.error="r";
	// //$scope.info = [
	// //{id:'11',name:'jvr'}];
	// //console.log("hi");
	// //alert("hi");
	// }
	
	
}
	