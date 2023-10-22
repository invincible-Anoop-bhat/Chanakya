import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './subcomponents/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerInfoComponent } from './customers/customer-info/customer-info.component';
import { CustomerCreateComponent } from './customers/customer-create/customer-create.component';
import { CustomerEditComponent } from './customers/customer-edit/customer-edit.component';

import { OrderInfoComponent } from './orders/order-info/order-info.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderEditComponent } from './orders/order-edit/order-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CustomersComponent,
    OrdersComponent,
    AnalyticsComponent,
    HomeComponent,
    ModalComponent,
    CustomerInfoComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    OrderInfoComponent,
    OrderCreateComponent,
    OrderEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
