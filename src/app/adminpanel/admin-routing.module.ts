import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from '../user/user.component';
import { GroupComponent } from '../group/group.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HelperComponent } from '../helper/helper.component';

const routes: Routes = [
  {path: '', component: HelperComponent},
  {path: 'user', component: UserComponent},
  {path: 'group', component: GroupComponent},
  {path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
