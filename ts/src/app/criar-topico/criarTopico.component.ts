import { Component } from '@angular/core';

@Component({
  selector: 'app-criar',
  templateUrl: './criarTopico.component.html',
  styleUrls: ['./criarTopico.scss'],
})
export class CriarComponent {
  formularioVisible: boolean = false;

  toggleFormulario() {
    this.formularioVisible = !this.formularioVisible;
  }
}
