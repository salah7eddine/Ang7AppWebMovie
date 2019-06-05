import { Component, OnInit, Input } from "@angular/core";
import { ServicesMoviesService } from "src/services/services-movies.service";

@Component({
  selector: "app-movie",
  templateUrl: "./movie.component.html",
  styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  @Input() movie: any;
  infoMovie: any;
  ratings: any;

  constructor(private servicesMoviesService: ServicesMoviesService) {}

  ngOnInit() {
    this.getAllInfoOfMovie();
  }

  getAllInfoOfMovie() {
    this.servicesMoviesService.getMoviesById(this.movie.imdbID).subscribe(
      data => {
        this.infoMovie = data;
        console.log(this.infoMovie);
      },
      err => {
        console.log(err);
      }
    );
  }
}
