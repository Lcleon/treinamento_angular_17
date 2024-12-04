import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component } from '@angular/core';


@Component({
  selector: 'app-componente10',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './componente10.component.html',
  styleUrl: './componente10.component.css'
})
export class Componente10Component {

formulario = new FormGroup({
  nome: new FormControl(''),
  cidade: new FormControl('')

});

}
