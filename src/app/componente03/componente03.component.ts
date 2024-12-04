import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-componente03',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componente03.component.html',
  styleUrl: './componente03.component.css'
})
export class Componente03Component {

  imagem:string = './assets/arrasca.jpg';

  alterarImagem(){
    if(this.imagem === './assets/arrasca.jpg'){
      this.imagem = './assets/vitor.jpg'
    }else{
      this.imagem = './assets/arrasca.jpg'
    }
  }
}
