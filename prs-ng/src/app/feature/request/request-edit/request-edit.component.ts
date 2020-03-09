import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent extends BaseComponent implements OnInit {
  title: string = "Request Edit";
  id: number = 0;
  request: Request = new Request();  

  constructor(private reqSvc: RequestService,
    private router: Router,
    protected sysSvc: SystemService,
    private route: ActivatedRoute) { 
      super(sysSvc);
    }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.reqSvc.getRequest(this.id).subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null){
        console.log(err);
      }
      this.request = jr.data;
    });
    
  }

  save():void {
    this.reqSvc.edit(this.request).subscribe(jr => {
      let err = jr.errors;
      if(err!=null){
        console.log(err);
      }
      this.router.navigateByUrl("/requests/list");
    });
  }
}