import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Product } from 'src/app/model/product.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent extends BaseComponent implements OnInit {

  title: string = "Product List"
  products: Product[]=[];

  constructor(private prodSvc: ProductService,
    protected sysSvc: SystemService) { 
      super(sysSvc);
    }

  ngOnInit() {
    super.ngOnInit();
    this.prodSvc.list().subscribe(jr => {
      let err: string = jr.errors;
      if(err!=null){
        console.log(`Error getting list: ${err}`);
      }
      this.products = jr.data as Product[];
    });
  }

}
