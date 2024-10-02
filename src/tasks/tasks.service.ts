import {Injectable, NotFoundException} from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto";

// Injectable: sirve para indicarle a nuestra app que va a ser utilizado en varias partes de nuestro código
@Injectable()
export class TasksService {

  private tasks = [];

  getTasks() {
    return this.tasks;
  }

  getTask(id: number){

    const taskFound = this.tasks.find(task => task.id === id);

    if(!taskFound) {
      return new NotFoundException(`Task with id $${id} not found`);
    }

    return taskFound
  }

  creatingTask(task: createTaskDto) {
    console.log(task);
    this.tasks.push(task)
    return this.tasks;
  }

  updatingTask(): string {
    return 'Actualizando tarea';
  }

  updatingPatchTask(): string {
    return 'Actualizando una parte de la tarea';
  }

  deletingTask(): string {
    return 'Eliminando tarea';
  }
}