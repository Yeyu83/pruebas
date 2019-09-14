import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formulario: any;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.formulario.valueChanges.subscribe(formValue => {
      console.log(formValue);
    });
  }

  createForm(): void {
    this.formulario = this.formBuilder.group({
      nombre: [''],
      apellidos: [''],
      edad: 18
    });
  }

}
