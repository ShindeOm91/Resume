import { Component, EventEmitter, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from "./resume/resume.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent, ContactComponent, CommonModule, ResumeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Swati_Resume';
  contact: boolean = false;
  resume: boolean = false;
  home: boolean = true;

  contactPage(event: any) {
    this.home = false;
    this.contact = true;
    this.resume = false;
  }
  resumePage(event: any) {
    this.home = false;
    this.contact = false;
    this.resume = true;
  }

  homePage(event: any) {
    this.home = true;
    this.contact = false;
    this.resume = false;
  }
}
