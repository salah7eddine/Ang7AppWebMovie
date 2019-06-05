import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ServicesMoviesService {
  keyApi = "38367489";
  moviesUrl: string = "http://www.omdbapi.com?apikey=";

  constructor(private http: HttpClient) {}

  getMoviesByName(name: string): Observable<any> {
    return this.http.get(`${this.moviesUrl}${this.keyApi}&s=` + name);
  }

  getMoviesById(movieId: string): Observable<any> {
    return this.http.get(`${this.moviesUrl}${this.keyApi}&i=` + movieId);
  }
}
