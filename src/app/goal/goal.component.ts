import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  title = 'tral';
  goal: Goal[] = [
    new Goal(1, 'Watch finding nemo', 'Find an online version', new Date(2020, 5, 19)),
    new Goal(2, 'Buy cookies', 'In plenty', new Date(2020, 5, 14)),
    new Goal(3, 'Get phone case', 'sparkly', new Date(2020, 5, 15)),
    new Goal(4, 'Get dog food', 'in plenty', new Date(2020, 5, 16)),
    new Goal(5, 'Solve math', 'Calculus', new Date(2020, 5, 17)),
    new Goal(6, 'Pray', 'In plenty', new Date(2020, 5, 18)),
  ];
  toggleDetails(index){
    this.goal[index].showDescription = !this.goal[index].showDescription;
  }
  deleteGoal(isComplete, index){
    if (isComplete) {
      const toDelete = confirm('Are yo sure you want to delete ${this.goal[index].name}?');

      if (toDelete) {
         this.goal.splice(index, 1 );
      }
    }
  }
  addNewGoal(goal){
    const goalLength = this.goal.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goal.push(goal);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
