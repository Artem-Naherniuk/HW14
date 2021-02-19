import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';

@Component({
  selector: 'app-phone-book',
  templateUrl: './phone-book.component.html',
  styleUrls: ['./phone-book.component.css']
})
export class PhoneBookComponent implements OnInit {

  visibleCreate: boolean;
  fN: string;
  lN: string;
  pN: string;


  allContacts: Array<any> = [];

  visibleEdit: boolean;
  fNedit: string;
  lNedit: string;
  pNedit: string;
  nowIndex: number;

  search: string;

  constructor() { }

  ngOnInit(): void { }

  add(): void {
    this.visibleCreate = true;
  }

  addFinal(): void {
    this.visibleCreate = false;

    let oneContact= {
      fName: this.fN,
      lName: this.lN,
      phoneN: this.pN
    }

    this.allContacts.push(oneContact);
    
    oneContact= {
      fName: '',
      lName: '',
      phoneN: ''
    }

    this.fN = '';
    this.lN = '';
    this.pN = '';
  }

  delete(index: number): void {
    this.allContacts.splice(index, 1);
  }

  edit(index: number): void {
    this.visibleEdit = true;
    let i = this.allContacts[index];
    this.fNedit = i.fName;
    this.lNedit = i.lName;
    this.pNedit = i.phoneN;
    this.nowIndex = index;
  }

  finalEdit(): void {
    this.visibleEdit = false;
    let obj = this.allContacts[this.nowIndex];
    
    obj.fName = this.fNedit;
    obj.lName = this.lNedit;
    obj.phoneN = this.pNedit;

    this.fN = '';
    this.lN = '';
    this.pN = '';
  }
}
