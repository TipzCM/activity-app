import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person';
import { Activity } from '../models/activity';
import { PeopleService } from '../services/people.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  persons: Person[];
  activity: Activity;

  constructor(private personService: PeopleService,
    private activityService: ActivityService,
    private location: Location,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let activityId = this.route.snapshot.paramMap.get('id');
    this.activity = this.activityService.getActivity(activityId);
    this.personService.getPeople(null, activityId).subscribe(people => {
      this.persons = people;
    });
  }

  goBack():void {
    this.location.back();
  }
}
