import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TimeData } from '../models/time-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl: string = "assets/data.json"

  constructor(private http: HttpClient) { }

  getData(): Observable<TimeData[]> {
    return this.http.get<TimeData[]>(this.dataUrl).pipe(
      map((response) => {
        return response;
      })
    )
  }
}
