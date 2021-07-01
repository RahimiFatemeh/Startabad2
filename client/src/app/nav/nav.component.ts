import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loginForm! : FormGroup
  model : any = {}
  constructor(
    private accountService : AccountService ,
    private router : Router ,
    private toastr : ToastrService,
    private fb : FormBuilder) { }

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm()
  {
    this.loginForm = this.fb.group({
      username : ['' , [Validators.required , Validators.email]] ,
      password : ['' , Validators.required]
    })
  }
  get username()
  {
    return this.loginForm.get('username')
  }
  login() 
  {
    this.accountService.login(this.loginForm.value).subscribe(response => {
      this.toastr.success("شما با موفقیت وارد شدید")
    }, error => {
      this.toastr.error("نام کاربری یا رمز عبور اشتباه است")
    })
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl("/")
  }

}
