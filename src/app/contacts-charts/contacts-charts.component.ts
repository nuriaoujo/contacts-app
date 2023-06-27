import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-charts',
  templateUrl: './contacts-charts.component.html',
  styleUrls: ['./contacts-charts.component.scss']
})
export class ContactsChartsComponent implements OnInit {
  phoneData = [];
  emailData = [];
  nameAData = [];
  nameSData = [];

  //opciones
  gradient: boolean = true;
  showLegend: boolean = false;
  showLabels: boolean = true;
  isDoughnut: boolean = true;

  colorScheme = {
    domain: ['#3f51b5', 'palevioletred']
  };

  constructor(private contactsService: ContactsService) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe((contacts: any[]) => {
      const contactsWithEmail = contacts.filter((contact) => contact.email);
      const contactsWithoutEmail = contacts.filter((contact) => !contact.email);

      this.emailData = [
        {
          name: 'Con Email',
          value: contactsWithEmail.length
        },
        {
          name: 'Sin Email',
          value: contactsWithoutEmail.length
        }
      ];
    });

    this.contactsService.getContacts().subscribe((contacts: any[]) => {
      const contactsWithPhone = contacts.filter((contact) => contact.telephone);
      const contactsWithoutPhone = contacts.filter((contact) => !contact.telephone);

      this.phoneData = [
        {
          name: 'Con Teléfono',
          value: contactsWithPhone.length
        },
        {
          name: 'Sin Teléfono',
          value: contactsWithoutPhone.length
        }
      ];
    });

    this.contactsService.getContacts().subscribe((contacts: any[]) => {
      const contactsWithS = contacts.filter((contact) =>
        contact.name != null && contact.name.includes("s")
      );
      const contactsWithoutS = contacts.filter((contact) =>
        contact.name == null || !contact.name.includes("s")
      );
    
      this.nameSData = [
        {
          name: 'Contiene S',
          value: contactsWithS.length
        },
        {
          name: 'No contiene S',
          value: contactsWithoutS.length
        }
      ];
    });
    


    this.contactsService.getContacts().subscribe((contacts: any[]) => {
      const contactsWithA = contacts.filter((contact) =>
      contact.name != null && contact.name.includes("a")
      );
      const contactsWithoutA = contacts.filter((contact) =>
      contact.name == null || !contact.name.includes("a")
      );

      this.nameAData = [
        {
          name: 'Contiene A',
          value: contactsWithA.length
        },
        {
          name: 'No contiene A',
          value: contactsWithoutA.length
        }
      ];
    });
  }
}
