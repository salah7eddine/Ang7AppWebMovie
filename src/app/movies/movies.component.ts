import { Component, OnInit } from "@angular/core";
import { ServicesMoviesService } from "src/services/services-movies.service";

@Component({
  selector: "app-movies",
  templateUrl: "./movies.component.html",
  styleUrls: ["./movies.component.css"]
})
export class MoviesComponent implements OnInit {
  private nameMovie: string;
  private movies: any;
  constructor(private servicesMoviesService: ServicesMoviesService) {}

  ngOnInit() {}

  onSearch() {
    this.servicesMoviesService.getMoviesByName(this.nameMovie).subscribe(
      data => {
        this.movies = data.Search;
      },
      err => {
        console.log(err);
      }
    );
  }
}
