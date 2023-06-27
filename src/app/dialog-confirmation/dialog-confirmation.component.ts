import { Component, Inject, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-dialog-confirmation',
  templateUrl: './dialog-confirmation.component.html',
  styleUrls: ['./dialog-confirmation.component.scss']
})
export class DialogConfirmationComponent implements OnInit {

  contactId:string;

  constructor(private contactsService:ContactsService, public dialogRef:MatDialogRef<DialogConfirmationComponent>, @Inject(MAT_DIALOG_DATA) public data:{contactId:string}) {
    this.contactId = data.contactId;
  }

  ngOnInit() {
  }

  confirm(): void{
    this.contactsService.deleteContact(this.contactId);
    this.dialogRef.close();
  }
}
