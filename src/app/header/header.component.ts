import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() contactPage = new EventEmitter<string>();
  @Output() resumePage = new EventEmitter<string>();
  @Output() homePage = new EventEmitter<string>();
  @Output() projectPage = new EventEmitter<string>();
  name: any = "Swati Trivedi";

  gotoContact() {
    this.contactPage.emit('cancel');
  }

  gotoResume() {
    this.resumePage.emit('cancel');
  }

  gotoHome() {
    this.homePage.emit('cancel');
  }
  gotoProject(){
    this.projectPage.emit('cancel');
  }

}
