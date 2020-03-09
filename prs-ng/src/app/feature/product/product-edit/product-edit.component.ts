import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product.class';
import { Vendor } from 'src/app/model/vendor.class';
import { ProductService } from 'src/app/service/product.service';
import { VendorService } from 'src/app/service/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: '../product-maint/product-maint.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  title:string = "Product Edit";
  id:number = 0;
  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(private prodSvc: ProductService,
      private venSvc: VendorService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id=parms['id']);
    this.venSvc.list().subscribe(jr => {
      this.vendors = jr.data as Vendor[];
      this.prodSvc.getProduct(this.id).subscribe(jres =>{
        this.product = jres.data as Product;
      });
    });
  }
  save():void {
    this.prodSvc.edit(this.product).subscribe(jr =>{
      let err: string = jr.errors;
      if(err!=null){
        console.log(`Error updating product: ${err}`);
      }
      this.router.navigateByUrl("/products/list")
    });
  }
  compVendor(a: Vendor, b: Vendor): boolean {
    return a && b && a.id === b.id;
  }

}
