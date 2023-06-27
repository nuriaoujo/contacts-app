import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { NewContactComponent } from './new-contact/new-contact.component';
import { ContactsChartsComponent } from './contacts-charts/contacts-charts.component';


const routes: Routes = [
  { path: '', component: ContactsChartsComponent }, //esta va a la ventana de inicio
  { path: 'contacts', component: ContactsTableComponent }, 
  { path: 'contacts', component: ContactsTableComponent }, //este va con subapartado en el http
  { path: 'contact/:id', component: ContactDetailComponent },//para que no se escriba 'id' en la ruta, sino el número del id
  { path: 'edit-contact/:id', component: EditContactComponent },
  { path: 'new-contact', component: NewContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
