function control($scope,$http)
{
	$scope.result="";
	$scope.two="";
	$scope.error="";
	$scope.nohost="";
	$scope.btext="Check Ping Status";
	$scope.imgresult="";
	
	$scope.func=function() {
	
	$scope.btext="Checking...";
	$scope.imgresult="";
	
	if($scope.val==undefined || $scope.val=="")
	{
		$scope.btext="Check Ping Status";
		$scope.nohost="Enter server address";
		$scope.result="";
		$scope.two="";
		$scope.error="";
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
	}
	};
	
}