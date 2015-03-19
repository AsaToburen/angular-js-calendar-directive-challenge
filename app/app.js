angular.module('calendarApp', [])
  .controller('mainAppCtrl', function($scope) {

    $scope.date = CalendarRange.getBasicDate();

  })

.directive("calendar", function() {
  return {
    restrict: 'E',
    templateUrl: 'calendar.html',
    replace: true,
    scope: true,
    controller: function($scope) {

      $scope.$watch('date', function(date) {
        
        var dateParams = new Date(date.year, date.month);


        range = CalendarRange.getMonthlyRange(dateParams);

         $scope.days = range.days;
         $scope.months = range.months;
         

      }, true);
    }
  };
});