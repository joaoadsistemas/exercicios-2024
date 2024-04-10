import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.scss'],
})
export class FormularioComponent {
  enviado: boolean = false;
  formSubmitted: boolean = false;

  enviar(event: Event) {
    event.preventDefault();
    this.enviado = true;
    this.formSubmitted = true;
  }
}
