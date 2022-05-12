import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
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
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      email: [''],
      password: [''],
    })
  }

  ngOnInit(): void {
    
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
  ).subscribe((event: NavigationEnd) => {
    // console.log(this.currentUrl);
     this.previousUrl = this.currentUrl;
     this.currentUrl = event.url;
  });
  }

  submitForm():void{
    // this.spinner.show();
    this.authService.signin(this.loginForm.value).subscribe(
      (result) => {
        this.authService.handleData(result);
        let user = this.authService.getUser();
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

        // if(result.user_type=='admin'){
        // }
      },
      (error) => {
        // this.authState.setAuthState(false);
        // this.spinner.hide();
        // console.log(error);
        // this.loginInvalid = true;

      }
    );
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return (control && control.invalid);
  }
}
