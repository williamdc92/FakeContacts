import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})





export class ContactsComponent implements OnInit {



  constructor() { }


  surname: string = "";
  name: string = "";
  number: string = "";

  chosenObject= {surname: "", name: "", number: ""};
  OldChosenObject = {surname: "", name: "", number: ""};

  OrdSurname = true;
  OrdName = false;
  Details = false;
  Add = false;
  Edit = false;
 

  rubrica = [
    { surname: "Rossi", name: "Marcello", number: "+393255855666" },
    { surname: "Verdi", name: "Fabio", number: "+393255855668" },
    { surname: "Gialli", name: "Lucia", number: "+393255855455" },
    { surname: "Neri", name: "Guglielmo", number: "+393255855442" },
    { surname: "Ramoni", name: "Martina", number: "+393255855251" },
    { surname: "Arcimondi", name: "Francesco", number: "+393255855538" },
    { surname: "Zarat", name: "Luisa", number: "+393255855438" }
  ]

  lenght = this.rubrica.length;

  //GroupBy default by surname

  groups = this.rubrica.reduce((groups, item) => {
    const group = (groups[item.surname.charAt(0)] || []);
    group.push(item);
    groups[item.surname.charAt(0)] = group;
    return groups;
  }, {});

  FirstLetter = Object.keys(this.groups).sort();



  //Functions

  
  element(i: number) { return this.groups[this.FirstLetter[i]]; }

  push = (sn: string, nm: string, nb: string) => {

    sn = sn.charAt(0).toUpperCase() + sn.slice(1);
    nm = nm.charAt(0).toUpperCase() + nm.slice(1);

    let object = { surname: sn, name: nm, number: nb };
    this.rubrica.push(object);
    this.surname = "";
    this.name = "";
    this.number = "";
    this.chosenObject= {surname: "", name: "", number: ""};
    this.lenght= this.rubrica.length;

    this.Reorder();
    
    
  }

  remove = (sn: string, nm: string, nb: string) => {
    let index = this.rubrica.findIndex(contact => contact.surname === sn && contact.name === nm && contact.number === nb);
    this.rubrica.splice(index, 1);
    this.OldChosenObject= {surname: "", name: "", number: ""};
    this.lenght= this.rubrica.length;
    this.Reorder();
    
  }


  TakeValueOfElement = (sn: string, nm: string, nb: string) => {
    this.chosenObject = { surname: sn, name: nm, number: nb };
    this.OldChosenObject = { surname: sn, name: nm, number: nb };
    return this.chosenObject;
  }


 Reorder = () => {
  this.groups = this.rubrica.reduce((groups, item) => {
    if (this.OrdSurname===true) {
     const group = (groups[item.surname.charAt(0)] || []);
     group.push(item);
     groups[item.surname.charAt(0)] = group;  
    } else if (this.OrdName===true) {
     const group = (groups[item.name.charAt(0)] || []);
     group.push(item);
     groups[item.name.charAt(0)] = group; 
    }
  
  return groups;
  }, {});

  this.FirstLetter = Object.keys(this.groups).sort();

 }


  

  ngOnInit() {
  }

}

