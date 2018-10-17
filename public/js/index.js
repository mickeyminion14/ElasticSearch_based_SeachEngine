var app = angular.module("FirstApp",[]);
app.controller("home",function ($scope, $http) {
  // body...
  $scope.formData = {};
  $scope.formData.search_input;
  $scope.Content=[];
  $scope.$watch('formData.search_input', function() {
    console.log($scope.formData.search_input);
    $http.post("/getdata", $scope.formData)
     
      .success(function(data) {
        // console.log(data);
        // Content=data;
        $scope.Content= [];
        data.forEach(d => {
          // console.log(d._source.detail);
          $scope.Content.push(d._source);
          console.log( $scope.Content);
        });
        $('.ui.search')
        .search({
          type: $scope.Content.name,
          source:  $scope.Content,
          results:  $scope.Content
        })
      ;
      })
      .error(function(data) {
        console.log(data);
      });

    // console.log("hello");
  });




  // var categoryContent = [
  //   { category: 'South America', title: 'Brazil' },
  //   { category: 'South America', title: 'Peru' },
  //   { category: 'North America', title: 'Canada' },
  //   { category: 'Asia', title: 'South Korea' },
  //   { category: 'Asia', title: 'Japan' },
  //   { category: 'Asia', title: 'China' },
  //   { category: 'Europe', title: 'Denmark' },
  //   { category: 'Europe', title: 'England' },
  //   { category: 'Europe', title: 'France' },
  //   { category: 'Europe', title: 'Germany' },
  //   { category: 'Africa', title: 'Ethiopia' },
  //   { category: 'Africa', title: 'Nigeria' },
  //   { category: 'Africa', title: 'Zimbabwe' },
  // ];

  
});