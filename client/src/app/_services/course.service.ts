import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Course } from '../_models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  courses : Course[] = [] 
  baseUrl = environment.apiUrl

  constructor(private http : HttpClient) { 
  }

  getCourses()
  {
    if(this.courses.length) return of(this.courses)
    return this.http.get<Course[]>(this.baseUrl + 'courses').pipe(
      map(course => {
        this.courses = course
        return course
      })
    )
  }
}
