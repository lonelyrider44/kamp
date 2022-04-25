import { Component} from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './modules/auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private ngxService: NgxSpinnerService, private authService: AuthService){
  }

  ngOnInit(){
    // this.ngxService.show();
    // this.authService.profileUser().subscribe(res => {
    //   this.ngxService.hide();
    // })
  }

}
