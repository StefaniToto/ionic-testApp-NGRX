import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes;

  constructor() { }

  ngOnInit() {}

  onClick(item) {
    console.log('you clicked on' + item);
  }

}
