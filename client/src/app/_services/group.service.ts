import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  baseurl = environment.apiUrl

  constructor(private http : HttpClient) { }

  addGroup(model : any)
  {
    return this.http.post(this.baseurl + 'group' , model) ; 
  }
}
