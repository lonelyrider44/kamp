import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MyErrorStateMatcher } from 'app/modules/shared/my-error-state-matcher';
import { NgxSpinnerService } from 'ngx-spinner';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  public previousUrl: string = null;
  public currentUrl: string = null;

  matcher = new MyErrorStateMatcher();

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  ngOnInit(): void {

    this.spinner.show();
    this.authService.signin().subscribe(
      (result) => {
        this.authService.handleData(result);

        let user = this.authService.getUser();

        this.redirect_after_login(user);
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        // this.authState.setAuthState(false);
        // this.spinner.hide();
        // console.log(error);
        // this.loginInvalid = true;

      }
    ); 
  }

  submitForm():void{
    // this.spinner.show();
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.authService.handleData(result);
        let user = this.authService.getUser();

        this.redirect_after_login(user);
      },
      (error) => {
        // this.authState.setAuthState(false);
        // this.spinner.hide();
        // console.log(error);
        // this.loginInvalid = true;

      }
    );
  }

  redirect_after_login(user: any){
    console.log(user.user_type);
    if(user.user_type=="admin"){
      this.router.navigate(['/admin/kamp']);
    }
    if(user.user_type=="roditelj"){
      this.router.navigate(['/roditelj']);
    }
    if(user.user_type=="ucesnik"){
      this.router.navigate(['/ucesnik']);
    }
    if(user.user_type=="trener"){
      this.router.navigate(['/trener']);
    }
    if(user.user_type=="lekar"){
      this.router.navigate(['/lekar']);
    }
    if(user.user_type=="oprema"){
      this.router.navigate(['/oprema']);
    }
    if(user.user_type=="prevoznik"){
      this.router.navigate(['/prevoznik']);
    }
    if(user.user_type=="hotel"){
      this.router.navigate(['/hotel']);
    }
  }
}
