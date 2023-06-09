import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LoaderService } from 'src/app/core/services/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('drawer') drawer!: MatDrawer;
  @ViewChild('toolbar') toolbar: any;
  
  //setting drawer open by default
  isDrawerOpened = true;

  constructor(public loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  toggleDrawer() {
    this.isDrawerOpened = !this.isDrawerOpened;
    if (this.isDrawerOpened) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }

}
