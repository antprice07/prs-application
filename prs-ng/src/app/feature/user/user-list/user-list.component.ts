import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent extends BaseComponent implements OnInit {

  title:string = "User List";
  users: User[] = [];
  userIsAdmin: boolean = false;

  constructor(private userSvc:UserService,
    protected sysSvc: SystemService) { 
      super(sysSvc);
    }

  ngOnInit() {
    super.ngOnInit();
    this.userSvc.list().subscribe( jr => {
      this.users = jr.data as User[];
    })
  }

}
