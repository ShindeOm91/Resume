import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  
  onSubmit(form: any) {
    if (form.valid) {
      // Handle form submission, e.g., send data to server
      console.log('Form Submitted!', form.value);
    }
  }
}
