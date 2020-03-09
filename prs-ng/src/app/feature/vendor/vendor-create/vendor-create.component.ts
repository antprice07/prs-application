import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vendor-create',
  templateUrl: '../vendor-maint/vendor-maint.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {
  title:string = "Vendor Create";
  vendor: Vendor = new Vendor();

  constructor(private venSvc:VendorService,
    private router: Router) { }

  ngOnInit() {
  }

  save():void{
    this.venSvc.create(this.vendor).subscribe(jr => {
      let err:string = jr.errors;
      if(err!=null){
        console.log(`Error creating Vendor: ${err}`);
      }
      this.router.navigateByUrl("/vendors/list");
    });
  }

}
