import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent extends BaseComponent implements OnInit {

  title:string = "Request List";
  requests: Request[] = [];
  loggedInUser: User;

  constructor(private reqSvc: RequestService,
    protected sysSvc: SystemService) { 
      super(sysSvc)
    }

  ngOnInit() {
    super.ngOnInit();
    this.reqSvc.list().subscribe(jr => {
      this.requests = jr.data;
    });

  }

}
