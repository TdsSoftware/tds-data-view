import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { Observable } from 'rxjs';

import { Funcionario } from '../funcionarios';
import { FuncionariosService } from '../funcionarios.service';

@Component({
  selector: 'app-tabela-funcionario',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.scss'],
})
export class TabelaComponent implements OnInit {
  data$: Observable<Funcionario[]>;
  colunas = ['id', 'nome', 'sobrenome', 'idade', 'empresa', 'email'];

  constructor(
    private funcionariosService: FuncionariosService // private dataViewStateService: DataViewStateService
  ) {}

  ngOnInit() {
    // this.data$ = this.dataViewStateService.getData((params: Parametros) =>
    //   this.testeService.getAll(params)
    // );

    this.data$ = this.funcionariosService.getAll();
  }

  sortData(sort: Sort) {
    //this.dataViewStateService.changeSort(sort as Ordenacao);
  }

  setColor(idade: number) {
    const min = 20;
    const max = 45;
    idade = idade < min ? min : idade > max ? max : idade;
    const value = ((idade - min) * 100) / (max - min) / 100;
    const hue = ((1 - value) * 120).toString(10);
    return ['hsl(', hue, ', 100%, 50%)'].join('');
  }
}