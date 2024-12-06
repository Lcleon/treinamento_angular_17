import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Pessoa } from '../modelo/Pessoa';
import { CommonModule } from '@angular/common';
import { validateHorizontalPosition } from '@angular/cdk/overlay';

@Component({
  selector: 'app-componente11',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './componente11.component.html',
  styleUrl: './componente11.component.css',
})
export class Componente11Component {
  /*nome: string;
  idade: number = null;*/

  //Objeto de formulário
  formulario = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(3)]),
    idade: new FormControl(null, [
      Validators.required,
      Validators.min(0),
      Validators.max(120),
      Validators.pattern(/^\d+$/), // Apenas números

    ]),
    cidade: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  //Visibilidade de botões
  btnCadastrar: boolean = true;

  //Vetor
  vetor: Pessoa[] = [];

  //Armazenar indice da pessoa selecionada
  indice:number = -1;

  //Função de cadastro
  cadastrar() {
    //Cadastro no Vetor
    this.vetor.push(this.formulario.value as Pessoa);

    //Limpeza dos inputs
    this.formulario.reset();

    //Visualização via console
    //console.table(this.vetor);

    //Função de seleção

  }

  selecionar(indice:number){

    //Atribuir o indice da pessoa
    this.indice = indice;

    //Atribuir os dados da pessoa no formulário
    this.formulario.setValue({
      nome : this.vetor[indice].nome,
      idade: this.vetor[indice].idade,
      cidade: this.vetor[indice].cidade
    });

    //Visibilidade do botões
    this.btnCadastrar = false;

  }

  //Função de alteração
  alterar(){


    //Alterar vetor
    this.vetor[this.indice] = this.formulario.value as Pessoa;

    //Limpar os inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }


  //Função de remoção
  remover(){

    //removendo pessoa do vetor
    this.vetor.splice(this.indice, 1);

    //Limpeza dos inputs
    this.formulario.reset();

    //Visibilidade dos botões
    this.btnCadastrar = true;
  }

  //Funcão de cancelamento
  cancelar(){

  //Limpeza dos inputs
  this.formulario.reset();

  //Visibilidade dos botões
  this.btnCadastrar = true;

  }

}
