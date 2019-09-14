import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
    this.formulario.valueChanges.subscribe(formValue => {
      console.log(formValue);
    });
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      edad: 18
    });
  }

}
