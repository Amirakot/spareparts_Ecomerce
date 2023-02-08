import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalisComponent } from './detalis/detalis.component';
import { LoginComponent } from './login/login.component';
import { NotfouundComponent } from './notfouund/notfouund.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{ path: '', component: ProductlistComponent }

,
{ path: 'product', component: ProductlistComponent },
{
  path:'login',component:LoginComponent
}
,
{path:'register',component:RegisterComponent}
,
{
  path:'detalis/:id',component:DetalisComponent
}
,
{
  path:'**',component:NotfouundComponent
}
,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
