import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: '../product-maint/product-maint.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  title:string = "Product Add";
  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(private prodSvc: ProductService,
    private venSvc: VendorService,
    private router: Router) { }

  ngOnInit() {
    this.venSvc.list().subscribe(jr => {
      let err: string = jr.errors;
      if(err != null){
        console.log(`Error getting vendors: ${err}`)
      }
      this.vendors = jr.data;
    });
  }

  save():void {
    this.prodSvc.create(this.product).subscribe(jr=>{
      let err: string = jr.errors;
      if(err!=null){
        console.log(`Error saving product: ${err}`);
      }
      this.router.navigateByUrl("/products/list");
    });
  }
  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

}
