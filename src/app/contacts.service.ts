import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  selectedContact: any;

  constructor(private http:HttpClient) { }


  getContacts(): Observable<any>{
    const url= 'http://localhost:30030/contacts/getAll';
    const headers= new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa('demo:demo'))
      .set('X-User', 'demo')
      .set('X-Password', 'demo');
      return this.http.get<any>(url, { headers });
  }
  
  updateContact(contact:any):void{
    const url="http://localhost:30030/contacts/update";
    const body = contact;
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa('demo:demo'))
      .set('X-User', 'demo')
      .set('X-Password', 'demo');
      this.http.put(url, body, { headers }).subscribe(
        (error)=>{
          console.error(error);
        }
      );
  }

  newContact(contact: any): void{
    const url ="http://localhost:30030/contacts/add"; //se comprueba en Postman la ruta que creamos en intellij
    const body = contact;
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa('demo:demo'))
      .set('X-User', 'demo')
      .set('X-Password', 'demo');
    this.http.post(url,body, { headers }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    )
  }

  deleteContact(id: string): void{
    const url="http://localhost:30030/contacts/delete";
    const body={id:id};
    const headers = new HttpHeaders()
      .set('Authorization', 'Basic ' + btoa('demo:demo'))
      .set('X-User', 'demo')
      .set('X-Password', 'demo');
    this.http.post(url,body, { headers }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
