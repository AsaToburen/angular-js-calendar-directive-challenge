
describe('calendar directive', function() {

  var scope,
    compiled,
    element,
    ctrl,
    date,
    range,
    html;

beforeEach(module("calendarApp"));
beforeEach(module("calendar.html"));

beforeEach(inject(function($rootScope, $compile) {
  
  scope = $rootScope;

  //date = CalendarRange.getBasicDate();
  //var dateParams = new Date(date.year, date.month);

  //range = CalendarRange.getMonthlyRange(dateParams);
  scope.date = CalendarRange.getBasicDate();
  html= "<calendar></calendar>";
   
  compiled = $compile(html);
  element = compiled(scope);
  scope.$digest();
  
}));

 it('should create bookended days outside of target month', function(scope) {
    
   
   

 });

  it('controller should expose current dates', function() {
          
      

 });





});