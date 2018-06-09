import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../models/activity';
import { ActivityService } from '../services/activity.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  @Input() activities: Activity[];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this.activityService.getActivities();
  }
}
