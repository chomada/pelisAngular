import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import {User} from 'src/app/models/user.models';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit,OnDestroy {
  user:User[]=[];
  private subscription: Subscription | undefined;

  registerForm= new FormGroup({
    nickname: new FormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(20)]),
    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
  });

  nicknameControl=this.registerForm.controls['nickname'];
  emailControl=this.registerForm.controls['email'];
  passwordControl=this.registerForm.controls['password'];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    const nickname = this.registerForm.controls['nickname'];
    const email = this.registerForm.controls['email'];
    const password = this.registerForm.controls['password'];
    this.subscription=this.userService.getList().subscribe(user=>this.user=user);

  }
  validateRegister(){

  }
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log("Hook On Destroy");
  }

}



