import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent extends BaseComponent implements OnInit {

  title: string = "Requests for Review";
  requests: Request[];

  constructor(protected sysSvc: SystemService,
    private reqSvc: RequestService) {
    super(sysSvc)
   }

  ngOnInit() {
    super.ngOnInit();
    this.reqSvc.listByUserIdNot(this.loggedInUser.id).subscribe(jr => {
      this.requests = jr.data as Request[];
    });
  }

}
