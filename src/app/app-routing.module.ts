import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AszfComponent } from './aszf/aszf.component';
import { AdatvedelmiTajekoztatoComponent } from './components/adatvedelmi-tajekoztato/adatvedelmi-tajekoztato.component';
import { GyikComponent } from './gyik/gyik.component';
import { Title } from '@angular/platform-browser';
import { ElemCsereComponent } from './elem-csere/elem-csere.component';


const routes: Routes = [
  {path: "home", component:HomeComponent, title: "Főoldal"},
  {path: "product", component:ProductComponent, title: "Vásárlás"},
  {path: "gyik", component:GyikComponent, title: "GYIK"},
  {path: "aszf", component:AszfComponent, title: "ÁSZF"},
  {path: "adatvedelmi-tajekoztato", component:AdatvedelmiTajekoztatoComponent, title: "Adatvédelmi Tájékoztató"},
  {path: "elem-csere", component:ElemCsereComponent, title: "Elem csere útmutató"},
  {path: "**", redirectTo: "home"},
  {path: "", redirectTo: "home", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
