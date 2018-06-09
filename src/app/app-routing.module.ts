import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityCmpComponent } from './activity-cmp/activity-cmp.component';
import { PersonListComponent } from './person-list/person-list.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { ActivitySignupComponent } from './activity-signup/activity-signup.component';
import { PersonDetailsPlaceComponent } from './person-details-place/person-details-place.component';

const routes: Routes = [
  { path: '', redirectTo: '/activities', pathMatch: 'full' },
  { path: 'activities', component: ActivityListComponent },
  { path: 'activities/:id', component: ActivityCmpComponent },
  { path: 'activities/:id/signup', component: ActivitySignupComponent },
  { path: 'activities/:id/people', component: PersonListComponent },
  { path: 'activities/:id/people/:email', component: PersonDetailsPlaceComponent }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
