import { Component } from '@angular/core';
import { Services } from 'src/app/services.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  visitorCount: number=0;
  constructor(private firestore: AngularFirestore) {}
  
  async ngOnInit() {
    await this.addVisitor();  // Just log the visit, no check
    this.getVisitorCount();
  }
  
  async addVisitor(): Promise<void> {
    await this.firestore.collection('visitor_counter').add({
      visitedAt: new Date()
    });
  }
  
  async getVisitorCount(): Promise<void> {
    const snapshot = await this.firestore.collection('visitor_counter').get().toPromise();
    this.visitorCount = snapshot?.size || 0;
    console.log(this.visitorCount)
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
