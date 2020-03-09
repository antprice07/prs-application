import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { ActivatedRoute, Router } from '@angular/router';
import { LineService } from 'src/app/service/line.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-list-line-items',
  templateUrl: './list-line-items.component.html',
  styleUrls: ['./list-line-items.component.css']
})
export class ListLineItemsComponent extends BaseComponent implements OnInit {

  title: string = "Items on Request";
  lineItems: LineItem[];
  id: number;
  request: Request;
  deleteBool: boolean = false;
  lineItemId: number;

  constructor(private route: ActivatedRoute,
    private lineSvc: LineService,
    protected sysSvc: SystemService,
    private reqSvc: RequestService,
    private router: Router) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.reqSvc.getRequest(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.lineSvc.listLinesByRequest(this.id).subscribe(jr => {
      this.lineItems = jr.data;
    });
  }

  deleteCheck(lineId: number): void {
    this.deleteBool = true;
    this.lineItemId = lineId;
  }

  deleteLineItem():void {
    this.lineSvc.delete(this.lineItemId).subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null){
        console.log(err);
      }else {
        this.router.navigateByUrl(`/requests/detail/${this.id}`);
      }
    });
  }

}
