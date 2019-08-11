import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  // redirecting routes for the default url
  // this statement must be put on the top to do so
  { path: '', redirectTo: '/departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentListComponent},
  { path: 'departments/:id', component: DepartmentDetailComponent },
  { path: 'employees', component: EmployeeListComponent },
  // wildcard route
  // this is for displaying the message 'Page Not Found' when navigated page does not exist
  // this statement must be put at the bottom, otherwise for all the
  // navigation trials for the pages added below it, the message 'Page Not Found' will be shown
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DepartmentListComponent, EmployeeListComponent, PageNotFoundComponent, DepartmentDetailComponent];
