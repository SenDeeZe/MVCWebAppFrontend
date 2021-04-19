import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';
import {HttpClientModule} from '@angular/common/http';
import {OrderService} from './services/order.service';
import { CreateFormComponent } from './create-form/create-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NotifyService} from './services/notify.service';
import {GoodsComponent} from './goods/goods.component';
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'goods', component: GoodsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CreateFormComponent,
    GoodsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [OrderService, NotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
