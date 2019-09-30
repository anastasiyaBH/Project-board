import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public searchCriterion: string;
  @Output()public search = new EventEmitter<string>();

  constructor() { }

  public handleSearch(){
    this.search.emit(this.searchCriterion);
  }

  ngOnInit() {

  }

}
