import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Person } from '../models/person';

@Component({
  selector: 'app-person-details-place',
  templateUrl: './person-details-place.component.html',
  styleUrls: ['./person-details-place.component.css']
})
export class PersonDetailsPlaceComponent implements OnInit {

  person: Person;

  constructor(private peopleService: PeopleService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let email = this.route.snapshot.paramMap.get('email');
    this.peopleService.getPeople(email, null).subscribe(person => {
      this.person = person && person.length ? person[0] : null;
    });
  }

  goBack():void {
    this.location.back();
  }
}
