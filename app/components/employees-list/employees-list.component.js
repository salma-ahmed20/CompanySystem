angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
      keyword: '<',

    },
  });

function EmployeesListComponent($location) {
  const employeesPageVm = this;
  employeesPageVm.$onChanges = function (changeObj) {
    if (changeObj.keyword) {
      $location.search('filter', changeObj.keyword.currentValue);
    }
  };
}
