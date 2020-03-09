import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { LineItem } from 'src/app/model/line-item.class';
import { ActivatedRoute, Router } from '@angular/router';
import { LineService } from 'src/app/service/line.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-edit-line-items',
  templateUrl: './edit-line-items.component.html',
  styleUrls: ['./edit-line-items.component.css']
})
export class EditLineItemsComponent extends BaseComponent implements OnInit {

  title: string = "Edit Item";
  id: number;
  lineItem: LineItem;
  enableButton: boolean = false;
  doDelete: boolean = false;
  deleteMessage: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private lineSvc: LineService,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lineSvc.getLineItem(this.id).subscribe(jr => {
      this.lineItem = jr.data as LineItem;
    });
  }

  quantityChange(): void {
    this.enableButton = true;
  }

  checkDelete(): void {
    this.doDelete = true;
    this.deleteMessage = "Click delete again if you would like to permanently delete this line item.";
  }

  save(): void {
    this.lineSvc.edit(this.lineItem).subscribe(jr => {
      let err: string = jr.errors;
      if (err != null) console.log(err);
      this.router.navigateByUrl(`/requests/detail/${this.lineItem.request.id}`);
    });
  }

  delete(): void {
    this.lineSvc.delete(this.id).subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null) console.log(err);
      this.router.navigateByUrl(`/requests/detail/${this.lineItem.request.id}`);
    });
  }

}
