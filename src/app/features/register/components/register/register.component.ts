import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {User} from 'src/app/models/user.models';
import { Subscription } from 'rxjs';
import { RegisterService } from '../../service/register.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:User[]=[];
  respuesta:string='';
  private subscription: Subscription | undefined;

  registerForm= new FormGroup({
    nickname: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
  });

  nicknameControl=this.registerForm.controls['nickname'];
  emailControl=this.registerForm.controls['email'];
  passwordControl=this.registerForm.controls['password'];

  constructor(private router: Router,
    private registerService: RegisterService) { }

  ngOnInit(): void {

    //this.subscription=this.userService.getList().subscribe(user=>this.user=user);

  }
  createUser(){
    const nickname=this.nicknameControl.value;
    const email= this.emailControl.value;
    const password= this.passwordControl.value;
    this.registerService.createUser(nickname,email,password).subscribe(response=>alert(this.respuesta=response.status));
    this.router.navigate(['login']);

}
}
