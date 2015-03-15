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
        //var params = [$scope.date.currentYear, $scope.date.currentMonth];
        var dateParams = new Date($scope.date.currentYear, $scope.date.currentMonth);
        var range = CalendarRange.getMonthlyRange(dateParams);
        console.log(range);
        
        console.log($element);

        $scope.days = range.days;
        $scope.first = range.first; 

        $scope.$watch($attrs, function () {
           console.log($element.parent());
            $element.on('change', function(){
              console.log('good');
              //range = CalendarRange.getMonthlyRange()
            });
         // $scope.apply($scope.oldValue = $scope.value);
         });
         // console.log($scope.ngSelected);

          //  $scope.$eval($attrs.ngSelected);
         // });
          console.log($scope.date);
          
         

         //if(value !== $scope.date.month[$scope.date.currentMonth] && value !== $scope.date.currentYear) { 
         // $scope.$apply(function() {
           
         //   console.log('changed');

         //}
        

      }
    };
  });
// your controller and directive code go here


//date.months[date.currentMonth]
//"year === date.currentYear"