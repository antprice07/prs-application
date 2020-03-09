import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/model/menu-item.class';
import { User } from 'src/app/model/user.class';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from 'src/app/base/base/base.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent extends BaseComponent implements OnInit {
  menuItems: MenuItem[]=[
      new MenuItem("About","/about","About the PRS"),
      new MenuItem("User","/users/list","User List"),
      new MenuItem("Vendor","/vendors/list","Vendor List"),
      new MenuItem("Product","/products/list","Product List"),
      new MenuItem("Request","/requests/list","Request List")
    ]


  constructor(protected sysSvc:SystemService) { 
    super(sysSvc);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
