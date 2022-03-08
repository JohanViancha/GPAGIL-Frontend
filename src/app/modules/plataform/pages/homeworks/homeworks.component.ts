import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component} from '@angular/core';

@Component({
  selector: 'app-homeworks',
  templateUrl: './homeworks.component.html',
  styleUrls: ['./homeworks.component.css']
})
export class HomeworksComponent{
  progress: string[] = [];
  tarea: string = '';
  todo = ['Get to work', 'Pick up groceries'];
  done = ['Get up', 'Brush teeth'];
  delete: string[] = [];

  constructor(){}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  agregarTarea(){
    if (this.tarea === '') {
      return;
    }
    this.todo.unshift(this.tarea);
    this.tarea= '';
  }
}
