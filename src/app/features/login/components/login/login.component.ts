import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../service/login.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error!:string;

  userForm= new FormGroup({

    email: new FormControl('',[Validators.email,Validators.required]),
    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(12)])
  });
  emailControl=this.userForm.controls['email'];
  passwordControl=this.userForm.controls['password'];

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  submit() {
    const emailUser=this.userForm.get('email')?.value;
    const passwordUser=this.userForm.get('password')?.value;
    if (this.userForm.valid) {
      this.loginService.validateCredentials(this.userForm.get('email')?.value, this.userForm.get('password')?.value, )
      .subscribe(valid => {
        if (valid) {
          this.router.navigate(['admin']);
        } else {
          if (emailUser == 'user@gmail.com' && passwordUser =='123456'){
            localStorage.setItem('email', JSON.stringify(emailUser));
            localStorage.setItem('role', JSON.stringify('user'));
            this.router.navigate(['movies']);
          }else{
            this.error = 'User or Password invalid';
          }

        }
      })
    }


  }
}
