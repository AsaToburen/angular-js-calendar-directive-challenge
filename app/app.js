angular.module('calendarDemoApp', [])
  .controller('mainAppCtrl', function($scope) {

    $scope.date = CalendarRange.getBasicDate();
    //$scope.date = $scope.date.year[1];
    //$scope.months = date.months;
    //$scope.month = date.month;
    //$scope.year = date.year;
    //$scope.years = date.years;

  })
  
  .directive("calendar", function($sce){
    return {
      restrict: 'E',
      template: '<div class="calendar-container"><div ng-repeat="day in days"><span>{{day.day}}</span></div></div>',
      replace: true,
      scope: true,
      controller: function($scope, $element, $attrs) {
        var yearSelect = $element.find();
        console.log($element);
        var range = CalendarRange.getMonthlyRange(new Date());

        $scope.days = range.days;
        $scope.first = range.first; 

        var ctrl = this;
        console.log(ctrl);

      }
    };
  });
// your controller and directive code go here