angular.module('calendarDemoApp', [])
  .controller('mainAppCtrl', function($scope) {

    $scope.date = CalendarRange.getBasicDate();

  })
  
  .directive("calendar", function(){
    return {
      restrict: 'E',
      template: '<div class="calendar-container"><div ng-class="{bookend : day.month !== date.currentMonth }" ng-repeat="day in days"><span>{{day.day}}</span></div></div>',
      replace: true,
      scope: true,
      controller: function($scope, $element, $attrs) {
        var dateParams = new Date($scope.date.currentYear, $scope.date.currentMonth);
        var range = CalendarRange.getMonthlyRange(dateParams);

        $scope.days = range.days;
        $scope.first = range.first; 

            $scope.$watch('date', function (newValue, oldValue) {
              
              this.range = {};
              console.log(newValue.currentMonth, newValue.currentYear);
              var dateUpdated = new Date(newValue.currentYear, newValue.currentMonth);
              this.range = CalendarRange.getMonthlyRange(dateUpdated);
              console.log(oldValue);
              console.log(range);
              
            });
      }
    };
  });