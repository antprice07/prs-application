import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './feature/user/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { UserDetailComponent } from './feature/user/user-detail/user-detail.component';
import { UserEditComponent } from './feature/user/user-edit/user-edit.component';
import { UserCreateComponent } from './feature/user/user-create/user-create.component';
import { VendorListComponent } from './feature/vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './feature/vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './feature/vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './feature/vendor/vendor-detail/vendor-detail.component';
import { MenuComponent } from './core/menu/menu.component';
import { ProductListComponent } from './feature/product/product-list/product-list.component';
import { ProductCreateComponent } from './feature/product/product-create/product-create.component';
import { ProductDetailComponent } from './feature/product/product-detail/product-detail.component';
import { ProductEditComponent } from './feature/product/product-edit/product-edit.component';
import { UserLoginComponent } from './feature/user/user-login/user-login.component';
import { RequestListComponent } from './feature/request/request-list/request-list.component';
import { RequestReviewComponent } from './feature/request/request-review/request-review.component';
import { RequestCreateComponent } from './feature/request/request-create/request-create.component';
import { RequestEditComponent } from './feature/request/request-edit/request-edit.component';
import { RequestDetailComponent } from './feature/request/request-detail/request-detail.component';
import { RequestAddLinesComponent } from './feature/request/request-add-lines/request-add-lines.component';
import { EditLineItemsComponent } from './feature/request/edit-line-items/edit-line-items.component';
import { ListLineItemsComponent } from './feature/request/list-line-items/list-line-items.component';
import { BaseComponent } from './base/base/base.component';
import { RequestApproveComponent } from './feature/request/request-approve/request-approve.component';
import { SortPipe } from './pipe/sort.pipe';
import { HomeComponent } from './feature/core/home/home.component';
import { AboutComponent } from './feature/core/about/about.component';
import { FootComponent } from './feature/core/foot/foot.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    MenuComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductDetailComponent,
    ProductEditComponent,
    UserLoginComponent,
    RequestListComponent,
    RequestReviewComponent,
    RequestCreateComponent,
    RequestEditComponent,
    RequestDetailComponent,
    RequestAddLinesComponent,
    EditLineItemsComponent,
    ListLineItemsComponent,
    BaseComponent,
    RequestApproveComponent,
    SortPipe,
    HomeComponent,
    AboutComponent,
    FootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
