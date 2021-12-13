import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm= new FormGroup({
    nickname: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  nicknameControl=this.registerForm.controls['nickname'];
  emailControl=this.registerForm.controls['email'];
  passwordControl=this.registerForm.controls['password'];

  constructor() { }

  ngOnInit(): void {
  }

}



