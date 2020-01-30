import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class MoviesService {
    constructor(private $http: HttpClient) {

    }

    getData(): Observable<any> {
        return this.$http.get('https://api.themoviedb.org/3/trending/movie/day?api_key=42671e7ca43d48de807785cf141d2b85');
    }
}