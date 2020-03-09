import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { BaseComponent } from 'src/app/base/base/base.component';
import { LineService } from 'src/app/service/line.service';
import { LineItem } from 'src/app/model/line-item.class';
import { getLocaleDateTimeFormat } from '@angular/common';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent extends BaseComponent implements OnInit {

  title: string = "Request Detail";
  loggedInUser: User;
  id: number;
  request: Request;
  rejected: boolean = false;
  lineItems: LineItem[];
  message: string;

  constructor(protected sysSvc: SystemService,
    private route: ActivatedRoute,
    private reqSvc: RequestService,
    private router: Router,
    private lineSvc: LineService) {
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.reqSvc.getRequest(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.lineSvc.listLinesByRequest(this.id).subscribe(jr => {
      this.lineItems = jr.data as LineItem[];
    });
  }

  submit(): void {
    this.reqSvc.submitRequest(this.request).subscribe(jr => {
      let err: string = jr.errors;
      if (err != null) {
        console.log(err);
      } else {
        this.router.navigateByUrl("/requests/list");
      }
    });
  }

  deleteCheck(): void {
    if (this.lineItems != null) {
      this.message = "There are line items on this request.  Delete all?";
    } else {
      this.message = "Are you sure you want to delete this request?";
    }
  }

  delete(): void {
    this.lineSvc.deleteAllLinesForRequest(this.id).subscribe(jres => {
      let msg: string = jres.errors;
      if (msg != null) {
        console.log(msg);
      }
      this.reqSvc.delete(this.id).subscribe(jr => {
        let err: string = jr.errors;
        if (err != null) {
          console.log(err);
        } else {
          this.router.navigateByUrl("/requests/list");
        }
      });

    });
  }
}

