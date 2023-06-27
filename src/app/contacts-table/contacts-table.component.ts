import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {
  contacts: any = [];
  contactDetail: any;
  constructor(private contactsService: ContactsService, private router:Router, public dialog:MatDialog) { }

  ngOnInit() {
    this.contactsService.getContacts().subscribe(data=> {
      this.contacts = data; //nos suscribimos a getContacts para saber cuando cambia.
    });
  }

  viewContactDetail(contact: any){
    this.contactDetail = contact;
    this.contactsService.selectedContact = this.contactDetail;
    this.router.navigate(['/contact', this.contactDetail.id]);
  }
  openConfirmationDialog(contactId: string): void{
    const dialogRef = this.dialog.open(DialogConfirmationComponent, {data: {contactId: contactId}});
  }
}
