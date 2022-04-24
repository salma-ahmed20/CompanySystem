angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.totalPages = 0;
  homePageVm.currentPage = 1;
  homePageVm.employees = [];
  homePageVm.loading = false;

  activate();
  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.totalPages = data.pages;
      });
  }
  homePageVm.loadMore = () =>{
    homePageVm.loading = true;
    if (homePageVm.currentPage < homePageVm.totalPages) {
      homePageVm.currentPage++;
      Employees.loadMoreEmployees(homePageVm.currentPage)
        .then(({ data }) => {
          homePageVm.employees = homePageVm.employees.concat(data.employees);
          this.loading = false;
        });
    }
  };

  homePageVm.handleKeyword = (keyword) =>{
    homePageVm.keyword = keyword;
  };
}
