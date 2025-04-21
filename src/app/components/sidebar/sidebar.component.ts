import { Component } from '@angular/core';
import { Services } from 'src/app/services.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private visitorService: Services) {}
  ngOnInit(): void {
    this.visitorService.incrementVisitor();
  }
  routeToInsta() {
    window.location.href = 'https://www.instagram.com/hishamhr5/';
  }
  routeToLI() {
    window.location.href = 'https://www.linkedin.com/in/hisham-rs';
  }
  routeToGit() {
    window.location.href = 'https://github.com/HishamHR5';
  }
  goTohome() {
    const section = document.getElementById('home');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goTotech() {
    const section = document.getElementById('tech');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goToport() {
    const section = document.getElementById('port');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  goTocontact() {
    const section = document.getElementById('contact');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
