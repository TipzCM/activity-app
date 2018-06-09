import { Component, OnInit, Input } from '@angular/core';
import { Person } from '../models/person';
import { PeopleService } from '../services/people.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-activity-signup',
  templateUrl: './activity-signup.component.html',
  styleUrls: ['./activity-signup.component.css']
})
export class ActivitySignupComponent implements OnInit {

  @Input() person: Person;
  activity: Activity;

  constructor(private personService: PeopleService,
    private activityService: ActivityService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.person = new Person();
    let id = this.route.snapshot.paramMap.get('id');
    this.activity = this.activityService.getActivity(id);
    this.person.Activity = this.activity.id;
  }

  save() {
    if (this.isNullOrEmpty(this.person.FirstName) ||
        this.isNullOrEmpty(this.person.LastName) ||
        this.isNullOrEmpty(this.person.Email)) {
          //TODO - cannot save
          //this may not be the nicest way to block
          alert("Cannot save person: Required fields need to be filled out");
    }
    else {
      this.personService.save(this.person).subscribe(person => {
        this.messageService.add(person.FirstName + " " + person.LastName + " has signed up for " + this.activity.Name);
        this.location.back();
      });
    }
  }

  isNullOrEmpty(value: string) {
    return value == null || value == '';
  }

  cancel() {
    this.location.back(); //no save
  }
}
