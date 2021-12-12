import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import {Router} from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  constructor(
    private movieService:MovieService,
    private router:Router 
    ) { }

  movies: Movie[]=[]

  ngOnInit(): void {
    this.movieService.getList().subscribe(movies =>this.movies=movies)
  }
  navigateToDetail(id:number){
    this.router.navigate(['movies',id]);

  }

}
