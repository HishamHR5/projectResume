import { Component } from '@angular/core';

@Component({
  selector: 'app-main-scroller',
  templateUrl: './main-scroller.component.html',
  styleUrls: ['./main-scroller.component.css'],
})
export class MainScrollerComponent {
  // texts: string[] = [
  //   'Frontend Developer 💻',
  //   'Node.js Ninja 🥷',
  //   'Cloud Enthusiast ☁',
  // ];
  texts: string[] = [
    'Frontend Developer',
    'Node.js Ninja',
    'Google Cloud Enthusiast',
  ];
  displayText: string = '';
  private currentIndex = 0;
  private letterIndex = 0;
  private typingSpeed = 100;

  ngOnInit() {
    this.startTyping();
  }

  startTyping() {
    const currentText = this.texts[this.currentIndex];

    if (this.letterIndex < currentText.length) {
      this.displayText += currentText[this.letterIndex++];
      setTimeout(() => this.startTyping(), this.typingSpeed);
    } else {
      setTimeout(() => this.eraseText(), 1500); // wait before erasing
    }
  }

  eraseText() {
    if (this.letterIndex > 0) {
      this.displayText = this.displayText.slice(0, --this.letterIndex);
      setTimeout(() => this.eraseText(), 50);
    } else {
      this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      setTimeout(() => this.startTyping(), 300);
    }
  }

  routeToSnacgo(){
    window.location.href = "https://snacgo.com/"
  }
}
