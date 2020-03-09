import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: '../user-maint/user-maint.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  title:string = "User Create";
  user: User = new User();
  message: string;

  constructor(private userSvc:UserService,
    private router: Router) { }

  ngOnInit() {
  }

  save():void{
    this.message = "";
    this.userSvc.create(this.user).subscribe(jr => {
      let err:string = jr.errors;
      if(err!=null){
        this.message = err;
        console.log(`Error creating User: ${err}`);
      }else{
      this.router.navigateByUrl("/users/list");
      }
    });
  }

}
