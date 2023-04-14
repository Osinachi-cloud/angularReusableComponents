import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { TableComponent } from './components/table/table.component';


const routes: Routes = [
  {path:"auth", component: AuthFormComponent},
  {path:"table",component: TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
