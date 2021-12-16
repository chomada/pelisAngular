import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/models/movie.model';
import {Router} from '@angular/router';
import { Subscription } from 'rxjs';
//import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit, OnDestroy {

  movies: Movie[]=[];
  private subscription: Subscription | undefined;

  constructor(
    private movieService:MovieService,
    private router:Router
    ) {console.log("Hook Constructor"); }

  ngOnInit(): void {
    this.subscription= this.movieService.getList().subscribe(movies =>this.movies=movies);
    console.log("Hook On Init")
  }
  navigateToDetail(id:number){
    this.router.navigate(['movies',id]);

  }
  ngAfterViewInit(): void {
    console.log("Hook After View Init");
  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log("Hook On Destroy");
  }

}
