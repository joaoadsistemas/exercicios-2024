import { Component } from '@angular/core';

@Component({
  selector: 'app-enviado',
  templateUrl: './enviado.component.html',
  styleUrls: ['./enviado.scss'],
})
export class EnviadoComponent {
  formularioVisible: boolean = false;

  toggleFormulario() {
    this.formularioVisible = !this.formularioVisible;
  }
}
