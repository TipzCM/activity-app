import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';

const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private serviceUrl = 'api/people';

  constructor(
    private http: HttpClient
  ) { }

  save(person: Person):Observable<Person> {
    return this.http.post<Person>(this.serviceUrl, person, httpHeaders);
  }

  getPeople(email: string, query: string):Observable<Person[]> {
    let url;
    if (email) {
      url = `${this.serviceUrl}/${email}`;
    }
    else if (query) {
      url = `${this.serviceUrl}?Activity=${query}`;
    }
    else {
      url = this.serviceUrl;
    }
    return this.http.get<Person[]>(url);
  }

  deletePerson(email: string):Observable<Object> {
    return this.http.delete(`${this.serviceUrl}/{$email}`, httpHeaders);
  }
}
