import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { LineService } from 'src/app/service/line.service';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent extends BaseComponent implements OnInit {
  title: string = "Request Create";
  request: Request = new Request();  

  constructor(private reqSvc: RequestService,
    private router: Router,
    protected sysSvc: SystemService) { 
      super(sysSvc)
    }

  ngOnInit() {
    super.ngOnInit();
    this.request.user = this.loggedInUser;
  }

  save():void {
    this.reqSvc.create(this.request).subscribe(jr => {
      let err = jr.errors;
      if(err!=null){
        console.log(err);
      }
      this.router.navigateByUrl("/requests/list");
    });
  }
}
