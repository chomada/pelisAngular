import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,OnDestroy {

  private subscription: Subscription | undefined;

  userForm= new FormGroup({

    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
  });
  emailControl=this.userForm.controls['email'];
  passwordControl=this.userForm.controls['password'];

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    console.log("Hook On Destroy");
  }
}
