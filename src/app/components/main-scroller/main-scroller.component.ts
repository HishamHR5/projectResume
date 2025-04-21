import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
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
  form = {
    name: '',
    email: '',
    message: '',
  };
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

  routeToSnacgo() {
    window.location.href = 'https://snacgo.com/';
  }

  sendEmail() {
    const serviceID = 'service_74dxs6s';
    const templateID = 'template_i0avxhn';
    const userID = '8Mrfx8exAfz-quC3Z';

    const templateParams = {
      from_name: this.form.name,
      from_email: this.form.email,
      message: this.form.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID).then(
      () => {
        alert('Message sent successfully!');
        this.form = { name: '', email: '', message: '' };
      },
      (err) => {
        alert('Failed to send message:\n' + JSON.stringify(err));
      }
    );
  }
}
