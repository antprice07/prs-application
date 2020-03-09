import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.class';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseComponent } from 'src/app/base/base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent extends BaseComponent implements OnInit {

  title: string = "Product Detail";
  product: Product = new Product();
  id:number = 0;

  constructor(private prodSvc: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.prodSvc.getProduct(this.id).subscribe(jr => {
      this.product = jr.data as Product;
    });
  }

  delete():void {
    this.prodSvc.delete(this.id).subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null){
        console.log(`Unable to delete product: ${err}`);
      }
      this.router.navigateByUrl("/products/list");
    });
  }

}
