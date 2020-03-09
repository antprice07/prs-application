import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent extends BaseComponent implements OnInit {

  title:string = "Vendor List"
  vendors:Vendor[]= [];

  constructor(private venSvc: VendorService,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.venSvc.list().subscribe(jr=>{
      let err = jr.errors;
      if(err!=null){
        console.log(`Error getting vendor list: ${err}`);
      }
      this.vendors = jr.data as Vendor[];
    });
  }

}
