import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { AppRoutingModule } from './/app-routing.module';
import { ActivityCmpComponent } from './activity-cmp/activity-cmp.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ActivitySignupComponent } from './activity-signup/activity-signup.component';
import { PersonDetailsPlaceComponent } from './person-details-place/person-details-place.component';
import { MessageCmpComponent } from './message-cmp/message-cmp.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    ActivityCmpComponent,
    PersonListComponent,
    PersonDetailComponent,
    ActivitySignupComponent,
    PersonDetailsPlaceComponent,
    MessageCmpComponent
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
