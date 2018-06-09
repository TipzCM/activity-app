import { Component, OnInit, Inject, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Activity } from '../models/activity';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-cmp',
  templateUrl: './activity-cmp.component.html',
  styleUrls: ['./activity-cmp.component.css']
})
export class ActivityCmpComponent implements OnInit {

  @Input() activity: Activity;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private activityService: ActivityService
  ) { }

  ngOnInit() {
    let activityId = this.route.snapshot.paramMap.get('id');
    this.activity = this.activityService.getActivity(activityId);
  }

  goBack(): void {
    this.location.back();
  }
}
