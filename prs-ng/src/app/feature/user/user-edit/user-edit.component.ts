import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: '../user-maint/user-maint.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title: string = "User Edit";
  user: User=new User();
  id: number = 0;
  message: string;

  constructor(private userSvc:UserService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.userSvc.getUser(this.id).subscribe(jr=> {
      this.user = jr.data as User;
      console.log(this.user);
    });
  }
  save():void{
    this.message = "";
    this.userSvc.edit(this.user).subscribe(jr => {
      let err:string = jr.errors;
      if(err!=null){
        this.message = err;
        console.log(`Error editing User: ${err}`);
      }else{
      this.router.navigateByUrl("/users/list");
      }
    });
  }
}
