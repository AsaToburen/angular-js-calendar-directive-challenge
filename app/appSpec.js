
describe('calendar directive', function() {

  var scope,
    compiled,
    element,
    date,
    range,
    html;

beforeEach(module("calendarApp"));
beforeEach(module("calendar.html"));

beforeEach(inject(function($rootScope, $compile) {

  scope = $rootScope;

  element = angular.element("<calendar></calendar>");

  compile = $compile;

  scope.date = { month: 8, year : 2017};
  
  compile(element)(scope);

  scope.$digest();

}));

  it('should create bookended days outside of target month', function() {
    // need to test that days with a different month value have a separate class
     var bookended = element[0].querySelectorAll('div.bookend').length;

     expect(bookended).toEqual(5);

  });



  it('controller should display days for a month', function() {
      
     var days = element[0].querySelectorAll('span').length;
     expect(days).toEqual(35);

  });

  it('should add the content within the calendar directive to the dom', function(){

    expect(element.hasClass('calendar-container')).toBeTruthy();

  });

  it('should')














});