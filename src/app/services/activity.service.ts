import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  ACTIVITIES: Activity[] = [
    { Name: "Video Gaming", id: "VG", description: "We play video games and have fun. Food and alcohol will be provided free of charge, because what kind of monster wouldn't provide those things :)?" },
    { Name: "Movie Watching", id: "MW", description: "We watch movies. Food and alcohol will be provided free of charge, because what kind of monster wouldn't provide those things :)?" },
    { Name: "Monte Carlo Night", id: "MCN", description: "Like playing cards but hate losing money? Join us for monte carlo night! Food and alcohol will be provided." }
  ];

  constructor() { }

  getActivities(): Activity[] {
    return this.ACTIVITIES;
  }

  getActivity(id: string): Activity {
    return this.ACTIVITIES.find(activity => activity.id == id);
  }
}
