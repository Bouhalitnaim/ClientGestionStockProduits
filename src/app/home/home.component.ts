import { Component, OnInit } from '@angular/core';
import {AppService} from '../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showHideSideBar: boolean = false;
  constructor(private appservice: AppService ,private router : Router) { }

  onShowSideBarChange(showHideSideBar) {
    this.showHideSideBar = showHideSideBar ;
  }

  ngOnInit() {
    if(!this.appservice.authenticated){
      this.router.navigateByUrl('/login');

    }else {

      this.router.navigateByUrl('/home/(contentOutlet:dashboard)');
    }
  }

}
