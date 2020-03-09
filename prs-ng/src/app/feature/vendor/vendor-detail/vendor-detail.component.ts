import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent extends BaseComponent implements OnInit {
  title: string = "Vendor Detail";
  vendor: Vendor=new Vendor();
  id: number = 0;

  constructor(private venSvc:VendorService,
    private route: ActivatedRoute,
    private router: Router,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms["id"]);
    this.venSvc.getVendor(this.id).subscribe(jr=> {
      this.vendor = jr.data as Vendor;
      console.log(this.vendor);
    });
  }

  delete():void {
    this.venSvc.delete(this.vendor.id).subscribe(jr=>{
      console.log(`Vendor deleted: ${jr}`);
      let err:string = jr.errors;
      if(err!=null){
        console.log(`Error deleting vendor ${err}`);
      }
      this.router.navigateByUrl("vendors/list");
    });
  }

}
