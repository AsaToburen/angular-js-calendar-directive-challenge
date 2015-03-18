angular.module('calendarApp', [])
  .controller('mainAppCtrl', function($scope) {

    $scope.date = CalendarRange.getBasicDate();
    console.log($scope.date);
  })

.directive("calendar", function() {
  return {
    restrict: 'E',
    templateUrl: 'calendar.html',
    replace: true,
    scope: true,
    controller: function($scope) {

      $scope.$watch('date', function(date) {
        console.log(date);
        
        var dateParams = new Date(date.year, date.month);

        range = CalendarRange.getMonthlyRange(dateParams);
        console.log(range);

         $scope.days = range.days;
         $scope.months = range.months;

      }, true);
    }
  };
});