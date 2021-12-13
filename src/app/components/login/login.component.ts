import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userForm= new FormGroup({

    email: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });
  emailControl=this.userForm.controls['email'];
  passwordControl=this.userForm.controls['password'];

  constructor() { }

  ngOnInit(): void {
  }

}
