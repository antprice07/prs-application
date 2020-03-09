import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent extends BaseComponent implements OnInit {

  title:string ="Review Request"
  id: number;
  request: Request;
  rejectBool: boolean =  false;


  constructor(protected sysSvc: SystemService,
    private reqSvc: RequestService,
    private route: ActivatedRoute,
    private router: Router) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.reqSvc.getRequest(this.id).subscribe(jr => {
      this.request = jr.data;
    });
  }

  approve():void {
    this.reqSvc.approveRequest(this.request).subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null){
        console.log(err);
      }else {
        this.router.navigateByUrl("/requests/review");
      }
    });
  }

  checkReject(): void {
    this.rejectBool = true;
  }

  reject():void {
    this.reqSvc.rejectRequest(this.request).subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null){
        console.log(err);
      }else {
        this.router.navigateByUrl("/requests/review");
      }
    });
  }

}
