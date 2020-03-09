import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { LineService } from 'src/app/service/line.service';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-request-add-lines',
  templateUrl: './request-add-lines.component.html',
  styleUrls: ['./request-add-lines.component.css']
})
export class RequestAddLinesComponent extends BaseComponent implements OnInit {

  message: string;
  title: string = "Add Items to Request";
  lineItem:LineItem = new LineItem();
  products: Product[] = [];
  id: number = 0;
  productExists: boolean = false

  constructor(private route: ActivatedRoute,
    private lineSvc: LineService,
    private prodSvc: ProductService,
    private reqSvc: RequestService,
    protected sysSvc: SystemService,
    private router: Router) {
      super(sysSvc)
     }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.reqSvc.getRequest(this.id).subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null){
        console.log(err);
      }
      this.lineItem.request = jr.data;
    });
    this.prodSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
    });
  }

  save():void{
    this.message = '';
      this.lineSvc.create(this.lineItem).subscribe(jr => {
        let err:string = jr.errors;
        if(err!=null){
           this.message = err;
        } else
        this.router.navigateByUrl(`/requests/detail/${this.id}`);
      });
    }

    cancel():void {
      this.router.navigateByUrl("/requests/detail/"+this.id);
    }
  

  contains():void {
    this.lineSvc.listLinesByRequest(this.lineItem.request.id).subscribe(jr => {
      let lineItems: LineItem[] = jr.data as LineItem[];
      for(let li of lineItems){
        if(this.lineItem.product.id == li.product.id){
          this.productExists = true;
        }
      }
    });
  }

}
