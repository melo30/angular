import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StockComponent } from './stock/stock.component';
import { Code404Component } from './code404/code404.component';
import { BuyerListComponent } from './buyer-list/buyer-list.component';
import { SellerListComponent } from './seller-list/seller-list.component';
import { ConsultComponent } from './consult/consult.component';
import { PermissionGuard } from './guard/permission.guard';
import { FocusGuard } from './guard/focus.guard';
import { StockResolve }from './guard/stock.resolve';
const routes: Routes = [
  {
    //pathMatch:'full'表示，只有当我访问的路径是精准的''的时候，才会跳转到/home路径上，其他都不行
    path:'',redirectTo:'/home',pathMatch:'full'
  },
  {
    //路由的路径最好和组件的名字保持一致
    path: 'home',component:HomeComponent
  },
  {
    path:'consult',component:ConsultComponent,outlet:'aux'
  },
  {
     //stock/:id 2.在url中传递参数     //data:[{isPro:true} 3.在路由的配置里面传递参数给组件              
    path:'stock/:id',component:StockComponent,data:[{isPro:true}],children:[
      {
        path: '',component:BuyerListComponent
      },
      {
        path: 'seller/:id',component:SellerListComponent
      },
    ],
    canActivate:[PermissionGuard],canDeactivate:[FocusGuard],
    resolve:{stock:StockResolve}                                                           
  },
  {
    // 通配符**的配置，必须要放在所有路径的最后面配置,表示除了上面的所有路径
    path:'**',component:Code404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
