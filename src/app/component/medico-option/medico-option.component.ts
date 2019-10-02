import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-option',
  templateUrl: './medico-option.component.html',
  styleUrls: ['./medico-option.component.css']
})
export class MedicoOptionComponent implements OnInit {
  title = 'Medico';


  constructor() { }

  ngOnInit() {
    localStorage.setItem("codTarPro",null);
  }

}
