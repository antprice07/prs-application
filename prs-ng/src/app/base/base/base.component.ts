import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  loggedInUser: User = null;
  isAdmin: boolean;
  isReviewer: boolean;
  sortColumn: string = 'id';
  ascOrder: boolean = true;

  constructor(protected sysSvc: SystemService) { }

  ngOnInit() {
    this.sysSvc.checkLogin();
    this.loggedInUser = this.sysSvc.loggedInUser;
    this.isAdmin = this.sysSvc.isAdmin();
    this.isReviewer= this.sysSvc.isReviewer();
  }

  logout(): void {
    this.sysSvc.loggedInUser = null;
  }

  sort(column: string): void {
    if(this.sortColumn === column) {
      this.ascOrder = !this.ascOrder;
      return;
    }
    this.ascOrder = true;
    this.sortColumn = column;
  }

}
