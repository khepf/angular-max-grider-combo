import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-list2",
  templateUrl: "./recipe-list2.component.html",
  styleUrls: ["./recipe-list2.component.css"]
})
export class RecipeList2Component implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2018/9/26/0/FNK_Tuscan-Chicken-Skillet_H2_s4x3.jpg"
    )
  ];

  constructor() {}

  ngOnInit(): void {}
}
