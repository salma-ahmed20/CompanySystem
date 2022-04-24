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
  employeesPageVm.$onChanges = function () {
    if (employeesPageVm.keyword) {
      $location.search('filter', employeesPageVm.keyword);
    } else {
      $location.search({});
    }
  };
}
