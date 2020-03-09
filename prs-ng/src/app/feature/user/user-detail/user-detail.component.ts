import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user.class';
import { BaseComponent } from 'src/app/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent extends BaseComponent implements OnInit {
  title: string = "User Detail";
  user: User=new User();
  id: number = 0;

  constructor(private userSvc:UserService,
    private route: ActivatedRoute,
    private router: Router,
    protected sysSvc:SystemService) { 
      super(sysSvc);
    }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.userSvc.getUser(this.id).subscribe(jr=> {
      this.user = jr.data as User;
      console.log(this.user);
    });
  }

  delete():void {
    this.userSvc.delete(this.user.id).subscribe(jr=>{
      console.log(`User deleted: ${jr}`);
      let err:string = jr.errors;
      if(err!=null){
        console.log(`Error deleting user ${err}`);
      }
      this.router.navigateByUrl("users/list");
    });
  }

}
