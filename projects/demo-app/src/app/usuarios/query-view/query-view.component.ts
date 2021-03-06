import { Component, OnInit } from '@angular/core';

import { QueryViewService } from 'query-view';

import { TabelaQueryViewComponent } from '../tabela-query-view/tabela-query-view.component';
import { SelectionTableService } from '../../shared/selection-table/selection-table.service';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-query-view',
  templateUrl: './query-view.component.html',
  styleUrls: ['./query-view.component.scss'],
  providers: [QueryViewService, SelectionTableService],
})
export class QueryViewComponent implements OnInit {
  table = TabelaQueryViewComponent;

  constructor(private selectionService: SelectionTableService<Usuario>) {}

  get hasSelection() {
    return this.selection > 0;
  }

  get selection() {
    return this.selectionService.selection.selected.length;
  }

  ngOnInit(): void {}

  onAddClick() {
    console.log('add record');
  }
}
