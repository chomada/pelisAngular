import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../../models/movie.model';
import { Subscription } from 'rxjs';
import { CartService } from '../../../cart/service/cart.service';
import { MovieService } from '../../../movies/services/movie.service';
import { Route, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  movies: Movie[]=[];
  image:string='';
  valor: boolean= true;
  respuesta:string='';
  private subscription: Subscription | undefined;

  movieForm= new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    duration: new FormControl(),
    //category: new FormControl(),
    description: new FormControl(),
    image: new FormControl()
  });

  idControl=this.movieForm.controls['id'];
  nameControl=this.movieForm.controls['name'];
  durationControl=this.movieForm.controls['duration'];
  //categoryControl=this.movieForm.controls['category'];
  descriptionControl=this.movieForm.controls['description'];
  imageControl=this.movieForm.controls['image'];
  constructor(

    private adminService:AdminService,
    private router: Router
    ) {console.log("Hook Constructor"); }

  ngOnInit(): void {
    this.subscription= this.adminService.getList().subscribe(movies =>this.movies=movies);
    console.log("Hook On Init")
  }
  createMovie(){
    const id=this.idControl.value;
    const name= this.nameControl.value;
    const duration= this.durationControl.value;
    //const category= this.categoryControl.value;
    const description= this.descriptionControl.value;
    const image= this.imageControl.value.substring(12);
    this.image=image;
    console.log("esto quedo: ",image);


    this.adminService.createMovie(id,name,duration,description,image).subscribe(response=>alert(this.respuesta=response.status));

}
deleteMovie(id:number){
  this.adminService.deleteMovie(id).subscribe(response=>console.log(response))

}
updateMovie(id:number,name:string,duration:number,description:string){
   (<HTMLInputElement>document.getElementById("id")).value=id.toString();
   (<HTMLInputElement>document.getElementById("name")).value=name;
   (<HTMLInputElement>document.getElementById("duration")).value=duration.toString();
   (<HTMLInputElement>document.getElementById("description")).value=description;
  this.valor=false;
   //(<HTMLInputElement>document.getElementById("category")).value=category;
  //console.log(id,name,category,duration,image,description)

}
cerrarAdmin(){
  this.adminService.closeAdmin();

}
updateMovie2(){


const id=Number((<HTMLInputElement>document.getElementById("id")).value);
const name=(<HTMLInputElement>document.getElementById("name")).value;
const duration=Number((<HTMLInputElement>document.getElementById("duration")).value);
const description=(<HTMLInputElement>document.getElementById("description")).value;
const image=(<HTMLInputElement>document.getElementById("image")).value.substring(12);;


this.adminService.updateMovie(id,name,duration,description,image).subscribe(response=>console.log(response));

this.valor=true;

(<HTMLInputElement>document.getElementById("id")).value='';
(<HTMLInputElement>document.getElementById("name")).value='';
(<HTMLInputElement>document.getElementById("duration")).value='';
(<HTMLInputElement>document.getElementById("description")).value='';
alert("Update success");

}
}
