import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  items = [
    {
      routelink: '',
      item: 'Home',
      icon: '',
    },
    {
      routelink: '',
      item: 'About',
      icon: '',
    },
    {
      routelink: '',
      item: 'Resume',
      icon: '',
    },
    {
      routelink: '',
      item: 'Expertise',
      icon: '',
    },
  ];
  routeToInsta(){
    window.location.href = "https://www.instagram.com/hishamhr5/"
  }
  routeToLI(){
    window.location.href = "https://www.linkedin.com/in/hisham-rs"
  }
  routeToGit(){
    window.location.href = "https://github.com/HishamHR5"
  }
}
