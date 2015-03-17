angular.module('calendarDemoApp', [])
  .controller('mainAppCtrl', function($scope) {

    $scope.date = CalendarRange.getBasicDate();
    console.log($scope);
  })

.directive("calendar", function() {
  return {
    restrict: 'E',
    template: '<div class="calendar-container"><div ng-class="{bookend : day.month !== date.month }" ng-repeat="day in days"><span>{{day.day}}</span></div></div>',
    replace: true,
    scope: true,
    controller: function($scope, $element, $attrs) {

      var dateParams = new Date(year, month);

      var range = CalendarRange.getMonthlyRange(dateParams);

      $scope.days = range.days;

      $scope.$watch('date', function(newValue, oldValue) {

      var months = $scope.date.months;

    //I imagine that logic like this is best left to a controller,
    // however, my intuition tells me that there is an easier way to get the
    // month index..

        if (typeof(newValue.month) != Number) {
          monthIndex = months.indexOf(newValue.month);
          dateParams = new Date(newValue.year, monthIndex);
        } else {
          dateParams = new Date(newValue.year, newValue.month);
        }


        console.log(dateParams);
        //range = {};
        //scope.days = null;
        range = CalendarRange.getMonthlyRange(dateParams);
        //scope.days = range.days;
        console.log(range);

        //scope.apply(range);

      }, true);
    }
  };
});