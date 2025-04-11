import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './product/product.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './components/footer/footer.component';
import { AszfComponent } from './aszf/aszf.component';
import { AdatvedelmiTajekoztatoComponent } from './components/adatvedelmi-tajekoztato/adatvedelmi-tajekoztato.component';
import { GyikComponent } from './gyik/gyik.component';
import { ElemCsereComponent } from './elem-csere/elem-csere.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductComponent,
    PaymentComponent,
    FooterComponent,
    AszfComponent,
    AdatvedelmiTajekoztatoComponent,
    GyikComponent,
    ElemCsereComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
