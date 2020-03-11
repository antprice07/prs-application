import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  title: string = "User Login";
  user: User = new User();
  message: any;

  constructor(private userSvc: UserService,
    protected sysSvc: SystemService,
    private router: Router) { 
      super(sysSvc);
    }

  ngOnInit() {
    // this.user.username="aprice";
    // this.user.password="password";
  }

  login(): void {
    this.userSvc.login(this.user).subscribe(jr => {
      if(jr.errors == null){
        this.user = jr.data as User;
        this.sysSvc.loggedInUser = this.user;
        this.router.navigateByUrl("/home");
      } else {
        this.message = jr.errors;
      }
    });
  }

}
