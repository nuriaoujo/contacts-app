import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  contact: any;

  constructor(private contactService:ContactsService, private router:Router) { }

  ngOnInit() {
    this.contact = this.contactService.selectedContact;
  }
  goToUpdateContact(){
    this.router.navigate(['/edit-contact', this.contact.id]);
  }
}
