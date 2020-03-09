import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestAddLinesComponent } from './feature/request/request-add-lines/request-add-lines.component';
import { EditLineItemsComponent } from './feature/request/edit-line-items/edit-line-items.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { HomeComponent } from './feature/core/home/home.component';
import { AboutComponent } from './feature/core/about/about.component';


const routes: Routes = [
  {path:"",redirectTo: "/home",pathMatch:"full"},
  {path:"users/login",component:UserLoginComponent},
  {path:"users/list",component:UserListComponent},
  {path:"users/detail/:id",component:UserDetailComponent},
  {path:"users/edit/:id",component:UserEditComponent},
  {path:"users/create",component:UserCreateComponent},
  {path:"vendors/list",component:VendorListComponent},
  {path:"vendors/create",component:VendorCreateComponent},
  {path:"vendors/edit/:id",component:VendorEditComponent},
  {path:"vendors/detail/:id",component:VendorDetailComponent},
  {path:"products/list",component:ProductListComponent},
  {path:"products/create",component:ProductCreateComponent},
  {path:"products/detail/:id",component:ProductDetailComponent},
  {path:"products/edit/:id",component:ProductEditComponent},
  {path:"requests/edit/:id",component:RequestEditComponent},
  {path:"requests/detail/:id",component:RequestDetailComponent},
  {path:"requests/approve/:id",component:RequestApproveComponent},
  {path:"requests/lineitems/:id",component:RequestAddLinesComponent},
  {path:"requests/lineitems/edit/:id",component:EditLineItemsComponent},
  {path:"requests/list",component:RequestListComponent},
  {path:"requests/create",component:RequestCreateComponent},
  {path:"requests/review",component:RequestReviewComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"**",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
