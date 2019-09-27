import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output()search = new EventEmitter<string>();
  public searchCriterion: string;

  constructor() { }

  public handleSearch(){
    this.search.emit(this.searchCriterion);
  }

  ngOnInit() {

  }

}
