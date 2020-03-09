import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: '../vendor-maint/vendor-maint.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {
  title: string = "Vendor Edit";
  vendor: Vendor=new Vendor();
  id: number = 0;

  constructor(private venSvc: VendorService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.venSvc.getVendor(this.id).subscribe(jr=> {
      this.vendor = jr.data as Vendor;
      console.log(this.vendor);
    });
  }
  save():void{
    this.venSvc.edit(this.vendor).subscribe(jr => {
      let err:string = jr.errors;
      if(err!=null){
        console.log(`Error editing Vendor: ${err}`);
      }
      this.router.navigateByUrl("/vendors/list");
    });
  }
}
