angular.module('calendarDemoApp', [])
  .controller('mainAppCtrl', function($scope) {

    var date = CalendarRange.getBasicDate();

    $scope.date = date;
    console.log($scope.date);
    console.log(date.months);
    console.log(date.currentMonth);

  })
  
  .directive("calendar", function(){
    return {
      restrict: 'E',
      template: '<div class="calendar-container"><div ng-class="{bookend : day.month !== date.currentMonth }" ng-repeat="day in days"><span>{{day.day}}</span></div></div>',
      replace: true,
      scope: true ,
      controller: function($scope, $element, $attrs) {
        var params = [$scope.date.currentYear, $scope.date.currentMonth];
        var dateParams = new Date($scope.date.currentYear, $scope.date.currentMonth);
        var range = CalendarRange.getMonthlyRange(dateParams);
        console.log(range);

        $scope.days = range.days;
        $scope.first = range.first; 

        $scope.$watch(params, function(newVal) {
          $scope.apply(console.log(newVal);
        });

      }
    };
  });
// your controller and directive code go here


//date.months[date.currentMonth]
//"year === date.currentYear"