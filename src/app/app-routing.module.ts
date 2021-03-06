import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GenerateTokenComponent } from './generate-token/generate-token.component'
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PurchaseOrderLineItemComponent } from './purchase-order-line-item/purchase-order-line-item.component';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';

const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        children: [
            {
                path: '',
                component: GenerateTokenComponent
            },
            {
                path: 'login',
                component: LoginComponent
            }
        ]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children:[
            {
                path: 'purchase-order-line-item',
                component: PurchaseOrderLineItemComponent
            }
        ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }