import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(private movieService:MovieService) { }

  movies: Movie[]=[]

  ngOnInit(): void {
    this.movieService.getList().subscribe(movies =>this.movies=movies)
  }

}
